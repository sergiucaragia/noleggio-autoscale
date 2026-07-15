import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * API route del form preventivo.
 *
 * TODO INVIO EMAIL — il form è pronto ma l'invio email va attivato:
 *  1. Creare un account su https://resend.com (piano gratuito sufficiente)
 *  2. Verificare il dominio o usare l'indirizzo onboarding di test
 *  3. `npm install resend`
 *  4. Impostare RESEND_API_KEY in .env.local (vedi .env.example)
 *  5. Decommentare il blocco "Invio con Resend" qui sotto
 *
 * In assenza di API key la richiesta viene solo loggata lato server e
 * l'utente riceve comunque conferma (utile in sviluppo).
 */

const contactSchema = z.object({
  name: z.string().min(2).max(200),
  phone: z
    .string()
    .min(6)
    .max(30)
    .regex(/^[\d\s+\-()./]+$/),
  email: z.email().max(200),
  city: z.string().min(2).max(100),
  service: z.string().min(1).max(100),
  message: z.string().max(2000).optional(),
  privacy: z.literal(true),
  // Honeypot antispam: i bot lo compilano, gli umani no
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let data: z.infer<typeof contactSchema>;
  try {
    const body = await request.json();
    data = contactSchema.parse(body);
  } catch {
    return NextResponse.json(
      { error: "Dati non validi" },
      { status: 400 }
    );
  }

  // Honeypot compilato → probabile bot: rispondiamo ok senza fare nulla
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const subject = `Richiesta preventivo: ${data.service} a ${data.city}`;
  const text = [
    `Nome: ${data.name}`,
    `Telefono: ${data.phone}`,
    `Email: ${data.email}`,
    `Città: ${data.city}`,
    `Servizio: ${data.service}`,
    `Note: ${data.message ?? "-"}`,
  ].join("\n");

  if (!process.env.RESEND_API_KEY) {
    // Modalità sviluppo: nessuna API key configurata
    console.log("[contact] Nuova richiesta (email NON inviata, manca RESEND_API_KEY):");
    console.log(subject);
    console.log(text);
    return NextResponse.json({ ok: true });
  }

  try {
    /* ── Invio con Resend ─────────────────────────────────────────────
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Sito Noleggio Autoscale <onboarding@resend.dev>", // TODO: usare dominio verificato
      to: process.env.CONTACT_EMAIL ?? "stefanotraslochitorino@gmail.com",
      replyTo: data.email,
      subject,
      text,
    });
    ─────────────────────────────────────────────────────────────────── */
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Errore invio email:", err);
    return NextResponse.json(
      { error: "Errore durante l'invio" },
      { status: 500 }
    );
  }
}

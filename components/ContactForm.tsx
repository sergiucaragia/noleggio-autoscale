"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { business, links } from "@/lib/config";
import { services } from "@/lib/services";
import { PhoneIcon, WhatsAppIcon } from "./icons";

const contactSchema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome"),
  phone: z
    .string()
    .min(6, "Inserisci un numero di telefono valido")
    .regex(/^[\d\s+\-()./]+$/, "Inserisci un numero di telefono valido"),
  email: z.email("Inserisci un indirizzo email valido"),
  city: z.string().min(2, "Indica la città dell'intervento"),
  service: z.string().min(1, "Seleziona il servizio che ti interessa"),
  message: z.string().max(2000).optional(),
  privacy: z.literal(true, {
    error: "Devi accettare l'informativa privacy",
  }),
  // Honeypot antispam: deve restare vuoto
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  ...services.map((s) => s.name),
  "Pratiche occupazione suolo pubblico",
  "Altro / non so",
];

export default function ContactForm({
  idPrefix = "",
}: {
  /** Prefisso per gli id dei campi, necessario se il form è renderizzato
   * più volte nella stessa pagina (es. hero + sezione countdown) per
   * evitare id HTML duplicati. */
  idPrefix?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      // trailing slash: URL canonico con slash finale (vedi next.config.ts)
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Invio non riuscito");
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";
  const labelClass = "mb-1.5 block text-sm font-semibold text-gray-800";
  const errorClass = "mt-1 text-sm text-red-600";

  if (status === "ok") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="mb-2 text-xl font-bold text-green-800">
          Richiesta inviata!
        </p>
        <p className="mb-6 text-green-700">
          Ti ricontatteremo al più presto. Per urgenze chiamaci direttamente al{" "}
          <a href={links.tel} className="font-bold underline">
            {business.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-green-800 underline"
        >
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}name`} className={labelClass}>
            Nome e cognome *
          </label>
          <input
            id={`${idPrefix}name`}
            type="text"
            autoComplete="name"
            placeholder="Mario Rossi"
            className={inputClass}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor={`${idPrefix}phone`} className={labelClass}>
            Telefono *
          </label>
          <input
            id={`${idPrefix}phone`}
            type="tel"
            autoComplete="tel"
            placeholder="320 123 4567"
            className={inputClass}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor={`${idPrefix}email`} className={labelClass}>
            Email *
          </label>
          <input
            id={`${idPrefix}email`}
            type="email"
            autoComplete="email"
            placeholder="mario.rossi@email.it"
            className={inputClass}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor={`${idPrefix}city`} className={labelClass}>
            Città dell'intervento *
          </label>
          <input
            id={`${idPrefix}city`}
            type="text"
            placeholder="Torino"
            className={inputClass}
            {...register("city")}
          />
          {errors.city && <p className={errorClass}>{errors.city.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}service`} className={labelClass}>
            Servizio richiesto *
          </label>
          <select
            id={`${idPrefix}service`}
            className={inputClass}
            defaultValue=""
            {...register("service")}
          >
            <option value="" disabled>
              Seleziona un servizio…
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className={errorClass}>{errors.service.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}message`} className={labelClass}>
            Note (piano, indirizzo, date, dettagli del lavoro)
          </label>
          <textarea
            id={`${idPrefix}message`}
            rows={4}
            placeholder="Es. trasloco al 6° piano in via Roma 10, sabato mattina…"
            className={inputClass}
            {...register("message")}
          />
        </div>

        {/* Honeypot antispam: nascosto agli utenti reali */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${idPrefix}website`}>Non compilare questo campo</label>
          <input
            id={`${idPrefix}website`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300"
              {...register("privacy")}
            />
            <span>
              Ho letto l'informativa{" "}
              <a
                href="/privacy-policy/"
                className="text-brand-600 underline"
                target="_blank"
              >
                privacy
              </a>{" "}
              e acconsento al trattamento dei dati per essere ricontattato. *
            </span>
          </label>
          {errors.privacy && (
            <p className={errorClass}>{errors.privacy.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-lg bg-accent-600 px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Invio in corso…" : "Richiedi preventivo gratuito"}
      </button>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-700">
          Si è verificato un errore nell'invio. Riprova oppure contattaci
          direttamente:{" "}
          <a href={links.tel} className="font-bold underline">
            <PhoneIcon className="inline h-4 w-4" /> {business.phoneDisplay}
          </a>{" "}
          o{" "}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            <WhatsAppIcon className="inline h-4 w-4" /> WhatsApp
          </a>
          .
        </p>
      )}

      <p className="mt-4 text-center text-xs text-gray-400">
        * Campi obbligatori — Rispondiamo entro poche ore, 7 giorni su 7.
      </p>
    </form>
  );
}

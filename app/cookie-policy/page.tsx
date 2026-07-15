import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import ManageCookiesButton from "@/components/ManageCookiesButton";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | Noleggio Autoscale",
  description:
    "Informativa sull'uso dei cookie del sito di Noleggio Autoscale: cookie tecnici e, previo consenso, cookie analitici e di marketing.",
  path: "/cookie-policy",
});

const cookieTable = [
  {
    category: "Necessari",
    name: "cookie_consent",
    purpose: "Ricorda le tue preferenze sui cookie, così il banner non ricompare a ogni visita.",
    duration: "180 giorni",
  },
  {
    category: "Analitici",
    name: "_ga, _ga_*, _gid (Google Analytics 4)",
    purpose: "Statistiche aggregate e anonime sull'utilizzo del sito. Attivi solo se acconsenti.",
    duration: "fino a 2 anni",
  },
  {
    category: "Marketing",
    name: "es. _fbp (Meta Pixel), se attivato",
    purpose: "Misurazione dell'efficacia delle campagne pubblicitarie. Attivi solo se acconsenti.",
    duration: "fino a 90 giorni",
  },
];

/**
 * NOTA LEGALE: testo base da far validare da un consulente privacy prima
 * della pubblicazione definitiva. Il banner di consenso è implementato in
 * components/CookieConsent.tsx — vedi anche lib/cookieConsent.ts per il
 * funzionamento tecnico (blocco script, durata del consenso, ecc.).
 */
export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookie-policy/" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-black text-brand-900">
          Cookie Policy
        </h1>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Cosa sono i cookie
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          I cookie sono piccoli file di testo che i siti visitati inviano al
          dispositivo dell'utente, dove vengono memorizzati per essere
          ritrasmessi agli stessi siti alla visita successiva.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Le categorie di cookie che usiamo
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Al primo accesso ti chiediamo di scegliere quali categorie
          autorizzare tramite il banner in basso. Puoi accettare tutto,
          rifiutare tutto o personalizzare la scelta categoria per
          categoria. I cookie <strong>Necessari</strong> sono sempre attivi
          perché indispensabili al funzionamento del sito; tutti gli altri
          restano disattivati finché non dai il consenso esplicito.
        </p>

        <div className="mb-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-brand-900">Categoria</th>
                <th className="px-4 py-3 font-semibold text-brand-900">Cookie</th>
                <th className="px-4 py-3 font-semibold text-brand-900">Finalità</th>
                <th className="px-4 py-3 font-semibold text-brand-900">Durata</th>
              </tr>
            </thead>
            <tbody>
              {cookieTable.map((row) => (
                <tr key={row.category} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-brand-900">{row.category}</td>
                  <td className="px-4 py-3 text-gray-600">{row.name}</td>
                  <td className="px-4 py-3 text-gray-600">{row.purpose}</td>
                  <td className="px-4 py-3 text-gray-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm text-gray-500">
          Elenco indicativo: se in futuro attiviamo nuovi strumenti di
          analisi o marketing, questa tabella verrà aggiornata di
          conseguenza.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Come gestire le tue preferenze
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Puoi cambiare idea in qualsiasi momento, riaprendo il pannello di
          consenso da qui:
        </p>
        <ManageCookiesButton className="mb-6 inline-flex items-center rounded-lg bg-brand-900 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-brand-800" />
        <p className="mb-4 leading-relaxed text-gray-700">
          Puoi inoltre gestire o eliminare i cookie già installati tramite le
          impostazioni del tuo browser. La disabilitazione dei cookie
          tecnici può compromettere il corretto funzionamento del sito.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Cookie di terze parti
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Alcuni cookie analitici o di marketing possono essere installati
          da servizi di terze parti (es. Google Analytics). Il trattamento
          dei dati da parte di questi servizi è regolato dalle rispettive
          informative privacy, che ti invitiamo a consultare sui siti dei
          rispettivi fornitori.
        </p>

        <p className="mb-4 leading-relaxed text-gray-700">
          Per ogni informazione sul trattamento dei dati personali consulta la{" "}
          <Link
            href="/privacy-policy/"
            className="font-semibold text-brand-600 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          o scrivi a {business.email}.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          Ultimo aggiornamento: luglio 2026. Testo base da validare prima
          della pubblicazione definitiva.
        </p>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | Noleggio Autoscale",
  description:
    "Informativa sull'uso dei cookie del sito di Noleggio Autoscale: cookie tecnici e, previo consenso, cookie statistici di Google Analytics.",
  path: "/cookie-policy",
});

/**
 * NOTA LEGALE: testo base da validare prima della pubblicazione.
 * Se si attivano GA4/GTM è OBBLIGATORIO integrare un banner di consenso
 * (CMP) conforme alle Linee Guida del Garante — vedi SEO-CHECKLIST.md.
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
          Cookie utilizzati da questo sito
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          <strong>Cookie tecnici:</strong> questo sito utilizza esclusivamente
          cookie tecnici necessari al funzionamento, per i quali non è
          richiesto consenso.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          <strong>Cookie statistici e di marketing:</strong> qualora vengano
          attivati strumenti di analisi (Google Analytics 4) o marketing,
          i relativi cookie saranno installati solo previo consenso espresso
          tramite il banner dedicato. L'elenco completo e aggiornato dei
          cookie di terze parti sarà disponibile in questa pagina.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Gestione dei cookie
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          L'utente può gestire le preferenze sui cookie tramite le impostazioni
          del proprio browser, ed eliminare in ogni momento i cookie già
          installati. La disabilitazione dei cookie tecnici può compromettere
          il corretto funzionamento del sito.
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

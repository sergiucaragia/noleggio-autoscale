import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Noleggio Autoscale",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per il sito di Noleggio Autoscale.",
  path: "/privacy-policy",
});

/**
 * NOTA LEGALE: questo è un testo base da far verificare a un consulente
 * privacy prima della pubblicazione definitiva. In alternativa, generare
 * l'informativa con un servizio dedicato (es. Iubenda) e sostituire questa
 * pagina. Completare i campi contrassegnati con TODO.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-black text-brand-900">
          Privacy Policy
        </h1>
        <p className="mb-4 leading-relaxed text-gray-700">
          Informativa resa ai sensi degli artt. 13 e 14 del Regolamento UE
          2016/679 (GDPR) agli utenti che consultano questo sito e utilizzano
          il modulo di contatto.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Titolare del trattamento
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          {business.legalName} — {business.address.street},{" "}
          {business.address.postalCode} {business.address.city} — P.IVA{" "}
          {business.vatNumber} — Email: {business.email}
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Dati raccolti e finalità
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          I dati personali forniti volontariamente tramite il modulo di
          richiesta preventivo (nome, telefono, email, città, dettagli della
          richiesta) sono trattati al solo fine di rispondere alla richiesta e
          formulare il preventivo. La base giuridica è l'esecuzione di misure
          precontrattuali richieste dall'interessato (art. 6.1.b GDPR).
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          I sistemi informatici preposti al funzionamento del sito acquisiscono
          inoltre, nel corso del loro normale esercizio, alcuni dati di
          navigazione (indirizzi IP, orari di accesso, pagine visitate) la cui
          trasmissione è implicita nei protocolli di comunicazione di Internet.
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Conservazione e comunicazione
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          I dati delle richieste di preventivo sono conservati per il tempo
          necessario a gestire la richiesta e per eventuali obblighi di legge.
          Non sono oggetto di diffusione né di processi decisionali
          automatizzati. Possono venire a conoscenza dei dati i soggetti
          incaricati della gestione del sito e dell'invio delle email
          (fornitori di servizi tecnici, in qualità di responsabili del
          trattamento).
        </p>

        <h2 className="mb-3 mt-8 text-xl font-bold text-brand-900">
          Diritti dell'interessato
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Ai sensi degli artt. 15-22 GDPR, l'interessato può chiedere in ogni
          momento l'accesso ai propri dati, la rettifica, la cancellazione, la
          limitazione del trattamento e l'opposizione, scrivendo a{" "}
          {business.email}. È inoltre possibile proporre reclamo al Garante per
          la protezione dei dati personali.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          Ultimo aggiornamento: luglio 2026. Testo base da validare con un
          consulente privacy prima della pubblicazione definitiva.
        </p>
      </article>
    </>
  );
}

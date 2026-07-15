import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { praticheService } from "@/lib/services";
import { serviceSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: praticheService.metaTitle,
  description: praticheService.metaDescription,
  path: `/${praticheService.slug}`,
});

const faq = [
  {
    question: "Quanto tempo serve per ottenere il permesso di occupazione suolo pubblico?",
    answer:
      "Dipende dal Comune: a Torino la pratica ordinaria richiede in genere da 5 a 10 giorni lavorativi. Per questo consigliamo di contattarci appena hai una data indicativa dell'intervento.",
  },
  {
    question: "Quanto costa l'occupazione di suolo pubblico?",
    answer:
      "Il costo si compone del canone comunale (COSAP/canone unico, calcolato su metri quadri e durata) e del nostro servizio di gestione pratica. Nel preventivo trovi entrambe le voci, separate e trasparenti.",
  },
  {
    question: "Cosa succede se occupo il suolo pubblico senza permesso?",
    answer:
      "Si rischiano sanzioni amministrative, la rimozione forzata del mezzo e l'interruzione del lavoro. Inoltre, senza divieto di sosta posizionato nei termini, le auto parcheggiate non possono essere rimosse e l'intervento può saltare.",
  },
  {
    question: "Gestite anche l'accesso in ZTL a Torino?",
    answer:
      "Sì: per gli interventi nella ZTL di Torino richiediamo anche il permesso di accesso temporaneo dei mezzi operativi, in coordinamento con la pratica di occupazione suolo.",
  },
];

const steps = [
  {
    title: "Ci comunichi data e indirizzo",
    text: "Bastano l'indirizzo esatto dell'intervento, la data desiderata e il tipo di mezzo. Al resto pensiamo noi.",
  },
  {
    title: "Prepariamo e presentiamo la pratica",
    text: "Compiliamo la domanda con planimetria dell'ingombro e la presentiamo all'ufficio competente del Comune, seguendo l'iter fino al rilascio.",
  },
  {
    title: "Posizioniamo la segnaletica",
    text: "Almeno 48 ore prima posiamo i cartelli di divieto di sosta con gli estremi dell'ordinanza e documentiamo tutto con foto datate.",
  },
  {
    title: "Il giorno dell'intervento è tutto pronto",
    text: "Area libera, permesso valido, mezzo posizionato: il lavoro parte in orario e in regola.",
  },
];

export default function PraticheOspPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: praticheService.name,
          description: praticheService.metaDescription,
          path: `/${praticheService.slug}`,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          {
            name: "Transenne e segnaletica",
            path: "/noleggio-transenne-segnaletica/",
          },
          {
            name: "Pratiche occupazione suolo pubblico",
            path: `/${praticheService.slug}/`,
          },
        ]}
      />

      <PageHero
        eyebrow="Pratiche comunali"
        title={praticheService.h1}
        description="Permesso comunale, ordinanza e segnaletica obbligatoria: gestiamo noi tutta la burocrazia dell'occupazione suolo pubblico, a Torino e nei comuni della provincia."
      />

      <article className="mx-auto max-w-4xl px-4 py-12">
        <p className="mb-4 leading-relaxed text-gray-700">
          Ogni volta che un'autoscala o un camion per il trasloco
          occupano — anche solo in parte — carreggiata, marciapiede o
          parcheggi, serve l'<strong>autorizzazione del Comune</strong>. La
          pratica richiede domanda, planimetria, pagamento del canone e posa
          della segnaletica nei termini di legge: farla da soli significa code
          agli sportelli, moduli e tempi morti. Noi la gestiamo ogni settimana
          e sappiamo esattamente cosa serve, in quale ufficio e con che
          anticipo.
        </p>
        <p className="mb-10 leading-relaxed text-gray-700">
          Il servizio è incluso su richiesta in tutti i nostri noleggi — dall'
          <Link
            href="/noleggio-autoscale/"
            className="font-semibold text-brand-600 hover:underline"
          >
            autoscala
          </Link>{" "}
          alle{" "}
          <Link
            href="/noleggio-transenne-segnaletica/"
            className="font-semibold text-brand-600 hover:underline"
          >
            transenne
          </Link>{" "}
          — ma è disponibile anche da solo, per esempio se il mezzo lo hai già
          o lavori con un'altra impresa.
        </p>

        <h2 className="mb-8 text-2xl font-bold text-brand-900">
          Come funziona
        </h2>
        <ol className="mb-12 space-y-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-600 text-lg font-black text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1 font-bold text-brand-900">{step.title}</h3>
                <p className="leading-relaxed text-gray-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mb-4 text-2xl font-bold text-brand-900">
          Quando serve il permesso
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Serve praticamente sempre quando si lavora da strada pubblica:
          traslochi con autoscala, ponteggi, cantieri edili, ma anche il
          semplice furgone in seconda fila per un carico prolungato. Non
          serve solo se l'intervento avviene interamente su
          area privata (cortile, giardino, piazzale aziendale). Nel dubbio,
          chiedici: la valutazione è gratuita. Per approfondire, leggi la
          nostra guida{" "}
          <Link
            href="/blog/occupazione-suolo-pubblico-quando-serve/"
            className="font-semibold text-brand-600 hover:underline"
          >
            su quando serve l'occupazione di suolo pubblico
          </Link>
          .
        </p>

        <div className="mt-12">
          <FAQAccordion
            items={faq}
            title="Domande frequenti sull'occupazione suolo pubblico"
          />
        </div>
      </article>

      <CTASection
        title="Lascia la burocrazia a noi"
        subtitle="Indirizzo, data e tipo di intervento: ci occupiamo noi del resto. Preventivo gratuito in giornata."
      />
    </>
  );
}

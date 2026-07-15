import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services, praticheService } from "@/lib/services";
import { cities } from "@/lib/cities";
import { serviceSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

const service = services[1]; // noleggio-transenne-segnaletica

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faq = [
  {
    question: "Con quanto anticipo va posizionata la segnaletica di divieto di sosta?",
    answer:
      "Per essere efficace ai fini della rimozione dei veicoli, la segnaletica di divieto di sosta temporaneo va posizionata almeno 48 ore prima dell'inizio dell'occupazione, come previsto dal Codice della Strada. Ce ne occupiamo noi, con documentazione fotografica datata.",
  },
  {
    question: "Il noleggio comprende consegna e ritiro?",
    answer:
      "Sì: consegniamo, posizioniamo e ritiriamo transenne e segnaletica direttamente sul posto, a Torino e in provincia. Non devi movimentare nulla.",
  },
  {
    question: "Posso noleggiare solo le transenne senza la pratica comunale?",
    answer:
      "Certo. Se hai già il permesso o l'area è privata, ti forniamo solo il materiale. Se invece serve l'autorizzazione, possiamo gestire pratica e noleggio insieme: è la formula più comoda.",
  },
  {
    question: "Cosa noleggiate oltre alle transenne?",
    answer:
      "Cartelli di divieto di sosta con ordinanza, segnaletica di cantiere temporanea, coni, new jersey in plastica, nastri e reti di delimitazione. Per esigenze particolari chiedici disponibilità.",
  },
];

export default function NoleggioTransenneSegnaleticaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Noleggio transenne e segnaletica stradale",
          description: service.metaDescription,
          path: `/${service.slug}`,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Transenne e segnaletica", path: `/${service.slug}/` },
        ]}
      />

      {/* TODO FOTO: sostituire con foto reale di transenne/segnaletica posate */}
      <PageHero
        eyebrow="Transenne e segnaletica"
        title={service.h1}
        description="Transenne, cartelli e segnaletica temporanea con consegna, posa e ritiro inclusi. E se serve il permesso comunale, la pratica la gestiamo noi."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-4 leading-relaxed text-gray-700">
              Un trasloco con il camion in strada, un cantiere edile, un
              evento, la posa di un ponteggio: ogni volta che occupi suolo
              pubblico devi <strong>delimitare l'area e segnalarla</strong>{" "}
              secondo il Codice della Strada. Noleggiamo tutto il necessario —
              transenne, cartelli di divieto di sosta, segnaletica di cantiere
              — e lo posiamo noi, nei tempi giusti e a norma.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Il servizio è pensato per privati, imprese e amministratori di
              condominio che non vogliono perdere tempo tra uffici comunali e
              trasporto di materiale: dalla richiesta del permesso alla
              rimozione finale, hai un solo interlocutore.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-900">
              Cosa noleggiamo
            </h2>
            <ul className="mb-6 space-y-3">
              {[
                "Transenne modulari zincate per delimitare aree di lavoro e cantieri.",
                "Cartelli di divieto di sosta temporaneo con estremi dell'ordinanza.",
                "Segnaletica stradale temporanea di cantiere (frecce, restringimenti, lavori in corso).",
                "Coni, delimitatori flessibili e nastri segnaletici.",
                "New jersey in plastica zavorrabili per chiusure più robuste.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-900">
              Pratica comunale inclusa, se ti serve
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              La segnaletica da sola non basta: per occupare legittimamente
              strada, marciapiede o parcheggi serve l'autorizzazione del
              Comune. Con il servizio di{" "}
              <Link
                href={`/${praticheService.slug}/`}
                className="font-semibold text-brand-600 hover:underline"
              >
                gestione pratiche di occupazione suolo pubblico
              </Link>{" "}
              presentiamo noi la richiesta, seguiamo l'iter fino al rilascio e
              posizioniamo la segnaletica obbligatoria almeno 48 ore prima,
              con foto datate come prova. Tu devi solo indicarci data e
              indirizzo.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Il noleggio di transenne e segnaletica è spesso abbinato al
              nostro servizio di{" "}
              <Link
                href="/noleggio-autoscale/"
                className="font-semibold text-brand-600 hover:underline"
              >
                noleggio autoscale
              </Link>
              : in un unico preventivo hai mezzo, permesso e area delimitata.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-brand-900">
                Servizio collegato
              </h2>
              <Link
                href={`/${praticheService.slug}/`}
                className="block rounded-lg bg-brand-900 p-5 text-white transition-colors hover:bg-brand-800"
              >
                <span className="mb-1 block font-bold">
                  Pratiche occupazione suolo pubblico
                </span>
                <span className="text-sm text-brand-100">
                  Permessi comunali gestiti da noi, dalla richiesta al rilascio.
                </span>
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-brand-900">
                Altri servizi
              </h2>
              <ul className="space-y-2 text-sm">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}/`}
                        className="text-gray-700 hover:text-brand-600 hover:underline"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-brand-900">
                Zone servite
              </h2>
              <ul className="space-y-2 text-sm">
                {cities.slice(0, 6).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}/`}
                      className="text-gray-700 hover:text-brand-600 hover:underline"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <FAQAccordion
            items={faq}
            title="Domande frequenti su transenne e segnaletica"
          />
        </div>
      </article>

      <CTASection
        title="Preventivo per transenne e segnaletica"
        subtitle="Dicci dove, quando e per quanto tempo: ti quotiamo materiale, posa e — se serve — la pratica comunale."
      />
    </>
  );
}

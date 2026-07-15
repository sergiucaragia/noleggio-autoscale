import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services, autoscalaModels } from "@/lib/services";
import { cities } from "@/lib/cities";
import { serviceSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

const service = services[0]; // noleggio-autoscale

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faq = [
  {
    question: "Serve un permesso per posizionare l'autoscala in strada?",
    answer:
      "Se il mezzo occupa carreggiata, marciapiede o parcheggi pubblici serve il permesso di occupazione suolo pubblico rilasciato dal Comune. Ci occupiamo noi dell'intera pratica, compresa la segnaletica di divieto di sosta da posizionare 48 ore prima.",
  },
  {
    question: "Quanto tempo prima devo prenotare l'autoscala?",
    answer:
      "Per interventi senza occupazione di suolo pubblico bastano spesso 24-48 ore. Se serve il permesso comunale, considera in genere 5-10 giorni lavorativi per il rilascio, a seconda del Comune. Ti consigliamo di contattarci appena hai una data.",
  },
  {
    question: "L'operatore è incluso nel noleggio?",
    answer:
      "Sì, il noleggio è con operatore qualificato incluso (nolo a caldo): guida il mezzo, lo posiziona e manovra la scala per tutta la durata dell'intervento. Non ti serve alcuna abilitazione.",
  },
  {
    question: "Cosa succede in caso di maltempo?",
    answer:
      "Con vento forte o temporali l'intervento in quota non è sicuro e viene riprogrammato senza costi aggiuntivi. Monitoriamo le previsioni e ti avvisiamo per tempo per concordare una nuova data.",
  },
];

export default function NoleggioAutoscalePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Noleggio autoscale",
          description: service.metaDescription,
          path: `/${service.slug}`,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Noleggio autoscale", path: `/${service.slug}/` },
        ]}
      />

      {/* TODO FOTO: aggiungere qui una foto reale dell'autoscala in azione */}
      <PageHero
        eyebrow="Noleggio autoscale"
        title={service.h1}
        description="Autoscale dal 1° al 12° piano con operatore qualificato per traslochi, sgomberi, potature e lavori in quota. Interveniamo in tutta Torino e provincia, 7 giorni su 7."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="prose-custom lg:col-span-2">
            <p className="mb-4 leading-relaxed text-gray-700">
              Devi portare un divano all'ottavo piano, svuotare una mansarda,
              potare un albero alto o sistemare una grondaia? Con
              un'<strong>autoscala a noleggio</strong> eviti ore di scale, il
              rischio di danni nel vano scale e i costi di un ponteggio. Il
              nostro operatore posiziona il mezzo, stende la scala telescopica
              fino al punto esatto e movimenta materiali e mobili in totale
              sicurezza.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              La nostra flotta copre <strong>dal 1° al 12° piano</strong>:
              dal monolocale al secondo piano del centro storico di Torino fino
              ai condomini più alti della periferia. Tutti i mezzi sono
              revisionati e sottoposti alle verifiche periodiche di legge, e il
              noleggio include sempre un operatore abilitato — tu non devi
              guidare né manovrare nulla.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-900">
              A cosa serve un'autoscala
            </h2>
            <ul className="mb-6 space-y-3">
              {[
                "Traslochi e sgomberi ai piani alti: mobili, elettrodomestici, casse e scatoloni salgono e scendono dall'esterno, senza toccare le scale condominiali.",
                "Potature e abbattimenti controllati di alberi ad alto fusto.",
                "Manutenzione di tetti, grondaie, cornicioni e facciate.",
                "Installazione di condizionatori, tende da sole, insegne e antenne.",
                "Recupero di materiali da solai, mansarde e coperture.",
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
              Come funziona il noleggio
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Funziona in tre passaggi. <strong>1) Contattaci</strong> per
              telefono, WhatsApp o con il form: ci descrivi il lavoro, il piano
              e l'indirizzo, e ti diamo un preventivo gratuito in giornata.{" "}
              <strong>2) Organizziamo tutto noi</strong>: se serve, richiediamo
              il permesso di occupazione suolo pubblico al Comune e posizioniamo
              la segnaletica di divieto di sosta.{" "}
              <strong>3) Il giorno dell'intervento</strong> il nostro operatore
              arriva con il mezzo, lo stabilizza e lavora con te fino al
              termine. Paghi solo quanto concordato, senza sorprese.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Non sai che altezza ti serve? Come regola pratica conta circa 3
              metri per piano: fino al 6° piano è sufficiente un'autoscala da
              24 metri, fino al 9° piano serve la 34 metri, oltre si passa
              alla 45 metri. Se il mezzo non può accostarsi al palazzo (dehors,
              alberi, auto in sosta) meglio abbondare in altezza: al telefono
              ti consigliamo il mezzo giusto, e per i casi complessi facciamo
              un sopralluogo gratuito.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-900">
              Le nostre autoscale
            </h2>
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              {autoscalaModels.map((m) => (
                <Link
                  key={m.slug}
                  href={`/${m.slug}/`}
                  className="group rounded-lg border border-gray-200 p-5 transition-all hover:border-brand-200 hover:shadow-md"
                >
                  <p className="mb-1 text-2xl font-black text-accent-600">
                    {m.height} metri
                  </p>
                  <p className="mb-2 font-bold text-brand-900">{m.floors}</p>
                  <p className="mb-2 text-sm text-gray-600">{m.excerpt}</p>
                  <span className="text-sm font-semibold text-brand-600 group-hover:underline">
                    Vai alla scheda →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar link interni */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-brand-900">
                Zone servite
              </h2>
              <ul className="space-y-2 text-sm">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}/`}
                      className="text-gray-700 hover:text-brand-600 hover:underline"
                    >
                      Noleggio autoscale {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-brand-900">
                Altri servizi
              </h2>
              <ul className="space-y-2 text-sm">
                {services.slice(1).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}/`}
                      className="text-gray-700 hover:text-brand-600 hover:underline"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/pratiche-occupazione-suolo-pubblico/"
                    className="text-gray-700 hover:text-brand-600 hover:underline"
                  >
                    Pratiche occupazione suolo pubblico
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <FAQAccordion
            items={faq}
            title="Domande frequenti sul noleggio autoscale"
          />
        </div>
      </article>

      <CTASection title="Preventivo gratuito per il noleggio autoscala" />
    </>
  );
}

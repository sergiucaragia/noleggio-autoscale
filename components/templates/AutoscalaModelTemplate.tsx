import Link from "next/link";
import type { AutoscalaModel } from "@/lib/services";
import { autoscalaModels } from "@/lib/services";
import { cities } from "@/lib/cities";
import { serviceSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

/**
 * Template pagina "Noleggio autoscala X metri".
 * Contenuto composto dai dati in lib/services.ts (autoscalaModels).
 */
export default function AutoscalaModelTemplate({
  model,
}: {
  model: AutoscalaModel;
}) {
  const faq = [
    {
      question: `Fino a che piano arriva un'autoscala da ${model.height} metri?`,
      answer: `In condizioni normali (mezzo accostato all'edificio, nessun ostacolo) un'autoscala da ${model.height} metri lavora comodamente ${model.floors}. Ostacoli come dehors, alberi o auto in sosta riducono l'altezza utile: in caso di dubbio facciamo un sopralluogo gratuito.`,
    },
    {
      question: `Quanto costa noleggiare l'autoscala da ${model.height} metri?`,
      answer:
        "Il prezzo dipende dalla durata (ore o giornata), dalla zona e dalla necessità di permessi comunali. Chiamaci o scrivici su WhatsApp con piano e indirizzo: il preventivo è gratuito e arriva in giornata.",
    },
    {
      question: "L'operatore è compreso nel prezzo?",
      answer:
        "Sì: tutti i nostri noleggi includono un operatore qualificato che guida, posiziona e manovra il mezzo per l'intera durata dell'intervento.",
    },
  ];

  const otherModels = autoscalaModels.filter((m) => m.slug !== model.slug);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: model.name,
          description: model.metaDescription,
          path: `/${model.slug}`,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Noleggio autoscale", path: "/noleggio-autoscale/" },
          { name: model.name, path: `/${model.slug}/` },
        ]}
      />

      {/* TODO FOTO: sostituire con foto reale dell'autoscala da {model.height} m */}
      <section className="relative overflow-hidden bg-brand-900">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-10 select-none text-[11rem] font-bold leading-none text-white/[0.05] sm:text-[16rem]"
        >
          {model.height}
        </span>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Noleggio autoscale
          </p>
          <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            {model.h1}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-200">
            {model.excerpt} Con operatore qualificato incluso, a Torino e in
            tutta la provincia.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-4 leading-relaxed text-gray-700">
              L'autoscala da <strong>{model.height} metri</strong> lavora{" "}
              {model.floors} ed è la scelta giusta quando serve un equilibrio
              tra altezza raggiungibile e spazio di manovra:{" "}
              {model.specs.footprint}. Come per tutti i nostri mezzi, il
              noleggio è con operatore incluso e il preventivo — gratuito —
              arriva in giornata.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-brand-900">
              Usi tipici dell'autoscala {model.height} metri
            </h2>
            <ul className="mb-8 space-y-3">
              {model.typicalUses.map((use) => (
                <li key={use} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {use}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-brand-900">
              Caratteristiche tecniche
            </h2>
            {/* TODO: sostituire con le specifiche reali del mezzo in flotta */}
            <dl className="mb-4 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
              {[
                ["Altezza di lavoro", model.specs.workingHeight],
                ["Sbraccio massimo", model.specs.reach],
                ["Portata carrello", model.specs.capacity],
                ["Ingombro", model.specs.footprint],
                ["Piani raggiungibili", model.floors],
                ["Operatore", "incluso nel noleggio"],
              ].map(([label, value]) => (
                <div key={label} className="bg-white px-5 py-4">
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-500">
                    {label}
                  </dt>
                  <dd className="font-semibold text-brand-900">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mb-4 text-sm text-gray-500">
              Dati indicativi: le prestazioni effettive dipendono dalla
              configurazione del mezzo e dalle condizioni del sito. Contattaci
              per una valutazione precisa.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-brand-900">
                Altre altezze disponibili
              </h2>
              <ul className="space-y-2 text-sm">
                {otherModels.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/${m.slug}/`}
                      className="text-gray-700 hover:text-brand-600 hover:underline"
                    >
                      {m.name} — {m.floors}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    href="/noleggio-autoscale/"
                    className="font-semibold text-brand-600 hover:underline"
                  >
                    Tutte le autoscale →
                  </Link>
                </li>
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
                      Noleggio autoscale {c.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    href="/dove-operiamo/"
                    className="font-semibold text-brand-600 hover:underline"
                  >
                    Tutte le zone →
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <FAQAccordion
            items={faq}
            title={`Domande frequenti — autoscala ${model.height} metri`}
          />
        </div>
      </article>

      <CTASection
        title={`Noleggia l'autoscala da ${model.height} metri`}
        subtitle="Dicci piano, indirizzo e tipo di lavoro: ti confermiamo subito disponibilità e prezzo."
      />
    </>
  );
}

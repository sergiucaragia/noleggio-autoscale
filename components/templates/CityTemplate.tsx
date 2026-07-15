import Link from "next/link";
import type { City } from "@/lib/cities";
import { cities } from "@/lib/cities";
import { services, autoscalaModels } from "@/lib/services";
import { serviceSchema } from "@/lib/schema";
import { business } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

/**
 * Template pagina città "Noleggio autoscale a <Città>".
 * Il contenuto unico di ogni città (paragrafi, quartieri, FAQ locale)
 * vive in lib/cities.ts.
 */
export default function CityTemplate({ city }: { city: City }) {
  const faq = [
    {
      question: `Quanto costa noleggiare un'autoscala a ${city.name}?`,
      answer: `Il costo dipende dall'altezza del mezzo e dalla durata dell'intervento. Per ${city.name} (${city.travelTime}) il trasferimento è rapido e incide poco sul preventivo. Chiamaci al ${business.phoneDisplay}: preventivo gratuito in giornata.`,
    },
    {
      question: `In quanto tempo arrivate a ${city.name}?`,
      answer: `La nostra sede è in ${business.address.street} a Torino: per ${city.name} il tempo di trasferimento è ${city.travelTime}. Con la prenotazione anticipata garantiamo la fascia oraria concordata.`,
    },
    ...(city.extraFaq ? [city.extraFaq] : []),
  ];

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 7);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Noleggio autoscale a ${city.name}`,
          description: `Noleggio autoscale, autogrù e piattaforme aeree a ${city.name} con operatore.`,
          path: `/${city.slug}`,
          areaName: city.name,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Dove operiamo", path: "/dove-operiamo/" },
          { name: city.name, path: `/${city.slug}/` },
        ]}
      />

      {/* TODO FOTO: foto reale di un intervento in zona, se disponibile */}
      <PageHero
        eyebrow="Dove operiamo"
        title={`Noleggio autoscale a ${city.name}`}
        description={`Autoscale da 18 a 45 metri, autogrù e piattaforme aeree con operatore a ${city.name} e dintorni. ${city.travelTime}.`}
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-4 leading-relaxed text-gray-700">
              Cerchi un'<strong>autoscala a noleggio a {city.name}</strong> per
              un trasloco, una potatura o un lavoro in quota? Interveniamo a{" "}
              {city.name} con mezzi da 18 a 45 metri e operatore qualificato
              incluso: {city.travelTime}, preventivo gratuito in giornata e
              gestione completa di eventuali permessi comunali.
            </p>
            {city.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
            <p className="mb-8 leading-relaxed text-gray-700">
              Operiamo in tutte le zone di {city.name}:{" "}
              {city.areas.join(", ")} e aree limitrofe. Se non sei sicuro che
              il mezzo possa raggiungere il tuo indirizzo, inviaci la posizione
              su WhatsApp: la valutiamo subito, gratuitamente.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-brand-900">
              I nostri servizi a {city.name}
            </h2>
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <ServiceCard
                  key={s.slug}
                  href={`/${s.slug}/`}
                  title={s.name}
                  description={s.excerpt}
                  icon={s.icon}
                />
              ))}
            </div>

            <h2 className="mb-4 text-2xl font-bold text-brand-900">
              Che altezza serve a {city.name}?
            </h2>
            <ul className="mb-8 space-y-2 text-gray-700">
              {autoscalaModels.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/${m.slug}/`}
                    className="font-semibold text-brand-600 hover:underline"
                  >
                    Autoscala {m.height} metri
                  </Link>{" "}
                  — {m.floors}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-brand-900">
                Altre zone servite
              </h2>
              <ul className="space-y-2 text-sm">
                {otherCities.map((c) => (
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
            title={`Domande frequenti — ${city.name}`}
          />
        </div>
      </article>

      <CTASection
        title={`Preventivo gratuito a ${city.name}`}
        subtitle={`Interveniamo a ${city.name} 7 giorni su 7, dalle 8:00 alle 20:00. Chiamaci o scrivici su WhatsApp.`}
      />
    </>
  );
}

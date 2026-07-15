import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { cities } from "@/lib/cities";
import { business } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CityCard from "@/components/CityCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Dove Operiamo: Torino e Provincia | Noleggio Autoscale",
  description:
    "Noleggio autoscale e transenne a Torino e in tutta la provincia: Moncalieri, Rivoli, Collegno, Nichelino e altri comuni della cintura.",
  path: "/dove-operiamo",
});

export default function DoveOperiamoPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Dove operiamo", path: "/dove-operiamo/" },
        ]}
      />

      <PageHero
        eyebrow="Zone servite"
        title="Dove operiamo: Torino e provincia"
        description={`La nostra sede è in ${business.address.street} a ${business.address.city}: da qui raggiungiamo rapidamente Torino e tutti i comuni della cintura, 7 giorni su 7.`}
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="mb-8 max-w-3xl leading-relaxed text-gray-700">
          Ogni zona ha le sue particolarità: le vie strette del centro storico,
          le ZTL, i grandi condomini della cintura. Nelle pagine dedicate trovi
          informazioni specifiche per ogni comune servito. Non trovi la tua
          città? Contattaci comunque:{" "}
          <strong>
            valutiamo interventi in tutta la provincia di Torino
          </strong>{" "}
          e, per lavori importanti, anche oltre.
        </p>

        <h2 className="mb-6 text-2xl font-bold text-brand-900">
          Comuni serviti
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-accent-200 bg-accent-50 p-6">
          <h2 className="mb-2 text-lg font-bold text-brand-900">
            La tua zona non è in elenco?
          </h2>
          <p className="text-gray-700">
            L'elenco cresce man mano che estendiamo il servizio. Chiamaci al{" "}
            <a
              href={`tel:${business.phone}`}
              className="font-bold text-brand-600 hover:underline"
            >
              {business.phoneDisplay}
            </a>{" "}
            o{" "}
            <Link
              href="/contatti/"
              className="font-bold text-brand-600 hover:underline"
            >
              scrivici
            </Link>
            : per la maggior parte dei comuni della provincia riusciamo a
            organizzare l'intervento senza problemi.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}

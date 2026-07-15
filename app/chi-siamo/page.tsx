import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/config";
import { services } from "@/lib/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Chi Siamo | Noleggio Autoscale Torino",
  description:
    "Noleggio Autoscale: mezzi per lavori in quota con operatore a Torino. Sede in Corso Svizzera 116, attivi 7 giorni su 7 con mezzi revisionati e certificati.",
  path: "/chi-siamo",
});

export default function ChiSiamoPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Chi siamo", path: "/chi-siamo/" },
        ]}
      />

      <PageHero
        eyebrow="La nostra azienda"
        title="Chi siamo"
        description="Lavori in quota e sollevamenti a Torino, con mezzi revisionati e operatori qualificati. Un solo interlocutore, dalla pratica comunale all'intervento."
      />

      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* TODO FOTO: aggiungere qui foto reali del team e dei mezzi.
            Le foto autentiche (persone e flotta) sono l'elemento che più
            aumenta la fiducia in questa pagina. */}
        <p className="mb-4 leading-relaxed text-gray-700">
          <strong>{business.name}</strong> nasce dall'esperienza maturata sul
          campo nel mondo dei traslochi e dei lavori in quota a Torino. Ogni
          giorno portiamo autoscale, autogrù e piattaforme aeree nei cortili,
          nelle vie del centro e nei cantieri della città e della provincia,
          con un obiettivo semplice: farti lavorare (o traslocare) in
          sicurezza, in orario e senza pensieri burocratici.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          La nostra sede operativa è in {business.address.street} a Torino, in
          zona San Donato: una posizione centrale che ci permette di
          raggiungere rapidamente ogni quartiere della città e i comuni della
          cintura. Siamo attivi{" "}
          <strong>
            {business.openingHours.days.toLowerCase()},{" "}
            {business.openingHours.hours}
          </strong>
          , weekend compresi — perché traslochi e urgenze non guardano il
          calendario.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-900">
          Il nostro modo di lavorare
        </h2>
        <ul className="mb-8 space-y-3">
          {[
            "Rispondiamo in giornata: preventivo chiaro, con tutte le voci separate e nessun costo a sorpresa.",
            "Mezzi revisionati e in regola con le verifiche periodiche di legge.",
            "Operatori abilitati inclusi in ogni noleggio: la manovra è sempre in mani esperte.",
            "Gestione completa di permessi comunali, ZTL e segnaletica: la burocrazia è compresa nel servizio.",
            "Sopralluogo gratuito per gli interventi complessi.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                <CheckIcon className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mb-6 mt-10 text-2xl font-bold text-brand-900">
          I nostri servizi
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
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

        <p className="mt-10 leading-relaxed text-gray-700">
          Vuoi conoscerci meglio? Vieni a trovarci in sede, chiamaci al{" "}
          <a
            href={`tel:${business.phone}`}
            className="font-semibold text-brand-600 hover:underline"
          >
            {business.phoneDisplay}
          </a>{" "}
          oppure{" "}
          <Link
            href="/contatti/"
            className="font-semibold text-brand-600 hover:underline"
          >
            scrivici dalla pagina contatti
          </Link>
          .
        </p>
      </article>

      <CTASection />
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { serviceSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

const service = services[2]; // noleggio-piattaforma-aerea

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faq = [
  {
    question: "Meglio piattaforma aerea o autoscala?",
    answer:
      "Dipende dal lavoro: la piattaforma aerea solleva le persone in un cestello ed è ideale per lavorare in quota (manutenzioni, potature, installazioni); l'autoscala movimenta materiali e mobili con il carrello portacose ed è perfetta per traslochi e sgomberi. Al telefono ti indirizziamo sul mezzo giusto.",
  },
  {
    question: "Serve un patentino per usare la piattaforma aerea?",
    answer:
      "Per manovrare una piattaforma aerea (PLE) è richiesta per legge un'abilitazione specifica. Con il nolo a caldo l'operatore te lo forniamo noi; per il nolo a freddo è necessario che l'utilizzatore abbia il patentino PLE in corso di validità.",
  },
  {
    question: "Quante persone possono salire nel cestello?",
    answer:
      "Dipende dal modello e dalla portata: in genere da una a tre persone con attrezzatura. In fase di preventivo ti confermiamo portata e dimensioni del cestello del mezzo proposto.",
  },
  {
    question: "Lavorate anche su superfici sterrate o in pendenza?",
    answer:
      "Sì, con i mezzi adeguati: alcune nostre piattaforme sono adatte a terreni non asfaltati. Segnalaci le condizioni del sito (foto e posizione su WhatsApp vanno benissimo) e scegliamo il mezzo idoneo.",
  },
];

export default function NoleggioPiattaformaAereaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Noleggio piattaforme aeree",
          description: service.metaDescription,
          path: `/${service.slug}`,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Noleggio piattaforme aeree", path: `/${service.slug}/` },
        ]}
      />

      {/* TODO FOTO: sostituire con foto reale della piattaforma aerea */}
      <PageHero
        eyebrow="Piattaforme aeree"
        title={service.h1}
        description="Piattaforme aeree per lavori in quota in sicurezza: manutenzioni, facciate, coperture, potature e installazioni a Torino e provincia."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-4 leading-relaxed text-gray-700">
              La <strong>piattaforma aerea</strong> (PLE, piattaforma di lavoro
              elevabile) è il mezzo più pratico e sicuro per portare persone e
              attrezzi in quota senza montare ponteggi: si posiziona in poco
              tempo, raggiunge il punto di lavoro con precisione e a fine
              giornata la strada torna libera. Rispetto a un ponteggio, per
              interventi puntuali o di breve durata il risparmio di tempo e
              denaro è notevole.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Noleggiamo piattaforme autocarrate di diverse altezze di lavoro,
              con formula <strong>nolo a caldo</strong> (con il nostro
              operatore abilitato) o, per le imprese con personale patentato,{" "}
              <strong>nolo a freddo</strong>. Tutti i mezzi sono revisionati e
              in regola con le verifiche periodiche di legge.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-900">
              Lavori tipici con la piattaforma aerea
            </h2>
            <ul className="mb-6 space-y-3">
              {[
                "Manutenzione di facciate, balconi, cornicioni e frontalini.",
                "Riparazione di tetti, grondaie, pluviali e camini.",
                "Potatura e messa in sicurezza di alberi ad alto fusto.",
                "Installazione e manutenzione di insegne, tende, antenne e impianti.",
                "Pulizia di vetrate e superfici in quota.",
                "Ispezioni tecniche e videoispezioni di coperture e strutture.",
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
              Nolo a caldo o a freddo?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Con il <strong>nolo a caldo</strong> ricevi mezzo e operatore:
              è la formula più richiesta da privati e amministratori, perché
              non richiede alcuna abilitazione e la responsabilità della
              manovra resta in mani esperte. Il <strong>nolo a freddo</strong>{" "}
              è riservato a chi possiede il patentino PLE in corso di validità
              ed è tipico delle imprese edili e dei manutentori. Ne parliamo
              nel dettaglio nel nostro{" "}
              <Link
                href="/blog/differenza-nolo-a-caldo-nolo-a-freddo/"
                className="font-semibold text-brand-600 hover:underline"
              >
                approfondimento sul blog
              </Link>
              .
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Per interventi su strada o marciapiede gestiamo noi il permesso
              di{" "}
              <Link
                href="/pratiche-occupazione-suolo-pubblico/"
                className="font-semibold text-brand-600 hover:underline"
              >
                occupazione suolo pubblico
              </Link>{" "}
              e la segnaletica temporanea, in ogni comune della provincia.
            </p>
          </div>

          <aside className="space-y-6">
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
            title="Domande frequenti sulle piattaforme aeree"
          />
        </div>
      </article>

      <CTASection
        title="Preventivo gratuito per la piattaforma aerea"
        subtitle="Descrivici il lavoro in quota: altezza, luogo e durata. Ti proponiamo il mezzo giusto in giornata."
      />
    </>
  );
}

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

const service = services[1]; // noleggio-autogru

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faq = [
  {
    question: "Che portata hanno le vostre autogrù?",
    answer:
      "Disponiamo di autogrù di diverse classi di portata, adatte dal sollevamento di una caldaia fino a strutture prefabbricate. In fase di preventivo valutiamo peso del carico, sbraccio necessario e spazio di stabilizzazione per proporti il mezzo corretto.",
  },
  {
    question: "L'autogrù viene fornita con gruista?",
    answer:
      "Sì, il noleggio è sempre con operatore (nolo a caldo): un gruista abilitato si occupa di posizionamento, stabilizzazione e manovre di sollevamento secondo le norme di sicurezza.",
  },
  {
    question: "Serve un piano di sollevamento?",
    answer:
      "Per i sollevamenti più impegnativi o in cantiere è buona norma (e spesso obbligo) predisporre un piano di sollevamento. Ti supportiamo nella valutazione e, dove necessario, effettuiamo un sopralluogo tecnico gratuito.",
  },
  {
    question: "Potete lavorare in centro a Torino con l'autogrù?",
    answer:
      "Sì. Gestiamo noi i permessi di occupazione suolo pubblico e l'eventuale accesso ZTL, e scegliamo il mezzo con l'ingombro compatibile con la via. La segnaletica di divieto di sosta viene posizionata nei tempi di legge.",
  },
];

export default function NoleggioAutogruPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Noleggio autogrù",
          description: service.metaDescription,
          path: `/${service.slug}`,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Noleggio autogrù", path: `/${service.slug}/` },
        ]}
      />

      {/* TODO FOTO: sostituire con foto reale dell'autogrù in azione */}
      <PageHero
        eyebrow="Noleggio autogrù"
        title={service.h1}
        description="Sollevamento di materiali, macchinari e strutture con gruista abilitato. In cantiere, in azienda o in centro città, a Torino e provincia."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-4 leading-relaxed text-gray-700">
              Quando il carico è troppo pesante per un'autoscala — una caldaia
              condominiale, una vasca idromassaggio, travi in legno lamellare,
              un macchinario industriale — serve un'
              <strong>autogrù con gruista esperto</strong>. Il nostro servizio
              di noleggio autogrù a Torino copre sollevamenti civili e
              industriali, dal singolo intervento di poche ore al supporto
              continuativo in cantiere.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Ogni intervento inizia da una valutazione: peso e dimensioni del
              carico, altezza e sbraccio necessari, spazio disponibile per la
              stabilizzazione del mezzo. Su questa base ti proponiamo l'autogrù
              della classe giusta, senza farti pagare un mezzo
              sovradimensionato.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-900">
              Cosa solleviamo con le nostre autogrù
            </h2>
            <ul className="mb-6 space-y-3">
              {[
                "Caldaie, unità di climatizzazione e impianti tecnologici su coperture e terrazzi.",
                "Travi, capriate e strutture in legno o acciaio per tetti e soppalchi.",
                "Macchinari industriali: posizionamento in capannone o carico su mezzi di trasporto.",
                "Vasche, spa e arredi di grandi dimensioni ai piani alti o in cortili interni.",
                "Prefabbricati, casette, gazebo e strutture da giardino oltre le recinzioni.",
                "Container, cisterne e serbatoi.",
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
              Sicurezza e conformità
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Il sollevamento di carichi è un'attività regolamentata: i nostri
              gruisti sono abilitati ai sensi della normativa vigente, i mezzi
              sono sottoposti alle verifiche periodiche obbligatorie e ogni
              manovra viene eseguita con imbracature e accessori certificati.
              Per i lavori in area pubblica ci occupiamo dei permessi di{" "}
              <Link
                href="/pratiche-occupazione-suolo-pubblico/"
                className="font-semibold text-brand-600 hover:underline"
              >
                occupazione suolo pubblico
              </Link>{" "}
              e della segnaletica.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Se non sei sicuro che serva un'autogrù, descrivici il lavoro:
              in molti casi un'
              <Link
                href="/noleggio-autoscale/"
                className="font-semibold text-brand-600 hover:underline"
              >
                autoscala
              </Link>{" "}
              o una{" "}
              <Link
                href="/noleggio-piattaforma-aerea/"
                className="font-semibold text-brand-600 hover:underline"
              >
                piattaforma aerea
              </Link>{" "}
              sono più rapide ed economiche. Ti consigliamo sempre la soluzione
              più conveniente per il tuo caso.
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
            title="Domande frequenti sul noleggio autogrù"
          />
        </div>
      </article>

      <CTASection
        title="Preventivo gratuito per il noleggio autogrù"
        subtitle="Inviaci peso e dimensioni del carico, indirizzo e una foto del punto di sollevamento: ti rispondiamo in giornata."
      />
    </>
  );
}

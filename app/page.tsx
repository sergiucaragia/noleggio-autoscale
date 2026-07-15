import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { business, links } from "@/lib/config";
import { services, autoscalaModels } from "@/lib/services";
import { cities } from "@/lib/cities";
import ServiceCard from "@/components/ServiceCard";
import CityCard from "@/components/CityCard";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Noleggio Autoscale a Torino | Noleggio Autoscale",
  description:
    "Noleggio autoscale dal 1° al 12° piano con operatore a Torino e provincia. Preventivo gratuito in giornata: 320 892 1103.",
  path: "/",
});

const homeFaq = [
  {
    question: "Quanto costa noleggiare un'autoscala a Torino?",
    answer:
      "Il costo dipende dall'altezza del mezzo, dalla durata del noleggio e dalla zona dell'intervento. Un noleggio con operatore per un trasloco parte indicativamente da poche centinaia di euro per mezza giornata. Chiamaci al 320 892 1103: il preventivo è gratuito e te lo diamo in giornata.",
  },
  {
    question: "L'autoscala viene noleggiata con o senza operatore?",
    answer:
      "I nostri mezzi vengono noleggiati con operatore qualificato incluso (nolo a caldo): non ti serve alcun patentino e la manovra è sempre in mani esperte. Su richiesta valutiamo anche altre formule.",
  },
  {
    question: "In quanto tempo potete intervenire?",
    answer:
      "Siamo operativi 7 giorni su 7, dalle 8:00 alle 20:00, con sede in Via Italia 88 a Settimo Torinese. Per gli interventi in città e prima cintura riusciamo spesso a intervenire entro 24-48 ore, salvo il tempo necessario per eventuali permessi comunali.",
  },
  {
    question: "Vi occupate voi dei permessi di occupazione suolo pubblico?",
    answer:
      "Sì. Gestiamo l'intera pratica di occupazione suolo pubblico: richiesta al Comune, tempistiche e posizionamento della segnaletica obbligatoria. Tu non devi pensare a nulla.",
  },
  {
    question: "Che altezza di autoscala serve per il mio piano?",
    answer:
      "Come regola pratica: fino al 6° piano basta un'autoscala da 24 metri, fino al 9° piano ne serve una da 34 metri, oltre serve la 45 metri. Al telefono ti aiutiamo a scegliere il mezzo giusto in base a piano, distanza dal palazzo ed eventuali ostacoli.",
  },
];

const whyUs = [
  {
    title: "Mezzi revisionati e certificati",
    text: "Flotta sottoposta a manutenzione e verifiche periodiche di legge: lavori in quota sempre in sicurezza.",
  },
  {
    title: "Operatori esperti inclusi",
    text: "Ogni noleggio include un operatore qualificato: nessun patentino richiesto, nessun rischio di manovra.",
  },
  {
    title: "Preventivo in giornata",
    text: "Rispondiamo subito, 7 giorni su 7. Sopralluogo gratuito per gli interventi più complessi.",
  },
  {
    title: "Burocrazia inclusa",
    text: "Occupazione suolo pubblico, ZTL, segnaletica: gestiamo noi tutte le pratiche comunali.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO
          TODO FOTO: sostituire il fondo a gradiente con una foto reale
          dell'autoscala in azione (next/image con priority). Le foto reali
          dei mezzi aumentano fiducia e conversioni. */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Torino e provincia — 7 giorni su 7
              </p>
              <h1 className="mb-5 text-3xl font-black leading-tight sm:text-5xl">
                Noleggio autoscale a Torino:
                <br className="hidden sm:block" /> dal 1° al 12° piano, con operatore
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-brand-100">
                Traslochi ai piani alti, potature e lavori in quota: autoscale
                con operatore qualificato. Preventivo gratuito in giornata,
                pratiche comunali incluse.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={links.tel}
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-7 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-700"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Chiama {business.phoneDisplay}
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-wa px-7 py-4 text-lg font-bold text-white transition-colors hover:bg-wa-dark"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Form preventivo, sempre visibile fin dalla hero */}
            <div id="preventivo" className="lg:pt-1">
              <p className="mb-3 text-lg font-bold text-white">
                Richiedi un preventivo gratuito
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-3 text-center text-2xl font-bold text-brand-900 sm:text-3xl">
          I nostri servizi di noleggio
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Un unico interlocutore per lavori in quota e delimitazione di aree
          di cantiere a Torino e provincia.
        </p>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
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
      </section>

      {/* ALTEZZE AUTOSCALE */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center text-2xl font-bold text-brand-900 sm:text-3xl">
            Autoscale per ogni altezza
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Dal 1° piano del centro storico ai grattacieli: scegli l'altezza
            giusta, al resto pensiamo noi.
          </p>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {autoscalaModels.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}/`}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="mb-1 text-4xl font-black text-accent-600">
                  {m.height}
                  <span className="text-xl font-bold text-gray-400"> m</span>
                </p>
                <p className="mb-2 font-bold text-brand-900">{m.name}</p>
                <p className="mb-3 text-sm text-gray-600">{m.floors}</p>
                <span className="text-sm font-semibold text-brand-600 group-hover:underline">
                  Dettagli →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-brand-900 sm:text-3xl">
          Perché scegliere Noleggio Autoscale
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="mb-1 font-bold text-brand-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ZONE SERVITE */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center text-2xl font-bold text-brand-900 sm:text-3xl">
            Dove operiamo
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Sede operativa in Via Italia 88 a Settimo Torinese, interveniamo
            in tutta Torino e nei comuni della cintura.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <CityCard key={c.slug} city={c} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/dove-operiamo/"
              className="font-semibold text-brand-600 hover:underline"
            >
              Vedi tutte le zone servite →
            </Link>
          </p>
        </div>
      </section>

      {/* RECENSIONI
          TODO: sostituire con recensioni reali (Google Business Profile)
          appena disponibili. Testi placeholder realistici. */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-brand-900 sm:text-3xl">
          Cosa dicono i nostri clienti
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Luca B. — Torino",
              text: "Trasloco al 7° piano in pieno centro: puntuali, veloci e si sono occupati loro del permesso per la strada. Consigliatissimi.",
            },
            {
              name: "Amministrazione condominiale — Collegno",
              text: "Usiamo la loro autoscala per le manutenzioni dei nostri stabili. Sempre disponibili, anche nel weekend, e con mezzi in ordine.",
            },
            {
              name: "Giardiniere professionista — Moncalieri",
              text: "Potature di alberi alti in sicurezza con il loro operatore. Prezzo onesto e preventivo immediato su WhatsApp.",
            },
          ].map((review) => (
            <figure
              key={review.name}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="mb-3 text-accent-600" aria-label="5 stelle su 5">
                ★★★★★
              </p>
              <blockquote className="mb-4 leading-relaxed text-gray-700">
                «{review.text}»
              </blockquote>
              <figcaption className="text-sm font-semibold text-brand-900">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-16">
        <FAQAccordion items={homeFaq} />
        <p className="mt-8 text-center">
          <Link
            href="/faq/"
            className="font-semibold text-brand-600 hover:underline"
          >
            Leggi tutte le domande frequenti →
          </Link>
        </p>
      </section>

      <CTASection />
    </>
  );
}

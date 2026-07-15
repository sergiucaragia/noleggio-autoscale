import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Domande Frequenti (FAQ) | Noleggio Autoscale Torino",
  description:
    "Risposte alle domande più frequenti su noleggio autoscale e transenne: costi, permessi, altezze, tempi di intervento a Torino.",
  path: "/faq",
});

const faqItems = [
  {
    question: "Quanto costa noleggiare un'autoscala?",
    answer: `Il prezzo dipende da tre fattori: altezza del mezzo, durata del noleggio (a ore o a giornata) e necessità di permessi comunali. Indicativamente un intervento breve con autoscala parte da poche centinaia di euro. Chiama il ${business.phoneDisplay} o scrivici su WhatsApp: il preventivo è gratuito e arriva in giornata.`,
  },
  {
    question: "Il noleggio è con o senza operatore?",
    answer:
      "I nostri noleggi sono con operatore qualificato incluso (nolo a caldo): non serve alcun patentino e la manovra è sempre eseguita da personale esperto. Per le imprese con personale abilitato valutiamo anche il nolo a freddo su alcune tipologie di mezzi.",
  },
  {
    question: "Che altezza di autoscala serve per il mio piano?",
    answer:
      "Regola pratica: circa 3 metri per piano, più margine di sicurezza. Fino al 6° piano basta la 24 metri, fino al 9° piano serve la 34 metri, oltre si passa alla 45 metri. Se il mezzo non può accostarsi al palazzo, meglio scegliere un'altezza superiore.",
  },
  {
    question: "In quanto tempo potete intervenire?",
    answer:
      "Per interventi senza permessi comunali spesso entro 24-48 ore. Se serve l'occupazione di suolo pubblico, bisogna aggiungere i tempi di rilascio del Comune (a Torino in genere 5-10 giorni lavorativi).",
  },
  {
    question: "Lavorate anche nel weekend?",
    answer: `Sì, siamo operativi ${business.openingHours.days.toLowerCase()}, dalle 8:00 alle 20:00, festivi compresi previo accordo. Molti clienti scelgono proprio il sabato e la domenica per traslochi e interventi condominiali.`,
  },
  {
    question: "Chi si occupa dei permessi comunali?",
    answer:
      "Noi. Gestiamo la pratica di occupazione suolo pubblico dall'inizio alla fine: domanda, planimetria, canone, ordinanza e posa della segnaletica di divieto di sosta nei termini di legge (almeno 48 ore prima).",
  },
  {
    question: "Cosa succede in caso di pioggia o vento forte?",
    answer:
      "La sicurezza viene prima di tutto: con condizioni meteo avverse l'intervento viene riprogrammato senza costi aggiuntivi. Monitoriamo le previsioni e ti avvisiamo con anticipo.",
  },
  {
    question: "Siete assicurati?",
    answer:
      "Sì, mezzi e attività sono coperti da assicurazione RC. Su richiesta forniamo la documentazione assicurativa e le certificazioni dei mezzi per pratiche condominiali o di cantiere.",
  },
  {
    question: "Quali zone coprite?",
    answer:
      "Torino e tutta la cintura: Moncalieri, Rivoli, Collegno, Nichelino, Settimo Torinese, Grugliasco, Venaria Reale e gli altri comuni della provincia. Per lavori importanti valutiamo anche trasferte più lunghe.",
  },
  {
    question: "Come posso richiedere un preventivo?",
    answer: `Nel modo che preferisci: telefono (${business.phoneDisplay}), WhatsApp allo stesso numero, oppure il form nella pagina contatti. Indica piano o altezza, indirizzo e tipo di lavoro: ti rispondiamo in poche ore.`,
  },
];

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Domande frequenti", path: "/faq/" },
        ]}
      />

      <PageHero
        eyebrow="Assistenza"
        title="Domande frequenti"
        description="Tutto quello che c'è da sapere prima di noleggiare un'autoscala o transenne e segnaletica."
      />

      <section className="px-4 py-12">
        <FAQAccordion items={faqItems} title="Le risposte alle domande più comuni" />
      </section>

      <CTASection
        title="Non hai trovato la risposta?"
        subtitle="Chiamaci o scrivici su WhatsApp: rispondiamo a qualsiasi domanda, senza impegno."
      />
    </>
  );
}

/**
 * Definizione dei servizi offerti. Ogni servizio ha slug, nomi, descrizioni
 * SEO e FAQ dedicate. Le pagine servizio e le card in home leggono da qui.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  /** Nome breve (menu, card) */
  name: string;
  /** Titolo H1 della pagina */
  h1: string;
  /** Title tag (max ~60 caratteri) */
  metaTitle: string;
  /** Meta description (150-160 caratteri) */
  metaDescription: string;
  /** Descrizione breve per card e link interni */
  excerpt: string;
  icon: "autoscala" | "autogru" | "piattaforma" | "transenne" | "pratiche";
};

export const services: Service[] = [
  {
    slug: "noleggio-autoscale",
    name: "Noleggio autoscale",
    h1: "Noleggio autoscale a Torino",
    metaTitle: "Noleggio Autoscale a Torino | Noleggio Autoscale",
    metaDescription:
      "Noleggio autoscale a Torino da 18 a 45 metri, con operatore. Traslochi, potature, lavori in quota. Preventivo gratuito in giornata: chiama o scrivi su WhatsApp.",
    excerpt:
      "Autoscale da 18 a 45 metri con operatore per traslochi, potature e lavori in quota a Torino e provincia.",
    icon: "autoscala",
  },
  {
    slug: "noleggio-autogru",
    name: "Noleggio autogrù",
    h1: "Noleggio autogrù a Torino",
    metaTitle: "Noleggio Autogrù a Torino | Noleggio Autoscale",
    metaDescription:
      "Noleggio autogrù a Torino con operatore per sollevamento di materiali, macchinari e strutture. Sopralluogo e preventivo gratuiti. Chiama il 320 892 1103.",
    excerpt:
      "Autogrù con operatore per sollevare materiali, macchinari e strutture in cantiere o in città.",
    icon: "autogru",
  },
  {
    slug: "noleggio-piattaforma-aerea",
    name: "Noleggio piattaforme aeree",
    h1: "Noleggio piattaforme aeree a Torino",
    metaTitle: "Noleggio Piattaforme Aeree Torino | Noleggio Autoscale",
    metaDescription:
      "Noleggio piattaforme aeree a Torino: lavori in quota, manutenzioni, facciate e coperture. Mezzi revisionati, con o senza operatore. Preventivo gratuito.",
    excerpt:
      "Piattaforme aeree per manutenzioni, facciate, coperture e lavori in quota in sicurezza.",
    icon: "piattaforma",
  },
  {
    slug: "noleggio-transenne-segnaletica",
    name: "Transenne e segnaletica",
    h1: "Noleggio transenne e segnaletica stradale a Torino",
    metaTitle: "Noleggio Transenne e Segnaletica Torino | Noleggio Autoscale",
    metaDescription:
      "Noleggio transenne e segnaletica stradale a Torino con gestione completa delle pratiche di occupazione suolo pubblico. Consegna e ritiro inclusi.",
    excerpt:
      "Transenne, cartelli e segnaletica per delimitare aree di lavoro, con gestione pratiche comunali.",
    icon: "transenne",
  },
];

/** Sotto-servizio: gestione pratiche occupazione suolo pubblico */
export const praticheService = {
  slug: "pratiche-occupazione-suolo-pubblico",
  name: "Pratiche occupazione suolo pubblico",
  h1: "Pratiche di occupazione suolo pubblico a Torino",
  metaTitle: "Occupazione Suolo Pubblico Torino | Noleggio Autoscale",
  metaDescription:
    "Gestiamo per te la pratica di occupazione suolo pubblico a Torino: richiesta, permessi e segnaletica. Tu pensi al lavoro, alla burocrazia pensiamo noi.",
  excerpt:
    "Gestione completa della pratica comunale: richiesta permessi, tempistiche e segnaletica obbligatoria.",
} as const;

export type AutoscalaModel = {
  slug: string;
  /** Altezza in metri */
  height: 18 | 25 | 35 | 45;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  /** Specifiche tecniche indicative — TODO: sostituire con i dati reali dei mezzi in flotta */
  specs: {
    workingHeight: string;
    reach: string;
    capacity: string;
    footprint: string;
  };
  /** Usi tipici per quest'altezza */
  typicalUses: string[];
  /** Piani raggiungibili (indicativo) */
  floors: string;
};

export const autoscalaModels: AutoscalaModel[] = [
  {
    slug: "noleggio-autoscala-18-metri",
    height: 18,
    name: "Autoscala 18 metri",
    h1: "Noleggio autoscala 18 metri a Torino",
    metaTitle: "Noleggio Autoscala 18 Metri Torino | Noleggio Autoscale",
    metaDescription:
      "Autoscala 18 metri a noleggio a Torino: ideale per traslochi fino al 5° piano, vie strette e centro storico. Con operatore, preventivo gratuito.",
    excerpt:
      "Compatta e agile: perfetta per il centro storico, vie strette e traslochi fino al 5° piano.",
    specs: {
      workingHeight: "18 m",
      reach: "fino a 10 m",
      capacity: "200 kg",
      footprint: "ingombro ridotto, ideale per vie strette",
    },
    typicalUses: [
      "Traslochi fino al 5° piano",
      "Sgomberi di cantine e solai",
      "Piccole manutenzioni di grondaie e cornicioni",
      "Potature di alberi di media altezza",
    ],
    floors: "fino al 5° piano",
  },
  {
    slug: "noleggio-autoscala-25-metri",
    height: 25,
    name: "Autoscala 25 metri",
    h1: "Noleggio autoscala 25 metri a Torino",
    metaTitle: "Noleggio Autoscala 25 Metri Torino | Noleggio Autoscale",
    metaDescription:
      "Autoscala 25 metri a noleggio a Torino: traslochi fino all'8° piano, manutenzioni di facciate e coperture. Con operatore esperto, preventivo in giornata.",
    excerpt:
      "La più richiesta: traslochi fino all'8° piano e manutenzioni di facciate e coperture.",
    specs: {
      workingHeight: "25 m",
      reach: "fino a 14 m",
      capacity: "250 kg",
      footprint: "adatta alla maggior parte delle strade urbane",
    },
    typicalUses: [
      "Traslochi fino all'8° piano",
      "Manutenzione di facciate e balconi",
      "Riparazione di tetti e grondaie",
      "Installazione di condizionatori e insegne",
    ],
    floors: "fino all'8° piano",
  },
  {
    slug: "noleggio-autoscala-35-metri",
    height: 35,
    name: "Autoscala 35 metri",
    h1: "Noleggio autoscala 35 metri a Torino",
    metaTitle: "Noleggio Autoscala 35 Metri Torino | Noleggio Autoscale",
    metaDescription:
      "Autoscala 35 metri a noleggio a Torino: edifici alti, condomini oltre il 10° piano, coperture e lavori in quota. Operatore incluso, preventivo gratuito.",
    excerpt:
      "Per edifici alti: condomini oltre il 10° piano, coperture e interventi in quota complessi.",
    specs: {
      workingHeight: "35 m",
      reach: "fino a 18 m",
      capacity: "300 kg",
      footprint: "richiede spazio di stabilizzazione adeguato",
    },
    typicalUses: [
      "Traslochi in condomini oltre il 10° piano",
      "Rifacimento di coperture e tetti",
      "Manutenzione straordinaria di facciate",
      "Potature di alberi ad alto fusto",
    ],
    floors: "oltre il 10° piano",
  },
  {
    slug: "noleggio-autoscala-45-metri",
    height: 45,
    name: "Autoscala 45 metri",
    h1: "Noleggio autoscala 45 metri a Torino",
    metaTitle: "Noleggio Autoscala 45 Metri Torino | Noleggio Autoscale",
    metaDescription:
      "Autoscala 45 metri a noleggio a Torino: grattacieli, torri e grandi edifici industriali. La soluzione per i lavori in quota più impegnativi.",
    excerpt:
      "La massima altezza: grattacieli, torri, capannoni industriali e interventi speciali.",
    specs: {
      workingHeight: "45 m",
      reach: "fino a 22 m",
      capacity: "350 kg",
      footprint: "richiede area di manovra ampia e sopralluogo preventivo",
    },
    typicalUses: [
      "Interventi su torri e grattacieli",
      "Grandi edifici industriali e capannoni",
      "Installazioni speciali in quota",
      "Interventi su campanili ed edifici storici",
    ],
    floors: "oltre il 14° piano",
  },
];

export function getAutoscalaModel(slug: string): AutoscalaModel | undefined {
  return autoscalaModels.find((m) => m.slug === slug);
}

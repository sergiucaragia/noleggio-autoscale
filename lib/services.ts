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
  icon: "autoscala" | "transenne" | "pratiche";
};

export const services: Service[] = [
  {
    slug: "noleggio-autoscale",
    name: "Noleggio autoscale",
    h1: "Noleggio autoscale a Torino",
    metaTitle: "Noleggio Autoscale a Torino | Noleggio Autoscale",
    metaDescription:
      "Noleggio autoscale a Torino dal 1° al 12° piano, con operatore. Traslochi, potature, lavori in quota. Preventivo gratuito in giornata: chiama o scrivi su WhatsApp.",
    excerpt:
      "Autoscale dal 1° al 12° piano con operatore per traslochi, potature e lavori in quota a Torino e provincia.",
    icon: "autoscala",
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
  height: 24 | 34 | 45;
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
    slug: "noleggio-autoscala-24-metri",
    height: 24,
    name: "Autoscala 24 metri",
    h1: "Noleggio autoscala 24 metri a Torino",
    metaTitle: "Noleggio Autoscala 24 Metri Torino | Noleggio Autoscale",
    metaDescription:
      "Autoscala 24 metri a noleggio a Torino: ideale per traslochi fino al 6° piano, vie strette e centro storico. Con operatore, preventivo gratuito.",
    excerpt:
      "Compatta e agile: perfetta per il centro storico, vie strette e traslochi fino al 6° piano.",
    specs: {
      workingHeight: "24 m",
      reach: "fino a 12 m",
      capacity: "220 kg",
      footprint: "ingombro ridotto, ideale per vie strette e centro storico",
    },
    typicalUses: [
      "Traslochi fino al 6° piano",
      "Sgomberi di cantine e solai",
      "Piccole manutenzioni di grondaie e cornicioni",
      "Potature di alberi di media altezza",
    ],
    floors: "fino al 6° piano",
  },
  {
    slug: "noleggio-autoscala-34-metri",
    height: 34,
    name: "Autoscala 34 metri",
    h1: "Noleggio autoscala 34 metri a Torino",
    metaTitle: "Noleggio Autoscala 34 Metri Torino | Noleggio Autoscale",
    metaDescription:
      "Autoscala 34 metri a noleggio a Torino: traslochi fino al 9° piano, manutenzioni di facciate e coperture. Con operatore esperto, preventivo in giornata.",
    excerpt:
      "La più richiesta: traslochi fino al 9° piano e manutenzioni di facciate e coperture.",
    specs: {
      workingHeight: "34 m",
      reach: "fino a 16 m",
      capacity: "280 kg",
      footprint: "adatta alla maggior parte delle strade urbane",
    },
    typicalUses: [
      "Traslochi fino al 9° piano",
      "Manutenzione di facciate e balconi",
      "Riparazione di tetti e grondaie",
      "Installazione di condizionatori e insegne",
    ],
    floors: "fino al 9° piano",
  },
  {
    slug: "noleggio-autoscala-45-metri",
    height: 45,
    name: "Autoscala 45 metri",
    h1: "Noleggio autoscala 45 metri a Torino",
    metaTitle: "Noleggio Autoscala 45 Metri Torino | Noleggio Autoscale",
    metaDescription:
      "Autoscala 45 metri a noleggio a Torino: edifici alti fino al 12° piano, coperture e lavori in quota. Operatore incluso, preventivo gratuito.",
    excerpt:
      "La massima altezza della flotta: edifici alti fino al 12° piano e interventi in quota complessi.",
    specs: {
      workingHeight: "45 m",
      reach: "fino a 22 m",
      capacity: "350 kg",
      footprint: "richiede area di manovra ampia e sopralluogo preventivo",
    },
    typicalUses: [
      "Traslochi in condomini fino al 12° piano",
      "Rifacimento di coperture e tetti",
      "Manutenzione straordinaria di facciate",
      "Potature di alberi ad alto fusto",
    ],
    floors: "fino al 12° piano",
  },
];

export function getAutoscalaModel(slug: string): AutoscalaModel | undefined {
  return autoscalaModels.find((m) => m.slug === slug);
}

/**
 * Recensioni mostrate in home. Testi placeholder realistici.
 * TODO: sostituire con recensioni reali dal Google Business Profile
 * appena disponibile (vedi SEO-CHECKLIST.md).
 */

export type Review = {
  name: string;
  text: string;
};

export const reviews: Review[] = [
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
  {
    name: "Marta R. — Rivoli",
    text: "Autoscala puntuale per il trasloco in centro storico: hanno gestito loro il permesso ZTL, tutto senza pensieri.",
  },
  {
    name: "Studio di architettura — Grugliasco",
    text: "Interveniamo spesso con loro per manutenzioni su edifici alti. Operatori professionali e mezzi sempre in ordine.",
  },
  {
    name: "Famiglia Bianchi — Nichelino",
    text: "Trasloco al 9° piano senza ascensore: in una mattina hanno svuotato tutta casa. Costo onesto e trasparente.",
  },
  {
    name: "Impresa edile — Settimo Torinese",
    text: "Ci supportano per gli interventi sui capannoni: rapidi, con tutta la documentazione di sicurezza in regola.",
  },
  {
    name: "Roberto T. — Venaria Reale",
    text: "Gestione del permesso vicino alla Reggia impeccabile: si sono occupati di tutto loro, anche della segnaletica.",
  },
];

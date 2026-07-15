/**
 * Configurazione centrale del sito: dati aziendali, contatti, orari.
 * Modificare QUI i dati aziendali: si propagano automaticamente a
 * header, footer, schema JSON-LD, pagine contatti e CTA.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.noleggio-autoscale.it"
).replace(/\/$/, "");

export const business = {
  name: "Noleggio Autoscale",
  legalName: "Noleggio Autoscale", // TODO: inserire ragione sociale completa
  phone: "+393208921103",
  phoneDisplay: "320 892 1103",
  whatsapp: "393208921103",
  email: "stefanotraslochitorino@gmail.com",
  address: {
    street: "Corso Svizzera 116",
    city: "Torino",
    province: "TO",
    postalCode: "10143",
    region: "Piemonte",
    country: "IT",
  },
  vatNumber: "[INSERIRE P.IVA]", // TODO: inserire Partita IVA reale
  openingHours: {
    days: "Lunedì – Domenica",
    hours: "8:00 – 20:00",
    // Formato Schema.org
    schema: "Mo-Su 08:00-20:00",
  },
  geo: {
    // Coordinate approssimative di Corso Svizzera 116, Torino
    latitude: 45.0872,
    longitude: 7.6572,
  },
} as const;

export const links = {
  tel: `tel:${business.phone}`,
  whatsapp: `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    "Salve, vorrei un preventivo per un noleggio."
  )}`,
  email: `mailto:${business.email}`,
} as const;

/** Placeholder analytics: impostare le env var per attivarli. */
export const analytics = {
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
} as const;

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  // trailing slash coerente con next.config
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_URL}${withSlash}`;
}

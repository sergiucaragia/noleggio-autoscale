/**
 * Builder per i dati strutturati Schema.org (JSON-LD).
 * Ogni funzione restituisce un oggetto pronto per il componente <JsonLd />.
 */

import { absoluteUrl, business, SITE_URL } from "./config";
import { cities } from "./cities";
import type { FaqItem } from "./services";

/** LocalBusiness — iniettato nel layout globale */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: business.name,
    url: `${SITE_URL}/`,
    telephone: business.phone,
    email: business.email,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    priceRange: "€€",
  };
}

/** Service — per ogni pagina servizio */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: opts.areaName
      ? { "@type": "City", name: opts.areaName }
      : cities.map((c) => ({ "@type": "City", name: c.name })),
    serviceType: opts.name,
  };
}

/** FAQPage — per pagina FAQ e sezioni FAQ delle pagine servizio */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList — su tutte le pagine interne */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Article — per i post del blog */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      "@type": "Organization",
      name: business.name,
      url: `${SITE_URL}/`,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(opts.path),
  };
}

/**
 * Helper per generare i Metadata di Next.js in modo coerente su tutte le
 * pagine: title, description, canonical, Open Graph e Twitter Card.
 */

import type { Metadata } from "next";
import { absoluteUrl, business } from "./config";

export function buildMetadata(opts: {
  title: string;
  description: string;
  /** Path relativo della pagina, es. "/noleggio-autogru" */
  path: string;
  ogType?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    // absolute: i title qui includono già il brand; evita il doppio
    // suffisso del template definito nel layout
    title: { absolute: opts.title },
    description: opts.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: business.name,
      locale: "it_IT",
      type: opts.ogType ?? "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}

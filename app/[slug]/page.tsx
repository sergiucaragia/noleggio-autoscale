import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { autoscalaModels, getAutoscalaModel } from "@/lib/services";
import { cities, getCity } from "@/lib/cities";
import AutoscalaModelTemplate from "@/components/templates/AutoscalaModelTemplate";
import CityTemplate from "@/components/templates/CityTemplate";

/**
 * Route dinamica di primo livello per gli slug SEO "piatti" in stile
 * falanoleggi.it:
 *   /noleggio-autoscala-24-metri/  → scheda altezza (autoscalaModels)
 *   /noleggio-autoscale-torino/    → pagina città (cities)
 *
 * Per aggiungere una città o un'altezza basta aggiungere la voce nel
 * rispettivo file in lib/: route, metadata e sitemap si aggiornano da soli.
 */

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return [
    ...autoscalaModels.map((m) => ({ slug: m.slug })),
    ...cities.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const model = getAutoscalaModel(slug);
  if (model) {
    return buildMetadata({
      title: model.metaTitle,
      description: model.metaDescription,
      path: `/${model.slug}`,
    });
  }

  const city = getCity(slug);
  if (city) {
    return buildMetadata({
      title: `Noleggio Autoscale a ${city.name} | Noleggio Autoscale`,
      description: `Noleggio autoscale a ${city.name}: mezzi dal 1° al 12° piano con operatore per traslochi, potature e lavori in quota. Preventivo gratuito in giornata.`,
      path: `/${city.slug}`,
    });
  }

  return {};
}

export default async function SlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const model = getAutoscalaModel(slug);
  if (model) return <AutoscalaModelTemplate model={model} />;

  const city = getCity(slug);
  if (city) return <CityTemplate city={city} />;

  notFound();
}

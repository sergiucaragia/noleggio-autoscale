import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/config";
import { services, autoscalaModels, praticheService } from "@/lib/services";
import { cities } from "@/lib/cities";
import { blogPosts } from "@/lib/blog";

/**
 * Sitemap generata dinamicamente: include automaticamente tutte le pagine
 * statiche, i servizi, le altezze autoscala, le città e gli articoli del
 * blog. Aggiungendo una voce nei file lib/ la sitemap si aggiorna da sola.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/dove-operiamo"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/chi-siamo"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contatti"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl("/privacy-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: absoluteUrl("/cookie-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    ...services.map((s) => ({
      url: absoluteUrl(`/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: absoluteUrl(`/${praticheService.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...autoscalaModels.map((m) => ({
      url: absoluteUrl(`/${m.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: absoluteUrl(`/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.dateModified),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages];
}

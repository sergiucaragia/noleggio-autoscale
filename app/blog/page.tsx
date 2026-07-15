import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Blog: Guide su Autoscale e Lavori in Quota | Noleggio Autoscale",
  description:
    "Guide pratiche su noleggio autoscale, permessi comunali e lavori in quota: consigli utili da chi lavora ogni giorno sul campo.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ]}
      />

      <PageHero
        eyebrow="Blog"
        title="Blog e guide pratiche"
        description="Consigli concreti su autoscale, permessi e lavori in quota, scritti da chi è sul campo ogni giorno."
      />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="mb-2 text-sm text-gray-500">
                <time dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </p>
              <h2 className="mb-2 text-xl font-bold text-brand-900">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="hover:text-brand-600"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}/`}
                className="font-semibold text-brand-600 hover:underline"
              >
                Leggi l'articolo →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

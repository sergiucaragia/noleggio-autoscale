import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { blogPosts, getBlogPost, type BlogBlock } from "@/lib/blog";
import { articleSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogType: "article",
  });
}

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mb-4 mt-10 text-2xl font-bold text-brand-900">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mb-3 mt-8 text-xl font-bold text-brand-900">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
          {block.items.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mb-4 leading-relaxed text-gray-700">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="mb-3 text-sm text-gray-500">
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
          <h1 className="text-3xl font-black leading-tight text-brand-900 sm:text-4xl">
            {post.title}
          </h1>
        </header>

        {post.content.map(renderBlock)}

        <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <p className="mb-2 font-bold text-brand-900">
            Ti serve un'autoscala o una piattaforma?
          </p>
          <p className="text-gray-700">
            Preventivo gratuito in giornata per Torino e provincia:{" "}
            <Link
              href="/contatti/"
              className="font-semibold text-brand-600 hover:underline"
            >
              contattaci
            </Link>{" "}
            oppure scopri il{" "}
            <Link
              href="/noleggio-autoscale/"
              className="font-semibold text-brand-600 hover:underline"
            >
              servizio di noleggio autoscale
            </Link>
            .
          </p>
        </div>
      </article>

      <CTASection />
    </>
  );
}

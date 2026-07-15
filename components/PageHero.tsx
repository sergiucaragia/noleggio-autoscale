import type { ReactNode } from "react";

/**
 * Hero scuro riutilizzabile per le pagine interne (tutto tranne la home,
 * che ha un hero dedicato con CTA). Un'unica sorgente per lo stile del
 * "banner" di apertura pagina: eyebrow, H1, sottotitolo, texture a griglia
 * sottile sullo sfondo navy.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {eyebrow}
          </p>
        )}
        <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-200">
          {description}
        </p>
      </div>
    </section>
  );
}

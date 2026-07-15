import type { Review } from "@/lib/reviews";

/**
 * Carosello di recensioni a scorrimento orizzontale continuo (CSS puro,
 * nessuna libreria). L'elenco viene duplicato per ottenere un loop senza
 * scatti; l'animazione si ferma al passaggio del mouse e rispetta
 * prefers-reduced-motion (vedi .animate-marquee in globals.css).
 */
export default function ReviewsMarquee({ reviews }: { reviews: Review[] }) {
  const track = [...reviews, ...reviews];

  return (
    <div className="group relative overflow-hidden">
      {/* Sfumature ai bordi per un effetto di dissolvenza elegante */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24"
      />

      <div className="animate-marquee flex w-max gap-6 py-2 group-hover:[animation-play-state:paused]">
        {track.map((review, i) => (
          <figure
            key={`${review.name}-${i}`}
            className="w-[300px] shrink-0 rounded-xl border border-brand-100 bg-white p-6 shadow-sm sm:w-[340px]"
          >
            <p className="mb-3 text-accent-600" aria-label="5 stelle su 5">
              ★★★★★
            </p>
            <blockquote className="mb-4 leading-relaxed text-brand-600">
              «{review.text}»
            </blockquote>
            <figcaption className="text-sm font-semibold text-brand-900">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

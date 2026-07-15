import Link from "next/link";
import CTASection from "@/components/CTASection";

export default function NotFound() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="mb-2 text-6xl font-black text-accent-600">404</p>
        <h1 className="mb-4 text-2xl font-bold text-brand-900">
          Pagina non trovata
        </h1>
        <p className="mb-8 text-gray-600">
          La pagina che cerchi non esiste o è stata spostata. Torna alla home
          oppure scopri i nostri servizi.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-brand-700 px-6 py-3 font-bold text-white hover:bg-brand-600"
          >
            Torna alla home
          </Link>
          <Link
            href="/noleggio-autoscale/"
            className="rounded-lg border-2 border-brand-700 px-6 py-3 font-bold text-brand-700 hover:bg-brand-50"
          >
            Noleggio autoscale
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}

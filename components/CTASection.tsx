import Link from "next/link";
import { business, links } from "@/lib/config";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/**
 * Blocco CTA riutilizzabile a fine pagina: telefono, WhatsApp, link al form.
 */
export default function CTASection({
  title = "Hai bisogno di un preventivo?",
  subtitle = "Rispondiamo in giornata, sette giorni su sette. Chiamaci o scrivici su WhatsApp: il sopralluogo e il preventivo sono gratuiti.",
}: {
  title?: string;
  subtitle?: string;
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
      <div className="relative mx-auto max-w-4xl px-4 py-14 text-center">
        <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-brand-200">
          {subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={links.tel}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 sm:w-auto"
          >
            <PhoneIcon className="h-5 w-5" />
            Chiama {business.phoneDisplay}
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-wa px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-wa-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wa focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Scrivi su WhatsApp
          </a>
          <Link
            href="/contatti/"
            className="flex w-full items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto"
          >
            Richiedi preventivo online
          </Link>
        </div>
        <p className="mt-6 text-sm text-brand-300">
          Attivi {business.openingHours.days.toLowerCase()},{" "}
          {business.openingHours.hours} — Torino e provincia
        </p>
      </div>
    </section>
  );
}

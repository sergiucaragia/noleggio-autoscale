import Link from "next/link";
import { business, links } from "@/lib/config";
import { services, autoscalaModels, praticheService } from "@/lib/services";
import { cities } from "@/lib/cities";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Azienda */}
        <div>
          <p className="mb-3 text-lg font-bold text-white">{business.name}</p>
          <p className="mb-4 text-sm leading-relaxed">
            Noleggio autoscale e transenne con operatore a Torino e
            provincia. Mezzi revisionati, intervento rapido, preventivo
            gratuito.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {business.address.street}, {business.address.city} (
                {business.address.province})
              </span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-accent-400" />
              <a href={links.tel} className="transition-colors duration-200 hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-accent-400" />
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                WhatsApp: {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0 text-accent-400" />
              <a href={links.email} className="break-all transition-colors duration-200 hover:text-white">
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {business.openingHours.days} {business.openingHours.hours}
              </span>
            </li>
          </ul>
        </div>

        {/* Servizi */}
        <nav aria-label="Servizi">
          <p className="mb-3 font-semibold text-white">Servizi</p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} className="transition-colors duration-200 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`/${praticheService.slug}/`} className="transition-colors duration-200 hover:text-white">
                {praticheService.name}
              </Link>
            </li>
            {autoscalaModels.map((m) => (
              <li key={m.slug}>
                <Link href={`/${m.slug}/`} className="transition-colors duration-200 hover:text-white">
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Zone servite */}
        <nav aria-label="Zone servite">
          <p className="mb-3 font-semibold text-white">Dove operiamo</p>
          <ul className="space-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}/`} className="transition-colors duration-200 hover:text-white">
                  Noleggio autoscale {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/dove-operiamo/"
                className="font-medium text-accent-400 hover:text-accent-300"
              >
                Tutte le zone →
              </Link>
            </li>
          </ul>
        </nav>

        {/* Azienda / legale */}
        <nav aria-label="Informazioni">
          <p className="mb-3 font-semibold text-white">Informazioni</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chi-siamo/" className="transition-colors duration-200 hover:text-white">
                Chi siamo
              </Link>
            </li>
            <li>
              <Link href="/faq/" className="transition-colors duration-200 hover:text-white">
                Domande frequenti
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="transition-colors duration-200 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contatti/" className="transition-colors duration-200 hover:text-white">
                Contatti e preventivi
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy/" className="transition-colors duration-200 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy/" className="transition-colors duration-200 hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} {business.name} — {business.address.street},{" "}
            {business.address.postalCode} {business.address.city} — P.IVA{" "}
            {business.vatNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}

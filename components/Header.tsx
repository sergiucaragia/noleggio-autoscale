"use client";

import Link from "next/link";
import { useState } from "react";
import { business, links } from "@/lib/config";
import { services } from "@/lib/services";
import { MenuIcon, PhoneIcon, WhatsAppIcon, XIcon } from "./icons";

const navItems = [
  { label: "Home", href: "/" },
  ...services.map((s) => ({ label: s.name, href: `/${s.slug}/` })),
  { label: "Dove operiamo", href: "/dove-operiamo/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contatti", href: "/contatti/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top bar contatti */}
      <div className="bg-brand-900 text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5">
          <p className="hidden sm:block">
            {business.openingHours.days} {business.openingHours.hours} — Torino
            e provincia
          </p>
          <div className="flex items-center gap-4">
            <a
              href={links.tel}
              className="flex items-center gap-1.5 font-semibold transition-colors duration-200 hover:text-accent-300"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors duration-200 hover:text-accent-300"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Nav principale */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          aria-label="Noleggio Autoscale — Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900 text-lg font-bold text-white">
            NA
          </span>
          <span className="font-heading text-lg font-semibold leading-tight text-brand-900">
            Noleggio
            <br className="sm:hidden" /> Autoscale
          </span>
        </Link>

        <nav className="hidden xl:block" aria-label="Navigazione principale">
          <ul className="flex flex-nowrap items-center gap-5 whitespace-nowrap text-sm font-medium text-brand-700">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="rounded-sm py-2 transition-colors duration-200 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="shrink-0">
              <Link
                href="/contatti/"
                className="rounded-lg bg-accent-600 px-4 py-2.5 font-semibold text-white transition-colors duration-200 hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              >
                Preventivo gratuito
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-900 transition-colors duration-200 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <nav
          className="border-t border-brand-100 bg-white xl:hidden"
          aria-label="Navigazione mobile"
        >
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-brand-100 last:border-0">
                <Link
                  href={item.href}
                  className="block py-3 font-medium text-brand-800 transition-colors duration-200 hover:text-accent-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/contatti/"
                className="block rounded-lg bg-accent-600 px-4 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-accent-700"
                onClick={() => setMobileOpen(false)}
              >
                Preventivo gratuito
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

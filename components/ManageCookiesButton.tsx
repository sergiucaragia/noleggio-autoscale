"use client";

import { openCookiePreferences } from "@/lib/cookieConsent";

/**
 * Riapre il pannello di preferenze cookie (components/CookieConsent.tsx).
 * Va tenuto sempre raggiungibile da qualche parte nel sito — di default è
 * nel footer — così l'utente può cambiare idea in qualsiasi momento.
 */
export default function ManageCookiesButton({
  className = "transition-colors duration-200 hover:text-white",
}: {
  className?: string;
}) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Gestisci cookie
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_EVENTS,
  activateScriptsForConsent,
  getConsent,
  saveConsent,
  updateGoogleConsentMode,
} from "@/lib/cookieConsent";

type Toggles = { analytics: boolean; marketing: boolean };

const CATEGORIES: {
  key: keyof Toggles;
  label: string;
  description: string;
}[] = [
  {
    key: "analytics",
    label: "Analitici",
    description:
      "Ci aiutano a capire come i visitatori usano il sito (es. Google Analytics), in forma aggregata.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Usati per mostrare annunci pertinenti e misurarne l'efficacia (es. Meta Pixel, Google Ads).",
  },
];

/**
 * Banner di consenso cookie in stile "drawer", fisso in basso.
 *
 * - Compare al primo accesso (nessun consenso salvato) e resta accessibile
 *   in seguito tramite l'evento CONSENT_EVENTS.OPEN, sparato ad esempio dal
 *   link "Gestisci cookie" nel footer (components/ManageCookiesButton.tsx).
 * - Va montato una sola volta, nel layout root (app/layout.tsx).
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [toggles, setToggles] = useState<Toggles>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = getConsent();

    if (existing) {
      // L'utente aveva già scelto: applichiamo subito la sua decisione
      // (riattiva gli script "congelati" e aggiorna Google Consent Mode)
      // senza mostrare di nuovo il banner.
      activateScriptsForConsent(existing);
      updateGoogleConsentMode(existing);
      setToggles({ analytics: existing.analytics, marketing: existing.marketing });
    } else {
      setVisible(true);
    }

    function handleOpen() {
      const current = getConsent();
      if (current) {
        setToggles({ analytics: current.analytics, marketing: current.marketing });
      }
      setPanelOpen(true);
      setVisible(true);
    }

    window.addEventListener(CONSENT_EVENTS.OPEN, handleOpen);
    return () => window.removeEventListener(CONSENT_EVENTS.OPEN, handleOpen);
  }, []);

  function persist(choice: Toggles) {
    saveConsent(choice);
    setVisible(false);
    setPanelOpen(false);
  }

  function acceptAll() {
    setToggles({ analytics: true, marketing: true });
    persist({ analytics: true, marketing: true });
  }

  function rejectAll() {
    setToggles({ analytics: false, marketing: false });
    persist({ analytics: false, marketing: false });
  }

  function savePreferences() {
    persist(toggles);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="animate-cookie-slide-up fixed inset-x-0 bottom-16 z-[100] px-4 pb-4 md:bottom-0 md:pb-6"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-brand-950 text-white shadow-2xl">
        <div className="p-5 sm:p-6">
          <h2 id="cookie-consent-title" className="mb-2 text-lg font-bold">
            Diamo valore alla tua privacy
          </h2>
          <p
            id="cookie-consent-description"
            className="mb-4 text-sm leading-relaxed text-brand-200"
          >
            Usiamo cookie tecnici necessari al funzionamento del sito e, solo
            con il tuo consenso, cookie analitici e di marketing per
            migliorare la tua esperienza. Puoi accettare tutto, rifiutare o
            scegliere le categorie che preferisci. Leggi la{" "}
            <Link
              href="/cookie-policy/"
              className="font-semibold text-accent-300 underline underline-offset-2 hover:text-accent-200"
            >
              Politica sui cookie
            </Link>
            .
          </p>

          {panelOpen && (
            <div className="mb-4 space-y-4 rounded-xl border border-white/10 bg-white/5 p-4">
              {/* Necessari: sempre attivo, non disattivabile */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">Necessari</p>
                  <p className="text-sm text-brand-300">
                    Indispensabili per il funzionamento del sito (es.
                    ricordare la tua scelta sui cookie). Non possono essere
                    disattivati.
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-200">
                  Sempre attivo
                </span>
              </div>

              {CATEGORIES.map((cat) => (
                <div key={cat.key} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{cat.label}</p>
                    <p className="text-sm text-brand-300">{cat.description}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={toggles[cat.key]}
                    aria-label={`Consenso cookie ${cat.label.toLowerCase()}`}
                    onClick={() =>
                      setToggles((t) => ({ ...t, [cat.key]: !t[cat.key] }))
                    }
                    className={`mt-1 inline-flex h-6 w-11 shrink-0 items-center rounded-full px-0.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950 ${
                      toggles[cat.key] ? "bg-accent-600" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
                        toggles[cat.key] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => setPanelOpen((v) => !v)}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-accent-300 underline-offset-4 transition-colors duration-200 hover:underline sm:mr-auto"
            >
              {panelOpen ? "Nascondi opzioni" : "Personalizza"}
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 hover:bg-white/10"
            >
              Rifiuta tutto
            </button>
            {panelOpen ? (
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-700"
              >
                Salva preferenze
              </button>
            ) : (
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-700"
              >
                Accetta tutto
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

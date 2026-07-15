/**
 * Sistema di gestione del consenso cookie (GDPR).
 *
 * Non è un componente React: è la logica condivisa (lettura/scrittura del
 * consenso, eventi, attivazione script di terze parti) usata sia dal banner
 * (components/CookieConsent.tsx) sia da chi carica script esterni
 * (components/Analytics.tsx). Tutte le funzioni sono no-op lato server
 * (controllano `typeof window`), quindi il file può essere importato
 * ovunque senza problemi di SSR.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * COME BLOCCARE UNO SCRIPT DI TERZE PARTI (es. Meta Pixel, TikTok Pixel...)
 * ─────────────────────────────────────────────────────────────────────────
 * Se devi incollare uno snippet di script che NON passa da next/script
 * (es. codice fornito così com'è da un tool di marketing), usa il pattern
 * "type=text/plain": il browser non lo esegue finché non lo riattiviamo
 * noi via JS, dopo il consenso.
 *
 *   <script
 *     type="text/plain"
 *     data-cookie-category="marketing"
 *   >
 *     // codice originale dello script qui dentro, invariato
 *   </script>
 *
 * - `data-cookie-category` deve valere "analytics" o "marketing" (i cookie
 *   "necessary" non vanno mai bloccati: sono indispensabili al sito).
 * - Non serve altro: `activateScriptsForConsent()` qui sotto cerca questi
 *   script nel DOM e li riattiva automaticamente quando l'utente acconsente
 *   alla categoria corrispondente (sia scegliendo dal banner, sia nelle
 *   visite successive se aveva già acconsentito).
 * - In React/Next.js puoi ottenere lo stesso risultato con
 *   `dangerouslySetInnerHTML`, vedi l'esempio commentato in
 *   components/Analytics.tsx.
 */

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type ConsentState = {
  necessary: true; // sempre vero: i cookie tecnici non sono disattivabili
  analytics: boolean;
  marketing: boolean;
  /** Data ISO del salvataggio, utile per audit e per invalidare consensi vecchi */
  timestamp: string;
};

const COOKIE_NAME = "cookie_consent";
const COOKIE_MAX_AGE_DAYS = 180;

/** Nomi degli eventi custom usati per far comunicare i componenti tra loro. */
export const CONSENT_EVENTS = {
  /** Sparato quando il consenso viene salvato/aggiornato (detail: ConsentState) */
  CHANGE: "cookieconsent:change",
  /** Sparato per chiedere al banner di riaprirsi (es. dal link "Gestisci cookie" nel footer) */
  OPEN: "cookieconsent:open",
} as const;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  // SameSite=Lax + path=/ : cookie di prima parte, disponibile su tutto il sito.
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

/** Legge il consenso salvato. Restituisce null se l'utente non ha ancora scelto. */
export function getConsent(): ConsentState | null {
  const raw = readCookie(COOKIE_NAME);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (typeof parsed.analytics === "boolean" && typeof parsed.marketing === "boolean") {
      return {
        necessary: true,
        analytics: parsed.analytics,
        marketing: parsed.marketing,
        timestamp: parsed.timestamp ?? new Date().toISOString(),
      };
    }
  } catch {
    // cookie corrotto o in formato vecchio: trattalo come "nessun consenso"
  }
  return null;
}

/**
 * Salva la scelta dell'utente (cookie, 180 giorni), notifica il resto del
 * sito (evento CHANGE) e attiva subito gli script delle categorie
 * autorizzate.
 */
export function saveConsent(choice: { analytics: boolean; marketing: boolean }): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    timestamp: new Date().toISOString(),
  };

  writeCookie(COOKIE_NAME, JSON.stringify(state), COOKIE_MAX_AGE_DAYS);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENTS.CHANGE, { detail: state }));
  }

  activateScriptsForConsent(state);
  updateGoogleConsentMode(state);

  return state;
}

/** Riapre il banner/pannello preferenze (usato dal link "Gestisci cookie" nel footer). */
export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_EVENTS.OPEN));
}

/**
 * Cerca nel DOM gli script "congelati" con
 * <script type="text/plain" data-cookie-category="...">
 * e riesegue quelli delle categorie appena autorizzate, sostituendo il tag
 * con una copia eseguibile (i browser non eseguono mai un <script> a cui
 * viene solo cambiato l'attributo `type` in retrospettiva: va ricreato).
 */
export function activateScriptsForConsent(consent: ConsentState): void {
  if (typeof document === "undefined") return;

  const categories: ConsentCategory[] = ["analytics", "marketing"];
  for (const category of categories) {
    if (!consent[category]) continue;

    const frozenScripts = document.querySelectorAll<HTMLScriptElement>(
      `script[type="text/plain"][data-cookie-category="${category}"]`
    );

    frozenScripts.forEach((oldScript) => {
      if (oldScript.dataset.cookieActivated === "true") return;

      const newScript = document.createElement("script");
      for (const attr of Array.from(oldScript.attributes)) {
        if (attr.name === "type") continue;
        newScript.setAttribute(attr.name, attr.value);
      }
      newScript.type = "text/javascript";
      newScript.text = oldScript.text;
      oldScript.dataset.cookieActivated = "true";
      oldScript.replaceWith(newScript);
    });
  }
}

/* ───────────────────────────────────────────────────────────────────────
 * EXTRA — Google Consent Mode v2
 * ───────────────────────────────────────────────────────────────────────
 * Facoltativo: serve solo se usi Google Analytics 4 e/o Google Ads tramite
 * gtag.js o GTM. Consent Mode dice a Google quali categorie di storage
 * sono autorizzate, così i tag Google possono adattarsi (es. GA4 passa in
 * modalità "cookieless ping" invece di non misurare nulla).
 *
 * In questo progetto lo script di GA4/GTM viene comunque caricato SOLO
 * dopo il consenso "analytics" (vedi components/Analytics.tsx): Consent
 * Mode qui è un livello aggiuntivo, non l'unico meccanismo di blocco.
 * Se non ti interessa, puoi ignorare queste due funzioni: non vengono
 * chiamate automaticamente da nient'altro in questo file.
 * ------------------------------------------------------------------- */

type GtagFn = (...args: unknown[]) => void;
type WindowWithGtag = typeof window & { dataLayer?: unknown[]; gtag?: GtagFn };

function ensureGtag(): GtagFn {
  const w = window as WindowWithGtag;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  }
  return w.gtag;
}

/**
 * Da chiamare il prima possibile (prima ancora che l'utente scelga), per
 * dire a Google che di default nulla è autorizzato. Va invocata prima che
 * gtag.js/GTM si carichino.
 */
export function setGoogleConsentModeDefaults(): void {
  if (typeof window === "undefined") return;
  const gtag = ensureGtag();
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    // Google attende fino a 500ms un eventuale aggiornamento prima di
    // considerare definitivo il default "denied".
    wait_for_update: 500,
  });
}

/** Da chiamare ogni volta che il consenso cambia, per aggiornare Google. */
export function updateGoogleConsentMode(consent: ConsentState): void {
  if (typeof window === "undefined") return;
  const gtag = ensureGtag();
  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

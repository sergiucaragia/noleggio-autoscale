"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { analytics } from "@/lib/config";
import {
  CONSENT_EVENTS,
  getConsent,
  setGoogleConsentModeDefaults,
  updateGoogleConsentMode,
  type ConsentState,
} from "@/lib/cookieConsent";

/**
 * Google Analytics 4 + Google Tag Manager.
 *
 * BLOCCO REALE: gli script vengono richiesti al browser SOLO dopo che
 * l'utente ha dato consenso esplicito alla categoria "Analitici" nel
 * banner cookie (components/CookieConsent.tsx). Finché non lo fa, questi
 * <script> non vengono nemmeno renderizzati — non è un blocco "soft" via
 * Consent Mode, lo script proprio non parte.
 *
 * Attivi solo se sono impostate le rispettive env var
 * (NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GTM_ID) — vedi .env.example.
 */
export default function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    // EXTRA — Google Consent Mode v2: impostiamo i default a "denied" il
    // prima possibile. È un livello aggiuntivo rispetto al blocco reale
    // qui sopra: utile soprattutto se un giorno aggiungerai tag Google Ads
    // o altri tag gestiti da GTM. Per disattivarlo basta commentare la
    // riga sotto — il blocco reale (niente script finché non c'è consenso)
    // funziona comunque.
    setGoogleConsentModeDefaults();

    const existing = getConsent();
    if (existing) setAnalyticsAllowed(existing.analytics);

    function handleChange(event: Event) {
      const consent = (event as CustomEvent<ConsentState>).detail;
      setAnalyticsAllowed(consent.analytics);
      updateGoogleConsentMode(consent);
    }

    window.addEventListener(CONSENT_EVENTS.CHANGE, handleChange);
    return () => window.removeEventListener(CONSENT_EVENTS.CHANGE, handleChange);
  }, []);

  if (!analyticsAllowed) return null;

  return (
    <>
      {analytics.gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${analytics.gtmId}');`}
        </Script>
      )}
      {analytics.gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analytics.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analytics.gaId}');`}
          </Script>
        </>
      )}

      {/* ────────────────────────────────────────────────────────────────
       * ESEMPIO — script di terze parti bloccato fino al consenso
       * "marketing" (es. Meta Pixel). Disattivato di default: per usarlo,
       * incolla il tuo Pixel ID e rimuovi il commento.
       *
       * Nota: qui lo script è marcato type="text/plain" e viene riattivato
       * automaticamente da lib/cookieConsent.ts → activateScriptsForConsent()
       * quando l'utente acconsente alla categoria "marketing". Funziona
       * anche se aggiunto così com'è (fuori da React) in qualunque pagina.
       * ────────────────────────────────────────────────────────────────
       *
       * <script
       *   type="text/plain"
       *   data-cookie-category="marketing"
       *   dangerouslySetInnerHTML={{
       *     __html: `
       *       !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
       *       n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
       *       if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
       *       n.queue=[];t=b.createElement(e);t.async=!0;
       *       t.src=v;s=b.getElementsByTagName(e)[0];
       *       s.parentNode.insertBefore(t,s)}(window, document,'script',
       *       'https://connect.facebook.net/en_US/fbevents.js');
       *       fbq('init', 'IL_TUO_PIXEL_ID');
       *       fbq('track', 'PageView');
       *     `,
       *   }}
       * />
       */}
    </>
  );
}

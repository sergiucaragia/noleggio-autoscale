import Script from "next/script";
import { analytics } from "@/lib/config";

/**
 * Google Analytics 4 + Google Tag Manager.
 * Gli script vengono caricati SOLO se le rispettive env var sono impostate
 * (NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GTM_ID) — vedi .env.example.
 *
 * NOTA GDPR: prima di andare in produzione con analytics attivi va
 * integrata una Consent Management Platform (es. Iubenda, Cookiebot)
 * e il caricamento va condizionato al consenso. Vedi SEO-CHECKLIST.md.
 */
export default function Analytics() {
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
    </>
  );
}

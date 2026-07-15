# Noleggio Autoscale — Sito web

Sito professionale per il noleggio di autoscale, autogrù, piattaforme aeree e transenne a Torino e provincia. Costruito con Next.js (App Router), TypeScript e Tailwind CSS, ottimizzato per la SEO locale.

## Avvio rapido

```bash
npm install
cp .env.example .env.local   # poi compilare le variabili
npm run dev                  # http://localhost:3000
```

Build di produzione: `npm run build` — Lint: `npm run lint`

## Cose da completare prima del lancio

### 1. Dati aziendali

Tutti i dati aziendali sono centralizzati in **`lib/config.ts`**: modificandoli lì si aggiornano header, footer, schema JSON-LD, pagina contatti e CTA. Da completare:

- [ ] **Ragione sociale completa** (`legalName`)
- [ ] **Coordinate geografiche** (`geo`) — attualmente approssimative, da verificare per Via Italia 88, Settimo Torinese

### 2. Dominio

- [ ] Acquistare il dominio e impostarlo in `NEXT_PUBLIC_SITE_URL` (in `.env.local` in locale e nelle Environment Variables su Vercel). Il valore attuale `https://www.noleggio-autoscale.it` è un placeholder: canonical, sitemap e Open Graph dipendono da questa variabile.

### 3. Invio email del form preventivo

Il form (`components/ContactForm.tsx` → `app/api/contact/route.ts`) è funzionante ma **l'invio email è da attivare**:

1. Creare un account su [Resend](https://resend.com) (piano gratuito sufficiente)
2. Verificare il dominio in Resend
3. `npm install resend`
4. Impostare `RESEND_API_KEY` in `.env.local` / Vercel
5. Decommentare il blocco "Invio con Resend" in `app/api/contact/route.ts` e aggiornare il campo `from` con il dominio verificato

Senza API key le richieste vengono solo loggate lato server (comodo in sviluppo).

### 4. Foto reali

Il sito usa gradienti e icone come placeholder. **Sostituire con foto reali dei mezzi appena disponibili**: le foto autentiche (mezzi, team, interventi) sono l'elemento che più aumenta fiducia e conversioni. I punti dove inserirle sono marcati con commenti `TODO FOTO` in:

- `app/page.tsx` (hero della home)
- `app/noleggio-autoscale/page.tsx` e le altre pagine servizio
- `components/templates/AutoscalaModelTemplate.tsx` e `CityTemplate.tsx`
- `app/chi-siamo/page.tsx`

Usare sempre `next/image` con `width`/`height` espliciti, `priority` solo sull'immagine hero, e alt-text descrittivo con keyword naturale (es. "noleggio autoscala 25 metri Torino, trasloco in corso").

### 5. Analytics e consenso cookie

- [ ] Impostare `NEXT_PUBLIC_GA_ID` (GA4) e/o `NEXT_PUBLIC_GTM_ID` (GTM) in `.env.local`/Vercel
- [ ] Far validare Privacy Policy e Cookie Policy (testi base in `app/privacy-policy/` e `app/cookie-policy/`) da un consulente

Il banner di consenso cookie è già integrato (`components/CookieConsent.tsx`): GA4/GTM (`components/Analytics.tsx`) vengono caricati SOLO dopo il consenso esplicito alla categoria "Analitici" — nessuna CMP esterna necessaria. Dettagli tecnici (durata del consenso, come bloccare altri script di terze parti, Google Consent Mode v2) sono commentati in `lib/cookieConsent.ts`.

## Come aggiungere contenuti

L'architettura è data-driven: i contenuti stanno in `lib/`, le pagine si generano da sole.

| Cosa | Dove | Effetto |
|---|---|---|
| Nuova città | `lib/cities.ts` | Pagina `/noleggio-autoscale-<città>/`, sitemap, link interni, areaServed |
| Nuova altezza autoscala | `lib/services.ts` (`autoscalaModels`) | Pagina `/noleggio-autoscala-X-metri/`, sitemap, link |
| Nuovo articolo blog | `lib/blog.ts` | Pagina `/blog/<slug>/`, sitemap, listing |
| Dati aziendali | `lib/config.ts` | Ovunque |

Per le pagine città: scrivere 3-4 `paragraphs` con dettagli davvero specifici del comune (quartieri, tipo di edifici, particolarità locali) e una `extraFaq` dedicata — è ciò che rende ogni pagina unica agli occhi di Google. Non copiare frasi tra città.

## Deploy su Vercel

1. Pushare il repository su GitHub
2. Su [vercel.com](https://vercel.com) → "Add New Project" → importare il repo (framework rilevato automaticamente)
3. In **Settings → Environment Variables** inserire le variabili di `.env.example`
4. Deploy — ogni push su `main` pubblica automaticamente
5. In **Settings → Domains** collegare il dominio acquistato (Vercel guida la configurazione DNS)

## Collegare Google Search Console e Analytics

**Search Console** (indicizzazione):
1. [search.google.com/search-console](https://search.google.com/search-console) → aggiungi proprietà → tipo "Dominio"
2. Verifica via record DNS TXT (dal pannello del registrar o da Vercel Domains)
3. Inviare la sitemap: `https://<dominio>/sitemap.xml`

**Google Analytics 4**:
1. [analytics.google.com](https://analytics.google.com) → crea proprietà → ottieni il Measurement ID (`G-…`)
2. Inserirlo in `NEXT_PUBLIC_GA_ID` su Vercel e rideployare
3. Collegare GA4 a Search Console (Amministrazione → Collegamenti prodotto)

Dopo il lancio seguire **`SEO-CHECKLIST.md`** per le attività post-pubblicazione (Google Business Profile, recensioni, ecc.).

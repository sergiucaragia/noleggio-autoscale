# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/SEO website for "Noleggio Autoscale", a truck-mounted ladder (autoscala), crane and aerial platform rental company in Torino, Italy. Modeled after falanoleggi.it: one page per service + one page per served city, heavy local-SEO focus. All user-facing content is in Italian.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (also the main correctness check: all pages are statically generated, so content/data errors surface here)
- `npm run lint` — ESLint

No test suite. Verify changes with `npm run build`.

## Architecture

Next.js App Router + TypeScript + Tailwind CSS 4 (theme tokens defined via `@theme` in `app/globals.css`, not a tailwind.config file). `trailingSlash: true` in next.config.ts — all internal links must end with `/`.

**Data-driven content**: pages are generated from data files in `lib/`; adding an entry there automatically creates the route, sitemap entry, internal links and JSON-LD:

- `lib/config.ts` — single source of truth for business data (phone, address, hours), `SITE_URL` (from `NEXT_PUBLIC_SITE_URL`), and `absoluteUrl()`
- `lib/services.ts` — the 2 main services (autoscale, transenne) + `autoscalaModels` (24/34/45m ladder heights with specs and per-page SEO copy)
- `lib/cities.ts` — served cities; each has 3-4 unique `paragraphs` + `extraFaq` to make city pages unique (avoid doorway-page duplication — never copy sentences between cities)
- `lib/blog.ts` — blog posts as typed content blocks (no CMS/MDX)
- `lib/schema.ts` — JSON-LD builders (LocalBusiness, Service, FAQPage, BreadcrumbList, Article), rendered via `components/JsonLd.tsx`
- `lib/seo.ts` — `buildMetadata()` helper; every page's `metadata`/`generateMetadata` goes through it (title, description, canonical, OG)

**Routing**: flat SEO slugs at the root. Static folders exist for the 4 main services + pratiche page; `app/[slug]/page.tsx` handles BOTH city pages (`noleggio-autoscale-<città>`) and ladder-height pages (`noleggio-autoscala-XX-metri`) via `generateStaticParams` (`dynamicParams = false`), dispatching to `components/templates/CityTemplate.tsx` or `AutoscalaModelTemplate.tsx`.

**Contact form**: `components/ContactForm.tsx` (React Hook Form + Zod, client) posts to `app/api/contact/route.ts` (re-validates with Zod, honeypot field `website`). Email sending via Resend is stubbed behind a commented block + `RESEND_API_KEY`; without the key, submissions are only logged.

**Cookie consent**: `lib/cookieConsent.ts` holds all the logic (180-day cookie, `CONSENT_EVENTS.CHANGE`/`OPEN` custom events, Google Consent Mode v2 helpers, and `activateScriptsForConsent()` which re-executes any `<script type="text/plain" data-cookie-category="analytics|marketing">` once that category is granted — the pattern to use for third-party snippets pasted outside React's control). `components/CookieConsent.tsx` is the bottom drawer UI; `components/Analytics.tsx` only renders the GA4/GTM `<Script>` tags once `analytics` consent is granted (real blocking, not just Consent Mode). `components/ManageCookiesButton.tsx` (in the footer) reopens the drawer via `CONSENT_EVENTS.OPEN`.

## Conventions

- Italian copy in JSX uses typographic apostrophes (') — straight quotes trip `react/no-unescaped-entities`
- Real business data lives only in `lib/config.ts`; unknown values stay as explicit placeholders (e.g. `[INSERIRE P.IVA]`), never invented
- Photo placeholders are marked with `TODO FOTO` comments; images must use `next/image` with explicit dimensions, `priority` only on the hero
- Mobile sticky call/WhatsApp bar (`components/StickyCTA.tsx`) is compensated by `body { padding-bottom }` in globals.css
- Post-launch SEO tasks live in SEO-CHECKLIST.md; pre-launch setup (env vars, Resend, domain) in README.md

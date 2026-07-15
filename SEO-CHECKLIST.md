# SEO Checklist — attività post-lancio

Checklist operativa da seguire DOPO la pubblicazione del sito. Le attività tecniche pre-lancio (dominio, env var, form email) sono nel README.

## Settimana 1 — Fondamenta

- [ ] **Verificare la proprietà su Google Search Console** (tipo "Dominio", verifica DNS)
- [ ] **Inviare la sitemap**: `https://<dominio>/sitemap.xml` in Search Console → Sitemap
- [ ] Richiedere l'indicizzazione manuale delle pagine principali (URL Inspection → Request Indexing): home, /noleggio-autoscale/, pagine città
- [ ] Verificare che `robots.txt` e `sitemap.xml` rispondano correttamente sul dominio di produzione
- [ ] Testare i dati strutturati con il [Rich Results Test](https://search.google.com/test/rich-results): LocalBusiness (home), FAQPage (pagina FAQ + pagine servizio), BreadcrumbList
- [ ] Lighthouse su mobile per home e una pagina servizio: obiettivo 90+ su Performance, SEO, Accessibilità, Best Practices
- [ ] Attivare GA4 (con banner consenso cookie attivo) e collegarlo a Search Console

## Settimana 1-2 — Google Business Profile (fondamentale per il locale)

- [ ] Creare il profilo su [business.google.com](https://business.google.com): nome "Noleggio Autoscale", categoria "Servizio di noleggio attrezzature" (+ categorie secondarie pertinenti)
- [ ] Indirizzo Via Italia 88, Settimo Torinese — coerente al carattere con il footer del sito (NAP consistency)
- [ ] Completare: orari (lun-dom 8-20), telefono, link al sito, area di servizio (Torino + comuni della cintura)
- [ ] Caricare foto reali dei mezzi (minimo 10): sono il fattore n°1 di conversione della scheda
- [ ] Pubblicare un primo post di presentazione
- [ ] Verificare la scheda (cartolina/telefono/video a seconda dell'opzione proposta)

## Primo mese — Recensioni e citazioni

- [ ] Chiedere una recensione Google a ogni cliente soddisfatto (inviare il link diretto via WhatsApp dopo l'intervento — creare il link breve dalla scheda GBP)
- [ ] Rispondere a TUTTE le recensioni, positive e negative
- [ ] Censire l'attività nelle directory locali: PagineGialle, Virgilio, Yelp, Cylex, Hotfrog — sempre con Nome/Indirizzo/Telefono identici
- [ ] Registrarsi nei portali di settore (noleggio attrezzature, edilizia)

## Primo trimestre — Contenuti e monitoraggio

- [ ] Completare i contenuti unici delle pagine città (400-600 parole ciascuna, dettagli reali della zona)
- [ ] Pubblicare 1-2 articoli blog al mese (idee: costi noleggio autoscala, autoscala vs ponteggio, traslochi ai piani alti, potature in quota)
- [ ] Monitorare Search Console ogni settimana: query in crescita, pagine con impression ma CTR basso (migliorare title/description), errori di copertura
- [ ] Verificare posizionamento per le query obiettivo: "noleggio autoscale torino", "noleggio autoscala [comune]", "noleggio piattaforma aerea torino"
- [ ] Aggiungere nuove pagine città man mano che si acquisiscono clienti in nuove zone (basta una voce in `lib/cities.ts`)
- [ ] Sostituire le recensioni placeholder in home con recensioni reali da Google (citando la fonte)

## Continuativo

- [ ] Foto reali di ogni intervento significativo (con consenso del cliente): alimentano sito, GBP e social
- [ ] Tenere aggiornati orari e dati su sito + GBP (festività, ferie)
- [ ] Controllare Lighthouse/Core Web Vitals dopo ogni modifica significativa (Search Console → Esperienza)
- [ ] Backlink locali: fornitori, partner, associazioni di categoria, sponsorizzazioni locali

## Note tecniche

- Ogni nuova pagina entra automaticamente in sitemap (vedi `app/sitemap.ts`)
- Title format: `[Servizio] a [Città] | Noleggio Autoscale` — max 60 caratteri
- Meta description: 150-160 caratteri, con CTA
- Non creare pagine città "fotocopia": ogni pagina deve avere contenuto locale reale, altrimenti Google le tratta come doorway page

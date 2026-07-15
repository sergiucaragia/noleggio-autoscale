/**
 * Città e comuni serviti. Per aggiungere una nuova zona operativa basta
 * aggiungere una voce a questo array: pagina, sitemap, link interni e
 * schema areaServed si aggiornano automaticamente.
 *
 * Ogni città ha 3-4 paragrafi UNICI (`paragraphs`) e una FAQ specifica:
 * è ciò che distingue queste pagine da semplici "doorway page" agli occhi
 * di Google. Quando si aggiunge una città, scrivere contenuto davvero
 * locale (quartieri, tipo di edifici, esigenze della zona) e non copiare
 * frasi dalle altre voci.
 */

export type City = {
  /** Slug completo della pagina, formato falanoleggi: noleggio-autoscale-<città> */
  slug: string;
  name: string;
  province: string;
  /** Distanza/tempo indicativo dalla sede di Corso Svizzera 116, Torino */
  travelTime: string;
  /** Paragrafi unici della pagina (3-4, ~100 parole ciascuno) */
  paragraphs: string[];
  /** Quartieri o frazioni citati nella pagina (ricerca locale) */
  areas: string[];
  /** FAQ specifica della città */
  extraFaq?: { question: string; answer: string };
};

export const cities: City[] = [
  {
    slug: "noleggio-autoscale-torino",
    name: "Torino",
    province: "TO",
    travelTime: "sede operativa in città — intervento rapido in tutte le circoscrizioni",
    paragraphs: [
      "Torino è la nostra casa: la sede operativa è in Corso Svizzera 116, in zona San Donato, e questo ci permette di raggiungere in pochi minuti qualsiasi punto della città, dal Quadrilatero Romano a Mirafiori Sud. Conosciamo strada per strada le criticità che contano quando si lavora con un'autoscala: i portici e i dehors del centro, i controviali alberati dei grandi corsi, i cortili interni dei palazzi d'epoca e i cantieri sempre aperti della viabilità torinese.",
      "Il tessuto edilizio torinese richiede mezzi diversi a seconda del quartiere. Nel centro storico e in zone come San Salvario o Vanchiglia prevalgono palazzi d'epoca di quattro o cinque piani affacciati su vie strette, dove serve un'autoscala compatta da 18 o 25 metri capace di lavorare tra portici, alberate e auto in sosta. In Barriera di Milano, a Santa Rita o a Mirafiori, invece, i condomini degli anni '60 e '70 superano spesso i dieci piani: qui entrano in gioco i mezzi da 35 e 45 metri.",
      "La burocrazia torinese non ci spaventa: presentiamo ogni settimana pratiche di occupazione suolo pubblico agli uffici della città e conosciamo tempi e requisiti di ogni circoscrizione. Per gli interventi nella ZTL Centrale gestiamo anche il permesso di accesso temporaneo dei mezzi operativi, così il lavoro parte in regola e senza sanzioni. Il cartello di divieto di sosta viene posato da noi almeno 48 ore prima, con documentazione fotografica.",
      "I lavori più richiesti in città? Traslochi ai piani alti — spesso l'unico modo sensato di far uscire un armadio da un palazzo d'epoca senza ascensore —, potature dei grandi platani e tigli nei cortili condominiali, manutenzione di grondaie, cornicioni e frontalini, installazione di condizionatori e il recupero di mobili da solai e mansarde. Lavoriamo anche nel weekend, quando molte vie del centro sono più libere e i condomini preferiscono concentrare gli interventi.",
    ],
    areas: [
      "Centro",
      "San Salvario",
      "Crocetta",
      "San Donato",
      "Santa Rita",
      "Mirafiori",
      "Barriera di Milano",
      "Vanchiglia",
    ],
    extraFaq: {
      question: "Operate anche nella ZTL di Torino?",
      answer:
        "Sì. Gestiamo noi la richiesta di accesso ZTL per i mezzi operativi e l'occupazione di suolo pubblico presso il Comune di Torino, così l'intervento risulta autorizzato e senza sanzioni. Segnalaci solo indirizzo e data: al resto pensiamo noi.",
    },
  },
  {
    slug: "noleggio-autoscale-moncalieri",
    name: "Moncalieri",
    province: "TO",
    travelTime: "circa 20 minuti dalla nostra sede",
    paragraphs: [
      "Moncalieri è uno dei comuni dove interveniamo più spesso, e anche uno dei più particolari: il borgo antico arrampicato sotto il Castello Reale alterna vie strette, acciottolate e in pendenza, dove il posizionamento dell'autoscala va studiato con cura. Per questi accessi difficili scegliamo mezzi compatti e, quando serve, effettuiamo un sopralluogo gratuito per verificare stabilizzazione e angoli di manovra prima di confermare l'intervento.",
      "Fuori dal borgo il territorio cambia completamente: le zone residenziali di Borgo San Pietro e Borgo Mercato hanno condomini moderni dove i traslochi con autoscala ai piani alti sono routine, mentre sulla collina moncalierese — tra strada Revigliasco e le ville di Testona — le richieste più frequenti riguardano potature di cedri e pini ad alto fusto, manutenzione di tetti e recupero di materiali nei giardini terrazzati. Le strade collinari strette e ripide richiedono esperienza: i nostri autisti le conoscono bene.",
      "Per le occupazioni di suolo pubblico presentiamo la pratica direttamente al Comune di Moncalieri, con i tempi e la modulistica richiesti dagli uffici di via Principessa Clotilde. Nei giorni di mercato e nelle vie a viabilità limitata del centro storico concordiamo con la Polizia Locale la fascia oraria migliore, così l'intervento non si blocca a metà.",
      "Dalla nostra sede di Torino raggiungiamo Moncalieri in una ventina di minuti passando per corso Unità d'Italia o la tangenziale sud: questo ci consente di offrire anche interventi di mezza giornata a costi contenuti, ideali per un singolo mobile da portare in alto, una grondaia da sistemare o una pianta da potare.",
    ],
    areas: ["Borgo San Pietro", "Testona", "Borgo Mercato", "Santa Maria", "Revigliasco"],
    extraFaq: {
      question: "Riuscite a lavorare nelle vie strette del centro storico di Moncalieri?",
      answer:
        "Sì, è una delle situazioni che gestiamo più spesso: usiamo autoscale compatte adatte a vie strette e in pendenza e, per i casi più delicati, facciamo prima un sopralluogo gratuito. Se necessario concordiamo con il Comune la chiusura temporanea del tratto di via.",
    },
  },
  {
    slug: "noleggio-autoscale-rivoli",
    name: "Rivoli",
    province: "TO",
    travelTime: "circa 20 minuti dalla nostra sede",
    paragraphs: [
      "A Rivoli lavoriamo su due fronti molto diversi. Il primo è il centro storico ai piedi del Castello: vie in salita, palazzi antichi con cortili chiusi e scorci dove un trasloco tradizionale diventa un incubo. Qui l'autoscala compatta è spesso l'unica alternativa ragionevole al portare tutto a spalla, e la scegliamo dopo aver valutato pendenze e spazi di stabilizzazione.",
      "Il secondo fronte è la Rivoli moderna lungo l'asse di corso Francia e nei quartieri di Cascine Vica e Borgo Nuovo: condomini degli anni '60 e '70 di sei-dieci piani, dove interveniamo regolarmente per traslochi, sostituzione di serramenti ai piani alti, manutenzione di balconi e frontalini e installazione di climatizzatori. Nella zona industriale e commerciale di Cascine Vica forniamo anche piattaforme aeree e autogrù per capannoni, insegne e coperture.",
      "La pratica di occupazione suolo pubblico la presentiamo noi al Comune di Rivoli, con la segnaletica di divieto di sosta posata nei termini di legge. Su corso Francia — arteria trafficata e con il passaggio dei mezzi pubblici — pianifichiamo l'intervento nelle fasce orarie concordate per ridurre al minimo l'impatto sulla viabilità.",
      "Rivoli è a circa venti minuti dalla nostra sede tramite corso Francia o la tangenziale ovest: interveniamo anche per lavori brevi di poche ore e, per condomini e amministratori, offriamo sopralluoghi gratuiti con relazione fotografica da allegare alle delibere assembleari.",
    ],
    areas: ["Centro storico", "Cascine Vica", "Borgo Nuovo", "Bruere", "Corso Francia"],
    extraFaq: {
      question: "Fate interventi nei capannoni della zona industriale di Rivoli?",
      answer:
        "Sì: a Cascine Vica e nelle aree produttive rivolesi interveniamo con piattaforme aeree e autogrù per manutenzione di coperture, lucernari, insegne e impianti. Per le aziende emettiamo regolare documentazione per la sicurezza di cantiere.",
    },
  },
  {
    slug: "noleggio-autoscale-collegno",
    name: "Collegno",
    province: "TO",
    travelTime: "circa 15 minuti dalla nostra sede",
    paragraphs: [
      "Collegno è il comune della cintura ovest dove arriviamo più in fretta: un quarto d'ora scarso dalla nostra sede di San Donato, passando per corso Regina Margherita o corso Francia. Questa vicinanza si traduce in preventivi più leggeri e nella possibilità di organizzare interventi anche con poco preavviso, quando l'agenda lo consente.",
      "Il patrimonio edilizio collegnese è dominato dai condomini costruiti tra gli anni '60 e '80 — a Regina Margherita, Santa Maria e Borgata Paradiso — con palazzine da cinque a dieci piani, spesso senza ascensori adeguati ai traslochi. È il terreno ideale per le nostre autoscale da 25 e 35 metri: mobili ed elettrodomestici passano dal balcone, in una frazione del tempo e senza rischi per il vano scale.",
      "Lavoriamo spesso anche sul verde: i viali alberati e i giardini condominiali di Collegno richiedono potature periodiche di platani e cedri che eseguiamo in appoggio a giardinieri e imprese, fornendo mezzo e operatore. Nella zona della Certosa e nel centro storico, dove gli spazi si stringono, usiamo i mezzi più compatti della flotta.",
      "Per l'occupazione di suolo pubblico ci interfacciamo direttamente con gli uffici del Comune di Collegno e posizioniamo la segnaletica nei termini di legge. Se il tuo palazzo si affaccia su una via molto trafficata o sul percorso della metropolitana di superficie, valutiamo insieme al Comune l'orario migliore per l'intervento.",
    ],
    areas: ["Centro", "Regina Margherita", "Santa Maria", "Borgata Paradiso", "Terracorta"],
    extraFaq: {
      question: "Quanto costa un trasloco con autoscala a Collegno?",
      answer:
        "Collegno è tra le zone più convenienti che serviamo: essendo a un quarto d'ora dalla nostra sede, il trasferimento incide pochissimo. Per un intervento di mezza giornata con autoscala da 25 metri si parte indicativamente da poche centinaia di euro; chiamaci per un preventivo preciso e gratuito.",
    },
  },
  {
    slug: "noleggio-autoscale-nichelino",
    name: "Nichelino",
    province: "TO",
    travelTime: "circa 25 minuti dalla nostra sede",
    paragraphs: [
      "Nichelino è uno dei comuni più densamente abitati della cintura sud, e si vede: interi quartieri di palazzine e condomini cresciuti tra gli anni '60 e '70, dove gli ascensori — quando ci sono — non bastano per un trasloco vero. Qui l'autoscala fa la differenza: un tre vani al sesto piano si svuota in una mattinata, passando direttamente dal balcone al camion.",
      "Interveniamo in tutte le zone della città, dal centro lungo via Torino ai quartieri Crociera, Oltrestazione e Sangone. Oltre ai traslochi, le richieste più frequenti a Nichelino riguardano la manutenzione di balconi e frontalini ammalorati, la sostituzione di tende da sole e condizionatori ai piani alti e le potature nei cortili condominiali e nelle vie alberate.",
      "Il confine con il parco di Stupinigi porta anche lavori particolari: potature e abbattimenti controllati di piante ad alto fusto in giardini privati e aree verdi, che eseguiamo con piattaforma aerea e personale esperto, in coordinamento con i giardinieri quando richiesto.",
      "La pratica di occupazione suolo pubblico presso il Comune di Nichelino la gestiamo noi, inclusa la posa della segnaletica di divieto di sosta 48 ore prima. Raggiungiamo la città in circa 25 minuti dalla tangenziale sud, e per i condomini organizziamo volentieri più interventi nella stessa giornata, dividendo i costi di trasferimento tra i condòmini.",
    ],
    areas: ["Centro", "Crociera", "Oltrestazione", "Sangone", "Juvarra"],
    extraFaq: {
      question: "Fate più traslochi nello stesso condominio a Nichelino?",
      answer:
        "Sì, ed è una formula molto richiesta: se più famiglie dello stesso palazzo hanno bisogno dell'autoscala, concentriamo gli interventi nella stessa giornata e il costo del mezzo si divide. Parlane con l'amministratore e contattaci per organizzare.",
    },
  },
  {
    slug: "noleggio-autoscale-settimo-torinese",
    name: "Settimo Torinese",
    province: "TO",
    travelTime: "circa 25 minuti dalla nostra sede",
    paragraphs: [
      "Settimo Torinese ha una doppia anima, e noi le serviamo entrambe. C'è la Settimo residenziale — il centro attorno a piazza della Libertà, Borgo Nuovo, i condomini cresciuti con l'industrializzazione — dove interveniamo per traslochi ai piani alti, manutenzioni di facciate e potature. E c'è la Settimo produttiva, con le grandi aree industriali e artigianali lungo la via Torino-Milano e verso Fornacino, dove lavoriamo con autogrù e piattaforme aeree.",
      "Per le aziende del territorio siamo un partner ricorrente: manutenzione di coperture e lucernari di capannoni, sostituzione di pannelli e lattonerie, installazione di insegne, movimentazione di macchinari e materiali in quota. Forniamo la documentazione di sicurezza richiesta per l'accesso in cantiere e nei siti produttivi, e i nostri operatori sono abilitati secondo la normativa vigente.",
      "Sul fronte residenziale, i condomini settimesi degli anni '60 e '70 hanno le classiche esigenze della cintura torinese: traslochi, sgomberi di alloggi e cantine, frontalini da mettere in sicurezza, condizionatori da installare ai piani alti. Con l'autoscala giusta — di solito la 25 o la 35 metri — sono lavori che chiudiamo in giornata.",
      "Raggiungiamo Settimo in circa 25 minuti dalla tangenziale nord o dalla via Torino-Milano. La pratica di occupazione suolo pubblico la presentiamo noi al Comune, e per le vie del centro a traffico limitato concordiamo gli orari con la Polizia Locale.",
    ],
    areas: ["Centro", "Borgo Nuovo", "Fornacino", "Mezzi Po", "Cebrosa"],
    extraFaq: {
      question: "Lavorate con le aziende delle zone industriali di Settimo Torinese?",
      answer:
        "Sì, è una parte importante del nostro lavoro in zona: coperture di capannoni, insegne, impianti e movimentazioni con autogrù. Forniamo DVR, verifiche periodiche dei mezzi e abilitazioni degli operatori per l'ingresso nei siti produttivi.",
    },
  },
  {
    slug: "noleggio-autoscale-grugliasco",
    name: "Grugliasco",
    province: "TO",
    travelTime: "circa 15 minuti dalla nostra sede",
    paragraphs: [
      "Grugliasco unisce in pochi chilometri quadrati quartieri residenziali, un polo universitario, grandi centri commerciali e aree produttive: per noi significa lavori molto diversi tra loro, spesso nella stessa settimana. Dal trasloco al settimo piano in un condominio di San Giacomo alla manutenzione della copertura di un capannone al Gerbido, arriviamo con il mezzo giusto in un quarto d'ora dalla nostra sede.",
      "Nei quartieri residenziali — il centro, San Giacomo, Borgata Lesna — il patrimonio edilizio è fatto di palazzine e condomini del dopoguerra dove l'autoscala è la soluzione standard per traslochi, sgomberi e manutenzioni di balconi. Le vie interne sono generalmente larghe e alberate: il posizionamento è agevole, ma le alberate stesse richiedono a volte una scelta attenta del punto di stazionamento, che valutiamo in sopralluogo.",
      "La zona del Gerbido e le aree produttive verso la tangenziale portano richieste da aziende e artigiani: piattaforme aeree per coperture, lattonerie e impianti fotovoltaici, autogrù per movimentare macchinari e materiali. Serviamo anche le attività commerciali per insegne e vetrine in quota.",
      "Come per tutti i comuni della cintura, la pratica di occupazione suolo pubblico al Comune di Grugliasco la gestiamo noi dall'inizio alla fine, segnaletica compresa. La vicinanza alla sede ci permette di offrire interventi brevi a costi contenuti: anche solo un paio d'ore per un singolo mobile o una grondaia.",
    ],
    areas: ["Centro", "San Giacomo", "Borgata Lesna", "Gerbido", "Fabbrichetta"],
    extraFaq: {
      question: "Fate anche piccoli interventi di poche ore a Grugliasco?",
      answer:
        "Sì: essendo a un quarto d'ora dalla nostra sede, a Grugliasco accettiamo volentieri anche interventi brevi — un mobile da portare in alto, una tenda da sole, una grondaia. Il minimo fatturabile è contenuto proprio perché il trasferimento incide poco.",
    },
  },
  {
    slug: "noleggio-autoscale-venaria-reale",
    name: "Venaria Reale",
    province: "TO",
    travelTime: "circa 15 minuti dalla nostra sede",
    paragraphs: [
      "Venaria Reale è un caso speciale nella cintura torinese: il centro storico attorno a via Mensa — l'asse pedonale che porta alla Reggia — è zona monumentale, con accessi regolamentati, pavimentazioni pregiate e vincoli che rendono ogni intervento in quota una questione di permessi prima ancora che di mezzi. È esattamente il tipo di complessità che gestiamo volentieri: pratiche comunali, accessi concordati e mezzi compatti adatti alle vie del borgo.",
      "Fuori dall'area monumentale, Venaria ha quartieri residenziali come Altessano e Rigola con condomini e palazzine dove i lavori sono quelli classici: traslochi ai piani alti, manutenzione di tetti e grondaie, installazione di condizionatori, potature nei giardini. La vicinanza al parco della Mandria porta inoltre richieste di potature e abbattimenti di piante ad alto fusto nelle proprietà private confinanti.",
      "Per gli interventi nel centro storico ci coordiniamo con gli uffici del Comune di Venaria Reale per l'occupazione di suolo pubblico e gli orari di accesso consentiti, tenendo conto del flusso turistico verso la Reggia, particolarmente intenso nei weekend. Nei giorni feriali al mattino presto si lavora meglio: lo diciamo per esperienza diretta.",
      "Raggiungiamo Venaria in un quarto d'ora circa dalla nostra sede di corso Svizzera, passando per corso Regina o la direttissima. Per privati, amministratori e attività commerciali del centro il sopralluogo è gratuito e consigliato: meglio verificare prima accessi e stazionamento che scoprire un problema il giorno dell'intervento.",
    ],
    areas: ["Centro storico", "Altessano", "Rigola", "Gallo Praile", "Salvo d'Acquisto"],
    extraFaq: {
      question: "Potete lavorare vicino alla Reggia di Venaria e nel centro storico?",
      answer:
        "Sì, ma serve pianificazione: l'area attorno a via Mensa è zona monumentale con accessi regolamentati. Gestiamo noi i permessi con il Comune e programmiamo l'intervento negli orari consentiti, di solito nelle prime ore del mattino nei giorni feriali.",
    },
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

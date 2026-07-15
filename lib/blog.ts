/**
 * Articoli del blog. Struttura dati semplice (senza CMS): per aggiungere un
 * articolo si aggiunge una voce qui. Il contenuto è in blocchi tipizzati
 * per mantenere una gerarchia H2/H3 corretta e rendering coerente.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  /** Data pubblicazione ISO (per Article schema) */
  datePublished: string;
  dateModified: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "come-scegliere-altezza-autoscala-trasloco",
    title: "Come scegliere l'altezza dell'autoscala per un trasloco",
    metaTitle: "Che Altezza di Autoscala Serve per un Trasloco?",
    metaDescription:
      "18, 25, 35 o 45 metri? Guida pratica per scegliere l'altezza giusta dell'autoscala per il tuo trasloco: piani, sbraccio, ostacoli e costi.",
    excerpt:
      "Piano dell'appartamento, distanza dal palazzo, ostacoli: i tre fattori che determinano l'altezza dell'autoscala giusta per il tuo trasloco.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-15",
    content: [
      {
        type: "p",
        text: "Scegliere l'altezza sbagliata dell'autoscala significa perdere tempo, spendere di più o — nel peggiore dei casi — non riuscire a completare il trasloco. In questa guida vediamo come calcolare l'altezza giusta in base al piano, alla distanza del mezzo dall'edificio e agli ostacoli presenti. Sono i tre fattori che chiediamo sempre al telefono prima di fare un preventivo, e conoscerli in anticipo ti aiuta a ottenere una quotazione precisa al primo colpo.",
      },
      {
        type: "h2",
        text: "La regola di base: piano × 3 metri, più margine",
      },
      {
        type: "p",
        text: "Un piano di un edificio residenziale è alto in media 3 metri. Il calcolo di partenza è quindi semplice: moltiplica il numero del piano per 3 e aggiungi un margine di sicurezza. Un quinto piano si trova a circa 15 metri da terra, un ottavo piano a circa 24 metri. Attenzione però a due dettagli che spesso vengono dimenticati: il piano terra rialzato e i piani nobili dei palazzi d'epoca, che possono superare i 4 metri di altezza. In un palazzo torinese di fine Ottocento, il \"quarto piano\" può trovarsi tranquillamente all'altezza del quinto o sesto piano di un condominio moderno.",
      },
      {
        type: "p",
        text: "Il margine non è un optional: la scala non lavora mai completamente verticale ma inclinata, e il carrello deve arrivare comodo al balcone o alla finestra, non al limite estremo della sua corsa. Come regola pratica, aggiungi sempre almeno 3-4 metri all'altezza calcolata del piano.",
      },
      {
        type: "h2",
        text: "Il secondo fattore: la distanza dal palazzo",
      },
      {
        type: "p",
        text: "L'altezza dichiarata di un'autoscala si misura in verticale, ma il mezzo quasi mai può posizionarsi esattamente sotto il balcone. Marciapiedi larghi, aiuole, dehors, alberate, auto in sosta, cortili interni: ogni metro di distanza orizzontale dal palazzo \"consuma\" altezza utile, perché la scala lavora in diagonale. Un'autoscala da 25 metri posizionata a 8-10 metri dall'edificio raggiunge comodamente un sesto piano, non un ottavo.",
      },
      {
        type: "p",
        text: "Per questo al telefono chiediamo sempre: dove può fermarsi il camion? Se la risposta è \"dall'altra parte della strada\" o \"oltre il giardino condominiale\", conviene salire di categoria e scegliere un mezzo più alto, che a parità di distanza offre più sbraccio.",
      },
      {
        type: "h2",
        text: "Ostacoli e accesso: cosa controllare prima",
      },
      {
        type: "p",
        text: "Prima di prenotare, fai un rapido sopralluogo con gli occhi di chi deve posizionare un camion di diverse tonnellate. Le cose da controllare:",
      },
      {
        type: "ul",
        items: [
          "Alberi e rami tra la strada e il balcone: sono l'ostacolo più frequente nei viali torinesi e spesso obbligano a un posizionamento più lontano.",
          "Cavi aerei (linee elettriche, tram, illuminazione pubblica): la scala non può avvicinarsi in sicurezza.",
          "Larghezza della via: nelle vie strette del centro storico servono mezzi compatti, e a volte la chiusura temporanea della strada.",
          "Balconi sporgenti o cornicioni sopra il punto di carico: possono impedire alla scala di accostarsi al piano giusto.",
          "Pendenza: su strade in salita la stabilizzazione richiede più spazio e non tutti i mezzi sono adatti.",
        ],
      },
      {
        type: "p",
        text: "Nessuno di questi ostacoli è di per sé bloccante, ma tutti vanno saputi prima. Una foto della facciata e una del punto in cui può fermarsi il mezzo, inviate su WhatsApp, ci bastano quasi sempre per scegliere l'autoscala giusta senza sopralluogo.",
      },
      {
        type: "h2",
        text: "Guida rapida: quale altezza per quale piano",
      },
      {
        type: "ul",
        items: [
          "Autoscala 18 metri — fino al 5° piano. Compatta, perfetta per centri storici e vie strette. La scelta standard per la maggior parte dei traslochi in palazzi d'epoca.",
          "Autoscala 25 metri — fino all'8° piano. La più richiesta in assoluto: copre quasi tutti i condomini della cintura torinese e mantiene un ingombro gestibile.",
          "Autoscala 35 metri — oltre il 10° piano. Per i grandi condomini degli anni '60 e '70 e per lavorare con ampi margini di sbraccio quando il mezzo deve stare lontano dalla facciata.",
          "Autoscala 45 metri — oltre il 14° piano. Torri residenziali, edifici direzionali, interventi speciali. Richiede spazio di manovra e un sopralluogo preventivo.",
        ],
      },
      {
        type: "h2",
        text: "Quanto incide l'altezza sul prezzo",
      },
      {
        type: "p",
        text: "Il costo del noleggio cresce con l'altezza del mezzo, ma meno di quanto si pensi: la differenza tra una 18 e una 25 metri è contenuta, mentre i mezzi da 35 e 45 metri hanno costi di trasferimento e stabilizzazione più alti. Il vero errore economico è scegliere un mezzo troppo basso: se il giorno del trasloco la scala non arriva al piano, l'intervento va riprogrammato con un mezzo più grande e i costi raddoppiano. Nel dubbio tra due altezze, scegli sempre la maggiore: la differenza di prezzo è minima rispetto al rischio.",
      },
      {
        type: "h2",
        text: "In sintesi",
      },
      {
        type: "p",
        text: "Piano per 3 metri più margine, distanza reale del mezzo dalla facciata, ostacoli tra la strada e il balcone: con questi tre dati la scelta dell'altezza è quasi automatica. E se preferisci non pensarci, è letteralmente il nostro lavoro: mandaci indirizzo, piano e un paio di foto, e ti diciamo noi quale autoscala serve — con un preventivo gratuito in giornata.",
      },
    ],
  },
  {
    slug: "differenza-nolo-a-caldo-nolo-a-freddo",
    title: "Nolo a caldo e nolo a freddo: qual è la differenza?",
    metaTitle: "Nolo a Caldo vs Nolo a Freddo: le Differenze",
    metaDescription:
      "Nolo a caldo (con operatore) o a freddo (senza)? Differenze di costo, responsabilità, patentini e assicurazione per autoscale e piattaforme aeree.",
    excerpt:
      "Con o senza operatore? Cosa cambia tra nolo a caldo e a freddo in termini di costi, responsabilità e requisiti di legge.",
    datePublished: "2026-06-20",
    dateModified: "2026-07-15",
    content: [
      {
        type: "p",
        text: "Quando si noleggia un'autoscala o una piattaforma aerea, la prima domanda da porsi è: con operatore o senza? La differenza tra nolo a caldo e nolo a freddo non è solo di prezzo: cambia chi guida il mezzo, chi risponde in caso di incidente e quali abilitazioni servono. Vediamo le due formule nel dettaglio, per capire quale fa al caso tuo.",
      },
      {
        type: "h2",
        text: "Cos'è il nolo a caldo",
      },
      {
        type: "p",
        text: "Nel nolo a caldo il mezzo viene noleggiato insieme all'operatore che lo guida e lo manovra. Tu indichi il lavoro da fare — il piano da raggiungere, la pianta da potare, il carico da sollevare — e il personale del noleggiatore si occupa di tutto il resto: trasferimento del mezzo, posizionamento, stabilizzazione e manovre per l'intera durata dell'intervento.",
      },
      {
        type: "p",
        text: "È la formula pensata per privati, condomini e per tutte le imprese che non hanno personale abilitato: non serve alcun patentino, non tocchi i comandi e la responsabilità della conduzione del mezzo resta in capo a chi lo manovra. Per un trasloco, una potatura o una manutenzione occasionale è di gran lunga la scelta più semplice e sicura.",
      },
      {
        type: "h2",
        text: "Cos'è il nolo a freddo",
      },
      {
        type: "p",
        text: "Nel nolo a freddo ricevi solo il mezzo: alla guida e alle manovre provvede il tuo personale. È la formula tipica delle imprese edili e dei manutentori professionali che usano la piattaforma per giorni o settimane e hanno in squadra operatori qualificati.",
      },
      {
        type: "p",
        text: "Attenzione però: il nolo a freddo non è per tutti, e non per una questione commerciale ma di legge. Chi manovra una piattaforma di lavoro elevabile (PLE) deve possedere l'abilitazione specifica prevista dal Testo Unico sulla sicurezza (D.Lgs. 81/2008) e dall'Accordo Stato-Regioni: il cosiddetto \"patentino PLE\", ottenuto con un corso teorico-pratico e rinnovato ogni 5 anni. Noleggiare a freddo senza personale abilitato espone a sanzioni pesanti e, in caso di infortunio, a responsabilità civili e penali molto serie.",
      },
      {
        type: "h2",
        text: "Le differenze in pratica",
      },
      {
        type: "ul",
        items: [
          "Abilitazioni: nessuna nel nolo a caldo; patentino PLE in corso di validità (e formazione documentata) nel nolo a freddo.",
          "Responsabilità della manovra: dell'operatore del noleggiatore nel nolo a caldo; del cliente e del suo personale nel nolo a freddo.",
          "Costo orario: il nolo a caldo costa di più perché include il lavoro dell'operatore; il nolo a freddo ha una tariffa mezzo più bassa ma richiede tuo personale qualificato.",
          "Efficienza: un operatore esperto posiziona e manovra il mezzo molto più in fretta — spesso il nolo a caldo chiude il lavoro in meno ore, annullando la differenza di prezzo.",
          "Assicurazione: nel nolo a freddo verifica sempre cosa copre la polizza del noleggiatore e cosa resta a tuo carico (franchigie, danni da errata manovra).",
        ],
      },
      {
        type: "h2",
        text: "E le autoscale? Quasi sempre a caldo",
      },
      {
        type: "p",
        text: "Per le autoscale da trasloco il discorso è ancora più netto: si tratta di autocarri che richiedono patente adeguata, esperienza di posizionamento in strada e pratiche di occupazione suolo pubblico. Per questo il noleggio dell'autoscala avviene praticamente sempre con operatore. È anche la formula con cui lavoriamo noi: mezzo, autista-operatore e, se serve, gestione dei permessi comunali in un unico servizio.",
      },
      {
        type: "h2",
        text: "Quale formula scegliere",
      },
      {
        type: "p",
        text: "La regola pratica è semplice. Sei un privato, un amministratore di condominio o un'azienda senza personale abilitato? Nolo a caldo, senza esitazione: costi certi, zero burocrazia sulle abilitazioni e sicurezza in mani professionali. Sei un'impresa con operatori patentati e ti serve il mezzo per un periodo prolungato? Il nolo a freddo può convenire economicamente. Nel dubbio, chiamaci: ti aiutiamo a fare due conti onesti sulla tua situazione specifica, senza spingerti verso la formula più cara.",
      },
    ],
  },
  {
    slug: "occupazione-suolo-pubblico-quando-serve",
    title: "Cos'è l'occupazione di suolo pubblico e quando serve",
    metaTitle: "Occupazione Suolo Pubblico: Cos'è e Quando Serve",
    metaDescription:
      "Quando serve il permesso di occupazione suolo pubblico per un'autoscala o un trasloco? Tempi, costi e come funziona la pratica a Torino.",
    excerpt:
      "Autoscala parcheggiata in strada? Quasi sempre serve un permesso comunale. Ecco quando è obbligatorio, quanto costa e chi se ne occupa.",
    datePublished: "2026-06-10",
    dateModified: "2026-07-15",
    content: [
      {
        type: "p",
        text: "Se l'autoscala o il camion del trasloco occupano anche solo in parte la carreggiata, il marciapiede o un parcheggio pubblico, serve un'autorizzazione del Comune: la cosiddetta occupazione di suolo pubblico (OSP). È l'aspetto burocratico più sottovalutato di traslochi e lavori in quota — e quello che più spesso fa saltare gli interventi organizzati all'ultimo momento. Vediamo quando è obbligatoria, quanto costa e come funziona la richiesta.",
      },
      {
        type: "h2",
        text: "Quando è obbligatoria",
      },
      {
        type: "p",
        text: "La regola è più semplice di quanto sembri: ogni volta che un mezzo o del materiale stazionano su area pubblica per un'attività — non per una semplice sosta — serve l'autorizzazione. In pratica, per il nostro settore:",
      },
      {
        type: "ul",
        items: [
          "Autoscala o piattaforma aerea posizionata in strada, sul marciapiede o su stalli di sosta: serve sempre.",
          "Autogrù stabilizzata su suolo pubblico, anche solo con i piedi di appoggio: serve sempre.",
          "Camion del trasloco fermo per ore davanti al portone su strada pubblica: serve, e serve anche il divieto di sosta temporaneo per avere lo spazio libero.",
          "Transenne, ponteggi, cassoni o materiale da cantiere su area pubblica: serve.",
        ],
      },
      {
        type: "h2",
        text: "Quando NON serve",
      },
      {
        type: "p",
        text: "L'autorizzazione non serve se l'intervento avviene interamente su area privata: il cortile interno del condominio, un piazzale aziendale, il giardino di una villa. Attenzione però ai casi ibridi, che sono frequentissimi: il mezzo entra nel cortile ma la scala si estende sopra il marciapiede pubblico, oppure il camion sta nel passo carraio ma sporge sulla carreggiata. Nel dubbio conviene sempre chiedere: la sanzione per occupazione abusiva costa molto più della pratica.",
      },
      {
        type: "h2",
        text: "Come funziona la richiesta (l'esempio di Torino)",
      },
      {
        type: "p",
        text: "A Torino la domanda va presentata agli uffici competenti con un anticipo adeguato: per una pratica ordinaria conviene calcolare dai 5 ai 10 giorni lavorativi per il rilascio. Alla richiesta vanno allegati i dati del richiedente, l'indirizzo esatto, le date e gli orari, le dimensioni dell'area occupata (i metri quadri contano, perché su di essi si calcola il canone) e, per i casi più complessi, una planimetria dell'ingombro. Nei comuni della cintura la procedura è simile, ma ogni ufficio ha la sua modulistica e i suoi tempi.",
      },
      {
        type: "p",
        text: "Ottenuto il permesso, il lavoro non è finito: se l'occupazione richiede spazio libero da auto in sosta, la segnaletica di divieto di sosta temporaneo va posizionata almeno 48 ore prima dell'inizio, come previsto dal Codice della Strada. Senza questo preavviso, i veicoli parcheggiati non possono essere rimossi — e un'auto lasciata proprio dove doveva stabilizzarsi l'autoscala può far saltare l'intero intervento. Per questo la posa va documentata con foto datate.",
      },
      {
        type: "h2",
        text: "Quanto costa",
      },
      {
        type: "p",
        text: "Il costo si compone di tre voci: il canone comunale (il \"canone unico\", calcolato su metri quadri occupati, durata e zona della città — per un'occupazione di poche ore per un trasloco si parla in genere di importi contenuti), gli eventuali diritti di istruttoria e il costo della segnaletica con relativa posa. A cui va aggiunto, se ti affidi a qualcuno, il servizio di gestione pratica. Nel nostro caso, tutte le voci compaiono separate e trasparenti nel preventivo.",
      },
      {
        type: "h2",
        text: "Cosa rischia chi non la fa",
      },
      {
        type: "p",
        text: "L'occupazione abusiva di suolo pubblico comporta sanzioni amministrative, l'obbligo di rimozione immediata e, nei casi più seri, la denuncia. Ma il rischio più concreto è operativo: vigili che fermano il lavoro a metà, il mezzo da spostare, l'intervento da riprogrammare pagando comunque mezzo e squadra. Su un trasloco organizzato da settimane, è uno scenario da evitare a ogni costo.",
      },
      {
        type: "h2",
        text: "Chi se ne occupa",
      },
      {
        type: "p",
        text: "La pratica può presentarla il cittadino, l'impresa che esegue i lavori o un delegato. Il nostro consiglio, ovviamente interessato ma onesto: lasciala fare a chi la fa ogni settimana. Conosciamo la modulistica di Torino e dei comuni della cintura, sappiamo quali tempi considerare realistici e ci occupiamo anche della segnaletica nei termini di legge. Tu ci dai indirizzo e data, noi ti consegniamo l'intervento autorizzato, dall'inizio alla fine.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

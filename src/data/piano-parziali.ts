export type Materia = 'analisi-1' | 'gal' | 'prog-1';

export type Blocco = {
  id: string;
  materia: Materia;
  ore: number;
  cosa: string;
  note?: string[];
  dettaglio?: string;
};

export type Giorno = {
  data: string;
  fase: 'argomenti' | 'simulazioni' | 'prove';
  blocchi: Blocco[];
  avviso?: string;
};

export const MATERIE: Record<Materia, { nome: string; breve: string }> = {
  'analisi-1': { nome: 'Analisi Matematica 1', breve: 'Analisi' },
  gal: { nome: 'Geometria e Algebra Lineare', breve: 'GAL' },
  'prog-1': { nome: 'Programmazione 1', breve: 'Prog 1' },
};

export const PROVE = [
  { id: 'gal', materia: 'gal' as Materia, nome: 'GAL, primo parziale', quando: '2026-11-05T15:30', dove: 'Povo 1, A104-A106', durata: '90 min', soglia: 'serve almeno 15/30' },
  { id: 'prog', materia: 'prog-1' as Materia, nome: 'Prog 1, prima prova teorica', quando: '2026-11-05', dove: 'orario sul sito del corso', durata: '50 min', soglia: '6 punti, chi non la passa non fa la seconda' },
  { id: 'analisi', materia: 'analisi-1' as Materia, nome: 'Analisi 1, primo parziale', quando: '2026-11-06', dove: 'formulario A4 ammesso', durata: '2,5 h', soglia: '8 crocette (almeno 5/12), poi 2 esercizi' },
];

export const DA_FARE = [
  { id: 'programma-analisi', cosa: 'Chiedere al prof il programma esatto del parziale di Analisi', perche: 'se dentro ci sono le derivate, martedì 3 cambia' },
];

export const OGNI_GIORNO = [
  { cosa: 'Lista errori', come: 'ogni errore in un esercizio o in una simulazione diventa una riga: materia, cosa, perché. Il 4 e il 5 si ripassa quella.' },
  { cosa: 'Formulario di Analisi', come: 'gli ultimi 15 minuti di ogni blocco di Analisi, una sezione per argomento.' },
  { cosa: 'Anki', come: 'le card del giorno prima di iniziare, fuori dalle 4 ore.' },
  { cosa: 'Esercizio prima della soluzione', come: 'la soluzione si apre solo dopo aver scritto la propria fino in fondo.' },
];

const a1 = (s: string) => `analisi-1/${s}`;
const gal = (s: string) => `gal/${s}`;
const p1 = (s: string) => `prog-1/${s}`;

export const GIORNI: Giorno[] = [
  {
    data: '2026-10-24',
    fase: 'argomenti',
    blocchi: [
      { id: '24-a', materia: 'analisi-1', ore: 2, cosa: 'Numeri complessi', note: [a1('numeri-complessi'), a1('numeri-complessi-esercizi')] },
      { id: '24-g', materia: 'gal', ore: 2, cosa: 'Geometria nello spazio', note: [gal('rette-e-piani-nello-spazio'), gal('posizioni-reciproche-nello-spazio'), gal('distanze-nello-spazio')] },
    ],
  },
  {
    data: '2026-10-25',
    fase: 'argomenti',
    blocchi: [
      { id: '25-a', materia: 'analisi-1', ore: 2, cosa: 'Successioni: limiti, calcolo, monotone', note: [a1('limiti-di-successioni'), a1('calcolo-dei-limiti'), a1('successioni-monotone-e-numero-di-nepero')] },
      { id: '25-p', materia: 'prog-1', ore: 2, cosa: 'Puntatori e output esatto dei cicli', note: [p1('puntatori'), p1('cicli-for-e-do-while'), p1('ciclo-while-ed-esempi')] },
    ],
  },
  {
    data: '2026-10-26',
    fase: 'argomenti',
    blocchi: [
      { id: '26-g', materia: 'gal', ore: 2, cosa: 'Sistemi, Gauss-Jordan, Rouché-Capelli', note: [gal('sistemi-lineari'), gal('algoritmo-di-gauss-jordan'), gal('rango-e-rouche-capelli')] },
      { id: '26-a', materia: 'analisi-1', ore: 2, cosa: 'Limiti di funzioni e limiti notevoli', note: [a1('limiti-di-funzioni'), a1('teoremi-sui-limiti-di-funzioni')], dettaglio: 'più le slide 34-60, non annotate a lezione' },
    ],
  },
  {
    data: '2026-10-27',
    fase: 'argomenti',
    avviso: 'giorno della spesa',
    blocchi: [
      { id: '27-a', materia: 'analisi-1', ore: 2, cosa: 'Continuità e teoremi sulle funzioni continue', note: [a1('continuita'), a1('teoremi-sulle-funzioni-continue')] },
      { id: '27-p', materia: 'prog-1', ore: 2, cosa: 'Basi numeriche, Boole, struct con array', note: [p1('rappresentazione-dell-informazione'), p1('algebra-di-boole'), p1('struct-typedef-ed-enum')] },
    ],
  },
  {
    data: '2026-10-28',
    fase: 'argomenti',
    blocchi: [
      { id: '28-g', materia: 'gal', ore: 2, cosa: 'Matrici, invertibilità, determinante', note: [gal('matrici-e-operazioni'), gal('matrici-invertibili')], dettaglio: 'il determinante è nelle lezioni L9-L10' },
      { id: '28-a', materia: 'analisi-1', ore: 2, cosa: 'Crocette: reali, sup e inf, funzioni, grafici', note: [a1('numeri-reali-sup-e-inf'), a1('funzioni'), a1('insiemi-e-logica'), a1('trasformazioni-di-grafici')] },
    ],
  },
  {
    data: '2026-10-29',
    fase: 'argomenti',
    blocchi: [
      { id: '29-g', materia: 'gal', ore: 2, cosa: 'Spazi vettoriali, generatori, dipendenza, basi', note: [gal('spazi-vettoriali'), gal('generatori'), gal('dipendenza-lineare'), gal('basi')] },
      { id: '29-p', materia: 'prog-1', ore: 2, cosa: 'Simulazione a tempo e correzione', dettaglio: '50 minuti, poi gli errori nella lista', note: ['simulazioni:prog-1'] },
    ],
  },
  {
    data: '2026-10-30',
    fase: 'simulazioni',
    blocchi: [
      { id: '30-a', materia: 'analisi-1', ore: 4, cosa: 'Simulazione e correzione', dettaglio: '2,5 h a tempo, 1,5 h di correzione con la griglia', note: ['simulazioni:analisi-1'] },
    ],
  },
  {
    data: '2026-10-31',
    fase: 'simulazioni',
    blocchi: [
      { id: '31-g', materia: 'gal', ore: 2, cosa: 'Simulazione e correzione', dettaglio: '90 minuti a tempo', note: ['simulazioni:gal'] },
      { id: '31-p', materia: 'prog-1', ore: 2, cosa: 'Simulazione e correzione', dettaglio: '50 minuti, poi i punti sbagliati', note: ['simulazioni:prog-1'] },
    ],
  },
  {
    data: '2026-11-01',
    fase: 'simulazioni',
    blocchi: [
      { id: '01-a', materia: 'analisi-1', ore: 4, cosa: 'Tema passato e correzione', dettaglio: 'un tema degli anni scorsi da Moodle, 2,5 h senza calcolatrice' },
    ],
  },
  {
    data: '2026-11-02',
    fase: 'simulazioni',
    blocchi: [
      { id: '02-g1', materia: 'gal', ore: 2, cosa: 'Simulazione e correzione', note: ['simulazioni:gal'] },
      { id: '02-g2', materia: 'gal', ore: 2, cosa: 'Seconda simulazione e correzione', dettaglio: 'o una provetta 2021-2024 se le simulazioni sono finite' },
    ],
  },
  {
    data: '2026-11-03',
    fase: 'simulazioni',
    blocchi: [
      { id: '03-a', materia: 'analisi-1', ore: 4, cosa: 'Simulazione al livello del 30 e correzione', note: [a1('simulazione-provetta-3')], dettaglio: 'se le derivate sono nel programma, 1 h sulle derivate al posto di metà correzione' },
    ],
  },
  {
    data: '2026-11-04',
    fase: 'simulazioni',
    blocchi: [
      { id: '04-g', materia: 'gal', ore: 2, cosa: 'Ultima simulazione e correzione', note: ['simulazioni:gal'] },
      { id: '04-p', materia: 'prog-1', ore: 2, cosa: 'Ultima simulazione e correzione', note: ['simulazioni:prog-1'] },
    ],
  },
  {
    data: '2026-11-05',
    fase: 'prove',
    avviso: 'GAL alle 15:30, Prog 1 lo stesso giorno',
    blocchi: [
      { id: '05-g', materia: 'gal', ore: 1, cosa: 'Teoria a foglio bianco', dettaglio: 'Rouché-Capelli con un esempio, definizioni con le parole della prof' },
      { id: '05-p', materia: 'prog-1', ore: 1, cosa: 'Trappole sui puntatori, conversioni fra basi' },
      { id: '05-a', materia: 'analisi-1', ore: 1.5, cosa: 'Formulario e lista errori, la sera', dettaglio: 'niente argomenti nuovi' },
    ],
  },
];

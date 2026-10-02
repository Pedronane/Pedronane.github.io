---
title: Ripasso per il foglio 1 del tutorato
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: riferimento
stato: in corso
data: 2026-09-22
lezioni: []
ordine: 999
---

Ripasso operativo per il <span class="src">foglio 1 del tutorato</span>: otto domande di teoria e nove esercizi, tutti dentro la geometria nello spazio (appunti della prof p. 2-27, capitolo 1 della dispensa). Gli esercizi svolti dal tutor in <span class="src">esercitazione</span> sono lo stesso tipo, e stanno per esteso nelle note di teoria. Argomento di [Geometria e Algebra Lineare](/uni/gal/). Le formule stanno in [Formulario rette e piani](/uni/gal/formulario-rette-e-piani/).

Il foglio non chiede niente oltre il capitolo 1: prodotto vettoriale, determinanti e matrici non servono. Ogni direzione ortogonale si trova risolvendo un sistema di prodotti scalari nulli.

## L'unico schema che serve

Quasi tutto il foglio si riduce a tradurre una frase geometrica in un prodotto scalare o in un sistema.

```
oggetto              cosa lo descrive          che conto ci fai
------------------------------------------------------------------
punto                tre coordinate            sostituisci in un'equazione
retta                punto + direzione v       parametriche, punto generico
piano                punto + normale n         ax+by+cz+d=0
------------------------------------------------------------------
"perpendicolare a"   ->  prodotto scalare = 0
"parallelo a"        ->  proporzionale
"passa per"          ->  sostituisci il punto e ricava il termine noto
"contiene la retta"  ->  fascio di piani
"distanza"           ->  trova il piede della perpendicolare
```

Tre mosse coprono la parte pratica del foglio:

**Punto generico.** Se un oggetto ha una retta dentro, scrivi il punto generico $Q(t)$ dalle parametriche e imponi la condizione richiesta. Il parametro esce da solo.

**Fascio.** Se devi trovare un piano che contiene una retta data per cartesiane, non cercare la normale da zero: scrivi il fascio e imponi l'unica condizione che resta.

**Normale incognita.** Se devi trovare un piano o una retta ortogonale ad altre cose, chiama $\vec{n} = (a,b,c)$ e scrivi le condizioni di ortogonalità. Ottieni un sistema omogeneo di due equazioni in tre incognite: ha infinite soluzioni tutte proporzionali fra loro, e te ne basta una. Poni una componente uguale a $1$ (o a un valore comodo) e ricava le altre. Se quella scelta porta a un assurdo, la componente era nulla: riprova azzerandola e ponendo a $1$ un'altra.

## Le domande di teoria

Non sono da imparare a memoria, ma la risposta deve avere certi pezzi. Qui c'è l'indice di ogni risposta, il testo lo scrivi tu.

**1.1 Vettore geometrico e somma.** Parti dai segmenti orientati e dall'equivalenza (stessa direzione, stesso verso, stesso modulo), poi il vettore come classe di equivalenza. Somma con la regola punta-coda, e le proprietà: associativa, commutativa, elemento neutro $\vec{0}$, opposto. La regola del parallelogramma è la stessa cosa vista da un'altra angolazione.

**1.2 Prodotto per scalare.** Tre casi da separare: $\lambda > 0$, $\lambda < 0$, e i casi degeneri ($\lambda = 0$ oppure $\vec{v} = \vec{0}$). Per ciascuno di': che direzione, che verso, che modulo. Il modulo è sempre $\lvert\lambda\rvert\,\lvert\vec{v}\rvert$, col valore assoluto.

**1.3 Prodotto scalare.** Prima la definizione geometrica con l'angolo, precisando che i due rappresentanti si prendono con lo stesso estremo iniziale e che $0 \le \theta \le \pi$. Poi il caso in cui uno dei due è nullo. Poi la formula in coordinate, che è la conseguenza della decomposizione sui versori degli assi.

**1.4 Normalizzazione.** Dividere per il modulo, che è lecito solo se $\vec{v} \neq \vec{0}$. Dire perché il risultato è un versore: il modulo del prodotto per scalare porta fuori $1/\lvert\vec{v}\rvert$.

**1.5 Proiezione.** Prima su un versore, $(\vec{v} \cdot \vec{e})\,\vec{e}$, spiegando che il prodotto scalare è un numero con segno e il versore dà la direzione. Poi su un vettore qualsiasi, normalizzandolo. L'esempio chiesto lo costruisci con due vettori tuoi, meglio se con angolo ottuso, così si vede il segno che gira il verso.

**1.6 Fascio di piani.** Definizione, equazione del fascio, e perché tutti quei piani contengono $r$. Per l'esempio di utilizzo, il caso naturale è il piano che contiene una retta e passa per un punto fuori: sostituisci il punto nell'equazione del fascio e trovi $\lambda$ e $\mu$.

**1.7 Distributiva in coordinate.** Da fare per esteso. Scrivi i tre vettori in coordinate, sviluppa i due membri separatamente e mostra che sono la stessa cosa. Tutto si appoggia alla distributiva dei numeri reali.

**1.8 Posizioni di due rette.** Le definizioni della prof, per due rette **distinte** con direzionali $\vec{v}$ e $\vec{w}$: tre casi, parallele (direzionali proporzionali), incidenti (un punto in comune), sghembe (altrimenti). Poi, a parte, perpendicolari se $\vec{v} \cdot \vec{w} = 0$, che si combina con incidenti o sghembe. Per stabilire il caso, l'albero: prima guardi se le direzioni sono proporzionali; se no risolvi il sistema con due parametri diversi. Se il testo non dice che sono distinte, nel ramo delle direzioni proporzionali controlli anche un punto: potrebbero coincidere.

## La parte pratica, esercizio per esercizio

Qui c'è solo l'attrezzo da usare, non i conti.

| esercizio | cosa chiede davvero | attrezzo |
|---|---|---|
| 1.9 | piano per una retta e un punto, poi due intersezioni | fascio, poi sistemi |
| 1.10 | retta per due punti, piano con due direzioni assegnate | direzione $\overrightarrow{AB}$, poi normale incognita |
| 1.11 | incidenza, poi retta ortogonale a due rette | sistema fra le due rette, poi direzione incognita |
| 1.12 | appartenenza di una retta a un piano, fascio, proiezione di un punto su un piano | sistema o due punti della retta, fascio, retta per il punto con direzione $\vec{n}$ intersecata col piano |
| 1.13 | complanarità, piano che le contiene, distanza punto-retta | posizione reciproca, poi piede della perpendicolare |
| 1.14 | posizione reciproca, complanarità, distanza | albero dei casi, poi il metodo che segue dal caso |
| 1.15 | posizione reciproca, piano, retta ortogonale a due rette | come 1.11 più il fascio |
| 1.16 | distanza punto-retta, piani a distanza data | piede della perpendicolare, poi punto-piano con $d$ incognito |
| 1.17 | posizione retta-piano, retta con due vincoli, distanza | $\vec{n} \cdot \vec{v}$, poi direzione incognita con due condizioni |

Ordine consigliato: 1.10, 1.9, 1.12, 1.11, 1.15, 1.13, 1.16, 1.17, 1.14. I primi sono applicazione diretta di una formula, gli ultimi combinano tre passaggi e conviene affrontarli quando le mosse base sono automatiche.

I modelli svolti a lezione, da rileggere prima di ogni esercizio: fascio per un punto (prof, in [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/)) per 1.9; tutor es. 5 per 1.12, stessa struttura; tutor es. 2 per 1.13 a e 1.15 b (in [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/)); tutor es. 6 e l'esempio punto-retta della prof per 1.13 b e 1.16 a (in [Distanze nello spazio](/uni/gal/distanze-nello-spazio/)); rette sghembe della prof per 1.14 c.

### Le situazioni ricorrenti

**Piano che contiene una retta e passa per un punto.** Se la retta è data per cartesiane, fascio: sostituisci il punto, ricava il rapporto fra $\lambda$ e $\mu$. Se è data per parametriche, ricavane prima due cartesiane, oppure prendi due punti sulla retta e trattalo come piano per tre punti.

**Retta ortogonale a due rette date.** La direzione $\vec{u}$ cercata risolve $\vec{u} \cdot \vec{v}_1 = 0$ e $\vec{u} \cdot \vec{v}_2 = 0$. È il caso della normale incognita: sistema omogeneo, due equazioni, tre incognite. Poi serve un punto per cui far passare la retta, e il testo te lo dà.

**Piano parallelo a due direzioni.** Stessa cosa: la normale è ortogonale a entrambe le direzioni. Attenzione a leggere "parallelo all'asse $z$" come "una delle due direzioni è $(0,0,1)$".

**Piani a distanza fissata da un punto.** Il piano ortogonale a $r$ ha per normale la direzione di $r$, quindi conosci $a,b,c$ e l'unica incognita è $d$. Imponi la formula punto-piano uguale al valore richiesto. Il valore assoluto dà due equazioni, quindi due piani, uno per parte.

**Distanza fra due rette.** Prima stabilisci il caso, poi scegli il metodo. Incidenti significa distanza zero e non c'è niente da calcolare, ed è l'errore da evitare: partire con la perpendicolare comune su due rette che si incontrano è lavoro buttato.

## Errori che costano il punto

- Scrivere $\overrightarrow{AB}$ come inizio meno fine. È fine meno inizio, l'altro ordine dà il vettore opposto.
- Usare lo stesso parametro $t$ per due rette diverse. Quando cerchi l'intersezione o la perpendicolare comune servono due lettere.
- Concludere "parallela" da $\vec{n} \cdot \vec{v} = 0$ senza controllare se la retta sta dentro il piano.
- Dimenticare il valore assoluto nella distanza punto-piano, e la radice al denominatore.
- Normalizzare quando non serve. Per stabilire una posizione reciproca contano solo direzione e proporzionalità, e i versori riempiono i conti di radici inutili.
- Trattare l'equazione di un piano come unica. Moltiplicata per una costante è sempre lo stesso piano, quindi la tua risposta può essere diversa da quella del tutor ed essere giusta lo stesso: controlla se una è multipla dell'altra.

## Controlli veloci

Ogni risultato si verifica in pochi secondi, e conviene farlo prima di passare al punto dopo.

- Punto trovato come intersezione: sostituiscilo in **tutte** le equazioni di partenza.
- Piano che deve contenere una retta: prendi due punti della retta e sostituiscili.
- Direzione ortogonale a due vettori: rifai i due prodotti scalari, devono dare zero.
- Distanza: deve venire un numero positivo, e zero solo se gli oggetti si toccano.
- Piede della perpendicolare $H$: deve stare sulla retta (esiste il suo $t$) e $\overrightarrow{PH}$ deve essere ortogonale alla direzione.

## Domande

- Perché il sistema che dà una direzione ortogonale a due vettori ha infinite soluzioni, e perché non è un problema?

- Hai $\vec{n} \cdot \vec{v} = 0$ fra la normale di un piano e la direzione di una retta. Cosa hai stabilito e cosa ti manca ancora?

- Quando conviene il fascio di piani invece di cercare direttamente la normale del piano?

- Due rette hanno direzioni proporzionali. Che controllo fai prima di dire che sono parallele?

- Per la distanza fra due rette sghembe, cosa cambia fra il metodo della perpendicolare comune e quello del piano del fascio?

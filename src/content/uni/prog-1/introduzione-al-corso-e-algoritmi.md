---
title: Introduzione al corso e algoritmi
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-09-10
lezioni:
  - 10 set
ordine: 0
---

Lezione 01 di [Programmazione 1](/uni/prog-1/), 10 settembre 2026. Slide: <span class="src">1.1 Algoritmi</span>. Lezione successiva: [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/).

> [!abstract] Per l'esame
> - **Saper enunciare**: la definizione di algoritmo e il ruolo di ogni sua parte, correttezza ed efficienza, le tre strutture di controllo, il procedimento top-down.
> - **Saper fare**: scrivere in pseudocodice un algoritmo per un problema dato, raffinandolo top-down; controllare che termini e che gestisca i casi limite; confrontare due algoritmi contando i passi (ricerca sequenziale contro dicotomica).
> - **Dove esce**: non come domanda a sé, ma è il primo passo di ogni esercizio di codice. Il confronto di efficienza torna nelle domande di complessità (13 prove su 18 nel 2023-26, vedi [Esami passati](/uni/prog-1/esami-passati/)), e la scala a passi 1, 2, 3 è un esercizio d'esame del 2016/17 risolto in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).

Il filo della lezione, in ordine:

```
informatica          studio degli algoritmi, anche senza computer
      |
      v
algoritmo            passi precisi, finiti, comprensibili all'esecutore
      |
      v
problema             prima si definisce bene, poi si risolve
      |              (calcolo, decisione, ricerca)
      v
tre linguaggi        naturale  ->  pseudocodice  ->  C
      |
      v
strutture            sequenza, scelta (se), ripetizione (mentre)
      |
      v
top-down             un passo troppo grosso diventa un sotto-algoritmo
      |
      v
proprietà            correttezza ed efficienza
```

## Concetti

### Il corso

**Obiettivi.** Tre filoni:
1. **Programmare** con un linguaggio imperativo (C, C++, Java). Imperativo vuol dire che il programma è una lista di **azioni esplicite** da eseguire in ordine: "leggi", "somma", "scrivi in questa variabile".
2. **Strutture dati astratte**: liste, pile, alberi e simili. Sono astratte perché non dipendono dal linguaggio, le stesse idee si usano in tutti.
3. **Analisi degli algoritmi**: capire quanto costa un algoritmo in tempo e memoria, cioè la sua **complessità**.

**Programma.** Il corso è diviso in due parti:

| Parte | Contenuto |
| --- | --- |
| 1° | algoritmi e linguaggio di programmazione (C) |
| 2° | strutture dati |

### Cos'è l'informatica

Le slide partono da due definizioni (<span class="src">slide 3</span>):
- ACM: "lo studio sistematico degli **algoritmi** che descrivono e trasformano l'informazione: la loro teoria, analisi, progetto, efficienza, realizzazione e applicazione".
- Ceri, Mandrioli, Sbattella: "la scienza della rappresentazione e dell'elaborazione dell'informazione".

Nessuna delle due nomina il computer. Si può elaborare informazione con carta e penna, per esempio facendo una divisione in colonna seguendo regole precise. Il computer è uno strumento: molto veloce (tante operazioni per unità di tempo) e autonomo, quindi rende trattabili quantità di informazione che a mano non si gestirebbero mai.

### Algoritmo

> [!abstract] Definizione (informale)
> Un **algoritmo** è una sequenza precisa di operazioni, comprensibili da un **esecutore**, che definisce una sequenza **finita** di passi che portano alla realizzazione di un compito (**task**).

Ogni pezzo della frase ha un ruolo:

| Pezzo | Cosa esclude |
| --- | --- |
| sequenza precisa | istruzioni vaghe come "cuoci un po'" |
| comprensibili dall'esecutore | passi che chi esegue non sa fare |
| finita | procedimenti che non terminano mai |
| realizzazione di un compito | liste di passi che non risolvono niente |
| sequenza (ordinata) | l'ordine dei passi conta, spostarli cambia il risultato |

**Esecutore.** Chi esegue i passi: una persona, un robot, un computer. Lo stesso compito richiede descrizioni diverse a seconda dell'esecutore. "Fai la doccia" va bene per una persona, per un robot va spezzato in decine di movimenti.

**Esempio: somma con il pallottoliere** (<span class="src">slide 7-9</span>). Riga 1 contiene $a = 4$ dischi a sinistra, riga 2 contiene $b = 7$ dischi a sinistra, riga 3 è piena a destra.
1. Nella riga 1 sposta un disco da sinistra a destra e, insieme, nella riga 3 sposta un disco da destra a sinistra.
2. Ripeti finché la parte sinistra della riga 1 è vuota.
3. Fai la stessa cosa fra riga 2 e riga 3.
4. Ripeti finché la parte sinistra della riga 2 è vuota.
5. I dischi a sinistra nella riga 3 sono il risultato: $a + b = 11$.

L'esecutore non deve sapere cos'è una somma, deve solo saper spostare un disco e controllare se una riga è vuota. È questo che rende la descrizione un algoritmo.

**Esempio: il robot che cammina** (<span class="src">slide 11</span>).
```
1. fai un passo con il piede sinistro, poi vai a 2
2. fai un passo con il piede destro, poi vai a 3
3. se sei alla fine del blocco vai a 4, altrimenti vai a 1
4. termina
```
Il passo 3 fa due cose che serviranno sempre: **decide** in base a una condizione e **torna indietro** per ripetere. La slide dopo chiede di gestire anche gli ostacoli: serve un'altra condizione dentro il ciclo.

### Algoritmi e programmi

La descrizione di un algoritmo deve essere comprensibile a chi lo esegue. Se l'esecutore è un calcolatore, serve un **linguaggio di programmazione** (nel corso il C, con cenni di C++). Un algoritmo scritto in un linguaggio di programmazione si chiama **programma**.

Il lavoro del programmatore ha due metà (<span class="src">slide 38</span>):
1. **progettare** l'algoritmo, cioè la sequenza di passi che risolve il problema;
2. **codificarlo** in un programma che il calcolatore capisce ed esegue.

Chi progetta l'algoritmo non è per forza chi scrive il programma.

### Proprietà di un algoritmo

- **Correttezza.** Arriva alla soluzione del compito senza errori in nessun passo fondamentale.
- **Efficienza.** Ci arriva usando la minima quantità di risorse. Per un computer le risorse sono soprattutto tempo di esecuzione e memoria.

Servono entrambe (<span class="src">slide 63</span>). Un algoritmo corretto ma così lento da non poterlo usare non serve. Un algoritmo velocissimo che dà risultati approssimati o sbagliati non serve nemmeno lui.

**Un esempio di efficienza** (<span class="src">slide 94</span>): moltiplicare due interi di $n$ cifre. Il metodo delle elementari fa circa $n^2$ operazioni, l'algoritmo più veloce conosciuto circa $n \log n$. Con numeri di un milione di cifre la differenza è enorme.

### Esempio di task: il problema della segretaria

Molti problemi di tutti i giorni sono di **ricerca con un criterio di arresto**: scegliere un appartamento, un piano tariffario, un compagno di stanza. Vedi un candidato alla volta, e una volta scartato non torni indietro. Quando ti fermi?

> [!abstract] Regola del 37% (<span class="src">slide 25-26</span>)
> Con $N$ candidati visti uno alla volta:
> 1. **Look-and-rank**: guarda i primi $37\%$ (circa $N/e$) senza sceglierne nessuno, e costruisci una classifica secondo i tuoi criteri.
> 2. **Look-then-leap**: dal successivo in poi, scegli il primo che è migliore di tutti quelli visti finora.
> 3. Se non arriva nessuno così, arrivi in fondo e prendi il migliore della classifica.

Sotto certe ipotesi è la strategia che massimizza la probabilità di scegliere il migliore in assoluto.

**Esercizio fatto a lezione: il compagno di squadra dal ranking online.**
```
1. cerca online i ranking
2. prendi i primi 50
3. analizza i primi 18 e costruisci la tua classifica      <- look-and-rank
4. dal 19° in poi scegli il primo migliore di tutti i precedenti   <- leap
```
Il 18 viene dalla regola: il $37\%$ di $50$ è $18{,}5$.

### Prima il problema, poi la soluzione

Prima di cercare una soluzione bisogna **definire esattamente il problema** (<span class="src">slide 40-41</span>). Alcuni problemi sono già chiari, altri no:
- ordinare $[2, 0, 1, 10, 3]$ in $[0, 1, 2, 3, 10]$ è definito senza ambiguità;
- "decidere quali azioni comprare domani" o "contare i semafori di Trento" richiedono prima di stabilire cosa conta come risposta;
- "progettare la biblioteca online dell'università" è quasi tutto definizione.

Nel mondo reale definire il problema può essere più difficile che risolverlo, e se ne occupa la **requirement engineering**. Nel corso il problema sarà sempre dato e chiaro, e ci si concentra sulla soluzione.

### Categorie di problemi

| Categoria | Cosa chiede | Esempi |
| --- | --- | --- |
| **Calcolo e conversione** | produrre un valore a partire dai dati | media di un campione audio, Celsius in Fahrenheit, trasformata di Fourier |
| **Decisione** | dire sì o no: una proprietà vale per i dati? | 15237 è primo? "anna" è palindroma? una travatura è stabile? |
| **Ricerca** | trovare in un insieme un elemento con certe caratteristiche | il più piccolo primo con 44 cifre, i cognomi palindromi nell'elenco, la segretaria con un certo profilo |

Altri esempi tecnici: il massimo comune divisore di più numeri (calcolo), stabilire se due grafi sono **isomorfi**, cioè uguali a meno dei nomi dei nodi (decisione).

### Tre livelli di linguaggio

```
Problema    ->  linguaggio LP  =  linguaggio naturale     "calcola le radici di ax²+bx+c"
    |
Algoritmo   ->  linguaggio LA  =  pseudocodice            "1. leggi a, b, c  2. ..."
    |
Programma   ->  linguaggio LT  =  C / C++                 scanf("%d", &a); ...
```

Si scende di un livello alla volta. Il **pseudocodice** è una via di mezzo: passi numerati in italiano, precisi come un programma ma senza la sintassi di un linguaggio vero.

### Le strutture di controllo

L'esempio del risveglio (<span class="src">slide 47-54</span>) mostra i tre modi di combinare i passi. Ogni algoritmo si costruisce solo con questi tre.

**1. Sequenza.** I passi si eseguono uno dopo l'altro, e l'ordine è essenziale per la correttezza.
```
1. alzarsi dal letto
2. togliersi il pigiama
3. fare la doccia
4. vestirsi
5. fare colazione
6. prendere il bus per l'università
```
Scambiando 3 e 4 ci si fa la doccia vestiti: ogni passo resta eseguibile, ma il risultato è sbagliato.

**2. Selezione (se ... allora ... altrimenti).** Un passo si esegue solo se vale una condizione.
```
6. se piove
   6.1 prendere la macchina
   altrimenti
   6.2 prendere l'autobus
```

**3. Iterazione (mentre ... fai).** Un passo si ripete finché vale una condizione.
```
6. mentre piove
   6.1 restare in casa
7. prendere l'autobus
```
Attenzione: se la condizione non smette mai di valere, il ciclo non termina e la sequenza non è più finita.

### Top-down: la ricerca in biblioteca

**Contesto** (<span class="src">slide 55-62</span>). Ogni libro ha una posizione fissa (numero di scaffale e posizione nello scaffale). Lo schedario è **ordinato** per autore e titolo, e ogni scheda riporta autore, titolo, anno, scaffale e posizione. Input: il libro da cercare. Output: il libro prelevato.

**Primo livello.**
```
1. acquisisci il libro da richiedere
2. cerca la scheda del libro richiesto
3. segnati numero di scaffale e posizione
4. cerca lo scaffale indicato
5. accedi alla posizione e preleva il libro
6. scrivi i tuoi dati sulla scheda prestito
```

> [!abstract] Top-down (stepwise refinement)
> Se un passo non è direttamente comprensibile o eseguibile dall'esecutore, lo si dettaglia con un **sotto-algoritmo**. Procedere così, dal generale al particolare, si chiama **top-down** o procedimento per **raffinamenti successivi**.

Il passo 2 è troppo grosso, quindi si raffina.

**Raffinamento 1: ricerca sequenziale.**
```
2.1 prendi la prima scheda
2.2 se titolo e autore sono quelli cercati, termina con successo;
    altrimenti passa alla scheda successiva e ripeti
2.3 se finiscono le schede, il libro non esiste
```
Funziona, ma se l'autore è "Zac Zucker" bisogna scorrere tutto lo schedario. Non sfrutta il fatto che è ordinato.

**Raffinamento 2: ricerca dicotomica.**
```
2.1 esamina la scheda centrale della parte di schedario da consultare
2.2 se corrisponde al libro cercato, oppure la parte da consultare è vuota, termina
2.3 altrimenti prosegui allo stesso modo nella metà superiore o inferiore,
    a seconda che il libro cercato venga prima o dopo la scheda centrale
```

```
schedario ordinato:  [A ........................ M ........................ Z]
cerco "Zucker":                                  ^ centrale: M < Z, tengo la metà destra
                                                 [M ........... S ........... Z]
                                                                ^ S < Z, metà destra
                                                                [S .... V .... Z]
                                                                      ...
ogni confronto dimezza le schede rimaste
```

La prima versione della slide dimenticava la condizione "la parte da consultare è vuota": senza, se il libro non esiste l'algoritmo non termina. Ogni ricerca ha **due** uscite, trovato e non trovato.

Con 1000 schede la ricerca sequenziale può fare 1000 confronti, la dicotomica al massimo 10, perché $2^{10} = 1024$. Stesso problema, stessa correttezza, efficienza molto diversa.

### Esempio completo: le radici di un'equazione di secondo grado

**Problema** (<span class="src">slide 64-69</span>): calcolare le radici reali di $ax^2 + bx + c = 0$ e stamparle.

```
1. acquisisci i coefficienti a, b, c
2. calcola Δ = b² − 4ac
3. se Δ < 0, non esistono radici reali. vai a 7
4. se Δ = 0, x1 = x2 = −b / 2a. vai a 6
5. se Δ > 0, x1 = (−b + √Δ) / 2a,  x2 = (−b − √Δ) / 2a
6. visualizza x1 e x2
7. fine
```

<figure class="fig"><svg role="img" aria-label="Diagramma di flusso equazione di secondo grado" xmlns:xlink="http://www.w3.org/1999/xlink" width="455.04pt" height="488.304pt" viewBox="0 0 455.04 488.304" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f56-figure_1"> <g id="f56-patch_1"> <path d="M 0 488.304 L 455.04 488.304 L 455.04 0 L 0 0 L 0 488.304 z " style="fill: none"/> </g> <g id="f56-axes_1"> <g id="f56-patch_2"> <path d="M 161.5464 44.568 L 293.4936 44.568 Q 296.82 44.568 296.82 41.2416 L 296.82 17.4024 Q 296.82 14.076 293.4936 14.076 L 161.5464 14.076 Q 158.22 14.076 158.22 17.4024 L 158.22 41.2416 Q 158.22 44.568 161.5464 44.568 L 161.5464 44.568 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_3"> <path d="M 130.5 100.008 L 324.54 100.008 L 324.54 66.744 L 130.5 66.744 L 130.5 100.008 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_4"> <path d="M 130.5 155.448 L 324.54 155.448 L 324.54 122.184 L 130.5 122.184 L 130.5 155.448 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_5"> <path d="M 227.52 185.94 L 288.504 216.432 L 227.52 246.924 L 166.536 216.432 L 227.52 185.94 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_6"> <path d="M 327.312 233.064 L 443.736 233.064 L 443.736 199.8 L 327.312 199.8 L 327.312 233.064 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_7"> <path d="M 227.52 269.1 L 288.504 299.592 L 227.52 330.084 L 166.536 299.592 L 227.52 269.1 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_8"> <path d="M 307.908 360.576 L 446.508 360.576 L 446.508 324.54 L 307.908 324.54 L 307.908 360.576 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_9"> <path d="M 8.532 360.576 L 185.94 360.576 L 185.94 324.54 L 8.532 324.54 L 8.532 360.576 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_10"> <path d="M 130.5 421.56 L 324.54 421.56 L 324.54 388.296 L 130.5 388.296 L 130.5 421.56 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_11"> <path d="M 161.5464 477 L 293.4936 477 Q 296.82 477 296.82 473.6736 L 296.82 449.8344 Q 296.82 446.508 293.4936 446.508 L 161.5464 446.508 Q 158.22 446.508 158.22 449.8344 L 158.22 473.6736 Q 158.22 477 161.5464 477 L 161.5464 477 z " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-line2d_1"> <path d="M 443.736 216.432 L 446.508 216.432 " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.5; stroke-linecap: square"/> </g> <g id="f56-line2d_2"> <path d="M 446.508 216.432 L 446.508 461.754 " clip-path="url(#f56-pef8f7fc1a4)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.5; stroke-linecap: square"/> </g> <g id="f56-text_1"> <!-- inizio --> <g style="fill: var(--fig-axis)" transform="translate(211.125 32.439187) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-4c"/> <use xlink:href="#f56-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(96.390625 0)"/> <use xlink:href="#f56-DejaVuSerif-5d" transform="translate(128.375 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(181.0625 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(213.046875 0)"/> </g> </g> <g id="f56-text_2"> <!-- leggi a, b, c --> <g style="fill: var(--fig-ink)" transform="translate(192.135938 86.493656) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-4f"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(31.984375 0)"/> <use xlink:href="#f56-DejaVuSerif-4a" transform="translate(91.171875 0)"/> <use xlink:href="#f56-DejaVuSerif-4a" transform="translate(155.1875 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(219.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(251.1875 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(282.96875 0)"/> <use xlink:href="#f56-DejaVuSerif-f" transform="translate(342.59375 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(374.375 0)"/> <use xlink:href="#f56-DejaVuSerif-45" transform="translate(406.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-f" transform="translate(470.171875 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(501.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-46" transform="translate(533.734375 0)"/> </g> </g> <g id="f56-text_3"> <!-- Δ ← b² − 4ac --> <g style="fill: var(--fig-ink)" transform="translate(188.502188 141.933656) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-30d" d="M 4350 0 L 244 0 L 2034 4666 L 2559 4666 L 4350 0 z M 3506 331 L 2138 3909 L 763 331 L 3506 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-852" d="M 4997 2322 L 4997 1816 L 972 1816 L 1575 763 L 1541 763 L 238 2053 L 238 2084 L 1541 3375 L 1575 3375 L 972 2322 L 4997 2322 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-74" d="M 531 4050 L 313 4050 L 313 4544 Q 519 4644 737 4697 Q 956 4750 1172 4750 Q 1603 4750 1870 4544 Q 2138 4338 2138 4013 Q 2138 3631 1531 3088 L 1472 3034 L 728 2363 L 1931 2363 L 1931 2700 L 2163 2700 L 2163 2088 L 281 2088 L 281 2322 L 1172 3116 Q 1441 3356 1556 3547 Q 1672 3738 1672 3944 Q 1672 4209 1520 4364 Q 1369 4519 1106 4519 Q 863 4519 716 4400 Q 569 4281 531 4050 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-30d"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(72.21875 0)"/> <use xlink:href="#f56-DejaVuSerif-852" transform="translate(104 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(187.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-45" transform="translate(219.578125 0)"/> <use xlink:href="#f56-DejaVuSerif-74" transform="translate(283.59375 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(323.6875 0)"/> <use xlink:href="#f56-DejaVuSerif-8cf" transform="translate(355.46875 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(439.265625 0)"/> <use xlink:href="#f56-DejaVuSerif-17" transform="translate(471.046875 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(534.671875 0)"/> <use xlink:href="#f56-DejaVuSerif-46" transform="translate(594.296875 0)"/> </g> </g> <g id="f56-text_4"> <!-- Δ &lt; 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(205.404375 219.549187) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-1f" d="M 4684 3188 L 1441 2003 L 4684 825 L 4684 294 L 678 1747 L 678 2266 L 4684 3719 L 4684 3188 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-30d"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(72.21875 0)"/> <use xlink:href="#f56-DejaVuSerif-1f" transform="translate(104 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(187.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-13" transform="translate(219.578125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(283.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-22" transform="translate(314.984375 0)"/> </g> </g> <g id="f56-text_5"> <!-- nessuna radice --> <g style="fill: var(--fig-accent)" transform="translate(347.271656 213.02868) scale(0.1 -0.1)"> <defs> <path id="f56-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-51"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(64.40625 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(123.59375 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(174.90625 0)"/> <use xlink:href="#f56-DejaVuSerif-58" transform="translate(226.21875 0)"/> <use xlink:href="#f56-DejaVuSerif-51" transform="translate(290.625 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(355.03125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(414.65625 0)"/> <use xlink:href="#f56-DejaVuSerif-55" transform="translate(446.4375 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(494.234375 0)"/> <use xlink:href="#f56-DejaVuSerif-47" transform="translate(553.859375 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(617.875 0)"/> <use xlink:href="#f56-DejaVuSerif-46" transform="translate(649.859375 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(705.859375 0)"/> </g> <!-- reale --> <g style="fill: var(--fig-accent)" transform="translate(372.634937 225.031414) scale(0.1 -0.1)"> <use xlink:href="#f56-DejaVuSerif-55"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(47.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(106.984375 0)"/> <use xlink:href="#f56-DejaVuSerif-4f" transform="translate(166.609375 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(198.59375 0)"/> </g> </g> <g id="f56-text_6"> <!-- Δ = 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(205.404375 302.709187) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-30d"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(72.21875 0)"/> <use xlink:href="#f56-DejaVuSerif-20" transform="translate(104 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(187.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-13" transform="translate(219.578125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(283.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-22" transform="translate(314.984375 0)"/> </g> </g> <g id="f56-text_7"> <!-- x₁ = x₂ = −b / 2a --> <g style="fill: var(--fig-ink)" transform="translate(330.128 345.415852) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-5b" d="M 1863 2028 L 2559 2988 L 2113 2988 L 2113 3322 L 3391 3322 L 3391 2988 L 2950 2988 L 2059 1759 L 3097 331 L 3531 331 L 3531 0 L 1997 0 L 1997 331 L 2419 331 L 1697 1325 L 972 331 L 1403 331 L 1403 0 L 141 0 L 141 331 L 581 331 L 1497 1594 L 488 2988 L 78 2988 L 78 3322 L 1563 3322 L 1563 2988 L 1166 2988 L 1863 2028 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-7d4" d="M 550 0 L 550 262 L 1088 262 L 1088 2243 L 459 1912 L 459 2206 L 1209 2609 L 1528 2609 L 1528 262 L 2069 262 L 2069 0 L 550 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-7d5" d="M 531 1962 L 313 1962 L 313 2456 Q 519 2556 737 2609 Q 956 2662 1172 2662 Q 1603 2662 1870 2456 Q 2138 2250 2138 1925 Q 2138 1543 1531 1000 L 1472 946 L 728 275 L 1931 275 L 1931 612 L 2163 612 L 2163 0 L 281 0 L 281 234 L 1172 1028 Q 1441 1268 1556 1459 Q 1672 1650 1672 1856 Q 1672 2121 1520 2276 Q 1369 2431 1106 2431 Q 863 2431 716 2312 Q 569 2193 531 1962 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-12" d="M 1656 4666 L 2156 4666 L 500 -594 L 0 -594 L 1656 4666 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-5b"/> <use xlink:href="#f56-DejaVuSerif-7d4" transform="translate(56.390625 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(96.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-20" transform="translate(128.265625 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(212.0625 0)"/> <use xlink:href="#f56-DejaVuSerif-5b" transform="translate(243.84375 0)"/> <use xlink:href="#f56-DejaVuSerif-7d5" transform="translate(300.234375 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(340.328125 0)"/> <use xlink:href="#f56-DejaVuSerif-20" transform="translate(372.109375 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(455.90625 0)"/> <use xlink:href="#f56-DejaVuSerif-8cf" transform="translate(487.6875 0)"/> <use xlink:href="#f56-DejaVuSerif-45" transform="translate(571.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(635.5 0)"/> <use xlink:href="#f56-DejaVuSerif-12" transform="translate(667.28125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(700.96875 0)"/> <use xlink:href="#f56-DejaVuSerif-15" transform="translate(732.75 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(796.375 0)"/> </g> </g> <g id="f56-text_8"> <!-- x₁,₂ = (−b ± √Δ) / 2a --> <g style="fill: var(--fig-ink)" transform="translate(39.741234 345.697727) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-73" d="M 2931 4013 L 2931 2791 L 4684 2791 L 4684 2284 L 2931 2284 L 2931 1063 L 2431 1063 L 2431 2284 L 678 2284 L 678 2791 L 2431 2791 L 2431 4013 L 2931 4013 z M 678 500 L 4684 500 L 4684 0 L 678 0 L 678 500 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-8d6" d="M 3488 5191 L 4078 5191 L 4078 4891 L 3719 4891 L 1863 -128 L 1656 -128 L 659 2631 L 269 2491 L 191 2741 L 1075 3047 L 1875 831 L 3488 5191 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-5b"/> <use xlink:href="#f56-DejaVuSerif-7d4" transform="translate(56.390625 0)"/> <use xlink:href="#f56-DejaVuSerif-f" transform="translate(96.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-7d5" transform="translate(128.265625 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(168.359375 0)"/> <use xlink:href="#f56-DejaVuSerif-20" transform="translate(200.140625 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(283.9375 0)"/> <use xlink:href="#f56-DejaVuSerif-b" transform="translate(315.71875 0)"/> <use xlink:href="#f56-DejaVuSerif-8cf" transform="translate(354.734375 0)"/> <use xlink:href="#f56-DejaVuSerif-45" transform="translate(438.53125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(502.546875 0)"/> <use xlink:href="#f56-DejaVuSerif-73" transform="translate(534.328125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(618.125 0)"/> <use xlink:href="#f56-DejaVuSerif-8d6" transform="translate(649.90625 0)"/> <use xlink:href="#f56-DejaVuSerif-30d" transform="translate(713.625 0)"/> <use xlink:href="#f56-DejaVuSerif-c" transform="translate(785.84375 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(824.859375 0)"/> <use xlink:href="#f56-DejaVuSerif-12" transform="translate(856.640625 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(890.328125 0)"/> <use xlink:href="#f56-DejaVuSerif-15" transform="translate(922.109375 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(985.734375 0)"/> </g> </g> <g id="f56-text_9"> <!-- stampa x₁, x₂ --> <g style="fill: var(--fig-ink)" transform="translate(188.045625 408.045187) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-56"/> <use xlink:href="#f56-DejaVuSerif-57" transform="translate(51.3125 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(91.5 0)"/> <use xlink:href="#f56-DejaVuSerif-50" transform="translate(151.125 0)"/> <use xlink:href="#f56-DejaVuSerif-53" transform="translate(245.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(309.96875 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(369.59375 0)"/> <use xlink:href="#f56-DejaVuSerif-5b" transform="translate(401.375 0)"/> <use xlink:href="#f56-DejaVuSerif-7d4" transform="translate(457.765625 0)"/> <use xlink:href="#f56-DejaVuSerif-f" transform="translate(497.859375 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(529.640625 0)"/> <use xlink:href="#f56-DejaVuSerif-5b" transform="translate(561.421875 0)"/> <use xlink:href="#f56-DejaVuSerif-7d5" transform="translate(617.8125 0)"/> </g> </g> <g id="f56-text_10"> <!-- fine --> <g style="fill: var(--fig-axis)" transform="translate(216.102188 464.871656) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-cf0" d="M 3347 4019 L 3053 4022 Q 3044 4291 2853 4423 Q 2663 4556 2278 4556 Q 1800 4556 1578 4334 Q 1356 4113 1356 3634 L 1356 3322 L 3578 3322 L 3578 331 L 4122 331 L 4122 0 L 2450 0 L 2450 331 L 3003 331 L 3003 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4238 1147 4550 Q 1513 4863 2228 4863 Q 2500 4863 2784 4822 Q 3069 4781 3347 4697 L 3347 4019 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-cf0"/> <use xlink:href="#f56-DejaVuSerif-51" transform="translate(66.703125 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(131.109375 0)"/> </g> </g> <g id="f56-patch_12"> <path d="M 227.52 44.568 Q 227.52 55.656 227.52 64.507932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 229.52 60.507932 L 227.52 64.507932 L 225.52 60.507932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_13"> <path d="M 227.52 100.008 Q 227.52 111.096 227.52 119.947932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 229.52 115.947932 L 227.52 119.947932 L 225.52 115.947932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_14"> <path d="M 227.52 155.448 Q 227.52 170.694 227.52 183.703932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 229.52 179.703932 L 227.52 183.703932 L 225.52 179.703932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_15"> <path d="M 288.504 216.432 Q 307.908 216.432 325.075932 216.432 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 321.075932 214.432 L 325.075932 216.432 L 321.075932 218.432 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_11"> <!-- sì --> <g style="fill: var(--fig-accent)" transform="translate(296.82 208.116) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-ae" d="M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z M 572 5113 L 1384 3938 L 1019 3938 L -44 5113 L 572 5113 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-56"/> <use xlink:href="#f56-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f56-patch_16"> <path d="M 227.52 246.924 Q 227.52 258.012 227.52 266.863932 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 229.52 262.863932 L 227.52 266.863932 L 225.52 262.863932 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_12"> <!-- no --> <g style="fill: var(--fig-steel)" transform="translate(233.064 260.784) scale(0.11 -0.11)"> <use xlink:href="#f56-DejaVuSerif-51"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f56-patch_17"> <path d="M 288.504 299.592 Q 332.856 299.592 374.971932 299.592 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 370.971932 297.592 L 374.971932 299.592 L 370.971932 301.592 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_18"> <path d="M 377.208 299.592 Q 377.208 312.066 377.208 322.303932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 379.208 318.303932 L 377.208 322.303932 L 375.208 318.303932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_13"> <!-- sì --> <g style="fill: var(--fig-ink)" transform="translate(296.82 291.276) scale(0.11 -0.11)"> <use xlink:href="#f56-DejaVuSerif-56"/> <use xlink:href="#f56-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f56-patch_19"> <path d="M 166.536 299.592 Q 131.886 299.592 99.472068 299.592 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 103.472068 301.592 L 99.472068 299.592 L 103.472068 297.592 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_20"> <path d="M 97.236 299.592 Q 97.236 312.066 97.236 322.303932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 99.236 318.303932 L 97.236 322.303932 L 95.236 318.303932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_14"> <!-- no --> <g style="fill: var(--fig-ink)" transform="translate(127.728 291.276) scale(0.11 -0.11)"> <use xlink:href="#f56-DejaVuSerif-51"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f56-patch_21"> <path d="M 97.236 360.576 Q 127.728 374.436 156.184359 387.370708 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 153.370499 383.894764 L 156.184359 387.370708 L 151.715287 387.53623 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_22"> <path d="M 377.208 360.576 Q 337.014 374.436 298.933918 387.567063 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 303.367392 388.153846 L 298.933918 387.567063 L 302.063429 384.372354 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_23"> <path d="M 227.52 421.56 Q 227.52 434.034 227.52 444.271932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 229.52 440.271932 L 227.52 444.271932 L 225.52 440.271932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-patch_24"> <path d="M 446.508 461.754 Q 371.664 461.754 299.056068 461.754 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 303.056068 463.754 L 299.056068 461.754 L 303.056068 459.754 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> </g> </g> <defs> <clipPath id="f56-pef8f7fc1a4"> <rect x="5.76" y="5.76" width="443.52" height="476.784"/> </clipPath> </defs> </svg></figure>

Il diagramma di flusso disegna lo stesso algoritmo: rettangoli per le azioni, rombi per le domande sì/no, frecce per l'ordine. Si vede subito che ci sono tre strade e che tutte arrivano a "fine".

### Altri esempi dalle slide

**Mediana** (<span class="src">slide 70-74</span>). La mediana $m$ di $n_1, \dots, n_N$ separa i valori in due metà con lo stesso numero di elementi $\leq m$ e $\geq m$.
- $N$ dispari: $7, 5, 1, 9, 3, 6, 10$ ordinati diventano $1, 3, 5, \mathbf{6}, 7, 9, 10$, quindi $m = 6$, l'elemento centrale.
- $N$ pari: $1, 3, 5, 7, 9, 10$ ha due elementi centrali, $m = \frac{5 + 7}{2} = 6$.

```
1. leggi n1, ..., nN                      \
2. memorizza i valori in un vettore a     /  input
3. ordina gli elementi di a               \
4. calcola m da a, distinguendo N pari    /  calcolo
   e N dispari
5. stampa m                                  output
```
Lo schema input, calcolo, output tornerà in quasi tutti i programmi.

**Percorso più breve** (<span class="src">slide 86-88</span>). Una carta geografica è un **grafo**: le città sono nodi, le strade archi con una distanza. Per andare da $C_p$ a $C_a$:
1. trova tutte le sequenze di città $C_0, \dots, C_k$ con $C_0 = C_p$, $C_k = C_a$, nessuna città ripetuta, e una strada diretta fra città consecutive;
2. per ogni sequenza calcola la somma delle distanze;
3. scegli la sequenza con somma minima (a parità, una qualsiasi).

È corretto ma poco efficiente: le sequenze possibili crescono in modo esplosivo con il numero di città. Esistono algoritmi molto migliori, che arriveranno più avanti.

**Esercizi lasciati aperti dalle slide:**
- descrivere un proprio algoritmo simile al problema della segretaria, in linguaggio naturale;
- ordinare un mazzo di 52 carte in picche, fiori, quadri, cuori (<span class="src">slide 76</span>);
- tavoletta di cioccolato $h \times k$: quanti spezzamenti servono per ottenere tutti i quadratini, e conta la strategia? (<span class="src">slide 78-81</span>);
- scala di $N$ gradini salita con passi da 1, 2 o 3: in quanti modi? Prova a mano con $N = 1, 2, 3, 4$ (<span class="src">slide 89-90</span>, esercizio d'esame 2016/17, risolto in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/));
- trasformare in pseudocodice le istruzioni grafiche di montaggio di un mobile (<span class="src">slide 92-93</span>).

## Metodo

**Scrivere un algoritmo per un problema.**
1. **Definisci il problema**: quali sono i dati di ingresso, cosa deve uscire, quali condizioni di partenza valgono.
2. **Scrivi i passi grossi** in linguaggio naturale, numerati, nell'ordine giusto.
3. **Raffina top-down** ogni passo che l'esecutore non sa fare direttamente.
4. **Usa solo le tre strutture**: sequenza, se/altrimenti, mentre.
5. **Controlla la terminazione**: ogni ciclo deve avere una condizione che prima o poi diventa falsa, e ogni ricerca deve gestire anche il caso "non trovato".
6. **Controlla la correttezza sui casi limite** (lista vuota, $\Delta = 0$, $N$ pari e dispari) e chiediti se c'è un modo con meno passi.

## Esercizi tipo esame

**Esercizio 1.** Scrivi in pseudocodice un algoritmo che legge numeri interi positivi finché non arriva 0 e stampa il più grande. Cosa stampa se il primo numero è 0?

> [!example]- Soluzione
> ```
> 1. leggi x
> 2. se x = 0, stampa "nessun numero" e termina
> 3. max ← x
> 4. leggi x
> 5. mentre x ≠ 0
>    5.1 se x > max, max ← x
>    5.2 leggi x
> 6. stampa max
> ```
> Il passo 2 gestisce il caso limite: senza, si stamperebbe 0 come massimo di una sequenza vuota. `max` parte dal primo numero letto e non da 0, così l'algoritmo funzionerebbe anche con numeri negativi. In C è lo schema della sentinella di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).

**Esercizio 2.** Uno schedario ordinato ha 1 000 000 di schede. Quanti confronti fa al massimo la ricerca sequenziale? E la dicotomica?

> [!example]- Soluzione
> Sequenziale: fino a 1 000 000, se il libro è l'ultimo o non c'è.
> Dicotomica: ogni confronto dimezza le schede rimaste, quindi serve il più piccolo $k$ con $2^k \geq 1\,000\,000$. $2^{20} = 1\,048\,576$, quindi al massimo 20 confronti.

**Esercizio 3.** Questo algoritmo termina? Perché?
```
1. x ← 10
2. mentre x ≠ 0
   2.1 x ← x − 3
3. stampa x
```

> [!example]- Soluzione
> No. $x$ vale 10, 7, 4, 1, −2, −5, … e salta lo 0. La condizione giusta è "mentre $x > 0$", che ferma il ciclo a −2. Ogni ciclo deve avere una condizione che prima o poi diventa falsa **per davvero**, non solo "in teoria".

**Esercizio 4.** In quanti modi si sale una scala di 4 gradini con passi da 1, 2 o 3? Elencali.

> [!example]- Soluzione
> 7 modi: `1+1+1+1`, `1+1+2`, `1+2+1`, `2+1+1`, `2+2`, `1+3`, `3+1`. Il ragionamento generale, $S(4) = S(3) + S(2) + S(1) = 4 + 2 + 1$, e il programma sono in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).

**Esercizio 5.** Tavoletta di cioccolato $h \times k$: ogni spezzamento divide un pezzo in due lungo una riga. Quanti spezzamenti servono per avere tutti i quadratini separati? La strategia conta?

> [!example]- Soluzione
> Ogni spezzamento trasforma un pezzo in due, quindi aumenta il numero di pezzi di **esattamente** uno. Si parte da 1 pezzo e si arriva a $h \cdot k$: servono $h \cdot k - 1$ spezzamenti, con qualunque strategia. Per $3 \times 4$ sono 11.

**Esercizio 6.** Regola del 37% con 100 candidati: quanti ne guardi senza scegliere? Cosa fai se nessuno dei successivi è migliore di tutti quelli visti?

> [!example]- Soluzione
> I primi 37 (il 37% di 100), solo per costruire la classifica. Dal 38° scegli il primo migliore di tutti i precedenti. Se non arriva, arrivi all'ultimo e prendi il migliore della classifica.

## Errori tipici

- Scrivere passi che l'esecutore non sa fare ("trova il massimo" come passo unico, senza raffinarlo).
- Dimenticare il caso "non trovato" in una ricerca, o il caso "sequenza vuota".
- Cicli con una condizione che può non diventare mai falsa.
- Confondere correttezza ed efficienza: un algoritmo lento ma giusto è corretto, uno veloce ma sbagliato no.
- Applicare la ricerca dicotomica a dati non ordinati.

## Domande

> [!question]- Dai la definizione informale di algoritmo.
> Una sequenza **precisa** di operazioni, **comprensibili da un esecutore** (non per forza un calcolatore), che in un numero **finito** di passi porta alla realizzazione di un **compito**.


> [!question]- Perché "comprensibili all'esecutore" è una parte necessaria della definizione di algoritmo?
> Se anche un solo passo non è comprensibile, l'esecutore non può eseguire l'algoritmo. Per questo lo stesso compito va descritto in modo diverso a seconda dell'esecutore (persona o robot).


> [!question]- Che differenza c'è fra un algoritmo e un programma?
> Un algoritmo è una sequenza di passi per un esecutore qualsiasi; un programma è un algoritmo scritto in un **linguaggio di programmazione**, così che lo esegua un calcolatore.


> [!question]- Quali sono le due proprietà fondamentali di un algoritmo e cosa significa ciascuna?
> **Correttezza**: arriva alla soluzione senza errori. **Efficienza**: ci arriva usando meno risorse possibile, cioè tempo **e** memoria, non solo velocità.


> [!question]- Quali sono le tre categorie di problemi viste a lezione? Dai un esempio per ognuna.
> **Calcolo e conversione**: produce un valore (Celsius in Fahrenheit). **Decisione**: risponde sì o no ("anna" è palindroma?). **Ricerca**: restituisce un elemento dell'insieme con certe caratteristiche (scegliere la segretaria o il coinquilino).


> [!question]- Quali linguaggi corrispondono a problema, algoritmo e programma?
> Problema: linguaggio naturale (LP). Algoritmo: pseudocodice (LA). Programma: linguaggio di programmazione, nel corso il C (LT).


> [!question]- Quali sono le tre strutture di controllo con cui si costruisce un algoritmo?
> **Sequenza**, **selezione** (se ... altrimenti), **iterazione** (mentre ... fai).


> [!question]- Cosa vuol dire procedere top-down (stepwise refinement)?
> Si parte da un algoritmo generale e ogni passo non comprensibile o non eseguibile dall'esecutore diventa un **sotto-algoritmo**. Si ripete, dal generale al particolare, finché tutti i passi sono eseguibili.


> [!question]- Enuncia la regola del 37% del problema della segretaria.
> Con N candidati: guarda il primo 37% senza scegliere e costruisci una classifica. Dopo, fermati sul primo candidato migliore di tutti quelli visti. Se non arriva, prendi il primo della classifica.


> [!question]- Perché la ricerca dicotomica nello schedario ha bisogno di due condizioni di terminazione?
> Le uscite sono due: libro trovato, oppure parte da consultare vuota (libro non esiste). Senza la seconda, se il libro non c'è l'algoritmo non termina.


> [!question]- Perché la ricerca dicotomica funziona solo se lo schedario è ordinato?
> Scarta metà schedario in base a "prima o dopo" la scheda centrale. Se non è ordinato, la metà scartata può contenere il libro e l'algoritmo risponde "non esiste" sbagliando.


> [!question]- Nell'algoritmo dell'equazione di secondo grado, perché dopo il caso $\Delta < 0$ si salta direttamente alla fine?
> Proseguendo, i passi 4 e 5 non scattano e si arriva al 6, che stamperebbe $x_1$ e $x_2$ mai calcolati. Il salto al 7 evita la stampa.

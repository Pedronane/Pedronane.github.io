---
title: Il Linguaggio C
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-09-11
lezioni:
  - 11 set
ordine: 2
---

Lezione 03 di [Programmazione 1](/uni/prog-1/), 11 settembre 2026. Slide: <span class="src">2.2 Introduzione al C</span>, slide 1-56 e 64-65. Prima: [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/). Dopo: [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/), che copre il resto del deck (slide 57-76: espressioni, precedenze, `++` e `--`, costanti, caratteri e ASCII).

> [!abstract] Per l'esame
> - **Saper enunciare**: sintassi e semantica, compilazione e interpretazione, le fasi dal sorgente all'eseguibile, le regole degli identificatori, le quattro caratteristiche di una variabile, l-value e r-value.
> - **Saper fare**: dire se un identificatore è valido; tracciare una sequenza di assegnazioni con una tabella; scrivere un programma che legge con `scanf` (controllando il valore di ritorno) e stampa con `printf`.
> - **Dove esce**: nella teorica come batteria SI/NO e dentro ogni tracing (vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore la struttura del programma e l'input da tastiera servono in ogni punto.

Il filo della lezione:

```
linguaggio di programmazione    sintassi (forma) + semantica (significato)
          |
          v
livelli di astrazione           linguaggio macchina -> assembly -> C
          |
          v
compilare o interpretare        il C si compila
          |
          v
macchina astratta C             memoria a celle, standard input e output
          |
          v
dal sorgente all'eseguibile     editor -> preprocessore -> compilatore -> linker -> loader
          |
          v
lessico                         case sensitive, spazi, commenti, identificatori, keyword
          |
          v
struttura di un programma       main { istruzioni; }
          |
          v
variabili                       nome, tipo, l-value (dove), r-value (cosa)
          |
          v
assegnazione                    valuta a destra, scrivi a sinistra
```

## Concetti

### Linguaggio di programmazione

Un algoritmo scritto in linguaggio naturale va **tradotto** in un linguaggio che l'esecutore, il computer, capisce (<span class="src">slide 2-3</span>). La sequenza di istruzioni in quel linguaggio è il **programma**. Per non lasciare ambiguità il linguaggio deve essere preciso e rigoroso su due piani.

> [!abstract] Sintassi e semantica
> **Sintassi**: l'insieme di regole che descrivono quali stringhe di parole appartengono al linguaggio. È la grammatica.
>
> **Semantica**: le regole per interpretare quelle stringhe, cioè che cosa fa l'esecutore quando le incontra. È il significato.

Le due cose sono indipendenti:
- `x = x + 1;` e `x = 1 + x;` sono stringhe **diverse**, entrambe sintatticamente corrette, e hanno la **stessa** semantica: aumentano $x$ di uno.
- `x = x + 1` senza punto e virgola ha un errore di **sintassi**: il compilatore lo rifiuta.
- `media = somma / 0;` è sintatticamente corretta ma semanticamente sbagliata: si compila, e il problema esce quando la esegui.

La grammatica completa del C sta nell'appendice E del libro di testo (<span class="src">slide 39</span>).

### Livelli di astrazione

Fra il programmatore, che conosce il problema, e la macchina, che capisce solo circuiti a due valori (0 e 1), c'è il linguaggio di programmazione. Il suo **livello di astrazione** è una scelta (<span class="src">slide 4-6</span>): troppo vicino alla macchina e programmare è difficile, troppo vicino al programmatore e i programmi diventano inefficienti.

La stessa istruzione, "il totale è la paga più gli straordinari", a tre livelli:

```
C                  TOT = PAGA + STRAORD;          alto
                                                    |
assembly           LOAD  PAGA                       |
                   ADD   STRAORD                    |
                   STORE TOT                        |
                                                    v
linguaggio         0100001111                     basso
macchina           1100111001
                   0110001111
```

In assembly si vede il lavoro della CPU visto in [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/): carica un valore, somma, salva in una cella. In C basta una riga.

**Cosa chiediamo a un linguaggio** (<span class="src">slide 9</span>):
- **astrazione della memoria**: riferirsi alle celle con nomi simbolici (`totale`) invece che con indirizzi binari;
- **astrazione delle istruzioni**: scrivere operazioni complesse, come un'espressione aritmetica, in una forma leggibile;
- **astrazione dell'algoritmo**: poter esprimere direttamente sequenza, scelta e ripetizione.

**Macchina fisica** (<span class="src">slide 8</span>). Una macchina fisica esegue istruzioni nel suo linguaggio, il codice macchina. A una macchina corrisponde un linguaggio (il suo), ma un linguaggio in generale può essere eseguito da più macchine. Il cuore della macchina fisica è il ciclo **fetch-decode-execute**, che fa da interprete del codice macchina.

### Il linguaggio C

(<span class="src">slide 14-17</span>)
- Creato nel **1972** da Dennis Ritchie ai Bell Labs, evoluzione dei linguaggi BCPL e B. La slide 14 dice "inventato da Brian Kernighan e Dennis Ritchie": è sbagliato, il linguaggio è di **Ritchie**. Kernighan è coautore con Ritchie del libro di riferimento, *The C Programming Language* (1978, seconda edizione 1988, citato nella slide 15).
- Nato come linguaggio di sistema per scrivere **Unix**, oggi usato per sistemi operativi (Linux, Windows, macOS), compilatori, editor, e in generale ovunque serva efficienza.
- Standard ANSI nel **1989** (C89, detto anche ANSI C), aggiornato nel **1999** (C99). Le slide si fermano qui, ma dopo sono usciti **C11** (2011, quello che usiamo con `-std=c11`), **C17** (2018, solo correzioni) e **C23** (2024).
- **Portabile**: lo stesso codice si compila su macchine diverse.
- Linguaggio di **medio livello**: più astratto dell'assembly, più vicino alla macchina di Pascal o Ada. Efficiente, ma a volte "troppo" vicino alla macchina.

| Livello | Linguaggi |
| --- | --- |
| alto | Ada, Pascal, BASIC |
| medio | C, FORTH |
| basso | assembly |

Il **C++** (Stroustrup, Bell Labs) è un'evoluzione del C: aggiunge astrazione sui dati, programmazione a oggetti e la Standard Template Library.

### Compilazione e interpretazione

Un programma scritto in un linguaggio $L$ si può eseguire in due modi (<span class="src">slide 19</span>):

| | Compilazione | Interpretazione |
| --- | --- | --- |
| cosa fa | **traduce** tutto il programma in un altro linguaggio (per esempio codice macchina), senza eseguirlo | **esegue** direttamente il codice sorgente, un'istruzione alla volta |
| esecuzione | veloce: la decodifica è già stata fatta | più lenta: ogni istruzione va decodificata mentre gira |
| costo | la traduzione può richiedere tempo | nessuna traduzione a parte |
| pro | efficienza, ottimizzazioni | flessibilità, portabilità, interattività (debug a run-time) |
| contro | poca flessibilità, si perde informazione sulla struttura del sorgente | scarsa efficienza |

Il C è un linguaggio **compilato**. Python, per confronto, è interpretato.

**Macchina astratta** (<span class="src">slide 21-23</span>). Dato un linguaggio $L$, la macchina astratta $M_L$ è un qualsiasi insieme di strutture dati e algoritmi capace di memorizzare ed eseguire programmi scritti in $L$. È un'astrazione del calcolatore e delle sue risorse: memoria (dati e programma), controllo della sequenza, controllo dei dati, gestione della memoria, operazioni. Il componente essenziale è l'**interprete**:

```
        start
          |
          v
  +-> acquisisci la prossima istruzione
  |       |
  |       v
  |   decodifica
  |       |
  |       v
  |   acquisisci gli operandi
  |       |
  |       v
  |   seleziona l'operazione ---------------------+
  |       |          |            |               |
  |       v          v            v               v
  |   esegui OP1  esegui OP2 ... esegui OPn    esegui HALT
  |       |          |            |               |
  |       +----------+------------+               v
  |       |                                     stop
  |       v
  +-- memorizza il risultato
```

È lo stesso ciclo fetch-decode-execute della CPU, scritto per un linguaggio qualsiasi.

**La macchina astratta C** (<span class="src">slide 26</span>). Il programma C non gira direttamente: il compilatore lo traduce nel linguaggio della macchina ospite $M_o$, che poi lo esegue interpretandolo con il suo ciclo fetch-decode-execute.

```
programma C  --compilazione-->  binario per Mo  --interpretazione (CPU)-->  esecuzione
```

### Dal sorgente all'eseguibile

(<span class="src">slide 27-29</span>)

<figure class="fig"><svg role="img" aria-label="Dal sorgente all'eseguibile" xmlns:xlink="http://www.w3.org/1999/xlink" width="681.12pt" height="143.24459pt" viewBox="0 0 681.12 143.24459" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f60-figure_1"> <g id="f60-patch_1"> <path d="M 0 143.24459 L 681.12 143.24459 L 681.12 0 L 0 0 L 0 143.24459 z " style="fill: none"/> </g> <g id="f60-axes_1"> <g id="f60-patch_2"> <path d="M 12.785311 86.990164 L 101.918951 86.990164 Q 104.553443 86.990164 104.553443 84.355672 L 104.553443 54.498098 Q 104.553443 51.863607 101.918951 51.863607 L 12.785311 51.863607 Q 10.15082 51.863607 10.15082 54.498098 L 10.15082 84.355672 Q 10.15082 86.990164 12.785311 86.990164 L 12.785311 86.990164 z " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-patch_3"> <path d="M 122.555803 86.990164 L 211.689443 86.990164 Q 214.323934 86.990164 214.323934 84.355672 L 214.323934 54.498098 Q 214.323934 51.863607 211.689443 51.863607 L 122.555803 51.863607 Q 119.921311 51.863607 119.921311 54.498098 L 119.921311 84.355672 Q 119.921311 86.990164 122.555803 86.990164 L 122.555803 86.990164 z " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-patch_4"> <path d="M 232.326295 86.990164 L 321.459934 86.990164 Q 324.094426 86.990164 324.094426 84.355672 L 324.094426 54.498098 Q 324.094426 51.863607 321.459934 51.863607 L 232.326295 51.863607 Q 229.691803 51.863607 229.691803 54.498098 L 229.691803 84.355672 Q 229.691803 86.990164 232.326295 86.990164 L 232.326295 86.990164 z " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-patch_5"> <path d="M 342.096787 86.990164 L 431.230426 86.990164 Q 433.864918 86.990164 433.864918 84.355672 L 433.864918 54.498098 Q 433.864918 51.863607 431.230426 51.863607 L 342.096787 51.863607 Q 339.462295 51.863607 339.462295 54.498098 L 339.462295 84.355672 Q 339.462295 86.990164 342.096787 86.990164 L 342.096787 86.990164 z " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-patch_6"> <path d="M 451.867279 86.990164 L 541.000918 86.990164 Q 543.63541 86.990164 543.63541 84.355672 L 543.63541 54.498098 Q 543.63541 51.863607 541.000918 51.863607 L 451.867279 51.863607 Q 449.232787 51.863607 449.232787 54.498098 L 449.232787 84.355672 Q 449.232787 86.990164 451.867279 86.990164 L 451.867279 86.990164 z " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-patch_7"> <path d="M 561.63777 86.990164 L 650.77141 86.990164 Q 653.405902 86.990164 653.405902 84.355672 L 653.405902 54.498098 Q 653.405902 51.863607 650.77141 51.863607 L 561.63777 51.863607 Q 559.003279 51.863607 559.003279 54.498098 L 559.003279 84.355672 Q 559.003279 86.990164 561.63777 86.990164 L 561.63777 86.990164 z " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-line2d_1"> <path d="M 10.15082 29.909508 L 433.864918 29.909508 " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f60-line2d_2"> <path d="M 449.232787 29.909508 L 653.405902 29.909508 " clip-path="url(#f60-p8e14e8d0e5)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f60-text_1"> <!-- Editor --> <g style="fill: var(--fig-ink)" transform="translate(39.866975 72.024932) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Bold-28" d="M 300 0 L 300 378 L 897 378 L 897 4288 L 300 4288 L 300 4666 L 4494 4666 L 4494 3566 L 4063 3566 L 4063 4238 L 2100 4238 L 2100 2741 L 3322 2741 L 3322 3334 L 3750 3334 L 3750 1722 L 3322 1722 L 3322 2316 L 2100 2316 L 2100 428 L 4122 428 L 4122 1100 L 4550 1100 L 4550 0 L 300 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-47" d="M 2747 1497 L 2747 1825 Q 2747 2406 2597 2665 Q 2447 2925 2119 2925 Q 1775 2925 1636 2651 Q 1497 2378 1497 1663 Q 1497 947 1637 672 Q 1778 397 2119 397 Q 2447 397 2597 656 Q 2747 916 2747 1497 z M 3853 378 L 4325 378 L 4325 0 L 2747 0 L 2747 422 Q 2606 163 2367 36 Q 2128 -91 1778 -91 Q 1072 -91 667 378 Q 263 847 263 1663 Q 263 2481 667 2947 Q 1072 3413 1778 3413 Q 2128 3413 2367 3286 Q 2606 3159 2747 2900 L 2747 4488 L 2272 4488 L 2272 4863 L 3853 4863 L 3853 378 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-4c" d="M 588 4263 Q 588 4516 763 4689 Q 938 4863 1191 4863 Q 1438 4863 1611 4689 Q 1784 4516 1784 4263 Q 1784 4016 1611 3842 Q 1438 3669 1191 3669 Q 938 3669 763 3841 Q 588 4013 588 4263 z M 1797 378 L 2272 378 L 2272 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 378 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-57" d="M 634 2944 L 153 2944 L 153 3322 L 634 3322 L 634 4353 L 1741 4353 L 1741 3322 L 2663 3322 L 2663 2944 L 1741 2944 L 1741 909 Q 1741 475 1809 369 Q 1878 263 2059 263 Q 2259 263 2356 397 Q 2453 531 2459 813 L 2925 813 Q 2897 313 2651 111 Q 2406 -91 1806 -91 Q 1122 -91 878 123 Q 634 338 634 909 L 634 2944 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-52" d="M 2138 263 Q 2488 263 2630 563 Q 2772 863 2772 1663 Q 2772 2463 2631 2761 Q 2491 3059 2138 3059 Q 1784 3059 1640 2757 Q 1497 2456 1497 1663 Q 1497 869 1640 566 Q 1784 263 2138 263 z M 2138 -91 Q 1259 -91 761 376 Q 263 844 263 1663 Q 263 2484 761 2948 Q 1259 3413 2138 3413 Q 3019 3413 3516 2948 Q 4013 2484 4013 1663 Q 4013 844 3514 376 Q 3016 -91 2138 -91 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-55" d="M 3438 3359 L 3438 2369 L 3084 2369 Q 3066 2634 2941 2764 Q 2816 2894 2578 2894 Q 2216 2894 2006 2575 Q 1797 2256 1797 1691 L 1797 378 L 2400 378 L 2400 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 184 2944 L 184 3322 L 1797 3322 L 1797 2731 Q 1959 3078 2226 3245 Q 2494 3413 2881 3413 Q 2978 3413 3117 3398 Q 3256 3384 3438 3359 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Bold-28"/> <use xlink:href="#f60-DejaVuSerif-Bold-47" transform="translate(76.21875 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-4c" transform="translate(146.140625 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-57" transform="translate(184.125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-52" transform="translate(230.3125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-55" transform="translate(297.015625 0)"/> </g> </g> <g id="f60-text_2"> <!-- ciao.c --> <g style="fill: var(--fig-axis)" transform="translate(42.659944 120.323558) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-11" d="M 664 29 Q 569 150 603 325 Q 638 500 780 622 Q 922 744 1100 744 Q 1272 744 1370 622 Q 1469 500 1434 325 Q 1400 153 1254 31 Q 1109 -91 938 -91 Q 759 -91 664 29 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-46"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(56 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-44" transform="translate(87.984375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(147.609375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-11" transform="translate(206.0625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(237.84375 0)"/> </g> </g> <g id="f60-patch_8"> <path d="M 105.651148 69.426885 Q 112.237377 69.426885 116.587539 69.426885 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 111.787539 67.026885 L 116.587539 69.426885 L 111.787539 71.826885 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_3"> <!-- Preprocessore --> <g style="fill: var(--fig-steel)" transform="translate(127.074967 72.024541) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Bold-33" d="M 300 0 L 300 378 L 897 378 L 897 4288 L 300 4288 L 300 4666 L 2956 4666 Q 3734 4666 4193 4295 Q 4653 3925 4653 3303 Q 4653 2678 4192 2304 Q 3731 1931 2956 1931 L 2100 1931 L 2100 378 L 2853 378 L 2853 0 L 300 0 z M 2100 2309 L 2450 2309 Q 2856 2309 3098 2579 Q 3341 2850 3341 3303 Q 3341 3753 3100 4020 Q 2859 4288 2450 4288 L 2100 4288 L 2100 2309 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-48" d="M 2566 1875 Q 2566 2531 2444 2795 Q 2322 3059 2028 3059 Q 1744 3059 1620 2800 Q 1497 2541 1497 1931 L 1497 1875 L 2566 1875 z M 3781 1503 L 1497 1503 L 1497 1478 Q 1497 834 1690 548 Q 1884 263 2316 263 Q 2675 263 2897 453 Q 3119 644 3181 1006 L 3700 1006 Q 3566 441 3166 175 Q 2766 -91 2047 -91 Q 1184 -91 723 364 Q 263 819 263 1663 Q 263 2488 734 2950 Q 1206 3413 2047 3413 Q 2872 3413 3312 2927 Q 3753 2441 3781 1503 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-53" d="M 1728 1825 L 1728 1497 Q 1728 916 1876 656 Q 2025 397 2356 397 Q 2697 397 2836 672 Q 2975 947 2975 1663 Q 2975 2378 2836 2651 Q 2697 2925 2356 2925 Q 2025 2925 1876 2665 Q 1728 2406 1728 1825 z M 622 2944 L 147 2944 L 147 3322 L 1728 3322 L 1728 2900 Q 1869 3159 2106 3286 Q 2344 3413 2694 3413 Q 3403 3413 3811 2945 Q 4219 2478 4219 1663 Q 4219 847 3811 378 Q 3403 -91 2694 -91 Q 2344 -91 2106 36 Q 1869 163 1728 422 L 1728 -953 L 2241 -953 L 2241 -1331 L 147 -1331 L 147 -953 L 622 -953 L 622 2944 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-46" d="M 3609 1038 Q 3491 469 3123 189 Q 2756 -91 2125 -91 Q 1238 -91 750 368 Q 263 828 263 1663 Q 263 2488 744 2950 Q 1225 3413 2081 3413 Q 2428 3413 2781 3347 Q 3134 3281 3500 3150 L 3500 2228 L 3150 2228 Q 3100 2650 2903 2854 Q 2706 3059 2350 3059 Q 1888 3059 1692 2746 Q 1497 2434 1497 1663 Q 1497 909 1687 586 Q 1878 263 2309 263 Q 2644 263 2845 463 Q 3047 663 3091 1038 L 3609 1038 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-56" d="M 300 97 L 300 1025 L 653 1025 Q 697 653 931 458 Q 1166 263 1569 263 Q 1906 263 2086 380 Q 2266 497 2266 716 Q 2266 916 2152 1025 Q 2038 1134 1709 1216 L 1253 1331 Q 738 1459 506 1698 Q 275 1938 275 2344 Q 275 2884 650 3148 Q 1025 3413 1806 3413 Q 2100 3413 2433 3364 Q 2766 3316 3169 3213 L 3169 2375 L 2816 2375 Q 2788 2716 2573 2887 Q 2359 3059 1959 3059 Q 1622 3059 1448 2951 Q 1275 2844 1275 2638 Q 1275 2469 1375 2372 Q 1475 2275 1734 2209 L 2188 2094 Q 2841 1928 3091 1684 Q 3341 1441 3341 1006 Q 3341 444 2939 176 Q 2538 -91 1691 -91 Q 1381 -91 1034 -44 Q 688 3 300 97 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Bold-33"/> <use xlink:href="#f60-DejaVuSerif-Bold-55" transform="translate(75.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-48" transform="translate(127.890625 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-53" transform="translate(191.515625 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-55" transform="translate(261.4375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-52" transform="translate(314.125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-46" transform="translate(380.828125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-48" transform="translate(441.71875 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-56" transform="translate(505.34375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-56" transform="translate(561.640625 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-52" transform="translate(617.9375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-55" transform="translate(684.640625 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-48" transform="translate(737.328125 0)"/> </g> </g> <g id="f60-text_4"> <!-- #include --> <g style="fill: var(--fig-axis)" transform="translate(144.33356 114.322972) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-6" d="M 3256 2816 L 2375 2816 L 2113 1772 L 3003 1772 L 3256 2816 z M 2816 4594 L 2497 3297 L 3378 3297 L 3700 4594 L 4238 4594 L 3909 3297 L 4872 3297 L 4872 2816 L 3788 2816 L 3531 1772 L 4513 1772 L 4513 1294 L 3413 1294 L 3091 0 L 2553 0 L 2881 1294 L 1997 1294 L 1672 0 L 1141 0 L 1459 1294 L 494 1294 L 494 1772 L 1581 1772 L 1838 2816 L 850 2816 L 850 3297 L 1959 3297 L 2284 4594 L 2816 4594 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-6"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(83.796875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-51" transform="translate(115.78125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(180.1875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4f" transform="translate(236.1875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-58" transform="translate(268.171875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-47" transform="translate(332.578125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(396.59375 0)"/> </g> <!-- espansi --> <g style="fill: var(--fig-axis)" transform="translate(148.030435 126.324925) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-48"/> <use xlink:href="#f60-DejaVuSerif-Italic-56" transform="translate(59.1875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-53" transform="translate(110.5 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-44" transform="translate(174.515625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-51" transform="translate(234.140625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-56" transform="translate(298.546875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(349.859375 0)"/> </g> </g> <g id="f60-patch_9"> <path d="M 215.421639 69.426885 Q 222.007869 69.426885 226.35803 69.426885 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 221.55803 67.026885 L 226.35803 69.426885 L 221.55803 71.826885 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_5"> <!-- Compilatore --> <g style="fill: var(--fig-steel)" transform="translate(242.293115 72.024932) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Bold-26" d="M 4769 1331 Q 4584 609 4106 259 Q 3628 -91 2822 -91 Q 1641 -91 955 561 Q 269 1213 269 2328 Q 269 3447 955 4098 Q 1641 4750 2822 4750 Q 3238 4750 3688 4650 Q 4138 4550 4641 4347 L 4641 3200 L 4244 3200 Q 4122 3788 3800 4080 Q 3478 4372 2950 4372 Q 2269 4372 1937 3870 Q 1606 3369 1606 2328 Q 1606 1288 1937 788 Q 2269 288 2956 288 Q 3422 288 3717 547 Q 4013 806 4147 1331 L 4769 1331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-50" d="M 3884 2778 Q 4116 3109 4384 3261 Q 4653 3413 5013 3413 Q 5584 3413 5867 3089 Q 6150 2766 6150 2113 L 6150 378 L 6625 378 L 6625 0 L 4647 0 L 4647 378 L 5044 378 L 5044 1947 Q 5044 2569 4948 2731 Q 4853 2894 4594 2894 Q 4300 2894 4137 2667 Q 3975 2441 3975 2022 L 3975 378 L 4372 378 L 4372 0 L 2472 0 L 2472 378 L 2869 378 L 2869 1947 Q 2869 2569 2772 2731 Q 2675 2894 2419 2894 Q 2122 2894 1959 2667 Q 1797 2441 1797 2022 L 1797 378 L 2194 378 L 2194 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 2853 Q 1991 3144 2241 3278 Q 2491 3413 2834 3413 Q 3241 3413 3494 3258 Q 3747 3103 3884 2778 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-4f" d="M 1797 378 L 2272 378 L 2272 0 L 219 0 L 219 378 L 691 378 L 691 4488 L 219 4488 L 219 4863 L 1797 4863 L 1797 378 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-44" d="M 3525 2041 L 3525 378 L 4000 378 L 4000 0 L 2419 0 L 2419 422 Q 2200 159 1931 34 Q 1663 -91 1319 -91 Q 809 -91 536 182 Q 263 456 263 966 Q 263 1525 655 1803 Q 1047 2081 1838 2081 L 2419 2081 L 2419 2278 Q 2419 2681 2228 2873 Q 2038 3066 1638 3066 Q 1306 3066 1126 2930 Q 947 2794 872 2484 L 519 2484 L 519 3200 Q 816 3306 1134 3359 Q 1453 3413 1806 3413 Q 2697 3413 3111 3081 Q 3525 2750 3525 2041 z M 2419 1044 L 2419 1709 L 2003 1709 Q 1694 1709 1528 1540 Q 1363 1372 1363 1056 Q 1363 741 1483 584 Q 1603 428 1850 428 Q 2106 428 2262 597 Q 2419 766 2419 1044 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Bold-26"/> <use xlink:href="#f60-DejaVuSerif-Bold-52" transform="translate(79.59375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-50" transform="translate(146.296875 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-53" transform="translate(252.109375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-4c" transform="translate(322.03125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-4f" transform="translate(360.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-44" transform="translate(398 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-57" transform="translate(462.796875 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-52" transform="translate(508.984375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-55" transform="translate(575.6875 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-48" transform="translate(628.375 0)"/> </g> </g> <g id="f60-text_6"> <!-- ciao.o --> <g style="fill: var(--fig-axis)" transform="translate(261.990771 114.322191) scale(0.1 -0.1)"> <use xlink:href="#f60-DejaVuSerif-Italic-46"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(56 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-44" transform="translate(87.984375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(147.609375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-11" transform="translate(206.0625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(237.84375 0)"/> </g> <!-- codice oggetto --> <g style="fill: var(--fig-axis)" transform="translate(239.534521 126.324925) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-4a" d="M 3822 3322 L 3188 72 Q 3044 -672 2581 -1031 Q 2078 -1422 1381 -1422 Q 1053 -1422 765 -1362 Q 478 -1303 225 -1184 L 363 -488 L 663 -488 Q 653 -813 834 -963 Q 1016 -1113 1406 -1113 Q 1913 -1113 2203 -825 Q 2494 -544 2613 72 L 2700 519 Q 2472 206 2181 57 Q 1891 -91 1525 -91 Q 975 -91 697 281 Q 522 516 503 841 Q 491 1031 534 1256 Q 750 2359 1516 2928 Q 2169 3409 2931 3413 Q 3631 3416 3822 3322 z M 3184 2988 Q 3181 3094 2844 3094 Q 2234 3094 1775 2625 Q 1316 2153 1147 1297 Q 1100 1044 1113 853 Q 1125 659 1203 528 Q 1356 269 1756 269 Q 2194 269 2484 583 Q 2775 897 2891 1497 L 2953 1825 L 3184 2988 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-46"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(56 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-47" transform="translate(116.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(180.21875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(212.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(268.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(327.390625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(359.171875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4a" transform="translate(419.375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4a" transform="translate(483.390625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(547.40625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-57" transform="translate(606.59375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-57" transform="translate(646.78125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(686.96875 0)"/> </g> </g> <g id="f60-patch_10"> <path d="M 325.192131 69.426885 Q 331.778361 69.426885 336.128522 69.426885 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 331.328522 67.026885 L 336.128522 69.426885 L 331.328522 71.826885 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_7"> <!-- Linker --> <g style="fill: var(--fig-accent)" transform="translate(368.333919 72.024932) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Bold-2f" d="M 300 0 L 300 378 L 897 378 L 897 4288 L 300 4288 L 300 4666 L 2700 4666 L 2700 4288 L 2100 4288 L 2100 428 L 3938 428 L 3938 1166 L 4359 1166 L 4359 0 L 300 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-51" d="M 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 2853 Q 1997 3150 2253 3281 Q 2509 3413 2900 3413 Q 3459 3413 3745 3083 Q 4031 2753 4031 2113 L 4031 378 L 4506 378 L 4506 0 L 2522 0 L 2522 378 L 2925 378 L 2925 2144 Q 2925 2566 2817 2730 Q 2709 2894 2444 2894 Q 2109 2894 1953 2648 Q 1797 2403 1797 1869 L 1797 378 L 2203 378 L 2203 0 L 219 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Bold-4e" d="M 2216 0 L 219 0 L 219 378 L 691 378 L 691 4488 L 219 4488 L 219 4863 L 1797 4863 L 1797 1741 L 3138 2944 L 2741 2944 L 2741 3322 L 4256 3322 L 4256 2944 L 3641 2944 L 2784 2175 L 4184 378 L 4544 378 L 4544 0 L 2638 0 L 2638 378 L 3028 378 L 2106 1563 L 1797 1288 L 1797 378 L 2216 378 L 2216 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Bold-2f"/> <use xlink:href="#f60-DejaVuSerif-Bold-4c" transform="translate(70.3125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-51" transform="translate(108.296875 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-4e" transform="translate(181 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-48" transform="translate(250.28125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-55" transform="translate(313.90625 0)"/> </g> </g> <g id="f60-text_8"> <!-- eseguibile --> <g style="fill: var(--fig-axis)" transform="translate(360.800325 114.322581) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-48"/> <use xlink:href="#f60-DejaVuSerif-Italic-56" transform="translate(59.1875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(110.5 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4a" transform="translate(169.6875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-58" transform="translate(233.703125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(298.109375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-45" transform="translate(330.09375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(394.109375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4f" transform="translate(426.09375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(458.078125 0)"/> </g> <!-- + librerie --> <g style="fill: var(--fig-axis)" transform="translate(362.187825 126.325316) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-e"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(83.796875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4f" transform="translate(115.578125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(147.5625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-45" transform="translate(179.546875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-55" transform="translate(243.5625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(291.359375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-55" transform="translate(350.546875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(398.34375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(430.328125 0)"/> </g> </g> <g id="f60-patch_11"> <path d="M 434.962623 69.426885 Q 441.548852 69.426885 445.899014 69.426885 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 441.099014 67.026885 L 445.899014 69.426885 L 441.099014 71.826885 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_9"> <!-- Loader --> <g style="fill: var(--fig-ink)" transform="translate(477.031755 72.024932) scale(0.1 -0.1)"> <use xlink:href="#f60-DejaVuSerif-Bold-2f"/> <use xlink:href="#f60-DejaVuSerif-Bold-52" transform="translate(70.3125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-44" transform="translate(137.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-47" transform="translate(201.8125 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-48" transform="translate(271.734375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-55" transform="translate(335.359375 0)"/> </g> </g> <g id="f60-text_10"> <!-- programma --> <g style="fill: var(--fig-axis)" transform="translate(466.79738 114.322581) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-50" d="M 3503 2675 Q 3741 3041 4034 3227 Q 4328 3413 4672 3413 Q 5194 3413 5388 3088 Q 5503 2894 5503 2578 Q 5503 2372 5453 2113 L 5106 331 L 5625 331 L 5563 0 L 4469 0 L 4866 2047 Q 4913 2291 4913 2466 Q 4913 2659 4856 2772 Q 4750 2988 4403 2988 Q 4019 2988 3761 2697 Q 3503 2406 3394 1850 L 3034 0 L 2459 0 L 2863 2069 Q 2906 2303 2906 2472 Q 2906 2666 2850 2775 Q 2741 2988 2394 2988 Q 2009 2988 1751 2697 Q 1494 2406 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1778 3063 2059 3238 Q 2341 3413 2653 3413 Q 3041 3413 3262 3220 Q 3484 3028 3503 2675 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-53"/> <use xlink:href="#f60-DejaVuSerif-Italic-55" transform="translate(64.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(111.8125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4a" transform="translate(172.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-55" transform="translate(236.03125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-44" transform="translate(283.828125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-50" transform="translate(343.453125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-50" transform="translate(438.28125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-44" transform="translate(533.109375 0)"/> </g> <!-- in RAM --> <g style="fill: var(--fig-axis)" transform="translate(477.530192 126.324534) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-35" d="M 3066 2316 Q 3272 2256 3403 2114 Q 3534 1972 3609 1716 L 4016 331 L 4584 331 L 4522 0 L 3422 0 L 2981 1484 Q 2856 1916 2706 2042 Q 2556 2169 2250 2169 L 1553 2169 L 1194 331 L 1853 331 L 1791 0 L -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3175 4666 Q 3856 4666 4164 4341 Q 4472 4016 4356 3419 Q 4262 2938 3937 2661 Q 3612 2384 3066 2316 z M 1619 2503 L 2541 2503 Q 3012 2503 3279 2726 Q 3547 2950 3639 3419 Q 3731 3888 3548 4109 Q 3366 4331 2894 4331 L 1972 4331 L 1619 2503 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-30" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 709 4331 L 775 4666 L 2134 4666 L 3125 1344 L 5409 4666 L 6684 4666 L 6619 4331 L 5997 4331 L 5222 331 L 5816 331 L 5753 0 L 3928 0 L 3991 331 L 4584 331 L 5287 3938 L 3053 684 L 2612 684 L 1647 3938 L 944 331 L 1537 331 L 1475 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-4c"/> <use xlink:href="#f60-DejaVuSerif-Italic-51" transform="translate(31.984375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(96.390625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-35" transform="translate(128.171875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-24" transform="translate(203.46875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-30" transform="translate(275.6875 0)"/> </g> </g> <g id="f60-patch_12"> <path d="M 544.733115 69.426885 Q 551.319344 69.426885 555.669506 69.426885 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 550.869506 67.026885 L 555.669506 69.426885 L 550.869506 71.826885 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_11"> <!-- CPU --> <g style="fill: var(--fig-accent)" transform="translate(594.10459 72.024541) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Bold-38" d="M 813 4288 L 219 4288 L 219 4666 L 2619 4666 L 2619 4288 L 2022 4288 L 2022 1953 Q 2022 1081 2294 732 Q 2566 384 3225 384 Q 3869 384 4139 736 Q 4409 1088 4409 1953 L 4409 4288 L 3816 4288 L 3816 4666 L 5441 4666 L 5441 4288 L 4844 4288 L 4844 1888 Q 4844 819 4381 364 Q 3919 -91 2828 -91 Q 1744 -91 1278 368 Q 813 828 813 1894 L 813 4288 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Bold-26"/> <use xlink:href="#f60-DejaVuSerif-Bold-33" transform="translate(79.59375 0)"/> <use xlink:href="#f60-DejaVuSerif-Bold-38" transform="translate(154.796875 0)"/> </g> </g> <g id="f60-text_12"> <!-- fetch-decode- --> <g style="fill: var(--fig-axis)" transform="translate(571.85459 114.322972) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-49" d="M 3191 4078 L 2887 4078 Q 2900 4144 2900 4203 Q 2900 4347 2825 4434 Q 2719 4556 2472 4556 Q 2150 4556 1984 4379 Q 1819 4203 1731 3750 L 1647 3322 L 2575 3322 L 2509 2988 L 1581 2988 L 962 -206 Q 853 -763 509 -1047 Q 166 -1331 -394 -1331 L -356 -1025 Q -28 -1025 131 -850 Q 297 -663 387 -206 L 1006 2988 L 456 2988 L 522 3322 L 1072 3322 L 1153 3738 Q 1262 4297 1606 4578 Q 1950 4863 2509 4863 Q 2719 4863 2920 4825 Q 3122 4788 3316 4709 L 3191 4078 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-4b" d="M 309 0 L 1191 4531 L 641 4531 L 703 4863 L 1828 4863 L 1416 2731 Q 1641 3069 1928 3241 Q 2216 3413 2553 3413 Q 3103 3413 3300 3097 Q 3422 2906 3422 2588 Q 3422 2378 3369 2113 L 3022 331 L 3534 331 L 3472 0 L 2381 0 L 2756 1931 Q 2819 2253 2819 2469 Q 2819 2659 2769 2763 Q 2666 2988 2284 2988 Q 1884 2988 1617 2697 Q 1350 2406 1244 1850 L 884 0 L 309 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-10" d="M 328 1959 L 1928 1959 L 1834 1472 L 234 1472 L 328 1959 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-49"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(37.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-57" transform="translate(96.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(136.390625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4b" transform="translate(192.390625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-10" transform="translate(256.796875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-47" transform="translate(290.59375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(354.609375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(413.796875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(469.796875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-47" transform="translate(530 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(594.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-10" transform="translate(653.203125 0)"/> </g> <!-- execute --> <g style="fill: var(--fig-axis)" transform="translate(586.477246 126.324925) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-48"/> <use xlink:href="#f60-DejaVuSerif-Italic-5b" transform="translate(59.1875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(115.578125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(174.765625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-58" transform="translate(230.765625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-57" transform="translate(295.171875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(335.359375 0)"/> </g> </g> <g id="f60-text_13"> <!-- file su disco --> <g style="fill: var(--fig-axis)" transform="translate(191.974275 21.127869) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-cf0" d="M 3347 4019 L 3053 4022 Q 3044 4291 2853 4423 Q 2663 4556 2278 4556 Q 1800 4556 1578 4334 Q 1356 4113 1356 3634 L 1356 3322 L 3578 3322 L 3578 331 L 4122 331 L 4122 0 L 2450 0 L 2450 331 L 3003 331 L 3003 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4238 1147 4550 Q 1513 4863 2228 4863 Q 2500 4863 2784 4822 Q 3069 4781 3347 4697 L 3347 4019 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-cf0"/> <use xlink:href="#f60-DejaVuSerif-4f" transform="translate(66.703125 0)"/> <use xlink:href="#f60-DejaVuSerif-48" transform="translate(98.6875 0)"/> <use xlink:href="#f60-DejaVuSerif-3" transform="translate(157.875 0)"/> <use xlink:href="#f60-DejaVuSerif-56" transform="translate(189.65625 0)"/> <use xlink:href="#f60-DejaVuSerif-58" transform="translate(240.96875 0)"/> <use xlink:href="#f60-DejaVuSerif-3" transform="translate(305.375 0)"/> <use xlink:href="#f60-DejaVuSerif-47" transform="translate(337.15625 0)"/> <use xlink:href="#f60-DejaVuSerif-4c" transform="translate(401.171875 0)"/> <use xlink:href="#f60-DejaVuSerif-56" transform="translate(433.15625 0)"/> <use xlink:href="#f60-DejaVuSerif-46" transform="translate(484.46875 0)"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(540.46875 0)"/> </g> </g> <g id="f60-text_14"> <!-- memoria centrale --> <g style="fill: var(--fig-axis)" transform="translate(506.388876 21.127869) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-50"/> <use xlink:href="#f60-DejaVuSerif-48" transform="translate(94.828125 0)"/> <use xlink:href="#f60-DejaVuSerif-50" transform="translate(154.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(248.84375 0)"/> <use xlink:href="#f60-DejaVuSerif-55" transform="translate(309.046875 0)"/> <use xlink:href="#f60-DejaVuSerif-4c" transform="translate(356.84375 0)"/> <use xlink:href="#f60-DejaVuSerif-44" transform="translate(388.828125 0)"/> <use xlink:href="#f60-DejaVuSerif-3" transform="translate(448.453125 0)"/> <use xlink:href="#f60-DejaVuSerif-46" transform="translate(480.234375 0)"/> <use xlink:href="#f60-DejaVuSerif-48" transform="translate(536.234375 0)"/> <use xlink:href="#f60-DejaVuSerif-51" transform="translate(595.421875 0)"/> <use xlink:href="#f60-DejaVuSerif-57" transform="translate(659.828125 0)"/> <use xlink:href="#f60-DejaVuSerif-55" transform="translate(700.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-44" transform="translate(747.8125 0)"/> <use xlink:href="#f60-DejaVuSerif-4f" transform="translate(807.4375 0)"/> <use xlink:href="#f60-DejaVuSerif-48" transform="translate(839.421875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f60-p8e14e8d0e5"> <rect x="5.76" y="5.76" width="669.6" height="131.72459"/> </clipPath> </defs> </svg></figure>

| Fase | Chi | Cosa succede |
| --- | --- | --- |
| **Edit** | editor | scrivi il programma e lo salvi su disco (`ciao.c`) |
| **Preprocess** | preprocessore | elabora le direttive che iniziano con `#`: per esempio `#include <stdio.h>` viene sostituito dal contenuto del file. Il risultato è un sorgente "espanso" |
| **Compile** | compilatore | traduce il sorgente in **codice oggetto** (`ciao.o`) e lo salva su disco. Qui escono gli errori di sintassi |
| **Link** | linker | collega il tuo codice oggetto con altro codice già disponibile, le **librerie** (per esempio quella che contiene `printf`), e produce l'eseguibile |
| **Load** | loader | carica l'eseguibile dal disco nella memoria centrale |
| **Execute** | CPU | prende un'istruzione alla volta e la esegue, eventualmente scrivendo nuovi valori in memoria |

Su Linux con gcc un solo comando fa preprocessore, compilazione (con l'assemblatore, che le slide non nominano a parte) e link. L'editing lo fai tu prima, il caricamento e l'esecuzione partono quando lanci il programma:

```bash
gcc -std=c11 -Wall -Wextra -Wpedantic ciao.c -o ciao
./ciao
```

`-Wall -Wextra -Wpedantic` accendono gli avvisi (warning): il compilatore segnala anche cose che si compilano ma sono probabilmente sbagliate.

### Il primo programma

Le slide propongono di provarlo su [onlinegdb.com](https://www.onlinegdb.com) scegliendo il C (<span class="src">slide 10</span>):

```
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Hello World!\n");
}
```

| Pezzo | Significato |
| --- | --- |
| `#include <stdio.h>` | direttiva per il preprocessore: include la libreria di input/output standard, dove sono dichiarate `printf` e `scanf` |
| `int main(int argc, char *argv[])` | intestazione: `main` è il punto da cui parte l'esecuzione. `argc` e `argv` sono gli argomenti passati da riga di comando |
| `{ ... }` | il corpo: la sequenza di istruzioni |
| `printf("Hello World!\n");` | stampa la stringa sullo standard output. `\n` è il carattere "a capo" |
| `;` | chiude ogni istruzione |

Compilato con `-Wextra`, gcc avvisa che `argc` e `argv` non sono usati. Quando non servono si può scrivere l'intestazione senza parametri. `return 0;` dice al sistema operativo che il programma è terminato bene. Dal C99 arrivare alla `}` finale di `main` senza `return` equivale a `return 0;`, quindi il programma della slide è corretto; scriverlo esplicitamente resta buona pratica, ed è quello che fanno i programmi del prof nel deck 3.2:

```c
#include <stdio.h>

int main(void)
{
    printf("Hello World!\n");
    return 0;
}
```

**Esercizio dalle slide** (<span class="src">slide 28</span>): togli pezzi al programma, per esempio il `;` o il `\n` nella riga di `printf`, e leggi i messaggi di errore o il cambiamento nell'output.

### Standard I/O e memoria

La macchina astratta C ha un'unità centrale che esegue il programma, una memoria centrale e due periferiche standard, tutte sul bus (<span class="src">slide 30-33</span>).

```
                        bus di sistema
  ============================================================
       |                 |                |              |
  +---------+       +---------+     +----------+   +----------+
  |  unità  |   x ->|  cella  |     | [][][][] |   | [][][][] |
  | centrale|   a ->|  cella  |     | standard |   | standard |
  +---------+ alfa->|  cella  |     |  input   |   |  output  |
                    |   ...   |     | tastiera |   |  video   |
                    +---------+     +----------+   +----------+
                  memoria centrale
```

**Standard input e standard output.** Il C astrae le periferiche. Ogni programma ha due periferiche standard:
- **standard input** (`stdin`), di solito la tastiera;
- **standard output** (`stdout`), di solito lo schermo.

Si possono pensare come sequenze di celle, ognuna con un dato, da cui leggere (input) o in cui scrivere (output).

**Memoria.** La memoria della macchina astratta è divisa in celle elementari, le **variabili**. Ogni cella contiene un dato usato dal programma. Si guarda solo la memoria **dati**: dove sta il codice del programma per ora non interessa.

I dati possono essere:
- numeri;
- caratteri;
- **stringhe**, cioè successioni finite di caratteri in celle consecutive;
- composizioni arbitrarie delle precedenti.

Come viene gestita la memoria per ora non conta. Conta **come ci si riferisce** a queste celle: con gli identificatori.

### Lessico

**Case sensitive.** Il C distingue maiuscole e minuscole (<span class="src">slide 34-35</span>): `Var1`, `var1` e `VAR1` sono tre nomi diversi.

**Spazi.** Spazio, tab e a capo (newline) vengono ignorati, tranne dentro una stringa. Servono solo a rendere il codice leggibile. Queste due righe sono lo stesso programma per il compilatore:

```c
x=3;myVar=5;
```

```c
x = 3;
myVar = 5;
```

Ma `"ciao mondo"` e `"ciaomondo"` sono stringhe diverse.

**Tabella ASCII.** I caratteri sono memorizzati come numeri secondo la codifica **ASCII**: ogni carattere ha un codice. Il primo carattere della tabella, codice 0, è **NUL**, un carattere speciale che non si stampa.

**Commenti.** Testo ignorato dal compilatore, per chi legge il codice.
- `/* ... */`: commento a blocco, può occupare più righe;
- `// ...`: commento in linea, finisce a fine riga.

**Identificatori** (<span class="src">slide 37</span>, <span class="src">slide 48</span>). Sono i nomi che il programmatore dà a variabili, funzioni e altri oggetti. Regole:
1. composti da lettere, cifre e underscore `_`;
2. il primo carattere è una lettera o `_`, mai una cifra;
3. diversi da tutte le parole chiave.

| Validi | Non validi |
| --- | --- |
| `a`, `x`, `alfa`, `a1`, `xy23` | `1a` (inizia con una cifra) |
| `MyFriend`, `DopoDomani` | `a b` (contiene uno spazio) |
| `velocita_massima`, `_velocita` | `int` (parola chiave) |
| | `dopo-domani` (il `-` è un operatore) |

**Parole chiave** (keyword). Parole riservate del linguaggio, con un significato fissato a priori: non si possono usare come identificatori anche se lessicalmente andrebbero bene. L'ANSI C del 1989 ne ha 32 (<span class="src">slide 38</span>):

```
auto      break     case      char      const     continue  default   do
double    else      enum      extern    float     for       goto      if
int       long      register  return    short     signed    sizeof    static
struct    switch    typedef   union     unsigned  void      volatile  while
```

Il numero 32 vale per il C89. Gli standard successivi ne hanno aggiunte: il C99 `inline`, `restrict`, `_Bool`, `_Complex`, `_Imaginary`; il C11 `_Alignas`, `_Alignof`, `_Atomic`, `_Generic`, `_Noreturn`, `_Static_assert`, `_Thread_local`; il C23 fra le altre `bool`, `true`, `false`, `nullptr`. Alcuni compilatori aggiungono estensioni proprie. Se usi una keyword come nome, l'editor o il compilatore segnalano errore.

### Struttura di un programma

(<span class="src">slide 40</span>)

```
#include <stdio.h>                      direttive per il preprocessore
                                        
int main(int argc, char *argv[])        intestazione
{                                       
    istruzione;                         sequenza di istruzioni
    istruzione;                         fra { e }, ognuna chiusa da ;
    ...
}
```

Un programma C è composto da:
- un'**intestazione**, con l'identificatore predefinito `main` seguito da `(int argc, char *argv[])`;
- una **sequenza di istruzioni** racchiusa fra `{` e `}`.

Le istruzioni sono le frasi del linguaggio, e ognuna termina con `;`.

### Istruzioni di input/output

Senza input e output un programma sarebbe inutile per l'utente: non potrebbe ricevere dati né mostrare risultati (<span class="src">slide 41-42</span>).

| Istruzione | Direzione | Forma nelle slide |
| --- | --- | --- |
| `scanf` | legge dallo **standard input** e mette il dato in una variabile | `scanf(<variabile>)` |
| `printf` | scrive sullo **standard output** il valore di un'espressione | `printf(<espressione>)` |

Entrambe stanno nella libreria `stdio.h`, che va inclusa con `#include <stdio.h>`.

La forma delle slide (`scanf(&x);`, `printf((a-z)/10);`) è **semplificata** per mostrare l'idea. In C vero serve anche una **stringa di formato** che dice il tipo del dato: `%d` per un intero.

```c
#include <stdio.h>

int main(void)
{
    int a;
    int z;

    if (scanf("%d", &a) != 1 || scanf("%d", &z) != 1) {
        printf("servono due numeri interi\n");
        return 1;
    }
    printf("%d\n", (a - z) / 10);
    return 0;
}
```

Con input `57` e `7` stampa `5`: $(57 - 7) / 10 = 5$.

**Il valore di ritorno di `scanf`.** `scanf` restituisce quanti valori è riuscita a leggere e assegnare: 1 se ha letto il numero, 0 se l'input non è un numero (per esempio `ciao`), `EOF` se l'input è finito. Se non lo controlli e l'input è sbagliato, la variabile resta com'era, cioè senza valore, e il programma va avanti con quella. Con input `ciao` il programma sopra stampa il messaggio d'errore invece di un numero a caso. Il `||` valuta la seconda `scanf` solo se la prima è andata bene ([Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/), lazy evaluation).

Il `&` davanti alla variabile in `scanf` vuol dire "l'**indirizzo** di". `scanf` deve sapere **dove** scrivere il dato letto, non quanto vale la variabile adesso. È il concetto di l-value qui sotto. `printf` invece ha bisogno solo del **valore**, quindi niente `&`.

### Variabili

**Variabile in C e in matematica** (<span class="src">slide 43-46</span>). In matematica una variabile è un simbolo per un valore, e `x = x + 1` sarebbe una contraddizione. In un linguaggio di programmazione una variabile è associata a una **cella di memoria**: un contenitore il cui valore può **cambiare** durante l'esecuzione. `x = x + 1` vuol dire "prendi quello che c'è in $x$, aggiungi 1, rimettilo in $x$".

Le variabili sono denotate da **identificatori**, che servono a distinguerle. Il nome individua l'indirizzo della cella. Per evitare ambiguità è vietato usare:
- lo stesso identificatore per variabili diverse (non sapremmo più quale si intende);
- identificatori diversi per la stessa variabile.

<figure class="fig"><svg role="img" aria-label="Memoria e variabili" xmlns:xlink="http://www.w3.org/1999/xlink" width="427.32pt" height="288.72pt" viewBox="0 0 427.32 288.72" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f61-figure_1"> <g id="f61-patch_1"> <path d="M 0 288.72 L 427.32 288.72 L 427.32 0 L 0 0 L 0 288.72 z " style="fill: none"/> </g> <g id="f61-axes_1"> <g id="f61-patch_2"> <path d="M 194.256 72.288 L 288.504 72.288 L 288.504 33.48 L 194.256 33.48 L 194.256 72.288 z " clip-path="url(#f61-p45f43b9901)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="f61-patch_3"> <path d="M 194.256 111.096 L 288.504 111.096 L 288.504 72.288 L 194.256 72.288 L 194.256 111.096 z " clip-path="url(#f61-p45f43b9901)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="f61-patch_4"> <path d="M 194.256 149.904 L 288.504 149.904 L 288.504 111.096 L 194.256 111.096 L 194.256 149.904 z " clip-path="url(#f61-p45f43b9901)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="f61-patch_5"> <path d="M 194.256 188.712 L 288.504 188.712 L 288.504 149.904 L 194.256 149.904 L 194.256 188.712 z " clip-path="url(#f61-p45f43b9901)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="f61-patch_6"> <path d="M 194.256 227.52 L 288.504 227.52 L 288.504 188.712 L 194.256 188.712 L 194.256 227.52 z " clip-path="url(#f61-p45f43b9901)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="f61-text_1"> <!-- identificatore --> <g style="fill: var(--fig-accent)" transform="translate(84.703219 19.62) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-cf0" d="M 3347 4019 L 3053 4022 Q 3044 4291 2853 4423 Q 2663 4556 2278 4556 Q 1800 4556 1578 4334 Q 1356 4113 1356 3634 L 1356 3322 L 3578 3322 L 3578 331 L 4122 331 L 4122 0 L 2450 0 L 2450 331 L 3003 331 L 3003 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4238 1147 4550 Q 1513 4863 2228 4863 Q 2500 4863 2784 4822 Q 3069 4781 3347 4697 L 3347 4019 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-4c"/> <use xlink:href="#f61-DejaVuSerif-47" transform="translate(31.984375 0)"/> <use xlink:href="#f61-DejaVuSerif-48" transform="translate(96 0)"/> <use xlink:href="#f61-DejaVuSerif-51" transform="translate(155.1875 0)"/> <use xlink:href="#f61-DejaVuSerif-57" transform="translate(219.59375 0)"/> <use xlink:href="#f61-DejaVuSerif-4c" transform="translate(259.78125 0)"/> <use xlink:href="#f61-DejaVuSerif-cf0" transform="translate(291.765625 0)"/> <use xlink:href="#f61-DejaVuSerif-46" transform="translate(358.46875 0)"/> <use xlink:href="#f61-DejaVuSerif-44" transform="translate(414.46875 0)"/> <use xlink:href="#f61-DejaVuSerif-57" transform="translate(474.09375 0)"/> <use xlink:href="#f61-DejaVuSerif-52" transform="translate(514.28125 0)"/> <use xlink:href="#f61-DejaVuSerif-55" transform="translate(574.484375 0)"/> <use xlink:href="#f61-DejaVuSerif-48" transform="translate(622.28125 0)"/> </g> </g> <g id="f61-text_2"> <!-- cella (l-value) --> <g style="fill: var(--fig-steel)" transform="translate(203.645703 19.62) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-10" d="M 281 1959 L 1881 1959 L 1881 1472 L 281 1472 L 281 1959 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-46"/> <use xlink:href="#f61-DejaVuSerif-48" transform="translate(56 0)"/> <use xlink:href="#f61-DejaVuSerif-4f" transform="translate(115.1875 0)"/> <use xlink:href="#f61-DejaVuSerif-4f" transform="translate(147.171875 0)"/> <use xlink:href="#f61-DejaVuSerif-44" transform="translate(179.15625 0)"/> <use xlink:href="#f61-DejaVuSerif-3" transform="translate(238.78125 0)"/> <use xlink:href="#f61-DejaVuSerif-b" transform="translate(270.5625 0)"/> <use xlink:href="#f61-DejaVuSerif-4f" transform="translate(309.578125 0)"/> <use xlink:href="#f61-DejaVuSerif-10" transform="translate(341.5625 0)"/> <use xlink:href="#f61-DejaVuSerif-59" transform="translate(375.359375 0)"/> <use xlink:href="#f61-DejaVuSerif-44" transform="translate(431.859375 0)"/> <use xlink:href="#f61-DejaVuSerif-4f" transform="translate(491.484375 0)"/> <use xlink:href="#f61-DejaVuSerif-58" transform="translate(523.46875 0)"/> <use xlink:href="#f61-DejaVuSerif-48" transform="translate(587.875 0)"/> <use xlink:href="#f61-DejaVuSerif-c" transform="translate(647.0625 0)"/> </g> </g> <g id="f61-text_3"> <!-- indirizzo --> <g style="fill: var(--fig-axis)" transform="translate(330.95575 19.62) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-4c"/> <use xlink:href="#f61-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f61-DejaVuSerif-47" transform="translate(96.390625 0)"/> <use xlink:href="#f61-DejaVuSerif-4c" transform="translate(160.40625 0)"/> <use xlink:href="#f61-DejaVuSerif-55" transform="translate(192.390625 0)"/> <use xlink:href="#f61-DejaVuSerif-4c" transform="translate(240.1875 0)"/> <use xlink:href="#f61-DejaVuSerif-5d" transform="translate(272.171875 0)"/> <use xlink:href="#f61-DejaVuSerif-5d" transform="translate(324.859375 0)"/> <use xlink:href="#f61-DejaVuSerif-52" transform="translate(377.546875 0)"/> </g> </g> <g id="f61-text_4"> <!-- 7 --> <g style="fill: var(--fig-ink)" transform="translate(237.244375 56.260953) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-1a"/> </g> </g> <g id="f61-text_5"> <!-- 1000 --> <g style="fill: var(--fig-axis)" transform="translate(341.787312 55.741422) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-14"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f61-text_6"> <!-- x --> <g style="fill: var(--fig-accent)" transform="translate(118.270797 56.260953) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSansMono-5b" d="M 3494 3500 L 2241 1825 L 3616 0 L 2950 0 L 1925 1403 L 903 0 L 238 0 L 1613 1825 L 359 3500 L 997 3500 L 1925 2234 L 2847 3500 L 3494 3500 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-5b"/> </g> </g> <g id="f61-patch_7"> <path d="M 149.904 52.884 Q 170.694 52.884 190.030556 52.884 " style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 186.030556 50.884 L 190.030556 52.884 L 186.030556 54.884 z " style="fill: var(--fig-faint); stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> </g> <g id="f61-text_7"> <!-- 'a' --> <g style="fill: var(--fig-ink)" transform="translate(233.931406 95.068953) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSerif-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-a"/> <use xlink:href="#f61-DejaVuSerif-44" transform="translate(27.484375 0)"/> <use xlink:href="#f61-DejaVuSerif-a" transform="translate(87.109375 0)"/> </g> </g> <g id="f61-text_8"> <!-- 1004 --> <g style="fill: var(--fig-axis)" transform="translate(341.787312 94.549422) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-14"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f61-DejaVuSansMono-17" transform="translate(180.609375 0)"/> </g> </g> <g id="f61-text_9"> <!-- a --> <g style="fill: var(--fig-accent)" transform="translate(118.270797 95.068953) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-44"/> </g> </g> <g id="f61-patch_8"> <path d="M 149.904 91.692 Q 170.694 91.692 190.030556 91.692 " style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 186.030556 89.692 L 190.030556 91.692 L 186.030556 93.692 z " style="fill: var(--fig-faint); stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> </g> <g id="f61-text_10"> <!-- 128 --> <g style="fill: var(--fig-ink)" transform="translate(228.973125 133.876953) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-14"/> <use xlink:href="#f61-DejaVuSerif-15" transform="translate(63.625 0)"/> <use xlink:href="#f61-DejaVuSerif-1b" transform="translate(127.25 0)"/> </g> </g> <g id="f61-text_11"> <!-- 1008 --> <g style="fill: var(--fig-axis)" transform="translate(341.787312 133.357422) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSansMono-1b" d="M 1925 2216 Q 1503 2216 1273 1980 Q 1044 1744 1044 1313 Q 1044 881 1276 642 Q 1509 403 1925 403 Q 2350 403 2579 639 Q 2809 875 2809 1313 Q 2809 1741 2576 1978 Q 2344 2216 1925 2216 z M 1375 2478 Q 972 2581 745 2862 Q 519 3144 519 3541 Q 519 4097 897 4423 Q 1275 4750 1925 4750 Q 2578 4750 2956 4423 Q 3334 4097 3334 3541 Q 3334 3144 3107 2862 Q 2881 2581 2478 2478 Q 2947 2375 3195 2062 Q 3444 1750 3444 1253 Q 3444 622 3041 265 Q 2638 -91 1925 -91 Q 1213 -91 811 264 Q 409 619 409 1247 Q 409 1747 657 2061 Q 906 2375 1375 2478 z M 1147 3481 Q 1147 3106 1347 2909 Q 1547 2713 1925 2713 Q 2306 2713 2506 2909 Q 2706 3106 2706 3481 Q 2706 3863 2507 4063 Q 2309 4263 1925 4263 Q 1547 4263 1347 4061 Q 1147 3859 1147 3481 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-14"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f61-DejaVuSansMono-1b" transform="translate(180.609375 0)"/> </g> </g> <g id="f61-text_12"> <!-- alfa --> <g style="fill: var(--fig-accent)" transform="translate(106.531188 133.911992) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSansMono-4f" d="M 1997 1269 Q 1997 881 2139 684 Q 2281 488 2559 488 L 3231 488 L 3231 0 L 2503 0 Q 1988 0 1705 331 Q 1422 663 1422 1269 L 1422 4447 L 500 4447 L 500 4897 L 1997 4897 L 1997 1269 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSansMono-49" d="M 3322 4863 L 3322 4384 L 2669 4384 Q 2359 4384 2239 4257 Q 2119 4131 2119 3809 L 2119 3500 L 3322 3500 L 3322 3053 L 2119 3053 L 2119 0 L 1544 0 L 1544 3053 L 609 3053 L 609 3500 L 1544 3500 L 1544 3744 Q 1544 4319 1808 4591 Q 2072 4863 2631 4863 L 3322 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-44"/> <use xlink:href="#f61-DejaVuSansMono-4f" transform="translate(60.203125 0)"/> <use xlink:href="#f61-DejaVuSansMono-49" transform="translate(120.40625 0)"/> <use xlink:href="#f61-DejaVuSansMono-44" transform="translate(180.609375 0)"/> </g> </g> <g id="f61-patch_9"> <path d="M 149.904 130.5 Q 170.694 130.5 190.030556 130.5 " style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 186.030556 128.5 L 190.030556 130.5 L 186.030556 132.5 z " style="fill: var(--fig-faint); stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> </g> <g id="f61-text_13"> <!-- 3.14 --> <g style="fill: var(--fig-ink)" transform="translate(226.907344 172.684953) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-11" d="M 603 325 Q 603 500 722 622 Q 841 744 1019 744 Q 1191 744 1312 622 Q 1434 500 1434 325 Q 1434 153 1312 31 Q 1191 -91 1019 -91 Q 841 -91 722 29 Q 603 150 603 325 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-16"/> <use xlink:href="#f61-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f61-DejaVuSerif-14" transform="translate(95.40625 0)"/> <use xlink:href="#f61-DejaVuSerif-17" transform="translate(159.03125 0)"/> </g> </g> <g id="f61-text_14"> <!-- 1012 --> <g style="fill: var(--fig-axis)" transform="translate(341.787312 172.165422) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-14"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f61-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f61-DejaVuSansMono-15" transform="translate(180.609375 0)"/> </g> </g> <g id="f61-text_15"> <!-- pippo --> <g style="fill: var(--fig-accent)" transform="translate(102.617984 172.685461) scale(0.13 -0.13)"> <defs> <path id="f61-DejaVuSansMono-53" d="M 1172 441 L 1172 -1331 L 594 -1331 L 594 3500 L 1172 3500 L 1172 3053 Q 1316 3313 1555 3448 Q 1794 3584 2106 3584 Q 2741 3584 3102 3093 Q 3463 2603 3463 1734 Q 3463 881 3100 395 Q 2738 -91 2106 -91 Q 1788 -91 1548 45 Q 1309 181 1172 441 z M 2859 1747 Q 2859 2416 2648 2756 Q 2438 3097 2022 3097 Q 1603 3097 1387 2755 Q 1172 2413 1172 1747 Q 1172 1084 1387 740 Q 1603 397 2022 397 Q 2438 397 2648 737 Q 2859 1078 2859 1747 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-53"/> <use xlink:href="#f61-DejaVuSansMono-4c" transform="translate(60.203125 0)"/> <use xlink:href="#f61-DejaVuSansMono-53" transform="translate(120.40625 0)"/> <use xlink:href="#f61-DejaVuSansMono-53" transform="translate(180.609375 0)"/> <use xlink:href="#f61-DejaVuSansMono-52" transform="translate(240.8125 0)"/> </g> </g> <g id="f61-patch_10"> <path d="M 149.904 169.308 Q 170.694 169.308 190.030556 169.308 " style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 186.030556 167.308 L 190.030556 169.308 L 186.030556 171.308 z " style="fill: var(--fig-faint); stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: round"/> </g> <g id="f61-text_16"> <!-- 1016 --> <g style="fill: var(--fig-axis)" transform="translate(341.787312 210.973422) scale(0.11 -0.11)"> <defs> <path id="f61-DejaVuSansMono-19" d="M 3097 4563 L 3097 3981 Q 2900 4097 2678 4158 Q 2456 4219 2216 4219 Q 1616 4219 1306 3767 Q 997 3316 997 2438 Q 1147 2750 1412 2917 Q 1678 3084 2022 3084 Q 2697 3084 3067 2670 Q 3438 2256 3438 1497 Q 3438 741 3056 325 Q 2675 -91 1984 -91 Q 1172 -91 794 492 Q 416 1075 416 2328 Q 416 3509 870 4129 Q 1325 4750 2188 4750 Q 2419 4750 2650 4701 Q 2881 4653 3097 4563 z M 1972 2591 Q 1569 2591 1337 2300 Q 1106 2009 1106 1497 Q 1106 984 1337 693 Q 1569 403 1972 403 Q 2391 403 2603 679 Q 2816 956 2816 1497 Q 2816 2041 2603 2316 Q 2391 2591 1972 2591 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSansMono-14"/> <use xlink:href="#f61-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f61-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f61-DejaVuSansMono-19" transform="translate(180.609375 0)"/> </g> </g> <g id="f61-text_17"> <!-- … --> <g style="fill: var(--fig-ink)" transform="translate(233.38 259.39625) scale(0.16 -0.16)"> <defs> <path id="f61-DejaVuSerif-794" d="M 4916 325 Q 4916 500 5036 622 Q 5156 744 5331 744 Q 5503 744 5625 622 Q 5747 500 5747 325 Q 5747 153 5625 31 Q 5503 -91 5331 -91 Q 5153 -91 5034 29 Q 4916 150 4916 325 z M 2784 325 Q 2784 500 2904 622 Q 3025 744 3200 744 Q 3372 744 3494 622 Q 3616 500 3616 325 Q 3616 153 3494 31 Q 3372 -91 3200 -91 Q 3022 -91 2903 29 Q 2784 150 2784 325 z M 653 325 Q 653 500 773 622 Q 894 744 1069 744 Q 1241 744 1362 622 Q 1484 500 1484 325 Q 1484 153 1362 31 Q 1241 -91 1069 -91 Q 891 -91 772 29 Q 653 150 653 325 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-794"/> </g> </g> <g id="f61-text_18"> <!-- il contenuto della cella è l'r-value --> <g style="fill: var(--fig-axis)" transform="translate(156.900312 280.188) scale(0.1 -0.1)"> <defs> <path id="f61-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-aa" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z M 2057 5113 L 2638 3938 L 2272 3938 L 1441 5113 L 2057 5113 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-10" d="M 328 1959 L 1928 1959 L 1834 1472 L 234 1472 L 328 1959 z " transform="scale(0.015625)"/> <path id="f61-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f61-DejaVuSerif-Italic-4c"/> <use xlink:href="#f61-DejaVuSerif-Italic-4f" transform="translate(31.984375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-3" transform="translate(63.96875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-46" transform="translate(95.75 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-52" transform="translate(151.75 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-51" transform="translate(211.953125 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-57" transform="translate(276.359375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-48" transform="translate(316.546875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-51" transform="translate(375.734375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-58" transform="translate(440.140625 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-57" transform="translate(504.546875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-52" transform="translate(544.734375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-3" transform="translate(604.9375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-47" transform="translate(636.71875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-48" transform="translate(700.734375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-4f" transform="translate(759.921875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-4f" transform="translate(791.90625 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-44" transform="translate(823.890625 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-3" transform="translate(883.515625 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-46" transform="translate(915.296875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-48" transform="translate(971.296875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-4f" transform="translate(1030.484375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-4f" transform="translate(1062.46875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-44" transform="translate(1094.453125 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-3" transform="translate(1154.078125 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-aa" transform="translate(1185.859375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-3" transform="translate(1245.046875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-4f" transform="translate(1276.828125 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-a" transform="translate(1308.8125 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-55" transform="translate(1336.296875 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-10" transform="translate(1384.09375 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-59" transform="translate(1417.890625 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-44" transform="translate(1474.390625 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-4f" transform="translate(1534.015625 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-58" transform="translate(1566 0)"/> <use xlink:href="#f61-DejaVuSerif-Italic-48" transform="translate(1630.40625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f61-p45f43b9901"> <rect x="5.76" y="5.76" width="415.8" height="277.2"/> </clipPath> </defs> </svg></figure>

> [!abstract] Le quattro caratteristiche di una variabile
> Ogni variabile (e ogni costante) ha:
> 1. **nome**: l'identificatore;
> 2. **tipo**: che genere di dato contiene (per esempio `int`, un intero);
> 3. **locazione di memoria**, detta **l-value** (left value): **dove** sta;
> 4. **valore**, detto **r-value** (right value): **cosa** contiene.

```
    nome        l-value             r-value
     id    ->  [ cella @1008 ]  ->    128
```

I nomi vengono dal lato dell'assegnazione in cui si usano: a **sinistra** di **=** serve un posto dove scrivere (l-value), a **destra** serve un valore da leggere (r-value). In `x = x + 1;` la stessa variabile compare due volte con due ruoli: la $x$ a destra fornisce il suo valore, la $x$ a sinistra fornisce la sua cella.

### Dichiarazione

Prima di usare una variabile la si **dichiara** (<span class="src">slide 49-50</span>). Quando il compilatore incontra la dichiarazione, predispone un'area di memoria grande abbastanza per il tipo scelto.

```
tipo identificatore;
tipo identificatore = espressione;
```

Nella notazione delle slide la seconda forma si scrive `tipo identificatore [= espressione];`: le parentesi quadre indicano una parte **facoltativa**, non vanno scritte nel codice.

```c
int x;
int y = 3 * 2;
```

La prima crea una variabile intera senza darle un valore. Finché non le assegni qualcosa il suo valore è **indeterminato**, e leggerlo è **comportamento indefinito**: in pratica di solito trovi quello che era rimasto in memoria, ma lo standard non garantisce niente, nemmeno un numero "casuale" ma stabile. Questo vale per le variabili **locali**, dichiarate dentro `main` o dentro un blocco. Le variabili **globali**, dichiarate fuori da ogni funzione, partono invece da 0. La seconda riga crea la variabile già **inizializzata** a $6$.

### Assegnazione

> [!abstract] Assegnazione
> L'**assegnazione** è una delle istruzioni fondamentali: assegna a una variabile il valore di un'espressione.
> ```
> identificatore = espressione;
> ```

L'espressione a destra può contenere (<span class="src">slide 51-52</span>):
- un valore **costante**: `10`, `3.14`, `'2'` (un carattere fra apici singoli);
- un **identificatore** di variabile: `altezza`;
- una **combinazione** di espressioni con operatori (`+`, `-`, `*`, `/`, `%`) e parentesi.

```c
#include <stdio.h>

int main(void)
{
    int lunghezza;
    int altezza;
    int peso;
    int x = 3 * 2;
    char alt;
    int a;
    int b;
    int c;
    int d;

    lunghezza = 10;
    alt = '2';
    altezza = lunghezza;
    peso = 10 * altezza * (lunghezza + 1);
    x = x + 1;
    a = b = c = d = 5;

    printf("peso = %d, x = %d, alt = %c\n", peso, x, alt);
    printf("a = %d, b = %d, c = %d, d = %d\n", a, b, c, d);
    return 0;
}
```

Output:

```
peso = 1100, x = 7, alt = 2
a = 5, b = 5, c = 5, d = 5
```

La slide dichiara `int a, b, c, d;` in una riga sola: è C valido, ma qui si tiene una dichiarazione per riga, che si legge meglio e non inganna con i puntatori (`int* p, q;` dichiara un puntatore e un intero).

`altezza = lunghezza;` **copia** il valore: se dopo cambi `lunghezza`, `altezza` resta $10$. `'2'` è il **carattere** 2, non il numero 2 (in ASCII vale 50).

**Esecuzione** (<span class="src">slide 56</span>). Due passi, sempre in quest'ordine:
1. si **valuta** l'espressione a destra di **=**, ottenendo un r-value;
2. si **memorizza** quel risultato nella cella (l-value) indicata a sinistra.

```
x = x + 1;        con x che vale 6

passo 1:  x + 1   ->  leggo x (r-value 6), sommo 1   ->  7
passo 2:  x =     ->  scrivo 7 nella cella di x (l-value)
```

Proprio perché la destra si valuta **prima**, `x = x + 1` ha senso: quando si scrive, il vecchio valore è già stato letto.

**Sintassi generale** (<span class="src">slide 53-54</span> e <span class="src">slide 64</span>). La forma "variabile = valore" non copre tutti i casi. La sintassi vera dell'operatore di assegnazione semplice è:

```
exp1 = exp2
```

- `exp1` deve essere un'espressione **dotata di l-value**: deve indicare una cella. `x = 5` va bene, `5 = x` e `x + 1 = 5` no, perché `5` e `x + 1` sono solo valori, non posti.
- `exp1` ed `exp2` devono avere **tipi compatibili**.
- L'assegnazione è essa stessa un'espressione, e il suo **valore è quello di `exp2`**. Quindi si può usare dentro un'altra espressione.
- L'operatore **=** **associa a destra**.

Per questo funziona l'assegnazione a catena:

```
a = b = c = d = 5;
equivale a
a = (b = (c = (d = 5)));
```

Si parte da destra: `d = 5` scrive 5 in `d` e vale 5, quel 5 viene assegnato a `c`, e così via fino ad `a`.

**Esercizio della slide 65** (<span class="src">slide 64-65</span>, aggiunte nella versione del deck di fine settembre). La slide 64 riprende la catena con cinque variabili, `e = d = c = b = a = 1;`, che equivale a `(e = (d = (c = (b = (a = 1)))));`. La 65 la fa provare su onlinegdb: stampa le variabili prima (BEFORE) e dopo (AFTER) la catena. Nel programma della slide `a`, `d` ed `e` sono dichiarate senza valore e stampate nel BEFORE: è proprio il caso del valore indeterminato visto sopra, e gcc con `-Wall` avvisa (`'a' is used uninitialized`). Qui sono inizializzate a 0 e la stampa è su una riga:

```c
#include <stdio.h>

int main(void)
{
    int a = 0;
    int b = 2;
    int c = 3 * 2;
    int d = 0;
    int e = 0;

    printf("BEFORE\n");
    printf("a=%d b=%d c=%d d=%d e=%d\n", a, b, c, d, e);

    e = d = c = b = a = 1;

    printf("AFTER\n");
    printf("a=%d b=%d c=%d d=%d e=%d\n", a, b, c, d, e);
    return 0;
}
```

Output (verificato):

```
BEFORE
a=0 b=2 c=6 d=0 e=0
AFTER
a=1 b=1 c=1 d=1 e=1
```

La catena sovrascrive anche `b` e `c`, che avevano già un valore: dopo la riga valgono tutte 1.

## Metodo

**Leggere un'assegnazione.**
1. Guarda a sinistra di **=**: deve essere una cosa con una cella (l-value). Se è un numero o un'operazione, è un errore.
2. Calcola il valore dell'espressione a destra usando i valori **attuali** delle variabili.
3. Scrivi il risultato nella cella a sinistra. Solo adesso la variabile cambia.
4. Con più **=** in fila, parti da quello più a destra.

**Tracciare un programma a mano.** Fai una tabella con una colonna per variabile e una riga per istruzione, e aggiorna solo la colonna della variabile a sinistra di **=**. Le variabili dichiarate e non ancora assegnate valgono "?".

| istruzione | `lunghezza` | `altezza` | `peso` |
| --- | --- | --- | --- |
| `lunghezza = 10;` | 10 | ? | ? |
| `altezza = lunghezza;` | 10 | 10 | ? |
| `peso = 10 * altezza * (lunghezza + 1);` | 10 | 10 | 1100 |

## Esercizi tipo esame

**Esercizio 1.** Quali di questi identificatori sono validi in C? Per quelli non validi, di' perché.

```
_x1    2pi    int    Int    somma totale    somma_totale    sizeof    a-b    MAX_VAL
```

> [!example]- Soluzione
> Validi: `_x1`, `Int` (diverso da `int`, il C è case sensitive), `somma_totale`, `MAX_VAL`.
> Non validi: `2pi` (inizia con una cifra), `int` e `sizeof` (parole chiave), `somma totale` (contiene uno spazio: sono due identificatori), `a-b` (il `-` è un operatore: il compilatore legge `a` meno `b`).

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 3;
    int b = 4;
    int c;

    c = a;
    a = b;
    b = c;
    printf("%d %d %d\n", a, b, c);
    a = b = c = 2;
    a = a + b * c;
    printf("%d %d %d\n", a, b, c);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | `a` | `b` | `c` |
> | --- | --- | --- | --- |
> | iniziale | 3 | 4 | ? |
> | `c = a;` | 3 | 4 | 3 |
> | `a = b;` | 4 | 4 | 3 |
> | `b = c;` | 4 | 3 | 3 |
> | `a = b = c = 2;` | 2 | 2 | 2 |
> | `a = a + b * c;` | 6 | 2 | 2 |
>
> Output: `4 3 3` e poi `6 2 2` (verificato). Le prime tre assegnazioni scambiano `a` e `b` usando `c` come appoggio: senza, `a = b; b = a;` perderebbe il valore di `a`.

**Esercizio 3.** Quali di queste istruzioni sono sbagliate, e che tipo di errore è (sintassi o semantica)?

```
1)  x = 5
2)  5 = x;
3)  x + 1 = y;
4)  media = somma / 0;
5)  Printf("ciao\n");
```

> [!example]- Soluzione
> 1. Sintassi: manca il `;`.
> 2. e 3. Il lato sinistro di **=** deve avere un l-value, cioè essere una cella. `5` e `x + 1` sono solo valori: il compilatore rifiuta (`lvalue required`).
> 4. Sintatticamente corretta, semanticamente sbagliata: si compila (gcc avvisa della divisione per zero) e il problema esplode a run-time.
> 5. Il C è case sensitive: `Printf` non è `printf`. gcc segnala una funzione non dichiarata, e il linker non la trova.

**Esercizio 4.** Scrivi un programma che legge due interi e stampa la somma e la media, con la media decimale.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int x;
>     int y;
>
>     printf("Due interi: ");
>     if (scanf("%d %d", &x, &y) != 2) {
>         printf("input non valido\n");
>         return 1;
>     }
>     printf("somma = %d\n", x + y);
>     printf("media = %f\n", (x + y) / 2.0);
>     return 0;
> }
> ```
> Con `7 4` stampa `somma = 11` e `media = 5.500000`; con `ciao` stampa `input non valido` (verificato). `(x + y) / 2` darebbe 5: fra interi la divisione è intera, il `2.0` la rende decimale.

**Esercizio 5.** SI o NO?
1. Il C è un linguaggio interpretato.
2. Il linker produce il codice oggetto `.o`.
3. `/* ... */` può occupare più righe.
4. In `scanf("%d", &x)` la `&` si può togliere.
5. Una variabile locale non inizializzata vale 0.

> [!example]- Soluzione
> 1. NO, è compilato. 2. NO, il `.o` lo produce il compilatore; il linker unisce i `.o` e le librerie nell'eseguibile. 3. SI. 4. NO, `scanf` ha bisogno dell'indirizzo della cella in cui scrivere. 5. NO, il valore è indeterminato (le globali invece partono da 0).

## Errori tipici

- Dimenticare il `;` in fondo a un'istruzione: errore di sintassi, spesso segnalato sulla riga **dopo**.
- Dimenticare la `&` in `scanf`: compila (con un avviso) e il programma scrive in una posizione a caso della memoria.
- Non controllare il valore di ritorno di `scanf`.
- Usare una variabile prima di averle dato un valore.
- Scrivere **=** credendo di confrontare: **=** assegna, il confronto è **==**.
- Confondere `'2'` (carattere, codice 50) con `2` (numero).
- Usare una parola chiave come nome di variabile.

## Domande

- Che differenza c'è fra sintassi e semantica di un linguaggio?

- Porta un esempio di due istruzioni C sintatticamente diverse con la stessa semantica.

- Che differenza c'è fra compilazione e interpretazione?

- Quali sono le fasi dallo scrivere un programma C all'eseguirlo, e cosa fa ciascuna?

- Cosa fa il linker?

- Cosa sono standard input e standard output?

- Quali sono le regole per costruire un identificatore valido in C?

- Cosa significa che il C è case sensitive?

- Da quali due parti è composto un programma C?

- Quali sono le quattro caratteristiche di una variabile?

- Cosa sono l-value e r-value?

- In che ordine si esegue un'assegnazione?

- Perché `a = b = c = 5;` è valido e a cosa equivale?

- Perché in `scanf("%d", &x)` serve la `&` davanti a `x`?

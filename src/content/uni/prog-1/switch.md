---
title: Switch
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-02
lezioni: []
ordine: 9
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione fra settembre e ottobre, deck 3.3: <span class="src">slide 16-31</span>. Prima: [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/), che copre anche il resto del deck (`break` e `continue` nei cicli, Böhm-Jacopini). Base: [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/).

> [!abstract] Per l'esame
> - **Saper enunciare**: sintassi dello `switch`, come si esegue, a cosa serve `break`, cosa succede senza (fall-through), quando si può usare uno `switch` al posto di una catena di `if-else` e quando no.
> - **Saper fare**: tracciare uno `switch` con `break` mancanti e dire l'output esatto per un valore dato, anche con `default` in mezzo; raggruppare più `case` sullo stesso blocco; contare categorie di caratteri con `switch` dentro un ciclo di `getchar`; riscrivere uno `switch` come catena di `if-else` e viceversa; scrivere un menu con `do-while` e `switch`.
> - **Dove esce**: nella teorica come tracing, quasi sempre con un `break` dimenticato apposta. Nella prova al calcolatore per i menu e per smistare un carattere o un valore di `enum` in categorie.

Il filo del deck:

```
switch: selezione multipla        può sostituire una catena di if-else (slide 16)
   |
sintassi e default                espressione intera, case costanti (slide 17)
   |
esecuzione                        dal case uguale in giù, anche i blocchi dopo (slide 18-20)
   |
break                             per eseguire solo il proprio blocco (slide 21-23)
   |
esempio numero                    Q1 numero 3, Q2 numero -1 (slide 24-26)
   |
categorizzazione                  lo switch della slide 27, con le sue incongruenze
   |
conteggio cifre e spazi           switch dentro un ciclo di getchar (slide 28-30)
   |
osservazioni                      quando lo switch si può usare (slide 31)
```

## Definizioni

**`switch`** (<span class="src">slide 16</span>). Struttura di **selezione multipla**: sceglie fra più strade in base al valore di un'espressione. Può sostituire una catena di `if-else`. Il prof dice che non è necessaria (tutto si fa con `if-else`, vedi Böhm-Jacopini in [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/)) ma comoda in certe situazioni.

L'idea: una catena `if (x <mark> 1) ... else if (x </mark> 2) ... else if (x <mark> 3) ...` ripete `x </mark>` a ogni riga e nasconde il fatto che si sta guardando sempre la stessa variabile. Lo `switch` lo dice una volta sola, in testa, e poi elenca i casi come le voci di un menu.

**Sintassi** (<span class="src">slide 17</span>).

```
switch (<espressione intera>) {
    case v1: { blocco istruzioni }
    case v2: { blocco istruzioni }
    ...
    default: { blocco istruzioni }
}
```

- L'espressione deve avere valore **intero** (tipo integral, slide 31): `int`, ma anche `char`, che in C è un piccolo intero. Non `float`, non stringhe.
- `v1`, `v2`, … sono **costanti** intere: `3`, `'a'`, `'\n'`. Non variabili e non intervalli.
- Ogni valore compare in **un solo** `case`.
- `default` è **opzionale**: si esegue quando nessun `case` corrisponde. Se manca e nessun `case` corrisponde, lo `switch` non fa niente.

Esempio 1, valori validi: `switch (n % 3)` con `case 0:`, `case 1:`, `case 2:` (l'espressione è un calcolo intero qualsiasi); `switch (c)` con `c` di tipo `char` e `case 'a':`.

Esempio 2, valori non validi (non compilano, verificato con gcc): `switch (x)` con `x` di tipo `float` (`switch quantity not an integer`); `case y:` con `y` variabile (`case label does not reduce to an integer constant`); due volte `case 1:` (`duplicate case value`).

**Esecuzione** (<span class="src">slide 18-20</span>). Si valuta l'espressione, poi la si confronta con `v1`, poi con `v2`, e così via. Al primo `case` uguale **si entra**, e da lì si eseguono il blocco di `v1`, **poi quello di `v2`**, e tutti i successivi fino alla fine dello `switch`. I `case` sono solo **etichette** di ingresso, non confini. Questo comportamento si chiama **fall-through** (caduta).

```
switch (espressione intera)
   |   si valuta una volta
   v
confronto con case v1, v2, ...   il primo uguale è il punto di ingresso
   |   nessuno uguale: default, se c'è; altrimenti niente
   v
esegue da lì in giù               anche i blocchi dei case dopo (fall-through)
   |
break                             esce dallo switch
```

L'immagine giusta è quella di una scala con dei pianerottoli numerati: il valore dice a quale pianerottolo entri, poi scendi tutti i gradini fino in fondo, a meno che un `break` ti faccia uscire.

La slide 20 chiude con la domanda: "E se volessi limitare l'esecuzione del blocco di istruzioni per ciascun valore v1, v2, etc.?". La risposta è il `break`.

**`break` nello `switch`** (<span class="src">slide 21</span>). Per eseguire solo il blocco del proprio `case`, lo si chiude con `break`, che restituisce il controllo all'istruzione dopo lo `switch`. Il `break` è opzionale: toglierlo è il modo di far proseguire l'esecuzione nel blocco dopo.

```
switch (<espressione intera>) {
    case v1: { blocco istruzioni } break;
    case v2: { blocco istruzioni } break;
    ...
    default: { blocco istruzioni } break;
}
```

Il `break` dopo `default`, se `default` è l'ultimo, non cambia niente; si mette per abitudine, così aggiungere un `case` dopo non introduce una caduta.

**Differenze con l'`if-else`** (<span class="src">slide 31</span>). Lo `switch` si usa solo quando:
- tutte le scelte dipendono dal valore di **una sola** espressione, valutata una volta;
- il valore è di tipo intero;
- ogni scelta corrisponde a **valori singoli**, e `default` raccoglie tutti gli altri.

Condizioni come $x > 10$, $a < b$ o "fra 18 e 30" non si scrivono con un `case`: servono gli `if`.

## Concetti

### Flowchart con e senza `break`

(<span class="src">slide 22-23</span>) Con il `break` ogni blocco, finito, va diretto all'uscita: è una catena di `if-else if`. Senza il `break` dopo il blocco 1 (la freccia rossa "tolto break" della slide 23), chi entra da `val1` esegue il blocco 1 e poi **anche** il blocco 2, senza rifare il confronto con `val2`.

<figure class="fig"><svg role="img" aria-label="switch con e senza break" xmlns:xlink="http://www.w3.org/1999/xlink" width="625.32pt" height="247.596923pt" viewBox="0 0 625.32 247.596923" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f88a87e-figure_1"> <g id="f88a87e-patch_1"> <path d="M 0 247.596923 L 625.32 247.596923 L 625.32 0 L 0 0 L 0 247.596923 z " style="fill: none"/> </g> <g id="f88a87e-axes_1"> <g id="f88a87e-patch_2"> <path d="M 42.244615 42.244615 L 72.290769 70.144615 L 42.244615 98.044615 L 12.198462 70.144615 L 42.244615 42.244615 z " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_3"> <path d="M 18.636923 147.406154 L 65.852308 147.406154 L 65.852308 121.652308 L 18.636923 121.652308 L 18.636923 147.406154 z " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_4"> <path d="M 113.067692 42.244615 L 143.113846 70.144615 L 113.067692 98.044615 L 83.021538 70.144615 L 113.067692 42.244615 z " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_5"> <path d="M 89.46 147.406154 L 136.675385 147.406154 L 136.675385 121.652308 L 89.46 121.652308 L 89.46 147.406154 z " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_6"> <path d="M 183.890769 42.244615 L 213.936923 70.144615 L 183.890769 98.044615 L 153.844615 70.144615 L 183.890769 42.244615 z " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_7"> <path d="M 160.283077 147.406154 L 207.498462 147.406154 L 207.498462 121.652308 L 160.283077 121.652308 L 160.283077 147.406154 z " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_8"> <path d="M 233.252308 147.406154 L 276.175385 147.406154 L 276.175385 121.652308 L 233.252308 121.652308 L 233.252308 147.406154 z " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-line2d_1"> <path d="M 213.936923 70.144615 L 254.713846 70.144615 " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_2"> <path d="M 42.244615 147.406154 L 42.244615 186.036923 " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_3"> <path d="M 113.067692 147.406154 L 113.067692 186.036923 " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_4"> <path d="M 183.890769 147.406154 L 183.890769 186.036923 " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_5"> <path d="M 254.713846 147.406154 L 254.713846 186.036923 " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_6"> <path d="M 42.244615 186.036923 L 254.713846 186.036923 " clip-path="url(#f88a87e-pd8c9c4857b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-text_1"> <!-- con break in ogni case --> <g style="fill: var(--fig-ink)" transform="translate(76.735312 17.462272) scale(0.12 -0.12)"> <defs> <path id="f88a87e-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-4e" d="M 1831 0 L 219 0 L 219 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 1697 L 2713 2988 L 2234 2988 L 2234 3322 L 3738 3322 L 3738 2988 L 3169 2988 L 2181 2075 L 3444 331 L 3922 331 L 3922 0 L 2284 0 L 2284 331 L 2759 331 L 1766 1697 L 1313 1275 L 1313 331 L 1831 331 L 1831 0 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-46"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-51" transform="translate(116.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(180.609375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-45" transform="translate(212.390625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-55" transform="translate(276.40625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-48" transform="translate(324.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(383.390625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4e" transform="translate(443.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(503.609375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4c" transform="translate(535.390625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-51" transform="translate(567.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(631.78125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(663.5625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4a" transform="translate(723.765625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-51" transform="translate(787.78125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4c" transform="translate(852.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(884.171875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(915.953125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(971.953125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-56" transform="translate(1031.578125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-48" transform="translate(1082.890625 0)"/> </g> </g> <g id="f88a87e-patch_9"> <path d="M 42.244615 27.221538 Q 42.244615 34.733077 42.244615 40.008547 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 44.244615 36.008547 L 42.244615 40.008547 L 40.244615 36.008547 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_2"> <!-- exp == --> <g style="fill: var(--fig-steel)" transform="translate(25.191022 67.081276) scale(0.09 -0.09)"> <defs> <path id="f88a87e-DejaVuSerif-5b" d="M 1863 2028 L 2559 2988 L 2113 2988 L 2113 3322 L 3391 3322 L 3391 2988 L 2950 2988 L 2059 1759 L 3097 331 L 3531 331 L 3531 0 L 1997 0 L 1997 331 L 2419 331 L 1697 1325 L 972 331 L 1403 331 L 1403 0 L 141 0 L 141 331 L 581 331 L 1497 1594 L 488 2988 L 78 2988 L 78 3322 L 1563 3322 L 1563 2988 L 1166 2988 L 1863 2028 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-48"/> <use xlink:href="#f88a87e-DejaVuSerif-5b" transform="translate(59.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-53" transform="translate(115.578125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(179.59375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(211.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(295.171875 0)"/> </g> <!-- val1 ? --> <g style="fill: var(--fig-steel)" transform="translate(28.87399 77.883736) scale(0.09 -0.09)"> <defs> <path id="f88a87e-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-59"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(56.5 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(116.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-14" transform="translate(148.109375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(211.734375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-22" transform="translate(243.515625 0)"/> </g> </g> <g id="f88a87e-text_3"> <!-- sì --> <g style="fill: var(--fig-ink)" transform="translate(45.463846 113.067692) scale(0.1 -0.1)"> <defs> <path id="f88a87e-DejaVuSerif-ae" d="M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z M 572 5113 L 1384 3938 L 1019 3938 L -44 5113 L 572 5113 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-56"/> <use xlink:href="#f88a87e-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f88a87e-patch_10"> <path d="M 72.290769 70.144615 Q 77.656154 70.144615 80.78547 70.144615 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 77.18547 68.344615 L 80.78547 70.144615 L 77.18547 71.944615 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_4"> <!-- no --> <g style="fill: var(--fig-axis)" transform="translate(73.363846 63.706154) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-51"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f88a87e-patch_11"> <path d="M 42.244615 98.044615 Q 42.244615 109.848462 42.244615 119.41624 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 44.044615 115.81624 L 42.244615 119.41624 L 40.444615 115.81624 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_5"> <!-- blocco 1 --> <g style="fill: var(--fig-ink)" transform="translate(21.05399 137.127278) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-45"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(96 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(156.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(212.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(268.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(328.40625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-14" transform="translate(360.1875 0)"/> </g> </g> <g id="f88a87e-text_6"> <!-- exp == --> <g style="fill: var(--fig-steel)" transform="translate(96.014099 67.081276) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-48"/> <use xlink:href="#f88a87e-DejaVuSerif-5b" transform="translate(59.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-53" transform="translate(115.578125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(179.59375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(211.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(295.171875 0)"/> </g> <!-- val2 ? --> <g style="fill: var(--fig-steel)" transform="translate(99.697067 77.883736) scale(0.09 -0.09)"> <defs> <path id="f88a87e-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-59"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(56.5 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(116.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-15" transform="translate(148.109375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(211.734375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-22" transform="translate(243.515625 0)"/> </g> </g> <g id="f88a87e-text_7"> <!-- sì --> <g style="fill: var(--fig-ink)" transform="translate(116.286923 113.067692) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-56"/> <use xlink:href="#f88a87e-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f88a87e-patch_12"> <path d="M 143.113846 70.144615 Q 148.479231 70.144615 151.608547 70.144615 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 148.008547 68.344615 L 151.608547 70.144615 L 148.008547 71.944615 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_8"> <!-- no --> <g style="fill: var(--fig-axis)" transform="translate(144.186923 63.706154) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-51"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f88a87e-patch_13"> <path d="M 113.067692 98.044615 Q 113.067692 109.848462 113.067692 119.41624 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 114.867692 115.81624 L 113.067692 119.41624 L 111.267692 115.81624 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_9"> <!-- blocco 2 --> <g style="fill: var(--fig-ink)" transform="translate(91.877067 137.127278) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-45"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(96 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(156.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(212.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(268.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(328.40625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-15" transform="translate(360.1875 0)"/> </g> </g> <g id="f88a87e-text_10"> <!-- exp == --> <g style="fill: var(--fig-steel)" transform="translate(166.837175 67.081276) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-48"/> <use xlink:href="#f88a87e-DejaVuSerif-5b" transform="translate(59.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-53" transform="translate(115.578125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(179.59375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(211.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(295.171875 0)"/> </g> <!-- val3 ? --> <g style="fill: var(--fig-steel)" transform="translate(170.520144 77.883736) scale(0.09 -0.09)"> <defs> <path id="f88a87e-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-59"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(56.5 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(116.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-16" transform="translate(148.109375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(211.734375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-22" transform="translate(243.515625 0)"/> </g> </g> <g id="f88a87e-text_11"> <!-- sì --> <g style="fill: var(--fig-ink)" transform="translate(187.11 113.067692) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-56"/> <use xlink:href="#f88a87e-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f88a87e-patch_14"> <path d="M 183.890769 98.044615 Q 183.890769 109.848462 183.890769 119.41624 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 185.690769 115.81624 L 183.890769 119.41624 L 182.090769 115.81624 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_12"> <!-- blocco 3 --> <g style="fill: var(--fig-ink)" transform="translate(162.700144 137.127278) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-45"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(96 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(156.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(212.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(268.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(328.40625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-16" transform="translate(360.1875 0)"/> </g> </g> <g id="f88a87e-text_13"> <!-- no --> <g style="fill: var(--fig-axis)" transform="translate(215.01 63.706154) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-51"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f88a87e-patch_15"> <path d="M 254.713846 70.144615 Q 254.713846 95.898462 254.713846 119.41624 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 256.513846 115.81624 L 254.713846 119.41624 L 252.913846 115.81624 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_14"> <!-- default --> <g style="fill: var(--fig-ink)" transform="translate(236.892752 137.127278) scale(0.1 -0.1)"> <defs> <path id="f88a87e-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-47"/> <use xlink:href="#f88a87e-DejaVuSerif-48" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-49" transform="translate(123.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(160.21875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-58" transform="translate(219.84375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(284.25 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-57" transform="translate(316.234375 0)"/> </g> </g> <g id="f88a87e-patch_16"> <path d="M 147.406154 186.036923 Q 147.406154 201.06 147.406154 213.847009 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 149.406154 209.847009 L 147.406154 213.847009 L 145.406154 209.847009 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_15"> <!-- istruzione dopo lo switch --> <g style="fill: var(--fig-axis)" transform="translate(83.925685 229.411893) scale(0.1 -0.1)"> <defs> <path id="f88a87e-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-5a" d="M 3741 728 Q 4156 1178 4250 1344 Q 4594 1969 4931 2988 L 4447 2984 L 4513 3322 L 5347 3322 L 5281 2984 L 5278 2984 Q 4959 1825 4656 1266 Q 4209 469 3719 0 L 3241 0 L 2900 2484 L 1597 0 L 1138 0 L 734 2988 L 359 2981 L 425 3322 L 1281 3322 L 1631 728 L 2991 3322 L 3394 3322 L 3741 728 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f88a87e-DejaVuSerif-Italic-4b" d="M 309 0 L 1191 4531 L 641 4531 L 703 4863 L 1828 4863 L 1416 2731 Q 1641 3069 1928 3241 Q 2216 3413 2553 3413 Q 3103 3413 3300 3097 Q 3422 2906 3422 2588 Q 3422 2378 3369 2113 L 3022 331 L 3534 331 L 3472 0 L 2381 0 L 2756 1931 Q 2819 2253 2819 2469 Q 2819 2659 2769 2763 Q 2666 2988 2284 2988 Q 1884 2988 1617 2697 Q 1350 2406 1244 1850 L 884 0 L 309 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4c"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-47" transform="translate(535.9375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(599.953125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-53" transform="translate(660.15625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(724.171875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-3" transform="translate(784.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4f" transform="translate(816.15625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(848.140625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-3" transform="translate(908.34375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-56" transform="translate(940.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-5a" transform="translate(991.4375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4c" transform="translate(1077.03125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-57" transform="translate(1109.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-46" transform="translate(1149.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4b" transform="translate(1205.203125 0)"/> </g> </g> </g> <g id="f88a87e-axes_2"> <g id="f88a87e-patch_17"> <path d="M 377.044615 42.244615 L 407.090769 70.144615 L 377.044615 98.044615 L 346.998462 70.144615 L 377.044615 42.244615 z " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_18"> <path d="M 353.436923 147.406154 L 400.652308 147.406154 L 400.652308 121.652308 L 353.436923 121.652308 L 353.436923 147.406154 z " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_19"> <path d="M 447.867692 42.244615 L 477.913846 70.144615 L 447.867692 98.044615 L 417.821538 70.144615 L 447.867692 42.244615 z " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_20"> <path d="M 424.26 147.406154 L 471.475385 147.406154 L 471.475385 121.652308 L 424.26 121.652308 L 424.26 147.406154 z " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_21"> <path d="M 518.690769 42.244615 L 548.736923 70.144615 L 518.690769 98.044615 L 488.644615 70.144615 L 518.690769 42.244615 z " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_22"> <path d="M 495.083077 147.406154 L 542.298462 147.406154 L 542.298462 121.652308 L 495.083077 121.652308 L 495.083077 147.406154 z " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-patch_23"> <path d="M 568.052308 147.406154 L 610.975385 147.406154 L 610.975385 121.652308 L 568.052308 121.652308 L 568.052308 147.406154 z " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f88a87e-line2d_7"> <path d="M 548.736923 70.144615 L 589.513846 70.144615 " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_8"> <path d="M 447.867692 147.406154 L 447.867692 186.036923 " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_9"> <path d="M 518.690769 147.406154 L 518.690769 186.036923 " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_10"> <path d="M 589.513846 147.406154 L 589.513846 186.036923 " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-line2d_11"> <path d="M 447.867692 186.036923 L 589.513846 186.036923 " clip-path="url(#f88a87e-pe40e043951)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f88a87e-text_16"> <!-- senza break dopo il blocco 1 --> <g style="fill: var(--fig-accent)" transform="translate(393.553125 17.462272) scale(0.12 -0.12)"> <defs> <path id="f88a87e-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f88a87e-DejaVuSerif-56"/> <use xlink:href="#f88a87e-DejaVuSerif-48" transform="translate(51.3125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-51" transform="translate(110.5 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-5d" transform="translate(174.90625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(227.59375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(287.21875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-45" transform="translate(319 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-55" transform="translate(383.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-48" transform="translate(430.8125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(490 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4e" transform="translate(549.625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(610.21875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-47" transform="translate(642 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(706.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-53" transform="translate(766.21875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(830.234375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(890.4375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4c" transform="translate(922.21875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(954.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(986.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-45" transform="translate(1017.96875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(1081.984375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(1113.96875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(1174.171875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(1230.171875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(1286.171875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(1346.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-14" transform="translate(1378.15625 0)"/> </g> </g> <g id="f88a87e-patch_24"> <path d="M 377.044615 27.221538 Q 377.044615 34.733077 377.044615 40.008547 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 379.044615 36.008547 L 377.044615 40.008547 L 375.044615 36.008547 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_17"> <!-- exp == --> <g style="fill: var(--fig-steel)" transform="translate(359.991022 67.081276) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-48"/> <use xlink:href="#f88a87e-DejaVuSerif-5b" transform="translate(59.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-53" transform="translate(115.578125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(179.59375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(211.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(295.171875 0)"/> </g> <!-- val1 ? --> <g style="fill: var(--fig-steel)" transform="translate(363.67399 77.883736) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-59"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(56.5 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(116.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-14" transform="translate(148.109375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(211.734375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-22" transform="translate(243.515625 0)"/> </g> </g> <g id="f88a87e-text_18"> <!-- sì --> <g style="fill: var(--fig-ink)" transform="translate(380.263846 113.067692) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-56"/> <use xlink:href="#f88a87e-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f88a87e-patch_25"> <path d="M 407.090769 70.144615 Q 412.456154 70.144615 415.58547 70.144615 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 411.98547 68.344615 L 415.58547 70.144615 L 411.98547 71.944615 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_19"> <!-- no --> <g style="fill: var(--fig-axis)" transform="translate(408.163846 63.706154) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-51"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f88a87e-patch_26"> <path d="M 377.044615 98.044615 Q 377.044615 109.848462 377.044615 119.41624 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 378.844615 115.81624 L 377.044615 119.41624 L 375.244615 115.81624 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_20"> <!-- blocco 1 --> <g style="fill: var(--fig-ink)" transform="translate(355.85399 137.127278) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-45"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(96 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(156.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(212.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(268.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(328.40625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-14" transform="translate(360.1875 0)"/> </g> </g> <g id="f88a87e-text_21"> <!-- exp == --> <g style="fill: var(--fig-steel)" transform="translate(430.814099 67.081276) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-48"/> <use xlink:href="#f88a87e-DejaVuSerif-5b" transform="translate(59.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-53" transform="translate(115.578125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(179.59375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(211.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(295.171875 0)"/> </g> <!-- val2 ? --> <g style="fill: var(--fig-steel)" transform="translate(434.497067 77.883736) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-59"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(56.5 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(116.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-15" transform="translate(148.109375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(211.734375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-22" transform="translate(243.515625 0)"/> </g> </g> <g id="f88a87e-text_22"> <!-- sì --> <g style="fill: var(--fig-ink)" transform="translate(451.086923 113.067692) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-56"/> <use xlink:href="#f88a87e-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f88a87e-patch_27"> <path d="M 477.913846 70.144615 Q 483.279231 70.144615 486.408547 70.144615 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 482.808547 68.344615 L 486.408547 70.144615 L 482.808547 71.944615 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_23"> <!-- no --> <g style="fill: var(--fig-axis)" transform="translate(478.986923 63.706154) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-51"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f88a87e-patch_28"> <path d="M 447.867692 98.044615 Q 447.867692 109.848462 447.867692 119.41624 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 449.667692 115.81624 L 447.867692 119.41624 L 446.067692 115.81624 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_24"> <!-- blocco 2 --> <g style="fill: var(--fig-ink)" transform="translate(426.677067 137.127278) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-45"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(96 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(156.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(212.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(268.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(328.40625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-15" transform="translate(360.1875 0)"/> </g> </g> <g id="f88a87e-text_25"> <!-- exp == --> <g style="fill: var(--fig-steel)" transform="translate(501.637175 67.081276) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-48"/> <use xlink:href="#f88a87e-DejaVuSerif-5b" transform="translate(59.1875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-53" transform="translate(115.578125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(179.59375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(211.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-20" transform="translate(295.171875 0)"/> </g> <!-- val3 ? --> <g style="fill: var(--fig-steel)" transform="translate(505.320144 77.883736) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-59"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(56.5 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(116.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-16" transform="translate(148.109375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(211.734375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-22" transform="translate(243.515625 0)"/> </g> </g> <g id="f88a87e-text_26"> <!-- sì --> <g style="fill: var(--fig-ink)" transform="translate(521.91 113.067692) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-56"/> <use xlink:href="#f88a87e-DejaVuSerif-ae" transform="translate(51.3125 0)"/> </g> </g> <g id="f88a87e-patch_29"> <path d="M 518.690769 98.044615 Q 518.690769 109.848462 518.690769 119.41624 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 520.490769 115.81624 L 518.690769 119.41624 L 516.890769 115.81624 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_27"> <!-- blocco 3 --> <g style="fill: var(--fig-ink)" transform="translate(497.500144 137.127278) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-45"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(96 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(156.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-46" transform="translate(212.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(268.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-3" transform="translate(328.40625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-16" transform="translate(360.1875 0)"/> </g> </g> <g id="f88a87e-text_28"> <!-- no --> <g style="fill: var(--fig-axis)" transform="translate(549.81 63.706154) scale(0.09 -0.09)"> <use xlink:href="#f88a87e-DejaVuSerif-51"/> <use xlink:href="#f88a87e-DejaVuSerif-52" transform="translate(64.40625 0)"/> </g> </g> <g id="f88a87e-patch_30"> <path d="M 589.513846 70.144615 Q 589.513846 95.898462 589.513846 119.41624 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 591.313846 115.81624 L 589.513846 119.41624 L 587.713846 115.81624 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_29"> <!-- default --> <g style="fill: var(--fig-ink)" transform="translate(571.692752 137.127278) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-47"/> <use xlink:href="#f88a87e-DejaVuSerif-48" transform="translate(64.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-49" transform="translate(123.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(160.21875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-58" transform="translate(219.84375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-4f" transform="translate(284.25 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-57" transform="translate(316.234375 0)"/> </g> </g> <g id="f88a87e-patch_31"> <path d="M 400.652308 134.529231 Q 412.456154 134.529231 421.576718 134.529231 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> <path d="M 417.576718 132.529231 L 421.576718 134.529231 L 417.576718 136.529231 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> </g> <g id="f88a87e-text_30"> <!-- cade --> <g style="fill: var(--fig-accent)" transform="translate(400.514748 158.136923) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-46"/> <use xlink:href="#f88a87e-DejaVuSerif-44" transform="translate(56 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-47" transform="translate(115.625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-48" transform="translate(179.640625 0)"/> </g> </g> <g id="f88a87e-patch_32"> <path d="M 482.206154 186.036923 Q 482.206154 201.06 482.206154 213.847009 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 484.206154 209.847009 L 482.206154 213.847009 L 480.206154 209.847009 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f88a87e-text_31"> <!-- istruzione dopo lo switch --> <g style="fill: var(--fig-axis)" transform="translate(418.725685 229.411893) scale(0.1 -0.1)"> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4c"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-47" transform="translate(535.9375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(599.953125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-53" transform="translate(660.15625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(724.171875 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-3" transform="translate(784.375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4f" transform="translate(816.15625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-52" transform="translate(848.140625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-3" transform="translate(908.34375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-56" transform="translate(940.125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-5a" transform="translate(991.4375 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4c" transform="translate(1077.03125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-57" transform="translate(1109.015625 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-46" transform="translate(1149.203125 0)"/> <use xlink:href="#f88a87e-DejaVuSerif-Italic-4b" transform="translate(1205.203125 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f88a87e-pd8c9c4857b"> <rect x="5.76" y="5.76" width="279" height="236.076923"/> </clipPath> <clipPath id="f88a87e-pe40e043951"> <rect x="340.56" y="5.76" width="279" height="236.076923"/> </clipPath> </defs> </svg></figure>

```
con break                         senza break dopo il blocco 1
exp==val1 ? -> blocco 1 -> fine   exp==val1 ? -> blocco 1 -> blocco 2 -> fine
exp==val2 ? -> blocco 2 -> fine   exp==val2 ? -------------> blocco 2 -> fine
...                               ...
default     -> blocco d -> fine   default     -> blocco d -> fine
```

### Più valori sullo stesso blocco

Il fall-through serve: `case` vuoti scritti uno sotto l'altro portano tutti allo stesso blocco.

```
case 3:
case 4:
case 5:
    printf("Valore positivo piccolo");
    break;
```

Si entra da 3, 4 o 5 e si arriva comunque al `printf`. È il modo di esprimere "3 o 4 o 5", visto che un `case` non accetta intervalli. Un `case` vuoto non dà warning; un `case` che **fa qualcosa** e poi cade nel successivo sì (`-Wimplicit-fallthrough`, attivo con `-Wextra`). Quando la caduta è voluta si scrive il commento `/* fall through */` prima del `case` successivo: gcc lo riconosce e chi legge capisce che non è una dimenticanza.

Esempio 1, giorni della settimana, con il weekend raggruppato e il `default` per i valori non validi:

```c
#include <stdio.h>

int main(void)
{
    int g;

    for (g = 0; g <= 8; g += 4) {
        switch (g) {
        case 1:
            printf("lunedi\n");
            break;
        case 2:
            printf("martedi\n");
            break;
        case 3:
            printf("mercoledi\n");
            break;
        case 4:
            printf("giovedi\n");
            break;
        case 5:
            printf("venerdi\n");
            break;
        case 6:
        case 7:
            printf("weekend\n");
            break;
        default:
            printf("%d non e' un giorno\n", g);
            break;
        }
    }
    return 0;
}
```

| `g` | `case` che corrisponde | output |
| --- | --- | --- |
| 0 | nessuno: `default` | `0 non e' un giorno` |
| 4 | `case 4` | `giovedi`, poi `break` |
| 8 | nessuno: `default` | `8 non e' un giorno` |

(verificato) Con `g = 6` o `g = 7` si entrerebbe da due etichette diverse nello stesso `printf("weekend\n")`.

Esempio 2, quanti giorni ha un mese. Tre gruppi, e uno dei casi ha dentro un `if`: lo `switch` sceglie il mese, ma non sa confrontare l'anno.

```c
#include <stdio.h>

int main(void)
{
    int mese;
    int anno;
    int giorni;

    if (scanf("%d %d", &mese, &anno) != 2) {
        return 1;
    }
    switch (mese) {
    case 4:
    case 6:
    case 9:
    case 11:
        giorni = 30;
        break;
    case 2:
        if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
            giorni = 29;
        } else {
            giorni = 28;
        }
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        giorni = 31;
        break;
    default:
        giorni = 0;
        break;
    }
    if (giorni == 0) {
        printf("mese non valido\n");
    } else {
        printf("%d/%d ha %d giorni\n", mese, anno, giorni);
    }
    return 0;
}
```

| input | percorso | output |
| --- | --- | --- |
| `4 2026` | `case 4`, cade su `giorni = 30`, `break` | `4/2026 ha 30 giorni` |
| `2 2024` | `case 2`, bisestile (per 4, non per 100) | `2/2024 ha 29 giorni` |
| `2 1900` | `case 2`, per 100 ma non per 400 | `2/1900 ha 28 giorni` |
| `12 2026` | `case 12`, ultimo del gruppo da 31 | `12/2026 ha 31 giorni` |
| `13 2026` | `default` | `mese non valido` |

(verificati) L'ordine dei `case` è libero: qui i mesi da 31 stanno dopo il febbraio, e lo `switch` funziona lo stesso perché cerca il valore uguale, non va in ordine numerico. Il regolamento dei bisestili è quello di [Istruzioni condizionali (esercizi)](/uni/prog-1/istruzioni-condizionali-esercizi/), esercizio 8.

### Fall-through voluto

A volte la caduta è proprio quello che serve: ogni caso fa la sua parte **e** quella di tutti i casi sotto. Esempio, un conto alla rovescia che parte dal numero dato:

```c
#include <stdio.h>

int main(void)
{
    int n;

    for (n = 3; n >= 0; n--) {
        printf("n=%d:", n);
        switch (n) {
        case 3:
            printf(" tre");
            /* fall through */
        case 2:
            printf(" due");
            /* fall through */
        case 1:
            printf(" uno");
            /* fall through */
        default:
            printf(" via!\n");
        }
    }
    return 0;
}
```

Output (verificato):

```
n=3: tre due uno via!
n=2: due uno via!
n=1: uno via!
n=0: via!
```

Con `n = 3` si entra in cima e si scende fino in fondo; con `n = 1` si entra al terzo pianerottolo. Con `n = 0` nessun `case`: si va al `default`, che è anche l'ultimo blocco. Senza i commenti `/* fall through */` il programma fa lo stesso, ma gcc con `-Wextra` avvisa tre volte `this statement may fall through`.

### `switch` dentro un ciclo

`break` dentro uno `switch` esce dallo `switch`, **non** dal ciclo che lo contiene: il ciclo va avanti con il giro successivo. Per uscire dal ciclo da dentro uno `switch` serve una variabile di controllo nella condizione del ciclo. `continue` invece, anche se scritto dentro lo `switch`, agisce sul ciclo.

Esempio 1, il `break` non ferma il `while`:

```c
#include <stdio.h>

int main(void)
{
    int i = 0;

    while (i < 4) {
        switch (i) {
        case 2:
            printf("break nello switch, ");
            break;
        default:
            printf("i=%d, ", i);
            break;
        }
        printf("dopo lo switch\n");
        i++;
    }
    printf("fuori dal while, i=%d\n", i);
    return 0;
}
```

Output (verificato):

```
i=0, dopo lo switch
i=1, dopo lo switch
break nello switch, dopo lo switch
i=3, dopo lo switch
fuori dal while, i=4
```

Con `i = 2` il `break` porta subito dopo la `}` dello `switch`: si stampa `dopo lo switch` e il `while` continua.

Esempio 2, il menu: `do-while` perché il menu va mostrato almeno una volta, `switch` per la scelta, una variabile `fine` per uscire dal ciclo (il `break` del `case 0` da solo non basterebbe).

```c
#include <stdio.h>

int main(void)
{
    int scelta;
    int saldo = 100;
    int fine = 0;

    do {
        printf("1) deposita 50  2) preleva 30  3) saldo  0) esci: ");
        if (scanf("%d", &scelta) != 1) {
            return 1;
        }
        switch (scelta) {
        case 1:
            saldo += 50;
            break;
        case 2:
            if (saldo >= 30) {
                saldo -= 30;
            } else {
                printf("saldo insufficiente\n");
            }
            break;
        case 3:
            printf("saldo=%d\n", saldo);
            break;
        case 0:
            fine = 1;
            break;
        default:
            printf("scelta non valida\n");
            break;
        }
    } while (!fine);
    printf("ciao, saldo finale %d\n", saldo);
    return 0;
}
```

Con le scelte `3 2 2 2 2 9 1 3 0`:

| scelta | `case` | `saldo` | stampa (oltre al menu) |
| --- | --- | --- | --- |
| 3 | `case 3` | 100 | `saldo=100` |
| 2 | `case 2` | 70 | |
| 2 | `case 2` | 40 | |
| 2 | `case 2` | 10 | |
| 2 | `case 2`, `10 >= 30` falso | 10 | `saldo insufficiente` |
| 9 | `default` | 10 | `scelta non valida` |
| 1 | `case 1` | 60 | |
| 3 | `case 3` | 60 | `saldo=60` |
| 0 | `case 0`: `fine = 1` | 60 | |

Poi `!fine` vale 0, il `do-while` esce e stampa `ciao, saldo finale 60` (verificato). È lo schema del menu della prova al calcolatore.

## Metodo

**Tracciare uno `switch`.**
1. Calcola il valore dell'espressione.
2. Scorri i `case` e trova quello uguale, ovunque sia (anche dopo il `default`). Se non c'è, vai a `default`, ovunque sia scritto; se non c'è nemmeno quello, lo `switch` non fa niente.
3. Da lì esegui **tutto** verso il basso, ignorando le etichette `case` e `default` che incontri.
4. Fermati al primo `break` o alla `}` di chiusura.
5. Se lo `switch` è in un ciclo, una riga della tabella per giro: valore, etichetta di ingresso, blocchi eseguiti, variabili dopo.

**Scrivere uno `switch`.**
1. Controlla che la scelta dipenda da un solo valore intero o carattere. Se ci sono intervalli larghi o confronti, usa gli `if`.
2. Un `case` per valore, con i valori dello stesso gruppo uno sotto l'altro.
3. `break` alla fine di **ogni** gruppo, `default` per tutto il resto, anche solo per segnalare un input non valido.

**Da `switch` a `if-else`.** Ogni gruppo di `case` diventa una condizione con **||**: `case 3: case 4: case 5:` diventa `if (x <mark> 3 || x </mark> 4 || x == 5)`, `default` diventa l'`else` finale. Con un fall-through fra due gruppi il blocco del primo va ripetuto in testa al secondo.

**Da `if-else` a `switch`.** Si può solo se ogni condizione è un'uguaglianza **==** sulla stessa variabile intera (o un `||` di uguaglianze). Ogni uguaglianza diventa un `case`, ogni ramo finisce con `break`, l'`else` finale diventa `default`.

## Esempi svolti a lezione

### Lo `switch` su `numero`

(<span class="src">slide 24-26</span>) La slide mostra lo `switch` su una variabile intera `numero` ("in questo caso l'espressione è costituita dal solo identificatore della variabile") e fa due domande. Sulla slide `printf(”Invalido")` apre la stringa con una virgoletta tipografica: non compila. Versione completa e corretta, con `\n` in ogni stampa:

```c
#include <stdio.h>

int main(void)
{
    int numero;

    if (scanf("%d", &numero) != 1) {
        return 1;
    }
    switch (numero) {
    case 0:
        printf("Nessuno\n");
        break;
    case 1:
        printf("Uno\n");
        break;
    case 2:
        printf("Due\n");
        break;
    case 3:
    case 4:
    case 5:
        printf("Valore positivo piccolo\n");
        break;
    default:
        printf("Invalido\n");
        break;
    }
    return 0;
}
```

| `numero` | output |
| --- | --- |
| 0 | `Nessuno` |
| 1 | `Uno` |
| 3, 4, 5 | `Valore positivo piccolo` |
| 6 | `Invalido` |
| -1 | `Invalido` |

(verificati)

**Q1: cosa succede se `numero` vale 3?** Si entra da `case 3:`, che è vuoto, si cade in `case 4:` e `case 5:`, anch'essi vuoti, e si arriva al `printf`: stampa `Valore positivo piccolo`, poi il `break` esce.

**Q2: e se vale -1?** Nessun `case` corrisponde: si esegue `default` e stampa `Invalido`. Lo stesso per 6 o per 1000.

### Lettura e categorizzazione di un numero

(<span class="src">slide 27</span>) Il programma della slide legge un "numero piccolo intero positivo" e lo classifica. I commenti della slide dicono: 0 dà "Zero", 1 dà "Uno", da 1 a 3 "piccolo", 4, 5 e oltre "grande". Il codice **non fa questo**, ed è un ottimo esercizio di tracing. Codice della slide, con il controllo di `scanf` e il commento `/* fall through */` che rende esplicita la caduta (senza, gcc con `-Wextra` avvisa `this statement may fall through`):

```c
#include <stdio.h>

int main(void)
{
    int Valore;

    printf("Inserisci numero piccolo intero positivo\n");
    if (scanf("%d", &Valore) != 1) {
        return 1;
    }
    switch (Valore) {
    case 0: printf("Zero\n"); break;
    case 1: printf("Uno\n");
        /* fall through */
    case 2:
    case 3: printf("Piccolo\n"); break;
    case 4:
    case 5:
    default: printf("Invalido\n");
    }
    return 0;
}
```

Cosa stampa davvero, dopo la richiesta (verificato):

| `Valore` | ingresso | blocchi eseguiti | output |
| --- | --- | --- | --- |
| 0 | `case 0` | `printf("Zero\n")`, `break` | `Zero` |
| 1 | `case 1` | `printf("Uno\n")`, nessun `break`: cade in `case 2` (vuoto), `case 3`: `printf("Piccolo\n")`, `break` | `Uno` poi `Piccolo` |
| 2 | `case 2` | vuoto, cade in `case 3`: `Piccolo`, `break` | `Piccolo` |
| 3 | `case 3` | `Piccolo`, `break` | `Piccolo` |
| 4, 5 | `case 4` o `case 5` | vuoti, cadono nel `default` | `Invalido` |
| 9, -1 | nessun `case`: `default` | | `Invalido` |

**Le incongruenze della slide**, da segnalare all'esame se chiedono "trova l'errore":
- per 1 stampa **due** righe, perché manca il `break` dopo `printf("Uno\n")`;
- il commento promette "grande" per 4, 5 e oltre, ma non c'è nessun `printf("Grande")`: i `case 4` e `case 5` vuoti portano al `default`, che stampa "Invalido";
- `case 4:` e `case 5:` prima del `default` sono inutili: senza di loro 4 e 5 andrebbero comunque al `default`;
- il commento su `case 2:` ("corpo istruzioni vuote: uso ; è ridondante ma permesso") si riferisce al fatto che un `case` può non avere istruzioni.

### Conteggio di cifre, spazi e altri caratteri

(<span class="src">slide 28-30</span>) Il testo: dalla sequenza di caratteri in standard input, terminata da EOF, contare
- `n02`: cifre 0, 1, 2 (gravi insufficienze);
- `n35`: cifre 3, 4, 5 (insufficienze);
- `n69`: cifre 6, 7, 8, 9 (sufficienze);
- `ns`: spazi, cioè `' '`, `'\t'`, `'\n'`;
- `no`: tutto il resto.

La slide 29 suggerisce di partire dal ciclo di copia con `getchar` di [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/) (`while ((c = getchar()) != EOF) putchar(c);`) e aggiungere i contatori e lo `switch`. Soluzione della slide 30, con una dichiarazione per riga (nella soluzione il contatore degli spazi si chiama `nwhite` e quello degli altri `nother`, e c'è una `int i` mai usata):

```c
#include <stdio.h>

int main(void)
{
    int c;
    int nwhite = 0;
    int nother = 0;
    int n02 = 0;
    int n35 = 0;
    int n69 = 0;

    while ((c = getchar()) != EOF) {
        switch (c) {
        case '0': case '1': case '2':
            n02++;
            break;
        case '3': case '4': case '5':
            n35++;
            break;
        case '6': case '7': case '8': case '9':
            n69++;
            break;
        case ' ': case '\t': case '\n':
            nwhite++;
            break;
        default:
            nother++;
            break;
        }
    }
    printf("\n---------------\n");
    printf("Gravi Insufficienze=%d\n", n02);
    printf("Insufficienze=%d\n", n35);
    printf("Sufficienze=%d\n", n69);
    printf("white space=%d\n", nwhite);
    printf("other=%d\n", nother);
    return 0;
}
```

Con l'input della slide, `02a 3A` seguito subito da EOF (nessun invio dopo la `A`):

| carattere | `case` | contatore |
| --- | --- | --- |
| `0` | `'0'` | `n02` = 1 |
| `2` | `'2'` | `n02` = 2 |
| `a` | `default` | `nother` = 1 |
| spazio | `' '` | `nwhite` = 1 |
| `3` | `'3'` | `n35` = 1 |
| `A` | `default` | `nother` = 2 |

Output (verificato):

```

---------------
Gravi Insufficienze=2
Insufficienze=1
Sufficienze=0
white space=1
other=2
```

Corrisponde ai valori attesi della slide 28 (`n02=2`, `n35=1`, `n69=0`, `ns=1`, `no=2`). Se l'input si scrive da tastiera e si preme invio prima di EOF, l'a capo è un carattere in più e `white space` diventa 2.

Perché funziona: `c` è un `int` ma contiene il codice ASCII del carattere, e `'0'`, `'\t'` sono costanti intere (48, 9). Lo `switch` confronta numeri. I `case` sullo stesso rigo sono la stessa cosa dei `case` uno sotto l'altro. Il `break` qui esce solo dallo `switch`: il `while` prosegue con il carattere successivo.

Variante sullo stesso schema, contare le vocali (maiuscole e minuscole) e le altre lettere, ignorando spazi e a capo:

```c
#include <stdio.h>

int main(void)
{
    int c;
    int vocali = 0;
    int altre = 0;

    while ((c = getchar()) != EOF) {
        switch (c) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            vocali++;
            break;
        case ' ':
        case '\n':
            break;
        default:
            altre++;
            break;
        }
    }
    printf("vocali=%d altre=%d\n", vocali, altre);
    return 0;
}
```

Con input `Ciao a tutti` (senza invio) le vocali sono `i a o a u i`, le altre `C t t t`: stampa `vocali=6 altre=4` (verificato). Il `case ' ': case '\n': break;` ha un blocco fatto solo di `break`: serve a non far finire spazi e a capo nel `default`.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Switch (esercizi)](/uni/prog-1/switch-esercizi/).

## Errori tipici

- Dimenticare il `break`: l'esecuzione cade nel `case` successivo (il caso 1 della slide 27).
- Pensare che `case 4: case 5:` vuoti prima del `default` facciano qualcosa di diverso dal `default`.
- Credere che lo `switch` provi i `case` in ordine numerico, o che il `default` debba stare in fondo: si entra dall'etichetta uguale ovunque sia, e un `default` in mezzo cade nei `case` sotto di lui.
- Usare uno `switch` su un `float`, su una stringa o con un `case` variabile: non compila.
- Cercare di scrivere un intervallo in un `case` (`case 1..5`, `case x > 3`): non esiste in C standard, si elencano i valori o si usa un `if`.
- Scrivere `case 1:` quando si legge un carattere: il carattere `'1'` vale 49, non 1.
- Credere che `break` dentro uno `switch` dentro un ciclo esca dal ciclo: esce solo dallo `switch`.
- Virgolette tipografiche copiate dalle slide (`”Invalido"`): non sono `"` e il programma non compila.

## Domande

- Di che tipo deve essere l'espressione di uno `switch`? E i valori dei `case`?

- Come si esegue uno `switch`? Cosa succede dopo il blocco del `case` scelto, se manca il `break`?

- Cosa fa `default`, ed è obbligatorio?

- Come si fa a eseguire lo stesso blocco per i valori 3, 4 e 5?

- Nell'esempio della slide 24, cosa stampa lo `switch` se `numero` vale 3? E se vale -1?

- Cosa stampa lo `switch` della slide 27 con `Valore` uguale a 1? E con 4?

- In quali casi uno `switch` non può sostituire una catena di `if-else`?

- Un `break` dentro uno `switch` dentro un `while`: da cosa esce?

- Perché nello `switch` sui caratteri letti con `getchar` si scrive `case '1':` e non `case 1:`?

- Se il `default` è scritto in mezzo ai `case` e non ha `break`, cosa succede quando nessun `case` corrisponde?

- Come esci da un ciclo `do-while` di menu quando la scelta "esci" sta in un `case` dello `switch`?

- Quando un fall-through è voluto, come lo segnali a gcc e a chi legge?

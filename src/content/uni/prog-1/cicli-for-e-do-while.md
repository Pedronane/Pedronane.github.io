---
title: Cicli for e do-while
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-02
lezioni: []
ordine: 8
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione fra settembre e ottobre, deck 3.3: <span class="src">slide 3-15</span> (`for` e `do-while`), <span class="src">slide 32-34</span> (`break` e `continue`), <span class="src">slide 35-37</span> (Böhm-Jacopini). Prima: [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/). In mezzo al deck, slide 16-31: [Switch](/uni/prog-1/switch/).

> [!abstract] Per l'esame
> - **Saper enunciare**: sintassi e semantica di `for` e `do-while`, l'equivalenza fra `for` e `while`, quante volte gira al minimo un `do-while`, cosa fanno `break` e `continue`, cosa dice il teorema di Böhm-Jacopini.
> - **Saper fare**: dire quante volte gira un `for` e con che valore esce la variabile di ciclo; tradurre un `for` in `while` e viceversa, anche con `continue` dentro; tracciare `break` e `continue`; contare i giri di due `for` annidati; scegliere il ciclo giusto per un problema.
> - **Dove esce**: nella teorica i tracing "scrivi l'output esatto" sono quasi sempre `for`, spesso annidati (quadrati $N \times N$, conteggio dei giri: vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore il `do-while` è il modo naturale di fare l'input con controllo del range, e il `for` scorre ogni array.

Il filo del deck:

```
while            già visto: valuta, poi esegue
   |
for              stesso ciclo, inizializzazione + condizione + aggiornamento in una riga
   |             utile quando il numero di giri è noto
do-while         esegue, poi valuta: almeno un giro
   |
switch           selezione multipla (nota a parte)
   |
break/continue   uscire dal ciclo, saltare al giro dopo
   |
Böhm-Jacopini    sequenza, if-else e while bastano per ogni algoritmo
```

## Definizioni

**Ciclo `for`** (<span class="src">slide 3-5</span>). Il prof lo presenta come la forma compatta dello schema tipico del `while` con contatore, utile quando **il numero di iterazioni è noto a priori**:

```
contatore = valIniz;                    for (contatore = valIniz;
while (contatore <= valFin) {                contatore <= valFin;
    ... istruzioni da ripetere ...           contatore++) {
    contatore++;                            ... istruzioni da ripetere ...
}                                       }
```

Le tre parti dell'intestazione, separate da `;`:
- **espr1**, l'inizializzazione: eseguita **una sola volta**, prima di tutto;
- **espr2**, la condizione: valutata **all'inizio e a ogni iterazione**, prima del corpo;
- **espr3**, l'aggiornamento: eseguito **a ogni iterazione**, dopo il corpo.

<figure class="fig"><svg role="img" aria-label="Flowchart for" xmlns:xlink="http://www.w3.org/1999/xlink" width="344.16pt" height="399.6pt" viewBox="0 0 344.16 399.6" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f59-figure_1"> <g id="f59-patch_1"> <path d="M 0 399.6 L 344.16 399.6 L 344.16 0 L 0 0 L 0 399.6 z " style="fill: none"/> </g> <g id="f59-axes_1"> <g id="f59-patch_2"> <path d="M 50.112 72.288 L 183.168 72.288 L 183.168 33.48 L 50.112 33.48 L 50.112 72.288 z " clip-path="url(#f59-pf41126840d)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f59-patch_3"> <path d="M 116.64 102.78 L 188.712 138.816 L 116.64 174.852 L 44.568 138.816 L 116.64 102.78 z " clip-path="url(#f59-pf41126840d)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f59-patch_4"> <path d="M 199.8 227.52 L 310.68 227.52 L 310.68 183.168 L 199.8 183.168 L 199.8 227.52 z " clip-path="url(#f59-pf41126840d)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f59-patch_5"> <path d="M 199.8 299.592 L 310.68 299.592 L 310.68 255.24 L 199.8 255.24 L 199.8 299.592 z " clip-path="url(#f59-pf41126840d)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f59-line2d_1"> <path d="M 188.712 138.816 L 255.24 138.816 " clip-path="url(#f59-pf41126840d)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f59-line2d_2"> <path d="M 310.68 277.416 L 330.084 277.416 " clip-path="url(#f59-pf41126840d)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f59-line2d_3"> <path d="M 330.084 277.416 L 330.084 88.92 " clip-path="url(#f59-pf41126840d)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f59-patch_6"> <path d="M 116.64 11.304 Q 116.64 22.392 116.64 31.243932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 27.243932 L 116.64 31.243932 L 114.64 27.243932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f59-text_1"> <!-- espr1 --> <g style="fill: var(--fig-ink)" transform="translate(100.913438 49.139918) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-48"/> <use xlink:href="#f59-DejaVuSerif-56" transform="translate(59.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-53" transform="translate(110.5 0)"/> <use xlink:href="#f59-DejaVuSerif-55" transform="translate(174.515625 0)"/> <use xlink:href="#f59-DejaVuSerif-14" transform="translate(222.3125 0)"/> </g> <!-- inizializzazione --> <g style="fill: var(--fig-ink)" transform="translate(74.283984 62.342926) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-4c"/> <use xlink:href="#f59-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(96.390625 0)"/> <use xlink:href="#f59-DejaVuSerif-5d" transform="translate(128.375 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(181.0625 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(213.046875 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(272.671875 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(304.65625 0)"/> <use xlink:href="#f59-DejaVuSerif-5d" transform="translate(336.640625 0)"/> <use xlink:href="#f59-DejaVuSerif-5d" transform="translate(389.328125 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(442.015625 0)"/> <use xlink:href="#f59-DejaVuSerif-5d" transform="translate(501.640625 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(554.328125 0)"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(586.3125 0)"/> <use xlink:href="#f59-DejaVuSerif-51" transform="translate(646.515625 0)"/> <use xlink:href="#f59-DejaVuSerif-48" transform="translate(710.921875 0)"/> </g> </g> <g id="f59-patch_7"> <path d="M 116.64 72.288 Q 116.64 87.534 116.64 100.543932 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 96.543932 L 116.64 100.543932 L 114.64 96.543932 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f59-text_2"> <!-- espr2 --> <g style="fill: var(--fig-steel)" transform="translate(99.48375 134.732016) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-48"/> <use xlink:href="#f59-DejaVuSerif-56" transform="translate(59.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-53" transform="translate(110.5 0)"/> <use xlink:href="#f59-DejaVuSerif-55" transform="translate(174.515625 0)"/> <use xlink:href="#f59-DejaVuSerif-15" transform="translate(222.3125 0)"/> </g> <!-- ≠ 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(100.764375 149.134359) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-8f7" d="M 678 2894 L 3091 2894 L 3891 3891 L 4281 3572 L 3738 2894 L 4684 2894 L 4684 2394 L 3309 2394 L 2700 1619 L 4684 1619 L 4684 1119 L 2266 1119 L 1459 122 L 1069 441 L 1613 1119 L 678 1119 L 678 1619 L 2047 1619 L 2656 2394 L 678 2394 L 678 2894 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-8f7"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(83.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-13" transform="translate(115.578125 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(179.203125 0)"/> <use xlink:href="#f59-DejaVuSerif-22" transform="translate(210.984375 0)"/> </g> </g> <g id="f59-patch_8"> <path d="M 255.24 138.816 Q 255.24 160.992 255.24 180.931932 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 257.24 176.931932 L 255.24 180.931932 L 253.24 176.931932 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f59-text_3"> <!-- vero --> <g style="fill: var(--fig-accent)" transform="translate(194.256 130.5) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-59"/> <use xlink:href="#f59-DejaVuSerif-48" transform="translate(56.5 0)"/> <use xlink:href="#f59-DejaVuSerif-55" transform="translate(115.6875 0)"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(163.484375 0)"/> </g> </g> <g id="f59-text_4"> <!-- corpo --> <g style="fill: var(--fig-ink)" transform="translate(239.387969 201.599918) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-46"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f59-DejaVuSerif-55" transform="translate(116.203125 0)"/> <use xlink:href="#f59-DejaVuSerif-53" transform="translate(164 0)"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(228.015625 0)"/> </g> <!-- del ciclo --> <g style="fill: var(--fig-ink)" transform="translate(231.967266 214.802926) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-47"/> <use xlink:href="#f59-DejaVuSerif-48" transform="translate(64.015625 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(123.203125 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(155.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-46" transform="translate(186.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(242.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-46" transform="translate(274.953125 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(330.953125 0)"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(362.9375 0)"/> </g> </g> <g id="f59-patch_9"> <path d="M 255.24 227.52 Q 255.24 241.38 255.24 253.003932 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 257.24 249.003932 L 255.24 253.003932 L 253.24 249.003932 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f59-text_5"> <!-- espr3 --> <g style="fill: var(--fig-ink)" transform="translate(239.513438 273.672348) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-48"/> <use xlink:href="#f59-DejaVuSerif-56" transform="translate(59.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-53" transform="translate(110.5 0)"/> <use xlink:href="#f59-DejaVuSerif-55" transform="translate(174.515625 0)"/> <use xlink:href="#f59-DejaVuSerif-16" transform="translate(222.3125 0)"/> </g> <!-- aggiornamento --> <g style="fill: var(--fig-ink)" transform="translate(212.863359 286.874496) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-44"/> <use xlink:href="#f59-DejaVuSerif-4a" transform="translate(59.625 0)"/> <use xlink:href="#f59-DejaVuSerif-4a" transform="translate(123.640625 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(187.65625 0)"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(219.640625 0)"/> <use xlink:href="#f59-DejaVuSerif-55" transform="translate(279.84375 0)"/> <use xlink:href="#f59-DejaVuSerif-51" transform="translate(327.640625 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(392.046875 0)"/> <use xlink:href="#f59-DejaVuSerif-50" transform="translate(451.671875 0)"/> <use xlink:href="#f59-DejaVuSerif-48" transform="translate(546.5 0)"/> <use xlink:href="#f59-DejaVuSerif-51" transform="translate(605.6875 0)"/> <use xlink:href="#f59-DejaVuSerif-57" transform="translate(670.09375 0)"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(710.28125 0)"/> </g> </g> <g id="f59-patch_10"> <path d="M 330.084 88.92 Q 224.748 88.92 121.648068 88.92 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 125.648068 90.92 L 121.648068 88.92 L 125.648068 86.92 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f59-text_6"> <!-- si torna a valutare espr2 --> <g style="fill: var(--fig-axis)" transform="translate(199.788437 80.604) scale(0.1 -0.1)"> <defs> <path id="f59-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-15" d="M 1050 3553 L 700 3553 L 862 4384 Q 1231 4563 1589 4656 Q 1947 4750 2272 4750 Q 3000 4750 3353 4397 Q 3706 4044 3587 3438 Q 3456 2753 2312 1800 Q 2225 1728 2178 1691 L 772 513 L 2719 513 L 2831 1088 L 3197 1088 L 2984 0 L -25 0 L 41 341 L 1731 1753 Q 2291 2222 2567 2614 Q 2844 3006 2928 3438 Q 3019 3909 2825 4175 Q 2631 4441 2200 4441 Q 1753 4441 1467 4219 Q 1181 3997 1050 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-Italic-56"/> <use xlink:href="#f59-DejaVuSerif-Italic-4c" transform="translate(51.3125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(83.296875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-57" transform="translate(115.078125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(155.265625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-55" transform="translate(215.46875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-51" transform="translate(263.265625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(327.671875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(387.296875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(419.078125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(478.703125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-59" transform="translate(510.484375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(566.984375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4f" transform="translate(626.609375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-58" transform="translate(658.59375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-57" transform="translate(723 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(763.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-55" transform="translate(822.8125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-48" transform="translate(870.609375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(929.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-48" transform="translate(961.578125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-56" transform="translate(1020.765625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-53" transform="translate(1072.078125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-55" transform="translate(1136.09375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-15" transform="translate(1183.890625 0)"/> </g> </g> <g id="f59-patch_11"> <path d="M 116.64 174.852 Q 116.64 264.942 116.64 352.795932 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 348.795932 L 116.64 352.795932 L 114.64 348.795932 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f59-text_7"> <!-- falso --> <g style="fill: var(--fig-steel)" transform="translate(62.504531 255.24) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-49"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(37.015625 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(96.640625 0)"/> <use xlink:href="#f59-DejaVuSerif-56" transform="translate(128.625 0)"/> <use xlink:href="#f59-DejaVuSerif-52" transform="translate(179.9375 0)"/> </g> </g> <g id="f59-text_8"> <!-- istruzione dopo il ciclo --> <g style="fill: var(--fig-axis)" transform="translate(53.495703 371.664) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-Italic-4c"/> <use xlink:href="#f59-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-47" transform="translate(535.9375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(599.953125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-53" transform="translate(660.15625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(724.171875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(784.375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4c" transform="translate(816.15625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4f" transform="translate(848.140625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(880.125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-46" transform="translate(911.90625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4c" transform="translate(967.90625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-46" transform="translate(999.890625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4f" transform="translate(1055.890625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(1087.875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f59-pf41126840d"> <rect x="5.76" y="5.76" width="332.64" height="388.08"/> </clipPath> </defs> </svg></figure>

Come nel `while`, se la condizione è falsa subito il corpo si esegue zero volte.

**Equivalenza `for`-`while`** (<span class="src">slide 9</span>). L'intestazione può contenere espressioni qualunque, e

```
for (espr1; espr2; espr3) {          espr1;
    istruzioni                       while (espr2) {
}                                        istruzioni
                                         espr3;
                                     }
```

fanno la stessa cosa. Unica eccezione: un `continue` nel corpo (vedi sotto). Il consiglio della slide: nel `for` usare espr1 **solo** per inizializzare la variabile di ciclo, espr2 **solo** per la condizione di uscita, espr3 **solo** per incrementarla o decrementarla. Il C permette di più, ma poi il ciclo non si legge.

Si può anche lasciare vuota una parte: `for (; i < n; )` è un `while`; `for (;;)` senza condizione è un ciclo infinito (la condizione mancante vale vero), da cui si esce solo con `break` o `return`.

**Ciclo `do-while`** (<span class="src">slide 13</span>).

```
do {
    blocco istruzioni
} while (espressione);
```

Prima si esegue il corpo, **poi** si valuta la condizione: se è vera si ripete, se è falsa si esce. Quindi il corpo si esegue **almeno una volta**, anche se la condizione è falsa dall'inizio. Il `;` dopo la parentesi è obbligatorio, a differenza di `while` e `for`.

<figure class="fig"><svg role="img" aria-label="Flowchart do-while" xmlns:xlink="http://www.w3.org/1999/xlink" width="316.44pt" height="344.16pt" viewBox="0 0 316.44 344.16" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f60-figure_1"> <g id="f60-patch_1"> <path d="M 0 344.16 L 316.44 344.16 L 316.44 0 L 0 0 L 0 344.16 z " style="fill: none"/> </g> <g id="f60-axes_1"> <g id="f60-patch_2"> <path d="M 61.2 100.008 L 172.08 100.008 L 172.08 50.112 L 61.2 50.112 L 61.2 100.008 z " clip-path="url(#f60-pa435e0b5ac)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-patch_3"> <path d="M 116.64 127.728 L 188.712 163.764 L 116.64 199.8 L 44.568 163.764 L 116.64 127.728 z " clip-path="url(#f60-pa435e0b5ac)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f60-line2d_1"> <path d="M 188.712 163.764 L 249.696 163.764 " clip-path="url(#f60-pa435e0b5ac)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f60-line2d_2"> <path d="M 249.696 163.764 L 249.696 33.48 " clip-path="url(#f60-pa435e0b5ac)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f60-patch_4"> <path d="M 116.64 11.304 Q 116.64 30.708 116.64 47.875932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 43.875932 L 116.64 47.875932 L 114.64 43.875932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_1"> <!-- corpo --> <g style="fill: var(--fig-ink)" transform="translate(100.787969 71.315918) scale(0.11 -0.11)"> <defs> <path id="f60-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-46"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f60-DejaVuSerif-55" transform="translate(116.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-53" transform="translate(164 0)"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(228.015625 0)"/> </g> <!-- del ciclo --> <g style="fill: var(--fig-ink)" transform="translate(93.367266 84.518926) scale(0.11 -0.11)"> <defs> <path id="f60-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-47"/> <use xlink:href="#f60-DejaVuSerif-48" transform="translate(64.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-4f" transform="translate(123.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-3" transform="translate(155.1875 0)"/> <use xlink:href="#f60-DejaVuSerif-46" transform="translate(186.96875 0)"/> <use xlink:href="#f60-DejaVuSerif-4c" transform="translate(242.96875 0)"/> <use xlink:href="#f60-DejaVuSerif-46" transform="translate(274.953125 0)"/> <use xlink:href="#f60-DejaVuSerif-4f" transform="translate(330.953125 0)"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(362.9375 0)"/> </g> </g> <g id="f60-patch_5"> <path d="M 116.64 100.008 Q 116.64 113.868 116.64 125.491932 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 121.491932 L 116.64 125.491932 L 114.64 121.491932 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_2"> <!-- condizione --> <g style="fill: var(--fig-steel)" transform="translate(83.935312 159.680484) scale(0.12 -0.12)"> <defs> <path id="f60-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-46"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f60-DejaVuSerif-51" transform="translate(116.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-47" transform="translate(180.609375 0)"/> <use xlink:href="#f60-DejaVuSerif-4c" transform="translate(244.625 0)"/> <use xlink:href="#f60-DejaVuSerif-5d" transform="translate(276.609375 0)"/> <use xlink:href="#f60-DejaVuSerif-4c" transform="translate(329.296875 0)"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(361.28125 0)"/> <use xlink:href="#f60-DejaVuSerif-51" transform="translate(421.484375 0)"/> <use xlink:href="#f60-DejaVuSerif-48" transform="translate(485.890625 0)"/> </g> <!-- ≠ 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(100.764375 174.082828) scale(0.12 -0.12)"> <defs> <path id="f60-DejaVuSerif-8f7" d="M 678 2894 L 3091 2894 L 3891 3891 L 4281 3572 L 3738 2894 L 4684 2894 L 4684 2394 L 3309 2394 L 2700 1619 L 4684 1619 L 4684 1119 L 2266 1119 L 1459 122 L 1069 441 L 1613 1119 L 678 1119 L 678 1619 L 2047 1619 L 2656 2394 L 678 2394 L 678 2894 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-8f7"/> <use xlink:href="#f60-DejaVuSerif-3" transform="translate(83.796875 0)"/> <use xlink:href="#f60-DejaVuSerif-13" transform="translate(115.578125 0)"/> <use xlink:href="#f60-DejaVuSerif-3" transform="translate(179.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-22" transform="translate(210.984375 0)"/> </g> </g> <g id="f60-patch_6"> <path d="M 249.696 33.48 Q 184.554 33.48 121.648068 33.48 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 125.648068 35.48 L 121.648068 33.48 L 125.648068 31.48 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_3"> <!-- vero --> <g style="fill: var(--fig-accent)" transform="translate(194.256 155.448) scale(0.11 -0.11)"> <defs> <path id="f60-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-59"/> <use xlink:href="#f60-DejaVuSerif-48" transform="translate(56.5 0)"/> <use xlink:href="#f60-DejaVuSerif-55" transform="translate(115.6875 0)"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(163.484375 0)"/> </g> </g> <g id="f60-text_4"> <!-- si ripete il corpo --> <g style="fill: var(--fig-axis)" transform="translate(160.83325 25.164) scale(0.1 -0.1)"> <defs> <path id="f60-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-56"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(51.3125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(83.296875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-55" transform="translate(115.078125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(162.875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-53" transform="translate(194.859375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(258.875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-57" transform="translate(318.0625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(358.25 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(417.4375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(449.21875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4f" transform="translate(481.203125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(513.1875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(544.96875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(600.96875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-55" transform="translate(661.171875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-53" transform="translate(708.96875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(772.984375 0)"/> </g> </g> <g id="f60-patch_7"> <path d="M 116.64 199.8 Q 116.64 249.696 116.64 297.355932 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 293.355932 L 116.64 297.355932 L 114.64 293.355932 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f60-text_5"> <!-- falso --> <g style="fill: var(--fig-steel)" transform="translate(62.504531 249.696) scale(0.11 -0.11)"> <defs> <path id="f60-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-49"/> <use xlink:href="#f60-DejaVuSerif-44" transform="translate(37.015625 0)"/> <use xlink:href="#f60-DejaVuSerif-4f" transform="translate(96.640625 0)"/> <use xlink:href="#f60-DejaVuSerif-56" transform="translate(128.625 0)"/> <use xlink:href="#f60-DejaVuSerif-52" transform="translate(179.9375 0)"/> </g> </g> <g id="f60-text_6"> <!-- istruzione dopo il ciclo --> <g style="fill: var(--fig-axis)" transform="translate(53.495703 316.224) scale(0.11 -0.11)"> <defs> <path id="f60-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f60-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f60-DejaVuSerif-Italic-4c"/> <use xlink:href="#f60-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-47" transform="translate(535.9375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(599.953125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-53" transform="translate(660.15625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(724.171875 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(784.375 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(816.15625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4f" transform="translate(848.140625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-3" transform="translate(880.125 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(911.90625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4c" transform="translate(967.90625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-46" transform="translate(999.890625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-4f" transform="translate(1055.890625 0)"/> <use xlink:href="#f60-DejaVuSerif-Italic-52" transform="translate(1087.875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f60-pa435e0b5ac"> <rect x="5.76" y="5.76" width="304.92" height="332.64"/> </clipPath> </defs> </svg></figure>

**`break`** (<span class="src">slide 32</span>). Dentro un `while`, `for`, `do-while` o `switch` provoca l'**uscita immediata** da quell'istruzione. L'esecuzione continua con l'istruzione che la segue. Con due cicli annidati, `break` esce solo da quello più interno che lo contiene.

**`continue`** (<span class="src">slide 33</span>). Dentro un `while`, `for` o `do-while` salta le istruzioni rimanenti del corpo e passa all'**iterazione successiva**. Non si applica allo `switch`. Dove va il salto:
- nel `while` e nel `do-while`, alla valutazione della condizione;
- nel `for`, all'**aggiornamento** espr3, e poi alla condizione.

**Teorema di Böhm-Jacopini** (<span class="src">slide 35-37</span>). Il prof parte da tre domande: esistono algoritmi che non si possono scrivere con sequenze, `if-else` e `while`? Esistono strutture capaci di codificare qualsiasi algoritmo? Ne esistono di più potenti? La risposta, in teoria: **sequenza**, **selezione** (`if-else`) e **ciclo** (`while`) sono **complete**, cioè bastano a codificare qualsiasi algoritmo espresso con un diagramma di flusso.

Con le parole della slide 37: le strutture `if-else` e `while` sono equivalenti a quelle del linguaggio assemblatore, che modifica direttamente o sotto condizione il registro contatore di programma (PC, i salti visti in [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/)). Quello che si scrive con una si scrive con l'altra. E sono equivalenti alle strutture di controllo di qualsiasi altro linguaggio.

Conseguenza pratica: `for`, `do-while` e `switch` non aggiungono potenza, solo comodità. Ognuno si riscrive con `while` e `if-else`.

## Concetti

### Quante volte gira un `for`

Per il caso tipico `for (i = a; i < b; i++)`, con la variabile non toccata nel corpo:
- il corpo gira $b - a$ volte (zero se $a \geq b$);
- si esce con `i` uguale a $b$, il primo valore che rende falsa la condizione.

Con `i <= b` i giri diventano $b - a + 1$ e si esce con $b + 1$. Con passo diverso da 1, per esempio `i += 3`, conviene elencare i valori: `for (i = 10; i > 0; i -= 3)` vede 10, 7, 4, 1 ed esce con $-2$.

**Attenzione** (<span class="src">slide 11-12</span>): se il corpo modifica la variabile di ciclo, l'intestazione da sola non dice più niente. La regola della slide è non farlo mai.

### Quale ciclo scegliere

```
numero di giri noto prima di partire         for       (contare, scorrere 1..N)
si ripete finché vale una condizione,        while     (sentinella, lettura fino a EOF,
  e può non servire nemmeno un giro                     Euclide)
il corpo va eseguito almeno una volta,       do-while  (chiedere un input finché
  e la condizione dipende da quel giro                  non è valido, menu)
```

Sono tutti equivalenti, quindi la scelta è di leggibilità. Il `do-while` è giusto quando il dato da controllare nasce **dentro** il corpo: con un `while` si dovrebbe leggere una volta prima del ciclo e una volta dentro, o inventare un valore iniziale finto.

### `do-while` come `while`

```
do {                          corpo
    corpo                     while (cond) {
} while (cond);                   corpo
                              }
```

Il corpo scritto una volta prima del `while` fa il "giro garantito". Al contrario, un `while` si scrive come `do-while` solo con un `if` davanti che controlla la condizione, altrimenti il primo giro avviene anche quando non dovrebbe.

## Metodo

**Tracciare un `for`.**
1. Esegui espr1 una volta e scrivi la riga iniziale della tabella.
2. Valuta espr2. Se è falsa ti fermi: quella riga dà i valori di uscita.
3. Esegui il corpo, poi espr3, e scrivi una riga con i valori **dopo** l'aggiornamento.
4. Torna al passo 2.

Con `break` ti fermi subito e **non** esegui espr3; con `continue` salti il resto del corpo ma espr3 **sì**.

**Due `for` annidati.** Il ciclo interno riparte da capo a ogni giro di quello esterno. Il totale dei giri del corpo interno è la somma, su ogni giro esterno, dei giri interni: con estremi fissi è il prodotto ($N \cdot M$), con `j` che parte da `i` è $N + (N - 1) + \ldots + 1 = N (N + 1) / 2$.

**Tradurre `for` in `while`.**
1. espr1 diventa un'istruzione prima del `while`.
2. espr2 diventa la condizione del `while`.
3. espr3 diventa l'**ultima** istruzione del corpo.
4. Se nel corpo c'è un `continue`, prima di ogni `continue` va ripetuta espr3, altrimenti il `while` non aggiorna più la variabile e può non finire.

**Tradurre `while` in `for`.** L'inizializzazione prima del ciclo va in espr1, l'aggiornamento in fondo al corpo va in espr3. Se non c'è un aggiornamento "pulito" in fondo (sentinella, lettura con `getchar`) il `while` è già la scelta giusta.

**Input con controllo del range.**

```
do {
    stampa la richiesta
    leggi n (e controlla che scanf abbia letto)
} while (n fuori dal range);
```

## Esempi svolti a lezione

### Somma di n numeri in input, da `while` a `for`

(<span class="src">slide 6</span> e <span class="src">slide 8</span>) La slide trasforma il ciclo con contatore in un `for`. Il codice della slide legge con `scanf(x);`, che è sbagliato: `scanf` vuole la stringa di formato e l'**indirizzo** della variabile, cioè `scanf("%d", &x)` (gcc rifiuta `scanf(x)`: passa un `int` dove serve una stringa). Versione corretta con il controllo dell'input:

```c
#include <stdio.h>

int main(void)
{
    int x;
    int n = 5;
    int somma = 0;
    int contatore;

    for (contatore = 1; contatore <= n; contatore++) {
        if (scanf("%d", &x) != 1) {
            printf("input non valido\n");
            return 1;
        }
        somma = somma + x;
    }
    printf("somma=%d\n", somma);
    return 0;
}
```

Con input `4 7 -2 10 1` stampa `somma=20` (verificato). Nel `while` della slide c'erano `int contatore = 1;` prima del ciclo e `contatore=contatore+1;` in fondo al corpo: nel `for` finiscono rispettivamente in espr1 ed espr3, e la dichiarazione resta senza valore iniziale.

### Somma dei primi 5 interi con il `for`

(<span class="src">slide 7</span>) La slide riprende il programma `while` di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/) e chiede di riscriverlo con il `for`:

```c
#include <stdio.h>

int main(void)
{
    int Somma = 0;
    int n = 5;
    int i;

    for (i = 1; i <= n; i++) {
        Somma += i;
    }
    printf("Somma= %d\n", Somma);
    return 0;
}
```

Output `Somma= 15`, come prima. `i=1;` prima del `while` diventa espr1, `i <= n` resta la condizione, `i++;` in fondo al corpo diventa espr3. L'inizializzazione `Somma=0` resta fuori: non è la variabile di ciclo.

### Quante volte gira

(<span class="src">slide 10-12</span>) Tre domande in fila.

**Slide 10.** `for (i=0; i<10; i++) printf("Hello World!\n");` stampa la riga **10 volte**: `i` vale 0, 1, …, 9, ed esce con `i` a 10. La slide scrive le virgolette tipografiche (`“Hello World!\n”`): in C le stringhe vogliono le virgolette dritte `"`, con quelle curve il programma non compila.

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i < 10; i++) {
        printf("Hello World!\n");
    }
    printf("i=%d\n", i);
    return 0;
}
```

Stampa 10 volte `Hello World!` e poi `i=10` (verificato).

**Slide 11.** Stesso ciclo, corpo qualunque: 10 volte, **se** il corpo non tocca `i`.

**Slide 12.** Con `i++;` anche dentro il corpo, ogni giro aumenta `i` di 2:

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i < 10; i++) {
        printf("%d ", i);
        i++;
    }
    printf("\nfine: i=%d\n", i);
    return 0;
}
```

Output (verificato):

```
0 2 4 6 8 
fine: i=10
```

Il corpo gira **5** volte, non 10. È il punto della slide: guardando solo l'intestazione non si può rispondere, quindi la variabile di ciclo non si modifica nel corpo.

### Somma con sentinella 0, con il `do-while`

(<span class="src">slide 14</span>) La slide mostra il programma con il `while` (lo stesso di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)) e chiede di riscriverlo con il `do-while`. Con il `do-while` la lettura sta una volta sola, dentro il corpo:

```c
#include <stdio.h>

int main(void)
{
    int Somma = 0;
    int dato = 0;
    int letti;

    do {
        letti = scanf("%d", &dato);
        if (letti == 1) {
            Somma += dato;
        }
    } while (letti == 1 && dato != 0);
    printf("Somma= %d\n", Somma);
    return 0;
}
```

| giro | letto | `Somma` | `letti == 1 && dato != 0` |
| --- | --- | --- | --- |
| 1 | 4 | 4 | vero |
| 2 | 7 | 11 | vero |
| 3 | -2 | 9 | vero |
| 4 | 10 | 19 | vero |
| 5 | 0 | 19 | falso |

Con input `4 7 -2 10 0 99` stampa `Somma= 19`; con input `0` stampa `Somma= 0`; con input vuoto anche `Somma= 0` (verificati). La sentinella **viene sommata**, ma sommare 0 non cambia niente: per questo qui il `do-while` funziona senza un `if` in più. Con una sentinella diversa, per esempio $-1$, andrebbe esclusa con un `if (dato != -1)`.

La slide 14 dichiara `int Somma,dato;` senza inizializzare `Somma` (il commento "inizializzazione?" e "Manca qualcosa?" puntano proprio lì) e non controlla `scanf`: a fine input senza lo 0 il ciclo non finirebbe più.

### Conteggio dei caratteri, con il `do-while`

(<span class="src">slide 15</span>) Il programma della slide conta i caratteri in input con `while ((c = getchar()) != EOF) ++nc;`, come in [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/). Riscritto con il `do-while`, il carattere si legge nel corpo e il controllo di EOF va fatto **due volte**:

```c
#include <stdio.h>

int main(void)
{
    int c;
    int nc = 0;

    do {
        c = getchar();
        if (c != EOF) {
            ++nc;
        }
    } while (c != EOF);
    printf("\nNumero Caratteri=%d\n", nc);
    return 0;
}
```

Con input `ciao` più invio stampa `Numero Caratteri=5` (l'a capo è un carattere); con input vuoto `Numero Caratteri=0`. Senza l'`if`, cioè con `++nc;` e basta, conterebbe anche l'EOF: 6 e 1 (verificati entrambi).

Il conteggio dei caratteri è l'esempio in cui il `do-while` **non** conviene: l'input può essere vuoto, quindi il giro garantito non serve, e la versione `while` è più corta e più chiara. È la risposta da dare se all'esame chiedono quale dei due è meglio.

### `break` e `continue` nel `for`

(<span class="src">slide 34</span>) Il programma della slide ha `if (i == 3) break;` e, commentata, la variante con `continue`.

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++) {
        if (i == 3) break;
        printf("i=%d\n", i);
    }
    printf("Fine: i=%d\n", i);
    return 0;
}
```

Output con `break` (verificato):

```
i=1
i=2
Fine: i=3
```

Con `i == 3` si esce subito dal `for`: niente `printf`, niente `i++`. Per questo `i` vale 3 e non 4.

Con `continue` al posto di `break`:

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 1; i <= 10; i++) {
        if (i == 3) continue;
        printf("i=%d\n", i);
    }
    printf("Fine: i=%d\n", i);
    return 0;
}
```

stampa `i=1`, `i=2`, poi salta il 3 e prosegue da `i=4` fino a `i=10`, e alla fine `Fine: i=11` (verificato). Il `continue` salta il `printf` ma non l'`i++` di espr3, quindi il ciclo arriva in fondo normalmente. La slide stampa `"Fine: i=%d"` senza `\n` finale.

## Esercizi tipo esame

**Esercizio 1.** Scrivi l'output esatto e quante volte si esegue il corpo.

```c
#include <stdio.h>

int main(void)
{
    int i;
    int s = 0;

    for (i = 10; i > 0; i -= 3) {
        s += i;
    }
    printf("i=%d s=%d\n", i, s);
    return 0;
}
```

> [!example]- Soluzione
> | giro | `i` nel corpo | `s` | `i` dopo espr3 |
> | --- | --- | --- | --- |
> | 1 | 10 | 10 | 7 |
> | 2 | 7 | 17 | 4 |
> | 3 | 4 | 21 | 1 |
> | 4 | 1 | 22 | -2 |
> | | $-2 > 0$ falso | | |
>
> 4 giri. Output: `i=-2 s=22` (verificato).

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 5;
    int giri_while = 0;
    int giri_do = 0;

    while (x < 5) {
        x++;
        giri_while++;
    }
    printf("while: x=%d giri=%d\n", x, giri_while);

    do {
        x++;
        giri_do++;
    } while (x < 5);
    printf("do-while: x=%d giri=%d\n", x, giri_do);
    return 0;
}
```

> [!example]- Soluzione
> ```
> while: x=5 giri=0
> do-while: x=6 giri=1
> ```
> (verificato). La condizione $x < 5$ è falsa da subito: il `while` non entra, il `do-while` fa comunque un giro, porta `x` a 6 e solo dopo controlla.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i < 10; i++) {
        if (i % 3 == 0) continue;
        if (i > 7) break;
        printf("%d ", i);
    }
    printf("\ni=%d\n", i);
    return 0;
}
```

> [!example]- Soluzione
> | `i` | `i % 3` | cosa succede |
> | --- | --- | --- |
> | 0 | 0 | `continue` |
> | 1 | 1 | stampa 1 |
> | 2 | 2 | stampa 2 |
> | 3 | 0 | `continue` |
> | 4, 5 | 1, 2 | stampa 4, 5 |
> | 6 | 0 | `continue` |
> | 7 | 1 | stampa 7 |
> | 8 | 2 | $8 > 7$: `break` |
>
> Output (verificato):
> ```
> 1 2 4 5 7 
> i=8
> ```
> L'ordine dei due `if` conta: il 9 non arriva mai, perché il `break` sull'8 esce prima.

**Esercizio 4.** Quanto vale `conta` alla fine? E `i` e `j`?

```c
#include <stdio.h>

int main(void)
{
    int i;
    int j;
    int conta = 0;

    for (i = 0; i < 4; i++) {
        for (j = i; j < 4; j++) {
            conta++;
        }
    }
    printf("conta=%d i=%d j=%d\n", conta, i, j);
    return 0;
}
```

> [!example]- Soluzione
> Il ciclo interno parte da `i`: fa 4 giri con $i = 0$, 3 con $i = 1$, 2 con $i = 2$, 1 con $i = 3$. In tutto $4 + 3 + 2 + 1 = 10$.
>
> Output: `conta=10 i=4 j=4` (verificato). `j` vale 4 perché l'ultimo ciclo interno, con $i = 3$, esce con $j = 4$.

**Esercizio 5.** Il `for` e il `while` qui sotto sono equivalenti? Se no, correggi il `while`.

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i < 5; i++) {
        if (i == 2) continue;
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}
```

```
i = 0;
while (i < 5) {
    if (i == 2) continue;
    printf("%d ", i);
    i++;
}
```

> [!example]- Soluzione
> No. Il `for` stampa `0 1 3 4`. Nel `while`, quando `i` vale 2 il `continue` salta anche `i++`: `i` resta 2 per sempre e il ciclo non finisce. Nel `for` invece `continue` passa per espr3.
>
> Correzione: aggiornare prima del `continue`.
> ```
> i = 0;
> while (i < 5) {
>     if (i == 2) {
>         i++;
>         continue;
>     }
>     printf("%d ", i);
>     i++;
> }
> ```
> È l'unico caso in cui la traduzione meccanica della slide 9 non basta.

**Esercizio 6.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int k = 0;

    do {
        printf("%d ", k);
        k += 4;
    } while (k < 10);
    printf("| k=%d\n", k);

    k = 20;
    do {
        printf("%d ", k);
        k += 4;
    } while (k < 10);
    printf("| k=%d\n", k);
    return 0;
}
```

> [!example]- Soluzione
> ```
> 0 4 8 | k=12
> 20 | k=24
> ```
> (verificato). Nel secondo ciclo $k = 20$ non soddisfa $k < 10$, ma il corpo gira lo stesso una volta: stampa 20 e porta `k` a 24.

**Esercizio 7.** Scrivi un programma che chiede un intero $n$ fra 1 e 10, ripetendo la domanda finché il valore è fuori range, e poi stampa $n!$ con un `for`.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int letti;
>     int i;
>     int fatt = 1;
>
>     do {
>         printf("n (1-10): ");
>         letti = scanf("%d", &n);
>         if (letti != 1) {
>             return 1;
>         }
>     } while (n < 1 || n > 10);
>
>     for (i = 2; i <= n; i++) {
>         fatt *= i;
>     }
>     printf("%d! = %d\n", n, fatt);
>     return 0;
> }
> ```
> Con input `0`, `12`, `5` chiede tre volte e stampa `5! = 120` (verificato). Il `do-while` è naturale perché la domanda va fatta almeno una volta. La condizione è quella di **errore** ($n < 1$ oppure $n > 10$): si ripete finché il dato è sbagliato. Il limite 10 non è a caso: $10! = 3\,628\,800$ sta in un `int`, $13!$ no. Se `scanf` non legge un numero si esce, altrimenti il ciclo rileggerebbe all'infinito lo stesso carattere non valido.

**Esercizio 8.** Scrivi l'output esatto per $N = 4$.

```c
#include <stdio.h>

int main(void)
{
    int N = 4;
    int r;
    int c;

    for (r = 0; r < N; r++) {
        for (c = 0; c < N; c++) {
            if (c <= r) printf("*");
            else printf(".");
        }
        printf("\n");
    }
    return 0;
}
```

> [!example]- Soluzione
> Nella riga `r` sono `*` le colonne da 0 a `r`:
> ```
> *...
> **..
> ***.
> ****
> ```
> (verificato). Con il `for` non c'è il rischio del `while` di dimenticare di azzerare `c` a ogni riga: espr1 lo fa a ogni ripartenza del ciclo interno.

**Esercizio 9.** Riscrivi con un `for` e poi con un `do-while`, mantenendo lo stesso comportamento per ogni $n$:

```
i = n;
while (i > 0) {
    printf("%d ", i);
    i -= 2;
}
```

> [!example]- Soluzione
> Con il `for`: `for (i = n; i > 0; i -= 2) printf("%d ", i);`
>
> Con il `do-while` serve un `if` davanti, perché per $n \leq 0$ il `while` non stampa niente:
> ```
> i = n;
> if (i > 0) {
>     do {
>         printf("%d ", i);
>         i -= 2;
>     } while (i > 0);
> }
> ```
> Con $n = 7$ tutte e tre stampano `7 5 3 1`. Con $n = 0$ nessuna stampa: senza l'`if` il `do-while` stamperebbe `0`.

## Errori tipici

- Modificare la variabile di ciclo dentro il corpo del `for`: il numero di giri non si legge più dall'intestazione (slide 12).
- `for (i = 0; i < 10; i++);` con il punto e virgola: il corpo è l'istruzione vuota, il blocco dopo si esegue una volta sola con `i` a 10.
- Separare le parti del `for` con la virgola invece del `;`.
- Dimenticare il `;` dopo `while (cond)` nel `do-while`.
- Usare il `do-while` quando il caso "zero giri" è possibile (input vuoto, $n = 0$): il primo giro avviene comunque.
- Tradurre un `for` con `continue` in un `while` senza ripetere l'aggiornamento: ciclo infinito.
- Credere che `break` esca da tutti i cicli annidati: esce solo da quello che lo contiene direttamente.
- Pensare che `continue` funzioni nello `switch`: vale solo per i cicli. Un `continue` dentro uno `switch` dentro un ciclo agisce sul ciclo.
- Sbagliare il valore di uscita: dopo `for (i = 0; i < n; i++)` la variabile vale $n$, non $n - 1$. Dopo un `break` vale quello che aveva quando è scattato.
- `scanf(x)` come sulla slide 6: serve `scanf("%d", &x)`.

## Domande

- Quali sono le tre parti dell'intestazione di un `for`, e quando viene eseguita ciascuna?

- Come si riscrive `for (espr1; espr2; espr3) corpo` con un `while`?

- In quale caso la traduzione di un `for` in `while` non è equivalente?

- Quante volte viene eseguito, al minimo, il corpo di un `do-while`? E quello di un `while` o di un `for`?

- Quando conviene il `for`, quando il `while`, quando il `do-while`?

- Perché non si dovrebbe modificare la variabile di ciclo dentro il corpo di un `for`?

- Cosa fa `break` dentro un ciclo? E dentro due cicli annidati?

- Cosa fa `continue` in un `for`? Dove salta in un `while`?

- Con quale valore esce `i` da `for (i = 1; i <= 10; i++) if (i == 3) break;`? E con `continue` al posto di `break`?

- Cosa dice il teorema di Böhm-Jacopini?

- Quante volte gira il corpo interno di `for (i = 0; i < N; i++) for (j = i; j < N; j++)`?

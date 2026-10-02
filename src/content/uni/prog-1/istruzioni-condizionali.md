---
title: Istruzioni condizionali
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-09-27
lezioni:
  - set, giorno?
ordine: 5
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a settembre, prima parte del deck 3.2: <span class="src">slide 1-39</span>. Prima: [Algebra di Boole](/uni/prog-1/algebra-di-boole/). Dopo: [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).

> [!abstract] Per l'esame
> - **Saper enunciare**: sintassi e semantica di `if` e `if-else`, a quale `if` si attacca un `else` (dangling else), cos'è un'istruzione composta, come funziona `?:`.
> - **Saper fare**: tracciare un programma con `if` annidati e condizioni composte; mettere le parentesi implicite in una condizione con la tabella delle precedenze; trovare l'errore in un `if` senza graffe; scrivere un `if` breve (massimo, anno bisestile).
> - **Dove esce**: nella teorica nei tracing (`?:` e `%` sulle cifre della matricola sono fra i più frequenti, vedi [Esami passati](/uni/prog-1/esami-passati/)); nella prova al calcolatore in ogni controllo di input e in ogni "se pieno non fare niente".

Il filo del deck:

```
tre strutture          assegnazione, condizionale, iterativa
     |
if / if-else           flowchart, semantica, esempi
     |
ambiguità              dangling else: l'else va all'ultimo if
     |
?:                     l'if-else dentro un'espressione
     |
blocco { }             più istruzioni valgono come una
     |
precedenze             come si legge  a + b - 4 <= 9 && x < tot - 1
     |
trappole               graffe mancanti, esercizi 1a e 1b
```

## Definizioni

**Le istruzioni del C** (<span class="src">slide 4-6</span>). Con tre strutture sintattiche si scrive qualunque programma, le stesse viste in pseudocodice in [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/):
- **assegnazione**: `x = 23;`, `w = 'a';`, `r3 = (alfa*43 - x)*(delta - 32*i);`;
- **condizionale**: scegliere cosa eseguire (`if`);
- **iterativa**, o ciclo (loop): ripetere (`while`, in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)).

Il deck si apre con un problema, un analizzatore di testo che sostituisce una parola con un'altra (<span class="src">slide 3</span>). Serve tutto questo capitolo per arrivarci, e le slide non lo risolvono ancora.

**`if`** (<span class="src">slide 7-9</span>). Si usa quando un blocco di istruzioni va eseguito **solo se** una condizione è vera, e se è falsa non si fa niente.

```
if (espressione) istruzione
```

**`if-else`** (<span class="src">slide 10-12</span>). Si usa quando c'è un blocco per il caso vero e un **altro** blocco, in alternativa, per il caso falso.

```
if (espressione) istruzione1 else istruzione2
```

| `if` | `if-else` |
| --- | --- |
| <figure class="fig"><svg role="img" aria-label="Flowchart if" xmlns:xlink="http://www.w3.org/1999/xlink" width="288.72pt" height="344.16pt" viewBox="0 0 288.72 344.16" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f55-figure_1"> <g id="f55-patch_1"> <path d="M 0 344.16 L 288.72 344.16 L 288.72 0 L 0 0 L 0 344.16 z " style="fill: none"/> </g> <g id="f55-axes_1"> <g id="f55-patch_2"> <path d="M 116.64 52.884 L 188.712 88.92 L 116.64 124.956 L 44.568 88.92 L 116.64 52.884 z " clip-path="url(#f55-p725a0a69a9)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f55-patch_3"> <path d="M 160.992 188.712 L 271.872 188.712 L 271.872 138.816 L 160.992 138.816 L 160.992 188.712 z " clip-path="url(#f55-p725a0a69a9)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f55-line2d_1"> <path d="M 216.432 88.92 L 216.432 124.956 " clip-path="url(#f55-p725a0a69a9)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f55-line2d_2"> <path d="M 216.432 188.712 L 216.432 238.608 " clip-path="url(#f55-p725a0a69a9)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f55-line2d_3"> <path d="M 116.64 124.956 L 116.64 238.608 " clip-path="url(#f55-p725a0a69a9)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f55-patch_4"> <path d="M 116.64 11.304 Q 116.64 32.094 116.64 50.647932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 46.647932 L 116.64 50.647932 L 114.64 46.647932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f55-text_1"> <!-- condizione --> <g style="fill: var(--fig-steel)" transform="translate(83.935312 84.836484) scale(0.12 -0.12)"> <defs> <path id="f55-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f55-DejaVuSerif-46"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f55-DejaVuSerif-51" transform="translate(116.203125 0)"/> <use xlink:href="#f55-DejaVuSerif-47" transform="translate(180.609375 0)"/> <use xlink:href="#f55-DejaVuSerif-4c" transform="translate(244.625 0)"/> <use xlink:href="#f55-DejaVuSerif-5d" transform="translate(276.609375 0)"/> <use xlink:href="#f55-DejaVuSerif-4c" transform="translate(329.296875 0)"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(361.28125 0)"/> <use xlink:href="#f55-DejaVuSerif-51" transform="translate(421.484375 0)"/> <use xlink:href="#f55-DejaVuSerif-48" transform="translate(485.890625 0)"/> </g> <!-- ≠ 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(100.764375 99.238828) scale(0.12 -0.12)"> <defs> <path id="f55-DejaVuSerif-8f7" d="M 678 2894 L 3091 2894 L 3891 3891 L 4281 3572 L 3738 2894 L 4684 2894 L 4684 2394 L 3309 2394 L 2700 1619 L 4684 1619 L 4684 1119 L 2266 1119 L 1459 122 L 1069 441 L 1613 1119 L 678 1119 L 678 1619 L 2047 1619 L 2656 2394 L 678 2394 L 678 2894 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f55-DejaVuSerif-8f7"/> <use xlink:href="#f55-DejaVuSerif-3" transform="translate(83.796875 0)"/> <use xlink:href="#f55-DejaVuSerif-13" transform="translate(115.578125 0)"/> <use xlink:href="#f55-DejaVuSerif-3" transform="translate(179.203125 0)"/> <use xlink:href="#f55-DejaVuSerif-22" transform="translate(210.984375 0)"/> </g> </g> <g id="f55-patch_5"> <path d="M 188.712 88.92 Q 202.572 88.92 214.195932 88.92 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 210.195932 86.92 L 214.195932 88.92 L 210.195932 90.92 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f55-patch_6"> <path d="M 216.432 124.956 Q 216.432 131.886 216.432 136.579932 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 218.432 132.579932 L 216.432 136.579932 L 214.432 132.579932 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f55-text_2"> <!-- vero --> <g style="fill: var(--fig-accent)" transform="translate(194.256 80.604) scale(0.11 -0.11)"> <defs> <path id="f55-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f55-DejaVuSerif-59"/> <use xlink:href="#f55-DejaVuSerif-48" transform="translate(56.5 0)"/> <use xlink:href="#f55-DejaVuSerif-55" transform="translate(115.6875 0)"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(163.484375 0)"/> </g> </g> <g id="f55-text_3"> <!-- istruzione --> <g style="fill: var(--fig-ink)" transform="translate(188.703406 160.019918) scale(0.11 -0.11)"> <defs> <path id="f55-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f55-DejaVuSerif-4c"/> <use xlink:href="#f55-DejaVuSerif-56" transform="translate(31.984375 0)"/> <use xlink:href="#f55-DejaVuSerif-57" transform="translate(83.296875 0)"/> <use xlink:href="#f55-DejaVuSerif-55" transform="translate(123.484375 0)"/> <use xlink:href="#f55-DejaVuSerif-58" transform="translate(171.28125 0)"/> <use xlink:href="#f55-DejaVuSerif-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f55-DejaVuSerif-4c" transform="translate(288.375 0)"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(320.359375 0)"/> <use xlink:href="#f55-DejaVuSerif-51" transform="translate(380.5625 0)"/> <use xlink:href="#f55-DejaVuSerif-48" transform="translate(444.96875 0)"/> </g> <!-- (o blocco) --> <g style="fill: var(--fig-ink)" transform="translate(189.018797 173.222926) scale(0.11 -0.11)"> <defs> <path id="f55-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f55-DejaVuSerif-b"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(39.015625 0)"/> <use xlink:href="#f55-DejaVuSerif-3" transform="translate(99.21875 0)"/> <use xlink:href="#f55-DejaVuSerif-45" transform="translate(131 0)"/> <use xlink:href="#f55-DejaVuSerif-4f" transform="translate(195.015625 0)"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(227 0)"/> <use xlink:href="#f55-DejaVuSerif-46" transform="translate(287.203125 0)"/> <use xlink:href="#f55-DejaVuSerif-46" transform="translate(343.203125 0)"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(399.203125 0)"/> <use xlink:href="#f55-DejaVuSerif-c" transform="translate(459.40625 0)"/> </g> </g> <g id="f55-patch_7"> <path d="M 216.432 238.608 Q 167.922 238.608 121.648068 238.608 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 125.648068 240.608 L 121.648068 238.608 L 125.648068 236.608 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f55-text_4"> <!-- falso --> <g style="fill: var(--fig-steel)" transform="translate(62.504531 166.536) scale(0.11 -0.11)"> <defs> <path id="f55-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f55-DejaVuSerif-49"/> <use xlink:href="#f55-DejaVuSerif-44" transform="translate(37.015625 0)"/> <use xlink:href="#f55-DejaVuSerif-4f" transform="translate(96.640625 0)"/> <use xlink:href="#f55-DejaVuSerif-56" transform="translate(128.625 0)"/> <use xlink:href="#f55-DejaVuSerif-52" transform="translate(179.9375 0)"/> </g> </g> <g id="f55-patch_8"> <path d="M 116.64 238.608 Q 116.64 269.1 116.64 297.355932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 293.355932 L 116.64 297.355932 L 114.64 293.355932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f55-text_5"> <!-- istruzione successiva --> <g style="fill: var(--fig-axis)" transform="translate(57.593203 316.224) scale(0.11 -0.11)"> <defs> <path id="f55-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f55-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f55-DejaVuSerif-Italic-4c"/> <use xlink:href="#f55-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-56" transform="translate(535.9375 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-58" transform="translate(587.25 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-46" transform="translate(651.65625 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-46" transform="translate(707.65625 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-48" transform="translate(763.65625 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-56" transform="translate(822.84375 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-56" transform="translate(874.15625 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-4c" transform="translate(925.46875 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-59" transform="translate(957.453125 0)"/> <use xlink:href="#f55-DejaVuSerif-Italic-44" transform="translate(1013.953125 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f55-p725a0a69a9"> <rect x="5.76" y="5.76" width="277.2" height="332.64"/> </clipPath> </defs> </svg></figure> | <figure class="fig"><svg role="img" aria-label="Flowchart if-else" xmlns:xlink="http://www.w3.org/1999/xlink" width="371.88pt" height="344.16pt" viewBox="0 0 371.88 344.16" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f56-figure_1"> <g id="f56-patch_1"> <path d="M 0 344.16 L 371.88 344.16 L 371.88 0 L 0 0 L 0 344.16 z " style="fill: none"/> </g> <g id="f56-axes_1"> <g id="f56-patch_2"> <path d="M 185.94 52.884 L 258.012 88.92 L 185.94 124.956 L 113.868 88.92 L 185.94 52.884 z " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_3"> <path d="M 241.38 188.712 L 352.26 188.712 L 352.26 138.816 L 241.38 138.816 L 241.38 188.712 z " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_4"> <path d="M 19.62 188.712 L 130.5 188.712 L 130.5 138.816 L 19.62 138.816 L 19.62 188.712 z " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-line2d_1"> <path d="M 258.012 88.92 L 296.82 88.92 " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-line2d_2"> <path d="M 113.868 88.92 L 75.06 88.92 " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-line2d_3"> <path d="M 296.82 188.712 L 296.82 238.608 " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-line2d_4"> <path d="M 75.06 188.712 L 75.06 238.608 " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-line2d_5"> <path d="M 75.06 238.608 L 296.82 238.608 " clip-path="url(#f56-p76824ceeba)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-patch_5"> <path d="M 185.94 11.304 Q 185.94 32.094 185.94 50.647932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 187.94 46.647932 L 185.94 50.647932 L 183.94 46.647932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_1"> <!-- condizione --> <g style="fill: var(--fig-steel)" transform="translate(153.235312 84.836484) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-46"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f56-DejaVuSerif-51" transform="translate(116.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-47" transform="translate(180.609375 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(244.625 0)"/> <use xlink:href="#f56-DejaVuSerif-5d" transform="translate(276.609375 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(329.296875 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(361.28125 0)"/> <use xlink:href="#f56-DejaVuSerif-51" transform="translate(421.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(485.890625 0)"/> </g> <!-- ≠ 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(170.064375 99.238828) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-8f7" d="M 678 2894 L 3091 2894 L 3891 3891 L 4281 3572 L 3738 2894 L 4684 2894 L 4684 2394 L 3309 2394 L 2700 1619 L 4684 1619 L 4684 1119 L 2266 1119 L 1459 122 L 1069 441 L 1613 1119 L 678 1119 L 678 1619 L 2047 1619 L 2656 2394 L 678 2394 L 678 2894 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-8f7"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(83.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-13" transform="translate(115.578125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(179.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-22" transform="translate(210.984375 0)"/> </g> </g> <g id="f56-patch_6"> <path d="M 296.82 88.92 Q 296.82 113.868 296.82 136.579932 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 298.82 132.579932 L 296.82 136.579932 L 294.82 132.579932 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_2"> <!-- vero --> <g style="fill: var(--fig-accent)" transform="translate(263.556 80.604) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-59"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(56.5 0)"/> <use xlink:href="#f56-DejaVuSerif-55" transform="translate(115.6875 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(163.484375 0)"/> </g> </g> <g id="f56-patch_7"> <path d="M 75.06 88.92 Q 75.06 113.868 75.06 136.579932 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 77.06 132.579932 L 75.06 136.579932 L 73.06 132.579932 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_3"> <!-- falso --> <g style="fill: var(--fig-steel)" transform="translate(81.908531 80.604) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-49"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(37.015625 0)"/> <use xlink:href="#f56-DejaVuSerif-4f" transform="translate(96.640625 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(128.625 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(179.9375 0)"/> </g> </g> <g id="f56-text_4"> <!-- ramo if --> <g style="fill: var(--fig-ink)" transform="translate(276.842109 160.020348) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-55"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(47.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-50" transform="translate(107.421875 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(202.25 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(262.453125 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(294.234375 0)"/> <use xlink:href="#f56-DejaVuSerif-49" transform="translate(326.21875 0)"/> </g> <!-- (caso vero) --> <g style="fill: var(--fig-ink)" transform="translate(265.984766 173.223355) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-b"/> <use xlink:href="#f56-DejaVuSerif-46" transform="translate(39.015625 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(95.015625 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(154.640625 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(205.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(266.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-59" transform="translate(297.9375 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(354.4375 0)"/> <use xlink:href="#f56-DejaVuSerif-55" transform="translate(413.625 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(461.421875 0)"/> <use xlink:href="#f56-DejaVuSerif-c" transform="translate(521.625 0)"/> </g> </g> <g id="f56-text_5"> <!-- ramo else --> <g style="fill: var(--fig-ink)" transform="translate(47.785156 160.020348) scale(0.11 -0.11)"> <use xlink:href="#f56-DejaVuSerif-55"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(47.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-50" transform="translate(107.421875 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(202.25 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(262.453125 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(294.234375 0)"/> <use xlink:href="#f56-DejaVuSerif-4f" transform="translate(353.421875 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(385.40625 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(436.71875 0)"/> </g> <!-- (caso falso) --> <g style="fill: var(--fig-ink)" transform="translate(43.319844 173.223355) scale(0.11 -0.11)"> <use xlink:href="#f56-DejaVuSerif-b"/> <use xlink:href="#f56-DejaVuSerif-46" transform="translate(39.015625 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(95.015625 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(154.640625 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(205.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(266.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-49" transform="translate(297.9375 0)"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(334.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-4f" transform="translate(394.578125 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(426.5625 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(477.875 0)"/> <use xlink:href="#f56-DejaVuSerif-c" transform="translate(538.078125 0)"/> </g> </g> <g id="f56-patch_8"> <path d="M 185.94 238.608 Q 185.94 269.1 185.94 297.355932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 187.94 293.355932 L 185.94 297.355932 L 183.94 293.355932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_6"> <!-- istruzione successiva --> <g style="fill: var(--fig-axis)" transform="translate(126.893203 316.224) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-Italic-4c"/> <use xlink:href="#f56-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-56" transform="translate(535.9375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-58" transform="translate(587.25 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-46" transform="translate(651.65625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-46" transform="translate(707.65625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-48" transform="translate(763.65625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-56" transform="translate(822.84375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-56" transform="translate(874.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4c" transform="translate(925.46875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-59" transform="translate(957.453125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-44" transform="translate(1013.953125 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f56-p76824ceeba"> <rect x="5.76" y="5.76" width="360.36" height="332.64"/> </clipPath> </defs> </svg></figure> |

Nel rombo del flowchart della slide c'è scritto "espressione ≠ 0 ?": in C la condizione è un'espressione qualsiasi, ed è **vera se il suo valore è diverso da zero**. `if (x)` equivale a `if (x != 0)`.

**Semantica** (<span class="src">slide 13</span>).
1. Si valuta la condizione.
2. Se è VERA si esegue solo la prima istruzione (o sequenza).
3. Se è FALSA si esegue la seconda, quella dopo `else`.
4. Se manca l'`else` e la condizione è falsa, si prosegue con l'istruzione che segue l'`if`.

In ogni caso **uno solo** dei due rami viene eseguito, mai entrambi.

**Istruzione composta**, o blocco (<span class="src">slide 25-27</span>). Più istruzioni in sequenza racchiuse fra `{` e `}` formano un blocco che vale come **una sola istruzione**. Il corpo di `main` è un blocco. Dopo `}` non serve il `;`, perché la graffa delimita già. Se lo aggiungi di solito non è un errore: è un'istruzione vuota. C'è un caso in cui lo diventa, ed è fra `}` ed `else` (sotto, Errori tipici).

Serve perché la sintassi di `if` prevede **una** istruzione per ramo. Se nel ramo ne vuoi due, le metti in un blocco.

**Operatore ternario `?:`** (<span class="src">slide 21-22</span>). Forma sintetica dell'`if-else`, ed è l'unico operatore del C con tre operandi.

```
espressione1 ? espressione2 : espressione3
```

Si valuta `espressione1`: se è vera il risultato è il valore di `espressione2`, altrimenti quello di `espressione3`. Viene valutata solo una delle due.

La slide lo presenta come equivalente a `if (e1) {e2;} else {e3;}`. La differenza che conta: `?:` è un'**espressione**, quindi ha un valore e si può mettere a destra di un'assegnazione o dentro un `printf`. L'`if` è un'**istruzione** e non ha valore. Per questo si usa per inizializzare:

```c
int opening_time = (day == WEEKEND) ? 12 : 9;
```

**Ambiguità del dangling else** (<span class="src">slide 18-20</span>). Come la frase "Carlo discute della relazione con Roberta", che ha due letture, questa riga ne ha due:

```
if (C1) if (C2) S1; else S2;

a)  if (C1)                    b)  if (C1)
        if (C2) S1;                    if (C2) S1;
    else S2;                           else S2;
```

**Convenzione del C: l'`else` si attacca all'ultimo `if` rimasto senza `else`**, cioè il più vicino. Vale la lettura **b**, qualunque sia l'indentazione. Per avere la **a** servono le graffe:

```
if (C1) {if (C2) S1;} else S2;
```

La differenza si vede quando C1 è falsa: con la lettura b non si esegue niente, con la a si esegue S2. gcc con `-Wall` avvisa ("suggest explicit braces to avoid ambiguous 'else'").

## Concetti

### Precedenze nelle condizioni

(<span class="src">slide 28-34</span>) Una condizione mescola tre tipi di operatori: logici (`A && B`), aritmetici (`a * 2`), relazionali (`a <= b`). Le regole (<span class="src">slide 29</span>):
- gli operatori sono divisi in gruppi con precedenze diverse, e quelli con precedenza più alta si valutano **prima**;
- fra operatori dello stesso gruppo decide l'**associatività** (da sinistra o da destra);
- le parentesi cambiano l'ordine, e si possono mettere anche solo per leggibilità.

La tabella completa è in [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/). L'ordine che serve per le condizioni, dall'alto:

```
!  ++  --  -(unario)      unari
*  /  %                   moltiplicativi
+  -                      additivi
<  <=  >  >=              relazionali
==  !=                    uguaglianza
&&                        AND logico
||                        OR logico
?:                        condizionale
=  +=  -= ...             assegnazione
```

Quindi l'aritmetica si fa prima dei confronti, e i confronti prima di `&&` e `||`. Per questo `x > 0 && x < 10` funziona senza parentesi.

**Esempio della slide 34**: `a + b - 4 <= 9 && x < tot - 1`

```
a + b - 4 <= 9 && x < tot - 1
((a + b) - 4) <= 9 && x < (tot - 1)          additivi, associativi da sinistra
(((a + b) - 4) <= 9) && (x < (tot - 1))      relazionali
((((a + b) - 4) <= 9) && (x < (tot - 1)))    AND logico, per ultimo
```

Con $a = 5$, $b = 6$, $x = 3$, $tot = 10$: $5 + 6 - 4 = 7 \leq 9$ vero; $3 < 9$ vero; il risultato è 1.

### Graffe e indentazione

L'indentazione serve a chi legge (<span class="src">slide 16</span>), il compilatore la ignora. Quello che conta sono le graffe. Tre versioni del massimo di due numeri (<span class="src">slide 35-37</span>):

- **Slide 35, corretta**: entrambi i rami fra graffe, ognuno assegna `max` e stampa.
- **Slide 36**: il ramo `if` senza graffe e con due istruzioni.
  ```
  if (a > b)
    max = a;
    printf("massimo: %d", a);
  else { ... }
  ```
  L'`if` controlla solo `max = a;`. Il `printf` è un'istruzione normale, dopo la quale l'`else` non ha nessun `if` a cui attaccarsi. **Non compila**: gcc dà `error: 'else' without a previous 'if'`.
- **Slide 37**: il ramo `else` senza graffe.
  ```
  else
    max = b;
    printf("massimo: %d", b);
  ```
  Compila, ma l'`else` controlla solo `max = b;`. Il secondo `printf` è fuori dall'`if-else` e viene eseguito **sempre**. Con $a = 5$ e $b = 3$ il programma stampa `massimo: 5` e poi `massimo: 3`. gcc con `-Wall` avvisa (`-Wmisleading-indentation`), perché l'indentazione fa credere il contrario.

Regola che evita tutti e tre i problemi: **graffe sempre**, anche per una sola istruzione.

## Metodo

**Tracciare un `if`.**
1. Scrivi i valori correnti delle variabili.
2. Metti le parentesi implicite nella condizione, poi calcolala; con `&&` e `||` fermati appena il risultato è deciso (i `++` nella parte saltata non avvengono).
3. Individua il ramo **dalle graffe**, non dall'indentazione. Senza graffe il ramo è una sola istruzione, fino al primo `;`.
4. Ogni `else` va all'`if` più vicino che non ha ancora un `else`.
5. Aggiorna la tabella solo per le istruzioni del ramo eseguito.

**Scrivere una condizione.** Traduci la frase in italiano pezzo per pezzo con `&&` (e), `||` (o), `!` (non). "x fra 1 e 10" è `x >= 1 && x <= 10`, mai `1 <= x <= 10`.

## Esempi svolti a lezione

**Esempi di sintassi** (<span class="src">slide 14-15</span>).

```
if (x == 0) z = 5; else y = z + w*y;
if (x == 0) {z = 5;} else {y = z + w*y;}
if ((x+y)*(z-2) > (23+v)) {z = x + 1; y = 13 + x;}
if ((x == y && z > 3) || w != y)
    z = 5;
else {
    y = z + w*y;
    x = z;
}
```

La prima e la seconda sono identiche: le graffe attorno a una sola istruzione non cambiano niente. Nella terza il blocco contiene due assegnazioni, eseguite entrambe o nessuna. Nella quarta la condizione è un'espressione logica: `&&` per AND e `||` per OR, come in [Algebra di Boole](/uni/prog-1/algebra-di-boole/).

La slide 16 scrive `if (x>0) printf(x); else printf(-x);` per stampare il valore assoluto. È lo pseudo-C del corso: in C vero è `printf("%d", x)`.

**Istruzioni scorrette e non canoniche** (<span class="src">slide 17</span>).

```
1)  if (x == 0)  else y = 34;
2)  if (x == 0)  a; else b + c;
```

1. **Scorretta**: manca l'istruzione del ramo vero. gcc: `expected expression before 'else'`. Se nel caso vero non c'è niente da fare si nega la condizione: `if (x != 0) y = 34;`.
2. **Non canonica**: compila, ma `a;` e `b + c;` calcolano un valore e lo buttano. Non succede niente in nessuno dei due rami. gcc con `-Wall` avvisa: `statement with no effect`.

**Massimo di due numeri** (<span class="src">slide 23</span>). Il programma della slide, con il controllo di `scanf` e una dichiarazione per riga:

```c
#include <stdio.h>

int main(void)
{
    int m;
    int n;
    int max;

    if (scanf("%d", &m) != 1) {
        return 1;
    }
    printf("m=%d\n", m);
    if (scanf("%d", &n) != 1) {
        return 1;
    }
    printf("n=%d\n", n);

    if (m > n) max = m; else max = n;

    printf("max=%d\n", max);
    return 0;
}
```

Con input `7` e `3` stampa `m=7`, `n=3`, `max=7`. Se i due numeri sono uguali `m > n` è falso e `max` prende `n`, che è lo stesso valore: il caso va bene senza trattarlo a parte.

**Sfida: solo due variabili** (<span class="src">slide 24</span>). Si può fare senza `max`? Sì: se `y` è più grande la si copia in `x`, e alla fine `x` è il massimo. Si perde il valore iniziale di `x`, che non serve più.

```c
#include <stdio.h>

int main(void)
{
    int x;
    int y;

    if (scanf("%d %d", &x, &y) != 2) {
        return 1;
    }
    if (y > x) {
        x = y;
    }
    printf("max=%d\n", x);
    return 0;
}
```

Con input `4 9` stampa `max=9`. Un'altra strada è non salvare niente: `printf("max=%d\n", x > y ? x : y);`.

**Dangling else** (<span class="src">slide 20</span>). Le due letture scritte con le graffe, con C1 falsa:

```c
#include <stdio.h>

int main(void)
{
    int c1 = 0;
    int c2 = 1;

    if (c1) {
        if (c2) printf("S1\n");
        else printf("S2 (else del secondo if)\n");
    }

    if (c1) {
        if (c2) printf("S1\n");
    } else printf("S2 (else del primo if)\n");

    return 0;
}
```

Output: una sola riga, `S2 (else del primo if)`. Il primo `if` è la lettura b, quella che il C sceglie quando le graffe mancano: con C1 falsa non esegue niente.

**Operatore ternario** (<span class="src">slide 22</span>). `WEEKEND` nella slide non è definito; qui è una costante con `#define`:

```c
#include <stdio.h>

#define FERIALE 0
#define WEEKEND 1

int main(void)
{
    int day = WEEKEND;
    int opening_time = (day == WEEKEND) ? 12 : 9;

    printf("apre alle %d\n", opening_time);
    day = FERIALE;
    printf("apre alle %d\n", day == WEEKEND ? 12 : 9);
    return 0;
}
```

Output: `apre alle 12`, poi `apre alle 9`.

**Esercizi 1a e 1b** (<span class="src">slide 38-39</span>). Quanto valgono `x`, `y` e `z` alla fine?

```c
#include <stdio.h>

int main(void)
{
    int x;
    int y;
    int z;

    y = 1;
    z = 0;
    x = 1;
    if (x <= 1)
        y = 0;
    z = 1;
    printf("x=%d y=%d z=%d\n", x, y, z);
    return 0;
}
```

| istruzione | `x` | `y` | `z` |
| --- | --- | --- | --- |
| `y = 1; z = 0; x = 1;` | 1 | 1 | 0 |
| `if (x <= 1)` vero, `y = 0;` | 1 | 0 | 0 |
| `z = 1;` (fuori dall'`if`) | 1 | 0 | 1 |

Output: `x=1 y=0 z=1`. L'1b mette `y = 0;` fra graffe e il risultato è identico: con una sola istruzione nel ramo le graffe non cambiano niente. Il tranello è l'indentazione dell'1a, che non c'è: `z = 1;` è eseguita comunque, anche se la condizione fosse falsa.

La slide scrive `main()` senza tipo. Era il C degli anni '80 ("int implicito"); dal C99 non è più valido, e gcc 14 e successivi lo rifiutano con `error: return type defaults to 'int'`. Si scrive `int main(void)`.

## Esercizi tipo esame

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 4;
    int y = 7;
    int z = 0;

    if (x > 2 && y < 5)
        z = 1;
    else if (x % 2 == 0)
        z = 2;
    else
        z = 3;

    if (z == 2) {
        if (y > x)
            y = y - x;
        else
            x = x - y;
    }
    z += x > y ? x : y;
    printf("%d %d %d\n", x, y, z);
    return 0;
}
```

> [!example]- Soluzione
> `x > 2 && y < 5`: 1 && 0, falso. Si passa all'`else`, che contiene un altro `if`: `4 % 2` è 0, vero, quindi `z` = 2.
> `z` vale 2, si entra: `y > x` (7 > 4) vero, `y` = 3.
> `x > y ? x : y`: 4 > 3, vale 4. `z` = 2 + 4 = 6.
> Output: `4 3 6` (verificato).

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 5;
    int b = 0;
    int c = 1;

    if (a > 3 || b++ > 0)
        c = c + 10;
    if (b == 0 && a-- > 4)
        c = c * 2;
    printf("%d %d %d\n", a, b, c);
    return 0;
}
```

> [!example]- Soluzione
> Primo `if`: `a > 3` è vero, l'OR è già deciso e `b++` **non** si esegue. `c` = 11, `b` resta 0.
> Secondo: `b == 0` vero, si valuta `a-- > 4`: confronta 5 > 4 (vero), poi `a` diventa 4. `c` = 22.
> Output: `4 0 22` (verificato).

**Esercizio 3** (stile matricola). Scrivi l'output con `matricola = 238517`.

```c
#include <stdio.h>

int main(void)
{
    int matricola = 238517;
    int u = matricola % 10;
    int d = matricola / 10 % 10;
    int r;

    r = u % 2 ? u * 2 : u / 2;
    if (d > u)
        r = r + d;
    else
        r = r - d;
    printf("u=%d d=%d r=%d\n", u, d, r);
    return 0;
}
```

> [!example]- Soluzione
> `u` = 7 (unità), `d` = 1 (decine). `u % 2` vale 1, vero: `r` = 14. `d > u` falso: `r` = 14 - 1 = 13.
> Output: `u=7 d=1 r=13` (verificato). All'esame rifallo con la tua matricola.

**Esercizio 4.** Con quali valori di `a` e `b` il frammento stampa `Z`? Metti le graffe che rendono esplicito ciò che fa il compilatore.

```
if (a > 0)
    if (b > 0)
        printf("X");
else
    printf("Z");
```

> [!example]- Soluzione
> L'indentazione inganna: l'`else` va al secondo `if`, il più vicino. Con le graffe:
> ```
> if (a > 0) {
>     if (b > 0)
>         printf("X");
>     else
>         printf("Z");
> }
> ```
> Stampa `Z` quando $a > 0$ e $b \leq 0$. Con $a \leq 0$ non stampa niente.

**Esercizio 5.** Scrivi un programma che legge tre interi e stampa il massimo, in una sola espressione con `?:`.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int a;
>     int b;
>     int c;
>
>     if (scanf("%d %d %d", &a, &b, &c) != 3) {
>         return 1;
>     }
>     int max = a > b ? (a > c ? a : c) : (b > c ? b : c);
>     printf("max=%d\n", max);
>     return 0;
> }
> ```
> Con `3 9 5` stampa `max=9`, con `7 -2 1` stampa `max=7` (verificato). Se `a > b` il massimo è fra `a` e `c`, altrimenti fra `b` e `c`.

**Esercizio 6.** Scrivi un programma che legge un anno e stampa se è bisestile. Un anno è bisestile se è divisibile per 4 ma non per 100, oppure se è divisibile per 400.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int anno;
>
>     if (scanf("%d", &anno) != 1) {
>         printf("input non valido\n");
>         return 1;
>     }
>     if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
>         printf("%d bisestile\n", anno);
>     } else {
>         printf("%d non bisestile\n", anno);
>     }
>     return 0;
> }
> ```
> Provato: 2024 bisestile, 1900 non bisestile, 2000 bisestile, 2026 non bisestile. Le parentesi attorno al primo `&&` non sono obbligatorie (`&&` lega più di `||`) ma rendono chiaro il ragionamento.

**Esercizio 7.** Metti tutte le parentesi implicite in `x + 1 > y * 2 || !z && y != 0`.

> [!example]- Soluzione
> ```
> ((x + 1) > (y * 2)) || ((!z) && (y != 0))
> ```
> `!` prima di tutto, poi `*`, poi `+`, poi i confronti, poi `&&`, per ultimo `||`.

## Errori tipici

- `if (x = 0)` invece di `if (x == 0)`: assegna 0 a `x` e la condizione vale sempre falso. gcc `-Wall` avvisa ("suggest parentheses around assignment used as truth value").
- Punto e virgola dopo la condizione: `if (x > 0);` è un `if` con istruzione vuota, e quello che segue viene eseguito sempre.
- `;` fra `}` ed `else`: `if (c) { ... }; else { ... }` non compila, perché il `;` è un'istruzione vuota che chiude l'`if` e l'`else` resta orfano.
- Due istruzioni in un ramo senza graffe (slide 36 e 37).
- Credere all'indentazione per l'`else`: va all'`if` più vicino.
- `1 <= x <= 10` al posto di `1 <= x && x <= 10`.
- Usare `?:` come istruzione con effetti (`a > b ? x = 1 : y = 2;`): non compila (`lvalue required as left operand of assignment`), perché `?:` lega più di **=** e il compilatore legge `(a > b ? x = 1 : y) = 2`. `?:` serve per scegliere un valore; per scegliere cosa fare c'è l'`if`.
- Scrivere `main()` senza `int`.

## Domande

- Qual è la sintassi di `if` e di `if-else`?

- Descrivi la semantica di un `if-else` in quattro passi.

- Quando una condizione è considerata vera in C?

- Cos'è un'istruzione composta e perché serve negli `if`?

- A quale `if` si attacca un `else` in `if (C1) if (C2) S1; else S2;`? Come si ottiene l'altra lettura?

- Che differenza c'è fra l'operatore `?:` e un `if-else`?

- Metti le parentesi implicite in `a + b - 4 <= 9 && x < tot - 1`.

- Perché il programma della slide 36 non compila?

- Cosa stampa il programma della slide 37 con `a = 5` e `b = 3`, e perché?

- Come trovi il massimo di due numeri usando solo le due variabili `x` e `y`?

- Nell'esercizio 1a quanto valgono `x`, `y`, `z` alla fine? Cambia qualcosa nell'1b?

- Con `a = 5` e `b = 0`, quanto vale `b` dopo `if (a > 3 || b++ > 0) ...`?

- Perché `if (x == 0) else y = 34;` è scorretta e come la riscrivi?

---
title: Ciclo while ed esempi
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
ordine: 6
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a settembre, deck 3.2: <span class="src">slide 40-57</span> e <span class="src">slide 69-97</span>. Prima: [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/). Dopo: [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/). In mezzo al deck, slide 58-68: [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/).

> [!abstract] Per l'esame
> - **Saper enunciare**: sintassi e semantica del `while`, perché il corpo può girare zero volte, cosa vuol dire inizializzare un contatore o un accumulatore, cos'è una sentinella e perché si legge prima del ciclo, la proprietà su cui si basa Euclide, la ricorrenza della scala.
> - **Saper fare**: tracciare un ciclo con una tabella (una riga per giro), dire quante volte si esegue il corpo e con che valori si esce; scrivere un ciclo con sentinella e controllo di `scanf`; scrivere cicli annidati per un quadrato $N \times N$ a pattern; confrontare due algoritmi contando i giri; trovare il ciclo infinito o l'errore di uno in un programma.
> - **Dove esce**: nella teorica tracing di cicli "scrivi l'output esatto" (15 prove su 18, spesso sulle cifre della matricola), quadrato $N \times N$ a pattern (5 volte nel 2023-26), complessità "quante volte gira" (vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore ogni input con controllo del range e ogni scansione è un ciclo.

Il filo del deck:

```
while                  sintassi, flowchart, semantica          slide 40-42
   |
somma 1..5             contatore, accumulatore, inizializzazione  slide 43-44
   |
sentinella             leggi prima del ciclo, rileggi in fondo   slide 45-46
   |
MCD                    Euclide (sottrazioni) contro definizione  slide 47-55
   |                   (divisioni, poi %)
efficienza             quante volte gira il corpo?              slide 56-57
   |
   |   (slide 58-68: getchar e putchar, nota a parte)
   |
moltiplicazione        solo ×2, /2 e somme, invariante          slide 69-73
   |
scala                  S(n) = S(n-1) + S(n-2) + S(n-3)          slide 74-97
                       tre variabili che scorrono, crescita esponenziale
```

## Definizioni

**Istruzione iterativa**, o ciclo (<span class="src">slide 40</span>). Con le parole della slide: "ripetizione esecuzione blocco di istruzioni al verificarsi di una condizione". Parola chiave `while`. La condizione è valutata **prima** dell'esecuzione del blocco.

```
while (espressione) istruzione
```

L'istruzione, detta **corpo** del ciclo, è quasi sempre un blocco fra graffe. Come nell'`if`, la condizione è vera se vale un numero diverso da zero ([Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/)).

A parole: il `while` è un `if` che, finito il suo ramo, torna su a ricontrollare la condizione. L'`if` decide **se** eseguire una volta; il `while` decide **ogni volta** se eseguire ancora.

<figure class="fig"><svg role="img" aria-label="Flowchart while" xmlns:xlink="http://www.w3.org/1999/xlink" width="316.44pt" height="344.16pt" viewBox="0 0 316.44 344.16" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fa4deab-figure_1"> <g id="fa4deab-patch_1"> <path d="M 0 344.16 L 316.44 344.16 L 316.44 0 L 0 0 L 0 344.16 z " style="fill: none"/> </g> <g id="fa4deab-axes_1"> <g id="fa4deab-patch_2"> <path d="M 116.64 52.884 L 188.712 88.92 L 116.64 124.956 L 44.568 88.92 L 116.64 52.884 z " clip-path="url(#fa4deab-p62c5ad1209)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fa4deab-patch_3"> <path d="M 185.94 188.712 L 296.82 188.712 L 296.82 138.816 L 185.94 138.816 L 185.94 188.712 z " clip-path="url(#fa4deab-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fa4deab-line2d_1"> <path d="M 188.712 88.92 L 241.38 88.92 " clip-path="url(#fa4deab-p62c5ad1209)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="fa4deab-line2d_2"> <path d="M 241.38 188.712 L 241.38 216.432 " clip-path="url(#fa4deab-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="fa4deab-line2d_3"> <path d="M 241.38 216.432 L 305.136 216.432 " clip-path="url(#fa4deab-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="fa4deab-line2d_4"> <path d="M 305.136 216.432 L 305.136 33.48 " clip-path="url(#fa4deab-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="fa4deab-patch_4"> <path d="M 116.64 11.304 Q 116.64 32.094 116.64 50.647932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 46.647932 L 116.64 50.647932 L 114.64 46.647932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="fa4deab-text_1"> <!-- condizione --> <g style="fill: var(--fig-steel)" transform="translate(83.935312 84.836484) scale(0.12 -0.12)"> <defs> <path id="fa4deab-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-46"/> <use xlink:href="#fa4deab-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-51" transform="translate(116.203125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-47" transform="translate(180.609375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-4c" transform="translate(244.625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-5d" transform="translate(276.609375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-4c" transform="translate(329.296875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-52" transform="translate(361.28125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-51" transform="translate(421.484375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-48" transform="translate(485.890625 0)"/> </g> <!-- ≠ 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(100.764375 99.238828) scale(0.12 -0.12)"> <defs> <path id="fa4deab-DejaVuSerif-8f7" d="M 678 2894 L 3091 2894 L 3891 3891 L 4281 3572 L 3738 2894 L 4684 2894 L 4684 2394 L 3309 2394 L 2700 1619 L 4684 1619 L 4684 1119 L 2266 1119 L 1459 122 L 1069 441 L 1613 1119 L 678 1119 L 678 1619 L 2047 1619 L 2656 2394 L 678 2394 L 678 2894 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-8f7"/> <use xlink:href="#fa4deab-DejaVuSerif-3" transform="translate(83.796875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-13" transform="translate(115.578125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-3" transform="translate(179.203125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-22" transform="translate(210.984375 0)"/> </g> </g> <g id="fa4deab-patch_5"> <path d="M 241.38 88.92 Q 241.38 113.868 241.38 136.579932 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 243.38 132.579932 L 241.38 136.579932 L 239.38 132.579932 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="fa4deab-text_2"> <!-- vero --> <g style="fill: var(--fig-accent)" transform="translate(194.256 80.604) scale(0.11 -0.11)"> <defs> <path id="fa4deab-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-59"/> <use xlink:href="#fa4deab-DejaVuSerif-48" transform="translate(56.5 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-55" transform="translate(115.6875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-52" transform="translate(163.484375 0)"/> </g> </g> <g id="fa4deab-text_3"> <!-- corpo --> <g style="fill: var(--fig-ink)" transform="translate(225.527969 160.019918) scale(0.11 -0.11)"> <defs> <path id="fa4deab-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-46"/> <use xlink:href="#fa4deab-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-55" transform="translate(116.203125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-53" transform="translate(164 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-52" transform="translate(228.015625 0)"/> </g> <!-- del ciclo --> <g style="fill: var(--fig-ink)" transform="translate(218.107266 173.222926) scale(0.11 -0.11)"> <defs> <path id="fa4deab-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-47"/> <use xlink:href="#fa4deab-DejaVuSerif-48" transform="translate(64.015625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-4f" transform="translate(123.203125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-3" transform="translate(155.1875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-46" transform="translate(186.96875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-4c" transform="translate(242.96875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-46" transform="translate(274.953125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-4f" transform="translate(330.953125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-52" transform="translate(362.9375 0)"/> </g> </g> <g id="fa4deab-patch_6"> <path d="M 305.136 33.48 Q 212.274 33.48 121.648068 33.48 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 125.648068 35.48 L 121.648068 33.48 L 125.648068 31.48 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="fa4deab-text_4"> <!-- si torna a valutare --> <g style="fill: var(--fig-axis)" transform="translate(206.612312 25.164) scale(0.1 -0.1)"> <defs> <path id="fa4deab-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-Italic-56"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4c" transform="translate(51.3125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-3" transform="translate(83.296875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-57" transform="translate(115.078125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-52" transform="translate(155.265625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-55" transform="translate(215.46875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-51" transform="translate(263.265625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-44" transform="translate(327.671875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-3" transform="translate(387.296875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-44" transform="translate(419.078125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-3" transform="translate(478.703125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-59" transform="translate(510.484375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-44" transform="translate(566.984375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4f" transform="translate(626.609375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-58" transform="translate(658.59375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-57" transform="translate(723 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-44" transform="translate(763.1875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-55" transform="translate(822.8125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-48" transform="translate(870.609375 0)"/> </g> </g> <g id="fa4deab-patch_7"> <path d="M 116.64 124.956 Q 116.64 212.274 116.64 297.355932 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 293.355932 L 116.64 297.355932 L 114.64 293.355932 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="fa4deab-text_5"> <!-- falso --> <g style="fill: var(--fig-steel)" transform="translate(62.504531 199.8) scale(0.11 -0.11)"> <defs> <path id="fa4deab-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-49"/> <use xlink:href="#fa4deab-DejaVuSerif-44" transform="translate(37.015625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-4f" transform="translate(96.640625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-56" transform="translate(128.625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-52" transform="translate(179.9375 0)"/> </g> </g> <g id="fa4deab-text_6"> <!-- istruzione dopo il ciclo --> <g style="fill: var(--fig-axis)" transform="translate(53.495703 316.224) scale(0.11 -0.11)"> <defs> <path id="fa4deab-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="fa4deab-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4c"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-47" transform="translate(535.9375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-52" transform="translate(599.953125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-53" transform="translate(660.15625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-52" transform="translate(724.171875 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-3" transform="translate(784.375 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4c" transform="translate(816.15625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4f" transform="translate(848.140625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-3" transform="translate(880.125 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-46" transform="translate(911.90625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4c" transform="translate(967.90625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-46" transform="translate(999.890625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-4f" transform="translate(1055.890625 0)"/> <use xlink:href="#fa4deab-DejaVuSerif-Italic-52" transform="translate(1087.875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="fa4deab-p62c5ad1209"> <rect x="5.76" y="5.76" width="304.92" height="332.64"/> </clipPath> </defs> </svg></figure>

Nel flowchart della slide la freccia del ramo TRUE dopo il blocco risale **sopra** il rombo: dopo il corpo si torna sempre a valutare la condizione, e l'unica uscita è il ramo FALSE.

**Semantica** (<span class="src">slide 41</span>).
1. Si valuta la condizione.
2. Se è VERA si esegue il corpo, e infine si valuta di nuovo la condizione (si riparte da 1).
3. Se è FALSA il corpo non viene eseguito e si prosegue con l'istruzione dopo il ciclo.

Due conseguenze:
- se la condizione è falsa subito, il corpo si esegue **zero** volte;
- il ciclo termina solo se il corpo cambia qualcosa che prima o poi rende falsa la condizione. Altrimenti è un **ciclo infinito**.

Esempio 1, un conto alla rovescia (il corpo gira, poi la condizione diventa falsa):

```c
#include <stdio.h>

int main(void)
{
    int n = 3;

    while (n > 0) {
        printf("%d ", n);
        n--;
    }
    printf("via! n=%d\n", n);
    return 0;
}
```

| giro | `n > 0` | stampa | `n` alla fine del corpo |
| --- | --- | --- | --- |
| inizio | | | 3 |
| 1 | 3 > 0 vero | `3 ` | 2 |
| 2 | 2 > 0 vero | `2 ` | 1 |
| 3 | 1 > 0 vero | `1 ` | 0 |
| | 0 > 0 falso, si esce | | |

Output (verificato): `3 2 1 via! n=0`. Tre giri, e si esce con `n` a 0: il primo valore che rende falsa la condizione.

Esempio 2, zero giri (la condizione è falsa al primo controllo):

```c
#include <stdio.h>

int main(void)
{
    int x = 10;
    int giri = 0;

    while (x < 5) {
        x++;
        giri++;
    }
    printf("x=%d giri=%d\n", x, giri);
    return 0;
}
```

`10 < 5` è falso subito: il corpo non si esegue mai. Output (verificato): `x=10 giri=0`. È la differenza con il `do-while` di [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/), che il corpo lo esegue sempre almeno una volta.

Controesempio, il ciclo che non finisce:

```
i = 1;
while (i <= 5)
    printf("%d ", i);
    i++;
```

Senza graffe il corpo è solo il `printf` (come per l'`if`, fino al primo `;`). `i++` è fuori dal ciclo, `i` resta 1, e il programma stampa `1 1 1 1 ...` per sempre. Lo stesso succede con `while (i <= 5);`: il `;` è un corpo vuoto, la condizione non cambia mai e il programma si blocca senza stampare niente.

**Istruzioni composte** (<span class="src">slide 42</span>). Riassumendo con la slide: `if` e `while` sono istruzioni complesse che non esistono nella macchina di Von Neumann, che conosce solo salti; sono componibili anch'esse con altre istruzioni composte (un `if` dentro un `while`, un `while` dentro un altro); sono una caratteristica del linguaggio di alto livello. Il compilatore le traduce in salti condizionati.

**Contatore e accumulatore.** Due ruoli che una variabile ha in quasi ogni ciclo:
- **contatore**: conta i giri o gli elementi che soddisfano una condizione, `i++` o `pari++`;
- **accumulatore**: raccoglie un risultato giro dopo giro, `Somma += i` o `prodotto *= i`.

Entrambi vanno **inizializzati** prima del ciclo, perché il primo `Somma += i` legge il valore di `Somma`. Il valore iniziale è l'elemento neutro dell'operazione: 0 per le somme e i conteggi, 1 per i prodotti.

Esempio 1, accumulatore di prodotto: $5! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5$.

```c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int prodotto = 1;

    while (i <= 5) {
        prodotto *= i;
        i++;
    }
    printf("5! = %d\n", prodotto);
    return 0;
}
```

| giro | `i <= 5` | `prodotto` | `i` |
| --- | --- | --- | --- |
| inizio | | 1 | 1 |
| 1 | 1 <= 5 | 1·1 = 1 | 2 |
| 2 | 2 <= 5 | 1·2 = 2 | 3 |
| 3 | 3 <= 5 | 2·3 = 6 | 4 |
| 4 | 4 <= 5 | 6·4 = 24 | 5 |
| 5 | 5 <= 5 | 24·5 = 120 | 6 |
| | 6 <= 5 falso | | |

Output (verificato): `5! = 120`. Con `prodotto = 0` il risultato sarebbe 0 qualunque cosa succeda dopo: lo zero assorbe ogni moltiplicazione.

Esempio 2, contatore e accumulatore insieme, con un `if` nel corpo: quanti sono i pari fra 1 e 10, e quanto fa la loro somma.

```c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int pari = 0;
    int somma_pari = 0;

    while (i <= 10) {
        if (i % 2 == 0) {
            pari++;
            somma_pari += i;
        }
        i++;
    }
    printf("pari=%d somma=%d\n", pari, somma_pari);
    return 0;
}
```

Il corpo gira 10 volte, ma `pari` e `somma_pari` cambiano solo nei giri con `i` pari: 2, 4, 6, 8, 10. Output (verificato): `pari=5 somma=30`, perché $2 + 4 + 6 + 8 + 10 = 30$. `i` è il contatore dei giri, `pari` un contatore condizionato.

**Sentinella** (<span class="src">slide 45</span>). Un valore speciale che segnala la fine dei dati e che non fa parte dei dati. Nell'esercizio del prof è lo 0: si sommano numeri finché non arriva 0. Serve quando non si sa in anticipo quanti dati arriveranno. La sentinella va scelta fuori dai dati validi: per sommare numeri qualsiasi lo 0 va bene (sommarlo non cambierebbe niente), per una lista di voti si può usare 0 o -1.

**Massimo comune divisore** (<span class="src">slide 47-48</span>). Dati due interi positivi $m$ e $n$, $MCD(m, n)$ è il più grande intero che li divide entrambi. L'algoritmo di Euclide si basa sul fatto che (slide 48):

$$
n - m > 0 \;\Rightarrow\; MCD(n, m) = MCD(n - m, m) \qquad m - n > 0 \;\Rightarrow\; MCD(n, m) = MCD(m - n, n)
$$

Perché vale: un numero che divide $n$ e $m$ divide anche $n - m$, e uno che divide $n - m$ e $m$ divide anche $n = (n - m) + m$. Le due coppie hanno gli stessi divisori comuni, quindi lo stesso massimo. Si sottrae il minore dal maggiore finché i due numeri diventano uguali, e quel valore è l'MCD (perché $MCD(d, d) = d$).

L'idea in un disegno: un rettangolo $m \times n$ da cui si taglia via a ogni giro un quadrato di lato pari al lato corto. Quando resta un quadrato, il suo lato è l'MCD: è il quadrato più grande che piastrella il rettangolo di partenza senza avanzi.

<figure class="fig"><svg role="img" aria-label="Euclide come rettangolo" xmlns:xlink="http://www.w3.org/1999/xlink" width="492.955969pt" height="244.368pt" viewBox="0 0 492.955969 244.368" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f640754-figure_1"> <g id="f640754-patch_1"> <path d="M 0 244.368 L 492.955969 244.368 L 492.955969 0 L 0 0 L 0 244.368 z " style="fill: none"/> </g> <g id="f640754-axes_1"> <g id="f640754-patch_2"> <path d="M 44.784769 174.5748 L 167.029969 174.5748 L 167.029969 52.3296 L 44.784769 52.3296 L 44.784769 174.5748 z " clip-path="url(#f640754-pe474355bec)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f640754-patch_3"> <path d="M 167.029969 174.5748 L 289.275169 174.5748 L 289.275169 52.3296 L 167.029969 52.3296 L 167.029969 174.5748 z " clip-path="url(#f640754-pe474355bec)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f640754-patch_4"> <path d="M 289.275169 174.5748 L 411.520369 174.5748 L 411.520369 52.3296 L 289.275169 52.3296 L 289.275169 174.5748 z " clip-path="url(#f640754-pe474355bec)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f640754-patch_5"> <path d="M 411.520369 174.5748 L 472.642969 174.5748 L 472.642969 113.4522 L 411.520369 113.4522 L 411.520369 174.5748 z " clip-path="url(#f640754-pe474355bec)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f640754-patch_6"> <path d="M 411.520369 113.4522 L 472.642969 113.4522 L 472.642969 52.3296 L 411.520369 52.3296 L 411.520369 113.4522 z " clip-path="url(#f640754-pe474355bec)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f640754-text_1"> <!-- 6×6 --> <g style="fill: var(--fig-ink)" transform="translate(94.299791 109.708548) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-99" d="M 4481 3450 L 3034 2003 L 4481 563 L 4122 213 L 2681 1650 L 1241 213 L 884 563 L 2322 2003 L 884 3450 L 1241 3803 L 2681 2363 L 4122 3803 L 4481 3450 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-19"/> <use xlink:href="#f640754-DejaVuSerif-99" transform="translate(63.625 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(147.421875 0)"/> </g> <!-- giro 1 --> <g style="fill: var(--fig-ink)" transform="translate(89.440025 122.910696) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-4a"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(64.015625 0)"/> <use xlink:href="#f640754-DejaVuSerif-55" transform="translate(96 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(143.796875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(204 0)"/> <use xlink:href="#f640754-DejaVuSerif-14" transform="translate(235.78125 0)"/> </g> </g> <g id="f640754-text_2"> <!-- 6×6 --> <g style="fill: var(--fig-ink)" transform="translate(216.544991 109.708548) scale(0.11 -0.11)"> <use xlink:href="#f640754-DejaVuSerif-19"/> <use xlink:href="#f640754-DejaVuSerif-99" transform="translate(63.625 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(147.421875 0)"/> </g> <!-- giro 2 --> <g style="fill: var(--fig-ink)" transform="translate(211.685225 122.910696) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-4a"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(64.015625 0)"/> <use xlink:href="#f640754-DejaVuSerif-55" transform="translate(96 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(143.796875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(204 0)"/> <use xlink:href="#f640754-DejaVuSerif-15" transform="translate(235.78125 0)"/> </g> </g> <g id="f640754-text_3"> <!-- 6×6 --> <g style="fill: var(--fig-ink)" transform="translate(338.790191 109.708548) scale(0.11 -0.11)"> <use xlink:href="#f640754-DejaVuSerif-19"/> <use xlink:href="#f640754-DejaVuSerif-99" transform="translate(63.625 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(147.421875 0)"/> </g> <!-- giro 3 --> <g style="fill: var(--fig-ink)" transform="translate(333.930425 122.910696) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-4a"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(64.015625 0)"/> <use xlink:href="#f640754-DejaVuSerif-55" transform="translate(96 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(143.796875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(204 0)"/> <use xlink:href="#f640754-DejaVuSerif-16" transform="translate(235.78125 0)"/> </g> </g> <g id="f640754-text_4"> <!-- 3×3 --> <g style="fill: var(--fig-accent)" transform="translate(431.529325 146.611156) scale(0.1 -0.1)"> <use xlink:href="#f640754-DejaVuSerif-16"/> <use xlink:href="#f640754-DejaVuSerif-99" transform="translate(63.625 0)"/> <use xlink:href="#f640754-DejaVuSerif-16" transform="translate(147.421875 0)"/> </g> </g> <g id="f640754-text_5"> <!-- giro 4 --> <g style="fill: var(--fig-accent)" transform="translate(428.608388 85.228791) scale(0.09 -0.09)"> <defs> <path id="f640754-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-4a"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(64.015625 0)"/> <use xlink:href="#f640754-DejaVuSerif-55" transform="translate(96 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(143.796875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(204 0)"/> <use xlink:href="#f640754-DejaVuSerif-17" transform="translate(235.78125 0)"/> </g> </g> <g id="f640754-patch_7"> <path d="M 46.238213 34.866 Q 258.713869 34.866 471.189525 34.866 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 49.838213 36.666 L 46.238213 34.866 L 49.838213 33.066 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 467.589525 33.066 L 471.189525 34.866 L 467.589525 36.666 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.3; stroke-linecap: round"/> </g> <g id="f640754-text_6"> <!-- m = 21 --> <g style="fill: var(--fig-axis)" transform="translate(238.394806 23.2236) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-50"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(94.828125 0)"/> <use xlink:href="#f640754-DejaVuSerif-20" transform="translate(126.609375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(210.40625 0)"/> <use xlink:href="#f640754-DejaVuSerif-15" transform="translate(242.1875 0)"/> <use xlink:href="#f640754-DejaVuSerif-14" transform="translate(305.8125 0)"/> </g> </g> <g id="f640754-text_7"> <!-- n = 6 --> <g style="fill: var(--fig-axis)" transform="translate(5.76 116.309622) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-51"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(64.40625 0)"/> <use xlink:href="#f640754-DejaVuSerif-20" transform="translate(96.1875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(179.984375 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(211.765625 0)"/> </g> </g> <g id="f640754-text_8"> <!-- ogni giro toglie il quadrato n×n: (21,6) → (15,6) → (9,6) → (3,6) → (3,3) --> <g style="fill: var(--fig-steel)" transform="translate(62.088869 197.8596) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-54" d="M 3359 2988 L 3359 -997 L 3909 -997 L 3909 -1331 L 2241 -1331 L 2241 -997 L 2784 -997 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-1c" d="M 2994 2091 Q 2784 1856 2512 1740 Q 2241 1625 1900 1625 Q 1206 1625 804 2044 Q 403 2463 403 3188 Q 403 3897 839 4323 Q 1275 4750 2003 4750 Q 2794 4750 3217 4161 Q 3641 3572 3641 2478 Q 3641 1253 3137 581 Q 2634 -91 1722 -91 Q 1475 -91 1203 -44 Q 931 3 647 97 L 647 872 L 997 872 Q 1038 556 1241 387 Q 1444 219 1784 219 Q 2391 219 2687 676 Q 2984 1134 2994 2091 z M 1978 4441 Q 1534 4441 1298 4117 Q 1063 3794 1063 3188 Q 1063 2581 1298 2256 Q 1534 1931 1978 1931 Q 2422 1931 2658 2245 Q 2894 2559 2894 3150 Q 2894 3772 2656 4106 Q 2419 4441 1978 4441 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-52"/> <use xlink:href="#f640754-DejaVuSerif-4a" transform="translate(60.203125 0)"/> <use xlink:href="#f640754-DejaVuSerif-51" transform="translate(124.21875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(188.625 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(220.609375 0)"/> <use xlink:href="#f640754-DejaVuSerif-4a" transform="translate(252.390625 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(316.40625 0)"/> <use xlink:href="#f640754-DejaVuSerif-55" transform="translate(348.390625 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(396.1875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(456.390625 0)"/> <use xlink:href="#f640754-DejaVuSerif-57" transform="translate(488.171875 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(528.359375 0)"/> <use xlink:href="#f640754-DejaVuSerif-4a" transform="translate(588.5625 0)"/> <use xlink:href="#f640754-DejaVuSerif-4f" transform="translate(652.578125 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(684.5625 0)"/> <use xlink:href="#f640754-DejaVuSerif-48" transform="translate(716.546875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(775.734375 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(807.515625 0)"/> <use xlink:href="#f640754-DejaVuSerif-4f" transform="translate(839.5 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(871.484375 0)"/> <use xlink:href="#f640754-DejaVuSerif-54" transform="translate(903.265625 0)"/> <use xlink:href="#f640754-DejaVuSerif-58" transform="translate(967.28125 0)"/> <use xlink:href="#f640754-DejaVuSerif-44" transform="translate(1031.6875 0)"/> <use xlink:href="#f640754-DejaVuSerif-47" transform="translate(1091.3125 0)"/> <use xlink:href="#f640754-DejaVuSerif-55" transform="translate(1155.328125 0)"/> <use xlink:href="#f640754-DejaVuSerif-44" transform="translate(1203.125 0)"/> <use xlink:href="#f640754-DejaVuSerif-57" transform="translate(1262.75 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(1302.9375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(1363.140625 0)"/> <use xlink:href="#f640754-DejaVuSerif-51" transform="translate(1394.921875 0)"/> <use xlink:href="#f640754-DejaVuSerif-99" transform="translate(1459.328125 0)"/> <use xlink:href="#f640754-DejaVuSerif-51" transform="translate(1543.125 0)"/> <use xlink:href="#f640754-DejaVuSerif-1d" transform="translate(1607.53125 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(1641.21875 0)"/> <use xlink:href="#f640754-DejaVuSerif-b" transform="translate(1673 0)"/> <use xlink:href="#f640754-DejaVuSerif-15" transform="translate(1712.015625 0)"/> <use xlink:href="#f640754-DejaVuSerif-14" transform="translate(1775.640625 0)"/> <use xlink:href="#f640754-DejaVuSerif-f" transform="translate(1839.265625 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(1871.046875 0)"/> <use xlink:href="#f640754-DejaVuSerif-c" transform="translate(1934.671875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(1973.6875 0)"/> <use xlink:href="#f640754-DejaVuSerif-854" transform="translate(2005.46875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2089.265625 0)"/> <use xlink:href="#f640754-DejaVuSerif-b" transform="translate(2121.046875 0)"/> <use xlink:href="#f640754-DejaVuSerif-14" transform="translate(2160.0625 0)"/> <use xlink:href="#f640754-DejaVuSerif-18" transform="translate(2223.6875 0)"/> <use xlink:href="#f640754-DejaVuSerif-f" transform="translate(2287.3125 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(2319.09375 0)"/> <use xlink:href="#f640754-DejaVuSerif-c" transform="translate(2382.71875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2421.734375 0)"/> <use xlink:href="#f640754-DejaVuSerif-854" transform="translate(2453.515625 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2537.3125 0)"/> <use xlink:href="#f640754-DejaVuSerif-b" transform="translate(2569.09375 0)"/> <use xlink:href="#f640754-DejaVuSerif-1c" transform="translate(2608.109375 0)"/> <use xlink:href="#f640754-DejaVuSerif-f" transform="translate(2671.734375 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(2703.515625 0)"/> <use xlink:href="#f640754-DejaVuSerif-c" transform="translate(2767.140625 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2806.15625 0)"/> <use xlink:href="#f640754-DejaVuSerif-854" transform="translate(2837.9375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2921.734375 0)"/> <use xlink:href="#f640754-DejaVuSerif-b" transform="translate(2953.515625 0)"/> <use xlink:href="#f640754-DejaVuSerif-16" transform="translate(2992.53125 0)"/> <use xlink:href="#f640754-DejaVuSerif-f" transform="translate(3056.15625 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(3087.9375 0)"/> <use xlink:href="#f640754-DejaVuSerif-c" transform="translate(3151.5625 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(3190.578125 0)"/> <use xlink:href="#f640754-DejaVuSerif-854" transform="translate(3222.359375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(3306.15625 0)"/> <use xlink:href="#f640754-DejaVuSerif-b" transform="translate(3337.9375 0)"/> <use xlink:href="#f640754-DejaVuSerif-16" transform="translate(3376.953125 0)"/> <use xlink:href="#f640754-DejaVuSerif-f" transform="translate(3440.578125 0)"/> <use xlink:href="#f640754-DejaVuSerif-16" transform="translate(3472.359375 0)"/> <use xlink:href="#f640754-DejaVuSerif-c" transform="translate(3535.984375 0)"/> </g> </g> <g id="f640754-text_9"> <!-- MCD(21, 6) = 3: il lato del quadrato con cui si chiude --> <g style="fill: var(--fig-accent)" transform="translate(109.235041 224.055) scale(0.11 -0.11)"> <defs> <path id="f640754-DejaVuSerif-30" d="M 353 0 L 353 331 L 947 331 L 947 4331 L 319 4331 L 319 4666 L 1678 4666 L 3316 1344 L 4953 4666 L 6228 4666 L 6228 4331 L 5606 4331 L 5606 331 L 6203 331 L 6203 0 L 4378 0 L 4378 331 L 4972 331 L 4972 3938 L 3372 684 L 2931 684 L 1331 3938 L 1331 331 L 1925 331 L 1925 0 L 353 0 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-26" d="M 4513 1234 Q 4306 581 3820 245 Q 3334 -91 2591 -91 Q 2134 -91 1743 65 Q 1353 222 1050 525 Q 700 875 529 1320 Q 359 1766 359 2328 Q 359 3416 987 4083 Q 1616 4750 2644 4750 Q 3025 4750 3456 4650 Q 3888 4550 4384 4347 L 4384 3272 L 4031 3272 Q 3916 3859 3567 4137 Q 3219 4416 2591 4416 Q 1844 4416 1459 3886 Q 1075 3356 1075 2328 Q 1075 1303 1459 773 Q 1844 244 2591 244 Q 3113 244 3450 492 Q 3788 741 3938 1234 L 4513 1234 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-27" d="M 1581 331 L 2163 331 Q 3072 331 3558 850 Q 4044 1369 4044 2338 Q 4044 3306 3559 3818 Q 3075 4331 2163 4331 L 1581 4331 L 1581 331 z M 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 2209 4666 Q 3416 4666 4089 4050 Q 4763 3434 4763 2338 Q 4763 1238 4088 619 Q 3413 0 2209 0 L 353 0 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f640754-DejaVuSerif-4b" d="M 263 0 L 263 331 L 781 331 L 781 4531 L 231 4531 L 231 4863 L 1356 4863 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2704 2764 Q 2556 2988 2175 2988 Q 1775 2988 1565 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f640754-DejaVuSerif-30"/> <use xlink:href="#f640754-DejaVuSerif-26" transform="translate(102.390625 0)"/> <use xlink:href="#f640754-DejaVuSerif-27" transform="translate(178.90625 0)"/> <use xlink:href="#f640754-DejaVuSerif-b" transform="translate(259.078125 0)"/> <use xlink:href="#f640754-DejaVuSerif-15" transform="translate(298.09375 0)"/> <use xlink:href="#f640754-DejaVuSerif-14" transform="translate(361.71875 0)"/> <use xlink:href="#f640754-DejaVuSerif-f" transform="translate(425.34375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(457.125 0)"/> <use xlink:href="#f640754-DejaVuSerif-19" transform="translate(488.90625 0)"/> <use xlink:href="#f640754-DejaVuSerif-c" transform="translate(552.53125 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(591.546875 0)"/> <use xlink:href="#f640754-DejaVuSerif-20" transform="translate(623.328125 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(707.125 0)"/> <use xlink:href="#f640754-DejaVuSerif-16" transform="translate(738.90625 0)"/> <use xlink:href="#f640754-DejaVuSerif-1d" transform="translate(802.53125 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(836.21875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(868 0)"/> <use xlink:href="#f640754-DejaVuSerif-4f" transform="translate(899.984375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(931.96875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4f" transform="translate(963.75 0)"/> <use xlink:href="#f640754-DejaVuSerif-44" transform="translate(995.734375 0)"/> <use xlink:href="#f640754-DejaVuSerif-57" transform="translate(1055.359375 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(1095.546875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(1155.75 0)"/> <use xlink:href="#f640754-DejaVuSerif-47" transform="translate(1187.53125 0)"/> <use xlink:href="#f640754-DejaVuSerif-48" transform="translate(1251.546875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4f" transform="translate(1310.734375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(1342.71875 0)"/> <use xlink:href="#f640754-DejaVuSerif-54" transform="translate(1374.5 0)"/> <use xlink:href="#f640754-DejaVuSerif-58" transform="translate(1438.515625 0)"/> <use xlink:href="#f640754-DejaVuSerif-44" transform="translate(1502.921875 0)"/> <use xlink:href="#f640754-DejaVuSerif-47" transform="translate(1562.546875 0)"/> <use xlink:href="#f640754-DejaVuSerif-55" transform="translate(1626.5625 0)"/> <use xlink:href="#f640754-DejaVuSerif-44" transform="translate(1674.359375 0)"/> <use xlink:href="#f640754-DejaVuSerif-57" transform="translate(1733.984375 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(1774.171875 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(1834.375 0)"/> <use xlink:href="#f640754-DejaVuSerif-46" transform="translate(1866.15625 0)"/> <use xlink:href="#f640754-DejaVuSerif-52" transform="translate(1922.15625 0)"/> <use xlink:href="#f640754-DejaVuSerif-51" transform="translate(1982.359375 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2046.765625 0)"/> <use xlink:href="#f640754-DejaVuSerif-46" transform="translate(2078.546875 0)"/> <use xlink:href="#f640754-DejaVuSerif-58" transform="translate(2134.546875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(2198.953125 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2230.9375 0)"/> <use xlink:href="#f640754-DejaVuSerif-56" transform="translate(2262.71875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(2314.03125 0)"/> <use xlink:href="#f640754-DejaVuSerif-3" transform="translate(2346.015625 0)"/> <use xlink:href="#f640754-DejaVuSerif-46" transform="translate(2377.796875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4b" transform="translate(2433.796875 0)"/> <use xlink:href="#f640754-DejaVuSerif-4c" transform="translate(2498.203125 0)"/> <use xlink:href="#f640754-DejaVuSerif-58" transform="translate(2530.1875 0)"/> <use xlink:href="#f640754-DejaVuSerif-47" transform="translate(2594.59375 0)"/> <use xlink:href="#f640754-DejaVuSerif-48" transform="translate(2658.609375 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f640754-pe474355bec"> <rect x="30.231769" y="5.76" width="456.9642" height="232.848"/> </clipPath> </defs> </svg></figure>

## Concetti

### Tracciare un ciclo

Si fa una tabella con una colonna per variabile e **una riga per giro**, più una riga iniziale. In ogni riga si scrive il valore della condizione e poi i valori **alla fine** del corpo. Ci si ferma alla riga in cui la condizione è falsa: quella riga dà i valori con cui si esce.

Tre domande a cui la tabella risponde sempre, e che all'esame vengono chieste: quante volte si esegue il corpo, con che valori si esce, cosa si stampa.

Esempio 1, un ciclo che non conta di uno in uno. Quante volte gira, e con che `i` esce?

```c
#include <stdio.h>

int main(void)
{
    int i = 1;
    int giri = 0;

    while (i < 20) {
        i = i * 3;
        giri++;
    }
    printf("i=%d giri=%d\n", i, giri);
    return 0;
}
```

| giro | `i < 20` | `i` | `giri` |
| --- | --- | --- | --- |
| inizio | | 1 | 0 |
| 1 | 1 < 20 | 3 | 1 |
| 2 | 3 < 20 | 9 | 2 |
| 3 | 9 < 20 | 27 | 3 |
| | 27 < 20 falso | | |

Output (verificato): `i=27 giri=3`. Si esce con `i` oltre il limite, non uguale a 20: il ciclo controlla solo prima di ogni giro.

Esempio 2, due variabili che si aggiornano a vicenda (la successione di Fibonacci, che torna nella scala):

```c
#include <stdio.h>

int main(void)
{
    int a = 1;
    int b = 1;

    while (b < 30) {
        int t = a + b;
        a = b;
        b = t;
    }
    printf("a=%d b=%d\n", a, b);
    return 0;
}
```

| giro | `b < 30` | `t` | `a` | `b` |
| --- | --- | --- | --- | --- |
| inizio | | | 1 | 1 |
| 1 | 1 < 30 | 2 | 1 | 2 |
| 2 | 2 < 30 | 3 | 2 | 3 |
| 3 | 3 < 30 | 5 | 3 | 5 |
| 4 | 5 < 30 | 8 | 5 | 8 |
| 5 | 8 < 30 | 13 | 8 | 13 |
| 6 | 13 < 30 | 21 | 13 | 21 |
| 7 | 21 < 30 | 34 | 21 | 34 |
| | 34 < 30 falso | | | |

Output (verificato): `a=21 b=34`. `t` serve a non perdere il vecchio `b`: se si scrivesse `a = b; b = a + b;`, `a` sarebbe già sovrascritto e `b` raddoppierebbe soltanto.

### Il pattern di lettura

Con la sentinella il dato va letto **prima** del ciclo, perché la condizione lo deve controllare, e poi **riletto in fondo al corpo**, così il controllo successivo guarda il dato nuovo:

```
leggi dato
while (dato non è la sentinella) {
    usa dato
    leggi dato
}
```

Se si leggesse all'inizio del corpo, la sentinella verrebbe usata come un dato normale prima del controllo. Lo stesso schema torna con `getchar` in [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/).

Esempio 1, il massimo di una sequenza terminata da 0. Il massimo si inizializza con il **primo dato**, non con 0: con soli numeri negativi uno 0 iniziale vincerebbe sempre.

```c
#include <stdio.h>

int main(void)
{
    int dato = 0;
    int max;
    int quanti = 0;
    int letti;

    letti = scanf("%d", &dato);
    max = dato;
    while (letti == 1 && dato != 0) {
        quanti++;
        if (dato > max) {
            max = dato;
        }
        letti = scanf("%d", &dato);
    }
    if (quanti == 0) {
        printf("nessun dato\n");
    } else {
        printf("letti=%d max=%d\n", quanti, max);
    }
    return 0;
}
```

Con input `4 -2 9 3 0 8`:

| giro | condizione | `dato` usato | `quanti` | `max` | letto dopo |
| --- | --- | --- | --- | --- | --- |
| inizio | | | 0 | 4 | 4 |
| 1 | 4 != 0 | 4 | 1 | 4 | -2 |
| 2 | -2 != 0 | -2 | 2 | 4 | 9 |
| 3 | 9 != 0 | 9 | 3 | 9 | 3 |
| 4 | 3 != 0 | 3 | 4 | 9 | 0 |
| | 0 != 0 falso | | | | |

Output (verificato): `letti=4 max=9`. Con `-5 -3 -8 0` stampa `letti=3 max=-3`; con `0` subito stampa `nessun dato`.

Esempio 2, lettura e controllo nella stessa condizione: contare i positivi fino alla sentinella -1.

```c
#include <stdio.h>

int main(void)
{
    int dato;
    int positivi = 0;

    while (scanf("%d", &dato) == 1 && dato != -1) {
        if (dato > 0) {
            positivi++;
        }
    }
    printf("positivi=%d\n", positivi);
    return 0;
}
```

La condizione legge e poi controlla: `&&` valuta `dato != -1` solo se `scanf` ha letto davvero (cortocircuito). Con input `3 -5 0 7 -1 4` conta 3 e 7: output `positivi=2` (verificato). Qui lo 0 è un dato normale, perché la sentinella è -1. È la stessa forma compatta di `while ((c = getchar()) != EOF)`.

### Cicli annidati

Il corpo di un `while` può contenere un altro `while`. Il ciclo interno **riparte da capo** a ogni giro di quello esterno, quindi la sua variabile va rimessa al valore iniziale dentro il corpo esterno. Per le figure: il ciclo esterno scorre le righe `r`, quello interno le colonne `c`, e dopo il ciclo interno si va a capo. Nelle slide di questo deck non ci sono; servono per i quadrati $N \times N$ della teorica, e si ritrovano con il `for` in [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/).

Esempio 1, un rettangolo pieno di 3 righe e 4 colonne:

```c
#include <stdio.h>

int main(void)
{
    int r = 0;

    while (r < 3) {
        int c = 0;
        while (c < 4) {
            printf("*");
            c++;
        }
        printf("\n");
        r++;
    }
    return 0;
}
```

Output (verificato): tre righe di `****`. Il `printf("*")` si esegue $3 \cdot 4 = 12$ volte.

Controesempio: se `c` si dichiara e si azzera **fuori** dal ciclo esterno (`int c = 0;` prima del primo `while`), al secondo giro esterno `c` vale già 4, il ciclo interno non parte e si stampano solo gli a capo. Output (verificato): `****` e poi due righe vuote.

Esempio 2, un quadrato $4 \times 4$ a pattern. Si decide il carattere di ogni casella dal confronto fra `r` e `c`: sulla diagonale `r == c`, sopra `c > r`, sotto `c < r`.

```c
#include <stdio.h>

int main(void)
{
    int N = 4;
    int r = 0;

    while (r < N) {
        int c = 0;
        while (c < N) {
            if (c == r)
                printf("\\");
            else if (c > r)
                printf("+");
            else
                printf("-");
            c++;
        }
        printf("\n");
        r++;
    }
    return 0;
}
```

Output (verificato):

```
\+++
-\++
--\+
---\
```

`"\\"` è la sequenza di escape del carattere `\`. Come si ragiona su un pattern: si disegna la griglia con gli indici, si cerca la condizione su `r` e `c` che separa i caratteri, si controlla su una riga e una colonna di bordo.

### Efficienza: contare i giri

(<span class="src">slide 56-57</span>) Due algoritmi corretti per lo stesso problema si confrontano, dice la slide, "in termini di istruzioni eseguite": quante volte si esegue il corpo del `while`. Il conto dipende dai dati: un algoritmo può vincere su una coppia e perdere su un'altra. Verificati con un contatore aggiunto nei due programmi:

| $(m, n)$ | MCD | giri Euclide (sottrazioni) | giri definizione |
| --- | --- | --- | --- |
| (1000, 500) | 500 | **1** | 500 |
| (1000, 2) | 2 | 499 | **2** |
| (15, 3) | 3 | 4 | 3 |
| (7, 5) | 1 | 4 | 5 |
| (12, 18) | 6 | 2 | 12 |

La definizione fa sempre $\min(m, n)$ giri. Euclide per sottrazioni è velocissimo con numeri vicini o multipli, lento quando uno è molto più piccolo dell'altro: con (1000, 2) toglie 2 per 499 volte.

Due esempi per allenarsi a contare senza eseguire:
- `i = 0; while (i < 10) i += 3;` gira per `i` = 0, 3, 6, 9: **4** giri, si esce con `i` = 12.
- `i = 1; while (i < 100) i *= 2;` gira per `i` = 1, 2, 4, 8, 16, 32, 64: **7** giri, si esce con `i` = 128. Raddoppiare fa crescere `i` in fretta: i giri sono circa $\log_2 100$, contro i 99 di un `i++`.

## Metodo

**Scrivere un ciclo.**
1. Cosa si ripete? Diventa il corpo.
2. Quando ci si ferma? Scrivi la condizione di **uscita**, poi negala (De Morgan, [Algebra di Boole](/uni/prog-1/algebra-di-boole/)): quella è la condizione del `while`. Esempio: "esci quando arriva 0 o l'input finisce" diventa `letti == 1 && dato != 0`.
3. Quali variabili servono dal primo giro? Inizializzale prima del ciclo (0 per somme e conteggi, 1 per prodotti, il primo dato per massimo e minimo).
4. Cosa, nel corpo, fa avanzare verso l'uscita? Se niente cambia, il ciclo è infinito.
5. Prova a mano il caso zero giri e il caso un giro.

**Ciclo che conta da 1 a n.**

```
i = 1;
while (i <= n) {
    ...
    i++;
}
```

Esegue il corpo $n$ volte, ed esce con $i = n + 1$. Con `i = 0; while (i < n)` sono ancora $n$ giri, ed esce con $i = n$.

**Tracciare un ciclo all'esame.**
1. Una colonna per variabile, più una per la condizione e una per l'output.
2. Riga iniziale con i valori prima del ciclo.
3. Per ogni giro: calcola la condizione con i valori correnti, poi esegui il corpo istruzione per istruzione e scrivi i valori finali.
4. Con `k--` o `i++` dentro la condizione: si confronta il valore **vecchio**, poi la variabile cambia, anche nel test che fa uscire.
5. All'uscita rileggi le tre risposte: giri, valori finali, output esatto (spazi e a capo compresi).

**Algoritmo di Euclide per sottrazioni a mano.** Scrivi la coppia, sottrai il minore dal maggiore, riscrivi la coppia; fermati quando sono uguali. Controllo: il risultato divide i due numeri di partenza.

## Esempi svolti a lezione

### Esempio della slide 41

`while (z != y) {y = z - x; x = x*3;}` serve solo a mostrare la sintassi, ma tracciarlo dice molto. Con $x = 0$, $y = 1$, $z = 4$:

| giro | `z != y` | `y` | `x` |
| --- | --- | --- | --- |
| inizio | | 1 | 0 |
| 1 | 4 != 1 vero | 4 - 0 = 4 | 0·3 = 0 |
| | 4 != 4 falso | | |

Un giro, si esce con `x=0 y=4 z=4` (verificato). Ma se $x$ non è zero il ciclo non finisce mai: `y = z - x` è uguale a `z` solo quando $x = 0$, e `x = x*3` non porta mai a zero un numero diverso da zero. Con $x = 1$: `y` diventa 3, poi 1, poi -5... e non vale mai 4. Un ciclo che termina solo per certi dati iniziali è un classico da tracing.

### Somma dei primi 5 interi

(<span class="src">slide 43-44</span>) Si riconosce un problema di accumulatore: un contatore `i` da 1 a 5 e una somma che raccoglie.

```c
#include <stdio.h>

int main(void)
{
    int Somma = 0;
    int n = 5;
    int i;

    i = 1;
    while (i <= n) {
        Somma += i;
        i++;
    }
    printf("Somma= %d\n", Somma);
    return 0;
}
```

| giro | `i <= n` | `Somma` | `i` |
| --- | --- | --- | --- |
| inizio | | 0 | 1 |
| 1 | 1 <= 5 | 0 + 1 = 1 | 2 |
| 2 | 2 <= 5 | 1 + 2 = 3 | 3 |
| 3 | 3 <= 5 | 3 + 3 = 6 | 4 |
| 4 | 4 <= 5 | 6 + 4 = 10 | 5 |
| 5 | 5 <= 5 | 10 + 5 = 15 | 6 |
| | 6 <= 5 falso | | |

Output: `Somma= 15` (verificato). Il corpo gira 5 volte e si esce con `i` a 6. Controllo: $1 + 2 + \ldots + n = n(n+1)/2 = 5 \cdot 6 / 2 = 15$.

La slide chiede "Cosa succede se scrivete `int Somma;`?", cioè senza inizializzare a 0. Una variabile locale non inizializzata ha un valore **indeterminato**, e leggerla (lo fa il primo `Somma += i`) è comportamento indefinito: in pratica di solito parte da quello che c'era in memoria e la somma esce sbagliata, a volte giusta per caso, il che è peggio. La slide si chiede anche se `n=5,i;` debba essere inizializzato ("Inizializzazione necessaria?"): `n` sì, perché serve alla condizione; `i` riceve il valore da `i=1;` prima del ciclo, quindi va bene così.

### Somma con sentinella 0

(<span class="src">slide 45-46</span>) Il programma della slide 46 legge con `scanf` prima del ciclo ("leggo dato prima ciclo, possibile sentinella") e in fondo al corpo; il commento "Manca qualcosa?" e il fumetto "Inizializzazione variabile Somma" puntano a `int Somma=0`. Qui c'è in più il controllo del valore di ritorno di `scanf`:

```c
#include <stdio.h>

int main(void)
{
    int Somma = 0;
    int dato;
    int letti;

    letti = scanf("%d", &dato);
    while (letti == 1 && dato != 0) {
        Somma += dato;
        letti = scanf("%d", &dato);
    }
    printf("Somma= %d\n", Somma);
    return 0;
}
```

Con input `4 7 -2 10 0 99`:

| giro | condizione | `dato` usato | `Somma` | letto dopo |
| --- | --- | --- | --- | --- |
| inizio | | | 0 | 4 |
| 1 | 4 != 0 | 4 | 4 | 7 |
| 2 | 7 != 0 | 7 | 11 | -2 |
| 3 | -2 != 0 | -2 | 9 | 10 |
| 4 | 10 != 0 | 10 | 19 | 0 |
| | 0 != 0 falso | | | |

Output: `Somma= 19` (verificato). Il 99 dopo la sentinella non viene mai letto. Con input `0` subito il corpo non gira e stampa `Somma= 0`.

Perché il controllo di `letti`: `scanf` restituisce quanti valori ha letto. Se l'input finisce senza lo 0 restituisce `EOF` e **non tocca** `dato`. Il programma della slide, senza controllo, a quel punto somma all'infinito l'ultimo numero letto: provato con input `5 3` e un limite di sicurezza a 1000 giri, la somma arriva a 3002.

Sulla slide la stringa di formato è `"Somma= %d\n "`, con uno spazio dopo `\n`: stampa uno spazio in più all'inizio della riga successiva. Innocuo, ma è il genere di dettaglio che conta quando si chiede l'output esatto.

### MCD con Euclide (soluzione 1)

(<span class="src">slide 49-50</span>) Esempi della slide, tracciati per intero:

| giro | $(m, n)$ per $MCD(15, 3)$ | $(m, n)$ per $MCD(7, 5)$ |
| --- | --- | --- |
| inizio | (15, 3) | (7, 5) |
| 1 | 15 - 3: (12, 3) | 7 - 5: (2, 5) |
| 2 | 12 - 3: (9, 3) | 5 - 2: (2, 3) |
| 3 | 9 - 3: (6, 3) | 3 - 2: (2, 1) |
| 4 | 6 - 3: (3, 3) | 2 - 1: (1, 1) |
| fine | uguali: MCD = 3 | uguali: MCD = 1 |

Quattro giri in entrambi i casi (verificato). La slide scrive il secondo come `MCD(3,2) = MCD(1,2)`, scambiando l'ordine: l'MCD non dipende dall'ordine, il risultato non cambia. Il caso MCD = 1 vuol dire che 7 e 5 sono **primi fra loro**.

Codice della slide 50, con controllo dell'input:

```c
#include <stdio.h>

int main(void)
{
    int m;
    int n;
    int MCD;

    printf("Inserisci m=");
    if (scanf("%d", &m) != 1) {
        return 1;
    }
    printf("Inserisci n=");
    if (scanf("%d", &n) != 1) {
        return 1;
    }
    if (m <= 0 || n <= 0) {
        printf("servono due interi positivi\n");
        return 1;
    }

    while (m != n) {
        if (m > n) m = m - n;
        else n = n - m;
    }
    MCD = n;
    printf("MCD=%d\n", MCD);
    return 0;
}
```

La slide dichiara anche `min` e `contatore`, che qui non servono (gcc `-Wall` le segnala come inutilizzate). Nel corpo del `while` c'è un `if-else`: è l'istruzione composta dentro un'altra della slide 42.

**"Perché `n` e non `m`?"** chiede la slide su `MCD=n;`. Si esce dal ciclo solo quando `m != n` è falso, cioè quando $m = n$: `MCD=m;` darebbe lo stesso risultato.

Tracing su (1000, 2), la coppia della slide 57:

| giro | `m` | `n` | ramo |
| --- | --- | --- | --- |
| inizio | 1000 | 2 | |
| 1 | 998 | 2 | `m > n` |
| 2 | 996 | 2 | `m > n` |
| … | … | 2 | |
| 499 | 2 | 2 | `m > n` |
| | 2 != 2 falso | | |

A ogni giro `m` cala di 2: da 1000 a 2 servono $(1000 - 2) / 2 = 499$ giri. Stampa `MCD=2` (verificato). Su (1000, 500) basta un giro: 1000 - 500 = 500, e i due sono uguali.

**Errore del programma della slide.** Se uno dei due input è 0 il ciclo non termina: con $m = 0$, $n = 5$ il ramo `else` fa `n = 5 - 0` all'infinito. L'algoritmo vale per interi **positivi**, come dice il testo del problema, e il programma deve controllarlo (è il `m <= 0 || n <= 0` aggiunto sopra, verificato con input `0 5`).

### MCD per definizione (soluzione 2)

(<span class="src">slide 51-54</span>) Si provano tutti i candidati da 1 al minore dei due, e si tiene l'ultimo che li divide entrambi. Il minore basta perché un divisore di un numero positivo non può superarlo. Siccome i candidati crescono, l'ultimo trovato è il più grande.

Come si controlla "`contatore` divide `m`" senza `%`? Con la divisione intera: `(m/contatore)*contatore` è uguale a `m` solo se la divisione non ha resto. Con $m = 15$: `(15/4)*4` è `3*4`, cioè 12, diverso da 15; `(15/5)*5` è `3*5`, cioè 15, uguale.

La slide 52 contiene due errori, corretti nella 53: le parentesi dell'`if` sono sbilanciate (`if ((m/mcd)*mcd == m) && (...) )`, non compila) e divide per `mcd` invece che per `contatore`. Lo scheletro delle slide 51-54 è in pseudo-C (`main()` senza tipo, `scanf(n)`, `printf(mcd)`). Versione 2a corretta:

```c
#include <stdio.h>

int main(void)
{
    int m;
    int n;
    int mcd;
    int min;
    int contatore;

    if (scanf("%d %d", &n, &m) != 2 || n <= 0 || m <= 0) {
        printf("servono due interi positivi\n");
        return 1;
    }
    mcd = 1;
    if (n <= m) min = n; else min = m;
    contatore = 1;
    while (contatore <= min) {
        if ((m / contatore) * contatore == m && (n / contatore) * contatore == n)
            mcd = contatore;
        contatore = contatore + 1;
    }
    printf("%d\n", mcd);
    return 0;
}
```

La nota della slide 53: "divisione tra numeri interi sarà approssimata in generale, evitare usare divisioni se possibile". Qui funziona proprio perché tronca.

Versione 2b (<span class="src">slide 54</span>): stesso programma, con l'operatore `%` (resto della divisione intera) al posto del trucco. Cambia solo la riga dell'`if`:

```c
#include <stdio.h>

int main(void)
{
    int m;
    int n;
    int mcd;
    int min;
    int contatore;

    if (scanf("%d %d", &n, &m) != 2 || n <= 0 || m <= 0) {
        printf("servono due interi positivi\n");
        return 1;
    }
    mcd = 1;
    if (n <= m) min = n; else min = m;
    contatore = 1;
    while (contatore <= min) {
        if (!(m % contatore) && !(n % contatore))
            mcd = contatore;
        contatore = contatore + 1;
    }
    printf("%d\n", mcd);
    return 0;
}
```

`!(m % contatore)` è vero quando il resto è 0, cioè quando `contatore` divide `m`. Le versioni danno 3 su (15, 3), 1 su (7, 5), 2 su (1000, 2), 6 su (12, 18), come Euclide (verificato).

Tracing della 2b su $n = 8$, $m = 12$ (input `8 12`): `min` vale 8.

| giro | `contatore` | `m % contatore` | `n % contatore` | divide entrambi? | `mcd` |
| --- | --- | --- | --- | --- | --- |
| inizio | 1 | | | | 1 |
| 1 | 1 | 0 | 0 | sì | 1 |
| 2 | 2 | 0 | 0 | sì | 2 |
| 3 | 3 | 0 | 2 | no | 2 |
| 4 | 4 | 0 | 0 | sì | 4 |
| 5 | 5 | 2 | 3 | no | 4 |
| 6 | 6 | 0 | 2 | no | 4 |
| 7 | 7 | 5 | 1 | no | 4 |
| 8 | 8 | 4 | 0 | no | 4 |
| | 9 <= 8 falso | | | | |

Stampa 4 (verificato), dopo 8 giri ed esce con `contatore` = 9. Euclide sulla stessa coppia fa 2 giri: (8, 12) → (8, 4) → (4, 4).

**Errori di etichetta nelle slide.** La slide 54 dice "Soluzione 1b" nel testo e "2b" nel titolo. La 55 chiama Soluzione 1 la definizione e Soluzione 2 Euclide, al contrario delle slide 47 e 51. Le 56 e 57 parlano di "minimo comune divisore": è il **massimo** (il minimo comune divisore di due interi è sempre 1).

### Moltiplicazione con ×2, /2 e somme

(<span class="src">slide 69-73</span>) Il problema: (a) descrivere un algoritmo per moltiplicare $m$ per $n$ usando solo moltiplicazioni e divisioni per 2 e somme; (b) scriverlo in C. L'idea della slide: si scrive $n = 2 k_1 + r_1$ (quoziente e resto della divisione per 2), poi $k_1 = 2 k_2 + r_2$, e così via:

$$
m \cdot n = m (2 k_1 + r_1) = m (2 (2 k_2 + r_2) + r_1) = \ldots
$$

In pratica si dimezza un fattore e si raddoppia l'altro. Un esempio a mano, $13 \cdot 6$:

```
13 · 6  = 26 · 3          6 è pari: dimezzo 6, raddoppio 13
26 · 3  = 26 · (2·1 + 1)  3 è dispari: 3/2 dà 1 con resto 1
        = 52 · 1 + 26     il resto vale 26 · 1: lo metto da parte in sum
        = 52 + 26 = 78
```

Quando il fattore da dimezzare è dispari, la divisione intera perde un'unità, e quella parte si recupera sommando l'altro fattore a parte. La slide 73: "la variabile `mult` accumula le moltiplicazioni per 2, la variabile `sum` accumula le somme derivanti dai resti".

```c
#include <stdio.h>

int main(void)
{
    int m;
    int n;
    int mult;
    int max;
    int min;
    int sum;

    if (scanf("%d", &m) != 1 || scanf("%d", &n) != 1) {
        return 1;
    }
    if (n > m) {
        max = n;
        min = m;
    }
    else {
        max = m;
        min = n;
    }
    mult = max;
    sum = 0;
    while (min > 1) {
        if (min % 2) {
            sum += mult;
        }
        mult = mult * 2;
        min = min / 2;
    }
    printf("n=%d\n", n);
    printf("m=%d\n", m);
    printf("mult=%d\n", mult + sum);
    return 0;
}
```

Tracing con $m = 6$, $n = 13$ (quindi `max` = 13, `min` = 6):

| giro | `min > 1` | `min % 2` | `sum` | `mult` | `min` | `mult * min + sum` |
| --- | --- | --- | --- | --- | --- | --- |
| inizio | | | 0 | 13 | 6 | 78 |
| 1 | 6 > 1 | 0 | 0 | 26 | 3 | 78 |
| 2 | 3 > 1 | 1 | 0 + 26 = 26 | 52 | 1 | 78 |
| | 1 > 1 falso | | | | | |

Stampa `n=13`, `m=6`, `mult=78` (verificato). L'ultima colonna è sempre $78 = 6 \cdot 13$: è l'**invariante** del ciclo, la quantità che il corpo non cambia. Quando `min` arriva a 1 resta `mult * 1 + sum`, che è quello che il programma stampa. Si usa il minore come fattore da dimezzare perché così i giri sono meno (circa $\log_2$ del minore).

Perché l'invariante regge in un giro con `min` dispari, $min = 2k + 1$: prima vale $mult \cdot (2k+1) + sum$; dopo il corpo `sum` vale $sum + mult$, `mult` vale $2 \cdot mult$, `min` vale $k$, e $2 \cdot mult \cdot k + sum + mult = mult (2k + 1) + sum$. Con `min` pari il resto non c'è e `sum` non cambia.

**Errori del programma della slide** (verificati): funziona solo con fattori positivi.
- Se un fattore è 0, `min` vale 0, il ciclo non parte e stampa `max`: $5 \cdot 0$ dà 5.
- Se un fattore è negativo, `min` è negativo, il ciclo non parte: $-3 \cdot 4$ dà 4.

Il testo dice "due numeri interi", quindi il programma andrebbe completato con i casi 0 e negativi, o il testo ristretto ai positivi.

### La scala a passi da 1, 2 o 3

(<span class="src">slide 74-97</span>) Una scala di $N$ gradini si sale con passi da 1, 2 o 3 gradini. In quanti modi diversi si arriva in cima? Era già stato lasciato aperto in [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/). Sulle slide 75-76 il prof disegna la scala da 1 a $N$ con i salti da uno, da uno o due, da uno due o tre gradini.

**Casi piccoli** (<span class="src">slide 77-80</span>):
- $N = 1$: solo `1`. $S(1) = 1$.
- $N = 2$: `1+1`, `2`. $S(2) = 2$.
- $N = 3$: `1+1+1`, `1+2`, `2+1`, `3`. $S(3) = 4$.
- $N = 4$: il **primo** passo è da 1, da 2 o da 3. Dopo un passo da 1 restano 3 gradini, che si salgono in $S(3)$ modi; dopo uno da 2 ne restano 2; dopo uno da 3 ne resta 1. Quindi $S(4) = S(3) + S(2) + S(1) = 4 + 2 + 1 = 7$.

Controllo di $S(4) = 7$ elencandoli: `1+1+1+1`, `1+1+2`, `1+2+1`, `2+1+1`, `2+2`, `1+3`, `3+1`. Sono 7.

Il ragionamento di $N = 4$ vale per ogni $N > 3$ (<span class="src">slide 91-92</span>, dove la slide prima mostra la successione con "S(n) = ???" e poi la risposta):

$$
S(n) = S(n-1) + S(n-2) + S(n-3)
$$

```
N    1  2  3  4   5   6   7   8    9    10
S    1  2  4  7  13  24  44  81  149   274
```

Ogni valore è la somma dei tre prima: $S(7) = 24 + 13 + 7 = 44$.

**Pseudocodice** (<span class="src">slide 81-84</span>). Non serve ricordare tutta la successione, bastano gli ultimi tre valori:
1. leggi $N$;
2. inizializza le soluzioni note, per $N$ = 0, 1, 2;
3. tienile in tre variabili, che contengono le soluzioni per $K-3$, $K-2$ e $K-1$;
4. in un ciclo fai crescere $K$ da 3 fino a $N$: la soluzione per $K$ è la somma delle tre variabili, poi le tre variabili **scorrono** di un posto.

<figure class="fig"><svg role="img" aria-label="Scala variabili che scorrono" xmlns:xlink="http://www.w3.org/1999/xlink" width="545.873072pt" height="266.544pt" viewBox="0 0 545.873072 266.544" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f3241bf-figure_1"> <g id="f3241bf-patch_1"> <path d="M 0 266.544 L 545.873072 266.544 L 545.873072 0 L 0 0 L 0 266.544 z " style="fill: none"/> </g> <g id="f3241bf-axes_1"> <g id="f3241bf-patch_2"> <path d="M 46.455319 146.837106 L 106.141787 146.837106 L 106.141787 108.854809 L 46.455319 108.854809 L 46.455319 146.837106 z " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f3241bf-patch_3"> <path d="M 106.141787 146.837106 L 165.828255 146.837106 L 165.828255 108.854809 L 106.141787 108.854809 L 106.141787 146.837106 z " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f3241bf-patch_4"> <path d="M 165.828255 146.837106 L 225.514723 146.837106 L 225.514723 108.854809 L 165.828255 108.854809 L 165.828255 146.837106 z " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f3241bf-patch_5"> <path d="M 225.514723 146.837106 L 285.201191 146.837106 L 285.201191 108.854809 L 225.514723 108.854809 L 225.514723 146.837106 z " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f3241bf-patch_6"> <path d="M 285.201191 146.837106 L 344.88766 146.837106 L 344.88766 108.854809 L 285.201191 108.854809 L 285.201191 146.837106 z " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f3241bf-patch_7"> <path d="M 344.88766 146.837106 L 404.574128 146.837106 L 404.574128 108.854809 L 344.88766 108.854809 L 344.88766 146.837106 z " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f3241bf-patch_8"> <path d="M 404.574128 146.837106 L 464.260596 146.837106 L 464.260596 108.854809 L 404.574128 108.854809 L 404.574128 146.837106 z " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f3241bf-line2d_1"> <path d="M 49.16834 92.576681 L 222.801702 92.576681 " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f3241bf-line2d_2"> <path d="M 49.16834 92.576681 L 49.16834 103.428766 " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f3241bf-line2d_3"> <path d="M 222.801702 92.576681 L 222.801702 103.428766 " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f3241bf-line2d_4"> <path d="M 108.854809 203.810553 L 282.48817 203.810553 " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f3241bf-line2d_5"> <path d="M 108.854809 203.810553 L 108.854809 173.967319 " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f3241bf-line2d_6"> <path d="M 282.48817 203.810553 L 282.48817 173.967319 " clip-path="url(#f3241bf-pcfe23cf4c1)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f3241bf-text_1"> <!-- 1 --> <g style="fill: var(--fig-ink)" transform="translate(72.38535 131.222911) scale(0.13 -0.13)"> <defs> <path id="f3241bf-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-14"/> </g> </g> <g id="f3241bf-text_2"> <!-- S(0) --> <g style="fill: var(--fig-axis)" transform="translate(64.257928 165.71289) scale(0.1 -0.1)"> <defs> <path id="f3241bf-DejaVuSansMono-36" d="M 3163 4506 L 3163 3866 Q 2875 4050 2586 4144 Q 2297 4238 2003 4238 Q 1556 4238 1297 4030 Q 1038 3822 1038 3469 Q 1038 3159 1208 2996 Q 1378 2834 1844 2725 L 2175 2650 Q 2831 2497 3131 2169 Q 3431 1841 3431 1275 Q 3431 609 3018 259 Q 2606 -91 1819 -91 Q 1491 -91 1159 -20 Q 828 50 494 191 L 494 863 Q 853 634 1173 528 Q 1494 422 1819 422 Q 2297 422 2562 636 Q 2828 850 2828 1234 Q 2828 1584 2645 1768 Q 2463 1953 2009 2053 L 1672 2131 Q 1022 2278 728 2575 Q 434 2872 434 3372 Q 434 3997 854 4373 Q 1275 4750 1972 4750 Q 2241 4750 2537 4689 Q 2834 4628 3163 4506 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-b" d="M 2766 4856 Q 2350 4144 2145 3436 Q 1941 2728 1941 2009 Q 1941 1294 2145 584 Q 2350 -125 2766 -844 L 2266 -844 Q 1794 -100 1562 604 Q 1331 1309 1331 2009 Q 1331 2706 1562 3412 Q 1794 4119 2266 4856 L 2766 4856 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-c" d="M 1088 4856 L 1588 4856 Q 2059 4119 2290 3412 Q 2522 2706 2522 2009 Q 2522 1306 2290 600 Q 2059 -106 1588 -844 L 1088 -844 Q 1503 -119 1708 590 Q 1913 1300 1913 2009 Q 1913 2722 1708 3431 Q 1503 4141 1088 4856 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-36"/> <use xlink:href="#f3241bf-DejaVuSansMono-b" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-c" transform="translate(180.609375 0)"/> </g> </g> <g id="f3241bf-text_3"> <!-- 1 --> <g style="fill: var(--fig-ink)" transform="translate(132.071818 131.222911) scale(0.13 -0.13)"> <use xlink:href="#f3241bf-DejaVuSansMono-14"/> </g> </g> <g id="f3241bf-text_4"> <!-- S(1) --> <g style="fill: var(--fig-axis)" transform="translate(123.944396 165.71289) scale(0.1 -0.1)"> <use xlink:href="#f3241bf-DejaVuSansMono-36"/> <use xlink:href="#f3241bf-DejaVuSansMono-b" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-c" transform="translate(180.609375 0)"/> </g> </g> <g id="f3241bf-text_5"> <!-- 2 --> <g style="fill: var(--fig-ink)" transform="translate(191.758286 131.222911) scale(0.13 -0.13)"> <defs> <path id="f3241bf-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-15"/> </g> </g> <g id="f3241bf-text_6"> <!-- S(2) --> <g style="fill: var(--fig-axis)" transform="translate(183.630864 165.71289) scale(0.1 -0.1)"> <use xlink:href="#f3241bf-DejaVuSansMono-36"/> <use xlink:href="#f3241bf-DejaVuSansMono-b" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-15" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-c" transform="translate(180.609375 0)"/> </g> </g> <g id="f3241bf-text_7"> <!-- 4 --> <g style="fill: var(--fig-ink)" transform="translate(251.444754 131.222911) scale(0.13 -0.13)"> <defs> <path id="f3241bf-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-17"/> </g> </g> <g id="f3241bf-text_8"> <!-- S(3) --> <g style="fill: var(--fig-axis)" transform="translate(243.317332 165.71289) scale(0.1 -0.1)"> <defs> <path id="f3241bf-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-36"/> <use xlink:href="#f3241bf-DejaVuSansMono-b" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-16" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-c" transform="translate(180.609375 0)"/> </g> </g> <g id="f3241bf-text_9"> <!-- 7 --> <g style="fill: var(--fig-ink)" transform="translate(311.131222 131.222911) scale(0.13 -0.13)"> <defs> <path id="f3241bf-DejaVuSansMono-1a" d="M 434 4666 L 3372 4666 L 3372 4397 L 1703 0 L 1044 0 L 2669 4134 L 434 4134 L 434 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-1a"/> </g> </g> <g id="f3241bf-text_10"> <!-- S(4) --> <g style="fill: var(--fig-axis)" transform="translate(303.003801 165.71289) scale(0.1 -0.1)"> <use xlink:href="#f3241bf-DejaVuSansMono-36"/> <use xlink:href="#f3241bf-DejaVuSansMono-b" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-17" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-c" transform="translate(180.609375 0)"/> </g> </g> <g id="f3241bf-text_11"> <!-- 13 --> <g style="fill: var(--fig-faint)" transform="translate(366.904487 131.222911) scale(0.13 -0.13)"> <use xlink:href="#f3241bf-DejaVuSansMono-14"/> <use xlink:href="#f3241bf-DejaVuSansMono-16" transform="translate(60.203125 0)"/> </g> </g> <g id="f3241bf-text_12"> <!-- S(5) --> <g style="fill: var(--fig-axis)" transform="translate(362.690269 165.71289) scale(0.1 -0.1)"> <defs> <path id="f3241bf-DejaVuSansMono-18" d="M 647 4666 L 3009 4666 L 3009 4134 L 1222 4134 L 1222 2988 Q 1356 3038 1492 3061 Q 1628 3084 1766 3084 Q 2491 3084 2916 2656 Q 3341 2228 3341 1497 Q 3341 759 2895 334 Q 2450 -91 1678 -91 Q 1306 -91 998 -41 Q 691 9 447 109 L 447 750 Q 734 594 1025 517 Q 1316 441 1619 441 Q 2141 441 2423 716 Q 2706 991 2706 1497 Q 2706 1997 2414 2275 Q 2122 2553 1600 2553 Q 1347 2553 1106 2495 Q 866 2438 647 2322 L 647 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-36"/> <use xlink:href="#f3241bf-DejaVuSansMono-b" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-18" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-c" transform="translate(180.609375 0)"/> </g> </g> <g id="f3241bf-text_13"> <!-- 24 --> <g style="fill: var(--fig-faint)" transform="translate(426.590955 131.222911) scale(0.13 -0.13)"> <use xlink:href="#f3241bf-DejaVuSansMono-15"/> <use xlink:href="#f3241bf-DejaVuSansMono-17" transform="translate(60.203125 0)"/> </g> </g> <g id="f3241bf-text_14"> <!-- S(6) --> <g style="fill: var(--fig-axis)" transform="translate(422.376737 165.71289) scale(0.1 -0.1)"> <defs> <path id="f3241bf-DejaVuSansMono-19" d="M 3097 4563 L 3097 3981 Q 2900 4097 2678 4158 Q 2456 4219 2216 4219 Q 1616 4219 1306 3767 Q 997 3316 997 2438 Q 1147 2750 1412 2917 Q 1678 3084 2022 3084 Q 2697 3084 3067 2670 Q 3438 2256 3438 1497 Q 3438 741 3056 325 Q 2675 -91 1984 -91 Q 1172 -91 794 492 Q 416 1075 416 2328 Q 416 3509 870 4129 Q 1325 4750 2188 4750 Q 2419 4750 2650 4701 Q 2881 4653 3097 4563 z M 1972 2591 Q 1569 2591 1337 2300 Q 1106 2009 1106 1497 Q 1106 984 1337 693 Q 1569 403 1972 403 Q 2391 403 2603 679 Q 2816 956 2816 1497 Q 2816 2041 2603 2316 Q 2391 2591 1972 2591 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-36"/> <use xlink:href="#f3241bf-DejaVuSansMono-b" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-19" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-c" transform="translate(180.609375 0)"/> </g> </g> <g id="f3241bf-text_15"> <!-- S --> <g style="fill: var(--fig-axis)" transform="translate(30.096255 130.963145) scale(0.12 -0.12)"> <defs> <path id="f3241bf-DejaVuSerif-36" d="M 594 225 L 594 1288 L 953 1284 Q 969 753 1261 498 Q 1553 244 2150 244 Q 2706 244 2998 464 Q 3291 684 3291 1106 Q 3291 1444 3114 1625 Q 2938 1806 2369 1978 L 1753 2163 Q 1084 2366 811 2669 Q 538 2972 538 3500 Q 538 4094 959 4422 Q 1381 4750 2144 4750 Q 2469 4750 2856 4679 Q 3244 4609 3681 4475 L 3681 3481 L 3328 3481 Q 3275 3975 2998 4195 Q 2722 4416 2156 4416 Q 1663 4416 1405 4214 Q 1147 4013 1147 3628 Q 1147 3294 1340 3103 Q 1534 2913 2163 2725 L 2741 2553 Q 3375 2363 3645 2067 Q 3916 1772 3916 1275 Q 3916 597 3481 253 Q 3047 -91 2188 -91 Q 1803 -91 1404 -12 Q 1006 66 594 225 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSerif-36"/> </g> </g> <g id="f3241bf-text_16"> <!-- PassiTipo3 --> <g style="fill: var(--fig-steel)" transform="translate(50.712225 70.367829) scale(0.085 -0.085)"> <defs> <path id="f3241bf-DejaVuSansMono-33" d="M 1247 4147 L 1247 2394 L 1978 2394 Q 2416 2394 2661 2625 Q 2906 2856 2906 3272 Q 2906 3688 2662 3917 Q 2419 4147 1978 4147 L 1247 4147 z M 616 4666 L 1978 4666 Q 2759 4666 3162 4311 Q 3566 3956 3566 3272 Q 3566 2581 3164 2228 Q 2763 1875 1978 1875 L 1247 1875 L 1247 0 L 616 0 L 616 4666 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-56" d="M 3041 3378 L 3041 2816 Q 2794 2959 2544 3031 Q 2294 3103 2034 3103 Q 1644 3103 1451 2976 Q 1259 2850 1259 2591 Q 1259 2356 1403 2240 Q 1547 2125 2119 2016 L 2350 1972 Q 2778 1891 2998 1647 Q 3219 1403 3219 1013 Q 3219 494 2850 201 Q 2481 -91 1825 -91 Q 1566 -91 1281 -36 Q 997 19 666 128 L 666 722 Q 988 556 1281 473 Q 1575 391 1838 391 Q 2219 391 2428 545 Q 2638 700 2638 978 Q 2638 1378 1872 1531 L 1847 1538 L 1631 1581 Q 1134 1678 906 1908 Q 678 2138 678 2534 Q 678 3038 1018 3311 Q 1359 3584 1991 3584 Q 2272 3584 2531 3532 Q 2791 3481 3041 3378 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-37" d="M 147 4666 L 3706 4666 L 3706 4134 L 2247 4134 L 2247 0 L 1613 0 L 1613 4134 L 147 4134 L 147 4666 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-53" d="M 1172 441 L 1172 -1331 L 594 -1331 L 594 3500 L 1172 3500 L 1172 3053 Q 1316 3313 1555 3448 Q 1794 3584 2106 3584 Q 2741 3584 3102 3093 Q 3463 2603 3463 1734 Q 3463 881 3100 395 Q 2738 -91 2106 -91 Q 1788 -91 1548 45 Q 1309 181 1172 441 z M 2859 1747 Q 2859 2416 2648 2756 Q 2438 3097 2022 3097 Q 1603 3097 1387 2755 Q 1172 2413 1172 1747 Q 1172 1084 1387 740 Q 1603 397 2022 397 Q 2438 397 2648 737 Q 2859 1078 2859 1747 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSansMono-33"/> <use xlink:href="#f3241bf-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(240.8125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-37" transform="translate(301.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(361.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-53" transform="translate(421.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-16" transform="translate(541.828125 0)"/> </g> </g> <g id="f3241bf-text_17"> <!-- PassiTipo2 --> <g style="fill: var(--fig-steel)" transform="translate(110.398693 70.367829) scale(0.085 -0.085)"> <use xlink:href="#f3241bf-DejaVuSansMono-33"/> <use xlink:href="#f3241bf-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(240.8125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-37" transform="translate(301.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(361.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-53" transform="translate(421.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-15" transform="translate(541.828125 0)"/> </g> </g> <g id="f3241bf-text_18"> <!-- PassiTipo1 --> <g style="fill: var(--fig-steel)" transform="translate(170.085161 70.367829) scale(0.085 -0.085)"> <use xlink:href="#f3241bf-DejaVuSansMono-33"/> <use xlink:href="#f3241bf-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(240.8125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-37" transform="translate(301.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(361.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-53" transform="translate(421.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-14" transform="translate(541.828125 0)"/> </g> </g> <g id="f3241bf-patch_9"> <path d="M 222.801702 92.576681 Q 239.07983 98.002723 253.660901 102.863081 " style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 250.498624 99.700803 L 253.660901 102.863081 L 249.233712 103.495536 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f3241bf-text_19"> <!-- giro con i = 3: somma = TotaleModi = S(3) --> <g style="fill: var(--fig-steel)" transform="translate(261.326604 81.609621) scale(0.1 -0.1)"> <defs> <path id="f3241bf-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-37" d="M 1222 0 L 1222 331 L 1819 331 L 1819 4294 L 447 4294 L 447 3566 L 63 3566 L 63 4666 L 4206 4666 L 4206 3566 L 3822 3566 L 3822 4294 L 2450 4294 L 2450 331 L 3047 331 L 3047 0 L 1222 0 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-30" d="M 353 0 L 353 331 L 947 331 L 947 4331 L 319 4331 L 319 4666 L 1678 4666 L 3316 1344 L 4953 4666 L 6228 4666 L 6228 4331 L 5606 4331 L 5606 331 L 6203 331 L 6203 0 L 4378 0 L 4378 331 L 4972 331 L 4972 3938 L 3372 684 L 2931 684 L 1331 3938 L 1331 331 L 1925 331 L 1925 0 L 353 0 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSerif-4a"/> <use xlink:href="#f3241bf-DejaVuSerif-4c" transform="translate(64.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-55" transform="translate(96 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(143.796875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(204 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-46" transform="translate(235.78125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(291.78125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-51" transform="translate(351.984375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(416.390625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-4c" transform="translate(448.171875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(480.15625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-20" transform="translate(511.9375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(595.734375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-16" transform="translate(627.515625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-1d" transform="translate(691.140625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(724.828125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-56" transform="translate(756.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(807.921875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-50" transform="translate(868.125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-50" transform="translate(962.953125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-44" transform="translate(1057.78125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1117.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-20" transform="translate(1149.1875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1232.984375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-37" transform="translate(1264.765625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(1323.703125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-57" transform="translate(1383.90625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-44" transform="translate(1424.09375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-4f" transform="translate(1483.71875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-48" transform="translate(1515.703125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-30" transform="translate(1574.890625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(1677.28125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-47" transform="translate(1737.484375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-4c" transform="translate(1801.5 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1833.484375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-20" transform="translate(1865.265625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1949.0625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-36" transform="translate(1980.84375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-b" transform="translate(2049.34375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-16" transform="translate(2088.359375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-c" transform="translate(2151.984375 0)"/> </g> </g> <g id="f3241bf-text_20"> <!-- PassiTipo3 --> <g style="fill: var(--fig-accent)" transform="translate(110.398693 222.297021) scale(0.085 -0.085)"> <use xlink:href="#f3241bf-DejaVuSansMono-33"/> <use xlink:href="#f3241bf-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(240.8125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-37" transform="translate(301.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(361.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-53" transform="translate(421.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-16" transform="translate(541.828125 0)"/> </g> </g> <g id="f3241bf-text_21"> <!-- PassiTipo2 --> <g style="fill: var(--fig-accent)" transform="translate(170.085161 222.297021) scale(0.085 -0.085)"> <use xlink:href="#f3241bf-DejaVuSansMono-33"/> <use xlink:href="#f3241bf-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(240.8125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-37" transform="translate(301.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(361.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-53" transform="translate(421.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-15" transform="translate(541.828125 0)"/> </g> </g> <g id="f3241bf-text_22"> <!-- PassiTipo1 --> <g style="fill: var(--fig-accent)" transform="translate(229.771629 222.297021) scale(0.085 -0.085)"> <use xlink:href="#f3241bf-DejaVuSansMono-33"/> <use xlink:href="#f3241bf-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(120.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(240.8125 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-37" transform="translate(301.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-4c" transform="translate(361.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-53" transform="translate(421.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#f3241bf-DejaVuSansMono-14" transform="translate(541.828125 0)"/> </g> </g> <g id="f3241bf-patch_10"> <path d="M 282.48817 203.810553 Q 298.766298 188.888936 313.725764 175.176092 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 309.425698 176.404682 L 313.725764 175.176092 L 312.128597 179.353299 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f3241bf-text_23"> <!-- giro con i = 4: somma = TotaleModi = S(4) --> <g style="fill: var(--fig-accent)" transform="translate(321.013072 217.260685) scale(0.1 -0.1)"> <defs> <path id="f3241bf-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSerif-4a"/> <use xlink:href="#f3241bf-DejaVuSerif-4c" transform="translate(64.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-55" transform="translate(96 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(143.796875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(204 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-46" transform="translate(235.78125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(291.78125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-51" transform="translate(351.984375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(416.390625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-4c" transform="translate(448.171875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(480.15625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-20" transform="translate(511.9375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(595.734375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-17" transform="translate(627.515625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-1d" transform="translate(691.140625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(724.828125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-56" transform="translate(756.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(807.921875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-50" transform="translate(868.125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-50" transform="translate(962.953125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-44" transform="translate(1057.78125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1117.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-20" transform="translate(1149.1875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1232.984375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-37" transform="translate(1264.765625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(1323.703125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-57" transform="translate(1383.90625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-44" transform="translate(1424.09375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-4f" transform="translate(1483.71875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-48" transform="translate(1515.703125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-30" transform="translate(1574.890625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-52" transform="translate(1677.28125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-47" transform="translate(1737.484375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-4c" transform="translate(1801.5 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1833.484375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-20" transform="translate(1865.265625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-3" transform="translate(1949.0625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-36" transform="translate(1980.84375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-b" transform="translate(2049.34375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-17" transform="translate(2088.359375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-c" transform="translate(2151.984375 0)"/> </g> </g> <g id="f3241bf-text_24"> <!-- le tre variabili sono una finestra di tre celle che a ogni giro scorre di un posto --> <g style="fill: var(--fig-axis)" transform="translate(48.271707 22.038128) scale(0.105 -0.105)"> <defs> <path id="f3241bf-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-ce2" d="M 1003 2988 L 453 2988 L 519 3322 L 1069 3322 L 1128 3622 Q 1247 4238 1673 4550 Q 2100 4863 2816 4863 Q 3088 4863 3364 4822 Q 3641 4781 3903 4697 L 3772 4019 L 3478 4022 Q 3488 4078 3488 4128 Q 3488 4319 3356 4425 Q 3191 4556 2806 4556 Q 2328 4556 2062 4334 Q 1797 4113 1706 3634 L 1644 3322 L 3866 3322 L 3284 331 L 3828 331 L 3766 0 L 2647 0 L 3225 2988 L 1578 2988 L 959 -206 Q 850 -763 506 -1047 Q 163 -1331 -397 -1331 L -359 -1025 Q -31 -1025 128 -850 Q 294 -663 384 -206 L 1003 2988 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-4b" d="M 309 0 L 1191 4531 L 641 4531 L 703 4863 L 1828 4863 L 1416 2731 Q 1641 3069 1928 3241 Q 2216 3413 2553 3413 Q 3103 3413 3300 3097 Q 3422 2906 3422 2588 Q 3422 2378 3369 2113 L 3022 331 L 3534 331 L 3472 0 L 2381 0 L 2756 1931 Q 2819 2253 2819 2469 Q 2819 2659 2769 2763 Q 2666 2988 2284 2988 Q 1884 2988 1617 2697 Q 1350 2406 1244 1850 L 884 0 L 309 0 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-4a" d="M 3822 3322 L 3188 72 Q 3044 -672 2581 -1031 Q 2078 -1422 1381 -1422 Q 1053 -1422 765 -1362 Q 478 -1303 225 -1184 L 363 -488 L 663 -488 Q 653 -813 834 -963 Q 1016 -1113 1406 -1113 Q 1913 -1113 2203 -825 Q 2494 -544 2613 72 L 2700 519 Q 2472 206 2181 57 Q 1891 -91 1525 -91 Q 975 -91 697 281 Q 522 516 503 841 Q 491 1031 534 1256 Q 750 2359 1516 2928 Q 2169 3409 2931 3413 Q 3631 3416 3822 3322 z M 3184 2988 Q 3181 3094 2844 3094 Q 2234 3094 1775 2625 Q 1316 2153 1147 1297 Q 1100 1044 1113 853 Q 1125 659 1203 528 Q 1356 269 1756 269 Q 2194 269 2484 583 Q 2775 897 2891 1497 L 2953 1825 L 3184 2988 z " transform="scale(0.015625)"/> <path id="f3241bf-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4f"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(31.984375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(91.171875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-57" transform="translate(122.953125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-55" transform="translate(163.140625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(210.9375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(270.125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-59" transform="translate(301.90625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-44" transform="translate(358.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-55" transform="translate(418.03125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4c" transform="translate(465.828125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-44" transform="translate(497.8125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-45" transform="translate(557.4375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4c" transform="translate(621.453125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4f" transform="translate(653.4375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4c" transform="translate(685.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(717.40625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-56" transform="translate(749.1875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-52" transform="translate(800.5 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-51" transform="translate(860.703125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-52" transform="translate(925.109375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(985.3125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-58" transform="translate(1017.09375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-51" transform="translate(1081.5 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-44" transform="translate(1145.90625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(1205.53125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-ce2" transform="translate(1237.3125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-51" transform="translate(1304.015625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(1368.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-56" transform="translate(1427.609375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-57" transform="translate(1478.921875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-55" transform="translate(1519.109375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-44" transform="translate(1566.90625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(1626.53125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-47" transform="translate(1658.3125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4c" transform="translate(1722.328125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(1754.3125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-57" transform="translate(1786.09375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-55" transform="translate(1826.28125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(1874.078125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(1933.265625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-46" transform="translate(1965.046875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(2021.046875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4f" transform="translate(2080.234375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4f" transform="translate(2112.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(2144.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(2203.390625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-46" transform="translate(2235.171875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4b" transform="translate(2291.171875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(2355.578125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(2414.765625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-44" transform="translate(2446.546875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(2506.171875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-52" transform="translate(2537.953125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4a" transform="translate(2598.15625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-51" transform="translate(2662.171875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4c" transform="translate(2726.578125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(2758.5625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4a" transform="translate(2790.34375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4c" transform="translate(2854.359375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-55" transform="translate(2886.34375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-52" transform="translate(2934.140625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(2994.34375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-56" transform="translate(3026.125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-46" transform="translate(3077.4375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-52" transform="translate(3133.4375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-55" transform="translate(3193.640625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-55" transform="translate(3241.4375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-48" transform="translate(3289.234375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(3348.421875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-47" transform="translate(3380.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-4c" transform="translate(3444.21875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(3476.203125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-58" transform="translate(3507.984375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-51" transform="translate(3572.390625 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-3" transform="translate(3636.796875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-53" transform="translate(3668.578125 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-52" transform="translate(3732.59375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-56" transform="translate(3792.796875 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-57" transform="translate(3844.109375 0)"/> <use xlink:href="#f3241bf-DejaVuSerif-Italic-52" transform="translate(3884.296875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f3241bf-pcfe23cf4c1"> <rect x="5.76" y="5.76" width="515.474043" height="255.024"/> </clipPath> </defs> </svg></figure>

**Codice** (<span class="src">slide 85-90</span>), con una dichiarazione per riga e il controllo di `scanf`:

```c
#include <stdio.h>

int main(void)
{
    int N;
    int i;
    int TotaleModi = 0;
    int PassiTipo3;
    int PassiTipo2;
    int PassiTipo1;

    printf("inserire numero di gradini della scala: ");
    if (scanf("%d", &N) != 1) {
        return 1;
    }

    if (N < 0) {
        printf("errore numero di gradini\n");
    }
    else if (N <= 2) {
        printf("Combinazioni per salire scala di %d gradini: %d\n", N, N);
    }
    else {
        i = 3;
        PassiTipo3 = 1;
        PassiTipo2 = 1;
        PassiTipo1 = 2;
        while (i < N + 1) {
            TotaleModi = PassiTipo3 + PassiTipo2 + PassiTipo1;
            PassiTipo3 = PassiTipo2;
            PassiTipo2 = PassiTipo1;
            PassiTipo1 = TotaleModi;
            i++;
        }
        printf("Combinazioni per salire scala di %d gradini: %d\n", N, TotaleModi);
    }
    return 0;
}
```

`PassiTipo1` contiene $S(i-1)$, i modi se il primo passo è da 1; `PassiTipo2` contiene $S(i-2)$; `PassiTipo3` contiene $S(i-3)$. Nei commenti della slide: "Soluzione se inizio con un passo da 3" e così via. Il fumetto della slide 89: "per calcolare la soluzione per N partiremo a calcolare le soluzioni da i=3, i=4, fino a i=N". Il commento `alterfor(i=3; i<N+1; i++)` anticipa che lo stesso ciclo si scriverà con un `for` ([Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/)).

Tracing con $N = 5$:

| giro | `i` | `i < N+1` | `TotaleModi` | `PassiTipo3` | `PassiTipo2` | `PassiTipo1` |
| --- | --- | --- | --- | --- | --- | --- |
| inizio | 3 | | 0 | 1 | 1 | 2 |
| 1 | 3 → 4 | 3 < 6 | 1+1+2 = 4 | 1 | 2 | 4 |
| 2 | 4 → 5 | 4 < 6 | 1+2+4 = 7 | 2 | 4 | 7 |
| 3 | 5 → 6 | 5 < 6 | 2+4+7 = 13 | 4 | 7 | 13 |
| | 6 | 6 < 6 falso | | | | |

Stampa `Combinazioni per salire scala di 5 gradini: 13` (verificato). L'ordine dello scorrimento conta: se si scrivesse prima `PassiTipo1 = TotaleModi` e poi `PassiTipo2 = PassiTipo1`, il vecchio `PassiTipo1` andrebbe perso.

**Incoerenza su $N = 0$.** L'inizializzazione `PassiTipo3 = 1` vuol dire $S(0) = 1$: per $N = 3$ il caso "primo passo da 3" arriva in cima, e conta **un** modo. Ma per $N \leq 2$ il programma stampa $N$, quindi per $N = 0$ stampa 0 (verificato). Quale dei due sia giusto per una scala di zero gradini è una convenzione (un modo: non muoversi; oppure nessuno), ma il programma dovrebbe sceglierne una. La prima soluzione di ChatGPT sotto usa 1 ("there's 1 way to do it: not moving").

**Overflow.** $S(n)$ cresce in fretta: $S(36) = 2\,082\,876\,103$ sta ancora in un `int` a 32 bit (massimo 2 147 483 647), $S(37) = 3\,831\,006\,429$ no. Il programma con $N = 37$ stampa un numero negativo (provato: -463960867). Il superamento del massimo di un `int` con segno è comportamento indefinito.

**Successioni a confronto** (<span class="src">slide 93-94</span>). I grafici della slide, in scala logaritmica, mettono $S(n)$ fra Fibonacci ($F(n) = F(n-1) + F(n-2)$) e $2^n$, e aggiungono $n^2$ e $n!$. Con $n = 30$:

| $n^2$ | $F(30)$ | $S(30)$ | $2^{30}$ | $30!$ |
| --- | --- | --- | --- | --- |
| 900 | 832 040 | 53 798 080 | 1 073 741 824 | circa $2{,}65 \cdot 10^{32}$ |

$n^2$ è polinomiale, le tre successioni in mezzo sono **esponenziali** (ogni passo moltiplica per circa 1,62, 1,84 e 2), $n!$ cresce ancora più in fretta. In scala logaritmica un'esponenziale è una retta, e $n^2$ una curva che si appiattisce: è quello che si vede nel grafico. È il primo assaggio di complessità: un algoritmo che fa $S(n)$ operazioni è inutilizzabile già per $n$ piccoli.

**Le due soluzioni di ChatGPT** (<span class="src">slide 96-97</span>), in Python:
1. **Ricorsiva**: una funzione che per $n > 2$ restituisce `countWays(n-1) + countWays(n-2) + countWays(n-3)`, con i casi base $n < 0$ → 0, $n = 0$ → 1, $n = 1$ → 1, $n = 2$ → 2. È la ricorrenza scritta pari pari, ma ricalcola gli stessi valori moltissime volte: per $n = 10$ fa 289 chiamate, per $n = 30$ circa 57 milioni (contate con uno script: 56 843 233).
2. **Programmazione dinamica**: un array `dp` di $n + 1$ posti riempito da 3 in su, con `dp[i] = dp[i-1] + dp[i-2] + dp[i-3]`. Ogni valore si calcola una volta: tempo $O(N)$ e memoria $O(N)$.

La soluzione del prof è la dinamica senza array: tiene solo gli ultimi tre valori, quindi tempo $O(N)$ e memoria costante. Funzioni, ricorsione e array in C arrivano più avanti nel corso.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Ciclo while ed esempi (esercizi)](/uni/prog-1/ciclo-while-ed-esempi-esercizi/).

## Errori tipici

- Dimenticare di inizializzare accumulatori e contatori (`int Somma;`).
- Inizializzare un prodotto a 0 (il risultato resta 0) o un massimo a 0 (sbaglia con soli negativi).
- Dimenticare l'aggiornamento nel corpo (`i++`): ciclo infinito.
- Corpo di più istruzioni senza graffe: solo la prima è nel ciclo, e spesso è proprio l'aggiornamento a restare fuori.
- `while (i <= n);` con il punto e virgola: il corpo è l'istruzione vuota, e se la condizione è vera il ciclo non finisce mai.
- Leggere la sentinella solo all'inizio del corpo: la sentinella viene elaborata come un dato.
- Non controllare il ritorno di `scanf` in un ciclo di lettura: a fine input il valore resta quello vecchio e il ciclo può non finire.
- Sbagliare di uno (off-by-one): `i < n` e `i <= n` fanno un numero di giri diverso. Controlla sempre il primo e l'ultimo giro.
- Credere che si esca con la variabile uguale al limite: con `i < 20` e `i *= 3` si esce con 27.
- Con `k--` nella condizione, dimenticare che anche il test che fa uscire decrementa.
- Nel doppio ciclo, non rimettere a zero la variabile del ciclo interno.
- Nello scorrimento delle tre variabili della scala, aggiornarle nell'ordine sbagliato.
- Euclide per sottrazioni con un input 0: ciclo infinito.

## Domande

- Qual è la semantica del `while`? Quante volte può essere eseguito il corpo, come minimo?

- Cosa succede se in un programma si dichiara `int Somma;` senza inizializzarla e poi si fa `Somma += i`?

- Cos'è una sentinella? Perché il dato si legge prima del ciclo e di nuovo in fondo al corpo?

- Su quale proprietà si basa l'algoritmo di Euclide per sottrazioni, e perché vale?

- Nell'algoritmo di Euclide, perché alla fine si può stampare indifferentemente `n` o `m`?

- Cosa succede all'algoritmo di Euclide per sottrazioni se un input è 0?

- Come si controlla se `c` divide `m` senza usare `%`?

- Quanti giri fanno Euclide e la definizione su (1000, 500) e su (1000, 2)?

- Qual è l'invariante del programma della moltiplicazione con ×2, /2 e somme?

- Per quali input il programma della moltiplicazione della slide sbaglia?

- Qual è la ricorrenza del problema della scala e come la si ricava?

- Perché il programma della scala tiene solo tre variabili e non tutta la successione?

- Perché la soluzione ricorsiva della scala è molto più lenta di quella con il ciclo?

- Con `k = 3`, quante volte gira `while (k--)` e quanto vale `k` all'uscita?

- Quante volte si esegue il corpo di `i = 0; while (i < 10) i += 3;` e quanto vale `i` alla fine?

- A che valore si inizializzano un accumulatore di somma, uno di prodotto e la variabile del massimo, e perché?

- In due `while` annidati, perché la variabile del ciclo interno va azzerata dentro il corpo di quello esterno?

- Perché `while (scanf("%d", &dato) == 1 && dato != -1)` non usa mai un `dato` non letto?

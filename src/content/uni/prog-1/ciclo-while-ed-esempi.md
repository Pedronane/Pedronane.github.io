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
> - **Saper enunciare**: sintassi e semantica del `while`, cosa vuol dire inizializzare, cos'è una sentinella, l'idea dell'algoritmo di Euclide, la ricorrenza della scala.
> - **Saper fare**: tracciare un ciclo con una tabella (una riga per giro), dire quante volte si esegue il corpo e con che valori si esce; scrivere un ciclo con sentinella; scrivere cicli annidati per un quadrato $N \times N$ a pattern; confrontare due algoritmi contando i giri.
> - **Dove esce**: nella teorica tracing di cicli, quadrato $N \times N$ a pattern (5 volte nel 2023-26), complessità "quante volte gira" (vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore l'input con controllo del range è un ciclo.

Il filo:

```
while                  sintassi, flowchart, semantica
   |
somma 1..5             contatore, accumulatore, inizializzazione
   |
sentinella             leggi prima del ciclo, rileggi in fondo al corpo
   |
MCD                    Euclide (sottrazioni) contro definizione (divisioni, %)
   |                   e quale è più efficiente
moltiplicazione        solo ×2, /2 e somme
   |
scala                  S(n) = S(n-1) + S(n-2) + S(n-3), tre variabili che scorrono
```

## Definizioni

**Istruzione iterativa**, o ciclo (<span class="src">slide 40</span>). Ripete l'esecuzione di un blocco di istruzioni finché vale una condizione. Parola chiave `while`. La condizione si valuta **prima** di eseguire il blocco.

```
while (espressione) istruzione
```

L'istruzione, detta **corpo** del ciclo, è quasi sempre un blocco fra graffe.

<figure class="fig"><svg role="img" aria-label="Flowchart while" xmlns:xlink="http://www.w3.org/1999/xlink" width="316.44pt" height="344.16pt" viewBox="0 0 316.44 344.16" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f56-figure_1"> <g id="f56-patch_1"> <path d="M 0 344.16 L 316.44 344.16 L 316.44 0 L 0 0 L 0 344.16 z " style="fill: none"/> </g> <g id="f56-axes_1"> <g id="f56-patch_2"> <path d="M 116.64 52.884 L 188.712 88.92 L 116.64 124.956 L 44.568 88.92 L 116.64 52.884 z " clip-path="url(#f56-p62c5ad1209)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-patch_3"> <path d="M 185.94 188.712 L 296.82 188.712 L 296.82 138.816 L 185.94 138.816 L 185.94 188.712 z " clip-path="url(#f56-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f56-line2d_1"> <path d="M 188.712 88.92 L 241.38 88.92 " clip-path="url(#f56-p62c5ad1209)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-line2d_2"> <path d="M 241.38 188.712 L 241.38 216.432 " clip-path="url(#f56-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-line2d_3"> <path d="M 241.38 216.432 L 305.136 216.432 " clip-path="url(#f56-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-line2d_4"> <path d="M 305.136 216.432 L 305.136 33.48 " clip-path="url(#f56-p62c5ad1209)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: square"/> </g> <g id="f56-patch_4"> <path d="M 116.64 11.304 Q 116.64 32.094 116.64 50.647932 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 46.647932 L 116.64 50.647932 L 114.64 46.647932 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_1"> <!-- condizione --> <g style="fill: var(--fig-steel)" transform="translate(83.935312 84.836484) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-46"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f56-DejaVuSerif-51" transform="translate(116.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-47" transform="translate(180.609375 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(244.625 0)"/> <use xlink:href="#f56-DejaVuSerif-5d" transform="translate(276.609375 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(329.296875 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(361.28125 0)"/> <use xlink:href="#f56-DejaVuSerif-51" transform="translate(421.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(485.890625 0)"/> </g> <!-- ≠ 0 ? --> <g style="fill: var(--fig-steel)" transform="translate(100.764375 99.238828) scale(0.12 -0.12)"> <defs> <path id="f56-DejaVuSerif-8f7" d="M 678 2894 L 3091 2894 L 3891 3891 L 4281 3572 L 3738 2894 L 4684 2894 L 4684 2394 L 3309 2394 L 2700 1619 L 4684 1619 L 4684 1119 L 2266 1119 L 1459 122 L 1069 441 L 1613 1119 L 678 1119 L 678 1619 L 2047 1619 L 2656 2394 L 678 2394 L 678 2894 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-8f7"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(83.796875 0)"/> <use xlink:href="#f56-DejaVuSerif-13" transform="translate(115.578125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(179.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-22" transform="translate(210.984375 0)"/> </g> </g> <g id="f56-patch_5"> <path d="M 241.38 88.92 Q 241.38 113.868 241.38 136.579932 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 243.38 132.579932 L 241.38 136.579932 L 239.38 132.579932 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_2"> <!-- vero --> <g style="fill: var(--fig-accent)" transform="translate(194.256 80.604) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-59"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(56.5 0)"/> <use xlink:href="#f56-DejaVuSerif-55" transform="translate(115.6875 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(163.484375 0)"/> </g> </g> <g id="f56-text_3"> <!-- corpo --> <g style="fill: var(--fig-ink)" transform="translate(225.527969 160.019918) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-46"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f56-DejaVuSerif-55" transform="translate(116.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-53" transform="translate(164 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(228.015625 0)"/> </g> <!-- del ciclo --> <g style="fill: var(--fig-ink)" transform="translate(218.107266 173.222926) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-47"/> <use xlink:href="#f56-DejaVuSerif-48" transform="translate(64.015625 0)"/> <use xlink:href="#f56-DejaVuSerif-4f" transform="translate(123.203125 0)"/> <use xlink:href="#f56-DejaVuSerif-3" transform="translate(155.1875 0)"/> <use xlink:href="#f56-DejaVuSerif-46" transform="translate(186.96875 0)"/> <use xlink:href="#f56-DejaVuSerif-4c" transform="translate(242.96875 0)"/> <use xlink:href="#f56-DejaVuSerif-46" transform="translate(274.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-4f" transform="translate(330.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(362.9375 0)"/> </g> </g> <g id="f56-patch_6"> <path d="M 305.136 33.48 Q 212.274 33.48 121.648068 33.48 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 125.648068 35.48 L 121.648068 33.48 L 125.648068 31.48 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_4"> <!-- si torna a valutare --> <g style="fill: var(--fig-axis)" transform="translate(206.612312 25.164) scale(0.1 -0.1)"> <defs> <path id="f56-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-Italic-56"/> <use xlink:href="#f56-DejaVuSerif-Italic-4c" transform="translate(51.3125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-3" transform="translate(83.296875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-57" transform="translate(115.078125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-52" transform="translate(155.265625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-55" transform="translate(215.46875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-51" transform="translate(263.265625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-44" transform="translate(327.671875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-3" transform="translate(387.296875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-44" transform="translate(419.078125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-3" transform="translate(478.703125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-59" transform="translate(510.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-44" transform="translate(566.984375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4f" transform="translate(626.609375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-58" transform="translate(658.59375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-57" transform="translate(723 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-44" transform="translate(763.1875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-55" transform="translate(822.8125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-48" transform="translate(870.609375 0)"/> </g> </g> <g id="f56-patch_7"> <path d="M 116.64 124.956 Q 116.64 212.274 116.64 297.355932 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.64 293.355932 L 116.64 297.355932 L 114.64 293.355932 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f56-text_5"> <!-- falso --> <g style="fill: var(--fig-steel)" transform="translate(62.504531 199.8) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-49"/> <use xlink:href="#f56-DejaVuSerif-44" transform="translate(37.015625 0)"/> <use xlink:href="#f56-DejaVuSerif-4f" transform="translate(96.640625 0)"/> <use xlink:href="#f56-DejaVuSerif-56" transform="translate(128.625 0)"/> <use xlink:href="#f56-DejaVuSerif-52" transform="translate(179.9375 0)"/> </g> </g> <g id="f56-text_6"> <!-- istruzione dopo il ciclo --> <g style="fill: var(--fig-axis)" transform="translate(53.495703 316.224) scale(0.11 -0.11)"> <defs> <path id="f56-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f56-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f56-DejaVuSerif-Italic-4c"/> <use xlink:href="#f56-DejaVuSerif-Italic-56" transform="translate(31.984375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-57" transform="translate(83.296875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-55" transform="translate(123.484375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-58" transform="translate(171.28125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-5d" transform="translate(235.6875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4c" transform="translate(288.375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-52" transform="translate(320.359375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-51" transform="translate(380.5625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-48" transform="translate(444.96875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-3" transform="translate(504.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-47" transform="translate(535.9375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-52" transform="translate(599.953125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-53" transform="translate(660.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-52" transform="translate(724.171875 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-3" transform="translate(784.375 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4c" transform="translate(816.15625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4f" transform="translate(848.140625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-3" transform="translate(880.125 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-46" transform="translate(911.90625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4c" transform="translate(967.90625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-46" transform="translate(999.890625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-4f" transform="translate(1055.890625 0)"/> <use xlink:href="#f56-DejaVuSerif-Italic-52" transform="translate(1087.875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f56-p62c5ad1209"> <rect x="5.76" y="5.76" width="304.92" height="332.64"/> </clipPath> </defs> </svg></figure>

**Semantica** (<span class="src">slide 41</span>).
1. Si valuta la condizione.
2. Se è VERA si esegue il corpo, poi si torna al punto 1.
3. Se è FALSA il corpo non si esegue e si prosegue con l'istruzione dopo il ciclo.

Due conseguenze:
- se la condizione è falsa subito, il corpo si esegue **zero** volte;
- il ciclo termina solo se il corpo cambia qualcosa che prima o poi rende falsa la condizione. Altrimenti è un **ciclo infinito**.

**Istruzioni composte** (<span class="src">slide 42</span>). `if` e `while` non esistono nella macchina di Von Neumann, che conosce solo salti. Sono una caratteristica dei linguaggi di alto livello, e si compongono fra loro: un `if` dentro un `while`, un `while` dentro un altro.

**Contatore e accumulatore.** Due ruoli che una variabile ha in quasi ogni ciclo:
- **contatore**: conta i giri, `i++` a ogni passaggio;
- **accumulatore**: raccoglie un risultato, `Somma += i`.

Entrambi vanno **inizializzati** prima del ciclo: il primo `Somma += i` legge il valore di `Somma`.

**Sentinella** (<span class="src">slide 45</span>). Un valore speciale che segnala la fine dei dati e che non fa parte dei dati. Nell'esercizio del prof è lo 0: si sommano numeri finché non arriva 0.

**Massimo comune divisore** (<span class="src">slide 47-48</span>). Dati due interi positivi $m$ e $n$, $MCD(m, n)$ è il più grande intero che li divide entrambi. L'algoritmo di Euclide si basa su:

$$
n > m \;\Rightarrow\; MCD(n, m) = MCD(n - m, m)
$$

Perché vale: un numero che divide $n$ e $m$ divide anche $n - m$, e uno che divide $n - m$ e $m$ divide anche $n = (n - m) + m$. Le due coppie hanno gli stessi divisori comuni, quindi lo stesso massimo. Si sottrae il minore dal maggiore finché i due numeri diventano uguali, e quel valore è l'MCD.

## Concetti

### Tracciare un ciclo

Si fa una tabella con una colonna per variabile e **una riga per giro**, più una riga iniziale. In ogni riga si scrive il valore della condizione e poi i valori **alla fine** del corpo. Ci si ferma alla riga in cui la condizione è falsa: quella riga dà i valori con cui si esce.

Tre domande a cui la tabella risponde sempre, e che all'esame vengono chieste: quante volte si esegue il corpo, con che valori si esce, cosa si stampa.

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

### Efficienza: contare i giri

(<span class="src">slide 56-57</span>) Due algoritmi corretti per lo stesso problema si confrontano contando quante volte si esegue il corpo del `while`. Il conto dipende dai dati: un algoritmo può vincere su una coppia e perdere su un'altra. Verificati con un contatore aggiunto nei due programmi:

| $(m, n)$ | MCD | giri Euclide (sottrazioni) | giri definizione |
| --- | --- | --- | --- |
| (1000, 500) | 500 | **1** | 500 |
| (1000, 2) | 2 | 499 | **2** |
| (15, 3) | 3 | 4 | 3 |
| (7, 5) | 1 | 4 | 5 |
| (12, 18) | 6 | 2 | 12 |

La definizione fa sempre $\min(m, n)$ giri. Euclide per sottrazioni è velocissimo con numeri vicini o multipli, lento quando uno è molto più piccolo dell'altro: con (1000, 2) toglie 2 per 499 volte.

## Metodo

**Scrivere un ciclo.**
1. Cosa si ripete? Diventa il corpo.
2. Quando ci si ferma? Scrivi la condizione di **uscita**, poi negala (De Morgan, [Algebra di Boole](/uni/prog-1/algebra-di-boole/)): quella è la condizione del `while`.
3. Quali variabili servono dal primo giro? Inizializzale prima del ciclo.
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

Esegue il corpo $n$ volte, ed esce con $i = n + 1$.

## Esempi svolti a lezione

### Esempio della slide 41

`while (z != y) {y = z - x; x = x*3;}` serve solo a mostrare la sintassi, ma tracciarlo dice molto. Con $x = 0$, $y = 1$, $z = 4$:

| giro | `z != y` | `y` | `x` |
| --- | --- | --- | --- |
| inizio | | 1 | 0 |
| 1 | 4 != 1 vero | 4 | 0 |
| | 4 != 4 falso | | |

Un giro, si esce con `x=0 y=4 z=4` (verificato). Ma se $x$ non è zero il ciclo non finisce mai: `y = z - x` è uguale a `z` solo quando $x = 0$, e `x = x*3` non porta mai a zero un numero diverso da zero. Un ciclo che termina solo per certi dati iniziali è un classico da tracing.

### Somma dei primi 5 interi

(<span class="src">slide 43-44</span>)

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
| 1 | 1 <= 5 | 1 | 2 |
| 2 | 2 <= 5 | 3 | 3 |
| 3 | 3 <= 5 | 6 | 4 |
| 4 | 4 <= 5 | 10 | 5 |
| 5 | 5 <= 5 | 15 | 6 |
| | 6 <= 5 falso | | |

Output: `Somma= 15`. Il corpo gira 5 volte e si esce con `i` a 6.

La slide chiede cosa succede con `int Somma;`, cioè senza inizializzare a 0. Una variabile locale non inizializzata ha un valore **indeterminato**, e leggerla (lo fa il primo `Somma += i`) è comportamento indefinito: in pratica di solito parte da quello che c'era in memoria e la somma esce sbagliata, a volte giusta per caso, il che è peggio. La slide si chiede anche se `n=5, i;` debba essere inizializzato: `n` sì, perché serve alla condizione; `i` riceve il valore da `i=1;` prima del ciclo, quindi va bene così.

### Somma con sentinella 0

(<span class="src">slide 45-46</span>) Il programma della slide legge con `scanf` prima del ciclo e in fondo al corpo, e il commento "Manca qualcosa?" punta all'inizializzazione di `Somma`. Qui c'è in più il controllo del valore di ritorno di `scanf`:

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

Output: `Somma= 19`. Il 99 dopo la sentinella non viene mai letto. Con input `0` subito il corpo non gira e stampa `Somma= 0`.

Perché il controllo di `letti`: `scanf` restituisce quanti valori ha letto. Se l'input finisce senza lo 0 restituisce `EOF` e **non tocca** `dato`. Il programma della slide, senza controllo, a quel punto somma all'infinito l'ultimo numero letto: provato con input `5 3` e un limite di sicurezza a 1000 giri, la somma arriva a 3002.

### MCD con Euclide (soluzione 1)

(<span class="src">slide 49-50</span>) Esempi della slide:

```
MCD ≠ 1:  MCD(15,3) = MCD(12,3) = MCD(9,3) = MCD(6,3) = MCD(3,3) = 3
MCD = 1:  MCD(7,5)  = MCD(2,5)  = MCD(2,3) = MCD(2,1) = MCD(1,1) = 1
```

La slide scrive il secondo come `MCD(3,2) = MCD(1,2)`, scambiando l'ordine: l'MCD non dipende dall'ordine, il risultato non cambia.

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

La slide dichiara anche `min` e `contatore`, che qui non servono (gcc `-Wall` le segnala come inutilizzate).

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

A ogni giro `m` cala di 2: da 1000 a 2 servono $(1000 - 2) / 2 = 499$ giri. Stampa `MCD=2`. Su (1000, 500) basta un giro: 1000 - 500 = 500, e i due sono uguali.

**Errore del programma della slide.** Se uno dei due input è 0 il ciclo non termina: con $m = 0$, $n = 5$ il ramo `else` fa `n = 5 - 0` all'infinito. L'algoritmo vale per interi **positivi**, come dice il testo del problema, e il programma deve controllarlo (è il `m <= 0 || n <= 0` aggiunto sopra).

### MCD per definizione (soluzione 2)

(<span class="src">slide 51-54</span>) Si provano tutti i candidati da 1 al minore dei due, e si tiene l'ultimo che li divide entrambi. Il minore basta perché un divisore di un numero positivo non può superarlo.

Come si controlla "`contatore` divide `m`" senza `%`? Con la divisione intera: `(m/contatore)*contatore` è uguale a `m` solo se la divisione non ha resto. Con $m = 15$: `(15/4)*4` è 12, diverso da 15; `(15/5)*5` è 15.

La slide 52 contiene due errori, corretti nella 53: le parentesi dell'`if` sono sbilanciate (`if ((m/mcd)*mcd == m) && (...) )`, non compila) e divide per `mcd` invece che per `contatore`. Versione 2a corretta:

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

La nota della slide 53: la divisione fra interi è approssimata, meglio evitarla se si può. Qui funziona proprio perché tronca.

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

`!(m % contatore)` è vero quando il resto è 0, cioè quando `contatore` divide `m`. Tutte e tre le versioni danno 3 su (15, 3), 1 su (7, 5), 2 su (1000, 2), 6 su (12, 18) (verificato).

**Errori di etichetta nelle slide.** La slide 54 dice "Soluzione 1b" nel testo e "2b" nel titolo. La 55 chiama Soluzione 1 la definizione e Soluzione 2 Euclide, al contrario delle slide 47 e 51. Le 56 e 57 parlano di "minimo comune divisore": è il **massimo** (il minimo comune divisore di due interi è sempre 1).

### Moltiplicazione con ×2, /2 e somme

(<span class="src">slide 69-73</span>) Il problema: moltiplicare $m$ per $n$ usando solo moltiplicazioni e divisioni per 2 e somme. L'idea della slide: si scrive $n = 2 k_1 + r_1$ (quoziente e resto della divisione per 2), poi $k_1 = 2 k_2 + r_2$, e così via:

$$
m \cdot n = m (2 k_1 + r_1) = m (2 (2 k_2 + r_2) + r_1) = \ldots
$$

In pratica si dimezza un fattore e si raddoppia l'altro. Quando il fattore da dimezzare è dispari, la divisione intera perde un'unità, e quella parte si recupera sommando l'altro fattore a parte. `mult` accumula i raddoppi, `sum` le somme dovute ai resti.

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
| 2 | 3 > 1 | 1 | 26 | 52 | 1 | 78 |
| | 1 > 1 falso | | | | | |

Stampa `n=13`, `m=6`, `mult=78`. L'ultima colonna è sempre $78 = 6 \cdot 13$: è l'**invariante** del ciclo, la quantità che il corpo non cambia. Quando `min` arriva a 1 resta `mult * 1 + sum`, che è quello che il programma stampa. Si usa il minore come fattore da dimezzare perché così i giri sono meno.

**Errori del programma della slide** (verificati): funziona solo con fattori positivi.
- Se un fattore è 0, `min` vale 0, il ciclo non parte e stampa `max`: $5 \cdot 0$ dà 5.
- Se un fattore è negativo, `min` è negativo, il ciclo non parte: $-3 \cdot 4$ dà 4.

Il testo dice "due numeri interi", quindi il programma andrebbe completato con i casi 0 e negativi, o il testo ristretto ai positivi.

### La scala a passi da 1, 2 o 3

(<span class="src">slide 74-97</span>) Una scala di $N$ gradini si sale con passi da 1, 2 o 3 gradini. In quanti modi diversi si arriva in cima? Era già stato lasciato aperto in [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/).

**Casi piccoli** (<span class="src">slide 77-80</span>):
- $N = 1$: solo `1`. $S(1) = 1$.
- $N = 2$: `1+1`, `2`. $S(2) = 2$.
- $N = 3$: `1+1+1`, `1+2`, `2+1`, `3`. $S(3) = 4$.
- $N = 4$: il **primo** passo è da 1, da 2 o da 3. Dopo un passo da 1 restano 3 gradini, che si salgono in $S(3)$ modi; dopo uno da 2 ne restano 2; dopo uno da 3 ne resta 1. Quindi $S(4) = S(3) + S(2) + S(1) = 4 + 2 + 1 = 7$.

Il ragionamento di $N = 4$ vale per ogni $N > 3$ (<span class="src">slide 92</span>):

$$
S(n) = S(n-1) + S(n-2) + S(n-3)
$$

```
N    1  2  3  4   5   6   7   8    9    10
S    1  2  4  7  13  24  44  81  149   274
```

**Pseudocodice** (<span class="src">slide 81-84</span>). Non serve ricordare tutta la successione, bastano gli ultimi tre valori:
1. leggi $N$;
2. inizializza le soluzioni note, per $N$ = 0, 1, 2;
3. tienile in tre variabili, che contengono le soluzioni per $K-3$, $K-2$ e $K-1$;
4. in un ciclo fai crescere $K$ da 3 fino a $N$: la soluzione per $K$ è la somma delle tre variabili, poi le tre variabili **scorrono** di un posto.

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

`PassiTipo1` contiene $S(i-1)$, i modi se il primo passo è da 1; `PassiTipo2` contiene $S(i-2)$; `PassiTipo3` contiene $S(i-3)$. Il commento `alterfor(i=3; i<N+1; i++)` della slide anticipa che lo stesso ciclo si scriverà con un `for` ([Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/)).

Tracing con $N = 5$:

| giro | `i` | `i < N+1` | `TotaleModi` | `PassiTipo3` | `PassiTipo2` | `PassiTipo1` |
| --- | --- | --- | --- | --- | --- | --- |
| inizio | 3 | | 0 | 1 | 1 | 2 |
| 1 | 3 → 4 | 3 < 6 | 1+1+2 = 4 | 1 | 2 | 4 |
| 2 | 4 → 5 | 4 < 6 | 1+2+4 = 7 | 2 | 4 | 7 |
| 3 | 5 → 6 | 5 < 6 | 2+4+7 = 13 | 4 | 7 | 13 |
| | 6 | 6 < 6 falso | | | | |

Stampa `Combinazioni per salire scala di 5 gradini: 13`. L'ordine dello scorrimento conta: se si scrivesse prima `PassiTipo1 = TotaleModi` e poi `PassiTipo2 = PassiTipo1`, il vecchio `PassiTipo1` andrebbe perso.

**Incoerenza su $N = 0$.** L'inizializzazione `PassiTipo3 = 1` vuol dire $S(0) = 1$: per $N = 3$ il caso "primo passo da 3" arriva in cima, e conta **un** modo. Ma per $N \leq 2$ il programma stampa $N$, quindi per $N = 0$ stampa 0. Quale dei due sia giusto per una scala di zero gradini è una convenzione (un modo: non muoversi; oppure nessuno), ma il programma dovrebbe sceglierne una. La prima soluzione di ChatGPT sotto usa 1.

**Overflow.** $S(n)$ cresce in fretta: $S(36) = 2\,082\,876\,103$ sta ancora in un `int` a 32 bit (massimo 2 147 483 647), $S(37)$ no. Il programma con $N = 37$ stampa un numero negativo (provato: -463960867). Il superamento del massimo di un `int` con segno è comportamento indefinito.

**Successioni a confronto** (<span class="src">slide 93-94</span>). I grafici della slide, in scala logaritmica, mettono $S(n)$ fra Fibonacci ($F(n) = F(n-1) + F(n-2)$) e $2^n$, e aggiungono $n^2$ e $n!$. Con $n = 30$:

| $n^2$ | $F(30)$ | $S(30)$ | $2^{30}$ | $30!$ |
| --- | --- | --- | --- | --- |
| 900 | 832 040 | 53 798 080 | 1 073 741 824 | circa $2{,}65 \cdot 10^{32}$ |

$n^2$ è polinomiale, le tre successioni in mezzo sono **esponenziali** (ogni passo moltiplica per circa 1,62, 1,84 e 2), $n!$ cresce ancora più in fretta. È il primo assaggio di complessità: un algoritmo che fa $S(n)$ operazioni è inutilizzabile già per $n$ piccoli.

**Le due soluzioni di ChatGPT** (<span class="src">slide 96-97</span>), in Python:
1. **Ricorsiva**: una funzione che per $n > 2$ restituisce `countWays(n-1) + countWays(n-2) + countWays(n-3)`, con i casi base $n < 0$ → 0, $n = 0$ → 1, $n = 1$ → 1, $n = 2$ → 2. È la ricorrenza scritta pari pari, ma ricalcola gli stessi valori moltissime volte: per $n = 30$ fa circa 57 milioni di chiamate (contate con uno script).
2. **Programmazione dinamica**: un array `dp` di $n + 1$ posti riempito da 3 in su, con `dp[i] = dp[i-1] + dp[i-2] + dp[i-3]`. Ogni valore si calcola una volta: tempo $O(N)$ e memoria $O(N)$.

La soluzione del prof è la dinamica senza array: tiene solo gli ultimi tre valori, quindi tempo $O(N)$ e memoria costante. Funzioni, ricorsione e array in C arrivano più avanti nel corso.

## Esercizi tipo esame

**Esercizio 1.** Scrivi l'output esatto e quante volte si esegue il corpo.

```c
#include <stdio.h>

int main(void)
{
    int i = 10;
    int s = 0;

    while (i > 0) {
        s += i % 3;
        i -= 3;
    }
    printf("i=%d s=%d\n", i, s);
    return 0;
}
```

> [!example]- Soluzione
> | giro | `i > 0` | `i % 3` | `s` | `i` dopo |
> | --- | --- | --- | --- | --- |
> | inizio | | | 0 | 10 |
> | 1 | 10 > 0 | 1 | 1 | 7 |
> | 2 | 7 > 0 | 1 | 2 | 4 |
> | 3 | 4 > 0 | 1 | 3 | 1 |
> | 4 | 1 > 0 | 1 | 4 | -2 |
> | | -2 > 0 falso | | | |
>
> 4 giri. Output: `i=-2 s=4` (verificato). `i` non si ferma a 0: esce al primo valore non positivo.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int n = 3725;
    int somma = 0;
    int cifre = 0;

    while (n > 0) {
        somma += n % 10;
        n /= 10;
        cifre++;
    }
    printf("%d %d %d\n", n, somma, cifre);
    return 0;
}
```

> [!example]- Soluzione
> | giro | `n % 10` | `somma` | `n` dopo | `cifre` |
> | --- | --- | --- | --- | --- |
> | 1 | 5 | 5 | 372 | 1 |
> | 2 | 2 | 7 | 37 | 2 |
> | 3 | 7 | 14 | 3 | 3 |
> | 4 | 3 | 17 | 0 | 4 |
>
> Output: `0 17 4` (verificato). È lo schema per sommare le cifre della matricola.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int k = 4;
    int x = 1;

    while (k--)
        x = x * 2 + k;
    printf("k=%d x=%d\n", k, x);
    return 0;
}
```

> [!example]- Soluzione
> `k--` confronta il valore **prima** del decremento, poi decrementa. Il corpo vede già il valore decrementato.
>
> | test | valore testato | `k` nel corpo | `x` |
> | --- | --- | --- | --- |
> | 1 | 4 | 3 | 1·2 + 3 = 5 |
> | 2 | 3 | 2 | 5·2 + 2 = 12 |
> | 3 | 2 | 1 | 12·2 + 1 = 25 |
> | 4 | 1 | 0 | 25·2 + 0 = 50 |
> | 5 | 0, falso | -1 | |
>
> Anche il test che esce decrementa. Output: `k=-1 x=50` (verificato).

**Esercizio 4.** Traccia Euclide per sottrazioni su $(m, n) = (21, 6)$: quanti giri, che MCD?

> [!example]- Soluzione
> | giro | `m` | `n` |
> | --- | --- | --- |
> | inizio | 21 | 6 |
> | 1 | 15 | 6 |
> | 2 | 9 | 6 |
> | 3 | 3 | 6 |
> | 4 | 3 | 3 |
>
> 4 giri, MCD 3 (verificato con il contatore). La definizione avrebbe fatto 6 giri, uno per candidato da 1 a 6.

**Esercizio 5.** Scrivi un programma che legge $N$ e stampa un quadrato $N \times N$ con `*` sul bordo e `.` all'interno. Per $N = 5$:

```
*****
*...*
*...*
*...*
*****
```

> [!example]- Soluzione
> Due cicli annidati: quello esterno scorre le righe `r`, quello interno le colonne `c`. Una casella è di bordo se sta nella prima o ultima riga, o nella prima o ultima colonna.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int N;
>     int r;
>
>     if (scanf("%d", &N) != 1 || N <= 0) {
>         printf("N non valido\n");
>         return 1;
>     }
>     r = 0;
>     while (r < N) {
>         int c = 0;
>         while (c < N) {
>             if (r == 0 || r == N - 1 || c == 0 || c == N - 1)
>                 printf("*");
>             else
>                 printf(".");
>             c++;
>         }
>         printf("\n");
>         r++;
>     }
>     return 0;
> }
> ```
> Verificato con $N = 5$. `c` va rimesso a 0 a ogni riga: per questo è dichiarato dentro il ciclo esterno. Se lo dichiari fuori e lo azzeri solo una volta, stampi solo la prima riga. Con $N = 1$ stampa un solo `*`.

**Esercizio 6.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int N = 4;
    int r = 1;

    while (r <= N) {
        int c = 1;
        while (c <= r) {
            printf("%d", c);
            c++;
        }
        printf("\n");
        r++;
    }
    return 0;
}
```

> [!example]- Soluzione
> La riga `r` stampa i numeri da 1 a `r`:
> ```
> 1
> 12
> 123
> 1234
> ```
> (verificato). In tutto il `printf` interno si esegue $1 + 2 + 3 + 4 = 10$ volte.

**Esercizio 7.** Scrivi un programma che legge un intero non negativo e ne stampa le cifre al contrario come numero (1234 diventa 4321).

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int rovescio = 0;
>
>     if (scanf("%d", &n) != 1 || n < 0) {
>         return 1;
>     }
>     while (n > 0) {
>         rovescio = rovescio * 10 + n % 10;
>         n = n / 10;
>     }
>     printf("%d\n", rovescio);
>     return 0;
> }
> ```
> 1234 dà 4321, 120 dà 21 (lo zero finale diventa uno zero iniziale, che non si stampa). Verificati.

**Esercizio 8.** Traccia il programma della moltiplicazione con $m = 5$, $n = 11$.

> [!example]- Soluzione
> `max` = 11, `min` = 5.
>
> | giro | `min % 2` | `sum` | `mult` | `min` |
> | --- | --- | --- | --- | --- |
> | inizio | | 0 | 11 | 5 |
> | 1 | 1 | 11 | 22 | 2 |
> | 2 | 0 | 11 | 44 | 1 |
>
> Esce con `min` = 1: stampa `n=11`, `m=5`, `mult=55` (verificato).

## Errori tipici

- Dimenticare di inizializzare accumulatori e contatori (`int Somma;`).
- Dimenticare l'aggiornamento nel corpo (`i++`): ciclo infinito.
- `while (i <= n);` con il punto e virgola: il corpo è l'istruzione vuota, e se la condizione è vera il ciclo non finisce mai.
- Leggere la sentinella solo all'inizio del corpo: la sentinella viene elaborata come un dato.
- Non controllare il ritorno di `scanf` in un ciclo di lettura: a fine input il valore resta quello vecchio e il ciclo può non finire.
- Sbagliare di uno (off-by-one): `i < n` e `i <= n` fanno un numero di giri diverso. Controlla sempre il primo e l'ultimo giro.
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

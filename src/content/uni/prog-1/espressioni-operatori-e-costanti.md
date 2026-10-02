---
title: Espressioni, operatori e costanti
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
ordine: 3
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a settembre, seconda parte del deck 2.2: <span class="src">slide 57-76</span>. Prima: [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/) (fino all'assegnazione). Dopo: [Algebra di Boole](/uni/prog-1/algebra-di-boole/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cos'è l'albero sintattico, precedenza e associatività, la differenza fra `x++` e `++x`, cosa vuol dire `const`, differenza fra `'a'` e `"a"`.
> - **Saper fare**: valutare a mano un'espressione con operatori misti, divisione intera e `%`; tracciare incrementi e assegnazioni composte; estrarre le cifre di un numero con `% 10` e `/ 10`; aritmetica sui caratteri ASCII.
> - **Dove esce**: nella teorica, il tracing "scrivi l'output esatto" (15 prove su 18 nel 2023-26, spesso sulle cifre della matricola), vedi [Esami passati](/uni/prog-1/esami-passati/). Nella prova al calcolatore ogni riga usa queste regole.

## Definizioni

**Espressione.** Una combinazione di costanti, variabili e operatori che produce un valore (<span class="src">slide 57</span>): `y * (x + 3) * 2`. Anche l'assegnazione è un'espressione, e il suo valore è quello assegnato (visto in [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/)).

**Albero sintattico.** Il modo in cui il compilatore legge un'espressione (<span class="src">slide 58</span>). Le foglie sono variabili e costanti, i nodi interni sono operatori, e ogni operatore si applica ai valori dei suoi figli. Lo decidono le **priorità** degli operatori, le **parentesi** e l'**associatività**. Si valuta dal basso verso l'alto: un nodo si calcola solo quando i suoi figli hanno già un valore.

<figure class="fig"><svg role="img" aria-label="Albero sintattico" xmlns:xlink="http://www.w3.org/1999/xlink" width="371.88pt" height="321.984pt" viewBox="0 0 371.88 321.984" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f52-figure_1"> <g id="f52-patch_1"> <path d="M 0 321.984 L 371.88 321.984 L 371.88 -0 L 0 -0 L 0 321.984 z " style="fill: none"/> </g> <g id="f52-axes_1"> <g id="f52-line2d_1"> <path d="M 116.64 51.498 L 47.34 93.078 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-line2d_2"> <path d="M 116.64 51.498 L 185.94 93.078 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-line2d_3"> <path d="M 185.94 118.026 L 130.5 159.606 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-line2d_4"> <path d="M 185.94 118.026 L 255.24 159.606 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-line2d_5"> <path d="M 130.5 184.554 L 75.06 226.134 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-line2d_6"> <path d="M 130.5 184.554 L 185.94 226.134 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-line2d_7"> <path d="M 185.94 251.082 L 144.36 287.118 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-line2d_8"> <path d="M 185.94 251.082 L 227.52 287.118 " clip-path="url(#f52-pfb7f4567ab)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="f52-text_1"> <!-- = --> <g style="fill: var(--fig-accent)" transform="translate(111.522734 43.440016) scale(0.17 -0.17)"> <defs> <path id="f52-DejaVuSansMono-Bold-20" d="M 275 1663 L 3578 1663 L 3578 922 L 275 922 L 275 1663 z M 275 3084 L 3578 3084 L 3578 2350 L 275 2350 L 275 3084 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-Bold-20"/> </g> </g> <g id="f52-text_2"> <!-- passo 4 --> <g style="fill: var(--fig-axis)" transform="translate(131.886 37.463656) scale(0.1 -0.1)"> <defs> <path id="f52-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-17" d="M 2084 1581 L 2566 4063 L 491 1581 L 2084 1581 z M 3150 0 L 1025 0 L 1091 331 L 1841 331 L 2019 1247 L -19 1247 L 47 1588 L 2706 4750 L 3325 4750 L 2709 1581 L 3600 1581 L 3534 1247 L 2644 1247 L 2466 331 L 3216 331 L 3150 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSerif-Italic-53"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(64.015625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(123.640625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(174.953125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-52" transform="translate(226.265625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(286.46875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-17" transform="translate(318.25 0)"/> </g> </g> <g id="f52-text_3"> <!-- x --> <g style="fill: var(--fig-ink)" transform="translate(42.222734 109.968016) scale(0.17 -0.17)"> <defs> <path id="f52-DejaVuSansMono-Bold-5b" d="M 3578 3500 L 2400 1825 L 3681 0 L 2613 0 L 1925 1178 L 1241 0 L 172 0 L 1466 1825 L 275 3500 L 1344 3500 L 1925 2456 L 2509 3500 L 3578 3500 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-Bold-5b"/> </g> </g> <g id="f52-text_4"> <!-- * --> <g style="fill: var(--fig-steel)" transform="translate(180.822734 109.968016) scale(0.17 -0.17)"> <defs> <path id="f52-DejaVuSansMono-Bold-d" d="M 3463 3803 L 2431 3263 L 3463 2719 L 3225 2278 L 2188 2853 L 2188 1778 L 1650 1778 L 1650 2853 L 616 2278 L 378 2719 L 1416 3263 L 378 3803 L 616 4244 L 1650 3675 L 1650 4750 L 2188 4750 L 2188 3675 L 3225 4244 L 3463 3803 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-Bold-d"/> </g> </g> <g id="f52-text_5"> <!-- passo 3 --> <g style="fill: var(--fig-axis)" transform="translate(201.186 103.991656) scale(0.1 -0.1)"> <defs> <path id="f52-DejaVuSerif-Italic-16" d="M 1038 4469 Q 1431 4606 1781 4678 Q 2131 4750 2425 4750 Q 3109 4750 3436 4454 Q 3763 4159 3659 3634 Q 3578 3213 3258 2930 Q 2938 2647 2431 2547 Q 2988 2466 3241 2130 Q 3494 1794 3388 1259 Q 3263 606 2755 257 Q 2247 -91 1422 -91 Q 1056 -91 723 -12 Q 391 66 78 225 L 253 1131 L 603 1131 Q 547 681 775 450 Q 1003 219 1497 219 Q 1975 219 2304 495 Q 2634 772 2728 1253 Q 2834 1803 2604 2086 Q 2375 2369 1825 2369 L 1528 2369 L 1591 2688 L 1747 2688 Q 2294 2688 2611 2914 Q 2928 3141 3019 3597 Q 3097 4006 2914 4223 Q 2731 4441 2309 4441 Q 1888 4441 1616 4241 Q 1344 4041 1228 3647 L 878 3647 L 1038 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSerif-Italic-53"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(64.015625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(123.640625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(174.953125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-52" transform="translate(226.265625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(286.46875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-16" transform="translate(318.25 0)"/> </g> </g> <g id="f52-text_6"> <!-- * --> <g style="fill: var(--fig-steel)" transform="translate(125.382734 176.496016) scale(0.17 -0.17)"> <use xlink:href="#f52-DejaVuSansMono-Bold-d"/> </g> </g> <g id="f52-text_7"> <!-- passo 2 --> <g style="fill: var(--fig-axis)" transform="translate(145.746 170.519656) scale(0.1 -0.1)"> <defs> <path id="f52-DejaVuSerif-Italic-15" d="M 1050 3553 L 700 3553 L 862 4384 Q 1231 4563 1589 4656 Q 1947 4750 2272 4750 Q 3000 4750 3353 4397 Q 3706 4044 3587 3438 Q 3456 2753 2312 1800 Q 2225 1728 2178 1691 L 772 513 L 2719 513 L 2831 1088 L 3197 1088 L 2984 0 L -25 0 L 41 341 L 1731 1753 Q 2291 2222 2567 2614 Q 2844 3006 2928 3438 Q 3019 3909 2825 4175 Q 2631 4441 2200 4441 Q 1753 4441 1467 4219 Q 1181 3997 1050 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSerif-Italic-53"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(64.015625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(123.640625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(174.953125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-52" transform="translate(226.265625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(286.46875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-15" transform="translate(318.25 0)"/> </g> </g> <g id="f52-text_8"> <!-- 2 --> <g style="fill: var(--fig-ink)" transform="translate(250.122734 176.496016) scale(0.17 -0.17)"> <defs> <path id="f52-DejaVuSansMono-Bold-15" d="M 1356 813 L 3322 813 L 3322 0 L 359 0 L 359 788 L 859 1319 Q 1750 2266 1941 2484 Q 2175 2753 2278 2961 Q 2381 3169 2381 3372 Q 2381 3684 2192 3854 Q 2003 4025 1656 4025 Q 1409 4025 1101 3926 Q 794 3828 459 3641 L 459 4500 Q 794 4622 1114 4686 Q 1434 4750 1728 4750 Q 2469 4750 2892 4404 Q 3316 4059 3316 3463 Q 3316 3188 3223 2947 Q 3131 2706 2906 2413 Q 2741 2200 1997 1456 Q 1594 1053 1356 813 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-Bold-15"/> </g> </g> <g id="f52-text_9"> <!-- y --> <g style="fill: var(--fig-ink)" transform="translate(69.942734 243.024016) scale(0.17 -0.17)"> <defs> <path id="f52-DejaVuSansMono-Bold-5c" d="M 2222 -378 Q 2038 -872 1780 -1098 Q 1522 -1325 1153 -1325 L 397 -1325 L 397 -628 L 769 -628 Q 1050 -628 1181 -533 Q 1313 -438 1447 -91 L 1516 97 L 184 3500 L 1147 3500 L 1947 1228 L 2713 3500 L 3675 3500 L 2222 -378 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-Bold-5c"/> </g> </g> <g id="f52-text_10"> <!-- + --> <g style="fill: var(--fig-steel)" transform="translate(180.822734 243.024016) scale(0.17 -0.17)"> <defs> <path id="f52-DejaVuSansMono-Bold-e" d="M 2297 3725 L 2297 2381 L 3641 2381 L 3641 1638 L 2297 1638 L 2297 288 L 1556 288 L 1556 1638 L 206 1638 L 206 2381 L 1556 2381 L 1556 3725 L 2297 3725 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-Bold-e"/> </g> </g> <g id="f52-text_11"> <!-- passo 1 --> <g style="fill: var(--fig-axis)" transform="translate(201.186 237.047656) scale(0.1 -0.1)"> <defs> <path id="f52-DejaVuSerif-Italic-14" d="M 447 0 L 513 331 L 1325 331 L 2078 4213 L 1019 3603 L 1100 4013 L 2381 4750 L 2813 4750 L 1953 331 L 2766 331 L 2700 0 L 447 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSerif-Italic-53"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(64.015625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(123.640625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(174.953125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-52" transform="translate(226.265625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(286.46875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-14" transform="translate(318.25 0)"/> </g> </g> <g id="f52-text_12"> <!-- x --> <g style="fill: var(--fig-ink)" transform="translate(139.242734 304.008016) scale(0.17 -0.17)"> <use xlink:href="#f52-DejaVuSansMono-Bold-5b"/> </g> </g> <g id="f52-text_13"> <!-- 3 --> <g style="fill: var(--fig-ink)" transform="translate(222.402734 304.008016) scale(0.17 -0.17)"> <defs> <path id="f52-DejaVuSansMono-Bold-16" d="M 1716 2088 L 1222 2088 L 1222 2900 L 1716 2900 Q 2059 2900 2248 3036 Q 2438 3172 2438 3419 Q 2438 3678 2248 3823 Q 2059 3969 1716 3969 Q 1453 3969 1153 3903 Q 853 3838 531 3713 L 531 4550 Q 853 4647 1165 4698 Q 1478 4750 1766 4750 Q 2503 4750 2915 4428 Q 3328 4106 3328 3541 Q 3328 3125 3090 2861 Q 2853 2597 2413 2516 Q 2913 2428 3175 2117 Q 3438 1806 3438 1300 Q 3438 622 3003 265 Q 2569 -91 1741 -91 Q 1388 -91 1045 -31 Q 703 28 391 141 L 391 997 Q 684 850 1025 773 Q 1366 697 1741 697 Q 2116 697 2334 870 Q 2553 1044 2553 1338 Q 2553 1697 2334 1892 Q 2116 2088 1716 2088 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-Bold-16"/> </g> </g> <g id="f52-text_14"> <!-- x = y * (x + 3) * 2; --> <g style="fill: var(--fig-ink)" transform="translate(216.0885 42.141188) scale(0.12 -0.12)"> <defs> <path id="f52-DejaVuSansMono-5b" d="M 3494 3500 L 2241 1825 L 3616 0 L 2950 0 L 1925 1403 L 903 0 L 238 0 L 1613 1825 L 359 3500 L 997 3500 L 1925 2234 L 2847 3500 L 3494 3500 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-3" transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-20" d="M 275 1638 L 3578 1638 L 3578 1100 L 275 1100 L 275 1638 z M 275 2906 L 3578 2906 L 3578 2375 L 275 2375 L 275 2906 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-5c" d="M 2681 1125 Q 2538 759 2316 163 Q 2006 -663 1900 -844 Q 1756 -1088 1540 -1209 Q 1325 -1331 1038 -1331 L 575 -1331 L 575 -850 L 916 -850 Q 1169 -850 1312 -703 Q 1456 -556 1678 56 L 325 3500 L 934 3500 L 1972 763 L 2994 3500 L 3603 3500 L 2681 1125 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-d" d="M 3334 3897 L 2216 3291 L 3334 2681 L 3156 2375 L 2106 3009 L 2106 1831 L 1747 1831 L 1747 3009 L 697 2375 L 519 2681 L 1638 3291 L 519 3897 L 697 4206 L 1747 3572 L 1747 4750 L 2106 4750 L 2106 3572 L 3156 4206 L 3334 3897 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-b" d="M 2766 4856 Q 2350 4144 2145 3436 Q 1941 2728 1941 2009 Q 1941 1294 2145 584 Q 2350 -125 2766 -844 L 2266 -844 Q 1794 -100 1562 604 Q 1331 1309 1331 2009 Q 1331 2706 1562 3412 Q 1794 4119 2266 4856 L 2766 4856 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-e" d="M 2188 3659 L 2188 2272 L 3578 2272 L 3578 1741 L 2188 1741 L 2188 353 L 1663 353 L 1663 1741 L 275 1741 L 275 2272 L 1663 2272 L 1663 3659 L 2188 3659 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-c" d="M 1088 4856 L 1588 4856 Q 2059 4119 2290 3412 Q 2522 2706 2522 2009 Q 2522 1306 2290 600 Q 2059 -106 1588 -844 L 1088 -844 Q 1503 -119 1708 590 Q 1913 1300 1913 2009 Q 1913 2722 1708 3431 Q 1503 4141 1088 4856 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSansMono-1e" d="M 1569 947 L 2356 947 L 2356 300 L 1741 -897 L 1259 -897 L 1569 300 L 1569 947 z M 1528 3322 L 2316 3322 L 2316 2375 L 1528 2375 L 1528 3322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSansMono-5b"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f52-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f52-DejaVuSansMono-5c" transform="translate(240.8125 0)"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#f52-DejaVuSansMono-d" transform="translate(361.21875 0)"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#f52-DejaVuSansMono-b" transform="translate(481.625 0)"/> <use xlink:href="#f52-DejaVuSansMono-5b" transform="translate(541.828125 0)"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(602.03125 0)"/> <use xlink:href="#f52-DejaVuSansMono-e" transform="translate(662.234375 0)"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(722.4375 0)"/> <use xlink:href="#f52-DejaVuSansMono-16" transform="translate(782.640625 0)"/> <use xlink:href="#f52-DejaVuSansMono-c" transform="translate(842.84375 0)"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(903.046875 0)"/> <use xlink:href="#f52-DejaVuSansMono-d" transform="translate(963.25 0)"/> <use xlink:href="#f52-DejaVuSansMono-3" transform="translate(1023.453125 0)"/> <use xlink:href="#f52-DejaVuSansMono-15" transform="translate(1083.65625 0)"/> <use xlink:href="#f52-DejaVuSansMono-1e" transform="translate(1143.859375 0)"/> </g> </g> <g id="f52-text_15"> <!-- si valuta dal basso verso l'alto --> <g style="fill: var(--fig-axis)" transform="translate(208.266625 63.798047) scale(0.1 -0.1)"> <defs> <path id="f52-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f52-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f52-DejaVuSerif-Italic-56"/> <use xlink:href="#f52-DejaVuSerif-Italic-4c" transform="translate(51.3125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(83.296875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-59" transform="translate(115.078125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(171.578125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-4f" transform="translate(231.203125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-58" transform="translate(263.1875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-57" transform="translate(327.59375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(367.78125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(427.40625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-47" transform="translate(459.1875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(523.203125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-4f" transform="translate(582.828125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(614.8125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-45" transform="translate(646.59375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(710.609375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(770.234375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(821.546875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-52" transform="translate(872.859375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(933.0625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-59" transform="translate(964.84375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-48" transform="translate(1021.34375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-55" transform="translate(1080.53125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-56" transform="translate(1128.328125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-52" transform="translate(1179.640625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-3" transform="translate(1239.84375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-4f" transform="translate(1271.625 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-a" transform="translate(1303.609375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-44" transform="translate(1331.09375 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-4f" transform="translate(1390.71875 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-57" transform="translate(1422.703125 0)"/> <use xlink:href="#f52-DejaVuSerif-Italic-52" transform="translate(1462.890625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f52-pfb7f4567ab"> <rect x="5.76" y="5.76" width="360.36" height="310.464"/> </clipPath> </defs> </svg></figure>

Per `x = y * (x + 3) * 2;` i passi sono quattro: prima la parentesi `x + 3`, poi `y * (x + 3)`, poi il risultato per `2`, per ultima l'assegnazione. Con $x = 2$ e $y = 5$: $2 + 3 = 5$, $5 \cdot 5 = 25$, $25 \cdot 2 = 50$, e $x$ diventa $50$. La $x$ a destra vale ancora $2$ quando viene letta: si scrive solo al passo 4.

**Operatori.** Caratteri speciali, o loro combinazioni, che denotano un'operazione (<span class="src">slide 59-60</span>). La slide li elenca tutti insieme; per ora servono questi gruppi:

| Gruppo | Operatori | Esempio |
| --- | --- | --- |
| aritmetici | `+ - * / %` | `7 % 3` vale 1 |
| relazionali | `< <= > >=` | `x < 10` |
| uguaglianza | **==** e `!=` | `x != 0` |
| logici | `! && \|\|` | `x > 0 && x < 10` |
| assegnazione | **=**, `+= -= *= /= %=` | `x += 2` |
| incremento | `++ --` | `i++` |
| condizionale | `? :` | [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/) |

Gli altri della lista (`^ & | ~ << >>` sui bit, `-> . :: ->*` su struct e classi C++, `[]` sugli array) arriveranno più avanti.

**Precedenza.** Quale operatore si applica per primo quando non ci sono parentesi (<span class="src">slide 63</span>). Un gruppo più in alto nella tabella lega più forte.

**Associatività.** Il verso in cui si raggruppano operatori dello **stesso** gruppo: `10 - 4 - 3` si legge `(10 - 4) - 3`, che vale $3$ e non $9$, perché i sottrattivi associano da sinistra. L'assegnazione associa da destra: `a = b = 5` si legge `a = (b = 5)`.

Tabella delle precedenze della slide, dall'alto (lega di più) al basso:

```
gruppo            operatori                        associatività
postfissi         ( )  [ ]  .  ->                  da sinistra a destra
unari             !  ++  --  *  &  sizeof  -  (tipo)   da destra a sinistra
moltiplicativi    *  /  %                          da sinistra a destra
additivi          +  -                             da sinistra a destra
shift             <<  >>                           da sinistra a destra
relazionali       <  <=  >  >=                     da sinistra a destra
uguaglianza       ==  !=                           da sinistra a destra
AND logico        &&                               da sinistra a destra
OR logico         ||                               da sinistra a destra
condizionale      ? :                              da destra a sinistra
assegnazione      =  +=  -=  *=  /=  %=            da destra a sinistra
```

Nella riga degli unari `*` e `&` sono gli operatori sui puntatori e `-` è il meno unario (`-x`), non la moltiplicazione e la sottrazione. La tabella della slide è semplificata: mancano gli operatori sui bit `& ^ |` (fra uguaglianza e `&&`) e la virgola (sotto l'assegnazione).

**Lazy evaluation** (<span class="src">slide 62</span>). Il valore di un'espressione a volte si conosce senza valutare tutto l'albero, e il C in quei casi si ferma. Succede con `&&` e `||`, valutati da sinistra:
- in `A && B`, se `A` è falso il risultato è falso qualunque sia `B`, quindi `B` **non viene valutato**;
- in `A || B`, se `A` è vero il risultato è vero, e `B` non viene valutato.

Serve a scrivere condizioni che proteggono se stesse: in `x != 0 && 10 / x > 1` la divisione non avviene mai quando $x$ è zero. Se `B` contiene un `++`, e non viene valutato, l'incremento non avviene. Si chiama anche **valutazione cortocircuitata** (short-circuit).

**Assegnazioni composte** (<span class="src">slide 66</span>, <span class="src">slide 70</span>). Le istruzioni del tipo `x = x + a` si chiamano **autoassegnamenti** e sono così frequenti che hanno una forma corta:

| Forma compatta | Forma estesa |
| --- | --- |
| `x += a` | `x = x + a` |
| `x -= a` | `x = x - a` |
| `x *= a` | `x = x * a` |
| `x /= a` | `x = x / a` |
| `x %= a` | `x = x % a` |
| `x++` | `x = x + 1` |
| `x--` | `x = x - 1` |

Attenzione: la parte a destra si calcola **tutta** prima. `x *= y + 1` vuol dire `x = x * (y + 1)`, non `x = x * y + 1`, perché l'assegnazione ha la precedenza più bassa di tutte.

**Incremento e decremento** (<span class="src">slide 68</span>). Entrambe le forme cambiano la variabile di uno. Cambia il **valore dell'espressione**:

| Espressione | Valore dell'espressione | Effetto su `x` |
| --- | --- | --- |
| `x++` (post-incremento) | il valore di `x` **prima** | `x` aumenta di 1 |
| `++x` (pre-incremento) | il valore di `x` **dopo** | `x` aumenta di 1 |
| `x--` (post-decremento) | il valore di `x` **prima** | `x` cala di 1 |
| `--x` (pre-decremento) | il valore di `x` **dopo** | `x` cala di 1 |

Da soli, come istruzione (`i++;` oppure `++i;`), fanno la stessa cosa. La differenza si vede solo quando il valore viene usato: `y = x++;` e `y = ++x;` lasciano `x` uguale ma `y` diverso.

**Costante** (<span class="src">slide 71</span>). Un valore che non cambia durante il programma. Come le variabili, una costante con nome ha nome, tipo, l-value e r-value. Esempi della slide:
- numeriche: `5`, `2.4`, `0xFF` (esadecimale, vale 255), `3E10` ($3 \cdot 10^{10}$), `-4.5E-9`;
- stringhe: `"marco"`, `"\tstudenti info\n"` (`\t` è una tabulazione, `\n` un a capo);
- predefinite: `NULL`, il puntatore nullo, definito in `stdio.h` e in altri header standard;
- booleane: `true` e `false`. In C11 **non esistono da sole**: servono `#include <stdbool.h>` (dal C99) oppure il C23, dove sono diventate parole chiave. Senza, gcc con `-std=c11` dà errore "‘true’ undeclared". Il C tradizionale usa gli interi: `0` è falso, qualunque altro valore è vero, e gli operatori relazionali e logici restituiscono `1` o `0`.

**Variabile costante** (<span class="src">slide 72</span>).

```
const tipo identificatore = espressione;
```

Il valore (r-value) non si può più modificare: un'assegnazione successiva è un **errore di compilazione**. Il valore va dato subito, nella dichiarazione, perché dopo non si potrà più.

```c
const int kilo = 1024;
const double pi = 3.14159;
const int mille = kilo - 24;
```

La slide scrive `pi = 3.141519`: le cifre sono scambiate, $\pi = 3{,}14159\ldots$ La slide dice anche che l'espressione deve essere calcolabile in fase di compilazione. Per le costanti locali in C non è obbligatorio: `const int doppio = 2 * n;` con `n` letto da tastiera compila (provato con gcc). Il vincolo vale per le costanti globali e in C++ per quelle usate come dimensione di un array.

**Carattere e stringa** (<span class="src">slide 74</span>).
- Un **carattere** si scrive fra **apici singoli**: `'a'` è il carattere a, di tipo `char`, e vale il suo codice ASCII (97).
- Una **stringa** si scrive fra **apici doppi**: `"a"` è una stringa di un carattere, `"alfa"` una di quattro.
- Senza apici, `a` e `alfa` sono identificatori di variabili.

La slide dice che i caratteri vanno "tra apici doppi": è sbagliato. `'a'` e `"a"` sono oggetti diversi, e in `printf("%c", ...)` va il primo. La stringa è una sequenza di caratteri trattata come un oggetto unico; come la memorizza il C si vedrà con gli array.

Con `printf`:
- `printf("a")` stampa il carattere a;
- `printf("a=%d", a)` stampa `a=` seguito dal valore della variabile `a`;
- `printf(a)` con `a` intero **non compila**: il primo argomento di `printf` deve essere una stringa (gcc: "makes pointer from integer without a cast"). Lo pseudo-C delle slide lo scrive, il C vero no.

**ASCII** (<span class="src">slide 75</span>). American Standard Code for Information Interchange, dal 1963. Associa a ogni carattere un numero da 0 a 127, cioè 7 bit. I codici da ricordare:

| Carattere | Codice | Nota |
| --- | --- | --- |
| `'\0'` | 0 | NUL, non stampabile |
| `'\n'` | 10 | a capo |
| `' '` | 32 | spazio |
| `'0'` … `'9'` | 48 … 57 | cifre, consecutive |
| `'A'` … `'Z'` | 65 … 90 | maiuscole, consecutive |
| `'a'` … `'z'` | 97 … 122 | minuscole, consecutive |

Dato che un `char` è un numero, ci si fa aritmetica. Le tre formule che servono sempre:
- valore di una cifra: `c - '0'` (da `'7'` si ottiene 7);
- minuscola in maiuscola: `c - 'a' + 'A'`;
- distanza fra minuscole e maiuscole: `'a' - 'A'` vale 32.

**UTF-8** (<span class="src">slide 76</span>). ASCII copre solo l'inglese. **Unicode** assegna un numero a ogni carattere di ogni lingua, e **UTF-8** è il modo più usato di scriverlo in byte: da 1 a 4 byte per carattere, e i caratteri ASCII restano identici su un byte. Dal 2008 circa è la codifica più usata sul web (grafico della slide). Conseguenza pratica: `"è"` occupa due byte, non uno.

## Concetti

**Valutare un'espressione a mano.**
1. Metti le parentesi implicite seguendo la tabella: prima unari, poi `* / %`, poi `+ -`, poi i confronti, poi `&&`, `||`, `?:`, assegnazione.
2. A parità di gruppo, raggruppa secondo l'associatività (quasi sempre da sinistra, tranne unari, `?:` e assegnazioni).
3. Calcola dal basso dell'albero. Con due interi, `/` è **divisione intera** (tronca verso zero) e `%` è il resto.
4. Con `&&` e `||` fermati appena il risultato è deciso, e ricordati che la parte non valutata non esegue i suoi `++`.
5. Scrivi il valore delle variabili **dopo** ogni istruzione in una tabella.

**Divisione intera e resto.** `7 / 2` vale $3$, `7 / 2.0` vale $3.5$: basta un operando `double` perché la divisione sia decimale. Dal C99 la divisione tronca verso zero: `-7 / 2` vale $-3$ e `-7 % 2` vale $-1$. Vale sempre `(a / b) * b + a % b` uguale ad `a`.

**Cifre di un numero.** `n % 10` è l'ultima cifra, `n / 10` toglie l'ultima cifra. Con $n = 247$: `n % 10` è 7, `n / 10 % 10` è 4, `n / 100` è 2. È il trucco dei tracing con la matricola.

## Esempi svolti a lezione

**Albero sintattico** (<span class="src">slide 58</span>), verificato:

```c
#include <stdio.h>

int main(void)
{
    int x = 2;
    int y = 5;

    x = y * (x + 3) * 2;
    printf("x = %d\n", x);
    return 0;
}
```

Output: `x = 50`.

**Esercizio `NumCarte`** (<span class="src">slide 73</span>). Il programma della slide dichiara una costante e una variabile, legge il numero di giocatori e divide le carte. In fondo c'è, commentata, `NumCarte = NumCarte-1; //Error`. La domanda è perché darebbe errore. Versione compilabile, con il controllo di `scanf` e una dichiarazione per riga:

```c
#include <stdio.h>

int main(void)
{
    const int NumCarte = 40;
    int NumGiocatori = 4;

    printf("Numero Carte = %d\n", NumCarte);

    printf("Numero Giocatori ?\n");
    if (scanf("%d", &NumGiocatori) != 1 || NumGiocatori <= 0) {
        printf("Input non valido\n");
        return 1;
    }
    printf("Numero Giocatori = %d\n", NumGiocatori);

    printf("Numero Carte/Giocatore = %d\n", NumCarte / NumGiocatori);

    NumGiocatori = NumGiocatori + 1;
    printf("Ora i giocatori sono %d\n", NumGiocatori);
    return 0;
}
```

Con input `3`:

```
Numero Carte = 40
Numero Giocatori ?
Numero Giocatori = 3
Numero Carte/Giocatore = 13
Ora i giocatori sono 4
```

$40 / 3$ è una divisione intera: 13, e il resto 1 si perde. `NumGiocatori = NumGiocatori + 1` compila perché `NumGiocatori` è una variabile normale. Aggiungendo `NumCarte = NumCarte - 1;` gcc si ferma con `error: assignment of read-only variable 'NumCarte'`: `NumCarte` è `const`, il suo r-value non si può cambiare. L'errore esce in **compilazione**, non a run-time.

**Stampa di caratteri** (<span class="src">slide 74</span>) con l'aritmetica ASCII:

```c
#include <stdio.h>

int main(void)
{
    int a = 5;
    char c = 'a';

    printf("a");
    printf("\n");
    printf("a=%d\n", a);
    printf("%c\n", c);
    printf("%c %d\n", 'A', 'A');
    printf("%c\n", c + 1);
    printf("%d\n", '7' - '0');
    printf("%c\n", 'g' - 'a' + 'A');
    printf("%d\n", 'a' - 'A');
    return 0;
}
```

Output:

```
a
a=5
a
A 65
b
7
G
32
```

`%c` stampa il carattere che ha quel codice, `%d` stampa il codice. `'A'` con `%d` dà 65.

**Incrementi** (<span class="src">slide 68</span>):

```c
#include <stdio.h>

int main(void)
{
    int x = 5;
    int y;
    int z;

    y = x++;
    printf("x = %d, y = %d\n", x, y);
    z = ++x;
    printf("x = %d, z = %d\n", x, z);
    y = x--;
    printf("x = %d, y = %d\n", x, y);
    z = --x;
    printf("x = %d, z = %d\n", x, z);
    return 0;
}
```

| istruzione | `x` | `y` | `z` | perché |
| --- | --- | --- | --- | --- |
| iniziale | 5 | ? | ? | |
| `y = x++;` | 6 | 5 | ? | `y` prende il valore prima |
| `z = ++x;` | 7 | 5 | 7 | `z` prende il valore dopo |
| `y = x--;` | 6 | 7 | 7 | valore prima |
| `z = --x;` | 5 | 7 | 5 | valore dopo |

Output: `x = 6, y = 5`, `x = 7, z = 7`, `x = 6, y = 7`, `x = 5, z = 5`, una riga ciascuno.

**Assegnazioni composte** (<span class="src">slide 66</span>):

```c
#include <stdio.h>

int main(void)
{
    int x = 10;
    int y = 3;

    x += y;
    printf("%d\n", x);
    x -= 4;
    printf("%d\n", x);
    x *= y + 1;
    printf("%d\n", x);
    x /= 5;
    printf("%d\n", x);
    x %= 4;
    printf("%d\n", x);
    return 0;
}
```

Output, una riga per valore: 13, 9, 36, 7, 3. Il terzo è $9 \cdot (3 + 1) = 36$, non $9 \cdot 3 + 1 = 28$. Il quarto è $36 / 5 = 7$ con divisione intera.

**Lazy evaluation** (<span class="src">slide 62</span>; la slide rimanda l'esempio a più avanti, questo è mio):

```c
#include <stdio.h>

int main(void)
{
    int x = 0;
    int b = 7;

    if (x != 0 && 10 / x > 1) {
        printf("grande\n");
    } else {
        printf("x nullo o piccolo\n");
    }
    if (x == 0 || b++ > 0) {
        printf("b = %d\n", b);
    }
    return 0;
}
```

Output: `x nullo o piccolo` e `b = 7`. La divisione per zero non avviene, e `b++` non viene eseguito perché `x == 0` è già vero.

## Esercizi tipo esame

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int m = 247;
    int a = m % 10;
    int b = m / 10 % 10;
    int c = m / 100;
    int x = a++ + --b;

    x += a * b % 5;
    printf("%d %d %d %d\n", a, b, c, x);
    return 0;
}
```

> [!example]- Soluzione
> `a` = 7, `b` = 4, `c` = 2 (cifre di 247).
> `x = a++ + --b`: `a++` vale 7 e poi `a` diventa 8; `--b` porta `b` a 3 e vale 3. `x` = 10.
> `x += a * b % 5`: `*` e `%` stesso gruppo, da sinistra: $(8 \cdot 3) \% 5 = 24 \% 5 = 4$. `x` = 14.
> Output: `8 3 2 14` (verificato).

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int i = 3;
    int j = 2;
    int k;

    k = i++ * 2 + --j;
    j += k-- - i;
    i *= j - 2;
    printf("%d %d %d\n", i, j, k);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | `i` | `j` | `k` | conto |
> | --- | --- | --- | --- | --- |
> | iniziale | 3 | 2 | ? | |
> | `k = i++ * 2 + --j;` | 4 | 1 | 7 | $3 \cdot 2 + 1$ |
> | `j += k-- - i;` | 4 | 4 | 6 | `k--` vale 7, $7 - 4 = 3$, $1 + 3$ |
> | `i *= j - 2;` | 8 | 4 | 6 | $4 \cdot (4 - 2)$ |
>
> Output: `8 4 6` (verificato).

**Esercizio 3.** Disegna l'albero sintattico di `a = b + c * d - e / 2` e calcola `a` con $b = 1$, $c = 2$, $d = 3$, $e = 8$.

> [!example]- Soluzione
> ```
>              =
>            /   \
>           a     -
>               /   \
>              +     /
>             / \   / \
>            b   * e   2
>               / \
>              c   d
> ```
> `*` e `/` prima (più precedenza), poi `+` e `-` da sinistra: $(b + c \cdot d) - e / 2 = (1 + 6) - 4 = 3$. Verificato: stampa 3.

**Esercizio 4.** Valuta ogni espressione, con `int` dove non c'è il punto decimale.

```
a) 7 / 2 * 2        b) 7 / 2.0         c) 10 - 4 - 3      d) 100 / 10 / 5
e) 1 + 2 * 3 % 4    f) -7 / 2          g) -7 % 2          h) !5 + 1
i) 3 < 2 < 1        j) 5 > 3 && 2 > 4
```

> [!example]- Soluzione
> a) $(7/2) \cdot 2 = 3 \cdot 2 = 6$. b) $3.5$. c) $(10-4)-3 = 3$. d) $(100/10)/5 = 2$.
> e) $2 \cdot 3 = 6$, $6 \% 4 = 2$, $1 + 2 = 3$. f) $-3$ (tronca verso zero). g) $-1$.
> h) `!5` vale 0 (5 è vero, il NOT dà falso), più 1: $1$.
> i) si legge `(3 < 2) < 1`, cioè `0 < 1`, che vale **1**. Non è la catena matematica: gcc con `-Wall` avvisa proprio per questo.
> j) $1 \&\& 0 = 0$.
> Verificati con un programma (la i scritta con le parentesi esplicite).

**Esercizio 5.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 0;
    int b = 5;
    int r = (a > 0) && (b++ > 0);
    int s = (a == 0) || (b-- > 0);
    int t = (a == 0) && (b++ > 4);

    printf("%d %d %d %d\n", r, s, t, b);
    return 0;
}
```

> [!example]- Soluzione
> `r`: `a > 0` è falso, `b++` **non** si esegue. `r` = 0, `b` = 5.
> `s`: `a == 0` è vero, `b--` non si esegue. `s` = 1, `b` = 5.
> `t`: `a == 0` vero, si valuta `b++ > 4`: confronta 5 con 4 (vero) e poi `b` diventa 6. `t` = 1.
> Output: `0 1 1 6` (verificato).

**Esercizio 6.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char c = 'd';
    int d = c - 'a';
    char e = c + 2;
    char f = 'b' - 'a' + 'A';

    printf("%d %c %c %d\n", d, e, f, e);
    return 0;
}
```

> [!example]- Soluzione
> `d` = $100 - 97 = 3$ (la d è la quarta lettera, distanza 3 dalla a). `e` = `'f'`. `f` = $1 + 65 = 66$, cioè `'B'`. L'ultimo `%d` stampa il codice di `'f'`, 102.
> Output: `3 f B 102` (verificato).

**Esercizio 7.** Quali righe danno errore di compilazione, e perché?

```
const int max = 10;
int n = 3;
n = max + 1;        (1)
max = n;            (2)
max++;              (3)
const int m;        (4)
```

> [!example]- Soluzione
> (1) va bene: si legge `max`, si scrive `n`. (2) e (3) sono errori: `max` è `const`, non si può scrivere né assegnare né incrementare. (4) compila, ma `m` resta senza valore per sempre: una costante va inizializzata nella dichiarazione, dopo non si può più. gcc la accetta in C (in C++ è un errore), quindi è codice sbagliato anche se passa.

## Errori tipici

- Credere che `x *= y + 1` sia `x = x * y + 1`. La destra si calcola tutta prima.
- Scrivere `i = i++;` o `a[i] = i++;`: la stessa variabile modificata due volte senza un punto di sequenza è comportamento indefinito. gcc con `-Wall` avvisa (`-Wsequence-point`).
- Confondere `'a'` (carattere, apici singoli) con `"a"` (stringa, apici doppi), come fa la slide 74.
- Scrivere `7 / 2` aspettandosi 3.5: fra interi la divisione è intera.
- Leggere `3 < x < 10` come in matematica: vale sempre 1, perché `3 < x` dà 0 o 1, che è sempre minore di 10. Si scrive `3 < x && x < 10`.
- Usare `true` e `false` senza `#include <stdbool.h>` in C11.
- Contare su un `++` scritto nella parte destra di `&&` o `||`: con la lazy evaluation può non essere eseguito.
- Usare **=** al posto di **==** in un confronto: `if (x = 0)` assegna 0 e la condizione è sempre falsa. gcc con `-Wall` avvisa.

## Domande

- Cos'è l'albero sintattico di un'espressione e cosa ne determina la forma?

- In che ordine si valuta `x = y * (x + 3) * 2;`?

- Che differenza c'è fra precedenza e associatività?

- Quanto vale `10 - 4 - 3` e perché?

- Cos'è la lazy evaluation e con quali operatori interviene?

- A cosa equivale `x *= y + 1`?

- Che differenza c'è fra `x++` e `++x`?

- Con `x` che vale 5, quanto valgono `x` e `y` dopo `y = x++;`? E dopo `y = ++x;` partendo da 5?

- Cosa succede se si assegna un nuovo valore a una variabile dichiarata `const`?

- Quanto valgono `7 / 2`, `7 % 2` e `7 / 2.0`?

- Che differenza c'è fra `'a'` e `"a"`?

- Come si ottiene il valore numerico di un carattere cifra `c`?

- Quanto vale `'a' - 'A'` e a cosa serve?

- Cosa sono ASCII e UTF-8?

- In C11 si possono usare `true` e `false` senza include?

- Con `a` che vale 0 e `b` che vale 5, quanto vale `b` dopo aver valutato `(a > 0) && (b++ > 0)`?

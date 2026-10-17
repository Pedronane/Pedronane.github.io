---
title: Espressioni, operatori e costanti (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-27
lezioni: []
ordine: 3
---

Esercizi tipo esame di [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Tutti i programmi sono stati compilati ed eseguiti; l'output nelle soluzioni è quello vero.

**Esercizio 1.** Valuta ogni espressione, con `int` dove non c'è il punto decimale.

```
a) 7 / 2 * 2        b) 7 / 2.0         c) 10 - 4 - 3      d) 100 / 10 / 5
e) 1 + 2 * 3 % 4    f) -7 / 2          g) -7 % 2          h) !5 + 1
i) 3 < 2 < 1        j) 5 > 3 && 2 > 4
```

> [!example]- Soluzione
> Si riconosce: espressioni senza variabili, contano solo la tabella delle precedenze e il tipo degli operandi.
>
> ```
> a) 7 / 2 * 2       / e * stesso gruppo, da sinistra:  (7 / 2) * 2  =  3 * 2  =  6
> b) 7 / 2.0         un operando double:                 3.5
> c) 10 - 4 - 3      da sinistra:                        (10 - 4) - 3  =  6 - 3  =  3
> d) 100 / 10 / 5    da sinistra:                        (100 / 10) / 5  =  10 / 5  =  2
> e) 1 + 2 * 3 % 4   * e % da sinistra:                  (2 * 3) % 4  =  6 % 4  =  2
>                    poi +:                              1 + 2  =  3
> f) -7 / 2          -3.5 troncato verso zero:           -3
> g) -7 % 2          -7 - (-3) * 2  =  -7 + 6:           -1
> h) !5 + 1          ! prima di +:  (!5) + 1             5 è vero, !5 vale 0;  0 + 1  =  1
> i) 3 < 2 < 1       da sinistra:  (3 < 2) < 1           0 < 1  =  1
> j) 5 > 3 && 2 > 4  confronti prima di &&:              1 && 0  =  0
> ```
>
> La i) non è la catena matematica "3 < 2 < 1", che sarebbe falsa: `3 < 2` produce 0, e $0 < 1$ è vero. gcc con `-Wall` avvisa (`comparisons like 'X<=Y<=Z' do not have their mathematical meaning`). Controllo della g) con l'identità: $(-3) \cdot 2 + (-1) = -7$. Verificati con un programma.

**Esercizio 2.** Disegna l'albero sintattico di `a = b + c * d - e / 2` e calcola `a` con $b = 1$, $c = 2$, $d = 3$, $e = 8$.

> [!example]- Soluzione
> Si riconosce: albero sintattico, quindi prima si decide chi è la radice. È l'operatore con la precedenza più bassa, l'assegnazione.
>
> 1. L'assegnazione **=** è più in basso di tutti: radice, con `a` a sinistra e tutto il resto a destra.
> 2. Fra `+`, `*`, `-`, `/` lega di meno il gruppo additivo. `+` e `-` sono dello stesso gruppo e associano da sinistra, quindi la radice del lato destro è il `-`: `(b + c * d) - (e / 2)`.
> 3. Sotto il `+`: `b` e `c * d`. Sotto il `/`: `e` e `2`.
>
> <figure class="fig"><svg role="img" aria-label="Albero sintattico con precedenze" xmlns:xlink="http://www.w3.org/1999/xlink" width="399.6pt" height="321.984pt" viewBox="0 0 399.6 321.984" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="feb0a76-figure_1"> <g id="feb0a76-patch_1"> <path d="M 0 321.984 L 399.6 321.984 L 399.6 -0 L 0 -0 L 0 321.984 z " style="fill: none"/> </g> <g id="feb0a76-axes_1"> <g id="feb0a76-line2d_1"> <path d="M 102.78 51.498 L 39.024 87.534 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_2"> <path d="M 102.78 51.498 L 185.94 87.534 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_3"> <path d="M 185.94 112.482 L 122.184 154.062 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_4"> <path d="M 185.94 112.482 L 282.96 154.062 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_5"> <path d="M 122.184 179.01 L 72.288 220.59 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_6"> <path d="M 122.184 179.01 L 172.08 220.59 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_7"> <path d="M 172.08 245.538 L 144.36 284.346 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_8"> <path d="M 172.08 245.538 L 205.344 284.346 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_9"> <path d="M 282.96 179.01 L 255.24 220.59 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-line2d_10"> <path d="M 282.96 179.01 L 316.224 220.59 " clip-path="url(#feb0a76-pd2ab562507)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feb0a76-text_1"> <!-- = --> <g style="fill: var(--fig-accent)" transform="translate(97.662734 43.440016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-20" d="M 275 1663 L 3578 1663 L 3578 922 L 275 922 L 275 1663 z M 275 3084 L 3578 3084 L 3578 2350 L 275 2350 L 275 3084 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-20"/> </g> </g> <g id="feb0a76-text_2"> <!-- a vale 3 --> <g style="fill: var(--fig-axis)" transform="translate(115.254 38.720145) scale(0.095 -0.095)"> <defs> <path id="feb0a76-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-16" d="M 1038 4469 Q 1431 4606 1781 4678 Q 2131 4750 2425 4750 Q 3109 4750 3436 4454 Q 3763 4159 3659 3634 Q 3578 3213 3258 2930 Q 2938 2647 2431 2547 Q 2988 2466 3241 2130 Q 3494 1794 3388 1259 Q 3263 606 2755 257 Q 2247 -91 1422 -91 Q 1056 -91 723 -12 Q 391 66 78 225 L 253 1131 L 603 1131 Q 547 681 775 450 Q 1003 219 1497 219 Q 1975 219 2304 495 Q 2634 772 2728 1253 Q 2834 1803 2604 2086 Q 2375 2369 1825 2369 L 1528 2369 L 1591 2688 L 1747 2688 Q 2294 2688 2611 2914 Q 2928 3141 3019 3597 Q 3097 4006 2914 4223 Q 2731 4441 2309 4441 Q 1888 4441 1616 4241 Q 1344 4041 1228 3647 L 878 3647 L 1038 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSerif-Italic-44"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(59.625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-59" transform="translate(91.40625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-44" transform="translate(147.90625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-4f" transform="translate(207.53125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-48" transform="translate(239.515625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(298.703125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-16" transform="translate(330.484375 0)"/> </g> </g> <g id="feb0a76-text_3"> <!-- a --> <g style="fill: var(--fig-ink)" transform="translate(33.906734 104.424016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-44" d="M 2188 1644 Q 1675 1644 1472 1512 Q 1269 1381 1269 1063 Q 1269 825 1409 684 Q 1550 544 1791 544 Q 2153 544 2353 817 Q 2553 1091 2553 1581 L 2553 1644 L 2188 1644 z M 3463 1997 L 3463 0 L 2553 0 L 2553 391 Q 2388 159 2128 34 Q 1869 -91 1556 -91 Q 959 -91 626 225 Q 294 541 294 1106 Q 294 1719 691 2011 Q 1088 2303 1919 2303 L 2553 2303 L 2553 2456 Q 2553 2678 2392 2792 Q 2231 2906 1919 2906 Q 1591 2906 1283 2823 Q 975 2741 641 2559 L 641 3341 Q 944 3466 1256 3525 Q 1569 3584 1919 3584 Q 2772 3584 3117 3237 Q 3463 2891 3463 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-44"/> </g> </g> <g id="feb0a76-text_4"> <!-- - --> <g style="fill: var(--fig-steel)" transform="translate(180.822734 104.424016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-10" d="M 941 2297 L 2913 2297 L 2913 1388 L 941 1388 L 941 2297 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-10"/> </g> </g> <g id="feb0a76-text_5"> <!-- 7 - 4 = 3 --> <g style="fill: var(--fig-axis)" transform="translate(198.414 99.703773) scale(0.095 -0.095)"> <defs> <path id="feb0a76-DejaVuSerif-Italic-1a" d="M 4000 4347 L 1331 0 L 866 0 L 3413 4153 L 1256 4153 L 1144 3578 L 778 3578 L 991 4666 L 4063 4666 L 4000 4347 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-10" d="M 328 1959 L 1928 1959 L 1834 1472 L 234 1472 L 328 1959 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-17" d="M 2084 1581 L 2566 4063 L 491 1581 L 2084 1581 z M 3150 0 L 1025 0 L 1091 331 L 1841 331 L 2019 1247 L -19 1247 L 47 1588 L 2706 4750 L 3325 4750 L 2709 1581 L 3600 1581 L 3534 1247 L 2644 1247 L 2466 331 L 3216 331 L 3150 0 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSerif-Italic-1a"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(63.625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-10" transform="translate(95.40625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(129.203125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-17" transform="translate(160.984375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(224.609375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(256.390625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(340.1875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-16" transform="translate(371.96875 0)"/> </g> </g> <g id="feb0a76-text_6"> <!-- + --> <g style="fill: var(--fig-steel)" transform="translate(117.066734 170.952016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-e" d="M 2297 3725 L 2297 2381 L 3641 2381 L 3641 1638 L 2297 1638 L 2297 288 L 1556 288 L 1556 1638 L 206 1638 L 206 2381 L 1556 2381 L 1556 3725 L 2297 3725 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-e"/> </g> </g> <g id="feb0a76-text_7"> <!-- 1 + 6 = 7 --> <g style="fill: var(--fig-axis)" transform="translate(134.658 166.231773) scale(0.095 -0.095)"> <defs> <path id="feb0a76-DejaVuSerif-Italic-14" d="M 447 0 L 513 331 L 1325 331 L 2078 4213 L 1019 3603 L 1100 4013 L 2381 4750 L 2813 4750 L 1953 331 L 2766 331 L 2700 0 L 447 0 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-19" d="M 1070 553 Q 1244 219 1684 219 Q 2125 219 2425 542 Q 2725 866 2842 1472 Q 2959 2078 2786 2401 Q 2613 2725 2172 2725 Q 1725 2725 1429 2412 Q 1134 2100 1019 1509 Q 897 888 1070 553 z M 1122 2569 Q 1378 2803 1670 2918 Q 1963 3034 2300 3034 Q 2997 3034 3320 2615 Q 3644 2197 3503 1472 Q 3366 763 2845 336 Q 2325 -91 1597 -91 Q 806 -91 497 498 Q 188 1088 400 2181 Q 638 3406 1272 4078 Q 1906 4750 2822 4750 Q 3069 4750 3331 4703 Q 3594 4656 3859 4563 L 3709 3794 L 3356 3794 Q 3381 4109 3209 4275 Q 3038 4441 2694 4441 Q 2088 4441 1702 3981 Q 1316 3522 1122 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSerif-Italic-14"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(63.625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-e" transform="translate(95.40625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(179.203125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-19" transform="translate(210.984375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(274.609375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(306.390625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(390.1875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-1a" transform="translate(421.96875 0)"/> </g> </g> <g id="feb0a76-text_8"> <!-- / --> <g style="fill: var(--fig-steel)" transform="translate(277.842734 170.952016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-12" d="M 2809 4666 L 3500 4666 L 1044 -594 L 353 -594 L 2809 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-12"/> </g> </g> <g id="feb0a76-text_9"> <!-- 8 / 2 = 4 --> <g style="fill: var(--fig-axis)" transform="translate(295.434 166.231773) scale(0.095 -0.095)"> <defs> <path id="feb0a76-DejaVuSerif-Italic-1b" d="M 2775 1275 Q 2872 1775 2678 2051 Q 2484 2328 2034 2328 Q 1584 2328 1281 2051 Q 978 1775 881 1275 Q 784 772 979 495 Q 1175 219 1625 219 Q 2075 219 2376 495 Q 2678 772 2775 1275 z M 3088 3541 Q 3172 3966 3001 4203 Q 2831 4441 2444 4441 Q 2059 4441 1796 4203 Q 1534 3966 1450 3541 Q 1369 3113 1539 2875 Q 1709 2638 2094 2638 Q 2481 2638 2743 2875 Q 3006 3113 3088 3541 z M 2547 2484 Q 3063 2413 3297 2092 Q 3531 1772 3434 1275 Q 3309 619 2823 264 Q 2338 -91 1563 -91 Q 791 -91 444 264 Q 97 619 222 1275 Q 319 1772 678 2092 Q 1038 2413 1588 2484 Q 1131 2569 932 2842 Q 734 3116 816 3541 Q 925 4103 1376 4426 Q 1828 4750 2506 4750 Q 3184 4750 3507 4426 Q 3831 4103 3722 3541 Q 3641 3116 3336 2842 Q 3031 2569 2547 2484 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-12" d="M 2172 4666 L 2672 4666 L -10 -594 L -510 -594 L 2172 4666 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-15" d="M 1050 3553 L 700 3553 L 862 4384 Q 1231 4563 1589 4656 Q 1947 4750 2272 4750 Q 3000 4750 3353 4397 Q 3706 4044 3587 3438 Q 3456 2753 2312 1800 Q 2225 1728 2178 1691 L 772 513 L 2719 513 L 2831 1088 L 3197 1088 L 2984 0 L -25 0 L 41 341 L 1731 1753 Q 2291 2222 2567 2614 Q 2844 3006 2928 3438 Q 3019 3909 2825 4175 Q 2631 4441 2200 4441 Q 1753 4441 1467 4219 Q 1181 3997 1050 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSerif-Italic-1b"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(63.625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-12" transform="translate(95.40625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(129.09375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-15" transform="translate(160.875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(224.5 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(256.28125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(340.078125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-17" transform="translate(371.859375 0)"/> </g> </g> <g id="feb0a76-text_10"> <!-- b --> <g style="fill: var(--fig-ink)" transform="translate(67.170734 237.48068) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-45" d="M 2656 1741 Q 2656 2247 2487 2534 Q 2319 2822 2022 2822 Q 1725 2822 1553 2534 Q 1381 2247 1381 1741 Q 1381 1234 1553 946 Q 1725 659 2022 659 Q 2319 659 2487 946 Q 2656 1234 2656 1741 z M 1381 3003 Q 1550 3294 1773 3439 Q 1997 3584 2278 3584 Q 2900 3584 3236 3109 Q 3572 2634 3572 1747 Q 3572 872 3240 390 Q 2909 -91 2309 -91 Q 1994 -91 1759 62 Q 1525 216 1381 519 L 1381 0 L 469 0 L 469 4863 L 1381 4863 L 1381 3003 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-45"/> </g> </g> <g id="feb0a76-text_11"> <!-- 1 --> <g style="fill: var(--fig-axis)" transform="translate(84.762 232.759773) scale(0.095 -0.095)"> <use xlink:href="#feb0a76-DejaVuSerif-Italic-14"/> </g> </g> <g id="feb0a76-text_12"> <!-- * --> <g style="fill: var(--fig-steel)" transform="translate(166.962734 237.480016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-d" d="M 3463 3803 L 2431 3263 L 3463 2719 L 3225 2278 L 2188 2853 L 2188 1778 L 1650 1778 L 1650 2853 L 616 2278 L 378 2719 L 1416 3263 L 378 3803 L 616 4244 L 1650 3675 L 1650 4750 L 2188 4750 L 2188 3675 L 3225 4244 L 3463 3803 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-d"/> </g> </g> <g id="feb0a76-text_13"> <!-- 2 · 3 = 6 --> <g style="fill: var(--fig-axis)" transform="translate(184.554 232.759773) scale(0.095 -0.095)"> <defs> <path id="feb0a76-DejaVuSerif-Italic-79" d="M 594 2222 Q 628 2397 772 2517 Q 916 2638 1094 2638 Q 1266 2638 1364 2516 Q 1463 2394 1428 2222 Q 1394 2047 1248 1926 Q 1103 1806 931 1806 Q 753 1806 656 1925 Q 559 2044 594 2222 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSerif-Italic-15"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(63.625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-79" transform="translate(95.40625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(127.1875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-16" transform="translate(158.96875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(222.59375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(254.375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(338.171875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-19" transform="translate(369.953125 0)"/> </g> </g> <g id="feb0a76-text_14"> <!-- e --> <g style="fill: var(--fig-ink)" transform="translate(250.122734 237.480016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-48" d="M 3444 172 Q 3125 41 2794 -25 Q 2463 -91 2094 -91 Q 1216 -91 752 379 Q 288 850 288 1734 Q 288 2591 734 3087 Q 1181 3584 1953 3584 Q 2731 3584 3161 3123 Q 3591 2663 3591 1825 L 3591 1453 L 1219 1453 Q 1222 1041 1462 837 Q 1703 634 2181 634 Q 2497 634 2803 725 Q 3109 816 3444 1013 L 3444 172 z M 2669 2141 Q 2663 2503 2483 2689 Q 2303 2875 1953 2875 Q 1638 2875 1450 2683 Q 1263 2491 1228 2138 L 2669 2141 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-48"/> </g> </g> <g id="feb0a76-text_15"> <!-- 8 --> <g style="fill: var(--fig-axis)" transform="translate(267.714 232.759773) scale(0.095 -0.095)"> <use xlink:href="#feb0a76-DejaVuSerif-Italic-1b"/> </g> </g> <g id="feb0a76-text_16"> <!-- 2 --> <g style="fill: var(--fig-ink)" transform="translate(311.106734 237.480016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-15" d="M 1356 813 L 3322 813 L 3322 0 L 359 0 L 359 788 L 859 1319 Q 1750 2266 1941 2484 Q 2175 2753 2278 2961 Q 2381 3169 2381 3372 Q 2381 3684 2192 3854 Q 2003 4025 1656 4025 Q 1409 4025 1101 3926 Q 794 3828 459 3641 L 459 4500 Q 794 4622 1114 4686 Q 1434 4750 1728 4750 Q 2469 4750 2892 4404 Q 3316 4059 3316 3463 Q 3316 3188 3223 2947 Q 3131 2706 2906 2413 Q 2741 2200 1997 1456 Q 1594 1053 1356 813 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-15"/> </g> </g> <g id="feb0a76-text_17"> <!-- c --> <g style="fill: var(--fig-ink)" transform="translate(139.242734 301.236016) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-46" d="M 3316 178 Q 3084 44 2818 -23 Q 2553 -91 2247 -91 Q 1438 -91 981 396 Q 525 884 525 1747 Q 525 2613 984 3102 Q 1444 3591 2253 3591 Q 2534 3591 2795 3525 Q 3056 3459 3316 3322 L 3316 2484 Q 3116 2656 2877 2748 Q 2638 2841 2381 2841 Q 1934 2841 1693 2556 Q 1453 2272 1453 1747 Q 1453 1222 1693 940 Q 1934 659 2381 659 Q 2647 659 2878 748 Q 3109 838 3316 1019 L 3316 178 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-46"/> </g> </g> <g id="feb0a76-text_18"> <!-- 2 --> <g style="fill: var(--fig-axis)" transform="translate(156.834 296.515773) scale(0.095 -0.095)"> <use xlink:href="#feb0a76-DejaVuSerif-Italic-15"/> </g> </g> <g id="feb0a76-text_19"> <!-- d --> <g style="fill: var(--fig-ink)" transform="translate(200.226734 301.23668) scale(0.17 -0.17)"> <defs> <path id="feb0a76-DejaVuSansMono-Bold-47" d="M 2472 3003 L 2472 4863 L 3384 4863 L 3384 0 L 2472 0 L 2472 519 Q 2325 216 2092 62 Q 1859 -91 1544 -91 Q 944 -91 612 390 Q 281 872 281 1747 Q 281 2634 617 3109 Q 953 3584 1575 3584 Q 1856 3584 2079 3439 Q 2303 3294 2472 3003 z M 1197 1741 Q 1197 1234 1365 946 Q 1534 659 1831 659 Q 2128 659 2300 946 Q 2472 1234 2472 1741 Q 2472 2247 2300 2534 Q 2128 2822 1831 2822 Q 1534 2822 1365 2534 Q 1197 2247 1197 1741 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-Bold-47"/> </g> </g> <g id="feb0a76-text_20"> <!-- 3 --> <g style="fill: var(--fig-axis)" transform="translate(217.818 296.515773) scale(0.095 -0.095)"> <use xlink:href="#feb0a76-DejaVuSerif-Italic-16"/> </g> </g> <g id="feb0a76-text_21"> <!-- a = b + c * d - e / 2; --> <g style="fill: var(--fig-ink)" transform="translate(242.604437 30.793852) scale(0.11 -0.11)"> <defs> <path id="feb0a76-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-3" transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-20" d="M 275 1638 L 3578 1638 L 3578 1100 L 275 1100 L 275 1638 z M 275 2906 L 3578 2906 L 3578 2375 L 275 2375 L 275 2906 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-45" d="M 2869 1747 Q 2869 2416 2656 2756 Q 2444 3097 2028 3097 Q 1609 3097 1393 2755 Q 1178 2413 1178 1747 Q 1178 1084 1393 740 Q 1609 397 2028 397 Q 2444 397 2656 737 Q 2869 1078 2869 1747 z M 1178 3053 Q 1316 3309 1558 3446 Q 1800 3584 2119 3584 Q 2750 3584 3112 3098 Q 3475 2613 3475 1759 Q 3475 894 3111 401 Q 2747 -91 2113 -91 Q 1800 -91 1561 45 Q 1322 181 1178 441 L 1178 0 L 603 0 L 603 4863 L 1178 4863 L 1178 3053 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-e" d="M 2188 3659 L 2188 2272 L 3578 2272 L 3578 1741 L 2188 1741 L 2188 353 L 1663 353 L 1663 1741 L 275 1741 L 275 2272 L 1663 2272 L 1663 3659 L 2188 3659 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-46" d="M 3316 178 Q 3084 44 2839 -23 Q 2594 -91 2338 -91 Q 1525 -91 1067 396 Q 609 884 609 1747 Q 609 2609 1067 3096 Q 1525 3584 2338 3584 Q 2591 3584 2831 3518 Q 3072 3453 3316 3316 L 3316 2713 Q 3088 2916 2858 3006 Q 2628 3097 2338 3097 Q 1797 3097 1506 2747 Q 1216 2397 1216 1747 Q 1216 1100 1508 748 Q 1800 397 2338 397 Q 2638 397 2875 489 Q 3113 581 3316 775 L 3316 178 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-d" d="M 3334 3897 L 2216 3291 L 3334 2681 L 3156 2375 L 2106 3009 L 2106 1831 L 1747 1831 L 1747 3009 L 697 2375 L 519 2681 L 1638 3291 L 519 3897 L 697 4206 L 1747 3572 L 1747 4750 L 2106 4750 L 2106 3572 L 3156 4206 L 3334 3897 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-47" d="M 2681 3053 L 2681 4863 L 3256 4863 L 3256 0 L 2681 0 L 2681 441 Q 2538 181 2298 45 Q 2059 -91 1747 -91 Q 1113 -91 748 401 Q 384 894 384 1759 Q 384 2613 750 3098 Q 1116 3584 1747 3584 Q 2063 3584 2303 3448 Q 2544 3313 2681 3053 z M 991 1747 Q 991 1078 1203 737 Q 1416 397 1831 397 Q 2247 397 2464 740 Q 2681 1084 2681 1747 Q 2681 2413 2464 2755 Q 2247 3097 1831 3097 Q 1416 3097 1203 2756 Q 991 2416 991 1747 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-10" d="M 1113 2009 L 2741 2009 L 2741 1497 L 1113 1497 L 1113 2009 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-48" d="M 3475 1894 L 3475 1613 L 984 1613 L 984 1594 Q 984 1022 1282 709 Q 1581 397 2125 397 Q 2400 397 2700 484 Q 3000 572 3341 750 L 3341 178 Q 3013 44 2708 -23 Q 2403 -91 2119 -91 Q 1303 -91 843 398 Q 384 888 384 1747 Q 384 2584 834 3084 Q 1284 3584 2034 3584 Q 2703 3584 3089 3131 Q 3475 2678 3475 1894 z M 2900 2063 Q 2888 2569 2661 2833 Q 2434 3097 2009 3097 Q 1594 3097 1325 2822 Q 1056 2547 1006 2059 L 2900 2063 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-12" d="M 2778 4666 L 3372 4666 L 916 -594 L 319 -594 L 2778 4666 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSansMono-1e" d="M 1569 947 L 2356 947 L 2356 300 L 1741 -897 L 1259 -897 L 1569 300 L 1569 947 z M 1528 3322 L 2316 3322 L 2316 2375 L 1528 2375 L 1528 3322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSansMono-44"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-45" transform="translate(240.8125 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-e" transform="translate(361.21875 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-46" transform="translate(481.625 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(541.828125 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-d" transform="translate(602.03125 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(662.234375 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-47" transform="translate(722.4375 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(782.640625 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-10" transform="translate(842.84375 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(903.046875 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-48" transform="translate(963.25 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(1023.453125 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-12" transform="translate(1083.65625 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-3" transform="translate(1143.859375 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-15" transform="translate(1204.0625 0)"/> <use xlink:href="#feb0a76-DejaVuSansMono-1e" transform="translate(1264.265625 0)"/> </g> </g> <g id="feb0a76-text_22"> <!-- b = 1, c = 2, d = 3, e = 8 --> <g style="fill: var(--fig-axis)" transform="translate(260.511625 52.710047) scale(0.1 -0.1)"> <defs> <path id="feb0a76-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-f" d="M 125 -622 Q 463 -406 656 -114 Q 850 178 931 594 L 953 709 L 1569 709 Q 1441 175 1139 -208 Q 838 -591 328 -872 L 125 -622 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="feb0a76-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feb0a76-DejaVuSerif-Italic-45"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(64.015625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(95.796875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(179.59375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-14" transform="translate(211.375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-f" transform="translate(275 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(306.78125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-46" transform="translate(338.5625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(394.5625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(426.34375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(510.140625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-15" transform="translate(541.921875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-f" transform="translate(605.546875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(637.328125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-47" transform="translate(669.109375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(733.125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(764.90625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(848.703125 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-16" transform="translate(880.484375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-f" transform="translate(944.109375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(975.890625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-48" transform="translate(1007.671875 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(1066.859375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-20" transform="translate(1098.640625 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-3" transform="translate(1182.4375 0)"/> <use xlink:href="#feb0a76-DejaVuSerif-Italic-1b" transform="translate(1214.21875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="feb0a76-pd2ab562507"> <rect x="5.76" y="5.76" width="388.08" height="310.464"/> </clipPath> </defs> </svg></figure>
>
> Dal basso:
>
> ```
> c * d          2 * 3  =  6
> b + c * d      1 + 6  =  7
> e / 2          8 / 2  =  4
> ... - ...      7 - 4  =  3
> a = ...        a vale 3
> ```
>
> Verificato: stampa 3.

**Esercizio 3.** Quali righe danno errore di compilazione, e perché?

```
const int max = 10;
int n = 3;
n = max + 1;        (1)
max = n;            (2)
max++;              (3)
const int m;        (4)
```

> [!example]- Soluzione
> Si riconosce: domanda su `const`. Per ogni riga si guarda se **scrive** una variabile `const`.
> - (1) va bene: si legge `max` (leggere una costante è permesso), si scrive `n`.
> - (2) errore: `max` è `const`, gcc dice `assignment of read-only variable 'max'`.
> - (3) errore: anche `++` è una scrittura (`max = max + 1`), gcc dice `increment of read-only variable 'max'`.
> - (4) compila, senza nemmeno un warning, ma `m` resta senza valore per sempre: una costante va inizializzata nella dichiarazione, dopo non si può più. In C++ è un errore. È codice sbagliato anche se passa.
>
> Verificato con gcc 16, `-std=c11 -Wall -Wextra`.

**Esercizio 4.** Scrivi l'output esatto.

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
> Si riconosce: aritmetica sui caratteri. Si lavora sui codici e alla fine si guarda se la `printf` usa `%c` o `%d`.
>
> | variabile | conto | valore | come carattere |
> | --- | --- | --- | --- |
> | `c` | | 100 | `d` |
> | `d` | $100 - 97$ | 3 | |
> | `e` | $100 + 2$ | 102 | `f` |
> | `f` | $98 - 97 + 65$ | 66 | `B` |
>
> La d è la quarta lettera, quindi dista 3 dalla a. `'b' - 'a' + 'A'` è la formula minuscola-maiuscola applicata alla b. L'ultimo `%d` stampa il codice di `e`, non il carattere.
>
> Output: `3 f B 102` (verificato).

**Esercizio 5.** Scrivi l'output esatto.

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
> Si riconosce: tracing con incrementi e assegnazioni composte. Tabella, una riga per istruzione, composte riscritte in forma estesa.
>
> | istruzione | forma estesa | `i` | `j` | `k` | conto |
> | --- | --- | --- | --- | --- | --- |
> | iniziale | | 3 | 2 | ? | |
> | `k = i++ * 2 + --j;` | | 4 | 1 | 7 | `i++` vale 3, `--j` vale 1: $3 \cdot 2 + 1 = 7$ |
> | `j += k-- - i;` | `j = j + (k-- - i)` | 4 | 4 | 6 | `k--` vale 7, `i` è 4: $7 - 4 = 3$, $1 + 3 = 4$ |
> | `i *= j - 2;` | `i = i * (j - 2)` | 8 | 4 | 6 | $4 \cdot (4 - 2) = 8$ |
>
> Nella seconda riga `i` vale già 4: l'incremento della riga prima è avvenuto. `k` passa a 6 dopo aver dato 7 al conto.
>
> Output: `8 4 6` (verificato).

**Esercizio 6.** Scrivi l'output esatto.

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
> Si riconosce: `&&` e `||` con un `++` a destra. Per ogni riga la domanda è "la destra si valuta?".
>
> | variabile | sinistra | destra valutata? | valore | `b` dopo |
> | --- | --- | --- | --- | --- |
> | `r` | `0 > 0` è 0 | no, `&&` con sinistra falsa | 0 | 5 |
> | `s` | `0 == 0` è 1 | no, `\|\|` con sinistra vera | 1 | 5 |
> | `t` | `0 == 0` è 1 | sì: `b++ > 4` confronta 5 con 4, vero | 1 | 6 |
>
> In `t` il confronto usa il valore prima dell'incremento (5), poi `b` diventa 6.
>
> Output: `0 1 1 6` (verificato).

**Esercizio 7.** Scrivi l'output esatto.

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
> Si riconosce: cifre di un numero più incrementi. Prima le cifre, poi la tabella.
>
> ```
> a = 247 % 10          = 7
> b = 247 / 10 % 10     = 24 % 10 = 4
> c = 247 / 100         = 2
> ```
>
> | istruzione | `a` | `b` | `c` | `x` | conto |
> | --- | --- | --- | --- | --- | --- |
> | dopo le cifre | 7 | 4 | 2 | ? | |
> | `x = a++ + --b` | 8 | 3 | 2 | 10 | `a++` vale 7, `--b` vale 3: $7 + 3$ |
> | `x += a * b % 5;` | 8 | 3 | 2 | 14 | `*` e `%` da sinistra: $(8 \cdot 3) \% 5 = 24 \% 5 = 4$, $10 + 4$ |
>
> Output: `8 3 2 14` (verificato).

**Esercizio 8.** Trova gli errori. Per ogni riga numerata di' cosa succede (errore di compilazione, warning, valore inatteso) e come si corregge.

```
int a = 7;
int b = 2;
double media = (a + b) / 2;     (1) si vuole 4.5
int dentro = 3 < a < 5;         (2) si vuole sapere se a è fra 3 e 5
char c = "z";                   (3)
const int max = 10;
max += 1;                       (4)
int r = a % 0;                  (5)
int s = 7.5 % 2;                (6)
```

> [!example]- Soluzione
> Si riconosce: "trova l'errore". Per ogni riga si controllano tipi degli operandi, precedenze, `const`, apici.
> - (1) compila senza warning ma vale `4.0`: `(a + b) / 2` è $9 / 2$ fra interi, cioè 4, poi convertito in `double`. Si corregge con `(a + b) / 2.0`.
> - (2) vale 1 anche se $a = 7$: `(3 < 7) < 5` è `1 < 5`, cioè 1. gcc avvisa due volte (`-Wparentheses` e `-Wbool-compare`). Si scrive `3 < a && a < 5`, che vale 0.
> - (3) errore con gcc 16: `"z"` è una stringa, non un carattere. Si scrive `char c = 'z';`.
> - (4) errore: `assignment of read-only variable 'max'`, perché `max += 1` è `max = max + 1`.
> - (5) warning `division by zero`, e a run-time comportamento indefinito. Il divisore di `%` non può essere 0.
> - (6) errore: `invalid operands to binary %`. `%` vuole due interi.
>
> Tutti i messaggi sono quelli di gcc 16 con `-std=c11 -Wall -Wextra -Wpedantic`.

**Esercizio 9.** Scrivi un programma che legge un numero di tre cifre e stampa la somma delle cifre e il numero rovesciato (da 527: somma 14, rovesciato 725). Niente cicli.

> [!example]- Soluzione
> Si riconosce: cifre di un numero, quindi `/` e `%` per 10. Con tre cifre bastano tre espressioni: centinaia `n / 100`, decine `n / 10 % 10`, unità `n % 10`. Il rovesciato si ricompone pesando le cifre al contrario: unità per 100, decine per 10, centinaia per 1.
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int c;
>     int d;
>     int u;
>
>     printf("Numero di tre cifre ?\n");
>     scanf("%d", &n);
>     c = n / 100;
>     d = n / 10 % 10;
>     u = n % 10;
>     printf("somma cifre = %d\n", c + d + u);
>     printf("rovesciato = %d\n", u * 100 + d * 10 + c);
>     return 0;
> }
> ```
>
> Con input `527`: $c = 5$, $d = 52 \% 10 = 2$, $u = 7$; somma $5 + 2 + 7 = 14$; rovesciato $7 \cdot 100 + 2 \cdot 10 + 5 = 725$.
>
> ```
> Numero di tre cifre ?
> somma cifre = 14
> rovesciato = 725
> ```
>
> Controllo su un caso limite, input `120`: somma 3, rovesciato $0 \cdot 100 + 2 \cdot 10 + 1 = 21$. È giusto: "021" come intero è 21, lo zero davanti non si stampa. Verificati entrambi.

**Esercizio 10.** Scrivi un programma che legge una lettera minuscola e stampa la sua maiuscola e la sua posizione nell'alfabeto (da `g`: `G e' la lettera numero 7`).

> [!example]- Soluzione
> Si riconosce: aritmetica ASCII. `c - 'a'` è la posizione contando da 0 (a è 0, g è 6), quindi la posizione "umana" è `c - 'a' + 1`; la maiuscola è la stessa posizione partendo da `'A'`.
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     char c;
>
>     printf("Lettera minuscola ?\n");
>     scanf(" %c", &c);
>     printf("%c e' la lettera numero %d\n", c - 'a' + 'A', c - 'a' + 1);
>     return 0;
> }
> ```
>
> Con input `g`: `c - 'a'` è $103 - 97 = 6$; maiuscola $6 + 65 = 71$, cioè `G`; posizione $6 + 1 = 7$.
>
> ```
> Lettera minuscola ?
> G e' la lettera numero 7
> ```
>
> Lo spazio in `" %c"` salta eventuali spazi o a capo prima della lettera. Verificato.

**Esercizio 11.** Vero o falso?

```
a) 5 / 2 e 5 / 2.0 hanno lo stesso valore.
b) x++; e ++x; scritti da soli come istruzioni hanno lo stesso effetto.
c) Con a che vale 3, dopo r = a || b++; la variabile b non è cambiata.
d) '5' - '0' vale 5.
e) "a" e 'a' sono lo stesso oggetto.
f) const int k; seguito da k = 4; compila.
g) x *= 2 + 1 triplica x.
h) -7 % 3 vale 2.
```

> [!example]- Soluzione
> - a) **Falso**: `5 / 2` è 2 (fra interi), `5 / 2.0` è 2.5.
> - b) **Vero**: il valore dell'espressione si butta via, resta solo l'effetto, che è lo stesso.
> - c) **Vero**: `a` è 3, quindi vero, e `||` non valuta la destra.
> - d) **Vero**: $53 - 48 = 5$.
> - e) **Falso**: `'a'` è un carattere (il numero 97), `"a"` è una stringa.
> - f) **Falso**: `k` è `const`, l'assegnazione è un errore di compilazione.
> - g) **Vero**: è `x = x * (2 + 1)`. Con $x = 5$ dà 15.
> - h) **Falso**: la divisione tronca verso zero, $-7 / 3 = -2$, resto $-7 - (-2) \cdot 3 = -1$. Il resto ha il segno del dividendo.
>
> a, c, d, g, h verificati con un programma; f con gcc.

**Esercizio 12.** (Livello 30) Una matricola fittizia, 238471. Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int m = 238471;
    int a = m % 10;
    int b = m / 100 % 10;
    int c = m / 10000;
    int x;
    int y;
    char ch;

    x = c % 7 * 2 + a--;
    y = a != 0 && ++b > 4;
    y += x / b * b + x % b;
    ch = 'A' + c % 26;
    x *= y - 3;
    printf("%d %d %d %d %c %d\n", a, b, x, y, ch, ch - 'A' + 1);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce: tracing con la matricola che mescola tutto (cifre, precedenze, post-decremento, lazy evaluation, caratteri). Prima le cifre, poi una riga per istruzione.
>
> ```
> a = 238471 % 10            = 1
> b = 238471 / 100 % 10      = 2384 % 10 = 4
> c = 238471 / 10000         = 23
> ```
>
> | istruzione | `a` | `b` | `c` | `x` | `y` | `ch` | conto |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | dopo le cifre | 1 | 4 | 23 | ? | ? | ? | |
> | `x = c % 7 * 2 + a--;` | 0 | 4 | 23 | 5 | ? | ? | `%` e `*` da sinistra: $(23 \% 7) \cdot 2 = 2 \cdot 2 = 4$; `a--` vale 1; $4 + 1 = 5$ |
> | `y = a != 0 && ++b > 4;` | 0 | 4 | 23 | 5 | 0 | ? | `a != 0` è `0 != 0`, falso: `&&` si ferma, `++b` **non** avviene |
> | `y += x / b * b + x % b;` | 0 | 4 | 23 | 5 | 5 | ? | $(5 / 4) \cdot 4 + 5 \% 4 = 4 + 1 = 5$; $0 + 5$ |
> | `ch = 'A' + c % 26;` | 0 | 4 | 23 | 5 | 5 | `X` | $23 \% 26 = 23$; $65 + 23 = 88$, la `X` |
> | `x *= y - 3;` | 0 | 4 | 23 | 10 | 5 | `X` | $5 \cdot (5 - 3) = 10$ |
>
> Le trappole: nella seconda riga `a` vale già 0 per il `a--` di prima, quindi la destra di `&&` non si valuta e `b` resta 4. Nella terza `x / b * b + x % b` è l'identità del resto: vale `x`, cioè 5, qualunque sia `b`. Nell'ultimo `%d`, `ch - 'A' + 1` è $23 + 1 = 24$: la X è la ventiquattresima lettera.
>
> Output: `0 4 10 5 X 24` (verificato).

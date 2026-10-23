---
title: Input e output di caratteri
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
ordine: 7
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a settembre, deck 3.2: <span class="src">slide 58-68</span>. Usa il `while` di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/) e i codici ASCII di [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cosa fanno `getchar` e `putchar`, cos'è `EOF` e dove è definito, perché la variabile che riceve `getchar` è `int` e non `char`, perché servono le parentesi in `(c = getchar()) != EOF`, cos'è il buffer dello standard input.
> - **Saper fare**: scrivere il ciclo "leggi tutto fino a EOF"; contare caratteri, righe, cifre, parole; trasformare caratteri con l'aritmetica ASCII; tracciare cosa stampa un programma dato un input, carattere per carattere, compresi spazi e a capo.
> - **Dove esce**: nella teorica come tracing su un input dato e nelle batterie SI/NO su `.eof()` e file (vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore si leggono stringhe da tastiera, e il problema del buffer della tastiera è lo stesso.

Il filo del deck:

```
stdin, stdout        sequenze di caratteri, buffer del SO in mezzo   slide 58-59
    |
getchar, putchar     un carattere alla volta, c è int                slide 60
    |
copia K caratteri    while (K--) gira K volte                         slide 61-62
    |
copia fino a EOF     pseudocodice, poi codice con EOF                 slide 63-64
    |
forma compatta       while ((c = getchar()) != EOF), in due passi     slide 65-66
    |
conta i caratteri    contatore dentro il ciclo di lettura             slide 67-68
```

## Definizioni

**Standard input e output a caratteri** (<span class="src">slide 59</span>). `getchar` e `putchar` sono "funzioni utili per elaborazioni di caratteri in uscita ed ingresso" sullo standard input (di solito la tastiera) e sullo standard output (di solito lo schermo). Si possono vedere come sequenze di caratteri, uno dopo l'altro. Nel disegno della slide, fra la tastiera e lo schermo e la memoria ci sono due **buffer** gestiti dal sistema operativo: i caratteri digitati si accumulano lì, e di solito arrivano al programma solo quando premi Invio. Per questo un programma che legge un carattere alla volta sembra "aspettare" la fine della riga.

<figure class="fig"><svg role="img" aria-label="Buffer di getchar" xmlns:xlink="http://www.w3.org/1999/xlink" width="565.92pt" height="222.192pt" viewBox="0 0 565.92 222.192" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fe585a4-figure_1"> <g id="fe585a4-patch_1"> <path d="M 0 222.192 L 565.92 222.192 L 565.92 0 L 0 0 L 0 222.192 z " style="fill: none"/> </g> <g id="fe585a4-axes_1"> <g id="fe585a4-patch_2"> <path d="M 14.6304 127.728 L 91.1376 127.728 Q 94.464 127.728 94.464 124.4016 L 94.464 86.7024 Q 94.464 83.376 91.1376 83.376 L 14.6304 83.376 Q 11.304 83.376 11.304 86.7024 L 11.304 124.4016 Q 11.304 127.728 14.6304 127.728 L 14.6304 127.728 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fe585a4-patch_3"> <path d="M 130.5 124.956 L 172.08 124.956 L 172.08 86.148 L 130.5 86.148 L 130.5 124.956 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fe585a4-patch_4"> <path d="M 172.08 124.956 L 213.66 124.956 L 213.66 86.148 L 172.08 86.148 L 172.08 124.956 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fe585a4-patch_5"> <path d="M 213.66 124.956 L 255.24 124.956 L 255.24 86.148 L 213.66 86.148 L 213.66 124.956 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fe585a4-patch_6"> <path d="M 255.24 124.956 L 296.82 124.956 L 296.82 86.148 L 255.24 86.148 L 255.24 124.956 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fe585a4-patch_7"> <path d="M 296.82 124.956 L 338.4 124.956 L 338.4 86.148 L 296.82 86.148 L 296.82 124.956 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fe585a4-patch_8"> <path d="M 338.4 124.956 L 396.612 124.956 L 396.612 86.148 L 338.4 86.148 L 338.4 124.956 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fe585a4-patch_9"> <path d="M 452.6064 127.728 L 545.7456 127.728 Q 549.072 127.728 549.072 124.4016 L 549.072 86.7024 Q 549.072 83.376 545.7456 83.376 L 452.6064 83.376 Q 449.28 83.376 449.28 86.7024 L 449.28 124.4016 Q 449.28 127.728 452.6064 127.728 L 452.6064 127.728 z " clip-path="url(#fe585a4-p28c8ba486d)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fe585a4-text_1"> <!-- tastiera --> <g style="fill: var(--fig-axis)" transform="translate(31.439156 108.409422) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSerif-57"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(40.1875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-56" transform="translate(99.8125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(151.125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4c" transform="translate(191.3125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(223.296875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(282.484375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(330.28125 0)"/> </g> </g> <g id="fe585a4-patch_10"> <path d="M 97.236 105.552 Q 112.482 105.552 125.491932 105.552 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 121.491932 103.552 L 125.491932 105.552 L 121.491932 107.552 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="fe585a4-text_2"> <!-- 'c' --> <g style="fill: var(--fig-steel)" transform="translate(141.356484 108.409422) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSansMono-a" d="M 2194 4666 L 2194 2931 L 1650 2931 L 1650 4666 L 2194 4666 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-46" d="M 3316 178 Q 3084 44 2839 -23 Q 2594 -91 2338 -91 Q 1525 -91 1067 396 Q 609 884 609 1747 Q 609 2609 1067 3096 Q 1525 3584 2338 3584 Q 2591 3584 2831 3518 Q 3072 3453 3316 3316 L 3316 2713 Q 3088 2916 2858 3006 Q 2628 3097 2338 3097 Q 1797 3097 1506 2747 Q 1216 2397 1216 1747 Q 1216 1100 1508 748 Q 1800 397 2338 397 Q 2638 397 2875 489 Q 3113 581 3316 775 L 3316 178 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSansMono-a"/> <use xlink:href="#fe585a4-DejaVuSansMono-46" transform="translate(60.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="fe585a4-text_3"> <!-- 'i' --> <g style="fill: var(--fig-steel)" transform="translate(182.936484 108.409852) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSansMono-a"/> <use xlink:href="#fe585a4-DejaVuSansMono-4c" transform="translate(60.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="fe585a4-text_4"> <!-- 'a' --> <g style="fill: var(--fig-steel)" transform="translate(224.516484 108.409422) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSansMono-a"/> <use xlink:href="#fe585a4-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="fe585a4-text_5"> <!-- 'o' --> <g style="fill: var(--fig-steel)" transform="translate(266.096484 108.409422) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSansMono-a"/> <use xlink:href="#fe585a4-DejaVuSansMono-52" transform="translate(60.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="fe585a4-text_6"> <!-- '\n' --> <g style="fill: var(--fig-accent)" transform="translate(304.365312 108.409422) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSansMono-3f" d="M 916 4666 L 3372 -594 L 2778 -594 L 319 4666 L 916 4666 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-51" d="M 3284 2169 L 3284 0 L 2706 0 L 2706 2169 Q 2706 2641 2540 2862 Q 2375 3084 2022 3084 Q 1619 3084 1401 2798 Q 1184 2513 1184 1978 L 1184 0 L 609 0 L 609 3500 L 1184 3500 L 1184 2975 Q 1338 3275 1600 3429 Q 1863 3584 2222 3584 Q 2756 3584 3020 3232 Q 3284 2881 3284 2169 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSansMono-a"/> <use xlink:href="#fe585a4-DejaVuSansMono-3f" transform="translate(60.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-51" transform="translate(120.40625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-a" transform="translate(180.609375 0)"/> </g> </g> <g id="fe585a4-text_7"> <!-- EOF --> <g style="fill: var(--fig-faint)" transform="translate(357.572484 108.409422) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSansMono-28" d="M 616 4666 L 3384 4666 L 3384 4134 L 1247 4134 L 1247 2753 L 3291 2753 L 3291 2222 L 1247 2222 L 1247 531 L 3444 531 L 3444 0 L 616 0 L 616 4666 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-32" d="M 2828 2328 Q 2828 3356 2617 3797 Q 2406 4238 1925 4238 Q 1447 4238 1236 3797 Q 1025 3356 1025 2328 Q 1025 1303 1236 862 Q 1447 422 1925 422 Q 2406 422 2617 861 Q 2828 1300 2828 2328 z M 3488 2328 Q 3488 1109 3102 509 Q 2716 -91 1925 -91 Q 1134 -91 750 506 Q 366 1103 366 2328 Q 366 3550 752 4150 Q 1138 4750 1925 4750 Q 2716 4750 3102 4150 Q 3488 3550 3488 2328 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-29" d="M 728 4666 L 3475 4666 L 3475 4134 L 1363 4134 L 1363 2759 L 3278 2759 L 3278 2228 L 1363 2228 L 1363 0 L 728 0 L 728 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSansMono-28"/> <use xlink:href="#fe585a4-DejaVuSansMono-32" transform="translate(60.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-29" transform="translate(120.40625 0)"/> </g> </g> <g id="fe585a4-text_8"> <!-- buffer del sistema operativo --> <g style="fill: var(--fig-steel)" transform="translate(159.630937 66.744) scale(0.105 -0.105)"> <defs> <path id="fe585a4-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-cef" d="M 2963 2984 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1068 4578 Q 1356 4863 1919 4863 Q 2125 4863 2334 4825 Q 2544 4788 2750 4709 L 2750 4078 L 2450 4078 Q 2444 4313 2316 4434 Q 2188 4556 1938 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2963 3322 L 2963 3734 Q 2963 4291 3250 4575 Q 3538 4859 4100 4859 Q 4306 4859 4515 4821 Q 4725 4784 4931 4706 L 4931 4075 L 4631 4075 Q 4625 4309 4497 4431 Q 4369 4553 4119 4553 Q 3800 4553 3669 4376 Q 3538 4200 3538 3747 L 3538 3319 L 4463 3319 L 4463 2984 L 3538 2984 L 3538 328 L 4275 328 L 4275 -3 L 2413 -3 L 2413 328 L 2963 328 L 2963 2984 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSerif-45"/> <use xlink:href="#fe585a4-DejaVuSerif-58" transform="translate(64.015625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-cef" transform="translate(128.421875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(199.46875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(258.65625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(306.453125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-47" transform="translate(338.234375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(402.25 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(461.4375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(493.421875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-56" transform="translate(525.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4c" transform="translate(576.515625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-56" transform="translate(608.5 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(659.8125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(700 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-50" transform="translate(759.1875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(854.015625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(913.640625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(945.421875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-53" transform="translate(1005.625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(1069.640625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(1128.828125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(1176.625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(1236.25 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4c" transform="translate(1276.4375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-59" transform="translate(1308.421875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(1364.921875 0)"/> </g> </g> <g id="fe585a4-text_9"> <!-- Invio: la riga --> <g style="fill: var(--fig-accent)" transform="translate(286.978437 152.529443) scale(0.095 -0.095)"> <defs> <path id="fe585a4-DejaVuSerif-2c" d="M 1581 331 L 2175 331 L 2175 0 L 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 2175 4666 L 2175 4331 L 1581 4331 L 1581 331 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSerif-2c"/> <use xlink:href="#fe585a4-DejaVuSerif-51" transform="translate(39.5 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-59" transform="translate(103.90625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4c" transform="translate(160.40625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(192.390625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-1d" transform="translate(252.59375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(286.28125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(318.0625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(350.046875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(409.671875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(441.453125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4c" transform="translate(489.25 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4a" transform="translate(521.234375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(585.25 0)"/> </g> <!-- passa al programma --> <g style="fill: var(--fig-accent)" transform="translate(268.504648 163.932041) scale(0.095 -0.095)"> <use xlink:href="#fe585a4-DejaVuSerif-53"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(64.015625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-56" transform="translate(123.640625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-56" transform="translate(174.953125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(226.265625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(285.890625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(317.671875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(377.296875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(409.28125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-53" transform="translate(441.0625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(505.078125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(552.875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4a" transform="translate(613.078125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(677.09375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(724.890625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-50" transform="translate(784.515625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-50" transform="translate(879.34375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(974.171875 0)"/> </g> </g> <g id="fe585a4-text_10"> <!-- Ctrl+D o --> <g style="fill: var(--fig-axis)" transform="translate(346.015219 63.196248) scale(0.095 -0.095)"> <defs> <path id="fe585a4-DejaVuSerif-26" d="M 4513 1234 Q 4306 581 3820 245 Q 3334 -91 2591 -91 Q 2134 -91 1743 65 Q 1353 222 1050 525 Q 700 875 529 1320 Q 359 1766 359 2328 Q 359 3416 987 4083 Q 1616 4750 2644 4750 Q 3025 4750 3456 4650 Q 3888 4550 4384 4347 L 4384 3272 L 4031 3272 Q 3916 3859 3567 4137 Q 3219 4416 2591 4416 Q 1844 4416 1459 3886 Q 1075 3356 1075 2328 Q 1075 1303 1459 773 Q 1844 244 2591 244 Q 3113 244 3450 492 Q 3788 741 3938 1234 L 4513 1234 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-27" d="M 1581 331 L 2163 331 Q 3072 331 3558 850 Q 4044 1369 4044 2338 Q 4044 3306 3559 3818 Q 3075 4331 2163 4331 L 1581 4331 L 1581 331 z M 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 2209 4666 Q 3416 4666 4089 4050 Q 4763 3434 4763 2338 Q 4763 1238 4088 619 Q 3413 0 2209 0 L 353 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSerif-26"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(76.515625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(116.703125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(164.5 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-e" transform="translate(196.484375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-27" transform="translate(280.28125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(360.453125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(392.234375 0)"/> </g> <!-- fine file --> <g style="fill: var(--fig-axis)" transform="translate(349.458227 74.598846) scale(0.095 -0.095)"> <defs> <path id="fe585a4-DejaVuSerif-cf0" d="M 3347 4019 L 3053 4022 Q 3044 4291 2853 4423 Q 2663 4556 2278 4556 Q 1800 4556 1578 4334 Q 1356 4113 1356 3634 L 1356 3322 L 3578 3322 L 3578 331 L 4122 331 L 4122 0 L 2450 0 L 2450 331 L 3003 331 L 3003 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4238 1147 4550 Q 1513 4863 2228 4863 Q 2500 4863 2784 4822 Q 3069 4781 3347 4697 L 3347 4019 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSerif-cf0"/> <use xlink:href="#fe585a4-DejaVuSerif-51" transform="translate(66.703125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(131.109375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(190.296875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-cf0" transform="translate(222.078125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(288.78125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(320.765625 0)"/> </g> </g> <g id="fe585a4-patch_11"> <path d="M 151.29 127.728 Q 151.29 149.904 151.29 169.843932 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 153.29 165.843932 L 151.29 169.843932 L 149.29 165.843932 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="fe585a4-text_11"> <!-- c = getchar(); prende il primo e lo toglie dal buffer --> <g style="fill: var(--fig-ink)" transform="translate(159.606 188.712) scale(0.105 -0.105)"> <defs> <path id="fe585a4-DejaVuSansMono-3" transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-20" d="M 275 1638 L 3578 1638 L 3578 1100 L 275 1100 L 275 1638 z M 275 2906 L 3578 2906 L 3578 2375 L 275 2375 L 275 2906 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-4a" d="M 2681 1778 Q 2681 2425 2470 2761 Q 2259 3097 1856 3097 Q 1434 3097 1212 2761 Q 991 2425 991 1778 Q 991 1131 1214 792 Q 1438 453 1863 453 Q 2259 453 2470 793 Q 2681 1134 2681 1778 z M 3256 225 Q 3256 -563 2884 -969 Q 2513 -1375 1791 -1375 Q 1553 -1375 1293 -1331 Q 1034 -1288 775 -1203 L 775 -634 Q 1081 -778 1331 -847 Q 1581 -916 1791 -916 Q 2256 -916 2468 -662 Q 2681 -409 2681 141 L 2681 166 L 2681 556 Q 2544 263 2306 119 Q 2069 -25 1728 -25 Q 1116 -25 750 465 Q 384 956 384 1778 Q 384 2603 750 3093 Q 1116 3584 1728 3584 Q 2066 3584 2300 3450 Q 2534 3316 2681 3034 L 2681 3488 L 3256 3488 L 3256 225 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-48" d="M 3475 1894 L 3475 1613 L 984 1613 L 984 1594 Q 984 1022 1282 709 Q 1581 397 2125 397 Q 2400 397 2700 484 Q 3000 572 3341 750 L 3341 178 Q 3013 44 2708 -23 Q 2403 -91 2119 -91 Q 1303 -91 843 398 Q 384 888 384 1747 Q 384 2584 834 3084 Q 1284 3584 2034 3584 Q 2703 3584 3089 3131 Q 3475 2678 3475 1894 z M 2900 2063 Q 2888 2569 2661 2833 Q 2434 3097 2009 3097 Q 1594 3097 1325 2822 Q 1056 2547 1006 2059 L 2900 2063 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-57" d="M 1919 4494 L 1919 3500 L 3225 3500 L 3225 3053 L 1919 3053 L 1919 1153 Q 1919 766 2066 612 Q 2213 459 2578 459 L 3225 459 L 3225 0 L 2522 0 Q 1875 0 1609 259 Q 1344 519 1344 1153 L 1344 3053 L 409 3053 L 409 3500 L 1344 3500 L 1344 4494 L 1919 4494 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-4b" d="M 3284 2169 L 3284 0 L 2706 0 L 2706 2169 Q 2706 2641 2540 2862 Q 2375 3084 2022 3084 Q 1619 3084 1401 2798 Q 1184 2513 1184 1978 L 1184 0 L 609 0 L 609 4863 L 1184 4863 L 1184 2975 Q 1338 3275 1600 3429 Q 1863 3584 2222 3584 Q 2756 3584 3020 3232 Q 3284 2881 3284 2169 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-55" d="M 3609 2778 Q 3425 2922 3234 2987 Q 3044 3053 2816 3053 Q 2278 3053 1993 2715 Q 1709 2378 1709 1741 L 1709 0 L 1131 0 L 1131 3500 L 1709 3500 L 1709 2816 Q 1853 3188 2151 3386 Q 2450 3584 2859 3584 Q 3072 3584 3256 3531 Q 3441 3478 3609 3366 L 3609 2778 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-b" d="M 2766 4856 Q 2350 4144 2145 3436 Q 1941 2728 1941 2009 Q 1941 1294 2145 584 Q 2350 -125 2766 -844 L 2266 -844 Q 1794 -100 1562 604 Q 1331 1309 1331 2009 Q 1331 2706 1562 3412 Q 1794 4119 2266 4856 L 2766 4856 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-c" d="M 1088 4856 L 1588 4856 Q 2059 4119 2290 3412 Q 2522 2706 2522 2009 Q 2522 1306 2290 600 Q 2059 -106 1588 -844 L 1088 -844 Q 1503 -119 1708 590 Q 1913 1300 1913 2009 Q 1913 2722 1708 3431 Q 1503 4141 1088 4856 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-1e" d="M 1569 947 L 2356 947 L 2356 300 L 1741 -897 L 1259 -897 L 1569 300 L 1569 947 z M 1528 3322 L 2316 3322 L 2316 2375 L 1528 2375 L 1528 3322 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-53" d="M 1172 441 L 1172 -1331 L 594 -1331 L 594 3500 L 1172 3500 L 1172 3053 Q 1316 3313 1555 3448 Q 1794 3584 2106 3584 Q 2741 3584 3102 3093 Q 3463 2603 3463 1734 Q 3463 881 3100 395 Q 2738 -91 2106 -91 Q 1788 -91 1548 45 Q 1309 181 1172 441 z M 2859 1747 Q 2859 2416 2648 2756 Q 2438 3097 2022 3097 Q 1603 3097 1387 2755 Q 1172 2413 1172 1747 Q 1172 1084 1387 740 Q 1603 397 2022 397 Q 2438 397 2648 737 Q 2859 1078 2859 1747 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-47" d="M 2681 3053 L 2681 4863 L 3256 4863 L 3256 0 L 2681 0 L 2681 441 Q 2538 181 2298 45 Q 2059 -91 1747 -91 Q 1113 -91 748 401 Q 384 894 384 1759 Q 384 2613 750 3098 Q 1116 3584 1747 3584 Q 2063 3584 2303 3448 Q 2544 3313 2681 3053 z M 991 1747 Q 991 1078 1203 737 Q 1416 397 1831 397 Q 2247 397 2464 740 Q 2681 1084 2681 1747 Q 2681 2413 2464 2755 Q 2247 3097 1831 3097 Q 1416 3097 1203 2756 Q 991 2416 991 1747 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-4f" d="M 1997 1269 Q 1997 881 2139 684 Q 2281 488 2559 488 L 3231 488 L 3231 0 L 2503 0 Q 1988 0 1705 331 Q 1422 663 1422 1269 L 1422 4447 L 500 4447 L 500 4897 L 1997 4897 L 1997 1269 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-50" d="M 2113 3144 Q 2219 3369 2383 3476 Q 2547 3584 2778 3584 Q 3200 3584 3373 3257 Q 3547 2931 3547 2028 L 3547 0 L 3022 0 L 3022 2003 Q 3022 2744 2939 2923 Q 2856 3103 2638 3103 Q 2388 3103 2295 2911 Q 2203 2719 2203 2003 L 2203 0 L 1678 0 L 1678 2003 Q 1678 2753 1589 2928 Q 1500 3103 1269 3103 Q 1041 3103 952 2911 Q 863 2719 863 2003 L 863 0 L 341 0 L 341 3500 L 863 3500 L 863 3200 Q 966 3388 1120 3486 Q 1275 3584 1472 3584 Q 1709 3584 1867 3475 Q 2025 3366 2113 3144 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-45" d="M 2869 1747 Q 2869 2416 2656 2756 Q 2444 3097 2028 3097 Q 1609 3097 1393 2755 Q 1178 2413 1178 1747 Q 1178 1084 1393 740 Q 1609 397 2028 397 Q 2444 397 2656 737 Q 2869 1078 2869 1747 z M 1178 3053 Q 1316 3309 1558 3446 Q 1800 3584 2119 3584 Q 2750 3584 3112 3098 Q 3475 2613 3475 1759 Q 3475 894 3111 401 Q 2747 -91 2113 -91 Q 1800 -91 1561 45 Q 1322 181 1178 441 L 1178 0 L 603 0 L 603 4863 L 1178 4863 L 1178 3053 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-58" d="M 609 1325 L 609 3494 L 1184 3494 L 1184 1325 Q 1184 853 1351 631 Q 1519 409 1869 409 Q 2275 409 2490 695 Q 2706 981 2706 1516 L 2706 3494 L 3284 3494 L 3284 0 L 2706 0 L 2706 525 Q 2553 222 2289 65 Q 2025 -91 1672 -91 Q 1134 -91 871 261 Q 609 613 609 1325 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSansMono-49" d="M 3322 4863 L 3322 4384 L 2669 4384 Q 2359 4384 2239 4257 Q 2119 4131 2119 3809 L 2119 3500 L 3322 3500 L 3322 3053 L 2119 3053 L 2119 0 L 1544 0 L 1544 3053 L 609 3053 L 609 3500 L 1544 3500 L 1544 3744 Q 1544 4319 1808 4591 Q 2072 4863 2631 4863 L 3322 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSansMono-46"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4a" transform="translate(240.8125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-48" transform="translate(301.015625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-57" transform="translate(361.21875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-46" transform="translate(421.421875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4b" transform="translate(481.625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-44" transform="translate(541.828125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-55" transform="translate(602.03125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-b" transform="translate(662.234375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-c" transform="translate(722.4375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-1e" transform="translate(782.640625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(842.84375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(903.046875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-53" transform="translate(963.25 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-55" transform="translate(1023.453125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-48" transform="translate(1083.65625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-51" transform="translate(1143.859375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-47" transform="translate(1204.0625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-48" transform="translate(1264.265625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(1324.46875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4c" transform="translate(1384.671875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4f" transform="translate(1444.875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(1505.078125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-53" transform="translate(1565.28125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-55" transform="translate(1625.484375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4c" transform="translate(1685.6875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-50" transform="translate(1745.890625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-52" transform="translate(1806.09375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(1866.296875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-48" transform="translate(1926.5 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(1986.703125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4f" transform="translate(2046.90625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-52" transform="translate(2107.109375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(2167.3125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-57" transform="translate(2227.515625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-52" transform="translate(2287.71875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4a" transform="translate(2347.921875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4f" transform="translate(2408.125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4c" transform="translate(2468.328125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-48" transform="translate(2528.53125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(2588.734375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-47" transform="translate(2648.9375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-44" transform="translate(2709.140625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-4f" transform="translate(2769.34375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-3" transform="translate(2829.546875 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-45" transform="translate(2889.75 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-58" transform="translate(2949.953125 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-49" transform="translate(3010.15625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-49" transform="translate(3070.359375 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-48" transform="translate(3130.5625 0)"/> <use xlink:href="#fe585a4-DejaVuSansMono-55" transform="translate(3190.765625 0)"/> </g> </g> <g id="fe585a4-text_12"> <!-- programma --> <g style="fill: var(--fig-ink)" transform="translate(466.575609 101.808348) scale(0.11 -0.11)"> <use xlink:href="#fe585a4-DejaVuSerif-53"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(64.015625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(111.8125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4a" transform="translate(172.015625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(236.03125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(283.828125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-50" transform="translate(343.453125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-50" transform="translate(438.28125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(533.109375 0)"/> </g> <!-- int c --> <g style="fill: var(--fig-ink)" transform="translate(486.836234 115.010496) scale(0.11 -0.11)"> <defs> <path id="fe585a4-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSerif-4c"/> <use xlink:href="#fe585a4-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(96.390625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(136.578125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-46" transform="translate(168.359375 0)"/> </g> </g> <g id="fe585a4-patch_12"> <path d="M 399.384 105.552 Q 422.946 105.552 444.271932 105.552 " style="fill: none; stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 2; stroke-linecap: round"/> <path d="M 440.271932 103.552 L 444.271932 105.552 L 440.271932 107.552 z " style="fill: var(--fig-faint); stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 2; stroke-linecap: round"/> </g> <g id="fe585a4-text_13"> <!-- riceve un carattere --> <g style="fill: var(--fig-axis)" transform="translate(452.976312 33.165402) scale(0.095 -0.095)"> <use xlink:href="#fe585a4-DejaVuSerif-55"/> <use xlink:href="#fe585a4-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-46" transform="translate(79.78125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(135.78125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-59" transform="translate(194.96875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(251.46875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(310.65625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-58" transform="translate(342.4375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-51" transform="translate(406.84375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(471.25 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-46" transform="translate(503.03125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(559.03125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(618.65625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(666.453125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(726.078125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(766.265625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(806.453125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-55" transform="translate(865.640625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-48" transform="translate(913.4375 0)"/> </g> <!-- alla volta, poi EOF (-1) --> <g style="fill: var(--fig-axis)" transform="translate(444.709828 44.568) scale(0.095 -0.095)"> <defs> <path id="fe585a4-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-28" d="M 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 4109 4666 L 4109 3628 L 3725 3628 L 3725 4281 L 1581 4281 L 1581 2719 L 3109 2719 L 3109 3303 L 3494 3303 L 3494 1753 L 3109 1753 L 3109 2338 L 1581 2338 L 1581 384 L 3775 384 L 3775 1038 L 4159 1038 L 4159 0 L 353 0 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-32" d="M 2625 244 Q 3391 244 3781 770 Q 4172 1297 4172 2328 Q 4172 3363 3781 3889 Q 3391 4416 2625 4416 Q 1856 4416 1465 3889 Q 1075 3363 1075 2328 Q 1075 1297 1465 770 Q 1856 244 2625 244 z M 2625 -91 Q 2150 -91 1751 65 Q 1353 222 1050 525 Q 700 875 529 1319 Q 359 1763 359 2328 Q 359 2894 529 3339 Q 700 3784 1050 4134 Q 1356 4441 1750 4595 Q 2144 4750 2625 4750 Q 3641 4750 4266 4084 Q 4891 3419 4891 2328 Q 4891 1769 4719 1320 Q 4547 872 4197 525 Q 3891 219 3497 64 Q 3103 -91 2625 -91 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-29" d="M 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 4172 4666 L 4172 3628 L 3788 3628 L 3788 4281 L 1581 4281 L 1581 2719 L 3175 2719 L 3175 3303 L 3559 3303 L 3559 1753 L 3175 1753 L 3175 2338 L 1581 2338 L 1581 331 L 2328 331 L 2328 0 L 353 0 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-10" d="M 281 1959 L 1881 1959 L 1881 1472 L 281 1472 L 281 1959 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="fe585a4-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fe585a4-DejaVuSerif-44"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(59.625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(91.609375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(123.59375 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(183.21875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-59" transform="translate(215 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(271.5 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4f" transform="translate(331.703125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-57" transform="translate(363.6875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-44" transform="translate(403.875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-f" transform="translate(463.5 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(495.28125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-53" transform="translate(527.0625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-52" transform="translate(591.078125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-4c" transform="translate(651.28125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(683.265625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-28" transform="translate(715.046875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-32" transform="translate(788.046875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-29" transform="translate(870.03125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-3" transform="translate(939.421875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-b" transform="translate(971.203125 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-10" transform="translate(1010.21875 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-14" transform="translate(1044.015625 0)"/> <use xlink:href="#fe585a4-DejaVuSerif-c" transform="translate(1107.640625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="fe585a4-p28c8ba486d"> <rect x="5.76" y="5.76" width="554.4" height="210.672"/> </clipPath> </defs> </svg></figure>

**`getchar()`** (<span class="src">slide 60</span>). "Legge il prossimo carattere da standard input e lo restituisce." Ogni chiamata consuma un carattere: un carattere letto non si rilegge.

```
c = getchar();      c conterrà il carattere letto
```

**`putchar(c)`**. "Stampa il carattere `c` su standard output."

```
putchar(c);
```

Entrambe sono in `stdio.h`. Anche l'a capo `'\n'` e lo spazio sono caratteri: `getchar` li restituisce come gli altri, e `putchar('\n')` va a capo.

Esempio 1, leggere due caratteri e scambiarli. Un carattere è un numero (il suo codice ASCII), e `printf` con `%d` lo mostra:

```c
#include <stdio.h>

int main(void)
{
    int a;
    int b;

    a = getchar();
    b = getchar();
    putchar(b);
    putchar(a);
    putchar('\n');
    printf("%d %d\n", a, b);
    return 0;
}
```

Con input `ok` (`printf 'ok' | ./a.out`):

| istruzione | `a` | `b` | stampa |
| --- | --- | --- | --- |
| `a = getchar();` | 111 (`'o'`) | | |
| `b = getchar();` | 111 | 107 (`'k'`) | |
| `putchar(b);` | | | `k` |
| `putchar(a);` | | | `o` |
| `putchar('\n');` | | | a capo |
| `printf(...)` | | | `111 107` |

Output (verificato): `ko`, poi `111 107`.

Esempio 2, cosa restituisce `getchar` quando non c'è più niente:

```c
#include <stdio.h>

int main(void)
{
    int c;

    printf("EOF vale %d\n", EOF);
    c = getchar();
    printf("primo getchar: %d\n", c);
    c = getchar();
    printf("secondo getchar: %d\n", c);
    return 0;
}
```

Con input `A` (`printf 'A' | ./a.out`) stampa `EOF vale -1`, `primo getchar: 65`, `secondo getchar: -1` (verificato): il primo legge la `A`, il secondo trova l'input finito. Con input vuoto anche il primo dà -1.

**`EOF`** (<span class="src">slide 64</span>). "EOF segnala «fine del file». Costante int definita in `stdio.h`", e il commento del prof nel codice aggiunge: "il valore non importa". `getchar` lo restituisce quando l'input è **finito** (end of file). Vale -1 con gcc, ma si confronta sempre con il nome `EOF`. Da tastiera la fine dell'input si segnala con Ctrl+D su Linux e macOS (a inizio riga), con Ctrl+Z e Invio su Windows, quindi anche in Dev-C++. Se l'input arriva da un file o da una pipe, EOF arriva da solo alla fine.

**Perché `int c` e non `char c`** (slide 60). La slide: "c deve essere una variabile dichiarata `int` perché `getchar` restituisce un valore di tipo `int` e `putchar` richiede una variabile di tipo `int`". Il motivo: `getchar` deve poter restituire **tutti** i 256 valori di un byte più un valore in più, `EOF`, che non è nessun carattere. Un `char` ha solo 256 valori, quindi EOF finirebbe confuso con un carattere vero. Il commento del prof nel codice: `c` è "intero ma ANCHE un carattere".

Controesempio, con `char c`:

```c
#include <stdio.h>

int main(void)
{
    char c;
    int n = 0;

    while ((c = getchar()) != EOF) {
        n++;
    }
    printf("letti %d caratteri\n", n);
    return 0;
}
```

Con input `abcd` stampa `letti 4 caratteri`, giusto. Con input `ab`, un byte di valore 255, poi `cd` (`printf 'ab\xffcd' | ./a.out`) stampa `letti 2 caratteri` (verificato): su gcc per PC `char` ha segno, il byte 255 messo in un `char` diventa -1, uguale a EOF, e il ciclo si ferma a metà. Dove `char` è senza segno succede il contrario: `c` non vale mai -1, il confronto con EOF non è mai vero e il ciclo non finisce. gcc non avvisa: l'errore si vede solo a runtime.

## Concetti

### Il ciclo di lettura fino a EOF

È il pattern della sentinella di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/), con EOF come sentinella. Pseudocodice della slide 63:

```
leggi un carattere
while (non è fine file) {
    stampa il carattere appena letto
    leggi il prossimo carattere
}
```

Forma compatta (<span class="src">slide 65-66</span>), "versione che consolida `getchar` nella condizione del while": lettura e controllo nella stessa condizione.

```
while ((c = getchar()) != EOF) {
    putchar(c);
}
```

La condizione si valuta in due passi (slide 66):
1. si valuta l'espressione `c = getchar()`: legge un carattere, lo mette in `c`, e l'espressione vale il carattere letto;
2. si confronta (`!=`) `c` con `EOF`.

Funziona perché un'assegnazione è un'espressione con un valore, visto in [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/). Il corpo vede il carattere appena letto, e la riga "leggi il prossimo" in fondo al corpo sparisce: la fa la condizione al giro dopo.

**Le parentesi sono obbligatorie.** `!=` ha precedenza più alta di **=**. Senza parentesi, `c = getchar() != EOF` si legge `c = (getchar() != EOF)`: `c` riceve 1 finché l'input non è finito, e il programma stampa il carattere di codice 1 invece di quello letto.

```
while (c = getchar() != EOF) {
    putchar(c + '0');
}
```

Con input `abc` stampa `111` (verificato): `c` vale 1 a ogni giro, e `1 + '0'` è il carattere `'1'`. gcc con `-Wall` avvisa (`suggest parentheses around assignment used as truth value`).

Esempio 1, contare spazi e righe. Due `if` indipendenti nel corpo, uno per categoria:

```c
#include <stdio.h>

int main(void)
{
    int c;
    int spazi = 0;
    int righe = 0;

    while ((c = getchar()) != EOF) {
        if (c == ' ')
            spazi++;
        if (c == '\n')
            righe++;
    }
    printf("spazi=%d righe=%d\n", spazi, righe);
    return 0;
}
```

Con input `la scala` a capo `ha 7 gradini` a capo (`printf 'la scala\nha 7 gradini\n' | ./a.out`): uno spazio nella prima riga, due nella seconda, due `\n`. Output (verificato): `spazi=3 righe=2`.

Esempio 2, trasformare mentre si copia: ogni cifra diventa `#`, il resto passa invariato. Un carattere è una cifra se il suo codice sta fra quello di `'0'` e quello di `'9'`, che in ASCII sono consecutivi.

```c
#include <stdio.h>

int main(void)
{
    int c;

    while ((c = getchar()) != EOF) {
        if (c >= '0' && c <= '9')
            putchar('#');
        else
            putchar(c);
    }
    return 0;
}
```

Con input `tel 0461 28` a capo stampa `tel #### ##` e l'a capo (verificato). Lo spazio e `\n` non sono cifre, quindi passano.

### Aritmetica sui caratteri

Siccome un carattere è il suo codice, si può fare aritmetica: in ASCII le lettere minuscole sono consecutive (`'a'` = 97, ..., `'z'` = 122), così le maiuscole (`'A'` = 65) e le cifre (`'0'` = 48).

```
c - '0'             da cifra a valore: '7' - '0' = 55 - 48 = 7
c - 'a'             posizione nell'alfabeto: 'c' - 'a' = 2
c - 'a' + 'A'       da minuscola a maiuscola: 'c' - 'a' + 'A' = 2 + 65 = 67 = 'C'
c + 1               il carattere dopo: 'H' + 1 = 'I'
```

Le formule si scrivono con i caratteri fra apici, non con i numeri: `c - 'a' + 'A'` si legge e non dipende dal ricordarsi 97 e 65.

## Metodo

**Programma che elabora l'input carattere per carattere.**
1. `int c;` e le variabili di conteggio inizializzate a 0.
2. `while ((c = getchar()) != EOF) { ... }`.
3. Nel corpo, un `if` per ogni categoria di carattere: `c == '\n'`, `c >= '0' && c <= '9'`, `c >= 'a' && c <= 'z'`.
4. Se serve ricordare qualcosa del carattere precedente (parole, spazi doppi), una variabile `prec` o un flag `dentro` aggiornato in fondo al corpo.
5. Dopo il ciclo, stampa i risultati.

**Tracciare su un input dato.** Scrivi l'input carattere per carattere, compresi spazi e `\n`, e fai una riga di tabella per carattere. Controlla se l'input finisce con `\n` o no: cambia il conteggio delle righe e dei caratteri. Ogni `getchar` nel corpo consuma un carattere in più: contali.

## Esempi svolti a lezione

**Copia dei primi K caratteri** (<span class="src">slide 61-62</span>). Esercizio della slide 61: "copiare l'input e restituirlo in output per i primi K caratteri".

```c
#include <stdio.h>

int main(void)
{
    int K = 5;
    int c;

    while (K--) {
        c = getchar();
        putchar(c);
    }
    return 0;
}
```

Con input `ciao mondo`:

| giro | `K` testato | `K` nel corpo | `c` | stampa |
| --- | --- | --- | --- | --- |
| 1 | 5 vero | 4 | `'c'` | `c` |
| 2 | 4 vero | 3 | `'i'` | `i` |
| 3 | 3 vero | 2 | `'a'` | `a` |
| 4 | 2 vero | 1 | `'o'` | `o` |
| 5 | 1 vero | 0 | `' '` | spazio |
| | 0 falso | -1 | | |

`while (K--)` gira esattamente 5 volte, e all'uscita `K` vale -1. Output (verificato): `ciao ` (cinque caratteri, lo spazio compreso). `mondo` resta nel buffer e non viene letto.

Il programma non controlla EOF. Se l'input ha meno di 5 caratteri, dopo la fine `getchar` restituisce EOF e `putchar(EOF)` stampa un byte spazzatura (con input `ab` escono `a`, `b` e tre byte di valore 255: verificato con `od`). La correzione è uscire anche a fine input: `while (K-- && (c = getchar()) != EOF) putchar(c);`.

**Copia dell'input sull'output** (<span class="src">slide 63-64</span>). Pseudocodice della slide 63: leggi un carattere alla volta; finché non è fine file, stampa il carattere appena letto e leggi il prossimo carattere. Il codice della slide 64 è la traduzione riga per riga:

```c
#include <stdio.h>

int main(void)
{
    int c;

    c = getchar();
    while (c != EOF) {
        putchar(c);
        c = getchar();
    }
    printf("Fine \n");
    return 0;
}
```

Con input `ciao mondo` a capo: il primo `getchar` legge `c`, il ciclo stampa e rilegge per ognuno degli 11 caratteri (10 di `ciao mondo` più `\n`), al dodicesimo `getchar` arriva EOF e si esce. Output (verificato): `ciao mondo`, a capo, `Fine ` (con lo spazio prima di `\n`, come nella slide). Gli a capo passano come caratteri normali.

**Versione aggiornata** (<span class="src">slide 65-66</span>), con `getchar` nella condizione. Stesso output (verificato):

```c
#include <stdio.h>

int main(void)
{
    int c;

    while ((c = getchar()) != EOF) {
        putchar(c);
    }
    printf("Fine \n");
    return 0;
}
```

**Contare i caratteri** (<span class="src">slide 67-68</span>). Pseudocodice: leggi un carattere alla volta; finché non è fine file aggiorna il contatore caratteri e leggi il prossimo carattere; stampa il numero di caratteri. Nel codice il fumetto indica `++nc` come "aggiornamento contatore caratteri".

```c
#include <stdio.h>

int main(void)
{
    int c;
    int nc = 0;

    while ((c = getchar()) != EOF) {
        ++nc;
        putchar(c);
    }
    printf("\nNumero Caratteri=%d\n", nc);
    return 0;
}
```

Con input `ciao mondo` a capo: 10 caratteri più `\n` fanno 11. Stampa la riga copiata, una riga vuota (il `\n` dell'input più quello all'inizio del `printf`) e `Numero Caratteri=11` (verificato). Con input `ciao` a capo conta 5; con input vuoto stampa una riga vuota e `Numero Caratteri=0`. `++nc` e `nc++` qui sono uguali, perché il valore dell'espressione non si usa. Sulla slide il `printf` finale è `"\nNumero Caratteri=%d"`, senza `\n` in fondo; qui è aggiunto perché il prompt della shell non finisca attaccato al numero.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Input e output di caratteri (esercizi)](/uni/prog-1/input-e-output-di-caratteri-esercizi/).

## Errori tipici

- `char c;` per il risultato di `getchar`: il confronto con EOF può non funzionare (si ferma al byte 255, o non si ferma mai).
- Dimenticare le parentesi: `c = getchar() != EOF` mette in `c` il risultato del confronto.
- Chiamare `getchar()` due volte nello stesso giro (una nella condizione e una nel corpo): ogni chiamata consuma un carattere, quindi metà dei caratteri si perde.
- Dimenticare che `'\n'` è un carattere: un programma che conta i caratteri di `ciao` a capo ne conta 5.
- Confrontare con `'EOF'` o con `"EOF"`: EOF è una costante intera, si scrive senza apici.
- Usare i numeri dei codici (`c - 97 + 65`) invece dei caratteri (`c - 'a' + 'A'`): funziona, ma si sbaglia facilmente e non si legge.
- Confondere `'0'` (il carattere, codice 48) con `0` (il numero): `somma += c` senza `- '0'` somma i codici.
- Non controllare EOF in un ciclo che legge un numero fisso di caratteri: a input finito `putchar(EOF)` stampa spazzatura.
- Aspettarsi che il programma reagisca a ogni tasto: il buffer del sistema operativo passa i caratteri a riga completata.

## Domande

- Cosa fanno `getchar()` e `putchar(c)`?

- Cos'è `EOF`, dove è definito e come si genera da tastiera?

- Perché la variabile che riceve il risultato di `getchar` va dichiarata `int`?

- In che ordine si valuta `(c = getchar()) != EOF`?

- Cosa succede se si scrive `c = getchar() != EOF` senza parentesi?

- Scrivi il ciclo che copia tutto lo standard input sullo standard output.

- Quanti caratteri conta il programma della slide 68 con input `ciao` seguito da a capo?

- Con `K = 5`, quante volte gira `while (K--)` e quanto vale `K` alla fine?

- Come si trasforma una minuscola in maiuscola usando i codici ASCII?

- Cos'è il buffer dello standard input e che effetto ha su un programma che usa `getchar`?

- Come si ottiene il valore numerico di una cifra letta con `getchar`?

- Cosa succede al programma della slide 62 se l'input ha meno di K caratteri, e come si corregge?

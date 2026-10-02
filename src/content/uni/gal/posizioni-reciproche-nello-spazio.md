---
title: Posizioni reciproche nello spazio
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-09-21
lezioni: []
ordine: 2
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L3. Fonte: appunti della prof <span class="src">p. 16-18</span> (due rette, rette complanari), <span class="src">p. 19-20</span> (due piani), <span class="src">p. 21-22</span> (retta e piano); esercitazione del tutor, <span class="src">es. 2-4</span>; dispensa Postinghel, sezione 1.2.4. Prima: [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/) (equazioni cartesiane e parametriche, fascio di piani) e [Vettori geometrici](/uni/gal/vettori-geometrici/) (prodotto scalare, ortogonalità). Il seguito è [Distanze nello spazio](/uni/gal/distanze-nello-spazio/).

> [!abstract] Per l'esame
> - **Saper enunciare**: le definizioni della prof di rette parallele, incidenti, sghembe, perpendicolari; rette complanari; piani paralleli, incidenti, perpendicolari; retta e piano paralleli, incidenti, perpendicolari.
> - **Saper spiegare**: perché per retta e piano "paralleli" si legge su $\vec{n} \cdot \vec{v} = 0$ e "perpendicolari" sulla proporzionalità; perché ortogonalità e incidenza sono indipendenti; perché servono due parametri diversi.
> - **Saper fare**: posizione reciproca di due rette (albero dei casi), piano che contiene due rette complanari (fascio), posizione di due piani, piano ortogonale a due piani per un punto, posizione di retta e piano con punto d'intersezione, retta per un punto ortogonale e incidente a una retta data.
> - **Dove esce**: teoria del foglio 1, domanda 1.8; esercizi 1.11, 1.13, 1.14, 1.15, 1.17.

**Cosa si chiede qui.** Dati due oggetti nello spazio, capire come stanno fra loro senza disegnarli: si toccano, sono paralleli, sono perpendicolari. La risposta non arriva mai dal disegno, arriva da due vettori e un prodotto scalare.

Ogni oggetto porta con sé un vettore che lo caratterizza, e tutta la sezione è il gioco fra questi vettori:

```
   retta  ->  vettore DIREZIONALE  v, w   (dove va)
   piano  ->  vettore NORMALE      n, n'  (dove non va)

   due vettori proporzionali      ->  stessa direzione  (paralleli)
   prodotto scalare nullo         ->  ortogonali
```

Il trabocchetto di tutta la sezione è che per le rette "paralleli" si legge sui direzionali proporzionali, per i piani sui normali proporzionali, ma per retta e piano si ribalta: paralleli quando direzionale e normale sono **ortogonali**. Il senso è ovvio appena lo dici a parole: la retta è parallela al piano quando non ha nessuna componente lungo la normale, cioè quando non sale né scende rispetto al piano.

## Definizioni

### Due rette

La prof: "siano $r$ e $r'$ due rette distinte, e siano $\vec{v}$, $\vec{w}$ vettori direzionali". Si chiamano $P \in r$ e $P' \in r'$ due loro punti.

<figure class="fig"><svg role="img" aria-label="posizione reciproca di due rette" xmlns:xlink="http://www.w3.org/1999/xlink" width="714.6pt" height="164.496949pt" viewBox="0 0 714.6 164.496949" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f34-figure_1"> <g id="f34-patch_1"> <path d="M 0 164.496949 L 714.6 164.496949 L 714.6 0 L 0 0 L 0 164.496949 z " style="fill: none"/> </g> <g id="f34-axes_1"> <g id="f34-patch_2"> <path d="M 65.289947 83.541227 L 28.588562 109.239813 L 160.181075 109.239813 L 196.88246 83.541227 z " clip-path="url(#f34-p148d4e52af)" style="fill: var(--fig-steel); opacity: 0.12"/> </g> <g id="f34-line2d_1"> <path d="M 65.289947 83.541227 L 28.588562 109.239813 L 160.181075 109.239813 L 196.88246 83.541227 L 65.289947 83.541227 " clip-path="url(#f34-p148d4e52af)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f34-line2d_2"> <path d="M 70.454637 86.506448 L 106.607467 107.262998 " clip-path="url(#f34-p148d4e52af)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f34-line2d_3"> <path d="M 123.718273 86.506448 L 159.871104 107.262998 " clip-path="url(#f34-p148d4e52af)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f34-text_1"> <!-- $r$ --> <g style="fill: var(--fig-accent)" transform="translate(106.620622 121.605994) scale(0.13 -0.13)"> <defs> <path id="f34-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f34-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f34-text_2"> <!-- $r'$ --> <g style="fill: var(--fig-ink)" transform="translate(167.528724 112.533053) scale(0.13 -0.13)"> <defs> <path id="f34-Cmsy10-49" d="M 225 347 Q 184 359 184 409 L 966 3316 Q 1003 3434 1093 3506 Q 1184 3578 1300 3578 Q 1450 3578 1564 3479 Q 1678 3381 1678 3231 Q 1678 3166 1644 3084 L 488 319 Q 466 275 428 275 Q 394 275 320 306 Q 247 338 225 347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f34-DejaVuSerif-Italic-55" transform="translate(0 0.565625)"/> <use xlink:href="#f34-Cmsy10-49" transform="translate(52.240921 41.865625) scale(0.7)"/> </g> </g> <g id="f34-text_3"> <!-- parallele --> <g style="fill: var(--fig-axis)" transform="translate(82.43068 14.878125) scale(0.12 -0.12)"> <defs> <path id="f34-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f34-DejaVuSerif-53"/> <use xlink:href="#f34-DejaVuSerif-44" transform="translate(64.015625 0)"/> <use xlink:href="#f34-DejaVuSerif-55" transform="translate(123.640625 0)"/> <use xlink:href="#f34-DejaVuSerif-44" transform="translate(171.4375 0)"/> <use xlink:href="#f34-DejaVuSerif-4f" transform="translate(231.0625 0)"/> <use xlink:href="#f34-DejaVuSerif-4f" transform="translate(263.046875 0)"/> <use xlink:href="#f34-DejaVuSerif-48" transform="translate(295.03125 0)"/> <use xlink:href="#f34-DejaVuSerif-4f" transform="translate(354.21875 0)"/> <use xlink:href="#f34-DejaVuSerif-48" transform="translate(386.203125 0)"/> </g> </g> </g> <g id="f34-axes_2"> <g id="f34-patch_3"> <path d="M 313.435829 83.541227 L 276.734444 109.239813 L 408.326958 109.239813 L 445.028342 83.541227 z " clip-path="url(#f34-p5b934dc035)" style="fill: var(--fig-steel); opacity: 0.12"/> </g> <g id="f34-line2d_4"> <path d="M 313.435829 83.541227 L 276.734444 109.239813 L 408.326958 109.239813 L 445.028342 83.541227 L 313.435829 83.541227 " clip-path="url(#f34-p5b934dc035)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f34-line2d_5"> <path d="M 324.866829 86.506448 L 398.617521 107.262998 " clip-path="url(#f34-p5b934dc035)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f34-line2d_6"> <path d="M 301.489713 107.262998 L 421.994637 86.506448 " clip-path="url(#f34-p5b934dc035)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f34-text_4"> <!-- $r$ --> <g style="fill: var(--fig-accent)" transform="translate(406.463564 113.773107) scale(0.13 -0.13)"> <use xlink:href="#f34-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f34-text_5"> <!-- $r'$ --> <g style="fill: var(--fig-ink)" transform="translate(428.085679 83.943614) scale(0.13 -0.13)"> <use xlink:href="#f34-DejaVuSerif-Italic-55" transform="translate(0 0.565625)"/> <use xlink:href="#f34-Cmsy10-49" transform="translate(52.240921 41.865625) scale(0.7)"/> </g> </g> <g id="f34-text_6"> <!-- incidenti --> <g style="fill: var(--fig-axis)" transform="translate(330.650625 14.878125) scale(0.12 -0.12)"> <defs> <path id="f34-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f34-DejaVuSerif-4c"/> <use xlink:href="#f34-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f34-DejaVuSerif-46" transform="translate(96.390625 0)"/> <use xlink:href="#f34-DejaVuSerif-4c" transform="translate(152.390625 0)"/> <use xlink:href="#f34-DejaVuSerif-47" transform="translate(184.375 0)"/> <use xlink:href="#f34-DejaVuSerif-48" transform="translate(248.390625 0)"/> <use xlink:href="#f34-DejaVuSerif-51" transform="translate(307.578125 0)"/> <use xlink:href="#f34-DejaVuSerif-57" transform="translate(371.984375 0)"/> <use xlink:href="#f34-DejaVuSerif-4c" transform="translate(412.171875 0)"/> </g> </g> <g id="f34-line2d_7"> <defs> <path id="f34-mb488a57ca9" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f34-p5b934dc035)"> <use xlink:href="#f34-mb488a57ca9" x="361.742175" y="96.884723" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> <g id="f34-axes_3"> <g id="f34-patch_4"> <path d="M 561.581711 83.541227 L 524.880327 109.239813 L 656.47284 109.239813 L 693.174225 83.541227 z " clip-path="url(#f34-p0f0d1cc4e4)" style="fill: var(--fig-steel); opacity: 0.12"/> </g> <g id="f34-line2d_8"> <path d="M 561.581711 83.541227 L 524.880327 109.239813 L 656.47284 109.239813 L 693.174225 83.541227 L 561.581711 83.541227 " clip-path="url(#f34-p0f0d1cc4e4)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f34-line2d_9"> <path d="M 576.145867 86.506448 L 641.908685 106.274591 " clip-path="url(#f34-p0f0d1cc4e4)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f34-line2d_10"> <path d="M 574.56257 140.254691 L 597.371939 94.635953 " clip-path="url(#f34-p0f0d1cc4e4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f34-line2d_11"> <path d="M 604.390206 80.599418 L 618.426741 52.526349 " clip-path="url(#f34-p0f0d1cc4e4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f34-text_7"> <!-- $r$ --> <g style="fill: var(--fig-accent)" transform="translate(649.754727 114.351277) scale(0.13 -0.13)"> <use xlink:href="#f34-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f34-text_8"> <!-- $r'$ --> <g style="fill: var(--fig-ink)" transform="translate(624.517784 51.530092) scale(0.13 -0.13)"> <use xlink:href="#f34-DejaVuSerif-Italic-55" transform="translate(0 0.565625)"/> <use xlink:href="#f34-Cmsy10-49" transform="translate(52.240921 41.865625) scale(0.7)"/> </g> </g> <g id="f34-text_9"> <!-- sghembe --> <g style="fill: var(--fig-axis)" transform="translate(578.028695 14.878125) scale(0.12 -0.12)"> <defs> <path id="f34-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-4b" d="M 263 0 L 263 331 L 781 331 L 781 4531 L 231 4531 L 231 4863 L 1356 4863 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2704 2764 Q 2556 2988 2175 2988 Q 1775 2988 1565 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f34-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f34-DejaVuSerif-56"/> <use xlink:href="#f34-DejaVuSerif-4a" transform="translate(51.3125 0)"/> <use xlink:href="#f34-DejaVuSerif-4b" transform="translate(115.328125 0)"/> <use xlink:href="#f34-DejaVuSerif-48" transform="translate(179.734375 0)"/> <use xlink:href="#f34-DejaVuSerif-50" transform="translate(238.921875 0)"/> <use xlink:href="#f34-DejaVuSerif-45" transform="translate(333.75 0)"/> <use xlink:href="#f34-DejaVuSerif-48" transform="translate(397.765625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f34-p148d4e52af"> <rect x="5.76" y="20.878125" width="206.788235" height="137.858824"/> </clipPath> <clipPath id="f34-p5b934dc035"> <rect x="253.905882" y="20.878125" width="206.788235" height="137.858824"/> </clipPath> <clipPath id="f34-p0f0d1cc4e4"> <rect x="502.051765" y="20.878125" width="206.788235" height="137.858824"/> </clipPath> </defs> </svg></figure>

**Parallele.** $\vec{v}$ e $\vec{w}$ hanno la stessa direzione, cioè sono **proporzionali**: uno è multiplo dell'altro.

**Incidenti.** $r$ e $r'$ hanno un punto in comune.

**Sghembe.** Altrimenti: né parallele né incidenti. È un caso che nel piano non esiste: due rette complanari o si incontrano o sono parallele. Nello spazio c'è la terza via, due rette che scappano l'una dall'altra su piani diversi.

Sono **tre** casi, perché la prof parla di rette **distinte**. Se il testo non garantisce che siano distinte, direzionali proporzionali possono voler dire anche **coincidenti**: si controlla se un punto di una sta sull'altra.

**Perpendicolari (o ortogonali).** $\vec{v}$ e $\vec{w}$ sono ortogonali, cioè $\vec{v} \cdot \vec{w} = 0$.

L'ortogonalità è una condizione **indipendente** dalle prime tre, e la prof lo scrive esplicitamente: due rette possono essere incidenti e ortogonali, oppure sghembe e ortogonali. Si legge solo sui direzionali, non chiede che le rette si tocchino. Pensa alle due rette come a due matite incrociate a distanza: le direzioni formano un angolo retto anche se le matite non si sfiorano.

### Rette complanari

**Complanari.** Due rette che giacciono sullo stesso piano. La prof: due rette complanari possono essere parallele o incidenti.

> [!abstract] Criterio
> Due rette sono complanari **se e solo se** sono parallele oppure incidenti.

Detto altrimenti: sghembe significa esattamente non complanari. Se la domanda è "sono complanari?", la risposta è la stessa di "non sono sghembe?", e si trova con lo stesso conto.

### Due piani

Siano $\pi : ax + by + cz + d = 0$ e $\pi' : a'x + b'y + c'z + d' = 0$, con vettori normali $\vec{n} = (a, b, c)$ e $\vec{n}' = (a', b', c')$.

<figure class="fig"><svg role="img" aria-label="posizione reciproca di due piani" xmlns:xlink="http://www.w3.org/1999/xlink" width="547.2pt" height="202.526699pt" viewBox="0 0 547.2 202.526699" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f35-figure_1"> <g id="f35-patch_1"> <path d="M 0 202.526699 L 547.2 202.526699 L 547.2 -0 L 0 -0 L 0 202.526699 z " style="fill: none"/> </g> <g id="f35-axes_1"> <g id="f35-patch_2"> <path d="M 89.059522 135.893971 L 54.41715 160.150821 L 182.57026 160.150821 L 217.212632 135.893971 z " clip-path="url(#f35-p50d808a788)" style="fill: var(--fig-axis); opacity: 0.14"/> </g> <g id="f35-patch_3"> <path d="M 89.059522 84.632727 L 54.41715 108.889577 L 182.57026 108.889577 L 217.212632 84.632727 z " clip-path="url(#f35-p50d808a788)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="f35-line2d_1"> <path d="M 89.059522 135.893971 L 54.41715 160.150821 L 182.57026 160.150821 L 217.212632 135.893971 L 89.059522 135.893971 " clip-path="url(#f35-p50d808a788)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f35-line2d_2"> <path d="M 89.059522 84.632727 L 54.41715 108.889577 L 182.57026 108.889577 L 217.212632 84.632727 L 89.059522 84.632727 " clip-path="url(#f35-p50d808a788)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f35-text_1"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(227.009856 85.065618) scale(0.14 -0.14)"> <defs> <path id="f35-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f35-text_2"> <!-- $\pi'$ --> <g style="fill: var(--fig-axis)" transform="translate(225.189856 136.678503) scale(0.14 -0.14)"> <defs> <path id="f35-Cmsy10-49" d="M 225 347 Q 184 359 184 409 L 966 3316 Q 1003 3434 1093 3506 Q 1184 3578 1300 3578 Q 1450 3578 1564 3479 Q 1678 3381 1678 3231 Q 1678 3166 1644 3084 L 488 319 Q 466 275 428 275 Q 394 275 320 306 Q 247 338 225 347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-Italic-338" transform="translate(0 0.565625)"/> <use xlink:href="#f35-Cmsy10-49" transform="translate(69.961781 41.865625) scale(0.7)"/> </g> </g> <g id="f35-patch_4"> <path d="M 135.814891 96.761152 Q 135.814891 80.742013 135.814891 66.511729 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 133.614891 70.911729 L 135.814891 66.511729 L 138.014891 70.911729 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f35-patch_5"> <path d="M 135.814891 148.022396 Q 135.814891 132.003257 135.814891 117.772973 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 133.614891 122.172973 L 135.814891 117.772973 L 138.014891 122.172973 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f35-text_3"> <!-- $\vec{n}$ --> <g style="fill: var(--fig-accent)" transform="translate(141.201374 65.677523) scale(0.13 -0.13)"> <defs> <path id="f35-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#f35-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> </g> </g> <g id="f35-text_4"> <!-- $\vec{n}'$ --> <g style="fill: var(--fig-accent)" transform="translate(139.706374 117.718767) scale(0.13 -0.13)"> <use xlink:href="#f35-STIXGeneral-Regular-350" transform="translate(63.397949 11.885591)"/> <use xlink:href="#f35-DejaVuSerif-Italic-51" transform="translate(0 0.854341)"/> <use xlink:href="#f35-Cmsy10-49" transform="translate(65.312622 60.865625) scale(0.7)"/> </g> </g> <g id="f35-text_5"> <!-- paralleli: $\vec{n}$ e $\vec{n}'$ proporzionali --> <g style="fill: var(--fig-axis)" transform="translate(39.485455 17.76) scale(0.12 -0.12)"> <defs> <path id="f35-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-53" transform="translate(0 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-44" transform="translate(64.013672 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-55" transform="translate(123.632812 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-44" transform="translate(171.435547 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-4f" transform="translate(231.054688 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-4f" transform="translate(263.037109 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-48" transform="translate(295.019531 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-4f" transform="translate(354.199219 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-4c" transform="translate(386.181641 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-1d" transform="translate(418.164062 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(451.855469 0.854341)"/> <use xlink:href="#f35-STIXGeneral-Regular-350" transform="translate(547.040527 11.885591)"/> <use xlink:href="#f35-DejaVuSerif-Italic-51" transform="translate(483.642578 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(548.046875 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-48" transform="translate(579.833984 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(639.013672 0.854341)"/> <use xlink:href="#f35-STIXGeneral-Regular-350" transform="translate(734.19873 11.885591)"/> <use xlink:href="#f35-DejaVuSerif-Italic-51" transform="translate(670.800781 0.854341)"/> <use xlink:href="#f35-Cmsy10-49" transform="translate(736.113403 60.865625) scale(0.7)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(757.951782 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-53" transform="translate(789.738892 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-55" transform="translate(853.752563 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-52" transform="translate(901.555298 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-53" transform="translate(961.760376 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-52" transform="translate(1025.774048 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-55" transform="translate(1085.979126 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-5d" transform="translate(1133.78186 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-4c" transform="translate(1186.467407 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-52" transform="translate(1218.449829 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-51" transform="translate(1278.654907 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-44" transform="translate(1343.059204 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-4f" transform="translate(1402.678345 0.854341)"/> <use xlink:href="#f35-DejaVuSerif-4c" transform="translate(1434.660767 0.854341)"/> </g> </g> </g> <g id="f35-axes_2"> <g id="f35-patch_6"> <path d="M 381.248612 113.467177 L 346.606241 137.724026 L 474.759351 137.724026 L 509.401722 113.467177 z " clip-path="url(#f35-peb0ac00df2)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="f35-patch_7"> <path d="M 363.927427 170.44919 L 363.927427 80.742013 L 492.080537 80.742013 L 492.080537 170.44919 z " clip-path="url(#f35-peb0ac00df2)" style="fill: var(--fig-axis); opacity: 0.14"/> </g> <g id="f35-line2d_3"> <path d="M 381.248612 113.467177 L 346.606241 137.724026 L 474.759351 137.724026 L 509.401722 113.467177 L 381.248612 113.467177 " clip-path="url(#f35-peb0ac00df2)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f35-line2d_4"> <path d="M 363.927427 170.44919 L 363.927427 80.742013 L 492.080537 80.742013 L 492.080537 170.44919 L 363.927427 170.44919 " clip-path="url(#f35-peb0ac00df2)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f35-line2d_5"> <path d="M 363.927427 125.595602 L 492.080537 125.595602 " clip-path="url(#f35-peb0ac00df2)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: square"/> </g> <g id="f35-text_6"> <!-- $r$ --> <g style="fill: var(--fig-accent)" transform="translate(500.173934 135.38021) scale(0.13 -0.13)"> <defs> <path id="f35-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f35-text_7"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(519.198947 112.298154) scale(0.14 -0.14)"> <use xlink:href="#f35-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f35-text_8"> <!-- $\pi'$ --> <g style="fill: var(--fig-axis)" transform="translate(496.853934 78.322717) scale(0.14 -0.14)"> <use xlink:href="#f35-DejaVuSerif-Italic-338" transform="translate(0 0.565625)"/> <use xlink:href="#f35-Cmsy10-49" transform="translate(69.961781 41.865625) scale(0.7)"/> </g> </g> <g id="f35-text_9"> <!-- incidenti: si tagliano lungo una retta --> <g style="fill: var(--fig-axis)" transform="translate(308.543608 17.76) scale(0.12 -0.12)"> <defs> <path id="f35-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-4c"/> <use xlink:href="#f35-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f35-DejaVuSerif-46" transform="translate(96.390625 0)"/> <use xlink:href="#f35-DejaVuSerif-4c" transform="translate(152.390625 0)"/> <use xlink:href="#f35-DejaVuSerif-47" transform="translate(184.375 0)"/> <use xlink:href="#f35-DejaVuSerif-48" transform="translate(248.390625 0)"/> <use xlink:href="#f35-DejaVuSerif-51" transform="translate(307.578125 0)"/> <use xlink:href="#f35-DejaVuSerif-57" transform="translate(371.984375 0)"/> <use xlink:href="#f35-DejaVuSerif-4c" transform="translate(412.171875 0)"/> <use xlink:href="#f35-DejaVuSerif-1d" transform="translate(444.15625 0)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(477.84375 0)"/> <use xlink:href="#f35-DejaVuSerif-56" transform="translate(509.625 0)"/> <use xlink:href="#f35-DejaVuSerif-4c" transform="translate(560.9375 0)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(592.921875 0)"/> <use xlink:href="#f35-DejaVuSerif-57" transform="translate(624.703125 0)"/> <use xlink:href="#f35-DejaVuSerif-44" transform="translate(664.890625 0)"/> <use xlink:href="#f35-DejaVuSerif-4a" transform="translate(724.515625 0)"/> <use xlink:href="#f35-DejaVuSerif-4f" transform="translate(788.53125 0)"/> <use xlink:href="#f35-DejaVuSerif-4c" transform="translate(820.515625 0)"/> <use xlink:href="#f35-DejaVuSerif-44" transform="translate(852.5 0)"/> <use xlink:href="#f35-DejaVuSerif-51" transform="translate(912.125 0)"/> <use xlink:href="#f35-DejaVuSerif-52" transform="translate(976.53125 0)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(1036.734375 0)"/> <use xlink:href="#f35-DejaVuSerif-4f" transform="translate(1068.515625 0)"/> <use xlink:href="#f35-DejaVuSerif-58" transform="translate(1100.5 0)"/> <use xlink:href="#f35-DejaVuSerif-51" transform="translate(1164.90625 0)"/> <use xlink:href="#f35-DejaVuSerif-4a" transform="translate(1229.3125 0)"/> <use xlink:href="#f35-DejaVuSerif-52" transform="translate(1293.328125 0)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(1353.53125 0)"/> <use xlink:href="#f35-DejaVuSerif-58" transform="translate(1385.3125 0)"/> <use xlink:href="#f35-DejaVuSerif-51" transform="translate(1449.71875 0)"/> <use xlink:href="#f35-DejaVuSerif-44" transform="translate(1514.125 0)"/> <use xlink:href="#f35-DejaVuSerif-3" transform="translate(1573.75 0)"/> <use xlink:href="#f35-DejaVuSerif-55" transform="translate(1605.53125 0)"/> <use xlink:href="#f35-DejaVuSerif-48" transform="translate(1653.328125 0)"/> <use xlink:href="#f35-DejaVuSerif-57" transform="translate(1712.515625 0)"/> <use xlink:href="#f35-DejaVuSerif-57" transform="translate(1752.703125 0)"/> <use xlink:href="#f35-DejaVuSerif-44" transform="translate(1792.890625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f35-p50d808a788"> <rect x="5.76" y="23.76" width="243.490909" height="173.006699"/> </clipPath> <clipPath id="f35-peb0ac00df2"> <rect x="297.949091" y="23.76" width="243.490909" height="173.006699"/> </clipPath> </defs> </svg></figure>

**Paralleli.** $\vec{n}$ e $\vec{n}'$ sono proporzionali.

**Incidenti.** Altrimenti. In questo caso l'intersezione è una **retta**, mai un punto solo: due piani distinti che si toccano si toccano sempre lungo una retta.

**Perpendicolari (o ortogonali).** $\vec{n}$ e $\vec{n}'$ sono ortogonali, cioè $\vec{n} \cdot \vec{n}' = 0$.

Due piani ortogonali sono sempre incidenti: se le normali sono ortogonali non possono essere proporzionali, quindi i piani non sono paralleli.

### Retta e piano

Sia $\pi$ con vettore normale $\vec{n}$ e $r$ con vettore direzionale $\vec{v}$.

<figure class="fig"><svg role="img" aria-label="retta e piano" xmlns:xlink="http://www.w3.org/1999/xlink" width="714.6pt" height="167.801781pt" viewBox="0 0 714.6 167.801781" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f36-figure_1"> <g id="f36-patch_1"> <path d="M 0 167.801781 L 714.6 167.801781 L 714.6 0 L 0 0 L 0 167.801781 z " style="fill: none"/> </g> <g id="f36-axes_1"> <g id="f36-patch_2"> <path d="M 78.415326 94.975326 L 48.199633 116.132582 L 159.977057 116.132582 L 190.19275 94.975326 z " clip-path="url(#f36-p63e9a5cb40)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="f36-line2d_1"> <path d="M 78.415326 94.975326 L 48.199633 116.132582 L 159.977057 116.132582 L 190.19275 94.975326 L 78.415326 94.975326 " clip-path="url(#f36-p63e9a5cb40)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f36-line2d_2"> <path d="M 90.145991 56.585001 L 145.728418 72.452943 " clip-path="url(#f36-p63e9a5cb40)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f36-text_1"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(198.147711 95.817609) scale(0.14 -0.14)"> <defs> <path id="f36-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f36-patch_3"> <path d="M 96.840707 105.553954 Q 96.840707 88.78734 96.840707 73.809581 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 94.640707 78.209581 L 96.840707 73.809581 L 99.040707 78.209581 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f36-text_2"> <!-- $\vec{n}$ --> <g style="fill: var(--fig-accent)" transform="translate(84.2324 72.82588) scale(0.13 -0.13)"> <defs> <path id="f36-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#f36-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> </g> </g> <g id="f36-text_3"> <!-- $r$ --> <g style="fill: var(--fig-ink)" transform="translate(148.197289 70.241025) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f36-text_4"> <!-- paralleli: $\vec{n} \cdot \vec{v} = 0$ --> <g style="fill: var(--fig-axis)" transform="translate(57.374118 16.32) scale(0.12 -0.12)"> <defs> <path id="f36-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-926" d="M 678 2222 Q 678 2397 798 2517 Q 919 2638 1097 2638 Q 1269 2638 1391 2516 Q 1513 2394 1513 2222 Q 1513 2047 1391 1926 Q 1269 1806 1097 1806 Q 919 1806 798 1925 Q 678 2044 678 2222 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-53" transform="translate(0 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-44" transform="translate(64.013672 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-55" transform="translate(123.632812 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-44" transform="translate(171.435547 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4f" transform="translate(231.054688 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4f" transform="translate(263.037109 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-48" transform="translate(295.019531 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4f" transform="translate(354.199219 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4c" transform="translate(386.181641 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-1d" transform="translate(418.164062 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(451.855469 0.96875)"/> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(547.040527 12)"/> <use xlink:href="#f36-DejaVuSerif-Italic-51" transform="translate(483.642578 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-926" transform="translate(567.011719 0.96875)"/> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(678.625488 10.578125)"/> <use xlink:href="#f36-DejaVuSerif-Italic-59" transform="translate(620.205078 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-20" transform="translate(695.664062 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-13" transform="translate(798.417969 0.96875)"/> </g> </g> </g> <g id="f36-axes_2"> <g id="f36-patch_4"> <path d="M 326.561208 94.975326 L 296.345515 116.132582 L 408.12294 116.132582 L 438.338633 94.975326 z " clip-path="url(#f36-pc615731ff4)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="f36-line2d_3"> <path d="M 326.561208 94.975326 L 296.345515 116.132582 L 408.12294 116.132582 L 438.338633 94.975326 L 326.561208 94.975326 " clip-path="url(#f36-pc615731ff4)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f36-line2d_4"> <path d="M 332.703002 140.418069 L 393.874301 72.452943 " clip-path="url(#f36-pc615731ff4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f36-text_5"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(446.293593 95.817609) scale(0.14 -0.14)"> <use xlink:href="#f36-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f36-patch_5"> <path d="M 344.986589 105.553954 Q 344.986589 88.78734 344.986589 73.809581 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 342.786589 78.209581 L 344.986589 73.809581 L 347.186589 78.209581 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f36-text_6"> <!-- $\vec{n}$ --> <g style="fill: var(--fig-accent)" transform="translate(332.378282 72.82588) scale(0.13 -0.13)"> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#f36-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> </g> </g> <g id="f36-text_7"> <!-- $r$ --> <g style="fill: var(--fig-ink)" transform="translate(396.343172 70.241025) scale(0.13 -0.13)"> <use xlink:href="#f36-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f36-text_8"> <!-- incidenti: un punto in comune --> <g style="fill: var(--fig-axis)" transform="translate(265.954687 16.32) scale(0.12 -0.12)"> <defs> <path id="f36-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-4c"/> <use xlink:href="#f36-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f36-DejaVuSerif-46" transform="translate(96.390625 0)"/> <use xlink:href="#f36-DejaVuSerif-4c" transform="translate(152.390625 0)"/> <use xlink:href="#f36-DejaVuSerif-47" transform="translate(184.375 0)"/> <use xlink:href="#f36-DejaVuSerif-48" transform="translate(248.390625 0)"/> <use xlink:href="#f36-DejaVuSerif-51" transform="translate(307.578125 0)"/> <use xlink:href="#f36-DejaVuSerif-57" transform="translate(371.984375 0)"/> <use xlink:href="#f36-DejaVuSerif-4c" transform="translate(412.171875 0)"/> <use xlink:href="#f36-DejaVuSerif-1d" transform="translate(444.15625 0)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(477.84375 0)"/> <use xlink:href="#f36-DejaVuSerif-58" transform="translate(509.625 0)"/> <use xlink:href="#f36-DejaVuSerif-51" transform="translate(574.03125 0)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(638.4375 0)"/> <use xlink:href="#f36-DejaVuSerif-53" transform="translate(670.21875 0)"/> <use xlink:href="#f36-DejaVuSerif-58" transform="translate(734.234375 0)"/> <use xlink:href="#f36-DejaVuSerif-51" transform="translate(798.640625 0)"/> <use xlink:href="#f36-DejaVuSerif-57" transform="translate(863.046875 0)"/> <use xlink:href="#f36-DejaVuSerif-52" transform="translate(903.234375 0)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(963.4375 0)"/> <use xlink:href="#f36-DejaVuSerif-4c" transform="translate(995.21875 0)"/> <use xlink:href="#f36-DejaVuSerif-51" transform="translate(1027.203125 0)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(1091.609375 0)"/> <use xlink:href="#f36-DejaVuSerif-46" transform="translate(1123.390625 0)"/> <use xlink:href="#f36-DejaVuSerif-52" transform="translate(1179.390625 0)"/> <use xlink:href="#f36-DejaVuSerif-50" transform="translate(1239.59375 0)"/> <use xlink:href="#f36-DejaVuSerif-58" transform="translate(1334.421875 0)"/> <use xlink:href="#f36-DejaVuSerif-51" transform="translate(1398.828125 0)"/> <use xlink:href="#f36-DejaVuSerif-48" transform="translate(1463.234375 0)"/> </g> </g> <g id="f36-line2d_5"> <defs> <path id="f36-md5f1a405a6" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f36-pc615731ff4)"> <use xlink:href="#f36-md5f1a405a6" x="363.288651" y="106.435506" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> <g id="f36-axes_3"> <g id="f36-patch_6"> <path d="M 574.707091 94.975326 L 544.491398 116.132582 L 656.268822 116.132582 L 686.484515 94.975326 z " clip-path="url(#f36-pcd9ac0d1ae)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="f36-line2d_6"> <path d="M 574.707091 94.975326 L 544.491398 116.132582 L 656.268822 116.132582 L 686.484515 94.975326 L 574.707091 94.975326 " clip-path="url(#f36-pcd9ac0d1ae)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f36-line2d_7"> <path d="M 615.487956 147.470488 L 615.487956 52.459677 " clip-path="url(#f36-pcd9ac0d1ae)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f36-line2d_8"> <path d="M 615.487956 99.406196 L 621.635715 99.406196 L 621.635715 105.553954 " clip-path="url(#f36-pcd9ac0d1ae)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f36-text_9"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(694.439475 95.817609) scale(0.14 -0.14)"> <use xlink:href="#f36-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f36-patch_7"> <path d="M 593.132472 105.553954 Q 593.132472 88.78734 593.132472 73.809581 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 590.932472 78.209581 L 593.132472 73.809581 L 595.332472 78.209581 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f36-text_10"> <!-- $\vec{n}$ --> <g style="fill: var(--fig-accent)" transform="translate(580.524165 72.82588) scale(0.13 -0.13)"> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#f36-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> </g> </g> <g id="f36-text_11"> <!-- $r$ --> <g style="fill: var(--fig-ink)" transform="translate(622.148481 54.439413) scale(0.13 -0.13)"> <use xlink:href="#f36-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f36-text_12"> <!-- ortogonali: $\vec{v}$ multiplo di $\vec{n}$ --> <g style="fill: var(--fig-axis)" transform="translate(526.365882 16.32) scale(0.12 -0.12)"> <defs> <path id="f36-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-52" transform="translate(0 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-55" transform="translate(60.205078 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-57" transform="translate(108.007812 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-52" transform="translate(148.193359 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4a" transform="translate(208.398438 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-52" transform="translate(272.412109 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-51" transform="translate(332.617188 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-44" transform="translate(397.021484 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4f" transform="translate(456.640625 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4c" transform="translate(488.623047 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-1d" transform="translate(520.605469 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(554.296875 0.96875)"/> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(644.504395 10.578125)"/> <use xlink:href="#f36-DejaVuSerif-Italic-59" transform="translate(586.083984 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(642.578125 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-50" transform="translate(674.365234 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-58" transform="translate(769.189453 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4f" transform="translate(833.59375 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-57" transform="translate(865.576172 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4c" transform="translate(905.761719 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-53" transform="translate(937.744141 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4f" transform="translate(1001.757812 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-52" transform="translate(1033.740234 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(1093.945312 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-47" transform="translate(1125.732422 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-4c" transform="translate(1189.746094 0.96875)"/> <use xlink:href="#f36-DejaVuSerif-3" transform="translate(1221.728516 0.96875)"/> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(1316.913574 12)"/> <use xlink:href="#f36-DejaVuSerif-Italic-51" transform="translate(1253.515625 0.96875)"/> </g> </g> </g> </g> <defs> <clipPath id="f36-p63e9a5cb40"> <rect x="5.76" y="22.32" width="206.788235" height="139.721781"/> </clipPath> <clipPath id="f36-pc615731ff4"> <rect x="253.905882" y="22.32" width="206.788235" height="139.721781"/> </clipPath> <clipPath id="f36-pcd9ac0d1ae"> <rect x="502.051765" y="22.32" width="206.788235" height="139.721781"/> </clipPath> </defs> </svg></figure>

**Paralleli.** $\vec{n} \cdot \vec{v} = 0$. Attenzione: in questo caso la retta potrebbe anche essere **contenuta** nel piano. La condizione sui vettori non distingue i due casi, serve un controllo in più su un punto.

**Incidenti.** Hanno un punto in comune. La prof annota: in questo caso $\vec{n} \cdot \vec{v} \neq 0$. Vale quando il punto in comune è uno solo: una retta contenuta nel piano ha infiniti punti in comune, e lì $\vec{n} \cdot \vec{v} = 0$.

**Perpendicolari (o ortogonali).** $\vec{n}$ e $\vec{v}$ sono proporzionali: la retta buca il piano andando esattamente nella direzione della normale.

## Enunciati

### Riassunto dei criteri

> [!abstract] Tutti i criteri in una tabella
> | oggetti | paralleli | ortogonali |
> | --- | --- | --- |
> | retta $r$, retta $r'$ | $\vec{v}$, $\vec{w}$ proporzionali | $\vec{v} \cdot \vec{w} = 0$ |
> | piano $\pi$, piano $\pi'$ | $\vec{n}$, $\vec{n}'$ proporzionali | $\vec{n} \cdot \vec{n}' = 0$ |
> | retta $r$, piano $\pi$ | $\vec{n} \cdot \vec{v} = 0$ | $\vec{n}$, $\vec{v}$ proporzionali |

La riga della retta col piano ha le due colonne scambiate rispetto alle altre due. Se ricordi **perché** (il normale dice dove il piano non va), non c'è niente da imparare a memoria.

### Perpendicolarità e incidenza sono indipendenti

> [!warning] Due rette ortogonali non devono toccarsi
> $\vec{v} \cdot \vec{w} = 0$ è una condizione solo sulle direzioni. Le rette possono essere incidenti e ortogonali, oppure sghembe e ortogonali. Rispondere "sono perpendicolari" a una domanda sulla posizione reciproca è incompleto: vanno date entrambe le informazioni.

## Metodo

### Posizione reciproca di due rette

1. Scrivi le **parametriche** di entrambe, con **parametri diversi**: $t$ per una, $s$ per l'altra. Usare $t$ in tutte e due significa imporre che si raggiungano nello stesso "istante", e fa perdere soluzioni.
2. Leggi i direzionali $\vec{v}$ e $\vec{w}$. Sono proporzionali? Se sì, **parallele** (o coincidenti, se un punto di una sta sull'altra) e hai finito.
3. Se no, metti a sistema le tre coordinate: $x_r(t) = x_{r'}(s)$, $y_r(t) = y_{r'}(s)$, $z_r(t) = z_{r'}(s)$. Sono tre equazioni in due incognite.
4. Il sistema ha soluzione? Sì: **incidenti**, e sostituendo ottieni il punto comune. No: **sghembe**.
5. Calcola comunque $\vec{v} \cdot \vec{w}$: se è zero, aggiungi "e ortogonali".

Il punto 3 ha tre equazioni e due incognite, quindi in generale è incompatibile: si ricavano $t$ e $s$ da due equazioni e si **verifica** la terza. Se la terza non torna, il sistema non ha soluzione.

Se una retta è data in cartesiane, conviene sostituire le parametriche dell'altra dentro le sue due equazioni: vengono due equazioni nel solo parametro dell'altra retta.

### Piano che contiene due rette complanari

La prof dà due strade, e la seconda funziona in entrambi i casi.

**Se sono incidenti** in $P$, il piano si scrive subito in parametriche usando $P$, $\vec{v}$, $\vec{w}$.

**In entrambi i casi** (parallele o incidenti) si usa il **fascio di piani**:

1. Scrivi le cartesiane di $r$ e da lì il fascio $\lambda(\ldots) + \mu(\ldots) = 0$ di sostegno $r$.
2. Prendi un punto qualunque di $r'$ che **non stia** su $r$ e imponi il passaggio.
3. Ricava il rapporto fra $\lambda$ e $\mu$, scegli un valore non nullo per uno dei due, semplifica.

È lo stesso metodo del piano che contiene una retta e un punto esterno, visto in [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/): qui il punto esterno lo si pesca su $r'$. L'alternativa del tutor è il piano per tre punti non allineati, due su $r$ e uno su $r'$.

### Posizione reciproca di due piani

1. Leggi le normali dai coefficienti: $\vec{n} = (a,b,c)$ e $\vec{n}' = (a',b',c')$.
2. Proporzionali? **Paralleli** (coincidenti se anche i termini noti stanno nella stessa proporzione). Altrimenti **incidenti** lungo una retta.
3. $\vec{n} \cdot \vec{n}' = 0$? Aggiungi "e ortogonali".

### Piano ortogonale a due piani dati, per un punto

1. Scrivi $\vec{n}'' = (a'', b'', c'')$ incognito e imponi $\vec{n}'' \cdot \vec{n} = 0$ e $\vec{n}'' \cdot \vec{n}' = 0$.
2. Risolvi il sistema di due equazioni in tre incognite: resta un parametro libero, perché la normale è determinata solo a meno di un fattore.
3. Scegli un valore comodo per il parametro (di solito $1$) e ottieni $\vec{n}''$.
4. Scrivi $a''x + b''y + c''z + d'' = 0$ e ricava $d''$ imponendo il passaggio per il punto.

Il sistema ha meno equazioni che incognite **di proposito**: ogni multiplo di $\vec{n}''$ è ancora una normale dello stesso piano, quindi la soluzione non può essere unica.

### Posizione reciproca di retta e piano

1. Se la retta è data in cartesiane, ricava prima le **parametriche** per avere $\vec{v}$: poni uguale a $t$ una delle variabili e ricava le altre due.
2. Calcola $\vec{n} \cdot \vec{v}$.
3. Se è zero, la retta è **parallela** al piano. Prendi un punto di $r$ e controlla se soddisfa l'equazione di $\pi$: se sì la retta è **contenuta** nel piano, se no sono parallele e disgiunte.
4. Se non è zero, sono **incidenti**. Il punto comune si trova sostituendo le parametriche nell'equazione cartesiana del piano e ricavando $t$.
5. $\vec{n}$ e $\vec{v}$ proporzionali? Allora sono anche **ortogonali**.

### Retta per un punto, ortogonale e incidente a una retta data

1. Scrivi il punto generico $Q(t)$ della retta data $r'$, con direzionale $\vec{w}$.
2. Imponi $\overrightarrow{Q(t)P} \cdot \vec{w} = 0$ e ricava $t_0$.
3. $Q(t_0)$ è il punto d'incidenza, e $\overrightarrow{Q(t_0)P}$ è il direzionale della retta cercata.
4. **Verifica**: il direzionale trovato ha prodotto scalare nullo con $\vec{w}$, e $Q(t_0)$ soddisfa le equazioni di $r'$.

È lo stesso conto del piede della perpendicolare nella distanza punto-retta ([Distanze nello spazio](/uni/gal/distanze-nello-spazio/)): la retta cercata è quella che unisce $P$ al piede.

## Esempi svolti a lezione

> [!example]- Prof, L3, appunti p. 17-18: $r$ per $P(1,1,0)$ con $\vec{v} = (1,1,1)$, $r'$ per $Q(2,0,1)$ con $\vec{w} = (1,0,-1)$
> **Parametriche, con parametri diversi** (la prof lo sottolinea col triangolo di pericolo).
> $$
> r : \begin{cases} x = 1 + t \\ y = 1 + t \\ z = t \end{cases} \qquad r' : \begin{cases} x = 2 + s \\ y = 0 \\ z = 1 - s \end{cases}
> $$
>
> **Parallele?** $\vec{v} = (1,1,1)$ e $\vec{w} = (1,0,-1)$ non sono proporzionali: la seconda coordinata di $\vec{w}$ è nulla e quella di $\vec{v}$ no. Quindi no.
>
> **Incidenti?** Sistema:
> $$
> \begin{cases} 1 + t = 2 + s \\ 1 + t = 0 \\ t = 1 - s \end{cases}
> $$
> Dalla seconda $t = -1$. Sostituendo nella terza, $-1 = 1 - s$, cioè $s = 2$. Verifico nella prima: $1 + (-1) = 0$ a sinistra, $2 + 2 = 4$ a destra. $0 \neq 4$, il sistema non ha soluzione.
>
> **Conclusione:** non parallele e non incidenti, quindi **sghembe**.
>
> **Ortogonali?**
> $$
> \vec{v} \cdot \vec{w} = 1 \cdot 1 + 1 \cdot 0 + 1 \cdot (-1) = 0
> $$
> Sì. Le due rette sono **sghembe e ortogonali**.

> [!example]- Prof, L3, appunti p. 18, svolto dal tutor (esercitazione 1, es. 2): $r$ per $A(2,0,2)$ e $B(0,2,4)$, $r'$ per $C(-2,0,1)$ e $D(-1,-1,0)$. Sono complanari? Trova il piano che le contiene.
> La prof l'ha lasciato come esercizio, il tutor l'ha svolto col fascio.
>
> **1) Complanari?** Guardo i direzionali:
> $$
> \vec{v} = \overrightarrow{AB} = (-2, 2, 2) \qquad \vec{w} = \overrightarrow{CD} = (-1-(-2),\ -1-0,\ 0-1) = (1, -1, -1)
> $$
> $\vec{v} = -2\,\vec{w}$: proporzionali, quindi $r$ e $r'$ sono **parallele**, dunque **complanari**. Sono anche distinte: $C$ non sta su $r$ (lo si vede sotto, $C$ non soddisfa la prima cartesiana di $r$).
>
> **2) Il piano, col fascio.** Servono le cartesiane di $r$. Parametriche da $A$ con $\vec{v}$:
> $$
> r : \begin{cases} x = 2 - 2t \\ y = 2t \\ z = 2 + 2t \end{cases}
> $$
> Sostituisco $2t = y$: $x = 2 - y$ e $z = 2 + y$, cioè
> $$
> r : \begin{cases} x + y - 2 = 0 \\ y - z + 2 = 0 \end{cases}
> $$
> Fascio di sostegno $r$:
> $$
> \lambda(x + y - 2) + \mu(y - z + 2) = 0
> $$
> Impongo il passaggio per $C = (-2, 0, 1) \in r'$, che non sta su $r$ perché $-2 + 0 - 2 = -4 \neq 0$:
> $$
> \lambda(-2 + 0 - 2) + \mu(0 - 1 + 2) = -4\lambda + \mu = 0 \quad\Longrightarrow\quad \mu = 4\lambda
> $$
> Con $\lambda = 1$, $\mu = 4$:
> $$
> (x + y - 2) + 4(y - z + 2) = 0 \quad\Longrightarrow\quad \pi : x + 5y - 4z + 6 = 0
> $$
>
> **Verifica sui quattro punti.** $A$: $2 + 0 - 8 + 6 = 0$. $B$: $0 + 10 - 16 + 6 = 0$. $C$: $-2 + 0 - 4 + 6 = 0$. $D$: $-1 - 5 - 0 + 6 = 0$. Tutti e quattro sul piano, quindi le due rette ci stanno dentro.
>
> **Metodo alternativo del tutor: tre punti non allineati.** $A$ e $B$ su $r$, $C$ su $r'$. Con $\vec{v} = \overrightarrow{AB} = (-2, 2, 2)$ e $\vec{u} = \overrightarrow{AC} = (-4, 0, -1)$:
> $$
> \begin{cases} x = 2 - 2t - 4s \\ y = 2t \\ z = 2 + 2t - s \end{cases}
> $$
> Da $2t = y$: $x = 2 - y - 4s$, quindi $s = \frac{2 - x - y}{4}$. Nella terza, $z = 2 + y - \frac{2 - x - y}{4}$; moltiplico per $4$: $4z = 8 + 4y - 2 + x + y$, cioè $x + 5y - 4z + 6 = 0$. Stesso piano.

> [!example]- Prof, L3, appunti p. 19-20: $\pi : x + y - z + 2 = 0$ e $\pi' : x - 2y + z = 0$
> **Normali.** $\vec{n} = (1, 1, -1)$ e $\vec{n}' = (1, -2, 1)$.
>
> **Paralleli?** Dalla prima coordinata il fattore dovrebbe essere $1$, ma allora la seconda darebbe $1 = -2$. Non proporzionali, quindi **incidenti**.
>
> **Ortogonali?**
> $$
> \vec{n} \cdot \vec{n}' = 1 \cdot 1 + 1 \cdot (-2) + (-1) \cdot 1 = -2 \neq 0
> $$
> No. I due piani sono incidenti e non ortogonali.

> [!example]- Prof, L3, appunti p. 20: $\pi''$ per $P(1,1,0)$, ortogonale a $\pi : x+y-z+2=0$ e $\pi' : x-2y+z=0$
> **Condizioni sulla normale.**
> $$
> \begin{cases} \vec{n}'' \cdot \vec{n} = 0 \\ \vec{n}'' \cdot \vec{n}' = 0 \end{cases} \quad\Longrightarrow\quad \begin{cases} a'' + b'' - c'' = 0 \\ a'' - 2b'' + c'' = 0 \end{cases}
> $$
>
> **Risolvo** (la prof omette i passaggi). Sommando le due equazioni: $2a'' - b'' = 0$, cioè $b'' = 2a''$. Dalla prima: $c'' = a'' + b'' = 3a''$.
>
> **Scelgo** $a'' = 1$, quindi $\vec{n}'' = (1, 2, 3)$ e $\pi'' : x + 2y + 3z + d'' = 0$.
>
> **Passaggio per $P(1,1,0)$.** $1 + 2 + 0 + d'' = 0$, quindi $d'' = -3$:
> $$
> \pi'' : x + 2y + 3z - 3 = 0
> $$
>
> **Verifica.** $\vec{n}'' \cdot \vec{n} = 1 + 2 - 3 = 0$ e $\vec{n}'' \cdot \vec{n}' = 1 - 4 + 3 = 0$. $P$: $1 + 2 + 0 - 3 = 0$.

> [!example]- Prof, L3, appunti p. 21: $\pi : x + y - 2z + 3 = 0$ e $r : x = 2+t,\ y = t,\ z = 3-2t$
> **Vettori.** $\vec{n} = (1, 1, -2)$ e $\vec{v} = (1, 1, -2)$.
>
> I due vettori sono uguali, quindi proporzionali: la retta è **perpendicolare** al piano (ed è la conclusione della prof). In particolare $\vec{n} \cdot \vec{v} = 1 + 1 + 4 = 6 \neq 0$, quindi sono incidenti.
>
> **Punto d'intersezione** (non richiesto a lezione). Sostituisco le parametriche nell'equazione:
> $$
> (2+t) + t - 2(3-2t) + 3 = 2 + t + t - 6 + 4t + 3 = 6t - 1 = 0 \quad\Longrightarrow\quad t = \tfrac{1}{6}
> $$
> Il punto è $\left(\frac{13}{6}, \frac{1}{6}, \frac{8}{3}\right)$.

> [!example]- Prof, L3, appunti p. 21-22, svolto dal tutor (esercitazione 1, es. 3): $\pi : -x + y - z - 1 = 0$ e $r : \{x + y = 0,\ y - z - 1 = 0\}$
> La prof l'ha lasciato come esercizio, il tutor l'ha svolto.
>
> **Normale.** $\vec{n} = (-1, 1, -1)$.
>
> **Parametriche di $r$.** Pongo $y = t$. Dalla prima $x = -t$, dalla seconda $z = t - 1$:
> $$
> r : \begin{cases} x = -t \\ y = t \\ z = -1 + t \end{cases} \qquad \vec{v} = (-1, 1, 1), \quad A = (0, 0, -1)
> $$
>
> **Prodotto scalare.**
> $$
> \vec{v} \cdot \vec{n} = (-1)(-1) + (1)(1) + (1)(-1) = 1 + 1 - 1 = 1 \neq 0
> $$
> Non paralleli, quindi **incidenti**.
>
> **Ortogonali?** No, perché $\vec{v} = (-1,1,1)$ e $\vec{n} = (-1,1,-1)$ non sono proporzionali: le prime due coordinate darebbero fattore $1$, la terza $-1$.
>
> **Punto d'intersezione** (il tutor si ferma prima). Sostituisco nell'equazione di $\pi$:
> $$
> -(-t) + t - (-1 + t) - 1 = t + t + 1 - t - 1 = t = 0
> $$
> Il punto è $A = (0, 0, -1)$. Verifica: in $\pi$, $0 + 0 + 1 - 1 = 0$; in $r$, $0 + 0 = 0$ e $0 + 1 - 1 = 0$.

> [!example]- Tutor, esercitazione 1, es. 4: retta $r$ per $P(0,-2,1)$, ortogonale e incidente a $r' : \{2x - y + 3 = 0,\ x + z - 2 = 0\}$
> **Parametriche di $r'$.** Pongo $z = t$. Dalla seconda $x = 2 - t$, dalla prima $y = 2x + 3 = 7 - 2t$:
> $$
> r' : \begin{cases} x = 2 - t \\ y = 7 - 2t \\ z = t \end{cases} \qquad \vec{w} = (-1, -2, 1)
> $$
>
> **Punto generico** $Q(t) = (2 - t,\ 7 - 2t,\ t)$. La retta cercata unisce $P$ a un punto di $r'$ (incidente) e deve essere ortogonale a $\vec{w}$:
> $$
> \overrightarrow{Q(t)P} = (0 - (2 - t),\ -2 - (7 - 2t),\ 1 - t) = (-2 + t,\ -9 + 2t,\ 1 - t)
> $$
> $$
> \overrightarrow{Q(t)P} \cdot \vec{w} = -(-2 + t) - 2(-9 + 2t) + (1 - t) = 2 - t + 18 - 4t + 1 - t = 21 - 6t = 0
> $$
> quindi $t_0 = \frac{21}{6} = \frac{7}{2}$.
>
> **Direzionale di $r$.** $Q\!\left(\frac{7}{2}\right) = \left(-\frac{3}{2}, 0, \frac{7}{2}\right)$, e
> $$
> \overrightarrow{Q(t_0)P} = \left(\frac{3}{2},\ -2,\ -\frac{5}{2}\right)
> $$
> Parametriche di $r$ partendo da $P$:
> $$
> r : \begin{cases} x = \frac{3}{2}s \\ y = -2 - 2s \\ z = 1 - \frac{5}{2}s \end{cases}
> $$
>
> **Verifica.** Ortogonalità: $\left(\frac{3}{2}, -2, -\frac{5}{2}\right) \cdot (-1, -2, 1) = -\frac{3}{2} + 4 - \frac{5}{2} = 0$. Il punto $Q(t_0)$ sta su $r'$: $2\left(-\frac{3}{2}\right) - 0 + 3 = 0$ e $-\frac{3}{2} + \frac{7}{2} - 2 = 0$. E sta su $r$ per $s = -1$: $\left(-\frac{3}{2}, 0, \frac{7}{2}\right)$. Moltiplicando il direzionale per $2$ si ottiene $(3, -4, -5)$, più comodo: è la stessa retta.

> [!example]- Dispensa, Esempio 9: $\pi : x+y+z-1=0$ e $r : \{x + 2y = 0,\ y - z = 0\}$
> Non fatto a lezione, utile per il caso parallelo.
>
> **Dalle cartesiane alle parametriche.** Pongo $y = t$. Dalla seconda $z = t$, dalla prima $x = -2t$:
> $$
> r : \begin{cases} x = -2t \\ y = t \\ z = t \end{cases} \qquad \vec{v} = (-2, 1, 1)
> $$
>
> **Prodotto scalare.** $\vec{n} = (1,1,1)$, quindi $\vec{n} \cdot \vec{v} = -2 + 1 + 1 = 0$: **paralleli**.
>
> **Contenuta o disgiunta?** Il punto $A = (0,0,0)$ sta su $r$ (parametro $t = 0$). Sostituisco in $\pi$: $0 + 0 + 0 - 1 = -1 \neq 0$, quindi $A$ non sta sul piano. La retta è **parallela e disgiunta** dal piano.

## Esercizi tipo esame

**Esercizio 1.** Siano
$$
r : \begin{cases} x = 1 + t \\ y = -t \\ z = 2t \end{cases} \qquad s : \begin{cases} x - 2 = 0 \\ y - z + 3 = 0 \end{cases}
$$

- a) Determina la posizione reciproca di $r$ e $s$.
- b) Se sono complanari, trova un'equazione cartesiana del piano che le contiene.
- c) Trova le parametriche della retta per $O = (0,0,0)$ ortogonale a $r$ e a $s$.

> [!example]- Soluzione
> **Direzionali.** $\vec{v} = (1, -1, 2)$. Per $s$ pongo $z = u$: $x = 2$, $y = u - 3$, quindi $s : (2,\ -3 + u,\ u)$ e $\vec{w} = (0, 1, 1)$. Non proporzionali (la prima coordinata di $\vec{w}$ è $0$, quella di $\vec{v}$ no): **non parallele**.
>
> **a) Incidenti?** Sostituisco le parametriche di $r$ nelle cartesiane di $s$:
> $$
> \begin{cases} (1 + t) - 2 = 0 \\ -t - 2t + 3 = 0 \end{cases} \quad\Longrightarrow\quad \begin{cases} t = 1 \\ t = 1 \end{cases}
> $$
> Le due equazioni danno lo stesso $t$: **incidenti** nel punto $r(1) = (2, -1, 2)$. Controllo in $s$: $2 - 2 = 0$ e $-1 - 2 + 3 = 0$. Ortogonali? $\vec{v} \cdot \vec{w} = 0 - 1 + 2 = 1 \neq 0$, no.
>
> **b)** Incidenti, quindi complanari. Fascio di sostegno $s$: $\lambda(x - 2) + \mu(y - z + 3) = 0$. Prendo un punto di $r$ che non sta su $s$: $r(0) = (1, 0, 0)$, e infatti $1 - 2 \neq 0$. Passaggio:
> $$
> \lambda(1 - 2) + \mu(0 - 0 + 3) = -\lambda + 3\mu = 0 \quad\Longrightarrow\quad \lambda = 3\mu
> $$
> Con $\mu = 1$, $\lambda = 3$: $3(x - 2) + (y - z + 3) = 0$, cioè
> $$
> 3x + y - z - 3 = 0
> $$
> Verifica: $(1,0,0)$ dà $3 - 3 = 0$; il punto d'incidenza $(2,-1,2)$ dà $6 - 1 - 2 - 3 = 0$; $\vec{n} = (3,1,-1)$ ha $\vec{n} \cdot \vec{v} = 3 - 1 - 2 = 0$ e $\vec{n} \cdot \vec{w} = 0 + 1 - 1 = 0$.
>
> **c)** Direzione incognita $\vec{u} = (a, b, c)$ con
> $$
> \begin{cases} a - b + 2c = 0 \\ b + c = 0 \end{cases}
> $$
> Dalla seconda $b = -c$; nella prima $a + c + 2c = 0$, quindi $a = -3c$. Con $c = 1$: $\vec{u} = (-3, -1, 1)$.
> $$
> \begin{cases} x = -3k \\ y = -k \\ z = k \end{cases}
> $$
> Controllo: $\vec{u} = -(3, 1, -1)$ è proporzionale alla normale del piano di b), come deve essere: una direzione ortogonale a due rette che stanno in un piano è ortogonale al piano.

**Esercizio 2.** Siano $\pi : x + y - z + k = 0$, con $k \in \mathbb{R}$, e $r : (2t,\ 1 - t,\ 3 + t)$. Per quali $k$ la retta è contenuta nel piano? Com'è la posizione reciproca per gli altri valori?

> [!example]- Soluzione
> $\vec{n} = (1, 1, -1)$ e $\vec{v} = (2, -1, 1)$. $\vec{n} \cdot \vec{v} = 2 - 1 - 1 = 0$: retta e piano sono **paralleli** per ogni $k$. Resta da capire se la retta sta dentro.
>
> Prendo il punto $A = (0, 1, 3)$ di $r$ ($t = 0$) e lo sostituisco: $0 + 1 - 3 + k = 0$, cioè $k = 2$.
> - $k = 2$: $A$ sta sul piano e la retta è parallela, quindi **$r \subset \pi$**. Controllo con un secondo punto, $t = 1$: $(2, 0, 4)$ dà $2 + 0 - 4 + 2 = 0$.
> - $k \neq 2$: **paralleli e disgiunti**.
>
> Il parametro $k$ sposta il piano parallelamente a sé stesso, e c'è una sola posizione in cui ingoia la retta.

**Esercizio 3.** Siano $\pi : 2x - y + z - 1 = 0$ e $\pi' : x + y - z + 4 = 0$.

- a) Determina la posizione reciproca.
- b) Trova le parametriche della retta $\pi \cap \pi'$.
- c) Trova il piano per l'origine ortogonale a entrambi.

> [!example]- Soluzione
> **a)** $\vec{n} = (2, -1, 1)$ e $\vec{n}' = (1, 1, -1)$ non sono proporzionali (fattore $\frac{1}{2}$ dalla prima coordinata, $-1$ dalla seconda): **incidenti**. $\vec{n} \cdot \vec{n}' = 2 - 1 - 1 = 0$: anche **ortogonali**.
>
> **b)** Pongo $z = t$ e risolvo in $x, y$:
> $$
> \begin{cases} 2x - y = 1 - t \\ x + y = -4 + t \end{cases}
> $$
> Sommando: $3x = -3$, quindi $x = -1$; poi $y = -4 + t + 1 = -3 + t$.
> $$
> \pi \cap \pi' : \begin{cases} x = -1 \\ y = -3 + t \\ z = t \end{cases} \qquad \vec{v} = (0, 1, 1)
> $$
> Verifica: in $\pi$, $-2 - (-3 + t) + t - 1 = 0$; in $\pi'$, $-1 + (-3 + t) - t + 4 = 0$.
>
> **c)** La normale $\vec{n}''$ deve essere ortogonale a $\vec{n}$ e a $\vec{n}'$: $2a - b + c = 0$ e $a + b - c = 0$. Sommando $3a = 0$, quindi $a = 0$ e $b = c$. Con $b = 1$: $\vec{n}'' = (0, 1, 1)$. Per l'origine $d'' = 0$:
> $$
> y + z = 0
> $$
> $\vec{n}''$ coincide col direzionale di b): il piano ortogonale a due piani è ortogonale alla loro retta d'intersezione.

**Esercizio 4.** Trova la retta per $P = (2, 0, 1)$ ortogonale e incidente a $r : \{x + y - 1 = 0,\ z - 2y = 0\}$.

> [!example]- Soluzione
> **Parametriche di $r$.** Pongo $y = t$: $x = 1 - t$, $z = 2t$. $Q(t) = (1 - t,\ t,\ 2t)$, $\vec{w} = (-1, 1, 2)$. $P$ non sta su $r$: $2 + 0 - 1 \neq 0$.
>
> **Ortogonalità.**
> $$
> \overrightarrow{Q(t)P} = (2 - 1 + t,\ 0 - t,\ 1 - 2t) = (1 + t,\ -t,\ 1 - 2t)
> $$
> $$
> \overrightarrow{Q(t)P} \cdot \vec{w} = -(1 + t) - t + 2(1 - 2t) = 1 - 6t = 0 \quad\Longrightarrow\quad t_0 = \frac{1}{6}
> $$
>
> **Direzionale.** $Q(t_0) = \left(\frac{5}{6}, \frac{1}{6}, \frac{1}{3}\right)$ e $\overrightarrow{Q(t_0)P} = \left(\frac{7}{6}, -\frac{1}{6}, \frac{2}{3}\right)$. Moltiplico per $6$: $(7, -1, 4)$.
> $$
> \begin{cases} x = 2 + 7k \\ y = -k \\ z = 1 + 4k \end{cases}
> $$
> **Verifica.** $(7, -1, 4) \cdot (-1, 1, 2) = -7 - 1 + 8 = 0$. $Q(t_0)$ sta su $r$: $\frac{5}{6} + \frac{1}{6} - 1 = 0$ e $\frac{1}{3} - \frac{2}{6} = 0$.

## Errori tipici

- Usare lo stesso parametro per le due rette nel sistema d'incidenza.
- Risolvere il sistema d'incidenza con due equazioni su tre e dimenticare di verificare la terza.
- Scambiare le condizioni per retta e piano: "parallela" è $\vec{n} \cdot \vec{v} = 0$, "perpendicolare" è la proporzionalità.
- Dire "parallela al piano" da $\vec{n} \cdot \vec{v} = 0$ senza controllare un punto: può essere contenuta.
- Rispondere solo "perpendicolari" a una domanda sulla posizione reciproca di due rette: va detto anche se sono incidenti o sghembe.
- Nel fascio per il piano di due rette, prendere su $r'$ un punto che sta anche su $r$ (per esempio il punto d'incidenza): esce $0 = 0$.
- Leggere la proporzionalità "a occhio" quando un vettore ha una coordinata nulla e l'altro no: non possono essere proporzionali.

## Domande

- Elenca i tre casi di posizione reciproca di due rette distinte nello spazio.

- Perché il caso "sghembe" non esiste nel piano?

- Due rette ortogonali devono per forza toccarsi? Fai un esempio.

- Quando due rette sono complanari? Che rapporto c'è fra "complanari" e "sghembe"?

- Perché nel sistema che cerca il punto comune fra due rette bisogna usare due parametri diversi?

- Il sistema per l'incidenza ha tre equazioni e due incognite. Come lo risolvi in pratica?

- Quando due piani sono paralleli? E ortogonali?

- Due piani distinti che si intersecano: cosa hanno in comune, un punto o una retta?

- Perché due piani ortogonali sono sempre incidenti?

- Quando una retta è parallela a un piano? Scrivi la condizione e spiegala a parole.

- La condizione $\vec{n} \cdot \vec{v} = 0$ basta per dire che la retta non tocca il piano? Cosa manca?

- Quando una retta è ortogonale a un piano?

- Perché la riga "retta e piano" della tabella ha le colonne scambiate rispetto alle altre due?

- Come si trova il piano che contiene due rette parallele distinte?

- Cercando la normale ortogonale a due normali date, il sistema ha due equazioni e tre incognite. Perché va bene così?

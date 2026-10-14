---
title: Generatori
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-10-13
lezioni: []
ordine: 12
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L7, mar 13/10, seconda parte del capitolo 4. Fonte: appunti della prof, <span class="src">13/10, p. 6</span> (sottospazio generato, finitamente generato), <span class="src">p. 7</span> ($\mathbb{R}^2$ e $\mathbb{R}^n$, criterio col rango), <span class="src">p. 8</span> (due esempi in $\mathbb{R}^3$), <span class="src">p. 9</span> (spazio delle righe e delle colonne). Nel quaderno (p. 71) c'è solo il titolo "Generatori": il contenuto viene dagli appunti della prof, e il <span class="src">piano</span> mette i generatori nella L7. Prima: [Spazi vettoriali](/uni/gal/spazi-vettoriali/) (combinazioni lineari e sottospazi). Il calcolo passa da [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).

> [!abstract] Per l'esame
> - **Saper enunciare**: sottospazio generato $\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$ (o $\langle \vec{v}_1, \ldots, \vec{v}_k \rangle$); spazio finitamente generato; sistema di generatori; il criterio “$\{\vec{v}_1, \ldots, \vec{v}_k\}$ genera $\mathbb{R}^n$ se e solo se $\operatorname{rg}[\vec{v}_1 \mid \cdots \mid \vec{v}_k] = n$"; spazio delle righe $R(A)$ e delle colonne $C(A)$.
> - **Saper dimostrare**: che $\{\vec{e}_1, \ldots, \vec{e}_n\}$ genera $\mathbb{R}^n$; che $\mathrm{Span}$ è un sottospazio; perché servono almeno $n$ vettori per generare $\mathbb{R}^n$.
> - **Saper fare**: decidere col rango se dei vettori generano $\mathbb{R}^n$, anche con un parametro; decidere se un vettore sta in uno $\mathrm{Span}$ e trovare i coefficienti; quando non generano, scrivere l'equazione di quello che generano (una retta o un piano per l'origine).
> - **Dove esce**: è il ponte fra matrici e spazi vettoriali, e prepara dipendenza lineare e basi (L8, 19/10). Un esercizio "per quali $k$ questi vettori generano $\mathbb{R}^3$?" è dello stesso tipo di "per quali $k$ la matrice è invertibile?": rango con parametro.

**L'idea.** In [Spazi vettoriali](/uni/gal/spazi-vettoriali/) si è visto che, presi dei vettori, le loro combinazioni lineari restano nello spazio. Ora si guarda l'insieme di **tutte** quelle combinazioni: è il pezzo di spazio che quei vettori "raggiungono". Un vettore solo raggiunge una retta per l'origine, due vettori non paralleli un piano per l'origine. La domanda chiave è: questi vettori raggiungono **tutto** lo spazio? In $\mathbb{R}^n$ si risponde con un rango.

```
Span(v1, ..., vk)     = { tutte le λ1 v1 + ... + λk vk }    sottospazio di V
V = Span(v1, ..., vk) => {v1, ..., vk} sistema di generatori, V finitamente generato
in R^n:  A = [v1 | ... | vk]  (n×k)
         b ∈ Span(v1,...,vk)  <=>  A λ = b compatibile
         {v1,...,vk} genera R^n  <=>  rg(A) = n      (serve k ≥ n)
```

## Definizioni

### Sottospazio generato

La prof (<span class="src">p. 6</span>): sia $V$ uno spazio vettoriale reale. Dati $\vec{v}_1, \ldots, \vec{v}_k \in V$, l'insieme dato da tutte le combinazioni lineari di $\vec{v}_1, \ldots, \vec{v}_k$ è detto **sottospazio generato** da $\vec{v}_1, \ldots, \vec{v}_k$.

Notazione: $\langle \vec{v}_1, \ldots, \vec{v}_k \rangle$ oppure $\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$.
$$
\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k) = \{\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k : \lambda_1, \ldots, \lambda_k \in \mathbb{R}\} \subseteq V
$$

**In parole.** Si fissano i vettori e si lasciano liberi i coefficienti: ogni scelta di $\lambda_1, \ldots, \lambda_k$ dà un punto dello Span. Il nome "sottospazio" è giustificato dall'enunciato qui sotto: lo Span è sempre un sottospazio.

<figure class="fig"><svg role="img" aria-label="span in R3" xmlns:xlink="http://www.w3.org/1999/xlink" width="609.418313pt" height="282.424pt" viewBox="0 0 609.418313 282.424" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f65-figure_1"> <g id="f65-patch_1"> <path d="M 0 282.424 L 609.418313 282.424 L 609.418313 0 L 0 0 L 0 282.424 z " style="fill: none"/> </g> <g id="f65-axes_1"> <g id="f65-line2d_1"> <path d="M 64.833997 243.610895 L 154.783403 141.505326 " clip-path="url(#f65-p997c4f8dbc)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f65-patch_2"> <path d="M 100.813759 202.768667 Q 65.525303 227.47791 31.335855 251.41762 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 35.759616 250.761618 L 31.335855 251.41762 L 33.46531 247.48501 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f65-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(16.506717 262.583778) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f65-patch_3"> <path d="M 100.813759 202.768667 Q 179.139669 202.768667 256.123939 202.768667 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 252.123939 200.768667 L 256.123939 202.768667 L 252.123939 204.768667 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f65-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(265.999003 206.14562) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f65-patch_4"> <path d="M 100.813759 202.768667 Q 100.813759 124.442757 100.813759 47.458488 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 98.813759 51.458488 L 100.813759 47.458488 L 102.813759 51.458488 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f65-text_3"> <!-- $z$ --> <g style="fill: var(--fig-axis)" transform="translate(97.368759 37.255377) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-Italic-5d" transform="translate(0 0.5625)"/> </g> </g> <g id="f65-patch_5"> <path d="M 100.813759 202.768667 Q 112.057435 190.005471 121.231768 179.591279 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 115.429001 181.942427 L 121.231768 179.591279 L 119.631026 185.644181 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="f65-text_4"> <!-- $\vec{v}$ --> <g style="fill: var(--fig-ink)" transform="translate(102.462318 173.927697) scale(0.13 -0.13)"> <defs> <path id="f65-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f65-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> </g> </g> <g id="f65-patch_6"> <path d="M 100.813759 202.768667 Q 89.570083 215.531863 79.508889 226.952771 " style="fill: none; stroke-dasharray: 6.4,4.8; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 84.068206 225.105441 L 79.508889 226.952771 L 80.766615 222.19692 z " style="fill: var(--fig-axis); stroke-dasharray: 6.4,4.8; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f65-text_5"> <!-- $-\vec{v}$ --> <g style="fill: var(--fig-axis)" transform="translate(87.0002 236.909022) scale(0.12 -0.12)"> <defs> <path id="f65-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-8cf" transform="translate(0 0.390625)"/> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(142.209473 10)"/> <use xlink:href="#f65-DejaVuSerif-Italic-59" transform="translate(83.789062 0.390625)"/> </g> </g> <g id="f65-text_6"> <!-- $\mathrm{Span}(\vec{v})$ --> <g style="fill: var(--fig-steel)" transform="translate(139.094142 128.40001) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-36" d="M 594 225 L 594 1288 L 953 1284 Q 969 753 1261 498 Q 1553 244 2150 244 Q 2706 244 2998 464 Q 3291 684 3291 1106 Q 3291 1444 3114 1625 Q 2938 1806 2369 1978 L 1753 2163 Q 1084 2366 811 2669 Q 538 2972 538 3500 Q 538 4094 959 4422 Q 1381 4750 2144 4750 Q 2469 4750 2856 4679 Q 3244 4609 3681 4475 L 3681 3481 L 3328 3481 Q 3275 3975 2998 4195 Q 2722 4416 2156 4416 Q 1663 4416 1405 4214 Q 1147 4013 1147 3628 Q 1147 3294 1340 3103 Q 1534 2913 2163 2725 L 2741 2553 Q 3375 2363 3645 2067 Q 3916 1772 3916 1275 Q 3916 597 3481 253 Q 3047 -91 2188 -91 Q 1803 -91 1404 -12 Q 1006 66 594 225 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-36" transform="translate(0 0.390625)"/> <use xlink:href="#f65-DejaVuSerif-53" transform="translate(68.505859 0.390625)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(132.519531 0.390625)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(192.138672 0.390625)"/> <use xlink:href="#f65-DejaVuSerif-b" transform="translate(256.542969 0.390625)"/> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(353.977051 10)"/> <use xlink:href="#f65-DejaVuSerif-Italic-59" transform="translate(295.556641 0.390625)"/> <use xlink:href="#f65-DejaVuSerif-c" transform="translate(352.050781 0.390625)"/> </g> </g> <g id="f65-text_7"> <!-- un vettore: una retta per $O$ --> <g style="fill: var(--fig-ink)" transform="translate(54.541213 15.64) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-Italic-32" d="M 2219 244 Q 2984 244 3478 770 Q 3972 1297 4172 2328 Q 4372 3363 4084 3889 Q 3797 4416 3031 4416 Q 2263 4416 1769 3889 Q 1275 3363 1075 2328 Q 875 1297 1162 770 Q 1450 244 2219 244 z M 2153 -91 Q 1678 -91 1311 65 Q 944 222 700 525 Q 419 875 334 1319 Q 250 1763 359 2328 Q 469 2894 725 3339 Q 981 3784 1400 4134 Q 1766 4441 2191 4595 Q 2616 4750 3097 4750 Q 4113 4750 4608 4084 Q 5103 3419 4891 2328 Q 4781 1769 4522 1320 Q 4263 872 3847 525 Q 3481 219 3056 64 Q 2631 -91 2153 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-58" transform="translate(0 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(64.404297 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(128.808594 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-59" transform="translate(160.595703 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(217.089844 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-57" transform="translate(276.269531 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-57" transform="translate(316.455078 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-52" transform="translate(356.640625 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-55" transform="translate(416.845703 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(464.648438 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-1d" transform="translate(523.828125 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(557.519531 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-58" transform="translate(589.306641 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(653.710938 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(718.115234 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(777.734375 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-55" transform="translate(809.521484 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(857.324219 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-57" transform="translate(916.503906 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-57" transform="translate(956.689453 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(996.875 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(1056.494141 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-53" transform="translate(1088.28125 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(1152.294922 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-55" transform="translate(1211.474609 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(1259.277344 0.78125)"/> <use xlink:href="#f65-DejaVuSerif-Italic-32" transform="translate(1291.064453 0.78125)"/> </g> </g> </g> <g id="f65-axes_2"> <g id="f65-patch_7"> <path d="M 400.703454 153.98532 L 333.524525 201.024513 L 515.769704 201.024513 L 582.948633 153.98532 z " clip-path="url(#f65-p140398eae8)" style="fill: var(--fig-steel); opacity: 0.16"/> </g> <g id="f65-line2d_2"> <path d="M 400.703454 153.98532 L 333.524525 201.024513 L 515.769704 201.024513 L 582.948633 153.98532 L 400.703454 153.98532 " clip-path="url(#f65-p140398eae8)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f65-patch_8"> <path d="M 437.117126 174.891628 Q 407.259824 195.797936 378.50153 215.93471 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 382.925291 215.278709 L 378.50153 215.93471 L 380.630985 212.002101 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f65-text_8"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(365.215334 226.020489) scale(0.13 -0.13)"> <use xlink:href="#f65-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f65-patch_9"> <path d="M 437.117126 174.891628 Q 503.388101 174.891628 568.317434 174.891628 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 564.317434 172.891628 L 568.317434 174.891628 L 564.317434 176.891628 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f65-text_9"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(576.308915 178.268581) scale(0.13 -0.13)"> <use xlink:href="#f65-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f65-patch_10"> <path d="M 437.117126 174.891628 Q 437.117126 108.620654 437.117126 43.69132 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 435.117126 47.69132 L 437.117126 43.69132 L 439.117126 47.69132 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f65-text_10"> <!-- $z$ --> <g style="fill: var(--fig-axis)" transform="translate(433.672126 35.371793) scale(0.13 -0.13)"> <use xlink:href="#f65-DejaVuSerif-Italic-5d" transform="translate(0 0.5625)"/> </g> </g> <g id="f65-patch_11"> <path d="M 437.117126 174.891628 Q 427.78672 181.424849 421.020664 186.162492 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 427.21393 185.24409 L 421.020664 186.162492 L 424.001902 180.656838 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="f65-patch_12"> <path d="M 437.117126 174.891628 Q 457.826806 174.891628 475.40599 174.891628 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 469.80599 172.091628 L 475.40599 174.891628 L 469.80599 177.691628 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="f65-patch_13"> <path d="M 437.117126 174.891628 Q 437.117126 154.181948 437.117126 136.602764 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 434.317126 142.202764 L 437.117126 136.602764 L 439.917126 142.202764 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="f65-text_11"> <!-- $\vec{e}_1$ --> <g style="fill: var(--fig-ink)" transform="translate(423.86212 196.258483) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(60.091797 12)"/> <use xlink:href="#f65-DejaVuSerif-Italic-48" transform="translate(0 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-14" transform="translate(60.088013 -14.031201) scale(0.7)"/> </g> </g> <g id="f65-text_12"> <!-- $\vec{e}_2$ --> <g style="fill: var(--fig-ink)" transform="translate(473.587453 192.304299) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(60.091797 12)"/> <use xlink:href="#f65-DejaVuSerif-Italic-48" transform="translate(0 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-15" transform="translate(60.088013 -14.031201) scale(0.7)"/> </g> </g> <g id="f65-text_13"> <!-- $\vec{e}_3$ --> <g style="fill: var(--fig-accent)" transform="translate(416.842932 135.559778) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(60.091797 12)"/> <use xlink:href="#f65-DejaVuSerif-Italic-48" transform="translate(0 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-16" transform="translate(60.088013 -14.031201) scale(0.7)"/> </g> </g> <g id="f65-text_14"> <!-- $\mathrm{Span}(\vec{e}_1, \vec{e}_2)$ = piano $xy$ --> <g style="fill: var(--fig-steel)" transform="translate(348.402114 236.247509) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-36" transform="translate(0 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-53" transform="translate(68.505859 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(132.519531 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(192.138672 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-b" transform="translate(256.542969 0.96875)"/> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(355.648438 12)"/> <use xlink:href="#f65-DejaVuSerif-Italic-48" transform="translate(295.556641 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-14" transform="translate(355.644653 -14.031201) scale(0.7)"/> <use xlink:href="#f65-DejaVuSerif-f" transform="translate(402.776001 0.96875)"/> <use xlink:href="#f65-STIXGeneral-Regular-350" transform="translate(513.619751 12)"/> <use xlink:href="#f65-DejaVuSerif-Italic-48" transform="translate(453.527954 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-15" transform="translate(513.615967 -14.031201) scale(0.7)"/> <use xlink:href="#f65-DejaVuSerif-c" transform="translate(560.747314 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(599.760986 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-20" transform="translate(631.548096 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(715.337158 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-53" transform="translate(747.124268 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-4c" transform="translate(811.137939 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(843.120361 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(902.739502 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-52" transform="translate(967.143799 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(1027.348877 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-Italic-5b" transform="translate(1059.135986 0.96875)"/> <use xlink:href="#f65-DejaVuSerif-Italic-5c" transform="translate(1115.532471 0.96875)"/> </g> </g> <g id="f65-text_15"> <!-- due vettori non paralleli: un piano per $O$ --> <g style="fill: var(--fig-ink)" transform="translate(324.986579 15.64) scale(0.13 -0.13)"> <defs> <path id="f65-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f65-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f65-DejaVuSerif-47" transform="translate(0 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-58" transform="translate(64.013672 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(128.417969 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(187.597656 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-59" transform="translate(219.384766 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(275.878906 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-57" transform="translate(335.058594 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-57" transform="translate(375.244141 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-52" transform="translate(415.429688 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-55" transform="translate(475.634766 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-4c" transform="translate(523.4375 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(555.419922 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(587.207031 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-52" transform="translate(651.611328 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(711.816406 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(776.220703 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-53" transform="translate(808.007812 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(872.021484 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-55" transform="translate(931.640625 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(979.443359 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-4f" transform="translate(1039.0625 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-4f" transform="translate(1071.044922 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(1103.027344 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-4f" transform="translate(1162.207031 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-4c" transform="translate(1194.189453 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-1d" transform="translate(1226.171875 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(1259.863281 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-58" transform="translate(1291.650391 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(1356.054688 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(1420.458984 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-53" transform="translate(1452.246094 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-4c" transform="translate(1516.259766 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-44" transform="translate(1548.242188 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-51" transform="translate(1607.861328 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-52" transform="translate(1672.265625 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(1732.470703 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-53" transform="translate(1764.257812 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-48" transform="translate(1828.271484 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-55" transform="translate(1887.451172 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-3" transform="translate(1935.253906 0.015625)"/> <use xlink:href="#f65-DejaVuSerif-Italic-32" transform="translate(1967.041016 0.015625)"/> </g> </g> </g> </g> <defs> <clipPath id="f65-p997c4f8dbc"> <rect x="5.76" y="21.64" width="276.182426" height="255.024"/> </clipPath> <clipPath id="f65-p140398eae8"> <rect x="312.814845" y="21.64" width="290.843468" height="255.024"/> </clipPath> </defs> </svg></figure>

**Esempi graduati.**
1. **Un vettore.** $\mathrm{Span}(\vec{v}) = \{\lambda\vec{v} : \lambda \in \mathbb{R}\}$. Se $\vec{v} \neq \vec{0}$ è la retta per l'origine con direzione $\vec{v}$ (figura a sinistra): è la retta parametrica di [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/) con punto di partenza $O$. Se $\vec{v} = \vec{0}$, lo Span è $\{\vec{0}\}$.
2. **Due vettori non paralleli in $\mathbb{R}^3$.** $\mathrm{Span}(\vec{e}_1, \vec{e}_2)$ con $\vec{e}_1 = (1, 0, 0)$, $\vec{e}_2 = (0, 1, 0)$: le combinazioni sono $\lambda_1(1, 0, 0) + \lambda_2(0, 1, 0) = (\lambda_1, \lambda_2, 0)$, cioè tutti e soli i vettori con terza componente nulla. È il **piano $xy$**, di equazione $z = 0$ (figura a destra, è il disegno della prof a p. 8). $\vec{e}_3 = (0, 0, 1)$ ne resta fuori.
3. **Due vettori paralleli.** $\mathrm{Span}((1, 2), (2, 4))$: siccome $(2, 4) = 2(1, 2)$, ogni combinazione $\lambda_1(1, 2) + \lambda_2(2, 4) = (\lambda_1 + 2\lambda_2)(1, 2)$ è un multiplo di $(1, 2)$. Lo Span è la retta $\mathrm{Span}((1, 2))$: il secondo vettore non aggiunge niente.

L'esempio 3 è l'anticipo della L8: aggiungere un vettore che è già combinazione degli altri non allarga lo Span.

### Spazio finitamente generato e sistema di generatori

La prof (p. 6): se $V$ spazio vettoriale reale è tale che $V = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$, allora diciamo che $V$ è **finitamente generato** e $\{\vec{v}_1, \ldots, \vec{v}_k\}$ è detto **insieme di generatori** (o **sistema di generatori**) di $V$.

**In parole.** Un sistema di generatori è una lista **finita** di vettori da cui si ottiene **ogni** vettore di $V$ come combinazione lineare. "Finitamente generato" vuol dire che una lista così esiste.

**Esempio della prof** (<span class="src">p. 7</span>). In $V = \mathbb{R}^2$, $\vec{e}_1 = (1, 0)$, $\vec{e}_2 = (0, 1)$. Il vettore $\vec{v} = (3, 4)$ si scrive $\vec{v} = 3\vec{e}_1 + 4\vec{e}_2$: infatti $3(1, 0) + 4(0, 1) = (3, 0) + (0, 4) = (3, 4)$. Lo stesso vale per ogni $(a, b) = a\vec{e}_1 + b\vec{e}_2$. Quindi $\mathbb{R}^2$ è finitamente generato e $\{\vec{e}_1, \vec{e}_2\}$ è un sistema di generatori.

**In generale** (la prof, p. 7): in $V = \mathbb{R}^n$ siano
$$
\vec{e}_1 = (1, 0, \ldots, 0),\quad \vec{e}_2 = (0, 1, 0, \ldots, 0),\quad \ldots,\quad \vec{e}_n = (0, \ldots, 0, 1)
$$
$\mathbb{R}^n$ è finitamente generato e $\{\vec{e}_1, \ldots, \vec{e}_n\}$ è un sistema di generatori. Infatti ogni $\vec{v} = (v_1, \ldots, v_n) \in \mathbb{R}^n$ è combinazione lineare di $\{\vec{e}_1, \ldots, \vec{e}_n\}$:
$$
\vec{v} = v_1\vec{e}_1 + \cdots + v_n\vec{e}_n
$$
I coefficienti sono proprio le componenti di $\vec{v}$: nella componente $i$ della somma l'unico contributo viene da $v_i\vec{e}_i$, perché $\vec{e}_i$ ha $1$ al posto $i$ e gli altri $\vec{e}_j$ hanno $0$.

**Generatori non unici.** Anche $\{(1, 1), (1, -1)\}$ genera $\mathbb{R}^2$ (esercizio 1), e anche $\{\vec{e}_1, \vec{e}_2, (5, 7)\}$: aggiungere vettori a un sistema di generatori lascia un sistema di generatori. Quello che conta è che **ogni** vettore sia raggiungibile.

### Spazio delle righe e spazio delle colonne

La prof (<span class="src">p. 9</span>, esempio (7)): sia $A \in M_{m \times n}(\mathbb{R})$,
$$
A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}
$$
Le righe di $A$ sono elementi di $\mathbb{R}^n$: $\vec{r}_1, \ldots, \vec{r}_m \in \mathbb{R}^n$. Le colonne di $A$ sono elementi di $\mathbb{R}^m$: $\vec{c}_1, \ldots, \vec{c}_n \in \mathbb{R}^m$.
- Il sottospazio di $\mathbb{R}^n$ generato dalle righe di $A$ è detto **spazio delle righe** di $A$. Notazione: $R(A) = \mathrm{Span}(\vec{r}_1, \ldots, \vec{r}_m) \subseteq \mathbb{R}^n$.
- Il sottospazio di $\mathbb{R}^m$ generato dalle colonne di $A$ è detto **spazio delle colonne** di $A$. Notazione: $C(A) = \mathrm{Span}(\vec{c}_1, \ldots, \vec{c}_n) \subseteq \mathbb{R}^m$.

**Attenzione agli spazi.** Una riga ha tante componenti quante **colonne** ($n$), quindi $R(A)$ vive in $\mathbb{R}^n$; una colonna ha tante componenti quante **righe** ($m$), quindi $C(A)$ vive in $\mathbb{R}^m$. Esempio: $A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{pmatrix}$ ($2 \times 3$) ha $R(A) = \mathrm{Span}((1, 0, 2), (0, 1, 1)) \subseteq \mathbb{R}^3$, un piano per l'origine, e $C(A) = \mathrm{Span}((1, 0), (0, 1), (2, 1)) = \mathbb{R}^2$, perché fra le colonne ci sono già $\vec{e}_1$ ed $\vec{e}_2$.

**Che cosa ha a che fare con i sistemi** (conseguenza della forma matriciale $(\ast)$ di [Spazi vettoriali](/uni/gal/spazi-vettoriali/), non detto esplicitamente a lezione): $A\vec{x}$ è la combinazione lineare delle colonne di $A$ con coefficienti $x_1, \ldots, x_n$. Quindi
$$
A\vec{x} = \vec{b} \text{ è compatibile} \iff \vec{b} \in C(A)
$$
Un sistema ha soluzione esattamente quando il termine noto si ottiene combinando le colonne della matrice dei coefficienti.

## Enunciati

### Lo Span è un sottospazio

$\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$ è un sottospazio di $V$, e contiene $\vec{v}_1, \ldots, \vec{v}_k$. La prof lo usa nel nome ("sottospazio generato") senza dimostrarlo; la dimostrazione è la verifica della (C).

> [!note]- Dimostrazione
> **Non vuoto e contiene i $\vec{v}_i$.** Con tutti i coefficienti nulli tranne $\lambda_i = 1$ si ottiene $\vec{v}_i$. Con tutti nulli si ottiene $\vec{0}$.
>
> **(C).** Siano $\vec{u}, \vec{w} \in \mathrm{Span}$, cioè $\vec{u} = a_1\vec{v}_1 + \cdots + a_k\vec{v}_k$ e $\vec{w} = b_1\vec{v}_1 + \cdots + b_k\vec{v}_k$, e siano $\lambda, \mu \in \mathbb{R}$. Allora
> $$
> \lambda\vec{u} + \mu\vec{w} = \lambda(a_1\vec{v}_1 + \cdots + a_k\vec{v}_k) + \mu(b_1\vec{v}_1 + \cdots + b_k\vec{v}_k) \qquad \text{sostituisco}
> $$
> $$
> = (\lambda a_1)\vec{v}_1 + \cdots + (\lambda a_k)\vec{v}_k + (\mu b_1)\vec{v}_1 + \cdots + (\mu b_k)\vec{v}_k \qquad \text{proprietà (8) e (5)}
> $$
> $$
> = (\lambda a_1 + \mu b_1)\vec{v}_1 + \cdots + (\lambda a_k + \mu b_k)\vec{v}_k \qquad \text{proprietà (1), (2) e (7)}
> $$
> È una combinazione lineare dei $\vec{v}_i$, con coefficienti $\lambda a_i + \mu b_i$: sta nello Span. $\square$
>
> In più è il **più piccolo** sottospazio che contiene $\vec{v}_1, \ldots, \vec{v}_k$: un sottospazio $U$ che li contiene, per la (C) applicata più volte, contiene tutte le loro combinazioni, cioè tutto lo Span.

### Criterio: quando $\{\vec{v}_1, \ldots, \vec{v}_k\}$ genera $\mathbb{R}^n$

La prof (<span class="src">p. 7</span>, proposizione (a)):

> [!abstract] Proposizione
> L'insieme $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq \mathbb{R}^n$ è un sistema di generatori di $\mathbb{R}^n$ se e solo se $\operatorname{rg}(A) = n$, dove
> $$
> A = [\vec{v}_1 \mid \vec{v}_2 \mid \cdots \mid \vec{v}_k] \qquad (n \times k)
> $$
> è la matrice che ha i vettori come colonne.

**Osservazione** della prof: $A$ è una matrice $n \times k$, e dunque deve essere $k \geq n$. Il rango non supera mai il numero di colonne (ogni pivot sta in una colonna diversa), quindi con $k < n$ vettori il rango è al massimo $k < n$: **meno di $n$ vettori non generano mai $\mathbb{R}^n$**. Due vettori non generano $\mathbb{R}^3$, qualunque essi siano.

**Perché è vero, l'idea.** Per la forma matriciale, $\vec{b} \in \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$ vuol dire che $A\vec{\lambda} = \vec{b}$ ha soluzione. Generare $\mathbb{R}^n$ vuol dire che questo succede **per ogni** $\vec{b}$. Se $\operatorname{rg}(A) = n$, ogni riga della forma a scalini ha un pivot e non può comparire $0 = \text{qualcosa}$; se $\operatorname{rg}(A) < n$, in fondo c'è una riga nulla e c'è sempre un $\vec{b}$ che la rende impossibile.

> [!note]- Dimostrazione (non fatta a lezione)
> **($\Leftarrow$)** Sia $\operatorname{rg}(A) = n$ e sia $\vec{b} \in \mathbb{R}^n$ qualunque. La matrice completa $[A \mid \vec{b}]$ ha $n$ righe, quindi rango al massimo $n$; contiene le colonne di $A$, quindi rango almeno $\operatorname{rg}(A) = n$. Allora $\operatorname{rg}([A \mid \vec{b}]) = n = \operatorname{rg}(A)$ e per Rouché-Capelli $A\vec{\lambda} = \vec{b}$ è compatibile: $\vec{b} \in \mathrm{Span}$. Siccome $\vec{b}$ era qualunque, lo Span è $\mathbb{R}^n$.
>
> **($\Rightarrow$)** Sia $\operatorname{rg}(A) = r < n$. Per [Matrici invertibili](/uni/gal/matrici-invertibili/) esiste $P$ invertibile, $n \times n$, con $PA = \operatorname{rref}(A)$, e l'ultima riga di $\operatorname{rref}(A)$ è nulla (ci sono solo $r < n$ pivot). Sia $\vec{c} = \vec{e}_n = (0, \ldots, 0, 1)$ e $\vec{b} = P^{-1}\vec{c}$. Allora
> $$
> P[A \mid \vec{b}] = [PA \mid P\vec{b}] = [\operatorname{rref}(A) \mid \vec{e}_n]
> $$
> la cui ultima riga è $(0, \ldots, 0 \mid 1)$, cioè $0 = 1$. Il sistema $A\vec{\lambda} = \vec{b}$ è incompatibile, quindi $\vec{b} \notin \mathrm{Span}$ e i vettori non generano $\mathbb{R}^n$. $\square$
>
> In pratica, negli esercizi il $\vec{b}$ che resta fuori si trova riducendo $[A \mid \vec{b}]$ con $\vec{b} = (b_1, \ldots, b_n)$ generico: le righe nulle a sinistra danno le equazioni che $\vec{b}$ deve soddisfare per stare nello Span (esempio 2 qui sotto).

## Metodo

### “$\{\vec{v}_1, \ldots, \vec{v}_k\}$ genera $\mathbb{R}^n$?"

1. Se $k < n$: **no**, senza conti (osservazione della prof).
2. Metti i vettori **come colonne** in $A = [\vec{v}_1 \mid \cdots \mid \vec{v}_k]$, $n \times k$.
3. Riduci a scalini con Gauss, scrivendo ogni operazione.
4. Conta i pivot: se sono $n$ (uno per riga), **generano**; se sono meno, **non generano**.
5. Con un parametro: come per l'invertibilità, trova i valori che annullano i pivot e ricontrolla il rango lì.

(Metterli come righe e ridurre darebbe lo stesso rango: lo si vedrà con il determinante e le basi. A lezione la prof li mette come colonne, ed è la scelta che serve anche per il punto dopo.)

### “$\vec{b}$ sta in $\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$? Con quali coefficienti?"

1. Scrivi $[\vec{v}_1 \mid \cdots \mid \vec{v}_k \mid \vec{b}]$.
2. Riduci e applica Rouché-Capelli: compatibile vuol dire sì.
3. Se sì, risolvi: la soluzione $\vec{\lambda}$ dà i coefficienti. Verifica calcolando $\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k$.

### "Che cosa generano?" (quando non generano tutto)

Riduci $[A \mid \vec{b}]$ con $\vec{b} = (b_1, \ldots, b_n)$ in lettere. Ogni riga nulla a sinistra dà, a destra, un'espressione in $b_1, \ldots, b_n$ che deve valere $0$: sono le **equazioni cartesiane** dello Span. Una equazione in $\mathbb{R}^3$: un piano per l'origine; due: una retta per l'origine.

## Esempi svolti a lezione

> [!example]- Prof, 13/10, p. 8: $\{\vec{e}_1, \vec{e}_2\}$ non genera $\mathbb{R}^3$
> $\vec{e}_1 = (1, 0, 0)$, $\vec{e}_2 = (0, 1, 0)$, $k = 2$.
>
> **Riconoscere il tipo**: "è un sistema di generatori di $\mathbb{R}^3$?". Si potrebbe rispondere subito con l'osservazione ($k = 2 < 3$), ma la prof usa il criterio per allenarsi:
> $$
> A = [\vec{e}_1 \mid \vec{e}_2] = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}
> $$
> È già a scalini: due pivot, $\operatorname{rg}(A) = 2 < 3$. **Non è un sistema di generatori.**
>
> **Cosa generano**: il piano $xy$, $\{z = 0\}$ (figura sopra). Un vettore fuori: $\vec{e}_3 = (0, 0, 1)$, perché ogni combinazione $(\lambda_1, \lambda_2, 0)$ ha terza componente $0 \neq 1$.

> [!example]- Prof, 13/10, p. 8: quattro vettori in $\mathbb{R}^3$ che non generano
> $\vec{v}_1 = (1, 0, 2)$, $\vec{v}_2 = (-1, 1, 0)$, $\vec{v}_3 = (0, 1, 2)$, $\vec{v}_4 = (2, -1, 2)$, $k = 4$.
>
> **Riconoscere il tipo**: $k = 4 \geq 3$, quindi l'osservazione non decide: per verificare se $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è un sistema di generatori di $\mathbb{R}^3$ si calcola $\operatorname{rg}(A)$.
> $$
> A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4] = \begin{pmatrix} 1 & -1 & 0 & 2 \\ 0 & 1 & 1 & -1 \\ 2 & 0 & 2 & 2 \end{pmatrix}
> $$
> **$E_{31}(-2)$**, $R_3 \to R_3 - 2R_1$: $(2, 0, 2, 2) - 2(1, -1, 0, 2) = (2 - 2,\ 0 + 2,\ 2 - 0,\ 2 - 4) = (0, 2, 2, -2)$.
> $$
> \begin{pmatrix} 1 & -1 & 0 & 2 \\ 0 & 1 & 1 & -1 \\ 0 & 2 & 2 & -2 \end{pmatrix}
> $$
> **$E_{32}(-2)$**, $R_3 \to R_3 - 2R_2$: $(0, 2, 2, -2) - 2(0, 1, 1, -1) = (0, 0, 0, 0)$.
> $$
> \begin{pmatrix} 1 & -1 & 0 & 2 \\ 0 & 1 & 1 & -1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Due pivot: $\operatorname{rg}(A) = 2 < 3$. **$\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ non è un sistema di generatori di $\mathbb{R}^3$.** Avere più vettori della dimensione dello spazio non basta.
>
> **Che cosa generano** (oltre la lezione, con il metodo sopra). Rifaccio le stesse operazioni su $[A \mid \vec{b}]$, $\vec{b} = (b_1, b_2, b_3)$. La colonna dei termini noti diventa:
> - dopo $E_{31}(-2)$: $(b_1,\ b_2,\ b_3 - 2b_1)$;
> - dopo $E_{32}(-2)$: $(b_1,\ b_2,\ b_3 - 2b_1 - 2b_2)$.
>
> L'ultima riga a sinistra è nulla, quindi il sistema è compatibile se e solo se $b_3 - 2b_1 - 2b_2 = 0$. Lo Span è il **piano per l'origine** $2x + 2y - z = 0$.
>
> **Verifica** sui quattro vettori: $2 \cdot 1 + 0 - 2 = 0$; $-2 + 2 - 0 = 0$; $0 + 2 - 2 = 0$; $4 - 2 - 2 = 0$. Tutti sul piano. Un vettore fuori: $(0, 0, 1)$, che dà $-1 \neq 0$.
>
> **Perché succede**: $\vec{v}_3 = \vec{v}_1 + \vec{v}_2$ e $\vec{v}_4 = \vec{v}_1 - \vec{v}_2$ (si legge dalla forma ridotta: $\operatorname{rref}(A) = \begin{pmatrix} 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & -1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$, colonne 3 e 4). Due dei quattro sono superflui, come nell'esempio 3 dei vettori paralleli. È l'argomento della L8: dipendenza lineare.

## Esercizi tipo esame

**Esercizio 1** (facile). Dire se $\{(1, 1), (1, -1)\}$ genera $\mathbb{R}^2$ e scrivere $(3, 5)$ come combinazione lineare dei due vettori.

> [!example]- Soluzione
> **Tipo**: criterio col rango, poi un sistema per i coefficienti.
> $$
> A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \xrightarrow{E_{21}(-1)} \begin{pmatrix} 1 & 1 \\ 0 & -2 \end{pmatrix}
> $$
> ($R_2 \to R_2 - R_1$: $(1 - 1,\ -1 - 1) = (0, -2)$.) Due pivot, $\operatorname{rg}(A) = 2$: **genera $\mathbb{R}^2$**.
>
> Coefficienti: $a(1, 1) + b(1, -1) = (3, 5)$, cioè $a + b = 3$ e $a - b = 5$. Sommando: $2a = 8$, $a = 4$; allora $b = 3 - 4 = -1$.
>
> **Verifica**: $4(1, 1) - (1, -1) = (4 - 1,\ 4 + 1) = (3, 5)$.

**Esercizio 2.** Per quali $k \in \mathbb{R}$ i vettori $\vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (0, 1, k)$, $\vec{v}_3 = (1, 0, k)$ generano $\mathbb{R}^3$? Per i valori che restano fuori, descrivere lo Span.

> [!example]- Soluzione
> **Tipo**: generatori con parametro. Tre vettori in $\mathbb{R}^3$: l'osservazione non esclude niente, serve il rango di $A$ al variare di $k$.
> $$
> A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3] = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & k & k \end{pmatrix}
> $$
> **$E_{21}(-1)$**, $R_2 \to R_2 - R_1$: $(1 - 1,\ 1 - 0,\ 0 - 1) = (0, 1, -1)$.
>
> **$E_{32}(-k)$**, $R_3 \to R_3 - kR_2$: $(0,\ k - k \cdot 1,\ k - k \cdot (-1)) = (0, 0, 2k)$. (Il pivot usato è $1$, non dipende da $k$: niente divisioni pericolose. Se $k = 0$ il passo non serve, e la formula dà comunque la riga giusta.)
> $$
> \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 2k \end{pmatrix}
> $$
> - $k \neq 0$: tre pivot, $\operatorname{rg}(A) = 3$, **generano $\mathbb{R}^3$**.
> - $k = 0$: due pivot, $\operatorname{rg}(A) = 2 < 3$, **non generano**.
>
> **Lo Span per $k = 0$.** I vettori sono $(1, 1, 0)$, $(0, 1, 0)$, $(1, 0, 0)$: hanno tutti terza componente $0$. Con il metodo: le operazioni $E_{21}(-1)$ ed $E_{32}(0)$ portano $(b_1, b_2, b_3)$ in $(b_1, b_2 - b_1, b_3)$, e la riga nulla chiede $b_3 = 0$. Lo Span è il piano $xy$, $\{z = 0\}$.
>
> **Verifica** per $k = 1$: $(0, 0, 1) = a(1, 1, 0) + b(0, 1, 1) + c(1, 0, 1)$ chiede $a + c = 0$, $a + b = 0$, $b + c = 1$; da qui $c = -a$, $b = -a$, $-2a = 1$, $a = -\frac{1}{2}$, $b = c = \frac{1}{2}$. Controllo: $-\frac{1}{2}(1, 1, 0) + \frac{1}{2}(0, 1, 1) + \frac{1}{2}(1, 0, 1) = (0, 0, 1)$. Anche $\vec{e}_3$ è raggiunto.

**Esercizio 3.** Siano $\vec{v}_1 = (1, 2, -1)$, $\vec{v}_2 = (2, 1, 1)$ e $\vec{w}_k = (1, k, 2)$. Per quali $k$ si ha $\vec{w}_k \in \mathrm{Span}(\vec{v}_1, \vec{v}_2)$? Per quei $k$ scrivere $\vec{w}_k$ come combinazione di $\vec{v}_1$ e $\vec{v}_2$.

> [!example]- Soluzione
> **Tipo**: appartenenza a uno Span, cioè compatibilità di $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{w}_k]$.
> $$
> \left[\begin{array}{cc|c} 1 & 2 & 1 \\ 2 & 1 & k \\ -1 & 1 & 2 \end{array}\right]
> $$
> **$E_{21}(-2)$**, $R_2 \to R_2 - 2R_1$: $(2 - 2,\ 1 - 4 \mid k - 2) = (0, -3 \mid k - 2)$.
>
> **$E_{31}(1)$**, $R_3 \to R_3 + R_1$: $(-1 + 1,\ 1 + 2 \mid 2 + 1) = (0, 3 \mid 3)$.
>
> **$E_{32}(1)$**, $R_3 \to R_3 + R_2$: $(0,\ 3 - 3 \mid 3 + k - 2) = (0, 0 \mid k + 1)$.
> $$
> \left[\begin{array}{cc|c} 1 & 2 & 1 \\ 0 & -3 & k - 2 \\ 0 & 0 & k + 1 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 2$ sempre. La completa ha rango $2$ se $k + 1 = 0$, altrimenti $3$. Per Rouché-Capelli: **$\vec{w}_k \in \mathrm{Span}$ se e solo se $k = -1$.**
>
> **Coefficienti per $k = -1$.** Seconda riga: $-3\lambda_2 = -1 - 2 = -3$, quindi $\lambda_2 = 1$. Prima riga: $\lambda_1 + 2 = 1$, quindi $\lambda_1 = -1$. $\vec{w}_{-1} = -\vec{v}_1 + \vec{v}_2$.
>
> **Verifica**: $-(1, 2, -1) + (2, 1, 1) = (1, -1, 2) = \vec{w}_{-1}$. Geometricamente: $\mathrm{Span}(\vec{v}_1, \vec{v}_2)$ è un piano per l'origine, e al variare di $k$ il punto $(1, k, 2)$ scorre su una retta che buca quel piano una volta sola.

**Esercizio 4** (livello del parziale). Sia
$$
B_k = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 3 & 1 & k \end{pmatrix}, \qquad k \in \mathbb{R}
$$

- a) Per quali $k$ le colonne di $B_k$ generano $\mathbb{R}^3$, cioè $C(B_k) = \mathbb{R}^3$?
- b) Per il valore escluso, trovare un'equazione cartesiana di $C(B_k)$ e un vettore di $\mathbb{R}^3$ che non ci sta.
- c) Per lo stesso valore, il sistema $B_k\vec{x} = (1, 1, 1)$ è compatibile?

> [!example]- Soluzione
> **Tipo**: spazio delle colonne. Le colonne sono quattro vettori di $\mathbb{R}^3$, e $C(B_k) = \mathbb{R}^3$ se e solo se $\operatorname{rg}(B_k) = 3$ (criterio della prof).
>
> **a)** Riduco $[B_k \mid \vec{b}]$ con $\vec{b} = (b_1, b_2, b_3)$, così ho subito anche il punto b).
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 0 & 1 & b_1 \\ 0 & 1 & 1 & 1 & b_2 \\ 1 & 3 & 1 & k & b_3 \end{array}\right]
> $$
> **$E_{31}(-1)$**, $R_3 \to R_3 - R_1$: $(0,\ 1,\ 1,\ k - 1 \mid b_3 - b_1)$.
>
> **$E_{32}(-1)$**, $R_3 \to R_3 - R_2$: $(0,\ 0,\ 0,\ k - 2 \mid b_3 - b_1 - b_2)$.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 0 & 1 & b_1 \\ 0 & 1 & 1 & 1 & b_2 \\ 0 & 0 & 0 & k - 2 & b_3 - b_1 - b_2 \end{array}\right]
> $$
> - $k \neq 2$: terzo pivot $k - 2$ in colonna 4, $\operatorname{rg}(B_k) = 3$, **le colonne generano $\mathbb{R}^3$**.
> - $k = 2$: $\operatorname{rg}(B_2) = 2$, non generano.
>
> **b)** Per $k = 2$ la terza riga è $(0, 0, 0, 0 \mid b_3 - b_1 - b_2)$: compatibile se e solo se $b_3 - b_1 - b_2 = 0$. Quindi
> $$
> C(B_2) = \{(x, y, z) \in \mathbb{R}^3 : z = x + y\}
> $$
> un piano per l'origine. Verifica sulle colonne: $(1, 0, 1)$: $1 = 1 + 0$; $(2, 1, 3)$: $3 = 2 + 1$; $(0, 1, 1)$: $1 = 0 + 1$; $(1, 1, 2)$: $2 = 1 + 1$. Un vettore fuori: $(0, 0, 1)$, perché $1 \neq 0 + 0$.
>
> **c)** $(1, 1, 1)$: $1 \neq 1 + 1 = 2$, quindi $(1, 1, 1) \notin C(B_2)$ e il sistema è **incompatibile**. È il legame “$A\vec{x} = \vec{b}$ compatibile se e solo se $\vec{b} \in C(A)$".

**Esercizio 5** (livello del 30, teoria). Siano $\vec{v}_1, \ldots, \vec{v}_k, \vec{w}$ vettori di uno spazio vettoriale $V$.

- a) Dimostrare che se $\vec{w} \in \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$, allora $\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k, \vec{w}) = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$.
- b) Dedurre che, nel secondo esempio della prof, $\mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4) = \mathrm{Span}(\vec{v}_1, \vec{v}_2)$.
- c) Perché tre vettori di $\mathbb{R}^4$ non possono mai generare $\mathbb{R}^4$?

> [!example]- Soluzione
> **a)** Due inclusioni.
> - ($\supseteq$) Una combinazione $\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k$ è anche una combinazione di $\vec{v}_1, \ldots, \vec{v}_k, \vec{w}$, con coefficiente $0$ su $\vec{w}$.
> - ($\subseteq$) Per ipotesi $\vec{w} = c_1\vec{v}_1 + \cdots + c_k\vec{v}_k$. Un elemento del primo Span è
> $$
> \lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k + \mu\vec{w} = \lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k + \mu(c_1\vec{v}_1 + \cdots + c_k\vec{v}_k) = (\lambda_1 + \mu c_1)\vec{v}_1 + \cdots + (\lambda_k + \mu c_k)\vec{v}_k
> $$
> (sostituisco $\vec{w}$, poi raccolgo ogni $\vec{v}_i$ con la (7)): è una combinazione dei soli $\vec{v}_i$. $\square$
>
> **b)** $\vec{v}_3 = \vec{v}_1 + \vec{v}_2$: $(1, 0, 2) + (-1, 1, 0) = (0, 1, 2)$. $\vec{v}_4 = \vec{v}_1 - \vec{v}_2$: $(1, 0, 2) - (-1, 1, 0) = (2, -1, 2)$. Per a) tolgo prima $\vec{v}_4$ (sta nello Span degli altri tre, anzi di $\vec{v}_1, \vec{v}_2$), poi $\vec{v}_3$. Resta $\mathrm{Span}(\vec{v}_1, \vec{v}_2)$: il piano $2x + 2y - z = 0$, coerente con il conto fatto sopra.
>
> **c)** La matrice $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3]$ è $4 \times 3$: ha al massimo un pivot per colonna, quindi rango al massimo $3 < 4$. Per il criterio della prof non generano $\mathbb{R}^4$. In generale servono almeno $n$ vettori per generare $\mathbb{R}^n$.

## Errori tipici

- Mettere i vettori **come righe** e poi leggere le colonne, o mescolare: la prof li mette come **colonne**, $A$ è $n \times k$, e il rango va confrontato con $n$ (la dimensione dello spazio), non con $k$ (il numero di vettori).
- Concludere "generano" perché i vettori sono tanti: i quattro vettori dell'esempio della prof in $\mathbb{R}^3$ non generano. Conta il rango.
- Concludere "non generano" perché sono più di $n$: anche $\{\vec{e}_1, \vec{e}_2, (5, 7)\}$ genera $\mathbb{R}^2$. Avere vettori in più non fa male allo Span.
- Confondere $R(A) \subseteq \mathbb{R}^n$ e $C(A) \subseteq \mathbb{R}^m$: le righe hanno $n$ componenti, le colonne $m$.
- Dividere per un pivot con il parametro prima di aver escluso i valori che lo annullano (stesso errore delle matrici invertibili).
- Scrivere lo Span come “$\{\vec{v}_1, \vec{v}_2\}$": quello è un insieme di **due** vettori. Lo Span ne contiene infiniti.

## Domande

- Cos'è il sottospazio generato da $\vec{v}_1, \ldots, \vec{v}_k$? Perché è un sottospazio?

- Cosa vuol dire che uno spazio vettoriale è finitamente generato? Cos'è un sistema di generatori?

- Perché $\{\vec{e}_1, \ldots, \vec{e}_n\}$ è un sistema di generatori di $\mathbb{R}^n$?

- Enuncia il criterio col rango per stabilire se $\{\vec{v}_1, \ldots, \vec{v}_k\}$ genera $\mathbb{R}^n$. Perché serve $k \geq n$?

- Che cosa genera un vettore non nullo in $\mathbb{R}^3$? E due vettori non paralleli?

- Definisci spazio delle righe e spazio delle colonne di $A \in M_{m \times n}(\mathbb{R})$. In quale $\mathbb{R}^?$ vive ciascuno?

- Che legame c'è tra lo spazio delle colonne di $A$ e la compatibilità di $A\vec{x} = \vec{b}$?

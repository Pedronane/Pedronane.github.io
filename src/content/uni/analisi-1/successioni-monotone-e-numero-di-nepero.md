---
title: Successioni monotone e numero di Nepero
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-06
lezioni:
  - 6 ott
ordine: 7
---

Argomento di [Analisi Matematica 1](/uni/analisi-1/), capitolo 3, sezione 3.4 ("Esistenza del limite per successioni monotòne. Il numero di Nepero"). Fatto a lezione il 6/10, slide 28-37 (<span class="src">slide annotate del 6/10</span>). Viene dopo [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/) (definizione di limite, sottosuccessioni) e usa sup e inf di [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/). Il seguito è [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/).

> [!abstract] Per l'esame
> - **Saper enunciare**: definizione di successione monotona (crescente, strettamente crescente, decrescente, strettamente decrescente); teorema sul limite delle successioni monotone con l'osservazione sulle limitate; teorema e corollario sul numero di Nepero; **limite di Nepero generalizzato** (il prof ci ha disegnato una stella accanto, slide 37).
> - **Saper fare**: dimostrare che una successione è monotona studiando $a_n - a_{n+1}$; calcolare $\lim \left(1 + \frac{\alpha}{n}\right)^n = e^\alpha$ e, più in generale, le forme $\left(1 + \frac{1}{a_n}\right)^{a_n}$; dimostrare che la successione di Nepero è limitata (e crescente, lasciato per casa).
> - **Dove esce**: crocette sul teorema delle monotone (una monotona ha sempre limite? una crescente limitata converge?) e sul valore di limiti del tipo $\left(1 + \frac{3}{n}\right)^{n}$; nella parte 2 lo studio di monotonia (c'è nel III tutoraggio) e i limiti con Nepero generalizzato, che sono la forma indeterminata $[1^\infty]$ di [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/).

Il filo dell'argomento:

```
monotona crescente           a_n <= a_(n+1) per ogni n
        |
        v  teorema (slide 30)
il limite ESISTE sempre      lim a_n = sup{a_n}, finito o +∞
        |
        v  + limitata
il limite è FINITO
        |
        v  applicazione (slide 32-34)
(1 + 1/n)^n                  crescente e < 4   =>  converge: il limite si chiama e
        |
        v  slide 37
(1 + 1/a_n)^(a_n) -> e       se |a_n| -> +∞;  quindi (1 + α/n)^n -> e^α
```

## Definizioni

### Successione monotona (slide 29, 6/10)

> [!abstract] Definizione (successione monotona)
> Una successione $(a_n)_n$ si dice
> - **monotòna crescente** se $a_n \leq a_{n+1}$ per ogni $n \in \mathbb{N}$;
> - **monotòna strettamente crescente** se $a_n < a_{n+1}$ per ogni $n \in \mathbb{N}$;
> - **monotòna decrescente** se $a_n \geq a_{n+1}$ per ogni $n \in \mathbb{N}$;
> - **monotòna strettamente decrescente** se $a_n > a_{n+1}$ per ogni $n \in \mathbb{N}$.

**Cosa vuol dire.** Crescente: ogni termine è almeno grande quanto il precedente, quindi i punti del grafico non scendono mai. "Strettamente" vuol dire che salgono davvero a ogni passo, senza fermarsi. Una successione costante è crescente e decrescente insieme, ma non strettamente. È la stessa definizione delle funzioni monotone di [Funzioni](/uni/analisi-1/funzioni/), con la differenza che basta confrontare **termini consecutivi**: se $a_n \leq a_{n+1}$ per ogni $n$, allora $a_n \leq a_m$ per ogni $m > n$, passando da un termine all'altro.

Esempi:

| successione | primi termini | monotonia |
|---|---|---|
| $n^2$ | $0, 1, 4, 9, \dots$ | strettamente crescente |
| $\frac1n$, $n \geq 1$ | $1, \frac12, \frac13, \dots$ | strettamente decrescente |
| $\lfloor n/2 \rfloor$ | $0, 0, 1, 1, 2, 2, \dots$ | crescente, non strettamente |
| $(-1)^n$ | $1, -1, 1, -1, \dots$ | né crescente né decrescente |

**Definitivamente monotona** (usata nella dimostrazione del criterio del rapporto, slide 63, 7/10). Una successione è definitivamente crescente se $a_n \leq a_{n+1}$ vale da un certo indice in poi. Il prof l'ha incontrata subito nell'esempio della slide 29: $\frac{n}{n^2+1}$ sale da $a_0$ ad $a_1$ e poi scende sempre. Il teorema delle monotone vale anche per le definitivamente monotone, perché i primi termini non cambiano il limite (con il sup o l'inf calcolato sui termini da quell'indice in poi).

### Il numero di Nepero (slide 32)

La **successione di Nepero** (John Napier, 1550-1617) è
$$
a_n = \left(1 + \frac1n\right)^n, \qquad n \geq 1
$$

> [!abstract] Definizione (numero di Nepero)
> Il **numero di Nepero** è il limite della successione di Nepero:
> $$
> e := \lim_{n \to +\infty} \left(1 + \frac1n\right)^n
> $$
> Il prof: “$e$ è definito come il limite di questa successione". La lettera $e$ è l'iniziale di Eulero.

Che il limite esista ed sia finito non è ovvio: lo garantisce il teorema della slide 32 (sotto), che è un'applicazione del teorema delle monotone. I primi valori mostrano una successione che sale sempre più piano:

| $n$ | $1$ | $2$ | $3$ | $10$ | $100$ | limite |
|---|---|---|---|---|---|---|
| $\left(1 + \frac1n\right)^n$ | $2$ | $2{,}25$ | $2{,}370$ | $2{,}594$ | $2{,}705$ | $e = 2{,}71828\ldots$ |

**Perché non va a $1$ e non va a $+\infty$.** Sono in lotta due spinte: la base $1 + \frac1n$ si avvicina a $1$, e $1$ elevato a qualunque cosa fa $1$; l'esponente $n$ cresce senza limite, e un numero maggiore di $1$ elevato a un esponente enorme diventa enorme. Nessuna delle due vince: il risultato si assesta su $e$. È il prototipo della forma indeterminata $[1^\infty]$.

<figure class="fig"><svg role="img" aria-label="Successioni monotone" xmlns:xlink="http://www.w3.org/1999/xlink" width="684.12pt" height="264.2928pt" viewBox="0 0 684.12 264.2928" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f29-figure_1"> <g id="f29-patch_1"> <path d="M 0 264.2928 L 684.12 264.2928 L 684.12 0 L 0 0 L 0 264.2928 z " style="fill: none"/> </g> <g id="f29-axes_1"> <g id="f29-patch_2"> <path d="M 5.76 246.8 L 310.123636 246.8 L 310.123636 25.04 L 5.76 25.04 L 5.76 246.8 z " style="fill: none"/> </g> <g id="f29-matplotlib.axis_1"/> <g id="f29-matplotlib.axis_2"/> <g id="f29-line2d_1"> <defs> <path id="f29-m0f3cb89065" d="M 3 0 L -3 -3 L -3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g> <use xlink:href="#f29-m0f3cb89065" x="310.123636" y="227.792" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f29-line2d_2"> <defs> <path id="f29-m1fdc84283e" d="M 0 -3 L -3 3 L 3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g> <use xlink:href="#f29-m1fdc84283e" x="13.298418" y="25.04" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f29-line2d_3"> <path d="M 5.76 55.561663 L 310.123636 55.561663 " clip-path="url(#f29-pa3497fd6bb)" style="fill: none; stroke-dasharray: 4.44,1.92; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.2"/> </g> <g id="f29-line2d_4"> <defs> <path id="f29-m81de4fb4d8" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f29-pa3497fd6bb)"> <use xlink:href="#f29-m81de4fb4d8" x="22.721441" y="101.072" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="32.144464" y="85.232" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="41.567487" y="77.605333" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="50.990509" y="73.1045" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="60.413532" y="70.132045" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="69.836555" y="68.021753" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="79.259578" y="66.445779" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="88.682601" y="65.223893" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="98.105623" y="64.248765" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="107.528646" y="63.452478" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="116.951669" y="62.789951" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="126.374692" y="62.230084" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="135.797715" y="61.750728" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="145.220737" y="61.335677" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="154.64376" y="60.972804" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="164.066783" y="60.65285" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="173.489806" y="60.368625" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="182.912829" y="60.11446" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="192.335851" y="59.885825" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="201.758874" y="59.679057" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="211.181897" y="59.491163" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="220.60492" y="59.31967" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="230.027943" y="59.16252" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="239.450965" y="59.017987" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="248.873988" y="58.88461" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="258.297011" y="58.761145" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="267.720034" y="58.646526" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="277.143057" y="58.539835" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="286.566079" y="58.440278" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-m81de4fb4d8" x="295.989102" y="58.347162" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f29-patch_3"> <path d="M 13.298418 246.8 L 13.298418 25.04 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f29-patch_4"> <path d="M 5.76 227.792 L 310.123636 227.792 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f29-text_1"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(301.673636 255.409753) scale(0.13 -0.13)"> <defs> <path id="f29-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> <g id="f29-text_2"> <!-- $a_n$ --> <g style="fill: var(--fig-ink)" transform="translate(22.429327 34.916953) scale(0.13 -0.13)"> <defs> <path id="f29-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-Italic-44" transform="translate(0 0.671875)"/> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(59.619141 -14.328076) scale(0.7)"/> </g> </g> <g id="f29-text_3"> <!-- $e = \sup$ --> <g style="fill: var(--fig-accent)" transform="translate(259.229032 47.369816) scale(0.13 -0.13)"> <defs> <path id="f29-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-Italic-48" transform="translate(0 0.671875)"/> <use xlink:href="#f29-DejaVuSerif-20" transform="translate(78.144531 0.671875)"/> <use xlink:href="#f29-DejaVuSerif-56" transform="translate(180.898438 0.671875)"/> <use xlink:href="#f29-DejaVuSerif-58" transform="translate(232.216797 0.671875)"/> <use xlink:href="#f29-DejaVuSerif-53" transform="translate(296.621094 0.671875)"/> </g> </g> <g id="f29-text_4"> <!-- $a_1 = 2$ --> <g style="fill: var(--fig-axis)" transform="translate(26.49065 110.576) scale(0.1 -0.1)"> <defs> <path id="f29-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-Italic-44" transform="translate(0 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-14" transform="translate(59.619141 -14.218701) scale(0.7)"/> <use xlink:href="#f29-DejaVuSerif-20" transform="translate(125.715332 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-15" transform="translate(228.469238 0.78125)"/> </g> </g> <g id="f29-text_5"> <!-- $(1 + 1/n)^n$: sale sempre, non supera mai $e$ --> <g style="fill: var(--fig-ink)" transform="translate(32.541818 17.04) scale(0.12 -0.12)"> <defs> <path id="f29-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-12" d="M 1656 4666 L 2156 4666 L 500 -594 L 0 -594 L 1656 4666 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-b" transform="translate(0 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-14" transform="translate(39.013672 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-e" transform="translate(121.601562 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-14" transform="translate(224.355469 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-12" transform="translate(287.978516 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(321.669922 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-c" transform="translate(386.074219 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(425.996216 41.670313) scale(0.7)"/> <use xlink:href="#f29-DejaVuSerif-1d" transform="translate(473.674438 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(507.365845 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-56" transform="translate(539.152954 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-44" transform="translate(590.471313 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-4f" transform="translate(650.090454 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(682.072876 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(741.252563 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-56" transform="translate(773.039673 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(824.358032 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-50" transform="translate(883.53772 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-53" transform="translate(978.361938 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-55" transform="translate(1042.37561 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(1090.178345 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-f" transform="translate(1149.358032 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1181.145142 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-51" transform="translate(1212.932251 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-52" transform="translate(1277.336548 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-51" transform="translate(1337.541626 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1401.945923 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-56" transform="translate(1433.733032 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-58" transform="translate(1485.051392 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-53" transform="translate(1549.455688 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(1613.46936 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-55" transform="translate(1672.649048 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-44" transform="translate(1720.451782 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1780.070923 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-50" transform="translate(1811.858032 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-44" transform="translate(1906.682251 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-4c" transform="translate(1966.301392 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1998.283813 0.370313)"/> <use xlink:href="#f29-DejaVuSerif-Italic-48" transform="translate(2030.070923 0.370313)"/> </g> </g> </g> <g id="f29-axes_2"> <g id="f29-patch_5"> <path d="M 370.996364 246.8 L 675.36 246.8 L 675.36 25.04 L 370.996364 25.04 L 370.996364 246.8 z " style="fill: none"/> </g> <g id="f29-matplotlib.axis_3"/> <g id="f29-matplotlib.axis_4"/> <g id="f29-line2d_5"> <g> <use xlink:href="#f29-m0f3cb89065" x="675.36" y="221.456" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f29-line2d_6"> <g> <use xlink:href="#f29-m1fdc84283e" x="381.915238" y="25.04" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f29-line2d_7"> <defs> <path id="f29-ma10f022737" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-faint)"/> </defs> <g clip-path="url(#f29-pf9465e9184)"> <use xlink:href="#f29-ma10f022737" x="381.915238" y="221.456" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> </g> </g> <g id="f29-line2d_8"> <defs> <path id="f29-mdf3bcd1eb7" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f29-pf9465e9184)"> <use xlink:href="#f29-mdf3bcd1eb7" x="395.563832" y="63.056" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="409.212426" y="94.736" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="422.861019" y="126.416" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="436.509613" y="146.914824" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="450.158206" y="160.532923" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="463.8068" y="170.083027" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="477.455393" y="177.104" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="491.103987" y="182.465231" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="504.752581" y="186.685268" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="518.401174" y="190.089663" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="532.049768" y="192.892066" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="545.698361" y="195.238069" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="559.346955" y="197.230118" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="572.995548" y="198.942294" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="586.644142" y="200.429451" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="600.292735" y="201.733043" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="613.941329" y="202.884966" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="627.589923" y="203.910154" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="641.238516" y="204.828376" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f29-mdf3bcd1eb7" x="654.88711" y="205.655501" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f29-line2d_9"> <path d="M 370.996364 221.456 L 675.36 221.456 " clip-path="url(#f29-pf9465e9184)" style="fill: none; stroke-dasharray: 4.44,1.92; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.2"/> </g> <g id="f29-patch_6"> <path d="M 381.915238 246.8 L 381.915238 25.04 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f29-patch_7"> <path d="M 370.996364 221.456 L 675.36 221.456 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f29-text_6"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(666.91 249.073753) scale(0.13 -0.13)"> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> <g id="f29-text_7"> <!-- $a_n$ --> <g style="fill: var(--fig-ink)" transform="translate(391.046148 34.916953) scale(0.13 -0.13)"> <use xlink:href="#f29-DejaVuSerif-Italic-44" transform="translate(0 0.671875)"/> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(59.619141 -14.328076) scale(0.7)"/> </g> </g> <g id="f29-text_8"> <!-- $a_0 = 0$ --> <g style="fill: var(--fig-axis)" transform="translate(388.739535 211.952) scale(0.1 -0.1)"> <defs> <path id="f29-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-Italic-44" transform="translate(0 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-13" transform="translate(59.619141 -14.218701) scale(0.7)"/> <use xlink:href="#f29-DejaVuSerif-20" transform="translate(125.715332 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-13" transform="translate(228.469238 0.78125)"/> </g> </g> <g id="f29-text_9"> <!-- $a_1 = 1/2$ --> <g style="fill: var(--fig-ink)" transform="translate(401.023269 56.72) scale(0.1 -0.1)"> <use xlink:href="#f29-DejaVuSerif-Italic-44" transform="translate(0 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-14" transform="translate(59.619141 -14.218701) scale(0.7)"/> <use xlink:href="#f29-DejaVuSerif-20" transform="translate(125.715332 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-14" transform="translate(228.469238 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-12" transform="translate(292.092285 0.78125)"/> <use xlink:href="#f29-DejaVuSerif-15" transform="translate(325.783691 0.78125)"/> </g> </g> <g id="f29-text_10"> <!-- $\inf = 0$ --> <g style="fill: var(--fig-accent)" transform="translate(629.080281 237.672) scale(0.13 -0.13)"> <defs> <path id="f29-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-4c" transform="translate(0 0.015625)"/> <use xlink:href="#f29-DejaVuSerif-51" transform="translate(31.982422 0.015625)"/> <use xlink:href="#f29-DejaVuSerif-49" transform="translate(96.386719 0.015625)"/> <use xlink:href="#f29-DejaVuSerif-20" transform="translate(168.167634 0.015625)"/> <use xlink:href="#f29-DejaVuSerif-13" transform="translate(270.92154 0.015625)"/> </g> </g> <g id="f29-text_11"> <!-- $n/(n^2+1)$: decrescente da $n = 1$ in poi --> <g style="fill: var(--fig-ink)" transform="translate(408.398182 17.04) scale(0.12 -0.12)"> <defs> <path id="f29-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f29-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(0 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-12" transform="translate(64.404297 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-b" transform="translate(98.095703 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(137.109375 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-15" transform="translate(205.951859 42.046875) scale(0.7)"/> <use xlink:href="#f29-DejaVuSerif-e" transform="translate(272.04805 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-14" transform="translate(374.801956 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-c" transform="translate(438.425003 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-1d" transform="translate(477.438675 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(511.130081 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-47" transform="translate(542.917191 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(606.930863 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-46" transform="translate(666.11055 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-55" transform="translate(722.11641 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(769.919144 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-56" transform="translate(829.098831 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-46" transform="translate(880.417191 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(936.42305 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-51" transform="translate(995.602738 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-57" transform="translate(1060.007035 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-48" transform="translate(1100.192581 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1159.372269 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-47" transform="translate(1191.159378 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-44" transform="translate(1255.17305 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1314.792191 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-Italic-51" transform="translate(1346.5793 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-20" transform="translate(1429.948441 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-14" transform="translate(1532.702347 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1596.325394 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-4c" transform="translate(1628.112503 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-51" transform="translate(1660.094925 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-3" transform="translate(1724.499222 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-53" transform="translate(1756.286331 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-52" transform="translate(1820.300003 0.746875)"/> <use xlink:href="#f29-DejaVuSerif-4c" transform="translate(1880.505081 0.746875)"/> </g> </g> </g> </g> <defs> <clipPath id="f29-pa3497fd6bb"> <rect x="5.76" y="25.04" width="304.363636" height="221.76"/> </clipPath> <clipPath id="f29-pf9465e9184"> <rect x="370.996364" y="25.04" width="304.363636" height="221.76"/> </clipPath> </defs> </svg></figure>

A sinistra la successione di Nepero: sale sempre e resta sotto la retta $y = e$, che è il suo sup e il suo limite. A destra l'esempio della slide 29, decrescente dal secondo termine in poi.

## Enunciati

### Il teorema sul limite delle successioni monotone (slide 30)

> [!abstract] Teorema (limite delle successioni monotone)
> Sia $(a_n)_n$ una successione monotòna crescente. Allora **esiste** il limite di $a_n$ e si ha
> $$
> \lim_{n \to +\infty} a_n = \sup\{a_i : i = 0, 1, 2, \dots\}
> $$
> Analogamente, se $a_n$ è monotòna decrescente, allora essa ammette limite e si ha
> $$
> \lim_{n \to +\infty} a_n = \inf\{a_i : i = 0, 1, 2, \dots\}
> $$

> [!abstract] Osservazione (slide 30)
> Se in aggiunta la successione $(a_n)_n$ è **limitata** (superiormente / inferiormente) allora essa ammette limite **finito**.

Le annotazioni del prof (<span class="src">6/10, slide 30</span>):
- accanto al limite: $\exists$, e il limite sta in $(-\infty, +\infty]$ per le crescenti, in $[-\infty, +\infty)$ per le decrescenti. Una crescente può andare a $+\infty$ ma mai a $-\infty$;
- il sup è l'"estremo superiore dell'insieme reale" formato dagli "elementi della successione", cioè il **minimo dei maggioranti** di quell'insieme;
- l'insieme $\{a_i\}$ è un insieme e basta, "non ordinato": il teorema dice che la successione, che è ordinata, va verso il sup di quell'insieme.

**Perché conta.** Fino a qui un limite si dimostrava indovinando $\ell$ e verificando la definizione. Il teorema dà l'**esistenza** senza conoscere il valore: basta controllare monotonia e limitatezza. È così che si definisce $e$: nessuno sa scrivere $e$ con una formula finita, ma si sa che il limite esiste.

**Il caso illimitato.** Se la crescente non è limitata superiormente, il sup è $+\infty$ e il teorema dice $a_n \to +\infty$. Esempio: $n^2$ è crescente e illimitata, e infatti $n^2 \to +\infty$.

**Senza monotonia il teorema cade.** $(-1)^n$ è limitata ma non ha limite. La limitatezza da sola non basta, la monotonia sì (al più il limite è infinito).

> [!note]- Dimostrazione (slide 31, non fatta a lezione: nelle slide annotate la slide 31 manca)
> Caso crescente e limitata superiormente. Sia $S = \sup\{a_i\}$, che è un numero reale per la completezza di $\mathbb{R}$. Fissiamo $\varepsilon > 0$.
> - $S - \varepsilon < S$ non è un maggiorante (il sup è il **minimo** dei maggioranti), quindi esiste un indice $\nu$ con $a_\nu > S - \varepsilon$.
> - Per $n > \nu$ la monotonia dà $a_n \geq a_\nu > S - \varepsilon$.
> - $S$ è un maggiorante, quindi $a_n \leq S < S + \varepsilon$.
>
> Per ogni $n > \nu$ vale $S - \varepsilon < a_n < S + \varepsilon$: è la definizione di $a_n \to S$, con $\nu_\varepsilon = \nu$.
>
> Caso crescente illimitata. Fissato $\varepsilon > 0$, $\varepsilon$ non è un maggiorante, quindi esiste $\nu$ con $a_\nu > \varepsilon$; per $n > \nu$, $a_n \geq a_\nu > \varepsilon$. Quindi $a_n \to +\infty$. Il caso decrescente è uguale con l'inf. $\blacksquare$
>
> L'idea in una riga: la successione sale e non può superare $S$; siccome si avvicina a $S$ almeno una volta (seconda proprietà del sup) e poi non scende più, resta incastrata vicino a $S$.

### La successione di Nepero è crescente e limitata (slide 32-34)

> [!abstract] Teorema (slide 32)
> La successione di Nepero $\left(1 + \frac1n\right)^n$ è strettamente crescente e limitata.

> [!abstract] Corollario (slide 32)
> Esiste ed è finito il "numero di Nepero", ovvero il limite della successione di Nepero. Tale numero è indicato con la lettera “$e$" (iniziale di Eulero).

Il corollario è l'osservazione della slide 30 applicata a una successione crescente e limitata.

La crescenza (slide 33) il prof l'ha lasciata **per casa**: è l'esercizio 1 in fondo, con la soluzione.

> [!note]- Dimostrazione della limitatezza (slide 34)
> Con il binomio di Newton, $(a + b)^n = \sum_{i=0}^n \binom ni a^{n-i}b^i$ con $a = 1$, $b = \frac1n$:
> $$
> a_n = \left(1 + \frac1n\right)^n = \sum_{i=0}^{n} \binom ni \frac{1}{n^i} = \sum_{i=0}^{n} \frac{n(n-1)(n-2)\cdots(n-i+1)}{i!\,n^i}
> $$
> usando la seconda forma del coefficiente binomiale. Il numeratore ha $i$ fattori e $n^i$ ha $i$ fattori $n$: si distribuisce un $n$ sotto ciascuno.
> $$
> = \sum_{i=0}^{n} \frac{1}{i!} \cdot 1 \cdot \frac{n-1}{n} \cdot \frac{n-2}{n} \cdots \frac{n-i+1}{n}
> $$
> Ogni frazione $\frac{n-j}{n}$ è $\leq 1$, quindi
> $$
> \leq \sum_{i=0}^{n} \frac{1}{i!}
> $$
> Poi $i! \geq 2^{i-1}$ per ogni $i \geq 0$ (per $i \geq 1$: $i! = 1 \cdot 2 \cdot 3 \cdots i$ ha $i - 1$ fattori $\geq 2$; per $i = 0$: $1 \geq \frac12$), quindi $\frac{1}{i!} \leq \frac{1}{2^{i-1}}$ e
> $$
> \leq \sum_{i=0}^{n} \frac{1}{2^{i-1}} = 2\sum_{i=0}^{n} \left(\frac12\right)^i = 2 \cdot \frac{1 - 2^{-n-1}}{1 - 2^{-1}} < \frac{2}{1 - 2^{-1}} = 4
> $$
> dove si è usata la somma geometrica con $q = \frac12$ e poi $1 - 2^{-n-1} < 1$. Quindi $\left(1 + \frac1n\right)^n < 4$ per ogni $n$. $\blacksquare$
>
> La stima è larga: tenendo da parte il termine $i = 0$ si ottiene $< 3$, e il valore vero è $e \approx 2{,}718$. Per il teorema serve solo **un** maggiorante.

### Limite di Nepero generalizzato (slide 37)

> [!abstract] Teorema (limite di Nepero generalizzato)
> A partire dalla definizione di $e$ si può dimostrare che
> $$
> \lim_{n \to +\infty} |a_n| = +\infty \implies \lim_{n \to +\infty}\left(1 + \frac{1}{a_n}\right)^{a_n} = e
> $$

Le annotazioni del prof (<span class="src">6/10, slide 37</span>): è "più in generale" della definizione, che è il caso $a_n = n$; e **non è richiesto che esista $\lim a_n$**: basta che $|a_n| \to +\infty$. Quindi $a_n$ può andare a $+\infty$, a $-\infty$, o anche saltare fra valori positivi e negativi sempre più grandi in modulo. La stella del prof è sulla formula: è il limite notevole che si usa per tutte le forme $[1^\infty]$.

**Come si riconosce.** Le tre cose devono essere **la stessa quantità**: quello che sta sotto l'$1$ nella frazione e quello che sta all'esponente. Se l'esponente è un altro, lo si aggiusta moltiplicando e dividendo (la tecnica "moltiplica e dividi" di [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)).

**La conseguenza più usata.** Per ogni $\alpha \in \mathbb{R}$:
$$
\lim_{n \to +\infty} \left(1 + \frac{\alpha}{n}\right)^n = e^\alpha
$$
La dimostrazione del prof è nell'esempio "Nepero generalizzato con $\alpha$" più sotto.

## Metodo

### Studiare la monotonia di una successione

Lo schema dell'esempio del 6/10 (slide 29):
1. **Scrivi i primi termini.** Ti dicono cosa aspettarti e se all'inizio c'è un'eccezione (con $\frac{n}{n^2+1}$: $a_0 = 0 < a_1 = \frac12$, poi scende).
2. **Scrivi la disuguaglianza da dimostrare**, per esempio $a_n \geq a_{n+1}$ per decrescente, per ogni $n$ da un certo indice in poi.
3. **Porta tutto a un membro**: $a_n - a_{n+1} \geq 0$. Fai il denominatore comune e **controlla il segno del denominatore** (di solito positivo: allora conta solo il numeratore).
4. **Semplifica il numeratore** e risolvi la disequazione in $n$. Le soluzioni naturali sono gli indici per cui vale la monotonia.
5. **Conclusione**: "decrescente per ogni $n \geq \dots$".

Variante per successioni **a termini positivi**: studiare il rapporto $\frac{a_{n+1}}{a_n}$ e confrontarlo con $1$. Comodo quando ci sono potenze e fattoriali, perché si semplificano (per esempio $\frac{2^{n+1}}{2^n} = 2$, $\frac{(n+1)!}{n!} = n + 1$).

### Usare Nepero generalizzato

```
1. il limite è [1^∞]?            base -> 1, esponente -> ±∞
2. scrivi la base come 1 + 1/a_n  a_n = 1 / (base - 1),  controlla |a_n| -> +∞
3. aggiusta l'esponente           esponente = a_n · (esponente / a_n)
4. riscrivi                       [(1 + 1/a_n)^(a_n)]^(esponente / a_n)
5. limite                         e^(lim esponente / a_n), se quel limite è un numero
```

Il passo 5 usa la regola "limite della potenza = potenza dei limiti" ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/), slide 48): la base tende a $e > 0$ e l'esponente a un numero reale.

## Esempi svolti a lezione

### $\frac{n}{n^2+1}$ è monotona decrescente (slide 29, 6/10)

Verificare che $a_n = \frac{n}{n^2+1}$ è monotona decrescente (<span class="src">6/10, pagine 9-12</span>).

Prima osservazione del prof: con $(a_n)_{n=0}^{+\infty}$ la successione non è decrescente, perché **tra $a_0$ e $a_1$ cresce**: $a_0 = 0$, $a_1 = \frac12$. Per questo si dimostra la decrescenza per $n \geq 1$, cioè si verifica che $(a_n)_{n \geq 1}$ è decrescente.

Dobbiamo mostrare che per ogni $n \geq 1$ ($n \in \mathbb{N}$) vale
$$
a_n = \frac{n}{n^2+1} \geq \frac{n+1}{(n+1)^2+1} = a_{n+1}
$$
La disuguaglianza è soddisfatta se e solo se
$$
\frac{n}{n^2+1} - \frac{n+1}{(n+1)^2+1} \geq 0 \qquad \forall n \geq 1
$$
$$
\iff \frac{n\big((n+1)^2+1\big) - (n+1)(n^2+1)}{(n^2+1)\big((n+1)^2+1\big)} \geq 0
$$
Il denominatore è $> 0$ (prodotto di due positivi), quindi basta il numeratore $\geq 0$:
$$
n(n+1)^2 + n - (n^3 + n^2 + n + 1) = n^3 + 2n^2 + n + n - n^3 - n^2 - n - 1 = n^2 + n - 1 \geq 0
$$
Per $n \geq 1$: $n^2 + n \geq 2 \geq 1$ (il prof cerchia $n^2 \geq 1$ e $n \geq 1$). La disuguaglianza è soddisfatta per ogni $n \geq 1$. $\blacksquare$

Controllo con i numeri: $a_1 = \frac12$, $a_2 = \frac25 = 0{,}4$, $a_3 = \frac{3}{10}$: scende. E per $n = 0$ il numeratore vale $-1 < 0$, che è proprio la salita da $a_0$ ad $a_1$. Per il teorema delle monotone, $(a_n)_{n \geq 1}$ ha limite $\inf\{a_n : n \geq 1\}$, che è $0$ (lo si vede con l'algebra dei limiti: $\frac{n}{n^2+1} = \frac{1/n}{1 + 1/n^2} \to 0$).

### Nepero generalizzato con $\alpha$ (slide 37, 6/10)

Calcolare $\displaystyle\lim_{n \to +\infty}\left(1 + \frac{\alpha}{n}\right)^n$ al variare di $\alpha \in \mathbb{R}$ (<span class="src">6/10, pagine 19-21</span>).

**Caso $\alpha = 0$.** La successione corrispondente è $(1, 1, 1, \dots)$, costante, e il limite è $1 = e^0$ (il prof: "ovvero $e^\alpha$ con $\alpha = 0$").

**Caso $\alpha \neq 0$.** Scegliamo $a_n = \frac{n}{\alpha}$. Quindi $|a_n| = \frac{n}{|\alpha|} \to +\infty$, e $\frac{\alpha}{n} = \frac{1}{a_n}$. Allora per Nepero generalizzato
$$
\lim_{n \to +\infty}\left(\left(1 + \frac{\alpha}{n}\right)^{n/\alpha}\right)^{\alpha} = e^\alpha
$$
"se posso permettermi di elevare alla $\alpha$ dentro il limite", e posso riscrivere
$$
\lim_{n \to +\infty}\left(1 + \frac{\alpha}{n}\right)^n = e^\alpha
$$
Il passaggio "elevare dentro il limite" è la regola della potenza della slide 48 (base $\to e > 0$, esponente costante $\alpha$), vista il giorno dopo.

**In conclusione**, per ogni $\alpha \in \mathbb{R}$: $\displaystyle\lim_{n \to +\infty}\left(1 + \frac{\alpha}{n}\right)^n = e^\alpha$.

Con $\alpha < 0$ si ha $a_n = \frac{n}{\alpha} \to -\infty$: è qui che serve la versione con $|a_n|$. Esempio: $\left(1 - \frac1n\right)^n \to e^{-1}$.

### Il problema del prestito (slide 35-37)

Dobbiamo chiedere in prestito un capitale $C_0$ (<span class="src">6/10, slide 35-36</span>).
- La banca A lo offre a un tasso di interesse annuo nominale (TAN) del $7\%$.
- La banca B propone un TAN del $6{,}9\%$, ma può capitalizzare frazioni di questo interesse in $n$ sotto-periodi di sua scelta. Con $n = 12$ capitalizza ogni mese $\frac{1}{12}$ dell'interesse annuale, cioè lo $0{,}575\%$.

Senza costi accessori, a quale banca conviene chiedere il prestito? (Il problema fu formalizzato da Jakob Bernoulli intorno al 1683.)

**Il conto della slide 36.** Con $\alpha = 0{,}069$, ad ogni scadenza il debito si moltiplica per $1 + \frac{\alpha}{n}$:
$$
C_1 = C_0 + \frac{\alpha}{n}C_0 = \left(1 + \frac\alpha n\right)C_0, \quad C_2 = \left(1 + \frac\alpha n\right)^2 C_0, \quad \dots, \quad C_n = \left(1 + \frac\alpha n\right)^n C_0
$$
Il debito dopo un anno è $C_0$ moltiplicato per $a_n = \left(1 + \frac{\alpha}{n}\right)^n$, che sembra crescere con $n$:

| $n$ | $1$ | $2$ | $4$ | $12$ | $365$ | $n \to \infty$ |
|---|---|---|---|---|---|---|
| $\left(1 + \frac{0{,}069}{n}\right)^n$ | $1{,}0690$ | $1{,}0702$ | $1{,}0708$ | $1{,}0712$ | $1{,}0714$ | $e^{0{,}069} \approx 1{,}0714$ |

**La conclusione della slide 37.** La banca B, frazionando sempre di più, può arrivare a un TAN effettivo $\beta$ con $1 + \beta = e^{0{,}069} > 1{,}071$, da cui $\beta > 0{,}071 > 0{,}07$. Pertanto è più conveniente l'offerta della banca A. La tabella dice di più: già con $n = 2$ la banca B fa pagare $7{,}02\%$, più di A. Il $6{,}9\%$ "nominale" più basso è un'illusione.

## Esercizi tipo esame

### Crocette (stile parte 1)

**C1.** Sia $(a_n)$ una successione monotona crescente. Quale affermazione è sempre vera?

- a) $a_n$ converge
- b) $a_n$ ha limite, finito oppure $+\infty$
- c) $a_n$ è limitata
- d) $a_n \to +\infty$

> [!example]- Soluzione
> **b**, il teorema della slide 30: il limite esiste ed è il sup, che può essere $+\infty$. La a) e la c) sono false per $a_n = n$; la d) è falsa per $a_n = -\frac1n$, crescente e convergente a $0$.

**C2.** $\displaystyle\lim_{n \to +\infty}\left(1 - \frac{2}{n}\right)^{n}$ vale:

- a) $1$
- b) $e^{2}$
- c) $e^{-2}$
- d) $0$

> [!example]- Soluzione
> **c**. È $\left(1 + \frac{\alpha}{n}\right)^n$ con $\alpha = -2$, quindi tende a $e^{-2}$. La a) è l'errore “$1$ elevato a qualcosa fa $1$": la forma è $[1^\infty]$, indeterminata. La b) dimentica il segno.

**C3.** $\displaystyle\lim_{n \to +\infty}\left(1 + \frac{1}{n^2}\right)^{n}$ vale:

- a) $e$
- b) $1$
- c) $e^2$
- d) $+\infty$

> [!example]- Soluzione
> **b**. Qui $a_n = n^2$ ma l'esponente è $n$, non $n^2$. Si aggiusta: $\left(1 + \frac1{n^2}\right)^n = \left[\left(1 + \frac{1}{n^2}\right)^{n^2}\right]^{1/n}$. La base tende a $e$, l'esponente $\frac1n$ a $0$, e $e^0 = 1$. La a) applica Nepero senza controllare che esponente e $a_n$ coincidano.

### Esercizi (stile parte 2)

**Esercizio 1** (lasciato per casa, slide 33). Dimostrare che $a_n = \left(1 + \frac1n\right)^n$ è strettamente crescente.

> [!example]- Soluzione
> Si parte dallo sviluppo della slide 34, senza maggiorare:
> $$
> a_n = \sum_{i=0}^{n} \frac{1}{i!}\left(1 - \frac1n\right)\left(1 - \frac2n\right)\cdots\left(1 - \frac{i-1}{n}\right)
> $$
> (per $i = 0$ e $i = 1$ il prodotto è vuoto e vale $1$). Allo stesso modo
> $$
> a_{n+1} = \sum_{i=0}^{n+1} \frac{1}{i!}\left(1 - \frac{1}{n+1}\right)\left(1 - \frac{2}{n+1}\right)\cdots\left(1 - \frac{i-1}{n+1}\right)
> $$
> Si confrontano i due:
> - **termine per termine**: per $1 \leq j \leq i - 1$ vale $\frac{j}{n+1} < \frac jn$, quindi $1 - \frac{j}{n+1} > 1 - \frac{j}{n} \geq 0$. Ogni fattore di $a_{n+1}$ è maggiore o uguale al corrispondente di $a_n$, e per $i \geq 2$ strettamente maggiore. Quindi l'$i$-esimo termine di $a_{n+1}$ è $\geq$ l'$i$-esimo di $a_n$, e strettamente per $i \geq 2$;
> - **un termine in più**: $a_{n+1}$ ha anche il termine $i = n + 1$, che è un prodotto di fattori positivi, quindi $> 0$.
>
> Per $n \geq 1$ c'è almeno il termine $i = 2$ (oppure il termine in più), quindi $a_{n+1} > a_n$. $\blacksquare$
>
> Controllo: $a_1 = 2 < a_2 = \frac94 = 2{,}25 < a_3 = \frac{64}{27} \approx 2{,}37$.

**Esercizio 2.** Calcolare $\displaystyle\lim_{n \to +\infty}\left(\frac{n+1}{n-1}\right)^n$.

> [!example]- Soluzione
> Base $\to 1$, esponente $\to +\infty$: forma $[1^\infty]$. Si scrive la base come $1 + \frac{1}{a_n}$ con "somma e sottrai":
> $$
> \frac{n+1}{n-1} = \frac{n - 1 + 2}{n-1} = 1 + \frac{2}{n-1} = 1 + \frac{1}{a_n}, \qquad a_n = \frac{n-1}{2} \to +\infty
> $$
> Si aggiusta l'esponente: $n = a_n \cdot \frac{n}{a_n} = a_n \cdot \frac{2n}{n-1}$. Quindi
> $$
> \left(\frac{n+1}{n-1}\right)^n = \left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{\frac{2n}{n-1}}
> $$
> La base tende a $e$ (Nepero generalizzato), l'esponente $\frac{2n}{n-1} = \frac{2}{1 - 1/n} \to 2$. Per la regola della potenza il limite è $e^2$.

**Esercizio 3.** Studiare la monotonia di $a_n = \dfrac{2^n}{n!}$, $n \geq 1$, e dedurne che ha limite finito.

> [!example]- Soluzione
> I termini sono positivi: si usa il rapporto.
> $$
> \frac{a_{n+1}}{a_n} = \frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} = \frac{2}{n+1}
> $$
> Per $n = 1$ vale $1$, quindi $a_2 = a_1 = 2$. Per $n \geq 2$ vale $\frac{2}{n+1} < 1$, quindi $a_{n+1} < a_n$. La successione è decrescente per $n \geq 1$, strettamente da $n = 2$ in poi: $2, 2, \frac43, \frac23, \frac{4}{15}, \dots$
>
> È limitata inferiormente da $0$ (termini positivi). Per l'osservazione della slide 30 ammette limite finito, uguale all'$\inf\{a_n\}$. Il valore del limite, $0$, viene dalla gerarchia degli infiniti ($2^n \ll n!$) o dal criterio del rapporto ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)): $\frac{a_{n+1}}{a_n} \to 0 < 1$.

## Errori tipici

- **Dimenticare $n = 0$ nella monotonia.** $\frac{n}{n^2+1}$ non è decrescente su tutto $\mathbb{N}$: tra $a_0$ e $a_1$ sale. Va detto da che indice vale.
- **Moltiplicare la disequazione senza guardare il segno del denominatore.** Nell'esempio del prof il denominatore è positivo, e va scritto.
- **"Monotona quindi converge".** Converge solo se è anche limitata; altrimenti diverge a $\pm\infty$.
- **"Limitata quindi converge".** Serve anche la monotonia: $(-1)^n$.
- **$1^\infty = 1$.** $\left(1 + \frac1n\right)^n \to e$, non $1$. La base tende a $1$ ma non è $1$.
- **Applicare Nepero con esponente sbagliato.** In $\left(1 + \frac{1}{a_n}\right)^{b_n}$ serve $b_n = a_n$: altrimenti si moltiplica e divide l'esponente per $a_n$.
- **Credere che il TAN più basso sia sempre il più conveniente.** Con la capitalizzazione frazionata il tasso effettivo cresce verso $e^\alpha - 1$.

## Domande

- Definisci successione monotona crescente e strettamente crescente. Una successione costante è crescente?

- Enuncia il teorema sul limite delle successioni monotone. Quanto vale il limite, e quando è finito?

- Perché una successione limitata ma non monotona può non avere limite? Fai un esempio.

- Come si definisce il numero $e$? Quale teorema garantisce che il limite esiste?

- Come si dimostra che $\left(1 + \frac1n\right)^n < 4$? Quali due strumenti usa la dimostrazione?

- Enuncia il limite di Nepero generalizzato. Serve che $a_n$ abbia limite?

- Quanto vale $\lim\left(1 + \frac{\alpha}{n}\right)^n$ e come lo si ricava da Nepero generalizzato?

- Come si studia la monotonia di $\frac{n}{n^2+1}$? Perché si parte da $n = 1$?

- Nel problema del prestito, perché conviene la banca A anche se ha il TAN più alto?

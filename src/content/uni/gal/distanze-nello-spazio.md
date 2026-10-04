---
title: Distanze nello spazio
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-09-21
lezioni: []
ordine: 3
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L3, alla fine del capitolo di geometria. Fonte: appunti della prof <span class="src">p. 22-23</span> (punto-punto, punto-piano), <span class="src">p. 23-25</span> (punto-retta, due metodi), <span class="src">p. 25-27</span> (retta-retta); esercitazione del tutor, <span class="src">es. 6</span>; dimostrazione della formula punto-piano nella <span class="src">dispensa, Proposizione 5, p. 27-28</span> (sezione 1.2.5), a cui rimanda la prof. Prima: [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/) e [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/). Il prodotto scalare e la proiezione ortogonale stanno in [Vettori geometrici](/uni/gal/vettori-geometrici/).

> [!abstract] Per l'esame
> - **Saper enunciare**: distanza punto-punto, punto-piano (definizione con il punto più vicino e formula), punto-retta con il piede $H$, retta-retta nei tre casi.
> - **Saper dimostrare**: la formula $d(P, \pi) = \frac{|ax_P + by_P + cz_P + d|}{\sqrt{a^2+b^2+c^2}}$ con la proiezione di $\overrightarrow{QP}$ sulla normale (a lezione la prof l'ha mostrata su un esempio e ha rimandato alla dispensa).
> - **Saper fare**: distanza punto-piano con la formula e col versore; distanza punto-retta con il metodo 1 (punto generico) e il metodo 2 (piano ausiliario); distanza fra rette parallele; distanza fra rette sghembe con perpendicolare comune o piano del fascio; piani a distanza data da un punto.
> - **Dove esce**: esercizi 1.13 b, 1.14 c, 1.16, 1.17 c del foglio 1.

**Una sola idea, quattro casi.** La distanza fra due oggetti è sempre la **minima** distanza fra un punto del primo e un punto del secondo, e quel minimo si realizza sempre lungo una **perpendicolare**. Tutto il lavoro è trovare il piede della perpendicolare, cioè il punto $H$; poi la distanza è un modulo di segmento orientato come già sai calcolarlo.

```
   punto - punto     ->  formula diretta
   punto - piano     ->  formula diretta (proiezione sulla normale)
   punto - retta     ->  trovare H, poi |PH|
   retta - retta     ->  dipende dalla posizione reciproca
```

Per le rette la prima mossa non è mai un conto di distanza: è determinare la posizione reciproca. Incidenti, parallele e sghembe si trattano in tre modi diversi.

## Definizioni

### Distanza punto-punto

Dati $P = (x_P, y_P, z_P)$ e $Q = (x_Q, y_Q, z_Q)$, la distanza è il **modulo** del segmento orientato $\overrightarrow{PQ}$:

$$
d(P, Q) = |\overrightarrow{PQ}| = \sqrt{(x_Q - x_P)^2 + (y_Q - y_P)^2 + (z_Q - z_P)^2}
$$

Sotto radice c'è una **somma** di quadrati: è il modulo in coordinate, cioè il teorema di Pitagora applicato due volte. L'ordine dei punti non conta, perché ogni differenza viene elevata al quadrato.

### Distanza punto-piano

Dato un piano $\pi$ e un punto $P$ non su di esso, la distanza è la distanza fra $P$ e il punto di $\pi$ più vicino a $P$, cioè il punto $H$ tale che $\overrightarrow{HP}$ sia **ortogonale al piano**.

<figure class="fig"><svg role="img" aria-label="distanza punto-piano" xmlns:xlink="http://www.w3.org/1999/xlink" width="379.8pt" height="208.22831pt" viewBox="0 0 379.8 208.22831" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f35-figure_1"> <g id="f35-patch_1"> <path d="M 0 208.22831 L 379.8 208.22831 L 379.8 0 L 0 0 L 0 208.22831 z " style="fill: none"/> </g> <g id="f35-axes_1"> <g id="f35-patch_2"> <path d="M 105.240775 122.167954 L 41.261784 166.966526 L 274.559225 166.966526 L 338.538216 122.167954 z " clip-path="url(#f35-p43629502a7)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="f35-line2d_1"> <path d="M 105.240775 122.167954 L 41.261784 166.966526 L 274.559225 166.966526 L 338.538216 122.167954 L 105.240775 122.167954 " clip-path="url(#f35-p43629502a7)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f35-line2d_2"> <path d="M 190.401756 147.767138 L 190.401756 41.261784 " clip-path="url(#f35-p43629502a7)" style="fill: none; stroke-dasharray: 2.2,3.63; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 2.2"/> </g> <g id="f35-line2d_3"> <path d="M 190.401756 135.595097 L 202.573796 135.595097 L 202.573796 147.767138 " clip-path="url(#f35-p43629502a7)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f35-patch_3"> <path d="M 88.188389 158.966781 Q 139.295072 100.114283 189.375467 42.443619 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 184.829411 44.323345 L 189.375467 42.443619 L 188.151614 47.2083 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: round"/> </g> <g id="f35-patch_4"> <path d="M 291.611611 130.167699 Q 291.611611 97.201756 291.611611 66.248275 " style="fill: none; stroke: var(--fig-accent-deep); stroke-width: 1.8; stroke-linecap: round"/> <path d="M 289.211611 71.048275 L 291.611611 66.248275 L 294.011611 71.048275 z " style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep); stroke-width: 1.8; stroke-linecap: round"/> </g> <g id="f35-text_1"> <!-- $P$ --> <g style="fill: var(--fig-accent)" transform="translate(185.981756 28.40935) scale(0.13 -0.13)"> <defs> <path id="f35-DejaVuSerif-Italic-33" d="M 1594 2375 L 2419 2375 Q 2884 2375 3176 2626 Q 3469 2878 3559 3353 Q 3653 3831 3457 4081 Q 3262 4331 2797 4331 L 1972 4331 L 1594 2375 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3016 4666 Q 3716 4666 4056 4311 Q 4397 3956 4278 3353 Q 4162 2753 3684 2397 Q 3206 2041 2506 2041 L 1528 2041 L 1194 331 L 1916 331 L 1853 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-Italic-33" transform="translate(0 0.09375)"/> </g> </g> <g id="f35-text_2"> <!-- $H$ --> <g style="fill: var(--fig-accent)" transform="translate(200.911143 162.301795) scale(0.13 -0.13)"> <defs> <path id="f35-DejaVuSerif-Italic-2b" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 2631 4666 L 2566 4331 L 1972 4331 L 1659 2719 L 4078 2719 L 4391 4331 L 3797 4331 L 3862 4666 L 5684 4666 L 5619 4331 L 5025 4331 L 4247 331 L 4841 331 L 4778 0 L 2956 0 L 3019 331 L 3616 331 L 4003 2338 L 1584 2338 L 1194 331 L 1787 331 L 1725 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-Italic-2b" transform="translate(0 0.09375)"/> </g> </g> <g id="f35-text_3"> <!-- $Q$ --> <g style="fill: var(--fig-axis)" transform="translate(80.322547 180.094626) scale(0.13 -0.13)"> <defs> <path id="f35-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-Italic-34" transform="translate(0 0.78125)"/> </g> </g> <g id="f35-text_4"> <!-- $\vec{n}$ --> <g style="fill: var(--fig-accent-deep)" transform="translate(303.615999 62.30827) scale(0.13 -0.13)"> <defs> <path id="f35-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#f35-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> </g> </g> <g id="f35-text_5"> <!-- $d(P, \pi)$ --> <g style="fill: var(--fig-accent)" transform="translate(212.321065 97.892938) scale(0.13 -0.13)"> <defs> <path id="f35-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> <path id="f35-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-Italic-47" transform="translate(0 0.015625)"/> <use xlink:href="#f35-DejaVuSerif-b" transform="translate(64.013672 0.015625)"/> <use xlink:href="#f35-DejaVuSerif-Italic-33" transform="translate(103.027344 0.015625)"/> <use xlink:href="#f35-DejaVuSerif-f" transform="translate(170.3125 0.015625)"/> <use xlink:href="#f35-DejaVuSerif-Italic-338" transform="translate(221.064453 0.015625)"/> <use xlink:href="#f35-DejaVuSerif-c" transform="translate(286.787109 0.015625)"/> </g> </g> <g id="f35-text_6"> <!-- $\overrightarrow{QP}$ --> <g style="fill: var(--fig-axis)" transform="translate(94.043288 101.801076) scale(0.13 -0.13)"> <defs> <path id="f35-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f35-DejaVuSerif-854" transform="translate(50.598145 75.265625)"/> <use xlink:href="#f35-DejaVuSerif-Italic-34" transform="translate(0 0.46875)"/> <use xlink:href="#f35-DejaVuSerif-Italic-33" transform="translate(81.982422 0.46875)"/> </g> </g> <g id="f35-text_7"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(290.910296 164.77699) scale(0.15 -0.15)"> <use xlink:href="#f35-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f35-line2d_4"> <defs> <path id="f35-m19d3a78451" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f35-p43629502a7)"> <use xlink:href="#f35-m19d3a78451" x="190.401756" y="41.261784" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f35-line2d_5"> <g clip-path="url(#f35-p43629502a7)"> <use xlink:href="#f35-m19d3a78451" x="190.401756" y="147.767138" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f35-line2d_6"> <defs> <path id="f35-mb8aa9c801a" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-axis)"/> </defs> <g clip-path="url(#f35-p43629502a7)"> <use xlink:href="#f35-mb8aa9c801a" x="88.188389" y="158.966781" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> </g> </g> </g> </g> <defs> <clipPath id="f35-p43629502a7"> <rect x="5.76" y="5.76" width="368.28" height="196.70831"/> </clipPath> </defs> </svg></figure>

Come la calcola la prof: si prende un punto qualunque $Q$ su $\pi$ e il **versore** normale $\vec{n}$. La distanza è il modulo della proiezione ortogonale di $\overrightarrow{QP}$ su $\vec{n}$:

$$
d(P, \pi) = \left|(\overrightarrow{QP} \cdot \vec{n})\,\vec{n}\right| = |\overrightarrow{QP} \cdot \vec{n}| \qquad (|\vec{n}| = 1)
$$

L'ultima uguaglianza vale perché il modulo di un numero per un versore è il valore assoluto del numero. Da qui esce la formula chiusa dell'enunciato qui sotto.

### Distanza punto-retta

La prof: $d(P, r) = d(P, H)$, dove $H$ è il punto di $r$ tale che $\overrightarrow{HP} \cdot \vec{v} = 0$, con $\vec{v}$ vettore direzionale di $r$.

<figure class="fig"><svg role="img" aria-label="distanza punto-retta" xmlns:xlink="http://www.w3.org/1999/xlink" width="274.317287pt" height="233.28pt" viewBox="0 0 274.317287 233.28" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f36-figure_1"> <g id="f36-patch_1"> <path d="M -0 233.28 L 274.317287 233.28 L 274.317287 0 L -0 0 L -0 233.28 z " style="fill: none"/> </g> <g id="f36-axes_1"> <g id="f36-line2d_1"> <path d="M 55.302318 137.526234 L 219.014969 177.977682 " clip-path="url(#f36-p0d20547d65)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f36-line2d_2"> <path d="M 144.45983 55.302318 L 124.59149 154.646764 " clip-path="url(#f36-p0d20547d65)" style="fill: none; stroke-dasharray: 2.2,3.63; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 2.2"/> </g> <g id="f36-line2d_3"> <path d="M 127.106165 142.073041 L 139.554511 145.148879 L 137.039836 157.722602 " clip-path="url(#f36-p0d20547d65)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f36-patch_2"> <path d="M 144.45983 55.302318 Q 163.729008 112.190341 182.496028 167.595853 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 183.168145 162.722634 L 182.496028 167.595853 L 179.000723 164.134228 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: round"/> </g> <g id="f36-patch_3"> <path d="M 124.59149 154.646764 Q 149.148388 160.714481 171.75158 166.299461 " style="fill: none; stroke: var(--fig-accent-deep); stroke-width: 1.8; stroke-linecap: round"/> <path d="M 167.667418 162.818135 L 171.75158 166.299461 L 166.516023 167.477994 z " style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep); stroke-width: 1.8; stroke-linecap: round"/> </g> <g id="f36-text_1"> <!-- $P$ --> <g style="fill: var(--fig-accent)" transform="translate(140.03983 41.193747) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-33" d="M 1594 2375 L 2419 2375 Q 2884 2375 3176 2626 Q 3469 2878 3559 3353 Q 3653 3831 3457 4081 Q 3262 4331 2797 4331 L 1972 4331 L 1594 2375 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3016 4666 Q 3716 4666 4056 4311 Q 4397 3956 4278 3353 Q 4162 2753 3684 2397 Q 3206 2041 2506 2041 L 1528 2041 L 1194 331 L 1916 331 L 1853 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-33" transform="translate(0 0.09375)"/> </g> </g> <g id="f36-text_2"> <!-- $H$ --> <g style="fill: var(--fig-accent)" transform="translate(98.471712 165.017926) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-2b" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 2631 4666 L 2566 4331 L 1972 4331 L 1659 2719 L 4078 2719 L 4391 4331 L 3797 4331 L 3862 4666 L 5684 4666 L 5619 4331 L 5025 4331 L 4247 331 L 4841 331 L 4778 0 L 2956 0 L 3019 331 L 3616 331 L 4003 2338 L 1584 2338 L 1194 331 L 1787 331 L 1725 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-2b" transform="translate(0 0.09375)"/> </g> </g> <g id="f36-text_3"> <!-- $Q(t)$ --> <g style="fill: var(--fig-axis)" transform="translate(184.504456 198.685126) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-34" transform="translate(0 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-b" transform="translate(81.982422 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-Italic-57" transform="translate(120.996094 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-c" transform="translate(161.181641 0.015625)"/> </g> </g> <g id="f36-text_4"> <!-- $\vec{v}$ --> <g style="fill: var(--fig-accent-deep)" transform="translate(175.828793 191.210453) scale(0.13 -0.13)"> <defs> <path id="f36-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f36-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> </g> </g> <g id="f36-text_5"> <!-- $r$ --> <g style="fill: var(--fig-ink)" transform="translate(236.294747 169.697619) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f36-text_6"> <!-- $d(P, r)$ --> <g style="fill: var(--fig-accent)" transform="translate(70.79185 108.353018) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-47" transform="translate(0 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-b" transform="translate(64.013672 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-Italic-33" transform="translate(103.027344 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-f" transform="translate(170.3125 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-Italic-55" transform="translate(221.064453 0.015625)"/> <use xlink:href="#f36-DejaVuSerif-c" transform="translate(268.867188 0.015625)"/> </g> </g> <g id="f36-line2d_4"> <defs> <path id="f36-m5edd657b3d" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f36-p0d20547d65)"> <use xlink:href="#f36-m5edd657b3d" x="144.45983" y="55.302318" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f36-line2d_5"> <g clip-path="url(#f36-p0d20547d65)"> <use xlink:href="#f36-m5edd657b3d" x="124.59149" y="154.646764" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f36-line2d_6"> <defs> <path id="f36-m2b9a4d75ac" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-axis)"/> </defs> <g clip-path="url(#f36-p0d20547d65)"> <use xlink:href="#f36-m2b9a4d75ac" x="182.998186" y="169.078363" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> </g> </g> </g> </g> <defs> <clipPath id="f36-p0d20547d65"> <rect x="5.76" y="5.76" width="262.797287" height="221.76"/> </clipPath> </defs> </svg></figure>

$H$ si chiama **piede della perpendicolare** da $P$ a $r$. Non c'è una formula chiusa da imparare: si trova con uno dei due metodi nella sezione Metodo.

### Distanza retta-retta

La prof: date due rette $r$ e $r'$, $d(r, r')$ è la distanza minima fra un punto su $r$ e un punto su $r'$.

<figure class="fig"><svg role="img" aria-label="distanza tra rette sghembe" xmlns:xlink="http://www.w3.org/1999/xlink" width="314.3755pt" height="233.28pt" viewBox="0 0 314.3755 233.28" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f37-figure_1"> <g id="f37-patch_1"> <path d="M 0 233.28 L 314.3755 233.28 L 314.3755 0 L 0 0 L 0 233.28 z " style="fill: none"/> </g> <g id="f37-axes_1"> <g id="f37-line2d_1"> <path d="M 97.36533 146.593446 L 227.843511 184.186632 " clip-path="url(#f37-p2b39ad5ce0)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f37-line2d_2"> <path d="M 265.282132 49.093368 L 49.093368 86.686554 " clip-path="url(#f37-p2b39ad5ce0)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.2; stroke-linecap: square"/> </g> <g id="f37-line2d_3"> <path d="M 160.565699 164.802646 L 160.565699 67.302567 " clip-path="url(#f37-p2b39ad5ce0)" style="fill: none; stroke-dasharray: 2.2,3.63; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 2.2"/> </g> <g id="f37-text_1"> <!-- $r$ --> <g style="fill: var(--fig-ink)" transform="translate(240.973524 184.85525) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f37-text_2"> <!-- $r'$ --> <g style="fill: var(--fig-steel)" transform="translate(27.968355 79.556688) scale(0.13 -0.13)"> <defs> <path id="f37-Cmsy10-49" d="M 225 347 Q 184 359 184 409 L 966 3316 Q 1003 3434 1093 3506 Q 1184 3578 1300 3578 Q 1450 3578 1564 3479 Q 1678 3381 1678 3231 Q 1678 3166 1644 3084 L 488 319 Q 466 275 428 275 Q 394 275 320 306 Q 247 338 225 347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-55" transform="translate(0 0.565625)"/> <use xlink:href="#f37-Cmsy10-49" transform="translate(52.240921 41.865625) scale(0.7)"/> </g> </g> <g id="f37-text_3"> <!-- $H$ --> <g style="fill: var(--fig-accent)" transform="translate(135.887351 176.304605) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-2b" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 2631 4666 L 2566 4331 L 1972 4331 L 1659 2719 L 4078 2719 L 4391 4331 L 3797 4331 L 3862 4666 L 5684 4666 L 5619 4331 L 5025 4331 L 4247 331 L 4841 331 L 4778 0 L 2956 0 L 3019 331 L 3616 331 L 4003 2338 L 1584 2338 L 1194 331 L 1787 331 L 1725 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-2b" transform="translate(0 0.09375)"/> </g> </g> <g id="f37-text_4"> <!-- $H'$ --> <g style="fill: var(--fig-accent)" transform="translate(131.294015 60.172702) scale(0.13 -0.13)"> <use xlink:href="#f37-DejaVuSerif-Italic-2b" transform="translate(0 0.565625)"/> <use xlink:href="#f37-Cmsy10-49" transform="translate(94.386156 41.865625) scale(0.7)"/> </g> </g> <g id="f37-text_5"> <!-- $d(r, r')$ --> <g style="fill: var(--fig-accent)" transform="translate(188.840738 119.756083) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-47" transform="translate(0 0.565625)"/> <use xlink:href="#f37-DejaVuSerif-b" transform="translate(64.013672 0.565625)"/> <use xlink:href="#f37-DejaVuSerif-Italic-55" transform="translate(103.027344 0.565625)"/> <use xlink:href="#f37-DejaVuSerif-f" transform="translate(150.830078 0.565625)"/> <use xlink:href="#f37-DejaVuSerif-Italic-55" transform="translate(201.582031 0.565625)"/> <use xlink:href="#f37-Cmsy10-49" transform="translate(253.822952 41.865625) scale(0.7)"/> <use xlink:href="#f37-DejaVuSerif-c" transform="translate(275.661331 0.565625)"/> </g> </g> <g id="f37-line2d_4"> <defs> <path id="f37-m55f1c212f5" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f37-p2b39ad5ce0)"> <use xlink:href="#f37-m55f1c212f5" x="160.565699" y="164.802646" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f37-line2d_5"> <g clip-path="url(#f37-p2b39ad5ce0)"> <use xlink:href="#f37-m55f1c212f5" x="160.565699" y="67.302567" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> </g> <defs> <clipPath id="f37-p2b39ad5ce0"> <rect x="5.76" y="5.76" width="302.8555" height="221.76"/> </clipPath> </defs> </svg></figure>

Nel caso sghembo il segmento $\overrightarrow{PQ}$ che realizza il minimo ha gli estremi su $r$ e su $r'$ ed è **ortogonale a entrambe**: è la **perpendicolare comune**, e la prof definisce $d(r, r') = d(P, Q)$.

## Enunciati

### Distanza punto-piano

> [!abstract] Proposizione
> Siano $P = (x_P, y_P, z_P)$ e $\pi : ax + by + cz + d = 0$. Allora
> $$
> d(P, \pi) = \frac{|a x_P + b y_P + c z_P + d|}{\sqrt{a^2 + b^2 + c^2}}
> $$

Al numeratore c'è l'equazione del piano **valutata in $P$**, in valore assoluto; al denominatore il modulo della normale. Due letture utili: se $P$ sta sul piano il numeratore è zero e la distanza è zero, come deve essere; e se l'equazione del piano è già normalizzata ($|\vec{n}| = 1$) la distanza è direttamente il numeratore.

Il valore assoluto serve perché $a x_P + b y_P + c z_P + d$ ha segno: è positivo da un lato del piano e negativo dall'altro. Il segno dice **da che parte** sta $P$, cosa che a volte serve, ma la distanza è comunque non negativa.

> [!note]- Dimostrazione (dispensa, Proposizione 5)
> Sia $\vec{n} = (a, b, c)$ la normale e sia $Q = (x_Q, y_Q, z_Q)$ un punto qualunque di $\pi$. Il vettore $\overrightarrow{HP}$ è la proiezione ortogonale di $\overrightarrow{QP}$ su $\vec{n}$:
> $$
> \overrightarrow{HP} = \left(\overrightarrow{QP} \cdot \vec{n}\right) \frac{\vec{n}}{|\vec{n}|^2}
> $$
> Sviluppo il prodotto scalare:
> $$
> \overrightarrow{QP} \cdot \vec{n} = (x_P - x_Q,\ y_P - y_Q,\ z_P - z_Q) \cdot (a, b, c) = (a x_P + b y_P + c z_P) - (a x_Q + b y_Q + c z_Q)
> $$
> Ora arriva il passaggio chiave: $Q$ sta sul piano, quindi le sue coordinate soddisfano l'equazione, cioè $a x_Q + b y_Q + c z_Q = -d$. Sostituendo:
> $$
> \overrightarrow{QP} \cdot \vec{n} = a x_P + b y_P + c z_P + d
> $$
> Il punto $Q$ è sparito dal conto, ed è il motivo per cui la formula finale non dipende da quale punto del piano hai scelto. Prendendo il modulo:
> $$
> d(P, \pi) = \left|\overrightarrow{HP}\right| = \frac{|a x_P + b y_P + c z_P + d|}{|\vec{n}|^2} \cdot |\vec{n}| = \frac{|a x_P + b y_P + c z_P + d|}{\sqrt{a^2+b^2+c^2}} \qquad \blacksquare
> $$

### Distanza fra due rette, i tre casi

> [!abstract] Cosa fare secondo la posizione reciproca (prof, appunti p. 26)
> - **Incidenti:** $d(r, r') = 0$.
> - **Parallele:** $d(r, r') = d(P, r')$, dove $P$ è un punto qualunque di $r$: si calcola con il metodo punto-retta.
> - **Sghembe:** si cerca la perpendicolare comune (metodo 1) oppure si usa il piano del fascio (metodo 2).

Nel caso parallelo la scelta del punto su $r$ è libera perché la distanza fra due rette parallele è la stessa in ogni punto: è quello che significa essere parallele.

## Metodo

### Distanza punto-piano

Con la formula: sostituisci $P$ nell'equazione del piano, prendi il valore assoluto, dividi per $\sqrt{a^2 + b^2 + c^2}$. Se serve anche il piede $H$, è la proiezione ortogonale di $P$ sul piano: retta per $P$ con direzionale $\vec{n}$, intersecata col piano (metodo in [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/)).

**Piani a distanza data.** Se il piano cercato ha normale nota (parallelo a un piano dato, oppure ortogonale a una retta data) l'unica incognita è $d$. Imponi $\frac{|ax_P + by_P + cz_P + d|}{\sqrt{a^2+b^2+c^2}} = \delta$: il valore assoluto dà **due** equazioni e quindi due piani, uno per parte rispetto a $P$.

### Distanza punto-retta, metodo 1 (punto generico)

1. Scrivi le parametriche di $r$ e chiama $Q(t) = (x_A + t v_1,\ y_A + t v_2,\ z_A + t v_3)$ il punto generico.
2. Calcola $\overrightarrow{PQ(t)}$, che dipende da $t$.
3. Imponi l'ortogonalità al direzionale: $\overrightarrow{PQ(t)} \cdot \vec{v} = 0$. È un'equazione di primo grado in $t$.
4. La soluzione $t_0$ dà $H = Q(t_0)$.
5. $d(P, r) = d(P, H)$.

### Distanza punto-retta, metodo 2 (piano ausiliario)

1. Scrivi il piano $\pi$ passante per $P$ e **ortogonale** a $r$: la sua normale è il direzionale di $r$, quindi $\pi : v_1 x + v_2 y + v_3 z + d = 0$, e $d$ si ricava imponendo il passaggio per $P$.
2. Trova $H = \pi \cap r$ sostituendo le parametriche di $r$ nell'equazione di $\pi$ e ricavando $t$.
3. $d(P, r) = d(P, H)$.

I due metodi portano alla **stessa equazione in $t$**, scritta in modo diverso. Il primo è più corto; il secondo è utile quando il piano ausiliario serve comunque per altre richieste dello stesso esercizio.

### Distanza fra rette parallele

Prendi un punto qualunque $P$ di $r$ e calcola $d(P, r')$ con uno dei due metodi punto-retta. Prima controlla che non siano coincidenti: se $P$ sta anche su $r'$ la distanza è $0$.

### Distanza fra rette sghembe, metodo 1 (perpendicolare comune)

1. Scrivi il punto generico $P(t)$ su $r$ e $Q(s)$ su $r'$, con **parametri diversi**.
2. Calcola $\overrightarrow{P(t)Q(s)}$, che dipende da $t$ e da $s$.
3. Imponi le due ortogonalità:
   $$
   \begin{cases} \overrightarrow{P(t)Q(s)} \cdot \vec{v} = 0 \\ \overrightarrow{P(t)Q(s)} \cdot \vec{w} = 0 \end{cases}
   $$
   dove $\vec{v}$ e $\vec{w}$ sono i direzionali di $r$ e $r'$.
4. Risolvi il sistema lineare in $t$ e $s$: la soluzione $(t_0, s_0)$ dà $P = P(t_0)$ e $Q = Q(s_0)$.
5. $d(r, r') = d(P, Q)$.

### Distanza fra rette sghembe, metodo 2 (piano del fascio)

1. Scrivi le cartesiane di $r$ e da lì il fascio di piani di sostegno $r$: $\lambda(\ldots) + \mu(\ldots) = 0$.
2. Estrai la normale $\vec{n}$ del generico piano del fascio, con $\lambda$ e $\mu$ dentro.
3. Imponi che il piano sia **parallelo** a $r'$, cioè $\vec{n} \cdot \vec{w} = 0$. Esce una relazione fra $\lambda$ e $\mu$.
4. Scegli i valori e ottieni il piano $\pi$: contiene $r$ ed è parallelo a $r'$.
5. Prendi un punto qualunque $Q$ di $r'$: $d(r, r') = d(Q, \pi)$ con la formula punto-piano.

Il secondo metodo funziona perché $r'$ è parallela a $\pi$, quindi tutti i suoi punti hanno la stessa distanza da $\pi$, e $r$ sta dentro $\pi$: la distanza fra $r'$ e il piano è esattamente la distanza fra le due rette. Il metodo 2 dà solo il numero; se il testo chiede anche i punti di minima distanza serve il metodo 1.

## Esempi svolti a lezione

> [!example]- Prof, L3, appunti p. 22-23: $d(P, \pi)$ con $\pi : 2x - 2y + z - 1 = 0$ e $P = (1, 0, 1)$
> **$P \notin \pi$:** $2 - 0 + 1 - 1 = 2 \neq 0$.
>
> **Versore normale.** $|(2, -2, 1)| = \sqrt{4 + 4 + 1} = 3$, quindi
> $$
> \vec{n} = \frac{(2, -2, 1)}{3} = \left(\frac{2}{3}, -\frac{2}{3}, \frac{1}{3}\right)
> $$
> La prof corregge "vettore" in "versore": la formula $(\overrightarrow{QP} \cdot \vec{n})\,\vec{n}$ è quella della proiezione **su un versore**.
>
> **Un punto del piano.** $Q = (1, 1, 1)$: $2 - 2 + 1 - 1 = 0$, sta su $\pi$. Allora $\overrightarrow{QP} = (1-1,\ 0-1,\ 1-1) = (0, -1, 0)$.
>
> **Proiezione.**
> $$
> \overrightarrow{QP} \cdot \vec{n} = 0 \cdot \tfrac{2}{3} + (-1)\left(-\tfrac{2}{3}\right) + 0 \cdot \tfrac{1}{3} = \frac{2}{3} \qquad (\overrightarrow{QP} \cdot \vec{n})\,\vec{n} = \frac{2}{3}\,\vec{n}
> $$
> $$
> d(P, \pi) = \left|\frac{2}{3}\,\vec{n}\right| = \frac{2}{3}\,|\vec{n}| = \frac{2}{3}
> $$
> perché $|\vec{n}| = 1$.
>
> **Controllo con la formula generale** (enunciata subito dopo dalla prof): $\frac{|2 \cdot 1 - 2 \cdot 0 + 1 - 1|}{\sqrt{4 + 4 + 1}} = \frac{2}{3}$.

> [!example]- Prof, L3, appunti p. 24-25: $d(P, r)$ con $P = (1,2,2)$ e $r : (3 + 2t,\ -1 - t,\ 3 - t)$, entrambi i metodi
> È anche l'Esempio 10 della dispensa.
>
> **Direzionale.** $\vec{v} = (2, -1, -1)$.
>
> **Metodo 1.** Punto generico $Q(t) = (3+2t,\ -1-t,\ 3-t)$, quindi
> $$
> \overrightarrow{PQ(t)} = (3+2t-1,\ -1-t-2,\ 3-t-2) = (2+2t,\ -3-t,\ 1-t)
> $$
> Ortogonalità con $\vec{v}$:
> $$
> 2(2+2t) - (-3-t) - (1-t) = 4 + 4t + 3 + t - 1 + t = 6t + 6 = 0 \quad\Longrightarrow\quad t_0 = -1
> $$
> Quindi $H = Q(-1) = (1, 0, 4)$ e (la prof omette il conto)
> $$
> d(P, r) = d(P, H) = \sqrt{(1-1)^2 + (0-2)^2 + (4-2)^2} = \sqrt{0 + 4 + 4} = 2\sqrt{2}
> $$
>
> **Metodo 2.** Il piano per $P$ ortogonale a $r$ ha normale $\vec{v} = (2,-1,-1)$, quindi $2x - y - z + d = 0$. Passaggio per $P(1,2,2)$: $2 - 2 - 2 + d = 0$, cioè $d = 2$ e
> $$
> \pi : 2x - y - z + 2 = 0
> $$
> Sostituisco le parametriche di $r$:
> $$
> 2(3+2t) - (-1-t) - (3-t) + 2 = 6 + 4t + 1 + t - 3 + t + 2 = 6t + 6 = 0 \quad\Longrightarrow\quad t_0 = -1
> $$
> Stesso $t$, quindi stesso $H = (1,0,4)$ e stessa distanza $2\sqrt{2}$.
>
> > [!warning] Refusi nella dispensa
> > Nel metodo 2 la dispensa scrive "si trova $d = -2$" ma poi usa correttamente $2x - y - z + 2 = 0$: il valore giusto è $d = 2$, come negli appunti della prof. Inoltre il secondo metodo è intitolato di nuovo "Metodo 1".

> [!example]- Prof, L3, appunti p. 26-27: rette sghembe $r : (1-t,\ -1+3t,\ -t)$ e $r' : (2+s,\ s,\ 1-s)$
> A lezione la prof ha impostato il metodo 1 e dato la soluzione $t = 0$, $s = -\frac{1}{3}$; il resto del conto e il metodo 2 li ha lasciati come esercizio. Qui sono svolti per esteso.
>
> **Direzionali.** $\vec{v} = (-1, 3, -1)$ e $\vec{w} = (1, 1, -1)$: non proporzionali.
>
> **Metodo 1.** Il vettore che unisce i due punti generici è
> $$
> \overrightarrow{P(t)Q(s)} = \big((2+s) - (1-t),\ s - (-1+3t),\ (1-s) - (-t)\big) = (1+s+t,\ 1+s-3t,\ 1-s+t)
> $$
> Le due condizioni di ortogonalità:
> $$
> \begin{cases} -(1+s+t) + 3(1+s-3t) - (1-s+t) = 3s - 11t + 1 = 0 \\ (1+s+t) + (1+s-3t) - (1-s+t) = 3s - 3t + 1 = 0 \end{cases}
> $$
> Sottraendo la seconda dalla prima: $-8t = 0$, quindi $t = 0$ e poi $s = -\frac{1}{3}$, come sugli appunti. Il vettore diventa
> $$
> \overrightarrow{PQ} = \left(1 - \tfrac{1}{3},\ 1 - \tfrac{1}{3},\ 1 + \tfrac{1}{3}\right) = \left(\tfrac{2}{3}, \tfrac{2}{3}, \tfrac{4}{3}\right)
> $$
> $$
> d(r, r') = \sqrt{\tfrac{4}{9} + \tfrac{4}{9} + \tfrac{16}{9}} = \sqrt{\tfrac{24}{9}} = \frac{2\sqrt{6}}{3}
> $$
> Controllo: $\left(\frac{2}{3}, \frac{2}{3}, \frac{4}{3}\right) \cdot (-1, 3, -1) = \frac{-2 + 6 - 4}{3} = 0$ e $\cdot (1, 1, -1) = \frac{2 + 2 - 4}{3} = 0$.
>
> **Metodo 2.** Cartesiane di $r$: da $z = -t$ viene $t = -z$, quindi $x = 1 + z$ e $y = -1 - 3z$, cioè
> $$
> r : \begin{cases} x - z - 1 = 0 \\ y + 3z + 1 = 0 \end{cases}
> $$
> Fascio di sostegno $r$:
> $$
> \lambda(x - z - 1) + \mu(y + 3z + 1) = 0 \quad\Longrightarrow\quad \lambda x + \mu y + (3\mu - \lambda)z + (\mu - \lambda) = 0
> $$
> Normale $\vec{n} = (\lambda,\ \mu,\ 3\mu - \lambda)$. Parallelismo con $r'$:
> $$
> \vec{n} \cdot \vec{w} = \lambda + \mu - 3\mu + \lambda = 2\lambda - 2\mu = 0 \quad\Longrightarrow\quad \lambda = \mu
> $$
> Scelgo $\lambda = \mu = 1$: $\pi : x + y + 2z = 0$.
>
> Prendo $Q = (2, 0, 1)$ su $r'$ (parametro $s = 0$):
> $$
> d(Q, \pi) = \frac{|2 + 0 + 2|}{\sqrt{1 + 1 + 4}} = \frac{4}{\sqrt{6}} = \frac{4\sqrt{6}}{6} = \frac{2\sqrt{6}}{3}
> $$
> Stesso risultato del metodo 1.

> [!example]- Tutor, esercitazione 1, es. 6: $r : \{x - y = 0,\ y - z - 1 = 0\}$, $r'$ per $A(2,0,1)$ e $B(3,0,0)$, $\pi$ ortogonale a $r$ per $C(-1,0,0)$, $P = r \cap \pi$. Trova $d(P, r')$.
> **Gli ingredienti.**
> - $r'$: direzionale $\overrightarrow{AB} = (3-2,\ 0-0,\ 0-1) = (1, 0, -1)$, parametriche da $A$: $r' : (2 + s,\ 0,\ 1 - s)$.
> - $r$ in parametriche, ponendo $z = t$: $y = 1 + t$, $x = y = 1 + t$, quindi $r : (1 + t,\ 1 + t,\ t)$ e $\vec{v} = (1, 1, 1)$.
> - $\pi$ è ortogonale a $r$, quindi ha normale $\vec{v}$: $x + y + z + d = 0$. Passaggio per $C$: $-1 + d = 0$, $d = 1$. $\pi : x + y + z + 1 = 0$.
> - $P = r \cap \pi$: $(1 + t) + (1 + t) + t + 1 = 3t + 3 = 0$, quindi $t = -1$ e $P = (0, 0, -1)$.
>
> **Metodo I (punto generico).** $Q(s) = (2 + s,\ 0,\ 1 - s)$, $\vec{w} = (1, 0, -1)$.
> $$
> \overrightarrow{PQ(s)} = (2 + s,\ 0,\ 2 - s) \qquad \overrightarrow{PQ(s)} \cdot \vec{w} = (2 + s) - (2 - s) = 2s = 0 \quad\Longrightarrow\quad s = 0
> $$
> Il piede è $Q(0) = (2, 0, 1) = A$, e
> $$
> d(P, r') = \sqrt{(2-0)^2 + (0-0)^2 + (1-(-1))^2} = \sqrt{8} = 2\sqrt{2}
> $$
>
> **Metodo II (piano ausiliario).** Piano $\pi'$ ortogonale a $r'$ per $P$: $x - z + d = 0$, e $0 + 1 + d = 0$ dà $d = -1$, quindi $\pi' : x - z - 1 = 0$. Interseco con $r'$: $(2 + s) - (1 - s) - 1 = 2s = 0$, $s = 0$, $H = (2, 0, 1)$. Stessa distanza $2\sqrt{2}$.

## Esercizi tipo esame

**Esercizio 1.** Siano $\pi : x - 2y + 2z + 1 = 0$ e $P = (3, -1, 2)$. Calcola $d(P, \pi)$ e trova il punto $H$ di $\pi$ più vicino a $P$.

> [!example]- Soluzione
> **Distanza.** Sostituisco $P$: $3 + 2 + 4 + 1 = 10$. $|\vec{n}| = \sqrt{1 + 4 + 4} = 3$.
> $$
> d(P, \pi) = \frac{|10|}{3} = \frac{10}{3}
> $$
> **Piede.** Retta per $P$ con direzionale $\vec{n} = (1, -2, 2)$: $(3 + t,\ -1 - 2t,\ 2 + 2t)$. Nel piano:
> $$
> (3 + t) - 2(-1 - 2t) + 2(2 + 2t) + 1 = 10 + 9t = 0 \quad\Longrightarrow\quad t = -\frac{10}{9}
> $$
> $$
> H = \left(3 - \frac{10}{9},\ -1 + \frac{20}{9},\ 2 - \frac{20}{9}\right) = \left(\frac{17}{9}, \frac{11}{9}, -\frac{2}{9}\right)
> $$
> **Verifica.** $H \in \pi$: $\frac{17 - 22 - 4 + 9}{9} = 0$. $d(P, H) = |t|\,|\vec{n}| = \frac{10}{9} \cdot 3 = \frac{10}{3}$: torna.

**Esercizio 2.** Trova i piani paralleli a $\pi : 2x + y - 2z = 0$ che distano $3$ dal punto $A = (1, 1, 1)$.

> [!example]- Soluzione
> Paralleli a $\pi$ significa stessa normale: $2x + y - 2z + d = 0$, con $d$ incognito. $|\vec{n}| = \sqrt{4 + 1 + 4} = 3$.
> $$
> \frac{|2 + 1 - 2 + d|}{3} = 3 \quad\Longrightarrow\quad |1 + d| = 9
> $$
> Il valore assoluto dà due casi: $1 + d = 9$, cioè $d = 8$, oppure $1 + d = -9$, cioè $d = -10$.
> $$
> 2x + y - 2z + 8 = 0 \qquad 2x + y - 2z - 10 = 0
> $$
> Verifica: $\frac{|1 + 8|}{3} = 3$ e $\frac{|1 - 10|}{3} = 3$. I due piani stanno da parti opposte di $A$ (valori $+9$ e $-9$).

**Esercizio 3.** Siano $P = (2, 1, 0)$ e $r : \{x - y = 0,\ z - 1 = 0\}$.

- a) Calcola $d(P, r)$ con entrambi i metodi.
- b) Sia $r'$ la retta per $P$ parallela a $r$. Quanto vale $d(r, r')$?

> [!example]- Soluzione
> **Parametriche di $r$.** Pongo $x = t$: $y = t$, $z = 1$. $Q(t) = (t, t, 1)$, $\vec{v} = (1, 1, 0)$. $P \notin r$ perché $2 - 1 \neq 0$.
>
> **a) Metodo 1.** $\overrightarrow{PQ(t)} = (t - 2,\ t - 1,\ 1)$, e
> $$
> \overrightarrow{PQ(t)} \cdot \vec{v} = (t - 2) + (t - 1) = 2t - 3 = 0 \quad\Longrightarrow\quad t_0 = \frac{3}{2}
> $$
> $H = \left(\frac{3}{2}, \frac{3}{2}, 1\right)$, $\overrightarrow{PH} = \left(-\frac{1}{2}, \frac{1}{2}, 1\right)$,
> $$
> d(P, r) = \sqrt{\frac{1}{4} + \frac{1}{4} + 1} = \sqrt{\frac{3}{2}} = \frac{\sqrt{6}}{2}
> $$
> **Metodo 2.** Piano per $P$ con normale $\vec{v}$: $x + y + d = 0$, $2 + 1 + d = 0$, $d = -3$. Con le parametriche: $t + t - 3 = 0$, $t = \frac{3}{2}$. Stesso $H$, stessa distanza.
>
> **b)** $r$ e $r'$ sono parallele, e per il caso parallelo $d(r, r') = d(P, r)$ con $P$ qualunque su $r'$. Il punto $P$ sta su $r'$, quindi $d(r, r') = \frac{\sqrt{6}}{2}$ senza altri conti.

**Esercizio 4.** Siano $r : (1 + t,\ t,\ 0)$ e $r' : (0,\ s,\ 2 + s)$. Mostra che sono sghembe e calcola la distanza con entrambi i metodi, trovando anche i punti di minima distanza.

> [!example]- Soluzione
> **Posizione.** $\vec{v} = (1, 1, 0)$ e $\vec{w} = (0, 1, 1)$ non sono proporzionali. Sistema d'incidenza: $1 + t = 0$, $t = s$, $0 = 2 + s$. Dalla prima $t = -1$, dalla seconda $s = -1$, e la terza darebbe $0 = 1$: impossibile. **Sghembe.**
>
> **Metodo 1.**
> $$
> \overrightarrow{P(t)Q(s)} = (0 - 1 - t,\ s - t,\ 2 + s - 0) = (-1 - t,\ s - t,\ 2 + s)
> $$
> $$
> \begin{cases} \overrightarrow{P(t)Q(s)} \cdot \vec{v} = -1 - t + s - t = s - 2t - 1 = 0 \\ \overrightarrow{P(t)Q(s)} \cdot \vec{w} = s - t + 2 + s = 2s - t + 2 = 0 \end{cases}
> $$
> Dalla prima $s = 2t + 1$; nella seconda $4t + 2 - t + 2 = 3t + 4 = 0$, quindi $t = -\frac{4}{3}$ e $s = -\frac{5}{3}$.
> $$
> P = \left(-\frac{1}{3}, -\frac{4}{3}, 0\right) \qquad Q = \left(0, -\frac{5}{3}, \frac{1}{3}\right) \qquad \overrightarrow{PQ} = \left(\frac{1}{3}, -\frac{1}{3}, \frac{1}{3}\right)
> $$
> $$
> d(r, r') = \sqrt{\frac{1}{9} + \frac{1}{9} + \frac{1}{9}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}
> $$
> Controllo: $\overrightarrow{PQ} \cdot \vec{v} = \frac{1 - 1}{3} = 0$ e $\overrightarrow{PQ} \cdot \vec{w} = \frac{-1 + 1}{3} = 0$.
>
> **Metodo 2.** Cartesiane di $r$: da $y = t$, $x = 1 + y$ e $z = 0$, cioè $\{x - y - 1 = 0,\ z = 0\}$. Fascio: $\lambda(x - y - 1) + \mu z = 0$, normale $(\lambda, -\lambda, \mu)$. Parallelo a $r'$: $(\lambda, -\lambda, \mu) \cdot (0, 1, 1) = -\lambda + \mu = 0$, quindi $\mu = \lambda$. Con $\lambda = 1$: $\pi : x - y + z - 1 = 0$. Punto di $r'$ per $s = 0$: $(0, 0, 2)$.
> $$
> d = \frac{|0 - 0 + 2 - 1|}{\sqrt{3}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}
> $$

## Errori tipici

- Dimenticare il valore assoluto nella formula punto-piano, o la radice al denominatore.
- Usare la formula $|(\overrightarrow{QP} \cdot \vec{n})\,\vec{n}|$ con un $\vec{n}$ non normalizzato: senza versore il risultato viene moltiplicato per $|\vec{n}|^2$.
- Nei piani a distanza data trovare una sola soluzione: il valore assoluto ne dà due.
- Calcolare la distanza fra due rette senza aver stabilito la posizione reciproca: se sono incidenti è $0$ e ogni conto è lavoro buttato.
- Usare lo stesso parametro per i punti generici delle due rette nel metodo della perpendicolare comune.
- Imporre l'ortogonalità di $\overrightarrow{PQ(t)}$ con la normale di un piano invece che col direzionale della retta.
- Con il metodo 2 per le sghembe, prendere il punto su $r$ invece che su $r'$: $r$ sta nel piano e la distanza viene $0$.
- Scrivere un numero negativo come distanza, o $0$ per oggetti che non si toccano: è il segnale di un errore di conto.

## Domande

- Scrivi la formula della distanza fra due punti nello spazio. Sotto radice ci sono somme o differenze?

- Qual è la definizione geometrica di distanza di un punto da un piano?

- Scrivi la formula di $d(P, \pi)$ e spiega cosa c'è al numeratore e cosa al denominatore.

- Nella dimostrazione della formula punto-piano, in quale passaggio sparisce il punto $Q$ e perché è importante?

- Perché nella formula punto-piano serve il valore assoluto? Cosa dice il segno del numeratore?

- Come si caratterizza il piede $H$ della perpendicolare da $P$ a una retta $r$?

- Descrivi il metodo del punto generico per la distanza punto-retta.

- Nel metodo del piano ausiliario, chi fa da vettore normale al piano che costruisci?

- Quanto vale la distanza fra due rette incidenti? E come si calcola quella fra due rette parallele?

- Per due rette sghembe, che proprietà ha il segmento $\overrightarrow{PQ}$ che realizza la distanza minima?

- Nel metodo 1 per rette sghembe, quante equazioni imponi e in quante incognite?

- Nel metodo 2 per rette sghembe, che piano si cerca dentro il fascio e perché la distanza cercata è la distanza di un punto di $r'$ da quel piano?

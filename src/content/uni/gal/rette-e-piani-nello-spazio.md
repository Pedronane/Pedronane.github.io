---
title: Rette e piani nello spazio
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-09-16
lezioni: []
ordine: 1
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L2. Fonte: appunti della prof <span class="src">p. 9-13</span> (equazioni di piani e rette) e <span class="src">p. 14-15</span> (fascio di piani); esercitazione del tutor, <span class="src">es. 1</span> e <span class="src">es. 5</span>; dispensa Postinghel, sezioni 1.2.1-1.2.3. Usa tutto di [Vettori geometrici](/uni/gal/vettori-geometrici/): coordinate di $\overrightarrow{AB}$, prodotto scalare, ortogonalità. Il seguito è [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/).

> [!abstract] Per l'esame
> - **Saper enunciare**: vettore normale, piano come luogo dei $Q$ con $\overrightarrow{PQ} \cdot \vec{n} = 0$, equazione cartesiana e parametriche del piano, parametriche e cartesiane della retta, vettore direzionale, fascio di piani di sostegno $r$ e la sua equazione.
> - **Saper dimostrare**: da $\overrightarrow{PQ} \cdot \vec{n} = 0$ all'equazione $ax + by + cz + d = 0$; perché ogni piano del fascio contiene $r$.
> - **Saper fare**: piano per un punto con normale data, piano per tre punti, retta per due punti in parametriche e cartesiane, passaggio fra parametriche e cartesiane nei due sensi, piano che contiene una retta e un punto (fascio), stabilire se un piano contiene una retta.
> - **Dove esce**: teoria del foglio 1, domanda 1.6 (fascio, con esempio d'uso); esercizi 1.9, 1.10, 1.12 e il primo passo di quasi tutti gli altri.

**Cosa sono le equazioni di un piano o di una retta.** Condizioni sulle coordinate $(x, y, z)$ di un punto che sono vere per **tutti e soli** i punti di quell'oggetto. Un punto sta sul piano se e solo se le sue coordinate soddisfano le equazioni.

Ogni oggetto ha due tipi di equazioni:

```
                 cartesiane                         parametriche
        (condizione da verificare)         (ricetta per costruire i punti)

piano    ax + by + cz + d = 0                x = xA + t v1 + s w1
         una equazione, nessun parametro     y = yA + t v2 + s w2     2 parametri t, s
                                             z = zA + t v3 + s w3

retta    ax  + by  + cz  + d  = 0            x = xA + t v1
         a'x + b'y + c'z + d' = 0            y = yA + t v2            1 parametro t
         due equazioni: due piani            z = zA + t v3

                   parametriche  --(elimino i parametri)-->  cartesiane
```

Il numero di parametri è la dimensione: su un piano ci si muove in due direzioni indipendenti ($t$ e $s$), su una retta in una sola ($t$).

## Definizioni

### Vettore normale

**Vettore normale a un piano.** La prof: "sia $\vec{n}$ vettore normale a $\pi$, ossia un vettore ortogonale a $\pi$". Vuol dire un vettore $\vec{n} \neq \vec{0}$ ortogonale a ogni vettore $\overrightarrow{PQ}$ con $P$ e $Q$ in $\pi$.

### Piano per un punto con vettore normale

Un piano $\pi$ è individuato da un suo punto $P$ e da un vettore normale $\vec{n}$. È il **luogo dei punti** $Q = (x, y, z)$ tali che $\overrightarrow{PQ}$ è ortogonale a $\vec{n}$:

$$
\pi = \{\,Q : \overrightarrow{PQ} \cdot \vec{n} = 0\,\}
$$

<figure class="fig"><svg role="img" aria-label="piano per punto e normale" xmlns:xlink="http://www.w3.org/1999/xlink" width="346.32pt" height="218.308235pt" viewBox="0 0 346.32 218.308235" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f36-figure_1"> <g id="f36-patch_1"> <path d="M 0 218.308235 L 346.32 218.308235 L 346.32 0 L 0 0 L 0 218.308235 z " style="fill: none"/> </g> <g id="f36-axes_1"> <g id="f36-patch_2"> <path d="M 14.310494 162.754987 L 230.945788 162.754987 L 341.856565 85.094425 L 125.221271 85.094425 z " clip-path="url(#f36-p8f02e562cc)" style="fill: var(--fig-faint); opacity: 0.35; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linejoin: miter"/> </g> <g id="f36-line2d_1"> <path d="M 158.389412 113.092941 L 167.783052 118.486145 L 167.783052 129.317909 " clip-path="url(#f36-p8f02e562cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f36-patch_3"> <path d="M 158.389412 123.924706 Q 182.737237 137.903607 205.145874 150.769156 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 201.683519 145.552635 L 205.145874 150.769156 L 198.895244 150.409127 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f36-patch_4"> <path d="M 158.389412 123.924706 Q 158.389412 74.689412 158.389412 28.361006 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: round"/> <path d="M 155.589412 33.961006 L 158.389412 28.361006 L 161.189412 33.961006 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: round"/> </g> <g id="f36-text_1"> <!-- $P$ --> <g style="fill: var(--fig-ink)" transform="translate(139.198824 134.686953) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-33" d="M 1594 2375 L 2419 2375 Q 2884 2375 3176 2626 Q 3469 2878 3559 3353 Q 3653 3831 3457 4081 Q 3262 4331 2797 4331 L 1972 4331 L 1594 2375 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3016 4666 Q 3716 4666 4056 4311 Q 4397 3956 4278 3353 Q 4162 2753 3684 2397 Q 3206 2041 2506 2041 L 1528 2041 L 1194 331 L 1916 331 L 1853 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-33" transform="translate(0 0.09375)"/> </g> </g> <g id="f36-text_2"> <!-- $Q$ --> <g style="fill: var(--fig-ink)" transform="translate(216.52565 160.182991) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-34" transform="translate(0 0.78125)"/> </g> </g> <g id="f36-text_3"> <!-- $\vec{n}$ --> <g style="fill: var(--fig-accent)" transform="translate(168.935 29.612594) scale(0.13 -0.13)"> <defs> <path id="f36-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f36-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#f36-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> </g> </g> <g id="f36-text_4"> <!-- $\overrightarrow{PQ}$ --> <g style="fill: var(--fig-ink)" transform="translate(177.910766 129.891495) scale(0.13 -0.13)"> <defs> <path id="f36-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-854" transform="translate(50.598145 75.265625)"/> <use xlink:href="#f36-DejaVuSerif-Italic-33" transform="translate(0 0.46875)"/> <use xlink:href="#f36-DejaVuSerif-Italic-34" transform="translate(67.285156 0.46875)"/> </g> </g> <g id="f36-text_5"> <!-- $\pi$ --> <g style="fill: var(--fig-axis)" transform="translate(302.659135 106.076233) scale(0.15 -0.15)"> <defs> <path id="f36-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f36-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f36-line2d_2"> <defs> <path id="f36-m3f33969587" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f36-p8f02e562cc)"> <use xlink:href="#f36-m3f33969587" x="158.389412" y="123.924706" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f36-line2d_3"> <g clip-path="url(#f36-p8f02e562cc)"> <use xlink:href="#f36-m3f33969587" x="207.085061" y="151.882508" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="f36-p8f02e562cc"> <rect x="5.76" y="5.76" width="334.8" height="206.788235"/> </clipPath> </defs> </svg></figure>

L'idea: da $P$ posso andare in qualunque direzione "orizzontale" rispetto a $\vec{n}$ e resto sul piano. Appena mi alzo o mi abbasso, $\overrightarrow{PQ}$ ha una componente lungo $\vec{n}$ e il prodotto scalare smette di essere zero.

### Equazione cartesiana del piano

**Equazione cartesiana.** Un'equazione della forma

$$
ax + by + cz + d = 0 \qquad (a, b, c) \neq (0, 0, 0)
$$

definisce un piano. $(a, b, c)$ sono le coordinate di un **vettore normale** al piano.

Esempio: $P = (1, 2, 3)$ sta sul piano $x + 2y - z - 2 = 0$ perché $1 + 4 - 3 - 2 = 0$. $Q = (0, 0, 0)$ non ci sta, perché $0 + 0 - 0 - 2 = -2 \neq 0$.

> [!warning] Refuso nella dispensa
> La dispensa (Esempio 1) dice che $Q = (1, 1, 1)$ non appartiene a $x + 2y - z - 2 = 0$. Invece $1 + 2 - 1 - 2 = 0$, quindi ci appartiene. Per questo qui sopra l'esempio usa l'origine.

**Non è unica.** Moltiplicando tutta l'equazione per uno scalare $\neq 0$ si ottiene un'altra equazione dello stesso piano: $x + 2y - z - 2 = 0$ e $2x + 4y - 2z - 4 = 0$ descrivono lo stesso insieme di punti.

### Equazioni parametriche del piano

Tre punti $A$, $B$, $C$ **distinti e non allineati** individuano un unico piano. Con $\vec{v} = \overrightarrow{AB} = (v_1, v_2, v_3)$ e $\vec{w} = \overrightarrow{AC} = (w_1, w_2, w_3)$, un punto $Q$ sta sul piano se e solo se da $A$ ci si arriva camminando un po' lungo $\vec{v}$ e un po' lungo $\vec{w}$:

$$
\exists\, t, s \in \mathbb{R} : \overrightarrow{AQ} = t\,\vec{v} + s\,\vec{w}
$$

<figure class="fig"><svg role="img" aria-label="piano per tre punti" xmlns:xlink="http://www.w3.org/1999/xlink" width="374.22pt" height="169.47pt" viewBox="0 0 374.22 169.47" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f37-figure_1"> <g id="f37-patch_1"> <path d="M 0 169.47 L 374.22 169.47 L 374.22 0 L 0 0 L 0 169.47 z " style="fill: none"/> </g> <g id="f37-axes_1"> <g id="f37-patch_2"> <path d="M 11.61 157.86 L 292.41 157.86 L 362.61 11.61 L 81.81 11.61 z " clip-path="url(#f37-p52c5678da1)" style="fill: var(--fig-faint); opacity: 0.35; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linejoin: miter"/> </g> <g id="f37-patch_3"> <path d="M 140.31 46.71 Q 196.1775 54.9 250.938789 62.927833 " style="fill: none; stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-linecap: round"/> <path d="M 245.804141 59.345183 L 250.938789 62.927833 L 244.99188 64.885962 z " style="fill: var(--fig-faint); stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-linecap: round"/> </g> <g id="f37-patch_4"> <path d="M 183.6 121.005 Q 217.8225 92.0475 250.935461 64.028841 " style="fill: none; stroke-dasharray: 4.81,2.08; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 244.851859 65.508636 L 250.935461 64.028841 L 248.469136 69.783599 z " style="fill: var(--fig-axis); stroke-dasharray: 4.81,2.08; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.3; stroke-linecap: round"/> </g> <g id="f37-patch_5"> <path d="M 64.26 111.06 Q 102.285 78.885 138.603016 48.154371 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 132.519415 49.634166 L 138.603016 48.154371 L 136.136691 53.909129 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f37-patch_6"> <path d="M 64.26 111.06 Q 134.46 116.91 202.431656 122.574305 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 197.083527 119.318922 L 202.431656 122.574305 L 196.618472 124.899578 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f37-patch_7"> <path d="M 64.26 111.06 Q 158.1525 87.075 249.445204 63.754122 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> <path d="M 243.326426 62.42726 L 249.445204 63.754122 L 244.712448 67.853027 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> </g> <g id="f37-text_1"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(44.89 126.136953) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="f37-text_2"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(129.65 32.536953) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="f37-text_3"> <!-- $C$ --> <g style="fill: var(--fig-ink)" transform="translate(202.58 144.856953) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-26" d="M 4300 1234 Q 3966 581 3414 245 Q 2863 -91 2119 -91 Q 1663 -91 1303 65 Q 944 222 700 525 Q 419 875 334 1320 Q 250 1766 359 2328 Q 572 3416 1330 4083 Q 2088 4750 3116 4750 Q 3497 4750 3908 4650 Q 4319 4550 4775 4347 L 4569 3272 L 4216 3272 Q 4213 3859 3919 4137 Q 3625 4416 2997 4416 Q 2250 4416 1762 3886 Q 1275 3356 1075 2328 Q 875 1303 1156 773 Q 1438 244 2184 244 Q 2706 244 3092 492 Q 3478 741 3725 1234 L 4300 1234 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-26" transform="translate(0 0.78125)"/> </g> </g> <g id="f37-text_4"> <!-- $Q$ --> <g style="fill: var(--fig-ink)" transform="translate(261.34 54.766953) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-Italic-34" transform="translate(0 0.78125)"/> </g> </g> <g id="f37-text_5"> <!-- $\vec{v}$ --> <g style="fill: var(--fig-steel)" transform="translate(81.03 74.138477) scale(0.13 -0.13)"> <defs> <path id="f37-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f37-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> </g> </g> <g id="f37-text_6"> <!-- $\vec{w}$ --> <g style="fill: var(--fig-steel)" transform="translate(128.87 138.488477) scale(0.13 -0.13)"> <defs> <path id="f37-DejaVuSerif-Italic-5a" d="M 3741 728 Q 4156 1178 4250 1344 Q 4594 1969 4931 2988 L 4447 2984 L 4513 3322 L 5347 3322 L 5281 2984 L 5278 2984 Q 4959 1825 4656 1266 Q 4209 469 3719 0 L 3241 0 L 2900 2484 L 1597 0 L 1138 0 L 734 2988 L 359 2981 L 425 3322 L 1281 3322 L 1631 728 L 2991 3322 L 3394 3322 L 3741 728 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-STIXGeneral-Regular-350" transform="translate(76.695801 10)"/> <use xlink:href="#f37-DejaVuSerif-Italic-5a" transform="translate(0 0.390625)"/> </g> </g> <g id="f37-text_7"> <!-- $\overrightarrow{AQ}=t\vec{v}+s\vec{w}$ --> <g style="fill: var(--fig-accent)" transform="translate(234.6 101.503594) scale(0.12 -0.12)"> <defs> <path id="f37-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f37-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f37-DejaVuSerif-854" transform="translate(53.831055 75.265625)"/> <use xlink:href="#f37-DejaVuSerif-Italic-24" transform="translate(0 0.46875)"/> <use xlink:href="#f37-DejaVuSerif-Italic-34" transform="translate(72.216797 0.46875)"/> <use xlink:href="#f37-DejaVuSerif-20" transform="translate(173.164062 0.46875)"/> <use xlink:href="#f37-DejaVuSerif-Italic-57" transform="translate(275.917969 0.46875)"/> <use xlink:href="#f37-STIXGeneral-Regular-350" transform="translate(374.523926 10.078125)"/> <use xlink:href="#f37-DejaVuSerif-Italic-59" transform="translate(316.103516 0.46875)"/> <use xlink:href="#f37-DejaVuSerif-e" transform="translate(391.5625 0.46875)"/> <use xlink:href="#f37-DejaVuSerif-Italic-56" transform="translate(494.316406 0.46875)"/> <use xlink:href="#f37-STIXGeneral-Regular-350" transform="translate(622.330566 10.078125)"/> <use xlink:href="#f37-DejaVuSerif-Italic-5a" transform="translate(545.634766 0.46875)"/> </g> </g> <g id="f37-line2d_1"> <defs> <path id="f37-ma3e296df3b" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f37-p52c5678da1)"> <use xlink:href="#f37-ma3e296df3b" x="64.26" y="111.06" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f37-line2d_2"> <g clip-path="url(#f37-p52c5678da1)"> <use xlink:href="#f37-ma3e296df3b" x="140.31" y="46.71" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f37-line2d_3"> <g clip-path="url(#f37-p52c5678da1)"> <use xlink:href="#f37-ma3e296df3b" x="204.66" y="122.76" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f37-line2d_4"> <g clip-path="url(#f37-p52c5678da1)"> <use xlink:href="#f37-ma3e296df3b" x="252.045" y="63.09" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="f37-p52c5678da1"> <rect x="5.76" y="5.76" width="362.7" height="157.95"/> </clipPath> </defs> </svg></figure>

In coordinate, con $Q = (x, y, z)$ e $\overrightarrow{AQ} = (x - x_A,\ y - y_A,\ z - z_A)$:

$$
\begin{cases} x = x_A + t\,v_1 + s\,w_1 \\ y = y_A + t\,v_2 + s\,w_2 \\ z = z_A + t\,v_3 + s\,w_3 \end{cases} \qquad t, s \in \mathbb{R}
$$

Sono le **equazioni parametriche** del piano, con parametri $(t, s)$. Ogni coppia $(t, s)$ dà un punto del piano, e ogni punto del piano viene da almeno una coppia.

**Perché "non allineati".** Se $A$, $B$, $C$ stanno su una retta, $\vec{v}$ e $\vec{w}$ hanno la stessa direzione, e $t\vec{v} + s\vec{w}$ resta sempre su quella retta: non si esce in una seconda direzione e il piano non viene fuori. Per tre punti allineati passano infiniti piani.

Anche le parametriche non sono uniche: cambiando i tre punti scelti sul piano cambiano i numeri, ma l'insieme descritto è lo stesso.

### Equazioni parametriche della retta

Una retta $r$ è individuata da due suoi punti distinti $A$ e $B$. Il vettore $\vec{v} = \overrightarrow{AB}$ è un **vettore direzionale** di $r$. Un punto $Q$ sta su $r$ se e solo se $\overrightarrow{AQ}$ ha la stessa direzione di $\vec{v}$:

$$
\exists\, t \in \mathbb{R} : \overrightarrow{AQ} = t\,\vec{v}
$$

<figure class="fig"><svg role="img" aria-label="retta e vettore direzionale" xmlns:xlink="http://www.w3.org/1999/xlink" width="346.32pt" height="187.968649pt" viewBox="0 0 346.32 187.968649" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f38-figure_1"> <g id="f38-patch_1"> <path d="M 0 187.968649 L 346.32 187.968649 L 346.32 0 L 0 0 L 0 187.968649 z " style="fill: none"/> </g> <g id="f38-axes_1"> <g id="f38-line2d_1"> <path d="M 14.808649 173.16 L 322.462703 19.332973 " clip-path="url(#f38-pd5839eaf4b)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f38-patch_2"> <path d="M 87.197838 136.965405 Q 173.16 93.984324 257.522162 51.803243 " style="fill: none; stroke-dasharray: 5.92,2.56; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 251.261172 51.803243 L 257.522162 51.803243 L 253.765568 56.812036 z " style="fill: var(--fig-accent); stroke-dasharray: 5.92,2.56; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f38-patch_3"> <path d="M 87.197838 136.965405 Q 123.392432 118.868108 156.787027 102.170811 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 150.526037 102.170811 L 156.787027 102.170811 L 153.030433 107.179603 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="f38-text_1"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(89.239324 156.177494) scale(0.13 -0.13)"> <defs> <path id="f38-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f38-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="f38-text_2"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(161.563514 119.982899) scale(0.13 -0.13)"> <defs> <path id="f38-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f38-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="f38-text_3"> <!-- $Q$ --> <g style="fill: var(--fig-ink)" transform="translate(260.578649 70.215332) scale(0.13 -0.13)"> <defs> <path id="f38-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f38-DejaVuSerif-Italic-34" transform="translate(0 0.78125)"/> </g> </g> <g id="f38-text_4"> <!-- $\vec{v}=\overrightarrow{AB}$ --> <g style="fill: var(--fig-ink)" transform="translate(81.972973 107.464287) scale(0.13 -0.13)"> <defs> <path id="f38-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f38-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f38-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f38-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f38-STIXGeneral-Regular-350" transform="translate(58.42041 10.390625)"/> <use xlink:href="#f38-DejaVuSerif-Italic-59" transform="translate(0 0.78125)"/> <use xlink:href="#f38-DejaVuSerif-20" transform="translate(75.458984 0.78125)"/> <use xlink:href="#f38-DejaVuSerif-854" transform="translate(225.919922 74.265625)"/> <use xlink:href="#f38-DejaVuSerif-Italic-24" transform="translate(178.212891 0.78125)"/> <use xlink:href="#f38-DejaVuSerif-Italic-25" transform="translate(250.429688 0.78125)"/> </g> </g> <g id="f38-text_5"> <!-- $\overrightarrow{AQ}=t\,\vec{v}$ --> <g style="fill: var(--fig-accent)" transform="translate(179.54527 62.286044) scale(0.13 -0.13)"> <defs> <path id="f38-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f38-DejaVuSerif-854" transform="translate(53.831055 75.265625)"/> <use xlink:href="#f38-DejaVuSerif-Italic-24" transform="translate(0 0.46875)"/> <use xlink:href="#f38-DejaVuSerif-Italic-34" transform="translate(72.216797 0.46875)"/> <use xlink:href="#f38-DejaVuSerif-20" transform="translate(173.164062 0.46875)"/> <use xlink:href="#f38-DejaVuSerif-Italic-57" transform="translate(275.917969 0.46875)"/> <use xlink:href="#f38-STIXGeneral-Regular-350" transform="translate(390.328278 10.078125)"/> <use xlink:href="#f38-DejaVuSerif-Italic-59" transform="translate(331.907868 0.46875)"/> </g> </g> <g id="f38-text_6"> <!-- $r$ --> <g style="fill: var(--fig-axis)" transform="translate(321.604865 36.282899) scale(0.13 -0.13)"> <defs> <path id="f38-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f38-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f38-line2d_2"> <defs> <path id="f38-m862b03d424" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f38-pd5839eaf4b)"> <use xlink:href="#f38-m862b03d424" x="87.197838" y="136.965405" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f38-line2d_3"> <g clip-path="url(#f38-pd5839eaf4b)"> <use xlink:href="#f38-m862b03d424" x="159.587027" y="100.770811" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f38-line2d_4"> <g clip-path="url(#f38-pd5839eaf4b)"> <use xlink:href="#f38-m862b03d424" x="259.122162" y="51.003243" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="f38-pd5839eaf4b"> <rect x="5.76" y="5.76" width="334.8" height="176.448649"/> </clipPath> </defs> </svg></figure>

In coordinate, con $\vec{v} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A) = (v_1, v_2, v_3)$:

$$
\begin{cases} x = x_A + t\,v_1 \\ y = y_A + t\,v_2 \\ z = z_A + t\,v_3 \end{cases} \qquad t \in \mathbb{R}
$$

$t = 0$ dà $A$, $t = 1$ dà $B$, $t$ fra $0$ e $1$ i punti del segmento, $t < 0$ i punti dalla parte di $A$ opposta a $B$.

### Equazioni cartesiane della retta

Una retta nello spazio è l'**intersezione di due piani distinti** che la contengono:

$$
r : \begin{cases} ax + by + cz + d = 0 \\ a'x + b'y + c'z + d' = 0 \end{cases}
$$

Una sola equazione non basta: $ax + by + cz + d = 0$ nello spazio è un piano, non una retta. Serve una seconda condizione che tagli il piano lungo una linea. I due piani non sono unici: l'asse $x$ è $\{y = 0,\ z = 0\}$ ma anche $\{y = 0,\ y + z = 0\}$.

Le cartesiane si ottengono dalle parametriche **eliminando $t$**: ricavo $t$ da un'equazione e lo sostituisco nelle altre due.

### Fascio di piani

**Fascio di piani di sostegno $r$.** L'insieme di tutti i piani che contengono una retta $r$ data. Sono infiniti, come le pagine di un libro aperto attorno alla costa.

<figure class="fig"><svg role="img" aria-label="fascio di piani" xmlns:xlink="http://www.w3.org/1999/xlink" width="374.22pt" height="192.87pt" viewBox="0 0 374.22 192.87" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f39-figure_1"> <g id="f39-patch_1"> <path d="M 0 192.87 L 374.22 192.87 L 374.22 0 L 0 0 L 0 192.87 z " style="fill: none"/> </g> <g id="f39-axes_1"> <g id="f39-patch_2"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 272.291966 150.808257 L 44.309109 150.808257 z " clip-path="url(#f39-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f39-patch_3"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 278.234242 97.42386 L 50.251385 97.42386 z " clip-path="url(#f39-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f39-patch_4"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 294.46884 50.022116 L 66.485983 50.022116 z " clip-path="url(#f39-pc97abd204d)" style="fill: var(--fig-steel); opacity: 0.22"/> </g> <g id="f39-patch_5"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 316.645714 21.304286 L 88.662857 21.304286 z " clip-path="url(#f39-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f39-patch_6"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 338.822588 18.965288 L 110.839731 18.965288 z " clip-path="url(#f39-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f39-patch_7"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 355.057187 43.631854 L 127.07433 43.631854 z " clip-path="url(#f39-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f39-line2d_1"> <path d="M 88.662857 119.751429 L 44.309109 150.808257 L 272.291966 150.808257 L 316.645714 119.751429 " clip-path="url(#f39-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f39-line2d_2"> <path d="M 88.662857 119.751429 L 50.251385 97.42386 L 278.234242 97.42386 L 316.645714 119.751429 " clip-path="url(#f39-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f39-line2d_3"> <path d="M 88.662857 119.751429 L 66.485983 50.022116 L 294.46884 50.022116 L 316.645714 119.751429 " clip-path="url(#f39-pc97abd204d)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f39-line2d_4"> <path d="M 88.662857 119.751429 L 88.662857 21.304286 L 316.645714 21.304286 L 316.645714 119.751429 " clip-path="url(#f39-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f39-line2d_5"> <path d="M 88.662857 119.751429 L 110.839731 18.965288 L 338.822588 18.965288 L 316.645714 119.751429 " clip-path="url(#f39-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f39-line2d_6"> <path d="M 88.662857 119.751429 L 127.07433 43.631854 L 355.057187 43.631854 L 316.645714 119.751429 " clip-path="url(#f39-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f39-line2d_7"> <path d="M 61.304914 119.751429 L 344.003657 119.751429 " clip-path="url(#f39-pc97abd204d)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f39-text_1"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(271.38384 38.374315) scale(0.15 -0.15)"> <defs> <path id="f39-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f39-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f39-text_2"> <!-- $r$ --> <g style="fill: var(--fig-accent)" transform="translate(353.837229 117.946953) scale(0.13 -0.13)"> <defs> <path id="f39-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f39-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> </g> </g> <defs> <clipPath id="f39-pc97abd204d"> <rect x="5.76" y="5.76" width="362.7" height="181.35"/> </clipPath> </defs> </svg></figure>

## Enunciati

### Equazione cartesiana dal punto e dalla normale

> [!abstract] Piano per $P$ ortogonale a $\vec{n}$
> Siano $P = (x_P, y_P, z_P)$ e $\vec{n} = (a, b, c) \neq \vec{0}$. Il piano per $P$ ortogonale a $\vec{n}$ ha equazione
> $$
> a(x - x_P) + b(y - y_P) + c(z - z_P) = 0
> $$
> cioè $ax + by + cz + d = 0$ con $d = -a x_P - b y_P - c z_P$.

> [!note]- Dimostrazione
> $Q = (x, y, z)$ sta sul piano se e solo se $\overrightarrow{PQ} \cdot \vec{n} = 0$. In coordinate $\overrightarrow{PQ} = (x - x_P,\ y - y_P,\ z - z_P)$, e il prodotto scalare in coordinate è la somma dei prodotti delle componenti:
> $$
> \overrightarrow{PQ} \cdot \vec{n} = a(x - x_P) + b(y - y_P) + c(z - z_P)
> $$
> Sviluppando, i termini con $x_P, y_P, z_P$ sono numeri fissi e si raccolgono in $d$. $\blacksquare$

La conseguenza da ricordare: **i coefficienti di $x$, $y$, $z$ sono le coordinate di un vettore normale**. Lo si legge al volo dall'equazione: $2x - 3y - z - 3 = 0$ ha normale $(2, -3, -1)$.

### Fascio di piani

> [!abstract] Equazione del fascio
> Sia $r$ la retta di equazioni cartesiane
> $$
> \begin{cases} ax + by + cz + d = 0 \\ a'x + b'y + c'z + d' = 0 \end{cases}
> $$
> Il fascio di piani di sostegno $r$ ha equazione
> $$
> \lambda(ax + by + cz + d) + \mu(a'x + b'y + c'z + d') = 0
> $$
> e per ogni coppia di scalari $(\lambda, \mu) \neq (0, 0)$ si ottiene l'equazione di un piano che contiene $r$.

**Perché contiene $r$.** Un punto di $r$ soddisfa entrambe le equazioni, quindi rende nulle tutte e due le parentesi. Allora $\lambda \cdot 0 + \mu \cdot 0 = 0$, qualunque siano $\lambda$ e $\mu$: il punto sta su ogni piano del fascio.

**Perché $(\lambda, \mu) \neq (0, 0)$.** Con $\lambda = \mu = 0$ l'equazione diventa $0 = 0$, vera per tutti i punti dello spazio: non è un piano.

## Metodo

### Piano per un punto con normale data

1. Scrivi $ax + by + cz + d = 0$ mettendo le coordinate di $\vec{n}$ al posto di $a, b, c$.
2. Sostituisci le coordinate di $P$ e ricava $d$.

Esempio (dispensa): $P = (1, -1, 2)$, $\vec{n} = (2, -3, -1)$. Da $2x - 3y - z + d = 0$ e $2(1) - 3(-1) - 2 + d = 0$ viene $d = -3$. Piano: $2x - 3y - z - 3 = 0$.

### Piano per tre punti

1. Calcola $\vec{v} = \overrightarrow{AB}$ e $\vec{w} = \overrightarrow{AC}$ (fine meno inizio).
2. Scrivi le parametriche partendo da $A$.
3. Per la cartesiana elimina $t$ e $s$: ricava i parametri da due equazioni e sostituiscili nella terza.
4. **Verifica**: i tre punti devono soddisfare la cartesiana, e la normale $(a, b, c)$ deve avere prodotto scalare nullo con $\vec{v}$ e con $\vec{w}$.

L'esempio della prof ($A(0,0,1)$, $B(-2,-1,0)$, $C(1,0,0)$) è in Esempi svolti a lezione.

### Retta per due punti

1. $\vec{v} = \overrightarrow{AB}$.
2. Parametriche: $x = x_A + t v_1$, $y = y_A + t v_2$, $z = z_A + t v_3$.
3. Cartesiane: ricava $t$ dall'equazione più semplice e sostituisci nelle altre due. Restano due equazioni senza $t$.
4. **Verifica**: $A$ e $B$ devono soddisfare entrambe le cartesiane.

### Da cartesiane a parametriche

È il passaggio inverso, e il metodo del corso è sempre lo stesso: **poni una delle variabili uguale al parametro** ($y = t$, oppure $z = t$, oppure $x = s$) e ricava le altre due dal sistema. I coefficienti di $t$ danno il vettore direzionale, i termini noti un punto della retta.

Scegli come parametro una variabile che compare in entrambe le equazioni, così ricavi le altre due senza passaggi in più. Se una variabile manca del tutto dalle cartesiane (per esempio $\{z = 4,\ x + y + 2 = 0\}$) non la puoi usare come parametro, perché è già fissata: lì il parametro va messo su $x$ o su $y$.

Il risultato non è unico: parametri diversi danno parametriche diverse della stessa retta (esempio del tutor sotto).

### Piano che contiene una retta e un punto fuori

1. Scrivi il fascio $\lambda(\dots) + \mu(\dots) = 0$ con le due cartesiane di $r$.
2. Sostituisci le coordinate di $P$: viene una relazione lineare fra $\lambda$ e $\mu$.
3. Dai un valore non nullo a uno dei due (la prof pone $\lambda = 1$) e ricava l'altro.
4. Rimetti $\lambda$ e $\mu$ nel fascio e semplifica.
5. **Verifica**: $P$ e due punti di $r$ devono soddisfare l'equazione.

Prima controlla che $P$ non stia su $r$: se ci sta, al punto 2 esce $0 = 0$ e ogni piano del fascio va bene, quindi il piano non è determinato. Se al punto 2 esce una relazione come $\lambda = 0$, allora non puoi porre $\lambda = 1$: poni $\mu = 1$, e il piano cercato è il secondo dei due piani di partenza.

### Stabilire se un piano contiene una retta

Due strade, entrambe viste nell'esercitazione del tutor.

- **Sistema.** Metti a sistema le due cartesiane di $r$ con l'equazione del piano. Se il sistema ha infinite soluzioni che formano tutta $r$ (la terza equazione non aggiunge vincoli), il piano contiene $r$. Se ha una sola soluzione, il piano taglia $r$ in un punto. Se non ne ha, piano e retta sono paralleli e disgiunti.
- **Due punti.** Prendi due punti distinti di $r$ e sostituiscili nel piano. Se entrambi lo soddisfano il piano contiene $r$, perché per due punti passa una sola retta.

### Proiezione ortogonale di un punto su un piano

1. Scrivi la retta per il punto con **vettore direzionale uguale alla normale** del piano.
2. Intersecala col piano: sostituisci le parametriche nell'equazione cartesiana e ricava $t$.
3. Il punto trovato $H$ è la proiezione. **Verifica**: $H$ sta sul piano e $\overrightarrow{PH}$ è proporzionale a $\vec{n}$.

## Esempi svolti a lezione

> [!example]- Prof, L2, appunti p. 11-12: piano per $A(0, 0, 1)$, $B(-2, -1, 0)$, $C(1, 0, 0)$
> **Vettori.**
> $$
> \vec{v} = \overrightarrow{AB} = (-2 - 0,\ -1 - 0,\ 0 - 1) = (-2, -1, -1)
> $$
> $$
> \vec{w} = \overrightarrow{AC} = (1 - 0,\ 0 - 0,\ 0 - 1) = (1, 0, -1)
> $$
>
> **Parametriche** (partendo da $A$):
> $$
> \begin{cases} x = -2t + s \\ y = -t \\ z = 1 - t - s \end{cases}
> $$
>
> **Elimino i parametri**, come la prof: prima $t$, poi $s$. Dalla seconda $t = -y$; nella prima e nella terza diventa $x = 2y + s$ e $z = 1 + y - s$. Dalla prima $s = x - 2y$, che sostituisco nella terza:
> $$
> z = 1 + y - (x - 2y) = 1 - x + 3y
> $$
> Porto tutto a sinistra:
> $$
> x - 3y + z - 1 = 0
> $$
>
> **Verifica sui punti.** $A$: $0 - 0 + 1 - 1 = 0$. $B$: $-2 + 3 + 0 - 1 = 0$. $C$: $1 - 0 + 0 - 1 = 0$.
>
> **Verifica sulla normale.** $\vec{n} = (1, -3, 1)$. $\vec{n} \cdot \vec{v} = -2 + 3 - 1 = 0$ e $\vec{n} \cdot \vec{w} = 1 + 0 - 1 = 0$: è davvero ortogonale al piano.

> [!example]- Prof, L2, appunti p. 13, svolto dal tutor (esercitazione 1, es. 1): retta per $A(-1, 2, 1)$ e $B(1, 0, 2)$
> La prof l'ha lasciato come esercizio, il tutor l'ha svolto in esercitazione.
>
> **Vettore direzionale.** $\vec{v} = \overrightarrow{AB} = (1 - (-1),\ 0 - 2,\ 2 - 1) = (2, -2, 1)$.
>
> **Parametriche.**
> $$
> \begin{cases} x = -1 + 2t \\ y = 2 - 2t \\ z = 1 + t \end{cases}
> $$
>
> **Cartesiane.** Dalla terza $t = z - 1$. Sostituisco nelle altre due:
> - $x = -1 + 2(z - 1) = 2z - 3$, cioè $x - 2z + 3 = 0$
> - $y = 2 - 2(z - 1) = 4 - 2z$, cioè $y + 2z - 4 = 0$
>
> $$
> r : \begin{cases} x - 2z + 3 = 0 \\ y + 2z - 4 = 0 \end{cases}
> $$
>
> **Verifica.** $A$: $-1 - 2 + 3 = 0$ e $2 + 2 - 4 = 0$. $B$: $1 - 4 + 3 = 0$ e $0 + 4 - 4 = 0$.
>
> **L'osservazione del tutor: si torna alle parametriche?** Dalle cartesiane pongo $x = s$. Dalla prima $2z = s + 3$, cioè $z = \frac{3}{2} + \frac{1}{2}s$. Nella seconda $y + s + 3 - 4 = 0$, cioè $y = 1 - s$:
> $$
> \begin{cases} x = s \\ y = 1 - s \\ z = \frac{3}{2} + \frac{1}{2}s \end{cases}
> $$
> Non sono le parametriche di partenza, eppure non c'è nessun errore: **parametriche diverse possono descrivere la stessa retta**. Il punto per $s = 0$ è $\left(0, 1, \frac{3}{2}\right)$, che sulla prima parametrizzazione corrisponde a $t = \frac{1}{2}$; il direzionale $\left(1, -1, \frac{1}{2}\right)$ è $\frac{1}{2}(2, -2, 1)$, proporzionale a $\vec{v}$. Cambiano il punto di partenza e la "velocità" con cui si percorre la retta, non la retta.
>
> Nota: sommando le due cartesiane si ottiene $x + y - 1 = 0$, un altro piano che contiene la stessa retta. La retta dell'esempio del fascio qui sotto, $\{x + y - 1 = 0,\ y + 2z - 4 = 0\}$, è proprio questa.

> [!example]- Prof, L2, appunti p. 14-15: piano per $r : \{x + y - 1 = 0,\ y + 2z - 4 = 0\}$ e $P(0, -1, 2)$
> **$P$ non sta su $r$:** $0 - 1 - 1 = -2 \neq 0$.
>
> **Fascio.**
> $$
> \lambda(x + y - 1) + \mu(y + 2z - 4) = 0
> $$
>
> **Passaggio per $P$.**
> $$
> \lambda(0 - 1 - 1) + \mu(-1 + 4 - 4) = 0 \quad\Longrightarrow\quad -2\lambda - \mu = 0 \quad\Longrightarrow\quad \mu = -2\lambda
> $$
>
> **Scelgo** un valore non nullo per $\lambda$, $\lambda = 1$, quindi $\mu = -2$:
> $$
> (x + y - 1) - 2(y + 2z - 4) = 0 \quad\Longrightarrow\quad x - y - 4z + 7 = 0
> $$
>
> **Verifica.** $P$: $0 + 1 - 8 + 7 = 0$. Due punti di $r$ sono $(-1, 2, 1)$ e $(1, 0, 2)$ (dall'esempio sopra): $-1 - 2 - 4 + 7 = 0$ e $1 - 0 - 8 + 7 = 0$.

> [!example]- Tutor, esercitazione 1, es. 5: tre piani, un fascio e una proiezione
> $\pi_1 : z - 4 = 0$, $\pi_2 : x + y + 2 = 0$, $\pi_3 : 4x + 4y - z + 12 = 0$, e $r = \pi_1 \cap \pi_2$.
>
> **1) $\pi_3$ contiene $r$?** Per definizione $r$ è fatta dai punti che stanno su $\pi_1$ e su $\pi_2$:
> $$
> r : \begin{cases} z - 4 = 0 \\ x + y + 2 = 0 \end{cases}
> $$
> $r$ sta su $\pi_3$ se tutti i suoi punti soddisfano anche l'equazione di $\pi_3$. Studio il sistema delle tre equazioni:
> $$
> \begin{cases} z = 4 \\ x = -y - 2 \\ x = \frac{1}{4}(-4y + z - 12) \end{cases} \quad\Longrightarrow\quad \begin{cases} z = 4 \\ x = -y - 2 \\ x = \frac{1}{4}(-4y - 8) = -y - 2 \end{cases}
> $$
> La terza equazione è diventata uguale alla seconda: non aggiunge vincoli, il sistema ha infinite soluzioni e sono tutti i punti di $r$. Quindi **$\pi_3$ contiene $r$**.
>
> Controllo con due punti di $r$: $y = 0$ dà $(-2, 0, 4)$ e $4(-2) + 0 - 4 + 12 = 0$; $y = -2$ dà $(0, -2, 4)$ e $0 - 8 - 4 + 12 = 0$. E infatti $\pi_3$ è un piano del fascio: $4(x + y + 2) - (z - 4) = 4x + 4y - z + 12$.
>
> **2) Piano $\pi_4$ che contiene $r$ e passa per $O = (0, 0, 0)$.** Fascio di sostegno $r$:
> $$
> \lambda(z - 4) + \mu(x + y + 2) = 0
> $$
> Passaggio per $O$: $-4\lambda + 2\mu = 0$, quindi $\mu = 2\lambda$. Con $\lambda = 1$ e $\mu = 2$:
> $$
> \pi_4 : (z - 4) + 2(x + y + 2) = 0 \quad\Longrightarrow\quad 2x + 2y + z = 0
> $$
> Verifica: $O$ la soddisfa; $(-2, 0, 4)$ dà $-4 + 0 + 4 = 0$; $(0, -2, 4)$ dà $0 - 4 + 4 = 0$.
>
> **3) Proiezione ortogonale di $O$ su $\pi_2$.** Si prende la retta $r'$ per $O$ ortogonale a $\pi_2$: il suo direzionale è proporzionale alla normale $\vec{n} = (1, 1, 0)$.
> $$
> r' : \begin{cases} x = t \\ y = t \\ z = 0 \end{cases}
> $$
> La proiezione è $H = r' \cap \pi_2$. Sostituisco in $x + y + 2 = 0$: $t + t + 2 = 0$, quindi $t = -1$ e
> $$
> H = (-1, -1, 0)
> $$
> Verifica: $-1 - 1 + 2 = 0$, e $\overrightarrow{OH} = (-1, -1, 0) = -\vec{n}$ è proprio lungo la normale.

## Esercizi tipo esame

**Esercizio 1.** Siano $A = (2, -1, 0)$ e $B = (0, 1, 3)$.
a) Scrivi equazioni parametriche e cartesiane della retta $r$ per $A$ e $B$.
b) Stabilisci se $C = (4, -3, -3)$ e $D = (1, 0, 1)$ stanno su $r$.

> [!example]- Soluzione
> **a)** $\vec{v} = \overrightarrow{AB} = (0 - 2,\ 1 - (-1),\ 3 - 0) = (-2, 2, 3)$. Parametriche da $A$:
> $$
> r : \begin{cases} x = 2 - 2t \\ y = -1 + 2t \\ z = 3t \end{cases}
> $$
> Cartesiane: dalla terza $t = \frac{z}{3}$. Sostituisco:
> - $x = 2 - \frac{2}{3}z$, moltiplico per $3$: $3x + 2z - 6 = 0$
> - $y = -1 + \frac{2}{3}z$, moltiplico per $3$: $3y - 2z + 3 = 0$
>
> Verifica: $A$ dà $6 + 0 - 6 = 0$ e $-3 - 0 + 3 = 0$; $B$ dà $0 + 6 - 6 = 0$ e $3 - 6 + 3 = 0$.
>
> **b)** Per $C$ cerco un $t$ che funzioni in tutte e tre le parametriche. Dalla prima $2 - 2t = 4$, cioè $t = -1$. Controllo le altre: $y = -1 - 2 = -3$ e $z = -3$. Tornano entrambe, quindi **$C \in r$** (conferma con le cartesiane: $12 - 6 - 6 = 0$ e $-9 + 6 + 3 = 0$).
>
> Per $D$: dalla prima $2 - 2t = 1$, cioè $t = \frac{1}{2}$. Allora $y = -1 + 1 = 0$, che torna, ma $z = \frac{3}{2} \neq 1$. **$D \notin r$**. Un solo $t$ deve andare bene per tutte e tre le coordinate: due su tre non bastano.

**Esercizio 2.** Trova un'equazione cartesiana del piano per $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$, partendo dalle parametriche.

> [!example]- Soluzione
> **Vettori.** $\vec{v} = \overrightarrow{AB} = (-1, 2, 0)$ e $\vec{w} = \overrightarrow{AC} = (-1, 0, 3)$. Non sono proporzionali (la seconda coordinata di $\vec{w}$ è $0$, quella di $\vec{v}$ no), quindi i tre punti non sono allineati.
>
> **Parametriche** da $A$:
> $$
> \begin{cases} x = 1 - t - s \\ y = 2t \\ z = 3s \end{cases}
> $$
> **Elimino.** $t = \frac{y}{2}$ e $s = \frac{z}{3}$. Nella prima: $x = 1 - \frac{y}{2} - \frac{z}{3}$. Moltiplico per $6$:
> $$
> 6x + 3y + 2z - 6 = 0
> $$
> **Verifica.** $A$: $6 - 6 = 0$. $B$: $6 - 6 = 0$. $C$: $6 - 6 = 0$. Normale $\vec{n} = (6, 3, 2)$: $\vec{n} \cdot \vec{v} = -6 + 6 + 0 = 0$ e $\vec{n} \cdot \vec{w} = -6 + 0 + 6 = 0$.

**Esercizio 3.** Sia $r : \{x - y + 1 = 0,\ 2y - z = 0\}$ e $P = (1, 1, 1)$. Trova il piano che contiene $r$ e $P$.

> [!example]- Soluzione
> **$P \notin r$:** nella prima equazione $1 - 1 + 1 = 1 \neq 0$.
>
> **Fascio.** $\lambda(x - y + 1) + \mu(2y - z) = 0$.
>
> **Passaggio per $P$.** $\lambda(1 - 1 + 1) + \mu(2 - 1) = \lambda + \mu = 0$, quindi $\mu = -\lambda$. Con $\lambda = 1$, $\mu = -1$:
> $$
> (x - y + 1) - (2y - z) = 0 \quad\Longrightarrow\quad x - 3y + z + 1 = 0
> $$
> **Verifica.** $P$: $1 - 3 + 1 + 1 = 0$. Due punti di $r$ (pongo $y = 0$ e $y = 1$): $(-1, 0, 0)$ dà $-1 + 1 = 0$; $(0, 1, 2)$ dà $0 - 3 + 2 + 1 = 0$.

**Esercizio 4.** Siano $\pi : 2x - y + 3z - 5 = 0$ e $P = (1, 2, -1)$.
a) Trova il piano per $P$ parallelo a $\pi$.
b) Trova parametriche e cartesiane della retta per $P$ ortogonale a $\pi$.
c) Trova la proiezione ortogonale di $P$ su $\pi$.

> [!example]- Soluzione
> **$P \notin \pi$:** $2 - 2 - 3 - 5 = -8 \neq 0$.
>
> **a)** Un piano parallelo a $\pi$ ha la stessa normale, quindi la forma $2x - y + 3z + d = 0$. Passaggio per $P$: $2 - 2 - 3 + d = 0$, cioè $d = 3$:
> $$
> 2x - y + 3z + 3 = 0
> $$
>
> **b)** Una retta ortogonale a $\pi$ ha direzionale proporzionale a $\vec{n} = (2, -1, 3)$:
> $$
> \begin{cases} x = 1 + 2t \\ y = 2 - t \\ z = -1 + 3t \end{cases}
> $$
> Cartesiane: dalla seconda $t = 2 - y$. Allora $x = 1 + 2(2 - y) = 5 - 2y$ e $z = -1 + 3(2 - y) = 5 - 3y$:
> $$
> \begin{cases} x + 2y - 5 = 0 \\ 3y + z - 5 = 0 \end{cases}
> $$
> Verifica con $P$: $1 + 4 - 5 = 0$ e $6 - 1 - 5 = 0$.
>
> **c)** Interseco la retta di b) con $\pi$:
> $$
> 2(1 + 2t) - (2 - t) + 3(-1 + 3t) - 5 = 2 + 4t - 2 + t - 3 + 9t - 5 = 14t - 8 = 0 \quad\Longrightarrow\quad t = \frac{4}{7}
> $$
> $$
> H = \left(1 + \frac{8}{7},\ 2 - \frac{4}{7},\ -1 + \frac{12}{7}\right) = \left(\frac{15}{7}, \frac{10}{7}, \frac{5}{7}\right)
> $$
> Verifica: $\frac{30}{7} - \frac{10}{7} + \frac{15}{7} - 5 = \frac{35}{7} - 5 = 0$.

## Errori tipici

- Scrivere una retta nello spazio con una sola equazione cartesiana: quella è un piano.
- Leggere la normale da un'equazione non ancora portata nella forma $ax + by + cz + d = 0$: $y + z = -2$ ha normale $(0, 1, 1)$, e $x$ ha coefficiente $0$, non manca.
- Nel fascio porre $\lambda = \mu = 0$, oppure dimenticare di controllare che il punto non stia già sulla retta.
- Concludere che un punto sta sulla retta perché due coordinate su tre tornano con lo stesso $t$.
- Pensare di aver sbagliato perché le proprie parametriche o la propria cartesiana sono diverse da quelle del tutor: prima controlla se una è multipla dell'altra o se descrivono gli stessi punti.
- Per il piano per tre punti, non controllare che non siano allineati.

## Domande

- Cosa rappresentano i coefficienti $a, b, c$ nell'equazione $ax + by + cz + d = 0$?

- Scrivi la condizione vettoriale che definisce il piano per $P$ ortogonale a $\vec{n}$.

- Perché per scrivere le parametriche di un piano servono tre punti non allineati?

- Quanti parametri hanno le equazioni parametriche di un piano? E di una retta?

- Perché nello spazio una retta ha bisogno di due equazioni cartesiane?

- Come si passa dalle equazioni parametriche a quelle cartesiane?

- L'equazione cartesiana di un piano è unica? Perché?

- Cos'è il fascio di piani di sostegno una retta $r$ e qual è la sua equazione?

- Perché nel fascio non si può prendere $(\lambda, \mu) = (0, 0)$?

- Come trovi il piano che contiene una retta $r$ e un punto $P$ fuori da $r$?

- Come verifichi che un'equazione cartesiana trovata è davvero quella del piano per $A$, $B$, $C$?

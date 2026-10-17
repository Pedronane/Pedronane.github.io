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

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L2 (15/9), quaderno p. 11-18. Fonte: appunti della prof <span class="src">15/9, p. 9-13</span> (equazioni di piani e rette) e <span class="src">15/9, p. 14-15</span> (fascio di piani); esercitazione del tutor del 22/9, <span class="src">es. 1</span>, <span class="src">es. 5</span> e <span class="src">la prima parte dell'es. 6</span>; dispensa Postinghel, sezioni 1.2.1-1.2.3. Usa tutto di [Vettori geometrici](/uni/gal/vettori-geometrici/): coordinate di $\overrightarrow{AB}$, prodotto scalare, ortogonalità. Il seguito è [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/), poi [Distanze nello spazio](/uni/gal/distanze-nello-spazio/).

> [!abstract] Per l'esame
> - **Saper enunciare**: vettore normale, piano come luogo dei $Q$ con $\overrightarrow{PQ} \cdot \vec{n} = 0$, equazione cartesiana e parametriche del piano, parametriche e cartesiane della retta, vettore direzionale, fascio di piani di sostegno $r$ e la sua equazione.
> - **Saper dimostrare**: da $\overrightarrow{PQ} \cdot \vec{n} = 0$ all'equazione $ax + by + cz + d = 0$; da $\overrightarrow{AQ} = t\vec{v} + s\vec{w}$ alle parametriche del piano e da $\overrightarrow{AQ} = t\vec{v}$ a quelle della retta; che ogni equazione del fascio con $(\lambda, \mu) \neq (0, 0)$ è un piano e contiene $r$ (teoria del foglio 1, domanda 1.6).
> - **Saper fare**: piano per un punto con normale data, piano per tre punti, retta per due punti in parametriche e cartesiane, passaggio fra parametriche e cartesiane nei due sensi, piano che contiene una retta e un punto (fascio), piano del fascio con una condizione di parallelismo, stabilire se un piano contiene una retta, retta per un punto ortogonale a un piano e proiezione.
> - **Dove esce**: teoria del foglio 1, domanda 1.6 (fascio, con esempio d'uso); esercizi 1.9, 1.10, 1.12 e il primo passo di quasi tutti gli altri. Metodo della prof, da usare allo scritto: fascio per i piani che contengono una retta, parametriche ponendo una variabile uguale a $t$. Il prodotto vettoriale non è nel programma: qui non si usa, e ogni direzione ortogonale si trova con prodotti scalari nulli.

**Cosa sono le equazioni di un piano o di una retta.** Condizioni sulle coordinate $(x, y, z)$ di un punto che sono vere per **tutti e soli** i punti di quell'oggetto. Un punto sta sul piano se e solo se le sue coordinate soddisfano le equazioni. "Tutti" vuol dire che nessun punto dell'oggetto viene escluso, "soli" che nessun punto fuori viene accettato: servono entrambe le metà.

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
                   parametriche  <--(pongo una variabile = t)--  cartesiane
```

Il numero di parametri è la dimensione: su un piano ci si muove in due direzioni indipendenti ($t$ e $s$), su una retta in una sola ($t$). Il numero di equazioni cartesiane fa il conto opposto: lo spazio ha 3 "gradi di libertà", ogni equazione ne toglie uno, quindi il piano (2 dimensioni) ne vuole una e la retta (1 dimensione) due.

Il filo della lezione:

```
piano:  punto P + normale n     -->  PQ · n = 0       -->  ax + by + cz + d = 0
piano:  tre punti A, B, C       -->  AQ = t v + s w   -->  parametriche (t, s)  --> cartesiana
retta:  due punti A, B          -->  AQ = t v         -->  parametriche (t)     --> due cartesiane
retta come due piani            -->  fascio  λ(piano 1) + μ(piano 2) = 0  =  tutti i piani che la contengono
```

## Definizioni

### Vettore normale

**L'idea.** Un piano è "piatto": tutte le frecce che collegano due suoi punti stanno dentro il piano. Esiste una direzione che le attraversa tutte ad angolo retto, come un'asta piantata in verticale su un tavolo. Quella direzione basta a dire come è inclinato il piano.

**Vettore normale a un piano.** La prof: "sia $\vec{n}$ vettore normale a $\pi$, ossia un vettore ortogonale a $\pi$". Vuol dire un vettore $\vec{n} \neq \vec{0}$ ortogonale a ogni vettore $\overrightarrow{PQ}$ con $P$ e $Q$ in $\pi$.

**Perché $\vec{n} \neq \vec{0}$.** Il vettore nullo ha prodotto scalare $0$ con tutto, quindi sarebbe "ortogonale" a ogni piano e non direbbe niente sull'inclinazione. Nella definizione del piano qui sotto, con $\vec{n} = \vec{0}$ la condizione $\overrightarrow{PQ} \cdot \vec{0} = 0$ è vera per ogni $Q$ e verrebbe tutto lo spazio.

**Non è unico.** Se $\vec{n}$ è normale, lo è anche ogni $k\vec{n}$ con $k \neq 0$: $\overrightarrow{PQ} \cdot (k\vec{n}) = k(\overrightarrow{PQ} \cdot \vec{n}) = 0$. Conta la direzione, non il modulo né il verso.

**Esempi, dal più facile.**
1. Il piano $xy$, cioè $z = 0$. Due suoi punti hanno $z = 0$, quindi ogni $\overrightarrow{PQ}$ ha terza componente $0$: $\overrightarrow{PQ} = (p_1, p_2, 0)$. Con $\vec{n} = (0, 0, 1)$: $\overrightarrow{PQ} \cdot \vec{n} = 0 + 0 + 0 = 0$. Anche $(0, 0, -3)$ è normale (è $-3$ volte il primo).
2. Il piano $x + 2y - z - 2 = 0$ (sotto si vede perché) ha normale $\vec{n} = (1, 2, -1)$. Controllo su due suoi punti: $P = (1, 2, 3)$ ci sta ($1 + 4 - 3 - 2 = 0$), $Q = (2, 0, 0)$ pure ($2 - 2 = 0$). $\overrightarrow{PQ} = (2 - 1,\ 0 - 2,\ 0 - 3) = (1, -2, -3)$ e $\overrightarrow{PQ} \cdot \vec{n} = 1 - 4 + 3 = 0$.

**Controesempio.** Per il piano $z = 0$ il vettore $(1, 0, 0)$ **non** è normale: va da $O$ a $(1, 0, 0)$, che sta sul piano, quindi è un $\overrightarrow{PQ}$ del piano, e $(1, 0, 0) \cdot (1, 0, 0) = 1 \neq 0$. Sta dentro il piano invece di attraversarlo.

### Piano per un punto con vettore normale

Un piano $\pi$ è individuato da un suo punto $P$ e da un vettore normale $\vec{n}$. È il **luogo dei punti** $Q = (x, y, z)$ tali che $\overrightarrow{PQ}$ è ortogonale a $\vec{n}$:

$$
\pi = \{\,Q : \overrightarrow{PQ} \cdot \vec{n} = 0\,\}
$$

<figure class="fig"><svg role="img" aria-label="piano per punto e normale" xmlns:xlink="http://www.w3.org/1999/xlink" width="346.32pt" height="218.308235pt" viewBox="0 0 346.32 218.308235" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f5a9305-figure_1"> <g id="f5a9305-patch_1"> <path d="M 0 218.308235 L 346.32 218.308235 L 346.32 0 L 0 0 L 0 218.308235 z " style="fill: none"/> </g> <g id="f5a9305-axes_1"> <g id="f5a9305-patch_2"> <path d="M 14.310494 162.754987 L 230.945788 162.754987 L 341.856565 85.094425 L 125.221271 85.094425 z " clip-path="url(#f5a9305-p8f02e562cc)" style="fill: var(--fig-faint); opacity: 0.35; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linejoin: miter"/> </g> <g id="f5a9305-line2d_1"> <path d="M 158.389412 113.092941 L 167.783052 118.486145 L 167.783052 129.317909 " clip-path="url(#f5a9305-p8f02e562cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f5a9305-patch_3"> <path d="M 158.389412 123.924706 Q 182.737237 137.903607 205.145874 150.769156 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 201.683519 145.552635 L 205.145874 150.769156 L 198.895244 150.409127 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f5a9305-patch_4"> <path d="M 158.389412 123.924706 Q 158.389412 74.689412 158.389412 28.361006 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: round"/> <path d="M 155.589412 33.961006 L 158.389412 28.361006 L 161.189412 33.961006 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: round"/> </g> <g id="f5a9305-text_1"> <!-- $P$ --> <g style="fill: var(--fig-ink)" transform="translate(139.198824 134.686953) scale(0.13 -0.13)"> <defs> <path id="f5a9305-DejaVuSerif-Italic-33" d="M 1594 2375 L 2419 2375 Q 2884 2375 3176 2626 Q 3469 2878 3559 3353 Q 3653 3831 3457 4081 Q 3262 4331 2797 4331 L 1972 4331 L 1594 2375 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3016 4666 Q 3716 4666 4056 4311 Q 4397 3956 4278 3353 Q 4162 2753 3684 2397 Q 3206 2041 2506 2041 L 1528 2041 L 1194 331 L 1916 331 L 1853 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f5a9305-DejaVuSerif-Italic-33" transform="translate(0 0.09375)"/> </g> </g> <g id="f5a9305-text_2"> <!-- $Q$ --> <g style="fill: var(--fig-ink)" transform="translate(216.52565 160.182991) scale(0.13 -0.13)"> <defs> <path id="f5a9305-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f5a9305-DejaVuSerif-Italic-34" transform="translate(0 0.78125)"/> </g> </g> <g id="f5a9305-text_3"> <!-- $\vec{n}$ --> <g style="fill: var(--fig-accent)" transform="translate(168.935 29.612594) scale(0.13 -0.13)"> <defs> <path id="f5a9305-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f5a9305-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f5a9305-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#f5a9305-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> </g> </g> <g id="f5a9305-text_4"> <!-- $\overrightarrow{PQ}$ --> <g style="fill: var(--fig-ink)" transform="translate(177.910766 129.891495) scale(0.13 -0.13)"> <defs> <path id="f5a9305-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f5a9305-DejaVuSerif-854" transform="translate(50.598145 75.265625)"/> <use xlink:href="#f5a9305-DejaVuSerif-Italic-33" transform="translate(0 0.46875)"/> <use xlink:href="#f5a9305-DejaVuSerif-Italic-34" transform="translate(67.285156 0.46875)"/> </g> </g> <g id="f5a9305-text_5"> <!-- $\pi$ --> <g style="fill: var(--fig-axis)" transform="translate(302.659135 106.076233) scale(0.15 -0.15)"> <defs> <path id="f5a9305-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f5a9305-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f5a9305-line2d_2"> <defs> <path id="f5a9305-m3f33969587" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f5a9305-p8f02e562cc)"> <use xlink:href="#f5a9305-m3f33969587" x="158.389412" y="123.924706" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f5a9305-line2d_3"> <g clip-path="url(#f5a9305-p8f02e562cc)"> <use xlink:href="#f5a9305-m3f33969587" x="207.085061" y="151.882508" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="f5a9305-p8f02e562cc"> <rect x="5.76" y="5.76" width="334.8" height="206.788235"/> </clipPath> </defs> </svg></figure>

L'idea: da $P$ posso andare in qualunque direzione "orizzontale" rispetto a $\vec{n}$ e resto sul piano. Appena mi alzo o mi abbasso, $\overrightarrow{PQ}$ ha una componente lungo $\vec{n}$ e il prodotto scalare smette di essere zero.

**Perché servono tutti e due.** Il punto da solo non basta: per $P$ passano infiniti piani, inclinati in tutti i modi. La normale da sola nemmeno: i piani con normale $(0, 0, 1)$ sono tutti quelli orizzontali, $z = 0$, $z = 1$, $z = -7$, uno sopra l'altro. Il punto sceglie quale.

**Esempi.**
1. $P = O = (0, 0, 0)$, $\vec{n} = (0, 0, 1)$. $\overrightarrow{OQ} = (x, y, z)$ e $\overrightarrow{OQ} \cdot \vec{n} = z$. Il piano è $z = 0$, il piano $xy$.
2. $P = (2, 1, -1)$, $\vec{n} = (1, -1, 3)$. $\overrightarrow{PQ} = (x - 2,\ y - 1,\ z + 1)$, e la condizione è
$$
1(x - 2) - 1(y - 1) + 3(z + 1) = 0
$$
Sviluppo i prodotti: $x - 2 - y + 1 + 3z + 3 = 0$. Raccolgo i numeri, $-2 + 1 + 3 = 2$:
$$
x - y + 3z + 2 = 0
$$
Controllo: $P$ dà $2 - 1 - 3 + 2 = 0$.

**Controesempio.** $Q = (0, 0, 0)$ sta sul piano dell'esempio 2? $\overrightarrow{PQ} = (-2, -1, 1)$ e $\overrightarrow{PQ} \cdot \vec{n} = -2 + 1 + 3 = 2 \neq 0$: no. Nell'equazione: $0 - 0 + 0 + 2 = 2 \neq 0$, stesso numero, e non è un caso (la dimostrazione sotto dice perché).

### Equazione cartesiana del piano

**Equazione cartesiana.** Un'equazione della forma

$$
ax + by + cz + d = 0 \qquad (a, b, c) \neq (0, 0, 0)
$$

definisce un piano. $(a, b, c)$ sono le coordinate di un **vettore normale** al piano.

Esempio: $P = (1, 2, 3)$ sta sul piano $x + 2y - z - 2 = 0$ perché $1 + 4 - 3 - 2 = 0$. $Q = (0, 0, 0)$ non ci sta, perché $0 + 0 - 0 - 2 = -2 \neq 0$.

> [!warning] Refuso nella dispensa
> La dispensa (Esempio 1) dice che $Q = (1, 1, 1)$ non appartiene a $x + 2y - z - 2 = 0$. Invece $1 + 2 - 1 - 2 = 0$, quindi ci appartiene. Per questo qui sopra l'esempio usa l'origine.

**Non è unica.** Moltiplicando tutta l'equazione per uno scalare $\neq 0$ si ottiene un'altra equazione dello stesso piano: $x + 2y - z - 2 = 0$ e $2x + 4y - 2z - 4 = 0$ descrivono lo stesso insieme di punti. Il motivo: $k \cdot (\text{numero}) = 0$ con $k \neq 0$ se e solo se il numero è $0$, quindi un punto soddisfa una delle due equazioni se e solo se soddisfa l'altra.

**Cosa si legge dall'equazione senza fare conti.**

<figure class="fig"><svg role="img" aria-label="piani con intercette e piano verticale" xmlns:xlink="http://www.w3.org/1999/xlink" width="647.64pt" height="305.029573pt" viewBox="0 0 647.64 305.029573" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fcd0c04-figure_1"> <g id="fcd0c04-patch_1"> <path d="M 0 305.029573 L 647.64 305.029573 L 647.64 0 L 0 0 L 0 305.029573 z " style="fill: none"/> </g> <g id="fcd0c04-axes_1"> <g id="fcd0c04-patch_2"> <path d="M 77.159631 227.18507 L 192.854118 205.722515 L 107.811337 78.158343 z " clip-path="url(#fcd0c04-pe4b5a5e427)" style="fill: var(--fig-steel); opacity: 0.22"/> </g> <g id="fcd0c04-line2d_1"> <path d="M 77.159631 227.18507 L 192.854118 205.722515 L 107.811337 78.158343 L 77.159631 227.18507 " clip-path="url(#fcd0c04-pe4b5a5e427)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="fcd0c04-patch_3"> <path d="M 107.811337 205.722515 Q 71.412436 231.209299 36.112543 255.92655 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 40.536304 255.270549 L 36.112543 255.92655 L 38.241999 251.99394 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fcd0c04-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(22.600665 266.170354) scale(0.13 -0.13)"> <defs> <path id="fcd0c04-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="fcd0c04-patch_4"> <path d="M 107.811337 205.722515 Q 188.601979 205.722515 268.05098 205.722515 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 264.05098 203.722515 L 268.05098 205.722515 L 264.05098 207.722515 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fcd0c04-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(276.317968 209.099468) scale(0.13 -0.13)"> <defs> <path id="fcd0c04-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="fcd0c04-patch_5"> <path d="M 107.811337 205.722515 Q 107.811337 124.931873 107.811337 45.482872 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 105.811337 49.482872 L 107.811337 45.482872 L 109.811337 49.482872 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fcd0c04-text_3"> <!-- $z$ --> <g style="fill: var(--fig-axis)" transform="translate(104.366337 36.887837) scale(0.13 -0.13)"> <defs> <path id="fcd0c04-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5d" transform="translate(0 0.5625)"/> </g> </g> <g id="fcd0c04-text_4"> <!-- $(1,0,0)$ --> <g style="fill: var(--fig-ink)" transform="translate(33.367866 238.548059) scale(0.11 -0.11)"> <defs> <path id="fcd0c04-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-14" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(153.388672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(217.011719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(267.763672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-c" transform="translate(331.386719 0.015625)"/> </g> </g> <g id="fcd0c04-text_5"> <!-- $(0,2,0)$ --> <g style="fill: var(--fig-ink)" transform="translate(178.827326 221.337643) scale(0.11 -0.11)"> <defs> <path id="fcd0c04-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-15" transform="translate(153.388672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(217.011719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(267.763672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-c" transform="translate(331.386719 0.015625)"/> </g> </g> <g id="fcd0c04-text_6"> <!-- $(0,0,3)$ --> <g style="fill: var(--fig-ink)" transform="translate(55.515294 78.890985) scale(0.11 -0.11)"> <defs> <path id="fcd0c04-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(153.388672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(217.011719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-16" transform="translate(267.763672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-c" transform="translate(331.386719 0.015625)"/> </g> </g> <g id="fcd0c04-patch_6"> <path d="M 125.941695 170.355309 Q 151.936997 160.966312 175.408584 152.488831 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> <path d="M 169.190433 151.757671 L 175.408584 152.488831 L 171.092765 157.024656 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> </g> <g id="fcd0c04-text_7"> <!-- $\vec{n}=(6,3,2)$ --> <g style="fill: var(--fig-accent)" transform="translate(160.053716 142.339608) scale(0.11 -0.11)"> <defs> <path id="fcd0c04-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-20" transform="translate(83.369141 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-b" transform="translate(186.123047 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-19" transform="translate(225.136719 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(288.759766 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-16" transform="translate(339.511719 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(403.134766 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-15" transform="translate(453.886719 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-c" transform="translate(517.509766 0.96875)"/> </g> </g> <g id="fcd0c04-text_8"> <!-- $O$ --> <g style="fill: var(--fig-axis)" transform="translate(91.850989 202.721259) scale(0.13 -0.13)"> <defs> <path id="fcd0c04-DejaVuSerif-Italic-32" d="M 2219 244 Q 2984 244 3478 770 Q 3972 1297 4172 2328 Q 4372 3363 4084 3889 Q 3797 4416 3031 4416 Q 2263 4416 1769 3889 Q 1275 3363 1075 2328 Q 875 1297 1162 770 Q 1450 244 2219 244 z M 2153 -91 Q 1678 -91 1311 65 Q 944 222 700 525 Q 419 875 334 1319 Q 250 1763 359 2328 Q 469 2894 725 3339 Q 981 3784 1400 4134 Q 1766 4441 2191 4595 Q 2616 4750 3097 4750 Q 4113 4750 4608 4084 Q 5103 3419 4891 2328 Q 4781 1769 4522 1320 Q 4263 872 3847 525 Q 3481 219 3056 64 Q 2631 -91 2153 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-32" transform="translate(0 0.78125)"/> </g> </g> <g id="fcd0c04-text_9"> <!-- $6x + 3y + 2z - 6 = 0$ --> <g style="fill: var(--fig-ink)" transform="translate(87.217727 15.636953) scale(0.13 -0.13)"> <defs> <path id="fcd0c04-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-19" transform="translate(0 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5b" transform="translate(63.623047 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-e" transform="translate(138.984375 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-16" transform="translate(241.738281 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5c" transform="translate(305.361328 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-e" transform="translate(380.820312 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-15" transform="translate(483.574219 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5d" transform="translate(547.197266 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-8cf" transform="translate(618.847656 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-19" transform="translate(721.601562 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-20" transform="translate(804.189453 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(906.943359 0.78125)"/> </g> </g> <g id="fcd0c04-line2d_2"> <defs> <path id="fcd0c04-m9e67b45413" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#fcd0c04-pe4b5a5e427)"> <use xlink:href="#fcd0c04-m9e67b45413" x="77.159631" y="227.18507" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="fcd0c04-line2d_3"> <g clip-path="url(#fcd0c04-pe4b5a5e427)"> <use xlink:href="#fcd0c04-m9e67b45413" x="192.854118" y="205.722515" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="fcd0c04-line2d_4"> <g clip-path="url(#fcd0c04-pe4b5a5e427)"> <use xlink:href="#fcd0c04-m9e67b45413" x="107.811337" y="78.158343" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> <g id="fcd0c04-axes_2"> <g id="fcd0c04-patch_7"> <path d="M 416.47125 232.550709 L 539.828663 205.722515 L 539.828663 86.662622 L 416.47125 113.490816 z " clip-path="url(#fcd0c04-pca0f4cac28)" style="fill: var(--fig-steel); opacity: 0.22"/> </g> <g id="fcd0c04-line2d_5"> <path d="M 416.47125 232.550709 L 539.828663 205.722515 L 539.828663 86.662622 L 416.47125 113.490816 L 416.47125 232.550709 " clip-path="url(#fcd0c04-pca0f4cac28)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="fcd0c04-line2d_6"> <path d="M 434.974862 228.52648 L 434.974862 109.466587 " clip-path="url(#fcd0c04-pca0f4cac28)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: var(--fig-faint)"/> </g> <g id="fcd0c04-line2d_7"> <path d="M 478.149957 219.136612 L 478.149957 100.076719 " clip-path="url(#fcd0c04-pca0f4cac28)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: var(--fig-faint)"/> </g> <g id="fcd0c04-line2d_8"> <path d="M 521.325051 209.746744 L 521.325051 90.686851 " clip-path="url(#fcd0c04-pca0f4cac28)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: var(--fig-faint)"/> </g> <g id="fcd0c04-patch_8"> <path d="M 454.785882 205.722515 Q 418.386982 231.209299 383.087089 255.92655 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 387.51085 255.270549 L 383.087089 255.92655 L 385.216544 251.99394 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fcd0c04-text_10"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(369.57521 266.170354) scale(0.13 -0.13)"> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="fcd0c04-patch_9"> <path d="M 454.785882 205.722515 Q 535.576524 205.722515 615.025525 205.722515 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 611.025525 203.722515 L 615.025525 205.722515 L 611.025525 207.722515 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fcd0c04-text_11"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(623.292513 209.099468) scale(0.13 -0.13)"> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="fcd0c04-patch_10"> <path d="M 454.785882 205.722515 Q 454.785882 124.931873 454.785882 45.482872 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 452.785882 49.482872 L 454.785882 45.482872 L 456.785882 49.482872 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fcd0c04-text_12"> <!-- $z$ --> <g style="fill: var(--fig-axis)" transform="translate(451.340882 36.887837) scale(0.13 -0.13)"> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5d" transform="translate(0 0.5625)"/> </g> </g> <g id="fcd0c04-text_13"> <!-- $(2,0,0)$ --> <g style="fill: var(--fig-ink)" transform="translate(374.805555 248.165837) scale(0.11 -0.11)"> <use xlink:href="#fcd0c04-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-15" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(153.388672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(217.011719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(267.763672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-c" transform="translate(331.386719 0.015625)"/> </g> </g> <g id="fcd0c04-text_14"> <!-- $(0,2,0)$ --> <g style="fill: var(--fig-ink)" transform="translate(527.927941 221.337643) scale(0.11 -0.11)"> <use xlink:href="#fcd0c04-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-15" transform="translate(153.388672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(217.011719 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(267.763672 0.015625)"/> <use xlink:href="#fcd0c04-DejaVuSerif-c" transform="translate(331.386719 0.015625)"/> </g> </g> <g id="fcd0c04-patch_11"> <path d="M 478.149957 151.102387 Q 498.431681 162.746804 516.38638 173.055198 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> <path d="M 512.924025 167.838676 L 516.38638 173.055198 L 510.13575 172.695169 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> </g> <g id="fcd0c04-text_15"> <!-- $\vec{n}=(1,1,0)$ --> <g style="fill: var(--fig-accent)" transform="translate(509.3391 165.153514) scale(0.11 -0.11)"> <use xlink:href="#fcd0c04-STIXGeneral-Regular-350" transform="translate(63.397949 12)"/> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-51" transform="translate(0 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-20" transform="translate(83.369141 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-b" transform="translate(186.123047 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-14" transform="translate(225.136719 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(288.759766 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-14" transform="translate(339.511719 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-f" transform="translate(403.134766 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(453.886719 0.96875)"/> <use xlink:href="#fcd0c04-DejaVuSerif-c" transform="translate(517.509766 0.96875)"/> </g> </g> <g id="fcd0c04-text_16"> <!-- $O$ --> <g style="fill: var(--fig-axis)" transform="translate(438.825535 202.721259) scale(0.13 -0.13)"> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-32" transform="translate(0 0.78125)"/> </g> </g> <g id="fcd0c04-text_17"> <!-- $x + y - 2 = 0$: manca $z$ --> <g style="fill: var(--fig-ink)" transform="translate(426.457273 15.636953) scale(0.13 -0.13)"> <defs> <path id="fcd0c04-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fcd0c04-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5b" transform="translate(0 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-e" transform="translate(75.361328 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5c" transform="translate(178.115234 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-8cf" transform="translate(253.574219 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-15" transform="translate(356.328125 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-20" transform="translate(438.916016 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-13" transform="translate(541.669922 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-1d" transform="translate(605.292969 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-3" transform="translate(638.984375 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-50" transform="translate(670.771484 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-44" transform="translate(765.595703 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-51" transform="translate(825.214844 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-46" transform="translate(889.619141 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-44" transform="translate(945.625 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-3" transform="translate(1005.244141 0.78125)"/> <use xlink:href="#fcd0c04-DejaVuSerif-Italic-5d" transform="translate(1037.03125 0.78125)"/> </g> </g> <g id="fcd0c04-line2d_9"> <g clip-path="url(#fcd0c04-pca0f4cac28)"> <use xlink:href="#fcd0c04-m9e67b45413" x="416.47125" y="232.550709" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="fcd0c04-line2d_10"> <g clip-path="url(#fcd0c04-pca0f4cac28)"> <use xlink:href="#fcd0c04-m9e67b45413" x="539.828663" y="205.722515" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="fcd0c04-pe4b5a5e427"> <rect x="5.76" y="35.636953" width="289.145455" height="263.63262"/> </clipPath> <clipPath id="fcd0c04-pca0f4cac28"> <rect x="352.734545" y="35.636953" width="289.145455" height="263.63262"/> </clipPath> </defs> </svg></figure>

- **La normale**: i coefficienti di $x, y, z$. $6x + 3y + 2z - 6 = 0$ ha normale $(6, 3, 2)$.
- **Dove taglia gli assi**: sull'asse $x$ i punti hanno $y = z = 0$, quindi $6x - 6 = 0$ e $x = 1$; allo stesso modo $y = 2$ sull'asse $y$ e $z = 3$ sull'asse $z$ (figura a sinistra). Tre punti facili da disegnare.
- **Se manca una variabile, il piano è parallelo a quell'asse.** $x + y - 2 = 0$ non contiene $z$ (coefficiente $0$): se $(x, y, z)$ ci sta, ci sta anche $(x, y, z')$ per ogni $z'$, perché l'equazione non guarda la terza coordinata. Il piano è fatto di rette verticali, cioè è parallelo all'asse $z$ (figura a destra). La normale $(1, 1, 0)$ è orizzontale.
- **Se mancano due variabili, il piano è parallelo a un piano coordinato.** $z - 4 = 0$ è il piano orizzontale ad altezza $4$, normale $(0, 0, 1)$.
- **Se $d = 0$, il piano passa per l'origine**: $O$ dà $0 + 0 + 0 + 0 = 0$. Per esempio $2x - y + z = 0$.

**Controesempio: perché $(a, b, c) \neq (0, 0, 0)$.** Con $a = b = c = 0$ resta $d = 0$. Se $d \neq 0$, per esempio $0x + 0y + 0z + 5 = 0$, nessun punto la soddisfa: è l'insieme vuoto. Se $d = 0$ la soddisfano tutti i punti: è lo spazio intero. In nessuno dei due casi è un piano.

### Equazioni parametriche del piano

**L'idea.** Invece di una condizione da controllare, una ricetta per costruire tutti i punti: parto da un punto del piano e mi muovo lungo due direzioni del piano, tanto quanto voglio in ciascuna.

Tre punti $A$, $B$, $C$ **distinti e non allineati** individuano un unico piano. Con $\vec{v} = \overrightarrow{AB} = (v_1, v_2, v_3)$ e $\vec{w} = \overrightarrow{AC} = (w_1, w_2, w_3)$, un punto $Q$ sta sul piano se e solo se da $A$ ci si arriva camminando un po' lungo $\vec{v}$ e un po' lungo $\vec{w}$:

$$
\exists\, t, s \in \mathbb{R} : \overrightarrow{AQ} = t\,\vec{v} + s\,\vec{w}
$$

<figure class="fig"><svg role="img" aria-label="piano per tre punti" xmlns:xlink="http://www.w3.org/1999/xlink" width="374.22pt" height="169.47pt" viewBox="0 0 374.22 169.47" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f87a25a-figure_1"> <g id="f87a25a-patch_1"> <path d="M 0 169.47 L 374.22 169.47 L 374.22 0 L 0 0 L 0 169.47 z " style="fill: none"/> </g> <g id="f87a25a-axes_1"> <g id="f87a25a-patch_2"> <path d="M 11.61 157.86 L 292.41 157.86 L 362.61 11.61 L 81.81 11.61 z " clip-path="url(#f87a25a-p52c5678da1)" style="fill: var(--fig-faint); opacity: 0.35; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linejoin: miter"/> </g> <g id="f87a25a-patch_3"> <path d="M 140.31 46.71 Q 196.1775 54.9 250.938789 62.927833 " style="fill: none; stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-linecap: round"/> <path d="M 245.804141 59.345183 L 250.938789 62.927833 L 244.99188 64.885962 z " style="fill: var(--fig-faint); stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-linecap: round"/> </g> <g id="f87a25a-patch_4"> <path d="M 183.6 121.005 Q 217.8225 92.0475 250.935461 64.028841 " style="fill: none; stroke-dasharray: 4.81,2.08; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.3; stroke-linecap: round"/> <path d="M 244.851859 65.508636 L 250.935461 64.028841 L 248.469136 69.783599 z " style="fill: var(--fig-axis); stroke-dasharray: 4.81,2.08; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.3; stroke-linecap: round"/> </g> <g id="f87a25a-patch_5"> <path d="M 64.26 111.06 Q 102.285 78.885 138.603016 48.154371 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 132.519415 49.634166 L 138.603016 48.154371 L 136.136691 53.909129 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f87a25a-patch_6"> <path d="M 64.26 111.06 Q 134.46 116.91 202.431656 122.574305 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 197.083527 119.318922 L 202.431656 122.574305 L 196.618472 124.899578 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f87a25a-patch_7"> <path d="M 64.26 111.06 Q 158.1525 87.075 249.445204 63.754122 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> <path d="M 243.326426 62.42726 L 249.445204 63.754122 L 244.712448 67.853027 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> </g> <g id="f87a25a-text_1"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(44.89 126.136953) scale(0.13 -0.13)"> <defs> <path id="f87a25a-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87a25a-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="f87a25a-text_2"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(129.65 32.536953) scale(0.13 -0.13)"> <defs> <path id="f87a25a-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87a25a-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="f87a25a-text_3"> <!-- $C$ --> <g style="fill: var(--fig-ink)" transform="translate(202.58 144.856953) scale(0.13 -0.13)"> <defs> <path id="f87a25a-DejaVuSerif-Italic-26" d="M 4300 1234 Q 3966 581 3414 245 Q 2863 -91 2119 -91 Q 1663 -91 1303 65 Q 944 222 700 525 Q 419 875 334 1320 Q 250 1766 359 2328 Q 572 3416 1330 4083 Q 2088 4750 3116 4750 Q 3497 4750 3908 4650 Q 4319 4550 4775 4347 L 4569 3272 L 4216 3272 Q 4213 3859 3919 4137 Q 3625 4416 2997 4416 Q 2250 4416 1762 3886 Q 1275 3356 1075 2328 Q 875 1303 1156 773 Q 1438 244 2184 244 Q 2706 244 3092 492 Q 3478 741 3725 1234 L 4300 1234 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87a25a-DejaVuSerif-Italic-26" transform="translate(0 0.78125)"/> </g> </g> <g id="f87a25a-text_4"> <!-- $Q$ --> <g style="fill: var(--fig-ink)" transform="translate(261.34 54.766953) scale(0.13 -0.13)"> <defs> <path id="f87a25a-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87a25a-DejaVuSerif-Italic-34" transform="translate(0 0.78125)"/> </g> </g> <g id="f87a25a-text_5"> <!-- $\vec{v}$ --> <g style="fill: var(--fig-steel)" transform="translate(81.03 74.138477) scale(0.13 -0.13)"> <defs> <path id="f87a25a-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f87a25a-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87a25a-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> </g> </g> <g id="f87a25a-text_6"> <!-- $\vec{w}$ --> <g style="fill: var(--fig-steel)" transform="translate(128.87 138.488477) scale(0.13 -0.13)"> <defs> <path id="f87a25a-DejaVuSerif-Italic-5a" d="M 3741 728 Q 4156 1178 4250 1344 Q 4594 1969 4931 2988 L 4447 2984 L 4513 3322 L 5347 3322 L 5281 2984 L 5278 2984 Q 4959 1825 4656 1266 Q 4209 469 3719 0 L 3241 0 L 2900 2484 L 1597 0 L 1138 0 L 734 2988 L 359 2981 L 425 3322 L 1281 3322 L 1631 728 L 2991 3322 L 3394 3322 L 3741 728 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87a25a-STIXGeneral-Regular-350" transform="translate(76.695801 10)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-5a" transform="translate(0 0.390625)"/> </g> </g> <g id="f87a25a-text_7"> <!-- $\overrightarrow{AQ}=t\vec{v}+s\vec{w}$ --> <g style="fill: var(--fig-accent)" transform="translate(234.6 101.503594) scale(0.12 -0.12)"> <defs> <path id="f87a25a-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> <path id="f87a25a-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f87a25a-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f87a25a-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f87a25a-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87a25a-DejaVuSerif-854" transform="translate(53.831055 75.265625)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-24" transform="translate(0 0.46875)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-34" transform="translate(72.216797 0.46875)"/> <use xlink:href="#f87a25a-DejaVuSerif-20" transform="translate(173.164062 0.46875)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-57" transform="translate(275.917969 0.46875)"/> <use xlink:href="#f87a25a-STIXGeneral-Regular-350" transform="translate(374.523926 10.078125)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-59" transform="translate(316.103516 0.46875)"/> <use xlink:href="#f87a25a-DejaVuSerif-e" transform="translate(391.5625 0.46875)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-56" transform="translate(494.316406 0.46875)"/> <use xlink:href="#f87a25a-STIXGeneral-Regular-350" transform="translate(622.330566 10.078125)"/> <use xlink:href="#f87a25a-DejaVuSerif-Italic-5a" transform="translate(545.634766 0.46875)"/> </g> </g> <g id="f87a25a-line2d_1"> <defs> <path id="f87a25a-ma3e296df3b" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f87a25a-p52c5678da1)"> <use xlink:href="#f87a25a-ma3e296df3b" x="64.26" y="111.06" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f87a25a-line2d_2"> <g clip-path="url(#f87a25a-p52c5678da1)"> <use xlink:href="#f87a25a-ma3e296df3b" x="140.31" y="46.71" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f87a25a-line2d_3"> <g clip-path="url(#f87a25a-p52c5678da1)"> <use xlink:href="#f87a25a-ma3e296df3b" x="204.66" y="122.76" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f87a25a-line2d_4"> <g clip-path="url(#f87a25a-p52c5678da1)"> <use xlink:href="#f87a25a-ma3e296df3b" x="252.045" y="63.09" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="f87a25a-p52c5678da1"> <rect x="5.76" y="5.76" width="362.7" height="157.95"/> </clipPath> </defs> </svg></figure>

In coordinate, con $Q = (x, y, z)$ e $\overrightarrow{AQ} = (x - x_A,\ y - y_A,\ z - z_A)$:

$$
\begin{cases} x = x_A + t\,v_1 + s\,w_1 \\ y = y_A + t\,v_2 + s\,w_2 \\ z = z_A + t\,v_3 + s\,w_3 \end{cases} \qquad t, s \in \mathbb{R}
$$

Sono le **equazioni parametriche** del piano, con parametri $(t, s)$. Ogni coppia $(t, s)$ dà un punto del piano, e ogni punto del piano viene da almeno una coppia.

**Perché "non allineati".** Se $A$, $B$, $C$ stanno su una retta, $\vec{v}$ e $\vec{w}$ hanno la stessa direzione, e $t\vec{v} + s\vec{w}$ resta sempre su quella retta: non si esce in una seconda direzione e il piano non viene fuori. Per tre punti allineati passano infiniti piani.

Anche le parametriche non sono uniche: cambiando i tre punti scelti sul piano cambiano i numeri, ma l'insieme descritto è lo stesso.

**Esempi.**
1. **Leggere le parametriche.** Il piano
$$
\begin{cases} x = 1 + t \\ y = 2 - s \\ z = 3t + s \end{cases}
$$
passa per il punto che si ottiene con $t = s = 0$, cioè $(1, 2, 0)$. I coefficienti di $t$ danno $\vec{v} = (1, 0, 3)$, quelli di $s$ danno $\vec{w} = (0, -1, 1)$. Non sono proporzionali (la prima componente di $\vec{w}$ è $0$, quella di $\vec{v}$ no), quindi è davvero un piano. Altri punti: $t = 1, s = 0$ dà $(2, 2, 3)$; $t = 0, s = 1$ dà $(1, 1, 1)$.
2. **Dalle parametriche alla cartesiana** (lo stesso piano). Dalla prima $t = x - 1$, dalla seconda $s = 2 - y$. Sostituisco nella terza:
$$
z = 3(x - 1) + (2 - y) = 3x - 3 + 2 - y = 3x - y - 1
$$
Porto tutto a sinistra: $3x - y - z - 1 = 0$. Controllo: il punto $(1, 2, 0)$ dà $3 - 2 - 0 - 1 = 0$; la normale $\vec{n} = (3, -1, -1)$ ha $\vec{n} \cdot \vec{v} = 3 + 0 - 3 = 0$ e $\vec{n} \cdot \vec{w} = 0 + 1 - 1 = 0$.
3. **Dalla cartesiana alle parametriche**, al contrario. In $3x - y - z - 1 = 0$ ricavo la variabile più comoda, $z$ (ha coefficiente $-1$): $z = 3x - y - 1$. Le altre due sono libere e diventano i parametri, **ponendo** $x = t$ e $y = s$:
$$
\begin{cases} x = t \\ y = s \\ z = -1 + 3t - s \end{cases}
$$
Punto $(0, 0, -1)$, direzioni $(1, 0, 3)$ e $(0, 1, -1)$. Sono diverse da quelle dell'esempio 1 ma descrivono lo stesso piano: controllo che siano ortogonali a $\vec{n} = (3, -1, -1)$: $3 + 0 - 3 = 0$ e $0 - 1 + 1 = 0$.

**Controesempio.** $A = (0, 0, 0)$, $B = (1, 1, 1)$, $C = (2, 2, 2)$. $\vec{v} = (1, 1, 1)$, $\vec{w} = (2, 2, 2) = 2\vec{v}$. Le "parametriche" $x = y = z = t + 2s$ descrivono solo la retta $x = y = z$: al variare di $t$ e $s$ conta soltanto il numero $t + 2s$, e un solo numero libero dà una retta.

### Equazioni parametriche della retta

Una retta $r$ è individuata da due suoi punti distinti $A$ e $B$. Il vettore $\vec{v} = \overrightarrow{AB}$ è un **vettore direzionale** di $r$. Un punto $Q$ sta su $r$ se e solo se $\overrightarrow{AQ}$ ha la stessa direzione di $\vec{v}$:

$$
\exists\, t \in \mathbb{R} : \overrightarrow{AQ} = t\,\vec{v}
$$

<figure class="fig"><svg role="img" aria-label="retta e vettore direzionale" xmlns:xlink="http://www.w3.org/1999/xlink" width="346.32pt" height="187.968649pt" viewBox="0 0 346.32 187.968649" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fbcd955-figure_1"> <g id="fbcd955-patch_1"> <path d="M 0 187.968649 L 346.32 187.968649 L 346.32 0 L 0 0 L 0 187.968649 z " style="fill: none"/> </g> <g id="fbcd955-axes_1"> <g id="fbcd955-line2d_1"> <path d="M 14.808649 173.16 L 322.462703 19.332973 " clip-path="url(#fbcd955-pd5839eaf4b)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="fbcd955-patch_2"> <path d="M 87.197838 136.965405 Q 173.16 93.984324 257.522162 51.803243 " style="fill: none; stroke-dasharray: 5.92,2.56; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 251.261172 51.803243 L 257.522162 51.803243 L 253.765568 56.812036 z " style="fill: var(--fig-accent); stroke-dasharray: 5.92,2.56; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="fbcd955-patch_3"> <path d="M 87.197838 136.965405 Q 123.392432 118.868108 156.787027 102.170811 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 150.526037 102.170811 L 156.787027 102.170811 L 153.030433 107.179603 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="fbcd955-text_1"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(89.239324 156.177494) scale(0.13 -0.13)"> <defs> <path id="fbcd955-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcd955-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="fbcd955-text_2"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(161.563514 119.982899) scale(0.13 -0.13)"> <defs> <path id="fbcd955-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcd955-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="fbcd955-text_3"> <!-- $Q$ --> <g style="fill: var(--fig-ink)" transform="translate(260.578649 70.215332) scale(0.13 -0.13)"> <defs> <path id="fbcd955-DejaVuSerif-Italic-34" d="M 2322 -91 Q 1250 -91 741 569 Q 388 1028 388 1713 Q 388 2000 450 2328 Q 559 2894 817 3339 Q 1075 3784 1491 4134 Q 1856 4441 2281 4595 Q 2706 4750 3188 4750 Q 4203 4750 4697 4084 Q 5044 3619 5044 2944 Q 5044 2656 4981 2328 Q 4800 1403 4209 773 Q 3619 144 2759 -38 Q 2888 -247 3109 -347 Q 3331 -447 3672 -447 L 4453 -447 L 4341 -1025 L 3975 -1025 Q 3147 -1025 2803 -769 Q 2466 -513 2322 -91 z M 2309 244 Q 3075 244 3569 770 Q 4063 1297 4263 2328 Q 4344 2753 4344 3094 Q 4344 3578 4175 3888 Q 3888 4416 3122 4416 Q 2353 4416 1859 3889 Q 1366 3363 1166 2328 Q 1084 1906 1084 1566 Q 1084 1081 1253 769 Q 1541 244 2309 244 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcd955-DejaVuSerif-Italic-34" transform="translate(0 0.78125)"/> </g> </g> <g id="fbcd955-text_4"> <!-- $\vec{v}=\overrightarrow{AB}$ --> <g style="fill: var(--fig-ink)" transform="translate(81.972973 107.464287) scale(0.13 -0.13)"> <defs> <path id="fbcd955-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="fbcd955-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="fbcd955-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="fbcd955-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcd955-STIXGeneral-Regular-350" transform="translate(58.42041 10.390625)"/> <use xlink:href="#fbcd955-DejaVuSerif-Italic-59" transform="translate(0 0.78125)"/> <use xlink:href="#fbcd955-DejaVuSerif-20" transform="translate(75.458984 0.78125)"/> <use xlink:href="#fbcd955-DejaVuSerif-854" transform="translate(225.919922 74.265625)"/> <use xlink:href="#fbcd955-DejaVuSerif-Italic-24" transform="translate(178.212891 0.78125)"/> <use xlink:href="#fbcd955-DejaVuSerif-Italic-25" transform="translate(250.429688 0.78125)"/> </g> </g> <g id="fbcd955-text_5"> <!-- $\overrightarrow{AQ}=t\,\vec{v}$ --> <g style="fill: var(--fig-accent)" transform="translate(179.54527 62.286044) scale(0.13 -0.13)"> <defs> <path id="fbcd955-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcd955-DejaVuSerif-854" transform="translate(53.831055 75.265625)"/> <use xlink:href="#fbcd955-DejaVuSerif-Italic-24" transform="translate(0 0.46875)"/> <use xlink:href="#fbcd955-DejaVuSerif-Italic-34" transform="translate(72.216797 0.46875)"/> <use xlink:href="#fbcd955-DejaVuSerif-20" transform="translate(173.164062 0.46875)"/> <use xlink:href="#fbcd955-DejaVuSerif-Italic-57" transform="translate(275.917969 0.46875)"/> <use xlink:href="#fbcd955-STIXGeneral-Regular-350" transform="translate(390.328278 10.078125)"/> <use xlink:href="#fbcd955-DejaVuSerif-Italic-59" transform="translate(331.907868 0.46875)"/> </g> </g> <g id="fbcd955-text_6"> <!-- $r$ --> <g style="fill: var(--fig-axis)" transform="translate(321.604865 36.282899) scale(0.13 -0.13)"> <defs> <path id="fbcd955-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcd955-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="fbcd955-line2d_2"> <defs> <path id="fbcd955-m862b03d424" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#fbcd955-pd5839eaf4b)"> <use xlink:href="#fbcd955-m862b03d424" x="87.197838" y="136.965405" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="fbcd955-line2d_3"> <g clip-path="url(#fbcd955-pd5839eaf4b)"> <use xlink:href="#fbcd955-m862b03d424" x="159.587027" y="100.770811" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="fbcd955-line2d_4"> <g clip-path="url(#fbcd955-pd5839eaf4b)"> <use xlink:href="#fbcd955-m862b03d424" x="259.122162" y="51.003243" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="fbcd955-pd5839eaf4b"> <rect x="5.76" y="5.76" width="334.8" height="176.448649"/> </clipPath> </defs> </svg></figure>

In coordinate, con $\vec{v} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A) = (v_1, v_2, v_3)$:

$$
\begin{cases} x = x_A + t\,v_1 \\ y = y_A + t\,v_2 \\ z = z_A + t\,v_3 \end{cases} \qquad t \in \mathbb{R}
$$

$t = 0$ dà $A$, $t = 1$ dà $B$, $t$ fra $0$ e $1$ i punti del segmento, $t < 0$ i punti dalla parte di $A$ opposta a $B$.

**Perché "distinti".** Con $A = B$ viene $\vec{v} = \vec{0}$ e $A + t\vec{0} = A$ per ogni $t$: si resta fermi in un punto. Il direzionale, come la normale, deve essere $\neq \vec{0}$, e ogni suo multiplo non nullo va bene uguale.

**Esempi.**
1. L'asse $x$: $A = O$, $B = (1, 0, 0)$, $\vec{v} = (1, 0, 0)$, parametriche $x = t$, $y = 0$, $z = 0$.
2. La retta per $A = (1, 0, 2)$ e $B = (3, 1, 0)$. $\vec{v} = (3 - 1,\ 1 - 0,\ 0 - 2) = (2, 1, -2)$:
$$
\begin{cases} x = 1 + 2t \\ y = t \\ z = 2 - 2t \end{cases}
$$
**Un punto ci sta?** Si cerca **un solo** $t$ che vada bene per tutte e tre le coordinate. $(5, 2, -2)$: dalla seconda $t = 2$; la prima dà $1 + 4 = 5$ e la terza $2 - 4 = -2$, tornano, quindi ci sta. $(-1, -1, 3)$: dalla seconda $t = -1$; la prima dà $1 - 2 = -1$, torna, ma la terza dà $2 + 2 = 4 \neq 3$: non ci sta.

### Equazioni cartesiane della retta

Una retta nello spazio è l'**intersezione di due piani distinti** che la contengono:

$$
r : \begin{cases} ax + by + cz + d = 0 \\ a'x + b'y + c'z + d' = 0 \end{cases}
$$

<figure class="fig"><svg role="img" aria-label="retta come intersezione di due piani" xmlns:xlink="http://www.w3.org/1999/xlink" width="368.64pt" height="141.764995pt" viewBox="0 0 368.64 141.764995" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f81063c-figure_1"> <g id="f81063c-patch_1"> <path d="M 0 141.764995 L 368.64 141.764995 L 368.64 0 L 0 0 L 0 141.764995 z " style="fill: none"/> </g> <g id="f81063c-axes_1"> <g id="f81063c-patch_2"> <path d="M 105.181188 44.276704 L 29.187165 97.488291 L 263.458812 97.488291 L 339.452835 44.276704 z " clip-path="url(#f81063c-pf530f7c7ca)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="f81063c-patch_3"> <path d="M 94.626462 112.57783 L 328.89811 112.57783 L 274.013538 29.187165 L 39.74189 29.187165 z " clip-path="url(#f81063c-pf530f7c7ca)" style="fill: var(--fig-accent); opacity: 0.1"/> </g> <g id="f81063c-line2d_1"> <path d="M 105.181188 44.276704 L 29.187165 97.488291 L 263.458812 97.488291 L 339.452835 44.276704 L 105.181188 44.276704 " clip-path="url(#f81063c-pf530f7c7ca)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f81063c-line2d_2"> <path d="M 94.626462 112.57783 L 328.89811 112.57783 L 274.013538 29.187165 L 39.74189 29.187165 L 94.626462 112.57783 " clip-path="url(#f81063c-pf530f7c7ca)" style="fill: none; stroke: var(--fig-accent); stroke-linecap: square"/> </g> <g id="f81063c-line2d_3"> <path d="M 48.442445 70.882497 L 329.568421 70.882497 " clip-path="url(#f81063c-pf530f7c7ca)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: square"/> </g> <g id="f81063c-text_1"> <!-- $r$ --> <g style="fill: var(--fig-ink)" transform="translate(338.162004 67.231301) scale(0.13 -0.13)"> <defs> <path id="f81063c-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f81063c-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="f81063c-text_2"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(263.194245 117.783791) scale(0.15 -0.15)"> <defs> <path id="f81063c-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f81063c-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f81063c-text_3"> <!-- $\pi'$ --> <g style="fill: var(--fig-accent)" transform="translate(274.141687 21.746825) scale(0.15 -0.15)"> <defs> <path id="f81063c-Cmsy10-49" d="M 225 347 Q 184 359 184 409 L 966 3316 Q 1003 3434 1093 3506 Q 1184 3578 1300 3578 Q 1450 3578 1564 3479 Q 1678 3381 1678 3231 Q 1678 3166 1644 3084 L 488 319 Q 466 275 428 275 Q 394 275 320 306 Q 247 338 225 347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f81063c-DejaVuSerif-Italic-338" transform="translate(0 0.565625)"/> <use xlink:href="#f81063c-Cmsy10-49" transform="translate(69.961781 41.865625) scale(0.7)"/> </g> </g> </g> </g> <defs> <clipPath id="f81063c-pf530f7c7ca"> <rect x="5.76" y="5.76" width="357.12" height="130.244995"/> </clipPath> </defs> </svg></figure>

Una sola equazione non basta: $ax + by + cz + d = 0$ nello spazio è un piano, non una retta. Serve una seconda condizione che tagli il piano lungo una linea. I due piani non sono unici: l'asse $x$ è $\{y = 0,\ z = 0\}$ ma anche $\{y = 0,\ y + z = 0\}$.

La prof (p. 13): "sono le equazioni cartesiane di due piani distinti la cui intersezione è $r$". Le cartesiane si ottengono dalle parametriche **eliminando $t$**: ricavo $t$ da un'equazione e lo sostituisco nelle altre due.

**Esempi.**
1. L'asse $z$: i suoi punti sono quelli con $x = 0$ e $y = 0$, quindi $\{x = 0,\ y = 0\}$, intersezione del piano $yz$ e del piano $xz$.
2. La retta dell'esempio 2 sopra, $x = 1 + 2t$, $y = t$, $z = 2 - 2t$. La seconda dà già $t = y$. Sostituisco:
   - nella prima: $x = 1 + 2y$, cioè $x - 2y - 1 = 0$;
   - nella terza: $z = 2 - 2y$, cioè $2y + z - 2 = 0$.

   Controllo con $A = (1, 0, 2)$: $1 - 0 - 1 = 0$ e $0 + 2 - 2 = 0$. Con $B = (3, 1, 0)$: $3 - 2 - 1 = 0$ e $2 + 0 - 2 = 0$.

**Controesempi: due equazioni che non fanno una retta.**
- $\{x + y = 1,\ x + y = 2\}$: nessun punto ha $x + y$ uguale a $1$ e a $2$. Sono due piani paralleli, l'intersezione è vuota.
- $\{x + y - 1 = 0,\ 2x + 2y - 2 = 0\}$: la seconda è la prima moltiplicata per $2$, quindi è lo stesso piano. Il sistema descrive un piano intero, non una retta.

Per avere una retta servono due piani che si tagliano davvero: le due normali non devono essere proporzionali (lo si rivede in [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/)).

### Fascio di piani

**Fascio di piani di sostegno $r$.** La prof: "data una retta $r$ nello spazio, l'insieme dei piani che contengono $r$ è detto fascio di piani di sostegno $r$". Sono infiniti, come le pagine di un libro aperto attorno alla costa.

<figure class="fig"><svg role="img" aria-label="fascio di piani" xmlns:xlink="http://www.w3.org/1999/xlink" width="374.22pt" height="192.87pt" viewBox="0 0 374.22 192.87" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f2b11ad-figure_1"> <g id="f2b11ad-patch_1"> <path d="M 0 192.87 L 374.22 192.87 L 374.22 0 L 0 0 L 0 192.87 z " style="fill: none"/> </g> <g id="f2b11ad-axes_1"> <g id="f2b11ad-patch_2"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 272.291966 150.808257 L 44.309109 150.808257 z " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f2b11ad-patch_3"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 278.234242 97.42386 L 50.251385 97.42386 z " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f2b11ad-patch_4"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 294.46884 50.022116 L 66.485983 50.022116 z " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: var(--fig-steel); opacity: 0.22"/> </g> <g id="f2b11ad-patch_5"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 316.645714 21.304286 L 88.662857 21.304286 z " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f2b11ad-patch_6"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 338.822588 18.965288 L 110.839731 18.965288 z " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f2b11ad-patch_7"> <path d="M 88.662857 119.751429 L 316.645714 119.751429 L 355.057187 43.631854 L 127.07433 43.631854 z " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: var(--fig-axis); opacity: 0.05"/> </g> <g id="f2b11ad-line2d_1"> <path d="M 88.662857 119.751429 L 44.309109 150.808257 L 272.291966 150.808257 L 316.645714 119.751429 " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f2b11ad-line2d_2"> <path d="M 88.662857 119.751429 L 50.251385 97.42386 L 278.234242 97.42386 L 316.645714 119.751429 " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f2b11ad-line2d_3"> <path d="M 88.662857 119.751429 L 66.485983 50.022116 L 294.46884 50.022116 L 316.645714 119.751429 " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f2b11ad-line2d_4"> <path d="M 88.662857 119.751429 L 88.662857 21.304286 L 316.645714 21.304286 L 316.645714 119.751429 " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f2b11ad-line2d_5"> <path d="M 88.662857 119.751429 L 110.839731 18.965288 L 338.822588 18.965288 L 316.645714 119.751429 " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f2b11ad-line2d_6"> <path d="M 88.662857 119.751429 L 127.07433 43.631854 L 355.057187 43.631854 L 316.645714 119.751429 " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: none; stroke: var(--fig-axis); stroke-width: 0.9; stroke-linecap: square"/> </g> <g id="f2b11ad-line2d_7"> <path d="M 61.304914 119.751429 L 344.003657 119.751429 " clip-path="url(#f2b11ad-pc97abd204d)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f2b11ad-text_1"> <!-- $\pi$ --> <g style="fill: var(--fig-steel)" transform="translate(271.38384 38.374315) scale(0.15 -0.15)"> <defs> <path id="f2b11ad-DejaVuSerif-Italic-338" d="M -56 0 L 6 331 L 525 331 L 1044 2988 L 494 2988 L 556 3322 L 4300 3322 L 4237 2988 L 3694 2988 L 3175 331 L 3687 331 L 3625 0 L 2037 0 L 2100 331 L 2597 331 L 3116 2988 L 1619 2988 L 1100 331 L 1600 331 L 1537 0 L -56 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2b11ad-DejaVuSerif-Italic-338" transform="translate(0 0.09375)"/> </g> </g> <g id="f2b11ad-text_2"> <!-- $r$ --> <g style="fill: var(--fig-accent)" transform="translate(353.837229 117.946953) scale(0.13 -0.13)"> <defs> <path id="f2b11ad-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2b11ad-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> </g> </g> <defs> <clipPath id="f2b11ad-pc97abd204d"> <rect x="5.76" y="5.76" width="362.7" height="181.35"/> </clipPath> </defs> </svg></figure>

**Perché serve.** Per trovare un piano servono una normale e un punto. Se il piano deve contenere una retta, invece di cercare la normale da zero si parte dal fascio, che contiene già tutti i candidati, e se ne sceglie uno con una sola condizione in più (un punto, una direzione). L'equazione del fascio è nella sezione Enunciati.

**Esempi.**
1. Il fascio di sostegno l'asse $z$, $\{x = 0,\ y = 0\}$, è $\lambda x + \mu y = 0$. Con $\lambda = 1, \mu = 0$ viene $x = 0$ (il piano $yz$); con $\lambda = 0, \mu = 1$ viene $y = 0$ (il piano $xz$); con $\lambda = 1, \mu = -1$ viene $x - y = 0$, il piano verticale che taglia a metà l'angolo fra i due. Nessuno contiene $z$: sono tutti piani verticali, come deve essere per contenere l'asse $z$.
2. $r : \{x - y = 0,\ z - 1 = 0\}$. Fascio: $\lambda(x - y) + \mu(z - 1) = 0$. Quale piano del fascio passa per $(1, 0, 0)$? Sostituisco: $\lambda(1 - 0) + \mu(0 - 1) = \lambda - \mu = 0$, quindi $\mu = \lambda$. Con $\lambda = \mu = 1$: $x - y + z - 1 = 0$. Controllo con $(1, 0, 0)$: $1 - 0 + 0 - 1 = 0$; con due punti di $r$, $(0, 0, 1)$ e $(1, 1, 1)$: $0 - 0 + 1 - 1 = 0$ e $1 - 1 + 1 - 1 = 0$.

**Controesempio.** Il piano $z = 0$ non sta nel fascio dell'asse $z$: per nessuna coppia $\lambda x + \mu y$ diventa $z$, perché $\lambda x + \mu y$ non contiene $z$. Ed è giusto così: $z = 0$ non contiene l'asse $z$ (il punto $(0, 0, 1)$ è sull'asse ma non sul piano).

## Enunciati

### Equazione cartesiana dal punto e dalla normale

> [!abstract] Piano per $P$ ortogonale a $\vec{n}$
> Siano $P = (x_P, y_P, z_P)$ e $\vec{n} = (a, b, c) \neq \vec{0}$. Il piano per $P$ ortogonale a $\vec{n}$ ha equazione
> $$
> a(x - x_P) + b(y - y_P) + c(z - z_P) = 0
> $$
> cioè $ax + by + cz + d = 0$ con $d = -(a x_P + b y_P + c z_P)$.

(<span class="src">15/9, p. 10</span>.)

> [!note]- Dimostrazione (quella della prof, da riprodurre)
> 1. Per definizione $Q = (x, y, z)$ sta sul piano se e solo se $\overrightarrow{PQ} \cdot \vec{n} = 0$ (la condizione $(*)$ della prof).
> 2. Le coordinate di un vettore sono "fine meno inizio": $\overrightarrow{PQ} = (x - x_P,\ y - y_P,\ z - z_P)$.
> 3. Il prodotto scalare in coordinate è la somma dei prodotti delle componenti ([Vettori geometrici](/uni/gal/vettori-geometrici/)):
> $$
> \overrightarrow{PQ} \cdot \vec{n} = a(x - x_P) + b(y - y_P) + c(z - z_P)
> $$
> 4. Quindi $(*)$ diventa $a(x - x_P) + b(y - y_P) + c(z - z_P) = 0$.
> 5. Sviluppo i prodotti: $ax + by + cz - a x_P - b y_P - c z_P = 0$.
> 6. $a x_P$, $b y_P$, $c z_P$ sono numeri fissi (non dipendono da $Q$): li raccolgo in $d := -(a x_P + b y_P + c z_P)$ e resta $ax + by + cz + d = 0$.
> 7. Ogni passaggio è un "se e solo se" (riscrivo la stessa quantità), quindi l'equazione è soddisfatta da **tutti e soli** i punti del piano. $\blacksquare$

La conseguenza da ricordare: **i coefficienti di $x$, $y$, $z$ sono le coordinate di un vettore normale**. Lo si legge al volo dall'equazione: $2x - 3y - z - 3 = 0$ ha normale $(2, -3, -1)$.

**Il viceversa.** Ogni equazione $ax + by + cz + d = 0$ con $(a, b, c) \neq (0, 0, 0)$ è un piano, con normale $(a, b, c)$. A lezione la prof lo usa senza dimostrarlo; la dimostrazione è qui per capire.

> [!note]- Dimostrazione del viceversa (da leggere)
> 1. Uno fra $a, b, c$ è $\neq 0$; diciamo $a \neq 0$ (gli altri casi sono uguali, cambiando variabile).
> 2. Il punto $P = \left(-\frac{d}{a}, 0, 0\right)$ soddisfa l'equazione: $a \cdot \left(-\frac{d}{a}\right) + 0 + 0 + d = -d + d = 0$.
> 3. Allora $d = -a x_P - b \cdot 0 - c \cdot 0 = -(a x_P + b y_P + c z_P)$, e l'equazione si riscrive $a(x - x_P) + b(y - y_P) + c(z - z_P) = 0$.
> 4. Per i passaggi 3-6 della dimostrazione sopra, letti all'indietro, questa è $\overrightarrow{PQ} \cdot (a, b, c) = 0$: il piano per $P$ con normale $(a, b, c)$. $\blacksquare$

**Perché nel controesempio sopra usciva lo stesso numero.** Per un punto $Q$ qualunque, $ax_Q + by_Q + cz_Q + d$ è proprio $\overrightarrow{PQ} \cdot \vec{n}$ (passaggi 3-6). Per questo sostituire un punto nell'equazione cartesiana e calcolare $\overrightarrow{PQ} \cdot \vec{n}$ danno sempre lo stesso risultato.

**Esempi.**
1. (Dispensa) $P = (1, -1, 2)$, $\vec{n} = (2, -3, -1)$. $2(x - 1) - 3(y + 1) - 1(z - 2) = 0$; sviluppo: $2x - 2 - 3y - 3 - z + 2 = 0$; raccolgo i numeri, $-2 - 3 + 2 = -3$: $2x - 3y - z - 3 = 0$.
2. Piano per $P = (0, 2, -1)$ parallelo a $\pi : x + 4y - 2z + 7 = 0$. Due piani paralleli hanno la stessa direzione normale, quindi uso $\vec{n} = (1, 4, -2)$: $1(x - 0) + 4(y - 2) - 2(z + 1) = 0$, cioè $x + 4y - 8 - 2z - 2 = 0$, cioè $x + 4y - 2z - 10 = 0$. Controllo: $P$ dà $0 + 8 + 2 - 10 = 0$.

### Equazioni parametriche del piano e della retta

> [!abstract] Parametriche del piano per tre punti
> Siano $A$, $B$, $C$ distinti e non allineati, $\vec{v} = \overrightarrow{AB}$, $\vec{w} = \overrightarrow{AC}$. Il piano che li contiene è l'insieme dei $Q = (x, y, z)$ per cui esistono $t, s \in \mathbb{R}$ con
> $$
> x = x_A + t v_1 + s w_1, \quad y = y_A + t v_2 + s w_2, \quad z = z_A + t v_3 + s w_3
> $$

> [!note]- Dimostrazione (il ragionamento della prof, p. 10-11)
> 1. Un punto $Q$ sta sul piano se e solo se $\overrightarrow{AQ}$ si può scrivere come somma di un vettore diretto come $\vec{v}$ e di uno diretto come $\vec{w}$ (regola del parallelogramma nel piano di $A, B, C$).
> 2. Un vettore diretto come $\vec{v}$ è un multiplo $t\vec{v}$, uno diretto come $\vec{w}$ è un multiplo $s\vec{w}$. Quindi la condizione è $(**)$: $\exists\, t, s$ con $\overrightarrow{AQ} = t\vec{v} + s\vec{w}$.
> 3. In coordinate $\overrightarrow{AQ} = (x - x_A,\ y - y_A,\ z - z_A)$ e $t\vec{v} + s\vec{w} = (t v_1 + s w_1,\ t v_2 + s w_2,\ t v_3 + s w_3)$ (somma e prodotto per scalare componente per componente).
> 4. Due vettori sono uguali se e solo se hanno le stesse componenti, quindi $(**)$ diventa $x - x_A = t v_1 + s w_1$, $y - y_A = t v_2 + s w_2$, $z - z_A = t v_3 + s w_3$.
> 5. Porto $x_A, y_A, z_A$ a destra e ho le parametriche. $\blacksquare$
>
> "Non allineati" serve al passaggio 1: se $\vec{v}$ e $\vec{w}$ fossero paralleli, le loro combinazioni starebbero tutte su una retta.

> [!abstract] Parametriche della retta per due punti
> Siano $A \neq B$ e $\vec{v} = \overrightarrow{AB}$. La retta per $A$ e $B$ è l'insieme dei $Q = (x, y, z)$ per cui esiste $t \in \mathbb{R}$ con
> $$
> x = x_A + t v_1, \quad y = y_A + t v_2, \quad z = z_A + t v_3
> $$

> [!note]- Dimostrazione (prof, p. 12-13)
> 1. $Q \in r$ se e solo se $\overrightarrow{AQ}$ ha la stessa direzione di $\vec{v}$ (oppure $Q = A$).
> 2. "Stessa direzione di $\vec{v}$" vuol dire essere un multiplo di $\vec{v}$: $(***)$ $\exists\, t$ con $\overrightarrow{AQ} = t\vec{v}$. Il caso $Q = A$ è $t = 0$.
> 3. In coordinate: $(x - x_A,\ y - y_A,\ z - z_A) = (t v_1,\ t v_2,\ t v_3)$.
> 4. Componente per componente e porto a destra le coordinate di $A$. $\blacksquare$

### Fascio di piani

> [!abstract] Equazione del fascio
> Sia $r$ la retta di equazioni cartesiane
> $$
> \begin{cases} ax + by + cz + d = 0 \\ a'x + b'y + c'z + d' = 0 \end{cases}
> $$
> (due piani $\pi$ e $\pi'$ distinti, la cui intersezione è $r$). Il fascio di piani di sostegno $r$ ha equazione
> $$
> \lambda(ax + by + cz + d) + \mu(a'x + b'y + c'z + d') = 0
> $$
> e per ogni coppia di scalari $(\lambda, \mu) \neq (0, 0)$ si ottiene l'equazione di un piano che contiene $r$.

(<span class="src">15/9, p. 14</span>.) Sono due tesi: **(a)** l'equazione è davvero un piano, **(b)** il piano contiene $r$. La prof a lezione dà la (b) come evidente; il foglio 1 (domanda 1.6) la chiede con la sua giustificazione. Allo scritto si scrivono tutte e due.

> [!note]- Dimostrazione (da riprodurre allo scritto)
> Scrivo per brevità $f(x, y, z) = ax + by + cz + d$ e $g(x, y, z) = a'x + b'y + c'z + d'$, così $\pi : f = 0$, $\pi' : g = 0$ e il fascio è $\lambda f + \mu g = 0$.
>
> **(b) Ogni equazione del fascio è soddisfatta dai punti di $r$.**
> 1. Sia $Q \in r$. Allora $Q \in \pi$ e $Q \in \pi'$, cioè $f(Q) = 0$ e $g(Q) = 0$.
> 2. Sostituisco $Q$ nel fascio: $\lambda f(Q) + \mu g(Q) = \lambda \cdot 0 + \mu \cdot 0 = 0$.
> 3. Questo vale per ogni $\lambda$ e $\mu$: $Q$ soddisfa ogni equazione del fascio.
>
> **(a) Con $(\lambda, \mu) \neq (0, 0)$ l'equazione è un piano.**
> 4. Raccolgo le variabili: $\lambda f + \mu g = (\lambda a + \mu a')x + (\lambda b + \mu b')y + (\lambda c + \mu c')z + (\lambda d + \mu d')$. È un piano se i tre coefficienti non sono tutti nulli, cioè se $\lambda\vec{n} + \mu\vec{n}' \neq \vec{0}$, con $\vec{n} = (a, b, c)$ e $\vec{n}' = (a', b', c')$.
> 5. Per assurdo $\lambda\vec{n} + \mu\vec{n}' = \vec{0}$. Se $\lambda = 0$, allora $\mu \neq 0$ e $\mu\vec{n}' = \vec{0}$ dà $\vec{n}' = \vec{0}$: impossibile, $\vec{n}'$ è una normale. Quindi $\lambda \neq 0$, e allo stesso modo $\mu \neq 0$.
> 6. Allora $\vec{n} = k\vec{n}'$ con $k = -\frac{\mu}{\lambda} \neq 0$: $a = ka'$, $b = kb'$, $c = kc'$.
> 7. Prendo un punto $Q_0 = (x_0, y_0, z_0)$ di $r$ (esiste: $r$ è una retta). Da $f(Q_0) = 0$ e $g(Q_0) = 0$: $d = -(a x_0 + b y_0 + c z_0) = -k(a' x_0 + b' y_0 + c' z_0) = k d'$.
> 8. Quindi $f = k a' x + k b' y + k c' z + k d' = k \cdot g$: le equazioni di $\pi$ e $\pi'$ sono una multipla dell'altra, e $\pi = \pi'$. Contraddice l'ipotesi che i due piani siano distinti.
> 9. Quindi $\lambda\vec{n} + \mu\vec{n}' \neq \vec{0}$ e l'equazione è un piano; per (b) contiene $r$. $\blacksquare$
>
> **Dove servono le ipotesi.** $(\lambda, \mu) \neq (0, 0)$ al passaggio 5 (con $\lambda = \mu = 0$ l'equazione è $0 = 0$). "Piani distinti" al passaggio 8. "La cui intersezione è $r$" al passaggio 7 (serve un punto comune).

**Perché $(\lambda, \mu) \neq (0, 0)$.** Con $\lambda = \mu = 0$ l'equazione diventa $0 = 0$, vera per tutti i punti dello spazio: non è un piano.

**Perché i due piani devono essere distinti** (controesempio). Se per sbaglio scrivo la retta come $\{x + y - 1 = 0,\ 2x + 2y - 2 = 0\}$ (stesso piano due volte), con $\lambda = 2$, $\mu = -1$ il "fascio" dà $2x + 2y - 2 - 2x - 2y + 2 = 0$, cioè $0 = 0$: tutto lo spazio. Il passaggio 8 della dimostrazione è proprio questo caso.

**Coppie proporzionali danno lo stesso piano.** $(\lambda, \mu)$ e $(k\lambda, k\mu)$ con $k \neq 0$ danno equazioni una multipla dell'altra, quindi lo stesso piano. Nell'esempio della prof, $(1, -2)$ e $(2, -4)$: $2(x + y - 1) - 4(y + 2z - 4) = 2x - 2y - 8z + 14 = 2(x - y - 4z + 7)$. Conta solo il **rapporto** fra $\lambda$ e $\mu$, ed è per questo che si fissa uno dei due (la prof pone $\lambda = 1$) e si ricava l'altro.

**Il fascio li prende tutti.** Vale anche il contrario: **ogni** piano che contiene $r$ è della forma $\lambda f + \mu g = 0$ per qualche $(\lambda, \mu) \neq (0, 0)$. È questo che fa funzionare il metodo (il piano cercato è sicuramente nel fascio). La prof lo dice con "il fascio è descritto come segue", senza dimostrarlo: va saputo enunciare.

> [!note]- Dimostrazione che ogni piano per $r$ sta nel fascio (da leggere)
> 1. Sia $\sigma$ un piano che contiene $r$. Prendo un punto $Q \in \sigma$ che non sta su $r$ (esiste: un piano non è una retta).
> 2. Siano $\alpha = f(Q)$ e $\beta = g(Q)$. Non sono entrambi $0$, altrimenti $Q$ starebbe su $\pi$ e su $\pi'$, cioè su $r$.
> 3. Pongo $\lambda = \beta$, $\mu = -\alpha$: $(\lambda, \mu) \neq (0, 0)$, quindi $\sigma' : \beta f - \alpha g = 0$ è un piano del fascio. In $Q$ vale $\beta\alpha - \alpha\beta = 0$: $\sigma'$ passa per $Q$.
> 4. Prendo due punti distinti $A, B$ di $r$. $A$, $B$, $Q$ non sono allineati ($Q \notin r$, e $r$ è l'unica retta per $A$ e $B$).
> 5. $\sigma$ e $\sigma'$ contengono entrambi $A$, $B$, $Q$. Per tre punti non allineati passa un solo piano (prof, p. 10), quindi $\sigma = \sigma'$. $\blacksquare$

## Metodo

### Piano per un punto con normale data

*Come lo riconosco*: il testo dà un punto e una direzione ortogonale al piano (una normale, oppure "ortogonale alla retta $s$", oppure "parallelo al piano $\pi$").

1. Scrivi $ax + by + cz + d = 0$ mettendo le coordinate di $\vec{n}$ al posto di $a, b, c$.
2. Sostituisci le coordinate di $P$ e ricava $d$.
3. **Verifica**: $P$ soddisfa l'equazione.

Dove si prende $\vec{n}$:
- "ortogonale alla retta $s$": $\vec{n}$ = direzionale di $s$ (il piano è attraversato da $s$ ad angolo retto);
- "parallelo al piano $\pi$": $\vec{n}$ = normale di $\pi$.

Esempio (dispensa): $P = (1, -1, 2)$, $\vec{n} = (2, -3, -1)$. Da $2x - 3y - z + d = 0$ e $2(1) - 3(-1) - 2 + d = 0$ viene $3 + d = 0$, $d = -3$. Piano: $2x - 3y - z - 3 = 0$.

### Piano per tre punti

*Come lo riconosco*: tre punti, o una retta e un punto dati come punti (due sulla retta, uno fuori).

1. Calcola $\vec{v} = \overrightarrow{AB}$ e $\vec{w} = \overrightarrow{AC}$ (fine meno inizio).
2. Controlla che non siano proporzionali: altrimenti i punti sono allineati e il piano non è unico.
3. Scrivi le parametriche partendo da $A$.
4. Per la cartesiana elimina $t$ e $s$: ricava i parametri da due equazioni e sostituiscili nella terza.
5. **Verifica**: i tre punti devono soddisfare la cartesiana, e la normale $(a, b, c)$ deve avere prodotto scalare nullo con $\vec{v}$ e con $\vec{w}$.

L'esempio della prof ($A(0,0,1)$, $B(-2,-1,0)$, $C(1,0,0)$) è in Esempi svolti a lezione.

**Eliminare i parametri senza perdersi.** Cerca un'equazione in cui compare un parametro solo (spesso c'è: nell'esempio della prof $y = -t$). Ricavalo e sostituiscilo nelle altre due: restano due equazioni con un parametro solo. Ripeti. Se ogni equazione contiene tutti e due i parametri, ricava $t$ da una (in funzione di $s$, $x$, $y$, $z$), sostituisci, e poi ricava $s$.

### Retta per due punti

*Come lo riconosco*: due punti, oppure un punto e una direzione (in quel caso il passo 1 è già fatto).

1. $\vec{v} = \overrightarrow{AB}$.
2. Parametriche: $x = x_A + t v_1$, $y = y_A + t v_2$, $z = z_A + t v_3$.
3. Cartesiane: ricava $t$ dall'equazione più semplice e sostituisci nelle altre due. Restano due equazioni senza $t$.
4. **Verifica**: $A$ e $B$ devono soddisfare entrambe le cartesiane.

Se una componente di $\vec{v}$ è $0$, quella coordinata è costante e dà subito un'equazione cartesiana: $x = 2 + 0t$ vuol dire $x - 2 = 0$.

### Da cartesiane a parametriche

È il passaggio inverso, e il metodo del corso è sempre lo stesso: **poni una delle variabili uguale al parametro** ($y = t$, oppure $z = t$, oppure $x = s$) e ricava le altre due dal sistema. I coefficienti di $t$ danno il vettore direzionale, i termini noti un punto della retta.

Scegli come parametro una variabile che compare in entrambe le equazioni, così ricavi le altre due senza passaggi in più. Se una variabile manca del tutto dalle cartesiane (per esempio $\{z = 4,\ x + y + 2 = 0\}$) non la puoi usare come parametro, perché è già fissata: lì il parametro va messo su $x$ o su $y$.

Il risultato non è unico: parametri diversi danno parametriche diverse della stessa retta (esempio del tutor sotto).

Per un piano è lo stesso con **due** variabili libere: ricavi una variabile dall'unica equazione e poni le altre due uguali a $t$ e $s$ (esempio 3 di Equazioni parametriche del piano).

### Piano che contiene una retta e un punto fuori

*Come lo riconosco*: "il piano che contiene $r$ e passa per $P$". *Perché il fascio*: il piano cercato è uno dei piani per $r$, quindi è nel fascio, e la condizione "passa per $P$" lo sceglie.

0. Se $r$ è in parametriche, passa prima alle cartesiane (il fascio si scrive con le cartesiane).
1. Scrivi il fascio $\lambda(\dots) + \mu(\dots) = 0$ con le due cartesiane di $r$.
2. Sostituisci le coordinate di $P$: viene una relazione lineare fra $\lambda$ e $\mu$.
3. Dai un valore non nullo a uno dei due (la prof pone $\lambda = 1$) e ricava l'altro.
4. Rimetti $\lambda$ e $\mu$ nel fascio e semplifica.
5. **Verifica**: $P$ e due punti di $r$ devono soddisfare l'equazione.

Prima controlla che $P$ non stia su $r$: se ci sta, al punto 2 esce $0 = 0$ e ogni piano del fascio va bene, quindi il piano non è determinato. Se al punto 2 esce una relazione come $\lambda = 0$, allora non puoi porre $\lambda = 1$: poni $\mu = 1$, e il piano cercato è il secondo dei due piani di partenza.

### Piano del fascio con una condizione di direzione

*Come lo riconosco*: "il piano che contiene $r$ ed è parallelo alla retta $s$" (o "all'asse $z$", o "alla direzione $\vec{w}$"). *Perché funziona*: un piano è parallelo a una direzione $\vec{w}$ quando $\vec{w}$ sta "dentro" il piano, cioè è ortogonale alla normale: $\vec{n} \cdot \vec{w} = 0$ (lo si rivede in [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/)).

1. Scrivi il fascio e raccogli $x$, $y$, $z$: la normale del piano generico è $(\lambda a + \mu a',\ \lambda b + \mu b',\ \lambda c + \mu c')$.
2. Imponi $\vec{n} \cdot \vec{w} = 0$: viene una relazione lineare fra $\lambda$ e $\mu$.
3. Come nel metodo precedente: valore non nullo a uno dei due, ricava l'altro, sostituisci.
4. **Verifica**: due punti di $r$ nel piano, e $\vec{n} \cdot \vec{w} = 0$.

"Parallelo all'asse $z$" vuol dire $\vec{w} = (0, 0, 1)$, cioè coefficiente di $z$ nullo. Se al passo 2 esce $0 = 0$, $\vec{w}$ è parallela a $r$ e tutti i piani del fascio vanno bene.

### Stabilire se un piano contiene una retta

Due strade, entrambe viste nell'esercitazione del tutor.

- **Sistema.** Metti a sistema le due cartesiane di $r$ con l'equazione del piano. Se il sistema ha infinite soluzioni che formano tutta $r$ (la terza equazione non aggiunge vincoli), il piano contiene $r$. Se ha una sola soluzione, il piano taglia $r$ in un punto. Se non ne ha, piano e retta sono paralleli e disgiunti.
- **Due punti.** Prendi due punti distinti di $r$ e sostituiscili nel piano. Se entrambi lo soddisfano il piano contiene $r$, perché per due punti passa una sola retta.

Con $r$ in parametriche c'è una terza strada, la più veloce: **sostituisci il punto generico** $(x_A + t v_1, \dots)$ nell'equazione del piano. Viene un'equazione in $t$:
- un'identità $0 = 0$: vale per ogni $t$, il piano contiene $r$;
- una sola soluzione $t_0$: un punto d'intersezione, quello con $t = t_0$;
- un'equazione impossibile (come $-2 = 0$): nessun punto in comune.

### Retta per un punto ortogonale a un piano

*Come lo riconosco*: "la retta per $P$ perpendicolare a $\pi$". Il direzionale è la **normale** del piano: è l'unica direzione che attraversa il piano ad angolo retto.

1. $\vec{v} = \vec{n}$, letta dall'equazione di $\pi$.
2. Parametriche da $P$; se servono, cartesiane eliminando $t$.

Attenzione al ribaltamento: per la retta ortogonale a un piano la normale **diventa** il direzionale; per il piano ortogonale a una retta il direzionale **diventa** la normale.

### Proiezione ortogonale di un punto su un piano

1. Scrivi la retta per il punto con **vettore direzionale uguale alla normale** del piano.
2. Intersecala col piano: sostituisci le parametriche nell'equazione cartesiana e ricava $t$.
3. Il punto trovato $H$ è la proiezione. **Verifica**: $H$ sta sul piano e $\overrightarrow{PH}$ è proporzionale a $\vec{n}$.

## Esempi svolti a lezione

> [!example]- Prof, L2, appunti p. 11-12: piano per $A(0, 0, 1)$, $B(-2, -1, 0)$, $C(1, 0, 0)$
> (<span class="src">15/9, p. 11</span>.)
>
> **Vettori.**
> $$
> \vec{v} = \overrightarrow{AB} = (-2 - 0,\ -1 - 0,\ 0 - 1) = (-2, -1, -1)
> $$
> $$
> \vec{w} = \overrightarrow{AC} = (1 - 0,\ 0 - 0,\ 0 - 1) = (1, 0, -1)
> $$
> Non sono proporzionali: $\vec{w}$ ha seconda componente $0$, $\vec{v}$ no. I punti non sono allineati.
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
> (<span class="src">15/9, p. 13</span>; <span class="src">22/9, p. 1</span>.) La prof l'ha lasciato come esercizio, il tutor l'ha svolto in esercitazione.
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
> <figure class="fig"><svg role="img" aria-label="due parametrizzazioni della stessa retta" xmlns:xlink="http://www.w3.org/1999/xlink" width="261.313811pt" height="177.84pt" viewBox="0 0 261.313811 177.84" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="feda64e-figure_1"> <g id="feda64e-patch_1"> <path d="M 0 177.84 L 261.313811 177.84 L 261.313811 -0 L 0 -0 L 0 177.84 z " style="fill: none"/> </g> <g id="feda64e-axes_1"> <g id="feda64e-line2d_1"> <path d="M 24.588679 97.51843 L 236.725132 29.634765 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="feda64e-line2d_2"> <path d="M 45.751552 93.382207 L 44.221279 88.600103 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_3"> <path d="M 86.547023 80.327656 L 85.01675 75.545552 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_4"> <path d="M 127.342495 67.273105 L 125.812222 62.491001 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_5"> <path d="M 168.137967 54.218554 L 166.607694 49.43645 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_6"> <path d="M 208.933438 41.164003 L 207.403165 36.381899 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_7"> <path d="M 45.751552 93.382207 L 44.221279 88.600103 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_8"> <path d="M 86.547023 80.327656 L 85.01675 75.545552 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_9"> <path d="M 127.342495 67.273105 L 125.812222 62.491001 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_10"> <path d="M 168.137967 54.218554 L 166.607694 49.43645 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-line2d_11"> <path d="M 208.933438 41.164003 L 207.403165 36.381899 " clip-path="url(#feda64e-pe9bd51bade)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: square"/> </g> <g id="feda64e-text_1"> <!-- $t=$$-\frac{1}{2}$ --> <g style="fill: var(--fig-steel)" transform="translate(26.3933 82.731421) scale(0.1 -0.1)"> <defs> <path id="feda64e-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="feda64e-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="feda64e-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="feda64e-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="feda64e-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-Italic-57" transform="translate(0 0.671875)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(59.150391 0.671875)"/> <use xlink:href="#feda64e-DejaVuSerif-8cf" transform="translate(161.904297 0.671875)"/> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(251.943359 35.046875) scale(0.7)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(251.943359 -35.65625) scale(0.7)"/> <path d="M 251.943359 22.546875 L 251.943359 28.796875 L 296.479492 28.796875 L 296.479492 22.546875 L 251.943359 22.546875 z "/> </g> </g> <g id="feda64e-text_2"> <!-- $t=$$0$ --> <g style="fill: var(--fig-steel)" transform="translate(71.038772 69.774527) scale(0.1 -0.1)"> <defs> <path id="feda64e-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-Italic-57" transform="translate(0 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(59.150391 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-13" transform="translate(161.904297 0.78125)"/> </g> </g> <g id="feda64e-text_3"> <!-- $t=$$\frac{1}{2}$ --> <g style="fill: var(--fig-steel)" transform="translate(112.184244 56.62232) scale(0.1 -0.1)"> <use xlink:href="#feda64e-DejaVuSerif-Italic-57" transform="translate(0 0.671875)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(59.150391 0.671875)"/> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(168.154297 35.046875) scale(0.7)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(168.154297 -35.65625) scale(0.7)"/> <path d="M 168.154297 22.546875 L 168.154297 28.796875 L 212.69043 28.796875 L 212.69043 22.546875 L 168.154297 22.546875 z "/> </g> </g> <g id="feda64e-text_4"> <!-- $t=$$1$ --> <g style="fill: var(--fig-steel)" transform="translate(152.629716 43.665425) scale(0.1 -0.1)"> <use xlink:href="#feda64e-DejaVuSerif-Italic-57" transform="translate(0 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(59.150391 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(161.904297 0.78125)"/> </g> </g> <g id="feda64e-text_5"> <!-- $t=$$\frac{3}{2}$ --> <g style="fill: var(--fig-steel)" transform="translate(193.775187 30.563218) scale(0.1 -0.1)"> <defs> <path id="feda64e-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-Italic-57" transform="translate(0 0.676563)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(59.150391 0.676563)"/> <use xlink:href="#feda64e-DejaVuSerif-16" transform="translate(168.154297 36.046875) scale(0.7)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(168.154297 -35.651562) scale(0.7)"/> <path d="M 168.154297 22.551563 L 168.154297 28.801563 L 212.69043 28.801563 L 212.69043 22.551563 L 168.154297 22.551563 z "/> </g> </g> <g id="feda64e-text_6"> <!-- $s=-2$ --> <g style="fill: var(--fig-accent)" transform="translate(32.37953 104.348544) scale(0.1 -0.1)"> <defs> <path id="feda64e-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-Italic-56" transform="translate(0 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(70.283203 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-8cf" transform="translate(173.037109 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(256.826172 0.78125)"/> </g> </g> <g id="feda64e-text_7"> <!-- $s=-1$ --> <g style="fill: var(--fig-accent)" transform="translate(73.175001 91.293993) scale(0.1 -0.1)"> <use xlink:href="#feda64e-DejaVuSerif-Italic-56" transform="translate(0 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(70.283203 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-8cf" transform="translate(173.037109 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(256.826172 0.78125)"/> </g> </g> <g id="feda64e-text_8"> <!-- $s=0$ --> <g style="fill: var(--fig-accent)" transform="translate(118.170473 78.239442) scale(0.1 -0.1)"> <use xlink:href="#feda64e-DejaVuSerif-Italic-56" transform="translate(0 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(70.283203 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-13" transform="translate(173.037109 0.78125)"/> </g> </g> <g id="feda64e-text_9"> <!-- $s=1$ --> <g style="fill: var(--fig-accent)" transform="translate(158.965945 65.184891) scale(0.1 -0.1)"> <use xlink:href="#feda64e-DejaVuSerif-Italic-56" transform="translate(0 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(70.283203 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(173.037109 0.78125)"/> </g> </g> <g id="feda64e-text_10"> <!-- $s=2$ --> <g style="fill: var(--fig-accent)" transform="translate(199.761417 52.13034) scale(0.1 -0.1)"> <use xlink:href="#feda64e-DejaVuSerif-Italic-56" transform="translate(0 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(70.283203 0.78125)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(173.037109 0.78125)"/> </g> </g> <g id="feda64e-text_11"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(79.46783 57.777708) scale(0.13 -0.13)"> <defs> <path id="feda64e-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="feda64e-text_12"> <!-- $(0,1,\frac{3}{2})$ --> <g style="fill: var(--fig-ink)" transform="translate(104.988302 44.151204) scale(0.11 -0.11)"> <defs> <path id="feda64e-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="feda64e-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="feda64e-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-b" transform="translate(0 0.676563)"/> <use xlink:href="#feda64e-DejaVuSerif-13" transform="translate(39.013672 0.676563)"/> <use xlink:href="#feda64e-DejaVuSerif-f" transform="translate(102.636719 0.676563)"/> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(153.388672 0.676563)"/> <use xlink:href="#feda64e-DejaVuSerif-f" transform="translate(217.011719 0.676563)"/> <use xlink:href="#feda64e-DejaVuSerif-16" transform="translate(274.013672 36.046875) scale(0.7)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(274.013672 -35.651562) scale(0.7)"/> <use xlink:href="#feda64e-DejaVuSerif-c" transform="translate(324.799805 0.676563)"/> <path d="M 274.013672 22.551563 L 274.013672 28.801563 L 318.549805 28.801563 L 318.549805 22.551563 L 274.013672 22.551563 z "/> </g> </g> <g id="feda64e-text_13"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(160.993774 31.668606) scale(0.13 -0.13)"> <defs> <path id="feda64e-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="feda64e-patch_2"> <path d="M 85.781887 126.577358 Q 126.577358 113.522808 165.243145 101.149756 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 159.056198 100.189712 L 165.243145 101.149756 L 160.762942 105.523288 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="feda64e-text_14"> <!-- $\vec{v}=(2,-2,1)$ --> <g style="fill: var(--fig-steel)" transform="translate(117.915377 132.622085) scale(0.11 -0.11)"> <defs> <path id="feda64e-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="feda64e-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#feda64e-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-20" transform="translate(75.458984 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-b" transform="translate(178.212891 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(217.226562 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-f" transform="translate(280.849609 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-8cf" transform="translate(350.566406 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(453.320312 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-f" transform="translate(516.943359 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(567.695312 0.390625)"/> <use xlink:href="#feda64e-DejaVuSerif-c" transform="translate(631.318359 0.390625)"/> </g> </g> <g id="feda64e-patch_3"> <path d="M 85.781887 151.682264 Q 106.179623 145.154989 124.447673 139.309212 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 118.260726 138.349169 L 124.447673 139.309212 L 119.96747 143.682744 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="feda64e-text_15"> <!-- $\frac{1}{2}\vec{v}$ --> <g style="fill: var(--fig-accent)" transform="translate(107.754906 161.085064) scale(0.11 -0.11)"> <use xlink:href="#feda64e-DejaVuSerif-14" transform="translate(6.25 35.046875) scale(0.7)"/> <use xlink:href="#feda64e-DejaVuSerif-15" transform="translate(6.25 -35.65625) scale(0.7)"/> <use xlink:href="#feda64e-STIXGeneral-Regular-350" transform="translate(115.456543 10.28125)"/> <use xlink:href="#feda64e-DejaVuSerif-Italic-59" transform="translate(57.036133 0.671875)"/> <path d="M 6.25 22.546875 L 6.25 28.796875 L 50.786133 28.796875 L 50.786133 22.546875 L 6.25 22.546875 z "/> </g> </g> <g id="feda64e-text_16"> <!-- $r$ --> <g style="fill: var(--fig-axis)" transform="translate(241.450415 37.718888) scale(0.13 -0.13)"> <defs> <path id="feda64e-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#feda64e-DejaVuSerif-Italic-55" transform="translate(0 0.671875)"/> </g> </g> <g id="feda64e-line2d_12"> <defs> <path id="feda64e-mfa5d187bff" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#feda64e-pe9bd51bade)"> <use xlink:href="#feda64e-mfa5d187bff" x="85.781887" y="77.936604" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="feda64e-line2d_13"> <g clip-path="url(#feda64e-pe9bd51bade)"> <use xlink:href="#feda64e-mfa5d187bff" x="126.577358" y="64.882053" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="feda64e-line2d_14"> <g clip-path="url(#feda64e-pe9bd51bade)"> <use xlink:href="#feda64e-mfa5d187bff" x="167.37283" y="51.827502" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> </g> <defs> <clipPath id="feda64e-pe9bd51bade"> <rect x="5.76" y="5.76" width="249.793811" height="166.32"/> </clipPath> </defs> </svg></figure>
>
> Il legame preciso: lo stesso punto ha $t = \frac{1}{2} + \frac{1}{2}s$. Per $s = -1$ si è in $A$ ($t = 0$), per $s = 1$ in $B$ ($t = 1$).
>
> Nota: sommando le due cartesiane si ottiene $x + y - 1 = 0$, un altro piano che contiene la stessa retta. La retta dell'esempio del fascio qui sotto, $\{x + y - 1 = 0,\ y + 2z - 4 = 0\}$, è proprio questa.

> [!example]- Prof, L2, appunti p. 14-15: piano per $r : \{x + y - 1 = 0,\ y + 2z - 4 = 0\}$ e $P(0, -1, 2)$
> (<span class="src">15/9, p. 14-15</span>.)
>
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
> (x + y - 1) - 2(y + 2z - 4) = 0
> $$
> Sviluppo: $x + y - 1 - 2y - 4z + 8 = 0$; raccolgo $y$ ($y - 2y = -y$) e i numeri ($-1 + 8 = 7$):
> $$
> x - y - 4z + 7 = 0
> $$
>
> **Verifica.** $P$: $0 + 1 - 8 + 7 = 0$. Due punti di $r$ sono $(-1, 2, 1)$ e $(1, 0, 2)$ (dall'esempio sopra): $-1 - 2 - 4 + 7 = 0$ e $1 - 0 - 8 + 7 = 0$.

> [!example]- Tutor, esercitazione 1, es. 5: tre piani, un fascio e una proiezione
> (<span class="src">22/9, p. 5-6</span>.) $\pi_1 : z - 4 = 0$, $\pi_2 : x + y + 2 = 0$, $\pi_3 : 4x + 4y - z + 12 = 0$, e $r = \pi_1 \cap \pi_2$.
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

> [!example]- Tutor, esercitazione 1, es. 6 (prima parte): piano per $C(-1, 0, 0)$ ortogonale a $r : \{x - y = 0,\ y - z - 1 = 0\}$
> (<span class="src">22/9, p. 7</span>.) Il resto dell'esercizio (la distanza da una seconda retta) è in [Distanze nello spazio](/uni/gal/distanze-nello-spazio/).
>
> **Direzionale di $r$.** Pongo $z = t$ (compare nella seconda equazione). Dalla seconda $y = 1 + t$, dalla prima $x = y = 1 + t$:
> $$
> r : \begin{cases} x = 1 + t \\ y = 1 + t \\ z = t \end{cases} \qquad \vec{v} = (1, 1, 1)
> $$
> **Piano.** Ortogonale a $r$ vuol dire normale $= \vec{v}$: $x + y + z + d = 0$. Passaggio per $C$: $-1 + 0 + 0 + d = 0$, $d = 1$:
> $$
> \pi : x + y + z + 1 = 0
> $$
> **$P = r \cap \pi$** (il tutor lo usa dopo). Sostituisco il punto generico: $(1 + t) + (1 + t) + t + 1 = 3t + 3 = 0$, quindi $t = -1$ e $P = (0, 0, -1)$.
>
> **Verifica.** $P \in \pi$: $0 + 0 - 1 + 1 = 0$. $P \in r$: $0 - 0 = 0$ e $0 + 1 - 1 = 0$.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Rette e piani nello spazio (esercizi)](/uni/gal/rette-e-piani-nello-spazio-esercizi/).

## Errori tipici

- Scrivere una retta nello spazio con una sola equazione cartesiana: quella è un piano.
- Leggere la normale da un'equazione non ancora portata nella forma $ax + by + cz + d = 0$: $y + z = -2$ ha normale $(0, 1, 1)$, e $x$ ha coefficiente $0$, non manca.
- Nel fascio porre $\lambda = \mu = 0$, oppure dimenticare di controllare che il punto non stia già sulla retta.
- Nel fascio porre $\lambda = 1$ quando la condizione dà $\lambda = 0$ (esercizio 8 b): si pone $\mu = 1$ e il piano è il secondo di partenza.
- Scrivere il fascio con le parametriche di $r$: il fascio vuole le due equazioni cartesiane.
- Concludere che un punto sta sulla retta perché due coordinate su tre tornano con lo stesso $t$.
- Pensare di aver sbagliato perché le proprie parametriche o la propria cartesiana sono diverse da quelle del tutor: prima controlla se una è multipla dell'altra o se descrivono gli stessi punti.
- Per il piano per tre punti, non controllare che non siano allineati.
- Usare come parametro una variabile che le cartesiane fissano ($z = 4$): non è libera.
- Scambiare normale e direzionale: retta ortogonale a un piano ha direzionale $= \vec{n}$; piano ortogonale a una retta ha normale $= \vec{v}$; retta parallela a un piano ha $\vec{n} \cdot \vec{v} = 0$.
- Scrivere due equazioni che non fanno una retta (piani paralleli o coincidenti) e usarle nel fascio.
- Usare il prodotto vettoriale per la normale: non è nel programma, la prof vuole il fascio o i prodotti scalari nulli.

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

- Definisci il vettore normale a un piano. Perché deve essere diverso da $\vec{0}$, ed è unico?

- Enuncia e dimostra: il piano per $P = (x_P, y_P, z_P)$ ortogonale a $\vec{n} = (a, b, c)$ ha equazione $ax + by + cz + d = 0$. Quanto vale $d$?

- Enuncia il viceversa: quando un'equazione $ax + by + cz + d = 0$ descrive un piano? Cosa descrive se $a = b = c = 0$?

- Enuncia e dimostra le equazioni parametriche del piano per tre punti $A$, $B$, $C$ non allineati.

- Enuncia e dimostra le equazioni parametriche della retta per due punti distinti $A$ e $B$. Perché servono distinti?

- Enuncia e dimostra: se $r$ è l'intersezione dei piani distinti $f = 0$ e $g = 0$, per ogni $(\lambda, \mu) \neq (0, 0)$ l'equazione $\lambda f + \mu g = 0$ è un piano che contiene $r$. Dove usi che i piani sono distinti?

- Enuncia il risultato che garantisce che il piano cercato col metodo del fascio è davvero nel fascio.

- Perché due coppie $(\lambda, \mu)$ proporzionali danno lo stesso piano, e cosa se ne ricava nel metodo?

- Cosa dice di un piano il fatto che nella sua equazione manchi la $z$? E che sia $d = 0$?

- Dai un esempio di due equazioni cartesiane che non descrivono una retta.

- Come stabilisci se un punto sta su una retta data in parametriche?

- Come passi dalle cartesiane di una retta alle parametriche? Quale variabile non puoi scegliere come parametro?

- Come stabilisci se una retta in parametriche è contenuta in un piano, lo taglia in un punto o gli è parallela?

- Nel metodo del fascio, quando non puoi porre $\lambda = 1$, e cosa fai in quel caso?

- Come trovi il piano che contiene una retta $r$ ed è parallelo a una retta $s$ (o a un asse)?

- Retta per $P$ ortogonale a un piano, piano per $P$ ortogonale a una retta: da dove prendi il vettore che ti serve in ciascun caso?

- Come trovi la retta per un punto $P$ parallela a due piani dati?

- Come trovi la proiezione ortogonale di un punto su un piano, e come la verifichi?

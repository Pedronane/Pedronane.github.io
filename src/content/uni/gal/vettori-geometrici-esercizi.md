---
title: Vettori geometrici (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-16
lezioni: []
ordine: 0
---

Esercizi tipo esame di [Vettori geometrici](/uni/gal/vettori-geometrici/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

In ordine di difficoltà. Gli esercizi 1-7 sono conti, come il primo passo degli esercizi del foglio 1; 8-10 sono teoria sul modello delle domande 1.1-1.7.

**Esercizio 1 (facile).** Sia $\vec{v} = (2, -1, 2)$. Trova i versori paralleli a $\vec{v}$. Poi trova $k \in \mathbb{R}$ tale che $(1, k, 2)$ sia ortogonale a $(3, -1, k)$.

> [!tip]- Indizio
> "Parallelo" fissa la direzione ma non il verso. Ortogonali vuol dire prodotto scalare zero.

> [!example]- Soluzione
> *Come lo riconosco*: "versore parallelo" è una normalizzazione; "ortogonale" con un parametro è un'equazione nel parametro.
>
> **Versori.** $|\vec{v}| = \sqrt{4 + 1 + 4} = 3$. La normalizzazione è $\frac{\vec{v}}{|\vec{v}|} = \left(\frac{2}{3}, -\frac{1}{3}, \frac{2}{3}\right)$. "Parallelo" non fissa il verso, quindi c'è anche l'opposto $\left(-\frac{2}{3}, \frac{1}{3}, -\frac{2}{3}\right)$. Sono due. Controllo: $\frac{4}{9} + \frac{1}{9} + \frac{4}{9} = 1$.
>
> **Ortogonalità.** Impongo il prodotto scalare nullo:
> $$
> (1, k, 2) \cdot (3, -1, k) = 3 - k + 2k = 3 + k = 0 \quad\Longrightarrow\quad k = -3
> $$
> Verifica: $(1, -3, 2) \cdot (3, -1, -3) = 3 + 3 - 6 = 0$. Per $k = -3$ nessuno dei due vettori è nullo, quindi sono davvero perpendicolari.

**Esercizio 2 (facile).** Siano $A = (1, 0, 0)$, $B = (3, 1, 0)$, $C = (4, 3, 1)$. Trova il punto $D$ tale che $ABCD$ (vertici in quest'ordine) sia un parallelogramma.

> [!tip]- Indizio
> In un parallelogramma $ABCD$ i lati opposti $\overrightarrow{AD}$ e $\overrightarrow{BC}$ rappresentano lo stesso vettore.

> [!example]- Soluzione
> *Come lo riconosco*: un parallelogramma è una condizione di **equivalenza** fra segmenti orientati. *Perché questo metodo*: se $\overrightarrow{AD} = \overrightarrow{BC}$ come vettori, $D$ si trova partendo da $A$ e facendo lo spostamento $\overrightarrow{BC}$.
>
> 1. $\overrightarrow{BC} = (4-3,\ 3-1,\ 1-0) = (1, 2, 1)$.
> 2. Cerco $D = (x, y, z)$ con $\overrightarrow{AD} = \overrightarrow{BC}$: $(x - 1,\ y - 0,\ z - 0) = (1, 2, 1)$.
> 3. Coordinata per coordinata: $x - 1 = 1$, $y = 2$, $z = 1$. Quindi $D = (2, 2, 1)$.
>
> **Controllo** con l'altra coppia di lati opposti: $\overrightarrow{AB} = (2, 1, 0)$ e $\overrightarrow{DC} = (4-2,\ 3-2,\ 1-1) = (2, 1, 0)$. Uguali: è un parallelogramma.
>
> Attenzione all'ordine dei vertici: con $ABDC$ il quarto vertice sarebbe un altro, $D = C + \overrightarrow{AB} = (6, 4, 1)$.

**Esercizio 3 (facile-medio).** Siano $A = (1, 0, 2)$, $B = (3, -1, 4)$, $C = (3, 2, 1)$.

- a) Calcola $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{BC}$ e i loro moduli.
- b) Il triangolo $ABC$ è rettangolo in $A$?
- c) Trova l'angolo del triangolo nel vertice $B$.

> [!example]- Soluzione
> *Come lo riconosco*: lati di un triangolo dati da punti, quindi vettori fine meno inizio; "rettangolo" e "angolo" sono prodotti scalari.
>
> **a)** Fine meno inizio:
> $$
> \overrightarrow{AB} = (3-1,\ -1-0,\ 4-2) = (2, -1, 2) \qquad \overrightarrow{AC} = (3-1,\ 2-0,\ 1-2) = (2, 2, -1)
> $$
> $$
> \overrightarrow{BC} = (3-3,\ 2-(-1),\ 1-4) = (0, 3, -3)
> $$
> Moduli: $|\overrightarrow{AB}| = \sqrt{4+1+4} = 3$, $|\overrightarrow{AC}| = \sqrt{4+4+1} = 3$, $|\overrightarrow{BC}| = \sqrt{0+9+9} = 3\sqrt{2}$.
>
> **b)** È rettangolo in $A$ se $\overrightarrow{AB} \perp \overrightarrow{AC}$. Sono non nulli, quindi basta il prodotto scalare:
> $$
> \overrightarrow{AB} \cdot \overrightarrow{AC} = 2 \cdot 2 + (-1) \cdot 2 + 2 \cdot (-1) = 4 - 2 - 2 = 0
> $$
> Sì, è rettangolo in $A$. Controllo con Pitagora: $3^2 + 3^2 = 18 = (3\sqrt{2})^2$.
>
> **c)** L'angolo in $B$ è fra i due lati che **partono** da $B$, cioè fra $\overrightarrow{BA}$ e $\overrightarrow{BC}$ (stesso estremo iniziale, come vuole la definizione). $\overrightarrow{BA} = -\overrightarrow{AB} = (-2, 1, -2)$.
> $$
> \cos\theta = \frac{\overrightarrow{BA} \cdot \overrightarrow{BC}}{|\overrightarrow{BA}|\,|\overrightarrow{BC}|} = \frac{0 + 3 + 6}{3 \cdot 3\sqrt{2}} = \frac{9}{9\sqrt{2}} = \frac{1}{\sqrt{2}} \quad\Longrightarrow\quad \theta = \frac{\pi}{4}
> $$
> Torna: il triangolo è rettangolo e isoscele ($|\overrightarrow{AB}| = |\overrightarrow{AC}|$), quindi gli altri due angoli valgono $\frac{\pi}{4}$. Usando $\overrightarrow{AB}$ al posto di $\overrightarrow{BA}$ sarebbe uscito $\frac{3\pi}{4}$, che è l'angolo esterno.

**Esercizio 4 (medio).** Siano $\vec{v} = (2, -1, 3)$ e $\vec{w} = (1, 1, -1)$. Calcola $pr_{\vec{w}}(\vec{v})$, di' se ha lo stesso verso di $\vec{w}$ e verifica che $\vec{v} - pr_{\vec{w}}(\vec{v})$ è ortogonale a $\vec{w}$.

> [!example]- Soluzione
> *Come lo riconosco*: proiezione su un vettore non unitario, formula col modulo al quadrato.
>
> **Ingredienti.** $\vec{v} \cdot \vec{w} = 2 - 1 - 3 = -2$ e $|\vec{w}|^2 = 1 + 1 + 1 = 3$ (niente radice).
>
> **Proiezione.**
> $$
> pr_{\vec{w}}(\vec{v}) = \frac{\vec{v} \cdot \vec{w}}{|\vec{w}|^2}\,\vec{w} = -\frac{2}{3}(1, 1, -1) = \left(-\frac{2}{3}, -\frac{2}{3}, \frac{2}{3}\right)
> $$
> Il coefficiente $-\frac{2}{3}$ è negativo, quindi il verso è **opposto** a $\vec{w}$: l'angolo fra $\vec{v}$ e $\vec{w}$ è ottuso, come dice il segno di $\vec{v} \cdot \vec{w}$.
>
> **Verifica.** $\vec{v} - pr_{\vec{w}}(\vec{v}) = \left(2 + \frac{2}{3},\ -1 + \frac{2}{3},\ 3 - \frac{2}{3}\right) = \left(\frac{8}{3}, -\frac{1}{3}, \frac{7}{3}\right)$, e
> $$
> \left(\frac{8}{3}, -\frac{1}{3}, \frac{7}{3}\right) \cdot (1, 1, -1) = \frac{8 - 1 - 7}{3} = 0
> $$
> È il cateto perpendicolare del triangolo rettangolo: $\vec{v}$ si spezza in un pezzo lungo $\vec{w}$ e uno ortogonale.

**Esercizio 5 (medio).** Trova tutti i vettori ortogonali sia a $\vec{a} = (1, 1, 0)$ sia a $\vec{b} = (0, 1, 1)$, e i versori fra questi.

> [!tip]- Indizio
> Due condizioni "prodotto scalare $= 0$" su un vettore incognito $(x, y, z)$. Ricava una variabile dalla prima e sostituisci.

> [!example]- Soluzione
> *Come lo riconosco*: "ortogonale a due vettori" sono due equazioni. *Perché questo metodo*: il prodotto vettoriale non è nel programma, quindi si impongono i due prodotti scalari. Con due equazioni e tre incognite resta una variabile libera.
>
> 1. Sia $\vec{x} = (x, y, z)$. Prima condizione: $\vec{x} \cdot \vec{a} = x + y = 0$, quindi $y = -x$.
> 2. Seconda condizione: $\vec{x} \cdot \vec{b} = y + z = 0$, quindi $z = -y = x$.
> 3. Chiamo $x = t$: tutti e soli i vettori cercati sono $\vec{x} = (t, -t, t) = t(1, -1, 1)$ con $t \in \mathbb{R}$, cioè i multipli di $(1, -1, 1)$, vettore nullo compreso.
> 4. Versori: $|(1, -1, 1)| = \sqrt3$, quindi $\pm\frac{1}{\sqrt3}(1, -1, 1)$.
>
> **Controllo.** $(1, -1, 1) \cdot (1, 1, 0) = 1 - 1 + 0 = 0$ e $(1, -1, 1) \cdot (0, 1, 1) = 0 - 1 + 1 = 0$. Ha senso anche geometricamente: $\vec{a}$ e $\vec{b}$ non sono paralleli, e le direzioni perpendicolari a entrambi sono una sola. Lo stesso conto torna in [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/) per la normale di un piano.

**Esercizio 6 (medio-difficile, trappola).** Trova i valori di $k \in \mathbb{R}$ per cui $\vec{v} = (k, 1, 1)$ e $\vec{w} = (1, 1, 0)$ formano un angolo di $\frac{\pi}{3}$.

> [!tip]- Indizio
> Scrivi $\cos\theta = \frac12$ con la formula in coordinate. Per togliere la radice elevi al quadrato: poi controlla i segni.

> [!example]- Soluzione
> *Come lo riconosco*: angolo assegnato con un parametro, quindi un'equazione in $k$ dalla formula del coseno. *Il punto delicato*: elevare al quadrato fa perdere il segno, e il segno di $\cos\theta$ distingue $\frac{\pi}{3}$ da $\frac{2\pi}{3}$.
>
> 1. Ingredienti: $\vec{v} \cdot \vec{w} = k + 1 + 0 = k + 1$, $|\vec{v}| = \sqrt{k^2 + 2}$, $|\vec{w}| = \sqrt{2}$.
> 2. Condizione: $\dfrac{k + 1}{\sqrt{2}\sqrt{k^2 + 2}} = \cos\frac{\pi}{3} = \dfrac12$.
> 3. Moltiplico per $2\sqrt2\sqrt{k^2 + 2}$, che è positivo: $2(k + 1) = \sqrt{2}\sqrt{k^2 + 2} = \sqrt{2(k^2 + 2)}$.
> 4. Il membro destro è una radice, quindi $\geq 0$: serve $k + 1 \geq 0$, cioè $k \geq -1$. Me lo segno prima di elevare al quadrato.
> 5. Elevo al quadrato: $4(k+1)^2 = 2(k^2 + 2)$, cioè $4k^2 + 8k + 4 = 2k^2 + 4$.
> 6. Porto tutto a sinistra: $2k^2 + 8k = 0$, cioè $2k(k + 4) = 0$, quindi $k = 0$ oppure $k = -4$.
> 7. Confronto con il passo 4: $k = -4 < -1$ va scartato. Resta $k = 0$.
>
> **Controllo.** Con $k = 0$: $\vec{v} = (0, 1, 1)$, $\vec{v} \cdot \vec{w} = 1$, $|\vec{v}| = \sqrt2$, $\cos\theta = \frac{1}{\sqrt2 \cdot \sqrt2} = \frac12$. Con $k = -4$: $\vec{v} = (-4, 1, 1)$, $\vec{v} \cdot \vec{w} = -3$, $|\vec{v}| = \sqrt{18}$, $\cos\theta = \frac{-3}{\sqrt{18}\sqrt2} = \frac{-3}{6} = -\frac12$: angolo $\frac{2\pi}{3}$, non quello chiesto. È la soluzione in più introdotta dal quadrato.

**Esercizio 7 (livello 30).** Siano $A = (1, 0, 1)$, $B = (3, 2, 2)$, $C = (2, 3, -1)$. Trova il piede $H$ dell'altezza del triangolo $ABC$ uscente da $C$, la lunghezza dell'altezza e l'area del triangolo.

<figure class="fig"><svg role="img" aria-label="altezza del triangolo con la proiezione" xmlns:xlink="http://www.w3.org/1999/xlink" width="311.9355pt" height="200.016pt" viewBox="0 0 311.9355 200.016" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f87cc7d-figure_1"> <g id="f87cc7d-patch_1"> <path d="M 0 200.016 L 311.9355 200.016 L 311.9355 0 L 0 0 L 0 200.016 z " style="fill: none"/> </g> <g id="f87cc7d-axes_1"> <g id="f87cc7d-line2d_1"> <path d="M 270.8325 153.0225 L 117.6795 35.2125 " clip-path="url(#f87cc7d-p414d124795)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f87cc7d-line2d_2"> <path d="M 117.6795 143.00865 L 127.69335 143.00865 L 127.69335 153.0225 " clip-path="url(#f87cc7d-p414d124795)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f87cc7d-patch_2"> <path d="M 35.2125 153.0225 Q 153.0225 153.0225 268.596432 153.0225 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 262.996432 150.2225 L 268.596432 153.0225 L 262.996432 155.8225 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f87cc7d-patch_3"> <path d="M 35.2125 153.0225 Q 76.446 94.1175 116.397199 37.044358 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 110.891961 40.026362 L 116.397199 37.044358 L 115.479659 43.237752 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f87cc7d-patch_4"> <path d="M 35.2125 153.0225 Q 76.446 153.0225 114.772612 153.0225 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: round"/> <path d="M 109.172612 150.2225 L 114.772612 153.0225 L 109.172612 155.8225 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.6; stroke-linecap: round"/> </g> <g id="f87cc7d-patch_5"> <path d="M 117.6795 153.0225 Q 117.6795 94.1175 117.6795 37.001354 " style="fill: none; stroke-dasharray: 5.92,2.56; stroke-dashoffset: 0; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linecap: round"/> <path d="M 114.8795 42.601354 L 117.6795 37.001354 L 120.4795 42.601354 z " style="fill: var(--fig-ink); stroke-dasharray: 5.92,2.56; stroke-dashoffset: 0; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linecap: round"/> </g> <g id="f87cc7d-text_1"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(15.74125 165.235203) scale(0.13 -0.13)"> <defs> <path id="f87cc7d-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="f87cc7d-text_2"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(280.74875 165.235203) scale(0.13 -0.13)"> <defs> <path id="f87cc7d-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="f87cc7d-text_3"> <!-- $C$ --> <g style="fill: var(--fig-ink)" transform="translate(112.6745 23.863203) scale(0.13 -0.13)"> <defs> <path id="f87cc7d-DejaVuSerif-Italic-26" d="M 4300 1234 Q 3966 581 3414 245 Q 2863 -91 2119 -91 Q 1663 -91 1303 65 Q 944 222 700 525 Q 419 875 334 1320 Q 250 1766 359 2328 Q 572 3416 1330 4083 Q 2088 4750 3116 4750 Q 3497 4750 3908 4650 Q 4319 4550 4775 4347 L 4569 3272 L 4216 3272 Q 4213 3859 3919 4137 Q 3625 4416 2997 4416 Q 2250 4416 1762 3886 Q 1275 3356 1075 2328 Q 875 1303 1156 773 Q 1438 244 2184 244 Q 2706 244 3092 492 Q 3478 741 3725 1234 L 4300 1234 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-26" transform="translate(0 0.78125)"/> </g> </g> <g id="f87cc7d-text_4"> <!-- $H$ --> <g style="fill: var(--fig-ink)" transform="translate(111.9595 174.070953) scale(0.13 -0.13)"> <defs> <path id="f87cc7d-DejaVuSerif-Italic-2b" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 2631 4666 L 2566 4331 L 1972 4331 L 1659 2719 L 4078 2719 L 4391 4331 L 3797 4331 L 3862 4666 L 5684 4666 L 5619 4331 L 5025 4331 L 4247 331 L 4841 331 L 4778 0 L 2956 0 L 3019 331 L 3616 331 L 4003 2338 L 1584 2338 L 1194 331 L 1787 331 L 1725 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-2b" transform="translate(0 0.09375)"/> </g> </g> <g id="f87cc7d-text_5"> <!-- $\vec{v}$ --> <g style="fill: var(--fig-ink)" transform="translate(55.0695 89.310227) scale(0.13 -0.13)"> <defs> <path id="f87cc7d-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f87cc7d-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> </g> </g> <g id="f87cc7d-text_6"> <!-- $\vec{w}$ --> <g style="fill: var(--fig-steel)" transform="translate(206.3375 174.722477) scale(0.13 -0.13)"> <defs> <path id="f87cc7d-DejaVuSerif-Italic-5a" d="M 3741 728 Q 4156 1178 4250 1344 Q 4594 1969 4931 2988 L 4447 2984 L 4513 3322 L 5347 3322 L 5281 2984 L 5278 2984 Q 4959 1825 4656 1266 Q 4209 469 3719 0 L 3241 0 L 2900 2484 L 1597 0 L 1138 0 L 734 2988 L 359 2981 L 425 3322 L 1281 3322 L 1631 728 L 2991 3322 L 3394 3322 L 3741 728 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-STIXGeneral-Regular-350" transform="translate(76.695801 10)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-5a" transform="translate(0 0.390625)"/> </g> </g> <g id="f87cc7d-text_7"> <!-- $pr_{\vec{w}}(\vec{v})$ --> <g style="fill: var(--fig-accent)" transform="translate(59.451 177.047961) scale(0.11 -0.11)"> <defs> <path id="f87cc7d-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f87cc7d-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f87cc7d-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f87cc7d-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-53" transform="translate(0 0.390625)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-55" transform="translate(64.013672 0.390625)"/> <use xlink:href="#f87cc7d-STIXGeneral-Regular-350" transform="translate(165.498779 -11.2875) scale(0.7)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-5a" transform="translate(111.816406 -18.0125) scale(0.7)"/> <use xlink:href="#f87cc7d-DejaVuSerif-b" transform="translate(174.328613 0.390625)"/> <use xlink:href="#f87cc7d-STIXGeneral-Regular-350" transform="translate(271.762695 10)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-59" transform="translate(213.342285 0.390625)"/> <use xlink:href="#f87cc7d-DejaVuSerif-c" transform="translate(269.836426 0.390625)"/> </g> </g> <g id="f87cc7d-text_8"> <!-- $\vec{v}-pr_{\vec{w}}(\vec{v})$ --> <g style="fill: var(--fig-ink)" transform="translate(149.7445 91.635711) scale(0.11 -0.11)"> <defs> <path id="f87cc7d-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f87cc7d-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#f87cc7d-DejaVuSerif-8cf" transform="translate(75.458984 0.390625)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-53" transform="translate(178.212891 0.390625)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-55" transform="translate(242.226562 0.390625)"/> <use xlink:href="#f87cc7d-STIXGeneral-Regular-350" transform="translate(343.71167 -11.2875) scale(0.7)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-5a" transform="translate(290.029297 -18.0125) scale(0.7)"/> <use xlink:href="#f87cc7d-DejaVuSerif-b" transform="translate(352.541504 0.390625)"/> <use xlink:href="#f87cc7d-STIXGeneral-Regular-350" transform="translate(449.975586 10)"/> <use xlink:href="#f87cc7d-DejaVuSerif-Italic-59" transform="translate(391.555176 0.390625)"/> <use xlink:href="#f87cc7d-DejaVuSerif-c" transform="translate(448.049316 0.390625)"/> </g> </g> </g> </g> <defs> <clipPath id="f87cc7d-p414d124795"> <rect x="5.76" y="5.76" width="300.4155" height="188.496"/> </clipPath> </defs> </svg></figure>

> [!tip]- Indizio
> Con $\vec{v} = \overrightarrow{AC}$ e $\vec{w} = \overrightarrow{AB}$, il segmento $\overrightarrow{AH}$ è l'ombra di $\vec{v}$ sulla retta $AB$.

> [!example]- Soluzione
> *Come lo riconosco*: "piede della perpendicolare" su un lato è una proiezione ortogonale. *Perché questo metodo*: $\vec{v} = pr_{\vec{w}}(\vec{v}) + \big(\vec{v} - pr_{\vec{w}}(\vec{v})\big)$, con il primo pezzo lungo $AB$ e il secondo perpendicolare: il secondo è proprio l'altezza.
>
> 1. $\vec{w} = \overrightarrow{AB} = (3-1,\ 2-0,\ 2-1) = (2, 2, 1)$ e $\vec{v} = \overrightarrow{AC} = (2-1,\ 3-0,\ -1-1) = (1, 3, -2)$.
> 2. $\vec{v} \cdot \vec{w} = 2 + 6 - 2 = 6$ e $|\vec{w}|^2 = 4 + 4 + 1 = 9$.
> 3. $\overrightarrow{AH} = pr_{\vec{w}}(\vec{v}) = \frac{6}{9}(2, 2, 1) = \frac23(2, 2, 1) = \left(\frac43, \frac43, \frac23\right)$. Coefficiente positivo: $H$ sta dalla parte di $B$.
> 4. $H$ è il punto che si raggiunge partendo da $A$ con lo spostamento $\overrightarrow{AH}$, quindi si sommano le coordinate: $H = \left(1 + \frac43,\ 0 + \frac43,\ 1 + \frac23\right) = \left(\frac73, \frac43, \frac53\right)$.
> 5. Altezza: $\overrightarrow{HC} = \left(2 - \frac73,\ 3 - \frac43,\ -1 - \frac53\right) = \left(-\frac13, \frac53, -\frac83\right)$.
> 6. $|\overrightarrow{HC}|^2 = \frac{1 + 25 + 64}{9} = \frac{90}{9} = 10$, quindi l'altezza è $\sqrt{10}$.
> 7. Base: $|\overrightarrow{AB}| = \sqrt9 = 3$. Area $= \frac{\text{base} \cdot \text{altezza}}{2} = \frac{3\sqrt{10}}{2}$.
>
> **Controlli.**
> - $\overrightarrow{HC} \cdot \vec{w} = -\frac23 + \frac{10}{3} - \frac83 = 0$: davvero perpendicolare ad $AB$.
> - Pitagora nel triangolo $AHC$: $|\overrightarrow{AH}|^2 + |\overrightarrow{HC}|^2 = \frac{16 + 16 + 4}{9} + 10 = 4 + 10 = 14$, e $|\vec{v}|^2 = 1 + 9 + 4 = 14$.
> - Il coefficiente $\frac23$ sta fra $0$ e $1$: $H$ cade dentro il segmento $AB$, coerente con la figura.

**Esercizio 8 (teoria, sul modello della 1.7).** Verifica in coordinate che per ogni $\vec{v}, \vec{w} \in V^3$ e $\lambda \in \mathbb{R}$ vale $(\lambda\vec{v}) \cdot \vec{w} = \lambda(\vec{v} \cdot \vec{w})$.

> [!example]- Soluzione
> Siano $\vec{v} = (v_1, v_2, v_3)$ e $\vec{w} = (w_1, w_2, w_3)$. Sviluppo i due membri separatamente.
>
> **Membro sinistro.** $\lambda\vec{v} = (\lambda v_1, \lambda v_2, \lambda v_3)$, quindi
> $$
> (\lambda\vec{v}) \cdot \vec{w} = (\lambda v_1) w_1 + (\lambda v_2) w_2 + (\lambda v_3) w_3
> $$
>
> **Membro destro.**
> $$
> \lambda(\vec{v} \cdot \vec{w}) = \lambda(v_1 w_1 + v_2 w_2 + v_3 w_3) = \lambda v_1 w_1 + \lambda v_2 w_2 + \lambda v_3 w_3
> $$
> dove ho usato la distributiva dei numeri reali.
>
> **Confronto.** Per l'associativa del prodotto fra reali $(\lambda v_i) w_i = \lambda v_i w_i$, quindi i due membri coincidono termine per termine. $\blacksquare$
>
> Lo schema è quello da usare per la 1.7: coordinate, due membri sviluppati a parte, proprietà dei numeri reali citate per nome.

**Esercizio 9 (teoria, livello 30).** Dimostra, usando solo le proprietà del prodotto scalare, che per ogni $\vec{v}, \vec{w} \in V^3$
$$
|\vec{v} + \vec{w}|^2 = |\vec{v}|^2 + 2\,\vec{v} \cdot \vec{w} + |\vec{w}|^2
$$
e deduci che, per $\vec{v}, \vec{w}$ non nulli, $\vec{v} \perp \vec{w} \iff |\vec{v} + \vec{w}|^2 = |\vec{v}|^2 + |\vec{w}|^2$. Controlla la formula con $\vec{v} = (1, 2, 0)$, $\vec{w} = (3, -1, 2)$.

> [!tip]- Indizio
> Parti da $|\vec{v} + \vec{w}|^2 = (\vec{v} + \vec{w}) \cdot (\vec{v} + \vec{w})$ e sviluppa come il quadrato di un binomio, citando la proprietà a ogni passo.

> [!example]- Soluzione
> *Come lo riconosco*: un modulo al quadrato si trasforma sempre in prodotto scalare (proprietà 4), e da lì si sviluppa con la distributiva.
>
> 1. $|\vec{v} + \vec{w}|^2 = (\vec{v} + \vec{w}) \cdot (\vec{v} + \vec{w})$ (proprietà 4).
> 2. $= (\vec{v} + \vec{w}) \cdot \vec{v} + (\vec{v} + \vec{w}) \cdot \vec{w}$ (distributiva, proprietà 3).
> 3. $= \vec{v} \cdot \vec{v} + \vec{w} \cdot \vec{v} + \vec{v} \cdot \vec{w} + \vec{w} \cdot \vec{w}$ (distributiva dal lato sinistro, che vale per la commutativa).
> 4. $= \vec{v} \cdot \vec{v} + 2\,\vec{v} \cdot \vec{w} + \vec{w} \cdot \vec{w}$ (commutativa: $\vec{w} \cdot \vec{v} = \vec{v} \cdot \vec{w}$, e due numeri uguali si sommano).
> 5. $= |\vec{v}|^2 + 2\,\vec{v} \cdot \vec{w} + |\vec{w}|^2$ (proprietà 4, due volte). $\blacksquare$
>
> **Conseguenza.** Per la formula appena dimostrata, $|\vec{v} + \vec{w}|^2 = |\vec{v}|^2 + |\vec{w}|^2 \iff 2\,\vec{v} \cdot \vec{w} = 0 \iff \vec{v} \cdot \vec{w} = 0$, e per il criterio di ortogonalità (vettori non nulli) $\iff \vec{v} \perp \vec{w}$. È il teorema di Pitagora, con anche il viceversa.
>
> **Controllo numerico.** $\vec{v} + \vec{w} = (4, 1, 2)$, $|\vec{v} + \vec{w}|^2 = 16 + 1 + 4 = 21$. Dall'altra parte $|\vec{v}|^2 = 1 + 4 + 0 = 5$, $\vec{v} \cdot \vec{w} = 3 - 2 + 0 = 1$, $|\vec{w}|^2 = 9 + 1 + 4 = 14$, e $5 + 2 \cdot 1 + 14 = 21$.

**Esercizio 10 (teoria, livello 30).** Dimostra che $(\vec{v} + \vec{w}) \cdot (\vec{v} - \vec{w}) = |\vec{v}|^2 - |\vec{w}|^2$. Deduci che le diagonali del parallelogramma costruito su $\vec{v}$ e $\vec{w}$ (non nulli, non paralleli) sono perpendicolari se e solo se $|\vec{v}| = |\vec{w}|$, cioè se è un rombo. Controlla con $\vec{v} = (1, 2, 2)$, $\vec{w} = (2, 1, -2)$.

<figure class="fig"><svg role="img" aria-label="diagonali del parallelogramma" xmlns:xlink="http://www.w3.org/1999/xlink" width="323.37pt" height="211.104pt" viewBox="0 0 323.37 211.104" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f2aa9df-figure_1"> <g id="f2aa9df-patch_1"> <path d="M 0 211.104 L 323.37 211.104 L 323.37 0 L 0 0 L 0 211.104 z " style="fill: none"/> </g> <g id="f2aa9df-axes_1"> <g id="f2aa9df-line2d_1"> <path d="M 230.292 142.974 L 292.662 24.471 " clip-path="url(#f2aa9df-p62cf0fbb23)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: var(--fig-faint)"/> </g> <g id="f2aa9df-line2d_2"> <path d="M 93.078 49.419 L 292.662 24.471 " clip-path="url(#f2aa9df-p62cf0fbb23)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: var(--fig-faint)"/> </g> <g id="f2aa9df-patch_2"> <path d="M 30.708 167.922 Q 130.5 155.448 228.073199 143.25135 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 222.169146 141.167567 L 228.073199 143.25135 L 222.86374 146.724323 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f2aa9df-patch_3"> <path d="M 30.708 167.922 Q 61.893 108.6705 92.036559 51.397737 " style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> <path d="M 86.950608 55.049189 L 92.036559 51.397737 L 91.90615 57.657369 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f2aa9df-patch_4"> <path d="M 30.708 167.922 Q 161.685 96.1965 290.308504 25.759819 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> <path d="M 284.051884 25.993712 L 290.308504 25.759819 L 286.741646 30.905451 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> </g> <g id="f2aa9df-patch_5"> <path d="M 93.078 49.419 Q 161.685 96.1965 228.444499 141.714341 " style="fill: none; stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> <path d="M 225.394969 136.246218 L 228.444499 141.714341 L 222.240283 140.873091 z " style="fill: var(--fig-ink); stroke-dasharray: 7.4,3.2; stroke-dashoffset: 0; stroke: var(--fig-ink); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f2aa9df-text_1"> <!-- $\vec{v}$ --> <g style="fill: var(--fig-ink)" transform="translate(133.032 178.187477) scale(0.13 -0.13)"> <defs> <path id="f2aa9df-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f2aa9df-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2aa9df-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f2aa9df-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> </g> </g> <g id="f2aa9df-text_2"> <!-- $\vec{w}$ --> <g style="fill: var(--fig-steel)" transform="translate(37.592 106.461977) scale(0.13 -0.13)"> <defs> <path id="f2aa9df-DejaVuSerif-Italic-5a" d="M 3741 728 Q 4156 1178 4250 1344 Q 4594 1969 4931 2988 L 4447 2984 L 4513 3322 L 5347 3322 L 5281 2984 L 5278 2984 Q 4959 1825 4656 1266 Q 4209 469 3719 0 L 3241 0 L 2900 2484 L 1597 0 L 1138 0 L 734 2988 L 359 2981 L 425 3322 L 1281 3322 L 1631 728 L 2991 3322 L 3394 3322 L 3741 728 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2aa9df-STIXGeneral-Regular-350" transform="translate(76.695801 10)"/> <use xlink:href="#f2aa9df-DejaVuSerif-Italic-5a" transform="translate(0 0.390625)"/> </g> </g> <g id="f2aa9df-text_3"> <!-- $\vec{v}+\vec{w}$ --> <g style="fill: var(--fig-accent)" transform="translate(169.72248 61.181357) scale(0.13 -0.13)"> <defs> <path id="f2aa9df-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2aa9df-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f2aa9df-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#f2aa9df-DejaVuSerif-e" transform="translate(75.458984 0.390625)"/> <use xlink:href="#f2aa9df-STIXGeneral-Regular-350" transform="translate(254.908691 10)"/> <use xlink:href="#f2aa9df-DejaVuSerif-Italic-5a" transform="translate(178.212891 0.390625)"/> </g> </g> <g id="f2aa9df-text_4"> <!-- $\vec{v}-\vec{w}$ --> <g style="fill: var(--fig-ink)" transform="translate(155.7516 140.453627) scale(0.13 -0.13)"> <defs> <path id="f2aa9df-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2aa9df-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f2aa9df-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#f2aa9df-DejaVuSerif-8cf" transform="translate(75.458984 0.390625)"/> <use xlink:href="#f2aa9df-STIXGeneral-Regular-350" transform="translate(254.908691 10)"/> <use xlink:href="#f2aa9df-DejaVuSerif-Italic-5a" transform="translate(178.212891 0.390625)"/> </g> </g> </g> </g> <defs> <clipPath id="f2aa9df-p62cf0fbb23"> <rect x="5.76" y="5.76" width="311.85" height="199.584"/> </clipPath> </defs> </svg></figure>

> [!example]- Soluzione
> *Come lo riconosco*: prodotto scalare fra una somma e una differenza, si sviluppa come il prodotto notevole $(a + b)(a - b)$. Le diagonali del parallelogramma sono $\vec{v} + \vec{w}$ (dalla coda comune al vertice opposto) e $\vec{v} - \vec{w}$ (dalla punta di $\vec{w}$ alla punta di $\vec{v}$, perché $\vec{w} + (\vec{v} - \vec{w}) = \vec{v}$).
>
> 1. $\vec{v} - \vec{w} = \vec{v} + (-\vec{w})$ (definizione di differenza), e $-\vec{w} = (-1)\vec{w}$.
> 2. $(\vec{v} + \vec{w}) \cdot (\vec{v} - \vec{w}) = (\vec{v} + \vec{w}) \cdot \vec{v} + (\vec{v} + \vec{w}) \cdot (-\vec{w})$ (distributiva).
> 3. $= \vec{v} \cdot \vec{v} + \vec{w} \cdot \vec{v} - \vec{v} \cdot \vec{w} - \vec{w} \cdot \vec{w}$ (distributiva dal lato sinistro e proprietà 2 con $\lambda = -1$).
> 4. $= |\vec{v}|^2 - |\vec{w}|^2$ (commutativa: i due termini centrali sono lo stesso numero con segni opposti; proprietà 4). $\blacksquare$
>
> **Conseguenza.** Le diagonali $\vec{v} + \vec{w}$ e $\vec{v} - \vec{w}$ sono non nulle perché $\vec{v}$ e $\vec{w}$ non sono paralleli. Per il criterio di ortogonalità sono perpendicolari $\iff (\vec{v} + \vec{w}) \cdot (\vec{v} - \vec{w}) = 0 \iff |\vec{v}|^2 = |\vec{w}|^2 \iff |\vec{v}| = |\vec{w}|$ (i moduli sono $\geq 0$).
>
> **Controllo numerico.** $|\vec{v}| = \sqrt{1+4+4} = 3$ e $|\vec{w}| = \sqrt{4+1+4} = 3$: rombo. $\vec{v} + \vec{w} = (3, 3, 0)$, $\vec{v} - \vec{w} = (-1, 1, 4)$, e $(3, 3, 0) \cdot (-1, 1, 4) = -3 + 3 + 0 = 0$.

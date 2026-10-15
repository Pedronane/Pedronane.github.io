---
title: Esercizi su sup, inf, max e min
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-05
lezioni:
  - 13 ott
ordine: 10
---

Esercizi su estremo superiore e inferiore, da queste fonti:

```
1-9     III tutoraggio, "Estremo superiore e inferiore con massimi e minimi"
        (Barbon, Favari, Bellomo), gli stessi della lavagna dell'esercitazione
10      esercizio in più, allena la razionalizzazione
11      III tutoraggio "Successioni e loro limiti", esercizio 1
12      esercitazione 3 del tutor, esercizio 4.1
13-14   tutoraggio del 13/10, esercizi 1.1 e 1.3 (testi dal tuo quaderno)
15-20   foglio 1 del 2015-16, esercizio 1: ii, iii, v, vii, ix, x
21      foglio 0 del 2015-16, esercizio 7 ii
C1-C3   crocette tipo esame
22-27   esercizi tipo esame, dal facile al livello del 30
```

Fonti: <span class="src">Tutoraggio 3 complementi</span>, <span class="src">Tutoraggio 3</span>, <span class="src">esercitazione 3, pagina 11</span>, <span class="src">foglio 1</span>, <span class="src">foglio 0, pagina 2</span>. Gli altri quattro insiemi del foglio 1 (i, iv, vi, viii) sono svolti nella nota di teoria, [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/).

Ogni esercizio ha un **indizio** e una **soluzione**, entrambi chiusi: prova da solo, apri l'indizio se ti blocchi, la soluzione solo alla fine. Le soluzioni hanno tutte la stessa forma: come si riconosce il tipo di insieme e perché si sceglie quel metodo, poi il candidato, la condizione (1) del maggiorante, la condizione (2) con $\varepsilon$ scritta per intero (con l'elemento trovato **in funzione di** $\varepsilon$), se è massimo o no, e alla fine la verifica numerica.

> [!abstract] Per l'esame
> - **Saper fare**: per un insieme dato come successione $\{x_n : n \in \mathbb{N}\}$, come insieme di soluzioni di una disequazione, come unione, come immagine di una funzione o con un parametro, trovare sup e inf e **dimostrarli** con le due condizioni; dire se sono massimo e minimo; dimostrare che un insieme è illimitato.
> - **Il passo che non si salta**: la condizione (2), "per ogni $\varepsilon > 0$ esiste un elemento sopra $L - \varepsilon$", con l'elemento scritto esplicitamente in funzione di $\varepsilon$. Senza quel passo hai solo dimostrato che $L$ è un maggiorante.
> - **Dove esce**: è l'esercizio 1 del foglio 1 e l'esercizio da 7 punti della parte 2 ("limitato? sup, inf, max, min?"); nella parte 1 come crocetta. Senza giustificazione il risultato giusto vale poco: il tutor l'ha scritto con il punto esclamativo («Giustificare ogni affermazione!»).

## Cosa serve

**Convenzione.** In questo corso $\mathbb{N} = \{0, 1, 2, \dots\}$, quindi lo $0$ c'è. Negli esercizi 3, 4, 6, 7 e 22 il denominatore $n + 1$ serve proprio a non dividere per zero con $n = 0$. Quando il testo scrive $n \geq 1$, lo $0$ è escluso e il primo termine è quello con $n = 1$.

### Le definizioni da richiamare

Tutte in [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/), con le slide del 15/9:

- **Maggiorante** (<span class="src">slide 30</span>): $M \in \mathbb{R}$ con $x \leq M$ per ogni $x \in A$. Non serve che $M$ stia in $A$. **Minorante**: $x \geq m$ per ogni $x \in A$.
- **Massimo** (<span class="src">slide 32</span>): un maggiorante che **appartiene** ad $A$. Minimo: un minorante che appartiene ad $A$.
- **Estremo superiore** (<span class="src">slide 33</span>): il più piccolo dei maggioranti. Se $A$ non ha maggioranti si scrive $\sup A = +\infty$. Allo stesso modo $\inf A$ è il più grande dei minoranti, e $\inf A = -\infty$ se non ce ne sono.
- **Legame con max e min** (<span class="src">slide 34</span>): se il massimo esiste è il sup; se il sup sta in $A$, è il massimo.
- **Completezza** (<span class="src">slide 35</span>): se $A \neq \emptyset$ è limitato superiormente, allora esiste $\sup A \in \mathbb{R}$.
- **Parte intera** (<span class="src">slide 36</span>): $\lfloor x \rfloor$ è il più grande intero $\leq x$, e $\lfloor x \rfloor \leq x < \lfloor x \rfloor + 1$.
- **Archimede** (<span class="src">slide 37</span>): per ogni $x \in \mathbb{R}$ esiste $n \in \mathbb{N}$ con $n > x$.
- **Densità di $\mathbb{Q}$** (<span class="src">slide 39</span>): fra due reali $a < b$ c'è sempre un razionale. Serve solo nell'esercizio 26.

### La caratterizzazione: (1) e (2)

Il prof la scrive a mano dopo la slide 33 (<span class="src">15/9, pagine 19-20</span>). $L = \sup A$ se e solo se valgono entrambe:

$$
\text{(1)}\ \ x \leq L \ \ \forall x \in A \qquad\qquad \text{(2)}\ \ \forall N < L\ \ \exists x \in A : x > N
$$

Ogni $N < L$ si scrive $N = L - \varepsilon$ con $\varepsilon = L - N > 0$, quindi la (2) è la stessa cosa di

$$
\text{(2)}\ \ \forall \varepsilon > 0\ \ \exists x \in A : x > L - \varepsilon
$$

ed è la forma che usa il tutor nell'esercitazione 3 e che usiamo qui. Per l'inf, $l = \inf A$ se e solo se

$$
\text{(3)}\ \ x \geq l \ \ \forall x \in A \qquad\qquad \text{(4)}\ \ \forall \varepsilon > 0\ \ \exists x \in A : x < l + \varepsilon
$$

**Cosa dicono a parole.** La (1) dice che $L$ è un maggiorante: nessun elemento sta sopra. La (2) dice che è il **più piccolo**: abbassi la soglia di quanto vuoi, anche di pochissimo, e c'è subito un elemento di $A$ che la scavalca. Si può leggere come un gioco: qualcuno ti dà un $\varepsilon > 0$, piccolo quanto vuole, e tu devi rispondere con un elemento di $A$ sopra $L - \varepsilon$. Hai vinto se hai una **ricetta** che funziona per ogni $\varepsilon$, cioè un elemento scritto in funzione di $\varepsilon$.

<figure class="fig"><svg role="img" aria-label="Epsilon e il punto nella fascia" xmlns:xlink="http://www.w3.org/1999/xlink" width="719.32pt" height="336.808pt" viewBox="0 0 719.32 336.808" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f92addb-figure_1"> <g id="f92addb-patch_1"> <path d="M 0 336.808 L 719.32 336.808 L 719.32 0 L 0 0 L 0 336.808 z " style="fill: none"/> </g> <g id="f92addb-axes_1"> <g id="f92addb-patch_2"> <path d="M 43.96 294.048 L 348.323636 294.048 L 348.323636 50.112 L 43.96 50.112 L 43.96 294.048 z " style="fill: none"/> </g> <g id="f92addb-patch_3"> <path d="M 43.96 117.58366 L 348.323636 117.58366 L 348.323636 76.062638 L 43.96 76.062638 z " clip-path="url(#f92addb-p28603b5275)" style="fill: var(--fig-accent-deep); opacity: 0.3"/> </g> <g id="f92addb-matplotlib.axis_1"> <g id="f92addb-xtick_1"> <g id="f92addb-line2d_1"> <defs> <path id="f92addb-m1a394b7350" d="M 0 0 L 0 3.5 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f92addb-m1a394b7350" x="48.791169" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_1"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(44.655544 310.924953) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-13"/> </g> </g> </g> <g id="f92addb-xtick_2"> <g id="f92addb-line2d_2"> <g> <use xlink:href="#f92addb-m1a394b7350" x="145.414545" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_2"> <!-- 10 --> <g style="fill: var(--fig-axis)" transform="translate(137.143295 310.924953) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-14"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f92addb-xtick_3"> <g id="f92addb-line2d_3"> <g> <use xlink:href="#f92addb-m1a394b7350" x="242.037922" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_3"> <!-- 20 --> <g style="fill: var(--fig-axis)" transform="translate(233.766672 310.924953) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-15"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f92addb-xtick_4"> <g id="f92addb-line2d_4"> <g> <use xlink:href="#f92addb-m1a394b7350" x="338.661299" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_4"> <!-- 30 --> <g style="fill: var(--fig-axis)" transform="translate(330.390049 310.924953) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-16"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f92addb-text_5"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(191.916818 327.924953) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> </g> <g id="f92addb-matplotlib.axis_2"> <g id="f92addb-ytick_1"> <g id="f92addb-line2d_5"> <defs> <path id="f92addb-m2677658471" d="M 0 0 L -3.5 0 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f92addb-m2677658471" x="43.96" y="283.667745" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_6"> <!-- $-1$ --> <g style="fill: var(--fig-axis)" transform="translate(17.72 288.606221) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> </g> <g id="f92addb-ytick_2"> <g id="f92addb-line2d_6"> <g> <use xlink:href="#f92addb-m2677658471" x="43.96" y="179.865191" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_7"> <!-- $0$ --> <g style="fill: var(--fig-axis)" transform="translate(28.64 184.803668) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> </g> <g id="f92addb-ytick_3"> <g id="f92addb-line2d_7"> <g> <use xlink:href="#f92addb-m2677658471" x="43.96" y="117.58366" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_8"> <!-- $1 - \varepsilon$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 122.522136) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-Italic-32d" d="M 3191 3156 L 3069 2541 L 2719 2463 Q 2734 2741 2538 2884 Q 2341 3025 2047 3025 Q 1753 3025 1506 2872 Q 1256 2716 1216 2503 Q 1163 2228 1394 2069 Q 1628 1906 2044 1906 L 2194 1906 L 2131 1578 L 1844 1578 Q 1425 1578 1113 1378 Q 797 1175 731 834 Q 681 572 909 375 Q 1138 175 1484 175 Q 1847 175 2142 340 Q 2438 506 2531 825 L 2853 747 L 2728 103 Q 2375 -9 2025 -66 Q 1681 -122 1441 -122 Q 825 -122 447 125 Q 75 375 166 841 Q 259 1331 609 1572 Q 794 1694 1269 1756 L 828 2003 Q 597 2134 675 2531 Q 753 2934 1100 3147 Q 1447 3356 2059 3356 Q 2228 3356 2544 3306 Q 2859 3253 3191 3156 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-8cf" transform="translate(82.587891 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-32d" transform="translate(185.341797 0.78125)"/> </g> </g> </g> <g id="f92addb-ytick_4"> <g id="f92addb-line2d_8"> <g> <use xlink:href="#f92addb-m2677658471" x="43.96" y="76.062638" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_9"> <!-- $1$ --> <g style="fill: var(--fig-axis)" transform="translate(28.64 81.001115) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> </g> </g> <g id="f92addb-line2d_9"> <path d="M 43.96 76.062638 L 348.323636 76.062638 " clip-path="url(#f92addb-p28603b5275)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f92addb-line2d_10"> <path d="M 43.96 117.58366 L 348.323636 117.58366 " clip-path="url(#f92addb-p28603b5275)" style="fill: none; stroke-dasharray: 4.44,1.92; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.2"/> </g> <g id="f92addb-line2d_11"> <defs> <path id="f92addb-me54da5d30a" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f92addb-p28603b5275)"> <use xlink:href="#f92addb-me54da5d30a" x="48.791169" y="283.667745" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="58.453506" y="179.865191" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="68.115844" y="145.26434" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="77.778182" y="127.963915" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="87.440519" y="117.58366" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="97.102857" y="110.663489" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="106.765195" y="105.720511" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="116.427532" y="102.013277" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="126.08987" y="99.129872" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="135.752208" y="96.823149" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="145.414545" y="94.93583" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="155.076883" y="93.363064" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="164.739221" y="92.032262" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="174.401558" y="90.891574" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="184.063896" y="89.902979" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="193.726234" y="89.037957" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="203.388571" y="88.274703" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="213.050909" y="87.596255" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="222.713247" y="86.989223" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="232.375584" y="86.442894" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="242.037922" y="85.948596" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="251.70026" y="85.499234" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="261.362597" y="85.088947" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="271.024935" y="84.712851" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="280.687273" y="84.366843" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="290.34961" y="84.04745" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="300.011948" y="83.751716" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="309.674286" y="83.477106" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="319.336623" y="83.221435" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="328.998961" y="82.982809" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="338.661299" y="82.759577" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f92addb-line2d_12"> <defs> <path id="f92addb-m8070b0b463" d="M 0 5.5 C 1.458617 5.5 2.857689 4.920485 3.889087 3.889087 C 4.920485 2.857689 5.5 1.458617 5.5 0 C 5.5 -1.458617 4.920485 -2.857689 3.889087 -3.889087 C 2.857689 -4.920485 1.458617 -5.5 0 -5.5 C -1.458617 -5.5 -2.857689 -4.920485 -3.889087 -3.889087 C -4.920485 -2.857689 -5.5 -1.458617 -5.5 0 C -5.5 1.458617 -4.920485 2.857689 -3.889087 3.889087 C -2.857689 4.920485 -1.458617 5.5 0 5.5 z " style="stroke: var(--fig-accent); stroke-width: 2.2"/> </defs> <g clip-path="url(#f92addb-p28603b5275)"> <use xlink:href="#f92addb-m8070b0b463" x="97.102857" y="110.663489" style="fill-opacity: 0; stroke: var(--fig-accent); stroke-width: 2.2"/> </g> </g> <g id="f92addb-patch_4"> <path d="M 43.96 294.048 L 43.96 50.112 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f92addb-patch_5"> <path d="M 43.96 294.048 L 348.323636 294.048 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f92addb-text_10"> <!-- $\sup = 1$, mai raggiunto --> <g style="fill: var(--fig-steel)" transform="translate(227.492468 69.834485) scale(0.1 -0.1)"> <defs> <path id="f92addb-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-56" transform="translate(0 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-58" transform="translate(51.318359 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(115.722656 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(214.505524 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(317.259431 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-f" transform="translate(380.882478 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(412.669587 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-50" transform="translate(444.456696 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(539.280915 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(598.900056 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(630.882478 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-55" transform="translate(662.669587 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(710.472321 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4a" transform="translate(770.091462 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4a" transform="translate(834.105134 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(898.118806 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-58" transform="translate(930.101228 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-51" transform="translate(994.505524 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(1058.909821 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-52" transform="translate(1099.095368 0.78125)"/> </g> </g> <g id="f92addb-patch_6"> <path d="M 147.32185 147.559557 Q 124.629204 130.887191 103.197957 115.14158 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 105.441241 119.51967 L 103.197957 115.14158 L 108.0464 115.973806 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.4; stroke-linecap: round"/> </g> <g id="f92addb-text_11"> <!-- $\bar n = \lfloor 2/\varepsilon \rfloor = 5$ --> <g style="fill: var(--fig-accent)" transform="translate(126.08987 159.104681) scale(0.11 -0.11)"> <defs> <path id="f92addb-DejaVuSerif-2b1" d="M -2534 4769 L -666 4769 L -666 4306 L -2534 4306 L -2534 4769 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-92a" d="M 550 -844 L 550 4863 L 1147 4863 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-12" d="M 1656 4666 L 2156 4666 L 500 -594 L 0 -594 L 1656 4666 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-92b" d="M 1947 -844 L 494 -844 L 494 -513 L 1350 -513 L 1350 4863 L 1947 4863 L 1947 -844 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-2b1" transform="translate(56.191406 -1.4375)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(0 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(83.369141 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-92a" transform="translate(186.123047 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-15" transform="translate(225.136719 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-12" transform="translate(288.759766 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-32d" transform="translate(322.451172 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-92b" transform="translate(376.113281 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(434.091797 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-18" transform="translate(536.845703 0.015625)"/> </g> </g> <g id="f92addb-text_12"> <!-- $\varepsilon = 0{,}4$: il primo punto nella fascia --> <g style="fill: var(--fig-ink)" transform="translate(92.581818 42.112) scale(0.12 -0.12)"> <defs> <path id="f92addb-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-Italic-32d" transform="translate(0 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(72.626953 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(175.380859 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-f" transform="translate(239.003906 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-17" transform="translate(270.791016 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-1d" transform="translate(334.414062 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(368.105469 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(399.892578 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4f" transform="translate(431.875 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(463.857422 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(495.644531 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-55" transform="translate(559.658203 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(607.460938 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-50" transform="translate(639.443359 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-52" transform="translate(734.267578 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(794.472656 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(826.259766 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-58" transform="translate(890.273438 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-51" transform="translate(954.677734 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(1019.082031 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-52" transform="translate(1059.267578 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1119.472656 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-51" transform="translate(1151.259766 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-48" transform="translate(1215.664062 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4f" transform="translate(1274.84375 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4f" transform="translate(1306.826172 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1338.808594 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1398.427734 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-49" transform="translate(1430.214844 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1467.226562 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-56" transform="translate(1526.845703 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-46" transform="translate(1578.164062 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(1634.169922 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1666.152344 0.015625)"/> </g> </g> </g> <g id="f92addb-axes_2"> <g id="f92addb-patch_7"> <path d="M 409.196364 294.048 L 713.56 294.048 L 713.56 50.112 L 409.196364 50.112 L 409.196364 294.048 z " style="fill: none"/> </g> <g id="f92addb-patch_8"> <path d="M 409.196364 91.633021 L 713.56 91.633021 L 713.56 76.062638 L 409.196364 76.062638 z " clip-path="url(#f92addb-p065facfaa5)" style="fill: var(--fig-accent-deep); opacity: 0.3"/> </g> <g id="f92addb-matplotlib.axis_3"> <g id="f92addb-xtick_5"> <g id="f92addb-line2d_13"> <g> <use xlink:href="#f92addb-m1a394b7350" x="414.027532" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_13"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(409.891907 310.924953) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-13"/> </g> </g> </g> <g id="f92addb-xtick_6"> <g id="f92addb-line2d_14"> <g> <use xlink:href="#f92addb-m1a394b7350" x="510.650909" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_14"> <!-- 10 --> <g style="fill: var(--fig-axis)" transform="translate(502.379659 310.924953) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-14"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f92addb-xtick_7"> <g id="f92addb-line2d_15"> <g> <use xlink:href="#f92addb-m1a394b7350" x="607.274286" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_15"> <!-- 20 --> <g style="fill: var(--fig-axis)" transform="translate(599.003036 310.924953) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-15"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f92addb-xtick_8"> <g id="f92addb-line2d_16"> <g> <use xlink:href="#f92addb-m1a394b7350" x="703.897662" y="294.048" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_16"> <!-- 30 --> <g style="fill: var(--fig-axis)" transform="translate(695.626412 310.924953) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-16"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f92addb-text_17"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(557.153182 327.924953) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> </g> <g id="f92addb-matplotlib.axis_4"> <g id="f92addb-ytick_5"> <g id="f92addb-line2d_17"> <g> <use xlink:href="#f92addb-m2677658471" x="409.196364" y="283.667745" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_18"> <!-- $-1$ --> <g style="fill: var(--fig-axis)" transform="translate(382.956364 288.606221) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> </g> <g id="f92addb-ytick_6"> <g id="f92addb-line2d_18"> <g> <use xlink:href="#f92addb-m2677658471" x="409.196364" y="179.865191" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_19"> <!-- $0$ --> <g style="fill: var(--fig-axis)" transform="translate(393.876364 184.803668) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> </g> <g id="f92addb-ytick_7"> <g id="f92addb-line2d_19"> <g> <use xlink:href="#f92addb-m2677658471" x="409.196364" y="91.633021" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_20"> <!-- $1 - \varepsilon$ --> <g style="fill: var(--fig-axis)" transform="translate(370.996364 96.571498) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-8cf" transform="translate(82.587891 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-32d" transform="translate(185.341797 0.78125)"/> </g> </g> </g> <g id="f92addb-ytick_8"> <g id="f92addb-line2d_20"> <g> <use xlink:href="#f92addb-m2677658471" x="409.196364" y="76.062638" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f92addb-text_21"> <!-- $1$ --> <g style="fill: var(--fig-axis)" transform="translate(393.876364 81.001115) scale(0.13 -0.13)"> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> </g> </g> <g id="f92addb-line2d_21"> <path d="M 409.196364 76.062638 L 713.56 76.062638 " clip-path="url(#f92addb-p065facfaa5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.8; stroke-linecap: square"/> </g> <g id="f92addb-line2d_22"> <path d="M 409.196364 91.633021 L 713.56 91.633021 " clip-path="url(#f92addb-p065facfaa5)" style="fill: none; stroke-dasharray: 4.44,1.92; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.2"/> </g> <g id="f92addb-line2d_23"> <g clip-path="url(#f92addb-p065facfaa5)"> <use xlink:href="#f92addb-me54da5d30a" x="414.027532" y="283.667745" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="423.68987" y="179.865191" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="433.352208" y="145.26434" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="443.014545" y="127.963915" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="452.676883" y="117.58366" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="462.339221" y="110.663489" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="472.001558" y="105.720511" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="481.663896" y="102.013277" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="491.326234" y="99.129872" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="500.988571" y="96.823149" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="510.650909" y="94.93583" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="520.313247" y="93.363064" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="529.975584" y="92.032262" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="539.637922" y="90.891574" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="549.30026" y="89.902979" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="558.962597" y="89.037957" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="568.624935" y="88.274703" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="578.287273" y="87.596255" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="587.94961" y="86.989223" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="597.611948" y="86.442894" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="607.274286" y="85.948596" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="616.936623" y="85.499234" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="626.598961" y="85.088947" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="636.261299" y="84.712851" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="645.923636" y="84.366843" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="655.585974" y="84.04745" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="665.248312" y="83.751716" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="674.910649" y="83.477106" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="684.572987" y="83.221435" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="694.235325" y="82.982809" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f92addb-me54da5d30a" x="703.897662" y="82.759577" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f92addb-line2d_24"> <g clip-path="url(#f92addb-p065facfaa5)"> <use xlink:href="#f92addb-m8070b0b463" x="539.637922" y="90.891574" style="fill-opacity: 0; stroke: var(--fig-accent); stroke-width: 2.2"/> </g> </g> <g id="f92addb-patch_9"> <path d="M 409.196364 294.048 L 409.196364 50.112 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f92addb-patch_10"> <path d="M 409.196364 294.048 L 713.56 294.048 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f92addb-text_22"> <!-- $\sup = 1$, mai raggiunto --> <g style="fill: var(--fig-steel)" transform="translate(592.728831 69.834485) scale(0.1 -0.1)"> <use xlink:href="#f92addb-DejaVuSerif-56" transform="translate(0 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-58" transform="translate(51.318359 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(115.722656 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(214.505524 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(317.259431 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-f" transform="translate(380.882478 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(412.669587 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-50" transform="translate(444.456696 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(539.280915 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(598.900056 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(630.882478 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-55" transform="translate(662.669587 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(710.472321 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4a" transform="translate(770.091462 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4a" transform="translate(834.105134 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(898.118806 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-58" transform="translate(930.101228 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-51" transform="translate(994.505524 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(1058.909821 0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-52" transform="translate(1099.095368 0.78125)"/> </g> </g> <g id="f92addb-patch_11"> <path d="M 596.259801 147.334147 Q 570.072528 121.229802 544.993805 96.230497 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 546.556839 100.894929 L 544.993805 96.230497 L 549.663171 97.778729 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.4; stroke-linecap: round"/> </g> <g id="f92addb-text_23"> <!-- $\bar n = \lfloor 2/\varepsilon \rfloor = 13$ --> <g style="fill: var(--fig-accent)" transform="translate(568.624935 159.104681) scale(0.11 -0.11)"> <use xlink:href="#f92addb-DejaVuSerif-2b1" transform="translate(56.191406 -1.4375)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(0 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(83.369141 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-92a" transform="translate(186.123047 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-15" transform="translate(225.136719 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-12" transform="translate(288.759766 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-32d" transform="translate(322.451172 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-92b" transform="translate(376.113281 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(434.091797 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(536.845703 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-16" transform="translate(600.46875 0.015625)"/> </g> </g> <g id="f92addb-text_24"> <!-- $\varepsilon = 0{,}15$: il primo punto nella fascia --> <g style="fill: var(--fig-ink)" transform="translate(453.978182 42.112) scale(0.12 -0.12)"> <use xlink:href="#f92addb-DejaVuSerif-Italic-32d" transform="translate(0 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(72.626953 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-13" transform="translate(175.380859 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-f" transform="translate(239.003906 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(270.791016 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-18" transform="translate(334.414062 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-1d" transform="translate(398.037109 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(431.728516 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(463.515625 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4f" transform="translate(495.498047 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(527.480469 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(559.267578 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-55" transform="translate(623.28125 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(671.083984 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-50" transform="translate(703.066406 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-52" transform="translate(797.890625 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(858.095703 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(889.882812 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-58" transform="translate(953.896484 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-51" transform="translate(1018.300781 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(1082.705078 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-52" transform="translate(1122.890625 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1183.095703 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-51" transform="translate(1214.882812 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-48" transform="translate(1279.287109 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4f" transform="translate(1338.466797 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4f" transform="translate(1370.449219 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1402.431641 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1462.050781 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-49" transform="translate(1493.837891 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1530.849609 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-56" transform="translate(1590.46875 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-46" transform="translate(1641.787109 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(1697.792969 0.015625)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1729.775391 0.015625)"/> </g> </g> </g> <g id="f92addb-text_25"> <!-- $x_n = \frac{n-1}{n+1}$: più stretta la fascia, più avanti sta $\bar n$ --> <g style="fill: var(--fig-ink)" transform="translate(217.94 17.07) scale(0.13 -0.13)"> <defs> <path id="f92addb-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-bb" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z M 1372 5113 L 2184 3938 L 1819 3938 L 756 5113 L 1372 5113 z " transform="scale(0.015625)"/> <path id="f92addb-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f92addb-DejaVuSerif-Italic-5b" transform="translate(0 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(56.396484 -14.328076) scale(0.7)"/> <use xlink:href="#f92addb-DejaVuSerif-20" transform="translate(123.039551 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(232.043457 35.046875) scale(0.7)"/> <use xlink:href="#f92addb-DejaVuSerif-8cf" transform="translate(290.401855 35.046875) scale(0.7)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(362.32959 35.046875) scale(0.7)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(232.043457 -35.65625) scale(0.7)"/> <use xlink:href="#f92addb-DejaVuSerif-e" transform="translate(290.401855 -35.65625) scale(0.7)"/> <use xlink:href="#f92addb-DejaVuSerif-14" transform="translate(362.32959 -35.65625) scale(0.7)"/> <use xlink:href="#f92addb-DejaVuSerif-1d" transform="translate(413.115723 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(446.807129 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(478.594238 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(542.60791 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-bb" transform="translate(574.590332 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(638.994629 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-56" transform="translate(670.781738 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(722.100098 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-55" transform="translate(762.285645 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-48" transform="translate(810.088379 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(869.268066 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(909.453613 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(949.63916 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1009.258301 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-4f" transform="translate(1041.04541 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1073.027832 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1132.646973 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-49" transform="translate(1164.434082 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1201.445801 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-56" transform="translate(1261.064941 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-46" transform="translate(1312.383301 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(1368.38916 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1400.371582 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-f" transform="translate(1459.990723 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1491.777832 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-53" transform="translate(1523.564941 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(1587.578613 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-bb" transform="translate(1619.561035 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(1683.965332 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1715.752441 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-59" transform="translate(1775.371582 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(1831.865723 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-51" transform="translate(1891.484863 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(1955.88916 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-4c" transform="translate(1996.074707 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(2028.057129 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-56" transform="translate(2059.844238 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-57" transform="translate(2111.162598 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-44" transform="translate(2151.348145 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-3" transform="translate(2210.967285 0.671875)"/> <use xlink:href="#f92addb-DejaVuSerif-2b1" transform="translate(2298.945801 -0.78125)"/> <use xlink:href="#f92addb-DejaVuSerif-Italic-51" transform="translate(2242.754395 0.671875)"/> <path d="M 232.043457 22.546875 L 232.043457 28.796875 L 406.865723 28.796875 L 406.865723 22.546875 L 232.043457 22.546875 z "/> </g> </g> </g> <defs> <clipPath id="f92addb-p28603b5275"> <rect x="43.96" y="50.112" width="304.363636" height="243.936"/> </clipPath> <clipPath id="f92addb-p065facfaa5"> <rect x="409.196364" y="50.112" width="304.363636" height="243.936"/> </clipPath> </defs> </svg></figure>

L'insieme è $\left\{\frac{n-1}{n+1} : n \in \mathbb{N}\right\}$ (esercizio 22). La fascia rossa è $(1 - \varepsilon, 1]$. Con $\varepsilon = 0{,}4$ il primo punto dentro è quello con $n = 5$; con $\varepsilon = 0{,}15$ bisogna arrivare a $n = 13$. Più la fascia è stretta, più l'indice si sposta a destra, ma un punto dentro c'è sempre, e la formula $\bar n = \lfloor 2/\varepsilon \rfloor$ lo trova per ogni $\varepsilon$. Il punto $1$ invece non viene mai toccato: è il sup, non il massimo.

**Esempio e controesempio**, con lo stesso insieme $A = \left\{\frac{n-1}{n+1}\right\}$:
- $L = 1$ soddisfa (1) e (2): è il sup (esercizio 22).
- $L = \frac32$ soddisfa la (1), ma non la (2): con $\varepsilon = \frac14$ la soglia è $\frac54$, e nessun elemento la supera, perché sono tutti $< 1$. È un maggiorante, ma non il più piccolo.
- $L = 0{,}9$ non soddisfa nemmeno la (1): $x_{20} = \frac{19}{21} \approx 0{,}905 > 0{,}9$.

**Se il candidato sta in $A$, la (2) è gratis.** Se $L \in A$ basta prendere $x = L$: per ogni $\varepsilon > 0$ vale $L > L - \varepsilon$. Quindi un maggiorante che sta in $A$ è il massimo e anche il sup, e la domanda "il sup è un massimo?" diventa "il sup sta in $A$?".

**Insiemi illimitati.** $\sup A = +\infty$ si dimostra così: per ogni $M \in \mathbb{R}$ esiste $x \in A$ con $x > M$, e anche qui l'elemento va trovato in funzione di $M$. Niente massimo.

### Il passo $\varepsilon$, sempre uguale

```
dato ε > 0
voglio     x_n > L − ε              un elemento sopra la soglia
           ⇔ ...                    risolvo in n, un passaggio per riga
           ⇔ n > c(ε)               di solito c(ε) = (qualcosa)/ε
scelgo     n̄ = ⌊c(ε)⌋ + 1           un naturale > c(ε): esiste per Archimede,
                                    la parte intera lo scrive esplicitamente
rileggo    n̄ > c(ε) ⇒ ... ⇒ x_n̄ > L − ε     le equivalenze all'indietro
```

Due dettagli che tornano sempre:
- **Perché $\lfloor c \rfloor + 1 > c$.** Dalla parte intera: $c < \lfloor c \rfloor + 1$. Se $c \geq 0$, anche $\lfloor c \rfloor \geq 0$, quindi $\bar n$ è un naturale. È la versione esplicita di Archimede: invece di "esiste $n > c$" scrivi quale.
- **Bastano gli $\varepsilon$ piccoli.** Se hai la ricetta per ogni $\varepsilon \leq \varepsilon_0$, va bene anche per gli $\varepsilon$ più grandi: dato $\varepsilon > \varepsilon_0$, l'elemento trovato per $\varepsilon_0$ sta sopra $L - \varepsilon_0$, che è più in alto di $L - \varepsilon$. Serve negli intervalli, dove $L - \varepsilon/2$ deve restare dentro l'insieme (esercizi 1, 19, 21, 23).

### Completezza: "c'è un maggiorante" non è "c'è il sup"

“$A$ è limitato superiormente" vuol dire che **un** maggiorante c'è: è l'ipotesi della completezza. La tesi è più forte: fra i maggioranti ce n'è uno **più piccolo di tutti**, ed è un numero reale. Negli esercizi non si invoca l'assioma, perché si trova il candidato $L$ e si dimostrano (1) e (2), e questo dimostra direttamente che $L$ è il sup. L'assioma serve a sapere in anticipo che il sup esiste, anche quando non si sa calcolarlo.

Che non sia gratis lo si vede in $\mathbb{Q}$: $\{q \in \mathbb{Q} : q > 0,\ q^2 < 2\}$ ha tanti maggioranti razionali ($2$, $1{,}5$, $1{,}42$, ...) ma nessuno è il più piccolo, perché il candidato sarebbe $\sqrt2 \notin \mathbb{Q}$. È l'esercizio 26.

### Come si imposta un esercizio di sup e inf

```
1. che insieme è?
   successione {x_n : n ∈ ℕ}  primi termini (n = 0, 1, 2, 3, 4); poi riscrivi x_n:
                              costante ± resto      n/(n+1) = 1 − 1/(n+1)
                              (−1)^n, cos(nπ)       pari e dispari separati
                              scende e poi sale     segno di x_{n+1} − x_n
   disequazione {x : ...}     risolvila, scrivi A come unione di intervalli;
                              sup e inf si leggono agli estremi
   immagine {f(x) : x ∈ I}    attento: A è fatto dei valori f(x), non delle x
   unione A ∪ B               sup(A ∪ B) = il più grande dei due sup,
                              inf(A ∪ B) = il più piccolo dei due inf
   con parametro a            casi secondo il segno di ciò che dipende da a
   dentro ℚ                   sup in ℝ come sempre; poi: sta in ℚ?
2. candidati L (sup) e l (inf)
3. (1): x ≤ L per ogni x ∈ A          una disuguaglianza, catena di ⇔
4. L ∈ A ?   sì: è il massimo, la (2) è gratis
             no: (2) con ε, col passo ε qui sopra
5. lo stesso per l: (3), poi l ∈ A ? oppure (4)
6. illimitato? dato M, un elemento > M scritto in funzione di M
7. verifica: i primi termini, e la ricetta con ε = 0,1 o 0,01
```

Tre trucchi che tornano spesso:

- **Riscrivere per separare la parte costante.** $\frac{n}{n+1} = 1 - \frac{1}{n+1}$ fa vedere subito che gli elementi stanno sotto $1$ e gli si avvicinano.
- **Spezzare pari e dispari** quando c'è $(-1)^n$ o $\cos(n\pi)$: sono due successioni separate, e spesso il sup viene da una e l'inf dall'altra.
- **Confrontare termini consecutivi** quando la successione prima scende e poi sale: il segno di $x_{n+1} - x_n$ dice dove gira, e lì c'è il minimo.

## III tutoraggio: sup e inf con massimi e minimi

Consegna del foglio: «Determinare estremo superiore e inferiore dei seguenti insiemi, specificando se coincidono con, rispettivamente, il massimo e il minimo. Giustificare ogni affermazione!».

### 1) $A = (0, 1)$

> [!tip]- Indizio
> Il candidato per il sup è $1$, per l'inf è $0$. Per la (2): dato $\varepsilon$, un punto fra $1 - \varepsilon$ e $1$ è $1 - \frac\varepsilon2$. Sta ancora in $(0, 1)$?

> [!example]- Soluzione
> *Come si riconosce*: un intervallo, quindi sup e inf sono gli estremi. *Metodo*: le due condizioni con punti espliciti dell'intervallo; l'unica attenzione è che il punto scelto resti dentro $(0, 1)$.
>
> **$\sup A = 1$.**
> 1. (1): ogni $x \in (0, 1)$ ha $x < 1$, per definizione di intervallo.
> 2. (2): sia $\varepsilon > 0$. Cerco $x \in (0, 1)$ con $x > 1 - \varepsilon$.
> 3. Se $\varepsilon \leq 1$, prendo $x = 1 - \frac\varepsilon2$. Sta in $(0, 1)$, perché $0 < \frac\varepsilon2 \leq \frac12$ dà $\frac12 \leq x < 1$.
> 4. Ed è sopra la soglia: $\frac\varepsilon2 < \varepsilon$, quindi $1 - \frac\varepsilon2 > 1 - \varepsilon$.
> 5. Se $\varepsilon > 1$, la soglia $1 - \varepsilon$ è negativa e va bene $x = \frac12$.
>
> **$\inf A = 0$.**
> 1. (3): ogni $x \in A$ ha $x > 0$.
> 2. (4): sia $\varepsilon > 0$. Se $\varepsilon \leq 1$ prendo $x = \frac\varepsilon2$: sta in $\left(0, \frac12\right] \subset A$ ed è $< \varepsilon$. Se $\varepsilon > 1$ va bene $x = \frac12 < \varepsilon$.
>
> **Max e min.** $1 \notin A$ e $0 \notin A$ (intervallo aperto): niente massimo, niente minimo.
>
> *Verifica*: con $\varepsilon = 0{,}01$ la ricetta dà $x = 0{,}995 \in (0, 1)$, sopra $0{,}99$; per l'inf $x = 0{,}005 < 0{,}01$.

### 2) $A = (0, 1]$

> [!tip]- Indizio
> Rispetto all'esercizio 1 cambia una parentesi sola. Cosa cambia per il sup, e cosa resta uguale per l'inf?

> [!example]- Soluzione
> *Come si riconosce*: intervallo chiuso a destra e aperto a sinistra. *Metodo*: a destra l'estremo sta in $A$, quindi è un massimo e la (2) è gratis; a sinistra si rifà la (4) come nell'1.
>
> **$\max A = \sup A = 1$.**
> 1. $1 \in A$ (la parentesi quadra).
> 2. (1): $x \leq 1$ per ogni $x \in A$.
> 3. Un maggiorante che sta in $A$ è il massimo, quindi anche il sup. La (2) vale con $x = 1$: $1 > 1 - \varepsilon$ per ogni $\varepsilon > 0$.
>
> **$\inf A = 0$.**
> 1. (3): $x > 0$ per ogni $x \in A$.
> 2. (4): sia $\varepsilon > 0$. Se $\varepsilon \leq 2$ prendo $x = \frac\varepsilon2 \in (0, 1] = A$, e $\frac\varepsilon2 < \varepsilon$. Se $\varepsilon > 2$ va bene $x = 1 < \varepsilon$.
>
> **Min?** $0 \notin A$: il minimo non esiste.
>
> *Verifica*: $\varepsilon = 0{,}01$ dà $x = 0{,}005 \in A$, sotto $0{,}01$.

### 3) $A = \left\{\frac{1}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Elementi: $n = 0, 1, 2, \dots$ danno $1, \frac12, \frac13, \dots$ È l'esempio della lezione del 15/9 scritto con $n + 1$. Per l'inf risolvi $\frac{1}{n+1} < \varepsilon$ in $n$.

> [!example]- Soluzione
> *Come si riconosce*: successione con $n$ solo al denominatore, quindi decrescente. *Metodo*: il primo termine è il massimo; per l'inf il passo $\varepsilon$ con Archimede.
>
> $A = \left\{1, \frac12, \frac13, \frac14, \dots\right\}$.
>
> **$\max A = \sup A = 1$.**
> 1. Con $n = 0$: $\frac{1}{0+1} = 1 \in A$.
> 2. (1): $n + 1 \geq 1$, e il reciproco gira la disuguaglianza fra positivi, quindi $\frac{1}{n+1} \leq 1$ per ogni $n$.
> 3. Maggiorante che sta in $A$: è il massimo.
>
> **$\inf A = 0$.**
> 1. (3): $\frac{1}{n+1} > 0$ per ogni $n$ (numeratore e denominatore positivi).
> 2. (4): sia $\varepsilon > 0$. Voglio $\frac{1}{n+1} < \varepsilon$.
> 3. $\frac{1}{n+1} < \varepsilon \iff n + 1 > \frac1\varepsilon$ (moltiplico per $\frac{n+1}{\varepsilon} > 0$).
> 4. Scelgo $\bar n = \left\lfloor \frac1\varepsilon \right\rfloor$: è un naturale e $\bar n + 1 > \frac1\varepsilon$ per la proprietà della parte intera.
> 5. Rileggo il passo 3 all'indietro: $x_{\bar n} = \frac{1}{\bar n + 1} < \varepsilon$.
>
> **Min?** $\frac{1}{n+1} = 0$ non ha soluzioni: $0 \notin A$, il minimo non esiste.
>
> *Verifica*: $\varepsilon = 0{,}01$ dà $\bar n = 100$ e $x_{100} = \frac{1}{101} \approx 0{,}0099 < 0{,}01$.

### 4) $A = \left\{\frac{(-1)^n\, n}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Calcola i primi termini: $0, -\frac12, \frac23, -\frac34, \frac45, \dots$ Riscrivi $\frac{n}{n+1} = 1 - \frac{1}{n+1}$ e separa $n$ pari ($x_n \geq 0$) da $n$ dispari ($x_n < 0$). Nella (2) l'indice che scegli deve essere pari: scrivilo come $2k$.

> [!example]- Soluzione
> *Come si riconosce*: c'è $(-1)^n$, che cambia segno a ogni passo. *Metodo*: pari e dispari separati; il sup viene dai pari, l'inf dai dispari.
>
> **Riscrittura.** $\frac{n}{n+1} = 1 - \frac{1}{n+1}$, quindi
> - $n$ pari: $x_n = 1 - \frac{1}{n+1}$, cioè $0, \frac23, \frac45, \frac67, \dots$, che crescono verso $1$;
> - $n$ dispari: $x_n = -1 + \frac{1}{n+1}$, cioè $-\frac12, -\frac34, -\frac56, \dots$, che scendono verso $-1$.
>
> <figure class="fig"><svg role="img" aria-label="Pari e dispari verso sup e inf" xmlns:xlink="http://www.w3.org/1999/xlink" width="539.96pt" height="286.664pt" viewBox="0 0 539.96 286.664" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f6b9780-figure_1"> <g id="f6b9780-patch_1"> <path d="M 0 286.664 L 539.96 286.664 L 539.96 0 L 0 0 L 0 286.664 z " style="fill: none"/> </g> <g id="f6b9780-axes_1"> <g id="f6b9780-patch_2"> <path d="M 32 280.904 L 534.2 280.904 L 534.2 25.88 L 32 25.88 L 32 280.904 z " style="fill: none"/> </g> <g id="f6b9780-matplotlib.axis_1"> <g id="f6b9780-xtick_1"> <g id="f6b9780-line2d_1"> <defs> <path id="f6b9780-mbebe22cbb5" d="M 0 0 L 0 3.5 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f6b9780-mbebe22cbb5" x="39.971429" y="155.994286" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_1"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(35.835804 172.871239) scale(0.13 -0.13)"> <defs> <path id="f6b9780-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-13"/> </g> </g> </g> <g id="f6b9780-xtick_2"> <g id="f6b9780-line2d_2"> <g> <use xlink:href="#f6b9780-mbebe22cbb5" x="199.4" y="155.994286" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_2"> <!-- 10 --> <g style="fill: var(--fig-axis)" transform="translate(191.12875 172.871239) scale(0.13 -0.13)"> <defs> <path id="f6b9780-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-14"/> <use xlink:href="#f6b9780-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f6b9780-xtick_3"> <g id="f6b9780-line2d_3"> <g> <use xlink:href="#f6b9780-mbebe22cbb5" x="358.828571" y="155.994286" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_3"> <!-- 20 --> <g style="fill: var(--fig-axis)" transform="translate(350.557321 172.871239) scale(0.13 -0.13)"> <defs> <path id="f6b9780-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-15"/> <use xlink:href="#f6b9780-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f6b9780-xtick_4"> <g id="f6b9780-line2d_4"> <g> <use xlink:href="#f6b9780-mbebe22cbb5" x="518.257143" y="155.994286" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_4"> <!-- 30 --> <g style="fill: var(--fig-axis)" transform="translate(509.985893 172.871239) scale(0.13 -0.13)"> <defs> <path id="f6b9780-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-16"/> <use xlink:href="#f6b9780-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> </g> <g id="f6b9780-matplotlib.axis_2"> <g id="f6b9780-ytick_1"> <g id="f6b9780-line2d_5"> <defs> <path id="f6b9780-md5e61df32e" d="M 0 0 L -3.5 0 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f6b9780-md5e61df32e" x="32" y="260.085714" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_5"> <!-- $-1$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 265.024191) scale(0.13 -0.13)"> <defs> <path id="f6b9780-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> </g> <g id="f6b9780-ytick_2"> <g id="f6b9780-line2d_6"> <g> <use xlink:href="#f6b9780-md5e61df32e" x="32" y="208.04" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_6"> <!-- $-\frac{1}{2}$ --> <g style="fill: var(--fig-axis)" transform="translate(6.67 213.695) scale(0.13 -0.13)"> <use xlink:href="#f6b9780-DejaVuSerif-8cf" transform="translate(0 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(90.039062 35.046875) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-15" transform="translate(90.039062 -35.65625) scale(0.7)"/> <path d="M 90.039062 22.546875 L 90.039062 28.796875 L 134.575195 28.796875 L 134.575195 22.546875 L 90.039062 22.546875 z "/> </g> </g> </g> <g id="f6b9780-ytick_3"> <g id="f6b9780-line2d_7"> <g> <use xlink:href="#f6b9780-md5e61df32e" x="32" y="103.948571" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_7"> <!-- $\frac{1}{2}$ --> <g style="fill: var(--fig-axis)" transform="translate(17.46 109.603571) scale(0.13 -0.13)"> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(6.25 35.046875) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-15" transform="translate(6.25 -35.65625) scale(0.7)"/> <path d="M 6.25 22.546875 L 6.25 28.796875 L 50.786133 28.796875 L 50.786133 22.546875 L 6.25 22.546875 z "/> </g> </g> </g> <g id="f6b9780-ytick_4"> <g id="f6b9780-line2d_8"> <g> <use xlink:href="#f6b9780-md5e61df32e" x="32" y="51.902857" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f6b9780-text_8"> <!-- $1$ --> <g style="fill: var(--fig-axis)" transform="translate(16.68 56.841334) scale(0.13 -0.13)"> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> </g> </g> <g id="f6b9780-line2d_9"> <path d="M 32 51.902857 L 534.2 51.902857 " clip-path="url(#f6b9780-p60bae92277)" style="fill: none; stroke-dasharray: 4.81,2.08; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.3"/> </g> <g id="f6b9780-line2d_10"> <path d="M 32 260.085714 L 534.2 260.085714 " clip-path="url(#f6b9780-p60bae92277)" style="fill: none; stroke-dasharray: 4.81,2.08; stroke-dashoffset: 0; stroke: var(--fig-steel); stroke-width: 1.3"/> </g> <g id="f6b9780-line2d_11"> <defs> <path id="f6b9780-m39bcc66b0e" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f6b9780-p60bae92277)"> <use xlink:href="#f6b9780-m39bcc66b0e" x="39.971429" y="155.994286" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="71.857143" y="86.6" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="103.742857" y="72.721143" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="135.628571" y="66.773061" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="167.514286" y="63.468571" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="199.4" y="61.365714" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="231.285714" y="59.90989" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="263.171429" y="58.842286" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="295.057143" y="58.025882" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="326.942857" y="57.381353" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="358.828571" y="56.859592" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="390.714286" y="56.428571" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="422.6" y="56.066514" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="454.485714" y="55.758095" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="486.371429" y="55.492217" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f6b9780-m39bcc66b0e" x="518.257143" y="55.260645" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f6b9780-line2d_12"> <defs> <path id="f6b9780-m2ec8bd9d54" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-steel)"/> </defs> <g clip-path="url(#f6b9780-p60bae92277)"> <use xlink:href="#f6b9780-m2ec8bd9d54" x="55.914286" y="208.04" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="87.8" y="234.062857" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="119.685714" y="242.737143" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="151.571429" y="247.074286" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="183.457143" y="249.676571" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="215.342857" y="251.411429" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="247.228571" y="252.650612" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="279.114286" y="253.58" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="311" y="254.302857" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="342.885714" y="254.881143" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="374.771429" y="255.354286" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="406.657143" y="255.748571" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="438.542857" y="256.082198" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="470.428571" y="256.368163" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f6b9780-m2ec8bd9d54" x="502.314286" y="256.616" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="f6b9780-patch_3"> <path d="M 32 280.904 L 32 25.88 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f6b9780-patch_4"> <path d="M 32 155.994286 L 534.2 155.994286 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f6b9780-text_9"> <!-- $\sup A = 1$ (dai pari) --> <g style="fill: var(--fig-accent)" transform="translate(421.288571 43.575543) scale(0.11 -0.11)"> <defs> <path id="f6b9780-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(0 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-58" transform="translate(51.318359 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-53" transform="translate(115.722656 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-24" transform="translate(195.540681 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-20" transform="translate(286.722321 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(389.476228 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(453.099274 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-b" transform="translate(484.886384 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-47" transform="translate(523.900056 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-44" transform="translate(587.913728 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(647.532868 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(679.51529 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-53" transform="translate(711.302399 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-44" transform="translate(775.316071 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-55" transform="translate(834.935212 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(882.737946 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-c" transform="translate(914.720368 0.015625)"/> </g> </g> <g id="f6b9780-text_10"> <!-- $\inf A = -1$ (dai dispari) --> <g style="fill: var(--fig-steel)" transform="translate(400.938571 277.781257) scale(0.11 -0.11)"> <defs> <path id="f6b9780-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(0 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-51" transform="translate(31.982422 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-49" transform="translate(96.386719 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-24" transform="translate(149.20279 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-20" transform="translate(240.384431 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-8cf" transform="translate(343.138337 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(426.927399 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(490.550446 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-b" transform="translate(522.337556 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-47" transform="translate(561.351228 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-44" transform="translate(625.364899 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(684.98404 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(716.966462 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-47" transform="translate(748.753571 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(812.767243 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(844.749665 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-53" transform="translate(896.068024 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-44" transform="translate(960.081696 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-55" transform="translate(1019.700837 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(1067.503571 0.015625)"/> <use xlink:href="#f6b9780-DejaVuSerif-c" transform="translate(1099.485993 0.015625)"/> </g> </g> <g id="f6b9780-patch_5"> <path d="M 79.468513 135.534322 Q 61.93903 144.614804 45.600841 153.078182 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 50.519687 153.007811 L 45.600841 153.078182 L 48.495852 149.100883 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f6b9780-text_11"> <!-- $x_0 = 0$ --> <g style="fill: var(--fig-axis)" transform="translate(79.828571 129.971429) scale(0.11 -0.11)"> <defs> <path id="f6b9780-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-Italic-5b" transform="translate(0 0.78125)"/> <use xlink:href="#f6b9780-DejaVuSerif-13" transform="translate(56.396484 -14.218701) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-20" transform="translate(122.492676 0.78125)"/> <use xlink:href="#f6b9780-DejaVuSerif-13" transform="translate(225.246582 0.78125)"/> </g> </g> <g id="f6b9780-text_12"> <!-- $x_n = \frac{(-1)^n n}{n+1}$: due sottosuccessioni, una per estremo --> <g style="fill: var(--fig-ink)" transform="translate(133.7 17.88) scale(0.12 -0.12)"> <defs> <path id="f6b9780-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f6b9780-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b9780-DejaVuSerif-Italic-5b" transform="translate(0 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(56.396484 -14.32042) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-20" transform="translate(123.039551 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-b" transform="translate(232.043457 45.959219) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-8cf" transform="translate(259.353027 45.959219) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(318.005371 45.959219) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-c" transform="translate(362.541504 45.959219) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(390.486902 74.869219) scale(0.49)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(423.861658 45.959219) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(263.043457 -35.648594) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-e" transform="translate(321.401855 -35.648594) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(393.32959 -35.648594) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-1d" transform="translate(475.194666 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(508.886072 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-47" transform="translate(540.673181 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-58" transform="translate(604.686853 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-48" transform="translate(669.09115 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(728.270837 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(760.057947 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-52" transform="translate(811.376306 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-57" transform="translate(871.581384 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-57" transform="translate(911.766931 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-52" transform="translate(951.952478 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(1012.157556 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-58" transform="translate(1063.475916 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-46" transform="translate(1127.880212 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-46" transform="translate(1183.886072 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-48" transform="translate(1239.891931 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(1299.071619 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(1350.389978 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(1401.708337 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-52" transform="translate(1433.690759 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-51" transform="translate(1493.895837 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(1558.300134 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-f" transform="translate(1590.282556 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(1622.069666 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-58" transform="translate(1653.856775 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-51" transform="translate(1718.261072 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-44" transform="translate(1782.665369 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(1842.284509 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-53" transform="translate(1874.071619 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-48" transform="translate(1938.085291 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-55" transform="translate(1997.264978 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(2045.067712 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-48" transform="translate(2076.854822 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(2136.034509 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-57" transform="translate(2187.352869 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-55" transform="translate(2227.538416 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-48" transform="translate(2275.34115 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-50" transform="translate(2334.520837 0.679531)"/> <use xlink:href="#f6b9780-DejaVuSerif-52" transform="translate(2429.345056 0.679531)"/> <path d="M 232.043457 22.554531 L 232.043457 28.804531 L 468.944666 28.804531 L 468.944666 22.554531 L 232.043457 22.554531 z "/> </g> </g> <g id="f6b9780-legend_1"> <g id="f6b9780-line2d_13"> <g> <use xlink:href="#f6b9780-m39bcc66b0e" x="228.67" y="112.11912" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f6b9780-text_13"> <!-- $n$ pari: $1 - \frac{1}{n+1}$ --> <g style="fill: var(--fig-ink)" transform="translate(248.47 115.96912) scale(0.11 -0.11)"> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(64.404297 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-53" transform="translate(96.191406 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-44" transform="translate(160.205078 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-55" transform="translate(219.824219 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(267.626953 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-1d" transform="translate(299.609375 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(333.300781 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(365.087891 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-8cf" transform="translate(447.675781 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(621.679688 35.046875) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(556.679688 -35.65625) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-e" transform="translate(615.038086 -35.65625) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(686.96582 -35.65625) scale(0.7)"/> <path d="M 556.679688 22.546875 L 556.679688 28.796875 L 731.501953 28.796875 L 731.501953 22.546875 L 556.679688 22.546875 z "/> </g> </g> <g id="f6b9780-line2d_14"> <g> <use xlink:href="#f6b9780-m2ec8bd9d54" x="228.67" y="131.25912" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="f6b9780-text_14"> <!-- $n$ dispari: $-1 + \frac{1}{n+1}$ --> <g style="fill: var(--fig-ink)" transform="translate(248.47 135.10912) scale(0.11 -0.11)"> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(64.404297 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-47" transform="translate(96.191406 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(160.205078 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-56" transform="translate(192.1875 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-53" transform="translate(243.505859 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-44" transform="translate(307.519531 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-55" transform="translate(367.138672 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-4c" transform="translate(414.941406 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-1d" transform="translate(446.923828 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-3" transform="translate(480.615234 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-8cf" transform="translate(512.402344 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(596.191406 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-e" transform="translate(678.779297 0.671875)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(852.783203 35.046875) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-Italic-51" transform="translate(787.783203 -35.65625) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-e" transform="translate(846.141602 -35.65625) scale(0.7)"/> <use xlink:href="#f6b9780-DejaVuSerif-14" transform="translate(918.069336 -35.65625) scale(0.7)"/> <path d="M 787.783203 22.546875 L 787.783203 28.796875 L 962.605469 28.796875 L 962.605469 22.546875 L 787.783203 22.546875 z "/> </g> </g> </g> </g> </g> <defs> <clipPath id="f6b9780-p60bae92277"> <rect x="32" y="25.88" width="502.2" height="255.024"/> </clipPath> </defs> </svg></figure>
>
> **$\sup A = 1$.**
> 1. (1): sui pari $x_n = 1 - \frac{1}{n+1} < 1$, perché si toglie un positivo; sui dispari $x_n < 0 < 1$.
> 2. (2): sia $\varepsilon > 0$. Cerco un $n$ **pari** con $1 - \frac{1}{n+1} > 1 - \varepsilon$, cioè $\frac{1}{n+1} < \varepsilon$, cioè $n + 1 > \frac1\varepsilon$.
> 3. Scrivo $n = 2k$: serve $2k + 1 > \frac1\varepsilon$.
> 4. Scelgo $k = \left\lfloor \frac1\varepsilon \right\rfloor$. Allora $2k + 1 \geq k + 1 > \frac1\varepsilon$ (parte intera).
> 5. Con $\bar n = 2\left\lfloor \frac1\varepsilon \right\rfloor$: $x_{\bar n} = 1 - \frac{1}{\bar n + 1} > 1 - \varepsilon$.
>
> **$\inf A = -1$.**
> 1. (3): sui dispari $x_n = -1 + \frac{1}{n+1} > -1$; sui pari $x_n \geq 0 > -1$.
> 2. (4): sia $\varepsilon > 0$. Cerco $n$ **dispari**, $n = 2k + 1$, con $-1 + \frac{1}{2k+2} < -1 + \varepsilon$, cioè $2k + 2 > \frac1\varepsilon$.
> 3. Con $k = \left\lfloor \frac1\varepsilon \right\rfloor$: $2k + 2 \geq k + 1 > \frac1\varepsilon$. Quindi $\bar n = 2\left\lfloor \frac1\varepsilon \right\rfloor + 1$ va bene.
>
> **Max e min.** $x_n = 1$ o $x_n = -1$ vorrebbe $\frac{1}{n+1} = 0$, impossibile. Niente massimo, niente minimo.
>
> Lo $0$ (con $n = 0$) è un elemento di $A$ ma non c'entra con sup e inf: è il primo termine, non il più piccolo.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $k = 10$; $x_{20} = \frac{20}{21} \approx 0{,}952 > 0{,}9$ e $x_{21} = -\frac{21}{22} \approx -0{,}955 < -0{,}9$. Sui primi $10^4$ termini il più grande è $\approx 0{,}99990$ e il più piccolo $\approx -0{,}99990$: si avvicinano a $\pm 1$ senza toccarli.

### 5) $A = \left\{\frac{1}{2^n} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Elementi: $1, \frac12, \frac14, \frac18, \dots$ Il sup è facile. Per la (4) ti serve $\frac{1}{2^n} < \varepsilon$: confronta $2^n$ con $n + 1$, poi è come l'esercizio 3.

> [!example]- Soluzione
> *Come si riconosce*: successione decrescente con un esponenziale al denominatore. *Metodo*: massimo nel primo termine; per l'inf non si sa ancora risolvere $2^n > \frac1\varepsilon$ con il logaritmo in modo pulito, quindi si confronta con $\frac{1}{n+1}$, già fatto nel 3.
>
> **$\max A = \sup A = 1$.**
> 1. Con $n = 0$, $\frac{1}{2^0} = 1 \in A$.
> 2. (1): $2^n \geq 1$ per ogni $n$, quindi $\frac{1}{2^n} \leq 1$.
>
> **$\inf A = 0$.**
> 1. (3): $\frac{1}{2^n} > 0$ per ogni $n$.
> 2. Un fatto: $2^n \geq n + 1$ per ogni $n \in \mathbb{N}$. Per induzione: con $n = 0$ è $1 \geq 1$; se $2^n \geq n + 1$, allora $2^{n+1} = 2 \cdot 2^n \geq 2(n + 1) = 2n + 2 \geq n + 2$.
> 3. Passando ai reciproci (positivi, il verso gira): $\frac{1}{2^n} \leq \frac{1}{n+1}$.
> 4. (4): sia $\varepsilon > 0$ e $\bar n = \left\lfloor \frac1\varepsilon \right\rfloor$, come nel 3. Allora $\frac{1}{\bar n + 1} < \varepsilon$.
> 5. Per il passo 3: $\frac{1}{2^{\bar n}} \leq \frac{1}{\bar n + 1} < \varepsilon$.
>
> **Min?** $\frac{1}{2^n} = 0$ non ha soluzioni: $0 \notin A$, niente minimo.
>
> Il confronto con $\frac{1}{n+1}$ è il trucco da ricordare: quando una successione va a zero più in fretta di una che sai già gestire, la usi come scalino.
>
> *Verifica*: $\varepsilon = 0{,}01$ dà $\bar n = 100$ e $2^{-100} \approx 7{,}9 \cdot 10^{-31}$, molto sotto $0{,}01$: la ricetta è larga, ma è esplicita e funziona.

### 6) $A = \left\{n + \frac{5}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Calcola $x_0, x_1, x_2, x_3, x_4$: prima scende, poi sale. Il sup è $+\infty$ perché $x_n > n$. Per il minimo indovina il valore dai primi termini, poi dimostra $x_n \geq$ quel valore portando tutto a un'unica frazione: esce una disequazione di secondo grado in $n$.

> [!example]- Soluzione
> *Come si riconosce*: somma di un pezzo che cresce ($n$) e uno che cala ($\frac{5}{n+1}$): all'inizio vince il secondo, poi il primo. *Metodo*: il minimo si indovina dai primi termini e si dimostra con una disuguaglianza; il sup è $+\infty$ con Archimede.
>
> **Primi elementi.**
>
> | $n$ | 0 | 1 | 2 | 3 | 4 |
> | --- | --- | --- | --- | --- | --- |
> | $x_n$ | $5$ | $\frac72$ | $\frac{11}{3}$ | $\frac{17}{4}$ | $5$ |
>
> Il più piccolo è $x_1 = \frac72$. Ipotesi: $\min A = \frac72$.
>
> **$\min A = \inf A = \frac72$.**
> 1. $\frac72 = x_1 \in A$.
> 2. (3): voglio $n + \frac{5}{n+1} \geq \frac72$ per ogni $n$. Moltiplico per $2(n+1) > 0$, che non gira la disuguaglianza: $2n(n+1) + 10 \geq 7(n+1)$.
> 3. Sviluppo e porto tutto a sinistra: $2n^2 + 2n + 10 - 7n - 7 \geq 0$, cioè $2n^2 - 5n + 3 \geq 0$.
> 4. Le radici di $2n^2 - 5n + 3$ sono $n = \frac{5 \pm 1}{4}$, cioè $1$ e $\frac32$: quindi $2n^2 - 5n + 3 = (n - 1)(2n - 3)$.
> 5. La parabola è negativa solo fra le radici, $1 < n < \frac32$, e lì non c'è nessun naturale. Quindi la disuguaglianza vale per ogni $n \in \mathbb{N}$, con l'uguale in $n = 1$.
> 6. Un minorante che sta in $A$ è il minimo, quindi anche l'inf. La (4) vale con $x = \frac72$ stesso.
>
> **$\sup A = +\infty$.**
> 1. $\frac{5}{n+1} > 0$, quindi $x_n > n$.
> 2. Sia $M \in \mathbb{R}$. Scelgo $\bar n = \lfloor \vert M\vert \rfloor + 1$: per la parte intera $\bar n > \vert M\vert \geq M$.
> 3. Allora $x_{\bar n} > \bar n > M$: nessun $M$ è un maggiorante. Niente massimo.
>
> *Verifica*: sui primi $10^4$ termini il minimo è $\frac72$, in $n = 1$.

### 7) $A = \left\{n + \frac{2026}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> È l'esercizio 6 con numeri grandi: il sup è uguale, il minimo no, perché indovinarlo dai primi termini non funziona più. Calcola $x_{n+1} - x_n$ e guarda per quali $n$ è positivo. Ti serve sapere che $44 \cdot 45 = 1980$ e $45 \cdot 46 = 2070$.

> [!example]- Soluzione
> *Come si riconosce*: stessa forma del 6, ma la discesa dura tanti passi. *Metodo*: segno di $x_{n+1} - x_n$, che dice dove la successione smette di scendere.
>
> **$\sup A = +\infty$**, come nel 6: $x_n > n$, e con $\bar n = \lfloor \vert M\vert \rfloor + 1$ si ha $x_{\bar n} > \bar n > M$. Niente massimo.
>
> **Dove gira la successione.**
> 1. $x_{n+1} - x_n = (n + 1) + \frac{2026}{n+2} - n - \frac{2026}{n+1} = 1 + \frac{2026}{n+2} - \frac{2026}{n+1}$.
> 2. Denominatore comune: $\frac{2026}{n+2} - \frac{2026}{n+1} = \frac{2026\,[(n+1) - (n+2)]}{(n+1)(n+2)} = -\frac{2026}{(n+1)(n+2)}$.
> 3. Quindi $x_{n+1} - x_n = 1 - \frac{2026}{(n+1)(n+2)}$.
> 4. $x_{n+1} > x_n \iff \frac{2026}{(n+1)(n+2)} < 1 \iff (n+1)(n+2) > 2026$ (moltiplico per il prodotto, positivo).
> 5. Il prodotto $(n+1)(n+2)$ cresce con $n$. Con $n = 43$: $44 \cdot 45 = 1980 < 2026$, quindi $x_{44} < x_{43}$. Con $n = 44$: $45 \cdot 46 = 2070 > 2026$, quindi $x_{45} > x_{44}$.
> 6. Quindi per $n \leq 43$ la successione scende, da $n = 44$ in poi sale:
> ```
> x_0 > x_1 > ... > x_43 > x_44 < x_45 < x_46 < ...
> ```
>
> **$\min A = \inf A = x_{44}$.**
> 1. Ogni termine è $\geq x_{44}$: quelli prima perché la successione scende fino a lì, quelli dopo perché sale da lì. E $x_{44} \in A$.
> 2. Il valore: $x_{44} = 44 + \frac{2026}{45} = \frac{1980 + 2026}{45} = \frac{4006}{45} \approx 89{,}02$.
>
> <figure class="fig"><svg role="img" aria-label="Minimo dove la successione gira" xmlns:xlink="http://www.w3.org/1999/xlink" width="545.55pt" height="311.016pt" viewBox="0 0 545.55 311.016" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="ff3ffa5-figure_1"> <g id="ff3ffa5-patch_1"> <path d="M 0 311.016 L 545.55 311.016 L 545.55 0 L 0 0 L 0 311.016 z " style="fill: none"/> </g> <g id="ff3ffa5-axes_1"> <g id="ff3ffa5-patch_2"> <path d="M 37.59 268.256 L 539.79 268.256 L 539.79 24.32 L 37.59 24.32 L 37.59 268.256 z " style="fill: none"/> </g> <g id="ff3ffa5-matplotlib.axis_1"> <g id="ff3ffa5-xtick_1"> <g id="ff3ffa5-line2d_1"> <defs> <path id="ff3ffa5-m3ba222d48d" d="M 0 0 L 0 3.5 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#ff3ffa5-m3ba222d48d" x="79.44" y="268.256" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_1"> <!-- 20 --> <g style="fill: var(--fig-axis)" transform="translate(71.16875 285.132953) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-15"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="ff3ffa5-xtick_2"> <g id="ff3ffa5-line2d_2"> <g> <use xlink:href="#ff3ffa5-m3ba222d48d" x="149.19" y="268.256" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_2"> <!-- 30 --> <g style="fill: var(--fig-axis)" transform="translate(140.91875 285.132953) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-16"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="ff3ffa5-xtick_3"> <g id="ff3ffa5-line2d_3"> <g> <use xlink:href="#ff3ffa5-m3ba222d48d" x="246.84" y="268.256" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_3"> <!-- 44 --> <g style="fill: var(--fig-axis)" transform="translate(238.56875 285.132953) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-17"/> <use xlink:href="#ff3ffa5-DejaVuSerif-17" transform="translate(63.625 0)"/> </g> </g> </g> <g id="ff3ffa5-xtick_4"> <g id="ff3ffa5-line2d_4"> <g> <use xlink:href="#ff3ffa5-m3ba222d48d" x="358.44" y="268.256" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_4"> <!-- 60 --> <g style="fill: var(--fig-axis)" transform="translate(350.16875 285.132953) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-19"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="ff3ffa5-xtick_5"> <g id="ff3ffa5-line2d_5"> <g> <use xlink:href="#ff3ffa5-m3ba222d48d" x="428.19" y="268.256" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_5"> <!-- 70 --> <g style="fill: var(--fig-axis)" transform="translate(419.91875 285.132953) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-1a"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="ff3ffa5-xtick_6"> <g id="ff3ffa5-line2d_6"> <g> <use xlink:href="#ff3ffa5-m3ba222d48d" x="497.94" y="268.256" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_6"> <!-- 80 --> <g style="fill: var(--fig-axis)" transform="translate(489.66875 285.132953) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-1b"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="ff3ffa5-text_7"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(284.465 302.132953) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> </g> <g id="ff3ffa5-matplotlib.axis_2"> <g id="ff3ffa5-ytick_1"> <g id="ff3ffa5-line2d_7"> <defs> <path id="ff3ffa5-m0532abc494" d="M 0 0 L -3.5 0 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#ff3ffa5-m0532abc494" x="37.59" y="242.578526" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_8"> <!-- $90$ --> <g style="fill: var(--fig-axis)" transform="translate(13.95 247.517003) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-1c" d="M 2994 2091 Q 2784 1856 2512 1740 Q 2241 1625 1900 1625 Q 1206 1625 804 2044 Q 403 2463 403 3188 Q 403 3897 839 4323 Q 1275 4750 2003 4750 Q 2794 4750 3217 4161 Q 3641 3572 3641 2478 Q 3641 1253 3137 581 Q 2634 -91 1722 -91 Q 1475 -91 1203 -44 Q 931 3 647 97 L 647 872 L 997 872 Q 1038 556 1241 387 Q 1444 219 1784 219 Q 2391 219 2687 676 Q 2984 1134 2994 2091 z M 1978 4441 Q 1534 4441 1298 4117 Q 1063 3794 1063 3188 Q 1063 2581 1298 2256 Q 1534 1931 1978 1931 Q 2422 1931 2658 2245 Q 2894 2559 2894 3150 Q 2894 3772 2656 4106 Q 2419 4441 1978 4441 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-1c" transform="translate(0 0.78125)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(63.623047 0.78125)"/> </g> </g> </g> <g id="ff3ffa5-ytick_2"> <g id="ff3ffa5-line2d_8"> <g> <use xlink:href="#ff3ffa5-m0532abc494" x="37.59" y="178.384842" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_9"> <!-- $100$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 183.323319) scale(0.13 -0.13)"> <defs> <path id="ff3ffa5-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(63.623047 0.78125)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(127.246094 0.78125)"/> </g> </g> </g> <g id="ff3ffa5-ytick_3"> <g id="ff3ffa5-line2d_9"> <g> <use xlink:href="#ff3ffa5-m0532abc494" x="37.59" y="114.191158" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_10"> <!-- $110$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 119.129634) scale(0.13 -0.13)"> <use xlink:href="#ff3ffa5-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-14" transform="translate(63.623047 0.78125)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(127.246094 0.78125)"/> </g> </g> </g> <g id="ff3ffa5-ytick_4"> <g id="ff3ffa5-line2d_10"> <g> <use xlink:href="#ff3ffa5-m0532abc494" x="37.59" y="49.997474" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="ff3ffa5-text_11"> <!-- $120$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 54.93595) scale(0.13 -0.13)"> <use xlink:href="#ff3ffa5-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-15" transform="translate(63.623047 0.78125)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(127.246094 0.78125)"/> </g> </g> </g> </g> <g id="ff3ffa5-line2d_11"> <defs> <path id="ff3ffa5-ma2d5a19eef" d="M 0 2.25 C 0.596707 2.25 1.169055 2.012926 1.59099 1.59099 C 2.012926 1.169055 2.25 0.596707 2.25 0 C 2.25 -0.596707 2.012926 -1.169055 1.59099 -1.59099 C 1.169055 -2.012926 0.596707 -2.25 0 -2.25 C -0.596707 -2.25 -1.169055 -2.012926 -1.59099 -1.59099 C -2.012926 -1.169055 -2.25 -0.596707 -2.25 0 C -2.25 0.596707 -2.012926 1.169055 -1.59099 1.59099 C -1.169055 2.012926 -0.596707 2.25 0 2.25 z " style="stroke: var(--fig-steel)"/> </defs> <g clip-path="url(#ff3ffa5-p36f9b3365e)"> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="60.797386" y="-1" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="65.49" y="20.265662" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="72.465" y="48.071663" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="79.44" y="72.618105" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="86.415" y="94.349474" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="93.39" y="113.632952" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="100.365" y="130.774526" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="107.34" y="146.031225" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="114.315" y="159.620534" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="121.29" y="171.727719" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="128.265" y="182.511579" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="135.24" y="192.109009" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="142.215" y="200.638653" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="149.19" y="208.203844" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="156.165" y="214.895" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="163.14" y="220.791579" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="170.115" y="225.96369" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="177.09" y="230.473432" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="184.065" y="234.376" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="191.04" y="237.720626" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="198.015" y="240.551357" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="204.99" y="242.907725" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="211.965" y="244.825305" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="218.94" y="246.336205" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="225.915" y="247.469474" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="232.89" y="248.251457" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="239.865" y="248.706105" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="246.84" y="248.855242" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="ff3ffa5-line2d_12"> <defs> <path id="ff3ffa5-m1a7acc9771" d="M 0 2.25 C 0.596707 2.25 1.169055 2.012926 1.59099 1.59099 C 2.012926 1.169055 2.25 0.596707 2.25 0 C 2.25 -0.596707 2.012926 -1.169055 1.59099 -1.59099 C 1.169055 -2.012926 0.596707 -2.25 0 -2.25 C -0.596707 -2.25 -1.169055 -2.012926 -1.59099 -1.59099 C -2.012926 -1.169055 -2.25 -0.596707 -2.25 0 C -2.25 0.596707 -2.012926 1.169055 -1.59099 1.59099 C -1.169055 2.012926 -0.596707 2.25 0 2.25 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#ff3ffa5-p36f9b3365e)"> <use xlink:href="#ff3ffa5-m1a7acc9771" x="253.815" y="248.718792" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="260.79" y="248.314983" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="267.765" y="247.660526" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="274.74" y="246.770767" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="281.715" y="245.659823" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="288.69" y="244.340706" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="295.665" y="242.825425" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="302.64" y="241.125084" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="309.615" y="239.249965" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="316.59" y="237.2096" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="323.565" y="235.012842" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="330.54" y="232.667922" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="337.515" y="230.182505" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="344.49" y="227.563732" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="351.465" y="224.818274" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="358.44" y="221.952359" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="365.415" y="218.971817" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="372.39" y="215.882105" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="379.365" y="212.688342" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="386.34" y="209.39533" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="393.315" y="206.007579" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="400.29" y="202.529332" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="407.265" y="198.964582" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="414.24" y="195.317089" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="421.215" y="191.5904" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="428.19" y="187.787861" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="435.165" y="183.912632" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="442.14" y="179.9677" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="449.115" y="175.955892" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="456.09" y="171.879882" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="463.065" y="167.742205" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="470.04" y="163.545263" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="477.015" y="159.291336" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="483.99" y="154.982588" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="490.965" y="150.621074" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="497.94" y="146.208749" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="504.915" y="141.747471" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="511.89" y="137.239011" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="518.865" y="132.685053" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="525.84" y="128.087202" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#ff3ffa5-m1a7acc9771" x="532.815" y="123.446991" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="ff3ffa5-line2d_13"> <defs> <path id="ff3ffa5-me79a5a9afc" d="M 0 6 C 1.591219 6 3.117479 5.367802 4.242641 4.242641 C 5.367802 3.117479 6 1.591219 6 0 C 6 -1.591219 5.367802 -3.117479 4.242641 -4.242641 C 3.117479 -5.367802 1.591219 -6 0 -6 C -1.591219 -6 -3.117479 -5.367802 -4.242641 -4.242641 C -5.367802 -3.117479 -6 -1.591219 -6 0 C -6 1.591219 -5.367802 3.117479 -4.242641 4.242641 C -3.117479 5.367802 -1.591219 6 0 6 z " style="stroke: var(--fig-accent); stroke-width: 2.2"/> </defs> <g clip-path="url(#ff3ffa5-p36f9b3365e)"> <use xlink:href="#ff3ffa5-me79a5a9afc" x="246.84" y="248.855242" style="fill-opacity: 0; stroke: var(--fig-accent); stroke-width: 2.2"/> </g> </g> <g id="ff3ffa5-line2d_14"> <path d="M 37.59 248.855242 L 539.79 248.855242 " clip-path="url(#ff3ffa5-p36f9b3365e)" style="fill: none; stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-accent)"/> </g> <g id="ff3ffa5-patch_3"> <path d="M 37.59 268.256 L 37.59 24.32 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="ff3ffa5-patch_4"> <path d="M 37.59 268.256 L 539.79 268.256 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="ff3ffa5-text_12"> <!-- $\min A = x_{44} = \frac{4006}{45} \approx 89{,}02$ --> <g style="fill: var(--fig-accent)" transform="translate(260.79 260.552758) scale(0.11 -0.11)"> <defs> <path id="ff3ffa5-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-8f0" d="M 4684 1913 L 4684 1453 Q 4375 1172 4092 1040 Q 3809 909 3519 909 Q 3231 909 2713 1106 Q 2666 1125 2641 1134 Q 2609 1147 2541 1172 Q 2081 1350 1784 1350 Q 1497 1350 1226 1236 Q 956 1122 678 884 L 678 1344 Q 994 1625 1273 1753 Q 1553 1881 1844 1881 Q 2144 1881 2688 1675 L 2719 1663 Q 2753 1653 2816 1625 Q 3269 1447 3572 1447 Q 3859 1447 4134 1561 Q 4409 1675 4684 1913 z M 4684 3128 L 4684 2669 Q 4378 2391 4095 2261 Q 3813 2131 3519 2131 Q 3219 2131 2675 2338 L 2644 2350 Q 2609 2363 2541 2388 Q 2081 2566 1784 2566 Q 1497 2566 1226 2452 Q 956 2338 678 2100 L 678 2559 Q 994 2841 1273 2969 Q 1553 3097 1844 3097 Q 2144 3097 2688 2894 L 2719 2881 Q 2753 2869 2816 2841 Q 3269 2663 3572 2663 Q 3859 2663 4134 2777 Q 4409 2891 4684 3128 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-50" transform="translate(0 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4c" transform="translate(94.824219 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-51" transform="translate(126.806641 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-24" transform="translate(207.01529 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-20" transform="translate(298.196931 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-5b" transform="translate(400.950837 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-17" transform="translate(457.347321 -14.323389) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-17" transform="translate(501.883454 -14.323389) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-20" transform="translate(567.979646 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-17" transform="translate(676.983552 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(721.519685 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(766.055817 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-19" transform="translate(810.59195 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-17" transform="translate(721.983552 -35.651562) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-18" transform="translate(766.519685 -35.651562) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-8f0" transform="translate(880.342927 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-1b" transform="translate(983.096833 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-1c" transform="translate(1046.71988 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-f" transform="translate(1110.342927 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(1142.130036 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-15" transform="translate(1205.753083 0.676563)"/> <path d="M 676.983552 22.551563 L 676.983552 28.801563 L 855.128083 28.801563 L 855.128083 22.551563 L 676.983552 22.551563 z "/> </g> </g> <g id="ff3ffa5-text_13"> <!-- $x_n = n + \frac{2026}{n+1}$: dove la differenza cambia segno c'è il minimo --> <g style="fill: var(--fig-ink)" transform="translate(109.59 16.32) scale(0.12 -0.12)"> <defs> <path id="ff3ffa5-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="ff3ffa5-DejaVuSerif-aa" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z M 1441 5113 L 2253 3938 L 1888 3938 L 825 5113 L 1441 5113 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-5b" transform="translate(0 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(56.396484 -14.323389) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-20" transform="translate(123.039551 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(225.793457 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-e" transform="translate(309.162598 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-15" transform="translate(418.166504 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-13" transform="translate(462.702637 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-15" transform="translate(507.23877 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-19" transform="translate(551.774902 36.046875) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(420.166504 -35.651562) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-e" transform="translate(478.524902 -35.651562) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-14" transform="translate(550.452637 -35.651562) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-1d" transform="translate(602.561035 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(636.252441 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-47" transform="translate(668.039551 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-52" transform="translate(732.053223 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-59" transform="translate(792.258301 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-48" transform="translate(848.752441 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(907.932129 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4f" transform="translate(939.719238 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-44" transform="translate(971.70166 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(1031.320801 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-47" transform="translate(1063.10791 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4c" transform="translate(1127.121582 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-49" transform="translate(1159.104004 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-49" transform="translate(1196.115723 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-48" transform="translate(1233.127441 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-55" transform="translate(1292.307129 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-48" transform="translate(1340.109863 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-51" transform="translate(1399.289551 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-5d" transform="translate(1463.693848 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-44" transform="translate(1516.379395 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(1575.998535 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-46" transform="translate(1607.785645 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-44" transform="translate(1663.791504 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-50" transform="translate(1723.410645 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-45" transform="translate(1818.234863 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4c" transform="translate(1882.248535 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-44" transform="translate(1914.230957 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(1973.850098 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-56" transform="translate(2005.637207 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-48" transform="translate(2056.955566 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4a" transform="translate(2116.135254 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-51" transform="translate(2180.148926 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-52" transform="translate(2244.553223 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(2304.758301 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-46" transform="translate(2336.54541 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-a" transform="translate(2392.55127 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-aa" transform="translate(2420.041504 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(2479.221191 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4c" transform="translate(2511.008301 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4f" transform="translate(2542.990723 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(2574.973145 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-50" transform="translate(2606.760254 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4c" transform="translate(2701.584473 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-51" transform="translate(2733.566895 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4c" transform="translate(2797.971191 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-50" transform="translate(2829.953613 0.676563)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-52" transform="translate(2924.777832 0.676563)"/> <path d="M 418.166504 22.551563 L 418.166504 28.801563 L 596.311035 28.801563 L 596.311035 22.551563 L 418.166504 22.551563 z "/> </g> </g> <g id="ff3ffa5-legend_1"> <g id="ff3ffa5-line2d_15"> <g> <use xlink:href="#ff3ffa5-ma2d5a19eef" x="235.89" y="38.73" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="ff3ffa5-text_14"> <!-- $x_{n+1} &lt; x_n$: scende --> <g style="fill: var(--fig-ink)" transform="translate(255.69 42.58) scale(0.11 -0.11)"> <defs> <path id="ff3ffa5-DejaVuSerif-1f" d="M 4684 3188 L 1441 2003 L 4684 825 L 4684 294 L 678 1747 L 678 2266 L 4684 3719 L 4684 3188 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-5b" transform="translate(0 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(56.396484 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-e" transform="translate(114.754883 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-14" transform="translate(186.682617 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-1f" transform="translate(252.778809 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-5b" transform="translate(355.532715 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(411.929199 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-1d" transform="translate(459.607422 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(493.298828 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-56" transform="translate(525.085938 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-46" transform="translate(576.404297 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-48" transform="translate(632.410156 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-51" transform="translate(691.589844 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-47" transform="translate(755.994141 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-48" transform="translate(820.007812 0.015625)"/> </g> </g> <g id="ff3ffa5-line2d_16"> <g> <use xlink:href="#ff3ffa5-m1a7acc9771" x="235.89" y="55.232578" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="ff3ffa5-text_15"> <!-- $x_{n+1} &gt; x_n$: sale --> <g style="fill: var(--fig-ink)" transform="translate(255.69 59.082578) scale(0.11 -0.11)"> <defs> <path id="ff3ffa5-DejaVuSerif-21" d="M 678 3188 L 678 3719 L 4684 2266 L 4684 1747 L 678 294 L 678 825 L 3922 2003 L 678 3188 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-5b" transform="translate(0 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(56.396484 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-e" transform="translate(114.754883 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-14" transform="translate(186.682617 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-21" transform="translate(252.778809 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-5b" transform="translate(355.532715 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-Italic-51" transform="translate(411.929199 -14.984326) scale(0.7)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-1d" transform="translate(459.607422 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-3" transform="translate(493.298828 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-56" transform="translate(525.085938 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-44" transform="translate(576.404297 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-4f" transform="translate(636.023438 0.015625)"/> <use xlink:href="#ff3ffa5-DejaVuSerif-48" transform="translate(668.005859 0.015625)"/> </g> </g> </g> </g> </g> <defs> <clipPath id="ff3ffa5-p36f9b3365e"> <rect x="37.59" y="24.32" width="502.2" height="243.936"/> </clipPath> </defs> </svg></figure>
>
> Da dove viene il $44$: la somma $n + 1 + \frac{2026}{n+1}$ è minima quando i due pezzi sono circa uguali, $(n+1)^2 \approx 2026$, cioè $n + 1 \approx \sqrt{2026} \approx 45$. Serve solo a indovinare; la dimostrazione è quella dei termini consecutivi.
>
> Con lo stesso metodo puoi rifare il 6: $x_{n+1} - x_n = 1 - \frac{5}{(n+1)(n+2)}$, negativo solo per $n = 0$ ($1 \cdot 2 < 5$), positivo da $n = 1$ ($2 \cdot 3 > 5$). Minimo in $n = 1$, come trovato.
>
> *Verifica*: sui primi $10^4$ termini il minimo è $\frac{4006}{45}$, in $n = 44$.

### 8) $A = \left\{x + \frac1x : x \in \mathbb{R},\ x > 0\right\}$

> [!tip]- Indizio
> Qui $x$ è un reale, non un naturale: niente successione. Prova qualche valore ($x = \frac12, 1, 2$). Per dimostrare il minimo parti da un quadrato, che è sempre $\geq 0$.

> [!example]- Soluzione
> *Come si riconosce*: immagine di una funzione su una semiretta, non una successione. *Metodo*: prove con qualche $x$ per il candidato, poi una disuguaglianza che parte da un quadrato.
>
> Prove: $x = \frac12$ dà $\frac52$, $x = 1$ dà $2$, $x = 2$ dà $\frac52$. Ipotesi: minimo $2$, in $x = 1$.
>
> **$\min A = \inf A = 2$.**
> 1. $(x - 1)^2 \geq 0$ per ogni $x$ (un quadrato).
> 2. Sviluppo: $x^2 - 2x + 1 \geq 0$, cioè $x^2 + 1 \geq 2x$.
> 3. Divido per $x > 0$, il verso resta: $x + \frac1x \geq 2$.
> 4. Con $x = 1$ si ottiene $2$, quindi $2 \in A$: è il minimo e l'inf.
>
> **$\sup A = +\infty$.**
> 1. $\frac1x > 0$, quindi $x + \frac1x > x$.
> 2. Dato $M \in \mathbb{R}$, prendo $x = \vert M\vert + 1 > 0$: allora $x + \frac1x > \vert M\vert + 1 > M$. Niente massimo.
>
> Anche da sinistra si scappa: per $x \to 0^+$ il pezzo $\frac1x$ diventa enorme.
>
> *Verifica*: $x = 0{,}9$ dà $2{,}011$, $x = 1{,}1$ dà $2{,}009$: vicino a $1$ si sta appena sopra $2$.

### 9) $A = \left\{\sqrt{n} - \lfloor\sqrt{n}\rfloor : n \in \mathbb{N}\right\}$ [*]

Il testo giusto viene dal foglio del tutoraggio: nella foto della lavagna il centro era coperto, e la versione ricostruita ($\sqrt{n+1} - \sqrt n$) resta sotto come esercizio 10. $\sqrt n - \lfloor \sqrt n \rfloor$ è la **parte frazionaria** di $\sqrt n$, "quello che c'è dopo la virgola": $\lfloor 2{,}7 \rfloor = 2$, quindi la parte frazionaria di $2{,}7$ è $0{,}7$.

> [!tip]- Indizio
> Scrivi qualche elemento: $n = 0, 1, 2, 3, 4, 8, 9, 15$. Quando vale $0$? Si avvicina a $1$ subito prima di quali $n$? Per la (2) prova $n = k^2 + 2k = (k+1)^2 - 1$ e razionalizza $\sqrt{k^2 + 2k} - k$.

> [!example]- Soluzione
> *Come si riconosce*: parte frazionaria, sempre in $[0, 1)$. *Metodo*: l'inf si vede (i quadrati perfetti danno $0$); per la (2) si sceglie una sottosuccessione di indici, quelli subito prima di un quadrato, dove l'elemento si scrive esplicitamente.
>
> Qualche elemento: $n = 0, 1, 4, 9$ (quadrati perfetti) danno $0$; $n = 2$: $\sqrt2 - 1 \approx 0{,}41$; $n = 3$: $\sqrt3 - 1 \approx 0{,}73$; $n = 8$: $\sqrt8 - 2 \approx 0{,}83$; $n = 15$: $\sqrt{15} - 3 \approx 0{,}87$. Subito prima di ogni quadrato la parte frazionaria sale verso $1$, poi sul quadrato crolla a $0$.
>
> **$\min A = \inf A = 0$.**
> 1. Per definizione di parte intera $\lfloor\sqrt n\rfloor \leq \sqrt n$, quindi ogni elemento è $\geq 0$.
> 2. $0 \in A$ (con $n = 0$, o qualunque quadrato perfetto). Minorante che sta in $A$: minimo.
>
> **$\sup A = 1$.**
> 1. (1): $\sqrt n < \lfloor \sqrt n \rfloor + 1$ (proprietà della parte intera), quindi $\sqrt n - \lfloor\sqrt n\rfloor < 1$.
> 2. (2): per $k \geq 1$ prendo $n = k^2 + 2k$. Siccome $k^2 \leq k^2 + 2k < k^2 + 2k + 1 = (k+1)^2$, vale $k \leq \sqrt n < k + 1$, cioè $\lfloor\sqrt n\rfloor = k$.
> 3. Razionalizzo, con $(a - b)(a + b) = a^2 - b^2$:
> $$
> \sqrt{k^2 + 2k} - k = \frac{(k^2 + 2k) - k^2}{\sqrt{k^2 + 2k} + k} = \frac{2k}{\sqrt{k^2 + 2k} + k}
> $$
> 4. Il denominatore è $< (k + 1) + k = 2k + 1$, perché $\sqrt{k^2 + 2k} < k + 1$ (passo 2). Un denominatore più piccolo dà una frazione più grande: l'elemento è $> \frac{2k}{2k+1} = 1 - \frac{1}{2k+1}$.
> 5. Sia $\varepsilon > 0$. Voglio $1 - \frac{1}{2k+1} \geq 1 - \varepsilon$, cioè $2k + 1 \geq \frac1\varepsilon$.
> 6. Scelgo $k = \left\lfloor \frac1\varepsilon \right\rfloor + 1 \geq 1$: $2k + 1 > k > \frac1\varepsilon$.
> 7. Con $\bar n = k^2 + 2k$ l'elemento è $> 1 - \frac{1}{2k+1} > 1 - \varepsilon$.
>
> **Max?** Ogni elemento è $< 1$ strettamente, quindi $1 \notin A$: niente massimo.
>
> Perché ha l'asterisco: bisogna maneggiare la parte intera e indovinare quali $n$ avvicinano l'elemento a $1$.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $k = 11$, $\bar n = 143$, e $\sqrt{143} - 11 \approx 0{,}958 > 0{,}9$. Sui primi $10^4$ termini il più grande è $\approx 0{,}995$, in $n = 9999 = 100^2 - 1$.

## Altri esercizi già svolti

### 10) $A = \left\{\sqrt{n+1} - \sqrt{n} : n \in \mathbb{N}\right\}$ (esercizio in più)

Non è del foglio: era la versione ricostruita dalla foto, prima che arrivasse il testo del tutoraggio. Resta perché allena la razionalizzazione, che serve nei limiti ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)).

> [!tip]- Indizio
> La differenza di due radici si gestisce male. Moltiplica e dividi per $\sqrt{n+1} + \sqrt{n}$: diventa una frazione con $1$ al numeratore. Poi è un esercizio 3 travestito.

> [!example]- Soluzione
> *Come si riconosce*: differenza di due radici vicine, che a occhio non dice né il segno né dove va. *Metodo*: razionalizzare, poi lo schema dell'esercizio 3.
>
> **Razionalizzazione.** Con $(a - b)(a + b) = a^2 - b^2$:
> $$
> \sqrt{n+1} - \sqrt{n} = \frac{(\sqrt{n+1} - \sqrt{n})(\sqrt{n+1} + \sqrt{n})}{\sqrt{n+1} + \sqrt{n}} = \frac{(n+1) - n}{\sqrt{n+1} + \sqrt{n}} = \frac{1}{\sqrt{n+1} + \sqrt{n}}
> $$
> Il denominatore cresce con $n$, quindi gli elementi decrescono: $x_0 = 1$, $x_1 = \sqrt2 - 1 \approx 0{,}41$, $x_2 = \sqrt3 - \sqrt2 \approx 0{,}32$, ...
>
> **$\max A = \sup A = 1$.**
> 1. Per $n = 0$: $x_0 = \sqrt1 - \sqrt0 = 1 \in A$.
> 2. (1): $\sqrt{n+1} + \sqrt{n} \geq 1$, quindi $x_n \leq 1$.
>
> **$\inf A = 0$.**
> 1. (3): $x_n > 0$, perché è $1$ diviso un positivo.
> 2. Per $n \geq 1$: $\sqrt{n+1} + \sqrt n > \sqrt n$, quindi $x_n < \frac{1}{\sqrt n}$.
> 3. (4): sia $\varepsilon > 0$. Basta $\frac{1}{\sqrt n} < \varepsilon$, cioè $\sqrt n > \frac1\varepsilon$, cioè $n > \frac{1}{\varepsilon^2}$ (elevo al quadrato due positivi, il verso resta).
> 4. Scelgo $\bar n = \left\lfloor \frac{1}{\varepsilon^2} \right\rfloor + 1 \geq 1$: $\bar n > \frac{1}{\varepsilon^2}$, e quindi $x_{\bar n} < \frac{1}{\sqrt{\bar n}} < \varepsilon$.
>
> **Min?** $x_n = 0$ vorrebbe $1 = 0$: $0 \notin A$, niente minimo.
>
> Senza razionalizzare, $\sqrt{n+1} - \sqrt n$ sembra una forma "infinito meno infinito" e non si vede né che è positiva né che va a zero.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $\bar n = 101$ e $\sqrt{102} - \sqrt{101} \approx 0{,}0496 < 0{,}1$.

### 11) $A = \left\{\ln\left(1 + (-1)^n \frac{n}{n+1}\right) : n \in \mathbb{N}\right\}$ (III tutoraggio, es. 1)

Dal foglio "Successioni e loro limiti" (<span class="src">III tutoraggio, pagina 1</span>): «Determinare l'estremo superiore e inferiore del seguente insieme, specificando se coincidono, rispettivamente, con il massimo e il minimo. Ogni affermazione deve essere giustificata.»

> [!tip]- Indizio
> Separa $n$ pari e dispari e semplifica l'argomento del logaritmo in ciascun caso. Il logaritmo è crescente: sup e inf dell'argomento diventano sup e inf del logaritmo. Nella (2), per togliere il logaritmo applica l'esponenziale, che è crescente anche lui.

> [!example]- Soluzione
> *Come si riconosce*: $(-1)^n$ dentro un logaritmo. *Metodo*: pari e dispari; poi la monotonia di $\ln$ e di $e^x$ ([Funzioni elementari](/uni/analisi-1/funzioni-elementari/)) per passare dall'argomento al logaritmo e indietro.
>
> **Pari**, $n = 2k$: l'argomento è $1 + \frac{n}{n+1} = \frac{2n + 1}{n + 1} = 2 - \frac{1}{n+1}$. Per $n = 0$ vale $1$ (elemento $\ln 1 = 0$), poi cresce verso $2$ senza raggiungerlo.
>
> **Dispari**, $n = 2k + 1$: l'argomento è $1 - \frac{n}{n+1} = \frac{1}{n+1}$, che va verso $0$. L'elemento è $\ln\frac{1}{n+1} = -\ln(n+1)$: $-\ln 2, -\ln 4, -\ln 6, \dots$
>
> **$\sup A = \ln 2$.**
> 1. (1) sui pari: l'argomento è $< 2$, e $\ln$ è crescente, quindi l'elemento è $< \ln 2$.
> 2. (1) sui dispari: $n + 1 \geq 2$, quindi $-\ln(n+1) \leq -\ln 2 < 0 < \ln 2$.
> 3. (2): sia $\varepsilon > 0$. Cerco $n$ pari con $\ln\left(2 - \frac{1}{n+1}\right) > \ln 2 - \varepsilon$.
> 4. Applico $e^x$, crescente, ai due membri, con $e^{\ln y} = y$: $\iff 2 - \frac{1}{n+1} > e^{\ln 2 - \varepsilon} = 2e^{-\varepsilon}$.
> 5. $\iff \frac{1}{n+1} < 2 - 2e^{-\varepsilon} = 2\left(1 - e^{-\varepsilon}\right)$, che è positivo perché $e^{-\varepsilon} < 1$ per $\varepsilon > 0$.
> 6. $\iff n + 1 > c$, con $c = \frac{1}{2(1 - e^{-\varepsilon})}$.
> 7. Pari: $n = 2k$ con $k = \lfloor c \rfloor + 1$. Allora $n + 1 = 2k + 1 > k > c$, e rileggendo all'indietro l'elemento è $> \ln 2 - \varepsilon$.
>
> **Max?** $\ln 2$ richiederebbe argomento $2$, cioè $\frac{1}{n+1} = 0$: impossibile. Niente massimo.
>
> **$\inf A = -\infty$.**
> 1. Dato $M \in \mathbb{R}$, cerco $n$ dispari con $-\ln(n+1) < M$, cioè $\ln(n+1) > -M$, cioè $n + 1 > e^{-M}$ ($e^x$ crescente).
> 2. Con $n = 2k + 1$ e $k = \lfloor e^{-M} \rfloor + 1$: $n + 1 = 2k + 2 > k > e^{-M}$.
> 3. Nessun $M$ è un minorante: niente minimo.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $c \approx 5{,}25$, $k = 6$, $n = 12$, e $\ln\left(2 - \frac{1}{13}\right) \approx 0{,}654$, sopra $\ln 2 - 0{,}1 \approx 0{,}593$. Sui primi $10^4$ termini il più grande è $\approx 0{,}69310$, appena sotto $\ln 2 \approx 0{,}69315$.

### 12) $A = \left\{\frac{5n - 2}{2n + 1} : n \in \mathbb{N}\right\}$ (esercitazione 3, es. 4.1)

Dall'esercitazione 3 del tutor, "Esercizi sulle successioni" (<span class="src">esercitazione 3, pagina 11</span>). Il tutor apre con il ripasso delle caratterizzazioni: $s = \sup A$ se e solo se (i) $s \geq a$ per ogni $a \in A$ ($s$ è un maggiorante) e (ii) per ogni $\varepsilon > 0$ esiste $a \in A$ con $s - \varepsilon < a$ ($s$ è il più piccolo dei maggioranti); allo stesso modo l'inf; e la proprietà di Archimede nella forma “$\forall x, y > 0\ \exists n \in \mathbb{N} : nx > y$".

> [!tip]- Indizio
> È una funzione omografica in $n$ (rapporto di due polinomi di primo grado): fai la divisione e scrivi $x_n = \frac52 - \frac{\text{qualcosa}}{2n+1}$. Si vede subito che cresce verso $\frac52$.

> [!example]- Soluzione
> *Come si riconosce*: rapporto di due polinomi di primo grado in $n$. *Metodo*: la divisione separa la costante $\frac52$ dal resto, poi il passo $\varepsilon$ sul resto.
>
> **Primi elementi** (come il tutor): $x_0 = -2$, $x_1 = \frac33 = 1$, $x_2 = \frac85$, $x_3 = \frac{13}{7}$. Crescono.
>
> **Riscrittura** (la divisione del tutor):
> 1. $5n - 2 = \frac52(2n + 1) - \frac52 - 2 = \frac52(2n + 1) - \frac92$.
> 2. Divido per $2n + 1$: $x_n = \frac52 - \frac{9}{2(2n + 1)} = \frac52 - \frac{9}{4n + 2}$.
> 3. Al crescere di $n$ si toglie da $\frac52$ una quantità positiva sempre più piccola: la successione cresce verso $\frac52$.
>
> **$\min A = \inf A = -2$** (claim 1 del tutor).
> 1. $-2 = x_0 \in A$.
> 2. (3): moltiplico per $2n + 1 > 0$: $-2 \leq \frac{5n - 2}{2n + 1} \iff -4n - 2 \leq 5n - 2 \iff 9n \geq 0$, vero per ogni $n \in \mathbb{N}$.
> 3. Minorante che sta in $A$: è il minimo.
>
> **$\sup A = \frac52$** (claim 2).
> 1. (1): dalla riscrittura $x_n = \frac52 - \frac{9}{4n+2} < \frac52$, perché si toglie un positivo.
> 2. (2): sia $\varepsilon > 0$. Voglio $\frac52 - \frac{9}{4n + 2} > \frac52 - \varepsilon$.
> 3. $\iff \frac{9}{4n + 2} < \varepsilon$ (tolgo $\frac52$ e cambio segno, il verso gira).
> 4. $\iff 4n + 2 > \frac9\varepsilon$ (moltiplico per $\frac{4n+2}{\varepsilon} > 0$).
> 5. $\iff n > \frac{9}{4\varepsilon} - \frac12$.
> 6. Scelgo $\bar n = \left\lfloor \frac{9}{4\varepsilon} \right\rfloor + 1$: $\bar n > \frac{9}{4\varepsilon} > \frac{9}{4\varepsilon} - \frac12$. Rileggendo all'indietro, $x_{\bar n} > \frac52 - \varepsilon$.
>
> Il tutor chiude il passo 4 con la sua forma di Archimede: esiste $k \in \mathbb{N}$ con $k\varepsilon > 9$; allora con $\bar n = k$ si ha $\varepsilon(4k + 2) > k\varepsilon > 9$. È la stessa cosa, con un $\bar n$ non scritto.
>
> **Non è un massimo**: $x_n = \frac52$ richiederebbe $\frac{9}{4n + 2} = 0$, impossibile.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $\bar n = 23$ e $x_{23} = \frac{113}{47} \approx 2{,}404 > 2{,}4$.

### 13) $B = \left\{\frac{2n}{n^2 + 1} : n \in \mathbb{Z}\right\}$ (tutoraggio del 13/10, es. 1.1)

Dal quaderno degli esercizi, 13/10. Attenzione: $n \in \mathbb{Z}$, anche negativo.

> [!tip]- Indizio
> Guarda cosa succede cambiando $n$ in $-n$. Poi prova a dimostrare direttamente $\frac{2n}{n^2+1} \leq 1$: portando tutto da una parte esce un quadrato.

> [!example]- Soluzione
> *Come si riconosce*: indice in $\mathbb{Z}$ e una frazione dispari in $n$. *Metodo*: simmetria per ridursi a $n \geq 0$, candidati dai primi termini, disuguaglianza col quadrato.
>
> **Simmetria.** $b_{-n} = \frac{2(-n)}{(-n)^2 + 1} = -\frac{2n}{n^2 + 1} = -b_n$: gli elementi con $n$ negativo sono gli opposti di quelli con $n$ positivo.
>
> **Primi elementi**: $b_0 = 0$, $b_1 = 1$, $b_2 = \frac45$, $b_3 = \frac35$, $b_4 = \frac{8}{17}$. Ipotesi: $\max B = 1$, e per simmetria $\min B = -1$.
>
> **$\max B = \sup B = 1$.**
> 1. $1 = b_1 \in B$.
> 2. (1): moltiplico per $n^2 + 1 > 0$: $\frac{2n}{n^2 + 1} \leq 1 \iff 2n \leq n^2 + 1 \iff 0 \leq n^2 - 2n + 1 = (n - 1)^2$, vero per ogni $n \in \mathbb{Z}$.
> 3. Maggiorante in $B$: massimo. La (2) è gratis con $x = 1$.
>
> **$\min B = \inf B = -1$.**
> 1. $-1 = b_{-1} \in B$.
> 2. (3): $\frac{2n}{n^2 + 1} \geq -1 \iff 2n \geq -n^2 - 1 \iff (n + 1)^2 \geq 0$, vero.
>
> Sul quaderno hai fatto un'altra strada, giusta anche lei: limitatezza con $\vert b_n\vert = \frac{2\vert n\vert}{n^2 + 1} < \frac{2}{\vert n\vert} \leq 2$ (lì il secondo segno è $\leq$, non $<$: per $\vert n\vert = 1$ vale $2$), poi la monotonia per $n \geq 1$. Con il quadrato è più corto, e dà subito max e min.
>
> *Verifica*: per $\vert n\vert \leq 10^4$ il più grande è $1$ e il più piccolo $-1$.

### 14) $A = \left\{\frac{3n\cos(n\pi) - 1}{2n} : n \geq 1\right\}$ (tutoraggio del 13/10, es. 1.3)

Dal quaderno degli esercizi, 13/10 (lì c'è solo il testo).

> [!tip]- Indizio
> $\cos(n\pi)$ vale $1$ per $n$ pari e $-1$ per $n$ dispari. Separa i due casi e riscrivi ciascuno come "costante meno qualcosa".

> [!example]- Soluzione
> *Come si riconosce*: $\cos(n\pi)$ è un $(-1)^n$ travestito. *Metodo*: pari e dispari, ciascuno come costante più resto.
>
> **$\cos(n\pi) = (-1)^n$**: sul cerchio, $n\pi$ è il punto $(1, 0)$ per $n$ pari e $(-1, 0)$ per $n$ dispari.
>
> **Pari**: $x_n = \frac{3n - 1}{2n} = \frac32 - \frac{1}{2n}$. Vale $\frac54$ per $n = 2$, poi cresce verso $\frac32$ senza raggiungerlo.
>
> **Dispari**: $x_n = \frac{-3n - 1}{2n} = -\frac32 - \frac{1}{2n}$. Vale $-2$ per $n = 1$, poi cresce verso $-\frac32$ ($-\frac53$, $-\frac85$, ...).
>
> **$\sup A = \frac32$, non è un massimo.**
> 1. (1) pari: $x_n = \frac32 - \frac{1}{2n} < \frac32$. Dispari: $x_n < 0 < \frac32$.
> 2. (2): sia $\varepsilon > 0$. Cerco $n$ pari con $\frac32 - \frac{1}{2n} > \frac32 - \varepsilon$, cioè $\frac{1}{2n} < \varepsilon$, cioè $n > \frac{1}{2\varepsilon}$.
> 3. Pari: $n = 2k$ con $k = \left\lfloor \frac1\varepsilon \right\rfloor + 1$. Allora $k > \frac1\varepsilon$, quindi $2k > \frac2\varepsilon > \frac{1}{2\varepsilon}$.
> 4. $\frac32 = x_n$ chiederebbe $\frac{1}{2n} = 0$: mai. Niente massimo.
>
> **$\inf A = \min A = -2$.**
> 1. $x_1 = -2 \in A$.
> 2. (3) dispari: $n \geq 1$ dà $\frac{1}{2n} \leq \frac12$, quindi $x_n = -\frac32 - \frac{1}{2n} \geq -\frac32 - \frac12 = -2$. Pari: $x_n \geq \frac54 > -2$.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $k = 11$, $n = 22$, $x_{22} = \frac{65}{44} \approx 1{,}477 > 1{,}4$. Sui primi $10^4$ termini il più grande è $\approx 1{,}49995$ e il più piccolo $-2$.

## Foglio 1, esercizio 1

Dal foglio di esercizi 1 del 2015-16 (<span class="src">foglio 1, pagina 1</span>): «Dite se i seguenti insiemi sono limitati inferiormente/superiormente, limitati. In caso affermativo, determinate l'estremo superiore e l'estremo inferiore. Dite se sono massimo e/o minimo, rispettivamente.» Qui ci sono ii, iii, v, vii, ix, x; i, iv, vi, viii stanno nella nota di teoria.

### 15) $A = \left\{x_n = \frac{3n - 2}{n} : n \geq 1\right\}$ (foglio 1, es. 1 ii)

> [!tip]- Indizio
> Dividi: $\frac{3n-2}{n} = 3 - \frac2n$. Dove parte, dove va?

> [!example]- Soluzione
> *Come si riconosce*: rapporto di polinomi di primo grado, come il 12. *Metodo*: separare la costante, poi il primo termine è il minimo e il sup si fa con $\varepsilon$.
>
> **Riscrittura.** $x_n = \frac{3n}{n} - \frac2n = 3 - \frac2n$. Primi termini: $x_1 = 1$, $x_2 = 2$, $x_3 = \frac73$, $x_4 = \frac52$. Crescono, perché $\frac2n$ cala.
>
> **$\min A = \inf A = 1$.**
> 1. $x_1 = 1 \in A$.
> 2. (3): $n \geq 1$ dà $\frac2n \leq 2$, quindi $x_n = 3 - \frac2n \geq 3 - 2 = 1$.
>
> **$\sup A = 3$.**
> 1. (1): $\frac2n > 0$, quindi $x_n < 3$.
> 2. (2): sia $\varepsilon > 0$. Voglio $3 - \frac2n > 3 - \varepsilon \iff \frac2n < \varepsilon \iff n > \frac2\varepsilon$.
> 3. Scelgo $\bar n = \left\lfloor \frac2\varepsilon \right\rfloor + 1 \geq 1$: $\bar n > \frac2\varepsilon$, quindi $x_{\bar n} > 3 - \varepsilon$.
>
> **Max?** $x_n = 3$ vorrebbe $\frac2n = 0$: impossibile. $A$ è limitato, $1 \leq x_n < 3$.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $\bar n = 21$ e $x_{21} = \frac{61}{21} \approx 2{,}905 > 2{,}9$.

### 16) $A = \{x_n = n^2 - 2n - 3 : n \geq 1\}$ (foglio 1, es. 1 iii)

> [!tip]- Indizio
> Completa il quadrato: $n^2 - 2n - 3 = (n - 1)^2 - 4$. Per l'illimitatezza ti basta una stima dal basso semplice, come $k^2 \geq k$ per $k \in \mathbb{N}$.

> [!example]- Soluzione
> *Come si riconosce*: un polinomio di secondo grado in $n$ con coefficiente direttore positivo: ha un minimo e cresce senza limite. *Metodo*: completare il quadrato per il minimo; per il sup, una stima dal basso che si risolve in $n$.
>
> **Riscrittura.** $(n - 1)^2 = n^2 - 2n + 1$, quindi $n^2 - 2n - 3 = (n - 1)^2 - 4$.
>
> **$\min A = \inf A = -4$.**
> 1. $(n - 1)^2 \geq 0$, quindi $x_n \geq -4$ per ogni $n$.
> 2. $x_1 = 0 - 4 = -4 \in A$. Minorante in $A$: minimo.
>
> **$\sup A = +\infty$.**
> 1. Per $n \geq 1$, $k = n - 1$ è un naturale, e $k^2 \geq k$ (per $k = 0$ è $0 \geq 0$; per $k \geq 1$, moltiplico $k \geq 1$ per $k > 0$).
> 2. Quindi $x_n = (n-1)^2 - 4 \geq (n - 1) - 4 = n - 5$.
> 3. Dato $M \in \mathbb{R}$, scelgo $\bar n = \lfloor \vert M\vert \rfloor + 6$. Allora $\bar n - 5 = \lfloor \vert M\vert \rfloor + 1 > \vert M\vert \geq M$.
> 4. Per il passo 2, $x_{\bar n} \geq \bar n - 5 > M$. Nessun maggiorante: illimitato superiormente, niente massimo.
>
> $A$ è limitato inferiormente ma non superiormente.
>
> *Verifica*: primi termini $-4, -3, 0, 5, 12$; con $M = 10$ la ricetta dà $\bar n = 16$ e $x_{16} = 221 > 10$.

### 17) $A = \left\{x_n = (-1)^n \frac{3n + 1}{n} : n \geq 1\right\}$ (foglio 1, es. 1 v)

> [!tip]- Indizio
> È parente dell'esercizio 1 iv della nota di teoria, $(-1)^n\frac{3n-1}{n}$, ma il segno davanti a $1$ cambia tutto: $\frac{3n+1}{n} = 3 + \frac1n$ **scende**. Su pari e dispari, qual è il primo termine?

> [!example]- Soluzione
> *Come si riconosce*: $(-1)^n$ per una successione positiva. *Metodo*: pari e dispari; qui le due sottosuccessioni si allontanano da $\pm 3$ all'inizio, quindi gli estremi sono i primi termini.
>
> **Riscrittura.** $\frac{3n + 1}{n} = 3 + \frac1n$, che scende verso $3$.
> - $n$ pari ($n \geq 2$): $x_n = 3 + \frac1n$, cioè $\frac72, \frac{13}{4}, \frac{19}{6}, \dots$, che scendono verso $3$;
> - $n$ dispari: $x_n = -3 - \frac1n$, cioè $-4, -\frac{10}{3}, -\frac{16}{5}, \dots$, che salgono verso $-3$.
>
> **$\max A = \sup A = \frac72$.**
> 1. $x_2 = \frac72 \in A$.
> 2. (1) pari: $n \geq 2$ dà $\frac1n \leq \frac12$, quindi $x_n \leq 3 + \frac12 = \frac72$. Dispari: $x_n < 0 < \frac72$.
> 3. Maggiorante in $A$: massimo. La (2) è gratis con $x = \frac72$.
>
> **$\min A = \inf A = -4$.**
> 1. $x_1 = -4 \in A$.
> 2. (3) dispari: $n \geq 1$ dà $\frac1n \leq 1$, quindi $x_n = -3 - \frac1n \geq -4$. Pari: $x_n > 0 > -4$.
>
> Il confronto con l'1 iv: lì $3 - \frac1n$ **sale** verso $3$, e $\pm 3$ sono sup e inf senza max né min. Qui $3 + \frac1n$ **scende** verso $3$, quindi $\pm 3$ sono solo i valori a cui le sottosuccessioni si avvicinano, e gli estremi sono i primi termini. Il limite di una sottosuccessione non è automaticamente il sup.
>
> *Verifica*: sui primi $10^4$ termini il più grande è $3{,}5$ (in $n = 2$) e il più piccolo $-4$ (in $n = 1$).

### 18) $A = \left\{x_n = (1 - \cos n\pi)\,n + \frac1n : n \geq 1\right\}$ (foglio 1, es. 1 vii)

> [!tip]- Indizio
> $\cos n\pi = (-1)^n$, quindi $1 - \cos n\pi$ vale $0$ sui pari e $2$ sui dispari. Scrivi le due sottosuccessioni.

> [!example]- Soluzione
> *Come si riconosce*: $\cos n\pi$, cioè pari e dispari. *Metodo*: una sottosuccessione va a $+\infty$ (sup), l'altra scende verso $0$ (inf, con $\varepsilon$).
>
> **Pari**: $1 - \cos n\pi = 1 - 1 = 0$, quindi $x_n = \frac1n$: $\frac12, \frac14, \frac16, \dots$
>
> **Dispari**: $1 - \cos n\pi = 1 + 1 = 2$, quindi $x_n = 2n + \frac1n$: $3, \frac{19}{3}, \frac{51}{5}, \dots$
>
> **$\inf A = 0$.**
> 1. (3): sui pari $\frac1n > 0$, sui dispari $2n + \frac1n > 0$.
> 2. (4): sia $\varepsilon > 0$. Cerco $n$ pari con $\frac1n < \varepsilon$, cioè $n > \frac1\varepsilon$.
> 3. Pari: $n = 2k$ con $k = \left\lfloor \frac1\varepsilon \right\rfloor + 1$. Allora $2k > k > \frac1\varepsilon$, quindi $x_{2k} = \frac{1}{2k} < \varepsilon$.
>
> **Min?** $x_n = 0$ non succede mai (tutti positivi): niente minimo.
>
> **$\sup A = +\infty$.**
> 1. Sui dispari $x_n = 2n + \frac1n > 2n > n$.
> 2. Dato $M \in \mathbb{R}$: $n = 2k + 1$ con $k = \lfloor \vert M\vert \rfloor + 1$. Allora $n > k > \vert M\vert \geq M$, e $x_n > n > M$.
> 3. Illimitato superiormente, niente massimo.
>
> $A$ è limitato inferiormente, non superiormente.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $k = 11$ e $x_{22} = \frac{1}{22} \approx 0{,}045 < 0{,}1$. Sui primi $10^4$ termini il più piccolo è $\approx 0{,}0001$ (in $n = 9998$).

### 19) $A = \{\vert x\vert : x^2 < -2x + 3\}$ (foglio 1, es. 1 ix)

> [!tip]- Indizio
> Prima risolvi la disequazione: ti dà le $x$ ammesse. Ma $A$ non è l'insieme delle $x$: è l'insieme dei loro **moduli**. Quali valori prende $\vert x\vert$ quando $x$ varia nelle soluzioni?

> [!example]- Soluzione
> *Come si riconosce*: immagine di un insieme di soluzioni tramite $\vert\cdot\vert$. *Metodo*: risolvere la disequazione, poi calcolare l'immagine pezzo per pezzo, poi sup e inf dell'immagine.
>
> **La disequazione.**
> 1. $x^2 < -2x + 3 \iff x^2 + 2x - 3 < 0$ (porto tutto a sinistra).
> 2. $x^2 + 2x - 3 = (x + 3)(x - 1)$: radici $-3$ e $1$.
> 3. Parabola verso l'alto, negativa fra le radici: $-3 < x < 1$.
>
> **L'immagine.**
> 1. Per $x \in (-3, 0]$: $\vert x\vert = -x$, che prende tutti i valori in $[0, 3)$.
> 2. Per $x \in [0, 1)$: $\vert x\vert = x$, valori in $[0, 1)$, già contenuti nel pezzo prima.
> 3. Quindi $A = [0, 3)$. Per ogni $y \in [0, 3)$ l'elemento si ottiene da $x = -y \in (-3, 0]$.
>
> **$\min A = \inf A = 0$**: $0 = \vert 0\vert \in A$ e ogni modulo è $\geq 0$.
>
> **$\sup A = 3$.**
> 1. (1): ogni $y \in A$ è $< 3$.
> 2. (2): sia $0 < \varepsilon \leq 3$. Prendo $x = -\left(3 - \frac\varepsilon2\right)$: sta in $\left(-3, -\frac32\right]$, quindi risolve la disequazione.
> 3. Il suo modulo è $y = 3 - \frac\varepsilon2 \in A$, e $y > 3 - \varepsilon$.
> 4. Per $\varepsilon > 3$ basta lo stesso elemento costruito per $\varepsilon = 3$ (bastano gli $\varepsilon$ piccoli).
>
> **Max?** $3 \notin A$: servirebbe $x = 3$ o $x = -3$, e nessuno dei due sta in $(-3, 1)$. Niente massimo.
>
> La trappola: le soluzioni stanno in $(-3, 1)$, e viene da rispondere “$\sup = 1$". Ma $A$ contiene $\vert -2{,}9\vert = 2{,}9$, che è più grande di $1$.
>
> *Verifica*: $x = -2{,}9$: $8{,}41 < 5{,}8 + 3 = 8{,}8$, sì, e $\vert x\vert = 2{,}9$; $x = -3$: $9 < 9$, no. Con $\varepsilon = 0{,}01$ la ricetta dà $y = 2{,}995 > 2{,}99$.

### 20) $A = \{x : \vert x - 1\vert \leq \vert\,\vert x - 1\vert - 2\,\vert\}$ (foglio 1, es. 1 x)

> [!tip]- Indizio
> Poni $t = \vert x - 1\vert \geq 0$: la disequazione diventa $t \leq \vert t - 2\vert$. Due casi, $t \geq 2$ e $t < 2$.

> [!example]- Soluzione
> *Come si riconosce*: modulo dentro un modulo, con la stessa espressione $\vert x - 1\vert$ che si ripete. *Metodo*: sostituire $t = \vert x - 1\vert$, risolvere in $t$, tornare a $x$.
>
> 1. Con $t = \vert x - 1\vert \geq 0$: $t \leq \vert t - 2\vert$.
> 2. Caso $t \geq 2$: $\vert t - 2\vert = t - 2$, e $t \leq t - 2 \iff 0 \leq -2$, falso. Nessuna soluzione.
> 3. Caso $0 \leq t < 2$: $\vert t - 2\vert = 2 - t$, e $t \leq 2 - t \iff t \leq 1$.
> 4. Quindi $0 \leq \vert x - 1\vert \leq 1 \iff -1 \leq x - 1 \leq 1 \iff 0 \leq x \leq 2$.
> 5. $A = [0, 2]$.
>
> **$\max A = \sup A = 2$, $\min A = \inf A = 0$**: intervallo chiuso, gli estremi stanno in $A$, quindi sono massimo e minimo e le condizioni (2) e (4) sono gratis.
>
> *Verifica*: $x = 2$: $1 \leq \vert 1 - 2\vert = 1$, sì; $x = 2{,}1$: $1{,}1 \leq 0{,}9$, no; $x = -0{,}5$: $1{,}5 \leq 0{,}5$, no.

## Foglio 0, esercizio 7

### 21) Gli insiemi $A$, $B$, $C$, $D$ del foglio 0, es. 7

Dal foglio 0 del 2015-16 (<span class="src">foglio 0, pagina 2</span>): «Determinate gli insiemi [...] Dite se A, B, C e D sono insiemi limitati (inferiormente, superiormente). Individuate, se esistono, eventuali maggioranti/minoranti. Determinate, se esistono, il massimo e il minimo di tali insiemi.»

$$
A = \left\{x : \frac{4x + x^2}{x - 1} \geq x\right\} \quad B = \left\{x : \frac{x^2 - 5x + 6}{x^2} > 0\right\} \quad C = \{x : \vert(x^2 - 4)(x^2 - 1)\vert \leq 0\} \quad D = \left\{x : \frac{x^2 + 5x}{x - 1} \leq 1 - x\right\}
$$

> [!tip]- Indizio
> Disequazioni fratte: tutto a sinistra, denominatore comune, tabella dei segni. Mai moltiplicare per $x - 1$ senza conoscerne il segno. $C$ è un trabocchetto: un modulo $\leq 0$ vuol dire $= 0$.

> [!example]- Soluzione
> *Come si riconosce*: insiemi di soluzioni di disequazioni. *Metodo*: risolvere, scrivere ogni insieme come unione di intervalli, leggere sup e inf agli estremi; dove l'estremo non sta nell'insieme, la (2) con $\varepsilon$.
>
> **$A$.**
> 1. $\frac{4x + x^2}{x - 1} - x \geq 0 \iff \frac{4x + x^2 - x(x - 1)}{x - 1} \geq 0 \iff \frac{5x}{x - 1} \geq 0$ (il termine $x^2$ si cancella).
> 2. Segni: numeratore $\geq 0$ per $x \geq 0$, denominatore $> 0$ per $x > 1$. Il quoziente è $\geq 0$ per $x \leq 0$ o $x > 1$.
> 3. $A = (-\infty, 0] \cup (1, +\infty)$. Illimitato sopra e sotto: nessun maggiorante né minorante, $\sup A = +\infty$, $\inf A = -\infty$, niente max né min. Dato $M$, l'elemento $\vert M\vert + 2 \in (1, +\infty)$ supera $M$; l'elemento $-\vert M\vert - 1 \in (-\infty, 0]$ sta sotto $M$.
>
> **$B$.**
> 1. $x \neq 0$ e $x^2 > 0$, quindi il segno è quello del numeratore: $x^2 - 5x + 6 = (x - 2)(x - 3) > 0 \iff x < 2$ o $x > 3$.
> 2. $B = (-\infty, 0) \cup (0, 2) \cup (3, +\infty)$. Illimitato sopra e sotto, come $A$.
>
> **$C$.**
> 1. Un modulo è sempre $\geq 0$, quindi $\vert\dots\vert \leq 0 \iff (x^2 - 4)(x^2 - 1) = 0 \iff x \in \{-2, -1, 1, 2\}$ (legge di annullamento del prodotto).
> 2. Insieme finito: $\max C = 2$, $\min C = -2$. Maggioranti: $[2, +\infty)$; minoranti: $(-\infty, -2]$.
>
> **$D$.**
> 1. Tutto a sinistra: $\frac{x^2 + 5x}{x - 1} - (1 - x) \leq 0 \iff \frac{x^2 + 5x - (1 - x)(x - 1)}{x - 1} \leq 0$.
> 2. $(1 - x)(x - 1) = -(x - 1)^2$, quindi il numeratore è $x^2 + 5x + (x - 1)^2 = 2x^2 + 3x + 1 = (2x + 1)(x + 1)$.
> 3. Tabella dei segni, radici $-1$, $-\frac12$, $1$:
> ```
>                  -1        -1/2         1
> (2x+1)(x+1)   +   0    -    0     +     +     +
> x - 1         -   -    -    -     -     0     +
> quoziente     -   0    +    0     -     ∄     +
> ```
> 4. $D = (-\infty, -1] \cup \left[-\frac12, 1\right)$.
> 5. Illimitato inferiormente: $\inf D = -\infty$, niente minimo (dato $M$, l'elemento $-\vert M\vert - 1 \leq -1$ sta in $D$ ed è $< M$).
> 6. **$\sup D = 1$.** (1): ogni $x \in D$ è $< 1$. (2): sia $0 < \varepsilon \leq 3$; $x = 1 - \frac\varepsilon2$ sta in $\left[-\frac12, 1\right) \subset D$ ed è $> 1 - \varepsilon$. Per $\varepsilon > 3$ va bene lo stesso elemento costruito per $\varepsilon = 3$.
> 7. **Max?** $1 \notin D$ (annulla il denominatore). Niente massimo. Maggioranti di $D$: $[1, +\infty)$.
>
> *Verifica* (con sympy): le quattro disequazioni danno proprio $(-\infty, 0] \cup (1, +\infty)$, $(-\infty, 0) \cup (0, 2) \cup (3, +\infty)$, $\{-2, -1, 1, 2\}$, $(-\infty, -1] \cup \left[-\frac12, 1\right)$. Prova a mano su $D$: $x = 0{,}5$ dà $\frac{2{,}75}{-0{,}5} = -5{,}5 \leq 0{,}5$, sì; $x = -0{,}7$ dà $\frac{-3{,}01}{-1{,}7} \approx 1{,}77 \leq 1{,}7$, no.

## Esercizi tipo esame

### Crocette (stile parte 1)

**C1.** Sia $A = \left\{1 - \frac{1}{n^2} : n \geq 1\right\}$. Quale affermazione è vera?

- a) $\max A = 1$
- b) $\min A = 0$ e $\sup A = 1$
- c) $\inf A = 0$ ma $A$ non ha minimo
- d) $\sup A = \frac34$

> [!example]- Soluzione
> **b**. *Come si riconosce*: costante meno un resto che cala, quindi successione crescente.
> 1. $x_1 = 1 - 1 = 0 \in A$, e $\frac{1}{n^2} \leq 1$ dà $x_n \geq 0$: $\min A = 0$. La c) è falsa.
> 2. $x_n < 1$ sempre; (2): dato $\varepsilon$, con $\bar n = \left\lfloor \frac{1}{\sqrt\varepsilon} \right\rfloor + 1$ si ha $\frac{1}{\bar n^2} < \varepsilon$. Quindi $\sup A = 1$.
> 3. $1 \notin A$ ($\frac{1}{n^2} \neq 0$): la a) è falsa. La d) prende il secondo termine $x_2 = \frac34$ per il sup, ma $x_3 = \frac89 > \frac34$.

**C2.** Sia $A \subset \mathbb{R}$ non vuoto e $L$ un maggiorante di $A$. Allora $L = \sup A$ se e solo se:

- a) $\exists \varepsilon > 0 : \forall x \in A,\ x > L - \varepsilon$
- b) $\forall \varepsilon > 0\ \exists x \in A : x > L - \varepsilon$
- c) $\forall \varepsilon > 0\ \forall x \in A,\ x > L - \varepsilon$
- d) $\forall \varepsilon > 0\ \exists x \in A : x \geq L + \varepsilon$

> [!example]- Soluzione
> **b**, la condizione (2) con $\varepsilon$. Le altre cambiano l'ordine o il tipo dei quantificatori:
> - a) dice che tutto $A$ sta sopra una certa soglia: è una limitatezza inferiore, non dice niente sul sup. Con $A = [0, 1]$ e $L = 5$ è vera ($\varepsilon = 6$), ma $\sup A = 1$.
> - c) dice che ogni elemento è $\geq L$, cioè (con $L$ maggiorante) $A = \{L\}$: è sufficiente ma non necessaria. Con $A = (0, 1)$ e $L = 1$ è falsa, eppure $1 = \sup A$.
> - d) chiede un elemento sopra $L$, impossibile per un maggiorante.

**C3.** Sia $A = \{x \in \mathbb{Q} : x^2 < 2\}$. Quale affermazione è vera?

- a) $A$ ha massimo, perché è limitato
- b) in $\mathbb{R}$ vale $\sup A = \sqrt2$, e $A$ non ha massimo
- c) $\sup A = \sqrt2$ e $\sqrt2 \in A$
- d) $A$ non è limitato superiormente, perché $\sqrt2 \notin \mathbb{Q}$

> [!example]- Soluzione
> **b**. Il sup in $\mathbb{R}$ si dimostra come nell'esercizio 26 (lì con $x > 0$, che non cambia il sup): $x^2 < 2 \Rightarrow x < \sqrt2$, e per densità c'è un razionale in $(\sqrt2 - \varepsilon, \sqrt2)$.
> - a) limitato non vuol dire che ci sia il massimo: $(0, 1)$ è limitato e non ce l'ha.
> - c) $\sqrt2 \notin \mathbb{Q}$ (teorema della slide 25), quindi non sta in $A$.
> - d) $2$ è un maggiorante. Il fatto che $\sqrt2 \notin \mathbb{Q}$ toglie il sup **dentro** $\mathbb{Q}$, non i maggioranti.

### Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione scrivi almeno il candidato e la disuguaglianza da risolvere nel passo $\varepsilon$.

### 22) $A = \left\{\frac{n-1}{n+1} : n \in \mathbb{N}\right\}$ (facile)

> [!tip]- Indizio
> $\frac{n-1}{n+1} = 1 - \frac{2}{n+1}$. È l'insieme della figura in "Cosa serve".

> [!example]- Soluzione
> *Come si riconosce*: rapporto di polinomi di primo grado con lo stesso coefficiente davanti a $n$. *Metodo*: costante meno resto, primo termine minimo, sup con $\varepsilon$.
>
> **Riscrittura.** $n - 1 = (n + 1) - 2$, quindi $x_n = 1 - \frac{2}{n+1}$. Primi termini: $-1, 0, \frac13, \frac12, \frac35$. Crescono.
>
> **$\min A = \inf A = -1$.**
> 1. $x_0 = -1 \in A$.
> 2. (3): $n + 1 \geq 1$ dà $\frac{2}{n+1} \leq 2$, quindi $x_n \geq 1 - 2 = -1$.
>
> **$\sup A = 1$.**
> 1. (1): $\frac{2}{n+1} > 0$, quindi $x_n < 1$.
> 2. (2): sia $\varepsilon > 0$. Voglio $1 - \frac{2}{n+1} > 1 - \varepsilon \iff \frac{2}{n+1} < \varepsilon \iff n + 1 > \frac2\varepsilon$.
> 3. Scelgo $\bar n = \left\lfloor \frac2\varepsilon \right\rfloor$: $\bar n + 1 > \frac2\varepsilon$, quindi $x_{\bar n} > 1 - \varepsilon$.
>
> **Max?** $\frac{2}{n+1} = 0$ è impossibile: $1 \notin A$.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $\bar n = 20$ e $x_{20} = \frac{19}{21} \approx 0{,}905 > 0{,}9$; $\varepsilon = 0{,}4$ e $\varepsilon = 0{,}15$ danno $\bar n = 5$ e $\bar n = 13$, i punti cerchiati nella figura.

### 23) $A = \left\{\frac1n : n \geq 1\right\} \cup (-2, -1]$ (unione, facile-medio)

> [!tip]- Indizio
> Studia i due pezzi da soli, poi metti insieme: il sup dell'unione è il più grande dei due sup, l'inf il più piccolo dei due inf. Lo $0$ che cosa diventa?

> [!example]- Soluzione
> *Come si riconosce*: unione di una successione e di un intervallo. *Metodo*: sup e inf di ciascun pezzo, poi il confronto; le condizioni si verificano sull'unione.
>
> **I pezzi.** $P = \left\{\frac1n : n \geq 1\right\}$ ha $\max P = 1$ e $\inf P = 0$ (non minimo). $Q = (-2, -1]$ ha $\max Q = -1$ e $\inf Q = -2$ (non minimo).
>
> **$\max A = \sup A = 1$.**
> 1. $1 \in P \subset A$.
> 2. (1): gli elementi di $P$ sono $\leq 1$, quelli di $Q$ sono $\leq -1 < 1$.
>
> **$\inf A = -2$.**
> 1. (3): gli elementi di $Q$ sono $> -2$, quelli di $P$ sono $> 0 > -2$.
> 2. (4): sia $0 < \varepsilon \leq 1$. Prendo $x = -2 + \frac\varepsilon2$: sta in $\left(-2, -\frac32\right] \subset Q$ ed è $< -2 + \varepsilon$. Per $\varepsilon > 1$ va bene lo stesso elemento costruito per $\varepsilon = 1$.
>
> **Min?** $-2 \notin A$: niente minimo.
>
> **Lo $0$.** È l'inf di $P$, ma per $A$ non è nemmeno un minorante: $-\frac32 \in A$ e $-\frac32 < 0$. Quando si uniscono insiemi, l'inf di un pezzo conta solo se è il più piccolo.
>
> *Verifica*: $\varepsilon = 0{,}01$ dà $x = -1{,}995 \in (-2, -1]$, sotto $-1{,}99$.

### 24) $A = \left\{\frac1m + \frac1n : m, n \geq 1\right\}$ (medio)

> [!tip]- Indizio
> Due indici liberi. Il massimo si vede. Per avvicinarsi a $0$ devono crescere tutti e due: prova $m = n$.

> [!example]- Soluzione
> *Come si riconosce*: insieme con due indici indipendenti. *Metodo*: stime su ciascun addendo per il massimo; per la (4) si sceglie una "diagonale" $m = n = k$ e ci si riduce a un solo indice.
>
> **$\max A = \sup A = 2$.**
> 1. $m = n = 1$ dà $2 \in A$.
> 2. (1): $m \geq 1$ e $n \geq 1$ danno $\frac1m \leq 1$ e $\frac1n \leq 1$, quindi la somma è $\leq 2$.
>
> **$\inf A = 0$.**
> 1. (3): somma di due positivi, $> 0$.
> 2. (4): sia $\varepsilon > 0$. Con $m = n = k$ l'elemento è $\frac2k$, e voglio $\frac2k < \varepsilon \iff k > \frac2\varepsilon$.
> 3. Scelgo $k = \left\lfloor \frac2\varepsilon \right\rfloor + 1$: l'elemento $\frac1k + \frac1k = \frac2k < \varepsilon$.
>
> **Min?** Ogni elemento è $> 0$: $0 \notin A$, niente minimo.
>
> Se tieni fermo $m = 1$ e fai crescere solo $n$, gli elementi $1 + \frac1n$ scendono verso $1$, non verso $0$: un indice fermo blocca l'avvicinamento.
>
> *Verifica*: $\varepsilon = 0{,}1$ dà $k = 21$ e $\frac{2}{21} \approx 0{,}095 < 0{,}1$. Su $1 \leq m, n \leq 299$ il più grande è $2$, il più piccolo $\frac{2}{299} \approx 0{,}0067$.

### 25) $A_a = \left\{\frac{an + 1}{n + 1} : n \in \mathbb{N}\right\}$ al variare di $a \in \mathbb{R}$ (difficile, con parametro)

> [!tip]- Indizio
> $an + 1 = a(n + 1) + (1 - a)$. Il segno di $1 - a$ decide se la successione sale o scende. Il primo termine non dipende da $a$.

> [!example]- Soluzione
> *Come si riconosce*: rapporto di primo grado con un parametro davanti a $n$. *Metodo*: la divisione separa la costante $a$; poi tre casi secondo il segno di $1 - a$, e in ciascuno lo schema dell'esercizio 22.
>
> **Riscrittura.**
> 1. $an + 1 = a(n + 1) - a + 1 = a(n + 1) + (1 - a)$.
> 2. Divido per $n + 1$: $x_n = a + \frac{1 - a}{n + 1}$.
> 3. $x_0 = a + (1 - a) = 1$ per ogni $a$.
>
> **Caso $a = 1$.** $x_n = 1$ per ogni $n$: $A_1 = \{1\}$, e $\max = \min = \sup = \inf = 1$.
>
> **Caso $a < 1$.** Ora $1 - a > 0$, e $\frac{1 - a}{n + 1}$ cala con $n$: la successione scende da $1$ verso $a$.
> 1. $\max A_a = \sup A_a = 1$: $x_0 = 1 \in A_a$, e $\frac{1 - a}{n + 1} \leq 1 - a$ dà $x_n \leq a + (1 - a) = 1$.
> 2. $\inf A_a = a$. (3): $\frac{1 - a}{n + 1} > 0$, quindi $x_n > a$.
> 3. (4): sia $\varepsilon > 0$. Voglio $a + \frac{1 - a}{n + 1} < a + \varepsilon \iff \frac{1 - a}{n + 1} < \varepsilon \iff n + 1 > \frac{1 - a}{\varepsilon}$.
> 4. Scelgo $\bar n = \left\lfloor \frac{1 - a}{\varepsilon} \right\rfloor$ (naturale, perché $\frac{1-a}{\varepsilon} > 0$): $\bar n + 1 > \frac{1 - a}{\varepsilon}$, quindi $x_{\bar n} < a + \varepsilon$.
> 5. Niente minimo: $x_n = a$ vorrebbe $\frac{1 - a}{n + 1} = 0$, cioè $a = 1$, escluso.
>
> **Caso $a > 1$.** Ora $1 - a < 0$: scrivo $x_n = a - \frac{a - 1}{n + 1}$ con $a - 1 > 0$. La successione sale da $1$ verso $a$.
> 1. $\min A_a = \inf A_a = 1$: $x_0 = 1$, e $\frac{a - 1}{n + 1} \leq a - 1$ dà $x_n \geq 1$.
> 2. $\sup A_a = a$. (1): $x_n < a$.
> 3. (2): $a - \frac{a - 1}{n + 1} > a - \varepsilon \iff n + 1 > \frac{a - 1}{\varepsilon}$; con $\bar n = \left\lfloor \frac{a - 1}{\varepsilon} \right\rfloor$ funziona.
> 4. Niente massimo, per lo stesso motivo del caso prima.
>
> | $a$ | $\sup$ | max? | $\inf$ | min? |
> | --- | --- | --- | --- | --- |
> | $a < 1$ | $1$ | sì ($n = 0$) | $a$ | no |
> | $a = 1$ | $1$ | sì | $1$ | sì |
> | $a > 1$ | $a$ | no | $1$ | sì ($n = 0$) |
>
> In tutti e tre i casi $\bar n = \left\lfloor \frac{\vert 1 - a\vert}{\varepsilon} \right\rfloor$.
>
> *Verifica*: $a = -2$ dà $1, -\frac12, -1, -\frac54, \dots$ verso $-2$, e con $\varepsilon = 0{,}1$ la ricetta dà $\bar n = 30$, $x_{30} = -\frac{59}{31} \approx -1{,}903 < -1{,}9$. $a = 3$ dà $1, 2, \frac73, \frac52, \dots$ verso $3$.

### 26) $A = \{q \in \mathbb{Q} : q > 0,\ q^2 < 2\}$: sup in $\mathbb{R}$ e in $\mathbb{Q}$ (livello 30)

Dire se $A$ ha sup e inf in $\mathbb{R}$, se sono massimo e minimo; poi dire se fra i razionali c'è un maggiorante più piccolo di tutti.

> [!tip]- Indizio
> In $\mathbb{R}$ il candidato è $\sqrt2$. Per la (2) devi trovare un **razionale** fra $\sqrt2 - \varepsilon$ e $\sqrt2$: è la densità di $\mathbb{Q}$. Per la seconda parte: un maggiorante razionale $r$ deve essere $> \sqrt2$; fra $\sqrt2$ e $r$ c'è un altro razionale.

> [!example]- Soluzione
> *Come si riconosce*: insieme di razionali definito da una disequazione. *Metodo*: sup in $\mathbb{R}$ come sempre, ma l'elemento della (2) va cercato dentro $\mathbb{Q}$, quindi con la densità (<span class="src">slide 39</span>); poi la domanda sulla completezza (<span class="src">slide 35</span>).
>
> **$\inf A = 0$, non è un minimo.**
> 1. (3): $q > 0$ per ogni $q \in A$.
> 2. (4): sia $\varepsilon > 0$ e $n = \left\lfloor \frac1\varepsilon \right\rfloor + 1$. Il razionale $q = \frac1n$ è $> 0$, ha $q^2 \leq 1 < 2$, quindi sta in $A$, ed è $< \varepsilon$.
> 3. $0 \notin A$ (si chiede $q > 0$).
>
> **$\sup A = \sqrt2$ in $\mathbb{R}$.**
> 1. (1): sia $q \in A$. Se fosse $q \geq \sqrt2$, moltiplicando per $q > 0$ e poi per $\sqrt2 > 0$ avrei $q^2 \geq \sqrt2\, q \geq 2$, contro $q^2 < 2$. Quindi $q < \sqrt2$.
> 2. (2): sia $0 < \varepsilon \leq \sqrt2$. Per la densità esiste $q \in \mathbb{Q}$ con $\sqrt2 - \varepsilon < q < \sqrt2$.
> 3. Quel $q$ sta in $A$: $q > \sqrt2 - \varepsilon \geq 0$, e da $0 < q < \sqrt2$ segue $q^2 < \sqrt2\, q < 2$.
> 4. Esplicitamente, la dimostrazione della densità dà $q = \frac mn$ con $n = \left\lfloor \frac1\varepsilon \right\rfloor + 1$ e $m = \left\lfloor n(\sqrt2 - \varepsilon) \right\rfloor + 1$.
> 5. Per $\varepsilon > \sqrt2$ basta l'elemento costruito per $\varepsilon = \sqrt2$.
>
> **Max?** $\sqrt2 \notin \mathbb{Q}$ (slide 25), quindi $\sqrt2 \notin A$: niente massimo.
>
> **Dentro $\mathbb{Q}$ non c'è un sup.** Sia $r \in \mathbb{Q}$ un maggiorante di $A$.
> 1. $r \geq \sqrt2$: se fosse $r < \sqrt2$, la (2) con $\varepsilon = \sqrt2 - r$ darebbe un elemento di $A$ sopra $r$, e $r$ non sarebbe un maggiorante.
> 2. $r \neq \sqrt2$, perché $r$ è razionale. Quindi $r > \sqrt2$.
> 3. Per la densità c'è un razionale $r'$ con $\sqrt2 < r' < r$.
> 4. $r'$ è ancora un maggiorante (ogni elemento di $A$ è $< \sqrt2 < r'$), ed è più piccolo di $r$.
> 5. Quindi nessun maggiorante razionale è il più piccolo: $A$ è limitato in $\mathbb{Q}$ ma non ha sup in $\mathbb{Q}$. È esattamente l'assioma di completezza che in $\mathbb{Q}$ non vale; in $\mathbb{R}$ il sup c'è ed è $\sqrt2$.
>
> *Verifica*: $\varepsilon = 0{,}01$ dà $n = 101$, $m = \lfloor 101 \cdot 1{,}40421\dots \rfloor + 1 = 142$, $q = \frac{142}{101} \approx 1{,}40594$, che sta fra $1{,}40421$ e $1{,}41421$, e $142^2 = 20164 < 2 \cdot 101^2 = 20402$.

### 27) $A = \left\{\left(1 + \frac1n\right)^n : n \geq 1\right\}$ (livello 30, usa la successione di Nepero)

Qui servono due fatti della [nota sul numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/), già fatti a lezione il 6/10: $\left(1 + \frac1n\right)^n$ è strettamente crescente e tende a $e \leq 3$ (slide 32-34), e $\left(1 + \frac1n\right)^{n+1} > e$ per ogni $n \geq 1$ (esercizio 7 di quella nota).

> [!tip]- Indizio
> Il minimo è il primo termine. Il sup è il limite, ma la (2) si può fare senza la definizione di limite: stringi $e$ fra $x_n$ e $x_n\left(1 + \frac1n\right)$, e ottieni $e - x_n < \frac{e}{n}$.

> [!example]- Soluzione
> *Come si riconosce*: successione crescente nota, con limite $e$. *Metodo*: per una crescente il primo termine è il minimo e il sup è il limite (teorema delle monotone, slide 30); la (2) si fa con una stima esplicita della distanza da $e$.
>
> **$\min A = \inf A = 2$.**
> 1. $x_1 = (1 + 1)^1 = 2 \in A$.
> 2. La successione è crescente, quindi $x_n \geq x_1 = 2$ per ogni $n$.
>
> **$\sup A = e$.**
> 1. (1): $x_n < e$ per ogni $n$. Se fosse $x_m \geq e$ per qualche $m$, allora $x_{m+1} > x_m \geq e$, e da lì in poi tutti i termini starebbero sopra $x_{m+1} > e$, quindi il limite sarebbe $\geq x_{m+1} > e$ (permanenza del segno): assurdo.
> 2. Una stima: $x_n < e < \left(1 + \frac1n\right)^{n+1} = x_n\left(1 + \frac1n\right) = x_n + \frac{x_n}{n}$.
> 3. Tolgo $x_n$: $0 < e - x_n < \frac{x_n}{n} < \frac{e}{n} \leq \frac3n$.
> 4. (2): sia $\varepsilon > 0$. Basta $\frac3n \leq \varepsilon$, cioè $n \geq \frac3\varepsilon$. Scelgo $\bar n = \left\lfloor \frac3\varepsilon \right\rfloor + 1$.
> 5. Allora $e - x_{\bar n} < \frac{3}{\bar n} < \varepsilon$, cioè $x_{\bar n} > e - \varepsilon$.
>
> **Max?** $x_n < e$ strettamente (passo 1): niente massimo.
>
> Lo stesso risultato viene dal teorema delle monotone: una crescente limitata tende al sup dei suoi valori, e qui il limite è $e$. La strada con la stima è più lunga ma dà $\bar n$ esplicito, ed è quello che chiede la (2).
>
> *Verifica*: $\varepsilon = 0{,}01$ dà $\bar n = 301$ e $x_{301} \approx 2{,}71378 > e - 0{,}01 \approx 2{,}70828$. La stima $e - x_n < \frac3n$: con $n = 10$ è $0{,}1245 < 0{,}3$; con $n = 100$ è $0{,}0135 < 0{,}03$. Sui primi $10^4$ termini il minimo è $2$ e il massimo $\approx 2{,}71815 < e$.

## Riepilogo

| | sup | max? | inf | min? |
| --- | --- | --- | --- | --- |
| 1 | $1$ | no | $0$ | no |
| 2 | $1$ | sì | $0$ | no |
| 3 | $1$ | sì ($n=0$) | $0$ | no |
| 4 | $1$ | no | $-1$ | no |
| 5 | $1$ | sì ($n=0$) | $0$ | no |
| 6 | $+\infty$ | no | $\frac72$ | sì ($n=1$) |
| 7 | $+\infty$ | no | $\frac{4006}{45}$ | sì ($n=44$) |
| 8 | $+\infty$ | no | $2$ | sì ($x=1$) |
| 9 | $1$ | no | $0$ | sì ($n=0$, quadrati) |
| 10 | $1$ | sì ($n=0$) | $0$ | no |
| 11 | $\ln 2$ | no | $-\infty$ | no |
| 12 | $\frac52$ | no | $-2$ | sì ($n=0$) |
| 13 | $1$ | sì ($n=1$) | $-1$ | sì ($n=-1$) |
| 14 | $\frac32$ | no | $-2$ | sì ($n=1$) |
| 15 | $3$ | no | $1$ | sì ($n=1$) |
| 16 | $+\infty$ | no | $-4$ | sì ($n=1$) |
| 17 | $\frac72$ | sì ($n=2$) | $-4$ | sì ($n=1$) |
| 18 | $+\infty$ | no | $0$ | no |
| 19 | $3$ | no | $0$ | sì ($x=0$) |
| 20 | $2$ | sì | $0$ | sì |
| 21 $A$, $B$ | $+\infty$ | no | $-\infty$ | no |
| 21 $C$ | $2$ | sì | $-2$ | sì |
| 21 $D$ | $1$ | no | $-\infty$ | no |
| 22 | $1$ | no | $-1$ | sì ($n=0$) |
| 23 | $1$ | sì ($n=1$) | $-2$ | no |
| 24 | $2$ | sì ($m=n=1$) | $0$ | no |
| 25 | $\max(1, a)$ | sì se $a \leq 1$ | $\min(1, a)$ | sì se $a \geq 1$ |
| 26 | $\sqrt2$ (in $\mathbb{R}$) | no | $0$ | no |
| 27 | $e$ | no | $2$ | sì ($n=1$) |

## Errori tipici

- **Fermarsi alla (1).** Dire “$x_n < 1$ per ogni $n$" prova solo che $1$ è un maggiorante. Anche $7$ lo è. Senza la (2) il sup non è dimostrato.
- **Fare la (2) con un $\varepsilon$ numerico.** "Con $\varepsilon = 0{,}01$ trovo $n = 200$, quindi è il sup" controlla un caso solo. La (2) dice **per ogni** $\varepsilon$: serve la ricetta $\bar n = \bar n(\varepsilon)$. Il valore numerico va bene alla fine, come verifica.
- **Usare Archimede senza dire quale $n$.** "Per Archimede esiste $n$" va bene solo se prima hai scritto la disuguaglianza che $n$ deve soddisfare ($n > \frac1\varepsilon$, $n > \frac{1}{\varepsilon^2}$, ...). Ancora meglio scrivere $\bar n = \lfloor c \rfloor + 1$. E $\bar n = \frac2\varepsilon$ non va: in genere non è un intero.
- **Scegliere un indice che non sta nella sottosuccessione giusta.** Nel 4, nel 14 e nel 18 l'elemento della (2) deve venire dai pari: $\bar n = \left\lfloor \frac1\varepsilon \right\rfloor$ può essere dispari, quindi si scrive $\bar n = 2k$ e si sceglie $k$.
- **Scrivere la (2) al contrario.** Nell'11, sul quaderno, hai impostato $\ln 2 - \varepsilon > \ln\left(1 + \frac{n}{n+1}\right)$ e hai provato a dimostrarla per un $n$: è il verso opposto. La (2) chiede un elemento **sopra** $L - \varepsilon$, cioè $\ln\left(\frac{2n+1}{n+1}\right) > \ln 2 - \varepsilon$; con il verso sbagliato i conti si allungano e arrivano a $-\varepsilon > \ln(\dots) > 0$, impossibile. Prima di fare conti, scrivi a parole cosa stai cercando.
- **Confondere "ha un maggiorante" con "ha il sup".** Avere un maggiorante è l'ipotesi della completezza; il sup è il più piccolo dei maggioranti, e che esista in $\mathbb{R}$ lo garantisce l'assioma. In $\mathbb{Q}$ può mancare (esercizio 26).
- **Dimenticare $n = 0$.** Nel 3, 5, 10 e 22 un estremo sta proprio in $n = 0$: partendo da $n = 1$ lo perdi e sbagli la risposta.
- **Prendere il primo termine per il minimo, o il limite per il sup.** Nel 4 $x_0 = 0$ non è né sup né inf; nel 6 e 7 la successione prima scende; nel 17 le sottosuccessioni tendono a $\pm 3$ ma gli estremi sono $\frac72$ e $-4$.
- **Indovinare il minimo del 7 dai primi termini.** Con $2026$ la discesa dura 44 passi: serve $x_{n+1} - x_n$.
- **Confondere le $x$ con i valori.** Nel 19 le soluzioni stanno in $(-3, 1)$, ma l'insieme è fatto dei moduli e arriva fino a $3$.
- **Unioni: prendere l'inf di un pezzo.** Nel 23 lo $0$ è l'inf di $\left\{\frac1n\right\}$, ma non è nemmeno un minorante dell'unione.
- **Moltiplicare per una quantità senza guardarne il segno.** Nel 6 e nell'8 si moltiplica per $2(n+1)$ e si divide per $x$: va bene perché sono positivi, e va scritto. Nel 21 il denominatore $x - 1$ cambia segno: lì si fa la tabella dei segni.

## Domande

- Quali due condizioni devi dimostrare per dire che $L = \sup A$, e cosa dice ciascuna?

- Se il candidato sup appartiene all'insieme, perché non serve dimostrare la seconda condizione?

- Come si dimostra che $\sup A = +\infty$?

- Con $(-1)^n$ nell'elemento generico, perché conviene separare $n$ pari e dispari?

- A cosa serve guardare il segno di $x_{n+1} - x_n$?

- Come si trasforma $\sqrt{n+1} - \sqrt{n}$ per studiarla?

- Scrivi la condizione (2) con $\varepsilon$. Perché l'elemento che trovi deve dipendere da $\varepsilon$, e perché non basta controllarla con $\varepsilon = 0{,}01$?

- Come si scrive esplicitamente un naturale $\bar n > c$, e perché funziona?

- Perché nella (2) basta trovare l'elemento per gli $\varepsilon$ piccoli?

- Che differenza c'è fra “$A$ ha un maggiorante" e “$A$ ha il sup"? Dove interviene la completezza?

- Perché $\{q \in \mathbb{Q} : q > 0,\ q^2 < 2\}$ non ha un sup in $\mathbb{Q}$?

- Come si trovano sup e inf di un'unione di due insiemi?

- In $\{\vert x\vert : x^2 < -2x + 3\}$, perché il sup è $3$ e non $1$?

- Il limite di una sottosuccessione è sempre il sup o l'inf dell'insieme? Porta un esempio.

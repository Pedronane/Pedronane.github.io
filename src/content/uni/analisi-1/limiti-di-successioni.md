---
title: Limiti di successioni
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-09-28
lezioni:
  - 28 set
  - 30 set
ordine: 6
---

Argomento di [Analisi Matematica 1](/uni/analisi-1/), capitolo 3 ("L'operazione di limite: limiti di successioni", deck da 68 slide). Fatto a lezione il 28/9, slide 1-12 (<span class="src">slide annotate del 28/9</span>), e il 30/9, slide 12-25 (<span class="src">slide annotate del 30/9</span>). Il prof si è fermato agli esempi di sottosuccessioni (slide 25): da lì riparte il <span class="src">deck non annotato</span>, con i limiti delle sottosuccessioni e la non esistenza del limite. Serve [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/) (proprietà di Archimede) e, per i logaritmi, [Funzioni elementari](/uni/analisi-1/funzioni-elementari/).

> [!abstract] Per l'esame
> - **Saper enunciare**: definizione di successione; fattoriale e coefficiente binomiale con le loro proprietà; binomio di Newton; somma della progressione geometrica; le quattro definizioni di limite ($0$, $\ell$, $+\infty$, $-\infty$) con i quantificatori giusti; teorema di unicità del limite e teorema di limitatezza delle successioni convergenti, con dimostrazione; definizione di sottosuccessione.
> - **Saper fare**: verificare un limite con la definizione (fissato $\varepsilon$, trovare $\nu_\varepsilon$); calcolare una somma geometrica; sviluppare $(a+b)^n$ col triangolo di Tartaglia; estrarre una sottosuccessione.
> - **Dove esce**: crocette sulle definizioni (quale formula definisce $a_n \to -\infty$? una successione limitata è convergente?) e su somme geometriche e binomiali; nella parte 2 i limiti di successioni arriveranno soprattutto come calcolo (forme indeterminate, slide successive), ma una verifica con la definizione o una dimostrazione dei due teoremi sono domande d'esame naturali. Il primo parziale (6 novembre) probabilmente li comprende: il programma esatto va controllato su Moodle.

Il filo dell'argomento:

```
il cerchio di Archimede      poligoni con n lati sempre più grande: a cosa "tende" l'area?
        |
        v  3.1 successioni (28/9)
a: N -> R, a_n               n!, binomiali, Newton, progressione geometrica
        |
        v  3.2 limite (28-30/9)
a_n -> 0                     per ogni ε > 0 esiste ν_ε: n > ν_ε  =>  |a_n| < ε
a_n -> ℓ, +∞, -∞             cambia solo la relazione finale
        |
        v
unicità del limite           convergente  =>  limitata
        |
        v  3.3 sottosuccessioni (30/9, fino alla slide 25)
b_k = a_(n_k)                n_1 < n_2 < ...: si prende un pezzo della successione
        |
        v  da qui in poi non ancora fatto
limiti delle sottosuccessioni, non esistenza del limite, monotone, Nepero, confronto
```

## Definizioni

### Perché servono i limiti (slide 2-3)

Il problema di partenza è antico. Archimede afferma che un cerchio equivale a un triangolo con altezza pari al raggio e base lunga quanto la circonferenza. Per mostrarlo si usa l'area di un poligono regolare, $\text{Area} = \frac{\text{Perimetro} \times \text{Apotema}}{2}$, e il **metodo di esaustione** di Eudosso: si approssima il cerchio con poligoni regolari inscritti e circoscritti, con un numero di lati $n$ sempre più grande.

Al crescere di $n$ l'apotema $a_n$ si avvicina al raggio, il perimetro alla circonferenza, l'area del poligono a quella del cerchio. Nessun poligono è il cerchio: il cerchio è quello a cui la successione dei poligoni "tende". Il problema, nelle parole della slide 3, è definire e valutare l'**andamento asintotico** di una successione, cioè il concetto di limite.

### Successione (slide 6, 28/9)

> [!abstract] Definizione (successione)
> Una **successione** a valori reali è una funzione da $\mathbb{N}$ in $\mathbb{R}$, $\ f : \mathbb{N} \to \mathbb{R}$.
> Si indica con $(a_n)_{n \in \mathbb{N}}$, oppure $a_0, a_1, a_2, \dots$, oppure scrivendo solo il **termine $n$-esimo** $a_n$. L'indice può partire da un naturale maggiore di zero.

Il prof la disegna come grafico di una funzione: sull'asse orizzontale i naturali $0, 1, 2, 3, \dots$, sopra ciascuno il punto di altezza $a_n$, cioè $f(0) = a_0$, $f(1) = a_1$, e così via. Il grafico è fatto di **punti isolati**, non di una curva: fra $n = 1$ e $n = 2$ la successione non esiste.

Esempi della slide:
- $a_n = \frac1n$ per $n \geq 1$: la successione $1, \frac12, \frac13, \dots$ (qui l'indice parte da $1$, perché $\frac10$ non ha senso);
- $a_n = (-1)^n$ per $n \in \mathbb{N}$: la successione $1, -1, 1, -1, \dots$

### Fattoriale (slide 7)

> [!abstract] Definizione (fattoriale)
> Il **fattoriale** di $n \geq 1$ è il prodotto dei primi $n$ numeri naturali (dopo lo $0$):
> $$
> n! = 1 \cdot 2 \cdot 3 \cdots n
> $$
> e si pone anche $0! = 1$ (il prof: "definizione a parte").

Proprietà della slide:
1. $n! = n \cdot (n-1)!$
2. $\dfrac{n!}{(n-k)!} = n(n-1)(n-2)\cdots(n-k+1)$ per $0 \leq k \leq n$

La 2 è una semplificazione: nel numeratore $n! = n(n-1)\cdots(n-k+1) \cdot (n-k)(n-k-1)\cdots 2 \cdot 1$ i fattori da $(n-k)$ in giù sono proprio $(n-k)!$ e si cancellano col denominatore. Restano $k$ fattori, da $n$ scendendo. Per esempio $\frac{5!}{3!} = 5 \cdot 4 = 20$.

**Significato** (osservazione della slide, spiegata dal prof): $n!$ è il numero di modi distinti di ordinare $n$ oggetti distinti, cioè le **permutazioni** di $n$ oggetti. Il ragionamento: per la prima posizione si può scegliere uno qualunque degli $n$ oggetti ($n$ modi); scelto quello, ne rimangono $n - 1$, quindi per ognuna delle $n$ possibilità ci sono $n - 1$ modi per scegliere la seconda posizione; e così via fino all'ultima, dove resta un solo oggetto. In tutto $n(n-1)\cdots 1 = n!$.

> [!warning] Le annotazioni del prof sui quantificatori
> Accanto alla proprietà 1 il prof scrive "$\forall n \in \mathbb{N}$" e accanto alla 2 "$\forall k < n$". La 1 vale per $n \geq 1$: con $n = 0$ comparirebbe $(-1)!$, che non è definito. La 2 vale anche per $k = n$, grazie a $0! = 1$: $\frac{n!}{0!} = n!$, che è il prodotto di $n$ fattori da $n$ a $1$.

### Coefficiente binomiale (slide 8)

> [!abstract] Definizione (coefficiente binomiale)
> Dati $n, k \in \mathbb{N}$ con $0 \leq k \leq n$, il **coefficiente binomiale** "$n$ su $k$" è
> $$
> \binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{n(n-1)\cdots(n-k+1)}{k!}
> $$

La seconda forma segue dalla proprietà 2 del fattoriale (annotazione del prof) ed è quella che si usa nei conti: $\binom{6}{2} = \frac{6 \cdot 5}{2} = 15$.

Proprietà:
1. $\binom{n}{0} = \binom{n}{n} = 1$: sono i **lati** del triangolo di Tartaglia, tutti uguali a $1$;
2. $\binom{n}{k} = \binom{n}{n-k}$: **simmetria** del triangolo;
3. $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$: ogni elemento si ottiene sommando i due elementi sopra di esso.

**Triangolo di Tartaglia.** Le righe si contano da $0$, e in ogni riga le colonne si contano da $0$. Il coefficiente $\binom{n}{k}$ è l'elemento di **riga $n$ e colonna $k$**.

```
riga 0              1
riga 1            1   1
riga 2          1   2   1
riga 3        1   3   3   1
riga 4      1   4   6   4   1
riga 5    1   5  10  10   5   1
```

Esempio del prof: il $6$ sta in riga $4$, colonna $2$, e infatti
$$
\binom42 = \frac{4!}{2!\,(4-2)!} = \frac{24}{2 \cdot 2} = \frac{24}{4} = 6
$$

**Significato combinatorio** (pagina dopo la slide 8). $\binom nk$ è il numero di modi di **scegliere** $k$ oggetti all'interno di un gruppo di $n$, quando l'ordine in cui si scelgono è irrilevante: le "scelte non ordinate" di $k$ elementi fra $n$. Il conto del prof:
- le scelte **ordinate** di $k$ oggetti fra $n$ sono $n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$, con lo stesso ragionamento delle permutazioni ma fermandosi dopo $k$ posizioni;
- ogni scelta non ordinata corrisponde a $k!$ scelte ordinate (i modi di mettere in fila quei $k$ oggetti);
- quindi le scelte non ordinate sono $\dfrac{n!/(n-k)!}{k!} = \dfrac{n!}{(n-k)!\,k!} = \binom nk$.

### Successione geometrica (slide 10)

> [!abstract] Definizione (successione geometrica)
> Dato $q \in \mathbb{R}$, $q \neq 0$, la **successione geometrica** (o progressione geometrica) di **ragione** $q$ è
> $$
> a_n = q^n, \qquad n \in \mathbb{N}
> $$

La proprietà che la caratterizza: il rapporto fra un termine e il precedente è costante, $\frac{a_{n+1}}{a_n} = \frac{q^{n+1}}{q^n} = q$.

Esempio del prof con $q = \frac12$: $a_0 = 1$, $a_1 = \frac12$, $a_2 = \frac14$, $a_3 = \frac18$, ognuno metà del precedente.

### Limite di una successione (slide 12, 28/9 e 30/9)

Il problema: capire come si comporta $a_n$ quando $n$ diventa sempre più grande. Con $a_n = \frac1n$ i termini sono positivi e sempre più piccoli: si dice che "$a_n$ tende a $0$", che "il limite di $a_n$ per $n$ che tende all'infinito è $0$", e si scrive
$$
a_n \to 0 \qquad \text{oppure} \qquad \lim_{n \to +\infty} a_n = 0
$$

> [!abstract] Definizione di $a_n \to 0$
> Diciamo che $a_n \to 0$ se per ogni numero reale $\varepsilon > 0$ è possibile determinare un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $-\varepsilon < a_n < \varepsilon$.
>
> Con i quantificatori: $\ a_n \to 0 \iff \forall \varepsilon > 0\ \exists\, \nu_\varepsilon \ \text{t.c.}\ |a_n - 0| < \varepsilon \quad \forall n > \nu_\varepsilon$.

La stessa definizione detta a parole dal prof (30/9): $a_n \to 0$ se, fissata una qualunque **soglia di tolleranza** $\varepsilon$, possiamo affermare che a partire da un certo indice $\nu_\varepsilon$ tutti i successivi elementi di $(a_n)$, ovvero quelli relativi agli indici $n > \nu_\varepsilon$, distano da $0$ (il limite della successione) meno della soglia di tolleranza, ovvero $|a_n - 0| < \varepsilon$.

Due annotazioni:
- $\nu_\varepsilon$ è il **punto di partenza**: da lì in poi la condizione vale sempre. Dipende da $\varepsilon$, e per questo ha $\varepsilon$ a pedice. Al posto di $\nu_\varepsilon$ si scrive spesso $n_0$ o $n(\varepsilon)$ ("$n$-zero").
- I primi termini non contano: la definizione chiede qualcosa solo per $n > \nu_\varepsilon$. Cambiare mille termini all'inizio non cambia il limite.

**Il gioco a due giocatori** (slide 13). Il primo giocatore sceglie $\varepsilon > 0$ e disegna una striscia orizzontale di spessore $2\varepsilon$ attorno all'asse delle ascisse. Il secondo risponde indicando un'ascissa $\nu_\varepsilon$ a partire dalla quale il grafico della successione resta intrappolato nella striscia. Il primo cerca di mettere in difficoltà il secondo, quindi sceglie $\varepsilon$ sempre più piccolo. La conclusione del prof: vale $\lim_{n \to \infty} a_n = 0$ **se e solo se il secondo giocatore ha una strategia vincente**, cioè può fare la mossa richiesta qualunque sia la mossa del primo giocatore.

È il motivo dell'ordine dei quantificatori: prima "per ogni $\varepsilon$", poi "esiste $\nu_\varepsilon$". Se fosse "esiste $\nu$ tale che per ogni $\varepsilon$" il secondo giocatore dovrebbe muovere per primo, senza vedere la striscia, e una sola soglia dovrebbe andare bene per tutte le strisce: da $\nu$ in poi $|a_n| < \varepsilon$ per ogni $\varepsilon$ vuol dire $a_n = 0$, una condizione molto più forte.

<figure class="fig"><svg role="img" aria-label="Limite di una successione" xmlns:xlink="http://www.w3.org/1999/xlink" width="704.048171pt" height="279.03264pt" viewBox="0 0 704.048171 279.03264" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f15-figure_1"> <g id="f15-patch_1"> <path d="M 0 279.03264 L 704.048171 279.03264 L 704.048171 0 L 0 0 L 0 279.03264 z " style="fill: none"/> </g> <g id="f15-axes_1"> <g id="f15-patch_2"> <path d="M 25.688171 257.168 L 330.051808 257.168 L 330.051808 24.32 L 25.688171 24.32 L 25.688171 257.168 z " style="fill: none"/> </g> <g id="f15-patch_3"> <path d="M 25.688171 179.552 L 330.051808 179.552 L 330.051808 137.216 L 25.688171 137.216 z " clip-path="url(#f15-p5b110ffbb1)" style="fill: var(--fig-accent-deep); opacity: 0.35"/> </g> <g id="f15-matplotlib.axis_1"/> <g id="f15-matplotlib.axis_2"/> <g id="f15-line2d_1"> <defs> <path id="f15-mb88e32b69f" d="M 3 0 L -3 -3 L -3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g> <use xlink:href="#f15-mb88e32b69f" x="330.051808" y="228.944" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f15-line2d_2"> <defs> <path id="f15-m4825ac3d8b" d="M 0 -3 L -3 3 L 3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g> <use xlink:href="#f15-m4825ac3d8b" x="34.946381" y="24.32" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f15-line2d_3"> <path d="M 25.688171 158.384 L 330.051808 158.384 " clip-path="url(#f15-p5b110ffbb1)" style="fill: none; stroke-dasharray: 4.44,1.92; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.2"/> </g> <g id="f15-line2d_4"> <path d="M 25.688171 179.552 L 330.051808 179.552 " clip-path="url(#f15-p5b110ffbb1)" style="fill: none; stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-axis)"/> </g> <g id="f15-line2d_5"> <path d="M 25.688171 137.216 L 330.051808 137.216 " clip-path="url(#f15-p5b110ffbb1)" style="fill: none; stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-axis)"/> </g> <g id="f15-line2d_6"> <path d="M 92.81019 257.168 L 92.81019 24.32 " clip-path="url(#f15-p5b110ffbb1)" style="fill: none; stroke-dasharray: 5.18,2.24; stroke-dashoffset: 0; stroke: var(--fig-steel); stroke-width: 1.4"/> </g> <g id="f15-line2d_7"> <defs> <path id="f15-m19ab2f9546" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-faint)"/> </defs> <g clip-path="url(#f15-p5b110ffbb1)"> <use xlink:href="#f15-m19ab2f9546" x="46.519143" y="264.224" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="58.091905" y="105.464" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="69.664666" y="193.664" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="81.237428" y="131.924" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="92.81019" y="179.552" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> </g> </g> <g id="f15-line2d_8"> <defs> <path id="f15-m6298c29a80" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f15-p5b110ffbb1)"> <use xlink:href="#f15-m6298c29a80" x="104.382952" y="140.744" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="115.955714" y="173.504" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="127.528476" y="145.154" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="139.101237" y="170.144" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="150.673999" y="147.8" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="162.246761" y="168.005818" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="173.819523" y="149.564" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="185.392285" y="166.525538" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="196.965047" y="150.824" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="208.537809" y="165.44" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="220.11057" y="151.769" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="231.683332" y="164.609882" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="243.256094" y="152.504" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="254.828856" y="163.954526" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="266.401618" y="153.092" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="277.97438" y="163.424" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="289.547141" y="153.573091" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="301.119903" y="162.985739" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="312.692665" y="153.974" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f15-patch_4"> <path d="M 34.946381 257.168 L 34.946381 24.32 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f15-patch_5"> <path d="M 25.688171 228.944 L 330.051808 228.944 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f15-text_1"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(321.601808 257.448793) scale(0.13 -0.13)"> <defs> <path id="f15-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> <g id="f15-text_2"> <!-- $a_n$ --> <g style="fill: var(--fig-ink)" transform="translate(44.07729 34.196953) scale(0.13 -0.13)"> <defs> <path id="f15-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-DejaVuSerif-Italic-44" transform="translate(0 0.671875)"/> <use xlink:href="#f15-DejaVuSerif-Italic-51" transform="translate(59.619141 -14.328076) scale(0.7)"/> </g> </g> <g id="f15-text_3"> <!-- $\ell$ --> <g style="fill: var(--fig-accent)" transform="translate(21.62 161.760953) scale(0.13 -0.13)"> <defs> <path id="f15-STIXGeneral-Regular-370" d="M 493 2490 L 582 2656 Q 813 2496 1184 2496 Q 1728 3296 2301 3846 Q 2874 4397 3245 4397 Q 3654 4397 3654 3968 Q 3654 3450 3036 2938 Q 2419 2426 1594 2304 Q 678 826 678 397 Q 678 122 909 122 Q 1120 122 1398 365 Q 1677 608 2182 1190 L 2317 1082 Q 1773 448 1462 189 Q 1152 -70 864 -70 Q 627 -70 467 74 Q 307 218 307 486 Q 307 1024 800 1882 Q 877 2022 1056 2304 Q 742 2317 493 2490 z M 1715 2534 L 1722 2528 Q 2470 2694 2966 3113 Q 3462 3533 3462 3994 Q 3462 4192 3238 4192 Q 3002 4192 2714 3891 Q 2342 3514 1715 2534 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-STIXGeneral-Regular-370" transform="translate(0 0.296875)"/> </g> </g> <g id="f15-text_4"> <!-- $\ell+\varepsilon$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 134.813656) scale(0.1 -0.1)"> <defs> <path id="f15-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-Italic-32d" d="M 3191 3156 L 3069 2541 L 2719 2463 Q 2734 2741 2538 2884 Q 2341 3025 2047 3025 Q 1753 3025 1506 2872 Q 1256 2716 1216 2503 Q 1163 2228 1394 2069 Q 1628 1906 2044 1906 L 2194 1906 L 2131 1578 L 1844 1578 Q 1425 1578 1113 1378 Q 797 1175 731 834 Q 681 572 909 375 Q 1138 175 1484 175 Q 1847 175 2142 340 Q 2438 506 2531 825 L 2853 747 L 2728 103 Q 2375 -9 2025 -66 Q 1681 -122 1441 -122 Q 825 -122 447 125 Q 75 375 166 841 Q 259 1331 609 1572 Q 794 1694 1269 1756 L 828 2003 Q 597 2134 675 2531 Q 753 2934 1100 3147 Q 1447 3356 2059 3356 Q 2228 3356 2544 3306 Q 2859 3253 3191 3156 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-STIXGeneral-Regular-370" transform="translate(0 0.296875)"/> <use xlink:href="#f15-DejaVuSerif-e" transform="translate(76.864792 0.296875)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(179.618698 0.296875)"/> </g> </g> <g id="f15-text_5"> <!-- $\ell-\varepsilon$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 187.149656) scale(0.1 -0.1)"> <defs> <path id="f15-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-STIXGeneral-Regular-370" transform="translate(0 0.296875)"/> <use xlink:href="#f15-DejaVuSerif-8cf" transform="translate(76.864792 0.296875)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(179.618698 0.296875)"/> </g> </g> <g id="f15-text_6"> <!-- $\nu_\varepsilon$ --> <g style="fill: var(--fig-steel)" transform="translate(96.282019 45.488) scale(0.13 -0.13)"> <defs> <path id="f15-DejaVuSerif-Italic-335" d="M 1103 363 Q 1516 513 1997 875 Q 2291 1094 2691 1638 Q 2950 1975 3034 2288 Q 3116 2575 3025 2794 Q 2906 3097 2691 3138 L 2725 3322 L 3075 3322 Q 3400 3169 3584 2828 Q 3728 2566 3666 2247 Q 3622 2016 3494 1825 Q 3400 1688 3116 1366 Q 2738 950 2297 663 Q 1494 138 1034 0 L 456 0 L 1041 2988 L 491 2988 L 553 3322 L 1678 3322 L 1103 363 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-DejaVuSerif-Italic-335" transform="translate(0 0.09375)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(60.791016 -14.906201) scale(0.7)"/> </g> </g> <g id="f15-text_7"> <!-- $a_n \to \ell$: dopo $\nu_\varepsilon$ tutti nella striscia --> <g style="fill: var(--fig-ink)" transform="translate(78.02999 16.32) scale(0.12 -0.12)"> <defs> <path id="f15-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-DejaVuSerif-Italic-44" transform="translate(0 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-Italic-51" transform="translate(59.619141 -14.984326) scale(0.7)"/> <use xlink:href="#f15-DejaVuSerif-854" transform="translate(126.262207 0.015625)"/> <use xlink:href="#f15-STIXGeneral-Regular-370" transform="translate(229.016113 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-1d" transform="translate(286.916061 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(320.607468 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-47" transform="translate(352.394577 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-52" transform="translate(416.408249 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-53" transform="translate(476.613327 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-52" transform="translate(540.626999 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(600.832077 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-Italic-335" transform="translate(632.619186 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(693.410202 -14.984326) scale(0.7)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(733.568893 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-57" transform="translate(765.356003 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-58" transform="translate(805.54155 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-57" transform="translate(869.945847 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-57" transform="translate(910.131393 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-4c" transform="translate(950.31694 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(982.299362 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-51" transform="translate(1014.086472 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-48" transform="translate(1078.490768 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-4f" transform="translate(1137.670456 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-4f" transform="translate(1169.652878 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-44" transform="translate(1201.6353 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(1261.25444 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-56" transform="translate(1293.04155 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-57" transform="translate(1344.359909 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-55" transform="translate(1384.545456 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-4c" transform="translate(1432.34819 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-56" transform="translate(1464.330612 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-46" transform="translate(1515.648972 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-4c" transform="translate(1571.654831 0.015625)"/> <use xlink:href="#f15-DejaVuSerif-44" transform="translate(1603.637253 0.015625)"/> </g> </g> </g> <g id="f15-axes_2"> <g id="f15-patch_6"> <path d="M 390.924535 257.168 L 695.288171 257.168 L 695.288171 24.32 L 390.924535 24.32 L 390.924535 257.168 z " style="fill: none"/> </g> <g id="f15-patch_7"> <path d="M 472.512506 144.6248 L 695.288171 144.6248 L 695.288171 24.32 L 472.512506 24.32 z " clip-path="url(#f15-p6a01588404)" style="fill: var(--fig-accent-deep); opacity: 0.35"/> </g> <g id="f15-matplotlib.axis_3"/> <g id="f15-matplotlib.axis_4"/> <g id="f15-line2d_9"> <g> <use xlink:href="#f15-mb88e32b69f" x="695.288171" y="241.6448" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f15-line2d_10"> <g> <use xlink:href="#f15-m4825ac3d8b" x="400.182745" y="24.32" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f15-line2d_11"> <path d="M 390.924535 144.6248 L 695.288171 144.6248 " clip-path="url(#f15-p6a01588404)" style="fill: none; stroke-dasharray: 4.44,1.92; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.2"/> </g> <g id="f15-line2d_12"> <path d="M 472.512506 257.168 L 472.512506 24.32 " clip-path="url(#f15-p6a01588404)" style="fill: none; stroke-dasharray: 5.18,2.24; stroke-dashoffset: 0; stroke: var(--fig-steel); stroke-width: 1.4"/> </g> <g id="f15-line2d_13"> <g clip-path="url(#f15-p6a01588404)"> <use xlink:href="#f15-m19ab2f9546" x="411.755506" y="202.8368" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="423.328268" y="186.762" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="434.90103" y="174.427372" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="446.473792" y="164.0288" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="458.046554" y="154.867474" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> <use xlink:href="#f15-m19ab2f9546" x="469.619316" y="146.585002" style="fill: var(--fig-faint); stroke: var(--fig-faint)"/> </g> </g> <g id="f15-line2d_14"> <g clip-path="url(#f15-p6a01588404)"> <use xlink:href="#f15-m6298c29a80" x="481.192077" y="138.968483" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="492.764839" y="131.8792" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="504.337601" y="125.2208" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="515.910363" y="118.923129" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="527.483125" y="112.933225" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="539.055887" y="107.209945" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="550.628648" y="101.720566" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="562.20141" y="96.43856" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="573.774172" y="91.342062" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="585.346934" y="86.4128" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="596.919696" y="81.635317" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="608.492458" y="76.9964" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="620.065219" y="72.48465" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="631.637981" y="68.090148" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="643.210743" y="63.804202" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="654.783505" y="59.619145" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="666.356267" y="55.52817" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f15-m6298c29a80" x="677.929029" y="51.525204" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f15-patch_8"> <path d="M 400.182745 257.168 L 400.182745 24.32 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f15-patch_9"> <path d="M 390.924535 241.6448 L 695.288171 241.6448 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f15-text_8"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(686.838171 270.149593) scale(0.13 -0.13)"> <use xlink:href="#f15-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> <g id="f15-text_9"> <!-- $a_n$ --> <g style="fill: var(--fig-ink)" transform="translate(409.313654 34.196953) scale(0.13 -0.13)"> <use xlink:href="#f15-DejaVuSerif-Italic-44" transform="translate(0 0.671875)"/> <use xlink:href="#f15-DejaVuSerif-Italic-51" transform="translate(59.619141 -14.328076) scale(0.7)"/> </g> </g> <g id="f15-text_10"> <!-- $\varepsilon$ --> <g style="fill: var(--fig-accent)" transform="translate(387.376364 148.001753) scale(0.13 -0.13)"> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(0 0.5625)"/> </g> </g> <g id="f15-text_11"> <!-- $\nu_\varepsilon = \varepsilon^2$ --> <g style="fill: var(--fig-steel)" transform="translate(475.984335 39.8432) scale(0.13 -0.13)"> <defs> <path id="f15-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-DejaVuSerif-Italic-335" transform="translate(0 0.746875)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(60.791016 -14.253076) scale(0.7)"/> <use xlink:href="#f15-DejaVuSerif-20" transform="translate(119.914551 0.746875)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(222.668457 0.746875)"/> <use xlink:href="#f15-DejaVuSerif-15" transform="translate(280.644066 42.046875) scale(0.7)"/> </g> </g> <g id="f15-text_12"> <!-- $\sqrt{n} \to +\infty$: dopo $\nu_\varepsilon$ tutti sopra $\varepsilon$ --> <g style="fill: var(--fig-ink)" transform="translate(448.546353 16.32) scale(0.12 -0.12)"> <defs> <path id="f15-DejaVuSerif-8d6" d="M 3488 5191 L 4078 5191 L 4078 4891 L 3719 4891 L 1863 -128 L 1656 -128 L 659 2631 L 269 2491 L 191 2741 L 1075 3047 L 1875 831 L 3488 5191 z " transform="scale(0.015625)"/> <path id="f15-DejaVuSerif-8da" d="M 2859 1747 Q 3016 1469 3223 1330 Q 3431 1191 3694 1191 Q 4009 1191 4209 1402 Q 4409 1613 4409 1941 Q 4409 2256 4225 2465 Q 4041 2675 3763 2675 Q 3509 2675 3304 2467 Q 3100 2259 2859 1747 z M 2478 2081 Q 2325 2356 2117 2493 Q 1909 2631 1644 2631 Q 1328 2631 1128 2423 Q 928 2216 928 1888 Q 928 1572 1112 1362 Q 1297 1153 1575 1153 Q 1828 1153 2033 1359 Q 2238 1566 2478 2081 z M 2700 1509 Q 2478 1084 2236 887 Q 1994 691 1697 691 Q 1275 691 983 1041 Q 691 1391 691 1906 Q 691 2453 952 2790 Q 1213 3128 1631 3128 Q 1928 3128 2162 2936 Q 2397 2744 2631 2303 Q 2844 2734 3091 2939 Q 3338 3144 3641 3144 Q 4056 3144 4351 2791 Q 4647 2438 4647 1919 Q 4647 1375 4386 1039 Q 4125 703 3706 703 Q 3409 703 3179 886 Q 2950 1069 2700 1509 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f15-DejaVuSerif-8d6" transform="translate(0 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-Italic-51" transform="translate(76.220703 0.421875)"/> <use xlink:href="#f15-DejaVuSerif-854" transform="translate(172.089844 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-e" transform="translate(293.808594 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-8da" transform="translate(396.5625 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-1d" transform="translate(479.863281 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(513.554688 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-47" transform="translate(545.341797 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-52" transform="translate(609.355469 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-53" transform="translate(669.560547 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-52" transform="translate(733.574219 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(793.779297 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-Italic-335" transform="translate(825.566406 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(886.357422 -14.109326) scale(0.7)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(926.516113 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-57" transform="translate(958.303223 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-58" transform="translate(998.48877 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-57" transform="translate(1062.893066 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-57" transform="translate(1103.078613 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-4c" transform="translate(1143.26416 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(1175.246582 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-56" transform="translate(1207.033691 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-52" transform="translate(1258.352051 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-53" transform="translate(1318.557129 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-55" transform="translate(1382.570801 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-44" transform="translate(1430.373535 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-3" transform="translate(1489.992676 0.890625)"/> <use xlink:href="#f15-DejaVuSerif-Italic-32d" transform="translate(1521.779785 0.890625)"/> <path d="M 63.720703 81.75 L 63.720703 88 L 153.125 88 L 153.125 81.75 L 63.720703 81.75 z "/> </g> </g> </g> </g> <defs> <clipPath id="f15-p5b110ffbb1"> <rect x="25.688171" y="24.32" width="304.363636" height="232.848"/> </clipPath> <clipPath id="f15-p6a01588404"> <rect x="390.924535" y="24.32" width="304.363636" height="232.848"/> </clipPath> </defs> </svg></figure>

> [!abstract] Definizione di $a_n \to +\infty$ (slide 14)
> Diciamo che $a_n \to +\infty$ se per ogni numero reale $\varepsilon > 0$ esiste un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $a_n > \varepsilon$.

Rispetto a $a_n \to 0$ cambia solo la relazione finale, e cambia il senso di $\varepsilon$: qui è una **soglia** da superare, e il primo giocatore, per mettere in difficoltà il secondo, la sceglie **sempre più grande** (slide 15). Il secondo deve trovare un'ascissa dopo la quale il grafico resta sopra la soglia. Il prof disegna due soglie $\varepsilon_1 < \varepsilon_2$: alla soglia più alta corrisponde un $\nu_{\varepsilon_2}$ più a destra. L'esempio più semplice (tautologico) è $a_n = n$: basta $\nu_\varepsilon = \varepsilon$.

> [!abstract] Definizione di $a_n \to -\infty$ (slide 16)
> Diciamo che $a_n \to -\infty$ se per ogni numero reale $\varepsilon > 0$ esiste un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $a_n < -\varepsilon$.

Il prof: "cambia solo la relazione". Si ottiene da $+\infty$ cambiando segno ad $a_n$: $a_n \to -\infty \iff -a_n \to +\infty$.

> [!abstract] Definizione di $a_n \to \ell$, $\ell \in \mathbb{R}$ (slide 17)
> Diciamo che $a_n \to \ell$ se per ogni numero reale $\varepsilon > 0$ esiste un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $-\varepsilon < a_n - \ell < \varepsilon$.

Si ottiene da $a_n \to 0$ con una "traslazione verticale": $a_n \to \ell \iff a_n - \ell \to 0$. La condizione $-\varepsilon < a_n - \ell < \varepsilon$ equivale a $|a_n - \ell| < \varepsilon$, cioè a $\ell - \varepsilon < a_n < \ell + \varepsilon$: sul grafico la striscia ora è centrata sulla retta $y = \ell$.

**Riassunto** (slide 18, con le annotazioni del prof). Il comportamento di $(a_n)$ per $n \to +\infty$ è descritto da uno dei casi
$$
\lim_{n \to +\infty} a_n = \begin{cases} 0 \\ +\infty \\ -\infty \\ \ell \end{cases} \quad \text{se } \forall \varepsilon > 0\ \exists \nu_\varepsilon \ (\text{oppure } n(\varepsilon)) \ \text{t.c.}\ \forall n > \nu_\varepsilon \quad \begin{cases} -\varepsilon < a_n < \varepsilon \\ a_n > \varepsilon \\ a_n < -\varepsilon \\ -\varepsilon < a_n - \ell < \varepsilon \end{cases}
$$

Il prefisso è lo stesso in tutti e quattro: si impara una volta e si cambia solo la relazione finale.

> [!info] Vocabolario
> Una successione con limite finito $\ell$ si dice **convergente** (a $\ell$): è la definizione che il prof sottolinea nella slide 22. Una con limite $\pm\infty$ si dice **divergente**. Ci sono successioni che non hanno limite, come $(-1)^n$: lo si mostra con le sottosuccessioni, nelle slide subito dopo la 25.

### Sottosuccessione (slide 24, 30/9)

> [!abstract] Definizione (sottosuccessione)
> Data una successione $(a_n)_n$, diciamo **sottosuccessione** (o successione estratta) di $(a_n)_n$ ogni successione del tipo $(a_{n_k})_{k \in \mathbb{N}}$, dove
> $$
> n_1 < n_2 < n_3 < \dots < n_k < n_{k+1} < \dots
> $$
> è una successione strettamente crescente di indici interi.

Si considera un nuovo indice indipendente $k$ e si ottiene una nuova successione $b_k = a_{n_k}$ per ogni $k$. Le annotazioni del prof: $(n_k)$ è una successione crescente di numeri naturali, e $n_k$ è l'indice **rispetto alla successione originale**. In pratica si scorre la successione e se ne tiene un pezzo infinito, senza cambiare l'ordine e senza ripetere termini.

## Enunciati

### Somma della progressione geometrica (slide 10, 28/9)

> [!abstract] Somma geometrica
> Per $q \neq 1$ e $n \in \mathbb{N}$:
> $$
> S_n := \sum_{k=0}^{n} q^k = 1 + q + q^2 + \dots + q^n = \frac{q^{n+1} - 1}{q - 1}
> $$
> Per $q = 1$ ogni termine vale $1$ e $\ \sum_{k=0}^{n} 1^k = n + 1$.

> [!note]- Dimostrazione (svolta a lezione)
> Si moltiplica $S_n$ per $q$:
> $$
> q \cdot S_n = q(1 + q + q^2 + \dots + q^n) = q + q^2 + q^3 + \dots + q^{n+1}
> $$
> Sottraendo $S_n$, tutti i termini da $q$ a $q^n$ compaiono in entrambe e si cancellano. Restano $q^{n+1}$ dalla prima e $-1$ dalla seconda:
> $$
> q \cdot S_n - S_n = q^{n+1} - 1, \quad \text{ovvero} \quad S_n(q - 1) = q^{n+1} - 1
> $$
> Siccome $q \neq 1$ si può dividere per $q - 1$: $S_n = \frac{q^{n+1} - 1}{q - 1}$ per ogni $n \geq 0$. $\blacksquare$

Esempio: $1 + 2 + 4 + \dots + 2^9 = \frac{2^{10} - 1}{2 - 1} = 1023$.

### Binomio di Newton (slide 9)

La riga $n$-esima del triangolo di Tartaglia dà i coefficienti dello sviluppo di $(a+b)^n$:
$$
(a+b)^2 = a^2 + 2ab + b^2 \qquad (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
$$
$$
(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4
$$

> [!abstract] Teorema (binomio di Newton)
> Siano $a, b \in \mathbb{R}$ e $n \in \mathbb{N}$. Allora
> $$
> (a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
> $$

Il prof aggiunge la riga $5$ ($1, 5, 10, 10, 5, 1$, ottenuta dalla riga $4$ con la regola della somma):
$$
(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5
$$

Lo schema: l'esponente di $a$ scende da $n$ a $0$, quello di $b$ sale da $0$ a $n$, la somma dei due è sempre $n$. Il perché combinatorio: sviluppando $(a+b)(a+b)\cdots(a+b)$ si sceglie da ogni fattore $a$ oppure $b$; il termine $a^{n-k}b^k$ compare una volta per ogni modo di scegliere i $k$ fattori da cui prendere $b$, cioè $\binom nk$ volte.

### Unicità del limite (slide 21, 30/9)

> [!abstract] Teorema (unicità del limite)
> Se $a_n \to x$ e $a_n \to y$, allora $x = y$.

Una successione non può avere due limiti diversi, quindi scrivere "$\lim a_n = \ell$" ha senso: il limite, se c'è, è uno solo.

> [!note]- Dimostrazione (svolta a lezione per assurdo, con $x, y \in \mathbb{R}$)
> Supponiamo $x \neq y$. Scegliamo $\varepsilon$ tale che gli intervalli $(x - \varepsilon, x + \varepsilon)$ e $(y - \varepsilon, y + \varepsilon)$ siano **disgiunti**: va bene $\varepsilon = \frac{|x - y|}{2}$.
>
> Per la definizione di $a_n \to x$ esiste $\nu_1$ tale che per $n > \nu_1$ si ha $a_n \in (x - \varepsilon, x + \varepsilon)$. Per la definizione di $a_n \to y$ esiste $\nu_2$ tale che per $n > \nu_2$ si ha $a_n \in (y - \varepsilon, y + \varepsilon)$.
>
> Preso $n > \max(\nu_1, \nu_2)$, il numero $a_n$ sta in entrambi gli intervalli, che però non hanno punti in comune. Si ottiene una contraddizione con le definizioni di $\lim a_n = x$ e $\lim a_n = y$. Quindi $x = y$. $\blacksquare$
>
> Il prof disegna le due strisce orizzontali attorno a $y = x$ e $y = y$, separate: da un certo indice in poi i punti dovrebbero stare in tutte e due.

Il teorema vale anche coi limiti infiniti (una successione non può tendere sia a $+\infty$ sia a $\ell$, per esempio): la dimostrazione è la stessa, con una striscia attorno a $\ell$ e una soglia sopra di essa. A lezione il prof ha fatto il caso finito.

### Limitatezza delle successioni convergenti (slide 22)

> [!abstract] Teorema (limitatezza delle successioni convergenti)
> Se $a_n$ è convergente, cioè $a_n \to \ell$ con limite finito, allora esiste $M \in \mathbb{R}$ tale che $|a_n| \leq M$ per ogni $n \in \mathbb{N}$.

Il prof: brevemente si dice "$a_n$ è **limitata**" (pensare a "delimitata": tutti i termini stanno nella fascia fra $-M$ e $M$).

> [!note]- Dimostrazione (svolta a lezione)
> **I termini dopo una certa soglia.** Fissato $\varepsilon = 1$, per la definizione di limite esiste $\nu_1$ tale che per ogni $n > \nu_1$ vale $\ell - 1 < a_n < \ell + 1$. Detto $M_1 = \max\big(|\ell - 1|, |\ell + 1|\big)$ segue
> $$
> |a_n| \leq M_1 \qquad \forall n > \nu_1
> $$
> perché un numero compreso fra $\ell - 1$ e $\ell + 1$ ha modulo non più grande del maggiore fra i moduli degli estremi.
>
> **I termini prima della soglia.** I termini $a_n$ con $n \leq \nu_1$ sono un numero **finito**, quindi esiste il massimo dei loro moduli:
> $$
> M_2 := \max\{|a_n| : n \leq \nu_1\}
> $$
>
> **Insieme.** Definiamo $M := \max(M_1, M_2)$. Allora $|a_n| \leq M$ per ogni $n \in \mathbb{N}$: se $n > \nu_1$ perché $|a_n| \leq M_1 \leq M$, se $n \leq \nu_1$ perché $|a_n| \leq M_2 \leq M$. $\blacksquare$

Il punto chiave è che "da un certo punto in poi" lascia fuori solo un numero finito di termini, e un insieme finito di numeri ha sempre un massimo. Il viceversa è falso: $(-1)^n$ è limitata ($|(-1)^n| = 1$) ma non converge.

## Metodo

### Verificare un limite con la definizione

Lo schema del prof (30/9) per $\lim a_n = \ell$:
1. **Fissa** $\varepsilon > 0$ qualsiasi. Non scegli tu un valore: $\varepsilon$ resta una lettera.
2. **Obiettivo**: trovare $\nu_\varepsilon$ tale che per ogni $n > \nu_\varepsilon$ valga la relazione della definizione ($-\varepsilon < a_n - \ell < \varepsilon$, oppure $a_n > \varepsilon$ per $+\infty$).
3. **Risolvi la relazione rispetto alla variabile $n$**, come una disequazione in $n$. Se è una doppia disuguaglianza, una alla volta.
4. Speri che l'insieme delle soluzioni **contenga un intervallo** della forma $(\nu_\varepsilon, +\infty)$: quel $\nu_\varepsilon$ è la risposta. Una disuguaglianza vera per tutti gli $n$ non pone condizioni.
5. **Conclusione**: "per ogni $n > \nu_\varepsilon$ la relazione è soddisfatta".

Gli strumenti per il passo 3:
- **Archimede**: per ogni $x \in \mathbb{R}$ esiste un naturale $n > x$. Ogni volta che basta "un naturale abbastanza grande", è lui.
- **Monotonia**: si applica a entrambi i membri una funzione strettamente crescente ($\log_a$ con $a > 1$, $t \mapsto t^{1/b}$ su $(0, +\infty)$) e il verso della disuguaglianza resta. Con una funzione decrescente ($\log_a$ con $0 < a < 1$) il verso si gira.
- **Maggiorare**: non serve la $\nu_\varepsilon$ più piccola possibile, ne basta una. Se $a_n > b_n$ e $b_n > \varepsilon$ per $n > \nu$, anche $a_n > \varepsilon$ per $n > \nu$.

## Esempi svolti a lezione

### Una successione per i dispari (pagina dopo la slide 6, 28/9)

Scrivere una successione che rappresenti i numeri dispari in ordine crescente. Il prof: $(a_n)_{n \in \mathbb{N}}$ con $a_n = 2n + 1$. Controllo: $n = 0 \Rightarrow a_0 = 1$, $n = 1 \Rightarrow a_1 = 3$, $n = 2 \Rightarrow a_2 = 5$, e così via. (<span class="src">28/9, pagina 18</span>)

### $\frac{1}{n} \to 0$ con la definizione (slide 12, 30/9)

Verificare che $(a_n)_{n > 0}$ con $a_n = \frac1n$ soddisfa $a_n \to 0$ (<span class="src">30/9, pagine 3-5</span>).
- Fissiamo un qualunque $\varepsilon > 0$, la soglia di tolleranza.
- Per un corollario della proprietà di Archimede sappiamo che esiste $n(\varepsilon) \in \mathbb{N}$ tale che $\frac{1}{n(\varepsilon)} < \varepsilon$ (basta prendere $n(\varepsilon) > \frac1\varepsilon$).
- In particolare per ogni $n > n(\varepsilon)$ vale
$$
a_n = \frac1n < \frac{1}{n(\varepsilon)} < \varepsilon
$$
perché un denominatore più grande dà una frazione più piccola. Quindi $|a_n - 0| < \varepsilon$ per ogni $n > n(\varepsilon)$, cioè $\frac1n \to 0$.

La slide dà la stessa cosa in una riga: $-\varepsilon < \frac1n < \varepsilon$ segue da $n > \nu_\varepsilon = \varepsilon^{-1}$. La disuguaglianza di sinistra è sempre vera ($\frac1n > 0$), quella di destra equivale a $n > \frac1\varepsilon$.

### $\sqrt{n} \to +\infty$ con la definizione (30/9)

Verificare che $a_n = \sqrt n$ soddisfa $a_n \to +\infty$ (<span class="src">30/9, pagine 13-14</span>).
- Fissiamo $\varepsilon > 0$ qualsiasi, "pensato come numero grande".
- Obiettivo: trovare $n(\varepsilon)$ tale che $a_n > \varepsilon$ per ogni $n > n(\varepsilon)$.
- Per la proprietà di Archimede esiste $n(\varepsilon) > \varepsilon^2$, quindi $\sqrt{n(\varepsilon)} > \varepsilon$ (la radice è crescente).
- Allora per ogni $n > n(\varepsilon)$: $a_n = \sqrt n > \sqrt{n(\varepsilon)} > \varepsilon$.

### $\lim \frac{n-1}{n+1} = 1$ (slide 19, esercizio a)

Qui $a_n = \frac{n-1}{n+1}$ e $\ell = 1$ (<span class="src">30/9, pagine 16-20</span>). Dobbiamo mostrare che per ogni $\varepsilon > 0$ esiste $\nu_\varepsilon$ tale che per ogni $n > \nu_\varepsilon$ vale
$$
-\varepsilon \overset{(1)}{<} \frac{n-1}{n+1} - 1 \overset{(2)}{<} \varepsilon
$$
Chiediamoci per quali valori di $n$ valgono la (1) e la (2). Il trucco del prof per semplificare: al numeratore si aggiunge e si toglie $2$,
$$
\frac{n-1}{n+1} - 1 = \frac{n + 1 - 2}{n+1} - 1 = 1 - \frac{2}{n+1} - 1 = -\frac{2}{n+1}
$$
- **(1)** diventa $-\frac{2}{n+1} > -\varepsilon$, cioè $\frac{2}{n+1} < \varepsilon$, cioè $n + 1 > \frac2\varepsilon$.
- **(2)** diventa $-\frac{2}{n+1} < \varepsilon$: il membro sinistro è negativo e il destro positivo, quindi è **sempre verificata**, per tutti gli $n$.

Come scegliamo $\nu_\varepsilon$? $\ \nu_\varepsilon := \frac{2}{\varepsilon} - 1$. Per ogni $n > \nu_\varepsilon$ la (1) è soddisfatta, e la (2) lo è sempre. $\blacksquare$

Controllo con un numero: $\varepsilon = \frac{1}{10}$ dà $\nu_\varepsilon = 19$; per $n = 20$, $|a_{20} - 1| = \frac{2}{21} < \frac{1}{10}$, mentre per $n = 19$ si ha $\frac{2}{20} = \frac1{10}$, non minore.

### $\lim a^n = +\infty$ per $a > 1$ (slide 19, esercizio b1)

Obiettivo: mostrare che per ogni $\varepsilon > 0$ esiste $\nu_\varepsilon$ tale che per ogni $n > \nu_\varepsilon$ vale la relazione (3) $a^n > \varepsilon$, dove $a^n$ è l'elemento generico della successione (<span class="src">30/9, pagine 21-22</span>).

Dobbiamo risolvere la (3) rispetto alla variabile $n$ e sperare che l'insieme delle soluzioni contenga un intervallo $(\nu_\varepsilon, +\infty)$. Siccome $a > 1$, la funzione $t \mapsto \log_a t$ è **crescente**, e applicandola ai due membri il verso resta:
$$
a^n > \varepsilon \iff n > \log_a(\varepsilon)
$$
Scegliendo $\nu_\varepsilon := \log_a(\varepsilon)$ abbiamo che per ogni $n > \nu_\varepsilon$ vale (3), ovvero $a^n > \varepsilon$. $\blacksquare$

**L'osservazione sul logaritmo con base fra $0$ e $1$** (pagine 23-25). Il prof si chiede com'è il grafico di $\log_a$ quando $0 < a < 1$, sapendo com'è con $a > 1$ (strettamente crescente). Nota che $a > 1 \iff 0 < a^{-1} < 1$, e usa il cambio di base $\log_a t = \frac{\log t}{\log a}$:
$$
\log_{a^{-1}} t = \frac{\log t}{\log(a^{-1})} = \frac{\log t}{-\log a} = -\log_a t
$$
Quindi il grafico di $\log_{a^{-1}}$ è il riflesso di quello di $\log_a$ rispetto all'asse $x$: con base fra $0$ e $1$ il logaritmo è strettamente **decrescente**. È quello che serve per il caso $0 < a < 1$ di $a^n$, lasciato come esercizio (esercizio 3 in fondo).

### Sottosuccessioni (slide 25)

**Esempio 1.** $a_n = \frac1n$ con $n_k = k^2$, cioè $b_k = \frac{1}{k^2}$. Il prof scrive la successione $1, \frac12, \frac13, \frac14, \dots, \frac19, \frac1{10}, \dots$ e cerchia i termini di indice $1, 4, 9$: sono $b_1 = 1$, $b_2 = \frac14$, $b_3 = \frac19$. L'indice $k$ conta i termini estratti, $n_k$ dice dove stavano nella successione originale. Qui $k$ parte da $1$, come $n$.

**Esempio 2.** $a_n = (-1)^n$.
- La sottosuccessione dei termini di indice pari è $p_k = a_{2k} = (-1)^{2k} = 1$: costante.
- La sottosuccessione dei termini di indice dispari è $d_k = a_{2k+1} = (-1)^{2k+1} = -1$: costante.

Due sottosuccessioni con limiti diversi ($1$ e $-1$): è l'idea che, nelle slide successive, mostra che $(-1)^n$ non ha limite.

## Esercizi tipo esame

### Crocette (stile parte 1)

**C1.** Quale formula definisce $\lim_{n \to +\infty} a_n = -\infty$?
a) $\forall \varepsilon > 0\ \exists \nu_\varepsilon : \forall n > \nu_\varepsilon,\ a_n < -\varepsilon$
b) $\exists \nu\ \forall \varepsilon > 0 : \forall n > \nu,\ a_n < -\varepsilon$
c) $\forall \varepsilon > 0\ \exists \nu_\varepsilon : \forall n > \nu_\varepsilon,\ |a_n| > \varepsilon$
d) $\forall \varepsilon > 0\ \exists \nu_\varepsilon : \exists n > \nu_\varepsilon,\ a_n < -\varepsilon$

> [!example]- Soluzione
> **a**. La b) scambia i quantificatori: chiederebbe un'unica soglia che vada bene per ogni $\varepsilon$, impossibile per una successione reale ($a_n < -\varepsilon$ per ogni $\varepsilon$ non è soddisfatto da nessun numero). La c) è soddisfatta anche da $(-1)^n n$, che oscilla e non tende a $-\infty$: è la definizione di $|a_n| \to +\infty$. La d) chiede un solo termine oltre la soglia invece che tutti.

**C2.** $\displaystyle\sum_{k=0}^{9} 2^k$ vale:
a) $512$
b) $1023$
c) $1024$
d) $2047$

> [!example]- Soluzione
> **b**. Somma geometrica con $q = 2$ e $n = 9$: $\frac{2^{10} - 1}{2 - 1} = 1023$. La c) è $2^{10}$, l'errore di dimenticare il $-1$; la a) è l'ultimo termine $2^9$; la d) usa $n + 1 = 11$ all'esponente sbagliando di uno l'indice finale.

**C3.** Nello sviluppo di $(a + b)^5$ il coefficiente di $a^2 b^3$ è:
a) $5$
b) $6$
c) $10$
d) $15$

> [!example]- Soluzione
> **c**. Il termine $a^{n-k}b^k$ con $n = 5$, $k = 3$ ha coefficiente $\binom53 = \frac{5 \cdot 4 \cdot 3}{3!} = 10$. Riga $5$ del triangolo: $1, 5, 10, 10, 5, 1$. La d) è $\binom62$.

**C4.** Quale affermazione è vera per ogni successione reale $(a_n)$?
a) se $(a_n)$ è limitata, allora è convergente
b) se $(a_n)$ è convergente, allora è limitata
c) se $(a_n)$ è limitata, allora ha limite finito o infinito
d) se $|a_n| \to 1$, allora $a_n \to 1$ oppure $a_n \to -1$

> [!example]- Soluzione
> **b**, il teorema della slide 22. La a) e la c) sono smentite da $(-1)^n$, limitata ma senza limite. La d) anche: $|(-1)^n| = 1 \to 1$, ma $(-1)^n$ non tende né a $1$ né a $-1$.

### Esercizi (stile parte 2)

**Esercizio 1.** Verificare con la definizione che $\displaystyle\lim_{n \to +\infty} \frac{2n + 1}{n + 3} = 2$.

> [!example]- Soluzione
> Fissiamo $\varepsilon > 0$. Cerchiamo $\nu_\varepsilon$ tale che per ogni $n > \nu_\varepsilon$ valga $\left|\frac{2n+1}{n+3} - 2\right| < \varepsilon$.
>
> Semplifichiamo la differenza:
> $$
> \frac{2n+1}{n+3} - 2 = \frac{2n + 1 - 2n - 6}{n + 3} = -\frac{5}{n+3}
> $$
> quindi la relazione diventa $\frac{5}{n+3} < \varepsilon$ (il modulo toglie il segno, e $n + 3 > 0$). Risolvendo in $n$:
> $$
> \frac{5}{n+3} < \varepsilon \iff n + 3 > \frac5\varepsilon \iff n > \frac5\varepsilon - 3
> $$
> Scegliendo $\nu_\varepsilon := \frac{5}{\varepsilon} - 3$, per ogni $n > \nu_\varepsilon$ vale $|a_n - 2| < \varepsilon$. $\blacksquare$
>
> Controllo: con $\varepsilon = \frac12$, $\nu_\varepsilon = 7$; per $n = 8$, $|a_8 - 2| = \frac{5}{11} < \frac12$.

**Esercizio 2** (lasciato dal prof il 30/9). Mostrare che se $0 < a < 1$ allora $\displaystyle\lim_{n \to +\infty} a^n = 0$.

> [!example]- Soluzione
> Fissiamo $\varepsilon > 0$. Cerchiamo $\nu_\varepsilon$ tale che per $n > \nu_\varepsilon$ valga $-\varepsilon < a^n < \varepsilon$.
>
> La disuguaglianza di sinistra è sempre vera, perché $a^n > 0$. Per quella di destra si applica $\log_a$, che con $0 < a < 1$ è **decrescente**: il verso si gira.
> $$
> a^n < \varepsilon \iff n > \log_a(\varepsilon)
> $$
> Scegliendo $\nu_\varepsilon := \log_a(\varepsilon)$, per ogni $n > \nu_\varepsilon$ vale $|a^n - 0| < \varepsilon$. $\blacksquare$
>
> Se $\varepsilon \geq 1$ il numero $\log_a \varepsilon$ è $\leq 0$ e la condizione vale per ogni $n \geq 1$: giusto, perché $a^n < 1 \leq \varepsilon$. Il caso interessante è $\varepsilon$ piccolo. Controllo con $a = \frac12$, $\varepsilon = \frac{1}{100}$: $\log_{1/2}\frac{1}{100} = \log_2 100 \approx 6{,}6$, e infatti $\frac{1}{2^7} = \frac{1}{128} < \frac{1}{100}$ mentre $\frac{1}{2^6} = \frac1{64}$ no.

**Esercizio 3** (lasciati per casa, slide 19-20). Dati $b > 0$ e $a > 1$, verificare con la definizione che $\lim n^b = +\infty$ e $\lim \log_a n = +\infty$.

> [!example]- Soluzione
> **$n^b$.** Fissiamo $\varepsilon > 0$. La funzione $t \mapsto t^{1/b}$ è strettamente crescente su $(0, +\infty)$ (esponente positivo), quindi
> $$
> n^b > \varepsilon \iff n > \varepsilon^{1/b}
> $$
> e basta $\nu_\varepsilon := \varepsilon^{1/b}$. Con $b = \frac12$ si ritrova l'esempio $\sqrt n$, con $\nu_\varepsilon = \varepsilon^2$.
>
> **$\log_a n$.** Fissiamo $\varepsilon > 0$. Con $a > 1$ la funzione $t \mapsto a^t$ è strettamente crescente, quindi
> $$
> \log_a n > \varepsilon \iff n > a^\varepsilon
> $$
> e basta $\nu_\varepsilon := a^\varepsilon$. $\blacksquare$

**Esercizio 4.** Dimostrare la proprietà del triangolo di Tartaglia $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ per $1 \leq k \leq n - 1$, partendo dalla definizione col fattoriale.

> [!example]- Soluzione
> Si scrivono i due addendi col fattoriale e si porta tutto a denominatore comune $k!\,(n-k)!$:
> $$
> \binom{n-1}{k-1} = \frac{(n-1)!}{(k-1)!\,(n-k)!} = \frac{(n-1)! \cdot k}{k!\,(n-k)!}
> $$
> usando $k! = k \cdot (k-1)!$, e
> $$
> \binom{n-1}{k} = \frac{(n-1)!}{k!\,(n-1-k)!} = \frac{(n-1)! \cdot (n-k)}{k!\,(n-k)!}
> $$
> usando $(n-k)! = (n-k)\cdot(n-k-1)!$. Sommando:
> $$
> \frac{(n-1)!\,\big(k + (n - k)\big)}{k!\,(n-k)!} = \frac{(n-1)! \cdot n}{k!\,(n-k)!} = \frac{n!}{k!\,(n-k)!} = \binom nk
> $$
> Si usa la proprietà $n! = n \cdot (n-1)!$ della slide 7. $\blacksquare$
>
> Lettura combinatoria, per ricordarla: fra $n$ oggetti fissane uno. Le scelte di $k$ oggetti che lo contengono sono $\binom{n-1}{k-1}$ (scegli gli altri $k-1$ fra i restanti), quelle che non lo contengono sono $\binom{n-1}{k}$.

**Esercizio 5.** Calcolare $\displaystyle\sum_{k=1}^{8} \frac{1}{2^k}$ e dire se la successione $S_n = \displaystyle\sum_{k=0}^{n} \frac{1}{2^k}$ è limitata.

> [!example]- Soluzione
> La somma parte da $k = 1$: si toglie il termine $k = 0$ dalla formula. Con $q = \frac12$ e $n = 8$:
> $$
> \sum_{k=0}^{8} \left(\tfrac12\right)^k = \frac{\left(\frac12\right)^9 - 1}{\frac12 - 1} = 2\left(1 - \frac{1}{512}\right) = 2 - \frac{1}{256}
> $$
> quindi $\displaystyle\sum_{k=1}^{8} \frac{1}{2^k} = 2 - \frac1{256} - 1 = \frac{255}{256}$.
>
> In generale $S_n = 2\left(1 - \frac{1}{2^{n+1}}\right) = 2 - \frac{1}{2^n}$. Siccome $0 < \frac{1}{2^n} \leq 1$, vale $1 \leq S_n < 2$ per ogni $n$: la successione è limitata, con $M = 2$. (Converge a $2$, perché $\frac{1}{2^n} \to 0$ per l'esercizio 2; ma la limitatezza qui si vede direttamente.)

## Errori tipici

- **Scegliere un numero per $\varepsilon$.** Nella verifica $\varepsilon$ resta una lettera: provare con $\varepsilon = 0{,}1$ è un controllo, non una dimostrazione.
- **Scambiare "per ogni $\varepsilon$" ed "esiste $\nu$".** $\nu_\varepsilon$ dipende da $\varepsilon$ e viene dopo.
- **Dimenticare che $\nu_\varepsilon$ deve funzionare per tutti gli $n > \nu_\varepsilon$**, non per uno solo.
- **Girare o non girare la disuguaglianza a caso.** Applicando $\log_a$ il verso resta se $a > 1$ e si gira se $0 < a < 1$.
- **Credere che limitata implichi convergente.** $(-1)^n$ è il controesempio da avere sempre pronto.
- **Sbagliare l'indice nella somma geometrica.** $\sum_{k=0}^{n} q^k$ ha $n + 1$ termini, e all'esponente compare $n + 1$. Se la somma parte da $k = 1$ si toglie il termine $q^0 = 1$.
- **$\binom nk$ con l'ordine.** $\frac{n!}{(n-k)!}$ conta le scelte ordinate; per le non ordinate si divide ancora per $k!$.
- **Sottosuccessione con indici che si ripetono o tornano indietro.** Gli $n_k$ devono essere strettamente crescenti: $a_1, a_1, a_2, \dots$ o $a_3, a_1, \dots$ non sono sottosuccessioni.

## Domande

- Che cos'è una successione reale, e perché il suo grafico è fatto di punti isolati?

- Definisci $n!$ e spiega perché conta le permutazioni di $n$ oggetti.

- Che cosa conta $\binom nk$, e come si ricava $\frac{n!}{k!(n-k)!}$ dal conto delle scelte ordinate?

- Enuncia il binomio di Newton. Dove si legge il coefficiente di $a^{n-k}b^k$ nel triangolo di Tartaglia?

- Ricava la formula della somma $1 + q + \dots + q^n$ per $q \neq 1$. Quanto vale per $q = 1$?

- Scrivi con i quantificatori le definizioni di $a_n \to \ell$, $a_n \to +\infty$, $a_n \to -\infty$. Cosa cambia fra una e l'altra?

- Spiega il "gioco a due giocatori" per $a_n \to 0$ e per $a_n \to +\infty$: chi sceglie cosa, e in che direzione il primo giocatore spinge $\varepsilon$?

- Perché nella definizione di limite l'ordine "per ogni $\varepsilon$, esiste $\nu_\varepsilon$" non si può scambiare?

- Verifica con la definizione che $\frac1n \to 0$. Dove entra la proprietà di Archimede?

- Enuncia e dimostra il teorema di unicità del limite. Come si sceglie $\varepsilon$?

- Enuncia e dimostra il teorema di limitatezza delle successioni convergenti. Perché i primi termini non creano problemi?

- Vale il viceversa del teorema di limitatezza? Dai un controesempio.

- Definisci una sottosuccessione. Che condizione devono soddisfare gli indici $n_k$?

- Quali sono la sottosuccessione dei pari e quella dei dispari di $(-1)^n$?

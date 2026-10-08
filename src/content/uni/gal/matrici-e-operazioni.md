---
title: Matrici e operazioni
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-10-05
lezioni: []
ordine: 7
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L5, lun 5/10 (3 ore), prima parte. Fonte: quaderno di Pietro p. 48-55 (gli appunti scritti della prof sul capitolo 3 non sono ancora su Moodle); dispensa Postinghel, capitolo 3: <span class="src">p. 63-64</span> (matrici e casi particolari), <span class="src">p. 65-66</span> (somma, prodotto per scalare, combinazione lineare), <span class="src">p. 66-68</span> (prodotto righe per colonne e proprietà). Prima: [Sistemi lineari](/uni/gal/sistemi-lineari/), dove la matrice compare solo come tabella dei coefficienti. Dopo, nella stessa lezione: [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/) e [Matrici invertibili](/uni/gal/matrici-invertibili/).

> [!abstract] Per l'esame
> - **Saper enunciare**: matrice $m \times n$, $M_{m \times n}(\mathbb{R})$, matrice quadrata, nulla, identità, colonna, riga, trasposta, simmetrica; somma, prodotto per scalare, combinazione lineare; quando $A$ è conformabile a sinistra a $B$ e come si definisce $AB$; le proprietà del prodotto e perché non è commutativo. È la domanda 3.1 del [foglio 3](/uni/gal/foglio-3-svolto/).
> - **Saper fare**: dire se un prodotto si può fare e che ordine ha il risultato; calcolare $AB$ elemento per elemento senza sbagliare verso (riga di $A$, colonna di $B$); trovare un controesempio a $AB = BA$.
> - **Dove esce**: domanda 3.1 ed esercizio 3.7 del foglio 3, e dentro ogni esercizio su inverse e sistemi in forma $A\vec{x} = \vec{b}$. Un errore nel prodotto si porta dietro tutto il resto dell'esercizio.

**Da dove arriva.** Nel capitolo 2 la matrice era un modo comodo di scrivere un sistema. Ora diventa un oggetto con le sue operazioni: si sommano, si moltiplicano per un numero, si moltiplicano fra loro. Il prodotto è definito in modo che il sistema intero si scriva $A\vec{x} = \vec{b}$ ([Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/)) e che le operazioni elementari di Gauss-Jordan diventino moltiplicazioni ([Matrici invertibili](/uni/gal/matrici-invertibili/)).

```
   somma A + B        stesso ordine m×n          elemento per elemento
   λA                 qualunque A                ogni elemento per λ
   prodotto AB        A m×n, B n×q               (AB)_ik = riga i di A · colonna k di B
                      colonne di A = righe di B  risultato m×q
```

## Definizioni

### Matrice

La prof (quaderno p. 48; dispensa <span class="src">Def. 23</span>): dati $m, n \geq 1$ numeri naturali, una **matrice di ordine $m \times n$** a coefficienti reali è una tabella con $m$ righe e $n$ colonne
$$
A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & & & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix} = [a_{ij}]
$$
dove $a_{ij}$ è l'elemento sulla $i$-esima riga e sulla $j$-esima colonna. **$M_{m \times n}(\mathbb{R})$** è l'insieme di tutte le matrici $m \times n$ a coefficienti reali.

Il primo indice è sempre la riga, il secondo la colonna: $a_{23}$ sta in riga 2, colonna 3. Lo stesso vale per l'ordine: $2 \times 3$ vuol dire 2 righe e 3 colonne.

### Casi particolari

- **Matrice quadrata di ordine $n$**: $m = n$. L'insieme si scrive $M_n(\mathbb{R})$. Solo in questo caso gli elementi $a_{11}, a_{22}, \ldots, a_{nn}$ formano la **diagonale** (principale) della matrice (quaderno p. 48).
- **Matrice colonna** o **vettore colonna**: ordine $m \times 1$, una colonna sola. **Matrice riga** o **vettore riga**: ordine $1 \times n$. Nel quaderno sono scritte giuste; la dispensa (<span class="src">p. 64</span>) ha i due ordini scambiati, è un refuso.
- **Matrice nulla** $O_{m \times n}$: tutti gli elementi uguali a $0$.
- **Matrice identità** $I_n$: quadrata di ordine $n$, con $1$ sulla diagonale e $0$ altrove. Si scrive $I_n = [\delta_{ij}]$, con il **delta di Kronecker** $\delta_{ij} = 1$ se $i = j$ e $\delta_{ij} = 0$ se $i \neq j$. La prof la introduce come **elemento neutro** del prodotto (quaderno p. 53): fa per il prodotto di matrici quello che fa $1$ per il prodotto di numeri.
$$
O_{2 \times 3} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \qquad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

### Trasposta e matrice simmetrica

La prof (quaderno p. 48-49; dispensa <span class="src">Def. 27</span>): data $A = [a_{ij}] \in M_{m \times n}(\mathbb{R})$, la **trasposta** è $A^T = [a_{ji}]$, ottenuta scambiando le righe con le colonne. In particolare $A^T \in M_{n \times m}(\mathbb{R})$. Se $A$ è quadrata e $A = A^T$, $A$ si dice **simmetrica**.

**Perché conta.** La riga $i$ di $A$ diventa la colonna $i$ di $A^T$. Una matrice simmetrica è "specchiata" rispetto alla diagonale: $a_{ij} = a_{ji}$. Per questo deve essere quadrata: se $m \neq n$, $A$ e $A^T$ non hanno nemmeno lo stesso ordine.

Esempio (dispensa, es. 26):
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix},\ A^T = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} \qquad B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = B^T
$$
$B$ è simmetrica, $A$ no. Anche $O_n$ e $I_n$ sono simmetriche.

### Somma e matrice opposta

La prof (quaderno p. 50; dispensa <span class="src">Def. 28-29</span>): prese due matrici **dello stesso ordine** $A = [a_{ij}]$, $B = [b_{ij}] \in M_{m \times n}(\mathbb{R})$, la **somma** $C = A + B$ è la matrice $m \times n$
$$
C = [c_{ij}] = [a_{ij} + b_{ij}]
$$
La **matrice opposta** di $A$ è $-A = [-a_{ij}]$. (La dispensa scrive $[-a_{ji}]$: è un refuso, gli indici non si scambiano.)

Esempio (dispensa, es. 27): $\begin{pmatrix} 1 & 2 & 3 \\ 3 & 4 & 5 \end{pmatrix} + \begin{pmatrix} 1 & -2 & 0 \\ 2 & 4 & -1 \end{pmatrix} = \begin{pmatrix} 2 & 0 & 3 \\ 5 & 8 & 4 \end{pmatrix}$. Due matrici di ordine diverso non si sommano.

### Prodotto per uno scalare e combinazione lineare

La prof (quaderno p. 51; dispensa <span class="src">Def. 30-31</span>): data $A = [a_{ij}] \in M_{m \times n}(\mathbb{R})$ e $\lambda \in \mathbb{R}$, il **prodotto di $A$ per $\lambda$** è la matrice $m \times n$
$$
\lambda A = [\lambda a_{ij}]
$$
Combinando le due operazioni: date $A, B \in M_{m \times n}(\mathbb{R})$ e $\lambda, \mu \in \mathbb{R}$, la matrice $\lambda A + \mu B$ si chiama **combinazione lineare** di $A$ e $B$ a coefficienti $\lambda, \mu$.

Esempio: $3\begin{pmatrix} 1 & -2 & 0 \\ 2 & 4 & -1 \end{pmatrix} = \begin{pmatrix} 3 & -6 & 0 \\ 6 & 12 & -3 \end{pmatrix}$ (dispensa, es. 29).

### Prodotto righe per colonne

**Conformabile.** La prof (quaderno p. 52; dispensa <span class="src">Def. 32</span>): $A \in M_{m \times n}(\mathbb{R})$ si dice **conformabile a sinistra** a $B \in M_{m' \times n'}(\mathbb{R})$ se il numero di colonne di $A$ è uguale al numero di righe di $B$, cioè $n = m'$. Equivalentemente $B$ è conformabile a destra ad $A$.

Esempio della prof: $A$ di ordine $2 \times 3$, $B$ di ordine $3 \times 4$. $A$ è conformabile a sinistra a $B$ ($3 = 3$), ma $B$ non è conformabile a sinistra ad $A$ (4 colonne contro 2 righe). Si può fare $AB$, non $BA$.

**Prodotto.** La prof (quaderno p. 52; dispensa <span class="src">Def. 33</span>): date $A = [a_{ij}] \in M_{m \times n}(\mathbb{R})$ e $B = [b_{jk}] \in M_{n \times p}(\mathbb{R})$, il **prodotto righe per colonne** $AB$ è la matrice $C = [c_{ik}] \in M_{m \times p}(\mathbb{R})$ con
$$
c_{ik} = \sum_{j=1}^{n} a_{ij}\, b_{jk} = a_{i1}b_{1k} + a_{i2}b_{2k} + \cdots + a_{in}b_{nk}
$$

**Come si legge.** L'elemento di posto $(i, k)$ di $AB$ si ottiene prendendo la **riga $i$ di $A$** e la **colonna $k$ di $B$**, moltiplicando gli elementi a coppie (primo con primo, secondo con secondo, ...) e sommando. È lo stesso conto del prodotto scalare in coordinate di [Vettori geometrici](/uni/gal/vettori-geometrici/). Per poterlo fare la riga di $A$ e la colonna di $B$ devono avere la stessa lunghezza $n$: è esattamente la condizione di conformabilità.

L'ordine del risultato si legge dai due ordini: $(m \times \underline{n}) \cdot (\underline{n} \times p) = m \times p$. I due numeri interni devono coincidere e spariscono; restano quelli esterni.

<figure class="fig"><svg role="img" aria-label="prodotto righe per colonne" xmlns:xlink="http://www.w3.org/1999/xlink" width="380.634286pt" height="262.354286pt" viewBox="0 0 380.634286 262.354286" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f42-figure_1"> <g id="f42-patch_1"> <path d="M 0 262.354286 L 380.634286 262.354286 L 380.634286 0 L 0 0 L 0 262.354286 z " style="fill: none"/> </g> <g id="f42-axes_1"> <g id="f42-patch_2"> <path d="M 51.675429 153.709714 L 134.578286 153.709714 L 134.578286 121.398857 L 51.675429 121.398857 L 51.675429 153.709714 z " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.2; stroke-linejoin: miter"/> </g> <g id="f42-patch_3"> <path d="M 227.684571 97.165714 L 259.995429 97.165714 L 259.995429 16.388571 L 227.684571 16.388571 L 227.684571 97.165714 z " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.2; stroke-linejoin: miter"/> </g> <g id="f42-patch_4"> <path d="M 243.84 155.410286 C 248.575467 155.410286 253.117618 153.528865 256.466099 150.180384 C 259.814579 146.831904 261.696 142.289752 261.696 137.554286 C 261.696 132.818819 259.814579 128.276668 256.466099 124.928187 C 253.117618 121.579707 248.575467 119.698286 243.84 119.698286 C 239.104533 119.698286 234.562382 121.579707 231.213901 124.928187 C 227.865421 128.276668 225.984 132.818819 225.984 137.554286 C 225.984 142.289752 227.865421 146.831904 231.213901 150.180384 C 234.562382 153.528865 239.104533 155.410286 243.84 155.410286 L 243.84 155.410286 z " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.2; stroke-linejoin: miter"/> </g> <g id="f42-line2d_1"> <path d="M 53.801143 116.297143 L 46.148571 116.297143 L 46.148571 209.828571 L 53.801143 209.828571 " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f42-line2d_2"> <path d="M 132.027429 116.297143 L 139.68 116.297143 L 139.68 209.828571 L 132.027429 209.828571 " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f42-line2d_3"> <path d="M 177.092571 14.262857 L 169.44 14.262857 L 169.44 99.291429 L 177.092571 99.291429 " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f42-line2d_4"> <path d="M 310.587429 14.262857 L 318.24 14.262857 L 318.24 99.291429 L 310.587429 99.291429 " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f42-line2d_5"> <path d="M 177.092571 116.297143 L 169.44 116.297143 L 169.44 209.828571 L 177.092571 209.828571 " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f42-line2d_6"> <path d="M 310.587429 116.297143 L 318.24 116.297143 L 318.24 209.828571 L 310.587429 209.828571 " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f42-line2d_7"> <path d="M 243.84 98.441143 L 243.84 118.848 " clip-path="url(#f42-p02a33dfb80)" style="fill: none; stroke-dasharray: 4.8,3.6; stroke-dashoffset: 0; stroke: var(--fig-steel); stroke-width: 1.2"/> </g> <g id="f42-text_1"> <!-- $2$ --> <g style="fill: var(--fig-ink)" transform="translate(63.451429 142.489833) scale(0.19 -0.19)"> <defs> <path id="f42-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_2"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(110.217143 142.489833) scale(0.19 -0.19)"> <defs> <path id="f42-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_3"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(63.451429 193.506975) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_4"> <!-- $-1$ --> <g style="fill: var(--fig-ink)" transform="translate(102.237143 193.506975) scale(0.19 -0.19)"> <defs> <path id="f42-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f42-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f42-text_5"> <!-- $0$ --> <g style="fill: var(--fig-ink)" transform="translate(186.742857 40.455547) scale(0.19 -0.19)"> <defs> <path id="f42-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_6"> <!-- $-2$ --> <g style="fill: var(--fig-ink)" transform="translate(229.78 40.455547) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f42-text_7"> <!-- $3$ --> <g style="fill: var(--fig-ink)" transform="translate(288.777143 40.455547) scale(0.19 -0.19)"> <defs> <path id="f42-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-16" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_8"> <!-- $2$ --> <g style="fill: var(--fig-ink)" transform="translate(186.742857 82.969833) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_9"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(237.76 82.969833) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_10"> <!-- $-2$ --> <g style="fill: var(--fig-ink)" transform="translate(280.797143 82.969833) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f42-text_11"> <!-- $2$ --> <g style="fill: var(--fig-faint)" transform="translate(186.742857 142.489833) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_12"> <!-- $-3$ --> <g style="fill: var(--fig-accent)" transform="translate(229.78 142.489833) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f42-DejaVuSerif-16" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f42-text_13"> <!-- $4$ --> <g style="fill: var(--fig-faint)" transform="translate(288.777143 142.489833) scale(0.19 -0.19)"> <defs> <path id="f42-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-17" transform="translate(0 0.78125)"/> </g> </g> <g id="f42-text_14"> <!-- $-2$ --> <g style="fill: var(--fig-faint)" transform="translate(178.762857 193.506975) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f42-text_15"> <!-- $-3$ --> <g style="fill: var(--fig-faint)" transform="translate(229.78 193.506975) scale(0.19 -0.19)"> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f42-DejaVuSerif-16" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f42-text_16"> <!-- $5$ --> <g style="fill: var(--fig-faint)" transform="translate(288.777143 193.506975) scale(0.19 -0.19)"> <defs> <path id="f42-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-18" transform="translate(0 0.09375)"/> </g> </g> <g id="f42-text_17"> <!-- $A$ --> <g style="fill: var(--fig-axis)" transform="translate(16.195714 167.738638) scale(0.18 -0.18)"> <defs> <path id="f42-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="f42-text_18"> <!-- $B$ --> <g style="fill: var(--fig-axis)" transform="translate(332.837143 61.452924) scale(0.18 -0.18)"> <defs> <path id="f42-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="f42-text_19"> <!-- $AB$ --> <g style="fill: var(--fig-axis)" transform="translate(330.608571 167.738638) scale(0.18 -0.18)"> <use xlink:href="#f42-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> <use xlink:href="#f42-DejaVuSerif-Italic-25" transform="translate(72.216797 0.09375)"/> </g> </g> <g id="f42-text_20"> <!-- riga 1 di $A$ per colonna 2 di $B$: $2 \cdot (-2) + 1 \cdot 1 = -3$ --> <g style="fill: var(--fig-ink)" transform="translate(19.274286 245.352645) scale(0.14 -0.14)"> <defs> <path id="f42-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-926" d="M 678 2222 Q 678 2397 798 2517 Q 919 2638 1097 2638 Q 1269 2638 1391 2516 Q 1513 2394 1513 2222 Q 1513 2047 1391 1926 Q 1269 1806 1097 1806 Q 919 1806 798 1925 Q 678 2044 678 2222 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f42-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f42-DejaVuSerif-55" transform="translate(0 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-4c" transform="translate(47.802734 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-4a" transform="translate(79.785156 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-44" transform="translate(143.798828 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(203.417969 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-14" transform="translate(235.205078 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(298.828125 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-47" transform="translate(330.615234 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-4c" transform="translate(394.628906 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(426.611328 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-Italic-24" transform="translate(458.398438 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(530.615234 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-53" transform="translate(562.402344 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-48" transform="translate(626.416016 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-55" transform="translate(685.595703 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(733.398438 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-46" transform="translate(765.185547 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-52" transform="translate(821.191406 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-4f" transform="translate(881.396484 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-52" transform="translate(913.378906 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-51" transform="translate(973.583984 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-51" transform="translate(1037.988281 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-44" transform="translate(1102.392578 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(1162.011719 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(1193.798828 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(1257.421875 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-47" transform="translate(1289.208984 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-4c" transform="translate(1353.222656 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(1385.205078 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-Italic-25" transform="translate(1416.992188 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-1d" transform="translate(1490.478516 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(1524.169922 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-3" transform="translate(1555.957031 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(1587.744141 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-926" transform="translate(1670.332031 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-b" transform="translate(1723.525391 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(1762.539062 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-15" transform="translate(1846.328125 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-c" transform="translate(1909.951172 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-e" transform="translate(1967.929688 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-14" transform="translate(2070.683594 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-926" transform="translate(2153.271484 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-14" transform="translate(2206.464844 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-20" transform="translate(2289.052734 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-8cf" transform="translate(2391.806641 0.015625)"/> <use xlink:href="#f42-DejaVuSerif-16" transform="translate(2475.595703 0.015625)"/> </g> </g> </g> </g> <defs> <clipPath id="f42-p02a33dfb80"> <rect x="5.76" y="5.76" width="357.12" height="250.834286"/> </clipPath> </defs> </svg></figure>

**Perché è definito così.** La riga $i$ di $A$ per una colonna di incognite $\vec{x}$ dà $a_{i1}x_1 + \cdots + a_{in}x_n$, il primo membro della $i$-esima equazione di un sistema. Con questa definizione tutto il sistema diventa una sola uguaglianza fra matrici, $A\vec{x} = \vec{b}$ ([Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/)).

## Enunciati

### Proprietà della somma e del prodotto per scalare

La prof (quaderno p. 50-51; dispensa <span class="src">p. 65-66</span>): per ogni $A, B, C \in M_{m \times n}(\mathbb{R})$ e $\lambda, \mu \in \mathbb{R}$

| somma | prodotto per scalare |
| --- | --- |
| $A + B = B + A$ (commutativa) | $\lambda(\mu A) = (\lambda\mu)A$ |
| $(A + B) + C = A + (B + C)$ (associativa) | $1A = A$ |
| $A + O_{m \times n} = A$ (elemento neutro) | $(\lambda + \mu)A = \lambda A + \mu A$ |
| $A + (-A) = O_{m \times n}$ (opposto) | $\lambda(A + B) = \lambda A + \lambda B$ |

La prof a voce (5/10): "tutto uguale ai vettori". Sono le stesse otto proprietà della somma di vettori e del prodotto per scalare in $\mathbb{R}^n$ ([Sistemi lineari](/uni/gal/sistemi-lineari/)), perché le operazioni si fanno elemento per elemento: una matrice $m \times n$ si comporta come una ennupla di $mn$ numeri scritta in tabella. Questa lista tornerà nella L7 come definizione di **spazio vettoriale**.

### Proprietà del prodotto righe per colonne

La prof (quaderno p. 53-54; dispensa <span class="src">p. 67</span>), con gli ordini che rendono possibili i prodotti:

1. **Associativa**: $A \in M_{m \times n}$, $B \in M_{n \times p}$, $C \in M_{p \times q}$, allora $(AB)C = A(BC) \in M_{m \times q}(\mathbb{R})$. A sinistra $AB$ è $m \times p$, a destra $BC$ è $n \times q$: i prodotti intermedi sono diversi, il risultato è lo stesso.
2. **Distributiva a destra**: $A, B \in M_{m \times n}$, $C \in M_{n \times p}$, allora $(A + B)C = AC + BC$.
3. **Distributiva a sinistra**: $A, B \in M_{m \times n}$, $C \in M_{q \times m}$, allora $C(A + B) = CA + CB$.
4. **Scalari**: $A \in M_{m \times n}$, $B \in M_{n \times p}$, $\lambda \in \mathbb{R}$, allora $\lambda(AB) = (\lambda A)B = A(\lambda B)$.
5. **Identità**: se $A \in M_{m \times n}$, allora $AI_n = A$ e $I_mA = A$. L'identità va presa dell'ordine giusto: $n$ a destra, $m$ a sinistra.

> [!note]- Perché valgono la distributiva e l'identità (dalla definizione)
> **Distributiva 2.** L'elemento $(i, k)$ di $(A + B)C$ è
> $$
> \sum_{j=1}^{n} (a_{ij} + b_{ij})c_{jk} = \sum_{j=1}^{n} a_{ij}c_{jk} + \sum_{j=1}^{n} b_{ij}c_{jk}
> $$
> cioè l'elemento $(i, k)$ di $AC$ più quello di $BC$. La 3 è identica, con $C$ a sinistra.
>
> **Identità.** L'elemento $(i, k)$ di $AI_n$ è $\sum_j a_{ij}\delta_{jk}$. Tutti i $\delta_{jk}$ sono $0$ tranne quello con $j = k$, che vale $1$: resta $a_{ik}$. Quindi $AI_n = A$. Allo stesso modo $(I_mA)_{ik} = \sum_j \delta_{ij}a_{jk} = a_{ik}$.
>
> L'associativa si dimostra allo stesso modo con una somma doppia, $\sum_{l}\left(\sum_{j} a_{ij}b_{jl}\right)c_{lk} = \sum_{j} a_{ij}\left(\sum_{l} b_{jl}c_{lk}\right)$: è solo un riordino dei termini. $\square$

### Il prodotto non è commutativo

La prof (quaderno p. 55; dispensa <span class="src">Oss. 7</span>) chiede: vale $AB = BA$? **No**, per tre motivi diversi, dal più grossolano al più sottile.

1. **Uno dei due prodotti può non esistere.** Se $A$ è conformabile a sinistra a $B$, non è detto che $B$ lo sia ad $A$. Con $A$ $2 \times 3$ e $B$ $3 \times 4$ c'è $AB$ ma non $BA$.
2. **Possono esistere tutti e due ma avere ordine diverso.** Se $A \in M_{m \times n}$ e $B \in M_{n \times m}$, allora $AB$ è $m \times m$ e $BA$ è $n \times n$. Sono confrontabili solo se $m = n$.
3. **Anche fra quadrate dello stesso ordine, in generale $AB \neq BA$.** Esempio (dispensa, es. 31):
$$
A = \begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix},\ B = \begin{pmatrix} 2 & 1 \\ 0 & 0 \end{pmatrix}: \qquad AB = \begin{pmatrix} 2 & 1 \\ -2 & -1 \end{pmatrix},\quad BA = \begin{pmatrix} 1 & 7 \\ 0 & 0 \end{pmatrix}
$$
Per esempio $(AB)_{11} = 1 \cdot 2 + 2 \cdot 0 = 2$, mentre $(BA)_{11} = 2 \cdot 1 + 1 \cdot (-1) = 1$.

Per capire perché il terzo caso è la regola: in $AB$ si usano le **righe** di $A$ e le **colonne** di $B$, in $BA$ le righe di $B$ e le colonne di $A$. Sono pezzi diversi delle due matrici, e non c'è motivo che diano gli stessi numeri. Ci sono coppie che commutano (per esempio $A$ con $I_n$, o $A$ con sé stessa), ma sono casi speciali: l'esercizio 2 qui sotto mostra quanto poche siano.

Conseguenza pratica: l'ordine dei fattori si scrive sempre e si rispetta. "Moltiplicare per $C$" non basta, bisogna dire se a sinistra ($CA$) o a destra ($AC$).

> [!info] Dalla dispensa: il prodotto di matrici non nulle può essere nullo
> <span class="src">Oss. 8, es. 33</span>: con $A = \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ viene $AB = O_2$, anche se né $A$ né $B$ è nulla. (Invece $BA = \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix}$.) Con i numeri reali $ab = 0$ obbliga $a = 0$ o $b = 0$; con le matrici no. Per questo da $AB = AC$ non si può "semplificare" $A$, a meno che $A$ non sia invertibile ([Matrici invertibili](/uni/gal/matrici-invertibili/)).

## Metodo

### Calcolare un prodotto $AB$

1. Scrivi gli ordini: $A$ è $m \times n$, $B$ è $n' \times p$. Se $n \neq n'$ il prodotto **non esiste**, e la risposta è questa.
2. Il risultato è $m \times p$: disegna la griglia vuota prima di fare conti.
3. Elemento $(i, k)$: dito sinistro sulla riga $i$ di $A$ (in orizzontale), dito destro sulla colonna $k$ di $B$ (in verticale), prodotti a coppie e somma.
4. Scorciatoie che valgono come controllo: una riga nulla di $A$ dà una riga nulla di $AB$; una colonna nulla di $B$ dà una colonna nulla di $AB$.
5. Se l'esercizio chiede anche $BA$, rifai tutto da capo: non si ricava da $AB$.

### Combinazioni con trasposte e somme

Prima si controllano tutti gli ordini, poi si calcola. In $2A - B^T$ serve che $A$ e $B^T$ abbiano lo stesso ordine; in $A(B + C)$ si può sommare prima e moltiplicare una volta sola (distributiva), che è meno lavoro di $AB + AC$.

## Esempi svolti a lezione

> [!example]- Prof, 5/10, quaderno p. 52: il primo prodotto
> $$
> A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} \in M_{2 \times 2}, \qquad B = \begin{pmatrix} 0 & -2 & 3 \\ 2 & 1 & -2 \end{pmatrix} \in M_{2 \times 3}
> $$
> $A$ ha 2 colonne e $B$ ha 2 righe: $AB$ esiste ed è $2 \times 3$. Righe di $A$: $(2, 1)$ e $(1, -1)$. Colonne di $B$: $(0, 2)$, $(-2, 1)$, $(3, -2)$.
> - $c_{11} = 2 \cdot 0 + 1 \cdot 2 = 2$, $\quad c_{12} = 2 \cdot (-2) + 1 \cdot 1 = -3$, $\quad c_{13} = 2 \cdot 3 + 1 \cdot (-2) = 4$
> - $c_{21} = 1 \cdot 0 + (-1) \cdot 2 = -2$, $\quad c_{22} = 1 \cdot (-2) + (-1) \cdot 1 = -3$, $\quad c_{23} = 1 \cdot 3 + (-1)(-2) = 5$
>
> $$
> AB = \begin{pmatrix} 2 & -3 & 4 \\ -2 & -3 & 5 \end{pmatrix}
> $$
> **$BA$ non esiste**: $B$ ha 3 colonne e $A$ ha 2 righe. Nel quaderno, a p. 55, compare “$BA = \begin{pmatrix} 2 & 4 \\ -2 & -2 \end{pmatrix}$": con queste due matrici non può venire, perché il prodotto non è definito. Probabilmente è un esempio a voce con altre matrici, rimasto senza testo.

> [!example]- Prof, 5/10, quaderno p. 55: esercizio $AB + AC$
> $$
> A = \begin{pmatrix} 1 & -2 \\ 3 & 0 \\ -1 & 1 \end{pmatrix},\quad B = \begin{pmatrix} 2 & -1 \\ 3 & 1 \end{pmatrix},\quad C = \begin{pmatrix} 1 & -1 \\ 2 & 0 \end{pmatrix}
> $$
> Calcolare $AB + AC$. $A$ è $3 \times 2$, $B$ e $C$ sono $2 \times 2$: i due prodotti esistono e sono $3 \times 2$.
>
> **$AB$.** Colonne di $B$: $(2, 3)$ e $(-1, 1)$.
> - riga $(1, -2)$: $2 - 6 = -4$; $\ -1 - 2 = -3$
> - riga $(3, 0)$: $6 + 0 = 6$; $\ -3 + 0 = -3$
> - riga $(-1, 1)$: $-2 + 3 = 1$; $\ 1 + 1 = 2$
>
> **$AC$.** Colonne di $C$: $(1, 2)$ e $(-1, 0)$.
> - riga $(1, -2)$: $1 - 4 = -3$; $\ -1 + 0 = -1$
> - riga $(3, 0)$: $3$; $\ -3$
> - riga $(-1, 1)$: $-1 + 2 = 1$; $\ 1 + 0 = 1$
>
> $$
> AB = \begin{pmatrix} -4 & -3 \\ 6 & -3 \\ 1 & 2 \end{pmatrix},\quad AC = \begin{pmatrix} -3 & -1 \\ 3 & -3 \\ 1 & 1 \end{pmatrix},\quad AB + AC = \begin{pmatrix} -7 & -4 \\ 9 & -6 \\ 2 & 3 \end{pmatrix}
> $$
> **Verifica con la distributiva.** $B + C = \begin{pmatrix} 3 & -2 \\ 5 & 1 \end{pmatrix}$ e $A(B + C)$ ha righe $(3 - 10,\ -2 - 2) = (-7, -4)$, $(9, -6)$, $(-3 + 5,\ 2 + 1) = (2, 3)$. Coincide, e costa un prodotto solo invece di due.
>
> **L'errore del quaderno.** A p. 55 c'è $AB = \begin{pmatrix} 4 & 1 \\ 6 & 9 \\ -3 & -2 \end{pmatrix}$. È $AB^T$: ogni riga di $A$ è stata moltiplicata per le **righe** di $B$, $(2, -1)$ e $(3, 1)$, invece che per le colonne. Per esempio $1 \cdot 2 + (-2)(-1) = 4$ usa la riga $(2, -1)$. È l'errore più comune sul prodotto: la seconda matrice si legge **in verticale**.
>
> (Nel quaderno l'ultimo elemento di $C$ è poco leggibile; qui è letto come $0$.)

## Esercizi tipo esame

**Esercizio 1.** Siano
$$
A = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 1 \\ 0 & -1 \\ 1 & 1 \end{pmatrix}
$$
Dire quali fra $A + B$, $2A - B^T$, $AB$, $BA$ sono definiti e calcolarli.

> [!example]- Soluzione
> **Ordini.** $A$ è $2 \times 3$, $B$ è $3 \times 2$, $B^T$ è $2 \times 3$.
> - $A + B$: ordini diversi, **non definita**.
> - $2A - B^T$: entrambe $2 \times 3$, definita. $B^T = \begin{pmatrix} 2 & 0 & 1 \\ 1 & -1 & 1 \end{pmatrix}$ e
> $$
> 2A - B^T = \begin{pmatrix} 2 - 2 & 0 - 0 & 4 - 1 \\ -2 - 1 & 6 + 1 & 2 - 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 3 \\ -3 & 7 & 1 \end{pmatrix}
> $$
> - $AB$: $(2 \times 3)(3 \times 2)$, definita, $2 \times 2$. Colonne di $B$: $(2, 0, 1)$ e $(1, -1, 1)$.
>   - riga $(1, 0, 2)$: $2 + 0 + 2 = 4$; $\ 1 + 0 + 2 = 3$
>   - riga $(-1, 3, 1)$: $-2 + 0 + 1 = -1$; $\ -1 - 3 + 1 = -3$
> - $BA$: $(3 \times 2)(2 \times 3)$, definita, $3 \times 3$. Colonne di $A$: $(1, -1)$, $(0, 3)$, $(2, 1)$.
>   - riga $(2, 1)$: $2 - 1 = 1$; $\ 0 + 3 = 3$; $\ 4 + 1 = 5$
>   - riga $(0, -1)$: $1$; $\ -3$; $\ -1$
>   - riga $(1, 1)$: $1 - 1 = 0$; $\ 3$; $\ 2 + 1 = 3$
>
> $$
> AB = \begin{pmatrix} 4 & 3 \\ -1 & -3 \end{pmatrix} \qquad BA = \begin{pmatrix} 1 & 3 & 5 \\ 1 & -3 & -1 \\ 0 & 3 & 3 \end{pmatrix}
> $$
> $AB$ e $BA$ esistono entrambi ma hanno ordini diversi: è il secondo motivo per cui il prodotto non è commutativo.

**Esercizio 2.** Sia $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Trovare tutte le matrici $X \in M_2(\mathbb{R})$ tali che $AX = XA$.

> [!example]- Soluzione
> Scrivo $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ e calcolo i due prodotti.
> $$
> AX = \begin{pmatrix} a + c & b + d \\ c & d \end{pmatrix} \qquad XA = \begin{pmatrix} a & a + b \\ c & c + d \end{pmatrix}
> $$
> Due matrici sono uguali se lo sono elemento per elemento:
> - posto $(1,1)$: $a + c = a$, quindi $c = 0$;
> - posto $(1,2)$: $b + d = a + b$, quindi $d = a$;
> - posto $(2,1)$: $c = c$, sempre vero;
> - posto $(2,2)$: $d = c + d$, di nuovo $c = 0$.
>
> $$
> X = \begin{pmatrix} a & b \\ 0 & a \end{pmatrix}, \qquad a, b \in \mathbb{R}
> $$
> Verifica con $a = 2$, $b = 5$: $AX = \begin{pmatrix} 2 & 7 \\ 0 & 2 \end{pmatrix}$ e $XA = \begin{pmatrix} 2 & 7 \\ 0 & 2 \end{pmatrix}$. Su quattro parametri liberi ne restano due: commutare con una matrice data è una condizione forte. Per esempio $X = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$ non commuta con $A$.

**Esercizio 3.** Per quali $k \in \mathbb{R}$ la matrice
$$
S(k) = \begin{pmatrix} 1 & k + 1 & 3 \\ 2k & 0 & k^2 \\ 3 & 1 & 5 \end{pmatrix}
$$
è simmetrica?

> [!example]- Soluzione
> $S = S^T$ vuol dire $s_{ij} = s_{ji}$ per ogni coppia sopra e sotto la diagonale. La diagonale non dà condizioni.
> - $s_{12} = s_{21}$: $k + 1 = 2k$, quindi $k = 1$.
> - $s_{13} = s_{31}$: $3 = 3$, sempre vero.
> - $s_{23} = s_{32}$: $k^2 = 1$, quindi $k = 1$ oppure $k = -1$.
>
> Servono tutte insieme: **$k = 1$**. Controllo: $S(1) = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 0 & 1 \\ 3 & 1 & 5 \end{pmatrix}$, uguale alla sua trasposta. Con $k = -1$ la seconda condizione regge ma la prima no ($0 \neq -2$).

**Esercizio 4.** Siano $A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$.

- a) Calcolare $AB$ e $BA$.
- b) Verificare che $(A + B)^2 \neq A^2 + 2AB + B^2$.
- c) Qual è lo sviluppo corretto di $(A + B)^2$ per matrici quadrate qualunque?

> [!example]- Soluzione
> **a)** $AB$: riga $(1, 1)$ per le colonne $(0, 1)$ e $(0, 0)$ dà $1$ e $0$; riga $(0, 0)$ dà zeri. $BA$: riga $(0, 0)$ dà zeri; riga $(1, 0)$ per le colonne $(1, 0)$ e $(1, 0)$ dà $1$ e $1$.
> $$
> AB = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \qquad BA = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}
> $$
> **b)** $A + B = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, quindi $(A + B)^2 = \begin{pmatrix} 1 + 1 & 1 + 0 \\ 1 + 0 & 1 + 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$.
>
> $A^2 = A$ (riga $(1,1)$ per le colonne $(1,0)$ e $(1,0)$ dà $1, 1$) e $B^2 = O_2$. Allora
> $$
> A^2 + 2AB + B^2 = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 0 & 0 \end{pmatrix} \neq \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}
> $$
> **c)** Con la distributiva, rispettando l'ordine:
> $$
> (A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2
> $$
> Qui $A^2 + AB + BA + B^2 = \begin{pmatrix} 1 + 1 + 0 & 1 + 0 + 0 \\ 0 + 0 + 1 & 0 + 0 + 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, giusto. La formula del binomio con $2AB$ vale solo se $AB = BA$.

## Errori tipici

- Moltiplicare **righe per righe**: è l'errore del quaderno a p. 55, che dà $AB^T$ invece di $AB$. La seconda matrice si legge sempre per colonne.
- Calcolare $BA$ quando non esiste: prima di ogni prodotto si controlla "colonne della prima = righe della seconda".
- Sbagliare l'ordine del risultato: $(m \times n)(n \times p)$ è $m \times p$, non $n \times n$.
- Usare le regole dei numeri: $AB = BA$, $(A + B)^2 = A^2 + 2AB + B^2$, “$AB = O$ allora $A = O$ o $B = O$". Nessuna vale in generale.
- Sommare matrici di ordine diverso, o confondere $A$ con $A^T$ in una somma.
- Prendere $I$ dell'ordine sbagliato: per $A$ $2 \times 3$, $AI_3 = A$ e $I_2A = A$; $AI_2$ non esiste.
- Credere che una matrice non quadrata possa essere simmetrica: $A = A^T$ richiede lo stesso ordine.

## Domande

- Cos'è una matrice di ordine $m \times n$? Cosa indica $M_{m \times n}(\mathbb{R})$?

- Definisci matrice trasposta e matrice simmetrica. Perché una simmetrica deve essere quadrata?

- Quando $A$ è conformabile a sinistra a $B$? Che ordine ha $AB$?

- Come si calcola l'elemento $(i, k)$ del prodotto righe per colonne?

- Elenca le proprietà del prodotto righe per colonne.

- Perché il prodotto di matrici non è commutativo? Dai i tre motivi, con un esempio per il terzo.

- Perché $(A + B)^2 = A^2 + 2AB + B^2$ è falso per le matrici, e qual è la formula giusta?

- Qual è l'elemento neutro del prodotto di matrici, e perché va preso dell'ordine giusto?

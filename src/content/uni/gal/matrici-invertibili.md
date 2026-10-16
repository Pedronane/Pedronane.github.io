---
title: Matrici invertibili
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-10-06
lezioni: []
ordine: 9
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L6, mar 6/10 (quaderno p. 60-67), con gli esercizi dell'esercitazione 3 di lun 12/10, tenuta dalla prof. Fonte: appunti della prof, capitolo 3: <span class="src">6/10, p. 13-14</span> (matrici delle operazioni elementari, $\operatorname{rref}(A) = PA$, definizione di invertibile), <span class="src">p. 14-16</span> (esempi e non-esempi, osservazioni 1 e 2), <span class="src">p. 16-17</span> (teorema rango-invertibilità), <span class="src">p. 17-19</span> (calcolo dell'inversa, esempio e non-esempio), <span class="src">p. 19-20</span> (sistemi con $A$ invertibile, esercizio con parametro); esercitazione del 12/10, <span class="src">p. 1-9</span>, con il foglio [esercizi extra](/uni/gal/esercizi-extra-matrici-svolti/). Negli appunti la L6 inizia a p. 13 con le matrici delle operazioni elementari: anche le p. 60-63 del quaderno, prima attribuite alla L5, sono della L6. Esempi in più dalla dispensa Postinghel (<span class="src">p. 69-80</span>). Si appoggia su [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).

> [!abstract] Per l'esame
> - **Saper enunciare**: le matrici $S_{ij}$, $D_i(\lambda)$, $E_{ij}(\mu)$ e le loro inverse; $\operatorname{rref}(A) = PA$; matrice invertibile e inversa; $(AB)^{-1} = B^{-1}A^{-1}$; **il teorema “$A$ invertibile se e solo se $\operatorname{rg}(A) = n$"**, che a lezione è segnato con tre stelle (★★★). Sono le domande 3.2-3.4 del [foglio 3](/uni/gal/foglio-3-svolto/).
> - **Saper dimostrare**: il teorema rango-invertibilità, nelle due direzioni (★); $(AB)^{-1} = B^{-1}A^{-1}$; perché l'algoritmo su $[A \mid I_n]$ dà $A^{-1}$; perché una matrice con una riga nulla non è invertibile.
> - **Saper fare**: decidere se una matrice è invertibile dal rango, anche con un parametro; calcolare l'inversa con Gauss-Jordan su $[A \mid I_n]$ e verificarla con $AA^{-1} = I_n$; risolvere $A\vec{x} = \vec{b}$ come $\vec{x} = A^{-1}\vec{b}$.
> - **Dove esce**: esercizi 3.8, 3.9, 3.10 del foglio 3 ("per quali $k$ è invertibile, e calcolare l'inversa"); tutta l'esercitazione 3 del 12/10 è stata su questo ([Esercizi extra matrici svolti](/uni/gal/esercizi-extra-matrici-svolti/)). Il teorema ★★★ è il candidato naturale per la domanda di teoria con dimostrazione.

**L'idea.** Con i numeri, $ax = b$ si risolve dividendo per $a$ se $a \neq 0$. Con le matrici non si divide, ma si può moltiplicare per una matrice $A^{-1}$ che "disfa" $A$. Non tutte le matrici quadrate ce l'hanno, e il rango dice esattamente quali. Il calcolo passa di nuovo da Gauss-Jordan, perché ogni operazione elementare è una moltiplicazione a sinistra per una matrice.

```
   operazione elementare su A   =   (matrice dell'operazione) · A
   Gauss-Jordan fino a rref     =   P · A,   P = prodotto di matrici elementari
   rg(A) = n                    =>  rref(A) = I_n  =>  PA = I_n  =>  A⁻¹ = P
   [A | I_n]  --Gauss-Jordan-->  [I_n | P]      il blocco destro registra P
```

## Definizioni

### Matrici delle operazioni elementari

**L'idea.** Nel capitolo 2 Gauss-Jordan era una ricetta: "scambia queste righe, moltiplica quella, somma questa". Qui la prof mostra che ogni passo della ricetta è un **prodotto di matrici**. Il vantaggio è che sui prodotti valgono l'associativa e le regole delle inverse, quindi si può ragionare su tutta la riduzione con l'algebra delle matrici invece che a parole.

La prof (<span class="src">p. 13</span>): le operazioni elementari (viste nel capitolo 2) possono essere realizzate tramite la **moltiplicazione a sinistra** per delle matrici quadrate:
- **$S_{ij}$** = matrice ottenuta da $I_m$ (identità $m \times m$) scambiandone la $i$-esima con la $j$-esima riga: $I_m \xrightarrow{S_{ij}} S_{ij}$;
- **$D_i(\lambda)$** la matrice ottenuta come segue: $I_m \xrightarrow{D_i(\lambda)} D_i(\lambda)$, cioè moltiplicando la $i$-esima riga di $I_m$ per $\lambda \neq 0$;
- **$E_{ij}(\mu)$** la matrice ottenuta come segue: $I_m \xrightarrow{E_{ij}(\mu)} E_{ij}(\mu)$, cioè sommando alla riga $i$-esima di $I_m$ la riga $j$-esima moltiplicata per $\mu$. Risultato: $I_m$ con un $\mu$ in più al posto $(i, j)$.

In parole: **si fa l'operazione sull'identità**, e la matrice che viene fuori, moltiplicata a sinistra, fa la stessa operazione su qualunque $A$ con $m$ righe.

Allora $S_{ij}A$, $D_i(\lambda)A$, $E_{ij}(\mu)A$ sono $A$ con l'operazione già fatta.

In $3 \times 3$:
$$
S_{12} = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \qquad D_2(\lambda) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & 1 \end{pmatrix} \qquad E_{31}(\mu) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ \mu & 0 & 1 \end{pmatrix}
$$

**Perché funziona.** La riga $i$ di $MA$ è "riga $i$ di $M$ per le colonne di $A$", cioè una combinazione delle righe di $A$ con i coefficienti scritti nella riga $i$ di $M$. In $E_{31}(\mu)$ la terza riga è $(\mu, 0, 1)$: la terza riga del prodotto è $\mu R_1 + R_3$. Le altre righe di $E_{31}(\mu)$ sono quelle di $I$ e lasciano $R_1$, $R_2$ al loro posto. Esempio della dispensa (<span class="src">es. 38</span>): $E_{31}(-1)\begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 1 & -1 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 0 & -3 & 2 \end{pmatrix}$, cioè $R_3 \to R_3 - R_1$.

**Esempi, dal più facile.**

1. **Un'operazione sola, $2 \times 2$.** $M = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e l'operazione $R_2 \to R_2 - 3R_1$. Si fa sull'identità: $I_2 \xrightarrow{R_2 - 3R_1} E_{21}(-3) = \begin{pmatrix} 1 & 0 \\ -3 & 1 \end{pmatrix}$. Il prodotto riga per colonna:
   - riga 1 di $E_{21}(-3)$, $(1, 0)$, per le colonne $(1, 3)$ e $(2, 4)$ di $M$: $1 \cdot 1 + 0 \cdot 3 = 1$, $\ 1 \cdot 2 + 0 \cdot 4 = 2$;
   - riga 2, $(-3, 1)$: $-3 \cdot 1 + 1 \cdot 3 = 0$, $\ -3 \cdot 2 + 1 \cdot 4 = -2$.

   $E_{21}(-3)M = \begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}$, che è proprio $M$ dopo $R_2 - 3R_1$.

2. **Tutta la riduzione come prodotto, $2 \times 2$.** Si continua con la stessa $M$ fino a $\operatorname{rref}$:
   $$
   M \xrightarrow{E_{21}(-3)} \begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix} \xrightarrow{D_2(-\frac{1}{2})} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \xrightarrow{E_{12}(-2)} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
   $$
   Quindi $I_2 = E_{12}(-2)\,D_2(-\tfrac{1}{2})\,E_{21}(-3)\,M$: l'ultima operazione sta più a sinistra. Il prodotto delle tre matrici, da destra:
   - $D_2(-\frac{1}{2})E_{21}(-3)$ è $E_{21}(-3)$ con la seconda riga moltiplicata per $-\frac{1}{2}$: $\begin{pmatrix} 1 & 0 \\ \frac{3}{2} & -\frac{1}{2} \end{pmatrix}$;
   - $E_{12}(-2)$ per questa fa $R_1 \to R_1 - 2R_2$: $(1, 0) - 2\left(\frac{3}{2}, -\frac{1}{2}\right) = (-2, 1)$.

   $$
   P = \begin{pmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{pmatrix}
   $$
   Controllo $PM$: riga $(-2, 1)$ per le colonne $(1, 3)$, $(2, 4)$ dà $-2 + 3 = 1$, $-4 + 4 = 0$; riga $\left(\frac{3}{2}, -\frac{1}{2}\right)$ dà $\frac{3}{2} - \frac{3}{2} = 0$, $3 - 2 = 1$. È $I_2$. Questa $P$ si rivedrà nel teorema ★★★: è l'inversa di $M$.

3. **Matrice non quadrata, $3 \times 2$, con uno scambio.** $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 0 & 1 \end{pmatrix}$ ha $3$ righe, quindi le matrici elementari sono $3 \times 3$ (non $2 \times 2$).
   $$
   A \xrightarrow{E_{21}(-2)} \begin{pmatrix} 1 & 2 \\ 0 & 0 \\ 0 & 1 \end{pmatrix} \xrightarrow{S_{23}} \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} \xrightarrow{E_{12}(-2)} \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} = \operatorname{rref}(A)
   $$
   $P = E_{12}(-2)\,S_{23}\,E_{21}(-2)$. Da destra: $E_{21}(-2) = \begin{pmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$; $S_{23}$ ne scambia le righe 2 e 3: $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ -2 & 1 & 0 \end{pmatrix}$; $E_{12}(-2)$ fa $R_1 - 2R_2 = (1, 0, -2)$:
   $$
   P = \begin{pmatrix} 1 & 0 & -2 \\ 0 & 0 & 1 \\ -2 & 1 & 0 \end{pmatrix}
   $$
   Controllo $PA$: riga $(1, 0, -2)$ per le colonne $(1, 2, 0)$ e $(2, 4, 1)$ dà $1$ e $2 - 2 = 0$; riga $(0, 0, 1)$ dà $0$ e $1$; riga $(-2, 1, 0)$ dà $-2 + 2 = 0$ e $-4 + 4 = 0$. È $\operatorname{rref}(A)$.

**Controesempio: dalla parte sbagliata.** Moltiplicare **a destra** non fa l'operazione sulle righe ma sulle **colonne**. Con la $M$ di sopra:
$$
MS_{12} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}
$$
(riga $(1, 2)$ per la colonna $(0, 1)$ dà $2$, per la colonna $(1, 0)$ dà $1$): sono scambiate le colonne, non le righe. Gauss-Jordan lavora sulle righe, quindi le matrici elementari vanno **a sinistra**.

**Perché le operazioni elementari non cambiano le soluzioni.** Nel capitolo 2 si diceva che i sistemi prima e dopo un'operazione elementare sono equivalenti. Nel piano si vede: col sistema $x + 2y = 3$, $x - y = 0$ (la matrice dell'esempio della prof a p. 18), l'operazione $E_{21}(-1)$ sostituisce la seconda retta con un'altra, $-3y = -3$, che passa per lo **stesso** punto $(1, 1)$. Ogni soluzione del sistema vecchio risolve quello nuovo, e siccome l'operazione si disfa con $E_{21}(1)$ vale anche il contrario.

<figure class="fig"><svg role="img" aria-label="operazione elementare sul sistema" xmlns:xlink="http://www.w3.org/1999/xlink" width="591.84pt" height="305.555849pt" viewBox="0 0 591.84 305.555849" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f31b474-figure_1"> <g id="f31b474-patch_1"> <path d="M -0 305.555849 L 591.84 305.555849 L 591.84 -0 L -0 -0 L -0 305.555849 z " style="fill: none"/> </g> <g id="f31b474-axes_1"> <g id="f31b474-patch_2"> <path d="M 5.76 299.795849 L 279.495849 299.795849 L 279.495849 26.06 L 5.76 26.06 L 5.76 299.795849 z " style="fill: none"/> </g> <g id="f31b474-matplotlib.axis_1"/> <g id="f31b474-matplotlib.axis_2"/> <g id="f31b474-line2d_1"> <path d="M 5.76 37.46566 L 279.495849 174.333585 L 279.495849 174.333585 " clip-path="url(#f31b474-p6e8f3519d3)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f31b474-line2d_2"> <path d="M 5.76 299.795849 L 279.495849 26.06 L 279.495849 26.06 " clip-path="url(#f31b474-p6e8f3519d3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f31b474-patch_3"> <path d="M 142.627925 299.795849 L 142.627925 26.06 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f31b474-patch_4"> <path d="M 5.76 162.927925 L 279.495849 162.927925 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f31b474-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(272.085849 182.309595) scale(0.13 -0.13)"> <defs> <path id="f31b474-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f31b474-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f31b474-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(148.330755 35.936953) scale(0.13 -0.13)"> <defs> <path id="f31b474-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f31b474-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f31b474-text_3"> <!-- $(1, 1)$ --> <g style="fill: var(--fig-accent)" transform="translate(172.830566 154.640858) scale(0.12 -0.12)"> <defs> <path id="f31b474-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f31b474-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(39.013672 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(153.388672 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-c" transform="translate(217.011719 0.015625)"/> </g> </g> <g id="f31b474-text_4"> <!-- $R_1: x + 2y = 3$ --> <g style="fill: var(--fig-ink)" transform="translate(37.315849 42.483791) scale(0.12 -0.12)"> <defs> <path id="f31b474-DejaVuSerif-Italic-35" d="M 3066 2316 Q 3272 2256 3403 2114 Q 3534 1972 3609 1716 L 4016 331 L 4584 331 L 4522 0 L 3422 0 L 2981 1484 Q 2856 1916 2706 2042 Q 2556 2169 2250 2169 L 1553 2169 L 1194 331 L 1853 331 L 1791 0 L -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3175 4666 Q 3856 4666 4164 4341 Q 4472 4016 4356 3419 Q 4262 2938 3937 2661 Q 3612 2384 3066 2316 z M 1619 2503 L 2541 2503 Q 3012 2503 3279 2726 Q 3547 2950 3639 3419 Q 3731 3888 3548 4109 Q 3366 4331 2894 4331 L 1972 4331 L 1619 2503 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f31b474-DejaVuSerif-Italic-35" transform="translate(0 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(75.292969 -14.218701) scale(0.7)"/> <use xlink:href="#f31b474-DejaVuSerif-1d" transform="translate(141.38916 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-5b" transform="translate(194.04541 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-e" transform="translate(269.406738 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-15" transform="translate(372.160645 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-5c" transform="translate(435.783691 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-20" transform="translate(511.242676 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-16" transform="translate(613.996582 0.78125)"/> </g> </g> <g id="f31b474-text_5"> <!-- $R_2: x - y = 0$ --> <g style="fill: var(--fig-steel)" transform="translate(219.844528 97.61115) scale(0.12 -0.12)"> <defs> <path id="f31b474-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f31b474-DejaVuSerif-Italic-35" transform="translate(0 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-15" transform="translate(75.292969 -14.218701) scale(0.7)"/> <use xlink:href="#f31b474-DejaVuSerif-1d" transform="translate(141.38916 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-5b" transform="translate(194.04541 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-8cf" transform="translate(269.406738 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-5c" transform="translate(372.160645 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-20" transform="translate(447.619629 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-13" transform="translate(550.373535 0.78125)"/> </g> </g> <g id="f31b474-text_6"> <!-- prima: $[A \mid \vec{b}]$ --> <g style="fill: var(--fig-ink)" transform="translate(100.637925 20.06) scale(0.13 -0.13)"> <defs> <path id="f31b474-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-8dd" d="M 1184 5291 L 1184 -625 L 678 -625 L 678 5291 L 1184 5291 z " transform="scale(0.015625)"/> <path id="f31b474-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-40" d="M 1947 4863 L 1947 -844 L 494 -844 L 494 -513 L 1350 -513 L 1350 4531 L 494 4531 L 494 4863 L 1947 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f31b474-DejaVuSerif-53" transform="translate(0 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-55" transform="translate(64.013672 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-4c" transform="translate(111.816406 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-50" transform="translate(143.798828 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-44" transform="translate(238.623047 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-1d" transform="translate(298.242188 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-3" transform="translate(331.933594 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-3e" transform="translate(363.720703 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-24" transform="translate(402.734375 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-8dd" transform="translate(493.916016 0.3125)"/> <use xlink:href="#f31b474-STIXGeneral-Regular-350" transform="translate(605.282715 34)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-45" transform="translate(541.982422 0.3125)"/> <use xlink:href="#f31b474-DejaVuSerif-40" transform="translate(605.996094 0.3125)"/> </g> </g> <g id="f31b474-line2d_3"> <defs> <path id="f31b474-m6832866d78" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f31b474-p6e8f3519d3)"> <use xlink:href="#f31b474-m6832866d78" x="180.646792" y="124.909057" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> <g id="f31b474-axes_2"> <g id="f31b474-patch_5"> <path d="M 312.344151 299.795849 L 586.08 299.795849 L 586.08 26.06 L 312.344151 26.06 L 312.344151 299.795849 z " style="fill: none"/> </g> <g id="f31b474-matplotlib.axis_3"/> <g id="f31b474-matplotlib.axis_4"/> <g id="f31b474-line2d_4"> <path d="M 312.344151 37.46566 L 586.08 174.333585 L 586.08 174.333585 " clip-path="url(#f31b474-p5520527de6)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f31b474-line2d_5"> <path d="M 312.344151 299.795849 L 586.08 26.06 L 586.08 26.06 " clip-path="url(#f31b474-p5520527de6)" style="fill: none; stroke-dasharray: 5.6,4.2; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.4"/> </g> <g id="f31b474-line2d_6"> <path d="M 312.344151 124.909057 L 586.08 124.909057 L 586.08 124.909057 " clip-path="url(#f31b474-p5520527de6)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f31b474-patch_6"> <path d="M 449.212075 299.795849 L 449.212075 26.06 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f31b474-patch_7"> <path d="M 312.344151 162.927925 L 586.08 162.927925 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f31b474-text_7"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(578.67 182.309595) scale(0.13 -0.13)"> <use xlink:href="#f31b474-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f31b474-text_8"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(454.914906 35.936953) scale(0.13 -0.13)"> <use xlink:href="#f31b474-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f31b474-text_9"> <!-- $(1, 1)$ --> <g style="fill: var(--fig-accent)" transform="translate(479.414717 154.640858) scale(0.12 -0.12)"> <use xlink:href="#f31b474-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(39.013672 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(153.388672 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-c" transform="translate(217.011719 0.015625)"/> </g> </g> <g id="f31b474-text_10"> <!-- $R_1: x + 2y = 3$ --> <g style="fill: var(--fig-ink)" transform="translate(343.9 42.483791) scale(0.12 -0.12)"> <use xlink:href="#f31b474-DejaVuSerif-Italic-35" transform="translate(0 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(75.292969 -14.218701) scale(0.7)"/> <use xlink:href="#f31b474-DejaVuSerif-1d" transform="translate(141.38916 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-5b" transform="translate(194.04541 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-e" transform="translate(269.406738 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-15" transform="translate(372.160645 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-5c" transform="translate(435.783691 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-20" transform="translate(511.242676 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-16" transform="translate(613.996582 0.78125)"/> </g> </g> <g id="f31b474-text_11"> <!-- $R_2 - R_1: -3y = -3$ --> <g style="fill: var(--fig-steel)" transform="translate(318.45434 114.71964) scale(0.12 -0.12)"> <use xlink:href="#f31b474-DejaVuSerif-Italic-35" transform="translate(0 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-15" transform="translate(75.292969 -14.218701) scale(0.7)"/> <use xlink:href="#f31b474-DejaVuSerif-8cf" transform="translate(141.38916 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-35" transform="translate(244.143066 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(319.436035 -14.218701) scale(0.7)"/> <use xlink:href="#f31b474-DejaVuSerif-1d" transform="translate(385.532227 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-8cf" transform="translate(438.188477 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-16" transform="translate(521.977539 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-5c" transform="translate(585.600586 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-20" transform="translate(661.05957 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-8cf" transform="translate(763.813477 0.78125)"/> <use xlink:href="#f31b474-DejaVuSerif-16" transform="translate(847.602539 0.78125)"/> </g> </g> <g id="f31b474-text_12"> <!-- dopo $E_{21}(-1)$: retta nuova, stesso punto --> <g style="fill: var(--fig-ink)" transform="translate(317.782075 20.06) scale(0.13 -0.13)"> <defs> <path id="f31b474-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-Italic-28" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 4566 4666 L 4366 3628 L 3981 3628 L 4106 4281 L 1962 4281 L 1659 2719 L 3187 2719 L 3300 3303 L 3684 3303 L 3384 1753 L 3000 1753 L 3112 2338 L 1584 2338 L 1206 384 L 3400 384 L 3525 1038 L 3909 1038 L 3709 0 L -97 0 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f31b474-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f31b474-DejaVuSerif-47" transform="translate(0 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-52" transform="translate(64.013672 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-53" transform="translate(124.21875 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-52" transform="translate(188.232422 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-3" transform="translate(248.4375 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-Italic-28" transform="translate(280.224609 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-15" transform="translate(353.222656 -14.984326) scale(0.7)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(397.758789 -14.984326) scale(0.7)"/> <use xlink:href="#f31b474-DejaVuSerif-b" transform="translate(444.890137 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-8cf" transform="translate(483.903809 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-14" transform="translate(567.692871 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-c" transform="translate(631.315918 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-1d" transform="translate(670.32959 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-3" transform="translate(704.020996 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-55" transform="translate(735.808105 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-48" transform="translate(783.61084 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-57" transform="translate(842.790527 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-57" transform="translate(882.976074 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-44" transform="translate(923.161621 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-3" transform="translate(982.780762 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-51" transform="translate(1014.567871 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-58" transform="translate(1078.972168 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-52" transform="translate(1143.376465 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-59" transform="translate(1203.581543 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-44" transform="translate(1260.075684 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-f" transform="translate(1319.694824 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-3" transform="translate(1351.481934 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-56" transform="translate(1383.269043 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-57" transform="translate(1434.587402 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-48" transform="translate(1474.772949 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-56" transform="translate(1533.952637 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-56" transform="translate(1585.270996 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-52" transform="translate(1636.589355 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-3" transform="translate(1696.794434 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-53" transform="translate(1728.581543 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-58" transform="translate(1792.595215 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-51" transform="translate(1856.999512 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-57" transform="translate(1921.403809 0.015625)"/> <use xlink:href="#f31b474-DejaVuSerif-52" transform="translate(1961.589355 0.015625)"/> </g> </g> <g id="f31b474-line2d_7"> <g clip-path="url(#f31b474-p5520527de6)"> <use xlink:href="#f31b474-m6832866d78" x="487.230943" y="124.909057" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> </g> <defs> <clipPath id="f31b474-p6e8f3519d3"> <rect x="5.76" y="26.06" width="273.735849" height="273.735849"/> </clipPath> <clipPath id="f31b474-p5520527de6"> <rect x="312.344151" y="26.06" width="273.735849" height="273.735849"/> </clipPath> </defs> </svg></figure>

### Matrice invertibile e inversa

**L'idea.** Un numero $a \neq 0$ ha il reciproco $\frac{1}{a}$, con $a \cdot \frac{1}{a} = 1$; il numero $0$ no. L'inversa è la stessa cosa per le matrici quadrate, con $I_n$ al posto di $1$: una matrice che "disfa" quello che fa $A$. La differenza coi numeri è che le matrici che non hanno l'inversa sono molte di più della sola $O_n$ (per esempio tutte quelle con una riga nulla), e serve un criterio per riconoscerle: sarà il rango.

La prof (<span class="src">p. 14</span>): $A \in M_n(\mathbb{R})$ quadrata è **invertibile** se $\exists\, B \in M_n(\mathbb{R})$ tale che
$$
AB = BA = I_n
$$
In tal caso, $B$ è detta l'**inversa** di $A$ e la denotiamo $A^{-1}$.

NB della prof: in generale non è detto che $AB$ e $BA$ coincidano (il prodotto non è commutativo, [Matrici e operazioni](/uni/gal/matrici-e-operazioni/)), ma per l'inversa **devono** venire entrambi $I_n$.

**Perché "la" inversa.** Se ce n'è una, è unica (dispensa, <span class="src">Oss. 9</span>).

> [!note]- Dimostrazione (unicità dell'inversa)
> **Ipotesi**: $B$ e $B'$ sono due inverse di $A$, cioè $AB = BA = I_n$ e $AB' = B'A = I_n$. **Tesi**: $B = B'$.
> 1. $B = BI_n$, perché $I_n$ è l'elemento neutro del prodotto.
> 2. $BI_n = B(AB')$, perché $AB' = I_n$ ($B'$ è inversa di $A$).
> 3. $B(AB') = (BA)B'$, per la proprietà associativa.
> 4. $(BA)B' = I_nB'$, perché $BA = I_n$ ($B$ è inversa di $A$).
> 5. $I_nB' = B'$, elemento neutro.
>
> Mettendo in fila: $B = BI_n = B(AB') = (BA)B' = I_nB' = B'$. Di ciascuna ipotesi si usa una metà: $AB' = I_n$ e $BA = I_n$. $\square$

**Solo matrici quadrate.** La definizione è data in $M_n(\mathbb{R})$: per una $A$ $m \times n$ con $m \neq n$, $AB$ e $BA$ avrebbero ordini diversi e non potrebbero essere tutte e due $I$ dello stesso ordine.

Esempi: (1) $I_n$ è invertibile e $I_n^{-1} = I_n$ (la prof, <span class="src">p. 14</span>, "esempi / non-esempi"). $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$ (dispensa, es. 36). La dispensa lì scrive "ogni matrice diagonale è invertibile": vale solo se **tutti gli elementi della diagonale sono non nulli** ($O_n$ è diagonale e non è invertibile).

**Esempio (2): verificare un'inversa data, solo con la definizione.** $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$, $B = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$. Per dire che $B = A^{-1}$ non serve sapere da dove viene $B$: bastano i due prodotti.
- $AB$: riga $(2, 1)$ per le colonne $(3, -5)$ e $(-1, 2)$ dà $6 - 5 = 1$ e $-2 + 2 = 0$; riga $(5, 3)$ dà $15 - 15 = 0$ e $-5 + 6 = 1$. $AB = I_2$.
- $BA$: riga $(3, -1)$ per le colonne $(2, 5)$ e $(1, 3)$ dà $6 - 5 = 1$ e $3 - 3 = 0$; riga $(-5, 2)$ dà $-10 + 10 = 0$ e $-5 + 6 = 1$. $BA = I_2$.

Quindi $A$ è invertibile e $A^{-1} = B$.

**Controesempio: perché servono tutti e due i prodotti.** Fuori dalle quadrate un prodotto solo può dare l'identità. $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ ($2 \times 3$) e la sua trasposta $B = A^T$ ($3 \times 2$):
$$
AB = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2 \qquad BA = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} \neq I_3
$$
(in $BA$ la terza riga di $B$ è $(0, 0)$, quindi la terza riga del prodotto è nulla). Per questo la definizione chiede $AB = BA = I_n$ e solo per le quadrate. Per le quadrate in realtà basta uno dei due prodotti, ma è un fatto che a lezione non è stato dimostrato: negli esercizi si verifica un prodotto come controllo dei conti, e la teoria lo garantisce perché l'inversa viene da Gauss-Jordan (teorema ★★★).

**Controesempio: una matrice non nulla senza inversa.** $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$. Se esistesse $B$ con $AB = I_2$, guardando le righe: la riga 2 di $AB$ è $(2, 4)$ per le colonne di $B$, cioè il doppio della riga 1 di $AB$ (che è $(1, 2)$ per le stesse colonne). Ma in $I_2$ la riga 2, $(0, 1)$, non è il doppio della riga 1, $(1, 0)$. Nessuna $B$ va bene. Nel piano (figura sotto, al teorema ★★★) le due righe di $A$ danno rette parallele o coincidenti.

## Enunciati

### Le matrici delle operazioni elementari sono invertibili

La prof (<span class="src">p. 14</span>, esempio (2)): le matrici delle operazioni elementari sono invertibili:
$$
S_{ij}^{-1} = S_{ij} \qquad D_i(\lambda)^{-1} = D_i\!\left(\tfrac{1}{\lambda}\right)\ (\lambda \neq 0) \qquad E_{ij}(\mu)^{-1} = E_{ij}(-\mu)
$$
> [!note]- Dimostrazione (passo per passo)
> **Il fatto che si usa.** Se $M$ è la matrice di un'operazione elementare, $MN$ è $N$ con quell'operazione fatta (vale per ogni $N$ con $m$ righe, definizione delle matrici elementari). Indico con $\vec{e}_k$ la riga $k$ di $I_m$ (un $1$ al posto $k$, zeri altrove). Quindi per verificare $M'M = I_m$ basta fare su $M$ l'operazione di $M'$ e vedere se viene $I_m$; per $MM' = I_m$ si fa su $M'$ l'operazione di $M$.
>
> **$S_{ij}$.** $S_{ij}S_{ij}$ è $S_{ij}$ con le righe $i$ e $j$ scambiate. $S_{ij}$ è $I_m$ con le righe $i$ e $j$ scambiate, quindi scambiandole di nuovo torna $I_m$. Un prodotto solo basta, perché i due fattori sono uguali: $S_{ij}S_{ij} = I_m$ dice sia $AB = I_m$ sia $BA = I_m$ con $A = B = S_{ij}$.
>
> **$D_i(\lambda)$, $\lambda \neq 0$.** $D_i(\frac{1}{\lambda})D_i(\lambda)$ è $D_i(\lambda)$ con la riga $i$ moltiplicata per $\frac{1}{\lambda}$ (che esiste perché $\lambda \neq 0$). La riga $i$ di $D_i(\lambda)$ è $\lambda\vec{e}_i$ (un $\lambda$ al posto $i$, zeri altrove), e diventa $\frac{1}{\lambda}\lambda\vec{e}_i = \vec{e}_i$; le altre righe sono già quelle di $I_m$. Viene $I_m$. Scambiando i ruoli di $\lambda$ e $\frac{1}{\lambda}$ si ha anche $D_i(\lambda)D_i(\frac{1}{\lambda}) = I_m$.
>
> **$E_{ij}(\mu)$, $i \neq j$.** $E_{ij}(-\mu)E_{ij}(\mu)$ è $E_{ij}(\mu)$ con $R_i \to R_i - \mu R_j$.
> - La riga $j$ di $E_{ij}(\mu)$ è $\vec{e}_j$, quella di $I_m$: l'operazione $E_{ij}(\mu)$ ha cambiato solo la riga $i$.
> - La riga $i$ di $E_{ij}(\mu)$ è $\vec{e}_i + \mu\vec{e}_j$.
> - Dopo $R_i - \mu R_j$: $(\vec{e}_i + \mu\vec{e}_j) - \mu\vec{e}_j = \vec{e}_i$. Le altre righe non cambiano.
>
> Viene $I_m$. Con $-\mu$ al posto di $\mu$ lo stesso conto dà $E_{ij}(\mu)E_{ij}(-\mu) = I_m$. Valgono entrambi i prodotti, quindi $E_{ij}(\mu)^{-1} = E_{ij}(-\mu)$. $\square$

**Perché, a parole.** L'inversa è l'operazione che disfa: scambiare di nuovo le stesse due righe; dividere per $\lambda$ la riga moltiplicata per $\lambda$; togliere $\mu R_j$ alla riga a cui lo si era aggiunto. Per esempio $E_{ij}(-\mu)E_{ij}(\mu)A$ fa prima $R_i \to R_i + \mu R_j$ e poi $R_i \to R_i - \mu R_j$, e torna $A$. Qui si vede perché $D_i(0)$ non è ammessa: moltiplicare una riga per $0$ non si può disfare.

**Esempi.**
1. $E_{12}(2) = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ e $E_{12}(-2) = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$. Prodotto $E_{12}(-2)E_{12}(2)$: riga $(1, -2)$ per le colonne $(1, 0)$ e $(2, 1)$ dà $1$ e $2 - 2 = 0$; riga $(0, 1)$ dà $0$ e $1$. È $I_2$.
2. $D_3(5)$ in $3 \times 3$ ha diagonale $(1, 1, 5)$, $D_3\!\left(\frac{1}{5}\right)$ ha diagonale $\left(1, 1, \frac{1}{5}\right)$. Il prodotto di due diagonali è la diagonale dei prodotti: $\left(1, 1, 5 \cdot \frac{1}{5}\right) = (1, 1, 1)$, cioè $I_3$.

**Controesempio.** $D_2(0) = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ ha la seconda riga nulla: per l'osservazione 1 qui sotto non è invertibile. È il motivo per cui nella definizione di $D_i(\lambda)$ c'è $\lambda \neq 0$.

### Gauss-Jordan come prodotto: $\operatorname{rref}(A) = PA$

La prof (<span class="src">p. 14</span>, proposizione): data $A \in M_{m,n}(\mathbb{R})$, $\operatorname{rref}(A)$ può essere ottenuta moltiplicando $A$ a sinistra per una matrice $m \times m$ opportuna, ottenuta dal prodotto di matrici di operazioni elementari:
$$
\operatorname{rref}(A) = PA
$$
> [!note]- Dimostrazione
> 1. Gauss-Jordan porta $A$ in $\operatorname{rref}(A)$ con un numero finito $r$ di operazioni elementari (capitolo 2). Siano $M_1, \dots, M_r \in M_m(\mathbb{R})$ le loro matrici, nell'ordine in cui si fanno.
> 2. Dopo la prima operazione si ha $M_1A$ (moltiplicare a sinistra per $M_1$ fa l'operazione).
> 3. Dopo la seconda, $M_2(M_1A)$; dopo la terza, $M_3(M_2M_1A)$; e così via fino a $\operatorname{rref}(A) = M_r(\cdots(M_2(M_1A)))$.
> 4. Per l'associativa le parentesi si tolgono: $\operatorname{rref}(A) = (M_r \cdots M_2M_1)A$.
> 5. Si pone $P := M_r \cdots M_2M_1$, che è $m \times m$ (prodotto di matrici $m \times m$): $\operatorname{rref}(A) = PA$. $\square$
>
> L'ordine è rovesciato: l'ultima operazione sta più a sinistra. In più $P$ è invertibile, perché prodotto di matrici elementari invertibili (osservazione 2, più sotto).

### Osservazione 1: righe o colonne nulle

La prof (<span class="src">p. 16</span>): tutte le matrici quadrate che hanno una riga (o una colonna) di zeri **non** sono invertibili.

> [!note]- Dimostrazione
> **Riga $i$ nulla in $A$.** Per ogni $B$, la riga $i$ di $AB$ è "riga $i$ di $A$ per le colonne di $B$", quindi tutta nulla. Ma la riga $i$ di $I_n$ ha un $1$ al posto $i$. Nessuna $B$ dà $AB = I_n$.
>
> **Colonna $j$ nulla in $A$.** Per ogni $B$, la colonna $j$ di $BA$ è "righe di $B$ per la colonna $j$ di $A$", quindi tutta nulla. Nessuna $B$ dà $BA = I_n$. $\square$

**Esempi.**
1. $\begin{pmatrix} 3 & 1 \\ 0 & 0 \end{pmatrix}$: riga 2 nulla, non invertibile.
2. $\begin{pmatrix} 1 & 0 & 2 \\ 3 & 0 & 1 \\ 4 & 0 & 5 \end{pmatrix}$: nessuna riga nulla, ma la colonna 2 è nulla, quindi non invertibile. Torna col rango: la colonna 2 non può avere pivot, e i pivot sono al più $2 < 3$.

**Il viceversa è falso.** Una matrice senza righe né colonne nulle può non essere invertibile: $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ (controesempio sopra) ha tutti gli elementi diversi da zero. L'osservazione 1 è una condizione che basta per dire "no", non un criterio. Il criterio è il teorema ★★★.

### Osservazione 2: il prodotto di invertibili è invertibile

La prof (<span class="src">p. 16</span>): siano $A, B \in M_n(\mathbb{R})$ invertibili, con inverse $A^{-1}$, $B^{-1}$. Allora anche $AB$ è invertibile, e l'inversa è
$$
(AB)^{-1} = B^{-1}A^{-1}
$$

> [!note]- Dimostrazione
> La prof (p. 16) fa un lato, con le giustificazioni sotto ogni uguale:
> $$
> (AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AI_nA^{-1} = AA^{-1} = I_n
> $$
> il primo uguale per la proprietà associativa, il secondo perché $B$ è invertibile ($BB^{-1} = I_n$), il terzo perché $AI_n = A$, l'ultimo perché $A$ è invertibile. Poi "analogamente $(B^{-1}A^{-1})(AB) = I_n$": per esteso,
> $$
> (B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}I_nB = B^{-1}B = I_n
> $$
> Si usa solo l'associativa: le parentesi si spostano, l'ordine dei fattori no. $\square$

Ripetendo il ragionamento, un prodotto di quante si vuole matrici invertibili è invertibile: $(M_r \cdots M_1)^{-1} = M_1^{-1} \cdots M_r^{-1}$. In particolare la $P$ di $\operatorname{rref}(A) = PA$ è **sempre invertibile**.

Per ricordare l'ordine: si toglie prima l'ultima cosa messa, come le scarpe dopo i calzini.

**Esempio con i numeri.** $A = E_{12}(1) = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ e $B = D_1(2) = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$, con inverse $A^{-1} = E_{12}(-1) = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$ e $B^{-1} = D_1(\frac{1}{2}) = \begin{pmatrix} \frac{1}{2} & 0 \\ 0 & 1 \end{pmatrix}$.
- $AB$: riga $(1, 1)$ per le colonne $(2, 0)$ e $(0, 1)$ dà $2$ e $1$; riga $(0, 1)$ dà $0$ e $1$. $AB = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$.
- $B^{-1}A^{-1}$: riga $\left(\frac{1}{2}, 0\right)$ per le colonne $(1, 0)$ e $(-1, 1)$ dà $\frac{1}{2}$ e $-\frac{1}{2}$; riga $(0, 1)$ dà $0$ e $1$. $B^{-1}A^{-1} = \begin{pmatrix} \frac{1}{2} & -\frac{1}{2} \\ 0 & 1 \end{pmatrix}$.
- Controllo $(AB)(B^{-1}A^{-1})$: riga $(2, 1)$ per le colonne $\left(\frac{1}{2}, 0\right)$ e $\left(-\frac{1}{2}, 1\right)$ dà $1$ e $-1 + 1 = 0$; riga $(0, 1)$ dà $0$ e $1$. È $I_2$.
- L'ordine sbagliato: $A^{-1}B^{-1}$, riga $(1, -1)$ per le colonne $\left(\frac{1}{2}, 0\right)$ e $(0, 1)$ dà $\frac{1}{2}$ e $-1$: $A^{-1}B^{-1} = \begin{pmatrix} \frac{1}{2} & -1 \\ 0 & 1 \end{pmatrix} \neq (AB)^{-1}$.

**Controesempio: la somma non va.** Il prodotto di invertibili è invertibile, la somma no. $I_2$ e $-I_2$ sono invertibili, ma $I_2 + (-I_2) = O_2$ non lo è. E al contrario due non invertibili possono sommarsi in un'invertibile: $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = I_2$.

### ★★★ Teorema: rango e invertibilità

La prof (<span class="src">p. 16-17</span>; nel quaderno, p. 64, con tre stelle):

> [!abstract] Teorema
> Sia $A \in M_n(\mathbb{R})$. Allora
> $$
> A \text{ è invertibile} \iff \operatorname{rg}(A) = n
> $$

Ipotesi: $A$ quadrata di ordine $n$. Tesi: le due condizioni si implicano a vicenda. Detto in un altro modo: $A$ è invertibile se e solo se $\operatorname{rref}(A) = I_n$, cioè se Gauss-Jordan mette un pivot in ogni colonna.

**Perché conta.** Trasforma una domanda difficile ("esiste una matrice $B$ con $AB = BA = I$?", che sono $n^2$ equazioni in $n^2$ incognite) in un conto che si sa già fare: ridurre a scalini e contare i pivot. Con un parametro, "per quali $k$ è invertibile" diventa "per quali $k$ il rango è massimo".

**L'idea nel piano.** Una $A \in M_2(\mathbb{R})$ è la matrice di un sistema di due equazioni in $x, y$, cioè di due rette. Se $\operatorname{rg}(A) = 2$ le rette non sono parallele e si incontrano in un punto solo, qualunque sia $\vec{b}$: è la soluzione $A^{-1}\vec{b}$. Se $\operatorname{rg}(A) = 1$ le righe di $A$ sono proporzionali, le rette sono parallele, e a seconda di $\vec{b}$ non si incontrano mai o coincidono. Nel primo caso $A$ si inverte, nel secondo no.

<figure class="fig"><svg role="img" aria-label="sistema 2x2 e invertibilita" xmlns:xlink="http://www.w3.org/1999/xlink" width="792.72pt" height="271.525pt" viewBox="0 0 792.72 271.525" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f9a0c35-figure_1"> <g id="f9a0c35-patch_1"> <path d="M 0 271.525 L 792.72 271.525 L 792.72 0 L 0 0 L 0 271.525 z " style="fill: none"/> </g> <g id="f9a0c35-axes_1"> <g id="f9a0c35-patch_2"> <path d="M 5.76 265.765 L 249.885 265.765 L 249.885 21.64 L 5.76 21.64 L 5.76 265.765 z " style="fill: none"/> </g> <g id="f9a0c35-matplotlib.axis_1"/> <g id="f9a0c35-matplotlib.axis_2"/> <g id="f9a0c35-line2d_1"> <path d="M 5.76 31.811875 L 249.885 153.874375 L 249.885 153.874375 " clip-path="url(#f9a0c35-p76b337ce90)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f9a0c35-line2d_2"> <path d="M 5.76 265.765 L 249.885 21.64 L 249.885 21.64 " clip-path="url(#f9a0c35-p76b337ce90)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f9a0c35-patch_3"> <path d="M 127.8225 265.765 L 127.8225 21.64 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f9a0c35-patch_4"> <path d="M 5.76 143.7025 L 249.885 143.7025 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f9a0c35-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(242.475 162.056016) scale(0.13 -0.13)"> <defs> <path id="f9a0c35-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f9a0c35-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(132.908437 31.516953) scale(0.13 -0.13)"> <defs> <path id="f9a0c35-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f9a0c35-text_3"> <!-- $(1, 1)$ --> <g style="fill: var(--fig-accent)" transform="translate(153.09 136.649219) scale(0.12 -0.12)"> <defs> <path id="f9a0c35-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-14" transform="translate(39.013672 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-14" transform="translate(153.388672 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-c" transform="translate(217.011719 0.015625)"/> </g> </g> <g id="f9a0c35-text_4"> <!-- $x + 2y = 3$ --> <g style="fill: var(--fig-ink)" transform="translate(54.704375 41.710312) scale(0.12 -0.12)"> <defs> <path id="f9a0c35-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(0 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-e" transform="translate(75.361328 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(178.115234 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(241.738281 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-20" transform="translate(317.197266 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-16" transform="translate(419.951172 0.78125)"/> </g> </g> <g id="f9a0c35-text_5"> <!-- $x - y = 0$ --> <g style="fill: var(--fig-steel)" transform="translate(190.77875 95.960312) scale(0.12 -0.12)"> <defs> <path id="f9a0c35-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(0 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-8cf" transform="translate(75.361328 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(178.115234 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-20" transform="translate(253.574219 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-13" transform="translate(356.328125 0.78125)"/> </g> </g> <g id="f9a0c35-text_6"> <!-- $A$ invertibile: un punto solo --> <g style="fill: var(--fig-ink)" transform="translate(38.2525 15.64) scale(0.13 -0.13)"> <defs> <path id="f9a0c35-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-24" transform="translate(0 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(72.216797 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(104.003906 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(135.986328 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-59" transform="translate(200.390625 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(256.884766 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-55" transform="translate(316.064453 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-57" transform="translate(363.867188 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(404.052734 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-45" transform="translate(436.035156 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(500.048828 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4f" transform="translate(532.03125 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(564.013672 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-1d" transform="translate(623.193359 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(656.884766 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-58" transform="translate(688.671875 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(753.076172 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(817.480469 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-53" transform="translate(849.267578 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-58" transform="translate(913.28125 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(977.685547 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-57" transform="translate(1042.089844 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-52" transform="translate(1082.275391 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(1142.480469 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-56" transform="translate(1174.267578 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-52" transform="translate(1225.585938 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4f" transform="translate(1285.791016 0.015625)"/> <use xlink:href="#f9a0c35-DejaVuSerif-52" transform="translate(1317.773438 0.015625)"/> </g> </g> <g id="f9a0c35-line2d_3"> <defs> <path id="f9a0c35-md8ad944ecd" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f9a0c35-p76b337ce90)"> <use xlink:href="#f9a0c35-md8ad944ecd" x="161.72875" y="109.79625" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> <g id="f9a0c35-axes_2"> <g id="f9a0c35-patch_5"> <path d="M 274.2975 265.765 L 518.4225 265.765 L 518.4225 21.64 L 274.2975 21.64 L 274.2975 265.765 z " style="fill: none"/> </g> <g id="f9a0c35-matplotlib.axis_3"/> <g id="f9a0c35-matplotlib.axis_4"/> <g id="f9a0c35-line2d_4"> <path d="M 274.2975 48.765 L 518.4225 170.8275 L 518.4225 170.8275 " clip-path="url(#f9a0c35-p291023ab16)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f9a0c35-line2d_5"> <path d="M 274.2975 65.718125 L 518.4225 187.780625 L 518.4225 187.780625 " clip-path="url(#f9a0c35-p291023ab16)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.6; stroke-linecap: square"/> </g> <g id="f9a0c35-patch_6"> <path d="M 396.36 265.765 L 396.36 21.64 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f9a0c35-patch_7"> <path d="M 274.2975 143.7025 L 518.4225 143.7025 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f9a0c35-text_7"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(511.0125 162.056016) scale(0.13 -0.13)"> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f9a0c35-text_8"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(401.445937 31.516953) scale(0.13 -0.13)"> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f9a0c35-text_9"> <!-- $x + 2y = 2$ --> <g style="fill: var(--fig-ink)" transform="translate(319.85125 55.272812) scale(0.12 -0.12)"> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(0 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-e" transform="translate(75.361328 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(178.115234 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(241.738281 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-20" transform="translate(317.197266 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(419.951172 0.78125)"/> </g> </g> <g id="f9a0c35-text_10"> <!-- $2x + 4y = 2$ --> <g style="fill: var(--fig-steel)" transform="translate(414.339375 209.54625) scale(0.12 -0.12)"> <defs> <path id="f9a0c35-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(0 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(63.623047 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-e" transform="translate(138.984375 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-17" transform="translate(241.738281 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(305.361328 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-20" transform="translate(380.820312 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(483.574219 0.78125)"/> </g> </g> <g id="f9a0c35-text_11"> <!-- non invertibile: parallele, nessuna --> <g style="fill: var(--fig-ink)" transform="translate(283.968906 15.64) scale(0.13 -0.13)"> <defs> <path id="f9a0c35-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-51"/> <use xlink:href="#f9a0c35-DejaVuSerif-52" transform="translate(64.40625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(124.609375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(189.015625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(220.796875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(252.78125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-59" transform="translate(317.1875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(373.6875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-55" transform="translate(432.875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-57" transform="translate(480.671875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(520.859375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-45" transform="translate(552.84375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(616.859375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4f" transform="translate(648.84375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(680.828125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-1d" transform="translate(740.015625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(773.703125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-53" transform="translate(805.484375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-44" transform="translate(869.5 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-55" transform="translate(929.125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-44" transform="translate(976.921875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4f" transform="translate(1036.546875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4f" transform="translate(1068.53125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(1100.515625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4f" transform="translate(1159.703125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(1191.6875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-f" transform="translate(1250.875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(1282.65625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(1314.4375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(1378.84375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-56" transform="translate(1438.03125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-56" transform="translate(1489.34375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-58" transform="translate(1540.65625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(1605.0625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-44" transform="translate(1669.46875 0)"/> </g> </g> </g> <g id="f9a0c35-axes_3"> <g id="f9a0c35-patch_8"> <path d="M 542.835 265.765 L 786.96 265.765 L 786.96 21.64 L 542.835 21.64 L 542.835 265.765 z " style="fill: none"/> </g> <g id="f9a0c35-matplotlib.axis_5"/> <g id="f9a0c35-matplotlib.axis_6"/> <g id="f9a0c35-line2d_6"> <path d="M 542.835 48.765 L 786.96 170.8275 L 786.96 170.8275 " clip-path="url(#f9a0c35-p50dd523271)" style="fill: none; stroke: var(--fig-ink); stroke-width: 5; stroke-linecap: square"/> </g> <g id="f9a0c35-line2d_7"> <path d="M 542.835 48.765 L 786.96 170.8275 L 786.96 170.8275 " clip-path="url(#f9a0c35-p50dd523271)" style="fill: none; stroke-dasharray: 12,8; stroke-dashoffset: 0; stroke: var(--fig-steel); stroke-width: 2"/> </g> <g id="f9a0c35-patch_9"> <path d="M 664.8975 265.765 L 664.8975 21.64 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f9a0c35-patch_10"> <path d="M 542.835 143.7025 L 786.96 143.7025 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f9a0c35-text_12"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(779.55 162.056016) scale(0.13 -0.13)"> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f9a0c35-text_13"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(669.983437 31.516953) scale(0.13 -0.13)"> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f9a0c35-text_14"> <!-- $x + 2y = 2$ --> <g style="fill: var(--fig-ink)" transform="translate(588.38875 55.272812) scale(0.12 -0.12)"> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(0 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-e" transform="translate(75.361328 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(178.115234 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(241.738281 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-20" transform="translate(317.197266 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(419.951172 0.78125)"/> </g> </g> <g id="f9a0c35-text_15"> <!-- $2x + 4y = 4$ --> <g style="fill: var(--fig-steel)" transform="translate(682.876875 209.54625) scale(0.12 -0.12)"> <use xlink:href="#f9a0c35-DejaVuSerif-15" transform="translate(0 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5b" transform="translate(63.623047 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-e" transform="translate(138.984375 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-17" transform="translate(241.738281 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-Italic-5c" transform="translate(305.361328 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-20" transform="translate(380.820312 0.78125)"/> <use xlink:href="#f9a0c35-DejaVuSerif-17" transform="translate(483.574219 0.78125)"/> </g> </g> <g id="f9a0c35-text_16"> <!-- non invertibile: coincidenti, infinite --> <g style="fill: var(--fig-ink)" transform="translate(548.660234 15.64) scale(0.13 -0.13)"> <defs> <path id="f9a0c35-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f9a0c35-DejaVuSerif-cf0" d="M 3347 4019 L 3053 4022 Q 3044 4291 2853 4423 Q 2663 4556 2278 4556 Q 1800 4556 1578 4334 Q 1356 4113 1356 3634 L 1356 3322 L 3578 3322 L 3578 331 L 4122 331 L 4122 0 L 2450 0 L 2450 331 L 3003 331 L 3003 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4238 1147 4550 Q 1513 4863 2228 4863 Q 2500 4863 2784 4822 Q 3069 4781 3347 4697 L 3347 4019 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f9a0c35-DejaVuSerif-51"/> <use xlink:href="#f9a0c35-DejaVuSerif-52" transform="translate(64.40625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(124.609375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(189.015625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(220.796875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(252.78125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-59" transform="translate(317.1875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(373.6875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-55" transform="translate(432.875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-57" transform="translate(480.671875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(520.859375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-45" transform="translate(552.84375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(616.859375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4f" transform="translate(648.84375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(680.828125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-1d" transform="translate(740.015625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(773.703125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-46" transform="translate(805.484375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-52" transform="translate(861.484375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(921.6875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(953.671875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-46" transform="translate(1018.078125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(1074.078125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-47" transform="translate(1106.0625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(1170.078125 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(1229.265625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-57" transform="translate(1293.671875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(1333.859375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-f" transform="translate(1365.84375 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-3" transform="translate(1397.625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(1429.40625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(1461.390625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-cf0" transform="translate(1525.796875 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-51" transform="translate(1592.5 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-4c" transform="translate(1656.90625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-57" transform="translate(1688.890625 0)"/> <use xlink:href="#f9a0c35-DejaVuSerif-48" transform="translate(1729.078125 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f9a0c35-p76b337ce90"> <rect x="5.76" y="21.64" width="244.125" height="244.125"/> </clipPath> <clipPath id="f9a0c35-p291023ab16"> <rect x="274.2975" y="21.64" width="244.125" height="244.125"/> </clipPath> <clipPath id="f9a0c35-p50dd523271"> <rect x="542.835" y="21.64" width="244.125" height="244.125"/> </clipPath> </defs> </svg></figure>

A sinistra $A = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}$ (l'esempio della prof a p. 18) con $\vec{b} = (3, 0)$: $A^{-1}\vec{b} = \frac{1}{3}(3 + 0,\ 3 - 0) = (1, 1)$. Al centro e a destra $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$, rango $1$: con $\vec{b} = (2, 2)$ la seconda equazione diviso $2$ è $x + 2y = 1$, parallela a $x + 2y = 2$, nessuna soluzione; con $\vec{b} = (2, 4)$ è di nuovo $x + 2y = 2$, infinite soluzioni.

**Esempi, dal più facile.** Il teorema si usa così: si riduce a scalini e si contano i pivot, senza cercare l'inversa.
1. $\begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix} \xrightarrow{E_{21}(-3)} \begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$ ($R_2 - 3R_1 = (3 - 3, 6 - 6)$): un pivot, $\operatorname{rg} = 1 < 2$, **non invertibile**.
2. $\begin{pmatrix} 2 & 1 & 4 \\ 0 & 3 & -1 \\ 0 & 0 & 5 \end{pmatrix}$ è già a scalini con pivot $2, 3, 5$: $\operatorname{rg} = 3$, **invertibile**, senza fare conti. Vale per ogni triangolare superiore con la diagonale tutta non nulla.
3. $\begin{pmatrix} 2 & 1 & 4 \\ 0 & 0 & -1 \\ 0 & 0 & 5 \end{pmatrix}$ sembra simile, ma la colonna 2 non ha pivot. $E_{32}\!\left(5\right)$: $R_3 + 5R_2 = (0, 0, 5 - 5) = (0, 0, 0)$. Pivot $2$ e $-1$: $\operatorname{rg} = 2 < 3$, **non invertibile**. Una triangolare con uno zero sulla diagonale non è invertibile.

**Controesempio: l'ipotesi "quadrata".** $\begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \end{pmatrix}$ ha rango $2$, uguale al numero di righe, ma non è invertibile: l'inversa non è nemmeno definita per una $2 \times 3$. Il teorema parla solo di $A \in M_n(\mathbb{R})$, e $n$ è insieme il numero di righe e di colonne.

> [!note]- Dimostrazione (della prof, con un passaggio completato)
> **Ingredienti.** $\operatorname{rg}(A) = \operatorname{rg}(\operatorname{rref}(A))$ per definizione di rango. Per la proposizione di prima esiste $P \in M_n(\mathbb{R})$ con
> $$
> (\ast) \qquad \operatorname{rref}(A) = PA
> $$
> dove $P$ è un prodotto di matrici di operazioni elementari, che sono invertibili; quindi anche $P$ è invertibile (osservazione 2). Sia $P^{-1}$ la sua inversa.
>
> **($\Rightarrow$)** Se $A$ è invertibile, allora $\operatorname{rref}(A) = PA$ è invertibile, perché prodotto di due invertibili (osservazione 2 e $(\ast)$). Per l'osservazione 1, $\operatorname{rref}(A)$ non può avere righe nulle. Una matrice $n \times n$ ridotta per righe senza righe nulle ha un pivot in ognuna delle $n$ righe: ha rango $n$. Quindi $\operatorname{rg}(A) = n$.
>
> **($\Leftarrow$)** Se $\operatorname{rg}(A) = n$, allora $\operatorname{rref}(A)$ è quadrata $n \times n$, ridotta per righe, con $n$ pivot: un pivot per colonna, ognuno uguale a $1$ e unico non nullo della sua colonna. È per forza $I_n$. Per $(\ast)$:
> $$
> PA = I_n
> $$
> Negli appunti della prof (p. 17) qui c'è “$\Rightarrow P$ è l'inversa di $A$ (e $A^{-1} = P$) $\Rightarrow A$ è invertibile", e così nel quaderno. Manca un passo, perché $PA = I_n$ è solo **metà** della definizione: serve anche $AP = I_n$. Si chiude usando che $P$ è invertibile, che la prof ha appena ricordato. Moltiplicando $PA = I_n$ a sinistra per $P^{-1}$:
> $$
> P^{-1}(PA) = P^{-1}I_n \implies A = P^{-1}
> $$
> Allora $AP = P^{-1}P = I_n$ e $PA = I_n$: $A$ è invertibile con $A^{-1} = P$. $\square$

### Calcolo dell'inversa: perché $[A \mid I_n]$ funziona

La prof (<span class="src">p. 17-18</span>, "come si calcola la matrice inversa"): sia $A \in M_n(\mathbb{R})$. Consideriamo $B = [A \mid I_n]$, matrice $n \times 2n$ ottenuta affiancando $I_n$ ad $A$, e calcoliamo $\operatorname{rref}(B)$. Osservazione:
$$
A \text{ invertibile} \iff \operatorname{rref}(B) = [I_n \mid P], \quad \text{e in tal caso } P = A^{-1}
$$

> [!note]- Dimostrazione (della prof)
> Sia $P$ il prodotto delle matrici delle operazioni che portano $B$ alla forma ridotta. Segue dalla definizione di prodotto (la prof, in verde): per ogni $A, B, C \in M_n(\mathbb{R})$, $A[B \mid C] = [AB \mid AC]$. Quindi:
> $$
> \operatorname{rref}(B) = PB = P[A \mid I_n] = [PA \mid PI_n] = [PA \mid P]
> $$
> Il blocco sinistro $PA$ è ridotto per righe (lo è tutta la matrice), quindi $PA = \operatorname{rref}(A)$. Per il teorema, $A$ è invertibile se e solo se $\operatorname{rref}(A) = I_n$, cioè se a sinistra compare $I_n$; e in quel caso, dalla dimostrazione del teorema, $A^{-1} = P$, che è proprio il blocco destro. $\square$

**In parole.** Il blocco destro parte da $I_n$ e subisce le stesse operazioni di $A$: alla fine contiene il prodotto $P$ di tutte le operazioni fatte. Se quelle operazioni hanno trasformato $A$ in $I_n$, allora $P$ è l'inversa.

**Esempio: la stessa $P$ di prima, senza moltiplicare matrici.** Con $M = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ dell'esempio 2 sulle matrici elementari, le stesse tre operazioni su $[M \mid I_2]$:
$$
\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 3 & 4 & 0 & 1 \end{array}\right] \xrightarrow{E_{21}(-3)} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & -2 & -3 & 1 \end{array}\right] \xrightarrow{D_2(-\frac{1}{2})} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 1 & \frac{3}{2} & -\frac{1}{2} \end{array}\right]
$$
$E_{12}(-2)$: $R_1 - 2R_2 = \left(1, 0 \mid 1 - 3,\ 0 + 1\right) = (1, 0 \mid -2, 1)$. A destra compare $\begin{pmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{pmatrix}$, la stessa $P$ trovata prima moltiplicando $E_{12}(-2)\,D_2(-\frac{1}{2})\,E_{21}(-3)$. Il blocco destro fa quel prodotto da solo, un passo alla volta.

### Osservazione: sistemi con $A$ invertibile

La prof (<span class="src">p. 19-20</span>): sia $A \in M_n(\mathbb{R})$ invertibile, sia $A\vec{x} = \vec{b}$ un sistema lineare. Posso trovare le soluzioni del sistema utilizzando l'inversa di $A$:
$$
\vec{x} = A^{-1}\vec{b}
$$
ed è l'**unica** soluzione.

> [!note]- Dimostrazione
> **Se $\vec{x}$ è una soluzione, allora $\vec{x} = A^{-1}\vec{b}$** (la prof: "infatti $A^{-1}(A\vec{x}) = A^{-1}\vec{b} \Rightarrow \vec{x} = A^{-1}\vec{b}$"): da $A\vec{x} = \vec{b}$, moltiplicando a sinistra per $A^{-1}$, $A^{-1}(A\vec{x}) = A^{-1}\vec{b}$, e $A^{-1}(A\vec{x}) = (A^{-1}A)\vec{x} = I_n\vec{x} = \vec{x}$.
>
> **$A^{-1}\vec{b}$ è davvero una soluzione** (questa metà manca negli appunti, nel quaderno e nella dispensa): $A(A^{-1}\vec{b}) = (AA^{-1})\vec{b} = I_n\vec{b} = \vec{b}$. Qui serve l'altra metà della definizione, $AA^{-1} = I_n$.
>
> Insieme: esiste una soluzione ed è una sola. $\square$

Con Rouché-Capelli torna: $A$ invertibile vuol dire $\operatorname{rg}(A) = n$; anche $[A \mid \vec{b}]$, che ha $n$ righe, ha rango $n$; ranghi uguali e uguali al numero di incognite, quindi soluzione unica, per **ogni** $\vec{b}$. In particolare l'omogeneo $A\vec{x} = \vec{0}$ ha solo $\vec{x} = \vec{0}$, cioè $N(A) = \{\vec{0}\}$ ([Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/)).

**Esempio.** Con $M = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $M^{-1} = \begin{pmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{pmatrix}$, il sistema $M\vec{x} = (1, 1)$:
$$
\vec{x} = M^{-1}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} -2 + 1 \\ \frac{3}{2} - \frac{1}{2} \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}
$$
Controllo: $x + 2y = -1 + 2 = 1$, $3x + 4y = -3 + 4 = 1$.

**Controesempio.** Se $A$ non è invertibile la formula non ha senso, e il sistema può avere nessuna o infinite soluzioni a seconda di $\vec{b}$: sono i due pannelli di destra della figura al teorema ★★★, e l'esercizio 5c più sotto.

## Metodo

### Riconoscere il tipo di esercizio

```
"è invertibile?" / "per quali k è invertibile?"
      -> rango: riduci a scalini, conta i pivot; invertibile <=> n pivot      (teorema ★★★)
"calcolare A⁻¹"
      -> [A | I_n] con Gauss-Jordan fino a [I_n | A⁻¹], poi verifica A·A⁻¹ = I_n
"risolvere A x = b" con A⁻¹ già calcolata, o con più vettori b
      -> x = A⁻¹ b, poi sostituisci nel sistema
"trovare X con AX = B" / "XA = B"
      -> X = A⁻¹B (A a sinistra)  /  X = BA⁻¹ (A a destra); prima controlla gli ordini
A non invertibile e un sistema da risolvere
      -> niente A⁻¹: Rouché-Capelli su [A | b]
teoria ("dimostrare che...", "vero o falso")
      -> definizione AB = BA = I_n, associativa, moltiplicare per A⁻¹ dalla parte giusta
```

### Calcolare l'inversa di $A \in M_n(\mathbb{R})$

1. Scrivi $[A \mid I_n]$, matrice $n \times 2n$.
2. Gauss-Jordan su **righe intere**: ogni operazione si fa anche sul blocco destro. Scrivi la sigla di ogni passo. Se il posto del pivot è $0$, prima uno scambio $S_{ij}$ con una riga che lì ha un numero non nullo (esercizio 2).
3. Arrivato alla forma a scalini, conta i pivot **del blocco sinistro**. Se sono meno di $n$: $\operatorname{rg}(A) < n$, $A$ **non è invertibile**, ci si ferma (non serve finire).
4. Altrimenti riduzione all'indietro: $D_i\!\left(\frac{1}{p_i}\right)$ sui pivot, poi zeri sopra ogni pivot, fino a $[I_n \mid P]$.
5. $A^{-1} = P$. **Verifica** $AA^{-1} = I_n$ (o $A^{-1}A$): con frazioni conviene moltiplicare per il denominatore comune e lavorare con interi.

### Invertibilità con un parametro

1. Riduci $A(k)$ a scalini tenendo $k$, scegliendo pivot senza parametro finché puoi (scambi).
2. I pivot che dipendono da $k$: trova dove si annullano (fattorizza).
3. $A(k)$ è invertibile per tutti i $k$ che non annullano nessun pivot; per i valori critici sostituisci e conta di nuovo i pivot (il rango scende sotto $n$).
4. Se chiede l'inversa per i $k$ ammessi: si divide per i pivot **dopo** averli dichiarati non nulli.

### Risolvere $A\vec{x} = \vec{b}$ con l'inversa

Conviene quando $A^{-1}$ è già stata calcolata (spesso è il punto prima dell'esercizio) o quando ci sono più $\vec{b}$ con la stessa $A$. Altrimenti Gauss-Jordan su $[A \mid \vec{b}]$ costa meno.

## Esempi svolti a lezione

> [!example]- Prof, 6/10, <span class="src">appunti p. 13</span>: $S_{12}$ su una $2 \times 4$
> $m = 2$, quindi le matrici elementari sono $2 \times 2$. $S_{12} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (righe di $I_2$ scambiate).
> $$
> A = \begin{pmatrix} 0 & 2 & 1 & 0 \\ 1 & 3 & -1 & 0 \end{pmatrix} \xrightarrow{S_{12}} \begin{pmatrix} 1 & 3 & -1 & 0 \\ 0 & 2 & 1 & 0 \end{pmatrix} = B
> $$
> **Esercizio della prof: verificare $S_{12}A = B$.** Riga 1 di $S_{12}$, $(0, 1)$, per le colonne di $A$: prende $0 \cdot R_1 + 1 \cdot R_2 = (1, 3, -1, 0)$. Riga 2, $(1, 0)$: prende $R_1 = (0, 2, 1, 0)$. Per esteso, l'elemento $(1, 2)$ è $0 \cdot 2 + 1 \cdot 3 = 3$. Torna $B$.
>
> $S_{12}$ è $2 \times 2$ anche se $A$ ha 4 colonne: l'ordine della matrice elementare è il numero di **righe** di $A$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 14-15</span>: le inverse delle matrici elementari
> **$3 \times 3$, $S_{12}$.** $S_{12}^{-1} = S_{12}$: infatti $S_{12}S_{12}$ scambia due volte le prime due righe di $I_3$, e torna $I_3$. Riga per colonna: la riga $(0, 1, 0)$ per le colonne di $S_{12}$, $(0, 1, 0)$, $(1, 0, 0)$, $(0, 0, 1)$, dà $(1, 0, 0)$, la prima riga di $I_3$.
>
> **$2 \times 2$, $D_2(2)$.** $D_2(2) = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$, e applicando $D_2\!\left(\frac{1}{2}\right)$ si torna a $I_2$. Quindi $D_2(2)^{-1} = D_2\!\left(\frac{1}{2}\right) = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$.
>
> **$3 \times 3$, $E_{31}(1)$.** Si somma alla terza riga di $I_3$ la prima:
> $$
> E_{31}(1) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} \qquad E_{31}(1)^{-1} = E_{31}(-1) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}
> $$
> Controllo: la terza riga di $E_{31}(-1)E_{31}(1)$ è $(-1, 0, 1)$ per le colonne $(1, 0, 1)$, $(0, 1, 0)$, $(0, 0, 1)$, cioè $(-1 + 1, 0, 1) = (0, 0, 1)$. Le altre righe restano quelle di $I_3$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 15-16</span>: una matrice che non si può invertire
> $$
> A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}
> $$
> Sia $B = \begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix}$ con $BA = AB = I_2$. Ma
> $$
> AB = \begin{pmatrix} b_{11} + b_{21} & b_{12} + b_{22} \\ 0 & 0 \end{pmatrix}
> $$
> ha la seconda riga nulla qualunque sia $B$, mentre $I_2$ ha seconda riga $(0, 1)$. **Non si può invertire.** Da qui la prof generalizza nell'osservazione 1: una riga (o colonna) di zeri basta a impedire l'inversa. Torna anche col teorema: $\operatorname{rg}(A) = 1 < 2$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 18</span>: l'inversa di una $2 \times 2$
> $$
> A = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}, \qquad A^{-1} = \,?
> $$
> $$
> [A \mid I_2] = \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 1 & -1 & 0 & 1 \end{array}\right] \xrightarrow{E_{21}(-1)} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & -3 & -1 & 1 \end{array}\right] \xrightarrow{D_2(-\frac{1}{3})} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 1 & \frac{1}{3} & -\frac{1}{3} \end{array}\right]
> $$
> Due pivot a sinistra: invertibile. $E_{12}(-2)$: $R_1 - 2R_2 = \left(1, 0 \mid 1 - \frac{2}{3},\ 0 + \frac{2}{3}\right) = \left(1, 0 \mid \frac{1}{3}, \frac{2}{3}\right)$.
> $$
> \left[\begin{array}{cc|cc} 1 & 0 & \frac{1}{3} & \frac{2}{3} \\ 0 & 1 & \frac{1}{3} & -\frac{1}{3} \end{array}\right] \qquad A^{-1} = \begin{pmatrix} \frac{1}{3} & \frac{2}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}
> $$
> **Esercizio della prof: verificare $AA^{-1} = A^{-1}A = I_2$.** Con $3A^{-1} = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}$:
> - $A \cdot 3A^{-1}$: riga $(1, 2)$ dà $1 + 2 = 3$ e $2 - 2 = 0$; riga $(1, -1)$ dà $1 - 1 = 0$ e $2 + 1 = 3$. È $3I_2$.
> - $3A^{-1} \cdot A$: è lo stesso prodotto, perché qui $3A^{-1} = A$. Quindi anche $A^{-1}A = I_2$.
>
> Curiosità di questo esempio: $A^{-1} = \frac{1}{3}A$, cioè $A^2 = 3I_2$.
>
> **L'errore del quaderno.** Negli appunti della prof il risultato è giusto, $\frac{2}{3}$. Nel quaderno, a p. 65, l'elemento $(1, 2)$ di $A^{-1}$ è scritto $-\frac{2}{3}$. È $+\frac{2}{3}$: $0 - 2 \cdot \left(-\frac{1}{3}\right) = \frac{2}{3}$. Con $-\frac{2}{3}$ la verifica fallisce subito: riga $(1, 2)$ di $A$ per la colonna $\left(-\frac{2}{3}, -\frac{1}{3}\right)$ dà $-\frac{4}{3} \neq 0$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 19</span>: un non-esempio $3 \times 3$
> $$
> A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & -1 \\ 1 & 0 & 1 \end{pmatrix}
> $$
> Si applica il procedimento a $[A \mid I_3]$. $E_{21}(-\frac{1}{2})$ ed $E_{31}(-\frac{1}{2})$:
> - $R_2 - \frac{1}{2}R_1 = \left(0, \frac{1}{2}, -1 \mid -\frac{1}{2}, 1, 0\right)$
> - $R_3 - \frac{1}{2}R_1 = \left(0, -\frac{1}{2}, 1 \mid -\frac{1}{2}, 0, 1\right)$
>
> $E_{32}(1)$: $R_3 + R_2 = (0, 0, 0 \mid -1, 1, 1)$.
> $$
> \left[\begin{array}{ccc|ccc} 2 & 1 & 0 & 1 & 0 & 0 \\ 0 & \frac{1}{2} & -1 & -\frac{1}{2} & 1 & 0 \\ 0 & 0 & 0 & -1 & 1 & 1 \end{array}\right]
> $$
> A sinistra solo due pivot (la prof: "non c'è pivot nella terza colonna"): **$\operatorname{rg}(A) = 2 < 3$, $A$ non è invertibile**. Ci si ferma qui, la riduzione all'indietro non può far comparire $I_3$. Il blocco destro non è nullo, ma non importa: conta solo il sinistro.
>
> Nel quaderno il procedimento è scritto “$[A \mid I_3]P = \operatorname{rref}(A)$": la forma giusta è $P[A \mid I_3] = \operatorname{rref}([A \mid I_3])$, con $P$ **a sinistra**.
>
> Si vede anche a occhio: $R_1 = R_2 + R_3$, $(2, 1, 0) = (1, 1, -1) + (1, 0, 1)$. Una riga è combinazione delle altre e il rango scende.

**Prof, 6/10, <span class="src">appunti p. 20</span>: esercizio con parametro.** Sia
$$
A_k = \begin{pmatrix} 1 & 2 & -3 \\ -1 & -2k & 3 \\ \frac{1}{4} & \frac{1}{2} & k \end{pmatrix}, \qquad k \in \mathbb{R}
$$
Calcolare $\operatorname{rg}(A_k)$ al variare di $k$ e dunque l'invertibilità di $A_k$; calcolare $A_0^{-1}$; risolvere il sistema lineare $A_0\vec{x} = \vec{b}$, ove $\vec{b} = (1, 1, 1)$. A lezione il 6/10 è stata fatta la prima parte; le altre due la prof le ha svolte all'esercitazione del 12/10 (<span class="src">p. 1-3</span>, "esercizio assegnato a lezione") e ne ha scritto i risultati negli appunti (p. 20).

> [!example]- Svolgimento della prima parte (prof)
> $E_{21}(1)$: $R_2 + R_1 = (0,\ 2 - 2k,\ 0)$. $E_{31}(-\frac{1}{4})$: $R_3 - \frac{1}{4}R_1 = \left(0,\ 0,\ k + \frac{3}{4}\right)$.
> $$
> A_k \to \begin{pmatrix} 1 & 2 & -3 \\ 0 & 2(1 - k) & 0 \\ 0 & 0 & k + \frac{3}{4} \end{pmatrix}
> $$
> Possibili pivot: $1$, $2(1 - k)$, $k + \frac{3}{4}$.
> - $k \neq 1$ e $k \neq -\frac{3}{4}$: tre pivot, $\operatorname{rg}(A_k) = 3$.
> - $k = 1$: $\begin{pmatrix} 1 & 2 & -3 \\ 0 & 0 & 0 \\ 0 & 0 & \frac{7}{4} \end{pmatrix}$, che dopo $S_{23}$ è a scalini con due pivot: $\operatorname{rg} = 2$. (Prima dello scambio non è a scalini: una riga nulla sopra una non nulla.)
> - $k = -\frac{3}{4}$: $\begin{pmatrix} 1 & 2 & -3 \\ 0 & \frac{7}{2} & 0 \\ 0 & 0 & 0 \end{pmatrix}$, $\operatorname{rg} = 2$.
>
> Per il teorema ★★★: **$A_k$ è invertibile se e solo se $\operatorname{rg}(A_k) = 3$, cioè $k \neq 1, -\frac{3}{4}$.** In particolare $A_0$ è invertibile.

> [!example]- Prof, esercitazione 3, 12/10, <span class="src">p. 2-3</span>: $A_0^{-1}$ e il sistema $A_0\vec{x} = \vec{b}$
> **Come si riconosce**: "calcolare $A_0^{-1}$" dopo aver discusso l'invertibilità: $k = 0$ non è un valore critico, quindi l'inversa esiste e si calcola con $[A_0 \mid I_3]$. Il sistema con la stessa matrice si risolve poi con un prodotto.
>
> **a)** $A_0 = \begin{pmatrix} 1 & 2 & -3 \\ -1 & 0 & 3 \\ \frac{1}{4} & \frac{1}{2} & 0 \end{pmatrix}$.
> $$
> [A_0 \mid I_3] = \left[\begin{array}{ccc|ccc} 1 & 2 & -3 & 1 & 0 & 0 \\ -1 & 0 & 3 & 0 & 1 & 0 \\ \frac{1}{4} & \frac{1}{2} & 0 & 0 & 0 & 1 \end{array}\right]
> $$
> $E_{21}(1)$: $R_2 + R_1 = (0, 2, 0 \mid 1, 1, 0)$. $E_{31}(-\frac{1}{4})$: $R_3 - \frac{1}{4}R_1 = \left(0, 0, \frac{3}{4} \mid -\frac{1}{4}, 0, 1\right)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & 2 & -3 & 1 & 0 & 0 \\ 0 & 2 & 0 & 1 & 1 & 0 \\ 0 & 0 & \frac{3}{4} & -\frac{1}{4} & 0 & 1 \end{array}\right]
> $$
> Tre pivot, invertibile (come previsto: $k = 0$ non è critico). $D_2(\frac{1}{2})$: $\left(0, 1, 0 \mid \frac{1}{2}, \frac{1}{2}, 0\right)$. $D_3(\frac{4}{3})$: $\left(0, 0, 1 \mid -\frac{1}{3}, 0, \frac{4}{3}\right)$.
>
> $E_{13}(3)$: $R_1 + 3R_3 = (1, 2, 0 \mid 1 - 1,\ 0,\ 4) = (1, 2, 0 \mid 0, 0, 4)$. $E_{12}(-2)$: $R_1 - 2R_2 = (1, 0, 0 \mid -1, -1, 4)$.
> $$
> A_0^{-1} = \begin{pmatrix} -1 & -1 & 4 \\ \frac{1}{2} & \frac{1}{2} & 0 \\ -\frac{1}{3} & 0 & \frac{4}{3} \end{pmatrix}
> $$
> **Verifica $A_0A_0^{-1} = I_3$.** Colonne di $A_0^{-1}$: $\left(-1, \frac{1}{2}, -\frac{1}{3}\right)$, $\left(-1, \frac{1}{2}, 0\right)$, $\left(4, 0, \frac{4}{3}\right)$.
> - riga $(1, 2, -3)$: $-1 + 1 + 1 = 1$; $\ -1 + 1 + 0 = 0$; $\ 4 + 0 - 4 = 0$
> - riga $(-1, 0, 3)$: $1 + 0 - 1 = 0$; $\ 1 + 0 + 0 = 1$; $\ -4 + 0 + 4 = 0$
> - riga $(\frac{1}{4}, \frac{1}{2}, 0)$: $-\frac{1}{4} + \frac{1}{4} = 0$; $\ -\frac{1}{4} + \frac{1}{4} = 0$; $\ 1 + 0 = 1$
>
> **b)** $A_0$ è invertibile, quindi $\vec{x} = A_0^{-1}\vec{b}$:
> $$
> \vec{x} = \begin{pmatrix} -1 - 1 + 4 \\ \frac{1}{2} + \frac{1}{2} + 0 \\ -\frac{1}{3} + 0 + \frac{4}{3} \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}
> $$
> Verifica nel sistema: $2 + 2 - 3 = 1$; $-2 + 0 + 3 = 1$; $\frac{1}{2} + \frac{1}{2} + 0 = 1$. Ed è l'unica soluzione.
>
> **Esercizio della prof: verificare per esempio che $A_0^{-1}A_0 = I_3$** (l'altro ordine). Righe di $A_0^{-1}$ per le colonne di $A_0$, $\left(1, -1, \frac{1}{4}\right)$, $\left(2, 0, \frac{1}{2}\right)$, $(-3, 3, 0)$:
> - riga $(-1, -1, 4)$: $-1 + 1 + 1 = 1$; $\ -2 + 0 + 2 = 0$; $\ 3 - 3 + 0 = 0$
> - riga $\left(\frac{1}{2}, \frac{1}{2}, 0\right)$: $\frac{1}{2} - \frac{1}{2} = 0$; $\ 1 + 0 = 1$; $\ -\frac{3}{2} + \frac{3}{2} = 0$
> - riga $\left(-\frac{1}{3}, 0, \frac{4}{3}\right)$: $-\frac{1}{3} + \frac{1}{3} = 0$; $\ -\frac{2}{3} + \frac{2}{3} = 0$; $\ 1 + 0 = 1$
>
> Per il punto b) la prof scrive: "sappiamo che ammette un'unica soluzione, grazie a Rouché-Capelli" ($\operatorname{rg}(A_0) = 3 = \operatorname{rg}([A_0 \mid \vec{b}])$, uguale al numero di incognite), "possiamo calcolarla così": $\vec{x} = A_0^{-1}\vec{b}$.

> [!example]- Prof, esercitazione 3, 12/10, <span class="src">p. 4-9</span>: gli altri esercizi svolti in classe
> Sono gli esercizi 1, 2, 3 e 6 del foglio della prof, scritti per intero con ogni passaggio in [Esercizi extra matrici svolti](/uni/gal/esercizi-extra-matrici-svolti/). Qui il testo, come si riconosce il tipo e il risultato, per ripassarli a colpo d'occhio.
>
> **Es. 1.** È invertibile $A = \begin{pmatrix} -1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & -3 & 1 \end{pmatrix}$? Tipo: inversa con $[A \mid I_3]$. Con $E_{21}(1)$, $E_{32}(3)$, $D_1(-1)$ si arriva a $A^{-1} = \begin{pmatrix} -1 & 0 & 0 \\ 1 & 1 & 0 \\ 3 & 3 & 1 \end{pmatrix}$. La seconda matrice del foglio, $B$, ha rango $2$ ("esercizio: matrice $B$", per casa).
>
> **Es. 2.** Calcolare $AB^{-1}C$ con $A$ $2 \times 4$, $B$ $4 \times 4$, $C = I_4$. Tipo: prodotto con inversa. Prima gli ordini ($2 \times 4$ per $4 \times 4$ per $4 \times 4$ dà $2 \times 4$), poi $C = I_4$ si toglie, poi $B^{-1}$ con $[B \mid I_4]$. Risultato $\begin{pmatrix} 1 & -1 & 1 & 2 \\ 1 & -1 & 0 & -\frac{1}{2} \end{pmatrix}$.
>
> **Es. 3.1.** Per quali $k$ è invertibile $A_k = \begin{pmatrix} 3 & 2 & -1 \\ 1 & 2 & k \\ 1 & 3k & 2 \end{pmatrix}$? Tipo: rango con parametro. Il terzo pivot è $-\frac{9k^2 + k - 10}{4} = -\frac{(k - 1)(9k + 10)}{4}$: **invertibile se e solo se $k \neq 1$ e $k \neq -\frac{10}{9}$**. Diversamente dall'esercizio del 6/10, il parametro compare in un pivot di secondo grado: va fattorizzato.
>
> **Es. 3.3.** Per quali $k$ le soluzioni di $A_k\vec{x} = (k, 0, k)$ sono chiuse per somma e prodotto per scalare? Solo $k = 0$, quando il sistema è omogeneo: è in [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/).
>
> **Es. 6.** Dimostrare che $\begin{cases} 4x + 4y + 2z = 4 \\ x - z = -1 \\ x + 3y - z = 3 \end{cases}$ ha un'unica soluzione e trovarla invertendo $A$. Tipo: Rouché-Capelli più inversa. "Unica soluzione" vuol dire $\operatorname{rg}(A) = 3$, cioè $A$ invertibile; la riduzione di $[A \mid I_3]$ fa le due cose insieme. $\vec{x} = A^{-1}\vec{b} = \left(-\frac{5}{9}, \frac{4}{3}, \frac{4}{9}\right)$.

## Esercizi tipo esame

Gli esercizi vanno dal più facile al livello del 30. Prima di aprire la soluzione, prova a scrivere da solo la prima riga: che tipo di esercizio è e con che metodo lo imposti.

**Esercizio 1** (facile). Sia $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$.

- a) Dire se $A$ è invertibile e, se lo è, calcolare $A^{-1}$.
- b) Risolvere il sistema $\begin{cases} 2x + y = 1 \\ 5x + 3y = -1 \end{cases}$ usando $A^{-1}$.

> [!tip]- Indizio
> Il primo pivot è $2$: o si accettano le frazioni, o si divide subito la prima riga. Alla fine moltiplica $A$ per quello che hai trovato.

> [!example]- Soluzione
> **Come lo riconosco.** "Invertibile e calcolare l'inversa": $[A \mid I_2]$ con Gauss-Jordan fa le due cose insieme, perché i pivot del blocco sinistro dicono il rango e il blocco destro diventa $A^{-1}$. Il b) ha la stessa matrice, quindi si riusa l'inversa.
>
> **a)**
> $$
> [A \mid I_2] = \left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 5 & 3 & 0 & 1 \end{array}\right]
> $$
> $E_{21}(-\frac{5}{2})$: $R_2 - \frac{5}{2}R_1 = \left(5 - 5,\ 3 - \frac{5}{2} \mid 0 - \frac{5}{2},\ 1 - 0\right) = \left(0, \frac{1}{2} \mid -\frac{5}{2}, 1\right)$.
> $$
> \left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 0 & \frac{1}{2} & -\frac{5}{2} & 1 \end{array}\right]
> $$
> Due pivot a sinistra ($2$ e $\frac{1}{2}$): $\operatorname{rg}(A) = 2$, $A$ è invertibile per il teorema ★★★.
>
> $D_1(\frac{1}{2})$: $R_1 = \left(1, \frac{1}{2} \mid \frac{1}{2}, 0\right)$. $D_2(2)$: $R_2 = (0, 1 \mid -5, 2)$.
>
> $E_{12}(-\frac{1}{2})$: $R_1 - \frac{1}{2}R_2 = \left(1,\ \frac{1}{2} - \frac{1}{2} \mid \frac{1}{2} + \frac{5}{2},\ 0 - 1\right) = (1, 0 \mid 3, -1)$.
> $$
> \left[\begin{array}{cc|cc} 1 & 0 & 3 & -1 \\ 0 & 1 & -5 & 2 \end{array}\right] \qquad A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}
> $$
> **Controllo** $AA^{-1}$: riga $(2, 1)$ per le colonne $(3, -5)$ e $(-1, 2)$ dà $6 - 5 = 1$ e $-2 + 2 = 0$; riga $(5, 3)$ dà $15 - 15 = 0$ e $-5 + 6 = 1$. È $I_2$.
>
> **b)** La matrice del sistema è $A$ e $\vec{b} = (1, -1)$. $A$ è invertibile, quindi l'unica soluzione è
> $$
> \vec{x} = A^{-1}\vec{b} = \begin{pmatrix} 3 \cdot 1 + (-1)(-1) \\ -5 \cdot 1 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 4 \\ -7 \end{pmatrix}
> $$
> **Controllo** nel sistema: $2 \cdot 4 - 7 = 1$; $\ 5 \cdot 4 + 3 \cdot (-7) = 20 - 21 = -1$.

**Esercizio 2** (pivot nullo in partenza). Calcolare, se esiste, l'inversa di
$$
A = \begin{pmatrix} 0 & 1 & 2 \\ 1 & 0 & 3 \\ 4 & -3 & 8 \end{pmatrix}
$$

> [!tip]- Indizio
> In posizione $(1, 1)$ c'è $0$: prima di tutto uno scambio di righe, fatto anche sul blocco destro.

> [!example]- Soluzione
> **Come lo riconosco.** "Calcolare, se esiste, l'inversa": $[A \mid I_3]$, e il "se esiste" lo decide il numero di pivot strada facendo. Il primo elemento è nullo, quindi il primo passo è $S_{12}$ (si sceglie la riga 2 perché ha un $1$ in colonna 1, comodo come pivot).
>
> $$
> [A \mid I_3] = \left[\begin{array}{ccc|ccc} 0 & 1 & 2 & 1 & 0 & 0 \\ 1 & 0 & 3 & 0 & 1 & 0 \\ 4 & -3 & 8 & 0 & 0 & 1 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|ccc} 1 & 0 & 3 & 0 & 1 & 0 \\ 0 & 1 & 2 & 1 & 0 & 0 \\ 4 & -3 & 8 & 0 & 0 & 1 \end{array}\right]
> $$
> Lo scambio vale anche a destra: le righe di $I_3$ si scambiano con le altre.
>
> $E_{31}(-4)$: $R_3 - 4R_1 = (4 - 4,\ -3 - 0,\ 8 - 12 \mid 0 - 0,\ 0 - 4,\ 1 - 0) = (0, -3, -4 \mid 0, -4, 1)$.
>
> $E_{32}(3)$: $R_3 + 3R_2 = (0,\ -3 + 3,\ -4 + 6 \mid 0 + 3,\ -4 + 0,\ 1 + 0) = (0, 0, 2 \mid 3, -4, 1)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & 0 & 3 & 0 & 1 & 0 \\ 0 & 1 & 2 & 1 & 0 & 0 \\ 0 & 0 & 2 & 3 & -4 & 1 \end{array}\right]
> $$
> Tre pivot a sinistra ($1, 1, 2$): $\operatorname{rg}(A) = 3$, invertibile.
>
> $D_3(\frac{1}{2})$: $R_3 = \left(0, 0, 1 \mid \frac{3}{2}, -2, \frac{1}{2}\right)$.
>
> $E_{13}(-3)$: $R_1 - 3R_3 = \left(1, 0, 0 \mid 0 - \frac{9}{2},\ 1 + 6,\ 0 - \frac{3}{2}\right) = \left(1, 0, 0 \mid -\frac{9}{2}, 7, -\frac{3}{2}\right)$.
>
> $E_{23}(-2)$: $R_2 - 2R_3 = (0, 1, 0 \mid 1 - 3,\ 0 + 4,\ 0 - 1) = (0, 1, 0 \mid -2, 4, -1)$.
> $$
> A^{-1} = \begin{pmatrix} -\frac{9}{2} & 7 & -\frac{3}{2} \\ -2 & 4 & -1 \\ \frac{3}{2} & -2 & \frac{1}{2} \end{pmatrix}
> $$
> **Controllo** con interi: $2A^{-1} = \begin{pmatrix} -9 & 14 & -3 \\ -4 & 8 & -2 \\ 3 & -4 & 1 \end{pmatrix}$ e deve venire $A \cdot 2A^{-1} = 2I_3$. Colonne di $2A^{-1}$: $(-9, -4, 3)$, $(14, 8, -4)$, $(-3, -2, 1)$.
> - riga $(0, 1, 2)$: $0 - 4 + 6 = 2$; $\ 0 + 8 - 8 = 0$; $\ 0 - 2 + 2 = 0$
> - riga $(1, 0, 3)$: $-9 + 0 + 9 = 0$; $\ 14 + 0 - 12 = 2$; $\ -3 + 0 + 3 = 0$
> - riga $(4, -3, 8)$: $-36 + 12 + 24 = 0$; $\ 56 - 24 - 32 = 0$; $\ -12 + 6 + 8 = 2$
>
> È $2I_3$.

**Esercizio 3** (equazione matriciale). Siano
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{pmatrix}
$$
Trovare la matrice $X$ tale che $AX = B$. Si può risolvere anche $XA = B$?

> [!example]- Soluzione
> **Come lo riconosco.** L'incognita è una matrice e $A$ è quadrata: se $A$ è invertibile, $AX = B$ si risolve moltiplicando a sinistra per $A^{-1}$, come $ax = b$ si risolve dividendo per $a$. Prima l'inversa, poi un prodotto, poi il controllo $AX = B$.
>
> **Inversa di $A$.**
> $$
> \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 3 & 5 & 0 & 1 \end{array}\right] \xrightarrow{E_{21}(-3)} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & -1 & -3 & 1 \end{array}\right] \xrightarrow{D_2(-1)} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 1 & 3 & -1 \end{array}\right] \xrightarrow{E_{12}(-2)} \left[\begin{array}{cc|cc} 1 & 0 & -5 & 2 \\ 0 & 1 & 3 & -1 \end{array}\right]
> $$
> $A^{-1} = \begin{pmatrix} -5 & 2 \\ 3 & -1 \end{pmatrix}$ (è l'esempio 40 della <span class="src">dispensa</span>).
>
> **$AX = B$.** $X$ deve essere $2 \times 3$. Moltiplico **a sinistra** per $A^{-1}$ entrambi i membri: $A^{-1}AX = A^{-1}B$, cioè $X = A^{-1}B$.
> - riga $(-5, 2)$ per le colonne $(1, 0)$, $(0, 1)$, $(2, 1)$: $-5$; $\ 2$; $\ -10 + 2 = -8$
> - riga $(3, -1)$: $3$; $\ -1$; $\ 6 - 1 = 5$
>
> $$
> X = \begin{pmatrix} -5 & 2 & -8 \\ 3 & -1 & 5 \end{pmatrix}
> $$
> Verifica $AX$: riga $(1, 2)$ dà $-5 + 6 = 1$, $2 - 2 = 0$, $-8 + 10 = 2$; riga $(3, 5)$ dà $-15 + 15 = 0$, $6 - 5 = 1$, $-24 + 25 = 1$. È $B$.
>
> **$XA = B$** non ha soluzione: $X$ dovrebbe essere $p \times 2$ e $XA$ sarebbe $p \times 2$, mai $2 \times 3$ come $B$. Anche formalmente “$X = BA^{-1}$" non esiste, perché $B$ ($2 \times 3$) non è conformabile a sinistra ad $A^{-1}$ ($2 \times 2$). L'inversa si mette dalla parte dove sta $A$.

**Esercizio 4** (equazione con l'incognita a sinistra). Con la stessa $A = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}$ dell'esercizio 3 e
$$
C = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 2 & 1 \end{pmatrix}
$$
trovare la matrice $X$ tale che $XA = C$. Si può risolvere anche $AX = C$?

> [!tip]- Indizio
> Qui $A$ sta a destra di $X$: l'inversa va moltiplicata a destra, su tutti e due i membri.

> [!example]- Soluzione
> **Come lo riconosco.** Equazione matriciale con $A$ invertibile: si "porta via" $A$ moltiplicando per $A^{-1}$ **dalla stessa parte** in cui sta $A$. Qui $A$ è a destra, quindi $X = CA^{-1}$. Prima gli ordini: $XA$ è $p \times 2$ se $X$ è $p \times 2$, e deve essere $3 \times 2$ come $C$: $X$ è $3 \times 2$.
>
> **$XA = C$.** Moltiplico a destra per $A^{-1}$: $XAA^{-1} = CA^{-1}$, e $AA^{-1} = I_2$, quindi $X = CA^{-1}$. Dall'esercizio 3, $A^{-1} = \begin{pmatrix} -5 & 2 \\ 3 & -1 \end{pmatrix}$. Righe di $C$ per le colonne $(-5, 3)$ e $(2, -1)$ di $A^{-1}$:
> - riga $(1, 0)$: $-5$; $\ 2$
> - riga $(0, 1)$: $3$; $\ -1$
> - riga $(2, 1)$: $-10 + 3 = -7$; $\ 4 - 1 = 3$
>
> $$
> X = \begin{pmatrix} -5 & 2 \\ 3 & -1 \\ -7 & 3 \end{pmatrix}
> $$
> **Controllo** $XA$, colonne di $A$: $(1, 3)$ e $(2, 5)$.
> - riga $(-5, 2)$: $-5 + 6 = 1$; $\ -10 + 10 = 0$
> - riga $(3, -1)$: $3 - 3 = 0$; $\ 6 - 5 = 1$
> - riga $(-7, 3)$: $-7 + 9 = 2$; $\ -14 + 15 = 1$
>
> È $C$.
>
> **$AX = C$** non ha soluzione: $AX$ ha $2$ righe (quante ne ha $A$), $C$ ne ha $3$. Anche la formula “$X = A^{-1}C$" non ha senso: $A^{-1}$ è $2 \times 2$ e $C$ ha $3$ righe, non è conformabile.

**Esercizio 5** (parametro, inversa, sistema non invertibile). Sia
$$
A(k) = \begin{pmatrix} 1 & -1 & 1 \\ 1 & k & 1 \\ k & 0 & 1 \end{pmatrix}, \qquad k \in \mathbb{R}
$$

- a) Per quali $k$ la matrice $A(k)$ è invertibile?
- b) Calcolare $A(0)^{-1}$.
- c) Per $k = 1$, il sistema $A(1)\vec{x} = (1, 1, 1)$ è risolubile? Se sì, trovare le soluzioni.

> [!example]- Soluzione
> **Come lo riconosco.** Tre domande in fila sulla stessa $A(k)$, è lo schema del 3.8-3.10 del foglio 3. a) è rango con parametro (teorema ★★★); b) è $[A \mid I_3]$ su un valore non critico; c) cade su un valore critico, dove l'inversa non esiste: Rouché-Capelli.
>
> **a)** $E_{21}(-1)$: $R_2 - R_1 = (0, k + 1, 0)$. $E_{31}(-k)$: $R_3 - kR_1 = (0, k, 1 - k)$ (per $k = 0$ il passo non serve, la riga è già $(0, 0, 1)$).
> $$
> \begin{pmatrix} 1 & -1 & 1 \\ 0 & k + 1 & 0 \\ 0 & k & 1 - k \end{pmatrix}
> $$
> - $k = -1$: la seconda riga è nulla e la terza è $(0, -1, 2)$. Con $S_{23}$ si hanno due pivot: $\operatorname{rg} = 2$, **non invertibile**.
> - $k \neq -1$: il pivot $k + 1 \neq 0$ e si può usare $E_{32}\!\left(-\frac{k}{k+1}\right)$, che azzera il $k$ sotto e lascia $1 - k$ in colonna 3 (la seconda riga ha $0$ in colonna 3; per $k = 0$ il passo non serve). Pivot $1$, $k + 1$, $1 - k$: rango $3$ se e solo se anche $k \neq 1$.
>
> **$A(k)$ è invertibile se e solo se $k \neq 1$ e $k \neq -1$.**
>
> Controllo a occhio sui valori critici: per $k = -1$ le prime due righe sono uguali, $(1, -1, 1)$; per $k = 1$ vale $R_1 + R_2 = (2, 0, 2) = 2R_3$. In tutti e due i casi una riga è combinazione delle altre.
>
> **b)** $A(0) = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix}$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & -1 & 1 & 1 & 0 & 0 \\ 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array}\right] \xrightarrow{E_{21}(-1)} \left[\begin{array}{ccc|ccc} 1 & -1 & 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & -1 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array}\right]
> $$
> $E_{13}(-1)$: $R_1 - R_3 = (1, -1, 0 \mid 1, 0, -1)$. $E_{12}(1)$: $R_1 + R_2 = (1, 0, 0 \mid 0, 1, -1)$.
> $$
> A(0)^{-1} = \begin{pmatrix} 0 & 1 & -1 \\ -1 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
> $$
> Verifica $A(0)A(0)^{-1}$: riga $(1, -1, 1)$ dà $0 + 1 + 0 = 1$, $1 - 1 + 0 = 0$, $-1 + 0 + 1 = 0$; riga $(1, 0, 1)$ dà $0$, $1$, $-1 + 1 = 0$; riga $(0, 0, 1)$ dà $0, 0, 1$. È $I_3$.
>
> **c)** $A(1)$ non è invertibile, quindi $\vec{x} = A^{-1}\vec{b}$ non si può usare: si torna a Rouché-Capelli.
> $$
> \left[\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \end{array}\right] \xrightarrow[E_{31}(-1)]{E_{21}(-1)} \left[\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 2 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{array}\right] \xrightarrow{E_{32}(-\frac{1}{2})} \left[\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right]
> $$
> $\operatorname{rg}(A(1)) = \operatorname{rg}([A(1) \mid \vec{b}]) = 2 < 3$: **risolubile, con infinite soluzioni**. $y = 0$, $x = 1 - z$:
> $$
> \vec{x} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}, \qquad t \in \mathbb{R}
> $$
> Verifica con $t = 1$, cioè $(0, 0, 1)$: $1 = 1$ su tutte e tre le righe. Una $A$ non invertibile non vuol dire "sistema impossibile": dipende da $\vec{b}$.

**Esercizio 6** (parametro, inversa e sistemi). Sia
$$
A_k = \begin{pmatrix} 1 & 1 & k \\ 1 & k & 1 \\ k & 1 & 1 \end{pmatrix}, \qquad k \in \mathbb{R}
$$

- a) Determinare per quali $k$ la matrice $A_k$ è invertibile.
- b) Calcolare $A_0^{-1}$.
- c) Risolvere $A_0\vec{x} = \vec{b}_1$ e $A_0\vec{x} = \vec{b}_2$, con $\vec{b}_1 = (2, 2, 2)$ e $\vec{b}_2 = (1, 0, 0)$.
- d) Per $k = 1$ e per $k = -2$, il sistema $A_k\vec{x} = (1, 1, 1)$ è risolubile? Se sì, quante soluzioni ha?

> [!tip]- Indizio
> Nel passo che azzera la terza riga si può scegliere un'operazione che non divide per nessuna espressione in $k$. Il pivot che resta è un polinomio di secondo grado: va fattorizzato.

> [!example]- Soluzione
> **Come lo riconosco.** "Per quali $k$ è invertibile" è rango con parametro (teorema ★★★): riduco tenendo $k$, trovo dove si annullano i pivot. Nel c) ci sono due sistemi con la stessa matrice: è il caso in cui conviene l'inversa, che si calcola una volta sola. Il d) cade sui valori critici, dove l'inversa non c'è: Rouché-Capelli.
>
> **a)** Pivot $1$ in alto a sinistra, senza parametro.
> - $E_{21}(-1)$: $R_2 - R_1 = (1 - 1,\ k - 1,\ 1 - k) = (0, k - 1, 1 - k)$
> - $E_{31}(-k)$: $R_3 - kR_1 = (k - k,\ 1 - k,\ 1 - k^2) = (0, 1 - k, 1 - k^2)$
>
> In colonna 2 sotto il $k - 1$ c'è $1 - k = -(k - 1)$: basta **sommare** le righe, $E_{32}(1)$, senza dividere per $k - 1$.
> - $E_{32}(1)$: $R_3 + R_2 = \left(0,\ (1 - k) + (k - 1),\ (1 - k^2) + (1 - k)\right) = (0, 0, 2 - k - k^2)$
>
> $2 - k - k^2 = -(k^2 + k - 2) = -(k - 1)(k + 2)$ (controllo: $(k - 1)(k + 2) = k^2 + 2k - k - 2 = k^2 + k - 2$).
> $$
> A_k \to \begin{pmatrix} 1 & 1 & k \\ 0 & k - 1 & 1 - k \\ 0 & 0 & -(k - 1)(k + 2) \end{pmatrix}
> $$
> Le operazioni usate valgono per **ogni** $k$, perché nessuna divide per un'espressione in $k$.
> - $k \neq 1$ e $k \neq -2$: pivot $1$, $k - 1$, $-(k - 1)(k + 2)$, tutti non nulli. $\operatorname{rg} = 3$.
> - $k = 1$: la matrice ridotta è $\begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$. $\operatorname{rg} = 1$ (e infatti $A_1$ ha le tre righe uguali).
> - $k = -2$: $\begin{pmatrix} 1 & 1 & -2 \\ 0 & -3 & 3 \\ 0 & 0 & 0 \end{pmatrix}$. $\operatorname{rg} = 2$.
>
> **$A_k$ è invertibile se e solo se $k \neq 1$ e $k \neq -2$.**
>
> **b)** $k = 0$ non è critico. Le stesse operazioni con $k = 0$ ($E_{31}(0)$ non fa niente):
> $$
> [A_0 \mid I_3] = \left[\begin{array}{ccc|ccc} 1 & 1 & 0 & 1 & 0 & 0 \\ 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \end{array}\right]
> $$
> - $E_{21}(-1)$: $R_2 - R_1 = (0, -1, 1 \mid -1, 1, 0)$
> - $E_{32}(1)$: $R_3 + R_2 = (0, 0, 2 \mid -1, 1, 1)$
>
> $$
> \left[\begin{array}{ccc|ccc} 1 & 1 & 0 & 1 & 0 & 0 \\ 0 & -1 & 1 & -1 & 1 & 0 \\ 0 & 0 & 2 & -1 & 1 & 1 \end{array}\right]
> $$
> - $D_2(-1)$: $R_2 = (0, 1, -1 \mid 1, -1, 0)$
> - $D_3(\frac{1}{2})$: $R_3 = \left(0, 0, 1 \mid -\frac{1}{2}, \frac{1}{2}, \frac{1}{2}\right)$
> - $E_{23}(1)$: $R_2 + R_3 = \left(0, 1, 0 \mid \frac{1}{2}, -\frac{1}{2}, \frac{1}{2}\right)$
> - $E_{12}(-1)$: $R_1 - R_2 = \left(1, 0, 0 \mid 1 - \frac{1}{2},\ 0 + \frac{1}{2},\ 0 - \frac{1}{2}\right) = \left(1, 0, 0 \mid \frac{1}{2}, \frac{1}{2}, -\frac{1}{2}\right)$
>
> $$
> A_0^{-1} = \frac{1}{2}\begin{pmatrix} 1 & 1 & -1 \\ 1 & -1 & 1 \\ -1 & 1 & 1 \end{pmatrix}
> $$
> **Controllo** $A_0 \cdot 2A_0^{-1} = 2I_3$, colonne $(1, 1, -1)$, $(1, -1, 1)$, $(-1, 1, 1)$:
> - riga $(1, 1, 0)$: $1 + 1 = 2$; $\ 1 - 1 = 0$; $\ -1 + 1 = 0$
> - riga $(1, 0, 1)$: $1 - 1 = 0$; $\ 1 + 1 = 2$; $\ -1 + 1 = 0$
> - riga $(0, 1, 1)$: $1 - 1 = 0$; $\ -1 + 1 = 0$; $\ 1 + 1 = 2$
>
> **c)** $\vec{x} = A_0^{-1}\vec{b}$ per tutti e due.
> - $\vec{b}_1 = (2, 2, 2)$: $\frac{1}{2}(2 + 2 - 2,\ 2 - 2 + 2,\ -2 + 2 + 2) = (1, 1, 1)$. Controllo: $1 + 1 + 0 = 2$, $1 + 0 + 1 = 2$, $0 + 1 + 1 = 2$.
> - $\vec{b}_2 = (1, 0, 0)$: $\frac{1}{2}(1, 1, -1) = \left(\frac{1}{2}, \frac{1}{2}, -\frac{1}{2}\right)$, la prima colonna di $A_0^{-1}$. Controllo: $\frac{1}{2} + \frac{1}{2} = 1$, $\frac{1}{2} - \frac{1}{2} = 0$, $\frac{1}{2} - \frac{1}{2} = 0$.
>
> **d)** Si rifanno le operazioni del punto a) su $[A_k \mid \vec{b}]$ con $\vec{b} = (1, 1, 1)$. L'ultima colonna:
> - $E_{21}(-1)$: $1 - 1 = 0$
> - $E_{31}(-k)$: $1 - k$
> - $E_{32}(1)$: $(1 - k) + 0 = 1 - k$
>
> **$k = 1$**: $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right]$. $\operatorname{rg}(A_1) = \operatorname{rg}([A_1 \mid \vec{b}]) = 1 < 3$: **risolubile, con infinite soluzioni**, due parametri liberi: $x = 1 - s - t$, $y = s$, $z = t$. Controllo con $s = t = 0$: $(1, 0, 0)$ dà $1 + 0 + 0 = 1$ in tutte e tre le righe.
>
> **$k = -2$**: $\left[\begin{array}{ccc|c} 1 & 1 & -2 & 1 \\ 0 & -3 & 3 & 0 \\ 0 & 0 & 0 & 3 \end{array}\right]$. L'ultima riga dice $0 = 3$: $\operatorname{rg}(A_{-2}) = 2 \neq 3 = \operatorname{rg}([A_{-2} \mid \vec{b}])$, **impossibile**. Controllo a occhio: le tre righe di $A_{-2}$ sommano a $(1 + 1 - 2,\ 1 - 2 + 1,\ -2 + 1 + 1) = (0, 0, 0)$, quindi sommando le tre equazioni viene $0 = 1 + 1 + 1 = 3$.
>
> Le due $A$ non invertibili danno due esiti opposti con lo stesso $\vec{b}$: senza inversa, decide Rouché-Capelli.

**Esercizio 7** (★, teoria).

- a) Enunciare e dimostrare il teorema che lega invertibilità e rango di una matrice quadrata.
- b) Senza calcolare inverse, dire se $M = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 1 \end{pmatrix}$ è invertibile.
- c) Sia $A \in M_3(\mathbb{R})$ invertibile. Quante soluzioni ha $A\vec{x} = \vec{0}$? Quanto vale $\operatorname{null}(A)$?

> [!example]- Soluzione
> **Come lo riconosco.** Domanda di teoria del tipo 3.2-3.4 del foglio 3, seguita da due applicazioni: b) si fa col teorema appena enunciato (rango, non inversa), c) con la formula $\vec{x} = A^{-1}\vec{b}$ e il teorema nullità più rango.
>
> **a)** Enunciato e dimostrazione sono nel teorema ★★★ sopra. All'esame vanno scritti gli ingredienti ($\operatorname{rref}(A) = PA$ con $P$ invertibile, osservazioni 1 e 2) e poi le due frecce. Il passo che si perde più spesso è l'ultimo: da $PA = I_n$ si ricava $A = P^{-1}$ e solo allora anche $AP = I_n$.
>
> **b)** $E_{21}(-2)$: $R_2 - 2R_1 = (0, 0, 0)$. Poi $S_{23}$:
> $$
> \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> $\operatorname{rg}(M) = 2 < 3$, **non invertibile**. Controllo a occhio: la seconda riga è il doppio della prima.
>
> **c)** $\vec{x} = A^{-1}\vec{0} = \vec{0}$: **solo la soluzione nulla**. Quindi $N(A) = \{\vec{0}\}$ e $\operatorname{null}(A) = 0$, coerente con $\operatorname{null}(A) + \operatorname{rg}(A) = 0 + 3 = 3$.

**Esercizio 8** (vero o falso, con motivazione). Siano $A, B, C \in M_n(\mathbb{R})$. Per ogni affermazione dire se è vera o falsa: se vera, dare il motivo; se falsa, un controesempio.

- a) Se $A$ e $B$ sono invertibili, allora $A + B$ è invertibile.
- b) Se $A \in M_3(\mathbb{R})$ ha due righe uguali, allora $A$ non è invertibile.
- c) Se $A$ è invertibile e $AB = AC$, allora $B = C$.
- d) Se $AB = AC$ e $A \neq O_n$, allora $B = C$.
- e) Se $A^2 = O_n$, allora $A$ non è invertibile.

> [!tip]- Indizio
> Per le vere basta la definizione di inversa più l'associativa, o il teorema ★★★. Per le false, cerca fra le $2 \times 2$ con tanti zeri.

> [!example]- Soluzione
> **Come lo riconosco.** Domande di teoria brevi: per dire "vero" serve un ragionamento che valga per tutte le matrici, per dire "falso" basta **una** matrice con i numeri. Gli strumenti sono la definizione $AA^{-1} = A^{-1}A = I_n$, l'associativa, il rango.
>
> **a) Falso.** $A = I_2$, $B = -I_2$: entrambe invertibili ($I_2^{-1} = I_2$, $(-I_2)^{-1} = -I_2$ perché $(-I_2)(-I_2) = I_2$). $A + B = O_2$ ha righe nulle: non invertibile (osservazione 1).
>
> **b) Vero.** Se $R_i = R_j$, l'operazione $E_{ij}(-1)$ ($R_i - R_j$) produce una riga nulla. Riducendo il resto, la forma a scalini ha al più $2$ pivot, quindi $\operatorname{rg}(A) \leq 2 < 3$ e per il teorema ★★★ $A$ non è invertibile.
>
> **c) Vero.** Moltiplico $AB = AC$ a sinistra per $A^{-1}$:
> $$
> A^{-1}(AB) = A^{-1}(AC) \implies (A^{-1}A)B = (A^{-1}A)C \implies I_nB = I_nC \implies B = C
> $$
> (stessa operazione sui due membri, poi associativa, poi definizione di inversa).
>
> **d) Falso.** Senza invertibilità non si "semplifica". $A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ (la matrice della prof a p. 15), $B = I_2$, $C = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$. $AB = A$. $AC$: riga $(1, 1)$ per le colonne $(0, 1)$ e $(0, 1)$ dà $1$ e $1$; riga $(0, 0)$ dà zeri. $AC = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} = AB$, ma $B \neq C$.
>
> **e) Vero.** Per assurdo sia $A$ invertibile. Moltiplico $A^2 = O_n$ a sinistra per $A^{-1}$: $A^{-1}(AA) = A^{-1}O_n$, cioè $(A^{-1}A)A = O_n$, cioè $A = O_n$. Ma $O_n$ non è invertibile (righe nulle): contraddizione. Esempio che rende l'ipotesi non vuota: $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, colonne $(0, 0)$ e $(1, 0)$. $N^2$: riga $(0, 1)$ per le colonne dà $0 + 0 = 0$ e $0 + 0 = 0$; riga $(0, 0)$ dà zeri. $N^2 = O_2$ con $N \neq O_2$.
>
> **Controllo** di coerenza col teorema ★★★: le matrici dei controesempi a), d), e) che dovevano essere non invertibili ($O_2$, $\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, $N$) hanno tutte rango minore di $2$.

**Esercizio 9** (livello del 30). Sia $A \in M_n(\mathbb{R})$ con $A^2 = A$.

- a) Dimostrare che se $A$ è invertibile, allora $A = I_n$.
- b) Trovare una $A \in M_2(\mathbb{R})$ con $A^2 = A$, diversa da $O_2$ e da $I_2$, e dire se è invertibile.
- c) Sia $A$ come in b). Dimostrare che $I_2 - A$ soddisfa anch'essa $(I_2 - A)^2 = I_2 - A$.

> [!example]- Soluzione
> **Come lo riconosco.** Teoria con la sola definizione di inversa. Il trucco è moltiplicare per $A^{-1}$ **dalla parte giusta**, e solo dopo aver supposto che esista.
>
> **a)** $A$ invertibile: esiste $A^{-1}$ con $A^{-1}A = I_n$. Moltiplico $A^2 = A$ a sinistra per $A^{-1}$:
> $$
> A^{-1}(AA) = A^{-1}A \qquad \text{stessa operazione sui due membri}
> $$
> $$
> (A^{-1}A)A = I_n \qquad \text{associativa a sinistra, definizione di inversa a destra}
> $$
> $$
> I_nA = I_n \implies A = I_n \qquad \text{identità}
> $$
> $\square$
>
> **b)** $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. $A^2$: riga $(1, 0)$ per le colonne $(1, 0)$ e $(0, 0)$ dà $1$ e $0$; riga $(0, 0)$ dà zeri. $A^2 = A$. **Non è invertibile**: ha una riga nulla (osservazione 1), e infatti se lo fosse, per a), sarebbe $I_2$. Il punto a) dice proprio questo: le matrici con $A^2 = A$ diverse da $I_n$ non sono mai invertibili.
>
> **c)** Per una $A$ qualunque con $A^2 = A$, con la distributiva:
> $$
> (I_n - A)^2 = (I_n - A)(I_n - A) = I_n - A - A + A^2 = I_n - 2A + A = I_n - A
> $$
> Con l'esempio di b): $I_2 - A = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$, e il suo quadrato è di nuovo $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$.
>
> **Controllo** di b) e c) insieme: $A + (I_2 - A) = I_2$ e $A(I_2 - A) = A - A^2 = O_2$. Con i numeri, $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = O_2$: riga $(1, 0)$ per le colonne $(0, 0)$ e $(0, 1)$ dà $0$ e $0$.

## Errori tipici

- Dimenticare metà della definizione: l'inversa deve dare $AB = I_n$ **e** $BA = I_n$. Nella dimostrazione del teorema è il passo da $PA = I_n$ ad $A^{-1} = P$, che richiede $A = P^{-1}$.
- Scrivere $(AB)^{-1} = A^{-1}B^{-1}$: l'ordine si rovescia, $B^{-1}A^{-1}$.
- Fare le operazioni solo sul blocco sinistro di $[A \mid I_n]$: il destro diventa $A^{-1}$ solo se subisce le stesse operazioni.
- Sbagliare un segno nella riduzione all'indietro e non accorgersene: è l'errore del quaderno a p. 65 ($-\frac{2}{3}$ invece di $\frac{2}{3}$). La verifica $AA^{-1} = I$ lo trova in un minuto.
- Concludere "invertibile" con rango $n - 1$, o contare i pivot del blocco destro: conta solo il sinistro, e servono $n$ pivot.
- Dividere per un pivot con il parametro prima di aver escluso i valori che lo annullano. Nel quaderno degli esercizi, al 3.10 del foglio 3, $E_{32}(\frac{1}{k})$ divide per $k$ senza aver escluso $k = 0$; bastava non scambiare le righe e usare come pivot l'$1$ della riga $(0, 1, k - 4)$.
- Dichiarare la verifica senza farla. Al 3.8 (quaderno degli esercizi) l'elemento $(1, 3)$ di $A^{-1}$ è $-\frac{1}{4}$ invece di $-\frac{5}{4}$, e sotto c'è scritto “$4AA^{-1} = 4I_3$"; il prodotto vero, riga $(1, -1, 3)$ per la colonna $(-1, 1, 2)$, dà $4$ e non $0$.
- Dare a una $3 \times 3$ rango $4$ (quaderno, 3.10): il rango non supera mai il numero di righe né quello di colonne. Per una $n \times n$, "invertibile" vuol dire rango $n$.
- Calcolare l'inversa partendo dalla matrice già ridotta con $I$ affiancata in quel momento (quaderno, 3.10): il blocco destro parte da $I_n$ accanto ad $A$ **originale** e subisce tutte le operazioni, comprese quelle già fatte.
- Scrivere le condizioni sul parametro con $\cup$: “$k \neq 1 \cup k \neq -\frac{10}{9}$" (quaderno, esercitazione del 12/10). Devono valere insieme: $k \neq 1$ **e** $k \neq -\frac{10}{9}$.
- Mettere $A^{-1}$ dalla parte sbagliata: da $AX = B$ viene $X = A^{-1}B$, non $BA^{-1}$.
- Parlare di inversa di una matrice non quadrata.
- Moltiplicare la matrice elementare a destra: $AS_{12}$ scambia le **colonne** di $A$, non le righe. Le operazioni di Gauss-Jordan sono moltiplicazioni a sinistra.
- Scegliere l'ordine sbagliato delle matrici elementari in $P$: se le operazioni sono $M_1$, poi $M_2$, poi $M_3$, allora $P = M_3M_2M_1$, con l'ultima a sinistra.
- Fare uno scambio di righe solo sul blocco sinistro di $[A \mid I_n]$ (esercizio 2): lo scambio, come ogni operazione, va sulla riga intera.
- "Semplificare" $AB = AC$ in $B = C$ senza sapere che $A$ è invertibile: con $A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ è falso (esercizio 8d).
- Dedurre "invertibile" dal fatto che nessuna riga è nulla: $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ non ha zeri e non è invertibile. L'osservazione 1 serve solo per dire "no".
- Credere che la somma di invertibili sia invertibile: $I_n + (-I_n) = O_n$.
- Credere che $A$ non invertibile renda $A\vec{x} = \vec{b}$ impossibile: può avere infinite soluzioni (esercizi 5c e 6d).

## Domande

- Come si costruiscono le matrici $S_{ij}$, $D_i(\lambda)$, $E_{ij}(\mu)$, e cosa fa moltiplicarle a sinistra per $A$?

- Enuncia e dimostra: le matrici delle operazioni elementari sono invertibili, con quali inverse?

- Enuncia e dimostra la proposizione $\operatorname{rref}(A) = PA$. Perché $P$ è invertibile?

- Definisci matrice invertibile e inversa. Enuncia e dimostra l'unicità dell'inversa.

- Enuncia e dimostra l'osservazione 1: una matrice quadrata con una riga (o una colonna) di zeri non è invertibile.

- Enuncia e dimostra l'osservazione 2: il prodotto di due invertibili è invertibile, con $(AB)^{-1} = B^{-1}A^{-1}$.

- Enuncia e dimostra il teorema che lega invertibilità e rango (★★★).

- Enuncia e dimostra: $A$ è invertibile se e solo se $\operatorname{rref}([A \mid I_n]) = [I_n \mid P]$, e in tal caso $P = A^{-1}$.

- Enuncia e dimostra: se $A$ è invertibile, $A\vec{x} = \vec{b}$ ha l'unica soluzione $\vec{x} = A^{-1}\vec{b}$ (tutte e due le metà: è soluzione, ed è l'unica).

- Perché la definizione di inversa chiede sia $AB = I_n$ sia $BA = I_n$? Dai un esempio con matrici non quadrate in cui vale solo uno dei due.

- Cosa succede se moltiplichi $A$ a destra per $S_{12}$ invece che a sinistra?

- Nel teorema “$A$ invertibile se e solo se $\operatorname{rg}(A) = n$", a cosa serve l'ipotesi che $A$ sia quadrata? Dai un controesempio senza.

- Una matrice quadrata senza righe né colonne nulle è per forza invertibile? Perché?

- Se $A$ e $B$ sono invertibili, $A + B$ lo è? E $AB$?

- Quando da $AB = AC$ si può concludere $B = C$? Dai un controesempio quando l'ipotesi manca.

- Interpreta nel piano: perché una $A \in M_2(\mathbb{R})$ di rango $1$ non dà mai un sistema $A\vec{x} = \vec{b}$ con una sola soluzione?

- In un esercizio "per quali $k$ è invertibile $A_k$", come si imposta la riduzione e come si trattano i valori di $k$ che annullano un pivot?

- Come si riconosce se un'equazione matriciale va risolta con $X = A^{-1}B$ o con $X = BA^{-1}$?

- Se $A$ non è invertibile, cosa si può dire di $A\vec{x} = \vec{b}$, e con che strumento si decide?

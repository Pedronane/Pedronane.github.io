---
title: Foglio 5 del tutorato svolto
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: completa
data: 2026-10-28
lezioni: []
ordine: 999
---

Il <span class="src">foglio 5</span> del tutorato svolto per intero: sei domande di teoria e gli esercizi 5.7-5.8 a <span class="src">p. 1</span>, gli esercizi 5.9-5.13 a <span class="src">p. 2</span>. Argomento di [Geometria e Algebra Lineare](/uni/gal/), capitolo 5: la teoria sta in [Determinante](/uni/gal/determinante/) (lezioni L9 del 26/10 e L10 del 27/10). Il foglio dà già i risultati di 5.9 e 5.10, e qui tornano. Le domande sono le stesse della <span class="src">dispensa, §5.4.4</span>.

Due cose del foglio non sono state fatte a lezione: la formula di Cramer (5.6) e l'inversa coi cofattori (5.10). Vengono dalla <span class="src">dispensa, p. 115-117</span>, e qui sono svolte con quella.

Come usarla: prova da solo, apri l'**indizio** se ti blocchi, la **soluzione** solo alla fine. Ogni conto è stato ricontrollato.

## Domande di teoria

**Domanda 5.1.** Enunciare il Teorema di Binet, illustrandolo con un esempio. Come può essere utilizzato per trovare la relazione tra il determinante di una matrice invertibile e quello della sua inversa?

> [!example]- Soluzione
> **Teorema di Binet.** Se $A, B \in M_n(\mathbb{R})$, allora $\det(AB) = \det(A)\det(B)$.
>
> **Esempio.** $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$: $\det A = 4 - 6 = -2$, $\det B = 2$. $AB = \begin{pmatrix} 4 & 2 \\ 10 & 4 \end{pmatrix}$, $\det(AB) = 16 - 20 = -4 = (-2) \cdot 2$.
>
> **Inversa.** Se $A$ è invertibile, $AA^{-1} = I_n$, quindi $\det(AA^{-1}) = \det(I_n) = 1$. Per Binet $\det(AA^{-1}) = \det(A)\det(A^{-1})$, quindi
> $$
> \det(A^{-1}) = \frac{1}{\det(A)}.
> $$
> In particolare $\det A \neq 0$.

**Domanda 5.2.** Come cambia il determinante di una matrice quadrata quando si eseguono le operazioni elementari $S_{ij}$, $D_i(\lambda)$ e $E_{ij}(\mu)$?

> [!example]- Soluzione
> - $B = S_{ij}A$ (scambio di due righe): $\det(B) = -\det(A)$.
> - $B = D_i(\lambda)A$ (riga $i$ per $\lambda$): $\det(B) = \lambda\det(A)$.
> - $B = E_{ij}(\mu)A$ (alla riga $i$ si somma $\mu$ volte la riga $j$): $\det(B) = \det(A)$.
>
> Viene da Binet con $\det(S_{ij}) = -1$, $\det(D_i(\lambda)) = \lambda$, $\det(E_{ij}(\mu)) = 1$. Conseguenza: riducendo $A$ a scalini $A'$ con solo $S_{ij}$ ed $E_{ij}(\mu)$, $\det(A) = (-1)^s\det(A')$ con $s$ il numero di scambi, e $\det(A')$ è il prodotto della diagonale.

**Domanda 5.3.** Per una matrice quadrata, qual è la relazione tra determinante, rango e invertibilità?

> [!example]- Soluzione
> Per $A \in M_n(\mathbb{R})$ sono equivalenti: (1) $\det(A) \neq 0$; (2) $\operatorname{rg}(A) = n$; (3) $A$ è invertibile.
>
> Perché (1) $\iff$ (2): le operazioni elementari moltiplicano il determinante per una costante non nulla, quindi $\det A \neq 0 \iff \det A' \neq 0$ per una forma a scalini $A'$; $A'$ è triangolare superiore e $\det A'$ è il prodotto della diagonale, non nullo se e solo se ci sono $n$ pivot, cioè $\operatorname{rg}(A) = n$. (2) $\iff$ (3) è il teorema di [Matrici invertibili](/uni/gal/matrici-invertibili/).
>
> Esempio: $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ ha $\det = 0$, rango $1$, non è invertibile.

**Domanda 5.4.** Si definisca il prodotto vettoriale di due vettori geometrici nello spazio e se ne enuncino le proprietà principali.

> [!example]- Soluzione
> **Definizione.** Dati $\vec{v}, \vec{w} \in V^3$, $\vec{v} \times \vec{w}$ è $\vec{0}$ se $\vec{v}$ e $\vec{w}$ sono paralleli o uno dei due è nullo; altrimenti è il vettore $\vec{u}$ con
> - modulo $\vert\vec{u}\vert = \vert\vec{v}\vert\,\vert\vec{w}\vert\sin\vartheta$, $\vartheta$ angolo fra $\vec{v}$ e $\vec{w}$;
> - direzione ortogonale a $\vec{v}$ e a $\vec{w}$;
> - verso dato dalla regola della mano destra ($\vec{v}$ pollice, $\vec{w}$ indice, $\vec{v} \times \vec{w}$ medio).
>
> **Proprietà**, per ogni $\vec{v}, \vec{w}, \vec{u} \in V^3$ e $\lambda \in \mathbb{R}$:
> - anticommutativa: $\vec{v} \times \vec{w} = -\vec{w} \times \vec{v}$;
> - $(\lambda\vec{v}) \times \vec{w} = \vec{v} \times (\lambda\vec{w}) = \lambda(\vec{v} \times \vec{w})$;
> - distributiva: $(\vec{v} + \vec{w}) \times \vec{u} = \vec{v} \times \vec{u} + \vec{w} \times \vec{u}$ e $\vec{v} \times (\vec{w} + \vec{u}) = \vec{v} \times \vec{w} + \vec{v} \times \vec{u}$;
> - $\vert\vec{v} \times \vec{w}\vert$ è l'area del parallelogramma di lati $\vec{v}, \vec{w}$.
>
> **In coordinate**: $\vec{v} \times \vec{w} = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$, cioè “$\det$" della matrice con righe $\vec{\imath}, \vec{\jmath}, \vec{k}$, $\vec{v}$, $\vec{w}$. Per esempio $\vec{\imath} \times \vec{\jmath} = \vec{k}$, $\vec{\jmath} \times \vec{\imath} = -\vec{k}$.

**Domanda 5.5.** Come si possono utilizzare il prodotto vettoriale ed il prodotto misto per trovare aree e volumi? Illustrare la risposta con esempi.

> [!example]- Soluzione
> - **Area del parallelogramma** di lati $\vec{v}, \vec{w}$: $\vert\vec{v} \times \vec{w}\vert$ (base $\vert\vec{v}\vert$, altezza $\vert\vec{w}\vert\sin\vartheta$). **Triangolo** $ABC$: metà, $\frac12\vert\overrightarrow{AB} \times \overrightarrow{AC}\vert$.
> - **Volume del parallelepipedo** di spigoli $\vec{v}, \vec{w}, \vec{u}$: $\vert\vec{v} \cdot (\vec{w} \times \vec{u})\vert$, e il prodotto misto è il determinante della matrice con righe $\vec{v}, \vec{w}, \vec{u}$. Area della base $\vert\vec{w} \times \vec{u}\vert$ per l'altezza, la componente di $\vec{v}$ lungo la normale.
>
> **Esempio della prof.** $A = (1, 0, 1)$, $B = (3, 1, 1)$, $C = (1, 1, 2)$: $\overrightarrow{AB} \times \overrightarrow{AC} = (2, 1, 0) \times (0, 1, 1) = (1, -2, 2)$, modulo $3$, area $\frac32$.
>
> **Volume**: con $(1, 0, 0)$, $(-3, 1, 1)$, $(-2, 2, 5)$ il prodotto misto vale $3$ (esercizio 5.13), quindi il volume è $3$.

**Domanda 5.6.** Si enunci il Teorema di Cramer e lo si illustri con un esempio.

> [!example]- Soluzione
> **Teorema di Cramer** (la prof, p. 8). Sia $A\vec{x} = \vec{b}$ un sistema lineare quadrato di ordine $n$ ($A \in M_n(\mathbb{R})$). Se $\det(A) \neq 0$, allora $A\vec{x} = \vec{b}$ ammette un'unica soluzione. Segue da Rouché-Capelli: $\det A \neq 0$ dà $\operatorname{rg}(A) = n = \operatorname{rg}(A \mid \vec{b})$, e con $n$ incognite la soluzione è unica.
>
> **La formula** (dispensa, teorema 5.3.1.1): detta $A_j(\vec{b})$ la matrice $A$ con la colonna $j$ sostituita da $\vec{b}$,
> $$
> x_j = \frac{\det A_j(\vec{b})}{\det A}, \qquad j = 1, \ldots, n.
> $$
>
> **Esempio.** $\begin{cases} x + 2y = 5 \\ 3x + 4y = 6 \end{cases}$: $\det A = 4 - 6 = -2 \neq 0$, una sola soluzione.
> $$
> x = \frac{\det\begin{pmatrix} 5 & 2 \\ 6 & 4 \end{pmatrix}}{-2} = \frac{20 - 12}{-2} = -4, \qquad y = \frac{\det\begin{pmatrix} 1 & 5 \\ 3 & 6 \end{pmatrix}}{-2} = \frac{6 - 15}{-2} = \frac92.
> $$
> Verifica: $-4 + 9 = 5$, $-12 + 18 = 6$.
>
> L'esempio 72 della dispensa ha un refuso nella prima equazione: “$x + y + x = 3$" è $x + y + z = 3$.

## Esercizi

### Esercizio 5.7

Calcolare il determinante della matrice
$$
A = \begin{pmatrix} 1 & 0 & 1 \\ k & 1 & 2 \\ 0 & 2 & 1 \end{pmatrix}
$$
e stabilire per quali valori di $k$ essa è invertibile.

> [!tip]- Indizio
> Laplace sulla prima riga, che ha uno zero. Invertibile vuol dire $\det \neq 0$.

> [!example]- Soluzione
> Sviluppo sulla prima riga, segni $+, -, +$:
> $$
> \det A = 1 \cdot \det\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} - 0 + 1 \cdot \det\begin{pmatrix} k & 1 \\ 0 & 2 \end{pmatrix} = (1 - 4) + 2k = 2k - 3.
> $$
> **Invertibile se e solo se $k \neq \frac32$.**
>
> Controllo con la prima colonna: $1 \cdot \det\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} - k\det\begin{pmatrix} 0 & 1 \\ 2 & 1 \end{pmatrix} + 0 = -3 - k(-2) = 2k - 3$.

### Esercizio 5.8

Determinare per quali valori reali di $k$ la matrice
$$
A = \begin{pmatrix} k & k - 1 & k \\ 0 & 2k - 2 & 0 \\ 1 & k - 1 & 2 - k \end{pmatrix}
$$
è invertibile e trovare la matrice inversa per $k = -1$.

> [!tip]- Indizio
> La seconda riga ha un solo elemento non nullo. Per l'inversa, $[A \mid I_3]$ con Gauss-Jordan come in [Matrici invertibili](/uni/gal/matrici-invertibili/).

> [!example]- Soluzione
> **Determinante.** Sviluppo sulla seconda riga: resta solo $(2, 2)$, segno $(-1)^{2+2} = +$.
> $$
> \det A = (2k - 2)\det\begin{pmatrix} k & k \\ 1 & 2 - k \end{pmatrix} = (2k - 2)\big(k(2 - k) - k\big) = 2(k - 1) \cdot k(1 - k) = -2k(k - 1)^2.
> $$
> **Invertibile se e solo se $k \neq 0$ e $k \neq 1$.**
>
> **Inversa per $k = -1$.** $A = \begin{pmatrix} -1 & -2 & -1 \\ 0 & -4 & 0 \\ 1 & -2 & 3 \end{pmatrix}$, $\det A = -2(-1)(-2)^2 = 8$.
> - $E_{31}(1)$: $R_3 = (0, -4, 2 \mid 1, 0, 1)$;
> - $E_{32}(-1)$: $R_3 = (0, 0, 2 \mid 1, -1, 1)$;
> - $D_1(-1)$: $R_1 = (1, 2, 1 \mid -1, 0, 0)$; $D_2(-\frac14)$: $R_2 = (0, 1, 0 \mid 0, -\frac14, 0)$; $D_3(\frac12)$: $R_3 = (0, 0, 1 \mid \frac12, -\frac12, \frac12)$;
> - $E_{13}(-1)$: $R_1 = (1, 2, 0 \mid -\frac32, \frac12, -\frac12)$;
> - $E_{12}(-2)$: $R_1 = (1, 0, 0 \mid -\frac32, 1, -\frac12)$.
>
> $$
> A^{-1} = \begin{pmatrix} -\frac32 & 1 & -\frac12 \\ 0 & -\frac14 & 0 \\ \frac12 & -\frac12 & \frac12 \end{pmatrix}
> $$
> Verifica: prima riga di $A$ per le colonne di $A^{-1}$: $\frac32 + 0 - \frac12 = 1$, $-1 + \frac12 + \frac12 = 0$, $\frac12 + 0 - \frac12 = 0$. Le altre righe danno $(0, 1, 0)$ e $(0, 0, 1)$ allo stesso modo. E $\det A^{-1} = \frac18 = \frac{1}{\det A}$, come dice Binet.

### Esercizio 5.9

Si calcoli il determinante della seguente matrice con il metodo di Gauss (ossia con la riduzione a scalini):
$$
A = \begin{pmatrix} 1 & -1 & 2 & 0 \\ 0 & 1 & 1 & -1 \\ 3 & 1 & 1 & 1 \\ 1 & 0 & 2 & -2 \end{pmatrix}
$$
Risposta del foglio: $14$.

> [!tip]- Indizio
> Solo $S_{ij}$ ed $E_{ij}(\mu)$. Dopo la seconda colonna conviene uno scambio per avere il pivot $-1$ e niente frazioni.

> [!example]- Soluzione
> - $E_{31}(-3)$: $R_3 = (3, 1, 1, 1) - 3(1, -1, 2, 0) = (0, 4, -5, 1)$; $E_{41}(-1)$: $R_4 = (0, 1, 0, -2)$.
> - $E_{32}(-4)$: $R_3 = (0, 4, -5, 1) - 4(0, 1, 1, -1) = (0, 0, -9, 5)$; $E_{42}(-1)$: $R_4 = (0, 0, -1, -1)$.
> - $S_{34}$ (uno scambio): $R_3 = (0, 0, -1, -1)$, $R_4 = (0, 0, -9, 5)$.
> - $E_{43}(-9)$: $R_4 = (0, 0, -9, 5) - 9(0, 0, -1, -1) = (0, 0, 0, 14)$.
>
> $$
> \det A' = 1 \cdot 1 \cdot (-1) \cdot 14 = -14, \qquad \det A = (-1)^1 \cdot (-14) = 14.
> $$
> Torna con la risposta del foglio. La matrice dell'esercizio 18 della dispensa differisce solo nella seconda riga e ha $\det = -14$ ([Determinante (esercizi)](/uni/gal/determinante-esercizi/), E5).

### Esercizio 5.10

Si trovi l'inversa della matrice
$$
A = \begin{pmatrix} -2 & 1 & -3 \\ 3 & 1 & 2 \\ 1 & 0 & 2 \end{pmatrix}
$$
utilizzando il metodo dei cofattori.

> [!tip]- Indizio
> Dispensa, proposizione 19: $A^{-1} = \frac{1}{\det A}(A')^T$, dove $A'$ ha al posto $(i, j)$ il cofattore $a'_{ij} = (-1)^{i+j}\det(A_{ij})$. Attenzione alla trasposta.

> [!example]- Soluzione
> **Il metodo** (non fatto a lezione, <span class="src">dispensa, p. 116</span>): il **cofattore** di $a_{ij}$ è $a'_{ij} = (-1)^{i+j}\det(A_{ij})$, la matrice dei cofattori è $A' = [a'_{ij}]$ e
> $$
> A^{-1} = \frac{1}{\det(A)}(A')^T.
> $$
>
> **Determinante**, sviluppo sulla terza riga $(1, 0, 2)$:
> $$
> \det A = 1 \cdot \det\begin{pmatrix} 1 & -3 \\ 1 & 2 \end{pmatrix} + 2 \cdot \det\begin{pmatrix} -2 & 1 \\ 3 & 1 \end{pmatrix} = (2 + 3) + 2(-2 - 3) = -5.
> $$
>
> **Cofattori**:
> - $a'_{11} = \det\begin{pmatrix} 1 & 2 \\ 0 & 2 \end{pmatrix} = 2$, $\ a'_{12} = -\det\begin{pmatrix} 3 & 2 \\ 1 & 2 \end{pmatrix} = -4$, $\ a'_{13} = \det\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix} = -1$;
> - $a'_{21} = -\det\begin{pmatrix} 1 & -3 \\ 0 & 2 \end{pmatrix} = -2$, $\ a'_{22} = \det\begin{pmatrix} -2 & -3 \\ 1 & 2 \end{pmatrix} = -1$, $\ a'_{23} = -\det\begin{pmatrix} -2 & 1 \\ 1 & 0 \end{pmatrix} = 1$;
> - $a'_{31} = \det\begin{pmatrix} 1 & -3 \\ 1 & 2 \end{pmatrix} = 5$, $\ a'_{32} = -\det\begin{pmatrix} -2 & -3 \\ 3 & 2 \end{pmatrix} = -5$, $\ a'_{33} = \det\begin{pmatrix} -2 & 1 \\ 3 & 1 \end{pmatrix} = -5$.
>
> $$
> A' = \begin{pmatrix} 2 & -4 & -1 \\ -2 & -1 & 1 \\ 5 & -5 & -5 \end{pmatrix}, \qquad (A')^T = \begin{pmatrix} 2 & -2 & 5 \\ -4 & -1 & -5 \\ -1 & 1 & -5 \end{pmatrix}
> $$
> $$
> A^{-1} = -\frac15(A')^T = \begin{pmatrix} -\frac25 & \frac25 & -1 \\ \frac45 & \frac15 & 1 \\ \frac15 & -\frac15 & 1 \end{pmatrix}
> $$
> È la soluzione del foglio. Verifica, prima riga di $A$ per le colonne di $A^{-1}$: $\frac45 + \frac45 - \frac35 = 1$, $-\frac45 + \frac15 + \frac35 = 0$, $2 + 1 - 3 = 0$.
>
> L'esempio 73 della dispensa (inversa $2 \times 2$) ha la matrice trasposta per sbaglio: l'inversa di $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ è $\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, non $\begin{pmatrix} d & -c \\ -b & a \end{pmatrix}$.

### Esercizio 5.11

Determinare un'equazione cartesiana del piano passante per $A = (1, 2, 3)$, $B = (-2, 1, 3)$, $C = (3, 2, -1)$.

> [!tip]- Indizio
> Metodo della prof, p. 14-15: $Q = (x, y, z)$ sta nel piano se e solo se $\det[\overrightarrow{AB} \mid \overrightarrow{AC} \mid \overrightarrow{AQ}] = 0$.

> [!example]- Soluzione
> $\overrightarrow{AB} = (-3, -1, 0)$, $\overrightarrow{AC} = (2, 0, -4)$, $\overrightarrow{AQ} = (x - 1, y - 2, z - 3)$. Non sono paralleli, quindi i punti non sono allineati.
> $$
> \det\begin{pmatrix} -3 & 2 & x - 1 \\ -1 & 0 & y - 2 \\ 0 & -4 & z - 3 \end{pmatrix} = 0
> $$
> Sviluppo sulla seconda colonna (uno zero), segni $-, +, -$:
> $$
> = -2\det\begin{pmatrix} -1 & y - 2 \\ 0 & z - 3 \end{pmatrix} - (-4)\det\begin{pmatrix} -3 & x - 1 \\ -1 & y - 2 \end{pmatrix} = -2\big(-(z - 3)\big) + 4\big(-3(y - 2) + (x - 1)\big)
> $$
> $$
> = 2z - 6 + 4x - 12y + 20 = 4x - 12y + 2z + 14.
> $$
> Diviso per $2$: $\pi : 2x - 6y + z + 7 = 0$.
>
> Verifica: $A$: $2 - 12 + 3 + 7 = 0$; $B$: $-4 - 6 + 3 + 7 = 0$; $C$: $6 - 12 - 1 + 7 = 0$.

### Esercizio 5.12

Calcolare l'area del triangolo di vertici $A = (1, 1, 1)$, $B = (1, 3, 1)$, $C = (-1, 0, 0)$.

> [!tip]- Indizio
> Metà del modulo di $\overrightarrow{AB} \times \overrightarrow{AC}$, come nell'esercizio della prof di p. 11.

> [!example]- Soluzione
> $\overrightarrow{AB} = (0, 2, 0)$, $\overrightarrow{AC} = (-2, -1, -1)$.
> $$
> \overrightarrow{AB} \times \overrightarrow{AC} = \text{"}\det\begin{pmatrix} \vec{\imath} & \vec{\jmath} & \vec{k} \\ 0 & 2 & 0 \\ -2 & -1 & -1 \end{pmatrix}\text{"} = \vec{\imath}(2 \cdot (-1) - 0) - \vec{\jmath}(0 - 0) + \vec{k}(0 + 4) = -2\vec{\imath} + 4\vec{k}
> $$
> $$
> \text{Area} = \frac12\vert(-2, 0, 4)\vert = \frac12\sqrt{4 + 16} = \frac12 \cdot 2\sqrt5 = \sqrt5.
> $$
> Controllo: $(-2, 0, 4) \cdot \overrightarrow{AB} = 0$ e $(-2, 0, 4) \cdot \overrightarrow{AC} = 4 + 0 - 4 = 0$, ortogonale a tutti e due.

### Esercizio 5.13

Calcolare il volume del parallelepipedo di lati $\vec{u} = (1, 0, 0)$, $\vec{v} = (-3, 1, 1)$, $\vec{w} = (-2, 2, 5)$.

> [!tip]- Indizio
> Valore assoluto del prodotto misto, che è un determinante $3 \times 3$.

> [!example]- Soluzione
> $$
> \vec{u} \cdot (\vec{v} \times \vec{w}) = \det\begin{pmatrix} 1 & 0 & 0 \\ -3 & 1 & 1 \\ -2 & 2 & 5 \end{pmatrix} = 1 \cdot \det\begin{pmatrix} 1 & 1 \\ 2 & 5 \end{pmatrix} = 5 - 2 = 3
> $$
> (sviluppo sulla prima riga). **Volume $= \vert 3\vert = 3$.**
>
> Controllo col prodotto vettoriale: $\vec{v} \times \vec{w} = (1 \cdot 5 - 1 \cdot 2,\ 1 \cdot (-2) - (-3) \cdot 5,\ -3 \cdot 2 - 1 \cdot (-2)) = (3, 13, -4)$, e $(1, 0, 0) \cdot (3, 13, -4) = 3$.

## Errori tipici

- Usare $D_i(\lambda)$ nella riduzione per il determinante senza dividere poi per $\lambda$.
- Dimenticare la trasposta nel metodo dei cofattori: $A^{-1} = \frac{1}{\det A}(A')^T$, non $\frac{1}{\det A}A'$.
- Nel prodotto vettoriale in coordinate, sbagliare il segno della componente $\vec{\jmath}$: è $-(v_1w_3 - v_3w_1)$.
- Dimenticare il $\frac12$ nell'area del triangolo o il valore assoluto nel volume.
- Fermarsi a “$\det = -2k(k - 1)^2$" senza dire per quali $k$ la matrice è invertibile: la conclusione va scritta.
- Per il piano per tre punti, non controllare che i punti non siano allineati: con $\overrightarrow{AB} \parallel \overrightarrow{AC}$ il determinante è nullo per ogni $Q$.

## Domande

- Come si ricava da Binet che $\det(A^{-1}) = \frac{1}{\det A}$?

- Come si calcola un determinante con il metodo di Gauss? Quali operazioni si usano e come si tiene il conto del segno?

- Cosa dice il teorema di Cramer? Qual è la formula per $x_j$?

- Come si calcola l'inversa coi cofattori? Dove entra la trasposta?

- Come si trovano col determinante l'area di un triangolo, il volume di un parallelepipedo e il piano per tre punti?

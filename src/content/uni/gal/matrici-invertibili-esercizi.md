---
title: Matrici invertibili (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-06
lezioni: []
ordine: 9
---

Esercizi tipo esame di [Matrici invertibili](/uni/gal/matrici-invertibili/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

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

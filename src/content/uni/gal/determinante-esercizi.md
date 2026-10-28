---
title: Determinante (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-27
lezioni: []
ordine: 16
---

Esercizi tipo esame di [Determinante](/uni/gal/determinante/). Testo in chiaro, soluzione chiusa: prima provaci da solo. I primi quattro sono le verifiche che la prof lascia negli appunti; gli altri vengono dagli esercizi del capitolo 5 della <span class="src">dispensa</span>. Gli esercizi del foglio del tutorato sono in [Foglio 5 svolto](/uni/gal/foglio-5-svolto/).

## Le verifiche lasciate dalla prof

**E1 (p. 5, "verificare").** Verificare che $\det(S_{ij}) = -1$ e $\det(E_{ij}(\mu)) = 1$ con $n = 2$ e con gli esempi della prof $S_{12}$ e $E_{12}(1) \in M_3(\mathbb{R})$.

> [!example]- Soluzione
> - $\det\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = 0 \cdot 0 - 1 \cdot 1 = -1$.
> - $S_{12} \in M_3(\mathbb{R})$ ha righe $(0, 1, 0)$, $(1, 0, 0)$, $(0, 0, 1)$. Sviluppo sulla terza riga: $(-1)^{3+3} \cdot 1 \cdot \det\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$.
> - $E_{12}(1) = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ è triangolare superiore: $\det = 1 \cdot 1 \cdot 1 = 1$. Ogni $E_{ij}(\mu)$ è triangolare (superiore se $i < j$, inferiore se $i > j$) con diagonale di uni, quindi $\det = 1$ sempre; per le inferiori si passa dalla trasposta, $\det(A) = \det(A^T)$.

**E2 (p. 8, esercizio).** $\vec{v}_1 = (1, 1, 3)$, $\vec{v}_2 = (2, 1, 7)$, $\vec{v}_3 = (2, 3, 6 - k) \in \mathbb{R}^3$. Per quali $k \in \mathbb{R}$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è una base di $\mathbb{R}^3$?

> [!example]- Soluzione
> Tre vettori di $\mathbb{R}^3$: per il corollario di p. 7 basta $\det A \neq 0$ con i vettori come colonne. Sviluppo sulla prima riga (è l'esempio 71 della <span class="src">dispensa</span>):
> $$
> \det\begin{pmatrix} 1 & 2 & 2 \\ 1 & 1 & 3 \\ 3 & 7 & 6 - k \end{pmatrix} = 1\det\begin{pmatrix} 1 & 3 \\ 7 & 6 - k \end{pmatrix} - 2\det\begin{pmatrix} 1 & 3 \\ 3 & 6 - k \end{pmatrix} + 2\det\begin{pmatrix} 1 & 1 \\ 3 & 7 \end{pmatrix}
> $$
> $$
> = (6 - k - 21) - 2(6 - k - 9) + 2(7 - 3) = -15 - k + 6 + 2k + 8 = k - 1.
> $$
> **Base se e solo se $k \neq 1$.** Controllo: per $k = 1$, $\vec{v}_3 = (2, 3, 5) = 4\vec{v}_1 - \vec{v}_2$, infatti $(4 - 2,\ 4 - 1,\ 12 - 7) = (2, 3, 5)$.

**E3 (p. 10, esercizio).** Ricavare la formula del prodotto vettoriale in coordinate da $\vec{v} = v_1\vec{\imath} + v_2\vec{\jmath} + v_3\vec{k}$, $\vec{w} = w_1\vec{\imath} + w_2\vec{\jmath} + w_3\vec{k}$, con le proprietà 2-4 e la tabella dei versori.

> [!example]- Soluzione
> Per la distributività (3, 4) e la (2) il prodotto si sviluppa termine per termine, nove prodotti $v_aw_b(\vec{e}_a \times \vec{e}_b)$. Quelli con lo stesso versore danno $\vec{0}$; gli altri sei, dalla tabella:
> - $v_1w_2\,\vec{\imath} \times \vec{\jmath} = v_1w_2\vec{k}$, $\quad v_2w_1\,\vec{\jmath} \times \vec{\imath} = -v_2w_1\vec{k}$;
> - $v_2w_3\,\vec{\jmath} \times \vec{k} = v_2w_3\vec{\imath}$, $\quad v_3w_2\,\vec{k} \times \vec{\jmath} = -v_3w_2\vec{\imath}$;
> - $v_3w_1\,\vec{k} \times \vec{\imath} = v_3w_1\vec{\jmath}$, $\quad v_1w_3\,\vec{\imath} \times \vec{k} = -v_1w_3\vec{\jmath}$.
>
> Raccolgo per versore:
> $$
> \vec{v} \times \vec{w} = (v_2w_3 - v_3w_2)\vec{\imath} + (v_3w_1 - v_1w_3)\vec{\jmath} + (v_1w_2 - v_2w_1)\vec{k}.
> $$
> Sviluppando “$\det$" con prima riga $\vec{\imath}, \vec{\jmath}, \vec{k}$ esce lo stesso: il coefficiente di $\vec{\jmath}$ ha il segno $-$ della scacchiera, $-(v_1w_3 - v_3w_1)$.

**E4 (p. 12, esercizio).** Verificare che $\vec{v} \cdot (\vec{w} \times \vec{u}) = \det\begin{pmatrix} v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \\ u_1 & u_2 & u_3 \end{pmatrix}$.

> [!example]- Soluzione
> Da E3, $\vec{w} \times \vec{u} = (w_2u_3 - w_3u_2,\ w_3u_1 - w_1u_3,\ w_1u_2 - w_2u_1)$. Prodotto scalare con $\vec{v}$:
> $$
> \vec{v} \cdot (\vec{w} \times \vec{u}) = v_1(w_2u_3 - w_3u_2) - v_2(w_1u_3 - w_3u_1) + v_3(w_1u_2 - w_2u_1).
> $$
> È lo sviluppo di Laplace della matrice sulla prima riga: $v_1\det(A_{11}) - v_2\det(A_{12}) + v_3\det(A_{13})$. Controllo numerico: con $\vec{v} = (1, 2, 3)$, $\vec{w} = (4, 5, 6)$, $\vec{u} = (7, 8, 10)$ i due lati valgono $-3$.

## Esercizi

**E5 (dispensa, esercizio 18).** Calcolare con il metodo di Gauss il determinante di
$$
A = \begin{pmatrix} 1 & -1 & 2 & 0 \\ 1 & -1 & 1 & -1 \\ 3 & 1 & 1 & 1 \\ 1 & 0 & 2 & -2 \end{pmatrix}.
$$

> [!tip]- Indizio
> Solo $S_{ij}$ ed $E_{ij}(\mu)$, contando gli scambi. Dopo la prima colonna in posizione $(2, 2)$ c'è uno $0$.

> [!example]- Soluzione
> - $E_{21}(-1)$: $R_2 = (0, 0, -1, -1)$; $E_{31}(-3)$: $R_3 = (0, 4, -5, 1)$; $E_{41}(-1)$: $R_4 = (0, 1, 0, -2)$.
> - $S_{23}$ (uno scambio): $R_2 = (0, 4, -5, 1)$, $R_3 = (0, 0, -1, -1)$.
> - $E_{42}(-\frac14)$: $R_4 = (0, 1, 0, -2) - \frac14(0, 4, -5, 1) = (0, 0, \frac54, -\frac94)$.
> - $E_{43}(\frac54)$: $R_4 = (0, 0, \frac54, -\frac94) + \frac54(0, 0, -1, -1) = (0, 0, 0, -\frac72)$.
>
> $$
> \det(A') = 1 \cdot 4 \cdot (-1) \cdot \left(-\frac72\right) = 14, \qquad \det(A) = (-1)^1 \cdot 14 = -14.
> $$
> Il [foglio 5](/uni/gal/foglio-5-svolto/) (esercizio 5.9) ha una matrice quasi uguale, con seconda riga $(0, 1, 1, -1)$, e determinante $14$.

**E6 (dispensa, esercizio 19).** Le rette $r : x + 2y = 1,\ z - y = -1$ ed $s$, passante per $A = (-1, 1, -1)$ e $B = (1, k + 1, 0)$. Trovare i $k$ per cui sono complanari e, per quel valore, un'equazione cartesiana del piano che le contiene.

> [!tip]- Indizio
> Parametriche di $r$ ponendo $y = t$, poi $\det[\vec{v} \mid \vec{w} \mid \overrightarrow{PQ}] = 0$ come nell'esempio della prof di p. 13.

> [!example]- Soluzione
> $r$: $y = t$, $x = 1 - 2t$, $z = -1 + t$, quindi $\vec{v} = (-2, 1, 1)$ e $P = (1, 0, -1) \in r$. $s$: $\vec{w} = \overrightarrow{AB} = (2, k, 1)$, $Q = A = (-1, 1, -1)$. $\overrightarrow{PQ} = (-2, 1, 0)$.
> $$
> \det\begin{pmatrix} -2 & 2 & -2 \\ 1 & k & 1 \\ 1 & 1 & 0 \end{pmatrix} = 2k + 2
> $$
> (sviluppo sulla terza riga: $1 \cdot \det\begin{pmatrix} 2 & -2 \\ k & 1 \end{pmatrix} - 1 \cdot \det\begin{pmatrix} -2 & -2 \\ 1 & 1 \end{pmatrix} = (2 + 2k) - 0$). **Complanari per $k = -1$.**
>
> Piano per $A$ con giaciture $\vec{v}$ e $\vec{w} = (2, -1, 1)$: come a p. 14, $Q = (x, y, z)$ sta nel piano se $\{\overrightarrow{AQ}, \vec{v}, \vec{w}\}$ è dipendente.
> $$
> \det\begin{pmatrix} x + 1 & -2 & 2 \\ y - 1 & 1 & -1 \\ z + 1 & 1 & 1 \end{pmatrix} = (x + 1) \cdot 2 - (y - 1)(-4) + (z + 1) \cdot 0 = 2x + 4y - 2 = 0,
> $$
> cioè $x + 2y = 1$. Controllo: $P = (1, 0, -1)$ dà $1$, $A = (-1, 1, -1)$ dà $-1 + 2 = 1$. È la prima equazione di $r$: il piano contiene $r$ e passa per $A \in s$.

**E7 (dispensa, esercizio 20).** Area del triangolo di vertici $A = (1, 1, 1)$, $B = (1, 3, 1)$, $C = (-1, 0, 0)$.

> [!example]- Soluzione
> $\overrightarrow{AB} = (0, 2, 0)$, $\overrightarrow{AC} = (-2, -1, -1)$.
> $$
> \overrightarrow{AB} \times \overrightarrow{AC} = \text{"}\det\begin{pmatrix} \vec{\imath} & \vec{\jmath} & \vec{k} \\ 0 & 2 & 0 \\ -2 & -1 & -1 \end{pmatrix}\text{"} = \vec{\imath}(-2 - 0) - \vec{\jmath}(0 - 0) + \vec{k}(0 + 4) = -2\vec{\imath} + 4\vec{k}
> $$
> $$
> \text{Area} = \frac12\sqrt{4 + 16} = \frac12\sqrt{20} = \sqrt5.
> $$
> È anche l'esercizio 5.12 del foglio 5.

**E8.** Per quali $k$ la matrice $A = \begin{pmatrix} 1 & 2 & k \\ 0 & k & 1 \\ 1 & 0 & 1 \end{pmatrix}$ è invertibile?

> [!example]- Soluzione
> Sviluppo sulla prima colonna (due termini):
> $$
> \det A = 1 \cdot \det\begin{pmatrix} k & 1 \\ 0 & 1 \end{pmatrix} + 1 \cdot \det\begin{pmatrix} 2 & k \\ k & 1 \end{pmatrix} = k + 2 - k^2 = -(k - 2)(k + 1).
> $$
> Il terzo termine ha segno $(-1)^{3+1} = +$. **Invertibile per $k \neq 2$ e $k \neq -1$.** Controllo per $k = 2$: righe $(1, 2, 2)$, $(0, 2, 1)$, $(1, 0, 1)$, e $R_1 - R_3 = (0, 2, 1) = R_2$: righe dipendenti, rango $2$.

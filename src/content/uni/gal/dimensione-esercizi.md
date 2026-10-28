---
title: Dimensione (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-27
lezioni: []
ordine: 17
---

Esercizi tipo esame di [Dimensione](/uni/gal/dimensione/). Testo in chiaro, soluzione chiusa: prima provaci da solo. Il capitolo 6 continua alle lezioni del 2/11 e 3/11: questa pagina crescerà con quelle.

**E1.** Sia $U = \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4) \subseteq \mathbb{R}^4$ con $\vec{v}_1 = (1, 0, 1, 2)$, $\vec{v}_2 = (2, 1, 0, 1)$, $\vec{v}_3 = (0, 1, -2, -3)$, $\vec{v}_4 = (1, 1, 1, 1)$. Estrarre una base di $U$ e dire quanto vale $\dim U$.

> [!tip]- Indizio
> Procedimento 1: vettori in colonna, Gauss, si tengono i vettori delle colonne con pivot.

> [!example]- Soluzione
> $$
> A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 0 & -2 & 1 \\ 2 & 1 & -3 & 1 \end{pmatrix}
> $$
> - $E_{31}(-1)$: $R_3 = (0, -2, -2, 0)$; $E_{41}(-2)$: $R_4 = (0, -3, -3, -1)$.
> - $E_{32}(2)$: $R_3 = (0, 0, 0, 2)$; $E_{42}(3)$: $R_4 = (0, 0, 0, 2)$.
> - $E_{43}(-1)$: $R_4 = (0, 0, 0, 0)$.
>
> $$
> \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Pivot nelle colonne 1, 2, 4: una base di $U$ è $\{\vec{v}_1, \vec{v}_2, \vec{v}_4\}$ e $\dim U = 3$.
>
> Controllo: $\vec{v}_3 = -2\vec{v}_1 + \vec{v}_2 = (-2 + 2,\ 0 + 1,\ -2 + 0,\ -4 + 1) = (0, 1, -2, -3)$.

**E2.** Completare $\{\vec{v}_1, \vec{v}_2\}$, con $\vec{v}_1 = (1, 1, 0)$ e $\vec{v}_2 = (0, 1, 1)$, a una base di $\mathbb{R}^3$ usando la base canonica.

> [!tip]- Indizio
> $\{\vec{v}_1, \vec{v}_2, \vec{e}_1, \vec{e}_2, \vec{e}_3\}$ genera $\mathbb{R}^3$ (contiene la base canonica). Applica il procedimento 1 con $\vec{v}_1, \vec{v}_2$ messi per primi.

> [!example]- Soluzione
> È il procedimento della <span class="src">dispensa, §6.2.1</span>, fatto con il procedimento 1 della prof. Matrice $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{e}_1 \mid \vec{e}_2 \mid \vec{e}_3]$:
> $$
> \begin{pmatrix} 1 & 0 & 1 & 0 & 0 \\ 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 & 1 \end{pmatrix} \xrightarrow{E_{21}(-1)} \begin{pmatrix} 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & -1 & 1 & 0 \\ 0 & 1 & 0 & 0 & 1 \end{pmatrix} \xrightarrow{E_{32}(-1)} \begin{pmatrix} 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & -1 & 1 & 0 \\ 0 & 0 & 1 & -1 & 1 \end{pmatrix}
> $$
> Pivot nelle colonne 1, 2, 3: base $\{\vec{v}_1, \vec{v}_2, \vec{e}_1\}$. Le prime due colonne hanno sempre pivot perché $\vec{v}_1, \vec{v}_2$ sono indipendenti: per questo si mettono per primi. Si aggiunge $n - m = 3 - 2 = 1$ vettore, come dice il teorema.
>
> Controllo: $\det\begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 0 \end{pmatrix} = 1 \cdot \det\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = 1 \neq 0$ (sviluppo sulla terza colonna).

**E3.** Al variare di $k \in \mathbb{R}$ calcolare $\dim\mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$, con $\vec{v}_1 = (1, 2, 1)$, $\vec{v}_2 = (1, k, 1)$, $\vec{v}_3 = (2, 3, k)$, e dare una base dello Span.

> [!example]- Soluzione
> $$
> A = \begin{pmatrix} 1 & 1 & 2 \\ 2 & k & 3 \\ 1 & 1 & k \end{pmatrix} \xrightarrow{E_{21}(-2),\ E_{31}(-1)} \begin{pmatrix} 1 & 1 & 2 \\ 0 & k - 2 & -1 \\ 0 & 0 & k - 2 \end{pmatrix}
> $$
> È triangolare: $\det A = (k - 2)^2$.
> - $k \neq 2$: tre pivot, $\dim = 3$, lo Span è $\mathbb{R}^3$ e una base è $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$.
> - $k = 2$: righe $(1, 1, 2)$, $(0, 0, -1)$, $(0, 0, 0)$. Pivot nelle colonne 1 e 3: $\dim = 2$, base $\{\vec{v}_1, \vec{v}_3\}$. Infatti per $k = 2$ $\vec{v}_2 = (1, 2, 1) = \vec{v}_1$.

**E4.** Sia $S = \left\{\begin{pmatrix} a & b \\ b & c \end{pmatrix} : a, b, c \in \mathbb{R}\right\} \subseteq M_2(\mathbb{R})$, le matrici simmetriche. Trovare una base di $S$ e $\dim S$.

> [!example]- Soluzione
> Ogni elemento si scrive
> $$
> \begin{pmatrix} a & b \\ b & c \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix},
> $$
> quindi le tre matrici generano $S$. Sono indipendenti: la combinazione è la matrice nulla solo se $a = b = c = 0$. Base di tre elementi: $\dim S = 3$, una in meno di $\dim M_2(\mathbb{R}) = 4$ perché il vincolo $a_{12} = a_{21}$ toglie un grado di libertà.

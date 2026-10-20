---
title: Basi (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-19
lezioni: []
ordine: 14
---

Esercizi tipo esame di [Basi](/uni/gal/basi/), dove stanno definizione, proposizioni (a), (b), (c), metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Primo controllo, sempre: in $\mathbb{R}^n$ una base ha esattamente $n$ vettori.

**Esercizio 1** (facile). Verificare che $\{(2, 1), (1, 1)\}$ è una base di $\mathbb{R}^2$ e scrivere $(3, 4)$ come combinazione dei suoi elementi.

> [!example]- Soluzione
> **Tipo**: base di $\mathbb{R}^n$ e scrittura di un vettore. $k = 2 = n$: basta il rango, e la stessa riduzione di $[A \mid \vec{v}]$ dà i coefficienti.
> $$
> \left[\begin{array}{cc|c} 2 & 1 & 3 \\ 1 & 1 & 4 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{cc|c} 1 & 1 & 4 \\ 2 & 1 & 3 \end{array}\right] \xrightarrow{E_{21}(-2)} \left[\begin{array}{cc|c} 1 & 1 & 4 \\ 0 & -1 & -5 \end{array}\right]
> $$
> ($S_{12}$ per il pivot $1$; $R_2 - 2R_1 = (2 - 2,\ 1 - 2 \mid 3 - 8)$.) Due pivot a sinistra: rango $2$, **è una base** per la (c).
>
> Coefficienti $a$ su $(2, 1)$ e $b$ su $(1, 1)$: $-b = -5$, quindi $b = 5$; $a + b = 4$, quindi $a = -1$.
>
> **Verifica**: $-(2, 1) + 5(1, 1) = (-2 + 5,\ -1 + 5) = (3, 4)$.

**Esercizio 2.** In $\mathbb{R}^3$ siano $\vec{v}_1 = (1, 0, 1)$, $\vec{v}_2 = (1, 1, 0)$, $\vec{v}_3 = (0, 1, 1)$, $\vec{v}_4 = (1, 1, 1)$.

- a) $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è una base di $\mathbb{R}^3$? Genera $\mathbb{R}^3$?
- b) Mostrare che $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è una base di $\mathbb{R}^3$.
- c) Scrivere $\vec{v}_4$ come combinazione di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.

> [!example]- Soluzione
> **a)** Quattro vettori in $\mathbb{R}^3$: $k = 4 \neq 3$, **non è una base** (sono dipendenti per la (b), $k > n$). Per sapere se generano serve il rango: lo calcolo in b), dove la stessa riduzione con la colonna di $\vec{v}_4$ in fondo serve anche a c).
>
> **b)** e **c)** insieme:
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 \end{array}\right]
> $$
> - $E_{31}(-1)$: $R_3 - R_1 = (0, -1, 1 \mid 0)$;
> - $E_{32}(1)$: $R_3 + R_2 = (0, 0, 2 \mid 1)$;
> - $D_3(\frac12)$: $(0, 0, 1 \mid \frac12)$;
> - $E_{23}(-1)$: $R_2 - R_3 = (0, 1, 0 \mid \frac12)$;
> - $E_{12}(-1)$: $R_1 - R_2 = (1, 0, 0 \mid \frac12)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 0 & \frac12 \\ 0 & 1 & 0 & \frac12 \\ 0 & 0 & 1 & \frac12 \end{array}\right]
> $$
> **b)** A sinistra tre pivot: $\operatorname{rg}[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3] = 3 = k = n$, **base** per la (c). Ne segue anche la risposta mancante di a): la matrice dei quattro vettori contiene queste tre colonne, quindi ha rango $3 = n$, e i quattro **generano** $\mathbb{R}^3$.
>
> **c)** $\vec{v}_4 = \frac12\vec{v}_1 + \frac12\vec{v}_2 + \frac12\vec{v}_3$. Verifica: $\frac12\big((1, 0, 1) + (1, 1, 0) + (0, 1, 1)\big) = \frac12(2, 2, 2) = (1, 1, 1)$.

**Esercizio 3** (con parametro). Siano $\vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (0, 1, 1)$, $\vec{v}_3 = (1, 0, k)$.

- a) Per quali $k$ $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è una base di $\mathbb{R}^3$?
- b) Per quei $k$, scrivere $(1, 1, 1)$ come combinazione dei tre vettori.
- c) Per i $k$ esclusi, $(1, 1, 1)$ sta in $\mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$?

> [!tip]- Indizio
> Riduci $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid (1, 1, 1)]$ una volta sola. Il terzo pivot è un'espressione in $k$: dividi per lei solo dopo aver escluso il valore che la annulla.

> [!example]- Soluzione
> **Tipo**: base con parametro, poi coefficienti con parametro. $k$ vettori uguale a $n = 3$, quindi conta solo il rango.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 1 \\ 0 & 1 & k & 1 \end{array}\right]
> $$
> - $E_{21}(-1)$: $R_2 - R_1 = (0, 1, -1 \mid 0)$;
> - $E_{32}(-1)$: $R_3 - R_2 = (0,\ 0,\ k + 1 \mid 1)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 1 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & 0 & k + 1 & 1 \end{array}\right]
> $$
> **a)** Terzo pivot $k + 1$: **base se e solo se $k \neq -1$**.
>
> **b)** Per $k \neq -1$ divido per $k + 1$:
> - $\lambda_3 = \frac{1}{k + 1}$;
> - seconda riga: $\lambda_2 - \lambda_3 = 0$, quindi $\lambda_2 = \frac{1}{k + 1}$;
> - prima riga: $\lambda_1 + \lambda_3 = 1$, quindi $\lambda_1 = 1 - \frac{1}{k + 1} = \frac{k}{k + 1}$.
>
> $$
> (1, 1, 1) = \frac{k}{k + 1}\vec{v}_1 + \frac{1}{k + 1}\vec{v}_2 + \frac{1}{k + 1}\vec{v}_3
> $$
> **Verifica**: $\frac{1}{k + 1}\big(k(1, 1, 0) + (0, 1, 1) + (1, 0, k)\big) = \frac{1}{k + 1}(k + 1,\ k + 1,\ 1 + k) = (1, 1, 1)$. Con $k = 0$: $(1, 1, 1) = \vec{v}_2 + \vec{v}_3 = (0, 1, 1) + (1, 0, 0)$, torna.
>
> **c)** $k = -1$: la terza riga è $(0, 0, 0 \mid 1)$, cioè $0 = 1$. Ranghi $2$ e $3$: **$(1, 1, 1)$ non sta nello Span**. Infatti per $k = -1$ si ha $\vec{v}_3 = \vec{v}_1 - \vec{v}_2$, i tre vettori stanno sul piano $\mathrm{Span}(\vec{v}_1, \vec{v}_2)$, e i coefficienti di b) "esplodono" per $k \to -1$.

**Esercizio 4.** In $\mathbb{R}[x]_2$:

- a) dimostrare che $\{1,\ 1 + x,\ 1 + x + x^2\}$ è una base;
- b) scrivere $p(x) = 3 - x + 2x^2$ come combinazione dei suoi elementi.

> [!example]- Soluzione
> **Tipo**: base fra polinomi, con la definizione: si prende un polinomio generico $a_0 + a_1x + a_2x^2$ e si cercano i coefficienti.
>
> $\alpha \cdot 1 + \beta(1 + x) + \gamma(1 + x + x^2) = (\alpha + \beta + \gamma) + (\beta + \gamma)x + \gamma x^2$, raccogliendo per potenze. Uguale ad $a_0 + a_1x + a_2x^2$ se e solo se
> $$
> \begin{cases} \alpha + \beta + \gamma = a_0 \\ \beta + \gamma = a_1 \\ \gamma = a_2 \end{cases}
> $$
> Il sistema è già a scalini con tre pivot: risalendo, $\gamma = a_2$, $\beta = a_1 - a_2$, $\alpha = a_0 - a_1$.
>
> **a)** Una soluzione esiste per **ogni** $a_0, a_1, a_2$: i tre polinomi generano $\mathbb{R}[x]_2$. La soluzione è unica; in particolare con $a_0 = a_1 = a_2 = 0$ (il polinomio nullo) l'unica è $\alpha = \beta = \gamma = 0$: sono indipendenti. **Base.**
>
> **b)** $a_0 = 3$, $a_1 = -1$, $a_2 = 2$: $\gamma = 2$, $\beta = -1 - 2 = -3$, $\alpha = 3 - (-1) = 4$.
> $$
> 3 - x + 2x^2 = 4 \cdot 1 - 3(1 + x) + 2(1 + x + x^2)
> $$
> **Verifica**: $4 - 3 - 3x + 2 + 2x + 2x^2 = (4 - 3 + 2) + (-3 + 2)x + 2x^2 = 3 - x + 2x^2$.

**Esercizio 5** (livello del parziale, dispensa esercizio 17, <span class="src">p. 103</span>). Siano
$$
\vec{v}_1 = (1, 0, 0, 2), \quad \vec{v}_2 = (2, 1, -1, 0), \quad \vec{v}_3 = (0, 1, 2, 0), \quad \vec{v}_4 = (k, -1, 0, k) \in \mathbb{R}^4
$$
Dire per quali valori di $k$ formano una base di $\mathbb{R}^4$.

> [!tip]- Indizio
> Metti $\vec{v}_4$ nell'ultima colonna, così il parametro resta lontano dai pivot fino all'ultimo passo. Per non avere frazioni, prima di azzerare l'ultima riga moltiplicala per $3$.

> [!example]- Soluzione
> **Tipo**: base di $\mathbb{R}^4$ con parametro. Quattro vettori in $\mathbb{R}^4$: base se e solo se il rango è $4$.
> $$
> A = \begin{pmatrix} 1 & 2 & 0 & k \\ 0 & 1 & 1 & -1 \\ 0 & -1 & 2 & 0 \\ 2 & 0 & 0 & k \end{pmatrix}
> $$
> - $E_{41}(-2)$: $R_4 - 2R_1 = (2 - 2,\ 0 - 4,\ 0 - 0,\ k - 2k) = (0, -4, 0, -k)$;
> - $E_{32}(1)$: $R_3 + R_2 = (0,\ -1 + 1,\ 2 + 1,\ 0 - 1) = (0, 0, 3, -1)$;
> - $E_{42}(4)$: $R_4 + 4R_2 = (0,\ -4 + 4,\ 0 + 4,\ -k - 4) = (0, 0, 4, -k - 4)$;
> - $D_4(3)$: $(0, 0, 12, -3k - 12)$;
> - $E_{43}(-4)$: $R_4 - 4R_3 = (0, 0, 12 - 12, -3k - 12 + 4) = (0, 0, 0, -3k - 8)$.
> $$
> \begin{pmatrix} 1 & 2 & 0 & k \\ 0 & 1 & 1 & -1 \\ 0 & 0 & 3 & -1 \\ 0 & 0 & 0 & -3k - 8 \end{pmatrix}
> $$
> Pivot $1$, $1$, $3$ e $-3k - 8$, nullo per $k = -\frac83$. **Base se e solo se $k \neq -\frac83$** (coincide con la soluzione della dispensa).
>
> **Controllo** per $k = -\frac83$: deve esserci una relazione. Con $k = -\frac83$ la quarta colonna ridotta è $(-\frac83, -1, -1, 0)$; risolvo $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 = \vec{v}_4$ sulla scalini: $3\lambda_3 = -1$, quindi $\lambda_3 = -\frac13$; $\lambda_2 + \lambda_3 = -1$, quindi $\lambda_2 = -\frac23$; $\lambda_1 + 2\lambda_2 = -\frac83$, quindi $\lambda_1 = -\frac43$. Verifica: $-\frac43(1, 0, 0, 2) - \frac23(2, 1, -1, 0) - \frac13(0, 1, 2, 0) = \left(-\frac43 - \frac43,\ -\frac23 - \frac13,\ \frac23 - \frac23,\ -\frac83\right) = \left(-\frac83, -1, 0, -\frac83\right) = \vec{v}_4$.

**Esercizio 6** (livello del 30). In $M_2(\mathbb{R})$ siano
$$
I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \quad A_2 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad A_3 = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}
$$

- a) Dimostrare che $\{I, D, A_2, A_3\}$ è una base di $M_2(\mathbb{R})$.
- b) Scrivere $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ come loro combinazione, e in particolare $\begin{pmatrix} 3 & -2 \\ 5 & 1 \end{pmatrix}$.

> [!example]- Soluzione
> **Tipo**: base in $M_2(\mathbb{R})$ con la definizione. Conviene risolvere direttamente il problema "scrivere una matrice generica": se la soluzione esiste per ogni matrice e per la matrice nulla è solo quella nulla, si hanno insieme le due condizioni.
> $$
> xI + yD + zA_2 + wA_3 = \begin{pmatrix} x + y & z \\ w & x - y \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
> $$
> Elemento per elemento: $x + y = a$, $z = b$, $w = c$, $x - y = d$. Dalla prima e dall'ultima, sommando e sottraendo:
> $$
> x = \frac{a + d}{2}, \qquad y = \frac{a - d}{2}, \qquad z = b, \qquad w = c
> $$
> **a)** La soluzione esiste per ogni $a, b, c, d$: **generano**. Con $a = b = c = d = 0$ viene $x = y = z = w = 0$, l'unica: **indipendenti**. Quindi è una base.
>
> **b)** $\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \frac{a + d}{2}I + \frac{a - d}{2}D + bA_2 + cA_3$. Per $a = 3$, $b = -2$, $c = 5$, $d = 1$: $x = 2$, $y = 1$, $z = -2$, $w = 5$.
>
> **Verifica**: $2I + D - 2A_2 + 5A_3 = \begin{pmatrix} 2 + 1 & -2 \\ 5 & 2 - 1 \end{pmatrix} = \begin{pmatrix} 3 & -2 \\ 5 & 1 \end{pmatrix}$.

**Esercizio 7** (vero o falso, con motivazione).

- a) Quattro vettori di $\mathbb{R}^3$ che generano $\mathbb{R}^3$ formano una base.
- b) Se $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è una base di $\mathbb{R}^3$, anche $\{\vec{v}_1,\ \vec{v}_1 + \vec{v}_2,\ \vec{v}_1 + \vec{v}_2 + \vec{v}_3\}$ lo è.
- c) Tre vettori linearmente indipendenti di $\mathbb{R}^3$ formano sempre una base di $\mathbb{R}^3$.
- d) $\{\vec{e}_1, \vec{e}_2\}$ è una base del sottospazio $\{(x, y, z) \in \mathbb{R}^3 : z = 0\}$.
- e) $\mathbb{R}[x]$ ha una base nel senso della definizione della prof.

> [!example]- Soluzione
> **a)** **Falso**. Una base di $\mathbb{R}^3$ ha esattamente $3$ vettori; quattro sono sempre dipendenti (proposizione (b), $k > n$). Esempio: l'esercizio 2.
>
> **b)** **Vero**. Indipendenza: sia $a\vec{v}_1 + b(\vec{v}_1 + \vec{v}_2) + c(\vec{v}_1 + \vec{v}_2 + \vec{v}_3) = \vec{0}$. Raccogliendo: $(a + b + c)\vec{v}_1 + (b + c)\vec{v}_2 + c\vec{v}_3 = \vec{0}$, e per l'indipendenza dei $\vec{v}_i$: $c = 0$, poi $b = 0$, poi $a = 0$. Sono tre vettori indipendenti di $\mathbb{R}^3$: la matrice ha rango $3 = k = n$, base per la (c).
>
> **c)** **Vero**. Indipendenti vuol dire rango $3 = k$ (b); con $k = n = 3$ la (c) dà base.
>
> **d)** **Vero**. Il sottospazio è $\mathrm{Span}(\vec{e}_1, \vec{e}_2)$ ([Generatori](/uni/gal/generatori/), il piano $xy$), quindi $\{\vec{e}_1, \vec{e}_2\}$ lo genera; ed è indipendente (rango $2$). Le due condizioni della definizione valgono con $V$ uguale al sottospazio.
>
> **e)** **Falso**. La definizione è per spazi finitamente generati, e $\mathbb{R}[x]$ non lo è (la prof, p. 12): nessun insieme finito di polinomi lo genera.

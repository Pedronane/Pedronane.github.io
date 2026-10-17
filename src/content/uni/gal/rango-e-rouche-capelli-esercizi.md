---
title: Rango e Rouché-Capelli (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-28
lezioni: []
ordine: 6
---

Esercizi tipo esame di [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Gli esercizi del foglio 2 (2.11 della prova intermedia 2018, 2.14, 2.15, 2.16) sono in [Foglio 2 svolto](/uni/gal/foglio-2-svolto/): farli dopo questi.

**Esercizio 1** (facile). Calcolare il rango delle matrici
$$
M_1 = \begin{pmatrix} 2 & 1 & 0 \\ 4 & 2 & 1 \\ 6 & 3 & 1 \end{pmatrix}, \qquad M_2 = \begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 1 & 3 & 2 \end{pmatrix}, \qquad M_3 = \begin{pmatrix} 1 & 3 \\ 2 & 6 \\ -1 & -3 \\ 0 & 1 \end{pmatrix}
$$
e dire, per ciascuna, qual è il rango massimo possibile per la sua forma.

> [!tip]- Indizio
> Il rango massimo è $\min(m, n)$. Riduci e conta i pivot, non le righe non nulle della matrice di partenza.

> [!example]- Soluzione
> **Come lo riconosco.** Matrici numeriche: Gauss-Jordan e conteggio dei pivot. Il rango massimo viene da $\operatorname{rg} \leq \min(m, n)$.
>
> **$M_1$** ($3 \times 3$, massimo $3$). $E_{21}(-2)$: $R_2 - 2R_1 = (0, 0, 1)$. $E_{31}(-3)$: $R_3 - 3R_1 = (0, 0, 1)$. $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0)$.
> $$
> \begin{pmatrix} 2 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \qquad \text{pivot } 2 \text{ (col. 1) e } 1 \text{ (col. 3): } \operatorname{rg}(M_1) = 2
> $$
> La colonna 2 non ha pivot: è la metà della colonna 1.
>
> **$M_2$** ($3 \times 4$, massimo $3$). $E_{31}(-1)$: $R_3 - R_1 = (0, 1, 1, 1)$. $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0, 0)$. Due pivot: $\operatorname{rg}(M_2) = 2$.
>
> **$M_3$** ($4 \times 2$, massimo $2$). $E_{21}(-2)$: $(0, 0)$. $E_{31}(1)$: $(0, 0)$. Restano $(1, 3)$ e $(0, 1)$; con $S_{24}$ la riga $(0, 1)$ sale al secondo posto. Due pivot: $\operatorname{rg}(M_3) = 2$, il massimo, anche se tre righe su quattro sono multiple della prima.
>
> **Controllo.** $M_1$: la terza riga di partenza è la somma delle prime due, $(2 + 4, 1 + 2, 0 + 1) = (6, 3, 1)$, coerente con una riga che si annulla. $M_2$: $(1+0, 0+1, 2+1, 1+1) = (1, 1, 3, 2)$, idem.

**Esercizio 2.** Senza calcolare le soluzioni, dire quante soluzioni hanno i due sistemi, che differiscono solo nell'ultimo termine noto; poi risolvere quello compatibile.
$$
\text{(a)} \begin{cases} x + 2y - z = 1 \\ 2x + 4y + z = 5 \\ 3x + 6y = 6 \end{cases} \qquad \text{(b)} \begin{cases} x + 2y - z = 1 \\ 2x + 4y + z = 5 \\ 3x + 6y = 7 \end{cases}
$$

> [!example]- Soluzione
> **Come lo riconosco.** "Senza calcolare le soluzioni, quante": è Rouché-Capelli. Stessa $A$, quindi si riduce una volta con il termine noto generico $c$.
>
> Con $c = 6$ o $c = 7$ come ultimo termine noto:
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ 0,\ 1 + 2 \mid 5 - 2) = (0, 0, 3 \mid 3)$;
> - $E_{31}(-3)$: $R_3 - 3R_1 = (0,\ 0,\ 0 + 3 \mid c - 3) = (0, 0, 3 \mid c - 3)$;
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0 \mid c - 6)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 0 & 3 & 3 \\ 0 & 0 & 0 & c - 6 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 2$ in entrambi i casi (pivot nelle colonne 1 e 3).
> - (a), $c = 6$: ultima riga nulla, $\operatorname{rg}([A \mid \vec{b}]) = 2 = \operatorname{rg}(A) < 3$. **Infinite soluzioni**, $3 - 2 = 1$ parametro.
> - (b), $c = 7$: ultima riga $(0, 0, 0 \mid 1)$, $\operatorname{rg}([A \mid \vec{b}]) = 3 \neq 2$. **Incompatibile**.
>
> Soluzioni di (a): $3z = 3$ dà $z = 1$; la colonna di $y$ è senza pivot, $y = t$; dalla prima $x = 1 - 2t + z = 1 - 2t + 1 = 2 - 2t$.
> $$
> (x, y, z) = (2 - 2t,\ t,\ 1), \qquad t \in \mathbb{R}
> $$
> Verifica: $2 - 2t + 2t - 1 = 1$; $4 - 4t + 4t + 1 = 5$; $6 - 6t + 6t = 6$.

**Esercizio 3.** Determinare il rango di
$$
C(t) = \begin{pmatrix} 1 & 2 & 1 & t \\ 2 & 4 & t+1 & 2t \\ 1 & 2 & 1 & t^2 \end{pmatrix}
$$
al variare di $t \in \mathbb{R}$.

> [!example]- Soluzione
> **Come lo riconosco.** Rango con parametro, senza sistema: stessa procedura, ma c'è una sola matrice e un solo rango.
>
> $E_{21}(-2)$: $R_2 - 2R_1 = (2 - 2,\ 4 - 4,\ t + 1 - 2,\ 2t - 2t) = (0, 0, t - 1, 0)$. $E_{31}(-1)$: $R_3 - R_1 = (0, 0, 0, t^2 - t)$, e $t^2 - t = t(t-1)$.
> $$
> \begin{pmatrix} 1 & 2 & 1 & t \\ 0 & 0 & t-1 & 0 \\ 0 & 0 & 0 & t(t-1) \end{pmatrix}
> $$
> Gli elementi che possono fare da pivot sono $t - 1$ (colonna 3) e $t(t-1)$ (colonna 4). La colonna 2 non ha mai pivot.
> - $t \neq 0, 1$: tre pivot, $1$, $t - 1$, $t(t-1)$. **Rango 3**.
> - $t = 0$: la seconda riga è $(0, 0, -1, 0)$, la terza è nulla. Due pivot: **rango 2**.
> - $t = 1$: seconda e terza riga nulle. Un pivot: **rango 1** (le tre righe sono tutte $(1, 2, 1, 1)$).
>
> Controllo con $t = 0$: $C(0)$ ha righe $(1,2,1,0)$, $(2,4,1,0)$, $(1,2,1,0)$; la terza ripete la prima, la seconda no. Rango 2.

**Esercizio 4.** Dato il sistema
$$
\begin{cases} x + y + z = 1 \\ x - y + 2z = k \\ 3x + y + 4z = k^2 \end{cases} \qquad (k \in \mathbb{R})
$$
stabilire per quali $k$ è compatibile e scrivere le soluzioni in quei casi.

> [!tip]- Indizio
> Il parametro sta solo nei termini noti: $\operatorname{rg}(A)$ non dipende da $k$. Tutto si decide nell'ultima colonna.

> [!example]- Soluzione
> **Come lo riconosco.** $A$ è numerica, $k$ compare solo in $\vec{b}$. Allora $\operatorname{rg}(A)$ è un numero fisso; se è $3$ il sistema è sempre compatibile, se è minore la compatibilità dipende da una condizione su $k$ nell'ultima colonna.
>
> **Riduzione.**
> - $E_{21}(-1)$: $R_2 - R_1 = (0,\ -2,\ 1 \mid k - 1)$;
> - $E_{31}(-3)$: $R_3 - 3R_1 = (0,\ 1 - 3,\ 4 - 3 \mid k^2 - 3) = (0, -2, 1 \mid k^2 - 3)$;
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0 \mid k^2 - 3 - k + 1) = (0, 0, 0 \mid k^2 - k - 2)$.
>
> $k^2 - k - 2 = (k - 2)(k + 1)$ (due numeri con prodotto $-2$ e somma $-1$).
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & -2 & 1 & k - 1 \\ 0 & 0 & 0 & (k-2)(k+1) \end{array}\right]
> $$
> **Ranghi.** $\operatorname{rg}(A) = 2$ sempre.
> - $k \neq 2, -1$: $\operatorname{rg}([A \mid \vec{b}]) = 3$, **incompatibile**.
> - $k = 2$ o $k = -1$: ultima riga nulla, $\operatorname{rg}([A \mid \vec{b}]) = 2$: **infinite soluzioni**, $3 - 2 = 1$ parametro. Mai soluzione unica.
>
> **Soluzioni.** Colonna senza pivot: $z = t$.
> - $k = 2$: $-2y + t = 1$, quindi $y = \frac{t - 1}{2}$; $x = 1 - y - t = 1 - \frac{t-1}{2} - t = \frac{2 - t + 1 - 2t}{2} = \frac{3 - 3t}{2}$.
> - $k = -1$: $-2y + t = -2$, quindi $y = \frac{t + 2}{2}$; $x = 1 - \frac{t+2}{2} - t = \frac{2 - t - 2 - 2t}{2} = -\frac{3t}{2}$.
>
> **Controllo.** $k = 2$, $t = 1$: $(0, 0, 1)$; $0 + 0 + 1 = 1$, $0 - 0 + 2 = 2 = k$, $0 + 0 + 4 = 4 = k^2$. $k = -1$, $t = 0$: $(0, 1, 0)$; $1 = 1$, $-1 = k$, $1 = k^2$. Di buon senso: la terza riga di $A$ è $2R_1 + R_2$, quindi serve $2 \cdot 1 + k = k^2$, la stessa equazione.

**Esercizio 5** (esercizi extra della prof, es. 5). Dato il sistema
$$
\begin{cases} 2x + 3y + kz = k \\ x + y + z = k \\ x + 2y + z = 0 \end{cases} \qquad (k \in \mathbb{R})
$$
1. determinare per quali $k$ è compatibile; 2. per ogni $k$, ove possibile, trovare tutte le soluzioni.

> [!example]- Soluzione
> **Come lo riconosco.** È l'es. 3 del tutor con altri numeri: parametro in $A$ e in $\vec{b}$, sistema quadrato. Pivot senza parametro in alto.
>
> **Riduzione.** $S_{12}$: in alto $(1, 1, 1 \mid k)$.
> - $E_{21}(-2)$: $(2, 3, k \mid k) - 2(1, 1, 1 \mid k) = (0, 1, k - 2 \mid -k)$;
> - $E_{31}(-1)$: $(1, 2, 1 \mid 0) - (1, 1, 1 \mid k) = (0, 1, 0 \mid -k)$;
> - $E_{32}(-1)$: $(0, 1, 0 \mid -k) - (0, 1, k-2 \mid -k) = (0, 0, 2 - k \mid 0)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & k \\ 0 & 1 & k-2 & -k \\ 0 & 0 & 2-k & 0 \end{array}\right]
> $$
> **1. Ranghi.** Critico $k = 2$.
> - $k \neq 2$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3$, unica soluzione.
> - $k = 2$: terza riga nulla, $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 2$, infinite soluzioni.
>
> Compatibile **per ogni** $k$: l'ultima colonna ha $0$ nella terza riga, quindi non può mai comparire $0 = c$ con $c \neq 0$.
>
> **2. $k \neq 2$.** Terza riga: $(2 - k)z = 0$, si divide per $2 - k \neq 0$: $z = 0$. Seconda: $y + (k-2) \cdot 0 = -k$, $y = -k$. Prima: $x = k - y - z = k + k - 0 = 2k$.
> $$
> (x, y, z) = (2k,\ -k,\ 0)
> $$
> **2. $k = 2$.** Restano $(1, 1, 1 \mid 2)$ e $(0, 1, 0 \mid -2)$: $y = -2$, $z$ libera, $x = 2 - y - z = 4 - z$.
> $$
> \begin{cases} x = 4 - z \\ y = -2 \end{cases} \qquad z \in \mathbb{R}
> $$
> **Controllo.** $k \neq 2$: $4k - 3k + 0 = k$; $2k - k + 0 = k$; $2k - 2k + 0 = 0$. $k = 2$, $z = 0$: $(4, -2, 0)$; $8 - 6 + 0 = 2$; $4 - 2 = 2$; $4 - 4 = 0$. Coincide con la soluzione della prof sul foglio.

**Esercizio 6.** Dato il sistema
$$
\begin{cases} x + y + kz = 1 \\ x + ky + z = 1 \\ kx + y + z = 1 \end{cases} \qquad (k \in \mathbb{R})
$$
a) stabilire per quali $k$ è compatibile e per quali ha infinite soluzioni; b) trovare le soluzioni per i valori di $k$ che lo rendono compatibile.

> [!example]- Soluzione
> **Come lo riconosco.** Parametro in tutte le righe, termini noti fissi. Un valore critico qui annulla **due** pivot insieme: va guardato con attenzione.
>
> **a)** Pivot $1$ in alto a sinistra, senza parametro.
> - $E_{21}(-1)$: $R_2 - R_1 = (0,\ k - 1,\ 1 - k \mid 0)$;
> - $E_{31}(-k)$: $R_3 - kR_1 = (k - k,\ 1 - k,\ 1 - k^2 \mid 1 - k) = (0,\ 1 - k,\ 1 - k^2 \mid 1 - k)$;
> - $E_{32}(1)$: $R_3 + R_2 = (0,\ 0,\ (1-k) + (1-k^2) \mid 1 - k)$. Raccolgo $1 - k$, usando $1 - k^2 = (1-k)(1+k)$: $(1 - k)(1 + 1 + k) = (1 - k)(2 + k)$.
>
> Il coefficiente di $E_{32}$ è $1$ perché $1 - k = -(k - 1)$: non si divide per niente che contenga $k$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & k & 1 \\ 0 & k-1 & 1-k & 0 \\ 0 & 0 & (1-k)(2+k) & 1-k \end{array}\right]
> $$
> Valori critici: $k = 1$ (si annullano due pivot) e $k = -2$.
> - $k \neq 1, -2$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3$, **unica soluzione**.
> - $k = 1$: seconda e terza riga nulle. $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 1 < 3$, **infinite soluzioni** con due parametri.
> - $k = -2$: terza riga $(0, 0, 3 \cdot 0 \mid 3) = (0, 0, 0 \mid 3)$. $\operatorname{rg}(A) = 2$, $\operatorname{rg}([A \mid \vec{b}]) = 3$: **incompatibile**.
>
> Compatibile per $k \neq -2$; infinite soluzioni solo per $k = 1$.
>
> **b)** $k = 1$: resta $x + y + z = 1$. Colonne di $y$ e $z$ senza pivot: $y = t$, $z = s$, $x = 1 - t - s$.
>
> $k \neq 1, -2$: dalla terza $z = \frac{1-k}{(1-k)(2+k)} = \frac{1}{k+2}$ (si semplifica perché $k \neq 1$). Dalla seconda, divisa per $k - 1 \neq 0$: $y - z = 0$, quindi $y = \frac{1}{k+2}$. Dalla prima: $x = 1 - y - kz = 1 - \frac{1}{k+2} - \frac{k}{k+2} = \frac{k + 2 - 1 - k}{k+2} = \frac{1}{k+2}$.
> $$
> (x, y, z) = \left(\frac{1}{k+2},\ \frac{1}{k+2},\ \frac{1}{k+2}\right)
> $$
> Verifica con $k = 0$: $\left(\frac{1}{2}, \frac{1}{2}, \frac{1}{2}\right)$ soddisfa $x + y = 1$, $x + z = 1$, $y + z = 1$. Per simmetria ogni equazione dà $(1 + 1 + k) \cdot \frac{1}{k+2} = 1$.

**Esercizio 7.** Nel sistema dell'esercizio 6 ogni equazione è un piano: $\pi_1: x + y + kz = 1$, $\pi_2: x + ky + z = 1$, $\pi_3: kx + y + z = 1$. Descrivere la posizione reciproca dei tre piani al variare di $k$.

> [!tip]- Indizio
> Usa la tabella dei tre piani letti con il rango. Per distinguere prisma e "due paralleli" guarda se due normali sono proporzionali.

> [!example]- Soluzione
> **Come lo riconosco.** "Posizione reciproca di tre piani" è un sistema $3 \times 3$ letto geometricamente: i ranghi li ho già dall'esercizio 6, resta da tradurli.
>
> - $k \neq 1, -2$: ranghi $3$ e $3$, i tre piani si incontrano nel **punto** $\left(\frac{1}{k+2}, \frac{1}{k+2}, \frac{1}{k+2}\right)$.
> - $k = 1$: le tre equazioni sono tutte $x + y + z = 1$. Ranghi $1$ e $1$: i piani **coincidono**.
> - $k = -2$: ranghi $2$ e $3$, nessun punto comune. Normali: $\vec{n}_1 = (1, 1, -2)$, $\vec{n}_2 = (1, -2, 1)$, $\vec{n}_3 = (-2, 1, 1)$. Due normali proporzionali avrebbero lo stesso rapporto in ogni coordinata. $\vec{n}_2$ su $\vec{n}_1$: rapporti $\frac11 = 1$ e $\frac{-2}{1} = -2$. $\vec{n}_3$ su $\vec{n}_1$: $-2$ e $1$. $\vec{n}_3$ su $\vec{n}_2$: $-2$ e $-\frac12$. Nessuna coppia di piani è parallela: è un **prisma**, i piani si tagliano a due a due in tre rette parallele.
>
> **Controllo.** Per $k = -2$ le rette di intersezione sono parallele al vettore $(1, 1, 1)$: $\vec{n}_1 \cdot (1,1,1) = 1 + 1 - 2 = 0$, e lo stesso per $\vec{n}_2$ e $\vec{n}_3$. Sommando le tre equazioni con $k = -2$: $0x + 0y + 0z = 3$, la riga $0 = 3$ trovata nella riduzione.

**Esercizio 8.** Al variare di $k \in \mathbb{R}$, le equazioni
$$
\begin{cases} x + 2y - z = 1 \\ 2x + 4y - 2z = k \end{cases}
$$
descrivono una retta? Dire cosa descrivono in ogni caso e, quando possibile, scriverne le equazioni parametriche.

> [!example]- Soluzione
> **Come lo riconosco.** Cartesiane con due equazioni: prima di scrivere parametriche si controlla il rango, che deve essere $2$ per avere una retta.
>
> $E_{21}(-2)$: $R_2 - 2R_1 = (0, 0, 0 \mid k - 2)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 0 & 0 & k - 2 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 1$ **per ogni** $k$: i normali $(1, 2, -1)$ e $(2, 4, -2)$ sono proporzionali. Non è **mai** una retta.
> - $k \neq 2$: $\operatorname{rg}([A \mid \vec{b}]) = 2$, incompatibile: due **piani paralleli distinti**, nessun punto.
> - $k = 2$: la seconda equazione è il doppio della prima, ranghi $1$ e $1$, $3 - 1 = 2$ parametri: è **un piano**. Colonne libere $y$ e $z$: $y = t$, $z = s$, $x = 1 - 2t + s$.
>
> **Controllo.** $k = 2$: $(1 - 2t + s) + 2t - s = 1$, e il doppio dà $2 = k$.

**Esercizio 9.** Siano $r: \begin{cases} x - z = 1 \\ y - z = 0 \end{cases}$ e, per $k \in \mathbb{R}$, $\pi_k: (k^2 - k)x + y - z = k$. Stabilire per quali $k$ la retta è incidente al piano, parallela, contenuta; nel caso incidente trovare il punto.

> [!tip]- Indizio
> I punti comuni sono le soluzioni del sistema di tre equazioni. Contenuta vuol dire infinite soluzioni, parallela nessuna, incidente una.

> [!example]- Soluzione
> **Come lo riconosco.** Posizione retta-piano con parametro: invece di confrontare direzione e normale, si scrive un unico sistema con le due equazioni di $r$ e quella di $\pi_k$ e lo si discute con Rouché-Capelli. Un punto, nessuno o tutta la retta: è la classificazione di [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/).
>
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & -1 & 1 \\ 0 & 1 & -1 & 0 \\ k^2-k & 1 & -1 & k \end{array}\right]
> $$
> - $E_{31}(-(k^2 - k))$: $R_3 - (k^2-k)R_1 = (0,\ 1,\ -1 + (k^2 - k) \mid k - (k^2 - k)) = (0,\ 1,\ k^2 - k - 1 \mid 2k - k^2)$;
> - $E_{32}(-1)$: $R_3 - R_2 = (0,\ 0,\ k^2 - k \mid 2k - k^2) = (0, 0, k(k-1) \mid k(2-k))$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & -1 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & 0 & k(k-1) & k(2-k) \end{array}\right]
> $$
> Critici: $k = 0$ e $k = 1$.
> - $k = 0$: terza riga $(0, 0, 0 \mid 0)$, ranghi $2$ e $2$, infinite soluzioni con $1$ parametro: sono i punti di $r$, quindi $r$ è **contenuta** in $\pi_0: y - z = 0$.
> - $k = 1$: terza riga $(0, 0, 0 \mid 1)$, ranghi $2$ e $3$: nessun punto comune, $r$ è **parallela** a $\pi_1: y - z = 1$.
> - $k \neq 0, 1$: ranghi $3$ e $3$, un punto: **incidente**. Dividendo per $k(k-1) \neq 0$: $z = \frac{k(2-k)}{k(k-1)} = \frac{2-k}{k-1}$. Seconda riga: $y = z = \frac{2-k}{k-1}$. Prima: $x = 1 + z = \frac{k - 1 + 2 - k}{k-1} = \frac{1}{k-1}$.
> $$
> P_k = \left(\frac{1}{k-1},\ \frac{2-k}{k-1},\ \frac{2-k}{k-1}\right)
> $$
> **Controllo.** Direzione di $r$: $\vec{v} = (1, 1, 1)$ (da $x = 1 + z$, $y = z$). Normale di $\pi_k$: $(k^2 - k, 1, -1)$, e $\vec{n} \cdot \vec{v} = k^2 - k + 1 - 1 = k(k-1)$: si annulla proprio per $k = 0, 1$, i casi "parallela o contenuta". Con $k = 2$: $P_2 = (1, 0, 0)$, che sta su $r$ ($1 - 0 = 1$, $0 - 0 = 0$) e su $\pi_2: 2x + y - z = 2$ ($2 + 0 - 0 = 2$).

**Esercizio 10** (livello 30). Dato il sistema
$$
\begin{cases} x + y + z = 1 \\ x + 2y + kz = 2 \\ x + 2y + (k^2 - 2k + 2)z = k + 1 \\ 2x + 3y + (k + 1)z = 3 \end{cases} \qquad (k \in \mathbb{R})
$$
a) calcolare $\operatorname{rg}(A)$ e $\operatorname{rg}([A \mid \vec{b}])$ al variare di $k$; b) dire per quali $k$ il sistema è compatibile, e in quali casi ha soluzione unica; c) scrivere tutte le soluzioni in ogni caso.

> [!tip]- Indizio
> Quattro equazioni e tre incognite, come l'esempio 4 della prof: una riga si annullerà. Il pivot con $k$ sarà di secondo grado; fattorizzalo.

> [!example]- Soluzione
> **Come lo riconosco.** Sistema con parametro, più equazioni che incognite. Si confronta il rango con $n = 3$; il pivot $1$ in alto a sinistra è già senza parametro.
>
> **Riduzione, prima colonna.**
> - $E_{21}(-1)$: $R_2 - R_1 = (0,\ 1,\ k - 1 \mid 1)$;
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ 1,\ k^2 - 2k + 1 \mid k) = (0,\ 1,\ (k-1)^2 \mid k)$;
> - $E_{41}(-2)$: $R_4 - 2R_1 = (0,\ 1,\ k + 1 - 2 \mid 3 - 2) = (0,\ 1,\ k - 1 \mid 1)$.
>
> **Seconda colonna**, pivot $1$ nella seconda riga.
> - $E_{42}(-1)$: $R_4 - R_2 = (0, 0, 0 \mid 0)$: la quarta equazione era la somma delle prime due, si cancella;
> - $E_{32}(-1)$: $R_3 - R_2 = (0,\ 0,\ (k-1)^2 - (k-1) \mid k - 1)$. Raccolgo $k - 1$: $(k-1)(k - 1 - 1) = (k-1)(k-2)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & k-1 & 1 \\ 0 & 0 & (k-1)(k-2) & k-1 \end{array}\right]
> $$
> **a) Ranghi.** Critici $k = 1$ e $k = 2$.
>
> | $k$ | terza riga | $\operatorname{rg}(A)$ | $\operatorname{rg}([A \vert \vec{b}])$ |
> | --- | --- | --- | --- |
> | $k \neq 1, 2$ | pivot $(k-1)(k-2) \neq 0$ | $3$ | $3$ |
> | $k = 1$ | $(0, 0, 0 \vert 0)$ | $2$ | $2$ |
> | $k = 2$ | $(0, 0, 0 \vert 1)$ | $2$ | $3$ |
>
> **b)** Compatibile per $k \neq 2$. Soluzione unica per $k \neq 1, 2$ (rango $3 = n$); infinite per $k = 1$ ($3 - 2 = 1$ parametro); per $k = 2$ la terza equazione dice $0 = 1$.
>
> **c) $k \neq 1, 2$.** Si risale dal basso.
> - Terza riga, divisa per $(k-1)(k-2) \neq 0$: $z = \frac{k-1}{(k-1)(k-2)} = \frac{1}{k-2}$ (semplifico $k - 1 \neq 0$).
> - Seconda: $y = 1 - (k-1)z = 1 - \frac{k-1}{k-2} = \frac{k - 2 - k + 1}{k-2} = -\frac{1}{k-2}$.
> - Prima: $x = 1 - y - z = 1 + \frac{1}{k-2} - \frac{1}{k-2} = 1$.
> $$
> (x, y, z) = \left(1,\ -\frac{1}{k-2},\ \frac{1}{k-2}\right)
> $$
> **c) $k = 1$.** Restano $(1, 1, 1 \mid 1)$ e $(0, 1, 0 \mid 1)$: $y = 1$, colonna di $z$ libera, $x = 1 - 1 - z = -z$.
> $$
> \begin{cases} x = -z \\ y = 1 \end{cases} \qquad z \in \mathbb{R}
> $$
> **Controllo.** $k = 3$: $(1, -1, 1)$. Prima $1 - 1 + 1 = 1$; seconda $1 - 2 + 3 = 2$; terza, con coefficiente $k^2 - 2k + 2 = 5$: $1 - 2 + 5 = 4 = k + 1$; quarta $2 - 3 + 4 = 3$. $k = 1$, $z = 2$: $(-2, 1, 2)$; prima $-2 + 1 + 2 = 1$; seconda $-2 + 2 + 2 = 2$; terza, con coefficiente $1 - 2 + 2 = 1$: $-2 + 2 + 2 = 2 = k + 1$; quarta $-4 + 3 + 4 = 3$. Il denominatore $k - 2$ della soluzione si annulla proprio nel caso incompatibile, come nell'esempio della prof.

**Esercizio 11** (teoria). Rispondere motivando con Rouché-Capelli.

- a) Un sistema di $2$ equazioni in $3$ incognite può avere soluzione unica?
- b) Un sistema omogeneo di $3$ equazioni in $5$ incognite può essere incompatibile? Quante soluzioni ha?
- c) Dare un esempio di sistema di $3$ equazioni in $2$ incognite con infinite soluzioni.
- d) Una matrice $A$ $4 \times 3$ ha rango $3$. Il sistema $A\vec{x} = \vec{b}$ è compatibile per ogni $\vec{b}$?

> [!example]- Soluzione
> **Come lo riconosco.** Domande senza conti: si usa $\operatorname{rg}(A) \leq \min(m, n)$ e il teorema.
>
> - a) **No.** $\operatorname{rg}(A) \leq m = 2 < 3 = n$: se è compatibile, è nel caso 2 (infinite); altrimenti nessuna.
> - b) **No**, è omogeneo: l'ultima colonna è di zeri e non ha mai pivot, ranghi uguali. Ha **infinite** soluzioni, con almeno $5 - 3 = 2$ parametri, perché $\operatorname{rg}(A) \leq 3$.
> - c) Tre rette coincidenti: $\begin{cases} x + y = 1 \\ 2x + 2y = 2 \\ 3x + 3y = 3 \end{cases}$. $E_{21}(-2)$ ed $E_{31}(-3)$ annullano seconda e terza riga: ranghi $1$ e $1 < 2$, infinite soluzioni $(1 - t, t)$.
> - d) **No.** La forma a scalini di $A$ ha tre pivot su quattro righe, quindi almeno una riga nulla in $A$, e $\vec{b}$ può mettere in quella riga un $c \neq 0$: allora $\operatorname{rg}([A \mid \vec{b}]) = 4$. Esempio: $A$ con righe $(1,0,0), (0,1,0), (0,0,1), (0,0,0)$ e $\vec{b} = (0, 0, 0, 1)$: l'ultima equazione è $0 = 1$. Quando è compatibile, però, la soluzione è unica ($\operatorname{rg} = 3 = n$).
>
> **Controllo.** c): $(1 - t) + t = 1$, e le altre due equazioni sono multiple della prima.

---
title: Dipendenza lineare (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-19
lezioni: []
ordine: 13
---

Esercizi tipo esame di [Dipendenza lineare](/uni/gal/dipendenza-lineare/), dove stanno definizioni, criterio, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Prima di ogni soluzione: in $\mathbb{R}^n$ criterio col rango (confronto con $k$, il numero di vettori), fuori da $\mathbb{R}^n$ la definizione.

**Esercizio 1** (facile). Dire se $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$, con $\vec{v}_1 = (1, 2, 1)$, $\vec{v}_2 = (2, 1, 0)$, $\vec{v}_3 = (1, -1, -1)$, è linearmente indipendente. Se non lo è, trovare una relazione e scrivere $\vec{v}_3$ come combinazione di $\vec{v}_1$ e $\vec{v}_2$.

> [!example]- Soluzione
> **Tipo**: indipendenza in $\mathbb{R}^3$, criterio (b). $k = 3 = n$: l'osservazione $k \leq n$ non decide, serve il rango.
> $$
> A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3] = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & -1 \\ 1 & 0 & -1 \end{pmatrix}
> $$
> - $E_{21}(-2)$: $R_2 - 2R_1 = (2 - 2,\ 1 - 4,\ -1 - 2) = (0, -3, -3)$;
> - $E_{31}(-1)$: $R_3 - R_1 = (1 - 1,\ 0 - 2,\ -1 - 1) = (0, -2, -2)$;
> - $D_2(-\frac13)$: $R_2 = (0, 1, 1)$;
> - $E_{32}(2)$: $R_3 + 2R_2 = (0,\ -2 + 2,\ -2 + 2) = (0, 0, 0)$.
>
> Due pivot: $\operatorname{rg}(A) = 2 < 3$, **dipendente**. Per la relazione completo la forma ridotta: $E_{12}(-2)$, $R_1 - 2R_2 = (1,\ 2 - 2,\ 1 - 2) = (1, 0, -1)$.
> $$
> \operatorname{rref}(A) = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> Colonna 3 senza pivot, elementi $-1, 1$: $\vec{v}_3 = -\vec{v}_1 + \vec{v}_2$, cioè $\vec{v}_1 - \vec{v}_2 + \vec{v}_3 = \vec{0}$.
>
> **Verifica**: $-(1, 2, 1) + (2, 1, 0) = (1, -1, -1) = \vec{v}_3$. I tre vettori stanno sul piano per l'origine $\mathrm{Span}(\vec{v}_1, \vec{v}_2)$.

**Esercizio 2.** In $M_2(\mathbb{R})$:

- a) dire se $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, $S = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $J = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ sono linearmente indipendenti;
- b) stessa domanda per $B_1 = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, $B_2 = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $B_3 = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$.

> [!example]- Soluzione
> **Tipo**: indipendenza fuori da $\mathbb{R}^n$: si usa la definizione, combinazione generica uguale alla matrice nulla.
>
> **a)** $\lambda_1 I + \lambda_2 S + \lambda_3 J = \begin{pmatrix} \lambda_1 + \lambda_3 & \lambda_2 + \lambda_3 \\ \lambda_2 + \lambda_3 & \lambda_1 + \lambda_3 \end{pmatrix} = O$ dà due sole equazioni distinte, $\lambda_1 + \lambda_3 = 0$ e $\lambda_2 + \lambda_3 = 0$. Tre incognite e due equazioni: c'è una soluzione non nulla, per esempio $\lambda_3 = -1$, $\lambda_1 = \lambda_2 = 1$. **Dipendenti**: $I + S - J = O$, cioè $J = I + S$.
>
> Verifica: $I + S = \begin{pmatrix} 1 + 0 & 0 + 1 \\ 0 + 1 & 1 + 0 \end{pmatrix} = J$.
>
> **b)** $\lambda_1 B_1 + \lambda_2 B_2 + \lambda_3 B_3 = \begin{pmatrix} \lambda_1 & \lambda_1 + \lambda_2 \\ \lambda_2 + \lambda_3 & \lambda_3 \end{pmatrix} = O$.
> - posto $(1, 1)$: $\lambda_1 = 0$;
> - posto $(2, 2)$: $\lambda_3 = 0$;
> - posto $(1, 2)$: $\lambda_2 = -\lambda_1 = 0$;
> - posto $(2, 1)$: $0 + 0 = 0$, torna.
>
> Solo la soluzione nulla: **indipendenti**.

**Esercizio 3.** In $\mathbb{R}[x]_2$ (polinomi di grado al più $2$):

- a) $\{1 + x,\ x + x^2,\ 1 + x^2\}$ è linearmente indipendente?
- b) e $\{1 + x,\ x + x^2,\ 1 - x^2\}$?

> [!tip]- Indizio
> Un polinomio è il polinomio nullo se e solo se **tutti** i suoi coefficienti sono $0$. Raccogli per potenze di $x$.

> [!example]- Soluzione
> **Tipo**: indipendenza fra polinomi, con la definizione. Il vettore nullo di $\mathbb{R}[x]_2$ è il polinomio nullo $0 + 0x + 0x^2$.
>
> **a)** $a(1 + x) + b(x + x^2) + c(1 + x^2) = (a + c) + (a + b)x + (b + c)x^2$, raccogliendo per potenze. È il polinomio nullo se e solo se
> $$
> \begin{cases} a + c = 0 \\ a + b = 0 \\ b + c = 0 \end{cases}
> $$
> - dalla prima $c = -a$, dalla seconda $b = -a$;
> - nella terza: $-a - a = 0$, quindi $a = 0$, e poi $b = c = 0$.
>
> **Indipendente.**
>
> **b)** $(1 + x) - (x + x^2) = 1 - x^2$: il terzo è la differenza dei primi due. Quindi $(1 + x) - (x + x^2) - (1 - x^2) = 0$ con coefficienti $1, -1, -1$ non nulli: **dipendente**.
>
> Verifica col sistema: $a(1 + x) + b(x + x^2) + c(1 - x^2) = (a + c) + (a + b)x + (b - c)x^2$, e $a = 1$, $b = -1$, $c = -1$ dà $0$, $0$, $0$.

**Esercizio 4** (con parametro). Per quali $k \in \mathbb{R}$ i vettori $\vec{v}_1 = (1, k, 0)$, $\vec{v}_2 = (0, 1, k)$, $\vec{v}_3 = (k, 0, 1)$ sono linearmente indipendenti? Per i valori esclusi trovare la relazione.

> [!tip]- Indizio
> Con i vettori in colonna la prima riga è $(1, 0, k)$: pivot $1$ senza parametro. Due passi e il terzo pivot è un polinomio di terzo grado in $k$: cerca una radice intera e fattorizza.

> [!example]- Soluzione
> **Tipo**: indipendenza con parametro, criterio (b).
> $$
> A = \begin{pmatrix} 1 & 0 & k \\ k & 1 & 0 \\ 0 & k & 1 \end{pmatrix}
> $$
> - $E_{21}(-k)$: $R_2 - kR_1 = (k - k,\ 1 - 0,\ 0 - k^2) = (0, 1, -k^2)$; se $k = 0$ il passo non serve e la formula dà la stessa riga;
> - $E_{32}(-k)$: $R_3 - kR_2 = (0,\ k - k,\ 1 + k^3) = (0, 0, 1 + k^3)$.
> $$
> \begin{pmatrix} 1 & 0 & k \\ 0 & 1 & -k^2 \\ 0 & 0 & 1 + k^3 \end{pmatrix}
> $$
> Pivot usati $1$ e $1$: nessuna divisione per espressioni in $k$. Il terzo pivot: $1 + k^3 = (k + 1)(k^2 - k + 1)$ (somma di cubi; si controlla moltiplicando: $k^3 - k^2 + k + k^2 - k + 1 = k^3 + 1$). Il fattore $k^2 - k + 1$ non si annulla mai: il discriminante è $1 - 4 = -3 < 0$. Quindi $1 + k^3 = 0 \iff k = -1$.
> - $k \neq -1$: rango $3 = k$, **indipendenti**.
> - $k = -1$: terza riga nulla, rango $2$, **dipendenti**.
>
> **Relazione per $k = -1$.** La matrice a scalini diventa $\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$, già ridotta. Colonna 3: $\vec{v}_3 = -\vec{v}_1 - \vec{v}_2$, cioè $\vec{v}_1 + \vec{v}_2 + \vec{v}_3 = \vec{0}$.
>
> **Verifica**: $(1, -1, 0) + (0, 1, -1) + (-1, 0, 1) = (0, 0, 0)$.

**Esercizio 5** (dispensa, esercizio 16, <span class="src">p. 102</span>). Siano $\vec{v}_1 = (1, 0, 2, -2)$, $\vec{v}_2 = (2, -1, 0, 1)$, $\vec{v}_3 = (3, -1, k + 1, -k) \in \mathbb{R}^4$.

- a) Determinare per quali $k$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è linearmente indipendente.
- b) Per ogni $k$, esprimere $\mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ come insieme delle soluzioni di un sistema lineare omogeneo.

> [!tip]- Indizio
> È lo stesso schema dell'esercizio della prof in $\mathbb{R}^5$: una sola riduzione di $[A \mid \vec{x}]$ con $\vec{x} = (x, y, z, w)$ in lettere.

> [!example]- Soluzione
> **Tipo**: indipendenza con parametro più equazioni dello Span. Riduco $[A \mid \vec{x}]$.
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & 3 & x \\ 0 & -1 & -1 & y \\ 2 & 0 & k + 1 & z \\ -2 & 1 & -k & w \end{array}\right]
> $$
> - $E_{31}(-2)$: $R_3 - 2R_1 = (0,\ -4,\ k + 1 - 6 \mid z - 2x) = (0, -4, k - 5 \mid -2x + z)$;
> - $E_{41}(2)$: $R_4 + 2R_1 = (0,\ 1 + 4,\ -k + 6 \mid w + 2x) = (0, 5, 6 - k \mid 2x + w)$;
> - $E_{32}(-4)$: $R_3 - 4R_2 = (0,\ -4 + 4,\ k - 5 + 4 \mid -2x + z - 4y) = (0, 0, k - 1 \mid -2x - 4y + z)$;
> - $E_{42}(5)$: $R_4 + 5R_2 = (0,\ 5 - 5,\ 6 - k - 5 \mid 2x + w + 5y) = (0, 0, 1 - k \mid 2x + 5y + w)$;
> - $E_{43}(1)$: $R_4 + R_3 = (0, 0, 1 - k + k - 1 \mid 2x + 5y + w - 2x - 4y + z) = (0, 0, 0 \mid y + z + w)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & 3 & x \\ 0 & -1 & -1 & y \\ 0 & 0 & k - 1 & -2x - 4y + z \\ 0 & 0 & 0 & y + z + w \end{array}\right]
> $$
> Nota: $E_{43}(1)$ usa come "pivot" $k - 1$ senza dividere per lui, quindi vale per ogni $k$.
>
> **a)** $k \neq 1$: tre pivot, **indipendenti**. $k = 1$: rango $2$, **dipendenti**; dalla forma ridotta (o a occhio) $\vec{v}_3 = \vec{v}_1 + \vec{v}_2$: $(1, 0, 2, -2) + (2, -1, 0, 1) = (3, -1, 2, -1)$, che è $\vec{v}_3$ con $k = 1$.
>
> **b)**
> - $k \neq 1$: una sola riga nulla a sinistra. $\mathrm{Span} = \{(x, y, z, w) : y + z + w = 0\}$.
> - $k = 1$: anche la terza è nulla. $\mathrm{Span} = \{2x + 4y - z = 0,\ y + z + w = 0\}$ (la prima moltiplicata per $-1$).
>
> **Verifica.** $y + z + w$ su $\vec{v}_1$: $0 + 2 - 2 = 0$; su $\vec{v}_2$: $-1 + 0 + 1 = 0$; su $\vec{v}_3$: $-1 + k + 1 - k = 0$ per ogni $k$. $2x + 4y - z$ su $\vec{v}_1$: $2 + 0 - 2 = 0$; su $\vec{v}_2$: $4 - 4 - 0 = 0$; su $\vec{v}_3$: $6 - 4 - (k + 1) = 1 - k$, nullo solo per $k = 1$. Coincide con la soluzione della dispensa.

**Esercizio 6** (livello del parziale, dispensa esercizio 15, <span class="src">p. 102</span>). In $\mathbb{R}^5$:
$$
\vec{v}_1 = (1, 0, 0, 1, 0), \quad \vec{v}_2 = (0, 1, 1, 2, 0), \quad \vec{v}_3 = (0, 2, 0, 4, 1), \quad \vec{v}_4 = (3, -1, 1, k - 1, -1)
$$

- a) Descrivere $\mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ come spazio delle soluzioni di un sistema lineare omogeneo in $x_1, \ldots, x_5$.
- b) Per quali $k$ il vettore $\vec{v}_4$ appartiene a $\mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$? Per quei valori, scrivere $\vec{v}_4$ come combinazione di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.
- c) Per quali $k$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è linearmente indipendente?

> [!example]- Soluzione
> **Tipo**: equazioni di uno Span, appartenenza con parametro, indipendenza. Le stesse operazioni servono per tutto: le faccio su $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{x}]$ e poi le ripeto con $\vec{v}_4$ al posto di $\vec{x}$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 0 & x_1 \\ 0 & 1 & 2 & x_2 \\ 0 & 1 & 0 & x_3 \\ 1 & 2 & 4 & x_4 \\ 0 & 0 & 1 & x_5 \end{array}\right]
> $$
> - $E_{41}(-1)$: $R_4 - R_1 = (0, 2, 4 \mid x_4 - x_1)$;
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, -2 \mid x_3 - x_2)$;
> - $E_{42}(-2)$: $R_4 - 2R_2 = (0, 0, 0 \mid x_4 - x_1 - 2x_2)$;
> - $S_{35}$: porto su $(0, 0, 1 \mid x_5)$, pivot $1$;
> - $E_{53}(2)$: $R_5 + 2R_3 = (0, 0, -2 + 2 \mid x_3 - x_2 + 2x_5) = (0, 0, 0 \mid -x_2 + x_3 + 2x_5)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 0 & x_1 \\ 0 & 1 & 2 & x_2 \\ 0 & 0 & 1 & x_5 \\ 0 & 0 & 0 & -x_1 - 2x_2 + x_4 \\ 0 & 0 & 0 & -x_2 + x_3 + 2x_5 \end{array}\right]
> $$
> **a)** Rango $3$, due righe nulle:
> $$
> \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3) = \{x_1 + 2x_2 - x_4 = 0,\ x_2 - x_3 - 2x_5 = 0\}
> $$
> Verifica: $\vec{v}_1$: $1 + 0 - 1 = 0$, $0$; $\vec{v}_2$: $0 + 2 - 2 = 0$, $1 - 1 - 0 = 0$; $\vec{v}_3$: $0 + 4 - 4 = 0$, $2 - 0 - 2 = 0$.
>
> **b)** Sostituisco $\vec{v}_4 = (3, -1, 1, k - 1, -1)$ nelle due equazioni:
> - $3 + 2(-1) - (k - 1) = 3 - 2 - k + 1 = 2 - k$;
> - $-1 - 1 - 2(-1) = 0$.
>
> $\vec{v}_4 \in \mathrm{Span}$ se e solo se $2 - k = 0$: **$k = 2$**. Coefficienti: la colonna di $\vec{v}_4$ dopo le stesse operazioni è $(3, -1, -1, k - 2, 0)$ (prime tre componenti $x_1$, $x_2$, $x_5$). Risalgo con $k = 2$: $\lambda_3 = -1$; $\lambda_2 + 2\lambda_3 = -1$, quindi $\lambda_2 = 1$; $\lambda_1 = 3$.
> $$
> \vec{v}_4 = 3\vec{v}_1 + \vec{v}_2 - \vec{v}_3
> $$
> Verifica: $(3, 0, 0, 3, 0) + (0, 1, 1, 2, 0) - (0, 2, 0, 4, 1) = (3, -1, 1, 1, -1)$, che è $\vec{v}_4$ con $k - 1 = 1$.
>
> **c)** La matrice $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4]$ ridotta come sopra ha quarta colonna $(3, -1, -1, k - 2, 0)$: il quarto pivot è $k - 2$ (in riga 4). Il rango è $4$, pari al numero di vettori, se e solo se $k \neq 2$. **Indipendenti per $k \neq 2$**; per $k = 2$ la relazione è quella di b). Due domande diverse, stessa risposta: $\vec{v}_1, \vec{v}_2, \vec{v}_3$ sono indipendenti, quindi aggiungere $\vec{v}_4$ rompe l'indipendenza esattamente quando $\vec{v}_4$ sta nel loro Span (esercizio 7b).

**Esercizio 7** (livello del 30, teoria). Sia $V$ uno spazio vettoriale.

- a) Dimostrare che un sottoinsieme di un insieme linearmente indipendente è linearmente indipendente.
- b) Siano $\{\vec{v}_1, \ldots, \vec{v}_k\}$ linearmente indipendente e $\vec{w} \notin \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$. Dimostrare che $\{\vec{v}_1, \ldots, \vec{v}_k, \vec{w}\}$ è linearmente indipendente.
- c) Dimostrare che se $\{\vec{v}, \vec{w}\}$ è indipendente, anche $\{\vec{v} + \vec{w},\ \vec{v} - \vec{w}\}$ lo è.

> [!example]- Soluzione
> **a)** Sia $\{\vec{v}_1, \ldots, \vec{v}_k\}$ indipendente e, riordinando, consideriamo $\{\vec{v}_1, \ldots, \vec{v}_j\}$ con $j \leq k$. Se $\lambda_1\vec{v}_1 + \cdots + \lambda_j\vec{v}_j = \vec{0}$, allora anche
> $$
> \lambda_1\vec{v}_1 + \cdots + \lambda_j\vec{v}_j + 0\vec{v}_{j+1} + \cdots + 0\vec{v}_k = \vec{0}
> $$
> e per l'indipendenza dell'insieme grande tutti i coefficienti sono nulli, in particolare $\lambda_1 = \cdots = \lambda_j = 0$. $\square$ (Detto al contrario: un insieme che contiene un sottoinsieme dipendente è dipendente.)
>
> **b)** Sia $\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k + \mu\vec{w} = \vec{0}$.
> - Se fosse $\mu \neq 0$, dividendo per $\mu$: $\vec{w} = -\frac{\lambda_1}{\mu}\vec{v}_1 - \cdots - \frac{\lambda_k}{\mu}\vec{v}_k \in \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$, contro l'ipotesi. Quindi $\mu = 0$.
> - Resta $\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k = \vec{0}$, e per l'indipendenza dei $\vec{v}_i$ tutti i $\lambda_i$ sono nulli. $\square$
>
> **c)** Sia $a(\vec{v} + \vec{w}) + b(\vec{v} - \vec{w}) = \vec{0}$. Distribuendo e raccogliendo (proprietà (8), (7)): $(a + b)\vec{v} + (a - b)\vec{w} = \vec{0}$. Per l'indipendenza di $\{\vec{v}, \vec{w}\}$: $a + b = 0$ e $a - b = 0$. Sommando $2a = 0$, quindi $a = 0$ e $b = 0$. $\square$

**Esercizio 8** (vero o falso, con motivazione).

- a) Se $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è dipendente, allora $\vec{v}_3 \in \mathrm{Span}(\vec{v}_1, \vec{v}_2)$.
- b) Se $\{\vec{v}_1, \vec{v}_2\}$ e $\{\vec{v}_2, \vec{v}_3\}$ sono indipendenti, allora $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è indipendente.
- c) Quattro vettori di $\mathbb{R}^3$ sono sempre linearmente dipendenti.
- d) Le colonne di una matrice $A \in M_n(\mathbb{R})$ invertibile sono linearmente indipendenti.
- e) Se un insieme di vettori di $\mathbb{R}^n$ è indipendente, ogni vettore del suo Span si scrive in un modo solo come combinazione di quei vettori.

> [!example]- Soluzione
> **Come lo riconosco.** Ognuna si decide con la definizione, con il criterio (b) o con un controesempio con i numeri.
>
> **a)** **Falso**. $\vec{v}_1 = (1, 0)$, $\vec{v}_2 = (2, 0)$, $\vec{v}_3 = (0, 1)$: dipendenti ($2\vec{v}_1 - \vec{v}_2 = \vec{0}$), ma $(0, 1)$ non è combinazione di $(1, 0)$ e $(2, 0)$. Il vettore che si scrive con gli altri è uno con coefficiente non nullo nella relazione.
>
> **b)** **Falso**. $\vec{v}_1 = (1, 0)$, $\vec{v}_2 = (0, 1)$, $\vec{v}_3 = (1, 1)$: le due coppie sono indipendenti (non parallele), ma $\vec{v}_1 + \vec{v}_2 - \vec{v}_3 = \vec{0}$. Già tre vettori di $\mathbb{R}^2$ sono sempre dipendenti.
>
> **c)** **Vero**. $A$ è $3 \times 4$, rango al massimo $3 < 4$: per la proposizione (b) non sono indipendenti.
>
> **d)** **Vero**. $A$ invertibile se e solo se $\operatorname{rg}(A) = n$ ([Matrici invertibili](/uni/gal/matrici-invertibili/)), e $n$ è il numero di colonne: per la proposizione (b) le colonne sono indipendenti.
>
> **e)** **Vero**. Se $\vec{v} = \sum \lambda_i\vec{v}_i = \sum \mu_i\vec{v}_i$, sottraendo $\sum(\lambda_i - \mu_i)\vec{v}_i = \vec{0}$, e per l'indipendenza $\lambda_i = \mu_i$. È il conto della prof per l'unicità delle coordinate in una base ([Basi](/uni/gal/basi/)).

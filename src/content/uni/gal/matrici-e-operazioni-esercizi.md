---
title: Matrici e operazioni (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-05
lezioni: []
ordine: 7
---

Esercizi tipo esame di [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Prima di aprire la soluzione, scrivi almeno il tipo e il metodo (tabella del Metodo).

**Esercizio 1** (domanda 3.1 del foglio 3). Quando è possibile definire il prodotto righe per colonne di due matrici? In tal caso, come si definisce? Illustrare con un esempio.

> [!tip]- Indizio
> Tre pezzi: la condizione sugli ordini, la formula di $c_{ik}$ con l'ordine del risultato, un esempio in cui si vede anche che $BA$ può non esistere.

> [!example]- Soluzione
> *Tipo*: domanda di teoria. *Come si imposta*: definizione con le parole della prof, poi la formula spiegata a parole, poi un esempio piccolo calcolato.
>
> 1. **Quando.** $AB$ si può definire se $A$ è conformabile a sinistra a $B$: il numero di colonne di $A$ è uguale al numero di righe di $B$. Con $A \in M_{m \times n}(\mathbb{R})$ serve $B \in M_{n \times p}(\mathbb{R})$.
> 2. **Come.** $AB = C = [c_{ik}] \in M_{m \times p}(\mathbb{R})$ con $c_{ik} = \sum_{j=1}^n a_{ij}b_{jk}$: l'elemento $(i, k)$ è la riga $i$ di $A$ per la colonna $k$ di $B$, prodotti a coppie e somma.
> 3. **Esempio.** $A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$ ($2 \times 2$), $B = \begin{pmatrix} 0 & -2 & 3 \\ 2 & 1 & -2 \end{pmatrix}$ ($2 \times 3$): $AB = \begin{pmatrix} 2 & -3 & 4 \\ -2 & -3 & 5 \end{pmatrix}$, per esempio $c_{12} = 2 \cdot (-2) + 1 \cdot 1 = -3$. Invece $BA$ non è definito: 3 colonne contro 2 righe.
>
> Da aggiungere per una risposta da 30: il prodotto non è commutativo (anche fra quadrate, esempio della prof), ed è definito così perché un sistema si scriva $A\vec{x} = \vec{b}$.

**Esercizio 2.** Siano $A \in M_{2 \times 3}(\mathbb{R})$, $B \in M_{3 \times 3}(\mathbb{R})$, $C \in M_{3 \times 2}(\mathbb{R})$, $D \in M_{2 \times 2}(\mathbb{R})$. Dire quali delle seguenti espressioni sono definite e, per quelle definite, di che ordine è il risultato:
$$
AB,\quad BA,\quad AC,\quad CA,\quad DC,\quad CD,\quad ABC,\quad A^2,\quad D^2,\quad A^TD,\quad A + C^T,\quad AD
$$

> [!example]- Soluzione
> *Tipo*: solo ordini, nessun numero. *Metodo*: per ogni prodotto scrivo $(m \times n)(n' \times p)$ e guardo i numeri interni; per le somme guardo che gli ordini coincidano. *Come lo riconosco*: le matrici sono date solo con l'ordine.
>
> - $AB$: $(2 \times 3)(3 \times 3)$, interni $3 = 3$, **$2 \times 3$**.
> - $BA$: $(3 \times 3)(2 \times 3)$, interni $3 \neq 2$, **non definito**.
> - $AC$: $(2 \times 3)(3 \times 2)$, **$2 \times 2$**.
> - $CA$: $(3 \times 2)(2 \times 3)$, **$3 \times 3$**.
> - $DC$: $(2 \times 2)(3 \times 2)$, interni $2 \neq 3$, **non definito**.
> - $CD$: $(3 \times 2)(2 \times 2)$, **$3 \times 2$**.
> - $ABC$: $AB$ è $2 \times 3$, poi $(2 \times 3)(3 \times 2)$, **$2 \times 2$**. (Anche da destra: $BC$ è $3 \times 2$, poi $(2 \times 3)(3 \times 2)$.)
> - $A^2 = AA$: $(2 \times 3)(2 \times 3)$, **non definito**: le potenze esistono solo per le quadrate.
> - $D^2$: **$2 \times 2$**.
> - $A^TD$: $A^T$ è $3 \times 2$, poi $(3 \times 2)(2 \times 2)$, **$3 \times 2$**.
> - $A + C^T$: $C^T$ è $2 \times 3$ come $A$, **definita, $2 \times 3$**.
> - $AD$: $(2 \times 3)(2 \times 2)$, **non definito**. Invece $DA$ sì, $2 \times 3$.
>
> *Controllo*: in ogni prodotto definito il risultato ha le righe del primo fattore e le colonne dell'ultimo. Per $ABC$: righe di $A$ (2), colonne di $C$ (2).

**Esercizio 3.** Siano
$$
A = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 1 \\ 0 & -1 \\ 1 & 1 \end{pmatrix}
$$
Dire quali fra $A + B$, $2A - B^T$, $AB$, $BA$ sono definiti e calcolarli.

> [!example]- Soluzione
> *Tipo*: operazioni con matrici date. *Metodo*: prima tutti gli ordini (come nell'esercizio 2), poi i conti, poi il controllo con la colonna di uni.
>
> **Ordini.** $A$ è $2 \times 3$, $B$ è $3 \times 2$, $B^T$ è $2 \times 3$.
> - $A + B$: ordini diversi, **non definita**.
> - $2A - B^T$: entrambe $2 \times 3$, definita. $B^T = \begin{pmatrix} 2 & 0 & 1 \\ 1 & -1 & 1 \end{pmatrix}$ (le righe di $B$ diventano colonne) e $2A = \begin{pmatrix} 2 & 0 & 4 \\ -2 & 6 & 2 \end{pmatrix}$, quindi
> $$
> 2A - B^T = \begin{pmatrix} 2 - 2 & 0 - 0 & 4 - 1 \\ -2 - 1 & 6 + 1 & 2 - 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 3 \\ -3 & 7 & 1 \end{pmatrix}
> $$
> - $AB$: $(2 \times 3)(3 \times 2)$, definita, $2 \times 2$. Colonne di $B$: $(2, 0, 1)$ e $(1, -1, 1)$.
>   - riga $(1, 0, 2)$: $1 \cdot 2 + 0 \cdot 0 + 2 \cdot 1 = 4$; $\ 1 \cdot 1 + 0 \cdot (-1) + 2 \cdot 1 = 3$
>   - riga $(-1, 3, 1)$: $-2 + 0 + 1 = -1$; $\ -1 - 3 + 1 = -3$
> - $BA$: $(3 \times 2)(2 \times 3)$, definita, $3 \times 3$. Colonne di $A$: $(1, -1)$, $(0, 3)$, $(2, 1)$.
>   - riga $(2, 1)$: $2 - 1 = 1$; $\ 0 + 3 = 3$; $\ 4 + 1 = 5$
>   - riga $(0, -1)$: $0 + 1 = 1$; $\ 0 - 3 = -3$; $\ 0 - 1 = -1$
>   - riga $(1, 1)$: $1 - 1 = 0$; $\ 0 + 3 = 3$; $\ 2 + 1 = 3$
>
> $$
> AB = \begin{pmatrix} 4 & 3 \\ -1 & -3 \end{pmatrix} \qquad BA = \begin{pmatrix} 1 & 3 & 5 \\ 1 & -3 & -1 \\ 0 & 3 & 3 \end{pmatrix}
> $$
> $AB$ e $BA$ esistono entrambi ma hanno ordini diversi: è il secondo motivo per cui il prodotto non è commutativo.
>
> *Controllo*. Per $AB$: le somme di riga di $B$ sono $(3, -1, 2)$, e $A\begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 3 + 0 + 4 \\ -3 - 3 + 2 \end{pmatrix} = \begin{pmatrix} 7 \\ -4 \end{pmatrix}$; le righe di $AB$ sommano a $4 + 3 = 7$ e $-1 - 3 = -4$. Per $BA$: le somme di riga di $A$ sono $(3, 3)$, e $B\begin{pmatrix} 3 \\ 3 \end{pmatrix} = \begin{pmatrix} 9 \\ -3 \\ 6 \end{pmatrix}$; le righe di $BA$ sommano a $9$, $-3$, $6$.

**Esercizio 4.** Per quali $k \in \mathbb{R}$ la matrice
$$
S(k) = \begin{pmatrix} 1 & k + 1 & 3 \\ 2k & 0 & k^2 \\ 3 & 1 & 5 \end{pmatrix}
$$
è simmetrica?

> [!example]- Soluzione
> *Tipo*: simmetria con parametro. *Come lo riconosco*: "simmetrica" e un parametro. *Metodo*: $S = S^T$ vuol dire $s_{ij} = s_{ji}$ per ogni coppia sopra e sotto la diagonale; ogni coppia è un'equazione in $k$, e devono valere tutte insieme. La diagonale non dà condizioni.
> - $s_{12} = s_{21}$: $k + 1 = 2k$, quindi $k = 1$.
> - $s_{13} = s_{31}$: $3 = 3$, sempre vero.
> - $s_{23} = s_{32}$: $k^2 = 1$, quindi $k = 1$ oppure $k = -1$.
>
> Servono tutte insieme: **$k = 1$**. Controllo: $S(1) = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 0 & 1 \\ 3 & 1 & 5 \end{pmatrix}$, uguale alla sua trasposta. Con $k = -1$ la seconda condizione regge ma la prima no ($0 \neq -2$).

**Esercizio 5** (sul modello del 3.7 del foglio 3). Sia
$$
N = \begin{pmatrix} 0 & 2 & 1 \\ 0 & 0 & 3 \\ 0 & 0 & 0 \end{pmatrix}
$$
Calcolare $N^2$, $N^3$ e $N^k$ per ogni $k \geq 3$.

> [!tip]- Indizio
> $N^3 = N^2 \cdot N$. Una volta trovata una potenza nulla, le successive si ottengono moltiplicando la matrice nulla.

> [!example]- Soluzione
> *Tipo*: potenze di una matrice quadrata. *Come lo riconosco*: $N$ ha zeri sulla diagonale e sotto (solo elementi sopra la diagonale). *Metodo*: calcolo $N^2 = NN$, poi $N^3 = N^2N$, e guardo lo schema.
>
> **$N^2$.** Colonne di $N$: $(0, 0, 0)$, $(2, 0, 0)$, $(1, 3, 0)$.
> - riga $(0, 2, 1)$: per $(0, 0, 0)$ dà $0$; per $(2, 0, 0)$ dà $0 \cdot 2 + 2 \cdot 0 + 1 \cdot 0 = 0$; per $(1, 3, 0)$ dà $0 \cdot 1 + 2 \cdot 3 + 1 \cdot 0 = 6$
> - riga $(0, 0, 3)$: per le tre colonne, $0$, $0$, $0 + 0 + 3 \cdot 0 = 0$
> - riga $(0, 0, 0)$: zeri
> $$
> N^2 = \begin{pmatrix} 0 & 0 & 6 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> **$N^3 = N^2 N$.** L'unica riga non nulla di $N^2$ è $(0, 0, 6)$, e per ogni colonna di $N$ dà $6 \cdot (\text{terzo elemento della colonna}) = 6 \cdot 0 = 0$. Quindi $N^3 = O_3$.
>
> **$N^k$ per $k \geq 3$.** $N^4 = N^3N = O_3N = O_3$, e così via: ogni potenza successiva è la nulla per $N$, che è nulla. **$N^k = O_3$ per ogni $k \geq 3$.**
>
> *Controllo*: $N^3$ anche come $N \cdot N^2$: le colonne di $N^2$ sono $(0, 0, 0)$, $(0, 0, 0)$, $(6, 0, 0)$; riga $(0, 2, 1)$ per $(6, 0, 0)$ dà $0$, e lo stesso le altre righe. Di nuovo $O_3$. Il disegno: a ogni moltiplicazione la "striscia" di elementi non nulli sale di una diagonale verso l'angolo in alto a destra, finché esce.
>
> Si noti che $N \neq O_3$ ma $N^3 = O_3$: con i numeri reali $a^3 = 0$ obbliga $a = 0$, con le matrici no. Il risultato si scrive $O_3$, non $\emptyset$ (che è l'insieme vuoto).

**Esercizio 6.** Sia $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Trovare tutte le matrici $X \in M_2(\mathbb{R})$ tali che $AX = XA$.

> [!example]- Soluzione
> *Tipo*: matrice incognita (sezione Metodo). *Come lo riconosco*: "trovare tutte le $X$". *Metodo*: $X$ con quattro lettere, i due prodotti con le lettere, uguaglianza casella per casella.
>
> Scrivo $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ e calcolo i due prodotti.
> - $AX$: riga $(1, 1)$ per le colonne $(a, c)$ e $(b, d)$ dà $a + c$ e $b + d$; riga $(0, 1)$ dà $c$ e $d$.
> - $XA$: colonne di $A$ sono $(1, 0)$ e $(1, 1)$; riga $(a, b)$ dà $a$ e $a + b$; riga $(c, d)$ dà $c$ e $c + d$.
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
> Verifica con $a = 2$, $b = 5$: $AX = \begin{pmatrix} 2 & 7 \\ 0 & 2 \end{pmatrix}$ e $XA = \begin{pmatrix} 2 & 7 \\ 0 & 2 \end{pmatrix}$. Su quattro parametri liberi ne restano due: commutare con una matrice data è una condizione forte. Per esempio $X = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$ non commuta con $A$. Fra le soluzioni ci sono, come deve essere, $I_2$ ($a = 1$, $b = 0$) e $A$ stessa ($a = 1$, $b = 1$).

**Esercizio 7.** Siano $A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$.

- a) Calcolare $AB$ e $BA$.
- b) Verificare che $(A + B)^2 \neq A^2 + 2AB + B^2$.
- c) Qual è lo sviluppo corretto di $(A + B)^2$ per matrici quadrate qualunque?

> [!example]- Soluzione
> *Tipo*: le regole dei numeri messe alla prova. *Metodo*: calcolare i due lati separatamente; per c) sviluppare con la distributiva senza scambiare fattori.
>
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
> (A + B)^2 = (A + B)(A + B) = (A + B)A + (A + B)B \qquad \text{distributiva a sinistra}
> $$
> $$
> = A^2 + BA + AB + B^2 \qquad \text{distributiva a destra, due volte}
> $$
> Qui $A^2 + AB + BA + B^2 = \begin{pmatrix} 1 + 1 + 0 & 1 + 0 + 0 \\ 0 + 0 + 1 & 0 + 0 + 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, giusto. La formula del binomio con $2AB$ vale solo se $AB = BA$, perché solo allora $AB + BA = 2AB$.

**Esercizio 8.** Sia $A = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ e $B = \begin{pmatrix} 3 & 1 \\ 5 & 1 \end{pmatrix}$. Trovare, se esiste, $X \in M_2(\mathbb{R})$ tale che $AX = B$, senza usare l'inversa.

> [!tip]- Indizio
> La colonna $k$ di $AX$ è $A$ per la colonna $k$ di $X$. Quindi $AX = B$ sono due sistemi $2 \times 2$, uno per colonna, con la stessa matrice $A$.

> [!example]- Soluzione
> *Tipo*: matrice incognita, ma l'equazione è $AX = B$ e non una commutazione. *Come lo riconosco*: $X$ compare una volta sola, a destra di $A$. *Metodo*: $X$ con lettere, $AX$ con lettere, uguaglianza con $B$ casella per casella, sistema lineare. Con l'inversa (L6) si scriverebbe $X = A^{-1}B$; qui si vede che basta Gauss.
>
> 1. $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, ordine $2 \times 2$ perché $(2 \times 2)(2 \times 2) = 2 \times 2$ come $B$.
> 2. $AX$: riga $(1, 1)$ per $(a, c)$ e $(b, d)$ dà $a + c$, $b + d$; riga $(1, 2)$ dà $a + 2c$, $b + 2d$.
> 3. Uguaglio a $B$ casella per casella. Si separano due sistemi, uno per la prima colonna ($a, c$) e uno per la seconda ($b, d$):
> $$
> \begin{cases} a + c = 3 \\ a + 2c = 5 \end{cases} \qquad \begin{cases} b + d = 1 \\ b + 2d = 1 \end{cases}
> $$
> 4. Primo sistema, $R_2 \to R_2 - R_1$: $c = 2$; poi $a = 3 - c = 1$.
> 5. Secondo sistema, $R_2 \to R_2 - R_1$: $d = 0$; poi $b = 1 - d = 1$.
> $$
> X = \begin{pmatrix} 1 & 1 \\ 2 & 0 \end{pmatrix}
> $$
> Ogni sistema ha matrice dei coefficienti $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ di rango 2: soluzione unica ([Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/)), quindi $X$ esiste ed è unica.
>
> *Controllo*: $AX$, riga $(1, 1)$ per le colonne $(1, 2)$ e $(1, 0)$: $3$ e $1$; riga $(1, 2)$: $1 + 4 = 5$ e $1 + 0 = 1$. È $B$. E $XA$? Riga $(1, 1)$ per le colonne $(1, 1)$ e $(1, 2)$: $2$ e $3$, già diverso da $B$: l'equazione $XA = B$ avrebbe un'altra soluzione, l'ordine conta anche qui.

**Esercizio 9.** Per quali $k \in \mathbb{R}$ le matrici
$$
A = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & 1 \\ 0 & k \end{pmatrix}
$$
commutano?

> [!example]- Soluzione
> *Tipo*: commutazione con parametro. *Metodo*: calcolo $AB$ e $BA$ con $k$ dentro, uguaglio casella per casella, risolvo in $k$, poi verifico ogni valore.
>
> - $AB$: riga $(1, k)$ per le colonne $(2, 0)$ e $(1, k)$ dà $2$ e $1 + k^2$; riga $(0, 1)$ dà $0$ e $k$.
> - $BA$: colonne di $A$ sono $(1, 0)$ e $(k, 1)$; riga $(2, 1)$ dà $2$ e $2k + 1$; riga $(0, k)$ dà $0$ e $k$.
> $$
> AB = \begin{pmatrix} 2 & 1 + k^2 \\ 0 & k \end{pmatrix} \qquad BA = \begin{pmatrix} 2 & 2k + 1 \\ 0 & k \end{pmatrix}
> $$
> Tre caselle coincidono sempre. Resta il posto $(1, 2)$:
> $$
> 1 + k^2 = 2k + 1 \iff k^2 - 2k = 0 \iff k(k - 2) = 0 \iff k = 0 \text{ oppure } k = 2
> $$
> *Controllo*. $k = 0$: $A = I_2$, che commuta con tutto. $k = 2$: $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$, e $AB = \begin{pmatrix} 2 & 5 \\ 0 & 2 \end{pmatrix} = BA$ (posto $(1, 2)$: $1 \cdot 1 + 2 \cdot 2 = 5$ e $2 \cdot 2 + 1 \cdot 1 = 5$). Con $k = 1$, per esempio, $AB$ ha $2$ e $BA$ ha $3$ nel posto $(1, 2)$.

**Esercizio 10** (livello del 30). Dire se le affermazioni sono vere o false, motivando (dimostrazione se vera, controesempio se falsa). $A, B \in M_n(\mathbb{R})$, $M \in M_{m \times n}(\mathbb{R})$.

- a) Se $A$ e $B$ sono simmetriche, $A + B$ è simmetrica.
- b) Se $A$ e $B$ sono simmetriche, $AB$ è simmetrica.
- c) $MM^T$ è sempre definita, quadrata e simmetrica.
- d) Se $AB = O_n$, allora $A = O_n$ oppure $B = O_n$.

> [!example]- Soluzione
> *Tipo*: vero/falso sulle definizioni. *Metodo*: per "vero" una prova con gli elementi generici ($a_{ij}$), per "falso" un esempio $2 \times 2$ con numeri. *Come scegliere*: se la proprietà si fa casella per casella (somma) tende a passare; se passa per il prodotto, sospetta.
>
> **a) Vera.** Il posto $(i, j)$ di $A + B$ è $a_{ij} + b_{ij}$. Per la simmetria di $A$ e $B$: $a_{ij} + b_{ij} = a_{ji} + b_{ji}$, che è il posto $(j, i)$ di $A + B$. Quindi $A + B$ è simmetrica.
>
> **b) Falsa.** $A = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ sono simmetriche. $AB$: riga $(1, 0)$ per le colonne $(0, 1)$ e $(1, 0)$ dà $0$ e $1$; riga $(0, 2)$ dà $2$ e $0$:
> $$
> AB = \begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}
> $$
> non simmetrica ($1 \neq 2$).
>
> **c) Vera.** *Definita*: $M$ è $m \times n$, $M^T$ è $n \times m$, e $(m \times n)(n \times m)$ ha i numeri interni uguali. *Quadrata*: il risultato è $m \times m$. *Simmetrica*: la colonna $j$ di $M^T$ è la riga $j$ di $M$, quindi il posto $(i, j)$ di $MM^T$ è (riga $i$ di $M$) per (riga $j$ di $M$), cioè $\sum_k m_{ik}m_{jk}$. Scambiando $i$ e $j$ si ottiene $\sum_k m_{jk}m_{ik}$, la stessa somma (i prodotti di numeri commutano). Quindi il posto $(i, j)$ e il posto $(j, i)$ coincidono.
>
> Esempio di controllo: $M = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$. $MM^T$ è $2 \times 2$: posto $(1, 1)$ è $(1, 2, 3) \cdot (1, 2, 3) = 14$, posto $(1, 2)$ è $(1, 2, 3) \cdot (4, 5, 6) = 32$, posto $(2, 1)$ è $(4, 5, 6) \cdot (1, 2, 3) = 32$, posto $(2, 2)$ è $16 + 25 + 36 = 77$:
> $$
> MM^T = \begin{pmatrix} 14 & 32 \\ 32 & 77 \end{pmatrix}
> $$
> simmetrica. ($M^TM$ è invece $3 \times 3$, anch'essa simmetrica per lo stesso motivo.)
>
> **d) Falsa.** L'esempio della dispensa: $A = \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$. $AB$: riga $(0, 1)$ per le colonne $(1, 0)$ e $(1, 0)$ dà $0$ e $0$, due volte. $AB = O_2$ con $A, B \neq O_2$.

**Esercizio 11** (livello del 30). Sia $A \in M_n(\mathbb{R})$ con $A^2 = O_n$ ($A^2 = AA$).

- a) Dimostrare che $(I_n - A)(I_n + A) = I_n$ e $(I_n + A)(I_n - A) = I_n$.
- b) Verificarlo con $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
- c) Che cosa dice a) su $I_n - A$, con la definizione di [Matrici invertibili](/uni/gal/matrici-invertibili/)?

> [!example]- Soluzione
> **Tipo**: calcolo "a lettere" con le proprietà del prodotto. Si usa solo la distributiva, l'identità e l'ipotesi; l'ordine dei fattori va rispettato.
>
> **a)**
> $$
> (I_n - A)(I_n + A) = (I_n - A)I_n + (I_n - A)A \qquad \text{distributiva a sinistra}
> $$
> $$
> = I_n - A + I_nA - AA \qquad \text{identità e distributiva a destra}
> $$
> $$
> = I_n - A + A - A^2 = I_n - A^2 = I_n - O_n = I_n \qquad \text{identità, ipotesi}
> $$
> L'altro ordine: $(I_n + A)(I_n - A) = I_n - A + A - A^2 = I_n$, con gli stessi passi. Qui funziona perché $A$ commuta con $I_n$ e con sé stessa; il binomio con matrici qualunque non si semplifica così (esercizio 7).
>
> **b)** $A^2$: riga $(0, 1)$ per le colonne $(0, 0)$ e $(1, 0)$ dà $0$ e $0$; riga $(0, 0)$ dà zeri. $A^2 = O_2$. Poi $I_2 - A = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$, $I_2 + A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, e il prodotto ha righe $(1 \cdot 1 + (-1) \cdot 0,\ 1 \cdot 1 + (-1) \cdot 1) = (1, 0)$ e $(0 \cdot 1 + 1 \cdot 0,\ 0 \cdot 1 + 1 \cdot 1) = (0, 1)$. È $I_2$. Nell'altro ordine: riga $(1, 1)$ per le colonne $(1, 0)$ e $(-1, 1)$ dà $1$ e $0$; riga $(0, 1)$ dà $0$ e $1$. Di nuovo $I_2$.
>
> **c)** Le due uguaglianze di a) dicono che $I_n - A$ è **invertibile** con inversa $I_n + A$: è esattamente la definizione ($BA = AB = I_n$ con $B = I_n + A$). Anche se $A$ non è invertibile ($A^2 = O_n$, e una riga nulla in $A$ nell'esempio), $I_n - A$ lo è. Questa parte usa la definizione della L6.

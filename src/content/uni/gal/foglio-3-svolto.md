---
title: Foglio 3 del tutorato svolto
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: completa
data: 2026-10-06
lezioni: []
ordine: 999
---

Il <span class="src">foglio 3</span> del tutorato (domande 3.1-3.6 ed esercizi 3.7-3.8 a <span class="src">p. 1</span>, esercizi 3.9-3.12 a <span class="src">p. 2</span>), argomento di [Geometria e Algebra Lineare](/uni/gal/). A lezione queste cose sono la L5 (5/10) e la L6 (6/10), con l'esercitazione 3 del 12/10. Si appoggia su [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) (operazioni elementari, rref) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/). Definizioni e notazione vengono dal capitolo 3 della <span class="src">dispensa</span>: prodotto <span class="src">p. 66-68</span>, invertibilità <span class="src">p. 69-71</span>, matrici elementari <span class="src">p. 71-73</span>, rango e inversa <span class="src">p. 73-76</span>, struttura delle soluzioni <span class="src">p. 77-79</span> (numeri di pagina del PDF).

Come usarla: prova da solo, apri l'**indizio** se ti blocchi, la **soluzione** solo alla fine. Ogni conto è stato ricontrollato.

## Lo schema

```
prodotto AB          A m×n, B n×q  (colonne di A = righe di B)  ->  AB è m×q
                     (AB)_ik = riga i di A · colonna k di B
                     in generale AB ≠ BA

inversa              [A | I]  --Gauss-Jordan + all'indietro-->  [I | A⁻¹]
                     se a sinistra non viene I  ->  A non è invertibile

invertibile          A n×n invertibile  <=>  rg(A) = n  <=>  rref(A) = I

soluzioni di Ax = b  tutte e sole  x0 + v
                     x0 = una soluzione particolare,  v = soluzione di Ax = 0
```

## Domande di teoria

**Domanda 3.1.** Quando è possibile definire il prodotto righe per colonne di due matrici? E in tal caso, come si definisce? Illustrate con un esempio.

> [!example]- Soluzione
> **Quando.** $AB$ si può fare se il numero di **colonne di $A$** è uguale al numero di **righe di $B$**. La dispensa dice che $A$ è **conformabile a sinistra** a $B$: $A \in M_{m \times n}$, $B \in M_{n \times q}$. Il risultato è $m \times q$: righe di $A$, colonne di $B$.
>
> **Come.** Se $A = [a_{ij}]$ e $B = [b_{jk}]$, allora $AB = C = [c_{ik}]$ con
> $$
> c_{ik} = \sum_{j=1}^{n} a_{ij} b_{jk} = a_{i1}b_{1k} + a_{i2}b_{2k} + \cdots + a_{in}b_{nk}
> $$
> In parole: l'elemento al posto $(i, k)$ è il "prodotto scalare" della riga $i$ di $A$ con la colonna $k$ di $B$. Serve che riga e colonna abbiano la stessa lunghezza $n$, ed è proprio la condizione sulle dimensioni.
>
> **Esempio.** $A$ è $2 \times 3$, $B$ è $3 \times 2$:
> $$
> A = \begin{pmatrix} 1 & 2 & 0 \\ -1 & 1 & 3 \end{pmatrix} \qquad B = \begin{pmatrix} 2 & 1 \\ 0 & -1 \\ 1 & 4 \end{pmatrix}
> $$
> $AB$ è $2 \times 2$. Elemento per elemento:
> - $c_{11} = 1 \cdot 2 + 2 \cdot 0 + 0 \cdot 1 = 2$
> - $c_{12} = 1 \cdot 1 + 2 \cdot (-1) + 0 \cdot 4 = -1$
> - $c_{21} = (-1) \cdot 2 + 1 \cdot 0 + 3 \cdot 1 = 1$
> - $c_{22} = (-1) \cdot 1 + 1 \cdot (-1) + 3 \cdot 4 = 10$
>
> $$
> AB = \begin{pmatrix} 2 & -1 \\ 1 & 10 \end{pmatrix} \qquad BA = \begin{pmatrix} 1 & 5 & 3 \\ 1 & -1 & -3 \\ -3 & 6 & 12 \end{pmatrix}
> $$
> Qui si possono fare tutti e due, ma $BA$ è $3 \times 3$: non ha neanche la stessa forma di $AB$. Anche quando $A$ e $B$ sono quadrate dello stesso ordine, in generale $AB \neq BA$ (lo vedi nell'esercizio 3.7). Il prodotto **non è commutativo**; è invece associativo, $(AB)C = A(BC)$, e distributivo rispetto alla somma.
>
> Un caso che conta: il sistema lineare si scrive $A\vec{x} = \vec{b}$, con $A$ $m \times n$ e $\vec{x}$ colonna $n \times 1$. Il prodotto righe per colonne della riga $i$ di $A$ con $\vec{x}$ è esattamente il primo membro dell'equazione $i$.

**Domanda 3.2.** Dare la definizione di matrice (quadrata) invertibile, fornendo un esempio di una matrice invertibile e un esempio di una matrice non invertibile. Che relazione c'è tra invertibilità e rango?

> [!example]- Soluzione
> **Definizione** (dispensa, Def. 35). $A \in M_n(\mathbb{R})$ è **invertibile** se esiste una matrice quadrata $A^{-1}$ tale che
> $$
> AA^{-1} = A^{-1}A = I_n
> $$
> $A^{-1}$ si chiama **inversa** di $A$ ed è unica: se $B$ e $B'$ fossero due inverse, $B = IB = (B'A)B = B'(AB) = B'I = B'$.
>
> **Esempio invertibile.**
> $$
> A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \qquad A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}
> $$
> Verifica: $AA^{-1}$ ha elementi $2 - 1 = 1$, $-2 + 2 = 0$, $1 - 1 = 0$, $-1 + 2 = 1$, quindi è $I_2$; allo stesso modo $A^{-1}A = I_2$.
>
> **Esempio non invertibile.**
> $$
> C = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}
> $$
> La seconda riga è il doppio della prima. Per qualunque $D$, la riga 2 di $CD$ è $(2, 4) \cdot$ colonne di $D$, cioè il doppio della riga 1 di $CD$. Ma in $I_2$ la riga 2, $(0, 1)$, non è il doppio della riga 1, $(1, 0)$: nessuna $D$ dà $CD = I_2$. Ancora più semplice: una matrice con una riga o una colonna **nulla** non è mai invertibile (dispensa, Oss. 10).
>
> **Invertibilità e rango** (dispensa, Teorema 3.2.3.1):
> $$
> A \in M_n(\mathbb{R}) \text{ invertibile} \iff \operatorname{rg}(A) = n \iff \operatorname{rref}(A) = I_n
> $$
> Nell'esempio, $\operatorname{rg}(A) = 2$ e $\operatorname{rg}(C) = 1 < 2$.
>
> Il perché, in breve: $\operatorname{rref}(A) = PA$ con $P$ prodotto di matrici elementari, quindi invertibile. Se $\operatorname{rg}(A) = n$, la rref quadrata con $n$ pivot è per forza $I_n$, così $PA = I_n$ e $A^{-1} = P$. Se invece $\operatorname{rg}(A) < n$, la rref ha una riga di zeri e non può essere invertibile, quindi neanche $A = P^{-1}\operatorname{rref}(A)$ lo è.

**Domanda 3.3.** Come si costruiscono le matrici delle operazioni elementari? Quali sono le matrici $3 \times 3$ corrispondenti alle operazioni $S_{13}$, $D_2(5)$, $E_{32}(-2)$?

> [!example]- Soluzione
> **Regola.** Si prende la matrice identità $I_m$ e le si applica l'operazione elementare. La matrice che esce fa quell'operazione **moltiplicando a sinistra**: se $M$ è la matrice dell'operazione, $MA$ è $A$ con l'operazione già fatta (dispensa, p. 71).
> - $S_{ij}$: $I$ con le righe $i$ e $j$ scambiate.
> - $D_i(\lambda)$, $\lambda \neq 0$: $I$ con la riga $i$ moltiplicata per $\lambda$, cioè $\lambda$ al posto $(i, i)$.
> - $E_{ij}(\mu)$, $\mu \neq 0$: $I$ a cui si somma alla riga $i$ la riga $j$ per $\mu$. Risultato: un $\mu$ **al posto $(i, j)$**, riga $i$ e colonna $j$. È la stessa convenzione delle note su Gauss-Jordan: cambia la riga $i$, $R_i \to R_i + \mu R_j$.
>
> **Le tre matrici richieste.**
> $$
> S_{13} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix} \qquad D_2(5) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1 \end{pmatrix} \qquad E_{32}(-2) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -2 & 1 \end{pmatrix}
> $$
> $E_{32}(-2)$ fa $R_3 \to R_3 - 2R_2$: sulla terza riga di $I_3$, $(0, 0, 1) - 2(0, 1, 0) = (0, -2, 1)$.
>
> **Prova su una matrice.** Con l'$A$ dell'esempio 38 della dispensa:
> $$
> A = \begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 1 & -1 & 3 \end{pmatrix} \qquad E_{32}(-2)\,A = \begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 1 & 1 & -1 \end{pmatrix}
> $$
> La terza riga è $(1, -1, 3) - 2(0, -1, 2) = (1, 1, -1)$: proprio $R_3 - 2R_2$. Per esteso, l'elemento $(3, 2)$ del prodotto è $0 \cdot 2 + (-2) \cdot (-1) + 1 \cdot (-1) = 1$. Allo stesso modo $S_{13}A$ scambia prima e terza riga e $D_2(5)A$ ha seconda riga $(0, -5, 10)$.
>
> **Sono invertibili**, e l'inversa è l'operazione che disfa: $S_{ij}^{-1} = S_{ij}$, $D_i(\lambda)^{-1} = D_i(1/\lambda)$, $E_{ij}(\mu)^{-1} = E_{ij}(-\mu)$.

**Domanda 3.4.** Descrivere i passi dell'algoritmo che si utilizza per trovare l'inversa di una matrice.

> [!example]- Soluzione
> Data $A \in M_n(\mathbb{R})$ (dispensa, p. 74):
> 1. Si scrive la matrice $n \times 2n$ $[A \mid I_n]$, $A$ e l'identità affiancate.
> 2. Gauss-Jordan su **tutta** la riga: ogni operazione elementare si fa anche sul blocco di destra. Si arriva a una forma a scalini.
> 3. Se a sinistra ci sono meno di $n$ pivot, ci si ferma: $\operatorname{rg}(A) < n$ e $A$ **non è invertibile**.
> 4. Altrimenti riduzione all'indietro: $D_i(1/p_i)$ per avere pivot $1$, poi si azzera sopra ogni pivot. Si arriva a $[I_n \mid P]$.
> 5. $A^{-1} = P$. Verifica: $AP = I_n$.
>
> **Perché funziona.** Fare le operazioni vuol dire moltiplicare a sinistra per il prodotto $P$ delle loro matrici: $P[A \mid I] = [PA \mid P]$. Se a sinistra è venuto $I$, allora $PA = I$, e a destra si legge proprio $P = A^{-1}$. Il blocco di destra "registra" le operazioni fatte.
>
> **Esempio** con $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ della 3.2:
> $$
> \left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{cc|cc} 1 & 1 & 0 & 1 \\ 2 & 1 & 1 & 0 \end{array}\right] \xrightarrow{E_{21}(-2)} \left[\begin{array}{cc|cc} 1 & 1 & 0 & 1 \\ 0 & -1 & 1 & -2 \end{array}\right]
> $$
> $$
> \xrightarrow{D_2(-1)} \left[\begin{array}{cc|cc} 1 & 1 & 0 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right] \xrightarrow{E_{12}(-1)} \left[\begin{array}{cc|cc} 1 & 0 & 1 & -1 \\ 0 & 1 & -1 & 2 \end{array}\right]
> $$
> $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$, la stessa della 3.2. Un caso $3 \times 3$ completo è l'esercizio 3.8.

**Domanda 3.5.** Descrivere la struttura dell'insieme delle soluzioni di un sistema omogeneo e di un sistema non omogeneo.

> [!example]- Soluzione
> **Omogeneo**, $A\vec{x} = \vec{0}$ con $A$ $m \times n$.
> - È **sempre compatibile**: $\vec{x} = \vec{0}$ è soluzione, perché $A\vec{0} = \vec{0}$.
> - L'insieme delle soluzioni è **chiuso rispetto alla somma e al prodotto per uno scalare**: se $A\vec{v} = \vec{0}$ e $A\vec{w} = \vec{0}$, allora $A(\vec{v} + \vec{w}) = A\vec{v} + A\vec{w} = \vec{0}$ e $A(\lambda\vec{v}) = \lambda A\vec{v} = \vec{0}$. Quindi ogni combinazione lineare $\lambda\vec{v} + \mu\vec{w}$ è ancora soluzione.
> - Si chiama **nucleo** di $A$, $N(A)$. Ha $n - \operatorname{rg}(A)$ variabili libere (la **nullità**): se $\operatorname{rg}(A) = n$ c'è solo $\vec{0}$, altrimenti infinite soluzioni, tutte combinazioni lineari di $n - \operatorname{rg}(A)$ soluzioni fisse (una per variabile libera).
>
> **Non omogeneo**, $A\vec{x} = \vec{b}$ con $\vec{b} \neq \vec{0}$.
> - Può essere incompatibile (Rouché-Capelli: $\operatorname{rg}(A) \neq \operatorname{rg}([A \mid \vec{b}])$).
> - Se è compatibile, le soluzioni sono **tutte e sole** quelle della forma $\vec{x}_0 + \vec{v}$, con $\vec{x}_0$ una soluzione particolare fissata e $\vec{v} \in N(A)$. Geometricamente è il nucleo "spostato" di $\vec{x}_0$, come una retta che non passa per l'origine rispetto alla sua parallela per l'origine.
> - **Non** è chiuso né per la somma né per il prodotto per scalare: se $A\vec{x}_1 = A\vec{x}_2 = \vec{b}$, allora $A(\vec{x}_1 + \vec{x}_2) = 2\vec{b} \neq \vec{b}$, e $A(0 \cdot \vec{x}_1) = \vec{0} \neq \vec{b}$.
>
> Esempio dalla dispensa (es. 43): le soluzioni di un sistema in $x, y, z, w$ sono $(5, -4, 0, 0) + z(-1, 1, 1, 0) + w(1, -2, 0, 1)$. Il primo vettore è la particolare (variabili libere a $0$), gli altri due risolvono l'omogeneo.

**Domanda 3.6.** Cos'è il sistema omogeneo associato ad un sistema lineare? Che relazione c'è tra le soluzioni di un sistema e quelle del sistema omogeneo associato?

> [!example]- Soluzione
> **Omogeneo associato** di $A\vec{x} = \vec{b}$: il sistema $A\vec{x} = \vec{0}$, con la **stessa** matrice dei coefficienti e i termini noti messi a zero.
>
> **Relazione** (dispensa, Prop. 10): se $\vec{x}_0$ è una soluzione di $A\vec{x} = \vec{b}$, tutte le soluzioni sono
> $$
> \{\vec{x}_0 + \vec{v} : A\vec{v} = \vec{0}\}
> $$
> Si dimostra in due direzioni.
> - $\vec{x}_0 + \vec{v}$ è soluzione: $A(\vec{x}_0 + \vec{v}) = A\vec{x}_0 + A\vec{v} = \vec{b} + \vec{0} = \vec{b}$.
> - Ogni soluzione è di quella forma: se $A\vec{w} = \vec{b}$, la **differenza di due soluzioni risolve l'omogeneo**, $A(\vec{w} - \vec{x}_0) = \vec{b} - \vec{b} = \vec{0}$. Allora $\vec{v} = \vec{w} - \vec{x}_0$ sta nel nucleo e $\vec{w} = \vec{x}_0 + \vec{v}$.
>
> Conseguenze pratiche:
> - quale soluzione particolare scegli non conta: cambiandola, cambia solo il modo di scrivere lo stesso insieme;
> - un sistema compatibile ha soluzione unica se e solo se l'omogeneo associato ha solo $\vec{0}$, cioè se $\operatorname{rg}(A) = n$;
> - il numero di parametri delle soluzioni di $A\vec{x} = \vec{b}$ (quando è compatibile) è quello del nucleo, $n - \operatorname{rg}(A)$.

## Esercizi

### Esercizio 3.7

Siano
$$
A = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 0 & -1 \\ 0 & 0 & 0 \end{pmatrix} \qquad B = \begin{pmatrix} 1 & 1 & 3 \\ 0 & 1 & 2 \\ -1 & 0 & -2 \end{pmatrix}
$$
Si calcolino $AB$, $BA$, $A^2$ e $A^3$ ($A^n = AA \cdots A$, $n$ volte).

> [!tip]- Indizio
> Elemento $(i, k)$ = riga $i$ del primo fattore per colonna $k$ del secondo. Per $A^3$ non ripartire da zero: $A^3 = A^2 \cdot A$. Guarda dove stanno gli elementi non nulli di $A$, $A^2$, $A^3$.

> [!example]- Soluzione
> **$AB$.** Righe di $A$: $(0, 1, 2)$, $(0, 0, -1)$, $(0, 0, 0)$. Colonne di $B$: $(1, 0, -1)$, $(1, 1, 0)$, $(3, 2, -2)$.
> - riga 1: $0 \cdot 1 + 1 \cdot 0 + 2 \cdot (-1) = -2$; $\ 0 + 1 + 0 = 1$; $\ 0 + 2 - 4 = -2$
> - riga 2: $0 + 0 + (-1)(-1) = 1$; $\ 0 + 0 + 0 = 0$; $\ 0 + 0 + (-1)(-2) = 2$
> - riga 3: tutta nulla, perché la riga 3 di $A$ è nulla
>
> $$
> AB = \begin{pmatrix} -2 & 1 & -2 \\ 1 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> **$BA$.** Righe di $B$: $(1, 1, 3)$, $(0, 1, 2)$, $(-1, 0, -2)$. Colonne di $A$: $(0, 0, 0)$, $(1, 0, 0)$, $(2, -1, 0)$. La prima colonna di $A$ è nulla, quindi anche la prima colonna di $BA$.
> - riga 1: $0$; $\ 1 \cdot 1 + 1 \cdot 0 + 3 \cdot 0 = 1$; $\ 1 \cdot 2 + 1 \cdot (-1) + 3 \cdot 0 = 1$
> - riga 2: $0$; $\ 0$; $\ 0 \cdot 2 + 1 \cdot (-1) + 0 = -1$
> - riga 3: $0$; $\ -1$; $\ (-1) \cdot 2 + 0 + 0 = -2$
>
> $$
> BA = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & -1 \\ 0 & -1 & -2 \end{pmatrix}
> $$
> **$AB \neq BA$**: basta un elemento, $(AB)_{11} = -2$ e $(BA)_{11} = 0$. Sono due matrici quadrate dello stesso ordine, i prodotti si fanno in tutti e due i versi, e vengono diversi. È l'esempio concreto che il prodotto di matrici non è commutativo: l'ordine dei fattori si rispetta sempre.
>
> **$A^2 = AA$.** Elemento $(1, 3)$: riga 1 di $A$ per colonna 3 di $A$, $0 \cdot 2 + 1 \cdot (-1) + 2 \cdot 0 = -1$. Tutti gli altri vengono $0$.
> $$
> A^2 = \begin{pmatrix} 0 & 0 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> **$A^3 = A^2 A$.** L'unica riga non nulla di $A^2$ è $(0, 0, -1)$; per la colonna $k$ di $A$ dà $-a_{3k}$, ma la terza riga di $A$ è nulla. Quindi
> $$
> A^3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = O_3
> $$
> **Il commento che conta: $A$ è nilpotente.** $A \neq O$ ma $A^3 = O$. Con i numeri reali non succede mai ($a^3 = 0 \Rightarrow a = 0$); con le matrici sì. Il motivo si vede dalla forma: $A$ ha elementi non nulli solo **sopra** la diagonale; ogni moltiplicazione per $A$ sposta gli elementi non nulli di un posto più in alto a destra ($A$ ha la prima "sopradiagonale", $A^2$ solo l'angolo $(1, 3)$, $A^3$ niente). Vale per ogni matrice $n \times n$ con zeri sulla diagonale e sotto: $A^n = O$.
>
> Due conseguenze. Primo, $A$ **non è invertibile**: se lo fosse, moltiplicando $A^3 = O$ tre volte per $A^{-1}$ si avrebbe $I = O$. Torna col rango: $A$ ha la terza riga nulla, $\operatorname{rg}(A) = 2 < 3$. Secondo, il prodotto di matrici non nulle può essere nullo ($A \cdot A^2 = O$), quindi da $XY = O$ non si può concludere $X = O$ o $Y = O$.
>
> **Verifica**: $A^3 = A \cdot A^2$ deve dare lo stesso; $A \cdot A^2$ ha colonna 3 uguale ad $A \cdot (-1, 0, 0) = (0, 0, 0)$ e le altre colonne nulle. Coincide.

### Esercizio 3.8

Determinare, se esiste, l'inversa della matrice
$$
A = \begin{pmatrix} 1 & -1 & 3 \\ 1 & 1 & 2 \\ 2 & 0 & 7 \end{pmatrix}
$$
Nel caso l'inversa esista, fare la verifica effettuando il prodotto $AA^{-1}$.

> [!tip]- Indizio
> $[A \mid I_3]$ e Gauss-Jordan sulle righe intere. Il pivot $1$ in alto a sinistra è già pronto. Se la forma a scalini ha tre pivot a sinistra, $A$ è invertibile e prosegui all'indietro.

> [!example]- Soluzione
> $$
> [A \mid I_3] = \left[\begin{array}{ccc|ccc} 1 & -1 & 3 & 1 & 0 & 0 \\ 1 & 1 & 2 & 0 & 1 & 0 \\ 2 & 0 & 7 & 0 & 0 & 1 \end{array}\right]
> $$
> **A scalini.** $E_{21}(-1)$: $R_2 - R_1 = (0, 2, -1 \mid -1, 1, 0)$. $E_{31}(-2)$: $R_3 - 2R_1 = (0, 2, 1 \mid -2, 0, 1)$. Poi $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 2 \mid -1, -1, 1)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & -1 & 3 & 1 & 0 & 0 \\ 0 & 2 & -1 & -1 & 1 & 0 \\ 0 & 0 & 2 & -1 & -1 & 1 \end{array}\right]
> $$
> Tre pivot a sinistra ($1, 2, 2$): $\operatorname{rg}(A) = 3$, **$A$ è invertibile**.
>
> **All'indietro.** $D_2(\frac{1}{2})$ e $D_3(\frac{1}{2})$:
> $$
> \left[\begin{array}{ccc|ccc} 1 & -1 & 3 & 1 & 0 & 0 \\ 0 & 1 & -\frac{1}{2} & -\frac{1}{2} & \frac{1}{2} & 0 \\ 0 & 0 & 1 & -\frac{1}{2} & -\frac{1}{2} & \frac{1}{2} \end{array}\right]
> $$
> Colonna 3. $E_{23}(\frac{1}{2})$: $R_2 + \frac{1}{2}R_3 = \left(0, 1, 0 \mid -\frac{1}{2} - \frac{1}{4},\ \frac{1}{2} - \frac{1}{4},\ \frac{1}{4}\right) = \left(0, 1, 0 \mid -\frac{3}{4}, \frac{1}{4}, \frac{1}{4}\right)$. $E_{13}(-3)$: $R_1 - 3R_3 = \left(1, -1, 0 \mid 1 + \frac{3}{2},\ \frac{3}{2},\ -\frac{3}{2}\right) = \left(1, -1, 0 \mid \frac{5}{2}, \frac{3}{2}, -\frac{3}{2}\right)$.
>
> Colonna 2. $E_{12}(1)$: $R_1 + R_2 = \left(1, 0, 0 \mid \frac{5}{2} - \frac{3}{4},\ \frac{3}{2} + \frac{1}{4},\ -\frac{3}{2} + \frac{1}{4}\right) = \left(1, 0, 0 \mid \frac{7}{4}, \frac{7}{4}, -\frac{5}{4}\right)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & 0 & 0 & \frac{7}{4} & \frac{7}{4} & -\frac{5}{4} \\ 0 & 1 & 0 & -\frac{3}{4} & \frac{1}{4} & \frac{1}{4} \\ 0 & 0 & 1 & -\frac{1}{2} & -\frac{1}{2} & \frac{1}{2} \end{array}\right]
> $$
> $$
> A^{-1} = \begin{pmatrix} \frac{7}{4} & \frac{7}{4} & -\frac{5}{4} \\ -\frac{3}{4} & \frac{1}{4} & \frac{1}{4} \\ -\frac{1}{2} & -\frac{1}{2} & \frac{1}{2} \end{pmatrix} = \frac{1}{4}\begin{pmatrix} 7 & 7 & -5 \\ -3 & 1 & 1 \\ -2 & -2 & 2 \end{pmatrix}
> $$
> **Verifica $AA^{-1} = I_3$.** Conviene fare $A \cdot (4A^{-1})$, che deve venire $4I_3$, e lavorare con interi.
> - riga $(1, -1, 3)$: $7 + 3 - 6 = 4$; $\ 7 - 1 - 6 = 0$; $\ -5 - 1 + 6 = 0$
> - riga $(1, 1, 2)$: $7 - 3 - 4 = 0$; $\ 7 + 1 - 4 = 4$; $\ -5 + 1 + 4 = 0$
> - riga $(2, 0, 7)$: $14 + 0 - 14 = 0$; $\ 14 + 0 - 14 = 0$; $\ -10 + 0 + 14 = 4$
>
> $A \cdot 4A^{-1} = 4I_3$, quindi $AA^{-1} = I_3$.

### Esercizio 3.9

Si consideri la matrice $A_k$, dipendente dal parametro reale $k$:
$$
A_k = \begin{pmatrix} -2 & k & 1 & 1 \\ 0 & 2 & 1 & -1 \\ -2 & k & 2k & 2 \\ 0 & 0 & 1 & 1 \end{pmatrix}
$$

- a) Si calcoli il rango di $A_k$ al variare del parametro $k$.
- b) Si trovino i valori di $k$ per i quali $A_k$ è invertibile.
- c) Sia $\vec{b} = (1, 1, 0, 1)$. Si trovino i valori di $k$ per i quali il sistema lineare $A_k\vec{x} = \vec{b}$ è risolubile.

> [!tip]- Indizio
> Fai Gauss una volta sola sulla matrice completa $[A_k \mid \vec{b}]$: ti dà a), b) e c) insieme. Dopo il primo passo la terza riga inizia con $2k - 1$: invece di usarlo come pivot (dovresti dividere per $2k - 1$), scambia con la quarta riga, che ha un comodo $1$.

> [!example]- Soluzione
> Il $\vec{b}$ del testo è scritto come riga per comodità: nel sistema è la colonna $(1, 1, 0, 1)^T$.
> $$
> [A_k \mid \vec{b}] = \left[\begin{array}{cccc|c} -2 & k & 1 & 1 & 1 \\ 0 & 2 & 1 & -1 & 1 \\ -2 & k & 2k & 2 & 0 \\ 0 & 0 & 1 & 1 & 1 \end{array}\right]
> $$
> **$E_{31}(-1)$**: $R_3 - R_1 = (0,\ 0,\ 2k - 1,\ 1 \mid -1)$. Il $k$ in colonna 2 si cancella da solo.
> $$
> \left[\begin{array}{cccc|c} -2 & k & 1 & 1 & 1 \\ 0 & 2 & 1 & -1 & 1 \\ 0 & 0 & 2k-1 & 1 & -1 \\ 0 & 0 & 1 & 1 & 1 \end{array}\right]
> $$
> **$S_{34}$**: porto su la riga con l'$1$ in colonna 3, così il pivot non dipende da $k$.
>
> **$E_{43}(-(2k - 1))$**: $R_4 - (2k - 1)R_3 = \big(0,\ 0,\ 0,\ 1 - (2k - 1) \mid -1 - (2k - 1)\big) = (0, 0, 0, 2 - 2k \mid -2k)$. Se $k = \frac{1}{2}$ il coefficiente è $0$ e il passo non serve (non è un'operazione elementare): la riga è già $(0, 0, 0, 1 \mid -1)$, che coincide con la formula.
> $$
> \left[\begin{array}{cccc|c} -2 & k & 1 & 1 & 1 \\ 0 & 2 & 1 & -1 & 1 \\ 0 & 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 2 - 2k & -2k \end{array}\right]
> $$
> I primi tre pivot sono $-2$, $2$, $1$, per ogni $k$. Il quarto pivot possibile è $2 - 2k$, nullo solo per $k = 1$.
>
> **a) Rango.**
> - $k \neq 1$: quattro pivot, **$\operatorname{rg}(A_k) = 4$**.
> - $k = 1$: quarta riga di $A_k$ nulla, **$\operatorname{rg}(A_1) = 3$**. Lo si vede anche a occhio: per $k = 1$ la riga $R_3 - R_1$ è $(0, 0, 1, 1)$, uguale alla quarta riga. Una riga è combinazione delle altre.
>
> **b) Invertibilità.** $A_k$ è $4 \times 4$: invertibile se e solo se il rango è $4$. **$A_k$ invertibile per $k \neq 1$.** Per $k = 1$ il rango è $3$: tre pivot su quattro non bastano.
>
> **c) Risolubilità.** Rouché-Capelli: confronto $\operatorname{rg}(A_k)$ e $\operatorname{rg}([A_k \mid \vec{b}])$.
> - $k \neq 1$: $\operatorname{rg}(A_k) = 4 = \operatorname{rg}([A_k \mid \vec{b}])$ (una matrice $4 \times 5$ ha rango al massimo $4$). Compatibile, con **soluzione unica** ($4 - 4 = 0$ parametri). Più in generale: se $A$ è invertibile, $A\vec{x} = \vec{b}$ ha l'unica soluzione $\vec{x} = A^{-1}\vec{b}$ per ogni $\vec{b}$.
> - $k = 1$: l'ultima riga diventa $(0, 0, 0, 0 \mid -2)$, cioè $0 = -2$. $\operatorname{rg}(A_1) = 3 \neq 4 = \operatorname{rg}([A_1 \mid \vec{b}])$: **incompatibile**.
>
> **Il sistema è risolubile se e solo se $k \neq 1$.**
>
> Perché $k = 1$ si rompe, letto sulle equazioni. Con $k = 1$ la terza equazione meno la prima dà $x_3 + x_4 = b_3 - b_1 = 0 - 1 = -1$, mentre la quarta dice $x_3 + x_4 = 1$. La stessa quantità dovrebbe valere $-1$ e $1$: contraddizione. Con un altro $\vec{b}$ che soddisfa $b_3 - b_1 = b_4$ il sistema con $k = 1$ sarebbe compatibile, con infinite soluzioni. Quando $A$ non è invertibile la risolubilità dipende da $\vec{b}$, e va controllata ogni volta.
>
> Per completezza la soluzione, risalendo dal basso: $x_4 = \frac{-2k}{2 - 2k} = \frac{k}{k - 1}$, $x_3 = 1 - x_4 = -\frac{1}{k - 1}$, $x_2 = \frac{1 - x_3 + x_4}{2} = \frac{k}{k - 1}$, $x_1 = \frac{k^2}{2(k - 1)}$. Tutti con $k - 1$ al denominatore: per $k = 1$ non hanno senso, coerente con l'incompatibilità.
>
> **Verifica** con $k = 2$: la soluzione è $(2, 2, -1, 2)$. Nel sistema di partenza: $-4 + 4 - 1 + 2 = 1$; $4 - 1 - 2 = 1$; $-4 + 4 - 4 + 4 = 0$; $-1 + 2 = 1$. Torna con $\vec{b} = (1, 1, 0, 1)$.

### Esercizio 3.10

Sia $A$ la matrice reale
$$
A(k) = \begin{pmatrix} 1 & k & 0 \\ 0 & 1 & k-4 \\ 2 & k & 0 \end{pmatrix}
$$

- Si trovino i valori del parametro reale $k$ per i quali $A$ è invertibile.
- Per i valori trovati al punto precedente determinare l'inversa di $A$.

> [!tip]- Indizio
> Riduci $[A(k) \mid I_3]$ a scalini: due passi e il terzo pivot è un'espressione in $k$. Trova quando si annulla, escludi quei valori, e solo allora dividi per quell'espressione.

> [!example]- Soluzione
> $$
> [A(k) \mid I_3] = \left[\begin{array}{ccc|ccc} 1 & k & 0 & 1 & 0 & 0 \\ 0 & 1 & k-4 & 0 & 1 & 0 \\ 2 & k & 0 & 0 & 0 & 1 \end{array}\right]
> $$
> **$E_{31}(-2)$**: $R_3 - 2R_1 = (0,\ k - 2k,\ 0 \mid -2, 0, 1) = (0, -k, 0 \mid -2, 0, 1)$.
>
> **$E_{32}(k)$**: $R_3 + kR_2 = \big(0,\ 0,\ k(k - 4) \mid -2,\ k,\ 1\big)$. Se $k = 0$ il passo non serve (la riga ha già $0$ in colonna 2), e la formula dà lo stesso risultato.
> $$
> \left[\begin{array}{ccc|ccc} 1 & k & 0 & 1 & 0 & 0 \\ 0 & 1 & k-4 & 0 & 1 & 0 \\ 0 & 0 & k(k-4) & -2 & k & 1 \end{array}\right]
> $$
> **Invertibilità.** Pivot $1$, $1$ e $k(k - 4)$. Il terzo si annulla per $k = 0$ e per $k = 4$.
> - $k = 0$: $A(0) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & -4 \\ 2 & 0 & 0 \end{pmatrix}$, la terza riga è il doppio della prima. Rango $2$, non invertibile.
> - $k = 4$: $A(4) = \begin{pmatrix} 1 & 4 & 0 \\ 0 & 1 & 0 \\ 2 & 4 & 0 \end{pmatrix}$, la terza colonna è nulla. Rango $2$, non invertibile.
> - $k \neq 0, 4$: tre pivot, rango $3$.
>
> **$A(k)$ è invertibile se e solo se $k \neq 0$ e $k \neq 4$.**
>
> **Inversa**, per $k \neq 0, 4$. Ora dividere per $k(k - 4)$ è lecito.
>
> $D_3\!\left(\frac{1}{k(k-4)}\right)$: $R_3 = \left(0, 0, 1 \ \middle|\ -\frac{2}{k(k-4)},\ \frac{1}{k-4},\ \frac{1}{k(k-4)}\right)$.
>
> $E_{23}(-(k - 4))$: $R_2 - (k - 4)R_3$. A sinistra resta $(0, 1, 0)$; a destra $\left(0 + \frac{2}{k},\ 1 - 1,\ 0 - \frac{1}{k}\right) = \left(\frac{2}{k}, 0, -\frac{1}{k}\right)$.
>
> $E_{12}(-k)$: $R_1 - kR_2$. A sinistra $(1, 0, 0)$; a destra $\left(1 - k \cdot \frac{2}{k},\ 0,\ 0 + k \cdot \frac{1}{k}\right) = (-1, 0, 1)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & 0 & 0 & -1 & 0 & 1 \\ 0 & 1 & 0 & \frac{2}{k} & 0 & -\frac{1}{k} \\ 0 & 0 & 1 & -\frac{2}{k(k-4)} & \frac{1}{k-4} & \frac{1}{k(k-4)} \end{array}\right]
> $$
> $$
> A(k)^{-1} = \begin{pmatrix} -1 & 0 & 1 \\ \frac{2}{k} & 0 & -\frac{1}{k} \\ -\frac{2}{k(k-4)} & \frac{1}{k-4} & \frac{1}{k(k-4)} \end{pmatrix} \qquad k \neq 0, 4
> $$
> **Verifica** in generale, due elementi: riga 1 di $A$ per colonna 1 di $A^{-1}$, $1 \cdot (-1) + k \cdot \frac{2}{k} + 0 = 1$; riga 2 per colonna 1, $0 + \frac{2}{k} + (k - 4) \cdot \left(-\frac{2}{k(k-4)}\right) = \frac{2}{k} - \frac{2}{k} = 0$. Tutta intera con $k = 2$:
> $$
> A(2) = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -2 \\ 2 & 2 & 0 \end{pmatrix} \qquad A(2)^{-1} = \begin{pmatrix} -1 & 0 & 1 \\ 1 & 0 & -\frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} & -\frac{1}{4} \end{pmatrix}
> $$
> Righe di $A(2)$ per colonne di $A(2)^{-1}$: riga $(1, 2, 0)$ dà $-1 + 2 = 1$, $0$, $1 - 1 = 0$; riga $(0, 1, -2)$ dà $1 - 1 = 0$, $0 + 1 = 1$, $-\frac{1}{2} + \frac{1}{2} = 0$; riga $(2, 2, 0)$ dà $-2 + 2 = 0$, $0$, $2 - 1 = 1$. È $I_3$.
>
> Nota: la seconda colonna di $A(k)^{-1}$ ha due zeri. Non è un caso: la colonna 2 di $A^{-1}$ è la soluzione di $A\vec{x} = (0, 1, 0)$, e le equazioni 1 e 3 hanno $0$ a destra: $x_1 + kx_2 = 0$ e $2x_1 + kx_2 = 0$. Sottraendo viene $x_1 = 0$, poi $kx_2 = 0$ dà $x_2 = 0$ perché $k \neq 0$.

### Esercizio 3.11

Risolvere il sistema
$$
\begin{cases} 2x - 6z - w = 2 \\ x - y - 3z = 1 \\ -x + 3y + 3z - w = -1 \end{cases}
$$
descrivendo l'insieme delle sue soluzioni come somma di una soluzione particolare e delle soluzioni del sistema omogeneo associato.

> [!tip]- Indizio
> Incognite in ordine $x, y, z, w$: attento ai coefficienti nulli ($y$ manca nella prima, $w$ nella seconda). Porta su la seconda equazione, che ha $1$ davanti a $x$. Le variabili libere sono le colonne senza pivot; la particolare si ottiene mettendole a $0$.

> [!example]- Soluzione
> $$
> \left[\begin{array}{cccc|c} 2 & 0 & -6 & -1 & 2 \\ 1 & -1 & -3 & 0 & 1 \\ -1 & 3 & 3 & -1 & -1 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{cccc|c} 1 & -1 & -3 & 0 & 1 \\ 2 & 0 & -6 & -1 & 2 \\ -1 & 3 & 3 & -1 & -1 \end{array}\right]
> $$
> $E_{21}(-2)$: $R_2 - 2R_1 = (0, 2, 0, -1 \mid 0)$. $E_{31}(1)$: $R_3 + R_1 = (0, 2, 0, -1 \mid 0)$. Le due righe sono uguali: $E_{32}(-1)$ azzera la terza.
> $$
> \left[\begin{array}{cccc|c} 1 & -1 & -3 & 0 & 1 \\ 0 & 2 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right]
> $$
> $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 2$: compatibile, $4 - 2 = 2$ variabili libere. Una delle tre equazioni era superflua: nel sistema di partenza la terza è la prima meno tre volte la seconda, $(2, 0, -6, -1) - 3(1, -1, -3, 0) = (-1, 3, 3, -1)$, e a destra $2 - 3 = -1$.
>
> **All'indietro.** $D_2(\frac{1}{2})$: $(0, 1, 0, -\frac{1}{2} \mid 0)$. $E_{12}(1)$: $R_1 + R_2 = (1, 0, -3, -\frac{1}{2} \mid 1)$.
> $$
> \left[\begin{array}{cccc|c} 1 & 0 & -3 & -\frac{1}{2} & 1 \\ 0 & 1 & 0 & -\frac{1}{2} & 0 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right] \qquad \begin{cases} x = 1 + 3z + \frac{1}{2}w \\ y = \frac{1}{2}w \end{cases}
> $$
> Colonne senza pivot: $z$ e $w$. Per evitare le frazioni pongo $z = t$ e $w = 2s$:
> $$
> \begin{pmatrix} x \\ y \\ z \\ w \end{pmatrix} = \begin{pmatrix} 1 + 3t + s \\ s \\ t \\ 2s \end{pmatrix} = \underbrace{\begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}}_{\vec{x}_0} + t\begin{pmatrix} 3 \\ 0 \\ 1 \\ 0 \end{pmatrix} + s\begin{pmatrix} 1 \\ 1 \\ 0 \\ 2 \end{pmatrix} \qquad t, s \in \mathbb{R}
> $$
> **Soluzione particolare** $\vec{x}_0 = (1, 0, 0, 0)$ (variabili libere a zero). **Soluzioni dell'omogeneo associato**: tutte le combinazioni $t(3, 0, 1, 0) + s(1, 1, 0, 2)$. Con $w = s$ invece di $2s$ il secondo vettore sarebbe $(\frac{1}{2}, \frac{1}{2}, 0, 1)$: stesso insieme, scritto in un altro modo.
>
> **Verifica.** $\vec{x}_0$ nel sistema: $2 = 2$; $1 = 1$; $-1 = -1$. $(3, 0, 1, 0)$ nell'omogeneo: $6 - 6 = 0$; $3 - 3 = 0$; $-3 + 3 = 0$. $(1, 1, 0, 2)$ nell'omogeneo: $2 - 2 = 0$; $1 - 1 = 0$; $-1 + 3 - 2 = 0$. Per la 3.6, allora $\vec{x}_0 + t(\ldots) + s(\ldots)$ risolve il sistema per ogni $t, s$.

### Esercizio 3.12

Si consideri il sistema lineare
$$
\begin{cases} y + z = k \\ x + ky + kz = k \\ kx + y + z = k \end{cases} \qquad (\ast)
$$

1. Si studi la risolubilità del sistema al variare del parametro reale $k$.
2. Per quali valori di $k$ l'insieme delle soluzioni è chiuso rispetto alla somma e al prodotto per uno scalare?
3. Posto $k = 1$, si descriva l'insieme delle soluzioni del sistema lineare omogeneo associato al sistema $(\ast)$.

> [!tip]- Indizio
> Guarda le colonne di $y$ e $z$ prima di fare conti: cosa dicono sul rango di $A$? Per il punto 2 ripensa alla 3.5: quale sistema ha l'insieme delle soluzioni chiuso? E il vettore nullo, quando è soluzione?

> [!example]- Soluzione
> **1. Risolubilità.** Le colonne di $y$ e di $z$ sono identiche: $(1, k, 1)$. Quindi $\operatorname{rg}(A) \leq 2$ per ogni $k$, e il sistema non avrà mai soluzione unica.
> $$
> \left[\begin{array}{ccc|c} 0 & 1 & 1 & k \\ 1 & k & k & k \\ k & 1 & 1 & k \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & k & k & k \\ 0 & 1 & 1 & k \\ k & 1 & 1 & k \end{array}\right]
> $$
> $E_{31}(-k)$ (se $k = 0$ non serve): $R_3 - kR_1 = (0,\ 1 - k^2,\ 1 - k^2 \mid k - k^2)$.
>
> $E_{32}(-(1 - k^2))$ (se $k = \pm 1$ non serve): $R_3 - (1 - k^2)R_2 = \big(0,\ 0,\ 0 \mid k - k^2 - k(1 - k^2)\big) = (0, 0, 0 \mid k^3 - k^2)$.
> $$
> \left[\begin{array}{ccc|c} 1 & k & k & k \\ 0 & 1 & 1 & k \\ 0 & 0 & 0 & k^2(k - 1) \end{array}\right]
> $$
> $\operatorname{rg}(A) = 2$ per ogni $k$ (pivot $1$ e $1$). Il rango della completa dipende da $k^2(k - 1)$:
> - $k \neq 0$ e $k \neq 1$: ultima riga $(0, 0, 0 \mid c)$ con $c \neq 0$, $\operatorname{rg}([A \mid \vec{b}]) = 3 \neq 2$. **Incompatibile.**
> - $k = 0$: ultima riga nulla, ranghi $2 = 2$. **Infinite soluzioni**, $3 - 2 = 1$ parametro.
> - $k = 1$: ultima riga nulla, ranghi $2 = 2$. **Infinite soluzioni**, $1$ parametro.
>
> Le soluzioni. Per $k = 0$ la matrice ridotta è $(1, 0, 0 \mid 0)$, $(0, 1, 1 \mid 0)$: $x = 0$, $y = -z$, quindi $\{(0, -t, t) : t \in \mathbb{R}\}$. Per $k = 1$: $E_{12}(-1)$ dà $(1, 0, 0 \mid 0)$, e la seconda riga è $(0, 1, 1 \mid 1)$: $x = 0$, $y = 1 - z$, quindi $\{(0, 1 - t, t) : t \in \mathbb{R}\}$.
>
> Verifica $k = 1$, $t = 0$, cioè $(0, 1, 0)$: $1 + 0 = 1$; $0 + 1 + 0 = 1$; $0 + 1 + 0 = 1$.
>
> **Il sistema è risolubile se e solo se $k = 0$ oppure $k = 1$.**
>
> **2. Chiusura.** Per $k = 0$ i termini noti sono tutti $0$: il sistema è **omogeneo**, e l'insieme delle soluzioni è chiuso per somma e prodotto per scalare (3.5). Per esempio $(0, -1, 1) + (0, -2, 2) = (0, -3, 3)$, ancora della forma $(0, -t, t)$.
>
> Per $k \neq 0$ i termini noti sono $(k, k, k) \neq \vec{0}$. Se l'insieme fosse chiuso per prodotto per scalare e avesse almeno una soluzione $\vec{v}$, conterrebbe $0 \cdot \vec{v} = \vec{0}$; ma $A\vec{0} = \vec{0} \neq \vec{b}$. Per $k = 1$ lo si vede direttamente: $(0, 1, 0)$ e $(0, 0, 1)$ sono soluzioni, la somma $(0, 1, 1)$ dà $y + z = 2 \neq 1$.
>
> **Risposta: $k = 0$.**
>
> Un'avvertenza da pignoli: per $k \neq 0, 1$ l'insieme delle soluzioni è vuoto, e il vuoto è chiuso per somma e prodotto "a vuoto" (non ci sono elementi su cui fallire). Il testo intende chiaramente gli insiemi non vuoti; se la domanda esce all'esame, scrivi $k = 0$ e, se vuoi, aggiungi questa riga.
>
> **3. Omogeneo associato per $k = 1$.**
> $$
> \begin{cases} y + z = 0 \\ x + y + z = 0 \\ x + y + z = 0 \end{cases}
> $$
> La terza equazione ripete la seconda; sottraendo la prima dalla seconda viene $x = 0$. Resta $y = -z$, con $z = t$ libera:
> $$
> \{(0, -t, t) : t \in \mathbb{R}\} = \{t(0, -1, 1) : t \in \mathbb{R}\}
> $$
> Una retta per l'origine, chiusa per somma e prodotto per scalare. Verifica con $t = 1$: $-1 + 1 = 0$; $0 - 1 + 1 = 0$; due volte.
>
> Il collegamento con la 3.6: per $k = 1$ le soluzioni di $(\ast)$ sono $(0, 1 - t, t) = (0, 1, 0) + t(0, -1, 1)$, cioè la particolare $(0, 1, 0)$ più le soluzioni dell'omogeneo appena trovate. Le stesse $(0, -t, t)$ sono anche le soluzioni di $(\ast)$ per $k = 0$: lì le equazioni diventano $y + z = 0$, $x = 0$, $y + z = 0$, che hanno le stesse soluzioni dell'omogeneo per $k = 1$ anche se la matrice è diversa.

## Errori tipici

- Scambiare l'ordine nel prodotto: $AB$ e $BA$ sono in generale diversi (3.7), e a volte uno dei due non esiste nemmeno (3.1). In un'uguaglianza $AX = B$ si moltiplica per $A^{-1}$ **a sinistra** da entrambe le parti: $X = A^{-1}B$, non $BA^{-1}$.
- Scrivere $(AB)^{-1} = A^{-1}B^{-1}$. È $(AB)^{-1} = B^{-1}A^{-1}$, con l'ordine rovesciato: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = I$.
- Usare le regole dei numeri: $(A + B)^2 = A^2 + 2AB + B^2$ è falso se $AB \neq BA$; da $A^3 = O$ non segue $A = O$ (3.7); da $XY = O$ non segue che uno dei due sia nullo.
- Mettere $\mu$ al posto sbagliato in $E_{ij}(\mu)$: va in riga $i$, colonna $j$. $E_{32}(-2)$ ha $-2$ in posizione $(3, 2)$, non $(2, 3)$.
- Fare le operazioni solo sul blocco di sinistra di $[A \mid I]$: il blocco di destra è quello che diventa $A^{-1}$, e va trasformato insieme.
- Dividere per un'espressione col parametro senza aver escluso i valori che la annullano. In 3.10 si divide per $k(k - 4)$ **dopo** aver detto $k \neq 0, 4$, e i casi $k = 0$ e $k = 4$ si guardano a parte. In 3.9 lo scambio $S_{34}$ evita del tutto di dividere per $2k - 1$.
- Credere che rango $3$ di una $4 \times 4$ voglia dire invertibile: serve rango uguale all'ordine, $4$ (3.9 con $k = 1$).
- Dimenticare che $E_{ij}(0)$ e $D_i(0)$ non sono operazioni elementari: quando il coefficiente con il parametro si annulla, il passo si salta, e va detto.
- Chiamare "chiuso" l'insieme delle soluzioni di un sistema non omogeneo: contiene $\vec{0}$ solo se $\vec{b} = \vec{0}$, quindi non è mai chiuso per prodotto per scalare (3.12).
- Fermarsi senza verifica: $AA^{-1} = I$ e la sostituzione nel sistema di partenza trovano subito l'errore di segno.

## Domande

- Quando si può fare il prodotto $AB$ e che dimensioni ha il risultato?

- Quando una matrice quadrata è invertibile? Che legame c'è con il rango?

- Come si costruisce la matrice di $E_{ij}(\mu)$, e dove compare $\mu$?

- Perché l'algoritmo su $[A \mid I]$ restituisce $A^{-1}$ nel blocco di destra?

- Perché la differenza di due soluzioni di $A\vec{x} = \vec{b}$ risolve l'omogeneo associato, e cosa ne segue per l'insieme delle soluzioni?

- Una matrice non nulla può avere una potenza nulla? Cosa dice questo sulla sua invertibilità?

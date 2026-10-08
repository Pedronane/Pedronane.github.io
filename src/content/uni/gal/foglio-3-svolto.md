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

Il <span class="src">foglio 3</span> del tutorato (domande 3.1-3.6 ed esercizi 3.7-3.8 a <span class="src">p. 1</span>, esercizi 3.9-3.12 a <span class="src">p. 2</span>), argomento di [Geometria e Algebra Lineare](/uni/gal/). A lezione queste cose sono la L5 (5/10) e la L6 (6/10), con l'esercitazione 3 del 12/10; la teoria completa sta in [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/) e [Matrici invertibili](/uni/gal/matrici-invertibili/). Si appoggia su [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) (operazioni elementari, rref) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/). Definizioni e notazione vengono dal capitolo 3 della <span class="src">dispensa</span>: prodotto <span class="src">p. 66-68</span>, invertibilità <span class="src">p. 69-71</span>, matrici elementari <span class="src">p. 71-73</span>, rango e inversa <span class="src">p. 73-76</span>, struttura delle soluzioni <span class="src">p. 77-79</span> (numeri di pagina del PDF).

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
> Il perché, in breve: $\operatorname{rref}(A) = PA$ con $P$ prodotto di matrici elementari, quindi invertibile. Se $\operatorname{rg}(A) = n$, la rref quadrata con $n$ pivot è per forza $I_n$, così $PA = I_n$; moltiplicando a sinistra per $P^{-1}$ viene $A = P^{-1}$, quindi anche $AP = I_n$ e $A^{-1} = P$. Se invece $\operatorname{rg}(A) < n$, la rref ha una riga di zeri e non può essere invertibile, quindi neanche $A = P^{-1}\operatorname{rref}(A)$ lo è.

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

> [!info]- Il punto c) passo per passo, con le figure
> **Cosa chiede.** "Risolubile" vuol dire: esistono quattro numeri $x_1, x_2, x_3, x_4$ che soddisfano **tutte e quattro** le equazioni insieme. Scritto per esteso, con $\vec{b} = (1, 1, 0, 1)$:
> $$
> \begin{cases} -2x_1 + kx_2 + x_3 + x_4 = 1 \\ 2x_2 + x_3 - x_4 = 1 \\ -2x_1 + kx_2 + 2kx_3 + 2x_4 = 0 \\ x_3 + x_4 = 1 \end{cases}
> $$
> Le chiamo eq. 1, 2, 3, 4 dall'alto in basso.
>
> **Passo 1: togli $x_1$ e $x_2$ dalla terza equazione.** Eq. 1 ed eq. 3 iniziano tutte e due con $-2x_1 + kx_2$. Sottraendole quella parte sparisce:
> $$
> (2k - 1)\,x_3 + x_4 = -1
> $$
> È esattamente il passo $E_{31}(-1)$ della soluzione. Dopo questo passo la matrice completa è quella della figura. I cerchi sono i pivot $-2$ e $2$, il riquadro è la parte che parla solo di $x_3$ e $x_4$: due equazioni, due incognite. Si decide tutto lì.
>
> <figure class="fig"><svg role="img" aria-label="es 3.9 blocco che decide" xmlns:xlink="http://www.w3.org/1999/xlink" width="301.68pt" height="200.016pt" viewBox="0 0 301.68 200.016" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f40-figure_1"> <g id="f40-patch_1"> <path d="M 0 200.016 L 301.68 200.016 L 301.68 0 L 0 0 L 0 200.016 z " style="fill: none"/> </g> <g id="f40-axes_1"> <g id="f40-patch_2"> <path d="M 32.138182 65.770971 C 36.335527 65.770971 40.361525 64.311787 43.329497 61.714785 C 46.297468 59.117784 47.965091 55.595 47.965091 51.922286 C 47.965091 48.249571 46.297468 44.726787 43.329497 42.129786 C 40.361525 39.532785 36.335527 38.0736 32.138182 38.0736 C 27.940836 38.0736 23.914838 39.532785 20.946867 42.129786 C 17.978896 44.726787 16.311273 48.249571 16.311273 51.922286 C 16.311273 55.595 17.978896 59.117784 20.946867 61.714785 C 23.914838 64.311787 27.940836 65.770971 32.138182 65.770971 L 32.138182 65.770971 z " clip-path="url(#f40-pf879381c15)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linejoin: miter"/> </g> <g id="f40-patch_3"> <path d="M 87.092727 104.239543 C 91.290073 104.239543 95.316071 102.780358 98.284042 100.183357 C 101.252013 97.586355 102.919636 94.063572 102.919636 90.390857 C 102.919636 86.718143 101.252013 83.195359 98.284042 80.598358 C 95.316071 78.001356 91.290073 76.542171 87.092727 76.542171 C 82.895382 76.542171 78.869384 78.001356 75.901413 80.598358 C 72.933441 83.195359 71.265818 86.718143 71.265818 90.390857 C 71.265818 94.063572 72.933441 97.586355 75.901413 100.183357 C 78.869384 102.780358 82.895382 104.239543 87.092727 104.239543 L 87.092727 104.239543 z " clip-path="url(#f40-pf879381c15)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2; stroke-linejoin: miter"/> </g> <g id="f40-patch_4"> <path d="M 113.470909 186.562286 L 289.325455 186.562286 L 289.325455 109.625143 L 113.470909 109.625143 L 113.470909 186.562286 z " clip-path="url(#f40-pf879381c15)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.2; stroke-linejoin: miter"/> </g> <g id="f40-line2d_1"> <path d="M 234.370909 184.638857 L 234.370909 34.611429 " clip-path="url(#f40-pf879381c15)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="f40-text_1"> <!-- $x_1$ --> <g style="fill: var(--fig-axis)" transform="translate(23.818182 23.38025) scale(0.16 -0.16)"> <defs> <path id="f40-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> <path id="f40-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f40-text_2"> <!-- $x_2$ --> <g style="fill: var(--fig-axis)" transform="translate(78.772727 23.38025) scale(0.16 -0.16)"> <defs> <path id="f40-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f40-DejaVuSerif-15" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f40-text_3"> <!-- $x_3$ --> <g style="fill: var(--fig-axis)" transform="translate(138.123636 23.38025) scale(0.16 -0.16)"> <defs> <path id="f40-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f40-DejaVuSerif-16" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f40-text_4"> <!-- $x_4$ --> <g style="fill: var(--fig-axis)" transform="translate(195.276364 23.38025) scale(0.16 -0.16)"> <defs> <path id="f40-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f40-DejaVuSerif-17" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f40-text_5"> <!-- $b$ --> <g style="fill: var(--fig-axis)" transform="translate(259.945455 23.382125) scale(0.16 -0.16)"> <defs> <path id="f40-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-Italic-45" transform="translate(0 0.015625)"/> </g> </g> <g id="f40-text_6"> <!-- $-2$ --> <g style="fill: var(--fig-ink)" transform="translate(18.078182 56.857833) scale(0.19 -0.19)"> <defs> <path id="f40-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f40-DejaVuSerif-15" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f40-text_7"> <!-- $k$ --> <g style="fill: var(--fig-ink)" transform="translate(81.297727 56.860059) scale(0.19 -0.19)"> <defs> <path id="f40-DejaVuSerif-Italic-4e" d="M 2113 2075 L 3034 331 L 3513 331 L 3450 0 L 2528 0 L 1622 1697 L 1088 1275 L 841 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 1169 1697 L 2822 2988 L 2344 2988 L 2406 3322 L 3341 3322 L 3278 2988 L 2113 2075 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-Italic-4e" transform="translate(0 0.015625)"/> </g> </g> <g id="f40-text_8"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(140.363636 56.857833) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_9"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(197.516364 56.857833) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_10"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(259.065455 56.857833) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_11"> <!-- $0$ --> <g style="fill: var(--fig-ink)" transform="translate(26.058182 95.326404) scale(0.19 -0.19)"> <defs> <path id="f40-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f40-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_12"> <!-- $2$ --> <g style="fill: var(--fig-ink)" transform="translate(81.012727 95.326404) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_13"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(140.363636 95.326404) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_14"> <!-- $-1$ --> <g style="fill: var(--fig-ink)" transform="translate(189.536364 95.326404) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f40-text_15"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(259.065455 95.326404) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_16"> <!-- $0$ --> <g style="fill: var(--fig-ink)" transform="translate(26.058182 133.794975) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_17"> <!-- $0$ --> <g style="fill: var(--fig-ink)" transform="translate(81.012727 133.794975) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_18"> <!-- $2k-1$ --> <g style="fill: var(--fig-ink)" transform="translate(116.993636 133.797202) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-15" transform="translate(0 0.015625)"/> <use xlink:href="#f40-DejaVuSerif-Italic-4e" transform="translate(63.623047 0.015625)"/> <use xlink:href="#f40-DejaVuSerif-8cf" transform="translate(143.183594 0.015625)"/> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(245.9375 0.015625)"/> </g> </g> <g id="f40-text_19"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(197.516364 133.794975) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_20"> <!-- $-1$ --> <g style="fill: var(--fig-ink)" transform="translate(251.085455 133.794975) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f40-text_21"> <!-- $0$ --> <g style="fill: var(--fig-ink)" transform="translate(26.058182 172.263547) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_22"> <!-- $0$ --> <g style="fill: var(--fig-ink)" transform="translate(81.012727 172.263547) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_23"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(140.363636 172.263547) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_24"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(197.516364 172.263547) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f40-text_25"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(259.065455 172.263547) scale(0.19 -0.19)"> <use xlink:href="#f40-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> </g> </g> <defs> <clipPath id="f40-pf879381c15"> <rect x="5.76" y="5.76" width="290.16" height="188.496"/> </clipPath> </defs> </svg></figure>
>
> **Passo 2: $x_1$ e $x_2$ non danno mai problemi.** Se conosci $x_3$ e $x_4$, l'eq. 2 dà $x_2 = \frac{1 - x_3 + x_4}{2}$ e poi l'eq. 1 dà $x_1$ dividendo per $-2$. Si divide per $2$ e per $-2$, che non sono mai zero, qualunque sia $k$. Quindi la domanda diventa più piccola: **le due equazioni in $x_3, x_4$ hanno una soluzione comune?**
> $$
> \begin{cases} x_3 + x_4 = 1 \\ (2k-1)\,x_3 + x_4 = -1 \end{cases}
> $$
>
> **Passo 3: due equazioni in due incognite sono due rette.** Nel piano con assi $x_3$ e $x_4$ ogni equazione è una retta, e una soluzione comune è un punto che sta su tutte e due: il loro **punto d'incontro**. Ricavando $x_4$:
> - eq. 4: $x_4 = 1 - x_3$, pendenza $-1$;
> - eq. 3 meno eq. 1: $x_4 = -1 - (2k - 1)\,x_3$, pendenza $-(2k - 1)$.
>
> Le pendenze sono uguali solo se $2k - 1 = 1$, cioè $k = 1$.
>
> <figure class="fig"><svg role="img" aria-label="es 3.9 due rette" xmlns:xlink="http://www.w3.org/1999/xlink" width="464.531696pt" height="493.476pt" viewBox="0 0 464.531696 493.476" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f41-figure_1"> <g id="f41-patch_1"> <path d="M 0 493.476 L 464.531696 493.476 L 464.531696 0 L 0 0 L 0 493.476 z " style="fill: none"/> </g> <g id="f41-axes_1"> <g id="f41-patch_2"> <path d="M 5.76 233.7 L 217.44 233.7 L 217.44 22.02 L 5.76 22.02 L 5.76 233.7 z " style="fill: none"/> </g> <g id="f41-matplotlib.axis_1"/> <g id="f41-matplotlib.axis_2"/> <g id="f41-line2d_1"> <path d="M 9.2 -1 L 217.44 207.24 L 217.44 207.24 " clip-path="url(#f41-p7633ce1d6b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.4; stroke-linecap: square"/> </g> <g id="f41-patch_3"> <path d="M 111.6 233.7 L 111.6 22.02 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-patch_4"> <path d="M 5.76 127.86 L 217.44 127.86 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-text_1"> <!-- $x_3$ --> <g style="fill: var(--fig-axis)" transform="translate(201.84 147.194484) scale(0.15 -0.15)"> <defs> <path id="f41-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_2"> <!-- $x_4$ --> <g style="fill: var(--fig-axis)" transform="translate(115.569 33.416484) scale(0.15 -0.15)"> <defs> <path id="f41-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-17" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_3"> <!-- eq. 4 --> <g style="fill: var(--fig-ink)" transform="translate(164.52 156.966) scale(0.14 -0.14)"> <defs> <path id="f41-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-54" d="M 3359 2988 L 3359 -997 L 3909 -997 L 3909 -1331 L 2241 -1331 L 2241 -997 L 2784 -997 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-11" d="M 603 325 Q 603 500 722 622 Q 841 744 1019 744 Q 1191 744 1312 622 Q 1434 500 1434 325 Q 1434 153 1312 31 Q 1191 -91 1019 -91 Q 841 -91 722 29 Q 603 150 603 325 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-3" transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-48"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(59.1875 0)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(123.203125 0)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(154.984375 0)"/> <use xlink:href="#f41-DejaVuSerif-17" transform="translate(186.765625 0)"/> </g> </g> <g id="f41-text_4"> <!-- eq. 3 $-$ eq. 1 --> <g style="fill: var(--fig-accent)" transform="translate(131.445 220.47) scale(0.14 -0.14)"> <defs> <path id="f41-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(0 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(59.179688 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(123.193359 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(154.980469 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(186.767578 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(250.390625 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-8cf" transform="translate(282.177734 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(365.966797 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(397.753906 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(456.933594 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(520.947266 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(552.734375 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-14" transform="translate(584.521484 0.78125)"/> </g> </g> <g id="f41-text_5"> <!-- $k = 2$: incontro in $(-1,\ 2)$ --> <g style="fill: var(--fig-ink)" transform="translate(26.01 16.02) scale(0.135 -0.135)"> <defs> <path id="f41-DejaVuSerif-Italic-4e" d="M 2113 2075 L 3034 331 L 3513 331 L 3450 0 L 2528 0 L 1622 1697 L 1088 1275 L 841 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 1169 1697 L 2822 2988 L 2344 2988 L 2406 3322 L 3341 3322 L 3278 2988 L 2113 2075 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-Italic-4e" transform="translate(0 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-20" transform="translate(79.560547 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-15" transform="translate(182.314453 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-1d" transform="translate(245.9375 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(279.628906 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(311.416016 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(343.398438 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-46" transform="translate(407.802734 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(463.808594 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(524.013672 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-57" transform="translate(588.417969 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-55" transform="translate(628.603516 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(676.40625 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(736.611328 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(768.398438 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(800.380859 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(864.785156 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-b" transform="translate(896.572266 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-8cf" transform="translate(935.585938 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-14" transform="translate(1019.375 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-f" transform="translate(1082.998047 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-15" transform="translate(1165.357757 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-c" transform="translate(1228.980804 0.015625)"/> </g> </g> <g id="f41-line2d_2"> <path d="M 59.826667 -1 L 217.44 471.84 L 217.44 471.84 " clip-path="url(#f41-p7633ce1d6b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: square"/> </g> <g id="f41-line2d_3"> <defs> <path id="f41-m7e237e5eee" d="M 0 4.5 C 1.193414 4.5 2.338109 4.025852 3.181981 3.181981 C 4.025852 2.338109 4.5 1.193414 4.5 0 C 4.5 -1.193414 4.025852 -2.338109 3.181981 -3.181981 C 2.338109 -4.025852 1.193414 -4.5 0 -4.5 C -1.193414 -4.5 -2.338109 -4.025852 -3.181981 -3.181981 C -4.025852 -2.338109 -4.5 -1.193414 -4.5 0 C -4.5 1.193414 -4.025852 2.338109 -3.181981 3.181981 C -2.338109 4.025852 -1.193414 4.5 0 4.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f41-p7633ce1d6b)"> <use xlink:href="#f41-m7e237e5eee" x="85.14" y="74.94" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f41-line2d_4"> <defs> <path id="f41-m6bdd0b2e59" d="M 0 2 C 0.530406 2 1.03916 1.789267 1.414214 1.414214 C 1.789267 1.03916 2 0.530406 2 0 C 2 -0.530406 1.789267 -1.03916 1.414214 -1.414214 C 1.03916 -1.789267 0.530406 -2 0 -2 C -0.530406 -2 -1.03916 -1.789267 -1.414214 -1.414214 C -1.789267 -1.03916 -2 -0.530406 -2 0 C -2 0.530406 -1.789267 1.03916 -1.414214 1.414214 C -1.03916 1.789267 -0.530406 2 0 2 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f41-p7633ce1d6b)"> <use xlink:href="#f41-m6bdd0b2e59" x="85.14" y="74.94" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> <g id="f41-axes_2"> <g id="f41-patch_5"> <path d="M 239.588571 233.7 L 451.268571 233.7 L 451.268571 22.02 L 239.588571 22.02 L 239.588571 233.7 z " style="fill: none"/> </g> <g id="f41-matplotlib.axis_3"/> <g id="f41-matplotlib.axis_4"/> <g id="f41-line2d_5"> <path d="M 243.028571 -1 L 451.268571 207.24 L 451.268571 207.24 " clip-path="url(#f41-p9f6862a86d)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.4; stroke-linecap: square"/> </g> <g id="f41-patch_6"> <path d="M 345.428571 233.7 L 345.428571 22.02 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-patch_7"> <path d="M 239.588571 127.86 L 451.268571 127.86 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-text_6"> <!-- $x_3$ --> <g style="fill: var(--fig-axis)" transform="translate(435.668571 147.194484) scale(0.15 -0.15)"> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_7"> <!-- $x_4$ --> <g style="fill: var(--fig-axis)" transform="translate(349.397571 33.416484) scale(0.15 -0.15)"> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-17" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_8"> <!-- eq. 4 --> <g style="fill: var(--fig-ink)" transform="translate(398.348571 156.966) scale(0.14 -0.14)"> <use xlink:href="#f41-DejaVuSerif-48"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(59.1875 0)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(123.203125 0)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(154.984375 0)"/> <use xlink:href="#f41-DejaVuSerif-17" transform="translate(186.765625 0)"/> </g> </g> <g id="f41-text_9"> <!-- eq. 3 $-$ eq. 1 --> <g style="fill: var(--fig-accent)" transform="translate(244.880571 167.55) scale(0.14 -0.14)"> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(0 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(59.179688 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(123.193359 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(154.980469 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(186.767578 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(250.390625 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-8cf" transform="translate(282.177734 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(365.966797 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(397.753906 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(456.933594 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(520.947266 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(552.734375 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-14" transform="translate(584.521484 0.78125)"/> </g> </g> <g id="f41-text_10"> <!-- $k = 0$: incontro in $(1,\ 0)$ --> <g style="fill: var(--fig-ink)" transform="translate(265.441071 16.02) scale(0.135 -0.135)"> <defs> <path id="f41-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-Italic-4e" transform="translate(0 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-20" transform="translate(79.560547 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-13" transform="translate(182.314453 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-1d" transform="translate(245.9375 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(279.628906 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(311.416016 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(343.398438 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-46" transform="translate(407.802734 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(463.808594 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(524.013672 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-57" transform="translate(588.417969 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-55" transform="translate(628.603516 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(676.40625 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(736.611328 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(768.398438 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(800.380859 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(864.785156 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-b" transform="translate(896.572266 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-14" transform="translate(935.585938 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-f" transform="translate(999.208984 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-13" transform="translate(1081.568694 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-c" transform="translate(1145.191741 0.015625)"/> </g> </g> <g id="f41-line2d_6"> <path d="M 239.588571 260.16 L 451.268571 48.48 L 451.268571 48.48 " clip-path="url(#f41-p9f6862a86d)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: square"/> </g> <g id="f41-line2d_7"> <g clip-path="url(#f41-p9f6862a86d)"> <use xlink:href="#f41-m7e237e5eee" x="371.888571" y="127.86" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f41-line2d_8"> <g clip-path="url(#f41-p9f6862a86d)"> <use xlink:href="#f41-m6bdd0b2e59" x="371.888571" y="127.86" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> </g> <g id="f41-axes_3"> <g id="f41-patch_8"> <path d="M 5.76 487.716 L 217.44 487.716 L 217.44 276.036 L 5.76 276.036 L 5.76 487.716 z " style="fill: none"/> </g> <g id="f41-matplotlib.axis_5"/> <g id="f41-matplotlib.axis_6"/> <g id="f41-line2d_9"> <path d="M 5.76 249.576 L 217.44 461.256 L 217.44 461.256 " clip-path="url(#f41-p151a7d87cf)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.4; stroke-linecap: square"/> </g> <g id="f41-patch_9"> <path d="M 111.6 487.716 L 111.6 276.036 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-patch_10"> <path d="M 5.76 381.876 L 217.44 381.876 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-text_11"> <!-- $x_3$ --> <g style="fill: var(--fig-axis)" transform="translate(201.84 401.210484) scale(0.15 -0.15)"> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_12"> <!-- $x_4$ --> <g style="fill: var(--fig-axis)" transform="translate(115.569 287.432484) scale(0.15 -0.15)"> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-17" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_13"> <!-- eq. 4 --> <g style="fill: var(--fig-ink)" transform="translate(164.52 410.982) scale(0.14 -0.14)"> <use xlink:href="#f41-DejaVuSerif-48"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(59.1875 0)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(123.203125 0)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(154.984375 0)"/> <use xlink:href="#f41-DejaVuSerif-17" transform="translate(186.765625 0)"/> </g> </g> <g id="f41-text_14"> <!-- eq. 3 $-$ eq. 1 --> <g style="fill: var(--fig-accent)" transform="translate(16.344 418.92) scale(0.14 -0.14)"> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(0 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(59.179688 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(123.193359 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(154.980469 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(186.767578 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(250.390625 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-8cf" transform="translate(282.177734 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(365.966797 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(397.753906 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-54" transform="translate(456.933594 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-11" transform="translate(520.947266 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(552.734375 0.78125)"/> <use xlink:href="#f41-DejaVuSerif-14" transform="translate(584.521484 0.78125)"/> </g> </g> <g id="f41-text_15"> <!-- $k = 1$: parallele, mai incontro --> <g style="fill: var(--fig-ink)" transform="translate(12.78 270.036) scale(0.135 -0.135)"> <defs> <path id="f41-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-Italic-4e" transform="translate(0 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-20" transform="translate(79.560547 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-14" transform="translate(182.314453 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-1d" transform="translate(245.9375 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(279.628906 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-53" transform="translate(311.416016 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-44" transform="translate(375.429688 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-55" transform="translate(435.048828 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-44" transform="translate(482.851562 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4f" transform="translate(542.470703 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4f" transform="translate(574.453125 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(606.435547 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4f" transform="translate(665.615234 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(697.597656 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-f" transform="translate(756.777344 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(788.564453 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-50" transform="translate(820.351562 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-44" transform="translate(915.175781 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(974.794922 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(1006.777344 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(1038.564453 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(1070.546875 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-46" transform="translate(1134.951172 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(1190.957031 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(1251.162109 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-57" transform="translate(1315.566406 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-55" transform="translate(1355.751953 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(1403.554688 0.015625)"/> </g> </g> <g id="f41-line2d_10"> <path d="M 5.76 302.496 L 197.74 494.476 L 197.74 494.476 " clip-path="url(#f41-p151a7d87cf)" style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: square"/> </g> </g> <g id="f41-axes_4"> <g id="f41-patch_11"> <path d="M 239.588571 487.716 L 451.268571 487.716 L 451.268571 276.036 L 239.588571 276.036 L 239.588571 487.716 z " style="fill: none"/> </g> <g id="f41-matplotlib.axis_7"/> <g id="f41-matplotlib.axis_8"/> <g id="f41-line2d_11"> <path d="M 239.588571 249.576 L 451.268571 461.256 L 451.268571 461.256 " clip-path="url(#f41-p35718008d4)" style="fill: none; stroke: var(--fig-ink); stroke-width: 2.4; stroke-linecap: square"/> </g> <g id="f41-patch_12"> <path d="M 345.428571 487.716 L 345.428571 276.036 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-patch_13"> <path d="M 239.588571 381.876 L 451.268571 381.876 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f41-text_16"> <!-- $x_3$ --> <g style="fill: var(--fig-axis)" transform="translate(435.668571 401.210484) scale(0.15 -0.15)"> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_17"> <!-- $x_4$ --> <g style="fill: var(--fig-axis)" transform="translate(349.397571 287.432484) scale(0.15 -0.15)"> <use xlink:href="#f41-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> <use xlink:href="#f41-DejaVuSerif-17" transform="translate(56.396484 -14.906201) scale(0.7)"/> </g> </g> <g id="f41-text_18"> <!-- la stessa retta --> <g style="fill: var(--fig-accent)" transform="translate(358.658571 344.832) scale(0.14 -0.14)"> <defs> <path id="f41-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-4f"/> <use xlink:href="#f41-DejaVuSerif-44" transform="translate(31.984375 0)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(91.609375 0)"/> <use xlink:href="#f41-DejaVuSerif-56" transform="translate(123.390625 0)"/> <use xlink:href="#f41-DejaVuSerif-57" transform="translate(174.703125 0)"/> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(214.890625 0)"/> <use xlink:href="#f41-DejaVuSerif-56" transform="translate(274.078125 0)"/> <use xlink:href="#f41-DejaVuSerif-56" transform="translate(325.390625 0)"/> <use xlink:href="#f41-DejaVuSerif-44" transform="translate(376.703125 0)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(436.328125 0)"/> <use xlink:href="#f41-DejaVuSerif-55" transform="translate(468.109375 0)"/> <use xlink:href="#f41-DejaVuSerif-48" transform="translate(515.90625 0)"/> <use xlink:href="#f41-DejaVuSerif-57" transform="translate(575.09375 0)"/> <use xlink:href="#f41-DejaVuSerif-57" transform="translate(615.28125 0)"/> <use xlink:href="#f41-DejaVuSerif-44" transform="translate(655.46875 0)"/> </g> </g> <g id="f41-text_19"> <!-- $k = 1$, $b_3 = 2$: coincidono --> <g style="fill: var(--fig-ink)" transform="translate(263.011071 270.036) scale(0.135 -0.135)"> <defs> <path id="f41-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="f41-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f41-DejaVuSerif-Italic-4e" transform="translate(0 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-20" transform="translate(79.560547 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-14" transform="translate(182.314453 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-f" transform="translate(245.9375 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(277.724609 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-Italic-45" transform="translate(309.511719 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-16" transform="translate(373.525391 -14.984326) scale(0.7)"/> <use xlink:href="#f41-DejaVuSerif-20" transform="translate(439.621582 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-15" transform="translate(542.375488 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-1d" transform="translate(605.998535 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-3" transform="translate(639.689941 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-46" transform="translate(671.477051 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(727.48291 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(787.687988 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(819.67041 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-46" transform="translate(884.074707 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-4c" transform="translate(940.080566 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-47" transform="translate(972.062988 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(1036.07666 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-51" transform="translate(1096.281738 0.015625)"/> <use xlink:href="#f41-DejaVuSerif-52" transform="translate(1160.686035 0.015625)"/> </g> </g> <g id="f41-line2d_12"> <path d="M 239.588571 249.576 L 451.268571 461.256 L 451.268571 461.256 " clip-path="url(#f41-p35718008d4)" style="fill: none; stroke-dasharray: 17,13.6; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 3.4"/> </g> </g> </g> <defs> <clipPath id="f41-p7633ce1d6b"> <rect x="5.76" y="22.02" width="211.68" height="211.68"/> </clipPath> <clipPath id="f41-p9f6862a86d"> <rect x="239.588571" y="22.02" width="211.68" height="211.68"/> </clipPath> <clipPath id="f41-p151a7d87cf"> <rect x="5.76" y="276.036" width="211.68" height="211.68"/> </clipPath> <clipPath id="f41-p35718008d4"> <rect x="239.588571" y="276.036" width="211.68" height="211.68"/> </clipPath> </defs> </svg></figure>
>
> - $k \neq 1$ (in alto, $k = 2$ e $k = 0$): pendenze diverse, le rette si tagliano in **un punto solo**. Quel punto dà $x_3$ e $x_4$, il passo 2 dà $x_2$ e $x_1$: **una soluzione, unica**.
> - $k = 1$ (in basso a sinistra): stessa pendenza $-1$, ma l'eq. 4 taglia l'asse $x_4$ in $1$ e l'altra in $-1$. Sono **parallele distinte**, non si incontrano mai: **nessuna soluzione**. In numeri: $x_3 + x_4$ dovrebbe valere $1$ e $-1$ insieme.
>
> **Passo 4: dove sta $\vec{b}$.** Il $-1$ della seconda retta viene da $b_3 - b_1 = 0 - 1$. Se il foglio avesse dato un $\vec{b}$ con $b_3 - b_1 = b_4$, per esempio $b_3 = 2$, con $k = 1$ le due rette sarebbero la **stessa retta** (in basso a destra) e ogni suo punto andrebbe bene: infinite soluzioni. Per questo, quando la matrice non è invertibile, la risposta dipende da $\vec{b}$.
>
> **Lo stesso in ranghi.** Rette parallele vuol dire che a sinistra della barra le due righe sono uguali: una riga di $A_1$ è superflua e il rango scende a $3$. Rette distinte vuol dire che a destra della barra i numeri sono diversi: la matrice completa conserva rango $4$. Ranghi diversi, e Rouché-Capelli dice incompatibile.
>
> | $k$ | rette | $\operatorname{rg} A$ | $\operatorname{rg} [A \vert \vec{b}]$ | soluzioni |
> | --- | --- | --- | --- | --- |
> | $k \neq 1$ | incidenti | $4$ | $4$ | una |
> | $k = 1$ | parallele | $3$ | $4$ | nessuna |
> | $1$, $b_3 = 2$ | coincidono | $3$ | $3$ | infinite |

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

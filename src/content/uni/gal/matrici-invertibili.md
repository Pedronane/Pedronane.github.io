---
title: Matrici invertibili
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-10-06
lezioni: []
ordine: 9
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L5, lun 5/10, ultima parte (matrici delle operazioni elementari, definizione di invertibile, quaderno p. 60-63) e in L6, mar 6/10 (rango e invertibilità, calcolo dell'inversa, quaderno p. 64-67). Gli appunti scritti della prof sul capitolo 3 non sono ancora su Moodle: la fonte è il quaderno di Pietro, con definizioni ed enunciati dalla dispensa Postinghel, <span class="src">p. 69-71</span> (invertibilità), <span class="src">p. 71-73</span> (matrici delle operazioni elementari), <span class="src">p. 73-74</span> (rango e invertibilità, algoritmo), <span class="src">p. 75-76</span> (es. 40-42), <span class="src">p. 80</span> (sistemi con $A$ invertibile). Il confine fra L5 e L6 nel quaderno non è segnato: qui è messo dove inizia il teorema, che è il titolo della L6 nel <span class="src">piano</span>. Si appoggia su [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).

> [!abstract] Per l'esame
> - **Saper enunciare**: le matrici $S_{ij}$, $D_i(\lambda)$, $E_{ij}(\mu)$ e le loro inverse; $\operatorname{rref}(A) = PA$; matrice invertibile e inversa; $(AB)^{-1} = B^{-1}A^{-1}$; **il teorema “$A$ invertibile se e solo se $\operatorname{rg}(A) = n$"**, che a lezione è segnato con tre stelle (★★★). Sono le domande 3.2-3.4 del [foglio 3](/uni/gal/foglio-3-svolto/).
> - **Saper dimostrare**: il teorema rango-invertibilità, nelle due direzioni (★); $(AB)^{-1} = B^{-1}A^{-1}$; perché l'algoritmo su $[A \mid I_n]$ dà $A^{-1}$; perché una matrice con una riga nulla non è invertibile.
> - **Saper fare**: decidere se una matrice è invertibile dal rango, anche con un parametro; calcolare l'inversa con Gauss-Jordan su $[A \mid I_n]$ e verificarla con $AA^{-1} = I_n$; risolvere $A\vec{x} = \vec{b}$ come $\vec{x} = A^{-1}\vec{b}$.
> - **Dove esce**: esercizi 3.8, 3.9, 3.10 del foglio 3 ("per quali $k$ è invertibile, e calcolare l'inversa"), probabilmente l'esercitazione 3 del 12/10. Il teorema ★★★ è il candidato naturale per la domanda di teoria con dimostrazione.

**L'idea.** Con i numeri, $ax = b$ si risolve dividendo per $a$ se $a \neq 0$. Con le matrici non si divide, ma si può moltiplicare per una matrice $A^{-1}$ che "disfa" $A$. Non tutte le matrici quadrate ce l'hanno, e il rango dice esattamente quali. Il calcolo passa di nuovo da Gauss-Jordan, perché ogni operazione elementare è una moltiplicazione a sinistra per una matrice.

```
   operazione elementare su A   =   (matrice dell'operazione) · A
   Gauss-Jordan fino a rref     =   P · A,   P = prodotto di matrici elementari
   rg(A) = n                    =>  rref(A) = I_n  =>  PA = I_n  =>  A⁻¹ = P
   [A | I_n]  --Gauss-Jordan-->  [I_n | P]      il blocco destro registra P
```

## Definizioni

### Matrici delle operazioni elementari

La prof (quaderno p. 60; dispensa <span class="src">p. 71</span>): le operazioni elementari viste nel capitolo 2 possono essere realizzate tramite la **moltiplicazione a sinistra** per delle matrici quadrate. Le matrici si ottengono applicando l'operazione all'identità $I_m$ ($m$ = numero di righe di $A$):
- **$S_{ij}$**: la matrice ottenuta da $I_m$ scambiandone la $i$-esima riga con la $j$-esima;
- **$D_i(\lambda)$**, $\lambda \neq 0$: la matrice ottenuta da $I_m$ moltiplicandone la $i$-esima riga per $\lambda$;
- **$E_{ij}(\mu)$**, $\mu \neq 0$: la matrice ottenuta da $I_m$ sommando alla riga $i$-esima la riga $j$-esima moltiplicata per $\mu$. Risultato: $I_m$ con un $\mu$ in più al posto $(i, j)$.

Allora $S_{ij}A$, $D_i(\lambda)A$, $E_{ij}(\mu)A$ sono $A$ con l'operazione già fatta.

In $3 \times 3$:
$$
S_{12} = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \qquad D_2(\lambda) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & 1 \end{pmatrix} \qquad E_{31}(\mu) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ \mu & 0 & 1 \end{pmatrix}
$$

**Perché funziona.** La riga $i$ di $MA$ è "riga $i$ di $M$ per le colonne di $A$", cioè una combinazione delle righe di $A$ con i coefficienti scritti nella riga $i$ di $M$. In $E_{31}(\mu)$ la terza riga è $(\mu, 0, 1)$: la terza riga del prodotto è $\mu R_1 + R_3$. Le altre righe di $E_{31}(\mu)$ sono quelle di $I$ e lasciano $R_1$, $R_2$ al loro posto. Esempio della dispensa (<span class="src">es. 38</span>): $E_{31}(-1)\begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 1 & -1 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 0 & -3 & 2 \end{pmatrix}$, cioè $R_3 \to R_3 - R_1$.

### Matrice invertibile e inversa

La prof (quaderno p. 61; dispensa <span class="src">Def. 35</span>): una matrice quadrata $A \in M_n(\mathbb{R})$ è **invertibile** se esiste $B \in M_n(\mathbb{R})$ tale che
$$
BA = AB = I_n
$$
In tal caso $B$ si dice l'**inversa** di $A$ e la si denota $A^{-1}$.

NB della prof: non è detto in partenza che $AB$ e $BA$ coincidano (il prodotto non è commutativo, [Matrici e operazioni](/uni/gal/matrici-e-operazioni/)), ma per l'inversa **devono** venire entrambi $I_n$.

**Perché "la" inversa.** Se ce n'è una, è unica (dispensa, <span class="src">Oss. 9</span>): se $B$ e $B'$ sono due inverse, $B = BI_n = B(AB') = (BA)B' = I_nB' = B'$.

**Solo matrici quadrate.** La definizione è data in $M_n(\mathbb{R})$: per una $A$ $m \times n$ con $m \neq n$, $AB$ e $BA$ avrebbero ordini diversi e non potrebbero essere tutte e due $I$ dello stesso ordine.

Esempi: $I_n$ è invertibile con $I_n^{-1} = I_n$ (quaderno p. 61). $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$ (dispensa, es. 36). La dispensa lì scrive "ogni matrice diagonale è invertibile": vale solo se **tutti gli elementi della diagonale sono non nulli** ($O_n$ è diagonale e non è invertibile).

## Enunciati

### Le matrici delle operazioni elementari sono invertibili

La prof (quaderno p. 61; dispensa <span class="src">Prop. 7</span>):
$$
S_{ij}^{-1} = S_{ij} \qquad D_i(\lambda)^{-1} = D_i\!\left(\tfrac{1}{\lambda}\right)\ (\lambda \neq 0) \qquad E_{ij}(\mu)^{-1} = E_{ij}(-\mu)
$$
**Perché.** L'inversa è l'operazione che disfa: scambiare di nuovo le stesse due righe; dividere per $\lambda$ la riga moltiplicata per $\lambda$; togliere $\mu R_j$ alla riga a cui lo si era aggiunto. Per esempio $E_{ij}(-\mu)E_{ij}(\mu)A$ fa prima $R_i \to R_i + \mu R_j$ e poi $R_i \to R_i - \mu R_j$, e torna $A$. Qui si vede perché $D_i(0)$ non è ammessa: moltiplicare una riga per $0$ non si può disfare.

### Gauss-Jordan come prodotto: $\operatorname{rref}(A) = PA$

La prof (quaderno p. 61; dispensa <span class="src">Prop. 6</span>): data $A \in M_{m \times n}(\mathbb{R})$, $\operatorname{rref}(A)$ può essere ottenuta moltiplicando $A$ a sinistra per un'opportuna matrice quadrata $P$ di ordine $m$, prodotto di matrici di operazioni elementari:
$$
\operatorname{rref}(A) = PA
$$
**Perché.** Gauss-Jordan è una sequenza finita di operazioni elementari, e ognuna è una moltiplicazione a sinistra. Se le operazioni sono $M_1$, poi $M_2$, ..., poi $M_r$, allora $\operatorname{rref}(A) = M_r \cdots M_2 M_1 A$ e $P = M_r \cdots M_1$. L'ordine è rovesciato: l'ultima operazione sta più a sinistra.

### Osservazione 1: righe o colonne nulle

La prof (quaderno p. 63; dispensa <span class="src">Oss. 10</span>): tutte le matrici quadrate che hanno una riga o una colonna di zeri **non sono invertibili**.

> [!note]- Perché
> **Riga $i$ nulla in $A$.** Per ogni $B$, la riga $i$ di $AB$ è "riga $i$ di $A$ per le colonne di $B$", quindi tutta nulla. Ma la riga $i$ di $I_n$ ha un $1$ al posto $i$. Nessuna $B$ dà $AB = I_n$.
>
> **Colonna $j$ nulla in $A$.** Per ogni $B$, la colonna $j$ di $BA$ è "righe di $B$ per la colonna $j$ di $A$", quindi tutta nulla. Nessuna $B$ dà $BA = I_n$. $\square$

### Osservazione 2: il prodotto di invertibili è invertibile

La prof (quaderno p. 63; dispensa <span class="src">Oss. 11</span>): se $A, B \in M_n(\mathbb{R})$ sono invertibili, anche il loro prodotto è invertibile, e l'inversa è il prodotto della seconda inversa per la prima:
$$
(AB)^{-1} = B^{-1}A^{-1}
$$

> [!note]- Dimostrazione
> La prof (quaderno p. 63) fa un lato:
> $$
> (AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AI_nA^{-1} = AA^{-1} = I_n
> $$
> Per la definizione serve anche l'altro (dispensa):
> $$
> (B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}I_nB = B^{-1}B = I_n
> $$
> Si usa solo l'associativa: le parentesi si spostano, l'ordine dei fattori no. $\square$

Ripetendo il ragionamento, un prodotto di quante si vuole matrici invertibili è invertibile: $(M_r \cdots M_1)^{-1} = M_1^{-1} \cdots M_r^{-1}$. In particolare la $P$ di $\operatorname{rref}(A) = PA$ è **sempre invertibile**.

Per ricordare l'ordine: si toglie prima l'ultima cosa messa, come le scarpe dopo i calzini.

### ★★★ Teorema: rango e invertibilità

La prof (quaderno p. 64, con tre stelle; dispensa <span class="src">Teorema 3.2.3.1</span>):

> [!abstract] Teorema
> Sia $A \in M_n(\mathbb{R})$. Allora
> $$
> A \text{ è invertibile} \iff \operatorname{rg}(A) = n
> $$

Ipotesi: $A$ quadrata di ordine $n$. Tesi: le due condizioni si implicano a vicenda. Detto in un altro modo: $A$ è invertibile se e solo se $\operatorname{rref}(A) = I_n$, cioè se Gauss-Jordan mette un pivot in ogni colonna.

**Perché conta.** Trasforma una domanda difficile ("esiste una matrice $B$ con $AB = BA = I$?", che sono $n^2$ equazioni in $n^2$ incognite) in un conto che si sa già fare: ridurre a scalini e contare i pivot. Con un parametro, "per quali $k$ è invertibile" diventa "per quali $k$ il rango è massimo".

> [!note]- Dimostrazione (della prof, con un passaggio completato)
> **Ingredienti.** $\operatorname{rg}(A) = \operatorname{rg}(\operatorname{rref}(A))$ per definizione di rango. Per la proposizione di prima esiste $P \in M_n(\mathbb{R})$ con
> $$
> (\ast) \qquad \operatorname{rref}(A) = PA
> $$
> dove $P$ è un prodotto di matrici di operazioni elementari, che sono invertibili; quindi anche $P$ è invertibile (osservazione 2). Sia $P^{-1}$ la sua inversa.
>
> **($\Rightarrow$)** Se $A$ è invertibile, allora $\operatorname{rref}(A) = PA$ è invertibile, perché prodotto di due invertibili (osservazione 2 e $(\ast)$). Per l'osservazione 1, $\operatorname{rref}(A)$ non può avere righe nulle. Una matrice $n \times n$ ridotta per righe senza righe nulle ha un pivot in ognuna delle $n$ righe: ha rango $n$. Quindi $\operatorname{rg}(A) = n$.
>
> **($\Leftarrow$)** Se $\operatorname{rg}(A) = n$, allora $\operatorname{rref}(A)$ è quadrata $n \times n$, ridotta per righe, con $n$ pivot: un pivot per colonna, ognuno uguale a $1$ e unico non nullo della sua colonna. È per forza $I_n$. Per $(\ast)$:
> $$
> PA = I_n
> $$
> Nel quaderno qui c'è "quindi $P = A^{-1}$". Manca un passo, perché $PA = I_n$ è solo **metà** della definizione: serve anche $AP = I_n$. Si chiude usando che $P$ è invertibile. Moltiplicando $PA = I_n$ a sinistra per $P^{-1}$:
> $$
> P^{-1}(PA) = P^{-1}I_n \implies A = P^{-1}
> $$
> Allora $AP = P^{-1}P = I_n$ e $PA = I_n$: $A$ è invertibile con $A^{-1} = P$. $\square$

### Calcolo dell'inversa: perché $[A \mid I_n]$ funziona

La prof (quaderno p. 65; dispensa <span class="src">p. 74</span>): sia $A \in M_n(\mathbb{R})$ e sia $B = [A \mid I_n]$, matrice $n \times 2n$. Allora
$$
A \text{ invertibile} \iff \operatorname{rref}(B) = [I_n \mid P], \quad \text{e in tal caso } P = A^{-1}
$$

> [!note]- Dimostrazione (della prof)
> Sia $P$ il prodotto delle matrici delle operazioni che portano $B$ alla forma ridotta. Per la definizione di prodotto righe per colonne, moltiplicare a sinistra una matrice affiancata vuol dire moltiplicare ciascun blocco:
> $$
> \operatorname{rref}(B) = PB = P[A \mid I_n] = [PA \mid PI_n] = [PA \mid P]
> $$
> Il blocco sinistro $PA$ è ridotto per righe (lo è tutta la matrice), quindi $PA = \operatorname{rref}(A)$. Per il teorema, $A$ è invertibile se e solo se $\operatorname{rref}(A) = I_n$, cioè se a sinistra compare $I_n$; e in quel caso, dalla dimostrazione del teorema, $A^{-1} = P$, che è proprio il blocco destro. $\square$

**In parole.** Il blocco destro parte da $I_n$ e subisce le stesse operazioni di $A$: alla fine contiene il prodotto $P$ di tutte le operazioni fatte. Se quelle operazioni hanno trasformato $A$ in $I_n$, allora $P$ è l'inversa.

### Osservazione: sistemi con $A$ invertibile

La prof (quaderno p. 67; dispensa <span class="src">Prop. 11</span>): se $A \in M_n(\mathbb{R})$ è invertibile e $A\vec{x} = \vec{b}$ è un sistema lineare, le soluzioni si trovano con $A^{-1}$:
$$
\vec{x} = A^{-1}\vec{b}
$$
ed è l'**unica** soluzione.

> [!note]- Dimostrazione
> **Se $\vec{x}$ è una soluzione, allora $\vec{x} = A^{-1}\vec{b}$** (la prof): da $A\vec{x} = \vec{b}$, moltiplicando a sinistra per $A^{-1}$, $A^{-1}(A\vec{x}) = A^{-1}\vec{b}$, e $A^{-1}(A\vec{x}) = (A^{-1}A)\vec{x} = I_n\vec{x} = \vec{x}$.
>
> **$A^{-1}\vec{b}$ è davvero una soluzione** (questa metà manca nel quaderno e nella dispensa): $A(A^{-1}\vec{b}) = (AA^{-1})\vec{b} = I_n\vec{b} = \vec{b}$. Qui serve l'altra metà della definizione, $AA^{-1} = I_n$.
>
> Insieme: esiste una soluzione ed è una sola. $\square$

Con Rouché-Capelli torna: $A$ invertibile vuol dire $\operatorname{rg}(A) = n$; anche $[A \mid \vec{b}]$, che ha $n$ righe, ha rango $n$; ranghi uguali e uguali al numero di incognite, quindi soluzione unica, per **ogni** $\vec{b}$. In particolare l'omogeneo $A\vec{x} = \vec{0}$ ha solo $\vec{x} = \vec{0}$, cioè $N(A) = \{\vec{0}\}$ ([Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/)).

## Metodo

### Calcolare l'inversa di $A \in M_n(\mathbb{R})$

1. Scrivi $[A \mid I_n]$, matrice $n \times 2n$.
2. Gauss-Jordan su **righe intere**: ogni operazione si fa anche sul blocco destro. Scrivi la sigla di ogni passo.
3. Arrivato alla forma a scalini, conta i pivot **del blocco sinistro**. Se sono meno di $n$: $\operatorname{rg}(A) < n$, $A$ **non è invertibile**, ci si ferma (non serve finire).
4. Altrimenti riduzione all'indietro: $D_i\!\left(\frac{1}{p_i}\right)$ sui pivot, poi zeri sopra ogni pivot, fino a $[I_n \mid P]$.
5. $A^{-1} = P$. **Verifica** $AA^{-1} = I_n$ (o $A^{-1}A$): con frazioni conviene moltiplicare per il denominatore comune e lavorare con interi.

### Invertibilità con un parametro

1. Riduci $A(k)$ a scalini tenendo $k$, scegliendo pivot senza parametro finché puoi (scambi).
2. I pivot che dipendono da $k$: trova dove si annullano (fattorizza).
3. $A(k)$ è invertibile per tutti i $k$ che non annullano nessun pivot; per i valori critici sostituisci e conta di nuovo i pivot (il rango scende sotto $n$).
4. Se chiede l'inversa per i $k$ ammessi: si divide per i pivot **dopo** averli dichiarati non nulli.

### Risolvere $A\vec{x} = \vec{b}$ con l'inversa

Conviene quando $A^{-1}$ è già stata calcolata (spesso è il punto prima dell'esercizio) o quando ci sono più $\vec{b}$ con la stessa $A$. Altrimenti Gauss-Jordan su $[A \mid \vec{b}]$ costa meno.

## Esempi svolti a lezione

> [!example]- Prof, 5/10, quaderno p. 60: $S_{12}$ su una $2 \times 4$
> $m = 2$, quindi le matrici elementari sono $2 \times 2$. $S_{12} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (righe di $I_2$ scambiate).
> $$
> A = \begin{pmatrix} 0 & 2 & 1 & 0 \\ 1 & 3 & -1 & 0 \end{pmatrix} \xrightarrow{S_{12}} \begin{pmatrix} 1 & 3 & -1 & 0 \\ 0 & 2 & 1 & 0 \end{pmatrix} = B
> $$
> **Esercizio della prof: verificare $S_{12}A = B$.** Riga 1 di $S_{12}$, $(0, 1)$, per le colonne di $A$: prende $0 \cdot R_1 + 1 \cdot R_2 = (1, 3, -1, 0)$. Riga 2, $(1, 0)$: prende $R_1 = (0, 2, 1, 0)$. Per esteso, l'elemento $(1, 2)$ è $0 \cdot 2 + 1 \cdot 3 = 3$. Torna $B$.
>
> $S_{12}$ è $2 \times 2$ anche se $A$ ha 4 colonne: l'ordine della matrice elementare è il numero di **righe** di $A$.

> [!example]- Prof, 5/10, quaderno p. 62: le inverse delle matrici elementari
> **$3 \times 3$, $S_{12}$.** $S_{12}^{-1} = S_{12}$: infatti $S_{12}S_{12}$ scambia due volte le prime due righe di $I_3$, e torna $I_3$. Riga per colonna: la riga $(0, 1, 0)$ per le colonne di $S_{12}$, $(0, 1, 0)$, $(1, 0, 0)$, $(0, 0, 1)$, dà $(1, 0, 0)$, la prima riga di $I_3$.
>
> **$2 \times 2$, $D_2(2)$.** $D_2(2) = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$, e applicando $D_2\!\left(\frac{1}{2}\right)$ si torna a $I_2$. Quindi $D_2(2)^{-1} = D_2\!\left(\frac{1}{2}\right) = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$.
>
> **$3 \times 3$, $E_{31}(1)$.** Si somma alla terza riga di $I_3$ la prima:
> $$
> E_{31}(1) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} \qquad E_{31}(1)^{-1} = E_{31}(-1) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}
> $$
> Controllo: la terza riga di $E_{31}(-1)E_{31}(1)$ è $(-1, 0, 1)$ per le colonne $(1, 0, 1)$, $(0, 1, 0)$, $(0, 0, 1)$, cioè $(-1 + 1, 0, 1) = (0, 0, 1)$. Le altre righe restano quelle di $I_3$.

> [!example]- Prof, 5/10, quaderno p. 63: una matrice che non si può invertire
> $$
> A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}
> $$
> Sia $B = \begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix}$ con $BA = AB = I_2$. Ma
> $$
> AB = \begin{pmatrix} b_{11} + b_{21} & b_{12} + b_{22} \\ 0 & 0 \end{pmatrix}
> $$
> ha la seconda riga nulla qualunque sia $B$, mentre $I_2$ ha seconda riga $(0, 1)$. **Non si può invertire.** Da qui la prof generalizza nell'osservazione 1: una riga (o colonna) di zeri basta a impedire l'inversa. Torna anche col teorema: $\operatorname{rg}(A) = 1 < 2$.

> [!example]- Prof, 6/10, quaderno p. 65: l'inversa di una $2 \times 2$
> $$
> A = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}, \qquad A^{-1} = \,?
> $$
> $$
> [A \mid I_2] = \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 1 & -1 & 0 & 1 \end{array}\right] \xrightarrow{E_{21}(-1)} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & -3 & -1 & 1 \end{array}\right] \xrightarrow{D_2(-\frac{1}{3})} \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 1 & \frac{1}{3} & -\frac{1}{3} \end{array}\right]
> $$
> Due pivot a sinistra: invertibile. $E_{12}(-2)$: $R_1 - 2R_2 = \left(1, 0 \mid 1 - \frac{2}{3},\ 0 + \frac{2}{3}\right) = \left(1, 0 \mid \frac{1}{3}, \frac{2}{3}\right)$.
> $$
> \left[\begin{array}{cc|cc} 1 & 0 & \frac{1}{3} & \frac{2}{3} \\ 0 & 1 & \frac{1}{3} & -\frac{1}{3} \end{array}\right] \qquad A^{-1} = \begin{pmatrix} \frac{1}{3} & \frac{2}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}
> $$
> **Esercizio della prof: verificare $AA^{-1} = A^{-1}A = I_2$.** Con $3A^{-1} = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}$:
> - $A \cdot 3A^{-1}$: riga $(1, 2)$ dà $1 + 2 = 3$ e $2 - 2 = 0$; riga $(1, -1)$ dà $1 - 1 = 0$ e $2 + 1 = 3$. È $3I_2$.
> - $3A^{-1} \cdot A$: è lo stesso prodotto, perché qui $3A^{-1} = A$. Quindi anche $A^{-1}A = I_2$.
>
> Curiosità di questo esempio: $A^{-1} = \frac{1}{3}A$, cioè $A^2 = 3I_2$.
>
> **L'errore del quaderno.** A p. 65 l'elemento $(1, 2)$ di $A^{-1}$ è scritto $-\frac{2}{3}$. È $+\frac{2}{3}$: $0 - 2 \cdot \left(-\frac{1}{3}\right) = \frac{2}{3}$. Con $-\frac{2}{3}$ la verifica fallisce subito: riga $(1, 2)$ di $A$ per la colonna $\left(-\frac{2}{3}, -\frac{1}{3}\right)$ dà $-\frac{4}{3} \neq 0$.

> [!example]- Prof, 6/10, quaderno p. 66: un non-esempio $3 \times 3$
> $$
> A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & -1 \\ 1 & 0 & 1 \end{pmatrix}
> $$
> Si applica il procedimento a $[A \mid I_3]$. $E_{21}(-\frac{1}{2})$ ed $E_{31}(-\frac{1}{2})$:
> - $R_2 - \frac{1}{2}R_1 = \left(0, \frac{1}{2}, -1 \mid -\frac{1}{2}, 1, 0\right)$
> - $R_3 - \frac{1}{2}R_1 = \left(0, -\frac{1}{2}, 1 \mid -\frac{1}{2}, 0, 1\right)$
>
> $E_{32}(1)$: $R_3 + R_2 = (0, 0, 0 \mid -1, 1, 1)$.
> $$
> \left[\begin{array}{ccc|ccc} 2 & 1 & 0 & 1 & 0 & 0 \\ 0 & \frac{1}{2} & -1 & -\frac{1}{2} & 1 & 0 \\ 0 & 0 & 0 & -1 & 1 & 1 \end{array}\right]
> $$
> A sinistra solo due pivot: **$\operatorname{rg}(A) = 2 < 3$, $A$ non è invertibile**. Ci si ferma qui, la riduzione all'indietro non può far comparire $I_3$. Il blocco destro non è nullo, ma non importa: conta solo il sinistro.
>
> Nel quaderno il procedimento è scritto “$[A \mid I_3]P = \operatorname{rref}(A)$": la forma giusta è $P[A \mid I_3] = \operatorname{rref}([A \mid I_3])$, con $P$ **a sinistra**.
>
> Si vede anche a occhio: $R_1 = R_2 + R_3$, $(2, 1, 0) = (1, 1, -1) + (1, 0, 1)$. Una riga è combinazione delle altre e il rango scende.

**Prof, 6/10, quaderno p. 67: esercizio con parametro.** Sia
$$
A_k = \begin{pmatrix} 1 & 2 & -3 \\ -1 & -2k & 3 \\ \frac{1}{4} & \frac{1}{2} & k \end{pmatrix}, \qquad k \in \mathbb{R}
$$
Calcolare $\operatorname{rg}(A_k)$ al variare di $k$ e discutere l'invertibilità; calcolare $A_0^{-1}$; risolvere $A_0\vec{x} = \vec{b}$ con $\vec{b} = (1, 1, 1)$. A lezione è stata fatta solo la prima parte; le altre due sono l'esercizio 1 qui sotto.

> [!example]- Svolgimento della prima parte (prof)
> $E_{21}(1)$: $R_2 + R_1 = (0,\ 2 - 2k,\ 0)$. $E_{31}(-\frac{1}{4})$: $R_3 - \frac{1}{4}R_1 = \left(0,\ 0,\ k + \frac{3}{4}\right)$.
> $$
> A_k \to \begin{pmatrix} 1 & 2 & -3 \\ 0 & 2(1 - k) & 0 \\ 0 & 0 & k + \frac{3}{4} \end{pmatrix}
> $$
> Possibili pivot: $1$, $2(1 - k)$, $k + \frac{3}{4}$.
> - $k \neq 1$ e $k \neq -\frac{3}{4}$: tre pivot, $\operatorname{rg}(A_k) = 3$.
> - $k = 1$: $\begin{pmatrix} 1 & 2 & -3 \\ 0 & 0 & 0 \\ 0 & 0 & \frac{7}{4} \end{pmatrix}$, che dopo $S_{23}$ è a scalini con due pivot: $\operatorname{rg} = 2$. (Prima dello scambio non è a scalini: una riga nulla sopra una non nulla.)
> - $k = -\frac{3}{4}$: $\begin{pmatrix} 1 & 2 & -3 \\ 0 & \frac{7}{2} & 0 \\ 0 & 0 & 0 \end{pmatrix}$, $\operatorname{rg} = 2$.
>
> Per il teorema ★★★: **$A_k$ è invertibile se e solo se $\operatorname{rg}(A_k) = 3$, cioè $k \neq 1, -\frac{3}{4}$.** In particolare $A_0$ è invertibile.

## Esercizi tipo esame

**Esercizio 1** (il resto dell'esercizio della prof, 6/10). Con $A_k$ come sopra:

- a) calcolare $A_0^{-1}$ e verificare il risultato;
- b) risolvere $A_0\vec{x} = \vec{b}$ con $\vec{b} = (1, 1, 1)$.

> [!example]- Soluzione
> **a)** $A_0 = \begin{pmatrix} 1 & 2 & -3 \\ -1 & 0 & 3 \\ \frac{1}{4} & \frac{1}{2} & 0 \end{pmatrix}$.
> $$
> [A_0 \mid I_3] = \left[\begin{array}{ccc|ccc} 1 & 2 & -3 & 1 & 0 & 0 \\ -1 & 0 & 3 & 0 & 1 & 0 \\ \frac{1}{4} & \frac{1}{2} & 0 & 0 & 0 & 1 \end{array}\right]
> $$
> $E_{21}(1)$: $R_2 + R_1 = (0, 2, 0 \mid 1, 1, 0)$. $E_{31}(-\frac{1}{4})$: $R_3 - \frac{1}{4}R_1 = \left(0, 0, \frac{3}{4} \mid -\frac{1}{4}, 0, 1\right)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & 2 & -3 & 1 & 0 & 0 \\ 0 & 2 & 0 & 1 & 1 & 0 \\ 0 & 0 & \frac{3}{4} & -\frac{1}{4} & 0 & 1 \end{array}\right]
> $$
> Tre pivot, invertibile (come previsto: $k = 0$ non è critico). $D_2(\frac{1}{2})$: $\left(0, 1, 0 \mid \frac{1}{2}, \frac{1}{2}, 0\right)$. $D_3(\frac{4}{3})$: $\left(0, 0, 1 \mid -\frac{1}{3}, 0, \frac{4}{3}\right)$.
>
> $E_{13}(3)$: $R_1 + 3R_3 = (1, 2, 0 \mid 1 - 1,\ 0,\ 4) = (1, 2, 0 \mid 0, 0, 4)$. $E_{12}(-2)$: $R_1 - 2R_2 = (1, 0, 0 \mid -1, -1, 4)$.
> $$
> A_0^{-1} = \begin{pmatrix} -1 & -1 & 4 \\ \frac{1}{2} & \frac{1}{2} & 0 \\ -\frac{1}{3} & 0 & \frac{4}{3} \end{pmatrix}
> $$
> **Verifica $A_0A_0^{-1} = I_3$.** Colonne di $A_0^{-1}$: $\left(-1, \frac{1}{2}, -\frac{1}{3}\right)$, $\left(-1, \frac{1}{2}, 0\right)$, $\left(4, 0, \frac{4}{3}\right)$.
> - riga $(1, 2, -3)$: $-1 + 1 + 1 = 1$; $\ -1 + 1 + 0 = 0$; $\ 4 + 0 - 4 = 0$
> - riga $(-1, 0, 3)$: $1 + 0 - 1 = 0$; $\ 1 + 0 + 0 = 1$; $\ -4 + 0 + 4 = 0$
> - riga $(\frac{1}{4}, \frac{1}{2}, 0)$: $-\frac{1}{4} + \frac{1}{4} = 0$; $\ -\frac{1}{4} + \frac{1}{4} = 0$; $\ 1 + 0 = 1$
>
> **b)** $A_0$ è invertibile, quindi $\vec{x} = A_0^{-1}\vec{b}$:
> $$
> \vec{x} = \begin{pmatrix} -1 - 1 + 4 \\ \frac{1}{2} + \frac{1}{2} + 0 \\ -\frac{1}{3} + 0 + \frac{4}{3} \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}
> $$
> Verifica nel sistema: $2 + 2 - 3 = 1$; $-2 + 0 + 3 = 1$; $\frac{1}{2} + \frac{1}{2} + 0 = 1$. Ed è l'unica soluzione.

**Esercizio 2.** Sia
$$
A(k) = \begin{pmatrix} 1 & -1 & 1 \\ 1 & k & 1 \\ k & 0 & 1 \end{pmatrix}, \qquad k \in \mathbb{R}
$$

- a) Per quali $k$ la matrice $A(k)$ è invertibile?
- b) Calcolare $A(0)^{-1}$.
- c) Per $k = 1$, il sistema $A(1)\vec{x} = (1, 1, 1)$ è risolubile? Se sì, trovare le soluzioni.

> [!example]- Soluzione
> **a)** $E_{21}(-1)$: $R_2 - R_1 = (0, k + 1, 0)$. $E_{31}(-k)$: $R_3 - kR_1 = (0, k, 1 - k)$ (per $k = 0$ il passo non serve, la riga è già $(0, 0, 1)$).
> $$
> \begin{pmatrix} 1 & -1 & 1 \\ 0 & k + 1 & 0 \\ 0 & k & 1 - k \end{pmatrix}
> $$
> - $k = -1$: la seconda riga è nulla e la terza è $(0, -1, 2)$. Con $S_{23}$ si hanno due pivot: $\operatorname{rg} = 2$, **non invertibile**.
> - $k \neq -1$: il pivot $k + 1 \neq 0$ e si può usare $E_{32}\!\left(-\frac{k}{k+1}\right)$, che azzera il $k$ sotto e lascia $1 - k$ in colonna 3 (la seconda riga ha $0$ in colonna 3; per $k = 0$ il passo non serve). Pivot $1$, $k + 1$, $1 - k$: rango $3$ se e solo se anche $k \neq 1$.
>
> **$A(k)$ è invertibile se e solo se $k \neq 1$ e $k \neq -1$.**
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

**Esercizio 3** (★, teoria). 

- a) Enunciare e dimostrare il teorema che lega invertibilità e rango di una matrice quadrata.
- b) Senza calcolare inverse, dire se $M = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 0 & 1 & 1 \end{pmatrix}$ è invertibile.
- c) Sia $A \in M_3(\mathbb{R})$ invertibile. Quante soluzioni ha $A\vec{x} = \vec{0}$? Quanto vale $\operatorname{null}(A)$?

> [!example]- Soluzione
> **a)** Enunciato e dimostrazione sono nel teorema ★★★ sopra. All'esame vanno scritti gli ingredienti ($\operatorname{rref}(A) = PA$ con $P$ invertibile, osservazioni 1 e 2) e poi le due frecce. Il passo che si perde più spesso è l'ultimo: da $PA = I_n$ si ricava $A = P^{-1}$ e solo allora anche $AP = I_n$.
>
> **b)** $E_{21}(-2)$: $R_2 - 2R_1 = (0, 0, 0)$. Poi $S_{23}$:
> $$
> \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> $\operatorname{rg}(M) = 2 < 3$, **non invertibile**. A occhio: la seconda riga è il doppio della prima.
>
> **c)** $\vec{x} = A^{-1}\vec{0} = \vec{0}$: **solo la soluzione nulla**. Quindi $N(A) = \{\vec{0}\}$ e $\operatorname{null}(A) = 0$, coerente con $\operatorname{null}(A) + \operatorname{rg}(A) = 0 + 3 = 3$.

**Esercizio 4.** Siano
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{pmatrix}
$$
Trovare la matrice $X$ tale che $AX = B$. Si può risolvere anche $XA = B$?

> [!example]- Soluzione
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

## Errori tipici

- Dimenticare metà della definizione: l'inversa deve dare $AB = I_n$ **e** $BA = I_n$. Nella dimostrazione del teorema è il passo da $PA = I_n$ ad $A^{-1} = P$, che richiede $A = P^{-1}$.
- Scrivere $(AB)^{-1} = A^{-1}B^{-1}$: l'ordine si rovescia, $B^{-1}A^{-1}$.
- Fare le operazioni solo sul blocco sinistro di $[A \mid I_n]$: il destro diventa $A^{-1}$ solo se subisce le stesse operazioni.
- Sbagliare un segno nella riduzione all'indietro e non accorgersene: è l'errore del quaderno a p. 65 ($-\frac{2}{3}$ invece di $\frac{2}{3}$). La verifica $AA^{-1} = I$ lo trova in un minuto.
- Concludere "invertibile" con rango $n - 1$, o contare i pivot del blocco destro: conta solo il sinistro, e servono $n$ pivot.
- Dividere per un pivot con il parametro prima di aver escluso i valori che lo annullano.
- Mettere $A^{-1}$ dalla parte sbagliata: da $AX = B$ viene $X = A^{-1}B$, non $BA^{-1}$.
- Parlare di inversa di una matrice non quadrata.
- Credere che $A$ non invertibile renda $A\vec{x} = \vec{b}$ impossibile: può avere infinite soluzioni (esercizio 2c).

## Domande

- Come si costruiscono le matrici $S_{ij}$, $D_i(\lambda)$, $E_{ij}(\mu)$, e cosa fa moltiplicarle a sinistra per $A$?

- Quali sono le inverse delle matrici delle operazioni elementari, e perché?

- Perché $\operatorname{rref}(A) = PA$ per una $P$ invertibile?

- Definisci matrice invertibile e inversa. Perché l'inversa, se esiste, è unica?

- Perché una matrice quadrata con una riga di zeri non è invertibile?

- Quanto vale $(AB)^{-1}$? Dimostralo.

- Enuncia e dimostra il teorema che lega invertibilità e rango (★★★).

- Come si calcola l'inversa con Gauss-Jordan, e perché nel blocco destro compare $A^{-1}$?

- Se $A$ è invertibile, quante soluzioni ha $A\vec{x} = \vec{b}$ e quali sono?

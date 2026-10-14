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

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L6, mar 6/10 (quaderno p. 60-67), con gli esercizi dell'esercitazione 3 di lun 12/10, tenuta dalla prof. Fonte: appunti della prof, capitolo 3: <span class="src">6/10, p. 13-14</span> (matrici delle operazioni elementari, $\operatorname{rref}(A) = PA$, definizione di invertibile), <span class="src">p. 14-16</span> (esempi e non-esempi, osservazioni 1 e 2), <span class="src">p. 16-17</span> (teorema rango-invertibilità), <span class="src">p. 17-19</span> (calcolo dell'inversa, esempio e non-esempio), <span class="src">p. 19-20</span> (sistemi con $A$ invertibile, esercizio con parametro); esercitazione del 12/10, <span class="src">p. 1-9</span>, con il foglio [esercizi extra](/uni/gal/esercizi-extra-matrici-svolti/). Negli appunti la L6 inizia a p. 13 con le matrici delle operazioni elementari: anche le p. 60-63 del quaderno, prima attribuite alla L5, sono della L6. Esempi in più dalla dispensa Postinghel (<span class="src">p. 69-80</span>). Si appoggia su [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).

> [!abstract] Per l'esame
> - **Saper enunciare**: le matrici $S_{ij}$, $D_i(\lambda)$, $E_{ij}(\mu)$ e le loro inverse; $\operatorname{rref}(A) = PA$; matrice invertibile e inversa; $(AB)^{-1} = B^{-1}A^{-1}$; **il teorema “$A$ invertibile se e solo se $\operatorname{rg}(A) = n$"**, che a lezione è segnato con tre stelle (★★★). Sono le domande 3.2-3.4 del [foglio 3](/uni/gal/foglio-3-svolto/).
> - **Saper dimostrare**: il teorema rango-invertibilità, nelle due direzioni (★); $(AB)^{-1} = B^{-1}A^{-1}$; perché l'algoritmo su $[A \mid I_n]$ dà $A^{-1}$; perché una matrice con una riga nulla non è invertibile.
> - **Saper fare**: decidere se una matrice è invertibile dal rango, anche con un parametro; calcolare l'inversa con Gauss-Jordan su $[A \mid I_n]$ e verificarla con $AA^{-1} = I_n$; risolvere $A\vec{x} = \vec{b}$ come $\vec{x} = A^{-1}\vec{b}$.
> - **Dove esce**: esercizi 3.8, 3.9, 3.10 del foglio 3 ("per quali $k$ è invertibile, e calcolare l'inversa"); tutta l'esercitazione 3 del 12/10 è stata su questo ([Esercizi extra matrici svolti](/uni/gal/esercizi-extra-matrici-svolti/)). Il teorema ★★★ è il candidato naturale per la domanda di teoria con dimostrazione.

**L'idea.** Con i numeri, $ax = b$ si risolve dividendo per $a$ se $a \neq 0$. Con le matrici non si divide, ma si può moltiplicare per una matrice $A^{-1}$ che "disfa" $A$. Non tutte le matrici quadrate ce l'hanno, e il rango dice esattamente quali. Il calcolo passa di nuovo da Gauss-Jordan, perché ogni operazione elementare è una moltiplicazione a sinistra per una matrice.

```
   operazione elementare su A   =   (matrice dell'operazione) · A
   Gauss-Jordan fino a rref     =   P · A,   P = prodotto di matrici elementari
   rg(A) = n                    =>  rref(A) = I_n  =>  PA = I_n  =>  A⁻¹ = P
   [A | I_n]  --Gauss-Jordan-->  [I_n | P]      il blocco destro registra P
```

## Definizioni

### Matrici delle operazioni elementari

La prof (<span class="src">p. 13</span>): le operazioni elementari (viste nel capitolo 2) possono essere realizzate tramite la **moltiplicazione a sinistra** per delle matrici quadrate:
- **$S_{ij}$** = matrice ottenuta da $I_m$ (identità $m \times m$) scambiandone la $i$-esima con la $j$-esima riga: $I_m \xrightarrow{S_{ij}} S_{ij}$;
- **$D_i(\lambda)$** la matrice ottenuta come segue: $I_m \xrightarrow{D_i(\lambda)} D_i(\lambda)$, cioè moltiplicando la $i$-esima riga di $I_m$ per $\lambda \neq 0$;
- **$E_{ij}(\mu)$** la matrice ottenuta come segue: $I_m \xrightarrow{E_{ij}(\mu)} E_{ij}(\mu)$, cioè sommando alla riga $i$-esima di $I_m$ la riga $j$-esima moltiplicata per $\mu$. Risultato: $I_m$ con un $\mu$ in più al posto $(i, j)$.

In parole: **si fa l'operazione sull'identità**, e la matrice che viene fuori, moltiplicata a sinistra, fa la stessa operazione su qualunque $A$ con $m$ righe.

Allora $S_{ij}A$, $D_i(\lambda)A$, $E_{ij}(\mu)A$ sono $A$ con l'operazione già fatta.

In $3 \times 3$:
$$
S_{12} = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \qquad D_2(\lambda) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \lambda & 0 \\ 0 & 0 & 1 \end{pmatrix} \qquad E_{31}(\mu) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ \mu & 0 & 1 \end{pmatrix}
$$

**Perché funziona.** La riga $i$ di $MA$ è "riga $i$ di $M$ per le colonne di $A$", cioè una combinazione delle righe di $A$ con i coefficienti scritti nella riga $i$ di $M$. In $E_{31}(\mu)$ la terza riga è $(\mu, 0, 1)$: la terza riga del prodotto è $\mu R_1 + R_3$. Le altre righe di $E_{31}(\mu)$ sono quelle di $I$ e lasciano $R_1$, $R_2$ al loro posto. Esempio della dispensa (<span class="src">es. 38</span>): $E_{31}(-1)\begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 1 & -1 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 1 \\ 0 & -1 & 2 \\ 0 & -3 & 2 \end{pmatrix}$, cioè $R_3 \to R_3 - R_1$.

### Matrice invertibile e inversa

La prof (<span class="src">p. 14</span>): $A \in M_n(\mathbb{R})$ quadrata è **invertibile** se $\exists\, B \in M_n(\mathbb{R})$ tale che
$$
AB = BA = I_n
$$
In tal caso, $B$ è detta l'**inversa** di $A$ e la denotiamo $A^-1$.

NB della prof: in generale non è detto che $AB$ e $BA$ coincidano (il prodotto non è commutativo, [Matrici e operazioni](/uni/gal/matrici-e-operazioni/)), ma per l'inversa **devono** venire entrambi $I_n$.

**Perché "la" inversa.** Se ce n'è una, è unica (dispensa, <span class="src">Oss. 9</span>): se $B$ e $B'$ sono due inverse, $B = BI_n = B(AB') = (BA)B' = I_nB' = B'$.

**Solo matrici quadrate.** La definizione è data in $M_n(\mathbb{R})$: per una $A$ $m \times n$ con $m \neq n$, $AB$ e $BA$ avrebbero ordini diversi e non potrebbero essere tutte e due $I$ dello stesso ordine.

Esempi: (1) $I_n$ è invertibile e $I_n^{-1} = I_n$ (la prof, <span class="src">p. 14</span>, "esempi / non-esempi"). $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$ (dispensa, es. 36). La dispensa lì scrive "ogni matrice diagonale è invertibile": vale solo se **tutti gli elementi della diagonale sono non nulli** ($O_n$ è diagonale e non è invertibile).

## Enunciati

### Le matrici delle operazioni elementari sono invertibili

La prof (<span class="src">p. 14</span>, esempio (2)): le matrici delle operazioni elementari sono invertibili:
$$
S_{ij}^{-1} = S_{ij} \qquad D_i(\lambda)^{-1} = D_i\!\left(\tfrac{1}{\lambda}\right)\ (\lambda \neq 0) \qquad E_{ij}(\mu)^{-1} = E_{ij}(-\mu)
$$
**Perché.** L'inversa è l'operazione che disfa: scambiare di nuovo le stesse due righe; dividere per $\lambda$ la riga moltiplicata per $\lambda$; togliere $\mu R_j$ alla riga a cui lo si era aggiunto. Per esempio $E_{ij}(-\mu)E_{ij}(\mu)A$ fa prima $R_i \to R_i + \mu R_j$ e poi $R_i \to R_i - \mu R_j$, e torna $A$. Qui si vede perché $D_i(0)$ non è ammessa: moltiplicare una riga per $0$ non si può disfare.

### Gauss-Jordan come prodotto: $\operatorname{rref}(A) = PA$

La prof (<span class="src">p. 14</span>, proposizione): data $A \in M_{m,n}(\mathbb{R})$, $\operatorname{rref}(A)$ può essere ottenuta moltiplicando $A$ a sinistra per una matrice $m \times m$ opportuna, ottenuta dal prodotto di matrici di operazioni elementari:
$$
\operatorname{rref}(A) = PA
$$
**Perché.** Gauss-Jordan è una sequenza finita di operazioni elementari, e ognuna è una moltiplicazione a sinistra. Se le operazioni sono $M_1$, poi $M_2$, ..., poi $M_r$, allora $\operatorname{rref}(A) = M_r \cdots M_2 M_1 A$ e $P = M_r \cdots M_1$. L'ordine è rovesciato: l'ultima operazione sta più a sinistra.

### Osservazione 1: righe o colonne nulle

La prof (<span class="src">p. 16</span>): tutte le matrici quadrate che hanno una riga (o una colonna) di zeri **non** sono invertibili.

> [!note]- Perché
> **Riga $i$ nulla in $A$.** Per ogni $B$, la riga $i$ di $AB$ è "riga $i$ di $A$ per le colonne di $B$", quindi tutta nulla. Ma la riga $i$ di $I_n$ ha un $1$ al posto $i$. Nessuna $B$ dà $AB = I_n$.
>
> **Colonna $j$ nulla in $A$.** Per ogni $B$, la colonna $j$ di $BA$ è "righe di $B$ per la colonna $j$ di $A$", quindi tutta nulla. Nessuna $B$ dà $BA = I_n$. $\square$

### Osservazione 2: il prodotto di invertibili è invertibile

La prof (<span class="src">p. 16</span>): siano $A, B \in M_n(\mathbb{R})$ invertibili, con inverse $A^{-1}$, $B^{-1}$. Allora anche $AB$ è invertibile, e l'inversa è
$$
(AB)^{-1} = B^{-1}A^{-1}
$$

> [!note]- Dimostrazione
> La prof (p. 16) fa un lato, con le giustificazioni sotto ogni uguale:
> $$
> (AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AI_nA^{-1} = AA^{-1} = I_n
> $$
> il primo uguale per la proprietà associativa, il secondo perché $B$ è invertibile ($BB^{-1} = I_n$), il terzo perché $AI_n = A$, l'ultimo perché $A$ è invertibile. Poi "analogamente $(B^{-1}A^{-1})(AB) = I_n$": per esteso,
> $$
> (B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}I_nB = B^{-1}B = I_n
> $$
> Si usa solo l'associativa: le parentesi si spostano, l'ordine dei fattori no. $\square$

Ripetendo il ragionamento, un prodotto di quante si vuole matrici invertibili è invertibile: $(M_r \cdots M_1)^{-1} = M_1^{-1} \cdots M_r^{-1}$. In particolare la $P$ di $\operatorname{rref}(A) = PA$ è **sempre invertibile**.

Per ricordare l'ordine: si toglie prima l'ultima cosa messa, come le scarpe dopo i calzini.

### ★★★ Teorema: rango e invertibilità

La prof (<span class="src">p. 16-17</span>; nel quaderno, p. 64, con tre stelle):

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
> Negli appunti della prof (p. 17) qui c'è “$\Rightarrow P$ è l'inversa di $A$ (e $A^{-1} = P$) $\Rightarrow A$ è invertibile", e così nel quaderno. Manca un passo, perché $PA = I_n$ è solo **metà** della definizione: serve anche $AP = I_n$. Si chiude usando che $P$ è invertibile, che la prof ha appena ricordato. Moltiplicando $PA = I_n$ a sinistra per $P^{-1}$:
> $$
> P^{-1}(PA) = P^{-1}I_n \implies A = P^{-1}
> $$
> Allora $AP = P^{-1}P = I_n$ e $PA = I_n$: $A$ è invertibile con $A^{-1} = P$. $\square$

### Calcolo dell'inversa: perché $[A \mid I_n]$ funziona

La prof (<span class="src">p. 17-18</span>, "come si calcola la matrice inversa"): sia $A \in M_n(\mathbb{R})$. Consideriamo $B = [A \mid I_n]$, matrice $n \times 2n$ ottenuta affiancando $I_n$ ad $A$, e calcoliamo $\operatorname{rref}(B)$. Osservazione:
$$
A \text{ invertibile} \iff \operatorname{rref}(B) = [I_n \mid P], \quad \text{e in tal caso } P = A^{-1}
$$

> [!note]- Dimostrazione (della prof)
> Sia $P$ il prodotto delle matrici delle operazioni che portano $B$ alla forma ridotta. Segue dalla definizione di prodotto (la prof, in verde): per ogni $A, B, C \in M_n(\mathbb{R})$, $A[B \mid C] = [AB \mid AC]$. Quindi:
> $$
> \operatorname{rref}(B) = PB = P[A \mid I_n] = [PA \mid PI_n] = [PA \mid P]
> $$
> Il blocco sinistro $PA$ è ridotto per righe (lo è tutta la matrice), quindi $PA = \operatorname{rref}(A)$. Per il teorema, $A$ è invertibile se e solo se $\operatorname{rref}(A) = I_n$, cioè se a sinistra compare $I_n$; e in quel caso, dalla dimostrazione del teorema, $A^{-1} = P$, che è proprio il blocco destro. $\square$

**In parole.** Il blocco destro parte da $I_n$ e subisce le stesse operazioni di $A$: alla fine contiene il prodotto $P$ di tutte le operazioni fatte. Se quelle operazioni hanno trasformato $A$ in $I_n$, allora $P$ è l'inversa.

### Osservazione: sistemi con $A$ invertibile

La prof (<span class="src">p. 19-20</span>): sia $A \in M_n(\mathbb{R})$ invertibile, sia $A\vec{x} = \vec{b}$ un sistema lineare. Posso trovare le soluzioni del sistema utilizzando l'inversa di $A$:
$$
\vec{x} = A^{-1}\vec{b}
$$
ed è l'**unica** soluzione.

> [!note]- Dimostrazione
> **Se $\vec{x}$ è una soluzione, allora $\vec{x} = A^{-1}\vec{b}$** (la prof: "infatti $A^{-1}(A\vec{x}) = A^{-1}\vec{b} \Rightarrow \vec{x} = A^{-1}\vec{b}$"): da $A\vec{x} = \vec{b}$, moltiplicando a sinistra per $A^{-1}$, $A^{-1}(A\vec{x}) = A^{-1}\vec{b}$, e $A^{-1}(A\vec{x}) = (A^{-1}A)\vec{x} = I_n\vec{x} = \vec{x}$.
>
> **$A^{-1}\vec{b}$ è davvero una soluzione** (questa metà manca negli appunti, nel quaderno e nella dispensa): $A(A^{-1}\vec{b}) = (AA^{-1})\vec{b} = I_n\vec{b} = \vec{b}$. Qui serve l'altra metà della definizione, $AA^{-1} = I_n$.
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

> [!example]- Prof, 6/10, <span class="src">appunti p. 13</span>: $S_{12}$ su una $2 \times 4$
> $m = 2$, quindi le matrici elementari sono $2 \times 2$. $S_{12} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (righe di $I_2$ scambiate).
> $$
> A = \begin{pmatrix} 0 & 2 & 1 & 0 \\ 1 & 3 & -1 & 0 \end{pmatrix} \xrightarrow{S_{12}} \begin{pmatrix} 1 & 3 & -1 & 0 \\ 0 & 2 & 1 & 0 \end{pmatrix} = B
> $$
> **Esercizio della prof: verificare $S_{12}A = B$.** Riga 1 di $S_{12}$, $(0, 1)$, per le colonne di $A$: prende $0 \cdot R_1 + 1 \cdot R_2 = (1, 3, -1, 0)$. Riga 2, $(1, 0)$: prende $R_1 = (0, 2, 1, 0)$. Per esteso, l'elemento $(1, 2)$ è $0 \cdot 2 + 1 \cdot 3 = 3$. Torna $B$.
>
> $S_{12}$ è $2 \times 2$ anche se $A$ ha 4 colonne: l'ordine della matrice elementare è il numero di **righe** di $A$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 14-15</span>: le inverse delle matrici elementari
> **$3 \times 3$, $S_{12}$.** $S_{12}^{-1} = S_{12}$: infatti $S_{12}S_{12}$ scambia due volte le prime due righe di $I_3$, e torna $I_3$. Riga per colonna: la riga $(0, 1, 0)$ per le colonne di $S_{12}$, $(0, 1, 0)$, $(1, 0, 0)$, $(0, 0, 1)$, dà $(1, 0, 0)$, la prima riga di $I_3$.
>
> **$2 \times 2$, $D_2(2)$.** $D_2(2) = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$, e applicando $D_2\!\left(\frac{1}{2}\right)$ si torna a $I_2$. Quindi $D_2(2)^{-1} = D_2\!\left(\frac{1}{2}\right) = \begin{pmatrix} 1 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$.
>
> **$3 \times 3$, $E_{31}(1)$.** Si somma alla terza riga di $I_3$ la prima:
> $$
> E_{31}(1) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} \qquad E_{31}(1)^{-1} = E_{31}(-1) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}
> $$
> Controllo: la terza riga di $E_{31}(-1)E_{31}(1)$ è $(-1, 0, 1)$ per le colonne $(1, 0, 1)$, $(0, 1, 0)$, $(0, 0, 1)$, cioè $(-1 + 1, 0, 1) = (0, 0, 1)$. Le altre righe restano quelle di $I_3$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 15-16</span>: una matrice che non si può invertire
> $$
> A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}
> $$
> Sia $B = \begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix}$ con $BA = AB = I_2$. Ma
> $$
> AB = \begin{pmatrix} b_{11} + b_{21} & b_{12} + b_{22} \\ 0 & 0 \end{pmatrix}
> $$
> ha la seconda riga nulla qualunque sia $B$, mentre $I_2$ ha seconda riga $(0, 1)$. **Non si può invertire.** Da qui la prof generalizza nell'osservazione 1: una riga (o colonna) di zeri basta a impedire l'inversa. Torna anche col teorema: $\operatorname{rg}(A) = 1 < 2$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 18</span>: l'inversa di una $2 \times 2$
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
> **L'errore del quaderno.** Negli appunti della prof il risultato è giusto, $\frac{2}{3}$. Nel quaderno, a p. 65, l'elemento $(1, 2)$ di $A^{-1}$ è scritto $-\frac{2}{3}$. È $+\frac{2}{3}$: $0 - 2 \cdot \left(-\frac{1}{3}\right) = \frac{2}{3}$. Con $-\frac{2}{3}$ la verifica fallisce subito: riga $(1, 2)$ di $A$ per la colonna $\left(-\frac{2}{3}, -\frac{1}{3}\right)$ dà $-\frac{4}{3} \neq 0$.

> [!example]- Prof, 6/10, <span class="src">appunti p. 19</span>: un non-esempio $3 \times 3$
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
> A sinistra solo due pivot (la prof: "non c'è pivot nella terza colonna"): **$\operatorname{rg}(A) = 2 < 3$, $A$ non è invertibile**. Ci si ferma qui, la riduzione all'indietro non può far comparire $I_3$. Il blocco destro non è nullo, ma non importa: conta solo il sinistro.
>
> Nel quaderno il procedimento è scritto “$[A \mid I_3]P = \operatorname{rref}(A)$": la forma giusta è $P[A \mid I_3] = \operatorname{rref}([A \mid I_3])$, con $P$ **a sinistra**.
>
> Si vede anche a occhio: $R_1 = R_2 + R_3$, $(2, 1, 0) = (1, 1, -1) + (1, 0, 1)$. Una riga è combinazione delle altre e il rango scende.

**Prof, 6/10, <span class="src">appunti p. 20</span>: esercizio con parametro.** Sia
$$
A_k = \begin{pmatrix} 1 & 2 & -3 \\ -1 & -2k & 3 \\ \frac{1}{4} & \frac{1}{2} & k \end{pmatrix}, \qquad k \in \mathbb{R}
$$
Calcolare $\operatorname{rg}(A_k)$ al variare di $k$ e dunque l'invertibilità di $A_k$; calcolare $A_0^{-1}$; risolvere il sistema lineare $A_0\vec{x} = \vec{b}$, ove $\vec{b} = (1, 1, 1)$. A lezione il 6/10 è stata fatta la prima parte; le altre due la prof le ha svolte all'esercitazione del 12/10 (<span class="src">p. 1-3</span>, "esercizio assegnato a lezione") e ne ha scritto i risultati negli appunti (p. 20).

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

> [!example]- Prof, esercitazione 3, 12/10, <span class="src">p. 2-3</span>: $A_0^{-1}$ e il sistema $A_0\vec{x} = \vec{b}$
> **Come si riconosce**: "calcolare $A_0^{-1}$" dopo aver discusso l'invertibilità: $k = 0$ non è un valore critico, quindi l'inversa esiste e si calcola con $[A_0 \mid I_3]$. Il sistema con la stessa matrice si risolve poi con un prodotto.
>
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
>
> **Esercizio della prof: verificare per esempio che $A_0^{-1}A_0 = I_3$** (l'altro ordine). Righe di $A_0^{-1}$ per le colonne di $A_0$, $\left(1, -1, \frac{1}{4}\right)$, $\left(2, 0, \frac{1}{2}\right)$, $(-3, 3, 0)$:
> - riga $(-1, -1, 4)$: $-1 + 1 + 1 = 1$; $\ -2 + 0 + 2 = 0$; $\ 3 - 3 + 0 = 0$
> - riga $\left(\frac{1}{2}, \frac{1}{2}, 0\right)$: $\frac{1}{2} - \frac{1}{2} = 0$; $\ 1 + 0 = 1$; $\ -\frac{3}{2} + \frac{3}{2} = 0$
> - riga $\left(-\frac{1}{3}, 0, \frac{4}{3}\right)$: $-\frac{1}{3} + \frac{1}{3} = 0$; $\ -\frac{2}{3} + \frac{2}{3} = 0$; $\ 1 + 0 = 1$
>
> Per il punto b) la prof scrive: "sappiamo che ammette un'unica soluzione, grazie a Rouché-Capelli" ($\operatorname{rg}(A_0) = 3 = \operatorname{rg}([A_0 \mid \vec{b}])$, uguale al numero di incognite), "possiamo calcolarla così": $\vec{x} = A_0^{-1}\vec{b}$.

> [!example]- Prof, esercitazione 3, 12/10, <span class="src">p. 4-9</span>: gli altri esercizi svolti in classe
> Sono gli esercizi 1, 2, 3 e 6 del foglio della prof, scritti per intero con ogni passaggio in [Esercizi extra matrici svolti](/uni/gal/esercizi-extra-matrici-svolti/). Qui il testo, come si riconosce il tipo e il risultato, per ripassarli a colpo d'occhio.
>
> **Es. 1.** È invertibile $A = \begin{pmatrix} -1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & -3 & 1 \end{pmatrix}$? Tipo: inversa con $[A \mid I_3]$. Con $E_{21}(1)$, $E_{32}(3)$, $D_1(-1)$ si arriva a $A^{-1} = \begin{pmatrix} -1 & 0 & 0 \\ 1 & 1 & 0 \\ 3 & 3 & 1 \end{pmatrix}$. La seconda matrice del foglio, $B$, ha rango $2$ ("esercizio: matrice $B$", per casa).
>
> **Es. 2.** Calcolare $AB^{-1}C$ con $A$ $2 \times 4$, $B$ $4 \times 4$, $C = I_4$. Tipo: prodotto con inversa. Prima gli ordini ($2 \times 4$ per $4 \times 4$ per $4 \times 4$ dà $2 \times 4$), poi $C = I_4$ si toglie, poi $B^{-1}$ con $[B \mid I_4]$. Risultato $\begin{pmatrix} 1 & -1 & 1 & 2 \\ 1 & -1 & 0 & -\frac{1}{2} \end{pmatrix}$.
>
> **Es. 3.1.** Per quali $k$ è invertibile $A_k = \begin{pmatrix} 3 & 2 & -1 \\ 1 & 2 & k \\ 1 & 3k & 2 \end{pmatrix}$? Tipo: rango con parametro. Il terzo pivot è $-\frac{9k^2 + k - 10}{4} = -\frac{(k - 1)(9k + 10)}{4}$: **invertibile se e solo se $k \neq 1$ e $k \neq -\frac{10}{9}$**. Diversamente dall'esercizio del 6/10, il parametro compare in un pivot di secondo grado: va fattorizzato.
>
> **Es. 3.3.** Per quali $k$ le soluzioni di $A_k\vec{x} = (k, 0, k)$ sono chiuse per somma e prodotto per scalare? Solo $k = 0$, quando il sistema è omogeneo: è in [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/).
>
> **Es. 6.** Dimostrare che $\begin{cases} 4x + 4y + 2z = 4 \\ x - z = -1 \\ x + 3y - z = 3 \end{cases}$ ha un'unica soluzione e trovarla invertendo $A$. Tipo: Rouché-Capelli più inversa. "Unica soluzione" vuol dire $\operatorname{rg}(A) = 3$, cioè $A$ invertibile; la riduzione di $[A \mid I_3]$ fa le due cose insieme. $\vec{x} = A^{-1}\vec{b} = \left(-\frac{5}{9}, \frac{4}{3}, \frac{4}{9}\right)$.

## Esercizi tipo esame

**Esercizio 1.** Sia
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

**Esercizio 2** (★, teoria).

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

**Esercizio 3.** Siano
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

**Esercizio 4** (livello del 30). Sia $A \in M_n(\mathbb{R})$ con $A^2 = A$.

- a) Dimostrare che se $A$ è invertibile, allora $A = I_n$.
- b) Trovare una $A \in M_2(\mathbb{R})$ con $A^2 = A$, diversa da $O_2$ e da $I_2$, e dire se è invertibile.
- c) Sia $A$ come in b). Dimostrare che $I_2 - A$ soddisfa anch'essa $(I_2 - A)^2 = I_2 - A$.

> [!example]- Soluzione
> **Tipo**: teoria con la sola definizione di inversa. Il trucco è moltiplicare per $A^{-1}$ **dalla parte giusta**, e solo dopo aver supposto che esista.
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

## Errori tipici

- Dimenticare metà della definizione: l'inversa deve dare $AB = I_n$ **e** $BA = I_n$. Nella dimostrazione del teorema è il passo da $PA = I_n$ ad $A^{-1} = P$, che richiede $A = P^{-1}$.
- Scrivere $(AB)^{-1} = A^{-1}B^{-1}$: l'ordine si rovescia, $B^{-1}A^{-1}$.
- Fare le operazioni solo sul blocco sinistro di $[A \mid I_n]$: il destro diventa $A^{-1}$ solo se subisce le stesse operazioni.
- Sbagliare un segno nella riduzione all'indietro e non accorgersene: è l'errore del quaderno a p. 65 ($-\frac{2}{3}$ invece di $\frac{2}{3}$). La verifica $AA^{-1} = I$ lo trova in un minuto.
- Concludere "invertibile" con rango $n - 1$, o contare i pivot del blocco destro: conta solo il sinistro, e servono $n$ pivot.
- Dividere per un pivot con il parametro prima di aver escluso i valori che lo annullano. Nel quaderno degli esercizi, al 3.10 del foglio 3, $E_{32}(\frac{1}{k})$ divide per $k$ senza aver escluso $k = 0$; bastava non scambiare le righe e usare come pivot l'$1$ della riga $(0, 1, k - 4)$.
- Dichiarare la verifica senza farla. Al 3.8 (quaderno degli esercizi) l'elemento $(1, 3)$ di $A^{-1}$ è $-\frac{1}{4}$ invece di $-\frac{5}{4}$, e sotto c'è scritto “$4AA^{-1} = 4I_3$"; il prodotto vero, riga $(1, -1, 3)$ per la colonna $(-1, 1, 2)$, dà $4$ e non $0$.
- Dare a una $3 \times 3$ rango $4$ (quaderno, 3.10): il rango non supera mai il numero di righe né quello di colonne. Per una $n \times n$, "invertibile" vuol dire rango $n$.
- Calcolare l'inversa partendo dalla matrice già ridotta con $I$ affiancata in quel momento (quaderno, 3.10): il blocco destro parte da $I_n$ accanto ad $A$ **originale** e subisce tutte le operazioni, comprese quelle già fatte.
- Scrivere le condizioni sul parametro con $\cup$: “$k \neq 1 \cup k \neq -\frac{10}{9}$" (quaderno, esercitazione del 12/10). Devono valere insieme: $k \neq 1$ **e** $k \neq -\frac{10}{9}$.
- Mettere $A^{-1}$ dalla parte sbagliata: da $AX = B$ viene $X = A^{-1}B$, non $BA^{-1}$.
- Parlare di inversa di una matrice non quadrata.
- Credere che $A$ non invertibile renda $A\vec{x} = \vec{b}$ impossibile: può avere infinite soluzioni (esercizio 1c).

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

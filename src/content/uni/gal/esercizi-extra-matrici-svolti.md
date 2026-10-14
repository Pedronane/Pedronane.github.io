---
title: Esercizi extra sulle matrici svolti
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: completa
data: 2026-10-12
lezioni: []
ordine: 10
---

Il foglio <span class="src">Esercizi - Matrici</span> della prof (esercizi 1-6 a <span class="src">p. 1-2</span>, soluzioni brevi a <span class="src">p. 3</span>, svolgimenti a <span class="src">p. 4-9</span>), argomento di [Geometria e Algebra Lineare](/uni/gal/). All'esercitazione 3 di lun 12/10 la prof ne ha svolti in classe una parte (<span class="src">appunti dell'esercitazione, p. 4-9</span>): 1 (solo $A$), 2, 3 (punti 1 e 3), 6. Gli altri, cioè 1 ($B$), 3.2, 4 e 5, sono lasciati "per casa". La teoria sta in [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/) e [Matrici invertibili](/uni/gal/matrici-invertibili/); il metodo di riduzione in [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/).

Come usarla: prova da solo, apri l'**indizio** se ti blocchi, la **soluzione** solo alla fine. Ogni conto è stato ricontrollato, e ogni inversa è verificata con il prodotto.

## Lo schema

```
è invertibile?        A quadrata n×n:  invertibile <=> rg(A) = n      (riduci a scalini, conta i pivot)
calcolare A⁻¹         [A | I]  --Gauss + all'indietro-->  [I | A⁻¹]
verificare A⁻¹        A·A⁻¹ = I   (con le frazioni: moltiplica A⁻¹ per il denominatore comune)
risolvere Ax = b      A invertibile  ->  x = A⁻¹ b, unica soluzione
prodotti              (AB)⁻¹ = B⁻¹A⁻¹;   (A²)⁻¹ = (A⁻¹)²;   AI = IA = A
chiuso per + e ·λ     le soluzioni di Ax = b lo sono  <=>  b = 0
```

## Esercizi

### Esercizio 1

Quali delle seguenti matrici è invertibile?
$$
A = \begin{pmatrix} -1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & -3 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}
$$
Si calcolino le inverse $A^{-1}$, $B^{-1}$, se possibile.

> [!tip]- Indizio
> Riduci direttamente $[A \mid I_3]$ e $[B \mid I_3]$: se a sinistra compaiono tre pivot la matrice è invertibile e continui fino a $I_3$; se no ti fermi. Per $B$ guarda le colonne 2 e 3 prima di fare conti.

> [!example]- Soluzione
> **Come si riconosce**: "è invertibile? calcola l'inversa" si fa in un colpo solo con Gauss-Jordan su $[M \mid I_3]$. Il teorema rango-invertibilità dice che la risposta sta nel numero di pivot del blocco sinistro.
>
> **Matrice $A$** (svolta dalla prof, 12/10).
> $$
> [A \mid I_3] = \left[\begin{array}{ccc|ccc} -1 & 0 & 0 & 1 & 0 & 0 \\ 1 & 1 & 0 & 0 & 1 & 0 \\ 0 & -3 & 1 & 0 & 0 & 1 \end{array}\right]
> $$
> Primo pivot: $-1$ in posizione $(1, 1)$. Sotto c'è un $1$ da azzerare.
>
> **$E_{21}(1)$**, $R_2 \to R_2 + R_1$: $(1 - 1,\ 1 + 0,\ 0 + 0 \mid 0 + 1,\ 1 + 0,\ 0 + 0) = (0, 1, 0 \mid 1, 1, 0)$.
> $$
> \left[\begin{array}{ccc|ccc} -1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & -3 & 1 & 0 & 0 & 1 \end{array}\right]
> $$
> **$E_{32}(3)$**, $R_3 \to R_3 + 3R_2$: $(0,\ -3 + 3,\ 1 + 0 \mid 0 + 3,\ 0 + 3,\ 1 + 0) = (0, 0, 1 \mid 3, 3, 1)$.
> $$
> \left[\begin{array}{ccc|ccc} -1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 3 & 3 & 1 \end{array}\right]
> $$
> Tre pivot a sinistra ($-1$, $1$, $1$): $\operatorname{rg}(A) = 3$, **$A$ è invertibile**. Sopra i pivot ci sono già zeri; resta da rendere $1$ il primo pivot.
>
> **$D_1(-1)$**, $R_1 \to -R_1$: $(1, 0, 0 \mid -1, 0, 0)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & 0 & 0 & -1 & 0 & 0 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 3 & 3 & 1 \end{array}\right] \qquad A^{-1} = \begin{pmatrix} -1 & 0 & 0 \\ 1 & 1 & 0 \\ 3 & 3 & 1 \end{pmatrix}
> $$
> **Verifica $AA^{-1} = I_3$.** Colonne di $A^{-1}$: $(-1, 1, 3)$, $(0, 1, 3)$, $(0, 0, 1)$.
> - riga $(-1, 0, 0)$: $1$; $\ 0$; $\ 0$
> - riga $(1, 1, 0)$: $-1 + 1 = 0$; $\ 0 + 1 = 1$; $\ 0$
> - riga $(0, -3, 1)$: $-3 + 3 = 0$; $\ -3 + 3 = 0$; $\ 1$
>
> È $I_3$.
>
> **Matrice $B$** (per casa). Le colonne 2 e 3 di $B$ sono uguali, $(1, 0, 1)$: si può già sospettare che il rango scenda. Lo confermo.
> $$
> [B \mid I_3] = \left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 & 0 & 1 \end{array}\right]
> $$
> **$E_{21}(-1)$**, $R_2 \to R_2 - R_1$: $(0, -1, -1 \mid -1, 1, 0)$.
>
> **$E_{32}(1)$**, $R_3 \to R_3 + R_2$: $(0,\ 1 - 1,\ 1 - 1 \mid 0 - 1,\ 0 + 1,\ 1 + 0) = (0, 0, 0 \mid -1, 1, 1)$.
> $$
> \left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 1 & 0 & 0 \\ 0 & -1 & -1 & -1 & 1 & 0 \\ 0 & 0 & 0 & -1 & 1 & 1 \end{array}\right]
> $$
> A sinistra due pivot: $\operatorname{rg}(B) = 2 < 3$, **$B$ non è invertibile**, $B^{-1}$ non esiste. Il blocco destro non nullo non conta. Torna con l'osservazione: $R_1 = R_2 + R_3$, $(1, 1, 1) = (1, 0, 0) + (0, 1, 1)$.

### Esercizio 2

Si considerino le seguenti matrici:
$$
A = \begin{pmatrix} 2 & 1 & 3 & 4 \\ 1 & 1 & 0 & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 2 & -1 & 0 \\ 0 & 1 & -1 & 0 \\ 1 & 0 & 3 & 0 \\ 0 & 0 & 0 & 2 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
$$
Calcolare $AB^{-1}C$.

> [!tip]- Indizio
> Prima gli ordini: $A$ è $2 \times 4$, $B^{-1}$ e $C$ sono $4 \times 4$, il risultato è $2 \times 4$. Guarda bene $C$: ti risparmia un prodotto. Poi l'inversa di $B$ con $[B \mid I_4]$; la quarta riga di $B$ è già quasi a posto.

> [!example]- Soluzione
> Svolto dalla prof all'esercitazione del 12/10.
>
> **Ordini.** $(A\,B^{-1})\,C$: $A$ è $2 \times 4$ e $B^{-1}$ è $4 \times 4$, quindi $AB^{-1}$ è $2 \times 4$; per $C$ ($4 \times 4$) si ottiene ancora $2 \times 4$. In maniera alternativa si potrebbe fare $A(B^{-1}C)$: per l'associativa è lo stesso. **$C = I_4$**, quindi $AB^{-1}C = AB^{-1}$ (proprietà dell'identità).
>
> **Inversa di $B$.**
> $$
> [B \mid I_4] = \left[\begin{array}{cccc|cccc} 1 & 2 & -1 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & -1 & 0 & 0 & 1 & 0 & 0 \\ 1 & 0 & 3 & 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 2 & 0 & 0 & 0 & 1 \end{array}\right]
> $$
> **$E_{31}(-1)$**, $R_3 \to R_3 - R_1$: $(1 - 1,\ 0 - 2,\ 3 + 1,\ 0 \mid 0 - 1,\ 0,\ 1,\ 0) = (0, -2, 4, 0 \mid -1, 0, 1, 0)$.
>
> **$E_{32}(2)$**, $R_3 \to R_3 + 2R_2$: $(0,\ -2 + 2,\ 4 - 2,\ 0 \mid -1,\ 0 + 2,\ 1,\ 0) = (0, 0, 2, 0 \mid -1, 2, 1, 0)$.
> $$
> \left[\begin{array}{cccc|cccc} 1 & 2 & -1 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & -1 & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 & -1 & 2 & 1 & 0 \\ 0 & 0 & 0 & 2 & 0 & 0 & 0 & 1 \end{array}\right]
> $$
> Quattro pivot ($1$, $1$, $2$, $2$): $B$ è invertibile. Riduzione all'indietro.
>
> **$D_3(\frac{1}{2})$, $D_4(\frac{1}{2})$**: $R_3 = (0, 0, 1, 0 \mid -\frac{1}{2}, 1, \frac{1}{2}, 0)$, $R_4 = (0, 0, 0, 1 \mid 0, 0, 0, \frac{1}{2})$.
>
> **$E_{12}(-2)$**, $R_1 \to R_1 - 2R_2$: $(1,\ 2 - 2,\ -1 + 2,\ 0 \mid 1,\ -2,\ 0,\ 0) = (1, 0, 1, 0 \mid 1, -2, 0, 0)$.
>
> **$E_{13}(-1)$**, $R_1 \to R_1 - R_3$: $(1, 0, 0, 0 \mid 1 + \frac{1}{2},\ -2 - 1,\ 0 - \frac{1}{2},\ 0) = (1, 0, 0, 0 \mid \frac{3}{2}, -3, -\frac{1}{2}, 0)$.
>
> **$E_{23}(1)$**, $R_2 \to R_2 + R_3$: $(0, 1, 0, 0 \mid 0 - \frac{1}{2},\ 1 + 1,\ 0 + \frac{1}{2},\ 0) = (0, 1, 0, 0 \mid -\frac{1}{2}, 2, \frac{1}{2}, 0)$.
> $$
> B^{-1} = \begin{pmatrix} \frac{3}{2} & -3 & -\frac{1}{2} & 0 \\ -\frac{1}{2} & 2 & \frac{1}{2} & 0 \\ -\frac{1}{2} & 1 & \frac{1}{2} & 0 \\ 0 & 0 & 0 & \frac{1}{2} \end{pmatrix}
> $$
> **Verifica $B \cdot 2B^{-1} = 2I_4$**, con $2B^{-1}$ a coefficienti interi; le sue colonne sono $(3, -1, -1, 0)$, $(-6, 4, 2, 0)$, $(-1, 1, 1, 0)$, $(0, 0, 0, 1)$.
> - riga $(1, 2, -1, 0)$: $3 - 2 + 1 = 2$; $\ -6 + 8 - 2 = 0$; $\ -1 + 2 - 1 = 0$; $\ 0$
> - riga $(0, 1, -1, 0)$: $-1 + 1 = 0$; $\ 4 - 2 = 2$; $\ 1 - 1 = 0$; $\ 0$
> - riga $(1, 0, 3, 0)$: $3 - 3 = 0$; $\ -6 + 6 = 0$; $\ -1 + 3 = 2$; $\ 0$
> - riga $(0, 0, 0, 2)$: $0$; $\ 0$; $\ 0$; $\ 2$
>
> **Prodotto $AB^{-1}$.** Righe di $A$ per colonne di $B^{-1}$.
> - riga $(2, 1, 3, 4)$: $3 - \frac{1}{2} - \frac{3}{2} + 0 = 1$; $\ -6 + 2 + 3 + 0 = -1$; $\ -1 + \frac{1}{2} + \frac{3}{2} + 0 = 1$; $\ 0 + 0 + 0 + 2 = 2$
> - riga $(1, 1, 0, -1)$: $\frac{3}{2} - \frac{1}{2} + 0 + 0 = 1$; $\ -3 + 2 = -1$; $\ -\frac{1}{2} + \frac{1}{2} = 0$; $\ 0 + 0 + 0 - \frac{1}{2} = -\frac{1}{2}$
>
> $$
> AB^{-1}C = AB^{-1} = \begin{pmatrix} 1 & -1 & 1 & 2 \\ 1 & -1 & 0 & -\frac{1}{2} \end{pmatrix}
> $$
> **Controllo indipendente**: se $X = AB^{-1}$, allora $XB = A$. Prima riga di $X$ per le colonne di $B$: $1 + 0 + 1 + 0 = 2$; $\ 2 - 1 + 0 = 1$; $\ -1 + 1 + 3 = 3$; $\ 2 \cdot 2 = 4$. È $(2, 1, 3, 4)$, la prima riga di $A$.
>
> Due imprecisioni nelle fonti: nello svolgimento del foglio c'è scritto “$C$ è la matrice identica $2 \times 2$" (è $I_4$, $4 \times 4$); negli appunti dell'esercitazione la matrice affiancata è scritta $[B \mid I_3]$ (è $[B \mid I_4]$, come si vede dalle quattro colonne a destra).

### Esercizio 3

Considerare la matrice $A_k$, che dipende dal parametro reale $k$:
$$
A_k = \begin{pmatrix} 3 & 2 & -1 \\ 1 & 2 & k \\ 1 & 3k & 2 \end{pmatrix}
$$

1. Determinare per quali valori di $k \in \mathbb{R}$ la matrice $A_k$ è invertibile.
2. Determinare, se possibile, l'inversa di $A_0$.
3. Siano ora $\vec{b} = (k, 0, k)$ e $\vec{x} = (x_1, x_2, x_3)$. Determinare per quali valori del parametro $k$ l'insieme delle soluzioni del sistema lineare $A_k\vec{x} = \vec{b}$ è chiuso rispetto alla somma e al prodotto per uno scalare.

> [!tip]- Indizio
> 1: il pivot $3$ in alto non dipende da $k$; dopo il primo passo il secondo pivot è $\frac{4}{3}$, sempre non nullo, e il parametro finisce tutto nel terzo. Fattorizza quel polinomio di secondo grado.
> 3: ripensa al teorema sulla struttura delle soluzioni. Quando un insieme di soluzioni è chiuso per somma e prodotto? Attento ai $k$ per cui il sistema non ha soluzioni.

> [!example]- Soluzione
> **1.** (Svolto dalla prof, 12/10.) **Tipo**: invertibilità con parametro, cioè rango $3$ al variare di $k$.
>
> **$E_{21}(-\frac{1}{3})$**, $R_2 \to R_2 - \frac{1}{3}R_1$: $\left(1 - 1,\ 2 - \frac{2}{3},\ k + \frac{1}{3}\right) = \left(0, \frac{4}{3}, k + \frac{1}{3}\right)$.
>
> **$E_{31}(-\frac{1}{3})$**, $R_3 \to R_3 - \frac{1}{3}R_1$: $\left(1 - 1,\ 3k - \frac{2}{3},\ 2 + \frac{1}{3}\right) = \left(0, \frac{9k - 2}{3}, \frac{7}{3}\right)$.
> $$
> \begin{pmatrix} 3 & 2 & -1 \\ 0 & \frac{4}{3} & k + \frac{1}{3} \\ 0 & \frac{9k - 2}{3} & \frac{7}{3} \end{pmatrix}
> $$
> Il pivot della seconda riga è $\frac{4}{3}$, non dipende da $k$. Per azzerare $\frac{9k - 2}{3}$ serve il moltiplicatore $\frac{9k - 2}{3} : \frac{4}{3} = \frac{9k - 2}{4}$.
>
> **$E_{32}\!\left(-\frac{9k - 2}{4}\right)$**, $R_3 \to R_3 - \frac{9k-2}{4}R_2$. Seconda colonna: $\frac{9k - 2}{3} - \frac{9k - 2}{4} \cdot \frac{4}{3} = 0$. Terza colonna, un passo per riga:
> $$
> \frac{7}{3} - \frac{9k - 2}{4}\left(k + \frac{1}{3}\right) = \frac{7}{3} - \frac{(9k - 2)(3k + 1)}{12} \qquad k + \tfrac{1}{3} = \tfrac{3k + 1}{3}
> $$
> $$
> = \frac{28 - (27k^2 + 9k - 6k - 2)}{12} \qquad \text{denominatore comune, sviluppo il prodotto}
> $$
> $$
> = \frac{30 - 27k^2 - 3k}{12} = \frac{3(10 - 9k^2 - k)}{12} = -\frac{9k^2 + k - 10}{4}
> $$
> $$
> \begin{pmatrix} 3 & 2 & -1 \\ 0 & \frac{4}{3} & k + \frac{1}{3} \\ 0 & 0 & -\frac{9k^2 + k - 10}{4} \end{pmatrix}
> $$
> Il terzo pivot si annulla per $9k^2 + k - 10 = 0$: $k = \frac{-1 \pm \sqrt{1 + 360}}{18} = \frac{-1 \pm 19}{18}$, cioè $k = 1$ o $k = -\frac{10}{9}$. Quindi $9k^2 + k - 10 = (k - 1)(9k + 10)$; controllo: $9k^2 + 10k - 9k - 10$. Giusto.
>
> **Conclusione**: $\operatorname{rg}(A_k) = 2$ se $k = 1$ o $k = -\frac{10}{9}$, $\operatorname{rg}(A_k) = 3$ altrimenti. **$A_k$ è invertibile se e solo se $k \neq 1$ e $k \neq -\frac{10}{9}$.**
>
> **2.** (Per casa.) $k = 0$ non è un valore critico, quindi $A_0$ è invertibile.
> $$
> [A_0 \mid I_3] = \left[\begin{array}{ccc|ccc} 3 & 2 & -1 & 1 & 0 & 0 \\ 1 & 2 & 0 & 0 & 1 & 0 \\ 1 & 0 & 2 & 0 & 0 & 1 \end{array}\right]
> $$
> **$E_{21}(-\frac{1}{3})$**: $R_2 - \frac{1}{3}R_1 = \left(0, \frac{4}{3}, \frac{1}{3} \mid -\frac{1}{3}, 1, 0\right)$. **$E_{31}(-\frac{1}{3})$**: $R_3 - \frac{1}{3}R_1 = \left(0, -\frac{2}{3}, \frac{7}{3} \mid -\frac{1}{3}, 0, 1\right)$.
>
> **$E_{32}(\frac{1}{2})$**, $R_3 \to R_3 + \frac{1}{2}R_2$: $\left(0,\ -\frac{2}{3} + \frac{2}{3},\ \frac{7}{3} + \frac{1}{6} \mid -\frac{1}{3} - \frac{1}{6},\ 0 + \frac{1}{2},\ 1\right) = \left(0, 0, \frac{5}{2} \mid -\frac{1}{2}, \frac{1}{2}, 1\right)$.
> $$
> \left[\begin{array}{ccc|ccc} 3 & 2 & -1 & 1 & 0 & 0 \\ 0 & \frac{4}{3} & \frac{1}{3} & -\frac{1}{3} & 1 & 0 \\ 0 & 0 & \frac{5}{2} & -\frac{1}{2} & \frac{1}{2} & 1 \end{array}\right]
> $$
> **$D_1(\frac{1}{3})$, $D_2(\frac{3}{4})$, $D_3(\frac{2}{5})$**: $R_1 = \left(1, \frac{2}{3}, -\frac{1}{3} \mid \frac{1}{3}, 0, 0\right)$, $R_2 = \left(0, 1, \frac{1}{4} \mid -\frac{1}{4}, \frac{3}{4}, 0\right)$, $R_3 = \left(0, 0, 1 \mid -\frac{1}{5}, \frac{1}{5}, \frac{2}{5}\right)$.
>
> **$E_{12}(-\frac{2}{3})$**, $R_1 \to R_1 - \frac{2}{3}R_2$: $\left(1,\ 0,\ -\frac{1}{3} - \frac{1}{6} \mid \frac{1}{3} + \frac{1}{6},\ -\frac{1}{2},\ 0\right) = \left(1, 0, -\frac{1}{2} \mid \frac{1}{2}, -\frac{1}{2}, 0\right)$.
>
> **$E_{13}(\frac{1}{2})$**, $R_1 \to R_1 + \frac{1}{2}R_3$: $\left(1, 0, 0 \mid \frac{1}{2} - \frac{1}{10},\ -\frac{1}{2} + \frac{1}{10},\ \frac{1}{5}\right) = \left(1, 0, 0 \mid \frac{2}{5}, -\frac{2}{5}, \frac{1}{5}\right)$.
>
> **$E_{23}(-\frac{1}{4})$**, $R_2 \to R_2 - \frac{1}{4}R_3$: $\left(0, 1, 0 \mid -\frac{1}{4} + \frac{1}{20},\ \frac{3}{4} - \frac{1}{20},\ -\frac{1}{10}\right) = \left(0, 1, 0 \mid -\frac{1}{5}, \frac{7}{10}, -\frac{1}{10}\right)$.
> $$
> A_0^{-1} = \begin{pmatrix} \frac{2}{5} & -\frac{2}{5} & \frac{1}{5} \\ -\frac{1}{5} & \frac{7}{10} & -\frac{1}{10} \\ -\frac{1}{5} & \frac{1}{5} & \frac{2}{5} \end{pmatrix}
> $$
> **Verifica $A_0 \cdot 10A_0^{-1} = 10I_3$**; colonne di $10A_0^{-1}$: $(4, -2, -2)$, $(-4, 7, 2)$, $(2, -1, 4)$.
> - riga $(3, 2, -1)$: $12 - 4 + 2 = 10$; $\ -12 + 14 - 2 = 0$; $\ 6 - 2 - 4 = 0$
> - riga $(1, 2, 0)$: $4 - 4 = 0$; $\ -4 + 14 = 10$; $\ 2 - 2 = 0$
> - riga $(1, 0, 2)$: $4 - 4 = 0$; $\ -4 + 4 = 0$; $\ 2 + 8 = 10$
>
> **3.** (Svolto dalla prof, 12/10.) La risposta della prof: l'insieme delle soluzioni di $A_k\vec{x} = \vec{b}$ è chiuso rispetto alle due operazioni se e solo se il sistema è omogeneo, cioè $\vec{b} = \vec{0}$, cioè $k = 0$.
>
> **Perché**, per esteso.
> - $k = 0$: $\vec{b} = (0, 0, 0)$, il sistema è omogeneo, le soluzioni sono $N(A_0)$, chiuse (osservazione 1 di [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/)). Qui $A_0$ è invertibile, quindi $N(A_0) = \{\vec{0}\}$, che è chiuso: $\vec{0} + \vec{0} = \vec{0}$, $\lambda\vec{0} = \vec{0}$.
> - $k \neq 0$ e $k \neq 1, -\frac{10}{9}$: $A_k$ è invertibile, c'è un'unica soluzione $\vec{x}_0 = A_k^{-1}\vec{b} \neq \vec{0}$ (perché $\vec{b} \neq \vec{0}$). Allora $\vec{x}_0 + \vec{x}_0 = 2\vec{x}_0 \neq \vec{x}_0$ non sta nell'insieme: non chiuso per la somma.
> - $k = 1$ o $k = -\frac{10}{9}$: qui la prof non entra nel dettaglio. Controllando, **il sistema è incompatibile** in entrambi i casi ($\operatorname{rg}(A_k) = 2$, $\operatorname{rg}([A_k \mid \vec{b}]) = 3$). Per $k = 1$, per esempio, con le stesse operazioni del punto 1 la colonna $(1, 0, 1)$ diventa $\left(1, -\frac{1}{3}, \frac{2}{3} + \frac{7}{12}\right) = \left(1, -\frac{1}{3}, \frac{5}{4}\right)$, e l'ultima riga dice $0 = \frac{5}{4}$. L'insieme delle soluzioni è **vuoto**.
>
> Il vuoto, a rigore, è "chiuso" per somma e prodotto (non ci sono elementi da sommare), ma **non è un sottospazio**, perché la definizione chiede un insieme non vuoto ([Spazi vettoriali](/uni/gal/spazi-vettoriali/)). Il teorema che la prof usa ("chiuso se e solo se omogeneo") è enunciato per sistemi **compatibili**. All'esame conviene scrivere: "per $k = 1, -\frac{10}{9}$ il sistema è incompatibile; per gli altri $k \neq 0$ ha un'unica soluzione non nulla, non chiusa; quindi solo $k = 0$".

### Esercizio 4

Si consideri la seguente matrice dipendente dal parametro reale $k$:
$$
A_k = \begin{pmatrix} 3 & 2 & k - 1 \\ 4 & 1 & 1 \\ 1 & 1 & k \end{pmatrix}
$$

1. Determinare per quali valori di $k \in \mathbb{R}$ la matrice $A_k$ è invertibile.
2. Sia $k = 1$; si determini l'inversa di $A_1$, se esiste.
3. Sia $A = A_1$ come sopra. Si trovino tutte le soluzioni del sistema lineare $A\vec{x} = \vec{b}$, ove $\vec{b} = (2, -1, -1)$.

> [!tip]- Indizio
> 1: il parametro sta nella prima riga. Scambia le righe in modo che il primo pivot sia un numero senza $k$ (lo svolgimento usa $S_{12}$), così il $k$ scende in fondo.
> 3: se al punto 2 hai l'inversa, $\vec{x} = A^{-1}\vec{b}$. Altrimenti riduci $[A \mid \vec{b}]$.

> [!example]- Soluzione
> Per casa all'esercitazione del 12/10.
>
> **1.** **$S_{12}$**: porto in alto la riga $(4, 1, 1)$, senza parametro.
> $$
> \begin{pmatrix} 4 & 1 & 1 \\ 3 & 2 & k - 1 \\ 1 & 1 & k \end{pmatrix}
> $$
> **$E_{21}(-\frac{3}{4})$**, $R_2 \to R_2 - \frac{3}{4}R_1$: $\left(0,\ 2 - \frac{3}{4},\ k - 1 - \frac{3}{4}\right) = \left(0, \frac{5}{4}, k - \frac{7}{4}\right)$.
>
> **$E_{31}(-\frac{1}{4})$**, $R_3 \to R_3 - \frac{1}{4}R_1$: $\left(0,\ 1 - \frac{1}{4},\ k - \frac{1}{4}\right) = \left(0, \frac{3}{4}, k - \frac{1}{4}\right)$.
>
> **$E_{32}(-\frac{3}{5})$** (moltiplicatore $\frac{3}{4} : \frac{5}{4} = \frac{3}{5}$), $R_3 \to R_3 - \frac{3}{5}R_2$. Seconda colonna: $\frac{3}{4} - \frac{3}{5} \cdot \frac{5}{4} = 0$. Terza:
> $$
> k - \frac{1}{4} - \frac{3}{5}\left(k - \frac{7}{4}\right) = k - \frac{3}{5}k - \frac{1}{4} + \frac{21}{20} = \frac{2}{5}k + \frac{16}{20} = \frac{2}{5}k + \frac{4}{5}
> $$
> $$
> \begin{pmatrix} 4 & 1 & 1 \\ 0 & \frac{5}{4} & k - \frac{7}{4} \\ 0 & 0 & \frac{2}{5}k + \frac{4}{5} \end{pmatrix}
> $$
> Il terzo pivot è nullo se e solo se $\frac{2}{5}k = -\frac{4}{5}$, cioè $k = -2$. Rango $2$ per $k = -2$, rango $3$ altrimenti. **$A_k$ è invertibile se e solo se $k \neq -2$.**
>
> **2.** $k = 1 \neq -2$: $A_1 = \begin{pmatrix} 3 & 2 & 0 \\ 4 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$ è invertibile. Affianco anche $\vec{b}$ come settima colonna, così il punto 3 viene in parallelo.
> $$
> \left[\begin{array}{ccc|ccc|c} 3 & 2 & 0 & 1 & 0 & 0 & 2 \\ 4 & 1 & 1 & 0 & 1 & 0 & -1 \\ 1 & 1 & 1 & 0 & 0 & 1 & -1 \end{array}\right]
> $$
> **$E_{21}(-\frac{4}{3})$**: $R_2 - \frac{4}{3}R_1 = \left(0,\ 1 - \frac{8}{3},\ 1 \mid -\frac{4}{3}, 1, 0 \mid -1 - \frac{8}{3}\right) = \left(0, -\frac{5}{3}, 1 \mid -\frac{4}{3}, 1, 0 \mid -\frac{11}{3}\right)$.
>
> **$E_{31}(-\frac{1}{3})$**: $R_3 - \frac{1}{3}R_1 = \left(0,\ 1 - \frac{2}{3},\ 1 \mid -\frac{1}{3}, 0, 1 \mid -1 - \frac{2}{3}\right) = \left(0, \frac{1}{3}, 1 \mid -\frac{1}{3}, 0, 1 \mid -\frac{5}{3}\right)$.
>
> **$E_{32}(\frac{1}{5})$** (moltiplicatore $\frac{1}{3} : \frac{5}{3} = \frac{1}{5}$, col segno che annulla): $R_3 + \frac{1}{5}R_2 = \left(0,\ 0,\ 1 + \frac{1}{5} \mid -\frac{1}{3} - \frac{4}{15},\ \frac{1}{5},\ 1 \mid -\frac{5}{3} - \frac{11}{15}\right) = \left(0, 0, \frac{6}{5} \mid -\frac{3}{5}, \frac{1}{5}, 1 \mid -\frac{12}{5}\right)$.
>
> Tre pivot ($3$, $-\frac{5}{3}$, $\frac{6}{5}$): invertibile, come previsto.
>
> **$D_1(\frac{1}{3})$, $D_2(-\frac{3}{5})$, $D_3(\frac{5}{6})$**:
> - $R_1 = \left(1, \frac{2}{3}, 0 \mid \frac{1}{3}, 0, 0 \mid \frac{2}{3}\right)$
> - $R_2 = \left(0, 1, -\frac{3}{5} \mid \frac{4}{5}, -\frac{3}{5}, 0 \mid \frac{11}{5}\right)$
> - $R_3 = \left(0, 0, 1 \mid -\frac{1}{2}, \frac{1}{6}, \frac{5}{6} \mid -2\right)$
>
> **$E_{23}(\frac{3}{5})$**, $R_2 \to R_2 + \frac{3}{5}R_3$: $\left(0, 1, 0 \mid \frac{4}{5} - \frac{3}{10},\ -\frac{3}{5} + \frac{1}{10},\ \frac{1}{2} \mid \frac{11}{5} - \frac{6}{5}\right) = \left(0, 1, 0 \mid \frac{1}{2}, -\frac{1}{2}, \frac{1}{2} \mid 1\right)$.
>
> **$E_{12}(-\frac{2}{3})$**, $R_1 \to R_1 - \frac{2}{3}R_2$: $\left(1, 0, 0 \mid \frac{1}{3} - \frac{1}{3},\ \frac{1}{3},\ -\frac{1}{3} \mid \frac{2}{3} - \frac{2}{3}\right) = \left(1, 0, 0 \mid 0, \frac{1}{3}, -\frac{1}{3} \mid 0\right)$.
> $$
> A_1^{-1} = \begin{pmatrix} 0 & \frac{1}{3} & -\frac{1}{3} \\ \frac{1}{2} & -\frac{1}{2} & \frac{1}{2} \\ -\frac{1}{2} & \frac{1}{6} & \frac{5}{6} \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 0 & 2 & -2 \\ 3 & -3 & 3 \\ -3 & 1 & 5 \end{pmatrix}
> $$
> **Verifica $A_1 \cdot 6A_1^{-1} = 6I_3$**; colonne di $6A_1^{-1}$: $(0, 3, -3)$, $(2, -3, 1)$, $(-2, 3, 5)$.
> - riga $(3, 2, 0)$: $0 + 6 = 6$; $\ 6 - 6 = 0$; $\ -6 + 6 = 0$
> - riga $(4, 1, 1)$: $0 + 3 - 3 = 0$; $\ 8 - 3 + 1 = 6$; $\ -8 + 3 + 5 = 0$
> - riga $(1, 1, 1)$: $0 + 3 - 3 = 0$; $\ 2 - 3 + 1 = 0$; $\ -2 + 3 + 5 = 6$
>
> **3.** La settima colonna, alla fine, è $(0, 1, -2)$: **$x = 0$, $y = 1$, $z = -2$**, unica soluzione (A invertibile). Con l'inversa: $A_1^{-1}\vec{b}$ ha componenti $0 - \frac{1}{3} + \frac{1}{3} = 0$; $\ 1 + \frac{1}{2} - \frac{1}{2} = 1$; $\ -1 - \frac{1}{6} - \frac{5}{6} = -2$. Stesso risultato.
>
> **Verifica nel sistema**: $3 \cdot 0 + 2 \cdot 1 + 0 = 2$; $\ 0 + 1 - 2 = -1$; $\ 0 + 1 - 2 = -1$. (Nello svolgimento del foglio la matrice di questo punto è chiamata “$(A \mid I_3)$": è $(A \mid \vec{b})$.)

### Esercizio 5

Consideriamo la matrice
$$
A = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 3 & 1 & 0 & -3 \\ 2 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix}
$$

1. Calcolare $A^{-1}$.
2. Calcolare $(A^2)^{-1}$ (senza calcolare $A^2$).

> [!tip]- Indizio
> 1: la prima colonna ha uno $0$ in alto: scambia la prima riga con una che ha un numero non nullo in colonna 1. La terza riga, $(2, 0, 0, 0)$, è la più comoda.
> 2: $(AB)^{-1} = B^{-1}A^{-1}$ con $B = A$.

> [!example]- Soluzione
> Per casa all'esercitazione del 12/10.
>
> **1.**
> $$
> [A \mid I_4] = \left[\begin{array}{cccc|cccc} 0 & 1 & 1 & 0 & 1 & 0 & 0 & 0 \\ 3 & 1 & 0 & -3 & 0 & 1 & 0 & 0 \\ 2 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 & 0 & 1 \end{array}\right]
> $$
> **$S_{13}$**: scambio la prima e la terza riga.
> $$
> \left[\begin{array}{cccc|cccc} 2 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 3 & 1 & 0 & -3 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 & 0 & 0 & 1 \end{array}\right]
> $$
> **$E_{21}(-\frac{3}{2})$**, $R_2 \to R_2 - \frac{3}{2}R_1$: $\left(0, 1, 0, -3 \mid 0, 1, -\frac{3}{2}, 0\right)$.
>
> **$E_{32}(-1)$**, $R_3 \to R_3 - R_2$: $\left(0,\ 0,\ 1,\ 3 \mid 1,\ -1,\ \frac{3}{2},\ 0\right)$.
>
> **$E_{42}(-1)$**, $R_4 \to R_4 - R_2$: $\left(0,\ 0,\ 0,\ 3 \mid 0,\ -1,\ \frac{3}{2},\ 1\right)$.
> $$
> \left[\begin{array}{cccc|cccc} 2 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & -3 & 0 & 1 & -\frac{3}{2} & 0 \\ 0 & 0 & 1 & 3 & 1 & -1 & \frac{3}{2} & 0 \\ 0 & 0 & 0 & 3 & 0 & -1 & \frac{3}{2} & 1 \end{array}\right]
> $$
> Quattro pivot: invertibile.
>
> **$D_1(\frac{1}{2})$, $D_4(\frac{1}{3})$**: $R_1 = \left(1, 0, 0, 0 \mid 0, 0, \frac{1}{2}, 0\right)$, $R_4 = \left(0, 0, 0, 1 \mid 0, -\frac{1}{3}, \frac{1}{2}, \frac{1}{3}\right)$.
>
> **$E_{24}(3)$**, $R_2 \to R_2 + 3R_4$: $\left(0, 1, 0, 0 \mid 0,\ 1 - 1,\ -\frac{3}{2} + \frac{3}{2},\ 1\right) = (0, 1, 0, 0 \mid 0, 0, 0, 1)$.
>
> **$E_{34}(-3)$**, $R_3 \to R_3 - 3R_4$: $\left(0, 0, 1, 0 \mid 1,\ -1 + 1,\ \frac{3}{2} - \frac{3}{2},\ -1\right) = (0, 0, 1, 0 \mid 1, 0, 0, -1)$.
> $$
> A^{-1} = \begin{pmatrix} 0 & 0 & \frac{1}{2} & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & -1 \\ 0 & -\frac{1}{3} & \frac{1}{2} & \frac{1}{3} \end{pmatrix}
> $$
> **Verifica $AA^{-1} = I_4$**; colonne di $A^{-1}$: $(0, 0, 1, 0)$, $(0, 0, 0, -\frac{1}{3})$, $(\frac{1}{2}, 0, 0, \frac{1}{2})$, $(0, 1, -1, \frac{1}{3})$.
> - riga $(0, 1, 1, 0)$: $1$; $\ 0$; $\ 0$; $\ 1 - 1 = 0$
> - riga $(3, 1, 0, -3)$: $0$; $\ (-3)(-\frac{1}{3}) = 1$; $\ \frac{3}{2} - \frac{3}{2} = 0$; $\ 1 - 1 = 0$
> - riga $(2, 0, 0, 0)$: $0$; $\ 0$; $\ 1$; $\ 0$
> - riga $(0, 1, 0, 0)$: $0$; $\ 0$; $\ 0$; $\ 1$
>
> **2.** **Perché $(A^2)^{-1} = (A^{-1})^2$.** È $(AB)^{-1} = B^{-1}A^{-1}$ con $B = A$. Direttamente:
> $$
> (A^{-1})^2 A^2 = A^{-1}(A^{-1}A)A = A^{-1}I_4A = A^{-1}A = I_4
> $$
> e analogamente $A^2(A^{-1})^2 = A(AA^{-1})A^{-1} = I_4$. Quindi basta fare il quadrato di $A^{-1}$.
>
> **Il prodotto, riga per riga.** La riga $i$ di $A^{-1} \cdot A^{-1}$ è la combinazione delle righe di $A^{-1}$ con i coefficienti scritti nella riga $i$ di $A^{-1}$. Chiamo $\vec{r}_1, \ldots, \vec{r}_4$ le righe di $A^{-1}$.
> - riga 1, coefficienti $(0, 0, \frac{1}{2}, 0)$: $\frac{1}{2}\vec{r}_3 = \left(\frac{1}{2}, 0, 0, -\frac{1}{2}\right)$
> - riga 2, coefficienti $(0, 0, 0, 1)$: $\vec{r}_4 = \left(0, -\frac{1}{3}, \frac{1}{2}, \frac{1}{3}\right)$
> - riga 3, coefficienti $(1, 0, 0, -1)$: $\vec{r}_1 - \vec{r}_4 = \left(0, 0, \frac{1}{2}, 0\right) - \left(0, -\frac{1}{3}, \frac{1}{2}, \frac{1}{3}\right) = \left(0, \frac{1}{3}, 0, -\frac{1}{3}\right)$
> - riga 4, coefficienti $(0, -\frac{1}{3}, \frac{1}{2}, \frac{1}{3})$: $-\frac{1}{3}\vec{r}_2 + \frac{1}{2}\vec{r}_3 + \frac{1}{3}\vec{r}_4 = \left(0, 0, 0, -\frac{1}{3}\right) + \left(\frac{1}{2}, 0, 0, -\frac{1}{2}\right) + \left(0, -\frac{1}{9}, \frac{1}{6}, \frac{1}{9}\right) = \left(\frac{1}{2}, -\frac{1}{9}, \frac{1}{6}, -\frac{13}{18}\right)$
>
> (ultima componente: $-\frac{6}{18} - \frac{9}{18} + \frac{2}{18} = -\frac{13}{18}$).
> $$
> (A^2)^{-1} = (A^{-1})^2 = \begin{pmatrix} \frac{1}{2} & 0 & 0 & -\frac{1}{2} \\ 0 & -\frac{1}{3} & \frac{1}{2} & \frac{1}{3} \\ 0 & \frac{1}{3} & 0 & -\frac{1}{3} \\ \frac{1}{2} & -\frac{1}{9} & \frac{1}{6} & -\frac{13}{18} \end{pmatrix}
> $$
> **Controllo di una riga**: $A^2$ si può fare per un pezzo. Prima riga di $A^2$ = riga $(0, 1, 1, 0)$ di $A$ per $A$ = $\vec{a}_2 + \vec{a}_3$ (righe di $A$) $= (3, 1, 0, -3) + (2, 0, 0, 0) = (5, 1, 0, -3)$. Per la prima colonna di $(A^{-1})^2$, $(\frac{1}{2}, 0, 0, \frac{1}{2})$: $\frac{5}{2} + 0 + 0 - \frac{3}{2} = 1$. Per la seconda, $(0, -\frac{1}{3}, \frac{1}{3}, -\frac{1}{9})$: $-\frac{1}{3} + \frac{1}{3} = 0$. Torna con $I_4$.

### Esercizio 6

Dimostrare che il seguente sistema lineare ammette un'unica soluzione, e trovarla invertendo la matrice dei coefficienti.
$$
\begin{cases} 4x + 4y + 2z = 4 \\ x - z = -1 \\ x + 3y - z = 3 \end{cases}
$$

> [!tip]- Indizio
> "Unica soluzione" per Rouché-Capelli vuol dire rango $3$ della matrice dei coefficienti, cioè $A$ invertibile. Riduci $[A \mid I_3]$: i pivot dimostrano l'invertibilità, il resto del conto dà $A^{-1}$. Attento a $y$ che manca nella seconda equazione.

> [!example]- Soluzione
> Svolto dalla prof all'esercitazione del 12/10, che però scrive solo la matrice di partenza e il risultato: i passi qui sono quelli dello svolgimento del foglio.
>
> **Perché basta il rango.** Grazie al teorema di Rouché-Capelli, l'enunciato è vero se e solo se $\operatorname{rg}(A) = 3$, dove $A$ è la matrice dei coefficienti; e questo vale se e solo se $A$ è invertibile. Per dimostrare che $A$ è invertibile e contemporaneamente calcolarne l'inversa si riduce $[A \mid I_3]$. La seconda equazione non ha $y$: coefficiente $0$.
> $$
> [A \mid I_3] = \left[\begin{array}{ccc|ccc} 4 & 4 & 2 & 1 & 0 & 0 \\ 1 & 0 & -1 & 0 & 1 & 0 \\ 1 & 3 & -1 & 0 & 0 & 1 \end{array}\right]
> $$
> **$E_{21}(-\frac{1}{4})$**: $R_2 - \frac{1}{4}R_1 = \left(0,\ -1,\ -1 - \frac{1}{2} \mid -\frac{1}{4}, 1, 0\right) = \left(0, -1, -\frac{3}{2} \mid -\frac{1}{4}, 1, 0\right)$.
>
> **$E_{31}(-\frac{1}{4})$**: $R_3 - \frac{1}{4}R_1 = \left(0,\ 3 - 1,\ -1 - \frac{1}{2} \mid -\frac{1}{4}, 0, 1\right) = \left(0, 2, -\frac{3}{2} \mid -\frac{1}{4}, 0, 1\right)$.
>
> **$E_{32}(2)$**, $R_3 \to R_3 + 2R_2$: $\left(0,\ 0,\ -\frac{3}{2} - 3 \mid -\frac{1}{4} - \frac{1}{2},\ 2,\ 1\right) = \left(0, 0, -\frac{9}{2} \mid -\frac{3}{4}, 2, 1\right)$.
> $$
> \left[\begin{array}{ccc|ccc} 4 & 4 & 2 & 1 & 0 & 0 \\ 0 & -1 & -\frac{3}{2} & -\frac{1}{4} & 1 & 0 \\ 0 & 0 & -\frac{9}{2} & -\frac{3}{4} & 2 & 1 \end{array}\right]
> $$
> Tre pivot: il rango è $3$, $A$ è invertibile, **la soluzione esiste ed è unica**.
>
> **$D_1(\frac{1}{4})$, $D_2(-1)$, $D_3(-\frac{2}{9})$**:
> - $R_1 = \left(1, 1, \frac{1}{2} \mid \frac{1}{4}, 0, 0\right)$
> - $R_2 = \left(0, 1, \frac{3}{2} \mid \frac{1}{4}, -1, 0\right)$
> - $R_3 = \left(0, 0, 1 \mid \frac{1}{6}, -\frac{4}{9}, -\frac{2}{9}\right)$ (per esempio $-\frac{3}{4} \cdot \left(-\frac{2}{9}\right) = \frac{6}{36} = \frac{1}{6}$)
>
> **$E_{12}(-1)$**, $R_1 \to R_1 - R_2$: $\left(1, 0, \frac{1}{2} - \frac{3}{2} \mid 0, 1, 0\right) = (1, 0, -1 \mid 0, 1, 0)$.
>
> **$E_{13}(1)$**, $R_1 \to R_1 + R_3$: $\left(1, 0, 0 \mid \frac{1}{6},\ 1 - \frac{4}{9},\ -\frac{2}{9}\right) = \left(1, 0, 0 \mid \frac{1}{6}, \frac{5}{9}, -\frac{2}{9}\right)$.
>
> **$E_{23}(-\frac{3}{2})$**, $R_2 \to R_2 - \frac{3}{2}R_3$: $\left(0, 1, 0 \mid \frac{1}{4} - \frac{1}{4},\ -1 + \frac{2}{3},\ 0 + \frac{1}{3}\right) = \left(0, 1, 0 \mid 0, -\frac{1}{3}, \frac{1}{3}\right)$.
> $$
> A^{-1} = \begin{pmatrix} \frac{1}{6} & \frac{5}{9} & -\frac{2}{9} \\ 0 & -\frac{1}{3} & \frac{1}{3} \\ \frac{1}{6} & -\frac{4}{9} & -\frac{2}{9} \end{pmatrix}
> $$
> **Soluzione**: $\vec{x} = A^{-1}\vec{b}$ con $\vec{b} = (4, -1, 3)$.
> - $x = \frac{4}{6} - \frac{5}{9} - \frac{6}{9} = \frac{6}{9} - \frac{11}{9} = -\frac{5}{9}$
> - $y = 0 + \frac{1}{3} + 1 = \frac{4}{3}$
> - $z = \frac{4}{6} + \frac{4}{9} - \frac{6}{9} = \frac{6}{9} - \frac{2}{9} = \frac{4}{9}$
>
> $$
> \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -\frac{5}{9} \\ \frac{4}{3} \\ \frac{4}{9} \end{pmatrix}
> $$
> **Verifica nel sistema**: $4\left(-\frac{5}{9}\right) + 4 \cdot \frac{4}{3} + 2 \cdot \frac{4}{9} = \frac{-20 + 48 + 8}{9} = \frac{36}{9} = 4$; $\ -\frac{5}{9} - \frac{4}{9} = -1$; $\ -\frac{5}{9} + 4 - \frac{4}{9} = 4 - 1 = 3$. Torna.

## Errori tipici

- Dichiarare la verifica senza farla: scrivere “$AA^{-1} = I$" accanto a un'inversa sbagliata. Nel quaderno degli esercizi di Pietro, esercizio 3.8 del foglio 3, l'elemento $(1, 3)$ di $A^{-1}$ è $-\frac{1}{4}$ invece di $-\frac{5}{4}$ ($0 - \frac{5}{2} \cdot \frac{1}{2}$), e sotto c'è “$4AA^{-1} = 4I_3$": la prima riga di $A$ per la terza colonna di $4A^{-1}$ dà $-1 - 1 + 6 = 4$, non $0$. La verifica va fatta elemento per elemento.
- Perdere un elemento in una riga durante la riduzione. Nell'esercizio 2 di questo foglio, nel quaderno, la riga $R_3 - R_1 = (0, -2, 4, 0)$ diventa $(0, 0, 1, 0)$ senza passare per $E_{32}(2)$: il $-2$ è sparito, e l'inversa è uscita sbagliata (Pietro l'ha segnata "sbagliata, da correggere" e rifatta giusta).
- Dimenticare il segno quando si moltiplica una riga per un numero negativo: $D_1(-\frac{1}{2})$ su $(-2, k, 1, 1)$ dà $(1, -\frac{k}{2}, -\frac{1}{2}, -\frac{1}{2})$, non $(1, \frac{k}{2}, \frac{1}{2}, \frac{1}{2})$ (quaderno, esercizio 3.9).
- Scrivere accanto alla freccia un'operazione diversa da quella fatta: $E_{43}(-2k + 2)$ quando il conto fatto è $E_{43}(1 - 2k)$ (quaderno, 3.9). Il risultato era giusto, ma chi rilegge non può controllarlo.
- Unire le condizioni con il simbolo sbagliato: "invertibile $\forall k \neq 1 \cup k \neq -\frac{10}{9}$" (quaderno, esercizio 3 di questo foglio). Le condizioni valgono **insieme**: $k \neq 1$ **e** $k \neq -\frac{10}{9}$. $\cup$ è l'unione di insiemi, non "e".
- Usare $\emptyset$ (insieme vuoto) per lo zero o per la matrice nulla (“$A^n = \emptyset$", “$k = \emptyset$" nel quaderno): la matrice nulla è $O$, il numero è $0$.
- Dimenticare i casi in cui il sistema non ha soluzioni quando si chiede "per quali $k$ l'insieme delle soluzioni è chiuso" (esercizio 3.3).
- Ricominciare l'inversa dalla matrice già ridotta, con $I$ affiancata in quel momento: il blocco destro deve partire da $I$ accanto alla matrice **originale** e subire tutte le operazioni.

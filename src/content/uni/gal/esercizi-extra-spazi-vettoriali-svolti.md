---
title: Esercizi extra sugli spazi vettoriali svolti
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: completa
data: 2026-10-20
lezioni: []
ordine: 15
---

Il foglio <span class="src">Esercizi - Lo spazio Rn</span> della prof (esercizi 1-4 a <span class="src">p. 1</span>, soluzioni brevi a <span class="src">p. 2</span>, svolgimenti a <span class="src">p. 3-5</span>), argomento di [Geometria e Algebra Lineare](/uni/gal/). All'esercitazione 4 del tutor, mar 20/10, ne sono stati svolti in classe tre (<span class="src">appunti dell'esercitazione, p. 2-6</span>): l'1 (lì numerato 2), il 2 (lì 3) e il 4 (lì 4). Il 3 non è stato fatto in classe ed è "per casa". Il primo esercizio dell'esercitazione è quello della prof in $\mathbb{R}^5$ con parametro $t$ della L8, svolto in [Dipendenza lineare](/uni/gal/dipendenza-lineare/). La teoria sta in [Generatori](/uni/gal/generatori/), [Dipendenza lineare](/uni/gal/dipendenza-lineare/) e [Basi](/uni/gal/basi/); il metodo di riduzione in [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/).

Come usarla: prova da solo, apri l'**indizio** se ti blocchi, la **soluzione** solo alla fine. Ogni rango, ogni determinante di controllo e ogni combinazione sono stati verificati con sympy.

## Lo schema

È il "MEMO" con cui il tutor apre l'esercitazione (<span class="src">p. 1</span>), più le due righe che servono ai punti sugli Span.

```
{v1, ..., vk} ⊆ R^n,   A = [v1 | ... | vk]   (vettori come COLONNE, A è n×k)

sistema di generatori di R^n    <=>  rg(A) = n
linearmente indipendente        <=>  rg(A) = k
base di R^n                     <=>  rg(A) = k  e  k = n

x ∈ Span(v1..vk)   <=>  A·λ = x compatibile  <=>  rg(A) = rg(A | x)      (Rouché-Capelli)
Span come sistema omogeneo:  riduci [A | x] con x in lettere, ogni riga nulla a sinistra -> un'equazione
vk come combinazione:        rref(A), la colonna senza pivot contiene i coefficienti
```

## Esercizi

### Esercizio 1

Considera i seguenti vettori in $\mathbb{R}^4$:
$$
\vec{v}_1 = (2, 1, 1, 1), \quad \vec{v}_2 = (-1, 1, 2, 0), \quad \vec{v}_3 = (3, -2, -1, 0), \quad \vec{v}_4 = (0, 5, 5, 2)
$$

- 1) Determina se $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ sono linearmente indipendenti.
- 2) Possiamo esprimere $\vec{v}_4$ come combinazione lineare dei vettori $\vec{v}_1, \vec{v}_2, \vec{v}_3$?

> [!tip]- Indizio
> Una sola matrice $A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4]$ serve per tutti e due i punti. Per il punto 1 conti i pivot e li confronti con $k = 4$. Per il punto 2 guardi dove cadono i pivot: se le prime tre colonne li hanno tutti, $\vec{v}_4$ è combinazione delle prime tre, e i coefficienti li leggi dalla quarta colonna della forma ridotta.

> [!example]- Soluzione
> Svolto dal tutor all'esercitazione 4, 20/10 (<span class="src">p. 2-3</span>).
>
> **Come si riconosce**: quattro vettori di $\mathbb{R}^4$, domanda "indipendenti?" e poi "uno è combinazione degli altri?". Sono le due domande del metodo di [Dipendenza lineare](/uni/gal/dipendenza-lineare/): rango confrontato con $k$, poi rref.
>
> **1)** $A$ ha i vettori come colonne:
> $$
> A = \begin{pmatrix} 2 & -1 & 3 & 0 \\ 1 & 1 & -2 & 5 \\ 1 & 2 & -1 & 5 \\ 1 & 0 & 0 & 2 \end{pmatrix}
> $$
> Pivot $2$ in posizione $(1, 1)$; si azzerano i tre $1$ sotto, sottraendo metà della prima riga.
> - **$E_{21}(-\frac12)$**: $R_2 - \frac12 R_1 = (1 - 1,\ 1 + \frac12,\ -2 - \frac32,\ 5 - 0) = (0, \frac32, -\frac72, 5)$;
> - **$E_{31}(-\frac12)$**: $R_3 - \frac12 R_1 = (1 - 1,\ 2 + \frac12,\ -1 - \frac32,\ 5 - 0) = (0, \frac52, -\frac52, 5)$;
> - **$E_{41}(-\frac12)$**: $R_4 - \frac12 R_1 = (1 - 1,\ 0 + \frac12,\ 0 - \frac32,\ 2 - 0) = (0, \frac12, -\frac32, 2)$.
>
> Per togliere le frazioni il tutor moltiplica le tre righe per $2$, **$D_2(2)$, $D_3(2)$, $D_4(2)$** (moltiplicare una riga per un numero non nullo non cambia il rango):
> $$
> \begin{pmatrix} 2 & -1 & 3 & 0 \\ 0 & 3 & -7 & 10 \\ 0 & 5 & -5 & 10 \\ 0 & 1 & -3 & 4 \end{pmatrix}
> $$
> Pivot $3$ in posizione $(2, 2)$.
> - **$E_{32}(-\frac53)$**: $R_3 - \frac53 R_2 = (0,\ 5 - 5,\ -5 + \frac{35}{3},\ 10 - \frac{50}{3}) = (0, 0, \frac{20}{3}, -\frac{20}{3})$;
> - **$E_{42}(-\frac13)$**: $R_4 - \frac13 R_2 = (0,\ 1 - 1,\ -3 + \frac73,\ 4 - \frac{10}{3}) = (0, 0, -\frac23, \frac23)$.
>
> Pivot $\frac{20}{3}$ in posizione $(3, 3)$.
> - **$E_{43}(\frac{1}{10})$**: $R_4 + \frac{1}{10} R_3 = (0,\ 0,\ -\frac23 + \frac23,\ \frac23 - \frac23) = (0, 0, 0, 0)$.
> $$
> \begin{pmatrix} 2 & -1 & 3 & 0 \\ 0 & 3 & -7 & 10 \\ 0 & 0 & \frac{20}{3} & -\frac{20}{3} \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Tre pivot: $\operatorname{rg}(A) = 3 < 4 = k$. **I quattro vettori sono linearmente dipendenti.**
>
> **2)** I tre pivot stanno nelle prime tre colonne, quindi $\operatorname{rg}[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3] = 3 = \operatorname{rg}[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4]$: per Rouché-Capelli il sistema $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 = \vec{v}_4$ è compatibile, **sì**. Per trovare i coefficienti si continua con la riduzione all'indietro.
>
> **$D_1(\frac12)$, $D_2(\frac13)$, $D_3(\frac{3}{20})$**, pivot uguali a $1$:
> - $\frac12(2, -1, 3, 0) = (1, -\frac12, \frac32, 0)$;
> - $\frac13(0, 3, -7, 10) = (0, 1, -\frac73, \frac{10}{3})$;
> - $\frac{3}{20}(0, 0, \frac{20}{3}, -\frac{20}{3}) = (0, 0, 1, -1)$.
>
> **$E_{12}(\frac12)$**: $R_1 + \frac12 R_2 = (1,\ -\frac12 + \frac12,\ \frac32 - \frac76,\ 0 + \frac53) = (1, 0, \frac13, \frac53)$.
>
> **$E_{13}(-\frac13)$**: $R_1 - \frac13 R_3 = (1,\ 0,\ \frac13 - \frac13,\ \frac53 + \frac13) = (1, 0, 0, 2)$.
>
> **$E_{23}(\frac73)$**: $R_2 + \frac73 R_3 = (0,\ 1,\ -\frac73 + \frac73,\ \frac{10}{3} - \frac73) = (0, 1, 0, 1)$.
> $$
> \operatorname{rref}(A) = \begin{pmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> La quarta colonna, senza pivot, contiene $2, 1, -1$: $\boxed{\vec{v}_4 = 2\vec{v}_1 + \vec{v}_2 - \vec{v}_3}$.
>
> **Verifica** (il "suggerimento" del tutor: per controllare i conti, esplicitarla): $2(2, 1, 1, 1) + (-1, 1, 2, 0) - (3, -2, -1, 0) = (4 - 1 - 3,\ 2 + 1 + 2,\ 2 + 2 + 1,\ 2 + 0 - 0) = (0, 5, 5, 2) = \vec{v}_4$.

### Esercizio 2

Considera il seguente insieme di vettori di $\mathbb{R}^3$
$$
\vec{v}_1 = (1, 0, 1), \quad \vec{v}_2 = (2, -1, 1), \quad \vec{v}_3 = (3, -1, k), \quad \vec{v}_4 = (k - 2, -1, -1)
$$
dipendenti dal parametro reale $k \in \mathbb{R}$.

- 1) Trova tutti i valori di $k \in \mathbb{R}$, se ne esistono, tali che l'insieme di vettori $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è un sistema di generatori di $\mathbb{R}^3$.
- 2) Ci sono valori di $k$ per i quali l'insieme dei vettori $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è linearmente indipendente?
- 3) Sia $k = 2$: trova il sistema lineare per il quale lo Span di $\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4$ è l'insieme delle soluzioni.

> [!tip]- Indizio
> 1) $A$ è $3 \times 4$; per generare $\mathbb{R}^3$ servono $3$ pivot. Usa come pivot i numeri senza parametro (colonne 1 e 2) e guarda cosa resta nella terza riga. 2) Prima di fare conti: quanti vettori indipendenti può avere al massimo $\mathbb{R}^3$? 3) Ripeti la riduzione con $k = 2$ e una colonna $\vec{x} = (x_1, x_2, x_3)$ in lettere.

> [!example]- Soluzione
> Svolto dal tutor all'esercitazione 4, 20/10 (<span class="src">p. 4-5</span>).
>
> **Come si riconosce**: tre domande diverse sullo stesso insieme, generatori (rango contro $n = 3$), indipendenza (rango contro $k = 4$), equazioni dello Span ($[A \mid \vec{x}]$). La riduzione è una sola.
>
> **1)**
> $$
> A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4] = \begin{pmatrix} 1 & 2 & 3 & k - 2 \\ 0 & -1 & -1 & -1 \\ 1 & 1 & k & -1 \end{pmatrix}
> $$
> - **$E_{31}(-1)$**: $R_3 - R_1 = (1 - 1,\ 1 - 2,\ k - 3,\ -1 - (k - 2)) = (0, -1, k - 3, 1 - k)$.
> - **$E_{32}(-1)$**: $R_3 - R_2 = (0,\ -1 + 1,\ k - 3 + 1,\ 1 - k + 1) = (0, 0, k - 2, 2 - k)$.
> $$
> \begin{pmatrix} 1 & 2 & 3 & k - 2 \\ 0 & -1 & -1 & -1 \\ 0 & 0 & k - 2 & 2 - k \end{pmatrix}
> $$
> I pivot $1$ e $-1$ non dipendono da $k$. La terza riga è $(0, 0, k - 2, 2 - k)$, nulla solo se $k - 2 = 0$.
> - $k \neq 2$: $k - 2 \neq 0$ è il terzo pivot, $\operatorname{rg}(A) = 3 = n$. **Sistema di generatori di $\mathbb{R}^3$.**
> - $k = 2$: la terza riga è $(0, 0, 0, 0)$, $\operatorname{rg}(A) = 2 < 3$. **Non è un sistema di generatori.**
>
> **Risposta**: generano $\mathbb{R}^3$ se e solo se $k \neq 2$.
>
> **2)** Per essere linearmente indipendenti servirebbe $\operatorname{rg}(A) = 4 = k$, ma $A$ ha $3$ righe, quindi $\operatorname{rg}(A) \leq 3$. **Mai**: quattro vettori di $\mathbb{R}^3$ sono sempre dipendenti (un insieme indipendente di $\mathbb{R}^3$ ha al massimo $3$ elementi).
>
> **3)** Con $k = 2$: $\vec{v}_3 = (3, -1, 2)$, $\vec{v}_4 = (0, -1, -1)$. Riduco $[A \mid \vec{x}]$ con le stesse operazioni.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 3 & 0 & x_1 \\ 0 & -1 & -1 & -1 & x_2 \\ 1 & 1 & 2 & -1 & x_3 \end{array}\right]
> $$
> - **$E_{31}(-1)$**: $R_3 - R_1 = (0, -1, -1, -1 \mid x_3 - x_1)$;
> - **$E_{32}(-1)$**: $R_3 - R_2 = (0, 0, 0, 0 \mid x_3 - x_1 - x_2)$.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 3 & 0 & x_1 \\ 0 & -1 & -1 & -1 & x_2 \\ 0 & 0 & 0 & 0 & x_3 - x_1 - x_2 \end{array}\right]
> $$
> Imponendo $\operatorname{rg}(A) = \operatorname{rg}(A \mid \vec{x})$, l'ultima riga deve avere $0$ anche a destra:
> $$
> \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4) = \{\vec{x} \in \mathbb{R}^3 : x_3 - x_1 - x_2 = 0\}
> $$
> Una equazione, $3 - 2 = 1$: lo Span è un piano per l'origine.
>
> **Verifica** sui quattro vettori ($k = 2$): $\vec{v}_1$: $1 - 1 - 0 = 0$; $\vec{v}_2$: $1 - 2 + 1 = 0$; $\vec{v}_3$: $2 - 3 + 1 = 0$; $\vec{v}_4$: $-1 - 0 + 1 = 0$.
>
> **Perché per $k = 2$ il rango scende** (non chiesto, utile da vedere): $\operatorname{rref}(A) = \begin{pmatrix} 1 & 0 & 1 & -2 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$, quindi $\vec{v}_3 = \vec{v}_1 + \vec{v}_2$ e $\vec{v}_4 = -2\vec{v}_1 + \vec{v}_2$. Controllo: $(1 + 2,\ 0 - 1,\ 1 + 1) = (3, -1, 2)$; $(-2 + 2,\ 0 - 1,\ -2 + 1) = (0, -1, -1)$.
>
> **Nota sul testo della prof**: nello svolgimento (<span class="src">p. 4</span>) c'è scritto "la matrice $A$ le cui colonne corrispondono a $\vec{v}_1, \vec{v}_2, \vec{v}_3$", ma la matrice ha quattro colonne, una per vettore: è una svista di battitura.

### Esercizio 3

Considera i seguenti vettori in $\mathbb{R}^4$:
$$
\vec{v}_1 = (-1, 0, 1, 1), \quad \vec{v}_2 = (-1, -1, 1, 0), \quad \vec{v}_3 = (1, 2, 2, 1)
$$
e, per ogni $k \in \mathbb{R}$, il vettore $\vec{v}_4 = (-1, 0, 0, k - 1)$.

- 1) Dimostra che $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è un insieme linearmente indipendente.
- 2) Trova il valore di $k \in \mathbb{R}$, se esiste, per il quale $\vec{v}_4$ è contenuto nello Span di $\vec{v}_1, \vec{v}_2, \vec{v}_3$ e, per quel valore di $k$, scrivi $\vec{v}_4$ come combinazione lineare di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.

> [!tip]- Indizio
> Riduci $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4]$ una volta sola. Le prime tre colonne rispondono al punto 1 (servono $3$ pivot). Per il punto 2: $\vec{v}_4 \in \mathrm{Span}$ se e solo se la quarta colonna non porta un pivot nuovo, cioè se il rango resta $3$.

> [!example]- Soluzione
> Non svolto all'esercitazione: per casa. Svolgimento della prof a <span class="src">p. 4-5</span>.
>
> **Come si riconosce**: indipendenza di tre vettori (rango contro $k = 3$) e appartenenza a uno Span con parametro (Rouché-Capelli, $\operatorname{rg}(A) = \operatorname{rg}(A \mid \vec{v}_4)$). Con le colonne in quest'ordine la stessa riduzione dà tutti e due.
> $$
> [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4] = \begin{pmatrix} -1 & -1 & 1 & -1 \\ 0 & -1 & 2 & 0 \\ 1 & 1 & 2 & 0 \\ 1 & 0 & 1 & k - 1 \end{pmatrix}
> $$
> Pivot $-1$ in posizione $(1, 1)$.
> - **$E_{31}(1)$**: $R_3 + R_1 = (1 - 1,\ 1 - 1,\ 2 + 1,\ 0 - 1) = (0, 0, 3, -1)$;
> - **$E_{41}(1)$**: $R_4 + R_1 = (1 - 1,\ 0 - 1,\ 1 + 1,\ k - 1 - 1) = (0, -1, 2, k - 2)$.
>
> Pivot $-1$ in posizione $(2, 2)$.
> - **$E_{42}(-1)$**: $R_4 - R_2 = (0,\ -1 + 1,\ 2 - 2,\ k - 2 - 0) = (0, 0, 0, k - 2)$.
> $$
> \begin{pmatrix} -1 & -1 & 1 & -1 \\ 0 & -1 & 2 & 0 \\ 0 & 0 & 3 & -1 \\ 0 & 0 & 0 & k - 2 \end{pmatrix}
> $$
> **1)** Le prime tre colonne hanno i pivot $-1$, $-1$, $3$: $\operatorname{rg}[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3] = 3$, uguale al numero di colonne. **$\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è linearmente indipendente.**
>
> **2)** $\vec{v}_4 \in \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ se e solo se $\operatorname{rg}[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4] = 3$ (Rouché-Capelli). La quarta riga è $(0, 0, 0, k - 2)$:
> - $k \neq 2$: $k - 2$ è un quarto pivot, rango $4$, $\vec{v}_4 \notin \mathrm{Span}$;
> - $k = 2$: la quarta riga è nulla, rango $3$, $\vec{v}_4 \in \mathrm{Span}$.
>
> Quindi **$k = 2$**, e $\vec{v}_4 = (-1, 0, 0, 1)$. Per i coefficienti, forma ridotta con $k = 2$:
>
> **$D_1(-1)$, $D_2(-1)$, $D_3(\frac13)$**: $(1, 1, -1, 1)$, $(0, 1, -2, 0)$, $(0, 0, 1, -\frac13)$.
>
> **$E_{12}(-1)$**: $R_1 - R_2 = (1,\ 1 - 1,\ -1 + 2,\ 1 - 0) = (1, 0, 1, 1)$.
>
> **$E_{13}(-1)$**: $R_1 - R_3 = (1,\ 0,\ 1 - 1,\ 1 + \frac13) = (1, 0, 0, \frac43)$.
>
> **$E_{23}(2)$**: $R_2 + 2R_3 = (0,\ 1,\ -2 + 2,\ 0 - \frac23) = (0, 1, 0, -\frac23)$.
> $$
> \begin{pmatrix} 1 & 0 & 0 & \frac43 \\ 0 & 1 & 0 & -\frac23 \\ 0 & 0 & 1 & -\frac13 \\ 0 & 0 & 0 & 0 \end{pmatrix} \qquad \Rightarrow \qquad \boxed{\vec{v}_4 = \tfrac43\vec{v}_1 - \tfrac23\vec{v}_2 - \tfrac13\vec{v}_3}
> $$
> **Verifica**: $\frac43(-1, 0, 1, 1) - \frac23(-1, -1, 1, 0) - \frac13(1, 2, 2, 1)$, componente per componente:
> - $-\frac43 + \frac23 - \frac13 = -1$;
> - $0 + \frac23 - \frac23 = 0$;
> - $\frac43 - \frac23 - \frac23 = 0$;
> - $\frac43 - 0 - \frac13 = 1$.
>
> È $(-1, 0, 0, 1) = \vec{v}_4$ con $k = 2$.
>
> **Un secondo controllo, con le equazioni dello Span.** Tre vettori indipendenti in $\mathbb{R}^4$ danno $4 - 3 = 1$ equazione; riducendo $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{x}]$ esce $x_1 - x_2 + x_4 = 0$ (sui generatori: $-1 - 0 + 1 = 0$, $-1 + 1 + 0 = 0$, $1 - 2 + 1 = 0$). Su $\vec{v}_4$: $-1 - 0 + (k - 1) = k - 2$, nullo solo per $k = 2$. Torna.

### Esercizio 4

Considera i seguenti vettori in $\mathbb{R}^4$: $\vec{v}_1 = (1, 1, 2, 0)$, $\vec{v}_2 = (0, 3, -2, k - 2)$, $\vec{v}_3 = (0, 1, -1, -1)$, $\vec{v}_4 = (1, 0, 2, k)$ per $k \in \mathbb{R}$. Determina per quali valori di $k \in \mathbb{R}$, se ce ne sono, l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è una base di $\mathbb{R}^4$.

> [!tip]- Indizio
> Quattro vettori in $\mathbb{R}^4$: $k = n$, quindi per la proposizione (c) di [Basi](/uni/gal/basi/) basta che il rango sia $4$. Il parametro sta solo nella quarta riga: riduci le prime tre righe senza parametro e porta il parametro in fondo.

> [!example]- Soluzione
> Svolto dal tutor all'esercitazione 4, 20/10 (<span class="src">p. 5-6</span>).
>
> **Come si riconosce**: "per quali $k$ è una base di $\mathbb{R}^4$" con quattro vettori. Il tutor ricorda che una base deve essere un sistema di generatori **e** linearmente indipendente; con $k = n = 4$ le due condizioni sono la stessa, $\operatorname{rg}(A) = 4$.
> $$
> A = \begin{pmatrix} 1 & 0 & 0 & 1 \\ 1 & 3 & 1 & 0 \\ 2 & -2 & -1 & 2 \\ 0 & k - 2 & -1 & k \end{pmatrix}
> $$
> Pivot $1$ in posizione $(1, 1)$.
> - **$E_{21}(-1)$**: $R_2 - R_1 = (1 - 1,\ 3 - 0,\ 1 - 0,\ 0 - 1) = (0, 3, 1, -1)$;
> - **$E_{31}(-2)$**: $R_3 - 2R_1 = (2 - 2,\ -2 - 0,\ -1 - 0,\ 2 - 2) = (0, -2, -1, 0)$.
> $$
> \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 3 & 1 & -1 \\ 0 & -2 & -1 & 0 \\ 0 & k - 2 & -1 & k \end{pmatrix}
> $$
> Pivot $3$ in posizione $(2, 2)$, senza parametro.
> - **$E_{32}(\frac23)$**: $R_3 + \frac23 R_2 = (0,\ -2 + 2,\ -1 + \frac23,\ 0 - \frac23) = (0, 0, -\frac13, -\frac23)$;
> - **$E_{42}(-\frac{k - 2}{3})$**: $R_4 - \frac{k-2}{3} R_2$. Componente per componente: $k - 2 - \frac{k - 2}{3} \cdot 3 = 0$; $\ -1 - \frac{k - 2}{3} \cdot 1 = \frac{-3 - k + 2}{3} = -\frac{k + 1}{3}$; $\ k - \frac{k - 2}{3} \cdot (-1) = \frac{3k + k - 2}{3} = \frac{4k - 2}{3}$. Riga $(0, 0, -\frac{k + 1}{3}, \frac{4k - 2}{3})$.
> $$
> \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 3 & 1 & -1 \\ 0 & 0 & -\frac13 & -\frac23 \\ 0 & 0 & -\frac{k + 1}{3} & \frac{4k - 2}{3} \end{pmatrix}
> $$
> Pivot $-\frac13$ in posizione $(3, 3)$, senza parametro (per questo si usa la riga 3 e non la 4).
> - **$E_{43}(-(k + 1))$**: $R_4 - (k + 1) R_3$. Terza componente: $-\frac{k + 1}{3} - (k + 1)\left(-\frac13\right) = 0$. Quarta: $\frac{4k - 2}{3} - (k + 1)\left(-\frac23\right) = \frac{4k - 2 + 2k + 2}{3} = \frac{6k}{3} = 2k$ (il conto che il tutor fa a margine).
> $$
> \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 3 & 1 & -1 \\ 0 & 0 & -\frac13 & -\frac23 \\ 0 & 0 & 0 & 2k \end{pmatrix}
> $$
> - $k \neq 0$: quattro pivot, $\operatorname{rg}(A) = 4$. **Base di $\mathbb{R}^4$.**
> - $k = 0$: l'ultima riga è nulla, $\operatorname{rg}(A) = 3 \neq 4$. Non è una base.
>
> **Risposta**: $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è una base di $\mathbb{R}^4$ se e solo se $k \neq 0$.
>
> **Controllo col determinante** (argomento che arriva più avanti nel corso; qui come verifica): le operazioni $E_{ij}$ non cambiano il determinante, quindi $\det A$ è il prodotto dei pivot, $1 \cdot 3 \cdot \left(-\frac13\right) \cdot 2k = -2k$, nullo solo per $k = 0$. Lo conferma sympy.
>
> **Controllo per $k = 0$**: dalla forma ridotta, $\vec{v}_4 = \vec{v}_1 - \vec{v}_2 + 2\vec{v}_3$. Con $k = 0$: $(1, 1, 2, 0) - (0, 3, -2, -2) + 2(0, 1, -1, -1) = (1,\ 1 - 3 + 2,\ 2 + 2 - 2,\ 0 + 2 - 2) = (1, 0, 2, 0) = \vec{v}_4$. Un vettore è combinazione degli altri: dipendenti, non una base.

## Errori tipici

- Confrontare il rango con il numero sbagliato: per i generatori si confronta con $n$ (le righe, la dimensione dello spazio), per l'indipendenza con $k$ (le colonne, il numero di vettori). Nell'esercizio 2 il rango $3$ basta per generare $\mathbb{R}^3$ ma non per l'indipendenza di quattro vettori.
- Fare conti per il punto 2 dell'esercizio 2: $4 > 3$ vettori in $\mathbb{R}^3$ sono dipendenti per qualunque $k$, e la risposta "mai" non richiede la matrice.
- Dividere per un pivot col parametro ($k - 2$, $-\frac{k + 1}{3}$) senza aver escluso i valori che lo annullano. Il tutor nell'esercizio 4 sceglie come pivot $-\frac13$, senza parametro, proprio per evitarlo.
- Leggere i coefficienti della combinazione da una forma a scalini non ridotta: dalla scalini dell'esercizio 1 la quarta colonna è $(0, 10, -\frac{20}{3}, 0)$, che non ha niente a che vedere con $2, 1, -1$. Servono pivot $1$ e zeri sopra.
- Nel punto "Span come sistema" scrivere l'equazione con dentro anche le righe non nulle: le equazioni vengono **solo** dalle righe nulle a sinistra.
- Ricopiare male la matrice di partenza: negli appunti dell'esercitazione (<span class="src">p. 6</span>) la prima matrice dell'esercizio 4 sembra avere $1$ in posizione $(4, 3)$, mentre la quarta componente di $\vec{v}_3$ è $-1$; dal passaggio dopo il tutor usa il valore giusto. Prima di ridurre, si rilegge ogni colonna contro il suo vettore.

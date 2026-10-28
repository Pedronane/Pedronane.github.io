---
title: Dimensione
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-10-27
lezioni:
  - 27 ott
ordine: 17
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/), capitolo 6 degli appunti della prof ("Basi"). Lezione L10 del mar 27/10, seconda parte (<span class="src">p. 1-4</span>). Dispensa, capitolo 6: <span class="src">p. 128-131</span> (numeri di pagina del PDF). Riprende [Basi](/uni/gal/basi/) (L8) e viene dopo [Determinante](/uni/gal/determinante/). Il capitolo continua nelle lezioni L11 e L12 (2/11 e 3/11, "basi I" e "basi II"), non ancora fatte.

> [!abstract] Per l'esame
> - **Saper enunciare**: ogni spazio finitamente generato $V \neq \{\vec{0}\}$ ha una base; $\mathcal{B}$ è una base se e solo se ogni vettore si scrive in modo unico; il teorema di completamento e "tutte le basi hanno lo stesso numero di elementi"; la definizione di dimensione e le dimensioni di $\mathbb{R}^n$, $M_2(\mathbb{R})$, $M_{m,n}(\mathbb{R})$, $\mathbb{R}[x]_d$.
> - **Saper fare**: estrarre una base da un insieme di generatori con Gauss (procedimento 1), anche per $U = \mathrm{Span}(\ldots)$; calcolare $\dim U$.
> - **Dove esce**: esercitazione 5 del 9/11 ("determinante e basi"). Il parziale del 5/11, secondo l'avviso del 28/9, arriva al capitolo 4: vedi [Ripasso provetta › Dimensione](/uni/gal/ripasso-provetta/#dimensione).

## Lezione

### Ricordiamo: base (<span class="src">p. 1</span>)

> [!abstract] Definizione
> $V$ sp. vettoriale finitamente generato. Un insieme di vettori $\mathcal{B} = \{\vec{v}_1, \ldots, \vec{v}_m\}$ è una **base** di $V$ se è un sistema di generatori linearm. indipendente.

Esempi, basi standard e criterio col rango in $\mathbb{R}^n$ sono in [Basi](/uni/gal/basi/).

### Esistenza di una base e scrittura unica (<span class="src">p. 1</span>)

> [!abstract] Teorema
> Sia $V$ sp. vett. fin. generato, $V \neq \{\vec{0}\}$.
> 1. $V$ ammette una base.
> 2. $\mathcal{B} = \{\vec{v}_1, \ldots, \vec{v}_m\}$ è una base di $V$ $\iff$ $\forall\, \vec{v} \in V$ si scrive **in modo unico** come combin. lineare degli elementi di $\mathcal{B}$.

> [!note]- Dimostrazione di (1) (prof, p. 1)
> Sia $\{\vec{v}_1, \ldots, \vec{v}_m\}$ un insieme di generatori di $V$ (esiste per ipotesi).
>
> Se è lin. indip. allora è una base. STOP.
>
> Altrimenti $\exists\, i \in \{1, \ldots, m\}$ tale che
> $$
> \vec{v}_i \in \mathrm{Span}(\vec{v}_1, \ldots, \check{\vec{v}}_i, \ldots, \vec{v}_m) = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_m),
> $$
> dove $\check{\vec{v}}_i$ vuol dire "tolto $\vec{v}_i$": $\{\vec{v}_1, \ldots, \check{\vec{v}}_i, \ldots, \vec{v}_m\}$ è ancora un sistema di generatori di $V$.
>
> Ora, se $\{\vec{v}_1, \ldots, \check{\vec{v}}_i, \ldots, \vec{v}_m\}$ è lin. indip., allora è una base. STOP. Altrimenti ripeto. $\square$
>
> Il procedimento finisce perché a ogni passo si toglie un vettore da un insieme finito, e non si arriva all'insieme vuoto perché $V \neq \{\vec{0}\}$.

> [!note]- Dimostrazione di (2) ("vedi dispense", <span class="src">p. 128-129</span>)
> $(\Rightarrow)$ È la proposizione sull'unicità della L8, dimostrata in [Basi](/uni/gal/basi/): esistenza dai generatori, unicità dall'indipendenza.
>
> $(\Leftarrow)$ Ogni $\vec{v}$ si scrive, quindi $\mathcal{B}$ genera $V$. Anche $\vec{0}$ si scrive in modo unico, e una scrittura è quella con tutti i coefficienti nulli:
> $$
> \vec{0} = \sum_{i=1}^{m}\lambda_i\vec{v}_i \ \Rightarrow \ \lambda_i = 0 \ \forall\, i,
> $$
> che è la definizione di indipendenza. Quindi $\mathcal{B}$ è una base.

### Procedimento 1: estrazione di una base da un insieme di generatori (<span class="src">p. 2</span>)

> [!abstract] Procedimento 1
> Dato $\{\vec{v}_1, \ldots, \vec{v}_m\} \subseteq \mathbb{R}^n$ sistema di gen. ($m \geq n$):
> - formiamo la matrice $n \times m$ $A = [\vec{v}_1 \mid \cdots \mid \vec{v}_m]$;
> - riduciamo $A$ a scalini con G-J: i vettori corrispondenti alle colonne contenenti i pivot formano una base.

Si prendono i vettori **di partenza** delle colonne pivot, non le colonne della matrice a scalini. Le colonne senza pivot sono combinazioni di quelle con pivot, con gli stessi coefficienti in $A$ e nella sua forma ridotta ([Dipendenza lineare](/uni/gal/dipendenza-lineare/)).

**Esempio della prof.** $\mathbb{R}^3 \ni \vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (2, 0, -1)$, $\vec{v}_3 = (1, -1, -1)$, $\vec{v}_4 = (1, 1, 1)$.
$$
A = \begin{pmatrix} 1 & 2 & 1 & 1 \\ 1 & 0 & -1 & 1 \\ 0 & -1 & -1 & 1 \end{pmatrix} \xrightarrow{E_{21}(-1)} \begin{pmatrix} 1 & 2 & 1 & 1 \\ 0 & -2 & -2 & 0 \\ 0 & -1 & -1 & 1 \end{pmatrix} \xrightarrow{E_{32}(-\frac12)} \begin{pmatrix} 1 & 2 & 1 & 1 \\ 0 & -2 & -2 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
$$
($R_3 - \frac12 R_2 = (0,\ -1 + 1,\ -1 + 1,\ 1 - 0)$.) Pivot $1$, $-2$, $1$ nelle colonne 1, 2, 4.

Conclusione:
- $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è un sist. di gen. di $\mathbb{R}^3$ (perché $\operatorname{rg}(A) = 3$);
- una base è data da $\{\vec{v}_1, \vec{v}_2, \vec{v}_4\}$ (grazie al procedim. 1).

$\vec{v}_3 = -\vec{v}_1 + \vec{v}_2$ è stato scartato.

**Esempio della prof** (<span class="src">p. 3</span>). Sia $U = \mathrm{Span}\big((1, 1, 0), (0, 1, 1), (1, 0, -1)\big) \subseteq \mathbb{R}^3$, con $\vec{v}_1, \vec{v}_2, \vec{v}_3$ nell'ordine. Trovare una base di $U$.
$$
A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix} \xrightarrow{E_{21}(-1)} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \xrightarrow{E_{32}(-1)} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}
$$
Conclusione: una base di $U$ è $\{\vec{v}_1, \vec{v}_2\}$.

Il procedimento vale per qualunque Span, non solo per generatori di $\mathbb{R}^3$; qui $\vec{v}_3 = \vec{v}_1 - \vec{v}_2$.

### Procedimento 2: completare un insieme lin. indipendente ad una base (<span class="src">p. 3</span>)

> [!abstract] Teorema
> Sia $\mathcal{B} = \{\vec{b}_1, \ldots, \vec{b}_n\}$ base di $V$. Sia $\{\vec{v}_1, \ldots, \vec{v}_m\}$ insieme lin. indip., tale che $m < n$. Allora $\exists$ una base di $V$ formata da $\{\vec{v}_1, \ldots, \vec{v}_m\}$ e da $n - m$ elementi di $\mathcal{B}$.
>
> In particolare ogni base di $V$ ha lo stesso numero di elementi.

Negli appunti c'è solo l'enunciato; il procedimento per trovare gli $n - m$ elementi è nella <span class="src">dispensa, §6.2.1</span>, e un esempio è in [Dimensione (esercizi)](/uni/gal/dimensione-esercizi/).

### Dimensione (<span class="src">p. 3-4</span>)

> [!abstract] Definizione
> Dato $V \neq \{\vec{0}\}$ sp. vett. finitam. generato, la **dimensione** di $V$, $\dim(V)$, è il numero di elem. di una sua qualunque base.

"Qualunque" ha senso grazie al teorema di prima: tutte le basi hanno lo stesso numero di elementi.

**Esempi** (<span class="src">p. 4</span>), contando gli elementi delle basi standard di [Basi](/uni/gal/basi/):

| $V \neq \{\vec{0}\}$ | $\dim(V)$ |
| --- | --- |
| $\mathbb{R}^n$ | $n$ |
| $M_2(\mathbb{R})$ | $4$ |
| $M_{m,n}(\mathbb{R})$ | $mn$ |
| $\mathbb{R}[x]_d$ | $d + 1$ |

In $\mathbb{R}[x]_d$ la base $\{1, x, \ldots, x^d\}$ parte da $x^0 = 1$: i monomi sono $d + 1$, non $d$.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Dimensione (esercizi)](/uni/gal/dimensione-esercizi/).

## Errori tipici

- Prendere come base le colonne della matrice a scalini invece dei vettori di partenza nelle colonne pivot.
- Mettere i vettori in riga e poi leggere i pivot: il procedimento 1 vuole i vettori in colonna.
- Dire che $\dim \mathbb{R}[x]_d = d$: la base $\{1, x, \ldots, x^d\}$ ha $d + 1$ elementi.
- Confondere la dimensione di $U = \mathrm{Span}(\ldots)$ con il numero dei generatori: è il rango della matrice dei generatori.
- Pensare che una base estratta sia unica: cambiando l'ordine dei vettori si possono scartare vettori diversi.

## Domande

- Enuncia il teorema di esistenza della base e la caratterizzazione con la scrittura unica. Perché serve $V \neq \{\vec{0}\}$?

- Come funziona la dimostrazione dell'esistenza di una base? Perché togliere $\vec{v}_i$ non cambia lo Span?

- Descrivi il procedimento 1. Quali vettori si prendono, e perché quelli delle colonne con pivot?

- Enuncia il teorema di completamento. Che conseguenza ha sul numero di elementi delle basi?

- Cos'è la dimensione di uno spazio vettoriale? Quanto valgono $\dim\mathbb{R}^n$, $\dim M_{m,n}(\mathbb{R})$, $\dim\mathbb{R}[x]_d$?

- Come si calcola la dimensione di $U = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_m) \subseteq \mathbb{R}^n$?

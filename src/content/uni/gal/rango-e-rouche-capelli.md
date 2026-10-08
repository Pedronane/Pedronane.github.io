---
title: Rango e Rouché-Capelli
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-09-28
lezioni: []
ordine: 6
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L4, lun 28/9 (3 ore). Fonte: appunti della prof <span class="src">p. 7</span> (rango), <span class="src">p. 11</span> (teorema di Rouché-Capelli), <span class="src">p. 9-12</span> (esempio 4 con parametro); esercitazione 2 del tutor, mar 29/9, <span class="src">p. 3</span> (memo Rouché-Capelli), <span class="src">es. 3 e 4, p. 5-9</span>. Prima: [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/), da cui si prendono forma a scalini e pivot. Il rango torna nella L6 (6/10, "rango e invertibilità"): una matrice quadrata è invertibile se e solo se ha rango massimo, in [Matrici invertibili](/uni/gal/matrici-invertibili/); la relazione $\operatorname{null}(A) + \operatorname{rg}(A) = n$ è in [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/).

> [!abstract] Per l'esame
> - **Saper enunciare**: definizione di rango con il numero di pivot; teorema di Rouché-Capelli completo, con i due casi della soluzione unica e delle infinite soluzioni (domande 2.6 e 2.7 del foglio 2).
> - **Saper dimostrare**: Rouché-Capelli leggendo la forma a scalini di $[A \mid \vec{b}]$ (a lezione la prof non l'ha dimostrato; la dimostrazione qui sotto usa solo Gauss-Jordan).
> - **Saper fare**: calcolare il rango di una matrice, anche con un parametro; discutere un sistema con parametro: per quali valori è compatibile, quando ha soluzione unica, quando infinite, e scrivere le soluzioni in ogni caso.
> - **Dove esce**: è l'esercizio tipo dei sistemi, 2.11, 2.14, 2.15, 2.16 del foglio 2 e es. 3-4 dell'esercitazione 2. Quasi sempre con un parametro $k$.

**A cosa serve.** Gauss-Jordan risolve un sistema; Rouché-Capelli dice **prima di risolverlo** se ha soluzioni e quante. Con un parametro questo è l'unico modo ragionevole di procedere: si riduce una volta sola tenendo il parametro, si guarda dove i pivot possono annullarsi, e da lì si dividono i casi.

```
   rg(A) < rg(A|b)              ->  incompatibile (nessuna soluzione)
   rg(A) = rg(A|b) = n          ->  una sola soluzione
   rg(A) = rg(A|b) < n          ->  infinite soluzioni, n - rg(A) parametri liberi
                                    (n = numero di incognite = colonne di A)
```

## Definizioni

### Rango

La prof (<span class="src">p. 7</span>): il **rango** di una matrice $A$, $\operatorname{rg}(A)$, è il numero di pivot di una sua forma a scalini.

> [!info] NB della prof: il rango è ben definito
> Ci sono modi diversi di ridurre una matrice in forma a scalini, ma tutti portano allo stesso numero di pivot. Quindi il rango non dipende dalle operazioni scelte. Il motivo è l'unicità di $\operatorname{rref}(A)$ ([Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/)): ogni forma a scalini si porta alla ridotta con la riduzione all'indietro, che non crea né toglie pivot.

Il numero di pivot è anche il numero di righe non nulle della forma a scalini. Leggendo le righe come equazioni, il rango conta quante equazioni del sistema sono **davvero indipendenti**: le righe che diventano nulle erano conseguenza delle altre (l'"info ripetuta, superflua" del tutor nell'es. 2).

Esempio della prof (<span class="src">p. 8</span>): la forma a scalini dell'esempio 1
$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 12 \\ 0 & 1 & -3 & -11 \\ 0 & 0 & -8 & -40 \end{array}\right]
$$
ha tre pivot, quindi rango $3$.

**Due fatti che vengono dalla definizione.**
- $\operatorname{rg}(A) \leq$ numero di righe e $\operatorname{rg}(A) \leq$ numero di colonne: ogni pivot occupa una riga sua e una colonna sua.
- $\operatorname{rg}(A) \leq \operatorname{rg}([A \mid \vec{b}]) \leq \operatorname{rg}(A) + 1$. Riducendo $[A \mid \vec{b}]$ a scalini, le prime $n$ colonne sono una forma a scalini di $A$; la colonna in più può contenere al massimo un pivot in più.

## Enunciati

### Teorema di Rouché-Capelli

> [!abstract] Teorema (Rouché-Capelli)
> Dato un sistema lineare in $n$ incognite, sia $[A \mid \vec{b}]$ la matrice completa associata. Tale sistema è compatibile **se e solo se**
> $$
> \operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}])
> $$
> Inoltre, se $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}])$, allora:
> 1. se $\operatorname{rg}(A) = n$ (numero di colonne di $A$) abbiamo un'unica soluzione;
> 2. se $\operatorname{rg}(A) < n$ abbiamo infinite soluzioni.

Ipotesi: un sistema lineare qualunque, $m$ equazioni e $n$ incognite, nessuna condizione su $m$. Tesi: la compatibilità si decide confrontando due ranghi; il numero di soluzioni confrontando il rango con $n$. Il confronto è sempre con le **incognite**, mai con le equazioni.

Nel caso 2 le soluzioni dipendono da $n - \operatorname{rg}(A)$ parametri liberi: tante quante le colonne di $A$ senza pivot. Non c'è un terzo caso "un numero finito maggiore di uno": un sistema lineare ha $0$, $1$ o infinite soluzioni.

> [!note]- Dimostrazione (con Gauss-Jordan)
> Le operazioni elementari non cambiano le soluzioni, quindi si può ragionare sulla forma a scalini $[A' \mid \vec{b}']$ di $[A \mid \vec{b}]$. Le prime $n$ colonne, $A'$, sono una forma a scalini di $A$; quindi $\operatorname{rg}(A)$ = pivot di $A'$ e $\operatorname{rg}([A \mid \vec{b}])$ = pivot di $[A' \mid \vec{b}']$.
>
> **Se $\operatorname{rg}(A) < \operatorname{rg}([A \mid \vec{b}])$.** C'è un pivot nell'ultima colonna. La sua riga è $(0 \ \cdots \ 0 \mid c)$ con $c \neq 0$, cioè l'equazione $0 = c$: nessuna ennupla la soddisfa. Incompatibile.
>
> **Se i ranghi sono uguali, $= r$.** Nessun pivot nell'ultima colonna: le righe non nulle sono $r$ e ognuna ha il pivot su un'incognita. Le $n - r$ incognite delle colonne senza pivot si possono scegliere liberamente; per ogni scelta, risalendo dal basso, ogni riga determina la sua incognita di pivot dividendo per il pivot ($\neq 0$). Si ottiene una soluzione, quindi il sistema è compatibile.
> - $r = n$: non ci sono variabili libere, la risalita dà una sola soluzione.
> - $r < n$: c'è almeno una variabile libera; valori diversi danno soluzioni diverse, che sono infinite.
>
> Sono tutti i casi, quindi vale anche il "solo se": compatibile implica che non ci sia la riga $0 = c$, cioè ranghi uguali. $\square$

### I tre esempi della prof, riletti

La prof (<span class="src">p. 11</span>) rilegge con il teorema gli esempi 1, 2, 3 ([Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/)), tutti con $n = 3$:

| esempio | $\operatorname{rg}(A)$ | $\operatorname{rg}([A \vert \vec{b}])$ | conclusione |
| --- | --- | --- | --- |
| 1 | $3$ | $3$ | unica soluzione, $(3, 4, 5)$ |
| 2 | $2$ | $2$ | $2 < 3$: infinite soluzioni, un parametro ($z$) |
| 3 | $2$ | $3$ | ranghi diversi: nessuna soluzione |

## Metodo

### Calcolare il rango

1. Riduci a scalini con Gauss-Jordan (non serve la forma ridotta).
2. Conta i pivot, cioè le righe non nulle.

Per $\operatorname{rg}(A)$ e $\operatorname{rg}([A \mid \vec{b}])$ insieme: riduci **una volta** la matrice completa. $\operatorname{rg}(A)$ sono i pivot nelle prime $n$ colonne, $\operatorname{rg}([A \mid \vec{b}])$ quelli di tutta la matrice.

### Discutere un sistema con un parametro

È lo schema dell'esempio 4 della prof e degli es. 3-4 del tutor.

1. Scrivi $[A \mid \vec{b}]$ e scegli i pivot fra i numeri **senza parametro** finché puoi (scambi di righe con $S_{ij}$): un pivot che vale $k - 1$ obbliga a dividere i casi subito.
2. Riduci a scalini tenendo $k$. Quando un'operazione richiede di dividere per un'espressione in $k$, fermati: è un punto dove i casi si separano.
3. Guarda gli elementi che dipendono da $k$ nella posizione di possibili pivot. **Fattorizzali**: $-2a^2 + 2a = 2a(1 - a)$ si annulla per $a = 0$ e $a = 1$.
4. Per ogni valore critico **sostituisci** il valore nella matrice a scalini e ricalcola i due ranghi; per tutti gli altri valori i ranghi sono quelli generici.
5. Applica Rouché-Capelli caso per caso e scrivi la conclusione per **ogni** $k \in \mathbb{R}$.
6. Se chiede le soluzioni: per i valori generici riduzione all'indietro con $k$ dentro (si può dividere per i pivot perché $k$ non è critico); per i valori critici compatibili si risolve la matrice numerica.
7. Verifica: un valore generico comodo (es. $k = 0$ se non è critico) sostituito nella soluzione generale e nel sistema di partenza.

## Esempi svolti a lezione

> [!example]- Prof, 28/9, <span class="src">esempio 4, p. 9-12</span>: sistema con parametro $k$
> Trovare tutte le soluzioni al variare del parametro $k$:
> $$
> \begin{cases} 2x - y - (k+1)z = -7 \\ 2x - (k+7)z = -9 \\ -x + y - 3z = 2 \\ x + y - (k+10)z = -7 \end{cases}
> $$
> Quattro equazioni, tre incognite ($n = 3$).
>
> **Riduzione.** $S_{13}$ porta su la riga che inizia con $-1$, senza parametro:
> $$
> \left[\begin{array}{ccc|c} 2 & -1 & -(k+1) & -7 \\ 2 & 0 & -(k+7) & -9 \\ -1 & 1 & -3 & 2 \\ 1 & 1 & -(k+10) & -7 \end{array}\right] \xrightarrow{S_{13}} \left[\begin{array}{ccc|c} -1 & 1 & -3 & 2 \\ 2 & 0 & -(k+7) & -9 \\ 2 & -1 & -(k+1) & -7 \\ 1 & 1 & -(k+10) & -7 \end{array}\right]
> $$
> $E_{21}(2)$, $E_{31}(2)$, $E_{41}(1)$:
> - $R_2 + 2R_1 = (0,\ 2,\ -(k+7) - 6 \mid -9 + 4) = (0, 2, -(k+13) \mid -5)$;
> - $R_3 + 2R_1 = (0,\ 1,\ -(k+1) - 6 \mid -7 + 4) = (0, 1, -(k+7) \mid -3)$;
> - $R_4 + R_1 = (0,\ 2,\ -(k+10) - 3 \mid -7 + 2) = (0, 2, -(k+13) \mid -5)$.
>
> La quarta riga è uguale alla seconda: con $E_{42}(-1)$ diventa nulla e la prof la cancella. Poi $E_{32}(-\frac{1}{2})$: $R_3 - \frac{1}{2}R_2$, con terzo elemento $-(k+7) + \frac{k+13}{2} = \frac{-2k - 14 + k + 13}{2} = -\frac{1}{2}(k+1)$ e termine noto $-3 + \frac{5}{2} = -\frac{1}{2}$.
> $$
> \left[\begin{array}{ccc|c} -1 & 1 & -3 & 2 \\ 0 & 2 & -(k+13) & -5 \\ 0 & 0 & -\frac{1}{2}(k+1) & -\frac{1}{2} \end{array}\right] \quad \text{è a scalini.}
> $$
>
> **Ranghi.** Il terzo pivot $-\frac{1}{2}(k+1)$ si annulla solo per $k = -1$.
> - $\operatorname{rg}(A) = 3$ se $k \neq -1$; $\operatorname{rg}(A) = 2$ se $k = -1$.
> - $\operatorname{rg}([A \mid \vec{b}]) = 3$ per ogni $k \in \mathbb{R}$: anche per $k = -1$ la terza riga è $(0, 0, 0 \mid -\frac{1}{2})$, non nulla.
>
> **Compatibilità.** Se $k \neq -1$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3 = n$, esiste un'unica soluzione. Se $k = -1$: incompatibile, perché la terza equazione diventa $0 = -\frac{1}{2}$.
>
> **La soluzione per $k = 1$** (<span class="src">p. 12</span>), con la riduzione all'indietro. Per $k = 1$ la matrice è
> $$
> \left[\begin{array}{ccc|c} -1 & 1 & -3 & 2 \\ 0 & 2 & -14 & -5 \\ 0 & 0 & -1 & -\frac{1}{2} \end{array}\right] \xrightarrow{D_1(-1),\ D_2(\frac{1}{2}),\ D_3(-1)} \left[\begin{array}{ccc|c} 1 & -1 & 3 & -2 \\ 0 & 1 & -7 & -\frac{5}{2} \\ 0 & 0 & 1 & \frac{1}{2} \end{array}\right]
> $$
> $E_{12}(1)$: $R_1 + R_2 = (1, 0, -4 \mid -\frac{9}{2})$. Poi $E_{13}(4)$: $R_1 + 4R_3 = (1, 0, 0 \mid -\frac{5}{2})$ ed $E_{23}(7)$: $R_2 + 7R_3 = (0, 1, 0 \mid 1)$.
> $$
> (x, y, z) = \left(-\frac{5}{2},\ 1,\ \frac{1}{2}\right)
> $$
> Verifica nel sistema di partenza con $k = 1$: $-5 - 1 - 1 = -7$; $-5 - 4 = -9$; $\frac{5}{2} + 1 - \frac{3}{2} = 2$; $-\frac{5}{2} + 1 - \frac{11}{2} = -7$.
>
> **In più (non fatto a lezione), per ogni $k \neq -1$.** La stessa risalita con $k$ dentro dà
> $$
> z = \frac{1}{k+1}, \qquad y = \frac{2(2-k)}{k+1}, \qquad x = -\frac{4k+1}{k+1}
> $$
> e per $k = 1$ ritrova $\left(-\frac{5}{2}, 1, \frac{1}{2}\right)$. Il denominatore $k + 1$ è lo stesso fattore del pivot: per $k = -1$ la formula perde senso esattamente dove il sistema diventa incompatibile.

### Esercitazione 2 del tutor (29/9)

**Es. 3** (<span class="src">p. 5-7</span>). Dato il sistema
$$
\begin{cases} 3x + 2ky + 2z = k \\ x + y + z = k \\ 2x + y + z = 0 \end{cases} \qquad (k \in \mathbb{R})
$$
i) per quali $k$ è compatibile? ii) Trovare tutte le soluzioni per ogni $k$.

> [!example]- Soluzione
> **Riduzione.** $S_{13}$ porta in alto la riga senza parametro.
> $$
> \left[\begin{array}{ccc|c} 2 & 1 & 1 & 0 \\ 1 & 1 & 1 & k \\ 3 & 2k & 2 & k \end{array}\right] \xrightarrow[E_{31}(-\frac{3}{2})]{E_{21}(-\frac{1}{2})} \left[\begin{array}{ccc|c} 2 & 1 & 1 & 0 \\ 0 & \frac{1}{2} & \frac{1}{2} & k \\ 0 & \frac{4k-3}{2} & \frac{1}{2} & k \end{array}\right]
> $$
> ($2k - \frac{3}{2} = \frac{4k-3}{2}$, e $2 - \frac{3}{2} = \frac{1}{2}$.) Per azzerare $\frac{4k-3}{2}$ col pivot $\frac{1}{2}$ serve $E_{32}(-(4k-3))$:
> - terzo elemento: $\frac{1}{2} - (4k-3)\frac{1}{2} = \frac{4 - 4k}{2} = 2(1-k)$;
> - termine noto: $k - k(4k-3) = k(1 - 4k + 3) = 4k(1-k)$.
> $$
> \left[\begin{array}{ccc|c} 2 & 1 & 1 & 0 \\ 0 & \frac{1}{2} & \frac{1}{2} & k \\ 0 & 0 & 2(1-k) & 4k(1-k) \end{array}\right]
> $$
>
> **i) Ranghi.** Se $k \neq 1$: $\operatorname{rg}(A) = 3 = \operatorname{rg}([A \mid \vec{b}])$. Se $k = 1$: la terza riga è tutta nulla, $\operatorname{rg}(A) = 2 = \operatorname{rg}([A \mid \vec{b}])$. In entrambi i casi i ranghi sono uguali: compatibile **per ogni** $k$. Unica soluzione per $k \neq 1$ ($\operatorname{rg} = n = 3$), infinite per $k = 1$.
>
> **ii) $k = 1$.** Si cancella la riga nulla; $D_1(\frac{1}{2})$, $D_2(2)$, poi $E_{12}(-\frac{1}{2})$:
> $$
> \left[\begin{array}{ccc|c} 1 & \frac{1}{2} & \frac{1}{2} & 0 \\ 0 & 1 & 1 & 2 \end{array}\right] \to \left[\begin{array}{ccc|c} 1 & 0 & 0 & -1 \\ 0 & 1 & 1 & 2 \end{array}\right] \qquad \begin{cases} x = -1 \\ y = 2 - z \end{cases} \quad z \in \mathbb{R}
> $$
>
> **ii) $k \neq 1$.** Si può dividere per $2(1-k)$ proprio perché $k \neq 1$. $D_1(\frac{1}{2})$, $D_2(2)$, $D_3\!\left(\frac{1}{2(1-k)}\right)$:
> $$
> \left[\begin{array}{ccc|c} 1 & \frac{1}{2} & \frac{1}{2} & 0 \\ 0 & 1 & 1 & 2k \\ 0 & 0 & 1 & 2k \end{array}\right] \xrightarrow{E_{12}(-\frac{1}{2})} \left[\begin{array}{ccc|c} 1 & 0 & 0 & -k \\ 0 & 1 & 1 & 2k \\ 0 & 0 & 1 & 2k \end{array}\right] \xrightarrow{E_{23}(-1)} \left[\begin{array}{ccc|c} 1 & 0 & 0 & -k \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 2k \end{array}\right]
> $$
> $$
> (x, y, z) = (-k,\ 0,\ 2k)
> $$
> Verifica: $-3k + 0 + 4k = k$; $-k + 0 + 2k = k$; $-2k + 0 + 2k = 0$.

**Es. 4** (<span class="src">p. 7-9</span>). Dato il sistema
$$
\begin{cases} x + (a-1)y + (2-a)z = a + 5 \\ x + ay + 2z = 4 \\ x + (a-2)y + (2-2a^2)z = 6 \end{cases} \qquad (a \in \mathbb{R})
$$
i) per quali $a$ è compatibile? ii) Trovare tutte le soluzioni, ove possibile.

> [!example]- Soluzione
> **Riduzione.** $S_{12}$ mette in alto la riga più semplice. Poi $E_{21}(-1)$ ed $E_{31}(-1)$:
> $$
> \left[\begin{array}{ccc|c} 1 & a & 2 & 4 \\ 1 & a-1 & 2-a & a+5 \\ 1 & a-2 & 2-2a^2 & 6 \end{array}\right] \to \left[\begin{array}{ccc|c} 1 & a & 2 & 4 \\ 0 & -1 & -a & a+1 \\ 0 & -2 & -2a^2 & 2 \end{array}\right]
> $$
> $E_{32}(-2)$: $R_3 - 2R_2 = (0,\ 0,\ -2a^2 + 2a \mid 2 - 2a - 2) = (0, 0, 2a(1-a) \mid -2a)$.
> $$
> \left[\begin{array}{ccc|c} 1 & a & 2 & 4 \\ 0 & -1 & -a & a+1 \\ 0 & 0 & 2a(1-a) & -2a \end{array}\right]
> $$
>
> **i) Ranghi.** Il pivot $2a(1-a)$ si annulla per $a = 0$ e $a = 1$.
> - $a \neq 0, 1$: $\operatorname{rg}(A) = 3 = \operatorname{rg}([A \mid \vec{b}])$, unica soluzione.
> - $a = 0$: terza riga $(0, 0, 0 \mid 0)$, $\operatorname{rg}(A) = 2 = \operatorname{rg}([A \mid \vec{b}])$, infinite soluzioni.
> - $a = 1$: terza riga $(0, 0, 0 \mid -2)$, $\operatorname{rg}(A) = 2$ ma $\operatorname{rg}([A \mid \vec{b}]) = 3$: **incompatibile**.
>
> Compatibile se e solo se $a \neq 1$. (Nella scansione la terza riga della tabella di $\operatorname{rg}(A)$ sembra dire “$2$ se $a = 2$": è $a = 1$, come si vede dal fattore $1 - a$.)
>
> **ii) $a = 0$.** La matrice diventa $\left[\begin{array}{ccc|c} 1 & 0 & 2 & 4 \\ 0 & -1 & 0 & 1 \end{array}\right]$ (riga nulla cancellata); $D_2(-1)$ dà $y = -1$. La colonna di $z$ è senza pivot:
> $$
> \begin{cases} x = 4 - 2z \\ y = -1 \end{cases} \qquad z \in \mathbb{R}
> $$
>
> **ii) $a \neq 0, 1$.** $E_{12}(a)$: $R_1 + aR_2 = (1,\ 0,\ 2 - a^2 \mid 4 + a^2 + a)$. Poi $D_2(-1)$ e $D_3\!\left(\frac{1}{2a(1-a)}\right)$, lecito perché $a \neq 0, 1$:
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 2-a^2 & a^2+a+4 \\ 0 & 1 & a & -(a+1) \\ 0 & 0 & 1 & -\frac{1}{1-a} \end{array}\right]
> $$
> $E_{23}(-a)$: $y = -(a+1) + \frac{a}{1-a} = \frac{-(1-a^2) + a}{1-a} = \frac{a^2 + a - 1}{1-a}$. $E_{13}(-(2-a^2))$: $x = a^2 + a + 4 + \frac{2-a^2}{1-a} = \frac{(1-a)(a^2+a+4) + 2 - a^2}{1-a} = \frac{-a^3 - a^2 - 3a + 6}{1-a}$.
> $$
> x = \frac{-a^3 - a^2 - 3a + 6}{1-a}, \qquad y = \frac{a^2 + a - 1}{1-a}, \qquad z = -\frac{1}{1-a}
> $$
> Verifica con $a = 2$: $(x, y, z) = (12, -5, 1)$. Prima: $12 - 5 + 0 = 7 = a + 5$; seconda: $12 - 10 + 2 = 4$; terza: $12 + 0 - 6 = 6$.

## Esercizi tipo esame

**Esercizio 1.** Determinare il rango di
$$
C(t) = \begin{pmatrix} 1 & 2 & 1 & t \\ 2 & 4 & t+1 & 2t \\ 1 & 2 & 1 & t^2 \end{pmatrix}
$$
al variare di $t \in \mathbb{R}$.

> [!example]- Soluzione
> $E_{21}(-2)$: $R_2 - 2R_1 = (0, 0, t - 1, 0)$. $E_{31}(-1)$: $R_3 - R_1 = (0, 0, 0, t^2 - t)$.
> $$
> \begin{pmatrix} 1 & 2 & 1 & t \\ 0 & 0 & t-1 & 0 \\ 0 & 0 & 0 & t(t-1) \end{pmatrix}
> $$
> Gli elementi che possono fare da pivot sono $t - 1$ (colonna 3) e $t(t-1)$ (colonna 4). La colonna 2 non ha mai pivot.
> - $t \neq 0, 1$: tre pivot, $1$, $t - 1$, $t(t-1)$. **Rango 3**.
> - $t = 0$: la seconda riga è $(0, 0, -1, 0)$, la terza è nulla. Due pivot: **rango 2**.
> - $t = 1$: seconda e terza riga nulle. Un pivot: **rango 1** (le tre righe sono tutte $(1, 2, 1, 1)$).
>
> Controllo con $t = 0$: $C(0)$ ha righe $(1,2,1,0)$, $(2,4,1,0)$, $(1,2,1,0)$; la terza ripete la prima, la seconda no. Rango 2.

**Esercizio 2.** Senza calcolare le soluzioni, dire quante soluzioni hanno i due sistemi, che differiscono solo nell'ultimo termine noto; poi risolvere quello compatibile.
$$
\text{(a)} \begin{cases} x + 2y - z = 1 \\ 2x + 4y + z = 5 \\ 3x + 6y = 6 \end{cases} \qquad \text{(b)} \begin{cases} x + 2y - z = 1 \\ 2x + 4y + z = 5 \\ 3x + 6y = 7 \end{cases}
$$

> [!example]- Soluzione
> Con $c = 6$ o $c = 7$ come ultimo termine noto: $E_{21}(-2)$ dà $(0, 0, 3 \mid 3)$, $E_{31}(-3)$ dà $(0, 0, 3 \mid c - 3)$, poi $E_{32}(-1)$ dà $(0, 0, 0 \mid c - 6)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 0 & 3 & 3 \\ 0 & 0 & 0 & c - 6 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 2$ in entrambi i casi.
> - (a), $c = 6$: ultima riga nulla, $\operatorname{rg}([A \mid \vec{b}]) = 2 = \operatorname{rg}(A) < 3$. **Infinite soluzioni**, $3 - 2 = 1$ parametro.
> - (b), $c = 7$: ultima riga $(0, 0, 0 \mid 1)$, $\operatorname{rg}([A \mid \vec{b}]) = 3 \neq 2$. **Incompatibile**.
>
> Soluzioni di (a): $3z = 3$ dà $z = 1$; la colonna di $y$ è senza pivot, $y = t$; dalla prima $x = 1 - 2t + 1 = 2 - 2t$.
> $$
> (x, y, z) = (2 - 2t,\ t,\ 1), \qquad t \in \mathbb{R}
> $$
> Verifica: $2 - 2t + 2t - 1 = 1$; $4 - 4t + 4t + 1 = 5$; $6 - 6t + 6t = 6$.

**Esercizio 3.** Dato il sistema
$$
\begin{cases} x + y + kz = 1 \\ x + ky + z = 1 \\ kx + y + z = 1 \end{cases} \qquad (k \in \mathbb{R})
$$
a) stabilire per quali $k$ è compatibile e per quali ha infinite soluzioni; b) trovare le soluzioni per i valori di $k$ che lo rendono compatibile.

> [!example]- Soluzione
> **a)** $E_{21}(-1)$: $R_2 - R_1 = (0,\ k - 1,\ 1 - k \mid 0)$. $E_{31}(-k)$: $R_3 - kR_1 = (0,\ 1 - k,\ 1 - k^2 \mid 1 - k)$. Poi $E_{32}(1)$: $R_3 + R_2 = (0,\ 0,\ (1-k) + (1-k^2) \mid 1 - k)$, e $(1 - k) + (1 - k)(1 + k) = (1 - k)(2 + k)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & k & 1 \\ 0 & k-1 & 1-k & 0 \\ 0 & 0 & (1-k)(2+k) & 1-k \end{array}\right]
> $$
> Valori critici: $k = 1$ (si annullano due pivot) e $k = -2$.
> - $k \neq 1, -2$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3$, **unica soluzione**.
> - $k = 1$: seconda e terza riga nulle. $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 1 < 3$, **infinite soluzioni** con due parametri.
> - $k = -2$: terza riga $(0, 0, 0 \mid 3)$. $\operatorname{rg}(A) = 2$, $\operatorname{rg}([A \mid \vec{b}]) = 3$: **incompatibile**.
>
> Compatibile per $k \neq -2$; infinite soluzioni solo per $k = 1$.
>
> **b)** $k = 1$: resta $x + y + z = 1$. Colonne di $y$ e $z$ senza pivot: $y = t$, $z = s$, $x = 1 - t - s$.
>
> $k \neq 1, -2$: dalla terza $z = \frac{1-k}{(1-k)(2+k)} = \frac{1}{k+2}$ (si semplifica perché $k \neq 1$). Dalla seconda, divisa per $k - 1 \neq 0$: $y - z = 0$, quindi $y = \frac{1}{k+2}$. Dalla prima: $x = 1 - \frac{1}{k+2} - \frac{k}{k+2} = \frac{1}{k+2}$.
> $$
> (x, y, z) = \left(\frac{1}{k+2},\ \frac{1}{k+2},\ \frac{1}{k+2}\right)
> $$
> Verifica con $k = 0$: $\left(\frac{1}{2}, \frac{1}{2}, \frac{1}{2}\right)$ soddisfa $x + y = 1$, $x + z = 1$, $y + z = 1$. Per simmetria ogni equazione dà $(k + 2) \cdot \frac{1}{k+2} = 1$.

## Errori tipici

- Confrontare il rango con il numero di **equazioni** invece che di **incognite**: nell'esempio 4 della prof ci sono 4 equazioni ma $n = 3$.
- Calcolare $\operatorname{rg}([A \mid \vec{b}])$ e dimenticare $\operatorname{rg}(A)$, o viceversa: servono tutti e due, e si leggono dalla stessa riduzione.
- Dividere per un'espressione col parametro (es. $D_3\!\left(\frac{1}{2(1-k)}\right)$) senza aver escluso il valore che la annulla.
- Trattare il caso critico usando la soluzione generale: per $k = 1$ la formula non vale, si risostituisce $k = 1$ nella matrice a scalini.
- Fermarsi a “$\operatorname{rg}(A) = 2$ per $k = -1$" senza guardare l'ultima colonna: è lì che si decide fra infinite soluzioni e incompatibile.
- Dire "due soluzioni" o "un numero finito di soluzioni": per un sistema lineare sono $0$, $1$ o infinite.
- Non fattorizzare: $-2a^2 + 2a$ va scritto $2a(1-a)$, altrimenti si perde uno dei due valori critici.

## Domande

- Come si definisce il rango di una matrice? Perché è ben definito?

- Perché il rango non può superare né il numero di righe né il numero di colonne?

- Enuncia il teorema di Rouché-Capelli, con i due casi finali.

- Perché $\operatorname{rg}([A \mid \vec{b}])$ può essere al massimo $\operatorname{rg}(A) + 1$?

- Cosa significa, sulla matrice a scalini, che $\operatorname{rg}(A) < \operatorname{rg}([A \mid \vec{b}])$?

- Da quanti parametri dipendono le soluzioni di un sistema compatibile con $n$ incognite e rango $r$?

- Può un sistema lineare avere esattamente due soluzioni? Perché?

- Quali sono i passi per discutere un sistema lineare con un parametro?

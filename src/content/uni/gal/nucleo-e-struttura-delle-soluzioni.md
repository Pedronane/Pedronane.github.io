---
title: Nucleo e struttura delle soluzioni
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-10-05
lezioni: []
ordine: 8
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L5, lun 5/10 (3 ore), parte centrale. Fonte: quaderno di Pietro p. 56-59 (gli appunti scritti della prof sul capitolo 3 non sono ancora su Moodle); dispensa Postinghel, sezione 3.3: <span class="src">p. 76-77</span> (forma matriciale, sistemi omogenei), <span class="src">p. 78</span> (nucleo, nullità, Prop. 10), <span class="src">p. 79</span> (es. 43). Si appoggia su [Matrici e operazioni](/uni/gal/matrici-e-operazioni/) (prodotto righe per colonne) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/). Il caso con $A$ quadrata invertibile, $\vec{x} = A^{-1}\vec{b}$, è in [Matrici invertibili](/uni/gal/matrici-invertibili/).

> [!abstract] Per l'esame
> - **Saper enunciare**: forma matriciale $A\vec{x} = \vec{b}$ con l'ordine di ogni matrice; sistema omogeneo associato; nucleo $N(A)$ e nullità $\operatorname{null}(A)$; $\operatorname{null}(A) + \operatorname{rg}(A) = n$; il teorema sulla struttura delle soluzioni, nei due casi $\vec{b} = \vec{0}$ e $\vec{b} \neq \vec{0}$.
> - **Saper dimostrare**: che le soluzioni di un omogeneo sono chiuse per combinazioni lineari; che le soluzioni di $A\vec{x} = \vec{b}$ sono **tutte e sole** le $\vec{x}_0 + \vec{v}$ (le due direzioni).
> - **Saper fare**: scrivere le soluzioni di un sistema come soluzione particolare più combinazione di soluzioni dell'omogeneo; calcolare la nullità dal rango.
> - **Dove esce**: domande 3.5 e 3.6, esercizi 3.11 e 3.12 del [foglio 3](/uni/gal/foglio-3-svolto/). Il nucleo torna nella seconda parte del corso (funzioni lineari, teorema nullità più rango).

**L'idea.** Finora un sistema con infinite soluzioni si scriveva “$x = 1 - 2w$, $y = -3z$". Qui si guarda **com'è fatto** quell'insieme: è una soluzione qualunque, spostata di tutte le soluzioni del sistema omogeneo. In geometria è la stessa cosa di una retta che non passa per l'origine: un punto della retta più tutti i multipli del vettore direzionale.

```
   soluzioni di Ax = b   =   x0   +   N(A)
                             |        |
              una soluzione qualunque  tutte le soluzioni di Ax = 0
                                       (n - rg(A) parametri liberi)
```

## Definizioni

### Il sistema in forma matriciale

La prof (quaderno p. 56; dispensa <span class="src">p. 76-77</span>): il sistema
$$
(\ast) \quad \begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ \quad \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}
$$
si associa a tre matrici:
- $A = [a_{ij}] \in M_{m \times n}(\mathbb{R})$, la **matrice dei coefficienti**;
- $\vec{b}$, la **matrice colonna dei termini noti**, $m \times 1$;
- $\vec{x}$, la **matrice colonna delle incognite**, $n \times 1$.

Il sistema $(\ast)$ si può scrivere in **forma matriciale**
$$
A\vec{x} = \vec{b}
$$
**Perché funziona.** $A$ è $m \times n$ e $\vec{x}$ è $n \times 1$: il prodotto esiste ed è $m \times 1$, come $\vec{b}$. La sua riga $i$ è "riga $i$ di $A$ per la colonna $\vec{x}$", cioè $a_{i1}x_1 + \cdots + a_{in}x_n$: il primo membro dell'equazione $i$. Nel quaderno la prof lo mostra cerchiando in verde la prima riga di $A$ con $x_1$ e il primo termine noto in azzurro. Uguagliare due matrici colonna vuol dire uguagliare riga per riga, cioè scrivere tutte le $m$ equazioni.

Una **soluzione** è una colonna $\vec{v} \in M_{n \times 1}(\mathbb{R})$ con $A\vec{v} = \vec{b}$. Un sistema è **omogeneo** se $\vec{b} = \vec{0}$, cioè se è della forma $A\vec{x} = \vec{0}$. Il **sistema omogeneo associato** ad $A\vec{x} = \vec{b}$ è $A\vec{x} = \vec{0}$: stessa $A$, termini noti a zero.

Esempio: $\begin{cases} x + 2y = 1 \\ y - z = 2 \end{cases}$ si scrive $\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$, con $A$ $2 \times 3$, $\vec{x}$ $3 \times 1$, $\vec{b}$ $2 \times 1$. Il coefficiente $0$ di $z$ nella prima equazione va scritto.

### Nucleo e nullità

La prof (quaderno p. 58; dispensa <span class="src">Def. 36</span>): dato $A \in M_{m \times n}(\mathbb{R})$, il **nucleo** di $A$ è l'insieme delle soluzioni del sistema lineare omogeneo $A\vec{x} = \vec{0}$, la cui matrice dei coefficienti è $A$. Si indica con $N(A)$.

Si chiama **nullità** di $A$, $\operatorname{null}(A)$, il numero delle colonne di $\operatorname{rref}(A)$ che **non** contengono pivot, cioè il numero di variabili libere da cui dipendono le soluzioni.

**Perché.** $N(A)$ è un insieme di colonne $n \times 1$, mai vuoto: contiene sempre $\vec{0}$. La nullità misura "quanto è grande": $\operatorname{null}(A) = 0$ vuol dire che l'omogeneo ha solo la soluzione nulla; $\operatorname{null}(A) = 2$ vuol dire che le soluzioni dipendono da due parametri liberi.

Esempio: $A = \begin{pmatrix} 1 & 1 & 1 \end{pmatrix}$ ($1 \times 3$). $N(A)$ sono le $(x, y, z)$ con $x + y + z = 0$: un piano per l'origine. Una colonna con pivot, due senza: $\operatorname{null}(A) = 2$.

## Enunciati

### Osservazione 1: le soluzioni di un omogeneo sono chiuse

La prof (quaderno p. 57; dispensa <span class="src">Prop. 8</span>): sia $A\vec{x} = \vec{0}$ un sistema lineare omogeneo e siano $\vec{v}$, $\vec{w}$ due sue soluzioni, $A\vec{v} = \vec{0}$ e $A\vec{w} = \vec{0}$. Presi $\lambda, \mu \in \mathbb{R}$, anche la **combinazione lineare** $\lambda\vec{v} + \mu\vec{w}$ è soluzione di $A\vec{x} = \vec{0}$.

In particolare ($\lambda = \mu = 1$, oppure $\mu = 0$) l'insieme delle soluzioni è **chiuso rispetto alla somma e al prodotto per uno scalare**.

> [!note]- Dimostrazione (della prof)
> Per le proprietà delle operazioni ([Matrici e operazioni](/uni/gal/matrici-e-operazioni/): distributiva e scalari),
> $$
> A(\lambda\vec{v} + \mu\vec{w}) = A(\lambda\vec{v}) + A(\mu\vec{w}) = \lambda(A\vec{v}) + \mu(A\vec{w}) = \lambda\vec{0} + \mu\vec{0} = \vec{0}
> $$
> Nel quaderno $A\vec{v}$ e $A\vec{w}$ sono incorniciati con “$= 0$" sopra: è lì che si usa l'ipotesi. $\square$

**Il non omogeneo non è chiuso** (dispensa, <span class="src">Oss. 12</span>). Se $A\vec{x}_1 = A\vec{x}_2 = \vec{b} \neq \vec{0}$, allora $A(\vec{x}_1 + \vec{x}_2) = 2\vec{b} \neq \vec{b}$, e $A(0 \cdot \vec{x}_1) = \vec{0} \neq \vec{b}$. Già il vettore nullo non è soluzione.

### Nullità più rango

La prof (quaderno p. 58, osservazione; dispensa <span class="src">Prop. 9</span>): per $A \in M_{m \times n}(\mathbb{R})$
$$
\operatorname{null}(A) + \operatorname{rg}(A) = n \qquad (n = \text{numero di colonne})
$$

**Perché.** Ogni colonna di $\operatorname{rref}(A)$ o contiene un pivot o non lo contiene. Le prime sono $\operatorname{rg}(A)$ (definizione di rango, [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/)), le seconde $\operatorname{null}(A)$. Insieme fanno tutte le $n$ colonne. È la stessa cosa del “$n - \operatorname{rg}(A)$ parametri liberi" di Rouché-Capelli, detta per l'omogeneo. Nella seconda parte del corso tornerà come **teorema nullità più rango**.

### Teorema: struttura dell'insieme delle soluzioni

La prof (quaderno p. 58; dispensa <span class="src">Prop. 10</span>):

> [!abstract] Teorema
> Sia $A\vec{x} = \vec{b}$ un sistema lineare **compatibile** (cioè che ammette soluzioni).
> 1. Se $\vec{b} = \vec{0}$, l'insieme delle soluzioni è chiuso rispetto alla somma di elementi e al prodotto per scalare (osservazione 1).
> 2. Se $\vec{b} \neq \vec{0}$ e $\vec{x}_0$ è una soluzione di $A\vec{x} = \vec{b}$, allora tutte le soluzioni di $A\vec{x} = \vec{b}$ sono della forma $\vec{x}_0 + \vec{v}$, dove $\vec{v}$ è una soluzione del sistema omogeneo associato $A\vec{x} = \vec{0}$.

Ipotesi: il sistema ha almeno una soluzione $\vec{x}_0$ (se è incompatibile non c'è niente da descrivere). Tesi del punto 2, scritta come uguaglianza di insiemi:
$$
\{\text{soluzioni di } A\vec{x} = \vec{b}\} = \{\vec{x}_0 + \vec{v} : \vec{v} \in N(A)\}
$$
"Tutte e sole": ogni $\vec{x}_0 + \vec{v}$ è soluzione, e ogni soluzione si scrive così.

> [!note]- Dimostrazione del punto 2 (le due inclusioni)
> **$\vec{x}_0 + \vec{v}$ è soluzione** (è la parte scritta a lezione, quaderno p. 59). Se $A\vec{v} = \vec{0}$:
> $$
> A(\vec{x}_0 + \vec{v}) = A\vec{x}_0 + A\vec{v} = \vec{b} + \vec{0} = \vec{b}
> $$
> **Ogni soluzione è di quella forma** (dispensa, <span class="src">p. 78</span>; nel quaderno manca, ed è la metà che fa dire "tutte"). Sia $\vec{w}$ una soluzione qualunque, $A\vec{w} = \vec{b}$. Pongo $\vec{v} = \vec{w} - \vec{x}_0$. Allora
> $$
> A\vec{v} = A\vec{w} - A\vec{x}_0 = \vec{b} - \vec{b} = \vec{0}
> $$
> quindi $\vec{v} \in N(A)$ e $\vec{w} = \vec{x}_0 + \vec{v}$. La differenza di due soluzioni risolve l'omogeneo. $\square$
>
> La dimostrazione non usa mai $\vec{b} \neq \vec{0}$: il punto 2 vale anche per gli omogenei, con $\vec{x}_0 = \vec{0}$, e dice solo $N(A) = N(A)$.

**Conseguenze.**
- Quale soluzione particolare $\vec{x}_0$ si sceglie non conta: un'altra scelta dà lo stesso insieme scritto in un altro modo.
- Un sistema compatibile ha **soluzione unica** se e solo se $N(A) = \{\vec{0}\}$, cioè $\operatorname{null}(A) = 0$, cioè $\operatorname{rg}(A) = n$. È il caso 1 di Rouché-Capelli visto da un'altra parte.
- Le soluzioni di $A\vec{x} = \vec{b}$ dipendono da $\operatorname{null}(A)$ parametri, gli stessi del nucleo.

## Metodo

### Scrivere le soluzioni come $\vec{x}_0 + N(A)$

È il procedimento dell'esempio della prof (quaderno p. 59).

1. Riduci $[A \mid \vec{b}]$ fino a $\operatorname{rref}$. Controlla con Rouché-Capelli che sia compatibile.
2. Individua le colonne senza pivot: sono le variabili libere, e il loro numero è $\operatorname{null}(A) = n - \operatorname{rg}(A)$.
3. Scrivi le variabili dei pivot in funzione delle libere e metti tutto in una colonna.
4. Spezza la colonna: la parte senza parametri è $\vec{x}_0$ (la soluzione con le variabili libere a $0$); ogni parametro raccoglie una colonna, che è una soluzione dell'omogeneo.
5. Verifica: $\vec{x}_0$ nel sistema, ogni colonna del nucleo nell'omogeneo (termini noti a zero).

### Riconoscere una soluzione

Se conosci $\vec{x}_0$ e il nucleo, $\vec{w}$ è soluzione se e solo se $\vec{w} - \vec{x}_0 \in N(A)$. Non serve risolvere di nuovo.

## Esempi svolti a lezione

> [!example]- Prof, 5/10, quaderno p. 59: soluzioni come $\vec{x}_0 + N(A)$
> $$
> [A \mid \vec{b}] = \left[\begin{array}{cccc|c} 1 & 0 & 0 & 2 & 1 \\ 1 & 1 & 3 & 2 & 1 \\ 2 & 1 & 3 & 4 & 2 \end{array}\right]
> $$
> Incognite $x, y, z, w$.
>
> **Riduzione.** $E_{21}(-1)$: $R_2 - R_1 = (0, 1, 3, 0 \mid 0)$. $E_{31}(-2)$: $R_3 - 2R_1 = (0, 1, 3, 0 \mid 0)$. $E_{32}(-1)$: la terza riga si annulla.
> $$
> \left[\begin{array}{cccc|c} 1 & 0 & 0 & 2 & 1 \\ 0 & 1 & 3 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right]
> $$
> È già ridotta per righe. Pivot nelle colonne di $x$ e $y$.
>
> **Ranghi.** $\operatorname{rg}(A) = 2 = \operatorname{rg}([A \mid \vec{b}])$, compatibile. $\operatorname{null}(A) = 2$ (colonne di $z$ e $w$), e infatti $2 + 2 = 4$ colonne.
>
> **Soluzioni.** $x + 2w = 1$ e $y + 3z = 0$, cioè $x = 1 - 2w$, $y = -3z$: $x$ e $y$ scritte in funzione di $z$ e $w$.
> $$
> \begin{pmatrix} x \\ y \\ z \\ w \end{pmatrix} = \begin{pmatrix} 1 - 2w \\ -3z \\ z \\ w \end{pmatrix} = \underbrace{\begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}}_{\vec{x}_0} + z\begin{pmatrix} 0 \\ -3 \\ 1 \\ 0 \end{pmatrix} + w\begin{pmatrix} -2 \\ 0 \\ 0 \\ 1 \end{pmatrix}, \qquad z, w \in \mathbb{R}
> $$
> Nel quaderno la prof colora: in viola i numeri senza parametro (diventano $\vec{x}_0$), in arancione i termini con $z$, in verde quelli con $w$. Le due colonne di $z$ e $w$ sono soluzioni di $A\vec{x} = \vec{0}$.
>
> **Verifica.** $\vec{x}_0 = (1, 0, 0, 0)$: $1 = 1$, $1 = 1$, $2 = 2$. $(0, -3, 1, 0)$ nell'omogeneo: $0$; $-3 + 3 = 0$; $-3 + 3 = 0$. $(-2, 0, 0, 1)$: $-2 + 2 = 0$; $-2 + 2 = 0$; $-4 + 4 = 0$.

Un altro esempio dello stesso tipo, dalla dispensa (<span class="src">es. 43</span>), è svolto nella domanda 3.5 del [foglio 3](/uni/gal/foglio-3-svolto/); l'esercizio 3.11 dello stesso foglio è identico nella forma.

## Esercizi tipo esame

**Esercizio 1.** Risolvere il sistema
$$
\begin{cases} x + 2y + z + w = 2 \\ 2x + 4y + 3z + w = 5 \\ -x - 2y + z - 3w = 0 \end{cases}
$$
scrivendo l'insieme delle soluzioni come somma di una soluzione particolare e delle soluzioni del sistema omogeneo associato. Quanto valgono $\operatorname{rg}(A)$ e $\operatorname{null}(A)$?

> [!example]- Soluzione
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 1 & 1 & 2 \\ 2 & 4 & 3 & 1 & 5 \\ -1 & -2 & 1 & -3 & 0 \end{array}\right]
> $$
> $E_{21}(-2)$: $(0, 0, 1, -1 \mid 1)$. $E_{31}(1)$: $(0, 0, 2, -2 \mid 2)$. $E_{32}(-2)$: la terza riga si annulla.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 1 & 1 & 2 \\ 0 & 0 & 1 & -1 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{E_{12}(-1)} \left[\begin{array}{cccc|c} 1 & 2 & 0 & 2 & 1 \\ 0 & 0 & 1 & -1 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right]
> $$
> Pivot nelle colonne di $x$ e $z$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 2$, compatibile; $\operatorname{null}(A) = 4 - 2 = 2$, variabili libere $y$ e $w$. La colonna di $y$ è senza pivot anche se $y$ compare nella prima equazione: dopo $E_{21}(-2)$ il $4$ diventa $0$.
>
> $x = 1 - 2y - 2w$, $z = 1 + w$:
> $$
> \begin{pmatrix} x \\ y \\ z \\ w \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 1 \\ 0 \end{pmatrix} + y\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + w\begin{pmatrix} -2 \\ 0 \\ 1 \\ 1 \end{pmatrix}, \qquad y, w \in \mathbb{R}
> $$
> **Verifica.** $(1, 0, 1, 0)$: $1 + 1 = 2$; $2 + 3 = 5$; $-1 + 1 = 0$. $(-2, 1, 0, 0)$ nell'omogeneo: $-2 + 2 = 0$; $-4 + 4 = 0$; $2 - 2 = 0$. $(-2, 0, 1, 1)$: $-2 + 1 + 1 = 0$; $-4 + 3 + 1 = 0$; $2 + 1 - 3 = 0$.

**Esercizio 2.** Siano $\vec{x}_1$ e $\vec{x}_2$ due soluzioni distinte di $A\vec{x} = \vec{b}$, con $\vec{b} \neq \vec{0}$. Quali fra le seguenti sono soluzioni di $A\vec{x} = \vec{b}$, quali di $A\vec{x} = \vec{0}$, quali di nessuno dei due?

- a) $\vec{x}_1 + \vec{x}_2$
- b) $\vec{x}_1 - \vec{x}_2$
- c) $3\vec{x}_1 - 2\vec{x}_2$
- d) $\frac{1}{2}(\vec{x}_1 + \vec{x}_2)$

> [!example]- Soluzione
> Per la distributiva, $A(\alpha\vec{x}_1 + \beta\vec{x}_2) = \alpha A\vec{x}_1 + \beta A\vec{x}_2 = (\alpha + \beta)\vec{b}$. Conta solo la somma dei coefficienti: se vale $1$ si ottiene $\vec{b}$, se vale $0$ si ottiene $\vec{0}$, altrimenti né l'uno né l'altro (perché $\vec{b} \neq \vec{0}$).
> - a) $1 + 1 = 2$: dà $2\vec{b}$, **nessuno dei due**.
> - b) $1 - 1 = 0$: soluzione dell'**omogeneo**. È la "differenza di due soluzioni" della dimostrazione del teorema.
> - c) $3 - 2 = 1$: soluzione di **$A\vec{x} = \vec{b}$**.
> - d) $\frac{1}{2} + \frac{1}{2} = 1$: soluzione di **$A\vec{x} = \vec{b}$**, il punto medio fra le due.
>
> Il c) letto col teorema: $3\vec{x}_1 - 2\vec{x}_2 = \vec{x}_1 + 2(\vec{x}_1 - \vec{x}_2)$, cioè una soluzione più un elemento del nucleo.

**Esercizio 3.** Sia
$$
A_k = \begin{pmatrix} 1 & k & 1 \\ 1 & 1 & k \\ k & 1 & 1 \end{pmatrix}, \qquad k \in \mathbb{R}
$$
Calcolare $\operatorname{rg}(A_k)$ e $\operatorname{null}(A_k)$ al variare di $k$, e descrivere $N(A_k)$ nei casi in cui non è $\{\vec{0}\}$.

> [!example]- Soluzione
> $E_{21}(-1)$: $R_2 - R_1 = (0,\ 1 - k,\ k - 1)$. $E_{31}(-k)$: $R_3 - kR_1 = (0,\ 1 - k^2,\ 1 - k)$.
>
> $E_{32}(-(1 + k))$: $R_3 - (1 + k)R_2$. Secondo elemento $1 - k^2 - (1 + k)(1 - k) = 0$; terzo $1 - k - (1 + k)(k - 1) = (1 - k) + (1 + k)(1 - k) = (1 - k)(2 + k)$. (Se $k = 0$ il passo $E_{31}$ non serve, se $k = -1$ non serve $E_{32}$: il coefficiente è $0$ e la riga è già quella della formula.)
> $$
> \begin{pmatrix} 1 & k & 1 \\ 0 & 1 - k & k - 1 \\ 0 & 0 & (1 - k)(2 + k) \end{pmatrix}
> $$
> - $k \neq 1, -2$: tre pivot. $\operatorname{rg} = 3$, $\operatorname{null} = 0$, $N(A_k) = \{\vec{0}\}$.
> - $k = 1$: seconda e terza riga nulle. $\operatorname{rg} = 1$, $\operatorname{null} = 2$. Resta $x + y + z = 0$, con $y = s$, $z = t$ libere:
> $$
> N(A_1) = \left\{ s\begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix} + t\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} : s, t \in \mathbb{R} \right\}
> $$
> - $k = -2$: la matrice è $\begin{pmatrix} 1 & -2 & 1 \\ 0 & 3 & -3 \\ 0 & 0 & 0 \end{pmatrix}$. $\operatorname{rg} = 2$, $\operatorname{null} = 1$. Dalla seconda $y = z$, dalla prima $x = 2y - z = z$:
> $$
> N(A_{-2}) = \left\{ t\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} : t \in \mathbb{R} \right\}
> $$
>
> In ogni caso $\operatorname{rg} + \operatorname{null} = 3$. Verifica: $(1, 1, 1)$ in $A_{-2}$ dà $1 - 2 + 1 = 0$ su ogni riga; $(-1, 1, 0)$ e $(-1, 0, 1)$ in $A_1$ danno $0$ perché ogni riga di $A_1$ è $(1, 1, 1)$.

**Esercizio 4.** Di un sistema $A\vec{x} = \vec{b}$ in tre incognite si sa che $\vec{x}_0 = (1, 0, 1)$ è una soluzione e che $N(A) = \{t(1, -1, 0) : t \in \mathbb{R}\}$.

- a) Scrivere tutte le soluzioni.
- b) $(3, -2, 1)$ è soluzione? E $(0, 1, 0)$?
- c) Quanto vale $\operatorname{rg}(A)$?

> [!example]- Soluzione
> **a)** Per il teorema, le soluzioni sono $\vec{x}_0 + \vec{v}$ con $\vec{v} \in N(A)$:
> $$
> \{(1 + t,\ -t,\ 1) : t \in \mathbb{R}\}
> $$
> **b)** $(3, -2, 1) - (1, 0, 1) = (2, -2, 0) = 2(1, -1, 0) \in N(A)$: **sì**, con $t = 2$. Invece $(0, 1, 0) - (1, 0, 1) = (-1, 1, -1)$ non è un multiplo di $(1, -1, 0)$ (la terza componente è $-1$, non $0$): **no**.
>
> **c)** Il nucleo dipende da un parametro, quindi $\operatorname{null}(A) = 1$ e $\operatorname{rg}(A) = 3 - 1 = 2$.

## Errori tipici

- Sbagliare gli ordini nella forma matriciale: $\vec{x}$ ha tante righe quante **incognite** ($n$), $\vec{b}$ tante quante **equazioni** ($m$).
- Dimenticare i coefficienti nulli scrivendo $A$: un'incognita che manca in un'equazione ha coefficiente $0$ in quella riga.
- Dimostrare solo metà del teorema: “$\vec{x}_0 + \vec{v}$ è soluzione" non basta per dire che sono **tutte**. Serve anche "la differenza di due soluzioni sta nel nucleo".
- Dire che le soluzioni di un sistema non omogeneo sono chiuse per somma: $A(\vec{x}_1 + \vec{x}_2) = 2\vec{b}$.
- Contare la nullità sulle righe nulle invece che sulle colonne senza pivot: in una $3 \times 4$ di rango 2 c'è una riga nulla ma la nullità è $2$.
- Prendere come $\vec{x}_0$ una colonna del nucleo, o viceversa: $\vec{x}_0$ si verifica nel sistema con $\vec{b}$, le colonne del nucleo nel sistema con $\vec{0}$.

## Domande

- Come si scrive un sistema in forma matriciale? Che ordine hanno $A$, $\vec{x}$ e $\vec{b}$?

- Cos'è il sistema omogeneo associato ad $A\vec{x} = \vec{b}$?

- Definisci nucleo e nullità di una matrice. Che relazione c'è con il rango?

- Dimostra che una combinazione lineare di soluzioni di un sistema omogeneo è ancora soluzione.

- Enuncia e dimostra il teorema sulla struttura delle soluzioni di un sistema compatibile $A\vec{x} = \vec{b}$.

- Perché le soluzioni di un sistema non omogeneo non sono chiuse rispetto alla somma?

- Quando un sistema compatibile ha soluzione unica, detto con il nucleo?

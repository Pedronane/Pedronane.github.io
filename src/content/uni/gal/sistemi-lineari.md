---
title: Sistemi lineari
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-09-21
lezioni: []
ordine: 4
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Iniziato a lezione dopo la geometria nello spazio. Fonte: appunti della prof <span class="src">Sistemi lineari, p. 1-3</span>; dispensa Postinghel, <span class="src">sezioni 2.1.1-2.1.2</span>. Chiude il capitolo di geometria ([Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/), [Distanze nello spazio](/uni/gal/distanze-nello-spazio/)) e apre la parte algebrica del corso.

> [!info] Dove continua
> Questa nota copre la notazione (L3, 21/9). Il metodo per risolvere, fatto in L4 il 28/9, sta in due note: [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) (operazioni elementari, forma a scalini, riduzione all'indietro) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/) (quante soluzioni ha un sistema). Le matrici come oggetto a sé arrivano in L5 (5/10). Le parti segnate "dalla dispensa" servono a leggere meglio quello che c'è.

> [!abstract] Per l'esame
> - **Saper enunciare**: $\mathbb{R}^n$ e le operazioni componente per componente, sistema lineare di $m$ equazioni in $n$ incognite, soluzione, compatibile, incompatibile, omogeneo, matrice $m \times n$, matrice dei coefficienti, dei termini noti, completa.
> - **Saper fare**: scrivere le tre matrici di un sistema e il loro ordine; ricostruire un sistema dalla matrice completa; verificare se un'ennupla è soluzione; riconoscere un'incompatibilità evidente.
> - **Dove esce**: per ora solo come linguaggio. Ogni intersezione del capitolo di geometria (retta e piano, due rette, tre piani) è un sistema lineare. Il metodo per risolverli è in [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/).

**Da dove arriva.** Nel capitolo di geometria i sistemi lineari sono già comparsi ovunque: due rette sono incidenti se un sistema ha soluzione, una retta in cartesiane è un sistema di due equazioni, il punto d'intersezione fra retta e piano è la soluzione di un sistema. Qui si smette di risolverli a occhio e si costruisce la macchina generale: prima la notazione e le matrici associate, poi l'algoritmo di Gauss-Jordan ([Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/)).

## Definizioni

### Lo spazio delle $n$-uple

La prof: spazio delle ennuple ($n$-uple) di numeri reali,

$$
\mathbb{R}^n = \{\, \vec{a} = (a_1, \ldots, a_n) \mid a_i \in \mathbb{R},\ i = 1, \ldots, n \,\}
$$

Un elemento di $\mathbb{R}^n$ è una **$n$-upla** (o ennupla) ordinata di numeri reali. Esempio della prof: $(1, 2, 3) \in \mathbb{R}^3$ è una terna, la stessa terna di coordinate che si usava in geometria.

L'ordine conta: $(1, 2, 3)$ e $(3, 2, 1)$ sono ennuple diverse. È la differenza fra un'ennupla e un insieme.

**Operazioni.** Per ogni $\vec{a}, \vec{b} \in \mathbb{R}^n$ e ogni $\lambda \in \mathbb{R}$:

$$
\vec{a} + \vec{b} = (a_1 + b_1,\ \ldots,\ a_n + b_n) \qquad \lambda \vec{a} = (\lambda a_1,\ \ldots,\ \lambda a_n)
$$

La prof: "questo generalizza quanto visto per vettori geometrici in coordinate" ([Vettori geometrici](/uni/gal/vettori-geometrici/)). Si lavora **componente per componente**, con un numero qualunque di componenti. La geometria smette di funzionare come disegno oltre $n = 3$, l'algebra no.

### Equazione lineare (dalla dispensa)

La prof passa direttamente al sistema; la dispensa prima definisce la singola equazione, e serve a capire la parola "lineare". Date $n$ incognite reali $x_1, \ldots, x_n$, un'**equazione lineare** è un'equazione in cui ogni termine ha grado $1$:

$$
a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b
$$

I numeri $a_1, \ldots, a_n$ sono i **coefficienti**, $b$ è il **termine noto**.

"Grado $1$" esclude $x_1^2$, $x_1 x_2$, $\sqrt{x_1}$, $\sin x_1$: le incognite compaiono solo moltiplicate per una costante e sommate fra loro. L'equazione cartesiana di un piano, $ax + by + cz + d = 0$, è un'equazione lineare in tre incognite con termine noto $-d$.

### Sistema lineare

**Sistema lineare.** La prof: un sistema di equazioni lineari (o sistema lineare) di $m$ equazioni in $n$ incognite è

$$
(\ast) \quad \begin{cases} a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 \\ a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 \\ \quad \vdots \\ a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n = b_m \end{cases}
$$

Nel doppio indice $a_{ij}$ il **primo** indice è l'equazione (la riga), il **secondo** è l'incognita (la colonna). $m$ ed $n$ sono indipendenti: le equazioni possono essere più o meno delle incognite.

**Soluzione.** Un'ennupla di numeri reali $(t_1, \ldots, t_n)$ che sia soluzione di **tutte** le $m$ equazioni. Una che ne soddisfi solo alcune non conta.

**Compatibile.** Il sistema ammette soluzioni.

**Incompatibile.** Non ne ammette nessuna.

**Omogeneo.** $b_1 = b_2 = \cdots = b_m = 0$, cioè tutti i termini noti sono nulli.

**Sistemi equivalenti (dalla dispensa).** Due sistemi nelle stesse incognite che ammettono **esattamente le stesse soluzioni**. È la nozione su cui si regge il metodo di Gauss: le operazioni elementari trasformano un sistema in uno equivalente più semplice, e le soluzioni non cambiano ([Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/)).

### Matrice

**Matrice.** La prof: dati $m, n \geq 1$ numeri naturali, una **matrice di ordine $m \times n$ a coefficienti reali** è una tabella della forma

$$
A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix} = [a_{ij}]
$$

$A$ ha $m$ righe e $n$ colonne, e $a_{ij}$ è l'elemento sulla **$i$-esima riga** e sulla **$j$-esima colonna**. Nell'ordine $m \times n$ le righe vengono sempre prima: una matrice $2 \times 3$ ha due righe e tre colonne.

### Le tre matrici di un sistema lineare

La prof associa al sistema $(\ast)$ tre matrici.

**Matrice dei coefficienti** $A$, di ordine $m \times n$: contiene tutti e soli i coefficienti $a_{ij}$.

**Matrice dei termini noti** $\vec{b}$, con $m$ righe e $1$ colonna:

$$
\vec{b} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}
$$

**Matrice completa** $[A \mid \vec{b}]$, con $m$ righe e $n+1$ colonne: le due precedenti affiancate.

$$
[A \mid \vec{b}] = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\ a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\ \vdots & \vdots & & \vdots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} & b_m \end{bmatrix}
$$

Il punto di tutta la costruzione: nel sistema i nomi delle incognite non servono a niente, servono solo i numeri e la loro posizione. La matrice completa contiene tutta l'informazione del sistema, e da lì in poi si lavora su di essa. Un'incognita che manca in un'equazione ha coefficiente $0$, e lo $0$ va scritto nella sua colonna.

## Enunciati

### I sistemi omogenei sono sempre compatibili (dalla dispensa)

> [!abstract] Osservazione (dispensa, Osservazione 4)
> Ogni sistema lineare omogeneo è compatibile, perché l'ennupla nulla $(0, \ldots, 0)$ è sempre una soluzione.

Sostituendo zero a ogni incognita, ogni membro sinistro diventa $0$, e i termini noti sono già tutti $0$. Si chiama **soluzione banale**; la domanda interessante su un sistema omogeneo non è se abbia soluzioni, ma se ne abbia altre oltre a quella. In geometria l'hai già incontrato: il sistema $\vec{n} \cdot \vec{v} = 0$, $\vec{n} \cdot \vec{w} = 0$ per trovare una normale è omogeneo, e la soluzione banale $\vec{n} = \vec{0}$ è quella che non serve.

## Metodo

**Scrivere le matrici di un sistema.**
1. Porta ogni equazione nella forma "incognite a sinistra, nello stesso ordine; numero a destra".
2. Una riga per equazione, una colonna per incognita: dove un'incognita manca scrivi $0$.
3. $\vec{b}$ è la colonna dei numeri a destra; $[A \mid \vec{b}]$ le affianca.
4. Controlla l'ordine: $A$ è $m \times n$, $[A \mid \vec{b}]$ è $m \times (n+1)$.

**Verificare una soluzione.** Sostituisci l'ennupla in **ogni** equazione. Basta un'equazione falsa per dire che non è soluzione.

Il metodo per **risolvere** un sistema (operazioni elementari, Gauss-Jordan) sta in [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/); per sapere prima quante soluzioni ha, [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).

## Esempi svolti a lezione

> [!example]- Prof, appunti sistemi p. 1: $(1, 2, 3) \in \mathbb{R}^3$
> È una terna: $n = 3$, tre componenti reali in un ordine preciso. Con le operazioni della prof, per esempio, $(1,2,3) + (0,1,-1) = (1, 3, 2)$ e $2(1,2,3) = (2,4,6)$.

> [!example]- Dispensa, Esempio 12-13: un sistema compatibile e uno incompatibile
> $$
> \begin{cases} x_1 + x_2 = 2 \\ x_1 - x_2 = 0 \end{cases}
> $$
> La coppia $(1, 1)$ è soluzione: $1 + 1 = 2$ e $1 - 1 = 0$. Il sistema è **compatibile**; per dirlo basta esibire una soluzione.
> $$
> \begin{cases} x_1 + x_2 = 2 \\ x_1 + x_2 = 0 \end{cases}
> $$
> La stessa quantità $x_1 + x_2$ dovrebbe valere $2$ e $0$ insieme: **incompatibile**.
>
> Le matrici del primo sistema:
> $$
> A = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \qquad \vec{b} = \begin{bmatrix} 2 \\ 0 \end{bmatrix} \qquad [A \mid \vec{b}] = \begin{bmatrix} 1 & 1 & 2 \\ 1 & -1 & 0 \end{bmatrix}
> $$
> I due sistemi hanno la **stessa** matrice dei coefficienti e differiscono solo nei termini noti: uno è compatibile e l'altro no. La compatibilità non si legge su $A$ da sola.

> [!example]- Tutor, esercitazione 1, es. 5.1, riletto come sistema lineare
> Nell'esercizio sui tre piani il tutor "studia se il sistema lineare ammette soluzione" (svolto in [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/)):
> $$
> \begin{cases} z - 4 = 0 \\ x + y + 2 = 0 \\ 4x + 4y - z + 12 = 0 \end{cases} \quad\Longrightarrow\quad [A \mid \vec{b}] = \left[\begin{array}{ccc|c} 0 & 0 & 1 & 4 \\ 1 & 1 & 0 & -2 \\ 4 & 4 & -1 & -12 \end{array}\right]
> $$
> Tre equazioni in tre incognite ($m = n = 3$), non omogeneo. I termini noti passano a destra col segno cambiato, e gli zeri segnano le incognite che mancano. Il sistema è compatibile con infinite soluzioni (tutti i punti della retta $r$): la terza riga è $4$ volte la seconda meno la prima, e non aggiunge informazione. Capire questo guardando solo la matrice è esattamente quello che fa Gauss-Jordan: la terza riga diventa nulla e il rango è $2$ ([Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/)).

## Esercizi tipo esame

**Esercizio 1.** Dato il sistema
$$
\begin{cases} 2x_1 - x_2 + x_3 = 1 \\ x_1 + 3x_3 = 0 \end{cases}
$$

- a) scrivi $A$, $\vec{b}$, $[A \mid \vec{b}]$ con il loro ordine;
- b) stabilisci se $(0, -1, 0)$ e $(1, 1, 0)$ sono soluzioni. Il sistema è compatibile?

> [!example]- Soluzione
> **a)** Due equazioni, tre incognite: $m = 2$, $n = 3$. Nella seconda equazione $x_2$ manca, quindi coefficiente $0$.
> $$
> A = \begin{bmatrix} 2 & -1 & 1 \\ 1 & 0 & 3 \end{bmatrix} \ (2 \times 3) \qquad \vec{b} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \ (2 \times 1) \qquad [A \mid \vec{b}] = \left[\begin{array}{ccc|c} 2 & -1 & 1 & 1 \\ 1 & 0 & 3 & 0 \end{array}\right] \ (2 \times 4)
> $$
>
> **b)** $(0, -1, 0)$: prima equazione $0 + 1 + 0 = 1$, vera; seconda $0 + 0 = 0$, vera. **È soluzione.**
> $(1, 1, 0)$: prima $2 - 1 + 0 = 1$, vera; seconda $1 + 0 = 1 \neq 0$, falsa. **Non è soluzione**: soddisfa una sola equazione.
>
> Il sistema ha almeno la soluzione $(0, -1, 0)$, quindi è **compatibile**.

**Esercizio 2.** Scrivi il sistema che ha matrice completa
$$
\left[\begin{array}{ccc|c} 1 & 0 & -1 & 2 \\ 0 & 1 & 1 & -1 \\ 1 & 1 & 0 & 3 \end{array}\right]
$$
nelle incognite $x_1, x_2, x_3$, e mostra che è incompatibile.

> [!example]- Soluzione
> Ogni riga è un'equazione, l'ultima colonna il termine noto:
> $$
> \begin{cases} x_1 - x_3 = 2 \\ x_2 + x_3 = -1 \\ x_1 + x_2 = 3 \end{cases}
> $$
> Se $(t_1, t_2, t_3)$ fosse una soluzione, sommando le prime due uguaglianze varrebbe $t_1 + t_2 = 2 + (-1) = 1$. La terza chiede $t_1 + t_2 = 3$. Non si può avere $1 = 3$, quindi nessuna terna soddisfa tutte e tre: **incompatibile**.
>
> In geometria: sono tre piani senza un punto comune a tutti e tre.

**Esercizio 3.** Trova il punto comune ai piani $x + y + z = 1$, $x - y = 0$, $z = 2$: scrivi prima la matrice completa del sistema, poi risolvilo per sostituzione.

> [!example]- Soluzione
> $$
> \begin{cases} x + y + z = 1 \\ x - y = 0 \\ z = 2 \end{cases} \qquad [A \mid \vec{b}] = \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & -1 & 0 & 0 \\ 0 & 0 & 1 & 2 \end{array}\right]
> $$
> Dalla terza $z = 2$, dalla seconda $y = x$. Nella prima: $2x + 2 = 1$, quindi $x = -\frac{1}{2}$.
> $$
> \left(-\frac{1}{2}, -\frac{1}{2}, 2\right)
> $$
> Verifica: $-\frac{1}{2} - \frac{1}{2} + 2 = 1$, $-\frac{1}{2} + \frac{1}{2} = 0$, $z = 2$. Soluzione unica: i tre piani si incontrano in un punto.

## Errori tipici

- Scambiare l'ordine: $m \times n$ è righe per colonne, equazioni per incognite.
- Dimenticare lo $0$ di un'incognita che manca, e far scivolare i coefficienti nella colonna sbagliata.
- Lasciare il termine noto a sinistra col suo segno: in $x + y + 2 = 0$ il termine noto è $-2$.
- Dire che un'ennupla è soluzione perché soddisfa una delle equazioni: deve soddisfarle tutte.
- Dedurre la compatibilità da $A$ soltanto: dipende anche da $\vec{b}$.

## Domande

- Cos'è $\mathbb{R}^n$ e cos'è un suo elemento?

- Come si definiscono somma e prodotto per scalare in $\mathbb{R}^n$?

- Cosa rende lineare un'equazione? Fai un esempio di equazione non lineare.

- Nel coefficiente $a_{ij}$, cosa indica $i$ e cosa indica $j$?

- Quando un'ennupla è soluzione di un sistema lineare?

- Che differenza c'è fra sistema compatibile e sistema incompatibile?

- Quando un sistema è omogeneo, e perché è sempre compatibile?

- Cosa sono due sistemi equivalenti, e perché la nozione serve per Gauss-Jordan?

- Quali sono le tre matrici associate a un sistema lineare e che ordine hanno?

- Perché la matrice completa basta a descrivere tutto il sistema?

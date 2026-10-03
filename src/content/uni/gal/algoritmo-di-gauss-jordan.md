---
title: Algoritmo di Gauss-Jordan
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-09-28
lezioni: []
ordine: 5
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L4, lun 28/9 (3 ore). Fonte: appunti della prof <span class="src">p. 3</span> (operazioni elementari), <span class="src">p. 4-6</span> (esempi 1-3), <span class="src">p. 6-7</span> (matrice a scalini, pivot, algoritmo), <span class="src">p. 8-9</span> (forma ridotta per righe, riduzione all'indietro), <span class="src">p. 12-14</span> (applicazione alla geometria); esercitazione 2 del tutor, mar 29/9, <span class="src">p. 1-5</span> (riassunto, es. 1 e 2). Prima: [Sistemi lineari](/uni/gal/sistemi-lineari/) (notazione e matrici associate). Il rango e il teorema di Rouché-Capelli, che dicono **quante** soluzioni ci sono, stanno in [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).

> [!abstract] Per l'esame
> - **Saper enunciare**: le tre operazioni elementari con la notazione $S_{ij}$, $D_i(\lambda)$, $E_{ij}(\mu)$; matrice a scalini; pivot; matrice a scalini ridotta per righe; i passi dell'algoritmo di Gauss-Jordan e della riduzione all'indietro. Sono le domande 2.1-2.5 del foglio 2.
> - **Saper fare**: ridurre a scalini la matrice completa di un sistema, scrivere ogni passo con la sua sigla; arrivare a $\operatorname{rref}$ e leggere le soluzioni; riconoscere le variabili libere (colonne senza pivot) e scrivere le soluzioni in funzione di un parametro; passare da cartesiane a parametriche per rette e piani.
> - **Dove esce**: in ogni esercizio sui sistemi del foglio 2 (2.11-2.16) e in tutto il resto del corso: rango, matrici inverse, basi passano tutti da qui.

**L'idea.** La prof parte da un sistema e lo semplifica eliminando un'incognita alla volta, come si fa a mano. La novità è che lo fa **sulla matrice completa** e con tre sole mosse ammesse, le operazioni elementari: nessuna di loro cambia le soluzioni. Alla fine la matrice è "a scalini" e il sistema si risolve dal basso. Il tutor (29/9) la dice così: l'idea è "robotizzare, automatizzare" i conti, invece di pensare a ogni sistema da capo.

```
   sistema  ->  [A | b]  --Gauss-Jordan-->  forma a scalini  --all'indietro-->  rref
                                                 |                               |
                                         rango, compatibilità           soluzioni lette
                                         (Rouché-Capelli)               direttamente
```

## Definizioni

### Operazioni elementari

La prof (<span class="src">p. 3</span>) le dà in parallelo, sul sistema e sulla matrice:

| sul sistema | sulla matrice | sigla |
| --- | --- | --- |
| scambiare due equazioni | scambiare le righe $R_i$ e $R_j$ | $S_{ij}$ |
| moltiplicare un'equazione per uno scalare non nullo | moltiplicare la riga $R_i$ per uno scalare $\lambda \neq 0$ | $D_i(\lambda)$ |
| sommare a un'equazione un'altra equazione moltiplicata per $\mu \neq 0$ | sommare a $R_i$ la riga $R_j$ moltiplicata per $\mu \neq 0$ | $E_{ij}(\mu)$ |

**Come si legge $E_{ij}(\mu)$.** La riga che **cambia** è la prima dell'indice, $R_i$; la seconda, $R_j$, resta com'è e fa da attrezzo: $R_i \to R_i + \mu R_j$. Per esempio $E_{21}(-1)$ vuol dire "alla seconda riga sommo $-1$ volte la prima", cioè $R_2 \to R_2 - R_1$. Il segno di $\mu$ va scritto così com'è.

Nel riassunto del tutor (<span class="src">p. 1</span>) accanto a $E_{ij}(\lambda)$ c'è la nota "riga $i$ $-\ \lambda$(riga $j$)", col segno meno. Negli esercizi però il tutor la usa come la prof: il suo $E_{21}(-\frac{1}{4})$ è $R_2 - \frac{1}{4}R_1$. Vale la convenzione della prof, $R_i + \mu R_j$.

**Perché queste tre.** Ogni operazione elementare si può disfare con un'altra operazione elementare: $S_{ij}$ con sé stessa, $D_i(\lambda)$ con $D_i(1/\lambda)$, $E_{ij}(\mu)$ con $E_{ij}(-\mu)$. Quindi una soluzione del sistema nuovo è soluzione del vecchio e viceversa: il sistema che si ottiene è **equivalente** (stesse soluzioni, vedi [Sistemi lineari](/uni/gal/sistemi-lineari/)). Qui sta il motivo di $\lambda \neq 0$: moltiplicare una riga per $0$ la cancella, e quell'informazione non torna più indietro.

Esempio: nel sistema $x + y + z = 12$, $x + 2y - 2z = 1$, l'operazione $E_{21}(-1)$ dà $y - 3z = -11$ al posto della seconda equazione. Una terna che soddisfa le due equazioni nuove soddisfa anche le vecchie, perché la vecchia seconda è la nuova seconda più la prima.

### Matrice a scalini

La prof (<span class="src">p. 6</span>): una matrice $A$ è detta **a scalini** se per ogni $R_i, R_{i+1}$ (coppia di righe consecutive) abbiamo una delle seguenti proprietà:

- (a) $R_i$ e $R_{i+1}$ sono non nulle e il numero di zeri che precedono il primo numero non nullo di $R_i$ è inferiore rispetto al numero di zeri che precedono il primo numero non nullo di $R_{i+1}$;
- (b) $R_{i+1}$ è nulla (riga di zeri).

In parole: scendendo di riga, il primo numero non nullo si sposta **strettamente** a destra, e le righe di zeri stanno tutte in fondo. La condizione (b) dice anche che sotto una riga nulla può esserci solo un'altra riga nulla: se $R_i$ è nulla, la coppia $R_i, R_{i+1}$ non soddisfa (a), quindi deve valere (b).

Esempio della prof, con $p_1, p_2, p_3 \neq 0$ e $\ast$ numeri qualunque:

$$
A = \begin{pmatrix} p_1 & \ast & \ast & \ast \\ 0 & p_2 & \ast & \ast \\ 0 & 0 & 0 & p_3 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$

Lo scalino può essere largo più di una colonna: fra $p_2$ e $p_3$ si salta la terza colonna. Non è a scalini, per esempio, $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ (entrambe le righe partono dalla prima colonna) né $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ (riga nulla sopra una non nulla).

### Pivot

La prof (<span class="src">p. 7</span>): in una matrice a scalini, i numeri $p_1, p_2, p_3, \ldots \neq 0$ sono detti **pivot**. Sono i primi elementi non nulli di ogni riga non nulla, gli "spigoli" degli scalini.

Ogni riga non nulla ha esattamente un pivot, e due pivot non stanno mai nella stessa colonna. Quindi il numero di pivot è il numero di righe non nulle della forma a scalini. Nell'esempio sopra i pivot sono tre, in colonna $1$, $2$ e $4$; la colonna $3$ è **senza pivot**.

### Matrice a scalini ridotta per righe

La prof (<span class="src">p. 8</span>): una matrice è **ridotta per righe** se è a scalini e inoltre se ogni pivot è $1$ ed è l'unico elemento non nullo della propria colonna.

$$
\begin{pmatrix} 1 & 0 & \ast & 0 & \ast \\ 0 & 1 & \ast & 0 & \ast \\ 0 & 0 & 0 & 1 & \ast \end{pmatrix} \quad \text{è ridotta per righe.}
$$

Gli $\ast$ possono stare solo nelle colonne **senza** pivot. Il vantaggio: ogni riga contiene una sola incognita di pivot, e il sistema si legge già risolto.

> [!info] NB della prof: unicità
> Ogni matrice ammette un'unica forma a scalini ridotta per righe, $\operatorname{rref}(A)$ (*reduced row echelon form*). La forma a scalini **non** è unica: dipende dalle operazioni scelte. La ridotta sì, ed è per questo che ha un nome.

## Enunciati

### Le operazioni elementari non cambiano le soluzioni

> [!abstract] Proposizione
> Se la matrice completa $[A' \mid \vec{b}']$ si ottiene da $[A \mid \vec{b}]$ con una successione finita di operazioni elementari, i due sistemi sono equivalenti: hanno esattamente le stesse soluzioni.

La prof lo usa in tutti gli esempi senza enunciarlo a parte: è il motivo per cui si può risolvere il sistema finale al posto di quello di partenza.

> [!note]- Dimostrazione
> Basta farlo per **una** operazione: per una successione si ripete il ragionamento a ogni passo.
>
> $S_{ij}$ e $D_i(\lambda)$: scambiare l'ordine delle equazioni non cambia l'insieme delle condizioni; moltiplicare un'equazione per $\lambda \neq 0$ dà un'equazione con le stesse soluzioni, perché si torna indietro dividendo per $\lambda$.
>
> $E_{ij}(\mu)$: cambia solo l'equazione $i$, che diventa $(\text{eq}_i) + \mu\,(\text{eq}_j)$. Se $(t_1, \ldots, t_n)$ soddisfa il sistema vecchio, soddisfa $\text{eq}_i$ ed $\text{eq}_j$, quindi anche la loro combinazione: soddisfa il nuovo. Viceversa, se soddisfa il nuovo, soddisfa $\text{eq}_j$ (che non è cambiata) e $\text{eq}_i + \mu\,\text{eq}_j$; sottraendo $\mu$ volte la prima si ritrova $\text{eq}_i$. Le soluzioni sono le stesse. $\square$

### Unicità della forma ridotta

> [!abstract] Teorema (NB della prof, senza dimostrazione)
> Ogni matrice $A$ ammette un'unica forma a scalini ridotta per righe, $\operatorname{rref}(A)$.

A lezione è dato come fatto. La conseguenza che conta è quella sul rango (in [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/)): tutte le forme a scalini di $A$ hanno lo stesso numero di pivot.

## Metodo

### Algoritmo di Gauss-Jordan (forma a scalini)

I passi della prof (<span class="src">p. 7</span>):

1. Cerchiamo la **prima colonna** che contiene un elemento non nullo; lo chiamiamo $p_1$.
2. Scambiamo le righe in modo da portare $p_1$ sulla prima riga ($S_{1j}$).
3. Utilizziamo operazioni $E_{j1}(\mu)$ finché tutti i termini nella colonna di $p_1$ (escluso $p_1$) siano nulli. Il $\mu$ giusto per la riga $j$ è $\mu = -\dfrac{a_{j1}}{p_1}$.
4. Ripetiamo il procedimento sulla matrice ottenuta **escludendo la prima riga**.

$$
\left(\begin{array}{c|cccc} p_1 & \ast & \ast & \ast & \ast \\ \hline 0 & p_2 & \ast & \ast & \ast \\ 0 & 0 & & & \\ \vdots & \vdots & & \ddots & \\ 0 & 0 & & & \end{array}\right)
$$

Ci si ferma quando le righe rimaste sono tutte nulle o non ne restano. Una riga che diventa tutta di zeri si porta in fondo, oppure si cancella: è un'equazione $0 = 0$ che non dice niente (la prof la barra in <span class="src">esempio 4, p. 10</span>).

Due accorgimenti che usano sia la prof sia il tutor:
- se in colonna c'è un $1$ o un $-1$, conviene portarlo su come pivot: evita le frazioni (la prof scambia $R_1$ e $R_3$ in esempio 4 per avere $-1$ come pivot);
- se una riga ha un fattore comune, si può dividere con $D_i(\lambda)$ prima di proseguire.

### Riduzione all'indietro (forma ridotta per righe)

Per passare da una matrice a scalini alla sua forma ridotta (<span class="src">p. 9</span>):

1. Per ogni pivot $p_i$ eseguiamo l'operazione $D_i\!\left(\frac{1}{p_i}\right)$, così il pivot assume valore $1$.
2. Riduciamo a zero tutti i termini della colonna di $p_i$ **sopra** $p_i$ tramite operazioni $E_{ji}(\mu)$.

Conviene procedere dal pivot più in basso verso l'alto: si azzera la sua colonna sopra, poi si sale al pivot successivo. Così ogni operazione usa una riga che ha già un solo elemento non nullo fra le colonne di pivot, e non si rovina quello che è già fatto.

### Leggere le soluzioni

Con la matrice completa ridotta $\operatorname{rref}[A \mid \vec{b}]$ (<span class="src">p. 14</span>):

1. Se compare una riga $(0 \ \cdots \ 0 \mid c)$ con $c \neq 0$, il sistema è incompatibile: quella riga dice $0 = c$.
2. Altrimenti, le incognite delle colonne **con pivot** sono determinate; quelle delle colonne **senza pivot** sono **variabili libere**.
3. Si pone ogni variabile libera uguale a un parametro ($y = t$, $z = s$, ...) e si ricava ogni incognita di pivot dalla sua riga.
4. Verifica: si sostituisce la soluzione nel sistema **di partenza**, non in quello ridotto. È il controllo che trova gli errori di conto lungo la riduzione.

Anche senza arrivare a $\operatorname{rref}$ si può risolvere "dal basso" la forma a scalini, come fa la prof in esempio 1: dall'ultima equazione si ricava l'ultima incognita e si sostituisce salendo.

### Da cartesiane a parametriche (applicazione alla geometria)

La prof (<span class="src">p. 12-14</span>): "i punti sulla retta corrispondono alle soluzioni $(x, y, z)$ del sistema lineare". Quindi le equazioni parametriche di una retta o di un piano dato in cartesiane sono la soluzione generale del sistema.

1. Si scrive la matrice completa delle equazioni cartesiane.
2. Gauss-Jordan e riduzione all'indietro fino a $\operatorname{rref}$.
3. Le colonne senza pivot danno le variabili libere: si pongono uguali ai parametri.

Una retta (due equazioni indipendenti in tre incognite) ha due pivot e **una** variabile libera, quindi un parametro. Un piano (una equazione) ha un pivot e **due** variabili libere, quindi due parametri. È il modo sistematico di scegliere "quale variabile uguagliare a $t$", che in [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/) si faceva a occhio.

## Esempi svolti a lezione

> [!example]- Prof, 28/9, <span class="src">esempio 1, p. 4</span> e <span class="src">continuazione p. 8-9</span>: soluzione unica
> $$
> \begin{cases} x + y + z = 12 \\ x + 2y - 2z = 1 \\ 2x + y - 3z = -5 \end{cases} \qquad [A \mid \vec{b}] = \left[\begin{array}{ccc|c} 1 & 1 & 1 & 12 \\ 1 & 2 & -2 & 1 \\ 2 & 1 & -3 & -5 \end{array}\right]
> $$
> **Eliminare $x$ dalla seconda e dalla terza.** $E_{21}(-1)$: $R_2 - R_1 = (0, 1, -3 \mid -11)$, cioè $y - 3z = -11$. $E_{31}(-2)$: $R_3 - 2R_1 = (0, -1, -5 \mid -29)$, cioè $-y - 5z = -29$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & 12 \\ 0 & 1 & -3 & -11 \\ 0 & -1 & -5 & -29 \end{array}\right]
> $$
> **Eliminare $y$ dalla terza.** $E_{32}(1)$: $R_3 + R_2 = (0, 0, -8 \mid -40)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & 12 \\ 0 & 1 & -3 & -11 \\ 0 & 0 & -8 & -40 \end{array}\right] \qquad \begin{cases} x + y + z = 12 \\ y - 3z = -11 \\ -8z = -40 \end{cases}
> $$
> È a scalini con pivot $1, 1, -8$. **Risolvere dal basso**: $z = 5$, poi $y = -11 + 15 = 4$, poi $x = 12 - 4 - 5 = 3$.
>
> **Stessa soluzione con la riduzione all'indietro** (p. 8-9). $D_3(-\frac{1}{8})$ porta la terza riga a $(0, 0, 1 \mid 5)$. $E_{12}(-1)$: $R_1 - R_2 = (1, 0, 4 \mid 23)$. Poi $E_{13}(-4)$: $R_1 - 4R_3 = (1, 0, 0 \mid 3)$ ed $E_{23}(3)$: $R_2 + 3R_3 = (0, 1, 0 \mid 4)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & 0 & 4 \\ 0 & 0 & 1 & 5 \end{array}\right]
> $$
> La matrice ridotta si legge direttamente: $(x, y, z) = (3, 4, 5)$. Verifica sul sistema di partenza: $3 + 4 + 5 = 12$, $3 + 8 - 10 = 1$, $6 + 4 - 15 = -5$. Sistema **compatibile con soluzione unica**.

> [!example]- Prof, 28/9, <span class="src">esempio 2, p. 5</span>: infinite soluzioni
> $$
> \begin{cases} 2x + y - 3z = 2 \\ x + 2y + z = 1 \end{cases} \qquad \left[\begin{array}{ccc|c} 2 & 1 & -3 & 2 \\ 1 & 2 & 1 & 1 \end{array}\right] \xrightarrow{E_{21}(-\frac{1}{2})} \left[\begin{array}{ccc|c} 2 & 1 & -3 & 2 \\ 0 & \frac{3}{2} & \frac{5}{2} & 0 \end{array}\right]
> $$
> $R_2 - \frac{1}{2}R_1 = \left(1 - 1,\ 2 - \frac{1}{2},\ 1 + \frac{3}{2} \ \middle|\ 1 - 1\right) = \left(0, \frac{3}{2}, \frac{5}{2} \ \middle|\ 0\right)$. Pivot $2$ e $\frac{3}{2}$, in colonna $x$ e $y$; la colonna di $z$ è senza pivot, quindi $z$ è la **variabile libera**.
>
> Il sistema corrispondente è $2x + y - 3z = 2$, $\frac{3}{2}y + \frac{5}{2}z = 0$. Esprimiamo $x$ e $y$ in termini di $z$: dalla seconda $y = -\frac{5}{3}z$; nella prima $2x - \frac{5}{3}z - 3z = 2$, cioè $2x = 2 + \frac{14}{3}z$:
> $$
> \begin{cases} x = \frac{7}{3}z + 1 \\ y = -\frac{5}{3}z \end{cases} \qquad z \in \mathbb{R} \text{ qualunque}
> $$
> Sistema **compatibile con infinite soluzioni**, una per ogni valore di $z$. Verifica con $z = 3$: $(8, -5, 3)$ dà $16 - 5 - 9 = 2$ e $8 - 10 + 3 = 1$.

> [!example]- Prof, 28/9, <span class="src">esempio 3, p. 5-6</span>: sistema incompatibile
> $$
> \begin{cases} x + y = 2 \\ 2x - z = 1 \\ 2y + z = 0 \end{cases} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 0 & 2 \\ 2 & 0 & -1 & 1 \\ 0 & 2 & 1 & 0 \end{array}\right]
> $$
> $E_{21}(-2)$: $R_2 - 2R_1 = (0, -2, -1 \mid -3)$. Poi il $2$ in colonna $y$ della terza riga si azzera con $E_{32}(1)$: $R_3 + R_2 = (0, 0, 0 \mid -3)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 0 & 2 \\ 0 & -2 & -1 & -3 \\ 0 & 0 & 0 & -3 \end{array}\right] \qquad \begin{cases} x + y = 2 \\ -2y - z = -3 \\ 0 = -3 \end{cases}
> $$
> La terza equazione è $0 = -3$, falsa per ogni terna: sistema **incompatibile**. Nella matrice si vede da un pivot che cade nella colonna dei termini noti.

> [!example]- Prof, 28/9, <span class="src">p. 12-13</span>: retta da cartesiane a parametriche
> $$
> r: \begin{cases} x + y + z = 1 \\ 2x - y - 3z = 2 \end{cases} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 2 & -1 & -3 & 2 \end{array}\right] \xrightarrow{E_{21}(-2)} \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & -3 & -5 & 0 \end{array}\right]
> $$
> $D_2(-\frac{1}{3})$ dà $(0, 1, \frac{5}{3} \mid 0)$; poi $E_{12}(-1)$: $R_1 - R_2 = (1, 0, -\frac{2}{3} \mid 1)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & -\frac{2}{3} & 1 \\ 0 & 1 & \frac{5}{3} & 0 \end{array}\right] \qquad \begin{cases} x - \frac{2}{3}z = 1 \\ y + \frac{5}{3}z = 0 \end{cases} \ \Longrightarrow\ \begin{cases} x = 1 + \frac{2}{3}z \\ y = -\frac{5}{3}z \end{cases}
> $$
> La colonna di $z$ è senza pivot: pongo $z = t$.
> $$
> r: \begin{cases} x = 1 + \frac{2}{3}t \\ y = -\frac{5}{3}t \\ z = t \end{cases} \qquad t \in \mathbb{R}
> $$
> Punto $(1, 0, 0)$ per $t = 0$, direzione $\left(\frac{2}{3}, -\frac{5}{3}, 1\right)$, o anche $(2, -5, 3)$ moltiplicando per $3$. Verifica sulla direzione: $2 - 5 + 3 = 0$ e $4 + 5 - 9 = 0$, ortogonale a entrambe le normali.

> [!example]- Prof, 28/9, <span class="src">p. 13-14</span>: piano da cartesiane a parametriche
> $$
> \pi: x + 2y - 3 = 0 \qquad [\,1 \ \ 2 \ \ 0 \mid 3\,]
> $$
> Una sola riga, con pivot $1$ in colonna $x$: la matrice è già ridotta per righe. Abbiamo **2 variabili libere** ($y$ e $z$), le colonne senza pivot. Poniamo $y = t$, $z = s$ ($t, s$ parametri):
> $$
> \pi: \begin{cases} x = 3 - 2t \\ y = t \\ z = s \end{cases} \qquad t, s \in \mathbb{R}
> $$
> Attenzione allo $0$ in colonna $z$: nell'equazione $z$ non compare, ed è proprio per questo che è libera senza vincoli. Il piano è parallelo all'asse $z$.

### Esercitazione 2 del tutor (29/9)

**Es. 1** (<span class="src">p. 2-3</span>). Trovare la/le soluzioni di
$$
\begin{cases} 4x + 4y + 2z = 4 \\ x - z = -1 \\ x + 3y - z = 3 \end{cases}
$$

> [!example]- Soluzione
> $$
> \left[\begin{array}{ccc|c} 4 & 4 & 2 & 4 \\ 1 & 0 & -1 & -1 \\ 1 & 3 & -1 & 3 \end{array}\right]
> $$
> **A scalini.** $E_{21}(-\frac{1}{4})$: $R_2 - \frac{1}{4}R_1 = (0, -1, -\frac{3}{2} \mid -2)$. $E_{31}(-\frac{1}{4})$: $R_3 - \frac{1}{4}R_1 = (0, 2, -\frac{3}{2} \mid 2)$. Poi $E_{32}(2)$: $R_3 + 2R_2 = (0,\ 0,\ -\frac{3}{2} - 3 \mid 2 - 4) = (0, 0, -\frac{9}{2} \mid -2)$.
> $$
> \left[\begin{array}{ccc|c} 4 & 4 & 2 & 4 \\ 0 & -1 & -\frac{3}{2} & -2 \\ 0 & 0 & -\frac{9}{2} & -2 \end{array}\right]
> $$
> Tre pivot sia in $A$ sia in $[A \mid \vec{b}]$: per Rouché-Capelli soluzione unica.
>
> **Riduzione all'indietro.** $D_1(\frac{1}{4})$, $D_2(-1)$, $D_3(-\frac{2}{9})$:
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & \frac{1}{2} & 1 \\ 0 & 1 & \frac{3}{2} & 2 \\ 0 & 0 & 1 & \frac{4}{9} \end{array}\right] \xrightarrow{E_{12}(-1)} \left[\begin{array}{ccc|c} 1 & 0 & -1 & -1 \\ 0 & 1 & \frac{3}{2} & 2 \\ 0 & 0 & 1 & \frac{4}{9} \end{array}\right] \xrightarrow[E_{23}(-\frac{3}{2})]{E_{13}(1)} \left[\begin{array}{ccc|c} 1 & 0 & 0 & -\frac{5}{9} \\ 0 & 1 & 0 & \frac{4}{3} \\ 0 & 0 & 1 & \frac{4}{9} \end{array}\right]
> $$
> $$
> (x, y, z) = \left(-\frac{5}{9},\ \frac{4}{3},\ \frac{4}{9}\right)
> $$
> Verifica: $-\frac{20}{9} + \frac{48}{9} + \frac{8}{9} = 4$; $-\frac{5}{9} - \frac{4}{9} = -1$; $-\frac{5}{9} + 4 - \frac{4}{9} = 3$.
>
> **Errore nella scansione del tutor**: al passo $E_{32}(2)$ scrive $-\frac{3}{2}$ al posto di $-\frac{9}{2}$ nella terza riga, e arriva a $\left(-\frac{5}{3}, \frac{4}{3}, \frac{4}{3}\right)$. Non è soluzione: nella prima equazione dà $-\frac{20}{3} + \frac{16}{3} + \frac{8}{3} = \frac{4}{3} \neq 4$. La verifica finale sul sistema di partenza l'avrebbe trovato subito.

**Es. 2** (<span class="src">p. 4-5</span>). Sistema lineare in quattro incognite: trovare le soluzioni.
$$
\begin{cases} 2x_2 + 10x_3 + x_4 = 0 \\ x_1 + 2x_2 + x_4 = 0 \\ 3x_1 + 5x_2 - 6x_3 + 4x_4 = 0 \\ 2x_1 + 5x_2 + 4x_3 + 4x_4 = 0 \end{cases}
$$

> [!example]- Soluzione
> Il tutor osserva: è omogeneo ($\vec{b} = \vec{0}$), quindi basta la matrice dei coefficienti $A$. La colonna dei termini noti resterebbe di zeri per ogni operazione.
>
> **A scalini.** La prima colonna ha $0$ in alto: $S_{12}$ porta su la riga che inizia con $1$. Poi $E_{31}(-3)$ ed $E_{41}(-2)$:
> $$
> \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 2 & 10 & 1 \\ 3 & 5 & -6 & 4 \\ 2 & 5 & 4 & 4 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 2 & 10 & 1 \\ 0 & -1 & -6 & 1 \\ 0 & 1 & 4 & 2 \end{pmatrix}
> $$
> $E_{32}(\frac{1}{2})$: $R_3 + \frac{1}{2}R_2 = (0, 0, -1, \frac{3}{2})$. $E_{42}(-\frac{1}{2})$: $R_4 - \frac{1}{2}R_2 = (0, 0, -1, \frac{3}{2})$. Le ultime due righe sono uguali: $E_{43}(-1)$ azzera la quarta.
> $$
> \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 2 & 10 & 1 \\ 0 & 0 & -1 & \frac{3}{2} \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Il tutor a voce: "abbiamo nel sistema un'info ripetuta, superflua". Una delle quattro equazioni è conseguenza delle altre.
>
> **Riduzione all'indietro.** $D_2(\frac{1}{2})$, $D_3(-1)$, poi $E_{12}(-2)$, poi $E_{13}(10)$ ed $E_{23}(-5)$:
> $$
> \begin{pmatrix} 1 & 0 & 0 & -15 \\ 0 & 1 & 0 & 8 \\ 0 & 0 & 1 & -\frac{3}{2} \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Tre pivot, quattro incognite: $x_4$ (colonna senza pivot) è libera. Ogni riga dice incognita di pivot $+ (\text{coefficiente}) \cdot x_4 = 0$:
> $$
> \begin{cases} x_1 = 15x_4 \\ x_2 = -8x_4 \\ x_3 = \frac{3}{2}x_4 \end{cases} \qquad x_4 \in \mathbb{R}
> $$
> Infinite soluzioni, fra cui quella banale ($x_4 = 0$). Verifica con $x_4 = 2$, cioè $(30, -16, 3, 2)$: $-32 + 30 + 2 = 0$; $30 - 32 + 2 = 0$; $90 - 80 - 18 + 8 = 0$; $60 - 80 + 12 + 8 = 0$.

## Esercizi tipo esame

**Esercizio 1.** Risolvere il sistema
$$
\begin{cases} x + 2y + z = 4 \\ 2x + 3y + 3z = 7 \\ -x + y - 2z = -3 \end{cases}
$$
scrivendo ogni operazione elementare usata.

> [!example]- Soluzione
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 2 & 3 & 3 & 7 \\ -1 & 1 & -2 & -3 \end{array}\right] \xrightarrow[E_{31}(1)]{E_{21}(-2)} \left[\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & -1 & 1 & -1 \\ 0 & 3 & -1 & 1 \end{array}\right] \xrightarrow{E_{32}(3)} \left[\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & -1 & 1 & -1 \\ 0 & 0 & 2 & -2 \end{array}\right]
> $$
> Tre pivot: soluzione unica. Dal basso: $2z = -2$, quindi $z = -1$; $-y + z = -1$, quindi $y = 0$; $x + 0 - 1 = 4$, quindi $x = 5$.
> $$
> (x, y, z) = (5, 0, -1)
> $$
> Verifica: $5 + 0 - 1 = 4$; $10 + 0 - 3 = 7$; $-5 + 0 + 2 = -3$.

**Esercizio 2.** Risolvere il sistema omogeneo
$$
\begin{cases} x_1 + x_2 + 2x_3 + x_4 = 0 \\ 2x_1 + 3x_2 + 3x_3 + 4x_4 = 0 \\ x_1 + 2x_2 + x_3 + 3x_4 = 0 \end{cases}
$$
Quante sono le variabili libere?

> [!example]- Soluzione
> Omogeneo: si lavora su $A$.
> $$
> \begin{pmatrix} 1 & 1 & 2 & 1 \\ 2 & 3 & 3 & 4 \\ 1 & 2 & 1 & 3 \end{pmatrix} \xrightarrow[E_{31}(-1)]{E_{21}(-2)} \begin{pmatrix} 1 & 1 & 2 & 1 \\ 0 & 1 & -1 & 2 \\ 0 & 1 & -1 & 2 \end{pmatrix} \xrightarrow{E_{32}(-1)} \begin{pmatrix} 1 & 1 & 2 & 1 \\ 0 & 1 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix} \xrightarrow{E_{12}(-1)} \begin{pmatrix} 1 & 0 & 3 & -1 \\ 0 & 1 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Due pivot (colonne $x_1$, $x_2$), quattro incognite: **due variabili libere**, $x_3 = t$ e $x_4 = s$.
> $$
> \begin{cases} x_1 = -3t + s \\ x_2 = t - 2s \\ x_3 = t \\ x_4 = s \end{cases} \qquad t, s \in \mathbb{R}
> $$
> Verifica con $t = 1$, $s = 0$, cioè $(-3, 1, 1, 0)$: $-3 + 1 + 2 = 0$; $-6 + 3 + 3 = 0$; $-3 + 2 + 1 = 0$. Con $t = 0$, $s = 1$, cioè $(1, -2, 0, 1)$: $1 - 2 + 1 = 0$; $2 - 6 + 4 = 0$; $1 - 4 + 3 = 0$.

**Esercizio 3.** Trovare equazioni parametriche della retta
$$
r: \begin{cases} x - y + 2z = 1 \\ 2x - y + z = 3 \end{cases}
$$
usando l'algoritmo di Gauss-Jordan.

> [!example]- Soluzione
> $$
> \left[\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 2 & -1 & 1 & 3 \end{array}\right] \xrightarrow{E_{21}(-2)} \left[\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 0 & 1 & -3 & 1 \end{array}\right] \xrightarrow{E_{12}(1)} \left[\begin{array}{ccc|c} 1 & 0 & -1 & 2 \\ 0 & 1 & -3 & 1 \end{array}\right]
> $$
> Colonna di $z$ senza pivot: $z = t$. Dalle righe: $x - z = 2$, $y - 3z = 1$.
> $$
> r: \begin{cases} x = 2 + t \\ y = 1 + 3t \\ z = t \end{cases} \qquad t \in \mathbb{R}
> $$
> Verifica: $(2 + t) - (1 + 3t) + 2t = 1$ e $2(2 + t) - (1 + 3t) + t = 3$ per ogni $t$.

**Esercizio 4.** Dire quali di queste matrici sono a scalini e quali ridotte per righe; per quelle a scalini indicare i pivot.
$$
M_1 = \begin{pmatrix} 1 & 3 & 0 & 2 \\ 0 & 0 & 1 & 4 \end{pmatrix} \qquad M_2 = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 5 \end{pmatrix} \qquad M_3 = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

> [!example]- Soluzione
> - $M_1$: a scalini, pivot $1$ (colonna 1) e $1$ (colonna 3). È anche **ridotta**: pivot uguali a $1$, unici non nulli nelle loro colonne. Il $3$ e il $2$ stanno in colonne senza pivot e non danno fastidio.
> - $M_2$: **non** è a scalini. La seconda riga è nulla e sotto c'è una riga non nulla: la coppia $R_2, R_3$ non soddisfa né (a) né (b). Con $S_{23}$ diventa a scalini.
> - $M_3$: a scalini, pivot $1, 3, 1$ nelle colonne $1, 2, 3$. **Non** ridotta: il pivot $3$ non è $1$, e sopra i pivot di colonna 2 e 3 ci sono un $2$ e un $1$.

## Errori tipici

- Leggere $E_{ij}(\mu)$ al contrario: cambia $R_i$, non $R_j$. $E_{21}(-2)$ è $R_2 \to R_2 - 2R_1$.
- Dimenticare la colonna dei termini noti durante un'operazione: ogni operazione si fa sulla riga **intera** di $[A \mid \vec{b}]$.
- Sbagliare un segno a metà riduzione e portarselo fino in fondo, come nell'es. 1 del tutor. Rimedio: verifica finale sul sistema di partenza.
- Usare $D_i(0)$ o "cancellare" una riga che non è nulla: si perde un'equazione e il sistema non è più equivalente.
- Sommare a una riga un multiplo di sé stessa ($E_{ii}$): non è un'operazione elementare.
- Credere che il pivot sia sempre sulla diagonale: lo scalino può saltare colonne (piano $x + 2y = 3$, pivot solo in colonna $x$).
- Prendere come variabile libera una colonna **con** pivot. Le libere sono le colonne senza pivot, e sono tante quante le incognite meno i pivot.
- Scambiare la forma a scalini per unica: è unica solo la ridotta per righe.

## Domande

- Quali sono le tre operazioni elementari su un sistema lineare, e come si scrivono sulla matrice?

- Cosa fa l'operazione $E_{ij}(\mu)$? Quale riga cambia?

- Perché nelle operazioni elementari lo scalare deve essere non nullo?

- Perché le operazioni elementari non cambiano le soluzioni di un sistema?

- Quando una matrice è a scalini? Dai la definizione della prof con le due proprietà.

- Cos'è un pivot?

- Quando una matrice a scalini è ridotta per righe?

- Quali sono i passi dell'algoritmo di Gauss-Jordan?

- Quali sono i passi della riduzione all'indietro?

- La forma a scalini di una matrice è unica? E la forma ridotta per righe?

- Come si riconoscono le variabili libere in una matrice ridotta, e quante sono?

- Come si passa da equazioni cartesiane a parametriche di una retta con Gauss-Jordan? Quanti parametri servono per una retta e per un piano?

---
title: Ripassone 2 · Numeri reali, sup e inf
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: riferimento
stato: completa
data: 2026-11-05
lezioni: []
ordine: 999
---

Parte di [Ripassone finale](/uni/analisi-1/ripassone-finale/). Testi delle slide, annotazioni del prof e provette vere: le righe in corsivo tra parentesi segnalano una fonte corretta o uno svolgimento che non viene dalla fonte.

## Alla lettera dalle slide

> [!abstract] Definizione (insiemi numerici) · slide 24
> $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ insieme dei numeri naturali
> $\mathbb{Z} = \{0, 1, -1, 2, -2, 3, -3, \dots\}$ insieme dei numeri interi
> $\mathbb{Q} = \left\{\frac{p}{q} : p, q \in \mathbb{Z},\ q \neq 0\right\}$ insieme dei numeri razionali
>
> Si noti che $\frac{p_1}{q_1} = \frac{p_2}{q_2}$ se $p_1 q_2 = p_2 q_1$, cioè la rappresentazione dei numeri razionali con le frazioni non è unica (esempio: $\frac23 = \frac46 = \frac{10}{15} = \dots$)

> [!abstract] Insiemi numerici (inclusioni, operazioni, ordinamento) · slide 25
> Valgono le inclusioni $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$ (tutte le inclusioni sono strette!)
> Su questi insiemi sono definite le operazioni di somma e di prodotto.
> Inoltre, abbiamo un ordinamento totale, ovvero la relazione $\leq$ (per ogni coppia di numeri $a, b \in \mathbb{Q}$ si ha $a \leq b$ oppure $b \leq a$).
> Ci sono punti della retta che non possono essere rappresentati da nessun numero razionale. Ad esempio, la lunghezza della diagonale di un quadrato di lato $1$ non è espressa da alcun numero razionale!

> [!abstract] Teorema ($\sqrt2$ non è un numero razionale) · slide 26, a mano
> $\sqrt2$ non è un numero razionale. Con $\sqrt2$ intendiamo la soluzione positiva dell'equazione $x^2 = 2$.

> [!abstract] Rappresentazione decimale · slide 27
> Ogni numero razionale si può rappresentare in forma decimale: ad esempio $\frac12 = 0{,}5$, $\frac34 = 0{,}75$, $\frac13 = 0{,}3333\ldots = 0{,}\overline{3}$, $\frac17 = 0{,}\overline{142857}$.
> In generale, ogni numero razionale $x \in \mathbb{Q}$ si può rappresentare con un allineamento decimale limitato o periodico
> $$
> x = \pm\, p{,}\alpha_1 \alpha_2 \ldots \alpha_n \ldots \qquad \text{cioè} \qquad x = \pm \left(p + \frac{\alpha_1}{10} + \frac{\alpha_2}{10^2} + \ldots + \frac{\alpha_n}{10^n} + \ldots\right)
> $$
> dove o solo un numero finito di cifre decimali $\alpha_i$ è diverso da zero, oppure da un certo punto in poi un blocco di un numero finito di cifre decimali è ripetuto indefinitamente.
> Viceversa, ogni allineamento decimale limitato o periodico individua un numero razionale.
> Possiamo però costruire allineamenti decimali che non sono né limitati, né periodici: $0{,}10110111011110111110\ldots$

> [!abstract] Definizione (numeri reali) · slide 28
> Definiamo l'insieme $\mathbb{R}$ dei numeri reali come l'insieme di tutti i possibili allineamenti decimali.
> $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$
> Sull'insieme dei numeri reali $\mathbb{R}$ si possono estendere le operazioni di somma e di prodotto che avevamo in $\mathbb{Q}$, così come l'ordinamento totale $\leq$.
> Un numero reale si rappresenta come allineamento decimale del tipo
> $$
> x = \pm\, p{,}\alpha_1 \alpha_2 \alpha_3 \ldots \alpha_n \ldots \qquad \text{con } p \in \mathbb{N},\ \alpha_1, \alpha_2, \ldots \in \mathbb{N},\ 0 \leq \alpha_i \leq 9.
> $$
> Il significato di questa scrittura è il seguente: nel caso $x > 0$, si ha che
> $$
> p{,}\alpha_1 \alpha_2 \ldots \alpha_n \leq x < p{,}\alpha_1 \alpha_2 \ldots \alpha_n + \frac{1}{10^n} \qquad \text{per ogni } n \in \mathbb{N}.
> $$

> [!abstract] Definizione (intervalli) · slide 29
> Dati due numeri reali $a, b \in \mathbb{R}$, con $a < b$, si pone:
> $(a, b) = \{x \in \mathbb{R} : a < x < b\}$ intervallo aperto
> $[a, b] = \{x \in \mathbb{R} : a \leq x \leq b\}$ intervallo chiuso
> $(a, b] = \{x \in \mathbb{R} : a < x \leq b\}$ aperto in $a$, chiuso in $b$
> $[a, b) = \{x \in \mathbb{R} : a \leq x < b\}$ aperto in $b$, chiuso in $a$
>
> Gli intervalli precedenti sono intervalli limitati. Introduciamo una notazione anche per gli intervalli illimitati (cioè le semirette):
> $(-\infty, a) = \{x \in \mathbb{R} : x < a\}$
> $(-\infty, a] = \{x \in \mathbb{R} : x \leq a\}$
> $(a, +\infty) = \{x \in \mathbb{R} : x > a\}$
> $[a, +\infty) = \{x \in \mathbb{R} : x \geq a\}$

> [!abstract] Definizione (maggiorante/minorante) · slide 30
> Sia $A \subset \mathbb{R}$, $A \neq \emptyset$.
> Un elemento $M \in \mathbb{R}$ si dice **maggiorante** per $A$ se $x \leq M\ \ \forall x \in A$.
> Un elemento $m \in \mathbb{R}$ si dice **minorante** per $A$ se $x \geq m\ \ \forall x \in A$.

> [!abstract] Definizione (insieme limitato/illimitato) · slide 30
> $A$ si dice **limitato superiormente** se ammette almeno un maggiorante.
> $A$ si dice **limitato inferiormente** se ammette almeno un minorante.
> $A$ si dice **limitato** se è limitato sia superiormente che inferiormente.

> [!abstract] Definizione (massimo/minimo) · slide 32
> Sia $A \subset \mathbb{R}$, $A \neq \emptyset$.
> Un elemento $M \in \mathbb{R}$ si dice **massimo** per $A$ se
> - $M$ è un maggiorante per $A$ (cioè $x \leq M$ per ogni $x \in A$);
> - $M \in A$.
>
> Un elemento $m \in \mathbb{R}$ si dice **minimo** per $A$ se
> - $m$ è un minorante per $A$ (cioè $x \geq m$ per ogni $x \in A$);
> - $m \in A$.
>
> Anche se un insieme è limitato superiormente (inferiormente), il massimo (minimo) può non esistere.
> Massimo e minimo, se esistono, sono unici (dimostratelo!).

> [!abstract] Definizione (estremo superiore/inferiore) · slide 33
> Sia $A \subset \mathbb{R}$, $A \neq \emptyset$.
> Un elemento $\bar{x} \in \mathbb{R}$ si dice **estremo superiore** di $A$ (in simboli $\bar{x} = \sup A$) se $\bar{x}$ è il più piccolo dei maggioranti di $A$:
> $$
> \sup A = \min\{M \in \mathbb{R} : M \text{ è maggiorante di } A\}.
> $$
> Un elemento $\underline{x} \in \mathbb{R}$ si dice **estremo inferiore** di $A$ (in simboli $\underline{x} = \inf A$) se $\underline{x}$ è il più grande dei minoranti di $A$:
> $$
> \inf A = \max\{m \in \mathbb{R} : m \text{ è minorante di } A\}.
> $$
>
> Nota bene: la definizione di estremo superiore ha senso se esiste almeno un maggiorante, cioè se l'insieme $A$ è limitato superiormente. Poniamo allora:
> se $A$ non è limitato superiormente $\implies$ $\sup A = +\infty$
> se $A$ non è limitato inferiormente $\implies$ $\inf A = -\infty$

> [!abstract] Proprietà di estremo superiore/inferiore · slide 34
> Alcune proprietà di estremo superiore/inferiore:
> - Se esiste il massimo $M = \max A$ di un insieme $A$, allora $\sup A = M$.
> - Se esiste l'estremo superiore $\sup A$ di un insieme $A$, non è detto che esista il massimo di $A$; se però $\sup A \in A$, allora esiste il massimo di $A$ e $\sup A = \max A$.
>
> Similmente per estremo inferiore e minimo:
> - Se esiste il minimo $m = \min A$ di un insieme $A$, allora $\inf A = m$.
> - Se esiste l'estremo inferiore $\inf A$ di un insieme $A$, non è detto che esista il minimo di $A$; se però $\inf A \in A$, allora esiste il minimo di $A$ e $\inf A = \min A$.
>
> Esempio: $A = [-1, 2)$, $A = (0, +\infty)$, $A = \left\{1, \frac12, \frac13, \frac14, \dots, \frac1n, \dots\right\}$

> [!abstract] Assioma di completezza di $\mathbb{R}$ · slide 35
> Sia $A \subset \mathbb{R}$, $A \neq \emptyset$. Se $A$ è limitato superiormente, allora
> $$
> \exists \sup A \in \mathbb{R}.
> $$
>
> Questa è la proprietà fondamentale che differenzia $\mathbb{R}$ da $\mathbb{Q}$: l'assioma di completezza non vale nell'insieme dei numeri razionali $\mathbb{Q}$!
> Per capirne il significato, consideriamo l'insieme $A = \{x \in \mathbb{R} : x \geq 0,\ x^2 < 2\}$.
> L'assioma di completezza ci dice che esiste un numero reale $\bar{x} \in \mathbb{R}$ tale che $\bar{x} = \sup A$. Ma chi è $\bar{x}$? Usando le proprietà di $\mathbb{R}$, si può far vedere che:
> - non può essere $\bar{x}^2 < 2$, o $\bar{x}$ non sarebbe un maggiorante;
> - non può essere $\bar{x}^2 > 2$, o ci sarebbe un maggiorante più piccolo di $\bar{x}$.

> [!abstract] Assioma di completezza dei numeri reali (conseguenza) · slide 36
> Rivediamo cosa abbiamo ottenuto: per l'assioma di completezza, esiste $\bar{x} \in \mathbb{R}$ tale che $\bar{x}^2 = 2$!
> Questa proprietà non vale in $\mathbb{Q}$: abbiamo visto che non esiste alcun numero razionale $x \in \mathbb{Q}$ tale che $x^2 = 2$. Tale numero è ottenuto come l'estremo superiore dell'insieme $A = \{x \in \mathbb{R} : x \geq 0,\ x^2 < 2\}$, cioè $\sqrt2 := \sup A$.
> Dal punto di vista geometrico, l'assioma di completezza corrisponde al fatto che ogni punto della retta reale corrisponde ad un numero reale.

> [!abstract] Definizione (parte intera) · slide 36
> Dato un numero reale $x \in \mathbb{R}$, definiamo la sua parte intera come
> $$
> \lfloor x \rfloor := \sup\{y \in \mathbb{Z} : y \leq x\}.
> $$

> [!abstract] Proprietà di Archimede · slide 37
> L'insieme dei numeri naturali $\mathbb{N}$ non è superiormente limitato:
> $$
> \sup \mathbb{N} = +\infty.
> $$
> L'enunciato è equivalente a
> $$
> \forall x \in \mathbb{R}\quad \exists n \in \mathbb{N} \quad \text{tale che} \quad n > x.
> $$

> [!abstract] Proprietà di densità di $\mathbb{Q}$ in $\mathbb{R}$ · slide 39
> Dati $a, b \in \mathbb{R}$ con $a < b$, esiste un numero razionale $q \in \mathbb{Q}$ tale che $a < q < b$.

> [!abstract] Esercizi su estremo superiore/inferiore · slide 40
> Per verificare che un numero $\bar{x}$ è l'estremo superiore di un insieme $A$, si tratta di verificare due condizioni:
> - a) $\bar{x}$ è un maggiorante di $A$;
> - b) ogni altro numero $x < \bar{x}$ non è un maggiorante di $A$.

> [!abstract] Gli assiomi dei numeri reali · slide 42, lezione del 16/9
> Esiste l'insieme $\mathbb{R}$ dei numeri reali ed esistono due operazioni $+, \cdot : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ ed una relazione d'ordine totale “$\leq$" su $\mathbb{R}$, verificanti i seguenti assiomi:
>
> Assiomi delle operazioni.
> (1) Associativa: $(a + b) + c = a + (b + c)$; $a \cdot (b \cdot c) = (a \cdot b) \cdot c$.
> (2) Commutativa: $a + b = b + a$; $a \cdot b = b \cdot a$.
> (3) Distributiva: $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$.
> (4) Esistenza degli elementi neutri: esistono $0, 1 \in \mathbb{R}$ tali che, per ogni $a \in \mathbb{R}$ vale $a + 0 = a$, $a \cdot 1 = a$.
> (5) Esistenza di opposti e inversi:
> - per ogni $a \in \mathbb{R}$ esiste $-a \in \mathbb{R}$ tale che $a + (-a) = 0$;
> - per ogni $a \in \mathbb{R} \setminus \{0\}$ esiste $a^{-1} \in \mathbb{R}$ tale che $a \cdot a^{-1} = 1$.

> [!abstract] Gli assiomi dei numeri reali (ordinamento e completezza) · slide 43
> Assiomi dell'ordinamento. Per ogni $a, b, c \in \mathbb{R}$
> (6) Dicotomia: $a \leq b$ oppure $b \leq a$.
> (7) Antisimmetrica: se $a \leq b$ e $b \leq a$ allora $a = b$.
> (8) Se $a \leq b$ allora $a + c \leq b + c$.
> (9) Se $0 \leq a$ e $0 \leq b$ allora $0 \leq a + b$ e $0 \leq a \cdot b$.
>
> Assioma di completezza.
> (10) Ogni insieme superiormente limitato ammette estremo superiore.

> [!abstract] Gli assiomi dei numeri reali (nota bene) · slide 44
> Nota bene: le altre regole algebriche per le operazioni oppure per le disuguaglianze sono in realtà dei **teoremi**, ovvero si possono dimostrare combinando opportunamente i precedenti assiomi. Alcuni esempi di regole dimostrabili a partire dagli assiomi sopra elencati sono:
> - l'unicità dell'opposto e dell'inverso;
> - il fatto (apparentemente ovvio!) che $a \cdot 0 = 0$;
> - la regola "più per meno fa meno": $a \cdot (-b) = -(a \cdot b)$.
> - La legge di annullamento del prodotto: se $a \cdot b = 0$ allora $a = 0$ oppure $b = 0$.
> - $\ldots$

## Il prof ha scritto

- slide 25, a mano: «PROPR. TRANSITIVA: $a \leq b$, $b \leq c \Rightarrow a \leq c$»
- slide 26, a mano: «PER ASSURDO $\sqrt2 = \frac{m}{n}$ con $m \in \mathbb{Z}$, $n \in \mathbb{Z} \setminus \{0\}$» e, sotto, «DIFFERENZA INSIEMISTICA» con «$\{1, 2, 3, \dots\}$»; «Poniamo che $m$ e $n$ siano COPRIMI (ovvero non hanno nessun fattore in comune nella fattorizzazione in primi)»
- slide 27, a mano: «$0{,}99999\ldots$ è equivalente a $1$» e, sotto $0{,}10110111011110111110\ldots$, «QUESTA RAPPRESENTA UN NUMERO IN $\mathbb{R} \setminus \mathbb{Q}$»
- slide 28, a mano, sotto le due approssimazioni, con la cifra $\alpha_n$ cerchiata: «$0{,}57431\ldots$ $\leq$ $0{,}57432\ldots$»
- slide 30, a mano: «$M \in \mathbb{R}$» riquadrato; disegno sulla retta con «$A$» e «$M$»
- slide 31, a mano: «maggioranti per $A$: $[2, +\infty)$. minoranti: $(-\infty, -1]$ $\Rightarrow$ $A$ è limitato»
- slide 31, a mano, sotto l'esercizio «scrivere in simboli matematici la definizione di insieme illimitato superiormente, negando la condizione di limitatezza»: «$A$ limitato superiormente $\Leftrightarrow$ $\exists M \in \mathbb{R}:\ (\forall x \in A,\ x \leq M)$» e «$A$ illimitato superiormente $\Leftrightarrow$ $\forall M \in \mathbb{R},\ (\exists x \in A : x > M)$»
- slide 31, a mano, nella pagina del disegno: «$\forall M$», «esiste $x$»
- slide 32, a mano: «(il più grande tra gli elem. di $A$)», «(il più piccolo tra gli elem. di $A$)», «(PER ASSURDO)»
- slide 33, a mano: «(MINIMO)» sotto la definizione di sup, «(MASSIMO)» sotto la definizione di inf
- dopo slide 33, a mano: «CHE PROPRIETÀ HA L'ESTREMO SUPERIORE $M$ DI UN INSIEME $A$?» «è un maggiorante» «(1) $\forall x \in A,\ x \leq M$» «nessun elemento strettamente più piccolo di $M$ può essere un maggiorante» «(2) $\forall N < M,\ \exists x \in A : x > N$»
- dopo slide 33, a mano: «CHE PROPRIETÀ HA L'ESTREMO INFERIORE $m$ DI UN INSIEME $A$?» «è un minorante» «(3) $\forall x \in A,\ x \geq m$» «nessun elemento strettamente più grande di $M$ può essere un minorante» «(4) $\forall n > m,\ \exists x \in A : x < n$»
- slide 34, a mano, sotto l'esempio $\left\{1, \frac12, \frac13, \dots\right\}$: «$\sup(A) = \max(A) = 1$; $\inf(A) = 0$ $\Rightarrow$ MOSTRARE (3) e (4)»
- slide 35, a mano: disegno sulla retta con «$A \cap \mathbb{Q}$», «$\mathbb{Q}$» e «$\sqrt2$»
- slide 36, a mano: «$x = 7{,}312 \Rightarrow \lfloor x \rfloor = 7$», «$x = -7{,}312 \Rightarrow \lfloor x \rfloor = -8$»; nella pagina dopo, disegno sulla retta con le tacche degli interi, «$\lfloor x \rfloor$» e «$x$»
- slide 38, a mano: «OVVERO SIA $x$ UN MINORANTE DELL'INS. $A = \left\{1, \frac12, \frac13, \frac14, \dots\right\}$» e, nel testo, «$\mathbb{N} \setminus \{0\}$»; «Qui abbiamo usato $x > 0$»
- slide 39, a mano: disegno con $a < q < b$ sulla retta, «$\in \mathbb{Q}$» e «$\in \mathbb{R}$»
- slide 41, a mano: «CHI È L'ESTREMO SUPERIORE $M$ DI $C$?» «VOGLIAMO MOSTRARE CHE $M = 2$»; accanto all'insieme $D$: «(PROSSIMO FOGLIO)»
- slide 43, a mano, sotto l'assioma (10): «$\hookrightarrow$ EQUIVALENTEMENTE: AMMETTE UN MAGGIORANTE»

## Svolti a lezione

### $A = [-1, 2]$: maggioranti e minoranti (slide 31)

maggioranti per $A$: $[2, +\infty)$. minoranti: $(-\infty, -1]$ $\Rightarrow$ $A$ è limitato

### Esercizio: $x \leq \frac1n\ \ \forall n \in \mathbb{N} \setminus \{0\}$, dimostrare che $x \leq 0$ (slide 38)

Testo: sia $x \in \mathbb{R}$ un numero reale tale che $x \leq \frac1n\ \ \forall n \in \mathbb{N} \setminus \{0\}$. Dimostrare, usando la proprietà di Archimede, che allora $x \leq 0$. «ovvero sia $x$ un minorante dell'ins. $A = \left\{1, \frac12, \frac13, \frac14, \dots\right\}$»

> [!example]- Svolgimento del prof
> p.a. (per assurdo): supponiamo $x > 0$.
> Siccome $x \leq \frac1n\ \ \forall n \in \mathbb{N}$, $\frac1x \geq n\ \ \forall n \in \mathbb{N}$, ovvero $\frac1x$ è maggiorante per $\mathbb{N}$.
> Questo contraddice la propr. Archimede. $\square$
> «Qui abbiamo usato $x > 0$»

### $C = \left\{\frac{2n+1}{n+1} : n \in \mathbb{N}\right\}$: chi è l'estremo superiore $M$ di $C$? (slide 41)

$C = \left\{1, \frac32, \frac53, \frac74, \frac95, \dots\right\}$. Chi è l'estremo superiore $M$ di $C$? Vogliamo mostrare che $M = 2$.

> [!example]- Svolgimento del prof
> - $2$ è maggiorante per $C$
>
> Vogliamo mostrare $2 \geq \frac{2n+1}{n+1}\ \ \forall n \in \mathbb{N}$
> $$
> \frac{2n+1}{n+1} = \frac{(2n+2) - 1}{n+1} = \frac{2(n+1)}{n+1} - \frac{1}{n+1} = 2 - \frac{1}{n+1} \leq 2
> $$
> («$> 0$» sotto $\frac{1}{n+1}$)
>
> - $2$ è il più piccolo dei maggioranti
>
> Sia $M < 2$. Sia $a := 2 - M > 0$.
> $\Rightarrow$ (propr. Archim.) $\exists n \in \mathbb{N}$ t.c. $n > \frac1a$
> $\Rightarrow n + 1 > \frac1a \Rightarrow \frac{1}{n+1} < a$
> $$
> \Rightarrow\ \frac{2n+1}{n+1} = 2 - \frac{1}{n+1} > 2 - a = M
> $$
> («EC», slide precedente)
> $\Rightarrow$ $M$ non è maggiorante

### Esercitazione 3, esercizio 4.1: $A = \left\{x_n = \frac{5n-2}{2n+1},\ n \in \mathbb{N}\right\}$

Dall'esercitazione 3 del tutor, «4. ESERCIZI SULLE SUCCESSIONI». Prima dell'esercizio il tutor scrive: caratterizzazione del sup: $A \subseteq \mathbb{R}$ limitato superiormente $\Rightarrow$ $\exists s = \sup(A)$ [assioma di completezza] ($A \neq \emptyset$); $s = \sup(A)$ se e solo se: i) $s \geq a\ \ \forall a \in A$ ($s$ è maggiorante); ii) $\forall \varepsilon > 0\ \ \exists a \in A$ t.c. $s - \varepsilon < a$ ($s$ è il più piccolo dei maggioranti). Caratterizzazione dell'inf: $i = \inf(A)$ se e solo se: i) $i \leq a\ \ \forall a \in A$ ($i$ è minorante); ii) $\forall \varepsilon > 0\ \ \exists a \in A$ t.c. $i + \varepsilon > a$ ($i$ è il più grande dei minoranti). Proprietà di Archimede: $\forall x, y > 0\ \ \exists n \in \mathbb{N}$ t.c. $xn > y$.

> [!example]- Svolgimento del tutor
> $A$ è una f. omografica.
> $n = 0$: $x_0 = -2$; $n = 1$: $x_1 = \frac33 = 1$; $n = 2$: $x_2 = \frac85$; $n = 3$: $x_3 = \frac{13}{7}$; $\ldots$
> $$
> A = \left\{x_n = \frac{\frac52(2n+1) - \frac92}{2n+1},\ n \in \mathbb{N}\right\} = \left\{x_n = \frac52 - \frac{9}{4n+2},\ n \in \mathbb{N}\right\}
> $$
> *(a lato il tutor fa la divisione: $5n - 2 = \frac52 (2n + 1) - \frac92$)*
>
> CLAIM 1: $\min(A) = -2$.
> PROOF. $x_0 = -2$ $\checkmark$
> $-2 \leq \frac{5n-2}{2n+1}\ \ \forall n \in \mathbb{N}$?
> $-2(2n+1) \leq 5n - 2$
> $-4n - 2 \leq 5n - 2$
> $9n \geq 0$
> $n \geq 0$ $\checkmark$
>
> CLAIM 2: $\sup(A) = \frac52$.
> - $\frac52 \geq \frac{5n-2}{2n+1}\ \ \forall n \in \mathbb{N}$?
> $5(2n+1) \geq (5n-2) \cdot 2$
> $10n + 5 \geq 10n - 4$
> $5 \geq -4$ $\checkmark$
> - $\forall \varepsilon > 0\ \ \exists a \in A$ t.c. $a > \frac52 - \varepsilon$?
> $\exists \bar{n} \in \mathbb{N}$ t.c. $\frac{5\bar{n} - 2}{2\bar{n} + 1} > \frac52 - \varepsilon \to \frac52 - \frac{9}{4\bar{n} + 2} > \frac52 - \varepsilon \to \varepsilon > \frac{9}{4\bar{n} + 2} \to \varepsilon(4\bar{n} + 2) > 9$
> P. ARCH. $\exists k \in \mathbb{N}$ t.c. $\varepsilon k > 9 \to \varepsilon(4k + 2) > 9$
> quindi basta prendere $\bar{n} = k$ $\checkmark$

### Esercitazione 4, esercizio 1.1: $B = \left\{\frac{2n}{n^2+1} : n \in \mathbb{Z}\right\}$ (tutoraggio del 13/10)

> [!example]- Svolgimento del tutor
> Sia $b_n = \frac{2n}{n^2+1}$.
>
> OSSERVAZIONE 1. $b_{-n} = -b_n$. Infatti $b_{-n} = \frac{2(-n)}{(-n)^2+1} = -\frac{2n}{n^2+1} = -b_n$.
>
> OSSERVAZIONE 2. $b_0 = 0$.
> $$
> \vert b_n\vert = \left\vert\frac{2n}{n^2+1}\right\vert = \frac{2\vert n\vert}{n^2+1} < \frac{2\vert n\vert}{n^2} = \frac{2}{\vert n\vert} < 2\quad \forall n \neq 0
> $$
> *(il foglio dice $\frac{2}{\vert n\vert} < 2$, corretto: $\frac{2}{\vert n\vert} \leq 2$, con uguaglianza per $\vert n\vert = 1$; la conclusione $\vert b_n\vert < 2$ resta vera per il primo $<$)*
> È LIMITATA $\to$ ammette sup e inf.
>
> STUDIAMO $n \geq 0$: $n = 0$: $b_0 = 0$; $b_1 = \frac22 = 1$; $b_2 = \frac45$; $b_3 = \frac{6}{10} = \frac35$; $b_4 = \frac{8}{17}$.
>
> CLAIM 1. $\frac{2n}{n^2+1}$, $n \geq 1$, è DECRESCENTE.
> PROOF. $\frac{2(n+1)}{(n+1)^2+1} < \frac{2n}{n^2+1}$
> $(2n+2)(n^2+1) < 2n(n^2 + 2n + 2)$
> $2n^3 + 2n^2 + 2n + 2 < 2n^3 + 4n^2 + 4n$
> $2n^2 + 2n - 2 > 0$
> $n^2 + n - 1 > 0$
> $n_{1,2} = \frac{-1 \pm \sqrt5}{2}$, $n_1 = \frac{-1+\sqrt5}{2}$, $n_2 = \frac{-1-\sqrt5}{2}$; la parabola è positiva fuori dalle radici: vera $\forall n \geq 1$. $\blacksquare$
>
> TEOREMA SUCCESSIONI MONOTONE. $\{a_n\}$ successione monotona decrescente (crescente) $\to$ allora esiste $\lim_{n \to +\infty} a_n$ e $\inf\{a_n\} = \lim_{n \to +\infty} a_n$ ($\sup\{a_n\} = \lim_{n \to +\infty} a_n$).
> Quindi per $n \geq 1$: $\inf\left\{\frac{2n}{n^2+1}\right\}_{n \geq 1} = \lim_{n \to +\infty} \frac{2n}{n^2+1} = 0$
>
> CLAIM: $\max(B) = 1$, $\min(B) = -1$.
> DIM. $\max(B) = 1$:
> - $1 \in B$: $b_1 = \frac22 = 1$ $\checkmark$
> - $1 \geq b\ \ \forall b \in B$: $1 > 0 \geq \frac{2n}{n^2+1}$ per $n \leq 0$; $1 \geq \frac{2n}{n^2+1}$ $\forall n \geq 0$?
> $n^2 + 1 \geq 2n$
> $n^2 + 1 - 2n \geq 0$
> $(n-1)^2 \geq 0$ vero $\forall n$
>
> MODO 2. Potevamo osservare che $\left\vert\frac{2n}{n^2+1}\right\vert \leq 1$; infatti $2\vert n\vert \leq n^2 + 1$, $n^2 + 1 - 2\vert n\vert \geq 0$, $(\vert n\vert - 1)^2 \geq 0$ vero $\forall n$.
> $-1 \leq \frac{2n}{n^2+1} \leq 1$
> $b_1 = 1$, $b_{-1} = -1$ $\to$ $\max(B) = 1$, $\min(B) = -1$

### Esercitazione 4, esercizio 1.2: $E = \left\{\sin\left(\frac\pi2 \frac{n^4}{n^4+1}\right) : n \in \mathbb{N}\right\}$ (tutoraggio del 13/10)

> [!example]- Svolgimento del tutor
> OSSERVAZIONE. $\frac{n^4}{n^4+1} = \frac{n^4+1-1}{n^4+1} = 1 - \frac{1}{n^4+1}$
> $0 \leq \frac{n^4}{n^4+1} < 1 \to 0 \leq \frac\pi2\left(\frac{n^4}{n^4+1}\right) < \frac\pi2$
>
> $y = \sin x$, $x \in \left[0, \frac\pi2\right]$ è monotona crescente (e continua)
> $\to \sup\left\{\sin\left(\frac\pi2 \frac{n^4}{n^4+1}\right)\right\} = \sin\left(\frac\pi2 \sup\left\{\frac{n^4}{n^4+1}\right\}_{n \in \mathbb{N}}\right)$
> $\to \inf\left\{\sin\left(\frac\pi2 \frac{n^4}{n^4+1}\right)\right\} = \sin\left(\frac\pi2 \inf\left\{\frac{n^4}{n^4+1}\right\}\right)$
>
> MORALE: studiamo $A = \left\{\frac{n^4}{n^4+1} : n \in \mathbb{N}\right\} = \left\{1 - \frac{1}{n^4+1} : n \in \mathbb{N}\right\}$
>
> CLAIM 1. $\min(A) = 0$.
> PROOF. $a_0 = 0$. $0 \leq 1 - \frac{1}{n^4+1}\ \ \forall n \in \mathbb{N}$?
> $\frac{1}{n^4+1} \leq 1 \to 1 \leq n^4 + 1$, $n^4 \geq 0$ vero $\forall n$
>
> CLAIM 2. $\sup(A) = 1$.
> PROOF. i) $1$ è maggiorante: $1 \geq a\ \ \forall a \in A$.
> DIM. $1 \geq 1 - \frac{1}{n^4+1}$, $\frac{1}{n^4+1} > 0\ \ \forall n$
> ii) È IL PIÙ PICCOLO DEI MAGGIORANTI: $\forall \varepsilon > 0\ \ \exists a \in A$ t.c. $1 - \varepsilon < a$
> $\exists \bar{n} \in \mathbb{N}$ t.c. $1 - \varepsilon < 1 - \frac{1}{\bar{n}^4+1}$
> DIM. $1 - \varepsilon < 1 - \frac{1}{\bar{n}^4+1} \Leftrightarrow (\bar{n}^4 + 1)\varepsilon > 1$
> VERO per P. ARCH.: infatti $\exists k \in \mathbb{N}$ t.c. $k\varepsilon > 1 \to (k^4 + 1)\varepsilon > 1$, quindi prendo $\bar{n} = k$
> (P. ARCHIMEDEA: $x, y > 0$ allora $\exists n \in \mathbb{N}$ t.c. $nx > y$)

> [!example]- Condizione (2) direttamente su $E$
> 1. Sia $\varepsilon \in (0, 1)$ (per $\varepsilon \geq 1$ va bene qualunque elemento, perché $\sin t_n \geq 0 > 1 - \varepsilon$). Con $t_n = \frac\pi2 \frac{n^4}{n^4+1}$, sia $t^* = \arcsin(1 - \varepsilon) \in \left[0, \frac\pi2\right)$.
> 2. Il seno è crescente su $\left[0, \frac\pi2\right]$: $\sin t_n > 1 - \varepsilon = \sin t^* \Leftrightarrow t_n > t^*$.
> 3. $t_n > t^* \Leftrightarrow 1 - \frac{1}{n^4+1} > \frac{2t^*}{\pi} \Leftrightarrow \frac{1}{n^4+1} < \eta$, con $\eta = 1 - \frac{2t^*}{\pi} > 0$.
> 4. Per Archimede $\exists k \in \mathbb{N} : k > \frac1\eta$. Con $n = k$: $n^4 + 1 > k > \frac1\eta$, quindi $\frac{1}{n^4+1} < \eta$ e $\sin t_n > 1 - \varepsilon$.
> 5. $\sin t_n < \sin\frac\pi2 = 1$ per ogni $n$: $1$ non è un massimo. $\min E = \inf E = 0$ perché $\sin t_0 = 0 \in E$ e $\sin t_n \geq 0$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Esercitazione 4, esercizio 1.3: $A = \left\{\frac{3n\cos((n+1)\pi) - 1}{2n} : n \geq 1,\ n \in \mathbb{N}\right\}$ (tutoraggio del 13/10)

> [!example]- Svolgimento del tutor
> $$
> A = \left\{\frac{3n\,(-1)^{n+1} - 1}{2n} : n \geq 1,\ n \in \mathbb{N}\right\}
> $$
> (disegno sul cerchio: $n = 1, 3$ a destra, $n = 2, 4$ a sinistra)
>
> $n$ PARI, $n = 2m$, $m \geq 1$:
> $$
> P = \left\{\frac{3(2m)\cdot(-1) - 1}{2(2m)} : m \geq 1\right\} = \left\{\frac{-6m - 1}{4m} : m \geq 1\right\}
> $$
> $n$ DISPARI, $n = 2m - 1$, $m \geq 1$:
> $$
> D = \left\{\frac{3(2m-1) - 1}{2(2m-1)} : m \geq 1\right\} = \left\{\frac{6m - 4}{4m - 2} : m \geq 1\right\}
> $$

> [!example]- Conclusione, $\sup A$ e $\inf A$ (dalle note, il tutor si ferma alla divisione in $P$ e $D$)
> 1. $n$ dispari: $x_n = \frac{3n-1}{2n} = \frac32 - \frac{1}{2n}$. $n$ pari: $x_n = \frac{-3n-1}{2n} = -\frac32 - \frac{1}{2n}$.
> 2. $\sup A = \frac32$. (1): sui dispari $x_n = \frac32 - \frac{1}{2n} < \frac32$, sui pari $x_n < 0 < \frac32$.
> 3. (2): sia $\varepsilon > 0$. Cerco $n$ dispari con $\frac32 - \frac{1}{2n} > \frac32 - \varepsilon \Leftrightarrow \frac{1}{2n} < \varepsilon \Leftrightarrow n > \frac{1}{2\varepsilon}$. Per Archimede $\exists k \in \mathbb{N} : k > \frac1\varepsilon$; con $n = 2k + 1$, dispari, $n > 2k > \frac2\varepsilon > \frac{1}{2\varepsilon}$, quindi $x_n > \frac32 - \varepsilon$.
> 4. $x_n = \frac32$ richiederebbe $\frac{1}{2n} = 0$: niente massimo.
> 5. $\inf A = \min A = -\frac74$: $x_2 = \frac{-6-1}{4} = -\frac74 \in A$. (3) sui pari: $n \geq 2$ dà $\frac{1}{2n} \leq \frac14$, quindi $x_n = -\frac32 - \frac{1}{2n} \geq -\frac74$; sui dispari $x_n \geq 1 > -\frac74$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Esercitazione 4, esercizio 1.4: $C = \left\{\log\left(4 + \frac{3n\cos((n+1)\pi) - 1}{2n}\right) : n \geq 1,\ n \in \mathbb{N}\right\}$ (tutoraggio del 13/10)

Il tutor lo segna: «ESERCIZIO NON SVOLTO A LEZIONE».

> [!example]- Svolgimento del tutor
> Consideriamo prima l'argomento: $4 + \frac{3n\cos((n+1)\pi) - 1}{2n}$.
> $n = 1$: $4 + \frac{3 \cdot 1 - 1}{2 \cdot 1} = 4 - \frac22 = 3$ *(il foglio dice $4 - \frac22 = 3$, corretto: $4 + \frac22 = 5$)*
> $n = 2$: $4 + \frac{3 \cdot 2 \cdot (-1) - 1}{4} = 4 - \frac74 = \frac94$
> $n = 3$: $4 + \frac{3 \cdot 3 - 1}{6} = 4 + \frac43 = \frac{16}{3}$
> $n = 4$: $4 + \frac{3 \cdot 4 \cdot (-1) - 1}{8} = 4 - \frac{13}{8} = \frac{19}{8}$
> $\ldots$
> In generale, per $n$ pari l'argomento diventa: $4 + \frac{-3n-1}{2n} = 4 - \frac{3n+1}{2n}$, mentre per $n$ dispari: $4 + \frac{3n-1}{2n}$.
>
> Studiamo la successione per $n$ pari. Consideriamo prima l'argomento: $n = 2m$, $m \geq 1$.
> $$
> 4 - \frac{3n+1}{2n} = 4 - \frac{6m+1}{4m} = 4 - \left(\frac64 + \frac{1}{4m}\right) = 4 - \frac64 - \frac{1}{4m} = \frac52 - \frac{1}{4m}
> $$
> CLAIM 1. $\left\{\log\left(\frac52 - \frac{1}{4m}\right)\right\}_{m \geq 1}$ è monotona strettamente crescente.
> PROOF. $\log\left(\frac52 - \frac{1}{4(m+1)}\right) > \log\left(\frac52 - \frac{1}{4m}\right) \Leftrightarrow \frac52 - \frac{1}{4(m+1)} > \frac52 - \frac{1}{4m} \Leftrightarrow 4m < 4m + 4$ vero $\forall m \geq 1$. $\blacksquare$
> Quindi, per il teorema sulle successioni monotone: $P = \left\{\log\left(\frac52 - \frac{1}{4m}\right)\right\}_{m \geq 1}$
> $\inf(P) = \min(P) = \log\left(\frac52 - \frac14\right) = \log\frac94$
> $\sup(P) = \lim_{m \to +\infty} \log\left(\frac52 - \frac{1}{4m}\right) = \log\frac52$
>
> Analogamente, procediamo per $n$ dispari: $n = 2m - 1$, $m \geq 1$.
> $$
> 4 + \frac{3n-1}{2n} = 4 + \frac{3(2m-1) - 1}{2(2m-1)} = 4 + \frac{6m-4}{4m-2} = 4 + \frac{3m-2}{2m-1} = 4 + \frac{\frac32(2m-1) - \frac12}{2m-1} = 4 + \frac32 - \frac{1}{2(2m-1)} = \frac{11}{2} - \frac{1}{4m-2}
> $$
> *(a lato il tutor fa la divisione: $3m - 2 = \frac32(2m-1) - \frac12$)*
> CLAIM 2. $\left\{\log\left(\frac{11}{2} - \frac{1}{4m-2}\right)\right\}_{m \geq 1}$ è monotona strettamente crescente.
> PROOF. $\log\left(\frac{11}{2} - \frac{1}{4(m+1)-2}\right) > \log\left(\frac{11}{2} - \frac{1}{4m-2}\right) \Leftrightarrow \frac{11}{2} - \frac{1}{4(m+1)-2} > \frac{11}{2} - \frac{1}{4m-2} \Leftrightarrow 4m - 2 < 4(m+1) - 2 \Leftrightarrow 0 < 4$ vero $\forall m \geq 1$. $\blacksquare$
> Quindi, per il teorema sulle successioni monotone: $D = \left\{\log\left(\frac{11}{2} - \frac{1}{4m-2}\right)\right\}_{m \geq 1}$
> $\min(D) = \inf(D) = \log\left(\frac{11}{2} - \frac{1}{4 \cdot 1 - 2}\right) = \log 5$
> $\sup(D) = \lim_{m \to +\infty} \log\left(\frac{11}{2} - \frac{1}{4m-2}\right) = \log\left(\frac{11}{2}\right)$
>
> Da cui si ha:
> $$
> \sup(C) = \max\{\sup(P), \sup(D)\} = \max\left\{\log\frac52, \log\frac{11}{2}\right\} = \log\frac{11}{2}
> $$
> $$
> \inf(C) = \min\{\inf(P), \inf(D)\} = \min\left\{\log\frac94, \log 5\right\} = \log\frac94
> $$

> [!example]- Condizioni (1) e (2) su $C$ (dalle note)
> 1. $\min C = \inf C = \log\frac94$: per l'esercizio 1.3 $x_n \geq -\frac74$ con $x_2 = -\frac74$, quindi $4 + x_n \geq \frac94$ con uguaglianza per $n = 2$; $\log$ è crescente e $\log\frac94 = \log(4 + x_2) \in C$.
> 2. (1): $x_n < \frac32$, quindi $4 + x_n < \frac{11}{2}$ e, con $\log$ strettamente crescente, $\log(4 + x_n) < \log\frac{11}{2}$. L'uguaglianza non vale mai: niente massimo.
> 3. (2): sia $\varepsilon > 0$. Cerco $n$ dispari con $\log\left(\frac{11}{2} - \frac{1}{2n}\right) > \log\frac{11}{2} - \varepsilon$.
> 4. Applico $e^{(\cdot)}$, crescente: $\frac{11}{2} - \frac{1}{2n} > \frac{11}{2}e^{-\varepsilon} \Leftrightarrow \frac{1}{2n} < \frac{11}{2}\left(1 - e^{-\varepsilon}\right) =: \eta$, con $\eta > 0$ perché $e^{-\varepsilon} < 1$.
> 5. Per Archimede $\exists k \in \mathbb{N} : k > \frac1\eta$. Con $n = 2k + 1$, dispari: $2n > n > k > \frac1\eta$, quindi $\frac{1}{2n} < \eta$ e vale la (2).
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

## Crocette delle provette

### simulazione, domanda 1

La negazione della proposizione “$x_0 \in \mathbb{R}$ è punto di accumulazione per l'insieme $A$” equivale a

- a) esiste $r > 0$ tale che $A \cap (x_0 - r, x_0 + r)$ è vuoto.
- b) per ogni $r > 0$, per ogni $x \in A$, vale $\vert x - x_0\vert \ge r$.
- c) per ogni $r > 0$ esiste $x \in A$ tale che $\vert x - x_0\vert \ge r$.
- d) $\exists r > 0$ tale che per ogni $x \in A \setminus \{x_0\}$ vale $\vert x - x_0\vert \ge r$.

> [!example]- Soluzione
> **d**. $x_0$ è di accumulazione per $A$ se $\forall r > 0$ $\exists x \in A \setminus \{x_0\}$ con $\vert x - x_0\vert < r$; la negazione scambia i quantificatori e inverte la disuguaglianza. *(conto mio, la chiave dà solo la risposta)*

## Esercizi delle provette

### 2025, esercizio 2 (a), 12 punti in tutto

Si consideri l'insieme
$$
A := \left\{x \in \mathbb{R} : x = \frac{n}{n+1} + (-1)^n,\ n \in \mathbb{N}\right\}.
$$
Determinare l'estremo superiore e l'estremo inferiore di $A$ e dire se $A$ ammette massimo e/o minimo.

> [!example]- Soluzione
> $$
> P = \left\{x \in \mathbb{R} : x = \frac{n}{n+1} + (-1)^n,\ n \in \mathbb{N},\ n \text{ pari}\right\} = \left\{x \in \mathbb{R} : x = 1 - \frac{1}{2k+1} + 1,\ k \in \mathbb{N}\right\} = \left\{x \in \mathbb{R} : x = 2 - \frac{1}{2k+1},\ k \in \mathbb{N}\right\}
> $$
> $x_{2k} = \left\{2 - \frac{1}{2k+1}\right\}_{k\in\mathbb{N}}$ è una successione monotona crescente. Quindi
> $$
> \min\{x_{2k}\}_{k\in\mathbb{N}} = x_0 = 2 - 1 = 1
> $$
> $$
> \sup\{x_{2k}\}_{k\in\mathbb{N}} = \lim_{k\to+\infty} x_{2k} = \lim_{k\to+\infty} 2 - \frac{1}{2k+1} = 2
> $$
> Analogamente
> $$
> D = \left\{x \in \mathbb{R} : x = \frac{n}{n+1} + (-1)^n,\ n \in \mathbb{N},\ n \text{ dispari}\right\} = \left\{x \in \mathbb{R} : x = 1 - \frac{1}{2k+2} - 1,\ k \in \mathbb{N}\right\} = \left\{x \in \mathbb{R} : x = 0 - \frac{1}{2k+2},\ k \in \mathbb{N}\right\}
> $$
> $x_{2k+1} = \left\{-\frac{1}{2k+2}\right\}_{k\in\mathbb{N}}$ è una successione monotona crescente. Quindi
> $$
> \min\{x_{2k+1}\}_{k\in\mathbb{N}} = x_1 \underset{(k=0)}{=} -\frac{1}{2}
> $$
> $$
> \sup\{x_{2k+1}\}_{k\in\mathbb{N}} = \lim_{k\to+\infty} x_{2k+1} = \lim_{k\to+\infty} -\frac{1}{2k+2} = 0
> $$
> Poiché $A = P \cup D$, si ha che
> $$
> \min A = \min\left\{1, -\frac{1}{2}\right\} = -\frac{1}{2}
> $$
> $$
> \sup A = \max\{0, 2\} = 2.
> $$
> Per verificare che $2$ non è massimo per $A$ basta mostrare che:
> i) $2 \notin D$: vero perché $2 > 0 = \sup(D)$
> ii) $2 \notin P$: infatti $2 - \frac{1}{2k+1} = 2 \Leftrightarrow \frac{1}{2k+1} = 0$, assurdo.

### 2022 A, esercizio 2, 6 punti

Calcolare estremo superiore ed inferiore del seguente insieme

$$
A := \left\{\frac{n}{2n - 1} \;\Big\vert\; n \in \mathbb{N} \setminus \{0\}\right\}.
$$

Si determinino inoltre se esistono massimo e minimo di $A$ e in tal caso, calcolarli.

> [!example]- Soluzione
> $$
> A = \left\{\frac{n}{2n - 1} \;\Big\vert\; n \in \mathbb{N} \setminus \{0\}\right\} = \left\{\frac{1}{2} \cdot \frac{2n}{2n - 1} \;\Big\vert\; n \in \mathbb{N} \setminus \{0\}\right\}
> $$
> $$
> = \left\{\frac{1}{2} \cdot \frac{2n - 1 + 1}{2n - 1} \;\Big\vert\; n \in \mathbb{N} \setminus \{0\}\right\} = \left\{\frac{1}{2}\left(1 + \frac{1}{2n - 1}\right) \;\Big\vert\; n \in \mathbb{N} \setminus \{0\}\right\}
> $$
> CLAIM 1: $a_n = \left\{\frac{1}{2}\left(1 + \frac{1}{2n - 1}\right)\right\}_{n \in \mathbb{N} \setminus \{0\}}$ è successione monotona strettamente DECRESCENTE.
> PROOF. Verifichiamo per quali $n \in \mathbb{N} \setminus \{0\}$ vale $a_{n+1} < a_n$:
> $$
> \frac{1}{2}\left(1 + \frac{1}{2(n + 1) - 1}\right) < \frac{1}{2}\left(1 + \frac{1}{2n - 1}\right)
> $$
> $$
> \iff \frac{1}{2(n + 1) - 1} < \frac{1}{2n - 1}
> $$
> $$
> \iff \frac{1}{2n + 1} < \frac{1}{2n - 1} \iff 2n - 1 < 2n + 1 \iff -1 < 1
> $$
> Quindi $\forall n \in \mathbb{N} \setminus \{0\}$ $a_{n+1} < a_n \to a_n = \left\{\frac{1}{2}\left(1 + \frac{1}{2n - 1}\right)\right\}_{n \in \mathbb{N} \setminus \{0\}}$ è monotona strettamente decrescente.
> Quindi:
> $$
> \max(A) = a_1 = \frac{1}{2 \cdot 1 - 1} = \frac{1}{1} = 1
> $$
> $$
> \inf(A) = \lim_{n \to +\infty} \frac{n}{2n - 1} = \frac{1}{2}
> $$
> Chiediamoci se $\frac{1}{2}$ è anche minimo di $A$: $\frac{1}{2} \overset{?}{=} \min(A)$.
> Ciò equivale a chiedersi se $\exists n \in \mathbb{N} \setminus \{0\}$ t.c. $\frac{1}{2} = \frac{n}{2n - 1}$?
> $$
> \frac{1}{2} = \frac{n}{2n - 1} \iff 2n - 1 = 2n \iff -1 = 0 \quad \text{(Falso)}
> $$
> Quindi $\frac{1}{2} \notin A$ e $\frac{1}{2}$ non è minimo di $A$.
> $$
> \max(A) = \sup(A) = 1, \quad \inf(A) = \frac{1}{2}, \quad \nexists \min(A)
> $$

## Esercizi dei fogli e delle esercitazioni

Consegna del III tutoraggio (Barbon, Favari, Bellomo), «Estremo Superiore e Inferiore con Massimi e Minimi»: «Determinare estremo superiore e inferiore dei seguenti insiemi, specificando se coincidono con, rispettivamente, il massimo e il minimo. Giustificare ogni affermazione! (gli esercizi con (*) sono quelli più difficili).»

### Tutoraggio 3 complementi, esercizio 1

$A = (0, 1)$

> [!example]- Soluzione
> **$\sup A = 1$.**
> 1. (1): ogni $x \in (0, 1)$ ha $x < 1$.
> 2. (2): sia $\varepsilon > 0$. Se $\varepsilon \leq 1$ prendo $x = 1 - \frac\varepsilon2$: sta in $(0, 1)$ perché $0 < \frac\varepsilon2 \leq \frac12$ dà $\frac12 \leq x < 1$, ed è $> 1 - \varepsilon$ perché $\frac\varepsilon2 < \varepsilon$. Se $\varepsilon > 1$ va bene $x = \frac12$.
>
> **$\inf A = 0$.**
> 1. (3): ogni $x \in A$ ha $x > 0$.
> 2. (4): sia $\varepsilon > 0$. Se $\varepsilon \leq 1$ prendo $x = \frac\varepsilon2 \in \left(0, \frac12\right] \subset A$, con $x < \varepsilon$. Se $\varepsilon > 1$ va bene $x = \frac12 < \varepsilon$.
>
> **Max e min.** $1 \notin A$ e $0 \notin A$: niente massimo, niente minimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 2

$A = (0, 1]$

> [!example]- Soluzione
> **$\max A = \sup A = 1$.** $1 \in A$ e $x \leq 1$ per ogni $x \in A$: un maggiorante che sta in $A$ è il massimo, quindi anche il sup. La (2) vale con $x = 1$: $1 > 1 - \varepsilon$ per ogni $\varepsilon > 0$.
>
> **$\inf A = 0$.**
> 1. (3): $x > 0$ per ogni $x \in A$.
> 2. (4): sia $\varepsilon > 0$. Se $\varepsilon \leq 2$ prendo $x = \frac\varepsilon2 \in (0, 1] = A$, con $\frac\varepsilon2 < \varepsilon$. Se $\varepsilon > 2$ va bene $x = 1 < \varepsilon$.
>
> **Min?** $0 \notin A$: il minimo non esiste.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 3

$A = \left\{\frac{1}{n+1} : n \in \mathbb{N}\right\}$

> [!example]- Soluzione
> $A = \left\{1, \frac12, \frac13, \frac14, \dots\right\}$.
>
> **$\max A = \sup A = 1$.**
> 1. Con $n = 0$: $\frac{1}{0+1} = 1 \in A$.
> 2. (1): $n + 1 \geq 1$, quindi $\frac{1}{n+1} \leq 1$ per ogni $n$.
> 3. Maggiorante che sta in $A$: è il massimo.
>
> **$\inf A = 0$.**
> 1. (3): $\frac{1}{n+1} > 0$ per ogni $n$.
> 2. (4): sia $\varepsilon > 0$. Voglio $\frac{1}{n+1} < \varepsilon$.
> 3. $\frac{1}{n+1} < \varepsilon \Leftrightarrow n + 1 > \frac1\varepsilon$.
> 4. Per Archimede $\exists \bar{n} \in \mathbb{N} : \bar{n} > \frac1\varepsilon$. Allora $\bar{n} + 1 > \bar{n} > \frac1\varepsilon$.
> 5. Rileggendo il passo 3 all'indietro: $x_{\bar{n}} = \frac{1}{\bar{n}+1} < \varepsilon$.
>
> **Min?** $\frac{1}{n+1} = 0$ non ha soluzioni: $0 \notin A$, il minimo non esiste.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 4

$A = \left\{\frac{(-1)^n n}{n+1} : n \in \mathbb{N}\right\}$

> [!example]- Soluzione
> Primi termini: $0, -\frac12, \frac23, -\frac34, \frac45, \dots$ Poiché $\frac{n}{n+1} = 1 - \frac{1}{n+1}$:
> - $n$ pari: $x_n = 1 - \frac{1}{n+1}$, cioè $0, \frac23, \frac45, \frac67, \dots$, che crescono verso $1$;
> - $n$ dispari: $x_n = -1 + \frac{1}{n+1}$, cioè $-\frac12, -\frac34, -\frac56, \dots$, che scendono verso $-1$.
>
> **$\sup A = 1$.**
> 1. (1): sui pari $x_n = 1 - \frac{1}{n+1} < 1$; sui dispari $x_n < 0 < 1$.
> 2. (2): sia $\varepsilon > 0$. Cerco $n$ pari con $1 - \frac{1}{n+1} > 1 - \varepsilon$, cioè $\frac{1}{n+1} < \varepsilon$, cioè $n + 1 > \frac1\varepsilon$.
> 3. Scrivo $n = 2k$: serve $2k + 1 > \frac1\varepsilon$. Per Archimede $\exists k \in \mathbb{N} : k > \frac1\varepsilon$, quindi $2k + 1 > k > \frac1\varepsilon$.
> 4. Con $\bar{n} = 2k$, pari, rileggendo all'indietro $x_{\bar{n}} > 1 - \varepsilon$.
>
> **$\inf A = -1$.**
> 1. (3): sui dispari $x_n = -1 + \frac{1}{n+1} > -1$; sui pari $x_n \geq 0 > -1$.
> 2. (4): sia $\varepsilon > 0$. Cerco $n$ dispari, $n = 2k + 1$, con $-1 + \frac{1}{2k+2} < -1 + \varepsilon$, cioè $2k + 2 > \frac1\varepsilon$. Per Archimede $\exists k \in \mathbb{N} : k > \frac1\varepsilon$, quindi $2k + 2 > k > \frac1\varepsilon$ e $\bar{n} = 2k + 1$ va bene.
>
> **Max e min.** $x_n = 1$ o $x_n = -1$ richiederebbe $\frac{1}{n+1} = 0$: niente massimo, niente minimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 5

$A = \left\{\frac{1}{2^n} : n \in \mathbb{N}\right\}$

> [!example]- Soluzione
> **$\max A = \sup A = 1$.** Con $n = 0$, $\frac{1}{2^0} = 1 \in A$; (1): $2^n \geq 1$ per ogni $n$, quindi $\frac{1}{2^n} \leq 1$.
>
> **$\inf A = 0$.**
> 1. (3): $\frac{1}{2^n} > 0$ per ogni $n$.
> 2. $2^n \geq n + 1$ per ogni $n \in \mathbb{N}$: per induzione, con $n = 0$ è $1 \geq 1$; se $2^n \geq n + 1$, allora $2^{n+1} = 2 \cdot 2^n \geq 2(n+1) = 2n + 2 \geq n + 2$.
> 3. Passando ai reciproci: $\frac{1}{2^n} \leq \frac{1}{n+1}$.
> 4. (4): sia $\varepsilon > 0$. Per Archimede $\exists \bar{n} \in \mathbb{N} : \bar{n} > \frac1\varepsilon$, quindi $\frac{1}{\bar{n}+1} < \varepsilon$ e $\frac{1}{2^{\bar{n}}} \leq \frac{1}{\bar{n}+1} < \varepsilon$.
>
> **Min?** $\frac{1}{2^n} = 0$ non ha soluzioni: niente minimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 6

$A = \left\{n + \frac{5}{n+1} : n \in \mathbb{N}\right\}$

> [!example]- Soluzione
> | $n$ | 0 | 1 | 2 | 3 | 4 |
> | --- | --- | --- | --- | --- | --- |
> | $x_n$ | $5$ | $\frac72$ | $\frac{11}{3}$ | $\frac{17}{4}$ | $5$ |
>
> **$\min A = \inf A = \frac72$.**
> 1. $\frac72 = x_1 \in A$.
> 2. (3): $n + \frac{5}{n+1} \geq \frac72$; moltiplico per $2(n+1) > 0$: $2n(n+1) + 10 \geq 7(n+1)$, cioè $2n^2 - 5n + 3 \geq 0$.
> 3. $2n^2 - 5n + 3 = (n-1)(2n-3)$, negativo solo per $1 < n < \frac32$, dove non c'è nessun naturale. Quindi la disuguaglianza vale per ogni $n \in \mathbb{N}$, con l'uguale in $n = 1$.
> 4. Un minorante che sta in $A$ è il minimo, quindi anche l'inf.
>
> **$\sup A = +\infty$.**
> 1. $\frac{5}{n+1} > 0$, quindi $x_n > n$.
> 2. Sia $M \in \mathbb{R}$. Per Archimede $\exists \bar{n} \in \mathbb{N} : \bar{n} > M$. Allora $x_{\bar{n}} > \bar{n} > M$: nessun $M$ è un maggiorante. Niente massimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 7

$A = \left\{n + \frac{2026}{n+1} : n \in \mathbb{N}\right\}$

> [!example]- Soluzione
> **$\sup A = +\infty$**, come nell'esercizio 6: $x_n > n$, e dato $M$, per Archimede $\exists \bar{n} \in \mathbb{N} : \bar{n} > M$, quindi $x_{\bar{n}} > \bar{n} > M$. Niente massimo.
>
> **Dove cambia segno la differenza dei termini consecutivi.**
> 1. $x_{n+1} - x_n = 1 + \frac{2026}{n+2} - \frac{2026}{n+1} = 1 - \frac{2026}{(n+1)(n+2)}$.
> 2. $x_{n+1} > x_n \Leftrightarrow (n+1)(n+2) > 2026$.
> 3. Con $n = 43$: $44 \cdot 45 = 1980 < 2026$, quindi $x_{44} < x_{43}$. Con $n = 44$: $45 \cdot 46 = 2070 > 2026$, quindi $x_{45} > x_{44}$.
> 4. Per $n \leq 43$ la successione scende, da $n = 44$ in poi sale.
>
> **$\min A = \inf A = x_{44} = 44 + \frac{2026}{45} = \frac{4006}{45}$.** Ogni termine è $\geq x_{44}$, e $x_{44} \in A$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 8

$A = \left\{x + \frac1x : x \in \mathbb{R},\ x > 0\right\}$

> [!example]- Soluzione
> Prove: $x = \frac12$ dà $\frac52$, $x = 1$ dà $2$, $x = 2$ dà $\frac52$.
>
> **$\min A = \inf A = 2$.**
> 1. $(x-1)^2 \geq 0$ per ogni $x$, cioè $x^2 + 1 \geq 2x$.
> 2. Divido per $x > 0$: $x + \frac1x \geq 2$.
> 3. Con $x = 1$ si ottiene $2$, quindi $2 \in A$: è il minimo e l'inf.
>
> **$\sup A = +\infty$.**
> 1. $\frac1x > 0$, quindi $x + \frac1x > x$.
> 2. Dato $M \in \mathbb{R}$, prendo $x = \vert M\vert + 1 > 0$: allora $x + \frac1x > \vert M\vert + 1 > M$. Niente massimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 complementi, esercizio 9 (*)

$A = \left\{\sqrt{n} - \lfloor\sqrt{n}\rfloor : n \in \mathbb{N}\right\}$

> [!example]- Soluzione
> **$\min A = \inf A = 0$.** Per definizione di parte intera $\lfloor\sqrt n\rfloor \leq \sqrt n$, quindi ogni elemento è $\geq 0$; e $0 \in A$ (con $n = 0$, o qualunque quadrato perfetto).
>
> **$\sup A = 1$.**
> 1. (1): $\sqrt n < \lfloor \sqrt n \rfloor + 1$, quindi $\sqrt n - \lfloor\sqrt n\rfloor < 1$.
> 2. (2): per $k \geq 1$ prendo $n = k^2 + 2k$. Siccome $k^2 \leq k^2 + 2k < (k+1)^2$, vale $k \leq \sqrt n < k + 1$, cioè $\lfloor\sqrt n\rfloor = k$.
> 3. Razionalizzo: $\sqrt{k^2 + 2k} - k = \frac{(k^2 + 2k) - k^2}{\sqrt{k^2 + 2k} + k} = \frac{2k}{\sqrt{k^2 + 2k} + k}$.
> 4. Il denominatore è $< (k+1) + k = 2k + 1$, quindi l'elemento è $> \frac{2k}{2k+1} = 1 - \frac{1}{2k+1}$.
> 5. Sia $\varepsilon > 0$. Per Archimede $\exists k \in \mathbb{N} : k > \frac1\varepsilon$, con $k \geq 1$ perché $\frac1\varepsilon > 0$; allora $2k + 1 > k > \frac1\varepsilon$, cioè $1 - \frac{1}{2k+1} > 1 - \varepsilon$.
> 6. Con $\bar{n} = k^2 + 2k$ l'elemento è $> 1 - \varepsilon$.
>
> **Max?** Ogni elemento è $< 1$: $1 \notin A$, niente massimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3 (Successioni e loro limiti), esercizio 1

Determinare l'estremo superiore e inferiore del seguente insieme, specificando se coincidono, rispettivamente, con il massimo e il minimo.
$$
A = \left\{\ln\left(1 + (-1)^n \frac{n}{n+1}\right) : n \in \mathbb{N}\right\}
$$
Ogni affermazione deve essere giustificata.

> [!example]- Soluzione
> **Pari**, $n = 2k$: l'argomento è $1 + \frac{n}{n+1} = \frac{2n+1}{n+1} = 2 - \frac{1}{n+1}$. Per $n = 0$ vale $1$ (elemento $\ln 1 = 0$), poi cresce verso $2$.
> **Dispari**, $n = 2k + 1$: l'argomento è $1 - \frac{n}{n+1} = \frac{1}{n+1}$. L'elemento è $\ln\frac{1}{n+1} = -\ln(n+1)$.
>
> **$\sup A = \ln 2$.**
> 1. (1) sui pari: l'argomento è $< 2$ e $\ln$ è crescente, quindi l'elemento è $< \ln 2$. Sui dispari: $n + 1 \geq 2$, quindi $-\ln(n+1) \leq -\ln 2 < 0 < \ln 2$.
> 2. (2): sia $\varepsilon > 0$. Cerco $n$ pari con $\ln\left(2 - \frac{1}{n+1}\right) > \ln 2 - \varepsilon$.
> 3. Applico $e^x$, crescente: $2 - \frac{1}{n+1} > e^{\ln 2 - \varepsilon} = 2e^{-\varepsilon} \Leftrightarrow \frac{1}{n+1} < 2\left(1 - e^{-\varepsilon}\right)$, positivo perché $e^{-\varepsilon} < 1$.
> 4. $\Leftrightarrow n + 1 > c$, con $c = \frac{1}{2(1 - e^{-\varepsilon})}$.
> 5. Per Archimede $\exists k \in \mathbb{N} : k > c$; con $n = 2k$ si ha $n + 1 = 2k + 1 > k > c$, e l'elemento è $> \ln 2 - \varepsilon$.
>
> **Max?** $\ln 2$ richiederebbe $\frac{1}{n+1} = 0$: niente massimo.
>
> **$\inf A = -\infty$.**
> 1. Dato $M \in \mathbb{R}$, cerco $n$ dispari con $-\ln(n+1) < M \Leftrightarrow \ln(n+1) > -M \Leftrightarrow n + 1 > e^{-M}$.
> 2. Per Archimede $\exists k \in \mathbb{N} : k > e^{-M}$. Con $n = 2k + 1$: $n + 1 = 2k + 2 > k > e^{-M}$, e l'elemento è $< M$.
> 3. Nessun $M$ è un minorante: niente minimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1 (2015-2016), esercizio 1

Dite se i seguenti insiemi sono limitati inferiormente/superiormente, limitati. In caso affermativo, determinate l'estremo superiore e l'estremo inferiore. Dite se sono massimo e/o minimo, rispettivamente.

### Foglio 1, esercizio 1 i)

$A = \left\{x_n = \frac{n^2 + 3n + 2}{n^2},\ n \in \mathbb{N},\ n \geq 1\right\}$

> [!example]- Soluzione
> $x_n = 1 + \frac3n + \frac{2}{n^2}$. Primi elementi: $x_1 = 6$, $x_2 = 3$, $x_3 = \frac{20}{9}$, $x_4 = \frac{15}{8}$: decrescente.
>
> **$\max A = \sup A = 6$.** $x_n \leq x_1 = 6$ per ogni $n$, e $6 \in A$.
>
> **$\inf A = 1$.**
> 1. (3): $\frac3n + \frac{2}{n^2} > 0$, quindi $x_n > 1$.
> 2. (4): sia $\eta > 1$, cioè $\eta = 1 + \varepsilon$ con $\varepsilon > 0$. Siccome $\frac{2}{n^2} \leq \frac2n$ per $n \geq 1$, basta $\frac5n < \varepsilon$, cioè $n > \frac5\varepsilon$, che esiste per Archimede. Per quell'$n$, $x_n \leq 1 + \frac5n < 1 + \varepsilon = \eta$.
>
> **Min?** $x_n = 1$ richiederebbe $\frac3n + \frac{2}{n^2} = 0$: impossibile. Il minimo non esiste. $A$ è limitato: $1 < x_n \leq 6$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 ii)

$A = \left\{x_n = \frac{3n - 2}{n},\ n \in \mathbb{N},\ n \geq 1\right\}$

> [!example]- Soluzione
> $x_n = 3 - \frac2n$. Primi termini: $x_1 = 1$, $x_2 = 2$, $x_3 = \frac73$, $x_4 = \frac52$.
>
> **$\min A = \inf A = 1$.** $x_1 = 1 \in A$; (3): $n \geq 1$ dà $\frac2n \leq 2$, quindi $x_n \geq 3 - 2 = 1$.
>
> **$\sup A = 3$.**
> 1. (1): $\frac2n > 0$, quindi $x_n < 3$.
> 2. (2): sia $\varepsilon > 0$. $3 - \frac2n > 3 - \varepsilon \Leftrightarrow \frac2n < \varepsilon \Leftrightarrow n > \frac2\varepsilon$.
> 3. Per Archimede $\exists \bar{n} \in \mathbb{N} : \bar{n} > \frac2\varepsilon$, e $\bar{n} \geq 1$ perché $\frac2\varepsilon > 0$. Rileggendo all'indietro, $x_{\bar{n}} > 3 - \varepsilon$.
>
> **Max?** $x_n = 3$ richiederebbe $\frac2n = 0$: niente massimo. $1 \leq x_n < 3$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 iii)

$A = \{x_n = n^2 - 2n - 3,\ n \in \mathbb{N},\ n \geq 1\}$

> [!example]- Soluzione
> $n^2 - 2n - 3 = (n-1)^2 - 4$.
>
> **$\min A = \inf A = -4$.** $(n-1)^2 \geq 0$, quindi $x_n \geq -4$; $x_1 = -4 \in A$.
>
> **$\sup A = +\infty$.**
> 1. Per $n \geq 1$, $k = n - 1$ è un naturale e $k^2 \geq k$.
> 2. Quindi $x_n = (n-1)^2 - 4 \geq (n-1) - 4 = n - 5$.
> 3. Dato $M \in \mathbb{R}$, per Archimede $\exists k \in \mathbb{N} : k > M$. Con $\bar{n} = k + 5 \geq 1$: $x_{\bar{n}} \geq \bar{n} - 5 = k > M$.
> 4. Nessun maggiorante: illimitato superiormente, niente massimo.
>
> $A$ è limitato inferiormente ma non superiormente.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 iv)

$A = \left\{x_n = (-1)^n \frac{3n - 1}{n},\ n \in \mathbb{N},\ n \geq 1\right\}$

> [!example]- Soluzione
> $\frac{3n-1}{n} = 3 - \frac1n$, quindi $x_n = (-1)^n\left(3 - \frac1n\right)$.
> - $n$ pari: $x_n = 3 - \frac1n$, cioè $\frac52, \frac{11}{4}, \frac{17}{6}, \dots$, crescenti verso $3$;
> - $n$ dispari: $x_n = -\left(3 - \frac1n\right)$, cioè $-2, -\frac83, -\frac{14}{5}, \dots$, decrescenti verso $-3$.
>
> **Limitato.** $0 < 3 - \frac1n < 3$, quindi $-3 < x_n < 3$.
>
> **$\sup A = 3$.** (1): $x_n < 3$ per ogni $n$. (2): sia $N < 3$ e $\varepsilon = 3 - N > 0$. Per Archimede esiste $k \geq 1$ con $k > \frac1\varepsilon$; prendo $n = 2k$, pari, con $\frac1n \leq \frac1k < \varepsilon$. Allora $x_n = 3 - \frac1n > 3 - \varepsilon = N$.
>
> **$\inf A = -3$.** Stesso ragionamento con $n = 2k + 1$ dispari: $\frac1n < \frac1k < \varepsilon$, quindi $x_n = -3 + \frac1n < -3 + \varepsilon$.
>
> **Max e min.** $x_n = \pm 3$ richiederebbe $\frac1n = 0$: né $3$ né $-3$ stanno in $A$. Niente massimo, niente minimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 v)

$A = \left\{x_n = (-1)^n \frac{3n + 1}{n},\ n \in \mathbb{N},\ n \geq 1\right\}$

> [!example]- Soluzione
> $\frac{3n+1}{n} = 3 + \frac1n$.
> - $n$ pari ($n \geq 2$): $x_n = 3 + \frac1n$, cioè $\frac72, \frac{13}{4}, \frac{19}{6}, \dots$, che scendono verso $3$;
> - $n$ dispari: $x_n = -3 - \frac1n$, cioè $-4, -\frac{10}{3}, -\frac{16}{5}, \dots$, che salgono verso $-3$.
>
> **$\max A = \sup A = \frac72$.** $x_2 = \frac72 \in A$. (1) pari: $n \geq 2$ dà $\frac1n \leq \frac12$, quindi $x_n \leq \frac72$; dispari: $x_n < 0 < \frac72$.
>
> **$\min A = \inf A = -4$.** $x_1 = -4 \in A$. (3) dispari: $n \geq 1$ dà $\frac1n \leq 1$, quindi $x_n = -3 - \frac1n \geq -4$; pari: $x_n > 0 > -4$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 vi)

$A = \{x \in \mathbb{R} : -6x^2 - \vert x\vert + 1 > 0\}$

> [!example]- Soluzione
> 1. Siccome $x^2 = \vert x\vert^2$, pongo $t = \vert x\vert \geq 0$: $-6t^2 - t + 1 > 0$, cioè $6t^2 + t - 1 < 0$.
> 2. Le radici di $6t^2 + t - 1$ sono $t = \frac{-1 \pm 5}{12}$, cioè $t = \frac13$ e $t = -\frac12$. La parabola è negativa fra le radici: $-\frac12 < t < \frac13$.
> 3. Con $t = \vert x\vert \geq 0$ resta $\vert x\vert < \frac13$, cioè
> $$
> A = \left(-\tfrac13, \tfrac13\right)
> $$
>
> **Sup e inf.** Intervallo aperto: $\sup A = \frac13$, $\inf A = -\frac13$; gli estremi non appartengono ad $A$, quindi niente massimo e niente minimo. (2): se $N < \frac13$, il punto medio fra $\max(N, 0)$ e $\frac13$ sta in $\left[0, \frac13\right) \subset A$ ed è maggiore di $N$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 vii)

$A = \left\{x_n = (1 - \cos n\pi)\,n + \frac1n,\ n \in \mathbb{N},\ n \geq 1\right\}$

> [!example]- Soluzione
> $\cos n\pi = (-1)^n$.
> - $n$ pari: $1 - \cos n\pi = 0$, quindi $x_n = \frac1n$: $\frac12, \frac14, \frac16, \dots$
> - $n$ dispari: $1 - \cos n\pi = 2$, quindi $x_n = 2n + \frac1n$: $3, \frac{19}{3}, \frac{51}{5}, \dots$
>
> **$\inf A = 0$.**
> 1. (3): sui pari $\frac1n > 0$, sui dispari $2n + \frac1n > 0$.
> 2. (4): sia $\varepsilon > 0$. Cerco $n$ pari con $\frac1n < \varepsilon$, cioè $n > \frac1\varepsilon$. Per Archimede $\exists k \in \mathbb{N} : k > \frac1\varepsilon$, con $k \geq 1$ perché $\frac1\varepsilon > 0$. Con $n = 2k$: $2k > k > \frac1\varepsilon$, quindi $x_{2k} = \frac{1}{2k} < \varepsilon$.
>
> **Min?** $x_n = 0$ non succede mai: niente minimo.
>
> **$\sup A = +\infty$.**
> 1. Sui dispari $x_n = 2n + \frac1n > 2n > n$.
> 2. Dato $M \in \mathbb{R}$, per Archimede $\exists k \in \mathbb{N} : k > M$. Con $n = 2k + 1$, dispari: $n > k > M$, e $x_n > n > M$.
> 3. Illimitato superiormente, niente massimo.
>
> $A$ è limitato inferiormente, non superiormente.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 viii)

$A = \left\{x_n = \cos\frac{n\pi}{6},\ n \in \mathbb{N},\ n \geq 1\right\}$

> [!example]- Soluzione
> L'angolo $\frac{n\pi}{6}$ avanza di $30°$ alla volta e dopo $n = 12$ ha fatto un giro: i valori si ripetono con periodo $12$. Calcolo $n = 1, \dots, 12$:
>
> | $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | $x_n$ | $\frac{\sqrt3}{2}$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt3}{2}$ | $-1$ | $-\frac{\sqrt3}{2}$ | $-\frac12$ | $0$ | $\frac12$ | $\frac{\sqrt3}2$ | $1$ |
>
> $A = \left\{-1, -\frac{\sqrt3}{2}, -\frac12, 0, \frac12, \frac{\sqrt3}{2}, 1\right\}$ è un insieme finito, quindi ha massimo e minimo: $\max A = \sup A = 1$ (per $n = 12$) e $\min A = \inf A = -1$ (per $n = 6$).
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 ix)

$A = \{\vert x\vert : x^2 < -2x + 3\}$

> [!example]- Soluzione
> **La disequazione.**
> 1. $x^2 < -2x + 3 \Leftrightarrow x^2 + 2x - 3 < 0$.
> 2. $x^2 + 2x - 3 = (x+3)(x-1)$, radici $-3$ e $1$; parabola verso l'alto, negativa fra le radici: $-3 < x < 1$.
>
> **L'immagine.**
> 1. Per $x \in (-3, 0]$: $\vert x\vert = -x$, che prende tutti i valori in $[0, 3)$.
> 2. Per $x \in [0, 1)$: $\vert x\vert = x$, valori in $[0, 1)$, già contenuti.
> 3. Quindi $A = [0, 3)$.
>
> **$\min A = \inf A = 0$:** $0 = \vert 0\vert \in A$ e ogni modulo è $\geq 0$.
>
> **$\sup A = 3$.**
> 1. (1): ogni $y \in A$ è $< 3$.
> 2. (2): sia $0 < \varepsilon \leq 3$. Prendo $x = -\left(3 - \frac\varepsilon2\right) \in \left(-3, -\frac32\right]$, che risolve la disequazione. Il suo modulo è $y = 3 - \frac\varepsilon2 \in A$, e $y > 3 - \varepsilon$. Per $\varepsilon > 3$ basta lo stesso elemento costruito per $\varepsilon = 3$.
>
> **Max?** $3 \notin A$: servirebbe $x = 3$ o $x = -3$, e nessuno dei due sta in $(-3, 1)$. Niente massimo.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Foglio 1, esercizio 1 x)

$A = \{x : \vert x - 1\vert \leq \vert\,\vert x - 1\vert - 2\,\vert\}$

> [!example]- Soluzione
> 1. Con $t = \vert x - 1\vert \geq 0$: $t \leq \vert t - 2\vert$.
> 2. Caso $t \geq 2$: $\vert t - 2\vert = t - 2$, e $t \leq t - 2 \Leftrightarrow 0 \leq -2$, falso. Nessuna soluzione.
> 3. Caso $0 \leq t < 2$: $\vert t - 2\vert = 2 - t$, e $t \leq 2 - t \Leftrightarrow t \leq 1$.
> 4. Quindi $0 \leq \vert x - 1\vert \leq 1 \Leftrightarrow -1 \leq x - 1 \leq 1 \Leftrightarrow 0 \leq x \leq 2$.
> 5. $A = [0, 2]$.
>
> **$\max A = \sup A = 2$, $\min A = \inf A = 0$:** intervallo chiuso, gli estremi stanno in $A$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

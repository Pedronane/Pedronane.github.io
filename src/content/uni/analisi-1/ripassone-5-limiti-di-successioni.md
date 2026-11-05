---
title: Ripassone 5 · Limiti di successioni
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

> [!abstract] Definizione (Successioni e loro rappresentazione grafica) · slide 6
> Una **successione** a valori reali è una funzione da $\mathbb{N}$ in $\mathbb{R}$.
> Una successione generica viene indicata con $(a_n)_{n\in\mathbb{N}}$ oppure $a_0, a_1, a_2, \dots$ oppure, ancor più semplicemente, scrivendo solo il suo *termine $n$-esimo* $a_n$. Eventualmente l'indice $n$ può partire da un naturale maggiore di zero. Ad esempio:
> - $a_n = \frac{1}{n}$ per $n \geq 1$ rappresenta il termine $n$-esimo della successione $1, \frac12, \frac13, \dots$
> - $a_n = (-1)^n$ per $n \in \mathbb{N}$ rappresenta il termine $n$-esimo della successione $1, -1, 1, -1, 1, \dots$

> [!abstract] Definizione (Il fattoriale) · slide 7
> Una successione di notevole importanza è quella il cui termine $n$-esimo $a_n$ è il **fattoriale** $n!$, definito come il prodotto dei primi $n$ numeri naturali: $n! = 1 \cdot 2 \cdot 3 \cdot \ldots \cdot n$ dove poniamo anche $0! = 1$.
> Proprietà:
> $$
> n! = n \cdot (n-1)! \qquad \frac{n!}{(n-k)!} = n(n-1)(n-2) \cdot \ldots \cdot (n-k+1)
> $$
> **Osservazione:** il fattoriale $n!$ rappresenta il numero di modi distinti in cui è possibile ordinare $n$ oggetti distinti (cioè le *permutazioni* di $n$ oggetti).

> [!abstract] Definizione (Coefficienti binomiali) · slide 8
> Dati $n, k \in \mathbb{N}$ con $0 \leq k \leq n$, definiamo il **coefficiente binomiale**
> $$
> \binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{n \cdot (n-1) \cdot \ldots \cdot (n-k+1)}{k!}
> $$
> Proprietà (Triangolo di Tartaglia):
> $$
> \binom{n}{0} = \binom{n}{n} = 1 \qquad \binom{n}{k} = \binom{n}{n-k} \qquad \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}
> $$

> [!abstract] Teorema (del binomio di Newton) · slide 9
> La riga $n$-esima del triangolo di Tartaglia fornisce i coefficienti dello sviluppo del binomio $(a+b)^n$: ad esempio
> $$
> (a+b)^2 = a^2 + 2ab + b^2 \qquad (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \qquad (a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4
> $$
> Siano $a, b \in \mathbb{R}$ e sia $n \in \mathbb{N}$. Allora
> $$
> (a+b)^n = \sum_{k=0}^{n} \binom{n}{k}\, a^{n-k}\, b^k.
> $$

> [!abstract] Definizione (Successione geometrica) · slide 10
> Dato $q \in \mathbb{R}$, $q \neq 0$, la **successione geometrica** o **progressione geometrica** di ragione $q$ è definita come la successione $a_n = q^n$, $n \in \mathbb{N}$.
> La proprietà caratteristica di questa successione è che *il rapporto tra un termine della successione e il precedente è costante*: $\frac{a_{n+1}}{a_n} = q$.
> Calcoliamo la somma dei primi $n+1$ termini della successione geometrica ($q \neq 1$): $\sum_{k=0}^{n} q^k =$ $\dfrac{q^{n+1}-1}{q-1}$ *(risultato scritto a mano dal prof)*

> [!abstract] Definizione (Definizione di $a_n \to 0$) · slide 12
> Il problema fondamentale: definire e determinare il comportamento di $a_n$ quando $n$ diventa sempre più grande. La successione $a_n = \frac{1}{n}$ è costituita da numeri positivi che, al crescere di $n$, diventano via via più piccoli. In questo caso diciamo che «$a_n$ tende a $0$», ovvero che «il limite di $a_n$ per $n$ che tende all'infinito è $0$», e scriviamo $a_n \to 0$ oppure $\lim_{n \to +\infty} a_n = 0$.
> Diciamo che $a_n \to 0$ se per ogni numero reale $\varepsilon > 0$ è possibile determinare un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $-\varepsilon < a_n < \varepsilon$.
> In effetti, nell'esempio $a_n = \frac{1}{n}$ la disuguaglianza $-\varepsilon < \frac{1}{n} < \varepsilon$ segue da $n > \nu_\varepsilon = \varepsilon^{-1}$.

> [!abstract] Interpretazione grafica (Il limite di una successione) · slide 13
> La proprietà $a_n \to 0$ può essere descritta in termini grafici come un gioco a due giocatori: il primo giocatore sceglie $\varepsilon > 0$ e disegna una striscia orizzontale di spessore $2\varepsilon$ attorno all'asse delle ascisse; il secondo giocatore «risponde» individuando una ascissa $\nu_\varepsilon$, a partire dalla quale il grafico della successione rimane intrappolato all'interno della striscia.
> - Obiettivo del primo giocatore è mettere in difficoltà il secondo, il che richiede di scegliere $\varepsilon > 0$ **sempre più piccolo**;
> - la proprietà di limite $= 0$ è verificata se e solo se il secondo giocatore vince sempre.

> [!abstract] Definizione (Definizione di $a_n \to +\infty$) · slide 14
> Diciamo che $a_n \to +\infty$ se per ogni numero reale $\varepsilon > 0$ esiste un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $a_n > \varepsilon$.
> L'esempio più semplice (tautologico) di limite $= +\infty$ è dato dalla successione $a_n = n$. Notare che:
> - questa definizione differisce da quella di $a_n \to 0$ solo nella parte evidenziata;
> - il senso del parametro $\varepsilon > 0$ è cambiato. Infatti il primo giocatore, per mettere in difficoltà il secondo, deve qui scegliere $\varepsilon > 0$ **sempre più grande** (invece che sempre più piccolo come nel caso $a_n \to 0$).

> [!abstract] Definizione (Definizione di $a_n \to -\infty$) · slide 16
> Manca il limite $-\infty$, che si ottiene dal limite $+\infty$ cambiando segno ad $a_n$. Diciamo che $a_n \to -\infty$ se per ogni numero reale $\varepsilon > 0$ esiste un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $a_n < -\varepsilon$.

> [!abstract] Definizione (Definizione di $a_n \to \ell$) · slide 17
> E infine il limite finito $\ell \in \mathbb{R}$, che si ottiene riconducendosi al limite nullo con una semplice «traslazione verticale». Diciamo che $a_n \to \ell$ se per ogni numero reale $\varepsilon > 0$ esiste un numero reale $\nu_\varepsilon$ tale che, per ogni $n > \nu_\varepsilon$, si abbia $-\varepsilon < a_n - \ell < \varepsilon$.
> Nota bene: $-\varepsilon < a_n - \ell < \varepsilon$ equivale a $\vert a_n - \ell\vert < \varepsilon$ ovvero a $\ell - \varepsilon < a_n < \ell + \varepsilon$.

> [!abstract] Riassunto (Il limite di una successione) · slide 18
> Riassumendo, data una successione $(a_n)_n$, il suo comportamento quando $n$ tende all'infinito è descritto da uno dei seguenti casi:
> $$
> \lim_{n\to+\infty} a_n = \begin{cases} 0 \\ +\infty \\ -\infty \\ \ell \end{cases}
> $$
> con le relazioni (scritte a mano dal prof) $\ -\varepsilon < a_n < \varepsilon$, $\ a_n > \varepsilon$, $\ a_n < -\varepsilon$, $\ -\varepsilon < a_n - \ell < \varepsilon$ per $\forall n > \nu_\varepsilon$, se $\forall \varepsilon > 0\ \exists \nu_\varepsilon$.

> [!abstract] Teorema (Alcuni limiti fondamentali) · slide 20
> È molto utile conoscere i limiti di successioni fondamentali. Ad esempio, dati due numeri reali $a > 1$ e $b > 0$, possiamo valutare il limite della successione potenza $n^b$; il limite della successione esponenziale $a^n$; il limite della successione logaritmica $\log_a(n)$. In tutti e tre i casi si dimostra che il limite vale $+\infty$:
> $$
> \lim_{n\to+\infty} n^b = +\infty \ \ (b > 0) \qquad \lim_{n\to+\infty} a^n = +\infty \ \ (a > 1) \qquad \lim_{n\to+\infty} \log_a n = +\infty \ \ (a > 1)
> $$
> (i primi due sono stati verificati alla pagina precedente).

> [!abstract] Teorema (I limiti fondamentali) · slide 45
> I seguenti limiti di successioni fondamentali (potenze, esponenziali e logaritmi) possono essere verificati usando la definizione di limite e saranno d'ora in poi considerati come noti.
> $$
> \lim_{n\to+\infty} n^b = \begin{cases} +\infty & \text{se } b > 0 \\ 0 & \text{se } b < 0 \end{cases} \qquad \lim_{n\to+\infty} a^n = \begin{cases} +\infty & \text{se } a > 1 \\ 0 & \text{se } 0 < a < 1 \end{cases} \qquad \lim_{n\to+\infty} \log n = +\infty
> $$
> (i valori $+\infty$, $0$ sono scritti a mano dal prof)

> [!abstract] Teorema (unicità del limite) · slide 21
> Se $a_n \to x$ e $a_n \to y$, allora $x = y$.

> [!abstract] Teorema (limitatezza delle successioni convergenti) · slide 22
> Se $a_n$ è convergente, cioè $a_n \to \ell$ limite finito, allora esiste $M \in \mathbb{R}$ tale che $\vert a_n\vert \leq M$ per ogni $n \in \mathbb{N}$.

> [!abstract] Definizione (Sottosuccessioni) · slide 24
> Data una successione $(a_n)_n$, diciamo **sottosuccessione** (o successione estratta) di $(a_n)_n$ ogni successione del tipo $(a_{n_k})_{k\in\mathbb{N}}$, dove $n_1 < n_2 < n_3 < \dots < n_k < n_{k+1} < \dots$ è una successione strettamente crescente di indici interi.
> Si considera un nuovo indice indipendente $k \in \mathbb{N}$ e si ottiene una nuova successione $(b_k)_{k\in\mathbb{N}}$ dove $b_k = a_{n_k}$ per ogni $k \in \mathbb{N}$.

> [!abstract] Esempio (Sottosuccessioni) · slide 25
> **Esempio 1.** Data la successione $a_n = \frac{1}{n}$, una possibile sottosuccessione $b_k$ è definita scegliendo $n_k = k^2$, ovvero $b_k = \frac{1}{k^2}$.
> **Esempio 2.** Sia $a_n = (-1)^n$. La «sottosuccessione dei termini di indice pari» è $p_k = a_{2k} = (-1)^{2k} = 1$. La «sottosuccessione dei termini di indice dispari» è $d_k = a_{2k+1} = (-1)^{2k+1} = -1$.

> [!abstract] Teorema (Sottosuccessioni e loro limiti) · slide 26
> Se $\lim_{n\to+\infty} a_n = \ell$, allora per ogni sottosuccessione $a_{n_k}$ vale $\lim_{k\to+\infty} a_{n_k} = \ell$.

> [!abstract] Corollario (non-esistenza del limite) · slide 26
> Supponiamo che la successione $a_n$ ammetta due sottosuccessioni distinte, $a_{n_k}$ e $a_{r_k}$, le quali hanno due limiti distinti. Allora $a_n$ non ha limite.

> [!abstract] Esempio (Sottosuccessioni e loro limiti) · slide 27
> La successione
> $$
> \cos(n\pi) = (-1)^n = \begin{cases} 1 & \text{se } n \text{ è pari} \\ -1 & \text{se } n \text{ è dispari} \end{cases}
> $$
> non ammette limite in quanto le due sottosuccessioni dei termini di indice pari e dispari hanno limiti diversi (rispettivamente, $1$ e $-1$).

> [!abstract] Definizione (successione monotona) · slide 29
> Una successione $(a_n)_n$ si dice
> - **monotòna crescente** se $a_n \leq a_{n+1}\ \ \forall n \in \mathbb{N}$
> - **monotòna strettamente crescente** se $a_n < a_{n+1}\ \ \forall n \in \mathbb{N}$
> - **monotòna decrescente** se $a_n \geq a_{n+1}\ \ \forall n \in \mathbb{N}$
> - **monotòna strettamente decrescente** se $a_n > a_{n+1}\ \ \forall n \in \mathbb{N}$

> [!abstract] Teorema (Il teorema sul limite delle successioni monotòne) · slide 30
> Sia $(a_n)_n$ una successione monotòna crescente. Allora esiste il limite di $a_n$ e si ha
> $$
> \lim_{n\to+\infty} a_n = \sup\{a_i : i = 0, 1, 2, \dots\}.
> $$
> Analogamente, se $a_n$ è monotòna decrescente, allora essa ammette limite e si ha
> $$
> \lim_{n\to+\infty} a_n = \inf\{a_i : i = 0, 1, 2, \dots\}.
> $$

> [!abstract] Osservazione (Il teorema sul limite delle successioni monotòne) · slide 30
> Se in aggiunta la successione $(a_n)_n$ è limitata (superiormente / inferiormente) allora essa ammette limite finito.

> [!abstract] Teorema (Il numero di Nepero) · slide 32
> Consideriamo la cosiddetta successione di Nepero (John Napier, 1550 - 1617): $a_n = \left(1 + \frac{1}{n}\right)^n$.
> La successione di Nepero è strettamente crescente e limitata.
> **Corollario.** Esiste ed è finito il «numero di Nepero», ovvero il limite della successione di Nepero. Tale numero è indicato con la lettera «$e$» (iniziale di Eulero).

> [!abstract] Teorema (Limite di Nepero generalizzato) · slide 37
> A partire dalla definizione di $e = \lim_{n\to+\infty}\left(1 + \frac{1}{n}\right)^n$ si può dimostrare che
> $$
> \lim_{n\to+\infty} \vert a_n\vert = +\infty \ \Rightarrow\ \lim_{n\to+\infty}\left(1 + \frac{1}{a_n}\right)^{a_n} = e.
> $$
> Come applicazione, possiamo calcolare il limite $\lim_{n\to+\infty}\left(1 + \frac{\alpha}{n}\right)^n$ al variare di $\alpha \in \mathbb{R}$.

> [!abstract] Teorema (permanenza del segno) · slide 39
> 1. Supponiamo che $x_n \to \ell$ con $\ell > 0$ (risp. $\ell < 0$). Allora esiste $\bar n$ tale che per ogni $n \geq \bar n$ vale $x_n > 0$ (risp. $x_n < 0$).
> 2. Supponiamo che $x_n \to \ell$ ed esista $\hat n$ tale che $x_n \geq 0$ per ogni $n \geq \hat n$. Allora $\ell \geq 0$.
>
> Il punto 1) permette di dimostrare il 2): infatti, se per assurdo fosse $\ell < 0$ avremmo $-\ell > 0$ e $-x_n \to -\ell$, quindi per la permanenza del segno (I versione) avremmo $-x_n > 0$, cioè $x_n < 0$, per ogni $n \geq \bar n$, il che implicherebbe $0 \leq x_n < 0$ per ogni $n \geq \max\{\bar n, \hat n\}$, ovvero un assurdo.

> [!abstract] Corollario (confronto) · slide 40
> Una conseguenza del teorema di permanenza del segno: il limite mantiene le disuguaglianze in senso lato.
> Siano date due successioni $a_n$, $b_n$ tali che $a_n \to a$, $b_n \to b$, ed esiste $\bar n$ tale che $a_n \leq b_n$ per ogni $n \geq \bar n$. Allora $a \leq b$.
> Invece, le disuguaglianze in senso stretto non è detto che siano mantenute, come nel caso di $0 < x_n = \frac{1}{n} \to 0$.

> [!abstract] Teorema (dei due carabinieri) · slide 41
> Due carabinieri $a_n$ e $b_n$ vogliono catturare il ladro $c_n$ che cerca di scappare sulla retta $\mathbb{R}$. La prigione è posizionata in $\ell$...
> Siano $a_n$, $b_n$, $c_n$ tre successioni, tali che $a_n \to \ell$, $b_n \to \ell$, e inoltre esiste $\bar n$ tale che $a_n \leq c_n \leq b_n$ per ogni $n \geq \bar n$. Allora vale $c_n \to \ell$.
> Notare che se $\ell = +\infty$, la successione $b_n$ è inutile. Viceversa, se $\ell = -\infty$, allora $a_n$ è inutile.

> [!abstract] Teorema (limitata $\cdot$ infinitesima = infinitesima) · slide 42
> Siano $a_n$ e $b_n$ due successioni tali che $a_n \to 0$ ed esiste $0 < M < +\infty$ tale che $\vert b_n\vert \leq M$ per ogni $n$. Allora $a_n \cdot b_n \to 0$.

> [!abstract] Teorema (L'algebra dei limiti finiti) · slide 46, 47, 48
> Supponiamo che $\lim a_n = a$ e $\lim b_n = b$, con $a, b \in \mathbb{R}$. Allora:
> - (Limite della somma/differenza = somma/differenza dei limiti) $\lim_{n\to+\infty} a_n \pm b_n = a \pm b$
> - (Limite del prodotto = prodotto dei limiti) $\lim_{n\to+\infty} a_n \cdot b_n = a \cdot b$
> - Con $b \neq 0$: (Limite del quoziente = quoziente dei limiti) $\lim_{n\to+\infty} \dfrac{a_n}{b_n} = \dfrac{a}{b}$
> - Con $a > 0$: (Limite della potenza = potenza dei limiti) $\lim_{n\to+\infty} a_n^{\,b_n} = a^b$
>
> Esempi della slide 46: $\lim \left(2 + \frac1n\right) =$ $2 + 0 = 2$; $\lim \left(3 + \frac1n\right)\cdot\left(\frac1n - 4\right) =$ $-12$.

> [!abstract] Tabella (L'algebra estesa delle forme determinate di limite, additivo e moltiplicativo) · slide 49
> | Forma | Teorema | Esempio |
> | --- | --- | --- |
> | $[a \pm \infty] = \pm\infty$ | $a_n \to a,\ b_n \to \pm\infty \Rightarrow a_n + b_n \to \pm\infty$ | $\sqrt{2 + 1/n} - \sqrt n \to [\sqrt 2 - \infty] = -\infty$ |
> | $[+\infty + \infty] = +\infty$, $[-\infty - \infty] = -\infty$ | $a_n \to \pm\infty,\ b_n \to \pm\infty \Rightarrow a_n + b_n \to \pm\infty$ | $n^2 + \sqrt n \to [+\infty + \infty] = +\infty$ |
> | $a > 0$, $[a \cdot \pm\infty] = \pm\infty$ | $a_n \to a > 0,\ b_n \to \pm\infty \Rightarrow a_n \cdot b_n \to \pm\infty$ | $(3 + 1/n)\cdot n \to [3 \cdot +\infty] = +\infty$ |
> | $\left[\frac{1}{\infty}\right] = 0$ | $\vert b_n\vert \to +\infty \Rightarrow \frac{1}{b_n} \to 0$ | $\frac{1}{2^n} \to \left[\frac{1}{+\infty}\right] = 0$ |
> | $\left[\frac{1}{0^\pm}\right] = \pm\infty$ | $b_n \to 0^\pm \Rightarrow \frac{1}{b_n} \to \pm\infty$ | $\frac{1}{1/n} \to \left[\frac{1}{0^+}\right] = +\infty$ |

> [!abstract] Tabella (L'algebra estesa delle forme determinate di limite, esponenziale) · slide 50
> | Forma | Teorema | Esempio |
> | --- | --- | --- |
> | $a > 1$, $[a^{+\infty}] = +\infty$ | $a_n \to a > 1,\ b_n \to +\infty \Rightarrow a_n^{b_n} \to +\infty$ | $(2 + 1/n)^n \to [2^{+\infty}] = +\infty$ |
> | $a > 1$, $[a^{-\infty}] = 0$ | $a_n \to a > 1,\ b_n \to -\infty \Rightarrow a_n^{b_n} \to 0$ | $(2 + 1/n)^{-n} \to [2^{-\infty}] = 0$ |
> | $[0^{+\infty}] = 0$ | $a_n \to 0^+,\ b_n \to +\infty \Rightarrow a_n^{b_n} \to 0$ | $(1/n)^n \to [0^{+\infty}] = 0$ |

> [!abstract] Tabella (Forme Indeterminate) · slide 52, 53, 54
> Le precedenti regole di calcolo di limiti **non sono applicabili nelle seguenti situazioni**, come mostrato dai diversi esempi a fianco.
> - F.I. di tipo additivo $[+\infty - \infty]$: $n - n = 0 \to 0$; $(n+7) - n = 7 \to 7$; $n - 2n = -n \to -\infty$; $(n + (-1)^n) - n = (-1)^n$, non esiste il limite.
> - F.I. di tipo moltiplicativo $[\infty \cdot 0]$: $n \cdot \frac{1}{n} = 1 \to 1$; $n \cdot \frac{2}{n} = 2 \to 2$; $n^2 \cdot \frac1n = n \to +\infty$; $n \cdot \frac{(-1)^n}{n} = (-1)^n$, non esiste il limite.
> - $\left[\frac{\infty}{\infty}\right]$ equivale alla forma indeterminata $\infty \cdot 0$, infatti $\frac{\infty}{\infty} = \infty \cdot \frac{1}{\infty} = \infty \cdot 0$.
> - $\left[\frac{0}{0}\right]$ equivale alla forma indeterminata $\infty \cdot 0$, infatti $\frac{0}{0} = \frac{1}{0}\cdot 0 = \infty \cdot 0$.
> - F.I. di tipo esponenziale $[1^\infty]$: $1^n = 1 \to 1$; $(1 + 1/n)^n \to e$; $(1 + 1/n)^{n^2} \to +\infty$; $\dots$
> - $[\infty^0]$: $(2^n)^{1/n} = 2 \to 2$; $(7^n)^{1/n^2} = 7^{1/n} \to 7^0 = 1$; $\dots$
> - $[0^0]$ equivale al reciproco della forma indeterminata $\infty^0$, infatti $0^0 = \left(\frac{1}{\infty}\right)^0 = \frac{1}{\infty^0}$.
>
> **Nota importante!** $a_n^{b_n} = e^{\log(a_n^{b_n})} = e^{b_n \cdot \log(a_n)}$, quindi ogni forma indeterminata esponenziale può essere ricondotta ad una forma moltiplicativa di tipo $\infty \cdot 0$.

> [!abstract] Schema (Calcolo dei limiti - schema generale) · slide 55
> Inizio. Analizza l'espressione. Forme Indeterminate presenti? **no**: applica regole «in parallelo», risultato! **sì**: tecniche per risolvere le F.I., poi di nuovo analizza l'espressione.

> [!abstract] Teorema (criterio del rapporto) · slide 62
> Sia $a_n$ una successione a termini positivi. Supponiamo che $\dfrac{a_{n+1}}{a_n} \to L$. Allora
> - se $L > 1$ vale $a_n \to +\infty$;
> - se $L < 1$ vale $a_n \to 0$.
>
> Nota bene: se $L = 1$ non si può concludere nulla, come mostrato dai seguenti esempi.
> **Esempio 1:** $a_n = n$, quindi $\frac{a_{n+1}}{a_n} = \frac{n+1}{n} = 1 + \frac1n \to 1$. In questo caso $a_n \to +\infty$.
> **Esempio 2:** $a_n = \frac1n$, quindi $\frac{a_{n+1}}{a_n} = \frac{n}{n+1} = 1 - \frac{1}{n+1} \to 1$. In questo caso, invece, $a_n \to 0$.

> [!abstract] Definizione (Confronto tra infiniti) · slide 64
> Siano $(a_n)_n$ e $(b_n)_n$ due infiniti, cioè $\lim a_n = +\infty$, $\lim b_n = +\infty$. Allora il limite del loro rapporto si presenta in forma indeterminata: $\lim \frac{a_n}{b_n} = \left[\frac{\infty}{\infty}\right]$.
> Per determinare tale limite, dobbiamo saper confrontare la «velocità» con cui le due successioni tendono all'infinito. Si possono presentare i seguenti casi:
> $$
> \lim_{n\to+\infty} \frac{a_n}{b_n} = \begin{cases} +\infty & a_n \text{ è un infinito di ordine superiore a } b_n \\ 0 & b_n \text{ è un infinito di ordine superiore a } a_n \\ \ell \in (0,+\infty) & a_n \text{ e } b_n \text{ sono infiniti dello stesso ordine} \end{cases}
> $$

> [!abstract] Teorema (Gerarchia di infiniti) · slide 65
> Per ogni fissato $\alpha > 0$ e $a > 1$, le seguenti successioni rappresentano degli infiniti, ovvero tendono a $+\infty$ per $n \to +\infty$:
> $$
> \log_a(n) \ll n^\alpha \ll a^n \ll n! \ll n^n
> $$
> Tali successioni sono in ordine crescente di infinito, cioè verificano
> $$
> \lim_{n\to+\infty}\frac{\log_a(n)}{n^\alpha} = 0 \quad \lim_{n\to+\infty}\frac{n^\alpha}{\log_a n} = +\infty \quad \lim_{n\to+\infty}\frac{n^\alpha}{a^n} = 0 \quad \lim_{n\to+\infty}\frac{a^n}{n^\alpha} = +\infty
> $$
> $$
> \lim_{n\to+\infty}\frac{a^n}{n!} = 0 \quad \lim_{n\to+\infty}\frac{n!}{a^n} = +\infty \quad \lim_{n\to+\infty}\frac{n!}{n^n} = 0 \quad \lim_{n\to+\infty}\frac{n^n}{n!} = +\infty
> $$
> N.B.: si tratta di una relazione **transitiva**!

> [!abstract] Esempio (Gerarchia di infiniti: attenti a come la si usa!) · slide 67
> Due esempi in cui si può / non si può applicare un limite di gerarchia.
> $$
> \lim_{n\to+\infty}\frac{\log(3n^2)}{\sqrt n} = \qquad\qquad \lim_{n\to+\infty}\frac{\log(2^n + 1)}{n} =
> $$

## Il prof ha scritto

- slide 6, a mano: «$f : \mathbb{N} \to \mathbb{R}$»; sul grafico $a_0 = f(0)$, $a_1 = f(1)$, $a_2 = f(2)$ sui punti sopra $0, 1, 2, \dots$; pagina dopo: «Es. Scrivere una successione che rappresenti i numeri positivi dispari in ordine crescente. $(a_n)_{n\in\mathbb{N}}$ con $a_n = 2n+1$; $n = 0 \Rightarrow a_n = 1$; $n = 1 \Rightarrow a_n = 3$; $n = 2 \Rightarrow a_n = 5$, $\dots$»
- slide 7, a mano: «(dopo lo $0$)» accanto ai «primi $n$ numeri naturali»; «(definizione a parte)» accanto a $0! = 1$; le due proprietà numerate (1) e (2), con «$\forall n \in \mathbb{N}$» accanto alla (1) e «$\forall k < n$» accanto alla (2).
- slide 8, a mano: «DEFINIZIONE» sul riquadro; «segue da (2)» sulla seconda forma; «sui lati del triangolo $\to 1$», «simmetria», «ogni elemento si ottiene sommando i due elementi sopra di esso»; «RIGA 0», «RIGA 1», «RIGA 2», «col. 0», «col. 1», «col. 2». Il tuo ★ sul quaderno è sul coefficiente binomiale (dagli appunti).
- slide 8, pagina dopo: «Il coefficiente binomiale di $n$ su $k$, denotato con $\binom nk$, è l'elemento del triangolo di riga $n$ e colonna $k$. Es: $6$: riga $4$ colonna $2$. $\binom42 = \frac{4!}{2!\cdot(4-2)!} = \frac{24}{2\cdot 2} = \frac{24}{4} = 6$».
- slide 8, «SIGNIFICATO COMBINATORIO»: «il coefficiente binomiale $\binom nk$ rappresenta il numero di modi di SCEGLIERE $k$ oggetti all'interno di un gruppo di $n$ (l'ordine in cui li scelgo è irrilevante) "SCELTE NON ORDINATE" di $k$ elementi tra $n$. Infatti ci sono $\frac{n!}{(n-k)!}$ modi ORDINATI di scegliere $k$ oggetti tra $n$. Per ogni scelta non ordinata ci sono $k!$ scelte ordinate. Quindi le scelte NON ordinate sono $\frac{n!/(n-k)!}{k!} = \frac{n!}{(n-k)!\,k!} = \binom nk$».
- slide 7, pagine dopo: «Perché $n!$ rappresenta il num. di possibili ordinamenti di $n$ oggetti?»; «Dopo aver scelto quale oggetto mettere nella $1^a$ posizione ($n$ modi) rimangono $(n-1)$ oggetti. Quindi, per ognuna di queste $n$ possibilità, ci sono $(n-1)$ modi per scegliere la seconda posizione».
- slide 9, a mano: $(a+b)^5 = 1\cdot a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + 1\cdot b^5$, con i coefficienti $1, 5, 10, 10, 5, 1$ letti sulla «$5^a$ riga» e «$4^a$ riga» del triangolo.
- slide 10, a mano: «$q = \frac12$», $a_0, a_1, a_2, a_3 = 1, \frac12, \frac14, \frac18$; $\frac{a_{n+1}}{a_n} = \frac{q^{n+1}}{q^n} = q$; $\sum_{k=0}^{n} 1^k = n+1$. Il ★ sul quaderno è sulla proprietà caratteristica $\frac{a_{n+1}}{a_n} = q$ (dagli appunti).
- slide 12, a mano: «notazioni alternative» accanto a $a_n \to 0$ e $\lim$; «soglia di tolleranza» sull'$\varepsilon$; «punto di partenza» sul $\nu_\varepsilon$; «spesso al posto di $\nu_\varepsilon$ scriviamo $n_0$ e $n(\varepsilon)$», «"$n$-zero"».
- slide 12, pagine dopo: «$a_n \to 0$ se, fissata una qualunque soglia di tolleranza $\varepsilon$ ($\forall \varepsilon > 0$), possiamo affermare che a partire da un certo indice $\nu_\varepsilon$ ($\exists \nu_\varepsilon$ t.c. ... anche detto $n_0$ oppure $n(\varepsilon)$) tutti i successivi elementi di $(a_n)_{n\in\mathbb{N}}$ (ovvero quelli relativi agli indici $n > \nu_\varepsilon$) $\forall n > \nu_\varepsilon$ distano da $0$ (il limite della successione) meno della soglia di tolleranza, ovvero $\vert a_n - 0\vert < \varepsilon$».
- slide 12, «DEFINIZIONE FORMALE (di $a_n \underset{n\to\infty}{\longrightarrow} 0$)»: «$a_n \to 0$ se $\forall \varepsilon > 0\ \exists n(\varepsilon)$ t.c. $\vert a_n - 0\vert < \varepsilon\ \ \forall n > n(\varepsilon)$».
- slide 13, a mano: «scelto dal $1^\circ$ giocatore» sulla striscia; pagina dopo: «VALE $\lim_{n\to\infty} a_n = 0$ SE E SOLO SE il SECONDO GIOCATORE HA UNA STRATEGIA VINCENTE (ovvero può fare la mossa richiesta qualunque sia la mossa del $1^\circ$ giocatore)».
- slide 14, a mano: «soglia di tolleranza» sull'$\varepsilon$, «punto di partenza» sul $\nu_\varepsilon$, «relazione che vale a partire da $\nu_\varepsilon$» sul $a_n > \varepsilon$; il prof disegna due soglie $\varepsilon_1 < \varepsilon_2$ con i punti di partenza $\nu_{\varepsilon_1}$ e $\nu_{\varepsilon_2}$.
- slide 16, a mano: «cambia solo la relazione». Slide 17: «relazione» sul $-\varepsilon < a_n - \ell < \varepsilon$, striscia attorno a $y = \ell$.
- slide 18, a mano: «(oppure $n(\varepsilon)$)» accanto a $\nu_\varepsilon$; «EQUIVALENTEMENTE: $\ell - \varepsilon < a_n < \ell + \varepsilon$».
- slide 20, a mano: «(x casa)» sul limite del logaritmo; slide 19, a mano: «(x casa)» sul limite di $n^b$.
- slide 21, a mano: «Supponiamo scegliendo $\varepsilon$ t.c. $(x-\varepsilon, x+\varepsilon)$ e $(y-\varepsilon, y+\varepsilon)$ siano disgiunti (se $x \neq y$)»; pagina dopo: «Si ottiene una contraddizione alle definizioni $\lim a_n = x$, $\lim a_n = y$».
- slide 22, a mano: «definizione di CONVERGENTE»; «brevemente: si dice “$a_n$ è LIMITATA" (pensare a "DELIMITATA")».
- slide 24, a mano: «successione crescente di numeri naturali» sulla catena degli indici ($3, 7, 9, 13, \dots$); «indice rispetto alla successione originale» sul $n_k$.
- slide 25, a mano: $a_n = \left(1, \frac12, \frac13, \dots\right)$ con gli indici $n = 1, 4, 9$ cerchiati, $n_k = 1, 4, 9$ per $k = 1, 2, 3$, $b_k = a_{n_k} = \left(1, \frac14, \frac19, \dots\right)$; $a_n = \{(-1)^n\}_{n=0}^{+\infty} = (1, -1, 1, -1, \dots)$.
- slide 26, a mano (6/10): «FATTO 1: Se una successione $a_n$ ammette limite $\ell$, allora ogni sottosuccessione $(a_{n_k})_{k=1}^{\infty}$ ammette limite $\ell$»; sul teorema «(FATTO 1 visto sopra)» e «$\ell \in \mathbb{R} \cup \{\pm\infty\}$». Il ★ sul quaderno è sul teorema con il suo corollario (dagli appunti).
- slide 29, a mano: «con $(a_n)_{n=1}^{+\infty}$», «tra $a_0$ e $a_1$ CRESCE».
- slide 30, a mano: «minimo dei maggioranti», «estremo superiore dell'insieme reale degli elementi della successione», «non ordinato», $\exists \lim \in (-\infty, +\infty]$ per la crescente e $\exists\lim \in [-\infty, +\infty)$ per la decrescente.
- slide 32, a mano: «$e$ è definito come il limite di questa successione», «NUMERO DI NEPERO». Slide 33: «x CASA».
- slide 37, a mano: «PIÙ IN GENERALE», «NON È RICHIESTO CHE $\exists \lim a_n$», ★ accanto all'enunciato; «CASO $\alpha = 0$: la successione coinvolta è $(1, 1, 1, \dots)$, $\lim = 1 = e^0$ (ovvero $e^\alpha$ con $\alpha = 0$)».
- slide 39, a mano: «possibilmente $\ell = +\infty$», «possibile $\ell = -\infty$», «DISUGUAGLIANZA STRETTA», «PUNTO DI PARTENZA», «(se $x_n \leq 0 \Rightarrow \ell \leq 0$)»; «PUNTO 1, CASO $\ell > 0$» con il disegno della striscia sopra l'asse.
- slide 39, pagine dopo: «DISUG. STRETTE ($<$, $>$): nel punto 1 assumiamo a priori un'informazione sul segno del limite e deduciamo un'informazione sul segno degli elementi della successione (da un certo indice in poi). Nel punto 2 assumiamo a priori un'informazione sul segno degli elementi della successione (da un certo indice in poi) e deduciamo un'informazione sul segno del limite. DISUGUAGLIANZE NON STRETTE ($\leq$, $\geq$)».
- slide 39, «PUNTO 2»: «Supponiamo per assurdo $\ell < 0$: dovrebbe esistere un indice a partire dal quale gli elementi stanno nella striscia $\Rightarrow$ sono $< 0$. Da qui in poi gli elementi sono $\geq 0$»; «Perché se $\ell = 0$ non posso dire che da un certo punto in poi $x_n \geq 0$? Il segno continua a cambiare» (con ★ sul quaderno, dagli appunti).
- 6/10, pagina dopo la slide 39: «NOTAZIONE: il termine DEFINITIVAMENTE ha il seguente significato: Una successione $(a_n)_{n\in\mathbb{N}}$ ha una proprietà (P) DEFINITIVAMENTE se $\exists n_0 \in \mathbb{N}$ t.c. $\forall n > n_0$ l'elemento $a_n$ ha la proprietà (P)».
- «RIFORMULAZIONE DI PERMANENZA DEL SEGNO: (1) Se $x_n \to \ell$ con $\ell > 0$, allora $x_n > 0$ definitivamente. (2) Se $x_n \to \ell$ con $x_n \geq 0$ ($\leq$) definitivamente, allora $\ell \geq 0$ ($\leq$)».
- «ATTENZIONE! anche nel punto 2 non si può rimpiazzare la disuguaglianza "larga" con una stretta, ovvero non è vero: Se $x_n \to \ell$ e $x_n > 0$ definitivam., allora $\ell > 0$. Es: $x_n = \frac1n$: soddisfa l'ipotesi, non soddisfa la tesi. Ma $\lim x_n = 0$».
- slide 40, a mano: «IP: vale la disuguaglianza "larga" DEFINITIVAMENTE»; «TS: la disuguaglianza si "trasferisce" ai rispettivi limiti»; «Es. $a_n = -\frac1n$, $b_n = \frac1n$. In questo caso $a_n < b_n$ (definitivam.), $\lim a_n = a = 0 = b = \lim b_n$. Non è vero $a < b$»; «RISCRITTURA DEL COROLLARIO: Se $a_n \to a$, $b_n \to b$, $a_n \leq (\geq)\ b_n$ definitivamente, allora $a \leq (\geq)\ b$».
- slide 40, pagine dopo: «TEOREMA (esercizio per casa): Se $a_n \to a$, $b_n \to b$. Se $a < b$ ($>$) allora $a_n < b_n$ ($>$) definitivamente»; nella dimostrazione del corollario: «Note $a_n$ e $b_n$ definiamo $x_n := a_n - b_n$»; «ancora da mostrare: limite della somma = somma dei limiti».
- slide 42, a mano: «limite $= 0$» sull'enunciato; «$\vert a \cdot b\vert \leq \vert a\vert \cdot \vert b\vert$»; «$a_n \to 0$», «limitata»; «cerchiamo $\lim \frac1n (-1)^n$: applicando il teorema, la successione $\to 0$».
- 7/10, «Ancora un'osservazione sulla slide 42/68: Perché ($x_n \to 0$) $\Leftrightarrow$ ($\vert x_n\vert \to 0$)? 1) $x_n \to 0$ per definizione significa: $\forall\varepsilon > 0\ \exists\nu_\varepsilon: \vert x_n - 0\vert < \varepsilon\ \forall n > \nu_\varepsilon$. 2) $\vert x_n\vert \to 0$ per definizione significa: $\forall\varepsilon > 0\ \exists\nu_\varepsilon: \big\vert\vert x_n\vert - 0\big\vert < \varepsilon\ \forall n > \nu_\varepsilon$. La condizione 1) è $\vert x_n - 0\vert < \varepsilon \Leftrightarrow \vert x_n\vert < \varepsilon$; la condizione 2) è $\big\vert\vert x_n\vert - 0\big\vert < \varepsilon \Leftrightarrow \big\vert\vert x_n\vert\big\vert < \varepsilon \Leftrightarrow \vert x_n\vert < \varepsilon$». Il ★ sul quaderno è sul teorema «limitata per infinitesima», «utile per sin e cos» (dagli appunti).
- slide 45, a mano: «(potenze)», «(esponenziali)», «(logaritmi)», con i valori $+\infty$ e $0$ scritti accanto alle parentesi graffe.
- slide 46, a mano: «provare a dimostrare usando def. di limite» accanto a somma e prodotto; sotto i limiti $\lim 2 = 2$ per $(2, 2, 2, \dots)$ e $\lim \frac1n = 0$ per $\left(1, \frac12, \frac13, \dots\right)$; $\lim 3$, $\lim -4$.
- slide 47, a mano: «questa frazione è ben-definita DEFINITIVAM. per il teorema di permanenza del segno, siccome $b \neq 0$ ($\{b > 0\} \cup \{b < 0\}$)».
- slide 48, a mano: «BASE», «ESPONENTE»; «siccome $a > 0$, allora $a_n > 0$ definitivamente, allora la potenza è definita».
- slide 49, a mano: le cinque righe numerate 1), 2), 3), 4), 5); sulla prima «$a \in \mathbb{R}$».
- slide 49, pagine dopo: «2) Gli enunciati possibili sono 2: $a_n \to +\infty$, $b_n \to +\infty \Rightarrow a_n + b_n \to +\infty$; $a_n \to -\infty$, $b_n \to -\infty \Rightarrow a_n + b_n \to -\infty$». «3) Se $a < 0$, l'enunciato diventa: $a_n \to a < 0$, $b_n \to \pm\infty$. Allora $a_n \cdot b_n \to \mp\infty$». «4) La richiesta $\vert b_n\vert \to +\infty$ non implica che $b_n$ abbia limite; ad esempio: $b_n = (-n)^n = n^n \cdot (-1)^n$». «5) Si dice che $b_n \to \ell^\pm$ quando $b_n \to \ell$ e $b_n \geq \ell$ ($<$) definitivamente. Se sappiamo solo $b_n \to 0$, non si può concludere $\frac{1}{b_n} \to +\infty$ o $-\infty$. Però possiamo concludere $\frac{1}{\vert b_n\vert} \to +\infty$ a patto che $b_n \neq 0$ def.».
- slide 50, a mano: «2» sulla base $2 + \frac1n$, «0» sulla base $\frac1n$.
- slide 52, a mano: «$2n - n = n \to +\infty$», $(n + (-1)^n) - n$ con i termini $(1, 0, 3, 2, 5, 4, \dots)$; «tutte le casistiche sono possibili».
- slide 53, a mano: «$n \cdot \frac{1}{n^2} = \frac1n \to 0$»; «(a)» sull'esempio $n\cdot\frac{(-1)^n}{n}$; «se questo è $0^+$» accanto a $\frac{1}{0}$. Pagina dopo: «(a) $\frac{(-1)^n}{n} \to 0$ perché $a_n := (-1)^n$ è limitata, $b_n := \frac1n$ è infinitesima $\Rightarrow$ (teorema visto ieri) limitato $\cdot$ infinitesima $=$ infinitesima».
- slide 54, a mano: «successione che tende a $1$» accanto a $[1^\infty]$, «successione che tende a $0$» accanto a $[\infty^0]$ e a $[0^0]$; $e^{[0 \cdot \infty]}$ sulla nota importante.
- slide 54, pagine dopo: «TEOREMI ($a_n$ successione qualsiasi). Allora $\lim 1^{a_n} = 1$; $\lim a_n^{\,0} = 1$ (queste sono successioni COSTANTEMENTE UGUALI a $1$); $\lim 0^{a_n} = 0$ (successione costantemente uguale a $0$), PURCHÉ $a_n \neq 0$ DEFINITIVAMENTE».
- 7/10, «QUAL È IL CONTRARIO DI DEFINITIVAMENTE: $(a_n)_{n\in\mathbb{N}}$ soddisfa (P) definitivamente: $\exists n_0 \in \mathbb{N}$ t.c. $\forall n > n_0$, $a_n$ soddisfa (P). NEGAZIONE: a) $\forall n_0 \in \mathbb{N}\ \exists n > n_0$ t.c. $a_n$ NON soddisfa (P); b) $\exists$ infiniti indici $n$ t.c. $a_n$ NON soddisfa (P). a) e b) sono equivalenti, perché qualunque insieme infinito di numeri naturali ha la proprietà di Archimede».
- «NOTAZIONI: Si dice che una proprietà (P) vale FREQUENTEMENTE per una successione $(a_n)_{n\in\mathbb{N}}$ se l'insieme $\{n \in \mathbb{N} \text{ t.c. } a_n \text{ soddisfa (P)}\}$ è INFINITO. CONCLUSIONE: la negazione di $(a_n)_{n\in\mathbb{N}}$ soddisfa (P) DEFINITIVAM. è $(a_n)_{n\in\mathbb{N}}$ soddisfa $\neg$(P) FREQUENTEM.»
- «Es. (x casa): Scrivere formalmente la def. di $a_n \not\to \ell$, $\ell \in \mathbb{R}$ ($a_n$ non converge a $\ell$)».
- slide 62, a mano: «(incluso il caso $L = +\infty$)» accanto a $L > 1$, «(incluso il caso $L = 0$)» accanto a $L < 1$; «(potrebbe succedere qualunque cosa, incluso $\nexists\lim$)» accanto a $L = 1$.
- slide 63, a mano: «chiamiamo $b_n := \frac{a_{n+1}}{a_n}$, $b_n \to L$, con $L > 1$»; ★ «$c_n := b_n - 1 \to L - 1 > 0$; per permanenza segno $c_n > 0$ definitivam., ovvero $b_n - 1 > 0$, ovvero $b_n > 1$ def., ovvero $\frac{a_{n+1}}{a_n} > 1$ definitivamente, ovvero $a_{n+1} > a_n$ definitivamente ($\Rightarrow a_n$ è DEFINITIVAMENTE MONOTONA CRESCENTE)»; ★ «Non può essere $a = 0$, perché $a_n$ è a termini positivi e CRESCENTE». Sulla slide: «definitivamente monotona, ovvero monotona per $n$ abbastanza grande».
- slide 63, pagina dopo: «ESERCIZI. Mostrare i seguenti enunciati: $a_n < 0\ \forall n \in \mathbb{N}$, $\lim \frac{a_{n+1}}{a_n} = L > 1 \Rightarrow a_n \to -\infty$; $a_n < 0\ \forall n \in \mathbb{N}$, $\lim \frac{a_{n+1}}{a_n} = L < 1 \Rightarrow a_n \to 0^-$».
- slide 64, a mano: «(va a infinito "più velocemente")» accanto a «infinito di ordine superiore»; «(oppure $\nexists\lim$)» accanto al caso $\ell \in (0, +\infty)$; pagina dopo: «Es. $a_n = n$, $b_n = 3n$. Anche se $a_n \ll b_n$ (per $n$ grande) (MOLTO MINORE) si dice che $a_n$ e $b_n$ sono infiniti dello stesso ordine, cioè $\frac{a_n}{b_n}$ è LIMITATO».
- slide 65, a mano: «(1)» sulla catena; «non necessariamente gli stessi» sulle due $a$ ($\log_a$ e $a^n$); pagina dopo: «In (1) ogni "infinito" è di ordine inferiore rispetto al successivo (e quindi rispetto a tutti i successivi)».
- slide 68, a mano: «PER CASA» sull'esercizio 1; «Correzione».

## Svolti a lezione

### $\frac1n \to 0$ con la definizione (slide 12, 30/9)

Verificare che $(a_n)_{n \geq 1}$ con $a_n = \frac1n$ soddisfa $a_n \to 0$.
- Fissiamo un qualunque $\varepsilon > 0$ (soglia di tolleranza).
- Per un corollario visto della proprietà di Archimede, sappiamo che $\exists\, n(\varepsilon) \in \mathbb{N}$ t.c. $\dfrac{1}{n(\varepsilon)} < \varepsilon$.
- In particolare $\forall n > n(\varepsilon)$ vale $\dfrac{1}{n} < \dfrac{1}{n(\varepsilon)} < \varepsilon$, ovvero $\vert a_n - 0\vert < \varepsilon\ \ \forall n > n(\varepsilon)$.

### $\sqrt n \to +\infty$ con la definizione (30/9)

Verificare usando la definizione che $(a_n)_{n\in\mathbb{N}}$ dato da $a_n = \sqrt n$ soddisfa $a_n \to +\infty$.
- Fissiamo $\varepsilon > 0$ qualsiasi («pensato come numero grande»). Obiettivo: trovare $n(\varepsilon)$ t.c. $a_n > \varepsilon\ \ \forall n > n(\varepsilon)$.
- Per la proprietà di Archimede $\exists\, n(\varepsilon) > \varepsilon^2 \Rightarrow \sqrt{n(\varepsilon)} > \varepsilon \Rightarrow \forall n > n(\varepsilon)$, $a_n = \sqrt n > \varepsilon$.

### $\lim \frac{n-1}{n+1} = 1$ (slide 19, esercizio a)

- Dobbiamo mostrare che $\forall\varepsilon > 0\ \exists\nu_\varepsilon$ t.c. $\forall n > \nu_\varepsilon$ vale la relazione $-\varepsilon < \dfrac{n-1}{n+1} - 1 < \varepsilon$, cioè (1) $\dfrac{n-1}{n+1} - 1 > -\varepsilon$ e (2) $\dfrac{n-1}{n+1} - 1 < \varepsilon$. Chiediamoci per quali valori di $n$ valgono (1) e (2).
- (1) $\iff \dfrac{(n-1+2)-2}{n+1} - 1 > -\varepsilon$ (aggiungo e tolgo $2$) $\iff \dfrac{n+1}{n+1} - \dfrac{2}{n+1} - 1 > -\varepsilon \iff$ (1') $\dfrac{-2}{n+1} > -\varepsilon$.
- (2) $\iff$ (2') $\dfrac{-2}{n+1} < \varepsilon$, «è sempre verificata» ($-2/(n+1) < 0$, $\varepsilon > 0$).
- Per (1'): $n + 1 > \dfrac2\varepsilon$. Per (2') la disuguaglianza è soddisfatta per tutti gli $n$. Cosa scegliamo come $\nu_\varepsilon$? $\nu_\varepsilon := \dfrac2\varepsilon - 1$. Per ogni $n > \nu_\varepsilon = \dfrac2\varepsilon - 1$ è soddisfatta.

### $\lim a^n = +\infty$ per $a > 1$ (slide 19, esercizio b, punto 1)

- Obiettivo: mostrare che $\forall\varepsilon > 0\ \exists\nu_\varepsilon$ t.c. $\forall n > \nu_\varepsilon$ vale la relazione (3) $a^n > \varepsilon$ ($a^n$ elemento generico della successione).
- Dobbiamo risolvere (3) (rispetto alla variabile $n$) e sperare che l'insieme delle soluzioni contenga un intervallo della forma $(\nu_\varepsilon, +\infty)$. $t \mapsto \log_a t$ è crescente (strettamente crescente per $a > 1$): $a^n > \varepsilon \iff n > \log_a(\varepsilon)$.
- Scegliendo $\nu_\varepsilon := \log_a(\varepsilon)$, abbiamo che $\forall n > \nu_\varepsilon$ vale (3), ovvero $a^n > \varepsilon$.

### Somma della progressione geometrica (slide 10, 28/9)

- $S_n := \displaystyle\sum_{k=0}^{n} q^k = 1 + q + q^2 + \dots + q^n$
- $q \cdot S_n = q(1 + q + q^2 + \dots + q^n) = q + q^2 + q^3 + \dots + q^{n+1}$
- $q \cdot S_n - S_n = (q + q^2 + \dots + q^n + q^{n+1}) - (1 + q + q^2 + \dots + q^n) = q^{n+1} - 1$, ovvero $S_n(q-1) = q^{n+1} - 1$
- $\Rightarrow\ S_n = \dfrac{q^{n+1} - 1}{q - 1}\ \ \forall n \geq 0$

### $(-1)^n$ non ammette limite (slide 25-26, 6/10)

Mostrare che la successione $a_n = (-1)^n$ non ammette limite.
- La sottosuccessione $(a_{n_k})_{k=1}^{+\infty}$, $n_k = 2k+1$, è la successione $\left((-1)^{2k+1}\right)_{k=1}^{+\infty} = (-1, -1, -1, -1, \dots)$; quindi $\lim a_{n_k} = -1$.
- La sottosuccessione $(a_{n_h})_{h=1}^{+\infty}$, $n_h = 2h$, è la successione $\left((-1)^{2h}\right)_{h=1}^{+\infty} = (1, 1, 1, 1, \dots)$; quindi $\lim a_{n_h} = +1$.
- Conseguenza: la successione originale $(a_n)_{n=1}^{+\infty}$ **non ammette limite**. Infatti se fosse $\exists \lim a_n = \ell$, allora dovrebbe essere (per fatto 1) $\ell = \lim a_{n_j}$ per ogni sottosuccessione $a_{n_j}$. In questo caso dovrebbe valere contemporaneamente $\ell = 1$, $\ell = -1$.

### Monotonia: $a_n = \frac{n}{n^2+1}$ è decrescente (slide 29, 6/10)

Verifichiamo che $(a_n)_{n=1}^{+\infty}$ è decrescente. Dobbiamo mostrare che $\forall n \geq 1$ ($n \in \mathbb{N}$) vale $a_n \overset{?}{\geq} a_{n+1}$, con $a_n = \frac{n}{n^2+1}$, $a_{n+1} = \frac{n+1}{(n+1)^2+1}$.
- La disuguaglianza è soddisfatta se e solo se $\dfrac{n}{n^2+1} - \dfrac{n+1}{(n+1)^2+1} \geq 0\ \ \forall n \geq 1$
- $\iff \dfrac{n\left((n+1)^2+1\right) - (n+1)(n^2+1)}{(n^2+1)\left((n+1)^2+1\right)} \geq 0$; i due fattori del denominatore sono $> 0 \Rightarrow$ denominatore $> 0$, quindi $\iff$ numeratore $\geq 0$
- $\iff n(n+1)^2 + n - n^3 - n^2 - n - 1 \geq 0 \iff n^3 + 2n^2 + n + n - n^3 - n^2 - n - 1 \geq 0 \iff n^2 + n - 1 \geq 0$
- $\iff n^2 + n \geq 1$ (con $n^2 \geq 1$ e $n \geq 1$): è soddisfatta $\forall n \geq 1$.

### Nepero generalizzato: $\lim\left(1 + \frac{\alpha}{n}\right)^n$ (slide 37, 6/10)

- Caso $\alpha = 0$: la successione coinvolta è $(1, 1, 1, \dots)$, $\lim = 1 = e^0$.
- Caso $\alpha \neq 0$: scegliamo $a_n = \dfrac{n}{\alpha}$. Quindi $\vert a_n\vert \xrightarrow[n\to+\infty]{} +\infty$. Allora per ★
$$
\lim_{n\to+\infty}\left(\left(1 + \frac{\alpha}{n}\right)^{\frac n\alpha}\right)^{\alpha} = e^{\alpha}
$$
- «Se posso permettermi di elevare alla $\alpha$ dentro il limite posso riscrivere» $\displaystyle\lim_{n\to+\infty}\left(1 + \frac\alpha n\right)^n = e^\alpha$. In conclusione, $\forall\alpha \in \mathbb{R}$: $\displaystyle\lim_{n\to+\infty}\left(1 + \frac\alpha n\right)^n = e^\alpha$.

### Limitata per infinitesima (slide 42-43, 6/10 e 7/10)

- $\lim \dfrac{(-1)^n}{n}$: $a_n = \frac1n \to 0$, $b_n = (-1)^n$ limitata; applicando il teorema, la successione $\to 0$ (slide 42). Slide 53: «$\frac{(-1)^n}{n} \to 0$ perché $a_n := (-1)^n$ è limitata, $b_n := \frac1n$ è infinitesima $\Rightarrow$ (teorema visto ieri) limitato $\cdot$ infinitesima $=$ infinitesima».
- Esempio 1 (slide 43): $a_n = \arctan(1 - n^2)$ e $b_n = \frac1n$. Essendo $\vert a_n\vert \leq \frac\pi2$ per ogni $n$ e $b_n \to 0$, si ha $a_n \cdot b_n = \dfrac{\arctan(1 - n^2)}{n} \to 0$.
- Esempio 2 (slide 43): $a_n = \sin(n)$ e $b_n = \frac1n$. Essendo $\vert a_n\vert \leq 1$ per ogni $n$ e $b_n \to 0$, si ha $a_n \cdot b_n = \dfrac{\sin(n)}{n} \to 0$.

### Quoziente: $\lim \dfrac{2 + \frac1n}{3 - \frac{1}{\sqrt n}}$ (slide 47, 6/10)

- $a_n = 2 + \frac1n \to 2$; $c_n = \dfrac{1}{\sqrt n} = \sqrt{\dfrac1n} = \left(\dfrac1n\right)^{1/2} = n^{-1/2} \to 0$; $b_n = 3 - \dfrac{1}{\sqrt n} = 3 - c_n \to 3 - 0 = 3$
- $\Rightarrow \dfrac{a_n}{b_n} \to \dfrac23$

### Potenza: $\lim\left(9 + \frac1n\right)^{\frac{1}{2 + \frac{1}{\sqrt n}}}$ (slide 48, 7/10)

- Base $\to 9$ (limite somma $=$ somma limiti). Esponente: $\dfrac{1}{2 + \frac{1}{\sqrt n}}$, con $2$ (limite somma) e $\frac{1}{\sqrt n}$ (visto ieri) $\to 0$, quindi esponente $\to \frac12$ (limite rapporto).
- Infine: base $\to 9$, esponente $\to \frac12 \Rightarrow \lim = 9^{1/2} = 3$.

### Forma determinata: $\lim\left(\sqrt{2 + \frac1n} - \sqrt n\right)$ (slide 49, 7/10)

$$
\lim_{n\to+\infty} \sqrt{2 + \tfrac1n} - \sqrt n = \lim_{n\to+\infty}\left(2 + \tfrac1n\right)^{\frac12} - n^{\frac12} = -\infty
$$
con $\left(2 + \frac1n\right)^{1/2} \to 2^{1/2} = \sqrt2$ (il $2$ è un limite somma) e $n^{1/2} \to +\infty$.

### Forma $[1^\infty]$: $\lim\left(1 + \frac1n\right)^{n^2}$ (slide 54, 7/10)

$$
\lim_{n\to+\infty}\left(1 + \tfrac1n\right)^{n^2} = \lim_{n\to+\infty}\left(\left(1 + \tfrac1n\right)^n\right)^n = +\infty
$$
con la base $\left(1 + \frac1n\right)^n \to e$.

### Tecniche algebriche (slide 56-59, 7/10)

*«somma e sottrai»*: il limite $\lim \frac{n}{n+1}$ presenta una forma indeterminata $\left[\frac\infty\infty\right]$.
$$
\frac{n}{n+1} = \frac{n+1-1}{n+1} = \frac{n+1}{n+1} - \frac{1}{n+1} = 1 - \frac{1}{n+1} \to 1 - \left[\frac1\infty\right] = 1.
$$

*«raccogli chi comanda»*: il limite $\lim \dfrac{n^3 - 2n}{(2n+1)(3n^2 - n + 2)}$ presenta varie forme indeterminate del tipo $[+\infty - \infty]$ sia al numeratore che al denominatore della frazione.
$$
\frac{n^3 - 2n}{(2n+1)(3n^2-n+2)} = \frac{n^3\left(1 - \frac{2n}{n^3}\right)}{2n\left(1 + \frac{1}{2n}\right)3n^2\left(1 - \frac{n-2}{3n^2}\right)} = \frac{n^3\left(1 - \frac{2}{n^2}\right)}{6n^3\left(1 + \frac{1}{2n}\right)\left(1 - \frac{1}{3n} + \frac{2}{3n^2}\right)} = \frac{1 - \frac{2}{n^2}}{6\left(1 + \frac{1}{2n}\right)\left(1 - \frac{1}{3n} + \frac{2}{3n^2}\right)} \to \frac{1 - 0}{6(1+0)(1-0+0)} = \frac16.
$$

*«moltiplica e dividi»*: il limite $\lim\left(1 + \dfrac{1}{2n^2-1}\right)^{3n^2+1}$ presenta una forma indeterminata $[1^\infty]$.
$$
\left(1 + \frac{1}{2n^2-1}\right)^{3n^2+1} = \left(1 + \frac{1}{2n^2-1}\right)^{(3n^2+1)\cdot\frac{2n^2-1}{2n^2-1}} = \left(1 + \frac{1}{2n^2-1}\right)^{(2n^2-1)\frac{3n^2+1}{2n^2-1}} = \left[\left(1 + \frac{1}{2n^2-1}\right)^{2n^2-1}\right]^{\frac{3n^2+1}{2n^2-1}} \to e^{3/2}
$$

*«moltiplica, dividi e razionalizza»*: il limite $\lim\left(\sqrt{n+1} - \sqrt{n-1}\right)$ presenta una forma indeterminata $[+\infty - \infty]$.
$$
\sqrt{n+1} - \sqrt{n-1} = \frac{\left(\sqrt{n+1} - \sqrt{n-1}\right)\left(\sqrt{n+1} + \sqrt{n-1}\right)}{\sqrt{n+1} + \sqrt{n-1}} = \frac{\left(\sqrt{n+1}\right)^2 - \left(\sqrt{n-1}\right)^2}{\sqrt{n+1} + \sqrt{n-1}} = \frac{n + 1 - (n-1)}{\sqrt{n+1} + \sqrt{n-1}} = \frac{2}{\sqrt{n+1} + \sqrt{n-1}} \to \left[\frac2\infty\right] = 0.
$$

### Gerarchia: attenti a come la si usa (slide 67, 12/10)

$\lim\dfrac{\log(3n^2)}{\sqrt n}$:
$$
\log(3n^2) = \log(3) + \log(n^2) = \log(3) + 2\log n
$$
$$
\lim_{n\to+\infty}\frac{\log(3n^2)}{\sqrt n} = \lim_{n\to+\infty}\frac{\log(3) + 2\log(n)}{n^{1/2}} = \lim_{n\to+\infty}\left(\frac{\log(3)}{n^{1/2}} + \frac{2\log n}{n^{1/2}}\right) = 0
$$
con entrambi gli addendi $\to 0$.

$\lim\dfrac{\log(2^n+1)}{n}$, metodo 1:
$$
2^n + 1 = 2^n\left(1 + \tfrac{1}{2^n}\right) \qquad \log(2^n+1) = \log(2^n) + \log\left(1 + \tfrac{1}{2^n}\right) = n\log 2 + \log\left(1 + \tfrac{1}{2^n}\right)
$$
$$
\lim_{n\to+\infty}\frac{n\log 2 + \log\left(1 + \frac{1}{2^n}\right)}{n} = \log 2 \qquad \text{(con } \log\left(1 + \tfrac1{2^n}\right) \to 0\text{)}
$$

metodo 2: considero la successione $a_n = \dfrac{\log(2^n)}{n} = \log 2$. Noto che $a_n \leq \dfrac{\log(2^n+1)}{n}\ \ \forall n$. Considero $b_n = \dfrac{\log(2^{n+1})}{n}$. Siccome $2^n + 1 \leq 2^{n+1}\ \ \forall n$, allora
$$
a_n = \log 2 \leq \frac{\log(2^n+1)}{n} \leq b_n = \frac{n+1}{n}\log 2 \to \log 2
$$
Per il teorema dei due carabinieri, otteniamo che $\displaystyle\lim_{n\to+\infty}\frac{\log(2^n+1)}{n} = \log 2$.

### Criterio del rapporto: $\lim \dfrac{(2n)!}{n^{n/2}}$ (slide 68, 12/10)

Con $a_n = \dfrac{(2n)!}{n^{n/2}}$:
$$
\frac{a_{n+1}}{a_n} = \frac{(2n+2)!}{(n+1)^{\frac{n+1}{2}}}\cdot\frac{n^{n/2}}{(2n)!} = \frac{2(n+1)(2n+1)\,(2n)!}{(2n)!}\cdot\frac{n^{n/2}}{(n+1)^{\frac{n+1}{2}}} = 2(n+1)^{\frac12}(2n+1)\left(\frac{n}{n+1}\right)^{\frac n2}
$$
$$
= 2(n+1)^{\frac12}(2n+1)\left(1 + \frac1n\right)^{-\frac n2} = +\infty \qquad \text{con } \left(1 + \tfrac1n\right)^{-\frac n2} \to \tfrac{1}{\sqrt e}
$$

### Criterio del rapporto: $\lim \dfrac{n!\,a^n}{n^n}$ con $a = 2, 3$ (slide 68, correzione, 12/10)

Sia $b_n = \dfrac{n!\,a^n}{n^n}$.
$$
\frac{b_{n+1}}{b_n} = \frac{(n+1)!\,a^{n+1}}{(n+1)^{n+1}}\cdot\frac{n^n}{n!\,a^n} = (n+1)\cdot\frac{n^n}{(n+1)^n(n+1)}\cdot a = \left(\frac{n}{n+1}\right)^n a
$$
$$
\lim_{n\to+\infty}\frac{b_{n+1}}{b_n} = \lim_{n\to+\infty} a\left(1 + \frac1n\right)^{-n} = \frac ae
$$
Se $a = 2$, $\frac ae < 1 \Rightarrow$ la successione converge a zero. Se $a = 3$, $\frac ae > 1 \Rightarrow$ la successione diverge a $+\infty$.

## Crocette delle provette

### 2025, domanda 8

Cosa si può concludere su una successione reale $\{a_n\}$ tale che

$$
\left\vert a_n + \frac{1}{n} - 1\right\vert \le \frac{1}{n} \qquad \forall n \in \mathbb{N} \setminus \{0\} ?
$$

- a) $a_n$ non ha limite.
- b) $a_n$ tende a $0$
- c) $a_n$ tende a infinito
- d) $a_n$ tende a $1$.

> [!example]- Soluzione
> **d**. $$-\frac{1}{n} \le a_n + \frac{1}{n} - 1 \le \frac{1}{n}$$
> $$
> -\frac{2}{n} \le a_n - 1 \le 0
> $$
> $$
> 1 - \frac{2}{n} \le a_n \le 1
> $$
> con $1 - \frac{2}{n} \xrightarrow{n\to\infty} 1$ e $1 \xrightarrow{n\to\infty} 1$: per il teorema dei carabinieri $a_n$ tende a $1$.

### 2024, domanda 6

Calcolare (dove $\log$ denota il logaritmo in base $e$)

$$
\lim_{n\to\infty} \frac{e^n - e^{n\log(n)\log(2)}}{n^n}
$$

- a) $0$
- b) $1$
- c) $-1$
- d) $-\infty$

> [!example]- Soluzione
> **a**. $$\lim_{n\to\infty} \frac{e^n - e^{n\log(n)\log(2)}}{n^n} = \lim_{n\to\infty} \underbrace{\frac{e^n}{n^n}}_{\to 0} - \lim_{n\to\infty} \frac{\left(e^{\log(n)}\right)^{n\log(2)}}{n^n} =$$
> $$
> = -\lim_{n\to\infty} \frac{n^{n\log(2)}}{n^n} = -\lim_{n\to\infty} n^{n\log(2) - n} = -\lim_{n\to\infty} n^{n(\log(2) - 1)} = -\left(\lim_{n\to\infty} n^n\right)^{\log(2) - 1} = 0
> $$
> con $\log(2) - 1 < 0$.

### 2023 v1, domanda 4

Quale delle seguenti proprietà della successione $(a_n)_{n \in \mathbb{N}}$ è implicata dalla proposizione: esiste $M > 0$ tale che $\vert a_n - a_m\vert < 1$ per ogni $n > M, m > M$

- a) esiste $\lim_{n \to \infty} a_n < 1$
- b) esiste $\lim_{n \to \infty} a_n < +\infty$
- c) $a_n$ è limitata
- d) esiste il minimo di $A := \{a_n : n \in \mathbb{N}\}$

> [!example]- Soluzione
> **c**. $(*)$ $\exists M > 0$ t.c. $\vert a_n - a_m\vert < 1$ $\forall n > M, m > M$.
> a) e d) sono FALSE. Basta prendere $a_n = \left\{2 + \frac{1}{n}\right\}_{n \in \mathbb{N} \setminus \{0\}}$ per avere una successione che soddisfa $(*)$, non soddisfa a), infatti $\lim_{n \to +\infty} 2 + \frac{1}{n} = 2$, non soddisfa d), infatti $\inf(A) = 2$ e $\nexists \min(A)$.
> b) è FALSA. Basta prendere $a_n = \left\{\frac{(-1)^n}{4}\right\}_{n \in \mathbb{N}}$ per avere una successione che soddisfa $(*)$ e non soddisfa b), infatti $\nexists \lim_{n \to +\infty} \frac{(-1)^n}{4}$.
> c) è VERA. Per semplicità, consideriamo $M \in \mathbb{N}$. Osserviamo che:
> i. La sottosuccessione $\{a_n\}_{n \geq M+1}$ è limitata, per $(*)$, infatti
> $$
> \vert a_n - a_m\vert < 1 \Rightarrow -1 + a_m < a_n < 1 + a_m \quad \forall n, m > M
> $$
> in particolare, per $m = M + 1$:
> $$
> -1 + a_{M+1} < a_n < 1 + a_{M+1} \quad \forall n > M
> $$
> ii. L'insieme $\{a_n\}_{0 \leq n \leq M}$ è finito, quindi ammette massimo e minimo.
> $$
> t := \max_{0 \leq n \leq M} a_n \; ; \quad s := \min_{0 \leq n \leq M} a_n
> $$
> Ne consegue che $\max\{t, 1 + a_{M+1}\}$ è MAGGIORANTE per $a_n$ e $\min\{s, -1 + a_{M+1}\}$ è MINORANTE per $a_n$
> $\to$ $a_n$ è limitata.

### 2023 v2, domanda 2

Quale delle seguenti proprietà della successione $(a_n)_{n \in \mathbb{N}}$ è implicata dalla proposizione: esiste $M > 0$ tale che $\vert a_n - a_m\vert > 1$ per ogni $n > M, m > M, n \neq m$

- a) Se esiste $\lim_{n \to \infty} a_n$ allora non è finito
- b) esiste $\lim_{n \to \infty} a_n < +\infty$
- c) $a_n$ è limitata
- d) esiste il minimo di $A := \{a_n : n \in \mathbb{N}\}$

> [!example]- Soluzione
> **a**. a) è VERA. Supponiamo che il limite di $a_n$ esista finito:
> $$
> \lim_{n \to \infty} a_n = \ell
> $$
> Allora, per definizione di limite di una successione:
> $$
> \forall \varepsilon > 0 \; \exists \bar{n}(\varepsilon) > 0 \text{ t.c. } \vert a_n - \ell\vert < \varepsilon \quad \forall n > \bar{n}(\varepsilon)
> $$
> In particolare, $\forall n, m > \bar{n}(\varepsilon)$, $n \neq m$, vale
> $$
> \vert a_n - a_m\vert = \vert a_n - \ell + \ell - a_m\vert \leq \vert a_n - \ell\vert + \vert \ell - a_m\vert < 2\varepsilon
> $$
> (DISUGUAGLIANZA TRIANGOLARE)
> Quindi per $n > \max\{M, \bar{n}(\varepsilon)\}$, $m > \max\{M, \bar{n}(\varepsilon)\}$, $m \neq n$:
> $$
> \vert a_n - a_m\vert < 2\varepsilon < 1
> $$
> che contraddice l'ipotesi $\blacksquare$ (per arbitrarietà di $\varepsilon$).

### 2023 v1, domanda 5

Determinare il valore di $\alpha \in \mathbb{R}$ per cui

$$
\lim_{n \to \infty} n\left(\sqrt{\frac{n + \alpha}{n}} - \cos\frac{1}{\sqrt{n}}\right) = 1
$$

- a) $\alpha = 0$
- b) $\alpha = 1$
- c) $\alpha = -1$
- d) non esiste tale $\alpha$

> [!example]- Soluzione
> **b**. Il limite dà una forma indeterminata di tipo $0 \cdot \infty$. Per scioglierla useremo il limite notevole
> $$
> \lim_{\square \to 0} \frac{1 - \cos\square}{\square^2} = \frac{1}{2}
> $$
> che diventa più evidente se si effettua la sostituzione $t = \frac{1}{n}$:
> $$
> \lim_{n \to \infty} n\left(\sqrt{\frac{n + \alpha}{n}} - \cos\frac{1}{\sqrt{n}}\right) = \lim_{t \to 0} \frac{1}{t}\left(\sqrt{1 + \alpha t} - \cos\sqrt{t}\right)
> $$
> $$
> \frac{1}{t}\left(\sqrt{1 + \alpha t} - \cos\sqrt{t}\right) = \frac{1}{t}\left(\sqrt{1 + \alpha t} - 1 + 1 - \cos\sqrt{t}\right)
> $$
> $$
> = \frac{\sqrt{1 + \alpha t} - 1}{t} + \frac{1 - \cos\sqrt{t}}{t} = \frac{\sqrt{1 + \alpha t} - 1}{t} \cdot \frac{\sqrt{1 + \alpha t} + 1}{\sqrt{1 + \alpha t} + 1} + \frac{1 - \cos\sqrt{t}}{t}
> $$
> $$
> = \frac{\alpha t}{t\left(\sqrt{1 + \alpha t} + 1\right)} + \frac{1 - \cos\sqrt{t}}{t} \xrightarrow{t \to 0} \frac{\alpha + 1}{2}
> $$
> *(sotto: il primo addendo tende a $\frac{\alpha}{2}$, il secondo a $\frac{1}{2}$)*
> $$
> \Rightarrow \frac{\alpha + 1}{2} = 1 \Rightarrow \alpha = 1
> $$

### 2023 v2, domanda 3

Determinare il valore di $\alpha \in \mathbb{R}$ per cui

$$
\lim_{n \to \infty} n\left(\sqrt{\frac{n + \alpha}{n}} - \cos\frac{1}{\sqrt{n}}\right) = 0
$$

- a) $\alpha = 0$
- b) $\alpha = 1$
- c) $\alpha = -1$
- d) non esiste tale $\alpha$

> [!example]- Soluzione
> **c**. Stessa soluzione della versione 1 fino a
> $$
> \frac{\alpha t}{t\left(\sqrt{1 + \alpha t} + 1\right)} + \frac{1 - \cos\sqrt{t}}{t} \xrightarrow{t \to 0} \frac{\alpha + 1}{2}
> $$
> $$
> \Rightarrow \frac{\alpha + 1}{2} = 0 \Rightarrow \alpha = -1
> $$
> *(il testo del prof è identico a quello della v1 per tutti i passaggi, cambia solo l'ultima riga)*

### 2022 A, domanda 1

Determinare il valore di $\alpha \in \mathbb{R}$ per cui

$$
\lim_{n \to \infty} \left(1 + \frac{\alpha}{n}\right)^n \left(1 + \frac{2\alpha}{n}\right)^n = 2
$$

- a) $\alpha = \log(2)/3$
- b) $\alpha = \log(3)/2$
- c) $\alpha = 0$
- d) Nessuna delle precedenti

> [!example]- Soluzione
> **a**. $$\lim_{n \to +\infty} \left(1 + \frac{\alpha}{n}\right)^n \left(1 + \frac{2\alpha}{n}\right)^n = 2$$
> $$
> \left[\left(1 + \frac{\alpha}{n}\right)^{\frac{n}{\alpha}}\right]^{\alpha} \cdot \left[\left(1 + \frac{2\alpha}{n}\right)^{\frac{n}{2\alpha}}\right]^{2\alpha} \xrightarrow{n \to +\infty} e^{\alpha} \cdot e^{2\alpha} = e^{3\alpha}
> $$
> Ora $e^{3\alpha} = 2 \iff 3\alpha = \log 2 \iff \alpha = \frac{\log 2}{3}$.

### 2019, compito 1 domanda 3

Il limite $\displaystyle\lim_{n \to +\infty} \dfrac{2^{1-n} + n\sqrt{n^2 + 1} - \log(n^4)}{n^3 \sin(2/n) + n\cos(n)}$ vale

- a) $0$
- b) $\frac{1}{2}$
- c) $\nexists$
- d) $1$

> [!example]- Soluzione
> **b**. Numeratore $\sim n^2$, denominatore $\sim 2n^2 + n\cos n \sim 2n^2$. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 2 domanda 1

Il limite $\displaystyle\lim_{n \to +\infty} \dfrac{\sqrt{n^3} + 3^{-n} - \log(n^2 + 1)}{n^2 \sin(1/\sqrt{n}) + n\log n}$ vale

- a) $\nexists$
- b) $0$
- c) $1$
- d) $+\infty$

> [!example]- Soluzione
> **c**. Numeratore $\sim n^{3/2}$, denominatore $\sim n^2 \cdot n^{-1/2} = n^{3/2}$. *(conto mio, la chiave dà solo la risposta)*

### simulazione, domanda 4

$$
\lim_{n\to+\infty} \frac{(\log n)^4 + \sin n^2 + 3^n}{n^{17} + 2^{3n} + 7^{-n}} =
$$

- a) $\frac{3}{2}$
- b) $+\infty$
- c) $0$
- d) non esiste

> [!example]- Soluzione
> **c**. Il numeratore è $\sim 3^n$, il denominatore è $\sim 2^{3n} = 8^n$: il rapporto è $\sim \left(\frac{3}{8}\right)^n \to 0$. *(conto mio, la chiave dà solo la risposta)*

## Esercizi delle provette

### 2025, esercizio 2 (c nel testo, b nella soluzione), 12 punti in tutto

Calcolare il limite:

$$
\lim_{n\to\infty} \frac{2^n + 3^n + n^3}{3^n + n!}.
$$

> [!example]- Soluzione
> $$
> \frac{2^n + 3^n + n^3}{3^n + n!} = \frac{3^n\left(\left(\frac{2}{3}\right)^n + 1 + \frac{n^3}{3^n}\right)}{n!\left(\frac{3^n}{n!} + 1\right)} \xrightarrow{n\to+\infty} 0
> $$
> (con $\left(\frac{2}{3}\right)^n \to 0$, $\frac{n^3}{3^n} \to 0$, $\frac{3^n}{n!} \to 0$)
>
> Giustifichiamo $\lim_{n\to+\infty} \frac{3^n}{n!} = 0$ usando il CR. RAPPORTO:
> $$
> \frac{3^{n+1}}{(n+1)!} \cdot \frac{n!}{3^n} = \frac{3^n \cdot 3}{(n+1)\,n!} \cdot \frac{n!}{3^n} = \frac{3}{n+1} \xrightarrow{n\to+\infty} 0
> $$
> Quindi $\lim_{n\to+\infty} \frac{3^n}{n!} = 0$.

### 2024, esercizio 2 (1), 8 punti in tutto

Calcolare il limite:

$$
\lim_{n\to\infty} \frac{(n+3)^n - n!}{n^n + 2024}.
$$

> [!example]- Soluzione
> $$
> \lim_{n\to\infty} \frac{\left[n\left(1 + \frac{3}{n}\right)\right]^n - n!}{n^n\left(1 + \frac{2024}{n^n}\right)}
> $$
> $$
> = \lim_{n\to\infty} \frac{\cancel{n^n}\left(\left(1 + \frac{3}{n}\right)^{\frac{n}{3}}\right)^3}{\cancel{n^n}\underbrace{\left(1 + \frac{2024}{n^n}\right)}_{\to 1}} - \frac{\overbrace{\frac{n!}{n^n}}^{\to 0 \text{ per confronto tra infiniti}}}{\underbrace{\left(1 + \frac{2024}{n^n}\right)}_{\to 1}}
> $$
> con $\left(1 + \frac{3}{n}\right)^{\frac{n}{3}} \to e$
> $$
> = e^3
> $$

### 2024, esercizio 2 (2) e (3), 8 punti in tutto

Calcolare il limite:

$$
\lim_{n\to\infty} (n - \sqrt{n-3}).
$$

Dire quanto vale:

$$
\sup\left\{x \in \mathbb{R} \mid x = n - \sqrt{n-3},\ n \in \mathbb{N},\ n \ge 3\right\}.
$$

> [!example]- Soluzione
> 2) $$\lim_{n\to\infty} n\left(1 - \sqrt{\frac{n-3}{n^2}}\right) = +\infty$$
> (con $\sqrt{\frac{n-3}{n^2}} \to 0$ e $1 - \sqrt{\frac{n-3}{n^2}} \to 1$)
>
> 3) Dal punto 2) segue che $\forall M > 0$ $\exists n \in \mathbb{N}$, $n \ge 3$ t.c. $n - \sqrt{n-3} \ge M$. Dunque l'estremo superiore dell'insieme è $+\infty$.

### 2023 v1, esercizio 2, 6 punti

Calcolare il seguente limite:

$$
\lim_{n \to \infty} n \log\left(\frac{1}{n} + \cos\left(\frac{1}{n}\right)\right)
$$

Si ricorda che $\log(x)$ denota il logaritmo in base $e$.

> [!example]- Soluzione
> MODO PIÙ RIGOROSO:
> $$
> n \log\left(\frac{1}{n} + \cos\left(\frac{1}{n}\right)\right) = n \log\left[\cos\left(\frac{1}{n}\right) \cdot \left(\frac{1}{n\cos\left(\frac{1}{n}\right)} + 1\right)\right]
> $$
> $$
> = n\left[\log\left(\cos\left(\frac{1}{n}\right) - 1 + 1\right) + \log\left(\frac{1}{n\cos\left(\frac{1}{n}\right)} + 1\right)\right]
> $$
> $$
> = n\left[\log\left(\frac{\cos\left(\frac{1}{n}\right) - 1}{\left(\frac{1}{n}\right)^2} \cdot \left(\frac{1}{n^2}\right) + 1\right) + \log\left(\frac{1}{n\cos\left(\frac{1}{n}\right)} + 1\right)\right]
> $$
> $$
> = n\left[\frac{\log\left(\frac{\cos\left(\frac{1}{n}\right) - 1}{\left(\frac{1}{n}\right)^2} \cdot \left(\frac{1}{n^2}\right) + 1\right)}{\frac{\cos\left(\frac{1}{n}\right) - 1}{\left(\frac{1}{n}\right)^2} \cdot \left(\frac{1}{n^2}\right)} \cdot \frac{\cos\left(\frac{1}{n}\right) - 1}{\left(\frac{1}{n}\right)^2} \cdot \left(\frac{1}{n^2}\right) + \frac{\log\left(\frac{1}{n\cos\left(\frac{1}{n}\right)} + 1\right)}{\frac{1}{n\cos\left(\frac{1}{n}\right)}} \cdot \frac{1}{n\cos\left(\frac{1}{n}\right)}\right]
> $$
> Annotazioni sotto la riga: il primo rapporto con il $\log$ tende a $1$, $\frac{\cos\left(\frac{1}{n}\right) - 1}{\left(\frac{1}{n}\right)^2}$ tende a $-\frac{1}{2}$, il fattore $\frac{1}{n^2}$ (con il $n$ davanti) tende a $0$, il secondo rapporto con il $\log$ tende a $1$, il fattore $\frac{1}{\cos\left(\frac{1}{n}\right)}$ (con il $n$ davanti) tende a $1$.
> $$
> \xrightarrow{n \to \infty} 1
> $$
> MODO MENO RIGOROSO:
> $$
> n \log\left(\frac{1}{n} + \cos\left(\frac{1}{n}\right)\right) = n \cdot \frac{1}{n} \cdot \frac{\log\left(\frac{1}{n} + \cos\left(\frac{1}{n}\right)\right)}{\frac{1}{n}} \xrightarrow{n \to \infty} 1
> $$
> *(annotazioni: $\frac{1}{n} \to 0$, $\cos\left(\frac{1}{n}\right) \to 1$ dentro il $\log$, il rapporto tende a $1$)*
> $$
> \Rightarrow \lim_{n \to \infty} n \log\left(\frac{1}{n} + \cos\left(\frac{1}{n}\right)\right) = 1
> $$

### 2023 v1, esercizio 3, 8 punti

Determinare, se esistono, i seguenti limiti

$$
\lim_{n \to \infty} \frac{e^n + 5\log(n) + 7}{2^n - n^3 + \sqrt{n}};
$$

$$
\lim_{n \to \infty} (3 + \sin(2n))^{-2n};
$$

$$
\lim_{x \to +\infty} \sqrt{x^2 + x} - x.
$$

Si ricorda che $\log(x)$ denota il logaritmo in base $e$.

> [!example]- Soluzione
> 3.1) $$\lim_{n \to \infty} \frac{e^n + 5\log(n) + 7}{2^n - n^3 + \sqrt{n}} = \left[\tfrac{\infty}{\infty}\right]_{\text{F.I.}}$$
> $$
> \frac{e^n + 5\log(n) + 7}{2^n - n^3 + \sqrt{n}} = \frac{e^n\left(1 + \frac{5\log(n)}{e^n} + \frac{7}{e^n}\right)}{2^n\left(1 - \frac{n^3}{2^n} + \frac{\sqrt{n}}{2^n}\right)} = \left(\frac{e}{2}\right)^n \cdot \frac{1 + \frac{5\log(n)}{e^n} + \frac{7}{e^n}}{1 - \frac{n^3}{2^n} + \frac{\sqrt{n}}{2^n}} \xrightarrow{n \to +\infty} +\infty
> $$
> *(annotazioni: $\left(\frac{e}{2}\right)^n \to \infty$ perché $\frac{e}{2} > 1$, il secondo fattore tende a $1$)*
> $$
> \Rightarrow \lim_{n \to \infty} \frac{e^n + 5\log(n) + 7}{2^n - n^3 + \sqrt{n}} = +\infty
> $$
> 3.2) $$\lim_{n \to \infty} (3 + \sin(2n))^{-2n} = \left[?\right]^{-\infty}$$
> $$
> 2 \leq 3 + \sin(2n) \leq 4 \;\; (n > 0) \Rightarrow 2^{2n} \leq (3 + \sin(2n))^{2n} \leq 4^{2n}
> $$
> $$
> \Rightarrow 2^{-2n} \geq (3 + \sin(2n))^{-2n} \geq 4^{-2n}
> $$
> con $2^{-2n} \to 0$ e $4^{-2n} \to 0$ per $n \to \infty$
> $$
> \Rightarrow (3 + \sin(2n))^{-2n} \xrightarrow{n \to \infty} 0 \quad \text{per T. CARABINIERI}
> $$
> $$
> \Rightarrow \lim_{n \to \infty} (3 + \sin(2n))^{-2n} = 0
> $$
> 3.3) $$\lim_{x \to +\infty} \sqrt{x^2 + x} - x = [\infty - \infty]_{\text{F.I.}}$$
> $$
> \left(\sqrt{x^2 + x} - x\right)\frac{\sqrt{x^2 + x} + x}{\sqrt{x^2 + x} + x} = \frac{x^2 + x - x^2}{\sqrt{x^2 + x} + x} = \frac{x}{\sqrt{x^2\left(1 + \frac{1}{x}\right)} + x} = \frac{x}{\vert x\vert\sqrt{1 + \frac{1}{x}} + x} = \frac{x}{x\left(\sqrt{1 + \frac{1}{x}} + 1\right)} \xrightarrow{x \to +\infty} \frac{1}{2}
> $$
> *(annotazione: $\vert x\vert = x$ perché $x \to +\infty$)*
> $$
> \Rightarrow \lim_{x \to +\infty} \sqrt{x^2 + x} - x = \frac{1}{2}
> $$

### 2023 v2, esercizio 3, 8 punti

Determinare, se esistono, i seguenti limiti

$$
\lim_{n \to \infty} \frac{e^n + 5\log(n) + 7}{3^n - n^4 + \sqrt{n}};
$$

$$
\lim_{n \to \infty} \frac{1}{\vert 3 + \sin(2n)\vert^{2n}};
$$

$$
\lim_{x \to 0} \frac{\pi^{2x} - 1}{3x}.
$$

Si ricorda che $\log(x)$ denota il logaritmo in base $e$.

> [!example]- Soluzione
> $$
> \lim_{n \to \infty} \frac{e^n + 5\log(n) + 7}{3^n - n^4 + \sqrt{n}} = \left[\tfrac{\infty}{\infty}\right]_{\text{F.I.}}
> $$
> SOLUZIONE.
> $$
> \frac{e^n + 5\log(n) + 7}{3^n - n^4 + \sqrt{n}} = \frac{e^n\left(1 + \frac{5\log(n)}{e^n} + \frac{7}{e^n}\right)}{3^n\left(1 - \frac{n^4}{3^n} + \frac{\sqrt{n}}{3^n}\right)} = \left(\frac{e}{3}\right)^n \cdot \frac{1 + \frac{5\log(n)}{e^n} + \frac{7}{e^n}}{1 - \frac{n^4}{3^n} + \frac{\sqrt{n}}{3^n}} \xrightarrow{n \to +\infty} 0
> $$
> *(annotazioni: $\left(\frac{e}{3}\right)^n \to 0$ perché $\frac{e}{3} < 1$, il secondo fattore tende a $1$)*
> $$
> \Rightarrow \lim_{n \to \infty} \frac{e^n + 5\log(n) + 7}{3^n - n^4 + \sqrt{n}} = 0
> $$
> $$
> \lim_{n \to \infty} \frac{1}{\vert 3 + \sin(2n)\vert^{2n}}
> $$
> SOLUZIONE.
> $$
> 2 \leq \vert 3 + \sin(2n)\vert \leq 4
> $$
> $$
> 2^{2n} \leq \vert 3 + \sin(2n)\vert^{2n} \leq 4^{2n}
> $$
> $$
> \frac{1}{2^{2n}} \geq \frac{1}{\vert 3 + \sin(2n)\vert^{2n}} \geq \frac{1}{4^{2n}}
> $$
> con $\frac{1}{2^{2n}} \to 0$ e $\frac{1}{4^{2n}} \to 0$ per $n \to +\infty$
> $$
> \xrightarrow{\text{T. dei CARABINIERI}} \lim_{n \to +\infty} \frac{1}{\vert 3 + \sin(2n)\vert^{2n}} = 0
> $$
> $$
> \lim_{x \to 0} \frac{\pi^{2x} - 1}{3x} = \left[\tfrac{0}{0}\right]_{\text{F.I.}}
> $$
> $$
> \frac{\pi^{2x} - 1}{3x} = \frac{e^{2x\log\pi} - 1}{3x} = \frac{e^{2x\log\pi} - 1}{2x\log\pi} \cdot \frac{2x\log\pi}{3x} \xrightarrow{x \to 0} \frac{2}{3}\log\pi
> $$
> *(annotazione: $\frac{e^{2x\log\pi} - 1}{2x\log\pi} \to 1$)*
> $$
> \Rightarrow \lim_{x \to 0} \frac{\pi^{2x} - 1}{3x} = \frac{2}{3}\log\pi
> $$

## Esercizi dei fogli e delle esercitazioni

### Slide 60 (7/10), esercizio 1 (Esercitazione 4, 2.1)

Utilizzando opportune manipolazioni algebriche e limiti noti, calcoliamo i limiti:
$$
\lim_{n\to+\infty}\frac{n(1-2n^2) - 3n + 1}{(4-n)(5-n)}
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 7)*
> $$
> \frac{-2n^3 - 2n + 1}{n^2 - 9n + 20} = \frac{n^3\left(-2 - \frac{2}{n^2} + \frac{1}{n^3}\right)}{n^2\left(1 - \frac9n + \frac{20}{n^2}\right)} \to -\infty \qquad \text{(il primo gruppo} \to -2\text{, il secondo} \to 1\text{)}
> $$
> Il limite è $-\infty$.

### Slide 60 (7/10), esercizio 2 (Esercitazione 4, 2.2)

$$
\lim_{n\to+\infty}\left(\frac{n^2 - n + 1}{n^2 - 1}\right)^{\frac{3-2n^2}{n+3}}
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 8; promemoria del tutor: $a_n \to \pm\infty \Rightarrow \left(1 + \frac{1}{a_n}\right)^{a_n} \to e$)*
> Forma indeterminata $[1^\infty]$.
> $$
> \left(\frac{n^2 - 1 - n + 2}{n^2 - 1}\right)^{\frac{3-2n^2}{n+3}} = \left(1 + \frac{-n+2}{n^2-1}\right)^{\frac{3-2n^2}{n+3}} = \left(1 + \frac{1}{\frac{n^2-1}{2-n}}\right)^{\frac{3-2n^2}{n+3}} = \left[\left(1 + \frac{1}{\frac{n^2-1}{2-n}}\right)^{\frac{n^2-1}{2-n}}\right]^{\frac{2-n}{n^2-1}\cdot\frac{3-2n^2}{n+3}}
> $$
> La base fra quadre $\to e$; l'esponente $\frac{2-n}{n^2-1}\cdot\frac{3-2n^2}{n+3} \to 2$. Il limite è $e^2$.

### Slide 60 (7/10), esercizio 3 (Esercitazione 4, 2.3)

$$
\lim_{n\to+\infty} n\left(\sqrt{n^2+2} - \sqrt{n^2+3}\right)
$$

> [!example]- Soluzione
> *(il tutor, Esercitazione 4, pag. 8, scrive $n \to -\infty$ e trova $\frac12$, con $\vert n\vert = -n$; la slide ha $n \to +\infty$, corretto: $-\frac12$)*
> Forma $[+\infty - \infty]$. Moltiplico e divido per la somma delle radici:
> $$
> n\left(\sqrt{n^2+2} - \sqrt{n^2+3}\right)\frac{\sqrt{n^2+2} + \sqrt{n^2+3}}{\sqrt{n^2+2} + \sqrt{n^2+3}} = \frac{n\,(n^2 + 2 - n^2 - 3)}{\vert n\vert\left(\sqrt{1 + \frac{2}{n^2}} + \sqrt{1 + \frac{3}{n^2}}\right)}
> $$
> Per $n \to +\infty$ vale $\vert n\vert = n$:
> $$
> = \frac{-n}{n\left(\sqrt{1 + \frac{2}{n^2}} + \sqrt{1 + \frac{3}{n^2}}\right)} = \frac{-1}{\sqrt{1 + \frac{2}{n^2}} + \sqrt{1 + \frac{3}{n^2}}} \to -\frac12
> $$
> *(per $n \to -\infty$, come sul foglio del tutor, $\vert n\vert = -n$ e il limite è $\frac12$)*

### Slide 60 (7/10), esercizio 4 (Esercitazione 4, 2.4)

$$
\lim_{n\to+\infty}\left(\frac{\sqrt n - 1}{n+1}\right)^{n+3^{-n}}
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 8)*
> La base $\frac{\sqrt n - 1}{n+1} \to 0$, l'esponente $n + 3^{-n} \to +\infty$. Il limite è $0$: «non è una forma indeterminata».

### Slide 60 (7/10), esercizio 5 (Esercitazione 4, 2.5)

$$
\lim_{n\to+\infty}\frac{5^n}{2^n + 3^n}
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 8)*
> **Modo 1.**
> $$
> \frac{5^n}{3^n\left(\frac{2^n}{3^n} + 1\right)} = \frac{\left(\frac53\right)^n}{\left(\frac23\right)^n + 1} \to +\infty \qquad \text{(numeratore} \to +\infty\text{, } \left(\tfrac23\right)^n \to 0\text{)}
> $$
> **Modo 2** (promemoria del tutor: criterio del rapporto, $a_n$ a termini positivi, $\frac{a_{n+1}}{a_n} \to L$: $L > 1 \Rightarrow a_n \to +\infty$, $L < 1 \Rightarrow a_n \to 0$; criterio della radice: se $\exists \lim \frac{a_{n+1}}{a_n} = L$ allora $\sqrt[n]{a_n} \to L$)
> $$
> \sqrt[n]{\frac{5^n}{2^n + 3^n}} = \sqrt[n]{\frac{5^n}{3^n\left(\left(\frac23\right)^n + 1\right)}} = \frac53\cdot\frac{1}{\sqrt[n]{\left(\frac23\right)^n + 1}} \to \frac53 =: L
> $$
> $L > 1 \Rightarrow a_n \to +\infty$.

### Slide 60 (7/10), esercizio 6

$$
\lim_{n\to+\infty}\frac{2^n + n^7}{\log n + n^2}
$$

> [!example]- Soluzione
> Raccolgo $2^n$ sopra e $n^2$ sotto:
> $$
> \frac{2^n\left(1 + \frac{n^7}{2^n}\right)}{n^2\left(\frac{\log n}{n^2} + 1\right)} = \frac{2^n}{n^2}\cdot\frac{1 + \frac{n^7}{2^n}}{1 + \frac{\log n}{n^2}}
> $$
> Per la gerarchia $\frac{n^7}{2^n} \to 0$, $\frac{\log n}{n^2} \to 0$, $\frac{2^n}{n^2} \to +\infty$. Il limite è $+\infty \cdot 1 = +\infty$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Esempio istruttivo (attenzione a «sostituire») (Esercitazione 4, pag. 7)

$$
\lim_{n\to+\infty}\sqrt{n^2 + 2n} - n
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 7)*
> **Come sbagliare male:** $\sqrt{n^2+2n} \sim \sqrt{n^2} = n$, quindi $\lim \sqrt{n^2+2n} - n = \lim n - n = 0$.
> **Come fare giusto:**
> $$
> \lim_{n\to+\infty}\sqrt{n^2+2n} - n \overset{\infty-\infty}{=} \lim_{n\to+\infty}\frac{\left(\sqrt{n^2+2n} - n\right)\left(\sqrt{n^2+2n} + n\right)}{\sqrt{n^2+2n} + n} = \lim_{n\to+\infty}\frac{n^2 + 2n - n^2}{\sqrt{n^2+2n} + n} = \lim_{n\to+\infty}\frac{2n}{\sqrt{n^2\left(1 + \frac2n\right)} + n}
> $$
> $$
> = \lim_{n\to+\infty}\frac{2n}{\vert n\vert\sqrt{1 + \frac2n} + n} \overset{(n\to+\infty)}{=} \lim_{n\to+\infty}\frac{2n}{n\sqrt{1 + \frac2n} + n} = \lim_{n\to+\infty}\frac{2n}{n\left(\sqrt{1 + \frac2n} + 1\right)} = \frac22 = 1
> $$

### Esercitazione 4, 3.1

$$
\lim_{n\to+\infty}\left(1 + \frac{1}{n!}\right)^n
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 9)*
> $$
> \left(1 + \frac{1}{n!}\right)^n = \left[\left(1 + \frac{1}{n!}\right)^{n!}\right]^{\frac{n}{n!}} \to e^0 = 1
> $$
> La base fra quadre $\to e$; l'esponente $\frac{n}{n!} = \frac{1}{(n-1)!} \to 0$.

### Esercitazione 4, 3.2

$$
\lim_{n\to+\infty}(-1)^n\frac{n!}{n^n}
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 9, «con il teorema dei carabinieri»)*
> $$
> 0 < \frac{n!}{n^n} = \frac1n\cdot\frac2n\cdot\frac3n\cdots\frac nn \leq \frac1n \qquad \text{(il primo fattore è } \tfrac1n\text{, gli altri sono} \leq 1\text{)}
> $$
> $$
> 0 \leq \left\vert(-1)^n\frac{n!}{n^n}\right\vert \leq \frac1n \qquad \text{con } 0 \xleftarrow{n\to\infty} 0 \text{ e } \tfrac1n \xrightarrow{n\to\infty} 0
> $$
> Il limite è $0$.

### Esercitazione 4, 3.3

$$
\lim_{n\to+\infty}\left[1 + (-1)^n\right]
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 9)*
> $n$ pari, $n = 2k$: $\lim_{k\to+\infty}\left[1 + (-1)^{2k}\right] = \lim_{k\to+\infty}[1 + 1] = 2$.
> $n$ dispari, $n = 2k+1$: $\lim_{k\to+\infty}\left[1 + (-1)^{2k+1}\right] = 0$.
> Quindi $\nexists \lim_{n\to+\infty}\left[1 + (-1)^n\right]$.

### Esercitazione 4, 3.4

$$
\lim_{n\to+\infty}\left(n^{\sqrt n} - 2^n\right)
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 10; gerarchia: $\lim \frac{\log n}{n^\alpha} = 0\ \forall\alpha > 0$)*
> $$
> n^{\sqrt n} - 2^n = e^{\sqrt n\log n} - e^{n\log 2} = e^{n\log 2}\left(e^{\sqrt n\log n - n\log 2} - 1\right) = e^{n\log 2}\left(e^{n\left(\frac{\log n}{\sqrt n} - \log 2\right)} - 1\right)
> $$
> $e^{n\log 2} \to +\infty$; $\frac{\log n}{\sqrt n} \to 0$ (gerarchia), quindi $\frac{\log n}{\sqrt n} - \log 2 \to -\log 2 < 0$ e l'esponente $n\left(\frac{\log n}{\sqrt n} - \log 2\right) \to -\infty$, cioè $e^{(\dots)} \to 0$. Il limite è $-\infty$.

### Esercitazione 4, 3.5 (difficile)

$$
\lim_{n\to+\infty}\sqrt[n]{n!}\quad(\text{dimostra che fa} +\infty) \qquad\qquad \lim_{n\to+\infty}\frac{\sqrt[n]{n!}}{n} = ?
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 10 e 11)*
> **Prop.** $\lim\sqrt[n]{n!} = +\infty$. Dim.: suppongo $n$ pari.
> $$
> n! = n\cdot(n-1)\cdots\left(\tfrac n2 + 1\right)\left(\tfrac n2\right)\cdots 1 > \left(\tfrac n2\right)^{\frac n2} \qquad \text{(i primi } \tfrac n2 \text{ fattori sono} \geq \tfrac n2\text{, gli altri} \geq 1\text{)}
> $$
> Ora $\lim\sqrt[n]{\left(\tfrac n2\right)^{\frac n2}} = \lim\left(\tfrac n2\right)^{\frac12} = +\infty$. Quindi, per confronto, $\lim\sqrt[n]{n!} = +\infty$.
> Per $n$ dispari la dimostrazione è analoga, osservando che $n! = n\cdot(n-1)\cdots\frac{n+1}{2}\cdot\frac{n-1}{2}\cdots 1 > \left(\frac{n+1}{2}\right)^{\frac{n+1}{2}}$ (i primi $n - \frac{n+1}{2} + 1 = \frac{n+1}{2}$ fattori sono $\geq \frac{n+1}{2}$).
>
> **Risolviamo l'esercizio proposto:** $\lim\dfrac{\sqrt[n]{n!}}{n} = \lim\sqrt[n]{\dfrac{n!}{n^n}}$. «Ora, se $\lim \frac{a_{n+1}}{a_n} = L$ vale anche che $\lim\sqrt[n]{a_n} = L$.» Applicando questo risultato alla successione $a_n = \frac{n!}{n^n}$:
> $$
> \lim\sqrt[n]{\frac{n!}{n^n}} = \lim\frac{(n+1)!}{n!}\cdot\frac{n^n}{(n+1)^{n+1}} = \lim\left(\frac{n}{n+1}\right)^n = \lim\left(1 - \frac{1}{n+1}\right)^n = \lim\left[\left(1 - \frac{1}{n+1}\right)^{-(n+1)}\right]^{-\frac{n}{n+1}} = \frac1e
> $$

### Esercitazione 4, 4.1 (con parametro)

$$
\lim_{n\to+\infty}\left(n^{n^\alpha} - e^n\right)
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 12)*
> $$
> n^{n^\alpha} - e^n = e^{n^\alpha\log n} - e^n = e^n\left(e^{n^\alpha\log n - n} - 1\right) = e^n\left(e^{n\left(n^{\alpha-1}\log n - 1\right)} - 1\right)
> $$
> - $\alpha - 1 < 0$ ($\alpha < 1$): $n^{\alpha-1}\log n \to 0$, la parentesi $\to -1$, l'esponente $n(\dots) \to -\infty$, $e^{(\dots)} \to 0$: il limite è $-\infty$.
> - $\alpha - 1 = 0$: $n(\log n - 1) \to +\infty$: il limite è $+\infty$.
> - $\alpha - 1 > 0$ ($\alpha > 1$): $n\left(n^{\alpha-1}\log n - 1\right) \to +\infty$: il limite è $+\infty$.

### Esercitazione 4, 4.2 (con parametro)

$$
\lim_{n\to+\infty}\frac{\log(1 + n^\alpha)}{\log n}
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 12)*
> - $\alpha > 0$ ($n^\alpha$ infinito): $\dfrac{\log\left(n^\alpha\left(1 + \frac{1}{n^\alpha}\right)\right)}{\log n} = \dfrac{\alpha\log n + \log\left(1 + \frac{1}{n^\alpha}\right)}{\log n} = \dfrac{\log n\left(\alpha + \frac{\log\left(1 + \frac{1}{n^\alpha}\right)}{\log n}\right)}{\log n} \to \alpha$ (il termine con $\log\left(1 + \frac{1}{n^\alpha}\right)$ è $\to 0$).
> - $\alpha = 0$ ($n^\alpha = 1$): $\dfrac{\log 2}{\log n} \to 0$.
> - $\alpha < 0$ ($n^\alpha$ infinitesimo): $\dfrac{\log(1 + n^\alpha)}{\log n} \to \dfrac{\log 1}{+\infty} = 0$.

### Esercitazione 4, 4.3 (con parametro, esercizio non svolto a lezione)

$$
\lim_{n\to+\infty}\frac{\sqrt{n^4 + n^3} - \sqrt{n^4 - n^3}}{n + n^\alpha}
$$

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 13)*
> $$
> \frac{\sqrt{n^4+n^3} - \sqrt{n^4-n^3}}{n + n^\alpha}\cdot\frac{\sqrt{n^4+n^3} + \sqrt{n^4-n^3}}{\sqrt{n^4+n^3} + \sqrt{n^4-n^3}} = \frac{n^4 + n^3 - n^4 + n^3}{(n+n^\alpha)\,n^2\left(\sqrt{1 + \frac1n} + \sqrt{1 - \frac1n}\right)} = \frac{2n}{(n + n^\alpha)\left(\sqrt{1 + \frac1n} + \sqrt{1 - \frac1n}\right)}
> $$
> con la parentesi delle radici $\to 2$.
> - $\alpha < 1$: $\dfrac{2n}{n\left(1 + n^{\alpha-1}\right)(\dots)} \to \dfrac22 = 1$.
> - $\alpha = 1$: $\dfrac{2n}{2n(\dots)} = \dfrac{1}{(\dots)} \to \dfrac12$.
> - $\alpha > 1$: $\dfrac{2n}{n^\alpha\left(1 + n^{1-\alpha}\right)(\dots)} \to 0$.

### Esercitazione 4, 5.1 (confronti)

$a_n = 2^n + \dfrac1n$. Dim.: crescente per $n > 0$.

> [!example]- Soluzione
> *(soluzione del tutor, Esercitazione 4, pag. 14)*
> Proof. $a_{n+1} > a_n\ \ \forall n > 0$?
> $$
> 2^{n+1} + \frac{1}{n+1} > 2^n + \frac1n \iff 2^{n+1} - 2^n > \frac1n - \frac{1}{n+1} \iff 2^n(2-1) > \frac{n+1-n}{n(n+1)} \iff 2^n > \frac{1}{n^2+n}
> $$
> Oss.: non si può risolvere algebricamente.
> Oss.: $\{2^n\}_{n>0}$ è **crescente**: $2^{n+1} > 2^n \iff 2 > 1$, vero $\forall n$. $\dfrac{1}{n^2+n}$ è **decrescente**: $\dfrac{1}{(n+1)^2 + (n+1)} < \dfrac{1}{n^2+n} \iff n^2 + n < (n+1)^2 + (n+1) \iff 2n + 2 > 0 \iff n > -1$, vero $\forall n > 0$.
> Per $n = 1$: $2^1 > \dfrac{1}{1^2+1}$. Quindi, $\forall n \geq 1$ vale $2^n \geq 2^1 > \dfrac12 \geq \dfrac{1}{n^2+n}$.

### Tutoraggio 3, esercizio 2 (5)

Studiare la monotonia delle seguenti successioni.
$$
a_n = n^3 + 3n^2 - 9n + 2
$$

> [!example]- Soluzione
> Per $n \in \mathbb{N}$:
> $$
> a_{n+1} - a_n = \left[(n+1)^3 - n^3\right] + 3\left[(n+1)^2 - n^2\right] - 9 = (3n^2 + 3n + 1) + 3(2n+1) - 9 = 3n^2 + 9n - 5
> $$
> Per $n = 0$: $-5 < 0$, cioè $a_1 < a_0$ ($a_0 = 2$, $a_1 = -3$). Per $n \geq 1$: $3n^2 + 9n - 5 \geq 3 + 9 - 5 = 7 > 0$, cioè $a_{n+1} > a_n$.
> Non è monotona su $\mathbb{N}$; è strettamente crescente da $n = 1$ in poi.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3, esercizio 3 (2)

Calcolare i seguenti limiti, se esistono; altrimenti dimostrare che non esistono.
$$
\lim_{n\to\infty}\sqrt[n]{2^n + 3^n}
$$

> [!example]- Soluzione
> Forma $[\infty^0]$. Raccolgo $3^n$ dentro la radice:
> $$
> \sqrt[n]{2^n + 3^n} = \sqrt[n]{3^n\left(1 + \left(\tfrac23\right)^n\right)} = 3\left(1 + \left(\tfrac23\right)^n\right)^{\frac1n} \to 3\cdot 1^0 = 3
> $$
> (base $\to 1 > 0$, esponente $\frac1n \to 0$, potenza dei limiti).
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3, esercizio 3 (4)

$$
\lim_{n\to\infty}\left(\frac{n+3}{n+1}\right)^n
$$

> [!example]- Soluzione
> Forma $[1^\infty]$. Somma e sottrai: $\dfrac{n+3}{n+1} = \dfrac{(n+1)+2}{n+1} = 1 + \dfrac{2}{n+1}$.
> $$
> \left(1 + \frac{1}{\frac{n+1}{2}}\right)^n = \left[\left(1 + \frac{1}{\frac{n+1}{2}}\right)^{\frac{n+1}{2}}\right]^{\frac{2n}{n+1}} \to e^2
> $$
> (base fra quadre $\to e$, esponente $\frac{2n}{n+1} \to 2$).
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3, esercizio 3 (5)

$$
\lim_{n\to\infty}\left(\frac{n-1}{n}\right)^{n^2}
$$

> [!example]- Soluzione
> Forma $[1^\infty]$. $\dfrac{n-1}{n} = 1 + \dfrac{1}{-n}$, quindi con $a_n = -n$ ($\vert a_n\vert \to +\infty$):
> $$
> \left(1 + \frac{1}{-n}\right)^{n^2} = \left[\left(1 + \frac{1}{-n}\right)^{-n}\right]^{-n} \to e^{-\infty} = 0
> $$
> (base fra quadre $\to e > 1$, esponente $-n \to -\infty$).
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3, esercizio 3 (8)

$$
\lim_{n\to\infty}\frac{(n+3)! - n!}{2n^2(n+1)!}
$$

> [!example]- Soluzione
> $(n+3)! = (n+3)(n+2)(n+1)\,n!$ e $(n+1)! = (n+1)\,n!$. Raccolgo $n!$ e semplifico:
> $$
> \frac{n!\left[(n+3)(n+2)(n+1) - 1\right]}{2n^2(n+1)\,n!} = \frac{n^3 + 6n^2 + 11n + 5}{2n^3 + 2n^2} = \frac{1 + \frac6n + \frac{11}{n^2} + \frac{5}{n^3}}{2 + \frac2n} \to \frac12
> $$
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 3, esercizio 3 (11)

$$
\lim_{n\to\infty}\left(1 + \frac{n+1}{n\log n}\right)^{\log(1+n^3)}
$$

> [!example]- Soluzione
> Forma $[1^\infty]$. La base è $1 + \frac{1}{a_n}$ con $a_n = \dfrac{n\log n}{n+1} \to +\infty$.
> $$
> \left(1 + \frac{1}{a_n}\right)^{\log(1+n^3)} = \left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{c_n}, \qquad c_n = \frac{\log(1+n^3)}{a_n} = \frac{n+1}{n}\cdot\frac{\log(1+n^3)}{\log n}
> $$
> Da $n^3 < 1 + n^3 \leq 2n^3$ (log crescente): $3\log n < \log(1+n^3) \leq \log 2 + 3\log n$, quindi $3 < \dfrac{\log(1+n^3)}{\log n} \leq 3 + \dfrac{\log 2}{\log n} \to 3$ (carabinieri). Dunque $c_n \to 1\cdot 3 = 3$ e il limite è $e^3$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 4, esercizio 1 (1)

Calcolare i seguenti limiti di successioni, se esistono; altrimenti dimostrare che non esistono.
$$
\lim_{n\to+\infty}\frac{3n^3 + 3^n + \log n}{\log^6 n + 2^{2n} + n^5}
$$

> [!example]- Soluzione
> $2^{2n} = 4^n$. Sopra comanda $3^n$ ($\frac{n^3}{3^n} \to 0$, $\frac{\log n}{3^n} \to 0$, gerarchia), sotto comanda $4^n$ ($\frac{n^5}{4^n} \to 0$, $\frac{\log^6 n}{4^n} = \frac{(\log n)^6}{n}\cdot\frac{n}{4^n} \to 0$).
> $$
> \frac{3^n\left(1 + \frac{3n^3}{3^n} + \frac{\log n}{3^n}\right)}{4^n\left(1 + \frac{\log^6 n}{4^n} + \frac{n^5}{4^n}\right)} = \left(\frac34\right)^n\cdot\frac{1 + \frac{3n^3}{3^n} + \frac{\log n}{3^n}}{1 + \frac{\log^6 n}{4^n} + \frac{n^5}{4^n}} \to 0\cdot 1 = 0
> $$
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 4, esercizio 1 (7)

$$
\lim_{n\to+\infty}\frac{(n!)^2}{2^{n^2}}
$$

> [!example]- Soluzione
> Criterio del rapporto, con $a_n = \dfrac{(n!)^2}{2^{n^2}}$:
> $$
> \frac{a_{n+1}}{a_n} = \left(\frac{(n+1)!}{n!}\right)^2\cdot\frac{2^{n^2}}{2^{(n+1)^2}} = \frac{(n+1)^2}{2^{2n+1}} = \frac12\left(1 + \frac1n\right)^2\frac{n^2}{4^n} \to \frac12\cdot 1\cdot 0 = 0
> $$
> $L = 0 < 1$, quindi $a_n \to 0$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 4, esercizio 2 (con parametro)

Calcolare, al variare del parametro reale positivo $\alpha$, il seguente limite di successione.
$$
\lim_{n\to+\infty}\frac{3n^{2\alpha} - 2n + 1}{2n - 5n^2 + 3}
$$

> [!example]- Soluzione
> Sotto: $2n - 5n^2 + 3 = n^2\left(-5 + \frac2n + \frac{3}{n^2}\right)$, parentesi $\to -5$.
> - $\alpha > \frac12$: sopra $3n^{2\alpha} - 2n + 1 = n^{2\alpha}\left(3 - \frac{2}{n^{2\alpha-1}} + \frac{1}{n^{2\alpha}}\right)$, parentesi $\to 3$. Il rapporto è $n^{2\alpha-2}\cdot\frac{3 - \dots}{-5 + \dots}$ con la frazione $\to -\frac35$: per $\frac12 < \alpha < 1$ vale $0$; per $\alpha = 1$ vale $-\frac35$; per $\alpha > 1$ vale $-\infty$.
> - $\alpha = \frac12$: sopra $n + 1 = n\left(1 + \frac1n\right)$, il rapporto è $\frac1n\cdot\frac{1 + \frac1n}{-5 + \dots} \to 0$.
> - $0 < \alpha < \frac12$: sopra $n\left(-2 + \frac{3}{n^{1-2\alpha}} + \frac1n\right)$, il rapporto è $\frac1n\cdot\frac{-2 + \dots}{-5 + \dots} \to 0$.
> $$
> \lim = \begin{cases} 0 & 0 < \alpha < 1 \\ -\frac35 & \alpha = 1 \\ -\infty & \alpha > 1 \end{cases}
> $$
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

## Crocette dei fogli e delle esercitazioni

### Foglio 2 del 2020 (Ingegneria Industriale), esercizio 6, domanda 1

Sia $\{a_n\}_{n\in\mathbb{N}}$ una successione per cui $\vert a_n\vert \leq 10^{10}$ per ogni $n \in \mathbb{N}$. Allora la successione $b_n := \dfrac{\sqrt[3]{n}\,a_n}{\sqrt{n+1}}$:
- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim_n b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **c**. $\dfrac{\sqrt[3]n}{\sqrt{n+1}} = \dfrac{n^{1/3}}{n^{1/2}\sqrt{1 + \frac1n}} = \dfrac{1}{n^{1/6}\sqrt{1 + \frac1n}} \to 0$ e $a_n$ è limitata: limitata $\cdot$ infinitesima $=$ infinitesima, $b_n \to 0$.

### Foglio 2 del 2020, esercizio 6, domanda 2

Sia $\{a_n\}_{n\in\mathbb{N}}$ una successione per cui $\vert a_n\vert \leq 10^{10}$ per ogni $n \in \mathbb{N}$. Allora la successione $b_n := \sin\left(\dfrac n2\pi\right)a_n$:
- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim_n b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **d**. $\vert b_n\vert \leq 10^{10}$: limitata. Con $a_n = 1$ si ha $b_n = \sin\frac{n\pi}{2}$, che vale $0, 1, 0, -1, 0, 1, \dots$ e non ha limite (sottosuccessioni $b_{4k} = 0$ e $b_{4k+1} = 1$).

### Foglio 2 del 2020, esercizio 6, domanda 3

Sia $\{a_n\}_{n\in\mathbb{N}}$ una successione per cui $\vert a_n\vert \leq 10^{10n}$ per ogni $n \in \mathbb{N}$. Allora la successione $b_n := \dfrac{n\,a_n}{(n+1)! - n!}$:
- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim_n b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **c**. $(n+1)! - n! = n!\,(n+1-1) = n\cdot n!$, quindi $b_n = \dfrac{a_n}{n!}$ e $0 \leq \vert b_n\vert \leq \dfrac{\left(10^{10}\right)^n}{n!} \to 0$ (gerarchia, $a^n \ll n!$). Per i carabinieri $b_n \to 0$.

### Foglio 2 del 2020, esercizio 6, domanda 4

Sia $\{a_n\}_{n\in\mathbb{N}}$ una successione per cui $\vert a_n\vert \geq n^2$ per ogni $n \in \mathbb{N}$. Allora la successione $b_n := a_n + n\sin\left(\dfrac n2\pi\right)$:
- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim_n b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **b**. *(il foglio dà la risposta a, corretto: b)*
> $\left\vert n\sin\frac{n\pi}{2}\right\vert \leq n$, quindi $\vert b_n\vert \geq \vert a_n\vert - n \geq n^2 - n \to +\infty$: illimitata. Ma $\vert a_n\vert \geq n^2$ non dà il segno: con $a_n = -n^2$ si ha $b_n \leq -n^2 + n \to -\infty$, quindi non diverge sicuramente a $+\infty$.

### Foglio 2 del 2020, esercizio 3, domanda 1

Il limite per $n \to \infty$ della successione $a_n = \left(2 + \dfrac1n\right)^n$:
- a) è $+\infty$
- b) vale $e$
- c) vale $2e$
- d) non esiste

> [!example]- Soluzione
> **a**. Base $\to 2 > 1$, esponente $\to +\infty$: $\left[2^{+\infty}\right] = +\infty$ (slide 50). Non è una forma $[1^\infty]$.

### Foglio 2 del 2020, esercizio 3, domanda 2

Il limite per $n \to \infty$ della successione $a_n = \left(2^{\frac1n} + \dfrac1n\right)^n$:
- a) è $+\infty$
- b) vale $e$
- c) vale $2e$
- d) non esiste

> [!example]- Soluzione
> **c**. Base $\to 1$: forma $[1^\infty]$. Con $2^{1/n} = e^{\frac{\log 2}{n}}$ e il limite notevole $\frac{e^{a_n} - 1}{a_n} \to 1$ per $a_n = \frac{\log 2}{n}$:
> $$
> n\left(2^{1/n} - 1\right) = \log 2\cdot\frac{e^{\frac{\log 2}{n}} - 1}{\frac{\log 2}{n}} \to \log 2
> $$
> La base è $1 + \left(2^{1/n} - 1 + \frac1n\right)$ e $n\left(2^{1/n} - 1 + \frac1n\right) \to \log 2 + 1$. Il limite è $e^{1 + \log 2} = 2e$.

### Foglio 2 del 2020, esercizio 3, domanda 3

Il limite per $n \to \infty$ della successione $a_n = \left(2^{\frac{1}{n^2}} + \dfrac1n\right)^n$:
- a) è $+\infty$
- b) vale $e$
- c) vale $2e$
- d) non esiste

> [!example]- Soluzione
> **b**. Forma $[1^\infty]$. $n\left(2^{1/n^2} - 1\right) = \frac1n\cdot n^2\left(2^{1/n^2} - 1\right) \to 0\cdot\log 2 = 0$ (stesso limite notevole con $a_n = \frac{\log 2}{n^2}$) e $n\cdot\frac1n = 1$. Il limite è $e^{0+1} = e$.

### Foglio 2 del 2020, esercizio 3, domanda 4

Il limite per $n \to \infty$ della successione $a_n = \left(1 + \dfrac{n+1}{n\log n}\right)^{\log(1+n^3)}$:
- a) vale $e^2$
- b) vale $e^3$
- c) vale $\sqrt e$
- d) vale $\sqrt[3]{e}$

> [!example]- Soluzione
> **b**. È l'esercizio (11) del Tutoraggio 3: la base è $1 + \frac{1}{a_n}$ con $a_n = \frac{n\log n}{n+1} \to +\infty$ e $\frac{\log(1+n^3)}{a_n} \to 3$ (carabinieri su $3\log n < \log(1+n^3) \leq \log 2 + 3\log n$). Il limite è $e^3$.

### Foglio 2 del 2020, esercizio 3, domanda 5

Il limite per $n \to \infty$ della successione $a_n = \left(\dfrac{n^4 - 7n^2 + 20}{n^4 - 8n^2 + 16}\right)^{\frac{2n^3+n^2+2n+1}{n+1}}$:
- a) vale $e^2$
- b) vale $e^3$
- c) vale $+\infty$
- d) vale $1$

> [!example]- Soluzione
> **a**. $[1^\infty]$. Differenza numeratore meno denominatore: $n^2 + 4$, base $= 1 + \dfrac{n^2+4}{(n^2-4)^2}$, $a_n = \dfrac{(n^2-4)^2}{n^2+4} \to +\infty$.
> $c_n = \dfrac{2n^3+n^2+2n+1}{n+1}\cdot\dfrac{n^2+4}{(n^2-4)^2}$ ha grado $5$ sopra e sotto con coefficienti $2$ e $1$: $c_n \to 2$. Il limite è $e^2$.

### Foglio 2 del 2020, esercizio 3, domanda 6

Il limite per $n \to \infty$ della successione $a_n = \left(\dfrac{n^4 - 7n^3 + 20}{n^4 - 8n^3 + 16}\right)^{\frac{2n^3+n^2+2n+1}{n+1}}$:
- a) vale $e^2$
- b) vale $e^3$
- c) vale $+\infty$
- d) vale $1$

> [!example]- Soluzione
> **c**. $[1^\infty]$. Differenza: $n^3 + 4$, $a_n = \dfrac{n^4 - 8n^3 + 16}{n^3 + 4} \to +\infty$. $c_n = \dfrac{2n^3+n^2+2n+1}{n+1}\cdot\dfrac{n^3+4}{n^4-8n^3+16}$ ha grado $6$ sopra e $5$ sotto, coefficiente positivo: $c_n \to +\infty$. Il limite è $e^{+\infty} = +\infty$.

### Foglio 2 del 2020, esercizio 3, domanda 7

Il limite per $n \to \infty$ della successione $a_n = \left(\dfrac{n^4 - 7n + 20}{n^4 - 8n + 16}\right)^{\frac{2n^3+n^2+2n+1}{n+1}}$:
- a) vale $e^2$
- b) vale $e^3$
- c) vale $+\infty$
- d) vale $1$

> [!example]- Soluzione
> **d**. $[1^\infty]$. Differenza: $n + 4$, $a_n = \dfrac{n^4 - 8n + 16}{n + 4}$. $c_n = \dfrac{2n^3+n^2+2n+1}{n+1}\cdot\dfrac{n+4}{n^4-8n+16}$ ha grado $4$ sopra e $5$ sotto: $c_n \to 0$. Il limite è $e^0 = 1$.

### Foglio 2 del 2020, esercizio 3, domanda 8

Il limite per $n \to \infty$ della successione $a_n = \left(\dfrac{n^4 - 7n + 20}{n^4 - 8n + 16}\right)^{2n^3+n^2+2n+1}$:
- a) vale $e^2$
- b) vale $e^3$
- c) vale $+\infty$
- d) vale $1$

> [!example]- Soluzione
> **a**. Stessa base della domanda 7, differenza $n + 4$, $a_n = \dfrac{n^4 - 8n + 16}{n + 4}$. Ora $c_n = \dfrac{(2n^3+n^2+2n+1)(n+4)}{n^4 - 8n + 16}$ ha grado $4$ sopra e sotto, coefficiente $2$: $c_n \to 2$. Il limite è $e^2$.

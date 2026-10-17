---
title: Simulazione provetta 3
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: simulazione
stato: completa
data: 2026-10-17
lezioni: []
ordine: 999
durata: 150
---

Terza simulazione del primo parziale di [Analisi Matematica 1](/uni/analisi-1/) del 6/11, stessa forma delle prime due ([Simulazione provetta 1](/uni/simulazioni/analisi-1/simulazione-provetta-1/), [Simulazione provetta 2](/uni/simulazioni/analisi-1/simulazione-provetta-2/)): 8 crocette e 3 esercizi da 7 punti, totale 33. È la più difficile, tarata sul 30: crocette che giocano sulle definizioni, un sup e inf con un passo $\varepsilon$ che chiede una maggiorazione, un'equazione in $\mathbb{C}$ con il coniugato da risolvere con modulo e argomento, una verifica di limite in cui conviene maggiorare e un logaritmo da trattare senza continuità. Il programma è quello fatto a lezione fino al 14/10; quello esatto del parziale va controllato su Moodle. Esercizi e numeri sono nuovi, i conti sono verificati.

> [!info] Regole
> - **2 ore e 30 minuti**, niente calcolatrice, ammesso il formulario A4 fronte/retro. Fai partire il cronometro e non guardare la correzione prima della fine.
> - **Parte 1**: 8 crocette, una sola risposta giusta. Giusta $+1{,}5$, sbagliata $-0{,}5$, non data $0$. Massimo $12$.
> - **Parte 2**: 3 esercizi con svolgimento completo e giustificato, fino a 7 punti ciascuno. Massimo $21$.
> - La parte 2 si corregge **solo se** nella parte 1 hai almeno $5$ su $12$.
> - **Mai rispondere a caso**: con 4 opzioni il valore atteso è $\frac14 \cdot 1{,}5 - \frac34 \cdot 0{,}5 = 0$. Rispondi quando hai escluso almeno un'opzione con certezza.

## Testo

### Parte 1 · crocette

### Domanda 1

Sia $f : D \to \mathbb{R}$. La negazione di “$f$ è iniettiva" è:

- a) $\forall x_1, x_2 \in D,\ f(x_1) = f(x_2) \Rightarrow x_1 \neq x_2$
- b) $\exists x_1, x_2 \in D : x_1 \neq x_2$ e $f(x_1) \neq f(x_2)$
- c) $\forall x_1, x_2 \in D$ con $x_1 \neq x_2$ vale $f(x_1) = f(x_2)$
- d) $\exists x_1, x_2 \in D : x_1 \neq x_2$ e $f(x_1) = f(x_2)$

### Domanda 2

Sia $f : D \to \mathbb{R}$ e sia $2$ un punto di accumulazione per $D$. La proposizione
$$
\forall \varepsilon > 0\ \exists \delta > 0 : \forall x \in D \text{ con } 0 < |x - 2| < \delta,\quad f(x) > \frac1\varepsilon
$$
significa:

- a) $\displaystyle\lim_{x \to 2} f(x) = 0$
- b) $\displaystyle\lim_{x \to 2} f(x) = +\infty$
- c) $\displaystyle\lim_{x \to +\infty} f(x) = 2$
- d) niente: nella definizione di limite infinito deve comparire $M$, non $\varepsilon$

### Domanda 3

Sia $A \subset \mathbb{R}$ non vuoto con $\sup A = 3$. Quale affermazione è **necessariamente** vera?

- a) esiste $x \in A$ con $x > 2{,}9$
- b) $3 \in A$
- c) $x < 3$ per ogni $x \in A$
- d) $A$ ha un numero finito di elementi

### Domanda 4

Quante soluzioni ha in $\mathbb{C}$ l'equazione $z^3 = \bar z$?

- a) $3$
- b) $4$
- c) $5$
- d) $6$

### Domanda 5

L'argomento principale (in $[0, 2\pi)$) di $(-1 + i)^7$ è:

- a) $\frac{3\pi}{4}$
- b) $\frac{5\pi}{4}$
- c) $\frac{7\pi}{4}$
- d) $\frac{\pi}{4}$

### Domanda 6

L'immagine di $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 2 - e^{-|x|}$, è:

- a) $(1, 2]$
- b) $[1, 2]$
- c) $(-\infty, 2)$
- d) $[1, 2)$

### Domanda 7

$\displaystyle\lim_{n \to +\infty} \left(1 + \frac{1}{n^2}\right)^n$ vale:

- a) $e$
- b) $1$
- c) $+\infty$
- d) $\sqrt e$

### Domanda 8

Sia $a_n \to \ell \in \mathbb{R}$. Quale affermazione è vera?

- a) se $\ell > 0$, allora $a_n > 0$ definitivamente
- b) se $a_n > 0$ per ogni $n$, allora $\ell > 0$
- c) se $\ell > 0$, allora $a_n > 0$ per ogni $n$
- d) se $\ell \geq 0$, allora $a_n \geq 0$ definitivamente

### Parte 2 · esercizi

### Esercizio 1 · 7 punti

1. Sia $A = \left\{\dfrac{n^2 + 10}{n + 1} : n \in \mathbb{N}\right\}$. Determinare $\sup A$ e $\inf A$, dicendo se sono massimo e minimo. Giustificare ogni affermazione. **[4 punti]**
2. Sia $B = \left\{\dfrac{n + 1}{n^2 + 10} : n \in \mathbb{N}\right\}$. Determinare $\sup B$ e $\inf B$, dicendo se sono massimo e minimo. **[3 punti]**

### Esercizio 2 · 7 punti

1. Risolvere in $\mathbb{C}$ l'equazione $z^4 = 4i\,\bar z^{\,2}$, scrivendo le soluzioni in forma esponenziale. **[5 punti]**
2. Rappresentare le soluzioni nel piano di Gauss e dire quali soddisfano $\mathrm{Re}(z) > |\mathrm{Im}(z)|$. **[2 punti]**

### Esercizio 3 · 7 punti

1. Verificare con la definizione di limite che $\displaystyle\lim_{n \to +\infty} \frac{n^2 + 2}{3n^2 + 1} = \frac13$. **[3 punti]**
2. Calcolare $\displaystyle\lim_{n \to +\infty} \frac{\log\left(n^2 + 3^n\right)}{n}$. **[2 punti]**
3. Sia $a_n = \left(1 + \dfrac{2(-1)^n}{n}\right)^n$, $n \geq 3$. Dire se $(a_n)$ ammette limite e, in caso affermativo, calcolarlo. **[2 punti]**

## Correzione

### Parte 1

### Domanda 1

Sia $f : D \to \mathbb{R}$. La negazione di “$f$ è iniettiva" è:

- a) $\forall x_1, x_2 \in D,\ f(x_1) = f(x_2) \Rightarrow x_1 \neq x_2$
- b) $\exists x_1, x_2 \in D : x_1 \neq x_2$ e $f(x_1) \neq f(x_2)$
- c) $\forall x_1, x_2 \in D$ con $x_1 \neq x_2$ vale $f(x_1) = f(x_2)$
- d) $\exists x_1, x_2 \in D : x_1 \neq x_2$ e $f(x_1) = f(x_2)$

> [!example]- Soluzione
> **d**. “$f$ iniettiva" è $\forall x_1, x_2 \in D,\ f(x_1) = f(x_2) \Rightarrow x_1 = x_2$. Si nega il quantificatore ($\forall$ diventa $\exists$) e l'implicazione: $\text{non}(P \Rightarrow Q)$ è “$P$ e non $Q$". Viene “$\exists x_1, x_2$ con $f(x_1) = f(x_2)$ e $x_1 \neq x_2$": due punti diversi con la stessa immagine, il controesempio che si scrive per dire "non iniettiva".
> - a) nega solo la tesi dell'implicazione e lascia il $\forall$; tra l'altro è falsa per ogni $f$, perché con $x_1 = x_2$ la premessa è vera e la tesi falsa.
> - b) è una proprietà che hanno quasi tutte le funzioni non costanti, iniettive comprese.
> - c) dice che $f$ prende lo stesso valore su ogni coppia di punti distinti: è "costante" (se $D$ ha almeno due punti), molto più forte di "non iniettiva".

### Domanda 2

Sia $f : D \to \mathbb{R}$ e sia $2$ un punto di accumulazione per $D$. La proposizione
$$
\forall \varepsilon > 0\ \exists \delta > 0 : \forall x \in D \text{ con } 0 < |x - 2| < \delta,\quad f(x) > \frac1\varepsilon
$$
significa:

- a) $\displaystyle\lim_{x \to 2} f(x) = 0$
- b) $\displaystyle\lim_{x \to 2} f(x) = +\infty$
- c) $\displaystyle\lim_{x \to +\infty} f(x) = 2$
- d) niente: nella definizione di limite infinito deve comparire $M$, non $\varepsilon$

> [!example]- Soluzione
> **b**. Al variare di $\varepsilon$ in $(0, +\infty)$, il numero $M = \frac1\varepsilon$ prende **tutti** i valori di $(0, +\infty)$, e viceversa $\varepsilon = \frac1M$. Quindi la frase è la stessa di “$\forall M > 0\ \exists \delta > 0$ t.c. $\forall x \in D$ con $0 < |x - 2| < \delta$, $f(x) > M$", che è la definizione di $\lim_{x \to 2} f(x) = +\infty$. Il nome della lettera non conta, conta cosa percorre.
> - a) servirebbe $|f(x) - 0| < \varepsilon$, qui c'è $f(x) > \frac1\varepsilon$, cioè $f$ grande.
> - c) il punto è $x \to 2$ ($0 < |x - 2| < \delta$), non $x \to +\infty$ (che sarebbe $x > K$).
> - d) è la trappola: la definizione è una frase logica, e cambiare nome o forma alla soglia senza cambiare l'insieme dei valori che prende non cambia il significato.

### Domanda 3

Sia $A \subset \mathbb{R}$ non vuoto con $\sup A = 3$. Quale affermazione è **necessariamente** vera?

- a) esiste $x \in A$ con $x > 2{,}9$
- b) $3 \in A$
- c) $x < 3$ per ogni $x \in A$
- d) $A$ ha un numero finito di elementi

> [!example]- Soluzione
> **a**: è la condizione (2) della caratterizzazione del sup con $\varepsilon = 0{,}1$. Il sup è il più piccolo maggiorante, quindi $2{,}9$ non è un maggiorante: qualche elemento di $A$ lo supera.
> - b) falsa per $A = (0, 3)$: il sup non è detto che sia un massimo.
> - c) falsa per $A = [0, 3]$: $3 \in A$ e $3 < 3$ è falso. Vale solo $x \leq 3$.
> - d) falsa per $A = (0, 3)$, che è infinito.

### Domanda 4

Quante soluzioni ha in $\mathbb{C}$ l'equazione $z^3 = \bar z$?

- a) $3$
- b) $4$
- c) $5$
- d) $6$

> [!example]- Soluzione
> **c**. $z = 0$ è soluzione. Per $z = \rho e^{i\alpha}$ con $\rho > 0$: $\rho^3 e^{3i\alpha} = \rho e^{-i\alpha}$. Moduli: $\rho^3 = \rho$, cioè $\rho^2 = 1$, $\rho = 1$. Argomenti: $3\alpha = -\alpha + 2k\pi$, cioè $\alpha = \frac{k\pi}{2}$, con $k = 0, 1, 2, 3$ che danno numeri distinti: $1, i, -1, -i$. Totale $4 + 1 = 5$.
> - a) applica il teorema fondamentale come se fosse un polinomio di grado $3$; ma c'è $\bar z$, e non è un polinomio in $z$.
> - b) dimentica $z = 0$, il caso in cui l'argomento non è definito.
> - d) moltiplica per $z$ ($z^4 = |z|^2$) e conta male le radici, o conta $z = 0$ due volte.
> - *Controllo*: $i^3 = -i = \bar i$; $(-1)^3 = -1 = \overline{-1}$.

### Domanda 5

L'argomento principale (in $[0, 2\pi)$) di $(-1 + i)^7$ è:

- a) $\frac{3\pi}{4}$
- b) $\frac{5\pi}{4}$
- c) $\frac{7\pi}{4}$
- d) $\frac{\pi}{4}$

> [!example]- Soluzione
> **b**. $-1 + i$ sta nel 2° quadrante con $\mathrm{Arg} = \frac{3\pi}{4}$. De Moivre: argomento $7 \cdot \frac{3\pi}{4} = \frac{21\pi}{4}$. Riduco: $\frac{21\pi}{4} = 4\pi + \frac{5\pi}{4}$, e $4\pi$ sono due giri. Quindi $\frac{5\pi}{4}$.
> - a) dimentica la potenza.
> - c) parte da $\mathrm{Arg}(-1 + i) = \frac\pi4$ (arcotangente senza quadrante): $\frac{7\pi}{4}$.
> - d) toglie $5\pi$ invece di $4\pi$: $5\pi$ non è un multiplo di $2\pi$.
> - *Controllo*: $(-1 + i)^2 = 1 - 2i - 1 = -2i$, $(-2i)^3 = 8i$, quindi $(-1 + i)^7 = 8i \cdot (-1 + i) = -8 - 8i$, nel 3° quadrante, sulla bisettrice: $\frac{5\pi}{4}$.

### Domanda 6

L'immagine di $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 2 - e^{-|x|}$, è:

- a) $(1, 2]$
- b) $[1, 2]$
- c) $(-\infty, 2)$
- d) $[1, 2)$

> [!example]- Soluzione
> **d**. $|x|$ prende tutti i valori di $[0, +\infty)$, quindi $-|x|$ tutti quelli di $(-\infty, 0]$, ed $e^{-|x|}$ (esponenziale crescente) tutti quelli di $(0, 1]$: vale $1$ in $x = 0$ e si avvicina a $0$ senza toccarlo. Allora $2 - e^{-|x|}$ prende i valori di $[1, 2)$: minimo $1$ in $x = 0$, e $2$ mai raggiunto.
> - a) scambia gli estremi: $1$ è raggiunto, $2$ no.
> - b) $2$ richiederebbe $e^{-|x|} = 0$, impossibile.
> - c) dimentica che $e^{-|x|} \leq 1$.

### Domanda 7

$\displaystyle\lim_{n \to +\infty} \left(1 + \frac{1}{n^2}\right)^n$ vale:

- a) $e$
- b) $1$
- c) $+\infty$
- d) $\sqrt e$

> [!example]- Soluzione
> **b**. È una $[1^\infty]$, ma la base si avvicina a $1$ troppo in fretta: $(\text{base} - 1) \cdot \text{esponente} = \frac{1}{n^2} \cdot n = \frac1n \to 0$. In formule: $\left(1 + \frac{1}{n^2}\right)^n = \left[\left(1 + \frac{1}{n^2}\right)^{n^2}\right]^{1/n}$, base $\to e$ (Nepero generalizzato con $a_n = n^2$), esponente $\to 0$, e per la potenza dei limiti il limite è $e^0 = 1$.
> - a) applica Nepero senza controllare che sotto l'$1$ e all'esponente ci sia la stessa quantità.
> - c) pensa che un esponente che va all'infinito faccia esplodere tutto.
> - d) non viene da nessun conto corretto.
> - *Controllo*: $n = 1000$ dà circa $1{,}0010$.

### Domanda 8

Sia $a_n \to \ell \in \mathbb{R}$. Quale affermazione è vera?

- a) se $\ell > 0$, allora $a_n > 0$ definitivamente
- b) se $a_n > 0$ per ogni $n$, allora $\ell > 0$
- c) se $\ell > 0$, allora $a_n > 0$ per ogni $n$
- d) se $\ell \geq 0$, allora $a_n \geq 0$ definitivamente

> [!example]- Soluzione
> **a**: è il teorema di permanenza del segno (slide 39).
> - b) $a_n = \frac1n > 0$ e $\ell = 0$. Passando al limite le disuguaglianze strette diventano larghe: vale solo $\ell \geq 0$.
> - c) $a_n = 1 - \frac2n$ tende a $1$ ma $a_1 = -1$: la permanenza vale da un certo indice in poi, non per tutti.
> - d) $a_n = -\frac1n$ tende a $0$ ed è sempre negativa. Con $\ell = 0$ la permanenza non dice niente.

### Esercizio 1

> [!example]- Soluzione
> **Risultati.** 1. $\min A = \inf A = \frac{14}{3}$; $\sup A = +\infty$, nessun massimo. 2. $\max B = \sup B = \frac{3}{14}$; $\inf B = 0$, non è un minimo.
>
> **Come si riconosce.** Punto 1: successione che prima scende e poi sale (lo dicono i primi termini), quindi il minimo sta dove gira; la divisione fra polinomi fa vedere sia il minimo sia la crescita illimitata. Punto 2: $B$ è fatto dei **reciproci** degli elementi di $A$, tutti positivi: il minimo di $A$ diventa il massimo di $B$, e il sup infinito di $A$ fa pensare a $\inf B = 0$, da dimostrare con il passo $\varepsilon$.
>
> **1. Studio di $A$.**
>
> *Primi elementi*: $x_0 = 10$, $x_1 = \frac{11}{2}$, $x_2 = \frac{14}{3} \approx 4{,}67$, $x_3 = \frac{19}{4} = 4{,}75$, $x_4 = \frac{26}{5}$, $x_5 = \frac{35}{6}$. Scende fino a $n = 2$, poi sale.
>
> *Riscrittura*: $n^2 + 10 = (n^2 - 1) + 11 = (n + 1)(n - 1) + 11$, quindi
> $$
> x_n = n - 1 + \frac{11}{n + 1}
> $$
> Un pezzo che cresce senza limite ($n - 1$) più uno che scende verso $0$: all'inizio vince il secondo, poi il primo.
>
> *$\min A = \inf A = \frac{14}{3}$.*
> - $\frac{14}{3} = x_2 \in A$.
> - È un minorante: $\frac{n^2 + 10}{n + 1} \geq \frac{14}{3} \iff 3(n^2 + 10) \geq 14(n + 1)$ (moltiplico per $3(n + 1) > 0$).
> - $\iff 3n^2 - 14n + 16 \geq 0$.
> - Le radici di $3n^2 - 14n + 16$ sono $n = \frac{14 \pm \sqrt{196 - 192}}{6} = \frac{14 \pm 2}{6}$, cioè $2$ e $\frac83$. Quindi $3n^2 - 14n + 16 = (n - 2)(3n - 8)$.
> - Il prodotto è negativo solo per $2 < n < \frac83 \approx 2{,}67$, e in quell'intervallo non c'è nessun naturale. Quindi la disuguaglianza vale per ogni $n \in \mathbb{N}$.
> - Minorante che appartiene ad $A$: è il minimo, quindi anche l'inf.
>
> *$\sup A = +\infty$.*
> - Dalla riscrittura $x_n = n - 1 + \frac{11}{n + 1} > n - 1$, perché $\frac{11}{n + 1} > 0$.
> - Sia $M \in \mathbb{R}$. Per Archimede $\exists \bar n \in \mathbb{N} : \bar n > M + 1$. Allora $x_{\bar n} > \bar n - 1 > M$.
> - Nessun $M$ è un maggiorante: $A$ è illimitato superiormente, $\sup A = +\infty$ e non c'è massimo.
> - *Controllo*: con $M = 100$ basta $\bar n = 102$: $x_{102} = 101 + \frac{11}{103} > 100$.
>
> **2. Studio di $B$.** Indico $b_n = \frac{n + 1}{n^2 + 10} = \frac{1}{x_n}$.
>
> *$\max B = \sup B = \frac{3}{14}$.*
> - Dal punto 1, $x_n \geq \frac{14}{3} > 0$ per ogni $n$. Passando ai reciproci di positivi il verso gira: $b_n = \frac{1}{x_n} \leq \frac{3}{14}$.
> - $\frac{3}{14} = b_2 \in B$. Maggiorante che appartiene a $B$: è il massimo, quindi anche il sup.
>
> *$\inf B = 0$.*
> - (3) $0$ è un minorante: $b_n > 0$, perché numeratore e denominatore sono positivi.
> - (4) Sia $\varepsilon > 0$. Cerco $n$ con $b_n < 0 + \varepsilon$. La disequazione $\frac{n + 1}{n^2 + 10} < \varepsilon$ è di secondo grado in $n$: invece di risolverla **maggioro** $b_n$ con qualcosa di semplice. Per $n \geq 1$:
>   - $\frac{n + 1}{n^2 + 10} < \frac{n + 1}{n^2}$ (stesso numeratore positivo, denominatore più piccolo);
>   - $\frac{n + 1}{n^2} \leq \frac{2n}{n^2} = \frac2n$ (perché $n + 1 \leq 2n$ per $n \geq 1$).
>   - Quindi $b_n < \frac2n$ per ogni $n \geq 1$.
> - $\frac2n < \varepsilon \iff n > \frac2\varepsilon$.
> - Per Archimede $\exists \bar n \in \mathbb{N} : \bar n > \frac2\varepsilon$. Poiché $\frac2\varepsilon > 0$, è $\bar n \geq 1$ e la stima vale: $b_{\bar n} < \frac{2}{\bar n} < \varepsilon$.
> - Valgono (3) e (4): $\inf B = 0$.
> - *Non è un minimo*: $b_n > 0$ per ogni $n$, quindi $0 \notin B$.
> - *Controllo*: con $\varepsilon = 0{,}01$ basta $\bar n = 201$: $b_{201} = \frac{202}{40\,411} \approx 0{,}0050 < 0{,}01$.

> [!warning]- Errori tipici su questo esercizio
> - Dare $\min A = x_1 = \frac{11}{2}$ guardando solo i primi due termini: la successione scende ancora fino a $n = 2$.
> - Dimostrare il minimo con $x_{n+1} - x_n$ solo in un punto: serve la disuguaglianza $x_n \geq \frac{14}{3}$ **per ogni** $n$.
> - Nel punto 2, risolvere la disequazione di secondo grado e perdersi nei casi: la maggiorazione basta, la $\bar n$ non deve essere la più piccola.
> - Dire $\inf B = 0$ "perché $\sup A = +\infty$" senza il passo $\varepsilon$: l'intuizione è giusta, ma va dimostrata.

### Esercizio 2

> [!example]- Soluzione
> **Risultati.** 1. Sette soluzioni: $z = 0$ e $z = 2e^{i\left(\frac{\pi}{12} + \frac{k\pi}{3}\right)}$, $k = 0, \dots, 5$, cioè $2e^{i\frac{\pi}{12}}$, $2e^{i\frac{5\pi}{12}}$, $2e^{i\frac{3\pi}{4}}$, $2e^{i\frac{13\pi}{12}}$, $2e^{i\frac{17\pi}{12}}$, $2e^{i\frac{7\pi}{4}}$. 2. Solo $z = 2e^{i\frac{\pi}{12}}$.
>
> **Come si riconosce.** Ci sono potenze di $z$ e di $\bar z$: **metodo 2**, modulo e argomento. Con $z = x + iy$ si arriverebbe a un sistema di quarto grado. Non è un polinomio in $z$, quindi il numero di soluzioni non è dato dal teorema fondamentale. Il caso $z = 0$ va a parte, perché lì l'argomento non è definito.
>
> **1. L'equazione.**
> - *Caso $z = 0$*: $0^4 = 0$ e $4i \cdot \bar 0^{\,2} = 0$. È soluzione.
> - *Caso $z \neq 0$*: pongo $z = \rho e^{i\alpha}$ con $\rho > 0$. Allora:
>   - $z^4 = \rho^4 e^{4i\alpha}$ (De Moivre);
>   - $\bar z = \rho e^{-i\alpha}$, quindi $\bar z^{\,2} = \rho^2 e^{-2i\alpha}$;
>   - $4i = 4e^{i\frac\pi2}$ ($i$ sta sul semiasse immaginario positivo);
>   - $4i\,\bar z^{\,2} = 4\rho^2 e^{i\left(\frac\pi2 - 2\alpha\right)}$ (nel prodotto i moduli si moltiplicano, gli argomenti si sommano).
> - Due complessi sono uguali se e solo se hanno lo stesso modulo e argomenti che differiscono per un multiplo di $2\pi$:
> $$
> \begin{cases} \rho^4 = 4\rho^2 \\ 4\alpha = \frac\pi2 - 2\alpha + 2k\pi, \quad k \in \mathbb{Z} \end{cases}
> $$
> - Moduli: divido per $\rho^2 > 0$: $\rho^2 = 4$, e con $\rho > 0$ resta $\rho = 2$.
> - Argomenti: $6\alpha = \frac\pi2 + 2k\pi$, quindi $\alpha = \frac{\pi}{12} + \frac{k\pi}{3}$.
> - Valori distinti: aggiungere $\frac\pi3$ sei volte fa un giro intero ($6 \cdot \frac\pi3 = 2\pi$), quindi bastano $k = 0, 1, \dots, 5$:
>   - $k = 0$: $\frac{\pi}{12}$; $k = 1$: $\frac{5\pi}{12}$; $k = 2$: $\frac{9\pi}{12} = \frac{3\pi}{4}$;
>   - $k = 3$: $\frac{13\pi}{12}$; $k = 4$: $\frac{17\pi}{12}$; $k = 5$: $\frac{21\pi}{12} = \frac{7\pi}{4}$.
> - In tutto $1 + 6 = 7$ soluzioni.
> - *Controllo su $k = 2$, in forma cartesiana*: $z = 2e^{i\frac{3\pi}{4}} = -\sqrt2 + \sqrt2\,i$.
>   - $z^4 = 16e^{3\pi i} = 16e^{i\pi} = -16$.
>   - $\bar z = -\sqrt2 - \sqrt2\,i$, $\bar z^{\,2} = 2 + 4i + 2i^2 = 4i$, quindi $4i\,\bar z^{\,2} = 4i \cdot 4i = 16i^2 = -16$. Torna.
> - *Controllo su $k = 0$*: $z^4 = 16e^{i\frac\pi3}$; $4i\,\bar z^{\,2} = 4e^{i\frac\pi2} \cdot 4e^{-i\frac\pi6} = 16e^{i\frac\pi3}$. Torna.
>
> **2. Rappresentazione e condizione $\mathrm{Re}(z) > |\mathrm{Im}(z)|$.**
> - Le sei soluzioni non nulle sono i vertici di un esagono regolare inscritto nella circonferenza $|z| = 2$, a distanza angolare $\frac\pi3$ l'una dall'altra, a partire da $\frac{\pi}{12}$. Più l'origine.
> - Con $z = x + iy$, la condizione è $x > |y|$, cioè $-x < y < x$ (e quindi $x > 0$): il **settore aperto** a destra fra le semirette $y = x$ e $y = -x$, bordo escluso. In termini di argomento: $\alpha \in \left(-\frac\pi4, \frac\pi4\right)$, cioè $\alpha \in \left[0, \frac\pi4\right) \cup \left(\frac{7\pi}{4}, 2\pi\right)$.
> - Controllo delle sette soluzioni:
>   - $z = 0$: $0 > 0$ è falso. Escluso.
>   - $\frac{\pi}{12} < \frac\pi4$: dentro.
>   - $\frac{5\pi}{12}$, $\frac{3\pi}{4}$, $\frac{13\pi}{12}$, $\frac{17\pi}{12}$: fuori dall'intervallo.
>   - $\frac{7\pi}{4}$: è **sul bordo**. In cartesiana $z = \sqrt2 - \sqrt2\,i$, con $\mathrm{Re} = \sqrt2 = |\mathrm{Im}|$, e la disuguaglianza è stretta. Escluso.
> - Soddisfa la condizione solo $z = 2e^{i\frac{\pi}{12}}$.
> - *Controllo numerico*: $2\cos\frac{\pi}{12} \approx 1{,}93$ e $2\sin\frac{\pi}{12} \approx 0{,}52$, quindi $1{,}93 > 0{,}52$.

> [!warning]- Errori tipici su questo esercizio
> - Dimenticare $z = 0$: si perde una soluzione su sette.
> - Scrivere $\bar z^{\,2} = \rho^2 e^{2i\alpha}$: il coniugato cambia segno all'argomento.
> - Fermarsi a $k = 0, 1, 2, 3$ "perché è di quarto grado": i valori distinti sono sei.
> - Nel punto 2, includere $2e^{i\frac{7\pi}{4}}$: sta sulla semiretta $y = -x$, e la disuguaglianza è stretta.

### Esercizio 3

> [!example]- Soluzione
> **Risultati.** 1. Verifica con $\nu_\varepsilon = \frac{\sqrt5}{3\sqrt\varepsilon}$. 2. $\log 3$. 3. Non ammette limite: $a_{2k} \to e^2$, $a_{2k+1} \to e^{-2}$.
>
> **1. Verifica con la definizione.**
>
> *Come si riconosce*: limite finito di un quoziente di polinomi di secondo grado. Semplificando $a_n - \ell$ resta $n^2$ al denominatore: la disequazione si può risolvere, ma la costante in più obbliga a un caso. Si **maggiora** con qualcosa di più semplice, come nello schema "risolvi o maggiora".
> - Fisso $\varepsilon > 0$. Cerco $\nu_\varepsilon$ tale che per ogni $n > \nu_\varepsilon$ valga $\left|\frac{n^2 + 2}{3n^2 + 1} - \frac13\right| < \varepsilon$.
> - Denominatore comune: $\frac{n^2 + 2}{3n^2 + 1} - \frac13 = \frac{3(n^2 + 2) - (3n^2 + 1)}{3(3n^2 + 1)} = \frac{3n^2 + 6 - 3n^2 - 1}{3(3n^2 + 1)} = \frac{5}{3(3n^2 + 1)}$.
> - È positivo, quindi il valore assoluto non cambia niente.
> - Maggioro: $3n^2 + 1 > 3n^2$, quindi $\frac{5}{3(3n^2 + 1)} < \frac{5}{3 \cdot 3n^2} = \frac{5}{9n^2}$ per ogni $n \geq 1$ (denominatore più piccolo, frazione più grande).
> - Basta allora $\frac{5}{9n^2} < \varepsilon \iff n^2 > \frac{5}{9\varepsilon}$ (moltiplico per $\frac{n^2}{\varepsilon} > 0$).
> - $\iff n > \sqrt{\frac{5}{9\varepsilon}} = \frac{\sqrt5}{3\sqrt\varepsilon}$ (la radice è crescente sui positivi, e $n > 0$).
> - Pongo $\nu_\varepsilon := \frac{\sqrt5}{3\sqrt\varepsilon}$; per Archimede ci sono naturali oltre $\nu_\varepsilon$. Per ogni $n > \nu_\varepsilon$ (quindi $n \geq 1$): $\left|a_n - \frac13\right| < \frac{5}{9n^2} < \varepsilon$. Quindi $a_n \to \frac13$.
> - *Controllo*: $\varepsilon = 0{,}1$ dà $\nu_\varepsilon = \sqrt{\frac{50}{9}} \approx 2{,}36$. Con $n = 3$: $\frac{5}{3 \cdot 28} = \frac{5}{84} \approx 0{,}060 < 0{,}1$. Con $n = 2$: $\frac{5}{39} \approx 0{,}128$, che non basta.
>
> **2. $\lim \frac{\log(n^2 + 3^n)}{n}$.**
>
> *Come si riconosce*: logaritmo di una somma. La continuità del logaritmo non è ancora stata fatta, quindi non si può scrivere “$\log$ di qualcosa che tende a..." Si **stringe il logaritmo** fra due quantità, usando che è crescente, e si chiude con i carabinieri.
> - $\frac{n^2}{3^n} \to 0$ per la gerarchia ($n^\alpha \ll a^n$ con $\alpha = 2$, $a = 3$), quindi definitivamente $\frac{n^2}{3^n} < 1$, cioè $n^2 < 3^n$. (In realtà vale per ogni $n \geq 0$: $0 < 1$, $1 < 3$, $4 < 9$, $9 < 27$, e da lì in poi lo scarto cresce; ma per i carabinieri basta "definitivamente".)
> - Allora, definitivamente e per $n \geq 1$: $3^n < n^2 + 3^n < 3^n + 3^n = 2 \cdot 3^n$.
> - Il logaritmo è strettamente crescente: $\log 3^n < \log(n^2 + 3^n) < \log(2 \cdot 3^n)$.
> - Proprietà del logaritmo: $\log 3^n = n\log 3$ e $\log(2 \cdot 3^n) = \log 2 + n\log 3$.
> - Divido per $n > 0$: $\log 3 < \frac{\log(n^2 + 3^n)}{n} < \log 3 + \frac{\log 2}{n}$.
> - $\frac{\log 2}{n} \to 0$, quindi il membro destro tende a $\log 3$; il sinistro è la costante $\log 3$.
> - Per i carabinieri il limite è $\log 3$.
> - *Controllo*: $n = 10$ dà $\frac{\log(59\,149)}{10} \approx 1{,}0988$, e $\log 3 \approx 1{,}0986$.
>
> **3. $a_n = \left(1 + \frac{2(-1)^n}{n}\right)^n$.**
>
> *Come si riconosce*: base $\to 1$ ed esponente $\to +\infty$, ma con $(-1)^n$ dentro: su pari e dispari la base è $1 + \frac2n$ oppure $1 - \frac2n$. Si studiano le due sottosuccessioni con Nepero generalizzato. ($n \geq 3$ garantisce che la base sia positiva: $1 - \frac23 > 0$.)
> - *Pari*, $n = 2k$: $a_{2k} = \left(1 + \frac{2}{2k}\right)^{2k} = \left(1 + \frac1k\right)^{2k} = \left[\left(1 + \frac1k\right)^k\right]^2 \to e^2$ (definizione di $e$ e potenza dei limiti).
> - *Dispari*, $n = 2k + 1$: $a_{2k+1} = \left(1 - \frac{2}{2k + 1}\right)^{2k+1}$.
>   - Scrivo la base come $1 + \frac{1}{b_k}$ con $b_k = -\frac{2k + 1}{2}$; $|b_k| \to +\infty$.
>   - Esponente: $2k + 1 = b_k \cdot (-2)$.
>   - $a_{2k+1} = \left[\left(1 + \frac{1}{b_k}\right)^{b_k}\right]^{-2} \to e^{-2}$ (Nepero generalizzato, che vale anche con $b_k \to -\infty$, e potenza dei limiti).
> - Le due sottosuccessioni tendono a $e^2$ e a $e^{-2}$, diversi. Per il corollario sulle sottosuccessioni $(a_n)$ **non ammette limite**.
> - *Controllo*: $a_{10^6} \approx 7{,}389 \approx e^2$ e $a_{10^6 + 1} \approx 0{,}1353 \approx e^{-2}$.

> [!warning]- Errori tipici su questo esercizio
> - Nel punto 1, togliere il valore assoluto senza dire che la quantità è positiva, o scegliere $\nu_\varepsilon$ dalla stima e poi dimenticare che la stima vale solo per $n \geq 1$.
> - Nel punto 2, scrivere $\log(n^2 + 3^n) \approx \log 3^n$ senza dimostrarlo: è proprio quello che i carabinieri rendono rigoroso.
> - Nel punto 3, rispondere “$1$" perché la base tende a $1$, oppure “$e^2$" guardando solo i pari.

### Griglia dei punti

**Parte 1.** Ogni domanda: $+1{,}5$ giusta, $-0{,}5$ sbagliata, $0$ non data. Risposte: 1 d, 2 b, 3 a, 4 c, 5 b, 6 d, 7 b, 8 a. Soglia per la correzione della parte 2: $5$ su $12$.

**Parte 2.**

| Esercizio | Punto | Cosa si guarda | Punti |
| --- | --- | --- | --- |
| 1 | 1 | primi termini o riscrittura $n - 1 + \frac{11}{n+1}$ | 0,5 |
| 1 | 1 | minorante $\frac{14}{3}$: disequazione di secondo grado e discussione sui naturali | 1,5 |
| 1 | 1 | $\frac{14}{3} \in A$, quindi minimo | 0,5 |
| 1 | 1 | $\sup A = +\infty$ con $M$ e Archimede | 1,5 |
| 1 | 2 | $\max B = \frac{3}{14}$ dai reciproci | 1 |
| 1 | 2 | $\inf B = 0$: maggiorazione e passo $\varepsilon$ con Archimede | 1,5 |
| 1 | 2 | $0$ non è minimo | 0,5 |
| 2 | 1 | caso $z = 0$ | 1 |
| 2 | 1 | forma esponenziale dei due membri (coniugato, $4i$) | 1 |
| 2 | 1 | sistema moduli e argomenti, $\rho = 2$ | 1 |
| 2 | 1 | i sei argomenti distinti | 1,5 |
| 2 | 1 | verifica di almeno una soluzione | 0,5 |
| 2 | 2 | disegno (esagono e settore) | 1 |
| 2 | 2 | selezione con il caso di bordo $\frac{7\pi}{4}$ escluso | 1 |
| 3 | 1 | impostazione e semplificazione di $a_n - \frac13$ | 1 |
| 3 | 1 | maggiorazione e disequazione risolta | 1,5 |
| 3 | 1 | conclusione con $\nu_\varepsilon$ | 0,5 |
| 3 | 2 | stima $3^n < n^2 + 3^n < 2 \cdot 3^n$ giustificata | 1 |
| 3 | 2 | logaritmo crescente, carabinieri, $\log 3$ | 1 |
| 3 | 3 | due sottosuccessioni con i limiti $e^2$ ed $e^{-2}$ | 1,5 |
| 3 | 3 | conclusione con il corollario | 0,5 |

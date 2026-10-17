---
title: Numeri reali, sup e inf (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-15
lezioni: []
ordine: 1
---

Esercizi tipo esame di [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** Sia $A = \left\{\frac1n : n \in \mathbb{N},\ n \geq 1\right\}$. Quale affermazione è vera?

- a) $\min A = 0$
- b) $\inf A = 0$ e $A$ non ha minimo
- c) $\sup A = 1$ ma $A$ non ha massimo
- d) $A$ non è limitato inferiormente

> [!example]- Soluzione
> **b**. $0$ è l'inf (esempio svolto sopra) ma $0 \notin A$, quindi non è un minimo: la a) è falsa. La c) è falsa perché $1 \in A$, quindi $1 = \max A$. La d) è falsa: $0$ è un minorante.

**C2.** Sia $A = (0, 1] \cup \{2\}$. Allora:

- a) $\sup A = 1$
- b) $\min A = 0$
- c) $A$ non ha massimo
- d) $\max A = 2$ e $\inf A = 0$

> [!example]- Soluzione
> **d**. $2 \in A$ e ogni elemento è $\leq 2$, quindi $\max A = \sup A = 2$ (la a) e la c) sono false). $\inf A = 0$ ma $0 \notin A$, quindi niente minimo (la b) è falsa).

**C3.** Sia $A \subset \mathbb{R}$ non vuoto e $M$ un maggiorante di $A$. $M = \sup A$ se e solo se:

- a) $M \in A$
- b) $\forall N < M,\ \exists x \in A : x > N$
- c) $\forall N > M,\ \exists x \in A : x > N$
- d) $\exists N < M : \forall x \in A,\ x > N$

> [!example]- Soluzione
> **b**, la condizione (2). La a) caratterizza il massimo, che è di più. La c) non può mai valere per un maggiorante: se $N > M$, nessun elemento supera $N$. La d) dice solo che $A$ è limitato inferiormente da qualcosa sotto $M$.

**C4.** $\lfloor -7{,}312 \rfloor$ vale:

- a) $-8$
- b) $-7$
- c) $7$
- d) $-7{,}3$

> [!example]- Soluzione
> **a**, esempio del prof. La parte intera è il più grande intero $\leq x$: $-7 > -7{,}312$ non va bene, $-8 \leq -7{,}312$ sì.

**C5.** Quale di queste è l'assioma di completezza di $\mathbb{R}$?

- a) Ogni $A \subset \mathbb{R}$ non vuoto e limitato superiormente ammette un maggiorante in $\mathbb{R}$.
- b) Ogni $A \subset \mathbb{R}$ non vuoto e limitato superiormente ammette massimo.
- c) Ogni $A \subset \mathbb{R}$ non vuoto e limitato superiormente ammette estremo superiore in $\mathbb{R}$.
- d) Ogni $A \subset \mathbb{R}$ non vuoto ammette estremo superiore in $\mathbb{R}$.

> [!example]- Soluzione
> **c**. La a) ripete l'ipotesi: "limitato superiormente" **vuol dire** "ha un maggiorante", quindi la frase è vera per definizione e non dice niente. La b) è falsa: $(0, 1)$ è limitato ma non ha massimo. La d) toglie l'ipotesi di limitatezza ed è falsa: $\mathbb{N}$ non ha sup in $\mathbb{R}$ (Archimede). La tesi giusta è che il **più piccolo** dei maggioranti esiste ed è un numero reale.

**C6.** Sia $A \subset \mathbb{R}$ non vuoto e $M = \sup A \in \mathbb{R}$. Quale affermazione è sempre vera?

- a) $\forall \varepsilon > 0\ \exists x \in A : M - \varepsilon < x \leq M$
- b) $\exists \varepsilon > 0 : \forall x \in A,\ x \leq M - \varepsilon$
- c) $\exists x \in A : \forall \varepsilon > 0,\ x > M - \varepsilon$
- d) $\forall \varepsilon > 0\ \forall x \in A : x > M - \varepsilon$

> [!example]- Soluzione
> **a**: è la (2) con $\varepsilon$ insieme alla (1). La b) dice che $M - \varepsilon$ è un maggiorante più piccolo di $M$: è la negazione della (2), sempre falsa per il sup. La c) ha i quantificatori scambiati: un solo $x$ che supera $M - \varepsilon$ per ogni $\varepsilon$ deve essere $\geq M$, quindi $x = M \in A$, e dice che $M$ è un massimo (falso per $(0, 1)$). La d) dice che **tutti** gli elementi stanno in ogni striscia, quindi $A = \{M\}$ (falso per $(0, 1)$ con $x = \frac12$ e $\varepsilon = \frac14$).

**C7.** Quale affermazione è equivalente alla proprietà di Archimede?

- a) $\exists n \in \mathbb{N} : \forall x \in \mathbb{R},\ n > x$
- b) $\sup \mathbb{N} \in \mathbb{R}$
- c) $\forall n \in \mathbb{N}\ \exists x \in \mathbb{R} : x > n$
- d) $\forall \varepsilon > 0\ \exists n \in \mathbb{N},\ n \geq 1 : \frac1n < \varepsilon$

> [!example]- Soluzione
> **d**. Da Archimede segue la d) (la conseguenza dimostrata sopra, con $x = \frac1\varepsilon$). Viceversa dalla d) segue Archimede: dato $x > 0$, si prende $\varepsilon = \frac1x$ e si trova $n$ con $\frac1n < \frac1x$, cioè $n > x$; se $x \leq 0$ va bene $n = 1$. La a) ha i quantificatori nell'ordine sbagliato ed è falsa (con $x = n$ fallisce). La b) è la negazione di Archimede. La c) è vera ma banale ($x = n + 1$): dice che i reali non hanno massimo, non che i naturali vanno oltre ogni reale.

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo. Gli insiemi delle esercitazioni e del tutorato sono in [Esercizi sup e inf](/uni/analisi-1/esercizi-sup-e-inf/): qui ci sono quelli delle slide e del foglio 1, più quelli di teoria.

**Esercizio 1** (slide 41, insieme $D$ lasciato senza svolgimento). Dire se $D = \{n\cos(\pi n) : n = 1, 2, \dots\}$ è limitato superiormente o inferiormente, e trovare $\sup D$ e $\inf D$.

> [!example]- Soluzione
> **Come si riconosce**: c'è $\cos(\pi n)$, che vale solo $\pm 1$, quindi segni alterni. **Metodo**: separare pari e dispari, poi dimostrare l'illimitatezza con la definizione di illimitato superiormente.
>
> $\cos(\pi n) = (-1)^n$: vale $-1$ per $n$ dispari e $1$ per $n$ pari. Quindi $n\cos(\pi n) = (-1)^n n$ e
> $$
> D = \{-1,\ 2,\ -3,\ 4,\ -5,\ 6, \dots\}
> $$
> **Non limitato superiormente.** Serve: $\forall M \in \mathbb{R},\ \exists x \in D : x > M$.
> 1. Dato $M$, per Archimede esiste $k \in \mathbb{N}$ con $k > M$; si può prendere $k \geq 1$ (se $k = 0$ va bene anche $k = 1$).
> 2. $n = 2k$ è pari e $n \geq 1$, quindi $x = 2k \in D$.
> 3. $2k \geq k > M$. Quindi $\sup D = +\infty$.
>
> **Non limitato inferiormente.** Dato $m$, esiste $k$ con $k > -m$, e con $n = 2k + 1$ (dispari) si ha $x = -(2k+1) < -k < m$. Quindi $\inf D = -\infty$.
>
> Niente massimo né minimo. **Controllo**: i termini pari $2, 4, 6, \dots$ crescono senza fine, i dispari $-1, -3, -5, \dots$ scendono senza fine.

**Esercizio 2** (foglio 1, es. 1 i). Studiare $A = \left\{x_n = \frac{n^2 + 3n + 2}{n^2} : n \in \mathbb{N},\ n \geq 1\right\}$: limitatezza, sup, inf, massimo, minimo.

> [!example]- Soluzione
> **Come si riconosce**: frazione di polinomi dello stesso grado. **Metodo**: dividere per $n^2$ per vedere il comportamento, poi (1)-(2) e (3)-(4).
>
> **Riscrittura.** $x_n = 1 + \frac{3}{n} + \frac{2}{n^2}$. Primi elementi: $x_1 = 6$, $x_2 = 3$, $x_3 = \frac{20}{9}$, $x_4 = \frac{15}{8}$. I termini $\frac3n$ e $\frac{2}{n^2}$ calano al crescere di $n$, quindi la successione è decrescente.
>
> **Sup e max.** Essendo decrescente, $x_n \leq x_1 = 6$ per ogni $n$, e $6 \in A$. Quindi $\max A = \sup A = 6$.
>
> **Inf.** Ipotesi: $\inf A = 1$.
> - (3): $\frac3n + \frac{2}{n^2} > 0$, quindi $x_n > 1$ per ogni $n$.
> - (4): sia $\eta > 1$, cioè $\eta = 1 + \varepsilon$ con $\varepsilon > 0$. Serve un $n$ con $\frac3n + \frac{2}{n^2} < \varepsilon$. Siccome $\frac{2}{n^2} \leq \frac{2}{n}$ per $n \geq 1$ (perché $n^2 \geq n$), basta $\frac5n < \varepsilon$, cioè $n > \frac{5}{\varepsilon}$, che esiste per Archimede. Per quell'$n$, $x_n \leq 1 + \frac5n < 1 + \varepsilon = \eta$.
>
> **Min?** $x_n = 1$ vorrebbe $\frac3n + \frac2{n^2} = 0$, impossibile. Quindi $\inf A = 1$ e il minimo non esiste. $A$ è limitato: $1 < x_n \leq 6$.
>
> **Controllo**: $x_{100} = 1 + 0{,}03 + 0{,}0002 = 1{,}0302$, vicino a $1$ e sopra.

**Esercizio 3** (foglio 1, es. 1 iv). Studiare $A = \left\{x_n = (-1)^n \frac{3n - 1}{n} : n \geq 1\right\}$.

> [!example]- Soluzione
> **Come si riconosce**: c'è $(-1)^n$. **Metodo**: separare pari e dispari, ognuna delle due parti dà un estremo.
>
> **Riscrittura.** $\frac{3n-1}{n} = 3 - \frac1n$, quindi $x_n = (-1)^n\left(3 - \frac1n\right)$. Si separano i due casi:
> - $n$ pari: $x_n = 3 - \frac1n$, cioè $\frac52, \frac{11}{4}, \frac{17}{6}, \dots$, crescenti verso $3$;
> - $n$ dispari: $x_n = -\left(3 - \frac1n\right)$, cioè $-2, -\frac83, -\frac{14}{5}, \dots$, decrescenti verso $-3$.
>
> **Limitato.** $0 < 3 - \frac1n < 3$ per ogni $n \geq 1$, quindi $-3 < x_n < 3$.
>
> **$\sup A = 3$.** (1): $x_n < 3$ per ogni $n$. (2): sia $N < 3$ e $\varepsilon = 3 - N > 0$. Per Archimede esiste $k \geq 1$ con $k > \frac1\varepsilon$; prendo $n = 2k$, pari, con $\frac1n \leq \frac1k < \varepsilon$. Allora $x_n = 3 - \frac1n > 3 - \varepsilon = N$.
>
> **$\inf A = -3$.** Stesso ragionamento con $n = 2k + 1$ dispari: $\frac1n < \frac1k < \varepsilon$, quindi $x_n = -3 + \frac1n < -3 + \varepsilon$.
>
> **Max e min.** $x_n = \pm 3$ vorrebbe $\frac1n = 0$: né $3$ né $-3$ stanno in $A$. Niente massimo, niente minimo.

**Esercizio 4** (foglio 1, es. 1 viii). Studiare $A = \left\{x_n = \cos\frac{n\pi}{6} : n \geq 1\right\}$.

> [!example]- Soluzione
> **Come si riconosce**: funzione periodica di $n$. **Metodo**: i valori si ripetono, quindi l'insieme è finito e si elenca.
>
> L'angolo $\frac{n\pi}{6}$ avanza di $30°$ alla volta, e dopo $n = 12$ ha fatto un giro: i valori si ripetono con periodo $12$. Basta quindi calcolare $n = 1, \dots, 12$:
>
> | $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | $x_n$ | $\frac{\sqrt3}{2}$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt3}{2}$ | $-1$ | $-\frac{\sqrt3}{2}$ | $-\frac12$ | $0$ | $\frac12$ | $\frac{\sqrt3}2$ | $1$ |
>
> $A = \left\{-1, -\frac{\sqrt3}{2}, -\frac12, 0, \frac12, \frac{\sqrt3}{2}, 1\right\}$ è un insieme **finito**, quindi ha sempre massimo e minimo: $\max A = \sup A = 1$ (per $n = 12$) e $\min A = \inf A = -1$ (per $n = 6$). Lo conferma anche $|\cos| \leq 1$.

**Esercizio 5** (foglio 1, es. 1 vi). Studiare $A = \{x \in \mathbb{R} : -6x^2 - |x| + 1 > 0\}$.

> [!example]- Soluzione
> **Come si riconosce**: l'insieme è dato da una disequazione. **Metodo**: risolverla, scrivere $A$ come intervallo, leggere sup e inf.
>
> **Si risolve la disequazione.**
> 1. Siccome $x^2 = |x|^2$, pongo $t = |x| \geq 0$: $-6t^2 - t + 1 > 0$.
> 2. Cambio segno e verso: $6t^2 + t - 1 < 0$.
> 3. Le radici di $6t^2 + t - 1$ sono $t = \frac{-1 \pm \sqrt{1 + 24}}{12} = \frac{-1 \pm 5}{12}$, cioè $t = \frac13$ e $t = -\frac12$.
> 4. La parabola è negativa fra le radici: $-\frac12 < t < \frac13$.
> 5. Con $t = |x| \geq 0$ resta $|x| < \frac13$, cioè
> $$
> A = \left(-\tfrac13, \tfrac13\right)
> $$
> **Sup e inf.** Intervallo aperto: $\sup A = \frac13$, $\inf A = -\frac13$, e siccome gli estremi non appartengono ad $A$ non ci sono né massimo né minimo. Per scrupolo la (2): se $N < \frac13$, il punto medio fra $\max(N, 0)$ e $\frac13$ sta in $\left[0, \frac13\right) \subset A$ ed è maggiore di $N$.
>
> **Controllo**: $x = 0{,}3$ dà $-0{,}54 - 0{,}3 + 1 = 0{,}16 > 0$, dentro; $x = 0{,}34$ dà $-0{,}6936 - 0{,}34 + 1 < 0$, fuori.

**Esercizio 6** (facile, sulla (2)). Sia $C = \left\{2 - \frac{1}{n+1} : n \in \mathbb{N}\right\}$.

- a) Mostrare che $1{,}9$ non è un maggiorante di $C$, trovando il più piccolo $n$ che lo supera.
- b) Mostrare che $3$ è un maggiorante di $C$ ma non è il sup.

> [!example]- Soluzione
> **Come si riconosce**: si chiede di dire perché un numero **non** è il sup. **Metodo**: per la a) si trova un elemento che supera (fallisce la (1)); per la b) si trova un maggiorante più piccolo (fallisce la (2)).
>
> **a)**
> 1. Voglio $2 - \frac{1}{n+1} > 1{,}9$.
> 2. Tolgo $2$: $-\frac{1}{n+1} > -0{,}1$.
> 3. Cambio segno e verso: $\frac{1}{n+1} < 0{,}1$.
> 4. Reciproci di positivi, il verso gira: $n + 1 > 10$, cioè $n > 9$.
> 5. Il più piccolo è $n = 10$: $x_{10} = 2 - \frac{1}{11} = \frac{21}{11} \approx 1{,}909 > 1{,}9$.
>
> Controllo: con $n = 9$ si ha $2 - \frac{1}{10} = 1{,}9$, che non è **maggiore** di $1{,}9$. Quindi $n = 10$ è davvero il primo.
>
> **b)** $3$ è un maggiorante: $2 - \frac{1}{n+1} < 2 < 3$. Non è il sup perché $N = 2{,}5 < 3$ è ancora un maggiorante (stesso conto, $2 - \frac{1}{n+1} < 2 < 2{,}5$): la (2) con $N = 2{,}5$ chiederebbe un elemento $> 2{,}5$, che non c'è. Il sup è $2$ (esempio della slide 41).

**Esercizio 7** (densità). Trovare un razionale $q$ con $\sqrt2 < q < 1{,}415$ seguendo la dimostrazione della densità (usare $\sqrt2 = 1{,}41421356\ldots$).

> [!example]- Soluzione
> **Come si riconosce**: "trovare un razionale fra due numeri" è la densità. **Metodo**: la ricetta della dimostrazione, $n > \frac{1}{b - a}$ e $m = \lfloor na \rfloor + 1$.
>
> 1. $a = \sqrt2$, $b = 1{,}415$, $b - a = 1{,}415 - 1{,}41421356\ldots = 0{,}00078644\ldots$
> 2. $\frac{1}{b - a} \approx 1271{,}6$: per Archimede prendo $n = 1272$.
> 3. $na = 1272 \cdot 1{,}41421356\ldots \approx 1798{,}88$, quindi $m = \lfloor na \rfloor + 1 = 1799$.
> 4. $q = \frac{1799}{1272} \approx 1{,}414308$.
>
> **Controllo**: $1{,}414214 < 1{,}414308 < 1{,}415$. Più semplice ma fuori dalla ricetta: $q = 1{,}4145 = \frac{2829}{2000}$, perché $1{,}4145^2 = 2{,}00081\ldots > 2$, quindi $1{,}4145 > \sqrt2$. La ricetta serve a dimostrare che **un** razionale c'è sempre, non a trovare il più semplice.

**Esercizio 8** (sup di un sottoinsieme). Siano $A \subset B \subset \mathbb{R}$, con $A \neq \emptyset$ e $B$ limitato superiormente. Dimostrare che $A$ è limitato superiormente e che $\sup A \leq \sup B$. Dare un esempio con $\sup A < \sup B$ e uno con $A \neq B$ ma $\sup A = \sup B$.

> [!example]- Soluzione
> **Come si riconosce**: esercizio di teoria con due insiemi generici. **Metodo**: usare la definizione di sup come più piccolo dei maggioranti, senza $\varepsilon$.
>
> 1. $B$ è non vuoto (contiene $A \neq \emptyset$) e limitato superiormente: per la completezza esiste $\sup B \in \mathbb{R}$.
> 2. Sia $x \in A$. Siccome $A \subset B$, $x \in B$.
> 3. $\sup B$ è un maggiorante di $B$ (condizione (1)), quindi $x \leq \sup B$.
> 4. Il passo 3 vale per ogni $x \in A$: $\sup B$ è un maggiorante di $A$. In particolare $A$ è limitato superiormente, e per la completezza esiste $\sup A$.
> 5. $\sup A$ è il **più piccolo** dei maggioranti di $A$, e $\sup B$ è uno di questi: quindi $\sup A \leq \sup B$. $\blacksquare$
>
> **Esempi.** $A = (0, 1) \subset B = (0, 2)$: $\sup A = 1 < 2 = \sup B$. $A = (0, 1) \subset B = (0, 1]$: $A \neq B$ ma $\sup A = \sup B = 1$. Quindi da $A \subsetneq B$ non segue $\sup A < \sup B$.

**Esercizio 9** (inf con gli opposti). Sia $A \subset \mathbb{R}$ non vuoto e limitato superiormente, e sia $-A = \{-x : x \in A\}$. Dimostrare che $-A$ è limitato inferiormente e che $\inf(-A) = -\sup A$.

> [!example]- Soluzione
> **Come si riconosce**: si deve dimostrare che un certo numero è un inf. **Metodo**: chiamare $s = \sup A$, scrivere (1) e (2) per $s$, e da lì ricavare (3) e (4) per $-s$. Moltiplicare per $-1$ gira le disuguaglianze.
>
> Per la completezza esiste $s = \sup A \in \mathbb{R}$. Candidato: $\inf(-A) = -s$.
>
> **(3): $-s$ è un minorante di $-A$.**
> 1. Sia $y \in -A$. Per definizione $y = -x$ con $x \in A$.
> 2. Per la (1) di $s$: $x \leq s$.
> 3. Moltiplico per $-1$, il verso gira: $-x \geq -s$, cioè $y \geq -s$.
>
> Quindi $-A$ è limitato inferiormente.
>
> **(4): nessun numero più grande di $-s$ è un minorante.**
> 1. Sia $\eta > -s$.
> 2. Moltiplico per $-1$: $-\eta < s$.
> 3. Per la (2) di $s$ con $N = -\eta$: esiste $x \in A$ con $x > -\eta$.
> 4. Moltiplico per $-1$: $-x < \eta$, e $-x \in -A$.
> 5. Quindi $\eta$ non è un minorante di $-A$.
>
> Per (3) e (4), $\inf(-A) = -s = -\sup A$. $\blacksquare$
>
> **Controllo** con $A = (0, 1)$: $-A = (-1, 0)$, $\inf(-A) = -1 = -\sup A$. Questo esercizio è la dimostrazione della versione con l'inf della completezza: ogni insieme non vuoto limitato inferiormente $B$ è $-A$ con $A = -B$ limitato superiormente.

**Esercizio 10** (livello 30, due indici). Studiare $A = \left\{\frac1n - \frac1m : n, m \in \mathbb{N},\ n, m \geq 1\right\}$: limitatezza, sup, inf, massimo, minimo.

> [!example]- Soluzione
> **Come si riconosce**: gli elementi dipendono da **due** indici liberi. **Metodo**: ogni indice si muove da solo; per avvicinarsi al sup si sceglie l'indice che fa crescere (qui $n = 1$) e si manda l'altro lontano (qui $m$ grande, con Archimede).
>
> **Primi elementi.** $n = m$ dà $0$; $n = 1, m = 2$ dà $\frac12$; $n = 1, m = 10$ dà $\frac{9}{10}$; $n = 10, m = 1$ dà $-\frac{9}{10}$. Ipotesi: $\sup A = 1$, $\inf A = -1$.
>
> **(1): $1$ è un maggiorante.**
> 1. $\frac1n \leq 1$ perché $n \geq 1$.
> 2. $\frac1m > 0$, quindi $-\frac1m < 0$.
> 3. Sommo: $\frac1n - \frac1m < 1 + 0 = 1$.
>
> **(2): nessun numero più piccolo è un maggiorante.** Sia $\varepsilon > 0$.
> 1. Prendo $n = 1$: l'elemento è $1 - \frac1m$.
> 2. Voglio $1 - \frac1m > 1 - \varepsilon$, cioè $\frac1m < \varepsilon$.
> 3. Per Archimede esiste $m \geq 1$ con $m > \frac1\varepsilon$, quindi $\frac1m < \varepsilon$.
> 4. Allora $1 - \frac1m \in A$ e supera $1 - \varepsilon$.
>
> **Max?** Dal passo 3 della (1) ogni elemento è **strettamente** minore di $1$: $1 \notin A$, niente massimo.
>
> **Inf.** $A$ è simmetrico: scambiando $n$ e $m$, $\frac1m - \frac1n = -\left(\frac1n - \frac1m\right)$, quindi $A = -A$. Per l'esercizio 9, $\inf A = \inf(-A) = -\sup A = -1$. Lo stesso argomento dice che $-1 \notin A$: niente minimo.
>
> **Controllo**: $n = 1$, $m = 1000$ dà $0{,}999$; $n = 1000$, $m = 1$ dà $-0{,}999$. $A$ è limitato, $A \subset (-1, 1)$.

**Esercizio 11** (livello 30, sup di una somma). Siano $A, B \subset \mathbb{R}$ non vuoti e limitati superiormente, e $A + B = \{a + b : a \in A,\ b \in B\}$. Dimostrare che $\sup(A + B) = \sup A + \sup B$.

> [!example]- Soluzione
> **Come si riconosce**: si deve dimostrare che un numero è il sup di un insieme costruito da altri due. **Metodo**: (1) e (2) per il candidato $\sup A + \sup B$; nella (2) l'$\varepsilon$ si divide a metà, $\frac\varepsilon2$ per ogni insieme.
>
> Siano $s = \sup A$ e $t = \sup B$ (esistono per la completezza). Candidato: $s + t$.
>
> **(1).**
> 1. Sia $z \in A + B$: $z = a + b$ con $a \in A$, $b \in B$.
> 2. Per la (1) di $s$ e di $t$: $a \leq s$ e $b \leq t$.
> 3. Sommo le due disuguaglianze: $z = a + b \leq s + t$.
>
> **(2), forma con $\varepsilon$.** Sia $\varepsilon > 0$.
> 1. $\frac\varepsilon2 > 0$, quindi per la (2) di $s$ esiste $a \in A$ con $a > s - \frac\varepsilon2$.
> 2. Per la (2) di $t$ esiste $b \in B$ con $b > t - \frac\varepsilon2$.
> 3. Sommo: $a + b > s + t - \frac\varepsilon2 - \frac\varepsilon2 = (s + t) - \varepsilon$.
> 4. $a + b \in A + B$: la (2) vale. $\blacksquare$
>
> **Perché $\frac\varepsilon2$.** Ogni insieme "perde" al più un pezzo sotto il suo sup, e le due perdite si sommano. Con $\varepsilon$ per ciascuno la perdita totale arriverebbe a $2\varepsilon$, troppo. Dividere a metà fa tornare il conto esatto.
>
> **Controllo** con $A = (0, 1)$ e $B = \{1, 2\}$: $A + B = (1, 2) \cup (2, 3)$, sup $3 = 1 + 2$.

**Esercizio 12** (livello 30, il buco di $\mathbb{Q}$). Sia $A = \{q \in \mathbb{Q} : q \geq 0,\ q^2 < 2\}$. Dimostrare che $A$ non ha massimo: per ogni $q \in A$ il numero $q' = \frac{2q + 2}{q + 2}$ sta in $A$ ed è maggiore di $q$.

> [!example]- Soluzione
> **Come si riconosce**: si deve far vedere che nessun elemento è il più grande. **Metodo**: per ogni elemento se ne costruisce uno più grande dentro l'insieme. Bisogna controllare tre cose: $q' \in \mathbb{Q}$, $q' \geq 0$ con $q'^2 < 2$, $q' > q$.
>
> Sia $q \in A$, quindi $q \in \mathbb{Q}$, $q \geq 0$, $q^2 < 2$.
> 1. **$q'$ è razionale**: $2q + 2$ e $q + 2$ sono razionali, e $q + 2 \geq 2 \neq 0$, quindi il quoziente è razionale.
> 2. **$q' \geq 0$**: numeratore $2q + 2 > 0$ e denominatore $q + 2 > 0$.
> 3. **$q' > q$**. Denominatore comune: $q' - q = \frac{2q + 2 - q^2 - 2q}{q + 2} = \frac{2 - q^2}{q + 2}$. Il numeratore è $> 0$ perché $q^2 < 2$, il denominatore è $> 0$: quindi $q' - q > 0$.
> 4. **$q'^2 < 2$**. $q'^2 - 2 = \frac{(2q + 2)^2 - 2(q + 2)^2}{(q + 2)^2}$. Sviluppo: $(2q + 2)^2 = 4q^2 + 8q + 4$ e $2(q + 2)^2 = 2q^2 + 8q + 8$. Differenza: $2q^2 - 4 = 2(q^2 - 2) < 0$. Quindi $q'^2 - 2 < 0$.
> 5. Per 1, 2 e 4, $q' \in A$; per 3, $q' > q$. Quindi nessun $q \in A$ è il massimo. $\blacksquare$
>
> **Controllo**: $q = \frac75$ dà $q' = \frac{14/5 + 2}{7/5 + 2} = \frac{24/5}{17/5} = \frac{24}{17} \approx 1{,}4118 > 1{,}4$, e $\left(\frac{24}{17}\right)^2 = \frac{576}{289} \approx 1{,}993 < 2$.
>
> **Il collegamento**: insieme alla dimostrazione "in $\mathbb{Q}$ l'insieme $A$ non ha sup", questo dice che in $\mathbb{Q}$ l'insieme $A$ non ha né massimo né sup. In $\mathbb{R}$ il massimo continua a non esserci (stesso conto), ma il sup c'è, ed è $\sqrt2$.

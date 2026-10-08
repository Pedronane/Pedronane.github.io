---
title: Esercizi su sup, inf, max e min
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-05
lezioni: []
ordine: 999
---

Nove esercizi dalla lavagna dell'esercitazione, gli stessi del foglio "Estremo superiore e inferiore con massimi e minimi" del III tutoraggio (<span class="src">Tutoraggio 3 complementi</span>, Barbon, Favari, Bellomo), con la consegna: «Determinare estremo superiore e inferiore dei seguenti insiemi, specificando se coincidono con, rispettivamente, il massimo e il minimo. Giustificare ogni affermazione!». La teoria sta in [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/), qui c'è solo quello che serve per svolgerli. In fondo ci sono anche un esercizio in più (10) e l'esercizio 1 del III tutoraggio sulle successioni (11). Ogni esercizio ha un **indizio** e una **soluzione**, entrambi chiusi: prova prima da solo, apri l'indizio se ti blocchi, la soluzione solo alla fine.

> [!abstract] Per l'esame
> - **Saper fare**: per un insieme dato come intervallo, come successione $\{x_n : n \in \mathbb{N}\}$ o come immagine di una funzione, trovare sup e inf e **dimostrarli** con le due condizioni; dire se sono massimo e minimo.
> - **Dove esce**: è l'esercizio 1 del foglio 1 e l'esercizio da 7 punti della parte 2 ("limitato? sup, inf, max, min?"). Senza giustificazione il risultato giusto vale poco: il tutor l'ha scritto con il punto esclamativo.

## Cosa serve

**Convenzione.** In questo corso $\mathbb{N} = \{0, 1, 2, \dots\}$, quindi lo $0$ c'è. Negli esercizi 3, 4, 6 e 7 il denominatore $n+1$ serve proprio a non dividere per zero con $n = 0$.

**Maggiorante.** $M$ è un maggiorante di $A$ se $x \leq M$ per ogni $x \in A$. Minorante: $x \geq m$ per ogni $x \in A$.

**Estremo superiore.** $\sup A$ è il più piccolo dei maggioranti. In pratica, $M = \sup A$ se valgono entrambe:

$$
\text{(1)}\ \ x \leq M \ \ \forall x \in A \qquad\qquad \text{(2)}\ \ \forall N < M\ \ \exists x \in A : x > N
$$

La (1) dice che $M$ è un maggiorante. La (2) dice che appena scendi sotto $M$ smetti di esserlo: c'è sempre un elemento di $A$ che ti scavalca.

**Estremo inferiore**, allo stesso modo: $m = \inf A$ se

$$
\text{(3)}\ \ x \geq m \ \ \forall x \in A \qquad\qquad \text{(4)}\ \ \forall \eta > m\ \ \exists x \in A : x < \eta
$$

**Massimo e minimo.** Il massimo è un maggiorante che **appartiene** ad $A$. Se esiste coincide con il sup, e in quel caso la (2) è gratis: con $N < M$ basta prendere $x = M$ stesso. Quindi la domanda "il sup è un massimo?" diventa "il sup sta in $A$?".

**Insiemi illimitati.** Se $A$ non ha maggioranti si scrive $\sup A = +\infty$, e va dimostrato così: per ogni $M \in \mathbb{R}$ esiste $x \in A$ con $x > M$. Niente massimo, ovviamente.

**Proprietà di Archimede.** Per ogni $x \in \mathbb{R}$ esiste $n \in \mathbb{N}$ con $n > x$. È lo strumento per la (2) e la (4): quando serve un $n$ con $\frac1n < \varepsilon$, basta $n > \frac1\varepsilon$.

## Metodo

```
1. scrivi i primi elementi (n = 0, 1, 2, 3, 4)      ti fai un'idea di dove vanno
2. riscrivi l'elemento generico                      n/(n+1) = 1 - 1/(n+1)
3. ipotesi su sup e inf
4. dimostra (1) e (3)                                 una disuguaglianza per ogni n
5. dimostra (2) e (4)                                 dato N, trova l'n: Archimede
   oppure, se il candidato sta in A, è max/min        e la (2)/(4) non serve
6. sup ∈ A ?  inf ∈ A ?                               risolvi x_n = sup: ha soluzione?
```

Tre trucchi che tornano in questi nove esercizi:

- **Riscrivere per separare la parte costante.** $\frac{n}{n+1} = 1 - \frac{1}{n+1}$ fa vedere subito che gli elementi stanno sotto $1$ e gli si avvicinano.
- **Spezzare pari e dispari** quando c'è $(-1)^n$: sono due successioni separate, una positiva e una negativa, e il sup viene da una, l'inf dall'altra.
- **Confrontare termini consecutivi** quando la successione prima scende e poi sale: il segno di $x_{n+1} - x_n$ dice dove gira, e lì c'è il minimo.

## Esercizi

### 1) $A = (0, 1)$

> [!tip]- Indizio
> Il candidato per il sup è $1$, per l'inf è $0$. Per la (2): dato $N < 1$, cerca un punto di $(0,1)$ più grande di $N$. Il punto medio fra $N$ e $1$ funziona, ma attento se $N$ è negativo.

> [!example]- Soluzione
> **$\sup A = 1$.**
> - (1): ogni $x \in (0,1)$ ha $x < 1$.
> - (2): sia $N < 1$. Se $N \leq 0$, prendo $x = \frac12 \in A$, e $\frac12 > N$. Se $0 < N < 1$, prendo il punto medio $x = \frac{N + 1}{2}$: sta fra $N$ e $1$, quindi in $(0,1)$, ed è $> N$.
>
> **$\inf A = 0$.** Stesso schema. (3): $x > 0$ per ogni $x \in A$. (4): sia $\eta > 0$. Se $\eta \geq 1$ va bene $x = \frac12$; se $0 < \eta < 1$ va bene $x = \frac{\eta}{2} \in (0, 1)$, che è $< \eta$.
>
> **Max e min.** $1 \notin A$ e $0 \notin A$ (intervallo aperto): niente massimo, niente minimo.

### 2) $A = (0, 1]$

> [!tip]- Indizio
> Rispetto all'esercizio 1 cambia una parentesi sola. Cosa cambia per il sup, e cosa resta uguale per l'inf?

> [!example]- Soluzione
> **$\max A = \sup A = 1$.** $1 \in A$ e $x \leq 1$ per ogni $x \in A$: $1$ è un maggiorante che sta in $A$, quindi è il massimo e dunque il sup. La (2) qui non serve dimostrarla a parte.
>
> **$\inf A = 0$**, con la stessa dimostrazione dell'esercizio 1 (per $0 < \eta < 1$ il punto $\frac\eta2$ sta in $(0,1]$ ed è $< \eta$; per $\eta \geq 1$ va bene $\frac12$).
>
> **Min?** $0 \notin A$: il minimo non esiste.

### 3) $A = \left\{\frac{1}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Elementi: $n = 0, 1, 2, \dots$ danno $1, \frac12, \frac13, \dots$. È l'esempio della lezione del 15/9 scritto con $n+1$. Per l'inf ti serve un $n$ con $\frac{1}{n+1} < \eta$: chiedi ad Archimede.

> [!example]- Soluzione
> $A = \left\{1, \frac12, \frac13, \frac14, \dots\right\}$, elementi che decrescono al crescere di $n$.
>
> **$\max A = \sup A = 1$.** Con $n = 0$ si ha $1 \in A$. Inoltre $n + 1 \geq 1$, quindi $\frac{1}{n+1} \leq 1$ per ogni $n$.
>
> **$\inf A = 0$.**
> - (3): $\frac{1}{n+1} > 0$ per ogni $n$.
> - (4): sia $\eta > 0$. Per Archimede esiste $n \in \mathbb{N}$ con $n > \frac1\eta$. Allora $n + 1 > \frac1\eta$, cioè $\frac{1}{n+1} < \eta$: ho trovato un elemento di $A$ sotto $\eta$.
>
> **Min?** $\frac{1}{n+1} = 0$ non ha soluzioni, quindi $0 \notin A$: il minimo non esiste.

### 4) $A = \left\{\frac{(-1)^n\, n}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Calcola i primi termini: $0, -\frac12, \frac23, -\frac34, \frac45, \dots$ Riscrivi $\frac{n}{n+1} = 1 - \frac{1}{n+1}$ e separa $n$ pari ($x_n$ positivo) da $n$ dispari ($x_n$ negativo). Dove si avvicinano i pari? E i dispari?

> [!example]- Soluzione
> **Riscrittura.** $\frac{n}{n+1} = 1 - \frac{1}{n+1}$, quindi
> - $n$ pari: $x_n = 1 - \frac{1}{n+1}$, cioè $0, \frac23, \frac45, \frac67, \dots$, che crescono verso $1$;
> - $n$ dispari: $x_n = -1 + \frac{1}{n+1}$, cioè $-\frac12, -\frac34, -\frac56, \dots$, che scendono verso $-1$.
>
> **Limitato.** $0 \leq \frac{n}{n+1} < 1$, quindi $-1 < x_n < 1$ per ogni $n$.
>
> **$\sup A = 1$.**
> - (1): $x_n < 1$ per ogni $n$, appena visto.
> - (2): sia $N < 1$ e pongo $\varepsilon = 1 - N > 0$. Per Archimede esiste $k \in \mathbb{N}$ con $k > \frac1\varepsilon$ (e $k \geq 1$, perché $\frac1\varepsilon > 0$). Prendo $n = 2k$, pari. Allora $\frac{1}{n+1} < \frac1k < \varepsilon$ e
> $$
> x_{2k} = 1 - \frac{1}{2k+1} > 1 - \varepsilon = N
> $$
>
> **$\inf A = -1$.**
> - (3): $x_n > -1$ per ogni $n$.
> - (4): sia $\eta > -1$ e $\varepsilon = \eta + 1 > 0$. Con lo stesso $k > \frac1\varepsilon$ prendo $n = 2k + 1$, dispari: $\frac{1}{n+1} = \frac{1}{2k+2} < \frac1k < \varepsilon$, quindi
> $$
> x_{2k+1} = -1 + \frac{1}{2k+2} < -1 + \varepsilon = \eta
> $$
>
> **Max e min.** $x_n = 1$ o $x_n = -1$ vorrebbe $\frac{1}{n+1} = 0$, impossibile. Niente massimo, niente minimo.
>
> Nota: lo $0$ (con $n = 0$) è un elemento di $A$ ma non c'entra con sup e inf. Non confonderlo con il minimo solo perché è il primo termine.

### 5) $A = \left\{\frac{1}{2^n} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Elementi: $1, \frac12, \frac14, \frac18, \dots$ Il sup è facile. Per la (4) ti serve $\frac{1}{2^n} < \eta$: confronta $2^n$ con $n + 1$, poi è come l'esercizio 3.

> [!example]- Soluzione
> **$\max A = \sup A = 1$.** Con $n = 0$, $\frac{1}{2^0} = 1 \in A$. Inoltre $2^n \geq 1$ per ogni $n$, quindi $\frac{1}{2^n} \leq 1$.
>
> **$\inf A = 0$.**
> - (3): $\frac{1}{2^n} > 0$ per ogni $n$.
> - (4): prima un fatto: $2^n \geq n + 1$ per ogni $n \in \mathbb{N}$. Per induzione: con $n = 0$ è $1 \geq 1$; se $2^n \geq n+1$, allora $2^{n+1} = 2 \cdot 2^n \geq 2(n+1) = 2n + 2 \geq n + 2$. Quindi $\frac{1}{2^n} \leq \frac{1}{n+1}$.
>
>   Sia ora $\eta > 0$. Come nell'esercizio 3, Archimede dà $n$ con $\frac{1}{n+1} < \eta$, e per quell'$n$ anche $\frac{1}{2^n} \leq \frac{1}{n+1} < \eta$.
>
> **Min?** $\frac{1}{2^n} = 0$ non ha soluzioni: $0 \notin A$, niente minimo.
>
> Il confronto con $\frac{1}{n+1}$ è il trucco da ricordare: quando una successione va a zero più in fretta di una che sai già gestire, la usi come scalino.

### 6) $A = \left\{n + \frac{5}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> Calcola $x_0, x_1, x_2, x_3, x_4$: prima scende, poi sale. Il sup è $+\infty$ perché $x_n > n$. Per il minimo indovina il valore dai primi termini, poi dimostra $x_n \geq$ quel valore portando tutto a un'unica frazione: esce una disequazione di secondo grado in $n$.

> [!example]- Soluzione
> **Primi elementi.**
>
> | $n$ | 0 | 1 | 2 | 3 | 4 |
> | --- | --- | --- | --- | --- | --- |
> | $x_n$ | $5$ | $\frac72$ | $\frac{11}{3}$ | $\frac{17}{4}$ | $5$ |
>
> Il più piccolo è $x_1 = \frac72$. Ipotesi: $\min A = \frac72$.
>
> **$\min A = \inf A = \frac72$.** Va dimostrato che $x_n \geq \frac72$ per ogni $n$. Moltiplico per $2(n+1) > 0$, che non gira la disuguaglianza:
> $$
> n + \frac{5}{n+1} \geq \frac72 \iff 2n(n+1) + 10 \geq 7(n+1) \iff 2n^2 - 5n + 3 \geq 0
> $$
> Le radici di $2n^2 - 5n + 3$ sono $n = 1$ e $n = \frac32$, quindi $2n^2 - 5n + 3 = (n-1)(2n-3)$ è negativo solo per $1 < n < \frac32$. Fra $1$ e $\frac32$ non c'è nessun naturale: la disuguaglianza vale per ogni $n \in \mathbb{N}$, con l'uguale per $n = 1$. Dato che $\frac72 = x_1 \in A$, è il minimo, quindi anche l'inf.
>
> **$\sup A = +\infty$.** $\frac{5}{n+1} > 0$, quindi $x_n > n$. Dato un qualsiasi $M \in \mathbb{R}$, Archimede dà $n > M$, e allora $x_n > n > M$: nessun $M$ è un maggiorante. Niente massimo.

### 7) $A = \left\{n + \frac{2026}{n+1} : n \in \mathbb{N}\right\}$

> [!tip]- Indizio
> È l'esercizio 6 con numeri grandi: il sup è uguale, il minimo no, perché indovinarlo dai primi termini non funziona più. Calcola $x_{n+1} - x_n$ e guarda per quali $n$ è positivo. Ti serve sapere che $44 \cdot 45 = 1980$ e $45 \cdot 46 = 2070$.

> [!example]- Soluzione
> **$\sup A = +\infty$**, come nel 6: $x_n > n$ e Archimede. Niente massimo.
>
> **Dove gira la successione.** Differenza fra due termini consecutivi:
> $$
> x_{n+1} - x_n = 1 + \frac{2026}{n+2} - \frac{2026}{n+1} = 1 - \frac{2026}{(n+1)(n+2)}
> $$
> perché $\frac{2026}{n+2} - \frac{2026}{n+1} = \frac{2026\,[(n+1) - (n+2)]}{(n+1)(n+2)} = -\frac{2026}{(n+1)(n+2)}$.
>
> Quindi $x_{n+1} > x_n$ se e solo se $(n+1)(n+2) > 2026$. Il prodotto $(n+1)(n+2)$ cresce con $n$, e
> - $n = 43$: $44 \cdot 45 = 1980 < 2026$, quindi $x_{44} < x_{43}$;
> - $n = 44$: $45 \cdot 46 = 2070 > 2026$, quindi $x_{45} > x_{44}$.
>
> La successione scende da $x_0$ a $x_{44}$ e da lì in poi sale:
> ```
> x_0 > x_1 > ... > x_43 > x_44 < x_45 < x_46 < ...
> ```
>
> **$\min A = \inf A = x_{44}$.** Ogni termine è $\geq x_{44}$: quelli prima perché la successione scende fino a lì, quelli dopo perché sale da lì. E $x_{44} \in A$. Il valore:
> $$
> x_{44} = 44 + \frac{2026}{45} = \frac{1980 + 2026}{45} = \frac{4006}{45} \approx 89{,}02
> $$
>
> Da dove viene il $44$: per $n$ grande i due pezzi $n+1$ e $\frac{2026}{n+1}$ sono uno grande e uno piccolo, e la somma è minima quando sono circa uguali, cioè $(n+1)^2 \approx 2026$, $n + 1 \approx \sqrt{2026} \approx 45$. Serve solo a indovinare; la dimostrazione è quella dei termini consecutivi.
>
> Con lo stesso metodo puoi rifare il 6: $x_{n+1} - x_n = 1 - \frac{5}{(n+1)(n+2)}$, negativo solo per $n = 0$ ($1 \cdot 2 < 5$), positivo da $n = 1$ ($2 \cdot 3 > 5$). Minimo in $n = 1$, come trovato.

### 8) $A = \left\{x + \frac1x : x \in \mathbb{R},\ x > 0\right\}$

> [!tip]- Indizio
> Qui $x$ è un reale, non un naturale: niente successione. Prova qualche valore ($x = \frac12, 1, 2$). Per dimostrare il minimo parti da un quadrato, che è sempre $\geq 0$.

> [!example]- Soluzione
> Prove: $x = \frac12$ dà $\frac52$, $x = 1$ dà $2$, $x = 2$ dà $\frac52$. Ipotesi: minimo $2$ in $x = 1$.
>
> **$\min A = \inf A = 2$.** Per ogni $x > 0$:
> $$
> (x - 1)^2 \geq 0 \implies x^2 + 1 \geq 2x \implies x + \frac1x \geq 2
> $$
> dove nell'ultimo passo ho diviso per $x > 0$. Con $x = 1$ si ottiene proprio $2$, quindi $2 \in A$: è il minimo e l'inf.
>
> **$\sup A = +\infty$.** $\frac1x > 0$, quindi $x + \frac1x > x$. Dato $M \in \mathbb{R}$, prendo $x = |M| + 1 > 0$: allora $x + \frac1x > |M| + 1 > M$. Niente massimo.
>
> Nota: $\frac1x$ diventa enorme anche per $x \to 0^+$, quindi da quel lato si poteva ugualmente mostrare che non c'è maggiorante.

### 9) $A = \left\{\sqrt{n} - \lfloor\sqrt{n}\rfloor : n \in \mathbb{N}\right\}$ [*]

Il testo giusto viene dal foglio del tutoraggio: nella foto della lavagna il centro era coperto, e qui prima c'era un'altra versione ($\sqrt{n+1} - \sqrt n$), che resta sotto come esercizio 10. $\lfloor x \rfloor$ è la **parte intera** di $x$, il più grande intero $\leq x$: $\lfloor 2{,}7 \rfloor = 2$, $\lfloor 3 \rfloor = 3$. Quindi $\sqrt n - \lfloor \sqrt n \rfloor$ è la **parte frazionaria** di $\sqrt n$, "quello che c'è dopo la virgola".

> [!tip]- Indizio
> Scrivi qualche elemento: $n = 0, 1, 2, 3, 4, 8, 9, 15$. Quando vale $0$? Si avvicina a $1$ subito prima di quali $n$? Per la (2) prova $n = k^2 + 2k = (k+1)^2 - 1$ e razionalizza $\sqrt{k^2 + 2k} - k$.

> [!example]- Soluzione
> Qualche elemento: $n = 0, 1, 4, 9$ (quadrati perfetti) danno $0$; $n = 2$: $\sqrt2 - 1 \approx 0{,}41$; $n = 3$: $\sqrt3 - 1 \approx 0{,}73$; $n = 8$: $\sqrt8 - 2 \approx 0{,}83$; $n = 15$: $\sqrt{15} - 3 \approx 0{,}87$. Subito prima di ogni quadrato la parte frazionaria sale verso $1$, poi sul quadrato crolla a $0$.
>
> **$\min A = \inf A = 0$.** Per definizione di parte intera $\lfloor\sqrt n\rfloor \leq \sqrt n$, quindi ogni elemento è $\geq 0$. E $0 \in A$ (con $n = 0$, o qualunque quadrato perfetto).
>
> **$\sup A = 1$.**
> - (1): $\lfloor x \rfloor > x - 1$ per ogni $x$ (altrimenti $\lfloor x \rfloor + 1 \leq x$ sarebbe un intero più grande, ancora $\leq x$). Quindi $\sqrt n - \lfloor\sqrt n\rfloor < 1$.
> - (2): sia $N < 1$. Per $k \geq 1$ prendo $n = k^2 + 2k$. Siccome $k^2 \leq k^2 + 2k < (k+1)^2$, vale $k \leq \sqrt n < k + 1$, cioè $\lfloor\sqrt n\rfloor = k$. Razionalizzando:
> $$
> \sqrt{k^2 + 2k} - k = \frac{(k^2 + 2k) - k^2}{\sqrt{k^2 + 2k} + k} = \frac{2k}{\sqrt{k^2 + 2k} + k} > \frac{2k}{(k + 1) + k} = 1 - \frac{1}{2k + 1}
> $$
> dove ho usato $\sqrt{k^2 + 2k} < k + 1$. Mi basta $1 - \frac{1}{2k+1} \geq N$, cioè $2k + 1 \geq \frac{1}{1 - N}$: un $k$ così esiste per Archimede. Per quell'$n$ l'elemento è $> N$.
>
> **Max?** Ogni elemento è $< 1$ strettamente, quindi $1 \notin A$: niente massimo.
>
> Perché ha l'asterisco: bisogna maneggiare la parte intera e indovinare quali $n$ avvicinano l'elemento a $1$ (quelli subito prima di un quadrato).

### 10) $A = \left\{\sqrt{n+1} - \sqrt{n} : n \in \mathbb{N}\right\}$ (esercizio in più)

Non è del foglio: era la versione ricostruita dalla foto, prima che arrivasse il testo del tutoraggio. Resta perché allena la razionalizzazione, che serve nei limiti ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/), slide 59).

> [!tip]- Indizio
> La differenza di due radici si gestisce male. Moltiplica e dividi per $\sqrt{n+1} + \sqrt{n}$ (razionalizzazione): diventa una frazione con $1$ al numeratore. Poi è un esercizio 3 travestito.

> [!example]- Soluzione
> **Razionalizzazione.** Con $(a - b)(a + b) = a^2 - b^2$:
> $$
> \sqrt{n+1} - \sqrt{n} = \frac{(\sqrt{n+1} - \sqrt{n})(\sqrt{n+1} + \sqrt{n})}{\sqrt{n+1} + \sqrt{n}} = \frac{(n+1) - n}{\sqrt{n+1} + \sqrt{n}} = \frac{1}{\sqrt{n+1} + \sqrt{n}}
> $$
> Il denominatore cresce con $n$, quindi gli elementi decrescono: $x_0 = 1$, $x_1 = \sqrt2 - 1 \approx 0{,}41$, $x_2 = \sqrt3 - \sqrt2 \approx 0{,}32$, ...
>
> **$\max A = \sup A = 1$.** Per $n = 0$ si ha $x_0 = 1 - 0 = 1 \in A$. Per ogni $n$, $\sqrt{n+1} + \sqrt{n} \geq 1$, quindi $x_n \leq 1$.
>
> **$\inf A = 0$.**
> - (3): $x_n > 0$, perché è $1$ diviso un positivo.
> - (4): sia $\eta > 0$. Siccome $\sqrt{n+1} + \sqrt n > \sqrt n$, vale $x_n < \frac{1}{\sqrt n}$ per $n \geq 1$. Mi basta allora $\frac{1}{\sqrt n} < \eta$, cioè $\sqrt n > \frac1\eta$, cioè $n > \frac{1}{\eta^2}$. Un $n$ così esiste per Archimede (e $n \geq 1$, perché $\frac{1}{\eta^2} > 0$). Per quell'$n$, $x_n < \eta$.
>
> **Min?** $x_n = 0$ vorrebbe $1 = 0$: $0 \notin A$, niente minimo.
>
> Il punto: senza razionalizzare, $\sqrt{n+1} - \sqrt n$ sembra una forma "infinito meno infinito" e non si vede né che è positiva né che va a zero.

### 11) $A = \left\{\ln\left(1 + (-1)^n \frac{n}{n+1}\right) : n \in \mathbb{N}\right\}$ (III tutoraggio, es. 1)

Dal foglio "Successioni e loro limiti" (<span class="src">Tutoraggio 3</span>): «Determinare l'estremo superiore e inferiore del seguente insieme, specificando se coincidono, rispettivamente, con il massimo e il minimo. Ogni affermazione deve essere giustificata.»

> [!tip]- Indizio
> Separa $n$ pari e dispari e semplifica l'argomento del logaritmo in ciascun caso. Il logaritmo è crescente: sup e inf dell'argomento diventano sup e inf del logaritmo.

> [!example]- Soluzione
> **Pari**, $n = 2k$: l'argomento è $1 + \frac{n}{n+1} = \frac{2n + 1}{n + 1} = 2 - \frac{1}{n+1}$. Per $n = 0$ vale $1$ (elemento $\ln 1 = 0$), poi cresce verso $2$ senza raggiungerlo.
>
> **Dispari**, $n = 2k + 1$: l'argomento è $1 - \frac{n}{n+1} = \frac{1}{n+1}$, che va a $0^+$. L'elemento è $\ln\frac{1}{n+1} = -\ln(n+1)$: $-\ln 2, -\ln 4, -\ln 6, \dots$
>
> **$\sup A = \ln 2$.**
> - (1): sui pari l'argomento è $< 2$, quindi l'elemento è $< \ln 2$ ($\ln$ crescente). Sui dispari l'elemento è $< 0 < \ln 2$.
> - (2): sia $N < \ln 2$, cioè $e^N < 2$. Cerco $n$ pari con $\ln\left(2 - \frac{1}{n+1}\right) > N$, cioè $2 - \frac{1}{n+1} > e^N$, cioè $\frac{1}{n+1} < 2 - e^N$, cioè $n + 1 > \frac{1}{2 - e^N}$ (il denominatore è positivo). Per Archimede esiste un $n$ pari così.
>
> **Max?** $\ln 2$ richiederebbe argomento $2$, cioè $\frac{1}{n+1} = 0$: impossibile. Niente massimo.
>
> **$\inf A = -\infty$.** Dato $M \in \mathbb{R}$, cerco $n$ dispari con $-\ln(n+1) < M$, cioè $n + 1 > e^{-M}$: esiste per Archimede. L'insieme non è limitato inferiormente, niente minimo.

## Riepilogo

| | sup | max? | inf | min? |
| --- | --- | --- | --- | --- |
| 1 | $1$ | no | $0$ | no |
| 2 | $1$ | sì | $0$ | no |
| 3 | $1$ | sì ($n=0$) | $0$ | no |
| 4 | $1$ | no | $-1$ | no |
| 5 | $1$ | sì ($n=0$) | $0$ | no |
| 6 | $+\infty$ | no | $\frac72$ | sì ($n=1$) |
| 7 | $+\infty$ | no | $\frac{4006}{45}$ | sì ($n=44$) |
| 8 | $+\infty$ | no | $2$ | sì ($x=1$) |
| 9 | $1$ | no | $0$ | sì ($n=0$, quadrati) |
| 10 | $1$ | sì ($n=0$) | $0$ | no |
| 11 | $\ln 2$ | no | $-\infty$ | no |

## Errori tipici

- **Fermarsi alla (1).** Dire “$x_n < 1$ per ogni $n$" prova solo che $1$ è un maggiorante. Anche $7$ lo è. Senza la (2) il sup non è dimostrato.
- **Dimenticare $n = 0$.** Nel 3, 5 e 10 il massimo sta proprio in $n = 0$: partendo da $n = 1$ lo perdi e sbagli la risposta.
- **Prendere il primo termine per il minimo.** Nel 4 $x_0 = 0$ non è né sup né inf; nel 6 e 7 la successione prima scende.
- **Indovinare il minimo del 7 dai primi termini.** Con $2026$ la discesa dura 44 passi: serve $x_{n+1} - x_n$.
- **Moltiplicare per una quantità senza guardarne il segno.** Nel 6 e nell'8 si moltiplica per $2(n+1)$ e si divide per $x$: va bene perché sono positivi, e va scritto.
- **Usare Archimede senza dire quale $n$.** "Per Archimede esiste $n$" non basta: scrivi la disuguaglianza che $n$ deve soddisfare ($n > \frac1\varepsilon$, $n > \frac{1}{\eta^2}$, ...).

## Domande

- Quali due condizioni devi dimostrare per dire che $M = \sup A$, e cosa dice ciascuna?

- Se il candidato sup appartiene all'insieme, perché non serve dimostrare la seconda condizione?

- Come si dimostra che $\sup A = +\infty$?

- Con $(-1)^n$ nell'elemento generico, perché conviene separare $n$ pari e dispari?

- A cosa serve guardare il segno di $x_{n+1} - x_n$?

- Come si trasforma $\sqrt{n+1} - \sqrt{n}$ per studiarla?

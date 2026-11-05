---
title: Simulazione provetta 4
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: simulazione
stato: completa
data: 2026-11-05
lezioni: []
ordine: 999
durata: 120
---

Quarta simulazione del primo parziale di [Analisi Matematica 1](/uni/analisi-1/), la più difficile. Ha la forma della prova vera del 31/10/25: 8 crocette ed esercizi da 8 e 12 punti, totale 32. Il programma arriva alle derivate, Fermat compreso; non serve Lagrange. Le domande sono nuove, costruite sui tipi delle provette 2019-2025.

> [!info] Regole
> - **2 ore**, niente calcolatrice. Fai partire il cronometro e non guardare la correzione prima della fine. La durata è una scelta di questa simulazione: quella ufficiale del parziale va controllata.
> - **Test**: ogni risposta corretta vale $1{,}5$ punti, ogni risposta non data vale $0$ punti, ogni risposta sbagliata vale $-0{,}5$ punti. Il test è superato con almeno $5$ punti su $12$.
> - **Esercizi con svolgimento**: scrivere in modo sintetico lo svolgimento dei seguenti esercizi. Massimo $20$ punti.

## Testo

### Parte 1 · crocette

### Domanda 1

Siano $f : D \to \mathbb{R}$ e $x_0 \in D$. La negazione della proposizione “$f$ è continua in $x_0$" equivale a:

- a) $\exists \varepsilon > 0\ \exists \delta > 0 : \forall x \in D,\ \vert x - x_0\vert < \delta \Rightarrow \vert f(x) - f(x_0)\vert \geq \varepsilon$
- b) $\forall \varepsilon > 0\ \exists \delta > 0\ \exists x \in D : \vert x - x_0\vert \geq \delta$ e $\vert f(x) - f(x_0)\vert \geq \varepsilon$
- c) $\exists \varepsilon > 0 : \forall \delta > 0\ \exists x \in D : \vert x - x_0\vert < \delta$ e $\vert f(x) - f(x_0)\vert \geq \varepsilon$
- d) $\exists \varepsilon > 0 : \forall \delta > 0\ \exists x \in D : \vert x - x_0\vert \geq \delta$ e $\vert f(x) - f(x_0)\vert < \varepsilon$

### Domanda 2

Dato un numero complesso $w \neq 0$, siano $z_1, z_2, z_3, z_4$ le sue radici quarte. Quale affermazione è vera?

- a) $z_1 + z_2 + z_3 + z_4 = 0$
- b) se $w \in \mathbb{R}$, almeno una delle $z_k$ è reale
- c) le $z_k$ hanno lo stesso modulo di $w$
- d) $z_1 z_2 z_3 z_4 = w$

### Domanda 3

L'insieme $\vert z - 1\vert + \vert z + 1\vert = 2$ è descritto nel piano complesso da:

- a) un'ellisse
- b) un segmento
- c) due punti
- d) l'insieme vuoto

### Domanda 4

Si determini l'insieme ottenuto unendo i domini delle funzioni
$$
f(x) = \arcsin\frac{x - 1}{x + 1}, \qquad g(x) = \sqrt{\log(2 - \vert x\vert)}
$$

- a) $[0, 1]$
- b) $[-1, +\infty)$
- c) $(-1, +\infty)$
- d) $\mathbb{R}$

### Domanda 5

Cosa si può concludere su una successione reale $(a_n)_{n \in \mathbb{N}}$ monotona che ammette una sottosuccessione limitata?

- a) $a_n$ è definitivamente costante
- b) $a_n$ ammette massimo e minimo
- c) $a_n$ tende a $0$
- d) $a_n$ converge

### Domanda 6

Determinare il valore di $\alpha \in \mathbb{R}$ per cui
$$
\lim_{x \to 0} \frac{e^{\alpha x^2} - \cos(2x)}{x \sin x} = 3
$$

- a) $\alpha = \frac52$
- b) $\alpha = 3$
- c) $\alpha = 1$
- d) non esiste tale $\alpha$

### Domanda 7

Sia $f : (0, 1] \to \mathbb{R}$ una funzione continua con $\lim_{x \to 0^+} f(x) = +\infty$. Quale delle seguenti affermazioni è vera?

- a) $f$ ammette massimo
- b) $f$ è strettamente monotona
- c) $f$ ammette minimo
- d) l'equazione $f(x) = 0$ possiede almeno una soluzione

### Domanda 8

Sia $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^3 + x + 1$. La retta tangente al grafico di $f^{-1}$ nel punto di ascissa $3$ ha equazione:

- a) $y = \frac14 x + \frac14$
- b) $y = 4x - 1$
- c) $y = \frac14 x + \frac{11}{4}$
- d) $y = 4x - 11$

### Parte 2 · esercizi

### Esercizio 1 · 8 punti

**(a)** (5 punti) Si determinino tutte le soluzioni complesse dell'equazione
$$
z^5 = -16\,\bar z,
$$
scrivendole in forma algebrica, e si interpreti geometricamente il risultato.

**(b)** (3 punti) Si determinino tutte le soluzioni complesse dell'equazione
$$
z^2 = \vert z\vert^2 - 4\bar z.
$$

### Esercizio 2 · 12 punti

**(a)** (4 punti) Si consideri l'insieme
$$
A := \left\{x \in \mathbb{R} : x = \frac{\left(2 + (-1)^n\right) n}{n + 1},\ n \in \mathbb{N}\right\}.
$$
Determinare l'estremo superiore e l'estremo inferiore di $A$ e dire se $A$ ammette massimo e/o minimo.

**(b)** (4 punti) Determinare, se esistono, i seguenti limiti:
$$
\lim_{n \to \infty} \frac{n!\, 2^n + n^n}{n^n + 3^n}; \qquad \lim_{n \to \infty} \left(\frac{n^2 + 3n}{n^2 + 1}\right)^{2n}; \qquad \lim_{x \to 0^+} \left(\cos\sqrt{x}\right)^{\frac{1}{\sin x}}.
$$

**(c)** (4 punti) Determinare tutti i valori dei parametri $a, b \in \mathbb{R}$ per cui la seguente funzione è derivabile in $x = 0$:
$$
f(x) := \begin{cases} \dfrac{1 - \cos(2x)}{x} + a & \text{se } x > 0 \\[2mm] b \sin x + \cos x & \text{se } x \leq 0 \end{cases}
$$
Scrivere inoltre la retta tangente al grafico di $f$ nel punto di ascissa $0$.

## Correzione

### Parte 1

### Domanda 1

Siano $f : D \to \mathbb{R}$ e $x_0 \in D$. La negazione della proposizione “$f$ è continua in $x_0$" equivale a:

- a) $\exists \varepsilon > 0\ \exists \delta > 0 : \forall x \in D,\ \vert x - x_0\vert < \delta \Rightarrow \vert f(x) - f(x_0)\vert \geq \varepsilon$
- b) $\forall \varepsilon > 0\ \exists \delta > 0\ \exists x \in D : \vert x - x_0\vert \geq \delta$ e $\vert f(x) - f(x_0)\vert \geq \varepsilon$
- c) $\exists \varepsilon > 0 : \forall \delta > 0\ \exists x \in D : \vert x - x_0\vert < \delta$ e $\vert f(x) - f(x_0)\vert \geq \varepsilon$
- d) $\exists \varepsilon > 0 : \forall \delta > 0\ \exists x \in D : \vert x - x_0\vert \geq \delta$ e $\vert f(x) - f(x_0)\vert < \varepsilon$

> [!example]- Soluzione
> **c**. La continuità è $\forall \varepsilon > 0\ \exists \delta > 0 : \forall x \in D,\ \vert x - x_0\vert < \delta \Rightarrow \vert f(x) - f(x_0)\vert < \varepsilon$. Si scambiano i quantificatori nell'ordine dato, e $\text{non}(P \Rightarrow Q)$ è “$P$ e non $Q$".
> - a) lascia l'implicazione e non scambia $\exists \delta$.
> - b) e d) negano anche la premessa $\vert x - x_0\vert < \delta$, che resta com'è.

### Domanda 2

Dato un numero complesso $w \neq 0$, siano $z_1, z_2, z_3, z_4$ le sue radici quarte. Quale affermazione è vera?

- a) $z_1 + z_2 + z_3 + z_4 = 0$
- b) se $w \in \mathbb{R}$, almeno una delle $z_k$ è reale
- c) le $z_k$ hanno lo stesso modulo di $w$
- d) $z_1 z_2 z_3 z_4 = w$

> [!example]- Soluzione
> **a**. Le quattro radici sono i vertici di un quadrato centrato nell'origine: $z$, $iz$, $-z$, $-iz$, e la loro somma è $0$.
> - b) $w = -1$ ha radici quarte $e^{i\pi/4 + ik\pi/2}$, nessuna reale.
> - c) il modulo delle radici è $\sqrt[4]{\vert w\vert}$: con $w = 16$ vale $2$.
> - d) $z \cdot iz \cdot (-z) \cdot (-iz) = i^2 z^4 = -w$: il segno è sbagliato.

### Domanda 3

L'insieme $\vert z - 1\vert + \vert z + 1\vert = 2$ è descritto nel piano complesso da:

- a) un'ellisse
- b) un segmento
- c) due punti
- d) l'insieme vuoto

> [!example]- Soluzione
> **b**. La somma delle distanze da $1$ e da $-1$ vale $2$, che è proprio la distanza fra i due punti. Per la disuguaglianza triangolare $\vert z - 1\vert + \vert z + 1\vert \geq \vert (z + 1) - (z - 1)\vert = 2$, con l'uguaglianza esattamente sul segmento di estremi $-1$ e $1$. L'ellisse è il caso in cui la somma supera la distanza fra i fuochi: per esempio $\vert z - 1\vert + \vert z + i\vert = 2$ della provetta 2023, dove la distanza è $\sqrt2$.

### Domanda 4

Si determini l'insieme ottenuto unendo i domini delle funzioni
$$
f(x) = \arcsin\frac{x - 1}{x + 1}, \qquad g(x) = \sqrt{\log(2 - \vert x\vert)}
$$

- a) $[0, 1]$
- b) $[-1, +\infty)$
- c) $(-1, +\infty)$
- d) $\mathbb{R}$

> [!example]- Soluzione
> **b**. Dominio di $f$: serve $x \neq -1$ e $-1 \leq \frac{x-1}{x+1} \leq 1$. Con $\frac{x-1}{x+1} = 1 - \frac{2}{x+1}$: per $x < -1$ il valore supera $1$; per $x > -1$ è sempre $< 1$, e $\geq -1$ equivale a $x - 1 \geq -x - 1$, cioè $x \geq 0$. Quindi $[0, +\infty)$.
> Dominio di $g$: $\log(2 - \vert x\vert) \geq 0 \iff 2 - \vert x\vert \geq 1 \iff \vert x\vert \leq 1$. Quindi $[-1, 1]$.
> L'unione è $[-1, +\infty)$.
> - a) è l'intersezione, non l'unione.
> - c) toglie $x = -1$, che sta nel dominio di $g$ anche se non in quello di $f$.

### Domanda 5

Cosa si può concludere su una successione reale $(a_n)_{n \in \mathbb{N}}$ monotona che ammette una sottosuccessione limitata?

- a) $a_n$ è definitivamente costante
- b) $a_n$ ammette massimo e minimo
- c) $a_n$ tende a $0$
- d) $a_n$ converge

> [!example]- Soluzione
> **d**. Una successione monotona ha sempre limite, finito o infinito, e ogni sottosuccessione ha lo stesso limite. Una sottosuccessione limitata non può tendere a $\pm\infty$, quindi il limite è finito.
> - a), b) cadono con $a_n = \frac{1}{n+1}$: decrescente, non costante, senza minimo.
> - c) cade con $a_n = 1 + \frac{1}{n+1}$, che tende a $1$.

### Domanda 6

Determinare il valore di $\alpha \in \mathbb{R}$ per cui
$$
\lim_{x \to 0} \frac{e^{\alpha x^2} - \cos(2x)}{x \sin x} = 3
$$

- a) $\alpha = \frac52$
- b) $\alpha = 3$
- c) $\alpha = 1$
- d) non esiste tale $\alpha$

> [!example]- Soluzione
> **c**. Si somma e si toglie $1$ al numeratore e si divide per $x^2$:
> $$
> \frac{e^{\alpha x^2} - \cos(2x)}{x \sin x} = \frac{x}{\sin x}\left(\frac{e^{\alpha x^2} - 1}{x^2} + \frac{1 - \cos(2x)}{x^2}\right)
> $$
> $\frac{e^{\alpha x^2} - 1}{x^2} \to \alpha$, $\frac{1 - \cos(2x)}{x^2} = 4 \cdot \frac{1 - \cos(2x)}{(2x)^2} \to 4 \cdot \frac12 = 2$, $\frac{x}{\sin x} \to 1$. Il limite è $\alpha + 2$, e $\alpha + 2 = 3$ dà $\alpha = 1$.
> - a) usa $\frac{1 - \cos(2x)}{x^2} \to \frac12$, dimenticando il $2x$.

### Domanda 7

Sia $f : (0, 1] \to \mathbb{R}$ una funzione continua con $\lim_{x \to 0^+} f(x) = +\infty$. Quale delle seguenti affermazioni è vera?

- a) $f$ ammette massimo
- b) $f$ è strettamente monotona
- c) $f$ ammette minimo
- d) l'equazione $f(x) = 0$ possiede almeno una soluzione

> [!example]- Soluzione
> **c**. Per il limite esiste $\delta \in (0, 1)$ con $f(x) > f(1)$ su $(0, \delta)$. Su $[\delta, 1]$ la funzione è continua e Weierstrass dà un minimo $m \leq f(1)$. Sul resto $f > f(1) \geq m$, quindi $m$ è il minimo su tutto $(0, 1]$.
> - a) $f$ non è limitata superiormente.
> - b) cade con $f(x) = \frac1x + 8x^2$: la derivata $-\frac{1}{x^2} + 16x$ cambia segno in $(0, 1)$.
> - d) cade con $f(x) = \frac1x$.

### Domanda 8

Sia $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^3 + x + 1$. La retta tangente al grafico di $f^{-1}$ nel punto di ascissa $3$ ha equazione:

- a) $y = \frac14 x + \frac14$
- b) $y = 4x - 1$
- c) $y = \frac14 x + \frac{11}{4}$
- d) $y = 4x - 11$

> [!example]- Soluzione
> **a**. $f$ è strettamente crescente, quindi invertibile. $f(1) = 3$ dà $f^{-1}(3) = 1$. $f'(x) = 3x^2 + 1$, $f'(1) = 4$, e $(f^{-1})'(3) = \frac{1}{f'(1)} = \frac14$. La retta è $y = 1 + \frac14(x - 3) = \frac14 x + \frac14$.
> - b) è la tangente a $f$ in $x = 1$.
> - c) usa il punto $(1, 3)$ di $f$ al posto di $(3, 1)$.
> - d) non inverte la derivata.

### Esercizio 1

> [!example]- Soluzione (a)
> - $z = 0$ è soluzione.
> - Per $z \neq 0$ scrivo $z = \rho e^{i\theta}$: $\bar z = \rho e^{-i\theta}$ e $-16 = 16 e^{i\pi}$. L'equazione diventa $\rho^5 e^{5i\theta} = 16\rho\, e^{i(\pi - \theta)}$.
> - Moduli: $\rho^5 = 16\rho \iff \rho^4 = 16 \iff \rho = 2$.
> - Argomenti: $5\theta = \pi - \theta + 2k\pi \iff \theta = \frac\pi6 + k\frac\pi3$, con $k = 0, \dots, 5$ per gli argomenti distinti.
> - Soluzioni: $\sqrt3 + i$, $2i$, $-\sqrt3 + i$, $-\sqrt3 - i$, $-2i$, $\sqrt3 - i$, più $z = 0$. In tutto $7$.
> - Geometricamente: l'origine e i vertici di un esagono regolare inscritto nella circonferenza $\vert z\vert = 2$.
> - *Controllo*: per $z = 2i$, $z^5 = 32i$ e $-16\bar z = -16(-2i) = 32i$.

> [!example]- Soluzione (b)
> - $z = x + iy$: $z^2 = x^2 - y^2 + 2ixy$, $\vert z\vert^2 = x^2 + y^2$, $-4\bar z = -4x + 4iy$.
> - Parte reale: $x^2 - y^2 = x^2 + y^2 - 4x \iff x = \frac{y^2}{2}$.
> - Parte immaginaria: $2xy = 4y \iff y(x - 2) = 0$.
> - Se $y = 0$: $x = 0$, quindi $z = 0$.
> - Se $x = 2$: $y^2 = 4$, quindi $z = 2 \pm 2i$.
> - *Controllo*: per $z = 2 + 2i$, $z^2 = 8i$ e $\vert z\vert^2 - 4\bar z = 8 - 8 + 8i = 8i$.

### Esercizio 2

> [!example]- Soluzione (a)
> Nel corso $0 \in \mathbb{N}$. Separo pari e dispari:
> - $n$ pari: $x_n = \frac{3n}{n+1} = 3 - \frac{3}{n+1}$, crescente, da $x_0 = 0$ verso $3$.
> - $n$ dispari: $x_n = \frac{n}{n+1} = 1 - \frac{1}{n+1}$, da $x_1 = \frac12$ verso $1$.
>
> **Sup.** Per ogni $n$ vale $x_n < 3$, quindi $3$ è un maggiorante. Fisso $\varepsilon > 0$ e cerco $n$ pari con $3 - \frac{3}{n+1} > 3 - \varepsilon$, cioè $n + 1 > \frac3\varepsilon$. Per Archimede $\exists k \in \mathbb{N} : k > \frac3\varepsilon$; con $n = 2k$, pari, si ha $n + 1 > k > \frac3\varepsilon$. Quindi $\sup A = 3$. Poiché $x_n < 3$ per ogni $n$, $3 \notin A$ e il massimo non esiste.
>
> **Inf.** Per ogni $n$ vale $x_n \geq 0$ e $x_0 = 0 \in A$. Quindi $\min A = \inf A = 0$.

> [!example]- Soluzione (b)
> **Primo limite.** Divido per $n^n$:
> $$
> \frac{n!\, 2^n + n^n}{n^n + 3^n} = \frac{\frac{n!\, 2^n}{n^n} + 1}{1 + \left(\frac3n\right)^n}
> $$
> Per $a_n = \frac{n!\, 2^n}{n^n}$ uso il criterio del rapporto:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)!\, 2^{n+1}}{(n+1)^{n+1}} \cdot \frac{n^n}{n!\, 2^n} = 2\left(\frac{n}{n+1}\right)^n \to \frac2e < 1
> $$
> quindi $a_n \to 0$. Per $n \geq 6$ vale $0 < \left(\frac3n\right)^n \leq \left(\frac12\right)^n$, e per i carabinieri tende a $0$. Il limite è $1$.
>
> **Secondo limite.** Forma $1^\infty$. Con $b_n = \frac{n^2 + 3n}{n^2 + 1} - 1 = \frac{3n - 1}{n^2 + 1} \to 0^+$:
> $$
> \left(1 + b_n\right)^{2n} = \left[\left(1 + b_n\right)^{\frac{1}{b_n}}\right]^{2n\, b_n}
> $$
> La base tende a $e$ e $2n\, b_n = \frac{6n^2 - 2n}{n^2 + 1} \to 6$. Il limite è $e^6$.
>
> **Terzo limite.** Forma $1^\infty$. Scrivo $\left(\cos\sqrt x\right)^{\frac{1}{\sin x}} = e^{\frac{\log(\cos\sqrt x)}{\sin x}}$, e con $t = \cos\sqrt x - 1 \to 0$:
> $$
> \frac{\log(\cos\sqrt x)}{\sin x} = \frac{\log(1 + t)}{t} \cdot \frac{\cos\sqrt x - 1}{x} \cdot \frac{x}{\sin x} \to 1 \cdot \left(-\frac12\right) \cdot 1
> $$
> perché $\frac{\cos\sqrt x - 1}{(\sqrt x)^2} \to -\frac12$. Il limite è $e^{-1/2} = \frac{1}{\sqrt e}$.

> [!example]- Soluzione (c)
> Derivabile implica continua, quindi prima la continuità in $0$. $f(0) = b \sin 0 + \cos 0 = 1$.
> $$
> \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \left(x \cdot \frac{1 - \cos(2x)}{x^2} + a\right) = 0 \cdot 2 + a = a
> $$
> A sinistra $f$ è continua. Quindi serve $a = 1$.
>
> Con $a = 1$, derivata destra:
> $$
> \lim_{x \to 0^+} \frac{f(x) - 1}{x} = \lim_{x \to 0^+} \frac{1 - \cos(2x)}{x^2} = 2
> $$
> Derivata sinistra:
> $$
> \lim_{x \to 0^-} \frac{b \sin x + \cos x - 1}{x} = b \cdot 1 + 0 = b
> $$
> Serve $b = 2$. Per $a = 1$, $b = 2$ si ha $f'(0) = 2$, e la retta tangente è $y = f(0) + f'(0)\, x = 1 + 2x$.

### Griglia dei punti

**Parte 1.** Ogni domanda: $+1{,}5$ giusta, $-0{,}5$ sbagliata, $0$ non data. Risposte: 1 c, 2 a, 3 b, 4 b, 5 d, 6 c, 7 c, 8 a. Soglia: $5$ su $12$.

**Parte 2.** La griglia è una stima fatta per questa simulazione, non quella del prof.

| Esercizio | Punto | Cosa si guarda | Punti |
| --- | --- | --- | --- |
| 1 | a | caso $z = 0$ | 0,5 |
| 1 | a | forma esponenziale con coniugato e $-16$ | 1 |
| 1 | a | $\rho = 2$ | 0,5 |
| 1 | a | i sei argomenti distinti | 1,5 |
| 1 | a | forma algebrica | 1 |
| 1 | a | esagono e origine | 0,5 |
| 1 | b | sistema parte reale e immaginaria | 1,5 |
| 1 | b | i due casi e le tre soluzioni | 1,5 |
| 2 | a | separazione pari e dispari | 1 |
| 2 | a | $\sup A = 3$ con $\varepsilon$, Archimede e $n$ pari | 1,5 |
| 2 | a | niente massimo | 0,5 |
| 2 | a | $\min A = 0$ | 1 |
| 2 | b | primo limite, rapporto e $\frac3n$ | 2 |
| 2 | b | secondo limite | 1 |
| 2 | b | terzo limite | 1 |
| 2 | c | continuità, $a = 1$ | 1,5 |
| 2 | c | derivate destra e sinistra, $b = 2$ | 2 |
| 2 | c | retta tangente | 0,5 |

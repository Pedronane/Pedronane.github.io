---
title: Funzioni elementari (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-21
lezioni: []
ordine: 3
---

Esercizi tipo esame di [Funzioni elementari](/uni/analisi-1/funzioni-elementari/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** Il campo di esistenza di $f(x) = \log(x^2 - 1)$ è:

- a) $(1, +\infty)$
- b) $(-\infty, -1) \cup (1, +\infty)$
- c) $\mathbb{R} \setminus \{-1, 1\}$
- d) $\mathbb{R}$

> [!example]- Soluzione
> **b**. Serve $x^2 - 1 > 0$, cioè $x^2 > 1$, cioè $|x| > 1$ (proprietà del modulo con $>$). La a) dimentica i negativi, la c) impone solo $\neq 0$ come se fosse un denominatore.

**C2.** L'insieme delle soluzioni di $|x - 3| < 2$ è:

- a) $(1, 5)$
- b) $[1, 5]$
- c) $(-\infty, 1) \cup (5, +\infty)$
- d) $(-5, -1)$

> [!example]- Soluzione
> **a**. Sono i punti a distanza minore di $2$ da $3$: $-2 < x - 3 < 2$, cioè $1 < x < 5$. Disuguaglianza stretta, quindi estremi esclusi.

**C3.** $\arcsin\left(\sin\frac{3\pi}{4}\right)$ vale:

- a) $\frac{3\pi}{4}$
- b) $\frac{\pi}{4}$
- c) $-\frac{\pi}{4}$
- d) $\frac{\sqrt2}{2}$

> [!example]- Soluzione
> **b**. $\sin\frac{3\pi}{4} = \frac{\sqrt2}{2}$, e $\arcsin$ restituisce l'angolo in $\left[-\frac\pi2, \frac\pi2\right]$ con quel seno, cioè $\frac\pi4$. La a) è la trappola: $\frac{3\pi}{4}$ sta fuori dall'intervallo della restrizione.

**C4.** Per ogni $x \in \mathbb{R}$, $\sqrt{x^2}$ è uguale a:

- a) $x$
- b) $-x$
- c) $|x|$
- d) $\pm x$

> [!example]- Soluzione
> **c**. La radice quadrata è per definizione $\geq 0$. La a) vale solo per $x \geq 0$, la d) non è una funzione.

**C5.** L'insieme delle soluzioni di $\left(\frac12\right)^x > 8$ è:

- a) $x > 3$
- b) $x > -3$
- c) $x < 3$
- d) $x < -3$

> [!example]- Soluzione
> **d**. $8 = \left(\frac12\right)^{-3}$, quindi $\left(\frac12\right)^x > \left(\frac12\right)^{-3}$. La base $\frac12$ è minore di $1$, l'esponenziale è decrescente e il verso si gira: $x < -3$. La a) è quello che si ottiene scrivendo $8 = 2^3$ e dimenticando che la base è $\frac12$. Controllo: $x = -4$ dà $2^4 = 16 > 8$.

**C6.** Il campo di esistenza di $f(x) = \sqrt{\log_{1/2} x}$ è:

- a) $[1, +\infty)$
- b) $(0, +\infty)$
- c) $(0, 1)$
- d) $(0, 1]$

> [!example]- Soluzione
> **d**. Condizioni: $x > 0$ (logaritmo) e $\log_{1/2} x \geq 0 = \log_{1/2} 1$ (radice). Base $< 1$, verso girato: $x \leq 1$. Intersezione: $(0, 1]$. La a) dimentica di girare il verso, la c) esclude $x = 1$, dove la radice vale $\sqrt 0 = 0$ ed esiste.

**C7.** $\arccos\left(\cos\left(-\frac\pi3\right)\right)$ vale:

- a) $\frac\pi3$
- b) $-\frac\pi3$
- c) $\frac{2\pi}{3}$
- d) $\frac12$

> [!example]- Soluzione
> **a**. Il coseno è pari: $\cos\left(-\frac\pi3\right) = \cos\frac\pi3 = \frac12$. $\arccos\frac12$ è l'angolo in $[0, \pi]$ con coseno $\frac12$, cioè $\frac\pi3$. La b) è la trappola: $-\frac\pi3$ non sta in $[0, \pi]$, l'immagine di $\arccos$.

**C8.** Le soluzioni di $\sin x = -\frac12$ in $[0, 2\pi)$ sono:

- a) $\left\{-\frac\pi6\right\}$
- b) $\left\{\frac{7\pi}{6}\right\}$
- c) $\left\{\frac{7\pi}{6}, \frac{11\pi}{6}\right\}$
- d) $\left\{\frac{4\pi}{3}, \frac{5\pi}{3}\right\}$

> [!example]- Soluzione
> **c**. La retta $y = -\frac12$ taglia la circonferenza in due punti. $\arcsin\left(-\frac12\right) = -\frac\pi6$, che in $[0, 2\pi)$ è $-\frac\pi6 + 2\pi = \frac{11\pi}{6}$; l'altro è $\pi - \left(-\frac\pi6\right) = \frac{7\pi}{6}$. La a) è fuori dall'intervallo richiesto, la b) ne perde uno, la d) sono gli angoli con seno $-\frac{\sqrt3}{2}$.

**C9.** Quale di queste funzioni è pari?

- a) $\sin x$
- b) $\arctan x$
- c) $\sinh x$
- d) $\cosh x$

> [!example]- Soluzione
> **d**. $\cosh(-x) = \frac{e^{-x} + e^{x}}{2} = \cosh x$. Le altre tre sono dispari.

**C10.** L'insieme delle soluzioni di $|x^2 - 4| < 5$ è:

- a) $(-3, 3)$
- b) $(-3, -1) \cup (1, 3)$
- c) $\mathbb{R}$
- d) $(-\infty, -3) \cup (3, +\infty)$

> [!example]- Soluzione
> **a**. Proprietà del modulo con $<$: $-5 < x^2 - 4 < 5$, cioè $-1 < x^2$ e $x^2 < 9$. La prima è vera per ogni $x$, la seconda dà $-3 < x < 3$. La b) nasce dallo scrivere $x^2 > 1$ al posto di $x^2 > -1$. Controllo: $x = 0$ dà $|-4| = 4 < 5$, vero.

**C11.** L'immagine di $\arctan$ è:

- a) $\left[-\frac\pi2, \frac\pi2\right]$
- b) $\left(-\frac\pi2, \frac\pi2\right)$
- c) $\mathbb{R}$
- d) $(0, \pi)$

> [!example]- Soluzione
> **b**. È il dominio della restrizione della tangente, che esclude $\pm\frac\pi2$ (lì la tangente non è definita). Gli estremi sono gli asintoti orizzontali, mai raggiunti. La a) è l'immagine di $\arcsin$, la c) è il dominio di $\arctan$.

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo (tabella "Come riconosco il tipo di esercizio").

**Esercizio 1.** Risolvere $|2x - 1| \geq 3$.

> [!example]- Soluzione
> **Come si riconosce**: un solo modulo contro una costante positiva. **Metodo**: proprietà della slide 68 con $\geq$, due semirette.
>
> 1. $|2x - 1| \geq 3 \iff 2x - 1 \leq -3$ oppure $2x - 1 \geq 3$ (proprietà con $c = 3$).
> 2. Prima: $2x \leq -2$, cioè $x \leq -1$.
> 3. Seconda: $2x \geq 4$, cioè $x \geq 2$.
> 4. Soluzione: $(-\infty, -1] \cup [2, +\infty)$.
>
> **Controllo**: $x = 0$ dà $|-1| = 1 \geq 3$, falso, e $0$ non sta nella soluzione; $x = 2$ dà $|3| = 3 \geq 3$, vero. A parole: $|2x - 1| = 2\left|x - \frac12\right|$, i punti a distanza almeno $\frac32$ da $\frac12$.

**Esercizio 2.** Risolvere $|3x + 1| \leq x + 5$.

> [!example]- Soluzione
> **Come si riconosce**: un modulo contro un'espressione in $x$. **Metodo**: caso 2, si spezza secondo il segno dell'argomento.
>
> L'argomento $3x + 1$ si annulla in $x = -\frac13$.
>
> **Caso $x \geq -\frac13$** (modulo $= 3x + 1$):
> 1. $3x + 1 \leq x + 5$;
> 2. $2x \leq 4$, cioè $x \leq 2$;
> 3. con $x \geq -\frac13$: $\left[-\frac13, 2\right]$.
>
> **Caso $x < -\frac13$** (modulo $= -3x - 1$):
> 1. $-3x - 1 \leq x + 5$;
> 2. $-6 \leq 4x$ (porto le $x$ a destra), cioè $x \geq -\frac32$;
> 3. con $x < -\frac13$: $\left[-\frac32, -\frac13\right)$.
>
> **Unione**: $\left[-\frac32, 2\right]$.
>
> **Controllo**: $x = -\frac32$ dà $\left|-\frac72\right| = \frac72 \leq \frac72$, uguaglianza; $x = 3$ dà $10 \leq 8$, falso.

**Esercizio 3.** Risolvere $|x - 1| + |x + 2| < 5$.

> [!example]- Soluzione
> **Come si riconosce**: due moduli. **Metodo**: zeri, tabella, un sistema per zona.
>
> Zeri: $x = 1$ e $x = -2$.
> ```
>                  -2              1
>   x - 1     -----|---------------|+++++
>   x + 2     -----|+++++++++++++++|+++++
>               I         II          III
> ```
> **Zona I, $x < -2$**: $-(x - 1) - (x + 2) < 5$, cioè $-2x - 1 < 5$, cioè $-2x < 6$, cioè $x > -3$ (divido per $-2$, il verso si gira). Con $x < -2$: $(-3, -2)$.
>
> **Zona II, $-2 \leq x < 1$**: $-(x - 1) + (x + 2) < 5$, cioè $3 < 5$, sempre vero. Resta tutta la zona: $[-2, 1)$.
>
> **Zona III, $x \geq 1$**: $(x - 1) + (x + 2) < 5$, cioè $2x + 1 < 5$, cioè $x < 2$. Con $x \geq 1$: $[1, 2)$.
>
> **Unione**: $(-3, 2)$.
>
> **Controllo** con le distanze: $|x - 1| + |x + 2|$ è la somma delle distanze da $1$ e da $-2$. Fra $-2$ e $1$ vale sempre $3$ (la distanza fra i due punti), fuori cresce di $2$ per ogni unità di allontanamento: arriva a $5$ a distanza $1$ dagli estremi, cioè in $-3$ e in $2$.

**Esercizio 4.** Risolvere $\sqrt{x + 3} > x + 1$.

> [!example]- Soluzione
> **Come si riconosce**: radice quadrata maggiore di un'espressione di segno variabile. **Metodo**: due sistemi, secondo il segno di $x + 1$.
>
> **Sistema 1, $x + 1 < 0$**: la radice è $\geq 0 > x + 1$, basta che esista.
> $$
> \begin{cases} x + 1 < 0 \\ x + 3 \geq 0 \end{cases} \iff \begin{cases} x < -1 \\ x \geq -3 \end{cases} \iff -3 \leq x < -1
> $$
> **Sistema 2, $x + 1 \geq 0$**: entrambi i membri $\geq 0$, si può quadrare.
> 1. $x + 3 > (x + 1)^2 = x^2 + 2x + 1$;
> 2. $0 > x^2 + x - 2 = (x + 2)(x - 1)$;
> 3. il prodotto è negativo fra le radici: $-2 < x < 1$;
> 4. con $x \geq -1$: $-1 \leq x < 1$.
>
> **Unione**: $[-3, -1) \cup [-1, 1) = [-3, 1)$.
>
> **Controllo**: $x = 1$ dà $2 > 2$, falso; $x = 0$ dà $\sqrt3 > 1$, vero; $x = -3$ dà $0 > -2$, vero. Figura: [Disequazioni con le radici](/uni/analisi-1/funzioni-elementari/#disequazioni-con-le-radici).

**Esercizio 5.** Risolvere $\sqrt{x^2 - 4} < x - 1$.

> [!example]- Soluzione
> **Come si riconosce**: radice minore di un'espressione. **Metodo**: un solo sistema (esistenza, secondo membro positivo, quadrato).
> $$
> \begin{cases} x^2 - 4 \geq 0 \\ x - 1 > 0 \\ x^2 - 4 < (x - 1)^2 \end{cases}
> $$
> 1. Prima riga: $x^2 \geq 4$, cioè $|x| \geq 2$, cioè $x \leq -2$ oppure $x \geq 2$.
> 2. Seconda riga: $x > 1$.
> 3. Terza riga: $x^2 - 4 < x^2 - 2x + 1$, cioè $2x < 5$, cioè $x < \frac52$.
> 4. Intersezione: delle due semirette della riga 1 con $x > 1$ resta $x \geq 2$; con $x < \frac52$: $\left[2, \frac52\right)$.
>
> **Controllo**: $x = 2$ dà $0 < 1$, vero; $x = \frac52$ dà $\sqrt{\frac94} = \frac32 < \frac32$, falso; $x = -3$ dà $\sqrt5 < -4$, falso, coerente con la riga 2.

**Esercizio 6.** Risolvere $|x^2 - 3x| \leq 2x$.

> [!example]- Soluzione
> **Come si riconosce**: modulo di un polinomio contro un'espressione. **Metodo**: caso 2, segno dell'argomento.
>
> L'argomento $x^2 - 3x = x(x - 3)$ è $\geq 0$ per $x \leq 0$ o $x \geq 3$, negativo per $0 < x < 3$.
>
> **Caso $x \leq 0$ oppure $x \geq 3$**:
> 1. $x^2 - 3x \leq 2x$;
> 2. $x^2 - 5x \leq 0$, cioè $x(x - 5) \leq 0$, cioè $0 \leq x \leq 5$;
> 3. intersezione: da $x \leq 0$ resta solo $x = 0$, da $x \geq 3$ resta $[3, 5]$.
>
> **Caso $0 < x < 3$**:
> 1. $-(x^2 - 3x) \leq 2x$;
> 2. $-x^2 + x \leq 0$, cioè $x^2 - x \geq 0$ (moltiplico per $-1$ e giro il verso), cioè $x(x - 1) \geq 0$, cioè $x \leq 0$ oppure $x \geq 1$;
> 3. intersezione con $0 < x < 3$: $[1, 3)$.
>
> **Unione**: $\{0\} \cup [1, 5]$.
>
> **Controllo**: il primo membro è $\geq 0$, quindi serve $2x \geq 0$: niente soluzioni negative, coerente. $x = \frac12$ dà $\left|\frac14 - \frac32\right| = \frac54 \leq 1$, falso; $x = 5$ dà $10 \leq 10$, vero. Il punto isolato $0$ è facile da perdere: lì $0 \leq 0$.

**Esercizio 7.** Risolvere $\left(\frac13\right)^{x^2 - 1} \geq \left(\frac13\right)^{x + 1}$.

> [!example]- Soluzione
> **Come si riconosce**: due potenze della stessa base. **Metodo**: si toglie la base con la monotonia; base $\frac13 < 1$, verso girato.
>
> 1. $\left(\frac13\right)^t$ è strettamente decrescente, quindi la disuguaglianza fra le potenze equivale a quella fra gli esponenti col verso girato: $x^2 - 1 \leq x + 1$.
> 2. $x^2 - x - 2 \leq 0$, cioè $(x - 2)(x + 1) \leq 0$.
> 3. Fra le radici, estremi compresi: $[-1, 2]$.
>
> **Controllo**: $x = 0$ dà $3 \geq \frac13$, vero; $x = 3$ dà $\left(\frac13\right)^8 \geq \left(\frac13\right)^4$, falso. Chi non gira il verso trova $(-\infty, -1] \cup [2, +\infty)$, il complementare (a parte gli estremi).

**Esercizio 8.** Risolvere $4^x - 3 \cdot 2^{x+1} + 8 \leq 0$.

> [!example]- Soluzione
> **Come si riconosce**: $2^x$ dentro un polinomio. **Metodo**: sostituzione $t = 2^x > 0$.
>
> 1. $4^x = (2^2)^x = (2^x)^2 = t^2$ e $2^{x+1} = 2 \cdot 2^x = 2t$ (proprietà delle potenze).
> 2. La disequazione diventa $t^2 - 6t + 8 \leq 0$, cioè $(t - 2)(t - 4) \leq 0$, cioè $2 \leq t \leq 4$. Tutti positivi, compatibili con $t > 0$.
> 3. Torno a $x$: $2^1 \leq 2^x \leq 2^2$, e $2^t$ è crescente: $1 \leq x \leq 2$.
>
> **Controllo**: $x = 1$ dà $4 - 12 + 8 = 0$, vero; $x = 0$ dà $1 - 6 + 8 = 3 \leq 0$, falso.

**Esercizio 9.** Risolvere $\log_2(x - 1) + \log_2(x + 1) < 3$.

> [!example]- Soluzione
> **Come si riconosce**: somma di logaritmi contro un numero. **Metodo**: condizioni prima, poi un logaritmo solo, poi monotonia.
>
> 1. **Condizioni**: $x - 1 > 0$ e $x + 1 > 0$, cioè $x > 1$.
> 2. **Proprietà del prodotto** (lecita: per $x > 1$ esistono entrambi): $\log_2\big((x-1)(x+1)\big) < 3$.
> 3. **Il numero come logaritmo**: $3 = \log_2 8$.
> 4. **Monotonia**, base $2 > 1$, verso uguale: $x^2 - 1 < 8$, cioè $x^2 < 9$, cioè $-3 < x < 3$.
> 5. **Intersezione** con $x > 1$: $(1, 3)$.
>
> **Controllo**: $x = 2$ dà $\log_2 1 + \log_2 3 = \log_2 3 < 3$, vero; $x = 3$ dà $\log_2 2 + \log_2 4 = 3 < 3$, falso. Senza il punto 1 si terrebbe anche $(-3, -1)$, dove $\log_2(x - 1)$ non esiste.

**Esercizio 10.** Risolvere $\log_{1/2}(x^2 - 3x) \geq -2$.

> [!example]- Soluzione
> **Come si riconosce**: logaritmo con base minore di $1$ contro un numero. **Metodo**: condizioni, numero come logaritmo, verso girato.
>
> 1. **Condizioni**: $x^2 - 3x > 0$, cioè $x(x - 3) > 0$, cioè $x < 0$ oppure $x > 3$.
> 2. $-2 = \log_{1/2} 4$, perché $\left(\frac12\right)^{-2} = 4$.
> 3. $\log_{1/2}(x^2 - 3x) \geq \log_{1/2} 4$; base $\frac12 < 1$, il logaritmo è decrescente, **verso girato**: $x^2 - 3x \leq 4$.
> 4. $x^2 - 3x - 4 \leq 0$, cioè $(x - 4)(x + 1) \leq 0$, cioè $-1 \leq x \leq 4$.
> 5. **Intersezione** con il punto 1: $[-1, 0) \cup (3, 4]$.
>
> **Controllo**: $x = -1$ dà $\log_{1/2} 4 = -2 \geq -2$, vero; $x = 5$ dà $\log_{1/2} 10 < \log_{1/2} 4 = -2$, falso.

**Esercizio 11.** Risolvere $|\log_2 x| < 1$.

> [!example]- Soluzione
> **Come si riconosce**: modulo contro costante, con un logaritmo dentro. **Metodo**: condizioni, proprietà del modulo, poi monotonia.
>
> 1. Condizione: $x > 0$.
> 2. Proprietà con $<$: $-1 < \log_2 x < 1$.
> 3. Applico $2^t$, crescente, a tutti e tre i membri: $2^{-1} < x < 2^1$, cioè $\frac12 < x < 2$.
> 4. Già dentro $x > 0$: soluzione $\left(\frac12, 2\right)$.
>
> **Controllo**: $x = 1$ dà $0 < 1$; $x = 4$ dà $2 < 1$, falso; $x = \frac14$ dà $|-2| = 2 < 1$, falso.

**Esercizio 12.** Risolvere $\log^2 x - \log x - 2 > 0$ (logaritmo naturale; $\log^2 x$ vuol dire $(\log x)^2$).

> [!example]- Soluzione
> **Come si riconosce**: $\log x$ dentro un polinomio. **Metodo**: condizione, sostituzione $t = \log x$, poi monotonia.
>
> 1. Condizione: $x > 0$.
> 2. Con $t = \log x$: $t^2 - t - 2 > 0$, cioè $(t - 2)(t + 1) > 0$, cioè $t < -1$ oppure $t > 2$. Qui $t$ può essere qualunque reale (l'immagine del logaritmo è $\mathbb{R}$).
> 3. $\log x < -1 = \log e^{-1}$, base $e > 1$: $x < \frac1e$.
> 4. $\log x > 2 = \log e^2$: $x > e^2$.
> 5. Con $x > 0$: $\left(0, \frac1e\right) \cup (e^2, +\infty)$.
>
> **Controllo**: $x = 1$ dà $0 - 0 - 2 > 0$, falso; $x = e^3$ dà $9 - 3 - 2 = 4 > 0$, vero.

**Esercizio 13** (foglio 0, es. 7). Determinare $F = \left\{x \in \mathbb{R} : \dfrac{|x| - 1}{x^2 + 2x - 3} \geq 0\right\}$.

> [!example]- Soluzione
> **Come si riconosce**: disequazione fratta con un modulo al numeratore. **Metodo**: segno del numeratore (proprietà del modulo), segno del denominatore, tabella.
>
> **Denominatore.** $x^2 + 2x - 3 = (x + 3)(x - 1)$: si annulla in $-3$ e $1$, che vanno esclusi; positivo per $x < -3$ o $x > 1$.
>
> **Numeratore.** $|x| - 1 \geq 0 \iff |x| \geq 1 \iff x \leq -1$ oppure $x \geq 1$; si annulla in $\pm 1$.
>
> **Segno.**
> ```
>                  -3       -1        1
>   |x| - 1    +    |   +    0   -    0   +
>   (x+3)(x-1) +    0   -    |   -    0   +
>   frazione   +    ||  -    0   +    ||  +
> ```
> In $x = 1$ si annullano entrambi, ma il denominatore nullo esclude il punto. Risultato:
> $$
> F = (-\infty, -3) \cup [-1, 1) \cup (1, +\infty)
> $$
> $F$ non è limitato né sopra né sotto: $\sup F = +\infty$, $\inf F = -\infty$.
>
> **Controllo**: $x = 0$ dà $\frac{-1}{-3} > 0$, vero; $x = -2$ dà $\frac{1}{-3} < 0$, falso.

**Esercizio 14** (foglio 1, es. 1 ix). Studiare $A = \{|x| : x^2 < -2x + 3\}$: sup, inf, max, min.

> [!example]- Soluzione
> **Come si riconosce**: insieme immagine di $|x|$ su un insieme dato da una disequazione. **Metodo**: prima le $x$, poi i valori di $|x|$ letti dal grafico del modulo.
>
> **Chi sono le $x$.** $x^2 + 2x - 3 < 0 \iff (x + 3)(x - 1) < 0 \iff -3 < x < 1$.
>
> **Chi sono gli elementi di $A$.** Gli elementi non sono le $x$ ma i loro moduli. Per $x \in (-3, 0]$, $|x| = -x$ percorre $[0, 3)$; per $x \in [0, 1)$, $|x|$ percorre $[0, 1)$. Unendo: $A = [0, 3)$.
>
> **Risposta.** $\min A = \inf A = 0$ (preso con $x = 0$); $\sup A = 3$, che non è un massimo perché servirebbe $x = -3$, escluso.

**Esercizio 15.** Determinare il campo di esistenza di $f(x) = \dfrac{\sqrt{2 - |x|}}{\log(x + 1)}$.

> [!example]- Soluzione
> **Come si riconosce**: campo di esistenza con radice, logaritmo e denominatore. **Metodo**: una condizione per pezzo, poi intersezione.
>
> | pezzo | condizione | soluzione |
> | --- | --- | --- |
> | $\sqrt{2 - \vert x\vert}$ | $2 - \vert x\vert \geq 0$ | $\vert x\vert \leq 2$, cioè $[-2, 2]$ |
> | $\log(x + 1)$ | $x + 1 > 0$ | $x > -1$ |
> | denominatore | $\log(x + 1) \neq 0$ | $x + 1 \neq 1$, cioè $x \neq 0$ |
>
> Intersezione: $(-1, 0) \cup (0, 2]$.
>
> **Controllo**: $x = 2$ dà $\frac{0}{\log 3} = 0$, esiste; $x = -1$ non va, $\log 0$ non esiste; $x = 0$ dà $\frac{\sqrt2}{0}$.

**Esercizio 16.** Determinare il campo di esistenza di $f(x) = \arcsin\dfrac{x + 1}{x - 2}$.

> [!example]- Soluzione
> **Come si riconosce**: arcoseno di una frazione. **Metodo**: denominatore $\neq 0$ e argomento in $[-1, 1]$, cioè due disequazioni fratte a sistema.
>
> **Condizioni**: $x \neq 2$ e $-1 \leq \frac{x+1}{x-2} \leq 1$.
>
> **Destra**, $\frac{x+1}{x-2} \leq 1$:
> 1. porto tutto a sinistra: $\frac{x+1}{x-2} - 1 \leq 0$;
> 2. denominatore comune: $\frac{x + 1 - (x - 2)}{x - 2} = \frac{3}{x - 2} \leq 0$;
> 3. il numeratore è positivo, serve $x - 2 < 0$: $x < 2$.
>
> **Sinistra**, $\frac{x+1}{x-2} \geq -1$:
> 1. $\frac{x+1}{x-2} + 1 \geq 0$;
> 2. $\frac{x + 1 + x - 2}{x - 2} = \frac{2x - 1}{x - 2} \geq 0$;
> 3. studio del segno: numeratore $\geq 0$ per $x \geq \frac12$, denominatore $> 0$ per $x > 2$; la frazione è $\geq 0$ per $x \leq \frac12$ oppure $x > 2$.
>
> **Intersezione**: $x < 2$ con ($x \leq \frac12$ oppure $x > 2$) dà $x \leq \frac12$. Campo di esistenza $\left(-\infty, \frac12\right]$.
>
> **Controllo**: $x = \frac12$ dà $\frac{3/2}{-3/2} = -1$, e $\arcsin(-1) = -\frac\pi2$ esiste; $x = 1$ dà $\frac{2}{-1} = -2$, fuori da $[-1, 1]$.

**Esercizio 17** (esercizi svolti del docente, es. 5 i). Determinare il campo di esistenza di $f(x) = \sqrt{\dfrac1x + \dfrac{1}{x - 1} + \dfrac{1}{x - 2}}$.

> [!example]- Soluzione
> **Come si riconosce**: radice pari di una somma di frazioni. **Metodo**: denominatori non nulli, radicando $\geq 0$ con lo studio del segno.
>
> **Condizioni.** Denominatori non nulli ($x \neq 0, 1, 2$) e radicando $\geq 0$.
>
> **Radicando a denominatore comune.**
> $$
> \frac1x + \frac{1}{x-1} + \frac{1}{x-2} = \frac{(x-1)(x-2) + x(x-2) + x(x-1)}{x(x-1)(x-2)} = \frac{3x^2 - 6x + 2}{x(x-1)(x-2)}
> $$
> Il numeratore si annulla in $x = \frac{6 \pm \sqrt{36 - 24}}{6} = 1 \pm \frac{1}{\sqrt3}$, cioè $x_1 \approx 0{,}42$ e $x_2 \approx 1{,}58$, ed è positivo fuori dalle radici.
>
> **Studio del segno** (punti in ordine: $0$, $x_1$, $1$, $x_2$, $2$):
> ```
>                     0      x1      1      x2      2
>   3x²-6x+2     +    |   +   0   -   |   -   0  +   |   +
>   x            -    0   +   |   +   |   +   |  +   |   +
>   x-1          -    |   -   |   -   0   +   |  +   |   +
>   x-2          -    |   -   |   -   |   -   |  -   0   +
>   frazione     -    ||  +   0   -   ||  +   0  -   ||  +
> ```
> Frazione $\geq 0$ con gli zeri del denominatore esclusi:
> $$
> \mathrm{C.E.} = \left(0,\ 1 - \tfrac{1}{\sqrt3}\right] \cup \left(1,\ 1 + \tfrac{1}{\sqrt3}\right] \cup (2, +\infty)
> $$
>
> **Controllo**: $x = 3$ dà $\frac13 + \frac12 + 1 > 0$; $x = -1$ dà $-1 - \frac12 - \frac13 < 0$, escluso.

**Esercizio 18** (esercizi svolti del docente, es. 5 ii). Determinare il campo di esistenza di $f(x) = \log\left(\left|\dfrac{x-1}{x-3}\right| - 1\right)$.

> [!example]- Soluzione
> **Come si riconosce**: logaritmo di un modulo meno una costante. **Metodo**: argomento $> 0$ diventa "modulo maggiore di costante"; oppure modulo contro modulo.
>
> **Condizioni.** $x \neq 3$ e argomento del logaritmo positivo: $\left|\frac{x-1}{x-3}\right| > 1$.
>
> **Si toglie il modulo con le proprietà** ($|t| > 1 \iff t > 1$ oppure $t < -1$):
> $$
> \frac{x-1}{x-3} > 1 \iff \frac{x - 1 - (x - 3)}{x - 3} > 0 \iff \frac{2}{x-3} > 0 \iff x > 3
> $$
> $$
> \frac{x-1}{x-3} < -1 \iff \frac{x - 1 + x - 3}{x-3} < 0 \iff \frac{2x - 4}{x - 3} < 0 \iff 2 < x < 3
> $$
> Unendo: $\mathrm{C.E.} = (2, 3) \cup (3, +\infty)$.
>
> **Seconda via** (quella del docente). Per $x \neq 3$, $\left|\frac{x-1}{x-3}\right| = \frac{|x-1|}{|x-3|}$ e $|x - 3| > 0$, quindi moltiplicando: $|x - 1| > |x - 3|$. Due numeri $\geq 0$: si può quadrare. $(x-1)^2 > (x-3)^2 \iff -2x + 1 > -6x + 9 \iff x > 2$. Con $x \neq 3$: stesso risultato. A parole: $x$ è più lontano da $1$ che da $3$.

**Esercizio 19** (esercizi svolti del docente, es. 5 iii, solo risultato nel PDF). Determinare il campo di esistenza di $f(x) = \dfrac{2^{x+7}}{\sqrt[4]{\sqrt{2x - x^2} - x}}$.

> [!example]- Soluzione
> **Come si riconosce**: radici annidate al denominatore, esponenziale al numeratore. **Metodo**: una condizione per pezzo; la disequazione con la radice col metodo dei due sistemi.
>
> 1. $2^{x+7}$: nessuna condizione.
> 2. $\sqrt{2x - x^2}$: $2x - x^2 \geq 0$, cioè $x(2 - x) \geq 0$, cioè $0 \leq x \leq 2$.
> 3. Radice quarta **al denominatore**: radicando $\geq 0$ per la radice e $\neq 0$ per la frazione, quindi $\sqrt{2x - x^2} - x > 0$, cioè $\sqrt{2x - x^2} > x$.
> 4. Radice contro $x$. Per il punto 2 si ha già $x \geq 0$, quindi resta solo il sistema “$B \geq 0$": si quadra. $2x - x^2 > x^2$, cioè $2x^2 - 2x < 0$, cioè $2x(x - 1) < 0$, cioè $0 < x < 1$.
> 5. Intersezione con $[0, 2]$: $(0, 1)$.
>
> Risultato del docente: $(0, 1)$. **Controllo**: $x = \frac12$ dà $\sqrt{\frac34} - \frac12 \approx 0{,}37 > 0$; $x = 0$ dà $\sqrt0 - 0 = 0$, denominatore nullo.

**Esercizio 20** (esercizi svolti del docente, es. 5 iv, solo risultato). Determinare il campo di esistenza di $f(x) = \log\left(\sqrt[3]{x^3 + 2} - x + 1\right)$.

> [!example]- Soluzione
> **Come si riconosce**: logaritmo con dentro una radice cubica. **Metodo**: la radice cubica non dà condizioni; l'argomento del logaritmo $> 0$ si risolve elevando al cubo.
>
> 1. $\sqrt[3]{x^3 + 2}$: nessuna condizione (indice dispari).
> 2. Logaritmo: $\sqrt[3]{x^3 + 2} > x - 1$.
> 3. $t \mapsto t^3$ è strettamente crescente su **tutto** $\mathbb{R}$, quindi si eleva al cubo senza casi e senza cambiare verso: $x^3 + 2 > (x - 1)^3$.
> 4. Sviluppo il cubo: $(x - 1)^3 = x^3 - 3x^2 + 3x - 1$.
> 5. $x^3 + 2 > x^3 - 3x^2 + 3x - 1 \iff 3x^2 - 3x + 3 > 0 \iff x^2 - x + 1 > 0$.
> 6. $\Delta = 1 - 4 = -3 < 0$: la parabola non tocca l'asse e ha la concavità verso l'alto, positiva sempre.
>
> Campo di esistenza: $\mathbb{R}$, come nel PDF. **Controllo**: $x = 0$ dà $\log(\sqrt[3]2 + 1)$, esiste. Qui la differenza con la radice quadrata è tutta: col cubo non si separano casi.

**Esercizio 21** (esercizi svolti del docente, es. 5 v, solo risultato). Determinare il campo di esistenza di $f(x) = \dfrac{1 - |x| + 2^{-x}}{\sqrt{4^x - 3 \cdot 2^x + 2}}$.

> [!example]- Soluzione
> **Come si riconosce**: radice al denominatore con dentro un polinomio in $2^x$. **Metodo**: radicando $> 0$, sostituzione $t = 2^x$.
>
> 1. Numeratore: modulo ed esponenziale, nessuna condizione.
> 2. Radice al denominatore: $4^x - 3 \cdot 2^x + 2 > 0$.
> 3. $t = 2^x > 0$, $4^x = t^2$: $t^2 - 3t + 2 > 0$, cioè $(t - 1)(t - 2) > 0$, cioè $t < 1$ oppure $t > 2$.
> 4. $2^x < 1 = 2^0 \iff x < 0$; $2^x > 2 = 2^1 \iff x > 1$ (base $2 > 1$, verso uguale).
>
> Campo di esistenza: $(-\infty, 0) \cup (1, +\infty)$, come nel PDF. **Controllo**: $x = \frac12$ dà $2 - 3\sqrt2 + 2 \approx -0{,}24 < 0$, escluso.

**Esercizio 22** (esercizi svolti del docente, es. 5 vi, solo risultato). Determinare il campo di esistenza di $f(x) = \sqrt{\log(x^2 - 4x + 3) - \log(x - 2) - \log(x + 1)}$.

> [!example]- Soluzione
> **Come si riconosce**: radice di una somma di logaritmi. **Metodo**: prima le condizioni dei tre logaritmi, poi il radicando $\geq 0$ con le proprietà (lecite solo dopo).
>
> 1. $x^2 - 4x + 3 > 0$: $(x - 1)(x - 3) > 0$, cioè $x < 1$ oppure $x > 3$.
> 2. $x - 2 > 0$: $x > 2$.
> 3. $x + 1 > 0$: $x > -1$.
> 4. Intersezione delle tre: $x > 3$.
> 5. Radicando $\geq 0$: $\log(x^2 - 4x + 3) \geq \log(x - 2) + \log(x + 1) = \log\big((x-2)(x+1)\big)$, proprietà lecita perché per $x > 3$ esistono tutti.
> 6. Logaritmo crescente: $x^2 - 4x + 3 \geq x^2 - x - 2$, cioè $-3x \geq -5$, cioè $x \leq \frac53$ (divido per $-3$, verso girato).
> 7. Con $x > 3$: nessuna $x$.
>
> Campo di esistenza: $\emptyset$, come nel PDF. **Controllo**: $x = 4$ dà $\log 3 - \log 2 - \log 5 = \log\frac{3}{10} < 0$.

**Esercizio 23.** Risolvere:

- a) $2\sin^2 x - \sin x - 1 = 0$;
- b) $\cos(2x) = \frac12$;
- c) $\tan x = -\sqrt3$.

Dare tutte le soluzioni reali e quelle in $[0, 2\pi)$.

> [!example]- Soluzione
> **Come si riconosce**: equazioni goniometriche elementari, la a) dopo una sostituzione. **Metodo**: ricondursi a $\sin = a$, $\cos = a$, $\tan = a$ e leggere sulla circonferenza.
>
> **a)** Con $t = \sin x$: $2t^2 - t - 1 = 0$, $t = \frac{1 \pm \sqrt{1 + 8}}{4} = \frac{1 \pm 3}{4}$, cioè $t = 1$ o $t = -\frac12$. Tutti e due in $[-1, 1]$, accettabili.
> - $\sin x = 1$: $x = \frac\pi2 + 2k\pi$.
> - $\sin x = -\frac12$: $\arcsin\left(-\frac12\right) = -\frac\pi6$ e l'altro punto è $\pi - \left(-\frac\pi6\right) = \frac{7\pi}{6}$: $x = -\frac\pi6 + 2k\pi$ oppure $x = \frac{7\pi}{6} + 2k\pi$.
> - In $[0, 2\pi)$: $\frac\pi2$, $\frac{7\pi}{6}$, $\frac{11\pi}{6}$.
>
> **b)** Pongo $y = 2x$: $\cos y = \frac12$, quindi $y = \pm\frac\pi3 + 2k\pi$. Divido per $2$: $x = \pm\frac\pi6 + k\pi$ (anche il periodo si dimezza). In $[0, 2\pi)$: $\frac\pi6$, $\frac{5\pi}{6}$, $\frac{7\pi}{6}$, $\frac{11\pi}{6}$.
>
> **c)** $\arctan(-\sqrt3) = -\frac\pi3$, e la tangente ha periodo $\pi$: $x = -\frac\pi3 + k\pi$. In $[0, 2\pi)$: $\frac{2\pi}{3}$ e $\frac{5\pi}{3}$.
>
> **Controllo**: a) $x = \frac{7\pi}{6}$ dà $2 \cdot \frac14 + \frac12 - 1 = 0$; b) $x = \frac{5\pi}{6}$ dà $\cos\frac{5\pi}{3} = \frac12$; c) $\tan\frac{2\pi}{3} = -\sqrt3$ (esempio 3 delle trigonometriche).

**Esercizio 24.** Determinare il campo di esistenza di:

- a) $f(x) = \log(1 - 2\sin x)$, per $x \in [0, 2\pi]$;
- b) $g(x) = \sqrt{\arctan x - \frac\pi4}$.

> [!example]- Soluzione
> **Come si riconosce**: campi di esistenza con funzioni trigonometriche e inverse. **Metodo**: la condizione diventa una disequazione goniometrica, o si toglie l'arcotangente con la monotonia.
>
> **a)** Serve $1 - 2\sin x > 0$, cioè $\sin x < \frac12$. Sulla circonferenza sono i punti **sotto** la retta $y = \frac12$, che la taglia in $\frac\pi6$ e $\frac{5\pi}{6}$. In $[0, 2\pi]$: $\left[0, \frac\pi6\right) \cup \left(\frac{5\pi}{6}, 2\pi\right]$. Controllo: $x = \frac\pi2$ dà $1 - 2 < 0$, escluso; $x = \pi$ dà $1 > 0$, incluso.
>
> **b)** Serve $\arctan x \geq \frac\pi4 = \arctan 1$. L'arcotangente è strettamente crescente, verso uguale: $x \geq 1$. Campo di esistenza $[1, +\infty)$. Controllo: $x = 0$ dà $\sqrt{-\frac\pi4}$, non esiste.

**Esercizio 25** (livello 30, sul modello dell'inversa di $\sinh$). Mostrare che $\cosh$ ristretto a $[0, +\infty)$ è invertibile su $[1, +\infty)$ e trovare l'inversa.

> [!example]- Soluzione
> **Come si riconosce**: inversa di una funzione costruita con $e^x$, ma pari: serve una restrizione. **Metodo**: lo stesso dell'esempio di $\sinh$, con un passo in più per scegliere la radice giusta.
>
> **Perché la restrizione.** $\cosh$ è pari, quindi non iniettivo su $\mathbb{R}$. Su $[0, +\infty)$ è strettamente crescente (dal grafico) con immagine $[1, +\infty)$: lì è biiettivo.
>
> **Si risolve $y = \cosh x$ con $x \geq 0$, $y \geq 1$.**
> 1. $2y = e^x + e^{-x}$.
> 2. Moltiplico per $e^x > 0$: $2y e^x = e^{2x} + 1$.
> 3. $t = e^x$: $t^2 - 2yt + 1 = 0$.
> 4. $t = y \pm \sqrt{y^2 - 1}$, reali perché $y \geq 1$.
> 5. **Scelta del segno.** Qui tutte e due sono positive (il prodotto delle radici è $1 > 0$), quindi il segno di $e^x$ non basta: serve la restrizione. $x \geq 0$ vuol dire $e^x \geq 1$. Moltiplicando per il coniugato, $y - \sqrt{y^2 - 1} = \frac{1}{y + \sqrt{y^2 - 1}}$, e siccome $y + \sqrt{y^2 - 1} \geq 1$ questa radice è $\leq 1$ (uguale a $1$ solo per $y = 1$, dove le due coincidono). Si tiene il segno $+$.
> 6. $x = \log\big(y + \sqrt{y^2 - 1}\big)$.
>
> $$
> \cosh^{-1} : [1, +\infty) \to [0, +\infty), \qquad \cosh^{-1}(x) = \log\big(x + \sqrt{x^2 - 1}\big)
> $$
>
> **Controllo**: $\cosh^{-1}(1) = \log 1 = 0$; $\cosh(\log 2) = \frac54$ e $\cosh^{-1}\left(\frac54\right) = \log\left(\frac54 + \sqrt{\frac{9}{16}}\right) = \log\left(\frac54 + \frac34\right) = \log 2$. L'altra radice darebbe $\log\left(\frac54 - \frac34\right) = \log\frac12 = -\log 2$, il punto simmetrico, fuori dalla restrizione.

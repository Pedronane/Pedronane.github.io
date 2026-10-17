---
title: Funzioni (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-16
lezioni: []
ordine: 2
---

Esercizi tipo esame di [Funzioni](/uni/analisi-1/funzioni/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ è:

- a) iniettiva ma non suriettiva
- b) suriettiva ma non iniettiva
- c) né iniettiva né suriettiva
- d) biiettiva

> [!example]- Soluzione
> **c**. Non iniettiva: $f(-1) = 1 = f(1)$. Non suriettiva: $-1$ non ha controimmagine, perché un quadrato non è mai negativo. Diventerebbe biiettiva solo restringendo il dominio a $[0, +\infty)$ e prendendo come codominio $[0, +\infty)$.

**C2.** $f : \mathbb{R} \setminus \{0\} \to \mathbb{R}$, $f(x) = \frac3x$ è:

- a) iniettiva ma non suriettiva
- b) suriettiva ma non iniettiva
- c) né iniettiva né suriettiva
- d) biiettiva

> [!example]- Soluzione
> **a**, l'ES1 del prof. Iniettiva: $\frac{3}{x_1} = \frac{3}{x_2}$ dà $x_1 = x_2$. Il valore $0$ non è mai assunto, quindi non è suriettiva su $\mathbb{R}$. Con codominio $\mathbb{R} \setminus \{0\}$ sarebbe biiettiva.

**C3.** Siano $f(x) = x^2$ e $g(x) = \cos x$. Quanto vale $(g \circ f)(\sqrt\pi)$?

- a) $1$
- b) $-1$
- c) $\cos^2\sqrt\pi$
- d) $\pi$

> [!example]- Soluzione
> **b**. $g \circ f$ applica prima $f$: $f(\sqrt\pi) = \pi$, poi $g(\pi) = \cos\pi = -1$. La c) è $(f \circ g)(\sqrt\pi)$, l'ordine sbagliato. La d) è solo il primo passo.

**C4.** Quale funzione $\mathbb{R} \to \mathbb{R}$ è dispari?

- a) $x^2 + x$
- b) $x^3 - \sin x$
- c) $x^2\cos x$
- d) $x + 1$

> [!example]- Soluzione
> **b**. $(-x)^3 - \sin(-x) = -x^3 + \sin x = -(x^3 - \sin x)$, usando che $x^3$ e $\sin$ sono dispari. La c) è pari: $(-x)^2\cos(-x) = x^2 \cos x$. La a) e la d) non sono né pari né dispari: in $x = 1$ la a) vale $2$ e in $x = -1$ vale $0$; la d) vale $1$ in $0$, e una dispari in $0$ vale $0$.

**C5.** Siano $f(x) = x - 2$ e $g(x) = \sqrt{x}$, ciascuna sul suo dominio naturale. Il dominio di $g \circ f$ è:

- a) $\mathbb{R}$
- b) $[0, +\infty)$
- c) $[-2, +\infty)$
- d) $[2, +\infty)$

> [!example]- Soluzione
> **d**. $(g \circ f)(x) = \sqrt{x - 2}$: la $x$ entra in $f$ senza condizioni, e quello che esce deve stare nel dominio della radice, $x - 2 \geq 0 \iff x \geq 2$. La b) è il dominio di $g$ da sola, l'errore di guardare solo la funzione esterna senza sostituire. La c) viene da un segno sbagliato.

**C6.** L'inversa di $f : \mathbb{R} \setminus \{2\} \to \mathbb{R} \setminus \{1\}$, $f(x) = \frac{x + 1}{x - 2}$, è:

- a) $f^{-1}(x) = \frac{2x + 1}{x - 1}$
- b) $f^{-1}(x) = \frac{x - 2}{x + 1}$
- c) $f^{-1}(x) = \frac{x - 1}{2x + 1}$
- d) $f^{-1}(x) = \frac{2x - 1}{x + 1}$

> [!example]- Soluzione
> **a**. Da $y = \frac{x+1}{x-2}$: $y(x - 2) = x + 1$, quindi $yx - x = 2y + 1$, $x(y - 1) = 2y + 1$, $x = \frac{2y + 1}{y - 1}$ (si può dividere perché $y \neq 1$). Controllo: $f(0) = -\frac12$ e $\frac{2 \cdot (-\frac12) + 1}{-\frac12 - 1} = \frac{0}{-\frac32} = 0$. La b) è $\frac1f$, la trappola della notazione $f^{-1}$.

**C7.** Quale di queste funzioni $\mathbb{R} \to \mathbb{R}$ è iniettiva?

- a) $x^3 + x$
- b) $x^2 - 2x$
- c) $|x - 1|$
- d) $\cos x$

> [!example]- Soluzione
> **a**. $x^3$ e $x$ sono strettamente crescenti, quindi lo è la somma (se $x_1 < x_2$, sommo $x_1^3 < x_2^3$ e $x_1 < x_2$), e una strettamente crescente è iniettiva. Le altre hanno un controesempio: la b) vale $0$ in $0$ e in $2$; la c) vale $1$ in $0$ e in $2$; la d) vale $1$ in $0$ e in $2\pi$.

**C8.** Sia $f : \mathbb{R} \to \mathbb{R}$, $f(x) = \begin{cases} x + 1 & x < 0 \\ x^2 & x \geq 0 \end{cases}$. Allora $f$ è:

- a) biiettiva
- b) iniettiva ma non suriettiva
- c) né iniettiva né suriettiva
- d) suriettiva ma non iniettiva

> [!example]- Soluzione
> **d**. Immagine: per $x < 0$ il tratto $x + 1$ copre $(-\infty, 1)$; per $x \geq 0$ il tratto $x^2$ copre $[0, +\infty)$. L'unione è tutto $\mathbb{R}$, quindi suriettiva. Le due immagini però si sovrappongono in $[0, 1)$, e lì arrivano due frecce: $f\left(-\frac12\right) = \frac12$ e $f\left(\frac{1}{\sqrt2}\right) = \frac12$. Non iniettiva. Sul grafico la retta $y = \frac12$ taglia tutti e due i rami.

**C9.** La parte intera $f(x) = \lfloor x \rfloor$, $\mathbb{R} \to \mathbb{R}$, è:

- a) iniettiva
- b) strettamente crescente
- c) crescente ma non strettamente
- d) né crescente né decrescente

> [!example]- Soluzione
> **c**. Se $x_1 < x_2$, il più grande intero $\leq x_1$ è anche $\leq x_2$, quindi $\lfloor x_1 \rfloor \leq \lfloor x_2 \rfloor$: crescente. Non strettamente, e nemmeno iniettiva: $\lfloor 0{,}2 \rfloor = \lfloor 0{,}7 \rfloor = 0$. Quindi a) e b) sono false, e la d) è falsa perché è crescente.

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo.

**Esercizio 1.** Sia $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 3 - 2x$. Dimostrare che è biiettiva e scrivere l'inversa.

> [!example]- Soluzione
> **Come si riconosce**: funzione affine, la retta non è orizzontale ($m = -2 \neq 0$). **Metodo**: definizione per l'iniettività, equazione $f(x) = y$ per suriettività e inversa insieme.
>
> **Iniettiva.**
> 1. Suppongo $3 - 2x_1 = 3 - 2x_2$.
> 2. Tolgo $3$: $-2x_1 = -2x_2$.
> 3. Divido per $-2$: $x_1 = x_2$.
>
> **Suriettiva e inversa.**
> 1. Dato $y \in \mathbb{R}$, risolvo $3 - 2x = y$.
> 2. Porto $3$ a destra: $-2x = y - 3$.
> 3. Divido per $-2$: $x = \frac{3 - y}{2}$, reale per ogni $y$. Quindi ogni $y$ è raggiunto.
>
> $f^{-1} : \mathbb{R} \to \mathbb{R}$, $f^{-1}(x) = \frac{3 - x}{2}$.
>
> **Controllo**: $f^{-1}(f(x)) = \frac{3 - (3 - 2x)}{2} = \frac{2x}{2} = x$. In un punto: $f(1) = 1$ e $f^{-1}(1) = 1$, giusto perché $1$ è il punto dove la retta incontra la bisettrice.

**Esercizio 2.** Sia $f(x) = \sqrt{4 - x^2}$ sul suo dominio naturale. (a) Trovare dominio e immagine. (b) Dire se è iniettiva. (c) Trovare un intervallo su cui la restrizione è invertibile e scriverne l'inversa.

> [!example]- Soluzione
> **Come si riconosce**: radice quadrata, quindi c'è una condizione di dominio e i valori sono $\geq 0$. **Metodo**: condizione sul radicando per il dominio; equazione $f(x) = y$ per l'immagine.
>
> **(a) Dominio.** Serve $4 - x^2 \geq 0 \iff x^2 \leq 4 \iff -2 \leq x \leq 2$. $\mathrm{Dom}(f) = [-2, 2]$.
>
> **(a) Immagine.** Risolvo $\sqrt{4 - x^2} = y$:
> 1. una radice è $\geq 0$, quindi serve $y \geq 0$;
> 2. con $y \geq 0$ elevo al quadrato (passaggio equivalente perché i due lati sono $\geq 0$): $4 - x^2 = y^2$;
> 3. $x^2 = 4 - y^2$, che ha soluzione se e solo se $4 - y^2 \geq 0$, cioè $y \leq 2$;
> 4. le soluzioni $x = \pm\sqrt{4 - y^2}$ stanno in $[-2, 2]$, perché $4 - y^2 \leq 4$.
>
> $\mathrm{Im}(f) = [0, 2]$.
>
> **(b) Non iniettiva.** Il punto 4 dà due soluzioni per ogni $y \in [0, 2)$: per esempio $f(-1) = \sqrt3 = f(1)$. È pari: $f(-x) = \sqrt{4 - (-x)^2} = f(x)$.
>
> **(c) Restrizione.** Tengo $[0, 2]$, dove sopravvive solo la soluzione col $+$: $f_{|[0, 2]} : [0, 2] \to [0, 2]$ è biiettiva e da $y = \sqrt{4 - x^2}$, $x \geq 0$, si ricava $x = \sqrt{4 - y^2}$. Quindi
> $$
> f^{-1}(x) = \sqrt{4 - x^2}, \qquad f^{-1} : [0, 2] \to [0, 2]
> $$
> L'inversa ha la stessa formula di $f$. Non è un errore: il grafico è un quarto di circonferenza di raggio $2$, simmetrico rispetto a $y = x$, e la riflessione lo lascia com'è.
>
> **Controllo**: $f(1) = \sqrt3$ e $f^{-1}(\sqrt3) = \sqrt{4 - 3} = 1$.

**Esercizio 3.** Sia $f : \mathbb{R} \setminus \{3\} \to \mathbb{R}$, $f(x) = \dfrac{2x + 1}{x - 3}$. Dire se è iniettiva, trovarne l'immagine, e scrivere l'inversa di $f : \mathbb{R} \setminus \{3\} \to \mathrm{Im}(f)$.

> [!example]- Soluzione
> **Come si riconosce**: rapporto di due polinomi di primo grado. **Metodo**: risolvere $f(x) = y$ una volta sola, e da lì leggere immagine, iniettività e inversa.
>
> **Suriettività e immagine.** Dato $y$, risolvo $\frac{2x+1}{x-3} = y$ con $x \neq 3$:
> 1. moltiplico per $x - 3 \neq 0$: $2x + 1 = y(x - 3) = yx - 3y$;
> 2. porto le $x$ a sinistra: $2x - yx = -3y - 1$;
> 3. raccolgo $x$: $x(2 - y) = -(3y + 1)$.
>
> Se $y = 2$ l'equazione diventa $0 = -7$, impossibile: $2 \notin \mathrm{Im}(f)$. Se $y \neq 2$ divido per $2 - y$:
> $$
> x = \frac{-(3y + 1)}{2 - y} = \frac{3y + 1}{y - 2}
> $$
> e questo $x$ non vale mai $3$ (sarebbe $3y + 1 = 3y - 6$, cioè $1 = -6$). Quindi $\mathrm{Im}(f) = \mathbb{R} \setminus \{2\}$, e $f$ non è suriettiva su $\mathbb{R}$.
>
> **Iniettività.** Per ogni $y$ la soluzione trovata è unica, quindi in ogni punto arriva al più una freccia: $f$ è iniettiva. Coi conti diretti: $\frac{2x_1 + 1}{x_1 - 3} = \frac{2x_2+1}{x_2-3}$, moltiplicando in croce, $(2x_1 + 1)(x_2 - 3) = (2x_2 + 1)(x_1 - 3)$; sviluppando, $2x_1x_2 - 6x_1 + x_2 - 3 = 2x_1x_2 - 6x_2 + x_1 - 3$, cioè $-7x_1 = -7x_2$.
>
> **Inversa.** $f^{-1} : \mathbb{R} \setminus \{2\} \to \mathbb{R} \setminus \{3\}$, $f^{-1}(y) = \dfrac{3y+1}{y-2}$.
>
> **Controllo**: $f(0) = -\frac13$ e $f^{-1}\left(-\frac13\right) = \frac{-1 + 1}{-\frac13 - 2} = 0$. Il valore escluso $2$ è il rapporto dei coefficienti di $x$, $\frac21$: per $x$ molto grande $f(x)$ si avvicina a $2$ senza toccarlo.

**Esercizio 4.** Siano $f(x) = \sqrt{x}$ e $g(x) = x^2 - 1$, ciascuna sul suo dominio naturale. Scrivere $g \circ f$ e $f \circ g$ con i loro domini.

> [!example]- Soluzione
> **Come si riconosce**: composizione con una radice, una volta dentro e una volta fuori. **Metodo**: $\mathrm{Dom}(g \circ f) = \{x \in \mathrm{Dom}(f) : f(x) \in \mathrm{Dom}(g)\}$, deciso prima di semplificare.
>
> **$g \circ f$.** Prima $f$, che richiede $x \geq 0$; poi $g$, definita ovunque. $(g \circ f)(x) = (\sqrt{x})^2 - 1 = x - 1$ con dominio $[0, +\infty)$. Anche se la formula finale $x - 1$ avrebbe senso per ogni $x$, il dominio della composizione lo decide il primo passo (pannello destro della figura in [Composizione](/uni/analisi-1/funzioni/#composizione)).
>
> **$f \circ g$.** Prima $g$, poi la radice, che richiede $g(x) \geq 0$:
> 1. $x^2 - 1 \geq 0$;
> 2. $x^2 \geq 1$;
> 3. $|x| \geq 1$, cioè $x \leq -1$ oppure $x \geq 1$.
>
> $(f \circ g)(x) = \sqrt{x^2 - 1}$ con dominio $(-\infty, -1] \cup [1, +\infty)$.
>
> Due funzioni diverse anche nel dominio: la composizione non è commutativa. **Controllo**: $x = 4$ dà $(g \circ f)(4) = 2^2 - 1 = 3$ e $(f \circ g)(4) = \sqrt{15}$.

**Esercizio 5.** Siano $f(x) = \dfrac{1}{x - 1}$ e $g(x) = \sqrt{x + 2}$, ciascuna sul suo dominio naturale. Trovare il dominio di $f \circ g$ e di $g \circ f$.

> [!example]- Soluzione
> **Come si riconosce**: composizione con un denominatore e una radice: ogni funzione porta la sua condizione, da scrivere sulla funzione interna. **Metodo**: le condizioni della funzione interna, più quelle dell'esterna applicate al valore dell'interna.
>
> $\mathrm{Dom}(f) = \mathbb{R} \setminus \{1\}$, $\mathrm{Dom}(g) = [-2, +\infty)$.
>
> **$f \circ g$**, cioè $\dfrac{1}{\sqrt{x + 2} - 1}$.
> 1. Prima $g$: $x \geq -2$.
> 2. Poi $f$: serve $g(x) \neq 1$, cioè $\sqrt{x + 2} \neq 1$.
> 3. Le due parti sono $\geq 0$, quindi elevando al quadrato: $x + 2 \neq 1$, cioè $x \neq -1$.
>
> $\mathrm{Dom}(f \circ g) = [-2, -1) \cup (-1, +\infty)$.
>
> **$g \circ f$**, cioè $\sqrt{\dfrac{1}{x - 1} + 2}$.
> 1. Prima $f$: $x \neq 1$.
> 2. Poi $g$: serve $f(x) \geq -2$, cioè $\frac{1}{x - 1} + 2 \geq 0$.
> 3. Faccio il denominatore comune: $\frac{1 + 2(x - 1)}{x - 1} = \frac{2x - 1}{x - 1} \geq 0$.
> 4. Studio del segno: il numeratore è $\geq 0$ per $x \geq \frac12$, il denominatore è $> 0$ per $x > 1$.
> 5. Il quoziente è $\geq 0$ dove hanno lo stesso segno o il numeratore è zero: $x \leq \frac12$ (tutti e due $\leq 0$, numeratore che si annulla in $\frac12$) oppure $x > 1$ (tutti e due positivi).
>
> $\mathrm{Dom}(g \circ f) = \left(-\infty, \frac12\right] \cup (1, +\infty)$.
>
> **Controllo**: $x = 0$ dà $\frac{1}{-1} + 2 = 1 \geq 0$, ammesso; $x = \frac34$ dà $\frac{1}{-\frac14} + 2 = -2 < 0$, escluso; $x = 2$ dà $3$, ammesso.

**Esercizio 6.** Sia $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2 - 4x + 1$. (a) Mostrare che non è iniettiva. (b) Trovare il più grande intervallo contenente $0$ su cui $f$ è invertibile. (c) Scrivere l'inversa della restrizione, con dominio e codominio.

> [!example]- Soluzione
> **Come si riconosce**: parabola, quindi due rami. **Metodo**: completare il quadrato per trovare il vertice, tenere il ramo che contiene $0$, invertire scegliendo il segno giusto davanti alla radice.
>
> **(a)** $f(0) = 1$ e $f(4) = 16 - 16 + 1 = 1$: due punti diversi con lo stesso valore.
>
> **(b)** Completo il quadrato: $x^2 - 4x + 1 = (x^2 - 4x + 4) - 3 = (x - 2)^2 - 3$. Vertice in $x = 2$.
> 1. Su $(-\infty, 2]$: se $x_1 < x_2 \leq 2$, allora $x_1 - 2 < x_2 - 2 \leq 0$, quindi $|x_1 - 2| > |x_2 - 2|$ e $(x_1 - 2)^2 > (x_2 - 2)^2$. Togliendo $3$, $f(x_1) > f(x_2)$: strettamente decrescente, quindi iniettiva.
> 2. Un intervallo più grande conterrebbe un $2 + h$ con $h > 0$, e $f(2 + h) = h^2 - 3 = f(2 - h)$: non più iniettiva.
>
> L'intervallo è $(-\infty, 2]$, e contiene $0$.
>
> **Immagine della restrizione.** $f(2) = -3$, e $f$ cresce senza limite andando verso $-\infty$; più precisamente $(x - 2)^2 - 3 = y$ ha soluzione $x = 2 - \sqrt{y + 3} \leq 2$ per ogni $y \geq -3$. Quindi l'immagine è $[-3, +\infty)$.
>
> **(c)** Da $y = x^2 - 4x + 1$: $x^2 - 4x + (1 - y) = 0$, e
> $$
> x = \frac{4 \pm \sqrt{16 - 4(1 - y)}}{2} = \frac{4 \pm 2\sqrt{y + 3}}{2} = 2 \pm \sqrt{y + 3}
> $$
> Serve $x \leq 2$, quindi il segno $-$:
> $$
> f^{-1} : [-3, +\infty) \to (-\infty, 2], \qquad f^{-1}(x) = 2 - \sqrt{x + 3}
> $$
>
> **Controllo**: $f(0) = 1$ e $f^{-1}(1) = 2 - \sqrt4 = 0$; $f(-1) = 6$ e $f^{-1}(6) = 2 - 3 = -1$.

**Esercizio 7.** Sia $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x|x|$. Dire se è pari o dispari, se è iniettiva e suriettiva, e trovarne l'inversa.

> [!example]- Soluzione
> **Come si riconosce**: c'è un valore assoluto, quindi si scrive a tratti. **Metodo**: forma a tratti, poi ogni proprietà tratto per tratto, poi si incollano i tratti.
>
> **Forma a tratti.** Per $x \geq 0$, $|x| = x$ e $f(x) = x^2$; per $x < 0$, $|x| = -x$ e $f(x) = -x^2$.
>
> **Dispari.** $f(-x) = (-x)|-x| = -x|x| = -f(x)$, perché $|-x| = |x|$.
>
> **Iniettiva.**
> 1. Su $[0, +\infty)$ è $x^2$, strettamente crescente.
> 2. Su $(-\infty, 0)$ è $-x^2$, anch'essa strettamente crescente: se $x_1 < x_2 < 0$ allora $x_1^2 > x_2^2$, e cambiando segno $-x_1^2 < -x_2^2$.
> 3. I due pezzi si attaccano in $f(0) = 0$, con valori negativi a sinistra e positivi a destra: un punto del ramo sinistro ha sempre valore minore di uno del ramo destro.
> 4. Quindi $f$ è strettamente crescente su tutto $\mathbb{R}$, e dunque iniettiva.
>
> **Suriettiva.** Dato $y \geq 0$, $x = \sqrt{y}$ dà $f(x) = y$; dato $y < 0$, $x = -\sqrt{-y}$ è negativo e $f(x) = -\left(\sqrt{-y}\right)^2 = -(-y) = y$. Ogni $y$ è raggiunto.
>
> **Inversa.**
> $$
> f^{-1}(y) = \begin{cases} \sqrt{y} & y \geq 0 \\ -\sqrt{-y} & y < 0 \end{cases}
> $$
> Anch'essa dispari: il grafico di $f$ è simmetrico rispetto all'origine, e riflettendolo nella bisettrice la simmetria resta.
>
> **Controllo**: $f(-3) = -9$ e $f^{-1}(-9) = -\sqrt9 = -3$.

**Esercizio 8** (esercitazione del 29/9, esercizio 2.2, non svolto a lezione). Calcolare l'inversa di $f : \mathbb{R} \to (0, +\infty)$, $f(x) = e^{2x} + e^x$.

> [!example]- Soluzione
> La soluzione del tutor (<span class="src">esercitazione 2, pagina 4</span>). **Come si riconosce**: compaiono $e^{2x}$ ed $e^x$, e $e^{2x} = (e^x)^2$. **Metodo**: sostituzione $t = e^x$, che trasforma l'equazione in una di secondo grado in $t$, ricordando che $t > 0$.
>
> 1. Si pone $y = e^{2x} + e^x$, e si osserva che $y > 0$ (somma di esponenziali, sempre positivi).
> 2. Con $t = e^x$, $e^{2x} = t^2$ e l'equazione $e^{2x} + e^x - y = 0$ diventa $t^2 + t - y = 0$.
> 3. Formula risolutiva: $t_{1,2} = \frac{-1 \pm \sqrt{1 + 4y}}{2}$.
> 4. $t = \frac{-1 - \sqrt{1 + 4y}}{2} < 0$: non accettabile, perché $t = e^x > 0$.
> 5. $t = \frac{-1 + \sqrt{1 + 4y}}{2}$: positiva per $y > 0$, perché $1 + 4y > 1$ e quindi $\sqrt{1 + 4y} > 1$.
> 6. Da $e^x = t$ si ricava $x = \log t$.
>
> $$
> f^{-1}(x) = \log\left(\frac{-1 + \sqrt{1 + 4x}}{2}\right), \qquad x > 0
> $$
> $f$ è biiettiva da $\mathbb{R}$ a $(0, +\infty)$: strettamente crescente (somma di due strettamente crescenti) e ogni $y > 0$ ha la sua soluzione.
>
> **Controllo**: $f(0) = 1 + 1 = 2$ e $f^{-1}(2) = \log\frac{-1 + 3}{2} = \log 1 = 0$.

**Esercizio 9** (lasciato dal prof il 16/9). Esibire una funzione periodica **non costante** tale che non esista il minimo dei periodi.

> [!example]- Soluzione
> **Come si riconosce**: è una domanda di esistenza, si risponde con un esempio. **Metodo**: serve una funzione che abbia periodi piccoli quanto si vuole senza essere costante; l'idea è distinguere razionali e irrazionali, perché sommare un razionale non cambia il "tipo" di un numero.
>
> **Funzione di Dirichlet.**
> $$
> f(x) = \begin{cases} 1 & x \in \mathbb{Q} \\ 0 & x \notin \mathbb{Q} \end{cases}
> $$
> 1. Non è costante: $f(0) = 1$ e $f(\sqrt2) = 0$.
> 2. Ogni razionale $T > 0$ è un periodo. Se $x$ è razionale, $x + T$ è razionale (somma di razionali) e $f(x + T) = 1 = f(x)$. Se $x$ è irrazionale, $x + T$ è irrazionale: se fosse razionale, $x = (x + T) - T$ sarebbe differenza di razionali, quindi razionale. Allora $f(x + T) = 0 = f(x)$.
> 3. I periodi comprendono tutti i razionali positivi, che non hanno un minimo: dato un razionale $T > 0$, anche $\frac{T}{2}$ è un razionale positivo più piccolo.
> 4. L'inf dei periodi è $0$, che non è un periodo ammesso. Quindi il minimo non esiste.

**Esercizio 10.** Siano
$$
f(x) = \begin{cases} 1 - x & x \leq 1 \\ x^2 & x > 1 \end{cases} \qquad g(x) = \begin{cases} x^2 & x \geq 0 \\ x & x < 0 \end{cases}
$$
Scrivere $f \circ g$.

> [!example]- Soluzione
> **Come si riconosce**: due funzioni a tratti, e la soglia di $f$ ($1$) non coincide con quella di $g$ ($0$). **Metodo**: quello del tutor nell'esercizio 1.6, ma qui una condizione taglia un tratto di $g$ in due.
>
> **Passo 1**, $f$ con $g(x)$ al posto di $x$, anche nelle condizioni:
> $$
> f(g(x)) = \begin{cases} 1 - g(x) & g(x) \leq 1 \\ g(x)^2 & g(x) > 1 \end{cases}
> $$
>
> **Passo 2**, condizioni su $g(x)$ tradotte tratto per tratto.
> - Tratto $x < 0$: $g(x) = x$, e $x < 0 < 1$, quindi $g(x) \leq 1$ sempre. Vale la prima riga: $f(g(x)) = 1 - x$.
> - Tratto $x \geq 0$: $g(x) = x^2$. La condizione $x^2 \leq 1$ con $x \geq 0$ dà $0 \leq x \leq 1$, e lì $f(g(x)) = 1 - x^2$. La condizione $x^2 > 1$ con $x \geq 0$ dà $x > 1$, e lì $f(g(x)) = (x^2)^2 = x^4$.
>
> **Risultato**, tre righe:
> $$
> (f \circ g)(x) = \begin{cases} 1 - x & x < 0 \\ 1 - x^2 & 0 \leq x \leq 1 \\ x^4 & x > 1 \end{cases}
> $$
>
> **Controllo**, un punto per riga: $x = -2$: $g(-2) = -2$, $f(-2) = 3$, e $1 - (-2) = 3$. $x = \frac12$: $g = \frac14$, $f\left(\frac14\right) = \frac34$, e $1 - \frac14 = \frac34$. $x = 3$: $g = 9$, $f(9) = 81$, e $3^4 = 81$.

**Esercizio 11.** Sia $f : \mathbb{R} \to \mathbb{R}$, $f(x) = e^x - 2e^{-x}$. Dimostrare che è biiettiva e calcolarne l'inversa.

> [!example]- Soluzione
> **Come si riconosce**: compaiono $e^x$ ed $e^{-x} = \frac{1}{e^x}$, come nell'esercizio 2.2 del tutor. **Metodo**: monotonia per l'iniettività; sostituzione $t = e^x > 0$ per risolvere $f(x) = y$, che dà insieme suriettività e inversa.
>
> **Iniettiva.** $e^x$ è strettamente crescente; $e^{-x}$ è strettamente decrescente, quindi $-2e^{-x}$ è strettamente crescente (moltiplicare per un negativo rovescia il verso). La somma di due strettamente crescenti è strettamente crescente, quindi $f$ è iniettiva.
>
> **Suriettiva e inversa.** Dato $y \in \mathbb{R}$, risolvo $e^x - 2e^{-x} = y$.
> 1. Pongo $t = e^x > 0$: $t - \frac{2}{t} = y$.
> 2. Moltiplico per $t > 0$: $t^2 - 2 = yt$, cioè $t^2 - yt - 2 = 0$.
> 3. Formula risolutiva: $t = \frac{y \pm \sqrt{y^2 + 8}}{2}$. Il discriminante $y^2 + 8$ è sempre positivo.
> 4. $\sqrt{y^2 + 8} > \sqrt{y^2} = |y| \geq y$, quindi $y - \sqrt{y^2 + 8} < 0$: la soluzione col $-$ è negativa e va scartata.
> 5. Per lo stesso motivo $y + \sqrt{y^2 + 8} > y + |y| \geq 0$: la soluzione col $+$ è positiva per ogni $y$.
> 6. Da $e^x = t$: $x = \log\frac{y + \sqrt{y^2 + 8}}{2}$, che esiste per ogni $y$. Quindi $f$ è suriettiva.
>
> $$
> f^{-1} : \mathbb{R} \to \mathbb{R}, \qquad f^{-1}(x) = \log\left(\frac{x + \sqrt{x^2 + 8}}{2}\right)
> $$
>
> **Controllo**: $f(0) = 1 - 2 = -1$ e $f^{-1}(-1) = \log\frac{-1 + 3}{2} = \log 1 = 0$; $f(\log 2) = 2 - 2 \cdot \frac12 = 1$ e $f^{-1}(1) = \log\frac{1 + 3}{2} = \log 2$.

---
title: Derivate (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-21
lezioni: []
ordine: 18
---

Esercizi tipo esame di [Derivate](/uni/analisi-1/derivate/), dove stanno definizione, retta tangente, "derivabile implica continua" e gli esempi del 21/10. Al 21/10 le regole di derivazione non sono ancora fatte: **ogni derivata qui si calcola con la definizione**. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** Sia $f : (a, b) \to \mathbb{R}$ e $x_0 \in (a, b)$. Quale implicazione è vera?

- a) $f$ continua in $x_0$ $\Rightarrow$ $f$ derivabile in $x_0$
- b) $f$ derivabile in $x_0$ $\Rightarrow$ $f$ continua in $x_0$
- c) $f$ non derivabile in $x_0$ $\Rightarrow$ $f$ non continua in $x_0$
- d) nessuna delle precedenti

> [!example]- Soluzione
> **b**: è il teorema della slide 9. La a) è falsa per $|x|$ in $0$. La c) è la contronominale della a), quindi falsa anche lei (stesso controesempio). La contronominale giusta della b) è "non continua $\Rightarrow$ non derivabile".

**C2.** La retta tangente al grafico di $f(x) = x^2$ nel punto di ascissa $x_0 = -1$ è:

- a) $y = -2x - 1$
- b) $y = -2x + 1$
- c) $y = 2x + 1$
- d) $y = -2x$

> [!example]- Soluzione
> **a**. $f(-1) = 1$; $f'(-1) = \lim_{h \to 0}\frac{(-1 + h)^2 - 1}{h} = \lim_{h \to 0}\frac{-2h + h^2}{h} = -2$. Tangente: $y = 1 - 2(x + 1) = -2x - 1$. *Controllo*: in $x = -1$ dà $2 - 1 = 1$. La b) non passa per $(-1, 1)$ ($2 + 1 = 3$); la c) ha la pendenza col segno sbagliato.

**C3.** Sia $f(x) = |x - 2|$. Allora:

- a) $f$ è derivabile in $2$ con $f'(2) = 0$
- b) $f$ non è continua in $2$
- c) $f'(2^+) = 1$ e $f'(2^-) = -1$
- d) $f'(2^+) = f'(2^-) = 1$

> [!example]- Soluzione
> **c**. È $|x|$ traslato di $2$: per $h > 0$, $\frac{|h| - 0}{h} = 1$; per $h < 0$, $\frac{|h|}{h} = -1$. Laterali diversi: non derivabile (la a) sbaglia), ma continua (la b) sbaglia).

**C4.** $f(x) = \sqrt[3]x$ in $x_0 = 0$:

- a) è derivabile con $f'(0) = 0$
- b) è derivabile con $f'(0) = +\infty$
- c) non è derivabile, ma è continua
- d) non è continua

> [!example]- Soluzione
> **c**. $\frac{\sqrt[3]h - 0}{h} = \frac{1}{\sqrt[3]{h^2}} \to +\infty$: il limite esiste ma non è finito, quindi non è derivabile (tangente verticale). La b) dimentica "finito" nella definizione. È continua: radice cubica, elementare.

## Esercizi (stile parte 2)

Dal più facile al livello del 30.

### Derivate e tangenti con la definizione

**Esercizio 1.** Calcolare con la definizione $f'(1)$ per $f(x) = x^3$, e scrivere la retta tangente in $(1, 1)$.

> [!example]- Soluzione
> 1. $(1 + h)^3 = 1 + 3h + 3h^2 + h^3$ (cubo del binomio).
> 2. $\frac{(1 + h)^3 - 1}{h} = \frac{3h + 3h^2 + h^3}{h} = 3 + 3h + h^2$ per $h \neq 0$.
> 3. $\lim_{h \to 0}(3 + 3h + h^2) = 3$: $f'(1) = 3$.
> 4. Tangente: $y = 1 + 3(x - 1) = 3x - 2$.
>
> **Controllo**: $x^3 - (3x - 2) = (x - 1)^2(x + 2)$, che si annulla doppio in $1$: la retta tocca il grafico in $1$ senza attraversarlo lì.

**Esercizio 2.** Calcolare con la definizione $f'(4)$ per $f(x) = \sqrt x$, e la retta tangente.

> [!example]- Soluzione
> **Come si riconosce**: radice, si razionalizza.
>
> 1. $\frac{\sqrt{4 + h} - 2}{h} = \frac{(\sqrt{4 + h} - 2)(\sqrt{4 + h} + 2)}{h(\sqrt{4 + h} + 2)}$ (moltiplico e divido per $\sqrt{4 + h} + 2 > 0$).
> 2. Numeratore: $(4 + h) - 4 = h$ (prodotto notevole).
> 3. $= \frac{1}{\sqrt{4 + h} + 2}$ per $h \neq 0$.
> 4. $\to \frac{1}{2 + 2} = \frac14$ (continuità della radice).
> 5. Tangente in $(4, 2)$: $y = 2 + \frac14(x - 4) = \frac14 x + 1$.
>
> **Controllo**: $\sqrt{4{,}01} \approx 2{,}0025$, e la tangente in $4{,}01$ dà $2{,}0025$.

**Esercizio 3.** Calcolare $f'(x_0)$ per $f(x) = \frac1x$ in un qualunque $x_0 \neq 0$.

> [!example]- Soluzione
> 1. $\frac{1}{x_0 + h} - \frac{1}{x_0} = \frac{x_0 - (x_0 + h)}{x_0(x_0 + h)} = \frac{-h}{x_0(x_0 + h)}$ (denominatore comune).
> 2. Divido per $h$: $-\frac{1}{x_0(x_0 + h)}$.
> 3. Per $h \to 0$: $-\frac{1}{x_0^2}$.
>
> **Controllo**: con $x_0 = 2$ dà $-\frac14$, come nell'esempio della nota. La derivata è sempre negativa: $\frac1x$ scende su ciascuno dei due rami.

**Esercizio 4.** Calcolare con la definizione la derivata di $\sin x$ in un qualunque $x_0$.

> [!example]- Soluzione
> **Come si riconosce**: funzione trigonometrica; servono la formula di addizione e i limiti notevoli.
>
> 1. $\sin(x_0 + h) = \sin x_0 \cos h + \cos x_0 \sin h$ (formula di addizione).
> 2. $\frac{\sin(x_0 + h) - \sin x_0}{h} = \sin x_0 \cdot \frac{\cos h - 1}{h} + \cos x_0 \cdot \frac{\sin h}{h}$ (raccolgo $\sin x_0$).
> 3. $\frac{\cos h - 1}{h} = -\frac{1 - \cos h}{h^2} \cdot h \to -\frac12 \cdot 0 = 0$.
> 4. $\frac{\sin h}{h} \to 1$.
> 5. Risultato: $\sin x_0 \cdot 0 + \cos x_0 \cdot 1 = \cos x_0$.
>
> **Controllo**: in $x_0 = 0$ la pendenza è $\cos 0 = 1$, e infatti vicino a $0$ $\sin x$ è circa $x$.

### Derivabilità

**Esercizio 5.** Dire se $f(x) = x|x|$ è derivabile in $0$.

> [!example]- Soluzione
> 1. $f(0) = 0$. Rapporto incrementale: $\frac{h|h| - 0}{h} = |h|$ per $h \neq 0$.
> 2. $|h| \to 0$ da entrambi i lati.
> 3. Derivabile, con $f'(0) = 0$.
>
> Il fattore $h$ in più "spiana" lo spigolo di $|x|$: il grafico è $x^2$ a destra e $-x^2$ a sinistra, entrambi con tangente orizzontale in $0$.

**Esercizio 6.** Determinare $a, b \in \mathbb{R}$ tali che $f(x) = \begin{cases} x^2 & x \leq 1 \\ ax + b & x > 1 \end{cases}$ sia derivabile in $1$.

> [!example]- Soluzione
> **Come si riconosce**: raccordo con due parametri: due condizioni, continuità e uguaglianza delle derivate laterali.
>
> 1. **Continuità** (necessaria, slide 9): $f(1) = 1$, $\lim_{x \to 1^+}(ax + b) = a + b$. Serve $a + b = 1$.
> 2. **Derivata sinistra**: $\frac{(1 + h)^2 - 1}{h} = 2 + h \to 2$ per $h \to 0^-$.
> 3. **Derivata destra**, con $a + b = 1$: $\frac{a(1 + h) + b - 1}{h} = \frac{a + b - 1 + ah}{h} = \frac{ah}{h} = a$.
> 4. Uguali: $a = 2$, quindi $b = 1 - 2 = -1$.
>
> **Controllo**: con $a = 2$, $b = -1$ il pezzo destro è $2x - 1$, cioè la tangente a $x^2$ in $1$ (slide 8). Senza la continuità al passo 1 il conto del passo 3 non si semplifica: con $a + b \neq 1$ il rapporto contiene $\frac{a + b - 1}{h} \to \pm\infty$.

**Esercizio 7.** Dire se $f(x) = x\sin\frac1x$ per $x \neq 0$, $f(0) = 0$, è continua e derivabile in $0$.

> [!example]- Soluzione
> **Continua**: $|x\sin\frac1x| \leq |x| \to 0 = f(0)$ (esempio del prof del 12/10, [Limiti di funzioni](/uni/analisi-1/limiti-di-funzioni/)).
>
> **Derivabile?** Rapporto incrementale: $\frac{h\sin\frac1h - 0}{h} = \sin\frac1h$. Per $h \to 0^+$ non ha limite (slide 28: successioni $\frac{1}{n\pi}$ e $\frac{1}{\frac\pi2 + 2n\pi}$ danno $0$ e $1$). **Non derivabile**. Continua ma non derivabile, e senza nemmeno derivate laterali.

**Esercizio 8** (livello 30). Dire se $g(x) = x^2\sin\frac1x$ per $x \neq 0$, $g(0) = 0$, è derivabile in $0$.

> [!example]- Soluzione
> 1. Rapporto incrementale: $\frac{h^2\sin\frac1h - 0}{h} = h\sin\frac1h$.
> 2. $\left|h\sin\frac1h\right| \leq |h| \to 0$: carabinieri, limite $0$.
> 3. **Derivabile** con $g'(0) = 0$.
>
> Il confronto con l'esercizio 7: un fattore $x$ in più trasforma "continua ma non derivabile" in "derivabile". Il grafico oscilla infinite volte vicino a $0$, ma dentro le parabole $\pm x^2$, che hanno tangente orizzontale.

**Esercizio 9.** Dire dove $f(x) = \sqrt{|x|}$ è derivabile.

> [!example]- Soluzione
> **Per $x_0 > 0$**: su un intorno $f(x) = \sqrt x$, e razionalizzando come nell'esercizio 2, $\frac{\sqrt{x_0 + h} - \sqrt{x_0}}{h} = \frac{1}{\sqrt{x_0 + h} + \sqrt{x_0}} \to \frac{1}{2\sqrt{x_0}}$: derivabile.
>
> **Per $x_0 < 0$**: $f(x) = \sqrt{-x}$ vicino a $x_0$, e lo stesso conto dà $-\frac{1}{2\sqrt{-x_0}}$: derivabile.
>
> **In $0$**: $\frac{\sqrt{|h|}}{h}$. Per $h > 0$ è $\frac{1}{\sqrt h} \to +\infty$; per $h < 0$ è $\frac{\sqrt{-h}}{h} = -\frac{1}{\sqrt{-h}} \to -\infty$. Non derivabile: è una **cuspide** (le due tangenti laterali sono verticali, una verso l'alto e una verso il basso).
>
> Risposta: derivabile su $\mathbb{R} \setminus \{0\}$.

---
title: Regole di derivazione (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-28
lezioni: []
ordine: 19
---

Esercizi tipo esame di [Regole di derivazione](/uni/analisi-1/regole-di-derivazione/). Testo in chiaro, soluzione chiusa: prima provaci da solo. Gli esercizi del <span class="src">V tutoraggio</span> sono dello stesso tipo.

## Crocette (stile parte 1)

**C1.** Sia $f(x) = x\vert x\vert$. Allora in $x_0 = 0$:

- a) $f$ non è continua
- b) $f$ è continua ma non derivabile, perché $\vert x\vert$ non è derivabile in $0$
- c) $f$ è derivabile e $f'(0) = 0$
- d) $f$ è derivabile e $f'(0) = 1$

> [!example]- Soluzione
> **c**. È l'esercizio della slide 29: $f = x^2$ a destra e $-x^2$ a sinistra, i due rapporti incrementali $\frac{h^2}{h}$ e $\frac{-h^2}{h}$ vanno entrambi a $0$. La b) è la trappola: un fattore non derivabile non rende non derivabile il prodotto.

**C2.** La derivata di $x^x$ in $x = 1$ vale:

- a) $0$
- b) $1$
- c) $2$
- d) $e$

> [!example]- Soluzione
> **b**. $x^x = e^{x\log x}$, quindi $D[x^x] = x^x(1 + \log x)$. In $1$: $1 \cdot (1 + 0) = 1$.

**C3.** Sia $g(x) = x^{3/2}\sin\frac1x$ per $x > 0$, $g(0) = 0$. Allora in $0$ (da destra):

- a) $g$ non è continua
- b) $g$ è continua ma non derivabile
- c) $g$ è derivabile ma $g'$ non è continua in $0$
- d) $g$ è derivabile e $g'$ è continua in $0$

> [!example]- Soluzione
> **c**. È la slide 30 con $\alpha = \frac32 \in (1, 2]$. Continua perché $\alpha > 0$ (carabinieri), derivabile perché $\alpha > 1$ ($h^{1/2}\sin\frac1h \to 0$), ma $g'(x) = \frac32 x^{1/2}\sin\frac1x - x^{-1/2}\cos\frac1x$ non ha limite in $0^+$.

**C4.** Sia $f(x) = x + e^x$, invertibile su $\mathbb{R}$. Allora $(f^{-1})'(1)$ vale:

- a) $1$
- b) $\frac12$
- c) $2$
- d) $\frac{1}{1 + e}$

> [!example]- Soluzione
> **b**. Serve l'$x_0$ con $f(x_0) = 1$: $x_0 = 0$, perché $0 + e^0 = 1$. $f'(x) = 1 + e^x$, $f'(0) = 2 \neq 0$, quindi $(f^{-1})'(1) = \frac{1}{f'(0)} = \frac12$. La d) usa $f'(1)$: è l'errore di calcolare $f'$ in $y_0$ invece che in $x_0$.

## Esercizi

**E1 (slide 28, per casa).** Calcolare $D[e^{2x}\cos\sqrt x]$.

> [!example]- Soluzione
> Leibniz con $f = e^{2x}$ e $g = \cos\sqrt x$, ognuna con la catena:
> - $f'(x) = e^{2x} \cdot 2$;
> - $g'(x) = -\sin\sqrt x \cdot \frac{1}{2\sqrt x}$.
>
> $$
> D[e^{2x}\cos\sqrt x] = 2e^{2x}\cos\sqrt x - e^{2x}\frac{\sin\sqrt x}{2\sqrt x} = e^{2x}\left(2\cos\sqrt x - \frac{\sin\sqrt x}{2\sqrt x}\right), \quad x > 0.
> $$
> In $x = 0$ la formula non vale ($\frac{1}{2\sqrt x}$): lì servirebbe il rapporto incrementale da destra.

**E2.** Calcolare le derivate di $\sqrt{1 + x^2}$, $\log(\cos x)$, $\arctan\frac1x$.

> [!example]- Soluzione
> Tutte con la catena, esterna in interna per derivata dell'interna.
> - $D[\sqrt{1 + x^2}] = \frac{1}{2\sqrt{1 + x^2}} \cdot 2x = \frac{x}{\sqrt{1 + x^2}}$.
> - $D[\log(\cos x)] = \frac{1}{\cos x} \cdot (-\sin x) = -\tan x$.
> - $D[\arctan\frac1x] = \frac{1}{1 + \frac{1}{x^2}} \cdot \left(-\frac{1}{x^2}\right) = -\frac{1}{x^2 + 1}$, per $x \neq 0$.

**E3.** Calcolare $D[(x^2 + 2)^{\sin x}]$.

> [!example]- Soluzione
> Base ed esponente dipendono da $x$: come $x^x$, si scrive $(x^2 + 2)^{\sin x} = e^{\sin x\log(x^2 + 2)}$.
> $$
> D = e^{\sin x\log(x^2 + 2)} \cdot D[\sin x\log(x^2 + 2)] = (x^2 + 2)^{\sin x}\left(\cos x\log(x^2 + 2) + \frac{2x\sin x}{x^2 + 2}\right).
> $$
> La derivata dell'esponente è Leibniz, con la catena su $\log(x^2 + 2)$.

**E4.** Scrivere l'equazione della retta tangente al grafico di $f(x) = e^{\arctan x}$ nel punto di ascissa $x_0 = 1$.

> [!example]- Soluzione
> - $f(1) = e^{\arctan 1} = e^{\pi/4}$.
> - $f'(x) = e^{\arctan x} \cdot \frac{1}{1 + x^2}$, quindi $f'(1) = \frac{e^{\pi/4}}{2}$.
>
> $$
> y = e^{\pi/4} + \frac{e^{\pi/4}}{2}(x - 1).
> $$

**E5 (7 punti).** Determinare $a, b \in \mathbb{R}$ tali che
$$
f(x) = \begin{cases} ax + b & x < 0 \\ e^{2x} & x \geq 0 \end{cases}
$$
sia continua e derivabile in $x = 0$.

> [!example]- Soluzione
> 1. **Continuità**: $\lim_{x \to 0^-}(ax + b) = b$, $f(0) = e^0 = 1$. Serve $b = 1$.
> 2. **Derivabilità**: con $b = 1$, rapporto incrementale da sinistra $\frac{ah + 1 - 1}{h} = a \to a$; da destra $\frac{e^{2h} - 1}{h} = 2 \cdot \frac{e^{2h} - 1}{2h} \to 2$. Serve $a = 2$.
>
> Con $a = 2$, $b = 1$ la tangente in $0$ è $y = 2x + 1$, la stessa retta del primo tratto. Senza $b = 1$ non si guarda nemmeno la derivata: non continua implica non derivabile.

**E6.** Studiare la derivabilità di $f(x) = \vert x\vert\sin x$ in $x_0 = 0$.

> [!example]- Soluzione
> Come $x\vert x\vert$: le regole non bastano perché $\vert x\vert$ non è derivabile in $0$, quindi rapporto incrementale.
> $$
> \lim_{h \to 0^+}\frac{h\sin h}{h} = \lim_{h \to 0^+}\sin h = 0, \qquad \lim_{h \to 0^-}\frac{-h\sin h}{h} = \lim_{h \to 0^-}(-\sin h) = 0.
> $$
> I due limiti coincidono: $f$ è derivabile in $0$ con $f'(0) = 0$.

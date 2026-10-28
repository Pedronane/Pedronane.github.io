---
title: Esercitazione 5 svolta
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: completa
data: 2026-10-19
lezioni:
  - 19 ott
ordine: 14
---

L'esercitazione del tutor del 19/10 (<span class="src">Esercitazione 5</span>, su Moodle "Esercitazione 5 - 19 ott 2026"), argomento di [Analisi Matematica 1](/uni/analisi-1/). Il tutor ha svolto le **slide 34-60 dei limiti di funzioni**, quelle che il prof ha saltato il 20/10: limiti delle elementari, polinomi e razionali, gerarchia degli infiniti per le funzioni, cambio di variabile, forme $f^g$, limiti notevoli. Da qui in poi questi strumenti si usano negli esercizi senza giri.

Il "menu del giorno" (<span class="src">p. 1</span>) aveva cinque voci: 0 una precisazione e 1 i limiti dalle slide (fatti), 2 un limite con parametro, 3 un limite di successione, 4 la continuità (non fatti). Nel PDF ci sono solo la 0, la 1 e due "altri limiti" (2.1, 2.2) non svolti a lezione: le voci 3 e 4 non ci sono.

Testo in chiaro, soluzione chiusa: prima provaci. La teoria sta in [Teoremi sui limiti di funzioni](/uni/analisi-1/teoremi-sui-limiti-di-funzioni/) e [Limiti di funzioni](/uni/analisi-1/limiti-di-funzioni/).

## 0. Una precisazione: monotone e sup

(<span class="src">p. 2</span>.) Non basta $f$ monotona crescente per avere $\sup f(x_n) = f(\sup x_n)$: serve anche che $f$ sia continua.

**E0.1 (controesempio del tutor).** Sia $f(x) = 0$ per $x < 1$ e $f(x) = 1$ per $x \geq 1$, e sia $A = \left\{1 - \frac1n : n \geq 1\right\}$. Confrontare $f(\sup A)$ e $\sup f(A)$.

> [!example]- Soluzione
> $f$ è crescente, continua su $(-\infty, 1)$ e su $(1, +\infty)$. In $x = 1$:
> $$
> \lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} 0 = 0, \qquad \lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} 1 = 1 = f(1),
> $$
> quindi in $1$ c'è una discontinuità di salto.
> - $\sup A = 1$ (si dimostra con le due condizioni del sup), quindi $f(\sup A) = f(1) = 1$.
> - $1 - \frac1n < 1$ per ogni $n$, quindi $f\left(1 - \frac1n\right) = 0$ e $\sup f(A) = \sup\{0\} = 0$.
>
> $0 \neq 1$: il salto sta proprio nel punto $\sup A$.

> [!abstract] Proposizione (non mostrata a lezione)
> Sia $f : (a, b) \to \mathbb{R}$ continua e monotona crescente, e sia $\{x_n\}_{n \in \mathbb{N}} \subseteq (a, b)$ limitata con $\sup\{x_n\} \in (a, b)$. Allora
> $$
> \sup\{f(x_n)\}_{n \in \mathbb{N}} = f\left(\sup\{x_n\}_{n \in \mathbb{N}}\right).
> $$

> [!note]- Dimostrazione (tutor)
> Sia $s = \sup\{x_n\}$. Le due condizioni del sup per $f(s)$:
> 1. **$f(s)$ è un maggiorante** di $\{f(x_n)\}$: $s \geq x_n$ per ogni $n$ e $f$ è crescente, quindi $f(s) \geq f(x_n)$ per ogni $n$.
> 2. **$\forall \varepsilon > 0\ \exists \bar n$ con $f(s) - \varepsilon < f(x_{\bar n})$.** $f$ è continua in $s$: fissato $\varepsilon > 0$ esiste $\delta > 0$ tale che $\vert s - x\vert < \delta \Rightarrow \vert f(s) - f(x)\vert < \varepsilon$, in particolare $f(s) - \varepsilon < f(x)$. Basta allora un $\bar n$ con $\vert s - x_{\bar n}\vert < \delta$, cioè $x_{\bar n} - \delta < s < x_{\bar n} + \delta$:
>    - $s < x_{\bar n} + \delta$ vale per ogni $n$, perché $s \geq x_n$;
>    - $x_{\bar n} > s - \delta$: è la caratterizzazione del sup di $\{x_n\}$ con $\varepsilon' = \delta$. $\blacksquare$
>
> Il tutor scrive solo $\sup\{x_n\} \in (a, b)$: serve anche $x_n \in (a, b)$, se no $f(x_n)$ non è definita.

## 1. Limiti dalle slide 34-60

### Limiti delle funzioni elementari (slide 35-38)

(<span class="src">slide 35</span>.) Le slide elencano, senza dimostrazione, i limiti di potenze, esponenziali, logaritmi e funzioni trigonometriche nei punti del dominio e agli estremi: le elementari sono **continue nel loro dominio**. Le annotazioni del tutor:
- $\lim_{x \to x_0} x^\alpha = x_0^\alpha$ per $x_0 > 0$; "altrimenti la potenza non è definita".
- Per $\alpha < 0$: $\lim_{x \to +\infty} x^\alpha = \lim_{x \to +\infty}\frac{1}{x^{-\alpha}} = 0$.
- $\lim_{x \to (\pi/2)^-}\tan x = +\infty$, $\lim_{x \to (-\pi/2)^+}\tan x = -\infty$.

**E1 (slide 38).** Dimostrare che $\lim_{x \to +\infty}\sin x$ e $\lim_{x \to +\infty}\cos x$ non esistono.

> [!example]- Soluzione
> Criterio di non esistenza: due successioni che vanno a $+\infty$ con limiti diversi di $f$ (<span class="src">slide 38</span>).
> - $\sin$: con $x_k = \frac\pi2 + 2k\pi$ e $y_k = -\frac\pi2 + 2k\pi$, $\sin x_k = 1 \to 1$ e $\sin y_k = -1 \to -1$.
> - $\cos$: con $x_k = 2k\pi$ e $y_k = \pi + 2k\pi$, $\cos x_k = 1$ e $\cos y_k = -1$.

### Polinomi e razionali (slide 39-40)

Per $x \to \pm\infty$ si raccoglie il termine di grado più alto, sopra e sotto.

**E2 (slide 39).** Calcolare $\lim_{x \to -2}(x^3 + x^2 - 3x + 1)$, $\lim_{x \to +\infty}(3x^3 - x^2 + 1)$, $\lim_{x \to -\infty}(-2x^3 + x + 120)$.

> [!example]- Soluzione
> (<span class="src">slide 39</span>.)
> - Polinomio continuo, si sostituisce: $(-2)^3 + (-2)^2 - 3(-2) + 1 = -8 + 4 + 6 + 1 = 3$.
> - $[+\infty - \infty]$: $3x^3 - x^2 + 1 = x^3\left(3 - \frac1x + \frac{1}{x^3}\right) \to (+\infty) \cdot 3 = +\infty$.
> - $[+\infty - \infty]$: $-2x^3 + x + 120 = x^3\left(-2 + \frac{1}{x^2} + \frac{120}{x^3}\right) \to (-\infty) \cdot (-2) = +\infty$.

**E3 (slide 40).** Calcolare
$$
\lim_{x \to -\infty}\frac{3x^3 + 1}{x^2 + 2}, \qquad \lim_{x \to +\infty}\frac{3x^3 + 1}{x^4 - 10x + 1}, \qquad \lim_{x \to +\infty}\frac{6x^5 + 7x^2}{7x^5 - 4}.
$$

> [!example]- Soluzione
> (<span class="src">slide 40</span>.)
> $$
> \frac{3x^3 + 1}{x^2 + 2} = \frac{x^3\left(3 + \frac{1}{x^3}\right)}{x^2\left(1 + \frac{2}{x^2}\right)} = x \cdot \frac{3 + \frac{1}{x^3}}{1 + \frac{2}{x^2}} \to (-\infty) \cdot 3 = -\infty
> $$
> $$
> \frac{3x^3 + 1}{x^4 - 10x + 1} = \frac{x^3\left(3 + \frac{1}{x^3}\right)}{x^4\left(1 - \frac{10}{x^3} + \frac{1}{x^4}\right)} = \frac1x \cdot \frac{3 + \frac{1}{x^3}}{1 - \frac{10}{x^3} + \frac{1}{x^4}} \to 0 \cdot 3 = 0
> $$
> $$
> \frac{6x^5 + 7x^2}{7x^5 - 4} = \frac{x^5\left(6 + \frac{7}{x^3}\right)}{x^5\left(7 - \frac{4}{x^5}\right)} \to \frac67
> $$
> Grado sopra maggiore: $\pm\infty$; minore: $0$; uguale: rapporto dei coefficienti.

### La forma $\frac{1}{0}$ (slide 41)

**E4.** Calcolare $\lim_{x \to 3}\frac{1}{(x - 3)^4}$ e $\lim_{x \to 3}\frac{1}{(x - 3)^3}$.

> [!example]- Soluzione
> (<span class="src">slide 41</span>.) $\frac10$ non è indeterminata, ma conta il **segno** del denominatore.
> - $(x - 3)^4 > 0$ da tutte e due le parti: $\lim_{x \to 3^\pm}\frac{1}{(x - 3)^4} = \frac{1}{0^+} = +\infty$, quindi il limite è $+\infty$.
> - $(x - 3)^3$ ha il segno di $x - 3$: $\lim_{x \to 3^-}\frac{1}{(x - 3)^3} = \frac{1}{(0^-)^3} = \frac{1}{0^-} = -\infty$, $\lim_{x \to 3^+} = \frac{1}{0^+} = +\infty$. Limiti laterali diversi: il limite **non esiste**.

### Altri esempi (slide 42)

**E5.** Calcolare
$$
\lim_{x \to 0}\frac{x^{2/3}}{x^2 + 3\sqrt[3]x + x}, \quad \lim_{x \to 0}x\sin\frac1x, \quad \lim_{x \to +\infty}(x - \sin x), \quad \lim_{x \to 0^+}\frac{x - 1}{\sin x}, \quad \lim_{x \to -\infty}\left(\frac1x - 2\right)x^3.
$$

> [!example]- Soluzione
> (<span class="src">slide 42</span>.)
> 1. $\left[\frac00\right]$, si raccoglie la potenza più bassa sotto, $x^{1/3}$:
> $$
> \frac{x^{2/3}}{x^{1/3}\left(x^{5/3} + 3 + x^{2/3}\right)} = \frac{x^{1/3}}{x^{5/3} + 3 + x^{2/3}} \to \frac03 = 0.
> $$
> 2. Carabinieri con $\left\vert\sin\frac1x\right\vert \leq 1$: per $x > 0$, $-x \leq x\sin\frac1x \leq x$; per $x < 0$, $-x \geq x\sin\frac1x \geq x$. Gli estremi vanno a $0$: il limite è $0$.
> 3. $[+\infty - \infty]$: $x - \sin x = x\left(1 - \frac{\sin x}{x}\right) \to +\infty \cdot (1 - 0) = +\infty$, perché $-\frac1x \leq \frac{\sin x}{x} \leq \frac1x$ (carabinieri).
> 4. Non indeterminata: $\frac{-1}{\sin 0^+} = \frac{-1}{0^+} = -\infty$.
> 5. $\left(\frac{1}{-\infty} - 2\right)(-\infty)^3 = (0^- - 2)(-\infty) = (-2)(-\infty) = +\infty$.

### Gerarchia degli infiniti per le funzioni (slide 43-44)

> [!abstract] Teorema (gerarchia degli infiniti, <span class="src">slide 43</span>)
> Si ha:
> $$
> \lim_{x \to +\infty}\frac{a^x}{x^\alpha} = +\infty \quad \text{per } \alpha > 0,\ a > 1, \qquad \lim_{x \to +\infty}\frac{x^\alpha}{(\log_b x)^\beta} = +\infty \quad \text{per } \alpha, \beta > 0,\ b > 1.
> $$

Il tutor la scrive come catena $(\log_b x)^\beta \ll x^\alpha \ll a^x$, e aggiunge che quindi anche $\frac{a^x}{(\log_b x)^\beta} \to +\infty$ (prodotto dei due rapporti). Definizioni: $f$ è un **infinito** per $x \to x_0$ se $\lim f = \pm\infty$, un **infinitesimo** se $\lim f = 0$; $x^3$ è infinito per $x \to +\infty$ e infinitesimo per $x \to 0$.

**E6 (slide 44).** Calcolare per $x \to +\infty$:
$$
\frac{2^x}{x^3}, \qquad \frac{x^3}{2^x}, \qquad \frac{(\log x)^2}{\sqrt x}, \qquad \frac{e^{4x}}{\log x^7}, \qquad \frac{\sqrt x}{\log(1 + 3^x)}.
$$

> [!example]- Soluzione
> (<span class="src">slide 44</span>.)
> - $\frac{2^x}{x^3} \to +\infty$ (gerarchia, $a = 2$, $\alpha = 3$).
> - $\frac{x^3}{2^x} = \frac{1}{2^x/x^3} \to \frac{1}{+\infty} = 0$.
> - $\frac{(\log x)^2}{\sqrt x} = \frac{1}{\sqrt x/(\log x)^2} \to 0$ (gerarchia, $\alpha = \frac12$, $\beta = 2$).
> - $\frac{e^{4x}}{\log x^7} = \frac17 \cdot \frac{e^{4x}}{\log x} \to +\infty$ (esponenziale contro logaritmo).
> - **Attenzione**: il $\log$ sotto non va a confronto diretto. Si raccoglie $3^x$ dentro il logaritmo:
> $$
> \frac{\sqrt x}{\log\left(3^x\left(1 + \frac{1}{3^x}\right)\right)} = \frac{\sqrt x}{x\log 3 + \log\left(1 + \frac{1}{3^x}\right)} = \frac{\sqrt x}{x} \cdot \frac{1}{\log 3 + \frac{\log(1 + 3^{-x})}{x}} \to 0 \cdot \frac{1}{\log 3} = 0.
> $$
> Nel PDF si legge $1 + \frac{1}{3x}$ (forse un esponente scritto in linea): è $1 + \frac{1}{3^x}$, perché $3^x\left(1 + \frac{1}{3^x}\right) = 3^x + 1$.

### Cambio di variabile (slide 46-49)

> [!abstract] Teorema (cambio di variabile nei limiti, <span class="src">slide 46</span>)
> Supponiamo che esista (finito o infinito) il limite $\lim_{x \to x_0} f(x) = y_0$. Sia poi $g$ una funzione definita in un intorno di $y_0$ tale che:
> - se $y_0 \in \mathbb{R}$, $g$ è continua in $y_0$;
> - se $y_0 = \pm\infty$, esiste (finito o infinito) $\lim_{y \to y_0} g(y)$.
>
> Allora $\lim_{x \to x_0} g(f(x)) = \lim_{y \to y_0} g(y)$.

Il passo da scrivere ogni volta: “$y = \dots$, per $x \to x_0$ si ha $y \to y_0$".

**E7 (slide 47).** Calcolare $\lim e^{1/x}$ per $x \to 0^+$, $x \to 0^-$, $x \to +\infty$.

> [!example]- Soluzione
> (<span class="src">slide 47</span>.) $y = \frac1x$.
> - $x \to 0^+ \Rightarrow y \to \frac{1}{0^+} = +\infty$: $\lim_{y \to +\infty}e^y = +\infty$.
> - $x \to 0^- \Rightarrow y \to \frac{1}{0^-} = -\infty$: $\lim_{y \to -\infty}e^y = 0$.
> - $x \to +\infty \Rightarrow y \to 0^+$: $\lim_{y \to 0^+}e^y = e^0 = 1$.

**E8 (slide 48).** Calcolare $\lim_{x \to 1^+}\arctan\frac{1}{x - 1}$ e $\lim_{x \to +\infty}\log\sin\frac1x$.

> [!example]- Soluzione
> (<span class="src">slide 48</span>.)
> - $t = \frac{1}{x - 1}$, $x \to 1^+ \Rightarrow t \to \frac{1}{0^+} = +\infty$: $\lim_{t \to +\infty}\arctan t = \frac\pi2$.
> - $y = \sin\frac1x$, $x \to +\infty \Rightarrow \frac1x \to 0^+ \Rightarrow y \to \sin 0^+ = 0^+$: $\lim_{y \to 0^+}\log y = -\infty$.

**E9 (slide 49).** Calcolare $\lim_{x \to 0^+}x^\alpha\log x$ ($\alpha > 0$) e $\lim_{x \to 0^+}x^2e^{1/x}$.

> [!example]- Soluzione
> (<span class="src">slide 49</span>.) Forma $0 \cdot \infty$: con $t = \frac1x$ si torna alla gerarchia.
> - $t = \frac1x$, $x \to 0^+ \Rightarrow t \to +\infty$, $x = \frac1t$:
> $$
> \lim_{x \to 0^+}x^\alpha\log x = \lim_{t \to +\infty}\left(\frac1t\right)^\alpha\log\frac1t = \lim_{t \to +\infty}\frac{\log 1 - \log t}{t^\alpha} = \lim_{t \to +\infty}\left(-\frac{\log t}{t^\alpha}\right) = 0.
> $$
> - $y = \frac1x \to +\infty$, $x = \frac1y$:
> $$
> \lim_{x \to 0^+}x^2e^{1/x} = \lim_{y \to +\infty}\left(\frac1y\right)^2e^y = \lim_{y \to +\infty}\frac{e^y}{y^2} = +\infty.
> $$

### Limiti della forma $f(x)^{g(x)}$ (slide 50)

(<span class="src">slide 50</span>.) Nuove forme indeterminate: $1^\infty$, $0^0$, $\infty^0$. Si scrive
$$
f(x)^{g(x)} = e^{\log f(x)^{g(x)}} = e^{g(x)\log f(x)}, \qquad \lim_{x \to x_0}f(x)^{g(x)} = e^{\lim_{x \to x_0}g(x)\log f(x)}
$$
(cambio di variabile con $g(y) = e^y$).

**E10.** Calcolare $\lim_{x \to 0^+}x^x$.

> [!example]- Soluzione
> $$
> \lim_{x \to 0^+}x^x = \lim_{x \to 0^+}e^{\log x^x} = \lim_{x \to 0^+}e^{x\log x} = e^0 = 1,
> $$
> perché $x\log x \to 0$ (E9 con $\alpha = 1$).

### Limiti notevoli (slide 52-56)

> [!note]- $\frac{\sin x}{x} \to 1$, dimostrazione (<span class="src">slide 52</span>, "non completata a lezione")
> Per $x \to 0^+$ ($0 < x < \frac\pi2$), dal confronto fra le aree nella circonferenza goniometrica (in radianti $x$ è la misura dell'arco):
> $$
> \sin x < x < \tan x \;\Longrightarrow\; 1 < \frac{x}{\sin x} < \frac{1}{\cos x} \qquad (\text{divido per } \sin x > 0).
> $$
> Per $x \to 0^+$, $\frac{1}{\cos x} \to 1$: carabinieri, $\frac{x}{\sin x} \to 1$, quindi $\frac{\sin x}{x} \to 1$.
> Per $x \to 0^-$: con $t = -x \to 0^+$, $\frac{\sin x}{x} = \frac{\sin(-t)}{-t} = \frac{-\sin t}{-t} = \frac{\sin t}{t} \to 1$.

**E11 (slide 53).** Ricavare $\lim_{x \to 0}\frac{1 - \cos x}{x^2}$ e $\lim_{x \to 0}\frac{\tan x}{x}$.

> [!example]- Soluzione
> (<span class="src">slide 53</span>.)
> $$
> \frac{1 - \cos x}{x^2} = \frac{(1 - \cos x)(1 + \cos x)}{x^2(1 + \cos x)} = \frac{1 - \cos^2 x}{x^2} \cdot \frac{1}{1 + \cos x} = \left(\frac{\sin x}{x}\right)^2 \cdot \frac{1}{1 + \cos x} \to 1 \cdot \frac12 = \frac12
> $$
> $$
> \frac{\tan x}{x} = \frac{\sin x}{x} \cdot \frac{1}{\cos x} \to 1 \cdot 1 = 1
> $$

**Nepero per le funzioni** (<span class="src">slide 54</span>). Da $\left(1 + \frac{1}{a_n}\right)^{a_n} \to e$ per ogni successione divergente e dalla caratterizzazione con le successioni:
$$
\lim_{x \to +\infty}\left(1 + \frac1x\right)^x = e, \qquad \lim_{x \to -\infty}\left(1 + \frac1x\right)^x = e, \qquad \lim_{x \to 0}(1 + x)^{1/x} = e.
$$
La terza con $t = \frac1x$. Il tutor scrive “$x \to +\infty \Rightarrow t \to 0$": è $t \to 0^+$; il limite da sinistra viene dal caso $x \to -\infty$ ($t \to 0^-$), e servono tutti e due.

> [!note]- La catena dei limiti notevoli (<span class="src">slide 55</span>)
> $$
> \frac{\log(1 + x)}{x} = \log(1 + x)^{1/x} \to \log e = 1
> $$
> $$
> \frac{e^x - 1}{x} \overset{y = e^x - 1}{=} \frac{y}{\log(1 + y)} \to \frac11 = 1 \qquad (x = \log(1 + y),\ y \to 0)
> $$
> $$
> \frac{a^x - 1}{x} = \frac{e^{x\log a} - 1}{x\log a} \cdot \log a \overset{y = x\log a}{\to} 1 \cdot \log a = \log a
> $$
> $$
> \frac{(1 + x)^\alpha - 1}{x} = \frac{e^{\alpha\log(1 + x)} - 1}{\alpha\log(1 + x)} \cdot \frac{\alpha\log(1 + x)}{x} \to 1 \cdot \alpha = \alpha \qquad (\alpha \neq 0)
> $$
> Le ultime due il tutor non le ha finite: le ha fatte il prof il 20/10 ([Teoremi sui limiti di funzioni](/uni/analisi-1/teoremi-sui-limiti-di-funzioni/)).

> [!abstract] I limiti notevoli (<span class="src">slide 56</span>)
> $$
> \lim_{x \to 0}\frac{\sin x}{x} = 1, \quad \lim_{x \to 0}\frac{1 - \cos x}{x^2} = \frac12, \quad \lim_{x \to 0}\frac{\tan x}{x} = 1, \quad \lim_{x \to \pm\infty}\left(1 + \frac1x\right)^x = e,
> $$
> $$
> \lim_{x \to 0}\frac{\log(1 + x)}{x} = 1, \quad \lim_{x \to 0}\frac{e^x - 1}{x} = 1, \quad \lim_{x \to 0}\frac{a^x - 1}{x} = \log a \ (a > 0), \quad \lim_{x \to 0}\frac{(1 + x)^\alpha - 1}{x} = \alpha \ (\alpha \in \mathbb{R}).
> $$

Con il cambio di variabile (<span class="src">slide 57</span>): se $f(x) \to 0$ e $f(x) \neq 0$ vicino a $x_0$, allora $\frac{\sin f(x)}{f(x)} \to 1$, $\frac{e^{f(x)} - 1}{f(x)} \to 1$, $\frac{\log(1 + f(x))}{f(x)} \to 1$ e così via. Il tutor lo scrive con il "quadratino": $\frac{\sin\square}{\square} \to 1$ per $\square \to 0$, e lo **stesso** $\square$ sopra e sotto.

**E12 (slide 57).** Calcolare $\lim_{x \to 2}\frac{\sin(x - 2)}{x - 2}$, $\lim_{x \to +\infty}\frac{e^{1/x} - 1}{1/x}$, $\lim_{x \to 0}\frac{\sin(3x)}{x}$.

> [!example]- Soluzione
> - $y = x - 2 \to 0$: $\lim_{y \to 0}\frac{\sin y}{y} = 1$.
> - $y = \frac1x \to 0^+$: $\lim_{y \to 0^+}\frac{e^y - 1}{y} = 1$.
> - Manca il $3$ sotto: $\frac{\sin(3x)}{x} = \frac{\sin(3x)}{3x} \cdot 3 \to 1 \cdot 3 = 3$.

**E13 (slide 58).** Calcolare $\lim_{x \to 0}\frac{\log(1 + 2x)}{\sin(3x)}$ e $\lim_{x \to +\infty}x\log\frac{x + 3}{x + 1}$.

> [!example]- Soluzione
> (<span class="src">slide 58</span>.)
> - $\left[\frac00\right]$, con $2x \to 0$ e $3x \to 0$:
> $$
> \frac{\log(1 + 2x)}{\sin(3x)} = \frac{\log(1 + 2x)}{2x} \cdot 2x \cdot \frac{1}{\frac{\sin(3x)}{3x} \cdot 3x} = \underbrace{\frac{\log(1 + 2x)}{2x}}_{\to 1} \cdot \underbrace{\frac{1}{\frac{\sin(3x)}{3x}}}_{\to 1} \cdot \frac{2x}{3x} \to \frac23
> $$
> - $[+\infty \cdot \log 1] = [+\infty \cdot 0]$. Si scrive l'argomento come $1 + \square$: $\frac{x + 3}{x + 1} = \frac{x + 1 + 2}{x + 1} = 1 + \frac{2}{x + 1}$, con $\square = \frac{2}{x + 1} \to 0$:
> $$
> x\log\left(1 + \frac{2}{x + 1}\right) = \frac{\log\left(1 + \frac{2}{x + 1}\right)}{\frac{2}{x + 1}} \cdot \frac{2x}{x + 1} \to 1 \cdot 2 = 2
> $$

**E14 (slide 59).** Calcolare $\lim_{x \to +\infty}\left(\frac{x^2 + 3}{x^2 + 2}\right)^{2x^2}$.

> [!example]- Soluzione
> (<span class="src">slide 59</span>.) $[1^{+\infty}]$. Il tutor lo fa in due modi.
>
> **Modo 1, Nepero** ($\left(1 + \frac1\star\right)^\star \to e$ per $\star \to +\infty$):
> $$
> \left(\frac{x^2 + 2 + 1}{x^2 + 2}\right)^{2x^2} = \left(1 + \frac{1}{x^2 + 2}\right)^{2x^2} = \left[\left(1 + \frac{1}{x^2 + 2}\right)^{x^2 + 2}\right]^{\frac{2x^2}{x^2 + 2}} \to e^2
> $$
> perché la base va a $e$ e l'esponente $\frac{2x^2}{x^2 + 2} \to 2$.
>
> **Modo 2, base $e$**:
> $$
> e^{2x^2\log\left(1 + \frac{1}{x^2 + 2}\right)} = e^{\frac{\log\left(1 + \frac{1}{x^2 + 2}\right)}{\frac{1}{x^2 + 2}} \cdot \frac{2x^2}{x^2 + 2}} \to e^{1 \cdot 2} = e^2
> $$

**E15 (slide 60).** Calcolare $\lim_{x \to 0}\frac{\log(5x^2 - 3x + 2^x) + \tan x}{\sin(3x)}$.

> [!example]- Soluzione
> (<span class="src">slide 60</span>.) $\left[\frac00\right]$: $5x^2 - 3x + 2^x \to 1$. Raccolgo $2^x$ dentro il logaritmo, così resta $\log(1 + \square)$:
> $$
> \log\left(2^x\left[1 + \frac{5x^2 - 3x}{2^x}\right]\right) = x\log 2 + \log\left(1 + \frac{5x^2 - 3x}{2^x}\right), \qquad \square = \frac{5x^2 - 3x}{2^x} \to 0.
> $$
> Moltiplico e divido ogni pezzo per quello che manca:
> $$
> \frac{x\log 2 + \frac{\log(1 + \square)}{\square} \cdot \frac{5x^2 - 3x}{2^x} + \frac{\tan x}{x} \cdot x}{\frac{\sin(3x)}{3x} \cdot 3x} = \frac{x\left[\log 2 + \frac{\log(1 + \square)}{\square} \cdot \frac{5x - 3}{2^x} + \frac{\tan x}{x}\right]}{\frac{\sin(3x)}{3x} \cdot 3x} \to \frac{\log 2 + 1 \cdot (-3) + 1}{3} = \frac{\log 2 - 2}{3}.
> $$
> Controllo: $\frac{\log 2 - 2}{3} \approx -0{,}436$.

## 2. Altri limiti (non svolti a lezione)

(<span class="src">p. 30</span>.)

**2.1.** Calcolare $\lim_{x \to 0}\frac{\log(\cos(e^x - 1))}{x^2}$.

> [!example]- Soluzione
> $\left[\frac00\right]$. Tre limiti notevoli uno dentro l'altro: $\square = \cos(e^x - 1) - 1 \to 0$, $\heartsuit = e^x - 1 \to 0$, $\star = x \to 0$.
> $$
> \frac{\log\left(1 + \left(\cos(e^x - 1) - 1\right)\right)}{\cos(e^x - 1) - 1} \cdot \frac{\cos(e^x - 1) - 1}{(e^x - 1)^2} \cdot \left(\frac{e^x - 1}{x}\right)^2 \cdot \frac{x^2}{x^2} \to 1 \cdot \left(-\frac12\right) \cdot 1^2 = -\frac12
> $$
> - $\frac{\log(1 + \square)}{\square} \to 1$;
> - $\frac{\cos\heartsuit - 1}{\heartsuit^2} = -\frac{1 - \cos\heartsuit}{\heartsuit^2} \to -\frac12$;
> - $\frac{e^\star - 1}{\star} \to 1$.

**2.2.** Calcolare $\lim_{x \to 0}\frac{(e^{\sin x} - 1)\tan x}{1 - \cos x}$.

> [!example]- Soluzione
> $\left[\frac00\right]$. Con $\square = \sin x \to 0$:
> $$
> \frac{\frac{e^{\sin x} - 1}{\sin x} \cdot \frac{\sin x}{x} \cdot x \cdot \frac{\tan x}{x} \cdot x}{\frac{1 - \cos x}{x^2} \cdot x^2} = \frac{\overbrace{\frac{e^{\sin x} - 1}{\sin x}}^{\to 1} \cdot \overbrace{\frac{\sin x}{x}}^{\to 1} \cdot \overbrace{\frac{\tan x}{x}}^{\to 1}}{\underbrace{\frac{1 - \cos x}{x^2}}_{\to 1/2}} \to \frac{1}{1/2} = 2
> $$

## Errori tipici

- Credere che una funzione crescente "porti il sup nel sup" senza continuità (E0.1): il salto nel punto $\sup A$ rompe tutto.
- Trattare $\frac10$ come forma indeterminata, o dimenticarne il segno: $\frac{1}{(x - 3)^3}$ in $3$ non ha limite (E4).
- Confrontare $\sqrt x$ con $\log(1 + 3^x)$ come se fosse un logaritmo "lento": dentro c'è $3^x$, e $\log 3^x = x\log 3$ (E6).
- Usare un limite notevole con $\square$ diverso sopra e sotto: in $\frac{\sin(3x)}{x}$ manca un $3$ (E12).
- Dire “$1^\infty = 1$": è indeterminata (E14).
- Nel cambio di variabile, non scrivere dove va la nuova variabile, o sbagliarne il lato: $\frac{1}{0^-} = -\infty$ cambia il risultato di $e^{1/x}$ (E7).

## Domande

- Enuncia la gerarchia degli infiniti per le funzioni (slide 43). Per quali $\alpha$, $a$, $b$, $\beta$ vale?

- Enuncia il teorema del cambio di variabile nei limiti. Che ipotesi serve su $g$ se $y_0 \in \mathbb{R}$, e quale se $y_0 = \pm\infty$?

- Quali sono le forme indeterminate esponenziali, e come si riscrive $f(x)^{g(x)}$ per calcolarne il limite?

- Se $f$ è crescente e $\{x_n\}$ ha sup $s$ nel dominio, quando vale $\sup f(x_n) = f(s)$? Dai un controesempio quando manca un'ipotesi.

- Come si calcola il limite di un rapporto di polinomi per $x \to \pm\infty$? Che cosa decide il risultato?

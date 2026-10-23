---
title: Teoremi sui limiti di funzioni (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-20
lezioni: []
ordine: 14
---

Esercizi tipo esame di [Teoremi sui limiti di funzioni](/uni/analisi-1/teoremi-sui-limiti-di-funzioni/), dove stanno teoremi, limiti notevoli, metodo ed esempi del 20/10. Testo in chiaro, soluzione chiusa: prima provaci da solo. Gli esercizi 4-7, 9 e 10 sono del IV tutoraggio (<span class="src">tutoraggio 4, pagine 2-3</span>), che al 14/10 erano rimasti in sospeso in [Limiti di funzioni (esercizi)](/uni/analisi-1/limiti-di-funzioni-esercizi/).

## Crocette (stile parte 1)

**C1.** Sia $f$ tale che $f(x) > 0$ per ogni $x \in (-1, 1) \setminus \{0\}$, e $\displaystyle\lim_{x \to 0} f(x) = \ell$. Allora:

- a) $\ell > 0$
- b) $\ell \geq 0$
- c) $\ell$ può essere negativo
- d) $\ell = f(0)$

> [!example]- Soluzione
> **b**. È il punto 2 della permanenza del segno (slide 30) con l'avvertenza della slide: la disuguaglianza stretta non passa al limite. Controesempio ad a): $f(x) = x^2$, positiva per $x \neq 0$, con limite $0$. La c) contraddice il teorema. La d) confonde limite e valore: $f(0)$ potrebbe non esistere, e anche se esiste non entra nel limite.

**C2.** Quale delle seguenti **non** è una forma indeterminata?

- a) $+\infty - \infty$
- b) $0 \cdot \infty$
- c) $\dfrac{0}{\infty}$
- d) $\dfrac{\infty}{\infty}$

> [!example]- Soluzione
> **c**. Se $f \to 0$ e $g \to \pm\infty$, allora $\frac fg = f \cdot \frac1g \to 0 \cdot 0 = 0$: il risultato è sempre $0$, quindi la forma è determinata. Le altre tre sono nella lista della slide 32 (con $\frac00$).

**C3.** Sia $f : (0, 2) \to \mathbb{R}$ crescente. Quale affermazione è **sempre** vera?

- a) $\displaystyle\lim_{x \to 1} f(x)$ esiste
- b) $\displaystyle\lim_{x \to 1^-} f(x)$ esiste finito ed è $\leq f(1)$
- c) $\displaystyle\lim_{x \to 2^-} f(x)$ esiste finito
- d) $f$ è continua in $1$

> [!example]- Soluzione
> **b**. Per la slide 33 il limite sinistro in un punto interno esiste finito ed è $\sup_{(0, 1)} f$; poiché $f(x) \leq f(1)$ per $x < 1$, il sup è $\leq f(1)$. La a) e la d) cadono con un salto: $f(x) = \lfloor x \rfloor$ su $(0, 2)$ ha laterali $0$ e $1$ in $1$. La c) cade con $f(x) = \frac{1}{2 - x}$, crescente e $\to +\infty$ per $x \to 2^-$: agli estremi il limite esiste ma può essere infinito.

**C4.** $\displaystyle\lim_{x \to 0}\frac{\sin(5x)}{2x}$ vale:

- a) $1$
- b) $\frac25$
- c) $\frac52$
- d) non esiste

> [!example]- Soluzione
> **c**. $\frac{\sin(5x)}{2x} = \frac52 \cdot \frac{\sin(5x)}{5x}$ (moltiplico e divido per $5$), e $\frac{\sin(5x)}{5x} \to 1$ perché $5x \to 0$. La a) dimentica di aggiustare l'argomento; la b) è il reciproco. *Controllo*: $x = 0{,}001$: $\frac{\sin 0{,}005}{0{,}002} \approx 2{,}49999$.

**C5.** $\displaystyle\lim_{x \to 0}\frac{1 - \cos(2x)}{x^2}$ vale:

- a) $\frac12$
- b) $1$
- c) $2$
- d) $4$

> [!example]- Soluzione
> **c**. Con $\square = 2x \to 0$: $\frac{1 - \cos(2x)}{x^2} = \frac{1 - \cos(2x)}{(2x)^2} \cdot \frac{(2x)^2}{x^2} = \frac{1 - \cos(2x)}{4x^2} \cdot 4 \to \frac12 \cdot 4 = 2$. La a) usa il limite notevole senza adattare l'argomento; la d) dimentica il $\frac12$. *Controllo*: $x = 0{,}01$: $\frac{1 - \cos 0{,}02}{0{,}0001} \approx 1{,}99993$.

**C6.** $\displaystyle\lim_{x \to +\infty}\left(1 + \frac2x\right)^x$ vale:

- a) $1$
- b) $2$
- c) $e$
- d) $e^2$

> [!example]- Soluzione
> **d**. Forma $1^\infty$. Con $t = \frac x2 \to +\infty$: $\left(1 + \frac2x\right)^x = \left(1 + \frac1t\right)^{2t} = \left[\left(1 + \frac1t\right)^t\right]^2 \to e^2$. La a) tratta $1^\infty$ come $1$. *Controllo*: $x = 10^4$: $(1{,}0002)^{10\,000} \approx 7{,}386$, ed $e^2 \approx 7{,}389$.

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, scrivi il tipo e il teorema che pensi di usare.

### Carabinieri e algebra dei limiti

**Esercizio 1.** Calcolare $\displaystyle\lim_{x \to +\infty}\frac{x\cos x}{x^2 + 1}$.

> [!example]- Soluzione
> **Come si riconosce**: c'è un $\cos x$ con $x \to +\infty$, che non ha limite ma è limitato. **Metodo**: carabinieri.
>
> 1. $-1 \leq \cos x \leq 1$ per ogni $x$.
> 2. Per $x > 0$ moltiplico per $\frac{x}{x^2 + 1} > 0$ (il verso resta): $-\frac{x}{x^2 + 1} \leq \frac{x\cos x}{x^2 + 1} \leq \frac{x}{x^2 + 1}$.
> 3. $\frac{x}{x^2 + 1} = \frac{1}{x + \frac1x}$ (divido sopra e sotto per $x$), e il denominatore $x + \frac1x \to +\infty$, quindi $\frac{x}{x^2 + 1} \to 0$. Lo stesso per $-\frac{x}{x^2 + 1}$.
> 4. Per i carabinieri (slide 31) il limite è $0$. $\blacksquare$
>
> **Controllo**: $x = 100$: $\frac{100\cos 100}{10\,001} \approx 0{,}0086$, piccolo come $\frac{1}{100}$.

**Esercizio 2.** Calcolare $\displaystyle\lim_{x \to +\infty}\frac{3x + \sin x}{x - \cos x}$.

> [!example]- Soluzione
> **Come si riconosce**: forma $\frac\infty\infty$ (numeratore $\geq 3x - 1 \to +\infty$, denominatore $\geq x - 1 \to +\infty$). **Metodo**: raccolgo $x$, poi seno e coseno diventano "limitata per infinitesima".
>
> 1. $\frac{3x + \sin x}{x - \cos x} = \frac{x\left(3 + \frac{\sin x}{x}\right)}{x\left(1 - \frac{\cos x}{x}\right)} = \frac{3 + \frac{\sin x}{x}}{1 - \frac{\cos x}{x}}$ per $x > 1$.
> 2. $\frac{\sin x}{x} \to 0$: $-\frac1x \leq \frac{\sin x}{x} \leq \frac1x$ e carabinieri. Allo stesso modo $\frac{\cos x}{x} \to 0$.
> 3. Algebra dei limiti (slide 32): $\frac{3 + 0}{1 - 0} = 3$. $\blacksquare$
>
> **Controllo**: $x = 1000$: $\frac{3000 + \sin 1000}{1000 - \cos 1000} \approx 3{,}003$.

### Limiti notevoli

**Esercizio 3.** Calcolare (esempi della slide 57) $\displaystyle\lim_{x \to 2}\frac{\sin(x - 2)}{x - 2}$ e $\displaystyle\lim_{x \to +\infty} x\left(e^{1/x} - 1\right)$.

> [!example]- Soluzione
> **Come si riconosce**: un limite notevole "spostato": l'oggetto che va a $0$ non è $x$.
>
> **Primo.** Pongo $y = x - 2$; $y \to 0$ per $x \to 2$, e $y \neq 0$ per $x \neq 2$. Il limite diventa $\lim_{y \to 0}\frac{\sin y}{y} = 1$.
>
> **Secondo.** È una forma $\infty \cdot 0$ ($e^{1/x} \to e^0 = 1$). Pongo $y = \frac1x$; $y \to 0^+$ per $x \to +\infty$. Allora $x = \frac1y$ e il limite diventa $\lim_{y \to 0^+}\frac{e^y - 1}{y} = 1$.
>
> **Controllo**: $x = 1000$: $1000\left(e^{0{,}001} - 1\right) \approx 1{,}0005$.

**Esercizio 4** (IV tutoraggio, es. 3.15). Calcolare $\displaystyle\lim_{x \to 1}\frac{\sin(\pi x)}{x - 1}$.

> [!example]- Soluzione
> **Come si riconosce**: $\frac00$ (perché $\sin\pi = 0$), con un seno. Ma l'argomento $\pi x \to \pi$, non a $0$: **non** è ancora un limite notevole. Si sposta il punto in $0$.
>
> 1. Pongo $t = x - 1$; $t \to 0$ per $x \to 1$. Allora $\pi x = \pi t + \pi$.
> 2. $\sin(\pi t + \pi) = -\sin(\pi t)$ (formula $\sin(\alpha + \pi) = -\sin\alpha$, [Funzioni elementari](/uni/analisi-1/funzioni-elementari/)).
> 3. Il limite diventa $\lim_{t \to 0}\frac{-\sin(\pi t)}{t} = -\pi \cdot \lim_{t \to 0}\frac{\sin(\pi t)}{\pi t}$ (moltiplico e divido per $\pi$).
> 4. $\pi t \to 0$, quindi $\frac{\sin(\pi t)}{\pi t} \to 1$. Risultato: $-\pi$. $\blacksquare$
>
> **Controllo**: $x = 1{,}001$: $\frac{\sin(1{,}001\pi)}{0{,}001} \approx -3{,}1416$. Il segno meno si vede anche dal grafico: $\sin(\pi x)$ è positivo prima di $1$ e negativo dopo, mentre $x - 1$ fa il contrario.

**Esercizio 5** (IV tutoraggio, es. 3.13). Calcolare $\displaystyle\lim_{x \to 0}\frac{e^x - e^{-x}}{\tan x}$.

> [!example]- Soluzione
> **Come si riconosce**: $\frac00$ con esponenziali e tangente. **Metodo**: scrivo il numeratore come differenza di due “$e^\square - 1$", e divido tutto per $x$.
>
> 1. $e^x - e^{-x} = (e^x - 1) - (e^{-x} - 1)$ (aggiungo e tolgo $1$).
> 2. Divido sopra e sotto per $x \neq 0$: $\frac{e^x - e^{-x}}{\tan x} = \frac{\frac{e^x - 1}{x} - \frac{e^{-x} - 1}{x}}{\frac{\tan x}{x}}$.
> 3. $\frac{e^x - 1}{x} \to 1$.
> 4. $\frac{e^{-x} - 1}{x} = -\frac{e^{-x} - 1}{-x} \to -1$ (argomento $-x \to 0$, moltiplico e divido per $-1$).
> 5. $\frac{\tan x}{x} \to 1$.
> 6. Algebra dei limiti: $\frac{1 - (-1)}{1} = 2$. $\blacksquare$
>
> **Controllo**: $x = 0{,}01$: $\frac{e^{0{,}01} - e^{-0{,}01}}{\tan 0{,}01} \approx \frac{0{,}0200003}{0{,}0100003} \approx 1{,}99997$.

**Esercizio 6** (IV tutoraggio, es. 3.7). Calcolare $\displaystyle\lim_{x \to 0}\frac{(1 - \cos x)^2}{2x^3\sin x}$.

> [!example]- Soluzione
> **Come si riconosce**: $\frac00$; $1 - \cos x$ "vale circa $\frac{x^2}{2}$", quindi il numeratore circa $\frac{x^4}{4}$; $\sin x$ circa $x$, quindi il denominatore circa $2x^4$. Ci si aspetta $\frac{1/4}{2} = \frac18$.
>
> 1. $(1 - \cos x)^2 = \left(\frac{1 - \cos x}{x^2}\right)^2 \cdot x^4$ (moltiplico e divido per $x^4 = (x^2)^2$).
> 2. $2x^3\sin x = 2x^4 \cdot \frac{\sin x}{x}$ (moltiplico e divido per $x$).
> 3. Il rapporto è $\frac{\left(\frac{1 - \cos x}{x^2}\right)^2 x^4}{2x^4\frac{\sin x}{x}} = \frac12 \cdot \left(\frac{1 - \cos x}{x^2}\right)^2 \cdot \frac{1}{\frac{\sin x}{x}}$ (semplifico $x^4$).
> 4. $\frac{1 - \cos x}{x^2} \to \frac12$, al quadrato $\frac14$; $\frac{\sin x}{x} \to 1$.
> 5. Risultato: $\frac12 \cdot \frac14 \cdot 1 = \frac18$. $\blacksquare$
>
> **Controllo**: $x = 0{,}01$ dà $0{,}12500000$.

**Esercizio 7** (IV tutoraggio, es. 3.8). Calcolare $\displaystyle\lim_{x \to 0}\frac{e^{-2x^2} - 1}{1 - \cos(2x)}$.

> [!example]- Soluzione
> **Come si riconosce**: $\frac00$; numeratore con $\square = -2x^2$, denominatore con $\square = 2x$.
>
> 1. $e^{-2x^2} - 1 = \frac{e^{-2x^2} - 1}{-2x^2} \cdot (-2x^2)$, e $\frac{e^{-2x^2} - 1}{-2x^2} \to 1$ perché $-2x^2 \to 0$.
> 2. $1 - \cos(2x) = \frac{1 - \cos(2x)}{(2x)^2} \cdot 4x^2$, e $\frac{1 - \cos(2x)}{(2x)^2} \to \frac12$ perché $2x \to 0$.
> 3. Il rapporto è $\frac{\frac{e^{-2x^2} - 1}{-2x^2}}{\frac{1 - \cos(2x)}{(2x)^2}} \cdot \frac{-2x^2}{4x^2}$, e $\frac{-2x^2}{4x^2} = -\frac12$.
> 4. Risultato: $\frac{1}{1/2} \cdot \left(-\frac12\right) = 2 \cdot \left(-\frac12\right) = -1$. $\blacksquare$
>
> **Controllo**: $x = 0{,}01$ dà $\approx -0{,}99993$. Il segno torna: il numeratore è negativo ($e^{-2x^2} < 1$), il denominatore positivo.

**Esercizio 8** (lasciato dal prof il 20/10, "completare per casa, sol $= n$"). Calcolare $\displaystyle\lim_{x \to 0}\frac{(1 + x)^n - 1}{x}$ per $n \in \mathbb{N}$, $n \geq 1$, **senza** usare il limite notevole B.

> [!example]- Soluzione
> **Come si riconosce**: è il B con $\alpha = n$; il prof chiede di farlo con il binomio, come per $\alpha = 2$.
>
> 1. Binomio di Newton: $(1 + x)^n = \sum_{k=0}^{n}\binom nk x^k = 1 + nx + \binom n2 x^2 + \dots + x^n$.
> 2. $(1 + x)^n - 1 = nx + \binom n2 x^2 + \dots + x^n$ (il termine $k = 0$ è $1$ e si cancella).
> 3. Divido per $x \neq 0$: $\frac{(1 + x)^n - 1}{x} = n + \binom n2 x + \binom n3 x^2 + \dots + x^{n-1}$.
> 4. Ogni termine dopo il primo contiene una potenza di $x$ con esponente $\geq 1$, quindi tende a $0$; sono un numero **finito** ($n - 1$) di termini, quindi l'algebra dei limiti si applica.
> 5. Risultato: $n$. $\blacksquare$
>
> **Controllo**: $n = 3$: $\frac{(1 + x)^3 - 1}{x} = 3 + 3x + x^2 \to 3$. Il passo 4 è il punto delicato: con infiniti termini l'algebra dei limiti non varrebbe.

**Esercizio 9** (IV tutoraggio, es. 3.11). Calcolare $\displaystyle\lim_{x \to +\infty}\left(1 + \frac{x - 5}{25 - x^2}\right)^x$.

> [!example]- Soluzione
> **Come si riconosce**: la frazione $\frac{x - 5}{25 - x^2} \to 0$ (grado 1 su grado 2), quindi la base $\to 1$ e l'esponente $\to +\infty$: forma $1^\infty$. **Metodo**: Nepero.
>
> 1. Semplifico: $25 - x^2 = (5 - x)(5 + x) = -(x - 5)(x + 5)$, quindi per $x \neq 5$ $\frac{x - 5}{25 - x^2} = -\frac{1}{x + 5}$.
> 2. La funzione è $\left(1 - \frac{1}{x + 5}\right)^x$.
> 3. Pongo $t = -(x + 5)$; $t \to -\infty$ per $x \to +\infty$. Allora $-\frac{1}{x + 5} = \frac1t$ e $x = -t - 5$.
> 4. $\left(1 + \frac1t\right)^{-t - 5} = \left[\left(1 + \frac1t\right)^t\right]^{-1} \cdot \left(1 + \frac1t\right)^{-5}$ (proprietà delle potenze).
> 5. $\left(1 + \frac1t\right)^t \to e$ (Nepero per $t \to -\infty$, slide 54), quindi il primo fattore $\to e^{-1}$; $\left(1 + \frac1t\right)^{-5} \to 1^{-5} = 1$.
> 6. Risultato: $e^{-1} = \frac1e$. $\blacksquare$
>
> **Controllo**: $x = 1000$: $\left(1 - \frac{1}{1005}\right)^{1000} \approx 0{,}3695$, e $\frac1e \approx 0{,}3679$.

**Esercizio 10** (IV tutoraggio, es. 4.1, livello 30). Calcolare, al variare di $\alpha > 0$, $\displaystyle\lim_{x \to 0^+}\frac{\sqrt{\sin(\pi x^\alpha)}}{1 - \cos(3\sqrt x)}$.

> [!example]- Soluzione
> **Come si riconosce**: $\frac00$ con parametro. **Metodo**: si sostituisce ogni pezzo con la sua "potenza equivalente" tramite i limiti notevoli, e alla fine si confrontano gli esponenti di $x$.
>
> **Dominio vicino a $0^+$.** Per $\alpha > 0$, $x^\alpha \to 0$, quindi $\pi x^\alpha \in (0, \pi)$ per $x$ piccolo e $\sin(\pi x^\alpha) > 0$: la radice è definita. Il denominatore è $> 0$ per $0 < 3\sqrt x < 2\pi$.
>
> 1. *Numeratore.* $\sin(\pi x^\alpha) = \frac{\sin(\pi x^\alpha)}{\pi x^\alpha} \cdot \pi x^\alpha$, con $\frac{\sin(\pi x^\alpha)}{\pi x^\alpha} \to 1$ ($\pi x^\alpha \to 0$). Quindi $\sqrt{\sin(\pi x^\alpha)} = \sqrt{\frac{\sin(\pi x^\alpha)}{\pi x^\alpha}} \cdot \sqrt\pi\, x^{\alpha/2}$.
> 2. *Denominatore.* $1 - \cos(3\sqrt x) = \frac{1 - \cos(3\sqrt x)}{(3\sqrt x)^2} \cdot 9x$, con la frazione $\to \frac12$ ($3\sqrt x \to 0$).
> 3. *Il rapporto*: $\frac{\sqrt{\frac{\sin(\pi x^\alpha)}{\pi x^\alpha}}}{\frac{1 - \cos(3\sqrt x)}{9x}} \cdot \frac{\sqrt\pi\, x^{\alpha/2}}{9x}$. Il primo fattore $\to \frac{\sqrt 1}{1/2} = 2$. Resta $\frac{2\sqrt\pi}{9}\, x^{\frac\alpha2 - 1}$.
> 4. *Casi*, secondo il segno dell'esponente $\frac\alpha2 - 1$:
>    - $\alpha > 2$: esponente positivo, $x^{\frac\alpha2 - 1} \to 0$; limite $0$;
>    - $\alpha = 2$: esponente $0$, $x^0 = 1$; limite $\frac{2\sqrt\pi}{9}$;
>    - $0 < \alpha < 2$: esponente negativo, $x^{\frac\alpha2 - 1} \to +\infty$; limite $+\infty$. $\blacksquare$
>
> **Controllo** con $\alpha = 2$, $x = 10^{-4}$: $\frac{\sqrt{\sin(\pi \cdot 10^{-8})}}{1 - \cos(0{,}03)} \approx \frac{1{,}7725 \cdot 10^{-4}}{4{,}4998 \cdot 10^{-4}} \approx 0{,}3939$, e $\frac{2\sqrt\pi}{9} \approx 0{,}3939$.

### Funzioni monotone

**Esercizio 11.** Sia $f : (0, +\infty) \to \mathbb{R}$ crescente, con $f(x) \leq 3$ per ogni $x > 0$. Dimostrare che $\lim_{x \to +\infty} f(x)$ esiste finito e che è $\leq 3$. Vale lo stesso se $f(x) < 3$ per ogni $x$, con “$< 3$" nella conclusione?

> [!example]- Soluzione
> **Come si riconosce**: monotona, limite all'estremo dell'intervallo: slide 33.
>
> 1. Per la slide 33 (con $b = +\infty$, la dimostrazione è la stessa), $\lim_{x \to +\infty} f(x)$ esiste ed è $\sup_{(0, +\infty)} f$.
> 2. $3$ è un maggiorante di $f$, quindi $\sup f \leq 3$ (il sup è il **minimo** dei maggioranti). In particolare il limite è finito.
> 3. In alternativa, col confronto (slide 31): $f(x) \leq 3$ e $3 \to 3$, quindi il limite è $\leq 3$.
>
> **Con $f(x) < 3$ no**: $f(x) = 3 - \frac1x$ è crescente, $< 3$ per ogni $x > 0$, e tende a $3$. È di nuovo l'avvertenza della permanenza del segno: le disuguaglianze strette non passano al limite.

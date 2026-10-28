---
title: Tutoraggio 5 svolto
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-26
lezioni: []
ordine: 999
---

Il V tutoraggio, "Derivate, derivabilità e retta tangente" (Barbon, Favari, Bellomo: <span class="src">Tutoraggio 5</span>), svolto per intero, più una selezione dei complementi "Esercizi di riepilogo su limiti e continuità" (<span class="src">Tutoraggio 5 complementi</span>). Argomento di [Analisi Matematica 1](/uni/analisi-1/); la teoria sta in [Derivate](/uni/analisi-1/derivate/), [Regole di derivazione](/uni/analisi-1/regole-di-derivazione/) e [Massimi e minimi relativi](/uni/analisi-1/massimi-e-minimi-relativi/).

Si usa solo quello che c'è a lezione al 28/10: definizione di derivata, regole, tabella, Fermat. Niente de l'Hôpital, niente Lagrange, niente monotonia dal segno della derivata. L'esercizio 8 la chiederebbe: lì è detto cosa si dimostra adesso e cosa manca. Nel foglio tre funzioni sono ripetute (2.12 = 2.7, 2.13 = 2.5, 2.15 = 2.8) e nell'esercizio 6 il punto del grafico dell'inversa è scritto con le coordinate nell'ordine di $f$.

Testo in chiaro, soluzione chiusa: prima provaci.

## Cosa serve

- **Punto di raccordo** $x_0$ di una funzione a tratti: prima la continuità, poi le derivate laterali. Se $f = g$ su $[x_0, x_0 + \delta)$ con $g$ derivabile in $x_0$, il rapporto incrementale destro di $f$ è quello di $g$, quindi $f'_+(x_0) = g'(x_0)$. A sinistra lo stesso con l'altro pezzo $h$, purché $h(x_0) = f(x_0)$: è proprio la continuità.
- **Classificazione** di un punto dove $f$ è continua ma non derivabile ([Derivate](/uni/analisi-1/derivate/)): derivate laterali finite e diverse, **punto angoloso**; infinite di segno opposto, **cuspide**; infinite dello stesso segno, **tangente verticale**.
- **Inversa** ([Regole di derivazione](/uni/analisi-1/regole-di-derivazione/), slide 23): $f$ invertibile, $f'(x_0) \neq 0$, allora $(f^{-1})'(y_0) = \frac{1}{f'(x_0)}$ con $y_0 = f(x_0)$. La tangente al grafico di $f^{-1}$ nel punto $(y_0, x_0)$ è $y = x_0 + \frac{1}{f'(x_0)}(x - y_0)$.
- **Invertibilità senza il segno della derivata**: somma di strettamente crescenti è strettamente crescente, e una funzione strettamente monotona è invertibile.
- **Parte intera**: $\lfloor x\rfloor$ è il più grande intero $\leq x$; vale $x - 1 < \lfloor x\rfloor \leq x$.

## Esercizi

### Esercizio 1

Dire, motivando la risposta, se le seguenti funzioni sono derivabili in $x_0 = 0$; in caso negativo, classificare il punto di non derivabilità. (<span class="src">p. 1</span>)

**1.1** $f(x) = \vert x\vert\sin x$

> [!tip]- Indizio
> $\vert x\vert$ non è derivabile in $0$: scrivi i due rapporti incrementali laterali.

> [!example]- Soluzione
> $\vert x\vert$ non è derivabile in $0$: rapporto incrementale.
> $$
> \lim_{h \to 0^+}\frac{h\sin h}{h} = \lim_{h \to 0^+}\sin h = 0, \qquad \lim_{h \to 0^-}\frac{-h\sin h}{h} = \lim_{h \to 0^-}(-\sin h) = 0.
> $$
> Derivabile, $f'(0) = 0$. È l'E6 di [Regole di derivazione (esercizi)](/uni/analisi-1/regole-di-derivazione-esercizi/).

**1.2** $f(x) = \lfloor x\sin x\rfloor$

> [!tip]- Indizio
> Quanto vale $x\sin x$ per $\vert x\vert < 1$? Usa $\vert\sin x\vert \leq \vert x\vert$.

> [!example]- Soluzione
> Leggo le parentesi quadre del foglio come parte intera. Per $0 < \vert x\vert < 1$:
> - $x\sin x \geq 0$, perché $x$ e $\sin x$ hanno lo stesso segno per $\vert x\vert < \pi$;
> - $x\sin x \leq \vert x\vert \cdot \vert x\vert = x^2 < 1$, perché $\vert\sin x\vert \leq \vert x\vert$.
>
> Quindi $0 \leq x\sin x < 1$ e $f(x) = 0$ su $(-1, 1)$: $f$ è costante vicino a $0$, derivabile con $f'(0) = 0$. Se le parentesi fossero solo parentesi, $f = x\sin x$ è derivabile per Leibniz, con $f'(0) = \sin 0 + 0 \cdot \cos 0 = 0$: stesso risultato.

**1.3** $f(x) = x\vert\cos x\vert$

> [!tip]- Indizio
> Che segno ha $\cos x$ vicino a $0$? Allora il modulo si può togliere.

> [!example]- Soluzione
> Per $\vert x\vert < \frac\pi2$, $\cos x > 0$, quindi $f(x) = x\cos x$ vicino a $0$. Leibniz:
> $$
> f'(x) = \cos x - x\sin x, \qquad f'(0) = 1.
> $$
> Derivabile. Il modulo dà fastidio solo dove $\cos x = 0$.

**1.4** $f(x) = \vert x\vert\cos x$

> [!tip]- Indizio
> Rapporti incrementali laterali: dove va $\cos h$?

> [!example]- Soluzione
> $$
> \lim_{h \to 0^+}\frac{h\cos h}{h} = \lim_{h \to 0^+}\cos h = 1, \qquad \lim_{h \to 0^-}\frac{-h\cos h}{h} = \lim_{h \to 0^-}(-\cos h) = -1.
> $$
> Derivate laterali finite e diverse: **punto angoloso**, $f'_+(0) = 1$, $f'_-(0) = -1$. Rispetto a 1.1: lì il secondo fattore $\sin h \to 0$ "spegne" il modulo, qui $\cos h \to 1$ no.

### Esercizio 2

Studiare la derivabilità e calcolare le derivate delle seguenti funzioni, dopo averne determinato l'insieme di definizione. (<span class="src">p. 1</span>, <span class="src">p. 2</span>)

**2.1** $f(x) = \frac{1}{1 - x^2}$

> [!tip]- Indizio
> Regola del quoziente; il dominio esclude gli zeri del denominatore.

> [!example]- Soluzione
> $D = \mathbb{R} \setminus \{\pm1\}$, derivabile su $D$ (quoziente).
> $$
> f'(x) = \frac{0 \cdot (1 - x^2) - 1 \cdot (-2x)}{(1 - x^2)^2} = \frac{2x}{(1 - x^2)^2}
> $$

**2.2** $f(x) = \sin(e^x) \cdot e^{\cos x}$

> [!tip]- Indizio
> Leibniz, e la catena su ciascun fattore.

> [!example]- Soluzione
> $D = \mathbb{R}$, derivabile ovunque. Leibniz, con la catena su ogni fattore:
> $$
> f'(x) = \cos(e^x) \cdot e^x \cdot e^{\cos x} + \sin(e^x) \cdot e^{\cos x} \cdot (-\sin x) = e^{\cos x}\left(e^x\cos(e^x) - \sin x\sin(e^x)\right)
> $$

**2.3** $f(x) = x^{-1}\log x$

> [!tip]- Indizio
> Scrivila come $\frac{\log x}{x}$.

> [!example]- Soluzione
> $D = (0, +\infty)$, derivabile su $D$. Come quoziente $\frac{\log x}{x}$:
> $$
> f'(x) = \frac{\frac1x \cdot x - \log x \cdot 1}{x^2} = \frac{1 - \log x}{x^2}
> $$

**2.4** $f(x) = \arcsin x \cdot \arccos x$

> [!tip]- Indizio
> In $(-1, 1)$ basta la tabella. Negli estremi: rapporto incrementale con $\theta = \arccos x$ oppure $\arcsin x = -\frac\pi2 + v$, e $1 - \cos$.

> [!example]- Soluzione
> $D = [-1, 1]$. Su $(-1, 1)$, Leibniz con la tabella:
> $$
> f'(x) = \frac{1}{\sqrt{1 - x^2}}\arccos x + \arcsin x \cdot \left(-\frac{1}{\sqrt{1 - x^2}}\right) = \frac{\arccos x - \arcsin x}{\sqrt{1 - x^2}}.
> $$
> In $\pm1$ né $\arcsin$ né $\arccos$ sono derivabili: rapporto incrementale.
> - In $1$: $f(1) = \frac\pi2 \cdot 0 = 0$. Con $\theta = \arccos x \to 0^+$, $x = \cos\theta$:
> $$
> \frac{f(x) - f(1)}{x - 1} = \arcsin x \cdot \frac{\arccos x}{x - 1} = \arcsin x \cdot \frac{\theta}{\cos\theta - 1} = -\arcsin x \cdot \frac{\theta^2}{1 - \cos\theta} \cdot \frac1\theta \to -\frac\pi2 \cdot 2 \cdot (+\infty) = -\infty.
> $$
> - In $-1$: $f(-1) = -\frac\pi2 \cdot \pi = -\frac{\pi^2}{2}$. Uso $\arccos x = \frac\pi2 - \arcsin x$ e pongo $\arcsin x = -\frac\pi2 + v$, $v \to 0^+$, $x = -\cos v$:
> $$
> \frac{f(x) - f(-1)}{x + 1} = \frac{\left(-\frac\pi2 + v\right)(\pi - v) + \frac{\pi^2}{2}}{1 - \cos v} = \frac{v\left(\frac{3\pi}{2} - v\right)}{1 - \cos v} = \left(\frac32\pi - v\right) \cdot \frac{v^2}{1 - \cos v} \cdot \frac1v \to +\infty.
> $$
>
> Non derivabile in $\pm1$: tangente verticale (solo un lato, sono estremi del dominio).

**2.5** $f(x) = \log\sqrt{\dfrac{1 + \cos x}{1 - \cos x}}$ (uguale alla 2.13)

> [!tip]- Indizio
> Spezza il logaritmo prima di derivare, poi $1 - \cos^2 x = \sin^2 x$.

> [!example]- Soluzione
> Dominio: $1 - \cos x \neq 0$, cioè $x \neq 2k\pi$; argomento $> 0$, cioè $1 + \cos x > 0$ (il denominatore è già $> 0$), cioè $x \neq \pi + 2k\pi$. Quindi $D = \mathbb{R} \setminus \{k\pi : k \in \mathbb{Z}\}$.
>
> Su $D$ semplifico prima, con le proprietà del logaritmo:
> $$
> f(x) = \frac12\left[\log(1 + \cos x) - \log(1 - \cos x)\right]
> $$
> $$
> f'(x) = \frac12\left[\frac{-\sin x}{1 + \cos x} - \frac{\sin x}{1 - \cos x}\right] = -\frac{\sin x}{2} \cdot \frac{(1 - \cos x) + (1 + \cos x)}{1 - \cos^2 x} = -\frac{\sin x}{2} \cdot \frac{2}{\sin^2 x} = -\frac{1}{\sin x}.
> $$
> Derivabile su tutto $D$.

**2.6** $f(x) = \sqrt{x + \sqrt x}$

> [!tip]- Indizio
> In $0$ la formula ha $\frac{1}{\sqrt x}$: rapporto incrementale da destra, con $h + \sqrt h \geq \sqrt h$.

> [!example]- Soluzione
> $D = [0, +\infty)$. Per $x > 0$ l'argomento è $> 0$ e la catena dà
> $$
> f'(x) = \frac{1}{2\sqrt{x + \sqrt x}} \cdot \left(1 + \frac{1}{2\sqrt x}\right).
> $$
> In $0$ la formula non vale ($\frac{1}{2\sqrt x}$): rapporto incrementale da destra, con $h + \sqrt h \geq \sqrt h$:
> $$
> \frac{\sqrt{h + \sqrt h}}{h} \geq \frac{h^{1/4}}{h} = \frac{1}{h^{3/4}} \to +\infty.
> $$
> Non derivabile in $0$: tangente verticale (da destra).

**2.7** $f(x) = \cosh(\sinh x)$ (uguale alla 2.12)

> [!tip]- Indizio
> Catena, con $D[\cosh] = \sinh$ e $D[\sinh] = \cosh$.

> [!example]- Soluzione
> $D = \mathbb{R}$, derivabile ovunque. Catena con $D[\cosh] = \sinh$, $D[\sinh] = \cosh$:
> $$
> f'(x) = \sinh(\sinh x) \cdot \cosh x
> $$

**2.8** $f(x) = \log(\log x)$ (uguale alla 2.15)

> [!tip]- Indizio
> Dominio: serve $\log x > 0$.

> [!example]- Soluzione
> Serve $x > 0$ e $\log x > 0$: $D = (1, +\infty)$, derivabile su $D$.
> $$
> f'(x) = \frac{1}{\log x} \cdot \frac1x = \frac{1}{x\log x}
> $$

**2.9** $f(x) = \sqrt{x + \vert x\vert^3 + 1}$

> [!tip]- Indizio
> L'argomento è sempre positivo? Separa $x \geq -1$ e $x < -1$. Poi deriva $\vert x\vert^3$ a pezzi.

> [!example]- Soluzione
> **Dominio.** Mostro che $x + \vert x\vert^3 + 1 > 0$ per ogni $x$:
> - $x \geq -1$: $x + 1 \geq 0$ e $\vert x\vert^3 \geq 0$, e non sono nulli insieme ($x = -1$ dà $\vert x\vert^3 = 1$);
> - $x < -1$: $\vert x\vert > 1$, quindi $\vert x\vert^3 > \vert x\vert = -x$, e $x + \vert x\vert^3 + 1 > 1$.
>
> $D = \mathbb{R}$, e l'argomento non si annulla mai: la radice è derivabile dove lo è l'argomento.
>
> **$\vert x\vert^3$ è derivabile ovunque**: per $x > 0$ è $x^3$, per $x < 0$ è $-x^3$, quindi $D\vert x\vert^3 = 3x\vert x\vert$ per $x \neq 0$; in $0$, $\frac{\vert h\vert^3}{h} = \pm h^2 \to 0$.
> $$
> f'(x) = \frac{1 + 3x\vert x\vert}{2\sqrt{x + \vert x\vert^3 + 1}}, \qquad x \in \mathbb{R}.
> $$

**2.10** $f(x) = \cosh(\vert x\vert)$

> [!tip]- Indizio
> $\cosh$ è pari.

> [!example]- Soluzione
> $\cosh$ è pari, quindi $\cosh\vert x\vert = \cosh x$ per ogni $x$. $D = \mathbb{R}$, derivabile ovunque, $f'(x) = \sinh x$.
> Il modulo non crea problemi in $0$: è "assorbito" dalla simmetria.

**2.11** $f(x) = \sin(2\arctan x)$

> [!tip]- Indizio
> Catena; per semplificare $\cos(2\theta)$ con $\tan\theta = x$.

> [!example]- Soluzione
> $D = \mathbb{R}$, derivabile ovunque.
> $$
> f'(x) = \cos(2\arctan x) \cdot \frac{2}{1 + x^2}.
> $$
> Si può semplificare: con $\theta = \arctan x$, $\cos 2\theta = \frac{1 - \tan^2\theta}{1 + \tan^2\theta} = \frac{1 - x^2}{1 + x^2}$, quindi $f'(x) = \frac{2(1 - x^2)}{(1 + x^2)^2}$.

**2.12, 2.13** Uguali alla 2.7 e alla 2.5.

**2.14** $f(x) = x^{x(x - 1)}$

> [!tip]- Indizio
> Base ed esponente variabili: tutto in base $e$.

> [!example]- Soluzione
> Base ed esponente variabili: $D = (0, +\infty)$ e $f(x) = e^{(x^2 - x)\log x}$, derivabile su $D$.
> $$
> f'(x) = e^{(x^2 - x)\log x} \cdot \left[(2x - 1)\log x + (x^2 - x) \cdot \frac1x\right] = x^{x(x - 1)}\left[(2x - 1)\log x + x - 1\right]
> $$

**2.15** Uguale alla 2.8.

**2.16** $f(x) = (x^2 + 2)^{\sin x}$

> [!tip]- Indizio
> Come $x^x$: $e^{\sin x\log(x^2 + 2)}$.

> [!example]- Soluzione
> $D = \mathbb{R}$ ($x^2 + 2 > 0$), $f(x) = e^{\sin x\log(x^2 + 2)}$:
> $$
> f'(x) = (x^2 + 2)^{\sin x}\left(\cos x\log(x^2 + 2) + \frac{2x\sin x}{x^2 + 2}\right)
> $$
> È l'E3 di [Regole di derivazione (esercizi)](/uni/analisi-1/regole-di-derivazione-esercizi/).

### Esercizio 3

Dopo aver mostrato che le seguenti funzioni sono derivabili nel loro insieme di definizione, determinare l'equazione della retta tangente al loro grafico nel punto di ascissa indicata. (<span class="src">p. 2</span>) Retta tangente: $y = f(x_0) + f'(x_0)(x - x_0)$.

**3.1** $f(x) = e^{\cos x}$, $x_0 = \frac\pi2$

> [!tip]- Indizio
> Calcola $f(x_0)$ e $f'(x_0)$, poi $y = f(x_0) + f'(x_0)(x - x_0)$.

> [!example]- Soluzione
> $D = \mathbb{R}$, composizione di derivabili.
> - $f\left(\frac\pi2\right) = e^0 = 1$;
> - $f'(x) = -\sin x\,e^{\cos x}$, $f'\left(\frac\pi2\right) = -1$.
>
> $$
> y = 1 - \left(x - \frac\pi2\right)
> $$

**3.2** $f(x) = \log(\tan x)$, $x_0 = \frac\pi4$

> [!tip]- Indizio
> Dominio: $\tan x > 0$. $D[\tan x] = 1 + \tan^2 x$.

> [!example]- Soluzione
> Serve $\tan x > 0$: $D = \bigcup_{k \in \mathbb{Z}}\left(k\pi, \frac\pi2 + k\pi\right)$, e lì $\tan$ è derivabile.
> - $f\left(\frac\pi4\right) = \log 1 = 0$;
> - $f'(x) = \frac{1 + \tan^2 x}{\tan x}$, $f'\left(\frac\pi4\right) = \frac{1 + 1}{1} = 2$.
>
> $$
> y = 2\left(x - \frac\pi4\right)
> $$

**3.3** $f(x) = 2^x$, $x_0 = 0$

> [!tip]- Indizio
> $D[a^x] = a^x\log a$.

> [!example]- Soluzione
> - $f(0) = 1$;
> - $f'(x) = 2^x\log 2$, $f'(0) = \log 2$.
>
> $$
> y = 1 + x\log 2
> $$

**3.4** $f(x) = e^{\arctan x}$, $x_0 = 1$

> [!tip]- Indizio
> Catena, con $D[\arctan x] = \frac{1}{1 + x^2}$.

> [!example]- Soluzione
> - $f(1) = e^{\pi/4}$;
> - $f'(x) = \frac{e^{\arctan x}}{1 + x^2}$, $f'(1) = \frac{e^{\pi/4}}{2}$.
>
> $$
> y = e^{\pi/4} + \frac{e^{\pi/4}}{2}(x - 1)
> $$
> È l'E4 di [Regole di derivazione (esercizi)](/uni/analisi-1/regole-di-derivazione-esercizi/).

### Esercizio 4

Mostrare che le seguenti funzioni sono invertibili nel loro insieme di definizione e determinare l'equazione della retta tangente al grafico delle loro inverse, se esiste, nel punto di ascissa indicata. (<span class="src">p. 2</span>, <span class="src">p. 3</span>)

Lo schema: trovo $x_0$ con $f(x_0) = y_0$, calcolo $f'(x_0) \neq 0$, e la tangente a $f^{-1}$ è $y = x_0 + \frac{1}{f'(x_0)}(x - y_0)$.

**4.1** $f(x) = \log\frac xe + x$, $y_0 = e$

> [!tip]- Indizio
> $\log\frac xe = \log x - 1$. Quale $x_0$ dà $f(x_0) = e$?

> [!example]- Soluzione
> - $D = (0, +\infty)$, $f(x) = \log x - 1 + x$: somma di strettamente crescenti, quindi invertibile.
> - $x_0$: $\log x_0 - 1 + x_0 = e$ con $x_0 = e$, perché $1 - 1 + e = e$.
> - $f'(x) = \frac1x + 1$, $f'(e) = \frac{e + 1}{e} \neq 0$, quindi $(f^{-1})'(e) = \frac{e}{e + 1}$.
>
> $$
> y = e + \frac{e}{e + 1}(x - e)
> $$

**4.2** $f(x) = \log x + \sqrt x$, $y_0 = 2 + e$

> [!tip]- Indizio
> Prova $x_0 = e^2$.

> [!example]- Soluzione
> - $D = (0, +\infty)$, somma di strettamente crescenti: invertibile.
> - $x_0 = e^2$: $\log e^2 + \sqrt{e^2} = 2 + e$.
> - $f'(x) = \frac1x + \frac{1}{2\sqrt x}$, $f'(e^2) = \frac{1}{e^2} + \frac{1}{2e} = \frac{2 + e}{2e^2}$, quindi $(f^{-1})'(2 + e) = \frac{2e^2}{2 + e}$.
>
> $$
> y = e^2 + \frac{2e^2}{2 + e}(x - 2 - e)
> $$

**4.3** $f(x) = \log\left(x + \sqrt{x^2 + 1}\right)$, $y_0 = 0$

> [!tip]- Indizio
> È una funzione iperbolica inversa nota: quale? Poi $x_0 = 0$.

> [!example]- Soluzione
> - Dominio: $\sqrt{x^2 + 1} > \sqrt{x^2} = \vert x\vert \geq -x$, quindi $x + \sqrt{x^2 + 1} > 0$ per ogni $x$: $D = \mathbb{R}$.
> - È $\sinh^{-1}$ ([Funzioni elementari](/uni/analisi-1/funzioni-elementari/)): risolvendo $y = \log(x + \sqrt{x^2 + 1})$ si trova $x = \frac{e^y - e^{-y}}{2} = \sinh y$. Inversa esplicita, quindi $f$ è invertibile e $f^{-1} = \sinh$.
> - $x_0 = 0$: $\log(0 + 1) = 0$.
> - $f'(x) = \frac{1 + \frac{x}{\sqrt{x^2 + 1}}}{x + \sqrt{x^2 + 1}} = \frac{1}{\sqrt{x^2 + 1}}$, $f'(0) = 1$, quindi $(f^{-1})'(0) = 1$.
>
> $$
> y = x
> $$
> Controllo: $(\sinh)'(0) = \cosh 0 = 1$ e $\sinh 0 = 0$.

### Esercizio 5

Dopo aver determinato l'insieme di definizione di $f(x) = e^x + x^2$, mostrare che è localmente invertibile in un intorno di $x_0 = 1$ e trovare l'equazione della retta tangente al grafico della sua inversa, se esiste, nel punto $(y_0, x_0) = (e + 1, 1)$. (<span class="src">p. 3</span>)

> [!tip]- Indizio
> Su $(0, +\infty)$ come sono $e^x$ e $x^2$?

> [!example]- Soluzione
> - $D = \mathbb{R}$.
> - **Localmente invertibile**: su $(0, +\infty)$, che contiene $1$, sia $e^x$ sia $x^2$ sono strettamente crescenti, quindi lo è $f$: invertibile lì.
> - $f(1) = e + 1 = y_0$.
> - $f'(x) = e^x + 2x$, $f'(1) = e + 2 \neq 0$, quindi $(f^{-1})'(e + 1) = \frac{1}{e + 2}$.
>
> $$
> y = 1 + \frac{1}{e + 2}(x - e - 1)
> $$
> Su tutto $\mathbb{R}$ non è invertibile: $f(-1) = e^{-1} + 1$ e $f(0) = 1$, ma $f(-0{,}5) \approx 0{,}857 < 1$, quindi scende e poi sale.

### Esercizio 6

Dopo aver determinato l'insieme di definizione di $f(x) = x^2 + \cos x$, mostrare che è localmente invertibile in un intorno di $x_0 = \pi$ e trovare l'equazione della retta tangente al grafico della sua inversa, se esiste, nel punto $(x_0, y_0) = (\pi, \pi^2 - 1)$. (<span class="src">p. 3</span>)

> [!tip]- Indizio
> $\cos$ non è monotona vicino a $\pi$: stima $\vert\cos b - \cos a\vert$ con la prostaferesi.

> [!example]- Soluzione
> - $D = \mathbb{R}$, $f(\pi) = \pi^2 - 1$.
> - **Localmente invertibile.** $\cos$ non è monotona vicino a $\pi$ (decresce prima, cresce dopo): serve una stima. Per $a < b$, con prostaferesi e $\vert\sin u\vert \leq \vert u\vert$, $\vert\sin u\vert \leq 1$:
> $$
> \vert\cos b - \cos a\vert = 2\left\vert\sin\frac{a + b}{2}\right\vert\left\vert\sin\frac{b - a}{2}\right\vert \leq 2 \cdot 1 \cdot \frac{b - a}{2} = b - a.
> $$
> Quindi
> $$
> f(b) - f(a) = (b - a)(b + a) + (\cos b - \cos a) \geq (b - a)(a + b) - (b - a) = (b - a)(a + b - 1) > 0 \quad \text{se } a, b \geq \tfrac12.
> $$
> $f$ è strettamente crescente su $\left[\frac12, +\infty\right)$, che contiene $\pi$: invertibile lì.
> - $f'(x) = 2x - \sin x$, $f'(\pi) = 2\pi \neq 0$, quindi $(f^{-1})'(\pi^2 - 1) = \frac{1}{2\pi}$.
>
> $$
> y = \pi + \frac{1}{2\pi}\left(x - \pi^2 + 1\right)
> $$
> **Attenzione al testo**: il foglio scrive il punto come $(x_0, y_0) = (\pi, \pi^2 - 1)$, che sta sul grafico di $f$. Sul grafico dell'inversa il punto è $(y_0, x_0) = (\pi^2 - 1, \pi)$, scritto così nell'esercizio 5.

### Esercizio 7

Determinare per quali valori dei parametri reali $\alpha$ e $\beta$ le seguenti funzioni sono derivabili nel punto $x_0 = 0$. (<span class="src">p. 3</span>) Sempre: continuità, poi derivate laterali (vedi [Cosa serve](#cosa-serve)).

**7.1** $f(x) = \begin{cases} e^{\alpha x} & x < 0 \\ \sqrt{1 + \sin(\beta x)} & x \geq 0 \end{cases}$

> [!tip]- Indizio
> Prima la continuità in $0$, poi le derivate dei due pezzi in $0$.

> [!example]- Soluzione
> 1. **Continuità**: $\lim_{x \to 0^-}e^{\alpha x} = 1$, $f(0) = \sqrt{1} = 1$. Continua per ogni $\alpha, \beta$.
> 2. **Sinistra**: $D[e^{\alpha x}] = \alpha e^{\alpha x}$, in $0$ vale $\alpha$.
> 3. **Destra**: $D\left[\sqrt{1 + \sin(\beta x)}\right] = \frac{\beta\cos(\beta x)}{2\sqrt{1 + \sin(\beta x)}}$, in $0$ vale $\frac\beta2$.
>
> Derivabile se e solo se $\alpha = \frac\beta2$.

**7.2** $f(x) = \begin{cases} \cos^2(x + \alpha) & x < 0 \\ \sqrt{1 + \beta x^2} & x \geq 0 \end{cases}$

> [!tip]- Indizio
> La continuità chiede $\cos^2\alpha = 1$.

> [!example]- Soluzione
> 1. **Continuità**: $\lim_{x \to 0^-}\cos^2(x + \alpha) = \cos^2\alpha$, $f(0) = 1$. Serve $\cos^2\alpha = 1$, cioè $\alpha = k\pi$.
> 2. **Sinistra**: $D[\cos^2(x + \alpha)] = -2\cos(x + \alpha)\sin(x + \alpha) = -\sin(2x + 2\alpha)$, in $0$ vale $-\sin(2k\pi) = 0$.
> 3. **Destra**: $D\left[\sqrt{1 + \beta x^2}\right] = \frac{\beta x}{\sqrt{1 + \beta x^2}}$, in $0$ vale $0$.
>
> Derivabile se e solo se $\alpha = k\pi$, $k \in \mathbb{Z}$, per ogni $\beta$. (Con $\beta < 0$ la funzione è definita a destra solo fino a $\frac{1}{\sqrt{-\beta}}$: vicino a $0$ non cambia niente.)

**7.3** $f(x) = \begin{cases} \log\vert x - \alpha\vert & x < 0 \\ \beta x - \sin x & x \geq 0 \end{cases}$

> [!tip]- Indizio
> Per la continuità serve $\log\vert\alpha\vert = 0$; $D[\log\vert x - \alpha\vert] = \frac{1}{x - \alpha}$.

> [!example]- Soluzione
> 1. **Continuità**: $f(0) = 0$. Se $\alpha = 0$, $\log\vert x\vert \to -\infty$: mai continua. Se $\alpha \neq 0$, $\lim_{x \to 0^-}\log\vert x - \alpha\vert = \log\vert\alpha\vert$. Serve $\log\vert\alpha\vert = 0$, cioè $\alpha = \pm1$.
> 2. **Sinistra**: $D[\log\vert x - \alpha\vert] = \frac{1}{x - \alpha}$ (tabella, $\log\vert\cdot\vert$), in $0$ vale $-\frac1\alpha$.
> 3. **Destra**: $D[\beta x - \sin x] = \beta - \cos x$, in $0$ vale $\beta - 1$.
>
> - $\alpha = 1$: $-1 = \beta - 1$, quindi $\beta = 0$.
> - $\alpha = -1$: $1 = \beta - 1$, quindi $\beta = 2$.
>
> Derivabile se e solo se $(\alpha, \beta) = (1, 0)$ oppure $(-1, 2)$.

**7.4** $f(x) = \begin{cases} \alpha x^2 - x + \beta & x \geq 0 \\ -x^3 + \beta x - \alpha & x < 0 \end{cases}$

> [!tip]- Indizio
> Continuità: confronta $f(0)$ col limite da sinistra.

> [!example]- Soluzione
> 1. **Continuità**: $f(0) = \beta$, $\lim_{x \to 0^-}(-x^3 + \beta x - \alpha) = -\alpha$. Serve $\beta = -\alpha$.
> 2. **Destra**: $D[\alpha x^2 - x + \beta] = 2\alpha x - 1$, in $0$ vale $-1$.
> 3. **Sinistra**: $D[-x^3 + \beta x - \alpha] = -3x^2 + \beta$, in $0$ vale $\beta$.
>
> $\beta = -1$ e $\alpha = -\beta = 1$: derivabile se e solo se $(\alpha, \beta) = (1, -1)$.

**7.5** $f(x) = \begin{cases} 2^x & x \geq 0 \\ \alpha x^2 + \beta x & x < 0 \end{cases}$

> [!tip]- Indizio
> Prima di tutto: è continua in $0$?

> [!example]- Soluzione
> **Continuità**: $f(0) = 2^0 = 1$, ma $\lim_{x \to 0^-}(\alpha x^2 + \beta x) = 0$ per ogni $\alpha, \beta$. Mai continua in $0$, quindi **mai derivabile**: nessun valore dei parametri. Chi impone subito $\beta = \log 2$ (uguaglianza delle derivate) sbaglia.

### Esercizio 8

Determinare il numero di soluzioni dell'equazione $x\log^2 x = \alpha$ al variare del parametro reale $\alpha$. Ogni affermazione deve essere giustificata. (<span class="src">p. 3</span>)

> [!tip]- Indizio
> Studia $g(x) = x\log^2 x$ su $(0, 1)$ e su $(1, +\infty)$: segno, limiti, monotonia dove si vede.

> [!example]- Soluzione
> Il conteggio esatto chiede dove $g(x) = x\log^2 x$ cresce e dove decresce, cioè il segno di $g'$ con il teorema di Lagrange: a lezione non c'è ancora. Qui sotto: cosa si dimostra adesso, poi il risultato completo con il pezzo che manca segnato.
>
> **Si dimostra adesso.**
> 1. $D = (0, +\infty)$, $g(x) \geq 0$, $g(x) = 0 \iff x = 1$.
> 2. Limiti: $g(x) = \left(\sqrt x\log x\right)^2 \to 0$ per $x \to 0^+$ (slide 49 con $\alpha = \frac12$); $g(x) \to +\infty$ per $x \to +\infty$.
> 3. Su $(1, +\infty)$: $x$ e $\log^2 x$ sono positive e strettamente crescenti, quindi $g$ è strettamente crescente, continua, da $0$ a $+\infty$. Per valori intermedi, ogni $\alpha > 0$ ha **esattamente una** soluzione in $(1, +\infty)$.
> 4. Su $(0, 1)$: $g > 0$ e $g \to 0$ ai due estremi, quindi esiste $[a, b] \subset (0, 1)$ con $g < g(e^{-2})$ fuori da $[a, b]$. Weierstrass su $[a, b]$: c'è un massimo, $\geq g(e^{-2}) > g(a), g(b)$, quindi interno, ed è il massimo di $g$ su $(0, 1)$. Fermat: lì $g'(x) = \log^2 x + 2\log x = \log x(\log x + 2) = 0$, e in $(0, 1)$ l'unica soluzione è $x = e^{-2}$. Quindi $\max_{(0,1)} g = g(e^{-2}) = e^{-2} \cdot 4 = \frac{4}{e^2} \approx 0{,}54$.
> 5. Per $\alpha > \frac{4}{e^2}$ nessuna soluzione in $(0, 1)$. Per $\alpha = \frac{4}{e^2}$ in $(0, 1)$ c'è solo $x = e^{-2}$: un altro punto con $g = \frac{4}{e^2}$ sarebbe un altro massimo interno, e per Fermat sarebbe ancora $e^{-2}$.
> 6. Per $0 < \alpha < \frac{4}{e^2}$, valori intermedi su $(0, e^{-2})$ e su $(e^{-2}, 1)$: **almeno** una soluzione in ciascuno.
>
> **Manca** (arriva con Lagrange), solo per $0 < \alpha < \frac{4}{e^2}$: $g$ è strettamente crescente su $(0, e^{-2}]$ e strettamente decrescente su $[e^{-2}, 1)$, perché lì $g' > 0$ e $g' < 0$. Con questo "almeno una" diventa "esattamente una".
>
> | $\alpha$ | soluzioni |
> | --- | --- |
> | $\alpha < 0$ | $0$ |
> | $\alpha = 0$ | $1$ ($x = 1$) |
> | $0 < \alpha < \frac{4}{e^2}$ | $3$ (il "esattamente" chiede Lagrange) |
> | $\alpha = \frac{4}{e^2}$ | $2$ ($x = e^{-2}$ e una in $(1, +\infty)$) |
> | $\alpha > \frac{4}{e^2}$ | $1$ |
>
> Controllo numerico: con $\alpha = 0{,}3$ il grafico taglia la retta $y = 0{,}3$ tre volte, con $\alpha = 0{,}6$ una volta.

## Complementi: limiti e continuità

Selezione dei complementi (<span class="src">Tutoraggio 5 complementi</span>): un esercizio per ogni tipo. Nel foglio $\ln$ è il $\log$ del corso. Dal 19/10 si possono usare gerarchia degli infiniti per le funzioni, cambio di variabile e $x^\alpha\log x \to 0$ ([Esercitazione 5 svolta](/uni/analisi-1/esercitazione-5-svolta/)).

Non svolti: 1.10, 1.14, 1.16-1.18, 1.23-1.26, 1.31, 1.32, 1.34, 1.35 e 2.8-2.11, 2.13, 2.16. Sono doppioni di tipi già qui (1.10, 1.14, 1.17, 1.18, 1.25, 1.26, 1.34, 2.10, 2.11, 2.13, 2.16), conti lunghi che senza Stirling o Taylor non aggiungono metodo (1.23, 1.24, 1.31, 1.32, 1.35), funzioni di Dirichlet (2.8, 2.9); la 1.16 ha un parametro $m$ che il foglio non definisce.

Due fatti in più che servono:
- $\frac{\arctan y}{y} \to 1$ per $y \to 0$: con $u = \arctan y \to 0$, $y = \tan u$, è $\frac{u}{\tan u} \to 1$.
- $\arctan t + \arctan\frac1t = \frac\pi2$ per $t > 0$ e $= -\frac\pi2$ per $t < 0$. Per $t > 0$, con $\theta = \arctan t \in \left(0, \frac\pi2\right)$: $\tan\left(\frac\pi2 - \theta\right) = \frac{\cos\theta}{\sin\theta} = \frac1t$ e $\frac\pi2 - \theta \in \left(0, \frac\pi2\right)$; per $t < 0$ si usa che $\arctan$ è dispari.

### Esercizio 1 (limiti)

Calcolare, eventualmente al variare del parametro reale positivo $\alpha$, i seguenti limiti, se esistono; altrimenti dimostrare che non esistono. (<span class="src">p. 1</span>, <span class="src">p. 2</span>, <span class="src">p. 3</span>)

**C1.1** $\displaystyle\lim_{x \to +\infty}x\sin\left(\log\frac{x + 1}{x + 2}\right)$

> [!tip]- Indizio
> $\frac{x + 1}{x + 2} = 1 - \frac{1}{x + 2}$: dentro il seno c'è un $\log(1 + \square)$ con $\square \to 0$.

> [!example]- Soluzione
> $\frac{x + 1}{x + 2} = 1 - \frac{1}{x + 2}$. Pongo $v = -\frac{1}{x + 2} \to 0$ e $u = \log(1 + v) \to 0$, $u \neq 0$:
> $$
> x\sin u = \frac{\sin u}{u} \cdot \frac{\log(1 + v)}{v} \cdot v\,x = \underbrace{\frac{\sin u}{u}}_{\to 1} \cdot \underbrace{\frac{\log(1 + v)}{v}}_{\to 1} \cdot \underbrace{\left(-\frac{x}{x + 2}\right)}_{\to -1} \to -1
> $$

**C1.2** $\displaystyle\lim_{x \to +\infty}\frac{\frac\pi2 - \arctan x}{\log\frac{x + 1}{x}}$

> [!tip]- Indizio
> Per $x > 0$, $\frac\pi2 - \arctan x = \arctan\frac1x$. Poi $y = \frac1x$.

> [!example]- Soluzione
> Per $x > 0$, $\frac\pi2 - \arctan x = \arctan\frac1x$. Con $y = \frac1x \to 0^+$:
> $$
> \frac{\arctan\frac1x}{\log\left(1 + \frac1x\right)} = \frac{\arctan y}{\log(1 + y)} = \frac{\arctan y / y}{\log(1 + y)/y} \to \frac11 = 1
> $$

**C1.3** $\displaystyle\lim_{x \to 0^-}\frac{\pi + 2\arctan\frac1x}{e^x - \sqrt{1 + x}}$

> [!tip]- Indizio
> Per $x < 0$, $\arctan\frac1x = -\frac\pi2 - \arctan x$. Sotto, aggiungi e togli $1$.

> [!example]- Soluzione
> Per $x < 0$, $\arctan\frac1x = -\frac\pi2 - \arctan x$, quindi il numeratore è $\pi - \pi - 2\arctan x = -2\arctan x$. Divido sopra e sotto per $x$:
> $$
> \frac{-2\,\frac{\arctan x}{x}}{\frac{e^x - 1}{x} - \frac{(1 + x)^{1/2} - 1}{x}} \to \frac{-2 \cdot 1}{1 - \frac12} = -4
> $$
> Il denominatore l'ho scritto come $(e^x - 1) - \left(\sqrt{1 + x} - 1\right)$ per far comparire due limiti notevoli.

**C1.4** $\displaystyle\lim_{x \to +\infty}x\left(\sqrt[3]{1 + \sin\frac1x} - \cos\frac1x\right)$

> [!tip]- Indizio
> $t = \frac1x$, poi aggiungi e togli $1$ dentro la parentesi.

> [!example]- Soluzione
> $t = \frac1x \to 0^+$; aggiungo e tolgo $1$:
> $$
> \frac{(1 + \sin t)^{1/3} - 1}{t} + \frac{1 - \cos t}{t} = \frac{(1 + \sin t)^{1/3} - 1}{\sin t} \cdot \frac{\sin t}{t} + \frac{1 - \cos t}{t^2} \cdot t \to \frac13 \cdot 1 + \frac12 \cdot 0 = \frac13
> $$

**C1.5** $\displaystyle\lim_{x \to 0}\left(1 + \arctan(2x)\right)^{\frac{3 + \sin x}{x}}$

> [!tip]- Indizio
> $[1^\infty]$: base $e$, e nell'esponente $\log(1 + \arctan 2x)$.

> [!example]- Soluzione
> $[1^\infty]$, base $e$. L'esponente, con $u = \arctan(2x) \to 0$:
> $$
> \frac{3 + \sin x}{x}\log(1 + u) = (3 + \sin x) \cdot \frac{\log(1 + u)}{u} \cdot \frac{\arctan(2x)}{2x} \cdot 2 \to 3 \cdot 1 \cdot 1 \cdot 2 = 6.
> $$
> Il limite è $e^6$.

**C1.6** $\displaystyle\lim_{x \to 0}(1 + \vert x\vert)^{1/x}$

> [!tip]- Indizio
> Guarda separatamente $x \to 0^+$ e $x \to 0^-$.

> [!example]- Soluzione
> - $x \to 0^+$: $(1 + x)^{1/x} \to e$ (slide 54).
> - $x \to 0^-$: $(1 + (-x))^{1/x} = \left[(1 + (-x))^{\frac{1}{-x}}\right]^{-1} \to e^{-1}$, con $-x \to 0^+$.
>
> Limiti laterali diversi: **non esiste**.

**C1.7** $\displaystyle\lim_{x \to 0}\left(\frac{1}{\cos x}\right)^{1/x^2}$

> [!tip]- Indizio
> $-\log\cos x = -\log(1 + (\cos x - 1))$.

> [!example]- Soluzione
> $[1^\infty]$. Esponente, con $u = \cos x - 1 \to 0$:
> $$
> -\frac{\log\cos x}{x^2} = -\frac{\log(1 + u)}{u} \cdot \frac{\cos x - 1}{x^2} \to -1 \cdot \left(-\frac12\right) = \frac12.
> $$
> Il limite è $e^{1/2} = \sqrt e$.

**C1.8** $\displaystyle\lim_{x \to \pi/2}(\sin x)^{\tan x}$

> [!tip]- Indizio
> Esponente $\tan x\log\sin x$, con $\square = \sin x - 1$; moltiplica per $\frac{1 + \sin x}{1 + \sin x}$.

> [!example]- Soluzione
> Vicino a $\frac\pi2$, $\sin x > 0$: definita da tutte e due le parti. Esponente $\tan x\log\sin x$, con $u = \sin x - 1 \to 0$:
> $$
> \tan x\log(1 + u) = \frac{\log(1 + u)}{u} \cdot \frac{\sin x(\sin x - 1)}{\cos x}
> $$
> $$
> \frac{\sin x(\sin x - 1)}{\cos x} \cdot \frac{\sin x + 1}{\sin x + 1} = \frac{\sin x(\sin^2 x - 1)}{\cos x(1 + \sin x)} = -\frac{\sin x\cos x}{1 + \sin x} \to -\frac{1 \cdot 0}{2} = 0.
> $$
> Esponente $\to 1 \cdot 0 = 0$: il limite è $e^0 = 1$.

**C1.9** $\displaystyle\lim_{x \to \pi/2}(\tan x)^{\cos x}$

> [!tip]- Indizio
> Da che lato di $\frac\pi2$ è definita? Poi $\log\tan x = \log\sin x - \log\cos x$.

> [!example]- Soluzione
> Serve $\tan x > 0$: solo $x \to \left(\frac\pi2\right)^-$, a destra non è definita. Esponente:
> $$
> \cos x\log\tan x = \cos x\log\sin x - \cos x\log\cos x \to 0 \cdot 0 - 0 = 0,
> $$
> perché $y\log y \to 0$ per $y = \cos x \to 0^+$ (slide 49). Il limite (da sinistra) è $e^0 = 1$.

**C1.11** $\displaystyle\lim_{x \to e}(\log x)^{\frac{1}{x - e}}$

> [!tip]- Indizio
> $[1^\infty]$; $\log x - 1 = \log\frac xe$.

> [!example]- Soluzione
> $[1^\infty]$. $\log x = 1 + v$ con $v = \log x - 1 = \log\frac xe = \log(1 + w)$, $w = \frac{x - e}{e} \to 0$:
> $$
> \frac{\log(\log x)}{x - e} = \frac{\log(1 + v)}{v} \cdot \frac{\log(1 + w)}{w} \cdot \frac{w}{x - e} \to 1 \cdot 1 \cdot \frac1e.
> $$
> Il limite è $e^{1/e}$.

**C1.12** $\displaystyle\lim_{x \to e}(\log x)^{\frac{1}{\log(\log x)}}$

> [!tip]- Indizio
> Scrivi la potenza in base $e$ e guarda l'esponente.

> [!example]- Soluzione
> Trappola: per $x > 1$, $x \neq e$,
> $$
> (\log x)^{\frac{1}{\log(\log x)}} = e^{\frac{\log(\log x)}{\log(\log x)}} = e^1.
> $$
> La funzione è costante $e$ vicino a $e$: il limite è $e$.

**C1.13** $\displaystyle\lim_{x \to 0^+}x^{-1/x}$

> [!tip]- Indizio
> È davvero una forma indeterminata?

> [!example]- Soluzione
> $x^{-1/x} = e^{-\frac{\log x}{x}}$, e $-\frac{\log x}{x} = (-\log x) \cdot \frac1x \to (+\infty)(+\infty) = +\infty$. Il limite è $+\infty$. Non è una forma indeterminata: è $\left[0^{-\infty}\right]$.

**C1.15** $\displaystyle\lim_{x \to +\infty}\vert\sin x\vert^x$

> [!tip]- Indizio
> Cerca due successioni $\to +\infty$ con $\vert\sin x\vert = 1$ e $= 0$.

> [!example]- Soluzione
> Due successioni:
> - $x_n = \frac\pi2 + 2n\pi \to +\infty$: $\vert\sin x_n\vert^{x_n} = 1^{x_n} = 1$;
> - $y_n = n\pi \to +\infty$: $\vert\sin y_n\vert^{y_n} = 0^{y_n} = 0$.
>
> Limiti diversi: **non esiste**.

**C1.19** $\displaystyle\lim_{x \to 0^+}\frac{x^\alpha}{e^x - \sin\frac1x}$, $\alpha > 0$

> [!tip]- Indizio
> Il denominatore sta fra $e^x - 1$ ed $e^x + 1$. Che cosa succede dove $\sin\frac1x = 1$?

> [!example]- Soluzione
> Per $x > 0$: $e^x > 1 \geq \sin\frac1x$, quindi il denominatore sta fra $e^x - 1 > 0$ ed $e^x + 1$.
> - **$\alpha > 1$**: $0 < \frac{x^\alpha}{e^x - \sin\frac1x} \leq \frac{x^\alpha}{e^x - 1} = x^{\alpha - 1} \cdot \frac{x}{e^x - 1} \to 0 \cdot 1 = 0$. Carabinieri: il limite è $0$.
> - **$0 < \alpha \leq 1$**: con $x_n = \frac{1}{\pi/2 + 2n\pi} \to 0^+$, $\sin\frac{1}{x_n} = 1$ e
> $$
> f(x_n) = x_n^{\alpha - 1} \cdot \frac{x_n}{e^{x_n} - 1} \to \begin{cases} 1 & \alpha = 1 \\ +\infty & \alpha < 1 \end{cases}
> $$
> mentre con $y_n = \frac{1}{n\pi}$, $\sin\frac{1}{y_n} = 0$ e $f(y_n) = \frac{y_n^\alpha}{e^{y_n}} \to 0$. **Non esiste.**

**C1.20** $\displaystyle\lim_{x \to 0^+}\frac{\alpha + \sin\frac1x + \cos\frac1x}{x}$, $\alpha > 0$

> [!tip]- Indizio
> $\sin t + \cos t \in [-\sqrt2, \sqrt2]$: confronta $\alpha$ con $\sqrt2$.

> [!example]- Soluzione
> $\sin t + \cos t = \sqrt2\sin\left(t + \frac\pi4\right) \in [-\sqrt2, \sqrt2]$.
> - **$\alpha > \sqrt2$**: numeratore $\geq \alpha - \sqrt2 > 0$, quindi $f(x) \geq \frac{\alpha - \sqrt2}{x} \to +\infty$. Il limite è $+\infty$.
> - **$\alpha \leq \sqrt2$**: con $\frac{1}{x_n} = \frac\pi4 + 2n\pi$, il numeratore vale $\alpha + \sqrt2$ e $f(x_n) \to +\infty$; con $\frac{1}{y_n} = \frac{5\pi}{4} + 2n\pi$, vale $\alpha - \sqrt2 \leq 0$ e $f(y_n) \to -\infty$ (se $\alpha < \sqrt2$) oppure $f(y_n) = 0$ (se $\alpha = \sqrt2$). **Non esiste.**

**C1.21** $\displaystyle\lim_{x \to +\infty}\frac{\lfloor x\rfloor}{x}$

> [!tip]- Indizio
> $x - 1 < \lfloor x\rfloor \leq x$.

> [!example]- Soluzione
> $x - 1 < \lfloor x\rfloor \leq x$, divido per $x > 0$:
> $$
> 1 - \frac1x < \frac{\lfloor x\rfloor}{x} \leq 1.
> $$
> Carabinieri: il limite è $1$.

**C1.22** $\displaystyle\lim_{x \to 0^+}\left\lfloor\frac1x\right\rfloor\sin x$

> [!tip]- Indizio
> $\frac1x - 1 < \lfloor\frac1x\rfloor \leq \frac1x$, poi moltiplica per $\sin x > 0$.

> [!example]- Soluzione
> $\frac1x - 1 < \left\lfloor\frac1x\right\rfloor \leq \frac1x$, moltiplico per $\sin x > 0$ ($0 < x < \pi$):
> $$
> \frac{\sin x}{x} - \sin x < \left\lfloor\frac1x\right\rfloor\sin x \leq \frac{\sin x}{x}.
> $$
> Gli estremi vanno a $1 - 0$ e $1$: il limite è $1$.

**C1.27** $\displaystyle\lim_{n \to +\infty}\log(1 + n^n) \cdot \log(1 + e^{-n})$

> [!tip]- Indizio
> Stima $\log(1 + n^n)$ dall'alto e usa il limite notevole del logaritmo sull'altro fattore.

> [!example]- Soluzione
> - $\log(1 + n^n) = \log\left(n^n(1 + n^{-n})\right) = n\log n + \log(1 + n^{-n}) \leq n\log n + 1 \leq n^2 + 1$ (per $n \geq 1$, $\log n \leq n$);
> - $\log(1 + e^{-n}) = \frac{\log(1 + e^{-n})}{e^{-n}} \cdot e^{-n}$, con la frazione che tende a $1$.
>
> $$
> 0 \leq \log(1 + n^n)\log(1 + e^{-n}) \leq \frac{n^2 + 1}{e^n} \cdot \frac{\log(1 + e^{-n})}{e^{-n}} \to 0 \cdot 1 = 0
> $$
> (gerarchia). Il limite è $0$.

**C1.28** $\displaystyle\lim_{n \to +\infty}\frac{\sqrt[n]{\cos\frac1n} - 1}{\tan\frac1n - \sin\frac1n}$

> [!tip]- Indizio
> Sotto $\tan t(1 - \cos t)$; sopra $e^{t\log\cos t} - 1$.

> [!example]- Soluzione
> $t = \frac1n \to 0^+$. Sotto: $\tan t - \sin t = \tan t(1 - \cos t)$. Sopra: $\sqrt[n]{\cos t} = e^{t\log\cos t}$, con $w = t\log\cos t \to 0$ e $u = \cos t - 1$:
> $$
> \frac{e^w - 1}{\tan t(1 - \cos t)} = \frac{e^w - 1}{w} \cdot \frac{t \cdot \frac{\log(1 + u)}{u} \cdot (\cos t - 1)}{\tan t(1 - \cos t)} = \underbrace{\frac{e^w - 1}{w}}_{\to 1} \cdot \underbrace{\frac{\log(1 + u)}{u}}_{\to 1} \cdot \left(-\frac{t}{\tan t}\right) \to -1
> $$

**C1.29** $\displaystyle\lim_{n \to +\infty}n\left(\sqrt[n]3 - \sqrt[n]2\right)$

> [!tip]- Indizio
> Aggiungi e togli $1$: due limiti $\frac{a^x - 1}{x}$.

> [!example]- Soluzione
> Aggiungo e tolgo $1$, con $\frac1n \to 0$ (limite notevole $\frac{a^x - 1}{x} \to \log a$ lungo $x_n = \frac1n$):
> $$
> \frac{3^{1/n} - 1}{1/n} - \frac{2^{1/n} - 1}{1/n} \to \log 3 - \log 2 = \log\frac32
> $$

**C1.30** $\displaystyle\lim_{n \to +\infty}n^2\left(\sqrt[n^2]{e} - \sqrt[3]{\frac{n^2 - 1}{n^2}} + \log\cos\frac1n\right)$

> [!tip]- Indizio
> $t = \frac{1}{n^2}$; aggiungi e togli $1$, tre limiti notevoli.

> [!example]- Soluzione
> $t = \frac{1}{n^2} \to 0^+$, $\sqrt[n^2]e = e^t$, $\sqrt[3]{\frac{n^2 - 1}{n^2}} = (1 - t)^{1/3}$. Aggiungo e tolgo $1$:
> $$
> \frac{e^t - 1}{t} - \frac{(1 - t)^{1/3} - 1}{t} + \frac{\log\left(1 + (\cos\frac1n - 1)\right)}{\cos\frac1n - 1} \cdot \frac{\cos\frac1n - 1}{1/n^2} \to 1 - \left(-\frac13\right) + 1 \cdot \left(-\frac12\right) = \frac56
> $$
> Il secondo pezzo: $\frac{(1 + (-t))^{1/3} - 1}{-t} \cdot (-1) \to \frac13 \cdot (-1)$.

**C1.33** $\displaystyle\lim_{n \to +\infty}n\left(\tan\frac1n - \sin\frac1n\right)$

> [!tip]- Indizio
> $\tan t - \sin t = \tan t(1 - \cos t)$.

> [!example]- Soluzione
> $t = \frac1n$, $n = \frac1t$:
> $$
> \frac{\tan t(1 - \cos t)}{t} = \frac{\tan t}{t} \cdot (1 - \cos t) \to 1 \cdot 0 = 0
> $$

### Esercizio 2 (continuità)

Dopo aver determinato l'insieme di definizione delle seguenti funzioni, studiare la continuità, classificando gli eventuali punti di non continuità. (<span class="src">p. 3</span>, <span class="src">p. 4</span>)

**C2.1 e C2.2** $f(x) = \frac1x$ per $x \neq 0$, $f(0) = 0$; e $f(x) = \frac1x$.

> [!tip]- Indizio
> Il punto $0$ sta nel dominio di tutte e due?

> [!example]- Soluzione
> - C2.1: $D = \mathbb{R}$. In $0$: $\lim_{x \to 0^\pm}\frac1x = \pm\infty$, **seconda specie**. Continua altrove.
> - C2.2: $D = \mathbb{R} \setminus \{0\}$, **continua su tutto il dominio**. $0$ non è nel dominio: non è un punto di discontinuità.

**C2.3 e C2.4** $f(x) = \arctan\frac1x$ per $x \neq 0$, $f(0) = 0$; e $f(x) = \arctan\frac1x$.

> [!tip]- Indizio
> Dove va $\frac1x$ per $x \to 0^\pm$?

> [!example]- Soluzione
> - C2.3: $D = \mathbb{R}$. In $0$: $\frac1x \to \pm\infty$ per $x \to 0^\pm$, quindi $f \to \pm\frac\pi2$. Laterali finiti e diversi: **salto**.
> - C2.4: $D = \mathbb{R} \setminus \{0\}$, continua su $D$.

**C2.5** $f(x) = \arctan\frac{1}{x^2}$ per $x \neq 0$, $f(0) = 2026$.

> [!tip]- Indizio
> Il limite in $0$ esiste: è uguale al valore?

> [!example]- Soluzione
> $D = \mathbb{R}$. In $0$: $\frac{1}{x^2} \to +\infty$ da tutte e due le parti, $f \to \frac\pi2 \neq 2026$. **Eliminabile** (ridefinendo $f(0) = \frac\pi2$ diventa continua).

**C2.6** $f(x) = \frac{x}{\sin(\pi x)}$ per $x \notin \mathbb{Z}$, $f(x) = 0$ per $x \in \mathbb{Z}$.

> [!tip]- Indizio
> In $0$ limite notevole; negli altri interi il numeratore non va a $0$.

> [!example]- Soluzione
> $D = \mathbb{R}$, continua su $\mathbb{R} \setminus \mathbb{Z}$.
> - In $0$: $\frac{x}{\sin(\pi x)} = \frac1\pi \cdot \frac{\pi x}{\sin(\pi x)} \to \frac1\pi \neq 0 = f(0)$. **Eliminabile.**
> - In $k \in \mathbb{Z}$, $k \neq 0$: numeratore $\to k \neq 0$; $\sin(\pi x) = (-1)^k\sin(\pi(x - k)) \to 0$ con segni opposti ai due lati. Laterali $\pm\infty$: **seconda specie**.

**C2.7** $f(x) = (-x)^x$ per $x < 0$, $f(x) = \sin\left(x + \frac\pi2\right)$ per $x \geq 0$.

> [!tip]- Indizio
> $(-x)^x = e^{x\log(-x)}$, e $t\log t \to 0$.

> [!example]- Soluzione
> $D = \mathbb{R}$ ($-x > 0$ per $x < 0$). Continua per $x \neq 0$ (elementari). In $0$:
> - sinistra: $(-x)^x = e^{x\log(-x)}$, con $t = -x \to 0^+$: $x\log(-x) = -t\log t \to 0$, quindi $f \to e^0 = 1$;
> - destra e valore: $\sin\left(0 + \frac\pi2\right) = 1$.
>
> **Continua su tutto $\mathbb{R}$.**

**C2.12** $f(x) = \lfloor\sin x\rfloor$

> [!tip]- Indizio
> Fai la tabella dei valori di $\lfloor\sin x\rfloor$ su un periodo.

> [!example]- Soluzione
> $D = \mathbb{R}$, periodica di periodo $2\pi$. Su $[0, 2\pi)$:
>
> | $x$ | $\sin x$ | $f(x)$ |
> | --- | --- | --- |
> | $\frac\pi2$ | $1$ | $1$ |
> | $[0, \pi] \setminus \{\frac\pi2\}$ | $[0, 1)$ | $0$ |
> | $(\pi, 2\pi)$ | $< 0$ | $-1$ |
>
> - $x = \frac\pi2 + 2k\pi$: limite $0$, valore $1$. **Eliminabile.**
> - $x = 2k\pi$: sinistra $-1$, destra $0 = f(2k\pi)$. **Salto** (continua da destra).
> - $x = \pi + 2k\pi$: sinistra $0 = f$, destra $-1$. **Salto** (continua da sinistra).
>
> Continua altrove (costante a tratti).

**C2.14** $f(x) = \frac{1}{\lfloor x\rfloor + 1 - x}$

> [!tip]- Indizio
> $x - \lfloor x\rfloor \in [0, 1)$: il denominatore si annulla? Che cosa succede a sinistra di un intero?

> [!example]- Soluzione
> $x - \lfloor x\rfloor \in [0, 1)$, quindi il denominatore $1 - (x - \lfloor x\rfloor) \in (0, 1]$ non si annulla mai: $D = \mathbb{R}$. Su $(k, k + 1)$ è $\frac{1}{k + 1 - x}$, continua. In $k \in \mathbb{Z}$:
> - destra: $\frac{1}{k + 1 - x} \to 1 = f(k)$;
> - sinistra: su $(k - 1, k)$ è $\frac{1}{k - x} \to \frac{1}{0^+} = +\infty$.
>
> **Seconda specie** in ogni intero (continua da destra).

**C2.15** $f(x) = \dfrac{1}{\lfloor 1/x\rfloor}$ per $x < 0$, $f(x) = 0$ per $x \geq 0$.

> [!tip]- Indizio
> Per quali $x < 0$ cambia $\lfloor\frac1x\rfloor$?

> [!example]- Soluzione
> Per $x < 0$, $\frac1x < 0$, quindi $\lfloor\frac1x\rfloor \leq -1$ non è mai $0$: $D = \mathbb{R}$.
> - **In $0$**: per $x \to 0^-$, $\left\lfloor\frac1x\right\rfloor \leq \frac1x \to -\infty$, quindi $f \to 0 = f(0)$. Continua.
> - **Per $x < 0$**: se $\frac1x \in (-(k + 1), -k)$, cioè $x \in \left(-\frac1k, -\frac{1}{k + 1}\right)$, è $f = -\frac{1}{k + 1}$, costante; per $x \leq -1$, $f = -1$.
> - In $x = -\frac1k$ ($k \geq 1$): $f\left(-\frac1k\right) = -\frac1k$, a sinistra vale $-\frac1k$, a destra $-\frac{1}{k + 1}$. **Salto** (continua da sinistra).

## Errori tipici

- Studiare la derivabilità in un punto di raccordo senza controllare prima la continuità (7.5: le derivate si possono pareggiare, ma la funzione salta).
- Dire "non derivabile" perché c'è un modulo: $\vert x\vert\sin x$, $x\vert\cos x\vert$, $\cosh\vert x\vert$ sono derivabili in $0$ (1.1, 1.3, 2.10).
- Applicare la formula della derivata dove non vale: $\sqrt{x + \sqrt x}$ in $0$, $\arcsin\cdot\arccos$ in $\pm1$ (2.4, 2.6). Lì serve il rapporto incrementale.
- Nella tangente all'inversa, calcolare $f'$ in $y_0$ invece che in $x_0 = f^{-1}(y_0)$, o scambiare i ruoli di $x_0$ e $y_0$ nell'equazione (esercizi 4-6).
- Concludere "esattamente tre soluzioni" senza la monotonia sui tratti (esercizio 8): Fermat dà solo i candidati.
- Considerare $\left[0^{-\infty}\right]$ o $\frac{\log(\log x)}{\log(\log x)}$ come forme indeterminate (C1.12, C1.13).
- Chiamare discontinuità un punto fuori dal dominio (C2.2, C2.4).

## Domande

- Come si studia la derivabilità di una funzione a tratti nel punto di raccordo? Perché la continuità va controllata prima?

- Quali sono i tre tipi di punti di non derivabilità per una funzione continua, e come si riconoscono dalle derivate laterali?

- Enuncia il teorema di derivazione della funzione inversa. Come si scrive la retta tangente al grafico di $f^{-1}$ nel punto di ascissa $y_0$?

- Il prodotto di una funzione non derivabile in $x_0$ per una derivabile può essere derivabile in $x_0$? Fai un esempio e un controesempio.

- Che cosa dice il teorema di Fermat, e perché da solo non basta a contare le soluzioni di $g(x) = \alpha$?

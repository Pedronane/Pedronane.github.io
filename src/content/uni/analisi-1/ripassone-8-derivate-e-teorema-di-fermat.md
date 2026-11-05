---
title: Ripassone 8 · Derivate e teorema di Fermat
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: riferimento
stato: completa
data: 2026-11-05
lezioni: []
ordine: 999
---

Parte di [Ripassone finale](/uni/analisi-1/ripassone-finale/). Testi delle slide, annotazioni del prof e provette vere: le righe in corsivo tra parentesi segnalano una fonte corretta o uno svolgimento che non viene dalla fonte.

## Alla lettera dalle slide

> [!abstract] Definizione (la derivata) · slide 5
> Consideriamo una funzione $f : (a, b) \to \mathbb{R}$ ed un punto $x_0 \in (a, b)$. Diciamo che $f$ è derivabile in $x_0$ se esiste ed è finito il limite
> $$
> f'(x_0) := \lim_{x \to x_0}\frac{f(x) - f(x_0)}{x - x_0} = \lim_{h \to 0}\frac{f(x_0 + h) - f(x_0)}{h}.
> $$
> Tale limite è detto derivata della funzione $f$ nel punto $x_0$. Viene indicato in vari modi: $f'(x_0)$, $Df(x_0)$, $\frac{df}{dx}(x_0)$.
>
> Se anziché il limite globale consideriamo i limiti destro e sinistro, abbiamo le definizioni di derivata destra e sinistra:
> $$
> f'(x_0^{\pm}) := \lim_{x \to x_0^{\pm}}\frac{f(x) - f(x_0)}{x - x_0}.
> $$

> [!abstract] Significato geometrico (la retta tangente) · slide 6
> La definizione di derivata è legata a quella di retta tangente ad un punto del grafico di una funzione.
>
> $m_h = \frac{f(x_0 + h) - f(x_0)}{h}$ coeff. angolare della retta secante.
>
> Equazione della secante: $y = f(x_0) + m_h(x - x_0)$.
>
> $\displaystyle\lim_{h \to 0} m_h = f'(x_0)$ coeff. angolare della tangente.
>
> Equazione della tangente: $y = f(x_0) + f'(x_0)(x - x_0)$.

> [!abstract] Retta tangente come migliore approssimante affine · slide 7
> Tra tutte le rette che passano per il punto $P_0 = (x_0, f(x_0))$, la tangente è quella che meglio approssima il grafico di $f(x)$ vicino a $P_0$. Infatti:
> $$
> \lim_{x \to x_0}\frac{f(x) - f(x_0)}{x - x_0} = f'(x_0)
> $$
> equivale a
> $$
> \lim_{x \to x_0}\frac{f(x) - f(x_0)}{x - x_0} - f'(x_0) = 0
> $$
> ovvero a
> $$
> \lim_{x \to x_0}\frac{f(x) - \big[f(x_0) + f'(x_0)(x - x_0)\big]}{x - x_0} = 0.
> $$
> Questo significa che la differenza $f(x) - \big[f(x_0) + f'(x_0)(x - x_0)\big]$ tra la funzione e la retta tangente tende a zero più rapidamente di $x - x_0$.

> [!abstract] Teorema (derivabilità implica continuità) · slide 9
> Supponiamo che $f : (a, b) \to \mathbb{R}$ sia derivabile in $x_0 \in (a, b)$. Allora $f$ è continua in $x_0$.

> [!abstract] Esempio (il valore assoluto) · slide 10
> Il valore assoluto non è derivabile in $0$.

> [!abstract] Esempi (cuspidi e punti a tangente verticale) · slide 11
> ...ma non tutte le funzioni continue sono derivabili. Altri esempi: cuspidi e punti a tangente verticale.

> [!abstract] Una "perversione" matematica (funzione di Weierstrass) · slide 12
> Esistono funzioni continue che non sono derivabili in alcun punto! Un esempio è la Funzione di Weierstrass, definita da
> $$
> f(x) = \sum_{n=0}^{\infty} a^n\cos(b^n\pi x)
> $$
> dove i parametri sono scelti come segue: $a \in (0, 1)$, $b \in \mathbb{N}$ dispari, $ab > 1 + \frac32\pi$.

> [!abstract] Derivate di funzioni elementari · slide 14
> Le funzioni costanti hanno derivata nulla (il viceversa non è vero in generale, ad esempio la funzione segno definita su $\mathbb{R} \setminus \{0\}$ ha derivata nulla in tutto il suo dominio ma nel complesso non è costante).
>
> $D[x^n] = nx^{n-1}$ per $n \in \mathbb{N}^+$.

> [!abstract] Derivate di funzioni elementari · slide 15, 16, 17
> $D[x^{-1}] = -x^{-2}$.
>
> $D[e^x] = e^x$.
>
> $D[\log(x)] = \frac1x$.
>
> $D[\sin(x)] = \cos(x)$.
>
> $D[\cos(x)] = -\sin(x)$. Calcolo simile a quello per la derivata di $\sin(x)$.

> [!abstract] Teorema (linearità della derivata) · slide 18
> Siano $f(x)$, $g(x)$ due funzioni derivabili in $x_0$. Allora fissate due costanti $a, b \in \mathbb{R}$ si ha che la funzione combinazione lineare $a\,f(x) + b\,g(x)$ è derivabile in $x_0$ e vale
> $$
> (a\,f + b\,g)'(x_0) = a\,f'(x_0) + b\,g'(x_0)
> $$
> La dimostrazione è molto facile ed è lasciata come esercizio.

> [!abstract] Teorema (regola di Leibnitz) · slide 19
> Siano $f(x)$, $g(x)$ due funzioni derivabili in $x_0$. Allora la funzione prodotto $f(x) \cdot g(x)$ è derivabile in $x_0$ e vale
> $$
> (f \cdot g)'(x_0) = f'(x_0) \cdot g(x_0) + f(x_0) \cdot g'(x_0)
> $$

> [!abstract] Teorema (regola della catena) · slide 20
> Siano $g(x)$ derivabile in $x_0$ e $f(y)$ derivabile in $y_0 = g(x_0)$. Allora la composizione $f \circ g$ è derivabile in $x_0$ e vale
> $$
> (f \circ g)'(x_0) = f'(y_0) \cdot g'(x_0)
> $$

> [!abstract] Teorema (derivazione della funzione inversa) · slide 23
> Sia $f(x)$ invertibile su $(a, b)$ e derivabile in $x_0$ con $f'(x_0) \neq 0$. Allora la funzione inversa $f^{-1}$ è derivabile in $y_0 = f(x_0)$ e vale
> $$
> (f^{-1})'(y_0) = \frac{1}{f'(x_0)}
> $$

> [!abstract] Corollario (derivazione di un quoziente) · slide 25
> Siano $f(x)$ e $g(x)$ derivabili in $x_0$, con $g(x_0) \neq 0$. Allora la funzione quoziente $f(x)/g(x)$ è derivabile in $x_0$ e vale
> $$
> (f/g)'(x_0) = \frac{f'(x_0)g(x_0) - f(x_0)g'(x_0)}{g(x_0)^2}
> $$

> [!abstract] Ulteriori regole · slide 26
> $D[x^\alpha] = \alpha x^{\alpha - 1}$ per ogni $\alpha \in \mathbb{R}$. Questo segue dal fatto che $x^\alpha = e^{\alpha\log(x)}$, quindi derivando con la regola della catena si ha
> $$
> D[x^\alpha] = D[e^{\alpha\log(x)}] = e^{\alpha\log(x)} \cdot D[\alpha\log(x)] = x^\alpha \cdot \frac{\alpha}{x} = \alpha x^{\alpha - 1}.
> $$
> $D[a^x] = a^x\log(a)$. Come in precedenza, basta scrivere $a^x = e^{x\log(a)}$ e derivare usando la regola della catena.
>
> $D[\log_a(x)] = \frac{1}{x\log(a)}$. Per questo possiamo usare la regola di derivazione dell'inversa:
> $$
> D[\log_a(x)] = \frac{1}{D[a^y](y = \log_a(x))} = \frac{1}{a^{\log_a(x)}\log(a)} = \frac{1}{x\log(a)}
> $$

> [!abstract] Tabella di derivate di funzioni elementari · slide 27
> | $f(x)$ | $f'(x)$ | $f(x)$ | $f'(x)$ |
> | --- | --- | --- | --- |
> | $\alpha$ $(\alpha \in \mathbb{R})$ | $0$ | $x^\alpha$ $(\alpha \in \mathbb{R})$ | $\alpha x^{\alpha - 1}$ |
> | $\sin x$ | $\cos x$ | $\cos x$ | $-\sin x$ |
> | $e^x$ | $e^x$ | $\log(\vert x\vert)$ | $\frac1x$ |
> | $a^x$ $(a > 0, a \neq 1)$ | $a^x\log(a)$ | $\log_a(\vert x\vert)$ | $\frac{1}{x\log(a)}$ |
> | $\tan(x)$ | $1 + \tan^2(x)$ | $\arctan(x)$ | $\frac{1}{1 + x^2}$ |
> | $\arcsin(x)$ | $\frac{1}{\sqrt{1 - x^2}}$ | $\arccos(x)$ | $-\frac{1}{\sqrt{1 - x^2}}$ |
> | $\sinh(x)$ | $\cosh(x)$ | $\cosh(x)$ | $\sinh(x)$ |

> [!abstract] Definizione (massimi e minimi relativi) · slide 32
> Sia $f : D \to \mathbb{R}$ una funzione definita su un dominio $D \subset \mathbb{R}$ non vuoto, e sia $x_0 \in D$. Diciamo che $x_0$ è un punto di minimo relativo per $f$ se esiste $\delta > 0$ tale che, per ogni $x \in D$ verificante $\vert x - x_0\vert \leq \delta$, si ha $f(x) \geq f(x_0)$.
>
> Analogamente, diciamo che $x_0$ è un punto di massimo relativo per $f$ se esiste $\delta > 0$ tale che, per ogni $x \in D$ verificante $\vert x - x_0\vert \leq \delta$, si ha $f(x) \leq f(x_0)$.

> [!abstract] Teorema (Fermat) · slide 33
> Supponiamo $f : (a, b) \to \mathbb{R}$ ed $x_0 \in (a, b)$ tali che $x_0$ è un punto di massimo o di minimo relativo per $f$, e inoltre $f$ è derivabile in $x_0$. Allora $f'(x_0) = 0$.

## Il prof ha scritto

- slide 5, a mano: «RAPPORTO INCREMENTALE» sul quoziente; «$h := x - x_0$ (INCREMENTO)».
- slide 5, pagina scritta a mano: «OSS: il fatto che si scelga $(a, b)$ aperto garantisce che se $\vert h\vert$ è sufficientemente piccolo $x_0 + h \in (a, b)$».
- slide 6, a mano: «RAPPORTO INCREMENTALE» accanto a $m_h$; «(tangente di $\theta$)»; «numeratore» e «denominatore» sul grafico; «PUNTO DI PASSAGGIO» accanto a $(x_0, f(x_0))$; «COEFF. ANGOLARE» sotto $f'(x_0)$.
- slide 6, pagina scritta a mano: «OSSERVAZIONE DI NOTAZIONE. Spesso si dice: per $f : (a, b) \to \mathbb{R}$ derivabile in $x_0 \in (a, b)$ "calcolare l'equazione della retta tangente al grafico di $f$ in $x_0$". N.B. Si intende che il punto del grafico è il punto $(x_0, f(x_0))$».
- slide 7, a mano: «COINCIDE CON LA FORMULA VISTA NELLA SLIDE PRECEDENTE PER L'EQUAZIONE DELLA RETTA TANGENTE».
- slide 10, a mano: «Mostriamo che il limite destro e sinistro dei rapporti incrementali NON COINCIDONO»; «Quindi non esiste il limite dei rapporti incrementali in $0$ ovvero $f(x) = \vert x\vert$ non è derivabile in $0$»; «OSS abbiamo (quasi) mostrato che $f'(x) = +1$ per $x > 0$, $-1$ per $x < 0$».
- slide 11, a mano: «$\sim \sqrt{\vert x\vert}$» sotto la cuspide e «$\sim x^{1/3}$» sotto la tangente verticale.
- slide 14, a mano: «se $f(x) = c$ $\forall x \in \mathbb{R}$, $\lim_{h \to 0}\frac{f(x + h) - f(x)}{h}$, $c - c = 0$, $= 0$»; «$\mathrm{sgn}(x) = 1$ per $x > 0$, $-1$ per $x < 0$» con il grafico a due gradini.
- slide 18, 19: sottolineato in rosso «due funzioni derivabili in $x_0$».
- slide 20, a mano: sottolineati «$y_0 = g(x_0)$» e «$f'(y_0)$».
- slide 23, a mano: «$x_0 \in (a, b)$» scritto sopra $x_0$; sottolineati «$f'(x_0) \neq 0$» e «$y_0 = f(x_0)$»; «$x_0 = f^{-1}(y_0)$» a lato della formula; «$= (f^{-1})'(y_0)$» sotto la formula.
- slide 25, a mano: sottolineato «$g(x_0) \neq 0$»; «$\frac{1}{g(x)} = h(g(x))$ dove $h(y) = \frac1y$»; «$\frac fg = f \cdot \frac1g$».
- slide 26, a mano: «$f(y) = e^y$», «$g(x) = x\log(a)$».
- slide 28, a mano: «PER CASA» accanto al punto 3).
- slide 32, a mano: «un INTORNO $U$ di $x_0$, $U \subseteq D$, tale che $\forall x \in U$ si ha $f(x) \geq f(x_0)$».
- slide 33, a mano: «massimo o minimo = ESTREMO»; sottolineato «e inoltre $f$ è derivabile in $x_0$».

## Svolti a lezione

### Derivata di $x^2$ in $x_0 = 1$ e retta tangente (slide 8)
Esercizio: calcolare la derivata della funzione $f(x) = x^2$ nel punto $x_0 = 1$.

«Dobbiamo calcolare»
$$
\lim_{h \to 0}\frac{f(x_0 + h) - f(x_0)}{h} = \lim_{h \to 0}\frac{(1 + h)^2 - 1}{h} = \lim_{h \to 0}\frac{\cancel{1} + 2h + h^2 - \cancel{1}}{h} = \lim_{h \to 0}(2 + h) = \boxed{2}
$$
Esercizio: scrivere l'equazione della retta tangente al grafico $y = x^2$ nel punto $P_0 = (1, 1)$.
$$
y = f(x_0) + f'(x_0)(x - x_0), \qquad y = 1 + 2(x - 1)
$$
con $f(x_0) = 1$ e $f'(x_0) = 2$.

### Il valore assoluto non è derivabile in $0$ (slide 10)
$$
\lim_{x \to 0^+}\frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^+}\frac{x - 0}{x - 0} = \boxed{1}
$$
«Tuttavia»
$$
\lim_{x \to 0^-}\frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^-}\frac{-x - 0}{x - 0} = \boxed{-1}
$$
con $f(x) = \vert x\vert$, $\vert x\vert = -x$ per $x < 0$ e $\vert x\vert = x$ per $x > 0$.

«Quindi non esiste il limite dei rapporti incrementali in $0$ ovvero $f(x) = \vert x\vert$ non è derivabile in $0$.»

### $D[x^n]$ con la definizione (slide 14)
$$
(x + h)^n = \sum_{k=0}^{n}\binom{n}{k}x^{n-k}h^k = x^n + nx^{n-1}h + h^2(\dots)
$$
$$
\lim_{h \to 0}\frac{(x + h)^n - x^n}{h} = \lim_{h \to 0}\frac{\cancel{x^n} + nx^{n-1}h + h^2(\dots) - \cancel{x^n}}{h} = nx^{n-1}
$$

### $D[x^{-1}]$ con la definizione (slide 15)
$$
\lim_{h \to 0}\frac{(x + h)^{-1} - x^{-1}}{h} = \lim_{h \to 0}\frac1h\left(\frac{1}{x + h} - \frac1x\right) = \lim_{h \to 0}\frac1h\left(\frac{\cancel{x} - \cancel{x} - h}{x(x + h)}\right) = \lim_{h \to 0}\frac{1}{\cancel{h}}\cdot\frac{-\cancel{h}}{x(x + h)} = -\frac{1}{x^2}
$$

### $D[\log(x)]$ con la definizione (slide 16)
«$x + h = x\left(1 + \frac hx\right)$», «$\log(x + h) = \log x + \log\left(1 + \frac hx\right)$», «$\log(x + h) - \log(x) = \log\left(\frac{x + h}{x}\right) = \log\left(1 + \frac hx\right)$»
$$
\lim_{h \to 0}\frac{\log(x + h) - \log(x)}{h} = \lim_{h \to 0}\frac{\log\left(1 + \frac hx\right)}{h} \overset{y = h/x}{=} \lim_{y \to 0}\frac1x\,\frac{\log(1 + y)}{y} = \frac1x
$$
«$\frac{\log(1 + y)}{y} \to 1$ per $y \to 0$».

### Linearità, Leibnitz, catena (slide 18, 19, 20, 22)
Slide 18, $D[3e^x - 2\cos(x)]$ con $a = 3$, $f(x) = e^x$, $b = -2$, $g(x) = \cos x$:
$$
3e^x - 2(-\sin x) = 3e^x + 2\sin x
$$
Slide 19, $D[x^2 \cdot \sin(x)]$ con $f(x) = x^2$, $f'(x) = 2x$, $g(x) = \sin x$, $g'(x) = \cos x$:
$$
2x\sin x + x^2\cos x
$$
Slide 20, $D[\sin(x^2)]$ con $g(x) = x^2$, $f(y) = \sin y$, $g'(x) = 2x$, $f'(y) = \cos y$:
$$
\cos(x^2) \cdot 2x = 2x\cos(x^2)
$$
Slide 22, $D[e^{3x}]$ con $f(y) = e^y$, $g(x) = 3x$:
$$
D[e^{3x}] = e^{3x} \cdot 3 = 3e^{3x}
$$
Slide 22, $D[\sin(7x^5 - 12)]$ con $f(y) = \sin y$, $g(x) = 7x^5 - 12$:
$$
D[\sin(7x^5 - 12)] = \cos(7x^5 - 12) \cdot (35x^4)
$$
Slide 22, $D[\log(\sin(x^2))]$, con $(f \circ g)'(x) = f'(g(x)) \cdot g'(x)$, $f(y) = \log(y)$, $g(x) = \sin(x^2)$:
$$
D[\log(\sin(x^2))] = \frac{1}{\sin(x^2)}\cos(x^2)\,(2x) = \frac{2x}{\tan(x^2)}
$$

### $D[\arcsin(y)]$ con la formula dell'inversa (slide 24)
Esercizio: usando la formula per la derivata dell'inversa, dimostrare che $D[\arcsin(x)] = \frac{1}{\sqrt{1 - x^2}}$.

«$\arcsin(y) = x \iff \sin x = y$»
$$
D[\arcsin(y)] = \frac{1}{\cos x} = \frac{1}{\cos(\arcsin(y))}
$$
«$\cos^2 x = 1 - \sin^2 x$», «$\arcsin : [-1, 1] \to \left[-\frac\pi2, \frac\pi2\right]$»
$$
= \frac{1}{\sqrt{1 - \sin^2(\arcsin(y))}} = \frac{1}{\sqrt{1 - y^2}}
$$

### Esempio: $f(x) = x^3$ e l'ipotesi $f'(x_0) \neq 0$ (pagina scritta a mano tra le slide 24 e 25)
«ESEMPIO $f(x) = x^3$, $f'(x) = 3x^2$. $f$ è invertibile in tutto $\mathbb{R}$, la sua inversa è la funzione $f^{-1}(y) = \sqrt[3]{y} = (y)^{\frac13}$. In $x_0 = 0$, $f'(x_0) = 0$ e quindi non posso applicare il teorema.» Sotto, il grafico di $\sqrt[3]{x}$.

### $D[\tan x]$ (slide 28)
«$\tan x = \frac{\sin x}{\cos x}$», $f(x) = \sin x$, $f'(x) = \cos x$, $g(x) = \cos x$, $g'(x) = -\sin x$, $(f/g)' = \frac{f'g - fg'}{g^2}$:
$$
D[\tan x] = \frac{\cos x\cos x - (-\sin x)\sin x}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \begin{cases}\dfrac{1}{\cos^2 x} \\[2mm] 1 + \tan^2 x\end{cases}
$$

### $D[x^x]$ (slide 28)
$x^x = e^{\log x^x} = e^{x\log x}$, con $f(y) = e^y$, $g(x) = x\log x$, $f'(y) = e^y$, $g'(x) = 1 \cdot \log x + x \cdot \frac1x = \log x + 1$:
$$
D[x^x] = e^{x\log x}(1 + \log x) = x^x(1 + \log x)
$$

### Derivabilità di $f(x) = x\vert x\vert$ (slide 29)
Esercizio: valutare la (continuità e la) derivabilità di $f(x) = x\vert x\vert$.

«$D(f) = \mathbb{R}$. $f$ è prodotto di funzioni continue, quindi è continua.»

«In $x \neq 0$, sia $x$ che $\vert x\vert$ sono derivabili, quindi $f$ è derivabile e posso usare la regola di Leibnitz.»

«Per verificare la derivabilità di $f$ in $x = 0$, bisogna calcolare il limite del rapporto incrementale.»
$$
f(x) = x\vert x\vert = \begin{cases} x^2 & x \geq 0 \\ -x^2 & x < 0 \end{cases}
$$
$$
\lim_{h \to 0^+}\frac{f(0 + h) - f(0)}{h} = \lim_{h \to 0^+}\frac{h^2 - 0}{h} = 0, \qquad \lim_{h \to 0^-}\frac{f(0 + h) - f(0)}{h} = \lim_{h \to 0^-}\frac{-h^2 - 0}{h} = 0
$$
«Siccome i due limiti ESISTONO e COINCIDONO, la funzione è derivabile in $x = 0$ (e la derivata vale $0$).»

### Derivabilità di $x^\alpha\sin\frac1x$ al variare di $\alpha \geq 0$ (slide 30)
Esercizio: valutare la (continuità e la) derivabilità di
$$
g(x) = \begin{cases} x^\alpha\sin(1/x) & \text{se } x \neq 0 \\ 0 & \text{se } x = 0 \end{cases} \qquad \text{al variare di } \alpha \geqslant 0.
$$

«$D(g) = \mathbb{R}$. Per $x \neq 0$, $g$ è continua in quanto prodotto di (composizioni di) funzioni continue. Per valutare la continuità in $x = 0$, calcolo il limite» $\displaystyle\lim_{x \to 0^+}x^\alpha\sin\frac1x$.

- $\alpha = 0$, $x^\alpha = 1$: $\displaystyle\lim_{x \to 0^+}\sin\frac1x$ «NON ESISTE. LA FUNZIONE NON È CONTINUA in $x = 0$».
- $\alpha > 0$: $\displaystyle\lim_{x \to 0^+}x^\alpha = 0$, $\left\vert\sin\frac1x\right\vert \leq 1$. $\forall x$,
$$
-x^\alpha \leq x^\alpha\sin\frac1x \leq x^\alpha
$$
con estremi che tendono a $0$. «Per il T. dei carabinieri» $\displaystyle\lim_{x \to 0^+}x^\alpha\sin\frac1x = 0$ se $\alpha > 0$. «QUINDI LA FUNZIONE È CONTINUA.»

«DERIVABILITÀ: $x \neq 0$, non ci sono problemi (la funzione è derivabile). Valutiamo la derivabilità in $x = 0$.»
- $\alpha = 0$: «la questione non ha senso: la funzione non è continua, quindi non derivabile».
- $\alpha > 0$:
$$
\lim_{h \to 0^+}\frac{g(h) - g(0)}{h} = \lim_{h \to 0^+}\frac{h^\alpha\sin\frac1h}{h} = \lim_{h \to 0^+}h^{\alpha - 1}\sin\frac1h
$$
con $g(h) = h^\alpha\sin\frac1h$ e $g(0) = 0$. «Se $\alpha > 1$, il limite esiste e vale $0$; se $\alpha < 1$, il limite non esiste.» *(così sulla slide; per $\alpha = 1$ il limite è $\lim \sin\frac1h$, che non esiste, come dice la conclusione)*

«QUINDI, la funzione $g$ è derivabile in $x = 0$ solo se $\alpha > 1$.»

«ATTENZIONE! In $x \neq 0$,»
$$
g'(x) = \alpha x^{\alpha - 1}\sin\frac1x + x^\alpha\left(-\frac{1}{x^2}\right)\left(\cos\frac1x\right) = \alpha x^{\alpha - 1}\sin\frac1x - x^{\alpha - 2}\cos\frac1x
$$
«$\lim_{x \to 0^+}g'(x)$ NON ESISTE se $\alpha \leq 2$. QUINDI: la funzione è derivabile in $x = 0$ anche se $\alpha \in (1, 2]$, MA LA DERIVATA È DISCONTINUA.»

## Crocette delle provette

### 2019, compito 1 domanda 6

La retta tangente al grafico della funzione $f(x) = e^{\cos(2x)}\sin(2x)$ nel punto di ascissa $\pi/4$ ha equazione

- a) $y + 2x - 1 - \pi/2 = 0$
- b) $y = 1 - 2x$
- c) $y = x + 1 - \pi/4$
- d) $y + 2x = \pi/2$

> [!example]- Soluzione
> **a**. $f(\pi/4) = 1$, $f'(x) = e^{\cos 2x}(2\cos 2x - 2\sin^2 2x)$, $f'(\pi/4) = -2$: $y = 1 - 2(x - \pi/4)$. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 2 domanda 7

La retta tangente al grafico della funzione $f(x) = e^{\sin(2x)}\cos(2x)$ nel punto di ascissa $\pi/2$ ha equazione

- a) $y = x - 1 - \pi/2$
- b) $y = -1 + 2x$
- c) $y - 2x + 1 + \pi = 0$
- d) $y = 2x - \pi$

> [!example]- Soluzione
> **c**. $f(\pi/2) = -1$, $f'(x) = e^{\sin 2x}(2\cos^2 2x - 2\sin 2x)$, $f'(\pi/2) = 2$: $y = -1 + 2(x - \pi/2)$. *(conto mio, la chiave dà solo la risposta)*

### simulazione, domanda 7

Siano $f(x) = x^3 - x$, $g(x) = \sin^2 x + \cos(2x)$. Allora $(f \circ g)'\left(\frac{\pi}{4}\right) =$

- a) $\sqrt{2}/8 - 1/4$
- b) $\pi/2$
- c) $-3/4$
- d) $1/4$

> [!example]- Soluzione
> **d**. $g\left(\frac{\pi}{4}\right) = \frac{1}{2}$, $g'(x) = -\sin(2x)$ quindi $g'\left(\frac{\pi}{4}\right) = -1$, $f'(y) = 3y^2 - 1$ quindi $f'\left(\frac{1}{2}\right) = -\frac{1}{4}$: il prodotto è $\frac{1}{4}$. *(conto mio, la chiave dà solo la risposta)*

### simulazione, domanda 8

Sia $f(x) = \sqrt{4 + \sin(\pi x)}$. La retta tangente al grafico di $f$ nel punto $(1, f(1))$ ha equazione

- a) $y = -\frac{\pi}{4}x + \frac{\pi}{4} + 2$
- b) $y = -\frac{\pi}{4}x + 2$
- c) $y = \sqrt{3}$
- d) $y = -\frac{1}{4}x + \frac{9}{4}$

> [!example]- Soluzione
> **a**. $f(1) = 2$, $f'(x) = \frac{\pi\cos(\pi x)}{2\sqrt{4 + \sin(\pi x)}}$ quindi $f'(1) = -\frac{\pi}{4}$: $y = 2 - \frac{\pi}{4}(x - 1)$. *(conto mio, la chiave dà solo la risposta)*

## Esercizi delle provette

### 2019, compiti 1 e 5, esercizio 1, 10 punti

Determinare i valori del parametro reale $\alpha$ tali per cui la funzione

$$
f(x) = \begin{cases} \dfrac{\cos(x^2) - \sqrt[3]{1 + 3x^2}}{\sin(2x) + x^2} & \text{se } x > 0 \\ e^{\alpha x} - 1 & \text{se } x \le 0 \end{cases}
$$

1. è continua in $x = 0$;
2. è derivabile in $x = 0$.

> [!example]- Soluzione
> 1. La funzione è continua in $x_0 = 0$ se $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = f(0)$.
>
> Si ha $f(0) = 0$ (usando la II legge).
>
> $$
> \lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (e^{\alpha x} - 1) = 0
> $$
>
> Rimane da verificare la continuità da destra. Usando i limiti notevoli abbiamo
>
> $$
> \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{\cos(x^2) - (1 + 3x^2)^{1/3}}{\sin(2x) + x^2} = \lim_{x \to 0^+} \frac{\frac{\cos(x^2) - 1}{x^4} \cdot x^4 - \frac{(1 + 3x^2)^{1/3} - 1}{3x^2} \cdot 3x^2}{\frac{\sin 2x}{2x} \cdot 2x + x^2}
> $$
>
> $$
> = \lim_{x \to 0^+} \frac{x^2}{x} \cdot \frac{\frac{\cos(x^2) - 1}{x^4} \cdot x^2 - \frac{(1 + 3x^2)^{1/3} - 1}{3x^2} \cdot 3}{2 \cdot \frac{\sin(2x)}{2x} + x} = 0
> $$
>
> Quindi la funzione è continua in $x = 0$, per ogni valore di $\alpha$.
>
> 2. Calcoliamo le derivate destra e sinistra in $x = 0$ come limiti di rapporti incrementali:
>
> $$
> f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^+} \frac{\cos(x^2) - (1 + 3x^2)^{1/3}}{x \cdot (\sin 2x + x^2)}
> $$
>
> $$
> = \lim_{x \to 0^+} \frac{x^2}{x^2} \cdot \frac{\frac{\cos(x^2) - 1}{x^4} \cdot x^2 - \frac{(1 + 3x^2)^{1/3} - 1}{3x^2} \cdot 3}{2 \cdot \frac{\sin(2x)}{2x} + x} = -\frac{1}{2}
> $$
>
> $$
> f'_-(0) = \lim_{x \to 0^-} \frac{e^{\alpha x} - 1}{x} = \alpha
> $$
>
> Quindi la funzione è derivabile in $x = 0$ se e solo se $\alpha = -\dfrac{1}{2}$.

### 2019, compiti 1 e 5, esercizio 2, 10 punti

Si consideri la funzione:

$$
f(x) = \frac{(x - 1)\sqrt{5 - x}}{x + 1}
$$

Analizzarne i limiti significativi, eventuali asintoti (orizzontali/verticali/obliqui), continuità e derivabilità, intervalli di monotonia, massimi e minimi relativi. Raccogliere le informazioni ricavate disegnandone il grafico qualitativo (non è richiesto lo studio della derivata seconda).

> [!example]- Soluzione
> **Dominio**. $5 - x \ge 0$ e $x + 1 \ne 0$, quindi $D = (-\infty, 5] \setminus \{-1\}$.
>
> **Segno**. $f(x) \ge 0 \iff \dfrac{(x-1)\sqrt{5-x}}{x+1} \ge 0$, ovvero se $x < -1$ oppure $1 \le x \le 5$. Notare che $f(x) = 0$ per $x = 1$, $x = 5$.
>
> **Limiti significativi**.
>
> $$
> \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{x\sqrt{-x}\,\left(1 - \frac{1}{x}\right)\sqrt{1 - \frac{5}{x}}}{x\left(1 + \frac{1}{x}\right)} = +\infty
> $$
>
> $\lim_{x \to -1^-} f(x) = +\infty$ (forma indeterminata $\frac{-2\sqrt{6}}{0}$ + valutazione del segno)
>
> $\lim_{x \to -1^+} f(x) = -\infty$ (forma indeterminata $\frac{-2\sqrt{6}}{0}$ + valutazione del segno)
>
> Asintoto verticale $x = -1$. Non ci sono asintoti orizzontali/obliqui.
>
> **Continuità**. La funzione è continua su tutto il suo dominio $D$ per l'algebra delle funzioni continue.
>
> **Derivabilità**. La funzione è derivabile per $x \ne 5, -1$ (algebra delle derivate). Dato che $\sqrt{5 - x}$ non è derivabile in $x = 5$, la derivabilità di $f$ in $x = 5$ va studiata a parte.
>
> Per $x \ne -1, 5$ si ha:
>
> $$
> f'(x) = \frac{\left(\sqrt{5-x} - \frac{x-1}{2\sqrt{5-x}}\right)(x+1) - (x-1)\sqrt{5-x}}{(x+1)^2} = \frac{\left[2(5-x) - x + 1\right](x+1) - 2(x-1)(5-x)}{2\sqrt{5-x}\,(x+1)^2}
> $$
>
> $$
> = \frac{-x^2 - 4x + 21}{2\sqrt{5-x}\,(x+1)^2} = -\frac{(x-3)(x+7)}{2\sqrt{5-x}\,(x+1)^2}
> $$
>
> Segno di $f'$: negativo per $x < -7$, positivo in $(-7, -1)$ e in $(-1, 3)$, negativo in $(3, 5)$ (f decresce, cresce, cresce, decresce).
>
> $x = -7$ punto di minimo relativo
> $x = 3$ punto di massimo relativo
> $x = 5$ punto di minimo relativo
>
> $\lim_{x \to 5^-} f'(x) = -\infty \Rightarrow$ tangente verticale in $x = 5$, $f$ non è derivabile in $x = 5$.
>
> **Grafico qualitativo**: *(figura: a sinistra di $-1$ la curva scende da $+\infty$ fino al minimo in $x = -7$ e risale verso $+\infty$ per $x \to -1^-$; a destra di $-1$ parte da $-\infty$, attraversa l'asse in $x = 1$, sale al massimo in $x = 3$ e scende a $0$ in $x = 5$ con tangente verticale; nessuna curva oltre $x = 5$)*

### 2019, compiti 2 e 6, esercizio 1, 10 punti

Determinare i valori del parametro reale $\alpha$ tali per cui la funzione

$$
f(x) = \begin{cases} \dfrac{\cos(x^3) - \sqrt[4]{1 + 4x^2}}{\sin(3x) + x^3} & \text{se } x > 0 \\ \log(1 + \alpha x) & \text{se } x \le 0 \end{cases}
$$

1. è continua in $x = 0$;
2. è derivabile in $x = 0$.

> [!example]- Soluzione
> 1. La funzione è continua in $x_0 = 0$ se $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = f(0)$.
>
> Si ha $f(0) = \log 1 = 0$.
>
> $$
> \lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \log(1 + \alpha x) = 0
> $$
>
> $$
> \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{\cos(x^3) - 1 + 1 - (1 + 4x^2)^{1/4}}{\sin(3x) + x^3} = \lim_{x \to 0^+} \frac{x^2}{x} \cdot \frac{\frac{\cos(x^3) - 1}{x^6} \cdot x^4 + \frac{1 - (1 + 4x^2)^{1/4}}{4x^2} \cdot 4}{3 \cdot \frac{\sin 3x}{3x} + x^2} = 0
> $$
>
> Quindi la funzione è continua in $x = 0$, per ogni valore di $\alpha$.
>
> 2. Calcoliamo le derivate destra e sinistra in $x_0 = 0$:
>
> $$
> f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^+} \frac{\cos(x^3) - (1 + 4x^2)^{1/4}}{x\,(\sin 3x + x^3)}
> $$
>
> $$
> = \lim_{x \to 0^+} \frac{x^2}{x^2} \cdot \frac{\frac{\cos x^3 - 1}{x^6} \cdot x^4 + \frac{1 - (1 + 4x^2)^{1/4}}{4x^2} \cdot 4}{3 \cdot \frac{\sin 3x}{3x} + x^2} = -\frac{1}{3}
> $$
>
> $$
> f'_-(0) = \lim_{x \to 0^-} \frac{\log(1 + \alpha x)}{x} = \alpha
> $$
>
> Quindi la funzione è derivabile in $x = 0$ se e solo se $\alpha = -\dfrac{1}{3}$.

### 2019, compiti 2 e 6, esercizio 2, 10 punti

Si consideri la funzione:

$$
f(x) = \frac{x\sqrt[3]{x - 1}}{4x + 1}
$$

Analizzarne i limiti significativi, eventuali asintoti (orizzontali/verticali/obliqui), continuità e derivabilità, intervalli di monotonia, massimi e minimi relativi. Raccogliere le informazioni ricavate disegnandone il grafico qualitativo (non è richiesto lo studio della derivata seconda).

> [!example]- Soluzione
> **Dominio**. $4x + 1 \ne 0$, quindi $D = \mathbb{R} \setminus \{-\tfrac{1}{4}\}$.
>
> **Segno**. $f(x) \ge 0 \iff \dfrac{x\sqrt[3]{x-1}}{4x+1} \ge 0$, ovvero se $-\tfrac{1}{4} < x \le 0$ oppure $x \ge 1$. Notare che $f(x) = 0$ per $x = 0$, $x = 1$.
>
> **Limiti significativi**.
>
> $$
> \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x \cdot x^{1/3}\left(1 - \frac{1}{x}\right)^{1/3}}{x\left(4 + \frac{1}{x}\right)} = +\infty
> $$
>
> $$
> \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{x \cdot x^{1/3}\left(1 - \frac{1}{x}\right)^{1/3}}{x\left(4 + \frac{1}{x}\right)} = -\infty
> $$
>
> $\lim_{x \to -\frac{1}{4}^+} f(x) = +\infty$ (forma indeterminata $\frac{\frac{1}{4}\left(\frac{5}{4}\right)^{1/3}}{0}$ + valutazione del segno)
>
> $\lim_{x \to -\frac{1}{4}^-} f(x) = -\infty$ (forma indeterminata $\frac{\frac{1}{4}\left(\frac{5}{4}\right)^{1/3}}{0}$ + valutazione del segno)
>
> Asintoto verticale $x = -\tfrac{1}{4}$. Non ci sono asintoti orizzontali/obliqui.
>
> **Continuità**. La funzione è continua su tutto il suo dominio per l'algebra delle funzioni continue.
>
> **Derivabilità**. La funzione è derivabile per $x \ne -\tfrac{1}{4}, 1$ per l'algebra delle funzioni derivabili. Dato che $\sqrt[3]{x - 1}$ non è derivabile in $x = 1$, la derivabilità di $f$ in $x = 1$ va studiata a parte.
>
> Per $x \ne -\tfrac{1}{4}, 1$ si ha
>
> $$
> f'(x) = \frac{\left[\sqrt[3]{x-1} + \frac{x}{3(x-1)^{2/3}}\right](4x+1) - 4x\sqrt[3]{x-1}}{(4x+1)^2} = \frac{\left[3(x-1) + x\right](4x+1) - 12x(x-1)}{3(x-1)^{2/3}(4x+1)^2}
> $$
>
> $$
> = \frac{4x^2 + 4x - 3}{3(x-1)^{2/3}(4x+1)^2} = \frac{(2x-1)(2x+3)}{3(x-1)^{2/3}(4x+1)^2}
> $$
>
> Segno di $f'$: positivo per $x < -\tfrac{3}{2}$, negativo in $(-\tfrac{3}{2}, -\tfrac{1}{4})$ e in $(-\tfrac{1}{4}, \tfrac{1}{2})$, positivo in $(\tfrac{1}{2}, 1)$ e per $x > 1$.
>
> $x = -\tfrac{3}{2}$ punto di max relativo
> $x = \tfrac{1}{2}$ punto di min relativo
>
> Infine $\lim_{x \to 1} f'(x) = +\infty \Rightarrow$ tangente verticale in $x = 1$, $f$ non è derivabile in $x = 1$.
>
> **Grafico qualitativo**: *(figura: a sinistra di $-\tfrac{1}{4}$ la curva sale fino al massimo in $x = -\tfrac{3}{2}$ e scende a $-\infty$ verso l'asintoto; a destra parte da $+\infty$, scende a $0$ in $x = 0$, ha il minimo in $x = \tfrac{1}{2}$, risale a $0$ in $x = 1$ con tangente verticale e poi cresce a $+\infty$)*

### 2019, compiti 3 e 7, esercizio 1, 10 punti

Determinare i valori del parametro reale $\alpha$ tali per cui la funzione

$$
f(x) = \begin{cases} \dfrac{\cos(x^4) - \sqrt[5]{1 + 5x^2}}{\sin(4x) + x^4} & \text{se } x > 0 \\ e^{\alpha x} - 1 & \text{se } x \le 0 \end{cases}
$$

1. è continua in $x = 0$;
2. è derivabile in $x = 0$.

> [!example]- Soluzione
> 1. La funzione è continua in $x_0 = 0$ se $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = f(0)$.
>
> Si ha $f(0) = 0$.
>
> $$
> \lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (e^{\alpha x} - 1) = 0
> $$
>
> $$
> \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{\cos x^4 - 1 + 1 - (1 + 5x^2)^{1/5}}{\sin(4x) + x^4} = \lim_{x \to 0^+} \frac{x^2}{x} \cdot \frac{\frac{\cos x^4 - 1}{x^8} \cdot x^6 + \frac{1 - (1 + 5x^2)^{1/5}}{5x^2} \cdot 5}{4 \cdot \frac{\sin 4x}{4x} + x^3} = 0
> $$
>
> Quindi la funzione è continua in $x = 0$, per ogni valore di $\alpha$.
>
> 2. Calcoliamo le derivate destra e sinistra in $x_0 = 0$:
>
> $$
> f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^+} \frac{\cos x^4 - (1 + 5x^2)^{1/5}}{x\,(\sin(4x) + x^4)}
> $$
>
> $$
> = \lim_{x \to 0^+} \frac{x^2}{x^2} \cdot \frac{\frac{\cos x^4 - 1}{x^8} \cdot x^6 + \frac{1 - (1 + 5x^2)^{1/5}}{5x^2} \cdot 5}{4 \cdot \frac{\sin 4x}{4x} + x^3} = -\frac{1}{4}
> $$
>
> $$
> f'_-(0) = \lim_{x \to 0^-} \frac{e^{\alpha x} - 1}{x} = \alpha
> $$
>
> Quindi la funzione è derivabile in $x = 0$ se e solo se $\alpha = -\dfrac{1}{4}$.

### 2019, compiti 3 e 7, esercizio 2, 10 punti

Si consideri la funzione:

$$
f(x) = \frac{x\sqrt{x + 4}}{2 - x}
$$

Analizzarne i limiti significativi, eventuali asintoti (orizzontali/verticali/obliqui), continuità e derivabilità, intervalli di monotonia, massimi e minimi relativi. Raccogliere le informazioni ricavate disegnandone il grafico qualitativo (non è richiesto lo studio della derivata seconda).

> [!example]- Soluzione
> **Dominio**. $x + 4 \ge 0$ e $x \ne 2$, quindi $D = [-4, +\infty) \setminus \{2\}$.
>
> **Segno**. $f(x) \ge 0 \iff \dfrac{x\sqrt{x+4}}{2 - x} \ge 0$, ovvero se $0 \le x < 2$. Notare che $f(x) = 0$ per $x = 0$, $x = -4$.
>
> **Limiti significativi**.
>
> $$
> \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x\sqrt{x}\left(\sqrt{1 + \frac{4}{x}}\right)}{x\left(-1 + \frac{2}{x}\right)} = -\infty
> $$
>
> $\lim_{x \to 2^-} f(x) = +\infty$ (forma indeterminata $\frac{2\sqrt{6}}{0}$ + valutazione del segno)
>
> $\lim_{x \to 2^+} f(x) = -\infty$ (forma indeterminata $\frac{2\sqrt{6}}{0}$ + valutazione del segno)
>
> Asintoto verticale $x = 2$. Non ci sono asintoti orizzontali/obliqui.
>
> **Continuità**. La funzione è continua su tutto il suo dominio $D$ per l'algebra delle funzioni continue.
>
> **Derivabilità**. La funzione è derivabile per $x \ne 2, -4$ per l'algebra delle funzioni derivabili. Dato che $\sqrt{x + 4}$ non è derivabile in $x = -4$, la derivabilità in $x = -4$ va studiata a parte.
>
> Per $x \ne 2, -4$ si ha
>
> $$
> f'(x) = \frac{\left(\sqrt{x+4} + \frac{x}{2\sqrt{x+4}}\right)(2 - x) + x\sqrt{x+4}}{(2-x)^2} = \frac{\left(2(x+4) + x\right)(2-x) + 2x(x+4)}{2\sqrt{x+4}\,(2-x)^2}
> $$
>
> $$
> = \frac{-x^2 + 6x + 16}{2\sqrt{x+4}\,(2-x)^2} = -\frac{(x-8)(x+2)}{2\sqrt{x+4}\,(2-x)^2}
> $$
>
> Segno di $f'$: negativo in $(-4, -2)$, positivo in $(-2, 2)$ e in $(2, 8)$, negativo per $x > 8$.
>
> $x = -2$ punto di minimo relativo, $f(-2) = -\dfrac{\sqrt{6}}{2}$ *(il prof scrive $-\sqrt{6}/2$, il conto dà $-\sqrt{2}/2$)*
> $x = 8$ punto di massimo relativo, $f(8) = -\dfrac{8}{3}\sqrt{3}$
> $x = -4$ punto di massimo relativo
>
> Infine $\lim_{x \to -4^+} f'(x) = -\infty \Rightarrow$ tangente verticale in $x = -4$, $f$ non è derivabile in $x = -4$.
>
> **Grafico qualitativo**: *(figura: da $x = -4$ con tangente verticale la curva scende al minimo in $x = -2$, risale passando per l'origine fino a $+\infty$ per $x \to 2^-$; a destra di $2$ parte da $-\infty$, sale al massimo in $x = 8$ e poi scende)*

### 2019, compiti 4 e 8, esercizio 1, 10 punti

Determinare i valori del parametro reale $\alpha$ tali per cui la funzione

$$
f(x) = \begin{cases} \dfrac{\cos(x^5) - \sqrt[6]{1 + 6x^2}}{\sin(5x) + x^5} & \text{se } x > 0 \\ \log(1 + \alpha x) & \text{se } x \le 0 \end{cases}
$$

1. è continua in $x = 0$;
2. è derivabile in $x = 0$.

> [!example]- Soluzione
> 1. La funzione è continua in $x_0 = 0$ se $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = f(0)$.
>
> Si ha $f(0) = 0$.
>
> $$
> \lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \log(1 + \alpha x) = \log 1 = 0
> $$
>
> $$
> \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{x^2}{x} \cdot \frac{\frac{\cos x^5 - 1}{x^{10}} \cdot x^8 + \frac{1 - (1 + 6x^2)^{1/6}}{6x^2} \cdot 6}{5 \cdot \frac{\sin 5x}{5x} + x^4} = 0
> $$
>
> Quindi la funzione è continua in $x = 0$, per ogni valore di $\alpha$.
>
> 2. Calcoliamo le derivate destra e sinistra in $x_0 = 0$:
>
> $$
> f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^+} \frac{x^2}{x^2} \cdot \frac{\frac{\cos x^5 - 1}{x^{10}} \cdot x^8 + \frac{1 - (1 + 6x^2)^{1/6}}{6x^2} \cdot 6}{5 \cdot \frac{\sin 5x}{5x} + x^4} = -\frac{1}{5}
> $$
>
> $$
> f'_-(0) = \lim_{x \to 0^-} \frac{\log(1 + \alpha x)}{x} = \alpha
> $$
>
> Quindi la funzione è derivabile in $x = 0$ se e solo se $\alpha = -\dfrac{1}{5}$.

### 2019, compiti 4 e 8, esercizio 2, 10 punti

Si consideri la funzione:

$$
f(x) = \frac{x\sqrt[3]{x + 4}}{x - 1}
$$

Analizzarne i limiti significativi, eventuali asintoti (orizzontali/verticali/obliqui), continuità e derivabilità, intervalli di monotonia, massimi e minimi relativi. Raccogliere le informazioni ricavate disegnandone il grafico qualitativo (non è richiesto lo studio della derivata seconda).

> [!example]- Soluzione
> **Dominio**. $x \ne 1$, quindi $D = \mathbb{R} \setminus \{1\}$.
>
> **Segno**. $f(x) \ge 0 \iff \dfrac{x\sqrt[3]{x+4}}{x-1} \ge 0$, ovvero se $-4 \le x \le 0$ oppure $x > 1$. Notare che $f(x) = 0$ per $x = 0$, $x = -4$.
>
> **Limiti significativi**.
>
> $$
> \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x \cdot x^{1/3}\sqrt[3]{1 + 4/x}}{x\left(1 - \frac{1}{x}\right)} = +\infty
> $$
>
> $$
> \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{x \cdot x^{1/3}\sqrt[3]{1 + 4/x}}{x\left(1 - \frac{1}{x}\right)} = -\infty
> $$
>
> $\lim_{x \to 1^-} f(x) = -\infty$ (forma indeterminata $\frac{\sqrt[3]{5}}{0}$ + valutazione del segno)
>
> $\lim_{x \to 1^+} f(x) = +\infty$ (forma indeterminata $\frac{\sqrt[3]{5}}{0}$ + valutazione del segno)
>
> Asintoto verticale $x = 1$. Non ci sono asintoti orizzontali/obliqui.
>
> **Continuità**. La funzione è continua su tutto il suo dominio per l'algebra delle funzioni continue.
>
> **Derivabilità**. La funzione è derivabile per $x \ne 1, -4$ (algebra delle derivate). Dato che $\sqrt[3]{x + 4}$ non è derivabile in $x = -4$, la derivabilità in $x = -4$ va studiata a parte.
>
> Per $x \ne 1, -4$ si ha
>
> $$
> f'(x) = \frac{\left[\sqrt[3]{x+4} + \frac{x}{3(x+4)^{2/3}}\right](x-1) - x\sqrt[3]{x+4}}{(x-1)^2} = \frac{\left[3(x+4) + x\right](x-1) - 3x(x+4)}{3(x+4)^{2/3}(x-1)^2}
> $$
>
> $$
> = \frac{x^2 - 4x - 12}{3(x+4)^{2/3}(x-1)^2} = \frac{(x-6)(x+2)}{3(x+4)^{2/3}(x-1)^2}
> $$
>
> Segno di $f'$: positivo per $x < -4$ e in $(-4, -2)$, negativo in $(-2, 1)$ e in $(1, 6)$, positivo per $x > 6$.
>
> $x = -2$ punto di massimo relativo, $f(-2) = \dfrac{2\sqrt[3]{2}}{3}$
> $x = 6$ punto di minimo relativo, $f(6) = \dfrac{6\sqrt[3]{10}}{5}$
>
> $\lim_{x \to -4} f'(x) = +\infty \Rightarrow$ tangente verticale in $x = -4$, $f$ non è derivabile in $x = -4$.
>
> **Grafico qualitativo**: *(figura: a sinistra di $1$ la curva viene da $-\infty$, passa per $(-4, 0)$ con tangente verticale, sale al massimo in $x = -2$, scende passando per l'origine verso $-\infty$ per $x \to 1^-$; a destra di $1$ parte da $+\infty$, scende al minimo in $x = 6$ e risale)*

### simulazione, esercizio 1 (b), 10 punti in tutto

Studiare la derivabilità della funzione $g(x) = \sqrt[3]{x}\sin x^2$.

> [!example]- Soluzione
> $g(x)$ è derivabile in ogni $x_0 \ne 0$ per l'algebra delle derivate. Inoltre $\exists g'(0)$ e vale
> $$
> g'(0) := \lim_{x\to0} \frac{\sqrt[3]{x}\cdot\sin(x^2)}{x} = \lim_{x\to0} \underbrace{x\sqrt[3]{x}}_{\to 0}\cdot\underbrace{\frac{\sin(x^2)}{x^2}}_{\to 1} = 0.
> $$

### simulazione, esercizio 2, 10 punti

Si consideri la funzione:

$$
f(x) = \frac{\vert x - 1\vert}{x^2 + 3x}.
$$

Analizzarne i limiti significativi, eventuali asintoti (verticali/obliqui), continuità e derivabilità, intervalli di monotonia, massimi e minimi relativi. Raccogliere le informazioni ricavate disegnandone il grafico qualitativo (non è richiesto lo studio della derivata seconda).

> [!example]- Soluzione
> - Dominio: $x^2 + 3x \ne 0$, ovvero $x \ne 0$ e $x \ne -3$. $\to \mathbb{R} \setminus \{-3, 0\}$.
>
> - (opzionale, ma utile) Segno: $f(x) \ge 0 \Leftrightarrow x^2 + 3x > 0$ ovvero $x > 0$ o $x < -3$. Notare che $f(x) < 0$ in $(-3, 0)$ e che $f(1) = 0$.
>
> - Limiti significativi:
>   - $\lim_{x\to\pm\infty} f(x) = 0$ (basta dividere per $x^2$ numeratore e denominatore ...)
>   - $\lim_{x\to0^\pm} f(x) = \pm\infty$ (forma $\left[\frac{1}{0}\right]$ + valutazione del segno ...)
>   - $\lim_{x\to-3^\pm} f(x) = \mp\infty$ (forma $\left[\frac{4}{0}\right]$ + valutazione del segno ...)
>
>   Quindi ASINTOTO ORIZZONTALE $y = 0$ a $\pm\infty$ e ASINTOTI VERTICALI $x = 0$ e $x = -3$.
>
> - CONTINUITÀ: la funzione è continua sul suo dominio grazie all'algebra delle funzioni continue.
>
> - DERIVABILITÀ: in $x_0 \notin \{-3, 0, 1\}$ per l'algebra delle funzioni derivabili. Invece in $x_0 = 1$ NON È DERIVABILE:
>   $$
>   \lim_{h\to0^\pm} \frac{f(1+h) - f(1)}{h} = \lim_{h\to0^\pm} \frac{\vert h\vert}{h}\cdot\frac{1}{(1+h)^2 + 3(1+h)} = \pm\frac{1}{4}
>   $$
>
> - SEGNO DI $f'(x)$: per $x \notin \{-3, 0, 1\}$ si ha
>   $x > 1 \to f(x) = \frac{x-1}{x^2+3x}$,
>   $$
>   f'(x) = \frac{x^2 + 3x - (x-1)(2x+3)}{(x^2+3x)^2} = \frac{-x^2 + 2x + 3}{(x^2+3x)^2} = -\frac{(x-3)(x+1)}{(x^2+3x)^2}
>   $$
>   $x < 1 \to f(x) = \frac{1-x}{x^2+3x}$,
>   $$
>   f'(x) = \frac{(x-3)(x+1)}{(x^2+3x)^2}.
>   $$
>   Quindi $x = -1$ è di max relativo, con $f(-1) = \frac{2}{1-3} = -1$; $x = 1$ è di min relativo con $f(1) = 0$; $x = 3$ è di max relativo con $f(3) = \frac{1}{9}$.
>
>   Tabella del prof ($f'$ e $f$): $f' > 0$ in $(-\infty, -3)$ e in $(-3, -1)$, $f'(-1) = 0$, $f' < 0$ in $(-1, 0)$ e in $(0, 1)$, $f' > 0$ in $(1, 3)$, $f'(3) = 0$, $f' < 0$ in $(3, +\infty)$; $f$ cresce dove $f' > 0$ e decresce dove $f' < 0$.
>
> - GRAFICO QUALITATIVO: *(figura del prof: asintoti verticali $x = -3$ e $x = 0$, asintoto orizzontale $y = 0$; a sinistra di $-3$ la curva sale verso $+\infty$ avvicinandosi a $y = 0$ da sopra per $x \to -\infty$; tra $-3$ e $0$ sta sotto l'asse con massimo relativo $(-1, -1)$ e va a $-\infty$ ai due estremi; per $x > 0$ scende da $+\infty$ fino al punto angoloso $(1, 0)$, poi risale fino al massimo relativo $\left(3, \frac{1}{9}\right)$ e torna verso $y = 0$.)*

## Esercizi dei fogli e delle esercitazioni

### Tutoraggio 5, esercizio 1
Dire, motivando la risposta, se le seguenti funzioni sono derivabili in $x_0 = 0$; in caso negativo, classificare il punto di non derivabilità.
- (1) $f(x) = \vert x\vert\sin x$
- (2) $f(x) = [x\sin x]$
- (3) $f(x) = x\vert\cos x\vert$
- (4) $f(x) = \vert x\vert\cos x$

> [!example]- Soluzione
> (1) $\displaystyle\lim_{h \to 0^+}\frac{h\sin h}{h} = \lim_{h \to 0^+}\sin h = 0$, $\displaystyle\lim_{h \to 0^-}\frac{-h\sin h}{h} = \lim_{h \to 0^-}(-\sin h) = 0$. Derivabile, $f'(0) = 0$.
>
> (2) Le parentesi quadre lette come parte intera. Per $0 < \vert x\vert < 1$: $x\sin x \geq 0$ (stesso segno di $x$ e $\sin x$ per $\vert x\vert < \pi$) e $x\sin x \leq \vert x\vert \cdot \vert x\vert = x^2 < 1$ (da $\vert\sin x\vert \leq \vert x\vert$). Quindi $0 \leq x\sin x < 1$, $f(x) = 0$ su $(-1, 1)$: derivabile, $f'(0) = 0$. Se le parentesi fossero solo parentesi, $f = x\sin x$ e per Leibnitz $f'(0) = \sin 0 + 0 \cdot \cos 0 = 0$.
>
> (3) Per $\vert x\vert < \frac\pi2$ è $\cos x > 0$, quindi $f(x) = x\cos x$ vicino a $0$. Leibnitz: $f'(x) = \cos x - x\sin x$, $f'(0) = 1$. Derivabile.
>
> (4) $\displaystyle\lim_{h \to 0^+}\frac{h\cos h}{h} = \lim_{h \to 0^+}\cos h = 1$, $\displaystyle\lim_{h \to 0^-}\frac{-h\cos h}{h} = \lim_{h \to 0^-}(-\cos h) = -1$. Derivate laterali finite e diverse: punto angoloso, $f'_+(0) = 1$, $f'_-(0) = -1$. Non derivabile.
>
> *(svolgimento dalle note, il foglio non dà soluzioni)*

### Tutoraggio 5, esercizio 2 (punti (1), (2), (3), (5), (6), (9), (14), (16))
Studiare la derivabilità e calcolare le derivate delle seguenti funzioni, dopo averne determinato l'insieme di definizione.
- (1) $f(x) = \dfrac{1}{1 - x^2}$
- (2) $f(x) = \sin(e^x) \cdot e^{\cos x}$
- (3) $f(x) = x^{-1} \cdot \log x$
- (5) $f(x) = \log\left(\sqrt{\dfrac{1 + \cos x}{1 - \cos x}}\right)$
- (6) $f(x) = \sqrt{x + \sqrt{x}}$
- (9) $f(x) = \sqrt{x + \vert x\vert^3 + 1}$
- (14) $f(x) = x^{x(x-1)}$
- (16) $f(x) = (x^2 + 2)^{\sin x}$

> [!example]- Soluzione
> (1) $D = \mathbb{R} \setminus \{\pm1\}$, derivabile su $D$. $\displaystyle f'(x) = \frac{0 \cdot (1 - x^2) - 1 \cdot (-2x)}{(1 - x^2)^2} = \frac{2x}{(1 - x^2)^2}$.
>
> (2) $D = \mathbb{R}$, derivabile ovunque. $\displaystyle f'(x) = \cos(e^x)\,e^x\,e^{\cos x} + \sin(e^x)\,e^{\cos x}(-\sin x) = e^{\cos x}\big(e^x\cos(e^x) - \sin x\sin(e^x)\big)$.
>
> (3) $D = (0, +\infty)$, derivabile su $D$. Come $\frac{\log x}{x}$: $\displaystyle f'(x) = \frac{\frac1x \cdot x - \log x \cdot 1}{x^2} = \frac{1 - \log x}{x^2}$.
>
> (5) Dominio: $1 - \cos x \neq 0$, cioè $x \neq 2k\pi$; argomento $> 0$ con denominatore $> 0$, cioè $1 + \cos x > 0$, $x \neq \pi + 2k\pi$. Quindi $D = \mathbb{R} \setminus \{k\pi : k \in \mathbb{Z}\}$. Con le proprietà del logaritmo: $f(x) = \frac12\big[\log(1 + \cos x) - \log(1 - \cos x)\big]$,
> $$
> f'(x) = \frac12\left[\frac{-\sin x}{1 + \cos x} - \frac{\sin x}{1 - \cos x}\right] = -\frac{\sin x}{2} \cdot \frac{(1 - \cos x) + (1 + \cos x)}{1 - \cos^2 x} = -\frac{1}{\sin x}.
> $$
> Derivabile su tutto $D$.
>
> (6) $D = [0, +\infty)$. Per $x > 0$: $\displaystyle f'(x) = \frac{1}{2\sqrt{x + \sqrt x}}\left(1 + \frac{1}{2\sqrt x}\right)$. In $0$ rapporto incrementale da destra, con $h + \sqrt h \geq \sqrt h$: $\displaystyle\frac{\sqrt{h + \sqrt h}}{h} \geq \frac{h^{1/4}}{h} = \frac{1}{h^{3/4}} \to +\infty$. Non derivabile in $0$ (tangente verticale, da destra).
>
> (9) Dominio: $x + \vert x\vert^3 + 1 > 0$ per ogni $x$. Se $x \geq -1$: $x + 1 \geq 0$, $\vert x\vert^3 \geq 0$, non nulli insieme. Se $x < -1$: $\vert x\vert^3 > \vert x\vert = -x$, quindi $x + \vert x\vert^3 + 1 > 1$. $D = \mathbb{R}$, l'argomento non si annulla mai. $\vert x\vert^3$ è derivabile ovunque: $D\vert x\vert^3 = 3x\vert x\vert$ per $x \neq 0$, e in $0$ $\frac{\vert h\vert^3}{h} = \pm h^2 \to 0$. $\displaystyle f'(x) = \frac{1 + 3x\vert x\vert}{2\sqrt{x + \vert x\vert^3 + 1}}$, $x \in \mathbb{R}$.
>
> (14) $D = (0, +\infty)$, $f(x) = e^{(x^2 - x)\log x}$. $\displaystyle f'(x) = x^{x(x-1)}\left[(2x - 1)\log x + (x^2 - x) \cdot \frac1x\right] = x^{x(x-1)}\big[(2x - 1)\log x + x - 1\big]$.
>
> (16) $D = \mathbb{R}$, $f(x) = e^{\sin x\log(x^2 + 2)}$. $\displaystyle f'(x) = (x^2 + 2)^{\sin x}\left(\cos x\log(x^2 + 2) + \frac{2x\sin x}{x^2 + 2}\right)$.
>
> *(svolgimento dalle note, il foglio non dà soluzioni)*

### Tutoraggio 5, esercizio 3
Dopo aver mostrato che le seguenti funzioni sono derivabili nel loro insieme di definizione, determinare l'equazione della retta tangente al loro grafico passante per il punto la cui ascissa è indicata a fianco.
- (1) $f(x) = e^{\cos x}$, $x_0 = \dfrac\pi2$
- (2) $f(x) = \log(\tan x)$, $x_0 = \dfrac\pi4$
- (3) $f(x) = 2^x$, $x_0 = 0$
- (4) $f(x) = e^{\arctan x}$, $x_0 = 1$

> [!example]- Soluzione
> Retta tangente: $y = f(x_0) + f'(x_0)(x - x_0)$.
>
> (1) $D = \mathbb{R}$, composizione di derivabili. $f\left(\frac\pi2\right) = e^0 = 1$, $f'(x) = -\sin x\,e^{\cos x}$, $f'\left(\frac\pi2\right) = -1$. $\displaystyle y = 1 - \left(x - \frac\pi2\right)$.
>
> (2) $\tan x > 0$: $D = \bigcup_{k \in \mathbb{Z}}\left(k\pi, \frac\pi2 + k\pi\right)$, dove $\tan$ è derivabile. $f\left(\frac\pi4\right) = \log 1 = 0$, $f'(x) = \frac{1 + \tan^2 x}{\tan x}$, $f'\left(\frac\pi4\right) = 2$. $\displaystyle y = 2\left(x - \frac\pi4\right)$.
>
> (3) $f(0) = 1$, $f'(x) = 2^x\log 2$, $f'(0) = \log 2$. $y = 1 + x\log 2$.
>
> (4) $f(1) = e^{\pi/4}$, $f'(x) = \frac{e^{\arctan x}}{1 + x^2}$, $f'(1) = \frac{e^{\pi/4}}{2}$. $\displaystyle y = e^{\pi/4} + \frac{e^{\pi/4}}{2}(x - 1)$.
>
> *(svolgimento dalle note, il foglio non dà soluzioni)*

### Tutoraggio 5, esercizio 4
Mostrare che le seguenti funzioni sono invertibili nel loro insieme di definizione e determinare l'equazione della retta tangente al grafico delle loro inverse, se esiste, nel punto di ascissa indicata a fianco.
- (1) $f(x) = \log\left(\dfrac xe\right) + x$, $y_0 = e$
- (2) $f(x) = \log x + \sqrt x$, $y_0 = 2 + e$
- (3) $f(x) = \log\left(x + \sqrt{x^2 + 1}\right)$, $y_0 = 0$

> [!example]- Soluzione
> Si trova $x_0$ con $f(x_0) = y_0$, si calcola $f'(x_0) \neq 0$: la tangente a $f^{-1}$ è $y = x_0 + \frac{1}{f'(x_0)}(x - y_0)$.
>
> (1) $D = (0, +\infty)$, $f(x) = \log x - 1 + x$ somma di strettamente crescenti: invertibile. $x_0 = e$ perché $1 - 1 + e = e$. $f'(x) = \frac1x + 1$, $f'(e) = \frac{e + 1}{e} \neq 0$, $(f^{-1})'(e) = \frac{e}{e + 1}$. $\displaystyle y = e + \frac{e}{e + 1}(x - e)$.
>
> (2) $D = (0, +\infty)$, somma di strettamente crescenti: invertibile. $x_0 = e^2$ perché $\log e^2 + \sqrt{e^2} = 2 + e$. $f'(x) = \frac1x + \frac{1}{2\sqrt x}$, $f'(e^2) = \frac{1}{e^2} + \frac{1}{2e} = \frac{2 + e}{2e^2}$, $(f^{-1})'(2 + e) = \frac{2e^2}{2 + e}$. $\displaystyle y = e^2 + \frac{2e^2}{2 + e}(x - 2 - e)$.
>
> (3) Dominio: $\sqrt{x^2 + 1} > \vert x\vert \geq -x$, quindi $x + \sqrt{x^2 + 1} > 0$ per ogni $x$, $D = \mathbb{R}$. Da $y = \log\left(x + \sqrt{x^2 + 1}\right)$ si ricava $x = \frac{e^y - e^{-y}}{2} = \sinh y$: inversa esplicita, quindi $f$ invertibile e $f^{-1} = \sinh$. $x_0 = 0$ perché $\log 1 = 0$. $f'(x) = \frac{1}{\sqrt{x^2 + 1}}$, $f'(0) = 1$, $(f^{-1})'(0) = 1$. $y = x$.
>
> *(svolgimento dalle note, il foglio non dà soluzioni)*

### Tutoraggio 5, esercizio 5
Dopo aver determinato l'insieme di definizione della seguente funzione, mostrare che è localmente invertibile in un intorno di $x_0 = 1$ e trovare l'equazione della retta tangente al grafico della sua inversa, se esiste, nel punto $(y_0, x_0) = (e + 1, 1)$.
$$
f(x) = e^x + x^2
$$

> [!example]- Soluzione
> $D = \mathbb{R}$. Su $(0, +\infty)$, che contiene $1$, $e^x$ e $x^2$ sono strettamente crescenti, quindi lo è $f$: invertibile lì. $f(1) = e + 1 = y_0$. $f'(x) = e^x + 2x$, $f'(1) = e + 2 \neq 0$, $(f^{-1})'(e + 1) = \frac{1}{e + 2}$.
> $$
> y = 1 + \frac{1}{e + 2}(x - e - 1)
> $$
>
> *(svolgimento dalle note, il foglio non dà soluzioni)*

### Tutoraggio 5, esercizio 6
Dopo aver determinato l'insieme di definizione della seguente funzione, mostrare che è localmente invertibile in un intorno di $x_0 = \pi$ e trovare l'equazione della retta tangente al grafico della sua inversa, se esiste, nel punto $(x_0, y_0) = (\pi, \pi^2 - 1)$.
$$
f(x) = x^2 + \cos x
$$
*(il foglio scrive il punto come $(x_0, y_0) = (\pi, \pi^2 - 1)$, che sta sul grafico di $f$; sul grafico dell'inversa è $(y_0, x_0) = (\pi^2 - 1, \pi)$, scritto così nell'esercizio 5)*

> [!example]- Soluzione
> $D = \mathbb{R}$, $f(\pi) = \pi^2 - 1$. $\cos$ non è monotona vicino a $\pi$: serve una stima. Per $a < b$, con la prostaferesi e $\vert\sin u\vert \leq \vert u\vert$, $\vert\sin u\vert \leq 1$:
> $$
> \vert\cos b - \cos a\vert = 2\left\vert\sin\frac{a + b}{2}\right\vert\left\vert\sin\frac{b - a}{2}\right\vert \leq 2 \cdot 1 \cdot \frac{b - a}{2} = b - a
> $$
> Quindi, se $a, b \geq \frac12$,
> $$
> f(b) - f(a) = (b - a)(b + a) + (\cos b - \cos a) \geq (b - a)(a + b - 1) > 0
> $$
> $f$ è strettamente crescente su $\left[\frac12, +\infty\right)$, che contiene $\pi$: invertibile lì. $f'(x) = 2x - \sin x$, $f'(\pi) = 2\pi \neq 0$, $(f^{-1})'(\pi^2 - 1) = \frac{1}{2\pi}$.
> $$
> y = \pi + \frac{1}{2\pi}\left(x - \pi^2 + 1\right)
> $$
>
> *(svolgimento dalle note, il foglio non dà soluzioni)*

### Tutoraggio 5, esercizio 7
Determinare per quali valori dei parametri reali $\alpha$ e $\beta$ le seguenti funzioni sono derivabili nel punto $x_0 = 0$.
- (1) $f(x) = \begin{cases} e^{\alpha x} & \text{se } x < 0 \\ \sqrt{1 + \sin(\beta x)} & \text{se } x \geq 0 \end{cases}$
- (2) $f(x) = \begin{cases} \cos^2(x + \alpha) & \text{se } x < 0 \\ \sqrt{1 + \beta x^2} & \text{se } x \geq 0 \end{cases}$
- (3) $f(x) = \begin{cases} \log(\vert x - \alpha\vert) & \text{se } x < 0 \\ \beta x - \sin x & \text{se } x \geq 0 \end{cases}$
- (4) $f(x) = \begin{cases} \alpha x^2 - x + \beta & \text{se } x \geq 0 \\ -x^3 + \beta x - \alpha & \text{se } x < 0 \end{cases}$
- (5) $f(x) = \begin{cases} 2^x & \text{se } x \geq 0 \\ \alpha x^2 + \beta x & \text{se } x < 0 \end{cases}$

> [!example]- Soluzione
> Sempre: prima la continuità in $0$, poi le derivate laterali.
>
> (1) Continuità: $\lim_{x \to 0^-}e^{\alpha x} = 1 = f(0)$, vale per ogni $\alpha, \beta$. Sinistra: $D[e^{\alpha x}] = \alpha e^{\alpha x}$, in $0$ vale $\alpha$. Destra: $D\left[\sqrt{1 + \sin(\beta x)}\right] = \frac{\beta\cos(\beta x)}{2\sqrt{1 + \sin(\beta x)}}$, in $0$ vale $\frac\beta2$. Derivabile se e solo se $\alpha = \frac\beta2$.
>
> (2) Continuità: $\cos^2\alpha = f(0) = 1$, cioè $\alpha = k\pi$. Sinistra: $D[\cos^2(x + \alpha)] = -2\cos(x + \alpha)\sin(x + \alpha) = -\sin(2x + 2\alpha)$, in $0$ vale $-\sin(2k\pi) = 0$. Destra: $D\left[\sqrt{1 + \beta x^2}\right] = \frac{\beta x}{\sqrt{1 + \beta x^2}}$, in $0$ vale $0$. Derivabile se e solo se $\alpha = k\pi$, $k \in \mathbb{Z}$, per ogni $\beta$.
>
> (3) Continuità: $f(0) = 0$. Se $\alpha = 0$, $\log\vert x\vert \to -\infty$: mai continua. Se $\alpha \neq 0$, $\lim_{x \to 0^-}\log\vert x - \alpha\vert = \log\vert\alpha\vert = 0$, cioè $\alpha = \pm1$. Sinistra: $D[\log\vert x - \alpha\vert] = \frac{1}{x - \alpha}$, in $0$ vale $-\frac1\alpha$. Destra: $D[\beta x - \sin x] = \beta - \cos x$, in $0$ vale $\beta - 1$. Per $\alpha = 1$: $-1 = \beta - 1$, $\beta = 0$. Per $\alpha = -1$: $1 = \beta - 1$, $\beta = 2$. Derivabile se e solo se $(\alpha, \beta) = (1, 0)$ oppure $(-1, 2)$.
>
> (4) Continuità: $f(0) = \beta$, $\lim_{x \to 0^-}(-x^3 + \beta x - \alpha) = -\alpha$, serve $\beta = -\alpha$. Destra: $D[\alpha x^2 - x + \beta] = 2\alpha x - 1$, in $0$ vale $-1$. Sinistra: $D[-x^3 + \beta x - \alpha] = -3x^2 + \beta$, in $0$ vale $\beta$. Quindi $\beta = -1$, $\alpha = 1$. Derivabile se e solo se $(\alpha, \beta) = (1, -1)$.
>
> (5) Continuità: $f(0) = 2^0 = 1$, ma $\lim_{x \to 0^-}(\alpha x^2 + \beta x) = 0$ per ogni $\alpha, \beta$. Mai continua in $0$, quindi mai derivabile: nessun valore dei parametri.
>
> *(svolgimento dalle note, il foglio non dà soluzioni)*

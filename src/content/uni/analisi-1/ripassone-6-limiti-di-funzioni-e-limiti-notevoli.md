---
title: Ripassone 6 · Limiti di funzioni e limiti notevoli
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

> [!abstract] Definizione (intorno) · slide 4
> Se $x_0 \in \mathbb{R}$, diciamo intorno di $x_0$ di raggio $r > 0$ l'intervallo aperto $(x_0 - r, x_0 + r) = \{x \in \mathbb{R} : \vert x - x_0\vert < r\}$.
> Diciamo intorno di $+\infty$ un qualunque intervallo aperto della forma $(a, +\infty)$, con $a \in \mathbb{R}$; diciamo intorno di $-\infty$ un qualunque intervallo aperto della forma $(-\infty, a)$, con $a \in \mathbb{R}$.

> [!abstract] Definizione (punto di accumulazione) · slide 5
> Sia $D \subset \mathbb{R}$. Un punto $x_0 \in \mathbb{R}$ si dice punto di accumulazione per $D$ se
> $$
> \forall \delta > 0 \quad (x_0 - \delta, x_0 + \delta) \cap D \setminus \{x_0\} \neq \emptyset.
> $$
> Equivalentemente,
> $$
> \forall \delta > 0 \quad \exists\, x \in D \ \text{con} \ 0 < \vert x - x_0\vert < \delta.
> $$
> Si osservi che il punto $x_0$ non appartiene necessariamente a $D$.

> [!abstract] Definizione (limite finito in un punto) · slide 7
> Siano $D \subset \mathbb{R}$, $f : D \to \mathbb{R}$, e sia $x_0$ un punto di accumulazione per $D$. Un valore $\ell \in \mathbb{R}$ si dice limite di $f$ per $x \to x_0$ se
> $$
> \forall \varepsilon > 0 \quad \exists\, \delta > 0 \ \text{t. c.} \ \forall x \in (x_0 - \delta, x_0 + \delta) \cap D \setminus \{x_0\} \quad \vert f(x) - \ell\vert < \varepsilon
> $$
> e si scrive $\displaystyle\lim_{x \to x_0} f(x) = \ell$.
> Osservazioni:
> - l'ipotesi che $x_0$ sia punto di accumulazione per $D$ garantisce che l'insieme $(x_0 - \delta, x_0 + \delta) \cap D \setminus \{x_0\}$ sia sempre non vuoto;
> - il punto $x_0$ potrebbe non appartenere al dominio della funzione; il valore della funzione $f$ in $x_0$ è irrilevante! Potremmo avere $x_0 \notin D$, o $f(x_0) \neq \ell$!

> [!abstract] Significato grafico del limite finito · slide 8
> Graficamente, significa che comunque presa una striscia orizzontale $(\ell - \varepsilon, \ell + \varepsilon)$ intorno al valore $\ell$, allora il grafico di $f(x)$ cade all'interno della striscia per tutti gli $x$ abbastanza vicini ad $x_0$.

> [!abstract] Definizione (limite destro e sinistro) · slide 11
> Siano $D \subset \mathbb{R}$, $f : D \to \mathbb{R}$, $x_0$ punto di accumulazione per $D$.
> $$
> \lim_{x \to x_0^+} f(x) = \ell \iff \forall \varepsilon > 0 \ \exists\, \delta > 0 \ \text{t. c.} \ \forall x \in (x_0, x_0 + \delta) \cap D \quad \vert f(x) - \ell\vert < \varepsilon
> $$
> $$
> \lim_{x \to x_0^-} f(x) = \ell \iff \forall \varepsilon > 0 \ \exists\, \delta > 0 \ \text{t. c.} \ \forall x \in (x_0 - \delta, x_0) \cap D \quad \vert f(x) - \ell\vert < \varepsilon
> $$

> [!abstract] Osservazione (esistenza del limite e limiti laterali) · slide 12
> $$
> \exists \lim_{x \to x_0} f(x) = \ell \in \mathbb{R} \iff \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = \ell
> $$

> [!abstract] Definizione (limite infinito) · slide 15
> Siano $D \subset \mathbb{R}$, $f : D \to \mathbb{R}$, e sia $x_0$ un punto di accumulazione per $D$. Diciamo che $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ se
> $$
> \forall M > 0 \quad \exists\, \delta > 0 \ \text{t. c.} \ \forall x \in (x_0 - \delta, x_0 + \delta) \cap D \setminus \{x_0\} \quad f(x) > M.
> $$
> Ciò significa che, dato un qualunque numero reale $M > 0$, i valori di $f(x)$ sono più grandi di $M$ per tutti gli $x$ abbastanza vicini ad $x_0$.

> [!abstract] Significato grafico e asintoto verticale · slide 16
> $\displaystyle\lim_{x \to x_0} f(x) = +\infty$. Graficamente, significa che comunque presa una retta orizzontale $y = M$, il grafico della funzione $f(x)$ è al di sopra di tale retta per tutti gli $x$ abbastanza vicini ad $x_0$. In questo caso si dice che $f$ ha un asintoto verticale di equazione $x = x_0$.

> [!abstract] Definizione (limite infinito, $-\infty$) · slide 18
> Diciamo che $\displaystyle\lim_{x \to x_0} f(x) = -\infty$ se
> $$
> \forall M > 0 \quad \exists\, \delta > 0 \ \text{t. c.} \ \forall x \in (x_0 - \delta, x_0 + \delta) \cap D \setminus \{x_0\} \quad f(x) < -M.
> $$
> Graficamente: comunque presa una retta orizzontale $y = -M$, il grafico della funzione $f(x)$ è al di sotto della retta per tutti gli $x$ abbastanza vicini ad $x_0$.
> Anche in questo caso diciamo che la retta $x = x_0$ è un asintoto verticale per $f$.

> [!abstract] Limite infinito, destro e sinistro · slide 19
> Come nel caso di limite finito, possiamo considerare separatamente i limiti da destra ($x \to x_0^+$) e da sinistra ($x \to x_0^-$): nella definizione di limite, basterà sostituire l'intervallo $(x_0 - \delta, x_0 + \delta)$ con un intervallo destro $(x_0, x_0 + \delta)$ o sinistro $(x_0 - \delta, x_0)$ rispettivamente.

> [!abstract] Definizione (insieme illimitato) · slide 20
> $D \subset \mathbb{R}$ è illimitato superiormente se $\forall K > 0 \ \exists\, x \in D$ tale che $x > K$.
> $D \subset \mathbb{R}$ è illimitato inferiormente se $\forall K > 0 \ \exists\, x \in D$ tale che $x < -K$.

> [!abstract] Definizione (limite all'infinito) · slide 21
> Sia $f : D \to \mathbb{R}$ con $D$ illimitato superiormente. Diciamo che $\displaystyle\lim_{x \to +\infty} f(x) = \ell \in \mathbb{R}$ se
> $$
> \forall \varepsilon > 0 \quad \exists\, K > 0 \ \text{t. c.} \ \forall x \in (K, +\infty) \cap D \quad \vert f(x) - \ell\vert < \varepsilon.
> $$
> Graficamente: comunque presa una striscia orizzontale $\mathbb{R} \times (\ell - \varepsilon, \ell + \varepsilon)$, il grafico della funzione è all'interno della striscia per tutti gli $x$ abbastanza grandi.
> In questo caso diciamo che la retta di equazione $y = \ell$ è un asintoto orizzontale per $f$ quando $x \to +\infty$.

> [!abstract] Definizione (limite all'infinito, $\pm\infty$) · slide 22
> Sia $f : D \to \mathbb{R}$ con $D$ illimitato superiormente. Diciamo che:
> $$
> \lim_{x \to +\infty} f(x) = +\infty \ \text{se} \ \forall M > 0 \ \exists\, K > 0 \ \text{t. c.} \ \forall x \in (K, +\infty) \cap D \quad f(x) > M.
> $$
> $$
> \lim_{x \to +\infty} f(x) = -\infty \ \text{se} \ \forall M > 0 \ \exists\, K > 0 \ \text{t. c.} \ \forall x \in (K, +\infty) \cap D \quad f(x) < -M.
> $$

> [!abstract] Il legame con i limiti di successioni (successione come funzione) · slide 26
> Una successione $(a_n)_n$ di numeri reali può essere pensata come una particolare funzione, il cui dominio coincide con l'insieme $\mathbb{N}$ dei numeri naturali: $f : \mathbb{N} \to \mathbb{R}$, $f(n) = a_n$. Dato che il dominio di $f$ non è limitato superiormente, ha senso fare il limite di $f(x)$ per $x \to +\infty$: in questo modo riotteniamo il limite della successione $(a_n)_n$ introdotto in precedenza, cioè
> $$
> \lim_{x \to +\infty} f(x) = \lim_{n \to +\infty} a_n.
> $$

> [!abstract] Caratterizzazione del limite con le successioni · slide 27
> Siano $f : D \to \mathbb{R}$, $x_0 \in \mathbb{R} \cup \{\pm\infty\}$, $\ell \in \mathbb{R} \cup \{\pm\infty\}$. Vale la seguente equivalenza:
> $$
> \lim_{x \to x_0} f(x) = \ell \iff \text{per ogni successione di punti } x_n \in D,\ x_n \neq x_0,\ \text{tali che } x_n \to x_0,\ \text{si ha } \lim_{n \to +\infty} f(x_n) = \ell.
> $$

> [!abstract] Criterio di non esistenza del limite · slide 28
> L'osservazione precedente fornisce un criterio per dimostrare che il limite di una funzione non esiste: per dimostrare che $\displaystyle\lim_{x \to x_0} f(x)$ non esiste, è sufficiente trovare due diverse successioni $x_n \to x_0$ e $y_n \to x_0$ ($x_n, y_n \neq x_0$) tali che
> $$
> \lim_{n \to +\infty} f(x_n) \neq \lim_{n \to +\infty} f(y_n).
> $$

> [!abstract] Teorema (unicità del limite) · slide 29
> Se al contempo $\displaystyle\lim_{x \to x_0} f(x) = \ell_1$ e $\displaystyle\lim_{x \to x_0} f(x) = \ell_2$, allora $\ell_1 = \ell_2$ (dove $x_0 \in \mathbb{R} \cup \{\pm\infty\}$, $\ell_1, \ell_2 \in \mathbb{R} \cup \{\pm\infty\}$).

> [!abstract] Teorema (permanenza del segno) · slide 30
> 1. Supponiamo che $\displaystyle\lim_{x \to x_0} f(x) = \ell$ con $\ell > 0$. Allora esiste un intorno $U$ di $x_0$ tale che per ogni $x \in U \setminus \{x_0\}$ vale $f(x) > 0$.
> 2. Supponiamo che $\displaystyle\lim_{x \to x_0} f(x) = \ell$ e che esista un intorno $U$ di $x_0$ tale che $f(x) \geq 0$ per ogni $x \in U \setminus \{x_0\}$. Allora $\ell \geq 0$.
>
> Osservazioni:
> - Il teorema vale sia per $x_0 \in \mathbb{R}$, che per $x_0 = \pm\infty$. Inoltre, scrivendo $\ell > 0$ si intende che è ammesso anche il caso $\ell = +\infty$.
> - Il teorema vale ovviamente sostituendo i simboli $<$, $\leq$ al posto di $>$, $\geq$.
> - Attenzione: se al punto 2 abbiamo che $f(x) > 0$ in $U \setminus \{x_0\}$, questo non garantisce che $\ell > 0$! La conclusione è comunque che $\ell \geq 0$. Le disuguaglianze in senso stretto non è detto che siano mantenute.

> [!abstract] Teorema (confronto) · slide 31
> Siano date due funzioni $f, g$ tali che $\displaystyle\lim_{x \to x_0} f(x) = \ell_1$, $\displaystyle\lim_{x \to x_0} g(x) = \ell_2$. Supponiamo che esista un intorno $U$ di $x_0$ tale che $f(x) \geq g(x)$ per ogni $x \in U \setminus \{x_0\}$. Allora $\ell_1 \geq \ell_2$.

> [!abstract] Teorema (dei due carabinieri) · slide 31
> Siano date tre funzioni $f, g, h$. Supponiamo che:
> - $\displaystyle\lim_{x \to x_0} f(x) = \lim_{x \to x_0} h(x) = \ell$;
> - $f(x) \leq g(x) \leq h(x)$ per ogni $x \in U \setminus \{x_0\}$, dove $U$ è un intorno di $x_0$.
>
> Allora $\displaystyle\lim_{x \to x_0} g(x) = \ell$.

> [!abstract] Teorema (algebra dei limiti) · slide 32
> Siano $\displaystyle\lim_{x \to x_0} f(x) = \ell_1 \in \mathbb{R}$ e $\displaystyle\lim_{x \to x_0} g(x) = \ell_2 \in \mathbb{R}$. Allora:
> - $\displaystyle\lim_{x \to x_0}\big(f(x) \pm g(x)\big) = \ell_1 \pm \ell_2$,
> - $\displaystyle\lim_{x \to x_0} f(x)g(x) = \ell_1\ell_2$,
> - se $\ell_2 \neq 0$, $\displaystyle\lim_{x \to x_0}\frac{f(x)}{g(x)} = \frac{\ell_1}{\ell_2}$.
>
> Come per le successioni, il teorema si generalizza al caso in cui uno o entrambi i limiti siano infiniti, con le usuali regole di manipolazione algebrica del simbolo di infinito, ad eccezione delle forme indeterminate:
> $$
> +\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{\infty}{\infty}, \qquad \frac{0}{0}.
> $$

> [!abstract] Teorema (limite di funzioni monotone) · slide 33
> Sia $f : (a, b) \to \mathbb{R}$ una funzione monotona. Allora per ogni $x_0 \in (a, b)$ esistono finiti i limiti da destra e da sinistra
> $$
> \lim_{x \to x_0^-} f(x), \qquad \lim_{x \to x_0^+} f(x).
> $$
> Inoltre esistono (eventualmente infiniti) i limiti agli estremi dell'intervallo
> $$
> \lim_{x \to b^-} f(x), \qquad \lim_{x \to a^+} f(x).
> $$
> Osservazione: se $f$ è monotona crescente in $(a, b)$, allora
> $$
> \lim_{x \to x_0^-} f(x) = \sup_{x \in (a, x_0)} f(x), \qquad \lim_{x \to x_0^+} f(x) = \inf_{x \in (x_0, b)} f(x).
> $$

> [!abstract] Limiti delle funzioni elementari (potenze a esponente intero) · slide 35
> N.B.: i seguenti limiti mostrano in particolare che le funzioni elementari sono continue all'interno del loro dominio.
> Potenze ad esponente intero positivo $n \in \mathbb{N}$:
> - $\displaystyle\lim_{x \to x_0} x^n = (x_0)^n$ (se $x_0 \in \mathbb{R}$)
> - $\displaystyle\lim_{x \to +\infty} x^n = +\infty$
> - $\displaystyle\lim_{x \to -\infty} x^n = +\infty$ se $n$ è pari, $-\infty$ se $n$ è dispari

> [!abstract] Limiti delle funzioni elementari (potenze a esponente reale) · slide 36
> Potenze ad esponente reale $\alpha \in \mathbb{R}$:
> - $\displaystyle\lim_{x \to x_0} x^\alpha = (x_0)^\alpha$ (se $x_0 > 0$)
> - $\displaystyle\lim_{x \to +\infty} x^\alpha = +\infty$ se $\alpha > 0$, $0$ se $\alpha < 0$
> - $\displaystyle\lim_{x \to 0^+} x^\alpha = 0$ se $\alpha > 0$, $+\infty$ se $\alpha < 0$

> [!abstract] Limiti delle funzioni elementari (esponenziali e logaritmi) · slide 37
> Esponenziali con base $a \in (0, +\infty)$:
> - $\displaystyle\lim_{x \to x_0} a^x = a^{x_0}$ (se $x_0 \in \mathbb{R}$)
> - $\displaystyle\lim_{x \to +\infty} a^x = +\infty$ se $a > 1$, $0$ se $0 < a < 1$
> - $\displaystyle\lim_{x \to -\infty} a^x = 0$ se $a > 1$, $+\infty$ se $0 < a < 1$
>
> Logaritmi con base $a \in (0, +\infty)$:
> - $\displaystyle\lim_{x \to x_0} \log_a x = \log_a(x_0)$ (se $x_0 > 0$)
> - $\displaystyle\lim_{x \to +\infty} \log_a x = +\infty$ se $a > 1$, $-\infty$ se $0 < a < 1$
> - $\displaystyle\lim_{x \to 0^+} \log_a x = -\infty$ se $a > 1$, $+\infty$ se $0 < a < 1$

> [!abstract] Limiti delle funzioni elementari (funzioni trigonometriche) · slide 38
> - $\displaystyle\lim_{x \to x_0} \sin x = \sin(x_0)$ (se $x_0 \in \mathbb{R}$)
> - $\displaystyle\lim_{x \to x_0} \cos x = \cos(x_0)$ (se $x_0 \in \mathbb{R}$)
> - $\displaystyle\lim_{x \to x_0} \tan x = \tan(x_0)$ (se $x_0 \in \left(-\frac\pi2, \frac\pi2\right)$)
> - $\displaystyle\lim_{x \to \left(\frac\pi2\right)^-} \tan x = +\infty$
> - $\displaystyle\lim_{x \to \left(-\frac\pi2\right)^+} \tan x = -\infty$

> [!abstract] Limiti di polinomi e di funzioni razionali · slide 39-40
> Per calcolare il limite di un polinomio per $x \to \pm\infty$, si raccoglie il termine di grado più alto.
> Per calcolare il limite del rapporto di due polinomi nella forma $\frac\infty\infty$, si raccolgono a numeratore e a denominatore i termini di grado più alto.

> [!abstract] Limiti nella forma $\frac10$ · slide 41
> Limiti nella forma $\frac10$: non si tratta di una forma indeterminata, ma è necessario valutare il segno del denominatore per calcolare correttamente il limite.

> [!abstract] Definizione (infinito, infinitesimo) · slide 43
> Diciamo che una funzione $f$ è un infinito per $x \to x_0$ se $\displaystyle\lim_{x \to x_0} f(x) = \pm\infty$.
> Diciamo che una funzione $f$ è un infinitesimo per $x \to x_0$ se $\displaystyle\lim_{x \to x_0} f(x) = 0$.
> Se $f$ e $g$ sono entrambi infiniti per $x \to x_0$, il limite $\displaystyle\lim_{x \to x_0}\frac{f(x)}{g(x)}$ si presenta nella forma indeterminata $\frac\infty\infty$. Per calcolare il limite, dobbiamo confrontare la velocità con cui tali funzioni tendono a infinito (ordine di infinito).

> [!abstract] Teorema (gerarchia degli infiniti) · slide 43
> Nel seguente teorema confrontiamo tra loro tre famiglie di infiniti, per $x \to +\infty$: potenze $x^\alpha$ ($\alpha > 0$), esponenziali $a^x$ ($a > 1$), logaritmi $(\log_b x)^\beta$ ($b > 1$, $\beta > 0$). Si ha:
> $$
> \lim_{x \to +\infty}\frac{a^x}{x^\alpha} = +\infty \quad \text{per } \alpha > 0,\ a > 1,
> $$
> $$
> \lim_{x \to +\infty}\frac{x^\alpha}{(\log_b x)^\beta} = +\infty \quad \text{per } \alpha, \beta > 0,\ b > 1.
> $$

> [!abstract] Teorema (cambio di variabile nei limiti) · slide 46
> Supponiamo che esista (finito o infinito) il limite $\displaystyle\lim_{x \to x_0} f(x) = y_0$. Sia poi $g$ una funzione definita in un intorno di $y_0$ tale che:
> - se $y_0 \in \mathbb{R}$, $g$ è continua in $y_0$;
> - se $y_0 = +\infty$ o $y_0 = -\infty$, esiste (finito o infinito) $\displaystyle\lim_{y \to y_0} g(y)$.
>
> Allora
> $$
> \lim_{x \to x_0} g\big(f(x)\big) = \lim_{y \to y_0} g(y).
> $$

> [!abstract] I limiti nella forma $f(x)^{g(x)}$ · slide 50
> I limiti di quantità nella forma $f(x)^{g(x)}$ possono presentare ulteriori forme indeterminate (di tipo esponenziale):
> $$
> 1^\infty, \qquad 0^0, \qquad \infty^0.
> $$
> Sfruttando le proprietà dei logaritmi, si può scrivere l'identità
> $$
> f(x)^{g(x)} = e^{\log f(x)^{g(x)}} = e^{g(x)\log f(x)}.
> $$
> Questo «trucchetto» riconduce il problema al calcolo del limite di $g(x)\log f(x)$: grazie al teorema sul cambio di variabile, avremo infatti
> $$
> \lim_{x \to x_0} f(x)^{g(x)} = e^{\lim_{x \to x_0} g(x)\log f(x)}.
> $$

> [!abstract] Limite notevole di Nepero · slide 54
> Otteniamo altri limiti notevoli a partire dal seguente limite notevole di successioni, già noto:
> $$
> \lim_{n \to +\infty}\left(1 + \frac{1}{a_n}\right)^{a_n} = e \qquad \text{per ogni successione divergente } (a_n)_n
> $$
> (sia se $a_n \to +\infty$, sia se $a_n \to -\infty$). Allora, per la caratterizzazione del limite mediante successioni otteniamo immediatamente
> $$
> \lim_{x \to +\infty}\left(1 + \frac1x\right)^x = e, \qquad \lim_{x \to -\infty}\left(1 + \frac1x\right)^x = e.
> $$
> Osservazione: con la sostituzione $y = \frac1x$ otteniamo anche
> $$
> \lim_{x \to 0}(1 + x)^{\frac1x} = e.
> $$

> [!abstract] Limiti notevoli da Nepero con opportune sostituzioni · slide 55
> A partire dal limite di Nepero otteniamo altri limiti notevoli con opportune sostituzioni:
> $$
> \lim_{x \to 0}\frac{\log(1 + x)}{x} = 1, \qquad \lim_{x \to 0}\frac{e^x - 1}{x} = 1,
> $$
> $$
> \lim_{x \to 0}\frac{a^x - 1}{x} = \log a \quad (a > 0), \qquad \lim_{x \to 0}\frac{(1 + x)^\alpha - 1}{x} = \alpha \quad (\alpha \in \mathbb{R}).
> $$

> [!abstract] I limiti notevoli: una tabella riassuntiva · slide 56
> $$
> \lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad \lim_{x \to 0}\frac{\log(1 + x)}{x} = 1
> $$
> $$
> \lim_{x \to 0}\frac{1 - \cos x}{x^2} = \frac12 \qquad \lim_{x \to 0}\frac{e^x - 1}{x} = 1
> $$
> $$
> \lim_{x \to 0}\frac{\tan x}{x} = 1 \qquad \lim_{x \to 0}\frac{a^x - 1}{x} = \log a \quad (a > 0)
> $$
> $$
> \lim_{x \to \pm\infty}\left(1 + \frac1x\right)^x = e \qquad \lim_{x \to 0}\frac{(1 + x)^\alpha - 1}{x} = \alpha \quad (\alpha \in \mathbb{R})
> $$

> [!abstract] I limiti notevoli e la composizione · slide 57
> I limiti notevoli sono molto utili per il calcolo dei limiti in combinazione con il teorema sul limite della composizione. Ad esempio, se $f$ è tale che $\displaystyle\lim_{x \to x_0} f(x) = 0$, e $f(x) \neq 0$, allora
> $$
> \lim_{x \to x_0}\frac{\sin\big(f(x)\big)}{f(x)} = 1, \qquad \lim_{x \to x_0}\frac{e^{f(x)} - 1}{f(x)} = 1, \qquad \lim_{x \to x_0}\frac{\log\big(1 + f(x)\big)}{f(x)} = 1, \ \dots
> $$

## Il prof ha scritto

- slide 6, a mano: «$\mathrm{Acc}(A) = [1, 4]$», «$(0 - \delta, 0 + \delta) \cap B = \left\{\frac1n < \delta\right\}$», «$\mathrm{Acc}(B) = \{0\}$»
- slide 12, a mano: «Siccome i limiti destro e sinistro non coincidono allora $\nexists \lim_{x \to 1} f(x)$.»
- slide 15, a mano, vicino a $\forall M > 0$ e a $f(x) > M$: «Rispetto alla def. di limite finito, cambia solo questa condizione.»
- slide 15 (pagina dei disegni), a mano: «caso $\ell \in \mathbb{R}$», «caso $\ell = +\infty$»
- slide 17, a mano: «Qual è $D = \mathbb{R} \setminus \{0\}$. $0$ è punto di accumulazione per $D$. Verifichiamo che è soddisfatta la definizione di $\lim_{x \to 0} f(x) = +\infty$, ovvero»
- slide 20, a mano: «numero reale $x_0$»
- slide 21, a mano: «Significato grafico di $\lim_{x \to +\infty} f(x) = \ell$»
- slide 22, a mano: «Rispetto al caso $\ell \in \mathbb{R}$ cambia solo questa condiz.» e «ES. scrivere le definizioni di limiti per $x \to -\infty$», «per domini illimitati inferiormente»
- slide 27, a mano: «OSS: Se $x_0$ è punto di accumulazione per $D$ allora esistono (infinite) successioni di punti di $D \setminus \{x_0\}$ che convergono a $x_0$.»
- slide 27, a mano: «Conseguenza: Per verificare che una funzione $f$ non soddisfa $\lim_{x \to x_0} f(x) = \ell$ basta verificare che $\exists (x_n)_{n \in \mathbb{N}}$, $x_n \neq x_0\ \forall n$, t.c. $x_n \to x_0$ e $\lim f(x_n) = \ell'$ con $\ell' \neq \ell$.»
- slide 28, a mano: «Cerchiamo due successioni $(x_n)$ e $(y_n)$ che tendono a $\infty$, ma tali che $\lim f(x_n) = \ell_1$, $\lim f(y_n) = \ell_2$, con $\ell_1 \neq \ell_2$.»
- slide 30, a mano: «Quando $x_0 = +\infty$, il teorema diventa: se $\lim_{x \to +\infty} f = \ell$ con $\ell > 0$ (possibilmente $\ell = +\infty$) esiste $M\ (> 0)$ t.c. $f(x) > 0\ \forall x \in (M, +\infty)$.»
- slide 36, a mano (tutor): «altrimenti la potenza non è definita», «$\lim_{x \to +\infty} x^\alpha = \lim_{x \to +\infty} \frac{1}{x^{-\alpha}} = 0$»
- slide 41, a mano (tutor): «non esiste»; $\frac{1}{0^+}$ con $\frac{1}{(0^+)^4}$, $\frac{1}{(0^-)^3} = \frac{1}{0^-}$
- slide 43, a mano (tutor): «$f(x) = x^3$ è infinito per $x \to +\infty$, è infinitesimo per $x \to 0$», $a^x \gg x^\alpha$, $x^\alpha \gg (\log_b x)^\beta$, $\frac{a^x}{(\log_b x)^\beta} = \frac{a^x}{x^\alpha} \cdot \frac{x^\alpha}{(\log_b x)^\beta} \to +\infty$
- slide 44, a mano (tutor): «ATTENZIONE!» sul limite $\lim_{x \to +\infty}\frac{\sqrt x}{\log(1 + 3^x)}$
- slide 47-48, a mano (tutor): «$x \to 0^+ \Rightarrow y \to \frac{1}{0^+} = +\infty$», «$x \to 0^- \Rightarrow y \to \frac{1}{0^-} = -\infty$», «$x \to +\infty \Rightarrow y \to 0^+$»
- slide 52, a mano (tutor): «in radianti misura $x$», «DIMOSTRAZIONE NON COMPLETATA A LEZIONE»
- slide 54, a mano (tutor): «$t = \frac1x$, $x \to \pm\infty \Rightarrow t \to 0$», $\lim_{t \to 0}(1 + t)^{\frac1t} = e$
- slide 55, a mano (prof, 20/10): «$\log(a)$» accanto al limite con $a^x$, «$\alpha$» accanto al limite con $(1 + x)^\alpha$
- slide 55, a mano (tutor): «ESERCIZIO NON COMPLETATO A LEZIONE» sugli ultimi due limiti
- slide 57, a mano (tutor): «$\lim_{\square \to 0}\frac{\sin\square}{\square} = 1$»
- slide 58, a mano (tutor): «oss. $2x \to 0$, $3x \to 0$»; $\lim_{\square \to 0}\frac{\sin\square}{\square} = 1$, $\lim_{\heartsuit \to 0}\frac{\log(1 + \heartsuit)}{\heartsuit} = 1$
- Esercitazione 5, pagina 30, a mano (tutor): «ESERCIZIO NON SVOLTO A LEZIONE» su 2.1 e 2.2, con i limiti notevoli in colonna: $\lim_{\square \to 0}\frac{e^\square - 1}{\square} = 1$, $\lim_{\heartsuit \to 0}\frac{\sin\heartsuit}{\heartsuit} = 1$, $\lim_{\star \to 0}\frac{\tan\star}{\star} = 1$, $\lim_{\clubsuit \to 0}\frac{1 - \cos\clubsuit}{\clubsuit^2} = \frac12$
- Esercitazione 5, pagina 2, a mano (tutor): «Non basta $f$ monotona crescente per avere $\sup f(x_n) = f(\sup x_n)$, serve anche che $f$ sia continua» (controesempio con $f = 0$ per $x < 1$, $f = 1$ per $x \geq 1$)

## Svolti a lezione

### Punti di accumulazione di $A = (1, 4] \cup \{6\}$ e di $B = \left\{\frac1n : n = 1, 2, \dots\right\}$ (slide 6)
$$
\mathrm{Acc}(A) = [1, 4]
$$
$$
(0 - \delta, 0 + \delta) \cap B = \left\{\frac1n < \delta\right\}, \qquad \mathrm{Acc}(B) = \{0\}
$$

### Limite destro e sinistro, $f(x) = x + 4$ se $x \leq 1$, $f(x) = -3x + 2$ se $x > 1$ (slide 12)
$$
\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x + 4) = 5 \qquad\qquad \lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (-3x + 2) = -1
$$
Siccome i limiti destro e sinistro non coincidono, $\nexists \lim_{x \to 1} f(x)$.

### $\lim_{x \to 0}\frac{1}{x^2} = +\infty$ con la definizione (slide 17)
$D = \mathbb{R} \setminus \{0\}$, $0$ è punto di accumulazione per $D$. Si deve verificare che
$$
\forall M > 0 \quad \exists\, \delta > 0 \ \text{t.c.} \ \forall x \in (-\delta, \delta) \setminus \{0\} \quad \text{vale } f(x) > M.
$$
Per ogni $M$ voglio esibire un possibile $\delta$. Impongo $f(x) > M$, ovvero
$$
\frac{1}{x^2} > M \quad \text{ovvero} \quad \begin{cases} x < \frac{1}{\sqrt M} \\ x > -\frac{1}{\sqrt M} \end{cases} \quad \text{ovvero} \quad x \in \left(-\frac{1}{\sqrt M}, \frac{1}{\sqrt M}\right) \setminus \{0\}.
$$
Quindi scegliendo qualunque $\delta$ con $0 < \delta < \frac{1}{\sqrt M}$ vale la condizione richiesta.

### $\lim_{x \to +\infty} x^3 = +\infty$ con la definizione (slide 23)
Fissiamo $M > 0$ arbitrario. Obiettivo: trovare $K > 0$ t.c. $x^3 > M$ per ogni $x \in (K, +\infty)$. Imponiamo questa condizione:
$$
x^3 > M \iff x > \sqrt[3]{M}
$$
Quindi scegliendo qualunque valore $K > \sqrt[3]{M}$ è soddisfatta la condizione.

### Non esistenza con le successioni: $\lim_{x \to +\infty}\sin x$ e $\lim_{x \to 0^+}\sin\left(\frac1x\right)$ (slide 28)
A) Scegliamo $x_n = n\pi\ \forall n$, $x_n \to +\infty$: $f(x_n) = \sin(n\pi) = 0$, quindi $\lim f(x_n) = 0$. Scegliamo $y_n = \frac\pi2 + 2n\pi\ \forall n$, $y_n \to +\infty$: $f(y_n) = \sin\left(\frac\pi2 + 2n\pi\right) = 1$, quindi $\lim f(y_n) = 1$. Per il criterio precedente $\nexists \lim_{x \to +\infty}\sin x$.
B) $\lim_{x \to 0^+}\sin\left(\frac1x\right)$: $x_n = \frac{1}{n\pi} \to 0^+$, $y_n = \frac{1}{\frac\pi2 + 2n\pi} \to 0^+$.
$$
\lim_{n \to +\infty}\sin\left(\frac{1}{x_n}\right) = 0 \neq 1 = \lim_{n \to +\infty}\sin\left(\frac{1}{y_n}\right)
$$
Stesso criterio con il coseno (slide 38): $\{2k\pi\}_{k \in \mathbb{N}}$ e $\{\pi + 2k\pi\}_{k \in \mathbb{N}}$, $\lim_{k \to +\infty}\cos(2k\pi) = 1$, $\lim_{k \to +\infty}\cos(\pi + 2k\pi) = -1$; per il seno, $\left\{\frac\pi2 + 2k\pi\right\}$ e $\left\{-\frac\pi2 + 2k\pi\right\}$, $\sin = 1$ e $\sin = -1$.

### $\lim_{x \to +\infty}\frac{\sin x}{x^2}$ (slide 31)
Siccome $\forall x \in \mathbb{R}$ $-1 \leq \sin x \leq 1$. Allora
$$
-\frac{1}{x^2} \leq \frac{\sin x}{x^2} \leq \frac{1}{x^2}
$$
con $f(x) = -\frac{1}{x^2} \to 0$ e $h(x) = \frac{1}{x^2} \to 0$ per $x \to +\infty$. Allora per il teorema dei due carabinieri $\displaystyle\lim_{x \to +\infty}\frac{\sin x}{x^2} = 0$.

### Limiti di polinomi (slide 39)
$$
\lim_{x \to -2}\left(x^3 + x^2 - 3x + 1\right) = (-2)^3 + (-2)^2 - 3(-2) + 1 = 3
$$
$$
\lim_{x \to +\infty}\left(3x^3 - x^2 + 1\right) \quad [+\infty - \infty] \text{ F.I.} \quad = \lim_{x \to +\infty} x^3\left(3 - \frac1x + \frac{1}{x^3}\right) = +\infty
$$
$$
\lim_{x \to -\infty}\left(-2x^3 + x + 120\right) \quad [+\infty - \infty] \text{ F.I.} \quad = \lim_{x \to -\infty} x^3\left(-2 + \frac{1}{x^2} + \frac{120}{x^3}\right) = +\infty
$$

### Limiti di funzioni razionali (slide 40)
$$
\lim_{x \to -\infty}\frac{3x^3 + 1}{x^2 + 2} = \lim_{x \to -\infty}\frac{x^3\left(3 + \frac{1}{x^3}\right)}{x^2\left(1 + \frac{2}{x^2}\right)} = -\infty
$$
$$
\lim_{x \to +\infty}\frac{3x^3 + 1}{x^4 - 10x + 1} = \lim_{x \to +\infty}\frac{x^3\left(3 + \frac{1}{x^3}\right)}{x^4\left(1 - \frac{10}{x^3} + \frac{1}{x^4}\right)} = \frac{3}{\infty} = 0
$$
$$
\lim_{x \to +\infty}\frac{6x^5 + 7x^2}{7x^5 - 4} = \lim_{x \to +\infty}\frac{x^5\left(6 + \frac{7}{x^3}\right)}{x^5\left(7 - \frac{4}{x^5}\right)} = \frac67
$$

### Limiti nella forma $\frac10$ (slide 41)
$$
\lim_{x \to 3^+}\frac{1}{(x - 3)^4} = \frac{1}{(0^+)^4} = \frac{1}{0^+} = +\infty \qquad \lim_{x \to 3^-}\frac{1}{(x - 3)^4} = \frac{1}{(0^-)^4} = \frac{1}{0^+} = +\infty \quad \Rightarrow \quad \lim_{x \to 3}\frac{1}{(x - 3)^4} = +\infty
$$
$$
\lim_{x \to 3}\frac{1}{(x - 3)^3} = \text{NON ESISTE}
$$
$$
\lim_{x \to 3^-}\frac{1}{(x - 3)^3} = \frac{1}{(0^-)^3} = \frac{1}{0^-} = -\infty \qquad \lim_{x \to 3^+}\frac{1}{(x - 3)^3} = \frac{1}{(0^+)^3} = \frac{1}{0^+} = +\infty
$$

### Altri esempi (slide 42)
$$
\lim_{x \to 0}\frac{x^{\frac23}}{x^2 + 3\sqrt[3]{x} + x} \ \left[\tfrac00\right] = \lim_{x \to 0}\frac{x^{\frac23}}{x^{\frac13}\left(x^{\frac53} + 3 + x^{\frac23}\right)} = \lim_{x \to 0}\frac{x^{\frac13}}{x^{\frac53} + 3 + x^{\frac23}} = 0
$$
$$
\lim_{x \to 0} x\sin\left(\frac1x\right) = 0: \quad \left\vert\sin\left(\frac1x\right)\right\vert \leq 1, \quad -1 \leq \sin\left(\frac1x\right) \leq 1
$$
$$
x \to 0^+: \ -x \leq x\sin\left(\frac1x\right) \leq x \qquad x \to 0^-: \ -x \geq x\sin\left(\frac1x\right) \geq x \qquad \text{estremi} \to 0
$$
$$
\lim_{x \to +\infty}(x - \sin x) = \lim_{x \to +\infty} x\left(1 - \frac{\sin x}{x}\right) = +\infty, \qquad -\frac1x \leq \frac{\sin x}{x} \leq \frac1x, \quad \text{estremi} \to 0
$$
$$
\lim_{x \to 0^+}\frac{x - 1}{\sin x} = \frac{-1}{\sin 0^+} = \frac{-1}{0^+} = -\infty
$$
$$
\lim_{x \to -\infty}\left(\frac1x - 2\right)x^3 = \left(\frac{1}{-\infty} - 2\right)(-\infty)^3 = (0^- - 2)(-\infty) = +\infty
$$

### Gerarchia degli infiniti (slide 44)
$$
\lim_{x \to +\infty}\frac{2^x}{x^3} = +\infty \qquad \lim_{x \to +\infty}\frac{x^3}{2^x} = \lim_{x \to +\infty}\frac{1}{\frac{2^x}{x^3}} = 0
$$
$$
\lim_{x \to +\infty}\frac{(\log x)^2}{\sqrt x} = \lim_{x \to +\infty}\frac{1}{\frac{\sqrt x}{(\log x)^2}} = 0 \qquad \lim_{x \to +\infty}\frac{e^{4x}}{\log x^7} = +\infty
$$
ATTENZIONE!
$$
\lim_{x \to +\infty}\frac{\sqrt x}{\log\left(1 + 3^x\right)} = \lim_{x \to +\infty}\frac{\sqrt x}{\log\left(3^x\left(1 + \frac{1}{3^x}\right)\right)} = \lim_{x \to +\infty}\frac{\sqrt x}{x\log 3 + \log\left(1 + \frac{1}{3^x}\right)} = \lim_{x \to +\infty}\frac{\sqrt x}{x\left(\log 3 + \frac{\log\left(1 + \frac{1}{3^x}\right)}{x}\right)} = 0
$$

### Cambio di variabile (slide 47 e 48)
$$
\lim_{x \to 0^+} e^{\frac1x} = \lim_{y \to +\infty} e^y = e^{+\infty} = +\infty \qquad y = \tfrac1x, \ x \to 0^+ \Rightarrow y \to \tfrac{1}{0^+} = +\infty
$$
$$
\lim_{x \to 0^-} e^{\frac1x} = \lim_{y \to -\infty} e^y = e^{-\infty} = 0 \qquad y = \tfrac1x, \ x \to 0^- \Rightarrow y \to \tfrac{1}{0^-} = -\infty
$$
$$
\lim_{x \to +\infty} e^{\frac1x} = \lim_{y \to 0^+} e^y = e^0 = 1 \qquad y = \tfrac1x, \ x \to +\infty \Rightarrow y \to 0^+
$$
$$
\lim_{x \to 1^+}\arctan\left(\frac{1}{x - 1}\right) = \lim_{t \to +\infty}\arctan t = \frac\pi2 \qquad t = \tfrac{1}{x - 1}, \ x \to 1^+ \Rightarrow t \to \tfrac{1}{0^+} = +\infty
$$
$$
\lim_{x \to +\infty}\log\sin\frac1x = \lim_{y \to 0^+}\log y = -\infty \qquad y = \sin\tfrac1x, \ x \to +\infty \Rightarrow y \to \sin\tfrac{1}{+\infty} = \sin 0^+ = 0^+
$$

### $\lim_{x \to 0^+} x^\alpha\log x$ ($\alpha > 0$) e $\lim_{x \to 0^+} x^2 e^{\frac1x}$ (slide 49)
$$
t = \tfrac1x, \ x \to 0^+ \Rightarrow t \to +\infty, \ x = \tfrac1t: \quad \lim_{x \to 0^+} x^\alpha\log x = \lim_{t \to +\infty}\left(\frac1t\right)^\alpha\log\left(\frac1t\right) = \lim_{t \to +\infty}\frac{\log 1 - \log t}{t^\alpha} = \lim_{t \to +\infty} -\frac{\log t}{t^\alpha} = 0
$$
$$
y = \tfrac1x, \ x \to 0^+ \Rightarrow y \to +\infty, \ x = \tfrac1y: \quad \lim_{x \to 0^+} x^2 e^{\frac1x} = \lim_{y \to +\infty}\left(\frac1y\right)^2 e^y = \lim_{y \to +\infty}\frac{e^y}{y^2} = +\infty
$$

### $\lim_{x \to 0^+} x^x$ (slide 50)
$$
\lim_{x \to 0^+} x^x = \lim_{x \to 0^+} e^{\log x^x} = \lim_{x \to 0^+} e^{x\log x} = e^0 = 1
$$

### $\lim_{x \to 0}\frac{1 - \cos x}{x^2}$ e $\lim_{x \to 0}\frac{\tan x}{x}$ (slide 53)
$$
\lim_{x \to 0}\frac{1 - \cos x}{x^2} \ \left[\tfrac00\right] = \lim_{x \to 0}\frac{(1 - \cos x)(1 + \cos x)}{x^2(1 + \cos x)} = \lim_{x \to 0}\frac{1 - \cos^2 x}{x^2} \cdot \frac{1}{1 + \cos x} = \lim_{x \to 0}\frac{\sin^2 x}{x^2} \cdot \frac{1}{1 + \cos x} = \lim_{x \to 0}\left(\frac{\sin x}{x}\right)^2 \cdot \frac{1}{1 + \cos x} = \frac12
$$
$$
\lim_{x \to 0}\frac{\tan x}{x} = \lim_{x \to 0}\frac{\sin x}{\cos x} \cdot \frac1x = \lim_{x \to 0}\frac{\sin x}{x} \cdot \frac{1}{\cos x} = 1
$$

### Limiti notevoli composti (slide 57)
$$
\lim_{x \to 2}\frac{\sin(x - 2)}{x - 2} = \lim_{y \to 0}\frac{\sin y}{y} = 1 \qquad y = x - 2
$$
$$
\lim_{x \to +\infty}\frac{e^{\frac1x} - 1}{\frac1x} = \lim_{y \to 0^+}\frac{e^y - 1}{y} = 1 \qquad y = \tfrac1x
$$
$$
\lim_{x \to 0}\frac{\sin(3x)}{x} = \lim_{x \to 0}\frac{\sin(3x)}{3x} \cdot 3 = 3
$$

### Più limiti notevoli insieme, forma $\infty \cdot 0$ (slide 58)
$$
\lim_{x \to 0}\frac{\log(1 + 2x)}{\sin(3x)} \ \left[\tfrac00\right] = \lim_{x \to 0}\frac{\log(1 + 2x)}{2x} \cdot 2x \cdot \frac{1}{\frac{\sin(3x)}{3x} \cdot 3x} = \lim_{x \to 0}\frac{\log(1 + 2x)}{2x} \cdot \frac{1}{\frac{\sin(3x)}{3x}} \cdot \frac{2x}{3x} = \frac23
$$
$$
\lim_{x \to +\infty} x\log\frac{x + 3}{x + 1} \ \left[+\infty \cdot \log 1 = +\infty \cdot 0\right]: \quad x\log\left(\frac{x + 1 + 2}{x + 1}\right) = x\log\left(1 + \frac{2}{x + 1}\right) = \frac{2x}{x + 1} \cdot \frac{\log\left(1 + \frac{2}{x + 1}\right)}{\frac{2}{x + 1}} \to 2 \cdot 1 = 2
$$

### $1^{+\infty}$ in due modi: $\lim_{x \to +\infty}\left(\frac{x^2 + 3}{x^2 + 2}\right)^{2x^2}$ (slide 59)
Con $\lim_{\star \to +\infty}\left(1 + \frac1\star\right)^\star = e$.
Modo 1:
$$
\left(\frac{x^2 + 2 + 1}{x^2 + 2}\right)^{2x^2} = \left(1 + \frac{1}{x^2 + 2}\right)^{2x^2} = \left[\left(1 + \frac{1}{x^2 + 2}\right)^{x^2 + 2}\right]^{\frac{2x^2}{x^2 + 2}} \xrightarrow{x \to +\infty} e^2
$$
Modo 2, $f(x)^{g(x)}$:
$$
\left(\frac{x^2 + 3}{x^2 + 2}\right)^{2x^2} = e^{\log\left(\frac{x^2 + 3}{x^2 + 2}\right)^{2x^2}} = e^{2x^2\log\left(1 + \frac{1}{x^2 + 2}\right)} = e^{2x^2 \cdot \frac{\log\left(1 + \frac{1}{x^2 + 2}\right)}{\frac{1}{x^2 + 2}} \cdot \frac{1}{x^2 + 2}} \to e^2
$$

### $\lim_{x \to 0}\frac{\log\left(5x^2 - 3x + 2^x\right) + \tan x}{\sin(3x)}$ (slide 60)
$$
\frac{\log\left(5x^2 - 3x + 2^x\right) + \tan x}{\sin(3x)} \ \left[\tfrac00\right] = \frac{\log\left(2^x\left[1 + \frac{5x^2 - 3x}{2^x}\right]\right) + \tan x}{\sin(3x)} = \frac{x\log 2 + \frac{\log\left(1 + \frac{5x^2 - 3x}{2^x}\right)}{\frac{5x^2 - 3x}{2^x}} \cdot \frac{5x^2 - 3x}{2^x} + \frac{\tan x}{x} \cdot x}{\frac{\sin(3x)}{3x} \cdot 3x}
$$
$$
= \frac{x\left[\log 2 + \frac{\log(1 + \dots)}{\dots} \cdot \frac{5x - 3}{2^x} + \frac{\tan x}{x}\right]}{\frac{\sin(3x)}{3x} \cdot 3x} \longrightarrow \frac{\log 2 - 3 + 1}{3}
$$

## Crocette delle provette

### 2025, domanda 2

Sia $f : \mathbb{R} \to \mathbb{R}$ una funzione limitata e monotona. Quale delle seguenti affermazioni è vera?

- a) $f$ ammette massimo e minimo
- b) Il limite $\lim_{x\to+\infty} f(x)$ esiste finito
- c) $f$ è continua
- d) $\lim_{x\to+\infty} f(x) = \sup f$

> [!example]- Soluzione
> **b**. È facile verificare che
> $$
> y = \begin{cases} -\arctan x & x \ne 0 \\ 1 & x = 0 \end{cases}
> $$
> è un controesempio per [1], [3], [4]. *(Figura del prof: il grafico di $-\arctan x$ tra le rette $y = \pm\pi/2$, con il punto $x = 0$ vuoto e il punto isolato in $(0, 1)$.)*
>
> Non è richiesto di dimostrare [2] per rispondere al quesito, tuttavia: supponiamo che $f$ sia monotona crescente. Poiché $f$ è limitata superiormente, esiste $\sup f = s \in \mathbb{R}$ t.c. $f(x) \le s$ $\forall x \in \mathbb{R}$. Inoltre, $\forall \varepsilon > 0$ $\exists \bar{x}(\varepsilon)$ t.c. $f(\bar{x}(\varepsilon)) > s - \varepsilon$; quindi $\forall x \ge \bar{x}(\varepsilon)$ si ha
> $$
> s - \varepsilon < f(x) \le s < s + \varepsilon
> $$
> ovvero $\lim_{x\to+\infty} f(x) = s$.
>
> Si procede in modo analogo per $f$ decrescente.
>
> *(la funzione dell'esempio del prof, con $f(0) = 1$, non è monotona: la risposta b resta giusta)*

### 2025, domanda 6

Per quale valore di $\alpha \in \mathbb{R}$ si ha

$$
\lim_{x\to+\infty} x\left(\log\left(\frac{x+1}{x}\right) + \sin\frac{\alpha}{x}\right) = 0 ?
$$

- a) $0$
- b) $1$
- c) $-1$
- d) Non esiste tale $\alpha$

> [!example]- Soluzione
> **c**. $$x\left(\log\left(\frac{x+1}{x}\right) + \sin\frac{\alpha}{x}\right) = x\left(\log\left(1 + \frac{1}{x}\right) + \sin\frac{\alpha}{x}\right)$$
> $$
> = x\left(\frac{\log\left(1 + \frac{1}{x}\right)}{\frac{1}{x}} \cdot \frac{1}{x} + \frac{\sin\frac{\alpha}{x}}{\frac{\alpha}{x}} \cdot \frac{\alpha}{x}\right) \xrightarrow{x\to+\infty} 1 + \alpha
> $$
> (i due rapporti, cerchiati dal prof, tendono a $1$)
> $$
> 1 + \alpha = 0 \to \alpha = -1
> $$

### 2024, domanda 1

Calcolare (dove $\log$ denota il logaritmo in base $e$)

$$
\lim_{x\to0} \frac{\log(\cos(x))}{\sin^2(x)}
$$

- a) $1/2$
- b) $-1/2$
- c) $1$
- d) non esiste

> [!example]- Soluzione
> **b**. $$\lim_{x\to0} \frac{\log(\cos(x))}{\sin^2(x)} = \lim_{x\to0} \frac{\log(1 + \cos(x) - 1)}{\sin^2(x)} =$$
> $$
> \lim_{x\to0} \underbrace{\frac{x^2}{\sin^2(x)}}_{\to 1} \cdot \underbrace{\frac{\log(1 + \cos(x) - 1)}{\cos(x) - 1}}_{\to 1} \cdot \frac{\cos(x) - 1}{x^2} = -\lim_{x\to0} \frac{1 - \cos(x)}{x^2} = -\frac{1}{2}
> $$
> ($\cos(x) - 1 \to 0$ nel logaritmo)

### 2022 A, domanda 3

Se $\lim_{x \to +\infty} f(x) = 1$ allora

- a) esiste $M > 0$ tale che, se $x > M$, si ha $f(x) < \frac{1}{2}$;
- b) esiste $M > 0$ tale che, se $x > M$, si ha $\frac{1}{2} < f(x) < 1$;
- c) esiste $M > 0$ tale che, se $x > M$, si ha $f(x) > \frac{4}{3}$;
- d) esiste $M > 0$ tale che, se $x > M$, si ha $\frac{1}{4} < f(x) < \frac{4}{3}$.

> [!example]- Soluzione
> **d**. $$\lim_{x \to +\infty} f(x) = 1 \iff \forall \varepsilon > 0 \; \exists M > 0 \text{ t.c. } \forall x > M, \; \vert f(x) - 1\vert < \varepsilon$$
> $$
> (*) \quad \forall x > M \quad 1 - \varepsilon < f(x) < 1 + \varepsilon
> $$
> Quindi d) è vera perché per $\varepsilon = \frac{1}{4}$ si ha $(*)$:
> $$
> \forall x > M \quad 1 - \frac{1}{4} < f(x) < 1 + \frac{1}{4} \to \forall x > M \quad \frac{3}{4} < f(x) < \frac{5}{4}
> $$
> $$
> \to \forall x > M \quad \frac{1}{4} < f(x) < \frac{4}{3}
> $$
> *(annotazione: $\frac{3}{4} > \frac{1}{4}$ e $\frac{5}{4} < \frac{4}{3}$)*
> Per maggior chiarezza rappresentiamo 3 grafici di funzioni t.c. $\lim_{x \to +\infty} f(x) = 1$ ma che siano dei controesempi per a), b), c).
> *(primo grafico, scritto $y = e^x + 1$ ma disegnato decrescente verso $1$: controesempio per a) e b). Secondo grafico, scritto $y = -e^x + 1$ ma disegnato crescente verso $1$ e che resta sotto $\frac{4}{3}$: controesempio per c))*

### 2022 A, domanda 6

Sia $f : \mathbb{R} \to \mathbb{R}$ una funzione monotona crescente allora:

- a) $f$ è iniettiva;
- b) $\lim_{x \to \infty} f(x) = +\infty$;
- c) esiste $\lim_{x \to \infty} f(x)$;
- d) nessuna delle precedenti

> [!example]- Soluzione
> **c**. È il TEOREMA di ESISTENZA del LIMITE per FUNZIONI MONOTONE che per $x \to +\infty$ ha il seguente enunciato.
> Sia $f : A \to \mathbb{R}$ con $A \subseteq \mathbb{R}$ superiormente non limitato. Allora ESISTE $\lim_{x \to +\infty} f(x)$ e si ha:
> $$
> \lim_{x \to +\infty} f(x) = \sup_{x \in A} f(x)
> $$
> OSSERVAZIONE: a) non è corretta poiché non è specificato che $f$ sia strettamente monotona.
> Esempio: *(grafico di una funzione crescente con un tratto orizzontale tra $x_0$ e $x_1$)* in questo pezzo $f(x)$ non è strettamente crescente e $f(x_1) = f(x_2) = 1$ per $x \in [x_0, x_1]$.

### 2022 A, domanda 8

Calcolare il seguente limite

$$
\lim_{x \to +\infty} \frac{[x]}{x}
$$

dove $[x]$ denota la parte intera di $x$

- a) non esiste
- b) $1$
- c) $0$
- d) $-1$

> [!example]- Soluzione
> **b**. Osserviamo che $x - 1 \leq [x] \leq x + 1$ e che
> $$
> \lim_{x \to +\infty} \frac{x - 1}{x} = 1 = \lim_{x \to +\infty} \frac{x + 1}{x}
> $$
> quindi, per T. confronto:
> $$
> \lim_{x \to +\infty} \frac{x - 1}{x} \leq \lim_{x \to +\infty} \frac{[x]}{x} \leq \lim_{x \to +\infty} \frac{x + 1}{x}
> $$
> $$
> \Rightarrow \lim_{x \to +\infty} \frac{[x]}{x} = 1
> $$

### 2022 B, domanda 8

Calcolare il seguente limite

$$
\lim_{x \to +\infty} \frac{[x]}{2x}
$$

dove $[x]$ denota la parte intera di $x$

- a) non esiste
- b) $\frac{1}{2}$
- c) $0$
- d) $-\frac{1}{2}$

> [!example]- Soluzione
> **b**. Osserviamo che $x - 1 \leq [x] \leq x + 1$ e che
> $$
> \lim_{x \to +\infty} \frac{x - 1}{2x} = 1 = \lim_{x \to +\infty} \frac{x + 1}{2x}
> $$
> *(scritto $1$ nella prima riga, copiato dalla versione A: i due limiti valgono $\frac{1}{2}$, come il prof scrive subito dopo)*
> quindi, per T. confronto:
> $$
> \lim_{x \to +\infty} \frac{x - 1}{2x} \leq \lim_{x \to +\infty} \frac{[x]}{2x} \leq \lim_{x \to +\infty} \frac{x + 1}{2x}
> $$
> con i due estremi uguali a $\frac{1}{2}$
> $$
> \Rightarrow \lim_{x \to +\infty} \frac{[x]}{2x} = \frac{1}{2}
> $$

### 2019, compito 1 domanda 8

Il limite $\displaystyle\lim_{x \to 0} \left(2 - \cos(\pi x)\right)^{\frac{\pi^{x-1}}{x^2 + x^3}}$ vale

- a) $1$
- b) $e^{\frac{\pi}{2}}$
- c) $\sqrt{e}$
- d) $0$

> [!example]- Soluzione
> **b**. Forma $1^\infty$: $1 - \cos(\pi x) \sim \pi^2 x^2/2$ e $\pi^{x-1}/(x^2 + x^3) \sim 1/(\pi x^2)$, il prodotto tende a $\pi/2$. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 2 domanda 4

Il limite $\displaystyle\lim_{x \to 0} \left(\cos(\pi x/2)\right)^{\frac{\pi^{2x-2}}{x^2 + x^4}}$ vale

- a) $e^{\frac{1}{\pi^2}}$
- b) $e^{-\frac{1}{8}}$
- c) $0$
- d) $1$

> [!example]- Soluzione
> **b**. Forma $1^\infty$: $\cos(\pi x/2) - 1 \sim -\pi^2 x^2/8$ e l'esponente $\sim 1/(\pi^2 x^2)$, il prodotto tende a $-1/8$. *(conto mio, la chiave dà solo la risposta)*

### simulazione, domanda 5

$$
\lim_{x\to0} \frac{e^{\sin x} - \cos x}{\sin(5x)} =
$$

- a) $2/5$
- b) $5$
- c) $1/5$
- d) $3/10$

> [!example]- Soluzione
> **c**. Per $x \to 0$: $e^{\sin x} - \cos x = (e^{\sin x} - 1) + (1 - \cos x) \sim x$, quindi il limite è $\frac{x}{5x} = \frac{1}{5}$. *(conto mio, la chiave dà solo la risposta)*

## Esercizi delle provette

### 2025, esercizio 2 (d nel testo, c nella soluzione), 12 punti in tutto

Determinare se esiste e calcolare:

$$
\lim_{x\to0^+} \frac{\sin(2x)}{x\sqrt{x+1}}.
$$

> [!example]- Soluzione
> $$
> \frac{\sin(2x)}{x\sqrt{x+1}} = \frac{\sin(2x)}{2x} \cdot \frac{2}{\sqrt{x+1}} \xrightarrow{x\to0^+} 2
> $$
> (il primo rapporto, cerchiato dal prof, tende a $1$)

### 2024, esercizio 3 (asintoti), 6 punti in tutto

Dire se la funzione $f$ ammette asintoti orizzontali e in tal caso determinarli.

$$
f(x) := \begin{cases} \dfrac{\sqrt{x+4} - 2}{x} & \text{se } x > 0 \\[2mm] a - \dfrac{1}{x-1} & \text{se } x \le 0 \end{cases}
$$

> [!example]- Soluzione
> Per cercare asintoti orizzontali, calcoliamo:
>
> a) $$\lim_{x\to+\infty} f(x) = \lim_{x\to+\infty} \frac{\sqrt{x+4} - 2}{x} = \lim_{x\to+\infty} \frac{x\left(\sqrt{\frac{x}{x^2} + \frac{4}{x^2}} - \frac{2}{x}\right)}{x} = 0$$
> (la parentesi tende a $0$)
> quindi $y = 0$ è un asintoto orizzontale a $+\infty$.
>
> b) $$\lim_{x\to-\infty} f(x) = \lim_{x\to-\infty} a - \frac{1}{x-1} = a$$
> ($\frac{1}{x-1} \to 0$)
> quindi $y = a$ è un asintoto orizzontale a $-\infty$.

### 2023 v2, esercizio 2, 6 punti

Calcolare il seguente limite:

$$
\lim_{x \to 1} \frac{e^x - e}{\sqrt{x} - 1}
$$

> [!example]- Soluzione
> $$
> \lim_{x \to 1} \frac{e^x - e}{\sqrt{x} - 1} \overset{t = x - 1}{=} \lim_{t \to 0} \frac{e^{t+1} - e}{\sqrt{t + 1} - 1} \quad \left[\tfrac{0}{0}\right]_{\text{F.I.}}
> $$
> $$
> \frac{e^{t+1} - e}{\sqrt{t + 1} - 1} = \frac{e\left(e^t - 1\right)}{t} \cdot t \cdot \frac{1}{\sqrt{t + 1} - 1} \cdot \frac{\sqrt{t + 1} + 1}{\sqrt{t + 1} + 1}
> $$
> $$
> = \frac{e\left(e^t - 1\right)}{t} \cdot t \cdot \frac{1}{t + 1 - 1} \cdot \left(\sqrt{t + 1} + 1\right)
> $$
> $$
> = \frac{e\left(e^t - 1\right)}{t} \cdot t \cdot \frac{1}{t} \cdot \left(\sqrt{t + 1} + 1\right) \xrightarrow{t \to 0} 2e
> $$
> *(annotazioni: $\frac{e^t - 1}{t} \to 1$, $\sqrt{t + 1} + 1 \to 2$)*
> $$
> \Rightarrow \lim_{x \to 1} \frac{e^x - e}{\sqrt{x} - 1} = 2e
> $$

### 2022 A, esercizio 3, 8 punti

Determinare, se esistono, i seguenti limiti

$$
\lim_{x \to 0} \sin(x)\sin\left(\frac{1}{x}\right),
$$

$$
\lim_{x \to 0^+} \left(\frac{1}{x}\right)^{\sin(x)},
$$

$$
\lim_{x \to +\infty} \sin(x^2).
$$

> [!example]- Soluzione
> 3.a) $$\lim_{x \to 0} \sin x \sin\left(\frac{1}{x}\right)$$
> $-1 \leq \sin\left(\frac{1}{x}\right) \leq 1$
> Per $x \to 0^+$ ($\sin x > 0$):
> $$
> -\sin x \leq \sin x \sin\left(\frac{1}{x}\right) \leq \sin x
> $$
> con $-\sin x \to 0$ e $\sin x \to 0$ per $x \to 0^+$; T. CONFRONTO:
> $$
> \to \lim_{x \to 0^+} \sin x \sin\left(\frac{1}{x}\right) = 0
> $$
> Per $x \to 0^-$ ($\sin x < 0$):
> $$
> -\sin x \geq \sin x \sin\left(\frac{1}{x}\right) \geq \sin x
> $$
> con $-\sin x \to 0$ e $\sin x \to 0$ per $x \to 0^-$; T. CONFRONTO:
> $$
> \to \lim_{x \to 0^-} \sin x \sin\left(\frac{1}{x}\right) = 0
> $$
> $$
> \lim_{x \to 0} \sin x \sin\left(\frac{1}{x}\right) = 0
> $$
> 3.b) $$\lim_{x \to 0^+} \left(\frac{1}{x}\right)^{\sin x} = \left[(+\infty)^0\right]_{\text{F.I.}}$$
> $$
> \left(\frac{1}{x}\right)^{\sin x} = e^{\log\left(\frac{1}{x}\right)^{\sin x}} = e^{\sin x \log\frac{1}{x}} = e^{\frac{\sin x}{x} \cdot x(\log 1 - \log x)}
> $$
> $$
> = e^{-\frac{\sin x}{x} \cdot x\log x} \xrightarrow{x \to 0^+} e^0 = 1
> $$
> *(annotazioni: $\frac{\sin x}{x} \to 1$, $x\log x \to 0$)*
> $(*)$ $\lim_{x \to 0^+} x\log x = 0$, infatti con $t = \frac{1}{x}$:
> $$
> \lim_{t \to +\infty} \frac{1}{t}\log\frac{1}{t} = \lim_{t \to +\infty} -\frac{\log t}{t} = 0
> $$
> $$
> \lim_{x \to 0^+} \left(\frac{1}{x}\right)^{\sin x} = 1
> $$
> 3.c) $$\lim_{x \to +\infty} \sin(x^2)$$
> Mostriamo che il limite non esiste estraendo due sottosuccessioni che convergano a valori diversi:
> $$
> a_k = \left\{\sqrt{\frac{3}{2}\pi + 2k\pi}\right\}_{k \in \mathbb{N}}, \quad b_k = \left\{\sqrt{\frac{\pi}{2} + 2k\pi}\right\}_{k \in \mathbb{N}}
> $$
> OSSERVIAMO che $\lim_{k \to +\infty} a_k = +\infty$ e $\lim_{k \to +\infty} b_k = +\infty$.
> $$
> \lim_{k \to +\infty} \sin\left(a_k^2\right) = \lim_{k \to +\infty} \sin\left[\left(\sqrt{\frac{3}{2}\pi + 2k\pi}\right)^2\right] = \lim_{k \to +\infty} \sin\left(\frac{3}{2}\pi + 2k\pi\right) = -1
> $$
> $$
> \lim_{k \to +\infty} \sin\left(b_k^2\right) = \lim_{k \to +\infty} \sin\left[\left(\sqrt{\frac{\pi}{2} + 2k\pi}\right)^2\right] = \lim_{k \to +\infty} \sin\left(\frac{\pi}{2} + 2k\pi\right) = 1
> $$
> PER TEOREMA di ESISTENZA e UNICITÀ del LIMITE abbiamo che
> $$
> \nexists \lim_{x \to +\infty} \sin(x^2)
> $$
> GRAFICAMENTE: *(grafico di $y = \sin(x^2)$ con i punti $\sin(a_k^2)$ sul valore $-1$ e $\sin(b_k^2)$ sul valore $1$)*

### 2022 B, esercizio 3, 8 punti

Determinare, se esistono, i seguenti limiti

$$
\lim_{x \to 0} \sin(x)\sin\left(\frac{2}{x}\right),
$$

$$
\lim_{x \to 0^+} \left(\frac{1}{x}\right)^{\sin(x)},
$$

$$
\lim_{x \to +\infty} \cos(x^2).
$$

> [!example]- Soluzione
> 3.a) $$\lim_{x \to 0} \sin x \sin\left(\frac{2}{x}\right)$$
> $-1 \leq \sin\left(\frac{2}{x}\right) \leq 1$
> Per $x \to 0^+$ ($\sin x > 0$):
> $$
> -\sin x \leq \sin x \sin\left(\frac{2}{x}\right) \leq \sin x
> $$
> con $-\sin x \to 0$ e $\sin x \to 0$ per $x \to 0^+$; T. CONFRONTO:
> $$
> \to \lim_{x \to 0^+} \sin x \sin\left(\frac{2}{x}\right) = 0
> $$
> Per $x \to 0^-$ ($\sin x < 0$):
> $$
> -\sin x \geq \sin x \sin\left(\frac{2}{x}\right) \geq \sin x
> $$
> con $-\sin x \to 0$ e $\sin x \to 0$ per $x \to 0^-$; T. CONFRONTO:
> $$
> \to \lim_{x \to 0^-} \sin x \sin\left(\frac{2}{x}\right) = 0
> $$
> $$
> \lim_{x \to 0} \sin x \sin\left(\frac{2}{x}\right) = 0
> $$
> *(nel riquadro finale il prof scrive $\sin\left(\frac{1}{x}\right)$ al posto di $\sin\left(\frac{2}{x}\right)$, il limite è $0$)*
> 3.b) $$\lim_{x \to 0^+} \left(\frac{1}{x}\right)^{\sin x} = \left[(+\infty)^0\right]_{\text{F.I.}}$$
> $$
> \left(\frac{1}{x}\right)^{\sin x} = e^{\log\left(\frac{1}{x}\right)^{\sin x}} = e^{\sin x \log\frac{1}{x}} = e^{\frac{\sin x}{x} \cdot x(\log 1 - \log x)}
> $$
> $$
> = e^{-\frac{\sin x}{x} \cdot x\log x} \xrightarrow{x \to 0^+} e^0 = 1
> $$
> *(annotazioni: $\frac{\sin x}{x} \to 1$, $x\log x \to 0$)*
> $(*)$ $\lim_{x \to 0^+} x\log x = 0$, infatti con $t = \frac{1}{x}$:
> $$
> \lim_{t \to +\infty} \frac{1}{t}\log\frac{1}{t} = \lim_{t \to +\infty} -\frac{\log t}{t} = 0
> $$
> $$
> \lim_{x \to 0^+} \left(\frac{1}{x}\right)^{\sin x} = 1
> $$
> 3.c) $$\lim_{x \to +\infty} \cos(x^2)$$
> Mostriamo che il limite non esiste estraendo due sottosuccessioni che convergano a valori diversi:
> $$
> a_k = \left\{\sqrt{\pi + 2k\pi}\right\}_{k \in \mathbb{N}}, \quad b_k = \left\{\sqrt{0 + 2k\pi}\right\}_{k \in \mathbb{N}}
> $$
> OSSERVIAMO che $\lim_{k \to +\infty} a_k = +\infty$ e $\lim_{k \to +\infty} b_k = +\infty$.
> $$
> \lim_{k \to +\infty} \cos\left(a_k^2\right) = \lim_{k \to +\infty} \cos\left[\left(\sqrt{\pi + 2k\pi}\right)^2\right] = \lim_{k \to +\infty} \cos(\pi + 2k\pi) = -1
> $$
> $$
> \lim_{k \to +\infty} \cos\left(b_k^2\right) = \lim_{k \to +\infty} \cos\left[\left(\sqrt{0 + 2k\pi}\right)^2\right] = \lim_{k \to +\infty} \cos(0 + 2k\pi) = 1
> $$
> PER TEOREMA di ESISTENZA e UNICITÀ del LIMITE abbiamo che
> $$
> \nexists \lim_{x \to +\infty} \cos(x^2)
> $$
> GRAFICAMENTE: *(grafico di $y = \cos(x^2)$ con i punti $\cos(a_k^2)$ sul valore $-1$ e $\cos(b_k^2)$ sul valore $1$)*

## Esercizi dei fogli e delle esercitazioni

### Esercitazione 5, altri limiti 2.1
Calcolare
$$
\lim_{x \to 0}\frac{\log\left(\cos\left(e^x - 1\right)\right)}{x^2}
$$
> [!example]- Soluzione
> $\left[\frac00\right]$, con $\square = \cos(e^x - 1) - 1$, $\heartsuit = e^x - 1$, $\star = x$.
> $$
> \frac{\log\left(1 + \left(\cos(e^x - 1) - 1\right)\right)}{\cos(e^x - 1) - 1} \cdot \frac{\cos(e^x - 1) - 1}{\left(e^x - 1\right)^2} \cdot \left(\frac{e^x - 1}{x}\right)^2 \cdot \frac{x^2}{x^2} \xrightarrow{x \to 0} 1 \cdot \left(-\frac12\right) \cdot 1 = -\frac12
> $$
> con $\lim_{\square \to 0}\frac{\log(1 + \square)}{\square} = 1$, $\lim_{\heartsuit \to 0}\frac{1 - \cos\heartsuit}{\heartsuit^2} = \frac12$, $\lim_{\star \to 0}\frac{e^\star - 1}{\star} = 1$.

### Esercitazione 5, altri limiti 2.2
Calcolare
$$
\lim_{x \to 0}\frac{\left(e^{\sin x} - 1\right)\tan x}{1 - \cos x}
$$
> [!example]- Soluzione
> $\left[\frac00\right]$.
> $$
> \frac{\frac{e^{\sin x} - 1}{\sin x} \cdot \frac{\sin x}{x} \cdot x \cdot \frac{\tan x}{x} \cdot x}{\frac{1 - \cos x}{x^2} \cdot x^2} \xrightarrow{x \to 0} \frac{1 \cdot 1 \cdot 1}{\frac12} = 2
> $$
> $$
> \lim_{x \to 0}\frac{\left(e^{\sin x} - 1\right)\tan x}{1 - \cos x} = 2
> $$

### Tutoraggio 4, esercizio 3 (3)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to 1^+}\frac{2^{x - 1}}{x - 1}
$$
> [!example]- Soluzione
> $2^{x - 1} \to 2^0 = 1$ e per $x > 1$ il denominatore tende a $0^+$.
> $$
> \lim_{x \to 1^+}\frac{2^{x - 1}}{x - 1} = \left[\frac{1}{0^+}\right] = +\infty
> $$
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 4, esercizio 3 (10)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to 0^+}\sin x\,\log\left(\frac1x\right)
$$
> [!example]- Soluzione
> $$
> \sin x\,\log\frac1x = \frac{\sin x}{x} \cdot x\log\frac1x = -\frac{\sin x}{x} \cdot x\log x \longrightarrow -1 \cdot 0 = 0
> $$
> perché $\lim_{x \to 0^+} x\log x = 0$ (slide 49).
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 4, esercizio 3 (11)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to +\infty}\left(1 + \frac{x - 5}{25 - x^2}\right)^x
$$
> [!example]- Soluzione
> $\left[1^{+\infty}\right]$. Per $x \neq 5$, $\frac{x - 5}{25 - x^2} = -\frac{1}{x + 5}$. Con $t = -(x + 5) \to -\infty$, $x = -t - 5$:
> $$
> \left(1 - \frac{1}{x + 5}\right)^x = \left(1 + \frac1t\right)^{-t - 5} = \left[\left(1 + \frac1t\right)^t\right]^{-1} \cdot \left(1 + \frac1t\right)^{-5} \longrightarrow e^{-1} \cdot 1 = \frac1e
> $$
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 4, esercizio 3 (15)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to 1}\frac{\sin(\pi x)}{x - 1}
$$
> [!example]- Soluzione
> $t = x - 1 \to 0$, $\pi x = \pi t + \pi$, $\sin(\pi t + \pi) = -\sin(\pi t)$:
> $$
> \lim_{t \to 0}\frac{-\sin(\pi t)}{t} = -\pi\lim_{t \to 0}\frac{\sin(\pi t)}{\pi t} = -\pi
> $$
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 1 (5)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to 0}\left(1 + \arctan(2x)\right)^{\frac{3 + \sin x}{x}}
$$
> [!example]- Soluzione
> $\left[1^\infty\right]$, in base $e$. Con $u = \arctan(2x) \to 0$:
> $$
> \frac{3 + \sin x}{x}\log(1 + u) = (3 + \sin x) \cdot \frac{\log(1 + u)}{u} \cdot \frac{\arctan(2x)}{2x} \cdot 2 \longrightarrow 3 \cdot 1 \cdot 1 \cdot 2 = 6
> $$
> $$
> \lim_{x \to 0}\left(1 + \arctan(2x)\right)^{\frac{3 + \sin x}{x}} = e^6
> $$
> Con $\frac{\arctan y}{y} \to 1$ per $y \to 0$.
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 1 (6)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to 0}\left(1 + \vert x\vert\right)^{\frac1x}
$$
> [!example]- Soluzione
> $$
> x \to 0^+: \ (1 + x)^{\frac1x} \to e \qquad x \to 0^-: \ \left(1 + (-x)\right)^{\frac1x} = \left[\left(1 + (-x)\right)^{\frac{1}{-x}}\right]^{-1} \to e^{-1}
> $$
> Limiti laterali diversi: il limite non esiste.
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 1 (7)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to 0}\left(\frac{1}{\cos x}\right)^{\frac{1}{x^2}}
$$
> [!example]- Soluzione
> $\left[1^\infty\right]$. Esponente, con $u = \cos x - 1 \to 0$:
> $$
> -\frac{\log\cos x}{x^2} = -\frac{\log(1 + u)}{u} \cdot \frac{\cos x - 1}{x^2} \longrightarrow -1 \cdot \left(-\frac12\right) = \frac12
> $$
> $$
> \lim_{x \to 0}\left(\frac{1}{\cos x}\right)^{\frac{1}{x^2}} = e^{\frac12} = \sqrt e
> $$
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 1 (15)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to +\infty}\vert\sin x\vert^x
$$
> [!example]- Soluzione
> $x_n = \frac\pi2 + 2n\pi \to +\infty$: $\vert\sin x_n\vert^{x_n} = 1^{x_n} = 1$. $y_n = n\pi \to +\infty$: $\vert\sin y_n\vert^{y_n} = 0^{y_n} = 0$.
> Limiti diversi: il limite non esiste.
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 1 (21)
Calcolare, se esiste (altrimenti dimostrare che non esiste)
$$
\lim_{x \to +\infty}\frac{\lfloor x\rfloor}{x}
$$
> [!example]- Soluzione
> $x - 1 < \lfloor x\rfloor \leq x$, divido per $x > 0$:
> $$
> 1 - \frac1x < \frac{\lfloor x\rfloor}{x} \leq 1
> $$
> Per i carabinieri il limite è $1$.
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 2 (xiv)
Calcolare, se esiste
$$
\lim_{x \to 0}\frac{\sin x - \tan x}{x^3}
$$
Risultato del foglio: $-\frac12$.
> [!example]- Soluzione
> $$
> \frac{\sin x - \tan x}{x^3} = \frac{\tan x\left(\cos x - 1\right)}{x^3} = -\frac{\tan x}{x} \cdot \frac{1 - \cos x}{x^2} \longrightarrow -1 \cdot \frac12 = -\frac12
> $$
> *(il foglio dà solo il risultato, conto verificato con sympy)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 3 (x)
Calcolare, se esiste
$$
\lim_{x \to +\infty}\sin(2x)\log x
$$
Risultato del foglio: $\nexists$.
> [!example]- Soluzione
> $x_n = \frac\pi4 + n\pi \to +\infty$: $\sin(2x_n) = \sin\left(\frac\pi2 + 2n\pi\right) = 1$, quindi $f(x_n) = \log x_n \to +\infty$. $y_n = n\pi \to +\infty$: $\sin(2y_n) = 0$, quindi $f(y_n) = 0 \to 0$.
> Limiti diversi: il limite non esiste.
> *(il foglio dà solo il risultato)*

### Esercitazione 6, 1a · limiti di funzione senza parametro

$\lim_{x\to\pi}\frac{\sin x}{x-\pi}$

> [!example]- Soluzione
> $$
> \lim_{x\to\pi}\frac{\sin x}{x-\pi}\ \left[\tfrac00\right]=\lim_{t\to0}\frac{\sin(t+\pi)}{t}=\lim_{t\to0}\underbrace{\frac{-\sin t}{t}}_{\to1}=-1
> $$
> con $t=x-\pi\to0$ per $x\to\pi$, $x=t+\pi$.

### Esercitazione 6, 1b · limiti di funzione senza parametro

$\lim_{x\to0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}$

> [!example]- Soluzione
> $$
> \frac{\sqrt{1+x}-\sqrt{1-x}}{x}\ \left[\tfrac00\right]=\frac{\sqrt{1+x}-\sqrt{1-x}}{x}\cdot\frac{\sqrt{1+x}+\sqrt{1-x}}{\sqrt{1+x}+\sqrt{1-x}}=\frac{1+x-1+x}{x(\sqrt{1+x}+\sqrt{1-x})}=\frac{2x}{x(\sqrt{1+x}+\sqrt{1-x})}\ \xrightarrow{x\to0}\ \frac22=1
> $$

### Esercitazione 6, 1c · limiti di funzione senza parametro

$\lim_{x\to0}\frac{\sin x^4}{\sin^2x^2}$

> [!example]- Soluzione
> $$
> \left[\tfrac00\right]\quad\underbrace{\frac{\sin x^4}{x^4}}_{\to1}\cdot x^4\cdot\underbrace{\left(\frac{x^2}{\sin x^2}\right)^2}_{\to1}\cdot\frac1{x^4}\ \xrightarrow{x\to0}\ 1
> $$

### Esercitazione 6, 1d · limiti di funzione senza parametro

$\lim_{x\to0}\frac{\arccos x-\frac\pi2}{x}$

> [!example]- Soluzione
> $$
> \left[\tfrac00\right]=\lim_{t\to\frac\pi2}\frac{t-\frac\pi2}{\cos t}\overset{z=t-\frac\pi2}{=}\lim_{z\to0}\frac{z}{\cos(z+\pi/2)}=\lim_{z\to0}\frac{z}{-\sin z}=-1
> $$
> con $t=\arccos x\to\frac\pi2$ per $x\to0$, $x=\cos t$.

### Esercitazione 6, 1e · limiti di funzione senza parametro

$\lim_{x\to+\infty}\frac{e^x\sin(e^{-x}\sin x)}{x}$

> [!example]- Soluzione
> Forma $+\infty\cdot0$ (con $e^{-x}\sin x\to0$).
> $$
> e^x\underbrace{\frac{\sin(e^{-x}\sin x)}{e^{-x}\sin x}}_{\to1}\cdot e^{-x}\underbrace{\frac{\sin x}{x}}_{\frac{\text{limitata}}{\infty}\to0}\ \xrightarrow{x\to+\infty}\ 0
> $$

### Esercitazione 6, 1f · limiti di funzione senza parametro (segnato «esercizio non svolto a lezione»)

$\lim_{x\to+\infty}\cos(2x)\log x$

> [!example]- Soluzione
> $x_k=\left\{\frac\pi2+k\pi\right\}_{k\in\mathbb N}\xrightarrow{k\to+\infty}+\infty$ e $\lim_{k\to+\infty}\cos(2x_k)\log(x_k)=\lim_{k\to+\infty}\cos(\pi+2k\pi)\log\left(\frac\pi2+k\pi\right)=-\infty$.
>
> $\tilde x_k=\{k\pi\}_{k\in\mathbb N}\xrightarrow{k\to+\infty}+\infty$ e $\lim_{k\to+\infty}\cos(2\tilde x_k)\log(\tilde x_k)=\lim_{k\to+\infty}\cos(2k\pi)\log(2k\pi)=+\infty$. *(il foglio scrive $\log(2k\pi)$, corretto: $\log(k\pi)$; il limite non cambia)*
>
> $\Rightarrow$ NON ESISTE $\lim_{x\to+\infty}\cos(2x)\log x$.

### Esercitazione 6, 1g · limiti di funzione senza parametro (segnato «esercizio non completato a lezione»)

$\lim_{x\to+\infty}(x+\sqrt x)\sin\left(\frac5x\right)$

> [!example]- Soluzione
> Forma $+\infty\cdot0$ (con $\frac5x\to0$).
> $$
> (x+\sqrt x)\frac{\sin\left(\frac5x\right)}{\frac5x}\cdot\frac5x=\underbrace{\left(1+\frac1{\sqrt x}\right)}_{\to1}\cdot\underbrace{\frac{\sin\left(\frac5x\right)}{\frac5x}}_{\to1}\cdot5\ \xrightarrow{x\to+\infty}\ 5
> $$

### Esercitazione 6, 1h · limiti di funzione senza parametro

$\lim_{x\to a}\frac{\sin x-\sin a}{x-a}$

> [!example]- Soluzione
> $$
> \left[\tfrac00\right]=\lim_{t\to0}\frac{\sin(t+a)-\sin a}{t}=\lim_{t\to0}\frac{\sin t\cos a+\sin a\cos t-\sin a}{t}=\lim_{t\to0}\underbrace{\frac{\sin t}{t}}_{\to1}\cos a+\sin a\underbrace{\frac{\cos t-1}{t^2}}_{\to-\frac12}\underbrace{t}_{\to0}=\cos a
> $$
> con $t=x-a\to0$ per $x\to a$, $x=t+a$.

### Esercitazione 6, 1i · limiti di funzione senza parametro

$\lim_{x\to0}\frac{1-\cos^4x}{\sin x^2}$

> [!example]- Soluzione
> $$
> \left[\tfrac00\right]\quad\frac{1-\cos^4x}{\sin x^2}=\frac{(1-\cos^2x)(1+\cos^2x)}{\sin x^2}=\frac{\sin^2x\,(1+\cos^2x)}{\sin x^2}=\frac{\left(\underbrace{\frac{\sin x}{x}}_{\to1}\right)^2x^2\underbrace{(1+\cos^2x)}_{\to2}}{\underbrace{\frac{\sin(x^2)}{x^2}}_{\to1}x^2}\ \xrightarrow{x\to0}\ 2
> $$

### Esercitazione 6, 1l · limiti di funzione senza parametro (segnato «esercizio non svolto a lezione»)

$\lim_{x\to0}\frac{1-\cos x^4}{\sin x^2}$

> [!example]- Soluzione
> $$
> \frac{1-\cos x^4}{\sin x^2}=\underbrace{\frac{1-\cos x^4}{x^8}}_{\to\frac12}\cdot\underbrace{x^8\cdot\frac1{x^2}}_{x^6\to0}\cdot\underbrace{\frac{x^2}{\sin x^2}}_{\to1}\ \xrightarrow{x\to0}\ 0
> $$

### Esercitazione 6, 1m · limiti di funzione senza parametro (segnato «esercizio non svolto a lezione»)

$\lim_{x\to0}\frac{e^x-e^{-x}}{\tan x}$

> [!example]- Soluzione
> $$
> \frac{e^x-e^{-x}}{\tan x}=\frac{e^x-\frac1{e^x}}{\tan x}=\frac{e^{2x}-1}{e^x\tan x}=\underbrace{\frac{e^{2x}-1}{2x}}_{\to1}\cdot2x\cdot\frac1{\underbrace{\frac{\tan x}{x}}_{\to1}\,x}\cdot\underbrace{\frac1{e^x}}_{\to1}\ \xrightarrow{x\to0}\ 2
> $$

### Esercitazione 6, 2a · limiti di funzione con parametro

$\lim_{x\to0^+}\frac{\log(1+x^\alpha)}{3x^5}$

> [!example]- Soluzione
> - $\alpha<0$: $\frac{\log(1+x^\alpha)}{3x^5}$ con $\log(1+x^\alpha)\to+\infty$ e $3x^5\to0^+$: il limite è $+\infty$.
> - $\alpha=0$: $\frac{\log(1+1)}{3x^5}$: il limite è $+\infty$.
> - $\alpha>0$: $\left[\tfrac00\right]=\underbrace{\frac{\log(1+x^\alpha)}{x^\alpha}}_{\to1}\cdot\frac{x^\alpha}{3x^5}$, da cui $\alpha>5$: $0$; $\alpha=5$: $\frac13$; $\alpha<5$: $+\infty$.

### Esercitazione 6, 2b · limiti di funzione con parametro (successione)

$\lim_{n\to+\infty}\frac{\sin\left(\frac1{n^3}\right)}{\sqrt[3]{1+\frac1{n^\alpha}}-1}$

> [!example]- Soluzione
> - $\alpha<0$: $\frac1{n^\alpha}\to+\infty$, il denominatore $\to+\infty$ e il numeratore $\to0^+$: il limite è $0$.
> - $\alpha=0$: $\frac{\sin\left(\frac1{n^3}\right)}{\sqrt[3]{1+1}-1}\to0$.
> - $\alpha>0$: $\left[\tfrac00\right]=\frac{\frac{\sin\left(\frac1{n^3}\right)}{\frac1{n^3}}\cdot\frac1{n^3}}{\frac{\left(1+\frac1{n^\alpha}\right)^{1/3}-1}{\frac1{n^\alpha}}\cdot\frac1{n^\alpha}}=\frac{\overbrace{\frac{\sin\left(\frac1{n^3}\right)}{\frac1{n^3}}}^{\to1}}{\underbrace{\frac{\left(1+\frac1{n^\alpha}\right)^{1/3}-1}{\frac1{n^\alpha}}}_{\to\frac13}}\cdot\frac{n^\alpha}{n^3}$, da cui $\alpha>3$: $+\infty$; $\alpha=3$: $3$; $\alpha<3$: $0$.

### Esercitazione 6, 2c · limiti di funzione con parametro (segnato «esercizio non svolto a lezione»)

$\lim_{x\to0^+}\frac{\sqrt{\sin(x^\alpha)}}{1-\cos\sqrt x}$, $\alpha>0$. Oss. $x^\alpha$ è infinitesimo per $\alpha>0$.

> [!example]- Soluzione
> $$
> \frac{\sqrt{\sin(x^\alpha)}}{1-\cos\sqrt x}=\frac{\sqrt{\frac{\sin(x^\alpha)}{x^\alpha}}\cdot x^{\frac\alpha2}}{\frac{1-\cos\sqrt x}{x}\cdot x}=\frac{\overbrace{\sqrt{\frac{\sin(x^\alpha)}{x^\alpha}}}^{\to1}}{\underbrace{\frac{1-\cos\sqrt x}{x}}_{\to\frac12}}\cdot x^{\frac\alpha2-1}
> $$
> - $\frac\alpha2-1<0\to\alpha<2$: $+\infty$
> - $\frac\alpha2-1=0\to\alpha=2$: $2$
> - $\frac\alpha2-1>0\to\alpha>2$: $0$

### Tutoraggio 5 complementi, esercizio 1.19 · limite con parametro (non richiede Lagrange)

Calcolare, eventualmente al variare del parametro reale positivo $\alpha$, il limite, se esiste; altrimenti dimostrare che non esiste.

$$
\lim_{x\to0^+}\frac{x^\alpha}{e^x-\sin\frac1x}
$$

> [!example]- Soluzione
> Per $x>0$: $e^x>1\geqslant\sin\frac1x$, quindi il denominatore sta fra $e^x-1>0$ ed $e^x+1$.
> - $\alpha>1$: $0<\frac{x^\alpha}{e^x-\sin\frac1x}\leqslant\frac{x^\alpha}{e^x-1}=x^{\alpha-1}\cdot\frac{x}{e^x-1}\to0\cdot1=0$. Carabinieri: il limite è $0$.
> - $0<\alpha\leqslant1$: con $x_n=\frac1{\pi/2+2n\pi}\to0^+$, $\sin\frac1{x_n}=1$ e $f(x_n)=x_n^{\alpha-1}\cdot\frac{x_n}{e^{x_n}-1}\to1$ se $\alpha=1$, $\to+\infty$ se $\alpha<1$; con $y_n=\frac1{n\pi}$, $\sin\frac1{y_n}=0$ e $f(y_n)=\frac{y_n^\alpha}{e^{y_n}}\to0$. Non esiste.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

## Crocette dei fogli e delle esercitazioni

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 7, domanda 1
Il limite $\displaystyle\lim_{x \to 0^+}\frac{x + 2\sqrt x + 4\sqrt[4]{x}}{x + 2x^2 + 4x^4}$:
- a) vale $0$
- b) vale $1$
- c) vale $\frac14$
- d) vale $+\infty$

> [!example]- Soluzione
> **d**. $\dfrac{x^{\frac14}\left(4 + 2x^{\frac14} + x^{\frac34}\right)}{x\left(1 + 2x + 4x^3\right)} = x^{-\frac34} \cdot \dfrac{4 + 2x^{\frac14} + x^{\frac34}}{1 + 2x + 4x^3} \to +\infty \cdot 4 = +\infty$.
> *(il foglio dà solo la lettera: D)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 7, domanda 3
Il limite $\displaystyle\lim_{x \to 0^+}\frac{x + 2\sqrt x + 4\sqrt[4]{x}}{x + 2x^2 + 4\sqrt[4]{x}}$:
- a) vale $0$
- b) vale $1$
- c) vale $\frac14$
- d) vale $+\infty$

> [!example]- Soluzione
> **b**. $\dfrac{x^{\frac14}\left(4 + 2x^{\frac14} + x^{\frac34}\right)}{x^{\frac14}\left(4 + x^{\frac34} + 2x^{\frac74}\right)} \to \dfrac44 = 1$.
> *(il foglio dà solo la lettera: B)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 7, domanda 5
Il limite $\displaystyle\lim_{x \to +\infty}\frac{\vert x\vert - 1}{\vert x - 1\vert}$:
- a) vale $0$
- b) vale $1$
- c) non esiste
- d) vale $+\infty$

> [!example]- Soluzione
> **b**. Per $x > 1$: $\dfrac{\vert x\vert - 1}{\vert x - 1\vert} = \dfrac{x - 1}{x - 1} = 1$.
> *(il foglio dà solo la lettera: B)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 7, domanda 6
Il limite $\displaystyle\lim_{x \to 1}\frac{\vert x\vert - 1}{\vert x - 1\vert}$:
- a) vale $0$
- b) vale $1$
- c) non esiste
- d) vale $+\infty$

> [!example]- Soluzione
> **c**. $x \to 1^-$: $\dfrac{x - 1}{1 - x} = -1$. $x \to 1^+$: $\dfrac{x - 1}{x - 1} = 1$. Limiti laterali diversi.
> *(il foglio dà solo la lettera: C)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 8, domanda 1
Il limite $\displaystyle\lim_{x \to 0}\frac{x^5 + 3\sin^3 x}{5\sin^5 x + x^3}$:
- a) vale $1$
- b) vale $\frac35$
- c) vale $3$
- d) vale $0$

> [!example]- Soluzione
> **c**. $\dfrac{x^3\left(x^2 + 3\left(\frac{\sin x}{x}\right)^3\right)}{x^3\left(5x^2\left(\frac{\sin x}{x}\right)^5 + 1\right)} \to \dfrac{0 + 3}{0 + 1} = 3$.
> *(il foglio dà solo la lettera: C)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 8, domanda 2
Il limite $\displaystyle\lim_{x \to 0^+}\frac{\log\left(1 + x^2\right)}{\log\left(1 + 2^{-\frac1x}\right)}$:
- a) vale $0$
- b) vale $1$
- c) vale $\log 2$
- d) vale $+\infty$

> [!example]- Soluzione
> **d**. $\dfrac{\frac{\log(1 + x^2)}{x^2} \cdot x^2}{\frac{\log\left(1 + 2^{-1/x}\right)}{2^{-1/x}} \cdot 2^{-1/x}} \sim \dfrac{x^2}{2^{-1/x}} = \dfrac{2^t}{t^2}$ con $t = \frac1x \to +\infty$, e $\frac{2^t}{t^2} \to +\infty$ (gerarchia).
> *(il foglio dà solo la lettera: D)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 8, domanda 3
Il limite $\displaystyle\lim_{x \to 1}\frac{1 - \cos(2\pi x)}{1 - x^2}$:
- a) vale $0$
- b) vale $\frac12$
- c) vale $3$
- d) vale $+\infty$

> [!example]- Soluzione
> **a**. $t = x - 1 \to 0$: $\dfrac{1 - \cos(2\pi t)}{(2\pi t)^2} \cdot \dfrac{(2\pi t)^2}{-t(t + 2)} \to \dfrac12 \cdot \dfrac{4\pi^2 t}{-(t + 2)} \to 0$.
> *(il foglio dà solo la lettera: A)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 8, domanda 4
Il limite $\displaystyle\lim_{x \to \pi}\frac{1 + \cos x}{(x - \pi)^2}$:
- a) vale $0$
- b) vale $\frac12$
- c) vale $-\frac12$
- d) vale $+\infty$

> [!example]- Soluzione
> **b**. $t = x - \pi \to 0$: $1 + \cos(t + \pi) = 1 - \cos t$, quindi $\dfrac{1 - \cos t}{t^2} \to \dfrac12$.
> *(il foglio dà solo la lettera: B)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 8, domanda 5
Il limite $\displaystyle\lim_{x \to \frac\pi2}\frac{1 - \sin x}{(2x - \pi)^2}$:
- a) vale $0$
- b) vale $\frac12$
- c) vale $\frac14$
- d) vale $\frac18$

> [!example]- Soluzione
> **d**. $t = x - \frac\pi2 \to 0$: $1 - \sin\left(t + \frac\pi2\right) = 1 - \cos t$ e $(2x - \pi)^2 = 4t^2$, quindi $\dfrac{1 - \cos t}{4t^2} \to \dfrac18$.
> *(il foglio dà solo la lettera: D)*

### Foglio 2022 (n. 4 del 12/10/2022), esercizio 8, domanda 6
Il limite $\displaystyle\lim_{x \to 0^+} x^{x^x}$:
- a) vale $0$
- b) vale $1$
- c) non esiste
- d) vale $+\infty$

> [!example]- Soluzione
> **a**. $x^{x^x} = e^{x^x\log x}$ con $x^x \to 1$ (slide 50) e $\log x \to -\infty$, quindi l'esponente tende a $-\infty$ e il limite è $e^{-\infty} = 0$.
> *(il foglio dà solo la lettera: A)*

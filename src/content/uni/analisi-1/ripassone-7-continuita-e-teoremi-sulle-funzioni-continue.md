---
title: Ripassone 7 · Continuità e teoremi sulle funzioni continue
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

> [!abstract] Definizione (continuità) · slide 10
> Sia $f : D \to \mathbb{R}$ e sia $x_0 \in D$. Diciamo che $f$ è continua in $x_0$ se
> $$
> \forall \varepsilon > 0 \ \ \exists \delta > 0 \ \text{ t.c. } \ \forall x \in (x_0 - \delta, x_0 + \delta) \cap D \quad \vert f(x) - f(x_0)\vert < \varepsilon.
> $$
> Se $x_0 \in D$ è un punto di accumulazione per $D$, allora $f$ è continua in $x_0 \iff \displaystyle\lim_{x \to x_0} f(x) = f(x_0)$.

> [!abstract] Definizione (limite destro e sinistro) · slide 11
> Siano $D \subseteq \mathbb{R}$, $f : D \to \mathbb{R}$, $x_0$ punto di accumulazione per $D$.
> $$
> \lim_{x \to x_0^+} f(x) = \ell \iff \forall \varepsilon > 0 \ \exists \delta > 0 \ \text{ t.c. } \ \forall x \in (x_0, x_0 + \delta) \cap D \quad \vert f(x) - \ell\vert < \varepsilon
> $$
> $$
> \lim_{x \to x_0^-} f(x) = \ell \iff \forall \varepsilon > 0 \ \exists \delta > 0 \ \text{ t.c. } \ \forall x \in (x_0 - \delta, x_0) \cap D \quad \vert f(x) - \ell\vert < \varepsilon
> $$

> [!abstract] Osservazione (limite destro e sinistro) · slide 12
> $$
> \exists \lim_{x \to x_0} f(x) = \ell \in \mathbb{R} \iff \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = \ell
> $$

> [!abstract] Definizione (continuità da destra o da sinistra) · slide 13
> Siano $D \subseteq \mathbb{R}$, $f : D \to \mathbb{R}$, $x_0 \in D$.
> - $f$ è continua da destra in $x_0$ se $\displaystyle\lim_{x \to x_0^+} f(x) = f(x_0)$
> - $f$ è continua da sinistra in $x_0$ se $\displaystyle\lim_{x \to x_0^-} f(x) = f(x_0)$
>
> Osservazione: $f$ è continua in $x_0 \iff$ $f$ è continua sia da destra che da sinistra in $x_0$.

> [!abstract] Teorema (limite di funzioni monotone) · slide 33
> Sia $f : (a, b) \to \mathbb{R}$ una funzione monotona. Allora per ogni $x_0 \in (a, b)$ esistono finiti i limiti da destra e da sinistra $\displaystyle\lim_{x \to x_0^-} f(x)$, $\displaystyle\lim_{x \to x_0^+} f(x)$. Inoltre esistono (eventualmente infiniti) i limiti agli estremi dell'intervallo $\displaystyle\lim_{x \to b^-} f(x)$, $\displaystyle\lim_{x \to a^+} f(x)$.
>
> Osservazione: se $f$ è monotona crescente in $(a, b)$, allora
> $$
> \lim_{x \to x_0^-} f(x) = \sup_{x \in (a, x_0)} f(x), \qquad \lim_{x \to x_0^+} f(x) = \inf_{x \in (x_0, b)} f(x).
> $$

> [!abstract] Continuità · slide 62
> Sia $f : D \to \mathbb{R}$, $x_0 \in D$. Ricordiamo che $f$ è continua in $x_0$ se
> $$
> \forall \varepsilon > 0 \ \ \exists \delta > 0 \ \text{ t.c. } \ \forall x \in (x_0 - \delta, x_0 + \delta) \cap D \quad \vert f(x) - f(x_0)\vert < \varepsilon,
> $$
> o equivalentemente (se $x_0$ è un punto di accumulazione per $D$) se $\displaystyle\lim_{x \to x_0} f(x) = f(x_0)$.
>
> Osservazioni:
> 1. La definizione di limite $\displaystyle\lim_{x \to x_0} f(x)$ non richiede nulla sul comportamento della funzione nel punto $x_0$, ma solo in punti vicini (il valore di $f$ in $x_0$ non gioca alcun ruolo, anzi potrebbe essere $x_0 \notin D$). Al contrario, la nozione di continuità esprime un legame tra il comportamento di $f$ vicino al punto $x_0$ ed il suo valore nel punto $x_0$.
> 2. Se $f$ è continua in $x_0$, allora per ogni successione di punti $x_n \in D$, $x_n \to x_0 \implies f(x_n) \to f(x_0)$.

> [!abstract] Definizione (continuità in un insieme) · slide 63
> Ricordiamo anche le nozioni di continuità da destra e da sinistra: $f$ è continua da destra in $x_0$ se $\displaystyle\lim_{x \to x_0^+} f(x) = f(x_0)$, $f$ è continua da sinistra in $x_0$ se $\displaystyle\lim_{x \to x_0^-} f(x) = f(x_0)$.
>
> Sia $f : D \to \mathbb{R}$, e sia $A \subseteq D$. Diciamo che $f$ è continua in $A$ se $f$ è continua in $x_0$, per ogni $x_0 \in A$. In questo caso scriviamo $f \in C^0(A)$.

> [!abstract] Esempio (funzione a gradino di Heaviside) · slide 63
> Come è fatta una funzione discontinua? Ad esempio, la funzione a gradino di Heaviside
> $$
> H(x) = \begin{cases} 1 & \text{se } x \geq 0, \\ 0 & \text{se } x < 0. \end{cases}
> $$

> [!abstract] Definizione (tipi di discontinuità) · slide 64
> Diciamo che $f$ ha una discontinuità **eliminabile** in $x_0$ se esiste finito il limite di $f$ in $x_0$, ma $\displaystyle\lim_{x \to x_0} f(x) \neq f(x_0)$.
>
> Diciamo che $f$ ha una discontinuità **a salto** in $x_0$ se esistono finiti i limiti da destra e da sinistra in $x_0$, ma $\displaystyle\lim_{x \to x_0^+} f(x) \neq \lim_{x \to x_0^-} f(x)$.
>
> Diciamo che $f$ ha una discontinuità **essenziale** in $x_0$ se non vale nessuno dei casi precedenti.

> [!abstract] Osservazione (funzioni monotone e discontinuità) · slide 65
> Sia $f : (a, b) \to \mathbb{R}$ una funzione monotona. Allora, dal teorema sul limite delle funzioni monotone sappiamo che in ogni punto $x_0 \in (a, b)$ esistono finiti i limiti da destra e da sinistra; ne segue che una funzione monotona in un intervallo può avere solo discontinuità a salto.

> [!abstract] Teorema (continuità delle funzioni elementari) · slide 67
> Tutte le funzioni elementari (funzione elevamento a potenza, funzioni trigonometriche, funzioni esponenziali, e loro funzioni inverse) sono continue in tutto il loro dominio.

> [!abstract] Algebra delle funzioni continue · slide 67
> Se $f$ e $g$ sono continue in un punto $x_0$, allora sono continue anche le funzioni
> $$
> f(x) \pm g(x), \qquad f(x) \cdot g(x), \qquad \frac{f(x)}{g(x)} \ \ (\text{se } g(x_0) \neq 0).
> $$
> Segue in particolare la continuità dei polinomi e delle funzioni razionali:
> $$
> f(x) = \frac{a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0}{b_m x^m + b_{m-1} x^{m-1} + \dots + b_1 x + b_0}
> $$

> [!abstract] Teorema (continuità della composizione) · slide 68
> Sia $f$ una funzione continua in $x_0$. Sia poi $g$ una funzione definita in un intorno di $y_0 = f(x_0)$ e continua in $y_0$. Allora la funzione composta $g \circ f$ è continua in $x_0$.
>
> I teoremi precedenti permettono di ottenere la continuità di un gran numero di funzioni: tutte quelle ottenute come somme, prodotti, quozienti e composizioni di funzioni elementari. Ad esempio sono continue (nel loro dominio) le funzioni $e^{-x^2}$, $\sin\left(\sqrt{\dfrac{x}{x^2 - 2}}\right)$, $\log\left(1 + (\tan x)^2\right)$, $\dots$

> [!abstract] Teorema degli zeri · slide 71
> Il prossimo teorema garantisce l'esistenza di zeri di una funzione, cioè punti in cui una funzione si annulla (intersezioni del grafico della funzione con l'asse $x$).
>
> Sia $f : [a, b] \to \mathbb{R}$ una funzione continua in $[a, b]$ e tale che $f(a)f(b) < 0$. Allora esiste un punto $x_0 \in (a, b)$ tale che $f(x_0) = 0$.
>
> L'ipotesi $f(a)f(b) < 0$ significa che i valori di $f$ agli estremi dell'intervallo hanno segno opposto.

> [!abstract] Osservazione (intersezione di due grafici) · slide 74
> Se $f, g : [a, b] \to \mathbb{R}$ sono funzioni continue, e tali che $f(a) > g(a)$, $f(b) < g(b)$, allora esiste un punto $x_0 \in (a, b)$ tale che $f(x_0) = g(x_0)$. Infatti, basta applicare il teorema degli zeri alla funzione $f(x) - g(x)$.

> [!abstract] Teorema dei valori intermedi · slide 75
> Sia $f : [a, b] \to \mathbb{R}$ una funzione continua. Allora $f$ assume tutti i valori compresi tra $\displaystyle\inf_{x \in [a, b]} f(x)$ e $\displaystyle\sup_{x \in [a, b]} f(x)$, ovvero
> $$
> \forall z \in \left(\inf_{x \in [a, b]} f(x), \sup_{x \in [a, b]} f(x)\right) \quad \exists x \in [a, b] \text{ tale che } f(x) = z.
> $$

> [!abstract] Definizione (massimo/minimo assoluto) · slide 76
> Sia $f : D \to \mathbb{R}$.
> - Un valore $M \in \mathbb{R}$ si dice **massimo (assoluto)** di $f$ in $D$ se $f(x) \leq M$ per ogni $x \in D$; $\exists x_0 \in D$ tale che $f(x_0) = M$. In questo caso, il punto $x_0$ si dice **punto di massimo**.
> - Un valore $m \in \mathbb{R}$ si dice **minimo (assoluto)** di $f$ in $D$ se $f(x) \geq m$ per ogni $x \in D$; $\exists x_0 \in D$ tale che $f(x_0) = m$. In questo caso, il punto $x_0$ si dice **punto di minimo**.

> [!abstract] Osservazioni (massimo e minimo) · slide 77
> Scriveremo $M = \max_D f$, $m = \min_D f$.
> - Mentre l'estremo superiore e l'estremo inferiore di una funzione esistono sempre, massimo e minimo possono non esistere.
> - Il massimo, se esiste, è unico; lo stesso vale per il minimo. Ci possono tuttavia essere più punti di massimo (o di minimo).

> [!abstract] Teorema di Weierstrass · slide 78
> Sia $f : [a, b] \to \mathbb{R}$ una funzione continua. Allora esistono il massimo $M$ ed il minimo $m$ di $f$ in $[a, b]$. In particolare, $f([a, b]) = [m, M]$.
>
> Osservazione: tutte le ipotesi del teorema sono essenziali. Controesempi:
> - Intervallo non chiuso: $f : (0, 1) \to \mathbb{R}$, $f(x) = x$
> - Intervallo non limitato: $f : (-\infty, +\infty) \to \mathbb{R}$, $f(x) = \arctan x$
> - $f$ non continua: $f(x) = \begin{cases} \frac12 & x = 0, 1 \\ x & x \in (0, 1) \end{cases}$

> [!abstract] Teorema (Bolzano-Weierstrass) · slide 79
> Facciamo uso del Teorema di Bolzano-Weierstrass (che non dimostriamo): se $(a_n)_{n \in \mathbb{N}}$ è una successione limitata, allora esiste una sua sottosuccessione convergente.

> [!abstract] Proposizione (risultato non mostrato a lezione) · Esercitazione 5, p.2
> Sia $f : (a, b) \to \mathbb{R}$ una funzione continua e monotona crescente. Sia $\{x_n\}_{n \in \mathbb{N}}$ una successione limitata t.c. $\sup\{x_n\} \in (a, b)$. Allora vale che
> $$
> \sup\{f(x_n)\}_{n \in \mathbb{N}} = f\left(\sup\{x_n\}_{n \in \mathbb{N}}\right).
> $$

## Il prof ha scritto

- slide 10, a mano, sul riquadro $x \in (x_0 - \delta, x_0 + \delta) \cap D$: «INSIEME SU CUI DEVE ESSERE SODDISFATTA LA COND.» (la fine della riga è tagliata sulla pagina)
- slide 12, a mano: «GIACCHÉ I LIMITI DESTRO E SINISTRO NON COINCIDONO ALLORA ∄ $\lim_{x \to 1} f(x)$»
- slide 63, a mano, accanto a Heaviside: «NB. $H$ è monotona NON-DECRESCENTE»
- slide 64, a mano: «discontinuità di TERZA SPECIE» (eliminabile), «discontinuità di PRIMA SPECIE» (a salto), «discontinuità di SECONDA SPECIE» (essenziale)
- slide 65, a mano, esempio 1: «ELIMINABILE (per "ELIMINARLA" basterebbe ridefinire $f(0) = 1$)»
- slide 65, a mano, esempio 2: «∃ finiti $\lim_{x \to 0^-} f(x) = -1$, $\lim_{x \to 0^+} f(x) = +1$ ≠ ⟹ DISCONTINUITÀ A SALTO»
- slide 66, a mano: «ESEMPI DI DISCONTINUITÀ ESSENZIALE (O DI SECONDA SPECIE)»; «Almeno uno dei due limiti (destro o sinistro) non è finito»; «Almeno uno dei due limiti NON ESISTE»
- slide 66, a mano, esempio 1: «DIMOSTRARE x CASA: ∄ $\lim_{x \to 0^+} f(x)$; ∄ $\lim_{x \to 0^-} f(x)$ ⟹ DISC. ESSENZIALE IN $x_0 = 0$»
- slide 66, a mano, esempio 2: «$\lim_{x \to 0^+} f(x) = +\infty$, $\lim_{x \to 0^-} f(x) = -\infty$», «DISC. ESSENZIALE IN $x_0 = 0$»
- slide 68, a mano: «$g$ deve essere definita in un intorno di $y_0 = f(x_0)$»
- slide 71, a mano, sul prodotto $f(a)f(b) < 0$: «IL SEGNO DI $f$ È OPPOSTO AGLI ESTREMI»
- slide 75, a mano: «COROLLARIO DEL TEOREMA DEGLI ZERI»; l'intervallo $(\inf f, \sup f)$ è chiamato «$=: I$»; «funzione costante: $f(x) \equiv z$ (quindi continua)»; «($h$ dipende dal valore $z$)»
- slide 76, a mano: «VAR. INDIPEND.» su $D$, «VARIABILI DIPENDENTI» su $\mathbb{R}$; «$x_0$: PUNTO DI MASSIMO», «$M$: (VALORE) MASSIMO», «$x_0$: PUNTO DI MINIMO», «$m$: (VALORE) MINIMO»
- slide 77, a mano, grafico di $f(x) = \sin x$: «$M = 1$», «$m = -1$», «punti di massimo», «punti di minimo»
- slide 78, a mano: «INTERVALLO CHIUSO» sopra $[a, b]$; «per il teorema dei valori intermedi il teorema dice $f([a, b]) \supseteq (m, M)$»
- slide 78, a mano, dopo il teorema: «(...) ma per definizione di massimo $M$ e minimo $m$: $m \in f([a, b])$; $M \in f([a, b])$. Quindi $f([a, b]) \supseteq [m, M]$ (l'altra inclusione è ovvia)»
- slide 78, a mano: «RICORDA: $f([a, b]) := \{t \in \mathbb{R} : \exists x \in [a, b] \text{ con } f(x) = t\}$ (insieme dei valori assunti da $f$ nell'intervallo $[a, b]$)»
- slide 78, a mano, controesempio 3: «funzione non continua in $x = 0$ e $x = 1$», «intervallo chiuso e limitato»
- slide 78, a mano, quarto controesempio: $f(x) = \frac1x$, $D = \mathbb{R} \setminus \{0\}$, «$\sup_D f = +\infty$», «$\inf_D f = -\infty$»
- Esercitazione 5, p.2, tutor: «Non basta $f$ monotona crescente per avere $\sup(f(x_n)) = f(\sup(x_n))$. [Serve anche che $f$ sia continua]»

## Svolti a lezione

### Limite destro e sinistro in un raccordo (slide 12)
$$
f(x) = \begin{cases} x + 4 & \text{se } x \leq 1 \\ -3x + 2 & \text{se } x > 1 \end{cases}
$$
$$
\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} x + 4 = 5 \qquad\qquad \lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} -3x + 2 = -1
$$
«GIACCHÉ I LIMITI DESTRO E SINISTRO NON COINCIDONO ALLORA ∄ $\lim_{x \to 1} f(x)$»

### Classificare le discontinuità in $0$: quattro esempi (slide 65 e 66)
1. $f(x) = \dfrac{\sin x}{x}$ per $x \neq 0$, $f(0) = 0$: «ELIMINABILE (per "ELIMINARLA" basterebbe ridefinire $f(0) = 1$)»
2. $f(x) = 1$ per $x > 0$, $f(0) = 0$, $f(x) = -1$ per $x < 0$: $\lim_{x \to 0^-} f(x) = -1$, $\lim_{x \to 0^+} f(x) = +1$, «DISCONTINUITÀ A SALTO»
3. $f(x) = \sin\dfrac1x$ per $x \neq 0$, $f(0) = 0$: «∄ $\lim_{x \to 0^+} f(x)$; ∄ $\lim_{x \to 0^-} f(x)$ ⟹ DISC. ESSENZIALE IN $x_0 = 0$» (da dimostrare a casa)
4. $f(x) = \dfrac1x$ per $x \neq 0$, $f(0) = 0$: $\lim_{x \to 0^+} f(x) = +\infty$, $\lim_{x \to 0^-} f(x) = -\infty$, «DISC. ESSENZIALE IN $x_0 = 0$»

### Continuità della composizione e dominio (slide 68)
1. $e^{-x^2}$: $f(x) : x \mapsto -x^2$ «CONTINUA», $g(y) : y \mapsto e^y$ «CONTINUA», $e^{-x^2} : x \mapsto g \circ f(x)$ ⟹ «CONTINUA»
2. $\sin\left(\sqrt{\dfrac{x}{x^2 - 2}}\right)$:
   - $f(x) : x \mapsto \dfrac{x}{x^2 - 2}$ «CONTINUA SUL SUO DOMINIO»
   - $g(x) : x \mapsto \sqrt{x}$ «CONTINUA SUL DOMINIO»
   - $h := g \circ f : x \mapsto \sqrt{\dfrac{x}{x^2 - 2}}$ «CONTINUA SUL DOMINIO NELLA COMPOSIZ.» (*)
   - $k : x \mapsto \sin(x)$, e $\sin\left(\sqrt{\dfrac{x}{x^2 - 2}}\right) = k \circ h(x)$ ⟹ «CONTINUA SUL SUO DOMINIO»
   - (*) «chi è il dominio di $h$? Il dominio di $g$ è $\{x \geq 0\}$. $g$ viene calcolata in $f(x)$. Quindi il dominio di $h = g \circ f$ è l'insieme $\{f(x) \geq 0\} = \left\{\dfrac{x}{x^2 - 2} \geq 0\right\}$», «esercizio: risolvere la disequazione»

### Continuità con parametro: il raccordo in $0$ (slide 69)
Determinare i valori del parametro $\alpha \in \mathbb{R}$ tali che la seguente funzione risulti continua nel suo dominio di definizione:
$$
f(x) = \begin{cases} \dfrac{\cos(x^2) - \sqrt[3]{1 + 3\alpha x^2}}{\sin(x^2)} =: f_1 & \text{se } x > 0, \\[2mm] \dfrac{e^{\alpha x} - 1}{x} =: f_2 & \text{se } x < 0, \\[2mm] 5 =: f(0) & \text{se } x = 0. \end{cases}
$$
«$f(x) = f_1(x)$ per $x > 0$ è continua in $\{x > 0\} \setminus \{x : x^2 = k\pi\}$ che coincide con il dominio di $f_1$»

«$f(x) \equiv f_2(x)$ per $x < 0$ è continua in $\{x < 0\}$»

«Calcoliamo»
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} f_1(x) = \lim_{x \to 0^+} \frac{\cos(x^2) - \sqrt[3]{1 + 3\alpha x^2}}{\sin(x^2)} = \lim_{x \to 0^+} \left[\frac{\cos(x^2) - 1}{\sin(x^2)} + \frac{1 - \sqrt[3]{1 + 3\alpha x^2}}{\sin(x^2)}\right]
$$
$$
= \lim_{x \to 0^+} \left[\underbrace{\frac{\cos(x^2) - 1}{x^4}}_{\frac12} \cdot \underbrace{\frac{x^2}{\sin(x^2)}}_{1} \cdot \underbrace{x^2}_{0} + \underbrace{\frac{1 - \sqrt[3]{1 + 3\alpha x^2}}{3\alpha x^2}}_{-\frac13} \cdot \underbrace{\frac{3\alpha x^2}{\sin(x^2)}}_{1 \,\to\, 3\alpha}\right]
$$
con, per il secondo pezzo, $y = 3\alpha x^2$ e $-\dfrac{(1 + y)^{1/3} - 1}{y}$:
$$
= \frac12 \cdot 1 \cdot 0 + \left(-\frac13\right) \cdot 3\alpha = -\alpha
$$
*(il foglio scrive $\frac12$ per $\frac{\cos(x^2) - 1}{x^4}$, che tende a $-\frac12$; il prodotto con $x^2 \to 0$ vale $0$ comunque, il risultato $-\alpha$ non cambia)*
$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \underbrace{\frac{e^{\alpha x} - 1}{\alpha x}}_{1} \cdot \alpha = \alpha
$$
«Per avere continuità, bisogna avere» $\displaystyle\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x)$, «$\alpha = -\alpha \implies \alpha = 0$. Ma $f(0) = 5 \neq 0$». «$\alpha = 0 \implies$ disc. eliminabile, $\alpha \neq 0$ disc. salto.»

### Continuità senza parametro: radice e punto isolato (Esercitazione 6, es. 3 a e b, tutor)
a) $f(x) = \dfrac{x}{\sqrt{x}}$: «è continua nel suo dominio perché quoziente di funzioni continue», $D = (0, +\infty)$.

b)
$$
f(x) = \begin{cases} \dfrac{\sqrt{x} - 1}{x - 1} =: f_1 & x \in (0, 1) \cup (1, +\infty) \\[2mm] 0 =: f_2 & x = 1 \end{cases}
$$
«$f_1$ è continua (nel suo dominio) perché quoziente di f. continue», «$f_2$ è continua perché $x = 1$ è un punto isolato»
$$
\lim_{x \to 1} \frac{\sqrt{x} - 1}{x - 1} \cdot \frac{\sqrt{x} + 1}{\sqrt{x} + 1} = \lim_{x \to 1} \frac{x - 1}{x - 1} \cdot \frac{1}{\sqrt{x} + 1} = \frac12 \qquad f(1) = 0
$$
«DISCONTINUITÀ III SPECIE (DISC. ELIMINABILE)»

### Discontinuità di seconda specie con le successioni (Esercitazione 6, es. 3 c, tutor)
$f(x) = \sin\left(\dfrac1x\right)$ per $x \neq 0$, $f(x) = 0$ per $x = 0$. «DETERMINARE SE LA FUNZIONE È CONTINUA in $x = 0$»

$$
x_k = \left\{\frac{1}{\frac\pi2 + 2k\pi}\right\}_{k \in \mathbb{N}} \xrightarrow{k \to +\infty} 0 \qquad \lim_{k \to +\infty} \sin\left(\frac{1}{x_k}\right) = \lim_{k \to +\infty} \sin\left(\frac\pi2 + 2k\pi\right) = 1
$$
$$
\tilde{x}_k = \left\{\frac{1}{\frac32\pi + 2k\pi}\right\}_{k \in \mathbb{N}} \xrightarrow{k \to +\infty} 0 \qquad \lim_{k \to +\infty} \sin\left(\frac{1}{\tilde{x}_k}\right) = \lim_{k \to +\infty} \sin\left(\frac32\pi + 2k\pi\right) = -1
$$
«non esiste $\lim_{x \to 0^\pm} \sin\left(\frac1x\right)$», «DISCONTINUITÀ DI II SPECIE (ESSENZIALE)»

### Continuità con il teorema dei carabinieri (Esercitazione 6, es. 3 d ed e, tutor)
d) $f(x) = x\sin\left(\dfrac1x\right)$ per $x \neq 0$, $f(x) = 0$ per $x = 0$. «È CONTINUA in $x = 0$»

$$
\lim_{x \to 0} f(x) \overset{?}{=} f(0) \qquad \text{«OSSERVIAMO CHE»} \quad \left\vert x\sin\left(\tfrac1x\right)\right\vert \leq \vert x\vert \ \to \ -\vert x\vert \leq x\sin\left(\tfrac1x\right) \leq +\vert x\vert
$$
con i due estremi che tendono a $0$ per $x \to 0$, quindi $\displaystyle\lim_{x \to 0} x\sin\left(\tfrac1x\right) = 0$, «$f(x)$ è continua». «$f(x)$ è anche derivabile in $x = 0$? [debito da pagare più avanti]»

e) $f(x) = x^2\sin\left(\dfrac1x\right)$ per $x \neq 0$, $f(x) = 0$ per $x = 0$ *(esercizio non svolto a lezione)*

«$f_1$ continua in $(-\infty, 0) \cup (0, +\infty)$ (prodotto di f. continue)», «$f_2$ continua in $x = 0$ perché punto isolato»

«verifichiamo la continuità per $x = 0$»: $\displaystyle\lim_{x \to 0} x^2\sin\left(\tfrac1x\right)$, «osserviamo che» $-x^2 \leq \sin\left(\tfrac1x\right) \leq x^2$ con i due estremi che tendono a $0$ per $x \to 0$, «quindi» $\displaystyle\lim_{x \to 0} x^2\sin\left(\tfrac1x\right) = 0$. $\lim_{x \to 0} f(x) = f(0) \to$ «$f(x)$ è continua in $x = 0$» $\to$ «$f(x)$ è continua (in $\mathbb{R}$)».

*(il foglio scrive $-x^2 \leq \sin\left(\frac1x\right) \leq x^2$, corretto: $-x^2 \leq x^2\sin\left(\frac1x\right) \leq x^2$)*

### Continuità con parametro: due pezzi (Esercitazione 6, es. 4 a, tutor)
$$
f(x) = \begin{cases} \alpha \cdot 2^x + 3 =: f_1 & x \leq 0 \\[1mm] \dfrac{\sin(x^2)}{\sqrt{x + 1} - 1} =: f_2 & x > 0 \end{cases}
$$
«$f_1$ è continua in $(-\infty, 0]$», «$f_2$ è continua in $(0, +\infty)$», «verifichiamo per quali $\alpha$ è continua in $x = 0$»
$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \alpha \cdot 2^x + 3 = \alpha + 3 \qquad f(0) = \alpha + 3
$$
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{\sin(x^2)}{\sqrt{x + 1} - 1} \overset{\frac00}{=} \lim_{x \to 0^+} \frac{\frac{\sin(x^2)}{x^2} \cdot x^2}{\frac{(x + 1)^{1/2} - 1}{x} \cdot x} = 0
$$
$\to \alpha + 3 = 0 \to \alpha = -3$

### Continuità con parametro: tre pezzi, limiti notevoli (Esercitazione 6, es. 4 b, tutor)
$$
f(x) = \begin{cases} \dfrac{\alpha\sin(\alpha x) - 3\log(1 + 2x)}{20\tan x} & x < 0 \\[2mm] \dfrac32 & x = 0 \\[2mm] \dfrac{2 - \sqrt{4 + \alpha x^2}}{x^2} & x > 0 \end{cases}
$$
$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \frac{\alpha\sin(\alpha x) - 3\log(1 + 2x)}{20\tan x} \overset{\frac00}{=} \lim_{x \to 0^-} \frac{\alpha\frac{\sin(\alpha x)}{\alpha x} \cdot \alpha x - 3\frac{\log(1 + 2x)}{2x} \cdot 2x}{20\frac{\tan x}{x} \cdot x} = \frac{\alpha^2 - 6}{20}
$$
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{2 - \sqrt{4 + \alpha x^2}}{x^2} \overset{\frac00}{=} \lim_{x \to 0^+} \frac{2\left(1 - \sqrt{1 + \frac{\alpha x^2}{4}}\right)}{x^2} = \lim_{x \to 0^+} -2\underbrace{\frac{\sqrt{1 + \frac{\alpha x^2}{4}} - 1}{\frac{\alpha x^2}{4}}}_{\frac12} \cdot \frac\alpha4 = -\frac\alpha4
$$
$$
\begin{cases} \dfrac{\alpha^2 - 6}{20} = \dfrac32 \\[2mm] -\dfrac\alpha4 = \dfrac32 \end{cases} \quad \begin{cases} \alpha^2 = 36 \\ -2\alpha = 12 \end{cases} \quad \begin{cases} \alpha = \pm 6 \\ \alpha = -6 \end{cases} \to \alpha = -6
$$

### Due parametri e un modulo (Esercitazione 6, es. 4 c, tutor)
Determinare per quali valori di $\alpha$ e $\beta$ la funzione è continua. *(esercizio non svolto a lezione)*
$$
f(x) = \begin{cases} \dfrac{x}{\vert\alpha x\vert} =: f_1 & x < 0 \\[2mm] \beta - 1 =: f_2 & x = 0 \\[2mm] e^{\beta x}(2\beta - x) =: f_3 & x > 0 \end{cases}
$$
«$f_1$ continua in $(-\infty, 0)$», «$f_2$ continua per $x = 0$», «$f_3$ continua in $(0, +\infty)$», «imponiamo la continuità per $x = 0$»
$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} f_1(x) = \lim_{x \to 0^-} \frac{x}{\vert\alpha x\vert} = \lim_{x \to 0^-} \frac{x}{-x\vert\alpha\vert} = -\frac{1}{\vert\alpha\vert}
$$
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} f_3(x) = \lim_{x \to 0^+} e^{\beta x}(2\beta - x) = 2\beta \qquad f(0) = f_2(0) = \beta - 1
$$
$$
\begin{cases} -\dfrac{1}{\vert\alpha\vert} = \beta - 1 \\[2mm] 2\beta = \beta - 1 \end{cases} \quad \begin{cases} -\dfrac{1}{\vert\alpha\vert} = -2 \\ \beta = -1 \end{cases} \quad \begin{cases} \vert\alpha\vert = \dfrac12 \\ \beta = -1 \end{cases} \quad \begin{cases} \alpha = \pm\dfrac12 \\ \beta = -1 \end{cases}
$$
Per $\alpha = \frac12$, $\beta = -1$ e per $\alpha = -\frac12$, $\beta = -1$ il foglio scrive la stessa funzione: $f(x) = -2$ per $x < 0$ e per $x = 0$, $f(x) = e^{-x}(-2 - x) = -\dfrac{2 + x}{e^x}$ per $x > 0$.

### Il controesempio sul sup di una funzione monotona (Esercitazione 5, p.2, tutor)
$$
f(x) = \begin{cases} 0 =: f_1 & x < 1 \\ 1 =: f_2 & x \geq 1 \end{cases}
$$
«$f_1$ è continua in $(-\infty, 1)$», «$f_2$ è continua in $[1, +\infty)$»; «duro verificare la continuità in $x = 1$»
$$
\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} f_1 = \lim_{x \to 1^-} 0 = 0 \qquad \lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} f_2 = \lim_{x \to 1^+} 1 = 1
$$
«$x = 1$: ha discontinuità di I specie (salto)»
$$
A = \left\{1 - \tfrac1n : n > 0,\ n \in \mathbb{N}\right\} \qquad \sup(A) = 1 \ \text{(dimostrato)} \qquad f(\sup(A)) = f(1) = 1
$$
$$
\sup(f(a_n)) = \sup\left(f\left(1 - \tfrac1n\right)_{n \geq 1}\right) = \sup(0) = 0
$$

## Crocette delle provette

### 2025, domanda 5

Sia $f : (-1, 1) \to \mathbb{R}$ una funzione pari e continua. Quale delle seguenti affermazioni è vera?

- a) L'equazione $f(x) = 0$ possiede almeno una soluzione.
- b) $f$ è limitata
- c) $f$ ammette almeno uno tra massimo e minimo
- d) Nessuna delle precedenti

> [!example]- Soluzione
> **d**. La funzione $f(x) = \frac{1}{x^2 - 1}\cos\left(\frac{1}{x^2 - 1}\right)$ è un controesempio per [2] e [3].
>
> Per la successione
> $$
> x_k = \left\{\sqrt{1 + \frac{1}{\pi + 2k\pi}}\right\}_{k\in\mathbb{N}}
> $$
> infatti si ha che $x_k \xrightarrow{k\to+\infty} 1$ e
> $$
> \lim_{k\to+\infty} f(x_k) = \lim_{k\to+\infty} (\pi + 2k\pi)\cos(\pi + 2k\pi) = -\infty
> $$
> dove $(\pi + 2k\pi) \to +\infty$ e $\cos(\pi + 2k\pi) = -1$.
>
> Allo stesso modo, per
> $$
> \tilde{x}_k = \left\{\sqrt{1 + \frac{1}{2k\pi}}\right\}_{k\in\mathbb{N}}
> $$
> si ha che $\tilde{x}_k \xrightarrow{k\to+\infty} 1$ e
> $$
> \lim_{k\to+\infty} f(\tilde{x}_k) = \lim_{k\to+\infty} (2k\pi)\cos(2k\pi) = +\infty
> $$
> dove $(2k\pi) \to +\infty$ e $\cos(2k\pi) = 1$.
>
> Per avere un controesempio per [1], invece, basta considerare $f(x) = x^2 + 1$.
>
> *(Figure del prof: il grafico di $\frac{1}{x^2-1}\cos\left(\frac{1}{x^2-1}\right)$, che oscilla con ampiezza crescente vicino a $\pm 1$, e la parabola $f(x) = x^2 + 1$.)*
>
> *(nel testo del prof le successioni $x_k$, $\tilde{x}_k$ hanno il $+$ sotto radice e cadono fuori da $(-1, 1)$: con il $-$ il conto è lo stesso, la risposta d resta giusta)*

### 2024, domanda 2

Sia $f : \mathbb{R} \to \mathbb{R}$ una funzione derivabile. Quali delle seguenti affermazioni è vera?

- a) $f$ ammette massimo o minimo
- b) $f_{\vert[0,1]}$ ammette massimo e minimo
- c) $f_{\vert(0,1)}$ ammette massimo e minimo
- d) $f$ non ammette né massimo né minimo

> [!example]- Soluzione
> **b**. Se $f$ è derivabile in $\mathbb{R}$, allora $f$ è continua in $\mathbb{R}$. In particolare $f$ è continua in $[0, 1]$, che è un intervallo chiuso e limitato. Per il teorema di Weierstrass, $f_{\vert[0,1]}$ ammette massimo e minimo.

### 2024, domanda 5

Sia $f : [a, b] \to \mathbb{R}$ una funzione continua con $f(x) \ne 0$ per ogni $x \in [a, b]$ e $m = \min_{x\in[a,b]} f(x)$. Dire quale affermazione è corretta:

- a) $\min_{x\in[a,b]} f^2(x) = m^2$
- b) $\min_{x\in[a,b]} (1/f(x)) = 1/m$
- c) $\max_{x\in[a,b]} (1/f(x)) = 1/m$
- d) Nessuna delle precedenti

> [!example]- Soluzione
> **c**. La funzione $x \mapsto \frac{1}{x}$ è monotona decrescente in $(-\infty, 0)$ e in $(0, +\infty)$. Inoltre $f$ è continua, dunque per il teorema degli zeri $f(x) \in (0, +\infty)$ $\forall x \in [a, b]$ oppure $f(x) \in (-\infty, 0)$ $\forall x \in [a, b]$. Di conseguenza se $f(x) \ge m$ per ogni $x \in [a, b]$, allora $(f(x))^{-1} \le m^{-1}$ per ogni $x \in [a, b]$. Si noti che il membro sinistro è sempre definito perché $f \ne 0$ in $[a, b]$. Inoltre se $x_0 \in [a, b]$ è t.c. $f(x_0) = m$, allora $(f(x_0))^{-1} = m^{-1}$. Dunque qualunque punto di minimo $x_0$ per $f$ in $[a, b]$ è un punto di massimo per $\frac{1}{f}$ in $[a, b]$, con $\frac{1}{f}(x_0) = m^{-1}$. In conclusione
> $$
> \max_{x\in[a,b]} \left(\frac{1}{f(x)}\right) = \frac{1}{m}
> $$

### 2023 v1, domanda 1

Sia $f : (a, b) \to \mathbb{R}$ una funzione continua e siano $x_1 < x_2 < x_3 < x_4 \in (a, b)$ con $f(x_i)f(x_{i+1}) < 0$ per $i = 1, 2, 3$. Qual è il numero minimo possibile di soluzioni in $(a, b)$ dell'equazione $f(x) = 0$?

- a) 1
- b) 2
- c) 3
- d) 4

> [!example]- Soluzione
> **c**. OSSERVAZIONE: vale il teorema degli zeri negli intervalli $(x_1, x_2)$, $(x_2, x_3)$, $(x_3, x_4)$.
> Quindi $f(x) = 0$ ammette almeno 3 soluzioni.
> *(due grafici, esempi di funzione con tre zeri, uno in ciascun intervallo)*

### 2023 v2, domanda 6

Sia $f : (a, b) \to \mathbb{R}$ una funzione continua e siano $x_1 < x_2 < x_3 \in (a, b)$ con $f(x_i)f(x_{i+1}) < 0$ per $i = 1, 2$. Qual è il numero minimo possibile di soluzioni in $(a, b)$ dell'equazione $f(x) = 0$?

- a) 1
- b) 2
- c) 3
- d) 4

> [!example]- Soluzione
> **b**. OSSERVAZIONE: vale il teorema degli zeri negli intervalli $(x_1, x_2)$, $(x_2, x_3)$.
> Quindi $f(x) = 0$ ammette almeno 2 soluzioni.
> *(due grafici, esempi di funzione con due zeri)*

### 2023 v1, domanda 2

Sia $f : \mathbb{R} \to \mathbb{R}$ una funzione continua. Quali delle seguenti affermazioni è vera?

- a) $f$ ammette massimo o minimo
- b) $f_{\vert[0,1]}$ ammette massimo e minimo
- c) $f_{\vert(0,1)}$ ammette massimo e minimo
- d) $f$ non ammette né massimo né minimo

> [!example]- Soluzione
> **b**. Per il teorema di Weierstrass l'affermazione corretta è b). Negli altri casi è facile esibire dei controesempi.
> Controesempio per a) e c): $f(x) = x$.
> Su $\mathbb{R}$: $\sup(f) = +\infty$, $\inf(f) = -\infty$, non esistono $\min(f)$ e $\max(f)$.
> Su $(0,1)$: $\sup(f) = 1$, $\inf(f) = 0$, non esistono $\min(f)$ e $\max(f)$.
> Controesempio per d): $f(x) = x^2$, $\min(f) = 0$.

### 2022 A, domanda 7

Sia $f : \mathbb{R} \to \mathbb{R}$ la funzione data da $f(x) = \sqrt{x} + 1$ se $x \geq 0$ e $f(x) = \sin(x + \alpha)$ se $x < 0$. Allora $f$ è continua:

- a) se $\alpha = \pi/2$;
- b) se $\alpha = 0$;
- c) se $\alpha = \pi$;
- d) per nessun valore di $\alpha$

> [!example]- Soluzione
> **a**. $$f(x) = \begin{cases} \sin(x + \alpha) & x < 0 \\ \sqrt{x} + 1 & x \geq 0 \end{cases}$$
> $f(x)$ è CONTINUA per $x \in (0, +\infty)$, è CONTINUA per $x \in (-\infty, 0)$.
> CONSIDERIAMO la continuità in $x_0 = 0$:
> $$
> \lim_{x \to 0^+} f(x) = \sqrt{0} + 1 = 1
> $$
> $$
> \lim_{x \to 0^-} f(x) = \sin(0 + \alpha) = \sin\alpha
> $$
> $$
> \sin\alpha = 1 \iff \alpha = \frac{\pi}{2} + 2k\pi \to \alpha = \frac{\pi}{2} \quad (\alpha \in [0, 2\pi])
> $$

### 2019, compito 1 domanda 5

Dato $\alpha \in \mathbb{R}$, la funzione $f : \mathbb{R} \to \mathbb{R}$, definita come $f(x) = 3\log(x)/(x - 1)$ quando $x > 1$ e $f(x) = 2\alpha x + \alpha^2$ quando $x \le 1$, risulta continua su $\mathbb{R}$ se e solo se

- a) $\alpha > 2$
- b) $\alpha = -3$ oppure $\alpha = 1$
- c) $\alpha = 2$ oppure $\alpha = -3$
- d) $\alpha > 1$

> [!example]- Soluzione
> **b**. $\lim_{x \to 1^+} f = 3$ e $f(1) = \alpha^2 + 2\alpha$: $\alpha^2 + 2\alpha - 3 = 0$. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 2 domanda 5

Dato $\alpha \in \mathbb{R}$, la funzione $f : \mathbb{R} \to \mathbb{R}$, definita come $f(x) = \sin(2x + 2)/(x + 1)$ quando $x > -1$ e $f(x) = \alpha^2 - \alpha x$ quando $x \le -1$, risulta continua su $\mathbb{R}$ se e solo se

- a) $\alpha \ge 1$
- b) $0 < \alpha < 1$
- c) $\alpha = 1$ oppure $\alpha = -2$
- d) $\alpha = 2$ oppure $\alpha = -3$

> [!example]- Soluzione
> **c**. $\lim_{x \to -1^+} f = 2$ e $f(-1) = \alpha^2 + \alpha$: $\alpha^2 + \alpha - 2 = 0$. *(conto mio, la chiave dà solo la risposta)*

### simulazione, domanda 6

Sia $f : [1, 3] \to \mathbb{R}$ una funzione continua tale che $f(1) = 3$, $f(3) = 2$. Quale delle seguenti equazioni ha sicuramente una soluzione in $[1, 3]$?

- a) $f(x) - x - 3 = 0$
- b) $f(x) - \sin x = 0$
- c) $f(x) = 2^x$
- d) $f(x) - 5 = \cos(x)$

> [!example]- Soluzione
> **c**. Con $h(x) = f(x) - 2^x$: $h(1) = 3 - 2 = 1 > 0$, $h(3) = 2 - 8 = -6 < 0$, $h$ continua: per il teorema degli zeri ha uno zero in $[1, 3]$. Nelle altre i valori agli estremi hanno lo stesso segno. *(conto mio, la chiave dà solo la risposta)*

## Esercizi delle provette

### 2024, esercizio 3, 6 punti

Determinare tutti i valori del parametro $a \in \mathbb{R}$ per cui la seguente funzione è continua

$$
f(x) := \begin{cases} \dfrac{\sqrt{x+4} - 2}{x} & \text{se } x > 0 \\[2mm] a - \dfrac{1}{x-1} & \text{se } x \le 0 \end{cases}
$$

> [!example]- Soluzione
> Per $x > 0$ e per $x < 0$ la funzione è composizione di funzioni continue, con denominatore $\ne 0$, dunque è continua.
>
> Abbiamo
> $$
> \lim_{x\to0^+} f(x) = \lim_{x\to0^+} \frac{\sqrt{x+4} - 2}{x} = \lim_{x\to0^+} \frac{2\left(\sqrt{\frac{x}{4} + 1} - 1\right)}{4 \cdot \frac{x}{4}} \underset{[y := \frac{x}{4}]}{=} \frac{1}{2}\lim_{y\to0^+} \frac{\sqrt{1+y} - 1}{y} = \frac{1}{4}
> $$
> (limite notevole: $\frac{\sqrt{1+y} - 1}{y} \to \frac{1}{2}$)
>
> Inoltre
> $$
> \lim_{x\to0^-} f(x) = \lim_{x\to0^-} a - \frac{1}{x-1} = a + 1
> $$
> Dunque la funzione è continua in $x = 0$ (e quindi in $\mathbb{R}$) se e solo se
> $$
> a + 1 = \frac{1}{4} \Leftrightarrow a = -\frac{3}{4}
> $$

### simulazione, esercizio 1 (a), 10 punti in tutto

Determinare per quali valori del parametro $\alpha > 0$ la seguente funzione risulta continua:

$$
f(x) = \begin{cases} \dfrac{e^{x^\alpha} + x^2 - 1}{3\log(\sqrt{x} + 1)} & \text{se } x > 0, \\[2mm] x^5 + 7x & \text{se } x \le 0. \end{cases}
$$

> [!example]- Soluzione
> Osserviamo che $f(x)$ è continua in $x_0 \ne 0$ grazie ai Teoremi sull'algebra delle funzioni continue.
>
> Verifichiamo la continuità in $x_0 = 0$. Si ha $f(0) = 0$ (abbiamo usato la II legge).
> Si ha inoltre $\lim_{x\to0^-} f(x) = \lim_{x\to0^-} x^5 + 7x = 0$.
>
> Pertanto resta da controllare la continuità da destra. Tenendo presente i limiti $\lim_{t\to0} \frac{e^t - 1}{t} = 1$ e $\lim_{t\to0} \frac{\log(1+t)}{t} = 1$, distinguiamo 2 casi: $0 < \alpha < 2$, $\alpha \ge 2$.
>
> Nel primo caso ($0 < \alpha < 2$) abbiamo
> $$
> \lim_{x\to0^+} f(x) = \lim_{x\to0^+} \frac{e^{x^\alpha} - 1 + x^2}{3\log(1 + \sqrt{x})} = \lim_{x\to0^+} \frac{x^\alpha\left(\frac{e^{x^\alpha} - 1}{x^\alpha} + x^{2-\alpha}\right)}{3x^{\frac{1}{2}} \cdot \frac{\log(1+\sqrt{x})}{\sqrt{x}}}
> $$
> $$
> = \begin{cases} +\infty & \text{se } 0 < \alpha < \frac{1}{2} \\[1mm] \frac{1}{3} & \text{se } \alpha = \frac{1}{2} \\[1mm] 0 & \text{se } \frac{1}{2} < \alpha < 2 \end{cases}
> $$
>
> Nel secondo caso abbiamo
> $$
> \lim_{x\to0^+} f(x) = \lim_{x\to0^+} \frac{x^2\left(\frac{e^{x^\alpha} - 1}{x^\alpha} \cdot \frac{x^\alpha}{x^2} + 1\right)}{3\sqrt{x} \cdot \frac{\log(1+\sqrt{x})}{\sqrt{x}}} = \lim_{x\to0^+} x^{\frac{3}{2}} \cdot g(x) = 0.
> $$
> ($x^{3/2}$ infinitesima, $g(x)$ limitata)
>
> In conclusione, $f$ è continua in $0$ $\forall \alpha > \frac{1}{2}$.

## Esercizi dei fogli e delle esercitazioni

### Lezione 2026-10-21, slide 80 (stesso testo: Esercizi limiti di successioni e funzioni 2022, es. 10)
Sia $f : [2, 4] \to \mathbb{R}$ una funzione continua e tale che $f(2) = -1$, $f(4) = -3$. Dire se le seguenti equazioni ammettono almeno una soluzione in $[2, 4]$:
- (a) $f(x) + \frac23 x = 0$
- (b) $f(x) = -\dfrac{x}{x - 3}$
- (c) $f(x) + \sin x = -4$
- (d) $-4f(x) = x^2$

> [!example]- Soluzione
> Il foglio 2022 dà solo il risultato: a, d.
>
> **(a)** $g(x) = f(x) + \frac23 x$ è continua su $[2, 4]$ (somma di continue). $g(2) = -1 + \frac43 = \frac13 > 0$, $g(4) = -3 + \frac83 = -\frac13 < 0$. Per il teorema degli zeri esiste $x_0 \in (2, 4)$ con $g(x_0) = 0$.
>
> **(b)** $h(x) = f(x) + \frac{x}{x - 3}$ non è definita in $x = 3 \in [2, 4]$: il teorema degli zeri non si applica. Non c'è soluzione garantita: per $f(x) = 1 - x$ (continua, $f(2) = -1$, $f(4) = -3$) l'equazione diventa $x^2 - 5x + 3 = 0$, con radici $\frac{5 \pm \sqrt{13}}{2} \approx 0{,}70$ e $4{,}30$, fuori da $[2, 4]$.
>
> **(c)** $g(x) = f(x) + \sin x + 4$: $g(2) = 3 + \sin 2 > 0$, $g(4) = 1 + \sin 4 > 0$ (perché $\sin 4 \approx -0{,}757$). Stesso segno agli estremi: nessuna soluzione garantita. Per $f(x) = 1 - x$ l'equazione diventa $x = 5 + \sin x$, impossibile su $[2, 4]$ perché $5 + \sin x \geq 4 \geq x$ con uguaglianza solo per $x = 4$ e $\sin 4 = -1$, che non vale.
>
> **(d)** $g(x) = -4f(x) - x^2$: $g(2) = 4 - 4 = 0$. La soluzione è $x = 2$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 4, esercizio 5.1
Dopo aver provato che le seguenti funzioni sono definite su tutta la retta reale, studiarne la continuità e classificarne gli eventuali punti di non continuità.
$$
f(x) = \begin{cases} \dfrac{\sqrt{1 - 2x + x^4}}{x + 1} & \text{per } x \neq -1 \\[2mm] 2 & \text{per } x = -1 \end{cases}
$$
*(il foglio dice $1 - 2x + x^4$, che non è definita su tutta la retta: per $x = 0{,}8$ vale $-0{,}1904$; il testo voleva probabilmente $1 - 2x^2 + x^4$)*

> [!example]- Soluzione
> **Versione voluta, $\sqrt{1 - 2x^2 + x^4}$.**
> 1. $1 - 2x^2 + x^4 = (1 - x^2)^2 \geq 0$: la radice è definita su $\mathbb{R}$. Il denominatore si annulla solo in $-1$, dove $f$ è assegnata a parte.
> 2. $\sqrt{(1 - x^2)^2} = \vert 1 - x^2\vert = \vert 1 - x\vert\,\vert 1 + x\vert$.
> 3. Fuori da $-1$, $f$ è continua (moduli, prodotti e quozienti di continue, denominatore $\neq 0$).
> 4. Da destra ($x + 1 > 0$): $f(x) = \vert 1 - x\vert \to 2$. Da sinistra ($x + 1 < 0$): $f(x) = -\vert 1 - x\vert \to -2$.
> 5. Laterali $-2$ e $2$, finiti e diversi: discontinuità a salto in $-1$. Siccome $f(-1) = 2$ è il limite destro, $f$ è continua da destra.
>
> Continua su $\mathbb{R} \setminus \{-1\}$, salto in $-1$.
>
> **Versione stampata, $\sqrt{1 - 2x + x^4}$.** $x^4 - 2x + 1 = (x - 1)(x^3 + x^2 + x - 1)$. Il fattore $q(x) = x^3 + x^2 + x - 1$ è strettamente crescente e si annulla in un solo punto $r \approx 0{,}5437$, quindi il dominio è $(-\infty, r] \cup [1, +\infty)$ e non tutto $\mathbb{R}$. In $-1$ il numeratore tende a $\sqrt{4} = 2$ e il denominatore a $0^\pm$: laterali $\pm\infty$, discontinuità essenziale.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 4, esercizio 5.2
$$
f(x) = \begin{cases} \dfrac{\sin(x^2 - 2x + 1)}{\log^2(x^2)} & \text{per } x \neq \pm 1 \\[2mm] \dfrac14 & \text{per } x = \pm 1 \end{cases}
$$
*(il foglio dice «definite su tutta la retta reale», ma in $x = 0$ $\log(x^2)$ non esiste: il dominio è $\mathbb{R} \setminus \{0\}$)*

> [!example]- Soluzione
> $x^2 - 2x + 1 = (x - 1)^2$ e $\log^2(x^2) = 4\log^2\vert x\vert$, che si annulla solo per $\vert x\vert = 1$. Fuori da $0$ e $\pm 1$, $f$ è continua.
>
> **In $x_0 = 1$.** Con $t = x - 1 \to 0$: $f = \dfrac{\sin(t^2)}{4\log^2(1 + t)} = \dfrac14 \cdot \dfrac{\frac{\sin(t^2)}{t^2}}{\left(\frac{\log(1 + t)}{t}\right)^2} \to \dfrac14 \cdot \dfrac{1}{1^2} = \dfrac14 = f(1)$. Continua.
>
> **In $x_0 = -1$.** Numeratore: $\sin\left((x - 1)^2\right) \to \sin 4 \approx -0{,}757 < 0$. Denominatore: $4\log^2\vert x\vert \to 0^+$. Quindi $f \to -\infty$ da entrambi i lati: discontinuità essenziale. Il valore $\frac14$ non c'entra.
>
> **Vicino a $0$.** Il numeratore tende a $\sin 1$, il denominatore a $+\infty$: $f \to 0$. Il punto $0$ non sta nel dominio, quindi non è un punto di discontinuità.
>
> Continua su $\mathbb{R} \setminus \{0, -1\}$, discontinuità essenziale in $-1$.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 4, esercizio 6.1
Determinare l'insieme di definizione delle seguenti funzioni e studiarne la continuità, classificando gli eventuali punti di non continuità, al variare del parametro reale positivo $\alpha$.
$$
f(x) = \begin{cases} \dfrac1\pi\arctan\dfrac1x & \text{per } x > 0 \\[2mm] \alpha(x + 1) & \text{per } x \leq 0 \end{cases}
$$

> [!example]- Soluzione
> 1. Dominio: $\mathbb{R}$.
> 2. Fuori da $0$: continua (composizione per $x > 0$, polinomio per $x < 0$).
> 3. $f(0) = \alpha$. Da sinistra $\alpha(x + 1) \to \alpha$: sempre continua da sinistra.
> 4. Da destra: $y = \frac1x \to +\infty$, $\arctan y \to \frac\pi2$, quindi $f(x) \to \frac1\pi \cdot \frac\pi2 = \frac12$.
> 5. Continua in $0$ se e solo se $\alpha = \frac12$. Per $\alpha \neq \frac12$: laterali $\alpha$ e $\frac12$, finiti e diversi, salto in $0$ (continua da sinistra).
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 4, esercizio 6.2
$$
f(x) = \begin{cases} \dfrac{\sin\left(\alpha\log(1 - \alpha x)\right)}{x\left(\cos(2x) - 2\right)} & \text{per } x < 0 \\[2mm] \sqrt{\vert 2 - x - 2x^2\vert} & \text{per } x \geq 0 \end{cases}
$$

> [!example]- Soluzione
> **Dominio.** Per $x < 0$ e $\alpha > 0$: $1 - \alpha x > 1 > 0$, e $\cos(2x) - 2 \leq -1 < 0$. Per $x \geq 0$ il modulo è $\geq 0$. Dominio $\mathbb{R}$.
>
> **In $0$.** $f(0) = \sqrt2$, e da destra $\sqrt{\vert 2 - x - 2x^2\vert} \to \sqrt2$: continua da destra.
>
> **Da sinistra.** Con $u = \alpha\log(1 - \alpha x) \to 0$:
> $$
> \frac{\sin u}{u} \cdot \frac{\log(1 - \alpha x)}{-\alpha x} \cdot \frac{-\alpha^2}{\cos(2x) - 2} \to 1 \cdot 1 \cdot \frac{-\alpha^2}{-1} = \alpha^2
> $$
>
> **Raccordo.** Continua in $0$ se e solo se $\alpha^2 = \sqrt2$, cioè $\alpha = \sqrt[4]{2}$. Per $\alpha \neq \sqrt[4]{2}$: salto in $0$ (laterali $\alpha^2$ e $\sqrt2$), continua da destra.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 2, punti (1)-(4)
Dopo aver determinato l'insieme di definizione delle seguenti funzioni, studiare la continuità, classificando gli eventuali punti di non continuità.
- (1) $f(x) = \dfrac1x$ per $x \neq 0$, $f(x) = 0$ per $x = 0$
- (2) $f(x) = \dfrac1x$
- (3) $f(x) = \arctan\left(\dfrac1x\right)$ per $x \neq 0$, $f(x) = 0$ per $x = 0$
- (4) $f(x) = \arctan\left(\dfrac1x\right)$

> [!example]- Soluzione
> - (1) $D = \mathbb{R}$. In $0$: $\lim_{x \to 0^\pm} \frac1x = \pm\infty$, seconda specie. Continua altrove.
> - (2) $D = \mathbb{R} \setminus \{0\}$, continua su tutto il dominio. $0$ non è nel dominio: non è un punto di discontinuità.
> - (3) $D = \mathbb{R}$. In $0$: $f \to \pm\frac\pi2$ per $x \to 0^\pm$, laterali finiti e diversi: salto.
> - (4) $D = \mathbb{R} \setminus \{0\}$, continua su $D$.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 2, punti (5)-(7)
- (5) $f(x) = \arctan\left(\dfrac{1}{x^2}\right)$ per $x \neq 0$, $f(x) = 2026$ per $x = 0$
- (6) $f(x) = \dfrac{x}{\sin(\pi x)}$ per $x \notin \mathbb{Z}$, $f(x) = 0$ per $x \in \mathbb{Z}$
- (7) $f(x) = (-x)^x$ per $x < 0$, $f(x) = \sin\left(x + \dfrac\pi2\right)$ per $x \geq 0$

> [!example]- Soluzione
> - (5) $D = \mathbb{R}$. In $0$: $\frac{1}{x^2} \to +\infty$ da tutte e due le parti, $f \to \frac\pi2 \neq 2026$. Eliminabile.
> - (6) $D = \mathbb{R}$, continua su $\mathbb{R} \setminus \mathbb{Z}$. In $0$: $\frac{x}{\sin(\pi x)} = \frac1\pi \cdot \frac{\pi x}{\sin(\pi x)} \to \frac1\pi \neq 0 = f(0)$, eliminabile. In $k \in \mathbb{Z}$, $k \neq 0$: il numeratore tende a $k \neq 0$ e $\sin(\pi x) \to 0$ con segni opposti ai due lati, laterali $\pm\infty$, seconda specie.
> - (7) $D = \mathbb{R}$. Per $x < 0$: $(-x)^x = e^{x\log(-x)}$, con $t = -x \to 0^+$ si ha $x\log(-x) = -t\log t \to 0$, quindi $f \to e^0 = 1$. Da destra e nel punto: $\sin\left(0 + \frac\pi2\right) = 1$. Continua su tutto $\mathbb{R}$.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Tutoraggio 5 complementi, esercizio 2, punti (12), (14), (15)
- (12) $f(x) = \lfloor\sin(x)\rfloor$
- (14) $f(x) = \dfrac{1}{\lfloor x\rfloor + 1 - x}$
- (15) $f(x) = \begin{cases} \dfrac{1}{\lfloor\frac1x\rfloor} & \text{se } x < 0 \\[2mm] 0 & \text{se } x \geq 0 \end{cases}$

> [!example]- Soluzione
> - (12) $D = \mathbb{R}$, periodica di periodo $2\pi$. Su $[0, 2\pi)$: $f = 1$ in $\frac\pi2$, $f = 0$ su $[0, \pi] \setminus \{\frac\pi2\}$, $f = -1$ su $(\pi, 2\pi)$. In $\frac\pi2 + 2k\pi$: limite $0$, valore $1$, eliminabile. In $2k\pi$: sinistra $-1$, destra $0 = f(2k\pi)$, salto (continua da destra). In $\pi + 2k\pi$: sinistra $0 = f$, destra $-1$, salto (continua da sinistra). Continua altrove.
> - (14) $x - \lfloor x\rfloor \in [0, 1)$, quindi il denominatore $\in (0, 1]$ non si annulla: $D = \mathbb{R}$. In $k \in \mathbb{Z}$: da destra $\frac{1}{k + 1 - x} \to 1 = f(k)$, da sinistra $\frac{1}{k - x} \to +\infty$. Seconda specie in ogni intero (continua da destra).
> - (15) Per $x < 0$, $\lfloor\frac1x\rfloor \leq -1$ non è mai $0$: $D = \mathbb{R}$. In $0$: $\lfloor\frac1x\rfloor \to -\infty$, $f \to 0 = f(0)$, continua. Per $x \in \left(-\frac1k, -\frac{1}{k + 1}\right)$, $f = -\frac{1}{k + 1}$; per $x \leq -1$, $f = -1$. In $x = -\frac1k$ ($k \geq 1$): a sinistra $-\frac1k = f$, a destra $-\frac{1}{k + 1}$, salto (continua da sinistra).
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Esercizi limiti di successioni e funzioni 2022, esercizio 9
Determinare $\alpha$ in modo che le funzioni risultino ben definite in un intorno di $0$ e continue nel loro dominio:
- (i) $f_1(x) = \begin{cases} \dfrac{\sin(x^2)}{\sqrt{x + 1} - 1} & \text{se } x > 0 \\[2mm] \alpha 2^x + 3 & \text{se } x \leq 0 \end{cases}$
- (ii) $f_2(x) = \begin{cases} \alpha(x^2 - 2) & \text{se } x \neq \pm 1 \\ 3 & \text{se } x = \pm 1 \end{cases}$
- (iii) $f_3(x) = \begin{cases} \dfrac{(e^{\alpha x} - 1)^3}{e^{\alpha x^3} - 1} & \text{se } x < 0 \\[2mm] \alpha\cos x & \text{se } x \geq 0 \end{cases}$
- (iv) $f_4(x) = \begin{cases} \dfrac{1 - \cos(\alpha x) + \alpha x^2}{\sin^2 x} & \text{se } x < 0 \\[2mm] 3^{\alpha x} + 3 & \text{se } x \geq 0 \end{cases}$
- (v) $f_5(x) = \begin{cases} \dfrac{e^{\alpha x} + 1}{\alpha} & \text{se } x < 0 \\[2mm] \dfrac{\sqrt{\alpha}\tan(\sqrt{\alpha}\,x)}{\sqrt{2}\tan(\sqrt{2}\,x)} & \text{se } x \geq 0 \end{cases}$
- (vi) $f_6(x) = \begin{cases} \dfrac{\alpha\sin(\alpha x) - 3\log(1 + 2x)}{20\tan x} & \text{se } x < 0 \\[2mm] \dfrac32 & \text{se } x = 0 \\[2mm] \dfrac{2 - \sqrt{4 + \alpha x^2}}{x^2} & \text{se } x > 0 \end{cases}$

> [!example]- Soluzione
> Il foglio dà solo i risultati: (i) $\alpha = -3$, (ii) $\alpha = -3$, (iii) $\alpha = 1$, (iv) $\alpha = -4 \lor \alpha = 2$, (v) $\alpha = 2$, (vi) $\alpha = -6$.
>
> - (i) Da destra $\to 0$ (come nell'es. 4 a di Esercitazione 6), da sinistra e in $0$: $\alpha + 3$. Quindi $\alpha = -3$.
> - (ii) In $\pm 1$ il limite è $\alpha(1 - 2) = -\alpha$ e il valore è $3$. Quindi $\alpha = -3$.
> - (iii) Da sinistra: $\frac{(\alpha x)^3}{\alpha x^3} = \alpha^2$ (serve $\alpha \neq 0$, altrimenti il denominatore si annulla); da destra e in $0$: $\alpha$. Da $\alpha^2 = \alpha$ e $\alpha \neq 0$ segue $\alpha = 1$.
> - (iv) Da sinistra: $\frac{\frac{(\alpha x)^2}{2} + \alpha x^2}{x^2} = \frac{\alpha^2}{2} + \alpha$; in $0$: $3^0 + 3 = 4$. Da $\alpha^2 + 2\alpha - 8 = 0$: $\alpha = 2$ o $\alpha = -4$.
> - (v) Da sinistra: $\frac{2}{\alpha}$. Da destra, con $\alpha > 0$: $\frac{\sqrt\alpha\,\sqrt\alpha\,x}{\sqrt2\,\sqrt2\,x} = \frac\alpha2$. Da $\frac2\alpha = \frac\alpha2$: $\alpha = \pm 2$, e $\sqrt\alpha$ richiede $\alpha \geq 0$: $\alpha = 2$.
> - (vi) Come l'es. 4 b di Esercitazione 6: da sinistra $\frac{\alpha^2 - 6}{20} = \frac32$ dà $\alpha = \pm 6$, da destra $-\frac\alpha4 = \frac32$ dà $\alpha = -6$.
>
> *(svolgimento dalle note e dai conti dell'Esercitazione 6, il foglio dà solo il risultato)*
>
> *(nota: nel testo di (v), per $x = 0$ la formula $\frac{\sqrt\alpha\tan(\sqrt\alpha x)}{\sqrt2\tan(\sqrt2 x)}$ dà $\frac00$)*

## Crocette dei fogli e delle esercitazioni

### Esercitazione 6, quiz 10
Sia $f : [0, 2] \to \mathbb{R}$ una funzione derivabile, con $f(0) = 1$ e $f(2) = -1$. Allora una sola delle seguenti affermazioni è sicuramente vera:
- a) $f$ può ammettere una discontinuità di prima specie in $x = 1$;
- b) $f$ ammette uno zero in $x = 1$;
- c) $f$ è monotona;
- d) $f$ ammette uno zero in $]0, 2[$;
- e) Nessuna delle precedenti.

*(sul foglio la lettera dell'opzione barrata è coperta dalla croce; c ed e sono stampate a destra, quindi d)*

> [!example]- Soluzione
> **d**. «$f$ derivabile $\to$ $f$ continua», $f(0) = 1$, $f(2) = -1$, $f(0)f(2) < 0$: «per T. zeri $\exists c \in (0, 2)$ t.c. $f(c) = 0$»

### Esercitazione 6, quiz 11
$f : [0, 1] \cup [2, 3] \to \mathbb{R}$ derivabile con $f'(x) \geq 5$. Allora
- a) $f$ è crescente
- b) $f$ è limitata
- c) $f$ è invertibile
- d) $\exists x_0 \in [0, 1] \cup [2, 3]$ t.c. $f(x_0) = 0$

*(le caselle del foglio non hanno lettera, qui in ordine di lettura per righe)*

> [!example]- Soluzione
> **b**. «Costruiamo un controesempio per le risposte sbagliate»: il foglio disegna due segmenti con pendenza $\geq 5$, il secondo più in basso del primo.
>
> «Mostriamo perché “$f$ è limitata" è la risposta corretta. $f$ derivabile $\to$ $f$ continua. $f_{\vert[0,1]}$ è limitata, infatti per T. Weierstrass ammette max e min assoluti. Siano $m_1 = \min_{[0,1]} f$, $M_1 = \max_{[0,1]} f$. $f_{\vert[2,3]}$ è limitata, infatti per T. Weierstrass ammette max e min assoluti. Siano $m_2 = \min_{[2,3]} f$, $M_2 = \max_{[2,3]} f$. Quindi abbiamo che $\forall x \in [0, 1] \cup [2, 3]$ $\min\{m_1, m_2\} \leq f(x) \leq \max\{M_1, M_2\}$ ovvero $f(x)$ è limitata.»
>
> *(esercizio non completato a lezione)*

### Esercitazione 6, quiz 12
$f : [0, 1] \to [0, 1]$ continua. Allora
- a) se $f(x) > 0$ $\forall x \in (0, 1)$ allora $\min(f(x)) = 0$
- b) $\min(f(x)) \cdot \max(f(x)) \leq 0$
- c) $\exists c \in [0, 1]$ t.c. $f(c) = c$
- d) esiste un unico $c \in [0, 1]$ t.c. $f(c) = c$

*(le caselle del foglio non hanno lettera, qui in ordine di lettura)*

> [!example]- Soluzione
> **c**. «Suggerimento»: $g(x) = x - f(x)$, $g(0) = 0 - f(0) = -f(0) \leq 0$, $g(1) = 1 - f(1) \geq 0$.
>
> «Sia $g(x) = x - f(x)$. Dal momento che $\forall x \in [0, 1]$ $0 \leq f(x) \leq 1$, vale: $g(0) = 0 - f(0) = -f(0) \leq 0$, $g(1) = 1 - f(1) \geq 0$. Ora, se $g(0) = 0$ allora $f(0) = 0$ e, analogamente, se $g(1) = 0$ allora $f(1) = 1$. Se, invece, $g(0) < 0$ e $g(1) > 0$ allora, dal momento che $g(x)$ è continua in quanto somma di funzioni continue, per il teorema degli zeri vale che $\exists c \in (0, 1)$ t.c. $g(c) = 0$, ovvero $\exists c \in (0, 1)$ t.c. $f(c) = c$.»
>
> *(esercizio non completato a lezione)*

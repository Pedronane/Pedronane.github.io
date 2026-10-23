---
title: Continuità (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-20
lezioni: []
ordine: 15
---

Esercizi tipo esame di [Continuità](/uni/analisi-1/continuita/), dove stanno definizioni, teoremi, metodo e l'esercizio della slide 69. I limiti notevoli sono in [Teoremi sui limiti di funzioni](/uni/analisi-1/teoremi-sui-limiti-di-funzioni/). Testo in chiaro, soluzione chiusa: prima provaci da solo. Gli esercizi 6-9 sono gli esercizi 5 e 6 del IV tutoraggio (<span class="src">tutoraggio 4, pagina 3</span>), con due errori del testo segnalati.

## Crocette (stile parte 1)

**C1.** La funzione $f(x) = e^{1/x}$ per $x \neq 0$, $f(0) = 0$, in $x_0 = 0$ ha:

- a) una discontinuità eliminabile
- b) una discontinuità a salto
- c) una discontinuità essenziale
- d) nessuna discontinuità

> [!example]- Soluzione
> **c**. Da destra $\frac1x \to +\infty$ ed $e^{1/x} \to +\infty$; da sinistra $\frac1x \to -\infty$ ed $e^{1/x} \to 0$ (cambio di variabile con $y = \frac1x$). Un laterale è infinito: essenziale. La b) guarda solo il limite sinistro, che è finito e vale proprio $0 = f(0)$: $f$ è continua da sinistra, ma non basta.

**C2.** Sia $f(x) = \dfrac{x^2 - 4}{x - 2}$ per $x \neq 2$ e $f(2) = 0$. In $x_0 = 2$:

- a) $f$ è continua
- b) $f$ ha una discontinuità eliminabile
- c) $f$ ha una discontinuità a salto
- d) $f$ ha una discontinuità essenziale

> [!example]- Soluzione
> **b**. Per $x \neq 2$, $\frac{(x - 2)(x + 2)}{x - 2} = x + 2 \to 4$. Il limite esiste finito, ma $4 \neq 0 = f(2)$. Ridefinendo $f(2) = 4$ la funzione diventa $x + 2$, continua.

**C3.** Quale affermazione è vera?

- a) una funzione monotona su $(a, b)$ è continua
- b) una funzione monotona su $(a, b)$ può avere una discontinuità essenziale
- c) una funzione monotona su $(a, b)$ può avere solo discontinuità a salto
- d) una funzione monotona su $(a, b)$ può avere discontinuità eliminabili

> [!example]- Soluzione
> **c**: è l'osservazione della slide 65. La a) cade con Heaviside o con la parte intera. La b) no, perché i laterali esistono finiti (slide 33). La d) no: se i laterali coincidono, $f(x_0)$ è chiuso fra sup a sinistra e inf a destra, quindi è uguale al limite.

**C4.** Il dominio di $\sqrt{\dfrac{x}{x^2 - 2}}$, su cui la funzione è continua, è:

- a) $[0, +\infty) \setminus \{\sqrt2\}$
- b) $\left(-\sqrt2, 0\right] \cup \left(\sqrt2, +\infty\right)$
- c) $\left[-\sqrt2, 0\right] \cup \left[\sqrt2, +\infty\right)$
- d) $\mathbb{R} \setminus \{\pm\sqrt2\}$

> [!example]- Soluzione
> **b** (esercizio 4 qui sotto, la disequazione lasciata dal prof il 20/10). La c) mette dentro $\pm\sqrt2$, dove il denominatore è $0$; la a) prende il dominio della radice esterna, $x \geq 0$, invece di $\frac{x}{x^2 - 2} \geq 0$; la d) è il dominio della frazione da sola.

## Esercizi (stile parte 2)

Dal più facile al livello del 30.

### Parametri e classificazione

**Esercizio 1.** Determinare $a \in \mathbb{R}$ tale che $f(x) = \begin{cases} x^2 + a & x \leq 1 \\ 2x + 3 & x > 1 \end{cases}$ sia continua su $\mathbb{R}$.

> [!example]- Soluzione
> **Come si riconosce**: funzione a tratti, un parametro, un punto di raccordo. Fuori da $1$ i due pezzi sono polinomi, continui.
>
> 1. $f(1) = 1 + a$ (vale la prima formula, perché $x \leq 1$).
> 2. $\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-}(x^2 + a) = 1 + a$ (continuità dei polinomi).
> 3. $\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+}(2x + 3) = 5$.
> 4. Continua in $1$ $\iff$ $1 + a = 5$ $\iff$ $a = 4$.
>
> Con $a \neq 4$ la discontinuità è a salto (laterali $1 + a$ e $5$, finiti e diversi), e $f$ è continua da sinistra. **Controllo** con $a = 4$: $f(0{,}99) = 4{,}9801$, $f(1{,}01) = 5{,}02$.

**Esercizio 2.** Determinare $a \in \mathbb{R}$ tale che $f(x) = \dfrac{\sin(ax)}{x}$ per $x \neq 0$, $f(0) = 3$, sia continua in $0$.

> [!example]- Soluzione
> 1. Se $a \neq 0$: $\frac{\sin(ax)}{x} = a \cdot \frac{\sin(ax)}{ax} \to a$, perché $ax \to 0$ (limite notevole del seno).
> 2. Se $a = 0$: $f(x) = \frac{\sin 0}{x} = 0$ per $x \neq 0$, e il limite è $0 = a$.
> 3. In ogni caso il limite è $a$; continua $\iff a = 3$. Con $a \neq 3$: eliminabile.

**Esercizio 3.** Classificare i punti di discontinuità di $f(x) = \lfloor x \rfloor$ e di $g(x) = \dfrac{|x|}{x}$ per $x \neq 0$, $g(0) = 1$.

> [!example]- Soluzione
> **$\lfloor x \rfloor$.** Su ogni $(n, n + 1)$ è costante, quindi continua. In $x_0 = n \in \mathbb{Z}$: $\lim_{x \to n^-}\lfloor x \rfloor = n - 1$, $\lim_{x \to n^+}\lfloor x \rfloor = n$: finiti e diversi, **salto** in ogni intero (continua da destra, perché $\lfloor n \rfloor = n$). È monotona: i salti sono gli unici possibili.
>
> **$g$.** Per $x > 0$ vale $1$, per $x < 0$ vale $-1$: laterali $1$ e $-1$, **salto** in $0$. Il valore $g(0) = 1$ la rende continua da destra, ma non cambia il tipo.

**Esercizio 4** (lasciato dal prof il 20/10, pagina 32). Risolvere $\dfrac{x}{x^2 - 2} \geq 0$, cioè trovare il dominio di $\sqrt{\frac{x}{x^2 - 2}}$.

> [!example]- Soluzione
> **Metodo**: disequazione fratta, tabella dei segni di numeratore e denominatore.
>
> 1. Numeratore $x \geq 0$ per $x \geq 0$.
> 2. Denominatore $x^2 - 2 > 0$ per $x < -\sqrt2$ o $x > \sqrt2$ (fuori dalle radici); si annulla in $\pm\sqrt2$, punti esclusi.
> 3. Tabella:
>
> | | $x < -\sqrt2$ | $-\sqrt2 < x < 0$ | $0$ | $0 < x < \sqrt2$ | $x > \sqrt2$ |
> | --- | --- | --- | --- | --- | --- |
> | $x$ | $-$ | $-$ | $0$ | $+$ | $+$ |
> | $x^2 - 2$ | $+$ | $-$ | $-$ | $-$ | $+$ |
> | frazione | $-$ | $+$ | $0$ | $-$ | $+$ |
>
> 4. La frazione è $\geq 0$ su $\left(-\sqrt2, 0\right] \cup \left(\sqrt2, +\infty\right)$ ($0$ incluso perché la frazione vale $0$).
>
> **Controllo**: $x = -1$: $\frac{-1}{-1} = 1 \geq 0$ sì; $x = 1$: $\frac{1}{-1} < 0$ no; $x = 2$: $\frac22 = 1$ sì.

**Esercizio 5** (lasciato dal prof il 20/10, slide 66: "dimostrato per casa"). Dimostrare che $\lim_{x \to 0^-}\sin\frac1x$ non esiste.

> [!example]- Soluzione
> **Metodo**: criterio delle due successioni ([Limiti di funzioni](/uni/analisi-1/limiti-di-funzioni/), slide 28), versione per il limite sinistro: successioni negative che tendono a $0$.
>
> 1. $x_n = -\frac{1}{n\pi}$: negativa, $\to 0$. $\sin\frac{1}{x_n} = \sin(-n\pi) = 0 \to 0$.
> 2. $y_n = -\frac{1}{\frac\pi2 + 2n\pi}$: negativa, $\to 0$. $\sin\frac{1}{y_n} = \sin\left(-\frac\pi2 - 2n\pi\right) = -\sin\left(\frac\pi2\right) = -1 \to -1$ (il seno è dispari e $2\pi$-periodico).
> 3. $0 \neq -1$: il limite sinistro non esiste. $\blacksquare$

### IV tutoraggio, esercizi 5 e 6

**Esercizio 6** (IV tutoraggio, es. 5.1). «Dopo aver provato che le seguenti funzioni sono definite su tutta la retta reale, studiarne la continuità e classificarne gli eventuali punti di non continuità»: $f(x) = \dfrac{\sqrt{1 - 2x + x^4}}{x + 1}$ per $x \neq -1$, $f(-1) = 2$.

> [!example]- Soluzione
> **Il testo ha un errore.** $1 - 2x + x^4$ **non** è $\geq 0$ su tutto $\mathbb{R}$: si scompone $x^4 - 2x + 1 = (x - 1)(x^3 + x^2 + x - 1)$, e il fattore cubico ha una radice $r \approx 0{,}544$. Per $x \in (r, 1)$ il prodotto è negativo: per esempio $x = 0{,}8$ dà $0{,}4096 - 1{,}6 + 1 = -0{,}19$. Quindi la funzione scritta non è definita su $(r, 1)$. Quasi certamente il testo voleva $\sqrt{1 - 2x^2 + x^4}$: lo suggerisce il valore $f(-1) = 2$, che con quella versione torna. Si svolgono tutte e due.
>
> **Versione voluta, $\sqrt{1 - 2x^2 + x^4}$.**
> 1. $1 - 2x^2 + x^4 = (1 - x^2)^2 \geq 0$: definita ovunque, e $\sqrt{(1 - x^2)^2} = |1 - x^2|$.
> 2. Per $x \neq -1$: $f(x) = \frac{|1 - x|\,|1 + x|}{x + 1}$, continua (composizioni e quozienti di continue, denominatore $\neq 0$).
> 3. In $-1$, da destra ($x + 1 > 0$): $\frac{|1 + x|}{1 + x} = 1$, quindi $f(x) = |1 - x| \to 2$.
> 4. Da sinistra ($x + 1 < 0$): $\frac{|1 + x|}{1 + x} = -1$, quindi $f(x) = -|1 - x| \to -2$.
> 5. Laterali $-2$ e $2$, finiti e diversi: **salto** in $-1$. Poiché $f(-1) = 2$, $f$ è continua da destra.
>
> **Controllo**: $f(-0{,}99) = 1{,}99$, $f(-1{,}01) = -2{,}01$.
>
> **Versione stampata.** Dominio $\left(-\infty, r\right] \cup [1, +\infty)$, continua lì tranne in $-1$. In $-1$ il numeratore tende a $\sqrt{1 + 2 + 1} = 2 > 0$ e il denominatore a $0^\pm$: laterali $+\infty$ (da destra) e $-\infty$ (da sinistra), **discontinuità essenziale**.

**Esercizio 7** (IV tutoraggio, es. 5.2). Stesso testo per $f(x) = \dfrac{\sin(x^2 - 2x + 1)}{\log^2(x^2)}$ per $x \neq \pm1$, $f(\pm1) = \frac14$.

> [!example]- Soluzione
> **Anche qui il testo non è esatto**: in $x = 0$ il logaritmo $\log(x^2) = \log 0$ non è definito, quindi $f$ non è definita su tutta la retta. Il dominio è $\mathbb{R} \setminus \{0\}$ (con $\pm1$ assegnati a parte). Vicino a $0$: $\log^2(x^2) \to +\infty$ e il numeratore $\to \sin 1$, quindi $f \to 0$: ponendo $f(0) = 0$ si prolungherebbe con continuità.
>
> **Fuori da $0, \pm1$**: $f$ è continua (composizioni di elementari, denominatore $\neq 0$ perché $\log(x^2) = 0 \iff x^2 = 1$).
>
> **In $x_0 = 1$.** Numeratore: $x^2 - 2x + 1 = (x - 1)^2$. Denominatore: $\log(x^2) = 2\log|x|$, quindi $\log^2(x^2) = 4\log^2|x|$. Vicino a $1$, $x > 0$ e $|x| = x$.
> 1. Pongo $t = x - 1 \to 0$. Allora $f = \frac{\sin(t^2)}{4\log^2(1 + t)}$.
> 2. $\sin(t^2) = \frac{\sin(t^2)}{t^2} \cdot t^2$ e $\log^2(1 + t) = \left(\frac{\log(1 + t)}{t}\right)^2 t^2$.
> 3. $f = \frac14 \cdot \frac{\frac{\sin(t^2)}{t^2}}{\left(\frac{\log(1 + t)}{t}\right)^2} \to \frac14 \cdot \frac{1}{1^2} = \frac14 = f(1)$.
> 4. **Continua** in $1$.
>
> **In $x_0 = -1$.** Numeratore: $(x - 1)^2 \to 4$, $\sin 4 \approx -0{,}757 < 0$. Denominatore: $4\log^2|x| \to 0^+$ (un quadrato, positivo per $x \neq \pm1$). Quindi $f \to -\infty$ da entrambi i lati: **discontinuità essenziale** in $-1$.
>
> **Controllo**: $f(1{,}001) \approx 0{,}2503$; $f(-1{,}001) \approx -1{,}9 \cdot 10^5$.

**Esercizio 8** (IV tutoraggio, es. 6.1). Determinare l'insieme di definizione e studiare la continuità, al variare di $\alpha > 0$, di $f(x) = \begin{cases} \frac1\pi\arctan\frac1x & x > 0 \\ \alpha(x + 1) & x \leq 0 \end{cases}$.

> [!example]- Soluzione
> 1. **Dominio**: $\mathbb{R}$ ($\frac1x$ è definita per $x > 0$, il polinomio ovunque).
> 2. Per $x > 0$ continua (composizione di $\frac1x$ e $\arctan$); per $x < 0$ continua (polinomio).
> 3. In $0$: $f(0) = \alpha$; $\lim_{x \to 0^-}\alpha(x + 1) = \alpha$, quindi continua da sinistra sempre.
> 4. Da destra: $y = \frac1x \to +\infty$, e $\arctan y \to \frac\pi2$ (limite di una monotona all'estremo); quindi $f \to \frac1\pi \cdot \frac\pi2 = \frac12$.
> 5. Continua in $0$ $\iff \alpha = \frac12$. Per $\alpha \neq \frac12$: **salto** (laterali $\alpha$ e $\frac12$).
>
> **Controllo**: $\frac1\pi\arctan(1000) \approx 0{,}4997$.

**Esercizio 9** (IV tutoraggio, es. 6.2, livello 30). Stesso testo per $f(x) = \begin{cases} \dfrac{\sin(\alpha\log(1 - \alpha x))}{x(\cos(2x) - 2)} & x < 0 \\[2mm] \sqrt{|2 - x - 2x^2|} & x \geq 0 \end{cases}$, $\alpha > 0$.

> [!example]- Soluzione
> **Dominio.**
> - $x < 0$: serve $1 - \alpha x > 0$; con $\alpha > 0$ e $x < 0$, $-\alpha x > 0$, quindi $1 - \alpha x > 1 > 0$ sempre. Denominatore: $x \neq 0$ (vero) e $\cos(2x) - 2 \leq 1 - 2 = -1 < 0$, mai nullo.
> - $x \geq 0$: il modulo è $\geq 0$, la radice è sempre definita.
> - Dominio: $\mathbb{R}$.
>
> **Continuità fuori da $0$**: composizioni, prodotti e quozienti di continue (per $x \geq 0$ anche nel punto $\frac{-1 + \sqrt{17}}{4} \approx 0{,}78$ dove $2 - x - 2x^2$ si annulla: il modulo e la radice sono continui, lì c'è solo uno spigolo).
>
> **In $0$.** $f(0) = \sqrt2$, e da destra $\sqrt{|2 - x - 2x^2|} \to \sqrt2$: continua da destra.
>
> Da sinistra:
> 1. $u = \alpha\log(1 - \alpha x) \to \alpha\log 1 = 0$. Allora $\sin u = \frac{\sin u}{u} \cdot u$, con $\frac{\sin u}{u} \to 1$ (per $x \neq 0$ vale $u \neq 0$).
> 2. $\log(1 - \alpha x) = \frac{\log(1 - \alpha x)}{-\alpha x} \cdot (-\alpha x)$, con la frazione $\to 1$ ($-\alpha x \to 0$).
> 3. Quindi il numeratore è $\frac{\sin u}{u} \cdot \alpha \cdot \frac{\log(1 - \alpha x)}{-\alpha x} \cdot (-\alpha x)$, che si comporta come $-\alpha^2 x$.
> 4. Il rapporto: $\frac{\frac{\sin u}{u} \cdot \frac{\log(1 - \alpha x)}{-\alpha x} \cdot (-\alpha^2 x)}{x(\cos(2x) - 2)} = \frac{\sin u}{u} \cdot \frac{\log(1 - \alpha x)}{-\alpha x} \cdot \frac{-\alpha^2}{\cos(2x) - 2}$ (semplifico $x$).
> 5. Limite: $1 \cdot 1 \cdot \frac{-\alpha^2}{1 - 2} = \alpha^2$.
>
> **Conclusione.** Continua in $0$ $\iff \alpha^2 = \sqrt2 \iff \alpha = 2^{1/4} = \sqrt[4]2$ (con $\alpha > 0$). Per $\alpha \neq \sqrt[4]2$: **salto** in $0$ (laterali $\alpha^2$ e $\sqrt2$), continua da destra.
>
> **Controllo**: con $\alpha = 1$, $f(-0{,}001) \approx 0{,}9995$, verso $\alpha^2 = 1$; con $\alpha = \sqrt[4]2$, $f(-0{,}001) \approx 1{,}4134$, verso $\sqrt2 \approx 1{,}4142$.

### Livello 30

**Esercizio 10.** Determinare $\alpha > 0$ tale che sia continua nel suo dominio
$$
f(x) = \begin{cases} \dfrac{\log(1 + \alpha x^2)}{1 - \cos x} & x > 0 \\[2mm] 2 & x = 0 \\[1mm] \dfrac{e^{(\alpha + 1)x} - 1}{\sin x} & x < 0 \end{cases}
$$
e classificare il punto $0$ per gli altri valori.

> [!example]- Soluzione
> **Come si riconosce**: è la struttura della slide 69, due pezzi con limiti notevoli diversi.
>
> **Dominio.** $x > 0$: $1 + \alpha x^2 > 0$ sempre; $1 - \cos x = 0 \iff x = 2k\pi$, esclusi per $k \geq 1$. $x < 0$: $\sin x = 0 \iff x = -k\pi$, esclusi per $k \geq 1$. Sul dominio i due pezzi sono continui (composizioni di elementari).
>
> **Da destra.** Con $\square = \alpha x^2 \to 0$ e $\square = x$:
> $$
> \frac{\log(1 + \alpha x^2)}{1 - \cos x} = \frac{\log(1 + \alpha x^2)}{\alpha x^2} \cdot \frac{x^2}{1 - \cos x} \cdot \alpha \to 1 \cdot 2 \cdot \alpha = 2\alpha
> $$
> ($\frac{x^2}{1 - \cos x} \to \frac{1}{1/2} = 2$).
>
> **Da sinistra.** Con $\square = (\alpha + 1)x \to 0$ ($\alpha + 1 > 0$):
> $$
> \frac{e^{(\alpha + 1)x} - 1}{\sin x} = \frac{e^{(\alpha + 1)x} - 1}{(\alpha + 1)x} \cdot \frac{x}{\sin x} \cdot (\alpha + 1) \to \alpha + 1
> $$
>
> **Condizione.** $2\alpha = \alpha + 1 = 2$: dalla prima $\alpha = 1$, e allora entrambi valgono $2 = f(0)$. **Continua solo per $\alpha = 1$.** Per $\alpha \neq 1$ i laterali $2\alpha$ e $\alpha + 1$ sono finiti e diversi: **salto**.
>
> **Controllo** con $\alpha = 1$: $f(0{,}001) \approx 1{,}9999992$ e $f(-0{,}001) \approx 1{,}998$.

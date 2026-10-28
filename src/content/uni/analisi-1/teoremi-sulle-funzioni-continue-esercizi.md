---
title: Teoremi sulle funzioni continue (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-21
lezioni: []
ordine: 17
---

Esercizi tipo esame di [Teoremi sulle funzioni continue](/uni/analisi-1/teoremi-sulle-funzioni-continue/), dove stanno enunciati, dimostrazioni del prof e metodo. Testo in chiaro, soluzione chiusa: prima provaci da solo. L'esercizio 3 è quello della slide 80, lasciato dal prof il 21/10; il 9 è il completamento di Bolzano-Weierstrass che il prof ha lasciato come esercizio.

## Crocette (stile parte 1)

**C1.** Quale funzione ha **sicuramente** massimo e minimo per il teorema di Weierstrass?

- a) $f(x) = \frac1x$ su $(0, 1]$
- b) $f(x) = \arctan x$ su $\mathbb{R}$
- c) $f(x) = x^3 - x$ su $[-2, 2]$
- d) $f(x) = \lfloor x \rfloor$ su $[0, 2]$

> [!example]- Soluzione
> **c**: polinomio, quindi continuo, su un intervallo chiuso e limitato. La a) ha l'intervallo non chiuso (e infatti $\frac1x \to +\infty$ per $x \to 0^+$: niente max). La b) ha l'intervallo illimitato. La d) non è continua (in $1$ e in $2$). Attenzione: la d) ha comunque max ($2$) e min ($0$), ma non "per Weierstrass".

**C2.** Sia $f : [0, 1] \to \mathbb{R}$ continua con $f(0) = 2$ e $f(1) = 5$. Allora:

- a) esiste $x \in (0, 1)$ con $f(x) = 0$
- b) esiste $x \in (0, 1)$ con $f(x) = 3$
- c) $f$ è crescente
- d) $\max f = 5$

> [!example]- Soluzione
> **b**: per i valori intermedi $f$ prende ogni valore fra $\inf f \leq 2$ e $\sup f \geq 5$, quindi anche $3$; e $x \neq 0, 1$ perché lì $f$ vale $2$ e $5$. Oppure: zeri applicato a $f(x) - 3$, che vale $-1$ e $2$. La a) non segue (la funzione potrebbe stare sempre sopra $0$); la c) e la d) neppure: $f$ potrebbe salire fino a $10$ e scendere a $5$.

**C3.** Sia $f(x) = \dfrac{1}{1 + x^2}$, $x \in \mathbb{R}$. Allora:

- a) $f$ ha massimo e minimo
- b) $f$ ha massimo ma non minimo
- c) $f$ ha minimo ma non massimo
- d) $f$ non ha né massimo né minimo

> [!example]- Soluzione
> **b**. $1 + x^2 \geq 1$, quindi $f(x) \leq 1 = f(0)$: massimo $1$, punto di massimo $0$. $f(x) > 0$ sempre e $f(x) \to 0$ per $x \to \pm\infty$: $\inf f = 0$, non preso, niente minimo. Weierstrass non si applica ($\mathbb{R}$ non è limitato), e infatti il minimo manca.

**C4.** Sia $f : [a, b] \to \mathbb{R}$ continua. L'insieme $f([a, b])$ è:

- a) un intervallo aperto
- b) un intervallo chiuso e limitato
- c) un insieme qualsiasi, purché limitato
- d) un intervallo, ma non necessariamente limitato

> [!example]- Soluzione
> **b**: $f([a, b]) = [m, M]$ per Weierstrass più valori intermedi (slide 78). Se $f$ è costante l'intervallo si riduce a un punto, $[m, m]$, che è ancora chiuso e limitato.

## Esercizi (stile parte 2)

Dal più facile al livello del 30.

### Zeri ed equazioni

**Esercizio 1.** Dimostrare che $x^5 + x - 1 = 0$ ha una soluzione in $(0, 1)$, e localizzarla in un intervallo lungo $\frac18$ con la bisezione.

> [!example]- Soluzione
> **Esistenza.** $f(x) = x^5 + x - 1$ è un polinomio, continuo su $[0, 1]$; $f(0) = -1 < 0$, $f(1) = 1 > 0$. Per il teorema degli zeri esiste $x_0 \in (0, 1)$ con $f(x_0) = 0$.
>
> **Bisezione** (tre passi: lunghezza $\frac{1}{2^3} = \frac18$).
>
> | $n$ | $a_n$ | $b_n$ | $c_n$ | $f(c_n)$ | si tiene |
> | --- | --- | --- | --- | --- | --- |
> | 0 | $0$ | $1$ | $0{,}5$ | $-0{,}469$ | $[0{,}5;\ 1]$ |
> | 1 | $0{,}5$ | $1$ | $0{,}75$ | $-0{,}013$ | $[0{,}75;\ 1]$ |
> | 2 | $0{,}75$ | $1$ | $0{,}875$ | $+0{,}388$ | $[0{,}75;\ 0{,}875]$ |
>
> Lo zero sta in $[0{,}75;\ 0{,}875]$, lungo $\frac18$. **Controllo**: lo zero vero è $\approx 0{,}8376$. In più è unico: $x^5 + x - 1$ è strettamente crescente (somma di strettamente crescenti).

**Esercizio 2.** Dimostrare che l'equazione $e^x = 3 - x$ ha esattamente una soluzione reale.

> [!example]- Soluzione
> 1. Porto tutto a sinistra: $h(x) = e^x + x - 3$, continua su $\mathbb{R}$.
> 2. $h(0) = 1 - 3 = -2 < 0$, $h(1) = e - 2 > 0$ (perché $e > 2$). Zeri su $[0, 1]$: almeno una soluzione in $(0, 1)$.
> 3. **Unicità**: $e^x$ e $x$ sono strettamente crescenti, quindi lo è $h$. Se $x_1 < x_2$ allora $h(x_1) < h(x_2)$: $h$ non può valere $0$ in due punti.
>
> **Controllo**: $h(0{,}79) \approx -0{,}007$, $h(0{,}8) \approx 0{,}026$: la soluzione è $\approx 0{,}792$.

**Esercizio 3** (slide 80, lasciato dal prof il 21/10). Sia $f : [2, 4] \to \mathbb{R}$ continua e tale che $f(2) = -1$, $f(4) = -3$. Dire se le seguenti equazioni ammettono almeno una soluzione in $[2, 4]$:

- a) $f(x) + \frac23 x = 0$
- b) $f(x) = -\dfrac{x}{x - 3}$
- c) $f(x) + \sin x = -4$
- d) $-4f(x) = x^2$

> [!example]- Soluzione
> **Come si riconosce**: si conosce $f$ solo agli estremi. L'unico strumento è il teorema degli zeri su $g(x) = $ (sinistra) $-$ (destra); quando non si applica, si cerca una $f$ per cui la soluzione c'è e una per cui non c'è.
>
> **a)** $g(x) = f(x) + \frac23 x$, continua su $[2, 4]$ (somma di continue). $g(2) = -1 + \frac43 = \frac13 > 0$; $g(4) = -3 + \frac83 = -\frac13 < 0$. **Sì**, per il teorema degli zeri, in $(2, 4)$.
>
> **b)** $-\frac{x}{x - 3}$ non è definita in $x = 3 \in [2, 4]$: $g(x) = f(x) + \frac{x}{x - 3}$ non è continua su $[2, 4]$ e il teorema **non** si applica. Sui due pezzi: su $[2, 3)$ $g(2) = -1 - 2 = -3 < 0$ e $g \to -\infty$ per $x \to 3^-$; su $(3, 4]$ $g \to +\infty$ per $x \to 3^+$ e $g(4) = -3 + 4 = 1 > 0$. Nessun cambio di segno garantito. **Non si può dire**, dipende da $f$:
> - con $f(x) = 1 - x$ (continua, $f(2) = -1$, $f(4) = -3$) l'equazione diventa $(1 - x)(x - 3) = -x$, cioè $x^2 - 5x + 3 = 0$, con soluzioni $\frac{5 \pm \sqrt{13}}{2} \approx 0{,}70$ e $4{,}30$: nessuna in $[2, 4]$;
> - con una $f$ continua che vale $5$ in $2{,}5$ (per esempio spezzata da $(2, -1)$ a $(2{,}5;\ 5)$ a $(4, -3)$), $x = 2{,}5$ è soluzione: $-\frac{2{,}5}{-0{,}5} = 5$.
>
> **c)** $g(x) = f(x) + \sin x + 4$, continua. $g(2) = 3 + \sin 2 \approx 3{,}91 > 0$; $g(4) = 1 + \sin 4 \approx 0{,}24 > 0$. Stesso segno: il teorema tace. **Non si può dire**:
> - con $f(x) = 1 - x$: $g(x) = 5 - x + \sin x$ è decrescente ($-x + \sin x$ lo è) e il minimo su $[2, 4]$ è $g(4) \approx 0{,}24 > 0$: nessuna soluzione;
> - con una $f$ che scende a $-10$ in $x = 3$: $g(3) = -10 + \sin 3 + 4 < 0$, e allora $g$ cambia segno su $[2, 3]$: c'è una soluzione.
>
> **d)** $g(x) = -4f(x) - x^2$. $g(2) = 4 - 4 = 0$: **sì**, $x = 2$ è soluzione ($-4f(2) = 4 = 2^2$). Non serve il teorema.
>
> **La lezione**: "il teorema non si applica" o "stesso segno" vuol dire "non si può dire", non "nessuna soluzione". Per rispondere "no" con certezza bisognerebbe conoscere $f$.

**Esercizio 4.** Dimostrare che $x^3 - 5x + 1 = 0$ ha tre soluzioni reali distinte.

> [!example]- Soluzione
> **Metodo**: trovare tre intervalli disgiunti agli estremi dei quali il polinomio cambia segno.
>
> $f(x) = x^3 - 5x + 1$, continua su $\mathbb{R}$. Valori:
>
> | $x$ | $-3$ | $0$ | $1$ | $3$ |
> | --- | --- | --- | --- | --- |
> | $f(x)$ | $-27 + 15 + 1 = -11$ | $1$ | $1 - 5 + 1 = -3$ | $27 - 15 + 1 = 13$ |
>
> Tre cambi di segno: zeri in $(-3, 0)$, $(0, 1)$, $(1, 3)$, intervalli disgiunti, quindi tre soluzioni distinte. Un polinomio di grado $3$ ne ha al più $3$: sono tutte. **Controllo**: $\approx -2{,}330$, $0{,}202$, $2{,}128$.

### Massimi, minimi e immagine

**Esercizio 5.** Trovare massimo, minimo e immagine di $f(x) = |x - 1|$ su $[-1, 2]$ e di $g(x) = x^2 - 2x$ su $[0, 3]$.

> [!example]- Soluzione
> Entrambe continue su un intervallo chiuso e limitato: per Weierstrass max e min esistono e l'immagine è $[m, M]$.
>
> **$f$.** $|x - 1| \geq 0$, con $0$ in $x = 1 \in [-1, 2]$: $m = 0$. Il modulo è la distanza da $1$: il punto più lontano in $[-1, 2]$ è $-1$, a distanza $2$; $M = 2$. Immagine $[0, 2]$.
>
> **$g$.** $x^2 - 2x = (x - 1)^2 - 1$ (completo il quadrato): $\geq -1$, con $-1$ in $x = 1$; $m = -1$. $(x - 1)^2$ è massimo dove $|x - 1|$ è massimo, cioè in $x = 3$: $M = 4 - 1 = 3$. Immagine $[-1, 3]$.
>
> **Controllo**: $g(0) = 0$, $g(1) = -1$, $g(3) = 3$.

### Livello 30

**Esercizio 6** (punto fisso). Sia $f : [0, 1] \to [0, 1]$ continua. Dimostrare che esiste $x_0 \in [0, 1]$ con $f(x_0) = x_0$.

> [!example]- Soluzione
> **Come si riconosce**: "esiste $x$ con $f(x) = x$" è un'equazione $f(x) = g(x)$ con $g(x) = x$: slide 74.
>
> 1. $h(x) = f(x) - x$, continua su $[0, 1]$.
> 2. $h(0) = f(0) \geq 0$ (perché $f(0) \in [0, 1]$); $h(1) = f(1) - 1 \leq 0$.
> 3. Se $h(0) = 0$ il punto fisso è $0$; se $h(1) = 0$ è $1$.
> 4. Altrimenti $h(0) > 0 > h(1)$: per il teorema degli zeri esiste $x_0 \in (0, 1)$ con $h(x_0) = 0$. $\blacksquare$
>
> Il punto 3 serve perché il teorema chiede segni **strettamente** opposti.

**Esercizio 7** (corda orizzontale). Sia $f : [0, 1] \to \mathbb{R}$ continua con $f(0) = f(1)$. Dimostrare che esiste $c \in \left[0, \frac12\right]$ con $f(c) = f\left(c + \frac12\right)$.

> [!example]- Soluzione
> 1. $g(x) = f\left(x + \frac12\right) - f(x)$ su $\left[0, \frac12\right]$: continua (composizione e differenza di continue; $x + \frac12 \in [0, 1]$).
> 2. $g(0) = f\left(\frac12\right) - f(0)$; $g\left(\frac12\right) = f(1) - f\left(\frac12\right) = f(0) - f\left(\frac12\right) = -g(0)$.
> 3. Se $g(0) = 0$, $c = 0$ va bene. Altrimenti $g(0)$ e $g\left(\frac12\right)$ hanno segni opposti, e per il teorema degli zeri c'è $c \in \left(0, \frac12\right)$ con $g(c) = 0$. $\blacksquare$
>
> Interpretazione: se un percorso parte e arriva alla stessa quota, c'è un tratto lungo metà del tempo che inizia e finisce alla stessa quota.

**Esercizio 8.** Dimostrare che ogni polinomio di grado dispari ha almeno uno zero reale.

> [!example]- Soluzione
> Sia $p(x) = a_n x^n + \dots + a_0$ con $n$ dispari; posso supporre $a_n > 0$ (altrimenti si studia $-p$, che ha gli stessi zeri).
> 1. Raccolgo: $p(x) = x^n\left(a_n + \frac{a_{n-1}}{x} + \dots + \frac{a_0}{x^n}\right)$ per $x \neq 0$. La parentesi tende a $a_n > 0$ per $x \to \pm\infty$.
> 2. $n$ dispari: $x^n \to +\infty$ per $x \to +\infty$ e $x^n \to -\infty$ per $x \to -\infty$. Quindi $p(x) \to +\infty$ e $p(x) \to -\infty$ (algebra dei limiti).
> 3. Permanenza del segno: esiste $b$ con $p(b) > 0$ ed esiste $a < b$ con $p(a) < 0$.
> 4. $p$ è continuo su $[a, b]$: per il teorema degli zeri ha uno zero in $(a, b)$. $\blacksquare$
>
> Con grado pari non vale: $x^2 + 1$ non ha zeri reali.

**Esercizio 9** (lasciato dal prof il 21/10: "completare la dimostrazione" di Bolzano-Weierstrass, caso 2). Sia $(x_n)$ con valori in $[a, b]$ e $\{x_n\}$ infinito. Costruire una sottosuccessione convergente.

> [!example]- Soluzione
> **Idea del prof**: dimezzare l'intervallo tenendo sempre la metà con infiniti termini, come nella bisezione.
>
> 1. $I_0 = [a, b]$ contiene infiniti termini. Divido a metà: una delle due metà contiene infiniti termini (altrimenti l'unione ne conterrebbe finiti). La chiamo $I_1$, lunga $\frac{b - a}{2}$.
> 2. Ripeto: $I_{k+1} \subseteq I_k$ è una metà di $I_k$ con infiniti termini, lunga $\frac{b - a}{2^{k+1}}$.
> 3. **La sottosuccessione**: scelgo $n_0$ con $x_{n_0} \in I_0$; poi $n_1 > n_0$ con $x_{n_1} \in I_1$ (esiste perché in $I_1$ ci sono infiniti termini, quindi infiniti indici, e se ne trova uno $> n_0$); in generale $n_{k+1} > n_k$ con $x_{n_{k+1}} \in I_{k+1}$. Gli indici crescono strettamente: è una sottosuccessione.
> 4. **Converge**: sia $I_k = [\alpha_k, \beta_k]$. $\alpha_k$ è crescente e $\beta_k$ decrescente, entrambe limitate: convergono (successioni monotone). $\beta_k - \alpha_k = \frac{b - a}{2^k} \to 0$, quindi hanno lo stesso limite $L$.
> 5. $\alpha_k \leq x_{n_k} \leq \beta_k$, quindi per i carabinieri $x_{n_k} \to L$. $\blacksquare$
>
> Il passo 3 è quello delicato: serve "infiniti termini", non "infiniti valori", per poter scegliere un indice più grande del precedente.

---
title: Limiti di funzioni (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-14
lezioni: []
ordine: 11
---

Esercizi tipo esame di [Limiti di funzioni](/uni/analisi-1/limiti-di-funzioni/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** L'insieme dei punti di accumulazione di $E = (0, 1) \cup \{2\} \cup \left\{3 + \frac1n : n \geq 1\right\}$ è:

- a) $[0, 1] \cup \{2, 3\}$
- b) $[0, 1] \cup \{3\}$
- c) $(0, 1) \cup \{3\}$
- d) $[0, 1]$

> [!example]- Soluzione
> **b**. $[0, 1]$: tutti i punti di $(0, 1)$ e i due estremi, che non stanno in $E$ ma sono di accumulazione. $2$ è isolato: con $\delta = \frac12$ l'intorno $(1{,}5;\ 2{,}5)$ contiene solo $2$. I punti $3 + \frac1n$ sono isolati come i $\frac1n$ dell'esempio della slide 6, e il loro limite $3$ è di accumulazione (anche se $3 \notin E$): per ogni $\delta$, $3 + \frac1n \in (3, 3 + \delta)$ appena $n > \frac1\delta$. La a) mette dentro $2$ perché sta in $E$; la c) dimentica gli estremi.

**C2.** Quale scrittura è la definizione di $\displaystyle\lim_{x \to -\infty} f(x) = +\infty$?

- a) $\forall M > 0\ \exists K > 0 : \forall x \in D,\ x < -K \Rightarrow f(x) > M$
- b) $\exists M > 0\ \forall K > 0 : \forall x \in D,\ x < -K \Rightarrow f(x) > M$
- c) $\forall M > 0\ \exists K > 0 : \forall x \in D,\ x > K \Rightarrow f(x) > M$
- d) $\forall K > 0\ \exists M > 0 : \forall x \in D,\ x < -K \Rightarrow f(x) > M$

> [!example]- Soluzione
> **a**: per ogni soglia $M$ c'è un intorno $(-\infty, -K)$ di $-\infty$ dove $f$ sta sopra $M$. La c) è $x \to +\infty$. La b) e la d) hanno i quantificatori nell'ordine sbagliato, e sono vere anche per $f(x) = 1$, che non tende a $+\infty$: con $M = \frac12$ la b) dice “$f(x) > \frac12$ per ogni $x < 0$", e la d) dice "su ogni semiretta $f$ supera un certo $M$". Nella definizione giusta è $M$ a essere arbitrario, e $K$ si adatta a $M$.

**C3** (dal foglio 4 del 2022, esercizio 7.6). Il limite $\displaystyle\lim_{x \to 1} \frac{|x| - 1}{|x - 1|}$:

- a) vale $0$
- b) vale $1$
- c) non esiste
- d) vale $+\infty$

> [!example]- Soluzione
> **c**. Vicino a $1$ si ha $x > 0$, quindi $|x| = x$ e la funzione è $\frac{x - 1}{|x - 1|}$. Da destra ($x > 1$): $|x - 1| = x - 1$ e il rapporto vale $1$. Da sinistra ($x < 1$): $|x - 1| = -(x - 1)$ e il rapporto vale $-1$. Limite destro $1$, sinistro $-1$: il limite non esiste. La b) guarda solo da destra.

**C4** (dal foglio 4 del 2022, esercizio 7.5). Il limite $\displaystyle\lim_{x \to +\infty} \frac{|x| - 1}{|x - 1|}$:

- a) vale $0$
- b) vale $1$
- c) non esiste
- d) vale $+\infty$

> [!example]- Soluzione
> **b**. Per $x > 1$: $|x| = x$ e $|x - 1| = x - 1$, quindi la funzione vale esattamente $\frac{x - 1}{x - 1} = 1$. Con $K = 1$, per $x > K$ si ha $|f(x) - 1| = 0 < \varepsilon$. Confronta con la C3: stessa funzione, punto diverso, risposta diversa.

**C5** (★, slide 27). Sia $f : \mathbb{R} \to \mathbb{R}$. Quale affermazione è equivalente a $\lim_{x \to 0} f(x) = 3$?

- a) $f\left(\frac1n\right) \to 3$
- b) $f(x_n) \to 3$ per ogni successione $x_n \to 0$ con $x_n \neq 0$
- c) $f(x_n) \to 3$ per almeno due successioni diverse $x_n \to 0$
- d) $f(0) = 3$

> [!example]- Soluzione
> **b**, il teorema della slide 27. La a) è una sola successione: $f(x) = 3$ per $x > 0$ e $f(x) = 0$ per $x \leq 0$ la soddisfa ma non ha limite in $0$. La c) non basta per lo stesso motivo (prendi $\frac1n$ e $\frac2n$). La d) riguarda il valore nel punto, che per il limite è irrilevante.

**C6.** Quale scrittura significa “$\displaystyle\lim_{x \to x_0} f(x) = \ell$ è **falso**"?

- a) $\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D,\ 0 < |x - x_0| < \delta : |f(x) - \ell| \geq \varepsilon$
- b) $\exists \varepsilon > 0\ \forall \delta > 0\ \exists x \in D,\ 0 < |x - x_0| < \delta : |f(x) - \ell| \geq \varepsilon$
- c) $\exists \varepsilon > 0\ \exists \delta > 0\ \forall x \in D,\ 0 < |x - x_0| < \delta : |f(x) - \ell| \geq \varepsilon$
- d) $\forall \varepsilon > 0\ \forall \delta > 0\ \exists x \in D,\ 0 < |x - x_0| < \delta : |f(x) - \ell| < \varepsilon$

> [!example]- Soluzione
> **b**: si nega un quantificatore alla volta da sinistra ($\forall \varepsilon$ diventa $\exists \varepsilon$, $\exists \delta$ diventa $\forall \delta$, $\forall x$ diventa $\exists x$) e poi la condizione finale ($<$ diventa $\geq$). La condizione $0 < |x - x_0| < \delta$ non si nega: dice **dove** si prende $x$, non cosa deve succedere. La a) e la c) chiedono che $f$ stia lontana da $\ell$ su tutto un intorno, troppo forte: la funzione segno non tende a $1$ in $0$, ma da destra vale proprio $1$, quindi a) e c) sono false per lei. La d) è vera anche quando il limite **è** $\ell$.

**C7.** Quale di queste funzioni è continua in $x_0 = 0$?

- a) $\mathrm{sgn}\,x$
- b) $|x|$
- c) $\lfloor x \rfloor$
- d) $f(x) = \frac1x$ per $x \neq 0$, $f(0) = 0$

> [!example]- Soluzione
> **b**. $\big||x| - |0|\big| = |x| < \varepsilon$ con $\delta = \varepsilon$: limite $0 = f(0)$. La a) ha limiti laterali $1$ e $-1$. La c) ha $\lim_{x \to 0^-}\lfloor x \rfloor = -1$ (per $x \in (-1, 0)$ la parte intera è $-1$) e $\lim_{x \to 0^+}\lfloor x \rfloor = 0 = \lfloor 0 \rfloor$: è continua solo da destra. La d) ha i limiti laterali infiniti (slide 19): dare un valore in $0$ non ripara niente.

**C8.** Per verificare con la definizione che $\displaystyle\lim_{x \to 2}(5x - 3) = 7$, dato $\varepsilon > 0$, quale $\delta$ funziona?

- a) $\delta = 5\varepsilon$
- b) $\delta = \varepsilon + 5$
- c) $\delta = \frac\varepsilon5$
- d) $\delta = \frac{\varepsilon}{|x - 2|}$

> [!example]- Soluzione
> **c**. $|5x - 3 - 7| = |5x - 10| = 5|x - 2| < 5\delta = \varepsilon$. La a) dà $5|x - 2| < 25\varepsilon$, troppo grande: con $\varepsilon = 1$ e $\delta = 5$ il punto $x = 6$ dà $|f(x) - 7| = 20$. La b) non si stringe quando $\varepsilon \to 0$. La d) dipende da $x$, e $\delta$ va scelto **prima** di prendere $x$ (esercizio 1).

**C9.** L'insieme dei punti di accumulazione di $(0, 1) \cap \mathbb{Q}$ è:

- a) $\emptyset$, perché fra due razionali ci sono degli irrazionali
- b) $(0, 1) \cap \mathbb{Q}$
- c) $[0, 1] \cap \mathbb{Q}$
- d) $[0, 1]$

> [!example]- Soluzione
> **d**. Dato $x_0 \in [0, 1]$ e $\delta > 0$, l'intervallo $(x_0, x_0 + \delta) \cap (0, 1)$ (o $(x_0 - \delta, x_0)$ se $x_0 = 1$) è un intervallo non vuoto, e per la densità di $\mathbb{Q}$ ([Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/)) contiene un razionale, diverso da $x_0$. Anche gli irrazionali di $[0, 1]$ sono di accumulazione: per esserlo non serve stare nell'insieme. La a) confonde "ci sono buchi" con "i punti sono lontani": i buchi sono ovunque, ma i razionali sono ovunque anch'essi. La b) e la c) dimenticano gli irrazionali.

**C10** (dal foglio 4 del 2022, esercizio 3 (ii)). Il limite $\displaystyle\lim_{x \to +\infty}\frac{\sin x}{x}$:

- a) vale $0$
- b) vale $1$
- c) non esiste, perché $\sin x$ non ha limite
- d) vale $+\infty$

> [!example]- Soluzione
> **a**. Per $x > 0$: $\left|\frac{\sin x}{x}\right| \leq \frac1x$ (perché $|\sin x| \leq 1$), e $\frac1x < \varepsilon$ per $x > \frac1\varepsilon$: con $K = \frac1\varepsilon$ la definizione è verificata. La c) è l'errore di [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/): un fattore senza limite può essere schiacciato da uno infinitesimo. La b) confonde con il limite notevole $\frac{\sin x}{x} \to 1$ per $x \to 0$ (sezione 4.6, non ancora fatta): il punto è diverso. *Verifica*: $\frac{\sin 100}{100} \approx -0{,}005$.

## Esercizi (stile parte 2)

Dal più facile al livello del 30, divisi per tipo. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo.

### Verifiche con la definizione: limite finito in un punto

**Esercizio 1.** Verificare con la definizione che $\displaystyle\lim_{x \to 2}(5x - 3) = 7$.

> [!example]- Soluzione
> **Come si riconosce**: "con la definizione", limite finito in un punto finito, funzione lineare. **Perché è il caso facile**: $|f(x) - \ell|$ è già un multiplo di $|x - 2|$, nessun fattore da maggiorare.
>
> 1. Fisso $\varepsilon > 0$ e scrivo la condizione: $|5x - 3 - 7| < \varepsilon$.
> 2. Semplifico: $|5x - 3 - 7| = |5x - 10|$.
> 3. Raccolgo $5$: $|5x - 10| = |5(x - 2)| = 5|x - 2|$ (modulo del prodotto).
> 4. $5|x - 2| < \varepsilon \iff |x - 2| < \frac\varepsilon5$ (divido per $5 > 0$).
> 5. Scelgo $\delta = \frac\varepsilon5$: per $0 < |x - 2| < \delta$ vale $|f(x) - 7| = 5|x - 2| < 5\delta = \varepsilon$. $\blacksquare$
>
> **Controllo.** $\varepsilon = 0{,}1$, $\delta = 0{,}02$: $x = 2{,}019$ dà $5 \cdot 2{,}019 - 3 = 7{,}095$, distante $0{,}095 < 0{,}1$ da $7$. In generale, per una funzione lineare $mx + q$ con $m \neq 0$ si trova sempre $\delta = \frac{\varepsilon}{|m|}$: più la retta è ripida, più $\delta$ è piccolo.

**Esercizio 2.** Verificare con la definizione che $\displaystyle\lim_{x \to 3} x^2 = 9$.

> [!example]- Soluzione
> **Come si riconosce**: "con la definizione", limite finito in un punto finito. Si deve trovare $\delta$ dato $\varepsilon$. Rispetto a $x^2$ in $0$ c'è una difficoltà: $|x^2 - 9|$ non è un multiplo di $|x - 3|$.
>
> **Passo 1, fattorizzo.** $|x^2 - 9| = |(x - 3)(x + 3)| = |x - 3| \cdot |x + 3|$.
>
> **Passo 2, tengo sotto controllo $|x + 3|$.** Il fattore $|x + 3|$ dipende da $x$. Decido di prendere comunque $\delta \leq 1$: allora $|x - 3| < 1$, cioè $2 < x < 4$, e quindi $5 < x + 3 < 7$, cioè $|x + 3| < 7$.
>
> **Passo 3, stimo.** Per $0 < |x - 3| < \delta$ con $\delta \leq 1$:
> $$
> |x^2 - 9| = |x - 3| \cdot |x + 3| < \delta \cdot 7
> $$
>
> **Passo 4, scelgo $\delta$.** Voglio $7\delta \leq \varepsilon$, cioè $\delta \leq \frac\varepsilon7$, e anche $\delta \leq 1$. Quindi
> $$
> \delta = \min\left\{1, \frac\varepsilon7\right\}
> $$
> Con questo $\delta$: $|x^2 - 9| < 7\delta \leq 7 \cdot \frac\varepsilon7 = \varepsilon$. $\blacksquare$
>
> **Controllo.** $\varepsilon = 0{,}7$: $\delta = 0{,}1$. $x = 3{,}09$ dà $x^2 = 9{,}5481$, e $|9{,}5481 - 9| = 0{,}5481 < 0{,}7$. Il $\min$ serve: con $\varepsilon = 70$ sarebbe $\frac\varepsilon7 = 10$, ma con $\delta = 10$ il passo 2 non vale più.
>
> Confronto con il $\delta$ "esatto" della figura "Delta dal grafico": con $\varepsilon = 2$ il $\delta$ più grande possibile è $\sqrt{11} - 3 \approx 0{,}317$, qui troviamo $\min\left\{1, \frac27\right\} \approx 0{,}286$. Più piccolo, quindi va bene: la definizione chiede che un $\delta$ esista, non il migliore.

**Esercizio 3.** Verificare con la definizione che $\displaystyle\lim_{x \to 4}\sqrt x = 2$.

> [!example]- Soluzione
> **Come si riconosce**: limite finito in un punto, con una radice. **Perché razionalizzare**: $|\sqrt x - 2|$ non contiene $|x - 4|$ in modo visibile; moltiplicando e dividendo per $\sqrt x + 2$ (la stessa idea delle forme $\sqrt{n+1} - \sqrt n$ in [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)) compare $x - 4$ al numeratore.
>
> Dominio $D = [0, +\infty)$, e $4$ è di accumulazione. Fisso $\varepsilon > 0$.
> 1. Razionalizzo: $\sqrt x - 2 = \frac{(\sqrt x - 2)(\sqrt x + 2)}{\sqrt x + 2} = \frac{x - 4}{\sqrt x + 2}$ (prodotto notevole $(a - b)(a + b) = a^2 - b^2$; il denominatore è $\geq 2 > 0$).
> 2. Modulo: $|\sqrt x - 2| = \frac{|x - 4|}{\sqrt x + 2}$.
> 3. Minoro il denominatore: $\sqrt x \geq 0$, quindi $\sqrt x + 2 \geq 2$, e dividere per un numero più grande dà un risultato più piccolo: $\frac{|x - 4|}{\sqrt x + 2} \leq \frac{|x - 4|}{2}$.
> 4. Voglio $\frac{|x - 4|}{2} < \varepsilon$, cioè $|x - 4| < 2\varepsilon$.
> 5. Scelgo $\delta = 2\varepsilon$: per $x \in D$ con $0 < |x - 4| < \delta$ vale $|\sqrt x - 2| \leq \frac{|x - 4|}{2} < \frac{2\varepsilon}{2} = \varepsilon$. $\blacksquare$
>
> Qui il $\min$ con $1$ non serve: la stima del passo 3 vale per **ogni** $x \geq 0$, non solo vicino a $4$. Se $\delta > 4$ l'intervallo $(4 - \delta, 4 + \delta)$ contiene numeri negativi, ma la definizione guarda solo $x \in D$.
>
> **Controllo.** $\varepsilon = 0{,}1$, $\delta = 0{,}2$: $x = 4{,}19$ dà $\sqrt{4{,}19} \approx 2{,}047$, distante $0{,}047 < 0{,}1$.

**Esercizio 4.** Verificare con la definizione che $\displaystyle\lim_{x \to 2}\frac1x = \frac12$.

> [!example]- Soluzione
> **Come si riconosce**: limite finito in un punto, con $x$ al denominatore. **Perché il trucco del $\min$**: dopo il denominatore comune resta un fattore $\frac{1}{|x|}$, che esplode vicino a $0$. Bisogna tenere $x$ lontano da $0$ restringendo $\delta$.
>
> Fisso $\varepsilon > 0$.
> 1. Denominatore comune: $\frac1x - \frac12 = \frac{2 - x}{2x}$.
> 2. Modulo: $\left|\frac1x - \frac12\right| = \frac{|x - 2|}{2|x|}$ (perché $|2 - x| = |x - 2|$).
> 3. Restringo: prendo $\delta \leq 1$. Allora $|x - 2| < 1$, cioè $1 < x < 3$, e in particolare $|x| = x > 1$.
> 4. Maggioro: $\frac{1}{2|x|} < \frac{1}{2 \cdot 1} = \frac12$ (denominatore più grande di $2$, frazione più piccola di $\frac12$). Quindi $\left|\frac1x - \frac12\right| < \frac{|x - 2|}{2}$.
> 5. Voglio $\frac{|x - 2|}{2} \leq \varepsilon$: basta $|x - 2| < 2\varepsilon$.
> 6. Le due richieste insieme: $\delta = \min\{1, 2\varepsilon\}$. Per $0 < |x - 2| < \delta$: $\left|\frac1x - \frac12\right| < \frac{\delta}{2} \leq \frac{2\varepsilon}{2} = \varepsilon$. $\blacksquare$
>
> **Perché proprio $\delta \leq 1$.** Serve un intervallo attorno a $2$ che non contenga $0$, così $|x|$ resta lontano da $0$. Con $\delta \leq 1$ si ha $x > 1$; con $\delta \leq \frac12$ si avrebbe $x > \frac32$ e $\delta = \min\left\{\frac12, 3\varepsilon\right\}$: anche questo va bene. Con $\delta \leq 2$ invece $x$ potrebbe essere vicino a $0$ e la stima del passo 4 salterebbe.
>
> **Controllo.** $\varepsilon = 0{,}05$, $\delta = 0{,}1$: $x = 1{,}91$ dà $\frac{1}{1{,}91} \approx 0{,}5236$, distante $0{,}0236 < 0{,}05$.

**Esercizio 5** (livello 30). Verificare con la definizione che $\displaystyle\lim_{x \to -1}\frac{x^2 + 2x}{x - 1} = \frac12$.

> [!example]- Soluzione
> **Come si riconosce**: limite finito in un punto, funzione razionale. **Il metodo**: denominatore comune, fattorizzare il numeratore per far comparire $x + 1 = x - (-1)$, poi trucco del $\min$ per **due** fattori che dipendono da $x$, uno sopra e uno sotto.
>
> Dominio $x \neq 1$; $-1$ è di accumulazione. Prima un controllo che il valore proposto sia sensato: in $x = -1$ la formula dà $\frac{1 - 2}{-2} = \frac12$. Fisso $\varepsilon > 0$.
> 1. Denominatore comune: $\frac{x^2 + 2x}{x - 1} - \frac12 = \frac{2(x^2 + 2x) - (x - 1)}{2(x - 1)} = \frac{2x^2 + 3x + 1}{2(x - 1)}$.
> 2. Fattorizzo il numeratore: deve annullarsi in $x = -1$ (infatti $2 - 3 + 1 = 0$), quindi ha il fattore $x + 1$. Le radici di $2x^2 + 3x + 1$ sono $\frac{-3 \pm \sqrt{9 - 8}}{4}$, cioè $-1$ e $-\frac12$: $2x^2 + 3x + 1 = 2(x + 1)\left(x + \frac12\right) = (x + 1)(2x + 1)$.
> 3. Modulo: $\left|f(x) - \frac12\right| = \frac{|x + 1| \cdot |2x + 1|}{2|x - 1|}$.
> 4. Restringo: $\delta \leq 1$, quindi $|x + 1| < 1$, cioè $-2 < x < 0$.
> 5. Maggioro il numeratore: da $-2 < x < 0$ segue $-4 < 2x < 0$ e $-3 < 2x + 1 < 1$, quindi $|2x + 1| < 3$.
> 6. Minoro il denominatore: da $-2 < x < 0$ segue $-3 < x - 1 < -1$, quindi $|x - 1| > 1$ e $2|x - 1| > 2$.
> 7. Insieme: $\left|f(x) - \frac12\right| < \frac{|x + 1| \cdot 3}{2} = \frac32|x + 1|$.
> 8. Voglio $\frac32 \delta \leq \varepsilon$, cioè $\delta \leq \frac{2\varepsilon}{3}$. Con anche $\delta \leq 1$:
> $$
> \delta = \min\left\{1, \frac{2\varepsilon}{3}\right\}
> $$
> Per $0 < |x + 1| < \delta$: $\left|f(x) - \frac12\right| < \frac32\delta \leq \varepsilon$. $\blacksquare$
>
> **Controllo.** $\varepsilon = 0{,}03$, $\delta = 0{,}02$: $x = -0{,}981$ dà $\frac{0{,}9624 - 1{,}962}{-1{,}981} \approx 0{,}5046$, distante $0{,}0046 < 0{,}03$. Al computer, su tutto l'intorno $(-1{,}02;\ -0{,}98)$ la distanza massima da $\frac12$ è circa $0{,}005$: la stima è larga, ma è una stima e basta che funzioni.
>
> **Dove si sbaglia**: al passo 6 bisogna **minorare** il denominatore (serve che sia grande), non maggiorarlo. E al passo 2 il fattore $x + 1$ deve esserci: se non c'è, il valore proposto per il limite è sbagliato.

### Verifiche con la definizione: limiti infiniti e all'infinito

**Esercizio 6.** Verificare con la definizione che $\displaystyle\lim_{x \to 2}\frac{3}{(x - 2)^2} = +\infty$. Qual è l'asintoto verticale?

> [!example]- Soluzione
> **Come si riconosce**: limite $+\infty$ in un punto finito: dato $M$, si cerca $\delta$. È la slide 17 traslata di $2$ e moltiplicata per $3$.
>
> Dominio $x \neq 2$. Fisso $M > 0$.
> 1. $\frac{3}{(x - 2)^2} > M \iff (x - 2)^2 < \frac3M$ (moltiplico per $\frac{(x-2)^2}{M} > 0$).
> 2. $\iff |x - 2| < \sqrt{\frac3M}$ (radice di due membri positivi; $\sqrt{(x-2)^2} = |x - 2|$).
> 3. Scelgo $\delta = \sqrt{\frac3M}$. $\blacksquare$
>
> Asintoto verticale: la retta $x = 2$, da entrambi i lati.
>
> **Controllo.** $M = 300$: $\delta = \sqrt{0{,}01} = 0{,}1$. $x = 2{,}05$ dà $\frac{3}{0{,}0025} = 1200 > 300$; $x = 1{,}95$ lo stesso (il quadrato non vede il segno).

**Esercizio 7.** Verificare con la definizione che $\displaystyle\lim_{x \to +\infty} \frac{2x + 1}{x + 1} = 2$. Qual è l'asintoto orizzontale?

> [!example]- Soluzione
> **Come si riconosce**: limite finito per $x \to +\infty$: dato $\varepsilon$, si cerca $K$.
>
> Dominio: $x \neq -1$, illimitato superiormente. Per $x > 0$ (andrà bene, perché $K > 0$):
> $$
> \left|\frac{2x + 1}{x + 1} - 2\right| = \left|\frac{2x + 1 - 2(x + 1)}{x + 1}\right| = \left|\frac{-1}{x + 1}\right| = \frac{1}{x + 1}
> $$
> (denominatore comune; poi $x + 1 > 0$). Ora
> $$
> \frac{1}{x + 1} < \varepsilon \iff x + 1 > \frac1\varepsilon \iff x > \frac1\varepsilon - 1
> $$
> Serve $K > 0$: $K = \max\left\{1, \frac1\varepsilon - 1\right\}$. Per $x > K$ vale $\left|f(x) - 2\right| < \varepsilon$. $\blacksquare$
>
> Asintoto orizzontale: $y = 2$ per $x \to +\infty$. Il grafico sta **sotto** l'asintoto, perché $f(x) - 2 = -\frac{1}{x+1} < 0$ (è la figura della definizione di limite all'infinito). Controllo: $f(99) = \frac{199}{100} = 1{,}99$.

**Esercizio 8.** Scrivere la definizione di $\lim_{x \to -\infty} e^x = 0$ e verificarla.

> [!example]- Soluzione
> **Come si riconosce**: limite finito per $x \to -\infty$: la zona "vicina" è $x < -K$.
>
> Definizione: $\forall \varepsilon > 0\ \exists K > 0$ t.c. $\forall x < -K$, $|e^x - 0| < \varepsilon$.
>
> Verifica. $e^x > 0$, quindi $|e^x| = e^x$, e
> $$
> e^x < \varepsilon \iff x < \log\varepsilon
> $$
> ($\log$ crescente). Serve $-K \leq \log\varepsilon$, cioè $K \geq -\log\varepsilon$, con $K > 0$: $K = \max\{1, -\log\varepsilon\}$. Per $x < -K$: $x < -K \leq \log\varepsilon$, quindi $e^x < \varepsilon$. $\blacksquare$
>
> L'asse $y = 0$ è un asintoto orizzontale per $x \to -\infty$. Controllo: $\varepsilon = 0{,}001$ dà $K = -\log 0{,}001 = \log 1000 \approx 6{,}9$; $e^{-7} \approx 0{,}0009 < 0{,}001$.

**Esercizio 9** (dal foglio 4 del 2022, esercizio 4 (i)). Verificare con la definizione che $\displaystyle\lim_{x \to +\infty}\left(\sqrt x + \cos x\right) = +\infty$.

> [!example]- Soluzione
> **Come si riconosce**: qualcosa che va a $+\infty$ più un pezzo limitato che oscilla. **Perché minorare**: $\sqrt x + \cos x > M$ non si risolve, ma basta trovare $K$ oltre il quale una funzione **più piccola** sta sopra $M$. È l'idea del "carabiniere sotto" di [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/), fatta con la definizione.
>
> Dominio $[0, +\infty)$. Fisso $M > 0$.
> 1. $\cos x \geq -1$, quindi $\sqrt x + \cos x \geq \sqrt x - 1$ per ogni $x \geq 0$.
> 2. $\sqrt x - 1 > M \iff \sqrt x > M + 1 \iff x > (M + 1)^2$ (quadrato di due positivi).
> 3. Scelgo $K = (M + 1)^2$: per $x > K$ si ha $\sqrt x + \cos x \geq \sqrt x - 1 > M$. $\blacksquare$
>
> **Controllo.** $M = 9$, $K = 100$: $x = 101$ dà $\sqrt{101} + \cos 101 \approx 10{,}05 + 0{,}89 \approx 10{,}94 > 9$. Il caso peggiore è dove $\cos x = -1$: per $x$ poco più di $100$ si ha comunque $\sqrt x - 1 > 9$.

**Esercizio 10** (livello 30). Verificare con la definizione che $\displaystyle\lim_{x \to +\infty}\left(x^2 - 4x\right) = +\infty$.

> [!example]- Soluzione
> **Come si riconosce**: limite $+\infty$ per $x \to +\infty$, ma $x^2 - 4x > M$ è una disequazione di secondo grado con radici scomode. **Il metodo**: per $x$ abbastanza grande si minora $x^2 - 4x$ con qualcosa di più semplice, come nell'esercizio 7 di [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/) ($n^2 - 5n$).
>
> Fisso $M > 0$.
> 1. Raccolgo: $x^2 - 4x = x(x - 4)$.
> 2. Per $x \geq 8$: $x - 4 \geq \frac x2$, perché $x - 4 \geq \frac x2 \iff \frac x2 \geq 4 \iff x \geq 8$.
> 3. Quindi, per $x \geq 8$ (dove $x > 0$): $x(x - 4) \geq x \cdot \frac x2 = \frac{x^2}{2}$.
> 4. $\frac{x^2}{2} > M \iff x^2 > 2M \iff x > \sqrt{2M}$ (per $x > 0$).
> 5. Servono entrambe le condizioni, $x \geq 8$ e $x > \sqrt{2M}$: $K = \max\left\{8, \sqrt{2M}\right\}$. Per $x > K$: $x^2 - 4x \geq \frac{x^2}{2} > M$. $\blacksquare$
>
> **Controllo.** $M = 100$: $K = \max\{8;\ 14{,}14\} = 14{,}14$; $x = 15$ dà $225 - 60 = 165 > 100$. $M = 10$: $K = 8$; $x = 8{,}1$ dà $33{,}2 > 10$.
>
> In alternativa si risolve esatta: $x^2 - 4x - M > 0$ per $x > 2 + \sqrt{4 + M}$ (la radice più grande), e $K = 2 + \sqrt{4 + M}$. Funziona, ma con un polinomio di grado più alto la via esatta non c'è, e la stima sì.

**Esercizio 11** (livello 30). Verificare con la definizione che $\displaystyle\lim_{x \to +\infty}\left(\sqrt{x + 1} - \sqrt x\right) = 0$.

> [!example]- Soluzione
> **Come si riconosce**: differenza di radici, forma $+\infty - \infty$. **Perché razionalizzare**: come per le successioni ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)), moltiplicando per la somma delle radici la differenza diventa un quoziente che si stima facilmente.
>
> Dominio $[0, +\infty)$. Fisso $\varepsilon > 0$; per $x > 0$:
> 1. $\sqrt{x + 1} - \sqrt x = \frac{(x + 1) - x}{\sqrt{x + 1} + \sqrt x} = \frac{1}{\sqrt{x + 1} + \sqrt x}$ (prodotto notevole $(a - b)(a + b) = a^2 - b^2$). È positivo, quindi coincide con il suo modulo.
> 2. Minoro il denominatore: $\sqrt{x + 1} > \sqrt x$, quindi $\sqrt{x + 1} + \sqrt x > 2\sqrt x$, e $\frac{1}{\sqrt{x+1} + \sqrt x} < \frac{1}{2\sqrt x}$.
> 3. $\frac{1}{2\sqrt x} < \varepsilon \iff \sqrt x > \frac{1}{2\varepsilon} \iff x > \frac{1}{4\varepsilon^2}$ (reciproci di positivi, poi quadrato di positivi).
> 4. Scelgo $K = \frac{1}{4\varepsilon^2}$. Per $x > K$: $\left|\sqrt{x + 1} - \sqrt x\right| < \frac{1}{2\sqrt x} < \varepsilon$. $\blacksquare$
>
> **Controllo.** $\varepsilon = 0{,}01$: $K = 2500$; $\sqrt{2502} - \sqrt{2501} \approx 0{,}009997 < 0{,}01$. La stima è quasi esatta, perché per $x$ grande $\sqrt{x + 1} \approx \sqrt x$.

### Limiti laterali e continuità

**Esercizio 12.** Calcolare limite destro e sinistro di $f(x) = \dfrac{x^2 - 1}{|x - 1|}$ in $x_0 = 1$ e dire se il limite esiste.

> [!example]- Soluzione
> **Come si riconosce**: c'è $|x - x_0|$ al denominatore: il modulo si toglie in due modi diversi ai due lati di $x_0$. Quindi limiti laterali.
>
> Dominio $x \neq 1$. Fattorizzo: $x^2 - 1 = (x - 1)(x + 1)$.
> - **Da destra**, $x > 1$: $|x - 1| = x - 1$, quindi $f(x) = \frac{(x - 1)(x + 1)}{x - 1} = x + 1$ (semplifico $x - 1 \neq 0$). Con la definizione: $|(x + 1) - 2| = |x - 1| < \varepsilon$ con $\delta = \varepsilon$. $\lim_{x \to 1^+} f(x) = 2$.
> - **Da sinistra**, $x < 1$: $|x - 1| = -(x - 1)$, quindi $f(x) = \frac{(x-1)(x+1)}{-(x-1)} = -(x + 1)$. $|-(x + 1) - (-2)| = |-x + 1| = |x - 1| < \varepsilon$ con $\delta = \varepsilon$. $\lim_{x \to 1^-} f(x) = -2$.
>
> $2 \neq -2$: il limite in $1$ non esiste. $\blacksquare$
>
> **Controllo.** $f(1{,}01) = \frac{0{,}0201}{0{,}01} = 2{,}01$; $f(0{,}99) = \frac{-0{,}0199}{0{,}01} = -1{,}99$.

**Esercizio 13.** Sia
$$
f(x) = \begin{cases} x + a & x < 1 \\ 3 - 2x & x \geq 1 \end{cases}
$$
Calcolare limite destro e sinistro in $x_0 = 1$ al variare di $a \in \mathbb{R}$. Per quali $a$ esiste $\lim_{x \to 1} f(x)$? Per quali $a$ la funzione è continua in $1$?

> [!example]- Soluzione
> **Come si riconosce**: funzione a tratti con un parametro, punto di raccordo $x_0 = 1$: limiti laterali.
>
> - Sinistro: per $x < 1$, $f(x) = x + a$. $|(x + a) - (1 + a)| = |x - 1| < \varepsilon$ con $\delta = \varepsilon$: $\lim_{x \to 1^-} f(x) = 1 + a$.
> - Destro: per $x > 1$, $f(x) = 3 - 2x$. $|(3 - 2x) - 1| = 2|x - 1| < \varepsilon$ con $\delta = \frac\varepsilon2$: $\lim_{x \to 1^+} f(x) = 1$.
> - Il limite esiste se e solo se i due coincidono: $1 + a = 1 \iff a = 0$. In quel caso vale $1$.
> - $f(1) = 3 - 2 = 1$ (la seconda formula vale per $x \geq 1$). Per $a = 0$ il limite è $1 = f(1)$: **continua in $1$ solo per $a = 0$**. Per $a \neq 0$ è comunque continua da destra ($\lim_{x \to 1^+} f = 1 = f(1)$), ma non da sinistra.
>
> Controllo con $a = 0$: $f(0{,}99) = 0{,}99$, $f(1{,}01) = 0{,}98$, entrambi vicini a $1$.

**Esercizio 14** (livello 30). Sia
$$
f(x) = \begin{cases} x + a & x < 0 \\ x^2 + b & 0 \leq x < 1 \\ 2x & x \geq 1 \end{cases}
$$
Trovare $a, b \in \mathbb{R}$ tali che $f$ sia continua in $0$ e in $1$.

> [!example]- Soluzione
> **Come si riconosce**: due punti di raccordo, due parametri. **Il metodo**: in ogni punto di raccordo si impone "limite sinistro = limite destro = valore", e si risolve il sistema.
>
> **In $x_0 = 0$.** $f(0) = 0^2 + b = b$ (vale la formula di mezzo, perché $0 \leq 0$).
> - Sinistro: per $x < 0$, $f(x) = x + a$, e $|(x + a) - a| = |x| < \varepsilon$ con $\delta = \varepsilon$: $\lim_{x \to 0^-} f = a$.
> - Destro: per $0 < x < 1$, $f(x) = x^2 + b$, e $|(x^2 + b) - b| = x^2 < \varepsilon$ con $\delta = \min\{1, \sqrt\varepsilon\}$ (il $\min$ tiene $x$ sotto $1$, dove vale questa formula): $\lim_{x \to 0^+} f = b$.
> - Continua in $0$ $\iff a = b = f(0) \iff a = b$.
>
> **In $x_0 = 1$.** $f(1) = 2$.
> - Sinistro: per $0 < x < 1$, $f(x) = x^2 + b$. $|(x^2 + b) - (1 + b)| = |x - 1| \cdot |x + 1| < 2|x - 1|$ (per $x \in (0, 1)$, $|x + 1| < 2$), quindi $\delta = \min\left\{1, \frac\varepsilon2\right\}$: $\lim_{x \to 1^-} f = 1 + b$.
> - Destro: per $x > 1$, $f(x) = 2x$, e $|2x - 2| = 2|x - 1|$: $\lim_{x \to 1^+} f = 2$.
> - Continua in $1$ $\iff 1 + b = 2 \iff b = 1$.
>
> **Insieme**: $b = 1$ e $a = b = 1$. Con $a = b = 1$:
> $$
> f(x) = \begin{cases} x + 1 & x < 0 \\ x^2 + 1 & 0 \leq x < 1 \\ 2x & x \geq 1 \end{cases}
> $$
>
> **Controllo.** $f(-0{,}01) = 0{,}99$, $f(0) = 1$, $f(0{,}01) = 1{,}0001$; $f(0{,}99) = 1{,}9801$, $f(1) = 2$, $f(1{,}01) = 2{,}02$. Nessun salto. Con $a = 2$, $b = 1$ ci sarebbe un salto in $0$ (da $2$ a $1$), e la funzione sarebbe continua solo da destra.

### Non esistenza con due successioni

**Esercizio 15.** Dimostrare che $\displaystyle\lim_{x \to +\infty}\cos x$ non esiste.

> [!example]- Soluzione
> **Come si riconosce**: è la slide 28 con il coseno. **Il metodo**: due successioni che vanno a $+\infty$ dove il coseno vale due numeri diversi e facili.
>
> - $x_n = 2n\pi \to +\infty$: $\cos(2n\pi) = 1$ per ogni $n$ (periodicità), quindi $\cos x_n \to 1$.
> - $y_n = \pi + 2n\pi \to +\infty$: $\cos(\pi + 2n\pi) = \cos\pi = -1$, quindi $\cos y_n \to -1$.
> - Entrambe stanno nel dominio $\mathbb{R}$ e vanno a $+\infty$. $1 \neq -1$: per il criterio, il limite non esiste. $\blacksquare$
>
> **Controllo**: $\cos(2\pi) = 1$, $\cos(3\pi) = -1$; le due successioni si alternano lungo l'asse, come i punti rossi e blu della figura della slide 28.

**Esercizio 16.** Dimostrare che $\displaystyle\lim_{x \to 0}\cos\frac1x$ non esiste.

> [!example]- Soluzione
> **Come si riconosce**: coseno di $\frac1x$, con $x \to 0$: è il trucco "rovesciato" della slide 28. **Il metodo**: si prendono i reciproci delle successioni dell'esercizio 15.
>
> - $x_n = \frac{1}{2n\pi}$, $n \geq 1$: positivi, quindi diversi da $0$ e nel dominio $\mathbb{R} \setminus \{0\}$; $x_n \to 0$ ($\frac{1}{2\pi} \cdot \frac1n$). $\cos\frac{1}{x_n} = \cos(2n\pi) = 1 \to 1$.
> - $y_n = \frac{1}{\pi + 2n\pi}$: positivi, $y_n \to 0$ (reciproco di una successione che diverge). $\cos\frac{1}{y_n} = \cos(\pi + 2n\pi) = -1 \to -1$.
> - $1 \neq -1$: il limite non esiste. $\blacksquare$
>
> Le due successioni arrivano entrambe da destra. Va bene lo stesso: il criterio chiede due successioni qualsiasi che tendono a $0$, non una per lato. Anzi, abbiamo dimostrato di più: non esiste nemmeno il limite destro.
>
> **Controllo**: $x_1 = \frac{1}{2\pi} \approx 0{,}159$, $\cos(2\pi) = 1$; $y_1 = \frac{1}{3\pi} \approx 0{,}106$, $\cos(3\pi) = -1$.

**Esercizio 17** (dal foglio 4 del 2022, esercizio 3 (x)). Dimostrare che $\displaystyle\lim_{x \to +\infty} \sin(2x)\log x$ non esiste.

> [!example]- Soluzione
> **Come si riconosce**: c'è un seno di un argomento che va all'infinito, che oscilla, moltiplicato per qualcosa che cresce: i valori saltano. Si usano due successioni (slide 28).
>
> Servono punti dove $\sin(2x)$ è facile. $\sin(2x) = 0$ per $2x = 2n\pi$, cioè $x = n\pi$; $\sin(2x) = 1$ per $2x = \frac\pi2 + 2n\pi$, cioè $x = \frac\pi4 + n\pi$.
> - $x_n = n\pi \to +\infty$ ($n \geq 1$, nel dominio $(0, +\infty)$): $f(x_n) = 0 \cdot \log(n\pi) = 0 \to 0$.
> - $y_n = \frac\pi4 + n\pi \to +\infty$: $f(y_n) = 1 \cdot \log\left(\frac\pi4 + n\pi\right)$. Siccome $\frac\pi4 + n\pi > n$ e $\log$ è crescente, $f(y_n) > \log n \to +\infty$: per il confronto, $f(y_n) \to +\infty$.
>
> $0 \neq +\infty$: il limite non esiste. $\blacksquare$
>
> Attenzione: la sola successione $y_n$ farebbe pensare a $+\infty$; con $z_n = \frac{3\pi}{4} + n\pi$ si ottiene $-\log z_n \to -\infty$. La funzione oscilla con ampiezza crescente.
>
> Lo stesso schema risolve l'esercizio 4 (ii) del foglio, $\lim_{x \to +\infty}\sqrt x \cos x$: con $x_n = \frac\pi2 + 2n\pi$ vale $0$, con $y_n = 2n\pi$ vale $\sqrt{2n\pi} \to +\infty$. Non esiste.

**Esercizio 18** (livello 30). Dimostrare che $\displaystyle\lim_{x \to 0^+}\frac1x\sin\frac1x$ non esiste, e che la funzione è illimitata vicino a $0$ ma **non** tende a $+\infty$.

> [!example]- Soluzione
> **Come si riconosce**: $\sin\frac1x$ oscilla, e il fattore $\frac1x$ non lo schiaccia (come in $x\sin\frac1x$) ma lo amplifica. **Il metodo**: due successioni, come per $\sin\frac1x$.
>
> - $x_n = \frac{1}{n\pi} \to 0^+$: $f(x_n) = n\pi \cdot \sin(n\pi) = n\pi \cdot 0 = 0 \to 0$.
> - $y_n = \frac{1}{\frac\pi2 + 2n\pi} \to 0^+$: $f(y_n) = \left(\frac\pi2 + 2n\pi\right) \cdot 1 = \frac\pi2 + 2n\pi \to +\infty$.
> - $0 \neq +\infty$: il limite non esiste. $\blacksquare$
>
> **Illimitata.** Dato un qualunque $M > 0$ e un qualunque $\delta > 0$, la successione $y_n$ ha termini in $(0, \delta)$ (perché $y_n \to 0$) con $f(y_n) > M$ (perché $f(y_n) \to +\infty$): in ogni intorno destro di $0$ la funzione supera ogni soglia.
>
> **Ma non $+\infty$.** Per la definizione, con $M = 1$ servirebbe un $\delta$ tale che $f(x) > 1$ per **tutti** gli $x \in (0, \delta)$. Ma in $(0, \delta)$ ci sono i punti $x_n$, dove $f = 0 < 1$. Nessun $\delta$ funziona.
>
> **Controllo**: $f\left(\frac{1}{10\pi}\right) = 0$, $f\left(\frac{1}{20{,}5\pi}\right) = 20{,}5\pi \approx 64{,}4$. Punti vicinissimi, valori lontanissimi. È la versione per funzioni di $n(1 + (-1)^n)$ in [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/): illimitata, ma non divergente.

**Esercizio 19** (livello 30). Sia $f : \mathbb{R} \to \mathbb{R}$ la **funzione di Dirichlet**, $f(x) = 1$ se $x \in \mathbb{Q}$ e $f(x) = 0$ se $x \notin \mathbb{Q}$. Dimostrare che per ogni $x_0 \in \mathbb{R}$ il limite $\lim_{x \to x_0} f(x)$ non esiste.

> [!example]- Soluzione
> **Come si riconosce**: la funzione salta fra $0$ e $1$ in ogni intervallo, per piccolo che sia. Non ci sono "lati" da separare: le due successioni devono stare entrambe vicinissime a $x_0$, una sui razionali e una sugli irrazionali. **Lo strumento**: la densità di $\mathbb{Q}$ e degli irrazionali in $\mathbb{R}$ ([Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/)): in ogni intervallo aperto non vuoto ci sono sia razionali sia irrazionali.
>
> Fisso $x_0 \in \mathbb{R}$. Per ogni $n \geq 1$:
> 1. l'intervallo $\left(x_0, x_0 + \frac1n\right)$ è aperto e non vuoto, quindi per la densità di $\mathbb{Q}$ contiene un razionale: lo chiamo $x_n$;
> 2. per la densità degli irrazionali contiene anche un irrazionale: lo chiamo $y_n$.
>
> Le due successioni:
> - $x_0 < x_n < x_0 + \frac1n$: per i carabinieri ($x_0 \to x_0$ e $x_0 + \frac1n \to x_0$) si ha $x_n \to x_0$, e $x_n \neq x_0$ perché $x_n > x_0$. Lo stesso per $y_n$;
> - $f(x_n) = 1$ per ogni $n$ ($x_n$ razionale), quindi $f(x_n) \to 1$;
> - $f(y_n) = 0$ per ogni $n$ ($y_n$ irrazionale), quindi $f(y_n) \to 0$.
>
> $1 \neq 0$: per il criterio della slide 28, il limite in $x_0$ non esiste. Siccome $x_0$ era qualunque, la funzione di Dirichlet non ha limite in nessun punto, e in particolare non è continua in nessun punto. $\blacksquare$
>
> **Perché qui la via dei limiti laterali non basta**: da destra la funzione fa già lo stesso disordine, quindi non esistono nemmeno i limiti laterali. Le due successioni sono l'unico strumento che funziona.
>
> **Controllo** con $x_0 = 0$, $n = 10$: $x_{10} = 0{,}05 \in \mathbb{Q}$, $y_{10} = \frac{\sqrt2}{20} \approx 0{,}0707 \notin \mathbb{Q}$, entrambi in $(0;\ 0{,}1)$; $f$ vale $1$ e $0$.

### Teoria

**Esercizio 20** (slide 26). Sia $(a_n)_n$ una successione e $f : \mathbb{N} \to \mathbb{R}$, $f(n) = a_n$. Verificare confrontando le due definizioni che $\lim_{x \to +\infty} f(x) = \ell$ se e solo se $\lim_{n \to +\infty} a_n = \ell$ ($\ell \in \mathbb{R}$).

> [!example]- Soluzione
> **Come si riconosce**: "verificare confrontando le definizioni": si scrivono una accanto all'altra e si mostra che le soglie $K$ e $\nu$ si scambiano.
>
> Le due definizioni affiancate, con $D = \mathbb{N}$:
> - funzione: $\forall \varepsilon > 0\ \exists K > 0$ t.c. $\forall x \in (K, +\infty) \cap \mathbb{N}$, $|f(x) - \ell| < \varepsilon$;
> - successione: $\forall \varepsilon > 0\ \exists \nu \in \mathbb{N}$ t.c. $\forall n > \nu$, $|a_n - \ell| < \varepsilon$.
>
> Gli $x \in (K, +\infty) \cap \mathbb{N}$ sono i naturali $n > K$, e $f(n) = a_n$. Quindi la prima dice: $\forall \varepsilon\ \exists K > 0$ con $|a_n - \ell| < \varepsilon$ per ogni naturale $n > K$.
> - Dalla successione alla funzione: dato $\nu$, si prende $K = \nu + 1 > 0$; i naturali $n > K$ sono in particolare $> \nu$.
> - Dalla funzione alla successione: dato $K$, si prende $\nu = \lceil K \rceil$ (il primo naturale $\geq K$); i naturali $n > \nu$ sono $> K$.
>
> Le due condizioni si implicano a vicenda: è la stessa definizione. $\blacksquare$ ($\mathbb{N}$ è illimitato superiormente, quindi il limite per $x \to +\infty$ ha senso.)
>
> **Controllo** su un caso: $a_n = \frac1n$, $\varepsilon = 0{,}1$. Per la successione va bene $\nu = 10$; per la funzione $K = 11$, e i naturali $n > 11$ hanno $\frac1n < 0{,}1$.

**Esercizio 21.** Scrivere con i quantificatori “$\displaystyle\lim_{x \to x_0} f(x) \neq \ell$" e usarlo per dimostrare che $\displaystyle\lim_{x \to 0}\mathrm{sgn}\,x \neq 1$.

> [!example]- Soluzione
> **Come si riconosce**: negazione di una definizione, come per le successioni in [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/) (esercizio 5). **Il metodo**: un quantificatore alla volta da sinistra, poi la condizione finale; la parte "dove si prende $x$" resta com'è.
>
> La definizione: $\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D \text{ con } 0 < |x - x_0| < \delta : |f(x) - \ell| < \varepsilon$. Negando:
> 1. $\forall \varepsilon$ diventa $\exists \varepsilon$;
> 2. $\exists \delta$ diventa $\forall \delta$;
> 3. $\forall x$ (con $x \in D$, $0 < |x - x_0| < \delta$) diventa $\exists x$ (con le stesse condizioni);
> 4. $|f(x) - \ell| < \varepsilon$ diventa $|f(x) - \ell| \geq \varepsilon$.
> $$
> \lim_{x \to x_0} f(x) \neq \ell \iff \exists \varepsilon > 0\ \forall \delta > 0\ \exists x \in D,\ 0 < |x - x_0| < \delta : |f(x) - \ell| \geq \varepsilon
> $$
> A parole: c'è una striscia attorno a $\ell$ da cui $f$ esce in ogni intorno di $x_0$, per quanto piccolo.
>
> Per $\mathrm{sgn}$, $x_0 = 0$, $\ell = 1$: scelgo $\varepsilon = 1$. Dato $\delta > 0$, prendo $x = -\frac\delta2$: $0 < |x| = \frac\delta2 < \delta$ e $|\mathrm{sgn}\,x - 1| = |-1 - 1| = 2 \geq 1$. $\blacksquare$
>
> Va bene qualunque $\varepsilon \in (0, 2]$. Con $\varepsilon = 3$ invece non funziona: $|\mathrm{sgn}\,x - 1| \leq 2 < 3$ sempre. **Controllo**: con $\delta = 0{,}1$ il punto è $x = -0{,}05$, e $\mathrm{sgn}(-0{,}05) = -1$.

**Esercizio 22** (livello 30). Sia $f : (0, +\infty) \to \mathbb{R}$. Dimostrare che
$$
\lim_{x \to +\infty} f(x) = \ell \iff \lim_{x \to 0^+} f\left(\frac1x\right) = \ell \qquad (\ell \in \mathbb{R})
$$
e usarlo per ritrovare che $\lim_{x \to 0^+}\sin\frac1x$ non esiste.

> [!example]- Soluzione
> **Come si riconosce**: è il "trucco rovesciato" della slide 28 trasformato in teorema. **Il metodo**: con la definizione, le soglie si scambiano con $\delta = \frac1K$; con le successioni (slide 27), $x_n \to 0^+$ se e solo se $\frac{1}{x_n} \to +\infty$.
>
> Sia $g(x) = f\left(\frac1x\right)$, definita su $(0, +\infty)$ (se $x > 0$ allora $\frac1x > 0$).
>
> **($\Rightarrow$)** Fisso $\varepsilon > 0$.
> 1. Per ipotesi esiste $K > 0$ con $|f(t) - \ell| < \varepsilon$ per ogni $t > K$.
> 2. Scelgo $\delta = \frac1K$. Se $0 < x < \delta = \frac1K$, passando ai reciproci di due positivi (il verso si gira) $\frac1x > K$.
> 3. Applico il passo 1 con $t = \frac1x$: $|g(x) - \ell| = \left|f\left(\frac1x\right) - \ell\right| < \varepsilon$.
>
> È la definizione di $\lim_{x \to 0^+} g(x) = \ell$.
>
> **($\Leftarrow$)** Fisso $\varepsilon > 0$.
> 1. Per ipotesi esiste $\delta > 0$ con $|g(x) - \ell| < \varepsilon$ per ogni $x \in (0, \delta)$.
> 2. Scelgo $K = \frac1\delta$. Se $t > K$, allora $0 < \frac1t < \delta$.
> 3. Applico il passo 1 con $x = \frac1t$: $|g(\frac1t) - \ell| = |f(t) - \ell| < \varepsilon$, perché $g\left(\frac1t\right) = f(t)$. $\blacksquare$
>
> **Il caso di $\sin\frac1x$.** Con $f(t) = \sin t$ si ha $g(x) = \sin\frac1x$. Se $\lim_{x \to 0^+}\sin\frac1x$ esistesse e valesse $\ell \in \mathbb{R}$, per ($\Leftarrow$) varrebbe $\lim_{t \to +\infty}\sin t = \ell$, che non esiste (slide 28). Quindi nemmeno il primo esiste. (Un limite $\pm\infty$ è escluso subito: $|\sin\frac1x| \leq 1$.)
>
> **Controllo** con un limite noto: $f(t) = \frac{2t + 1}{t + 1} \to 2$ per $t \to +\infty$ (esercizio 7); allora $g(x) = \frac{2/x + 1}{1/x + 1} = \frac{2 + x}{1 + x}$ (moltiplico sopra e sotto per $x$) deve tendere a $2$ per $x \to 0^+$. Infatti $g(0{,}01) = \frac{2{,}01}{1{,}01} \approx 1{,}990$.

### Lasciati dal prof il 14/10

**Esercizio 23** (prof, 14/10, slide 19, <span class="src">pagina 19</span>). Scrivere le definizioni di $\displaystyle\lim_{x \to x_0^+} f(x) = -\infty$ e $\displaystyle\lim_{x \to x_0^-} f(x) = -\infty$, e verificarne una su un esempio.

> [!example]- Soluzione
> **Come si riconosce**: è la tabella "Tutte le definizioni in una frase" della teoria: si sceglie la riga di $L = -\infty$ e il mezzo intorno giusto per $x_0$.
>
> Il modello è la definizione del prof per $+\infty$ da destra: $\forall M > 0\ \exists \delta > 0$ t.c. $\forall x \in (x_0, x_0 + \delta) \cap D$, $f(x) > M$. Cambia solo la condizione finale, come dalla slide 15 alla 18: $f(x) > M$ diventa $f(x) < -M$.
> $$
> \lim_{x \to x_0^+} f(x) = -\infty \iff \forall M > 0\ \exists \delta > 0 \text{ t.c. } \forall x \in (x_0, x_0 + \delta) \cap D \quad f(x) < -M
> $$
> $$
> \lim_{x \to x_0^-} f(x) = -\infty \iff \forall M > 0\ \exists \delta > 0 \text{ t.c. } \forall x \in (x_0 - \delta, x_0) \cap D \quad f(x) < -M
> $$
> La prima non è banale se $x_0$ è di accumulazione per $D \cap (x_0, +\infty)$, la seconda se lo è per $D \cap (-\infty, x_0)$.
>
> **Esempio**: $\lim_{x \to 1^-}\frac{1}{x - 1} = -\infty$. Fisso $M > 0$ e prendo $x \in (1 - \delta, 1)$, dove $x - 1 < 0$.
> 1. Voglio $\frac{1}{x - 1} < -M$.
> 2. Moltiplico per $x - 1 < 0$, il verso si gira: $1 > -M(x - 1)$.
> 3. Divido per $-M < 0$, il verso si gira di nuovo: $-\frac1M < x - 1$.
> 4. Quindi basta $1 - \frac1M < x < 1$: scelgo $\delta = \frac1M$. $\blacksquare$
>
> **Controllo.** $M = 100$, $\delta = 0{,}01$: $x = 0{,}995$ dà $\frac{1}{-0{,}005} = -200 < -100$.

**Esercizio 24** (prof, 14/10, slide 28, <span class="src">pagina 37</span>). Trovare una successione $z_n \to +\infty$ tale che $\displaystyle\lim_{n \to +\infty}\sin(z_n)$ non esista. Concludere che $\displaystyle\lim_{x \to +\infty}\sin x$ non esiste.

> [!example]- Soluzione
> **Come si riconosce**: è l'altra forma del criterio della slide 28: invece di due successioni con limiti diversi, **una** successione su cui $f$ non ha limite. **Il metodo**: punti dove il seno gira su più valori, poi il teorema della slide 27 nel verso $\Rightarrow$.
>
> **La successione.** Prendo $z_n = \frac{n\pi}{2}$, $n \geq 1$: $z_n \to +\infty$ (costante positiva per $n$). I valori di $\sin z_n$, ricordando il cerchio:
> - $n = 1$: $\sin\frac\pi2 = 1$; $n = 2$: $\sin\pi = 0$; $n = 3$: $\sin\frac{3\pi}{2} = -1$; $n = 4$: $\sin 2\pi = 0$;
> - poi si ripete con periodo $4$, perché $z_{n+4} = z_n + 2\pi$.
>
> **$\sin z_n$ non ha limite.** Due sottosuccessioni:
> 1. $n = 4k + 1$: $\sin\left(2k\pi + \frac\pi2\right) = 1$, costante, quindi tende a $1$;
> 2. $n = 4k + 3$: $\sin\left(2k\pi + \frac{3\pi}{2}\right) = -1$, tende a $-1$;
> 3. $1 \neq -1$: per il corollario sulle sottosuccessioni ([Limiti di successioni](/uni/analisi-1/limiti-di-successioni/), slide 26) $\sin z_n$ non ha limite.
>
> **Conclusione, per assurdo.** Se esistesse $\lim_{x \to +\infty}\sin x = \ell$ (con $\ell \in \mathbb{R} \cup \{\pm\infty\}$), per il teorema della slide 27 (verso $\Rightarrow$) ogni successione $x_n \to +\infty$ darebbe $\sin x_n \to \ell$; in particolare $\sin z_n \to \ell$. Ma $\sin z_n$ non ha limite: assurdo. Quindi $\lim_{x \to +\infty}\sin x$ non esiste. $\blacksquare$
>
> **Controllo**: i primi otto valori sono $1, 0, -1, 0, 1, 0, -1, 0$. La successione $z_n$ contiene le due del prof: $n$ pari dà $z_{2k} = k\pi$ (il suo $x_n$), $n = 4k + 1$ dà $\frac\pi2 + 2k\pi$ (il suo $y_n$).

### IV tutoraggio, esercizio 3: con la definizione

Dal IV tutoraggio, "Limiti di successioni e funzioni e continuità" (Barbon, Favari, Bellomo: <span class="src">tutoraggio 4, pagina 2</span>): «Calcolare i seguenti limiti di funzioni, se esistono; altrimenti dimostrare che non esistono.» Al 14/10 l'algebra dei limiti di funzioni, la continuità delle funzioni elementari e i limiti notevoli non sono ancora fatti: qui ci sono i limiti che si chiudono con la definizione (25-27) o con il legame con le successioni della slide 27 (28-30). Gli altri sono in fondo, con il testo e la lezione dopo cui si possono fare. Gli esercizi 1 e 2 del foglio (successioni) sono in [Calcolo dei limiti (esercizi)](/uni/analisi-1/calcolo-dei-limiti-esercizi/).

**Esercizio 25** (tutoraggio 4, es. 3.1). Calcolare $\displaystyle\lim_{x \to 0^-}\frac{1}{2^x - 1}$.

> [!example]- Soluzione
> **Come si riconosce**: limite laterale in un punto dove il denominatore si annulla ($2^0 - 1 = 0$): ci si aspetta $\pm\infty$, e il segno lo dà il lato. **Il metodo**: capire il segno, poi la definizione di limite $-\infty$ da sinistra (esercizio 23), con $2^x$ crescente.
>
> **Dominio**: $2^x \neq 1 \iff x \neq 0$, quindi $D = \mathbb{R} \setminus \{0\}$, e $0$ è di accumulazione da sinistra.
>
> **Segno.** Per $x < 0$: $0 < 2^x < 2^0 = 1$ ($2^x$ crescente, base $2 > 1$), quindi $-1 < 2^x - 1 < 0$ e $f(x) < 0$. Candidato: $-\infty$.
>
> **Definizione.** Fisso $M > 0$; cerco $\delta$ con $\frac{1}{2^x - 1} < -M$ per ogni $x \in (-\delta, 0)$. Basta farlo per $M > 1$: se la condizione vale con una soglia più grande, vale anche con una più piccola.
> 1. Moltiplico per $2^x - 1 < 0$, il verso si gira: $1 > -M(2^x - 1)$.
> 2. Divido per $-M < 0$, il verso si gira: $2^x - 1 > -\frac1M$, cioè $2^x > 1 - \frac1M$.
> 3. Con $M > 1$ il numero $1 - \frac1M$ sta in $(0, 1)$. Applico $\log_2$, crescente: $x > \log_2\left(1 - \frac1M\right)$, che è negativo.
> 4. Scelgo $\delta = -\log_2\left(1 - \frac1M\right) = \log_2\frac{M}{M - 1} > 0$. Per $x \in (-\delta, 0)$ si ha $x > \log_2\left(1 - \frac1M\right)$, e rileggendo i passi all'indietro $f(x) < -M$. $\blacksquare$
>
> $$
> \lim_{x \to 0^-}\frac{1}{2^x - 1} = -\infty
> $$
>
> **Controllo.** $M = 10$: $\delta = \log_2\frac{10}{9} \approx 0{,}152$. $x = -0{,}1$ dà $2^{-0{,}1} \approx 0{,}933$ e $f(x) \approx -14{,}9 < -10$. Da destra, per $x > 0$, il denominatore è positivo e il limite è $+\infty$: il limite (non laterale) in $0$ non esiste.

**Esercizio 26** (tutoraggio 4, es. 3.2). Calcolare $\displaystyle\lim_{x \to -2^-}\frac{1}{x^2 - 4}$.

> [!example]- Soluzione
> **Come si riconosce**: il denominatore si annulla in $-2$; il lato sinistro decide il segno. **Il metodo**: segno, poi definizione di limite $+\infty$ da sinistra.
>
> **Dominio**: $x^2 \neq 4$, cioè $x \neq \pm 2$; $-2$ è di accumulazione da sinistra.
>
> **Segno.** Per $x < -2$: $|x| = -x > 2$, quindi $x^2 = |x|^2 > 4$ e $x^2 - 4 > 0$. Candidato: $+\infty$.
>
> **Definizione.** Fisso $M > 0$; cerco $\delta$ con $\frac{1}{x^2 - 4} > M$ per $x \in (-2 - \delta, -2)$.
> 1. $\frac{1}{x^2 - 4} > M \iff x^2 - 4 < \frac1M$ (reciproci di due positivi, il verso si gira).
> 2. $\iff x^2 < 4 + \frac1M \iff |x| < \sqrt{4 + \frac1M}$ (radice di due positivi).
> 3. Per $x \in (-2 - \delta, -2)$ vale $|x| = -x < 2 + \delta$.
> 4. Quindi basta $2 + \delta \leq \sqrt{4 + \frac1M}$: scelgo $\delta = \sqrt{4 + \frac1M} - 2$, positivo perché $4 + \frac1M > 4$. $\blacksquare$
>
> $$
> \lim_{x \to -2^-}\frac{1}{x^2 - 4} = +\infty
> $$
>
> **Controllo.** $M = 100$: $\delta = \sqrt{4{,}01} - 2 \approx 0{,}0025$. $x = -2{,}002$ dà $x^2 - 4 \approx 0{,}008$ e $f(x) \approx 125 > 100$.

**Esercizio 27** (tutoraggio 4, es. 3.3). Calcolare $\displaystyle\lim_{x \to 1^+}\frac{2^{x-1}}{x - 1}$.

> [!example]- Soluzione
> **Come si riconosce**: numeratore che va verso $2^0 = 1$, denominatore che va a $0^+$: $\left[\frac{1}{0^+}\right]$, candidato $+\infty$. **Il metodo**: la disequazione $f(x) > M$ non si risolve, ma si **minora** $f$ con una funzione più semplice (come nell'esercizio 9).
>
> **Dominio**: $x \neq 1$.
> 1. Per $x > 1$: $x - 1 > 0$, quindi $2^{x-1} > 2^0 = 1$ ($2^t$ crescente).
> 2. Divido per $x - 1 > 0$: $f(x) = \frac{2^{x-1}}{x - 1} > \frac{1}{x - 1}$.
> 3. $\frac{1}{x - 1} > M \iff x - 1 < \frac1M$ (reciproci di positivi).
> 4. Scelgo $\delta = \frac1M$: per $x \in (1, 1 + \delta)$ vale $f(x) > \frac{1}{x - 1} > M$. $\blacksquare$
>
> $$
> \lim_{x \to 1^+}\frac{2^{x-1}}{x - 1} = +\infty
> $$
>
> **Controllo.** $M = 100$, $\delta = 0{,}01$: $x = 1{,}005$ dà $\frac{2^{0{,}005}}{0{,}005} \approx 200{,}7 > 100$.

### IV tutoraggio, esercizio 3: con le successioni

Il metodo è quello della teoria, "Calcolare un limite con le successioni": si prende una successione **qualunque** $x_n \to x_0$ nel dominio, si calcola $\lim f(x_n)$ con l'algebra dei limiti di successioni, e per la slide 27 (verso $\Leftarrow$) quello è il limite di $f$.

**Esercizio 28** (tutoraggio 4, es. 3.4). Calcolare $\displaystyle\lim_{x \to +\infty}\frac{-x^3 + 3x^2}{2x^2 + 4x^3}$.

> [!example]- Soluzione
> **Come si riconosce**: quoziente di polinomi per $x \to +\infty$, come i limiti di successioni razionali. **Il metodo**: slide 27 e "raccogli chi comanda" sulla successione.
>
> **Dominio**: $2x^2 + 4x^3 = 2x^2(1 + 2x) \neq 0 \iff x \neq 0,\ x \neq -\frac12$. È illimitato superiormente.
>
> Sia $(x_n)$ una qualunque successione in $D$ con $x_n \to +\infty$. Da un certo indice in poi $x_n > 0$ (definizione di limite $+\infty$ con $M = 1$), e lì posso dividere per $x_n^3$:
> 1. $f(x_n) = \frac{x_n^3\left(-1 + \frac{3}{x_n}\right)}{x_n^3\left(\frac{2}{x_n} + 4\right)} = \frac{-1 + \frac{3}{x_n}}{\frac{2}{x_n} + 4}$ (raccolgo $x_n^3$ e semplifico).
> 2. $\frac{1}{x_n} \to 0$, perché è il reciproco di una successione che tende a $+\infty$ (forme determinate, [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)).
> 3. Algebra dei limiti: $f(x_n) \to \frac{-1 + 0}{0 + 4} = -\frac14$.
> 4. Il risultato non dipende dalla successione scelta: per la slide 27 (verso $\Leftarrow$), $\lim_{x \to +\infty} f(x) = -\frac14$. $\blacksquare$
>
> La retta $y = -\frac14$ è un asintoto orizzontale. **Controllo**: $f(10^4) \approx -0{,}24991$.

**Esercizio 29** (tutoraggio 4, es. 3.5). Calcolare $\displaystyle\lim_{x \to -\infty}\frac{x^2 + e^x}{e^{2x} - 3x^2}$.

> [!example]- Soluzione
> **Come si riconosce**: per $x \to -\infty$ gli esponenziali vanno a $0$ e le potenze esplodono: comandano i $x^2$. **Il metodo**: slide 27 con una successione $x_n \to -\infty$; il mattone che serve è $e^{x_n} \to 0$.
>
> **Dominio**: $e^{2x} \neq 3x^2$. Per $x \leq -1$ si ha $e^{2x} \leq e^{-2} < 1 < 3 \leq 3x^2$, quindi la semiretta $(-\infty, -1]$ sta nel dominio: $D$ è illimitato inferiormente.
>
> **Il mattone.** $\lim_{x \to -\infty} e^x = 0$ è l'esercizio 8, verificato con la definizione. Per la slide 27 (verso $\Rightarrow$), ogni successione $x_n \to -\infty$ ha $e^{x_n} \to 0$.
>
> Sia $(x_n)$ una qualunque successione in $D$ con $x_n \to -\infty$; da un certo indice $x_n \leq -1$.
> 1. $x_n^2 \to +\infty$ (prodotto di due successioni che tendono a $-\infty$), quindi $\frac{1}{x_n^2} \to 0$.
> 2. $e^{x_n} \to 0$ (il mattone) e $e^{2x_n} = \left(e^{x_n}\right)^2 \to 0$ (prodotto).
> 3. Divido sopra e sotto per $x_n^2 > 0$: $f(x_n) = \frac{1 + \frac{e^{x_n}}{x_n^2}}{\frac{e^{2x_n}}{x_n^2} - 3}$.
> 4. $\frac{e^{x_n}}{x_n^2} = e^{x_n} \cdot \frac{1}{x_n^2} \to 0 \cdot 0 = 0$, e lo stesso per $\frac{e^{2x_n}}{x_n^2}$.
> 5. Algebra dei limiti: $f(x_n) \to \frac{1 + 0}{0 - 3} = -\frac13$.
> 6. Per la slide 27 (verso $\Leftarrow$): $\lim_{x \to -\infty} f(x) = -\frac13$. $\blacksquare$
>
> **Controllo**: $f(-50) \approx -0{,}33333$, perché $e^{-50} \approx 2 \cdot 10^{-22}$ non si vede.

**Esercizio 30** (tutoraggio 4, es. 3.6). Calcolare $\displaystyle\lim_{x \to +\infty}\frac{x\sqrt x + 2^{-x}}{x^2 - x}$.

> [!example]- Soluzione
> **Come si riconosce**: sopra $x\sqrt x = x^{3/2}$ e un pezzo che va a $0$, sotto $x^2$: grado $\frac32$ contro $2$, candidato $0$. **Il metodo**: slide 27; i mattoni sono $\frac{1}{\sqrt{x_n}} \to 0$ e $2^{-x_n} \to 0$.
>
> **Dominio**: $x \geq 0$ (radice) e $x^2 - x = x(x - 1) \neq 0$: $D = (0, 1) \cup (1, +\infty)$, illimitato superiormente.
>
> **I mattoni**, ciascuno con la definizione e poi la slide 27 (verso $\Rightarrow$):
> - $\lim_{x \to +\infty}\sqrt x = +\infty$: $\sqrt x > M \iff x > M^2$ (quadrato di positivi), $K = M^2$. Quindi $\sqrt{x_n} \to +\infty$ e $\frac{1}{\sqrt{x_n}} \to 0$.
> - $\lim_{x \to +\infty}2^{-x} = 0$: $2^{-x} < \varepsilon \iff -x < \log_2\varepsilon$ ($\log_2$ crescente) $\iff x > -\log_2\varepsilon$, e $K = \max\{1, -\log_2\varepsilon\}$. Quindi $2^{-x_n} \to 0$.
>
> Sia $(x_n)$ una qualunque successione in $D$ con $x_n \to +\infty$; da un certo indice $x_n > 1$.
> 1. Divido sopra e sotto per $x_n^2$: $f(x_n) = \frac{\frac{x_n\sqrt{x_n}}{x_n^2} + \frac{2^{-x_n}}{x_n^2}}{1 - \frac{1}{x_n}} = \frac{\frac{1}{\sqrt{x_n}} + \frac{2^{-x_n}}{x_n^2}}{1 - \frac{1}{x_n}}$ (perché $\frac{x\sqrt x}{x^2} = \frac{\sqrt x}{x} = \frac{1}{\sqrt x}$).
> 2. $\frac{1}{\sqrt{x_n}} \to 0$; $\frac{2^{-x_n}}{x_n^2} = 2^{-x_n} \cdot \frac{1}{x_n} \cdot \frac{1}{x_n} \to 0$; $\frac{1}{x_n} \to 0$.
> 3. Algebra dei limiti: $f(x_n) \to \frac{0 + 0}{1 - 0} = 0$.
> 4. Per la slide 27: $\lim_{x \to +\infty} f(x) = 0$. $\blacksquare$
>
> **Controllo**: $f(10^4) \approx 0{,}0100$, circa $\frac{1}{\sqrt{10^4}} = 0{,}01$.

### IV tutoraggio: da svolgere più avanti

Questi richiedono teoria non ancora fatta al 14/10. Il testo è qui per non perderlo; la soluzione arriva dopo la lezione indicata. Nel foglio la numerazione dell'esercizio 3 salta il (9).

**Da svolgere dopo la lezione sui limiti notevoli** ($\frac{\sin x}{x}$, $\frac{1 - \cos x}{x^2}$, $\frac{e^x - 1}{x}$, $\frac{\log(1 + x)}{x}$, sezione 4.6):
- tutoraggio 4, es. 3.7: $\displaystyle\lim_{x \to 0}\frac{(1 - \cos x)^2}{2x^3\sin x}$
- tutoraggio 4, es. 3.8: $\displaystyle\lim_{x \to 0}\frac{e^{-2x^2} - 1}{1 - \cos(2x)}$
- tutoraggio 4, es. 3.11: $\displaystyle\lim_{x \to +\infty}\left(1 + \frac{x - 5}{25 - x^2}\right)^x$
- tutoraggio 4, es. 3.13: $\displaystyle\lim_{x \to 0}\frac{e^x - e^{-x}}{\tan x}$
- tutoraggio 4, es. 3.15: $\displaystyle\lim_{x \to 1}\frac{\sin(\pi x)}{x - 1}$
- tutoraggio 4, es. 4.1, al variare di $\alpha > 0$: $\displaystyle\lim_{x \to 0^+}\frac{\sqrt{\sin(\pi x^\alpha)}}{1 - \cos(3\sqrt x)}$

**Da svolgere dopo la lezione sui limiti delle funzioni elementari e la gerarchia degli infiniti per funzioni** (sezione 4.4, slide 43):
- tutoraggio 4, es. 3.10: $\displaystyle\lim_{x \to 0^+}\sin x\,\log\left(\frac1x\right)$
- tutoraggio 4, es. 3.12: $\displaystyle\lim_{x \to 0^+}\left(\frac{x^5}{x + 7}\right)^{x^3 + x}$
- tutoraggio 4, es. 3.14: $\displaystyle\lim_{x \to 1^+}\left(\log^6(x - 1)\right)^{x - 1}$
- tutoraggio 4, es. 4.2, al variare di $\alpha > 0$: $\displaystyle\lim_{x \to +\infty}\frac{2^x + 3^{\alpha x} + x^{10}}{e^x + 100x^2}$

**Da svolgere dopo la lezione sulle funzioni continue** (continuità delle funzioni elementari e classificazione dei punti di discontinuità, capitolo 4 dopo i limiti notevoli). Esercizio 5 del foglio: «Dopo aver provato che le seguenti funzioni sono definite su tutta la retta reale, studiarne la continuità e classificarne gli eventuali punti di non continuità.»
- tutoraggio 4, es. 5.1: $f(x) = \dfrac{\sqrt{1 - 2x + x^4}}{x + 1}$ per $x \neq -1$, $f(-1) = 2$
- tutoraggio 4, es. 5.2: $f(x) = \dfrac{\sin(x^2 - 2x + 1)}{\log^2(x^2)}$ per $x \neq \pm 1$, $f(\pm 1) = \frac14$

Esercizio 6 del foglio: «Determinare l'insieme di definizione delle seguenti funzioni e studiarne la continuità, classificando gli eventuali punti di non continuità, al variare del parametro reale positivo $\alpha$.»
- tutoraggio 4, es. 6.1: $f(x) = \frac1\pi\arctan\frac1x$ per $x > 0$, $f(x) = \alpha(x + 1)$ per $x \leq 0$
- tutoraggio 4, es. 6.2: $f(x) = \dfrac{\sin(\alpha\log(1 - \alpha x))}{x(\cos(2x) - 2)}$ per $x < 0$, $f(x) = \sqrt{\vert 2 - x - 2x^2\vert}$ per $x \geq 0$

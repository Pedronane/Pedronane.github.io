---
title: Successioni monotone e numero di Nepero (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-06
lezioni: []
ordine: 7
---

Esercizi tipo esame di [Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** Sia $(a_n)$ una successione monotona crescente. Quale affermazione è sempre vera?

- a) $a_n$ converge
- b) $a_n$ ha limite, finito oppure $+\infty$
- c) $a_n$ è limitata
- d) $a_n \to +\infty$

> [!example]- Soluzione
> **b**, il teorema della slide 30: il limite esiste ed è il sup, che può essere $+\infty$. La a) e la c) sono false per $a_n = n$; la d) è falsa per $a_n = -\frac1n$, crescente e convergente a $0$.

**C2.** $\displaystyle\lim_{n \to +\infty}\left(1 - \frac{2}{n}\right)^{n}$ vale:

- a) $1$
- b) $e^{2}$
- c) $e^{-2}$
- d) $0$

> [!example]- Soluzione
> **c**. È $\left(1 + \frac{\alpha}{n}\right)^n$ con $\alpha = -2$, quindi tende a $e^{-2}$. La a) è l'errore “$1$ elevato a qualcosa fa $1$": la forma è $[1^\infty]$, indeterminata. La b) dimentica il segno. La d) ragiona "la base è minore di $1$, quindi la potenza va a $0$": vale per una base **fissa** minore di $1$ ($0{,}9^n \to 0$), non per una base che tende a $1$. Verifica: $n = 100$ dà $0{,}98^{100} \approx 0{,}133$, ed $e^{-2} \approx 0{,}135$.

**C3.** $\displaystyle\lim_{n \to +\infty}\left(1 + \frac{1}{n^2}\right)^{n}$ vale:

- a) $e$
- b) $1$
- c) $e^2$
- d) $+\infty$

> [!example]- Soluzione
> **b**. Qui $a_n = n^2$ ma l'esponente è $n$, non $n^2$. Si aggiusta: $\left(1 + \frac1{n^2}\right)^n = \left[\left(1 + \frac{1}{n^2}\right)^{n^2}\right]^{1/n}$. La base tende a $e$, l'esponente $\frac1n$ a $0$, e $e^0 = 1$. La a) applica Nepero senza controllare che esponente e $a_n$ coincidano. La c) moltiplica gli esponenti invece di dividerli ($n^2 \cdot n$ al posto di $\frac{n}{n^2}$). La d) vede solo "esponente $\to +\infty$". Verifica: $n = 100$ dà $1{,}0001^{100} \approx 1{,}010$.

**C4.** Sia $(a_n)$ crescente con $a_n \leq 5$ per ogni $n$. Allora:

- a) $\lim a_n = 5$
- b) $a_n$ converge a un numero $\ell \leq 5$
- c) $a_n$ converge a un numero $\ell < 5$
- d) $a_n$ può non avere limite

> [!example]- Soluzione
> **b**. Crescente e limitata superiormente: per l'osservazione della slide 30 converge, e il limite è il sup, che è $\leq 5$ perché $5$ è un maggiorante e il sup è il **minimo** dei maggioranti.
> - a) falsa: $a_n = 1 - \frac1n$ è crescente, $\leq 5$, e tende a $1$. Un maggiorante non è per forza il sup.
> - c) falsa: $a_n = 5 - \frac1n$ è crescente, $< 5$ sempre, e tende a $5$. La disuguaglianza fra i termini diventa larga al limite (come nella permanenza del segno).
> - d) falsa: è proprio quello che il teorema esclude.

**C5.** $\displaystyle\lim_{n \to +\infty}\left(1 + \frac{2}{n^2}\right)^{n^3}$ vale:

- a) $e^2$
- b) $1$
- c) $+\infty$
- d) $e$

> [!example]- Soluzione
> **c**. $a_n = \frac{n^2}{2} \to +\infty$; esponente $n^3 = a_n \cdot \frac{n^3}{a_n} = a_n \cdot 2n$. Quindi $\left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{2n}$: base $\to e > 1$, esponente $2n \to +\infty$, forma determinata $[e^{+\infty}] = +\infty$ (slide 50).
> - a) è il risultato se l'esponente fosse $n^2$: dimentica che resta un fattore $2n$ che va a $+\infty$.
> - b) “$1^\infty = 1$".
> - d) applica Nepero senza guardare l'esponente.
>
> Verifica: $n = 3$ dà $\left(\frac{11}{9}\right)^{27} \approx 225$; $n = 5$ dà circa $15\,000$.

**C6.** Quale successione, definita per $n \geq 1$, è strettamente decrescente?

- a) $\dfrac{(-1)^n}{n}$
- b) $\dfrac{n+1}{n}$
- c) $\dfrac{n}{n+1}$
- d) $\sin n$

> [!example]- Soluzione
> **b**. $\frac{n+1}{n} = 1 + \frac1n$, e $\frac1n$ è strettamente decrescente: $a_{n+1} - a_n = \frac{1}{n+1} - \frac1n = -\frac{1}{n(n+1)} < 0$. Valori: $2, \frac32, \frac43, \dots$
> - a) cambia segno a ogni passo, quindi sale e scende: non monotona (pur convergendo a $0$).
> - c) è strettamente **crescente** (esempio 2 della definizione).
> - d) $\sin 1 \approx 0{,}84$, $\sin 2 \approx 0{,}91$, $\sin 3 \approx 0{,}14$: sale e poi scende, non monotona.

**C7.** Quale affermazione è vera?

- a) Ogni successione limitata ha limite.
- b) Se $(a_n)$ è decrescente e $a_n \geq 0$ per ogni $n$, allora $(a_n)$ converge.
- c) Ogni successione convergente è definitivamente monotona.
- d) Se $(a_n)$ è crescente, allora $a_n \to +\infty$.

> [!example]- Soluzione
> **b**: decrescente e limitata inferiormente (da $0$), quindi converge all'inf, che è $\geq 0$.
> - a) falsa: $(-1)^n$ è limitata e non ha limite. Manca la monotonia.
> - c) falsa: $\frac{(-1)^n}{n} \to 0$ e non è monotona da nessun indice in poi (cambia segno sempre). Il teorema va in un solo verso: monotona e limitata $\Rightarrow$ convergente, non il contrario.
> - d) falsa: $1 - \frac1n$ è crescente e tende a $1$. Serve anche "illimitata".

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo.

**Esercizio 1** (lasciato per casa, slide 33). Dimostrare che $a_n = \left(1 + \frac1n\right)^n$ è strettamente crescente.

> [!example]- Soluzione
> *Tipo*: monotonia di una potenza con l'indice anche all'esponente. *Come lo riconosco*: né la differenza né il rapporto si semplificano. *Metodo*: lo stesso sviluppo con il binomio della slide 34, ma senza maggiorare, e il confronto addendo per addendo fra $a_n$ e $a_{n+1}$.
>
> 1. Dal passo 3 della dimostrazione della limitatezza, scrivendo $\frac{n-j}{n} = 1 - \frac jn$:
> $$
> a_n = \sum_{i=0}^{n} \frac{1}{i!}\left(1 - \frac1n\right)\left(1 - \frac2n\right)\cdots\left(1 - \frac{i-1}{n}\right)
> $$
> (per $i = 0$ e $i = 1$ il prodotto è vuoto e vale $1$).
> 2. Allo stesso modo, mettendo $n + 1$ al posto di $n$:
> $$
> a_{n+1} = \sum_{i=0}^{n+1} \frac{1}{i!}\left(1 - \frac{1}{n+1}\right)\left(1 - \frac{2}{n+1}\right)\cdots\left(1 - \frac{i-1}{n+1}\right)
> $$
> 3. **Termine per termine**: per $1 \leq j \leq i - 1$ vale $\frac{j}{n+1} < \frac jn$ (stesso numeratore, denominatore più grande), quindi $1 - \frac{j}{n+1} > 1 - \frac{j}{n} \geq 0$. Ogni fattore di $a_{n+1}$ è maggiore del corrispondente di $a_n$, e sono tutti $\geq 0$, quindi i prodotti stanno nello stesso ordine. L'$i$-esimo addendo di $a_{n+1}$ è $\geq$ l'$i$-esimo di $a_n$, e strettamente per $i \geq 2$ (c'è almeno un fattore).
> 4. **Un termine in più**: $a_{n+1}$ ha anche l'addendo $i = n + 1$, che è un prodotto di fattori positivi, quindi $> 0$.
> 5. Sommando: $a_{n+1} > a_n$. Per $n \geq 1$ c'è almeno l'addendo $i = 2$ (se $n \geq 2$) o l'addendo in più (se $n = 1$) a dare la disuguaglianza stretta. $\blacksquare$
>
> *Verifica*: $a_1 = 2 < a_2 = \frac94 = 2{,}25 < a_3 = \frac{64}{27} \approx 2{,}37$. Con lo sviluppo: $a_2 = 1 + 1 + \frac12\left(1 - \frac12\right) = 2{,}25$. Giusto.

**Esercizio 2.** Calcolare $\displaystyle\lim_{n \to +\infty}\left(\frac{n+1}{n-1}\right)^n$.

> [!example]- Soluzione
> *Tipo*: $[1^\infty]$. *Come lo riconosco*: base $\frac{n+1}{n-1} = \frac{1 + 1/n}{1 - 1/n} \to 1$, esponente $\to +\infty$. *Metodo*: Nepero generalizzato con lo schema in 5 passi.
>
> 1. Si scrive la base come $1 + \frac{1}{a_n}$ con "somma e sottrai" al numeratore:
> $$
> \frac{n+1}{n-1} = \frac{n - 1 + 2}{n-1} = 1 + \frac{2}{n-1} = 1 + \frac{1}{a_n}, \qquad a_n = \frac{n-1}{2} \to +\infty
> $$
> 2. Si aggiusta l'esponente: $n = a_n \cdot \frac{n}{a_n} = a_n \cdot \frac{2n}{n-1}$.
> 3. Quindi
> $$
> \left(\frac{n+1}{n-1}\right)^n = \left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{\frac{2n}{n-1}}
> $$
> 4. La base tende a $e$ (Nepero generalizzato), l'esponente $\frac{2n}{n-1} = \frac{2}{1 - 1/n} \to 2$.
> 5. Per la regola della potenza il limite è $e^2$.
>
> *Verifica*: $n = 100$: $\left(\frac{101}{99}\right)^{100} \approx 7{,}390$; $e^2 \approx 7{,}389$.

**Esercizio 3.** Studiare la monotonia di $a_n = \dfrac{2^n}{n!}$, $n \geq 1$, e dedurne che ha limite finito.

> [!example]- Soluzione
> *Tipo*: monotonia con esponenziali e fattoriali. *Metodo*: i termini sono positivi, si usa il rapporto (i fattoriali si semplificano).
> $$
> \frac{a_{n+1}}{a_n} = \frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} = \frac{2}{n+1}
> $$
> (perché $\frac{2^{n+1}}{2^n} = 2$ e $\frac{n!}{(n+1)!} = \frac{1}{n+1}$). Per $n = 1$ vale $1$, quindi $a_2 = a_1 = 2$. Per $n \geq 2$ vale $\frac{2}{n+1} < 1$, quindi $a_{n+1} < a_n$. La successione è decrescente per $n \geq 1$, strettamente da $n = 2$ in poi: $2, 2, \frac43, \frac23, \frac{4}{15}, \dots$
>
> È limitata inferiormente da $0$ (termini positivi). Per l'osservazione della slide 30 ammette limite finito, uguale all'$\inf\{a_n\}$. Il valore del limite, $0$, viene dalla gerarchia degli infiniti ($2^n \ll n!$) o dal criterio del rapporto ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)): $\frac{a_{n+1}}{a_n} \to 0 < 1$. Oppure con la tecnica dell'esercizio 8: $a_{n+1} = a_n \cdot \frac{2}{n+1}$, e passando al limite $\ell = \ell \cdot 0 = 0$.

**Esercizio 4.** Sia $a_n = \dfrac{2n - 1}{3n + 2}$, $n \in \mathbb{N}$. Dimostrare che è strettamente crescente, dedurne che converge, e verificare che il limite è $\sup\{a_n\} = \frac23$.

> [!example]- Soluzione
> *Tipo*: monotonia di un quoziente, poi sup con le due condizioni. *Metodo*: differenza con denominatore comune; per il sup, maggiorante più "nessuno più piccolo lo è".
>
> **Monotonia.**
> 1. $a_{n+1} = \frac{2(n+1) - 1}{3(n+1) + 2} = \frac{2n + 1}{3n + 5}$.
> 2. $a_{n+1} - a_n = \frac{(2n+1)(3n+2) - (2n-1)(3n+5)}{(3n+5)(3n+2)}$ (denominatore comune).
> 3. Numeratore, un prodotto alla volta: $(2n+1)(3n+2) = 6n^2 + 7n + 2$; $(2n-1)(3n+5) = 6n^2 + 7n - 5$; differenza $2 - (-5) = 7$.
> 4. $a_{n+1} - a_n = \frac{7}{(3n+2)(3n+5)} > 0$ (denominatore positivo per $n \geq 0$): strettamente crescente.
>
> **Limitatezza.** $\frac23 - a_n = \frac{2(3n+2) - 3(2n-1)}{3(3n+2)} = \frac{7}{3(3n+2)} > 0$, quindi $a_n < \frac23$ per ogni $n$.
>
> **Teorema.** Crescente e limitata superiormente: converge, e il limite è il sup.
>
> **Il sup è $\frac23$.** È un maggiorante (sopra). Dato $\varepsilon > 0$: $a_n > \frac23 - \varepsilon \iff \frac{7}{3(3n+2)} < \varepsilon \iff 3n + 2 > \frac{7}{3\varepsilon}$, che vale per $n$ abbastanza grande. Quindi $\frac23 - \varepsilon$ non è un maggiorante.
>
> *Verifica*: $a_0 = -\frac12$, $a_1 = \frac15$, $a_2 = \frac38$, $a_4 = \frac12$, sotto $\frac23 \approx 0{,}667$. Con l'algebra dei limiti: $\frac{2 - 1/n}{3 + 2/n} \to \frac23$. Coincide.

**Esercizio 5.** Calcolare $\displaystyle\lim_{n \to +\infty}\left(\frac{n^2+3}{n^2+1}\right)^{n^2}$.

> [!example]- Soluzione
> *Tipo*: $[1^\infty]$. *Come lo riconosco*: base $\frac{n^2+3}{n^2+1} \to 1$ (stesso grado, coefficienti uguali), esponente $n^2 \to +\infty$. *Metodo*: Nepero generalizzato.
>
> 1. Somma e sottrai: $\frac{n^2+3}{n^2+1} = \frac{(n^2+1) + 2}{n^2+1} = 1 + \frac{2}{n^2+1}$.
> 2. Porto il $2$ sotto: $\frac{2}{n^2+1} = \frac{1}{\frac{n^2+1}{2}}$, quindi $a_n = \frac{n^2+1}{2} \to +\infty$.
> 3. Esponente: $n^2 = a_n \cdot \frac{n^2}{a_n} = a_n \cdot \frac{2n^2}{n^2+1}$.
> 4. $\left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{\frac{2n^2}{n^2+1}}$: base $\to e$, esponente $\frac{2}{1 + 1/n^2} \to 2$.
> 5. Regola della potenza: $e^2$.
>
> *Verifica*: $n = 10$: $\left(\frac{103}{101}\right)^{100} \approx 7{,}105$; $n = 100$: $\approx 7{,}386$; $e^2 \approx 7{,}389$.

**Esercizio 6.** Calcolare $\displaystyle\lim_{n \to +\infty}\left(\frac{3n-1}{3n+2}\right)^{2n}$.

> [!example]- Soluzione
> *Tipo*: $[1^\infty]$ con base **sotto** $1$. *Come lo riconosco*: $\frac{3n-1}{3n+2} \to 1$, esponente $\to +\infty$; il numeratore è più piccolo, quindi verrà $1 + \frac{1}{a_n}$ con $a_n$ negativo. *Metodo*: Nepero generalizzato nella versione con $|a_n|$.
>
> 1. Somma e sottrai: $\frac{3n-1}{3n+2} = \frac{(3n+2) - 3}{3n+2} = 1 - \frac{3}{3n+2}$.
> 2. $-\frac{3}{3n+2} = \frac{1}{-\frac{3n+2}{3}}$, quindi $a_n = -\frac{3n+2}{3} \to -\infty$, e $|a_n| \to +\infty$.
> 3. Esponente: $2n = a_n \cdot \frac{2n}{a_n} = a_n \cdot \left(-\frac{6n}{3n+2}\right)$ (dividere per $-\frac{3n+2}{3}$ è moltiplicare per $-\frac{3}{3n+2}$).
> 4. $-\frac{6n}{3n+2} = -\frac{6}{3 + 2/n} \to -2$.
> 5. Base $\to e$, esponente $\to -2$: il limite è $e^{-2}$.
>
> La base $\frac{3n-1}{3n+2}$ è positiva per ogni $n \geq 1$, quindi le potenze con esponente non intero hanno senso.
>
> *Verifica*: $n = 100$: $\left(\frac{299}{302}\right)^{200} \approx 0{,}1358$; $e^{-2} \approx 0{,}1353$. Di buon senso: base sotto $1$, quindi il risultato deve essere sotto $1$.

**Esercizio 7** (livello 30). Sia $b_n = \left(1 + \frac1n\right)^{n+1}$, $n \geq 1$.
1. Dimostrare che $(b_n)$ è strettamente decrescente (per $n \geq 1$).
2. Dedurre che $\left(1 + \frac1n\right)^n < e < \left(1 + \frac1n\right)^{n+1}$ per ogni $n \geq 1$, e in particolare che $e < 3$.

> [!example]- Soluzione
> *Tipo*: monotonia di una potenza con l'indice all'esponente, poi una stima di $e$ dai due lati. *Metodo*: rapporto fra termini consecutivi ($b_n > 0$), stimato con la **disuguaglianza di Bernoulli**, che si ricava dal binomio di Newton. *Perché*: è la "gemella" della successione di Nepero; una sale verso $e$, l'altra scende verso $e$, e $e$ resta stretto fra le due.
>
> **Bernoulli.** Per $x \geq 0$ e $n \geq 1$: $(1 + x)^n \geq 1 + nx$. Infatti con Newton $(1+x)^n = 1 + nx + \binom n2 x^2 + \dots$, e gli addendi dal terzo in poi sono $\geq 0$.
>
> **Punto 1.** Mostro $\frac{b_{n-1}}{b_n} > 1$ per ogni $n \geq 2$, cioè $b_{n-1} > b_n$.
> 1. $b_{n-1} = \left(1 + \frac{1}{n-1}\right)^n = \left(\frac{n}{n-1}\right)^n$ e $b_n = \left(\frac{n+1}{n}\right)^{n+1}$.
> 2. $\frac{b_{n-1}}{b_n} = \left(\frac{n}{n-1}\right)^n \left(\frac{n}{n+1}\right)^{n+1} = \left(\frac{n}{n-1}\right)^n \left(\frac{n}{n+1}\right)^{n} \cdot \frac{n}{n+1}$ (separo un fattore).
> 3. Unisco le due potenze $n$-esime: $\frac{n}{n-1} \cdot \frac{n}{n+1} = \frac{n^2}{n^2 - 1}$, quindi $\frac{b_{n-1}}{b_n} = \left(\frac{n^2}{n^2-1}\right)^n \cdot \frac{n}{n+1}$.
> 4. $\frac{n^2}{n^2-1} = 1 + \frac{1}{n^2 - 1}$ (somma e sottrai), con $\frac{1}{n^2-1} > 0$ per $n \geq 2$.
> 5. Bernoulli con $x = \frac{1}{n^2-1}$: $\left(1 + \frac{1}{n^2-1}\right)^n \geq 1 + \frac{n}{n^2-1}$.
> 6. $\frac{n}{n^2 - 1} > \frac{n}{n^2} = \frac1n$ (stesso numeratore, denominatore più piccolo).
> 7. Quindi $\frac{b_{n-1}}{b_n} > \left(1 + \frac1n\right) \cdot \frac{n}{n+1} = \frac{n+1}{n} \cdot \frac{n}{n+1} = 1$. $\blacksquare$
>
> **Punto 2.**
> 1. $(b_n)$ è decrescente e positiva, quindi converge (teorema delle monotone), e il limite è $\inf\{b_n\}$.
> 2. Il valore: $b_n = \left(1 + \frac1n\right)^n \cdot \left(1 + \frac1n\right) \to e \cdot 1 = e$ (prodotto dei limiti).
> 3. $a_n = \left(1 + \frac1n\right)^n$ è strettamente crescente con limite $e = \sup$: quindi $a_n < a_{n+1} \leq e$, cioè $a_n < e$.
> 4. $b_n$ è strettamente decrescente con limite $e = \inf$: quindi $b_n > b_{n+1} \geq e$, cioè $b_n > e$.
> 5. Con $n = 5$: $e < b_5 = \left(\frac65\right)^6 = \frac{46\,656}{15\,625} \approx 2{,}986 < 3$.
>
> È la dimostrazione di “$e < 3$" che in [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/) il confronto da solo non dava.
>
> *Verifica*: $b_1 = 4$, $b_2 = 3{,}375$, $b_3 \approx 3{,}160$, $b_{10} \approx 2{,}853$, $b_{100} \approx 2{,}732$: scendono. Con $n = 100$: $2{,}7048 < e < 2{,}7319$.

**Esercizio 8** (livello 30). Sia $a_n = \dfrac{n!}{n^n}$, $n \geq 1$. Dimostrare che $(a_n)$ è decrescente e calcolarne il limite **senza** carabinieri, passando al limite nella relazione fra $a_{n+1}$ e $a_n$.

> [!example]- Soluzione
> *Tipo*: limite di una successione di cui si conosce il rapporto fra termini consecutivi. *Metodo*: (1) il teorema delle monotone dà l'esistenza di $\ell$; (2) si scrive $a_{n+1} = a_n \cdot (\text{qualcosa})$ e si passa al limite da tutte e due le parti; (3) si risolve l'equazione in $\ell$. *Perché funziona*: il passo (2) ha senso solo se si sa già che il limite esiste, ed è quello che dà il teorema.
>
> **Monotonia.**
> 1. $\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{(n+1) \cdot n^n}{(n+1)^{n+1}} = \frac{n^n}{(n+1)^n}$ (perché $\frac{(n+1)!}{n!} = n + 1$, poi semplifico un $n + 1$).
> 2. $\frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n = \frac{1}{\left(1 + \frac1n\right)^n}$.
> 3. $\left(1 + \frac1n\right)^n \geq 2$ (vale $2$ per $n = 1$ e la successione di Nepero cresce), quindi $\frac{a_{n+1}}{a_n} \leq \frac12 < 1$: strettamente decrescente.
>
> **Esistenza.** $a_n > 0$, decrescente: per il teorema delle monotone $a_n \to \ell = \inf\{a_n\}$, con $\ell \geq 0$ ($0$ è un minorante).
>
> **Valore.**
> 1. $a_{n+1} = a_n \cdot \frac{1}{\left(1 + \frac1n\right)^n}$ per ogni $n \geq 1$.
> 2. Sinistra: $a_{n+1} \to \ell$, perché $(a_{n+1})_n$ è la stessa successione spostata di un indice (se $|a_n - \ell| < \varepsilon$ per $n > \nu$, a maggior ragione per $n + 1 > \nu$).
> 3. Destra: $a_n \to \ell$ e $\frac{1}{(1 + 1/n)^n} \to \frac1e$ (quoziente dei limiti), quindi il prodotto tende a $\frac{\ell}{e}$.
> 4. Per l'unicità del limite: $\ell = \frac{\ell}{e}$, cioè $\ell\left(1 - \frac1e\right) = 0$.
> 5. $1 - \frac1e \neq 0$ (perché $e \neq 1$), quindi $\ell = 0$.
>
> *Controllo con un'altra strada*: dal passo 3 della monotonia, $a_{n+1} \leq \frac{a_n}{2}$, quindi $a_n \leq \frac{a_1}{2^{n-1}} = \frac{1}{2^{n-1}} \to 0$. Ed è lo stesso limite dell'esercizio 3 di [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/), fatto lì con i carabinieri. *Verifica numerica*: $a_5 = \frac{120}{3125} \approx 0{,}038$, $a_{10} \approx 0{,}00036$.

**Esercizio 9** (livello 30; le successioni definite per ricorrenza non sono sulle slide, ma il teorema delle monotone è proprio lo strumento per studiarle). Sia $a_1 = 1$ e $a_{n+1} = \sqrt{2 + a_n}$ per $n \geq 1$. Dimostrare che $(a_n)$ converge e calcolarne il limite.

> [!example]- Soluzione
> *Tipo*: successione per ricorrenza: ogni termine si calcola dal precedente, non c'è una formula diretta in $n$. *Come lo riconosco*: la definizione contiene $a_{n+1}$ in funzione di $a_n$. *Metodo*: (1) limitatezza, (2) monotonia, (3) teorema delle monotone per l'esistenza, (4) si passa al limite nella relazione. Le proprietà (1) e (2) si dimostrano **per induzione**: si verifica il primo caso, poi si mostra che se vale per $a_n$ vale per $a_{n+1}$. Il principio di induzione non è ancora stato trattato nel corso: qui basta l'idea dell'effetto domino, se vale per $n = 1$ e passa da ogni $n$ al successivo, vale per tutti.
>
> I primi termini, per orientarsi: $a_1 = 1$, $a_2 = \sqrt3 \approx 1{,}732$, $a_3 \approx 1{,}932$, $a_4 \approx 1{,}983$. Sembra crescere verso $2$.
>
> **(1) $1 \leq a_n < 2$ per ogni $n$.**
> - $n = 1$: $a_1 = 1$, e $1 \leq 1 < 2$.
> - Se $1 \leq a_n < 2$: allora $3 \leq 2 + a_n < 4$, e siccome la radice è crescente, $\sqrt3 \leq a_{n+1} < \sqrt4 = 2$. In particolare $1 \leq a_{n+1} < 2$.
>
> **(2) Crescente.** $a_{n+1} > a_n \iff \sqrt{2 + a_n} > a_n$. Siccome $a_n > 0$ (punto 1), posso elevare al quadrato i due membri positivi senza cambiare il verso:
> $$
> \iff 2 + a_n > a_n^2 \iff a_n^2 - a_n - 2 < 0 \iff (a_n - 2)(a_n + 1) < 0
> $$
> (le radici di $x^2 - x - 2$ sono $2$ e $-1$). Il prodotto è negativo per $-1 < a_n < 2$, e il punto 1 dice proprio $1 \leq a_n < 2$. Quindi $a_{n+1} > a_n$ per ogni $n$.
>
> **(3) Esistenza.** Crescente e limitata superiormente da $2$: converge a $\ell = \sup\{a_n\}$, e $1 \leq \ell \leq 2$ (confronto, [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/)).
>
> **(4) Valore.**
> 1. $a_{n+1} \to \ell$ (stessa successione spostata di un indice).
> 2. $2 + a_n \to 2 + \ell$, e $\sqrt{2 + a_n} = (2 + a_n)^{1/2} \to \sqrt{2 + \ell}$ (potenza dei limiti con base $2 + \ell \geq 3 > 0$, [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)).
> 3. Unicità del limite: $\ell = \sqrt{2 + \ell}$.
> 4. Elevo al quadrato ($\ell \geq 1 > 0$): $\ell^2 = 2 + \ell \iff \ell^2 - \ell - 2 = 0 \iff \ell = 2$ oppure $\ell = -1$.
> 5. $\ell \geq 1$, quindi $\ell = 2$.
>
> *Verifica*: $a_6 \approx 1{,}99893$, $a_9 \approx 1{,}99998$. Di buon senso: $2$ è il numero che la ricorrenza lascia fermo, $\sqrt{2 + 2} = 2$.

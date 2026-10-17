---
title: Calcolo dei limiti di successioni (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-06
lezioni: []
ordine: 9
---

Esercizi tipo esame di [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** Quale di queste è una forma **determinata**?

- a) $[+\infty - \infty]$
- b) $[0 \cdot \infty]$
- c) $[0^{+\infty}]$
- d) $[1^{+\infty}]$

> [!example]- Soluzione
> **c**: $a_n \to 0^+$, $b_n \to +\infty$ dà sempre $a_n^{b_n} \to 0$ (slide 50). Un numero piccolo positivo elevato a un esponente enorme è ancora più piccolo. Le altre tre sono nella lista delle forme indeterminate (slide 52-54).
> - a) $(n + 7) - n \to 7$ e $2n - n \to +\infty$: stessa forma, limiti diversi;
> - b) $n \cdot \frac1n \to 1$ e $n^2 \cdot \frac1n \to +\infty$;
> - d) $\left(1 + \frac1n\right)^n \to e$ e $\left(1 + \frac{1}{n^2}\right)^n \to 1$ (prima figura, a destra). La trappola è pensare “$1$ elevato a qualunque cosa fa $1$": vale solo se la base è **esattamente** $1$.

**C2.** $\displaystyle\lim_{n \to +\infty}\frac{3n^2 - n^3 + 1}{2n^3 + 5n}$ vale:

- a) $\frac32$
- b) $-\frac12$
- c) $0$
- d) $-\infty$

> [!example]- Soluzione
> **b**. Numeratore e denominatore hanno grado $3$: raccogliendo $n^3$, $\frac{n^3\left(\frac3n - 1 + \frac{1}{n^3}\right)}{n^3\left(2 + \frac{5}{n^2}\right)} \to \frac{-1}{2}$. La a) prende i coefficienti di $n^2$ e $n^3$ sbagliando chi comanda; la d) dimentica che anche il denominatore è di grado $3$.
> - c) viene da chi confronta $3n^2$ con $2n^3$, cioè guarda il primo termine scritto invece del termine di grado massimo.
> - *Verifica*: $n = 100$ dà circa $-0{,}485$.

**C3.** Sia $a_n > 0$ con $\frac{a_{n+1}}{a_n} \to 1$. Allora:

- a) $a_n \to 1$
- b) $a_n \to 0$
- c) $a_n$ è limitata
- d) non si può concludere nulla sul limite di $a_n$

> [!example]- Soluzione
> **d**, la nota della slide 62: $a_n = n$ ha rapporto $\to 1$ e diverge, $a_n = \frac1n$ ha rapporto $\to 1$ e tende a $0$. Questi due esempi smentiscono anche a), b) e c).
> - a) confonde il limite del rapporto con il limite della successione: $a_n = 5$ costante ha rapporto $1$ e limite $5$;
> - b) è falsa per $a_n = n$;
> - c) è falsa per $a_n = n$, che non è limitata.

**C4.** Quale successione tende a $0$?

- a) $\dfrac{n^{50}}{1{,}01^n}$
- b) $\dfrac{2^n}{n^{3}}$
- c) $\dfrac{n!}{5^n}$
- d) $\dfrac{n}{\log n}$

> [!example]- Soluzione
> **a**: per la gerarchia $n^\alpha \ll a^n$ per ogni $\alpha > 0$ e ogni $a > 1$, anche $\alpha = 50$ e $a = 1{,}01$. Le altre hanno sopra l'infinito di ordine superiore e tendono a $+\infty$.
> - b) $n^3 \ll 2^n$: l'esponenziale sta sopra, $\to +\infty$;
> - c) $5^n \ll n!$: il fattoriale sta sopra, $\to +\infty$;
> - d) $\log n \ll n$: $n$ sta sopra, $\to +\infty$.
>
> La a) è controintuitiva perché per $n$ "ragionevoli" la frazione è enorme: a $n = 1000$ vale circa $5 \cdot 10^{145}$. L'esponenziale passa sopra solo da $n = 54\,833$ in poi. Senza calcolatrice, all'esame si risponde con la gerarchia, non con i numeri.

**C5** (la trappola della slide 67). $\displaystyle\lim_{n \to +\infty}\frac{\log(5^n + n)}{n}$ vale:

- a) $0$
- b) $1$
- c) $\log 5$
- d) $+\infty$

> [!example]- Soluzione
> **c**. Dentro il logaritmo comanda $5^n$: $\log(5^n + n) = n\log 5 + \log\left(1 + \frac{n}{5^n}\right)$, e il secondo pezzo sta fra $0$ e $\log 2$. Diviso $n$: $\log 5 + \frac{\text{limitata}}{n} \to \log 5$. La a) è l'errore "logaritmo su $n$, gerarchia": vale solo per il logaritmo di una potenza di $n$.
> - b) viene da chi pensa “$\log$ e $n$ sono dello stesso ordine" senza calcolare la costante;
> - d) viene da chi guarda solo il $5^n$ e dimentica che il logaritmo lo "abbassa" a $n\log 5$.
> - *Verifica*: $n = 20$ dà $1{,}60944$, e $\log 5 \approx 1{,}60944$.

**C6** (sul modello del foglio 2 del 2020, esercizio 3.1). Il limite di $a_n = \left(2 + \frac1n\right)^n$:

- a) è $+\infty$
- b) vale $e$
- c) vale $2e$
- d) non esiste

> [!example]- Soluzione
> **a**. La base tende a $2 > 1$, l'esponente a $+\infty$: forma **determinata** $[2^{+\infty}] = +\infty$ (slide 50, è proprio l'esempio della tabella).
> - b) è l'errore di vedere $\frac1n$ ed esponente $n$ e pensare subito a Nepero: Nepero vuole la base che tende a $1$;
> - c) "spezza" la potenza come se fosse $2^n \cdot$ qualcosa che tende a $e$: in realtà $\left(2 + \frac1n\right)^n = 2^n\left(1 + \frac{1}{2n}\right)^n$, e $\left(1 + \frac{1}{2n}\right)^n \to e^{1/2}$, quindi il tutto è $[+\infty \cdot \sqrt e] = +\infty$;
> - d) il limite esiste, è infinito.
> - *Verifica*: $n = 10$ dà circa $1668$.

**C7** (sul modello del foglio 2 del 2020, esercizi 3.5-3.8). $\displaystyle\lim_{n \to +\infty}\left(\frac{n^2 + 1}{n^2 - 2}\right)^{n}$ vale:

- a) $e^3$
- b) $e$
- c) $1$
- d) $+\infty$

> [!example]- Soluzione
> **c**. Forma $[1^{+\infty}]$, moltiplica e dividi.
> 1. Somma e sottrai: $\frac{n^2 + 1}{n^2 - 2} = 1 + \frac{(n^2 + 1) - (n^2 - 2)}{n^2 - 2} = 1 + \frac{3}{n^2 - 2}$.
> 2. $a_n = \frac{n^2 - 2}{3} \to +\infty$.
> 3. Esponente nuovo: $\frac{n}{a_n} = \frac{3n}{n^2 - 2} \to 0$ (grado $1$ sotto grado $2$).
> 4. Limite $e^0 = 1$.
>
> La base si avvicina a $1$ come $\frac{3}{n^2}$, l'esponente cresce solo come $n$: non fa in tempo a spostarla da $1$.
> - a) prende $3$ (il numeratore della frazione) come esponente finale, dimenticando di dividere per $n^2$;
> - b) "ogni $[1^\infty]$ fa $e$": falso, $e$ è solo il caso in cui l'esponente nuovo tende a $1$;
> - d) vede $[1^{+\infty}]$ e pensa che l'esponente vinca.
> - *Verifica*: $n = 100$ dà circa $1{,}03$.

**C8.** Sia $a_n = \dfrac{n^n}{3^n\, n!}$. Allora:

- a) $a_n \to 0$
- b) $a_n \to +\infty$
- c) $a_n \to 1$
- d) il criterio del rapporto non permette di concludere

> [!example]- Soluzione
> **a**. Termini positivi, criterio del rapporto:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)^{n+1}}{3^{n+1}(n+1)!} \cdot \frac{3^n\,n!}{n^n} = \frac{(n+1)^{n+1}}{(n+1)\,n^n} \cdot \frac13 = \left(\frac{n+1}{n}\right)^n \cdot \frac13 = \frac{\left(1 + \frac1n\right)^n}{3} \to \frac e3 < 1
> $$
> - b) viene dalla gerarchia usata a metà: $n^n \gg n!$ è vero, ma sotto c'è anche $3^n$, e insieme $3^n n!$ vince;
> - c) il criterio non dà mai un limite finito non nullo;
> - d) il criterio non conclude solo con $L = 1$, e $\frac e3 \approx 0{,}906 \neq 1$.
> - *Verifica*: $n = 10$ dà $0{,}047$, $n = 30$ dà $0{,}0038$. È il reciproco dell'esempio del 12/10 con $a = 3$, che diverge.

**C9.** $\displaystyle\lim_{n \to +\infty}\left(\sqrt{n^2 + 3n} - n\right)$ vale:

- a) $0$
- b) $\frac32$
- c) $3$
- d) $+\infty$

> [!example]- Soluzione
> **b**. Forma $[+\infty - \infty]$ con una radice: razionalizza.
> $$
> \sqrt{n^2 + 3n} - n = \frac{(n^2 + 3n) - n^2}{\sqrt{n^2 + 3n} + n} = \frac{3n}{n\left(\sqrt{1 + \frac3n} + 1\right)} \to \frac{3}{1 + 1} = \frac32
> $$
> - a) "sotto la radice comanda $n^2$, quindi $\sqrt{n^2 + 3n} \approx n$ e la differenza è $0$": due infiniti dello stesso ordine possono avere differenza che non va a $0$ (lo stesso errore è nella nota del tutoraggio);
> - c) dimentica il $+1$ al denominatore, cioè che la somma delle radici vale circa $2n$, non $n$;
> - d) guarda solo $\sqrt{n^2 + 3n} \to +\infty$.
> - *Verifica*: $n = 100$ dà $1{,}489$, $n = 10\,000$ dà $1{,}49989$.

**C10.** Sia $b_n \to 0$ con $b_n \neq 0$ per ogni $n$. Allora $\frac{1}{b_n}$:

- a) tende a $+\infty$
- b) tende a $+\infty$ oppure a $-\infty$
- c) può non avere limite
- d) tende a $0$

> [!example]- Soluzione
> **c**, la nota del prof sulla slide 49: con $b_n = \frac{(-1)^n}{n}$ si ha $\frac{1}{b_n} = (-1)^n n$, che salta fra valori positivi e negativi sempre più grandi e non ha limite.
> - a) vale solo se $b_n \to 0^+$; con $b_n = -\frac1n$ il reciproco va a $-\infty$;
> - b) è falsa per $b_n = \frac{(-1)^n}{n}$. Quello che si può dire è $\frac{1}{|b_n|} \to +\infty$;
> - d) confonde $\left[\frac{1}{0}\right]$ con $\left[\frac{1}{\infty}\right]$.

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere la forma e la tecnica.

**Esercizio 1** (proposto dal prof alla slide 46). Dimostrare con la definizione di limite che se $a_n \to a$ e $b_n \to b$, con $a, b \in \mathbb{R}$, allora $a_n + b_n \to a + b$.

> [!example]- Soluzione
> *Tipo*: dimostrazione con la definizione di limite. *L'idea*: l'errore della somma, $(a_n + b_n) - (a + b)$, è la somma dei due errori $(a_n - a) + (b_n - b)$. Se ciascuno è minore di metà della tolleranza, la somma è minore della tolleranza intera. Quindi si chiede a ciascuna successione metà di $\varepsilon$.
>
> 1. Fissiamo $\varepsilon > 0$.
> 2. Per $a_n \to a$, con tolleranza $\frac\varepsilon2$: esiste $\nu_1$ con $|a_n - a| < \frac\varepsilon2$ per $n > \nu_1$.
> 3. Per $b_n \to b$, con tolleranza $\frac\varepsilon2$: esiste $\nu_2$ con $|b_n - b| < \frac\varepsilon2$ per $n > \nu_2$.
> 4. Sia $\nu_\varepsilon := \max\{\nu_1, \nu_2\}$: per $n > \nu_\varepsilon$ valgono insieme i passi 2 e 3.
> 5. Riordino gli addendi: $|(a_n + b_n) - (a + b)| = |(a_n - a) + (b_n - b)|$.
> 6. Disuguaglianza triangolare $|x + y| \leq |x| + |y|$: $\leq |a_n - a| + |b_n - b|$.
> 7. Passi 2 e 3: $< \frac\varepsilon2 + \frac\varepsilon2 = \varepsilon$.
>
> Quindi per ogni $\varepsilon > 0$ esiste $\nu_\varepsilon$ con $|(a_n + b_n) - (a + b)| < \varepsilon$ per $n > \nu_\varepsilon$: $a_n + b_n \to a + b$. $\blacksquare$
>
> *Perché il massimo*: $\nu_1$ garantisce il passo 2, $\nu_2$ il passo 3; oltre il più grande dei due valgono entrambi. È lo stesso trucco della dimostrazione dei carabinieri.

**Esercizio 2** (slide 60, esercizi 1, 3, 5). Calcolare
$$
\text{a)}\ \lim \frac{n(1 - 2n^2) - 3n + 1}{(4 - n)(5 - n)} \qquad \text{b)}\ \lim n\left(\sqrt{n^2 + 2} - \sqrt{n^2 + 3}\right) \qquad \text{c)}\ \lim \frac{5^n}{2^n + 3^n}
$$

> [!example]- Soluzione
> **a)** *Tipo*: rapporto di polinomi, $\left[\frac{-\infty}{+\infty}\right]$. *Metodo*: sviluppare, poi raccogli chi comanda.
> 1. Numeratore: $n(1 - 2n^2) - 3n + 1 = n - 2n^3 - 3n + 1 = -2n^3 - 2n + 1$.
> 2. Denominatore: $(4 - n)(5 - n) = 20 - 4n - 5n + n^2 = n^2 - 9n + 20$.
> 3. Raccolgo $n^3$ sopra e $n^2$ sotto:
> $$
> \frac{n^3\left(-2 - \frac{2}{n^2} + \frac{1}{n^3}\right)}{n^2\left(1 - \frac9n + \frac{20}{n^2}\right)} = n \cdot \frac{-2 - \frac{2}{n^2} + \frac{1}{n^3}}{1 - \frac9n + \frac{20}{n^2}}
> $$
> 4. La frazione tende a $\frac{-2}{1} = -2$, e $n \to +\infty$: forma $[+\infty \cdot (-2)] = -\infty$.
>
> *Verifica*: $n = 100$ dà circa $-219$, e grado $3$ su grado $2$ con coefficienti $-2$ e $1$ fa prevedere $\approx -2n = -200$.
>
> **b)** *Tipo*: $[\infty \cdot 0]$, perché la differenza di radici tende a $0$. *Come lo riconosco*: differenza di radici quadrate con argomenti dello stesso grado. *Metodo*: razionalizza, poi raccogli.
> 1. Moltiplico e divido per $\sqrt{n^2+2} + \sqrt{n^2+3}$:
> $$
> n\left(\sqrt{n^2+2} - \sqrt{n^2+3}\right) = n \cdot \frac{(n^2 + 2) - (n^2 + 3)}{\sqrt{n^2+2} + \sqrt{n^2+3}} = \frac{-n}{\sqrt{n^2+2} + \sqrt{n^2+3}}
> $$
> 2. Raccolgo $n$ sotto le radici, $\sqrt{n^2 + 2} = \sqrt{n^2\left(1 + \frac{2}{n^2}\right)} = n\sqrt{1 + \frac{2}{n^2}}$ (con $n > 0$):
> $$
> = \frac{-n}{n\left(\sqrt{1 + \frac2{n^2}} + \sqrt{1 + \frac3{n^2}}\right)} = \frac{-1}{\sqrt{1 + \frac2{n^2}} + \sqrt{1 + \frac3{n^2}}} \to \frac{-1}{1 + 1} = -\frac12
> $$
>
> *Verifica*: $n = 100$ dà $-0{,}49994$.
>
> **c)** *Tipo*: $\left[\frac\infty\infty\right]$ con esponenziali. *Metodo*: raccogli chi comanda; fra esponenziali comanda la base più grande, $3^n$ al denominatore.
> 1. $2^n + 3^n = 3^n\left(\frac{2^n}{3^n} + 1\right) = 3^n\left(\left(\frac23\right)^n + 1\right)$.
> 2. $\frac{5^n}{3^n\left(\left(\frac23\right)^n + 1\right)} = \frac{\left(\frac53\right)^n}{\left(\frac23\right)^n + 1}$.
> 3. $\left(\frac53\right)^n \to +\infty$ (base $> 1$), $\left(\frac23\right)^n \to 0$ (base $< 1$): forma $\left[\frac{+\infty}{0 + 1}\right] = +\infty$.
>
> *Verifica*: $n = 20$ dà circa $27\,343$.

**Esercizio 3** (slide 60, esercizi 2, 4, 6). Calcolare
$$
\text{a)}\ \lim\left(\frac{n^2 - n + 1}{n^2 - 1}\right)^{\frac{3 - 2n^2}{n + 3}} \qquad \text{b)}\ \lim\left(\frac{\sqrt{n-1}}{n+1}\right)^{n + 3^{-n}} \qquad \text{c)}\ \lim \frac{2^n + n^7}{\log n + n^2}
$$

> [!example]- Soluzione
> **a)** *Tipo e forma*: la base tende a $1$ (grado $2$ sopra e sotto, coefficienti $1$), l'esponente a $-\infty$ (grado $2$ sopra, $1$ sotto, coefficiente $-2$): forma $[1^\infty]$. *Metodo*: moltiplica e dividi, nei quattro passi.
> 1. Somma e sottrai nella base:
> $$
> \frac{n^2 - n + 1}{n^2 - 1} = 1 + \frac{(n^2 - n + 1) - (n^2 - 1)}{n^2 - 1} = 1 + \frac{2 - n}{n^2 - 1}
> $$
> (al numeratore: $n^2 - n + 1 - n^2 + 1 = 2 - n$, con le parentesi).
> 2. $a_n = \frac{n^2 - 1}{2 - n}$, il reciproco. $|a_n| \to +\infty$ (va a $-\infty$, e Nepero generalizzato lo permette).
> 3. Moltiplica e dividi l'esponente per $a_n$:
> $$
> \left[\left(1 + \frac1{a_n}\right)^{a_n}\right]^{\frac{3 - 2n^2}{n+3} \cdot \frac{2 - n}{n^2 - 1}}
> $$
> 4. L'esponente nuovo: $\frac{(3 - 2n^2)(2 - n)}{(n + 3)(n^2 - 1)}$ ha grado $3$ sopra e sotto. Coefficiente direttore sopra: $(-2n^2)(-n) = 2n^3$; sotto: $n \cdot n^2 = n^3$. Rapporto $2$. Quindi il limite è $e^2$.
>
> *Verifica*: $n = 1000$ dà circa $7{,}32$, e $e^2 \approx 7{,}39$.
>
> **b)** *Forma*: prima si guarda la base, perché decide se è un $[1^\infty]$ o no.
> 1. Base: $\frac{\sqrt{n-1}}{n+1} = \frac{\sqrt n\sqrt{1 - 1/n}}{n(1 + 1/n)} = \frac{1}{\sqrt n} \cdot \frac{\sqrt{1 - 1/n}}{1 + 1/n} \to 0 \cdot 1 = 0$.
> 2. La base è positiva per $n \geq 2$: tende a $0^+$.
> 3. Esponente: $n + 3^{-n} \to +\infty + 0 = +\infty$.
> 4. Forma $[0^{+\infty}] = 0$, determinata. Nessuna tecnica.
>
> *Verifica*: $n = 10$ dà $\left(\frac{3}{11}\right)^{10} \approx 2{,}3 \cdot 10^{-6}$.
>
> **c)** *Tipo*: $\left[\frac\infty\infty\right]$ con infiniti diversi. *Metodo*: raccogli chi comanda con la gerarchia: sopra $2^n$ ($n^7 \ll 2^n$), sotto $n^2$ ($\log n \ll n^2$).
> $$
> \frac{2^n\left(1 + \frac{n^7}{2^n}\right)}{n^2\left(1 + \frac{\log n}{n^2}\right)} = \frac{2^n}{n^2} \cdot \frac{1 + \frac{n^7}{2^n}}{1 + \frac{\log n}{n^2}} \to [+\infty \cdot 1] = +\infty
> $$
> perché $\frac{2^n}{n^2} \to +\infty$ e i due rapporti dentro le parentesi tendono a $0$, sempre per la gerarchia.
>
> *Verifica*: $n = 30$ dà circa $2{,}5 \cdot 10^7$. Attenzione ai valori piccoli: a $n = 10$ il numeratore è dominato da $n^7 = 10^7$, non da $2^{10} = 1024$; la gerarchia vale da un certo punto in poi.

**Esercizio 4** (i due della slide 68 sono svolti sopra, fra gli esempi del 12/10; questi sono dal foglio 4 del 2022, esercizio 1, e dalla gerarchia). Calcolare con il criterio del rapporto
$$
\text{a)}\ \lim \frac{a^n}{n!}\ \text{ con } a > 1 \qquad \text{b)}\ \lim \frac{(n!)^2}{(2n)!} \qquad \text{c)}\ \lim \frac{(n!)^3}{(2n)!} \qquad \text{d)}\ \lim \frac{n^2\,(n!)^2}{(2n)!}
$$

> [!example]- Soluzione
> **Come si riconosce**: fattoriali (e potenze) che nel rapporto $\frac{a_{n+1}}{a_n}$ si semplificano quasi tutti. Tutte a termini positivi. Il fatto che serve sempre: $\frac{(n+1)!}{n!} = n + 1$ e $\frac{(2n+2)!}{(2n)!} = (2n+2)(2n+1)$, perché passando da $n$ a $n+1$ il fattoriale $(2n)!$ guadagna **due** fattori.
>
> **a)**
> $$
> \frac{a_{n+1}}{a_n} = \frac{a^{n+1}}{(n+1)!} \cdot \frac{n!}{a^n} = a \cdot \frac{1}{n+1} = \frac{a}{n+1} \to 0 < 1
> $$
> quindi $\frac{a^n}{n!} \to 0$: è il terzo confronto della gerarchia, $a^n \ll n!$. *Verifica*: $a = 3$, $n = 20$ dà $\frac{3^{20}}{20!} \approx 1{,}4 \cdot 10^{-9}$.
>
> **b)** Con $a_n = \frac{(n!)^2}{(2n)!}$, un passaggio per riga:
> $$
> \frac{a_{n+1}}{a_n} = \frac{\big((n+1)!\big)^2}{(n!)^2} \cdot \frac{(2n)!}{(2n+2)!} \qquad \text{raggruppo i fattoriali uguali}
> $$
> $$
> = \frac{(n+1)^2}{(2n+2)(2n+1)} \qquad \frac{(n+1)!}{n!} = n+1, \quad \frac{(2n)!}{(2n+2)!} = \frac{1}{(2n+2)(2n+1)}
> $$
> $$
> = \frac{(n+1)^2}{2(n+1)(2n+1)} = \frac{n+1}{2(2n+1)} \qquad 2n + 2 = 2(n+1)\text{, semplifico } n+1
> $$
> $$
> \to \frac{1}{4}
> $$
> (nell'ultimo passaggio, raccogli chi comanda: grado $1$ sopra e sotto, coefficienti $1$ e $4$). $L = \frac14 < 1$: $a_n \to 0$.
>
> **c)** Con il cubo sopra resta un fattore $n + 1$ in più:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)^3}{(2n+2)(2n+1)} = \frac{(n+1)^2}{2(2n+1)} \to +\infty
> $$
> (grado $2$ sopra, $1$ sotto). $L = +\infty > 1$: $a_n \to +\infty$. *Verifica*: $n = 10$ dà circa $19{,}6$, $n = 20$ circa $1{,}8 \cdot 10^7$.
>
> **d)** Rispetto alla b) c'è il fattore $n^2$:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)^2}{n^2} \cdot \frac{n+1}{2(2n+1)} = \left(1 + \frac1n\right)^2 \cdot \frac{n+1}{2(2n+1)} \to 1 \cdot \frac14 = \frac14
> $$
> $L = \frac14 < 1$: $a_n \to 0$. Il fattore polinomiale $n^2$ non cambia niente: nel rapporto diventa $\left(1 + \frac1n\right)^2 \to 1$. È lo stesso motivo per cui $n^\alpha \ll a^n$.
>
> **Controllo** sulla b): $n = 10$ dà $\frac{(10!)^2}{20!} \approx 5{,}4 \cdot 10^{-6}$, già piccolissimo. Sulla d): $n = 10$ dà circa $5{,}4 \cdot 10^{-4}$, cento volte la b), ma va a $0$ lo stesso.

**Esercizio 5** (lasciato per casa il 7/10). Mostrare che: se $a_n < 0$ per ogni $n$ e $\frac{a_{n+1}}{a_n} \to L > 1$, allora $a_n \to -\infty$; se $a_n < 0$ per ogni $n$ e $\frac{a_{n+1}}{a_n} \to L < 1$, allora $a_n \to 0^-$.

> [!example]- Soluzione
> *Tipo*: estendere un teorema a un caso nuovo. *L'idea*: invece di rifare la dimostrazione, si costruisce una successione positiva con lo stesso rapporto, e si applica il criterio già dimostrato.
>
> 1. Sia $b_n := -a_n$. Siccome $a_n < 0$, $b_n > 0$ per ogni $n$: è a termini positivi.
> 2. Il rapporto non cambia, perché i due segni meno si semplificano: $\frac{b_{n+1}}{b_n} = \frac{-a_{n+1}}{-a_n} = \frac{a_{n+1}}{a_n} \to L$.
> 3. Si applica il criterio del rapporto a $b_n$.
> 4. Se $L > 1$: $b_n \to +\infty$, quindi $a_n = -b_n \to -\infty$ ($[-1 \cdot (+\infty)]$).
> 5. Se $L < 1$: $b_n \to 0$, quindi $a_n = -b_n \to 0$; e siccome $a_n < 0$ per ogni $n$, $a_n \to 0^-$. $\blacksquare$
>
> *Verifica su un caso*: $a_n = -\frac{2^n}{n}$ ha $\frac{a_{n+1}}{a_n} = \frac{2n}{n+1} \to 2 > 1$, e infatti $a_n \to -\infty$.

**Esercizio 6** (livello del 30, sul modello della slide 67). Calcolare
$$
\text{a)}\ \lim \frac{\log(3^n + n^5)}{n + \log n} \qquad \text{b)}\ \lim \frac{\log(n^7 + 1)}{\log n}
$$

> [!example]- Soluzione
> **Come si riconosce**: logaritmi di somme. Prima di pensare alla gerarchia si guarda **cosa c'è dentro il logaritmo**: nella a) un esponenziale (il logaritmo crescerà come $n$), nella b) una potenza di $n$ (crescerà come $\log n$). In entrambe si raccoglie chi comanda **dentro** l'argomento, come nel metodo 1 del prof.
>
> **a)** Dentro: $n^5 \ll 3^n$ (gerarchia), quindi comanda $3^n$.
> $$
> 3^n + n^5 = 3^n\left(1 + \frac{n^5}{3^n}\right) \qquad \text{raccolgo } 3^n
> $$
> $$
> \log(3^n + n^5) = n\log 3 + \log\left(1 + \frac{n^5}{3^n}\right) \qquad \log(ab) = \log a + \log b,\ \log(3^n) = n\log 3
> $$
> Chiamo $r_n = \log\left(1 + \frac{n^5}{3^n}\right)$. Siccome $\frac{n^5}{3^n} \to 0$, per la permanenza del segno $\frac{n^5}{3^n} < 1$ definitivamente (da $n = 11$ in poi), quindi $1 < 1 + \frac{n^5}{3^n} < 2$ e, con $\log$ crescente, $0 < r_n < \log 2$: $r_n$ è limitata. Al denominatore raccolgo $n$:
> $$
> \frac{n\log 3 + r_n}{n\left(1 + \frac{\log n}{n}\right)} = \frac{\log 3 + \frac{r_n}{n}}{1 + \frac{\log n}{n}} \to \frac{\log 3 + 0}{1 + 0} = \log 3
> $$
> perché $\frac{r_n}{n} \to 0$ (limitata per infinitesima) e $\frac{\log n}{n} \to 0$ (gerarchia). Chi avesse detto "logaritmo su $n$, fa $0$" avrebbe sbagliato: è la trappola della slide 67.
>
> **b)** Dentro comanda $n^7$:
> $$
> \log(n^7 + 1) = \log\left(n^7\left(1 + \frac{1}{n^7}\right)\right) = 7\log n + \log\left(1 + \frac{1}{n^7}\right)
> $$
> Il secondo pezzo sta fra $0$ e $\log 2$ (perché $1 < 1 + \frac{1}{n^7} \leq 2$). Dividendo per $\log n$:
> $$
> \frac{\log(n^7 + 1)}{\log n} = 7 + \frac{\log\left(1 + \frac{1}{n^7}\right)}{\log n} \to 7 + 0 = 7
> $$
> (limitata diviso un infinito). Qui la gerarchia non c'entra: sopra e sotto ci sono logaritmi di potenze, infiniti dello stesso ordine.
>
> **Controllo**: con $n = 10$ la a) vale circa $0{,}97$, e $\log 3 \approx 1{,}10$: ci si avvicina lentamente, perché $\frac{\log n}{n}$ va a $0$ piano. La b) con $n = 10$ vale $7{,}00000004$.

**Esercizio 7.** Calcolare $\displaystyle\lim \frac{\sqrt{4n^2 + 1} - n}{3n + \sqrt n}$.

> [!example]- Soluzione
> *Tipo*: $\left[\frac\infty\infty\right]$, con una radice al numeratore. *Come lo riconosco*: sopra c'è una differenza con una radice, ma **non** è un $[\infty - \infty]$ "pari": $\sqrt{4n^2 + 1} \approx 2n$ e $2n - n = n$ non si cancella. *Metodo*: basta raccogliere chi comanda, senza razionalizzare.
> 1. Sotto la radice raccolgo $n^2$: $\sqrt{4n^2 + 1} = \sqrt{n^2\left(4 + \frac{1}{n^2}\right)} = n\sqrt{4 + \frac{1}{n^2}}$ ($n > 0$).
> 2. Numeratore: $n\sqrt{4 + \frac{1}{n^2}} - n = n\left(\sqrt{4 + \frac{1}{n^2}} - 1\right)$.
> 3. Denominatore: $3n + \sqrt n = n\left(3 + \frac{1}{\sqrt n}\right)$ (perché $\frac{\sqrt n}{n} = \frac{1}{\sqrt n}$).
> 4. Semplifico $n$: $\frac{\sqrt{4 + \frac{1}{n^2}} - 1}{3 + \frac{1}{\sqrt n}}$.
> 5. Algebra dei limiti: sopra $\to \sqrt4 - 1 = 1$, sotto $\to 3 \neq 0$. Il limite è $\frac13$.
>
> *Quando invece si razionalizza*: se fosse $\sqrt{4n^2 + 1} - 2n$, il raccoglimento darebbe $n\left(\sqrt{4 + \frac{1}{n^2}} - 2\right)$, cioè $[+\infty \cdot 0]$: lì servirebbe razionalizzare. La razionalizzazione serve solo quando i termini che comandano si cancellano.
>
> *Verifica*: $n = 100$ dà $0{,}3226$, $n = 10\,000$ dà $0{,}3322$, verso $0{,}3333$.

**Esercizio 8** (sul modello del 3.4 del tutoraggio). Calcolare $\displaystyle\lim \left(\frac{n^2 + 3n}{n^2 + 1}\right)^{\frac{n+1}{2}}$.

> [!example]- Soluzione
> *Forma*: base $\to 1$ (grado $2$ sopra e sotto, coefficienti $1$), esponente $\to +\infty$: $[1^{+\infty}]$. *Metodo*: moltiplica e dividi. Non si raccoglie e basta: raccogliendo $n^2$ nella base si ottiene $\frac{1 + 3/n}{1 + 1/n^2} \to 1$, e si resta con $[1^\infty]$ (è l'errore del tuo quaderno sul 3.4).
> 1. Somma e sottrai:
> $$
> \frac{n^2 + 3n}{n^2 + 1} = 1 + \frac{(n^2 + 3n) - (n^2 + 1)}{n^2 + 1} = 1 + \frac{3n - 1}{n^2 + 1}
> $$
> 2. $a_n = \frac{n^2 + 1}{3n - 1}$ (il reciproco), e $a_n \to +\infty$ (grado $2$ su grado $1$).
> 3. Moltiplica e dividi:
> $$
> \left(1 + \frac{1}{a_n}\right)^{\frac{n+1}{2}} = \left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{\frac{n+1}{2} \cdot \frac{3n - 1}{n^2 + 1}}
> $$
> 4. Esponente nuovo: $\frac{(n + 1)(3n - 1)}{2(n^2 + 1)}$, grado $2$ sopra e sotto, coefficienti $3$ e $2$: $\to \frac32$.
> 5. Base fra quadre $\to e$, esponente $\to \frac32$: il limite è $e^{3/2}$.
>
> *Verifica*: $n = 100$ dà $4{,}427$, $n = 1000$ dà $4{,}476$, e $e^{3/2} \approx 4{,}482$.

**Esercizio 9.** Calcolare
$$
\text{a)}\ \lim \sqrt n\left(\sqrt{n+1} - \sqrt n\right) \qquad \text{b)}\ \lim n\left(\sqrt{n^2 + n} - \sqrt{n^2 - n}\right)
$$

> [!example]- Soluzione
> *Tipo*: $[\infty \cdot 0]$, un infinito per una differenza di radici che tende a $0$. *Metodo*: razionalizzare la differenza, poi raccogliere. Le due danno risultati molto diversi: dipende da quanto velocemente la differenza va a $0$ rispetto a quanto cresce il fattore davanti.
>
> **a)**
> 1. Razionalizzo: $\sqrt{n+1} - \sqrt n = \frac{(n + 1) - n}{\sqrt{n+1} + \sqrt n} = \frac{1}{\sqrt{n+1} + \sqrt n}$.
> 2. Moltiplico per $\sqrt n$: $\frac{\sqrt n}{\sqrt{n+1} + \sqrt n}$.
> 3. Raccolgo $\sqrt n$ sotto, $\sqrt{n+1} = \sqrt n\sqrt{1 + \frac1n}$: $\frac{\sqrt n}{\sqrt n\left(\sqrt{1 + \frac1n} + 1\right)} = \frac{1}{\sqrt{1 + \frac1n} + 1} \to \frac12$.
>
> *Verifica*: $n = 100$ dà $0{,}4988$.
>
> **b)**
> 1. Razionalizzo: $\sqrt{n^2 + n} - \sqrt{n^2 - n} = \frac{(n^2 + n) - (n^2 - n)}{\sqrt{n^2 + n} + \sqrt{n^2 - n}} = \frac{2n}{\sqrt{n^2 + n} + \sqrt{n^2 - n}}$.
> 2. Raccolgo $n$ sotto le radici: $= \frac{2n}{n\left(\sqrt{1 + \frac1n} + \sqrt{1 - \frac1n}\right)} = \frac{2}{\sqrt{1 + \frac1n} + \sqrt{1 - \frac1n}} \to 1$.
> 3. La differenza di radici quindi **non** va a $0$: tende a $1$. Moltiplicata per $n \to +\infty$: forma $[+\infty \cdot 1] = +\infty$.
>
> *Verifica*: $n = 100$ dà $100{,}001$. Il punto da notare: nel testo sembrava un $[\infty \cdot 0]$, ma dopo la razionalizzazione il secondo fattore tende a $1$. La forma va riletta dopo ogni trasformazione (la freccia che torna indietro nello schema della slide 55).

**Esercizio 10** (livello del 30, criterio del rapporto con parametro). Al variare di $a > 0$ studiare $\displaystyle\lim \frac{(2n)!}{a^n\,(n!)^2}$.

> [!example]- Soluzione
> *Tipo*: fattoriali ed esponenziale con un parametro. *Metodo*: criterio del rapporto (termini positivi), poi si discute il valore di $L$ al variare di $a$.
> 1. Rapporto, un passo per riga:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(2n+2)!}{a^{n+1}\big((n+1)!\big)^2} \cdot \frac{a^n\,(n!)^2}{(2n)!}
> $$
> $$
> = \frac{(2n+2)!}{(2n)!} \cdot \frac{(n!)^2}{\big((n+1)!\big)^2} \cdot \frac{a^n}{a^{n+1}} \qquad \text{raggruppo}
> $$
> $$
> = (2n+2)(2n+1) \cdot \frac{1}{(n+1)^2} \cdot \frac1a
> $$
> $$
> = \frac{2(n+1)(2n+1)}{a(n+1)^2} = \frac{2(2n+1)}{a(n+1)} \qquad 2n+2 = 2(n+1)\text{, semplifico}
> $$
> 2. Limite: grado $1$ sopra e sotto, coefficienti $4$ e $a$: $L = \frac4a$.
> 3. Discussione:
>    - $a > 4$: $L < 1$, quindi $a_n \to 0$;
>    - $0 < a < 4$: $L > 1$, quindi $a_n \to +\infty$;
>    - $a = 4$: $L = 1$, il criterio **non conclude**.
>
> Nel caso $a = 4$ la risposta corretta all'esame è proprio "il criterio non permette di concludere". (Con strumenti che arriveranno più avanti si vede che $\frac{(2n)!}{4^n (n!)^2}$ tende a $0$, ma lentamente.)
>
> *Verifica*: $n = 50$ dà circa $1{,}4 \cdot 10^5$ con $a = 3$, $0{,}08$ con $a = 4$, $1{,}1 \cdot 10^{-6}$ con $a = 5$.

**Esercizio 11** (livello del 30, Nepero con parametro). Al variare di $\alpha > 0$ calcolare $\displaystyle\lim \left(1 + \frac{1}{n^\alpha}\right)^n$.

> [!example]- Soluzione
> *Forma*: base $1 + \frac{1}{n^\alpha} \to 1$ (perché $n^\alpha \to +\infty$ con $\alpha > 0$), esponente $n \to +\infty$: $[1^{+\infty}]$ per ogni $\alpha > 0$. *Metodo*: moltiplica e dividi, poi si discute l'esponente nuovo.
> 1. La base è già nella forma giusta: $a_n = n^\alpha \to +\infty$.
> 2. $\left(1 + \frac{1}{n^\alpha}\right)^n = \left[\left(1 + \frac{1}{n^\alpha}\right)^{n^\alpha}\right]^{n / n^\alpha} = \left[\left(1 + \frac{1}{n^\alpha}\right)^{n^\alpha}\right]^{n^{1 - \alpha}}$.
> 3. La base fra quadre tende a $e$ (Nepero generalizzato). L'esponente $n^{1 - \alpha}$ dipende da $\alpha$ (limiti fondamentali delle potenze):
>    - $0 < \alpha < 1$: $1 - \alpha > 0$, $n^{1-\alpha} \to +\infty$, forma $[e^{+\infty}] = +\infty$;
>    - $\alpha = 1$: $n^0 = 1$, il limite è $e^1 = e$ (la definizione di $e$);
>    - $\alpha > 1$: $1 - \alpha < 0$, $n^{1-\alpha} \to 0$, il limite è $e^0 = 1$.
>
> *Il senso*: la base si avvicina a $1$ come $\frac{1}{n^\alpha}$, l'esponente cresce come $n$. Se la base si avvicina a $1$ più in fretta di quanto l'esponente cresca ($\alpha > 1$) vince la base; se più lentamente ($\alpha < 1$) vince l'esponente; con $\alpha = 1$ pareggiano, e il pareggio vale $e$.
>
> *Verifica*: $n = 10\,000$ dà circa $1{,}6 \cdot 10^{43}$ con $\alpha = \frac12$, $2{,}71815$ con $\alpha = 1$, $1{,}0001$ con $\alpha = 2$.

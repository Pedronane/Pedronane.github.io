---
title: Calcolo dei limiti di successioni
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-06
lezioni:
  - 6 ott
  - 7 ott
  - 12 ott
ordine: 9
---

Argomento di [Analisi Matematica 1](/uni/analisi-1/), capitolo 3, sezioni 3.6 ("Regole di calcolo dei limiti. Forme determinate"), 3.7 ("Forme indeterminate di limite") e 3.8 ("Criterio del rapporto. Gerarchia di infiniti"). Fatto a lezione il 6/10, slide 44-47 (<span class="src">slide annotate del 6/10</span>), il 7/10, slide 48-65 (<span class="src">slide annotate del 7/10</span>), e il 12/10, slide 65-68 (<span class="src">slide annotate del 12/10</span>, pagine 1-13): dimostrazione della gerarchia, "attenti a come la si usa", esercizi sul criterio del rapporto. Con il 12/10 il capitolo 3 è chiuso; il seguito è [Limiti di funzioni](/uni/analisi-1/limiti-di-funzioni/). Usa [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/) e [Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/). Esercizi del tutoraggio in [Esercizi limiti di successioni](/uni/analisi-1/esercizi-limiti-di-successioni/).

> [!abstract] Per l'esame
> - **Saper enunciare**: i limiti fondamentali di potenze, esponenziali e logaritmi; l'algebra dei limiti finiti (somma, prodotto, quoziente, potenza) con le ipotesi ($b \neq 0$ per il quoziente, $a > 0$ per la potenza); le forme determinate e le sette forme indeterminate; il criterio del rapporto con la dimostrazione; la gerarchia degli infiniti.
> - **Saper fare**: calcolare un limite seguendo lo schema della slide 55, riconoscere la forma indeterminata e scegliere la tecnica: somma e sottrai, raccogli chi comanda, moltiplica e dividi (Nepero), razionalizza; usare il criterio del rapporto con fattoriali ed esponenziali; dimostrare due casi della gerarchia con il criterio del rapporto (slide 66); confrontare due infiniti; **riconoscere quando la gerarchia si può applicare e quando no**, cioè quando l'argomento del logaritmo non è una potenza di $n$ (slide 67, "attenti a come la si usa").
> - **Dove esce**: è il cuore della parte 2 sui limiti di successioni, e le crocette chiedono spesso il valore di un limite con una forma indeterminata o "quale forma è indeterminata". Il primo parziale (6 novembre) probabilmente comprende tutto il capitolo 3.

Il filo:

```
analizza l'espressione (slide 55)
        |
        +-- nessuna F.I.  ->  regole "in parallelo": limiti fondamentali + algebra estesa  ->  risultato
        |
        +-- F.I. presente  ->  tecnica algebrica:
                                 [∞/∞], [∞-∞] con polinomi    raccogli chi comanda
                                 [∞-∞] con radici             razionalizza
                                 [1^∞]                         moltiplica e dividi (Nepero)
                                 rapporti fra infiniti         gerarchia, criterio del rapporto
```

## Definizioni

### Forme determinate e indeterminate (slide 49, 52)

Quando si calcola il limite di una somma, prodotto, quoziente o potenza, si guarda prima a cosa tendono i pezzi e si scrive la "forma" fra parentesi quadre: per esempio $\frac{2 + 1/n}{3}$ ha forma $\left[\frac{2}{3}\right]$, $n^2 + \sqrt n$ ha forma $[+\infty + \infty]$.

- Una forma è **determinata** quando conoscere i limiti dei pezzi basta per conoscere il limite del tutto: $[+\infty + \infty] = +\infty$ vale qualunque siano le successioni.
- Una forma è **indeterminata** (F.I.) quando i limiti dei pezzi **non bastano**: successioni diverse con la stessa forma hanno limiti diversi. Il prof sulla slide 52: "tutte le casistiche sono possibili".

Le parentesi quadre ricordano che è una **scrittura simbolica**, non un conto: $\infty$ non è un numero e $[+\infty - \infty]$ non è "zero".

### $\ell^+$ e $\ell^-$ (7/10, nota 5 alla slide 49)

> [!abstract] Definizione (limite da destra e da sinistra)
> Si dice che $b_n \to \ell^+$ quando $b_n \to \ell$ e $b_n > \ell$ definitivamente; $b_n \to \ell^-$ quando $b_n \to \ell$ e $b_n < \ell$ definitivamente.

(<span class="src">7/10, pagina 10</span>.) Il prof ha scritto $b_n \geq \ell$ (e $\leq$): nella forma $\left[\frac{1}{0^+}\right]$ serve però $b_n > 0$ stretto, altrimenti $\frac{1}{b_n}$ non è nemmeno definito quando $b_n = 0$. Esempio: $\frac1n \to 0^+$, $-\frac1n \to 0^-$, mentre $\frac{(-1)^n}{n} \to 0$ né da destra né da sinistra.

Il prof (stessa pagina): se sappiamo solo $b_n \to 0$, non si può concludere $\frac{1}{b_n} \to +\infty$ né $-\infty$ (con $b_n = \frac{(-1)^n}{n}$, $\frac{1}{b_n} = (-1)^n n$ salta fra $+$ e $-$). Però possiamo concludere $\frac{1}{|b_n|} \to +\infty$, a patto che $b_n \neq 0$ definitivamente.

### Infiniti e loro ordine (slide 64)

Siano $(a_n)_n$ e $(b_n)_n$ due **infiniti**, cioè $\lim a_n = +\infty$ e $\lim b_n = +\infty$. Il limite del loro rapporto si presenta in forma indeterminata $\left[\frac\infty\infty\right]$: per determinarlo bisogna confrontare la "velocità" con cui le due successioni tendono all'infinito.

> [!abstract] Definizione (ordine di infinito)
> $$
> \lim_{n \to +\infty}\frac{a_n}{b_n} = \begin{cases} +\infty & a_n \text{ è un infinito di ordine superiore a } b_n \\ 0 & b_n \text{ è un infinito di ordine superiore ad } a_n \\ \ell \in (0, +\infty) & a_n \text{ e } b_n \text{ sono infiniti dello stesso ordine} \end{cases}
> $$

Le annotazioni del prof (<span class="src">7/10, slide 64</span>): "ordine superiore" vuol dire che va a infinito "più velocemente"; e c'è un quarto caso, **il limite può non esistere**, e allora nessuna delle tre etichette si applica. Esempio di quarto caso: $a_n = n(2 + (-1)^n)$ e $b_n = n$, il rapporto vale $1, 3, 1, 3, \dots$

**Esempio del prof** (pagina 36): $a_n = n$, $b_n = 3n$. Anche se $a_n$ è più piccolo di $b_n$ (per $n$ grande la differenza $2n$ è enorme), si dice che $a_n$ e $b_n$ sono infiniti **dello stesso ordine**: $\frac{a_n}{b_n} = \frac13$. Il prof scrive "cioè $\frac{a_n}{b_n}$ è limitato": l'idea è che nessuno dei due scappa dall'altro, ma la definizione chiede di più, che il rapporto abbia un limite **finito e non nullo**. Un rapporto limitato che tende a $0$ (come $\frac{n}{n^2}$) è il caso "ordine superiore".

## Enunciati

### Limiti fondamentali (slide 45)

I seguenti limiti di successioni fondamentali possono essere verificati usando la definizione di limite e saranno d'ora in poi considerati come noti.

$$
\lim_{n \to +\infty} n^b = \begin{cases} +\infty & b > 0 \\ 0 & b < 0 \end{cases} \quad (\text{potenze}) \qquad \lim_{n \to +\infty} a^n = \begin{cases} +\infty & a > 1 \\ 0 & 0 < a < 1 \end{cases} \quad (\text{esponenziali})
$$
$$
\lim_{n \to +\infty} \log n = +\infty \quad (\text{logaritmi})
$$

I valori li ha scritti il prof a lezione (<span class="src">6/10, slide 45</span>). Le verifiche con la definizione sono quelle del 30/9 in [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/) ($a^n$ e $n^b$, esercizi 2 e 3). I casi esclusi sono banali: $n^0 = 1$ e $1^n = 1$ sono costanti.

### Algebra dei limiti finiti (slide 46-48)

> [!abstract] Teorema (algebra dei limiti finiti)
> Supponiamo che $\lim a_n = a$ e $\lim b_n = b$, con $a, b \in \mathbb{R}$. Allora:
> - (limite della somma/differenza = somma/differenza dei limiti) $\ \lim (a_n \pm b_n) = a \pm b$;
> - (limite del prodotto = prodotto dei limiti) $\ \lim a_n \cdot b_n = a \cdot b$;
> - (limite del quoziente = quoziente dei limiti) se $b \neq 0$: $\ \lim \dfrac{a_n}{b_n} = \dfrac{a}{b}$;
> - (limite della potenza = potenza dei limiti) se $a > 0$: $\ \lim a_n^{b_n} = a^b$.

Le annotazioni del prof:
- **somma**: "prova a dimostrare usando la definizione di limite" (6/10, slide 46): è l'esercizio 1 in fondo;
- **quoziente**: il quoziente è ben definito **definitivamente** per il teorema di permanenza del segno, siccome $b \neq 0$ ($b > 0$ oppure $b < 0$): da un certo punto in poi $b_n$ ha il segno di $b$, quindi non è mai $0$ (6/10, slide 47);
- **potenza**: $a_n$ è la **base**, $b_n$ l'**esponente**; siccome $a > 0$, allora $a_n > 0$ definitivamente, e quindi la potenza è definita (7/10, slide 48). Con base negativa $a_n^{b_n}$ non ha senso per esponenti reali qualunque.

Le ipotesi sono tutte "finite": con limiti infiniti valgono le regole dell'algebra estesa, sotto.

### Algebra estesa: forme determinate (slide 49-50)

**Tipo additivo e moltiplicativo** (slide 49, con le note 1-5 del prof, <span class="src">7/10, pagine 5-10</span>):

| forma | teorema | esempio |
|---|---|---|
| $[a \pm \infty] = \pm\infty$, $a \in \mathbb{R}$ | $a_n \to a$, $b_n \to \pm\infty \Rightarrow a_n + b_n \to \pm\infty$ | $\sqrt{2 + 1/n} - \sqrt n \to [\sqrt2 - \infty] = -\infty$ |
| $[+\infty + \infty] = +\infty$, $[-\infty - \infty] = -\infty$ | $a_n, b_n \to +\infty \Rightarrow a_n + b_n \to +\infty$ | $n^2 + \sqrt n \to [+\infty + \infty] = +\infty$ |
| $[a \cdot \pm\infty] = \pm\infty$, $a > 0$ | $a_n \to a > 0$, $b_n \to \pm\infty \Rightarrow a_n b_n \to \pm\infty$ | $(3 + 1/n) \cdot n \to [3 \cdot +\infty] = +\infty$ |
| $\left[\frac{1}{\infty}\right] = 0$ | $\vert b_n\vert \to +\infty \Rightarrow \frac{1}{b_n} \to 0$ | $\frac{1}{2^n} \to \left[\frac{1}{+\infty}\right] = 0$ |
| $\left[\frac{1}{0^\pm}\right] = \pm\infty$ | $b_n \to 0^\pm \Rightarrow \frac{1}{b_n} \to \pm\infty$ | $\frac{1}{1/n} \to \left[\frac{1}{0^+}\right] = +\infty$ |

Le note del prof:
1. nella prima riga $a \in \mathbb{R}$: un numero finito più un infinito è infinito;
2. nella seconda gli enunciati possibili sono due: $a_n, b_n \to +\infty \Rightarrow a_n + b_n \to +\infty$, e $a_n, b_n \to -\infty \Rightarrow a_n + b_n \to -\infty$. Il caso con segni opposti è la forma indeterminata;
3. se $a < 0$ l'enunciato della terza riga diventa: $a_n \to a < 0$, $b_n \to \pm\infty \Rightarrow a_n b_n \to \mp\infty$ (il segno si gira);
4. nella quarta, la richiesta $|b_n| \to +\infty$ **non implica** che $b_n$ abbia limite. Esempio: $b_n = (-n)^n = n^n \cdot (-1)^n$, che salta fra valori enormi positivi e negativi, eppure $\frac{1}{b_n} \to 0$;
5. per la quinta serve il segno di $b_n$: vedi $\ell^\pm$ sopra.

**Tipo esponenziale** (slide 50):

| forma | teorema | esempio |
|---|---|---|
| $[a^{+\infty}] = +\infty$, $a > 1$ | $a_n \to a > 1$, $b_n \to +\infty \Rightarrow a_n^{b_n} \to +\infty$ | $(2 + 1/n)^n \to [2^{+\infty}] = +\infty$ |
| $[a^{-\infty}] = 0$, $a > 1$ | $a_n \to a > 1$, $b_n \to -\infty \Rightarrow a_n^{b_n} \to 0$ | $(2 + 1/n)^{-n} \to [2^{-\infty}] = 0$ |
| $[0^{+\infty}] = 0$ | $a_n \to 0^+$, $b_n \to +\infty \Rightarrow a_n^{b_n} \to 0$ | $(1/n)^n \to [0^{+\infty}] = 0$ |

Con base fra $0$ e $1$ le prime due si invertono: $[a^{+\infty}] = 0$ e $[a^{-\infty}] = +\infty$ per $0 < a < 1$. Si ricava dalle righe sopra passando al reciproco: $a_n^{b_n} = \frac{1}{(1/a_n)^{b_n}}$ con $\frac1{a_n} \to \frac1a > 1$.

### Forme indeterminate (slide 52-54)

Le regole di calcolo precedenti **non sono applicabili** in sette situazioni. Gli esempi della slide mostrano che con la stessa forma si ottiene di tutto (<span class="src">7/10, slide 52-54</span>):

| F.I. | esempi |
|---|---|
| $[+\infty - \infty]$ | $n - n = 0 \to 0$; $\ (n + 7) - n = 7 \to 7$; $\ n - 2n = -n \to -\infty$; $\ 2n - n = n \to +\infty$; $\ (n + (-1)^n) - n = (-1)^n$, limite che non esiste |
| $[\infty \cdot 0]$ | $n \cdot \frac1n = 1 \to 1$; $\ n \cdot \frac2n = 2 \to 2$; $\ n^2 \cdot \frac1n = n \to +\infty$; $\ n \cdot \frac{1}{n^2} = \frac1n \to 0$; $\ n \cdot \frac{(-1)^n}{n} = (-1)^n$, non esiste |
| $\left[\frac\infty\infty\right]$ | equivale a $\infty \cdot 0$: $\frac\infty\infty = \infty \cdot \frac1\infty = \infty \cdot 0$ |
| $\left[\frac00\right]$ | equivale a $\infty \cdot 0$: $\frac00 = \frac10 \cdot 0 = \infty \cdot 0$ (il prof: se questo $0$ è $0^\pm$) |
| $[1^\infty]$ | $1^n = 1 \to 1$; $\ (1 + 1/n)^n \to e$; $\ (1 + 1/n)^{n^2} \to +\infty$ |
| $[\infty^0]$ | $(2^n)^{1/n} = 2 \to 2$; $\ (7^n)^{1/n^2} = 7^{1/n} \to 7^0 = 1$ |
| $[0^0]$ | equivale al reciproco della forma $\infty^0$: $0^0 = \left(\frac1\infty\right)^0 = \frac{1}{\infty^0}$ |

Il prof annota che nella forma $[1^\infty]$ la base è una successione **che tende a** $1$, e in $[\infty^0]$ una successione che tende a $+\infty$: non numeri fissi.

> [!warning] Base esattamente $1$, esponente esattamente $0$ (7/10, pagina 17)
> Le forme $[1^\infty]$, $[\infty^0]$, $[0^0]$ sono indeterminate solo quando la base o l'esponente **tendono** a quei valori. Se sono **costanti** non c'è niente di indeterminato. I teoremi del prof, per $(a_n)$ successione qualsiasi:
> - $\lim 1^{a_n} = 1$, perché è la successione costantemente uguale a $1$;
> - $\lim a_n^0 = 1$, anche questa costantemente $1$ (serve $a_n \neq 0$ definitivamente: $0^0$ non è definito);
> - $\lim 0^{a_n} = 0$, successione costantemente $0$. Il prof scrive "purché $a_n \neq 0$ definitivamente": in realtà serve $a_n > 0$ definitivamente, perché con esponente negativo $0^{a_n}$ non è definito (sarebbe $\frac10$).

> [!abstract] Nota importante (slide 54)
> $$
> a_n^{b_n} = e^{\log\left(a_n^{b_n}\right)} = e^{b_n \log(a_n)}
> $$
> quindi ogni forma indeterminata esponenziale può essere ricondotta a una forma moltiplicativa di tipo $\infty \cdot 0$.

Per esempio con $[1^\infty]$: $b_n \to \infty$ e $\log a_n \to \log 1 = 0$, quindi l'esponente $b_n \log a_n$ è $[\infty \cdot 0]$. Questa strada serve con i limiti notevoli delle funzioni (capitolo 4); per ora le $[1^\infty]$ si fanno con Nepero generalizzato.

### Criterio del rapporto (slide 62-63)

> [!abstract] Teorema (criterio del rapporto)
> Sia $a_n$ una successione **a termini positivi**. Supponiamo che $\dfrac{a_{n+1}}{a_n} \to L$. Allora
> - se $L > 1$ vale $a_n \to +\infty$ (incluso il caso $L = +\infty$);
> - se $L < 1$ vale $a_n \to 0$ (incluso il caso $L = 0$).

**Nota bene**: se $L = 1$ non si può concludere nulla. Il prof aggiunge: "potrebbe succedere qualunque cosa, incluso che il limite non esista" (<span class="src">7/10, slide 62</span>). Gli esempi della slide:
- $a_n = n$: $\frac{a_{n+1}}{a_n} = \frac{n+1}{n} = 1 + \frac1n \to 1$, e $a_n \to +\infty$;
- $a_n = \frac1n$: $\frac{a_{n+1}}{a_n} = \frac{n}{n+1} = 1 - \frac{1}{n+1} \to 1$, e invece $a_n \to 0$.

**L'idea.** Se il rapporto fra un termine e il precedente tende a $L$, da un certo punto in poi la successione si comporta come una geometrica di ragione circa $L$ (la proprietà della geometrica è il rapporto costante, [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/), slide 10): esplode se $L > 1$, si spegne se $L < 1$. Con $L = 1$ la geometrica sarebbe costante e il confronto non dice niente.

> [!note]- Dimostrazione (slide 63, con i passaggi del prof)
> Supponiamo $\frac{a_{n+1}}{a_n} \to L > 1$. Chiamiamo $b_n := \frac{a_{n+1}}{a_n}$, quindi $b_n \to L$ con $L > 1$.
>
> **Definitivamente crescente.** Sia $c_n := b_n - 1 \to L - 1 > 0$. Per la permanenza del segno $c_n > 0$ definitivamente, ovvero $b_n - 1 > 0$, ovvero $b_n > 1$ definitivamente, ovvero $\frac{a_{n+1}}{a_n} > 1$ definitivamente, ovvero $a_{n+1} > a_n$ definitivamente (si moltiplica per $a_n > 0$). Quindi $a_n$ è **definitivamente monotona crescente** (<span class="src">7/10, pagina 32</span>).
>
> **Il limite esiste.** Per il teorema sul limite delle successioni monotone, essa ammette limite ($= \sup$). Si ha dunque $a_n \to a$ con $a > 0$: non può essere $a = 0$, perché $a_n$ è a termini positivi e crescente (pagina 33), quindi il limite è almeno un termine positivo.
>
> **Il limite è $+\infty$.** Se per assurdo $a$ fosse finito, avremmo $\frac{a_{n+1}}{a_n} \to \frac{a}{a} = 1$ (algebra dei limiti: anche $a_{n+1} \to a$, ed è lecito dividere perché $a \neq 0$), il che è un assurdo visto che abbiamo ipotizzato $L > 1$. Quindi $a = +\infty$.
>
> Analogamente si ragiona nel caso $L < 1$, dimostrando che $a_n$ è definitivamente decrescente e che il suo limite deve per forza essere $0$. $\blacksquare$

### Gerarchia degli infiniti (slide 65)

> [!abstract] Teorema (gerarchia di infiniti)
> Per ogni fissato $\alpha > 0$ e $a > 1$, le successioni
> $$
> \log_a(n) \ll n^\alpha \ll a^n \ll n! \ll n^n
> $$
> sono infiniti (tendono a $+\infty$) in **ordine crescente di infinito**, cioè
> $$
> \lim \frac{\log_a n}{n^\alpha} = 0, \qquad \lim \frac{n^\alpha}{a^n} = 0, \qquad \lim \frac{a^n}{n!} = 0, \qquad \lim \frac{n!}{n^n} = 0
> $$
> e i reciproci tendono a $+\infty$. Si tratta di una relazione **transitiva**.

Le annotazioni del prof (<span class="src">7/10, slide 65</span>): il simbolo $\ll$ nella catena (1) vuol dire "di ordine inferiore"; la base $a$ del logaritmo e quella dell'esponenziale **non sono necessariamente le stesse**; in (1) ogni infinito è di ordine inferiore rispetto al successivo, e quindi, per la transitività, rispetto a tutti i successivi. Per esempio $\frac{\log n}{n!} \to 0$ e $\frac{n^{100}}{n^n} \to 0$.

**Cosa colpisce.** Vale per **ogni** $\alpha > 0$ e **ogni** $a > 1$: $n^{1000}$ perde contro $1{,}001^n$, e $\log n$ perde contro $\sqrt[100]{n}$. Per $n$ piccoli può sembrare il contrario ($n^{1000}$ è enorme all'inizio), ma la gerarchia parla di $n \to +\infty$.

<figure class="fig"><svg role="img" aria-label="Gerarchia degli infiniti" xmlns:xlink="http://www.w3.org/1999/xlink" width="507.992656pt" height="320.662125pt" viewBox="0 0 507.992656 320.662125" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f0-figure_1"> <g id="f0-patch_1"> <path d="M 0 320.662125 L 507.992656 320.662125 L 507.992656 0 L 0 0 L 0 320.662125 z " style="fill: none"/> </g> <g id="f0-axes_1"> <g id="f0-patch_2"> <path d="M 41.36 277.902125 L 487.76 277.902125 L 487.76 22.878125 L 41.36 22.878125 L 41.36 277.902125 z " style="fill: none"/> </g> <g id="f0-matplotlib.axis_1"> <g id="f0-xtick_1"> <g id="f0-line2d_1"> <defs> <path id="f0-m56b0393ff8" d="M 0 0 L 0 3.5 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f0-m56b0393ff8" x="41.36" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_1"> <!-- 0.0 --> <g style="fill: var(--fig-axis)" transform="translate(31.022969 294.779078) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-11" d="M 603 325 Q 603 500 722 622 Q 841 744 1019 744 Q 1191 744 1312 622 Q 1434 500 1434 325 Q 1434 153 1312 31 Q 1191 -91 1019 -91 Q 841 -91 722 29 Q 603 150 603 325 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-13"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(95.40625 0)"/> </g> </g> </g> <g id="f0-xtick_2"> <g id="f0-line2d_2"> <g> <use xlink:href="#f0-m56b0393ff8" x="90.96" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_2"> <!-- 2.5 --> <g style="fill: var(--fig-axis)" transform="translate(80.622969 294.779078) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-15"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(95.40625 0)"/> </g> </g> </g> <g id="f0-xtick_3"> <g id="f0-line2d_3"> <g> <use xlink:href="#f0-m56b0393ff8" x="140.56" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_3"> <!-- 5.0 --> <g style="fill: var(--fig-axis)" transform="translate(130.222969 294.779078) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-18"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(95.40625 0)"/> </g> </g> </g> <g id="f0-xtick_4"> <g id="f0-line2d_4"> <g> <use xlink:href="#f0-m56b0393ff8" x="190.16" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_4"> <!-- 7.5 --> <g style="fill: var(--fig-axis)" transform="translate(179.822969 294.779078) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-1a"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(95.40625 0)"/> </g> </g> </g> <g id="f0-xtick_5"> <g id="f0-line2d_5"> <g> <use xlink:href="#f0-m56b0393ff8" x="239.76" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_5"> <!-- 10.0 --> <g style="fill: var(--fig-axis)" transform="translate(225.287344 294.779078) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-14"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(127.25 0)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(159.03125 0)"/> </g> </g> </g> <g id="f0-xtick_6"> <g id="f0-line2d_6"> <g> <use xlink:href="#f0-m56b0393ff8" x="289.36" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_6"> <!-- 12.5 --> <g style="fill: var(--fig-axis)" transform="translate(274.887344 294.779078) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(127.25 0)"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(159.03125 0)"/> </g> </g> </g> <g id="f0-xtick_7"> <g id="f0-line2d_7"> <g> <use xlink:href="#f0-m56b0393ff8" x="338.96" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_7"> <!-- 15.0 --> <g style="fill: var(--fig-axis)" transform="translate(324.487344 294.779078) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(127.25 0)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(159.03125 0)"/> </g> </g> </g> <g id="f0-xtick_8"> <g id="f0-line2d_8"> <g> <use xlink:href="#f0-m56b0393ff8" x="388.56" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_8"> <!-- 17.5 --> <g style="fill: var(--fig-axis)" transform="translate(374.087344 294.779078) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14"/> <use xlink:href="#f0-DejaVuSerif-1a" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(127.25 0)"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(159.03125 0)"/> </g> </g> </g> <g id="f0-xtick_9"> <g id="f0-line2d_9"> <g> <use xlink:href="#f0-m56b0393ff8" x="438.16" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_9"> <!-- 20.0 --> <g style="fill: var(--fig-axis)" transform="translate(423.687344 294.779078) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-15"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(127.25 0)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(159.03125 0)"/> </g> </g> </g> <g id="f0-xtick_10"> <g id="f0-line2d_10"> <g> <use xlink:href="#f0-m56b0393ff8" x="487.76" y="277.902125" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_10"> <!-- 22.5 --> <g style="fill: var(--fig-axis)" transform="translate(473.287344 294.779078) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-15"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(63.625 0)"/> <use xlink:href="#f0-DejaVuSerif-11" transform="translate(127.25 0)"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(159.03125 0)"/> </g> </g> </g> <g id="f0-text_11"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(260.335 311.779078) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> </g> <g id="f0-matplotlib.axis_2"> <g id="f0-ytick_1"> <g id="f0-line2d_11"> <defs> <path id="f0-m90c7474049" d="M 0 0 L -3.5 0 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="257.167266" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_12"> <!-- $\mathdefault{10^{2}}$ --> <g style="fill: var(--fig-axis)" transform="translate(11.48 263.277266) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(128.154419 42.046875) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_2"> <g id="f0-line2d_12"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="230.133903" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_13"> <!-- $\mathdefault{10^{5}}$ --> <g style="fill: var(--fig-axis)" transform="translate(11.48 236.178903) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.665625)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.665625)"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(128.154419 41.965625) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_3"> <g id="f0-line2d_13"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="203.100541" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_14"> <!-- $\mathdefault{10^{8}}$ --> <g style="fill: var(--fig-axis)" transform="translate(11.48 209.210541) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-1b" transform="translate(128.154419 42.046875) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_4"> <g id="f0-line2d_14"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="176.067179" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_15"> <!-- $\mathdefault{10^{11}}$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 182.177179) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(128.154419 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(172.690552 42.046875) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_5"> <g id="f0-line2d_15"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="149.033816" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_16"> <!-- $\mathdefault{10^{14}}$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 155.143816) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(128.154419 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-17" transform="translate(172.690552 42.046875) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_6"> <g id="f0-line2d_16"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="122.000454" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_17"> <!-- $\mathdefault{10^{17}}$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 128.110454) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(128.154419 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-1a" transform="translate(172.690552 42.046875) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_7"> <g id="f0-line2d_17"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="94.967091" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_18"> <!-- $\mathdefault{10^{20}}$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 101.077091) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(128.154419 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(172.690552 42.046875) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_8"> <g id="f0-line2d_18"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="67.933729" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_19"> <!-- $\mathdefault{10^{23}}$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 74.043729) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(128.154419 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-16" transform="translate(172.690552 42.046875) scale(0.7)"/> </g> </g> </g> <g id="f0-ytick_9"> <g id="f0-line2d_19"> <g> <use xlink:href="#f0-m90c7474049" x="41.36" y="40.900367" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f0-text_20"> <!-- $\mathdefault{10^{26}}$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 47.010367) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-14" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-13" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(128.154419 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-19" transform="translate(172.690552 42.046875) scale(0.7)"/> </g> </g> </g> </g> <g id="f0-line2d_20"> <path d="M 81.04 276.623848 L 100.88 274.821453 L 120.72 273.911231 L 140.56 273.327141 L 160.4 272.907173 L 180.24 272.584187 L 200.08 272.324451 L 219.92 272.108835 L 239.76 271.925538 L 259.6 271.766811 L 279.44 271.62732 L 299.28 271.503249 L 319.12 271.391781 L 338.96 271.290785 L 358.8 271.198613 L 378.64 271.113964 L 398.48 271.035798 L 418.32 270.963269 L 438.16 270.895681 " clip-path="url(#f0-pdf2d529543)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linecap: square"/> <defs> <path id="f0-mb7e63ea291" d="M 0 1.75 C 0.464105 1.75 0.909265 1.565609 1.237437 1.237437 C 1.565609 0.909265 1.75 0.464105 1.75 0 C 1.75 -0.464105 1.565609 -0.909265 1.237437 -1.237437 C 0.909265 -1.565609 0.464105 -1.75 0 -1.75 C -0.464105 -1.75 -0.909265 -1.565609 -1.237437 -1.237437 C -1.565609 -0.909265 -1.75 -0.464105 -1.75 0 C -1.75 0.464105 -1.565609 0.909265 -1.237437 1.237437 C -0.909265 1.565609 -0.464105 1.75 0 1.75 z " style="stroke: var(--fig-axis)"/> </defs> <g clip-path="url(#f0-pdf2d529543)"> <use xlink:href="#f0-mb7e63ea291" x="81.04" y="276.623848" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="100.88" y="274.821453" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="120.72" y="273.911231" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="140.56" y="273.327141" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="160.4" y="272.907173" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="180.24" y="272.584187" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="200.08" y="272.324451" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="219.92" y="272.108835" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="239.76" y="271.925538" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="259.6" y="271.766811" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="279.44" y="271.62732" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="299.28" y="271.503249" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="319.12" y="271.391781" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="338.96" y="271.290785" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="358.8" y="271.198613" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="378.64" y="271.113964" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="398.48" y="271.035798" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="418.32" y="270.963269" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f0-mb7e63ea291" x="438.16" y="270.895681" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> </g> </g> <g id="f0-line2d_21"> <path d="M 61.2 275.189507 L 81.04 269.764272 L 100.88 266.590713 L 120.72 264.339037 L 140.56 262.592501 L 160.4 261.165478 L 180.24 259.958946 L 200.08 258.913801 L 219.92 257.991918 L 239.76 257.167266 L 259.6 256.421277 L 279.44 255.740242 L 299.28 255.113751 L 319.12 254.533711 L 338.96 253.993707 L 358.8 253.488566 L 378.64 253.01406 L 398.48 252.566683 L 418.32 252.143501 L 438.16 251.74203 " clip-path="url(#f0-pdf2d529543)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linecap: square"/> <defs> <path id="f0-m4320a8d76e" d="M 0 1.75 C 0.464105 1.75 0.909265 1.565609 1.237437 1.237437 C 1.565609 0.909265 1.75 0.464105 1.75 0 C 1.75 -0.464105 1.565609 -0.909265 1.237437 -1.237437 C 0.909265 -1.565609 0.464105 -1.75 0 -1.75 C -0.464105 -1.75 -0.909265 -1.565609 -1.237437 -1.237437 C -1.565609 -0.909265 -1.75 -0.464105 -1.75 0 C -1.75 0.464105 -1.565609 0.909265 -1.237437 1.237437 C -0.909265 1.565609 -0.464105 1.75 0 1.75 z " style="stroke: var(--fig-steel)"/> </defs> <g clip-path="url(#f0-pdf2d529543)"> <use xlink:href="#f0-m4320a8d76e" x="61.2" y="275.189507" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="81.04" y="269.764272" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="100.88" y="266.590713" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="120.72" y="264.339037" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="140.56" y="262.592501" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="160.4" y="261.165478" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="180.24" y="259.958946" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="200.08" y="258.913801" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="219.92" y="257.991918" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="239.76" y="257.167266" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="259.6" y="256.421277" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="279.44" y="255.740242" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="299.28" y="255.113751" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="319.12" y="254.533711" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="338.96" y="253.993707" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="358.8" y="253.488566" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="378.64" y="253.01406" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="398.48" y="252.566683" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="418.32" y="252.143501" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f0-m4320a8d76e" x="438.16" y="251.74203" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="f0-line2d_22"> <path d="M 61.2 272.47689 L 81.04 269.764272 L 100.88 267.051654 L 120.72 264.339037 L 140.56 261.626419 L 160.4 258.913801 L 180.24 256.201184 L 200.08 253.488566 L 219.92 250.775948 L 239.76 248.063331 L 259.6 245.350713 L 279.44 242.638095 L 299.28 239.925478 L 319.12 237.21286 L 338.96 234.500243 L 358.8 231.787625 L 378.64 229.075007 L 398.48 226.36239 L 418.32 223.649772 L 438.16 220.937154 " clip-path="url(#f0-pdf2d529543)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linecap: square"/> <defs> <path id="f0-m86fd20fd65" d="M 0 1.75 C 0.464105 1.75 0.909265 1.565609 1.237437 1.237437 C 1.565609 0.909265 1.75 0.464105 1.75 0 C 1.75 -0.464105 1.565609 -0.909265 1.237437 -1.237437 C 0.909265 -1.565609 0.464105 -1.75 0 -1.75 C -0.464105 -1.75 -0.909265 -1.565609 -1.237437 -1.237437 C -1.565609 -0.909265 -1.75 -0.464105 -1.75 0 C -1.75 0.464105 -1.565609 0.909265 -1.237437 1.237437 C -0.909265 1.565609 -0.464105 1.75 0 1.75 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f0-pdf2d529543)"> <use xlink:href="#f0-m86fd20fd65" x="61.2" y="272.47689" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="81.04" y="269.764272" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="100.88" y="267.051654" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="120.72" y="264.339037" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="140.56" y="261.626419" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="160.4" y="258.913801" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="180.24" y="256.201184" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="200.08" y="253.488566" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="219.92" y="250.775948" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="239.76" y="248.063331" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="259.6" y="245.350713" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="279.44" y="242.638095" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="299.28" y="239.925478" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="319.12" y="237.21286" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="338.96" y="234.500243" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="358.8" y="231.787625" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="378.64" y="229.075007" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="398.48" y="226.36239" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="418.32" y="223.649772" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f0-m86fd20fd65" x="438.16" y="220.937154" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f0-line2d_23"> <path d="M 61.2 275.189507 L 81.04 272.47689 L 100.88 268.177492 L 120.72 262.752257 L 140.56 256.453754 L 160.4 249.441739 L 180.24 241.826459 L 200.08 233.688606 L 219.92 225.089811 L 239.76 216.07869 L 259.6 206.694575 L 279.44 196.969942 L 299.28 186.932064 L 319.12 176.604166 L 338.96 166.006266 L 358.8 155.155795 L 378.64 144.068071 L 398.48 132.756659 L 418.32 121.233656 L 438.16 109.509917 " clip-path="url(#f0-pdf2d529543)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linecap: square"/> <defs> <path id="f0-m85ab3db433" d="M 0 1.75 C 0.464105 1.75 0.909265 1.565609 1.237437 1.237437 C 1.565609 0.909265 1.75 0.464105 1.75 0 C 1.75 -0.464105 1.565609 -0.909265 1.237437 -1.237437 C 0.909265 -1.565609 0.464105 -1.75 0 -1.75 C -0.464105 -1.75 -0.909265 -1.565609 -1.237437 -1.237437 C -1.565609 -0.909265 -1.75 -0.464105 -1.75 0 C -1.75 0.464105 -1.565609 0.909265 -1.237437 1.237437 C -0.909265 1.565609 -0.464105 1.75 0 1.75 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f0-pdf2d529543)"> <use xlink:href="#f0-m85ab3db433" x="61.2" y="275.189507" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="81.04" y="272.47689" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="100.88" y="268.177492" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="120.72" y="262.752257" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="140.56" y="256.453754" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="160.4" y="249.441739" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="180.24" y="241.826459" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="200.08" y="233.688606" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="219.92" y="225.089811" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="239.76" y="216.07869" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="259.6" y="206.694575" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="279.44" y="196.969942" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="299.28" y="186.932064" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="319.12" y="176.604166" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="338.96" y="166.006266" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="358.8" y="155.155795" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="378.64" y="144.068071" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="398.48" y="132.756659" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="418.32" y="121.233656" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f0-m85ab3db433" x="438.16" y="109.509917" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f0-line2d_24"> <path d="M 61.2 275.189507 L 81.04 269.764272 L 100.88 262.291316 L 120.72 253.488566 L 140.56 243.696992 L 160.4 233.117418 L 180.24 221.882544 L 200.08 210.086684 L 219.92 197.800357 L 239.76 185.078299 L 259.6 171.964239 L 279.44 158.493916 L 299.28 144.697092 L 319.12 130.598933 L 338.96 116.221001 L 358.8 101.581977 L 378.64 86.698202 L 398.48 71.584088 L 418.32 56.252447 L 438.16 40.714738 " clip-path="url(#f0-pdf2d529543)" style="fill: none; stroke: var(--fig-accent-deep); stroke-width: 1.6; stroke-linecap: square"/> <defs> <path id="f0-me8a7909052" d="M 0 1.75 C 0.464105 1.75 0.909265 1.565609 1.237437 1.237437 C 1.565609 0.909265 1.75 0.464105 1.75 0 C 1.75 -0.464105 1.565609 -0.909265 1.237437 -1.237437 C 0.909265 -1.565609 0.464105 -1.75 0 -1.75 C -0.464105 -1.75 -0.909265 -1.565609 -1.237437 -1.237437 C -1.565609 -0.909265 -1.75 -0.464105 -1.75 0 C -1.75 0.464105 -1.565609 0.909265 -1.237437 1.237437 C -0.909265 1.565609 -0.464105 1.75 0 1.75 z " style="stroke: var(--fig-accent-deep)"/> </defs> <g clip-path="url(#f0-pdf2d529543)"> <use xlink:href="#f0-me8a7909052" x="61.2" y="275.189507" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="81.04" y="269.764272" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="100.88" y="262.291316" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="120.72" y="253.488566" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="140.56" y="243.696992" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="160.4" y="233.117418" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="180.24" y="221.882544" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="200.08" y="210.086684" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="219.92" y="197.800357" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="239.76" y="185.078299" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="259.6" y="171.964239" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="279.44" y="158.493916" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="299.28" y="144.697092" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="319.12" y="130.598933" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="338.96" y="116.221001" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="358.8" y="101.581977" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="378.64" y="86.698202" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="398.48" y="71.584088" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="418.32" y="56.252447" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> <use xlink:href="#f0-me8a7909052" x="438.16" y="40.714738" style="fill: var(--fig-accent-deep); stroke: var(--fig-accent-deep)"/> </g> </g> <g id="f0-patch_3"> <path d="M 41.36 277.902125 L 41.36 22.878125 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f0-patch_4"> <path d="M 41.36 277.902125 L 487.76 277.902125 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f0-text_21"> <!-- $\log n$ --> <g style="fill: var(--fig-axis)" transform="translate(448.08 274.274158) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-4f" transform="translate(0 0.015625)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(31.982422 0.015625)"/> <use xlink:href="#f0-DejaVuSerif-4a" transform="translate(92.1875 0.015625)"/> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(172.005524 0.015625)"/> </g> </g> <g id="f0-text_22"> <!-- $n^2$ --> <g style="fill: var(--fig-steel)" transform="translate(448.08 256.290507) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(68.842484 42.046875) scale(0.7)"/> </g> </g> <g id="f0-text_23"> <!-- $2^n$ --> <g style="fill: var(--fig-ink)" transform="translate(448.08 224.510631) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(0 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(64.531372 41.670313) scale(0.7)"/> </g> </g> <g id="f0-text_24"> <!-- $n!$ --> <g style="fill: var(--fig-accent)" transform="translate(448.08 112.886871) scale(0.13 -0.13)"> <defs> <path id="f0-DejaVuSerif-4" d="M 872 325 Q 872 500 990 622 Q 1109 744 1288 744 Q 1459 744 1581 622 Q 1703 500 1703 325 Q 1703 153 1581 31 Q 1459 -91 1288 -91 Q 1109 -91 990 29 Q 872 150 872 325 z M 884 4666 L 1691 4666 L 1478 2100 L 1478 1313 L 1094 1313 L 1094 2100 L 884 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(0 0.09375)"/> <use xlink:href="#f0-DejaVuSerif-4" transform="translate(64.404297 0.09375)"/> </g> </g> <g id="f0-text_25"> <!-- $n^n$ --> <g style="fill: var(--fig-accent-deep)" transform="translate(448.08 44.288215) scale(0.13 -0.13)"> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(0 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(68.842484 41.670313) scale(0.7)"/> </g> </g> <g id="f0-text_26"> <!-- $n^2 &gt; 2^n$ solo per $n = 3$; --> <g style="fill: var(--fig-axis)" transform="translate(65.168 47.001946) scale(0.1 -0.1)"> <defs> <path id="f0-DejaVuSerif-21" d="M 678 3188 L 678 3719 L 4684 2266 L 4684 1747 L 678 294 L 678 825 L 3922 2003 L 678 3188 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-1e" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z M 678 2363 Q 678 2538 798 2658 Q 919 2778 1094 2778 Q 1269 2778 1389 2656 Q 1509 2534 1509 2363 Q 1509 2188 1389 2067 Q 1269 1947 1094 1947 Q 919 1947 798 2067 Q 678 2188 678 2363 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(0 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(68.842484 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-21" transform="translate(134.938675 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(237.692581 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(302.223953 42.046875) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(349.902176 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-56" transform="translate(381.689285 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(433.007645 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-4f" transform="translate(493.212723 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(525.195145 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(585.400223 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-53" transform="translate(617.187332 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-48" transform="translate(681.201004 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-55" transform="translate(740.380692 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(788.183426 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(819.970535 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-20" transform="translate(903.339676 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-16" transform="translate(1006.093582 0.746875)"/> <use xlink:href="#f0-DejaVuSerif-1e" transform="translate(1069.716629 0.746875)"/> </g> <!-- da $n = 5$ in poi $2^n$ sta sopra --> <g style="fill: var(--fig-axis)" transform="translate(65.168 59.306243) scale(0.1 -0.1)"> <defs> <path id="f0-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-47" transform="translate(0 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(64.013672 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(123.632812 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(155.419922 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-20" transform="translate(238.789062 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-18" transform="translate(341.542969 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(405.166016 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-4c" transform="translate(436.953125 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-51" transform="translate(468.935547 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(533.339844 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-53" transform="translate(565.126953 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(629.140625 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-4c" transform="translate(689.345703 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(721.328125 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-15" transform="translate(753.115234 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-Italic-51" transform="translate(817.646606 41.670313) scale(0.7)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(865.324829 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-56" transform="translate(897.111938 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-57" transform="translate(948.430298 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(988.615845 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(1048.234985 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-56" transform="translate(1080.022095 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(1131.340454 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-53" transform="translate(1191.545532 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-55" transform="translate(1255.559204 0.370313)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(1303.361938 0.370313)"/> </g> </g> <g id="f0-text_27"> <!-- scala logaritmica: ogni curva prima o poi stacca quelle sotto --> <g style="fill: var(--fig-ink)" transform="translate(80.857813 14.878125) scale(0.12 -0.12)"> <defs> <path id="f0-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f0-DejaVuSerif-54" d="M 3359 2988 L 3359 -997 L 3909 -997 L 3909 -1331 L 2241 -1331 L 2241 -997 L 2784 -997 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0-DejaVuSerif-56"/> <use xlink:href="#f0-DejaVuSerif-46" transform="translate(51.3125 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(107.3125 0)"/> <use xlink:href="#f0-DejaVuSerif-4f" transform="translate(166.9375 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(198.921875 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(258.546875 0)"/> <use xlink:href="#f0-DejaVuSerif-4f" transform="translate(290.328125 0)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(322.3125 0)"/> <use xlink:href="#f0-DejaVuSerif-4a" transform="translate(382.515625 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(446.53125 0)"/> <use xlink:href="#f0-DejaVuSerif-55" transform="translate(506.15625 0)"/> <use xlink:href="#f0-DejaVuSerif-4c" transform="translate(553.953125 0)"/> <use xlink:href="#f0-DejaVuSerif-57" transform="translate(585.9375 0)"/> <use xlink:href="#f0-DejaVuSerif-50" transform="translate(626.125 0)"/> <use xlink:href="#f0-DejaVuSerif-4c" transform="translate(720.953125 0)"/> <use xlink:href="#f0-DejaVuSerif-46" transform="translate(752.9375 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(808.9375 0)"/> <use xlink:href="#f0-DejaVuSerif-1d" transform="translate(868.5625 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(902.25 0)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(934.03125 0)"/> <use xlink:href="#f0-DejaVuSerif-4a" transform="translate(994.234375 0)"/> <use xlink:href="#f0-DejaVuSerif-51" transform="translate(1058.25 0)"/> <use xlink:href="#f0-DejaVuSerif-4c" transform="translate(1122.65625 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(1154.640625 0)"/> <use xlink:href="#f0-DejaVuSerif-46" transform="translate(1186.421875 0)"/> <use xlink:href="#f0-DejaVuSerif-58" transform="translate(1242.421875 0)"/> <use xlink:href="#f0-DejaVuSerif-55" transform="translate(1306.828125 0)"/> <use xlink:href="#f0-DejaVuSerif-59" transform="translate(1354.625 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(1411.125 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(1470.75 0)"/> <use xlink:href="#f0-DejaVuSerif-53" transform="translate(1502.53125 0)"/> <use xlink:href="#f0-DejaVuSerif-55" transform="translate(1566.546875 0)"/> <use xlink:href="#f0-DejaVuSerif-4c" transform="translate(1614.34375 0)"/> <use xlink:href="#f0-DejaVuSerif-50" transform="translate(1646.328125 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(1741.15625 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(1800.78125 0)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(1832.5625 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(1892.765625 0)"/> <use xlink:href="#f0-DejaVuSerif-53" transform="translate(1924.546875 0)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(1988.5625 0)"/> <use xlink:href="#f0-DejaVuSerif-4c" transform="translate(2048.765625 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(2080.75 0)"/> <use xlink:href="#f0-DejaVuSerif-56" transform="translate(2112.53125 0)"/> <use xlink:href="#f0-DejaVuSerif-57" transform="translate(2163.84375 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(2204.03125 0)"/> <use xlink:href="#f0-DejaVuSerif-46" transform="translate(2263.65625 0)"/> <use xlink:href="#f0-DejaVuSerif-46" transform="translate(2319.65625 0)"/> <use xlink:href="#f0-DejaVuSerif-44" transform="translate(2375.65625 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(2435.28125 0)"/> <use xlink:href="#f0-DejaVuSerif-54" transform="translate(2467.0625 0)"/> <use xlink:href="#f0-DejaVuSerif-58" transform="translate(2531.078125 0)"/> <use xlink:href="#f0-DejaVuSerif-48" transform="translate(2595.484375 0)"/> <use xlink:href="#f0-DejaVuSerif-4f" transform="translate(2654.671875 0)"/> <use xlink:href="#f0-DejaVuSerif-4f" transform="translate(2686.65625 0)"/> <use xlink:href="#f0-DejaVuSerif-48" transform="translate(2718.640625 0)"/> <use xlink:href="#f0-DejaVuSerif-3" transform="translate(2777.828125 0)"/> <use xlink:href="#f0-DejaVuSerif-56" transform="translate(2809.609375 0)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(2860.921875 0)"/> <use xlink:href="#f0-DejaVuSerif-57" transform="translate(2921.125 0)"/> <use xlink:href="#f0-DejaVuSerif-57" transform="translate(2961.3125 0)"/> <use xlink:href="#f0-DejaVuSerif-52" transform="translate(3001.5 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f0-pdf2d529543"> <rect x="41.36" y="22.878125" width="446.4" height="255.024"/> </clipPath> </defs> </svg></figure>

La figura usa la scala logaritmica sull'asse verticale (ogni tacca è un fattore $1000$): così si vedono insieme numeri piccoli ed enormi. Per $n$ piccoli le curve si incrociano, poi ognuna stacca quelle sotto e non le rivede più.

> [!note]- Dimostrazione di due casi (slide 66, 12/10)
> A titolo di esempio, il prof dimostra $\lim \frac{n^\alpha}{a^n} = 0$ e $\lim \frac{n!}{a^n} = +\infty$, con $a > 1$ (aggiunto a mano) e $\alpha > 0$. **Si utilizza il criterio del rapporto** (<span class="src">12/10, pagine 2-3</span>). Entrambe le successioni sono a termini positivi, quindi il criterio si può usare.
>
> **Primo caso.** Sia $b_n = \frac{n^\alpha}{a^n}$. Il rapporto fra un termine e il precedente, un passaggio per riga:
> $$
> \frac{b_{n+1}}{b_n} = \frac{(n+1)^\alpha}{a^{n+1}} \cdot \frac{a^n}{n^\alpha} \qquad \text{dividere per } b_n \text{ è moltiplicare per il reciproco}
> $$
> $$
> = \left(\frac{n+1}{n}\right)^\alpha \cdot \frac{a^n}{a^{n+1}} \qquad \text{raggruppo le potenze di } n \text{ e quelle di } a
> $$
> $$
> = \left(\frac{n+1}{n}\right)^\alpha \cdot \frac1a \qquad a^{n+1} = a^n \cdot a\text{, si semplifica } a^n
> $$
> $$
> = \left(1 + \frac1n\right)^\alpha \cdot \frac1a \qquad \frac{n+1}{n} = 1 + \frac1n
> $$
> La base $1 + \frac1n \to 1$ e l'esponente $\alpha$ è fisso: per la potenza dei limiti $\left(1 + \frac1n\right)^\alpha \to 1^\alpha = 1$. Quindi
> $$
> \lim \frac{b_{n+1}}{b_n} = \frac1a < 1 \qquad \text{perché } a > 1
> $$
> e per il criterio del rapporto $b_n \to 0$.
>
> **Secondo caso.** Sia $c_n = \frac{n!}{a^n}$.
> $$
> \frac{c_{n+1}}{c_n} = \frac{(n+1)!}{a^{n+1}} \cdot \frac{a^n}{n!} = \frac{n! \cdot (n+1)}{n!} \cdot \frac{a^n}{a^n \cdot a} = \frac{n+1}{a}
> $$
> usando $(n+1)! = n! \cdot (n+1)$ (il prof lo scrive sopra il fattoriale, in blu) e $a^{n+1} = a^n \cdot a$. Il rapporto $\frac{n+1}{a} \to +\infty$ ($a > 1$ è fisso), quindi $L = +\infty > 1$ e per il criterio del rapporto $c_n \to +\infty$. $\blacksquare$
>
> Gli altri casi: $\frac{n!}{n^n} \to 0$ con i carabinieri (esercizio 3 in [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/)); $\frac{\log_a n}{n^\alpha} \to 0$ con il criterio del rapporto non si fa, perché il rapporto tende a $1$.

**Due esempi graduati.**
- Facile: $\frac{n^3 + 2^n}{3^n}$. Si spezza: $\frac{n^3}{3^n} \to 0$ (gerarchia, $n^\alpha \ll a^n$ con $\alpha = 3$, $a = 3$) e $\frac{2^n}{3^n} = \left(\frac23\right)^n \to 0$ (esponenziale con base $< 1$). Somma: $0 + 0 = 0$.
- Più difficile: $\frac{n! - 5^n}{n^n + n^{10}}$. Si raccoglie chi comanda in ogni pezzo: sopra $n!$ ($5^n \ll n!$), sotto $n^n$ ($n^{10} \ll n^n$ per transitività, passando per $2^n$).
$$
\frac{n!\left(1 - \frac{5^n}{n!}\right)}{n^n\left(1 + \frac{n^{10}}{n^n}\right)} = \frac{n!}{n^n} \cdot \frac{1 - \frac{5^n}{n!}}{1 + \frac{n^{10}}{n^n}} \to 0 \cdot \frac{1 - 0}{1 + 0} = 0
$$

## Metodo

### Lo schema generale (slide 55)

```
Inizio
  |
  v
analizza l'espressione: a cosa tende ogni pezzo?
  |
  v
forme indeterminate presenti? --- no ---> applica le regole "in parallelo" ---> risultato!
  |                                       (limiti fondamentali, algebra estesa)
  sì
  |
  v
tecniche per risolvere le F.I. ---> (torna ad analizzare l'espressione nuova)
```

### Le tecniche algebriche (slide 56-59)

| tecnica | quando | idea |
|---|---|---|
| **somma e sottrai** | frazioni "quasi uguali" sopra e sotto | $\frac{n}{n+1} = \frac{n + 1 - 1}{n+1} = 1 - \frac{1}{n+1}$: si stacca la parte costante |
| **raccogli chi comanda** | polinomi, $\left[\frac\infty\infty\right]$ o $[\infty - \infty]$ | si raccoglie in ogni fattore l'infinito più forte (la potenza di $n$ più alta), il resto tende a una costante |
| **moltiplica e dividi** | $[1^\infty]$ | si porta la base nella forma $1 + \frac{1}{a_n}$ e l'esponente nella forma $a_n \cdot (\dots)$, per far comparire Nepero |
| **razionalizza** | $[\infty - \infty]$ con radici quadrate | si moltiplica e divide per la somma delle radici, con $(a - b)(a + b) = a^2 - b^2$ |

E per i rapporti fra infiniti diversi (logaritmi, potenze, esponenziali, fattoriali): **gerarchia**, raccogliendo il termine più forte; oppure il **criterio del rapporto** quando ci sono fattoriali e potenze $n$-esime.

**Raccogli chi comanda, in pratica.** Per un polinomio in $n$ il termine che comanda è quello di grado massimo, e il limite di un rapporto di polinomi dipende solo dai gradi:
$$
\lim \frac{\text{grado } p}{\text{grado } q} = \begin{cases} \pm\infty & p > q \\ \text{rapporto dei coefficienti direttori} & p = q \\ 0 & p < q \end{cases}
$$
Va comunque **scritto** il raccoglimento: all'esame "comanda $n^3$" senza conto vale poco.

### Gerarchia: attenti a come la si usa (slide 67, 12/10)

Il titolo della slide è un avvertimento del prof: "due esempi in cui si può / non si può applicare un limite di gerarchia" (<span class="src">12/10, slide 67</span>).

**La regola.** La gerarchia confronta $\log_a(n)$, cioè il logaritmo **di $n$**, con $n^\alpha$. Si può usare quando, con le proprietà dei logaritmi, l'argomento si riduce a una potenza di $n$ (per esempio $\log(3n^2) = \log 3 + 2\log n$). **Non** si può quando dentro il logaritmo c'è un esponenziale: $\log(2^n + 1)$ non è "un logaritmo" nel senso della gerarchia, perché vale circa $n\log 2$, che è un infinito **dello stesso ordine** di $n$.

```
log( potenza di n )       ->  ~ costante · log n        piccolo: la gerarchia vale
log( esponenziale a^n )   ->  ~ n · log a               come n: la gerarchia NON vale
```

Il modo sicuro: prima si semplifica il logaritmo (proprietà, raccoglimento dentro l'argomento), poi si guarda cosa resta. I due esempi sono svolti sotto, fra gli esempi del 12/10.

## Esempi svolti a lezione

### Somma, prodotto, quoziente (slide 46-47, 6/10)

Gli esempi della slide 46 svolti dal prof (<span class="src">6/10, slide 46</span>):
- $\lim\left(2 + \frac1n\right) = 2 + 0 = 2$: il prof legge $2$ come la successione costante $(2, 2, 2, \dots)$, con limite $2$, e $\frac1n$ con limite $0$;
- $\lim\left(3 + \frac1n\right)\left(\frac1n - 4\right) = 3 \cdot (-4) = -12$, con $3 + \frac1n \to 3$ e $\frac1n - 4 \to -4$.

Il quoziente della slide 47 (<span class="src">6/10, pagina 42</span>): $\displaystyle\lim \frac{2 + \frac1n}{3 - \frac{1}{\sqrt n}}$. Si chiamano $a_n = 2 + \frac1n \to 2$ e $b_n = 3 - c_n$ con $c_n = \frac{1}{\sqrt n} = \sqrt{\frac1n} = \left(\frac1n\right)^{1/2} = n^{-1/2} \to 0$ (limite fondamentale con esponente negativo). Quindi $b_n \to 3 - 0 = 3 \neq 0$ e
$$
\frac{a_n}{b_n} \to \frac23
$$
(Sul quaderno hai scritto $b_n = 3 - 0 = 0$: è $3$, e infatti poi il risultato $\frac23$ è giusto.)

### La potenza: $\left(9 + \frac1n\right)^{1/(2 + 1/\sqrt n)}$ (slide 48, 7/10)

(<span class="src">7/10, pagine 3-4</span>.) La base $9 + \frac1n \to 9$ (limite somma = somma limiti). L'esponente: $\frac{1}{\sqrt n} \to 0$ ("visto ieri"), quindi $2 + \frac{1}{\sqrt n} \to 2$ (limite somma) e $\frac{1}{2 + 1/\sqrt n} \to \frac12$ (limite del quoziente). Infine, base $\to 9 > 0$ ed esponente $\to \frac12$:
$$
\lim = 9^{1/2} = 3
$$

### $\sqrt{2 + \frac1n} - \sqrt n \to -\infty$ (slide 49, 7/10)

(<span class="src">7/10, pagina 6</span>.) Si scrive con le potenze: $\left(2 + \frac1n\right)^{1/2} - n^{1/2}$. Il primo pezzo tende a $2^{1/2} = \sqrt2$ (limite somma, poi potenza), il secondo a $+\infty$. Forma $[\sqrt2 - \infty] = -\infty$, determinata.

### $(1 + 1/n)^{n^2} \to +\infty$ (slide 54, 7/10)

(<span class="src">7/10, pagina 18</span>.) Forma $[1^\infty]$, ma si risolve senza tecniche:
$$
\left(1 + \frac1n\right)^{n^2} = \left[\left(1 + \frac1n\right)^n\right]^n
$$
La base fra quadre tende a $e > 1$ (definizione di $e$), l'esponente $n \to +\infty$: forma determinata $[e^{+\infty}] = +\infty$.

È l'esempio che mostra che $[1^\infty]$ è indeterminata: $1^n \to 1$, $(1 + 1/n)^n \to e$, $(1 + 1/n)^{n^2} \to +\infty$.

### "Somma e sottrai": $\frac{n}{n+1} \to 1$ (slide 56)

Il limite presenta una forma indeterminata $\left[\frac\infty\infty\right]$. Manipolazione algebrica:
$$
\frac{n}{n+1} = \frac{n + 1 - 1}{n+1} = \frac{n+1}{n+1} - \frac{1}{n+1} = 1 - \frac{1}{n+1}
$$
il che elimina ogni forma indeterminata e permette di calcolare il limite: $1 - \frac{1}{n+1} \to 1 - \left[\frac1\infty\right] = 1$.

### "Raccogli chi comanda" (slide 57)

$\displaystyle\lim \frac{n^3 - 2n}{(2n + 1)(3n^2 - n + 2)}$ presenta varie forme $[+\infty - \infty]$ sia al numeratore sia al denominatore. Si raccolgono gli infiniti più forti, cioè le potenze di $n$ più elevate, **in ogni fattore**:
$$
\frac{n^3 - 2n}{(2n+1)(3n^2 - n + 2)} = \frac{n^3\left(1 - \frac{2}{n^2}\right)}{2n\left(1 + \frac{1}{2n}\right) \cdot 3n^2\left(1 - \frac{1}{3n} + \frac{2}{3n^2}\right)} = \frac{1 - \frac{2}{n^2}}{6\left(1 + \frac{1}{2n}\right)\left(1 - \frac{1}{3n} + \frac{2}{3n^2}\right)} \to \frac{1 - 0}{6(1 + 0)(1 - 0 + 0)} = \frac16
$$
Dopo il raccoglimento $n^3$ si semplifica e non resta nessuna forma indeterminata.

### "Moltiplica e dividi" (slide 58)

$\displaystyle\lim\left(1 + \frac{1}{2n^2 - 1}\right)^{3n^2 + 1}$ presenta una forma $[1^\infty]$. Si mette in evidenza il limite notevole di Nepero aggiustando l'esponente: si moltiplica e divide per $2n^2 - 1$, che è la quantità sotto l'$1$.
$$
\left(1 + \frac{1}{2n^2 - 1}\right)^{3n^2+1} = \left(1 + \frac{1}{2n^2-1}\right)^{(2n^2 - 1)\frac{3n^2 + 1}{2n^2 - 1}} = \left[\left(1 + \frac{1}{2n^2 - 1}\right)^{2n^2 - 1}\right]^{\frac{3n^2+1}{2n^2-1}} \to e^{3/2}
$$
La base fra quadre tende a $e$ (Nepero generalizzato con $a_n = 2n^2 - 1 \to +\infty$), l'esponente $\frac{3n^2 + 1}{2n^2 - 1} \to \frac32$ (raccogli chi comanda), e la regola della potenza dà $e^{3/2}$.

### "Moltiplica, dividi e razionalizza" (slide 59)

$\displaystyle\lim\left(\sqrt{n+1} - \sqrt{n-1}\right)$ presenta una forma $[+\infty - \infty]$. Trattandosi di una differenza di radici quadrate, si razionalizza: si moltiplica e divide per la somma delle radici e si usa il prodotto notevole $(a - b)(a + b) = a^2 - b^2$.
$$
\sqrt{n+1} - \sqrt{n-1} = \frac{\left(\sqrt{n+1} - \sqrt{n-1}\right)\left(\sqrt{n+1} + \sqrt{n-1}\right)}{\sqrt{n+1} + \sqrt{n-1}} = \frac{(n+1) - (n-1)}{\sqrt{n+1} + \sqrt{n-1}} = \frac{2}{\sqrt{n+1} + \sqrt{n-1}} \to \left[\frac2\infty\right] = 0
$$
Il prof sottolinea "differenza di radici quadrate": è il segnale per razionalizzare. Al denominatore la somma non dà problemi, perché $[+\infty + \infty]$ è determinata.

### Infiniti dello stesso ordine: $n$ e $3n$ (slide 64)

Vedi la definizione di ordine sopra: $\frac{n}{3n} = \frac13 \in (0, +\infty)$, quindi stesso ordine, anche se $3n - n \to +\infty$.

### Gerarchia che si può usare: $\lim \frac{\log(3n^2)}{\sqrt n}$ (slide 67, 12/10)

(<span class="src">12/10, pagina 5</span>.) **Come si riconosce**: rapporto fra un logaritmo e una potenza di $n$, forma $\left[\frac\infty\infty\right]$; dentro il logaritmo c'è una potenza di $n$, quindi la gerarchia si può usare dopo aver semplificato.

Il prof scrive in rosa le proprietà del logaritmo:
$$
\log(3n^2) = \log 3 + \log(n^2) = \log 3 + 2\log n \qquad \log(ab) = \log a + \log b, \quad \log(n^2) = 2\log n
$$
Poi, scrivendo $\sqrt n = n^{1/2}$:
$$
\frac{\log 3 + 2\log n}{n^{1/2}} = \frac{\log 3}{n^{1/2}} + 2 \cdot \frac{\log n}{n^{1/2}} \qquad \text{si spezza la frazione}
$$
- $\frac{\log 3}{n^{1/2}} \to 0$: numeratore costante, denominatore $\to +\infty$, forma $\left[\frac{c}{\infty}\right] = 0$;
- $\frac{\log n}{n^{1/2}} \to 0$: **gerarchia**, $\log n \ll n^\alpha$ con $\alpha = \frac12$.

Somma: $0 + 2 \cdot 0 = 0$. Controllo numerico: $n = 10^6$ dà $\frac{\log(3 \cdot 10^{12})}{1000} \approx \frac{28{,}7}{1000} \approx 0{,}03$.

### Gerarchia che NON si può usare: $\lim \frac{\log(2^n + 1)}{n}$ (slide 67, 12/10)

(<span class="src">12/10, pagine 6-8</span>.) **La trappola**: "il logaritmo è più lento di $n$, quindi fa $0$". Sbagliato: dentro il logaritmo c'è $2^n$, e $\log(2^n) = n\log 2$ cresce come $n$. Il risultato è $\log 2$. Il prof lo fa in due modi.

**Metodo 1: raccogliere dentro il logaritmo.** Si raccoglie chi comanda nell'argomento:
$$
2^n + 1 = 2^n\left(1 + \frac{1}{2^n}\right) \qquad \text{raccolgo } 2^n
$$
$$
\log(2^n + 1) = \log(2^n) + \log\left(1 + \frac{1}{2^n}\right) \qquad \log(ab) = \log a + \log b
$$
$$
= n\log 2 + \log\left(1 + \frac{1}{2^n}\right) \qquad \log(2^n) = n\log 2
$$
Dividendo per $n$:
$$
\frac{\log(2^n + 1)}{n} = \frac{n\log 2 + \log\left(1 + \frac{1}{2^n}\right)}{n} = \log 2 + \frac{\log\left(1 + \frac{1}{2^n}\right)}{n}
$$
Il prof sottolinea in verde $\log\left(1 + \frac{1}{2^n}\right) \to 0$, e il limite è $\log 2 + \frac{0}{\infty} = \log 2$.

Il passaggio “$\log\left(1 + \frac{1}{2^n}\right) \to 0$" userebbe la continuità del logaritmo, che arriva con il capitolo 4. Per il secondo addendo basta però una stima: $1 < 1 + \frac{1}{2^n} \leq 2$ e $\log$ è crescente, quindi $0 < \log\left(1 + \frac{1}{2^n}\right) \leq \log 2$ e
$$
0 < \frac{\log\left(1 + \frac{1}{2^n}\right)}{n} \leq \frac{\log 2}{n} \to 0
$$
e per i carabinieri il secondo addendo tende a $0$.

**Metodo 2: carabinieri** (pagine 7-8). Si stringe $2^n + 1$ fra due potenze di $2$:
- sotto: $2^n < 2^n + 1$, quindi (log crescente) $a_n := \frac{\log(2^n)}{n} = \log 2 < \frac{\log(2^n + 1)}{n}$;
- sopra: $2^n + 1 \leq 2^{n+1}$ per ogni $n$ (equivale a $1 \leq 2^n$), quindi $\frac{\log(2^n + 1)}{n} \leq b_n := \frac{\log(2^{n+1})}{n} = \frac{n+1}{n}\log 2 \to \log 2$.

$a_n = \log 2$ costante e $b_n \to \log 2$: per il teorema dei due carabinieri $\lim \frac{\log(2^n + 1)}{n} = \log 2$.

Controllo: $n = 10$ dà $\frac{\log 1025}{10} \approx 0{,}6934$, e $\log 2 \approx 0{,}6931$. Lo stesso esercizio, con il metodo 2, è il 3.(3) in [Esercizi limiti di successioni](/uni/analisi-1/esercizi-limiti-di-successioni/).

### Criterio del rapporto: $\lim \frac{(2n)!}{n^{n/2}}$ (slide 68, 12/10)

(<span class="src">12/10, pagine 9-11</span>.) **Come si riconosce**: fattoriale e potenza $n$-esima con esponente che dipende da $n$; nella gerarchia non c'è un confronto pronto fra $(2n)!$ e $n^{n/2}$, e i fattoriali nel rapporto $\frac{a_{n+1}}{a_n}$ si semplificano: criterio del rapporto. La successione è a termini positivi.

Con $a_n = \frac{(2n)!}{n^{n/2}}$, il termine successivo ha $2(n+1) = 2n + 2$ nel fattoriale e $n + 1$ nella potenza:
$$
\frac{a_{n+1}}{a_n} = \frac{(2n+2)!}{(n+1)^{\frac{n+1}{2}}} \cdot \frac{n^{n/2}}{(2n)!}
$$
I passaggi del prof, uno per riga:
$$
(2n+2)! = (2n+2)(2n+1)(2n)! \qquad \text{si semplifica } (2n)!
$$
$$
(n+1)^{\frac{n+1}{2}} = (n+1)^{\frac n2} \cdot (n+1)^{\frac12} \qquad \frac{n+1}{2} = \frac n2 + \frac12 \text{ (cerchio arancione)}
$$
$$
2n + 2 = 2(n+1) \qquad \text{(parentesi blu)}
$$
Quindi
$$
\frac{a_{n+1}}{a_n} = \frac{2(n+1)(2n+1) \cdot n^{n/2}}{(n+1)^{n/2} \cdot (n+1)^{1/2}} = 2(n+1)^{\frac12}(2n+1) \cdot \left(\frac{n}{n+1}\right)^{\frac n2}
$$
dove $\frac{n+1}{(n+1)^{1/2}} = (n+1)^{1/2}$ (il prof corregge in rosso l'esponente $1$ in $\frac12$). Resta la potenza cerchiata in verde:
$$
\frac{n}{n+1} = \left(\frac{n+1}{n}\right)^{-1} = \left(1 + \frac1n\right)^{-1} \qquad \text{reciproco}
$$
$$
\left(\frac{n}{n+1}\right)^{\frac n2} = \left(1 + \frac1n\right)^{-\frac n2} = \left[\left(1 + \frac1n\right)^n\right]^{-\frac12} \to e^{-\frac12} = \frac{1}{\sqrt e}
$$
per la definizione di $e$ e la potenza dei limiti. Infine
$$
\frac{a_{n+1}}{a_n} = \underbrace{2(n+1)^{\frac12}(2n+1)}_{\to +\infty} \cdot \underbrace{\left(1 + \frac1n\right)^{-\frac n2}}_{\to 1/\sqrt e} \to +\infty \cdot \frac{1}{\sqrt e} = +\infty
$$
$L = +\infty > 1$: per il criterio del rapporto $\frac{(2n)!}{n^{n/2}} \to +\infty$.

Controllo di buon senso: $(2n)!$ è un prodotto di $2n$ fattori grandi fino a $2n$, $n^{n/2}$ di $\frac n2$ fattori uguali a $n$: il fattoriale ha molti più fattori.

### Criterio del rapporto: $\lim \frac{n!\,a^n}{n^n}$ con $a = 2$ e $a = 3$ (slide 68, 12/10)

Il prof lo lascia "per casa", poi lo corregge in aula (<span class="src">12/10, "Correzione", pagine 12-13</span>). **Come si riconosce**: fattoriale, esponenziale e $n^n$ insieme; la gerarchia dice $n! \ll n^n$ ma c'è anche $a^n$ sopra, e non si sa chi vince: criterio del rapporto.

Sia $b_n = \frac{n!\,a^n}{n^n}$, a termini positivi.
$$
\frac{b_{n+1}}{b_n} = \frac{(n+1)!\,a^{n+1}}{(n+1)^{n+1}} \cdot \frac{n^n}{n!\,a^n} \qquad \text{moltiplico per il reciproco}
$$
$$
= (n+1) \cdot \frac{n^n}{(n+1)^{n+1}} \cdot a \qquad \frac{(n+1)!}{n!} = n+1, \quad \frac{a^{n+1}}{a^n} = a
$$
$$
= (n+1) \cdot \frac{n^n}{(n+1)^n (n+1)} \cdot a \qquad (n+1)^{n+1} = (n+1)^n \cdot (n+1) \text{ (in verde)}
$$
$$
= \left(\frac{n}{n+1}\right)^n \cdot a \qquad \text{si semplifica } n + 1
$$
$$
= a\left(1 + \frac1n\right)^{-n} \qquad \frac{n}{n+1} = \left(1 + \frac1n\right)^{-1}
$$
Quindi $\lim \frac{b_{n+1}}{b_n} = a \cdot e^{-1} = \frac ae$. Le conclusioni del prof:
- **$a = 2$**: $\frac2e < 1$ (perché $e \approx 2{,}718$), quindi la successione converge a zero;
- **$a = 3$**: $\frac3e > 1$, quindi la successione diverge a $+\infty$.

Con $a = e$ si avrebbe $L = 1$ e il criterio non direbbe niente: è il confine fra i due comportamenti.

## Esercizi tipo esame

### Crocette (stile parte 1)

**C1.** Quale di queste è una forma **determinata**?

- a) $[+\infty - \infty]$
- b) $[0 \cdot \infty]$
- c) $[0^{+\infty}]$
- d) $[1^{+\infty}]$

> [!example]- Soluzione
> **c**: $a_n \to 0^+$, $b_n \to +\infty$ dà sempre $a_n^{b_n} \to 0$ (slide 50). Un numero piccolo positivo elevato a un esponente enorme è ancora più piccolo. Le altre tre sono nella lista delle forme indeterminate (slide 52-54).

**C2.** $\displaystyle\lim_{n \to +\infty}\frac{3n^2 - n^3 + 1}{2n^3 + 5n}$ vale:

- a) $\frac32$
- b) $-\frac12$
- c) $0$
- d) $-\infty$

> [!example]- Soluzione
> **b**. Numeratore e denominatore hanno grado $3$: raccogliendo $n^3$, $\frac{n^3\left(\frac3n - 1 + \frac{1}{n^3}\right)}{n^3\left(2 + \frac{5}{n^2}\right)} \to \frac{-1}{2}$. La a) prende i coefficienti di $n^2$ e $n^3$ sbagliando chi comanda; la d) dimentica che anche il denominatore è di grado $3$.

**C3.** Sia $a_n > 0$ con $\frac{a_{n+1}}{a_n} \to 1$. Allora:

- a) $a_n \to 1$
- b) $a_n \to 0$
- c) $a_n$ è limitata
- d) non si può concludere nulla sul limite di $a_n$

> [!example]- Soluzione
> **d**, la nota della slide 62: $a_n = n$ ha rapporto $\to 1$ e diverge, $a_n = \frac1n$ ha rapporto $\to 1$ e tende a $0$. Questi due esempi smentiscono anche a), b) e c).

**C4.** Quale successione tende a $0$?

- a) $\dfrac{n^{50}}{1{,}01^n}$
- b) $\dfrac{2^n}{n^{3}}$
- c) $\dfrac{n!}{5^n}$
- d) $\dfrac{n}{\log n}$

> [!example]- Soluzione
> **a**: per la gerarchia $n^\alpha \ll a^n$ per ogni $\alpha > 0$ e ogni $a > 1$, anche $\alpha = 50$ e $a = 1{,}01$. Le altre hanno sopra l'infinito di ordine superiore e tendono a $+\infty$.

**C5** (la trappola della slide 67). $\displaystyle\lim_{n \to +\infty}\frac{\log(5^n + n)}{n}$ vale:

- a) $0$
- b) $1$
- c) $\log 5$
- d) $+\infty$

> [!example]- Soluzione
> **c**. Dentro il logaritmo comanda $5^n$: $\log(5^n + n) = n\log 5 + \log\left(1 + \frac{n}{5^n}\right)$, e il secondo pezzo sta fra $0$ e $\log 2$. Diviso $n$: $\log 5 + \frac{\text{limitata}}{n} \to \log 5$. La a) è l'errore "logaritmo su $n$, gerarchia": vale solo per il logaritmo di una potenza di $n$.

### Esercizi (stile parte 2)

**Esercizio 1** (proposto dal prof alla slide 46). Dimostrare con la definizione di limite che se $a_n \to a$ e $b_n \to b$, con $a, b \in \mathbb{R}$, allora $a_n + b_n \to a + b$.

> [!example]- Soluzione
> Fissiamo $\varepsilon > 0$. L'idea è chiedere a ciascuna successione metà della tolleranza.
> - Per $a_n \to a$, con tolleranza $\frac\varepsilon2$: esiste $\nu_1$ con $|a_n - a| < \frac\varepsilon2$ per $n > \nu_1$.
> - Per $b_n \to b$, con tolleranza $\frac\varepsilon2$: esiste $\nu_2$ con $|b_n - b| < \frac\varepsilon2$ per $n > \nu_2$.
>
> Per $n > \nu_\varepsilon := \max\{\nu_1, \nu_2\}$, con la disuguaglianza triangolare:
> $$
> |(a_n + b_n) - (a + b)| = |(a_n - a) + (b_n - b)| \leq |a_n - a| + |b_n - b| < \frac\varepsilon2 + \frac\varepsilon2 = \varepsilon
> $$
> Quindi $a_n + b_n \to a + b$. $\blacksquare$

**Esercizio 2** (slide 60, esercizi 1, 3, 5). Calcolare
$$
\text{a)}\ \lim \frac{n(1 - 2n^2) - 3n + 1}{(4 - n)(5 - n)} \qquad \text{b)}\ \lim n\left(\sqrt{n^2 + 2} - \sqrt{n^2 + 3}\right) \qquad \text{c)}\ \lim \frac{5^n}{2^n + 3^n}
$$

> [!example]- Soluzione
> **a)** Numeratore: $n - 2n^3 - 3n + 1 = -2n^3 - 2n + 1$. Denominatore: $(4 - n)(5 - n) = n^2 - 9n + 20$. Raccogli chi comanda:
> $$
> \frac{n^3\left(-2 - \frac{2}{n^2} + \frac{1}{n^3}\right)}{n^2\left(1 - \frac9n + \frac{20}{n^2}\right)} = n \cdot \frac{-2 - \frac{2}{n^2} + \frac{1}{n^3}}{1 - \frac9n + \frac{20}{n^2}} \to [+\infty \cdot (-2)] = -\infty
> $$
>
> **b)** $[\infty \cdot 0]$ con una differenza di radici: razionalizza.
> $$
> n\left(\sqrt{n^2+2} - \sqrt{n^2+3}\right) = n \cdot \frac{(n^2 + 2) - (n^2 + 3)}{\sqrt{n^2+2} + \sqrt{n^2+3}} = \frac{-n}{\sqrt{n^2+2} + \sqrt{n^2+3}}
> $$
> Raccogliendo $n$ sotto le radici, $\sqrt{n^2 + 2} = n\sqrt{1 + \frac{2}{n^2}}$ (con $n > 0$):
> $$
> = \frac{-n}{n\left(\sqrt{1 + \frac2{n^2}} + \sqrt{1 + \frac3{n^2}}\right)} \to \frac{-1}{1 + 1} = -\frac12
> $$
>
> **c)** $\left[\frac\infty\infty\right]$ con esponenziali: comanda la base più grande, $3^n$ al denominatore.
> $$
> \frac{5^n}{3^n\left(\left(\frac23\right)^n + 1\right)} = \frac{\left(\frac53\right)^n}{\left(\frac23\right)^n + 1} \to \frac{+\infty}{0 + 1} = +\infty
> $$
> usando $a^n \to +\infty$ per $a = \frac53 > 1$ e $a^n \to 0$ per $a = \frac23 < 1$.

**Esercizio 3** (slide 60, esercizi 2, 4, 6). Calcolare
$$
\text{a)}\ \lim\left(\frac{n^2 - n + 1}{n^2 - 1}\right)^{\frac{3 - 2n^2}{n + 3}} \qquad \text{b)}\ \lim\left(\frac{\sqrt{n-1}}{n+1}\right)^{n + 3^{-n}} \qquad \text{c)}\ \lim \frac{2^n + n^7}{\log n + n^2}
$$

> [!example]- Soluzione
> **a)** La base tende a $1$ (grado $2$ sopra e sotto, coefficienti $1$), l'esponente a $-\infty$ (grado $2$ sopra, $1$ sotto, coefficiente $-2$): forma $[1^\infty]$. Somma e sottrai nella base:
> $$
> \frac{n^2 - n + 1}{n^2 - 1} = 1 + \frac{(n^2 - n + 1) - (n^2 - 1)}{n^2 - 1} = 1 + \frac{2 - n}{n^2 - 1} = 1 + \frac{1}{a_n}, \qquad a_n = \frac{n^2 - 1}{2 - n}
> $$
> e $|a_n| \to +\infty$ (va a $-\infty$, e Nepero generalizzato lo permette). Moltiplica e dividi l'esponente per $a_n$:
> $$
> \left[\left(1 + \frac1{a_n}\right)^{a_n}\right]^{\frac{3 - 2n^2}{n+3} \cdot \frac{2 - n}{n^2 - 1}}
> $$
> L'esponente nuovo: $\frac{(3 - 2n^2)(2 - n)}{(n + 3)(n^2 - 1)}$ ha grado $3$ sopra e sotto, coefficiente direttore $\frac{(-2)(-1)}{1 \cdot 1} = 2$. Quindi il limite è $e^2$.
>
> **b)** Base: $\frac{\sqrt{n-1}}{n+1} = \frac{\sqrt n\sqrt{1 - 1/n}}{n(1 + 1/n)} = \frac{1}{\sqrt n} \cdot \frac{\sqrt{1 - 1/n}}{1 + 1/n} \to 0 \cdot 1 = 0$, e la base è positiva per $n \geq 2$: tende a $0^+$. Esponente: $n + 3^{-n} \to +\infty + 0 = +\infty$. Forma $[0^{+\infty}] = 0$, determinata.
>
> **c)** Raccogli chi comanda con la gerarchia: sopra $2^n$ ($n^7 \ll 2^n$), sotto $n^2$ ($\log n \ll n^2$).
> $$
> \frac{2^n\left(1 + \frac{n^7}{2^n}\right)}{n^2\left(1 + \frac{\log n}{n^2}\right)} = \frac{2^n}{n^2} \cdot \frac{1 + \frac{n^7}{2^n}}{1 + \frac{\log n}{n^2}} \to [+\infty \cdot 1] = +\infty
> $$
> perché $\frac{2^n}{n^2} \to +\infty$ e i due rapporti dentro le parentesi tendono a $0$, sempre per la gerarchia.

**Esercizio 4** (i due della slide 68 sono svolti sopra, fra gli esempi del 12/10; questi sono dal foglio 4 del 2022, esercizio 1, e dalla gerarchia). Calcolare con il criterio del rapporto
$$
\text{a)}\ \lim \frac{a^n}{n!}\ \text{ con } a > 1 \qquad \text{b)}\ \lim \frac{(n!)^2}{(2n)!} \qquad \text{c)}\ \lim \frac{(n!)^3}{(2n)!} \qquad \text{d)}\ \lim \frac{n^2\,(n!)^2}{(2n)!}
$$

> [!example]- Soluzione
> **Come si riconosce**: fattoriali (e potenze) che nel rapporto $\frac{a_{n+1}}{a_n}$ si semplificano quasi tutti. Tutte a termini positivi. Il fatto che serve sempre: $\frac{(n+1)!}{n!} = n + 1$ e $\frac{(2n+2)!}{(2n)!} = (2n+2)(2n+1)$, perché passando da $n$ a $n+1$ il fattoriale $(2n)!$ guadagna **due** fattori.
>
> **a)** $\frac{a_{n+1}}{a_n} = \frac{a^{n+1}}{(n+1)!} \cdot \frac{n!}{a^n} = \frac{a}{n+1} \to 0 < 1$, quindi $\frac{a^n}{n!} \to 0$: è il terzo confronto della gerarchia, $a^n \ll n!$.
>
> **b)** Con $a_n = \frac{(n!)^2}{(2n)!}$:
> $$
> \frac{a_{n+1}}{a_n} = \frac{\big((n+1)!\big)^2}{(n!)^2} \cdot \frac{(2n)!}{(2n+2)!} = \frac{(n+1)^2}{(2n+2)(2n+1)} = \frac{(n+1)^2}{2(n+1)(2n+1)} = \frac{n+1}{2(2n+1)} \to \frac{1}{4}
> $$
> (nell'ultimo passaggio, raccogli chi comanda: grado $1$ sopra e sotto, coefficienti $1$ e $4$). $L = \frac14 < 1$: $a_n \to 0$.
>
> **c)** Con il cubo sopra resta un fattore $n + 1$ in più:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)^3}{(2n+2)(2n+1)} = \frac{(n+1)^2}{2(2n+1)} \to +\infty
> $$
> (grado $2$ sopra, $1$ sotto). $L = +\infty > 1$: $a_n \to +\infty$.
>
> **d)** Rispetto alla b) c'è il fattore $n^2$:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)^2}{n^2} \cdot \frac{n+1}{2(2n+1)} = \left(1 + \frac1n\right)^2 \cdot \frac{n+1}{2(2n+1)} \to 1 \cdot \frac14 = \frac14
> $$
> $L = \frac14 < 1$: $a_n \to 0$. Il fattore polinomiale $n^2$ non cambia niente: nel rapporto diventa $\left(1 + \frac1n\right)^2 \to 1$. È lo stesso motivo per cui $n^\alpha \ll a^n$.
>
> **Controllo** sulla b): $n = 10$ dà $\frac{(10!)^2}{20!} \approx 5{,}4 \cdot 10^{-6}$, già piccolissimo.

**Esercizio 5** (lasciato per casa il 7/10). Mostrare che: se $a_n < 0$ per ogni $n$ e $\frac{a_{n+1}}{a_n} \to L > 1$, allora $a_n \to -\infty$; se $a_n < 0$ per ogni $n$ e $\frac{a_{n+1}}{a_n} \to L < 1$, allora $a_n \to 0^-$.

> [!example]- Soluzione
> Sia $b_n := -a_n > 0$. Il rapporto non cambia: $\frac{b_{n+1}}{b_n} = \frac{-a_{n+1}}{-a_n} = \frac{a_{n+1}}{a_n} \to L$. Si applica il criterio del rapporto a $b_n$, che è a termini positivi.
> - Se $L > 1$: $b_n \to +\infty$, quindi $a_n = -b_n \to -\infty$.
> - Se $L < 1$: $b_n \to 0$, quindi $a_n = -b_n \to 0$; e siccome $a_n < 0$ per ogni $n$, $a_n \to 0^-$. $\blacksquare$

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
> **Controllo**: con $n = 10$ la a) vale circa $0{,}97$, e $\log 3 \approx 1{,}10$: ci si avvicina lentamente, perché $\frac{\log n}{n}$ va a $0$ piano.

## Errori tipici

- **Trattare $\infty$ come un numero.** $[+\infty - \infty]$ non è $0$, $\left[\frac\infty\infty\right]$ non è $1$, $[1^\infty]$ non è $1$.
- **Usare l'algebra dei limiti con limiti infiniti o che non esistono.** "Limite della somma = somma dei limiti" chiede limiti finiti; con $\pm\infty$ servono le regole dell'algebra estesa, e con un limite che non esiste non si può spezzare.
- **Dimenticare $b \neq 0$ nel quoziente e $a > 0$ nella potenza.**
- **$\left[\frac10\right] = \infty$ senza segno.** Serve sapere se il denominatore tende a $0^+$ o a $0^-$; se cambia segno, $\frac{1}{b_n}$ non ha limite.
- **Raccogliere solo in un fattore.** Nella slide 57 si raccoglie in ogni fattore, numeratore e denominatore.
- **Applicare il criterio del rapporto con $L = 1$.** Non dice niente.
- **Criterio del rapporto su termini non positivi** senza passare a $-a_n$.
- **Confondere "stesso ordine" con "uguali".** $n$ e $3n$ sono dello stesso ordine; $n$ e $n^2$ no.
- **Gerarchia "a occhio" per $n$ piccoli.** $n^{10} > 2^n$ per $n = 10$, ma $\frac{n^{10}}{2^n} \to 0$.
- **Gerarchia con un esponenziale dentro il logaritmo** (slide 67). $\frac{\log(2^n + 1)}{n} \to \log 2$, non $0$: $\log(2^n + 1)$ cresce come $n\log 2$. Prima si raccoglie dentro il logaritmo, poi si confronta.
- **Scrivere "=" fra una successione e il suo comportamento.** Sul quaderno degli esercizi (slide 60, esercizio 1) hai scritto $\frac{n^3(\dots)}{n^2(\dots)} = \frac{-2n}{1} = -\infty$: la successione non è uguale a $-2n$, e non è uguale a $-\infty$. Si scrive $n \cdot \frac{-2 - \dots}{1 - \dots}$, poi la freccia $\to -\infty$. All'esame gli "=" sbagliati costano punti anche col risultato giusto.
- **Perdere un segno o un coefficiente ricopiando.** Sempre slide 60 sul quaderno: nell'esercizio 2 l'esponente $\frac{3 - 2n^2}{n+3}$ è diventato $\frac{3 - n^2}{n+3}$ (il risultato passerebbe da $e^2$ a $e$) e $-n + 2$ è diventato $-(n + 2)$ invece di $-(n - 2)$; nell'esercizio 3 $\sqrt{n^2 + 2}$ è diventato $\sqrt{n^2 + 1}$, $n \to +\infty$ è diventato $n \to -\infty$, e $(n^2 + 1) - (n^2 + 3)$ è stato scritto senza parentesi come $n^2 + 1 - n^2 + 3$, che vale $4$ invece di $-2$. Dopo ogni riga si rilegge il testo.

## Domande

- Enuncia l'algebra dei limiti finiti. Che ipotesi servono per il quoziente e per la potenza, e perché?

- Elenca le sette forme indeterminate. Perché $[0^{+\infty}]$ invece è determinata?

- Dai tre esempi di forma $[+\infty - \infty]$ con limiti diversi.

- Che cosa vuol dire $b_n \to 0^+$? Perché da $b_n \to 0$ non segue $\frac1{b_n} \to \infty$?

- Perché $1^{a_n}$ non è una forma indeterminata, mentre $(1 + \frac1n)^{n}$ sì?

- Come si riconduce una forma indeterminata esponenziale a una forma $\infty \cdot 0$?

- Quali sono le quattro tecniche algebriche delle slide 56-59, e per quale forma indeterminata si usa ciascuna?

- Enuncia e dimostra il criterio del rapporto. Dove entrano la permanenza del segno e il teorema delle monotone?

- Perché con $L = 1$ il criterio del rapporto non conclude? Dai due esempi.

- Quando due infiniti sono dello stesso ordine? Perché $n$ e $3n$ lo sono?

- Scrivi la gerarchia degli infiniti. Che cosa vuol dire che è transitiva?

- Come si dimostra con il criterio del rapporto che $\frac{n^\alpha}{a^n} \to 0$ per $a > 1$? A cosa tende il rapporto $\frac{b_{n+1}}{b_n}$?

- Perché $\frac{\log(3n^2)}{\sqrt n} \to 0$ si fa con la gerarchia e $\frac{\log(2^n + 1)}{n}$ no? Quanto vale il secondo?

- Per quali $a > 0$ la successione $\frac{n!\,a^n}{n^n}$ tende a $0$, e per quali diverge? Cosa succede con $a = e$?

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
ordine: 9
---

Argomento di [Analisi Matematica 1](/uni/analisi-1/), capitolo 3, sezioni 3.6 ("Regole di calcolo dei limiti. Forme determinate"), 3.7 ("Forme indeterminate di limite") e 3.8 ("Criterio del rapporto. Gerarchia di infiniti"). Fatto a lezione il 6/10, slide 44-47 (<span class="src">slide annotate del 6/10</span>), e il 7/10, slide 48-65 (<span class="src">slide annotate del 7/10</span>). Il prof si è fermato all'enunciato della gerarchia degli infiniti (slide 65): le slide 66-68 (dimostrazione della gerarchia, "attenti a come la si usa", esercizi sul criterio del rapporto) sono nel <span class="src">deck non annotato</span>. Usa [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/) e [Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/). Esercizi del tutoraggio in [Esercizi limiti di successioni](/uni/analisi-1/esercizi-limiti-di-successioni/).

> [!abstract] Per l'esame
> - **Saper enunciare**: i limiti fondamentali di potenze, esponenziali e logaritmi; l'algebra dei limiti finiti (somma, prodotto, quoziente, potenza) con le ipotesi ($b \neq 0$ per il quoziente, $a > 0$ per la potenza); le forme determinate e le sette forme indeterminate; il criterio del rapporto con la dimostrazione; la gerarchia degli infiniti.
> - **Saper fare**: calcolare un limite seguendo lo schema della slide 55, riconoscere la forma indeterminata e scegliere la tecnica: somma e sottrai, raccogli chi comanda, moltiplica e dividi (Nepero), razionalizza; usare il criterio del rapporto con fattoriali ed esponenziali; confrontare due infiniti.
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

La dimostrazione di due casi è sulla slide 66, non ancora fatta a lezione. Uno dei quattro confronti, $\frac{n!}{n^n} \to 0$, si fa con i carabinieri (esercizio 3 in [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/)); un altro, $\frac{a^n}{n!} \to 0$, col criterio del rapporto (esercizio 4 in fondo).

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

**Esercizio 4** (slide 68, non ancora fatta a lezione: il criterio sì). Calcolare con il criterio del rapporto
$$
\text{a)}\ \lim \frac{n!\,a^n}{n^n}\ \text{ con } a = 2 \text{ e } a = 3 \qquad \text{b)}\ \lim \frac{(2n)!}{n^{n/2}} \qquad \text{c)}\ \lim \frac{a^n}{n!}\ \text{ con } a > 1
$$

> [!example]- Soluzione
> Tutte a termini positivi.
>
> **a)** Con $a_n = \frac{n!\,a^n}{n^n}$:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)!\,a^{n+1}}{(n+1)^{n+1}} \cdot \frac{n^n}{n!\,a^n} = \frac{(n+1)\,a\,n^n}{(n+1)^{n+1}} = a \cdot \frac{n^n}{(n+1)^n} = \frac{a}{\left(1 + \frac1n\right)^n} \to \frac{a}{e}
> $$
> Con $a = 2$: $L = \frac2e < 1$, quindi $a_n \to 0$. Con $a = 3$: $L = \frac3e > 1$, quindi $a_n \to +\infty$. (Con $a = e$ si avrebbe $L = 1$, e il criterio non decide.)
>
> **b)** Con $a_n = \frac{(2n)!}{n^{n/2}}$:
> $$
> \frac{a_{n+1}}{a_n} = \frac{(2n+2)!}{(2n)!} \cdot \frac{n^{n/2}}{(n+1)^{(n+1)/2}} = \frac{(2n+2)(2n+1)}{\left(\frac{n+1}{n}\right)^{n/2}\sqrt{n+1}} = \frac{(2n+2)(2n+1)}{\left[\left(1 + \frac1n\right)^n\right]^{1/2}\sqrt{n+1}}
> $$
> Il denominatore è $\sim \sqrt e \sqrt n$, il numeratore $\sim 4n^2$: il rapporto tende a $+\infty > 1$, quindi $a_n \to +\infty$.
>
> **c)** $\frac{a_{n+1}}{a_n} = \frac{a^{n+1}}{(n+1)!} \cdot \frac{n!}{a^n} = \frac{a}{n+1} \to 0 < 1$, quindi $\frac{a^n}{n!} \to 0$: è il terzo confronto della gerarchia, $a^n \ll n!$.

**Esercizio 5** (lasciato per casa il 7/10). Mostrare che: se $a_n < 0$ per ogni $n$ e $\frac{a_{n+1}}{a_n} \to L > 1$, allora $a_n \to -\infty$; se $a_n < 0$ per ogni $n$ e $\frac{a_{n+1}}{a_n} \to L < 1$, allora $a_n \to 0^-$.

> [!example]- Soluzione
> Sia $b_n := -a_n > 0$. Il rapporto non cambia: $\frac{b_{n+1}}{b_n} = \frac{-a_{n+1}}{-a_n} = \frac{a_{n+1}}{a_n} \to L$. Si applica il criterio del rapporto a $b_n$, che è a termini positivi.
> - Se $L > 1$: $b_n \to +\infty$, quindi $a_n = -b_n \to -\infty$.
> - Se $L < 1$: $b_n \to 0$, quindi $a_n = -b_n \to 0$; e siccome $a_n < 0$ per ogni $n$, $a_n \to 0^-$. $\blacksquare$

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

---
title: Permanenza del segno, confronto e carabinieri (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-06
lezioni: []
ordine: 8
---

Esercizi tipo esame di [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** Sia $x_n \to \ell$ con $x_n > 0$ per ogni $n$. Allora necessariamente:

- a) $\ell > 0$
- b) $\ell \geq 0$
- c) $\ell = 0$
- d) $x_n$ è decrescente

> [!example]- Soluzione
> **b**, punto 2 della permanenza del segno: le disuguaglianze passano al limite solo larghe. La a) è falsa per $x_n = \frac1n$, la c) per $x_n = 1$, la d) per $x_n = 2 - \frac1{n+1}$, positiva e crescente ($1, \frac32, \frac53, \frac74, \dots$). La parola che decide è "necessariamente": a), c) e d) sono vere per **alcune** successioni, ma basta un controesempio per scartarle.

**C2.** $\displaystyle\lim_{n \to +\infty}\frac{n\cos(n^3)}{n^2 + 1}$ vale:

- a) non esiste, perché $\cos(n^3)$ non ha limite
- b) $1$
- c) $0$
- d) $+\infty$

> [!example]- Soluzione
> **c**. È $\cos(n^3)$, limitata, per $\frac{n}{n^2+1}$, che tende a $0$ ($\frac{n}{n^2+1} = \frac{1/n}{1 + 1/n^2}$). Limitata per infinitesima è infinitesima. La a) è l'errore tipico: un fattore senza limite non impedisce al prodotto di averlo. La b) viene da chi "semplifica" $\cos(n^3)$ come se valesse $1$ e sbaglia anche il grado. La d) guarda solo il numeratore $n$. Verifica: $n = 100$ dà circa $0{,}0094$.

**C3.** Quale scrittura significa “$a_n$ **non** tende a $\ell$"?

- a) $\forall \varepsilon > 0\ \exists \nu\ \forall n > \nu : |a_n - \ell| \geq \varepsilon$
- b) $\exists \varepsilon > 0\ \forall \nu\ \exists n > \nu : |a_n - \ell| \geq \varepsilon$
- c) $\exists \varepsilon > 0\ \exists \nu\ \forall n > \nu : |a_n - \ell| \geq \varepsilon$
- d) $\forall \varepsilon > 0\ \forall \nu\ \exists n > \nu : |a_n - \ell| < \varepsilon$

> [!example]- Soluzione
> **b**: esiste una tolleranza $\varepsilon$ per cui $|a_n - \ell| \geq \varepsilon$ **frequentemente**. È la negazione di "per ogni $\varepsilon$, $|a_n - \ell| < \varepsilon$ definitivamente", fatta con la regola del prof: definitivamente diventa frequentemente, e la proprietà si nega. La c) chiede "definitivamente lontano", più forte del necessario: $(-1)^n$ non tende a $1$ ma torna a $1$ infinite volte, quindi la c) non vale per lei.
>
> Le altre due, una per una:
> - la a) dice "per ogni $\varepsilon$, definitivamente lontano più di $\varepsilon$": è vera per $a_n = n$ (che scappa a $+\infty$), ma è falsa per $(-1)^n$ con $\ell = 1$ (con $\varepsilon = 3$ si ha $|a_n - 1| \leq 2 < 3$ sempre), che pure non tende a $1$. È troppo forte;
> - la d) dice “$a_n$ torna vicino a $\ell$ infinite volte": è vera anche per le successioni che **tendono** a $\ell$, quindi non può significare "non tende". E $(-1)^n$ la soddisfa con $\ell = 1$.

**C4** (sul modello del foglio 2 del 2020, esercizio 6). Sia $(a_n)$ una successione con $|a_n| \leq 10^{10}$ per ogni $n$. Allora $b_n := \dfrac{\sqrt n\, a_n}{n + 1}$:

- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **c**. $b_n = a_n \cdot \frac{\sqrt n}{n + 1}$, e $\frac{\sqrt n}{n+1} = \frac{1/\sqrt n}{1 + 1/n} \to \frac{0}{1} = 0$. $a_n$ è limitata (con $M = 10^{10}$, enorme ma fisso): limitata per infinitesima, $b_n \to 0$. Converge sempre, qualunque sia $a_n$.
> - a) e b): $b_n$ è limitata, perché $|b_n| \leq 10^{10} \cdot \frac{\sqrt n}{n+1} \leq 10^{10}$; non può essere illimitata.
> - d) "limitata" è vero, ma "può non convergere" è falso: il teorema dice che converge **sempre**. La trappola è il numero $10^{10}$, che sembra grande: conta solo che sia una costante.

**C5** (stesso modello). Sia $(a_n)$ con $|a_n| \leq 10^{10}$ per ogni $n$. Allora $b_n := \dfrac{n\, a_n}{n + 1}$:

- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **d**. Qui $\frac{n}{n+1} \to 1$, **non** a $0$: il teorema "limitata per infinitesima" non si applica.
> - $b_n$ è limitata: $|b_n| = \frac{n}{n+1}|a_n| \leq 1 \cdot 10^{10}$, perché $\frac{n}{n+1} < 1$. Quindi a) e b) sono false.
> - Può non convergere: con $a_n = (-1)^n$ si ha $b_n = (-1)^n \frac{n}{n+1}$, che sui pari tende a $1$ e sui dispari a $-1$ (verifica: $b_{100} \approx 0{,}990$, $b_{101} \approx -0{,}990$). Quindi c) è falsa.
> - Può anche convergere (con $a_n = 0$): per questo la risposta dice "può".
>
> Confronta con C4: cambia solo il fattore davanti ad $a_n$, e decide se è infinitesimo.

**C6** (dal foglio 4 del 2022, esercizio 3 (xiv)). $\displaystyle\lim_{n \to +\infty} \frac{n + (-1)^n n}{n + 2}$:

- a) vale $1$
- b) vale $0$
- c) vale $2$
- d) non esiste

> [!example]- Soluzione
> **d**. Il $(-1)^n$ qui **non** è moltiplicato per un infinitesimo: è moltiplicato per $\frac{n}{n+2} \to 1$. Si guardano pari e dispari (sottosuccessioni, [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/)):
> - $n$ pari: $(-1)^n = 1$, il termine è $\frac{2n}{n+2} \to 2$;
> - $n$ dispari: $(-1)^n = -1$, il termine è $\frac{0}{n+2} = 0 \to 0$.
>
> Due sottosuccessioni con limiti diversi: il limite non esiste. La b) e la c) vedono una sola delle due sottosuccessioni. La a) tratta $(-1)^n n$ come se fosse trascurabile rispetto a $n$ ("in media vale $0$"): è l'errore di usare "limitata per infinitesima" dove l'infinitesimo non c'è. Verifica: $n = 1000$ dà $1{,}996$, $n = 1001$ dà $0$.

**C7.** La negazione di “$a_n \leq 5$ definitivamente" è:

- a) $a_n > 5$ definitivamente
- b) $a_n > 5$ frequentemente
- c) $a_n \leq 5$ frequentemente
- d) $a_n > 5$ per ogni $n$

> [!example]- Soluzione
> **b**, la regola del prof: definitivamente diventa frequentemente, e la proprietà si nega ($\leq$ diventa $>$). Formalmente: $\neg(\exists n_0\ \forall n > n_0 : a_n \leq 5) \iff \forall n_0\ \exists n > n_0 : a_n > 5$.
> - a) e d) sono troppo forti: $a_n = 5 + 5(-1)^n$ (valori $10, 0, 10, 0, \dots$) non è $\leq 5$ definitivamente, ma non è nemmeno $> 5$ definitivamente.
> - c) nega solo la parola e non la proprietà: per la stessa $a_n$ sono vere sia “$a_n \leq 5$ frequentemente" sia la frase di partenza negata, quindi c) non è la negazione.

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo.

**Esercizio 1** (★, "utile per sin e cos"). Calcolare
$$
\text{a)}\ \lim_{n \to +\infty} \frac{3 + 2\sin(n^2)}{\sqrt n} \qquad \text{b)}\ \lim_{n \to +\infty} \big(n + \cos n\big)
$$

> [!example]- Soluzione
> **a)** *Tipo*: una funzione trigonometrica (limitata) diviso qualcosa che cresce. *Metodo*: limitata per infinitesima.
> 1. $-1 \leq \sin(n^2) \leq 1$; moltiplico per $2$: $-2 \leq 2\sin(n^2) \leq 2$; sommo $3$: $1 \leq 3 + 2\sin(n^2) \leq 5$. Quindi $3 + 2\sin(n^2)$ è limitata.
> 2. $\frac{1}{\sqrt n} = n^{-1/2} \to 0$.
> 3. Limitata per infinitesima: il limite è $0$.
>
> Con i carabinieri espliciti: divido la catena del passo 1 per $\sqrt n > 0$, $\frac{1}{\sqrt n} \leq \frac{3 + 2\sin(n^2)}{\sqrt n} \leq \frac{5}{\sqrt n}$, entrambi $\to 0$. *Verifica*: $n = 100$ dà circa $0{,}24$, fra $0{,}1$ e $0{,}5$.
>
> **b)** *Tipo*: qualcosa che va a $+\infty$ più un pezzo limitato. *Metodo*: un solo carabiniere, quello sotto, perché il limite atteso è $+\infty$.
> 1. $\cos n \geq -1$, quindi $n + \cos n \geq n - 1$ per ogni $n$.
> 2. $n - 1 \to +\infty$.
> 3. Quindi $n + \cos n \to +\infty$. Il carabiniere sopra non serve, come dice la slide 41.
>
> *Verifica di buon senso*: aggiungere un numero fra $-1$ e $1$ a qualcosa che cresce senza limite non lo ferma.

**Esercizio 2.** Calcolare $\displaystyle\lim_{n \to +\infty} \frac{2n + 3\sin n}{n - \cos n}$.

> [!example]- Soluzione
> *Tipo*: quoziente in cui $\sin$ e $\cos$ sono **sommati** (non moltiplicati) a termini che crescono. *Come lo riconosco*: tolti $\sin$ e $\cos$ resta $\frac{2n}{n} = 2$, quindi il limite atteso è $2$. *Metodo*: raccogliere il termine che comanda e ricondursi a "limitata per infinitesima". Poi una seconda via con i carabinieri, che fa anche da controllo.
>
> **Via 1: raccolgo $n$.**
> 1. Per $n \geq 2$ il denominatore è positivo: $n - \cos n \geq n - 1 \geq 1$.
> 2. $\frac{2n + 3\sin n}{n - \cos n} = \frac{n\left(2 + 3\frac{\sin n}{n}\right)}{n\left(1 - \frac{\cos n}{n}\right)} = \frac{2 + 3\frac{\sin n}{n}}{1 - \frac{\cos n}{n}}$ (semplifico $n \neq 0$).
> 3. $\frac{\sin n}{n} \to 0$ e $\frac{\cos n}{n} \to 0$: limitata per infinitesima.
> 4. Numeratore $\to 2 + 3 \cdot 0 = 2$, denominatore $\to 1 - 0 = 1 \neq 0$.
> 5. Algebra dei limiti (quoziente con denominatore non nullo): il limite è $\frac21 = 2$.
>
> **Via 2: carabinieri.** Per $n \geq 2$, con il metodo dei quozienti:
> 1. numeratore: $2n - 3 \leq 2n + 3\sin n \leq 2n + 3$, e $2n - 3 > 0$;
> 2. denominatore: $n - 1 \leq n - \cos n \leq n + 1$, e $n - 1 > 0$;
> 3. il quoziente è minimo con numeratore minimo e denominatore massimo: $\frac{2n - 3}{n + 1} \leq \frac{2n + 3\sin n}{n - \cos n} \leq \frac{2n + 3}{n - 1}$;
> 4. $\frac{2n - 3}{n + 1} = \frac{2 - 3/n}{1 + 1/n} \to 2$ e $\frac{2n + 3}{n - 1} = \frac{2 + 3/n}{1 - 1/n} \to 2$;
> 5. carabinieri: il limite è $2$.
>
> *Verifica*: $n = 100$: $\frac{200 + 3\sin 100}{100 - \cos 100} \approx 2{,}002$; $n = 1000$: $\approx 2{,}004$. Per $n = 10$ vale circa $1{,}69$: i termini piccoli si avvicinano lentamente, ma restano sempre fra i due carabinieri.

**Esercizio 3.** Calcolare $\displaystyle\lim_{n \to +\infty}\frac{n!}{n^n}$ con i carabinieri.

> [!example]- Soluzione
> *Tipo*: fattoriale contro potenza. *Come lo riconosco*: né numeratore né denominatore si semplificano, ma sono tutti e due prodotti di $n$ fattori. *Metodo*: scriverli per esteso e accoppiare i fattori uno a uno, poi stimare.
> 1. $\frac{n!}{n^n} = \frac{1 \cdot 2 \cdot 3 \cdots n}{n \cdot n \cdot n \cdots n}$: sopra e sotto ci sono $n$ fattori.
> 2. Accoppio: $= \frac1n \cdot \frac2n \cdot \frac3n \cdots \frac nn$.
> 3. Ogni fattore da $\frac2n$ in poi è $\leq 1$, perché il numeratore è $\leq n$.
> 4. Moltiplicare per numeri fra $0$ e $1$ non fa crescere un numero positivo: il prodotto è $\leq$ del primo fattore, $\frac1n$.
> 5. Tutti i fattori sono positivi, quindi il prodotto è $> 0$:
> $$
> 0 < \frac{n!}{n^n} \leq \frac1n
> $$
> 6. I due carabinieri $0$ e $\frac1n$ tendono a $0$, quindi $\frac{n!}{n^n} \to 0$.
>
> È uno dei confronti della gerarchia degli infiniti ($n! \ll n^n$, [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)). *Verifica*: $n = 5$: $\frac{120}{3125} \approx 0{,}038 \leq 0{,}2$; $n = 10$: $\approx 0{,}00036 \leq 0{,}1$. In realtà va a $0$ molto più veloce di $\frac1n$: la stima è larga, ma basta.

**Esercizio 4** (lasciato per casa il 6/10). Dimostrare: se $a_n \to a$, $b_n \to b$ con $a, b \in \mathbb{R}$ e $a < b$, allora $a_n < b_n$ definitivamente.

> [!example]- Soluzione
> *Tipo*: dimostrazione di un enunciato con "definitivamente". *Metodo*: come nel punto 1 della permanenza, si scelgono strisce attorno ai limiti abbastanza strette da non sovrapporsi. *L'idea della scelta*: la distanza fra i limiti è $b - a$; strisce di raggio metà di questa distanza si toccano solo nel punto medio.
>
> Sia $\varepsilon = \frac{b - a}{2} > 0$, metà della distanza fra i due limiti. Le strisce $(a - \varepsilon, a + \varepsilon)$ e $(b - \varepsilon, b + \varepsilon)$ si toccano solo nel punto medio $m = \frac{a + b}{2}$, perché $a + \varepsilon = b - \varepsilon = m$.
>
> 1. Esiste $\nu_1$ con $|a_n - a| < \varepsilon$ per $n > \nu_1$; in particolare $a_n < a + \varepsilon = m$.
> 2. Esiste $\nu_2$ con $|b_n - b| < \varepsilon$ per $n > \nu_2$; in particolare $b_n > b - \varepsilon = m$.
> 3. Per $n > \max\{\nu_1, \nu_2\}$ valgono entrambe:
> $$
> a_n < m < b_n
> $$
> 4. quindi $a_n < b_n$ definitivamente. $\blacksquare$
>
> In alternativa, con la permanenza del segno: $b_n - a_n \to b - a > 0$ (limite della differenza), quindi per il punto 1 $b_n - a_n > 0$ definitivamente. È la stessa idea, con il teorema già fatto.
>
> *Verifica su un caso*: $a_n = 1 + \frac1n \to 1$, $b_n = 2 - \frac1n \to 2$, $m = \frac32$. Per $n = 1$: $a_1 = 2 > 1 = b_1$, la disuguaglianza è falsa; per $n = 3$: $a_3 = \frac43 < \frac53 = b_3$. "Definitivamente" è proprio il massimo che si può dire.

**Esercizio 5** (lasciato per casa il 7/10). Scrivere formalmente la definizione di $a_n \not\to \ell$, $\ell \in \mathbb{R}$ ($a_n$ non converge a $\ell$), e verificarla per $a_n = (-1)^n$, $\ell = 1$.

> [!example]- Soluzione
> *Tipo*: negazione di una definizione con quantificatori. *Metodo*: si nega un quantificatore alla volta da sinistra, poi si nega la condizione finale.
>
> La definizione di $a_n \to \ell$ è $\forall \varepsilon > 0\ \exists \nu_\varepsilon\ \forall n > \nu_\varepsilon : |a_n - \ell| < \varepsilon$. Negando quantificatore per quantificatore:
> 1. $\forall \varepsilon$ diventa $\exists \varepsilon$;
> 2. $\exists \nu$ diventa $\forall \nu$;
> 3. $\forall n > \nu$ diventa $\exists n > \nu$;
> 4. $|a_n - \ell| < \varepsilon$ diventa $|a_n - \ell| \geq \varepsilon$.
> $$
> a_n \not\to \ell \iff \exists\, \varepsilon > 0\ \ \forall \nu \in \mathbb{N}\ \ \exists\, n > \nu \ \text{t.c.}\ |a_n - \ell| \geq \varepsilon
> $$
> Con le parole del 7/10: esiste una tolleranza $\varepsilon$ tale che $|a_n - \ell| \geq \varepsilon$ **frequentemente**, cioè per infiniti indici.
>
> Per $(-1)^n$ e $\ell = 1$: scelgo $\varepsilon = 1$ (va bene qualunque $\varepsilon \in (0, 2]$, perché i dispari distano $2$ da $1$). Dato un qualunque $\nu$, prendo $n$ dispari con $n > \nu$ (esiste: per esempio $2\nu + 1$). Allora $|a_n - 1| = |-1 - 1| = 2 \geq 1$. $\blacksquare$
>
> *Verifica*: con $\nu = 10$ si prende $n = 21$, e $|(-1)^{21} - 1| = 2$.

**Esercizio 6** (livello 30). Sia $a_n \to \ell \in \mathbb{R}$ con $\ell \neq 0$. Dimostrare che $|a_n| > \frac{|\ell|}{2}$ definitivamente. Dedurre che $\frac{1}{a_n}$ è definita e **limitata** definitivamente.

> [!example]- Soluzione
> *Tipo*: dimostrazione alla "permanenza del segno", ma con il modulo: vale anche per $\ell < 0$ senza dividere in casi. *Dove serve*: è il passo chiave della dimostrazione di "limite del quoziente = quoziente dei limiti". *L'idea della scelta*: come nel punto 1, una striscia di raggio $\frac{|\ell|}{2}$ attorno a $\ell$ resta lontana da $0$ almeno $\frac{|\ell|}{2}$.
>
> 1. $\varepsilon := \frac{|\ell|}{2} > 0$, perché $\ell \neq 0$.
> 2. Definizione di limite: esiste $\nu$ con $|a_n - \ell| < \frac{|\ell|}{2}$ per ogni $n > \nu$.
> 3. Disuguaglianza triangolare ([Funzioni elementari](/uni/analisi-1/funzioni-elementari/)) con $\ell = (\ell - a_n) + a_n$: $|\ell| \leq |\ell - a_n| + |a_n|$.
> 4. Porto $|\ell - a_n|$ a sinistra: $|a_n| \geq |\ell| - |\ell - a_n|$.
> 5. $|\ell - a_n| = |a_n - \ell| < \frac{|\ell|}{2}$ per il passo 2, quindi $|\ell| - |\ell - a_n| > |\ell| - \frac{|\ell|}{2} = \frac{|\ell|}{2}$.
> 6. Dai passi 4 e 5: $|a_n| > \frac{|\ell|}{2}$ per ogni $n > \nu$. $\blacksquare$
>
> **La conseguenza.** Per $n > \nu$ si ha $|a_n| > \frac{|\ell|}{2} > 0$, quindi $a_n \neq 0$ e $\frac{1}{a_n}$ è definita. Inoltre, passando ai reciproci di numeri positivi (il verso si gira): $\left|\frac{1}{a_n}\right| = \frac{1}{|a_n|} < \frac{2}{|\ell|}$. Limitata, con $M = \frac{2}{|\ell|}$.
>
> *Verifica*: $a_n = -3 + \frac1n \to -3$, $\frac{|\ell|}{2} = 1{,}5$. $|a_n| = 3 - \frac1n \geq 2 > 1{,}5$ per ogni $n \geq 1$, e $\left|\frac{1}{a_n}\right| \leq \frac12 < \frac23$.

**Esercizio 7** (livello 30, dal foglio 2 del 2020, esercizio 1.10). Calcolare $\displaystyle\lim_{n \to +\infty} \frac{n! + 2\cos n}{(2n)! + (-1)^n}$.

> [!example]- Soluzione
> *Tipo*: quoziente di fattoriali con pezzi limitati sommati. *Come lo riconosco*: $2\cos n$ e $(-1)^n$ sono "rumore" limitato accanto a fattoriali enormi; il limite atteso è quello di $\frac{n!}{(2n)!}$, che dovrebbe essere $0$ perché $(2n)!$ è molto più grande. *Metodo*: carabinieri, stimando il rumore e poi $\frac{n!}{(2n)!}$ a mano.
>
> **Il segno.** Per $n \geq 2$: il numeratore è $\geq n! - 2 \geq 0$ (perché $n! \geq 2$), il denominatore è $\geq (2n)! - 1 > 0$. Quindi la successione è $\geq 0$: il carabiniere sotto è $0$.
>
> **Il carabiniere sopra**, per $n \geq 2$:
> 1. numeratore: $n! + 2\cos n \leq n! + 2 \leq n! + n! = 2 \cdot n!$ (perché $2 \leq n!$);
> 2. denominatore: $(2n)! + (-1)^n \geq (2n)! - 1 \geq \frac{(2n)!}{2}$ (perché $(2n)! \geq 2$, quindi $\frac{(2n)!}{2} \geq 1$);
> 3. quoziente: numeratore più grande, denominatore più piccolo, $\frac{n! + 2\cos n}{(2n)! + (-1)^n} \leq \frac{2 \cdot n!}{(2n)!/2} = \frac{4 \cdot n!}{(2n)!}$;
> 4. $(2n)! = n! \cdot (n + 1)(n + 2) \cdots (2n)$, e il prodotto $(n+1) \cdots (2n)$ ha $n$ fattori tutti $\geq n + 1$, quindi è $\geq n + 1$. Allora $\frac{n!}{(2n)!} = \frac{1}{(n+1) \cdots (2n)} \leq \frac{1}{n + 1}$;
> 5. quindi $0 \leq \frac{n! + 2\cos n}{(2n)! + (-1)^n} \leq \frac{4}{n + 1}$.
>
> $\frac{4}{n+1} \to 0$: per i carabinieri il limite è $0$.
>
> *Verifica*: $n = 3$: $\frac{6 + 2\cos 3}{720 - 1} \approx 0{,}0056 \leq 1$; $n = 5$: $\approx 3{,}3 \cdot 10^{-5} \leq 0{,}67$. La stima $\frac{4}{n+1}$ è larghissima, ma per il teorema basta che vada a $0$.

**Esercizio 8** (livello 30, dal foglio 2 del 2020, esercizio 8, "difficile", con l'hint "principio del confronto"). Dimostrare che la successione
$$
a_n = \sum_{k=0}^{n} \sin\frac{k\pi}{n}, \qquad n \geq 1
$$
non converge.

> [!example]- Soluzione
> *Tipo*: somma con un numero di addendi che cresce con $n$. *Come lo riconosco*: ogni singolo addendo è limitato, ma gli addendi sono $n + 1$, quindi la somma può crescere senza limite. **Non** si può fare il limite addendo per addendo. *Metodo*: un carabiniere sotto che va a $+\infty$ (confronto con un solo carabiniere): se $a_n \to +\infty$, non converge.
>
> **L'idea della stima.** Gli angoli $\frac{k\pi}{n}$, per $k = 0, \dots, n$, riempiono $[0, \pi]$, dove il seno è $\geq 0$. Una buona parte di loro (circa metà) cade nella zona centrale $\left[\frac\pi4, \frac{3\pi}{4}\right]$, dove il seno è almeno $\frac{\sqrt2}{2}$. Si buttano via gli altri addendi (sono $\geq 0$, quindi la somma diminuisce) e si contano quelli centrali.
>
> 1. **Tutti gli addendi sono $\geq 0$.** Per $0 \leq k \leq n$: $0 \leq \frac{k\pi}{n} \leq \pi$, e $\sin x \geq 0$ per $x \in [0, \pi]$.
> 2. **Gli addendi centrali sono grandi.** Se $\frac n4 \leq k \leq \frac{3n}{4}$, allora $\frac\pi4 \leq \frac{k\pi}{n} \leq \frac{3\pi}{4}$, e su $\left[\frac\pi4, \frac{3\pi}{4}\right]$ il seno è $\geq \sin\frac\pi4 = \frac{\sqrt2}{2}$ (sale fino a $\frac\pi2$ e poi scende in modo simmetrico).
> 3. **Quanti sono.** Gli interi di un intervallo chiuso $[\alpha, \beta]$ sono quelli da $\lceil\alpha\rceil$ a $\lfloor\beta\rfloor$, quindi sono $\lfloor\beta\rfloor - \lceil\alpha\rceil + 1 \geq (\beta - 1) - (\alpha + 1) + 1 = \beta - \alpha - 1$. Con $\alpha = \frac n4$, $\beta = \frac{3n}{4}$: almeno $\frac n2 - 1$ interi $k$.
> 4. **La stima.** Tolgo dalla somma gli addendi non centrali (passo 1: sono $\geq 0$) e stimo ogni addendo centrale con il passo 2:
> $$
> a_n \geq \sum_{\frac n4 \leq k \leq \frac{3n}{4}} \sin\frac{k\pi}{n} \geq \left(\frac n2 - 1\right) \cdot \frac{\sqrt2}{2}
> $$
> 5. $\left(\frac n2 - 1\right)\frac{\sqrt2}{2} \to +\infty$ (algebra dei limiti: $\frac n2 \to +\infty$).
> 6. Per il teorema dei carabinieri con il solo carabiniere sotto ($\ell = +\infty$): $a_n \to +\infty$. Quindi non converge. $\blacksquare$
>
> *Verifica numerica*: $a_{10} \approx 6{,}31 \geq 2{,}83$; $a_{100} \approx 63{,}66 \geq 34{,}65$. I valori veri crescono come $\frac{2n}{\pi}$ circa ($\frac{200}{\pi} \approx 63{,}66$): il "carabiniere" ha la pendenza giusta a meno di una costante.

---
title: Limiti di successioni (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-28
lezioni: []
ordine: 6
---

Esercizi tipo esame di [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1.** Quale formula definisce $\lim_{n \to +\infty} a_n = -\infty$?

- a) $\forall \varepsilon > 0\ \exists \nu_\varepsilon : \forall n > \nu_\varepsilon,\ a_n < -\varepsilon$
- b) $\exists \nu\ \forall \varepsilon > 0 : \forall n > \nu,\ a_n < -\varepsilon$
- c) $\forall \varepsilon > 0\ \exists \nu_\varepsilon : \forall n > \nu_\varepsilon,\ |a_n| > \varepsilon$
- d) $\forall \varepsilon > 0\ \exists \nu_\varepsilon : \exists n > \nu_\varepsilon,\ a_n < -\varepsilon$

> [!example]- Soluzione
> **a**. La b) scambia i quantificatori: chiederebbe un'unica soglia che vada bene per ogni $\varepsilon$, impossibile per una successione reale ($a_n < -\varepsilon$ per ogni $\varepsilon$ non è soddisfatto da nessun numero). La c) è soddisfatta anche da $(-1)^n n$, che oscilla e non tende a $-\infty$: è la definizione di $|a_n| \to +\infty$. La d) chiede un solo termine oltre la soglia invece che tutti.
>
> Come ci si arriva in crocetta, senza ricordare a memoria: si parte dal prefisso comune “$\forall \varepsilon\ \exists \nu\ \forall n > \nu$" (scarta b e d) e si sceglie la relazione: "sotto $-\varepsilon$" è $a_n < -\varepsilon$ (scarta c).

**C2.** $\displaystyle\sum_{k=0}^{9} 2^k$ vale:

- a) $512$
- b) $1023$
- c) $1024$
- d) $2047$

> [!example]- Soluzione
> **b**. Somma geometrica con $q = 2$ e $n = 9$: $\frac{2^{10} - 1}{2 - 1} = 1023$. La c) è $2^{10}$, l'errore di dimenticare il $-1$; la a) è l'ultimo termine $2^9$; la d) usa $n + 1 = 11$ all'esponente sbagliando di uno l'indice finale.
>
> *Verifica veloce*: le somme $1$, $1 + 2 = 3$, $1 + 2 + 4 = 7$ sono sempre "la potenza successiva meno $1$". Con l'ultimo termine $2^9$ la potenza successiva è $2^{10} = 1024$.

**C3.** Nello sviluppo di $(a + b)^5$ il coefficiente di $a^2 b^3$ è:

- a) $5$
- b) $6$
- c) $10$
- d) $15$

> [!example]- Soluzione
> **c**. Il termine $a^{n-k}b^k$ con $n = 5$, $k = 3$ ha coefficiente $\binom53 = \frac{5 \cdot 4 \cdot 3}{3!} = 10$. Riga $5$ del triangolo: $1, 5, 10, 10, 5, 1$. La d) è $\binom62$.
>
> Le altre due: la a) è $\binom51$ o $\binom54$, il coefficiente di $a^4b$ o di $ab^4$ (si è sbagliato $k$); la b) viene dalla riga $4$ ($1, 4, 6, 4, 1$), cioè da $(a+b)^4$.

**C4.** Quale affermazione è vera per ogni successione reale $(a_n)$?

- a) se $(a_n)$ è limitata, allora è convergente
- b) se $(a_n)$ è convergente, allora è limitata
- c) se $(a_n)$ è limitata, allora ha limite finito o infinito
- d) se $|a_n| \to 1$, allora $a_n \to 1$ oppure $a_n \to -1$

> [!example]- Soluzione
> **b**, il teorema della slide 22. La a) e la c) sono smentite da $(-1)^n$, limitata ma senza limite. La d) anche: $|(-1)^n| = 1 \to 1$, ma $(-1)^n$ non tende né a $1$ né a $-1$.
>
> Il metodo: davanti a "per ogni successione", cerca **un** controesempio per ciascuna opzione. $(-1)^n$ ne smonta tre da sola, ed è la successione da provare per prima.

**C5.** Quale di queste successioni **non** ammette limite?

- a) $\dfrac{(-1)^n}{n}$
- b) $\sin(n\pi)$
- c) $(-1)^{2n}$
- d) $(-1)^n + \dfrac1n$

> [!example]- Soluzione
> **d**. Sui pari vale $1 + \frac{1}{2k} \to 1$, sui dispari $-1 + \frac{1}{2k+1} \to -1$: due sottosuccessioni con limiti diversi, quindi per il corollario della slide 26 il limite non esiste. La a) tende a $0$ (oscilla, ma con ampiezza $\frac1n$ che si schiaccia); la b) vale $0$ per ogni $n$, perché $n\pi$ è sempre un multiplo di $\pi$; la c) vale $1$ per ogni $n$, perché $2n$ è pari.
>
> La trappola: tre opzioni su quattro contengono $(-1)^n$ o un seno, e "c'è un $(-1)^n$, quindi non ha limite" è sbagliato. Conta se l'oscillazione resta ampia (d) o si spegne (a), oppure se non c'è affatto (b, c).

**C6.** Sia $(a_n)$ una successione con $a_{2k} \to 3$ e $a_{2k+1} \to 3$ per $k \to +\infty$. Allora:

- a) $a_n \to 3$
- b) non si può dire nulla: due sottosuccessioni con lo stesso limite non bastano
- c) $a_n$ è limitata, ma può non convergere
- d) $a_n \to 3$ solo se $a_n$ è monotona

> [!example]- Soluzione
> **a**. Pari e dispari insieme coprono **tutti** gli indici: da un certo punto in poi i pari stanno nella striscia attorno a $3$, da un certo punto in poi anche i dispari, quindi da un certo punto in poi tutti (esercizio 12).
> - b) La frase "due sottosuccessioni con lo stesso limite non bastano" è vera in generale (con $\sin\frac{n\pi}{2}$, le sottosuccessioni $2k$ e $4k$ tendono entrambe a $0$ e il limite non esiste), ma pari e dispari non sono due sottosuccessioni qualunque: insieme sono tutta la successione.
> - c) "Limitata" è vero (converge), ma "può non convergere" è falso.
> - d) La monotonia non c'entra: $3 + \frac{(-1)^n}{n}$ non è monotona e tende a $3$.

**C7.** Quale di queste scelte di indici definisce una sottosuccessione $(a_{n_k})$ di $(a_n)_{n \in \mathbb{N}}$?

- a) $n_k = k^2 - k$, $k \geq 1$
- b) $n_k = (k - 3)^2$, $k \geq 0$
- c) $n_k = 5$ per ogni $k$
- d) $n_k = 100 - k$, $k \geq 0$

> [!example]- Soluzione
> **a**. Gli indici sono $0, 2, 6, 12, 20, \dots$: naturali e strettamente crescenti, perché $n_{k+1} - n_k = (k+1)^2 - (k+1) - k^2 + k = 2k > 0$ per $k \geq 1$.
> - b) Dà $9, 4, 1, 0, 1, 4, \dots$: prima scende, poi ripete gli stessi indici. Strettamente crescente è falso già al primo passo.
> - c) Indici tutti uguali: è la successione costante $a_5, a_5, \dots$, non una sottosuccessione.
> - d) Indici decrescenti, e negativi da $k = 101$ in poi.

**C8.** Per $n \geq 1$, $\dfrac{(n+1)!}{(n-1)!}$ vale:

- a) $n^2 + n$
- b) $n + 1$
- c) $2$
- d) $(n+1)\,n\,(n-1)$

> [!example]- Soluzione
> **a**. $(n+1)! = (n+1) \cdot n \cdot (n-1)!$ (proprietà 1 due volte), quindi il quoziente è $(n+1)n = n^2 + n$. Verifica con $n = 3$: $\frac{24}{2} = 12 = 9 + 3$.
> - b) Semplifica un fattore solo, come se fosse $\frac{(n+1)!}{n!}$.
> - c) "Sottrae" i fattoriali: $(n+1) - (n-1) = 2$. Il fattoriale non funziona così.
> - d) Tiene un fattore di troppo: $(n-1)$ è dentro $(n-1)!$ e si cancella.

**C9.** Quale affermazione è vera?

- a) ogni successione illimitata diverge a $+\infty$ o a $-\infty$
- b) ogni successione che diverge a $+\infty$ è illimitata superiormente
- c) ogni successione limitata ha una sottosuccessione costante
- d) se $a_n \to +\infty$, allora $a_n$ è definitivamente crescente

> [!example]- Soluzione
> **b**. Se $a_n \to +\infty$, per ogni $M$ i termini superano $M$ da un certo punto in poi, quindi nessun $M$ è un maggiorante.
> - a) $n(1 + (-1)^n)$ è illimitata ($2n$ sui pari) ma torna a $0$ sui dispari: non diverge.
> - c) $\frac1n$ è limitata, ma i suoi termini sono tutti diversi, quindi ogni sottosuccessione è strettamente decrescente, mai costante.
> - d) $n + 2(-1)^n$ ($2, -1, 4, 1, 6, 3, \dots$) diverge a $+\infty$, perché è $\geq n - 2$, ma scende a ogni passo da pari a dispari.

**C10.** Per $n \geq 1$, $\displaystyle\sum_{k=1}^{n} 3^k$ vale:

- a) $\dfrac{3^{n+1} - 3}{2}$
- b) $\dfrac{3^{n+1} - 1}{2}$
- c) $\dfrac{3^{n} - 1}{2}$
- d) $\dfrac{3^{n} - 3}{2}$

> [!example]- Soluzione
> **a**. La somma da $k = 0$ è $\frac{3^{n+1} - 1}{2}$; quella da $k = 1$ toglie il termine $3^0 = 1$: $\frac{3^{n+1} - 1}{2} - 1 = \frac{3^{n+1} - 3}{2}$. Verifica con $n = 2$: $3 + 9 = 12$ e $\frac{27 - 3}{2} = 12$.
> - b) È la somma da $k = 0$ (con $n = 2$ dà $13$): dimentica di togliere $1$.
> - c) È la somma da $k = 0$ a $n - 1$ (dà $4$).
> - d) È la somma da $k = 1$ a $n - 1$ (dà $3$).
>
> Il controllo con $n = 2$ basta a scartarle tutte: in crocetta conviene sempre provare un valore piccolo.

## Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo.

**Esercizio 1.** Verificare con la definizione che $\displaystyle\lim_{n \to +\infty} \frac{2n + 1}{n + 3} = 2$.

> [!example]- Soluzione
> *Tipo*: verifica con la definizione, limite finito, quoziente di polinomi di primo grado. *Metodo*: come la slide 19, semplifico $a_n - \ell$ e risolvo la disequazione in $n$.
>
> Fissiamo $\varepsilon > 0$. Cerchiamo $\nu_\varepsilon$ tale che per ogni $n > \nu_\varepsilon$ valga $\left|\frac{2n+1}{n+3} - 2\right| < \varepsilon$.
>
> 1. Semplifichiamo la differenza (denominatore comune $n + 3$):
> $$
> \frac{2n+1}{n+3} - 2 = \frac{2n + 1 - 2(n + 3)}{n + 3} = \frac{2n + 1 - 2n - 6}{n + 3} = -\frac{5}{n+3}
> $$
> 2. Quindi la relazione diventa $\frac{5}{n+3} < \varepsilon$ (il modulo toglie il segno, e $n + 3 > 0$).
> 3. Risolvendo in $n$:
> $$
> \frac{5}{n+3} < \varepsilon \iff n + 3 > \frac5\varepsilon \iff n > \frac5\varepsilon - 3
> $$
> (reciproci di positivi, poi tolgo $3$).
> 4. Scegliendo $\nu_\varepsilon := \frac{5}{\varepsilon} - 3$, per ogni $n > \nu_\varepsilon$ vale $|a_n - 2| < \varepsilon$. $\blacksquare$
>
> Controllo: con $\varepsilon = \frac12$, $\nu_\varepsilon = 7$; per $n = 8$, $|a_8 - 2| = \frac{5}{11} < \frac12$.

**Esercizio 2** (lasciato dal prof il 30/9). Mostrare che se $0 < a < 1$ allora $\displaystyle\lim_{n \to +\infty} a^n = 0$.

> [!example]- Soluzione
> *Tipo*: verifica di un limite $0$ con l'incognita all'esponente. *Metodo*: come $a^n \to +\infty$ della slide 19, ma con $\log_a$ decrescente: il verso si gira.
>
> Fissiamo $\varepsilon > 0$. Cerchiamo $\nu_\varepsilon$ tale che per $n > \nu_\varepsilon$ valga $-\varepsilon < a^n < \varepsilon$.
>
> 1. La disuguaglianza di sinistra è sempre vera, perché $a^n > 0$.
> 2. Per quella di destra si applica $\log_a$, che con $0 < a < 1$ è **decrescente**: il verso si gira.
> $$
> a^n < \varepsilon \iff n > \log_a(\varepsilon)
> $$
> 3. Scegliendo $\nu_\varepsilon := \log_a(\varepsilon)$, per ogni $n > \nu_\varepsilon$ vale $|a^n - 0| < \varepsilon$. $\blacksquare$
>
> Se $\varepsilon \geq 1$ il numero $\log_a \varepsilon$ è $\leq 0$ e la condizione vale per ogni $n \geq 1$: giusto, perché $a^n < 1 \leq \varepsilon$. Il caso interessante è $\varepsilon$ piccolo. Controllo con $a = \frac12$, $\varepsilon = \frac{1}{100}$: $\log_{1/2}\frac{1}{100} = \log_2 100 \approx 6{,}6$, e infatti $\frac{1}{2^7} = \frac{1}{128} < \frac{1}{100}$ mentre $\frac{1}{2^6} = \frac1{64}$ no.

**Esercizio 3** (lasciati per casa, slide 19-20). Dati $b > 0$ e $a > 1$, verificare con la definizione che $\lim n^b = +\infty$ e $\lim \log_a n = +\infty$.

> [!example]- Soluzione
> *Tipo*: due verifiche di $+\infty$. *Metodo*: per togliere la potenza o il logaritmo si applica la funzione inversa, che in entrambi i casi è crescente, quindi il verso resta.
>
> **$n^b$.**
> 1. Fissiamo $\varepsilon > 0$.
> 2. La funzione $t \mapsto t^{1/b}$ è strettamente crescente su $(0, +\infty)$ (esponente positivo), quindi
> $$
> n^b > \varepsilon \iff n > \varepsilon^{1/b}
> $$
> 3. Basta $\nu_\varepsilon := \varepsilon^{1/b}$. Con $b = \frac12$ si ritrova l'esempio $\sqrt n$, con $\nu_\varepsilon = \varepsilon^2$.
>
> **$\log_a n$.**
> 1. Fissiamo $\varepsilon > 0$.
> 2. Con $a > 1$ la funzione $t \mapsto a^t$ è strettamente crescente, quindi
> $$
> \log_a n > \varepsilon \iff n > a^\varepsilon
> $$
> 3. Basta $\nu_\varepsilon := a^\varepsilon$. $\blacksquare$
>
> *Verifica*: $b = 2$, $\varepsilon = 50$: $\nu_\varepsilon = \sqrt{50} \approx 7{,}07$, e $8^2 = 64 > 50$, $7^2 = 49$ no. $\log_{10} n > 3$ chiede $n > 1000$: $\log_{10} 1001 > 3$. Il logaritmo ci arriva, ma lentissimo.

**Esercizio 4.** Dimostrare la proprietà del triangolo di Tartaglia $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ per $1 \leq k \leq n - 1$, partendo dalla definizione col fattoriale.

> [!example]- Soluzione
> *Tipo*: identità fra fattoriali. *Metodo*: si porta tutto allo stesso denominatore, $k!\,(n-k)!$, che è quello di $\binom nk$, usando la proprietà $m! = m \cdot (m-1)!$ per "allungare" i fattoriali che mancano di un fattore.
>
> 1. Primo addendo: al denominatore c'è $(k-1)!$, manca il fattore $k$ per avere $k!$. Moltiplico sopra e sotto per $k$, usando $k! = k \cdot (k-1)!$:
> $$
> \binom{n-1}{k-1} = \frac{(n-1)!}{(k-1)!\,(n-k)!} = \frac{(n-1)! \cdot k}{k!\,(n-k)!}
> $$
> 2. Secondo addendo: al denominatore c'è $(n-1-k)!$, manca il fattore $n - k$. Moltiplico sopra e sotto per $n - k$, usando $(n-k)! = (n-k)\cdot(n-k-1)!$:
> $$
> \binom{n-1}{k} = \frac{(n-1)!}{k!\,(n-1-k)!} = \frac{(n-1)! \cdot (n-k)}{k!\,(n-k)!}
> $$
> 3. Sommando (stesso denominatore, raccolgo $(n-1)!$):
> $$
> \frac{(n-1)!\,\big(k + (n - k)\big)}{k!\,(n-k)!} = \frac{(n-1)! \cdot n}{k!\,(n-k)!} = \frac{n!}{k!\,(n-k)!} = \binom nk
> $$
> Si usa la proprietà $n! = n \cdot (n-1)!$ della slide 7. $\blacksquare$
>
> Lettura combinatoria, per ricordarla: fra $n$ oggetti fissane uno. Le scelte di $k$ oggetti che lo contengono sono $\binom{n-1}{k-1}$ (scegli gli altri $k-1$ fra i restanti), quelle che non lo contengono sono $\binom{n-1}{k}$.
>
> *Verifica*: $n = 5$, $k = 2$: $\binom41 + \binom42 = 4 + 6 = 10 = \binom52$.

**Esercizio 5.** Calcolare $\displaystyle\sum_{k=1}^{8} \frac{1}{2^k}$ e dire se la successione $S_n = \displaystyle\sum_{k=0}^{n} \frac{1}{2^k}$ è limitata.

> [!example]- Soluzione
> *Tipo*: somma geometrica che non parte da $0$, poi limitatezza. *Metodo*: calcolo la somma da $0$ con la formula e tolgo il termine $k = 0$.
>
> 1. La somma parte da $k = 1$: si toglie il termine $k = 0$ dalla formula. Con $q = \frac12$ e $n = 8$:
> $$
> \sum_{k=0}^{8} \left(\tfrac12\right)^k = \frac{\left(\frac12\right)^9 - 1}{\frac12 - 1} = \frac{1 - \frac{1}{512}}{\frac12} = 2\left(1 - \frac{1}{512}\right) = 2 - \frac{1}{256}
> $$
> 2. Tolgo il termine $k = 0$, che vale $1$:
> $$
> \sum_{k=1}^{8} \frac{1}{2^k} = 2 - \frac1{256} - 1 = 1 - \frac{1}{256} = \frac{255}{256}
> $$
> 3. In generale $S_n = 2\left(1 - \frac{1}{2^{n+1}}\right) = 2 - \frac{1}{2^n}$.
> 4. Siccome $0 < \frac{1}{2^n} \leq 1$, vale $1 \leq S_n < 2$ per ogni $n$: la successione è limitata, con $M = 2$. (Converge a $2$, perché $\frac{1}{2^n} \to 0$ per l'esercizio 2; ma la limitatezza qui si vede direttamente.)
>
> *Verifica*: $\frac12 + \frac14 + \frac18 = \frac78$, e la formula con $8$ al posto di $3$ dà $1 - \frac18 = \frac78$: il disegno mentale è un segmento lungo $1$ riempito per metà, poi per un quarto, e così via, a cui manca sempre l'ultimo pezzetto.

**Esercizio 6** (sul modello dell'esercizio del 6/10). Dimostrare che $a_n = (-1)^n \dfrac{n}{n+1}$ non ammette limite.

> [!example]- Soluzione
> *Tipo*: non esistenza del limite. *Come lo riconosco*: c'è $(-1)^n$ moltiplicato per qualcosa che tende a $1$, non a $0$, quindi il segno alterno non si spegne. *Metodo*: pari e dispari, poi corollario.
>
> Si separano pari e dispari (figura delle sottosuccessioni, a destra).
>
> **Pari**, $n_k = 2k$: $\ a_{2k} = \frac{2k}{2k+1}$. Tende a $1$: fissato $\varepsilon > 0$,
> $$
> \left|\frac{2k}{2k+1} - 1\right| = \frac{1}{2k+1} < \varepsilon \iff k > \frac12\left(\frac1\varepsilon - 1\right)
> $$
> quindi basta $\nu_\varepsilon = \frac12\left(\frac1\varepsilon - 1\right)$.
>
> **Dispari**, $n_k = 2k+1$: $\ a_{2k+1} = -\frac{2k+1}{2k+2}$. Tende a $-1$:
> $$
> \left|-\frac{2k+1}{2k+2} + 1\right| = \frac{1}{2k+2} < \varepsilon \iff k > \frac12\left(\frac1\varepsilon - 2\right)
> $$
>
> Le due sottosuccessioni hanno limiti $1$ e $-1$, diversi: per il corollario della slide 26, $a_n$ non ammette limite. $\blacksquare$
>
> Con l'algebra dei limiti ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)) i due limiti si leggono subito ($\frac{2k}{2k+1} = 1 - \frac{1}{2k+1} \to 1$); qui si è usata solo la definizione, che basta. Nota che $a_n$ è limitata ($|a_n| < 1$): un altro esempio di limitata non convergente.
>
> *Verifica*: $a_{100} = \frac{100}{101} \approx 0{,}990$, $a_{101} = -\frac{101}{102} \approx -0{,}990$.

**Esercizio 7.** Verificare con la definizione che $\displaystyle\lim_{n \to +\infty} (n^2 - 5n) = +\infty$.

> [!example]- Soluzione
> *Tipo*: verifica di $+\infty$ per un polinomio. *Come lo riconosco*: la disequazione $n^2 - 5n > \varepsilon$ è di secondo grado, e risolverla porta a una radice scomoda. *Perché maggiorare*: basta trovare una quantità più piccola di $n^2 - 5n$, ma semplice, che superi $\varepsilon$.
>
> **L'idea della stima.** $n^2 - 5n = n(n - 5)$. Quando $n \geq 6$ il secondo fattore è almeno $1$, quindi il prodotto è almeno $n$. E $n > \varepsilon$ si risolve subito.
>
> 1. Fissiamo $\varepsilon > 0$.
> 2. Per $n \geq 6$: $n - 5 \geq 1$, e moltiplicando per $n > 0$ si ha $n(n - 5) \geq n$, cioè $n^2 - 5n \geq n$.
> 3. Se inoltre $n > \varepsilon$, allora $n^2 - 5n \geq n > \varepsilon$.
> 4. Le due condizioni insieme sono “$n > 5$ e $n > \varepsilon$" ($n > 5$ per un naturale vuol dire $n \geq 6$). Scelgo $\nu_\varepsilon := \max(5, \varepsilon)$.
> 5. Per ogni $n > \nu_\varepsilon$ valgono i passi 2 e 3: $n^2 - 5n > \varepsilon$. $\blacksquare$
>
> *Verifica*: i primi valori sono $0, -4, -6, -6, -4, 0, 6, 14, 24$ ($n = 0, \dots, 8$): negativi all'inizio, poi crescono. Con $\varepsilon = 10$: $\nu_\varepsilon = 10$, e $a_{11} = 66 > 10$. La soglia vera sarebbe più bassa ($a_7 = 14 > 10$ già), ma non serve la più piccola.

**Esercizio 8** (livello 30). Verificare con la definizione che $\displaystyle\lim_{n \to +\infty} \frac{n^2 + n}{2n^2 + 3} = \frac12$.

> [!example]- Soluzione
> *Tipo*: verifica di un limite finito con polinomi di secondo grado. *Come lo riconosco*: semplificando $a_n - \frac12$ resta una frazione di grado $1$ su grado $2$; la disequazione esatta è di secondo grado. *Metodo*: maggiorare il modulo con qualcosa del tipo $\frac{c}{n}$, poi risolvere quella.
>
> 1. Semplifico la differenza (denominatore comune $2(2n^2 + 3)$):
> $$
> \frac{n^2 + n}{2n^2 + 3} - \frac12 = \frac{2(n^2 + n) - (2n^2 + 3)}{2(2n^2 + 3)} = \frac{2n - 3}{2(2n^2 + 3)}
> $$
> 2. Per $n \geq 2$ il numeratore $2n - 3$ è positivo, quindi il modulo è la frazione stessa: $\left|a_n - \frac12\right| = \frac{2n - 3}{4n^2 + 6}$.
> 3. Maggioro: il numeratore diventa più grande togliendo il $-3$, il denominatore più piccolo togliendo il $+6$; tutte e due le mosse fanno crescere la frazione (numeratore e denominatore positivi):
> $$
> \frac{2n - 3}{4n^2 + 6} < \frac{2n}{4n^2} = \frac{1}{2n}
> $$
> 4. $\frac{1}{2n} < \varepsilon \iff 2n > \frac1\varepsilon \iff n > \frac{1}{2\varepsilon}$.
> 5. Scelgo $\nu_\varepsilon := \max\left(1, \frac{1}{2\varepsilon}\right)$: per $n > \nu_\varepsilon$ si ha $n \geq 2$ (vale il passo 2) e $n > \frac{1}{2\varepsilon}$ (vale il passo 4). Quindi
> $$
> \left|a_n - \tfrac12\right| < \frac{1}{2n} < \varepsilon \qquad \forall n > \nu_\varepsilon
> $$
> $\blacksquare$
>
> *Verifica*: $\varepsilon = \frac{1}{20}$ dà $\nu_\varepsilon = 10$; per $n = 11$: $\left|a_{11} - \frac12\right| = \frac{19}{490} \approx 0{,}039 < 0{,}05$. Il passo 2 serve davvero: per $n = 1$ il numeratore è $-1$ e il modulo è $\frac{1}{10}$, non $-\frac{1}{10}$.

**Esercizio 9.** Dimostrare che $a_n = \cos\left(\dfrac{2n\pi}{3}\right)$ non ammette limite.

> [!example]- Soluzione
> *Tipo*: non esistenza del limite, con un coseno. *Come lo riconosco*: l'angolo avanza di $\frac{2\pi}{3}$ a ogni passo, cioè di un terzo di giro, quindi i valori si ripetono ogni $3$ termini. *Metodo*: non pari e dispari, ma i resti nella divisione per $3$.
>
> 1. Primi termini: $a_0 = \cos 0 = 1$, $a_1 = \cos\frac{2\pi}{3} = -\frac12$, $a_2 = \cos\frac{4\pi}{3} = -\frac12$, $a_3 = \cos 2\pi = 1$. Il blocco $1, -\frac12, -\frac12$ si ripete.
> 2. Sottosuccessione $n_k = 3k$: $a_{3k} = \cos(2k\pi) = 1$ (giri completi). Costante, limite $1$.
> 3. Sottosuccessione $n_k = 3k + 1$: $a_{3k+1} = \cos\left(2k\pi + \frac{2\pi}{3}\right) = \cos\frac{2\pi}{3} = -\frac12$ (periodo $2\pi$). Costante, limite $-\frac12$.
> 4. $1 \neq -\frac12$: per il corollario della slide 26, $a_n$ non ammette limite. $\blacksquare$
>
> *Perché pari e dispari qui non bastano*: i pari sono $a_0, a_2, a_4, \dots = 1, -\frac12, -\frac12, 1, \dots$, ancora oscillanti; pari e dispari non "vedono" il periodo $3$. Prima di scegliere gli indici si guarda il periodo.

**Esercizio 10.** Sia $a_n = n^{(-1)^n}$ per $n \geq 1$. Dire se $(a_n)$ è limitata, se ha limite, e se diverge.

> [!example]- Soluzione
> *Tipo*: studio di una successione con $(-1)^n$ all'esponente. *Metodo*: separo pari e dispari, dove l'esponente diventa $1$ o $-1$.
>
> 1. Pari, $n = 2k$: $(-1)^{2k} = 1$, quindi $a_{2k} = 2k$. Tende a $+\infty$: fissato $\varepsilon$, $2k > \varepsilon \iff k > \frac\varepsilon2$.
> 2. Dispari, $n = 2k + 1$: $(-1)^{2k+1} = -1$, quindi $a_{2k+1} = \frac{1}{2k+1}$. Tende a $0$ (come $\frac1n$).
> 3. **Limitata?** No: la sottosuccessione dei pari supera ogni $M$.
> 4. **Ha limite?** No: due sottosuccessioni con limiti diversi ($+\infty$ e $0$), corollario della slide 26, che vale anche con limiti infiniti.
> 5. **Diverge?** No, per il punto 4: divergere vuol dire avere limite $\pm\infty$.
>
> *Verifica*: $a_1, \dots, a_7 = 1, 2, \frac13, 4, \frac15, 6, \frac17$. È la stessa situazione di $n(1 + (-1)^n)$: illimitata e senza limite.

**Esercizio 11** (livello 30, binomio di Newton come stima). Sia $h > 0$.
1. Dimostrare che $(1 + h)^n \geq 1 + nh$ per ogni $n \geq 1$, e che $(1 + h)^n \geq \frac{n(n-1)}{2}h^2$ per ogni $n \geq 2$.
2. Dedurre, con la definizione e senza logaritmi, che $a^n \to +\infty$ per $a > 1$.
3. Dedurre, con la definizione, che $\frac{n}{2^n} \to 0$.

> [!example]- Soluzione
> *Tipo*: disuguaglianza dal binomio di Newton, poi due verifiche. *L'idea*: nello sviluppo di $(1 + h)^n$ tutti gli addendi sono positivi; se se ne tengono solo alcuni, la somma diminuisce. Si ottiene una stima dal basso semplice, che si usa al posto della successione nella definizione.
>
> **1.** Newton con $a = 1$, $b = h$:
> $$
> (1 + h)^n = \sum_{k=0}^{n} \binom nk h^k = 1 + nh + \frac{n(n-1)}{2}h^2 + \dots + h^n
> $$
> - Ogni addendo è $\geq 0$, perché $\binom nk > 0$ e $h > 0$.
> - Tenendo solo i primi due ($k = 0$ e $k = 1$): $(1 + h)^n \geq 1 + nh$.
> - Tenendo solo quello con $k = 2$ (che esiste se $n \geq 2$): $(1 + h)^n \geq \binom n2 h^2 = \frac{n(n-1)}{2}h^2$.
>
> **2.** Pongo $h = a - 1 > 0$, così $a = 1 + h$.
> - Fissato $\varepsilon > 0$, per il punto 1: $a^n \geq 1 + n(a - 1) > n(a - 1)$.
> - $n(a - 1) > \varepsilon \iff n > \frac{\varepsilon}{a - 1}$ (divido per $a - 1 > 0$).
> - Con $\nu_\varepsilon := \frac{\varepsilon}{a - 1}$, per $n > \nu_\varepsilon$: $a^n > n(a-1) > \varepsilon$. $\blacksquare$
>
> **3.** $2^n = (1 + 1)^n$, quindi con $h = 1$ e $n \geq 2$: $2^n \geq \frac{n(n-1)}{2}$.
> - Allora $0 < \frac{n}{2^n} \leq \frac{n}{n(n-1)/2} = \frac{2}{n-1}$ (denominatore più piccolo, frazione più grande; poi semplifico $n$).
> - $\frac{2}{n-1} < \varepsilon \iff n - 1 > \frac2\varepsilon \iff n > 1 + \frac2\varepsilon$.
> - Con $\nu_\varepsilon := 1 + \frac2\varepsilon$ (che è $> 1$, quindi $n > \nu_\varepsilon$ implica $n \geq 2$): $\left|\frac{n}{2^n}\right| \leq \frac{2}{n-1} < \varepsilon$. $\blacksquare$
>
> *Verifica*: punto 2 con $a = 2$, $\varepsilon = 100$: $\nu_\varepsilon = 100$, molto più del necessario ($2^7 > 100$ già), ma corretto. Punto 3: $\frac{9}{2^9} = \frac{9}{512} \approx 0{,}018 \leq \frac{2}{8} = 0{,}25$. Che $\frac{n}{2^n} \to 0$ è un caso della gerarchia degli infiniti ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/)); qui si dimostra con i soli strumenti di questa nota.

**Esercizio 12** (livello 30). Dimostrare: se $a_{2k} \to \ell$ e $a_{2k+1} \to \ell$ per $k \to +\infty$, con $\ell \in \mathbb{R}$, allora $a_n \to \ell$.

> [!example]- Soluzione
> *Tipo*: dimostrazione con la definizione, il "viceversa" del trucco pari/dispari. *L'idea*: ogni $n$ è pari o dispari. Si prende una soglia che funzioni per i pari, una per i dispari, e si traducono entrambe in una soglia su $n$.
>
> 1. Fissiamo $\varepsilon > 0$.
> 2. Da $a_{2k} \to \ell$: esiste $\nu_1$ con $|a_{2k} - \ell| < \varepsilon$ per ogni $k > \nu_1$.
> 3. Da $a_{2k+1} \to \ell$: esiste $\nu_2$ con $|a_{2k+1} - \ell| < \varepsilon$ per ogni $k > \nu_2$.
> 4. Pongo $\nu := \max(2\nu_1,\ 2\nu_2 + 1)$ e prendo $n > \nu$.
> 5. Se $n$ è pari, $n = 2k$ con $2k > 2\nu_1$, cioè $k > \nu_1$: per il passo 2, $|a_n - \ell| < \varepsilon$.
> 6. Se $n$ è dispari, $n = 2k + 1$ con $2k + 1 > 2\nu_2 + 1$, cioè $k > \nu_2$: per il passo 3, $|a_n - \ell| < \varepsilon$.
> 7. In entrambi i casi $|a_n - \ell| < \varepsilon$ per ogni $n > \nu$: $a_n \to \ell$. $\blacksquare$
>
> *Verifica su un caso*: $a_n = 3 + \frac{(-1)^n}{n}$ ($n \geq 1$). Pari: $3 + \frac{1}{2k} \to 3$; dispari: $3 - \frac{1}{2k+1} \to 3$. Quindi $a_n \to 3$, ed è la C6.
>
> *Perché non vale con due sottosuccessioni qualunque*: con $n_k = 2k$ e $n_k = 4k$ restano fuori tutti i dispari, e il passo 6 non si può fare. Il controesempio è $\sin\frac{n\pi}{2}$.

**Esercizio 13.** Calcolare $\displaystyle\sum_{k=0}^{n} \binom nk 2^k$ e verificare il risultato per $n = 3$.

> [!example]- Soluzione
> *Tipo*: somma con binomiali e potenze. *Come lo riconosco*: $\binom nk$ per una potenza con esponente $k$ è la forma del binomio di Newton, con il fattore $a^{n-k}$ "nascosto" perché vale $1$. *Metodo*: riconoscere $a$ e $b$.
>
> 1. Con $a = 1$ e $b = 2$: $\binom nk a^{n-k} b^k = \binom nk 1^{n-k} 2^k = \binom nk 2^k$.
> 2. Per Newton la somma è $(1 + 2)^n = 3^n$.
>
> *Verifica* con $n = 3$: $\binom30 + \binom31 \cdot 2 + \binom32 \cdot 4 + \binom33 \cdot 8 = 1 + 6 + 12 + 8 = 27 = 3^3$.

**Esercizio 14** (livello 30). Dimostrare che se $a_n \to \ell \in \mathbb{R}$ allora $|a_n| \to |\ell|$. Mostrare con un controesempio che il viceversa è falso.

> [!example]- Soluzione
> *Tipo*: dimostrazione con la definizione. *L'idea*: la distanza fra i moduli non supera la distanza fra i numeri, $\big||a| - |b|\big| \leq |a - b|$. Quindi se $a_n$ è vicino a $\ell$, $|a_n|$ è vicino a $|\ell|$ almeno altrettanto.
>
> **La disuguaglianza** (triangolare "rovesciata"; la triangolare è in [Funzioni elementari](/uni/analisi-1/funzioni-elementari/)):
> 1. $|a| = |(a - b) + b| \leq |a - b| + |b|$ (disuguaglianza triangolare), quindi $|a| - |b| \leq |a - b|$.
> 2. Scambiando $a$ e $b$: $|b| - |a| \leq |b - a| = |a - b|$.
> 3. Se un numero $x$ e il suo opposto $-x$ sono entrambi $\leq c$, allora $|x| \leq c$ (il modulo è uno dei due). Con $x = |a| - |b|$ e $c = |a - b|$: $\big||a| - |b|\big| \leq |a - b|$.
>
> **Il limite.**
> 4. Fissiamo $\varepsilon > 0$. Da $a_n \to \ell$: esiste $\nu_\varepsilon$ con $|a_n - \ell| < \varepsilon$ per $n > \nu_\varepsilon$.
> 5. Per gli stessi $n$, con $a = a_n$ e $b = \ell$: $\big||a_n| - |\ell|\big| \leq |a_n - \ell| < \varepsilon$.
> 6. La stessa soglia funziona: $|a_n| \to |\ell|$. $\blacksquare$
>
> **Il viceversa è falso**: $a_n = (-1)^n$ ha $|a_n| = 1 \to 1$, ma non ha limite (6/10). Il modulo "dimentica" il segno, e il segno è proprio quello che oscilla. Vale invece con $\ell = 0$: $a_n \to 0 \iff |a_n| \to 0$ ([Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/)).
>
> *Verifica*: $a_n = -2 + \frac1n \to -2$; $|a_n| = 2 - \frac1n \to 2 = |-2|$.

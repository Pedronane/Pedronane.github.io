---
title: Insiemi e logica (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-14
lezioni: []
ordine: 0
---

Esercizi tipo esame di [Insiemi e logica](/uni/analisi-1/insiemi-e-logica/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

## Crocette (stile parte 1)

**C1** (quiz 3 della slide 22, lasciato a casa, <span class="src">pagina 28</span>). Supponendo vera l'implicazione "se piove allora si deve prendere l'ombrello", cosa deduce un matematico?

- a) se non piove, allora non si deve prendere l'ombrello
- b) se non si deve prendere l'ombrello vuol dire che non piove
- c) che se si prende l'ombrello significa che piove
- d) niente, è troppo perso nel mondo dei numeri...

> [!example]- Soluzione
> **b**, la contronominale: con $P$ = "piove" e $Q$ = "si deve prendere l'ombrello", $P \Rightarrow Q$ equivale a non $Q \Rightarrow$ non $P$. La c) è l'inversa $Q \Rightarrow P$, la a) è la contraria non $P \Rightarrow$ non $Q$: nessuna delle due segue (si può prendere l'ombrello anche per il sole).

**C2** (quiz 4 della slide 22, lasciato a casa, <span class="src">pagina 29</span>). La negazione logica dell'implicazione "se c'è il sole allora faccio una passeggiata" è:

- a) se c'è il sole allora non faccio una passeggiata
- b) c'è il sole e non faccio una passeggiata
- c) se non c'è il sole non faccio una passeggiata
- d) se non faccio una passeggiata allora non c'è il sole

> [!example]- Soluzione
> **b**: $\text{non}(P \Rightarrow Q) \iff P$ e non $Q$. La d) è la contronominale, cioè l'implicazione stessa, non la sua negazione. Neanche la a) va bene: quando non c'è il sole sono vere sia la frase originale sia la a) (premessa falsa), mentre una proposizione e la sua negazione hanno sempre valori opposti.

**C3.** La negazione di $\forall x \in A,\ \exists y \in B : x < y$ è:

- a) $\exists x \in A : \forall y \in B,\ x \geq y$
- b) $\forall x \in A,\ \exists y \in B : x \geq y$
- c) $\exists x \in A,\ \exists y \in B : x \geq y$
- d) $\forall x \in A,\ \forall y \in B,\ x \geq y$

> [!example]- Soluzione
> **a**. Passo per passo: $\forall x$ diventa $\exists x$ (negazione di $\forall$), $\exists y$ diventa $\forall y$ (negazione di $\exists$), e $x < y$ diventa $x \geq y$. La b) lascia i quantificatori come sono, la c) e la d) ne cambiano uno solo.

**C4** (foglio 0, es. 5, ed esercizi svolti di Pinamonti, es. 4). Siano $A = [-2, 5)$ e $C = \{-1, 2\}$. Quale affermazione è **falsa**?

- a) $\{-1\} \subseteq C$
- b) $A \cap C = C$
- c) $4 \subseteq A$
- d) $(-2, 5) \subseteq A$

> [!example]- Soluzione
> **c**. È scritta male: $4$ è un numero, non un insieme, e le scritture scorrette contano come false. Corrette sono $4 \in A$ oppure $\{4\} \subseteq A$. Le altre sono vere: $-1$ e $2$ stanno in $[-2, 5)$, quindi $A \cap C = C$, e l'intervallo aperto sta dentro quello semiaperto.

**C5.** Sia $A \subseteq \mathbb{R}$ non vuoto. “$A$ **non** è limitato superiormente" si scrive:

- a) $\exists M \in \mathbb{R} : \forall x \in A,\ x > M$
- b) $\forall M \in \mathbb{R},\ \forall x \in A,\ x > M$
- c) $\exists x \in A : \forall M \in \mathbb{R},\ x > M$
- d) $\forall M \in \mathbb{R},\ \exists x \in A : x > M$

> [!example]- Soluzione
> **d**. "Limitato superiormente" è $\exists M \in \mathbb{R} : \forall x \in A,\ x \leq M$ (esiste un maggiorante). Negando: $\exists M$ diventa $\forall M$, $\forall x$ diventa $\exists x$, $x \leq M$ diventa $x > M$. A parole: qualunque tetto $M$ si provi, qualche elemento lo supera. La a) lascia l'$\exists$; la c) scambia l'ordine e chiede un $x$ più grande di **tutti** i reali, compreso $M = x$, impossibile.

**C6.** La condizione (2) del sup è $\forall N < M,\ \exists x \in A : x > N$. La sua negazione è:

- a) $\forall N \geq M,\ \exists x \in A : x \leq N$
- b) $\exists N \geq M : \forall x \in A,\ x \leq N$
- c) $\exists N < M : \forall x \in A,\ x \leq N$
- d) $\exists N < M,\ \exists x \in A : x \leq N$

> [!example]- Soluzione
> **c**. Il $\forall N < M$ è un quantificatore con condizione: diventa $\exists N < M$, e la condizione $N < M$ resta. Poi $\exists x$ diventa $\forall x$ e $x > N$ diventa $x \leq N$. A parole: c'è un maggiorante $N$ più piccolo di $M$, quindi $M$ non è il più piccolo dei maggioranti. La b) nega anche la condizione ($N \geq M$): un maggiorante $\geq M$ c'è sempre se $M$ è maggiorante, e non dice niente.

**C7.** La definizione di $a_n \to \ell$ è $\forall \varepsilon > 0\ \exists \nu \ \forall n > \nu : |a_n - \ell| < \varepsilon$ (vedi [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/)). La negazione, $a_n \not\to \ell$, è:

- a) $\exists \varepsilon > 0\ \forall \nu\ \exists n > \nu : |a_n - \ell| \geq \varepsilon$
- b) $\forall \varepsilon > 0\ \exists \nu\ \forall n > \nu : |a_n - \ell| \geq \varepsilon$
- c) $\exists \varepsilon \leq 0\ \forall \nu\ \exists n > \nu : |a_n - \ell| \geq \varepsilon$
- d) $\exists \varepsilon > 0\ \forall \nu\ \forall n > \nu : |a_n - \ell| \geq \varepsilon$

> [!example]- Soluzione
> **a**. Tre quantificatori, si scambiano tutti e tre, le condizioni $\varepsilon > 0$ e $n > \nu$ restano, e $<$ diventa $\geq$. La b) nega solo il predicato; la c) nega la condizione $\varepsilon > 0$; la d) lascia il terzo $\forall$ e direbbe che la successione resta lontana da $\ell$ da un certo punto in poi, che è più forte di "non converge" (per esempio $(-1)^n$ non tende a $1$, ma torna a $1$ per ogni $n$ pari).

**C8.** Quale proposizione è **vera**? (Nel corso $0 \in \mathbb{N}$.)

- a) $\exists n \in \mathbb{N} : \forall m \in \mathbb{N},\ m < n$
- b) $\forall n \in \mathbb{N},\ \exists m \in \mathbb{N} : m < n$
- c) $\exists x \in \mathbb{R} : \forall y \in \mathbb{R},\ x \leq y$
- d) $\forall x \in \mathbb{R},\ \exists y \in \mathbb{R} : y < x$

> [!example]- Soluzione
> **d**: dato $x$, scelgo $y = x - 1$, e $x - 1 < x$. Le altre sono false, ognuna con un controesempio sulla negazione:
> - a) negazione $\forall n \in \mathbb{N},\ \exists m \in \mathbb{N} : m \geq n$: vera con $m = n$;
> - b) negazione $\exists n \in \mathbb{N} : \forall m \in \mathbb{N},\ m \geq n$: vera con $n = 0$, perché nessun naturale è minore di $0$;
> - c) direbbe che $\mathbb{R}$ ha un minimo. Negazione $\forall x \in \mathbb{R},\ \exists y \in \mathbb{R} : y < x$, che è proprio la d), vera.

**C9.** La contronominale di "se $x > 2$ allora $x^2 > 4$" è:

- a) se $x^2 > 4$ allora $x > 2$
- b) se $x \leq 2$ allora $x^2 \leq 4$
- c) se $x^2 \leq 4$ allora $x \leq 2$
- d) $x > 2$ e $x^2 \leq 4$

> [!example]- Soluzione
> **c**: non $Q \Rightarrow$ non $P$, con non($x^2 > 4$) = $x^2 \leq 4$ e non($x > 2$) = $x \leq 2$. La a) è l'inversa, la b) la contraria (entrambe false, controesempio $x = -3$), la d) è la negazione.

**C10.** Siano $A = \{1, 2, 3, 4\}$ e $B = \{3, 4, 5\}$. L'insieme $(A \setminus B) \cup (B \setminus A)$ è:

- a) $\{3, 4\}$
- b) $\{1, 2, 5\}$
- c) $\{1, 2, 3, 4, 5\}$
- d) $\{1, 2\}$

> [!example]- Soluzione
> **b**. $A \setminus B = \{1, 2\}$ (da $A$ tolgo $3$ e $4$, che stanno in $B$), $B \setminus A = \{5\}$, l'unione è $\{1, 2, 5\}$: gli elementi che stanno in uno solo dei due insiemi. Controllo: è $A \cup B = \{1, 2, 3, 4, 5\}$ meno $A \cap B = \{3, 4\}$. La a) è l'intersezione, la c) l'unione, la d) solo $A \setminus B$.

## Esercizi (stile parte 2)

### Esercizio 1

Tavole di De Morgan, "da completare per esercizio" (14/9, <span class="src">pagine 18-19</span>). Verificare con le tavole di verità le due leggi di De Morgan.

> [!example]- Soluzione
> *Tipo*: equivalenza di proposizioni. *Metodo*: tavola con due lettere, quindi $2^2 = 4$ righe, e confronto delle colonne finali.
>
> | $P$ | $Q$ | $P$ e $Q$ | non($P$ e $Q$) | non $P$ | non $Q$ | (non $P$) o (non $Q$) |
> | --- | --- | --- | --- | --- | --- | --- |
> | V | V | V | **F** | F | F | **F** |
> | V | F | F | **V** | F | V | **V** |
> | F | V | F | **V** | V | F | **V** |
> | F | F | F | **V** | V | V | **V** |
>
> | $P$ | $Q$ | $P$ o $Q$ | non($P$ o $Q$) | non $P$ | non $Q$ | (non $P$) e (non $Q$) |
> | --- | --- | --- | --- | --- | --- | --- |
> | V | V | V | **F** | F | F | **F** |
> | V | F | V | **F** | F | V | **F** |
> | F | V | V | **F** | V | F | **F** |
> | F | F | F | **V** | V | V | **V** |
>
> In entrambe le tavole le colonne in grassetto coincidono riga per riga: le proposizioni sono equivalenti. *Controllo*: la prima legge è falsa in una sola riga (tutte e due vere), come ogni "o"; la seconda è vera in una sola riga (tutte e due false), come ogni "e".

### Esercizio 2

Tavola della contronominale, "completare" (14/9, <span class="src">pagina 21</span>). Verificare che $P \Rightarrow Q$ e $\text{non } Q \Rightarrow \text{non } P$ sono equivalenti.

> [!example]- Soluzione
> | $P$ | $Q$ | $P \Rightarrow Q$ | non $Q$ | non $P$ | non $Q \Rightarrow$ non $P$ |
> | --- | --- | --- | --- | --- | --- |
> | V | V | **V** | F | F | **V** |
> | V | F | **F** | V | F | **F** |
> | F | V | **V** | F | V | **V** |
> | F | F | **V** | V | V | **V** |
>
> La contronominale è falsa solo nella seconda riga, dove non $Q$ è vera e non $P$ è falsa: è la stessa riga in cui è falsa $P \Rightarrow Q$. Colonne uguali, proposizioni equivalenti. Per confronto, l'inversa $Q \Rightarrow P$ ha colonna V, V, F, V: è falsa nella terza riga e non nella seconda, quindi non è equivalente.

### Esercizio 3

Foglio 0, es. 1. Siano $A$ e $B$ proposizioni. Provare che sono **tautologie**:

- a) $\big[\text{non } B \text{ e } (A \Rightarrow B)\big] \Rightarrow \text{non } A$ (il *modus tollens*)
- b) $\text{non}\,[A \text{ e non } A]$

> [!example]- Soluzione
> *Tipo*: tautologia. *Metodo*: tavola di verità, la colonna finale deve essere tutta V.
>
> **a)** Chiamo $H$ = "non $B$ e $(A \Rightarrow B)$".
>
> | $A$ | $B$ | $A \Rightarrow B$ | non $B$ | $H$ | non $A$ | $H \Rightarrow$ non $A$ |
> | --- | --- | --- | --- | --- | --- | --- |
> | V | V | V | F | F | F | **V** |
> | V | F | F | V | F | F | **V** |
> | F | V | V | F | F | V | **V** |
> | F | F | V | V | V | V | **V** |
>
> L'ultima colonna è tutta V. Le prime tre righe hanno $H$ falsa, quindi l'implicazione è vera per premessa falsa; nell'unica riga in cui $H$ è vera, l'ultima, anche non $A$ è vera. È il ragionamento della contronominale: se $A \Rightarrow B$ e $B$ è falsa, $A$ non può essere vera.
>
> **b)** Una lettera sola, quindi $2^1 = 2$ righe.
>
> | $A$ | non $A$ | $A$ e non $A$ | non[$A$ e non $A$] |
> | --- | --- | --- | --- |
> | V | F | F | **V** |
> | F | V | F | **V** |
>
> “$A$ e non $A$" è sempre falsa, perché $A$ e non $A$ non sono mai vere insieme; la sua negazione è sempre vera. *Controllo* con De Morgan: non[$A$ e non $A$] $\iff$ (non $A$) o (non non $A$) $\iff$ (non $A$) o $A$, e una delle due è sempre vera.

### Esercizio 4

Foglio 0, es. 2. Scrivere in matematichese le proposizioni, poi la negazione (con il "non" il più internamente possibile) e la negazione in italiano corrente:

- a) "Il corso di Analisi Matematica 1 viene svolto al primo anno del CdL in Informatica e la frequenza del corso è fortemente consigliata."
- b) "Se la studentessa Anna Bianchi studia con grande impegno, supera l'esame di Analisi Matematica 1."
- c) "Durante il primo semestre tutti gli studenti del CdL in Informatica frequentano almeno un corso previsto dal Manifesto degli Studi."
- d) "C'è almeno un corso del CdL in Informatica frequentato da tutti gli studenti."

> [!example]- Soluzione
> *Tipo*: tradurre e negare. *Metodo*: si riconosce il connettivo o i quantificatori, si nega con la regola giusta, si ritraduce.
>
> **a)** $P$ = "AM1 si svolge al primo anno", $Q$ = "la frequenza è fortemente consigliata". La frase è “$P$ e $Q$".
> 1. non($P$ e $Q$) $\iff$ (non $P$) o (non $Q$) per la I legge di De Morgan.
> 2. In italiano: "il corso di Analisi Matematica 1 non viene svolto al primo anno del CdL in Informatica **o** la frequenza del corso non è fortemente consigliata".
>
> **b)** $P$ = "Anna studia con grande impegno", $Q$ = "Anna supera l'esame". La frase è $P \Rightarrow Q$.
> 1. non($P \Rightarrow Q$) $\iff$ $P$ e non $Q$ (negazione dell'implicazione).
> 2. In italiano: "Anna Bianchi studia con grande impegno **e** non supera l'esame di Analisi Matematica 1".
>
> **c)** $S$ = studenti del CdL, $C$ = corsi del Manifesto, $F(s, c)$ = "nel primo semestre $s$ frequenta $c$". La frase è $\forall s \in S,\ \exists c \in C : F(s, c)$.
> 1. $\text{non}(\forall s \in S, \exists c \in C : F(s,c)) \iff \exists s \in S : \text{non}(\exists c \in C : F(s,c))$ (negazione di $\forall$).
> 2. $\iff \exists s \in S : \forall c \in C,\ \text{non } F(s, c)$ (negazione di $\exists$).
> 3. In italiano: "c'è uno studente del CdL in Informatica che durante il primo semestre non frequenta nessun corso del Manifesto".
>
> **d)** Stessi insiemi, $F(s, c)$ = “$s$ frequenta $c$". La frase è $\exists c \in C : \forall s \in S,\ F(s, c)$.
> 1. $\iff \forall c \in C,\ \text{non}(\forall s \in S, F(s,c))$ (negazione di $\exists$).
> 2. $\iff \forall c \in C,\ \exists s \in S : \text{non } F(s, c)$ (negazione di $\forall$).
> 3. In italiano: "ogni corso del CdL in Informatica ha almeno uno studente che non lo frequenta".
>
> *Controllo*: c) e d) hanno gli stessi ingredienti in ordine opposto, come le riviste dell'[Esercizio 5](#esercizio-5); le negazioni infatti sono diverse.

### Esercizio 5

Foglio 0, es. 3 (il punto ii è anche l'es. 1 degli esercizi svolti di Pinamonti). Interpretare in italiano corrente:

- i) $Q(x)$ = "nel 2014 il corso $x$ del CdL in Informatica è stato frequentato da 250 studenti": “$\exists x : Q(x)$", “$\forall x, Q(x)$", “$Q(\text{Analisi Matematica 1})$".
- ii) $P(x, y)$ = "la rivista scientifica $y$ si trova nella biblioteca del dipartimento $x$ dell'Università di Trento": “$\exists y : \forall x, P(x, y)$", “$\forall x, \exists y : P(x, y)$", “$\exists y : P(\text{Matematica}, y)$". Dire se i primi due sono equivalenti.
- iii) $A(x, y, z)$ = "la palestra $x$ nella città italiana $y$ è chiusa il giorno $z$": “$\exists y : \forall x, \exists z : \text{non } A(x, y, z)$", “$\exists z : \forall x, y,\ A(x, y, z)$", “$\forall y, \exists x : A(x, y, \text{lunedì})$".

> [!example]- Soluzione
> *Metodo* (quello di Pinamonti): prima si legge l'enunciato così com'è scritto, quantificatore per quantificatore, poi lo si riscrive in italiano corrente.
>
> **i)**
> - $\exists x : Q(x)$: "esiste un corso $x$ che nel 2014 è stato frequentato da 250 studenti", cioè almeno un corso ha avuto 250 frequentanti;
> - $\forall x, Q(x)$: tutti i corsi del CdL nel 2014 hanno avuto 250 frequentanti;
> - $Q(\text{Analisi Matematica 1})$: nessun quantificatore, la variabile è sostituita da un valore: "nel 2014 il corso di Analisi Matematica 1 è stato frequentato da 250 studenti".
>
> **ii)**
> - $\exists y : \forall x, P(x, y)$: "esiste una rivista $y$ tale che, per ogni dipartimento $x$, $y$ si trova nella biblioteca di $x$", cioè esiste una rivista che si trova nella biblioteca di **ogni** dipartimento. La stessa rivista, per tutti;
> - $\forall x, \exists y : P(x, y)$: nella biblioteca di ogni dipartimento c'è **almeno una** rivista, che può cambiare da dipartimento a dipartimento;
> - $\exists y : P(\text{Matematica}, y)$: nella biblioteca del dipartimento di Matematica c'è almeno una rivista.
>
> I primi due non sono equivalenti (è la figura di [Quantificatori](/uni/analisi-1/insiemi-e-logica/#quantificatori)). La prima implica la seconda: se una rivista sta ovunque, ogni biblioteca ne ha almeno una. Il viceversa no: se Matematica ha solo la rivista $a$ e Fisica solo la $b$, la seconda è vera e la prima falsa. In generale “$\exists y : \forall x$" dice che $y$ è lo stesso per tutti gli $x$, “$\forall x, \exists y$" dice che $y$ può dipendere da $x$.
>
> **iii)**
> - $\exists y : \forall x, \exists z : \text{non } A(x, y, z)$: c'è una città italiana in cui ogni palestra è aperta in almeno un giorno (il giorno può cambiare da palestra a palestra);
> - $\exists z : \forall x, y,\ A(x, y, z)$: c'è un giorno in cui tutte le palestre di tutte le città italiane sono chiuse;
> - $\forall y, \exists x : A(x, y, \text{lunedì})$: in ogni città italiana c'è almeno una palestra chiusa il lunedì.

### Esercizio 6

Foglio 0, es. 4. Dire quali proposizioni sono vere e quali false, motivando (per esempio mostrando che la negazione è vera):

- a) $\forall x \in \mathbb{Z},\ \exists y \in \mathbb{N} : x - y \leq 0$
- b) $\forall x \in \mathbb{N},\ \exists y \in \mathbb{Z} : 4x + 2y = 0$
- c) $\forall x \in \mathbb{N},\ \exists y \in \mathbb{Z} : 2x - 4y = 0$
- d) $\forall x, y \in \mathbb{R},\ \big[(x \neq y) \Rightarrow (x^2 \neq y^2)\big]$
- e) $\exists x \in \mathbb{Q} : \forall y \in \mathbb{R},\ (2x + 1)y = 0$
- f) $\forall x \in \mathbb{Z},\ \exists y \in \mathbb{N} : (y + 1)x \geq 0$

> [!example]- Soluzione
> *Tipo*: vero o falso con quantificatori. *Metodo*: per i $\forall\exists$ si cerca $y$ in funzione di $x$; se non si trova, si scrive la negazione e si cerca il controesempio.
>
> **a) Vera.** Dato $x \in \mathbb{Z}$, prendo $y = |x| \in \mathbb{N}$: allora $x - |x| \leq 0$ perché $x \leq |x|$ sempre. La $y$ dipende da $x$, e va bene perché l'$\exists$ viene dopo il $\forall$. *Controllo*: $x = -5$, $y = 5$, $-5 - 5 = -10 \leq 0$.
>
> **b) Vera.** $4x + 2y = 0 \iff 2y = -4x \iff y = -2x$. Dato $x \in \mathbb{N}$, $y = -2x$ è un intero (negativo o nullo), quindi sta in $\mathbb{Z}$. *Controllo*: $x = 3$, $y = -6$, $12 - 12 = 0$.
>
> **c) Falsa.** $2x - 4y = 0 \iff y = \frac{x}{2}$, che è intero solo per $x$ pari.
> 1. Negazione: $\exists x \in \mathbb{N} : \forall y \in \mathbb{Z},\ 2x - 4y \neq 0$.
> 2. Con $x = 1$: $2 - 4y = 0$ richiede $y = \frac12 \notin \mathbb{Z}$, quindi per ogni intero $y$ vale $2 - 4y \neq 0$.
> 3. La negazione è vera, la proposizione è falsa.
>
> **d) Falsa.**
> 1. Negazione: $\exists x, y \in \mathbb{R} : \text{non}\big[(x \neq y) \Rightarrow (x^2 \neq y^2)\big]$ (negazione di $\forall$).
> 2. $\iff \exists x, y \in \mathbb{R} : x \neq y \text{ e } x^2 = y^2$ (negazione dell'implicazione).
> 3. Con $x = 1$, $y = -1$: $1 \neq -1$ e $1 = 1$. La negazione è vera.
>
> **e) Vera.** Con $x = -\frac12 \in \mathbb{Q}$ si ha $2x + 1 = 0$, quindi $(2x+1)y = 0 \cdot y = 0$ per ogni $y$. Qui la stessa $x$ deve funzionare per tutte le $y$, perché l'$\exists$ viene prima.
>
> **f) Falsa.** Se $x < 0$, siccome $y + 1 \geq 1 > 0$ il prodotto $(y+1)x$ è negativo per ogni $y \in \mathbb{N}$.
> 1. Negazione: $\exists x \in \mathbb{Z} : \forall y \in \mathbb{N},\ (y+1)x < 0$.
> 2. Con $x = -1$: $(y + 1)(-1) = -(y+1) \leq -1 < 0$ per ogni $y \in \mathbb{N}$.
> 3. La negazione è vera.

### Esercizio 7

Esercizi svolti di Pinamonti, es. 2. Scrivere in forma affermativa la negazione di:

- a) $P$ = "ogni numero reale è positivo"
- b) $Q$ = "esiste almeno uno studente che non ha superato Analisi Matematica 1"
- c) (difficile) $R$ = "ogni squadra di calcio di serie A possiede un giocatore che ha segnato almeno un gol in ciascuna delle prime 3 partite di campionato"

> [!example]- Soluzione
> *Metodo*: si scrive la frase con i quantificatori e si fa avanzare il "non" verso l'interno, un quantificatore alla volta.
>
> **a)**
> 1. In simboli: $P$ = “$\forall x \in \mathbb{R}$, $x$ è positivo".
> 2. non $P \iff \exists x \in \mathbb{R} : x$ non è positivo (negazione di $\forall$).
> 3. In italiano: "esiste un numero reale che non è positivo". Vera, con $x = -1$.
>
> **b)** $Q = \exists s \in S : s$ non ha superato AM1, con $S$ = studenti. Per la negazione di $\exists$ e "non non" = "sì": non $Q$ = "ogni studente ha superato Analisi Matematica 1".
>
> **c)** Insiemi: $S$ = squadre di serie A, $T$ = prime tre partite, $G$ = gol. I giocatori di una squadra $s$ si scrivono "giocatore $\in s$".
> $$
> R = \forall s \in S\ \ \exists \text{ giocatore} \in s : \forall p \in T\ \ \exists g \in G : \text{il giocatore ha segnato } g \text{ in } p
> $$
> Negazione, un passo per riga:
> 1. $\text{non } R \iff \exists s \in S : \text{non}\big(\exists \text{ giocatore} \in s : \forall p \in T\ \exists g \in G : \dots\big)$ (negazione di $\forall s$)
> 2. $\iff \exists s \in S : \forall \text{ giocatore} \in s,\ \text{non}\big(\forall p \in T\ \exists g \in G : \dots\big)$ (negazione di $\exists$ giocatore)
> 3. $\iff \exists s \in S : \forall \text{ giocatore} \in s\ \ \exists p \in T : \text{non}\big(\exists g \in G : \dots\big)$ (negazione di $\forall p$)
> 4. $\iff \exists s \in S : \forall \text{ giocatore} \in s\ \ \exists p \in T : \forall g \in G,\ \text{il giocatore non ha segnato } g \text{ in } p$ (negazione di $\exists g$)
>
> In italiano corrente: "esiste una squadra di serie A tale che ogni suo giocatore non ha segnato alcun gol in almeno una delle prime 3 partite di campionato". *Controllo*: quattro quantificatori, quattro scambi, ordine invariato.

### Esercizio 8

Esercizi svolti di Pinamonti, es. 3. Sia $A \subseteq \mathbb{R}$. Dire se sono vere qualunque sia $A$, e scriverne la negazione:

- a) $\exists y \in \mathbb{R} : \forall x \in A,\ x \leq y$
- b) $\forall x \in A,\ \exists y \in A : x < y$
- c) $\exists y, z \in \mathbb{R} : \forall x \in A,\ y < x < z$

> [!example]- Soluzione
> *Tipo*: "sempre vera?". Per dire di no basta un insieme $A$ che la rende falsa.
>
> **a)** Dice che $A$ ha un maggiorante, cioè è limitato superiormente. Non è sempre vera: $A = \mathbb{R}$ è un controesempio. Negazione: $\forall y \in \mathbb{R},\ \exists x \in A : x > y$, cioè $A$ non è limitato superiormente ($\sup A = +\infty$, vedi [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/)).
>
> **b)** Dice che ogni elemento di $A$ è superato da un altro elemento di $A$, quindi $A$ non ha massimo. Non è sempre vera: $A = \{7\}$ è un controesempio (l'unico elemento non è superato da nessuno). Negazione: $\exists x \in A : \forall y \in A,\ x \geq y$, cioè esiste $\max A$.
>
> **c)** Dice che $A$ è limitato, sia superiormente sia inferiormente. Di nuovo $A = \mathbb{R}$ è un controesempio. Negazione, passo per passo:
> 1. $\forall y, z \in \mathbb{R},\ \text{non}(\forall x \in A,\ y < x < z)$ (negazione di $\exists y, z$)
> 2. $\forall y, z \in \mathbb{R}\ \ \exists x \in A : \text{non}(y < x \text{ e } x < z)$ (negazione di $\forall x$; la doppia disuguaglianza è un "e")
> 3. $\forall y, z \in \mathbb{R}\ \ \exists x \in A : x \leq y \text{ o } x \geq z$ (I legge di De Morgan)
>
> A parole: comunque si scelga una fascia $(y, z)$, qualche elemento di $A$ ne esce, da sotto o da sopra.

### Esercizio 9

Foglio 0, es. 5 (esercizi svolti di Pinamonti, es. 4). Siano $A = [-2, 5)$, $B = (-\infty, -1) \cup (2, +\infty)$, $C = \{-1, 2\}$.

- a) Rappresentare graficamente $A$, $B$, $C$ sulla retta reale.
- b) Dire quali affermazioni sono vere e quali false (scritture scorrette sono false): $-1 \in B$; $\{-1\} \subseteq C$; $A \cap C = C$; $4 \subset A$; $(2, 5) \subset A$; $C \subseteq \mathbb{R} \setminus B$; $C \setminus A \neq \emptyset$.

> [!example]- Soluzione
> **a)**
>
> <figure class="fig"><svg role="img" aria-label="Insiemi A B C sulla retta" xmlns:xlink="http://www.w3.org/1999/xlink" width="569.52pt" height="200.016pt" viewBox="0 0 569.52 200.016" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f3f72cc-figure_1"> <g id="f3f72cc-patch_1"> <path d="M 0 200.016 L 569.52 200.016 L 569.52 0 L 0 0 L 0 200.016 z " style="fill: none"/> </g> <g id="f3f72cc-axes_1"> <g id="f3f72cc-line2d_1"> <path d="M 40.364651 46.152 L 550.783256 46.152 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_2"> <defs> <path id="f3f72cc-mcf96a6530c" d="M 3.5 0 L -3.5 -3.5 L -3.5 3.5 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-mcf96a6530c" x="550.783256" y="46.152" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f3f72cc-line2d_3"> <path d="M 148.504186 49.92192 L 148.504186 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_4"> <path d="M 191.76 49.92192 L 191.76 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_5"> <path d="M 321.527442 49.92192 L 321.527442 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_6"> <path d="M 451.294884 49.92192 L 451.294884 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_7"> <path d="M 40.364651 100.008 L 550.783256 100.008 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_8"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-mcf96a6530c" x="550.783256" y="100.008" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f3f72cc-line2d_9"> <path d="M 148.504186 103.77792 L 148.504186 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_10"> <path d="M 191.76 103.77792 L 191.76 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_11"> <path d="M 321.527442 103.77792 L 321.527442 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_12"> <path d="M 451.294884 103.77792 L 451.294884 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_13"> <path d="M 40.364651 153.864 L 550.783256 153.864 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_14"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-mcf96a6530c" x="550.783256" y="153.864" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f3f72cc-line2d_15"> <path d="M 148.504186 157.63392 L 148.504186 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_16"> <path d="M 191.76 157.63392 L 191.76 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_17"> <path d="M 321.527442 157.63392 L 321.527442 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_18"> <path d="M 451.294884 157.63392 L 451.294884 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_19"> <path d="M 148.504186 46.152 L 451.294884 46.152 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-accent); stroke-width: 6"/> </g> <g id="f3f72cc-line2d_20"> <defs> <path id="f3f72cc-m732adf0bb3" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m732adf0bb3" x="148.504186" y="46.152" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f3f72cc-line2d_21"> <defs> <path id="f3f72cc-m388347d398" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-accent); stroke-width: 2.5"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m388347d398" x="451.294884" y="46.152" style="fill: var(--fig-paper); stroke: var(--fig-accent); stroke-width: 2.5"/> </g> </g> <g id="f3f72cc-line2d_22"> <path d="M 44.690233 100.008 L 191.76 100.008 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-steel); stroke-width: 6"/> </g> <g id="f3f72cc-line2d_23"> <path d="M 321.527442 100.008 L 546.457674 100.008 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-steel); stroke-width: 6"/> </g> <g id="f3f72cc-line2d_24"> <defs> <path id="f3f72cc-m2a919c7889" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-steel); stroke-width: 2.5"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m2a919c7889" x="191.76" y="100.008" style="fill: var(--fig-paper); stroke: var(--fig-steel); stroke-width: 2.5"/> </g> </g> <g id="f3f72cc-line2d_25"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m2a919c7889" x="321.527442" y="100.008" style="fill: var(--fig-paper); stroke: var(--fig-steel); stroke-width: 2.5"/> </g> </g> <g id="f3f72cc-line2d_26"> <defs> <path id="f3f72cc-m9fec0c8a5a" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m9fec0c8a5a" x="191.76" y="153.864" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f3f72cc-line2d_27"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m9fec0c8a5a" x="321.527442" y="153.864" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f3f72cc-text_1"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(12.112326 50.048484) scale(0.15 -0.15)"> <defs> <path id="f3f72cc-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="f3f72cc-text_2"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(11.962326 103.904484) scale(0.15 -0.15)"> <defs> <path id="f3f72cc-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="f3f72cc-text_3"> <!-- $C$ --> <g style="fill: var(--fig-ink)" transform="translate(11.512326 157.760484) scale(0.15 -0.15)"> <defs> <path id="f3f72cc-DejaVuSerif-Italic-26" d="M 4300 1234 Q 3966 581 3414 245 Q 2863 -91 2119 -91 Q 1663 -91 1303 65 Q 944 222 700 525 Q 419 875 334 1320 Q 250 1766 359 2328 Q 572 3416 1330 4083 Q 2088 4750 3116 4750 Q 3497 4750 3908 4650 Q 4319 4550 4775 4347 L 4569 3272 L 4216 3272 Q 4213 3859 3919 4137 Q 3625 4416 2997 4416 Q 2250 4416 1762 3886 Q 1275 3356 1075 2328 Q 875 1303 1156 773 Q 1438 244 2184 244 Q 2706 244 3092 492 Q 3478 741 3725 1234 L 4300 1234 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-26" transform="translate(0 0.78125)"/> </g> </g> <g id="f3f72cc-text_4"> <!-- $-2$ --> <g style="fill: var(--fig-ink)" transform="translate(139.624186 35.3808) scale(0.12 -0.12)"> <defs> <path id="f3f72cc-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f3f72cc-text_5"> <!-- $5$ --> <g style="fill: var(--fig-ink)" transform="translate(447.454884 35.3808) scale(0.12 -0.12)"> <defs> <path id="f3f72cc-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-18" transform="translate(0 0.09375)"/> </g> </g> <g id="f3f72cc-text_6"> <!-- $-1$ --> <g style="fill: var(--fig-ink)" transform="translate(182.88 89.2368) scale(0.12 -0.12)"> <defs> <path id="f3f72cc-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f3f72cc-text_7"> <!-- $2$ --> <g style="fill: var(--fig-ink)" transform="translate(317.687442 89.2368) scale(0.12 -0.12)"> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f3f72cc-text_8"> <!-- $-1$ --> <g style="fill: var(--fig-ink)" transform="translate(182.88 143.0928) scale(0.12 -0.12)"> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f3f72cc-text_9"> <!-- $2$ --> <g style="fill: var(--fig-ink)" transform="translate(317.687442 143.0928) scale(0.12 -0.12)"> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f3f72cc-text_10"> <!-- $A = [-2, 5)$ --> <g style="fill: var(--fig-accent)" transform="translate(265.189535 21.9168) scale(0.13 -0.13)"> <defs> <path id="f3f72cc-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-24" transform="translate(0 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-20" transform="translate(91.181641 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3e" transform="translate(193.935547 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(232.949219 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(316.738281 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(380.361328 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-18" transform="translate(431.113281 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(494.736328 0.015625)"/> </g> </g> <g id="f3f72cc-text_11"> <!-- $B = (-\infty, -1) \cup (2, +\infty)$ --> <g style="fill: var(--fig-steel)" transform="translate(369.229302 78.4656) scale(0.13 -0.13)"> <defs> <path id="f3f72cc-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-8da" d="M 2859 1747 Q 3016 1469 3223 1330 Q 3431 1191 3694 1191 Q 4009 1191 4209 1402 Q 4409 1613 4409 1941 Q 4409 2256 4225 2465 Q 4041 2675 3763 2675 Q 3509 2675 3304 2467 Q 3100 2259 2859 1747 z M 2478 2081 Q 2325 2356 2117 2493 Q 1909 2631 1644 2631 Q 1328 2631 1128 2423 Q 928 2216 928 1888 Q 928 1572 1112 1362 Q 1297 1153 1575 1153 Q 1828 1153 2033 1359 Q 2238 1566 2478 2081 z M 2700 1509 Q 2478 1084 2236 887 Q 1994 691 1697 691 Q 1275 691 983 1041 Q 691 1391 691 1906 Q 691 2453 952 2790 Q 1213 3128 1631 3128 Q 1928 3128 2162 2936 Q 2397 2744 2631 2303 Q 2844 2734 3091 2939 Q 3338 3144 3641 3144 Q 4056 3144 4351 2791 Q 4647 2438 4647 1919 Q 4647 1375 4386 1039 Q 4125 703 3706 703 Q 3409 703 3179 886 Q 2950 1069 2700 1509 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-8e4" d="M 4188 1928 L 4188 3934 L 4688 3934 L 4688 1928 Q 4688 1384 4419 921 Q 4150 459 3687 190 Q 3225 -78 2681 -78 Q 2138 -78 1675 190 Q 1213 459 944 921 Q 675 1384 675 1928 L 675 3934 L 1175 3934 L 1175 1928 Q 1175 1522 1378 1175 Q 1581 828 1928 625 Q 2275 422 2681 422 Q 3088 422 3434 625 Q 3781 828 3984 1175 Q 4188 1522 4188 1928 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-25" transform="translate(0 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-20" transform="translate(92.451172 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-b" transform="translate(195.205078 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(234.21875 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8da" transform="translate(318.007812 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(401.308594 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(471.025391 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(573.779297 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(637.402344 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8e4" transform="translate(695.380859 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-b" transform="translate(798.134766 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(837.148438 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(900.771484 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-e" transform="translate(970.488281 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8da" transform="translate(1073.242188 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(1156.542969 0.015625)"/> </g> </g> <g id="f3f72cc-text_12"> <!-- $C = \{-1, 2\}$: i punti $-1$ e $2$ mancano a $B$ (pallini vuoti) --> <g style="fill: var(--fig-ink)" transform="translate(105.613721 178.0992) scale(0.11 -0.11)"> <defs> <path id="f3f72cc-DejaVuSerif-5e" d="M 3272 -716 L 3272 -1044 L 3078 -1044 Q 2300 -1044 2036 -812 Q 1772 -581 1772 109 L 1772 916 Q 1772 1384 1603 1565 Q 1434 1747 991 1747 L 800 1747 L 800 2075 L 991 2075 Q 1434 2075 1603 2256 Q 1772 2438 1772 2906 L 1772 3713 Q 1772 4403 2036 4633 Q 2300 4863 3078 4863 L 3272 4863 L 3272 4538 L 3059 4538 Q 2619 4538 2484 4400 Q 2350 4263 2350 3822 L 2350 2925 Q 2350 2431 2194 2218 Q 2038 2006 1631 1913 Q 2044 1806 2197 1597 Q 2350 1388 2350 897 L 2350 0 Q 2350 -441 2484 -578 Q 2619 -716 3059 -716 L 3272 -716 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-60" d="M 800 -716 L 1019 -716 Q 1456 -716 1589 -580 Q 1722 -444 1722 0 L 1722 897 Q 1722 1388 1875 1597 Q 2028 1806 2438 1913 Q 2031 2006 1876 2218 Q 1722 2431 1722 2925 L 1722 3822 Q 1722 4266 1589 4402 Q 1456 4538 1019 4538 L 800 4538 L 800 4863 L 997 4863 Q 1775 4863 2036 4633 Q 2297 4403 2297 3713 L 2297 2906 Q 2297 2438 2465 2256 Q 2634 2075 3078 2075 L 3272 2075 L 3272 1747 L 3078 1747 Q 2634 1747 2465 1565 Q 2297 1384 2297 916 L 2297 109 Q 2297 -581 2036 -812 Q 1775 -1044 997 -1044 L 800 -1044 L 800 -716 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-26" transform="translate(0 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-20" transform="translate(95.478516 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-5e" transform="translate(198.232422 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(261.855469 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(345.644531 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(409.267578 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(460.019531 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-60" transform="translate(523.642578 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-1d" transform="translate(587.265625 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(620.957031 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(652.744141 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(684.726562 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-53" transform="translate(716.513672 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-58" transform="translate(780.527344 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(844.931641 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-57" transform="translate(909.335938 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(949.521484 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(981.503906 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(1013.291016 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(1097.080078 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1160.703125 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-48" transform="translate(1192.490234 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1251.669922 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(1283.457031 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1347.080078 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-50" transform="translate(1378.867188 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(1473.691406 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(1533.310547 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-46" transform="translate(1597.714844 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(1653.720703 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(1713.339844 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-52" transform="translate(1777.744141 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1837.949219 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(1869.736328 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1929.355469 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-25" transform="translate(1961.142578 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(2034.628906 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-b" transform="translate(2066.416016 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-53" transform="translate(2105.429688 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(2169.443359 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4f" transform="translate(2229.0625 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4f" transform="translate(2261.044922 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(2293.027344 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(2325.009766 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(2389.414062 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(2421.396484 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-59" transform="translate(2453.183594 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-58" transform="translate(2509.677734 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-52" transform="translate(2574.082031 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-57" transform="translate(2634.287109 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(2674.472656 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(2706.455078 0.015625)"/> </g> </g> </g> </g> <defs> <clipPath id="f3f72cc-p8dcfa8f124"> <rect x="5.76" y="5.76" width="558" height="188.496"/> </clipPath> </defs> </svg></figure>
>
> **b)** Una per riga, con il motivo:
> - $-1 \in B$: **falsa**, $B$ contiene solo i numeri **strettamente** minori di $-1$ (o maggiori di $2$);
> - $\{-1\} \subseteq C$: **vera**, l'unico elemento $-1$ sta in $C$;
> - $A \cap C = C$: **vera**, $-1$ e $2$ stanno entrambi in $[-2, 5)$, quindi l'intersezione li tiene tutti e due;
> - $4 \subset A$: **falsa** perché scorretta; corrette sono $4 \in A$ e $\{4\} \subset A$;
> - $(2, 5) \subset A$: **vera**, ogni $x$ con $2 < x < 5$ verifica $-2 \leq x < 5$ (Pinamonti usa $(-2, 5)$, vera per lo stesso motivo);
> - $C \subseteq \mathbb{R} \setminus B$: **vera**. $\mathbb{R} \setminus B$ è quello che $B$ non prende, cioè $[-1, 2]$: gli estremi $-1$ e $2$ ci sono perché $B$ li esclude. $C = \{-1, 2\}$ ci sta dentro;
> - $C \setminus A \neq \emptyset$: **falsa**, $C \setminus A = \emptyset$ perché tutti gli elementi di $C$ stanno in $A$.

### Esercizio 10

Foglio 0, es. 6 (le parti con l'insieme delle parti $\mathcal{P}(A)$ e con il prodotto cartesiano $\times$ non sono state fatte a lezione e restano fuori).

- a) Determinare e rappresentare sulla retta $A = \{x \in \mathbb{R} : -x^2 \geq 3x\}$, $B = \{x \in \mathbb{R} : \frac{1}{x^2} < 1\}$, $C = \{x \in \mathbb{R} : (x^2 - 9)(x^2 + 2) = 0\}$.
- b) Determinare $A \cup B$, $A \cap B$, $B \setminus A$, $\mathbb{R} \setminus B$. $A$ e $B$ sono disgiunti?
- c) $A$ e $B$ sono intervalli?
- d) Vero o falso: $\{-2, 2\} \subseteq B$; $C = [-3, 3]$; $A \cap C = \{-3\}$.

> [!example]- Soluzione
> *Tipo*: insiemi dati con una proprietà. *Metodo*: si risolve la disequazione o l'equazione per passare all'elenco o agli intervalli, poi si disegna e si leggono le operazioni.
>
> **a)**
> - $A$: $-x^2 \geq 3x \iff 0 \geq x^2 + 3x$ (porto tutto a destra) $\iff x(x + 3) \leq 0$ (raccolgo $x$). Il prodotto è $\leq 0$ fra le radici $-3$ e $0$, estremi compresi: $A = [-3, 0]$. *Controllo*: $x = -1$ dà $-1 \geq -3$, vero; $x = 1$ dà $-1 \geq 3$, falso.
> - $B$: serve $x \neq 0$. Per $x \neq 0$ è $x^2 > 0$, e moltiplicando per $x^2$ il verso resta: $\frac{1}{x^2} < 1 \iff 1 < x^2 \iff |x| > 1$. Quindi $B = (-\infty, -1) \cup (1, +\infty)$. *Controllo*: $x = 2$ dà $\frac14 < 1$; $x = \frac12$ dà $4 < 1$, falso.
> - $C$: un prodotto è nullo se e solo se lo è un fattore. $x^2 + 2 \geq 2 > 0$ non si annulla mai, $x^2 - 9 = 0 \iff x = \pm 3$. Quindi $C = \{-3, 3\}$.
>
> **b)**
> - $A \cup B = (-\infty, 0] \cup (1, +\infty)$: $[-3, 0]$ riempie il buco fra $-3$ e $-1$ e aggiunge $[-1, 0]$;
> - $A \cap B = [-3, -1)$: è la parte di $[-3, 0]$ a sinistra di $-1$, con $-1$ escluso perché $-1 \notin B$;
> - $B \setminus A = (-\infty, -3) \cup (1, +\infty)$: da $B$ tolgo $[-3, -1)$;
> - $\mathbb{R} \setminus B = [-1, 1]$.
>
> Non sono disgiunti, perché $A \cap B \neq \emptyset$ (per esempio $-2$ sta in entrambi).
>
> **c)** $A = [-3, 0]$ è un intervallo chiuso. $B$ no: è l'unione di due semirette separate, e contiene $-2$ e $2$ ma non $0$, che sta in mezzo.
>
> **d)**
> - $\{-2, 2\} \subseteq B$: **vera**, $|-2| = |2| = 2 > 1$;
> - $C = [-3, 3]$: **falsa**, $C$ ha due elementi, l'intervallo infiniti (per esempio $0 \in [-3, 3]$ ma $0 \notin C$);
> - $A \cap C = \{-3\}$: **vera**, $-3 \in [-3, 0]$ mentre $3 \notin A$.

### Esercizio 11

Negare le definizioni che servono nel resto del corso, scrivendo ogni passaggio con la regola:

- a) “$A$ è limitato": $\exists m, M \in \mathbb{R} : \forall x \in A,\ m \leq x \leq M$.
- b) “$M = \sup A$": (1) $\forall x \in A,\ x \leq M$ e (2) $\forall N < M,\ \exists x \in A : x > N$.
- c) “$a_n \to \ell$": $\forall \varepsilon > 0\ \ \exists \nu\ \ \forall n > \nu : |a_n - \ell| < \varepsilon$.

> [!example]- Soluzione
> *Tipo*: negazione di una definizione con più quantificatori. *Metodo*: un quantificatore alla volta da sinistra, le condizioni restano, alla fine De Morgan sul predicato.
>
> **a)**
> 1. $\forall m, M \in \mathbb{R},\ \text{non}(\forall x \in A,\ m \leq x \leq M)$ (negazione di $\exists$)
> 2. $\forall m, M \in \mathbb{R}\ \ \exists x \in A : \text{non}(m \leq x \text{ e } x \leq M)$ (negazione di $\forall$)
> 3. $\forall m, M \in \mathbb{R}\ \ \exists x \in A : x < m \text{ o } x > M$ (I legge di De Morgan)
>
> Esempio: $A = \mathbb{N}$. Dati $m$ e $M$, per Archimede esiste $x \in \mathbb{N}$ con $x > M$. $\mathbb{N}$ non è limitato (è limitato solo inferiormente).
>
> **b)** La definizione è "(1) e (2)", quindi per la I legge di De Morgan la negazione è "non (1) o non (2)".
> 1. non (1) $\iff \exists x \in A : x > M$ ($M$ non è un maggiorante).
> 2. non (2) $\iff \exists N < M : \text{non}(\exists x \in A : x > N)$ (negazione di $\forall$, la condizione $N < M$ resta).
> 3. $\iff \exists N < M : \forall x \in A,\ x \leq N$ (negazione di $\exists$): c'è un maggiorante più piccolo di $M$.
>
> $M \neq \sup A$ se e solo se $M$ non è maggiorante, oppure c'è un maggiorante più piccolo. Esempio: $A = (0, 1)$, $M = 2$. La (1) vale, ma $N = 1 < 2$ è un maggiorante: vale non (2), quindi $2 \neq \sup A$.
>
> **c)**
> 1. $\exists \varepsilon > 0 : \text{non}(\exists \nu\ \forall n > \nu : |a_n - \ell| < \varepsilon)$ (negazione di $\forall \varepsilon > 0$)
> 2. $\exists \varepsilon > 0\ \ \forall \nu,\ \text{non}(\forall n > \nu : |a_n - \ell| < \varepsilon)$ (negazione di $\exists \nu$)
> 3. $\exists \varepsilon > 0\ \ \forall \nu\ \ \exists n > \nu : |a_n - \ell| \geq \varepsilon$ (negazione di $\forall n > \nu$, e non $<$ è $\geq$)
>
> A parole: c'è una tolleranza $\varepsilon$ che la successione sfora per indici grandi quanto si vuole. Esempio: $a_n = (-1)^n$, $\ell = 1$, $\varepsilon = 1$: dato $\nu$, l'indice dispari $n = 2\nu + 1 > \nu$ dà $|-1 - 1| = 2 \geq 1$. Lo stesso esercizio, lasciato per casa il 7/10, è in [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/).

### Esercizio 12

Livello 30. Dire se sono vere, e giustificare:

- a) $\forall \varepsilon > 0\ \ \exists n \in \mathbb{N} : \frac{1}{n+1} < \varepsilon$
- b) $\exists n \in \mathbb{N} : \forall \varepsilon > 0,\ \frac{1}{n+1} < \varepsilon$
- c) Per $n \in \mathbb{N}$: "se $n^2$ è pari allora $n$ è pari".

> [!example]- Soluzione
> *Tipo*: a) e b) sono la stessa frase con i quantificatori scambiati, e il punto dell'esercizio è proprio l'ordine. c) è un'implicazione in cui la tesi si ricava male dall'ipotesi: si usa la contronominale.
>
> **a) Vera.** Fissato $\varepsilon > 0$ si cerca $n$ (può dipendere da $\varepsilon$).
> 1. $\frac{1}{n+1} < \varepsilon \iff n + 1 > \frac{1}{\varepsilon}$ (entrambi positivi, passo ai reciproci e il verso si inverte).
> 2. Per Archimede $\exists n \in \mathbb{N} : n > \frac1\varepsilon$.
> 3. Per quell'$n$ vale $n + 1 > n > \frac1\varepsilon$, e rileggendo il passo 1 all'indietro $\frac{1}{n+1} < \varepsilon$.
>
> *Controllo*: $\varepsilon = \frac{1}{100}$, va bene $n = 101$: $\frac{1}{102} \approx 0{,}0098 < 0{,}01$.
>
> **b) Falsa.** Qui un solo $n$ dovrebbe funzionare per tutti gli $\varepsilon$.
> 1. Negazione: $\forall n \in \mathbb{N}\ \ \exists \varepsilon > 0 : \frac{1}{n+1} \geq \varepsilon$ (si scambiano i quantificatori, la condizione $\varepsilon > 0$ resta, non $<$ è $\geq$).
> 2. Dato $n$, scelgo $\varepsilon = \frac{1}{n+1}$, che è $> 0$, e $\frac{1}{n+1} \geq \frac{1}{n+1}$ è vero.
> 3. La negazione è vera.
>
> A parole: a) dice che $\frac{1}{n+1}$ diventa piccolo quanto si vuole, b) direbbe che un singolo numero positivo $\frac{1}{n+1}$ è più piccolo di ogni positivo, che è impossibile.
>
> **c) Vera.** Da “$n^2$ pari" non si vede come arrivare a “$n$ pari". Per la contronominale basta dimostrare "se $n$ è dispari allora $n^2$ è dispari".
> 1. $n$ dispari: $n = 2k + 1$ con $k \in \mathbb{N}$.
> 2. $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1$ (quadrato di binomio).
> 3. $= 2(2k^2 + 2k) + 1$ (raccolgo $2$ dai primi due termini): è dispari.
>
> *Controllo*: $n = 7$, $n^2 = 49$ dispari; $k = 3$, $2(18 + 6) + 1 = 49$. È il passaggio che serve per $\sqrt2 \notin \mathbb{Q}$ in [Numeri reali, sup e inf](/uni/analisi-1/numeri-reali-sup-e-inf/).

### Esercizio 13

Livello 30. Dimostrare che per ogni insieme $A$, $B$, $C$:
$$
A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)
$$
e controllare con $A = \{1, 2, 3, 4, 5, 6\}$, $B = \{1, 2\}$, $C = \{2, 3\}$.

> [!example]- Soluzione
> *Tipo*: uguaglianza di insiemi. *Metodo*: doppia inclusione; siccome ogni passaggio è un "se e solo se", si scrive una catena di $\iff$ che le fa tutte e due insieme. Per ogni $x$:
> 1. $x \in A \setminus (B \cup C) \iff x \in A \text{ e } x \notin B \cup C$ (definizione di differenza)
> 2. $\iff x \in A \text{ e non}(x \in B \text{ o } x \in C)$ (definizione di unione)
> 3. $\iff x \in A \text{ e } x \notin B \text{ e } x \notin C$ (II legge di De Morgan)
> 4. $\iff (x \in A \text{ e } x \notin B) \text{ e } (x \in A \text{ e } x \notin C)$ (ripeto “$x \in A$", "e" di una cosa con sé stessa non cambia niente)
> 5. $\iff x \in A \setminus B \text{ e } x \in A \setminus C$ (definizione di differenza)
> 6. $\iff x \in (A \setminus B) \cap (A \setminus C)$ (definizione di intersezione)
>
> La lettura da 1 a 6 dà $\subseteq$, da 6 a 1 dà $\supseteq$. $\blacksquare$
>
> *Controllo*: $B \cup C = \{1, 2, 3\}$, quindi $A \setminus (B \cup C) = \{4, 5, 6\}$. Dall'altra parte $A \setminus B = \{3, 4, 5, 6\}$, $A \setminus C = \{1, 4, 5, 6\}$, intersezione $\{4, 5, 6\}$. Uguali. Con la I legge si ottiene allo stesso modo $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$, qui $\{1, 3, 4, 5, 6\}$ da tutte e due le parti.

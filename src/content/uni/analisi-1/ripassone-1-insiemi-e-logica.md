---
title: Ripassone 1 · Insiemi e logica
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: riferimento
stato: completa
data: 2026-11-05
lezioni: []
ordine: 999
---

Parte di [Ripassone finale](/uni/analisi-1/ripassone-finale/). Testi delle slide, annotazioni del prof e provette vere: le righe in corsivo tra parentesi segnalano una fonte corretta o uno svolgimento che non viene dalla fonte.

## Alla lettera dalle slide

> [!abstract] Definizione (Insiemi e linguaggio matematico) · slide 12
> Durante il corso utilizzeremo spesso il concetto di insieme e la relativa notazione. Vediamo alcuni esempi di insiemi:
>
> $A := \{a, c, b, e, f, d\}$; $B := \{\text{studenti del I anno di Ingegneria a Trento}\}$;
>
> $C := \{2, 3, 5, 7, 11, 13, 17\}$; $D := \{2k+1 : k = 0, 1, 2, \dots\}$.
>
> Scriveremo $a \in A$ per dire che $a$ appartiene ad $A$, ovvero è un elemento di $A$, mentre scriveremo ad esempio $\frac{2}{3} \notin D$ per dire che $\frac{2}{3}$ non appartiene a $D$.
>
> Gli insiemi possono essere definiti come elenco (vedi $A$ e $C$) oppure tramite una proprietà caratteristica (vedi $B$ e $D$).
>
> Notare l'uso delle parentesi graffe per indicare un insieme.
>
> Ricordare che non è rilevante l'ordine con cui compaiono gli elementi di un insieme definito come elenco.

> [!abstract] Definizione (Unione, intersezione, differenza insiemistica, insieme vuoto) · slide 13
> Dati due insiemi $A$ e $B$, sono definite tre operazioni fondamentali:
>
> unione $A \cup B := \{x : x \in A \text{ o } x \in B\}$,
>
> intersezione $A \cap B := \{x : x \in A \text{ e } x \in B\}$,
>
> differenza insiemistica $A \setminus B := \{x : x \in A \text{ e } x \notin B\}$.
>
> Affinché le ultime due operazioni siano sempre ben definite, si introduce l'insieme vuoto, indicato con $\emptyset$ (pallina sbarrata, non è il numero zero!!!).
>
> Le operazioni insiemistiche si possono visualizzare con i diagrammi di Venn: $A \cup B$, $A \cap B$, $A \setminus B$.

> [!abstract] Definizione (Sottoinsieme) · slide 14
> Dati $A$, $B$ insiemi, diremo che $A$ è un sottoinsieme di $B$ (oppure che $A$ è contenuto in $B$) se ogni elemento di $A$ è anche elemento di $B$, e scriveremo $A \subseteq B$ (oppure $A \subset B$).
>
> Il simbolo di inclusione ($\subseteq$ oppure $\subset$) non esclude l'uguaglianza $A = B$. Quest'ultima equivale alla validità di entrambe le inclusioni $A \subseteq B$ e $B \subseteq A$.

> [!abstract] Definizione (Inclusione stretta) · slide 14, seconda pagina
> La scrittura $A \subsetneq B$ indica l'inclusione stretta, ovvero $A \subseteq B$ e $A \neq B$.

> [!abstract] Definizione (Proposizione, connettivi, predicato) · slide 15
> Nel presentare gli insiemi con le loro relazioni ed operazioni di base, abbiamo utilizzato particolari proposizioni (ad es. $a \in A$) e operatori logici (le congiunzioni **e**, **o**, la negazione **non** implicitamente presente nel simbolo $\notin$).
>
> La logica matematica considera proposizioni che possono essere o vere (V) o false (F), e si occupa, ad esempio, della formalizzazione del ragionamento con cui si può stabilire il valore (V/F) di una proposizione complessa, costituita da proposizioni elementari e operatori logici.
>
> Ad esempio: $P$ = "3 è un numero pari", $Q$ = "28 è divisibile per 4" sono due proposizioni, la prima è falsa, la seconda è vera. Allora
>
> $P$ e $Q$ = "3 è un numero pari e 28 è divisibile per 4" è falsa,
>
> $P$ o $Q$ = "3 è un numero pari o 28 è divisibile per 4" è vera,
>
> non $P$ = "non (3 è un numero pari)" è vera.
>
> Una proposizione può contenere variabili che possono modificare il valore di verità della proposizione. In tal caso la proposizione si chiama **predicato**. Esempio: $P(x)$ = “$x$ è un numero pari".

> [!abstract] Definizione (Implicazione e doppia implicazione) · slide 16
> Altri connettivi logici sono l'**implicazione** $\Rightarrow$ e la doppia implicazione $\Leftrightarrow$, che mettono in relazione due proposizioni formalizzando, rispettivamente, le costruzioni linguistiche "se $P$ allora $Q$" e “$P$ se e solo se $Q$" (oppure “$P$ equivale a $Q$"). Le tavole di verità sono
>
> | $P$ | $Q$ | $P \Rightarrow Q$ |
> | --- | --- | --- |
> | V | V | V |
> | V | F | F |
> | F | V | V |
> | F | F | V |
>
> | $P$ | $Q$ | $P \Leftrightarrow Q$ |
> | --- | --- | --- |
> | V | V | V |
> | V | F | F |
> | F | V | F |
> | F | F | V |
>
> $P \Rightarrow Q$ risulta falsa esclusivamente quando $P$ ("premessa", "ipotesi", "condizione sufficiente") è vera, mentre $Q$ ("conclusione", "tesi", "condizione necessaria") è falsa. In tutti gli altri casi, l'implicazione si considera vera!
>
> $P \Leftrightarrow Q$ equivale a $(P \Rightarrow Q)$ e $(Q \Rightarrow P)$. Il simbolo $\Leftrightarrow$ è spesso usato per indicare l'equivalenza logica.

> [!abstract] Legge (Leggi di De Morgan) · slide 18
> Se $P$ e $Q$ sono due proposizioni, allora
>
> (I legge) $\text{non}(P \text{ e } Q) \Leftrightarrow (\text{non } P) \text{ o } (\text{non } Q)$
>
> (II legge) $\text{non}(P \text{ o } Q) \Leftrightarrow (\text{non } P) \text{ e } (\text{non } Q)$.

> [!abstract] Proposizione (Forma contronominale di una implicazione) · slide 19
> $P \Rightarrow Q$ equivale a $\text{non } Q \Rightarrow \text{non } P$
>
> Questo fatto è fondamentale e giustifica il ragionamento per assurdo.
>
> Esempio (per convincersi): "se $x$ è uno chef allora $x$ sa preparare una torta" equivale a "se $x$ non sa preparare una torta, allora $x$ non è uno chef".

> [!abstract] Definizione (Quantificatori) · slide 20
> Altri due operatori logici molto importanti sono il quantificatore esistenziale $\exists$ (esiste) e il quantificatore universale $\forall$ (per ogni). I quantificatori specificano la validità di un predicato in relazione ad un insieme:
>
> $\forall x \in A,\ P(x)$ si legge "per ogni $x$ appartenente ad $A$, $P(x)$ (è vera)"
>
> $\exists x \in A :\ P(x)$ si legge "esiste $x$ appartenente ad $A$ tale che $P(x)$ (è vera)".
>
> Ad esempio, la frase "ogni studente dei CdL in Ing. ha superato almeno un esame nell'A.A. 2022-23" può essere (in parte) scritta usando quantificatori, variabili ed insiemi: ponendo $S := \{\text{studenti dei CdL Ing.}\}$ ed $E := \{\text{esami previsti per i CdL Ing.}\}$, si ha
>
> $\forall s \in S\ \ \exists \varepsilon \in E :\ s \text{ ha superato } \varepsilon \text{ nell'A.A. 2020-21}$.
>
> *(la slide scrive 2022-23 nella frase e 2020-21 nella formula)*

> [!abstract] Regola (Negazione di proposizioni con quantificatori) · slide 21
> È fondamentale sapere come scrivere in forma equivalente la negazione di una proposizione contenente quantificatori.
>
> Ad esempio: la negazione di "**ogni** studente **ha superato** l'esame di analisi" equivale a "**esiste almeno uno** studente che **non ha superato** l'esame di analisi".
>
> Analogamente, la negazione di "esiste un numero primo di 4 cifre decimali" equivale a "ogni numero primo non è di 4 cifre decimali"
>
> Le regole generali sono
>
> $\text{non}\,\big(\forall x \in A,\ P(x)\big) \Leftrightarrow \exists x \in A :\ \text{non } P(x)$
>
> e
>
> $\text{non}\,\big(\exists x \in A :\ P(x)\big) \Leftrightarrow \forall x \in A,\ \text{non } P(x)$

## Il prof ha scritto

- slide 12, a mano: «DEFINIZIONE» sul simbolo $:=$, «L'ORDINE NON CONTA» accanto all'elenco, «APPARTIENE» sul simbolo $\in$, «NON APPARTIENE» sul simbolo $\notin$.
- slide 13, a mano: «TALI CHE» sui due punti dentro le graffe, «ALMENO UNA DELLE 2 OPZIONI (NON DISGIUNTIVO)» sull'«o» dell'unione, e sotto la differenza: «$\neq B \setminus A := \{x : x \in B \text{ e } x \notin A\}$». Cerchiati la differenza, la parola «vuoto» e il simbolo $\emptyset$.
- slide 14, a mano: «$A \subseteq B$» e «$\forall a \in A \Rightarrow a \in B$» (nel riquadro).
- slide 14, seconda pagina, a mano: «$(\forall a \in A \Rightarrow a \in B)$ e $(\exists b \in B,\ b \notin A)$».
- slide 16, a mano: «SI PUÒ LEGGERE: ... "IMPLICA" ... / SE... ALLORA ...» sopra $\Rightarrow$; «PREMESSA» sopra $P$ e «CONCLUSIONE» sopra $Q$ nella colonna di $P \Rightarrow Q$; accanto a $\Leftrightarrow$: «SE E SOLO SE», «... E EQUIVALENZA ...».
- pagina a mano dopo la slide 16, tavola di $P \Rightarrow Q$ con $P$ = «OGGI C'È IL SOLE», $Q$ = «OGGI VADO AL PARCO»: «c'è il sole e vado al parco», «c'è il sole e non vado al parco», «non c'è il sole e vado al parco», «non c'è il sole e non vado al parco».
- pagina a mano dopo la slide 16: «Conclusione: siccome le tabelle di verità delle due proposizioni sono diverse, allora le due proposizioni NON sono equivalenti».
- slide 18, a mano: «ma» barrato e sostituito da «e», sia nella frase sia nell'opzione a); l'opzione c) è segnata.
- pagine a mano dopo la slide 18, tavole di verità di $\text{non}(P \text{ e } Q)$ con $(\text{non } P) \text{ o } (\text{non } Q)$ e di $\text{non}(P \text{ o } Q)$ con $(\text{non } P) \text{ e } (\text{non } Q)$: «completare per esercizio».
- pagina a mano dopo la slide 19, tavola di $P \Rightarrow Q$ con $(\text{non } Q) \Rightarrow (\text{non } P)$: «completare».
- slide 21, a mano: frecce che collegano i due quantificatori e i due «non», e accanto alla seconda regola «$\nexists\, x \in A : P(x)$».
- slide 22, quiz 1, a mano: «$A = \{\text{mele}\}$», «$P(x)$ = “$x$ ha almeno 4 semi"», «$\neg\,(\forall x \in A,\ P(x)) \Leftrightarrow \exists x \in A : \neg P(x)$», «"NON"» sotto il simbolo $\neg$; segnata la d).
- slide 22, quiz 2, a mano: «$A$ non è sottoinsieme di $B$» con freccia verso «$A \not\subseteq B$» e accanto «DA NON CONFONDERE CON $\subsetneq$»; «$P(a)$» sotto la graffa; «$\exists a \in A : P(a)$», «NEGAZIONE», «$\forall a \in A\ (\neg P(a))$», «$\exists b \in B : a = b$», «$A \subseteq B$»; segnata la b).
- pagina a mano dopo il quiz 2: «In conclusione la negazione è: $\forall a \in A\ \exists b \in B : a = b$».

## Svolti a lezione

### Tavola di verità dell'implicazione con il sole e il parco (pagina a mano dopo la slide 16)
$P$: oggi c'è il sole. $Q$: oggi vado al parco.

| $P$ | $Q$ | $P \Rightarrow Q$ | |
| --- | --- | --- | --- |
| V | V | V | c'è il sole e vado al parco |
| V | F | F | c'è il sole e non vado al parco |
| F | V | V | non c'è il sole e vado al parco |
| F | F | V | non c'è il sole e non vado al parco |

### Mostrare che $(A \text{ e } B) \Rightarrow C$ non è equivalente a $(\text{non}(A) \text{ o } \text{non}(B)) \Rightarrow \text{non}(C)$ (pagine a mano dopo la slide 16)

| $A$ | $B$ | $C$ | $(A \text{ e } B) \Rightarrow C$ | $(\text{non } A) \text{ o } (\text{non } B)$ | $\text{non } C$ | $(\text{non } A) \text{ o } (\text{non } B) \Rightarrow \text{non } C$ |
| --- | --- | --- | --- | --- | --- | --- |
| V | V | V | V | F | F | V |
| V | V | F | F | F | V | V |
| V | F | V | V | V | F | F |
| V | F | F | V | V | V | V |
| F | V | V | V | V | F | F |
| F | V | F | V | V | V | V |
| F | F | V | V | V | F | F |
| F | F | F | V | V | V | V |

Conclusione del prof: siccome le tabelle di verità delle due proposizioni sono diverse, allora le due proposizioni non sono equivalenti.

### Negazione di una proposizione con due quantificatori, $\exists a \in A : \forall b \in B,\ a \neq b$ (slide 22, quiz 2)
Il prof pone $P(a)$ = “$\forall b \in B,\ a \neq b$", così la frase è $\exists a \in A : P(a)$.

$\text{non}\big(\exists a \in A : P(a)\big) \iff \forall a \in A,\ \text{non } P(a)$

$\text{non } P(a) = \text{non}\big(\forall b \in B,\ a \neq b\big) \iff \exists b \in B : a = b$

In conclusione la negazione è $\forall a \in A\ \exists b \in B : a = b$, cioè $A \subseteq B$ (da non confondere con $\subsetneq$).

### Negazione di una proposizione con un quantificatore, "ogni mela contiene almeno 4 semi" (slide 22, quiz 1)
$A = \{\text{mele}\}$, $P(x)$ = “$x$ ha almeno 4 semi".

$\neg\,\big(\forall x \in A,\ P(x)\big) \iff \exists x \in A : \neg P(x)$

## Crocette delle provette

### 2025, domanda 1

Qual è la negazione della proposizione “Conosco qualcuno che non parla né inglese né francese”?

- a) Non conosco nessuno che parli inglese o francese
- b) Conosco qualcuno che parla sia inglese sia francese
- c) Tutti quelli che conosco parlano inglese o francese
- d) Non conosco nessuno che parli inglese e francese

> [!example]- Soluzione
> **c**. Indichiamo con $I(x)$ la proposizione $I(x)$ = “$x$ parla inglese”, similmente $F(x)$ = “$x$ parla francese” e sia $x$ = “persona che conosco”. La frase che dobbiamo negare è della forma
> $$
> \exists x\ (\neg I(x) \wedge \neg F(x))
> $$
> La negazione sarà
> $$
> \forall x\ \neg(\neg I(x) \wedge \neg F(x)) = \forall x\ (I(x) \vee F(x))
> $$
> ovvero “ogni persona che conosco parla inglese o francese”.

### 2019, compito 1 domanda 2

La negazione della proposizione «la successione $a_n$ diverge a $+\infty$ per $n \to +\infty$» equivale a

- a) $\exists M > 0 : \forall n \in \mathbb{N},\ a_n < M$
- b) $\exists M > 0,\ \exists n \in \mathbb{N} : a_n < M$
- c) $\forall M > 0\ \exists k \in \mathbb{N},\ \exists n_k \ge k : a_{n_k} < M$
- d) $\exists M > 0 : \forall k \in \mathbb{N},\ \exists n_k \ge k : a_{n_k} < M$

> [!example]- Soluzione
> **d**. *(la chiave dà solo la risposta)*

### 2019, compito 2 domanda 3

Dato $A \subset \mathbb{R}$ non vuoto, la proposizione «$f : A \to \mathbb{R}$ **non** è una funzione monotona» equivale a

- a) $\forall x, y, z \in A$ vale $f(x) < f(y)$ e $f(y) > f(z)$
- b) $\forall x, y \in A$ vale $f(x) = f(y)$
- c) $\exists x, y, z \in A$ tali che $x < y < z$, $f(x) < f(y)$ e $f(y) > f(z)$
- d) $\exists x, y, z, t \in A$ tali che $x < y$, $z < t$, $f(x) < f(y)$ e $f(z) > f(t)$

> [!example]- Soluzione
> **d**. *(la chiave dà solo la risposta)*

## Esercizi dei fogli e delle esercitazioni

### Esercizi svolti di logica (Pinamonti, a.a. 2021/22), esercizio 1
Sia $P(x, y)$ il predicato definito da $P(x, y)$ = "la rivista scientifica $y$ si trova nella biblioteca del dipartimento $x$ dell'Università di Trento". Interpretate (usando l'italiano corrente) i seguenti enunciati:
1. $\exists y : \forall x,\ P(x, y)$;
2. $\forall x,\ \exists y : P(x, y)$;
3. $\exists y : P(\text{Matematica}, y)$.

Dire se i primi due enunciati sono equivalenti.

> [!example]- Soluzione
> Leggiamo prima gli enunciati così come sono scritti, e in un secondo passaggio ne interpretiamo il significato riscrivendoli in italiano corrente:
> 1. "Esiste una rivista scientifica $y$ tale che, per ogni dipartimento $x$ dell'Università di Trento, la rivista $y$ si trova nella biblioteca del dipartimento $x$"; cioè, equivalentemente: "Esiste una rivista scientifica che si trova nella biblioteca di ogni dipartimento dell'Università di Trento".
> 2. "Per ogni dipartimento $x$ dell'Università di Trento, esiste una rivista scientifica $y$ tale che $y$ si trova nella biblioteca del dipartimento $x$"; cioè, equivalentemente: "Nella biblioteca di ogni dipartimento dell'Università di Trento si trova almeno una rivista scientifica".
> 3. "Esiste una rivista scientifica $y$ tale che $y$ si trova nella biblioteca del dipartimento di Matematica dell'Università di Trento"; cioè, equivalentemente: "Nella biblioteca del dipartimento di Matematica dell'Università di Trento si trova almeno una rivista scientifica".
>
> Dall'interpretazione è evidente che i primi due enunciati non dicono la stessa cosa: nel primo caso la stessa rivista si trova nella biblioteca di ogni dipartimento; nel secondo caso, la biblioteca di ogni dipartimento contiene almeno una rivista (che può essere diversa da dipartimento a dipartimento). La differenza sta nell'ordine con cui si scrivono i quantificatori $\forall$, $\exists$:
> 1. “$\exists y : \forall x \dots$" significa che "esiste un elemento $y$, lo stesso per tutti gli $x$"
> 2. “$\forall x,\ \exists y : \dots$" significa che "per ogni $x$ esiste $y$ (che dipende da $x$)"

### Esercizi svolti di logica (Pinamonti), esercizio 2
Scrivere (in forma affermativa) la negazione delle seguenti proposizioni:
1. $P$ = "ogni numero reale è positivo";
2. $Q$ = "esiste almeno uno studente che non ha superato Analisi Matematica 1";
3. (difficile) $R$ = "ogni squadra di calcio di serie A possiede un giocatore che ha segnato almeno un gol in ciascuna delle prime 3 partite di campionato".

> [!example]- Soluzione
> Per costruire la negazione, possiamo prima scrivere la proposizione in linguaggio matematico usando i quantificatori, e poi applicare le regole generali viste a lezione. Nei casi più semplici non è necessario e l'applicazione della regola dovrebbe essere quasi "automatica".
>
> 1. Usando i quantificatori, la proposizione diventa $P$ = “$\forall x \in \mathbb{R},\ x$ è positivo". Applico la regola generale:
>
> $\text{non } P \iff \text{non}\,(\forall x \in \mathbb{R},\ x \text{ è positivo}) \iff \exists x \in \mathbb{R} : x \text{ non è positivo}$
>
> Ritorno alla formulazione in italiano: non $P$ = "esiste un numero reale che non è positivo".
>
> 2. non $Q$ = "ogni studente ha superato Analisi Matematica 1".
>
> 3. Questa proposizione presenta l'utilizzo di diversi quantificatori "innestati"; se non si è sicuri, conviene procedere passo-passo applicando la regola generale (facendo "avanzare" la negazione sempre più all'interno): definendo gli insiemi $S := \{\text{squadre di calcio di serie A}\}$, $G := \{\text{gol}\}$, $P := \{\text{prime tre partite di campionato}\}$, si può scrivere la proposizione come
>
> $R$ = “$\forall s \in S\ \ \exists \text{giocatore} \in s : \forall p \in P\ \ \exists g \in G : \text{giocatore ha segnato } g$"
>
> A questo punto, per scrivere la negazione basta applicare ripetutamente la regola generale:
>
> non $R$ = “$\exists s \in S : \text{non } \exists \text{giocatore} \in s : \forall p \in P\ \exists g \in G : \text{giocatore ha segnato } g$"
>
> = “$\exists s \in S : \forall \text{giocatore} \in s,\ \text{non } \forall p \in P\ \exists g \in G : \text{giocatore ha segnato } g$"
>
> = “$\exists s \in S : \forall \text{giocatore} \in s\ \ \exists p \in P : \text{non } \exists g \in G : \text{giocatore ha segnato } g$"
>
> = “$\exists s \in S : \forall \text{giocatore} \in s\ \ \exists p \in P : \forall g \in G,\ \text{non giocatore ha segnato } g$"
>
> = “$\exists s \in S : \forall \text{giocatore} \in s\ \ \exists p \in P : \forall g \in G,\ \text{giocatore non ha segnato } g$".
>
> Recuperiamo il significato riscrivendo quanto ottenuto in italiano corrente: non $R$ = "esiste una squadra di calcio di serie A tale che ogni suo giocatore non ha segnato alcun gol in almeno una delle prime 3 partite di campionato".

### Esercizi svolti di logica (Pinamonti), esercizio 3
Sia $A \subset \mathbb{R}$.
1. Dire se le seguenti proposizioni sono sempre vere (cioè qualunque sia l'insieme $A$):
   - (a) $\exists y \in \mathbb{R} : \forall x \in A,\ x \leq y$;
   - (b) $\forall x \in A,\ \exists y \in A : x < y$;
   - (c) $\exists y, z \in \mathbb{R} : \forall x \in A,\ y < x < z$.
2. Scrivere la negazione delle proposizioni precedenti.

> [!example]- Soluzione
> 1. La proposizione in (a) afferma l'esistenza di un numero reale $y$ più grande di qualsiasi numero $x \in A$. In altri termini, $y$ è un maggiorante per $A$. D'altra parte non tutti i sottoinsiemi $A$ di $\mathbb{R}$ ammettono maggioranti, come ad esempio $A = \mathbb{R}$. Quindi la proposizione non può essere valida per ogni $A \subset \mathbb{R}$, infatti $A = \mathbb{R}$ è uno dei possibili controesempi alla proposizione stessa.
>
> La proposizione in (b) afferma che preso un generico $x \in A$ esiste $y \in A$ (dipendente da $x$) tale che $x < y$. Di conseguenza, non può esistere $\max A$. Ma allora un controesempio alla proposizione è, ad esempio, $A = \{7\}$ (l'insieme che ha $7$ come unico elemento). Quindi la proposizione è in generale falsa.
>
> La proposizione in (c) significa che $A$ è un insieme limitato (sia superiormente che inferiormente). Di nuovo, $A = \mathbb{R}$ è un controesempio, quindi la proposizione è in generale falsa.
>
> 2. La negazione di (a) equivale a: $\forall y \in \mathbb{R}\ \exists x \in A : x > y$, ovvero in simboli $\sup A = +\infty$.
>
> La negazione di (b) equivale a: $\exists x \in A : \forall y \in A,\ x \geq y$, ovvero esiste $\max A$.
>
> La negazione di (c) equivale a: $\forall y, z \in \mathbb{R}\ \exists x \in A : x \geq z \text{ o } x \leq y$.

### Foglio 0 esercizi, esercizio 2
Scrivete in matematichese le seguenti proposizioni. Poi scrivete la negazione di queste (in modo che la negazione compaia il più internamente possibile) e in italiano corrente:
- a) "Il corso di Analisi Matematica 1 viene svolto al primo anno del CdL in Informatica e la frequenza del corso è fortemente consigliata".
- b) "Se la studentessa Anna Bianchi studia con grande impegno, supera l'esame di Analisi Matematica 1".
- c) "Durante il primo semestre tutti gli studenti del CdL in Informatica frequentano almeno un corso previsto dal Manifesto degli Studi".
- d) "C'è almeno un corso del CdL in Informatica frequentato da tutti gli studenti".

> [!example]- Soluzione
> **a)** $P$ = "AM1 si svolge al primo anno", $Q$ = "la frequenza è fortemente consigliata". La frase è “$P$ e $Q$". Per la I legge di De Morgan, $\text{non}(P \text{ e } Q) \iff (\text{non } P) \text{ o } (\text{non } Q)$. In italiano: "il corso di Analisi Matematica 1 non viene svolto al primo anno del CdL in Informatica o la frequenza del corso non è fortemente consigliata".
>
> **b)** $P$ = "Anna studia con grande impegno", $Q$ = "Anna supera l'esame". La frase è $P \Rightarrow Q$ e $\text{non}(P \Rightarrow Q) \iff P \text{ e non } Q$. In italiano: "Anna Bianchi studia con grande impegno e non supera l'esame di Analisi Matematica 1".
>
> **c)** $S$ = studenti del CdL, $C$ = corsi del Manifesto, $F(s, c)$ = "nel primo semestre $s$ frequenta $c$". La frase è $\forall s \in S,\ \exists c \in C : F(s, c)$.
>
> $\text{non}\big(\forall s \in S,\ \exists c \in C : F(s,c)\big) \iff \exists s \in S : \text{non}\big(\exists c \in C : F(s,c)\big) \iff \exists s \in S : \forall c \in C,\ \text{non } F(s, c)$
>
> In italiano: "c'è uno studente del CdL in Informatica che durante il primo semestre non frequenta nessun corso del Manifesto".
>
> **d)** Stessi insiemi, $F(s, c)$ = “$s$ frequenta $c$". La frase è $\exists c \in C : \forall s \in S,\ F(s, c)$.
>
> $\text{non}\big(\exists c \in C : \forall s \in S,\ F(s,c)\big) \iff \forall c \in C,\ \text{non}\big(\forall s \in S,\ F(s,c)\big) \iff \forall c \in C,\ \exists s \in S : \text{non } F(s, c)$
>
> In italiano: "ogni corso del CdL in Informatica ha almeno uno studente che non lo frequenta".
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Foglio 0 esercizi, esercizio 4
Dite quali delle seguenti proposizioni sono vere e quali sono false (motivando la risposta, provando, per esempio, che la negazione è una proposizione vera o falsa):
- a) $\forall x \in \mathbb{Z},\ \exists y \in \mathbb{N} : x - y \leq 0$;
- b) $\forall x \in \mathbb{N},\ \exists y \in \mathbb{Z} : 4x + 2y = 0$;
- c) $\forall x \in \mathbb{N},\ \exists y \in \mathbb{Z} : 2x - 4y = 0$;
- d) $\forall x, y \in \mathbb{R},\ \big[(x \neq y) \Rightarrow (x^2 \neq y^2)\big]$;
- e) $\exists x \in \mathbb{Q} : \forall y \in \mathbb{R},\ (2x + 1)y = 0$;
- f) $\forall x \in \mathbb{Z},\ \exists y \in \mathbb{N} : (y + 1)x \geq 0$.

> [!example]- Soluzione
> **a) Vera.** Dato $x \in \mathbb{Z}$ prendo $y = \vert x\vert + 1 \in \mathbb{N}$: $x - y = x - \vert x\vert - 1 \leq -1 \leq 0$ perché $x \leq \vert x\vert$.
>
> **b) Vera.** $4x + 2y = 0 \iff y = -2x$, che è un intero per ogni $x \in \mathbb{N}$.
>
> **c) Falsa.** $2x - 4y = 0 \iff y = \frac{x}{2}$, intero solo per $x$ pari. Negazione: $\exists x \in \mathbb{N} : \forall y \in \mathbb{Z},\ 2x - 4y \neq 0$. Con $x = 1$: $2 - 4y = 0$ richiede $y = \frac{1}{2} \notin \mathbb{Z}$. La negazione è vera.
>
> **d) Falsa.** Negazione: $\exists x, y \in \mathbb{R} : x \neq y \text{ e } x^2 = y^2$ (negazione di $\forall$ e negazione dell'implicazione). Con $x = 1$, $y = -1$: $1 \neq -1$ e $1 = 1$. La negazione è vera.
>
> **e) Vera.** Con $x = -\frac{1}{2} \in \mathbb{Q}$ si ha $2x + 1 = 0$, quindi $(2x+1)y = 0$ per ogni $y \in \mathbb{R}$.
>
> **f) Falsa.** Negazione: $\exists x \in \mathbb{Z} : \forall y \in \mathbb{N},\ (y+1)x < 0$. Con $x = -1$: $(y+1)(-1) = -(y+1) \leq -1 < 0$ per ogni $y \in \mathbb{N}$. La negazione è vera.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Esercizi svolti di logica (Pinamonti), esercizio 4
Siano dati gli insiemi $A = [-2, 5)$, $B = (-\infty, -1) \cup (2, +\infty)$, $C = \{-1, 2\}$.
1. Rappresentare graficamente gli insiemi $A$, $B$, $C$ sulla retta reale.
2. Dire quali delle seguenti affermazioni sono vere e quali sono false (scritture scorrette sono da considerarsi affermazioni false):

$-1 \in B$; $\{-1\} \subset C$; $A \cap C = C$; $4 \subset A$; $(-2, 5) \subset A$; $C \subset \mathbb{R} \setminus B$; $C \setminus A \neq \emptyset$.

> [!example]- Soluzione
> <figure class="fig"><svg role="img" aria-label="Insiemi A B C sulla retta" xmlns:xlink="http://www.w3.org/1999/xlink" width="569.52pt" height="200.016pt" viewBox="0 0 569.52 200.016" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f3f72cc-figure_1"> <g id="f3f72cc-patch_1"> <path d="M 0 200.016 L 569.52 200.016 L 569.52 0 L 0 0 L 0 200.016 z " style="fill: none"/> </g> <g id="f3f72cc-axes_1"> <g id="f3f72cc-line2d_1"> <path d="M 40.364651 46.152 L 550.783256 46.152 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_2"> <defs> <path id="f3f72cc-mcf96a6530c" d="M 3.5 0 L -3.5 -3.5 L -3.5 3.5 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-mcf96a6530c" x="550.783256" y="46.152" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f3f72cc-line2d_3"> <path d="M 148.504186 49.92192 L 148.504186 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_4"> <path d="M 191.76 49.92192 L 191.76 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_5"> <path d="M 321.527442 49.92192 L 321.527442 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_6"> <path d="M 451.294884 49.92192 L 451.294884 42.38208 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_7"> <path d="M 40.364651 100.008 L 550.783256 100.008 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_8"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-mcf96a6530c" x="550.783256" y="100.008" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f3f72cc-line2d_9"> <path d="M 148.504186 103.77792 L 148.504186 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_10"> <path d="M 191.76 103.77792 L 191.76 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_11"> <path d="M 321.527442 103.77792 L 321.527442 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_12"> <path d="M 451.294884 103.77792 L 451.294884 96.23808 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_13"> <path d="M 40.364651 153.864 L 550.783256 153.864 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_14"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-mcf96a6530c" x="550.783256" y="153.864" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f3f72cc-line2d_15"> <path d="M 148.504186 157.63392 L 148.504186 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_16"> <path d="M 191.76 157.63392 L 191.76 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_17"> <path d="M 321.527442 157.63392 L 321.527442 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_18"> <path d="M 451.294884 157.63392 L 451.294884 150.09408 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-faint); stroke-linecap: square"/> </g> <g id="f3f72cc-line2d_19"> <path d="M 148.504186 46.152 L 451.294884 46.152 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-accent); stroke-width: 6"/> </g> <g id="f3f72cc-line2d_20"> <defs> <path id="f3f72cc-m732adf0bb3" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m732adf0bb3" x="148.504186" y="46.152" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f3f72cc-line2d_21"> <defs> <path id="f3f72cc-m388347d398" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-accent); stroke-width: 2.5"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m388347d398" x="451.294884" y="46.152" style="fill: var(--fig-paper); stroke: var(--fig-accent); stroke-width: 2.5"/> </g> </g> <g id="f3f72cc-line2d_22"> <path d="M 44.690233 100.008 L 191.76 100.008 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-steel); stroke-width: 6"/> </g> <g id="f3f72cc-line2d_23"> <path d="M 321.527442 100.008 L 546.457674 100.008 " clip-path="url(#f3f72cc-p8dcfa8f124)" style="fill: none; stroke: var(--fig-steel); stroke-width: 6"/> </g> <g id="f3f72cc-line2d_24"> <defs> <path id="f3f72cc-m2a919c7889" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-steel); stroke-width: 2.5"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m2a919c7889" x="191.76" y="100.008" style="fill: var(--fig-paper); stroke: var(--fig-steel); stroke-width: 2.5"/> </g> </g> <g id="f3f72cc-line2d_25"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m2a919c7889" x="321.527442" y="100.008" style="fill: var(--fig-paper); stroke: var(--fig-steel); stroke-width: 2.5"/> </g> </g> <g id="f3f72cc-line2d_26"> <defs> <path id="f3f72cc-m9fec0c8a5a" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m9fec0c8a5a" x="191.76" y="153.864" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f3f72cc-line2d_27"> <g clip-path="url(#f3f72cc-p8dcfa8f124)"> <use xlink:href="#f3f72cc-m9fec0c8a5a" x="321.527442" y="153.864" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f3f72cc-text_1"> <!-- $A$ --> <g style="fill: var(--fig-ink)" transform="translate(12.112326 50.048484) scale(0.15 -0.15)"> <defs> <path id="f3f72cc-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-24" transform="translate(0 0.09375)"/> </g> </g> <g id="f3f72cc-text_2"> <!-- $B$ --> <g style="fill: var(--fig-ink)" transform="translate(11.962326 103.904484) scale(0.15 -0.15)"> <defs> <path id="f3f72cc-DejaVuSerif-Italic-25" d="M 1194 331 L 2128 331 Q 2691 331 2998 575 Q 3306 819 3409 1350 Q 3512 1878 3301 2120 Q 3091 2363 2525 2363 L 1591 2363 L 1194 331 z M 1653 2694 L 2447 2694 Q 2959 2694 3234 2891 Q 3509 3088 3591 3513 Q 3675 3941 3476 4136 Q 3278 4331 2766 4331 L 1972 4331 L 1653 2694 z M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 3112 4666 Q 3819 4666 4120 4377 Q 4422 4088 4309 3513 Q 4231 3097 3934 2850 Q 3637 2603 3147 2547 Q 3728 2472 3976 2167 Q 4225 1863 4125 1350 Q 3991 656 3489 328 Q 2987 0 2059 0 L -97 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-25" transform="translate(0 0.09375)"/> </g> </g> <g id="f3f72cc-text_3"> <!-- $C$ --> <g style="fill: var(--fig-ink)" transform="translate(11.512326 157.760484) scale(0.15 -0.15)"> <defs> <path id="f3f72cc-DejaVuSerif-Italic-26" d="M 4300 1234 Q 3966 581 3414 245 Q 2863 -91 2119 -91 Q 1663 -91 1303 65 Q 944 222 700 525 Q 419 875 334 1320 Q 250 1766 359 2328 Q 572 3416 1330 4083 Q 2088 4750 3116 4750 Q 3497 4750 3908 4650 Q 4319 4550 4775 4347 L 4569 3272 L 4216 3272 Q 4213 3859 3919 4137 Q 3625 4416 2997 4416 Q 2250 4416 1762 3886 Q 1275 3356 1075 2328 Q 875 1303 1156 773 Q 1438 244 2184 244 Q 2706 244 3092 492 Q 3478 741 3725 1234 L 4300 1234 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-26" transform="translate(0 0.78125)"/> </g> </g> <g id="f3f72cc-text_4"> <!-- $-2$ --> <g style="fill: var(--fig-ink)" transform="translate(139.624186 35.3808) scale(0.12 -0.12)"> <defs> <path id="f3f72cc-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f3f72cc-text_5"> <!-- $5$ --> <g style="fill: var(--fig-ink)" transform="translate(447.454884 35.3808) scale(0.12 -0.12)"> <defs> <path id="f3f72cc-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-18" transform="translate(0 0.09375)"/> </g> </g> <g id="f3f72cc-text_6"> <!-- $-1$ --> <g style="fill: var(--fig-ink)" transform="translate(182.88 89.2368) scale(0.12 -0.12)"> <defs> <path id="f3f72cc-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f3f72cc-text_7"> <!-- $2$ --> <g style="fill: var(--fig-ink)" transform="translate(317.687442 89.2368) scale(0.12 -0.12)"> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f3f72cc-text_8"> <!-- $-1$ --> <g style="fill: var(--fig-ink)" transform="translate(182.88 143.0928) scale(0.12 -0.12)"> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> </g> </g> <g id="f3f72cc-text_9"> <!-- $2$ --> <g style="fill: var(--fig-ink)" transform="translate(317.687442 143.0928) scale(0.12 -0.12)"> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(0 0.78125)"/> </g> </g> <g id="f3f72cc-text_10"> <!-- $A = [-2, 5)$ --> <g style="fill: var(--fig-accent)" transform="translate(265.189535 21.9168) scale(0.13 -0.13)"> <defs> <path id="f3f72cc-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-24" transform="translate(0 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-20" transform="translate(91.181641 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3e" transform="translate(193.935547 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(232.949219 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(316.738281 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(380.361328 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-18" transform="translate(431.113281 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(494.736328 0.015625)"/> </g> </g> <g id="f3f72cc-text_11"> <!-- $B = (-\infty, -1) \cup (2, +\infty)$ --> <g style="fill: var(--fig-steel)" transform="translate(369.229302 78.4656) scale(0.13 -0.13)"> <defs> <path id="f3f72cc-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-8da" d="M 2859 1747 Q 3016 1469 3223 1330 Q 3431 1191 3694 1191 Q 4009 1191 4209 1402 Q 4409 1613 4409 1941 Q 4409 2256 4225 2465 Q 4041 2675 3763 2675 Q 3509 2675 3304 2467 Q 3100 2259 2859 1747 z M 2478 2081 Q 2325 2356 2117 2493 Q 1909 2631 1644 2631 Q 1328 2631 1128 2423 Q 928 2216 928 1888 Q 928 1572 1112 1362 Q 1297 1153 1575 1153 Q 1828 1153 2033 1359 Q 2238 1566 2478 2081 z M 2700 1509 Q 2478 1084 2236 887 Q 1994 691 1697 691 Q 1275 691 983 1041 Q 691 1391 691 1906 Q 691 2453 952 2790 Q 1213 3128 1631 3128 Q 1928 3128 2162 2936 Q 2397 2744 2631 2303 Q 2844 2734 3091 2939 Q 3338 3144 3641 3144 Q 4056 3144 4351 2791 Q 4647 2438 4647 1919 Q 4647 1375 4386 1039 Q 4125 703 3706 703 Q 3409 703 3179 886 Q 2950 1069 2700 1509 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-8e4" d="M 4188 1928 L 4188 3934 L 4688 3934 L 4688 1928 Q 4688 1384 4419 921 Q 4150 459 3687 190 Q 3225 -78 2681 -78 Q 2138 -78 1675 190 Q 1213 459 944 921 Q 675 1384 675 1928 L 675 3934 L 1175 3934 L 1175 1928 Q 1175 1522 1378 1175 Q 1581 828 1928 625 Q 2275 422 2681 422 Q 3088 422 3434 625 Q 3781 828 3984 1175 Q 4188 1522 4188 1928 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-25" transform="translate(0 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-20" transform="translate(92.451172 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-b" transform="translate(195.205078 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(234.21875 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8da" transform="translate(318.007812 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(401.308594 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(471.025391 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(573.779297 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(637.402344 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8e4" transform="translate(695.380859 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-b" transform="translate(798.134766 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(837.148438 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(900.771484 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-e" transform="translate(970.488281 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8da" transform="translate(1073.242188 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(1156.542969 0.015625)"/> </g> </g> <g id="f3f72cc-text_12"> <!-- $C = \{-1, 2\}$: i punti $-1$ e $2$ mancano a $B$ (pallini vuoti) --> <g style="fill: var(--fig-ink)" transform="translate(105.613721 178.0992) scale(0.11 -0.11)"> <defs> <path id="f3f72cc-DejaVuSerif-5e" d="M 3272 -716 L 3272 -1044 L 3078 -1044 Q 2300 -1044 2036 -812 Q 1772 -581 1772 109 L 1772 916 Q 1772 1384 1603 1565 Q 1434 1747 991 1747 L 800 1747 L 800 2075 L 991 2075 Q 1434 2075 1603 2256 Q 1772 2438 1772 2906 L 1772 3713 Q 1772 4403 2036 4633 Q 2300 4863 3078 4863 L 3272 4863 L 3272 4538 L 3059 4538 Q 2619 4538 2484 4400 Q 2350 4263 2350 3822 L 2350 2925 Q 2350 2431 2194 2218 Q 2038 2006 1631 1913 Q 2044 1806 2197 1597 Q 2350 1388 2350 897 L 2350 0 Q 2350 -441 2484 -578 Q 2619 -716 3059 -716 L 3272 -716 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-60" d="M 800 -716 L 1019 -716 Q 1456 -716 1589 -580 Q 1722 -444 1722 0 L 1722 897 Q 1722 1388 1875 1597 Q 2028 1806 2438 1913 Q 2031 2006 1876 2218 Q 1722 2431 1722 2925 L 1722 3822 Q 1722 4266 1589 4402 Q 1456 4538 1019 4538 L 800 4538 L 800 4863 L 997 4863 Q 1775 4863 2036 4633 Q 2297 4403 2297 3713 L 2297 2906 Q 2297 2438 2465 2256 Q 2634 2075 3078 2075 L 3272 2075 L 3272 1747 L 3078 1747 Q 2634 1747 2465 1565 Q 2297 1384 2297 916 L 2297 109 Q 2297 -581 2036 -812 Q 1775 -1044 997 -1044 L 800 -1044 L 800 -716 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f3f72cc-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-26" transform="translate(0 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-20" transform="translate(95.478516 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-5e" transform="translate(198.232422 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(261.855469 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(345.644531 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-f" transform="translate(409.267578 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(460.019531 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-60" transform="translate(523.642578 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-1d" transform="translate(587.265625 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(620.957031 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(652.744141 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(684.726562 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-53" transform="translate(716.513672 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-58" transform="translate(780.527344 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(844.931641 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-57" transform="translate(909.335938 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(949.521484 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(981.503906 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-8cf" transform="translate(1013.291016 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-14" transform="translate(1097.080078 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1160.703125 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-48" transform="translate(1192.490234 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1251.669922 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-15" transform="translate(1283.457031 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1347.080078 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-50" transform="translate(1378.867188 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(1473.691406 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(1533.310547 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-46" transform="translate(1597.714844 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(1653.720703 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(1713.339844 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-52" transform="translate(1777.744141 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1837.949219 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(1869.736328 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(1929.355469 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-Italic-25" transform="translate(1961.142578 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(2034.628906 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-b" transform="translate(2066.416016 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-53" transform="translate(2105.429688 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-44" transform="translate(2169.443359 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4f" transform="translate(2229.0625 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4f" transform="translate(2261.044922 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(2293.027344 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-51" transform="translate(2325.009766 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(2389.414062 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-3" transform="translate(2421.396484 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-59" transform="translate(2453.183594 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-58" transform="translate(2509.677734 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-52" transform="translate(2574.082031 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-57" transform="translate(2634.287109 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-4c" transform="translate(2674.472656 0.015625)"/> <use xlink:href="#f3f72cc-DejaVuSerif-c" transform="translate(2706.455078 0.015625)"/> </g> </g> </g> </g> <defs> <clipPath id="f3f72cc-p8dcfa8f124"> <rect x="5.76" y="5.76" width="558" height="188.496"/> </clipPath> </defs> </svg></figure>
>
> $-1 \in B$ è falsa;
>
> $\{-1\} \subset C$ è vera;
>
> $A \cap C = C$ è vera;
>
> $4 \subset A$ è falsa in quanto scorretta, sono invece corrette sia $4 \in A$ che $\{4\} \subset A$;
>
> $(-2, 5) \subset A$ è vera;
>
> $C \subset \mathbb{R} \setminus B$ è vera;
>
> $C \setminus A \neq \emptyset$ è falsa.

## Crocette dei fogli e delle esercitazioni

### Slide 18, quiz sulle leggi di De Morgan
Negare la proposizione "la matematica è inutile ma una laurea in ingegneria vale molto" equivale a dire
- a) "la matematica è utile ma una laurea in ingegneria non vale gran che"
- b) "la matematica è utile o una laurea in ingegneria vale molto"
- c) "la matematica è utile o una laurea in ingegneria non vale gran che"
- d) "la matematica è divertente, l'ingegneria pure!"

> [!example]- Soluzione
> **c**. *(sulla slide il prof corregge «ma» in «e» e segna la c)*

### Slide 22, quiz 1
La negazione della proposizione "Ogni mela contiene almeno 4 semi" equivale a
- a) "nessuna mela contiene almeno 4 semi"
- b) "esiste una mela contenente almeno 4 semi"
- c) "ogni mela contiene al massimo 3 semi"
- d) "esiste una mela contenente meno di 4 semi"

> [!example]- Soluzione
> **d**. Il prof pone $A = \{\text{mele}\}$, $P(x)$ = “$x$ ha almeno 4 semi" e scrive $\neg\,\big(\forall x \in A,\ P(x)\big) \Leftrightarrow \exists x \in A : \neg P(x)$.

### Slide 22, quiz 2
La negazione della proposizione “$\exists a \in A : \forall b \in B,\ a \neq b$" equivale a
- a) $B \subseteq A$
- b) $\forall a \in A\ \exists b \in B : a = b$
- c) $\forall a \in A,\ \forall b \in B,\ a = b$
- d) $\exists a \in A,\ \exists b \in B : a = b$

> [!example]- Soluzione
> **b**. Il prof scrive: $\exists a \in A : P(a)$, negazione $\forall a \in A,\ \neg P(a)$, con $\neg P(a)$ uguale a $\exists b \in B : a = b$. In conclusione la negazione è $\forall a \in A\ \exists b \in B : a = b$, cioè $A \subseteq B$.

### Slide 22, quiz 3
Supponendo vera l'implicazione "se piove allora si deve prendere l'ombrello", cosa deduce un matematico?
- a) se non piove, allora non si deve prendere l'ombrello
- b) se non si deve prendere l'ombrello vuol dire che non piove
- c) che se si prende l'ombrello significa che piove
- d) niente, è troppo perso nel mondo dei numeri...

> [!example]- Soluzione
> **b**. *(la slide non segna la risposta, dalle note: forma contronominale, slide 19)*

### Slide 22, quiz 4
La negazione logica dell'implicazione "se c'è il sole allora faccio una passeggiata" è:
- a) "se c'è il sole allora non faccio una passeggiata"
- b) "c'è il sole e non faccio una passeggiata"
- c) "se non c'è il sole non faccio una passeggiata"
- d) "se non faccio una passeggiata allora non c'è il sole"

> [!example]- Soluzione
> **b**. *(la slide non segna la risposta, dalle note: tavola dell'implicazione, slide 16)*

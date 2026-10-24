---
title: Foglio 4 del tutorato svolto
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: completa
data: 2026-10-19
lezioni: []
ordine: 999
---

Il <span class="src">foglio 4</span> del tutorato (domande 4.1-4.11 a <span class="src">p. 1</span>, esercizi 4.12-4.17 a <span class="src">p. 2</span>, esercizi 4.18-4.21 a <span class="src">p. 3</span>), argomento di [Geometria e Algebra Lineare](/uni/gal/). A lezione queste cose sono la L7 (13/10) e la L8 (19/10); la teoria completa sta in [Spazi vettoriali](/uni/gal/spazi-vettoriali/), [Generatori](/uni/gal/generatori/), [Dipendenza lineare](/uni/gal/dipendenza-lineare/) e [Basi](/uni/gal/basi/). Tutte le domande e tutti gli esercizi usano solo argomenti già fatti a lezione: la dimensione non serve, e la domanda 4.9, che di solito si risolve con la dimensione, qui è risolta con la proposizione (a) sui generatori. Il calcolo passa da [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).

Come usarla: prova da solo, apri l'**indizio** se ti blocchi, la **soluzione** solo alla fine. Ogni conto è stato ricontrollato. Prima degli esercizi c'è [La teoria che serve agli esercizi](#la-teoria-che-serve-agli-esercizi): sette idee (T1-T7) con il perché, a cui le soluzioni rimandano. Ogni soluzione dice come si riconosce il tipo di esercizio, svolge un passaggio per riga con la regola accanto e chiude con un controllo.

## Lo schema

```
sottospazio U ⊆ V     0 ∈ U, poi (C): λ u1 + μ u2 ∈ U con u1, u2 GENERICI
                      per dire no: un controesempio con i numeri, o 0 ∉ U
A = [v1 | ... | vk]   vettori di R^n come colonne, A è n×k
generano R^n          rg(A) = n        (serve k ≥ n)
indipendenti          rg(A) = k        (serve k ≤ n)
base di R^n           rg(A) = k = n
b ∈ Span(v1..vk)      rg(A) = rg(A | b)
Span come sistema     riduci [A | x] con x in lettere: righe nulle a sinistra -> equazioni
relazione             colonne senza pivot di rref(A) = combinazioni delle colonne coi pivot
```

## Domande di teoria

**Domanda 4.1.** Si dia la definizione di spazio vettoriale reale e si facciano alcuni esempi.

> [!example]- Soluzione
> **Definizione** (la prof, [Spazi vettoriali](/uni/gal/spazi-vettoriali/)). Uno **spazio vettoriale reale** è un insieme $V$, i cui elementi si dicono **vettori**, su cui sono definite due operazioni, la **somma** $\vec{v} + \vec{w} \in V$ e il **prodotto per uno scalare** $\lambda\vec{v} \in V$ ($\lambda \in \mathbb{R}$), che soddisfano per ogni $\vec{v}, \vec{w}, \vec{u} \in V$ e $\lambda, \mu \in \mathbb{R}$:
> 1. $\vec{v} + \vec{w} = \vec{w} + \vec{v}$ (commutativa);
> 2. $(\vec{v} + \vec{w}) + \vec{u} = \vec{v} + (\vec{w} + \vec{u})$ (associativa);
> 3. esiste un vettore nullo $\vec{0}$ con $\vec{v} + \vec{0} = \vec{v}$;
> 4. ogni $\vec{v}$ ha un opposto $-\vec{v}$ con $\vec{v} + (-\vec{v}) = \vec{0}$;
> 5. $\lambda(\mu\vec{v}) = (\lambda\mu)\vec{v}$;
> 6. $1\vec{v} = \vec{v}$;
> 7. $(\lambda + \mu)\vec{v} = \lambda\vec{v} + \mu\vec{v}$;
> 8. $\lambda(\vec{v} + \vec{w}) = \lambda\vec{v} + \lambda\vec{w}$.
>
> **Esempi** (quelli della prof, L7 e L8):
> - $\mathbb{R}^n$, con somma e prodotto componente per componente; $\vec{0} = (0, \ldots, 0)$;
> - $M_{m,n}(\mathbb{R})$, le matrici $m \times n$, con le operazioni elemento per elemento; $\vec{0} = O$;
> - $V^3$, i vettori geometrici, con la regola del parallelogramma;
> - $\mathbb{R}[x]$, i polinomi, e $\mathbb{R}[x]_d$, i polinomi di grado al più $d$, con le operazioni coefficiente per coefficiente; $\vec{0}$ è il polinomio nullo;
> - $\mathcal{C}(\mathbb{R})$, le funzioni continue $\mathbb{R} \to \mathbb{R}$, con $(f + g)(x) = f(x) + g(x)$ e $(\lambda f)(x) = \lambda f(x)$;
> - $\{\vec{0}\}$, lo spazio con un solo elemento.
>
> Un non-esempio che mostra che le operazioni contano: $\mathbb{R}^2$ con il prodotto $\lambda \odot (v_1, v_2) = (\lambda v_1, v_2)$ non è uno spazio vettoriale, perché cade la (7): $2 \odot (0, 1) = (0, 1)$ ma $1 \odot (0, 1) + 1 \odot (0, 1) = (0, 2)$.

**Domanda 4.2.** Si dia la definizione di sottospazio di uno spazio vettoriale. Si facciano esempi di due sottoinsiemi di $M_2(\mathbb{R})$, tali che uno sia un sottospazio e l'altro no.

> [!example]- Soluzione
> **Definizione.** Un sottoinsieme **non vuoto** $U \subseteq V$ è un **sottospazio** se è chiuso rispetto alle due operazioni:
> - (A) $\vec{u}_1, \vec{u}_2 \in U \Rightarrow \vec{u}_1 + \vec{u}_2 \in U$;
> - (B) $\vec{u} \in U$, $\lambda \in \mathbb{R}$ $\Rightarrow \lambda\vec{u} \in U$.
>
> Equivalentemente (C): $\lambda_1\vec{u}_1 + \lambda_2\vec{u}_2 \in U$ per ogni $\vec{u}_1, \vec{u}_2 \in U$, $\lambda_1, \lambda_2 \in \mathbb{R}$. Conseguenza: un sottospazio contiene sempre $\vec{0}$.
>
> **Sottospazio** (esempio della prof, 19/10): le matrici a traccia nulla, $U = \{A \in M_2(\mathbb{R}) : a_{11} + a_{22} = 0\}$. Contiene $O$. Se $A, B \in U$, la traccia di $\lambda A + \mu B$ è
> $$
> (\lambda a_{11} + \mu b_{11}) + (\lambda a_{22} + \mu b_{22}) = \lambda(a_{11} + a_{22}) + \mu(b_{11} + b_{22}) = \lambda \cdot 0 + \mu \cdot 0 = 0
> $$
> quindi vale la (C).
>
> **Non sottospazio** (esempio della prof): le matrici invertibili, $U' = \{A \in M_2(\mathbb{R}) : A \text{ invertibile}\}$. Non contiene la matrice nulla, che non è invertibile ($OB = O \neq I$ per ogni $B$). Cade anche la (A): $I$ e $-I$ sono invertibili, $I + (-I) = O$ no.

**Domanda 4.3.** Si facciano esempi di due sottoinsiemi di $\mathbb{R}^n$, tali che uno sia un sottospazio e l'altro no. L'insieme delle soluzioni di un sistema lineare compatibile con $n$ incognite è un sottospazio di $\mathbb{R}^n$?

> [!example]- Soluzione
> **Sottospazio** (la prof, esempio (5)): $U = \{(v_1, \ldots, v_n) : v_1 = 0\}$. Per la (C): $\lambda_1(0, v_2, \ldots) + \lambda_2(0, w_2, \ldots) = (0,\ \lambda_1v_2 + \lambda_2w_2,\ \ldots)$, prima componente ancora $0$.
>
> **Non sottospazio** (la prof, esempio (6)): $U = \{(v_1, \ldots, v_n) : v_1 \in \mathbb{Z}\}$. È chiuso per la somma ma non per il prodotto: $(1, 0, \ldots, 0) \in U$, mentre $\sqrt{2}(1, 0, \ldots, 0) = (\sqrt{2}, 0, \ldots, 0) \notin U$.
>
> **Soluzioni di un sistema compatibile.** **Non sempre**: l'insieme delle soluzioni di $A\vec{x} = \vec{b}$ è un sottospazio di $\mathbb{R}^n$ **se e solo se il sistema è omogeneo**, $\vec{b} = \vec{0}$.
> - Se $\vec{b} = \vec{0}$, le soluzioni sono il nucleo $N(A)$: $A(\lambda\vec{v} + \mu\vec{w}) = \lambda A\vec{v} + \mu A\vec{w} = \vec{0}$, vale la (C).
> - Se $\vec{b} \neq \vec{0}$, $\vec{0}$ non è soluzione ($A\vec{0} = \vec{0} \neq \vec{b}$), quindi l'insieme non contiene il vettore nullo e non è un sottospazio, anche se è non vuoto.
>
> Esempio: $x + y = 0$ ha come soluzioni una retta per l'origine (sottospazio); $x + y = 1$, compatibile, una retta che non passa per l'origine (non sottospazio).

**Domanda 4.4.** Si facciano esempi di due sottoinsiemi di $\mathbb{R}_2[x]$, tali che uno sia un sottospazio e l'altro no.

> [!example]- Soluzione
> $\mathbb{R}_2[x]$ è quello che la prof chiama $\mathbb{R}[x]_2$: i polinomi $p(x) = a_0 + a_1x + a_2x^2$ di grado al più $2$, con il polinomio nullo come vettore nullo.
>
> **Sottospazio**: $U = \{p \in \mathbb{R}_2[x] : p(1) = 0\}$ (la versione in grado $\leq 2$ dell'esercizio della prof). Il polinomio nullo vale $0$ in $1$. Se $p(1) = q(1) = 0$, allora $(\lambda p + \mu q)(1) = \lambda p(1) + \mu q(1) = 0$: vale la (C). Esempi di elementi: $x - 1$, $x^2 - 1$, $x^2 - x$.
>
> **Non sottospazio**: i polinomi di grado esattamente $2$, $U' = \{a_0 + a_1x + a_2x^2 : a_2 \neq 0\}$ (esempio della prof con $d = 2$). Non contiene il polinomio nullo; e cade la (A): $x^2$ e $1 - x^2$ hanno grado $2$, la somma $1$ ha grado $0$.
>
> Altri esempi in [Spazi vettoriali (esercizi)](/uni/gal/spazi-vettoriali-esercizi/), esercizio 10.

**Domanda 4.5.** Cos'è lo spazio delle righe di una matrice?

> [!example]- Soluzione
> Sia $A \in M_{m \times n}(\mathbb{R})$ con righe $\vec{r}_1, \ldots, \vec{r}_m$. Ogni riga ha $n$ componenti, quindi è un elemento di $\mathbb{R}^n$. Lo **spazio delle righe** di $A$ è il sottospazio di $\mathbb{R}^n$ generato dalle righe:
> $$
> R(A) = \mathrm{Span}(\vec{r}_1, \ldots, \vec{r}_m) \subseteq \mathbb{R}^n
> $$
> (la prof, [Generatori](/uni/gal/generatori/)). Allo stesso modo lo spazio delle colonne è $C(A) = \mathrm{Span}(\vec{c}_1, \ldots, \vec{c}_n) \subseteq \mathbb{R}^m$.
>
> **Esempio.** $A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{pmatrix}$: $R(A) = \mathrm{Span}((1, 0, 2), (0, 1, 1)) \subseteq \mathbb{R}^3$, un piano per l'origine; $C(A) = \mathrm{Span}((1, 0), (0, 1), (2, 1)) = \mathbb{R}^2$. Attenzione allo spazio: le righe hanno tante componenti quante sono le **colonne**.

**Domanda 4.6.** Si dia la definizione di spazio vettoriale finitamente generato. Si facciano due esempi di spazi vettoriali reali tali che uno sia finitamente generato e uno no, motivando la risposta.

> [!example]- Soluzione
> **Definizione.** $V$ è **finitamente generato** se esistono un numero finito di vettori $\vec{v}_1, \ldots, \vec{v}_k \in V$ con $V = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$, cioè ogni vettore di $V$ è combinazione lineare di quei $k$ vettori.
>
> **Finitamente generato**: $\mathbb{R}^n$. Ogni $(v_1, \ldots, v_n) = v_1\vec{e}_1 + \cdots + v_n\vec{e}_n$, quindi $\{\vec{e}_1, \ldots, \vec{e}_n\}$ genera. (Anche $\mathbb{R}[x]_d$, generato da $1, x, \ldots, x^d$.)
>
> **Non finitamente generato**: $\mathbb{R}[x]$ (la prof, 19/10, p. 12). Dato un qualunque insieme finito $\{p_1(x), \ldots, p_k(x)\}$, sia $M$ il massimo dei loro gradi. Ogni combinazione $\lambda_1p_1 + \cdots + \lambda_kp_k$ ha grado al più $M$, perché sommando e moltiplicando per numeri non compaiono potenze di $x$ più alte. Allora $x^{M + 1} \notin \mathrm{Span}(p_1, \ldots, p_k)$: nessun insieme finito genera $\mathbb{R}[x]$.

**Domanda 4.7.** Dare la definizione di insieme di generatori di uno spazio vettoriale, illustrando con esempi nello spazio vettoriale $\mathbb{R}^3$.

> [!example]- Soluzione
> **Definizione.** $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq V$ è un **insieme (sistema) di generatori** di $V$ se $V = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$: ogni $\vec{v} \in V$ si scrive come $\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k$ per qualche scelta dei $\lambda_i$.
>
> **Esempi in $\mathbb{R}^3$.**
> - $\{\vec{e}_1, \vec{e}_2, \vec{e}_3\}$ genera: $(a, b, c) = a\vec{e}_1 + b\vec{e}_2 + c\vec{e}_3$.
> - $\{(1, 1, 0), (1, 0, 1), (0, 1, 1)\}$ genera: la matrice con queste colonne ha rango $3$ (esempio della prof in [Basi](/uni/gal/basi/)).
> - $\{\vec{e}_1, \vec{e}_2\}$ **non** genera: le combinazioni sono $(\lambda_1, \lambda_2, 0)$, il piano $xy$, e $(0, 0, 1)$ resta fuori. Due vettori non generano mai $\mathbb{R}^3$ (servono almeno $3$).
> - $\{(1, 0, 2), (-1, 1, 0), (0, 1, 2), (2, -1, 2)\}$ **non** genera, pur avendo quattro vettori: rango $2$, lo Span è il piano $2x + 2y - z = 0$ (esempio della prof del 13/10).

**Domanda 4.8.** Come si può stabilire se un insieme di ennuple dato è un sistema di generatori? Si faccia un esempio di un sistema di generatori per $\mathbb{R}^3$ formato da quattro elementi.

> [!example]- Soluzione
> **Criterio** (proposizione (a)): $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq \mathbb{R}^n$ è un sistema di generatori di $\mathbb{R}^n$ se e solo se $\operatorname{rg}(A) = n$, con $A = [\vec{v}_1 \mid \cdots \mid \vec{v}_k]$ ($n \times k$). In pratica: vettori in colonna, Gauss, si contano i pivot e si confrontano con $n$ (le righe). Se $k < n$ la risposta è no senza conti.
>
> Perché: $\vec{b} \in \mathrm{Span}$ se e solo se $A\vec{\lambda} = \vec{b}$ è compatibile; con rango $n$ la completa non può avere rango maggiore, e il sistema è compatibile per ogni $\vec{b}$.
>
> **Esempio con quattro elementi**: $\{\vec{e}_1, \vec{e}_2, \vec{e}_3, (1, 1, 1)\}$.
> $$
> A = \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 \end{pmatrix}
> $$
> È già a scalini con tre pivot: rango $3 = n$, genera. (Non è una base: quattro vettori di $\mathbb{R}^3$ sono dipendenti, e infatti $(1, 1, 1) = \vec{e}_1 + \vec{e}_2 + \vec{e}_3$.)

**Domanda 4.9.** Qual è il numero minimo di polinomi che un insieme generatore dello spazio $\mathbb{R}_3[x]$ deve contenere?

> [!tip]- Indizio
> Ogni polinomio di $\mathbb{R}_3[x]$ è individuato dai suoi quattro coefficienti, cioè da un'ennupla di $\mathbb{R}^4$, e le operazioni sui polinomi sono le operazioni sulle ennuple dei coefficienti. Cosa dice la proposizione (a) su un sistema di generatori di $\mathbb{R}^4$?

> [!example]- Soluzione
> **Risposta: $4$.**
>
> **Ne bastano $4$.** $\{1, x, x^2, x^3\}$ genera $\mathbb{R}_3[x]$: $a_0 + a_1x + a_2x^2 + a_3x^3$ è già una loro combinazione (la prof, $\mathbb{R}[x]_d$ con $d = 3$).
>
> **Meno di $4$ non bastano.** A ogni $p(x) = a_0 + a_1x + a_2x^2 + a_3x^3$ associo l'ennupla dei coefficienti $\vec{c}_p = (a_0, a_1, a_2, a_3) \in \mathbb{R}^4$. Siccome somma e prodotto per scalare dei polinomi si fanno coefficiente per coefficiente,
> $$
> \lambda_1p_1 + \cdots + \lambda_kp_k = q \iff \lambda_1\vec{c}_{p_1} + \cdots + \lambda_k\vec{c}_{p_k} = \vec{c}_q
> $$
> (due polinomi sono uguali se e solo se hanno gli stessi coefficienti). Quindi $\{p_1, \ldots, p_k\}$ genera $\mathbb{R}_3[x]$ se e solo se $\{\vec{c}_{p_1}, \ldots, \vec{c}_{p_k}\}$ genera $\mathbb{R}^4$. Per la proposizione (a) serve $\operatorname{rg}[\vec{c}_{p_1} \mid \cdots \mid \vec{c}_{p_k}] = 4$, e una matrice $4 \times k$ con $k \leq 3$ ha rango al massimo $k < 4$. Con tre polinomi o meno non si genera.
>
> **Esempio**: $\{1 + x,\ x^2,\ x^3\}$ non genera. Le ennuple sono $(1, 1, 0, 0)$, $(0, 0, 1, 0)$, $(0, 0, 0, 1)$, e tutte le combinazioni hanno le prime due componenti uguali: il polinomio $x$, con ennupla $(0, 1, 0, 0)$, resta fuori.
>
> Con la dimensione, quando si farà, la risposta diventerà immediata; il ragionamento qui sopra usa solo la proposizione (a).

**Domanda 4.10.** Cosa significa che un insieme di vettori in uno spazio vettoriale reale $V$ è linearmente indipendente? Si forniscano esempi di un insieme indipendente e di un insieme dipendente in $M_2(\mathbb{R})$.

> [!example]- Soluzione
> **Definizione** (la prof, 19/10). $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq V$ è **linearmente indipendente** se
> $$
> \lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k = \vec{0} \implies \lambda_1 = \cdots = \lambda_k = 0
> $$
> cioè l'unico modo di ottenere $\vec{0}$ è con tutti i coefficienti nulli. Altrimenti, se esiste una combinazione con coefficienti **non tutti nulli** uguale a $\vec{0}$, è **linearmente dipendente**.
>
> **Indipendente in $M_2(\mathbb{R})$**: le quattro matrici $A_1, A_2, A_3, A_4$ con un solo $1$. $\lambda_1A_1 + \lambda_2A_2 + \lambda_3A_3 + \lambda_4A_4 = \begin{pmatrix} \lambda_1 & \lambda_2 \\ \lambda_3 & \lambda_4 \end{pmatrix}$, che è $O$ solo se tutti i $\lambda_i$ sono $0$.
>
> **Dipendente in $M_2(\mathbb{R})$**: $\left\{\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}\right\}$. La seconda è il doppio della prima, quindi $2\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} - \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix} = O$ con coefficienti $2, -1$ non nulli.
>
> Altri esempi in [Dipendenza lineare (esercizi)](/uni/gal/dipendenza-lineare-esercizi/), esercizio 2.

**Domanda 4.11.** Come si può stabilire se un insieme di ennuple dato è linearmente indipendente?

> [!example]- Soluzione
> **Criterio** (proposizione (b)): $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq \mathbb{R}^n$ è linearmente indipendente se e solo se $\operatorname{rg}(A) = k$, con $A = [\vec{v}_1 \mid \cdots \mid \vec{v}_k]$. Il rango si confronta con $k$, il numero di vettori (le colonne). Se $k > n$ sono dipendenti senza conti.
>
> Perché: $\sum \lambda_i\vec{v}_i = \vec{0}$ è il sistema omogeneo $A\vec{\lambda} = \vec{0}$, che ha solo la soluzione nulla esattamente quando non ci sono variabili libere, cioè quando il rango è uguale al numero di incognite $k$.
>
> **Esempio**: $(1, 0, 1)$, $(0, 1, 1)$, $(1, 1, 0)$.
> $$
> \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix} \xrightarrow{E_{31}(-1)} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 1 & -1 \end{pmatrix} \xrightarrow{E_{32}(-1)} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & -2 \end{pmatrix}
> $$
> ($R_3 - R_1 = (0, 1, -1)$, poi $R_3 - R_2 = (0, 0, -2)$.) Rango $3 = k$: indipendenti. Se fossero dipendenti, la relazione si leggerebbe dalle colonne senza pivot della forma ridotta.

## La teoria che serve agli esercizi

Gli esercizi 4.12-4.21 usano sette idee, sempre le stesse. Qui sono spiegate una volta per tutte, con il perché; nelle soluzioni si rimanda a T1, ..., T7. Chi le ha chiare può saltare agli esercizi.

### T1. Come si dimostra (o si smentisce) che un insieme è un sottospazio

Un sottospazio è un pezzo di $V$ dentro cui si possono fare tutte le combinazioni lineari senza uscire. Per dimostrarlo bastano due cose:

1. **$\vec{0} \in U$.** Serve a sapere che $U$ non è vuoto, ed è il controllo più veloce: se $\vec{0} \notin U$, la risposta è no e l'esercizio è finito. Il motivo: se $U$ fosse un sottospazio, preso un $\vec{u} \in U$ anche $0 \cdot \vec{u} = \vec{0}$ dovrebbe starci, per la (B).
2. **La (C)**: per $\vec{u}_1, \vec{u}_2 \in U$ **generici** e $\lambda, \mu \in \mathbb{R}$ qualsiasi, $\lambda\vec{u}_1 + \mu\vec{u}_2 \in U$.

"Generici" vuol dire con le lettere: si scrive la condizione che $\vec{u}_1$ e $\vec{u}_2$ soddisfano perché stanno in $U$, e si fa vedere che la combinazione la soddisfa ancora. Un esempio con i numeri non dimostra niente, perché la proprietà deve valere per **tutti** gli elementi.

Per dire **no** basta invece **un** controesempio con i numeri: due elementi di $U$ la cui somma esce da $U$, oppure un elemento e uno scalare il cui prodotto esce, oppure $\vec{0} \notin U$.

**Scorciatoia utile.** Se $U$ è descritto da condizioni **lineari omogenee** sulle componenti (ogni condizione è "una combinazione delle componenti $= 0$", come $x + z = 0$ o $a_{21} = 0$), allora è un sottospazio: è l'insieme delle soluzioni di un sistema omogeneo, cioè un nucleo. Condizioni con un termine noto ($x + z = 1$), con prodotti di componenti ($xy = 0$), con disuguaglianze ($x \geq 0$) o con “$\neq$" di solito rompono tutto, e lì si cerca il controesempio.

### T2. Una combinazione lineare è una matrice per un vettore

Questa è l'idea che trasforma ogni domanda su vettori di $\mathbb{R}^n$ in un sistema lineare. Messi i vettori $\vec{v}_1, \ldots, \vec{v}_k \in \mathbb{R}^n$ **in colonna** in una matrice $A = [\vec{v}_1 \mid \cdots \mid \vec{v}_k]$, di formato $n \times k$, vale
$$
\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k = A\vec{\lambda}, \qquad \vec{\lambda} = (\lambda_1, \ldots, \lambda_k)
$$
Esempio con due vettori di $\mathbb{R}^2$:
$$
\lambda_1\begin{pmatrix} 1 \\ 2 \end{pmatrix} + \lambda_2\begin{pmatrix} 3 \\ 4 \end{pmatrix} = \begin{pmatrix} \lambda_1 + 3\lambda_2 \\ 2\lambda_1 + 4\lambda_2 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}\begin{pmatrix} \lambda_1 \\ \lambda_2 \end{pmatrix}
$$
La prima uguaglianza è la somma componente per componente, la seconda è la definizione del prodotto righe per colonne. Le **incognite** del sistema sono i coefficienti $\lambda_i$, non le componenti dei vettori. Le colonne sono tante quanti i vettori ($k$), le righe tante quante le componenti ($n$): non confonderle è metà del lavoro.

### T3. Le tre domande e i tre criteri col rango

Con T2, le tre domande del capitolo diventano tre domande sul sistema $A\vec{\lambda} = \vec{b}$.

```
domanda                          sistema                         criterio
b ∈ Span(v1..vk)?                Aλ = b ha soluzione?            rg(A) = rg(A | b)
v1..vk indipendenti?             Aλ = 0 ha solo λ = 0?           rg(A) = k   (numero di vettori)
v1..vk generano R^n?             Aλ = b ha soluzione per ogni b? rg(A) = n   (numero di componenti)
```

**Perché il primo.** $\vec{b}$ è combinazione dei $\vec{v}_i$ se e solo se esistono dei $\lambda_i$ con $A\vec{\lambda} = \vec{b}$, cioè se il sistema è compatibile. Rouché-Capelli dice che è compatibile esattamente quando la matrice dei coefficienti e la completa hanno lo stesso rango.

**Perché il secondo.** La definizione di indipendenza chiede che $A\vec{\lambda} = \vec{0}$ abbia solo la soluzione nulla. Un sistema omogeneo è sempre compatibile ($\vec{\lambda} = \vec{0}$ va bene), e la soluzione è unica se e solo se non ci sono incognite libere, cioè se c'è un pivot in ogni colonna: rango uguale al numero di incognite, $k$.

**Perché il terzo.** Riduci $A$ a scalini. Se il rango è $n$, ogni riga ha un pivot e non può mai uscire una riga $(0 \cdots 0 \mid \text{numero} \neq 0)$: il sistema è compatibile per qualunque $\vec{b}$. Se il rango è minore di $n$, la forma a scalini ha una riga nulla, e scegliendo un $\vec{b}$ che a destra di quella riga dà un numero diverso da $0$ si trova un vettore che non è combinazione.

**Conseguenze che fanno risparmiare conti.** Il rango di una matrice $n \times k$ è al massimo il più piccolo fra $n$ e $k$. Quindi:
- più vettori che componenti ($k > n$): sempre **dipendenti**, perché il rango non arriva a $k$;
- meno vettori che componenti ($k < n$): **non generano** mai $\mathbb{R}^n$, perché il rango non arriva a $n$;
- $k = n$: generano se e solo se sono indipendenti, e allora sono una **base**.

### T4. Da generatori a equazioni: lo Span come insieme di soluzioni

Un sottospazio si può dare in due modi: con dei **generatori** ($\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$, la forma "parametrica") o con delle **equazioni** omogenee (la forma "cartesiana", come $x + z = 0$). Il metodo per passare dalla prima alla seconda è T3 applicato a un vettore generico $\vec{x} = (x_1, \ldots, x_n)$:

1. scrivi la completa $[A \mid \vec{x}]$, con le componenti di $\vec{x}$ lasciate in lettere;
2. riduci a scalini, facendo sulla colonna delle lettere le stesse operazioni (vengono espressioni come $x_2 - 2x_1$);
3. ogni riga che a sinistra è tutta nulla dice $0 = (\text{espressione nelle } x_i)$: il sistema è compatibile, cioè $\vec{x} \in \mathrm{Span}$, se e solo se tutte quelle espressioni valgono $0$. Sono le equazioni cercate.

Il numero di equazioni che si ottiene è $n - \operatorname{rg}(A)$, le righe nulle. Esempio piccolo: $\mathrm{Span}((1, 1)) \subseteq \mathbb{R}^2$.
$$
\left[\begin{array}{c|c} 1 & x_1 \\ 1 & x_2 \end{array}\right] \xrightarrow{E_{21}(-1)} \left[\begin{array}{c|c} 1 & x_1 \\ 0 & x_2 - x_1 \end{array}\right]
$$
Una riga nulla, un'equazione: $x_2 - x_1 = 0$, la bisettrice. Torna: i multipli di $(1, 1)$ sono i punti con le due coordinate uguali.

Il sistema che esce **non è unico**: sommando o moltiplicando le equazioni se ne ottengono altri con le stesse soluzioni. Per controllare la risposta si sostituiscono i generatori: devono soddisfare ogni equazione.

### T5. Leggere le relazioni dalla forma ridotta

Se i vettori sono dipendenti, l'esercizio chiede spesso **quale** relazione c'è. Il fatto che serve: le operazioni elementari sulle righe non cambiano le soluzioni di $A\vec{\lambda} = \vec{0}$. Quindi le colonne di $A$ e le colonne di $\operatorname{rref}(A)$ soddisfano **le stesse relazioni lineari**: se in $\operatorname{rref}(A)$ la colonna 3 è $2 \cdot (\text{colonna } 1) - 1 \cdot (\text{colonna } 2)$, allora anche $\vec{v}_3 = 2\vec{v}_1 - \vec{v}_2$.

In $\operatorname{rref}(A)$ le colonne con i pivot sono colonne della base canonica ($\vec{e}_1, \vec{e}_2, \ldots$), quindi una colonna senza pivot si scrive subito come loro combinazione: i coefficienti sono **i suoi elementi**. Esempio:
$$
\operatorname{rref}(A) = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & -1 \end{pmatrix}: \quad \text{colonna 3} = 2 \cdot \text{colonna 1} - 1 \cdot \text{colonna 2}, \quad \text{quindi } \vec{v}_3 = 2\vec{v}_1 - \vec{v}_2
$$
Attenzione: serve la forma **ridotta** (pivot $1$ e zeri anche sopra i pivot). Da una forma a scalini qualsiasi i coefficienti non si leggono così. E si verifica sempre sostituendo i vettori veri.

**Chi si può ricavare dagli altri.** Da una relazione $c_1\vec{v}_1 + \cdots + c_k\vec{v}_k = \vec{0}$ si ricava $\vec{v}_j$ dividendo per $c_j$, quindi solo se $c_j \neq 0$. Un vettore che ha coefficiente $0$ in **ogni** relazione non è combinazione degli altri (esercizio 4.16).

### T6. Gauss con un parametro

Il parametro $k$ complica una sola cosa: un pivot che dipende da $k$ può valere $0$ per qualche valore. Regole pratiche:
- **scegli pivot senza $k$**: scambia le righe in modo da usare come pivot un numero ($1$, $-1$, ...) finché puoi;
- **moltiplicare** una riga per un'espressione in $k$ per sommarla a un'altra va sempre bene (anche se l'espressione vale $0$, il passo semplicemente non cambia niente); **dividere** per un'espressione in $k$ no, perché se vale $0$ non si può;
- alla fine i pivot che contengono $k$ si **fattorizzano** e si cercano i valori che li annullano: sono i **valori critici**;
- per ogni valore critico si **sostituisce** $k$ nella forma a scalini e si ricontrolla tutto a mano. Il caso critico è proprio quello in cui la struttura cambia, e lì si sbaglia (esercizio 4.14 b).

### T7. Spazi di matrici

$M_2(\mathbb{R})$ si comporta come $\mathbb{R}^4$: una matrice $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ è individuata dai suoi quattro elementi, e somma e prodotto per scalare si fanno elemento per elemento, come sulle quaterne $(a, b, c, d)$. Quindi T1 vale com'è: un sottoinsieme di $M_2(\mathbb{R})$ descritto da condizioni lineari omogenee sugli elementi è un sottospazio.

Due avvertenze.
- **Il prodotto righe per colonne non è un'operazione dello spazio vettoriale.** Le operazioni di $M_2(\mathbb{R})$ come spazio vettoriale sono solo la somma e il prodotto per un numero. Che un insieme sia chiuso per $AB$ non dice niente sul fatto che sia un sottospazio (esercizio 4.19).
- **Quando $U$ è definito da un'uguaglianza fra prodotti** ($AS = SA$, $MA = NA$), la (C) si dimostra con le proprietà del prodotto, senza scrivere gli elementi: $X(\lambda A + \mu B) = \lambda XA + \mu XB$ e $(\lambda A + \mu B)X = \lambda AX + \mu BX$ (distributiva, e gli scalari escono dal prodotto). Funziona perché $A$ compare "linearmente": mai $A^2$, mai $A$ moltiplicata per sé stessa.

## Esercizi

### Esercizio 4.12

Si descriva il sottospazio generato dalle ennuple
$$
\vec{v}_1 = (1, 2, 0, 1, 1), \qquad \vec{v}_2 = (2, 0, 0, 1, 3)
$$
come insieme delle soluzioni di un sistema omogeneo.

> [!tip]- Indizio
> È la procedura della prof del 19/10 (T4): $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{x}]$ con $\vec{x} = (x_1, \ldots, x_5)$, Gauss, e una equazione per ogni riga nulla a sinistra. Quante te ne aspetti?

> [!example]- Soluzione
> **Come si riconosce.** "Descrivere uno Span come insieme di soluzioni di un sistema omogeneo" vuol dire passare dai generatori alle equazioni: è T4.
>
> **Cosa aspettarsi, prima dei conti.** I vettori non sono paralleli: se fosse $\vec{v}_2 = c\,\vec{v}_1$, dalla prima componente $c = 2$ e dalla seconda $0 = 2c = 4$, assurdo. Quindi $\operatorname{rg}[\vec{v}_1 \mid \vec{v}_2] = 2$, e le equazioni saranno $n - \operatorname{rg} = 5 - 2 = 3$. A parole: lo Span è un "piano" dentro $\mathbb{R}^5$, e per ritagliare un piano in uno spazio con $5$ coordinate servono $3$ vincoli.
>
> **Perché la colonna delle lettere.** $\vec{x} \in \mathrm{Span}(\vec{v}_1, \vec{v}_2)$ se e solo se il sistema $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 = \vec{x}$, nelle incognite $\lambda_1, \lambda_2$, è compatibile (T2, T3). La sua completa è
> $$
> \left[\begin{array}{cc|c} 1 & 2 & x_1 \\ 2 & 0 & x_2 \\ 0 & 0 & x_3 \\ 1 & 1 & x_4 \\ 1 & 3 & x_5 \end{array}\right]
> $$
> e si riduce come un sistema qualsiasi, portandosi dietro le lettere.
>
> **Prima colonna**, pivot $1$ in riga 1: azzero gli altri elementi della colonna.
> - $E_{21}(-2)$: $R_2 - 2R_1 = (2 - 2,\ 0 - 4 \mid x_2 - 2x_1) = (0, -4 \mid x_2 - 2x_1)$;
> - la riga 3 ha già $0$ in prima colonna, resta com'è;
> - $E_{41}(-1)$: $R_4 - R_1 = (1 - 1,\ 1 - 2 \mid x_4 - x_1) = (0, -1 \mid x_4 - x_1)$;
> - $E_{51}(-1)$: $R_5 - R_1 = (1 - 1,\ 3 - 2 \mid x_5 - x_1) = (0, 1 \mid x_5 - x_1)$.
>
> **Seconda colonna.** I candidati pivot sono $-4$ (riga 2), $-1$ (riga 4) e $1$ (riga 5). Scelgo $-1$, per non avere frazioni:
> - $S_{24}$: scambio le righe 2 e 4, la riga 2 diventa $(0, -1 \mid x_4 - x_1)$ e la riga 4 diventa $(0, -4 \mid x_2 - 2x_1)$;
> - $E_{42}(-4)$: $R_4 - 4R_2 = (0,\ -4 + 4 \mid x_2 - 2x_1 - 4x_4 + 4x_1) = (0, 0 \mid 2x_1 + x_2 - 4x_4)$;
> - $E_{52}(1)$: $R_5 + R_2 = (0,\ 1 - 1 \mid x_5 - x_1 + x_4 - x_1) = (0, 0 \mid -2x_1 + x_4 + x_5)$.
> $$
> \left[\begin{array}{cc|c} 1 & 2 & x_1 \\ 0 & -1 & -x_1 + x_4 \\ 0 & 0 & x_3 \\ 0 & 0 & 2x_1 + x_2 - 4x_4 \\ 0 & 0 & -2x_1 + x_4 + x_5 \end{array}\right]
> $$
> **Lettura.** A sinistra due pivot (rango $2$, come previsto) e tre righe nulle. Ognuna dice “$0 =$ espressione": il sistema è compatibile se e solo se le tre espressioni valgono $0$. Moltiplicando l'ultima per $-1$:
> $$
> \mathrm{Span}(\vec{v}_1, \vec{v}_2) = \left\{\vec{x} \in \mathbb{R}^5 : \begin{cases} x_3 = 0 \\ 2x_1 + x_2 - 4x_4 = 0 \\ 2x_1 - x_4 - x_5 = 0 \end{cases}\right\}
> $$
> La prima equazione si poteva prevedere: entrambi i generatori hanno terza componente $0$, e sommandoli o moltiplicandoli per numeri resta $0$.
>
> **Controllo.** Ogni generatore deve soddisfare tutte e tre le equazioni.
> - $\vec{v}_1 = (1, 2, 0, 1, 1)$: $x_3 = 0$; $2 + 2 - 4 = 0$; $2 - 1 - 1 = 0$.
> - $\vec{v}_2 = (2, 0, 0, 1, 3)$: $x_3 = 0$; $4 + 0 - 4 = 0$; $4 - 1 - 3 = 0$.
>
> E un vettore fuori dallo Span deve violarne almeno una: $\vec{e}_1 = (1, 0, 0, 0, 0)$ dà $2 \neq 0$ nella seconda.
>
> **Un'altra risposta giusta.** Facendo le operazioni in un altro ordine si può ottenere, al posto della terza, $-6x_1 + x_2 + 4x_5 = 0$. È equivalente: $(2x_1 + x_2 - 4x_4) - 4(2x_1 - x_4 - x_5) = -6x_1 + x_2 + 4x_5$, quindi è una combinazione delle equazioni trovate e il sistema ha le stesse soluzioni. All'esame va bene qualunque sistema equivalente, purché si verifichi sui generatori.

### Esercizio 4.13

Siano $U$ e $V$ i sottospazi di $\mathbb{R}^3$ così definiti:
$$
U = \{(x, y, z) \in \mathbb{R}^3 \mid x + z = 0\}, \qquad V = \langle (2, -1, -2), (-3, 4, 3) \rangle
$$
Dimostrare che $U = V$. (Nel testo del foglio $U$ è scritto “$(x, y, x$": è un refuso per $(x, y, z)$.)

> [!tip]- Indizio
> $U$ è dato con un'equazione, $V$ con dei generatori. Porta $V$ nella stessa forma con la procedura della prof (T4) e confronta. In alternativa: due inclusioni.

> [!example]- Soluzione
> **Come si riconosce.** Due sottospazi descritti in modo diverso (uno con un'equazione, uno con generatori) e la domanda "sono uguali?". Si portano nella stessa forma e si confrontano. La notazione $\langle \ldots \rangle$ è un altro modo di scrivere $\mathrm{Span}(\ldots)$.
>
> **Cosa vuol dire, geometricamente.** $x + z = 0$ è un piano per l'origine, con vettore normale $(1, 0, 1)$. $V$ è generato da due vettori non paralleli, quindi è anch'esso un piano per l'origine. La tesi è che sia lo stesso piano.
>
> <figure class="fig"><svg role="img" aria-label="es 4.13 lo stesso piano" xmlns:xlink="http://www.w3.org/1999/xlink" width="379.08pt" height="314.928pt" viewBox="0 0 379.08 314.928" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fc4d071-figure_1"> <g id="fc4d071-patch_1"> <path d="M 0 314.928 L 379.08 314.928 L 379.08 0 L 0 0 L 0 314.928 z " style="fill: none"/> </g> <g id="fc4d071-axes_1"> <g id="fc4d071-patch_2"> <path d="M 114.791711 71.174852 L 41.935372 283.900623 L 264.288289 283.900623 L 337.144628 71.174852 z " clip-path="url(#fc4d071-pc1e81ce2e4)" style="fill: var(--fig-steel); opacity: 0.14"/> </g> <g id="fc4d071-line2d_1"> <path d="M 114.791711 71.174852 L 41.935372 283.900623 L 264.288289 283.900623 L 337.144628 71.174852 L 114.791711 71.174852 " clip-path="url(#fc4d071-pc1e81ce2e4)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="fc4d071-patch_3"> <path d="M 189.54 177.537738 Q 159.942112 198.262402 131.443232 218.217532 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 135.866993 217.561531 L 131.443232 218.217532 L 133.572688 214.284922 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fc4d071-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(116.290313 229.610405) scale(0.13 -0.13)"> <defs> <path id="fc4d071-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="fc4d071-patch_4"> <path d="M 189.54 177.537738 Q 255.23518 177.537738 319.58872 177.537738 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 315.58872 175.537738 L 319.58872 177.537738 L 315.58872 179.537738 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fc4d071-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(329.859049 180.914691) scale(0.13 -0.13)"> <defs> <path id="fc4d071-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="fc4d071-patch_5"> <path d="M 189.54 177.537738 Q 189.54 111.842557 189.54 47.489018 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 187.54 51.489018 L 189.54 47.489018 L 191.54 51.489018 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fc4d071-text_3"> <!-- $z$ --> <g style="fill: var(--fig-axis)" transform="translate(186.095 36.890642) scale(0.13 -0.13)"> <defs> <path id="fc4d071-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-Italic-5d" transform="translate(0 0.5625)"/> </g> </g> <g id="fc4d071-patch_6"> <path d="M 189.54 177.537738 Q 160.71901 217.42382 133.731497 254.772508 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 139.280832 251.873392 L 133.731497 254.772508 L 134.741805 248.59357 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="fc4d071-patch_7"> <path d="M 189.54 177.537738 Q 250.389413 132.665895 308.719303 89.652011 " style="fill: none; stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> <path d="M 302.550436 90.722096 L 308.719303 89.652011 L 305.874051 95.229155 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 2.8; stroke-linecap: round"/> </g> <g id="fc4d071-patch_8"> <path d="M 189.54 177.537738 Q 179.294577 161.97102 170.524349 148.645687 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> <path d="M 171.211347 154.418731 L 170.524349 148.645687 L 175.554983 151.559915 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2.4; stroke-linecap: round"/> </g> <g id="fc4d071-text_4"> <!-- $(2, -1, -2)$ --> <g style="fill: var(--fig-ink)" transform="translate(100.111496 275.588922) scale(0.12 -0.12)"> <defs> <path id="fc4d071-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-15" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-8cf" transform="translate(172.353516 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-14" transform="translate(275.107422 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-f" transform="translate(338.730469 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-8cf" transform="translate(408.447266 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-15" transform="translate(511.201172 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-c" transform="translate(574.824219 0.015625)"/> </g> </g> <g id="fc4d071-text_5"> <!-- $(-3, 4, 3)$ --> <g style="fill: var(--fig-ink)" transform="translate(294.045776 75.752221) scale(0.12 -0.12)"> <defs> <path id="fc4d071-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-8cf" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-16" transform="translate(122.802734 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-f" transform="translate(186.425781 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-17" transform="translate(237.177734 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-f" transform="translate(300.800781 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-16" transform="translate(351.552734 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-c" transform="translate(415.175781 0.015625)"/> </g> </g> <g id="fc4d071-text_6"> <!-- $(1, 0, 1)$ normale --> <g style="fill: var(--fig-accent)" transform="translate(109.682204 133.351776) scale(0.12 -0.12)"> <defs> <path id="fc4d071-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-b" transform="translate(0 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-14" transform="translate(39.013672 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-f" transform="translate(102.636719 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-13" transform="translate(153.388672 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-f" transform="translate(217.011719 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-14" transform="translate(267.763672 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-c" transform="translate(331.386719 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(370.400391 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(402.1875 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-52" transform="translate(466.591797 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-55" transform="translate(526.796875 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-50" transform="translate(574.599609 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-44" transform="translate(669.423828 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4f" transform="translate(729.042969 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-48" transform="translate(761.025391 0.015625)"/> </g> </g> <g id="fc4d071-text_7"> <!-- $x + z = 0$ --> <g style="fill: var(--fig-steel)" transform="translate(214.000912 302.178237) scale(0.12 -0.12)"> <defs> <path id="fc4d071-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-Italic-5b" transform="translate(0 0.78125)"/> <use xlink:href="#fc4d071-DejaVuSerif-e" transform="translate(75.361328 0.78125)"/> <use xlink:href="#fc4d071-DejaVuSerif-Italic-5d" transform="translate(178.115234 0.78125)"/> <use xlink:href="#fc4d071-DejaVuSerif-20" transform="translate(249.765625 0.78125)"/> <use xlink:href="#fc4d071-DejaVuSerif-13" transform="translate(352.519531 0.78125)"/> </g> </g> <g id="fc4d071-text_8"> <!-- $V = U$: i due generatori stanno nel piano e non sono paralleli --> <g style="fill: var(--fig-ink)" transform="translate(5.76 14.88) scale(0.12 -0.12)"> <defs> <path id="fc4d071-DejaVuSerif-Italic-39" d="M 1506 4331 L 2191 750 L 4259 4331 L 3734 4331 L 3800 4666 L 5169 4666 L 5103 4331 L 4650 4331 L 2144 0 L 1606 0 L 791 4331 L 325 4331 L 391 4666 L 2091 4666 L 2025 4331 L 1506 4331 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-Italic-38" d="M 1294 4331 L 697 4331 L 763 4666 L 2588 4666 L 2522 4331 L 1925 4331 L 1456 1919 Q 1281 1025 1506 672 Q 1731 319 2447 319 Q 3163 319 3522 672 Q 3881 1025 4056 1919 L 4525 4331 L 3928 4331 L 3994 4666 L 5569 4666 L 5503 4331 L 4909 4331 L 4428 1856 Q 4222 791 3726 350 Q 3231 -91 2250 -91 Q 1269 -91 937 353 Q 606 797 813 1856 L 1294 4331 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="fc4d071-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc4d071-DejaVuSerif-Italic-39" transform="translate(0 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-20" transform="translate(91.181641 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-Italic-38" transform="translate(193.935547 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-1d" transform="translate(278.212891 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(311.904297 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4c" transform="translate(343.691406 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(375.673828 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-47" transform="translate(407.460938 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-58" transform="translate(471.474609 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-48" transform="translate(535.878906 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(595.058594 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4a" transform="translate(626.845703 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-48" transform="translate(690.859375 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(750.039062 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-48" transform="translate(814.443359 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-55" transform="translate(873.623047 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-44" transform="translate(921.425781 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-57" transform="translate(981.044922 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-52" transform="translate(1021.230469 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-55" transform="translate(1081.435547 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4c" transform="translate(1129.238281 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(1161.220703 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-56" transform="translate(1193.007812 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-57" transform="translate(1244.326172 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-44" transform="translate(1284.511719 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(1344.130859 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(1408.535156 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-52" transform="translate(1472.939453 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(1533.144531 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(1564.931641 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-48" transform="translate(1629.335938 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4f" transform="translate(1688.515625 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(1720.498047 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-53" transform="translate(1752.285156 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4c" transform="translate(1816.298828 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-44" transform="translate(1848.28125 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(1907.900391 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-52" transform="translate(1972.304688 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(2032.509766 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-48" transform="translate(2064.296875 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(2123.476562 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(2155.263672 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-52" transform="translate(2219.667969 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(2279.873047 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(2344.277344 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-56" transform="translate(2376.064453 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-52" transform="translate(2427.382812 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-51" transform="translate(2487.587891 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-52" transform="translate(2551.992188 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-3" transform="translate(2612.197266 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-53" transform="translate(2643.984375 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-44" transform="translate(2707.998047 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-55" transform="translate(2767.617188 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-44" transform="translate(2815.419922 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4f" transform="translate(2875.039062 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4f" transform="translate(2907.021484 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-48" transform="translate(2939.003906 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4f" transform="translate(2998.183594 0.015625)"/> <use xlink:href="#fc4d071-DejaVuSerif-4c" transform="translate(3030.166016 0.015625)"/> </g> </g> </g> </g> <defs> <clipPath id="fc4d071-pc1e81ce2e4"> <rect x="16.667995" y="20.88" width="345.744011" height="288.288"/> </clipPath> </defs> </svg></figure>
>
> **Metodo 1: $V$ in forma cartesiana (T4).**
> $$
> \left[\begin{array}{cc|c} 2 & -3 & x \\ -1 & 4 & y \\ -2 & 3 & z \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{cc|c} -1 & 4 & y \\ 2 & -3 & x \\ -2 & 3 & z \end{array}\right]
> $$
> Lo scambio porta in alto il $-1$, così il pivot è comodo.
> - $E_{21}(2)$: $R_2 + 2R_1 = (2 - 2,\ -3 + 8 \mid x + 2y) = (0, 5 \mid x + 2y)$;
> - $E_{31}(-2)$: $R_3 - 2R_1 = (-2 + 2,\ 3 - 8 \mid z - 2y) = (0, -5 \mid z - 2y)$;
> - $E_{32}(1)$: $R_3 + R_2 = (0,\ -5 + 5 \mid z - 2y + x + 2y) = (0, 0 \mid x + z)$.
> $$
> \left[\begin{array}{cc|c} -1 & 4 & y \\ 0 & 5 & x + 2y \\ 0 & 0 & x + z \end{array}\right]
> $$
> Rango $2$, una riga nulla, un'equazione: $(x, y, z) \in V$ se e solo se $x + z = 0$. È proprio la condizione che definisce $U$, quindi
> $$
> V = \{(x, y, z) : x + z = 0\} = U \qquad \square
> $$
>
> **Metodo 2: le due inclusioni.** Due insiemi sono uguali se ognuno è contenuto nell'altro.
> - **$V \subseteq U$.** I generatori stanno in $U$: $2 + (-2) = 0$ e $-3 + 3 = 0$. $U$ è un sottospazio, quindi contiene tutte le combinazioni di suoi elementi (T1), e in particolare tutto $V$. Questo passo è sempre facile: basta controllare i generatori.
> - **$U \subseteq V$.** Qui serve un elemento **generico** di $U$. Da $x + z = 0$ si ha $z = -x$, quindi gli elementi di $U$ sono $(x, y, -x)$ con $x, y$ qualsiasi. Cerco $a, b$ con $a(2, -1, -2) + b(-3, 4, 3) = (x, y, -x)$, cioè
> $$
> \begin{cases} 2a - 3b = x \\ -a + 4b = y \\ -2a + 3b = -x \end{cases}
> $$
> La terza equazione è la prima moltiplicata per $-1$, quindi non aggiunge niente. Dalle prime due: dalla seconda $a = 4b - y$; nella prima $2(4b - y) - 3b = x$, cioè $5b = x + 2y$, $b = \frac{x + 2y}{5}$; poi $a = \frac{4x + 8y}{5} - y = \frac{4x + 3y}{5}$. Una soluzione esiste per ogni $x, y$, quindi ogni elemento di $U$ sta in $V$.
>
> **Controllo** con un elemento concreto di $U$, $(1, 0, -1)$: $a = \frac45$, $b = \frac15$, e $\frac45(2, -1, -2) + \frac15(-3, 4, 3) = \left(\frac{8 - 3}{5}, \frac{-4 + 4}{5}, \frac{-8 + 3}{5}\right) = (1, 0, -1)$.
>
> **Da ricordare.** $V \subseteq U$ da solo non basta: anche $\mathrm{Span}((2, -1, -2))$, una retta, è contenuto in $U$ senza essere uguale. L'inclusione inversa (o il confronto delle equazioni) è il pezzo che dice che $V$ "riempie" tutto il piano.

### Esercizio 4.14

Si considerino i vettori di $\mathbb{R}^4$:
$$
\vec{v}_1 = (1, 2, -2, -3), \quad \vec{v}_2 = (0, -1, 1, 2), \quad \vec{v}_3 = (-1, 0, k, -1), \quad \vec{v}_4 = (4, 2 + k, -2, k^2)
$$

- a) Per quali valori di $k$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è linearmente indipendente?
- b) Per quali valori di $k$ il vettore $\vec{v}_4$ appartiene al sottospazio generato da $\vec{v}_1, \vec{v}_2, \vec{v}_3$?
- c) Per quali valori di $k$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ è un insieme di generatori per $\mathbb{R}^4$?

> [!tip]- Indizio
> Una sola riduzione di $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4]$: le prime tre colonne rispondono ad a), la quarta come termine noto a b), la matrice intera a c). In b) non dimenticare il caso in cui il rango delle prime tre scende.

> [!example]- Soluzione
> **Come si riconosce.** Le tre domande di T3 (indipendenza, appartenenza, generatori) sugli stessi vettori, con un parametro. È l'esercizio tipo della provetta.
>
> **Perché basta una riduzione.** Le operazioni sulle righe agiscono su tutte le colonne allo stesso modo, quindi riducendo la matrice $4 \times 4$ intera si riducono anche i suoi pezzi:
> ```
> colonne 1-3           A = [v1|v2|v3]       → a)  rg(A) = 3 ?
> colonne 1-3 | col. 4  (A | v4)             → b)  rg(A) = rg(A | v4) ?
> colonne 1-4           [v1|v2|v3|v4]        → c)  rango = 4 ?
> ```
> $$
> \begin{pmatrix} 1 & 0 & -1 & 4 \\ 2 & -1 & 0 & k + 2 \\ -2 & 1 & k & -2 \\ -3 & 2 & -1 & k^2 \end{pmatrix}
> $$
> Attenzione a costruirla bene: ogni vettore è una **colonna**. La prima riga contiene le prime componenti dei quattro vettori: $1, 0, -1, 4$.
>
> **Prima colonna**, pivot $1$:
> - $E_{21}(-2)$: $R_2 - 2R_1 = (2 - 2,\ -1 - 0,\ 0 + 2,\ k + 2 - 8) = (0, -1, 2, k - 6)$;
> - $E_{31}(2)$: $R_3 + 2R_1 = (-2 + 2,\ 1 + 0,\ k - 2,\ -2 + 8) = (0, 1, k - 2, 6)$;
> - $E_{41}(3)$: $R_4 + 3R_1 = (-3 + 3,\ 2 + 0,\ -1 - 3,\ k^2 + 12) = (0, 2, -4, k^2 + 12)$.
>
> **Seconda colonna**, pivot $-1$ in riga 2 (un numero, senza $k$: T6):
> - $E_{32}(1)$: $R_3 + R_2 = (0,\ 1 - 1,\ k - 2 + 2,\ 6 + k - 6) = (0, 0, k, k)$;
> - $E_{42}(2)$: $R_4 + 2R_2 = (0,\ 2 - 2,\ -4 + 4,\ k^2 + 12 + 2k - 12) = (0, 0, 0, k^2 + 2k)$.
> $$
> \begin{pmatrix} 1 & 0 & -1 & 4 \\ 0 & -1 & 2 & k - 6 \\ 0 & 0 & k & k \\ 0 & 0 & 0 & k(k + 2) \end{pmatrix}
> $$
> I pivot che dipendono da $k$ sono $k$ (riga 3) e $k(k + 2)$ (riga 4). Si annullano per $k = 0$ e $k = -2$: sono i **valori critici**, e vanno guardati uno per uno sostituendo (T6).
>
> **a) Indipendenza di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.** Guardo solo le prime tre colonne: pivot $1$, $-1$, $k$.
> - $k \neq 0$: tre pivot, rango $3$ = numero di vettori, **indipendenti**;
> - $k = 0$: la riga 3 diventa $(0, 0, 0)$, rango $2 < 3$, **dipendenti**.
>
> **Indipendente se e solo se $k \neq 0$.**
>
> Per $k = 0$ la relazione si legge dalla forma ridotta delle prime tre colonne (T5). $D_2(-1)$ trasforma la riga 2 in $(0, 1, -2)$; sopra il secondo pivot c'è già $0$, quindi la forma è ridotta:
> $$
> \operatorname{rref}\begin{pmatrix} 1 & 0 & -1 \\ 0 & -1 & 2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> La colonna 3 è $-1 \cdot (\text{col. } 1) - 2 \cdot (\text{col. } 2)$, quindi $\vec{v}_3 = -\vec{v}_1 - 2\vec{v}_2$. Controllo: $-(1, 2, -2, -3) - 2(0, -1, 1, 2) = (-1,\ -2 + 2,\ 2 - 2,\ 3 - 4) = (-1, 0, 0, -1)$, che è $\vec{v}_3$ con $k = 0$.
>
> **b) $\vec{v}_4 \in \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$?** Il sistema è $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 = \vec{v}_4$: coefficienti le prime tre colonne, termine noto la quarta. Rouché-Capelli, caso per caso.
> - **$k \neq 0$ e $k \neq -2$.** $\operatorname{rg}(A) = 3$. Nella completa la riga 4 è $(0, 0, 0 \mid k(k + 2))$ con $k(k + 2) \neq 0$: è un'equazione $0 = $ numero non nullo, impossibile. $\operatorname{rg}(A \mid \vec{v}_4) = 4 \neq 3$: **non appartiene**.
> - **$k = -2$.** Sostituisco: la riga 3 è $(0, 0, -2 \mid -2)$, la riga 4 è $(0, 0, 0 \mid 0)$. $\operatorname{rg}(A) = 3 = \operatorname{rg}(A \mid \vec{v}_4)$: **appartiene**.
> - **$k = 0$.** Sostituisco: la riga 3 è $(0, 0, 0 \mid 0)$ e la riga 4 è $(0, 0, 0 \mid 0)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & -1 & 4 \\ 0 & -1 & 2 & -6 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 2 = \operatorname{rg}(A \mid \vec{v}_4)$: **appartiene**. È il caso che si perde se si guarda solo la riga 4 ragionando "con rango $3$": qui il rango di $A$ è sceso, e la compatibilità va rifatta da capo.
>
> **$\vec{v}_4 \in \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ se e solo se $k = 0$ oppure $k = -2$.**
>
> I coefficienti, risalendo dal basso (non li chiede, ma sono il controllo migliore):
> - $k = -2$: riga 3, $-2\lambda_3 = -2$, quindi $\lambda_3 = 1$; riga 2, $-\lambda_2 + 2\lambda_3 = k - 6 = -8$, quindi $\lambda_2 = 10$; riga 1, $\lambda_1 - \lambda_3 = 4$, quindi $\lambda_1 = 5$. Controllo: $5(1, 2, -2, -3) + 10(0, -1, 1, 2) + 1 \cdot (-1, 0, -2, -1) = (5 - 1,\ 10 - 10,\ -10 + 10 - 2,\ -15 + 20 - 1) = (4, 0, -2, 4)$, che è $\vec{v}_4$ con $k = -2$ ($2 + k = 0$, $k^2 = 4$).
> - $k = 0$: $\lambda_3 = t$ è libero (colonna senza pivot); riga 2, $-\lambda_2 + 2t = -6$, quindi $\lambda_2 = 6 + 2t$; riga 1, $\lambda_1 - t = 4$, quindi $\lambda_1 = 4 + t$. Con $t = 0$: $4(1, 2, -2, -3) + 6(0, -1, 1, 2) = (4,\ 8 - 6,\ -8 + 6,\ -12 + 12) = (4, 2, -2, 0)$, che è $\vec{v}_4$ con $k = 0$. Infiniti modi, uno per ogni $t$: per $k = 0$ i primi tre vettori sono dipendenti, e i coefficienti non sono unici.
>
> **c) Generano $\mathbb{R}^4$?** Quattro vettori di $\mathbb{R}^4$: generano se e solo se la matrice intera ha rango $4 = n$ (T3). Pivot: $1$, $-1$, $k$, $k(k + 2)$.
> - $k \neq 0, -2$: quattro pivot, rango $4$, **generano** (e sono una base: quattro vettori in $\mathbb{R}^4$).
> - $k = -2$: la riga 3 è $(0, 0, -2, -2)$, la riga 4 è nulla: rango $3$, **non generano**.
> - $k = 0$: righe 3 e 4 nulle, rango $2$, **non generano**.
>
> **$\{\vec{v}_1, \ldots, \vec{v}_4\}$ genera $\mathbb{R}^4$ se e solo se $k \neq 0$ e $k \neq -2$.**
>
> **Perché c) è il contrario di b).** Se $\vec{v}_4$ sta nello Span dei primi tre, aggiungerlo non porta niente di nuovo: $\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_4) = \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$, e tre vettori non generano $\mathbb{R}^4$ (T3, $k < n$). Viceversa, per $k \neq 0, -2$ i primi tre sono indipendenti e $\vec{v}_4$ ne esce, e i quattro hanno rango $4$. Il controllo incrociato fra b) e c) è gratis e va fatto.

### Esercizio 4.15

Dati
$$
\vec{v}_1 = (1, 0, 1, 1, 1), \quad \vec{v}_2 = (-2, 2, 0, 0, 1), \quad \vec{v}_3 = (1, 0, k, 0, 1)
$$
dove $k \in \mathbb{R}$, determinare per quali valori di $k$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è linearmente indipendente.

> [!tip]- Indizio
> Prima di fare Gauss guarda le componenti in cui compaiono pochi vettori: la seconda e la quarta.

> [!example]- Soluzione
> **Come si riconosce.** Indipendenza con un parametro. Tre vettori in $\mathbb{R}^5$: possono essere indipendenti (T3: $3$ vettori e $5$ componenti, il rango può arrivare a $3$), ma non genereranno mai $\mathbb{R}^5$.
>
> **Perché qui conviene la definizione.** Il criterio col rango funziona sempre, ma quando molte componenti sono $0$ la definizione si risolve a occhio: ogni componente è un'equazione nei $\lambda_i$, e quelle con un solo $\lambda$ lo danno subito.
>
> **Con la definizione.** Impongo $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 = \vec{0}$ e scrivo le componenti una per una:
> ```
> 1ª componente   λ1 − 2λ2 + λ3 = 0
> 2ª componente         2λ2      = 0      (solo v2 ha la 2ª componente ≠ 0)
> 3ª componente   λ1       + kλ3 = 0
> 4ª componente   λ1             = 0      (solo v1 ha la 4ª componente ≠ 0)
> 5ª componente   λ1 +  λ2 +  λ3 = 0
> ```
> - dalla seconda, $\lambda_2 = 0$;
> - dalla quarta, $\lambda_1 = 0$;
> - sostituendo nella prima, $0 - 0 + \lambda_3 = 0$, quindi $\lambda_3 = 0$.
>
> L'unica soluzione è quella nulla, e per trovarla non è servita la terza componente, l'unica in cui compare $k$. Quindi il risultato vale **per ogni $k$**: l'insieme è **linearmente indipendente per ogni $k \in \mathbb{R}$**. (La terza e la quinta equazione con $\lambda_1 = \lambda_2 = \lambda_3 = 0$ sono soddisfatte, $0 = 0$.)
>
> **Con il rango, per controllo.** $A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3]$ è $5 \times 3$, con righe $(1, -2, 1)$, $(0, 2, 0)$, $(1, 0, k)$, $(1, 0, 0)$, $(1, 1, 1)$.
> - $E_{31}(-1)$: $(1, 0, k) - (1, -2, 1) = (0, 2, k - 1)$;
> - $E_{41}(-1)$: $(1, 0, 0) - (1, -2, 1) = (0, 2, -1)$;
> - $E_{51}(-1)$: $(1, 1, 1) - (1, -2, 1) = (0, 3, 0)$;
> - la riga 2 $(0, 2, 0)$ è il pivot della seconda colonna; $S_{34}$ porta in riga 3 la $(0, 2, -1)$, che non contiene $k$ (T6);
> - $E_{32}(-1)$: $(0, 2, -1) - (0, 2, 0) = (0, 0, -1)$;
> - $E_{42}(-1)$: $(0, 2, k - 1) - (0, 2, 0) = (0, 0, k - 1)$;
> - $E_{52}(-\frac32)$: $(0, 3, 0) - \frac32(0, 2, 0) = (0, 0, 0)$;
> - $E_{43}(k - 1)$: $(0, 0, k - 1) + (k - 1)(0, 0, -1) = (0, 0, 0)$. Moltiplicare per $k - 1$ è lecito anche se $k = 1$ (T6).
>
> Pivot $1$, $2$, $-1$, nessuno con $k$: rango $3$ = numero di vettori per ogni valore del parametro. Stessa risposta.
>
> **Da ricordare.** Un parametro nell'esercizio non vuol dire che la risposta dipenda dal parametro. "Per ogni $k$" (e "per nessun $k$") sono risposte che escono spesso.

### Esercizio 4.16

$$
\vec{v}_1 = (1, -3, 7), \quad \vec{v}_2 = (2, -1, -1), \quad \vec{v}_3 = (-4, 2, 2)
$$
Stabilire se $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è un insieme dipendente o indipendente. Se è dipendente esprimere, quando è possibile

- $\vec{v}_1$ come combinazione lineare di $\vec{v}_2$ e $\vec{v}_3$;
- $\vec{v}_2$ come combinazione lineare di $\vec{v}_1$ e $\vec{v}_3$ (il foglio scrive "di $v_1$ e $v_2$": è un refuso);
- $\vec{v}_3$ come combinazione lineare di $\vec{v}_1$ e $\vec{v}_2$.

> [!tip]- Indizio
> Confronta $\vec{v}_2$ e $\vec{v}_3$ prima di fare conti. "Quando è possibile" è un avvertimento: dipendente non vuol dire che ogni vettore è combinazione degli altri.

> [!example]- Soluzione
> **Come si riconosce.** Dipendenza, e poi "chi si ricava dagli altri": T3 per la prima parte, T5 per la seconda.
>
> **Guardare prima di contare.** $\vec{v}_3 = (-4, 2, 2) = -2 \cdot (2, -1, -1) = -2\vec{v}_2$. Due vettori paralleli bastano a rendere dipendente l'insieme, quindi la risposta alla prima domanda si vede già. Il Gauss serve a vedere **tutte** le relazioni, cioè a capire se $\vec{v}_1$ c'entra.
>
> **Riduzione.**
> $$
> A = \begin{pmatrix} 1 & 2 & -4 \\ -3 & -1 & 2 \\ 7 & -1 & 2 \end{pmatrix}
> $$
> - $E_{21}(3)$: $R_2 + 3R_1 = (-3 + 3,\ -1 + 6,\ 2 - 12) = (0, 5, -10)$;
> - $E_{31}(-7)$: $R_3 - 7R_1 = (7 - 7,\ -1 - 14,\ 2 + 28) = (0, -15, 30)$;
> - $E_{32}(3)$: $R_3 + 3R_2 = (0,\ -15 + 15,\ 30 - 30) = (0, 0, 0)$;
> - $D_2(\frac15)$: $(0, 1, -2)$;
> - $E_{12}(-2)$: $R_1 - 2R_2 = (1,\ 2 - 2,\ -4 + 4) = (1, 0, 0)$.
> $$
> \operatorname{rref}(A) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & -2 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> Rango $2 < 3$ = numero di vettori: **dipendente**.
>
> **Tutte le relazioni.** Le soluzioni di $A\vec{\lambda} = \vec{0}$ si leggono dalla forma ridotta: $\lambda_1 = 0$ (riga 1) e $\lambda_2 - 2\lambda_3 = 0$ (riga 2), con $\lambda_3 = t$ libero. Quindi $(\lambda_1, \lambda_2, \lambda_3) = t(0, 2, 1)$, e **ogni** relazione fra i tre vettori è un multiplo di
> $$
> 0 \cdot \vec{v}_1 + 2\vec{v}_2 + \vec{v}_3 = \vec{0}
> $$
> Controllo: $2(2, -1, -1) + (-4, 2, 2) = (0, 0, 0)$. Il coefficiente di $\vec{v}_1$ è $0$ in tutte.
>
> <figure class="fig"><svg role="img" aria-label="es 4.16 due vettori su una retta" xmlns:xlink="http://www.w3.org/1999/xlink" width="337.219165pt" height="327.216pt" viewBox="0 0 337.219165 327.216" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f10ad9c-figure_1"> <g id="f10ad9c-patch_1"> <path d="M 0 327.216 L 337.219165 327.216 L 337.219165 0 L 0 0 L 0 327.216 z " style="fill: none"/> </g> <g id="f10ad9c-axes_1"> <g id="f10ad9c-line2d_1"> <path d="M 62.566164 280.39563 L 247.174576 122.019248 " clip-path="url(#f10ad9c-p4a95247597)" style="fill: none; stroke: var(--fig-steel); stroke-opacity: 0.7; stroke-width: 2; stroke-linecap: square"/> </g> <g id="f10ad9c-patch_2"> <path d="M 139.844104 214.09854 Q 105.929128 237.846061 73.113161 260.824049 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 77.536922 260.168047 L 73.113161 260.824049 L 75.242616 256.891439 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f10ad9c-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(54.2947 274.783561) scale(0.13 -0.13)"> <defs> <path id="f10ad9c-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="f10ad9c-patch_3"> <path d="M 139.844104 214.09854 Q 215.121449 214.09854 289.057154 214.09854 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 285.057154 212.09854 L 289.057154 214.09854 L 285.057154 216.09854 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f10ad9c-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(303.802283 217.475493) scale(0.13 -0.13)"> <defs> <path id="f10ad9c-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f10ad9c-patch_4"> <path d="M 139.844104 214.09854 Q 139.844104 138.821194 139.844104 64.885489 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 137.844104 68.885489 L 139.844104 64.885489 L 141.844104 68.885489 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="f10ad9c-text_3"> <!-- $z$ --> <g style="fill: var(--fig-axis)" transform="translate(136.399104 49.812314) scale(0.13 -0.13)"> <defs> <path id="f10ad9c-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-5d" transform="translate(0 0.5625)"/> </g> </g> <g id="f10ad9c-patch_5"> <path d="M 139.844104 214.09854 Q 182.776293 177.266823 223.502238 142.327853 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2.6; stroke-linecap: round"/> <path d="M 217.862665 143.740376 L 223.502238 142.327853 L 221.248513 147.687025 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2.6; stroke-linecap: round"/> </g> <g id="f10ad9c-patch_6"> <path d="M 139.844104 214.09854 Q 118.378009 232.514398 99.457581 248.746318 " style="fill: none; stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> <path d="M 105.96478 247.116484 L 99.457581 248.746318 L 102.058032 242.562658 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> </g> <g id="f10ad9c-patch_7"> <path d="M 139.844104 214.09854 Q 100.882052 138.619455 63.458494 66.120812 " style="fill: none; stroke: var(--fig-accent); stroke-width: 3; stroke-linecap: round"/> <path d="M 63.544848 72.828461 L 63.458494 66.120812 L 68.876425 70.076318 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 3; stroke-linecap: round"/> </g> <g id="f10ad9c-text_4"> <!-- $\vec{v}_2$ --> <g style="fill: var(--fig-ink)" transform="translate(110.6171 272.067221) scale(0.13 -0.13)"> <defs> <path id="f10ad9c-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-15" transform="translate(57.402466 -14.609326) scale(0.7)"/> </g> </g> <g id="f10ad9c-text_5"> <!-- $\vec{v}_3 = -2\vec{v}_2$ --> <g style="fill: var(--fig-axis)" transform="translate(183.281691 123.623515) scale(0.12 -0.12)"> <defs> <path id="f10ad9c-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-16" transform="translate(57.402466 -14.609326) scale(0.7)"/> <use xlink:href="#f10ad9c-DejaVuSerif-20" transform="translate(123.498657 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-8cf" transform="translate(226.252563 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-15" transform="translate(310.041626 0.390625)"/> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(432.085083 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(373.664673 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-15" transform="translate(431.067139 -14.609326) scale(0.7)"/> </g> </g> <g id="f10ad9c-text_6"> <!-- $\vec{v}_1$ fuori dalla retta --> <g style="fill: var(--fig-accent)" transform="translate(5.76 46.328779) scale(0.12 -0.12)"> <defs> <path id="f10ad9c-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-14" transform="translate(57.402466 -14.609326) scale(0.7)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(104.533813 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-49" transform="translate(136.320923 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-58" transform="translate(173.332642 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-52" transform="translate(237.736938 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-55" transform="translate(297.942017 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-4c" transform="translate(345.744751 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(377.727173 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-47" transform="translate(409.514282 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(473.527954 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-4f" transform="translate(533.147095 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-4f" transform="translate(565.129517 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(597.111938 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(656.731079 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-55" transform="translate(688.518188 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-48" transform="translate(736.320923 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-57" transform="translate(795.50061 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-57" transform="translate(835.686157 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(875.871704 0.390625)"/> </g> </g> <g id="f10ad9c-text_7"> <!-- $\mathrm{Span}(\vec{v}_2, \vec{v}_3)$ --> <g style="fill: var(--fig-steel)" transform="translate(40.552954 308.066106) scale(0.12 -0.12)"> <defs> <path id="f10ad9c-DejaVuSerif-36" d="M 594 225 L 594 1288 L 953 1284 Q 969 753 1261 498 Q 1553 244 2150 244 Q 2706 244 2998 464 Q 3291 684 3291 1106 Q 3291 1444 3114 1625 Q 2938 1806 2369 1978 L 1753 2163 Q 1084 2366 811 2669 Q 538 2972 538 3500 Q 538 4094 959 4422 Q 1381 4750 2144 4750 Q 2469 4750 2856 4679 Q 3244 4609 3681 4475 L 3681 3481 L 3328 3481 Q 3275 3975 2998 4195 Q 2722 4416 2156 4416 Q 1663 4416 1405 4214 Q 1147 4013 1147 3628 Q 1147 3294 1340 3103 Q 1534 2913 2163 2725 L 2741 2553 Q 3375 2363 3645 2067 Q 3916 1772 3916 1275 Q 3916 597 3481 253 Q 3047 -91 2188 -91 Q 1803 -91 1404 -12 Q 1006 66 594 225 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-DejaVuSerif-36" transform="translate(0 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-53" transform="translate(68.505859 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(132.519531 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-51" transform="translate(192.138672 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-b" transform="translate(256.542969 0.390625)"/> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(353.977051 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(295.556641 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-15" transform="translate(352.959106 -14.609326) scale(0.7)"/> <use xlink:href="#f10ad9c-DejaVuSerif-f" transform="translate(400.090454 0.390625)"/> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(509.262817 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(450.842407 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-16" transform="translate(508.244873 -14.609326) scale(0.7)"/> <use xlink:href="#f10ad9c-DejaVuSerif-c" transform="translate(555.376221 0.390625)"/> </g> </g> <g id="f10ad9c-text_8"> <!-- $\vec{v}_2, \vec{v}_3$ su una retta: $\vec{v}_1$ non ci arriva --> <g style="fill: var(--fig-ink)" transform="translate(71.039398 16.08) scale(0.12 -0.12)"> <defs> <path id="f10ad9c-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f10ad9c-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-15" transform="translate(57.402466 -14.609326) scale(0.7)"/> <use xlink:href="#f10ad9c-DejaVuSerif-f" transform="translate(104.533813 0.390625)"/> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(213.706177 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(155.285767 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-16" transform="translate(212.688232 -14.609326) scale(0.7)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(259.81958 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-56" transform="translate(291.606689 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-58" transform="translate(342.925049 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(407.329346 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-58" transform="translate(439.116455 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-51" transform="translate(503.520752 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(567.925049 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(627.544189 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-55" transform="translate(659.331299 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-48" transform="translate(707.134033 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-57" transform="translate(766.313721 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-57" transform="translate(806.499268 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(846.684814 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-1d" transform="translate(906.303955 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(939.995361 0.390625)"/> <use xlink:href="#f10ad9c-STIXGeneral-Regular-350" transform="translate(1030.202881 10)"/> <use xlink:href="#f10ad9c-DejaVuSerif-Italic-59" transform="translate(971.782471 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-14" transform="translate(1029.184937 -14.609326) scale(0.7)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(1076.316284 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-51" transform="translate(1108.103394 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-52" transform="translate(1172.50769 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-51" transform="translate(1232.712769 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(1297.117065 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-46" transform="translate(1328.904175 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-4c" transform="translate(1384.910034 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-3" transform="translate(1416.892456 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(1448.679565 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-55" transform="translate(1508.298706 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-55" transform="translate(1556.10144 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-4c" transform="translate(1603.904175 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-59" transform="translate(1635.886597 0.390625)"/> <use xlink:href="#f10ad9c-DejaVuSerif-44" transform="translate(1692.380737 0.390625)"/> </g> </g> </g> </g> <defs> <clipPath id="f10ad9c-p4a95247597"> <rect x="20.85963" y="22.08" width="310.599536" height="299.376"/> </clipPath> </defs> </svg></figure>
>
> **Le tre domande, con T5** (si ricava $\vec{v}_j$ solo se ha coefficiente $\neq 0$ in una relazione):
> - **$\vec{v}_1$ da $\vec{v}_2, \vec{v}_3$: non è possibile.** Il suo coefficiente è sempre $0$. Lo stesso a mano: $\mathrm{Span}(\vec{v}_2, \vec{v}_3) = \mathrm{Span}(\vec{v}_2)$, la retta dei multipli di $(2, -1, -1)$, perché $\vec{v}_3$ è già un multiplo di $\vec{v}_2$. $\vec{v}_1 = a(2, -1, -1)$ chiederebbe $2a = 1$ dalla prima componente e $-a = -3$ dalla seconda, cioè $a = \frac12$ e $a = 3$ insieme: impossibile. Nella figura, $\vec{v}_1$ esce dalla retta.
> - **$\vec{v}_2 = 0 \cdot \vec{v}_1 - \frac12\vec{v}_3$.** Dalla relazione, dividendo per il coefficiente $2$: $\vec{v}_2 = -\frac12\vec{v}_3$. Controllo: $-\frac12(-4, 2, 2) = (2, -1, -1)$.
> - **$\vec{v}_3 = 0 \cdot \vec{v}_1 - 2\vec{v}_2$.** È la colonna 3 della forma ridotta, elementi $0$ e $-2$. Controllo: $-2(2, -1, -1) = (-4, 2, 2)$.
>
> In tutti e due i casi i coefficienti sono **unici**: $\{\vec{v}_1, \vec{v}_3\}$ e $\{\vec{v}_1, \vec{v}_2\}$ sono coppie di vettori non paralleli, quindi indipendenti, e una combinazione di vettori indipendenti si scrive in un modo solo.
>
> **Da ricordare.** "Dipendenti" vuol dire che **almeno uno** è combinazione degli altri, non che lo sono tutti. Il vettore che ha coefficiente $0$ in ogni relazione è quello "estraneo".

### Esercizio 4.17

In $\mathbb{R}^3$ siano dati
$$
\vec{v}_1 = (2, 1, 1), \quad \vec{v}_2 = (-1, 1, 2), \quad \vec{v}_3 = (3, -2, -1), \quad \vec{v}_4 = (4, -1, -2)
$$
Stabilire se $\vec{v}_4$ è combinazione lineare di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.

> [!tip]- Indizio
> È il primo criterio di T3: completa $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4]$ e Rouché-Capelli. Se il rango delle prime tre colonne è già $3$, cosa puoi dire di **ogni** vettore di $\mathbb{R}^3$?

> [!example]- Soluzione
> **Come si riconosce.** “$\vec{v}_4$ è combinazione di ...?" è la domanda di appartenenza: $\vec{v}_4 \in \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$? Si scrive il sistema $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 = \vec{v}_4$ (T2) e si guarda se è compatibile (T3).
> $$
> \left[\begin{array}{ccc|c} 2 & -1 & 3 & 4 \\ 1 & 1 & -2 & -1 \\ 1 & 2 & -1 & -2 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & 1 & -2 & -1 \\ 2 & -1 & 3 & 4 \\ 1 & 2 & -1 & -2 \end{array}\right]
> $$
> Lo scambio mette in alto un $1$: niente frazioni nel primo passo.
> - $E_{21}(-2)$: $R_2 - 2R_1 = (2 - 2,\ -1 - 2,\ 3 + 4 \mid 4 + 2) = (0, -3, 7 \mid 6)$;
> - $E_{31}(-1)$: $R_3 - R_1 = (1 - 1,\ 2 - 1,\ -1 + 2 \mid -2 + 1) = (0, 1, 1 \mid -1)$;
> - $S_{23}$: porto in riga 2 la riga con pivot $1$;
> - $E_{32}(3)$: $R_3 + 3R_2 = (0,\ -3 + 3,\ 7 + 3 \mid 6 - 3) = (0, 0, 10 \mid 3)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & -2 & -1 \\ 0 & 1 & 1 & -1 \\ 0 & 0 & 10 & 3 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 3 = \operatorname{rg}(A \mid \vec{v}_4)$: il sistema è compatibile, **sì, $\vec{v}_4$ è combinazione** di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.
>
> **Perché la risposta era scritta prima del termine noto.** $A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3]$ ha rango $3 = n$: per T3 i tre vettori generano tutto $\mathbb{R}^3$, e sono anche indipendenti (rango $3 = k$), cioè una base. Quindi **ogni** vettore di $\mathbb{R}^3$ ne è combinazione, in un modo solo. La colonna di $\vec{v}_4$ serve solo a trovare i coefficienti. Se il rango di $A$ fosse stato $2$, invece, la risposta sarebbe dipesa da $\vec{v}_4$.
>
> **Coefficienti**, risalendo dall'ultima riga:
> - riga 3: $10\lambda_3 = 3$, quindi $\lambda_3 = \frac{3}{10}$;
> - riga 2: $\lambda_2 + \lambda_3 = -1$, quindi $\lambda_2 = -1 - \frac{3}{10} = -\frac{13}{10}$;
> - riga 1: $\lambda_1 + \lambda_2 - 2\lambda_3 = -1$, quindi $\lambda_1 = -1 - \lambda_2 + 2\lambda_3 = -1 + \frac{13}{10} + \frac{6}{10} = \frac{9}{10}$.
> $$
> \vec{v}_4 = \frac{9}{10}\vec{v}_1 - \frac{13}{10}\vec{v}_2 + \frac{3}{10}\vec{v}_3
> $$
> **Controllo**, moltiplicando tutto per $10$ per non avere frazioni: deve venire $10\vec{v}_4 = (40, -10, -20)$.
> $$
> 9(2, 1, 1) - 13(-1, 1, 2) + 3(3, -2, -1) = (18 + 13 + 9,\ 9 - 13 - 6,\ 9 - 26 - 3) = (40, -10, -20)
> $$

### Esercizio 4.18

1. Date le terne $\vec{v}_1 = (0, 1, 1)$, $\vec{v}_2 = (-1, k, 0)$, $\vec{v}_3 = (1, 1, k)$, mostrare che $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è un insieme linearmente indipendente per qualsiasi valore di $k \in \mathbb{R}$.
2. Esprimere $\vec{v} = (2, 1, 2)$ come combinazione lineare di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.

> [!tip]- Indizio
> La prima riga di $A$ comincia con $0$: scambia. Se i pivot che escono non dipendono da $k$, il punto 1 è fatto; il punto 2 viene dalla stessa riduzione con $\vec{v}$ in fondo.

> [!example]- Soluzione
> **Come si riconosce.** Indipendenza con parametro (punto 1) e coefficienti di una combinazione (punto 2): T3 e T6, e una sola riduzione per tutti e due, mettendo $\vec{v}$ come termine noto.
> $$
> \left[\begin{array}{ccc|c} 0 & -1 & 1 & 2 \\ 1 & k & 1 & 1 \\ 1 & 0 & k & 2 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & k & 1 & 1 \\ 0 & -1 & 1 & 2 \\ 1 & 0 & k & 2 \end{array}\right]
> $$
> La prima riga di partenza ha $0$ in prima colonna e non può fare da pivot: scambio con la seconda. Con lo scambio la riga 2 è già pronta, $(0, -1, 1 \mid 2)$, e il pivot della seconda colonna sarà $-1$, senza $k$.
> - $E_{31}(-1)$: $R_3 - R_1 = (1 - 1,\ 0 - k,\ k - 1 \mid 2 - 1) = (0, -k, k - 1 \mid 1)$;
> - $E_{32}(-k)$: $R_3 - kR_2 = (0,\ -k + k,\ k - 1 - k \mid 1 - 2k) = (0, 0, -1 \mid 1 - 2k)$.
>
> Nell'ultimo passo **moltiplico** la riga 2 per $k$, non divido per $k$ (T6): per $k = 0$ l'elemento da azzerare è già $0$ e il passo non cambia niente, ma la formula dà comunque la riga giusta. Se avessi usato $-k$ come pivot avrei dovuto separare il caso $k = 0$.
> $$
> \left[\begin{array}{ccc|c} 1 & k & 1 & 1 \\ 0 & -1 & 1 & 2 \\ 0 & 0 & -1 & 1 - 2k \end{array}\right]
> $$
> **1.** Pivot $1$, $-1$, $-1$: nessuno dipende da $k$, nessuno si annulla mai. Rango $3$ = numero di vettori per ogni $k$: **indipendente per ogni $k \in \mathbb{R}$**. Tre vettori indipendenti di $\mathbb{R}^3$ sono anche una base (T3, tanti vettori quante componenti), e quindi il punto 2 ha sicuramente una soluzione, unica.
>
> **2.** Risalgo, tenendo $k$ come lettera:
> - riga 3: $-\lambda_3 = 1 - 2k$, quindi $\lambda_3 = 2k - 1$;
> - riga 2: $-\lambda_2 + \lambda_3 = 2$, quindi $\lambda_2 = \lambda_3 - 2 = 2k - 3$;
> - riga 1: $\lambda_1 + k\lambda_2 + \lambda_3 = 1$, quindi $\lambda_1 = 1 - k(2k - 3) - (2k - 1) = 1 - 2k^2 + 3k - 2k + 1 = -2k^2 + k + 2$.
> $$
> \vec{v} = (-2k^2 + k + 2)\,\vec{v}_1 + (2k - 3)\,\vec{v}_2 + (2k - 1)\,\vec{v}_3
> $$
> I coefficienti dipendono da $k$, ed è giusto: cambiando $k$ cambiano $\vec{v}_2$ e $\vec{v}_3$, e quindi cambia il modo di arrivare a $\vec{v}$.
>
> **Controllo** componente per componente, con $k$ generico (le componenti di $\vec{v}_1, \vec{v}_2, \vec{v}_3$ sono le righe della matrice di partenza):
> - prima: $0 \cdot \lambda_1 - \lambda_2 + \lambda_3 = -(2k - 3) + (2k - 1) = 2$;
> - seconda: $\lambda_1 + k\lambda_2 + \lambda_3 = (-2k^2 + k + 2) + (2k^2 - 3k) + (2k - 1) = 1$;
> - terza: $\lambda_1 + 0 \cdot \lambda_2 + k\lambda_3 = (-2k^2 + k + 2) + (2k^2 - k) = 2$.
>
> Risultato $(2, 1, 2) = \vec{v}$. E un controllo numerico con $k = 0$: $\vec{v}_1 = (0, 1, 1)$, $\vec{v}_2 = (-1, 0, 0)$, $\vec{v}_3 = (1, 1, 0)$, coefficienti $2, -3, -1$: $2(0, 1, 1) - 3(-1, 0, 0) - (1, 1, 0) = (0 + 3 - 1,\ 2 - 0 - 1,\ 2 - 0 - 0) = (2, 1, 2)$.

### Esercizio 4.19

Si consideri il seguente sottoinsieme di $M_2(\mathbb{R})$:
$$
I = \left\{\begin{pmatrix} a & b \\ 0 & c \end{pmatrix} \mid a, b, c \in \mathbb{R}\right\}
$$

- a) Si verifichi che $I$ è chiuso rispetto al prodotto e alla somma di matrici.
- b) L'insieme $I$ è un sottospazio di $M_2(\mathbb{R})$?

> [!tip]- Indizio
> Il prodotto di matrici non è una delle due operazioni di uno spazio vettoriale. Per b) servono la somma e il prodotto per uno **scalare**.

> [!example]- Soluzione
> **Come si riconosce.** Verifica di sottospazio in uno spazio di matrici (T1, T7), con una trappola: a) chiede la chiusura per un'operazione, il prodotto righe per colonne, che con i sottospazi non c'entra.
>
> $I$ sono le matrici **triangolari superiori** $2 \times 2$: zero sotto la diagonale, tutto il resto libero.
>
> **a)** Prendo due elementi **generici** di $I$ (T1), con lettere diverse:
> $$
> X = \begin{pmatrix} a & b \\ 0 & c \end{pmatrix}, \qquad Y = \begin{pmatrix} a' & b' \\ 0 & c' \end{pmatrix}
> $$
> - **Somma**, elemento per elemento: $X + Y = \begin{pmatrix} a + a' & b + b' \\ 0 + 0 & c + c' \end{pmatrix}$. Il posto $(2, 1)$ vale $0$: sta in $I$.
> - **Prodotto**, righe per colonne. Ogni elemento di $XY$ è (riga di $X$) $\cdot$ (colonna di $Y$):
>   - posto $(1, 1)$: $(a, b) \cdot (a', 0) = aa' + b \cdot 0 = aa'$;
>   - posto $(1, 2)$: $(a, b) \cdot (b', c') = ab' + bc'$;
>   - posto $(2, 1)$: $(0, c) \cdot (a', 0) = 0 \cdot a' + c \cdot 0 = 0$;
>   - posto $(2, 2)$: $(0, c) \cdot (b', c') = 0 \cdot b' + cc' = cc'$.
> $$
> XY = \begin{pmatrix} aa' & ab' + bc' \\ 0 & cc' \end{pmatrix} \in I
> $$
> Il posto $(2, 1)$ è nullo perché ogni addendo contiene uno dei due zeri. Entrambe le chiusure valgono.
>
> **b)** **Sì, è un sottospazio.** Per T1 servono tre cose, e la chiusura per il prodotto di matrici non è fra queste:
> - **$O \in I$**: con $a = b = c = 0$;
> - **(A) somma**: fatta in a);
> - **(B) prodotto per uno scalare** $\lambda \in \mathbb{R}$: $\lambda X = \begin{pmatrix} \lambda a & \lambda b \\ \lambda \cdot 0 & \lambda c \end{pmatrix} = \begin{pmatrix} \lambda a & \lambda b \\ 0 & \lambda c \end{pmatrix} \in I$.
>
> Con la scorciatoia di T1: $I$ è descritto dalla sola condizione $a_{21} = 0$, lineare omogenea sugli elementi. Pensando $M_2(\mathbb{R})$ come $\mathbb{R}^4$ (T7), è come il sottoinsieme delle quaterne con terza componente nulla.
>
> **Perché il foglio chiede il prodotto: le due chiusure sono indipendenti.**
> - Chiuso per il prodotto ma **non** sottospazio: le matrici invertibili. Il prodotto di invertibili è invertibile, ma $O$ non lo è, e $I + (-I) = O$ esce dall'insieme.
> - Sottospazio ma **non** chiuso per il prodotto: le matrici simmetriche ($A^T = A$, condizione lineare $a_{12} = a_{21}$). Però
> $$
> \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}
> $$
> è il prodotto di due simmetriche e non è simmetrica.
>
> Le triangolari superiori hanno tutte e due le proprietà, ma solo la seconda risponde a b).

### Esercizio 4.20

Sia $M_{2,2}(\mathbb{R})$ lo spazio vettoriale delle matrici quadrate $2 \times 2$ a coefficienti reali, e
$$
S = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}
$$

1. Si mostri che $U = \{A \in M_{2,2}(\mathbb{R}) \mid AS = SA\}$ è un sottospazio vettoriale di $M_{2,2}(\mathbb{R})$.
2. Si trovino i valori del parametro reale $k$ per i quali la matrice $\begin{pmatrix} 1 & k - 2 \\ k & 1 \end{pmatrix}$ appartiene ad $U$.
3. Si trovino le matrici non invertibili appartenenti ad $U$, e si mostri che formano un sottospazio vettoriale di $M_{2,2}(\mathbb{R})$.

> [!tip]- Indizio
> Per 1. bastano le proprietà del prodotto (distributiva, scalari che escono). Per 2. e 3. conviene descrivere $U$ in modo esplicito: calcola $AS$ e $SA$ con $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ generica.

> [!example]- Soluzione
> **Come si riconosce.** $U$ è l'insieme delle matrici che **commutano** con $S$, definito da un'uguaglianza fra prodotti: è il secondo caso di T7. Il prodotto di matrici in generale non è commutativo ($AS \neq SA$), quindi $U$ è un pezzo vero di $M_2(\mathbb{R})$.
>
> **1. $U$ è un sottospazio.** Due passi, come in T1.
> - **$O \in U$**: $OS = O$ e $SO = O$, quindi $OS = SO$.
> - **(C)**: siano $A, B \in U$, cioè $AS = SA$ e $BS = SB$, e $\lambda, \mu \in \mathbb{R}$. Devo far vedere che anche $\lambda A + \mu B$ commuta con $S$:
> $$
> (\lambda A + \mu B)S = \lambda AS + \mu BS \qquad \text{distributiva a destra, gli scalari escono}
> $$
> $$
> = \lambda SA + \mu SB \qquad \text{perché } A, B \in U
> $$
> $$
> = S(\lambda A + \mu B) \qquad \text{distributiva a sinistra, letta al contrario}
> $$
> Quindi $\lambda A + \mu B \in U$, e $U$ è un sottospazio. $\square$
>
> Questa dimostrazione non usa gli elementi di $S$: vale per **qualunque** $S$. L'insieme delle matrici che commutano con una matrice fissata è sempre un sottospazio.
>
> **$U$ esplicito.** Per 2. e 3. serve sapere com'è fatto $U$. Con $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ generica, righe per colonne:
> $$
> AS = \begin{pmatrix} a \cdot 1 + b \cdot 0 & a(-2) + b \cdot 1 \\ c \cdot 1 + d \cdot 0 & c(-2) + d \cdot 1 \end{pmatrix} = \begin{pmatrix} a & -2a + b \\ c & -2c + d \end{pmatrix}
> $$
> $$
> SA = \begin{pmatrix} 1 \cdot a - 2c & 1 \cdot b - 2d \\ 0 \cdot a + 1 \cdot c & 0 \cdot b + 1 \cdot d \end{pmatrix} = \begin{pmatrix} a - 2c & b - 2d \\ c & d \end{pmatrix}
> $$
> Due matrici sono uguali se sono uguali elemento per elemento:
> - posto $(1, 1)$: $a = a - 2c$, quindi $2c = 0$, $c = 0$;
> - posto $(1, 2)$: $-2a + b = b - 2d$, quindi $-2a = -2d$, $a = d$;
> - posto $(2, 1)$: $c = c$, sempre vero;
> - posto $(2, 2)$: $-2c + d = d$, quindi di nuovo $c = 0$.
>
> Restano due condizioni, $c = 0$ e $a = d$, mentre $b$ è libero:
> $$
> U = \left\{\begin{pmatrix} a & b \\ 0 & a \end{pmatrix} : a, b \in \mathbb{R}\right\}
> $$
> Le condizioni sono lineari omogenee: è un'altra conferma del punto 1 (T1). Controllo con un elemento: $A = \begin{pmatrix} 2 & 5 \\ 0 & 2 \end{pmatrix}$ dà $AS = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ e $SA = \begin{pmatrix} 2 & 5 - 4 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$, uguali.
>
> **2.** La matrice $\begin{pmatrix} 1 & k - 2 \\ k & 1 \end{pmatrix}$ ha $a = 1$, $b = k - 2$, $c = k$, $d = 1$. Sta in $U$ se e solo se $c = 0$ e $a = d$: $k = 0$ e $1 = 1$. **Solo $k = 0$.** Controllo: per $k = 0$ la matrice è $\begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix} = S$, che commuta con sé stessa ($SS = SS$).
>
> **3. Le non invertibili di $U$.** Una matrice quadrata è invertibile se e solo se ha rango massimo, qui $2$ ([Matrici invertibili](/uni/gal/matrici-invertibili/)). Le matrici di $U$ sono già triangolari, quindi il rango si legge:
> - $a \neq 0$: $\begin{pmatrix} a & b \\ 0 & a \end{pmatrix}$ è a scalini con due pivot ($a$ e $a$), rango $2$, **invertibile**;
> - $a = 0$: $\begin{pmatrix} 0 & b \\ 0 & 0 \end{pmatrix}$ ha al più un pivot ($b$, se $b \neq 0$), rango $\leq 1$, **non invertibile**.
>
> Quindi le non invertibili di $U$ sono
> $$
> W = \left\{\begin{pmatrix} 0 & b \\ 0 & 0 \end{pmatrix} : b \in \mathbb{R}\right\}
> $$
> **$W$ è un sottospazio** (T1): contiene $O$ (con $b = 0$), e per due elementi generici
> $$
> \lambda\begin{pmatrix} 0 & b \\ 0 & 0 \end{pmatrix} + \mu\begin{pmatrix} 0 & b' \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & \lambda b + \mu b' \\ 0 & 0 \end{pmatrix} \in W
> $$
>
> **Perché è un fatto speciale.** In tutto $M_2(\mathbb{R})$ le non invertibili **non** sono un sottospazio: $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ hanno rango $1$, ma la loro somma è $I$, invertibile. Dentro $U$ invece "non invertibile" vuol dire solo $a = 0$, una condizione lineare omogenea, e il problema sparisce.

### Esercizio 4.21

Siano $M$ e $N$ due matrici nello spazio $M_2(\mathbb{R})$ e sia $U$ il sottoinsieme di $M_2(\mathbb{R})$ così definito:
$$
U = \{A \in M_2(\mathbb{R}) \mid MA = NA\}
$$
Si mostri che $U$ è un sottospazio di $M_2(\mathbb{R})$.

> [!tip]- Indizio
> $M$ e $N$ non sono date: non si può fare il conto con gli elementi. Ripeti la dimostrazione del punto 1 di 4.20, con la distributiva.

> [!example]- Soluzione
> **Come si riconosce.** Come il punto 1 di 4.20: un sottospazio definito da un'uguaglianza fra prodotti in cui $A$ compare linearmente (T7). Qui $M$ e $N$ sono qualsiasi, quindi l'unica strada è la dimostrazione con le proprietà del prodotto.
>
> **Non vuoto**: $MO = O$ e $NO = O$, quindi $MO = NO$ e $O \in U$.
>
> **(C)**: siano $A, B \in U$, cioè $MA = NA$ e $MB = NB$, e $\lambda, \mu \in \mathbb{R}$.
> $$
> M(\lambda A + \mu B) = \lambda MA + \mu MB \qquad \text{distributiva, gli scalari escono}
> $$
> $$
> = \lambda NA + \mu NB \qquad \text{perché } A, B \in U
> $$
> $$
> = N(\lambda A + \mu B) \qquad \text{distributiva, letta al contrario}
> $$
> quindi $\lambda A + \mu B \in U$. $\square$
>
> **Un altro modo di vederlo.** $MA = NA$ equivale a $MA - NA = O$, cioè $(M - N)A = O$ (distributiva). Con $C = M - N$:
> $$
> U = \{A : CA = O\}
> $$
> Il prodotto $CA$ si fa colonna per colonna: la colonna $j$ di $CA$ è $C$ per la colonna $j$ di $A$. Quindi $CA = O$ vuol dire che ogni colonna di $A$ sta nel nucleo $N(C)$, che è un sottospazio di $\mathbb{R}^2$. Combinando due matrici di $U$, le colonne si combinano e restano nel nucleo.
>
> **Esempi estremi**, per controllare che il risultato abbia senso:
> - $M = I$, $N = O$: $C = I$, e $IA = O$ solo per $A = O$. $U = \{O\}$, il sottospazio più piccolo.
> - $M = N$: $C = O$, e $OA = O$ per ogni $A$. $U = M_2(\mathbb{R})$, il più grande.
>
> **Perché la linearità conta.** Con $U' = \{A : A^2 = A\}$ (dove $A$ compare due volte) la dimostrazione non funziona più: $I \in U'$ ma $2I \notin U'$, perché $(2I)^2 = 4I \neq 2I$. Non è un sottospazio.

## Errori tipici

- Confondere "chiuso rispetto al prodotto di matrici" con "chiuso rispetto al prodotto per scalare" (4.19): per un sottospazio serve il secondo.
- Rispondere "sì" alla domanda 4.3 senza distinguere: le soluzioni di un sistema compatibile sono un sottospazio solo se il sistema è omogeneo.
- In 4.14 b), fermarsi a $k = -2$ dimenticando $k = 0$: quando il rango della matrice dei coefficienti scende, la compatibilità va ricontrollata sostituendo il valore.
- In 4.16, scrivere $\vec{v}_1$ come combinazione di $\vec{v}_2, \vec{v}_3$ "perché sono dipendenti": il coefficiente di $\vec{v}_1$ nella relazione è $0$, e non si può.
- Confrontare il rango con il numero sbagliato: $n$ (righe) per i generatori, $k$ (colonne) per l'indipendenza.
- Dimostrare che un insieme è un sottospazio con un esempio numerico (4.20, 4.21): servono matrici generiche.
- Leggere i coefficienti da una forma a scalini non ridotta, o non verificarli: in 4.17 la verifica moltiplicata per $10$ evita le frazioni.
- Dividere per un pivot che contiene il parametro senza separare il caso in cui vale $0$ (4.14, 4.18): si moltiplica, non si divide, e i valori critici si sostituiscono a mano.
- Mettere i vettori in riga invece che in colonna, e poi confrontare il rango con il numero sbagliato.
- Prendere alla lettera i refusi del foglio: in 4.13 $U$ è $\{(x, y, z) : x + z = 0\}$, in 4.16 il secondo punto chiede $\vec{v}_2$ in funzione di $\vec{v}_1$ e $\vec{v}_3$.

## Domande

- Quando le soluzioni di un sistema lineare compatibile formano un sottospazio di $\mathbb{R}^n$? Perché?

- Perché il numero minimo di generatori di $\mathbb{R}_3[x]$ è $4$? Che cosa c'entra la proposizione (a)?

- In un esercizio con $\vec{v}_1, \ldots, \vec{v}_4$ e un parametro, come si rispondono con una sola riduzione le domande "indipendenti?", “$\vec{v}_4$ nello Span?", "generano?"?

- Perché gli elementi di una colonna senza pivot di $\operatorname{rref}(A)$ danno i coefficienti della relazione fra i vettori di partenza?

- In un insieme dipendente, quando un vettore **non** si può scrivere come combinazione degli altri?

- Le matrici triangolari superiori sono chiuse per il prodotto di matrici. Basta questo per dire che sono un sottospazio di $M_2(\mathbb{R})$?

- Come si dimostra che $\{A : MA = NA\}$ o $\{A : AS = SA\}$ è un sottospazio di $M_2(\mathbb{R})$?

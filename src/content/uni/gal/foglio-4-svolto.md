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

Come usarla: prova da solo, apri l'**indizio** se ti blocchi, la **soluzione** solo alla fine. Ogni conto è stato ricontrollato.

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

## Esercizi

### Esercizio 4.12

Si descriva il sottospazio generato dalle ennuple
$$
\vec{v}_1 = (1, 2, 0, 1, 1), \qquad \vec{v}_2 = (2, 0, 0, 1, 3)
$$
come insieme delle soluzioni di un sistema omogeneo.

> [!tip]- Indizio
> È la procedura della prof del 19/10: $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{x}]$ con $\vec{x} = (x_1, \ldots, x_5)$, Gauss, e una equazione per ogni riga nulla a sinistra. Quante te ne aspetti?

> [!example]- Soluzione
> **Tipo**: Span come insieme delle soluzioni di un sistema omogeneo. Due vettori non paralleli in $\mathbb{R}^5$: rango $2$, quindi $5 - 2 = 3$ equazioni.
> $$
> \left[\begin{array}{cc|c} 1 & 2 & x_1 \\ 2 & 0 & x_2 \\ 0 & 0 & x_3 \\ 1 & 1 & x_4 \\ 1 & 3 & x_5 \end{array}\right]
> $$
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0, -4 \mid x_2 - 2x_1)$;
> - $E_{41}(-1)$: $R_4 - R_1 = (0, -1 \mid x_4 - x_1)$;
> - $E_{51}(-1)$: $R_5 - R_1 = (0, 1 \mid x_5 - x_1)$;
> - $S_{24}$: porto in seconda posizione la riga con $-1$, per non avere frazioni;
> - $E_{42}(-4)$: $R_4 - 4R_2 = (0,\ -4 + 4 \mid x_2 - 2x_1 - 4(x_4 - x_1)) = (0, 0 \mid 2x_1 + x_2 - 4x_4)$;
> - $E_{52}(1)$: $R_5 + R_2 = (0,\ 1 - 1 \mid x_5 - x_1 + x_4 - x_1) = (0, 0 \mid -2x_1 + x_4 + x_5)$.
> $$
> \left[\begin{array}{cc|c} 1 & 2 & x_1 \\ 0 & -1 & -x_1 + x_4 \\ 0 & 0 & x_3 \\ 0 & 0 & 2x_1 + x_2 - 4x_4 \\ 0 & 0 & -2x_1 + x_4 + x_5 \end{array}\right]
> $$
> Rango $2$; le tre righe nulle a sinistra danno le condizioni:
> $$
> \mathrm{Span}(\vec{v}_1, \vec{v}_2) = \left\{\vec{x} \in \mathbb{R}^5 : \begin{cases} x_3 = 0 \\ 2x_1 + x_2 - 4x_4 = 0 \\ 2x_1 - x_4 - x_5 = 0 \end{cases}\right\}
> $$
> (l'ultima moltiplicata per $-1$).
>
> **Verifica.** $\vec{v}_1 = (1, 2, 0, 1, 1)$: $0$; $2 + 2 - 4 = 0$; $2 - 1 - 1 = 0$. $\vec{v}_2 = (2, 0, 0, 1, 3)$: $0$; $4 + 0 - 4 = 0$; $4 - 1 - 3 = 0$. Il sistema non è unico: combinando le equazioni se ne ottengono altri equivalenti, con le stesse soluzioni.

### Esercizio 4.13

Siano $U$ e $V$ i sottospazi di $\mathbb{R}^3$ così definiti:
$$
U = \{(x, y, z) \in \mathbb{R}^3 \mid x + z = 0\}, \qquad V = \langle (2, -1, -2), (-3, 4, 3) \rangle
$$
Dimostrare che $U = V$. (Nel testo del foglio $U$ è scritto “$(x, y, x$": è un refuso per $(x, y, z)$.)

> [!tip]- Indizio
> $U$ è dato con un'equazione, $V$ con dei generatori. Porta $V$ nella stessa forma con la procedura della prof e confronta. In alternativa: due inclusioni.

> [!example]- Soluzione
> **Tipo**: confronto fra un sottospazio dato da equazioni e uno dato da generatori. Scrivo $V$ come insieme delle soluzioni di un sistema omogeneo.
> $$
> \left[\begin{array}{cc|c} 2 & -3 & x \\ -1 & 4 & y \\ -2 & 3 & z \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{cc|c} -1 & 4 & y \\ 2 & -3 & x \\ -2 & 3 & z \end{array}\right]
> $$
> - $E_{21}(2)$: $R_2 + 2R_1 = (0,\ -3 + 8 \mid x + 2y) = (0, 5 \mid x + 2y)$;
> - $E_{31}(-2)$: $R_3 - 2R_1 = (0,\ 3 - 8 \mid z - 2y) = (0, -5 \mid z - 2y)$;
> - $E_{32}(1)$: $R_3 + R_2 = (0, 0 \mid x + z)$.
> $$
> \left[\begin{array}{cc|c} -1 & 4 & y \\ 0 & 5 & x + 2y \\ 0 & 0 & x + z \end{array}\right]
> $$
> Rango $2$, una riga nulla: $(x, y, z) \in V$ se e solo se $x + z = 0$. Quindi
> $$
> V = \{(x, y, z) : x + z = 0\} = U \qquad \square
> $$
> **Per controllo, con le due inclusioni.**
> - $V \subseteq U$: i generatori stanno in $U$ ($2 + (-2) = 0$, $-3 + 3 = 0$) e $U$ è un sottospazio, quindi contiene le loro combinazioni.
> - $U \subseteq V$: un elemento di $U$ è $(x, y, -x)$. Lo cerco come $a(2, -1, -2) + b(-3, 4, 3)$: dalla prima e seconda componente $2a - 3b = x$, $-a + 4b = y$, cioè $a = \frac{4x + 3y}{5}$, $b = \frac{x + 2y}{5}$; la terza, $-2a + 3b = -\frac{8x + 6y}{5} + \frac{3x + 6y}{5} = -x$, torna. Con $x = 1$, $y = 0$: $\frac45(2, -1, -2) + \frac15(-3, 4, 3) = \left(\frac{8 - 3}{5}, \frac{-4 + 4}{5}, \frac{-8 + 3}{5}\right) = (1, 0, -1)$.

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
> **Tipo**: indipendenza, appartenenza e generatori con parametro, tutto con lo stesso Gauss.
> $$
> \begin{pmatrix} 1 & 0 & -1 & 4 \\ 2 & -1 & 0 & k + 2 \\ -2 & 1 & k & -2 \\ -3 & 2 & -1 & k^2 \end{pmatrix}
> $$
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ -1,\ 2,\ k + 2 - 8) = (0, -1, 2, k - 6)$;
> - $E_{31}(2)$: $R_3 + 2R_1 = (0,\ 1,\ k - 2,\ -2 + 8) = (0, 1, k - 2, 6)$;
> - $E_{41}(3)$: $R_4 + 3R_1 = (0,\ 2,\ -1 - 3,\ k^2 + 12) = (0, 2, -4, k^2 + 12)$;
> - $E_{32}(1)$: $R_3 + R_2 = (0,\ 0,\ k - 2 + 2,\ 6 + k - 6) = (0, 0, k, k)$;
> - $E_{42}(2)$: $R_4 + 2R_2 = (0,\ 0,\ -4 + 4,\ k^2 + 12 + 2k - 12) = (0, 0, 0, k^2 + 2k)$.
> $$
> \begin{pmatrix} 1 & 0 & -1 & 4 \\ 0 & -1 & 2 & k - 6 \\ 0 & 0 & k & k \\ 0 & 0 & 0 & k(k + 2) \end{pmatrix}
> $$
> Pivot usati $1$ e $-1$: nessuna divisione per espressioni in $k$.
>
> **a)** Prime tre colonne: pivot $1$, $-1$, $k$. **Indipendente se e solo se $k \neq 0$.** Per $k = 0$ rango $2$; la relazione: $D_2(-1)$ dà $(0, 1, -2)$, e la colonna 3 della forma ridotta è $(-1, -2)$, quindi $\vec{v}_3 = -\vec{v}_1 - 2\vec{v}_2$. Verifica: $-(1, 2, -2, -3) - 2(0, -1, 1, 2) = (-1,\ -2 + 2,\ 2 - 2,\ 3 - 4) = (-1, 0, 0, -1)$, che è $\vec{v}_3$ con $k = 0$.
>
> **b)** Rouché-Capelli con $A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3]$ e termine noto $\vec{v}_4$.
> - $k \neq 0$: $\operatorname{rg}(A) = 3$. La completa ha rango $3$ solo se la quarta riga è nulla, $k(k + 2) = 0$, cioè (con $k \neq 0$) $k = -2$.
> - $k = 0$: la matrice diventa $\begin{pmatrix} 1 & 0 & -1 & 4 \\ 0 & -1 & 2 & -6 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$: $\operatorname{rg}(A) = 2 = \operatorname{rg}(A \mid \vec{v}_4)$, compatibile.
>
> **$\vec{v}_4 \in \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ se e solo se $k = 0$ oppure $k = -2$.** Coefficienti:
> - $k = -2$: $-2\lambda_3 = -2$, quindi $\lambda_3 = 1$; $-\lambda_2 + 2 = -8$, quindi $\lambda_2 = 10$; $\lambda_1 - 1 = 4$, quindi $\lambda_1 = 5$. Verifica: $5(1, 2, -2, -3) + 10(0, -1, 1, 2) + (-1, 0, -2, -1) = (4, 0, -2, 4) = \vec{v}_4$ con $k = -2$.
> - $k = 0$: $\lambda_3 = t$ libero, $\lambda_2 = 6 + 2t$, $\lambda_1 = 4 + t$; con $t = 0$, $\vec{v}_4 = 4\vec{v}_1 + 6\vec{v}_2 = (4, 8 - 6, -8 + 6, -12 + 12) = (4, 2, -2, 0)$, che è $\vec{v}_4$ con $k = 0$. Coefficienti non unici: per $k = 0$ i tre vettori sono dipendenti.
>
> **c)** Quattro vettori di $\mathbb{R}^4$: generano se e solo se la matrice intera ha rango $4$. Pivot $1$, $-1$, $k$ (colonna 3) e $k(k + 2)$ (colonna 4).
> - $k \neq 0, -2$: quattro pivot, **generano $\mathbb{R}^4$**.
> - $k = -2$: terza riga $(0, 0, -2, -2)$, quarta nulla: rango $3$, non generano.
> - $k = 0$: due righe nulle, rango $2$, non generano.
>
> **$\{\vec{v}_1, \ldots, \vec{v}_4\}$ genera $\mathbb{R}^4$ se e solo se $k \neq 0$ e $k \neq -2$.** È esattamente il complementare di b): quando $\vec{v}_4$ sta nello Span dei primi tre, i quattro generano al più quello che generano i primi tre, cioè al massimo uno spazio di rango $3$.

### Esercizio 4.15

Dati
$$
\vec{v}_1 = (1, 0, 1, 1, 1), \quad \vec{v}_2 = (-2, 2, 0, 0, 1), \quad \vec{v}_3 = (1, 0, k, 0, 1)
$$
dove $k \in \mathbb{R}$, determinare per quali valori di $k$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è linearmente indipendente.

> [!tip]- Indizio
> Prima di fare Gauss guarda le componenti in cui compaiono pochi vettori: la seconda e la quarta.

> [!example]- Soluzione
> **Tipo**: indipendenza con parametro. Il parametro sta in un solo posto: prima di ridurre, conviene guardare la definizione.
>
> **Con la definizione.** $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 = \vec{0}$, componente per componente:
> $$
> (\lambda_1 - 2\lambda_2 + \lambda_3,\ 2\lambda_2,\ \lambda_1 + k\lambda_3,\ \lambda_1,\ \lambda_1 + \lambda_2 + \lambda_3) = (0, 0, 0, 0, 0)
> $$
> - seconda componente: $2\lambda_2 = 0$, quindi $\lambda_2 = 0$;
> - quarta componente: $\lambda_1 = 0$;
> - prima componente: $0 - 0 + \lambda_3 = 0$, quindi $\lambda_3 = 0$.
>
> Solo la soluzione nulla, **per ogni $k$**: l'insieme è **linearmente indipendente per ogni $k \in \mathbb{R}$**. Il $k$ compare solo nella terza componente, che non è servita.
>
> **Con il rango, per controllo.** $A$ ha righe $(1, -2, 1)$, $(0, 2, 0)$, $(1, 0, k)$, $(1, 0, 0)$, $(1, 1, 1)$.
> - $E_{31}(-1)$, $E_{41}(-1)$, $E_{51}(-1)$: righe $(0, 2, k - 1)$, $(0, 2, -1)$, $(0, 3, 0)$;
> - $S_{34}$: porto su $(0, 2, -1)$, senza parametro;
> - $E_{32}(-1)$: $(0, 0, -1)$; $E_{42}(-1)$: $(0, 0, k - 1)$; $E_{52}(-\frac32)$: $(0, 0, 0)$;
> - $E_{43}(k - 1)$: $R_4 + (k - 1)R_3 = (0, 0, k - 1 - (k - 1)) = (0, 0, 0)$.
>
> Pivot $1$, $2$, $-1$, nessuno con $k$: rango $3$, pari al numero di vettori, per ogni valore del parametro.

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
> **Tipo**: dipendenza e relazione dalla forma ridotta.
> $$
> A = \begin{pmatrix} 1 & 2 & -4 \\ -3 & -1 & 2 \\ 7 & -1 & 2 \end{pmatrix}
> $$
> - $E_{21}(3)$: $R_2 + 3R_1 = (-3 + 3,\ -1 + 6,\ 2 - 12) = (0, 5, -10)$;
> - $E_{31}(-7)$: $R_3 - 7R_1 = (7 - 7,\ -1 - 14,\ 2 + 28) = (0, -15, 30)$;
> - $E_{32}(3)$: $R_3 + 3R_2 = (0, 0, 0)$;
> - $D_2(\frac15)$: $(0, 1, -2)$; $E_{12}(-2)$: $R_1 - 2R_2 = (1, 0, 0)$.
> $$
> \operatorname{rref}(A) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & -2 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> Rango $2 < 3$: **dipendente**. Colonna 3 senza pivot, elementi $0, -2$: $\vec{v}_3 = 0 \cdot \vec{v}_1 - 2\vec{v}_2$. Infatti $-2(2, -1, -1) = (-4, 2, 2)$.
>
> - **$\vec{v}_1$ come combinazione di $\vec{v}_2$ e $\vec{v}_3$: non è possibile.** $\vec{v}_3 = -2\vec{v}_2$, quindi $\mathrm{Span}(\vec{v}_2, \vec{v}_3) = \mathrm{Span}(\vec{v}_2)$, la retta dei multipli di $(2, -1, -1)$. $\vec{v}_1 = a(2, -1, -1)$ chiederebbe $2a = 1$ e $-a = -3$, cioè $a = \frac12$ e $a = 3$: contraddizione.
> - **$\vec{v}_2 = 0 \cdot \vec{v}_1 - \frac12\vec{v}_3$.** Verifica: $-\frac12(-4, 2, 2) = (2, -1, -1)$. I coefficienti sono unici, perché $\{\vec{v}_1, \vec{v}_3\}$ è indipendente (non paralleli).
> - **$\vec{v}_3 = 0 \cdot \vec{v}_1 - 2\vec{v}_2$**, letto dalla forma ridotta; unici, perché $\{\vec{v}_1, \vec{v}_2\}$ è indipendente (le colonne coi pivot).
>
> Il punto dell'esercizio: nella relazione $0 \cdot \vec{v}_1 - 2\vec{v}_2 - \vec{v}_3 = \vec{0}$ il coefficiente di $\vec{v}_1$ è $0$, e infatti $\vec{v}_1$ è l'unico dei tre che non si può ricavare dagli altri.

### Esercizio 4.17

In $\mathbb{R}^3$ siano dati
$$
\vec{v}_1 = (2, 1, 1), \quad \vec{v}_2 = (-1, 1, 2), \quad \vec{v}_3 = (3, -2, -1), \quad \vec{v}_4 = (4, -1, -2)
$$
Stabilire se $\vec{v}_4$ è combinazione lineare di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.

> [!example]- Soluzione
> **Tipo**: appartenenza a uno Span: $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3 \mid \vec{v}_4]$ e Rouché-Capelli.
> $$
> \left[\begin{array}{ccc|c} 2 & -1 & 3 & 4 \\ 1 & 1 & -2 & -1 \\ 1 & 2 & -1 & -2 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & 1 & -2 & -1 \\ 2 & -1 & 3 & 4 \\ 1 & 2 & -1 & -2 \end{array}\right]
> $$
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ -3,\ 7 \mid 6)$;
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ 1,\ 1 \mid -1)$;
> - $S_{23}$: porto su la riga con pivot $1$;
> - $E_{32}(3)$: $R_3 + 3R_2 = (0,\ 0,\ 7 + 3 \mid 6 - 3) = (0, 0, 10 \mid 3)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & -2 & -1 \\ 0 & 1 & 1 & -1 \\ 0 & 0 & 10 & 3 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 3 = \operatorname{rg}(A \mid \vec{v}_4)$: compatibile, **sì**. Di più: $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ ha rango $3$, è una base di $\mathbb{R}^3$, e quindi **ogni** vettore di $\mathbb{R}^3$ ne è combinazione, in modo unico.
>
> Coefficienti, risalendo: $10\lambda_3 = 3$, $\lambda_3 = \frac{3}{10}$; $\lambda_2 = -1 - \lambda_3 = -\frac{13}{10}$; $\lambda_1 = -1 - \lambda_2 + 2\lambda_3 = -1 + \frac{13}{10} + \frac{6}{10} = \frac{9}{10}$.
> $$
> \vec{v}_4 = \frac{9}{10}\vec{v}_1 - \frac{13}{10}\vec{v}_2 + \frac{3}{10}\vec{v}_3
> $$
> **Verifica** (moltiplico per $10$): $9(2, 1, 1) - 13(-1, 1, 2) + 3(3, -2, -1) = (18 + 13 + 9,\ 9 - 13 - 6,\ 9 - 26 - 3) = (40, -10, -20) = 10\vec{v}_4$.

### Esercizio 4.18

1. Date le terne $\vec{v}_1 = (0, 1, 1)$, $\vec{v}_2 = (-1, k, 0)$, $\vec{v}_3 = (1, 1, k)$, mostrare che $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è un insieme linearmente indipendente per qualsiasi valore di $k \in \mathbb{R}$.
2. Esprimere $\vec{v} = (2, 1, 2)$ come combinazione lineare di $\vec{v}_1, \vec{v}_2, \vec{v}_3$.

> [!tip]- Indizio
> La prima riga di $A$ comincia con $0$: scambia. Se i pivot che escono non dipendono da $k$, il punto 1 è fatto; il punto 2 viene dalla stessa riduzione con $\vec{v}$ in fondo.

> [!example]- Soluzione
> **Tipo**: indipendenza con parametro e coefficienti con parametro, con una sola riduzione.
> $$
> \left[\begin{array}{ccc|c} 0 & -1 & 1 & 2 \\ 1 & k & 1 & 1 \\ 1 & 0 & k & 2 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & k & 1 & 1 \\ 0 & -1 & 1 & 2 \\ 1 & 0 & k & 2 \end{array}\right]
> $$
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ -k,\ k - 1 \mid 1)$;
> - $E_{32}(-k)$: $R_3 - kR_2 = (0,\ -k + k,\ k - 1 - k \mid 1 - 2k) = (0, 0, -1 \mid 1 - 2k)$. Se $k = 0$ il passo non serve e la formula dà la stessa riga.
> $$
> \left[\begin{array}{ccc|c} 1 & k & 1 & 1 \\ 0 & -1 & 1 & 2 \\ 0 & 0 & -1 & 1 - 2k \end{array}\right]
> $$
> **1.** Pivot $1$, $-1$, $-1$: nessuno dipende da $k$. Rango $3$ per ogni $k$: **indipendente per ogni $k \in \mathbb{R}$** (ed è una base di $\mathbb{R}^3$).
>
> **2.** Risalgo:
> - $-\lambda_3 = 1 - 2k$, quindi $\lambda_3 = 2k - 1$;
> - $-\lambda_2 + \lambda_3 = 2$, quindi $\lambda_2 = \lambda_3 - 2 = 2k - 3$;
> - $\lambda_1 + k\lambda_2 + \lambda_3 = 1$, quindi $\lambda_1 = 1 - k(2k - 3) - (2k - 1) = 1 - 2k^2 + 3k - 2k + 1 = -2k^2 + k + 2$.
>
> $$
> \vec{v} = (-2k^2 + k + 2)\,\vec{v}_1 + (2k - 3)\,\vec{v}_2 + (2k - 1)\,\vec{v}_3
> $$
> **Verifica** componente per componente:
> - prima: $0 \cdot \lambda_1 - \lambda_2 + \lambda_3 = -(2k - 3) + (2k - 1) = 2$;
> - seconda: $\lambda_1 + k\lambda_2 + \lambda_3 = (-2k^2 + k + 2) + (2k^2 - 3k) + (2k - 1) = 1$;
> - terza: $\lambda_1 + k\lambda_3 = -2k^2 + k + 2 + 2k^2 - k = 2$.
>
> Con $k = 0$: $2\vec{v}_1 - 3\vec{v}_2 - \vec{v}_3 = (0, 2, 2) + (3, 0, 0) - (1, 1, 0) = (2, 1, 2)$.

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
> $I$ sono le matrici **triangolari superiori** $2 \times 2$ (zero sotto la diagonale).
>
> **a)** Siano $X = \begin{pmatrix} a & b \\ 0 & c \end{pmatrix}$, $Y = \begin{pmatrix} a' & b' \\ 0 & c' \end{pmatrix} \in I$.
> - **Somma**: $X + Y = \begin{pmatrix} a + a' & b + b' \\ 0 & c + c' \end{pmatrix}$, posto $(2, 1)$ uguale a $0 + 0 = 0$: sta in $I$.
> - **Prodotto**: righe per colonne,
> $$
> XY = \begin{pmatrix} aa' + b \cdot 0 & ab' + bc' \\ 0 \cdot a' + c \cdot 0 & 0 \cdot b' + cc' \end{pmatrix} = \begin{pmatrix} aa' & ab' + bc' \\ 0 & cc' \end{pmatrix} \in I
> $$
>
> **b)** **Sì.** Per essere un sottospazio servono: non vuoto, (A) chiusura per somma (fatta in a)), (B) chiusura per prodotto per scalare. La (B): $\lambda X = \begin{pmatrix} \lambda a & \lambda b \\ 0 & \lambda c \end{pmatrix} \in I$. Non vuoto: $O \in I$ ($a = b = c = 0$). Quindi $I$ è un sottospazio.
>
> La chiusura rispetto al prodotto di matrici di a) è un'informazione in più, che per essere sottospazio non serve: il foglio la chiede per far vedere la differenza fra le due cose. (Si vede anche dalla forma: $I$ è descritto dalla sola condizione lineare omogenea $a_{21} = 0$.)

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
> **1.** $O \in U$, perché $OS = O = SO$. Siano $A, B \in U$ ($AS = SA$, $BS = SB$) e $\lambda, \mu \in \mathbb{R}$:
> $$
> (\lambda A + \mu B)S = \lambda AS + \mu BS \qquad \text{distributiva, gli scalari escono}
> $$
> $$
> = \lambda SA + \mu SB \qquad A, B \in U
> $$
> $$
> = S(\lambda A + \mu B) \qquad \text{distributiva a sinistra}
> $$
> Vale la (C): $U$ è un sottospazio. $\square$
>
> **$U$ esplicito.** Con $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
> $$
> AS = \begin{pmatrix} a & -2a + b \\ c & -2c + d \end{pmatrix}, \qquad SA = \begin{pmatrix} a - 2c & b - 2d \\ c & d \end{pmatrix}
> $$
> Uguagliando elemento per elemento:
> - posto $(1, 1)$: $a = a - 2c$, quindi $c = 0$;
> - posto $(1, 2)$: $-2a + b = b - 2d$, quindi $a = d$;
> - posto $(2, 1)$: $c = c$, sempre vero;
> - posto $(2, 2)$: $-2c + d = d$, di nuovo $c = 0$.
>
> $$
> U = \left\{\begin{pmatrix} a & b \\ 0 & a \end{pmatrix} : a, b \in \mathbb{R}\right\}
> $$
> **2.** $\begin{pmatrix} 1 & k - 2 \\ k & 1 \end{pmatrix} \in U$ se e solo se l'elemento in basso a sinistra è $0$ e i due sulla diagonale sono uguali: $k = 0$ e $1 = 1$. **$k = 0$.** Verifica: per $k = 0$ la matrice è $\begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix} = S$, che commuta con sé stessa.
>
> **3.** Una matrice $\begin{pmatrix} a & b \\ 0 & a \end{pmatrix}$ di $U$ è invertibile se e solo se ha rango $2$ ([Matrici invertibili](/uni/gal/matrici-invertibili/)).
> - $a \neq 0$: è già a scalini con pivot $a$ e $a$, rango $2$, invertibile.
> - $a = 0$: $\begin{pmatrix} 0 & b \\ 0 & 0 \end{pmatrix}$ ha al più un pivot, rango $\leq 1$, non invertibile.
>
> Le non invertibili di $U$ sono $W = \left\{\begin{pmatrix} 0 & b \\ 0 & 0 \end{pmatrix} : b \in \mathbb{R}\right\}$. **$W$ è un sottospazio**: contiene $O$ ($b = 0$), e
> $$
> \lambda\begin{pmatrix} 0 & b \\ 0 & 0 \end{pmatrix} + \mu\begin{pmatrix} 0 & b' \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & \lambda b + \mu b' \\ 0 & 0 \end{pmatrix} \in W
> $$
> È un fatto speciale di questo $U$: in tutto $M_2(\mathbb{R})$ le matrici non invertibili **non** formano un sottospazio, perché $A_1 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $A_4 = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ non sono invertibili ma $A_1 + A_4 = I$ sì.

### Esercizio 4.21

Siano $M$ e $N$ due matrici nello spazio $M_2(\mathbb{R})$ e sia $U$ il sottoinsieme di $M_2(\mathbb{R})$ così definito:
$$
U = \{A \in M_2(\mathbb{R}) \mid MA = NA\}
$$
Si mostri che $U$ è un sottospazio di $M_2(\mathbb{R})$.

> [!example]- Soluzione
> **Tipo**: sottospazio definito da un'equazione matriciale "lineare in $A$": si dimostra la (C) con le proprietà del prodotto, come in 4.20.
>
> **Non vuoto**: $MO = O = NO$, quindi $O \in U$.
>
> **(C)**: siano $A, B \in U$ ($MA = NA$, $MB = NB$) e $\lambda, \mu \in \mathbb{R}$.
> $$
> M(\lambda A + \mu B) = \lambda MA + \mu MB \qquad \text{distributiva, gli scalari escono}
> $$
> $$
> = \lambda NA + \mu NB \qquad A, B \in U
> $$
> $$
> = N(\lambda A + \mu B) \qquad \text{distributiva, letta al contrario}
> $$
> quindi $\lambda A + \mu B \in U$. $\square$
>
> **Un altro modo di vederlo**: $MA = NA \iff (M - N)A = O$. Con $C = M - N$, $U$ è l'insieme delle $A$ con $CA = O$: le colonne di $A$ devono stare nel nucleo di $C$, che è un sottospazio. Esempio: $M = I$, $N = O$ dà $U = \{A : A = O\} = \{O\}$; $M = N$ dà $U = M_2(\mathbb{R})$. Sono i due sottospazi estremi.

## Errori tipici

- Confondere "chiuso rispetto al prodotto di matrici" con "chiuso rispetto al prodotto per scalare" (4.19): per un sottospazio serve il secondo.
- Rispondere "sì" alla domanda 4.3 senza distinguere: le soluzioni di un sistema compatibile sono un sottospazio solo se il sistema è omogeneo.
- In 4.14 b), fermarsi a $k = -2$ dimenticando $k = 0$: quando il rango della matrice dei coefficienti scende, la compatibilità va ricontrollata sostituendo il valore.
- In 4.16, scrivere $\vec{v}_1$ come combinazione di $\vec{v}_2, \vec{v}_3$ "perché sono dipendenti": il coefficiente di $\vec{v}_1$ nella relazione è $0$, e non si può.
- Confrontare il rango con il numero sbagliato: $n$ (righe) per i generatori, $k$ (colonne) per l'indipendenza.
- Dimostrare che un insieme è un sottospazio con un esempio numerico (4.20, 4.21): servono matrici generiche.
- Leggere i coefficienti da una forma a scalini non ridotta, o non verificarli: in 4.17 la verifica moltiplicata per $10$ evita le frazioni.
- Prendere alla lettera i refusi del foglio: in 4.13 $U$ è $\{(x, y, z) : x + z = 0\}$, in 4.16 il secondo punto chiede $\vec{v}_2$ in funzione di $\vec{v}_1$ e $\vec{v}_3$.

## Domande

- Quando le soluzioni di un sistema lineare compatibile formano un sottospazio di $\mathbb{R}^n$? Perché?

- Perché il numero minimo di generatori di $\mathbb{R}_3[x]$ è $4$? Che cosa c'entra la proposizione (a)?

- In un esercizio con $\vec{v}_1, \ldots, \vec{v}_4$ e un parametro, come si rispondono con una sola riduzione le domande "indipendenti?", “$\vec{v}_4$ nello Span?", "generano?"?

- Le matrici triangolari superiori sono chiuse per il prodotto di matrici. Basta questo per dire che sono un sottospazio di $M_2(\mathbb{R})$?

- Come si dimostra che $\{A : MA = NA\}$ o $\{A : AS = SA\}$ è un sottospazio di $M_2(\mathbb{R})$?

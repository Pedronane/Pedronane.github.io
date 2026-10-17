---
title: Simulazione provetta 3
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: simulazione
stato: completa
data: 2026-10-17
lezioni: []
ordine: 999
durata: 90
---

Terza simulazione della prova intermedia di [Geometria e Algebra Lineare](/uni/gal/) del 5/11, stessa forma della [prima](/uni/simulazioni/gal/simulazione-provetta-1/) e della [seconda](/uni/simulazioni/gal/simulazione-provetta-2/). L'esercizio 2 è un sottospazio di $\mathbb{R}^4$ con parametro e usa solo nucleo e generatori ([Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/), [Generatori](/uni/gal/generatori/)): niente dipendenza lineare, si può fare già adesso.

> [!info] Regole
> - **90 minuti**, niente appunti, niente calcolatrice.
> - Punteggio: esercizi 6 + 6, domande 1,5 + 1,5, totale 15.

## Testo

### Esercizio 1

Sia $r$ la retta passante per i punti $A = (1, -1, 0)$ e $B = (3, 0, 1)$, e sia $P = (4, 0, -1)$.

1. Si trovi un'equazione cartesiana del piano $\pi$ passante per $P$ e ortogonale a $r$. **[2 punti]**
2. Si trovi il piede $H$ della perpendicolare condotta da $P$ a $r$ e si calcoli la distanza di $P$ da $r$. **[2 punti]**
3. Si trovi un'equazione cartesiana del piano $\sigma$ che contiene $r$ e passa per $P$, e si verifichi che $\sigma$ è perpendicolare a $\pi$. **[2 punti]**

### Esercizio 2

Al variare del parametro $k \in \mathbb{R}$, sia $U_k \subseteq \mathbb{R}^4$ l'insieme delle soluzioni $(x, y, z, w)$ del sistema
$$
\begin{cases} x - y + z + 2w = 0 \\ 2x - y + 3z + 3w = 0 \\ x + y + (k + 3)z + kw = 0 \end{cases}
$$

1. Si dimostri che $U_k$ è un sottospazio vettoriale di $\mathbb{R}^4$ per ogni $k$. **[1 punto]**
2. Per ogni valore di $k$ si trovi un sistema di generatori di $U_k$. **[3 punti]**
3. Si dica per quali $k$ il vettore $\vec{u} = (-3, 0, 1, 1)$ appartiene a $U_k$ e, in quei casi, lo si scriva come combinazione lineare dei generatori trovati. **[2 punti]**

### Domande

1. Si dia la definizione di nucleo e di nullità di una matrice $A \in M_{m \times n}(\mathbb{R})$. Si fornisca un esempio di matrice $2 \times 3$ con nullità $2$, descrivendone il nucleo. **[1,5 punti]**
2. Si dia la definizione di sottospazio generato da $\vec{v}_1, \ldots, \vec{v}_k$ e di sistema di generatori di uno spazio vettoriale $V$. Si forniscano quattro vettori di $\mathbb{R}^3$ che **non** generano $\mathbb{R}^3$, motivando. **[1,5 punti]**

## Correzione

### Esercizio 1

> [!example]- Soluzione
> **Risultati.** 1. $\pi : 2x + y + z - 7 = 0$. 2. $H = (3, 0, 1)$, $d(P, r) = \sqrt5$. 3. $\sigma : 2x - 5y + z - 7 = 0$.
>
> **Come si riconosce.** Retta data per due punti e un punto fuori. "Piano ortogonale a una retta" vuol dire che la normale del piano è la direzione della retta. Il piede della perpendicolare sta nel piano per $P$ ortogonale a $r$: il punto 1 è il **piano ausiliario** del punto 2. "Piano che contiene una retta" vuol dire **fascio**, e per il fascio servono le cartesiane di $r$, che qui vanno ricavate dalle parametriche.
>
> **1. Piano ortogonale a $r$.**
> - Direzione di $r$: $\vec{v} = \overrightarrow{AB} = (3 - 1,\ 0 - (-1),\ 1 - 0) = (2, 1, 1)$. Parametriche da $A$: $r : (x, y, z) = (1 + 2t,\ -1 + t,\ t)$, $t \in \mathbb{R}$.
> - $\pi$ ha normale $\vec{v}$ e passa per $P$: $2(x - 4) + 1(y - 0) + 1(z + 1) = 0$.
> - Sviluppo: $2x - 8 + y + z + 1 = 0$, cioè $2x + y + z - 7 = 0$.
> - Verifica: $P$ dà $8 + 0 - 1 - 7 = 0$.
>
> **2. Piede della perpendicolare e distanza.**
> - Prima controllo che $P \notin r$: dalla prima parametrica $4 = 1 + 2t$ dà $t = \frac32$, ma allora $y = -1 + \frac32 = \frac12 \neq 0$. $P$ non sta su $r$.
> - $H = r \cap \pi$: sostituisco il punto generico di $r$ in $\pi$:
> $$
> 2(1 + 2t) + (-1 + t) + t - 7 = 2 + 4t - 1 + t + t - 7 = 6t - 6 = 0
> $$
>   quindi $t = 1$ e $H = (1 + 2,\ -1 + 1,\ 1) = (3, 0, 1)$. È proprio $B$: capita, non è un errore.
> - Verifica: $H \in \pi$ perché $6 + 0 + 1 - 7 = 0$; $\overrightarrow{HP} = (4 - 3,\ 0 - 0,\ -1 - 1) = (1, 0, -2)$ e $\overrightarrow{HP} \cdot \vec{v} = 2 + 0 - 2 = 0$, quindi $HP \perp r$.
> - $d(P, r) = |\overrightarrow{HP}| = \sqrt{1^2 + 0^2 + (-2)^2} = \sqrt5$.
> - Stesso risultato col **punto generico**: $\overrightarrow{Q(t)P} = (3 - 2t,\ 1 - t,\ -1 - t)$, e $\overrightarrow{Q(t)P} \cdot \vec{v} = 6 - 4t + 1 - t - 1 - t = 6 - 6t = 0$ dà di nuovo $t = 1$.
> - Controllo di buon senso: $d(P, A) = \sqrt{3^2 + 1^2 + 1^2} = \sqrt{11} > \sqrt5$. Un punto qualsiasi di $r$ è più lontano del piede.
>
> **3. Piano contenente $r$ e $P$.**
> - Cartesiane di $r$: dalla terza parametrica $t = z$. Sostituisco nelle altre due: $x = 1 + 2z$ e $y = -1 + z$, cioè
> $$
> r : \begin{cases} x - 2z - 1 = 0 \\ y - z + 1 = 0 \end{cases}
> $$
>   Controllo: $A$ dà $1 - 0 - 1 = 0$ e $-1 - 0 + 1 = 0$; $B$ dà $3 - 2 - 1 = 0$ e $0 - 1 + 1 = 0$.
> - Fascio di sostegno $r$: $\lambda(x - 2z - 1) + \mu(y - z + 1) = 0$.
> - Passaggio per $P = (4, 0, -1)$: $\lambda(4 + 2 - 1) + \mu(0 + 1 + 1) = 5\lambda + 2\mu = 0$. Con $\lambda = 2$ viene $\mu = -5$.
> - $2(x - 2z - 1) - 5(y - z + 1) = 2x - 4z - 2 - 5y + 5z - 5 = 2x - 5y + z - 7 = 0$.
> - Verifica: $P$ dà $8 - 0 - 1 - 7 = 0$, $A$ dà $2 + 5 + 0 - 7 = 0$, $B$ dà $6 - 0 + 1 - 7 = 0$. Contiene due punti di $r$, quindi tutta $r$, e contiene $P$.
> - **Perpendicolarità.** $\vec{n}_\sigma = (2, -5, 1)$, $\vec{n}_\pi = (2, 1, 1)$: $\vec{n}_\sigma \cdot \vec{n}_\pi = 4 - 5 + 1 = 0$, quindi $\sigma \perp \pi$. Non è un caso: $\sigma$ contiene $r$, quindi $\vec{n}_\sigma \perp \vec{v}$; e $\vec{n}_\pi = \vec{v}$. Ogni piano che contiene $r$ è perpendicolare a $\pi$.
>
> **Griglia.** 1: direzione e parametriche (0,5), equazione (1), verifica (0,5). 2: $H$ con l'intersezione (1), distanza (1). 3: cartesiane di $r$ (0,5), fascio e condizione su $P$ (1), perpendicolarità con il prodotto scalare delle normali (0,5).

> [!warning]- Errori tipici su questo esercizio
> - Scrivere il fascio direttamente con le parametriche: il fascio si costruisce con le due equazioni **cartesiane** di $r$, che qui vanno prima ricavate.
> - Prendere come distanza $|\overrightarrow{AP}|$ o $|\overrightarrow{BP}|$ senza controllare che il segmento sia ortogonale a $r$. Qui con $B$ torna per caso, perché $H = B$; con $A$ viene $\sqrt{11}$, sbagliato.
> - Non controllare $P \notin r$: se $P$ stesse su $r$, il piano del punto 3 non sarebbe unico (la condizione sul fascio diventerebbe $0 = 0$).
> - Confondere "perpendicolare" con "parallelo" fra piani: perpendicolari vuol dire $\vec{n}_\sigma \cdot \vec{n}_\pi = 0$, paralleli vuol dire $\vec{n}_\sigma$ multiplo di $\vec{n}_\pi$.

### Esercizio 2

> [!example]- Soluzione
> **Risultati.** 1. $U_k = N(A_k)$, chiuso per combinazioni lineari. 2. Se $k \neq 0$: $U_k = \langle (1, 2, -1, 1) \rangle$. Se $k = 0$: $U_0 = \langle (-2, -1, 1, 0),\ (-1, 1, 0, 1) \rangle$. 3. $\vec{u} \in U_k$ se e solo se $k = 0$, e $\vec{u} = (-2, -1, 1, 0) + (-1, 1, 0, 1)$.
>
> **Come si riconosce.** Un sottoinsieme di $\mathbb{R}^4$ dato da un sistema **omogeneo**: è il nucleo della matrice dei coefficienti, e il parametro sta solo nei coefficienti, non nei termini noti. I generatori si leggono dalle soluzioni scritte in forma vettoriale, una colonna per ogni variabile libera, e il loro numero è $\operatorname{null}(A_k) = 4 - \operatorname{rg}(A_k)$. Quindi tutto passa da Gauss sulla matrice con $k$.
>
> **1. Sottospazio.** Sia $A_k$ la matrice $3 \times 4$ dei coefficienti: $U_k = \{\vec{x} \in \mathbb{R}^4 : A_k\vec{x} = \vec{0}\} = N(A_k)$.
> - Non vuoto: $A_k\vec{0} = \vec{0}$, quindi $\vec{0} \in U_k$.
> - (C): siano $\vec{u}_1, \vec{u}_2 \in U_k$, cioè $A_k\vec{u}_1 = \vec{0}$ e $A_k\vec{u}_2 = \vec{0}$, e siano $\lambda_1, \lambda_2 \in \mathbb{R}$. Allora
> $$
> A_k(\lambda_1\vec{u}_1 + \lambda_2\vec{u}_2) = \lambda_1 A_k\vec{u}_1 + \lambda_2 A_k\vec{u}_2 = \lambda_1\vec{0} + \lambda_2\vec{0} = \vec{0}
> $$
>   per la distributiva del prodotto righe per colonne e la compatibilità con il prodotto per scalare. Quindi $\lambda_1\vec{u}_1 + \lambda_2\vec{u}_2 \in U_k$.
> - Il conto non usa mai il valore di $k$: vale per ogni $k$, perché i termini noti sono $0$ per ogni $k$.
>
> **2. Generatori.** Riduco $A_k$ (i termini noti sono nulli e restano nulli, non serve scriverli):
> $$
> A_k = \begin{pmatrix} 1 & -1 & 1 & 2 \\ 2 & -1 & 3 & 3 \\ 1 & 1 & k + 3 & k \end{pmatrix}
> $$
> - $E_{21}(-2)$: $R_2 - 2R_1 = (2 - 2,\ -1 + 2,\ 3 - 2,\ 3 - 4) = (0, 1, 1, -1)$.
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ 1 + 1,\ k + 3 - 1,\ k - 2) = (0, 2, k + 2, k - 2)$.
> - $E_{32}(-2)$: $R_3 - 2R_2 = (0,\ 2 - 2,\ k + 2 - 2,\ k - 2 + 2) = (0, 0, k, k)$.
> $$
> \begin{pmatrix} 1 & -1 & 1 & 2 \\ 0 & 1 & 1 & -1 \\ 0 & 0 & k & k \end{pmatrix}
> $$
> I pivot usati valgono $1$: nessuna divisione per un'espressione in $k$. Il terzo pivot è $k$, e si annulla solo per $k = 0$.
> - **$k \neq 0$.** $\operatorname{rg}(A_k) = 3$, $\operatorname{null}(A_k) = 4 - 3 = 1$: un parametro. Terza riga: $k(z + w) = 0$, divido per $k \neq 0$: $z + w = 0$. Pongo $w = t$:
>   - $z = -t$;
>   - seconda riga $y + z - w = 0$, quindi $y = -z + w = t + t = 2t$;
>   - prima riga $x - y + z + 2w = 0$, quindi $x = y - z - 2w = 2t + t - 2t = t$.
>
>   Soluzioni $(t, 2t, -t, t) = t(1, 2, -1, 1)$, quindi $U_k = \langle (1, 2, -1, 1) \rangle$, una retta per l'origine di $\mathbb{R}^4$.
> - **$k = 0$.** La terza riga diventa $(0, 0, 0, 0)$: $\operatorname{rg}(A_0) = 2$, $\operatorname{null}(A_0) = 2$. Colonne senza pivot quelle di $z$ e $w$: $z = s$, $w = t$.
>   - seconda riga: $y = -z + w = -s + t$;
>   - prima riga: $x = y - z - 2w = (-s + t) - s - 2t = -2s - t$.
>
>   Spezzo per parametri:
> $$
> \begin{pmatrix} -2s - t \\ -s + t \\ s \\ t \end{pmatrix} = s\begin{pmatrix} -2 \\ -1 \\ 1 \\ 0 \end{pmatrix} + t\begin{pmatrix} -1 \\ 1 \\ 0 \\ 1 \end{pmatrix}
> $$
>   quindi $U_0 = \langle (-2, -1, 1, 0),\ (-1, 1, 0, 1) \rangle$.
>
> **Verifica** di ogni generatore in tutte e tre le equazioni.
> - $(1, 2, -1, 1)$: $1 - 2 - 1 + 2 = 0$; $2 - 2 - 3 + 3 = 0$; $1 + 2 - (k + 3) + k = 0$ per **ogni** $k$. Sta in tutti gli $U_k$.
> - $(-2, -1, 1, 0)$ con $k = 0$: $-2 + 1 + 1 + 0 = 0$; $-4 + 1 + 3 + 0 = 0$; $-2 - 1 + 3 + 0 = 0$.
> - $(-1, 1, 0, 1)$ con $k = 0$: $-1 - 1 + 0 + 2 = 0$; $-2 - 1 + 0 + 3 = 0$; $-1 + 1 + 0 + 0 = 0$.
>
> Coerenza: $(1, 2, -1, 1) \in U_0$, e infatti è il generatore di $U_0$ con $s = -1$, $t = 1$: $(2 - 1,\ 1 + 1,\ -1,\ 1)$.
>
> **3. Appartenenza di $\vec{u}$.** Sostituisco $\vec{u} = (-3, 0, 1, 1)$ nelle tre equazioni:
> - prima: $-3 - 0 + 1 + 2 = 0$;
> - seconda: $-6 - 0 + 3 + 3 = 0$;
> - terza: $-3 + 0 + (k + 3) + k = 2k$.
>
> $\vec{u} \in U_k$ se e solo se $2k = 0$, cioè $k = 0$. Per $k = 0$ cerco $s, t$ con $s(-2, -1, 1, 0) + t(-1, 1, 0, 1) = (-3, 0, 1, 1)$: la terza componente dà $s = 1$, la quarta $t = 1$. Controllo sulle prime due: $-2 - 1 = -3$ e $-1 + 1 = 0$. Quindi $\vec{u} = (-2, -1, 1, 0) + (-1, 1, 0, 1)$.
>
> Controllo per $k \neq 0$ con i generatori: $\vec{u} = t(1, 2, -1, 1)$ chiederebbe $t = -3$ dalla prima componente e $t = 0$ dalla seconda, impossibile. Torna con la sostituzione.
>
> **Griglia.** 1: $\vec{0} \in U_k$ e (C) con vettori generici (1). 2: riduzione corretta (1), caso $k \neq 0$ (1), caso $k = 0$ con due generatori (1). 3: condizione $2k = 0$ (1), coefficienti della combinazione (1).

> [!warning]- Errori tipici su questo esercizio
> - Dividere la terza riga per $k$ senza aver tolto prima $k = 0$: si perde proprio il caso con due generatori.
> - Prendere come generatori le **righe** della matrice ridotta: generano lo spazio delle righe $R(A_k)$, non il nucleo. I generatori di $U_k$ vengono dalle soluzioni.
> - Pensare che il numero di generatori sia il numero di equazioni: è $\operatorname{null}(A_k) = 4 - \operatorname{rg}(A_k)$, cioè il numero di variabili libere.
> - Dire “$U_k$ non è un sottospazio perché dipende da $k$": conta solo che il sistema sia omogeneo. Il parametro nei coefficienti cambia **quale** sottospazio, non il fatto che lo sia.

### Domande

> [!example]- Domanda 1: nucleo e nullità
> **Definizioni** (parole della prof). Data $A \in M_{m \times n}(\mathbb{R})$, il **nucleo** di $A$ è l'insieme delle soluzioni del sistema lineare omogeneo $A\vec{x} = \vec{0}$; si indica $N(A)$ ed è un sottospazio di $\mathbb{R}^n$. La **nullità** di $A$, $\operatorname{null}(A)$, è il numero di colonne di $\operatorname{rref}(A)$ che non contengono pivot, cioè il numero di variabili libere. Vale $\operatorname{null}(A) + \operatorname{rg}(A) = n$.
>
> **Esempio.** $A = \begin{pmatrix} 1 & -1 & 2 \\ 2 & -2 & 4 \end{pmatrix}$.
> - $E_{21}(-2)$: $R_2 - 2R_1 = (2 - 2,\ -2 + 2,\ 4 - 4) = (0, 0, 0)$. $\operatorname{rref}(A) = \begin{pmatrix} 1 & -1 & 2 \\ 0 & 0 & 0 \end{pmatrix}$.
> - Un pivot (colonna di $x$), due colonne senza pivot: $\operatorname{null}(A) = 2$, e $2 + 1 = 3 = n$.
> - Resta $x - y + 2z = 0$. Con $y = s$, $z = t$: $x = s - 2t$, quindi
> $$
> N(A) = \{ s(1, 1, 0) + t(-2, 0, 1) : s, t \in \mathbb{R} \}
> $$
>   un piano per l'origine di $\mathbb{R}^3$.
> - Verifica: $A(1, 1, 0)$ dà $1 - 1 + 0 = 0$ e $2 - 2 + 0 = 0$; $A(-2, 0, 1)$ dà $-2 + 0 + 2 = 0$ e $-4 + 0 + 4 = 0$.
>
> Il nucleo vive in $\mathbb{R}^3$ (tre colonne, tre incognite), non in $\mathbb{R}^2$. E la nullità si conta sulle colonne senza pivot, non sulle righe nulle: qui la riga nulla è una, la nullità è $2$.

> [!example]- Domanda 2: Span e generatori
> **Definizioni** (parole della prof). Sia $V$ uno spazio vettoriale reale. Dati $\vec{v}_1, \ldots, \vec{v}_k \in V$, l'insieme di tutte le combinazioni lineari di $\vec{v}_1, \ldots, \vec{v}_k$ è il **sottospazio generato**:
> $$
> \langle \vec{v}_1, \ldots, \vec{v}_k \rangle = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k) = \{\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k : \lambda_i \in \mathbb{R}\}
> $$
> Se $V = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$, $V$ si dice **finitamente generato** e $\{\vec{v}_1, \ldots, \vec{v}_k\}$ è un **sistema di generatori** di $V$.
>
> **Esempio.** $\vec{v}_1 = (1, 0, 1)$, $\vec{v}_2 = (0, 1, 1)$, $\vec{v}_3 = (1, 1, 2)$, $\vec{v}_4 = (2, 1, 3)$. Per il criterio della prof generano $\mathbb{R}^3$ se e solo se la matrice con i vettori **in colonna** ha rango $3$:
> $$
> \begin{pmatrix} 1 & 0 & 1 & 2 \\ 0 & 1 & 1 & 1 \\ 1 & 1 & 2 & 3 \end{pmatrix}
> $$
> - $E_{31}(-1)$: $R_3 - R_1 = (0, 1, 1, 1)$.
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0, 0)$.
>
> Due pivot: rango $2 < 3$, **non generano**. Tutti e quattro soddisfano $z = x + y$ (per esempio $3 = 2 + 1$ per $\vec{v}_4$), quindi lo Span sta nel piano $x + y - z = 0$ e $(0, 0, 1)$, che dà $0 + 0 - 1 \neq 0$, resta fuori.
>
> Il punto dell'esempio: avere almeno $3$ vettori è necessario per generare $\mathbb{R}^3$, ma non basta. Decide il rango.

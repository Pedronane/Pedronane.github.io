---
title: Simulazione provetta 1
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

Simulazione della prova intermedia di [Geometria e Algebra Lineare](/uni/gal/) del 5/11. Stessa forma delle provette della prof dal 2022 al 2024 (<span class="src">2024</span>, <span class="src">2023</span>, <span class="src">2022</span>): due esercizi da 6 punti e due domande di teoria da 1,5, punteggio in quindicesimi. Esercizi e numeri sono nuovi, i conti sono verificati.

> [!info] Regole
> - **90 minuti**, niente appunti, niente calcolatrice. Fai partire il cronometro e non guardare le soluzioni prima della fine.
> - Ogni risultato si chiude con la verifica: il punto sostituito nelle equazioni, il piano che contiene quello che deve contenere.
> - Punteggio: esercizi 6 + 6, domande 1,5 + 1,5, totale 15. Nelle soluzioni ufficiali della prof il voto della provetta è in quindicesimi; come la soglia "almeno 15/30" si traduca in quindicesimi va controllato sull'avviso.

## Testo

### Esercizio 1

Sia $r$ la retta passante per i punti $A = (1, 0, 2)$ e $B = (2, 1, 1)$, e sia $r'$ la retta di equazioni cartesiane
$$
\begin{cases} x + y - z + 1 = 0 \\ x - 2y + 1 = 0 \end{cases}
$$

1. Si determini la posizione reciproca di $r$ e $r'$. **[2 punti]**
2. Si trovi un'equazione cartesiana del piano $\pi$ che contiene $r'$ ed è parallelo a $r$. **[2 punti]**
3. Si calcoli la distanza tra $r$ e $r'$. **[2 punti]**

### Esercizio 2

Si consideri il sistema lineare
$$
\begin{cases} x + 2y - z = 1 \\ 2x + 5y + (k - 3)z = 3 \\ x + 3y + (k^2 + k - 3)z = k + 1 \end{cases}
$$
al variare del parametro $k \in \mathbb{R}$.

1. Dire per quali valori di $k$ il sistema è compatibile. **[3 punti]**
2. Per ogni valore di $k$, ove possibile, si trovino tutte le soluzioni del sistema. **[3 punti]**

### Domande

1. Si enunci il teorema di Rouché-Capelli e si fornisca un esempio di sistema lineare **non compatibile** formato da tre equazioni in due incognite. **[1,5 punti]**
2. Si dia la definizione di sottospazio vettoriale di uno spazio vettoriale $V$. Si fornisca un esempio di sottoinsieme di $\mathbb{R}^3$ che **non** è un sottospazio, motivando. **[1,5 punti]**

## Correzione

### Esercizio 1

> [!example]- Soluzione
> **Risultati.** 1. Sghembe. 2. $\pi : 4x - 5y - z + 4 = 0$. 3. $d(r, r') = \frac{\sqrt{42}}{7}$.
>
> **Come si riconosce.** Due rette, una per due punti e una cartesiana: per la posizione reciproca servono le due direzioni (parallele o no) e un tentativo di intersezione. "Piano che contiene una retta" vuol dire **fascio** con sostegno $r'$, come fa la prof. La distanza fra rette sghembe si riduce a una distanza punto-piano, che è il motivo per cui il punto 2 viene prima.
>
> **1. Posizione reciproca.**
> - Direzione di $r$: $\vec{v} = B - A = (2 - 1, 1 - 0, 1 - 2) = (1, 1, -1)$. Parametriche: $r : (x, y, z) = (1 + t,\ t,\ 2 - t)$.
> - Direzione di $r'$: pongo $y = s$. Dalla seconda equazione $x = 2y - 1 = 2s - 1$. Dalla prima $z = x + y + 1 = (2s - 1) + s + 1 = 3s$. Quindi $r' : (x, y, z) = (-1 + 2s,\ s,\ 3s)$ e $\vec{w} = (2, 1, 3)$.
> - Controllo delle parametriche: $(2s - 1) + s - 3s + 1 = 0$ e $(2s - 1) - 2s + 1 = 0$ per ogni $s$.
> - $\vec{v}$ e $\vec{w}$ non sono proporzionali: il rapporto delle prime componenti è $\frac{1}{2}$, quello delle seconde $\frac{1}{1} = 1$. Quindi le rette **non sono parallele**.
> - Intersezione: sostituisco il punto generico di $r$ nelle cartesiane di $r'$.
>   - prima equazione: $(1 + t) + t - (2 - t) + 1 = 3t = 0$, quindi $t = 0$;
>   - seconda equazione: $(1 + t) - 2t + 1 = 2 - t = 0$, quindi $t = 2$.
>
>   Le due condizioni chiedono valori diversi di $t$: nessun punto di $r$ sta su $r'$.
> - Non parallele e disgiunte: $r$ e $r'$ sono **sghembe**.
>
> **2. Piano contenente $r'$ e parallelo a $r$.**
> - Fascio di piani di sostegno $r'$: $\lambda(x + y - z + 1) + \mu(x - 2y + 1) = 0$, cioè $(\lambda + \mu)x + (\lambda - 2\mu)y - \lambda z + (\lambda + \mu) = 0$.
> - Vettore normale: $\vec{n} = (\lambda + \mu,\ \lambda - 2\mu,\ -\lambda)$.
> - $\pi \parallel r$ vuol dire $\vec{n} \perp \vec{v}$: $\vec{n} \cdot \vec{v} = (\lambda + \mu) + (\lambda - 2\mu) + \lambda = 3\lambda - \mu = 0$, quindi $\mu = 3\lambda$.
> - Con $\lambda = 1$, $\mu = 3$: $(x + y - z + 1) + 3(x - 2y + 1) = 4x - 5y - z + 4 = 0$.
> - Verifica: $\vec{n} \cdot \vec{v} = 4 - 5 + 1 = 0$; i punti $(-1, 0, 0)$ ($s = 0$) e $(1, 1, 3)$ ($s = 1$) di $r'$ danno $-4 + 4 = 0$ e $4 - 5 - 3 + 4 = 0$. Il piano contiene $r'$.
>
> **3. Distanza.** $r$ è parallela a $\pi$ e $r' \subset \pi$, quindi ogni punto di $r$ dista da $r'$ almeno quanto dista da $\pi$, e la distanza fra le rette è la distanza di un punto qualsiasi di $r$ da $\pi$. Prendo $A$:
> $$
> d(r, r') = d(A, \pi) = \frac{|4 \cdot 1 - 5 \cdot 0 - 2 + 4|}{\sqrt{4^2 + (-5)^2 + (-1)^2}} = \frac{6}{\sqrt{42}} = \frac{6\sqrt{42}}{42} = \frac{\sqrt{42}}{7}
> $$
> Controllo di buon senso: $\frac{\sqrt{42}}{7} \approx 0{,}93$, positivo e più piccolo di $|A - (-1, 0, 0)| = \sqrt{8}$, la distanza fra un punto di $r$ e uno di $r'$ presi a caso.
>
> **Griglia.** 1: direzioni (0,5), non parallele (0,5), intersezione vuota con conclusione (1). 2: fascio (0,5), condizione $\vec{n} \cdot \vec{v} = 0$ (1), equazione finale (0,5). 3: motivazione del passaggio a punto-piano (1), conto (1).

> [!warning]- Errori tipici su questo esercizio
> - Dire "sghembe" dopo aver visto solo che le direzioni non sono proporzionali: non parallele può anche voler dire **incidenti**. Serve il tentativo di intersezione.
> - Usare lo stesso parametro $t$ per le due rette quando si cercano punti comuni: i due punti si muovono indipendentemente.
> - Dimenticare valore assoluto o radice al denominatore della formula punto-piano.
> - Prendere per il punto 3 un punto di $r'$ invece che di $r$: dista $0$ da $\pi$, perché ci sta dentro.

### Esercizio 2

> [!example]- Soluzione
> **Risultati.** Compatibile se e solo se $k \neq -1$. Per $k \neq \pm 1$ soluzione unica $\left(\frac{k - 2}{k + 1},\ \frac{2}{k + 1},\ \frac{1}{k + 1}\right)$. Per $k = 1$ infinite soluzioni $(t - 1,\ 1,\ t)$, $t \in \mathbb{R}$. Per $k = -1$ incompatibile.
>
> **Come si riconosce.** Sistema quadrato con parametro: Gauss sulla matrice completa, dividendo solo per pivot che non contengono $k$, poi Rouché-Capelli sui valori di $k$ che annullano un pivot.
>
> **Riduzione.**
> $$
> [A \mid \vec{b}] = \left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 2 & 5 & k - 3 & 3 \\ 1 & 3 & k^2 + k - 3 & k + 1 \end{array}\right)
> $$
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ 1,\ k - 3 + 2,\ 3 - 2) = (0,\ 1,\ k - 1 \mid 1)$.
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ 1,\ k^2 + k - 2 \mid k)$.
> - $E_{32}(-1)$: $R_3 - R_2 = (0,\ 0,\ k^2 + k - 2 - (k - 1) \mid k - 1) = (0,\ 0,\ k^2 - 1 \mid k - 1)$.
> $$
> \left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 1 & k - 1 & 1 \\ 0 & 0 & (k - 1)(k + 1) & k - 1 \end{array}\right)
> $$
>
> **1. Compatibilità.** Il terzo pivot $(k - 1)(k + 1)$ si annulla per $k = \pm 1$.
> - $k \neq \pm 1$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3 = n$, compatibile con soluzione unica.
> - $k = 1$: la terza riga diventa $(0, 0, 0 \mid 0)$. $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 2 < 3$: compatibile, infinite soluzioni, $3 - 2 = 1$ parametro.
> - $k = -1$: la terza riga diventa $(0, 0, 0 \mid -2)$. $\operatorname{rg}(A) = 2 \neq 3 = \operatorname{rg}([A \mid \vec{b}])$: **incompatibile**.
>
> Quindi il sistema è compatibile se e solo se $k \neq -1$.
>
> **2. Soluzioni.**
> - $k \neq \pm 1$, all'indietro. Terza riga: $z = \frac{k - 1}{(k - 1)(k + 1)} = \frac{1}{k + 1}$ (semplifico $k - 1 \neq 0$). Seconda: $y = 1 - (k - 1)z = 1 - \frac{k - 1}{k + 1} = \frac{2}{k + 1}$. Prima: $x = 1 - 2y + z = 1 - \frac{4}{k + 1} + \frac{1}{k + 1} = \frac{k + 1 - 3}{k + 1} = \frac{k - 2}{k + 1}$.
> - $k = 1$. Restano $x + 2y - z = 1$ e $y = 1$ (la seconda riga con $k - 1 = 0$). La colonna di $z$ non ha pivot: $z = t$. Allora $x = 1 - 2 + t = t - 1$. Soluzioni $(t - 1,\ 1,\ t)$, $t \in \mathbb{R}$.
>
> **Verifica.** Con $k = 0$ la formula dà $(-2, 2, 1)$: $-2 + 4 - 1 = 1$, $-4 + 10 - 3 = 3$, $-2 + 6 - 3 = 1 = k + 1$. Con $k = 1$ e $t = 0$ il punto $(-1, 1, 0)$: $-1 + 2 = 1$, $-2 + 5 = 3$, $-1 + 3 = 2 = k + 1$.
>
> **Griglia.** Riduzione corretta (1,5), casi $k = \pm 1$ con Rouché-Capelli (1,5), soluzione generale (1,5), caso $k = 1$ (1,5).

> [!warning]- Errori tipici su questo esercizio
> - Dividere la terza riga per $k^2 - 1$ senza aver tolto prima $k = \pm 1$: si perdono proprio i due casi interessanti.
> - Per $k = -1$ fermarsi a "il pivot è zero, infinite soluzioni": bisogna guardare il termine noto, che lì vale $-2$.
> - Scrivere le soluzioni di $k = 1$ ripartendo dalla formula generale: per $k = 1$ la formula dà $\left(-\frac12, 1, \frac12\right)$, che è **una** delle infinite soluzioni ($t = \frac12$), non tutte.

### Domande

> [!example]- Domanda 1: Rouché-Capelli
> **Enunciato** (parole della prof). Dato un sistema lineare in $n$ incognite con matrice completa $[A \mid \vec{b}]$, il sistema è compatibile se e solo se $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}])$. Inoltre, se i due ranghi sono uguali: se $\operatorname{rg}(A) = n$ c'è un'unica soluzione, se $\operatorname{rg}(A) < n$ ce ne sono infinite.
>
> **Esempio.** Tre equazioni in due incognite, non compatibile:
> $$
> \begin{cases} x + y = 1 \\ x - y = 0 \\ x = 2 \end{cases}
> $$
> Le prime due danno $x = y = \frac12$, la terza chiede $x = 2$. Con i ranghi: $A$ è $3 \times 2$, quindi $\operatorname{rg}(A) \leq 2$, e riducendo $[A \mid \vec{b}]$ si arriva a una riga $(0, 0 \mid \tfrac32)$, quindi $\operatorname{rg}([A \mid \vec{b}]) = 3 \neq 2$.
>
> Per il punto pieno servono **tutte e due** le parti: l'enunciato con "se e solo se" e la seconda parte (unica o infinite), e l'esempio **con la verifica** dei ranghi o dei conti.

> [!example]- Domanda 2: sottospazio
> **Definizione** (parole della prof). Sia $V$ uno spazio vettoriale reale. Un sottoinsieme non vuoto $U \subseteq V$ è un sottospazio di $V$ se è chiuso rispetto alla somma ($\vec{u}_1, \vec{u}_2 \in U \Rightarrow \vec{u}_1 + \vec{u}_2 \in U$) e al prodotto per scalare ($\vec{u} \in U,\ \lambda \in \mathbb{R} \Rightarrow \lambda\vec{u} \in U$). Equivalentemente, chiuso rispetto alle combinazioni lineari.
>
> **Esempio.** $U = \{(x, y, z) \in \mathbb{R}^3 : x + y + z = 1\}$ non è un sottospazio: $\vec{0} = (0, 0, 0)$ dà $0 \neq 1$, quindi $\vec{0} \notin U$, mentre ogni sottospazio contiene $\vec{0}$ (prendi $\lambda = 0$ nella chiusura per scalare). Un esempio che passa il test di $\vec{0}$ e cade sulla somma: $U = \{(x, y, z) : xy = 0\}$, con $(1, 0, 0) + (0, 1, 0) = (1, 1, 0) \notin U$.
>
> La motivazione è metà del punto: un controesempio **con numeri** per dire no.

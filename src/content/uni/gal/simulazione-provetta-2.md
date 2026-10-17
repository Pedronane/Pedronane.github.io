---
title: Simulazione provetta 2
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

Seconda simulazione della prova intermedia di [Geometria e Algebra Lineare](/uni/gal/) del 5/11, stessa forma della [prima](/uni/simulazioni/gal/simulazione-provetta-1/). L'esercizio 2 è il tipo uscito nel <span class="src">2022</span> e nel <span class="src">2023</span> (vettori di $\mathbb{R}^4$ con parametro) e usa la dipendenza lineare, che a lezione arriva il 19/10: se la fai prima di quella data, salta il punto 1 e fai solo il 2.

> [!info] Regole
> - **90 minuti**, niente appunti, niente calcolatrice.
> - Punteggio: esercizi 6 + 6, domande 1,5 + 1,5, totale 15.

## Testo

### Esercizio 1

Sia $r$ la retta di equazioni cartesiane
$$
\begin{cases} x + y - 2 = 0 \\ y - z = 0 \end{cases}
$$
e sia $P = (3, 2, 2)$.

1. Si trovi un'equazione cartesiana del piano $\pi$ passante per $P$ e ortogonale a $r$. **[2 punti]**
2. Si trovi la retta $s$ passante per $P$, ortogonale e incidente a $r$, e si calcoli la distanza di $P$ da $r$. **[2 punti]**
3. Si trovino i piani paralleli a $\pi$ che hanno distanza $\sqrt3$ da $\pi$. **[2 punti]**

### Esercizio 2

Si considerino i vettori
$$
\vec{v}_1 = (1, 0, 1, 2), \quad \vec{v}_2 = (0, 1, 1, -1), \quad \vec{v}_3 = (2, 1, k + 2, 2k + 1) \in \mathbb{R}^4
$$
al variare del parametro $k \in \mathbb{R}$.

1. Determinare per quali valori di $k$ l'insieme $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è linearmente indipendente. **[3 punti]**
2. Per ogni valore di $k$, esprimere il sottospazio generato $\langle \vec{v}_1, \vec{v}_2, \vec{v}_3 \rangle$ come insieme delle soluzioni di un sistema lineare omogeneo. **[3 punti]**

### Domande

1. Si dia la definizione di matrice invertibile. Si fornisca un esempio di matrice $2 \times 2$ invertibile e della sua inversa, verificando che lo sia. **[1,5 punti]**
2. Si dia la definizione di insieme di vettori linearmente dipendenti. Si fornisca un esempio di tre vettori di $\mathbb{R}^3$ linearmente dipendenti, nessuno dei quali è multiplo di un altro. **[1,5 punti]**

## Correzione

### Esercizio 1

> [!example]- Soluzione
> **Risultati.** 1. $\pi : -x + y + z - 1 = 0$. 2. $s : (3 + 2u,\ 2 + u,\ 2 + u)$, $d(P, r) = \sqrt6$. 3. $-x + y + z + 2 = 0$ e $-x + y + z - 4 = 0$.
>
> **Come si riconosce.** "Ortogonale a una retta" per un piano vuol dire che la normale del piano è la direzione della retta. La perpendicolare da $P$ a $r$ cade nel piano per $P$ ortogonale a $r$: il piano del punto 1 è lo strumento del punto 2, il metodo del **piano ausiliario** della prof. Il punto 3 è il tipo "piani a distanza data", con due soluzioni.
>
> **1. Piano ortogonale a $r$.**
> - Parametriche di $r$: pongo $y = t$. Dalla seconda $z = y = t$, dalla prima $x = 2 - y = 2 - t$. Quindi $r : (2 - t,\ t,\ t)$ e $\vec{v} = (-1, 1, 1)$.
> - Controllo: $(2 - t) + t - 2 = 0$ e $t - t = 0$.
> - $\pi$ ha normale $\vec{v}$ e passa per $P$: $-1(x - 3) + 1(y - 2) + 1(z - 2) = 0$, cioè $-x + y + z - 1 = 0$.
> - Verifica: $P$ dà $-3 + 2 + 2 - 1 = 0$.
>
> **2. Retta ortogonale e incidente, distanza.**
> - $H = r \cap \pi$: sostituisco il punto generico di $r$ in $\pi$: $-(2 - t) + t + t - 1 = 3t - 3 = 0$, quindi $t = 1$ e $H = (1, 1, 1)$.
> - $s$ è la retta per $P$ e $H$. Direzione $H - P = (-2, -1, -1)$, o il suo opposto $(2, 1, 1)$. $s : (3 + 2u,\ 2 + u,\ 2 + u)$, $u \in \mathbb{R}$.
> - Ortogonale a $r$: $(2, 1, 1) \cdot (-1, 1, 1) = -2 + 1 + 1 = 0$. Incidente: passa per $H \in r$ (con $u = -1$).
> - $d(P, r) = |P - H| = \sqrt{2^2 + 1^2 + 1^2} = \sqrt6$.
> - Perché $H$ è il punto più vicino: per ogni altro $Q \in r$ il triangolo $PHQ$ è rettangolo in $H$, e l'ipotenusa $|PQ|$ è più lunga del cateto $|PH|$.
>
> **3. Piani a distanza $\sqrt3$.**
> - Un piano parallelo a $\pi$ ha la stessa normale: $\sigma : -x + y + z + d = 0$.
> - La distanza fra due piani paralleli è la distanza di un punto qualsiasi del primo dal secondo. Prendo $H = (1, 1, 1) \in \pi$:
> $$
> d(H, \sigma) = \frac{|-1 + 1 + 1 + d|}{\sqrt{(-1)^2 + 1^2 + 1^2}} = \frac{|1 + d|}{\sqrt3}
> $$
> - Impongo $\frac{|1 + d|}{\sqrt3} = \sqrt3$: $|1 + d| = 3$, quindi $1 + d = 3$ o $1 + d = -3$, cioè $d = 2$ o $d = -4$.
> - $\sigma_1 : -x + y + z + 2 = 0$ e $\sigma_2 : -x + y + z - 4 = 0$, uno per parte.
> - Verifica su $\sigma_2$: il punto $H + \vec{n} = (0, 2, 2)$ dista $|\vec{n}| = \sqrt3$ da $H$ in direzione ortogonale, e $0 + 2 + 2 - 4 = 0$, quindi sta su $\sigma_2$.
>
> **Griglia.** 1: parametriche e direzione (1), equazione del piano (1). 2: $H$ (1), retta e distanza (1). 3: forma dei piani paralleli (0,5), equazione con valore assoluto (1), **entrambe** le soluzioni (0,5).

> [!warning]- Errori tipici su questo esercizio
> - Prendere come direzione di $r$ uno dei vettori normali $(1, 1, 0)$ o $(0, 1, -1)$ delle cartesiane: quelli sono ortogonali a $r$, non paralleli.
> - Nel punto 3 togliere il valore assoluto e trovare un solo piano.
> - Trovare $s$ come "retta per $P$ con direzione ortogonale a $\vec{v}$" senza imporre l'incidenza: le direzioni ortogonali a $\vec{v}$ sono infinite, solo una arriva su $r$.

### Esercizio 2

> [!example]- Soluzione
> **Risultati.** 1. Linearmente indipendenti se e solo se $k \neq 1$. 2. Se $k \neq 1$: $\{3y - 2z + w = 0\}$. Se $k = 1$: $\begin{cases} -x - y + z = 0 \\ 3y - 2z + w = 0 \end{cases}$
>
> **Come si riconosce.** Vettori di $\mathbb{R}^n$ con parametro: si mettono **in colonna** in una matrice e si riduce. Indipendenti se e solo se il rango è uguale al numero di vettori. Per le equazioni dello Span si affianca la colonna delle incognite $(x, y, z, w)$ e si riduce tutto insieme: le righe che a sinistra diventano nulle danno le equazioni.
>
> **Riduzione con la colonna delle incognite** (la sinistra serve anche al punto 1):
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 2 & x \\ 0 & 1 & 1 & y \\ 1 & 1 & k + 2 & z \\ 2 & -1 & 2k + 1 & w \end{array}\right)
> $$
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ 1,\ k \mid z - x)$.
> - $E_{41}(-2)$: $R_4 - 2R_1 = (0,\ -1,\ 2k - 3 \mid w - 2x)$.
> - $E_{32}(-1)$: $R_3 - R_2 = (0,\ 0,\ k - 1 \mid z - x - y)$.
> - $E_{42}(1)$: $R_4 + R_2 = (0,\ 0,\ 2k - 2 \mid w - 2x + y)$.
> - $E_{43}(-2)$: $R_4 - 2R_3 = (0,\ 0,\ 0 \mid w - 2x + y - 2z + 2x + 2y) = (0,\ 0,\ 0 \mid 3y - 2z + w)$.
> $$
> \left(\begin{array}{ccc|c} 1 & 0 & 2 & x \\ 0 & 1 & 1 & y \\ 0 & 0 & k - 1 & -x - y + z \\ 0 & 0 & 0 & 3y - 2z + w \end{array}\right)
> $$
>
> **1. Indipendenza.** La matrice dei tre vettori ha rango $3$ se e solo se $k - 1 \neq 0$. Quindi $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è linearmente indipendente se e solo se $k \neq 1$. Per $k = 1$ il rango è $2$, e infatti $\vec{v}_3 = (2, 1, 3, 3) = 2\vec{v}_1 + \vec{v}_2$.
>
> **2. Equazioni dello Span.** $(x, y, z, w) \in \langle \vec{v}_1, \vec{v}_2, \vec{v}_3 \rangle$ se e solo se il sistema con quella colonna dei termini noti è compatibile, cioè (Rouché-Capelli) se le righe nulle a sinistra hanno $0$ anche a destra.
> - $k \neq 1$: una sola riga nulla a sinistra, la quarta. Condizione: $3y - 2z + w = 0$. È un iperpiano di $\mathbb{R}^4$, coerente con tre vettori indipendenti.
> - $k = 1$: righe nulle la terza e la quarta. Condizioni: $-x - y + z = 0$ e $3y - 2z + w = 0$.
>
> **Verifica.** Ogni equazione va soddisfatta dai generatori. $\vec{v}_1$: $3 \cdot 0 - 2 \cdot 1 + 2 = 0$ e $-1 - 0 + 1 = 0$. $\vec{v}_2$: $3 - 2 - 1 = 0$ e $0 - 1 + 1 = 0$. $\vec{v}_3$ con $k$ qualunque: $3 - 2(k + 2) + 2k + 1 = 0$.
>
> **Griglia.** Matrice coi vettori in colonna e riduzione (1,5), conclusione sul rango (1,5). Colonna delle incognite (1), equazioni nei due casi (2).

> [!warning]- Errori tipici su questo esercizio
> - Ridurre i vettori messi in riga e poi affiancare la colonna delle incognite: le operazioni sulle righe allora mescolano i vettori, non le coordinate, e le equazioni che escono sono sbagliate.
> - Per $k \neq 1$ dare anche l'equazione della terza riga: lì il pivot $k - 1$ non è nullo, quindi quella riga non impone niente.
> - Dimenticare la verifica sui generatori: è il controllo più rapido e trova gli errori di segno nella colonna delle incognite.

### Domande

> [!example]- Domanda 1: matrice invertibile
> **Definizione** (parole della prof). $A \in M_n(\mathbb{R})$ quadrata è invertibile se esiste $B \in M_n(\mathbb{R})$ tale che $AB = BA = I_n$. In tal caso $B$ si dice l'inversa di $A$ e si indica $A^{-1}$.
>
> **Esempio.** $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$.
> - $AA^{-1} = \begin{pmatrix} 2 - 1 & -2 + 2 \\ 1 - 1 & -1 + 2 \end{pmatrix} = I_2$.
> - $A^{-1}A = \begin{pmatrix} 2 - 1 & 1 - 1 \\ -2 + 2 & -1 + 2 \end{pmatrix} = I_2$.
>
> Tutti e due i prodotti: la definizione li chiede entrambi.

> [!example]- Domanda 2: vettori linearmente dipendenti
> **Definizione.** $\vec{v}_1, \ldots, \vec{v}_k \in V$ sono linearmente dipendenti se esistono $\lambda_1, \ldots, \lambda_k \in \mathbb{R}$ **non tutti nulli** tali che $\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k = \vec{0}$. Equivalentemente, almeno uno di essi è combinazione lineare degli altri.
>
> **Esempio.** $\vec{v}_1 = (1, 0, 0)$, $\vec{v}_2 = (0, 1, 0)$, $\vec{v}_3 = (1, 1, 0)$. Nessuno è multiplo di un altro (ognuno ha uno zero dove l'altro no), ma $1 \cdot \vec{v}_1 + 1 \cdot \vec{v}_2 - 1 \cdot \vec{v}_3 = \vec{0}$ con coefficienti non nulli. Stanno tutti nel piano $z = 0$.
>
> L'esempio mostra che "dipendenti" non vuol dire "due paralleli": con tre o più vettori la dipendenza può coinvolgerli tutti.

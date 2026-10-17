---
title: Simulazione provetta 4
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

Quarta simulazione della prova intermedia di [Geometria e Algebra Lineare](/uni/gal/) del 5/11, stessa forma delle [precedenti](/uni/simulazioni/gal/simulazione-provetta-1/). L'esercizio 2 è su matrici invertibili con parametro e struttura delle soluzioni ([Matrici invertibili](/uni/gal/matrici-invertibili/), [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/)), il tipo dell'esercitazione del 12/10.

> [!info] Regole
> - **90 minuti**, niente appunti, niente calcolatrice.
> - Punteggio: esercizi 6 + 6, domande 1,5 + 1,5, totale 15.

## Testo

### Esercizio 1

Sia $r$ la retta di equazioni cartesiane
$$
\begin{cases} x - y + 1 = 0 \\ y + z - 3 = 0 \end{cases}
$$
e sia $\pi$ il piano di equazione $x + 2y + z - 4 = 0$.

1. Si verifichi che $r$ e $\pi$ sono incidenti e se ne trovi il punto comune $Q$. **[2 punti]**
2. Si trovi la retta $s$ contenuta in $\pi$, passante per $Q$ e ortogonale a $r$. **[2 punti]**
3. Si trovi un'equazione cartesiana del piano $\tau$ che contiene $r$ ed è perpendicolare a $\pi$, e si calcoli la distanza del punto $P = (1, 1, 1)$ da $\tau$. **[2 punti]**

### Esercizio 2

Al variare del parametro $k \in \mathbb{R}$ si considerino
$$
A_k = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & k \\ 2 & k + 1 & 3 \end{pmatrix}, \qquad \vec{b} = \begin{pmatrix} 1 \\ 0 \\ 3 \end{pmatrix}
$$

1. Dire per quali valori di $k$ la matrice $A_k$ è invertibile. **[2 punti]**
2. Per $k = 1$ si calcoli $A_1^{-1}$ con il metodo di Gauss-Jordan. **[2 punti]**
3. Per ciascun valore di $k$ per cui $A_k$ non è invertibile, dire se il sistema $A_k\vec{x} = \vec{b}$ è compatibile e, in caso affermativo, scriverne le soluzioni nella forma $\vec{x}_0 + N(A_k)$. **[2 punti]**

### Domande

1. Si dia la definizione di rango di una matrice e si enunci il teorema che lega rango e invertibilità di una matrice quadrata. Si fornisca un esempio di matrice $3 \times 3$ **senza elementi nulli** che non è invertibile, motivando. **[1,5 punti]**
2. Si dia la definizione di prodotto scalare di due vettori geometrici e se ne elenchino le proprietà. Si forniscano due vettori non nulli di $\mathbb{R}^3$ ortogonali fra loro, nessuno dei due parallelo a un asse coordinato. **[1,5 punti]**

## Correzione

### Esercizio 1

> [!example]- Soluzione
> **Risultati.** 1. $Q = (0, 1, 2)$. 2. $s : (3u,\ 1 - 2u,\ 2 + u)$, $u \in \mathbb{R}$. 3. $\tau : 3x - 2y + z = 0$, $d(P, \tau) = \frac{\sqrt{14}}{7}$.
>
> **Come si riconosce.** Retta e piano: per la posizione reciproca serve $\vec{n} \cdot \vec{v}$, e il punto comune si trova col punto generico della retta sostituito nel piano. Una retta "contenuta in $\pi$ e ortogonale a $r$" ha una direzione ortogonale a **due** vettori noti, $\vec{n}$ e $\vec{v}$: è il metodo dei due prodotti scalari nulli, perché il prodotto vettoriale non è in programma. "Piano che contiene $r$" vuol dire fascio di sostegno $r$, e "perpendicolare a $\pi$" vuol dire normali ortogonali.
>
> **1. Posizione reciproca e punto comune.**
> - Parametriche di $r$: pongo $y = t$. Dalla prima $x = y - 1 = t - 1$, dalla seconda $z = 3 - y = 3 - t$. Quindi $r : (t - 1,\ t,\ 3 - t)$ e $\vec{v} = (1, 1, -1)$.
> - Controllo: $(t - 1) - t + 1 = 0$ e $t + (3 - t) - 3 = 0$ per ogni $t$.
> - $\vec{n} = (1, 2, 1)$ e $\vec{n} \cdot \vec{v} = 1 + 2 - 1 = 2 \neq 0$: la retta non è parallela al piano, quindi lo incontra in un punto solo. Non è perpendicolare, perché $\vec{v}$ non è multiplo di $\vec{n}$.
> - Punto comune: sostituisco il punto generico di $r$ in $\pi$:
> $$
> (t - 1) + 2t + (3 - t) - 4 = 2t - 2 = 0
> $$
>   quindi $t = 1$ e $Q = (0, 1, 2)$. Il coefficiente di $t$ è proprio $\vec{n} \cdot \vec{v} = 2$.
> - Verifica: in $\pi$, $0 + 2 + 2 - 4 = 0$; in $r$, $0 - 1 + 1 = 0$ e $1 + 2 - 3 = 0$.
>
> **2. Retta in $\pi$ per $Q$ ortogonale a $r$.**
> - Direzione $\vec{u} = (a, b, c)$ con due condizioni:
>   - $s \perp r$: $\vec{u} \cdot \vec{v} = a + b - c = 0$;
>   - $s$ parallela a $\pi$: $\vec{u} \cdot \vec{n} = a + 2b + c = 0$. Siccome $s$ passa per $Q \in \pi$, parallela vuol dire **contenuta**.
> - Sommo le due equazioni: $2a + 3b = 0$. Con $a = 3$ viene $b = -2$, e dalla prima $c = a + b = 1$. Quindi $\vec{u} = (3, -2, 1)$.
> - Verifica: $\vec{u} \cdot \vec{v} = 3 - 2 - 1 = 0$ e $\vec{u} \cdot \vec{n} = 3 - 4 + 1 = 0$.
> - Parametriche da $Q$: $s : (3u,\ 1 - 2u,\ 2 + u)$, $u \in \mathbb{R}$.
> - Verifica che $s \subset \pi$: $3u + 2(1 - 2u) + (2 + u) - 4 = 3u + 2 - 4u + 2 + u - 4 = 0$ per ogni $u$. E $s$ incontra $r$ in $Q$ (con $u = 0$): ortogonale e incidente.
>
> **3. Piano per $r$ perpendicolare a $\pi$, e distanza.**
> - Fascio di sostegno $r$: $\lambda(x - y + 1) + \mu(y + z - 3) = 0$, cioè $\lambda x + (\mu - \lambda)y + \mu z + (\lambda - 3\mu) = 0$, con normale $\vec{n}_\tau = (\lambda,\ \mu - \lambda,\ \mu)$.
> - $\tau \perp \pi$ vuol dire $\vec{n}_\tau \cdot \vec{n} = 0$: $\lambda + 2(\mu - \lambda) + \mu = -\lambda + 3\mu = 0$, quindi $\lambda = 3\mu$.
> - Con $\mu = 1$, $\lambda = 3$: $3(x - y + 1) + (y + z - 3) = 3x - 3y + 3 + y + z - 3 = 3x - 2y + z = 0$.
> - Verifica: $\vec{n}_\tau \cdot \vec{n} = 3 - 4 + 1 = 0$. Contiene $r$: il punto $(-1, 0, 3)$ ($t = 0$) dà $-3 - 0 + 3 = 0$ e $Q$ dà $0 - 2 + 2 = 0$, due punti di $r$.
> - Coerenza col punto 2: $\vec{n}_\tau = (3, -2, 1) = \vec{u}$. Non è un caso: $\vec{n}_\tau$ è ortogonale a $\vec{v}$ (perché $\tau$ contiene $r$) e a $\vec{n}$ (perché $\tau \perp \pi$), le stesse due condizioni che definivano $\vec{u}$.
> - Distanza con la formula punto-piano:
> $$
> d(P, \tau) = \frac{|3 \cdot 1 - 2 \cdot 1 + 1|}{\sqrt{3^2 + (-2)^2 + 1^2}} = \frac{2}{\sqrt{14}} = \frac{2\sqrt{14}}{14} = \frac{\sqrt{14}}{7}
> $$
> - Controllo di buon senso: $\frac{\sqrt{14}}{7} \approx 0{,}53$, più piccolo di $d(P, Q) = \sqrt{1 + 0 + 1} = \sqrt2 \approx 1{,}41$, la distanza da un punto qualsiasi di $\tau$.
>
> **Griglia.** 1: parametriche (0,5), $\vec{n} \cdot \vec{v} \neq 0$ con conclusione (0,5), $Q$ con verifica (1). 2: le due condizioni su $\vec{u}$ (1), direzione e retta (0,5), verifica che sta in $\pi$ (0,5). 3: fascio e condizione $\vec{n}_\tau \cdot \vec{n} = 0$ (1), equazione (0,5), distanza (0,5).

> [!warning]- Errori tipici su questo esercizio
> - Nel punto 2 imporre solo $\vec{u} \perp \vec{v}$: le direzioni ortogonali a $r$ sono infinite e quasi tutte escono da $\pi$. Serve anche $\vec{u} \cdot \vec{n} = 0$.
> - Nel punto 3 imporre $\vec{n}_\tau$ **parallelo** a $\vec{n}$: quello dà un piano parallelo a $\pi$, che per di più non può contenere $r$ (che buca $\pi$). Perpendicolari vuol dire prodotto scalare delle normali nullo.
> - Prendere come direzione di $r$ una delle normali $(1, -1, 0)$ o $(0, 1, 1)$ delle cartesiane: quelle sono ortogonali a $r$.
> - Dimenticare valore assoluto o radice nella formula punto-piano.

### Esercizio 2

> [!example]- Soluzione
> **Risultati.** 1. $A_k$ è invertibile se e solo se $k \neq 0$ e $k \neq 2$. 2. $A_1^{-1} = \begin{pmatrix} 4 & -1 & -1 \\ -1 & 1 & 0 \\ -2 & 0 & 1 \end{pmatrix}$. 3. Per $k = 0$: $\vec{x} = (2, -1, 0) + t(-2, 1, 1)$, $t \in \mathbb{R}$. Per $k = 2$: incompatibile.
>
> **Come si riconosce.** "Per quali $k$ è invertibile" è una domanda di rango: per il teorema ★★★, $A_k$ è invertibile se e solo se $\operatorname{rg}(A_k) = 3$. Si riduce tenendo $k$ e si guarda dove si annulla un pivot. L'inversa si calcola con $[A \mid I_3]$. Il punto 3 è Rouché-Capelli sui valori critici. Conviene ridurre $[A_k \mid \vec{b}]$ una volta sola con $k$ in lettere: la stessa riduzione serve ai punti 1 e 3.
>
> **1. Invertibilità.** Riduco $[A_k \mid \vec{b}]$ (la parte sinistra serve qui, la colonna $\vec{b}$ al punto 3):
> $$
> \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 2 & k & 0 \\ 2 & k + 1 & 3 & 3 \end{array}\right)
> $$
> - $E_{21}(-1)$: $R_2 - R_1 = (0,\ 1,\ k - 1 \mid 0 - 1) = (0, 1, k - 1 \mid -1)$.
> - $E_{31}(-2)$: $R_3 - 2R_1 = (0,\ k + 1 - 2,\ 3 - 2 \mid 3 - 2) = (0, k - 1, 1 \mid 1)$.
> - $E_{32}(-(k - 1))$: $R_3 - (k - 1)R_2 = (0,\ 0,\ 1 - (k - 1)^2 \mid 1 + (k - 1)) = (0, 0, 1 - (k - 1)^2 \mid k)$.
>
> Il pivot della seconda riga vale $1$, quindi il passo $E_{32}(-(k - 1))$ non divide per niente: vale per ogni $k$. Fattorizzo il terzo elemento come differenza di quadrati:
> $$
> 1 - (k - 1)^2 = (1 - (k - 1))(1 + (k - 1)) = (2 - k)\,k
> $$
> $$
> \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & k - 1 & -1 \\ 0 & 0 & k(2 - k) & k \end{array}\right)
> $$
> - $k \neq 0, 2$: tre pivot, $\operatorname{rg}(A_k) = 3$, **invertibile**.
> - $k = 0$ o $k = 2$: la terza riga di $A_k$ si annulla, $\operatorname{rg}(A_k) = 2 < 3$, **non invertibile**.
>
> **2. Inversa per $k = 1$.** $A_1 = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 1 \\ 2 & 2 & 3 \end{pmatrix}$.
> $$
> [A_1 \mid I_3] = \left(\begin{array}{ccc|ccc} 1 & 1 & 1 & 1 & 0 & 0 \\ 1 & 2 & 1 & 0 & 1 & 0 \\ 2 & 2 & 3 & 0 & 0 & 1 \end{array}\right)
> $$
> - $E_{21}(-1)$: $R_2 - R_1 = (0, 1, 0 \mid -1, 1, 0)$.
> - $E_{31}(-2)$: $R_3 - 2R_1 = (0, 0, 1 \mid -2, 0, 1)$.
>
> Il blocco sinistro è già a scalini con tre pivot uguali a $1$: invertibile, come previsto dal punto 1. Riduzione all'indietro, zeri sopra i pivot:
> - $E_{12}(-1)$: $R_1 - R_2 = (1, 0, 1 \mid 1 + 1,\ 0 - 1,\ 0) = (1, 0, 1 \mid 2, -1, 0)$.
> - $E_{13}(-1)$: $R_1 - R_3 = (1, 0, 0 \mid 2 + 2,\ -1 - 0,\ 0 - 1) = (1, 0, 0 \mid 4, -1, -1)$.
> $$
> \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & 4 & -1 & -1 \\ 0 & 1 & 0 & -1 & 1 & 0 \\ 0 & 0 & 1 & -2 & 0 & 1 \end{array}\right) \qquad A_1^{-1} = \begin{pmatrix} 4 & -1 & -1 \\ -1 & 1 & 0 \\ -2 & 0 & 1 \end{pmatrix}
> $$
> **Verifica** $A_1A_1^{-1} = I_3$, riga per colonna:
> - riga $(1, 1, 1)$: $4 - 1 - 2 = 1$; $-1 + 1 + 0 = 0$; $-1 + 0 + 1 = 0$;
> - riga $(1, 2, 1)$: $4 - 2 - 2 = 0$; $-1 + 2 + 0 = 1$; $-1 + 0 + 1 = 0$;
> - riga $(2, 2, 3)$: $8 - 2 - 6 = 0$; $-2 + 2 + 0 = 0$; $-2 + 0 + 3 = 1$.
>
> **3. Sistemi per $k = 0$ e $k = 2$.** Dalla riduzione del punto 1 la terza riga è $(0, 0, k(2 - k) \mid k)$.
> - **$k = 2$**: diventa $(0, 0, 0 \mid 2)$, cioè $0 = 2$. $\operatorname{rg}(A_2) = 2 \neq 3 = \operatorname{rg}([A_2 \mid \vec{b}])$: per Rouché-Capelli **incompatibile**. Si vede anche sulle righe di partenza: in $A_2$ la terza riga $(2, 3, 3)$ è la somma delle prime due, $(1, 1, 1) + (1, 2, 2)$, ma i termini noti danno $1 + 0 = 1 \neq 3$.
> - **$k = 0$**: diventa $(0, 0, 0 \mid 0)$. $\operatorname{rg}(A_0) = \operatorname{rg}([A_0 \mid \vec{b}]) = 2 < 3$: compatibile, con $3 - 2 = 1$ parametro. Restano
> $$
> \begin{cases} x + y + z = 1 \\ y - z = -1 \end{cases}
> $$
>   (la seconda è la riga $(0, 1, k - 1 \mid -1)$ con $k = 0$). La colonna di $z$ non ha pivot: $z = t$. Allora $y = -1 + t$ e $x = 1 - y - z = 1 - (t - 1) - t = 2 - 2t$.
> $$
> \vec{x} = \begin{pmatrix} 2 - 2t \\ -1 + t \\ t \end{pmatrix} = \underbrace{\begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}}_{\vec{x}_0} + t\begin{pmatrix} -2 \\ 1 \\ 1 \end{pmatrix}, \qquad N(A_0) = \langle (-2, 1, 1) \rangle
> $$
>   coerente con $\operatorname{null}(A_0) = 3 - \operatorname{rg}(A_0) = 1$.
>
> **Verifica** con $A_0 = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 0 \\ 2 & 1 & 3 \end{pmatrix}$: $A_0\vec{x}_0 = (2 - 1 + 0,\ 2 - 2 + 0,\ 4 - 1 + 0) = (1, 0, 3) = \vec{b}$; $A_0(-2, 1, 1) = (-2 + 1 + 1,\ -2 + 2 + 0,\ -4 + 1 + 3) = (0, 0, 0)$.
>
> **Griglia.** 1: riduzione con $k$ (1), fattorizzazione e conclusione col teorema (1). 2: Gauss-Jordan su $[A_1 \mid I_3]$ (1,5), verifica (0,5). 3: $k = 2$ incompatibile con Rouché-Capelli (0,5), $k = 0$ con $\vec{x}_0$ e nucleo (1,5).

> [!warning]- Errori tipici su questo esercizio
> - Scegliere come pivot della seconda colonna $k - 1$ (scambiando le righe): poi bisogna dividere per $k - 1$ e studiare a parte $k = 1$, che non è nemmeno un valore critico. Il pivot $1$ già presente evita il problema.
> - Fermarsi alla terza riga $(0, 0, 1 - (k - 1)^2)$ senza fattorizzare e sbagliare i valori: $1 - (k - 1)^2 = 0$ vuol dire $k - 1 = \pm 1$, cioè $k = 0$ o $k = 2$, non $k = \pm 1$.
> - Per $k = 0$ calcolare $N(A_0)$ con la colonna $\vec{b}$ ancora dentro: il nucleo si calcola con termini noti nulli. Il vettore che moltiplica $t$ va verificato con $A_0\vec{v} = \vec{0}$, non con $\vec{b}$.
> - Non verificare l'inversa: è il controllo che trova gli errori di segno nel blocco destro.

### Domande

> [!example]- Domanda 1: rango e invertibilità
> **Definizione** (parole della prof). Il **rango** di una matrice $A$, $\operatorname{rg}(A)$, è il numero di pivot di una sua forma a scalini. Non dipende dalla forma a scalini scelta.
>
> **Teorema.** Sia $A \in M_n(\mathbb{R})$. Allora $A$ è invertibile se e solo se $\operatorname{rg}(A) = n$.
>
> **Esempio.** $B = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{pmatrix}$.
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0, -1, -2)$.
> - $E_{31}(-3)$: $R_3 - 3R_1 = (0, -2, -4)$.
> - $E_{32}(-2)$: $R_3 - 2R_2 = (0, 0, 0)$.
>
> Due pivot: $\operatorname{rg}(B) = 2 < 3$, quindi per il teorema $B$ **non è invertibile**. Nessun elemento è nullo e nessuna riga è multipla di un'altra, ma la terza è combinazione delle prime due: $2(2, 3, 4) - (1, 2, 3) = (3, 4, 5)$.
>
> L'esempio serve a mostrare che una matrice senza zeri e senza righe proporzionali può comunque non essere invertibile: si decide col rango, non a occhio.

> [!example]- Domanda 2: prodotto scalare
> **Definizione.** Dati due vettori geometrici $\vec{v} = \overrightarrow{AB}$ e $\vec{w} = \overrightarrow{AC}$ con lo stesso estremo iniziale, e detto $\theta \in [0, \pi]$ l'angolo fra loro,
> $$
> \vec{v} \cdot \vec{w} = |\vec{v}|\,|\vec{w}|\cos\theta
> $$
> (e $\vec{v} \cdot \vec{w} = 0$ se uno dei due è $\vec{0}$). In coordinate: $\vec{v} \cdot \vec{w} = v_1w_1 + v_2w_2 + v_3w_3$. Due vettori sono ortogonali se e solo se $\vec{v} \cdot \vec{w} = 0$.
>
> **Proprietà** (prof, 14/9), per ogni $\vec{v}, \vec{w}, \vec{u}$ e $\lambda \in \mathbb{R}$:
> 1. commutativa: $\vec{v} \cdot \vec{w} = \vec{w} \cdot \vec{v}$;
> 2. compatibilità col prodotto per scalare: $(\lambda\vec{v}) \cdot \vec{w} = \lambda(\vec{v} \cdot \vec{w})$;
> 3. distributiva: $\vec{v} \cdot (\vec{w} + \vec{u}) = \vec{v} \cdot \vec{w} + \vec{v} \cdot \vec{u}$;
> 4. $\vec{v} \cdot \vec{v} = |\vec{v}|^2 \geq 0$.
>
> **Esempio.** $\vec{v} = (1, 2, -1)$, $\vec{w} = (1, 0, 1)$: $\vec{v} \cdot \vec{w} = 1 + 0 - 1 = 0$, quindi ortogonali. Sono non nulli ($|\vec{v}| = \sqrt6$, $|\vec{w}| = \sqrt2$) e nessuno è parallelo a un asse, perché ognuno ha almeno due componenti diverse da zero. Dalla definizione $\cos\theta = 0$, cioè $\theta = \frac{\pi}{2}$.
>
> Il prodotto scalare è un **numero**, non un vettore, e il prodotto nullo non vuol dire che uno dei due vettori sia nullo: l'esempio lo mostra.

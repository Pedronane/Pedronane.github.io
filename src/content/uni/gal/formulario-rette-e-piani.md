---
title: Formulario vettori, rette e piani
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: cheatsheet
stato: in corso
data: 2026-09-22
lezioni: []
ordine: 999
---

Tutte le formule della geometria nello spazio fatte a lezione (appunti della prof, <span class="src">p. 2-27</span>, e capitolo 1 della dispensa Postinghel), quelle che servono per il foglio 1 del tutorato e per il primo parziale. Argomento di [Geometria e Algebra Lineare](/uni/gal/). La teoria sta in [Vettori geometrici](/uni/gal/vettori-geometrici/), [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/), [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/), [Distanze nello spazio](/uni/gal/distanze-nello-spazio/). Strategia ed esercizi svolti in [Foglio 1 svolto](/uni/gal/foglio-1-svolto/).

Convenzione: $\vec{v} = (v_1, v_2, v_3)$, punti $A = (x_A, y_A, z_A)$, piani con normale $\vec{n} = (a,b,c)$.

## Vettori

| cosa | formula |
|---|---|
| coordinate di un segmento orientato | $\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A)$ |
| somma | $\vec{v} + \vec{w} = (v_1 + w_1,\ v_2 + w_2,\ v_3 + w_3)$ |
| prodotto per scalare | $\lambda\vec{v} = (\lambda v_1,\ \lambda v_2,\ \lambda v_3)$ |
| prodotto scalare, coordinate | $\vec{v} \cdot \vec{w} = v_1 w_1 + v_2 w_2 + v_3 w_3$ |
| prodotto scalare, geometrico | $\vec{v} \cdot \vec{w} = \lvert\vec{v}\rvert\,\lvert\vec{w}\rvert\cos\theta$, con $0 \le \theta \le \pi$ |
| modulo | $\lvert\vec{v}\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2} = \sqrt{\vec{v} \cdot \vec{v}}$ |
| angolo fra due vettori | $\cos\theta = \dfrac{\vec{v} \cdot \vec{w}}{\lvert\vec{v}\rvert\,\lvert\vec{w}\rvert}$ |
| ortogonalità | $\vec{v} \perp \vec{w} \iff \vec{v} \cdot \vec{w} = 0$ |
| parallelismo | $\vec{v} \parallel \vec{w} \iff \vec{w} = \lambda\vec{v}$ per qualche $\lambda \neq 0$ |
| normalizzazione | $\vec{e} = \dfrac{\vec{v}}{\lvert\vec{v}\rvert} = \dfrac{1}{\sqrt{v_1^2+v_2^2+v_3^2}}(v_1,v_2,v_3)$ |
| proiezione su un versore | $pr_{\vec{e}}(\vec{v}) = (\vec{v} \cdot \vec{e})\,\vec{e}$ |
| proiezione su un vettore | $pr_{\vec{w}}(\vec{v}) = \dfrac{\vec{v} \cdot \vec{w}}{\lvert\vec{w}\rvert^2}\,\vec{w}$ |

Proprietà del prodotto scalare da citare nelle domande di teoria:

$$
\vec{v} \cdot \vec{w} = \vec{w} \cdot \vec{v} \qquad (\lambda\vec{v}) \cdot \vec{w} = \lambda(\vec{v} \cdot \vec{w}) \qquad \vec{v} \cdot (\vec{u} + \vec{w}) = \vec{v} \cdot \vec{u} + \vec{v} \cdot \vec{w} \qquad \vec{v} \cdot \vec{v} = \lvert\vec{v}\rvert^2 \ge 0
$$

## Piano

| cosa | formula |
|---|---|
| equazione cartesiana | $ax + by + cz + d = 0$, e $\vec{n} = (a,b,c)$ è normale al piano |
| piano per $P$ con normale $\vec{n}$ | $a(x - x_P) + b(y - y_P) + c(z - z_P) = 0$ |
| equazioni parametriche | $\begin{cases} x = x_A + t v_1 + s w_1 \\ y = y_A + t v_2 + s w_2 \\ z = z_A + t v_3 + s w_3\end{cases}$ con $\vec{v}, \vec{w}$ non paralleli |
| piano per tre punti $A,B,C$ | parametriche da $A$ con direzioni $\overrightarrow{AB}$ e $\overrightarrow{AC}$, poi si eliminano $t$ e $s$ (metodo della prof); in alternativa la normale $\vec{n}=(a,b,c)$ risolve $\vec{n} \cdot \overrightarrow{AB} = 0$, $\vec{n} \cdot \overrightarrow{AC} = 0$ |
| proiezione di $P$ su un piano | retta per $P$ con direzionale $\vec{n}$, intersecata col piano: il punto è la proiezione $H$ |

La lettura al volo: i coefficienti di $x,y,z$ **sono** le componenti di una normale. Il termine noto $d$ sposta il piano parallelamente a sé stesso.

## Retta

| cosa | formula |
|---|---|
| equazioni parametriche | $\begin{cases} x = x_A + t v_1 \\ y = y_A + t v_2 \\ z = z_A + t v_3 \end{cases}$, $t \in \mathbb{R}$ |
| equazioni cartesiane | $\begin{cases} ax + by + cz + d = 0 \\ a'x + b'y + c'z + d' = 0\end{cases}$, intersezione di due piani |
| retta per $A$ e $B$ | direzione $\vec{v} = \overrightarrow{AB}$, poi parametriche da $A$ |
| da parametriche a cartesiane | si ricava $t$ da un'equazione e lo si sostituisce nelle altre due |
| da cartesiane a parametriche | si risolve il sistema ponendo una variabile uguale a $t$ |
| direzione da due cartesiane | metodo del corso: si pone una variabile uguale a $t$ e i coefficienti di $t$ nelle parametriche sono $\vec{v}$; in alternativa $\vec{v}$ risolve $\vec{v} \cdot \vec{n} = 0$ e $\vec{v} \cdot \vec{n}' = 0$, con $\vec{n}, \vec{n}'$ normali dei due piani |

## Fascio di piani

Data $r$ come intersezione dei piani $\pi: ax+by+cz+d=0$ e $\pi': a'x+b'y+c'z+d'=0$, il fascio di sostegno $r$ è

$$
\lambda(ax + by + cz + d) + \mu(a'x + b'y + c'z + d') = 0, \qquad (\lambda,\mu) \neq (0,0)
$$

Ogni piano che contiene $r$ si ottiene per una coppia $(\lambda,\mu)$. In pratica, come fa la prof, si impone la condizione (passaggio per un punto, parallelismo), si pone $\lambda = 1$ e si ricava $\mu$. Se la condizione dà $\lambda = 0$, si pone $\mu = 1$: il piano cercato è $\pi'$.

## Posizioni reciproche

Rette $r, r'$ con direzioni $\vec{v}, \vec{w}$. Piani $\pi, \pi'$ con normali $\vec{n}, \vec{n}'$.

| coppia | parallele | perpendicolari | incidenti |
|---|---|---|---|
| retta, retta | $\vec{v} \parallel \vec{w}$ | $\vec{v} \cdot \vec{w} = 0$ | il sistema delle due ha soluzione |
| piano, piano | $\vec{n} \parallel \vec{n}'$ | $\vec{n} \cdot \vec{n}' = 0$ | se non paralleli, si tagliano in una retta |
| retta, piano | $\vec{n} \cdot \vec{v} = 0$ | $\vec{n} \parallel \vec{v}$ | $\vec{n} \cdot \vec{v} \neq 0$, un punto solo |

Due trappole ricorrenti:

- $\vec{n} \cdot \vec{v} = 0$ dice soltanto che la retta non buca il piano. Può essere parallela **o contenuta**: si distingue sostituendo un punto della retta nell'equazione del piano.
- $\vec{v} \parallel \vec{w}$ vale anche per due rette coincidenti: si distingue prendendo un punto della prima e controllando se sta sulla seconda.

Due rette **sghembe** sono quelle che non sono né parallele né incidenti. Complanari significa parallele oppure incidenti, e le sghembe sono esattamente le non complanari.

## Distanze

| cosa | formula o metodo |
|---|---|
| punto, punto | $d(A,B) = \sqrt{(x_A - x_B)^2 + (y_A - y_B)^2 + (z_A - z_B)^2}$ |
| punto, piano | $d(P, \pi) = \dfrac{\lvert a x_P + b y_P + c z_P + d \rvert}{\sqrt{a^2+b^2+c^2}}$ |
| punto, retta | si trova il piede $H$ della perpendicolare, poi $d(P,r) = d(P,H)$ |
| retta, retta incidenti | $0$ |
| retta, retta parallele | si prende $P \in r$ e si calcola $d(P, r')$ |
| retta, retta sghembe | perpendicolare comune, oppure piano del fascio |
| retta, piano paralleli | si prende $P \in r$ e si calcola $d(P, \pi)$ |
| piano, piano paralleli | si prende $P \in \pi$ e si calcola $d(P, \pi')$ |

**Punto-retta, metodo del punto generico.** Si scrive $Q(t)$ su $r$ dalle parametriche, si impone $\overrightarrow{PQ(t)} \cdot \vec{v} = 0$, si ricava $t_0$, si pone $H = Q(t_0)$ e si calcola $d(P,H)$.

**Punto-retta, metodo del piano ausiliario.** Si scrive il piano per $P$ perpendicolare a $r$, cioè con normale $\vec{v}$, si interseca con $r$ per avere $H$, si calcola $d(P,H)$.

**Sghembe, perpendicolare comune.** Punto generico $P(t)$ su $r$ e $Q(s)$ su $r'$, con due parametri diversi, poi

$$
\begin{cases} \overrightarrow{P(t)Q(s)} \cdot \vec{v} = 0 \\ \overrightarrow{P(t)Q(s)} \cdot \vec{w} = 0 \end{cases}
$$

Si risolve in $t$ e $s$, si ottengono $P = P(t_0)$ e $Q = Q(s_0)$, e la distanza è $d(P,Q)$.

**Sghembe, piano del fascio.** Si scrive il fascio di sostegno $r$, si impone $\vec{n} \cdot \vec{w} = 0$ per trovare il piano $\pi$ parallelo a $r'$, poi si prende un punto di $r'$ e si calcola la sua distanza da $\pi$ con la formula punto-piano.

## Fuori programma per ora

Il **prodotto vettoriale** arriva al capitolo 5 della dispensa, dopo il determinante, e sul foglio 1 non va usato:

$$
\vec{v} \times \vec{w} = (v_2 w_3 - v_3 w_2,\ v_3 w_1 - v_1 w_3,\ v_1 w_2 - v_2 w_1)
$$

Dà un vettore ortogonale a entrambi. Torna comodo come **controllo** dopo aver risolto il sistema di ortogonalità: se la direzione che hai trovato non è proporzionale a $\vec{v} \times \vec{w}$, c'è un errore di conto da qualche parte.

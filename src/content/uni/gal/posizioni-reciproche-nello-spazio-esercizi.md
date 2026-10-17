---
title: Posizioni reciproche nello spazio (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-21
lezioni: []
ordine: 2
---

Esercizi tipo esame di [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Quelli del foglio 1 sono in [Foglio 1 svolto](/uni/gal/foglio-1-svolto/); qui ci sono gli esercizi extra di geometria (1, 2 e 7, con la soluzione completa che il foglio non dà) e altri sugli stessi schemi.

**Esercizio 1** (esercizi extra, es. 2). Si considerino i piani $\pi : x - y + z = 0$ e $\pi' : 8x + y - z = 0$.

- a) Si trovi la posizione reciproca di $\pi$ e $\pi'$.
- b) Si trovi un'equazione cartesiana del piano $\pi''$ passante per $P = (1, 1, 1)$ e ortogonale a entrambi.

> [!tip]- Indizio
> a) Confronta le normali. b) È l'esempio della prof di p. 20 con altri numeri.

> [!example]- Soluzione
> *Come lo riconosco*: due piani, poi "ortogonale a entrambi": direzione ortogonale a due vettori.
>
> **a)** $\vec{n} = (1, -1, 1)$ e $\vec{n}' = (8, 1, -1)$. Dalla prima coordinata il fattore sarebbe $8$, dalla seconda $-1$: non proporzionali, **incidenti**. $\vec{n} \cdot \vec{n}' = 8 - 1 - 1 = 6 \neq 0$: **non ortogonali**.
>
> **b)** Normale $(a, b, c)$ con
> $$
> \begin{cases} a - b + c = 0 \\ 8a + b - c = 0 \end{cases}
> $$
> - Sommo: $9a = 0$, quindi $a = 0$.
> - Nella prima: $-b + c = 0$, quindi $c = b$.
> - Con $b = 1$: $\vec{n}'' = (0, 1, 1)$.
>
> Piano $y + z + d = 0$; passaggio per $P$: $1 + 1 + d = 0$, $d = -2$.
> $$
> \pi'' : y + z - 2 = 0
> $$
> **Verifica.** $\vec{n}'' \cdot \vec{n} = 0 - 1 + 1 = 0$, $\vec{n}'' \cdot \vec{n}' = 0 + 1 - 1 = 0$, $P$: $1 + 1 - 2 = 0$. Coincide con la soluzione del foglio. Controllo di buon senso: entrambi i piani contengono i punti con $x = 0$, $y = z$ (in $\pi$: $-y + y = 0$; in $\pi'$: $y - y = 0$), quindi $\pi \cap \pi'$ ha direzione $(0, 1, 1) = \vec{n}''$, come nella figura dell'esempio della prof.

**Esercizio 2.** Siano $\pi : x + y - z + k = 0$, con $k \in \mathbb{R}$, e $r : (2t,\ 1 - t,\ 3 + t)$. Per quali $k$ la retta è contenuta nel piano? Com'è la posizione reciproca per gli altri valori?

> [!tip]- Indizio
> Il parametro $k$ non tocca la normale. Calcola prima $\vec{n} \cdot \vec{v}$.

> [!example]- Soluzione
> *Come lo riconosco*: retta e piano con un parametro nel termine noto: il prodotto scalare non dipende da $k$, il punto sì.
>
> $\vec{n} = (1, 1, -1)$ e $\vec{v} = (2, -1, 1)$. $\vec{n} \cdot \vec{v} = 2 - 1 - 1 = 0$: retta e piano sono **paralleli** per ogni $k$. Resta da capire se la retta sta dentro.
>
> Prendo il punto $A = (0, 1, 3)$ di $r$ ($t = 0$) e lo sostituisco: $0 + 1 - 3 + k = 0$, cioè $k = 2$.
> - $k = 2$: $A$ sta sul piano e la retta è parallela, quindi **$r \subset \pi$**. Controllo con un secondo punto, $t = 1$: $(2, 0, 4)$ dà $2 + 0 - 4 + 2 = 0$.
> - $k \neq 2$: **paralleli e disgiunti**.
>
> Col lemma: il punto generico dà $2t + (1 - t) - (3 + t) + k = k - 2$, e la $t$ si cancella. L'equazione $k - 2 = 0$ è un'identità per $k = 2$ e impossibile altrimenti. Il parametro $k$ sposta il piano parallelamente a sé stesso, e c'è una sola posizione in cui il piano contiene la retta.

**Esercizio 3.** Siano $\pi : 2x - y + z - 1 = 0$ e $\pi' : x + y - z + 4 = 0$.

- a) Determina la posizione reciproca.
- b) Trova le parametriche della retta $\pi \cap \pi'$.
- c) Trova il piano per l'origine ortogonale a entrambi.

> [!tip]- Indizio
> b) Poni $z = t$ e risolvi un sistema $2 \times 2$ in $x$, $y$. c) Confronta la normale trovata con il direzionale di b).

> [!example]- Soluzione
> *Come lo riconosco*: tre richieste in catena sugli stessi due piani.
>
> **a)** $\vec{n} = (2, -1, 1)$ e $\vec{n}' = (1, 1, -1)$ non sono proporzionali (fattore $\frac{1}{2}$ dalla prima coordinata, $-1$ dalla seconda): **incidenti**. $\vec{n} \cdot \vec{n}' = 2 - 1 - 1 = 0$: anche **ortogonali**.
>
> **b)** Pongo $z = t$ e porto i termini con $t$ a destra:
> $$
> \begin{cases} 2x - y = 1 - t \\ x + y = -4 + t \end{cases}
> $$
> - Sommo: $3x = -3$, quindi $x = -1$.
> - Dalla seconda: $y = -4 + t - x = -4 + t + 1 = -3 + t$.
> $$
> \pi \cap \pi' : \begin{cases} x = -1 \\ y = -3 + t \\ z = t \end{cases} \qquad \vec{v} = (0, 1, 1)
> $$
> Verifica: in $\pi$, $-2 - (-3 + t) + t - 1 = 0$; in $\pi'$, $-1 + (-3 + t) - t + 4 = 0$.
>
> **c)** La normale $\vec{n}''$ deve essere ortogonale a $\vec{n}$ e a $\vec{n}'$: $2a - b + c = 0$ e $a + b - c = 0$. Sommando: $3a = 0$, quindi $a = 0$; poi $c = b$. Con $b = 1$: $\vec{n}'' = (0, 1, 1)$. Per l'origine $d'' = 0$:
> $$
> y + z = 0
> $$
> **Controllo.** $\vec{n}''$ coincide col direzionale di b): il piano ortogonale a due piani è ortogonale alla loro retta d'intersezione.

**Esercizio 4** (esercizi extra, es. 1). Si trovino equazioni parametriche della retta $r$ per $A = (2, 3, 1)$ e $B = (0, 0, 1)$ e della retta $r'$ per $C = (0, 0, 0)$ e $D = (4, 6, 0)$. Le rette sono complanari? Se sì, trova il piano che le contiene.

> [!tip]- Indizio
> Confronta i direzionali. Nel fascio, attenzione a quale dei due coefficienti puoi porre uguale a $1$.

> [!example]- Soluzione
> *Come lo riconosco*: rette per due punti, poi "complanari" e "piano che le contiene": albero dei casi, poi fascio.
>
> **Parametriche.** $\vec{v} = \overrightarrow{AB} = (0 - 2,\ 0 - 3,\ 1 - 1) = (-2, -3, 0)$ e $\vec{w} = \overrightarrow{CD} = (4, 6, 0)$.
> $$
> r : \begin{cases} x = 2 - 2t \\ y = 3 - 3t \\ z = 1 \end{cases} \qquad r' : \begin{cases} x = 4s \\ y = 6s \\ z = 0 \end{cases}
> $$
>
> **Complanari?** $\vec{w} = -2\vec{v}$: proporzionali, **parallele**. Distinte: $C$ ha $z = 0$, mentre su $r$ è sempre $z = 1$. Parallele distinte, quindi **complanari**.
>
> **Cartesiane di $r$.** La terza dà subito $z - 1 = 0$. Dalla prima $t = \frac{2 - x}{2}$; nella seconda $y = 3 - \frac{3(2 - x)}{2} = 3 - 3 + \frac{3}{2}x = \frac{3}{2}x$. Moltiplico per $2$: $3x - 2y = 0$.
>
> **Fascio e passaggio per $C$.** $\lambda(3x - 2y) + \mu(z - 1) = 0$. In $C = (0, 0, 0)$: $\lambda \cdot 0 + \mu \cdot (-1) = 0$, quindi $\mu = 0$. Qui **non** si sceglie $\mu = 1$: si pone $\lambda = 1$ e il piano è il primo dei due di partenza:
> $$
> \pi : 3x - 2y = 0
> $$
> **Verifica.** $A$: $6 - 6 = 0$. $B$: $0 - 0 = 0$. $C$: $0$. $D$: $12 - 12 = 0$. La soluzione del foglio dà il piano in parametriche, $x = 2 - 2t - 2s$, $y = 3 - 3t - 3s$, $z = 1 - s$: sostituendo, $3(2 - 2t - 2s) - 2(3 - 3t - 3s) = 0$ per ogni $t, s$. È lo stesso piano. Buon senso: il piano $3x = 2y$ è verticale (manca $z$), e infatti contiene due rette orizzontali ad altezze diverse.

**Esercizio 5.** Siano
$$
r : \begin{cases} x = 1 + t \\ y = -t \\ z = 2t \end{cases} \qquad s : \begin{cases} x - 2 = 0 \\ y - z + 3 = 0 \end{cases}
$$

- a) Determina la posizione reciproca di $r$ e $s$.
- b) Se sono complanari, trova un'equazione cartesiana del piano che le contiene.
- c) Trova le parametriche della retta per $O = (0,0,0)$ ortogonale a $r$ e a $s$.

> [!tip]- Indizio
> a) $s$ è in cartesiane: sostituisci le parametriche di $r$. c) Direzione ortogonale a due vettori.

> [!example]- Soluzione
> *Come lo riconosco*: è lo schema degli esercizi 1.11 e 1.15 del foglio 1.
>
> **Direzionali.** $\vec{v} = (1, -1, 2)$. Per $s$ pongo $z = u$: dalla prima $x = 2$, dalla seconda $y = z - 3 = u - 3$. Quindi $s : (2,\ -3 + u,\ u)$ e $\vec{w} = (0, 1, 1)$. Non proporzionali (la prima coordinata di $\vec{w}$ è $0$, quella di $\vec{v}$ no): **non parallele**.
>
> **a) Incidenti?** Sostituisco le parametriche di $r$ nelle cartesiane di $s$:
> - prima: $(1 + t) - 2 = 0$, quindi $t = 1$;
> - seconda: $-t - 2t + 3 = 0$, cioè $3 - 3t = 0$, quindi $t = 1$.
>
> Le due equazioni danno lo stesso $t$: **incidenti** nel punto $r(1) = (2, -1, 2)$. Controllo in $s$: $2 - 2 = 0$ e $-1 - 2 + 3 = 0$. Ortogonali? $\vec{v} \cdot \vec{w} = 0 - 1 + 2 = 1 \neq 0$, no.
>
> **b)** Incidenti, quindi complanari. Fascio di sostegno $s$: $\lambda(x - 2) + \mu(y - z + 3) = 0$. Prendo un punto di $r$ che non sta su $s$: $r(0) = (1, 0, 0)$, e infatti $1 - 2 \neq 0$. Passaggio:
> $$
> \lambda(1 - 2) + \mu(0 - 0 + 3) = 0 \quad\Longrightarrow\quad -\lambda + 3\mu = 0 \quad\Longrightarrow\quad \lambda = 3\mu
> $$
> Con $\mu = 1$, $\lambda = 3$: $3(x - 2) + (y - z + 3) = 0$. Sviluppo: $3x - 6 + y - z + 3 = 0$, cioè
> $$
> 3x + y - z - 3 = 0
> $$
> Verifica: $(1,0,0)$ dà $3 - 3 = 0$; il punto d'incidenza $(2,-1,2)$ dà $6 - 1 - 2 - 3 = 0$; $\vec{n} = (3,1,-1)$ ha $\vec{n} \cdot \vec{v} = 3 - 1 - 2 = 0$ e $\vec{n} \cdot \vec{w} = 0 + 1 - 1 = 0$.
>
> **c)** Direzione incognita $\vec{u} = (a, b, c)$ con $\vec{u} \cdot \vec{v} = 0$ e $\vec{u} \cdot \vec{w} = 0$:
> $$
> \begin{cases} a - b + 2c = 0 \\ b + c = 0 \end{cases}
> $$
> - Dalla seconda: $b = -c$.
> - Nella prima: $a + c + 2c = 0$, quindi $a = -3c$.
> - Con $c = 1$: $\vec{u} = (-3, -1, 1)$.
> $$
> \begin{cases} x = -3k \\ y = -k \\ z = k \end{cases}
> $$
> **Controllo.** $\vec{u} = -(3, 1, -1)$ è proporzionale alla normale del piano di b), come deve essere: una direzione ortogonale a due rette non parallele di un piano è ortogonale al piano.

**Esercizio 6** (esercizi extra, es. 7, prima parte). Sia $r$ la retta per $A = (-1, 3, 0)$ e $B = (0, 2, -1)$ e sia $r' : \{x - 2y + 1 = 0,\ y + z + 1 = 0\}$. Dimostrare che le due rette sono complanari e trovare un'equazione del piano che le contiene.

> [!tip]- Indizio
> Non sono parallele: cerca il punto comune sostituendo le parametriche di $r$ nelle cartesiane di $r'$. Per il piano, il fascio di sostegno $r'$ è già pronto.

> [!example]- Soluzione
> *Come lo riconosco*: "complanari" con una retta in cartesiane: fascio di sostegno quella retta, dopo aver escluso che siano sghembe. La seconda parte dell'esercizio (una distanza) è in [Distanze nello spazio](/uni/gal/distanze-nello-spazio/).
>
> **Direzionali.** $\vec{v} = \overrightarrow{AB} = (1, -1, -1)$, quindi $r : (-1 + t,\ 3 - t,\ -t)$. Per $r'$ pongo $y = s$: dalla prima $x = 2s - 1$, dalla seconda $z = -1 - s$. Quindi $\vec{w} = (2, 1, -1)$. Non proporzionali (fattore $2$ dalla prima coordinata, $-1$ dalla seconda).
>
> **Punto comune.** Sostituisco $r$ nelle cartesiane di $r'$:
> - prima: $(-1 + t) - 2(3 - t) + 1 = -1 + t - 6 + 2t + 1 = 3t - 6 = 0$, quindi $t = 2$;
> - seconda: $(3 - t) + (-t) + 1 = 4 - 2t = 0$, quindi $t = 2$.
>
> Stesso $t$: **incidenti** nel punto $r(2) = (1, 1, -2)$, quindi complanari.
>
> **Piano, col fascio di sostegno $r'$.** $A \notin r'$: nella prima equazione $-1 - 6 + 1 = -6 \neq 0$.
> $$
> \lambda(x - 2y + 1) + \mu(y + z + 1) = 0
> $$
> In $A = (-1, 3, 0)$: $\lambda(-1 - 6 + 1) + \mu(3 + 0 + 1) = -6\lambda + 4\mu = 0$, cioè $3\lambda = 2\mu$. Con $\lambda = 2$, $\mu = 3$ (niente frazioni):
> $$
> 2(x - 2y + 1) + 3(y + z + 1) = 0
> $$
> Sviluppo: $2x - 4y + 2 + 3y + 3z + 3 = 0$. Raccolgo $y$ ($-4y + 3y = -y$) e i numeri ($2 + 3 = 5$):
> $$
> \pi : 2x - y + 3z + 5 = 0
> $$
> **Verifica.** $A$: $-2 - 3 + 0 + 5 = 0$. $B$: $0 - 2 - 3 + 5 = 0$. Il punto comune $(1, 1, -2)$: $2 - 1 - 6 + 5 = 0$. Normale $(2, -1, 3)$: con $\vec{v}$, $2 + 1 - 3 = 0$; con $\vec{w}$, $4 - 1 - 3 = 0$.

**Esercizio 7.** Trova la retta per $P = (2, 0, 1)$ ortogonale e incidente a $r : \{x + y - 1 = 0,\ z - 2y = 0\}$.

> [!tip]- Indizio
> Punto generico $Q(t)$ di $r$, poi $\overrightarrow{Q(t)P} \cdot \vec{w} = 0$.

> [!example]- Soluzione
> *Come lo riconosco*: "ortogonale e incidente", come l'es. 4 del tutor.
>
> **Parametriche di $r$.** Pongo $y = t$: dalla prima $x = 1 - t$, dalla seconda $z = 2t$. $Q(t) = (1 - t,\ t,\ 2t)$, $\vec{w} = (-1, 1, 2)$. $P$ non sta su $r$: $2 + 0 - 1 = 1 \neq 0$.
>
> **Ortogonalità.**
> $$
> \overrightarrow{Q(t)P} = (2 - (1 - t),\ 0 - t,\ 1 - 2t) = (1 + t,\ -t,\ 1 - 2t)
> $$
> $$
> \overrightarrow{Q(t)P} \cdot \vec{w} = -(1 + t) + (-t) + 2(1 - 2t)
> $$
> Sviluppo: $-1 - t - t + 2 - 4t$. Raccolgo: $1 - 6t = 0$, quindi $t_0 = \frac{1}{6}$.
>
> **Direzionale.** $Q(t_0) = \left(\frac{5}{6}, \frac{1}{6}, \frac{1}{3}\right)$ e $\overrightarrow{Q(t_0)P} = \left(1 + \frac{1}{6},\ -\frac{1}{6},\ 1 - \frac{1}{3}\right) = \left(\frac{7}{6}, -\frac{1}{6}, \frac{2}{3}\right)$. Moltiplico per $6$: $(7, -1, 4)$.
> $$
> \begin{cases} x = 2 + 7k \\ y = -k \\ z = 1 + 4k \end{cases}
> $$
> **Verifica.** $(7, -1, 4) \cdot (-1, 1, 2) = -7 - 1 + 8 = 0$. $Q(t_0)$ sta su $r$: $\frac{5}{6} + \frac{1}{6} - 1 = 0$ e $\frac{1}{3} - \frac{2}{6} = 0$. E sta sulla retta trovata con $k = -\frac{1}{6}$: $\left(2 - \frac{7}{6},\ \frac{1}{6},\ 1 - \frac{4}{6}\right) = \left(\frac{5}{6}, \frac{1}{6}, \frac{1}{3}\right)$.

**Esercizio 8.** Siano $\pi_k : x + ky + z - k - 4 = 0$, con $k \in \mathbb{R}$, e
$$
r : \begin{cases} x = 1 + t \\ y = t \\ z = 1 + t \end{cases}
$$

- a) Studia la posizione reciproca di $r$ e $\pi_k$ al variare di $k$, e trova il punto d'intersezione quando c'è.
- b) Per quali $k$ la retta è perpendicolare al piano?
- c) Il punto trovato in a) non dipende da $k$. Spiega perché.

> [!tip]- Indizio
> a) Lemma retta-piano: sostituisci il punto generico e guarda il coefficiente di $t$. c) Riscrivi l'equazione di $\pi_k$ raccogliendo $k$.

> [!example]- Soluzione
> *Come lo riconosco*: retta e piano con un parametro che sta nella normale: il lemma divide i casi secondo $\vec{n} \cdot \vec{v} = 0$ oppure no.
>
> **a)** $\vec{n}_k = (1, k, 1)$, $\vec{v} = (1, 1, 1)$, $\vec{n}_k \cdot \vec{v} = 1 + k + 1 = k + 2$. Sostituisco il punto generico:
> $$
> (1 + t) + kt + (1 + t) - k - 4 = 0
> $$
> Sviluppo e raccolgo $t$ ($t + kt + t = (k + 2)t$) e i termini senza $t$ ($1 + 1 - k - 4 = -k - 2$):
> $$
> (k + 2)\,t - (k + 2) = 0
> $$
> - $k \neq -2$: divido per $k + 2 \neq 0$ e trovo $t = 1$. **Incidenti** nel punto $(2, 1, 2)$.
> - $k = -2$: l'equazione diventa $0 \cdot t - 0 = 0$, vera per ogni $t$. **$r \subset \pi_{-2}$**.
>
> Non c'è nessun $k$ per cui siano paralleli e disgiunti.
>
> **b)** Perpendicolari se $\vec{n}_k = (1, k, 1)$ è proporzionale a $(1, 1, 1)$. Dalla prima coordinata il fattore è $1$, quindi serve $k = 1$. Per $k = 1$: $\pi_1 : x + y + z - 5 = 0$, normale $(1, 1, 1) = \vec{v}$.
>
> **c)** Raccolgo $k$ nell'equazione: $x + ky + z - k - 4 = (x + z - 4) + k(y - 1)$. Quindi
> $$
> \pi_k : (x + z - 4) + k\,(y - 1) = 0
> $$
> È un fascio di piani (con $\lambda = 1$, $\mu = k$) di sostegno la retta $\ell : \{x + z - 4 = 0,\ y - 1 = 0\}$: tutti i $\pi_k$ contengono $\ell$. Il punto $(2, 1, 2)$ sta su $\ell$ ($2 + 2 - 4 = 0$ e $1 - 1 = 0$) e su $r$ ($t = 1$): è $r \cap \ell$. Ogni piano del fascio contiene $\ell$, quindi passa per quel punto, e se non contiene tutta $r$ la taglia proprio lì.
>
> **Verifica.** $k = 0$: $\pi_0 : x + z - 4 = 0$, e $(2, 1, 2)$ dà $2 + 2 - 4 = 0$. $k = -2$: $\pi_{-2} : x - 2y + z - 2 = 0$, e due punti di $r$, $(1, 0, 1)$ e $(2, 1, 2)$, danno $1 - 0 + 1 - 2 = 0$ e $2 - 2 + 2 - 2 = 0$.

**Esercizio 9** (livello 30). Al variare di $k \in \mathbb{R}$ si considerino
$$
r_k : \begin{cases} x = -k + t \\ y = 2 + kt \\ z = 1 + (1 - k)t \end{cases} \qquad s : \begin{cases} x = 1 + u \\ y = 2 - u \\ z = 2u \end{cases}
$$

- a) Studia la posizione reciproca di $r_k$ e $s$ al variare di $k$. Per quali $k$ sono ortogonali?
- b) Per i valori di $k$ per cui sono complanari, trova il piano che le contiene.

> [!tip]- Indizio
> a) Prima la proporzionalità dei direzionali (un valore di $k$). Poi il sistema: ricava $t$ e $u$ dalle prime due equazioni e metti tutto nella terza, che diventa una condizione su $k$. b) Cartesiane di $s$ e fascio.

> [!example]- Soluzione
> *Come lo riconosco*: due rette con un parametro, "al variare di $k$": è l'albero dei casi, ma in ogni ramo si cercano i valori di $k$ che lo fanno scattare.
>
> **Direzionali.** $\vec{v}_k = (1,\ k,\ 1 - k)$ e $\vec{w} = (1, -1, 2)$.
>
> **Parallele.** Le prime coordinate sono entrambe $1$, quindi l'unico fattore possibile è $1$: serve $\vec{v}_k = \vec{w}$, cioè $k = -1$ e $1 - k = 2$. Entrambe danno $k = -1$. Per $k = -1$: $r_{-1} : (1 + t,\ 2 - t,\ 1 + 2t)$. Il suo punto $(1, 2, 1)$ sta su $s$? Dalla prima coordinata di $s$, $u = 0$, che dà $(1, 2, 0)$: la $z$ non torna. Quindi per $k = -1$ **parallele distinte**.
>
> **Incidenti** ($k \neq -1$). Uguaglio le coordinate:
> $$
> \begin{cases} -k + t = 1 + u & (1) \\ 2 + kt = 2 - u & (2) \\ 1 + (1 - k)t = 2u & (3) \end{cases}
> $$
> - Dalla (2): $kt = -u$, cioè $u = -kt$.
> - Nella (1): $-k + t = 1 - kt$. Porto i termini con $t$ a sinistra: $t + kt = 1 + k$, cioè $(1 + k)\,t = 1 + k$.
> - $k \neq -1$, quindi divido per $1 + k$: $t = 1$, e $u = -k$.
> - Nella (3): $1 + (1 - k) = 2(-k)$, cioè $2 - k = -2k$, cioè $k = -2$.
>
> Quindi per $k = -2$ le rette sono **incidenti**: $t = 1$ su $r_{-2}$ dà $(-(-2) + 1,\ 2 - 2,\ 1 + 3) = (3, 0, 4)$, e $u = 2$ su $s$ dà $(3, 0, 4)$. Per $k \neq -1, -2$ la (3) non torna: **sghembe**.
>
> **Ortogonali.** $\vec{v}_k \cdot \vec{w} = 1 - k + 2(1 - k) = 3 - 3k$, nullo per $k = 1$.
>
> **Riassunto.**
> ```
>    k = -1          parallele distinte (complanari)
>    k = -2          incidenti in (3, 0, 4), non ortogonali (v · w = 9)
>    k = 1           sghembe e ortogonali
>    altri k         sghembe, non ortogonali
> ```
>
> **b)** Complanari per $k = -1$ e $k = -2$. Cartesiane di $s$: dalla prima $u = x - 1$; nella seconda $y = 2 - (x - 1) = 3 - x$, cioè $x + y - 3 = 0$; nella terza $z = 2(x - 1)$, cioè $2x - z - 2 = 0$. Fascio:
> $$
> \lambda(x + y - 3) + \mu(2x - z - 2) = 0
> $$
> - $k = -2$: punto di $r_{-2}$ fuori da $s$, $t = 0$: $(2, 2, 1)$ (su $s$ servirebbe $x + y = 3$, invece è $4$). Passaggio: $\lambda(2 + 2 - 3) + \mu(4 - 1 - 2) = \lambda + \mu = 0$, quindi $\mu = -\lambda$. Con $\lambda = 1$: $(x + y - 3) - (2x - z - 2) = -x + y + z - 1 = 0$, cioè
> $$
> x - y - z + 1 = 0
> $$
> - $k = -1$: punto di $r_{-1}$, $t = 0$: $(1, 2, 1)$. Passaggio: $\lambda(1 + 2 - 3) + \mu(2 - 1 - 2) = -\mu = 0$, quindi $\mu = 0$. Con $\lambda = 1$:
> $$
> x + y - 3 = 0
> $$
>
> **Verifica.** $k = -2$: il punto generico di $r_{-2}$, $(2 + t,\ 2 - 2t,\ 1 + 3t)$, dà $2 + t - 2 + 2t - 1 - 3t + 1 = 0$ per ogni $t$; quello di $s$ dà $1 + u - 2 + u - 2u + 1 = 0$ per ogni $u$. $k = -1$: $r_{-1}$ dà $(1 + t) + (2 - t) - 3 = 0$ e $s$ dà $(1 + u) + (2 - u) - 3 = 0$.

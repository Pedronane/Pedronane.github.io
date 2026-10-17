---
title: Rette e piani nello spazio (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-16
lezioni: []
ordine: 1
---

Esercizi tipo esame di [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Gli esercizi 1.9-1.17 del foglio 1 sono svolti in [Foglio 1 svolto](/uni/gal/foglio-1-svolto/): questi sono in più, sugli stessi schemi.

**Esercizio 1.** Siano $A = (2, -1, 0)$ e $B = (0, 1, 3)$.

- a) Scrivi equazioni parametriche e cartesiane della retta $r$ per $A$ e $B$.
- b) Stabilisci se $C = (4, -3, -3)$ e $D = (1, 0, 1)$ stanno su $r$.

> [!tip]- Indizio
> a) Retta per due punti. b) Un punto sta sulla retta se esiste **un** $t$ che va bene per tutte e tre le coordinate.

> [!example]- Soluzione
> *Come lo riconosco*: due punti, si chiede la retta: metodo "retta per due punti".
>
> **a)** $\vec{v} = \overrightarrow{AB} = (0 - 2,\ 1 - (-1),\ 3 - 0) = (-2, 2, 3)$. Parametriche da $A$:
> $$
> r : \begin{cases} x = 2 - 2t \\ y = -1 + 2t \\ z = 3t \end{cases}
> $$
> Cartesiane: dalla terza $t = \frac{z}{3}$. Sostituisco:
> - $x = 2 - \frac{2}{3}z$, moltiplico per $3$: $3x + 2z - 6 = 0$
> - $y = -1 + \frac{2}{3}z$, moltiplico per $3$: $3y - 2z + 3 = 0$
>
> Verifica: $A$ dà $6 + 0 - 6 = 0$ e $-3 - 0 + 3 = 0$; $B$ dà $0 + 6 - 6 = 0$ e $3 - 6 + 3 = 0$.
>
> **b)** Per $C$ cerco un $t$ che funzioni in tutte e tre le parametriche. Dalla prima $2 - 2t = 4$, cioè $t = -1$. Controllo le altre: $y = -1 - 2 = -3$ e $z = -3$. Tornano entrambe, quindi **$C \in r$** (conferma con le cartesiane: $12 - 6 - 6 = 0$ e $-9 + 6 + 3 = 0$).
>
> Per $D$: dalla prima $2 - 2t = 1$, cioè $t = \frac{1}{2}$. Allora $y = -1 + 1 = 0$, che torna, ma $z = \frac{3}{2} \neq 1$. **$D \notin r$**. Un solo $t$ deve andare bene per tutte e tre le coordinate: due su tre non bastano.

**Esercizio 2.** Trova un'equazione cartesiana del piano per $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$, partendo dalle parametriche.

> [!tip]- Indizio
> Piano per tre punti. Dopo, guarda la figura con le intercette in Definizioni: è lo stesso piano.

> [!example]- Soluzione
> *Come lo riconosco*: tre punti, si chiede il piano. Il testo impone le parametriche, quindi metodo "piano per tre punti".
>
> **Vettori.** $\vec{v} = \overrightarrow{AB} = (-1, 2, 0)$ e $\vec{w} = \overrightarrow{AC} = (-1, 0, 3)$. Non sono proporzionali (la seconda coordinata di $\vec{w}$ è $0$, quella di $\vec{v}$ no), quindi i tre punti non sono allineati.
>
> **Parametriche** da $A$:
> $$
> \begin{cases} x = 1 - t - s \\ y = 2t \\ z = 3s \end{cases}
> $$
> **Elimino.** $t = \frac{y}{2}$ e $s = \frac{z}{3}$. Nella prima: $x = 1 - \frac{y}{2} - \frac{z}{3}$. Moltiplico per $6$:
> $$
> 6x + 3y + 2z - 6 = 0
> $$
> **Verifica.** $A$: $6 - 6 = 0$. $B$: $6 - 6 = 0$. $C$: $6 - 6 = 0$. Normale $\vec{n} = (6, 3, 2)$: $\vec{n} \cdot \vec{v} = -6 + 6 + 0 = 0$ e $\vec{n} \cdot \vec{w} = -6 + 0 + 6 = 0$.

**Esercizio 3.** Sia $r : \{x - y + 1 = 0,\ 2y - z = 0\}$ e $P = (1, 1, 1)$. Trova il piano che contiene $r$ e $P$.

> [!tip]- Indizio
> Fascio di sostegno $r$, poi passaggio per $P$.

> [!example]- Soluzione
> *Come lo riconosco*: "contiene $r$" con $r$ in cartesiane: fascio.
>
> **$P \notin r$:** nella prima equazione $1 - 1 + 1 = 1 \neq 0$.
>
> **Fascio.** $\lambda(x - y + 1) + \mu(2y - z) = 0$.
>
> **Passaggio per $P$.** $\lambda(1 - 1 + 1) + \mu(2 - 1) = \lambda + \mu = 0$, quindi $\mu = -\lambda$. Con $\lambda = 1$, $\mu = -1$:
> $$
> (x - y + 1) - (2y - z) = 0 \quad\Longrightarrow\quad x - 3y + z + 1 = 0
> $$
> **Verifica.** $P$: $1 - 3 + 1 + 1 = 0$. Due punti di $r$ (pongo $y = 0$ e $y = 1$): $(-1, 0, 0)$ dà $-1 + 1 = 0$; $(0, 1, 2)$ dà $0 - 3 + 2 + 1 = 0$.

**Esercizio 4.** Siano $\pi : 2x - y + 3z - 5 = 0$ e $P = (1, 2, -1)$.

- a) Trova il piano per $P$ parallelo a $\pi$.
- b) Trova parametriche e cartesiane della retta per $P$ ortogonale a $\pi$.
- c) Trova la proiezione ortogonale di $P$ su $\pi$.

> [!tip]- Indizio
> a) Stessa normale. b) La normale diventa il direzionale. c) Interseca la retta di b) con $\pi$.

> [!example]- Soluzione
> *Come lo riconosco*: tutto ruota attorno alla normale di $\pi$, che si legge dall'equazione.
>
> **$P \notin \pi$:** $2 - 2 - 3 - 5 = -8 \neq 0$.
>
> **a)** Un piano parallelo a $\pi$ ha la stessa normale, quindi la forma $2x - y + 3z + d = 0$. Passaggio per $P$: $2 - 2 - 3 + d = 0$, cioè $d = 3$:
> $$
> 2x - y + 3z + 3 = 0
> $$
>
> **b)** Una retta ortogonale a $\pi$ ha direzionale proporzionale a $\vec{n} = (2, -1, 3)$:
> $$
> \begin{cases} x = 1 + 2t \\ y = 2 - t \\ z = -1 + 3t \end{cases}
> $$
> Cartesiane: dalla seconda $t = 2 - y$. Allora $x = 1 + 2(2 - y) = 5 - 2y$ e $z = -1 + 3(2 - y) = 5 - 3y$:
> $$
> \begin{cases} x + 2y - 5 = 0 \\ 3y + z - 5 = 0 \end{cases}
> $$
> Verifica con $P$: $1 + 4 - 5 = 0$ e $6 - 1 - 5 = 0$.
>
> **c)** Interseco la retta di b) con $\pi$:
> $$
> 2(1 + 2t) - (2 - t) + 3(-1 + 3t) - 5 = 2 + 4t - 2 + t - 3 + 9t - 5 = 14t - 8 = 0 \quad\Longrightarrow\quad t = \frac{4}{7}
> $$
> $$
> H = \left(1 + \frac{8}{7},\ 2 - \frac{4}{7},\ -1 + \frac{12}{7}\right) = \left(\frac{15}{7}, \frac{10}{7}, \frac{5}{7}\right)
> $$
> Verifica: $\frac{30}{7} - \frac{10}{7} + \frac{15}{7} - 5 = \frac{35}{7} - 5 = 0$.

**Esercizio 5.** Stabilisci la posizione della retta
$$
r : \begin{cases} x = 1 + t \\ y = 2 - t \\ z = 3t \end{cases}
$$
rispetto a ciascuno dei piani $\pi_1 : 2x + 5y + z - 12 = 0$, $\pi_2 : x + y + z - 3 = 0$, $\pi_3 : x + y - 5 = 0$.

> [!tip]- Indizio
> Sostituisci il punto generico di $r$ in ogni equazione e guarda che equazione in $t$ viene.

> [!example]- Soluzione
> *Come lo riconosco*: retta in parametriche e un piano: la strada più corta è il punto generico. *Perché*: un punto di $r$ sta sul piano se il suo $t$ soddisfa l'equazione che viene fuori, quindi il numero di soluzioni in $t$ è il numero di punti in comune.
>
> **$\pi_1$.** Sostituisco: $2(1 + t) + 5(2 - t) + 3t - 12$. Sviluppo: $2 + 2t + 10 - 5t + 3t - 12$. Raccolgo $t$ ($2t - 5t + 3t = 0$) e i numeri ($2 + 10 - 12 = 0$): resta $0 = 0$, vera per ogni $t$. **$r$ è contenuta in $\pi_1$.**
>
> **$\pi_2$.** $(1 + t) + (2 - t) + 3t - 3 = 3t = 0$, quindi $t = 0$: **un solo punto in comune**, $(1, 2, 0)$.
>
> **$\pi_3$.** $(1 + t) + (2 - t) - 5 = -2$. L'equazione è $-2 = 0$, impossibile: **nessun punto in comune**, $r$ è parallela a $\pi_3$ e non ci sta.
>
> **Verifica.** $\pi_1$ con due punti di $r$: $t = 0$ dà $(1, 2, 0)$ e $2 + 10 + 0 - 12 = 0$; $t = 1$ dà $(2, 1, 3)$ e $4 + 5 + 3 - 12 = 0$. $\pi_2$ con $(1, 2, 0)$: $1 + 2 + 0 - 3 = 0$. Per $\pi_3$ un controllo di buon senso: $x + y = 3$ su tutta $r$ (la $t$ si cancella), e il piano chiede $x + y = 5$.

**Esercizio 6.** Sia $r$ la retta
$$
r : \begin{cases} x = 1 + t \\ y = -t \\ z = 2 + 2t \end{cases}
$$
e $P = (1, 1, 1)$. Trova un'equazione cartesiana del piano che contiene $r$ e $P$.

> [!tip]- Indizio
> Il fascio vuole le cartesiane: prima elimina $t$.

> [!example]- Soluzione
> *Come lo riconosco*: piano che contiene una retta e un punto, ma la retta è in parametriche. *Perché il fascio*: è il metodo della prof; prima però servono le cartesiane.
>
> **Cartesiane di $r$.** Dalla seconda $t = -y$. Sostituisco:
> - nella prima: $x = 1 - y$, cioè $x + y - 1 = 0$;
> - nella terza: $z = 2 - 2y$, cioè $2y + z - 2 = 0$.
>
> **$P \notin r$:** nella prima $1 + 1 - 1 = 1 \neq 0$.
>
> **Fascio e passaggio per $P$.**
> $$
> \lambda(x + y - 1) + \mu(2y + z - 2) = 0
> $$
> $\lambda(1 + 1 - 1) + \mu(2 + 1 - 2) = \lambda + \mu = 0$, quindi $\mu = -\lambda$. Con $\lambda = 1$, $\mu = -1$:
> $$
> (x + y - 1) - (2y + z - 2) = 0
> $$
> Sviluppo: $x + y - 1 - 2y - z + 2 = 0$, cioè
> $$
> x - y - z + 1 = 0
> $$
> **Verifica.** $P$: $1 - 1 - 1 + 1 = 0$. Punti di $r$: $t = 0$ dà $(1, 0, 2)$ e $1 - 0 - 2 + 1 = 0$; $t = 1$ dà $(2, -1, 4)$ e $2 + 1 - 4 + 1 = 0$. Meglio ancora, il punto generico: $(1 + t) + t - (2 + 2t) + 1 = 0$ per ogni $t$.
>
> **Altra strada** (quella "per tre punti" del tutor): $(1, 0, 2)$ e $(2, -1, 4)$ su $r$, più $P$. Viene lo stesso piano, con più conti.

**Esercizio 7.** Trova parametriche e cartesiane della retta $r$ passante per $P = (1, 2, -1)$ e parallela ai due piani $\pi_1 : x + y - z = 0$ e $\pi_2 : 2x - y + 3 = 0$.

> [!tip]- Indizio
> Una retta per $P$ parallela a $\pi_1$ sta tutta nel piano per $P$ parallelo a $\pi_1$. Stessa cosa per $\pi_2$. La retta è l'intersezione dei due piani.

> [!example]- Soluzione
> *Come lo riconosco*: "parallela a due piani" e un punto. *Perché questo metodo*: le cartesiane di una retta sono due piani che la contengono; qui li costruisco direttamente, senza cercare il direzionale.
>
> **Piano per $P$ parallelo a $\pi_1$.** Stessa normale $(1, 1, -1)$: $x + y - z + d_1 = 0$. Passaggio per $P$: $1 + 2 + 1 + d_1 = 0$, $d_1 = -4$. Quindi $\sigma_1 : x + y - z - 4 = 0$.
>
> **Piano per $P$ parallelo a $\pi_2$.** Normale $(2, -1, 0)$: $2x - y + d_2 = 0$. Passaggio per $P$: $2 - 2 + d_2 = 0$, $d_2 = 0$. Quindi $\sigma_2 : 2x - y = 0$.
>
> **Cartesiane.**
> $$
> r : \begin{cases} x + y - z - 4 = 0 \\ 2x - y = 0 \end{cases}
> $$
> **Parametriche.** Pongo $x = t$ (compare in tutte e due). Dalla seconda $y = 2t$; dalla prima $z = x + y - 4 = 3t - 4$:
> $$
> r : \begin{cases} x = t \\ y = 2t \\ z = -4 + 3t \end{cases} \qquad \vec{v} = (1, 2, 3)
> $$
> **Verifica.** $P$ è il punto con $t = 1$: $(1, 2, -1)$. Il direzionale è ortogonale a tutte e due le normali, come deve essere per una retta parallela ai due piani: $(1, 1, -1) \cdot (1, 2, 3) = 1 + 2 - 3 = 0$ e $(2, -1, 0) \cdot (1, 2, 3) = 2 - 2 + 0 = 0$.

**Esercizio 8.** Sia $r : \{x + 2y - z = 0,\ x - y + 1 = 0\}$.

- a) Trova il piano del fascio di sostegno $r$ parallelo all'asse $x$.
- b) Trova il piano del fascio di sostegno $r$ parallelo all'asse $z$.

> [!tip]- Indizio
> Parallelo all'asse $x$ vuol dire coefficiente di $x$ uguale a $0$. In b) attenzione a quale dei due fissi a $1$.

> [!example]- Soluzione
> *Come lo riconosco*: "del fascio" con una condizione di direzione. *Perché*: parallelo all'asse $x$ vuol dire $\vec{n} \cdot (1, 0, 0) = 0$, cioè la prima componente della normale è $0$.
>
> **Fascio, raccolto per variabili.**
> $$
> \lambda(x + 2y - z) + \mu(x - y + 1) = (\lambda + \mu)x + (2\lambda - \mu)y - \lambda z + \mu = 0
> $$
>
> **a)** Coefficiente di $x$ nullo: $\lambda + \mu = 0$, quindi $\mu = -\lambda$. Con $\lambda = 1$, $\mu = -1$: $(x + 2y - z) - (x - y + 1) = 3y - z - 1 = 0$.
> $$
> 3y - z - 1 = 0
> $$
>
> **b)** Coefficiente di $z$ nullo: $-\lambda = 0$, quindi $\lambda = 0$. Qui **non** si può porre $\lambda = 1$: si pone $\mu = 1$, e il piano è il secondo di partenza:
> $$
> x - y + 1 = 0
> $$
>
> **Verifica.** Parametriche di $r$: pongo $y = t$; dalla seconda $x = t - 1$; dalla prima $z = x + 2y = 3t - 1$. Punto generico $(t - 1,\ t,\ 3t - 1)$.
> - a) $3t - (3t - 1) - 1 = 0$ per ogni $t$, e manca la $x$.
> - b) $(t - 1) - t + 1 = 0$ per ogni $t$, e manca la $z$.

**Esercizio 9.** Sia $r : \{x - y + z - 1 = 0,\ x + y - 3 = 0\}$ e $s$ la retta per l'origine con direzione $\vec{w} = (1, 2, 0)$. Trova il piano $\pi$ che contiene $r$ ed è parallelo a $s$. La retta $s$ sta su $\pi$?

> [!tip]- Indizio
> Fascio di sostegno $r$; la normale del piano generico deve essere ortogonale a $\vec{w}$.

> [!example]- Soluzione
> *Come lo riconosco*: contiene una retta (fascio) ed è parallelo a un'altra (condizione $\vec{n} \cdot \vec{w} = 0$). È lo schema del foglio 1, 1.14 c), quello che poi serve per la distanza fra rette sghembe.
>
> **$r$ e $s$ non sono parallele** (altrimenti tutti i piani del fascio andrebbero bene). Direzionale di $r$: pongo $y = t$; dalla seconda $x = 3 - t$; dalla prima $z = 1 - x + y = 1 - 3 + t + t = -2 + 2t$. Quindi $\vec{v} = (-1, 1, 2)$, non proporzionale a $(1, 2, 0)$ (la terza componente di $\vec{w}$ è $0$, quella di $\vec{v}$ no).
>
> **Fascio, raccolto per variabili.**
> $$
> \lambda(x - y + z - 1) + \mu(x + y - 3) = (\lambda + \mu)x + (-\lambda + \mu)y + \lambda z - \lambda - 3\mu = 0
> $$
> Normale $\vec{n} = (\lambda + \mu,\ -\lambda + \mu,\ \lambda)$.
>
> **Condizione di parallelismo.** $\vec{n} \cdot \vec{w} = 1(\lambda + \mu) + 2(-\lambda + \mu) + 0 \cdot \lambda = -\lambda + 3\mu = 0$, quindi $\lambda = 3\mu$. Con $\mu = 1$, $\lambda = 3$:
> $$
> 3(x - y + z - 1) + (x + y - 3) = 3x - 3y + 3z - 3 + x + y - 3 = 4x - 2y + 3z - 6 = 0
> $$
> $$
> \pi : 4x - 2y + 3z - 6 = 0
> $$
>
> **$s$ sta su $\pi$?** $s$ passa per $O$, e $O$ in $\pi$ dà $-6 \neq 0$. No: $s$ è parallela a $\pi$ ma esterna.
>
> **Verifica.** Due punti di $r$: $t = 0$ dà $(3, 0, -2)$ e $12 - 0 - 6 - 6 = 0$; $t = 1$ dà $(2, 1, 0)$ e $8 - 2 + 0 - 6 = 0$. Parallelismo: $(4, -2, 3) \cdot (1, 2, 0) = 4 - 4 + 0 = 0$.

**Esercizio 10.** Siano $A = (1, 0, 1)$, $B = (2, 1, 0)$, $C = (0, 1, 1)$ e $D_k = (k, 2, k)$ con $k \in \mathbb{R}$.

- a) Verifica che $A$, $B$, $C$ non sono allineati e trova il piano $\pi$ che li contiene.
- b) Per quali $k$ i quattro punti stanno sullo stesso piano?

> [!tip]- Indizio
> b) I quattro punti sono complanari se e solo se $D_k$ sta sul piano di a), che è l'unico per $A$, $B$, $C$.

> [!example]- Soluzione
> *Come lo riconosco*: a) piano per tre punti; b) un parametro in un punto: lo si sostituisce nell'equazione e si risolve in $k$.
>
> **a)** $\vec{v} = \overrightarrow{AB} = (1, 1, -1)$, $\vec{w} = \overrightarrow{AC} = (-1, 1, 0)$. Non proporzionali (terza componente $0$ in $\vec{w}$, $-1$ in $\vec{v}$): non allineati.
>
> Parametriche da $A$:
> $$
> \begin{cases} x = 1 + t - s \\ y = t + s \\ z = 1 - t \end{cases}
> $$
> Dalla terza $t = 1 - z$. Nella seconda: $s = y - t = y - 1 + z$. Nella prima:
> $$
> x = 1 + (1 - z) - (y - 1 + z) = 1 + 1 - z - y + 1 - z = 3 - y - 2z
> $$
> $$
> \pi : x + y + 2z - 3 = 0
> $$
> Verifica: $A$: $1 + 0 + 2 - 3 = 0$; $B$: $2 + 1 + 0 - 3 = 0$; $C$: $0 + 1 + 2 - 3 = 0$.
>
> **b)** $D_k \in \pi$: $k + 2 + 2k - 3 = 0$, cioè $3k - 1 = 0$, cioè $k = \frac{1}{3}$.
>
> **Verifica.** $D_{1/3} = \left(\frac{1}{3}, 2, \frac{1}{3}\right)$: $\frac{1}{3} + 2 + \frac{2}{3} - 3 = 1 + 2 - 3 = 0$. Per ogni altro $k$ il punto $D_k$ è fuori da $\pi$, e per $A$, $B$, $C$ non passano altri piani: i quattro punti non sono complanari.

**Esercizio 11** (stile prova intermedia). Siano $r : \{x + y - 2 = 0,\ z - 1 = 0\}$ e $P = (0, 0, 3)$.

- a) Trova il piano $\pi$ che contiene $r$ e $P$, e scrivine anche le equazioni parametriche.
- b) Trova la retta $s$ per l'origine ortogonale a $\pi$, in parametriche e in cartesiane.
- c) Trova il punto $H = s \cap \pi$ e stabilisci se sta su $r$.

> [!tip]- Indizio
> a) Fascio, poi poni due variabili uguali a $t$ e $s$. b) La normale di $\pi$ diventa il direzionale. c) Punto generico di $s$ in $\pi$.

> [!example]- Soluzione
> *Come lo riconosco*: tre richieste in catena, ognuna con un metodo della nota: fascio, retta ortogonale a un piano, intersezione retta-piano.
>
> **a)** $P \notin r$: $0 + 0 - 2 = -2 \neq 0$. Fascio: $\lambda(x + y - 2) + \mu(z - 1) = 0$. Passaggio per $P$: $\lambda(0 + 0 - 2) + \mu(3 - 1) = -2\lambda + 2\mu = 0$, quindi $\mu = \lambda$. Con $\lambda = \mu = 1$:
> $$
> \pi : x + y + z - 3 = 0
> $$
> Parametriche: ricavo $z = 3 - x - y$ e pongo $x = t$, $y = s$:
> $$
> \pi : \begin{cases} x = t \\ y = s \\ z = 3 - t - s \end{cases}
> $$
>
> **b)** Normale di $\pi$: $\vec{n} = (1, 1, 1)$. Retta per $O$ con direzionale $\vec{n}$:
> $$
> s : \begin{cases} x = t \\ y = t \\ z = t \end{cases}
> $$
> Cartesiane: $t = x$, quindi $y = x$ e $z = x$: $\{x - y = 0,\ y - z = 0\}$ (la seconda viene da $y = t = z$).
>
> **c)** Sostituisco in $\pi$: $t + t + t - 3 = 3t - 3 = 0$, quindi $t = 1$ e $H = (1, 1, 1)$. Su $r$: $1 + 1 - 2 = 0$ e $1 - 1 = 0$. **$H \in r$.**
>
> **Verifica.** $\pi$: $P$ dà $0 + 0 + 3 - 3 = 0$; due punti di $r$, $(2, 0, 1)$ e $(0, 2, 1)$, danno $2 + 0 + 1 - 3 = 0$ e $0 + 2 + 1 - 3 = 0$. Parametriche di $\pi$: $t + s + (3 - t - s) - 3 = 0$ per ogni $t, s$. $H \in \pi$: $1 + 1 + 1 - 3 = 0$; $\overrightarrow{OH} = (1, 1, 1) = \vec{n}$.

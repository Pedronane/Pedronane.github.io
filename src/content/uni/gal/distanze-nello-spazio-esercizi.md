---
title: Distanze nello spazio (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-21
lezioni: []
ordine: 3
---

Esercizi tipo esame di [Distanze nello spazio](/uni/gal/distanze-nello-spazio/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Gli esercizi 1.13 b, 1.14 c, 1.16 e 1.17 c del foglio 1 sono svolti in [Foglio 1 svolto](/uni/gal/foglio-1-svolto/): questi sono in più, sugli stessi schemi.

**Esercizio 1.** Siano $\pi : x - 2y + 2z + 1 = 0$ e $P = (3, -1, 2)$. Calcola $d(P, \pi)$ e trova il punto $H$ di $\pi$ più vicino a $P$.

> [!tip]- Indizio
> Formula punto-piano per il numero. Il punto più vicino è il piede della perpendicolare: retta per $P$ con direzionale $\vec{n}$.

> [!example]- Soluzione
> *Come lo riconosco*: punto e piano in cartesiana, si chiede la distanza e il piede: formula, poi proiezione ortogonale del punto sul piano.
>
> **Distanza.** Sostituisco $P$ nell'equazione: $3 - 2(-1) + 2 \cdot 2 + 1 = 3 + 2 + 4 + 1 = 10$. Modulo della normale: $|(1, -2, 2)| = \sqrt{1 + 4 + 4} = 3$.
> $$
> d(P, \pi) = \frac{|10|}{3} = \frac{10}{3}
> $$
> **Piede.** Retta per $P$ con direzionale $\vec{n} = (1, -2, 2)$: $(3 + t,\ -1 - 2t,\ 2 + 2t)$. La sostituisco nel piano:
> $$
> (3 + t) - 2(-1 - 2t) + 2(2 + 2t) + 1 = 0
> $$
> Sviluppo: $3 + t + 2 + 4t + 4 + 4t + 1 = 10 + 9t = 0$, quindi $t = -\frac{10}{9}$.
> $$
> H = \left(3 - \frac{10}{9},\ -1 + \frac{20}{9},\ 2 - \frac{20}{9}\right) = \left(\frac{17}{9}, \frac{11}{9}, -\frac{2}{9}\right)
> $$
> **Controllo.** $H \in \pi$: $\frac{17 - 22 - 4}{9} + 1 = \frac{-9}{9} + 1 = 0$. $d(P, H) = |t|\,|\vec{n}| = \frac{10}{9} \cdot 3 = \frac{10}{3}$: torna.

**Esercizio 2.** Trova i piani paralleli a $\pi : 2x + y - 2z = 0$ che distano $3$ dal punto $A = (1, 1, 1)$.

> [!tip]- Indizio
> Paralleli vuol dire stessa normale: resta solo $d$. Il valore assoluto ti dà due casi.

> [!example]- Soluzione
> *Come lo riconosco*: piani con direzione fissata a distanza data da un punto: unica incognita $d$, due soluzioni.
>
> Paralleli a $\pi$, quindi stessa normale: $2x + y - 2z + d = 0$. $|\vec{n}| = \sqrt{4 + 1 + 4} = 3$. Impongo la distanza da $A$:
> $$
> \frac{|2 + 1 - 2 + d|}{3} = 3
> $$
> Moltiplico per $3$: $|1 + d| = 9$. Il valore assoluto dà due casi:
> - $1 + d = 9$, cioè $d = 8$;
> - $1 + d = -9$, cioè $d = -10$.
>
> $$
> 2x + y - 2z + 8 = 0 \qquad 2x + y - 2z - 10 = 0
> $$
> **Controllo.** $\frac{|1 + 8|}{3} = 3$ e $\frac{|1 - 10|}{3} = 3$. Valutate in $A$ le due equazioni danno $+9$ e $-9$: i due piani stanno da parti opposte di $A$, come nella figura del Metodo.

**Esercizio 3.** Siano $P = (2, 1, 0)$ e $r : \{x - y = 0,\ z - 1 = 0\}$.

- a) Calcola $d(P, r)$ con entrambi i metodi.
- b) Sia $r'$ la retta per $P$ parallela a $r$. Quanto vale $d(r, r')$?

> [!tip]- Indizio
> a) Parametriche ponendo $x = t$. b) Rette parallele: basta un punto di una delle due.

> [!example]- Soluzione
> *Come lo riconosco*: punto e retta in cartesiane: parametriche, poi punto generico o piano ausiliario.
>
> **Parametriche di $r$.** Pongo $x = t$: dalla prima $y = t$, dalla seconda $z = 1$. $Q(t) = (t, t, 1)$, $\vec{v} = (1, 1, 0)$. $P \notin r$ perché $2 - 1 \neq 0$.
>
> **a) Metodo 1.** Arrivo meno partenza: $\overrightarrow{PQ(t)} = (t - 2,\ t - 1,\ 1)$. Ortogonalità:
> $$
> \overrightarrow{PQ(t)} \cdot \vec{v} = (t - 2) + (t - 1) + 0 = 2t - 3 = 0 \quad\Longrightarrow\quad t_0 = \frac{3}{2}
> $$
> $H = \left(\frac{3}{2}, \frac{3}{2}, 1\right)$, $\overrightarrow{PH} = \left(-\frac{1}{2}, \frac{1}{2}, 1\right)$,
> $$
> d(P, r) = \sqrt{\frac{1}{4} + \frac{1}{4} + 1} = \sqrt{\frac{3}{2}} = \frac{\sqrt{3}}{\sqrt{2}} = \frac{\sqrt{6}}{2}
> $$
> **Metodo 2.** Piano per $P$ con normale $\vec{v}$: $x + y + d = 0$; passaggio per $P$: $2 + 1 + d = 0$, $d = -3$. Sostituisco $Q(t)$: $t + t - 3 = 0$, $t = \frac{3}{2}$. Stesso $H$, stessa distanza.
>
> **Controllo.** $\overrightarrow{PH} \cdot \vec{v} = -\frac{1}{2} + \frac{1}{2} + 0 = 0$.
>
> **b)** $r$ e $r'$ sono parallele, e per il caso parallelo $d(r, r') = d(X, r)$ con $X$ punto qualunque di $r'$. $P$ sta su $r'$, quindi $d(r, r') = d(P, r) = \frac{\sqrt{6}}{2}$ senza altri conti.

**Esercizio 4.** Siano $P = (1, 0, 0)$ e $r : \{x - y = 0,\ z - 1 = 0\}$.

- a) Calcola $d(P, r)$ e il piede $H$.
- b) Trova i punti di $r$ che distano $\sqrt{2}$ da $P$.
- c) Per quali $\delta > 0$ esistono punti di $r$ a distanza $\delta$ da $P$, e quanti sono?

> [!tip]- Indizio
> b) Qui non si chiede la perpendicolare: imponi $|\overrightarrow{PQ(t)}|^2 = 2$, che è un'equazione di secondo grado. c) Guarda il discriminante.

> [!example]- Soluzione
> *Come lo riconosco*: a) è punto-retta standard. b) "i punti a distanza data" non è una distanza minima: si impone la lunghezza di $\overrightarrow{PQ(t)}$, e i quadrati evitano la radice.
>
> **Parametriche.** Pongo $x = t$: $Q(t) = (t, t, 1)$, $\vec{v} = (1, 1, 0)$. $P \notin r$: $1 - 0 \neq 0$.
>
> **a)** $\overrightarrow{PQ(t)} = (t - 1,\ t,\ 1)$. Ortogonalità: $(t - 1) + t = 2t - 1 = 0$, $t_0 = \frac{1}{2}$. $H = \left(\frac{1}{2}, \frac{1}{2}, 1\right)$, $\overrightarrow{PH} = \left(-\frac{1}{2}, \frac{1}{2}, 1\right)$,
> $$
> d(P, r) = \sqrt{\frac{1}{4} + \frac{1}{4} + 1} = \sqrt{\frac{3}{2}} = \frac{\sqrt{6}}{2}
> $$
> **b)** Il quadrato della lunghezza:
> $$
> |\overrightarrow{PQ(t)}|^2 = (t - 1)^2 + t^2 + 1 = t^2 - 2t + 1 + t^2 + 1 = 2t^2 - 2t + 2
> $$
> Impongo $|\overrightarrow{PQ(t)}|^2 = (\sqrt{2})^2 = 2$:
> $$
> 2t^2 - 2t + 2 = 2 \quad\Longrightarrow\quad 2t^2 - 2t = 0 \quad\Longrightarrow\quad 2t(t - 1) = 0
> $$
> Per la legge di annullamento del prodotto $t = 0$ oppure $t = 1$: i punti $Q(0) = (0, 0, 1)$ e $Q(1) = (1, 1, 1)$.
>
> **Controllo.** $|(0 - 1,\ 0,\ 1)| = \sqrt{2}$ e $|(0,\ 1,\ 1)| = \sqrt{2}$. Il loro punto medio è $\left(\frac{1}{2}, \frac{1}{2}, 1\right) = H$: i due punti sono simmetrici rispetto al piede, come i due punti in cui una sfera di centro $P$ taglia la retta.
>
> **c)** Impongo $2t^2 - 2t + 2 = \delta^2$, cioè $2t^2 - 2t + (2 - \delta^2) = 0$. Discriminante:
> $$
> \Delta = (-2)^2 - 4 \cdot 2 \cdot (2 - \delta^2) = 4 - 16 + 8\delta^2 = 8\delta^2 - 12
> $$
> - $\Delta > 0$, cioè $\delta^2 > \frac{3}{2}$, cioè $\delta > \frac{\sqrt{6}}{2}$: **due** punti;
> - $\Delta = 0$, cioè $\delta = \frac{\sqrt{6}}{2}$: **un** punto, ed è $H$;
> - $\delta < \frac{\sqrt{6}}{2}$: **nessuno**.
>
> Torna con a): sotto la distanza minima non c'è niente, alla distanza minima c'è solo il piede.

**Esercizio 5.** Siano $r : (1 + 2t,\ t,\ 3 - t)$ e $\pi : x - y + z - 1 = 0$.

- a) Mostra che $r$ è parallela a $\pi$ e non contenuta, e calcola $d(r, \pi)$.
- b) Trova il piano $\pi'$ che contiene $r$ ed è parallelo a $\pi$, e calcola $d(\pi, \pi')$.
- c) Trova il punto di $\pi$ più vicino al punto $A = (1, 0, 3)$ di $r$.

> [!tip]- Indizio
> a) $\vec{n} \cdot \vec{v}$, poi un punto di $r$ nel piano. b) Stessa normale di $\pi$, passaggio per un punto di $r$. c) Proiezione di $A$ su $\pi$.

> [!example]- Soluzione
> *Come lo riconosco*: retta e piano: prima la posizione reciproca, poi un punto qualunque e la formula punto-piano.
>
> **a)** $\vec{v} = (2, 1, -1)$ e $\vec{n} = (1, -1, 1)$. $\vec{n} \cdot \vec{v} = 2 - 1 - 1 = 0$: parallela o contenuta. $A = r(0) = (1, 0, 3)$ nel piano: $1 - 0 + 3 - 1 = 3 \neq 0$, quindi **parallela e disgiunta**.
> $$
> d(r, \pi) = d(A, \pi) = \frac{|3|}{\sqrt{1 + 1 + 1}} = \frac{3}{\sqrt{3}} = \sqrt{3}
> $$
> Verifica che non dipende dal punto: sostituendo il punto generico, $(1 + 2t) - t + (3 - t) - 1 = 3$ per ogni $t$.
>
> **b)** $\pi'$ parallelo a $\pi$: $x - y + z + d = 0$. Passaggio per $A$: $1 - 0 + 3 + d = 0$, $d = -4$.
> $$
> \pi' : x - y + z - 4 = 0
> $$
> Contiene $r$: ha la stessa normale di $\pi$, quindi $\vec{n} \cdot \vec{v} = 0$, e contiene un suo punto. Controllo con $r(1) = (3, 1, 2)$: $3 - 1 + 2 - 4 = 0$.
>
> Distanza: prendo $(1, 0, 0) \in \pi$ ($1 - 1 = 0$).
> $$
> d(\pi, \pi') = \frac{|1 - 0 + 0 - 4|}{\sqrt{3}} = \frac{3}{\sqrt{3}} = \sqrt{3}
> $$
> Uguale ad a), come deve: $r$ sta dentro $\pi'$.
>
> **c)** Retta per $A$ con direzionale $\vec{n}$: $(1 + k,\ -k,\ 3 + k)$. Nel piano:
> $$
> (1 + k) - (-k) + (3 + k) - 1 = 3 + 3k = 0 \quad\Longrightarrow\quad k = -1
> $$
> $H = (0, 1, 2)$. **Controllo.** $0 - 1 + 2 - 1 = 0$, e $|\overrightarrow{AH}| = |(-1, 1, -1)| = \sqrt{3}$, la distanza di a).

**Esercizio 6** (dispensa, es. ricapitolativo 4). Sia $r : \{x - 3y + 2 = 0,\ x + y - 2z = 0\}$.

- a) Trova il piano $\pi_1$ che contiene $r$ e passa per $P = (0, 1, 0)$.
- b) Trova il piano $\pi_2$ parallelo a $\pi_1$ e passante per $Q = (3, 2, -1)$.
- c) Trova la distanza fra $\pi_1$ e $\pi_2$.

> [!tip]- Indizio
> a) Fascio di sostegno $r$, passaggio per $P$. c) Un punto di uno dei due piani: $P$ è già lì.

> [!example]- Soluzione
> *Come lo riconosco*: piano per una retta e un punto, quindi fascio; poi due piani paralleli, quindi un punto e la formula.
>
> **a)** $P \notin r$: $0 - 3 + 2 = -1 \neq 0$. Fascio:
> $$
> \lambda(x - 3y + 2) + \mu(x + y - 2z) = 0
> $$
> Passaggio per $P$: $\lambda(0 - 3 + 2) + \mu(0 + 1 - 0) = -\lambda + \mu = 0$, quindi $\mu = \lambda$. Con $\lambda = \mu = 1$:
> $$
> (x - 3y + 2) + (x + y - 2z) = 2x - 2y - 2z + 2 = 0
> $$
> Divido per $2$: $\pi_1 : x - y - z + 1 = 0$. Controllo: $P$ dà $0 - 1 - 0 + 1 = 0$.
>
> **b)** Stessa normale $(1, -1, -1)$: $x - y - z + d = 0$. Passaggio per $Q$: $3 - 2 + 1 + d = 0$, $d = -2$.
> $$
> \pi_2 : x - y - z - 2 = 0
> $$
> **c)** I piani sono paralleli e distinti ($1 \neq -2$). Uso $P \in \pi_1$:
> $$
> d(\pi_1, \pi_2) = d(P, \pi_2) = \frac{|0 - 1 - 0 - 2|}{\sqrt{1 + 1 + 1}} = \frac{3}{\sqrt{3}} = \sqrt{3}
> $$
> **Controllo** dall'altra parte, con $Q \in \pi_2$: $d(Q, \pi_1) = \frac{|3 - 2 + 1 + 1|}{\sqrt{3}} = \sqrt{3}$. E con la scorciatoia: $\frac{|1 - (-2)|}{\sqrt{3}} = \sqrt{3}$.

**Esercizio 7.** Siano $r : (1 + t,\ t,\ 0)$ e $r' : (0,\ s,\ 2 + s)$.

- a) Mostra che sono sghembe.
- b) Calcola $d(r, r')$ con entrambi i metodi e trova i punti di minima distanza.
- c) Scrivi la retta di minima distanza (la perpendicolare comune).

> [!tip]- Indizio
> b) Metodo 1 con parametri diversi; per il metodo 2 servono le cartesiane di $r$. c) Passa per i due punti trovati.

> [!example]- Soluzione
> *Come lo riconosco*: due rette in parametriche, si chiedono i punti: metodo 1, e il metodo 2 come controllo.
>
> **a)** $\vec{v} = (1, 1, 0)$ e $\vec{w} = (0, 1, 1)$ non sono proporzionali ($0$ nella prima coordinata di $\vec{w}$, non in $\vec{v}$). Sistema d'incidenza: $1 + t = 0$, $t = s$, $0 = 2 + s$. Dalla prima $t = -1$, dalla seconda $s = -1$, e la terza darebbe $0 = 1$: impossibile. **Sghembe.**
>
> **b) Metodo 1.** Arrivo meno partenza:
> $$
> \overrightarrow{P(t)Q(s)} = (0 - 1 - t,\ s - t,\ 2 + s - 0) = (-1 - t,\ s - t,\ 2 + s)
> $$
> Le due ortogonalità:
> $$
> \begin{cases} \overrightarrow{P(t)Q(s)} \cdot \vec{v} = (-1 - t) + (s - t) + 0 = s - 2t - 1 = 0 \\ \overrightarrow{P(t)Q(s)} \cdot \vec{w} = 0 + (s - t) + (2 + s) = 2s - t + 2 = 0 \end{cases}
> $$
> Dalla prima $s = 2t + 1$. Nella seconda: $2(2t + 1) - t + 2 = 3t + 4 = 0$, quindi $t = -\frac{4}{3}$ e $s = -\frac{8}{3} + 1 = -\frac{5}{3}$.
> $$
> P = \left(-\frac{1}{3}, -\frac{4}{3}, 0\right) \qquad Q = \left(0, -\frac{5}{3}, \frac{1}{3}\right) \qquad \overrightarrow{PQ} = \left(\frac{1}{3}, -\frac{1}{3}, \frac{1}{3}\right)
> $$
> $$
> d(r, r') = \sqrt{\frac{1}{9} + \frac{1}{9} + \frac{1}{9}} = \sqrt{\frac{1}{3}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}
> $$
> **Controllo.** $\overrightarrow{PQ} \cdot \vec{v} = \frac{1 - 1 + 0}{3} = 0$ e $\overrightarrow{PQ} \cdot \vec{w} = \frac{0 - 1 + 1}{3} = 0$.
>
> **Metodo 2.** Cartesiane di $r$: da $y = t$ viene $x = 1 + y$, e $z = 0$: $\{x - y - 1 = 0,\ z = 0\}$. Fascio:
> $$
> \lambda(x - y - 1) + \mu z = 0 \qquad \vec{n} = (\lambda,\ -\lambda,\ \mu)
> $$
> Parallelo a $r'$: $\vec{n} \cdot \vec{w} = 0 - \lambda + \mu = 0$, quindi $\mu = \lambda$. Con $\lambda = \mu = 1$: $\pi : x - y + z - 1 = 0$. Punto di $r'$ per $s = 0$: $(0, 0, 2)$.
> $$
> d = \frac{|0 - 0 + 2 - 1|}{\sqrt{1 + 1 + 1}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}
> $$
> **c)** Direzione $\overrightarrow{PQ}$, o il suo triplo $(1, -1, 1)$, che è anche la normale di $\pi$. Passa per $P$:
> $$
> \begin{cases} x = -\frac{1}{3} + k \\ y = -\frac{4}{3} - k \\ z = k \end{cases}
> $$
> **Controllo.** Per $k = \frac{1}{3}$ dà $\left(0, -\frac{5}{3}, \frac{1}{3}\right) = Q$.

**Esercizio 8** (dispensa, es. ricapitolativo 1). Sia $r$ la retta per $A = (1, 0, 1)$ e $B = (2, 1, 0)$, e sia $r' : \{x + y - z + 2 = 0,\ x - 3z + 1 = 0\}$.

- a) Determina la posizione reciproca delle due rette.
- b) Calcola $d(r, r')$ con entrambi i metodi.

> [!tip]- Indizio
> a) Controlla anche $\vec{v} \cdot \vec{w}$. b) Nel metodo 1 il sistema diventa più facile del solito: perché? Nel metodo 2 il fascio comodo è quello di $r'$, già in cartesiane.

> [!example]- Soluzione
> *Come lo riconosco*: una retta per due punti e una in cartesiane, si chiede la distanza: prima la posizione.
>
> **Parametriche.** $\vec{v} = \overrightarrow{AB} = (1, 1, -1)$ e $r : (1 + t,\ t,\ 1 - t)$. Per $r'$ pongo $z = s$: dalla seconda $x = 3s - 1$, dalla prima $y = -2 - x + z = -2 - (3s - 1) + s = -1 - 2s$.
> $$
> r' : (-1 + 3s,\ -1 - 2s,\ s) \qquad \vec{w} = (3, -2, 1)
> $$
> **a)** Non proporzionali ($\frac{3}{1} \neq \frac{-2}{1}$). Incidenza: sostituisco $r$ nelle cartesiane di $r'$.
> - Prima: $(1 + t) + t - (1 - t) + 2 = 3t + 2 = 0$, quindi $t = -\frac{2}{3}$.
> - Seconda: $(1 + t) - 3(1 - t) + 1 = 4t - 1 = 0$, quindi $t = \frac{1}{4}$.
>
> Valori diversi: nessun punto comune, **sghembe**. Inoltre $\vec{v} \cdot \vec{w} = 3 - 2 - 1 = 0$: sghembe e **ortogonali**.
>
> **b) Metodo 1.** Arrivo meno partenza:
> $$
> \overrightarrow{P(t)Q(s)} = (-1 + 3s - 1 - t,\ -1 - 2s - t,\ s - 1 + t) = (3s - t - 2,\ -2s - t - 1,\ s + t - 1)
> $$
> Prodotto con $\vec{v} = (1, 1, -1)$:
> $$
> (3s - t - 2) + (-2s - t - 1) - (s + t - 1) = (3 - 2 - 1)s + (-1 - 1 - 1)t + (-2 - 1 + 1) = -3t - 2
> $$
> Prodotto con $\vec{w} = (3, -2, 1)$:
> $$
> 3(3s - t - 2) - 2(-2s - t - 1) + (s + t - 1) = (9 + 4 + 1)s + (-3 + 2 + 1)t + (-6 + 2 - 1) = 14s - 5
> $$
> Il sistema si spezza: $-3t - 2 = 0$ dà $t = -\frac{2}{3}$, $14s - 5 = 0$ dà $s = \frac{5}{14}$. È l'effetto dell'ortogonalità: il coefficiente di $s$ nella prima equazione è $\vec{w} \cdot \vec{v} = 0$, e lo stesso per $t$ nella seconda.
> $$
> P = \left(\frac{1}{3}, -\frac{2}{3}, \frac{5}{3}\right) \qquad Q = \left(\frac{1}{14}, -\frac{12}{7}, \frac{5}{14}\right)
> $$
> Differenze con denominatore comune $42$:
> $$
> \overrightarrow{PQ} = \left(\frac{3 - 14}{42},\ \frac{-72 + 28}{42},\ \frac{15 - 70}{42}\right) = \left(-\frac{11}{42}, -\frac{44}{42}, -\frac{55}{42}\right) = -\frac{11}{42}(1, 4, 5)
> $$
> $$
> d(r, r') = \frac{11}{42}\sqrt{1 + 16 + 25} = \frac{11}{42}\sqrt{42} = \frac{11}{\sqrt{42}} = \frac{11\sqrt{42}}{42}
> $$
> **Controllo.** $(1, 4, 5) \cdot (1, 1, -1) = 1 + 4 - 5 = 0$ e $(1, 4, 5) \cdot (3, -2, 1) = 3 - 8 + 5 = 0$.
>
> **Metodo 2.** Uso il fascio di $r'$, che è già in cartesiane, e il piano parallelo a $r$; il punto andrà preso su $r$.
> $$
> \lambda(x + y - z + 2) + \mu(x - 3z + 1) = 0
> $$
> Raccolgo: $(\lambda + \mu)x + \lambda y + (-\lambda - 3\mu)z + (2\lambda + \mu) = 0$, con $\vec{n} = (\lambda + \mu,\ \lambda,\ -\lambda - 3\mu)$. Parallelo a $r$:
> $$
> \vec{n} \cdot \vec{v} = (\lambda + \mu) + \lambda + (\lambda + 3\mu) = 3\lambda + 4\mu = 0
> $$
> Con $\lambda = 4$, $\mu = -3$: $\vec{n} = (1, 4, 5)$ e termine noto $8 - 3 = 5$, quindi $\pi : x + 4y + 5z + 5 = 0$. Punto di $r$: $A = (1, 0, 1)$.
> $$
> d(A, \pi) = \frac{|1 + 0 + 5 + 5|}{\sqrt{1 + 16 + 25}} = \frac{11}{\sqrt{42}}
> $$
> Stesso valore, e $\vec{n} = (1, 4, 5)$ è la direzione di $\overrightarrow{PQ}$.

**Esercizio 9** (dispensa, es. ricapitolativo 5, livello 30). Sia $r : (1 + t,\ t,\ -2 + 4t)$ e $P = (-1, -4, -6)$.

- a) Trova il piano $\pi$ che contiene $r$ e $P$.
- b) Trova la retta $r'$ per $P$ perpendicolare a $\pi$.
- c) Calcola $d(r, r')$.
- d) Spiega perché $d(r, r') = d(P, r)$ senza fare il conto.

> [!tip]- Indizio
> a) Cartesiane di $r$ ponendo $y = t$, poi fascio. c) Posizione reciproca prima: dove può incontrare $r'$ il piano $\pi$? d) Disegna $\pi$, $r$ dentro, $r'$ che lo buca in $P$.

> [!example]- Soluzione
> *Come lo riconosco*: catena di richieste dove l'ultima è una distanza fra rette. La geometria del disegno accorcia il conto, ma il metodo 1 funziona comunque.
>
> **a)** $P \notin r$: dalla $y$, $t = -4$, e allora $x = -3 \neq -1$. Cartesiane di $r$: da $y = t$ viene $x = 1 + y$ e $z = -2 + 4y$:
> $$
> r : \begin{cases} x - y - 1 = 0 \\ 4y - z - 2 = 0 \end{cases}
> $$
> Fascio $\lambda(x - y - 1) + \mu(4y - z - 2) = 0$ e passaggio per $P$:
> $$
> \lambda(-1 + 4 - 1) + \mu(-16 + 6 - 2) = 2\lambda - 12\mu = 0 \quad\Longrightarrow\quad \lambda = 6\mu
> $$
> Con $\mu = 1$, $\lambda = 6$:
> $$
> 6(x - y - 1) + (4y - z - 2) = 6x - 2y - z - 8 = 0
> $$
> **Controllo.** $P$: $-6 + 8 + 6 - 8 = 0$. Retta: $6(1 + t) - 2t - (-2 + 4t) - 8 = 6 + 6t - 2t + 2 - 4t - 8 = 0$ per ogni $t$.
>
> **b)** Direzionale uguale alla normale $(6, -2, -1)$:
> $$
> r' : (-1 + 6s,\ -4 - 2s,\ -6 - s)
> $$
> **c) Posizione.** $\vec{v} = (1, 1, 4)$ e $\vec{v} \cdot (6, -2, -1) = 6 - 2 - 4 = 0$: ortogonali. Incidenti? $r'$ è perpendicolare a $\pi$ e lo incontra solo in $P$; $r$ sta in $\pi$; quindi un punto comune dovrebbe essere $P$, che non sta su $r$. **Sghembe.**
>
> **Metodo 1.** $P(t) = (1 + t,\ t,\ -2 + 4t)$, $Q(s) = (-1 + 6s,\ -4 - 2s,\ -6 - s)$:
> $$
> \overrightarrow{P(t)Q(s)} = (-2 + 6s - t,\ -4 - 2s - t,\ -4 - s - 4t)
> $$
> Prodotto con $\vec{v} = (1, 1, 4)$:
> $$
> (-2 + 6s - t) + (-4 - 2s - t) + 4(-4 - s - 4t) = (6 - 2 - 4)s + (-1 - 1 - 16)t + (-2 - 4 - 16) = -18t - 22
> $$
> Prodotto con $\vec{w} = (6, -2, -1)$:
> $$
> 6(-2 + 6s - t) - 2(-4 - 2s - t) - (-4 - s - 4t) = (36 + 4 + 1)s + (-6 + 2 + 4)t + (-12 + 8 + 4) = 41s
> $$
> Quindi $t = -\frac{11}{9}$ e $s = 0$. Il punto su $r'$ è $Q(0) = P$; quello su $r$ è
> $$
> H = \left(1 - \frac{11}{9},\ -\frac{11}{9},\ -2 - \frac{44}{9}\right) = \left(-\frac{2}{9}, -\frac{11}{9}, -\frac{62}{9}\right)
> $$
> $$
> \overrightarrow{HP} = \left(-1 + \frac{2}{9},\ -4 + \frac{11}{9},\ -6 + \frac{62}{9}\right) = \left(-\frac{7}{9}, -\frac{25}{9}, \frac{8}{9}\right)
> $$
> $$
> d(r, r') = \frac{1}{9}\sqrt{49 + 625 + 64} = \frac{\sqrt{738}}{9} = \frac{\sqrt{9 \cdot 82}}{9} = \frac{3\sqrt{82}}{9} = \frac{\sqrt{82}}{3}
> $$
> **Controllo.** $(-7, -25, 8) \cdot (1, 1, 4) = -7 - 25 + 32 = 0$ e $(-7, -25, 8) \cdot (6, -2, -1) = -42 + 50 - 8 = 0$.
>
> **d)** Il segmento $\overrightarrow{HP}$ dal piede su $r$ a $P$ sta dentro $\pi$ (entrambi gli estremi sono in $\pi$) ed è ortogonale a $r$ per costruzione. È anche ortogonale a $r'$, perché $r'$ è perpendicolare a tutto il piano $\pi$. Quindi è la perpendicolare comune, e la sua lunghezza è $d(P, r)$. Bastava un conto punto-retta: è quello che dice $s = 0$ nel metodo 1.

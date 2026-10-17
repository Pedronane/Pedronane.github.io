---
title: Algoritmo di Gauss-Jordan (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-28
lezioni: []
ordine: 5
---

Esercizi tipo esame di [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Prima di aprire la soluzione, scrivi il tipo di esercizio e il metodo; ogni soluzione si chiude con la verifica sul sistema di partenza.

**Esercizio 1.** Dire quali di queste matrici sono a scalini e quali ridotte per righe; per quelle a scalini indicare i pivot.
$$
M_1 = \begin{pmatrix} 1 & 3 & 0 & 2 \\ 0 & 0 & 1 & 4 \end{pmatrix} \qquad M_2 = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 5 \end{pmatrix} \qquad M_3 = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

> [!tip]- Indizio
> Per ogni coppia di righe consecutive conta gli zeri iniziali, e ricorda dove possono stare le righe nulle.

> [!example]- Soluzione
> *Come lo riconosco*: domanda di definizione. *Metodo*: controllare (a) e (b) coppia per coppia, poi le due condizioni in più della ridotta (pivot $1$, unico non nullo in colonna).
> - $M_1$: zeri iniziali $0, 2$, crescono. A scalini, pivot $1$ (colonna 1) e $1$ (colonna 3). È anche **ridotta**: pivot uguali a $1$, unici non nulli nelle loro colonne. Il $3$ e il $2$ stanno in colonne senza pivot e non danno fastidio.
> - $M_2$: **non** è a scalini. La seconda riga è nulla e sotto c'è una riga non nulla: la coppia $R_2, R_3$ non soddisfa né (a) né (b). Con $S_{23}$ diventa a scalini.
> - $M_3$: zeri iniziali $0, 1, 2$. A scalini, pivot $1, 3, 1$ nelle colonne $1, 2, 3$. **Non** ridotta: il pivot $3$ non è $1$, e sopra i pivot di colonna 2 e 3 ci sono un $2$ e un $1$.
>
> *Controllo*: $M_2$ dopo $S_{23}$ ha zeri iniziali $0, 2$ e la riga nulla in fondo, a scalini.

**Esercizio 2.** Risolvere il sistema
$$
\begin{cases} x + 2y + z = 4 \\ 2x + 3y + 3z = 7 \\ -x + y - 2z = -3 \end{cases}
$$
scrivendo ogni operazione elementare usata.

> [!example]- Soluzione
> *Come lo riconosco*: quadrato $3 \times 3$, pivot $1$ già in alto a sinistra. *Metodo*: Gauss-Jordan, poi soluzione dal basso.
> - Sotto il pivot $1$ ci sono $2$ e $-1$: $E_{21}(-2)$, $R_2 - 2R_1 = (0,\ 3 - 4,\ 3 - 2 \mid 7 - 8) = (0, -1, 1 \mid -1)$.
> - $E_{31}(1)$: $R_3 + R_1 = (0,\ 1 + 2,\ -2 + 1 \mid -3 + 4) = (0, 3, -1 \mid 1)$.
> - Pivot $-1$, sotto c'è $3$: $\mu = -\frac{3}{-1} = 3$. $E_{32}(3)$: $R_3 + 3R_2 = (0,\ 3 - 3,\ -1 + 3 \mid 1 - 3) = (0, 0, 2 \mid -2)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 2 & 3 & 3 & 7 \\ -1 & 1 & -2 & -3 \end{array}\right] \xrightarrow[E_{31}(1)]{E_{21}(-2)} \left[\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & -1 & 1 & -1 \\ 0 & 3 & -1 & 1 \end{array}\right] \xrightarrow{E_{32}(3)} \left[\begin{array}{ccc|c} 1 & 2 & 1 & 4 \\ 0 & -1 & 1 & -1 \\ 0 & 0 & 2 & -2 \end{array}\right]
> $$
> Tre pivot, nessuna riga $0 = c$: soluzione unica. Dal basso:
> - $2z = -2$, quindi $z = -1$;
> - $-y + z = -1$, cioè $-y - 1 = -1$, quindi $y = 0$;
> - $x + 2 \cdot 0 + (-1) = 4$, quindi $x = 5$.
> $$
> (x, y, z) = (5, 0, -1)
> $$
> Verifica: $5 + 0 - 1 = 4$; $10 + 0 - 3 = 7$; $-5 + 0 + 2 = -3$.

**Esercizio 3.** Risolvere fino alla forma ridotta per righe
$$
\begin{cases} y + 2z = 3 \\ x + y + z = 2 \\ 2x + y + 4z = 9 \end{cases}
$$

> [!tip]- Indizio
> La prima equazione non contiene $x$: qual è il primo passo dell'algoritmo?

> [!example]- Soluzione
> *Come lo riconosco*: il primo elemento della prima colonna è $0$. *Metodo*: passo 2 dell'algoritmo, uno scambio $S_{1j}$ per portare su un pivot; poi tutto come al solito, fino a $\operatorname{rref}$.
> $$
> \left[\begin{array}{ccc|c} 0 & 1 & 2 & 3 \\ 1 & 1 & 1 & 2 \\ 2 & 1 & 4 & 9 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & 2 & 3 \\ 2 & 1 & 4 & 9 \end{array}\right]
> $$
> - Scelgo la riga con $1$ (e non quella con $2$) per evitare frazioni.
> - $E_{31}(-2)$: $R_3 - 2R_1 = (0,\ 1 - 2,\ 4 - 2 \mid 9 - 4) = (0, -1, 2 \mid 5)$.
> - Pivot $1$ in colonna $y$, sotto c'è $-1$: $E_{32}(1)$, $R_3 + R_2 = (0, 0, 4 \mid 8)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 4 & 8 \end{array}\right]
> $$
> **Riduzione all'indietro**, dal pivot più in basso:
> - $D_3(\frac{1}{4})$: $R_3 = (0, 0, 1 \mid 2)$.
> - $E_{23}(-2)$: $R_2 - 2R_3 = (0, 1, 0 \mid 3 - 4) = (0, 1, 0 \mid -1)$.
> - $E_{13}(-1)$: $R_1 - R_3 = (1, 1, 0 \mid 2 - 2) = (1, 1, 0 \mid 0)$.
> - $E_{12}(-1)$: $R_1 - R_2 = (1, 0, 0 \mid 0 + 1) = (1, 0, 0 \mid 1)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 2 \end{array}\right] \qquad (x, y, z) = (1, -1, 2)
> $$
> Verifica: $-1 + 4 = 3$; $1 - 1 + 2 = 2$; $2 - 1 + 8 = 9$.

**Esercizio 4.** Risolvere il sistema omogeneo
$$
\begin{cases} x_1 + x_2 + 2x_3 + x_4 = 0 \\ 2x_1 + 3x_2 + 3x_3 + 4x_4 = 0 \\ x_1 + 2x_2 + x_3 + 3x_4 = 0 \end{cases}
$$
Quante sono le variabili libere?

> [!example]- Soluzione
> *Come lo riconosco*: tutti i termini noti sono $0$. *Metodo*: come il tutor nell'es. 2, si lavora su $A$ (la colonna di zeri resta di zeri). Più incognite che equazioni: aspetto variabili libere.
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ 3 - 2,\ 3 - 4,\ 4 - 2) = (0, 1, -1, 2)$.
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ 2 - 1,\ 1 - 2,\ 3 - 1) = (0, 1, -1, 2)$.
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0, 0)$.
> - $E_{12}(-1)$: $R_1 - R_2 = (1,\ 0,\ 2 + 1,\ 1 - 2) = (1, 0, 3, -1)$.
> $$
> \begin{pmatrix} 1 & 1 & 2 & 1 \\ 2 & 3 & 3 & 4 \\ 1 & 2 & 1 & 3 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 2 & 1 \\ 0 & 1 & -1 & 2 \\ 0 & 1 & -1 & 2 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 2 & 1 \\ 0 & 1 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix} \to \begin{pmatrix} 1 & 0 & 3 & -1 \\ 0 & 1 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Due pivot (colonne $x_1$, $x_2$), quattro incognite: $4 - 2 = 2$ **variabili libere**, $x_3 = t$ e $x_4 = s$.
> - Riga 1: $x_1 + 3x_3 - x_4 = 0$, quindi $x_1 = -3t + s$.
> - Riga 2: $x_2 - x_3 + 2x_4 = 0$, quindi $x_2 = t - 2s$.
> $$
> \begin{cases} x_1 = -3t + s \\ x_2 = t - 2s \\ x_3 = t \\ x_4 = s \end{cases} \qquad t, s \in \mathbb{R}
> $$
> Verifica con $t = 1$, $s = 0$, cioè $(-3, 1, 1, 0)$: $-3 + 1 + 2 = 0$; $-6 + 3 + 3 = 0$; $-3 + 2 + 1 = 0$. Con $t = 0$, $s = 1$, cioè $(1, -2, 0, 1)$: $1 - 2 + 1 = 0$; $2 - 6 + 4 = 0$; $1 - 4 + 3 = 0$.

**Esercizio 5.** Trovare equazioni parametriche della retta
$$
r: \begin{cases} x - y + 2z = 1 \\ 2x - y + z = 3 \end{cases}
$$
usando l'algoritmo di Gauss-Jordan.

> [!example]- Soluzione
> *Come lo riconosco*: retta in cartesiane, si chiedono le parametriche. *Metodo*: quello della prof, $\operatorname{rref}$ della matrice completa e parametro sulla colonna senza pivot.
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ -1 + 2,\ 1 - 4 \mid 3 - 2) = (0, 1, -3 \mid 1)$.
> - $E_{12}(1)$: $R_1 + R_2 = (1,\ 0,\ 2 - 3 \mid 1 + 1) = (1, 0, -1 \mid 2)$.
> $$
> \left[\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 2 & -1 & 1 & 3 \end{array}\right] \xrightarrow{E_{21}(-2)} \left[\begin{array}{ccc|c} 1 & -1 & 2 & 1 \\ 0 & 1 & -3 & 1 \end{array}\right] \xrightarrow{E_{12}(1)} \left[\begin{array}{ccc|c} 1 & 0 & -1 & 2 \\ 0 & 1 & -3 & 1 \end{array}\right]
> $$
> Colonna di $z$ senza pivot: $z = t$. Dalle righe: $x - z = 2$, $y - 3z = 1$.
> $$
> r: \begin{cases} x = 2 + t \\ y = 1 + 3t \\ z = t \end{cases} \qquad t \in \mathbb{R}
> $$
> Verifica: $(2 + t) - (1 + 3t) + 2t = 1$ e $2(2 + t) - (1 + 3t) + t = 3$ per ogni $t$. Punto $(2, 1, 0)$, direzione $(1, 3, 1)$.

**Esercizio 6.** Trovare equazioni parametriche del piano $\pi: 2x - y + 3z = 6$.

> [!example]- Soluzione
> *Come lo riconosco*: piano in cartesiane, una sola equazione. *Metodo*: matrice di una riga, pivot nella prima colonna non nulla, due variabili libere.
> - $[\,2 \ \ -1 \ \ 3 \mid 6\,]$: pivot $2$ in colonna $x$; colonne $y$ e $z$ senza pivot, $3 - 1 = 2$ variabili libere.
> - $D_1(\frac{1}{2})$: $[\,1 \ \ -\frac{1}{2} \ \ \frac{3}{2} \mid 3\,]$, ridotta.
> - Pongo $y = t$, $z = s$: la riga dice $x - \frac{1}{2}t + \frac{3}{2}s = 3$, quindi $x = 3 + \frac{1}{2}t - \frac{3}{2}s$.
> $$
> \pi: \begin{cases} x = 3 + \frac{1}{2}t - \frac{3}{2}s \\ y = t \\ z = s \end{cases} \qquad t, s \in \mathbb{R}
> $$
> Verifica: $2\left(3 + \frac{1}{2}t - \frac{3}{2}s\right) - t + 3s = 6 + t - 3s - t + 3s = 6$ per ogni $t, s$. Punto $(3, 0, 0)$; direzioni $\left(\frac{1}{2}, 1, 0\right)$ e $\left(-\frac{3}{2}, 0, 1\right)$, entrambe ortogonali alla normale $(2, -1, 3)$: $1 - 1 + 0 = 0$, $-3 + 0 + 3 = 0$.

**Esercizio 7.** Dire se i tre piani hanno punti in comune:
$$
\pi_1: x + 2y - z = 1 \qquad \pi_2: 2x + 3y + z = 4 \qquad \pi_3: 3x + 5y = 6
$$

> [!example]- Soluzione
> *Come lo riconosco*: i punti comuni a tre piani sono le soluzioni del sistema delle tre equazioni. *Metodo*: Gauss-Jordan sulla matrice completa e lettura con lo schema di "Leggere le soluzioni".
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ 3 - 4,\ 1 + 2 \mid 4 - 2) = (0, -1, 3 \mid 2)$.
> - $E_{31}(-3)$: $R_3 - 3R_1 = (0,\ 5 - 6,\ 0 + 3 \mid 6 - 3) = (0, -1, 3 \mid 3)$.
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0 \mid 1)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & -1 & 3 & 2 \\ 0 & 0 & 0 & 1 \end{array}\right]
> $$
> La terza riga dice $0 = 1$: sistema **incompatibile**, i tre piani non hanno punti comuni.
>
> *Controllo e lettura geometrica*: la terza equazione ha coefficienti somma delle prime due, $(1, 2, -1) + (2, 3, 1) = (3, 5, 0)$, ma termine noto $6 \neq 1 + 4 = 5$. Nessuna coppia di normali è proporzionale, quindi i piani si tagliano a due a due in tre rette parallele: è il "prisma" della figura in Metodo.

**Esercizio 8.** Stessa domanda per
$$
\pi_1: x + y + z = 2 \qquad \pi_2: x - y + 2z = 1 \qquad \pi_3: 3x + y + 4z = 5
$$
e, se i punti comuni sono infiniti, descriverli.

> [!example]- Soluzione
> *Come lo riconosco*: come l'esercizio 7. *Metodo*: Gauss-Jordan fino a $\operatorname{rref}$, perché se ci sono infinite soluzioni servono le parametriche.
> - $E_{21}(-1)$: $R_2 - R_1 = (0,\ -1 - 1,\ 2 - 1 \mid 1 - 2) = (0, -2, 1 \mid -1)$.
> - $E_{31}(-3)$: $R_3 - 3R_1 = (0,\ 1 - 3,\ 4 - 3 \mid 5 - 6) = (0, -2, 1 \mid -1)$.
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0 \mid 0)$, riga nulla: un'equazione è conseguenza delle altre.
> - $D_2(-\frac{1}{2})$: $R_2 = \left(0, 1, -\frac{1}{2} \ \middle|\ \frac{1}{2}\right)$.
> - $E_{12}(-1)$: $R_1 - R_2 = \left(1, 0, 1 + \frac{1}{2} \ \middle|\ 2 - \frac{1}{2}\right) = \left(1, 0, \frac{3}{2} \ \middle|\ \frac{3}{2}\right)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & \frac{3}{2} & \frac{3}{2} \\ 0 & 1 & -\frac{1}{2} & \frac{1}{2} \\ 0 & 0 & 0 & 0 \end{array}\right]
> $$
> Nessuna riga $0 = c$ con $c \neq 0$; due pivot, tre incognite: una variabile libera, $z = t$.
> $$
> \begin{cases} x = \frac{3}{2} - \frac{3}{2}t \\ y = \frac{1}{2} + \frac{1}{2}t \\ z = t \end{cases} \qquad t \in \mathbb{R}
> $$
> I tre piani hanno in comune una **retta**, per $\left(\frac{3}{2}, \frac{1}{2}, 0\right)$ con direzione $\left(-\frac{3}{2}, \frac{1}{2}, 1\right)$, o $(-3, 1, 2)$. Stanno nello stesso fascio: infatti $R_3 = 2R_1 + R_2$, sia nei coefficienti ($2(1, 1, 1) + (1, -1, 2) = (3, 1, 4)$) sia nel termine noto ($4 + 1 = 5$).
>
> Verifica con $t = 1$, cioè $(0, 1, 1)$: $0 + 1 + 1 = 2$; $0 - 1 + 2 = 1$; $0 + 1 + 4 = 5$. Con $t = -1$, cioè $(3, 0, -1)$: $3 - 1 = 2$; $3 - 2 = 1$; $9 - 4 = 5$.

**Esercizio 9.** Risolvere
$$
\begin{cases} x_1 + 2x_2 - x_3 + x_4 = 2 \\ 2x_1 + 4x_2 + x_3 + 5x_4 = 7 \\ x_1 + 2x_2 + 2x_3 + 4x_4 = 5 \end{cases}
$$
indicando le variabili libere.

> [!tip]- Indizio
> Dopo il primo passo, la colonna di $x_2$ sotto il pivot è tutta nulla: lo scalino salta una colonna.

> [!example]- Soluzione
> *Come lo riconosco*: quattro incognite, tre equazioni, coefficienti di $x_2$ proporzionali a quelli di $x_1$. *Metodo*: Gauss-Jordan; al passo 1 ripetuto si cerca la **prima colonna con un elemento non nullo** nella sottomatrice, che qui non è la seconda.
> - $E_{21}(-2)$: $R_2 - 2R_1 = (0,\ 0,\ 1 + 2,\ 5 - 2 \mid 7 - 4) = (0, 0, 3, 3 \mid 3)$.
> - $E_{31}(-1)$: $R_3 - R_1 = (0,\ 0,\ 2 + 1,\ 4 - 1 \mid 5 - 2) = (0, 0, 3, 3 \mid 3)$.
> - Escludendo la prima riga, la colonna $2$ è tutta nulla: il pivot $p_2 = 3$ sta in colonna $3$.
> - $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0, 0 \mid 0)$.
> - $D_2(\frac{1}{3})$: $R_2 = (0, 0, 1, 1 \mid 1)$.
> - $E_{12}(1)$: $R_1 + R_2 = (1,\ 2,\ 0,\ 2 \mid 3)$.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 0 & 2 & 3 \\ 0 & 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right]
> $$
> Pivot nelle colonne $1$ e $3$; colonne $2$ e $4$ senza pivot: $4 - 2 = 2$ variabili libere, $x_2 = t$, $x_4 = s$.
> - Riga 1: $x_1 + 2t + 2s = 3$, quindi $x_1 = 3 - 2t - 2s$.
> - Riga 2: $x_3 + s = 1$, quindi $x_3 = 1 - s$.
> $$
> \begin{cases} x_1 = 3 - 2t - 2s \\ x_2 = t \\ x_3 = 1 - s \\ x_4 = s \end{cases} \qquad t, s \in \mathbb{R}
> $$
> Verifica con $t = s = 0$, cioè $(3, 0, 1, 0)$: $3 - 1 = 2$; $6 + 1 = 7$; $3 + 2 = 5$. Con $t = s = 1$, cioè $(-1, 1, 0, 1)$: $-1 + 2 - 0 + 1 = 2$; $-2 + 4 + 0 + 5 = 7$; $-1 + 2 + 0 + 4 = 5$.
>
> L'errore tipico qui è prendere $x_2$ come incognita di pivot "perché è la seconda": la sua colonna non ha pivot, quindi è libera.

**Esercizio 10.** Trovare $a, b, c \in \mathbb{R}$ tali che la parabola $y = ax^2 + bx + c$ passi per i punti $(1, 2)$, $(2, 3)$, $(3, 6)$.

> [!example]- Soluzione
> *Come lo riconosco*: le incognite sono i coefficienti $a, b, c$, e ogni punto dà un'equazione **lineare** in $a, b, c$ (le $x$ e le $y$ sono numeri). *Metodo*: scrivere il sistema e Gauss-Jordan.
> - $(1, 2)$: $a \cdot 1 + b \cdot 1 + c = 2$.
> - $(2, 3)$: $4a + 2b + c = 3$.
> - $(3, 6)$: $9a + 3b + c = 6$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 4 & 2 & 1 & 3 \\ 9 & 3 & 1 & 6 \end{array}\right]
> $$
> - $E_{21}(-4)$: $R_2 - 4R_1 = (0,\ 2 - 4,\ 1 - 4 \mid 3 - 8) = (0, -2, -3 \mid -5)$.
> - $E_{31}(-9)$: $R_3 - 9R_1 = (0,\ 3 - 9,\ 1 - 9 \mid 6 - 18) = (0, -6, -8 \mid -12)$.
> - Pivot $-2$, sotto c'è $-6$: $\mu = -\frac{-6}{-2} = -3$. $E_{32}(-3)$: $R_3 - 3R_2 = (0,\ -6 + 6,\ -8 + 9 \mid -12 + 15) = (0, 0, 1 \mid 3)$.
>
> Dal basso: $c = 3$; $-2b - 3 \cdot 3 = -5$, quindi $-2b = 4$, $b = -2$; $a - 2 + 3 = 2$, quindi $a = 1$.
> $$
> y = x^2 - 2x + 3
> $$
> Verifica: $x = 1$ dà $1 - 2 + 3 = 2$; $x = 2$ dà $4 - 4 + 3 = 3$; $x = 3$ dà $9 - 6 + 3 = 6$.

**Esercizio 11** (teoria).

- a) Mostrare che $E_{ij}(\mu)$ seguita da $E_{ij}(-\mu)$ riporta alla matrice di partenza, e dare l'inversa di $S_{ij}$ e di $D_i(\lambda)$.
- b) Spiegare con un esempio perché $D_i(0)$ non è ammessa.
- c) Vero o falso: se la forma a scalini di $[A \mid \vec{b}]$ ha una riga $(0 \ \cdots \ 0 \mid 0)$, il sistema ha infinite soluzioni.
- d) Vero o falso: un sistema con più incognite che equazioni, se è compatibile, ha infinite soluzioni.

> [!example]- Soluzione
> *Come lo riconosco*: domande di teoria sulle definizioni. *Metodo*: per un "falso" basta un controesempio con numeri; per un "vero" serve il perché.
>
> **a)** $E_{ij}(\mu)$ cambia solo $R_i$ in $R_i + \mu R_j$, con $i \neq j$, quindi $R_j$ resta uguale. $E_{ij}(-\mu)$ cambia $R_i + \mu R_j$ in $(R_i + \mu R_j) - \mu R_j = R_i$. Tutte le altre righe non sono mai cambiate: si riottiene la matrice di partenza. L'inversa di $S_{ij}$ è $S_{ij}$; quella di $D_i(\lambda)$ è $D_i(\frac{1}{\lambda})$, che esiste perché $\lambda \neq 0$.
>
> **b)** $x + y = 2$, $x - y = 0$ ha la sola soluzione $(1, 1)$. Con $D_2(0)$ la seconda diventa $0 = 0$ e $(0, 2)$ diventa soluzione: il sistema nuovo non è equivalente. Non esiste un'operazione che riporti indietro, perché la seconda equazione è persa.
>
> **c)** **Falso.** $x + y = 2$, $x - y = 0$, $2x = 2$: la terza è la somma delle prime due, la forma a scalini ha una riga nulla, ma
> $$
> \left[\begin{array}{cc|c} 1 & 1 & 2 \\ 1 & -1 & 0 \\ 2 & 0 & 2 \end{array}\right] \to \left[\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{array}\right]
> $$
> ha due pivot su due incognite: soluzione unica $(1, 1)$. Una riga nulla dice solo che un'equazione era superflua; quello che decide sono le colonne senza pivot.
>
> **d)** **Vero.** Con $m$ equazioni ci sono al più $m$ pivot (uno per riga non nulla). Se le incognite sono $n > m$, le variabili libere sono almeno $n - m \geq 1$, e ogni valore del parametro dà una soluzione diversa. Senza "se è compatibile" sarebbe falso: $x + y + z = 1$, $x + y + z = 2$ ha tre incognite, due equazioni e nessuna soluzione ($E_{21}(-1)$ dà $0 = 1$).

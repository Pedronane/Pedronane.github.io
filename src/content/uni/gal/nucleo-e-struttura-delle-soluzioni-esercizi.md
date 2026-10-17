---
title: Nucleo e struttura delle soluzioni (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-05
lezioni: []
ordine: 8
---

Esercizi tipo esame di [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Prima di aprire la soluzione, prova almeno a scrivere il tipo e il metodo.

**Esercizio 1** (facile). Dato il sistema
$$
\begin{cases} 2x - y + z = 1 \\ x + 3z = 4 \end{cases}
$$

- a) Scriverlo in forma matriciale, con l'ordine di $A$, $\vec{x}$, $\vec{b}$, e scrivere il sistema omogeneo associato.
- b) Verificare con il prodotto righe per colonne che $(1, 1, 0)$ non è soluzione, che $(1, 2, 1)$ lo è e che $(-3, -5, 1)$ risolve l'omogeneo.
- c) Senza risolvere il sistema, trovare un'altra soluzione.
- d) Calcolare $\operatorname{rg}(A)$ e $\operatorname{null}(A)$ e scrivere tutte le soluzioni.

> [!tip]- Indizio
> Per la c) usa il teorema: soluzione più elemento del nucleo. Per la d) le due righe di $A$ sono proporzionali?

> [!example]- Soluzione
> *Tipo*: lettura di un sistema in forma matriciale e uso diretto del teorema. *Come lo riconosco*: dà vettori già pronti da controllare. *Perché questo metodo*: verificare è un prodotto, e il teorema dice come produrre soluzioni nuove senza Gauss-Jordan.
>
> **a)** $A = \begin{pmatrix} 2 & -1 & 1 \\ 1 & 0 & 3 \end{pmatrix}$ ($2 \times 3$: 2 equazioni, 3 incognite), $\vec{x} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ ($3 \times 1$), $\vec{b} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$ ($2 \times 1$). Nella seconda riga lo $0$ è il coefficiente di $y$, che manca. Omogeneo associato: $2x - y + z = 0$, $x + 3z = 0$.
>
> **b)**
> - $(1, 1, 0)$: riga 1 per la colonna, $2 - 1 + 0 = 1$; riga 2, $1 + 0 + 0 = 1 \neq 4$. Non è soluzione.
> - $(1, 2, 1)$: riga 1, $2 - 2 + 1 = 1$; riga 2, $1 + 0 + 3 = 4$. È soluzione.
> - $(-3, -5, 1)$ con termini noti a zero: riga 1, $-6 + 5 + 1 = 0$; riga 2, $-3 + 0 + 3 = 0$. È in $N(A)$.
>
> **c)** Per il teorema (inclusione $\supseteq$) $\vec{x}_0 + \vec{v}$ è soluzione: $(1, 2, 1) + (-3, -5, 1) = (-2, -3, 2)$. Controllo: $-4 + 3 + 2 = 1$; $-2 + 0 + 6 = 4$.
>
> **d)** Riduco $A$: $R_1 \leftrightarrow R_2$ dà $\begin{pmatrix} 1 & 0 & 3 \\ 2 & -1 & 1 \end{pmatrix}$; poi $R_2 \to R_2 - 2R_1$: $(2 - 2,\ -1 - 0,\ 1 - 6) = (0, -1, -5)$. Due pivot, $\operatorname{rg}(A) = 2$, $\operatorname{null}(A) = 3 - 2 = 1$. Dall'omogeneo ridotto: $z = t$ libera, $-y - 5t = 0$ quindi $y = -5t$, $x + 3t = 0$ quindi $x = -3t$. $N(A) = \{t(-3, -5, 1)\}$, e
> $$
> \text{soluzioni} = \{(1, 2, 1) + t(-3, -5, 1) : t \in \mathbb{R}\}
> $$
> *Verifica*: la soluzione della c) è il caso $t = 1$.

**Esercizio 2.** Risolvere il sistema
$$
\begin{cases} x + 2y + z + w = 2 \\ 2x + 4y + 3z + w = 5 \\ -x - 2y + z - 3w = 0 \end{cases}
$$
scrivendo l'insieme delle soluzioni come somma di una soluzione particolare e delle soluzioni del sistema omogeneo associato. Quanto valgono $\operatorname{rg}(A)$ e $\operatorname{null}(A)$?

> [!example]- Soluzione
> *Tipo*: lo stesso dell'esempio della prof. *Metodo*: Gauss-Jordan sulla completa, poi la colonna delle incognite spezzata per parametri.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 1 & 1 & 2 \\ 2 & 4 & 3 & 1 & 5 \\ -1 & -2 & 1 & -3 & 0 \end{array}\right]
> $$
> - $E_{21}(-2)$, cioè $R_2 \to R_2 - 2R_1$: $(2 - 2,\ 4 - 4,\ 3 - 2,\ 1 - 2 \mid 5 - 4) = (0, 0, 1, -1 \mid 1)$.
> - $E_{31}(1)$, cioè $R_3 \to R_3 + R_1$: $(-1 + 1,\ -2 + 2,\ 1 + 1,\ -3 + 1 \mid 0 + 2) = (0, 0, 2, -2 \mid 2)$.
> - $E_{32}(-2)$, cioè $R_3 \to R_3 - 2R_2$: la terza riga si annulla.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 1 & 1 & 2 \\ 0 & 0 & 1 & -1 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{E_{12}(-1)} \left[\begin{array}{cccc|c} 1 & 2 & 0 & 2 & 1 \\ 0 & 0 & 1 & -1 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right]
> $$
> ($E_{12}(-1)$ è $R_1 \to R_1 - R_2$: $(1,\ 2,\ 1 - 1,\ 1 + 1 \mid 2 - 1) = (1, 2, 0, 2 \mid 1)$.)
>
> Pivot nelle colonne di $x$ e $z$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 2$, compatibile; $\operatorname{null}(A) = 4 - 2 = 2$, variabili libere $y$ e $w$. La colonna di $y$ è senza pivot anche se $y$ compare nella prima equazione: dopo $E_{21}(-2)$ il $4$ diventa $0$.
>
> $x = 1 - 2y - 2w$, $z = 1 + w$:
> $$
> \begin{pmatrix} x \\ y \\ z \\ w \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 1 \\ 0 \end{pmatrix} + y\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + w\begin{pmatrix} -2 \\ 0 \\ 1 \\ 1 \end{pmatrix}, \qquad y, w \in \mathbb{R}
> $$
> **Verifica.** $(1, 0, 1, 0)$: $1 + 1 = 2$; $2 + 3 = 5$; $-1 + 1 = 0$. $(-2, 1, 0, 0)$ nell'omogeneo: $-2 + 2 = 0$; $-4 + 4 = 0$; $2 - 2 = 0$. $(-2, 0, 1, 1)$: $-2 + 1 + 1 = 0$; $-4 + 3 + 1 = 0$; $2 + 1 - 3 = 0$.

**Esercizio 3.** Di un sistema $A\vec{x} = \vec{b}$ in tre incognite si sa che $\vec{x}_0 = (1, 0, 1)$ è una soluzione e che $N(A) = \{t(1, -1, 0) : t \in \mathbb{R}\}$.

- a) Scrivere tutte le soluzioni.
- b) $(3, -2, 1)$ è soluzione? E $(0, 1, 0)$?
- c) Quanto vale $\operatorname{rg}(A)$?

> [!example]- Soluzione
> *Tipo*: il sistema non c'è, ci sono solo $\vec{x}_0$ e il nucleo. *Perché il teorema*: dice che bastano quei due dati per conoscere tutte le soluzioni, e dà il criterio “$\vec{w} - \vec{x}_0 \in N(A)$".
>
> **a)** Per il teorema, le soluzioni sono $\vec{x}_0 + \vec{v}$ con $\vec{v} \in N(A)$:
> $$
> \{(1 + t,\ -t,\ 1) : t \in \mathbb{R}\}
> $$
> **b)** $(3, -2, 1) - (1, 0, 1) = (2, -2, 0) = 2(1, -1, 0) \in N(A)$: **sì**, con $t = 2$. Invece $(0, 1, 0) - (1, 0, 1) = (-1, 1, -1)$ non è un multiplo di $(1, -1, 0)$ (la terza componente è $-1$, non $0$): **no**.
>
> **c)** Il nucleo dipende da un parametro, quindi $\operatorname{null}(A) = 1$ e $\operatorname{rg}(A) = 3 - 1 = 2$.
>
> *Verifica*: $(3, -2, 1)$ è $(1 + t, -t, 1)$ con $t = 2$: $1 + 2 = 3$, $-2$, $1$. Torna.

**Esercizio 4.** Siano $\vec{x}_1$ e $\vec{x}_2$ due soluzioni distinte di $A\vec{x} = \vec{b}$, con $\vec{b} \neq \vec{0}$. Quali fra le seguenti sono soluzioni di $A\vec{x} = \vec{b}$, quali di $A\vec{x} = \vec{0}$, quali di nessuno dei due?

- a) $\vec{x}_1 + \vec{x}_2$
- b) $\vec{x}_1 - \vec{x}_2$
- c) $3\vec{x}_1 - 2\vec{x}_2$
- d) $\frac{1}{2}(\vec{x}_1 + \vec{x}_2)$

> [!example]- Soluzione
> *Tipo*: combinazioni di soluzioni senza conoscere $A$. *Metodo*: la distributiva, e si guarda la somma dei coefficienti.
>
> Per la distributiva, $A(\alpha\vec{x}_1 + \beta\vec{x}_2) = \alpha A\vec{x}_1 + \beta A\vec{x}_2 = (\alpha + \beta)\vec{b}$. Conta solo la somma dei coefficienti: se vale $1$ si ottiene $\vec{b}$, se vale $0$ si ottiene $\vec{0}$, altrimenti né l'uno né l'altro (perché $\vec{b} \neq \vec{0}$).
> - a) $1 + 1 = 2$: dà $2\vec{b}$, **nessuno dei due**.
> - b) $1 - 1 = 0$: soluzione dell'**omogeneo**. È la "differenza di due soluzioni" della dimostrazione del teorema.
> - c) $3 - 2 = 1$: soluzione di **$A\vec{x} = \vec{b}$**.
> - d) $\frac{1}{2} + \frac{1}{2} = 1$: soluzione di **$A\vec{x} = \vec{b}$**, il punto medio fra le due.
>
> Il c) letto col teorema: $3\vec{x}_1 - 2\vec{x}_2 = \vec{x}_1 + 2(\vec{x}_1 - \vec{x}_2)$, cioè una soluzione più un elemento del nucleo.
>
> *Verifica su un caso concreto*: con $x + 2y = 4$, $\vec{x}_1 = (4, 0)$, $\vec{x}_2 = (0, 2)$ (figura del teorema, a destra). a) $(4, 2)$: $4 + 4 = 8$. b) $(4, -2)$: $4 - 4 = 0$. c) $(12, -4)$: $12 - 8 = 4$. d) $(2, 1)$: $2 + 2 = 4$.

**Esercizio 5.** Sia
$$
A_k = \begin{pmatrix} 1 & k & 1 \\ 1 & 1 & k \\ k & 1 & 1 \end{pmatrix}, \qquad k \in \mathbb{R}
$$
Calcolare $\operatorname{rg}(A_k)$ e $\operatorname{null}(A_k)$ al variare di $k$, e descrivere $N(A_k)$ nei casi in cui non è $\{\vec{0}\}$.

> [!tip]- Indizio
> Riduci tenendo $k$ e scegli moltiplicatori che non richiedono di dividere per espressioni in $k$. Poi fattorizza l'ultimo pivot.

> [!example]- Soluzione
> *Tipo*: matrice con parametro, domanda sul nucleo. *Come lo riconosco*: chiede la nullità "al variare di $k$". *Perché questo metodo*: $\operatorname{null} = 3 - \operatorname{rg}$, e il rango con parametro si calcola riducendo una volta sola e guardando dove i pivot si annullano ([Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/)).
>
> - $E_{21}(-1)$, cioè $R_2 \to R_2 - R_1$: $(1 - 1,\ 1 - k,\ k - 1) = (0,\ 1 - k,\ k - 1)$.
> - $E_{31}(-k)$, cioè $R_3 \to R_3 - kR_1$: $(k - k,\ 1 - k^2,\ 1 - k) = (0,\ 1 - k^2,\ 1 - k)$.
> - $E_{32}(-(1 + k))$, cioè $R_3 \to R_3 - (1 + k)R_2$. Secondo elemento: $1 - k^2 - (1 + k)(1 - k) = 1 - k^2 - (1 - k^2) = 0$. Terzo: $1 - k - (1 + k)(k - 1) = (1 - k) + (1 + k)(1 - k) = (1 - k)(1 + 1 + k) = (1 - k)(2 + k)$ (raccolgo $1 - k$).
>
> (Se $k = 0$ il passo $E_{31}$ non serve, se $k = -1$ non serve $E_{32}$: il coefficiente è $0$ e la riga è già quella della formula.)
> $$
> \begin{pmatrix} 1 & k & 1 \\ 0 & 1 - k & k - 1 \\ 0 & 0 & (1 - k)(2 + k) \end{pmatrix}
> $$
> - $k \neq 1, -2$: tre pivot. $\operatorname{rg} = 3$, $\operatorname{null} = 0$, $N(A_k) = \{\vec{0}\}$.
> - $k = 1$: seconda e terza riga nulle. $\operatorname{rg} = 1$, $\operatorname{null} = 2$. Resta $x + y + z = 0$, con $y = s$, $z = t$ libere:
> $$
> N(A_1) = \left\{ s\begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix} + t\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} : s, t \in \mathbb{R} \right\}
> $$
> - $k = -2$: la matrice è $\begin{pmatrix} 1 & -2 & 1 \\ 0 & 3 & -3 \\ 0 & 0 & 0 \end{pmatrix}$. $\operatorname{rg} = 2$, $\operatorname{null} = 1$. Dalla seconda $3y - 3z = 0$, quindi $y = z$; dalla prima $x = 2y - z = 2z - z = z$:
> $$
> N(A_{-2}) = \left\{ t\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} : t \in \mathbb{R} \right\}
> $$
>
> In ogni caso $\operatorname{rg} + \operatorname{null} = 3$. Verifica: $(1, 1, 1)$ in $A_{-2}$ dà $1 - 2 + 1 = 0$ su ogni riga; $(-1, 1, 0)$ e $(-1, 0, 1)$ in $A_1$ danno $0$ perché ogni riga di $A_1$ è $(1, 1, 1)$.

**Esercizio 6** (sul modello del 3.12 del foglio 3). Si consideri il sistema, con $k \in \mathbb{R}$,
$$
\begin{cases} x + y + 2z = 1 \\ x + 2y + z = 1 \\ 2x + 3y + (k^2 + 2)z = k + 1 \end{cases}
$$

- a) Per quali $k$ il sistema è compatibile? Quante soluzioni ha?
- b) Nei casi con infinite soluzioni, scriverle nella forma $\vec{x}_0 + N(A_k)$.
- c) Per quali $k$ il nucleo $N(A_k)$ non è $\{\vec{0}\}$? Confrontare con la a).
- d) Per quali $k$ l'insieme delle soluzioni è chiuso rispetto alla somma e al prodotto per uno scalare?

> [!tip]- Indizio
> Dopo tre operazioni la terza riga è $(0, 0, k^2 - 1 \mid k - 1)$. Per la d) guarda la prima componente di $\vec{b}$.

> [!example]- Soluzione
> *Tipo*: sistema con parametro, con domande sul nucleo e sulla chiusura. *Come lo riconosco*: "per quali $k$" più "forma $\vec{x}_0 + N(A)$". *Perché questo metodo*: Rouché-Capelli sulla completa ridotta una volta sola con $k$ dentro; poi il teorema per i casi infiniti; per la chiusura, il metodo "chiuso se e solo se omogeneo".
>
> **Riduzione.**
> - $R_2 \to R_2 - R_1$: $(1 - 1,\ 2 - 1,\ 1 - 2 \mid 1 - 1) = (0, 1, -1 \mid 0)$.
> - $R_3 \to R_3 - 2R_1$: $(2 - 2,\ 3 - 2,\ k^2 + 2 - 4 \mid k + 1 - 2) = (0,\ 1,\ k^2 - 2 \mid k - 1)$.
> - $R_3 \to R_3 - R_2$: $(0,\ 0,\ k^2 - 2 + 1 \mid k - 1 - 0) = (0,\ 0,\ k^2 - 1 \mid k - 1)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 2 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & 0 & (k - 1)(k + 1) & k - 1 \end{array}\right]
> $$
> Nessuna divisione per espressioni in $k$: i moltiplicatori sono $1$ e $2$.
>
> **a)** Il terzo pivot è $(k - 1)(k + 1)$.
> - $k \neq \pm 1$: $\operatorname{rg}(A_k) = \operatorname{rg}([A_k \mid \vec{b}]) = 3 = n$, una sola soluzione. Risalendo: $z = \frac{k - 1}{(k - 1)(k + 1)} = \frac{1}{k + 1}$ (semplifico $k - 1 \neq 0$); dalla seconda $y = z = \frac{1}{k + 1}$; dalla prima $x = 1 - y - 2z = 1 - \frac{3}{k + 1} = \frac{k - 2}{k + 1}$.
> - $k = 1$: terza riga $(0, 0, 0 \mid 0)$, $\operatorname{rg}(A_1) = \operatorname{rg}([A_1 \mid \vec{b}]) = 2 < 3$: infinite soluzioni, $3 - 2 = 1$ parametro.
> - $k = -1$: terza riga $(0, 0, 0 \mid -2)$, cioè $0 = -2$: $\operatorname{rg}(A_{-1}) = 2 < 3 = \operatorname{rg}([A_{-1} \mid \vec{b}])$, incompatibile.
>
> **b)** $k = 1$. Restano $x + y + 2z = 1$ e $y - z = 0$. Con $z = t$: $y = t$, $x = 1 - t - 2t = 1 - 3t$.
> $$
> \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} -3 \\ 1 \\ 1 \end{pmatrix}, \qquad t \in \mathbb{R}
> $$
>
> **c)** $N(A_k) \neq \{\vec{0}\}$ se e solo se $\operatorname{rg}(A_k) < 3$, cioè per $k = 1$ e per $k = -1$. Anzi la matrice dipende solo da $k^2$, quindi $A_1 = A_{-1}$ e il nucleo è lo stesso: $\{t(-3, 1, 1)\}$. Per $k = -1$ però il sistema è incompatibile. È l'ipotesi "compatibile" del teorema vista in un esercizio: stessa $A$, stesso nucleo, ma con un $\vec{b}$ c'è una retta di soluzioni e con l'altro nessuna.
>
> **d)** Chiuso se e solo se il sistema è omogeneo. Ma $\vec{b} = (1, 1, k + 1)$ ha la prima componente uguale a $1$ per ogni $k$: il sistema **non è mai** omogeneo. Quindi l'insieme delle soluzioni **non è chiuso per nessun $k$** (per $k \neq \pm 1$ è un solo punto diverso da $\vec{0}$, per $k = 1$ una retta che non passa per l'origine, per $k = -1$ è vuoto).
>
> *Verifica*. Per $k = 1$: $(1, 0, 0)$ dà $1$, $1$, $2 = k + 1$; $(-3, 1, 1)$ nell'omogeneo dà $-3 + 1 + 2 = 0$, $-3 + 2 + 1 = 0$, $-6 + 3 + 3 = 0$. Per $k = 2$ la formula dà $(0, \frac13, \frac13)$: $0 + \frac13 + \frac23 = 1$; $0 + \frac23 + \frac13 = 1$; $0 + 1 + 6 \cdot \frac13 = 3 = k + 1$.

**Esercizio 7** (livello 30). Scrivere un sistema lineare in $x, y, z$ il cui insieme delle soluzioni sia
$$
\left\{ \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} + t\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} : t \in \mathbb{R} \right\}
$$
Quante equazioni servono almeno? Basta una?

> [!tip]- Indizio
> Prima il nucleo: ogni riga $\vec{r}$ di $A$ deve dare $\vec{r} \cdot (1, 1, 1) = 0$. Poi $\vec{b} = A\vec{x}_0$.

> [!example]- Soluzione
> *Tipo*: il problema al contrario, dalle soluzioni al sistema. *Come lo riconosco*: dà l'insieme delle soluzioni nella forma del teorema e chiede $A$ e $\vec{b}$. *Perché questo metodo*: il teorema dice che servono due cose, $N(A) = \{t(1, 1, 1)\}$ e $A\vec{x}_0 = \vec{b}$.
>
> 1. **Quante equazioni.** Il nucleo dipende da un parametro, quindi $\operatorname{null}(A) = 1$ e $\operatorname{rg}(A) = 3 - 1 = 2$: servono almeno **due** equazioni indipendenti. Una sola equazione (rango $1$) darebbe $\operatorname{null} = 2$, un piano di soluzioni, troppo.
> 2. **Le righe.** Cerco righe $(a, b, c)$ con $a + b + c = 0$ (prodotto con $(1, 1, 1)$). Due non proporzionali: $(1, -1, 0)$ e $(0, 1, -1)$.
> 3. **I termini noti.** $\vec{b} = A\vec{x}_0$: riga 1 per $(1, 2, 0)$, $1 - 2 + 0 = -1$; riga 2, $0 + 2 - 0 = 2$.
> 4. **Il sistema.**
> $$
> \begin{cases} x - y = -1 \\ y - z = 2 \end{cases}
> $$
>
> *Verifica risolvendo*: è già a scalini, pivot su $x$ e $y$, $z = t$ libera. Dalla seconda $y = 2 + t$, dalla prima $x = y - 1 = 1 + t$. Soluzioni $(1 + t,\ 2 + t,\ t) = (1, 2, 0) + t(1, 1, 1)$. Proprio l'insieme richiesto.
>
> Geometricamente: le soluzioni sono una retta, e ogni equazione è un piano che la contiene. Le risposte possibili sono infinite (due piani qualunque del fascio di piani per quella retta, [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/)); aggiungere una terza equazione che sia combinazione delle prime due non cambia nulla.

**Esercizio 8** (livello 30, teoria). Vero o falso? Giustificare ogni risposta con il teorema o con un controesempio.

- a) Se $A \in M_{3 \times 5}(\mathbb{R})$, il sistema $A\vec{x} = \vec{b}$ non può avere un'unica soluzione.
- b) Se $A \in M_{5 \times 3}(\mathbb{R})$, il sistema $A\vec{x} = \vec{b}$ ha al più una soluzione.
- c) Se $A\vec{x} = \vec{b}$ ha esattamente una soluzione, allora $A\vec{x} = \vec{0}$ ha solo la soluzione nulla.
- d) Se $A\vec{x} = \vec{0}$ ha solo la soluzione nulla, allora $A\vec{x} = \vec{b}$ ha esattamente una soluzione per ogni $\vec{b}$.
- e) Se $\vec{b} \neq \vec{0}$, l'insieme delle soluzioni di $A\vec{x} = \vec{b}$ non contiene $\vec{0}$.

> [!example]- Soluzione
> *Tipo*: domande di teoria del tipo 3.5-3.6 del foglio 3. *Metodo*: per "vero" una catena di fatti già enunciati (teorema, nullità più rango); per "falso" un controesempio con i numeri, il più piccolo possibile.
> - a) **Vero**. $\operatorname{rg}(A) \leq 3$ (al più un pivot per riga), quindi $\operatorname{null}(A) = 5 - \operatorname{rg}(A) \geq 2$. Se il sistema è compatibile, le soluzioni sono $\vec{x}_0 + N(A)$ e dipendono da almeno due parametri; se è incompatibile non ne ha. Mai una sola.
> - b) **Falso**. Con $A$ la matrice nulla $5 \times 3$ e $\vec{b} = \vec{0}$ ogni $\vec{x} \in \mathbb{R}^3$ è soluzione. Più righe che colonne non impedisce di avere variabili libere.
> - c) **Vero**. Per il teorema, l'insieme delle soluzioni è $\{\vec{x}_0 + \vec{v} : \vec{v} \in N(A)\}$. Se $N(A)$ contenesse un $\vec{v} \neq \vec{0}$, $\vec{x}_0$ e $\vec{x}_0 + \vec{v}$ sarebbero due soluzioni distinte. Quindi $N(A) = \{\vec{0}\}$.
> - d) **Falso**. $A = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ ($2 \times 1$): $A\vec{x} = \vec{0}$ è $x = 0$, $x = 0$, solo la nulla. Con $\vec{b} = (1, 2)$ il sistema è $x = 1$, $x = 2$: incompatibile. Il nucleo banale dà "**al più** una soluzione", non "almeno una". (Con $A$ quadrata invece è vero: $\operatorname{rg}(A) = n$ vuol dire $A$ invertibile, [Matrici invertibili](/uni/gal/matrici-invertibili/), L6.)
> - e) **Vero**. $A\vec{0} = \vec{0} \neq \vec{b}$. È il motivo più rapido per dire che l'insieme non è chiuso: un insieme chiuso per il prodotto per scalare contiene $0 \cdot \vec{x} = \vec{0}$.
>
> *Verifica dei controesempi*: in b) $\operatorname{rg} = 0$, $\operatorname{null} = 3 - 0 = 3$; in d) $\operatorname{rg}(A) = 1 = n$ ma $\operatorname{rg}([A \mid \vec{b}]) = 2$.

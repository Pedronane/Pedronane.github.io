---
title: Generatori (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-13
lezioni: []
ordine: 12
---

Esercizi tipo esame di [Generatori](/uni/gal/generatori/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Prima di ogni soluzione: riconoscere quale dei tre metodi serve.

**Esercizio 1** (facile). Dire se $\{(2, 1), (1, 3)\}$ genera $\mathbb{R}^2$ e scrivere $(1, 8)$ come combinazione lineare dei due vettori.

> [!example]- Soluzione
> **Tipo**: criterio col rango, poi appartenenza con i coefficienti. Si fa tutto con una sola riduzione di $[A \mid \vec{b}]$.
> $$
> \left[\begin{array}{cc|c} 2 & 1 & 1 \\ 1 & 3 & 8 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{cc|c} 1 & 3 & 8 \\ 2 & 1 & 1 \end{array}\right] \xrightarrow{E_{21}(-2)} \left[\begin{array}{cc|c} 1 & 3 & 8 \\ 0 & -5 & -15 \end{array}\right]
> $$
> ($S_{12}$ per avere il pivot $1$; poi $R_2 - 2R_1 = (2 - 2,\ 1 - 6 \mid 1 - 16)$.) Due pivot a sinistra: $\operatorname{rg}(A) = 2$, **generano $\mathbb{R}^2$**.
>
> Coefficienti $a$ (su $(2, 1)$) e $b$ (su $(1, 3)$): $-5b = -15$, quindi $b = 3$; $a + 3b = 8$, quindi $a = 8 - 9 = -1$.
>
> **Verifica**: $-(2, 1) + 3(1, 3) = (-2 + 3,\ -1 + 9) = (1, 8)$.

**Esercizio 2.** In $\mathbb{R}^4$ sia $U = \mathrm{Span}(\vec{u}_1, \vec{u}_2)$ con $\vec{u}_1 = (1, 1, 0, 1)$, $\vec{u}_2 = (0, 1, 1, 2)$.
- a) Trovare equazioni cartesiane di $U$.
- b) Dire se $(1, 3, 2, 5)$ e $(1, 0, 0, 0)$ stanno in $U$; per quello che ci sta, trovare i coefficienti.

> [!example]- Soluzione
> **Tipo**: "che cosa generano", in $\mathbb{R}^4$. Due vettori non generano $\mathbb{R}^4$ (osservazione, $2 < 4$), quindi ci si aspetta $4 - \operatorname{rg}$ equazioni.
>
> **a)** Riduco $[\vec{u}_1 \mid \vec{u}_2 \mid \vec{b}]$:
> $$
> \left[\begin{array}{cc|c} 1 & 0 & b_1 \\ 1 & 1 & b_2 \\ 0 & 1 & b_3 \\ 1 & 2 & b_4 \end{array}\right]
> $$
> - $E_{21}(-1)$: $R_2 - R_1 = (0,\ 1 \mid b_2 - b_1)$;
> - $E_{41}(-1)$: $R_4 - R_1 = (0,\ 2 \mid b_4 - b_1)$;
> - $E_{32}(-1)$: $R_3 - R_2 = (0,\ 1 - 1 \mid b_3 - b_2 + b_1)$;
> - $E_{42}(-2)$: $R_4 - 2R_2 = (0,\ 2 - 2 \mid b_4 - b_1 - 2(b_2 - b_1)) = (0, 0 \mid b_4 + b_1 - 2b_2)$.
> $$
> \left[\begin{array}{cc|c} 1 & 0 & b_1 \\ 0 & 1 & b_2 - b_1 \\ 0 & 0 & b_1 - b_2 + b_3 \\ 0 & 0 & b_1 - 2b_2 + b_4 \end{array}\right]
> $$
> Rango $2$, due righe nulle:
> $$
> U = \{(x_1, x_2, x_3, x_4) : x_1 - x_2 + x_3 = 0,\ x_1 - 2x_2 + x_4 = 0\}
> $$
> Controllo sui generatori: $\vec{u}_1$: $1 - 1 + 0 = 0$, $1 - 2 + 1 = 0$; $\vec{u}_2$: $0 - 1 + 1 = 0$, $0 - 2 + 2 = 0$.
>
> **b)** $(1, 3, 2, 5)$: $1 - 3 + 2 = 0$ e $1 - 6 + 5 = 0$, **sta in $U$**. Coefficienti dalla forma a scalini: $\lambda_1 = b_1 = 1$, $\lambda_2 = b_2 - b_1 = 3 - 1 = 2$. Verifica: $(1, 1, 0, 1) + 2(0, 1, 1, 2) = (1,\ 1 + 2,\ 0 + 2,\ 1 + 4) = (1, 3, 2, 5)$.
>
> $(1, 0, 0, 0)$: $1 - 0 + 0 = 1 \neq 0$, **non sta in $U$** (basta un'equazione che fallisce).

**Esercizio 3.** Per quali $k \in \mathbb{R}$ i vettori $\vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (0, 1, k)$, $\vec{v}_3 = (1, 0, k)$ generano $\mathbb{R}^3$? Per i valori che restano fuori, descrivere lo Span.

> [!example]- Soluzione
> **Tipo**: generatori con parametro. Tre vettori in $\mathbb{R}^3$: l'osservazione non esclude niente, serve il rango di $A$ al variare di $k$.
> $$
> A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3] = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & k & k \end{pmatrix}
> $$
> **$E_{21}(-1)$**, $R_2 \to R_2 - R_1$: $(1 - 1,\ 1 - 0,\ 0 - 1) = (0, 1, -1)$.
>
> **$E_{32}(-k)$**, $R_3 \to R_3 - kR_2$: $(0,\ k - k \cdot 1,\ k - k \cdot (-1)) = (0, 0, 2k)$. (Il pivot usato è $1$, non dipende da $k$: niente divisioni pericolose. Se $k = 0$ il passo non serve, e la formula dà comunque la riga giusta.)
> $$
> \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 2k \end{pmatrix}
> $$
> - $k \neq 0$: tre pivot, $\operatorname{rg}(A) = 3$, **generano $\mathbb{R}^3$**.
> - $k = 0$: due pivot, $\operatorname{rg}(A) = 2 < 3$, **non generano**.
>
> **Lo Span per $k = 0$.** I vettori sono $(1, 1, 0)$, $(0, 1, 0)$, $(1, 0, 0)$: hanno tutti terza componente $0$. Con il metodo: le operazioni $E_{21}(-1)$ ed $E_{32}(0)$ portano $(b_1, b_2, b_3)$ in $(b_1, b_2 - b_1, b_3)$, e la riga nulla chiede $b_3 = 0$. Lo Span è il piano $xy$, $\{z = 0\}$.
>
> **Verifica** per $k = 1$ (figura del criterio): $(0, 0, 1) = a(1, 1, 0) + b(0, 1, 1) + c(1, 0, 1)$ chiede $a + c = 0$, $a + b = 0$, $b + c = 1$. Dalle prime due $c = -a$ e $b = -a$; nella terza $-a - a = 1$, quindi $a = -\frac{1}{2}$ e $b = c = \frac{1}{2}$. Controllo: $-\frac{1}{2}(1, 1, 0) + \frac{1}{2}(0, 1, 1) + \frac{1}{2}(1, 0, 1) = \left(-\frac12 + 0 + \frac12,\ -\frac12 + \frac12 + 0,\ 0 + \frac12 + \frac12\right) = (0, 0, 1)$. Anche $\vec{e}_3$ è raggiunto; raddoppiando i coefficienti, $(0, 0, 2) = -\vec{v}_1 + \vec{v}_2 + \vec{v}_3$, che è il percorso disegnato in figura.

**Esercizio 4.** Siano $\vec{v}_1 = (1, 2, -1)$, $\vec{v}_2 = (2, 1, 1)$ e $\vec{w}_k = (1, k, 2)$. Per quali $k$ si ha $\vec{w}_k \in \mathrm{Span}(\vec{v}_1, \vec{v}_2)$? Per quei $k$ scrivere $\vec{w}_k$ come combinazione di $\vec{v}_1$ e $\vec{v}_2$.

> [!example]- Soluzione
> **Tipo**: appartenenza a uno Span con parametro nel vettore, cioè compatibilità di $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{w}_k]$. Il parametro sta solo nell'ultima colonna, quindi $\operatorname{rg}(A)$ è fisso.
> $$
> \left[\begin{array}{cc|c} 1 & 2 & 1 \\ 2 & 1 & k \\ -1 & 1 & 2 \end{array}\right]
> $$
> **$E_{21}(-2)$**, $R_2 \to R_2 - 2R_1$: $(2 - 2,\ 1 - 4 \mid k - 2) = (0, -3 \mid k - 2)$.
>
> **$E_{31}(1)$**, $R_3 \to R_3 + R_1$: $(-1 + 1,\ 1 + 2 \mid 2 + 1) = (0, 3 \mid 3)$.
>
> **$E_{32}(1)$**, $R_3 \to R_3 + R_2$: $(0,\ 3 - 3 \mid 3 + k - 2) = (0, 0 \mid k + 1)$.
> $$
> \left[\begin{array}{cc|c} 1 & 2 & 1 \\ 0 & -3 & k - 2 \\ 0 & 0 & k + 1 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 2$ sempre. La completa ha rango $2$ se $k + 1 = 0$, altrimenti $3$. Per Rouché-Capelli: **$\vec{w}_k \in \mathrm{Span}$ se e solo se $k = -1$.**
>
> **Coefficienti per $k = -1$.** Seconda riga: $-3\lambda_2 = -1 - 2 = -3$, quindi $\lambda_2 = 1$. Prima riga: $\lambda_1 + 2 \cdot 1 = 1$, quindi $\lambda_1 = -1$. $\vec{w}_{-1} = -\vec{v}_1 + \vec{v}_2$.
>
> **Verifica**: $-(1, 2, -1) + (2, 1, 1) = (-1 + 2,\ -2 + 1,\ 1 + 1) = (1, -1, 2) = \vec{w}_{-1}$. Geometricamente: $\mathrm{Span}(\vec{v}_1, \vec{v}_2)$ è un piano per l'origine, e al variare di $k$ il punto $(1, k, 2)$ scorre su una retta parallela all'asse $y$ che buca quel piano una volta sola.

**Esercizio 5** (livello del parziale). Sia
$$
B_k = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 3 & 1 & k \end{pmatrix}, \qquad k \in \mathbb{R}
$$

- a) Per quali $k$ le colonne di $B_k$ generano $\mathbb{R}^3$, cioè $C(B_k) = \mathbb{R}^3$?
- b) Per il valore escluso, trovare un'equazione cartesiana di $C(B_k)$ e un vettore di $\mathbb{R}^3$ che non ci sta.
- c) Per lo stesso valore, il sistema $B_k\vec{x} = (1, 1, 1)$ è compatibile?

> [!example]- Soluzione
> **Tipo**: spazio delle colonne. Le colonne sono quattro vettori di $\mathbb{R}^3$, e $C(B_k) = \mathbb{R}^3$ se e solo se $\operatorname{rg}(B_k) = 3$ (criterio della prof).
>
> **a)** Riduco $[B_k \mid \vec{b}]$ con $\vec{b} = (b_1, b_2, b_3)$, così ho subito anche il punto b).
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 0 & 1 & b_1 \\ 0 & 1 & 1 & 1 & b_2 \\ 1 & 3 & 1 & k & b_3 \end{array}\right]
> $$
> **$E_{31}(-1)$**, $R_3 \to R_3 - R_1$: $(1 - 1,\ 3 - 2,\ 1 - 0,\ k - 1 \mid b_3 - b_1) = (0, 1, 1, k - 1 \mid b_3 - b_1)$.
>
> **$E_{32}(-1)$**, $R_3 \to R_3 - R_2$: $(0,\ 1 - 1,\ 1 - 1,\ k - 1 - 1 \mid b_3 - b_1 - b_2) = (0, 0, 0, k - 2 \mid b_3 - b_1 - b_2)$.
> $$
> \left[\begin{array}{cccc|c} 1 & 2 & 0 & 1 & b_1 \\ 0 & 1 & 1 & 1 & b_2 \\ 0 & 0 & 0 & k - 2 & b_3 - b_1 - b_2 \end{array}\right]
> $$
> - $k \neq 2$: terzo pivot $k - 2$ in colonna 4, $\operatorname{rg}(B_k) = 3$, **le colonne generano $\mathbb{R}^3$**.
> - $k = 2$: $\operatorname{rg}(B_2) = 2$, non generano.
>
> **b)** Per $k = 2$ la terza riga è $(0, 0, 0, 0 \mid b_3 - b_1 - b_2)$: compatibile se e solo se $b_3 - b_1 - b_2 = 0$. Quindi
> $$
> C(B_2) = \{(x, y, z) \in \mathbb{R}^3 : z = x + y\}
> $$
> un piano per l'origine. Verifica sulle colonne: $(1, 0, 1)$: $1 = 1 + 0$; $(2, 1, 3)$: $3 = 2 + 1$; $(0, 1, 1)$: $1 = 0 + 1$; $(1, 1, 2)$: $2 = 1 + 1$. Un vettore fuori: $(0, 0, 1)$, perché $1 \neq 0 + 0$.
>
> **c)** $(1, 1, 1)$: $1 \neq 1 + 1 = 2$, quindi $(1, 1, 1) \notin C(B_2)$ e il sistema è **incompatibile**. È il legame “$A\vec{x} = \vec{b}$ compatibile se e solo se $\vec{b} \in C(A)$".

**Esercizio 6** (livello del 30). Siano $\vec{v}_1 = (1, 1, k)$, $\vec{v}_2 = (1, k, 1)$, $\vec{v}_3 = (k, 1, 1)$, con $k \in \mathbb{R}$.
- a) Per quali $k$ generano $\mathbb{R}^3$?
- b) Per ogni valore escluso, scrivere le equazioni cartesiane dello Span e dire che cosa è geometricamente.
- c) Per $k = -2$, il vettore $(1, -1, 0)$ sta nello Span? Se sì, scriverlo come combinazione; i coefficienti sono unici? E $(1, 2, 3)$?

> [!tip]- Indizio
> Il parametro sta su tutte e tre le righe: metti in alto la riga senza $k$ come pivot e riduci $[A \mid \vec{b}]$ con $\vec{b}$ in lettere, così i punti a) e b) escono dalla stessa riduzione. Fattorizza l'ultimo pivot.

> [!example]- Soluzione
> **Tipo**: generatori con parametro più "che cosa generano". Tre vettori in $\mathbb{R}^3$: serve $\operatorname{rg}(A)$ al variare di $k$, e per i valori critici le righe nulle della completa.
> $$
> \left[A \mid \vec{b}\right] = \left[\begin{array}{ccc|c} 1 & 1 & k & b_1 \\ 1 & k & 1 & b_2 \\ k & 1 & 1 & b_3 \end{array}\right]
> $$
> Il pivot in alto a sinistra è $1$ e non dipende da $k$.
> - $E_{21}(-1)$: $R_2 - R_1 = (1 - 1,\ k - 1,\ 1 - k \mid b_2 - b_1) = (0,\ k - 1,\ 1 - k \mid b_2 - b_1)$;
> - $E_{31}(-k)$: $R_3 - kR_1 = (k - k,\ 1 - k,\ 1 - k^2 \mid b_3 - kb_1) = (0,\ 1 - k,\ 1 - k^2 \mid b_3 - kb_1)$.
>
> Per annullare il $1 - k$ in colonna 2 non divido per $k - 1$: osservo che $1 - k = -(k - 1)$, quindi basta **sommare** la riga 2, un'operazione lecita per ogni $k$.
> - $E_{32}(1)$: $R_3 + R_2 = (0,\ 1 - k + k - 1,\ 1 - k^2 + 1 - k \mid b_3 - kb_1 + b_2 - b_1) = (0,\ 0,\ 2 - k - k^2 \mid b_3 + b_2 - (k + 1)b_1)$.
>
> Fattorizzo: $2 - k - k^2 = -(k^2 + k - 2) = -(k + 2)(k - 1)$ (due numeri con prodotto $-2$ e somma $1$: $2$ e $-1$).
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & k & b_1 \\ 0 & k - 1 & 1 - k & b_2 - b_1 \\ 0 & 0 & -(k + 2)(k - 1) & b_3 + b_2 - (k + 1)b_1 \end{array}\right]
> $$
> **a)** I pivot con il parametro sono $k - 1$ e $-(k + 2)(k - 1)$: si annullano per $k = 1$ e $k = -2$.
> - $k \neq 1, -2$: tre pivot, $\operatorname{rg}(A) = 3$, **generano $\mathbb{R}^3$**.
> - $k = 1$: sostituisco nella matrice a scalini. Seconda riga $(0, 0, 0 \mid b_2 - b_1)$, terza $(0, 0, 0 \mid b_3 + b_2 - 2b_1)$. Un pivot: $\operatorname{rg}(A) = 1$, non generano. (Infatti per $k = 1$ i tre vettori sono tutti $(1, 1, 1)$.)
> - $k = -2$: seconda riga $(0, -3, 3 \mid b_2 - b_1)$, terza $(0, 0, 0 \mid b_3 + b_2 + b_1)$. Due pivot: $\operatorname{rg}(A) = 2$, non generano.
>
> **b)** Le righe nulle a sinistra danno le equazioni.
> - $k = 1$: $b_2 - b_1 = 0$ e $b_3 + b_2 - 2b_1 = 0$. Dalla prima $b_2 = b_1$; nella seconda $b_3 + b_1 - 2b_1 = 0$, cioè $b_3 = b_1$. Lo Span è $\{x = y = z\}$, cioè $\{x - y = 0,\ y - z = 0\}$: la **retta** per l'origine di direzione $(1, 1, 1)$. Due equazioni, come previsto da $3 - 1 = 2$.
> - $k = -2$: $b_1 + b_2 + b_3 = 0$. Lo Span è il **piano** $x + y + z = 0$. Una equazione, $3 - 2 = 1$. Controllo: $(1, 1, -2)$, $(1, -2, 1)$, $(-2, 1, 1)$ hanno tutti somma delle componenti $0$.
>
> **c)** $(1, -1, 0)$: $1 - 1 + 0 = 0$, **sta nello Span**. Per i coefficienti risolvo il sistema a scalini con $k = -2$ e $\vec{b} = (1, -1, 0)$:
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & -2 & 1 \\ 0 & -3 & 3 & -2 \end{array}\right] \qquad b_2 - b_1 = -1 - 1 = -2
> $$
> La colonna 3 non ha pivot: $\lambda_3 = t$ libero. Seconda riga: $-3\lambda_2 + 3t = -2$, quindi $\lambda_2 = t + \frac23$. Prima riga: $\lambda_1 = 1 - \lambda_2 + 2t = 1 - t - \frac23 + 2t = \frac13 + t$.
>
> Con $t = 0$: $(1, -1, 0) = \frac13\vec{v}_1 + \frac23\vec{v}_2$. Verifica: $\frac13(1, 1, -2) + \frac23(1, -2, 1) = \left(\frac13 + \frac23,\ \frac13 - \frac43,\ -\frac23 + \frac23\right) = (1, -1, 0)$.
>
> I coefficienti **non sono unici**: ogni $t$ va bene (rango $2 < 3$ incognite). Per esempio $t = 1$ dà $\frac43\vec{v}_1 + \frac53\vec{v}_2 + \vec{v}_3$.
>
> $(1, 2, 3)$: $1 + 2 + 3 = 6 \neq 0$, **non sta nello Span** per $k = -2$.

**Esercizio 7** (livello del 30, teoria). Siano $\vec{v}_1, \ldots, \vec{v}_k, \vec{w}$ vettori di uno spazio vettoriale $V$.

- a) Dimostrare che se $\vec{w} \in \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$, allora $\mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k, \vec{w}) = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_k)$.
- b) Dedurre che, nel secondo esempio della prof, $\mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4) = \mathrm{Span}(\vec{v}_1, \vec{v}_2)$.
- c) Perché tre vettori di $\mathbb{R}^4$ non possono mai generare $\mathbb{R}^4$?

> [!example]- Soluzione
> **a)** Due inclusioni.
> - ($\supseteq$) Una combinazione $\lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k$ è anche una combinazione di $\vec{v}_1, \ldots, \vec{v}_k, \vec{w}$, con coefficiente $0$ su $\vec{w}$.
> - ($\subseteq$) Per ipotesi $\vec{w} = c_1\vec{v}_1 + \cdots + c_k\vec{v}_k$. Un elemento del primo Span è
> $$
> \lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k + \mu\vec{w} = \lambda_1\vec{v}_1 + \cdots + \lambda_k\vec{v}_k + \mu(c_1\vec{v}_1 + \cdots + c_k\vec{v}_k) \qquad \text{sostituisco } \vec{w}
> $$
> $$
> = (\lambda_1 + \mu c_1)\vec{v}_1 + \cdots + (\lambda_k + \mu c_k)\vec{v}_k \qquad \text{distribuisco con la (8) e la (5), raccolgo con la (7)}
> $$
> È una combinazione dei soli $\vec{v}_i$. $\square$
>
> **b)** $\vec{v}_3 = \vec{v}_1 + \vec{v}_2$: $(1, 0, 2) + (-1, 1, 0) = (0, 1, 2)$. $\vec{v}_4 = \vec{v}_1 - \vec{v}_2$: $(1, 0, 2) - (-1, 1, 0) = (2, -1, 2)$. Per a) tolgo prima $\vec{v}_4$ (sta in $\mathrm{Span}(\vec{v}_1, \vec{v}_2) \subseteq \mathrm{Span}(\vec{v}_1, \vec{v}_2, \vec{v}_3)$), poi $\vec{v}_3$. Resta $\mathrm{Span}(\vec{v}_1, \vec{v}_2)$: il piano $2x + 2y - z = 0$, coerente con il conto fatto sopra.
>
> **c)** La matrice $[\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3]$ è $4 \times 3$: ha al massimo un pivot per colonna, quindi rango al massimo $3 < 4$. Per il criterio della prof non generano $\mathbb{R}^4$. In generale servono almeno $n$ vettori per generare $\mathbb{R}^n$.

**Esercizio 8** (vero o falso, con motivazione).
- a) Quattro vettori di $\mathbb{R}^3$ generano sempre $\mathbb{R}^3$.
- b) Se $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ genera $\mathbb{R}^3$, anche $\{\vec{v}_1, \vec{v}_2, \vec{v}_3, \vec{v}_4\}$ genera $\mathbb{R}^3$, qualunque sia $\vec{v}_4 \in \mathbb{R}^3$.
- c) Se $A$ è $3 \times 5$ con $\operatorname{rg}(A) = 3$, il sistema $A\vec{x} = \vec{b}$ è compatibile per ogni $\vec{b} \in \mathbb{R}^3$.
- d) $\mathrm{Span}(\vec{v}, \vec{w}) = \mathrm{Span}(\vec{v}, \vec{v} + \vec{w})$ per ogni $\vec{v}, \vec{w}$.
- e) $R(A)$ e $C(A)$ stanno sempre nello stesso $\mathbb{R}^n$.

> [!example]- Soluzione
> **Come lo riconosco.** Domande di teoria: ognuna si decide con una definizione o con il criterio, e un "falso" va motivato con un controesempio con numeri.
>
> **a)** **Falso**. Controesempio: i quattro vettori della prof a p. 8 hanno rango $2$. Il numero di vettori dà solo la condizione necessaria $k \geq n$.
>
> **b)** **Vero**. Ogni $\vec{b}$ si scrive $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3$, e quindi anche $\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 + 0 \cdot \vec{v}_4$.
>
> **c)** **Vero**. Le colonne di $A$ sono $5$ vettori di $\mathbb{R}^3$ con rango $3 = n$: per il criterio generano $\mathbb{R}^3$, cioè $C(A) = \mathbb{R}^3$, e $A\vec{x} = \vec{b}$ è compatibile se e solo se $\vec{b} \in C(A)$.
>
> **d)** **Vero**. $\vec{v} + \vec{w} \in \mathrm{Span}(\vec{v}, \vec{w})$, quindi $\mathrm{Span}(\vec{v}, \vec{v} + \vec{w}) \subseteq \mathrm{Span}(\vec{v}, \vec{w})$. Al contrario $\vec{w} = (\vec{v} + \vec{w}) - \vec{v} \in \mathrm{Span}(\vec{v}, \vec{v} + \vec{w})$, quindi vale anche l'altra inclusione. (È l'esercizio 7 applicato due volte.)
>
> **e)** **Falso** se $A$ non è quadrata: per $A$ $2 \times 3$, $R(A) \subseteq \mathbb{R}^3$ e $C(A) \subseteq \mathbb{R}^2$ (esempio 1 delle definizioni).

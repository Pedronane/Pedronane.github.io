---
title: Spazi vettoriali (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-13
lezioni: []
ordine: 11
---

Esercizi tipo esame di [Spazi vettoriali](/uni/gal/spazi-vettoriali/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30.

**Esercizio 1** (facile). Dati $\vec{v}_1 = (1, 0, 1)$ e $\vec{v}_2 = (0, 1, 1)$ in $\mathbb{R}^3$:

- a) calcolare $3\vec{v}_1 - 2\vec{v}_2$;
- b) dire se $(1, 2, 3)$ è combinazione lineare di $\vec{v}_1$ e $\vec{v}_2$;
- c) dire se $(1, 1, 1)$ lo è.

> [!example]- Soluzione
> **Come lo riconosco.** Combinazione lineare, prima diretta poi al contrario. Il contrario è un sistema nei coefficienti.
>
> **a)**
> $$
> 3(1, 0, 1) = (3, 0, 3), \qquad -2(0, 1, 1) = (0, -2, -2) \qquad \text{prodotto per scalare}
> $$
> $$
> (3, 0, 3) + (0, -2, -2) = (3 + 0,\ 0 - 2,\ 3 - 2) = (3, -2, 1) \qquad \text{somma}
> $$
>
> **b)** Cerco $\lambda_1, \lambda_2$ con $\lambda_1(1, 0, 1) + \lambda_2(0, 1, 1) = (1, 2, 3)$. A sinistra:
> $$
> \lambda_1(1, 0, 1) + \lambda_2(0, 1, 1) = (\lambda_1,\ \lambda_2,\ \lambda_1 + \lambda_2)
> $$
> Uguaglio componente per componente: $\lambda_1 = 1$, $\lambda_2 = 2$, $\lambda_1 + \lambda_2 = 3$. Le prime due fissano i coefficienti; la terza chiede $1 + 2 = 3$: vera. **Sì**, $(1, 2, 3) = \vec{v}_1 + 2\vec{v}_2$.
>
> **c)** Ora $(\lambda_1, \lambda_2, \lambda_1 + \lambda_2) = (1, 1, 1)$: le prime due danno $\lambda_1 = \lambda_2 = 1$, la terza chiede $1 + 1 = 1$: falsa. **No.**
>
> **Controllo.** b): $(1, 0, 1) + (0, 2, 2) = (1, 2, 3)$. c), con il buon senso: tutte le combinazioni di $\vec{v}_1$ e $\vec{v}_2$ hanno terza componente uguale alla somma delle prime due, cioè stanno sul piano $z = x + y$; $(1, 1, 1)$ ha $1 \neq 1 + 1$.

**Esercizio 2** (della prof, <span class="src">13/10, p. 3</span>). Verificare $(\ast)$ per $n = 2$ e $k = 3$: $\vec{v}_1, \vec{v}_2, \vec{v}_3 \in \mathbb{R}^2$, $\lambda_1, \lambda_2, \lambda_3 \in \mathbb{R}$.

> [!example]- Soluzione
> **Come lo riconosco.** È una verifica "a lettere": si calcolano i due lati con le definizioni e si confrontano componente per componente.
>
> Siano $\vec{v}_1 = (a_1, a_2)$, $\vec{v}_2 = (b_1, b_2)$, $\vec{v}_3 = (c_1, c_2)$.
>
> **Lato sinistro**, con le operazioni di $\mathbb{R}^2$:
> $$
> \lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \lambda_3\vec{v}_3 = (\lambda_1 a_1, \lambda_1 a_2) + (\lambda_2 b_1, \lambda_2 b_2) + (\lambda_3 c_1, \lambda_3 c_2) \qquad \text{prodotto per scalare}
> $$
> $$
> = (\lambda_1 a_1 + \lambda_2 b_1 + \lambda_3 c_1,\ \lambda_1 a_2 + \lambda_2 b_2 + \lambda_3 c_2) \qquad \text{somma}
> $$
> **Lato destro**: $A = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3]$ è $2 \times 3$, $\vec{\lambda}$ è $3 \times 1$, il prodotto esiste ed è $2 \times 1$.
> $$
> A\vec{\lambda} = \begin{pmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{pmatrix}\begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \lambda_3 \end{pmatrix} = \begin{pmatrix} a_1\lambda_1 + b_1\lambda_2 + c_1\lambda_3 \\ a_2\lambda_1 + b_2\lambda_2 + c_2\lambda_3 \end{pmatrix} \qquad \text{righe per colonne}
> $$
> Le due componenti coincidono con quelle del lato sinistro, perché il prodotto di numeri reali è commutativo ($\lambda_1 a_1 = a_1\lambda_1$). $\square$
>
> **Controllo con i numeri**: $\vec{v}_1 = (1, 0)$, $\vec{v}_2 = (2, 1)$, $\vec{v}_3 = (0, 3)$, $\vec{\lambda} = (1, -1, 2)$ danno $(-1, 5)$ da entrambi i lati (esempio 2 della forma matriciale).

**Esercizio 3.** Dire quali dei seguenti sottoinsiemi di $\mathbb{R}^2$ o $\mathbb{R}^3$ sono sottospazi vettoriali, motivando.

- a) $U_1 = \{(x, y, z) \in \mathbb{R}^3 : x + 2y - z = 0\}$
- b) $U_2 = \{(x, y, z) \in \mathbb{R}^3 : x + y = 1\}$
- c) $U_3 = \{(x, y) \in \mathbb{R}^2 : xy = 0\}$
- d) $U_4 = \{(x, y) \in \mathbb{R}^2 : x \geq 0\}$
- e) $U_5 = \{(x, y) \in \mathbb{R}^2 : y = x^2\}$
- f) $U_6 = \{(x, y) \in \mathbb{R}^2 : x^2 + y^2 = 0\}$

> [!example]- Soluzione
> **Come lo riconosco.** "È un sottospazio?" su insiemi dati da condizioni. Per ognuno: primo controllo $\vec{0} \in U$, poi la forma delle condizioni per scegliere fra dimostrazione e controesempio.
>
> **a) Sì.** $\vec{0}$: $0 + 0 - 0 = 0$. Condizione lineare omogenea: dimostro la (C). Siano $(x_1, y_1, z_1), (x_2, y_2, z_2) \in U_1$, cioè
> $$
> x_1 + 2y_1 - z_1 = 0, \qquad x_2 + 2y_2 - z_2 = 0
> $$
> e siano $\lambda_1, \lambda_2 \in \mathbb{R}$. La combinazione è
> $$
> \lambda_1(x_1, y_1, z_1) + \lambda_2(x_2, y_2, z_2) = (\lambda_1 x_1 + \lambda_2 x_2,\ \lambda_1 y_1 + \lambda_2 y_2,\ \lambda_1 z_1 + \lambda_2 z_2)
> $$
> Sostituisco nell'equazione di $U_1$:
> $$
> (\lambda_1 x_1 + \lambda_2 x_2) + 2(\lambda_1 y_1 + \lambda_2 y_2) - (\lambda_1 z_1 + \lambda_2 z_2)
> $$
> $$
> = \lambda_1(x_1 + 2y_1 - z_1) + \lambda_2(x_2 + 2y_2 - z_2) \qquad \text{raccolgo } \lambda_1 \text{ e } \lambda_2
> $$
> $$
> = \lambda_1 \cdot 0 + \lambda_2 \cdot 0 = 0 \qquad \text{ipotesi}
> $$
> La combinazione sta in $U_1$. Più in breve: $U_1 = N\begin{pmatrix} 1 & 2 & -1 \end{pmatrix}$, esempio (3) della prof. È un piano per l'origine.
>
> **b) No.** $\vec{0} = (0, 0, 0)$: $0 + 0 = 0 \neq 1$, quindi $\vec{0} \notin U_2$. È l'esempio (4) della prof: soluzioni di un sistema non omogeneo. È il piano della figura di $\mathbb{R}^3$.
>
> **c) No**, anche se $\vec{0} \in U_3$ ($0 \cdot 0 = 0$). $U_3$ è l'unione dei due assi ($x = 0$ oppure $y = 0$).
> - La (B) vale: se $xy = 0$ allora $(\lambda x)(\lambda y) = \lambda^2 xy = \lambda^2 \cdot 0 = 0$.
> - Cade la (A): $(1, 0) \in U_3$ ($1 \cdot 0 = 0$) e $(0, 1) \in U_3$, ma $(1, 0) + (0, 1) = (1, 1)$ e $1 \cdot 1 = 1 \neq 0$.
>
> Due rette per l'origine insieme non fanno un sottospazio.
>
> **d) No.** $\vec{0} \in U_4$ ($0 \geq 0$), e la somma funziona: se $x_1, x_2 \geq 0$ anche $x_1 + x_2 \geq 0$. Cade la (B) con $\lambda = -1$: $(1, 1) \in U_4$, ma $(-1)(1, 1) = (-1, -1)$ ha $x = -1 < 0$. Un semipiano non è chiuso per il prodotto per scalari negativi.
>
> **e) No.** $\vec{0} \in U_5$ ($0 = 0^2$). Cade la (B) con $\lambda = 2$: $(1, 1) \in U_5$ ($1 = 1^2$), ma $2(1, 1) = (2, 2)$ e $2 \neq 2^2 = 4$. Cade anche la (A): $(1, 1) + (-1, 1) = (0, 2)$, e $2 \neq 0^2$. Una curva che non è una retta non è un sottospazio.
>
> **f) Sì**, e la forma inganna. $x^2 \geq 0$ e $y^2 \geq 0$, quindi $x^2 + y^2 = 0$ solo se $x^2 = 0$ e $y^2 = 0$, cioè $x = y = 0$. Allora $U_6 = \{(0, 0)\}$, il sottospazio nullo (esempio (1) della prof).
>
> **Controllo e regola pratica.** Le condizioni che danno sottospazi sono equazioni lineari **omogenee**. Termini noti, prodotti, quadrati e disuguaglianze di solito rompono qualcosa: il lavoro è trovare cosa, e la f) ricorda che "di solito" non è "sempre".

**Esercizio 4.** Sia $U = \{(x, y, z, w) \in \mathbb{R}^4 : x = 2y,\ z + w = 0\}$.

- a) Dimostrare che $U$ è un sottospazio di $\mathbb{R}^4$.
- b) Mostrare che ogni elemento di $U$ è combinazione lineare di due vettori fissati di $U$, e trovarli.

> [!example]- Soluzione
> **Come lo riconosco.** Due equazioni lineari omogenee: è un nucleo. Per b) si risolve il sistema e si separano le variabili libere.
>
> **a)** Porto tutto a sinistra: $U$ è l'insieme delle soluzioni di
> $$
> \begin{cases} x - 2y = 0 \\ z + w = 0 \end{cases} \qquad \text{cioè } U = N(A), \quad A = \begin{pmatrix} 1 & -2 & 0 & 0 \\ 0 & 0 & 1 & 1 \end{pmatrix}
> $$
> Per l'esempio (3) della prof è un sottospazio. Volendo, la (C) si verifica come nell'esercizio 3a, raccogliendo $\lambda_1$ e $\lambda_2$ in ciascuna equazione.
>
> **b)** $A$ è già ridotta per righe: pivot sulle colonne di $x$ e $z$, variabili libere $y$ e $w$. Dalle equazioni $x = 2y$ e $z = -w$:
> $$
> (x, y, z, w) = (2y,\ y,\ -w,\ w) \qquad \text{sostituisco}
> $$
> $$
> = (2y, y, 0, 0) + (0, 0, -w, w) \qquad \text{separo i termini in } y \text{ e in } w
> $$
> $$
> = y(2, 1, 0, 0) + w(0, 0, -1, 1), \qquad y, w \in \mathbb{R} \qquad \text{raccolgo}
> $$
> Ogni elemento di $U$ è combinazione lineare di $\vec{a} = (2, 1, 0, 0)$ e $\vec{b} = (0, 0, -1, 1)$.
>
> **Controllo.** $\vec{a}, \vec{b} \in U$: per $\vec{a}$, $2 = 2 \cdot 1$ e $0 + 0 = 0$; per $\vec{b}$, $0 = 2 \cdot 0$ e $-1 + 1 = 0$. È il procedimento di [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/) con $\vec{x}_0 = \vec{0}$. In [Generatori](/uni/gal/generatori/) si dirà: $U = \mathrm{Span}(\vec{a}, \vec{b})$.

**Esercizio 5.** In $V = M_2(\mathbb{R})$ dire quali sono sottospazi:

- a) $U_1 = \{A \in M_2(\mathbb{R}) : \operatorname{tr}(A) = 0\}$, dove la **traccia** $\operatorname{tr}(A) = a_{11} + a_{22}$ è la somma degli elementi sulla diagonale;
- b) $U_2 = \{A \in M_2(\mathbb{R}) : A = A^T\}$, le matrici simmetriche;
- c) $U_3 = \{A \in M_2(\mathbb{R}) : A \text{ invertibile}\}$;
- d) $U_4 = \{A \in M_2(\mathbb{R}) : A^2 = A\}$.

> [!example]- Soluzione
> **Come lo riconosco.** Lo stesso schema, ma i vettori sono matrici: il nullo è $O$, i vettori generici sono matrici con elementi in lettere. Le prime due sono esempi della dispensa (Esempio 52, <span class="src">p. 92</span>).
>
> **a) Sì.** $\operatorname{tr}(O) = 0 + 0 = 0$, quindi $O \in U_1$. Siano $A, B \in U_1$, cioè $a_{11} + a_{22} = 0$ e $b_{11} + b_{22} = 0$, e $\lambda, \mu \in \mathbb{R}$. Gli elementi diagonali di $\lambda A + \mu B$ sono $\lambda a_{11} + \mu b_{11}$ e $\lambda a_{22} + \mu b_{22}$ (operazioni elemento per elemento):
> $$
> \operatorname{tr}(\lambda A + \mu B) = (\lambda a_{11} + \mu b_{11}) + (\lambda a_{22} + \mu b_{22})
> $$
> $$
> = \lambda(a_{11} + a_{22}) + \mu(b_{11} + b_{22}) \qquad \text{raccolgo}
> $$
> $$
> = \lambda \cdot 0 + \mu \cdot 0 = 0 \qquad \text{ipotesi}
> $$
> Vale la (C).
>
> **b) Sì.** $O^T = O$. Siano $A, B$ simmetriche, cioè $a_{ij} = a_{ji}$ e $b_{ij} = b_{ji}$ per ogni $i, j$. L'elemento di posto $(i, j)$ di $\lambda A + \mu B$:
> $$
> (\lambda A + \mu B)_{ij} = \lambda a_{ij} + \mu b_{ij} \qquad \text{definizione delle operazioni}
> $$
> $$
> = \lambda a_{ji} + \mu b_{ji} \qquad A, B \text{ simmetriche}
> $$
> $$
> = (\lambda A + \mu B)_{ji} \qquad \text{definizione, letta da destra}
> $$
> Quindi $\lambda A + \mu B$ è simmetrica. Vale la (C).
>
> **c) No.** La matrice nulla non è invertibile ($OB = O \neq I$ per ogni $B$), quindi $O \notin U_3$. Fine al primo controllo. Cade anche la (A), per chi vuole un controesempio in più: $I$ e $-I$ sono invertibili, $I + (-I) = O$ no.
>
> **d) No**, ed è il caso insidioso: $O^2 = O$, quindi $O \in U_4$, e il primo controllo passa. La condizione $A^2 = A$ però è "di secondo grado": provo la (B) con $\lambda = 2$. $I \in U_4$ perché $I^2 = I$. Ma
> $$
> (2I)^2 = (2I)(2I) = 4I^2 = 4I \neq 2I
> $$
> quindi $2I \notin U_4$.
>
> **Controllo.** a) Esempio concreto: $\begin{pmatrix} 1 & 5 \\ 0 & -1 \end{pmatrix}$ e $\begin{pmatrix} 2 & 0 \\ 3 & -2 \end{pmatrix}$ hanno traccia $0$; la somma $\begin{pmatrix} 3 & 5 \\ 3 & -3 \end{pmatrix}$ anche. Non dimostra niente, ma conferma.

**Esercizio 6.** Al variare di $k \in \mathbb{R}$, sia $S_k$ l'insieme delle soluzioni del sistema
$$
\begin{cases} x + y = k - 1 \\ x + ky = k^2 - 1 \end{cases}
$$
Per quali $k$ $S_k$ è un sottospazio di $\mathbb{R}^2$? In quei casi descriverlo.

> [!tip]- Indizio
> Un sottospazio contiene $\vec{0}$. Quando $(0, 0)$ risolve il sistema? Poi controlla che per quei $k$ l'insieme sia davvero un sottospazio, e per gli altri $k$ che cosa è $S_k$.

> [!example]- Soluzione
> **Come lo riconosco.** "Per quali $k$ l'insieme delle soluzioni è un sottospazio (chiuso per somma e prodotto)": è la domanda dell'esercitazione del 12/10. Le soluzioni di $A\vec{x} = \vec{b}$ formano un sottospazio se e solo se $\vec{b} = \vec{0}$ (esercizio 7c).
>
> **Termine noto nullo.** $\vec{b}_k = (k - 1,\ k^2 - 1)$. Serve
> $$
> k - 1 = 0 \quad \text{e} \quad k^2 - 1 = 0
> $$
> La prima dà $k = 1$; per $k = 1$ anche $1^2 - 1 = 0$. Quindi $\vec{b}_k = \vec{0}$ **solo per $k = 1$**.
>
> **$k = 1$.** Il sistema diventa $x + y = 0$ due volte. $E_{21}(-1)$ annulla la seconda riga: rango $1$, $2 - 1 = 1$ parametro. Con $y = t$:
> $$
> S_1 = \{(-t, t) : t \in \mathbb{R}\} = N\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}
> $$
> la retta $y = -x$ per l'origine. È un sottospazio (esempio (3)).
>
> **$k \neq 1$: che cosa è $S_k$.** $E_{21}(-1)$: $R_2 - R_1$ dà
> $$
> (k - 1)y = (k^2 - 1) - (k - 1) = k^2 - k = k(k - 1) \qquad \text{sottraggo e raccolgo } k
> $$
> Divido per $k - 1 \neq 0$: $y = k$. Dalla prima, $x = k - 1 - y = k - 1 - k = -1$. Una sola soluzione:
> $$
> S_k = \{(-1, k)\}
> $$
> Non contiene $\vec{0}$ (la prima componente è $-1$): non è un sottospazio. Nessun $k$ rende il sistema incompatibile, quindi il caso "insieme vuoto" qui non capita; se capitasse, anche quello andrebbe escluso.
>
> **Risposta.** $S_k$ è un sottospazio solo per $k = 1$, ed è la retta $y = -x$.
>
> **Controllo.** $k = 3$: $(-1, 3)$ dà $-1 + 3 = 2 = k - 1$ e $-1 + 9 = 8 = k^2 - 1$. $k = 1$, $t = 2$: $(-2, 2)$ dà $0$ in entrambe.

**Esercizio 7** (livello del 30, teoria). Siano $U$ e $W$ due sottospazi di uno spazio vettoriale $V$.

- a) Dimostrare che $U \cap W$ è un sottospazio di $V$.
- b) Mostrare con un esempio in $\mathbb{R}^2$ che $U \cup W$ in generale **non** è un sottospazio.
- c) Sia $A \in M_{m \times n}(\mathbb{R})$ e sia $S$ l'insieme delle soluzioni di $A\vec{x} = \vec{b}$. Dimostrare che $S$ è un sottospazio di $\mathbb{R}^n$ **se e solo se** $\vec{b} = \vec{0}$.

> [!example]- Soluzione
> **Come lo riconosco.** Teoria "a lettere": si usano solo la definizione con la (C) e la prima osservazione. Nessun conto numerico, tranne il controesempio di b).
>
> **a)** Non vuoto: $\vec{0} \in U$ e $\vec{0} \in W$ (prima osservazione), quindi $\vec{0} \in U \cap W$. Verifico la (C): siano $\vec{u}_1, \vec{u}_2 \in U \cap W$ e $\lambda_1, \lambda_2 \in \mathbb{R}$.
> - $\vec{u}_1, \vec{u}_2 \in U$ e $U$ è un sottospazio: $\lambda_1\vec{u}_1 + \lambda_2\vec{u}_2 \in U$;
> - $\vec{u}_1, \vec{u}_2 \in W$ e $W$ è un sottospazio: $\lambda_1\vec{u}_1 + \lambda_2\vec{u}_2 \in W$;
> - sta in tutti e due: $\lambda_1\vec{u}_1 + \lambda_2\vec{u}_2 \in U \cap W$. $\square$
>
> <figure class="fig"><svg role="img" aria-label="intersezione di due sottospazi" xmlns:xlink="http://www.w3.org/1999/xlink" width="311.917617pt" height="314.928pt" viewBox="0 0 311.917617 314.928" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fc1bceb-figure_1"> <g id="fc1bceb-patch_1"> <path d="M 0 314.928 L 311.917617 314.928 L 311.917617 0 L 0 0 L 0 314.928 z " style="fill: none"/> </g> <g id="fc1bceb-axes_1"> <g id="fc1bceb-patch_2"> <path d="M 100.882165 164.117827 L 28.174162 215.028518 L 207.48746 215.028518 L 280.195464 164.117827 z " clip-path="url(#fc1bceb-p16810f31c6)" style="fill: var(--fig-steel); opacity: 0.16"/> </g> <g id="fc1bceb-patch_3"> <path d="M 110.734828 241.499889 L 184.629799 283.925466 L 184.629799 131.509163 L 110.734828 89.083586 z " clip-path="url(#fc1bceb-p16810f31c6)" style="fill: var(--fig-ink); opacity: 0.1"/> </g> <g id="fc1bceb-line2d_1"> <path d="M 100.882165 164.117827 L 28.174162 215.028518 L 207.48746 215.028518 L 280.195464 164.117827 L 100.882165 164.117827 " clip-path="url(#fc1bceb-p16810f31c6)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="fc1bceb-line2d_2"> <path d="M 110.734828 241.499889 L 184.629799 283.925466 L 184.629799 131.509163 L 110.734828 89.083586 L 110.734828 241.499889 " clip-path="url(#fc1bceb-p16810f31c6)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.2; stroke-linecap: square"/> </g> <g id="fc1bceb-line2d_3"> <path d="M 110.734828 169.77457 L 184.629799 212.200147 " clip-path="url(#fc1bceb-p16810f31c6)" style="fill: none; stroke: var(--fig-accent); stroke-width: 3; stroke-linecap: square"/> </g> <g id="fc1bceb-patch_4"> <path d="M 140.292817 186.744801 Q 107.978149 209.371775 76.762488 231.229216 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 81.186249 230.573214 L 76.762488 231.229216 L 78.891944 227.296606 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fc1bceb-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(62.778177 241.80382) scale(0.13 -0.13)"> <defs> <path id="fc1bceb-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="fc1bceb-patch_5"> <path d="M 140.292817 186.744801 Q 212.018136 186.744801 282.401814 186.744801 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 278.401814 184.744801 L 282.401814 186.744801 L 278.401814 188.744801 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fc1bceb-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(291.245536 190.121754) scale(0.13 -0.13)"> <defs> <path id="fc1bceb-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="fc1bceb-patch_6"> <path d="M 140.292817 186.744801 Q 140.292817 115.019482 140.292817 44.635803 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> <path d="M 138.292817 48.635803 L 140.292817 44.635803 L 142.292817 48.635803 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.2; stroke-linecap: round"/> </g> <g id="fc1bceb-text_3"> <!-- $z$ --> <g style="fill: var(--fig-axis)" transform="translate(136.847817 35.464034) scale(0.13 -0.13)"> <defs> <path id="fc1bceb-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-5d" transform="translate(0 0.5625)"/> </g> </g> <g id="fc1bceb-text_4"> <!-- $U \cap W$ --> <g style="fill: var(--fig-accent)" transform="translate(193.68321 226.784181) scale(0.13 -0.13)"> <defs> <path id="fc1bceb-DejaVuSerif-Italic-38" d="M 1294 4331 L 697 4331 L 763 4666 L 2588 4666 L 2522 4331 L 1925 4331 L 1456 1919 Q 1281 1025 1506 672 Q 1731 319 2447 319 Q 3163 319 3522 672 Q 3881 1025 4056 1919 L 4525 4331 L 3928 4331 L 3994 4666 L 5569 4666 L 5503 4331 L 4909 4331 L 4428 1856 Q 4222 791 3726 350 Q 3231 -91 2250 -91 Q 1269 -91 937 353 Q 606 797 813 1856 L 1294 4331 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-8e3" d="M 1175 2006 L 1175 0 L 675 0 L 675 2006 Q 675 2550 944 3012 Q 1213 3475 1675 3744 Q 2138 4013 2681 4013 Q 3225 4013 3687 3744 Q 4150 3475 4419 3012 Q 4688 2550 4688 2006 L 4688 0 L 4188 0 L 4188 2006 Q 4188 2413 3984 2759 Q 3781 3106 3434 3309 Q 3088 3513 2681 3513 Q 2275 3513 1928 3309 Q 1581 3106 1378 2759 Q 1175 2413 1175 2006 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-Italic-3a" d="M 4425 0 L 3913 0 L 3581 3794 L 1775 0 L 1263 0 L 881 4331 L 419 4331 L 484 4666 L 2188 4666 L 2122 4331 L 1541 4331 L 1844 884 L 3641 4666 L 4147 4666 L 4484 844 L 6141 4331 L 5603 4331 L 5669 4666 L 7013 4666 L 6947 4331 L 6488 4331 L 4425 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-38" transform="translate(0 0.09375)"/> <use xlink:href="#fc1bceb-DejaVuSerif-8e3" transform="translate(103.242188 0.09375)"/> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-3a" transform="translate(205.996094 0.09375)"/> </g> </g> <g id="fc1bceb-text_5"> <!-- $U: z = 0$ --> <g style="fill: var(--fig-steel)" transform="translate(250.102631 153.149716) scale(0.13 -0.13)"> <defs> <path id="fc1bceb-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-38" transform="translate(0 0.78125)"/> <use xlink:href="#fc1bceb-DejaVuSerif-1d" transform="translate(103.242188 0.78125)"/> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-5d" transform="translate(155.898438 0.78125)"/> <use xlink:href="#fc1bceb-DejaVuSerif-20" transform="translate(227.548828 0.78125)"/> <use xlink:href="#fc1bceb-DejaVuSerif-13" transform="translate(330.302734 0.78125)"/> </g> </g> <g id="fc1bceb-text_6"> <!-- $W: x = y$ --> <g style="fill: var(--fig-ink)" transform="translate(41.49792 87.977707) scale(0.13 -0.13)"> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-3a" transform="translate(0 0.09375)"/> <use xlink:href="#fc1bceb-DejaVuSerif-1d" transform="translate(121.748047 0.09375)"/> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-5b" transform="translate(174.404297 0.09375)"/> <use xlink:href="#fc1bceb-DejaVuSerif-20" transform="translate(249.765625 0.09375)"/> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-5c" transform="translate(352.519531 0.09375)"/> </g> </g> <g id="fc1bceb-text_7"> <!-- due piani per $O$: si tagliano in una retta per $O$ --> <g style="fill: var(--fig-ink)" transform="translate(16.458809 14.88) scale(0.12 -0.12)"> <defs> <path id="fc1bceb-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-Italic-32" d="M 2219 244 Q 2984 244 3478 770 Q 3972 1297 4172 2328 Q 4372 3363 4084 3889 Q 3797 4416 3031 4416 Q 2263 4416 1769 3889 Q 1275 3363 1075 2328 Q 875 1297 1162 770 Q 1450 244 2219 244 z M 2153 -91 Q 1678 -91 1311 65 Q 944 222 700 525 Q 419 875 334 1319 Q 250 1763 359 2328 Q 469 2894 725 3339 Q 981 3784 1400 4134 Q 1766 4441 2191 4595 Q 2616 4750 3097 4750 Q 4113 4750 4608 4084 Q 5103 3419 4891 2328 Q 4781 1769 4522 1320 Q 4263 872 3847 525 Q 3481 219 3056 64 Q 2631 -91 2153 -91 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="fc1bceb-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc1bceb-DejaVuSerif-47" transform="translate(0 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-58" transform="translate(64.013672 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-48" transform="translate(128.417969 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(187.597656 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-53" transform="translate(219.384766 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-4c" transform="translate(283.398438 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-44" transform="translate(315.380859 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-51" transform="translate(375 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-4c" transform="translate(439.404297 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(471.386719 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-53" transform="translate(503.173828 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-48" transform="translate(567.1875 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-55" transform="translate(626.367188 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(674.169922 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-32" transform="translate(705.957031 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-1d" transform="translate(787.939453 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(821.630859 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-56" transform="translate(853.417969 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-4c" transform="translate(904.736328 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(936.71875 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-57" transform="translate(968.505859 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-44" transform="translate(1008.691406 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-4a" transform="translate(1068.310547 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-4f" transform="translate(1132.324219 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-4c" transform="translate(1164.306641 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-44" transform="translate(1196.289062 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-51" transform="translate(1255.908203 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-52" transform="translate(1320.3125 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(1380.517578 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-4c" transform="translate(1412.304688 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-51" transform="translate(1444.287109 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(1508.691406 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-58" transform="translate(1540.478516 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-51" transform="translate(1604.882812 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-44" transform="translate(1669.287109 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(1728.90625 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-55" transform="translate(1760.693359 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-48" transform="translate(1808.496094 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-57" transform="translate(1867.675781 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-57" transform="translate(1907.861328 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-44" transform="translate(1948.046875 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(2007.666016 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-53" transform="translate(2039.453125 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-48" transform="translate(2103.466797 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-55" transform="translate(2162.646484 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-3" transform="translate(2210.449219 0.015625)"/> <use xlink:href="#fc1bceb-DejaVuSerif-Italic-32" transform="translate(2242.236328 0.015625)"/> </g> </g> <g id="fc1bceb-line2d_4"> <defs> <path id="fc1bceb-m36ccedcefb" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#fc1bceb-p16810f31c6)"> <use xlink:href="#fc1bceb-m36ccedcefb" x="140.292817" y="186.744801" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> </g> <defs> <clipPath id="fc1bceb-p16810f31c6"> <rect x="5.76" y="20.88" width="300.397617" height="288.288"/> </clipPath> </defs> </svg></figure>
>
> Esempio in figura: in $\mathbb{R}^3$ i piani $U: z = 0$ e $W: x = y$ passano per l'origine e si tagliano nella retta $\{(t, t, 0)\}$, ancora un sottospazio. Con le equazioni: $U \cap W$ è il nucleo del sistema $\begin{cases} z = 0 \\ x - y = 0 \end{cases}$.
>
> **b)** $U = \{(x, 0)\}$ (asse $x$) e $W = \{(0, y)\}$ (asse $y$) sono sottospazi (esempio (5) della prof, la seconda a coordinate scambiate). $U \cup W$ è l'insieme $U_3$ dell'esercizio 3c: $(1, 0) \in U$, $(0, 1) \in W$, ma $(1, 0) + (0, 1) = (1, 1)$ non sta né in $U$ (seconda componente $1 \neq 0$) né in $W$ (prima componente $1 \neq 0$). Cade la (A).
>
> **c)** Due frecce.
> - ($\Leftarrow$) Se $\vec{b} = \vec{0}$, $S = N(A)$, sottospazio per l'esempio (3).
> - ($\Rightarrow$) Se $S$ è un sottospazio, allora $\vec{0} \in S$ (prima osservazione). Quindi $\vec{0}$ è una soluzione: $\vec{b} = A\vec{0} = \vec{0}$.
>
> Il caso che si dimentica: se $A\vec{x} = \vec{b}$ è incompatibile, $S = \emptyset$, e il vuoto **non** è un sottospazio perché la definizione chiede "non vuoto". La freccia ($\Rightarrow$) lo copre già: un sottospazio contiene $\vec{0}$, il vuoto no. È il punto delicato dell'esercizio 3.3 degli [esercizi extra](/uni/gal/esercizi-extra-matrici-svolti/).

**Esercizio 8** (livello del 30, con parametro).

- a) Al variare di $k \in \mathbb{R}$, dire se $U_k = \{(x, y, z) \in \mathbb{R}^3 : x + ky + z = k^2 - k\}$ è un sottospazio di $\mathbb{R}^3$. Per i valori trovati, descriverlo geometricamente.
- b) Al variare di $k \in \mathbb{R}$, dire se $W_k = \{(x, y) \in \mathbb{R}^2 : (k^2 - 1)x^2 + y = k + 1\}$ è un sottospazio di $\mathbb{R}^2$.

> [!tip]- Indizio
> Prima il vettore nullo, che dà le condizioni necessarie su $k$. In b) non basta: per il valore sopravvissuto guarda se resta un termine non lineare.

> [!example]- Soluzione
> **Come lo riconosco.** Sottospazio con parametro: si impone $\vec{0} \in U_k$, poi si studiano solo i $k$ rimasti.
>
> **a)** $\vec{0} = (0, 0, 0)$ sta in $U_k$ se e solo se $0 + k \cdot 0 + 0 = k^2 - k$, cioè
> $$
> k^2 - k = k(k - 1) = 0 \iff k = 0 \text{ oppure } k = 1 \qquad \text{raccolgo } k
> $$
> - $k = 0$: $U_0 = \{x + z = 0\}$, equazione lineare omogenea: un piano per l'origine, sottospazio (nucleo di $\begin{pmatrix} 1 & 0 & 1 \end{pmatrix}$).
> - $k = 1$: $U_1 = \{x + y + z = 0\}$, un piano per l'origine, sottospazio.
> - $k \neq 0, 1$: il termine noto $k^2 - k \neq 0$, quindi $\vec{0} \notin U_k$: non è un sottospazio. È un piano che non passa per l'origine.
>
> **b)** $\vec{0} \in W_k$ se e solo se $(k^2 - 1) \cdot 0 + 0 = k + 1$, cioè $k = -1$. Per ogni $k \neq -1$, $W_k$ non è un sottospazio.
>
> Resta $k = -1$: $k^2 - 1 = 1 - 1 = 0$, il termine con $x^2$ sparisce e l'equazione diventa $y = 0$. $W_{-1}$ è l'asse $x$, un sottospazio (esempio (5) della prof a coordinate scambiate).
>
> Il caso da cui guardarsi è $k = 1$: lì $k^2 - 1 = 0$ e l'equazione è $y = 2$, lineare ma con termine noto: una retta che non passa per l'origine, **non** sottospazio. Se invece il primo controllo avesse lasciato passare un $k$ con $k^2 - 1 \neq 0$, sarebbe rimasta una parabola, come l'esercizio 3e.
>
> **Risposta.** a) $k = 0$ o $k = 1$; b) solo $k = -1$.
>
> **Controllo.** a), $k = 2$: l'equazione è $x + 2y + z = 2$, e $(0, 0, 0)$ dà $0 \neq 2$. b), $k = -1$: $(5, 0) \in W_{-1}$ e $3(5, 0) = (15, 0)$ resta sull'asse.

---
title: Ripassone 3 · Funzioni, elementari, trasformazioni
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: riferimento
stato: completa
data: 2026-11-05
lezioni: []
ordine: 999
---

Parte di [Ripassone finale](/uni/analisi-1/ripassone-finale/). Testi delle slide, annotazioni del prof e provette vere: le righe in corsivo tra parentesi segnalano una fonte corretta o uno svolgimento che non viene dalla fonte.

## Alla lettera dalle slide

### Funzioni (slide 47-61)

> [!abstract] Definizione (funzione) · slide 47
> Siano $A$, $B$ due insiemi non vuoti.
> Una **funzione** $f$ da $A$ a $B$ è una corrispondenza che associa ad ogni elemento di $x \in A$ uno ed un solo elemento di $y \in B$.
> Tale elemento si indica con $f(x)$ e si dice **valore**, o **immagine**, di $f$ in $x$.
> In simboli: $\forall x \in A \quad \exists!\, y \in B \quad \text{tale che } y = f(x)$
> $x$ variabile indipendente, $y = f(x)$ variabile dipendente. $f(x)$ è univocamente determinato da $x$.

> [!abstract] Dominio, codominio, immagine · slide 48
> Notazione: $f : A \to B$
> $A$ **dominio** di $f$. $B$ **codominio** di $f$.
> L'**immagine** di $f$ è l'insieme dei valori della funzione:
> $$
> \mathrm{Im}(f) = f(A) = \{y \in B : \exists\, x \in A \text{ tale che } y = f(x)\} = \{f(x) : x \in A\} \subset B
> $$

> [!abstract] Definizione (funzione iniettiva) · slide 49
> Una funzione $f : A \to B$ si dice **iniettiva** se
> $$
> \forall\, x_1, x_2 \in A \quad f(x_1) = f(x_2) \Rightarrow x_1 = x_2
> $$
> Equivalentemente
> $$
> \forall\, x_1, x_2 \in A \quad x_1 \neq x_2 \Rightarrow f(x_1) \neq f(x_2)
> $$
> Una funzione è iniettiva se «due frecce distinte non puntano mai nello stesso punto» ovvero se «in ogni punto di $B$ arriva al più una freccia».

> [!abstract] Definizione (funzione suriettiva) · slide 50
> Una funzione $f : A \to B$ si dice **suriettiva** se
> $$
> \mathrm{Im}(f) = B
> $$
> Equivalentemente
> $$
> \forall\, y \in B \quad \exists\, x \in A \quad \text{tale che } y = f(x)
> $$
> Una funzione è suriettiva se «in ogni punto di $B$ arriva almeno una freccia».
> Nota: $f : A \to f(A)$ è suriettiva.

> [!abstract] Definizione (funzione biiettiva) · slide 51
> Una funzione $f : A \to B$ si dice **biiettiva** se è sia iniettiva che suriettiva.
> Equivalentemente
> $$
> \forall\, y \in B \quad \exists\ \text{unico}\ x \in A \quad \text{tale che } y = f(x)
> $$
> Una funzione è biiettiva se «in ogni punto di $B$ arriva esattamente una freccia».

> [!abstract] Composizione di due funzioni · slide 52
> Siano date due funzioni $f : A \to B$, $g : C \to D$.
> Se $B \subset C$, possiamo definirne la **composizione**
> $$
> g \circ f : A \to D, \qquad (g \circ f)(x) = g\big(f(x)\big)
> $$
> La composizione $g \circ f$ ha senso se
> $$
> \mathrm{Im}(f) \subset \mathrm{Dom}(g)
> $$

> [!abstract] Funzione inversa · slide 54
> Sia $f : A \to B$ **biiettiva**: ciò significa che
> $$
> \forall\, y \in B \quad \exists\ \text{unico}\ x \in A \quad \text{tale che } y = f(x)
> $$
> In ogni punto $y \in B$ arriva una ed una sola freccia; percorrendo la freccia all'indietro, troviamo $x \in A$ associato a $y = f(x)$.
> Possiamo definire la **funzione inversa** $f^{-1} : B \to A$ che associa ad un punto $y \in B$ l'unico elemento $x = f^{-1}(y) \in A$ tale che $f(x) = y$:
> $$
> \begin{cases} y = f(x) \\ x \in A \end{cases} \iff \begin{cases} x = f^{-1}(y) \\ y \in B \end{cases}
> $$

> [!abstract] Funzione inversa · slide 55
> $$
> f^{-1} \circ f(x) = x \quad \forall x \in A \qquad\qquad f \circ f^{-1}(y) = y \quad \forall y \in B
> $$

> [!abstract] Restrizione di una funzione · slide 56
> Sia $f : A \to B$.
> Dato un sottoinsieme $D \subset A$, la **restrizione** di $f$ a $D$ è definita come la funzione
> $$
> f_{\vert D} : D \to B, \qquad f_{\vert D}(x) = f(x) \ \text{ per ogni } x \in D
> $$
> Con questa operazione, non stiamo facendo altro che cambiare il dominio della funzione, considerando come nuovo dominio un sottoinsieme del dominio di partenza.
> In particolare, questa tecnica può essere utilizzata per rendere iniettiva (e dunque invertibile) una funzione.

> [!abstract] Funzioni reali di variabile reale · slide 57-58
> Consideriamo funzioni $f : D \to \mathbb{R}$ dove $D \subset \mathbb{R}$.
> Il **grafico** è un sottoinsieme del piano cartesiano $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$:
> $$
> \mathrm{graf}(f) := \{(x, y) \in \mathbb{R}^2 : x \in D,\ y = f(x)\}
> $$

> [!abstract] Funzioni iniettive, suriettive, biiettive · slide 59
> Sia $f : \mathbb{R} \to \mathbb{R}$. Ricordiamo che:
> - $f$ è **iniettiva** se $x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$ $\iff$ ogni retta orizzontale interseca il grafico di $f$ al più una volta
> - $f$ è **suriettiva** se per ogni $y \in \mathbb{R}$ esiste $x \in \mathbb{R}$ tale che $y = f(x)$ $\iff$ ogni retta orizzontale interseca il grafico di $f$ almeno una volta
> - $f$ è **biiettiva** se è sia iniettiva che suriettiva $\iff$ ogni retta orizzontale interseca il grafico di $f$ esattamente una volta

> [!abstract] Funzioni limitate · slide 60
> Una funzione $f : D \to \mathbb{R}$, $D \subset \mathbb{R}$, si dice:
> - **limitata superiormente** se esiste $M \in \mathbb{R}$ tale che $f(x) \leq M$ per ogni $x \in D$
> - **limitata inferiormente** se esiste $m \in \mathbb{R}$ tale che $f(x) \geq m$ per ogni $x \in D$
> - **limitata**, se è sia limitata superiormente che inferiormente

> [!abstract] Funzioni simmetriche · slide 61
> Proprietà di simmetria di una funzione $f : \mathbb{R} \to \mathbb{R}$
> - $f$ è **pari** se $f(-x) = f(x)$ per ogni $x \in \mathbb{R}$ (grafico simmetrico rispetto all'asse $y$)
> - $f$ è **dispari** se $f(-x) = -f(x)$ per ogni $x \in \mathbb{R}$ (grafico simmetrico rispetto all'origine)
> - $f$ è **periodica** se esiste $T > 0$ tale che $f(x + T) = f(x)$ per ogni $x \in \mathbb{R}$

> [!abstract] Funzioni monotone · slide 62-63
> Una funzione $f : D \to \mathbb{R}$, $D \subset \mathbb{R}$, si dice:
> - **monotona crescente** se per ogni $x_1, x_2 \in D$: $x_1 < x_2 \implies f(x_1) \leq f(x_2)$
> - **monotona strettamente crescente** se per ogni $x_1, x_2 \in D$: $x_1 < x_2 \implies f(x_1) < f(x_2)$
> - **monotona decrescente** se per ogni $x_1, x_2 \in D$: $x_1 < x_2 \implies f(x_1) \geq f(x_2)$
> - **monotona strettamente decrescente** se per ogni $x_1, x_2 \in D$: $x_1 < x_2 \implies f(x_1) > f(x_2)$
>
> Esempio di funzione NON monotona (slide 63): $x^2$, strettamente decrescente in $(-\infty, 0]$, strettamente crescente in $[0, \infty)$.

> [!abstract] Grafico della funzione inversa · slide 64
> Sia $f : D \to f(D)$ invertibile. Vale la relazione $y = f(x) \iff x = f^{-1}(y)$. Allora
> $$
> (x_0, y_0) \in \mathrm{graf}(f) \iff y_0 = f(x_0) \iff x_0 = f^{-1}(y_0) \iff (y_0, x_0) \in \mathrm{graf}(f^{-1})
> $$
> $\Longrightarrow$ il grafico di $f^{-1}$ si ricava dal grafico di $f$ per simmetria rispetto alla bisettrice $y = x$.
> $\mathrm{graf}(f) = \{(x, y) : y = f(x)\}$, $\mathrm{graf}(f^{-1}) = \{(x, y) : y = f^{-1}(x)\}$

### Funzioni elementari (slide 66-84)

> [!abstract] Funzioni lineari ed affini · slide 66
> Funzioni il cui grafico è una retta (non verticale) nel piano cartesiano.
> - funzioni costanti: $f(x) = c$, $c > 0$ e $c < 0$
> - funzioni lineari: $f(x) = mx$, $m > 0$ (con $m > 1$ e $0 < m < 1$) e $m < 0$ (con $f(x) = -x$)
> - funzioni affini: $f(x) = mx + q$, $q > 0$ e $q < 0$

> [!abstract] Il valore assoluto · slide 67
> $$
> \vert x\vert = \begin{cases} x & \text{se } x \geq 0 \\ -x & \text{se } x < 0 \end{cases}
> $$
> Geometricamente, il valore assoluto rappresenta la misura del segmento che congiunge $x$ all'origine (cioè la distanza dall'origine del punto $x$).

> [!abstract] Proprietà del valore assoluto · slide 68
> Dato $c > 0$, si ha:
> - $\vert x\vert \leq c \iff -c \leq x \leq c$, cioè $x \in [-c, c]$
> - $\vert x\vert < c \iff -c < x < c$, cioè $x \in (-c, c)$
> - $\vert x\vert \geq c \iff x \leq -c$ oppure $x \geq c$, cioè $x \in (-\infty, -c] \cup [c, +\infty)$
> - $\vert x\vert > c \iff x < -c$ oppure $x > c$, cioè $x \in (-\infty, -c) \cup (c, +\infty)$
>
> Disuguaglianza triangolare: $\vert x_1 + x_2\vert \leq \vert x_1\vert + \vert x_2\vert$ per ogni $x_1, x_2 \in \mathbb{R}$.

> [!abstract] Potenze e radici, $x^2$ e $\sqrt{x}$ · slide 70
> $f(x) = x^2$
> - $\mathrm{Dom}(f) = \mathbb{R}$, $\mathrm{Im}(f) = [0, \infty)$
> - funzione pari: $f(-x) = (-x)^2 = x^2 = f(x)$
> - NON iniettiva, NON suriettiva
> - è iniettiva e suriettiva come funzione da $[0, \infty)$ a $[0, \infty)$
>
> $f(x) = \sqrt{x}$ $\rightsquigarrow$ inversa di $x^2$ in $[0, \infty)$
> - $\mathrm{Dom}(f) = [0, \infty)$, $\mathrm{Im}(f) = [0, \infty)$
> - grafico simmetrico di $x^2$ rispetto alla bisettrice $y = x$
>
> N.B.: $\sqrt{x^2} = \vert x\vert$

> [!abstract] Potenze e radici, esponente intero positivo pari · slide 71
> Le potenze a esponente intero positivo pari e le loro inverse hanno lo stesso comportamento qualitativo di $x^2$ e $\sqrt{x}$.
> $$
> f(x) = x^n, \ n \in \mathbb{N} \text{ pari} \qquad\qquad f(x) = \sqrt[n]{x}, \ n \in \mathbb{N} \text{ pari}
> $$

> [!abstract] Potenze e radici, $x^3$ e $\sqrt[3]{x}$ · slide 72
> $f(x) = x^3$
> - $\mathrm{Dom}(f) = \mathbb{R}$, $\mathrm{Im}(f) = \mathbb{R}$
> - funzione dispari: $f(-x) = (-x)^3 = -x^3 = -f(x)$
> - iniettiva, suriettiva $\rightsquigarrow$ invertibile
>
> $f(x) = \sqrt[3]{x}$, inversa di $x^3$
> - $\mathrm{Dom}(f) = \mathbb{R}$, $\mathrm{Im}(f) = \mathbb{R}$
> - grafico simmetrico di $x^3$ rispetto alla bisettrice $y = x$

> [!abstract] Potenze e radici, esponente intero positivo dispari · slide 73
> Le potenze a esponente intero positivo dispari e le loro inverse hanno lo stesso comportamento qualitativo di $x^3$ e $\sqrt[3]{x}$.
> $$
> f(x) = x^n, \ n \in \mathbb{N} \text{ dispari} \qquad\qquad f(x) = \sqrt[n]{x}, \ n \in \mathbb{N} \text{ dispari}
> $$

> [!abstract] Potenze a esponente intero negativo · slide 74
> $$
> f(x) = x^{-n} = \frac{1}{x^n} \qquad n \in \mathbb{N},\ n \geq 1
> $$
> Dominio: $\mathrm{Dom}(f) = \mathbb{R} \setminus \{0\} = \{x \in \mathbb{R} : x \neq 0\}$

> [!abstract] Potenze a esponente reale · slide 75
> Infine, è possibile definire le potenze a esponente reale $\alpha \in \mathbb{R}$
> $$
> f(x) = x^\alpha
> $$
> Dominio:
> $$
> \mathrm{Dom}(f) = \begin{cases} [0, \infty) & \text{se } \alpha \geq 0, \\ (0, \infty) & \text{se } \alpha < 0. \end{cases}
> $$

> [!abstract] Funzioni esponenziali · slide 76
> Esponenziale di base $a \in (0, \infty)$: $f(x) = a^x$
> - $\mathrm{Dom}(f) = \mathbb{R}$
> - $\mathrm{Im}(f) = (0, \infty)$ $\rightsquigarrow$ $a^x > 0$ per ogni $x \in \mathbb{R}$
> - strettamente monotona: crescente se $a > 1$, decrescente se $0 < a < 1$

> [!abstract] Funzioni logaritmiche · slide 77
> L'esponenziale $a^x$ è iniettiva se $a \neq 1$; è suriettiva sull'immagine $(0, \infty)$.
> Quindi $a^x$ è invertibile come funzione da $\mathbb{R}$ a $(0, \infty)$.
> Definiamo il **logaritmo in base $a$** come la sua inversa:
> $$
> f(x) = \log_a x \quad \text{con } a > 0,\ a \neq 1
> $$
> - $\mathrm{Dom}(f) = (0, \infty)$, $\mathrm{Im}(f) = \mathbb{R}$
> - strettamente crescente se $a > 1$
> - strettamente decrescente se $0 < a < 1$
> - $\log_a 1 = 0$
> - Base naturale: $e^x$, $\log x$ con $e = 2{,}71828\ldots$ numero di Nepero

> [!abstract] Funzioni trigonometriche, definizione · slide 78
> Prendiamo un punto $P$ sulla **circonferenza trigonometrica**, cioè la circonferenza di raggio $1$ nel piano cartesiano.
> $\alpha$ = angolo tra il segmento $OP$ e il semiasse positivo delle $x$.
> $(\cos\alpha, \sin\alpha)$ sono definiti come le coordinate cartesiane del punto $P$.
> Nota: l'angolo $\alpha$ è espresso in **radianti**, cioè $\alpha$ è la lunghezza dell'arco di circonferenza $AP$.
> $$
> \tan\alpha = \frac{\sin\alpha}{\cos\alpha}
> $$
> $\alpha = 2\pi \rightsquigarrow 360^\circ$, $\alpha = \frac{\pi}{2} \rightsquigarrow 90^\circ$, $\alpha = \frac{\pi}{6} \rightsquigarrow 30^\circ$

> [!abstract] Funzioni trigonometriche, seno e coseno · slide 79
> $f(x) = \sin x$: $\mathrm{Dom}(f) = \mathbb{R}$, $\mathrm{Im}(f) = [-1, 1]$, **dispari**: $\sin(-x) = -\sin x$
> $f(x) = \cos x$: $\mathrm{Dom}(f) = \mathbb{R}$, $\mathrm{Im}(f) = [-1, 1]$, **pari**: $\cos(-x) = \cos x$

> [!abstract] Funzioni trigonometriche, proprietà · slide 80
> **Periodiche** di periodo $2\pi$: ad es. $\sin(x + 2k\pi) = \sin(x)$, $k \in \mathbb{Z}$
> $\vert\sin x\vert \leq 1$, $\vert\cos x\vert \leq 1$
> **Teorema di Pitagora**: $\sin^2 x + \cos^2 x = 1$
> **Formule di addizione**:
> $$
> \sin(x \pm y) = \sin x \cdot \cos y \pm \cos x \cdot \sin y
> $$
> $$
> \cos(x \pm y) = \cos x \cdot \cos y \mp \sin x \cdot \sin y
> $$
> **Formule di duplicazione**:
> $$
> \sin(2x) = 2\sin x \cdot \cos x
> $$
> $$
> \cos(2x) = \cos^2 x - \sin^2 x = 2\cos^2 x - 1
> $$

> [!abstract] Funzioni trigonometriche, tangente e cotangente · slide 81
> $f(x) = \tan x := \dfrac{\sin x}{\cos x}$
> - definita se $\cos x \neq 0 \rightsquigarrow x \neq \frac{\pi}{2} + k\pi$
> - $\mathrm{Dom}(f) = \mathbb{R} \setminus \left\{\frac{\pi}{2} + k\pi : k \in \mathbb{Z}\right\}$, $\mathrm{Im}(f) = \mathbb{R}$
> - periodica: $\tan(x + k\pi) = \tan x$
>
> $f(x) = \cot x := \dfrac{\cos x}{\sin x}$
> - definita se $\sin x \neq 0 \rightsquigarrow x \neq k\pi$
> - $\mathrm{Dom}(f) = \mathbb{R} \setminus \{k\pi : k \in \mathbb{Z}\}$, $\mathrm{Im}(f) = \mathbb{R}$
> - periodica: $\cot(x + k\pi) = \cot x$

> [!abstract] Funzioni trigonometriche inverse, arcoseno e arcocoseno · slide 82
> Le funzioni trigonometriche non sono iniettive, in quanto periodiche.
> Possiamo considerare opportune restrizioni ad intervalli in cui sono iniettive.
> $f(x) = \arcsin x$: $\sin x$ invertibile da $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \to [-1, 1]$, $\arcsin : [-1, 1] \to \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$
> $f(x) = \arccos x$: $\cos x$ invertibile da $[0, \pi] \to [-1, 1]$, $\arccos : [-1, 1] \to [0, \pi]$

> [!abstract] Funzioni trigonometriche inverse, arcotangente · slide 83
> $f(x) = \arctan x$
> $\tan x$ invertibile da $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right) \to (-\infty, \infty)$
> $\arctan : \mathbb{R} \to \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$

> [!abstract] Funzioni iperboliche · slide 84
> $$
> f(x) = \sinh x := \frac{e^x - e^{-x}}{2} \qquad\qquad f(x) = \cosh x := \frac{e^x + e^{-x}}{2}
> $$
> $$
> \cosh^2 x - \sinh^2 x = 1
> $$

### Trasformazioni elementari (slide 86-92)

> [!abstract] Funzioni definite da più leggi · slide 86
> Le funzioni elementari studiate nella lezione precedente possono essere «combinate» in diversi modi per ottenere funzioni più complesse, con le operazioni di somma, prodotto, composizione...
> Si possono considerare anche funzioni definite a tratti, ovvero suddividendone il dominio in più parti e specificando la legge della funzione in ciascuna parte del dominio. Ad esempio:
> $$
> f(x) = \begin{cases} \dfrac{x}{2} & \text{se } x \leq 0, \\ 1 & \text{se } 0 < x \leq 1, \\ \log x & \text{se } x > 1. \end{cases}
> $$

> [!abstract] Riflessioni · slide 87
> Sia $f : D \to \mathbb{R}$.
> - $-f(x)$: riflessione rispetto all'asse $x$
> - $f(-x)$: riflessione rispetto all'asse $y$

> [!abstract] Valore assoluto, parte positiva, parte negativa · slide 88
> Sia $f : D \to \mathbb{R}$, con $D \subset \mathbb{R}$. Abbiamo le seguenti funzioni (non negative):
> - **valore assoluto** di $f$: $x \mapsto \vert f(x)\vert$
> - **parte positiva** di $f$: $x \mapsto f_+(x) = \begin{cases} f(x) & \text{se } f(x) \geq 0 \\ 0 & \text{se } f(x) < 0 \end{cases}$
> - **parte negativa** di $f$: $x \mapsto f_-(x) = \begin{cases} -f(x) & \text{se } f(x) \leq 0 \\ 0 & \text{se } f(x) > 0 \end{cases}$

> [!abstract] Traslazioni verticali · slide 89
> Sia $f : D \to \mathbb{R}$ e sia $a \in \mathbb{R}$.
> La funzione $f(x) + a$ corrisponde a una **traslazione verticale** del grafico di $f$: verso l'alto se $a > 0$, verso il basso se $a < 0$.

> [!abstract] Traslazioni orizzontali · slide 90
> Sia $f : D \to \mathbb{R}$ e sia $a \in \mathbb{R}$.
> La funzione $f(x + a)$ corrisponde a una **traslazione orizzontale** del grafico di $f$: verso sinistra se $a > 0$, verso destra se $a < 0$.

> [!abstract] Riscalamenti verticali · slide 91
> Sia $f : D \to \mathbb{R}$ e sia $k > 0$.
> La funzione $k \cdot f(x)$ corrisponde a un **riscalamento nella direzione $y$** del grafico di $f$ (ovvero una modulazione in ampiezza): dilatazione se $k > 1$, compressione se $0 < k < 1$.

> [!abstract] Riscalamenti orizzontali · slide 92
> Sia $f : D \to \mathbb{R}$ e sia $k > 0$.
> La funzione $f(k \cdot x)$ corrisponde a un **riscalamento nella direzione $x$** del grafico di $f$ (ovvero una modulazione in frequenza): compressione se $k > 1$, dilatazione se $0 < k < 1$.

## Il prof ha scritto

- slide 47, a mano: «notazione per "unico"» accanto a $\exists!$.
- slide 48, a mano: «nuova notazione» accanto a $f(A)$; «$\mathrm{Im}(f)$ è sempre contenuta nel codominio»; sull'esempio $f(x) = \frac1x$ cancella la $\mathbb{R}$ di partenza e scrive $f : \mathbb{R} \setminus \{0\} \to \mathbb{R}$, con «dominio» sull'insieme di partenza e «codominio» su $\mathbb{R}$, e $\mathrm{Im}(f) = \mathbb{R} \setminus \{0\}$.
- slide 49, a mano: sulla forma equivalente scrive «non($B$) $\Rightarrow$ non($A$)» (dagli appunti).
- slide 50, a mano: accanto alla forma con i quantificatori scrive $B \subseteq \mathrm{Im}(f)$ e «l'altra inclusione vale sempre».
- slide 51, a mano: «o biunivoca».
- slide 52, a mano: «è ben definita»; $C = \mathrm{Dom}(g)$; $B \supseteq \mathrm{Im}(f)$; «$g$ "composto" $f$», «$g$ "dopo" $f$».
- slide 53, a mano: $\mathrm{Im}(f) \subseteq \mathrm{Dom}(g)$ e $\mathrm{Im}(g) \subseteq \mathrm{Dom}(f)$; «non esiste un modo unico»; «la composizione è associativa»; pagina seguente: «la composizione non è commutativa!».
- slide 54, a mano: sotto «unico» scrive «deriva da iniettiva»; sotto «esiste» scrive «esiste almeno un $x$ con quella proprietà perché $f$ è suriettiva».
- slide 55, a mano: «la composizione è l'identità su $A$», $\mathrm{Id}_A : A \to A,\ x \mapsto x$ e $\mathrm{Id}_B : B \to B,\ y \mapsto y$. Pagina seguente: «la funzione inversa di una funzione biiettiva $f : A \to B$ è l'unica funzione $g : B \to A$ t.c. $f \circ g = \mathrm{Id}_B$, $g \circ f = \mathrm{Id}_A$».
- slide 56, a mano: «notazione» su $f_{\vert D}$, «mi legge “$f$ ristretta a $D$"».
- slide 58, a mano: «codominio» e «dominio» sul piano $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$, «notazione: si legge "grafico di $f$"», «variabili dipendenti» sull'asse $y$ e «variabili indipendenti» sull'asse $x$.
- slide 59, a mano: «in almeno un punto» (suriettiva); sulla biiettiva «in esattamente un punto: in al più un punto per iniettività, in almeno un punto per suriettività».
- pagina dopo la slide 59, a mano: «$f$ iniettiva $\iff \forall \ell$ retta orizzontale, $\#(\ell \cap \mathrm{graf}(f)) \leq 1$»; «$\#$ si legge "cardinalità" e indica il numero di elementi di un insieme»; «$f$ non è iniettiva $\iff \exists\, \ell$ retta orizzontale: $\#(\ell \cap \mathrm{graf}(f)) > 1$».
- slide 60, a mano: «$\mathrm{Im}(f)$ è un insieme limitato superiormente», «$\mathrm{Im}(f)$ è limitato inferiormente»; sotto le figure «non inferiormente» e «non superiormente».
- pagine dopo la slide 60, a mano: «come si ottiene il dominio dal grafico», «l'immagine di $f$ è la proiezione del grafico di $f$ sull'asse $y$»; «Quindi: una funzione è limitata superiormente se e solo se il grafico sta sotto una qualche retta orizzontale; una funzione è limitata inferiormente se e solo se il grafico sta sopra una qualche retta orizzontale; una funzione è limitata se e solo se il grafico è contenuto in una striscia delimitata da due rette orizzontali».
- slide 61, a mano: pari «se e solo se il grafico ha simmetria assiale rispetto all'asse $y$»; dispari «se e solo se il grafico ha simmetria centrale rispetto all'origine».
- slide 64, a mano: «iniettiva e suriettiva» accanto a «invertibile» (dagli appunti).
- slide 67, a mano: $\vert 2\vert = 2$, $\vert -3\vert = -(-3) = 3$; «f. definita a tratti».
- slide 68, a mano: «ES. $\vert x\vert < 3 \iff -3 < x < 3$»; «ES. $\vert x\vert \geq \frac12 \iff x \leq -\frac12 \cup x \geq \frac12$».
- slide 70, a mano: $f : [0, +\infty) \to \mathbb{R},\ x \mapsto x^2$; «esempio: $\sqrt{(-1)^2} = \vert -1\vert = 1$».
- slide 71, a mano: $y = x^2$, $y = x^4$, $y = x^6$ «funzioni a U».
- slide 74, a mano: «dom: $x^n \neq 0 \to x \neq 0$».
- slide 75, a mano: «qual è il problema ad avere $x < 0$? Problema 1: $x = -1$, $\alpha = \frac12$: $(-1)^{1/2} = \sqrt{-1} \notin \mathbb{R}$. Problema 2: non valgono p.d.p. (proprietà delle potenze): $\left((-2)^2\right)^{-1/2}$, da una parte $4^{-1/2} = \frac12$, dall'altra $(-2)^{-1} = -\frac12$».
- slide 76, a mano: «$a^0 = 1\ \forall a \neq 0$»; «$\to$ invertibile».
- slide 77, a mano: «$\ell = \log_a x \iff a^\ell = x$».
- slide 78, a mano: «centro $O(0,0)$, raggio $1$ $\to$ $\gamma : (x - 0)^2 + (y - 0)^2 = 1^2$, cioè $x^2 + y^2 = 1$»; «$P(\alpha) = (x_P, y_P) = (\cos\alpha, \sin\alpha)$»; $(1, \tan\alpha)$ sulla retta verticale; «perché? $\sin x : \mathbb{R} \to [-1, 1]$, $\cos x : \mathbb{R} \to [-1, 1]$».
- slide 79, a mano: $\sin x : \left[-\frac\pi2, \frac\pi2\right] \to [-1, 1]$ «restrizione invertibile del seno»; $\cos x : [0, \pi] \to [-1, 1]$ «restrizione invertibile del coseno».
- slide 80, a mano: $x^2 + y^2 = 1$, $\cos^2\alpha + \sin^2\alpha = 1$; «formule parametriche: $t = \tan\frac{x}{2}$, $\sin x = \frac{2t}{1 + t^2}$, $\cos x = \frac{1 - t^2}{1 + t^2}$».
- slide 81, a mano: $\tan : \left(-\frac\pi2, \frac\pi2\right) \to \mathbb{R}$ «restrizione invertibile della tangente».
- slide 88, a mano: $\vert f(x)\vert = \begin{cases} -f(x) & f(x) < 0 \\ f(x) & f(x) \geq 0 \end{cases}$; $f(x) = f_+(x) - f_-(x)$.
- slide 90, a mano: «esempio: $f(0) = 0 \leftrightarrow x = 0$; $f(x - 3) = 0 \leftrightarrow x = 3$; quindi "lo $0$ si è spostato in $3$"; in generale: $f(x_0) = f\big((x_0 - a) + a\big)$, $x_0$ "si sposta" in $x_0 - a$».
- slide 91, a mano: «commento: con $k < 0$ abbiamo anche una riflessione oltre alla compressione/dilatazione».
- slide 92, a mano: «$f(1) = 3$; $h(x) = f(2x) \overset{?}{=} 3$; $f(1) = 3 \to 2x = 1 \to x = \frac12 \to h\!\left(\frac12\right) = 3$»; poi «$g(x) = f\!\left(\frac12 x\right) = 3$; $\frac12 x = 1$; $x = 2$».
- slide 69, a mano: l'esercizio svolto per intero, in «Svolti a lezione».
- esercitazione, esercizi non svolti a lezione: il PDF segna «esercizio non svolto a lezione» sulla disuguaglianza triangolare e «esercizio non completato a lezione» sull'inversa del seno iperbolico; sulla pagina del tutor, esercizio 2.2, «esercizio non svolto a lezione».

## Svolti a lezione

### $f(x) = \frac3x$: iniettiva non suriettiva (ES1, pagina dopo la slide 50)
«ES1 (funzione iniettiva non suriettiva)». $f(x) = \dfrac{3}{x}$, $f : \mathbb{R} \setminus \{0\} \to \mathbb{R}$. Grafico: iperbole.

La retta $y = 0$ non tocca il grafico: $0 \in$ codominio, $0 \notin \mathrm{Im}(f)$.

*(la pagina ha il grafico con le rette orizzontali; il conto $\frac{3}{x_1} = \frac{3}{x_2} \Rightarrow x_1 = x_2$ è dalle note)*

### Iniettiva non suriettiva dal dominio all'immagine (ES2, pagina dopo la slide 50)
«ES2 (funzione iniettiva non suriettiva dal dominio all'immagine): non esiste: se scegliamo come codominio l'immagine $\Rightarrow$ la funzione è suriettiva».

### $f(x) = \vert x\vert$: suriettiva non iniettiva (ES3, pagine dopo la slide 50)
«ES3 (funzione suriettiva ma non iniettiva)». $f(x) = \vert x\vert$, $f : \mathbb{R} \to \mathbb{R}^+ = [0, +\infty)$.

- «$f$ è suriettiva perché $\forall x \in [0, +\infty)$ (codominio) $\exists\, y \in \mathbb{R}$ (dominio) t.c. $f(y) = x$ (ad esempio $y = x$, ma anche $y = -x$)»
- «$f$ NON è iniettiva: $x_1 = 1$, $x_2 = -1$, $x_1 \neq x_2$ MA $f(x_1) = 1 = f(x_2)$»

### $\cos(x^2)$ e $(\cos x)^2$ (slide 53)
$f, g : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$, $g(x) = \cos x$.

$$
g \circ f(x) = g\big(f(x)\big) = \cos(x^2) \qquad f \circ g(x) = f\big(g(x)\big) = (\cos x)^2
$$

«La composizione non è commutativa! Come verificare che $\cos(x^2) \neq (\cos x)^2$? Scegliamo $x$ opportuno.»
- «$x = 0$ non va bene: $\cos(0^2) = (\cos 0)^2 = 1$»
- «$x = \sqrt\pi$: $\cos\big(\sqrt\pi^{\,2}\big) = \cos\pi = -1$»
- «$\neq$ $\big(\cos\sqrt\pi\big)^2 \geq 0$ (perché è il quadrato di qualcosa)»

### $h(x) = \log\left(\sqrt{x^2 + 1}\right)$ come composizione e associatività (slide 53)
Il prof completa i tre spazi della slide con $f_1(x) = x^2 + 1$, $f_2(x) = \sqrt{x}$, $f_3(x) = \log x$, e $h = f_3 \circ f_2 \circ f_1$. Seconda scomposizione scritta a mano: $f_1(x) = x^2$, $f_2(x) = \sqrt{x + 1}$, $f_3(x) = \log x$. «Non esiste un modo unico.»

«Verifichiamo che la composizione è associativa nell'esempio.» $f_1(x) = x^2 + 1$, $f_2(x) = \sqrt{x}$, $f_3(x) = \log x$:

$$
f_3 \circ (f_2 \circ f_1) = f_3\big(\sqrt{x^2 + 1}\big) = \log\big(\sqrt{x^2 + 1}\big)
$$

$$
(f_3 \circ f_2) \circ f_1 = g \circ f_1 = \log\big(\sqrt{x^2 + 1}\big) \qquad \text{con } g(x) = \log\big(\sqrt{x}\big)
$$

*(sulla pagina del prof il primo conto ha un $\sqrt{x^2 + 2}$ al passaggio intermedio, il risultato finale è con $x^2 + 1$)*

### Qual è l'inversa di $f(x) = x^2$? (slide 56, pagine seguenti)
«Qual è l'inversa di $f(x) = x^2$?» $f : \mathbb{R} \to \mathbb{R}$.

«In questo caso la domanda non ha senso perché $f$ NON è iniettiva e quindi non esiste la funzione inversa.»

«$f_{\vert(\mathbb{R}^+ \cup \{0\})} : \mathbb{R}^+ \cup \{0\} \to \mathbb{R}$ è INIETTIVA e quindi è BIIETTIVA se come codominio si considera l'immagine.»

«Ovvero $f_{\vert(\mathbb{R}^+ \cup \{0\})} : \mathbb{R}^+ \cup \{0\} \to \mathbb{R}^+ \cup \{0\}$ è iniettiva e suriettiva e quindi biiettiva e quindi invertibile.»

$$
f^{-1}(x) = \sqrt{x}
$$

$$
f^{-1} \circ f(x) = \sqrt{x^2} = x = \mathrm{Id} \qquad f \circ f^{-1}(x) = \big(\sqrt{x}\big)^2 = x = \mathrm{Id}
$$

### Funzione periodica senza periodo minimo (pagina dopo la slide 61)
«Es: esibire una funzione periodica t.c. $\nexists\ \min\{T > 0 : f(x + T) = f(x)\ \ \forall x \in \mathbb{R}\}$» e «esibirne una non costante».

*(sulla pagina c'è solo il testo; la costante $f(x) = 5$ come risposta al primo punto è dalle note: ogni $T > 0$ è un periodo, quindi il minimo non esiste)*

### $\vert x + 2\vert \leq \vert 2x - 3\vert + 1$ (slide 69)
Esercizio: risolvere la disequazione $\vert x + 2\vert \leq \vert 2x - 3\vert + 1$.

Tabella dei segni a mano, zeri $-2$ e $\frac32$, zone I, II, III: $x + 2$ ha segno $-$ in I e $+$ in II e III; $2x - 3$ ha segno $-$ in I e II e $+$ in III.

$$
S_I \begin{cases} x \leq -2 \\ -x - 2 \leq -2x + 3 + 1 \end{cases} \quad \cup \quad S_2 \begin{cases} -2 < x < \frac32 \\ x + 2 \leq -2x + 3 + 1 \end{cases} \quad \cup \quad S_3 \begin{cases} x \geq \frac32 \\ x + 2 \leq 2x - 3 + 1 \end{cases}
$$

$$
\begin{cases} x \leq -2 \\ x \leq 6 \end{cases} \quad \cup \quad \begin{cases} -2 < x < \frac32 \\ x \leq \frac23 \end{cases} \quad \cup \quad \begin{cases} x \geq \frac32 \\ x \geq 4 \end{cases}
$$

$$
x \leq -2 \quad \cup \quad -2 < x \leq \frac23 \quad \cup \quad x \geq 4
$$

$$
x \leq \frac23 \ \cup\ x \geq 4
$$

### L'inversa del seno iperbolico (pagina a mano dopo la slide 84)
«$\sinh x = \frac{e^x - e^{-x}}{2}$. È dispari»:
$$
\sinh(-x) = \frac{e^{-x} - e^{-(-x)}}{2} = \frac{e^{-x} - e^{x}}{2} = -\frac{e^{x} - e^{-x}}{2} = -\sinh x
$$

«È invertibile: (trova l'inversa) $\sinh^{-1}(x)$» *(esercizio non completato a lezione)*:

$$
y = \frac{e^x - e^{-x}}{2} \ \Rightarrow\ 2y = e^x - \frac{1}{e^x} \ \Rightarrow\ 2y\,e^x = e^{2x} - 1 \ \Rightarrow\ e^{2x} - 2y\,e^x - 1 = 0
$$

«[risolviamo l'eq. di $2^\circ$ grado]»:
$$
e^x = y \pm \sqrt{y^2 + 1} \quad \begin{cases} y + \sqrt{y^2 + 1} & \text{(acc.)} \\ y - \sqrt{y^2 + 1} & \text{(non acc. perché} < 0\text{)} \end{cases}
$$

$$
e^x = y + \sqrt{y^2 + 1} \ \to\ x = \log\left(y + \sqrt{y^2 + 1}\right) \ \to\ \sinh^{-1}(x) = \log\left(x + \sqrt{x^2 + 1}\right)
$$

*(sulla pagina l'ultima riga è scritta ancora con $y$)*

### Catena di trasformazioni: $y = 2\big\vert\vert x - 1\vert - 2\big\vert - 1$ (PDF, dopo la slide 92)
«Trasformazione di grafici. 1) $y = 2\big\vert\vert x - 1\vert - 2\big\vert - 1$»

$$
f_0(x) = \vert x\vert \qquad f_1(x) = f_0(x - 1) = \vert x - 1\vert \qquad f_2(x) = f_1(x) - 2 = \vert x - 1\vert - 2
$$

$$
f_3(x) = \vert f_2(x)\vert = \big\vert\vert x - 1\vert - 2\big\vert \qquad f_4(x) = 2f_3(x) \qquad f_5(x) = f_4(x) - 1 = 2\big\vert\vert x - 1\vert - 2\big\vert - 1
$$

*(dagli appunti: sul quaderno l'ultima costante è $-2$, sul PDF è $-1$)*

## Crocette delle provette

### 2025, domanda 3

Siano $f(x) = \sqrt{x+1}$ e $g(x) = x^2 - 1$. L'espressione di $f \circ g$ è:

- a) $\vert x\vert$
- b) $\sqrt{x^2 - 1}$
- c) $x$
- d) Nessuna delle precedenti

> [!example]- Soluzione
> **a**. $$f \circ g(x) = f(x^2 - 1) = \sqrt{(x^2 - 1) + 1} = \sqrt{x^2} = \vert x\vert$$

### 2024, domanda 3

Siano $f : \mathbb{R} \to \mathbb{R}$ e $g : \mathbb{R} \to \mathbb{R}$ definite come $f(x) = x - x^2$ e $g(y) = y^2 - y$. L'espressione di $g \circ f$ è:

- a) $x - 2x^3 + x^4$
- b) $x - 3x^2 - 4x^3 + x^4$
- c) $-x + 2x^2 - 2x^3 + x^4$
- d) $-x + 2x^3 - x^4$

> [!example]- Soluzione
> **c**. Con $y := x - x^2$:
> $$
> g \circ f(x) = g(f(x)) = g(x - x^2) = (x - x^2)^2 - (x - x^2) = (x^2 + x^4 - 2x^3) - x + x^2 = x^4 - 2x^3 + 2x^2 - x
> $$

### 2024, domanda 8

Siano $A$ e $B$ i domini delle seguenti funzioni

$$
f(x) = \sqrt{\vert x\vert} \quad \text{e} \quad g(x) = \sqrt{\vert x\vert - x^2}
$$

rispettivamente, allora

- a) $A \cap B = (-\infty, -1] \cup [1, +\infty)$
- b) $A \cap B = (-1, 1)$
- c) $A \cap B = [-1, 1]$
- d) $A \times B = \mathbb{R}^2$

> [!example]- Soluzione
> **c**. Il dominio di $f$ è $\mathbb{R}$. Per ottenere il dominio di $g$ dobbiamo risolvere la disequazione $\vert x\vert - x^2 \ge 0$, ovvero $x^2 \le \vert x\vert$. Graficamente otteniamo la soluzione $-1 \le x \le 1$. *(Figura del prof: la parabola $x^2$ e le rette $\vert x\vert$ si intersecano in $x = -1$, $0$, $1$; la parabola sta sotto $\vert x\vert$ tra $-1$ e $1$.)*

### 2023 v1, domanda 6

Si determini l'insieme ottenuto intersecando i domini delle funzioni

$$
f(x) = \arcsin\frac{x - 2}{x + 2}, \quad g(x) = \arccos\frac{x + 1}{x - 1}
$$

- a) $\mathbb{R}$
- b) $[0, \infty) \setminus \{1\}$
- c) $(-\infty, 0] \setminus \{-2\}$
- d) $\{0\}$

> [!example]- Soluzione
> **d**. $\mathrm{Dom}(f)$: $-1 \leq \frac{x - 2}{x + 2} \leq 1$, sistema:
> $f_1$: $\frac{x - 2}{x + 2} \geq -1 \iff \frac{2x}{x + 2} \geq 0$ (tabella dei segni): $x < -2$ oppure $x \geq 0$.
> $f_2$: $\frac{x - 2}{x + 2} \leq 1 \iff \frac{-4}{x + 2} \leq 0$ (tabella dei segni): $x > -2$.
> $\mathrm{Dom}(f) = [0, +\infty)$.
> $\mathrm{Dom}(g)$: $-1 \leq \frac{x + 1}{x - 1} \leq 1$, sistema:
> $g_1$: $\frac{x + 1}{x - 1} \geq -1 \iff \frac{2x}{x - 1} \geq 0$ (tabella dei segni): $x \leq 0$ oppure $x > 1$.
> $g_2$: $\frac{x + 1}{x - 1} \leq 1 \iff \frac{2}{x - 1} \leq 0$ (tabella dei segni): $x < 1$.
> $\mathrm{Dom}(g) = (-\infty, 0]$.
> $$
> \mathrm{Dom}(f) \cap \mathrm{Dom}(g) = \{0\}
> $$

### 2023 v2, domanda 5

Si determini l'insieme ottenuto unendo i domini delle funzioni

$$
f(x) = \arccos\frac{x + 2}{x - 2}, \quad g(x) = \arcsin\frac{x - 1}{x + 1}
$$

- a) $\mathbb{R}$
- b) $[0, \infty) \setminus \{2\}$
- c) $(-\infty, 0] \setminus \{-1\}$
- d) $\{0\}$

> [!example]- Soluzione
> **a**. Stessi passaggi della v1 *(la soluzione scritta a mano usa $\frac{x - 2}{x + 2}$ per $f$ e $\frac{x + 1}{x - 1}$ per $g$, cioè le funzioni della v1: gli insiemi $[0, +\infty)$ e $(-\infty, 0]$ escono scambiati rispetto al testo stampato, l'unione è la stessa)*:
> $\mathrm{Dom}(f)$: $-1 \leq \frac{x - 2}{x + 2} \leq 1$, $f_1$: $\frac{2x}{x + 2} \geq 0$, $f_2$: $\frac{-4}{x + 2} \leq 0$, $\mathrm{Dom}(f) = [0, +\infty)$.
> $\mathrm{Dom}(g)$: $-1 \leq \frac{x + 1}{x - 1} \leq 1$, $g_1$: $\frac{2x}{x - 1} \geq 0$, $g_2$: $\frac{2}{x - 1} \leq 0$, $\mathrm{Dom}(g) = (-\infty, 0]$.
> $$
> \mathrm{Dom}(f) \cup \mathrm{Dom}(g) = [0, +\infty) \cup (-\infty, 0] = (-\infty, +\infty) = \mathbb{R}
> $$
> *(conto mio: per le funzioni stampate $\mathrm{Dom}(f) = (-\infty, 0]$ e $\mathrm{Dom}(g) = [0, +\infty)$, unione $\mathbb{R}$)*

### 2022 A, domanda 2

Date le funzioni

$$
f(x) = \arcsin\frac{x - e}{x + e}, \quad g(x) = \arccos\frac{x + \pi}{x - \pi}
$$

si determini l'insieme ottenuto unendo i domini di $f$ e di $g$

- a) $\mathbb{R}$
- b) $[0, \infty) \setminus \{\pi\}$
- c) $(-\infty, 0] \setminus \{-e\}$
- d) $\mathbb{R} \setminus \{-e, \pi\}$

> [!example]- Soluzione
> **a**. $\mathrm{Dom}(f)$: $-1 \leq \frac{x - e}{x + e} \leq 1$, sistema:
> $$
> \begin{cases} \frac{x - e}{x + e} \leq 1 \\ \frac{x - e}{x + e} \geq -1 \end{cases} \quad \begin{cases} -\frac{2e}{x + e} \leq 0 \\ \frac{2x}{x + e} \geq 0 \end{cases} \quad \begin{cases} \frac{2e}{x + e} \geq 0 \;\; \text{(1)} \\ \frac{2x}{x + e} \geq 0 \;\; \text{(2)} \end{cases}
> $$
> (1) $\frac{2e}{x + e} \geq 0 \iff x + e > 0 \iff x > -e$.
> (2) $\frac{2x}{x + e} \geq 0$ (tabella dei segni): $x < -e \cup x \geq 0$.
> Intersezione di (1) e (2): $x \geq 0$.
> $\mathrm{Dom}(g)$: $-1 \leq \frac{x + \pi}{x - \pi} \leq 1$, sistema:
> $$
> \begin{cases} \frac{x + \pi}{x - \pi} \leq 1 \\ \frac{x + \pi}{x - \pi} \geq -1 \end{cases} \quad \begin{cases} \frac{2\pi}{x - \pi} \leq 0 \;\; \text{(1)} \\ \frac{2x}{x - \pi} \geq 0 \;\; \text{(2)} \end{cases}
> $$
> (1) $\frac{2\pi}{x - \pi} \leq 0 \iff x - \pi < 0 \iff x < \pi$.
> (2) $\frac{2x}{x - \pi} \geq 0$ (tabella dei segni): $x \leq 0$ oppure $x > \pi$.
> Intersezione di (1) e (2): $x \leq 0$.
> $$
> \mathrm{Dom}(f) \cup \mathrm{Dom}(g) = [0, +\infty) \cup (-\infty, 0] = (-\infty, +\infty) = \mathbb{R}
> $$

### 2019, compito 1 domanda 1

La funzione $f : (1, 3) \to \mathbb{R}$ definita da $f(x) = \dfrac{x^2 - 5x + 6}{x - 1}$

- a) è iniettiva
- b) non è limitata superiormente in $(1, 3)$
- c) non è limitata inferiormente in $(1, 3)$
- d) è monotona

> [!example]- Soluzione
> **b**. $f(x) = \dfrac{(x-2)(x-3)}{x-1}$: per $x \to 1^+$ vale $+\infty$. Inoltre $f(2) = 0$ e $f(x) \to 0$ per $x \to 3^-$ con $f < 0$ in $(2, 3)$: non è iniettiva né monotona, ed è limitata inferiormente. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 1 domanda 7

Il valore massimo della funzione $f(x) = 5 - \vert x - 1\vert$ nell'intervallo $[0, 3]$ è:

- a) $6$
- b) $4$
- c) $5$
- d) $3$

> [!example]- Soluzione
> **c**. Il massimo è in $x = 1$. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 2 domanda 6

Il valore minimo della funzione $f(x) = 4 - \vert x + 1\vert$ nell'intervallo $[-2, 1]$ è:

- a) $0$
- b) $3$
- c) $1$
- d) $2$

> [!example]- Soluzione
> **d**. $f(-2) = 3$, $f(1) = 2$, il massimo $4$ è in $x = -1$: il minimo è agli estremi. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 2 domanda 8

La funzione $f : (0, 2) \to \mathbb{R}$ definita da $f(x) = \dfrac{x^2 - x}{x - 2}$

- a) è iniettiva
- b) non è limitata superiormente in $(0, 2)$
- c) non è limitata inferiormente in $(0, 2)$
- d) è monotona

> [!example]- Soluzione
> **c**. Per $x \to 2^-$ il numeratore tende a $2$ e il denominatore a $0^-$: $f \to -\infty$. In $(0, 1)$ $f > 0$ e $f \to 0$ per $x \to 0^+$, $f(1) = 0$: non è iniettiva né monotona, ed è limitata superiormente. *(conto mio, la chiave dà solo la risposta)*

### simulazione, domanda 2

La funzione
$$
f(x) = \begin{cases} 2 - 4x & \text{se } 0 \le x < \tfrac{1}{2} \\ 3 & \text{se } x = \tfrac{1}{2} \\ x - 1 & \text{se } \tfrac{1}{2} < x \le 1 \end{cases}
$$

- a) è iniettiva e strettamente monotona
- b) non è iniettiva ed è monotona
- c) è iniettiva e non è monotona
- d) non è né iniettiva né monotona

> [!example]- Soluzione
> **c**. I valori sono in $(0, 2]$ per $x < \frac{1}{2}$, $3$ per $x = \frac{1}{2}$, in $\left(-\frac{1}{2}, 0\right]$ per $x > \frac{1}{2}$: mai ripetuti, ma $f$ sale da $x < \frac{1}{2}$ a $x = \frac{1}{2}$ e poi scende. *(conto mio, la chiave dà solo la risposta)*

## Esercizi dei fogli e delle esercitazioni

### Esercitazione 2, esercizio 1.1 (tutor)
$f(x) = \arccos x$, $g(x) = \vert x\vert - 1$. Calcolare $f \circ g$ e $g \circ f$ e disegnarne il grafico.

> [!example]- Soluzione
> $f \circ g(x) = f\big(g(x)\big) = \arccos\big(g(x)\big) = \arccos(\vert x\vert - 1)$
>
> $h_0(x) = \arccos x$, $\quad h_1(x) = h_0(x - 1) = \arccos(x - 1)$, $\quad h_2(x) = h_1(\vert x\vert) = \arccos(\vert x\vert - 1)$
>
> Dominio: $-1 \leq \vert x\vert - 1 \leq 1 \iff 0 \leq \vert x\vert \leq 2 \iff x \in [-2, 2]$. Punti: $x = 0$ dà $\arccos(-1) = \pi$; $x = \pm 1$ dà $\arccos 0 = \frac\pi2$; $x = \pm 2$ dà $\arccos 1 = 0$.
>
> $g \circ f(x) = g\big(f(x)\big) = \vert f(x)\vert - 1 = \vert \arccos x\vert - 1$
>
> $h_0(x) = \arccos x$, $\quad h_1(x) = \vert h_0(x)\vert$, $\quad h_2(x) = h_1(x) - 1 = \vert\arccos x\vert - 1$. Poiché $\arccos x \in [0, \pi]$, $\vert\arccos x\vert = \arccos x$.
>
> *(il tutor scrive le catene e i grafici; dominio, punti e l'ultima osservazione sono dalle note)*

### Esercitazione 2, esercizio 1.2 (tutor)
$f(x) = 2\sin\left(1 - \dfrac12 x\right) + 1$

> [!example]- Soluzione
> $f_0(x) = \sin x$
>
> $f_1(x) = f_0\left(\frac12 x\right) = \sin\left(\frac12 x\right)$, con il controllo del tutor $f_1(\pi) = f_0\left(\frac\pi2\right)$.
>
> $f_2(x) = f_1(-x) = \sin\left(-\frac12 x\right)$
>
> $f_3(x) = f_2(x - 2) = \sin\left(-\frac12(x - 2)\right) = \sin\left(1 - \frac12 x\right)$
>
> $f_4(x) = 2f_3(x)$, $\quad f_5(x) = f_4(x) + 1 = 2\sin\left(1 - \frac12 x\right) + 1$
>
> *(il tutor si ferma a $f_3$; $f_4$ e $f_5$ sono dalle note. Controllo: $x = 2$ dà $2\sin 0 + 1 = 1$; $x = 2 - \pi$ dà $2\sin\frac\pi2 + 1 = 3$; periodo $4\pi$)*

### Esercitazione 2, esercizio 1.3 (tutor)
$y = 2\sqrt{\vert x\vert - 1} + 1$

> [!example]- Soluzione
> $\sqrt{x} \to \sqrt{x - 1} \to \sqrt{\vert x\vert - 1} \to 2\sqrt{\vert x\vert - 1} \to 2\sqrt{\vert x\vert - 1} + 1$
>
> Dominio: $\vert x\vert - 1 \geq 0 \iff x \leq -1$ oppure $x \geq 1$. Immagine $[1, +\infty)$, funzione pari. Punti: $x = \pm 1$ dà $1$; $x = \pm 2$ dà $3$; $x = \pm 5$ dà $5$.
>
> *(svolgimento dalle note, la pagina del tutor ha solo il testo)*

### Esercitazione 2, esercizio 1.4 (tutor, segnato «provetta»)
$f(x) = \sqrt{x + 1}$, $\quad g(x) = x^2 - 1$. Calcolare $f \circ g(x)$.

> [!example]- Soluzione
> $$
> f \circ g(x) = f\big(g(x)\big) = \sqrt{g(x) + 1} = \sqrt{x^2 - 1 + 1} = \sqrt{x^2} = \vert x\vert
> $$

### Esercitazione 2, esercizio 1.5 (tutor)
$f(x) = x - x^2$, $\quad g(y) = y^2 - y$. Calcolare $g \circ f(x)$.

> [!example]- Soluzione
> $$
> g \circ f(x) = g\big(f(x)\big) = f^2(x) - f(x) = (x - x^2)^2 - (x - x^2) = x^2 - 2x^3 + x^4 - x + x^2 = x^4 - 2x^3 + 2x^2 - x
> $$

### Esercitazione 2, esercizio 1.6 (tutor)
$$
f(x) = \begin{cases} 2x + 1 & x \leq 1 \\ -x - 2 & x > 1 \end{cases} \qquad g(x) = \begin{cases} x^2 + 1 & x > 0 \\ -x^2 - 1 & x \leq 0 \end{cases}
$$
$f \circ g(x) = {?}$

> [!example]- Soluzione
> $$
> f\big(g(x)\big) = \begin{cases} 2g(x) + 1 & g(x) \leq 1 \\ -g(x) - 2 & g(x) > 1 \end{cases}
> $$
>
> Osservazione del tutor (riquadro «oss.»): $g(x) > 1 \iff x > 0$ e $g(x) \leq 1 \iff x \leq 0$. Allora
> $$
> f\big(g(x)\big) = \begin{cases} 2g(x) + 1 & x \leq 0 \\ -g(x) - 2 & x > 0 \end{cases} = \begin{cases} 2(-x^2 - 1) + 1 & x \leq 0 \\ -(x^2 + 1) - 2 & x > 0 \end{cases} = \begin{cases} -2x^2 - 1 & x \leq 0 \\ -x^2 - 3 & x > 0 \end{cases}
> $$
>
> *(l'ultima uguaglianza è dalle note, il tutor si ferma alla seconda forma)*

### Esercitazione 2, esercizio 2.1 (tutor)
Calcolare l'inversa (e disegnarne il grafico) di $f : \left[\frac12, +\infty\right) \to \mathbb{R}$, definita da $f(x) = x^2 - x + 1$.

> [!example]- Soluzione
> $y = x^2 - x + 1 \ \Rightarrow\ x^2 - x + 1 - y = 0$
>
> $$
> x_{1,2} = \frac{1 \pm \sqrt{1 - 4(1 - y)}}{2} = \frac{1 \pm \sqrt{4y - 3}}{2}
> $$
>
> $x = \dfrac{1 + \sqrt{4y - 3}}{2}$ acc. ($x \geq \frac12$); $\quad x = \dfrac{1 - \sqrt{4y - 3}}{2}$ non acc. ($x < \frac12$).
>
> $$
> f^{-1}(x) = \frac{1 + \sqrt{4x - 3}}{2}
> $$
>
> Intersezione fra $f$ e $f^{-1}$: $f(x) = f^{-1}(x)$, cioè $\begin{cases} y = f(x) \\ y = x \end{cases}$; $\ x^2 - x + 1 = x \to x^2 - 2x + 1 = 0 \to (x - 1)^2 = 0 \to x = 1$.
>
> *(dalle note: il dominio di $f^{-1}$ è $\left[\frac34, +\infty\right)$, perché $f\left(\frac12\right) = \frac34$ e $f$ cresce senza limite, e l'immagine è $\left[\frac12, +\infty\right)$)*

### Esercitazione 2, esercizio 2.2 (tutor, «esercizio non svolto a lezione»)
$f(x) = e^{2x} + e^x$. Calcolare l'inversa.

> [!example]- Soluzione
> $y = e^{2x} + e^x$, osservazione del tutor: $y > 0$.
>
> $e^{2x} + e^x - y = 0$. Posto $t = e^x$: $t^2 + t - y = 0$.
>
> $$
> t_{1,2} = \frac{-1 \pm \sqrt{1 + 4y}}{2}
> $$
>
> $t = \dfrac{-1 + \sqrt{1 + 4y}}{2}$: $e^x = \dfrac{-1 + \sqrt{1 + 4y}}{2} \to x = \log\left(\dfrac{-1 + \sqrt{1 + 4y}}{2}\right)$
>
> $t = \dfrac{-1 - \sqrt{1 + 4y}}{2}$: $e^x = \dfrac{-1 - \sqrt{1 + 4y}}{2}$ non acc.
>
> $$
> f^{-1}(x) = \log\left(\frac{-1 + \sqrt{1 + 4x}}{2}\right)
> $$
>
> *(dalle note: il dominio di $f^{-1}$ è $(0, +\infty)$, l'immagine di $f$; controllo $f(\log 1) = f(0) = 2$ e $f^{-1}(2) = \log\frac{-1 + 3}{2} = 0$)*

### Esercitazione 2, esercizio 2.3 (tutor)
$$
f(x) = \begin{cases} 2x + 1 & x \leq 0 \\ \sqrt{x + 1} & x > 0 \end{cases}
$$
Calcolare l'inversa.

> [!example]- Soluzione
> Primo tratto: $y = 2x + 1 \to 2x = y - 1 \to x = \dfrac{y - 1}{2}$; $\ x \leq 0 \to y - 1 \leq 0 \to y \leq 1$.
>
> Secondo tratto: $y = \sqrt{x + 1}$, $y^2 = x + 1$, $x = y^2 - 1$; $\ \begin{cases} x > 0 \to y^2 - 1 > 0 \\ y \geq 0 \end{cases}$, cioè $\begin{cases} y < -1 \cup y > 1 \\ y \geq 0 \end{cases} \to y > 1$.
>
> $$
> f^{-1}(x) = \begin{cases} \dfrac{x - 1}{2} & x \leq 1 \\ x^2 - 1 & x > 1 \end{cases}
> $$

### Foglio 1, esercizio 2
Rappresentate graficamente nel piano cartesiano le coppie $(x, y) \in \mathbb{R}^2$ soddisfacenti

- a) $y = x^2 + 1$; $\ y = (x - 1)^2$; $\ y = -x^2$; $\ y = (x + 1)^2 - 1$; $\ y = x^2 + 2x - 3$.
- b) $y = x^3 - 1$; $\ y = -x^3$; $\ y = -(x + 1)^3 + 1$.
- c) $y = \sqrt[4]{x + 1}$ per $x \geq -1$; $\ y = -\sqrt{x} - 1$ per $x \geq 0$.
- d) $y = \sqrt[3]{x} - 1$; $\ y = -\sqrt[3]{x + 1} - 1$.
- e) $y = 2^x - 1$; $\ y = -2^{x - 1}$; $\ y = e^{\vert x\vert} + 1$.
- f) $y = 1 - \log x$ per $x > 0$; $\ y = \log_{\frac12} x + 1$; $\ y = \log_2(x + 1)$ per $x > -1$.

> [!example]- Soluzione
> Il foglio non ha lo svolgimento. Mattone, catena e punti di ciascuna:
>
> - a) $x^2 + 1$: $x^2$ in alto di $1$, vertice $(0, 1)$. $\ (x - 1)^2$: a destra di $1$, vertice $(1, 0)$. $\ -x^2$: riflessione rispetto all'asse $x$, vertice $(0, 0)$. $\ (x + 1)^2 - 1$: a sinistra di $1$ e in basso di $1$, vertice $(-1, -1)$, zeri $0$ e $-2$. $\ x^2 + 2x - 3 = (x + 1)^2 - 4$: vertice $(-1, -4)$, zeri $1$ e $-3$.
> - b) $x^3 - 1$: in basso di $1$, passa per $(0, -1)$ e $(1, 0)$. $\ -x^3$: riflessione rispetto all'asse $x$, passa per $(1, -1)$ e $(-1, 1)$. $\ -(x + 1)^3 + 1$: $x^3 \to (x + 1)^3 \to -(x + 1)^3 \to +1$, centro in $(-1, 1)$.
> - c) $\sqrt[4]{x + 1}$: $\sqrt[4]{x}$ a sinistra di $1$, parte da $(-1, 0)$, passa per $(0, 1)$. $\ -\sqrt{x} - 1$: $\sqrt{x} \to -\sqrt{x} \to -1$, parte da $(0, -1)$, passa per $(4, -3)$.
> - d) $\sqrt[3]{x} - 1$: passa per $(0, -1)$, $(1, 0)$, $(8, 1)$. $\ -\sqrt[3]{x + 1} - 1$: a sinistra di $1$, riflessione rispetto all'asse $x$, in basso di $1$, centro in $(-1, -1)$, passa per $(-2, 0)$ e $(0, -2)$.
> - e) $2^x - 1$: asintoto $y = -1$, passa per $(0, 0)$ e $(1, 1)$. $\ -2^{x-1}$: $2^x$ a destra di $1$, poi riflessione rispetto all'asse $x$, passa per $(1, -1)$ e $\left(0, -\frac12\right)$, asintoto $y = 0$. $\ e^{\vert x\vert} + 1$: $e^x \to e^{\vert x\vert} \to +1$, pari, minimo $2$ in $x = 0$.
> - f) $1 - \log x$: $\log x \to -\log x \to +1$, passa per $(1, 1)$, zero in $x = e$. $\ \log_{\frac12} x + 1 = -\log_2 x + 1$: passa per $(1, 1)$, $(2, 0)$, $(4, -1)$. $\ \log_2(x + 1)$: a sinistra di $1$, asintoto $x = -1$, passa per $(0, 0)$ e $(1, 1)$.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

### Esercizi svolti del docente, esercizio 5 (campo di esistenza)
Determinare il campo di esistenza delle seguenti funzioni:

- (i) $\sqrt{\dfrac1x + \dfrac1{x - 1} + \dfrac1{x - 2}}$
- (ii) $\log\left(\left\vert\dfrac{x - 1}{x - 3}\right\vert - 1\right)$
- (iii) $\dfrac{2^{x + 7}}{\sqrt[4]{\sqrt{2x - x^2} - x}}$
- (iv) $\log\left(\sqrt[3]{x^3 + 2} - x + 1\right)$
- (v) $\dfrac{1 - \vert x\vert + 2^{-x}}{\sqrt{4^x - 3 \cdot 2^x + 2}}$
- (vi) $\sqrt{\log(x^2 - 4x + 3) - \log(x - 2) - \log(x + 1)}$

> [!example]- Soluzione
> (i) Affinché la radice quadrata sia calcolabile, dobbiamo imporre $\frac1x + \frac1{x-1} + \frac1{x-2} \geq 0$ ovvero
> $$
> 0 \leq \frac{(x-1)(x-2) + x(x-2) + x(x-1)}{x(x-1)(x-2)} = \frac{3x^2 - 6x + 2}{x(x-1)(x-2)} = \frac{3\left(x - 1 - \frac1{\sqrt3}\right)\left(x - 1 + \frac1{\sqrt3}\right)}{x(x-1)(x-2)}
> $$
> Effettuando uno studio del segno dell'ultima espressione trovata (e facendo attenzione ad escludere i valori $x = 0, 1, 2$ per i quali si annullerebbe il denominatore) si deduce che l'insieme di definizione è
> $$
> \left(0, 1 - \tfrac1{\sqrt3}\right] \cup \left(1, 1 + \tfrac1{\sqrt3}\right] \cup (2, +\infty)
> $$
>
> (ii) Il logaritmo è calcolabile se e solo se l'argomento è strettamente positivo, per cui ci si riconduce a studiare la disequazione
> $$
> \left\vert\frac{x-1}{x-3}\right\vert > 1 \qquad (*)
> $$
> Primo metodo. La $(*)$ equivale a $\dfrac{x-1}{x-3} > 1$ o $\dfrac{x-1}{x-3} < -1$, ovvero $\dfrac{2}{x-3} > 0$ o $\dfrac{2x-4}{x-3} < 0$. Attraverso uno studio del segno dei primi membri di queste due disequazioni, si ottiene $x > 3$ oppure $2 < x < 3$. L'insieme delle soluzioni è $(2, 3) \cup (3, +\infty)$.
>
> Secondo metodo. Dobbiamo escludere il valore $x = 3$ che farebbe annullare il denominatore della frazione. Osserviamo poi che $\left\vert\frac{x-1}{x-3}\right\vert = \frac{\vert x-1\vert}{\vert x-3\vert}$ ed essendo $\vert x-3\vert > 0$ possiamo ottenere una disuguaglianza equivalente alla $(*)$ moltiplicando ambo i membri per $\vert x-3\vert$, da cui si ottiene $\vert x-1\vert > \vert x-3\vert$. Infine, trattandosi di una disuguaglianza tra numeri non-negativi (sono due valori assoluti...), essa è equivalente alla disuguaglianza fra i rispettivi quadrati, cioè a $(x-1)^2 > (x-3)^2$. Sviluppando i quadrati e semplificando si ottiene $x > 2$. Pertanto l'insieme di definizione è $(2, 3) \cup (3, +\infty)$.
>
> (iii) $(0, 1)$; $\quad$ (iv) $(-\infty, +\infty)$; $\quad$ (v) $(-\infty, 0) \cup (1, +\infty)$; $\quad$ (vi) $\emptyset$.
>
> *(il docente dà per (iii)-(vi) solo il risultato; controllati a mano: (iii) serve $2x - x^2 \geq 0$ e $\sqrt{2x - x^2} > x$, cioè $x(1 - x) > 0$; (v) serve $4^x - 3 \cdot 2^x + 2 = (2^x - 1)(2^x - 2) > 0$)*

### Foglio 0, esercizio 4d
Dite quali delle seguenti proposizioni sono vere e quali sono false (motivando la risposta, provando, per esempio, che la negazione è una proposizione vera o falsa):

d) $\forall x, y \in \mathbb{R},\ \big[(x \neq y) \Longrightarrow (x^2 \neq y^2)\big]$

> [!example]- Soluzione
> **Falsa**. La negazione è $\exists\, x, y \in \mathbb{R} : x \neq y \text{ e } x^2 = y^2$, vera con $x = 1$, $y = -1$.
>
> *(svolgimento dalle note, il foglio dà solo il testo)*

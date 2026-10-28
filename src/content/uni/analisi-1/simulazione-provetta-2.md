---
title: Simulazione provetta 2
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: simulazione
stato: completa
data: 2026-10-17
lezioni: []
ordine: 999
durata: 150
---

Seconda simulazione del primo parziale di [Analisi Matematica 1](/uni/analisi-1/) del 6/11, stessa forma della prima ([Simulazione provetta 1](/uni/simulazioni/analisi-1/simulazione-provetta-1/)): 8 crocette e 3 esercizi da 7 punti, totale 33. Un gradino più difficile: un esercizio su funzione, immagine e inversa, una biquadratica in $\mathbb{C}$ con un luogo, e tre limiti che chiedono strumenti diversi (sottosuccessioni, criterio del rapporto, Nepero). Il programma è quello fatto a lezione fino al 14/10; quello esatto del parziale va controllato su Moodle. Esercizi e numeri sono nuovi, i conti sono verificati.

> [!info] Regole
> - **2 ore e 30 minuti**, niente calcolatrice, ammesso il formulario A4 fronte/retro. Fai partire il cronometro e non guardare la correzione prima della fine.
> - **Parte 1**: 8 crocette, una sola risposta giusta. Giusta $+1{,}5$, sbagliata $-0{,}5$, non data $0$. Massimo $12$.
> - **Parte 2**: 3 esercizi con svolgimento completo e giustificato, fino a 7 punti ciascuno. Massimo $21$. Il parziale vero ne ha **2**: questa simulazione ha la forma dello scritto completo, con un esercizio in più.
> - La parte 2 si corregge **solo se** nella parte 1 hai almeno $5$ su $12$.
> - **Mai rispondere a caso**: con 4 opzioni il valore atteso è $\frac14 \cdot 1{,}5 - \frac34 \cdot 0{,}5 = 0$. Rispondi quando hai escluso almeno un'opzione con certezza.

## Testo

### Parte 1 · crocette

### Domanda 1

Quale delle seguenti proposizioni è **vera**?

- a) $\forall x \in \mathbb{R}\ \exists y \in \mathbb{R} : y^2 = x$
- b) $\forall x \in \mathbb{R}\ \exists y \in \mathbb{R} : y < x^2$
- c) $\exists y \in \mathbb{R} : \forall x \in \mathbb{R},\ x < y$
- d) $\exists x \in \mathbb{R} : \forall y \in \mathbb{R},\ x \geq y^2$

### Domanda 2

Sia $A = \left\{\dfrac{n}{n^2 + 4} : n \in \mathbb{N}\right\}$. Allora:

- a) $\max A = \frac15$ e $\min A = 0$
- b) $\sup A = \frac14$ non è un massimo, $\min A = 0$
- c) $\max A = \frac14$ e $\inf A = 0$, che non è un minimo
- d) $\max A = \frac14$ e $\min A = 0$

### Domanda 3

Il grafico di $y = 1 - |x + 2|$ si ottiene da quello di $y = |x|$:

- a) traslando a sinistra di $2$, ribaltando rispetto all'asse $x$, poi traslando in su di $1$
- b) traslando a destra di $2$, ribaltando rispetto all'asse $x$, poi traslando in su di $1$
- c) traslando a sinistra di $2$, ribaltando rispetto all'asse $x$, poi traslando in giù di $1$
- d) traslando a sinistra di $2$, traslando in su di $1$, poi ribaltando rispetto all'asse $x$

### Domanda 4

Quale funzione è strettamente decrescente su $(0, +\infty)$?

- a) $f(x) = x + \dfrac1x$
- b) $f(x) = |x - 1|$
- c) $f(x) = e^{-x^2}$
- d) $f(x) = x^2 - x$

### Domanda 5

L'insieme $\{z \in \mathbb{C} : |z - 2i| = |z + 2|\}$ è:

- a) la retta $y = x$
- b) la retta $y = -x$
- c) la circonferenza di centro $-2 + 2i$ e raggio $2$
- d) l'asse immaginario

### Domanda 6

$(1 - i)^{10}$ vale:

- a) $32$
- b) $-32$
- c) $32i$
- d) $-32i$

### Domanda 7

$\displaystyle\lim_{n \to +\infty} \frac{2^{n+1} + n^4}{2^n + 5}$ vale:

- a) $0$
- b) $1$
- c) $2$
- d) $+\infty$

### Domanda 8

Sia $a_n = (-1)^n + \dfrac1n$, $n \geq 1$. Allora:

- a) $(a_n)$ non ha limite, perché $a_{2k} \to 1$ e $a_{2k+1} \to -1$
- b) $a_n \to 0$, perché $\frac1n \to 0$
- c) $(a_n)$ è illimitata
- d) $a_n \to 1$, perché i termini pari sono positivi e decrescenti

### Parte 2 · esercizi

### Esercizio 1 · 7 punti

Sia $f(x) = \dfrac{3e^x - 1}{e^x + 2}$.

1. Determinare il dominio naturale $D$ di $f$ e la sua immagine $f(D)$. **[3 punti]**
2. Dimostrare che $f$ è iniettiva. **[1,5 punti]**
3. Scrivere l'inversa di $f : D \to f(D)$, con il suo dominio. **[1,5 punti]**
4. Risolvere la disequazione $f(x) > 0$. **[1 punto]**

### Esercizio 2 · 7 punti

1. Risolvere in $\mathbb{C}$ l'equazione $z^4 + 4z^2 + 16 = 0$, scrivendo le soluzioni in forma algebrica. **[4 punti]**
2. Disegnare nel piano di Gauss l'insieme $E = \{z \in \mathbb{C} : |z - 1 - i| < 2,\ \mathrm{Im}(z) \geq 0\}$ e dire quali soluzioni del punto 1 appartengono a $E$. **[3 punti]**

### Esercizio 3 · 7 punti

1. Sia $a_n = \sin\left(\dfrac{n\pi}{2}\right) \cdot \dfrac{n + 1}{n}$, $n \geq 1$. Dimostrare che $(a_n)$ non ammette limite. **[2 punti]**
2. Calcolare $\displaystyle\lim_{n \to +\infty} \frac{n^n}{3^n \cdot n!}$. **[3 punti]**
3. Calcolare $\displaystyle\lim_{n \to +\infty} \left(\frac{n^2 + 1}{n^2 - n}\right)^{n}$. **[2 punti]**

## Correzione

### Parte 1

### Domanda 1

Quale delle seguenti proposizioni è **vera**?

- a) $\forall x \in \mathbb{R}\ \exists y \in \mathbb{R} : y^2 = x$
- b) $\forall x \in \mathbb{R}\ \exists y \in \mathbb{R} : y < x^2$
- c) $\exists y \in \mathbb{R} : \forall x \in \mathbb{R},\ x < y$
- d) $\exists x \in \mathbb{R} : \forall y \in \mathbb{R},\ x \geq y^2$

> [!example]- Soluzione
> **b**. Dato $x$, basta $y = -1$: $-1 < 0 \leq x^2$. Il $y$ può anche non dipendere da $x$, e qui non dipende.
> - a) è falsa: con $x = -1$ nessun reale ha quadrato $-1$.
> - c) dice che $\mathbb{R}$ ha un maggiorante: falso, dato $y$ il numero $x = y + 1$ non sta sotto.
> - d) dice che esiste un $x$ che sta sopra tutti i quadrati: falso, dato $x$ basta $y = |x| + 1$, con $y^2 > |x| \geq x$.

### Domanda 2

Sia $A = \left\{\dfrac{n}{n^2 + 4} : n \in \mathbb{N}\right\}$. Allora:

- a) $\max A = \frac15$ e $\min A = 0$
- b) $\sup A = \frac14$ non è un massimo, $\min A = 0$
- c) $\max A = \frac14$ e $\inf A = 0$, che non è un minimo
- d) $\max A = \frac14$ e $\min A = 0$

> [!example]- Soluzione
> **d**. Primi elementi: $x_0 = 0$, $x_1 = \frac15$, $x_2 = \frac28 = \frac14$, $x_3 = \frac{3}{13}$, $x_4 = \frac15$: sale fino a $n = 2$ e poi scende. Il massimo è $\frac14$: $\frac{n}{n^2 + 4} \leq \frac14 \iff 4n \leq n^2 + 4 \iff (n - 2)^2 \geq 0$, sempre vero, e $\frac14 = x_2 \in A$. Il minimo è $0 = x_0$, perché tutti gli elementi sono $\geq 0$.
> - a) si ferma a $x_1$ senza guardare $x_2$.
> - b) $\frac14 = x_2$ sta in $A$.
> - c) dimentica che $0 \in \mathbb{N}$: senza lo $0$ l'inf sarebbe $0$ non raggiunto.

### Domanda 3

Il grafico di $y = 1 - |x + 2|$ si ottiene da quello di $y = |x|$:

- a) traslando a sinistra di $2$, ribaltando rispetto all'asse $x$, poi traslando in su di $1$
- b) traslando a destra di $2$, ribaltando rispetto all'asse $x$, poi traslando in su di $1$
- c) traslando a sinistra di $2$, ribaltando rispetto all'asse $x$, poi traslando in giù di $1$
- d) traslando a sinistra di $2$, traslando in su di $1$, poi ribaltando rispetto all'asse $x$

> [!example]- Soluzione
> **a**. Si segue l'ordine delle operazioni sulla formula: $|x| \to |x + 2|$ (sostituire $x$ con $x + 2$ sposta a **sinistra** di $2$) $\to -|x + 2|$ (ribalto) $\to 1 - |x + 2|$ (su di $1$). Il vertice va in $(-2, 1)$.
> - b) $|x - 2|$ sposterebbe a destra.
> - c) darebbe $-|x + 2| - 1$.
> - d) l'ordine conta: traslare in su e poi ribaltare dà $-(|x + 2| + 1) = -|x + 2| - 1$, con vertice in $(-2, -1)$.

### Domanda 4

Quale funzione è strettamente decrescente su $(0, +\infty)$?

- a) $f(x) = x + \dfrac1x$
- b) $f(x) = |x - 1|$
- c) $f(x) = e^{-x^2}$
- d) $f(x) = x^2 - x$

> [!example]- Soluzione
> **c**. Per $0 < x_1 < x_2$: $x_1^2 < x_2^2$ (il quadrato è crescente sui positivi), quindi $-x_1^2 > -x_2^2$, e $e^{-x_1^2} > e^{-x_2^2}$ perché l'esponenziale è strettamente crescente. Composizione di una crescente, una decrescente e una crescente: decrescente.
> - a) $f(\frac12) = \frac52$, $f(1) = 2$, $f(2) = \frac52$: scende e poi sale.
> - b) scende fino a $x = 1$ e poi sale: $f(\frac12) = \frac12$, $f(1) = 0$, $f(2) = 1$.
> - d) parabola con vertice in $x = \frac12$: $f(\frac14) = -\frac{3}{16}$, $f(\frac12) = -\frac14$, $f(1) = 0$.

### Domanda 5

L'insieme $\{z \in \mathbb{C} : |z - 2i| = |z + 2|\}$ è:

- a) la retta $y = x$
- b) la retta $y = -x$
- c) la circonferenza di centro $-2 + 2i$ e raggio $2$
- d) l'asse immaginario

> [!example]- Soluzione
> **b**. $|z - 2i|$ è la distanza da $2i = (0, 2)$, $|z + 2| = |z - (-2)|$ la distanza da $-2 = (-2, 0)$. Punti equidistanti da due punti: l'**asse** del segmento. Con $z = x + iy$ ed elevando al quadrato (membri $\geq 0$): $x^2 + (y - 2)^2 = (x + 2)^2 + y^2 \iff -4y + 4 = 4x + 4 \iff y = -x$.
> - a) viene leggendo $|z + 2|$ come distanza da $+2$.
> - c) confonde un'uguaglianza fra due distanze con "distanza da un punto uguale a un numero".
> - d) sarebbe l'asse del segmento fra $-2$ e $2$.
> - *Controllo*: $z = 1 - i$ sta su $y = -x$, e $|1 - 3i| = \sqrt{10} = |3 - i|$.

### Domanda 6

$(1 - i)^{10}$ vale:

- a) $32$
- b) $-32$
- c) $32i$
- d) $-32i$

> [!example]- Soluzione
> **d**. $(1 - i)^2 = 1 - 2i + i^2 = -2i$, quindi $(1 - i)^{10} = (-2i)^5 = (-2)^5 i^5 = -32\, i$ (perché $i^5 = i^4 \cdot i = i$). Con De Moivre: $1 - i = \sqrt2\, e^{-i\frac\pi4}$, $(1 - i)^{10} = 32\, e^{-i\frac{10\pi}{4}} = 32\, e^{-i\frac{5\pi}{2}} = 32\, e^{-i\frac\pi2} = -32i$.
> - c) usa $\mathrm{Arg}(1 - i) = \frac\pi4$ invece di $-\frac\pi4$.
> - a) e b) sbagliano $i^5$ (lo trattano come $\pm 1$).

### Domanda 7

$\displaystyle\lim_{n \to +\infty} \frac{2^{n+1} + n^4}{2^n + 5}$ vale:

- a) $0$
- b) $1$
- c) $2$
- d) $+\infty$

> [!example]- Soluzione
> **c**. Raccolgo chi comanda, $2^n$ sopra e sotto ($n^4 \ll 2^n$ per la gerarchia): $\dfrac{2^n\left(2 + \frac{n^4}{2^n}\right)}{2^n\left(1 + \frac{5}{2^n}\right)} \to \dfrac{2 + 0}{1 + 0} = 2$.
> - b) dimentica che $2^{n+1} = 2 \cdot 2^n$.
> - d) pensa che $n^4$ vinca su $2^n$.
> - a) inverte la gerarchia del tutto.
> - *Controllo*: $n = 30$ dà $\frac{2^{31} + 810\,000}{2^{30} + 5} \approx 2{,}0008$.

### Domanda 8

Sia $a_n = (-1)^n + \dfrac1n$, $n \geq 1$. Allora:

- a) $(a_n)$ non ha limite, perché $a_{2k} \to 1$ e $a_{2k+1} \to -1$
- b) $a_n \to 0$, perché $\frac1n \to 0$
- c) $(a_n)$ è illimitata
- d) $a_n \to 1$, perché i termini pari sono positivi e decrescenti

> [!example]- Soluzione
> **a**. Sui pari $a_{2k} = 1 + \frac{1}{2k} \to 1$, sui dispari $a_{2k+1} = -1 + \frac{1}{2k + 1} \to -1$. Due sottosuccessioni con limiti diversi: per il corollario della slide 26 il limite non esiste.
> - b) dimentica il pezzo $(-1)^n$, che non va a $0$.
> - c) $|a_n| \leq 1 + 1 = 2$: è limitata.
> - d) il limite di una sottosuccessione non è il limite della successione.

### Esercizio 1

> [!example]- Soluzione
> **Risultati.** 1. $D = \mathbb{R}$, $f(D) = \left(-\frac12, 3\right)$. 2. Iniettiva. 3. $f^{-1} : \left(-\frac12, 3\right) \to \mathbb{R}$, $f^{-1}(y) = \log\dfrac{2y + 1}{3 - y}$. 4. $x > -\log 3$.
>
> **Come si riconosce.** Funzione costruita con $e^x$: si sostituisce $t = e^x$, che varia in $(0, +\infty)$, e si lavora con una funzione razionale di $t$. L'immagine si trova risolvendo $f(x) = y$ in $x$: lo stesso conto dà l'inversa (è il metodo della nota sulle funzioni elementari, "inversa di una funzione costruita con $e^x$").
>
> **1. Dominio e immagine.**
> - *Dominio.* L'unica condizione è il denominatore non nullo: $e^x + 2 \neq 0$. Ma $e^x > 0$, quindi $e^x + 2 > 2 > 0$ per ogni $x$. $D = \mathbb{R}$.
> - *Riscrittura.* Con $t = e^x$: $\frac{3t - 1}{t + 2}$. Divido: $3t - 1 = 3(t + 2) - 7$, quindi $f(x) = 3 - \dfrac{7}{e^x + 2}$.
> - *Immagine contenuta in $\left(-\frac12, 3\right)$.* Per ogni $x$: $e^x > 0 \Rightarrow e^x + 2 > 2 \Rightarrow 0 < \frac{1}{e^x + 2} < \frac12$ (reciproci di positivi, il verso gira) $\Rightarrow 0 < \frac{7}{e^x + 2} < \frac72 \Rightarrow -\frac12 < 3 - \frac{7}{e^x + 2} < 3$.
> - *Ogni $y \in \left(-\frac12, 3\right)$ è un valore.* Risolvo $f(x) = y$:
>   - $\frac{3t - 1}{t + 2} = y \iff 3t - 1 = y(t + 2)$ (moltiplico per $t + 2 > 0$);
>   - $\iff 3t - yt = 2y + 1 \iff t(3 - y) = 2y + 1$;
>   - $\iff t = \frac{2y + 1}{3 - y}$ (divido per $3 - y \neq 0$, perché $y < 3$).
>   - Serve $t = e^x > 0$: $\frac{2y + 1}{3 - y} > 0$. Con $y \in \left(-\frac12, 3\right)$ il numeratore è $> 0$ ($y > -\frac12$) e il denominatore è $> 0$ ($y < 3$): la frazione è positiva.
>   - Quindi $x = \log\frac{2y + 1}{3 - y}$ esiste ed è reale, e $f(x) = y$.
> - Le due inclusioni danno $f(D) = \left(-\frac12, 3\right)$. Per $y \leq -\frac12$ o $y \geq 3$ la frazione $\frac{2y + 1}{3 - y}$ è $\leq 0$ o non definita, coerente con la prima inclusione.
>
> **2. Iniettività** (dalla definizione).
> - Siano $x_1, x_2 \in \mathbb{R}$ con $f(x_1) = f(x_2)$.
> - Dalla riscrittura: $3 - \frac{7}{e^{x_1} + 2} = 3 - \frac{7}{e^{x_2} + 2} \Rightarrow \frac{7}{e^{x_1} + 2} = \frac{7}{e^{x_2} + 2}$.
> - Passo ai reciproci e moltiplico per $7$: $e^{x_1} + 2 = e^{x_2} + 2 \Rightarrow e^{x_1} = e^{x_2}$.
> - L'esponenziale è iniettiva (strettamente crescente): $x_1 = x_2$.
> - In alternativa: $e^x$ è strettamente crescente, $t \mapsto 3 - \frac{7}{t + 2}$ è strettamente crescente su $(0, +\infty)$, quindi la composizione $f$ è strettamente crescente, e una funzione strettamente monotona è iniettiva.
>
> **3. Inversa.** $f : \mathbb{R} \to \left(-\frac12, 3\right)$ è iniettiva (punto 2) e suriettiva (punto 1), quindi biiettiva. Il conto del punto 1 dà
> $$
> f^{-1} : \left(-\tfrac12, 3\right) \to \mathbb{R}, \qquad f^{-1}(y) = \log\frac{2y + 1}{3 - y}
> $$
> - *Controllo*: $f(0) = \frac{3 - 1}{1 + 2} = \frac23$, e $f^{-1}\left(\frac23\right) = \log\dfrac{\frac43 + 1}{3 - \frac23} = \log\dfrac{7/3}{7/3} = \log 1 = 0$.
>
> **4. Disequazione $f(x) > 0$.**
> - Il denominatore $e^x + 2$ è positivo, quindi il segno è quello del numeratore: $f(x) > 0 \iff 3e^x - 1 > 0$.
> - $\iff e^x > \frac13 \iff x > \log\frac13 = -\log 3$ (applico $\log$, strettamente crescente, il verso resta).
> - *Controllo*: $f(0) = \frac23 > 0$ e $0 > -\log 3 \approx -1{,}1$; $f(-\log 3) = \frac{3 \cdot \frac13 - 1}{\frac13 + 2} = 0$.

> [!warning]- Errori tipici su questo esercizio
> - Dare l'immagine come $(-\infty, 3)$ o $\left[-\frac12, 3\right]$: gli estremi non si raggiungono, perché $e^x$ non vale mai $0$ e non è mai infinito.
> - Scrivere l'inversa senza il suo dominio, o con dominio $\mathbb{R}$: fuori da $\left(-\frac12, 3\right)$ il logaritmo non è definito.
> - Moltiplicare per $3 - y$ o per $t + 2$ senza dire che sono positivi.

### Esercizio 2

> [!example]- Soluzione
> **Risultati.** 1. $z = 1 + \sqrt3\,i$, $z = -1 - \sqrt3\,i$, $z = -1 + \sqrt3\,i$, $z = 1 - \sqrt3\,i$. 2. Appartiene a $E$ solo $z = 1 + \sqrt3\,i$.
>
> **Come si riconosce.** Polinomio con solo $z^4$ e $z^2$: biquadratica, si pone $w = z^2$, si risolve l'equazione di secondo grado in $w$ e poi si prendono le radici quadrate di ogni $w$. Nel punto 2 le condizioni con $|z - z_0|$ e $\mathrm{Im}(z)$ sono un luogo: disco e semipiano, si intersecano.
>
> **1. L'equazione.**
> - Pongo $w = z^2$: $w^2 + 4w + 16 = 0$.
> - $\Delta = 4^2 - 4 \cdot 16 = 16 - 64 = -48$. È reale negativo, quindi $\delta = i\sqrt{48} = 4\sqrt3\,i$.
> - $w = \frac{-4 \pm 4\sqrt3\,i}{2} = -2 \pm 2\sqrt3\,i$.
> - *Forma esponenziale di $w_1 = -2 + 2\sqrt3\,i$.* $|w_1| = \sqrt{4 + 12} = 4$. Quadrante: $a < 0$, $b > 0$, 2°. $\cos\theta = -\frac24 = -\frac12$, $\sin\theta = \frac{2\sqrt3}{4} = \frac{\sqrt3}{2}$: $\theta = \frac{2\pi}{3}$. Quindi $w_1 = 4e^{i\frac{2\pi}{3}}$.
> - *Forma esponenziale di $w_2 = -2 - 2\sqrt3\,i$.* È il coniugato di $w_1$: modulo $4$, 3° quadrante, $\theta = \frac{4\pi}{3}$. Quindi $w_2 = 4e^{i\frac{4\pi}{3}}$.
> - *Radici quadrate di $w_1$.* Modulo $\sqrt4 = 2$, argomenti $\frac{2\pi}{3} \cdot \frac12 + k\pi = \frac\pi3 + k\pi$, $k = 0, 1$:
>   - $k = 0$: $2e^{i\frac\pi3} = 2\left(\frac12 + \frac{\sqrt3}{2}i\right) = 1 + \sqrt3\,i$;
>   - $k = 1$: $2e^{i\frac{4\pi}{3}} = 2\left(-\frac12 - \frac{\sqrt3}{2}i\right) = -1 - \sqrt3\,i$.
> - *Radici quadrate di $w_2$.* Argomenti $\frac{4\pi}{3} \cdot \frac12 + k\pi = \frac{2\pi}{3} + k\pi$:
>   - $k = 0$: $2e^{i\frac{2\pi}{3}} = -1 + \sqrt3\,i$;
>   - $k = 1$: $2e^{i\frac{5\pi}{3}} = 1 - \sqrt3\,i$.
> - Quattro soluzioni, come vuole il teorema fondamentale per un polinomio di grado $4$. I coefficienti sono reali, quindi le soluzioni vengono a coppie coniugate: $1 \pm \sqrt3\,i$ e $-1 \pm \sqrt3\,i$.
> - *Controllo*: $(1 + \sqrt3\,i)^2 = 1 + 2\sqrt3\,i - 3 = -2 + 2\sqrt3\,i = w_1$, e $w_1^2 + 4w_1 + 16 = (4 - 8\sqrt3\,i - 12) + (-8 + 8\sqrt3\,i) + 16 = 0$.
>
> **2. L'insieme $E$.**
> - $|z - 1 - i| = |z - (1 + i)| < 2$: distanza da $1 + i$ minore di $2$, cioè il **disco aperto** di centro $(1, 1)$ e raggio $2$, bordo escluso (tratteggiato).
> - $\mathrm{Im}(z) \geq 0$: il semipiano chiuso sopra l'asse reale, asse compreso.
> - $E$ è l'intersezione: la parte del disco che sta sopra l'asse reale. Il disco scende fino a $y = 1 - 2 = -1$, quindi l'asse reale lo taglia: $E$ è il disco senza la "calotta" sotto l'asse. Sull'asse, $|x - 1 - i| < 2 \iff (x - 1)^2 + 1 < 4 \iff |x - 1| < \sqrt3$: il bordo inferiore di $E$ è il segmento aperto da $1 - \sqrt3$ a $1 + \sqrt3$.
> - *Quali soluzioni stanno in $E$.*
>   - $1 - \sqrt3\,i$ e $-1 - \sqrt3\,i$ hanno $\mathrm{Im} = -\sqrt3 < 0$: fuori.
>   - $1 + \sqrt3\,i$: $|1 + \sqrt3\,i - 1 - i| = |(\sqrt3 - 1)i| = \sqrt3 - 1 \approx 0{,}73 < 2$, e $\mathrm{Im} = \sqrt3 \geq 0$: **dentro**.
>   - $-1 + \sqrt3\,i$: $|-2 + (\sqrt3 - 1)i|^2 = 4 + (\sqrt3 - 1)^2 = 4 + 4 - 2\sqrt3 = 8 - 2\sqrt3$. È $\geq 4$? $8 - 2\sqrt3 > 4 \iff 2\sqrt3 < 4 \iff \sqrt3 < 2$, vero. Quindi la distanza è $> 2$: fuori.
> - Appartiene a $E$ solo $1 + \sqrt3\,i$.
> - *Controllo con il disegno*: il punto $(1, \sqrt3) \approx (1;\ 1{,}73)$ sta sopra il centro $(1, 1)$, vicino; $(-1, \sqrt3)$ ha già distanza orizzontale $|-1 - 1| = 2$ dal centro, e con lo scarto verticale $\sqrt3 - 1 \neq 0$ la distanza supera $2$: fuori.

> [!warning]- Errori tipici su questo esercizio
> - Fermarsi a $w = -2 \pm 2\sqrt3\,i$: quelle sono le soluzioni in $w$, non in $z$.
> - Prendere una sola radice quadrata per ogni $w$ e trovare solo due soluzioni.
> - Leggere il centro di $|z - 1 - i|$ come $-1 - i$.
> - Disegnare il bordo del disco pieno: la disuguaglianza è stretta.

### Esercizio 3

> [!example]- Soluzione
> **Risultati.** 1. $a_{4k+1} \to 1$ e $a_{4k+3} \to -1$: il limite non esiste. 2. $0$. 3. $e$.
>
> **1. Non esistenza del limite.**
>
> *Come si riconosce*: $\sin\frac{n\pi}{2}$ ha periodo $4$ in $n$ e prende i valori $1, 0, -1, 0$. Si guardano i resti nella divisione per $4$ e si scelgono due sottosuccessioni con comportamenti diversi.
> - Valori di $\sin\frac{n\pi}{2}$: $n = 1$: $1$; $n = 2$: $0$; $n = 3$: $-1$; $n = 4$: $0$; poi si ripete.
> - Con $n = 4k + 1$: $\sin\left(2k\pi + \frac\pi2\right) = \sin\frac\pi2 = 1$ (il seno ha periodo $2\pi$). Quindi $a_{4k+1} = \frac{4k + 2}{4k + 1}$.
> - $\frac{4k + 2}{4k + 1} = \frac{4 + \frac2k}{4 + \frac1k} \to 1$ per $k \to +\infty$ (raccolgo $k$).
> - Con $n = 4k + 3$: $\sin\left(2k\pi + \frac{3\pi}{2}\right) = \sin\frac{3\pi}{2} = -1$. Quindi $a_{4k+3} = -\frac{4k + 4}{4k + 3} \to -1$.
> - Le sottosuccessioni $a_{4k+1}$ e $a_{4k+3}$ tendono a $1$ e a $-1$. Poiché $1 \neq -1$, per il corollario sulle sottosuccessioni (slide 26) $(a_n)$ non ammette limite.
> - *Controllo*: $a_1 = 2$, $a_3 = -\frac43$, $a_5 = \frac65$, $a_7 = -\frac87$, $a_9 = \frac{10}{9}$: i dispari si avvicinano alternatamente a $1$ e a $-1$.
>
> **2. $\lim \frac{n^n}{3^n \cdot n!}$.**
>
> *Come si riconosce*: ci sono $n^n$, $n!$ e un esponenziale. La gerarchia confronta un infinito con un altro, mentre qui sotto c'è il prodotto $3^n \cdot n!$ contro $n^n$: nessuna regola pronta. Con fattoriali e potenze $n$-esime lo strumento è il **criterio del rapporto**: quasi tutto si semplifica. La successione è a termini positivi.
> - $b_n = \frac{n^n}{3^n n!} > 0$.
> - $\dfrac{b_{n+1}}{b_n} = \dfrac{(n + 1)^{n+1}}{3^{n+1}(n + 1)!} \cdot \dfrac{3^n n!}{n^n}$ (dividere è moltiplicare per il reciproco).
> - $3^{n+1} = 3 \cdot 3^n$ e $(n + 1)! = (n + 1) \cdot n!$: $= \dfrac{(n + 1)^{n+1}}{3 (n + 1) n^n}$.
> - $(n + 1)^{n+1} = (n + 1)^n (n + 1)$, semplifico $n + 1$: $= \dfrac{(n + 1)^n}{3 n^n} = \dfrac13\left(\dfrac{n + 1}{n}\right)^n = \dfrac13\left(1 + \dfrac1n\right)^n$.
> - $\left(1 + \frac1n\right)^n \to e$ (definizione di $e$), quindi $\frac{b_{n+1}}{b_n} \to \frac{e}{3}$.
> - $e < 3$ (la successione di Nepero è limitata da $3$), quindi $L = \frac e3 < 1$: per il criterio del rapporto $b_n \to 0$.
> - *Controllo*: $b_{10} \approx 0{,}047$, $b_{20} \approx 0{,}012$, $b_{40} \approx 0{,}0012$. Scende, e lentamente, perché $\frac e3 \approx 0{,}91$ è vicino a $1$.
>
> **3. $\lim \left(\frac{n^2 + 1}{n^2 - n}\right)^n$** (per $n \geq 2$, così $n^2 - n > 0$).
>
> *Come si riconosce*: base $\to 1$ (stesso grado, stesso coefficiente direttore), esponente $\to +\infty$: $[1^\infty]$, Nepero generalizzato.
> - Base meno $1$: $\frac{n^2 + 1}{n^2 - n} - 1 = \frac{n^2 + 1 - n^2 + n}{n^2 - n} = \frac{n + 1}{n^2 - n}$.
> - Quindi base $= 1 + \frac{1}{a_n}$ con $a_n = \frac{n^2 - n}{n + 1}$.
> - $a_n = \frac{n^2\left(1 - \frac1n\right)}{n\left(1 + \frac1n\right)} = n \cdot \frac{1 - \frac1n}{1 + \frac1n} \to +\infty$, quindi $\left(1 + \frac{1}{a_n}\right)^{a_n} \to e$.
> - Esponente: $n = a_n \cdot c_n$ con $c_n = \frac{n}{a_n} = \frac{n(n + 1)}{n^2 - n} = \frac{n + 1}{n - 1}$ (semplifico $n$).
> - $c_n = \frac{1 + \frac1n}{1 - \frac1n} \to 1$.
> - Per la potenza dei limiti $\left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{c_n} \to e^1 = e$.
> - *Controllo*: $n = 1000$ dà circa $2{,}7224$, $n = 10^6$ circa $2{,}71829$.

> [!warning]- Errori tipici su questo esercizio
> - Nel punto 1, usare solo pari e dispari: sui pari $a_n = 0$, sui dispari $a_n$ oscilla ancora. Le sottosuccessioni giuste vanno modulo $4$.
> - Nel punto 2, concludere con la gerarchia “$n^n$ vince su tutto, quindi $+\infty$": sotto c'è anche $n!$, e il risultato è $0$.
> - Nel punto 2, dimenticare di dire perché $\frac e3 < 1$.
> - Nel punto 3, dire che il limite è $1$ "perché la base tende a $1$".

### Griglia dei punti

**Parte 1.** Ogni domanda: $+1{,}5$ giusta, $-0{,}5$ sbagliata, $0$ non data. Risposte: 1 b, 2 d, 3 a, 4 c, 5 b, 6 d, 7 c, 8 a. Soglia per la correzione della parte 2: $5$ su $12$.

**Parte 2.**

| Esercizio | Punto | Cosa si guarda | Punti |
| --- | --- | --- | --- |
| 1 | 1 | dominio $\mathbb{R}$ motivato ($e^x + 2 > 0$) | 0,5 |
| 1 | 1 | immagine contenuta in $\left(-\frac12, 3\right)$ con la catena di disuguaglianze | 1 |
| 1 | 1 | ogni $y$ dell'intervallo è raggiunto (equazione $f(x) = y$ risolta, condizione $t > 0$) | 1,5 |
| 1 | 2 | iniettività dalla definizione o dalla stretta monotonia, motivata | 1,5 |
| 1 | 3 | formula dell'inversa | 1 |
| 1 | 3 | dominio dell'inversa e controllo | 0,5 |
| 1 | 4 | disequazione risolta con il verso giustificato | 1 |
| 2 | 1 | sostituzione $w = z^2$ e valori di $w$ | 1 |
| 2 | 1 | forme esponenziali di $w_1$, $w_2$ con quadrante | 1 |
| 2 | 1 | quattro radici in forma algebrica | 1,5 |
| 2 | 1 | verifica | 0,5 |
| 2 | 2 | disegno di $E$ (disco aperto, semipiano chiuso, intersezione) | 1,5 |
| 2 | 2 | appartenenza delle quattro soluzioni, con i conti | 1,5 |
| 3 | 1 | due sottosuccessioni esplicite con i limiti | 1,5 |
| 3 | 1 | conclusione con il corollario | 0,5 |
| 3 | 2 | scelta del criterio del rapporto, termini positivi | 0,5 |
| 3 | 2 | semplificazione del rapporto | 1,5 |
| 3 | 2 | limite $\frac e3 < 1$ e conclusione | 1 |
| 3 | 3 | riconoscere $[1^\infty]$, scrivere $1 + \frac{1}{a_n}$ | 1 |
| 3 | 3 | esponente aggiustato, limite $e$ | 1 |

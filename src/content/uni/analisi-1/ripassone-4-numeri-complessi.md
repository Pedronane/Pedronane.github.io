---
title: Ripassone 4 · Numeri complessi
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

> [!abstract] Definizione (numeri complessi) · slide 6
> L'insieme $\mathbb{C}$ dei numeri complessi è definito come l'insieme delle coppie ordinate di numeri reali:
> $$
> \mathbb{C} = \mathbb{R} \times \mathbb{R} = \{(x, y) : x \in \mathbb{R},\ y \in \mathbb{R}\}.
> $$
> Un numero complesso $z \in \mathbb{C}$ è una coppia ordinata di numeri reali:
> $$
> z = (x, y) \quad \text{con } x, y \in \mathbb{R}.
> $$

> [!abstract] Numeri complessi (reali, immaginari puri, unità immaginaria) · slide 6
> Identifichiamo un numero reale $x \in \mathbb{R}$ con il numero complesso $(x, 0) \in \mathbb{C}$: $\mathbb{R} \subset \mathbb{C}$, $1 = (1, 0)$.
> I numeri complessi della forma $(0, y)$ con $y \neq 0$ non corrispondono ad alcun numero reale e sono detti immaginari puri. In particolare definiamo l'unità immaginaria
> $$
> i = (0, 1).
> $$

> [!abstract] Rappresentazione cartesiana (piano di Gauss, uguaglianza) · slide 7
> Possiamo rappresentare i numeri complessi come punti del piano (piano complesso, o piano di Gauss): se $z = (x, y) \in \mathbb{C}$, allora indichiamo: $x = \mathrm{Re}(z)$ parte reale di $z$, $y = \mathrm{Im}(z)$ parte immaginaria di $z$.
> Due numeri complessi sono uguali se e solo se hanno le stesse parti reali ed immaginarie: dati $z_1 = (x_1, y_1)$ e $z_2 = (x_2, y_2)$ si ha
> $$
> z_1 = z_2 \iff x_1 = x_2 \ \text{ e } \ y_1 = y_2.
> $$

> [!abstract] Operazioni sui numeri complessi /1 · slide 8
> Somma di due numeri complessi: dati $z_1 = (x_1, y_1)$, $z_2 = (x_2, y_2)$, poniamo $z_1 + z_2 = (x_1 + x_2, y_1 + y_2)$.
> Moltiplicazione di un numero complesso $z = (x, y) \in \mathbb{C}$ per un numero reale $a \in \mathbb{R}$: poniamo $a \cdot z = (ax, ay)$.
> Con le regole precedenti possiamo scrivere $z = (x, y) =$
> D'ora in poi, per comodità, indicheremo un generico numero complesso con la notazione (forma cartesiana)
> $$
> z = x + iy
> $$

> [!abstract] Operazioni sui numeri complessi /2 · slide 9
> Siano $z_1 = x_1 + i y_1$, $z_2 = x_2 + i y_2$ due numeri complessi.
> Somma di due numeri complessi: $z_1 + z_2 = (x_1 + i y_1) + (x_2 + i y_2) = (x_1 + x_2) + i (y_1 + y_2)$. Geometricamente: regola del parallelogramma.
> Prodotto di due numeri complessi:
> $$
> z_1 \cdot z_2 = (x_1 + i y_1) \cdot (x_2 + i y_2) = (x_1 x_2 - y_1 y_2) + i (x_1 y_2 + x_2 y_1)
> $$
> Queste operazioni estendono le usuali operazioni di somma e prodotto su $\mathbb{R}$.

> [!abstract] Operazioni sui numeri complessi /3 · slide 10
> Calcoliamo $i^2 =$
> $$
> \Longrightarrow \quad i^2 = -1 \qquad \text{o equivalentemente} \qquad i = \sqrt{-1}
> $$
> Dunque l'equazione $z^2 + 1 = 0$ ha soluzione in $\mathbb{C}$!
> Possiamo rileggere la formula del prodotto di due numeri complessi alla luce di questa identità: $(x_1 + i y_1)(x_2 + i y_2) =$

> [!abstract] Definizione (coniugato e modulo) · slide 12
> Sia $z = x + iy \in \mathbb{C}$ un numero complesso.
> Il complesso coniugato di $z$ è il numero complesso $\bar{z} = x - iy$.
> Il modulo di $z$ è il numero reale (non negativo)
> $$
> \vert z\vert = \vert x + iy\vert = \sqrt{x^2 + y^2}.
> $$
> Geometricamente: $\bar{z}$ riflessione risp. all'asse reale, $\vert z\vert$ distanza dall'origine.

> [!abstract] Proprietà (coniugato e modulo) · slide 13
> 1. $\overline{z + w} = \bar{z} + \bar{w}$
> 2. $\overline{z \cdot w} = \bar{z} \cdot \bar{w}$
> 3. $z + \bar{z} = 2\,\mathrm{Re}(z)$, $\ z - \bar{z} = 2i\,\mathrm{Im}(z)$, dunque $z \in \mathbb{R} \iff z = \bar{z}$
> 4. $z \cdot \bar{z} = \vert z\vert^2$
> 5. $\vert z \cdot w\vert = \vert z\vert \vert w\vert$
> 6. $\vert z\vert = 0 \iff z = 0$
> 7. $\vert z + w\vert \leq \vert z\vert + \vert w\vert$ disuguaglianza triangolare

> [!abstract] Disuguaglianza triangolare · slide 14
> La disuguaglianza triangolare $\vert z + w\vert \leq \vert z\vert + \vert w\vert$ ha un immediato significato geometrico: in un triangolo qualsiasi, la lunghezza di uno dei lati è sempre minore della somma delle lunghezze degli altri due.
> Nota: se $z = x \in \mathbb{R}$, il modulo di $z$ coincide con il valore assoluto di $x$: $\vert z\vert = \sqrt{x^2} = \vert x\vert$.

> [!abstract] Definizione (reciproco) · slide 15
> Sia $z \in \mathbb{C}$ con $z \neq 0$. L'inverso, o reciproco, di $z$ è il numero complesso
> $$
> z^{-1} = \frac{\bar{z}}{\vert z\vert^2}.
> $$

> [!abstract] Risoluzione di equazioni in ℂ · slide 18
> Per risolvere un'equazione in campo complesso, un primo metodo che vediamo sfrutta essenzialmente il principio per cui un numero complesso è uguale a zero se e solo se la sua parte reale e la sua parte immaginaria sono entrambe nulle:
> $$
> z = 0 \iff \begin{cases} \mathrm{Re}(z) = 0 \\ \mathrm{Im}(z) = 0 \end{cases}
> $$

> [!abstract] Coordinate cartesiane e coordinate polari · slide 22
> Sappiamo che i numeri complessi $z \in \mathbb{C}$ sono in corrispondenza biunivoca con i punti del piano cartesiano $\mathbb{R}^2$. Abbiamo diversi sistemi di coordinate per rappresentare i punti del piano:
> 1. Coordinate cartesiane: $(x, y) \in \mathbb{R} \times \mathbb{R}$, $x = \mathrm{Re}(z)$, $y = \mathrm{Im}(z)$.
> 2. Coordinate polari: $(\rho, \theta) \in [0, +\infty) \times [0, 2\pi)$, $\rho = \vert z\vert$ è la distanza del punto $z$ dall'origine, $\theta = \mathrm{Arg}(z)$ è l'angolo individuato dal segmento che congiunge $z$ all'origine ed il semiasse positivo delle $x$ (argomento principale di $z$).

> [!abstract] Forma trigonometrica · slide 23
> Se $z = x + iy$ e $\theta = \mathrm{Arg}(z)$, dalla trigonometria abbiamo le relazioni
> $$
> \begin{cases} x = \mathrm{Re}(z) = \vert z\vert \cos\theta, \\ y = \mathrm{Im}(z) = \vert z\vert \sin\theta, \end{cases} \qquad \vert z\vert = \sqrt{x^2 + y^2}.
> $$
> Otteniamo allora la rappresentazione del numero complesso $z$ in forma trigonometrica:
> $$
> z = \vert z\vert \big(\cos\theta + i \sin\theta\big) \tag{1}
> $$
> Nota: l'argomento $\mathrm{Arg}(z)$ non è definito nel caso $z = 0$; in questo caso $\vert z\vert = 0$ e la rappresentazione (1) è ancora ammissibile.
> Per ogni numero complesso $z \neq 0$, il suo argomento principale $\theta = \mathrm{Arg}(z)$ è sempre compreso tra $[0, 2\pi)$ ed è univocamente determinato. Nella rappresentazione (1) possiamo però aggiungere a $\theta$ un qualunque multiplo di $2\pi$: indicheremo con $\arg(z)$ (argomento di $z$) un qualunque angolo che differisce dall'argomento principale $\mathrm{Arg}(z)$ per un multiplo di $2\pi$.

> [!abstract] Prodotto di numeri complessi · slide 25-26
> Fissiamo due numeri complessi $z_1, z_2 \in \mathbb{C}$ e rappresentiamoli in forma trigonometrica: $z_1 = \vert z_1\vert(\cos\theta_1 + i\sin\theta_1)$, $z_2 = \vert z_2\vert(\cos\theta_2 + i\sin\theta_2)$ (dove $\theta_1 = \arg(z_1)$ e $\theta_2 = \arg(z_2)$). Allora il loro prodotto risulta:
> $$
> z_1 \cdot z_2 = \vert z_1\vert\,\vert z_2\vert \big(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\big)
> $$
> cioè
> $$
> \begin{cases} \vert z_1 \cdot z_2\vert = \vert z_1\vert\,\vert z_2\vert \\ \arg(z_1 \cdot z_2) = \arg(z_1) + \arg(z_2) \end{cases}
> $$

> [!abstract] Quoziente di numeri complessi · slide 27
> Dati $z_1, z_2 \in \mathbb{C}$ con $z_2 \neq 0$ abbiamo, posto $\theta_1 = \arg(z_1)$, $\theta_2 = \arg(z_2)$,
> $$
> \frac{z_1}{z_2} = \frac{\vert z_1\vert}{\vert z_2\vert}\big[\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)\big]
> $$
> cioè
> $$
> \left\vert\frac{z_1}{z_2}\right\vert = \frac{\vert z_1\vert}{\vert z_2\vert}, \qquad \arg\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2).
> $$

> [!abstract] La formula di De Moivre · slide 28
> La formula del prodotto di due numeri complessi si può facilmente generalizzare al prodotto di un numero $n \in \mathbb{N}$ di numeri complessi: dati $z_1, z_2, \dots, z_n \in \mathbb{C}$ con rappresentazione trigonometrica $z_j = \vert z_j\vert(\cos\theta_j + i\sin\theta_j)$ per $j = 1, 2, \dots, n$, allora
> $$
> z_1 \cdot z_2 \cdot \ldots \cdot z_n = \vert z_1\vert\,\vert z_2\vert \ldots \vert z_n\vert \big(\cos(\theta_1 + \theta_2 + \ldots + \theta_n) + i\sin(\theta_1 + \theta_2 + \ldots + \theta_n)\big)
> $$
> Nel caso particolare in cui tutti i fattori siano uguali otteniamo una formula per il calcolo delle potenze di un numero complesso: dato un numero complesso $z = \vert z\vert(\cos\theta + i\sin\theta)$ e $n \in \mathbb{N}$, vale la formula di De Moivre
> $$
> z^n = \vert z\vert^n \big(\cos(n\theta) + i\sin(n\theta)\big)
> $$

> [!abstract] Forma esponenziale dei numeri complessi · slide 32
> Dato $\theta \in \mathbb{R}$, introduciamo la notazione (solo simbolica)
> $$
> e^{i\theta} = \cos\theta + i\sin\theta.
> $$
> Con questa notazione possiamo passare in maniera molto semplice dalla forma trigonometrica di un numero complesso alla forma esponenziale
> $$
> z = \vert z\vert(\cos\theta + i\sin\theta) \iff z = \vert z\vert e^{i\theta}
> $$
> Osservazione: la regola di moltiplicazione dei numeri complessi è consistente con le usuali regole di moltiplicazione di esponenziali: infatti se $z_1 = \vert z_1\vert(\cos\theta_1 + i\sin\theta_1)$, $z_2 = \vert z_2\vert(\cos\theta_2 + i\sin\theta_2)$, sappiamo che $z_1 \cdot z_2 = \vert z_1\vert\,\vert z_2\vert \big(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\big)$, che in forma esponenziale diventa
> $$
> \vert z_1\vert e^{i\theta_1} \cdot \vert z_2\vert e^{i\theta_2} = \vert z_1\vert\,\vert z_2\vert e^{i(\theta_1 + \theta_2)}.
> $$

> [!abstract] Forma esponenziale dei numeri complessi · slide 33
> Possiamo riscrivere la formula di De Moivre in notazione complessa: se $z = \vert z\vert e^{i\theta}$ allora $z^n = \vert z\vert^n e^{in\theta}$.
> Si noti anche l'uguaglianza notevole
> $$
> e^{i\pi} + 1 = 0.
> $$

> [!abstract] La radice n-esima di un numero complesso · slide 38
> Abbiamo visto che l'equazione $z^2 = -1$ ha esattamente due soluzioni nel campo dei numeri complessi $\mathbb{C}$, $z_1 = i$ e $z_2 = -i$. In altre parole, possiamo dire che i numeri complessi $i$ e $-i$ sono le radici quadrate di $-1$.
> Vedremo ora che, assegnato $w \in \mathbb{C}$, l'equazione $z^2 = w$ ha sempre esattamente due soluzioni $z_1, z_2 \in \mathbb{C}$, che si diranno le radici quadrate di $w$. Più in generale, possiamo definire la radice $n$-esima di un numero complesso, per $n \in \mathbb{N}$.

> [!abstract] Definizione (radice n-esima) · slide 38
> Sia $n \in \mathbb{N}$, $n \geq 2$. Dato $w \in \mathbb{C}$, $w \neq 0$, diciamo che un numero complesso $z \in \mathbb{C}$ è una radice $n$-esima di $w$ se
> $$
> z^n = w.
> $$

> [!abstract] La radice n-esima di un numero complesso · slide 39
> Dato $w \in \mathbb{C}$, $w \neq 0$, vediamo ora come calcolare le sue radici $n$-esime. Scriviamo anzitutto $w$ in forma esponenziale: $w = \vert w\vert e^{i\theta}$. Per calcolare le radici $n$-esime di $w$, dobbiamo trovare tutti i numeri complessi $z = \vert z\vert e^{i\alpha}$ tali che $z^n = w$. Utilizzando la formula di De Moivre abbiamo allora $z^n = w \iff \vert z\vert^n e^{in\alpha} = \vert w\vert e^{i\theta}$.
> Ricordando che due numeri complessi sono uguali se e solo se hanno lo stesso modulo e argomento principale, otteniamo allora le condizioni
> $$
> \begin{cases} \vert z\vert^n = \vert w\vert \\ n\alpha = \theta + 2k\pi \end{cases} \implies \begin{cases} \vert z\vert = \sqrt[n]{\vert w\vert} \\ \alpha = \dfrac{\theta + 2k\pi}{n}, \quad k = 0, 1, \dots, n - 1 \end{cases}
> $$
> La prima equazione permette di calcolare il modulo di $z$: si noti che $\vert w\vert$ è un numero reale positivo, e dunque la sua radice $n$-esima è ben definita ed è un numero reale!
> La scelta di far variare $k$ tra $0$ e $n - 1$ è la "minima indispensabile" per ottenere tutti i valori distinti delle radici, senza ripetizioni.

> [!abstract] Teorema (radici n-esime) · slide 40
> Sia $n \in \mathbb{N}$, $n \geq 2$. Dato $w \in \mathbb{C}$, $w \neq 0$, esistono esattamente $n$ radici $n$-esime $z_0, z_1, \dots, z_{n-1} \in \mathbb{C}$ di $w$. Se $w = \vert w\vert(\cos\theta + i\sin\theta)$, le radici sono date da
> $$
> z_k = \sqrt[n]{\vert w\vert}\left(\cos\left(\frac{\theta + 2k\pi}{n}\right) + i\sin\left(\frac{\theta + 2k\pi}{n}\right)\right)
> $$
> per $k = 0, 1, \dots, n - 1$.

> [!abstract] Esempio: le radici n-esime dell'unità · slide 41
> Applichiamo la formula del teorema per calcolare le $n$ radici $n$-esime di $w = 1$:
> $$
> z_k = \cos\left(\frac{2k\pi}{n}\right) + i\sin\left(\frac{2k\pi}{n}\right) \quad \text{per } k = 0, 1, \dots, n - 1.
> $$
> *(la slide dice $k = 0, 1, \dots, n$, corretto: $k = 0, 1, \dots, n - 1$)*
> Possiamo osservare che le radici complesse dell'unità sono i vertici del poligono regolare di $n$ lati inscritto nella circonferenza di raggio $1$ e avente un vertice nel punto di coordinate $(1, 0)$.

> [!abstract] Esempi · slide 42
> Più in generale, le radici $n$-esime di $w \in \mathbb{C}$ sono disposte sulla circonferenza di raggio $\vert w\vert^{\frac{1}{n}}$ e occupano i vertici di un poligono regolare di $n$ lati inscritto in tale circonferenza.

> [!abstract] Teorema Fondamentale dell'Algebra (equazione di grado n) · slide 44
> In base a quanto osservato finora, l'equazione $z^2 + a = 0$ ha sempre esattamente due soluzioni in $\mathbb{C}$ (mentre in $\mathbb{R}$ può non averne). Ma vale un risultato più generale: ogni equazione di secondo grado ha sempre 2 soluzioni in $\mathbb{C}$; l'equazione $z^n + a = 0$ ha sempre esattamente $n$ soluzioni in $\mathbb{C}$ (mentre in $\mathbb{R}$ può non averne). Anche in questo caso, il risultato si può generalizzare ad una qualunque equazione di grado $n$:
> Un'equazione di grado $n \geq 1$ in $\mathbb{C}$
> $$
> a_n z^n + a_{n-1} z^{n-1} + \dots + a_2 z^2 + a_1 z + a_0 = 0
> $$
> (dove $a_k \in \mathbb{C}$, $a_n \neq 0$) ha esattamente $n$ soluzioni in $\mathbb{C}$ (ciascuna contata con la sua molteplicità).

> [!abstract] Scomposizione di polinomi in ℂ · slide 45
> Un modo equivalente di formulare il Teorema Fondamentale dell'Algebra, in cui cambiamo leggermente punto di vista, afferma che un polinomio in $\mathbb{C}$ si può sempre scomporre nel prodotto di fattori di primo grado. Anche questa proprietà non vale in $\mathbb{R}$ (ad esempio, il polinomio $x^2 + x + 1$ non si scompone in $\mathbb{R}$).
> Sia $p(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_2 z^2 + a_1 z + a_0$ un polinomio di grado $n \geq 1$ con coefficienti $a_k \in \mathbb{C}$, $a_n \neq 0$. Allora esistono $n$ numeri complessi $z_1, z_2, \dots, z_n$ (non necessariamente distinti) tali che
> $$
> p(z) = a_n (z - z_1) \cdot (z - z_2) \cdot \ldots \cdot (z - z_n).
> $$

> [!abstract] Rappresentazione grafica di soluzioni di equazioni e disequazioni in ℂ · slide 47
> In alcuni casi è possibile dare una rappresentazione grafica nel piano complesso $\mathbb{C} = \mathbb{R}^2$ delle soluzioni di alcune equazioni o disequazioni. A questo scopo, è bene tenere presente che, dati due numeri complessi $z = x + iy$ e $z_0 = x_0 + iy_0$, la quantità
> $$
> \vert z - z_0\vert = \sqrt{(x - x_0)^2 + (y - y_0)^2}
> $$
> rappresenta la distanza tra i punti del piano che rappresentano $z$ e $z_0$.
> Dati $z_1$ e $z_2$ in $\mathbb{C}$, l'insieme $A = \{z \in \mathbb{C} : \vert z - z_1\vert = \vert z - z_2\vert\}$ è l'insieme dei punti $z$ del piano che sono equidistanti dai punti $z_1$ e $z_2$, pertanto è una retta nel piano.

> [!abstract] Rappresentazione grafica di soluzioni di equazioni e disequazioni in ℂ · slide 48
> Dati $z_0 \in \mathbb{C}$ e $r > 0$, l'insieme $A = \{z \in \mathbb{C} : \vert z - z_0\vert < r\}$ è l'insieme dei punti $z$ del piano che hanno distanza da $z_0$ minore di $r$, cioè è l'interno della circonferenza centrata in $z_0$ di raggio $r$ (senza bordo).
> Dati $z_0 \in \mathbb{C}$ e $r > 0$, l'insieme $A = \{z \in \mathbb{C} : \vert z - z_0\vert \geq r\}$ è l'insieme dei punti $z$ del piano che hanno distanza da $z_0$ maggiore o uguale a $r$, cioè è l'esterno della circonferenza centrata in $z_0$ di raggio $r$ (con bordo).

## Il prof ha scritto

- slide 6, a mano: «NOTAZIONE: insieme dei numeri complessi» sul simbolo $\mathbb{C}$; «numeri reali: seconda coordinata nulla» sullo $0$ di $(x, 0)$.
- slide 8, a mano: $z = (x, y) = (x, 0) + (0, y) = (x, 0) + y \cdot (0, 1)$, con «reale» su $(x, 0)$, «immaginario puro» su $(0, y)$, «$i$ = unità immaginaria» su $(0, 1)$, e $x = \mathrm{Re}(z)$, $y = \mathrm{Im}(z)$ sulla forma $x + iy$.
- slide 9, a mano: «scritti in forma cartesiana», $\mathrm{Re}(z_1 + z_2) = \mathrm{Re}(z_1) + \mathrm{Re}(z_2)$, $\mathrm{Im}(z_1 + z_2) = \mathrm{Im}(z_1) + \mathrm{Im}(z_2)$, e sul prodotto $\mathrm{Re}(z_1 \cdot z_2)$ e $\mathrm{Im}(z_1 \cdot z_2)$ sulle due parentesi.
- slide 10, a mano: $i^2 = i \cdot i = (0 + i \cdot 1)(0 + i \cdot 1) = (0 - 1) + i(0 \cdot 1 + 0 \cdot 1) = -1$, con $x_1, y_1, x_2, y_2$ segnati sui due fattori. Sul prodotto generale: $(x_1 + iy_1)(x_2 + iy_2) = x_1 x_2 + x_1 \cdot i \cdot y_2 + i y_1 \cdot x_2 + i^2 y_1 y_2$, «$i^2 = -1$», $= x_1 x_2 - y_1 y_2 + i(x_1 y_2 + x_2 y_1)$. Esempio $(3 - 4i) + (-2 + i)$: «× CASA».
- slide 12, a mano: «$\vert z\vert$ = lunghezza del vettore da $0$ a $z$»; «notazione» su $\bar{z}$ e su $\vert z\vert$; «asse immaginario», «asse reale»; $\vert\bar{z}\vert = \sqrt{x^2 + (-y)^2} = \sqrt{x^2 + y^2} = \vert z\vert$; «N.B. L'asse immaginario contiene tutti e soli i numeri puramente immaginari». *(l'origine sta sull'asse ma, per la slide 6, non è un immaginario puro)*
- slide 13, a mano: «× CASA» sulle proprietà 2 e 5; sulla 3, $z + \bar{z} = 2\,\mathrm{Re}(z)$ e $z - \bar{z} = 2i\,\mathrm{Im}(z)$ disegnati sul piano.
- slide 14, a mano: «(prop. 7 slide precedente)»; «lungh.: $\vert z\vert$»; «lungh. $= \vert z + w\vert$»; «lungh. $= \vert w\vert$»; «anche questo lato è lungo $\vert w\vert$»; «applichiamo la disuguaglianza triangolare "geometrica" a questo triangolo, otteniamo la prop. 7»; «lungh$(AB) \leq$ lungh$(AC)$ + lungh$(BC)$».
- slide 15, a mano: $z \cdot z^{-1} = z \cdot \dfrac{\bar{z}}{\vert z\vert^2} = \dfrac{z\bar{z}}{\vert z\vert^2} = \dfrac{\vert z\vert^2}{\vert z\vert^2} = 1$; «es: $z = x + 0 \cdot i \Rightarrow z^{-1} = \dfrac{x}{x^2} = \dfrac{1}{x}$»; sull'esempio $\dfrac{i}{1+i} - \dfrac{2}{1-i} + \dfrac{1-i}{(1+i)^2}$: «× CASA».
- slide 16, a mano: «$w^2$ esercizio».
- slide 19, a mano (metodo): «Metodo risolutivo: scrivere $z$ come un generico numero complesso, $z = x + iy$, poi, dopo aver sviluppato il membro sinistro, uguagliarne separatamente parte reale e parte immaginaria a zero».
- slide 20, a mano: «× CASA» su $z^2 + 5 = \vert z - 3i\vert^2$.
- slide 22, a mano: «$\rho$: lunghezza», «$\theta$: angolo con l'asse delle $x$», «l'angolo è ben definito $\Rightarrow z \neq 0$».
- pagine 4-7 del 23/9 (dopo la slide 23), a mano: $z = \mathrm{Re}(z) + i\cdot\mathrm{Im}(z) = a + i \cdot b$; $a = \rho\cos\theta = \sqrt{a^2 + b^2}\cos\theta$; $\dfrac{a}{\sqrt{a^2 + b^2}} = \cos\theta \Rightarrow \arccos\left(\dfrac{a}{\sqrt{a^2 + b^2}}\right) = \theta$; «Modo alternativo per trovare $\theta$: $\theta = \arctan\left(\dfrac{b}{a}\right) + k\pi$; per determinare se $k = 0$ o $k = 2$, si può osservare che dipende dal segno di $a$ e di $b$» *(il numero accanto a «$k =$» è scritto a mano e poco leggibile)*; «segno di $a$ e di $b$: $a, b > 0 \Rightarrow$ 1° quadrante; $a < 0,\ b > 0 \Rightarrow$ 2° quadrante; $a < 0,\ b < 0 \Rightarrow$ 3° quadrante; $a > 0,\ b < 0 \Rightarrow$ 4° quadrante».
- slide 23, stesse pagine: «VICEVERSA, dato $z = \rho(\cos\theta + i\sin\theta)$, per ottenere la scrittura algebrica $z = a + ib$» con $a := \rho\cos\theta$, $b := \rho\sin\theta$.
- slide 25, a mano: «notazione per angolo/argomento» su $\theta$; $z_1 \cdot z_2 = \vert z_1\vert\cdot\vert z_2\vert\big(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\big)$ con «modulo» su $\vert z_1\vert\cdot\vert z_2\vert$ e «argomento» su $\theta_1 + \theta_2$.
- slide 26, a mano: sul cerchio unitario $\vert z\vert = \vert z_1\vert\cdot\vert z_2\vert = 1$ (con $\vert z_1\vert = 1$, $\vert z_2\vert = 1$) e $\theta = \theta_1 + \theta_2$.
- slide 27, a mano: $\dfrac{z_1}{z_2} = z_1 \cdot z_2^{-1}$, con $z_2^{-1} = \dfrac{\bar{z}_2}{\vert z_2\vert^2}$ e il coniugato scritto $\cos\theta_2 - i\sin\theta_2$.
- slide 28, a mano: «modulo = prodotto dei moduli», «argomento = somma degli argomenti»; «$n = 0 \Rightarrow z^n = 1$».
- slide 29, a mano: «esercizio» su $z = i(1 + i)$ e su $z = 1 + i\sqrt{3}$.
- slide 30, a mano: «esercizio» su $z^7$ e $z^{34}$; «primo passo: troviamo $\vert z\vert$, $\arg(z)$»; «graficamente: $\arg(z) = \frac{5}{4}\pi$».
- slide 31, a mano: «Oss: $z^8 = 1 \Rightarrow z^{8\cdot k} = (z^8)^k = 1$»; «facciamo divisione con resto $3501 : 8$».
- slide 32, a mano: «notazione» su $e^{i\theta}$; sul prodotto «modulo» e «numero complesso di modulo 1 e di argomento/angolo $\theta_1 + \theta_2$».
- slide 33, a mano: «$z$ t.c. $\vert z\vert = 1$, $\arg(z) = \pi \Rightarrow z = e^{i\pi} = -1 \Rightarrow e^{i\pi} + 1 = 0$»; «RICORDA: $z = a + ib \Rightarrow \cos\theta = \dfrac{a}{\vert z\vert}$, $\sin\theta = \dfrac{b}{\vert z\vert}$»; «modulo» e «argomento» su $\vert z\vert e^{i\theta}$.
- slide 36, a mano: «membro destro ha argomento $= 0$»; «$k = 4 \Rightarrow \theta = 2\pi$»; sul modulo: «modulo del membro sinistro»; «$t_1 = -1$ non interessa»; «$\rho^2 = 2$ è l'unica soluzione accettabile», «$\rho = \sqrt{2}$ unica soluzione» con $-\sqrt{2}$ cancellato. *(la slide scrive $k \in \mathbb{N}$)*
- slide 38, a mano: «questa equazione ha $n$ soluzioni complesse» accanto a $z^n = w$.
- slide 39, a mano: «numero reale positivo» su $\sqrt[n]{\vert w\vert}$.
- slide 41, a mano: $w = 1 = 1 \cdot e^{i\cdot 0}$, $\theta = 0$; «$n = 3$» e «$n = 6$» sui due disegni.
- slide 44, a mano: «radici quadrate di $-a$» su «due soluzioni»; «radici $n$-esime di $-a$» su «$n$ soluzioni»; «la potenza massima (con coefficiente $\neq 0$)» su «grado $n$»; «coefficienti complessi» su $a_k \in \mathbb{C}$.
- slide 45, a mano: «radici» su $z_1, \dots, z_n$; «variabile» su $z$.
- slide 49 e 50: nessuna soluzione scritta, solo il testo dell'esempio.

## Svolti a lezione

### $(3 - 4i)\cdot(-2 + i)$ (slide 10)
$$
(3 - 4i)\cdot(-2 + i) = 3\cdot(-2) + 3\cdot i + (-4i)\cdot(-2) + (-4i)\cdot i
$$
«$-4\cdot i^2 = 4$»
$$
= -6 + 4 + i(3 + 8) = -2 + 11i
$$

### $z = 2 + i$, $w = 1 - 3i$: calcolare $z^2$, $w^2$, $\vert z\vert$, $w - \bar{z}$, $\dfrac{z}{w}$ (slide 15, 16)
$\mathrm{Re}(z) = 2$, $\mathrm{Im}(z) = 1$, $\mathrm{Re}(w) = 1$, $\mathrm{Im}(w) = -3$
$$
z^2 = (2 + i)^2 = 2^2 + i^2 + 4i = 4 - 1 + 4i = 3 + 4i
$$
«$w^2$ esercizio»
$$
\vert z\vert = \sqrt{2^2 + 1^2} = \sqrt{5}
$$
$$
w - \bar{z} = (1 - 3i) - (2 - i) = -1 - 2i
$$
$$
\frac{z}{w} = z \cdot \frac{1}{w} = (2 + i)\cdot\frac{\bar{w}}{\vert w\vert^2} = (2 + i)\cdot\frac{1 + 3i}{1 + 9}
$$
$$
= \frac{1}{10}(2 + i)(1 + 3i) = \frac{1}{10}\left(2 + 6i + i + 3i^2\right) = \frac{1}{10}(-1 + 7i) = -\frac{1}{10} + \frac{7}{10}i
$$

### $z^2 + i\,\mathrm{Im}(z) + 2\bar{z} = 0$ (slide 19)
$$
z = x + i\cdot y
$$
$$
z^2 = x^2 + i^2 y^2 + 2ixy = (x^2 - y^2) + 2ixy
$$
$$
i\cdot\mathrm{Im}(z) = i\cdot y \qquad 2\bar{z} = 2(x - iy) = 2x - 2iy
$$
«l'equazione si riscrive»
$$
(x^2 - y^2 + 2x) + i(2xy + y - 2y) = 0 \iff \underbrace{(x^2 - y^2 + 2x)}_{\mathrm{Re}} + i\,\underbrace{(2xy - y)}_{\mathrm{Im}} = 0
$$
$$
\begin{cases} \mathrm{Re} = 0 \iff x^2 - y^2 + 2x = 0 \\ \mathrm{Im} = 0 \iff y(2x - 1) = 0 \end{cases} \qquad \text{① } y = 0 \quad \text{② } 2x - 1 = 0 \iff x = \tfrac{1}{2}
$$
«Caso ①: $y = 0$, la prima equazione diventa»
$$
x^2 + 2x = 0 \iff x(x + 2) = 0 \Rightarrow x = 0 \text{ oppure } x = -2 \qquad z_1 = 0 + 0\cdot i, \quad z_2 = -2 + 0\cdot i
$$
«Caso ②: $x = \frac{1}{2}$, la prima equazione diventa»
$$
\frac{1}{4} - y^2 + 1 = 0 \iff y^2 = \frac{5}{4} \Rightarrow y = \pm\frac{\sqrt{5}}{2}
$$
$$
z_3 = \frac{1}{2} - i\cdot\frac{\sqrt{5}}{2} \qquad z_4 = \frac{1}{2} + i\cdot\frac{\sqrt{5}}{2}
$$

### Modulo e argomento di $5$, $i$, $\sqrt{3} + i$ (slide 24)
«$-i$ e $3 - 3i$: × CASA»
$$
z = 5 = 5 + 0\cdot i \qquad \vert z\vert = 5 \qquad \cos\theta = \frac{a}{\sqrt{a^2 + b^2}} = \frac{5}{5} = 1, \quad \sin\theta = \frac{b}{\sqrt{a^2 + b^2}} = \frac{0}{5} = 0 \Rightarrow \theta = 0 \Rightarrow 5 = 5\big[\cos(0) + i\sin(0)\big]
$$
$$
z = i = 0 + 1\cdot i \qquad \vert i\vert = \sqrt{0^2 + 1^2} = 1 \qquad \cos\theta = \frac{0}{1} = 0, \quad \sin\theta = \frac{1}{1} = 1 \Rightarrow \theta = \frac{\pi}{2} \Rightarrow i = 1\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right)
$$
$$
z = \sqrt{3} + i = \sqrt{3} + 1\cdot i \qquad \vert z\vert = \sqrt{\sqrt{3}^2 + 1^2} = \sqrt{4} = 2 \qquad \cos\theta = \frac{\sqrt{3}}{2}, \quad \sin\theta = \frac{1}{2} \Rightarrow \theta = \frac{\pi}{6}
$$
$$
z = \sqrt{3} + i = 2\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)
$$

### $z = \dfrac{-1 + i}{2}$ in forma trigonometrica (slide 29)
«$z = i(1 + i)$ e $z = 1 + i\sqrt{3}$: esercizio»
$$
z = \frac{-1 + i}{2} \qquad \vert z\vert = \sqrt{\left(\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2} = \frac{\sqrt{2}}{2}
$$
$$
\cos\theta = \frac{-\frac{1}{2}}{\frac{\sqrt{2}}{2}} = -\frac{\sqrt{2}}{2} \qquad \sin\theta = \frac{\frac{1}{2}}{\frac{\sqrt{2}}{2}} = \frac{\sqrt{2}}{2} \qquad \Rightarrow \theta = \frac{3}{4}\pi
$$
$$
z = \frac{\sqrt{2}}{2}\left(\cos\left(\frac{3}{4}\pi\right) + i\sin\left(\frac{3}{4}\pi\right)\right)
$$

### $z = -1 - i$: la potenza $z^4$ (slide 30)
«$z^7$ e $z^{34}$: esercizio»
$$
\vert -1 - i\vert = \sqrt{(-1)^2 + (-1)^2} = \sqrt{2} \qquad \text{graficamente: } \arg(z) = \frac{5}{4}\pi
$$
$$
z^4 = \left(\sqrt{2}\right)^4\left(\cos\left(4\cdot\frac{5}{4}\pi\right) + i\sin\left(4\cdot\frac{5}{4}\pi\right)\right) = \left(\left(\sqrt{2}\right)^2\right)^2\big(\cos(5\pi) + i\sin(5\pi)\big)
$$
$$
= 4\cdot\big(\cos(\pi) + i\sin(\pi)\big)
$$
«in forma algebrica:» $z^4 = -4$

### $\left(\dfrac{1 + i}{\sqrt{2}}\right)^{3501}$ (slide 31)
$$
z = \frac{1 + i}{\sqrt{2}} \qquad \vert z\vert = \frac{\vert 1 + i\vert}{\vert\sqrt{2}\vert} = \frac{\sqrt{2}}{\sqrt{2}} = 1 \qquad \mathrm{Re}(z) = \mathrm{Im}(z) \ (1°\ \text{quadrante}) \Rightarrow \arg(z) = \frac{\pi}{4}
$$
«Oss: $z^8 = 1 \Rightarrow z^{8\cdot k} = (z^8)^k = 1$. Facciamo divisione con resto $3501 : 8$»: $3501 = 8\cdot 437 + 5$, resto $r = 5$.
$$
z^{3501} = z^{8\cdot 437 + 5} = z^{8\cdot 437}\cdot z^5 = (z^8)^{437}\cdot z^5 = 1^{437}\cdot z^5 = z^5 \Rightarrow \arg\left(z^{3501}\right) = \frac{5}{4}\pi
$$
$$
\left(\frac{1 + i}{\sqrt{2}}\right)^{3501} = 1\cdot\left(\cos\left(\frac{5}{4}\pi\right) + i\sin\left(\frac{5}{4}\pi\right)\right)
$$

### $z^4 = \vert z\vert^2 + 2$ (slide 36)
«membro destro ha argomento $= 0$»
$$
\arg(z^4) = 0 \iff \arg\left(z^4 = \rho^4 e^{i\cdot 4\theta}\right) = 0 \iff 4\theta = 2k\pi \iff \theta = \frac{2k\pi}{4}
$$
$$
k = 0 \Rightarrow \theta = 0 \quad k = 1 \Rightarrow \theta = \tfrac{\pi}{2} \quad k = 2 \Rightarrow \theta = \pi \quad k = 3 \Rightarrow \theta = \tfrac{3}{2}\pi \quad k = 4 \Rightarrow \theta = 2\pi
$$
«Vogliamo individuare $\vert z\vert$»
$$
z = \rho\cdot e^{i\theta} \Rightarrow \vert z\vert = \rho \qquad \vert z^4\vert = \rho^4 \ \text{«modulo del membro sinistro»}
$$
«Quanto vale il modulo del membro destro? Siccome $\vert z\vert^2$ è reale positivo, allora»
$$
\big\vert\,\vert z\vert^2 + 2\,\big\vert = \rho^2 + 2
$$
«Uguagliando modulo membro sx e modulo membro dx, otteniamo»
$$
\vert z\vert = \rho \ \text{risolve} \ \rho^2 + 2 = \rho^4 \qquad \rho^4 - \rho^2 - 2 = 0 \ \text{(cerchiamo sol. positive)}
$$
«poniamo $\rho^2 = t$ ($t \geq 0$), dobbiamo risolvere»
$$
t^2 - t - 2 = 0 \qquad \text{soluzioni (due numeri con somma 1 e prodotto } -2\text{): } t_1 = -1 \ \text{«non interessa»}, \ t_2 = 2
$$
$$
\rho^2 = 2 \ \text{«è l'unica soluzione accettabile»} \qquad \rho = \sqrt{2} \ \text{«unica soluzione»}
$$
«Le soluzioni dell'equazione in forma esponenziale sono»
$$
z_1 = \sqrt{2}\,e^{i\cdot 0} = \sqrt{2} \qquad z_2 = \sqrt{2}\,e^{i\frac{\pi}{2}} \qquad z_3 = \sqrt{2}\,e^{i\pi} \qquad z_4 = \sqrt{2}\,e^{i\frac{3}{2}\pi}
$$
$$
z = \sqrt{2}\cdot e^{ik\frac{\pi}{2}}, \quad k = 0, 1, 2, 3
$$

### Radici cubiche di $w = 2(i - 1)$ (Esercitazione 2, 3.3 a)
Il tutor ripassa: $z^n = w$, $w, z \in \mathbb{C}$, $w = \rho_w e^{i\theta_w}$, $z = \rho_z e^{i\theta_z}$.
$$
z^n = \rho_z^n e^{i\theta_z n} = \rho_w e^{i\theta_w} \Rightarrow \begin{cases} \rho_z^n = \rho_w \to \rho_z = \sqrt[n]{\rho_w} \\ \theta_z \cdot n = \theta_w + 2k\pi \to \theta_z = \dfrac{\theta_w + 2k\pi}{n} \end{cases} \qquad z = \sqrt[n]{\rho_w}\, e^{i\frac{\theta_w + 2k\pi}{n}}, \ k = 0, \dots, n - 1
$$
$$
w = 2(i - 1) = -2 + 2i = 2\sqrt{2}\left(-\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i\right) \qquad \rho_w = \sqrt{(-2)^2 + 2^2} = 2\sqrt{2} \qquad w = 2\sqrt{2}\,e^{i\frac{3}{4}\pi}
$$
$$
z = \sqrt[6]{8}\,e^{i\frac{\frac{3}{4}\pi + 2k\pi}{3}}, \quad k = 0, 1, 2
$$
$$
k = 0: \ z_0 = \sqrt[6]{8}\,e^{i\frac{\pi}{4}} = \sqrt[6]{8}\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right)
$$
$$
k = 1: \ z_1 = \sqrt[6]{8}\,e^{i\frac{11}{12}\pi} = \sqrt[6]{8}\left(\cos\frac{11}{12}\pi + i\sin\frac{11}{12}\pi\right)
$$
$$
k = 2: \ z_2 = \sqrt[6]{8}\,e^{i\frac{19}{12}\pi} = \sqrt[6]{8}\left(\cos\frac{19}{12}\pi + i\sin\frac{19}{12}\pi\right) \qquad (r = \sqrt[6]{8})
$$

### $\vert z + 2i\vert > \vert z + 4 - 2i\vert$ e $\vert z + 2\vert < 1$ (Esercitazione 3, 2.4 esercizio 7 i)
Il tutor: «Rappresentate nel piano complesso l'insieme dei numeri complessi soddisfacenti i seguenti sistemi», $z = x + iy$.
$$
\text{①} \ \vert z + 2i\vert > \vert z + 4 - 2i\vert \iff \vert z - (-2i)\vert > \vert z - (-4 + 2i)\vert \iff \sqrt{x^2 + (y + 2)^2} > \sqrt{(x + 4)^2 + (y - 2)^2}
$$
$$
x^2 + (y + 2)^2 > (x + 4)^2 + (y - 2)^2 \iff x^2 + y^2 + 4y + 4 > x^2 + 8x + 16 + y^2 + 4 - 4y \iff 8y > 8x + 16 \iff y > x + 2
$$
$$
\text{②} \ \vert z + 2\vert < 1 \iff \vert z - (-2)\vert < 1 \iff \vert(x + 2) + iy\vert < 1 \iff \sqrt{(x + 2)^2 + y^2} < 1 \iff (x + 2)^2 + y^2 < 1
$$
Il tutor disegna il semipiano sopra la retta $y = x + 2$ (tratteggiata) e il disco di centro $-2$; l'intersezione è tratteggiata nel disegno.

### $\{z \in \mathbb{C} : \vert z - i\vert^2 = 1\}$ (Esercitazione 3, 1 e)
$$
\vert z - i\vert^2 = 1 \qquad z = x + iy \qquad \vert x + i(y - 1)\vert^2 = 1 \qquad x^2 + (y - 1)^2 = 1
$$
Il tutor disegna la circonferenza di centro $i$ e raggio $1$.

## Crocette delle provette

### 2025, domanda 4

Sia $z = (1 - i\sqrt{3})^6$. Quale delle seguenti affermazioni è vera?

- a) $\vert z\vert = 32$
- b) $\mathrm{Arg}(z) = \frac{5\pi}{3}$
- c) $\mathrm{Im}(z) = 0$
- d) $\frac{1}{z} = \overline{z}$

> [!example]- Soluzione
> **c**. $$z = (1 - i\sqrt{3})^6 = 2^6\left(\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}i\right)^6 = 64\left(\cos\left(\tfrac{5}{3}\pi \cdot 6\right) + i\sin\left(\tfrac{5}{3}\pi \cdot 6\right)\right) = 64(\cos 10\pi + i\sin 10\pi) = 64$$
> $\to \mathrm{Im}(z) = 0$

### 2025, domanda 7

Cosa si può dire sull'insieme $A$ degli $z$ nel piano complesso che soddisfano $\vert z + 2 - i\vert + \vert iz - 2\vert = 0$?

- a) $A$ è vuoto
- b) $A$ è costituito da un solo punto
- c) $A$ è costituito da due punti
- d) $A$ è un'ellisse

> [!example]- Soluzione
> **a**. $$\vert z + 2 - i\vert + \vert iz - 2\vert = 0$$
> $$
> \vert z - (i - 2)\vert + \vert i\vert\,\left\vert z - \tfrac{2}{i}\right\vert = 0
> $$
> $$
> \vert z - (-2 + i)\vert + \vert z + 2i\vert = 0
> $$
> $$
> \vert z - (-2 + i)\vert + \vert z - (-2i)\vert = 0
> $$
> Siano $A(-2, 1)$ e $B(0, -2)$: $\exists P$ t.c. $d(P, A) + d(P, B) = 0$, impossibile.
>
> Modo 2: $z = x + iy$
> $$
> \vert z + 2 - i\vert + \vert iz - 2\vert = 0
> $$
> $$
> \vert (x + 2) + i(y - 1)\vert + \vert (-y - 2) + ix\vert = 0
> $$
> $$
> \sqrt{(x+2)^2 + (y-1)^2} + \sqrt{(-y-2)^2 + x^2} = 0
> $$
> $$
> \Updownarrow
> $$
> $$
> \begin{cases} x = -2 \\ y = 1 \\ y = -2 \\ x = 0 \end{cases} \to \emptyset
> $$

### 2024, domanda 4

Dire quale delle seguenti affermazioni è corretta per ogni $z \in \mathbb{C} \setminus \mathbb{R}$:

- a) $\mathrm{Arg}(z) = -\mathrm{Arg}(1/z) + 2\pi$
- b) $\mathrm{Re}(z) = \mathrm{Re}(1/z)$
- c) $1/z = \overline{z}$
- d) $\mathrm{Im}(z) = \mathrm{Im}(\overline{z})$

> [!example]- Soluzione
> **a**. Scrivendo $z = \rho \cdot e^{i\theta}$ (con $\theta = \mathrm{Arg}(z)$), abbiamo, per $z \ne 0$,
> $$
> \frac{1}{z} = \rho^{-1} \cdot (e^{i\theta})^{-1} = \rho^{-1} \cdot e^{i(-\theta)}
> $$
> dove $-\theta = \mathrm{Arg}(1/z) - 2\pi$ per $\theta \ne 0$, da cui
> $$
> \mathrm{Arg}(z) = -\mathrm{Arg}\left(\frac{1}{z}\right) + 2\pi
> $$
> (ricordando che la funzione $\mathrm{Arg}$ prende valori in $[0, 2\pi)$)

### 2024, domanda 7

L'espressione

$$
\left(\frac{1 - i}{1 + 2i} \cdot \frac{2i - 1}{1 + i} \cdot 5i\right)^2 - (3 - 4i)^2
$$

vale

- a) $46i$
- b) $48$
- c) $-48i$
- d) $48i$

> [!example]- Soluzione
> **d**. Nella prima parentesi, moltiplichiamo e dividiamo per $(1 - i)\cdot(1 - 2i)$:
> $$
> = \left(\frac{(1-i)^2\,(2i-1)^2}{(1+i)(1-i)\,(1+2i)(1-2i)} \cdot 5i\right)^2 - (3 - 4i)^2
> $$
> con $(1-i)^2 = -2i$, $(1+i)(1-i) = 2$, $(1+2i)(1-2i) = 5$ (il $5$ si semplifica con il $5i$)
> $$
> = (2i - 1)^4 - (3 - 4i)^2.
> $$
> Osservando che $(2i - 1)^2 = -4 + 1 - 4i = -3 - 4i$, si ha
> $$
> = \underbrace{(-3 - 4i)^2}_{a^2} - \underbrace{(3 - 4i)^2}_{b^2} = \underbrace{(-8i)}_{a+b}\underbrace{(-6)}_{a-b} = 48i
> $$

### 2023 v1, domanda 3

Dato un numero complesso $z \neq 0$, quale affermazione sulle sue radici quadrate è vera?

- a) sono tutte reali se e solo se $\mathrm{Im}(z) = 0$ e $\mathrm{Re}(z) > 0$
- b) esistono solo se $z \in \mathbb{R}$
- c) almeno una ha parte reale strettamente positiva
- d) hanno lo stesso modulo di $z$

> [!example]- Soluzione
> **a**. b) è FALSA. Sia $z = i \notin \mathbb{R}$. Allora $w^2 - i = 0$:
> $$
> w^2 = e^{i\frac{\pi}{2}}
> $$
> $$
> w_k = e^{i\frac{\frac{\pi}{2} + 2k\pi}{2}}, \quad k = 0, 1
> $$
> $$
> w_0 = e^{i\frac{\pi}{4}} = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}
> $$
> $$
> w_1 = e^{i\frac{3}{4}\pi} = -\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}
> $$
> *(il prof scrive $\frac{3}{4}\pi$ nell'esponente di $w_1$, per $k = 1$ la formula dà $\frac{5}{4}\pi$, che è l'angolo del valore scritto accanto)*
> c) è FALSA. Sia $z = -1$. Allora $w^2 = -1$ ha soluzioni $w_{1,2} = \pm i$ e $\mathrm{Re}(+i) = \mathrm{Re}(-i) = 0$.
> d) è FALSA. Se $z = \rho e^{i\theta}$ e $w^2 = z$ allora si ha
> $$
> w_k = \sqrt{\rho}\, e^{i\frac{\theta + 2k\pi}{2}}, \quad k = 0, 1
> $$
> In particolare, $\vert w_k\vert = \sqrt{\rho}$.
> a) è VERA.
> “$\Leftarrow$": se $\mathrm{Im}(z) = 0$ e $\mathrm{Re}(z) > 0$ allora $z \in \mathbb{R}^+$. In particolare, $w^2 = z$ ha soluzioni (reali) $w_{1,2} = \pm\sqrt{z}$.
> “$\Rightarrow$": siano $w_1, w_2 \in \mathbb{R}$ le radici quadrate di $z$. Allora $w_1^2 = w_2^2 = z$, con $w_1^2 \in \mathbb{R}$, $w_2^2 \in \mathbb{R}$, $z \in \mathbb{R}$.

### 2023 v2, domanda 7

Dato un numero complesso $z \neq 0$, quale affermazione sulle sue radici cubiche è vera?

- a) sono tutte reali se e solo se $\mathrm{Im}(z) = 0$ e $\mathrm{Re}(z) > 0$
- b) esistono solo se $z \in \mathbb{R}$
- c) almeno una ha parte reale strettamente positiva
- d) hanno lo stesso modulo di $z$

> [!example]- Soluzione
> **c**. a) è FALSA: consideriamo le radici cubiche di $1$:
> $$
> z_k = 1 \cdot e^{i\frac{2k\pi}{3}}, \quad k = 0, 1, 2
> $$
> $$
> k = 0 \Rightarrow z_0 = 1
> $$
> $$
> k = 1 \Rightarrow z_1 = e^{i\frac{2}{3}\pi} = -\frac{1}{2} + \frac{\sqrt{3}}{2}i
> $$
> $$
> k = 2 \Rightarrow z_2 = e^{i\frac{4}{3}\pi} = -\frac{1}{2} - \frac{\sqrt{3}}{2}i
> $$
> b) è FALSA: consideriamo le radici cubiche di $i \notin \mathbb{R}$:
> $$
> z_k = e^{i\frac{\frac{\pi}{2} + 2k\pi}{3}}, \quad k = 0, 1, 2
> $$
> $$
> k = 0: z_0 = e^{i\frac{\pi}{6}} = \frac{\sqrt{3}}{2} + \frac{1}{2}i
> $$
> $$
> k = 1: z_1 = e^{i\frac{5}{6}\pi} = -\frac{\sqrt{3}}{2} + \frac{1}{2}i
> $$
> $$
> k = 2: z_2 = e^{i\frac{3}{2}\pi} = -i
> $$
> d) è FALSA:
> $$
> z_k = \sqrt[3]{\vert z\vert}\, e^{i\frac{\theta + 2k\pi}{3}} \Rightarrow \vert z_k\vert = \sqrt[3]{\vert z\vert} \cdot \left\vert e^{i\frac{\theta + 2k\pi}{3}}\right\vert = \sqrt[3]{\vert z\vert}
> $$
> c) è VERA: le radici sono separate da angoli di ampiezza $\frac{2}{3}\pi$. Poiché $\frac{2}{3}\pi + \frac{2}{3}\pi = \frac{4}{3}\pi > \pi$ significa che almeno una radice si trova nella semicirconferenza contenuta nel I e IV quadrante.
> CASI LIMITE: *(due circonferenze con le tre radici, con $z_2$ in basso a destra e $z_1$ in alto a destra, in ogni caso con $\mathrm{Re} > 0$)*

### 2023 v1, domanda 7

Sia $z = \sqrt{2}\,\frac{1 + i}{2}$. Allora $z^7$ vale

- a) $-1$
- b) $\sqrt{2}\,\frac{1 + i}{2}$
- c) $\sqrt{2}\,\frac{1 - i}{2}$
- d) $\sqrt{2}\,\frac{i - 1}{2}$

> [!example]- Soluzione
> **c**. $$z = \sqrt{2}\,\frac{1 + i}{2} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i = \cos\left(\frac{\pi}{4}\right) + i\sin\left(\frac{\pi}{4}\right) = e^{i\frac{\pi}{4}}$$
> $$
> z^7 \overset{\text{DE MOIVRE}}{=} \cos\left(\frac{7}{4}\pi\right) + i\sin\left(\frac{7}{4}\pi\right) = \frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2} = \sqrt{2}\,\frac{1 - i}{2}
> $$

### 2023 v2, domanda 4

Sia $z = \sqrt{2}\,\frac{1 - i}{2}$. Allora $z^7$ vale

- a) $-1$
- b) $\sqrt{2}\,\frac{1 + i}{2}$
- c) $\sqrt{2}\,\frac{1 - i}{2}$
- d) $\sqrt{2}\,\frac{i - 1}{2}$

> [!example]- Soluzione
> **b**. $$z = \sqrt{2}\,\frac{1 - i}{2} = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i = \cos\left(\frac{7}{4}\pi\right) + i\sin\left(\frac{7}{4}\pi\right) = e^{i\frac{7}{4}\pi}$$
> $$
> z^7 \overset{\text{DE MOIVRE}}{=} \cos\left(\frac{49}{4}\pi\right) + i\sin\left(\frac{49}{4}\pi\right) = \cos\left(12\pi + \frac{\pi}{4}\right) + i\sin\left(12\pi + \frac{\pi}{4}\right)
> $$
> $$
> = \cos\left(\frac{\pi}{4}\right) + i\sin\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} = \sqrt{2}\,\frac{1 + i}{2}
> $$

### 2023 v1, domanda 8

L'insieme $\vert z - 1\vert + \vert z + i\vert = 2$ è descritto nel piano complesso da

- a) due punti
- b) una retta
- c) una parabola
- d) un'ellisse

> [!example]- Soluzione
> **d**. MODO ALGEBRICO: $z = x + iy$
> $$
> \vert (x - 1) + iy\vert + \vert x + i(y + 1)\vert = 2 \iff \sqrt{(x - 1)^2 + y^2} + \sqrt{x^2 + (y + 1)^2} = 2
> $$
> ... (lungo)
> MODO GEOMETRICO: $\vert z - 1\vert + \vert z + i\vert = 2 \Rightarrow \vert z - 1\vert + \vert z - (-i)\vert = 2$
> È il luogo geometrico dei punti $P \in \mathbb{R}^2$ t.c. $d(P, F_1) + d(P, F_2) = 2$, cioè è un'ellisse. *(figura: l'ellisse con fuochi $F_1(1, 0)$ e $F_2(0, -1)$)*

### 2023 v2, domanda 1

L'insieme $\vert z - 1\vert - \vert z + i\vert = 0$ è descritto nel piano complesso da

- a) due punti
- b) una retta
- c) una parabola
- d) un'ellisse

> [!example]- Soluzione
> **b**. METODO ALGEBRICO: $\vert z - 1\vert - \vert z + i\vert = 0 \Rightarrow \vert z - 1\vert = \vert z + i\vert$, con $z = x + iy$:
> $$
> \vert (x - 1) + iy\vert = \vert x + i(y + 1)\vert
> $$
> $$
> \sqrt{(x - 1)^2 + y^2} = \sqrt{x^2 + (y + 1)^2}
> $$
> $$
> (x - 1)^2 + y^2 = x^2 + (y + 1)^2
> $$
> $$
> x^2 - 2x + 1 + y^2 = x^2 + y^2 + 2y + 1
> $$
> $$
> -2x = 2y \Rightarrow y = -x
> $$
> METODO GEOMETRICO: $\vert z - 1\vert - \vert z + i\vert = 0 \Rightarrow \vert z - 1\vert = \vert z + i\vert \Rightarrow \vert z - (+1)\vert = \vert z - (-i)\vert$
> $\{z \in \mathbb{C} : \vert z - 1\vert = \vert z + i\vert\} \iff \{P \in \mathbb{R}^2 : d(P, A) = d(P, B)\}$: asse del segmento $AB$, con $A(1, 0)$ e $B(0, -1)$.

### 2022 A, domanda 4

La soluzione di

$$
\frac{2z}{1 + i} = -1
$$

è:

- a) $\frac{1}{2} - \frac{1}{2}i$
- b) $-\frac{1}{2} - \frac{1}{2}i$
- c) $-\frac{1}{2} + \frac{1}{2}i$
- d) nessuna delle precedenti

> [!example]- Soluzione
> **b**. $$\frac{2z}{1 + i} = -1$$
> $$
> 2z = -1 - i
> $$
> $$
> z = -\frac{1}{2} - \frac{i}{2} = -\frac{1}{2} - \frac{1}{2}i
> $$

### 2022 A, domanda 5

Sia $z = \frac{1 + i}{2 - 2i}$. Allora $z^{22}$ vale

- a) $\frac{1}{2} + \frac{\sqrt{3}}{2}i$
- b) $-\frac{1}{2^{22}}$
- c) $\frac{1}{2^{22}}$
- d) $\frac{1}{2} - \frac{\sqrt{3}}{2}i$

> [!example]- Soluzione
> **b**. $$z = \frac{1 + i}{2 - 2i} = \frac{1}{2} \cdot \frac{1 + i}{1 - i} \cdot \frac{1 + i}{1 + i} = \frac{1}{2} \cdot \frac{(i + 1)^2}{1 - i^2} = \frac{1}{2} \cdot \frac{i^2 + 2i + 1}{2} = \frac{1}{2}i$$
> $$
> z^{22} = \left(\frac{1}{2}i\right)^{22} = \frac{1}{2^{22}} i^{22} = \frac{1}{2^{22}} \left(i^2\right)^{11} = \frac{1}{2^{22}} (-1)^{11} = -\frac{1}{2^{22}}
> $$

### 2019, compito 1 domanda 4

Sia $a + ib = (\sqrt{3} + i)^{19}$. Allora:

- a) $a < 0,\ b < 0$
- b) $a > 0,\ b > 0$
- c) $a < 0,\ b > 0$
- d) $a > 0,\ b < 0$

> [!example]- Soluzione
> **a**. $\sqrt{3} + i = 2e^{i\pi/6}$, argomento $19\pi/6 = 3\pi + \pi/6$, cioè $\pi + \pi/6$: terzo quadrante. *(conto mio, la chiave dà solo la risposta)*

### 2019, compito 2 domanda 2

Sia $a + ib = (1 + \sqrt{3}\,i)^{17}$. Allora:

- a) $a > 0,\ b < 0$
- b) $a > 0,\ b > 0$
- c) $a < 0,\ b > 0$
- d) $a < 0,\ b < 0$

> [!example]- Soluzione
> **a**. $1 + \sqrt{3}\,i = 2e^{i\pi/3}$, argomento $17\pi/3 = 4\pi + 5\pi/3$: quarto quadrante. *(conto mio, la chiave dà solo la risposta)*

### simulazione, domanda 3

Una delle radici quinte del numero complesso $-1 + \sqrt{3}i$ è

- a) $-1 - \sqrt{3}i$
- b) $\dfrac{\sqrt{3} + i}{2^{4/5}}$
- c) $\sqrt[5]{2}\left(\frac{1}{2} + \frac{\sqrt{3}}{2}i\right)$
- d) $\sqrt[5]{2}\left(-\frac{1}{2} - \frac{\sqrt{3}}{2}i\right)$

> [!example]- Soluzione
> **d**. $-1 + \sqrt{3}i = 2e^{i\frac{2\pi}{3}}$, le radici quinte sono $\sqrt[5]{2}\,e^{i\left(\frac{2\pi}{15} + \frac{2k\pi}{5}\right)}$; per $k = 3$ l'angolo è $\frac{4\pi}{3}$, cioè $\sqrt[5]{2}\left(-\frac{1}{2} - \frac{\sqrt{3}}{2}i\right)$. *(conto mio, la chiave dà solo la risposta)*

## Esercizi delle provette

### 2025, esercizio 1, 8 punti

Determinare tutte le soluzioni complesse dell'equazione:

$$
\vert z\vert^2 - \overline{(z + i)} = \vert z + i\vert^2
$$

> [!example]- Soluzione
> $z = x + iy$:
> $$
> \vert z\vert^2 - \overline{(z+i)} = \vert z+i\vert^2
> $$
> $$
> \vert x + iy\vert^2 - \overline{(x + i(y+1))} = \vert x + i(y+1)\vert^2
> $$
> $$
> x^2 + y^2 - (x - i(y+1)) = x^2 + (y+1)^2
> $$
> $$
> x^2 + y^2 - x + i(y+1) = x^2 + y^2 + 2y + 1
> $$
> $$
> -x - 2y - 1 + i(y+1) = 0
> $$
> $$
> \Leftrightarrow \begin{cases} -x - 2y - 1 = 0 \\ y + 1 = 0 \end{cases} \quad \begin{cases} -x + 2 - 1 = 0 \\ y = -1 \end{cases} \quad \begin{cases} x = 1 \\ y = -1 \end{cases} \to z = 1 - i
> $$
>
> Modo 2. Riscrivendo l'equazione come
> $$
> -\overline{(z+i)} = \underbrace{\vert z+i\vert^2}_{\in\mathbb{R}} + \underbrace{\vert z\vert^2}_{\in\mathbb{R}}
> $$
> si evince subito che $\overline{(z+i)} \in \mathbb{R} \to z + i \in \mathbb{R} \to z = x - i$, $x \in \mathbb{R}$.
>
> Sostituendo nell'equazione:
> $$
> \vert x - i\vert^2 - \overline{(x - i + i)} = \vert x - i + i\vert^2
> $$
> $$
> x^2 + 1 - x = x^2
> $$
> $$
> \to x = 1
> $$
> ovvero $z = 1 - i$.

### 2024, esercizio 1, 6 punti

Si determinino tutte le soluzioni complesse dell'equazione:

$$
z^2 - \vert\bar{z} - 3\vert = 3.
$$

> [!example]- Soluzione
> Sia $z = a + ib$. L'equazione si riscrive come:
> $$
> a^2 - b^2 + 2abi - \vert a - ib - 3\vert = 3 \qquad \text{con } a, b \in \mathbb{R},
> $$
> ovvero:
> $$
> a^2 - b^2 + 2abi - \sqrt{(a-3)^2 + b^2} = 3.
> $$
> Da cui, eguagliando parte reale e parte immaginaria
> $$
> \begin{cases} 2ab = 0 \\ a^2 - b^2 - 3 = \sqrt{(a-3)^2 + b^2} \end{cases}
> $$
> La prima equazione ha soluzioni $a = 0$ e $b = 0$. Sostituendo nella seconda, otteniamo i sistemi:
> $$
> \begin{cases} a = 0 \\ -b^2 - 3 = \sqrt{9 + b^2} \end{cases} \qquad \begin{cases} b = 0 \\ a^2 - 3 = \vert a - 3\vert \end{cases}
> $$
> La cui seconda equazione non ha soluzioni (primo sistema).
>
> La cui seconda equazione (secondo sistema) è:
> $a^2 = a$ (se $a \ge 3$) $\to$ sol: $a = 0 \vee a = 1$ N.A.
> oppure (se $a \le 3$) $a^2 + a - 6 = 0 \to$ sol: $a = 2 \vee a = -3$
>
> In conclusione, le soluzioni sono $z = 2$, $z = -3$.

### 2023 v1, esercizio 1, 6 punti

Si determinino tutte le soluzioni complesse del sistema:

$$
\begin{cases} \vert z - i + 1\vert = 1 \\ \mathrm{Re}(z) - \mathrm{Im}(z) = -2 \end{cases}
$$

> [!example]- Soluzione
> Con $z = x + iy$:
> $$
> \begin{cases} \vert (x + 1) + i(y - 1)\vert = 1 \\ x - y = -2 \end{cases} \quad \begin{cases} \sqrt{(x + 1)^2 + (y - 1)^2} = 1 \\ x = y - 2 \end{cases}
> $$
> $$
> \begin{cases} (x + 1)^2 + (y - 1)^2 = 1 \\ x = y - 2 \end{cases} \quad \begin{cases} (y - 1)^2 + (y - 1)^2 = 1 \\ x = y - 2 \end{cases} \quad \begin{cases} 2(y - 1)^2 = 1 \\ x = y - 2 \end{cases} \quad \begin{cases} (y - 1)^2 = \frac{1}{2} \\ x = y - 2 \end{cases}
> $$
> $$
> \begin{cases} y = 1 \pm \frac{\sqrt{2}}{2} \\ x = y - 2 \end{cases}
> $$
> $$
> \begin{cases} y = 1 + \frac{\sqrt{2}}{2} \\ x = -1 + \frac{\sqrt{2}}{2} \end{cases} \Rightarrow z_1 = \left(-1 + \frac{\sqrt{2}}{2}\right) + i\left(1 + \frac{\sqrt{2}}{2}\right)
> $$
> $$
> \begin{cases} y = 1 - \frac{\sqrt{2}}{2} \\ x = -1 - \frac{\sqrt{2}}{2} \end{cases} \Rightarrow z_2 = \left(-1 - \frac{\sqrt{2}}{2}\right) + i\left(1 - \frac{\sqrt{2}}{2}\right)
> $$

### 2023 v2, esercizio 1, 6 punti

Si determinino tutte le soluzioni complesse del sistema:

$$
\begin{cases} \vert z - i - 1\vert = 1 \\ \mathrm{Re}(z) + \mathrm{Im}(z) = 2 \end{cases}
$$

> [!example]- Soluzione
> Con $z = x + iy$:
> $$
> \begin{cases} \vert (x - 1) + i(y - 1)\vert = 1 \\ x + y = 2 \end{cases} \quad \begin{cases} \vert (-y + 1) + i(y - 1)\vert = 1 \\ x = -y + 2 \end{cases}
> $$
> $$
> \begin{cases} (-y + 1)^2 + (y - 1)^2 = 1 \\ x = -y + 2 \end{cases} \quad \begin{cases} (y - 1)^2 = \frac{1}{2} \\ x = -y + 2 \end{cases} \quad \begin{cases} y - 1 = \pm\sqrt{\frac{1}{2}} \\ x = -y + 2 \end{cases}
> $$
> $$
> \begin{cases} y = 1 \pm \frac{\sqrt{2}}{2} \\ x = -y + 2 \end{cases}
> $$
> $$
> \begin{cases} y = 1 + \frac{\sqrt{2}}{2} \\ x = 1 - \frac{\sqrt{2}}{2} \end{cases} \Rightarrow z_1 = \left(1 - \frac{\sqrt{2}}{2}\right) + i\left(1 + \frac{\sqrt{2}}{2}\right)
> $$
> $$
> \begin{cases} y = 1 - \frac{\sqrt{2}}{2} \\ x = 1 + \frac{\sqrt{2}}{2} \end{cases} \Rightarrow z_2 = \left(1 + \frac{\sqrt{2}}{2}\right) + i\left(1 - \frac{\sqrt{2}}{2}\right)
> $$

### 2022 A, esercizio 1, 6 punti

Determinare tutti numeri complessi $z$ che risolvono la seguente equazione:

$$
z^3 = \overline{z^2},
$$

si determini il modulo di tutte le soluzioni trovate e si interpreti geometricamente il risultato.

> [!example]- Soluzione
> $\rho = \vert z\vert$, $\theta = \arg(z)$, $z = \rho e^{i\theta}$.
> Troviamo il modulo delle soluzioni:
> $$
> z^3 = \overline{z^2} \to \vert z^3\vert = \vert\overline{z^2}\vert
> $$
> $$
> \rho^3 = \rho^2
> $$
> $$
> \rho^3 - \rho^2 = 0
> $$
> $$
> \rho^2(\rho - 1) = 0
> $$
> $\rho = 0 \to z_0 = 0$ ok; $\rho = 1 \to z = e^{i\theta}$.
> Per $\rho = 1$ troviamo l'argomento delle soluzioni:
> $$
> z^3 = \overline{z^2}
> $$
> $$
> \left(e^{i\theta}\right)^3 = \overline{\left(e^{i\theta}\right)^2}
> $$
> $$
> e^{3i\theta} = \overline{e^{2i\theta}}
> $$
> $$
> e^{3i\theta} = e^{-2i\theta}
> $$
> $$
> \to 3\theta = -2\theta + 2k\pi
> $$
> $$
> 5\theta = 2k\pi
> $$
> $$
> \theta = \frac{2k\pi}{5}
> $$
> $$
> k = 1 \to z_1 = e^{i\frac{2}{5}\pi} = \cos\left(\frac{2}{5}\pi\right) + i\sin\left(\frac{2}{5}\pi\right)
> $$
> $$
> k = 2 \to z_2 = e^{i\frac{4}{5}\pi} = \cos\left(\frac{4}{5}\pi\right) + i\sin\left(\frac{4}{5}\pi\right)
> $$
> $$
> k = 3 \to z_3 = e^{i\frac{6}{5}\pi} = \cos\left(\frac{6}{5}\pi\right) + i\sin\left(\frac{6}{5}\pi\right)
> $$
> $$
> k = 4 \to z_4 = e^{i\frac{8}{5}\pi} = \cos\left(\frac{8}{5}\pi\right) + i\sin\left(\frac{8}{5}\pi\right)
> $$
> $$
> k = 5 \to z_5 = e^{i\frac{10}{5}\pi} = \cos(2\pi) + i\sin(2\pi) = 1
> $$
> $z_1, z_2, z_3, z_4, z_5$ sono le radici quinte dell'unità in $\mathbb{C}$, infatti:
> $$
> \left(e^{i\frac{2}{5}\pi}\right)^5 = e^{i(2\pi)} = \cos(2\pi) + i\sin(2\pi) = 1
> $$
> *(figura: $z_0$ nell'origine, $z_1, \dots, z_5$ sulla circonferenza unitaria)*

## Esercizi dei fogli e delle esercitazioni

### Esercizi svolti complessi (foglio n. 2 del 22/09/2022), esercizio 2
Mettere in forma trigonometrica e esponenziale i seguenti numeri complessi
- (i) $z = -1$
- (ii) $z = 3 - 3\sqrt{3}\,i$
- (iii) $z = i(1 + i)$
- (iv) $z = \dfrac{1 + i}{1 - i}$
- (v) $z = \dfrac{i(i - 1)}{(i + 1)^2}$

> [!example]- Soluzione
> - (i) $z = \cos\pi + i\sin\pi$; $z = e^{i\pi}$
> - (ii) $z = 6\left(\cos\dfrac{5}{3}\pi + i\sin\dfrac{5}{3}\pi\right)$; $z = 6e^{i\frac{5\pi}{3}} = 6e^{-i\frac{\pi}{3}}$
> - (iii) $z = \sqrt{2}\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)$; $z = \sqrt{2}\,e^{i\frac{3\pi}{4}}$
> - (iv) $z = \cos\dfrac{\pi}{2} + i\sin\dfrac{\pi}{2}$; $z = e^{i\frac{\pi}{2}}$
> - (v) $z = \dfrac{\sqrt{2}}{2}\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)$; $z = \dfrac{\sqrt{2}}{2}\,e^{i\frac{3\pi}{4}}$
>
> *(il foglio dà solo il risultato)*

### Esercizi svolti complessi, esercizio 3
Rappresentare graficamente i seguenti insiemi:
- (i) $\vert z + 1 - i\vert > \vert z - 1\vert$
- (ii) $\vert z - i\vert \leq 2$
- (iii) $\begin{cases} \vert z - 1\vert > 3 \\ 1 < \mathrm{Re}(z) < 4 \end{cases}$
- (iv) $\vert z - i\vert + \vert z + i\vert = 4$ *(difficile)*

> [!example]- Soluzione
> Il foglio dà solo i disegni.
> - (i) semipiano aperto $y < 2x + \tfrac{1}{2}$ (punti più vicini a $1$ che a $-1 + i$)
> - (ii) disco di centro $i$ e raggio $2$, bordo compreso
> - (iii) esterno della circonferenza di centro $1$ e raggio $3$ (bordo escluso) dentro la striscia $1 < x < 4$: due pezzi, uno sopra e uno sotto
> - (iv) ellisse di fuochi $i$ e $-i$, $a = 2$, $c = 1$, $b^2 = 3$: $\dfrac{x^2}{3} + \dfrac{y^2}{4} = 1$
>
> *(descrizione dalle note, il foglio dà solo il disegno)*

### Esercizi svolti complessi, esercizio 4
Rappresentare graficamente gli insiemi di numeri complessi che soddisfano le seguenti condizioni:
- (i) $\begin{cases} \vert z + \bar{z}\vert \leq 1 \\ z\bar{z} \geq 1 \end{cases}$
- (ii) $\mathrm{Re}(z)\big(\vert z - i\vert - 2\big) > 0$
- (iii) $\big(\vert z - 1\vert - 2\big)\big(\vert z + 1\vert - 2\big) \leq 0$
- (iv) $\mathrm{Re}(z + i\bar{z})\,\mathrm{Re}(z) < z\bar{z}$
- (v) $\big(\mathrm{Re}(z)^2 - \mathrm{Im}(z)\big)\big(\vert z\vert - 1\big) \leq 0$
- (vi) $\big\vert\vert z - 1\vert - \vert z + 2i\vert\big\vert > 1$ *(difficile)*

> [!example]- Soluzione
> Il foglio dà solo i disegni.
> - (i) $\vert 2x\vert \leq 1$ e $x^2 + y^2 \geq 1$: la striscia $-\tfrac{1}{2} \leq x \leq \tfrac{1}{2}$ privata dell'interno del disco unitario
> - (ii) $x > 0$ e $\vert z - i\vert > 2$, oppure $x < 0$ e $\vert z - i\vert < 2$ (bordi esclusi)
> - (iii) i due dischi chiusi di centro $1$ e $-1$, raggio $2$, privati della lente in cui si sovrappongono (l'interno della lente è escluso, i suoi archi di bordo no)
> - (iv) $(x + y)x < x^2 + y^2 \iff y(y - x) > 0$: i due angoli ($y > 0$ e $y > x$) oppure ($y < 0$ e $y < x$), bordi esclusi
> - (v) $\big(x^2 - y\big)\big(\vert z\vert - 1\big) \leq 0$: (sotto o sulla parabola $y = x^2$ e dentro o sul disco unitario) oppure (sopra o sulla parabola e fuori o sul disco unitario)
> - (vi) nessuna descrizione nelle note; il disegno del foglio mostra due regioni separate, con il bordo tratteggiato
>
> *(descrizione di (i)-(v) dalle note, il foglio dà solo il disegno)*

### Esercizi svolti complessi, esercizio 5
Risolvere le seguenti equazioni in $\mathbb{C}$, rappresentandone poi le soluzioni nel piano complesso:
- (i) $(z + 1)^3 = -i$
- (ii) $\bar{z}^2 + 2z = 0$
- (iii) $3\bar{z} = i\big(\vert z\vert^2 + 2\big)$
- (iv) $z^5 = -16\bar{z}$
- (v) $z^4 = \vert z\vert^2 + 2$
- (vi) $i\,\mathrm{Im}(z) + \vert z\vert^2 = z^2 - 1$

> [!example]- Soluzione
> Risultati del foglio:
> - (i) $z = -1 + i$, $z = -1 \pm \dfrac{\sqrt{3}}{2} - \dfrac{1}{2}i$
> - (ii) $z = 0$, $z = -2$, $z = 1 \pm i\sqrt{3}$
> - (iii) $z = -i$, $z = -2i$
> - (iv) $z = 0$; $z = 2e^{i\left(\frac{\pi}{6} + k\frac{\pi}{3}\right)}$, $k \in \mathbb{Z}$
> - (v) $z = \sqrt{2}$, $z = -\sqrt{2}$, $z = \sqrt{2}\,i$, $z = -\sqrt{2}\,i$
> - (vi) nessuna soluzione
>
> Svolgimento del foglio, (i): tramite il cambio di variabile $w = z + 1$, ci riconduciamo a studiare l'equazione $w^3 = -i$, ossia a trovare le radici terze di $-i$. Il numero complesso $-i$ può essere scritto in forma trigonometrica come $\cos\left(\tfrac{3}{2}\pi\right) + i\sin\left(\tfrac{3}{2}\pi\right)$; pertanto le sue radici terze sono
> $$
> w_k = \cos\left(\frac{\pi}{2} + k\frac{2}{3}\pi\right) + i\sin\left(\frac{\pi}{2} + k\frac{2}{3}\pi\right), \quad k = 0, 1, 2
> $$
> Ricordando che le soluzioni dell'equazione di partenza si trovano con $z = -1 + w_k$, esse sono:
> $$
> z = -1 + \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = -1 + i
> $$
> $$
> z = -1 + \cos\frac{7}{6}\pi + i\sin\frac{7}{6}\pi = -1 - \frac{\sqrt{3}}{2} - \frac{1}{2}i
> $$
> $$
> z = -1 + \cos\frac{11}{6}\pi + i\sin\frac{11}{6}\pi = -1 + \frac{\sqrt{3}}{2} - \frac{1}{2}i
> $$
> Svolgimento del foglio, (ii): qui possiamo indifferentemente utilizzare la forma algebrica o la forma trigonometrica di $z$. Utilizziamo la forma algebrica: scriviamo $z = x + iy$, con $x, y \in \mathbb{R}$. L'equazione data diventa
> $$
> (x - iy)^2 + 2(x + iy) = 0 \iff x^2 - y^2 + 2x + 2iy(1 - x) = 0
> $$
> $$
> \begin{cases} x^2 - y^2 + 2x = 0 \\ 2y(1 - x) = 0 \end{cases}
> $$
> La seconda equazione è verificata se e solo se $y = 0$ oppure $x = 1$. Pertanto si ha:
> $$
> \begin{cases} x^2 + 2x = 0 \\ y = 0 \end{cases} \ \vee \ \begin{cases} 1 - y^2 + 2 = 0 \\ x = 1 \end{cases} \quad \text{ovvero} \quad \begin{cases} x = 0 \ \vee \ x = -2 \\ y = 0 \end{cases} \ \vee \ \begin{cases} x = 1 \\ y = \pm\sqrt{3} \end{cases}
> $$
> Le soluzioni sono quindi $z = 0$, $z = -2$, $z = 1 - \sqrt{3}\,i$, $z = 1 + \sqrt{3}\,i$.
> Svolgimento del foglio, (iv): per risolvere l'equazione $z^5 = -16\bar{z}$ è decisamente meglio sfruttare la forma trigonometrica (o, meglio ancora, esponenziale) dei numeri complessi: utilizzare la forma algebrica richiederebbe di calcolare la potenza quinta di un binomio, e di risolvere poi equazioni di quinto grado. Grazie alle formule di de Moivre, è invece molto più semplice calcolare potenze di complessi in forma trigonometrica. Scriviamo quindi, con $z = \rho(\cos\theta + i\sin\theta)$, $\rho \geq 0$, $\theta \in \mathbb{R}$:
> $$
> z^5 = \rho^5\big(\cos(5\theta) + i\sin(5\theta)\big) \qquad \bar{z} = \rho\big(\cos(-\theta) + i\sin(-\theta)\big)
> $$
> possiamo anche scrivere $-1 = \cos\pi + i\sin\pi$ e utilizzare al secondo membro dell'equazione la formula per il prodotto di numeri complessi: l'equazione data è equivalente a
> $$
> \rho^5\big(\cos(5\theta) + i\sin(5\theta)\big) = 16\rho\big(\cos(\pi - \theta) + i\sin(\pi - \theta)\big) \tag{A}
> $$
> Ora, eguagliando i moduli dei due numeri complessi a destra e a sinistra dell'equazione otteniamo $\rho^5 = 16\rho$, dove $\rho$ è per definizione un numero reale e non-negativo: l'equazione in $\rho$ va quindi risolta nei reali, dove ha come uniche soluzioni $\rho = 0$ e $\rho = 2$.
> Per $\rho = 0$, otteniamo il numero complesso $z = 0$, che dunque è una soluzione dell'equazione di partenza.
> Consideriamo invece $\rho = 2$: quando questa è verificata, dall'equazione (A) otteniamo
> $$
> \begin{cases} \cos(5\theta) = \cos(\pi - \theta) \\ \sin(5\theta) = \sin(\pi - \theta) \end{cases} \iff 5\theta = \pi - \theta + 2k\pi, \ k \in \mathbb{Z}
> $$
> Risolvendo in $\theta$, si ha $\theta = \dfrac{\pi}{6} + k\dfrac{\pi}{3}$, $k = 0, 1, \dots, 5$.
> In definitiva, l'equazione data ha $7$ soluzioni: una è $z = 0$, le altre sono $z_k = 2\left(\cos\left(\tfrac{\pi}{6} + k\tfrac{\pi}{3}\right) + i\sin\left(\tfrac{\pi}{6} + k\tfrac{\pi}{3}\right)\right)$, $k = 0, 1, \dots, 5$.
> Svolgimento di (iii), (v), (vi) dalle note:
> - (iii) $3x - 3iy = i\big(x^2 + y^2 + 2\big)$: parti reali $3x = 0$, quindi $x = 0$; parti immaginarie $-3y = x^2 + y^2 + 2$, con $x = 0$: $y^2 + 3y + 2 = 0$, $y = -1$ oppure $y = -2$.
> - (v) è l'esempio della slide 36.
> - (vi) parti reali: $x^2 + y^2 = x^2 - y^2 - 1$, cioè $2y^2 = -1$: impossibile.
>
> *(svolgimento di (iii), (v), (vi) dalle note, il foglio dà solo il risultato)*

### Esercizi svolti complessi, esercizio 6
Trovare per quale valore di $\lambda \in \mathbb{C}$ si ha che $i$ è una soluzione dell'equazione
$$
z^3 + \lambda z^2 - (2 + 3i)z - 2 = 0.
$$
Per tale valore di $\lambda$, trovare le altre soluzioni dell'equazione.

> [!example]- Soluzione
> Risultato del foglio: $\lambda = 1 - 3i$; $z_2 = 2i$, $z_3 = -1$.
> Sostituendo $z = i$: $-i - \lambda - (2 + 3i)i - 2 = 0$, con $(2 + 3i)i = -3 + 2i$: $1 - 3i - \lambda = 0$, quindi $\lambda = 1 - 3i$.
> $$
> z^3 + (1 - 3i)z^2 - (2 + 3i)z - 2 = (z - i)\big(z^2 + (1 - 2i)z - 2i\big) = (z - i)(z + 1)(z - 2i)
> $$
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Esercizi svolti complessi, esercizio 7
Trovare per quali valori di $\lambda \in \mathbb{C}$ si ha che $z = 2i$ è radice del polinomio
$$
p_\lambda(z) = z^4 - \lambda z^3 + 9z^2 - \lambda^2 z + 20.
$$
Per tali valori, fattorizzare il polinomio $p_\lambda$ in $\mathbb{R}$ e in $\mathbb{C}$.

> [!example]- Soluzione
> Risultato del foglio:
> - $\lambda = 0$: $p_0(z) = (z^2 + 4)(z^2 + 5)$ in $\mathbb{R}$; $p_0(z) = (z - 2i)(z + 2i)(z - \sqrt{5}\,i)(z + \sqrt{5}\,i)$ in $\mathbb{C}$.
> - $\lambda = 4$: $p_4(z) = (z^2 + 4)(z^2 - 4z + 5)$ in $\mathbb{R}$; $p_4(z) = (z - 2i)(z + 2i)(z - 2 - i)(z - 2 + i)$ in $\mathbb{C}$.
> - Dalle note: $p_\lambda(2i) = 16 + 8i\lambda - 36 - 2i\lambda^2 + 20 = 2i\lambda(4 - \lambda)$, quindi $\lambda = 0$ oppure $\lambda = 4$.
>
> *(svolgimento dalle note, il foglio dà solo il risultato)*

### Tutoraggio 2 (foglio n. 2 del 25/09/2023), esercizio 3
Determinate le soluzioni delle equazioni:
- (i) $\bar{z}\,(\mathrm{Im}\,z + \mathrm{Re}\,z) = z$
- (ii) $\dfrac{z}{1 + i} + \bar{z} = i + 1$
- (iii) $\vert z\vert\,\bar{z} = -\sqrt{2} + \sqrt{2}\,i$

> [!example]- Soluzione
> (i) Poniamo $z = x + iy$:
> $$
> (x - iy)(y + x) = x + iy \iff xy + x^2 - iy(y + x) = x + iy \iff xy + x^2 - x - i(y^2 + yx + y) = 0
> $$
> $$
> \iff \begin{cases} x^2 + xy - x = 0 \\ y^2 + yx + y = 0 \end{cases} \iff \begin{cases} x(x + y - 1) = 0 \\ y(y + x + 1) = 0 \end{cases}
> $$
> Ponendo $x = 0$, la prima equazione è verificata, mentre la seconda diventa $y(y + 1) = 0$, vera per $y = 0$ o $y = -1$. Analogamente, ponendo $y = 0$ la seconda equazione è verificata, mentre la prima è vera per $x = 0$ o $x = 1$. Pertanto le soluzioni dell'equazione saranno $z_1 = 0$, $z_2 = 0 - i = -i$, $z_3 = 1 + i0 = 1$.
> (ii)
> $$
> \frac{z}{1 + i} + \bar{z} = i + 1 \iff \frac{z(1 - i)}{2} + \bar{z} = i + 1 \iff z(1 - i) + 2\bar{z} = 2i + 2
> $$
> $$
> \iff (x + iy)(1 - i) + 2(x - iy) = 2i + 2 \iff x + y + i(y - x) + 2x - 2yi = 2 + 2i
> $$
> $$
> \iff 3x + y + i(-y - x) = 2 + 2i \iff \begin{cases} 3x + y = 2 \\ -y - x = 2 \end{cases} \iff \begin{cases} y = -4 \\ x = 2 \end{cases}
> $$
> Pertanto la soluzione è data da $z = 2 - 4i$.
> (iii) Considerando il $\vert\cdot\vert$ sia a destra che a sinistra si ottiene $\vert z\vert\vert\bar{z}\vert = \vert -\sqrt{2} + \sqrt{2}\,i\vert$; poiché $\vert z\vert = \vert\bar{z}\vert$ si ha $\vert z\vert^2 = \sqrt{2 + 2} = 2$ e quindi $\vert z\vert = \sqrt{2}$. Dunque $\sqrt{2}\,\bar{z} = -\sqrt{2} + \sqrt{2}\,i$ da cui $\bar{z} = -1 + i$. Infine $z = -1 - i$.

### Tutoraggio 2, esercizio 4
Determinate le soluzioni delle equazioni:
- (i) $z\,(\bar{z} + \mathrm{Re}\,z) = 3 + i$
- (ii) $\dfrac{8}{z\vert z\vert} = \sqrt{3} + i$
- (iii) $2z^2 + \bar{z} = -1$

> [!example]- Soluzione
> (i) Ponendo $z = x + iy$ si ha
> $$
> (x + iy)(x - iy + x) = 3 + i \iff 2x^2 + y^2 + i(-xy + 2xy) = 3 + i \iff \begin{cases} 2x^2 + y^2 = 3 \\ xy = 1 \end{cases}
> $$
> $$
> \iff \begin{cases} y = \dfrac{1}{x} \\ 2x^2 + \dfrac{1}{x^2} - 3 = 0 \end{cases} \iff \begin{cases} y = \dfrac{1}{x} \\ 2x^4 - 3x^2 + 1 = 0 \end{cases} \qquad x^2 = \frac{3 \pm 1}{4}
> $$
> che, risolta, dà come soluzioni
> $$
> z_1 = -1 - i \quad z_2 = 1 + i \quad z_3 = \frac{\sqrt{2}}{2} + \sqrt{2}\,i \quad z_4 = -\frac{\sqrt{2}}{2} - \sqrt{2}\,i
> $$
> (ii) Osserviamo che prendendo il modulo da entrambe le parti dell'equazione si ottiene $\dfrac{8}{\vert z\vert^2} = \vert\sqrt{3} + i\vert = 2$. Pertanto $\vert z\vert^2 = 4$ e l'equazione di partenza si può riscrivere $\dfrac{8}{z\cdot 2} = \sqrt{3} + i$. Da questa si ottiene
> $$
> z = \frac{4}{\sqrt{3} + i}\cdot\frac{\sqrt{3} - i}{\sqrt{3} - i} = \frac{4(\sqrt{3} - i)}{4} = \sqrt{3} - i
> $$
> e la soluzione ricercata è $z = \sqrt{3} - i$.
> (iii) Poniamo $z = x + iy$ e riscriviamo l'equazione nella forma $2(x + iy)^2 + (x - iy) = -1$. Abbiamo poi le successive equivalenze:
> $$
> 2(x + iy)^2 + (x - iy) = -1 \iff 2(x^2 - y^2 + 2xyi) + x - iy + 1 = 0 \iff 2(x^2 - y^2) + x + 1 + i(4xy - y) = 0
> $$
> $$
> \iff \begin{cases} 2x^2 - 2y^2 + x + 1 = 0 \\ y(4x - 1) = 0 \end{cases} \iff \begin{cases} y = 0 \\ 2x^2 + x + 1 = 0 \end{cases} \ \text{oppure} \ \begin{cases} x = \frac{1}{4} \\ 2\cdot\frac{1}{16} - 2y^2 + \frac{5}{4} = 0 \end{cases}
> $$
> $$
> \iff \begin{cases} x = \frac{1}{4} \\ y = \pm\frac{\sqrt{11}}{4} \end{cases}
> $$
> Ci sono quindi due soluzioni dell'equazione:
> $$
> z_1 = \frac{1}{4} - \frac{\sqrt{11}}{4}i \qquad z_2 = \frac{1}{4} + \frac{\sqrt{11}}{4}i
> $$

### Tutoraggio 2, esercizio 5
Rappresentate nel piano complesso le potenze qui sotto riportate:
- (i) $(1 + i)^5$
- (ii) $\left(\dfrac{1}{\sqrt{2}} - \dfrac{1}{\sqrt{2}}i\right)^4$
- (iii) $\left(\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i\right)^9$

> [!example]- Soluzione
> (i) Ogni numero complesso $z = x + iy$ si può scrivere nella forma $x + iy = \vert z\vert(\cos\theta + i\sin\theta)$ dove $\theta \in \mathbb{R}$ si dice argomento di $z$. Il prodotto di due numeri complessi $z = \vert z\vert(\cos\alpha + i\sin\alpha)$, $w = \vert w\vert(\cos\beta + i\sin\beta)$ è il numero $\vert z\vert\vert w\vert\big(\cos(\alpha + \beta) + i\sin(\alpha + \beta)\big)$ che ha come modulo il prodotto dei moduli e come argomento la somma degli argomenti. Calcoliamo le potenze del numero complesso $z = 1 + i$. Osserviamo che $\vert z\vert = \sqrt{2}$ e $\arg z = \dfrac{\pi}{4}$. Abbiamo quindi
> $$
> (1 + i)^2 = 2\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) \qquad (1 + i)^5 = \left(\sqrt{2}\right)^5\left(\cos\left(5\cdot\frac{\pi}{4}\right) + i\sin\left(5\cdot\frac{\pi}{4}\right)\right)
> $$
> Le potenze $(1 + i)^k$ per $k = 1, \dots, 5$ sono rappresentate nella figura, dalla quale si vede anche come le successive potenze si ottengono graficamente con una successione di triangoli rettangoli isosceli. Questo ci dà anche un modo per costruire graficamente il numero $\left(\sqrt{2}\right)^5$.
> (ii) In modo simile, calcoliamo le potenze del numero complesso $z = \dfrac{1}{\sqrt{2}} - \dfrac{1}{\sqrt{2}}i$. Osserviamo che $\vert z\vert = 1$ e $\arg z = -\dfrac{\pi}{4}$. Abbiamo quindi
> $$
> \left(\frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}}i\right)^2 = 1\left(\cos\left(-\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{2}\right)\right)
> $$
> $$
> \left(\frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}}i\right)^4 = 1\left(\cos\left(4\cdot\frac{-\pi}{4}\right) + i\sin\left(4\cdot\frac{-\pi}{4}\right)\right)
> $$
> Le potenze $\left(\dfrac{1}{\sqrt{2}} - \dfrac{1}{\sqrt{2}}i\right)^k$ per $k = 1, \dots, 4$ sono rappresentate nella figura.
> (iii) Calcoliamo le potenze del numero complesso $z = \dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i$. Osserviamo che $\vert z\vert = 1$ e $\arg z = \dfrac{\pi}{3}$. Pertanto
> $$
> \left(\frac{1}{2} + \frac{\sqrt{3}}{2}i\right)^9 = 1\left(\cos\left(9\cdot\frac{\pi}{3}\right) + i\sin\left(9\cdot\frac{\pi}{3}\right)\right) = \cos(3\pi) + i\sin(3\pi)
> $$
> Dalle note: $(1 + i)^5 = -4 - 4i$, $\left(\dfrac{1}{\sqrt{2}} - \dfrac{1}{\sqrt{2}}i\right)^4 = -1$, $\left(\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i\right)^9 = -1$.
>
> *(valori finali dalle note, il foglio si ferma alla forma trigonometrica)*

### Tutoraggio 2, esercizio 6
Rappresentate nel piano complesso le radici qui sotto riportate:
- (i) $\sqrt[3]{2(i - 1)}$
- (ii) $\sqrt[4]{z}$, essendo $\bar{z} = 1 + i$
- (iii) $\sqrt[4]{i + 20}$

> [!example]- Soluzione
> (i) Per cominciare poniamo $z_0 = -2 + 2i$, dunque si ha che $\vert z_0\vert = \sqrt{8} = 2\sqrt{2}$ e $\alpha = \arg z_0 = \dfrac{3}{4}\pi$. Abbiamo quindi
> $$
> \sqrt[3]{-2 + 2i} = \left(2^{\frac{3}{2}}\right)^{\frac{1}{3}}\left(\cos\frac{\alpha + 2k\pi}{3} + i\sin\frac{\alpha + 2k\pi}{3}\right) = \sqrt{2}\left(\cos\left(\frac{\pi}{4} + k\frac{2}{3}\pi\right) + i\sin\left(\frac{\pi}{4} + k\frac{2}{3}\pi\right)\right)
> $$
> (ii) Ricordiamo che se $z = x + iy$ allora $\bar{z} = x - iy$. Pertanto se $\bar{z}_0 = 1 + i$ si ha che $z_0 = 1 - i$. Osserviamo che $\vert z_0\vert = \sqrt{2}$ e $\alpha = \arg z_0 = -\dfrac{1}{4}\pi$. Abbiamo quindi
> $$
> \sqrt[4]{1 - i} = \left(2^{\frac{1}{2}}\right)^{\frac{1}{4}}\left(\cos\frac{\alpha + 2k\pi}{4} + i\sin\frac{\alpha + 2k\pi}{4}\right) = \sqrt[8]{2}\left(\cos\left(-\frac{\pi}{16} + k\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{16} + k\frac{\pi}{2}\right)\right)
> $$
> (iii) Posto $z_0 = 20 + i$, si ha che $\vert z_0\vert = \sqrt{401}$ e $\alpha = \arg z_0 = \arctan\dfrac{1}{20}$. Pertanto
> $$
> \sqrt[4]{20 + i} = (401)^{\frac{1}{8}}\left(\cos\left(\frac{\alpha}{4} + k\frac{\pi}{2}\right) + i\sin\left(\frac{\alpha}{4} + k\frac{\pi}{2}\right)\right)
> $$
> Per la rappresentazione grafica conviene osservare che $401^{\frac{1}{8}} \sim 2{,}1$ e $\alpha = \arctan\dfrac{1}{20} \sim 0{,}05$, da cui $\dfrac{\alpha}{4} \sim 0$ e una delle radici, per $k = 0$, è $\sqrt[4]{20 + i} \sim 2{,}1$.

### Esercitazione 3, esercizio 2.1 (dal tema d'esame «Esercizio n. 1, 6 punti»)
Si determinino tutte le soluzioni complesse del sistema
- a) $\begin{cases} \vert z - i + 1\vert = 1 \\ \mathrm{Re}(z) - \mathrm{Im}(z) = -2 \end{cases}$
- b) $\begin{cases} \vert z - i + 1\vert = 1 \\ \mathrm{Re}(z) - \mathrm{Im}(z) = +2 \end{cases}$

> [!example]- Soluzione
> a) Modo 1 (algebrico), $z = x + iy$, $x \in \mathbb{R}$, $y \in \mathbb{R}$:
> $$
> \begin{cases} \vert x + iy - i + 1\vert = 1 \\ x - y = -2 \end{cases} \iff \begin{cases} \vert(x + 1) + i(y - 1)\vert = 1 \\ x = y - 2 \end{cases} \iff \begin{cases} (x + 1)^2 + (y - 1)^2 = 1 \\ x = y - 2 \end{cases}
> $$
> $$
> (y - 1)^2 = \frac{1}{2} \Rightarrow y_{1,2} = 1 \pm \frac{\sqrt{2}}{2}, \quad x_{1,2} = -1 \pm \frac{\sqrt{2}}{2}
> $$
> $$
> z_1 = \left(-1 + \frac{\sqrt{2}}{2}\right) + i\left(1 + \frac{\sqrt{2}}{2}\right) \qquad z_2 = \left(-1 - \frac{\sqrt{2}}{2}\right) + i\left(1 - \frac{\sqrt{2}}{2}\right)
> $$
> Modo 2 (geometrico): $\vert z - (-1 + i)\vert = 1$, circonferenza di centro $-1 + i$ e raggio $1$; $\mathrm{Re}(z) - \mathrm{Im}(z) = -2$ è la retta $y = x + 2$, che passa per il centro.
> b) Modo algebrico: $x = y + 2$, quindi $y = x - 2$:
> $$
> \begin{cases} (x + 1)^2 + (y - 1)^2 = 1 \\ y = x - 2 \end{cases} \iff \begin{cases} (x + 1)^2 + (x - 3)^2 = 1 \\ y = x - 2 \end{cases} \iff 2x^2 - 4x + 9 = 0, \quad \frac{\Delta}{4} = 4 - 18 < 0
> $$
> Nessuna soluzione reale $x$, quindi nessun $z$: l'insieme delle soluzioni è vuoto.
> *(il foglio dice $2x^2 - 5x + 10 = 1$, corretto: $2x^2 - 4x + 10 = 1$, cioè $2x^2 - 4x + 9 = 0$; la conclusione non cambia)*
> Metodo geometrico: la retta $x - y = 2$ non incontra la circonferenza di centro $-1 + i$ e raggio $1$.

## Crocette dei fogli e delle esercitazioni

*(Opzioni etichettate [A] [B] [C] [D] negli esercizi svolti complessi, [a] [b] [c] [d] oppure [1] [2] [3] [4] nell'Esercitazione 3. Qui sono sempre a) b) c) d), nello stesso ordine. Il foglio dà solo la lettera giusta; gli svolgimenti sono dalle note.)*

### Esercizi svolti complessi, esercizio 8.1
Se $z = 1 + i$, allora quale delle seguenti affermazioni è vera per $w = z^{202}$?
- a) appartiene a $\mathbb{R}$
- b) è puramente immaginario
- c) $\mathrm{Re}(w) > 0$ e $\mathrm{Im}(w) < 0$
- d) $\mathrm{Re}(w) < 0$ e $\mathrm{Im}(w) > 0$

> [!example]- Soluzione
> **b**. $z = \sqrt{2}\,e^{i\frac{\pi}{4}}$, $\arg(w) = 202\cdot\dfrac{\pi}{4} = \dfrac{101\pi}{2} = 50\pi + \dfrac{\pi}{2}$: $w$ sta sul semiasse immaginario positivo. Controllo: $z^2 = 2i$, $w = (2i)^{101} = 2^{101}i$.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 8.2
Se $z = \sqrt{3} + i$, allora quale delle seguenti affermazioni è vera per $w = z^{25}\bar{z}^{12}$?
- a) appartiene a $\mathbb{R}$
- b) è puramente immaginario
- c) $\mathrm{Re}(w) > 0$ e $\mathrm{Im}(w) > 0$
- d) $\mathrm{Re}(w) < 0$ e $\mathrm{Im}(w) < 0$

> [!example]- Soluzione
> **c**. $z = 2e^{i\frac{\pi}{6}}$, $\bar{z} = 2e^{-i\frac{\pi}{6}}$, $w = 2^{37}e^{i\frac{(25 - 12)\pi}{6}} = 2^{37}e^{i\frac{13\pi}{6}}$, e $\dfrac{13\pi}{6} - 2\pi = \dfrac{\pi}{6}$: 1° quadrante.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 8.3
L'insieme dei punti $z \in \mathbb{C}$ che soddisfano $\vert z - 1\vert < \vert z + i\vert$ rappresenta:
- a) l'interno di un ellisse
- b) una regione delimitata da due rette incidenti
- c) un semipiano
- d) una regione delimitata da due rette parallele

> [!example]- Soluzione
> **c**. $(x - 1)^2 + y^2 < x^2 + (y + 1)^2 \iff -2x + 1 < 2y + 1 \iff y > -x$: semipiano aperto.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 8.4
L'insieme dei punti $z \in \mathbb{C}$ che soddisfano $\vert z^2 - 1\vert < \vert z^2 + i\vert$ rappresenta:
- a) l'interno di un ellisse
- b) una regione delimitata da due rette incidenti
- c) un semipiano
- d) una regione delimitata da due rette parallele

> [!example]- Soluzione
> **b**. Con $u = z^2$ la condizione è quella del punto precedente: $\mathrm{Im}(u) > -\mathrm{Re}(u)$. Con $z = x + iy$, $u = (x^2 - y^2) + 2ixy$, quindi $2xy > -(x^2 - y^2)$, cioè $x^2 + 2xy - y^2 > 0$, cioè $\big(x + (1 + \sqrt{2})y\big)\big(x + (1 - \sqrt{2})y\big) > 0$: due rette per l'origine.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 8.5
L'insieme dei punti $z \in \mathbb{C}$ che soddisfano $\mathrm{Re}\big((2 + i)z\big)^2 < 1$ rappresenta:
- a) l'interno di un ellisse
- b) una regione delimitata da due rette incidenti
- c) un semipiano
- d) una regione delimitata da due rette parallele

> [!example]- Soluzione
> **d**. $(2 + i)(x + iy) = (2x - y) + i(x + 2y)$, quindi $(2x - y)^2 < 1 \iff -1 < 2x - y < 1$: la striscia fra le rette parallele $y = 2x - 1$ e $y = 2x + 1$.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 9.1
Sia $z = \left(\sqrt{\dfrac{3}{2}}\,i - \dfrac{\sqrt{2}}{2}\right)^{32}$. Allora:
- a) $\mathrm{Re}(z)\,\mathrm{Im}(z) > 0$
- b) $\mathrm{Re}(z)\,\mathrm{Im}(z) = 0$
- c) $\mathrm{Re}(z) + \mathrm{Im}(z) > 0$
- d) $\vert z\vert = 1$

> [!example]- Soluzione
> **a**. Base di modulo $\sqrt{\tfrac{1}{2} + \tfrac{3}{2}} = \sqrt{2}$, $\cos\theta = -\dfrac{1}{2}$, $\sin\theta = \dfrac{\sqrt{3}}{2}$, $\theta = \dfrac{2\pi}{3}$ (2° quadrante). $z = 2^{16}e^{i\frac{64\pi}{3}}$, $\dfrac{64\pi}{3} = 20\pi + \dfrac{4\pi}{3}$: 3° quadrante, parte reale e immaginaria entrambe negative. Controllo: $z = -2^{15} - 2^{15}\sqrt{3}\,i$.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 9.2
Sia $z = \left(-\dfrac{\sqrt{2}}{3} - \dfrac{\sqrt{2}}{3}i\right)^{10}$. Allora
- a) $\mathrm{Re}(z)\,\mathrm{Im}(z) > 0$
- b) $\mathrm{Re}(z)\,\mathrm{Im}(z) < 0$
- c) $\vert z\vert < 1$
- d) $\vert z\vert > 1$

> [!example]- Soluzione
> **c**. Base di modulo $\sqrt{\tfrac{2}{9} + \tfrac{2}{9}} = \dfrac{2}{3}$, quindi $\vert z\vert = \left(\dfrac{2}{3}\right)^{10} < 1$. Argomento $\dfrac{5\pi}{4}\cdot 10 = \dfrac{50\pi}{4} = 12\pi + \dfrac{\pi}{2}$: $z$ è immaginario puro, quindi $\mathrm{Re}(z)\,\mathrm{Im}(z) = 0$ e a), b) sono false.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 9.3
Quante sono le soluzioni complesse (distinte) dell'equazione $iz^3 = (1 + i)\bar{z}^3$?
- a) Nessuna
- b) Esattamente una
- c) Tre
- d) Infinite

> [!example]- Soluzione
> **b**. Moduli dei due membri: $\vert z\vert^3 = \sqrt{2}\,\vert z\vert^3$, cioè $(\sqrt{2} - 1)\vert z\vert^3 = 0$, quindi $\vert z\vert = 0$: l'unica soluzione è $z = 0$.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 9.4
Quante sono le soluzioni complesse (distinte) dell'equazione $\sqrt{2}\,z^3 = (1 + i)\bar{z}^3$?
- a) Nessuna
- b) Esattamente una
- c) Quattro
- d) Infinite

> [!example]- Soluzione
> **d**. Moduli: $\sqrt{2}\rho^3 = \sqrt{2}\rho^3$, vera per ogni $\rho$. Con $z = \rho e^{i\theta}$, $\rho > 0$, e $1 + i = \sqrt{2}\,e^{i\frac{\pi}{4}}$: $3\theta = \dfrac{\pi}{4} - 3\theta + 2k\pi$, cioè $\theta = \dfrac{\pi}{24} + k\dfrac{\pi}{3}$. Ogni $\rho > 0$ va bene: infinite soluzioni.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercizi svolti complessi, esercizio 9.5
Quante sono le soluzioni complesse (distinte) dell'equazione $\sqrt{2}\,z^3 = (1 + i)\bar{z}$?
- a) Nessuna
- b) Esattamente una
- c) Cinque
- d) Infinite

> [!example]- Soluzione
> **c**. Moduli: $\sqrt{2}\rho^3 = \sqrt{2}\rho$, $\rho(\rho^2 - 1) = 0$, $\rho = 0$ oppure $\rho = 1$. $\rho = 0$: $z = 0$ è soluzione. $\rho = 1$: $e^{3i\theta} = e^{i\frac{\pi}{4}}e^{-i\theta}$, cioè $e^{4i\theta} = e^{i\frac{\pi}{4}}$, $\theta = \dfrac{\pi}{16} + k\dfrac{\pi}{2}$, $k = 0, 1, 2, 3$: quattro soluzioni. In tutto $1 + 4 = 5$.
>
> *(svolgimento dalle note, il foglio dà solo la risposta)*

### Esercitazione 3, esercizio 1 a)
L'equazione $\vert z\vert^2 = z^2$ è verificata
- a) se la parte immaginaria di $z = 0$
- b) solo per $z = 0$
- c) per ogni $z \in \mathbb{C}$
- d) se la parte reale di $z = 0$

> [!example]- Soluzione
> **a**. Modo 1, $z = a + ib$: $\vert z\vert^2 = a^2 + b^2$ e $z^2 = a^2 - b^2 + 2iab$, quindi $a^2 + b^2 = a^2 - b^2 + 2iab \iff 2b^2 - 2iab = 0 \iff \begin{cases} 2b^2 = 0 \\ -2ab = 0 \end{cases} \iff \begin{cases} b = 0 \\ a \in \mathbb{R} \end{cases}$, cioè $b = \mathrm{Im}(z) = 0$.
> Modo 2, $z = \rho e^{i\theta}$: $\rho^2 = \rho^2 e^{2i\theta}$; per $\rho > 0$, $e^{2i\theta} = 1 = e^{i(0 + 2k\pi)}$, $\theta = k\pi$, $k = 0, 1$: $z = \pm\rho$, con $\rho \geq 0$.

### Esercitazione 3, esercizio 2.2 (opzioni [1] [2] [3] [4] nella fonte)
L'insieme $\vert z - 1\vert + \vert z + i\vert = 2$ è descritto nel piano complesso da
- a) due punti
- b) una retta
- c) una parabola
- d) un'ellisse

> [!example]- Soluzione
> **d**. Modo geometrico: $\{z \in \mathbb{C} : \vert z - 1\vert + \vert z + i\vert = 2\} = \{P \in \mathbb{R}^2 : d(P, F_1) + d(P, F_2) = 2\}$ con $F_1 = (1, 0)$, $F_2 = (0, -1)$: è la descrizione di un ellisse (ruotata, cioè con asse focale non parallelo agli assi cartesiani). Per disegnarla: $2a = 2 \Rightarrow a = 1$; $d(F_1, F_2) = \sqrt{2} = 2c \Rightarrow c = \dfrac{\sqrt{2}}{2}$; da $a^2 = b^2 + c^2$ si ottiene $b = \dfrac{\sqrt{2}}{2}$.
> Modo algebrico, $z = x + iy$: $\sqrt{(x - 1)^2 + y^2} + \sqrt{x^2 + (y + 1)^2} = 2$ (il foglio lo segna «difficile»).

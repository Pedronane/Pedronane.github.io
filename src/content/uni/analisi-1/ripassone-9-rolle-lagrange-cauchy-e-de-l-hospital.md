---
title: Ripassone 9 · Rolle, Lagrange, Cauchy e De L'Hospital
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

> [!abstract] Definizione (punto critico) · slide 34
> La tesi del teorema di Fermat corrisponde alla definizione seguente. Data $f:(a,b)\to\mathbb R$, diremo che $x_0$ è un punto critico per $f$ se $f'(x_0)=0$.

> [!abstract] Osservazione (punto critico) · slide 34
> Un punto critico non è necessariamente di minimo o di massimo relativo. Come esempio si consideri $f(x)=x^3$ e si osservi che $f'(0)=0$, tuttavia il punto $x_0=0$ non è né di massimo, né di minimo relativo per $f$.

> [!abstract] Esempio (non tutti gli estremi sono punti critici) · slide 35
> Se la funzione non è derivabile in tutto il suo dominio, può accadere che un punto di minimo (massimo) non sia un punto critico. Il valore assoluto non è derivabile in $0$. Ma $0$ è un punto di minimo assoluto.

> [!abstract] Premessa (I teoremi di Rolle e Lagrange) · slide 38
> I prossimi risultati sono di fondamentale importanza per il calcolo differenziale. Le ipotesi richiedono una funzione definita su un intervallo chiuso e limitato $[a,b]$, la quale deve essere continua su tutto l'intervallo e derivabile nell'interno $(a,b)$.

> [!abstract] Teorema (Rolle) · slide 38
> Sia $f:[a,b]\to\mathbb R$ continua su $[a,b]$ e derivabile su $(a,b)$. Supponiamo che $f(a)=f(b)$. Allora esiste $c\in(a,b)$ tale che $f'(c)=0$.

> [!abstract] Teorema (Lagrange) · slide 39
> Sia $f:[a,b]\to\mathbb R$ continua su $[a,b]$ e derivabile su $(a,b)$. Allora esiste $c\in(a,b)$ tale che $f'(c)=\frac{f(b)-f(a)}{b-a}$.

> [!abstract] Osservazione (il sistema TUTOR) · slide 40
> Se la velocità media $v_m=\frac{s_1-s_0}{t_1-t_0}$ rilevata dal sistema tutor è superiore ai limiti, allora grazie al teorema di Lagrange si dimostra l'avvenuta infrazione in almeno un tempo intermedio del percorso.

> [!abstract] Teorema (caratterizzazione delle funzioni monotòne su intervalli) · slide 41
> Una importante applicazione del teorema di Lagrange è la caratterizzazione della monotonia in termini del segno della derivata prima. Sia $f:(a,b)\to\mathbb R$ una funzione derivabile. Allora $f$ è monotona crescente (risp. decrescente) su $(a,b)$ se e solo se $f'(x)\geqslant0$ (risp. $f'(x)\leqslant0$) per ogni $x\in(a,b)$.

> [!abstract] Corollario (caratterizzazione delle funzioni costanti su intervalli) · slide 42
> $f:(a,b)\to\mathbb R$ è costante se e solo se $f'(x)=0$ per ogni $x\in(a,b)$.

> [!abstract] Osservazione importante (corollario) · slide 42
> L'implicazione “$f$ costante $\Rightarrow f'=0$" è ovvia, pertanto la parte sostanziale del corollario è data dall'implicazione $f'=0$ su $(a,b)\ \Rightarrow\ f$ costante su $(a,b)$. Quest'ultima si dimostra osservando che $f'=0$ equivale a $f'\geqslant0$ e $f'\leqslant0$, da cui per il teorema di caratterizzazione della monotonia si deduce che $f$ è contemporaneamente crescente e decrescente, cioè costante!

> [!abstract] Teorema (Cauchy) · slide 47
> Siano $f,g:[a,b]\to\mathbb R$ continue su $[a,b]$ e derivabili su $(a,b)$. Allora esiste $c\in(a,b)$ tale che
> $$
> (f(b)-f(a))g'(c)=(g(b)-g(a))f'(c).
> $$

> [!abstract] Osservazione (Cauchy) · slide 48
> Osserviamo che, se $g'(x)\neq0$ per ogni $x\in(a,b)$, allora si ha anche $g(b)-g(a)\neq0$ e dal teorema di Cauchy otteniamo
> $$
> \frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(c)}{g'(c)}.
> $$
> Il significato geometrico del teorema è simile a quello del Teorema di Lagrange.

> [!abstract] Teorema (De L'Hospital) · slide 49
> Siano $-\infty\leqslant a<b\leqslant+\infty$, $f,g:(a,b)\to\mathbb R$ derivabili in $(a,b)$ e tali che:
> - $g'(x)\neq0$ per ogni $x\in(a,b)$;
> - $\lim_{x\to a^+}f(x)=\lim_{x\to a^+}g(x)=0$ (oppure $+\infty$, oppure $-\infty$);
> - $\lim_{x\to a^+}\frac{f'(x)}{g'(x)}=\ell\in\mathbb R\cup\{\pm\infty\}$.
>
> Allora
> $$
> \lim_{x\to a^+}\frac{f(x)}{g(x)}=\ell.
> $$
> N.B. Il teorema rimane valido anche per $x\to b^-$.

> [!abstract] Osservazione (De L'Hospital: esempi) · slide 51
> Il teorema di De L'Hospital fornisce una tecnica differenziale per risolvere forme indeterminate del tipo $\frac00$, $\frac\infty\infty$.

## Il prof ha scritto

- slide 36, a mano: «Studio la derivabilità di $f$. $x$ è derivabile ovunque. A priori, $\sqrt y$ non è derivabile in $y=0$. Tuttavia, l'argomento della radice, cioè $x^2+1$, è sempre $\neq0$ $\Rightarrow$ $\sqrt{x^2+1}$ è derivabile su tutto $\mathbb R$. $f$ = prodotto di funzioni derivabili $\Rightarrow$ derivabile».
- slide 38: nel paragrafo di premessa è scritto in rosso «continua su tutto l'intervallo e derivabile nell'interno $(a,b)$», con una barra rossa a mano a margine del paragrafo.
- slide 41, a mano: «DETTAGLI: crescente $\neq$ strettamente crescente. Il teorema dice che, se la funzione è derivabile, allora $(x_1\geqslant x_2\Rightarrow f(x_1)\geqslant f(x_2))\Leftrightarrow f'(x)\geqslant0$». Nel riquadro del teorema sono sottolineati «monotona crescente», «(risp. decrescente)», «se e solo se», «$\geqslant0$», «$\leqslant0$».
- slide 41, a mano, dopo il teorema: «ESEMPIO $f(x)=x^3$ è strettamente crescente: $\forall x\in\mathbb R,\ \forall h>0$, $(x+h)^3>x^3$. Tuttavia $f'(x)=3x^2$ e $f'(0)=0$. QUINDI: $f$ è strettamente crescente (e derivabile) in $(a,b)$ $\Uparrow$ $f'(x)>0\ \forall x\in(a,b)$ (ma $\Downarrow$ è FALSA)».
- slide 41, a mano, nella dimostrazione: «Osservazione: non occorre studiare il limite sx perché per ipotesi $f$ è derivabile, quindi lim dx e lim sx coincidono».
- slide 42, a mano: «$f'(x)=0\Rightarrow f'(x)\geqslant0\Rightarrow\forall x_1,x_2\in(a,b)\ x_1<x_2\Rightarrow f(x_1)\leqslant f(x_2)$» e «$f'(x)=0\Rightarrow f'(x)\leqslant0\Rightarrow\forall x_1,x_2\in(a,b)\ x_1<x_2\Rightarrow f(x_1)\geqslant f(x_2)$», con una graffa su entrambe: «$f(x_1)=f(x_2)$». Nel corollario è sottolineato «per ogni $x$».
- dopo la slide 43, a mano: «$f(x)=\arctan(x)+\arctan\left(\frac1x\right)$ è costante» con cerchiato in rosso $\arctan\left(\frac1x\right)$ e la scritta «definita su $\mathbb R\setminus\{0\}$». Poi: «NO! La funzione è costante su OGNI intervallo $(a,b)\subset\mathbb R\setminus\{0\}$», con la retta disegnata e lo zero segnato.
- slide 47, a mano accanto alla dimostrazione di Cauchy: «PER CASA».
- slide 49, a mano: sottolineato in rosso «$-\infty\leqslant a$»; barra rossa a margine della riga $\lim f=\lim g=0$ (con «oppure $+\infty$, oppure $-\infty$» scritto in rosso); accanto a quella riga «I LIMITI ESISTONO E COINCIDONO (A MENO DI UN SEGNO, EVENTUALMENTE)»; sotto la terza ipotesi «IL LIMITE ESISTE».
- slide 50, a mano nella dimostrazione: «Per Hp: $\exists\,b>a$: $f,g$ derivabili in $(a,b)$, $g'(x)\neq0\ \forall x\in(a,b)$; $\exists\lim_{x\to a^+}\frac{f'(x)}{g'(x)}=\ell\in\mathbb R\cup\{\pm\infty\}$. Devo verificare che esiste $\lim_{x\to a^+}\frac{f(x)}{g(x)}$».

## Svolti a lezione

### Punti critici di $f(x)=x^3e^{-x}$ (slide 34)

0) $f$ è derivabile? Sì, prodotto di funzioni derivabili, $f=h\cdot g$, $h=x^3$, $g=e^{-x}$.

1) Calcolare la derivata di $f$:

$$
f'(x)=h'(x)g(x)+h(x)g'(x)=3x^2e^{-x}+x^3(-e^{-x})=e^{-x}(3x^2-x^3)=e^{-x}x^2(3-x)
$$

2) Trovare gli zeri di $f'(x)$: $f'(x)=0$ se $x=0$ o $x=3$.

### Massimi e minimi (locali e globali) di $f(x)=x\sqrt{x^2+1}$ (slide 36, 1)

$D(f)=\mathbb R$. Derivabilità: vedi sopra, slide 36.

$$
f'(x)=1\cdot\sqrt{x^2+1}+x\cdot\frac{2x}{2\sqrt{x^2+1}}=\frac{x^2+1+x^2}{\sqrt{x^2+1}}=\frac{2x^2+1}{\sqrt{x^2+1}}
$$

$f'(x)\neq0\ \forall x$ (in realtà, $f'(x)>0\ \forall x\in\mathbb R$). La funzione non possiede punti di max o min assoluto o relativo in $(-\infty,+\infty)$.

$$
\lim_{x\to+\infty}x\sqrt{x^2+1}=+\infty\qquad\lim_{x\to-\infty}x\sqrt{x^2+1}=-\infty
$$

### Massimi e minimi assoluti di $f(x)=x\sqrt{x^2+1}$ in $[1,2]$ (slide 36, 2)

$f'(x)>0\ \forall x\in\mathbb R$. La funzione è strettamente crescente, cioè se $x_1<x_2$ allora $f(x_1)<f(x_2)$.

(Prendo $x\geqslant0$, $h>0$, valuto $f(x+h)$)

$$
f(x+h)=(x+h)\sqrt{(x+h)^2+1}>x\sqrt{(x+h)^2+1}>x\sqrt{x^2+1}=f(x)
$$

con annotati $(x+h)>x$ e $(x+h)^2>x^2$. La funzione è dispari ($f(-x)=-f(x)$) quindi, se è strettamente crescente nell'intervallo $[0,+\infty)$, lo è su tutto $\mathbb R$.

«la funzione è crescente. l'intervallo è chiuso e limitato. quindi, la funzione raggiunge il suo massimo nell'estremo superiore dell'intervallo», cioè l'estremo sup dell'intervallo è contenuto nell'intervallo.

### Dimostrare che $\arcsin(x)+\arccos(x)=\frac\pi2$ per ogni $x\in(-1,1)$ (slide 43)

0) Verifica di derivabilità.

1) Calcolo della derivata:

$$
(\arcsin(x))'+(\arccos(x))'=\frac1{\sqrt{1-x^2}}+\frac{-1}{\sqrt{1-x^2}}=0\qquad\forall x\in(-1,1)
$$

$\Rightarrow$ la funzione $f(x)=\arcsin(x)+\arccos(x)$ è costante su $(-1,1)$.

2) Scelgo un punto qualsiasi in $(-1,1)$ e calcolo la funzione nel punto. Per esempio, $x=0\Rightarrow f(0)=0+\frac\pi2=\frac\pi2$.

### La funzione $f(x)=\arctan(x)+\arctan\left(\frac1x\right)$ è costante? (dopo la slide 43)

$f$ definita su $\mathbb R\setminus\{0\}$.

$$
f'(x)=\frac1{1+x^2}+\frac1{1+\frac1{x^2}}\left(-\frac1{x^2}\right)=\frac1{1+x^2}+\frac{-1}{x^2+1}=0\qquad\forall x\in\mathbb R\setminus\{0\}
$$

NO! La funzione è costante su OGNI intervallo $(a,b)\subset\mathbb R\setminus\{0\}$.

### Grafico qualitativo di $f(x)=\frac{x-1}{x^2+1}$: limiti fondamentali, intervalli di crescenza e decrescenza, punti di massimo/minimo relativo (slide 44)

Dominio: $D(f)=\mathbb R$.

Limiti fondamentali (cioè ai punti estremi del dominio):

$$
\lim_{x\to+\infty}\frac{x-1}{x^2+1}=0\qquad\lim_{x\to-\infty}\frac{x-1}{x^2+1}=0
$$

Intervalli di crescenza e decrescenza. Verifico la derivabilità di $f$. Calcolo la derivata:

$$
f'(x)=\frac{1\cdot(x^2+1)-(x-1)(2x)}{(x^2+1)^2}=\frac{x^2+1-2x^2+2x}{(x^2+1)^2}=\frac{-x^2+2x+1}{(x^2+1)^2}
$$

$f'(x)>0\iff-x^2+2x+1>0$. Studio il segno di $-x^2+2x+1$. Per prima cosa, calcolo gli zeri: $-x^2+2x+1=0\iff x^2-2x-1=0$. Le radici sono $1\pm\sqrt2$.

- $f'(x)<0$ se $x<1-\sqrt2$: funzione decrescente
- $f'(x)>0$ se $1-\sqrt2<x<1+\sqrt2$: crescente
- $f'(x)<0$ se $x>1+\sqrt2$: decrescente

Punti di massimo/minimo relativo. Guardo gli zeri della derivata: $f'(x)=0\iff x=1\pm\sqrt2$.

$x_0=1-\sqrt2$: $\forall x<1-\sqrt2$, $f(x)\geqslant f(x_0)$; prendendo $\varepsilon>0$ abbastanza piccolo, $f(x_0+\varepsilon)\geqslant f(x_0)$ $\Rightarrow$ $x_0$ minimo locale (relativo). Lo stesso ragionamento ci porta a concludere che $x_1=1+\sqrt2$ è un punto di massimo relativo.

### Contare il numero di soluzioni reali dell'equazione $x^3=12x-1$ (slide 45)

Significa studiare gli zeri della funzione $f(x)=x^3-12x+1$. Siccome $\lim_{x\to+\infty}f(x)=+\infty$ e $\lim_{x\to-\infty}f(x)=-\infty$, per il teorema degli zeri esiste un punto in cui $f(x)=0$.

$$
f'(x)=3x^2-12=3(x^2-4)\qquad f'(x)=0\ \text{se}\ x=\pm2
$$

Segno di $f'$: $+$ per $x<-2$, $-$ in $(-2,2)$, $+$ per $x>2$ (frecce: crescente, decrescente, crescente).

$$
f(-2)=-8+24+1=17>0\qquad f(2)=8-24+1=-15<0
$$

Ricapitolando (slide 45):

- $(-\infty,-2)$: «In questo intervallo, la funzione è crescente. Siccome esistono punti in cui $f$ è negativa (per esempio $f(-4)=-15$) allora $\exists x\in(-4,-2)$ tale che $f(x)=0$. Siccome la funzione è crescente su $(-\infty,-2)$, esiste un unico zero $<-2$».
- $(-2,2)$: «In questo intervallo, la funzione cambia segno, quindi possiede almeno uno zero. Siccome la funzione è strettamente monotona su questo intervallo, esiste un unico zero».
- $(2,+\infty)$: «In questo intervallo, la funzione è crescente. Siccome esistono punti in cui $f$ è positiva (per esempio $f(4)=-17$) allora $\exists x\in(2,4)$ tale che $f(x)=0$. Siccome la funzione è crescente su $(2,+\infty)$, esiste un unico zero $>2$». *(la slide dice $f(4)=-17$, corretto: $f(4)=17$)*

L'equazione $x^3=12x-1$ possiede 3 soluzioni reali.

### De L'Hospital, esempio (1): $\lim_{x\to0}\frac{x-\sin x}{x^3}$ (slide 51)

$f(x)=x-\sin x$, $g(x)=x^3$: $\lim_{x\to0}(x-\sin x)=\lim_{x\to0}x^3=0$.

$$
f'(x)=1-\cos x\qquad g'(x)=3x^2\qquad g'(x)\neq0\ \text{se}\ x\neq0
$$

$$
\lim_{x\to0}\frac{1-\cos x}{3x^2}=\frac16
$$

### De L'Hospital, esempio (2): $\lim_{x\to+\infty}x\left(\arctan x-\frac\pi2\right)$ (slide 51)

$f(x)=\arctan x-\frac\pi2$, $g(x)=\frac1x$.

$$
f'(x)=\frac1{1+x^2}\qquad g'(x)=-\frac1{x^2}\neq0\qquad\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}g(x)=0
$$

$$
\lim_{x\to+\infty}\frac{\frac1{1+x^2}}{-\frac1{x^2}}=\lim_{x\to+\infty}\frac{-x^2}{1+x^2}=-1
$$

## Esercizi dei fogli e delle esercitazioni

### Tutoraggio 5, esercizio 8 · equazione con parametro (Lagrange)

Determinare il numero di soluzioni della seguente equazione al variare del parametro reale $\alpha$. Ogni affermazione deve essere giustificata.

$$
x\log^2x=\alpha
$$

> [!example]- Soluzione
> Sia $g(x)=x\log^2x$, $D=(0,+\infty)$. $g(x)\geqslant0$ e $g(x)=0\iff x=1$.
>
> Limiti: $g(x)=\left(\sqrt x\log x\right)^2\to0$ per $x\to0^+$; $g(x)\to+\infty$ per $x\to+\infty$.
>
> Derivata: $g'(x)=\log^2x+2\log x=\log x\,(\log x+2)$. $g'(x)>0$ per $0<x<e^{-2}$, $g'(x)<0$ per $e^{-2}<x<1$, $g'(x)>0$ per $x>1$. Per il teorema sulla monotonia: $g$ strettamente crescente su $(0,e^{-2}]$, strettamente decrescente su $[e^{-2},1]$, strettamente crescente su $[1,+\infty)$.
>
> Valori: $g(e^{-2})=4e^{-2}=\frac4{e^2}\approx0{,}54$ (massimo relativo), $g(1)=0$ (minimo). Su ciascun tratto $g$ è continua e strettamente monotona: per il teorema dei valori intermedi ogni valore tra gli estremi del tratto è assunto una volta sola.
>
> | $\alpha$ | soluzioni |
> | --- | --- |
> | $\alpha<0$ | $0$ |
> | $\alpha=0$ | $1$ ($x=1$) |
> | $0<\alpha<\frac4{e^2}$ | $3$ |
> | $\alpha=\frac4{e^2}$ | $2$ ($x=e^{-2}$ e una in $(1,+\infty)$) |
> | $\alpha>\frac4{e^2}$ | $1$ |
>
> *(svolgimento dalle note, il foglio dà solo il risultato; il passo che nelle note «manca» è chiuso con il teorema della slide 41 e con $f'>0\Rightarrow f$ strettamente crescente scritto a mano sulla stessa slide)*

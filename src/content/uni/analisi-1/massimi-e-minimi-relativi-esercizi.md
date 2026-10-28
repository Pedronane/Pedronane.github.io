---
title: Massimi e minimi relativi (esercizi)
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-28
lezioni: []
ordine: 20
---

Esercizi tipo esame di [Massimi e minimi relativi](/uni/analisi-1/massimi-e-minimi-relativi/). Al 28/10 c'è solo Fermat: monotonia e studio del segno di $f'$ arrivano con Lagrange. Testo in chiaro, soluzione chiusa.

## Crocette (stile parte 1)

**C1.** Sia $f : (a, b) \to \mathbb{R}$ derivabile e $x_0 \in (a, b)$ con $f'(x_0) = 0$. Allora:

- a) $x_0$ è un punto di massimo o di minimo relativo
- b) $x_0$ è un punto di minimo relativo
- c) non si può concludere che $x_0$ sia un estremo
- d) $f$ è costante vicino a $x_0$

> [!example]- Soluzione
> **c**. Fermat va in un verso solo: estremo e derivabile implica $f' = 0$. Controesempio al viceversa: $x^3$ in $0$, che ha $f'(0) = 0$ ma è crescente.

**C2.** Quale funzione ha un minimo relativo in $0$ senza che valga $f'(0) = 0$?

- a) $x^2$
- b) $\vert x\vert$
- c) $x^3$
- d) $\cos x$

> [!example]- Soluzione
> **b**. $\vert x\vert \geq 0 = \vert 0\vert$, quindi minimo; ma non è derivabile in $0$, e Fermat chiede la derivabilità. $x^2$ ha minimo con $f'(0) = 0$; $x^3$ non ha estremi; $\cos x$ ha un massimo in $0$.

**C3.** $f(x) = x^2$ su $[1, 3]$. Il massimo assoluto è in $x = 3$ e $f'(3) = 6 \neq 0$. Questo:

- a) contraddice il teorema di Fermat
- b) non contraddice Fermat, perché $3$ non è interno all'intervallo
- c) non contraddice Fermat, perché il massimo è assoluto e non relativo
- d) non contraddice Fermat, perché $f$ non è derivabile in $3$

> [!example]- Soluzione
> **b**. Fermat vuole $x_0 \in (a, b)$ aperto. Un massimo assoluto è anche relativo, quindi la c) è falsa; $x^2$ è derivabile ovunque, quindi la d) è falsa. Per $x = 3$, inoltre, la derivata va presa da sinistra.

## Esercizi

**E1.** Trovare i punti $x_0 \in \mathbb{R}$ in cui $f(x) = x^3 - 3x$ può avere un massimo o un minimo relativo.

> [!example]- Soluzione
> $f$ è derivabile su tutto $\mathbb{R}$, quindi per Fermat un estremo relativo deve avere $f'(x_0) = 0$.
> $$
> f'(x) = 3x^2 - 3 = 0 \iff x = \pm1.
> $$
> I candidati sono $x = 1$ ($f(1) = -2$) e $x = -1$ ($f(-1) = 2$). Fermat dà solo i candidati: che siano davvero minimo e massimo si vede col segno di $f'$, quando arriva la monotonia.

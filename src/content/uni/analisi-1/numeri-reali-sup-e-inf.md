---
title: Numeri reali, sup e inf
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-09-15
lezioni:
  - 15 set
  - 16 set
ordine: 1
---

Argomento di [Analisi Matematica 1](/uni/analisi-1/), nozioni preliminari, sezione 1.2. Fatto a lezione il 15/9, slide 23-41 (<span class="src">slide annotate del 15/9</span>), e il 16/9, slide 42-44 sugli assiomi (<span class="src">slide annotate del 16/9</span>). Vocabolario: Linguaggio matematico; logica e quantificatori: [Insiemi e logica](/uni/analisi-1/insiemi-e-logica/).

> [!abstract] Per l'esame
> - **Saper enunciare**: maggiorante, minorante, massimo, minimo, sup, inf; la caratterizzazione del sup con le condizioni (1) e (2) del prof; assioma di completezza; proprietà di Archimede; densità di $\mathbb{Q}$; parte intera.
> - **Saper fare**: trovare sup, inf, max e min di un insieme dato come successione ($\{x_n : n \geq 1\}$) o come soluzione di una disequazione, **dimostrando** entrambe le condizioni; usare Archimede per trovare un $n$ con $\frac1n$ piccolo; dimostrare per assurdo ($\sqrt2 \notin \mathbb{Q}$, unicità del massimo).
> - **Dove esce**: nella parte 1 come crocetta ("quale affermazione è vera su sup e min di questo insieme?"); nella parte 2 come esercizio da 7 punti del tipo "dire se l'insieme è limitato, trovare sup e inf, dire se sono massimo e minimo" (è il primo esercizio del foglio 1).

Il filo dell'argomento, in ordine:

```
N ⊂ Z ⊂ Q          somme, prodotti, ordine: ma nella retta restano dei buchi (√2)
      |
      v
R                  tutti gli allineamenti decimali
      |
      v
sup e inf          il più piccolo dei maggioranti, il più grande dei minoranti
      |
      v
completezza        ogni insieme limitato superiormente ha sup in R   (in Q no)
      |
      v
Archimede          N non è limitato: per ogni x reale c'è un n > x
      |
      v
densità di Q       fra due reali distinti c'è sempre un razionale
```

## Definizioni

### Insiemi numerici

<figure class="fig fig-raster"><img src="/uni/fig/analisi-1-insiemi-dei-numeri.png" alt="Analisi 1 - insiemi dei numeri" loading="lazy"></figure>

$$
\mathbb{N} = \{0, 1, 2, 3, \dots\} \qquad \mathbb{Z} = \{0, 1, -1, 2, -2, \dots\} \qquad \mathbb{Q} = \left\{\tfrac{p}{q} : p, q \in \mathbb{Z},\ q \neq 0\right\}
$$

Valgono le inclusioni $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$, e la slide precisa "tutte le inclusioni sono strette". Il simbolo è $\subset$ perché nel corso $\subset$ vuol dire $\subseteq$ (vedi [Insiemi e logica](/uni/analisi-1/insiemi-e-logica/)): che siano strette va detto a parte.

| Insieme | Cosa non si può fare sempre |
| --- | --- |
| $\mathbb{N}$ | la sottrazione: $2 - 5 \notin \mathbb{N}$ |
| $\mathbb{Z}$ | la divisione: $1 : 2 \notin \mathbb{Z}$ |
| $\mathbb{Q}$ | rappresentare ogni punto della retta: $\sqrt{2} \notin \mathbb{Q}$ |
| $\mathbb{R}$ | niente di tutto questo: è completo |

In questo corso $0 \in \mathbb{N}$: altri testi partono da $1$, quindi occhio a come è scritto l'esercizio.

**Frazioni equivalenti.** La scrittura di un razionale come frazione non è unica: $\frac{p_1}{q_1} = \frac{p_2}{q_2}$ se $p_1 q_2 = p_2 q_1$. Esempio delle slide: $\frac{2}{3} = \frac{4}{6} = \frac{10}{15}$.

**Ordinamento totale.** Su questi insiemi sono definite somma e prodotto, e la relazione $\leq$ è un **ordinamento totale**: per ogni coppia $a, b$ vale $a \leq b$ oppure $b \leq a$, cioè due numeri si possono sempre confrontare. Il prof annota anche la **proprietà transitiva**: se $a \leq b$ e $b \leq c$ allora $a \leq c$.

**Rappresentazione decimale dei razionali.** Ogni $x \in \mathbb{Q}$ si scrive con un allineamento decimale **limitato** (da un certo punto in poi solo zeri) o **periodico** (da un certo punto in poi un blocco di cifre si ripete all'infinito):

$$
\tfrac{1}{2} = 0{,}5 \qquad \tfrac{3}{4} = 0{,}75 \qquad \tfrac{1}{3} = 0{,}\overline{3} \qquad \tfrac{1}{7} = 0{,}\overline{142857}
$$

Vale anche il viceversa: ogni allineamento limitato o periodico è un razionale. Esistono però allineamenti né limitati né periodici, come quello della slide 27, $0{,}1011011101111\dots$ (dopo ogni $0$ un $1$ in più), che il prof annota come "un numero in $\mathbb{R} \setminus \mathbb{Q}$".

**$0{,}\overline{9} = 1$.** Annotazione del prof sulla slide 27: "$0{,}99999\dots$ è equivalente a $1$". Lo stesso numero può avere due scritture decimali. Il motivo: fra $0{,}999\dots$ e $1$ non c'è spazio per nessun numero. Se fossero diversi, la differenza $1 - 0{,}\overline{9}$ sarebbe un positivo più piccolo di $\frac{1}{10^n}$ per ogni $n$, e un numero così non esiste (è [Proprietà di Archimede](#proprietà-di-archimede) travestita). Controprova veloce: $\frac{1}{3} = 0{,}\overline{3}$, moltiplicando per $3$ si ottiene $1 = 0{,}\overline{9}$.

### Numeri reali

**Numeri reali** (definizione della slide 28). L'insieme $\mathbb{R}$ dei numeri reali è l'insieme di **tutti i possibili allineamenti decimali**:

$$
x = \pm\, p{,}\alpha_1 \alpha_2 \alpha_3 \dots \alpha_n \dots \qquad p \in \mathbb{N},\ \ \alpha_i \in \mathbb{N},\ \ 0 \leq \alpha_i \leq 9
$$

Su $\mathbb{R}$ si estendono somma, prodotto e l'ordinamento totale $\leq$ che c'erano in $\mathbb{Q}$, e $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.

Per $x > 0$ la scrittura vuol dire che, troncando a $n$ cifre, si sbaglia per difetto di meno di $\frac{1}{10^n}$:

$$
p{,}\alpha_1 \dots \alpha_n \;\leq\; x \;<\; p{,}\alpha_1 \dots \alpha_n + \frac{1}{10^n} \qquad \forall n \in \mathbb{N}
$$

Esempio scritto a mano dal prof: se $x = 0{,}57431\dots$, con $n = 5$ si ha $0{,}57431 \leq x < 0{,}57432$. Troncare a $n$ cifre dà un'approssimazione per difetto; aumentare di $1$ l'ultima cifra dà un'approssimazione per eccesso.

**Intervalli** (slide 29). Dati $a, b \in \mathbb{R}$ con $a < b$. La parentesi tonda esclude l'estremo, la quadra lo include.

| Intervallo | Insieme | Nome |
| --- | --- | --- |
| $(a, b)$ | $\{x \in \mathbb{R} : a < x < b\}$ | aperto |
| $[a, b]$ | $\{x \in \mathbb{R} : a \leq x \leq b\}$ | chiuso |
| $(a, b]$ | $\{x \in \mathbb{R} : a < x \leq b\}$ | aperto in $a$, chiuso in $b$ |
| $[a, b)$ | $\{x \in \mathbb{R} : a \leq x < b\}$ | chiuso in $a$, aperto in $b$ |
| $(-\infty, a)$ | $\{x \in \mathbb{R} : x < a\}$ | semiretta aperta |
| $(-\infty, a]$ | $\{x \in \mathbb{R} : x \leq a\}$ | semiretta chiusa |
| $(a, +\infty)$ | $\{x \in \mathbb{R} : x > a\}$ | semiretta aperta |
| $[a, +\infty)$ | $\{x \in \mathbb{R} : x \geq a\}$ | semiretta chiusa |

Le prime quattro sono **limitate**, le semirette **illimitate**. Dalla parte di $\pm\infty$ la parentesi è sempre tonda, perché $\infty$ non è un numero reale e non può appartenere all'insieme.

### Maggioranti e minoranti

Da qui in poi $A \subset \mathbb{R}$ con $A \neq \emptyset$ (slide 30).

**Maggiorante.** Un elemento $M \in \mathbb{R}$ si dice **maggiorante** per $A$ se $x \leq M$ per ogni $x \in A$. Il prof cerchia "$\in \mathbb{R}$": non serve che $M$ appartenga ad $A$.

**Minorante.** Un elemento $m \in \mathbb{R}$ si dice **minorante** per $A$ se $x \geq m$ per ogni $x \in A$.

**Limitato.** $A$ si dice **limitato superiormente** se ammette almeno un maggiorante, **limitato inferiormente** se ammette almeno un minorante, **limitato** se è limitato sia superiormente sia inferiormente.

Se un insieme ha un maggiorante ne ha infiniti: con $M$ va bene anche $M + 1$, $M + 100$ e così via.

Esempio del prof (slide 31): $A = [-1, 2]$. I maggioranti sono $[2, +\infty)$, i minoranti $(-\infty, -1]$, quindi $A$ è limitato. Le altre righe della slide sono $(0, +\infty)$ (limitato inferiormente, non superiormente), $(-\infty, 2]$ (il contrario) e $\{1, \frac12, \frac13, \dots\}$ (limitato, tutto in $(0, 1]$).

**Illimitato superiormente.** È la negazione di "limitato superiormente", fatta a mano sulla slide 31:

$$
A \text{ limitato superiormente} \iff \exists M \in \mathbb{R} : (\forall x \in A,\ x \leq M)
$$
$$
A \text{ illimitato superiormente} \iff \forall M \in \mathbb{R},\ (\exists x \in A : x > M)
$$

A parole: comunque scelgo un candidato maggiorante $M$, c'è un elemento di $A$ che lo supera.

### Massimo e minimo

**Massimo** (slide 32). Un elemento $M \in \mathbb{R}$ si dice **massimo** per $A$ ($M = \max A$) se:
1. $M$ è un maggiorante per $A$ (cioè $x \leq M$ per ogni $x \in A$);
2. $M \in A$.

Annotazione del prof: è "il più grande tra gli elementi di $A$".

**Minimo.** $m$ si dice **minimo** per $A$ ($m = \min A$) se $m$ è un minorante per $A$ e $m \in A$: "il più piccolo tra gli elementi di $A$".

Anche se un insieme è limitato superiormente, il massimo può non esistere: $[-1, 2)$ ha come maggioranti tutti i numeri $\geq 2$, ma nessuno di loro sta in $A$, perché $2$ è escluso. Il minimo invece c'è ed è $-1$. Massimo e minimo, se esistono, sono unici: la dimostrazione, per assurdo come chiede il prof, è in [Unicità di massimo e minimo](#unicità-di-massimo-e-minimo).

### Estremo superiore e inferiore

**Estremo superiore** (slide 33). Un elemento $\bar{x} \in \mathbb{R}$ si dice **estremo superiore** di $A$ ($\bar{x} = \sup A$) se $\bar{x}$ è il **più piccolo dei maggioranti** di $A$, il minimo dei maggioranti:

$$
\sup A = \min \{M \in \mathbb{R} : M \text{ è maggiorante di } A\}
$$

**Estremo inferiore.** $\underline{x} = \inf A$ se $\underline{x}$ è il **più grande dei minoranti** di $A$, il loro massimo:

$$
\inf A = \max \{m \in \mathbb{R} : m \text{ è minorante di } A\}
$$

**Nota bene della slide.** La definizione di sup ha senso se esiste almeno un maggiorante, cioè se $A$ è limitato superiormente. Si pone allora:

$$
A \text{ non limitato superiormente} \implies \sup A = +\infty \qquad A \text{ non limitato inferiormente} \implies \inf A = -\infty
$$

È una convenzione di scrittura: $+\infty$ non è un numero reale, e dire $\sup A = +\infty$ è solo un modo breve per dire che $A$ non ha maggioranti. Riguarda insiemi non vuoti; l'insieme vuoto è escluso fin dall'inizio ($A \neq \emptyset$).

**Legame con massimo e minimo** (slide 34).
- Se esiste il massimo $M = \max A$, allora $\sup A = M$.
- Se esiste $\sup A$, non è detto che esista il massimo; se però $\sup A \in A$, allora il massimo esiste e $\sup A = \max A$.
- Per inf e minimo vale lo stesso: se esiste $\min A$ allora $\inf A = \min A$; se $\inf A \in A$ allora il minimo esiste e coincide con l'inf.

Esempio $A = [-1, 2)$: $\sup A = 2$ ma $2 \notin A$, quindi niente massimo. $\inf A = -1 = \min A$.

<figure class="fig"><svg role="img" aria-label="Maggioranti e sup" xmlns:xlink="http://www.w3.org/1999/xlink" width="513.72pt" height="133.488pt" viewBox="0 0 513.72 133.488" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f20-figure_1"> <g id="f20-patch_1"> <path d="M 0 133.488 L 513.72 133.488 L 513.72 0 L 0 0 L 0 133.488 z " style="fill: none"/> </g> <g id="f20-axes_1"> <g id="f20-line2d_1"> <path d="M 17.173636 65.180308 L 496.546364 65.180308 " clip-path="url(#f20-pc631084843)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: square"/> </g> <g id="f20-line2d_2"> <defs> <path id="f20-m9a85875a6a" d="M 3 0 L -3 -3 L -3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g clip-path="url(#f20-pc631084843)"> <use xlink:href="#f20-m9a85875a6a" x="496.546364" y="65.180308" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f20-line2d_3"> <path d="M 142.723636 65.180308 L 313.928182 65.180308 " clip-path="url(#f20-pc631084843)" style="fill: none; stroke: var(--fig-accent); stroke-width: 6"/> </g> <g id="f20-line2d_4"> <defs> <path id="f20-m2e82c95142" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f20-pc631084843)"> <use xlink:href="#f20-m2e82c95142" x="142.723636" y="65.180308" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f20-line2d_5"> <defs> <path id="f20-md4d30d403c" d="M 0 5 C 1.326016 5 2.597899 4.473168 3.535534 3.535534 C 4.473168 2.597899 5 1.326016 5 0 C 5 -1.326016 4.473168 -2.597899 3.535534 -3.535534 C 2.597899 -4.473168 1.326016 -5 0 -5 C -1.326016 -5 -2.597899 -4.473168 -3.535534 -3.535534 C -4.473168 -2.597899 -5 -1.326016 -5 0 C -5 1.326016 -4.473168 2.597899 -3.535534 3.535534 C -2.597899 4.473168 -1.326016 5 0 5 z " style="stroke: var(--fig-accent); stroke-width: 2.5"/> </defs> <g clip-path="url(#f20-pc631084843)"> <use xlink:href="#f20-md4d30d403c" x="313.928182" y="65.180308" style="fill: var(--fig-paper); stroke: var(--fig-accent); stroke-width: 2.5"/> </g> </g> <g id="f20-patch_2"> <path d="M 313.928182 37.033846 Q 402.383864 37.033846 487.485443 37.033846 " style="fill: none; stroke: var(--fig-steel); stroke-width: 3; stroke-linecap: round"/> <path d="M 482.285443 34.433846 L 487.485443 37.033846 L 482.285443 39.633846 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 3; stroke-linecap: round"/> </g> <g id="f20-patch_3"> <path d="M 142.723636 37.033846 Q 82.802045 37.033846 26.234557 37.033846 " style="fill: none; stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> <path d="M 31.434557 39.633846 L 26.234557 37.033846 L 31.434557 34.433846 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> </g> <g id="f20-text_1"> <!-- $A = [-1, 2)$ --> <g style="fill: var(--fig-accent)" transform="translate(193.615909 51.419815) scale(0.13 -0.13)"> <defs> <path id="f20-DejaVuSerif-Italic-24" d="M 1159 1691 L 2872 1691 L 2447 3909 L 1159 1691 z M -488 0 L -425 331 L -16 331 L 2491 4666 L 3016 4666 L 3841 331 L 4297 331 L 4234 0 L 2537 0 L 2600 331 L 3119 331 L 2928 1356 L 966 1356 L 375 331 L 887 331 L 825 0 L -488 0 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f20-DejaVuSerif-Italic-24" transform="translate(0 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-20" transform="translate(91.181641 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-3e" transform="translate(193.935547 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-8cf" transform="translate(232.949219 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-14" transform="translate(316.738281 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-f" transform="translate(380.361328 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-15" transform="translate(431.113281 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-c" transform="translate(494.736328 0.015625)"/> </g> </g> <g id="f20-text_2"> <!-- maggioranti: $M \geq 2$ --> <g style="fill: var(--fig-steel)" transform="translate(339.203864 26.400738) scale(0.13 -0.13)"> <defs> <path id="f20-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-Italic-30" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 709 4331 L 775 4666 L 2134 4666 L 3125 1344 L 5409 4666 L 6684 4666 L 6619 4331 L 5997 4331 L 5222 331 L 5816 331 L 5753 0 L 3928 0 L 3991 331 L 4584 331 L 5287 3938 L 3053 684 L 2612 684 L 1647 3938 L 944 331 L 1537 331 L 1475 0 L -97 0 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-8fa" d="M 4684 488 L 4684 0 L 678 0 L 678 488 L 4684 488 z M 678 3206 L 678 3725 L 4684 2578 L 4684 2047 L 678 897 L 678 1416 L 3975 2309 L 678 3206 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f20-DejaVuSerif-50" transform="translate(0 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-44" transform="translate(94.824219 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-4a" transform="translate(154.443359 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-4a" transform="translate(218.457031 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(282.470703 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-52" transform="translate(314.453125 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-55" transform="translate(374.658203 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-44" transform="translate(422.460938 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-51" transform="translate(482.080078 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-57" transform="translate(546.484375 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(586.669922 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-1d" transform="translate(618.652344 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-3" transform="translate(652.34375 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-Italic-30" transform="translate(684.130859 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-8fa" transform="translate(805.488281 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-15" transform="translate(908.242188 0.78125)"/> </g> </g> <g id="f20-text_3"> <!-- minoranti: $m \leq -1$ --> <g style="fill: var(--fig-ink)" transform="translate(20.207045 26.400738) scale(0.13 -0.13)"> <defs> <path id="f20-DejaVuSerif-Italic-50" d="M 3503 2675 Q 3741 3041 4034 3227 Q 4328 3413 4672 3413 Q 5194 3413 5388 3088 Q 5503 2894 5503 2578 Q 5503 2372 5453 2113 L 5106 331 L 5625 331 L 5563 0 L 4469 0 L 4866 2047 Q 4913 2291 4913 2466 Q 4913 2659 4856 2772 Q 4750 2988 4403 2988 Q 4019 2988 3761 2697 Q 3503 2406 3394 1850 L 3034 0 L 2459 0 L 2863 2069 Q 2906 2303 2906 2472 Q 2906 2666 2850 2775 Q 2741 2988 2394 2988 Q 2009 2988 1751 2697 Q 1494 2406 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1778 3063 2059 3238 Q 2341 3413 2653 3413 Q 3041 3413 3262 3220 Q 3484 3028 3503 2675 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-8f9" d="M 4684 3206 L 1388 2309 L 4684 1416 L 4684 897 L 678 2047 L 678 2578 L 4684 3725 L 4684 3206 z M 678 488 L 4684 488 L 4684 0 L 678 0 L 678 488 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f20-DejaVuSerif-50" transform="translate(0 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(94.824219 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-51" transform="translate(126.806641 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-52" transform="translate(191.210938 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-55" transform="translate(251.416016 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-44" transform="translate(299.21875 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-51" transform="translate(358.837891 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-57" transform="translate(423.242188 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(463.427734 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-1d" transform="translate(495.410156 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-3" transform="translate(529.101562 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-Italic-50" transform="translate(560.888672 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-8f9" transform="translate(674.677734 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-8cf" transform="translate(796.396484 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-14" transform="translate(899.150391 0.78125)"/> </g> </g> <g id="f20-text_4"> <!-- $\sup A = 2 \notin A$ --> <g style="fill: var(--fig-ink)" transform="translate(278.838182 90.278305) scale(0.11 -0.11)"> <defs> <path id="f20-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f20-DejaVuSerif-8c9" d="M 2684 500 L 4059 500 L 4059 0 L 2684 0 Q 2375 0 2091 88 L 1750 -847 L 1275 -672 L 1628 300 Q 1200 563 947 1000 Q 678 1463 678 2006 Q 678 2550 947 3012 Q 1216 3475 1678 3744 Q 2141 4013 2684 4013 L 2978 4013 L 3288 4859 L 3763 4684 L 3519 4013 L 4059 4013 L 4059 3513 L 3338 3513 L 2881 2259 L 4059 2259 L 4059 1753 L 2697 1753 L 2263 559 Q 2466 500 2684 500 z M 1806 784 L 2156 1753 L 1200 1753 Q 1244 1491 1381 1253 Q 1547 972 1806 784 z M 2341 2259 L 2797 3513 L 2684 3513 Q 2278 3513 1931 3309 Q 1584 3106 1381 2759 Q 1244 2522 1200 2259 L 2341 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f20-DejaVuSerif-56" transform="translate(0 0.078125)"/> <use xlink:href="#f20-DejaVuSerif-58" transform="translate(51.318359 0.078125)"/> <use xlink:href="#f20-DejaVuSerif-53" transform="translate(115.722656 0.078125)"/> <use xlink:href="#f20-DejaVuSerif-Italic-24" transform="translate(195.540681 0.078125)"/> <use xlink:href="#f20-DejaVuSerif-20" transform="translate(286.722321 0.078125)"/> <use xlink:href="#f20-DejaVuSerif-15" transform="translate(389.476228 0.078125)"/> <use xlink:href="#f20-DejaVuSerif-8c9" transform="translate(472.064118 0.078125)"/> <use xlink:href="#f20-DejaVuSerif-Italic-24" transform="translate(565.052399 0.078125)"/> </g> <!-- niente massimo --> <g style="fill: var(--fig-ink)" transform="translate(270.190291 103.480453) scale(0.11 -0.11)"> <defs> <path id="f20-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f20-DejaVuSerif-51"/> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(64.40625 0)"/> <use xlink:href="#f20-DejaVuSerif-48" transform="translate(96.390625 0)"/> <use xlink:href="#f20-DejaVuSerif-51" transform="translate(155.578125 0)"/> <use xlink:href="#f20-DejaVuSerif-57" transform="translate(219.984375 0)"/> <use xlink:href="#f20-DejaVuSerif-48" transform="translate(260.171875 0)"/> <use xlink:href="#f20-DejaVuSerif-3" transform="translate(319.359375 0)"/> <use xlink:href="#f20-DejaVuSerif-50" transform="translate(351.140625 0)"/> <use xlink:href="#f20-DejaVuSerif-44" transform="translate(445.96875 0)"/> <use xlink:href="#f20-DejaVuSerif-56" transform="translate(505.59375 0)"/> <use xlink:href="#f20-DejaVuSerif-56" transform="translate(556.90625 0)"/> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(608.21875 0)"/> <use xlink:href="#f20-DejaVuSerif-50" transform="translate(640.203125 0)"/> <use xlink:href="#f20-DejaVuSerif-52" transform="translate(735.03125 0)"/> </g> </g> <g id="f20-text_5"> <!-- $\inf A = \min A = -1$ --> <g style="fill: var(--fig-ink)" transform="translate(93.663636 90.278305) scale(0.11 -0.11)"> <defs> <path id="f20-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(0 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-51" transform="translate(31.982422 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-49" transform="translate(96.386719 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-Italic-24" transform="translate(149.20279 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-20" transform="translate(240.384431 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-50" transform="translate(343.138337 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-4c" transform="translate(437.962556 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-51" transform="translate(469.944978 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-Italic-24" transform="translate(550.153627 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-20" transform="translate(641.335268 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-8cf" transform="translate(744.089174 0.015625)"/> <use xlink:href="#f20-DejaVuSerif-14" transform="translate(827.878236 0.015625)"/> </g> <!-- $-1 \in A$ --> <g style="fill: var(--fig-ink)" transform="translate(124.463636 103.480453) scale(0.11 -0.11)"> <defs> <path id="f20-DejaVuSerif-8c8" d="M 2684 500 L 4059 500 L 4059 0 L 2684 0 Q 2141 0 1678 269 Q 1216 538 947 1000 Q 678 1463 678 2006 Q 678 2550 947 3012 Q 1216 3475 1678 3744 Q 2141 4013 2684 4013 L 4059 4013 L 4059 3513 L 2684 3513 Q 2278 3513 1931 3309 Q 1584 3106 1381 2759 Q 1244 2522 1200 2259 L 4059 2259 L 4059 1753 L 1200 1753 Q 1244 1491 1381 1253 Q 1584 906 1931 703 Q 2278 500 2684 500 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f20-DejaVuSerif-8cf" transform="translate(0 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-14" transform="translate(83.789062 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-8c8" transform="translate(166.376953 0.78125)"/> <use xlink:href="#f20-DejaVuSerif-Italic-24" transform="translate(259.365234 0.78125)"/> </g> </g> </g> </g> <defs> <clipPath id="f20-pc631084843"> <rect x="5.76" y="5.76" width="502.2" height="121.968"/> </clipPath> </defs> </svg></figure>

### Parte intera

**Parte intera** (slide 36). Dato $x \in \mathbb{R}$, la sua **parte intera** è

$$
\lfloor x \rfloor := \sup \{y \in \mathbb{Z} : y \leq x\}
$$

È il **più grande** intero che non supera $x$, e soddisfa $\lfloor x \rfloor \leq x < \lfloor x \rfloor + 1$. Esempi scritti dal prof: $\lfloor 7{,}312 \rfloor = 7$ e $\lfloor -7{,}312 \rfloor = -8$. Coi negativi non basta cancellare i decimali: $-7$ è più grande di $-7{,}312$, quindi non va bene. Altri: $\lfloor 3 \rfloor = 3$, $\lfloor -2{,}5 \rfloor = -3$.

L'insieme $\{y \in \mathbb{Z} : y \leq x\}$ è limitato superiormente da $x$, quindi il sup esiste; è un insieme di interi, e il sup è un suo elemento, quindi è in realtà un massimo.

## Enunciati

### $\sqrt{2}$ non è razionale

> [!abstract] Teorema (slide 25, dimostrato il 15/9)
> Non esiste alcun $x \in \mathbb{Q}$ tale che $x^2 = 2$. In breve: $\sqrt2 \notin \mathbb{Q}$.

Con $\sqrt2$ si intende la soluzione positiva dell'equazione $x^2 = 2$: è la lunghezza della diagonale del quadrato di lato $1$, un punto della retta che nessun razionale rappresenta.

> [!note]- Dimostrazione (per assurdo, come a lezione)
> Supponiamo per assurdo che $\sqrt2 = \frac{m}{n}$ con $m \in \mathbb{Z}$ e $n \in \mathbb{Z} \setminus \{0\}$, e che $m$ e $n$ siano **coprimi**, cioè non abbiano nessun fattore in comune nella fattorizzazione in primi (perché lo si possa supporre è spiegato sotto).
>
> Da $x = \frac{m}{n}$ e $x^2 = 2$:
> $$
> \frac{m^2}{n^2} = 2 \iff 2n^2 = m^2
> $$
> Quindi $m^2$ è pari, e allora anche $m$ è pari (osservazione sotto): $m = 2q$ per qualche $q \in \mathbb{Z}$. Riscrivendo:
> $$
> 2n^2 = (2q)^2 = 4q^2 \iff n^2 = 2q^2
> $$
> Quindi $n^2$ è pari, e con lo stesso ragionamento $n = 2p$ per qualche $p \in \mathbb{Z}$.
>
> In conclusione $m$ e $n$ hanno in comune il fattore $2$, contro l'ipotesi che fossero coprimi. Assurdo: quindi il teorema è vero. $\blacksquare$
>
> **Osservazione: perché da $m^2$ pari segue $m$ pari.** Se $m$ fosse dispari, $m = 2k + 1$, allora $m^2 = 4k^2 + 4k + 1$: $4k^2$ e $4k$ sono pari, più $1$ fa dispari. Quindi un dispari ha quadrato dispari, e per contronominale se $m^2$ è pari allora $m$ è pari.
>
> **Perché possiamo assumere $m$, $n$ coprimi.** Scriviamo $m$ e $n$ fattorizzati in primi:
> $$
> m = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k} \qquad n = q_1^{b_1} q_2^{b_2} \cdots q_h^{b_h}
> $$
> con $p_i$, $q_j$ primi e $a_i, b_j \in \mathbb{N}$. Se $m$ e $n$ non fossero coprimi, esisterebbe una coppia $(i, j)$ con $p_i = q_j$. Supponiamo per semplicità $a_i \leq b_j$: dividendo sopra e sotto per $p_i^{a_i}$ il fattore sparisce dal numeratore e al denominatore resta $q_j^{b_j - a_i}$. Il valore della frazione non cambia. Ripetendo questa operazione un numero finito di volte (i fattori sono finiti) si eliminano tutti i fattori comuni. Quindi ogni razionale si scrive come frazione ridotta ai minimi termini, ed è da quella che si parte.

Il passaggio delicato è "$m^2$ pari $\Rightarrow$ $m$ pari": non è ovvio, va giustificato col conto sui dispari.

### Unicità di massimo e minimo

> [!abstract] Proposizione (slide 32, "dimostratelo!", per assurdo)
> Se $A$ ha massimo, il massimo è unico. Lo stesso per il minimo.

> [!note]- Dimostrazione (per assurdo)
> Supponiamo che $M_1$ e $M_2$ siano entrambi massimi di $A$, con $M_1 \neq M_2$.
> - $M_1 \in A$ perché è un massimo, e $M_2$ è un maggiorante di $A$: quindi $M_1 \leq M_2$.
> - Scambiando i ruoli: $M_2 \in A$ e $M_1$ è un maggiorante, quindi $M_2 \leq M_1$.
>
> Per l'antisimmetria dell'ordine (assioma 7) $M_1 = M_2$, contro l'ipotesi $M_1 \neq M_2$. Assurdo. Per il minimo si ripete con i minoranti e le disuguaglianze girate. $\blacksquare$

La stessa idea dà l'unicità di sup e inf: il sup è il minimo dell'insieme dei maggioranti, e un minimo è unico.

### Caratterizzazione di sup e inf

È la forma che si usa negli esercizi. Il prof la scrive a mano dopo la slide 33 (<span class="src">15/9, pagine 19-20</span>) con le domande "che proprietà ha l'estremo superiore $M$ di un insieme $A$?".

> [!abstract] Caratterizzazione (forma del prof)
> $M = \sup A$ se e solo se
> $$
> (1)\quad \forall x \in A,\ x \leq M \qquad\qquad \text{($M$ è un maggiorante)}
> $$
> $$
> (2)\quad \forall N < M,\ \exists x \in A : x > N \qquad \text{(nessun numero più piccolo di $M$ è un maggiorante)}
> $$
> $m = \inf A$ se e solo se
> $$
> (3)\quad \forall x \in A,\ x \geq m \qquad\qquad \text{($m$ è un minorante)}
> $$
> $$
> (4)\quad \forall n > m,\ \exists x \in A : x < n \qquad \text{(nessun numero più grande di $m$ è un minorante)}
> $$

La (2) è la negazione di "$N$ è un maggiorante", ripetuta per ogni $N < M$: comunque abbassi il candidato sotto $M$, qualche elemento di $A$ lo scavalca. Insieme, (1) e (2) dicono che $M$ è un maggiorante e che è il più piccolo.

**Forma equivalente con $\varepsilon$.** Ogni $N < M$ si scrive $N = M - \varepsilon$ con $\varepsilon = M - N > 0$. Quindi la (2) equivale a
$$
\forall \varepsilon > 0,\ \exists x \in A : x > M - \varepsilon
$$
e la (4) a $\forall \varepsilon > 0,\ \exists x \in A : x < m + \varepsilon$. Sono la stessa cosa scritta in un altro modo, e nei libri si trova spesso questa.

### Assioma di completezza di $\mathbb{R}$

> [!abstract] Assioma di completezza (slide 35)
> Sia $A \subset \mathbb{R}$, $A \neq \emptyset$. Se $A$ è limitato superiormente, allora
> $$
> \exists \sup A \in \mathbb{R}
> $$

Il prof cerchia "$\in \mathbb{R}$": il sup esiste **dentro** $\mathbb{R}$. È la proprietà fondamentale che differenzia $\mathbb{R}$ da $\mathbb{Q}$, dove l'assioma non vale.

**Perché è un assioma.** Non si dimostra: è una delle regole con cui si definisce $\mathbb{R}$. Dei dieci assiomi dei reali (vedi sotto) i primi nove valgono anche in $\mathbb{Q}$. La completezza è l'unico che $\mathbb{Q}$ non rispetta.

**Cosa succede in $\mathbb{Q}$.** Esempio della slide 35:

$$
A = \{x \in \mathbb{Q} : x \geq 0,\ x^2 < 2\}
$$

$A$ è limitato superiormente, per esempio da $2$. I maggioranti razionali si possono stringere sempre di più: $1{,}5$, poi $1{,}42$, poi $1{,}415$, poi $1{,}4143$... Non ce n'è però uno più piccolo di tutti, perché il candidato naturale sarebbe $\sqrt{2}$, che in $\mathbb{Q}$ non c'è. Il prof disegna $A \cap \mathbb{Q}$ come una fila di tacche che si ferma a $\sqrt2$ senza un ultimo punto.

```
          A (razionali con x² < 2)            maggioranti razionali
   0 ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ○ ━━━━━━━━━━━━━━━━━━━━━━━━━━▶
                                          ↑
                               √2: qui in Q c'è un buco,
                         nessun razionale fa da "più piccolo maggiorante"
```

**Cosa succede in $\mathbb{R}$.** Stesso insieme con $x \in \mathbb{R}$. Ora la completezza garantisce che esista $\bar{x} = \sup A$. Chi è?
- $\bar{x}^2 < 2$ è impossibile: un numero appena più grande di $\bar{x}$ avrebbe ancora quadrato minore di $2$, starebbe in $A$, e $\bar{x}$ non sarebbe un maggiorante.
- $\bar{x}^2 > 2$ è impossibile: un numero appena più piccolo di $\bar{x}$ avrebbe ancora quadrato maggiore di $2$ e sarebbe un maggiorante più piccolo di $\bar{x}$.
- Resta $\bar{x}^2 = 2$ (slide 36).

Così è la completezza a far esistere $\sqrt{2}$ in $\mathbb{R}$, definito come $\sqrt{2} := \sup A$.

**Significato geometrico.** Dal punto di vista geometrico l'assioma corrisponde al fatto che ogni punto della retta reale corrisponde a un numero reale: la retta non ha buchi.

**Versione con l'inf** (non scritta sulle slide, ma vale): se $A \neq \emptyset$ è limitato inferiormente, esiste $\inf A \in \mathbb{R}$. Basta applicare l'assioma all'insieme degli opposti $\{-x : x \in A\}$, che è limitato superiormente.

### Gli assiomi dei numeri reali

Slide 42-44, lezione del 16/9. Esiste l'insieme $\mathbb{R}$ con due operazioni $+, \cdot : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ e una relazione d'ordine totale $\leq$ che rispettano:

| Gruppo | Assiomi |
| --- | --- |
| Operazioni | (1) associativa, (2) commutativa, (3) distributiva, (4) esistono $0$ e $1$ neutri, (5) esistono l'opposto $-a$ e, per $a \neq 0$, l'inverso $a^{-1}$ |
| Ordine | (6) dicotomia: $a \leq b$ o $b \leq a$; (7) antisimmetrica: $a \leq b$ e $b \leq a$ $\Rightarrow$ $a = b$; (8) $a \leq b \Rightarrow a + c \leq b + c$; (9) $0 \leq a$ e $0 \leq b$ $\Rightarrow$ $0 \leq a + b$ e $0 \leq ab$ |
| Completezza | (10) ogni insieme superiormente limitato ammette estremo superiore |

Annotazione del prof sulla (10): "superiormente limitato" equivale a "ammette un maggiorante". Tutte le altre regole di calcolo sono **teoremi**, cioè si dimostrano da questi dieci: l'unicità di opposto e inverso, $a \cdot 0 = 0$, la regola "più per meno fa meno" $a \cdot (-b) = -(ab)$, la legge di annullamento del prodotto.

### Proprietà di Archimede

> [!abstract] Proprietà di Archimede (slide 37)
> L'insieme $\mathbb{N}$ dei numeri naturali non è superiormente limitato:
> $$
> \sup \mathbb{N} = +\infty
> $$
> L'enunciato è equivalente a
> $$
> \forall x \in \mathbb{R} \quad \exists n \in \mathbb{N} \text{ tale che } n > x
> $$

**Cosa dice.** Non esiste un numero reale più grande di tutti i naturali. Scegli un $x$ enorme quanto vuoi, prima o poi un naturale lo supera.

**Perché le due forme sono la stessa cosa.** "$\mathbb{N}$ è limitato superiormente" si scrive $\exists M \in \mathbb{R} : \forall n \in \mathbb{N},\ n \leq M$. Negandola: $\forall M \in \mathbb{R},\ \exists n \in \mathbb{N} : n > M$. È la seconda forma, con $M$ al posto di $x$ (ed è la definizione di illimitato superiormente della slide 31).

**A cosa serve in pratica.** A rendere le cose piccole quanto si vuole. Dato $\varepsilon > 0$, Archimede applicato a $x = \frac{1}{\varepsilon}$ dà un $n > \frac{1}{\varepsilon}$, cioè
$$
\frac{1}{n} < \varepsilon
$$
Le frazioni $\frac{1}{n}$ scendono sotto qualsiasi soglia positiva. Questo fatto torna nella densità, in ogni esercizio su sup e inf, e poi nei limiti.

> [!note]- Dimostrazione (non svolta a lezione: la slide 37 ha "Dimostrazione." e basta)
> Supponiamo per assurdo che $\mathbb{N}$ sia limitato superiormente. $\mathbb{N}$ non è vuoto, quindi per l'assioma di completezza esiste $s = \sup \mathbb{N} \in \mathbb{R}$.
>
> $s - 1 < s$ e $s$ è il **più piccolo** maggiorante, quindi per la condizione (2) $s - 1$ non è un maggiorante: esiste $n \in \mathbb{N}$ con $n > s - 1$.
>
> Allora $n + 1 > s$. Ma $n + 1 \in \mathbb{N}$, e $s$ doveva essere un maggiorante di tutto $\mathbb{N}$: assurdo. $\blacksquare$

Senza la completezza non ci sarebbe un $s$ da cui partire: la dimostrazione si regge tutta su quel sup.

### Densità di $\mathbb{Q}$ in $\mathbb{R}$

> [!abstract] Proprietà di densità di $\mathbb{Q}$ in $\mathbb{R}$ (slide 39)
> Dati $a, b \in \mathbb{R}$ con $a < b$, esiste un numero razionale $q \in \mathbb{Q}$ tale che
> $$
> a < q < b
> $$

**Cosa dice.** I razionali stanno dappertutto sulla retta. Prendi un intervallo piccolo quanto vuoi, dentro c'è un razionale. Applicando l'enunciato più volte (fra $a$ e $q$, fra $q$ e $b$, ...) i razionali dentro diventano infiniti.

**Come convive con i buchi.** $\mathbb{Q}$ ha dei buchi, ma sono singoli punti come $\sqrt{2}$, non tratti di retta. Ogni reale si può avvicinare quanto si vuole con dei razionali: i troncamenti $1$, $1{,}4$, $1{,}41$, $1{,}414$, ... sono tutti razionali e si stringono attorno a $\sqrt{2}$.

> [!note]- Dimostrazione del prof: a passi lunghi $\frac1n$ (15/9, pagine 28-29)
> Per brevità supponiamo $a > 0$ e $b > 0$.
>
> $a < b$, ovvero $b - a > 0$, quindi $\frac{1}{b - a} > 0$. Per la proprietà di Archimede esiste $n \in \mathbb{N}$ tale che
> $$
> n > \frac{1}{b - a} \qquad\text{cioè}\qquad \frac{1}{n} < b - a
> $$
> Ora si parte da $0$ e si cammina sulla retta a passi lunghi $\frac1n$: $\frac1n, \frac2n, \frac3n, \dots$ Siccome il passo è più corto dell'intervallo $(a, b)$, la camminata non può scavalcarlo: dopo un certo numero $m$ di passi ci si ritrova dentro $(a, b)$, cioè
> $$
> a < \frac{m}{n} < b
> $$
> e $\frac{m}{n} \in \mathbb{Q}$. $\blacksquare$
>
> **Il punto "non può scavalcarlo" in formule.** Sia $m$ il primo intero con $\frac{m}{n} > a$, cioè $m = \lfloor na \rfloor + 1$. Il passo prima non superava $a$: $\frac{m-1}{n} \leq a$. Allora
> $$
> \frac{m}{n} = \frac{m-1}{n} + \frac1n \leq a + \frac1n < a + (b - a) = b
> $$
> Quindi $a < \frac{m}{n} < b$. Questa versione con la parte intera funziona anche per $a$, $b$ negativi.

```
  griglia di passo 1/n:   |           |           |           |           |
                       (m-2)/n     (m-1)/n       m/n       (m+1)/n

  intervallo (a, b):                     a (━━━━━━━━●━━━━━━━) b
                                                    ↑
                                                   m/n

  il passo 1/n è più corto di b - a: la griglia non può saltare l'intervallo
```

**Due fatti vicini** (non sulle slide):
- **$\mathbb{Q}$ è denso in sé.** Fra due razionali $p < r$ c'è sempre un razionale, per esempio la media $\frac{p + r}{2}$.
- **Anche gli irrazionali sono densi in $\mathbb{R}$.** Dati $a < b$, la densità di $\mathbb{Q}$ applicata a $\frac{a}{\sqrt{2}} < \frac{b}{\sqrt{2}}$ dà un razionale $q \neq 0$ in mezzo. Moltiplicando per $\sqrt{2}$, $a < q\sqrt{2} < b$, e $q\sqrt{2}$ è irrazionale: se fosse razionale, lo sarebbe anche $\sqrt{2} = \frac{q\sqrt{2}}{q}$.

## Metodo

**Dimostrazione per assurdo.** Per dimostrare una tesi $T$:
1. Si suppone vera la sua negazione, $\text{non } T$.
2. Si ragiona con passaggi corretti fino a una contraddizione, cioè una frase falsa di sicuro oppure in conflitto con un'ipotesi (due numeri coprimi che risultano entrambi pari, un maggiorante di $\mathbb{N}$).
3. Siccome $\text{non } T$ porta al falso, è falsa lei, quindi $T$ è vera.

È parente della contronominale di [Insiemi e logica](/uni/analisi-1/insiemi-e-logica/). In questa nota la usano $\sqrt{2} \notin \mathbb{Q}$, l'unicità del massimo, Archimede e l'esercizio su $x \leq \frac1n$.

**Trovare sup, inf, max, min di un insieme.**
1. **Scrivi i primi elementi** ($n = 1, 2, 3, 4$) e guarda come si muovono: crescono, calano, oscillano? Se c'è $(-1)^n$, separa $n$ pari e $n$ dispari.
2. **Riscrivi l'elemento generico** in una forma dove si vede il comportamento: $\frac{2n+1}{n+1} = 2 - \frac{1}{n+1}$, $\frac{n^2+3n+2}{n^2} = 1 + \frac3n + \frac{2}{n^2}$.
3. **Fai un'ipotesi** su sup e inf.
4. **Dimostra la (1)**: è una disuguaglianza da verificare per ogni $n$.
5. **Dimostra la (2)**: prendi $N < M$ qualsiasi e trova un $n$ con $x_n > N$. Di solito si arriva a una richiesta del tipo $\frac1n < $ qualcosa, e la risolve Archimede.
6. **Decidi max e min**: il sup è un massimo se e solo se appartiene all'insieme, cioè se esiste un $n$ con $x_n = M$.

Per l'inf si fa lo stesso con (3) e (4). Se l'insieme è dato da una disequazione, prima la si risolve e si scrive l'insieme come unione di intervalli: a quel punto sup e inf si leggono.

**Mostrare che qualcosa è piccolo a piacere.** Se serve un $n$ con $\frac{1}{n} < \varepsilon$, Archimede lo dà: basta $n > \frac{1}{\varepsilon}$. Se serve $\frac{c}{n} < \varepsilon$, basta $n > \frac{c}{\varepsilon}$.

## Esempi svolti a lezione

### $A = [-1, 2]$: maggioranti e minoranti (slide 31)

Maggioranti: tutti gli $M \geq 2$, cioè $[2, +\infty)$. Minoranti: tutti gli $m \leq -1$, cioè $(-\infty, -1]$. Entrambi gli insiemi sono non vuoti, quindi $A$ è limitato. Qui $2 \in A$ e $-1 \in A$: $\max A = \sup A = 2$, $\min A = \inf A = -1$.

### $A = \left\{1, \frac12, \frac13, \dots\right\} = \left\{\frac1n : n \geq 1\right\}$ (slide 34 e 40)

Il prof scrive $\sup A = \max A = 1$ e $\inf A = 0$, e chiede di mostrare la (3) e la (4). Lo svolgimento completo:

**Sup e max.** $1 \in A$ (con $n = 1$) e $\frac1n \leq 1$ per ogni $n \geq 1$: $1$ è un maggiorante che sta in $A$, quindi $\max A = 1$, e allora $\sup A = 1$.

**(3): $0$ è un minorante.** $\frac1n > 0$ per ogni $n \geq 1$, quindi $x \geq 0$ per ogni $x \in A$.

**(4): nessun numero più grande di $0$ è un minorante.** Sia $\eta > 0$. Serve un elemento di $A$ più piccolo di $\eta$, cioè un $n$ con $\frac1n < \eta$. Per Archimede esiste $n \in \mathbb{N}$ con $n > \frac{1}{\eta}$, e per quell'$n$ vale $\frac1n < \eta$. Quindi $\eta$ non è un minorante.

**Min?** $0 \notin A$, perché $\frac1n = 0$ non ha soluzioni. Quindi $\inf A = 0$ e il minimo non esiste.

### Esercizio: $x \leq \frac1n$ per ogni $n$ implica $x \leq 0$ (slide 38)

**Testo.** Sia $x \in \mathbb{R}$ tale che $x \leq \frac1n$ per ogni $n \in \mathbb{N} \setminus \{0\}$. Dimostrare, usando la proprietà di Archimede, che $x \leq 0$.

Il prof lo rilegge così: $x$ è un minorante dell'insieme $A = \{1, \frac12, \frac13, \dots\}$ dell'esempio sopra.

**Dimostrazione del prof (per assurdo).** Supponiamo $x > 0$. Siccome $x \leq \frac1n$ per ogni $n$, dividendo si ha $\frac1x \geq n$ per ogni $n \in \mathbb{N}$: qui si usa $x > 0$, che permette di dividere senza girare la disuguaglianza. Allora $\frac1x$ è un maggiorante per $\mathbb{N}$, e questo contraddice la proprietà di Archimede. Quindi $x \leq 0$. $\blacksquare$

Con l'esempio sopra c'è anche una via breve: $x$ è un minorante di $A$ e $\inf A = 0$ è il più grande dei minoranti, quindi $x \leq 0$.

### $C = \left\{\frac{2n+1}{n+1} : n \in \mathbb{N}\right\}$: il sup è $2$ (slide 41)

Primi elementi, con $n = 0, 1, 2, 3, 4$:

$$
C = \left\{1,\ \tfrac{3}{2},\ \tfrac{5}{3},\ \tfrac{7}{4},\ \tfrac{9}{5},\ \dots\right\}
$$

Crescono e sembrano avvicinarsi a $2$. Il prof vuole mostrare che $M = 2$ è il sup. Il trucco è riscrivere l'elemento generico:

$$
\frac{2n+1}{n+1} = \frac{(2n + 2) - 1}{n+1} = \frac{2(n+1)}{n+1} - \frac{1}{n+1} = 2 - \frac{1}{n+1}
$$

<figure class="fig"><svg role="img" aria-label="Insieme C e sup" xmlns:xlink="http://www.w3.org/1999/xlink" width="513.72pt" height="122.4pt" viewBox="0 0 513.72 122.4" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f21-figure_1"> <g id="f21-patch_1"> <path d="M 0 122.4 L 513.72 122.4 L 513.72 0 L 0 0 L 0 122.4 z " style="fill: none"/> </g> <g id="f21-axes_1"> <g id="f21-line2d_1"> <path d="M 20.108571 64.461176 L 493.611429 64.461176 " clip-path="url(#f21-pf8aabf09ca)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: square"/> </g> <g id="f21-line2d_2"> <defs> <path id="f21-m329f7aa847" d="M 3 0 L -3 -3 L -3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g clip-path="url(#f21-pf8aabf09ca)"> <use xlink:href="#f21-m329f7aa847" x="493.611429" y="64.461176" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f21-line2d_3"> <defs> <path id="f21-m11dde5d791" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f21-pf8aabf09ca)"> <use xlink:href="#f21-m11dde5d791" x="106.2" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="249.685714" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="297.514286" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="321.428571" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="335.777143" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="345.342857" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="352.17551" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="357.3" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="361.285714" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="364.474286" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="367.083117" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="369.257143" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="371.096703" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="372.673469" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="374.04" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="375.235714" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="376.290756" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="377.228571" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="378.067669" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="378.822857" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="379.506122" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="380.127273" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="380.69441" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="381.214286" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="381.692571" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="382.134066" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="382.542857" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="382.922449" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="383.275862" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="383.605714" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="383.914286" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="384.203571" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="384.475325" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="384.731092" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="384.972245" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="385.2" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="385.415444" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="385.619549" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="385.813187" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="385.997143" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="386.172125" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="386.338776" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="386.497674" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="386.649351" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="386.794286" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="386.932919" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.065653" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.192857" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.314869" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.432" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.544538" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.652747" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.756873" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.857143" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="387.953766" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="388.046939" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="388.136842" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="388.223645" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="388.307506" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f21-m11dde5d791" x="388.388571" y="64.461176" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f21-line2d_4"> <path d="M 393.171429 80.114824 L 393.171429 48.807529 " clip-path="url(#f21-pf8aabf09ca)" style="fill: none; stroke: var(--fig-steel); stroke-width: 2.5; stroke-linecap: square"/> </g> <g id="f21-text_1"> <!-- $1$ --> <g style="fill: var(--fig-ink)" transform="translate(102.04 89.991777) scale(0.13 -0.13)"> <defs> <path id="f21-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f21-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> <g id="f21-text_2"> <!-- $\frac{3}{2}$ --> <g style="fill: var(--fig-ink)" transform="translate(245.915714 91.554824) scale(0.13 -0.13)"> <defs> <path id="f21-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f21-DejaVuSerif-16" transform="translate(6.25 36.046875) scale(0.7)"/> <use xlink:href="#f21-DejaVuSerif-15" transform="translate(6.25 -35.651562) scale(0.7)"/> <path d="M 6.25 22.551563 L 6.25 28.801563 L 50.786133 28.801563 L 50.786133 22.551563 L 6.25 22.551563 z "/> </g> </g> <g id="f21-text_3"> <!-- $\frac{5}{3}$ --> <g style="fill: var(--fig-ink)" transform="translate(293.744286 91.424824) scale(0.13 -0.13)"> <defs> <path id="f21-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f21-DejaVuSerif-18" transform="translate(6.25 35.965625) scale(0.7)"/> <use xlink:href="#f21-DejaVuSerif-16" transform="translate(6.25 -35.732812) scale(0.7)"/> <path d="M 6.25 22.470313 L 6.25 28.720313 L 50.786133 28.720313 L 50.786133 22.470313 L 6.25 22.470313 z "/> </g> </g> <g id="f21-text_4"> <!-- $\frac{7}{4}$ --> <g style="fill: var(--fig-ink)" transform="translate(317.658571 91.294824) scale(0.13 -0.13)"> <defs> <path id="f21-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f21-DejaVuSerif-1a" transform="translate(6.25 34.965625) scale(0.7)"/> <use xlink:href="#f21-DejaVuSerif-17" transform="translate(6.25 -35.7375) scale(0.7)"/> <path d="M 6.25 22.465625 L 6.25 28.715625 L 50.786133 28.715625 L 50.786133 22.465625 L 6.25 22.465625 z "/> </g> </g> <g id="f21-text_5"> <!-- $2 = \sup C$ --> <g style="fill: var(--fig-steel)" transform="translate(363.401429 40.980706) scale(0.13 -0.13)"> <defs> <path id="f21-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-Italic-26" d="M 4300 1234 Q 3966 581 3414 245 Q 2863 -91 2119 -91 Q 1663 -91 1303 65 Q 944 222 700 525 Q 419 875 334 1320 Q 250 1766 359 2328 Q 572 3416 1330 4083 Q 2088 4750 3116 4750 Q 3497 4750 3908 4650 Q 4319 4550 4775 4347 L 4569 3272 L 4216 3272 Q 4213 3859 3919 4137 Q 3625 4416 2997 4416 Q 2250 4416 1762 3886 Q 1275 3356 1075 2328 Q 875 1303 1156 773 Q 1438 244 2184 244 Q 2706 244 3092 492 Q 3478 741 3725 1234 L 4300 1234 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f21-DejaVuSerif-15" transform="translate(0 0.78125)"/> <use xlink:href="#f21-DejaVuSerif-20" transform="translate(82.587891 0.78125)"/> <use xlink:href="#f21-DejaVuSerif-56" transform="translate(185.341797 0.78125)"/> <use xlink:href="#f21-DejaVuSerif-58" transform="translate(236.660156 0.78125)"/> <use xlink:href="#f21-DejaVuSerif-53" transform="translate(301.064453 0.78125)"/> <use xlink:href="#f21-DejaVuSerif-Italic-26" transform="translate(380.882478 0.78125)"/> </g> </g> <g id="f21-text_6"> <!-- $n = 0$ --> <g style="fill: var(--fig-axis)" transform="translate(92.45 40.980706) scale(0.11 -0.11)"> <defs> <path id="f21-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f21-DejaVuSerif-Italic-51" transform="translate(0 0.78125)"/> <use xlink:href="#f21-DejaVuSerif-20" transform="translate(83.369141 0.78125)"/> <use xlink:href="#f21-DejaVuSerif-13" transform="translate(186.123047 0.78125)"/> </g> </g> <g id="f21-text_7"> <!-- i punti si accumulano sotto 2 senza mai arrivarci --> <g style="fill: var(--fig-axis)" transform="translate(176.721929 25.327059) scale(0.11 -0.11)"> <defs> <path id="f21-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f21-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f21-DejaVuSerif-4c"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(31.984375 0)"/> <use xlink:href="#f21-DejaVuSerif-53" transform="translate(63.765625 0)"/> <use xlink:href="#f21-DejaVuSerif-58" transform="translate(127.78125 0)"/> <use xlink:href="#f21-DejaVuSerif-51" transform="translate(192.1875 0)"/> <use xlink:href="#f21-DejaVuSerif-57" transform="translate(256.59375 0)"/> <use xlink:href="#f21-DejaVuSerif-4c" transform="translate(296.78125 0)"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(328.765625 0)"/> <use xlink:href="#f21-DejaVuSerif-56" transform="translate(360.546875 0)"/> <use xlink:href="#f21-DejaVuSerif-4c" transform="translate(411.859375 0)"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(443.84375 0)"/> <use xlink:href="#f21-DejaVuSerif-44" transform="translate(475.625 0)"/> <use xlink:href="#f21-DejaVuSerif-46" transform="translate(535.25 0)"/> <use xlink:href="#f21-DejaVuSerif-46" transform="translate(591.25 0)"/> <use xlink:href="#f21-DejaVuSerif-58" transform="translate(647.25 0)"/> <use xlink:href="#f21-DejaVuSerif-50" transform="translate(711.65625 0)"/> <use xlink:href="#f21-DejaVuSerif-58" transform="translate(806.484375 0)"/> <use xlink:href="#f21-DejaVuSerif-4f" transform="translate(870.890625 0)"/> <use xlink:href="#f21-DejaVuSerif-44" transform="translate(902.875 0)"/> <use xlink:href="#f21-DejaVuSerif-51" transform="translate(962.5 0)"/> <use xlink:href="#f21-DejaVuSerif-52" transform="translate(1026.90625 0)"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(1087.109375 0)"/> <use xlink:href="#f21-DejaVuSerif-56" transform="translate(1118.890625 0)"/> <use xlink:href="#f21-DejaVuSerif-52" transform="translate(1170.203125 0)"/> <use xlink:href="#f21-DejaVuSerif-57" transform="translate(1230.40625 0)"/> <use xlink:href="#f21-DejaVuSerif-57" transform="translate(1270.59375 0)"/> <use xlink:href="#f21-DejaVuSerif-52" transform="translate(1310.78125 0)"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(1370.984375 0)"/> <use xlink:href="#f21-DejaVuSerif-15" transform="translate(1402.765625 0)"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(1466.390625 0)"/> <use xlink:href="#f21-DejaVuSerif-56" transform="translate(1498.171875 0)"/> <use xlink:href="#f21-DejaVuSerif-48" transform="translate(1549.484375 0)"/> <use xlink:href="#f21-DejaVuSerif-51" transform="translate(1608.671875 0)"/> <use xlink:href="#f21-DejaVuSerif-5d" transform="translate(1673.078125 0)"/> <use xlink:href="#f21-DejaVuSerif-44" transform="translate(1725.765625 0)"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(1785.390625 0)"/> <use xlink:href="#f21-DejaVuSerif-50" transform="translate(1817.171875 0)"/> <use xlink:href="#f21-DejaVuSerif-44" transform="translate(1912 0)"/> <use xlink:href="#f21-DejaVuSerif-4c" transform="translate(1971.625 0)"/> <use xlink:href="#f21-DejaVuSerif-3" transform="translate(2003.609375 0)"/> <use xlink:href="#f21-DejaVuSerif-44" transform="translate(2035.390625 0)"/> <use xlink:href="#f21-DejaVuSerif-55" transform="translate(2095.015625 0)"/> <use xlink:href="#f21-DejaVuSerif-55" transform="translate(2142.8125 0)"/> <use xlink:href="#f21-DejaVuSerif-4c" transform="translate(2190.609375 0)"/> <use xlink:href="#f21-DejaVuSerif-59" transform="translate(2222.59375 0)"/> <use xlink:href="#f21-DejaVuSerif-44" transform="translate(2279.09375 0)"/> <use xlink:href="#f21-DejaVuSerif-55" transform="translate(2338.71875 0)"/> <use xlink:href="#f21-DejaVuSerif-46" transform="translate(2386.515625 0)"/> <use xlink:href="#f21-DejaVuSerif-4c" transform="translate(2442.515625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f21-pf8aabf09ca"> <rect x="5.76" y="5.76" width="502.2" height="110.88"/> </clipPath> </defs> </svg></figure>

**$2$ è maggiorante per $C$.** $\frac{1}{n+1} > 0$, quindi $2 - \frac{1}{n+1} \leq 2$ per ogni $n \in \mathbb{N}$.

**$2$ è il più piccolo dei maggioranti.** Sia $M < 2$ e sia $a := 2 - M > 0$. Per Archimede esiste $n \in \mathbb{N}$ con $n > \frac{1}{a}$, quindi anche $n + 1 > \frac1a$, cioè $\frac{1}{n+1} < a$. Allora
$$
\frac{2n+1}{n+1} = 2 - \frac{1}{n+1} > 2 - a = M
$$
L'elemento $\frac{2n+1}{n+1}$ sta in $C$ ed è più grande di $M$: $M$ non è un maggiorante. Quindi $\sup C = 2$.

**Massimo?** $2 = 2 - \frac{1}{n+1}$ vorrebbe $\frac{1}{n+1} = 0$, impossibile: $2 \notin C$ e il massimo non esiste. Il minimo invece c'è: gli elementi crescono con $n$, il più piccolo è quello con $n = 0$, e $\min C = \inf C = 1$.

## Esercizi tipo esame

### Crocette (stile parte 1)

**C1.** Sia $A = \left\{\frac1n : n \in \mathbb{N},\ n \geq 1\right\}$. Quale affermazione è vera?
a) $\min A = 0$
b) $\inf A = 0$ e $A$ non ha minimo
c) $\sup A = 1$ ma $A$ non ha massimo
d) $A$ non è limitato inferiormente

> [!example]- Soluzione
> **b**. $0$ è l'inf (esempio svolto sopra) ma $0 \notin A$, quindi non è un minimo: la a) è falsa. La c) è falsa perché $1 \in A$, quindi $1 = \max A$. La d) è falsa: $0$ è un minorante.

**C2.** Sia $A = (0, 1] \cup \{2\}$. Allora:
a) $\sup A = 1$
b) $\max A = 2$ e $\inf A = 0$
c) $\min A = 0$
d) $A$ non ha massimo

> [!example]- Soluzione
> **b**. $2 \in A$ e ogni elemento è $\leq 2$, quindi $\max A = \sup A = 2$ (la a) e la d) sono false). $\inf A = 0$ ma $0 \notin A$, quindi niente minimo (la c) è falsa).

**C3.** Sia $A \subset \mathbb{R}$ non vuoto e $M$ un maggiorante di $A$. $M = \sup A$ se e solo se:
a) $M \in A$
b) $\forall N < M,\ \exists x \in A : x > N$
c) $\forall N > M,\ \exists x \in A : x > N$
d) $\exists N < M : \forall x \in A,\ x > N$

> [!example]- Soluzione
> **b**, la condizione (2). La a) caratterizza il massimo, che è di più. La c) non può mai valere per un maggiorante: se $N > M$, nessun elemento supera $N$. La d) dice solo che $A$ è limitato inferiormente da qualcosa sotto $M$.

**C4.** $\lfloor -7{,}312 \rfloor$ vale:
a) $-7$
b) $-8$
c) $7$
d) $-7{,}3$

> [!example]- Soluzione
> **b**, esempio del prof. La parte intera è il più grande intero $\leq x$: $-7 > -7{,}312$ non va bene, $-8 \leq -7{,}312$ sì.

### Esercizi (stile parte 2)

**Esercizio 1** (slide 41, insieme $D$ lasciato senza svolgimento). Dire se $D = \{n\cos(\pi n) : n = 1, 2, \dots\}$ è limitato superiormente o inferiormente, e trovare $\sup D$ e $\inf D$.

> [!example]- Soluzione
> $\cos(\pi n) = (-1)^n$: vale $-1$ per $n$ dispari e $1$ per $n$ pari. Quindi $n\cos(\pi n) = (-1)^n n$ e
> $$
> D = \{-1,\ 2,\ -3,\ 4,\ -5,\ 6, \dots\}
> $$
> **Non limitato superiormente.** Serve: $\forall M \in \mathbb{R},\ \exists x \in D : x > M$. Dato $M$, per Archimede esiste $k \in \mathbb{N}$ con $k > M$; allora $n = 2k$ (pari, e $n \geq 1$ se $k \geq 1$, cosa che si può sempre chiedere) dà $x = 2k > M$. Quindi $\sup D = +\infty$.
>
> **Non limitato inferiormente.** Dato $m$, esiste $k$ con $k > -m$, e con $n = 2k + 1$ (dispari) si ha $x = -(2k+1) < -k < m$. Quindi $\inf D = -\infty$.
>
> Niente massimo né minimo.

**Esercizio 2** (foglio 1, es. 1 i). Studiare $A = \left\{x_n = \frac{n^2 + 3n + 2}{n^2} : n \in \mathbb{N},\ n \geq 1\right\}$: limitatezza, sup, inf, massimo, minimo.

> [!example]- Soluzione
> **Riscrittura.** $x_n = 1 + \frac{3}{n} + \frac{2}{n^2}$. Primi elementi: $x_1 = 6$, $x_2 = 3$, $x_3 = \frac{20}{9}$, $x_4 = \frac{15}{8}$. I termini $\frac3n$ e $\frac{2}{n^2}$ calano al crescere di $n$, quindi la successione è decrescente.
>
> **Sup e max.** Essendo decrescente, $x_n \leq x_1 = 6$ per ogni $n$, e $6 \in A$. Quindi $\max A = \sup A = 6$.
>
> **Inf.** Ipotesi: $\inf A = 1$.
> - (3): $\frac3n + \frac{2}{n^2} > 0$, quindi $x_n > 1$ per ogni $n$.
> - (4): sia $\eta > 1$, cioè $\eta = 1 + \varepsilon$ con $\varepsilon > 0$. Serve un $n$ con $\frac3n + \frac{2}{n^2} < \varepsilon$. Siccome $\frac{2}{n^2} \leq \frac{2}{n}$ per $n \geq 1$, basta $\frac5n < \varepsilon$, cioè $n > \frac{5}{\varepsilon}$, che esiste per Archimede. Per quell'$n$, $x_n < 1 + \varepsilon = \eta$.
>
> **Min?** $x_n = 1$ vorrebbe $\frac3n + \frac2{n^2} = 0$, impossibile. Quindi $\inf A = 1$ e il minimo non esiste. $A$ è limitato: $1 < x_n \leq 6$.

**Esercizio 3** (foglio 1, es. 1 iv). Studiare $A = \left\{x_n = (-1)^n \frac{3n - 1}{n} : n \geq 1\right\}$.

> [!example]- Soluzione
> **Riscrittura.** $\frac{3n-1}{n} = 3 - \frac1n$, quindi $x_n = (-1)^n\left(3 - \frac1n\right)$. Si separano i due casi:
> - $n$ pari: $x_n = 3 - \frac1n$, cioè $\frac52, \frac{11}{4}, \frac{17}{6}, \dots$, crescenti verso $3$;
> - $n$ dispari: $x_n = -\left(3 - \frac1n\right)$, cioè $-2, -\frac83, -\frac{14}{5}, \dots$, decrescenti verso $-3$.
>
> **Limitato.** $0 < 3 - \frac1n < 3$ per ogni $n \geq 1$, quindi $-3 < x_n < 3$.
>
> **$\sup A = 3$.** (1): $x_n < 3$ per ogni $n$. (2): sia $N < 3$ e $\varepsilon = 3 - N > 0$. Per Archimede esiste $k$ con $k > \frac1\varepsilon$; prendo $n = 2k$, pari, con $\frac1n \leq \frac1k < \varepsilon$. Allora $x_n = 3 - \frac1n > 3 - \varepsilon = N$.
>
> **$\inf A = -3$.** Stesso ragionamento con $n = 2k + 1$ dispari: $\frac1n < \frac1k < \varepsilon$, quindi $x_n = -3 + \frac1n < -3 + \varepsilon$.
>
> **Max e min.** $x_n = \pm 3$ vorrebbe $\frac1n = 0$: né $3$ né $-3$ stanno in $A$. Niente massimo, niente minimo.

**Esercizio 4** (foglio 1, es. 1 viii). Studiare $A = \left\{x_n = \cos\frac{n\pi}{6} : n \geq 1\right\}$.

> [!example]- Soluzione
> L'angolo $\frac{n\pi}{6}$ avanza di $30°$ alla volta, e dopo $n = 12$ ha fatto un giro: i valori si ripetono con periodo $12$. Basta quindi calcolare $n = 1, \dots, 12$:
>
> | $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | $x_n$ | $\frac{\sqrt3}{2}$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt3}{2}$ | $-1$ | $-\frac{\sqrt3}{2}$ | $-\frac12$ | $0$ | $\frac12$ | $\frac{\sqrt3}2$ | $1$ |
>
> $A = \left\{-1, -\frac{\sqrt3}{2}, -\frac12, 0, \frac12, \frac{\sqrt3}{2}, 1\right\}$ è un insieme **finito**, quindi ha sempre massimo e minimo: $\max A = \sup A = 1$ (per $n = 12$) e $\min A = \inf A = -1$ (per $n = 6$). Lo conferma anche $|\cos| \leq 1$.

**Esercizio 5** (foglio 1, es. 1 vi). Studiare $A = \{x \in \mathbb{R} : -6x^2 - |x| + 1 > 0\}$.

> [!example]- Soluzione
> **Si risolve la disequazione.** Siccome $x^2 = |x|^2$, pongo $t = |x| \geq 0$: $-6t^2 - t + 1 > 0$, cioè $6t^2 + t - 1 < 0$. Le radici di $6t^2 + t - 1$ sono $t = \frac{-1 \pm 5}{12}$, cioè $t = \frac13$ e $t = -\frac12$, e la parabola è negativa fra le radici: $-\frac12 < t < \frac13$. Con $t = |x| \geq 0$ resta $|x| < \frac13$, cioè
> $$
> A = \left(-\tfrac13, \tfrac13\right)
> $$
> **Sup e inf.** Intervallo aperto: $\sup A = \frac13$, $\inf A = -\frac13$, e siccome gli estremi non appartengono ad $A$ non ci sono né massimo né minimo. Per scrupolo la (2): se $N < \frac13$, il punto medio fra $\max(N, 0)$ e $\frac13$ sta in $\left[0, \frac13\right) \subset A$ ed è maggiore di $N$.

## Errori tipici

- **Confondere massimo e sup.** Il sup può non appartenere all'insieme ($[-1, 2)$, $\{\frac1n\}$ con l'inf). Il massimo sì, per definizione.
- **Dimostrare solo la (1).** Che $M$ sia un maggiorante non basta: senza la (2) anche $M + 100$ passerebbe.
- **Parte intera come "l'intero più piccolo"** (dal quaderno del 15/9): è il **più grande** intero $\leq x$. Con i negativi si vede: $\lfloor -7{,}312 \rfloor = -8$, non $-7$.
- **Scrivere $(a, b)$ per l'intervallo chiuso** (dal quaderno): $(a, b)$ è aperto, il chiuso è $[a, b]$.
- **"Il più piccolo elemento dell'insieme vuoto è $+\infty$"** (dal quaderno). L'insieme vuoto non ha elementi, quindi non ha minimo, e nel corso $A \neq \emptyset$ in tutte le definizioni. La convenzione della slide 33 è un'altra cosa: $\sup A = +\infty$ si scrive per un insieme **non vuoto** che non ha maggioranti.
- **Dividere per $x$ senza sapere il segno.** Nell'esercizio su $x \leq \frac1n$ il prof sottolinea "qui abbiamo usato $x > 0$": dividendo per un negativo la disuguaglianza si gira.
- **Dimenticare che l'$n$ di Archimede dipende da $x$.** "$\forall x\ \exists n$" non vuol dire che un solo $n$ va bene per tutti.

## Domande

- Qual è la differenza fra massimo ed estremo superiore di un insieme?

- Enuncia l'assioma di completezza di $\mathbb{R}$.

- Perché $\mathbb{Q}$ non è completo? Porta un insieme limitato di razionali che in $\mathbb{Q}$ non ha estremo superiore.

- Come si caratterizza $\sup A$ con gli $\varepsilon$?

- Nella dimostrazione che $\sqrt{2} \notin \mathbb{Q}$, perché da $m^2$ pari segue $m$ pari?

- Scrivi in simboli che $A$ è illimitato superiormente.

- Enuncia la proprietà di Archimede nelle sue due forme.

- In quale passo la dimostrazione di Archimede usa l'assioma di completezza?

- Enuncia la densità di $\mathbb{Q}$ in $\mathbb{R}$.

- Nella dimostrazione della densità, a cosa serve la proprietà di Archimede?

- Quanto vale $\lfloor -2{,}5 \rfloor$, e perché non è $-2$?

- Perché per un insieme non limitato superiormente si pone $\sup A = +\infty$?

- Qual è il sup di $\left\{\frac{2n+1}{n+1} : n \in \mathbb{N}\right\}$, e ha massimo?

- Perché $0{,}\overline{9} = 1$?

- Scrivi le condizioni (1) e (2) del prof che caratterizzano $M = \sup A$.

- Perché nella dimostrazione di $\sqrt2 \notin \mathbb{Q}$ si può supporre $m$ e $n$ coprimi?

- Dimostra per assurdo che il massimo di un insieme, se esiste, è unico.

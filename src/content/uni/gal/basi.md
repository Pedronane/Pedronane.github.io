---
title: Basi
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: teoria
stato: in corso
data: 2026-10-19
lezioni: []
ordine: 14
---

Argomento di [Geometria e Algebra Lineare](/uni/gal/). Fatto a lezione in L8, lun 19/10 (3 ore), ultima parte della lezione. Fonte: appunti della prof, <span class="src">19/10, p. 19</span> (definizione, proposizione sull'unicità), <span class="src">p. 20</span> (dimostrazione, base canonica di $\mathbb{R}^n$, base di $M_2(\mathbb{R})$), <span class="src">p. 21</span> (base di $\mathbb{R}[x]_d$ e di $V^3$, proposizioni (a) e (b) ricordate, proposizione (c)), <span class="src">p. 22</span> (dimostrazione di (c), due basi di $\mathbb{R}^3$). Gli appunti si fermano a p. 23 con l'esercizio in $\mathbb{R}^5$ ripreso: è svolto in [Dipendenza lineare](/uni/gal/dipendenza-lineare/). Quaderno di Pietro per questa lezione: non c'è. Dispensa, §4.5: <span class="src">p. 100-101</span> (definizione 44, proposizioni 15 e 16, esempi 63-65); numeri di pagina del PDF. Prima: [Generatori](/uni/gal/generatori/) e [Dipendenza lineare](/uni/gal/dipendenza-lineare/), di cui la base è la somma. Si collega a [Matrici invertibili](/uni/gal/matrici-invertibili/): $n$ vettori di $\mathbb{R}^n$ sono una base esattamente quando la matrice che li ha come colonne è invertibile.

> [!abstract] Per l'esame
> - **Saper enunciare**: base di uno spazio vettoriale finitamente generato (sistema di generatori linearmente indipendente); la proposizione "rispetto a una base ogni vettore si scrive in modo unico"; le proposizioni (a), (b), (c) col rango, in particolare "(c) $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq \mathbb{R}^n$ è una base se e solo se $\operatorname{rg}(A) = k$ e $k = n$"; le basi standard di $\mathbb{R}^n$ (canonica), $M_2(\mathbb{R})$, $\mathbb{R}[x]_d$, $V^3$.
> - **Saper dimostrare**: l'unicità della scrittura (esistenza dai generatori, unicità dall'indipendenza); la (c) a partire da (a) e (b); che $\{\vec{e}_1, \ldots, \vec{e}_n\}$ e le quattro matrici $A_1, \ldots, A_4$ sono basi.
> - **Saper fare**: decidere se $k$ vettori di $\mathbb{R}^n$ sono una base, anche con un parametro; scrivere un vettore come combinazione degli elementi di una base risolvendo $[A \mid \vec{v}]$; decidere se un insieme di matrici o di polinomi è una base.
> - **Dove esce**: il parziale del 5/11 copre tutto il capitolo 4; "per quali $k$ questi vettori formano una base di $\mathbb{R}^4$" è l'esercizio 17 della dispensa e la forma tipica delle provette.

**L'idea.** Un sistema di generatori raggiunge tutto lo spazio, ma può avere doppioni ([Generatori](/uni/gal/generatori/)). Un insieme indipendente non ha doppioni, ma può non raggiungere tutto ([Dipendenza lineare](/uni/gal/dipendenza-lineare/)). Una **base** ha le due cose insieme: raggiunge ogni vettore, senza vettori superflui. La conseguenza è che ogni vettore si ottiene in **un modo solo**: una base funziona come un sistema di riferimento, e i coefficienti con cui si scrive un vettore lo descrivono senza ambiguità.

```
base di V       B = {v1, ..., vm}  sistema di generatori di V  E  linearmente indipendente
conseguenza     ogni v ∈ V si scrive in modo UNICO come λ1 v1 + ... + λm vm
in R^n          A = [v1 | ... | vk]
                (a) generano      <=> rg(A) = n     (serve k ≥ n)
                (b) indipendenti  <=> rg(A) = k     (serve k ≤ n)
                (c) base          <=> rg(A) = k = n  (A quadrata invertibile)
basi standard   R^n: e1, ..., en    M2(R): A1, ..., A4    R[x]_d: 1, x, ..., x^d    V^3: i, j, k
```

## Definizioni

### Base

**A parole, prima della formula.** Si cercano dei "mattoni" con cui costruire ogni vettore dello spazio, scelti in modo che nessun mattone sia costruibile con gli altri. Se ne manca uno, qualcosa resta fuori; se ce n'è uno di troppo, è un doppione.

La prof (<span class="src">p. 19</span>): sia $V$ uno spazio vettoriale reale finitamente generato. Un insieme di vettori $\mathcal{B} = \{\vec{v}_1, \ldots, \vec{v}_m\} \subseteq V$ è detto **base** di $V$ se è un sistema di generatori di $V$ linearmente indipendente.

**Come si legge.** Le condizioni sono due e servono tutte e due:
1. **generano**: $V = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_m)$;
2. **sono indipendenti**: $\lambda_1\vec{v}_1 + \cdots + \lambda_m\vec{v}_m = \vec{0}$ solo con tutti i $\lambda_i = 0$.

"Finitamente generato" è nell'ipotesi perché una base è una lista finita: uno spazio che non ha nemmeno un sistema di generatori finito, come $\mathbb{R}[x]$ ([Generatori](/uni/gal/generatori/)), non ha una base in questo senso. La dispensa aggiunge "insieme ordinato": conta anche l'ordine dei vettori, perché dice quale coefficiente va con quale vettore.

**Esempi, dal più facile.**
1. **La base canonica di $\mathbb{R}^n$** (la prof, <span class="src">p. 20</span>): $\vec{e}_1 = (1, 0, \ldots, 0)$, $\vec{e}_2 = (0, 1, 0, \ldots, 0)$, ..., $\vec{e}_n = (0, \ldots, 0, 1)$. Si chiama **base canonica** di $\mathbb{R}^n$.
   - Generano: ogni $\vec{v} = (v_1, \ldots, v_n)$ è $v_1\vec{e}_1 + \cdots + v_n\vec{e}_n$ ([Generatori](/uni/gal/generatori/), prof p. 7).
   - Sono indipendenti: $\lambda_1\vec{e}_1 + \cdots + \lambda_n\vec{e}_n = (\lambda_1, \ldots, \lambda_n)$, e questa ennupla è $\vec{0}$ solo se ogni $\lambda_i = 0$.
2. **Una base di $\mathbb{R}^2$ diversa dalla canonica**: $\{(1, 1), (1, -1)\}$. Generano ([Generatori](/uni/gal/generatori/), esempio 1 del criterio) e sono indipendenti ([Dipendenza lineare](/uni/gal/dipendenza-lineare/), esempio 2). Le basi non sono uniche.
3. **Una base di $M_2(\mathbb{R})$** (la prof, p. 20):
   $$
   A_1 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad A_2 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad A_3 = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, \quad A_4 = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
   $$
   Ogni $A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} \in V$ si scrive
   $$
   A = a_{11}A_1 + a_{12}A_2 + a_{21}A_3 + a_{22}A_4
   $$
   (si somma elemento per elemento: ogni $A_i$ ha un solo $1$, in un posto diverso). Quindi generano. Indipendenti: la stessa combinazione con coefficienti $\lambda_1, \ldots, \lambda_4$ è la matrice $\begin{pmatrix} \lambda_1 & \lambda_2 \\ \lambda_3 & \lambda_4 \end{pmatrix}$, che è $O$ solo se tutti i $\lambda_i$ sono $0$. $\{A_1, A_2, A_3, A_4\}$ è una base di $V$ (dispensa, esempio 56).
4. **Una base di $\mathbb{R}[x]_d$**, i polinomi di grado al più $d$ (la prof, p. 20-21): $\{1, x, x^2, \ldots, x^d\}$, dove $1 = x^0$. In particolare
   $$
   p(x) = a_0 + a_1x + a_2x^2 + \cdots + a_dx^d, \qquad a_i \in \mathbb{R}
   $$
   è già scritto come combinazione di $1, x, \ldots, x^d$ con coefficienti $a_0, \ldots, a_d$: generano. Indipendenti: $\lambda_0 + \lambda_1x + \cdots + \lambda_dx^d$ è il polinomio nullo solo se tutti i coefficienti sono nulli (due polinomi sono uguali quando hanno gli stessi coefficienti).
5. **Una base di $V^3$** (la prof, p. 21), i vettori geometrici dello spazio: $\{\vec{\imath}, \vec{\jmath}, \vec{k}\}$, i versori degli assi del capitolo 1 ([Vettori geometrici](/uni/gal/vettori-geometrici/)). Ogni vettore si scrive $v_x\vec{\imath} + v_y\vec{\jmath} + v_z\vec{k}$ con le sue componenti, e la combinazione è il vettore nullo solo se le tre componenti sono $0$.

**Controesempi.**
- $\{(1, 0), (0, 1), (1, 1)\}$ genera $\mathbb{R}^2$ (contiene la base canonica) ma è dipendente: $(1, 0) + (0, 1) - (1, 1) = \vec{0}$. **Non è una base**: $(1, 1)$ è un doppione, e infatti $(2, 3) = 2\vec{e}_1 + 3\vec{e}_2 = \vec{e}_1 + 2\vec{e}_2 + (1, 1)$ si scrive in due modi.
- $\{(1, 0, 0), (0, 1, 0)\}$ è indipendente ma genera solo il piano $xy$, non $\mathbb{R}^3$ ([Generatori](/uni/gal/generatori/)). **Non è una base di $\mathbb{R}^3$**: $(0, 0, 1)$ resta fuori. È però una base del sottospazio $\mathrm{Span}(\vec{e}_1, \vec{e}_2) = \{z = 0\}$, che è uno spazio vettoriale finitamente generato: la definizione vale per qualunque $V$, anche per un sottospazio.

## Enunciati

### Rispetto a una base, ogni vettore si scrive in modo unico

**L'idea.** I generatori garantiscono che **almeno** un modo di scrivere $\vec{v}$ esiste. L'indipendenza garantisce che non ce ne sono **due**: se ce ne fossero due, la loro differenza sarebbe una combinazione non banale uguale a $\vec{0}$.

La prof (<span class="src">p. 19</span>):

> [!abstract] Proposizione
> Sia $V$ spazio vettoriale finitamente generato e sia $\{\vec{v}_1, \ldots, \vec{v}_m\}$ base di $V$. Allora $\forall\, \vec{v} \in V$ si scrive **in modo unico** come combinazione lineare di $\{\vec{v}_1, \ldots, \vec{v}_m\}$.

- **Ipotesi**: $\{\vec{v}_1, \ldots, \vec{v}_m\}$ è una base di $V$.
- **Tesi**: per ogni $\vec{v} \in V$ esistono, e sono unici, $\lambda_1, \ldots, \lambda_m$ con $\vec{v} = \lambda_1\vec{v}_1 + \cdots + \lambda_m\vec{v}_m$.

> [!note]- Dimostrazione (della prof, p. 19-20)
> **Esistenza.** La base è un sistema di generatori, quindi $\vec{v} \in V = \mathrm{Span}(\vec{v}_1, \ldots, \vec{v}_m)$ è combinazione lineare dei $\vec{v}_i$.
>
> **Unicità.** Sia $\vec{v} \in V$ e supponiamo che si scriva in due modi:
> $$
> \vec{v} = \sum_{i=1}^{m} \lambda_i\vec{v}_i = \sum_{i=1}^{m} \mu_i\vec{v}_i
> $$
> Allora
> $$
> \vec{0} = \vec{v} - \vec{v} = \sum_{i=1}^{m} \lambda_i\vec{v}_i - \sum_{i=1}^{m} \mu_i\vec{v}_i = \sum_{i=1}^{m} (\lambda_i - \mu_i)\vec{v}_i \qquad \text{raccolgo ogni } \vec{v}_i \text{ con la (7)}
> $$
> Siccome $\{\vec{v}_1, \ldots, \vec{v}_m\}$ è linearmente indipendente, tutti i coefficienti di questa combinazione sono nulli:
> $$
> \lambda_i - \mu_i = 0 \quad \forall\, i = 1, \ldots, m \qquad \Rightarrow \qquad \lambda_i = \mu_i
> $$
> I due modi sono lo stesso modo. $\square$

Lo stesso vettore ha coefficienti diversi in basi diverse; dentro una base fissata i coefficienti sono unici.

<figure class="fig"><svg role="img" aria-label="stesso vettore in due basi" xmlns:xlink="http://www.w3.org/1999/xlink" width="625.32pt" height="284.611429pt" viewBox="0 0 625.32 284.611429" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fdb3434-figure_1"> <g id="fdb3434-patch_1"> <path d="M 0 284.611429 L 625.32 284.611429 L 625.32 0 L 0 0 L 0 284.611429 z " style="fill: none"/> </g> <g id="fdb3434-axes_1"> <g id="fdb3434-patch_2"> <path d="M 5.76 278.851429 L 298.045714 278.851429 L 298.045714 21.64 L 5.76 21.64 L 5.76 278.851429 z " style="fill: none"/> </g> <g id="fdb3434-matplotlib.axis_1"/> <g id="fdb3434-matplotlib.axis_2"/> <g id="fdb3434-patch_3"> <path d="M 75.908571 278.851429 L 75.908571 21.64 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="fdb3434-patch_4"> <path d="M 5.76 173.628571 L 298.045714 173.628571 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="fdb3434-text_1"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(290.635714 195.196953) scale(0.13 -0.13)"> <defs> <path id="fdb3434-DejaVuSerif-Italic-5b" d="M 409 0 L 19 0 L 1484 1594 L 747 2988 L 338 2988 L 400 3322 L 1244 3322 L 1934 2028 L 3125 3322 L 3516 3322 L 2078 1759 L 2838 331 L 3272 331 L 3209 0 L 2338 0 L 1631 1325 L 409 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="fdb3434-text_2"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(82.923429 31.516953) scale(0.13 -0.13)"> <defs> <path id="fdb3434-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="fdb3434-patch_5"> <path d="M 75.908571 173.628571 Q 163.594286 173.628571 249.602949 173.628571 " style="fill: none; stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 245.202949 171.428571 L 249.602949 173.628571 L 245.202949 175.828571 z " style="fill: var(--fig-axis); stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="fdb3434-patch_6"> <path d="M 251.28 173.628571 Q 251.28 144.4 251.28 116.84848 " style="fill: none; stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 249.08 121.24848 L 251.28 116.84848 L 253.48 121.24848 z " style="fill: var(--fig-axis); stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="fdb3434-patch_7"> <path d="M 75.908571 173.628571 Q 105.137143 173.628571 131.011612 173.628571 " style="fill: none; stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> <path d="M 125.011612 170.628571 L 131.011612 173.628571 L 125.011612 176.628571 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> </g> <g id="fdb3434-patch_8"> <path d="M 75.908571 173.628571 Q 75.908571 144.4 75.908571 118.525531 " style="fill: none; stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> <path d="M 72.908571 124.525531 L 75.908571 118.525531 L 78.908571 124.525531 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> </g> <g id="fdb3434-patch_9"> <path d="M 75.908571 173.628571 Q 163.594286 144.4 248.098019 116.232089 " style="fill: none; stroke: var(--fig-accent); stroke-width: 3; stroke-linecap: round"/> <path d="M 241.457236 115.283405 L 248.098019 116.232089 L 243.354603 120.975505 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 3; stroke-linecap: round"/> </g> <g id="fdb3434-text_3"> <!-- $\vec{e}_1$ --> <g style="fill: var(--fig-ink)" transform="translate(127.345714 196.493334) scale(0.13 -0.13)"> <defs> <path id="fdb3434-STIXGeneral-Regular-350" d="M -109 4186 L -954 3507 L -1069 3558 Q -755 3821 -755 3917 Q -755 4013 -1069 4013 L -2899 4013 L -2899 4358 L -1069 4358 Q -755 4358 -755 4454 Q -755 4474 -768 4496 Q -781 4518 -816 4553 Q -851 4589 -880 4621 Q -909 4653 -973 4713 Q -1037 4774 -1075 4813 L -960 4864 L -109 4186 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(60.091797 12)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-48" transform="translate(0 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(60.088013 -14.031201) scale(0.7)"/> </g> </g> <g id="fdb3434-text_4"> <!-- $\vec{e}_2$ --> <g style="fill: var(--fig-ink)" transform="translate(50.182286 119.329905) scale(0.13 -0.13)"> <defs> <path id="fdb3434-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(60.091797 12)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-48" transform="translate(0 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-15" transform="translate(60.088013 -14.031201) scale(0.7)"/> </g> </g> <g id="fdb3434-text_5"> <!-- $(3, 1) = 3\vec{e}_1 + 1\vec{e}_2$ --> <g style="fill: var(--fig-accent)" transform="translate(165.685714 92.704308) scale(0.12 -0.12)"> <defs> <path id="fdb3434-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-DejaVuSerif-b" transform="translate(0 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-16" transform="translate(39.013672 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-f" transform="translate(102.636719 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(153.388672 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-c" transform="translate(217.011719 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-20" transform="translate(274.990234 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-16" transform="translate(377.744141 0.96875)"/> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(501.458984 12)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-48" transform="translate(441.367188 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(501.4552 -14.031201) scale(0.7)"/> <use xlink:href="#fdb3434-DejaVuSerif-e" transform="translate(567.551392 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(670.305298 0.96875)"/> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(794.020142 12)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-48" transform="translate(733.928345 0.96875)"/> <use xlink:href="#fdb3434-DejaVuSerif-15" transform="translate(794.016357 -14.031201) scale(0.7)"/> </g> </g> <g id="fdb3434-text_6"> <!-- base canonica: coefficienti $3, 1$ --> <g style="fill: var(--fig-ink)" transform="translate(50.567857 15.64) scale(0.13 -0.13)"> <defs> <path id="fdb3434-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-DejaVuSerif-45" transform="translate(0 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-44" transform="translate(64.013672 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-56" transform="translate(123.632812 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-48" transform="translate(174.951172 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-3" transform="translate(234.130859 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-46" transform="translate(265.917969 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-44" transform="translate(321.923828 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-51" transform="translate(381.542969 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-52" transform="translate(445.947266 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-51" transform="translate(506.152344 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-4c" transform="translate(570.556641 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-46" transform="translate(602.539062 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-44" transform="translate(658.544922 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-1d" transform="translate(718.164062 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-3" transform="translate(751.855469 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-46" transform="translate(783.642578 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-52" transform="translate(839.648438 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-48" transform="translate(899.853516 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-49" transform="translate(959.033203 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-49" transform="translate(996.044922 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-4c" transform="translate(1033.056641 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-46" transform="translate(1065.039062 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-4c" transform="translate(1121.044922 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-48" transform="translate(1153.027344 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-51" transform="translate(1212.207031 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-57" transform="translate(1276.611328 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-4c" transform="translate(1316.796875 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-3" transform="translate(1348.779297 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-16" transform="translate(1380.566406 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-f" transform="translate(1444.189453 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(1494.941406 0.015625)"/> </g> </g> <g id="fdb3434-line2d_1"> <defs> <path id="fdb3434-mfb1eb05970" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#fdb3434-p5c32de29ff)"> <use xlink:href="#fdb3434-mfb1eb05970" x="251.28" y="115.171429" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> <g id="fdb3434-axes_2"> <g id="fdb3434-patch_10"> <path d="M 327.274286 278.851429 L 619.56 278.851429 L 619.56 21.64 L 327.274286 21.64 L 327.274286 278.851429 z " style="fill: none"/> </g> <g id="fdb3434-matplotlib.axis_3"/> <g id="fdb3434-matplotlib.axis_4"/> <g id="fdb3434-patch_11"> <path d="M 397.422857 278.851429 L 397.422857 21.64 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="fdb3434-patch_12"> <path d="M 327.274286 173.628571 L 619.56 173.628571 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="fdb3434-text_7"> <!-- $x$ --> <g style="fill: var(--fig-axis)" transform="translate(612.15 195.196953) scale(0.13 -0.13)"> <use xlink:href="#fdb3434-DejaVuSerif-Italic-5b" transform="translate(0 0.09375)"/> </g> </g> <g id="fdb3434-text_8"> <!-- $y$ --> <g style="fill: var(--fig-axis)" transform="translate(404.437714 31.516953) scale(0.13 -0.13)"> <use xlink:href="#fdb3434-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="fdb3434-patch_13"> <path d="M 397.422857 173.628571 Q 455.88 115.171429 513.151289 57.90014 " style="fill: none; stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 508.484384 59.455775 L 513.151289 57.90014 L 511.595654 62.567045 z " style="fill: var(--fig-axis); stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="fdb3434-patch_14"> <path d="M 514.337143 56.714286 Q 543.565714 85.942857 571.608432 113.985574 " style="fill: none; stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 570.052797 109.31867 L 571.608432 113.985574 L 566.941527 112.42994 z " style="fill: var(--fig-axis); stroke-dasharray: 6,4.5; stroke-dashoffset: 0; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="fdb3434-patch_15"> <path d="M 397.422857 173.628571 Q 426.651429 144.4 453.508292 117.543137 " style="fill: none; stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> <path d="M 447.144331 119.664457 L 453.508292 117.543137 L 451.386971 123.907098 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 3; stroke-linecap: round"/> </g> <g id="fdb3434-patch_16"> <path d="M 397.422857 173.628571 Q 426.651429 202.857143 453.508292 229.714006 " style="fill: none; stroke: var(--fig-steel); stroke-width: 3; stroke-linecap: round"/> <path d="M 451.386971 223.350045 L 453.508292 229.714006 L 447.144331 227.592686 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 3; stroke-linecap: round"/> </g> <g id="fdb3434-patch_17"> <path d="M 397.422857 173.628571 Q 485.108571 144.4 569.612305 116.232089 " style="fill: none; stroke: var(--fig-accent); stroke-width: 3; stroke-linecap: round"/> <path d="M 562.971522 115.283405 L 569.612305 116.232089 L 564.868889 120.975505 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 3; stroke-linecap: round"/> </g> <g id="fdb3434-text_9"> <!-- $\vec{v}_1$ --> <g style="fill: var(--fig-ink)" transform="translate(431.517857 107.508477) scale(0.13 -0.13)"> <defs> <path id="fdb3434-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(57.402466 -14.609326) scale(0.7)"/> </g> </g> <g id="fdb3434-text_10"> <!-- $\vec{v}_2$ --> <g style="fill: var(--fig-steel)" transform="translate(454.900714 256.574191) scale(0.13 -0.13)"> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(58.42041 10)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-59" transform="translate(0 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-15" transform="translate(57.402466 -14.609326) scale(0.7)"/> </g> </g> <g id="fdb3434-text_11"> <!-- $2\vec{v}_1$ --> <g style="fill: var(--fig-axis)" transform="translate(492.505714 39.972879) scale(0.12 -0.12)"> <use xlink:href="#fdb3434-DejaVuSerif-15" transform="translate(0 0.390625)"/> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(122.043457 10)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-59" transform="translate(63.623047 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(121.025513 -14.609326) scale(0.7)"/> </g> </g> <g id="fdb3434-text_12"> <!-- $(3, 1) = 2\vec{v}_1 + 1\vec{v}_2$ --> <g style="fill: var(--fig-accent)" transform="translate(499.251429 162.732879) scale(0.12 -0.12)"> <use xlink:href="#fdb3434-DejaVuSerif-b" transform="translate(0 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-16" transform="translate(39.013672 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-f" transform="translate(102.636719 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(153.388672 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-c" transform="translate(217.011719 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-20" transform="translate(274.990234 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-15" transform="translate(377.744141 0.390625)"/> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(499.787598 10)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-59" transform="translate(441.367188 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(498.769653 -14.609326) scale(0.7)"/> <use xlink:href="#fdb3434-DejaVuSerif-e" transform="translate(564.865845 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(667.619751 0.390625)"/> <use xlink:href="#fdb3434-STIXGeneral-Regular-350" transform="translate(789.663208 10)"/> <use xlink:href="#fdb3434-DejaVuSerif-Italic-59" transform="translate(731.242798 0.390625)"/> <use xlink:href="#fdb3434-DejaVuSerif-15" transform="translate(788.645264 -14.609326) scale(0.7)"/> </g> </g> <g id="fdb3434-text_13"> <!-- base $\{(1, 1), (1, -1)\}$: coefficienti $2, 1$ --> <g style="fill: var(--fig-ink)" transform="translate(348.682143 15.64) scale(0.13 -0.13)"> <defs> <path id="fdb3434-DejaVuSerif-5e" d="M 3272 -716 L 3272 -1044 L 3078 -1044 Q 2300 -1044 2036 -812 Q 1772 -581 1772 109 L 1772 916 Q 1772 1384 1603 1565 Q 1434 1747 991 1747 L 800 1747 L 800 2075 L 991 2075 Q 1434 2075 1603 2256 Q 1772 2438 1772 2906 L 1772 3713 Q 1772 4403 2036 4633 Q 2300 4863 3078 4863 L 3272 4863 L 3272 4538 L 3059 4538 Q 2619 4538 2484 4400 Q 2350 4263 2350 3822 L 2350 2925 Q 2350 2431 2194 2218 Q 2038 2006 1631 1913 Q 2044 1806 2197 1597 Q 2350 1388 2350 897 L 2350 0 Q 2350 -441 2484 -578 Q 2619 -716 3059 -716 L 3272 -716 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="fdb3434-DejaVuSerif-60" d="M 800 -716 L 1019 -716 Q 1456 -716 1589 -580 Q 1722 -444 1722 0 L 1722 897 Q 1722 1388 1875 1597 Q 2028 1806 2438 1913 Q 2031 2006 1876 2218 Q 1722 2431 1722 2925 L 1722 3822 Q 1722 4266 1589 4402 Q 1456 4538 1019 4538 L 800 4538 L 800 4863 L 997 4863 Q 1775 4863 2036 4633 Q 2297 4403 2297 3713 L 2297 2906 Q 2297 2438 2465 2256 Q 2634 2075 3078 2075 L 3272 2075 L 3272 1747 L 3078 1747 Q 2634 1747 2465 1565 Q 2297 1384 2297 916 L 2297 109 Q 2297 -581 2036 -812 Q 1775 -1044 997 -1044 L 800 -1044 L 800 -716 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fdb3434-DejaVuSerif-45" transform="translate(0 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-44" transform="translate(64.013672 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-56" transform="translate(123.632812 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-48" transform="translate(174.951172 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-3" transform="translate(234.130859 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-5e" transform="translate(265.917969 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-b" transform="translate(329.541016 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(368.554688 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-f" transform="translate(432.177734 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(482.929688 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-c" transform="translate(546.552734 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-f" transform="translate(585.566406 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-b" transform="translate(636.318359 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(675.332031 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-f" transform="translate(738.955078 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-8cf" transform="translate(808.671875 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(911.425781 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-c" transform="translate(975.048828 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-60" transform="translate(1014.0625 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-1d" transform="translate(1077.685547 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-3" transform="translate(1111.376953 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-46" transform="translate(1143.164062 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-52" transform="translate(1199.169922 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-48" transform="translate(1259.375 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-49" transform="translate(1318.554688 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-49" transform="translate(1355.566406 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-4c" transform="translate(1392.578125 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-46" transform="translate(1424.560547 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-4c" transform="translate(1480.566406 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-48" transform="translate(1512.548828 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-51" transform="translate(1571.728516 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-57" transform="translate(1636.132812 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-4c" transform="translate(1676.318359 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-3" transform="translate(1708.300781 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-15" transform="translate(1740.087891 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-f" transform="translate(1803.710938 0.015625)"/> <use xlink:href="#fdb3434-DejaVuSerif-14" transform="translate(1854.462891 0.015625)"/> </g> </g> <g id="fdb3434-line2d_2"> <g clip-path="url(#fdb3434-p8e8e35bf26)"> <use xlink:href="#fdb3434-mfb1eb05970" x="572.794286" y="115.171429" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> </g> </g> <defs> <clipPath id="fdb3434-p5c32de29ff"> <rect x="5.76" y="21.64" width="292.285714" height="257.211429"/> </clipPath> <clipPath id="fdb3434-p8e8e35bf26"> <rect x="327.274286" y="21.64" width="292.285714" height="257.211429"/> </clipPath> </defs> </svg></figure>

**Esempi, dal più facile.**
1. **Base canonica**: i coefficienti di $\vec{v}$ sono le sue componenti, $(3, 1) = 3\vec{e}_1 + 1\vec{e}_2$ (figura, a sinistra).
2. **$(3, 1)$ nella base $\{(1, 1), (1, -1)\}$** (figura, a destra). Cerco $a, b$ con $a(1, 1) + b(1, -1) = (3, 1)$:
   $$
   \left[\begin{array}{cc|c} 1 & 1 & 3 \\ 1 & -1 & 1 \end{array}\right] \xrightarrow{E_{21}(-1)} \left[\begin{array}{cc|c} 1 & 1 & 3 \\ 0 & -2 & -2 \end{array}\right] \qquad R_2 - R_1 = (0,\ -2 \mid 1 - 3)
   $$
   $-2b = -2$, quindi $b = 1$; $a = 3 - b = 2$. Due pivot e nessuna variabile libera: la soluzione è unica, come dice la proposizione. Verifica: $2(1, 1) + (1, -1) = (3, 1)$.
3. **Esempio 65 della <span class="src">dispensa</span>, in $\mathbb{R}^3$.** Nella base $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ con $\vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (1, 0, 1)$, $\vec{v}_3 = (0, 1, 1)$ (è la seconda base della prof, p. 22) scrivere $\vec{v} = (4, 3, 2)$.
   $$
   \left[\begin{array}{ccc|c} 1 & 1 & 0 & 4 \\ 1 & 0 & 1 & 3 \\ 0 & 1 & 1 & 2 \end{array}\right]
   $$
   - $E_{21}(-1)$: $R_2 - R_1 = (0, -1, 1 \mid -1)$;
   - $E_{32}(1)$: $R_3 + R_2 = (0, 0, 2 \mid 1)$;
   - $D_2(-1)$: $(0, 1, -1 \mid 1)$; $D_3(\frac12)$: $(0, 0, 1 \mid \frac12)$;
   - $E_{23}(1)$: $R_2 + R_3 = (0, 1, 0 \mid \frac32)$;
   - $E_{12}(-1)$: $R_1 - R_2 = (1, 0, 0 \mid 4 - \frac32) = (1, 0, 0 \mid \frac52)$.
   $$
   \vec{v} = \frac52\vec{v}_1 + \frac32\vec{v}_2 + \frac12\vec{v}_3
   $$
   Verifica: $\frac52(1, 1, 0) + \frac32(1, 0, 1) + \frac12(0, 1, 1) = \left(\frac52 + \frac32,\ \frac52 + \frac12,\ \frac32 + \frac12\right) = (4, 3, 2)$.

**Controesempio: senza indipendenza l'unicità cade.** Con $\vec{v}_1 = (1, 0, 2)$, $\vec{v}_2 = (-1, 1, 0)$, $\vec{v}_3 = (0, 1, 2) = \vec{v}_1 + \vec{v}_2$ (esempio 3 dell'appartenenza in [Generatori](/uni/gal/generatori/)), $(1, 1, 4) = 2\vec{v}_1 + \vec{v}_2 = \vec{v}_1 + \vec{v}_3$: due scritture diverse. La differenza delle due è $\vec{v}_1 + \vec{v}_2 - \vec{v}_3 = \vec{0}$, proprio la relazione di dipendenza.

### Proposizioni (a), (b), (c): basi di $\mathbb{R}^n$ col rango

La prof (<span class="src">p. 21</span>) ricorda le due proposizioni già viste, con $A = [\vec{v}_1 \mid \cdots \mid \vec{v}_k]$ ($n \times k$):

- **Proposizione (a)** ([Generatori](/uni/gal/generatori/)): $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq \mathbb{R}^n$ è un sistema di generatori di $\mathbb{R}^n$ $\iff$ $\operatorname{rg}(A) = n$. In particolare $k \geq n$.
- **Proposizione (b)** ([Dipendenza lineare](/uni/gal/dipendenza-lineare/)): $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq \mathbb{R}^n$ è linearmente indipendente $\iff$ $\operatorname{rg}(A) = k$. In particolare $k \leq n$.

Ora vediamo:

> [!abstract] Proposizione (c)
> $\{\vec{v}_1, \ldots, \vec{v}_k\} \subseteq \mathbb{R}^n$ è una base $\iff$ $\operatorname{rg}(A) = k$ e $k = n$.

- **Ipotesi**: $k$ vettori di $\mathbb{R}^n$.
- **Tesi**: sono una base se e solo se sono esattamente $n$ e la matrice $A$ (quadrata $n \times n$) ha rango $n$.

> [!note]- Dimostrazione (la prof: "segue da (a) e (b)", p. 22)
> Base vuol dire generatori **e** indipendenti.
> - ($\Rightarrow$) Generano, quindi per (a) $\operatorname{rg}(A) = n$. Sono indipendenti, quindi per (b) $\operatorname{rg}(A) = k$. Allora $k = \operatorname{rg}(A) = n$.
> - ($\Leftarrow$) Se $\operatorname{rg}(A) = k$ e $k = n$, allora $\operatorname{rg}(A) = n$: per (a) generano. E $\operatorname{rg}(A) = k$: per (b) sono indipendenti. Quindi sono una base. $\square$

**Conseguenze.**
- Una base di $\mathbb{R}^n$ ha **esattamente $n$ vettori**: con meno non si genera (a), con più non si è indipendenti (b).
- Con $k = n$ le due condizioni coincidono: $n$ vettori di $\mathbb{R}^n$ generano $\iff$ sono indipendenti $\iff$ sono una base. Basta controllarne una.
- $A$ è quadrata, e rango $n$ vuol dire $A$ **invertibile** ([Matrici invertibili](/uni/gal/matrici-invertibili/), teorema ★★★). Allora i coefficienti di un $\vec{v}$ nella base sono l'unica soluzione di $A\vec{\lambda} = \vec{v}$, cioè $\vec{\lambda} = A^{-1}\vec{v}$: è l'unicità della proposizione, vista con le matrici.

| quanti vettori | generano $\mathbb{R}^n$? | indipendenti? | base? |
| --- | --- | --- | --- |
| $k < n$ | mai | se $\operatorname{rg}(A) = k$ | mai |
| $k = n$ | se $\operatorname{rg}(A) = n$ | se $\operatorname{rg}(A) = n$ | se $\operatorname{rg}(A) = n$ |
| $k > n$ | se $\operatorname{rg}(A) = n$ | mai | mai |

**Esempi, dal più facile.**
1. **Esempio 1 della prof** (p. 22): $\vec{e}_1, \vec{e}_2, \vec{e}_3$ formano una base di $\mathbb{R}^3$ grazie alla proposizione (c): $A = I_3$ ha rango $3$, e $k = 3 = n$.
2. **Esempio 2 della prof** (p. 22): $\{(1, 1, 0), (1, 0, 1), (0, 1, 1)\}$, svolto qui sotto tra gli esempi a lezione. Rango $3$: base.
3. **Tre vettori di $\mathbb{R}^3$ che non sono una base**: $(1, 0, 1)$, $(0, 1, 1)$, $(1, 1, 2)$. Il terzo è la somma dei primi due, quindi sono dipendenti e il rango è $2$. Per la (c) non sono una base; per la seconda conseguenza non generano nemmeno $\mathbb{R}^3$.
4. **Con un parametro**: per quali $k$ $\{(1, 2), (2, k)\}$ è una base di $\mathbb{R}^2$?
   $$
   \begin{pmatrix} 1 & 2 \\ 2 & k \end{pmatrix} \xrightarrow{E_{21}(-2)} \begin{pmatrix} 1 & 2 \\ 0 & k - 4 \end{pmatrix} \qquad R_2 - 2R_1 = (2 - 2,\ k - 4)
   $$
   Base se e solo se $k \neq 4$. Per $k = 4$, $(2, 4) = 2(1, 2)$: paralleli.

## Metodo

### “$\{\vec{v}_1, \ldots, \vec{v}_k\}$ è una base di $\mathbb{R}^n$?" (anche "per quali $k$...")

Si riconosce da: "formano una base", "costituiscono una base", "per quali valori del parametro sono una base".

1. **Conta**: se $k \neq n$, **non è una base**, senza conti (proposizione (c)).
2. Se $k = n$: $A = [\vec{v}_1 \mid \cdots \mid \vec{v}_n]$, vettori **come colonne**.
3. Riduci a scalini con Gauss, scrivendo ogni operazione.
4. $n$ pivot: **base**. Meno: non è una base (e allora non generano e non sono indipendenti).
5. Con un parametro: pivot senza parametro, poi i valori che annullano i pivot col parametro, ricontrollati sostituendo.
6. **Controllo**: per un valore escluso, trova la relazione fra i vettori.

### "Scrivi $\vec{v}$ come combinazione degli elementi della base"

1. $[A \mid \vec{v}]$ con i vettori della base come colonne e $\vec{v}$ in fondo.
2. Gauss-Jordan fino alla forma ridotta: a sinistra deve venire $I_n$ (è una base).
3. L'ultima colonna dà i coefficienti, nell'ordine dei vettori della base.
4. **Controllo**: ricalcola $\lambda_1\vec{v}_1 + \cdots + \lambda_n\vec{v}_n$.

Se la base va anche verificata, si fanno i due punti con la stessa riduzione: la parte sinistra decide se è una base, la colonna di destra dà i coefficienti.

### Matrici e polinomi

In $M_2(\mathbb{R})$ e in $\mathbb{R}[x]_d$ si usano le due condizioni della definizione:
- **generano**: si prende un elemento generico (una matrice $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, un polinomio $a_0 + a_1x + \cdots$) e si mostra che il sistema per i coefficienti è compatibile per **ogni** scelta delle lettere;
- **indipendenti**: lo stesso sistema con l'elemento nullo ha solo la soluzione nulla.

Il sistema che esce, uguagliando elemento per elemento o coefficiente per coefficiente, ha la stessa matrice che si otterrebbe scrivendo ogni matrice (o polinomio) come ennupla dei suoi elementi (o coefficienti). Per questo i conti si fanno come in $\mathbb{R}^n$.

## Esempi svolti a lezione

> [!example]- Prof, 19/10, p. 20-21: le basi standard
> - $\mathbb{R}^n$: la base canonica $\{\vec{e}_1, \ldots, \vec{e}_n\}$, con $\vec{v} = v_1\vec{e}_1 + \cdots + v_n\vec{e}_n$.
> - $M_2(\mathbb{R})$: $\{A_1, A_2, A_3, A_4\}$, con $A = a_{11}A_1 + a_{12}A_2 + a_{21}A_3 + a_{22}A_4$.
> - $\mathbb{R}[x]_d$: $\{1, x, x^2, \ldots, x^d\}$, con $p(x) = a_0 + a_1x + \cdots + a_dx^d$.
> - $V^3$: $\{\vec{\imath}, \vec{\jmath}, \vec{k}\}$, i versori.
>
> La prof scrive per ognuna la combinazione che mostra che generano; l'indipendenza (non scritta negli appunti) è la riga "la combinazione è nulla solo se tutti i coefficienti lo sono", nelle definizioni qui sopra.

> [!example]- Prof, 19/10, p. 22: due basi di $\mathbb{R}^3$ con la proposizione (c)
> **1)** $\vec{e}_1 = (1, 0, 0)$, $\vec{e}_2 = (0, 1, 0)$, $\vec{e}_3 = (0, 0, 1)$ formano una base di $\mathbb{R}^3$ grazie alla (c), infatti
> $$
> A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
> $$
> ha rango $3$, e i vettori sono $k = 3 = n$.
>
> **2)** $\vec{v}_1 = (1, 1, 0)$, $\vec{v}_2 = (1, 0, 1)$, $\vec{v}_3 = (0, 1, 1)$.
>
> **Riconoscere il tipo**: tre vettori di $\mathbb{R}^3$, quindi $k = n$ e per la (c) basta il rango.
> $$
> B = [\vec{v}_1 \mid \vec{v}_2 \mid \vec{v}_3] = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}
> $$
> **$E_{21}(-1)$**, $R_2 \to R_2 - R_1$: $(1 - 1,\ 0 - 1,\ 1 - 0) = (0, -1, 1)$.
> $$
> \begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & 1 \\ 0 & 1 & 1 \end{pmatrix}
> $$
> **$E_{32}(1)$**, $R_3 \to R_3 + R_2$: $(0,\ 1 - 1,\ 1 + 1) = (0, 0, 2)$.
> $$
> \begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & 1 \\ 0 & 0 & 2 \end{pmatrix}
> $$
> Tre pivot ($1$, $-1$, $2$): $\operatorname{rg}(B) = 3$, quindi $\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$ è una base.
>
> **Controllo**: nessun vettore è combinazione degli altri due. Per esempio $\vec{v}_3 = a\vec{v}_1 + b\vec{v}_2$ chiederebbe $a + b = 0$, $a = 1$, $b = 1$ dalle tre componenti: $1 + 1 \neq 0$. La figura "non complanari" in [Dipendenza lineare](/uni/gal/dipendenza-lineare/) è questa base. L'esempio 65 della dispensa, qui sopra, scrive $(4, 3, 2)$ in questa base.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Basi (esercizi)](/uni/gal/basi-esercizi/).

## Errori tipici

- Controllare una sola delle due condizioni: $\{(1, 0), (0, 1), (1, 1)\}$ genera ma non è una base, $\{\vec{e}_1, \vec{e}_2\}$ in $\mathbb{R}^3$ è indipendente ma non è una base.
- Fare Gauss su $k \neq n$ vettori per decidere se sono una base di $\mathbb{R}^n$: la risposta è già no. Il conto serve solo se la domanda è un'altra (generano? sono indipendenti?).
- Dire "la base" di uno spazio: le basi sono tante, $\{(1, 1), (1, -1)\}$ è una base di $\mathbb{R}^2$ come la canonica.
- Pensare che i coefficienti di un vettore siano sempre le sue componenti: lo sono solo nella base canonica. $(3, 1)$ ha coefficienti $2, 1$ nella base $\{(1, 1), (1, -1)\}$.
- Scrivere i coefficienti nell'ordine sbagliato: vanno nell'ordine dei vettori della base, che per questo è un insieme ordinato.
- Dimenticare che la definizione chiede $V$ finitamente generato: $\mathbb{R}[x]$ non ha una base finita.
- Leggere i coefficienti da una forma a scalini non ridotta: la colonna di destra dà i coefficienti solo quando a sinistra c'è $I_n$.

## Domande

- Qual è la definizione di base di uno spazio vettoriale? Perché la prof chiede che lo spazio sia finitamente generato?

- Enuncia la proposizione sull'unicità della scrittura rispetto a una base. Da quale condizione viene l'esistenza e da quale l'unicità?

- Qual è la base canonica di $\mathbb{R}^n$? Perché è una base?

- Dai una base di $M_2(\mathbb{R})$, una di $\mathbb{R}[x]_d$ e una di $V^3$.

- Enuncia le proposizioni (a), (b), (c) per $k$ vettori di $\mathbb{R}^n$. Con cosa si confronta il rango in ciascuna?

- Quanti vettori ha una base di $\mathbb{R}^n$? Perché?

- Che legame c'è fra “$n$ vettori di $\mathbb{R}^n$ sono una base" e l'invertibilità della matrice che li ha come colonne?

- Dai un insieme che genera $\mathbb{R}^2$ ma non è una base, e uno indipendente in $\mathbb{R}^3$ che non è una base.

- Come si scrive un vettore come combinazione degli elementi di una base di $\mathbb{R}^n$? Perché la soluzione è unica?

- Come si imposta "per quali $k$ questi vettori formano una base di $\mathbb{R}^n$"? Qual è il primo controllo?

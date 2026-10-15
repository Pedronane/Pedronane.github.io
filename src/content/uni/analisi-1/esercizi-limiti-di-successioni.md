---
title: Esercizi su monotonia e limiti di successioni
materia: analisi-1
materiaNome: Analisi Matematica 1
materiaBreve: Analisi 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-08
lezioni:
  - 13 ott
ordine: 12
---

Gli esercizi 2 e 3 del III tutoraggio, "Successioni e loro limiti" (Barbon, Favari, Bellomo: <span class="src">Tutoraggio 3</span>), con la consegna: «Studiare la monotonia delle seguenti successioni» e «Calcolare i seguenti limiti, se esistono; altrimenti dimostrare che non esistono». L'esercizio 1 del foglio (sup e inf di un insieme con il logaritmo) sta in [Esercizi sup e inf](/uni/analisi-1/esercizi-sup-e-inf/). Poi gli esercizi del tutoraggio del 13/10, le crocette e gli esercizi del foglio 2 del 2020 di Ingegneria Industriale (<span class="src">Esercizi limiti di successioni 2020</span>, che ha gli stessi limiti del III tutoraggio con i risultati), ed esercizi tipo esame dal facile al livello del 30. La teoria è in [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/), [Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/), [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/) e [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/).

Ogni esercizio ha un **indizio** e una **soluzione**, entrambi chiusi: prova da solo, poi apri l'indizio, la soluzione solo alla fine. Le soluzioni hanno tutte la stessa forma: come si riconosce il tipo di limite e perché si sceglie quel metodo, poi i passaggi uno per riga con accanto la regola che li giustifica, alla fine il controllo del risultato (numerico per $n$ grande, o di buon senso).

> [!abstract] Per l'esame
> - **Saper fare**: studiare la monotonia con il segno di $a_{n+1} - a_n$; riconoscere la forma di un limite e scegliere la tecnica (raccogli chi comanda, razionalizza, Nepero generalizzato, gerarchia, carabinieri, criterio del rapporto); stringere un logaritmo fra due quantità note quando la continuità del logaritmo non si può ancora usare; dimostrare che un limite non esiste con due sottosuccessioni.
> - **Dove esce**: è il tipo di esercizio da 7 punti della parte 2 sui limiti di successioni. Le crocette chiedono la versione veloce degli stessi limiti, o se una successione converge, diverge o non ha limite (foglio 2 del 2020, esercizi 3 e 6).

## Cosa serve

**Convenzione.** $\log$ è il logaritmo naturale, in base $e$ (il foglio usa anche $\ln$ per la stessa cosa).

**Strumenti**, con la slide dove stanno:
- limiti fondamentali di $n^b$, $a^n$, $\log n$ (<span class="src">6/10, slide 45</span>);
- algebra dei limiti finiti (<span class="src">6/10, slide 46-47</span>), compresa la **potenza** $a_n^{b_n} \to a^b$ con $a > 0$ (<span class="src">7/10, slide 48</span>), e le forme determinate dell'algebra estesa (<span class="src">7/10, slide 49-50</span>);
- **Nepero generalizzato**: $|a_n| \to +\infty \Rightarrow \left(1 + \frac{1}{a_n}\right)^{a_n} \to e$, e in particolare $\left(1 + \frac\alpha n\right)^n \to e^\alpha$ (<span class="src">6/10, slide 37</span>);
- **confronto** (<span class="src">6/10, slide 40</span>), **carabinieri** (<span class="src">slide 41</span>) e "limitata per infinitesima" (<span class="src">slide 42</span>);
- il corollario sulle **sottosuccessioni**: due sottosuccessioni con limiti diversi, quindi il limite non esiste (<span class="src">6/10, slide 26</span>);
- **criterio del rapporto** (<span class="src">7/10, slide 62</span>) e **gerarchia** $\log_a n \ll n^\alpha \ll a^n \ll n! \ll n^n$ (<span class="src">7/10, slide 65</span>), con l'avvertimento del prof sul logaritmo di un esponenziale (<span class="src">12/10, slide 67</span>).

### Come riconosco la tecnica

```
cosa vedo                                       tecnica                         esercizi
somme di potenze, radici, esponenziali          raccogli chi comanda            3.1, 3.18, 3.20, 3.22, 3.32
fattoriali                                      (n+k)! = (n+k)···(n+1)·n!        3.8, 3.9
differenza di radici quadrate                   razionalizza                    3.31, 13/10
base -> numero diverso da 1                     forma determinata della potenza 3.2, 3.6, 3.10, 3.30, 3.36, 3.38
base -> 1, esponente -> ±∞                      [1^∞]: Nepero generalizzato     3.4, 3.11-3.15, 3.34-3.37, 3.39
log di una somma                                stringi il logaritmo            3.3, 3.7, 3.16, 3.17, 3.19-3.21
sin, cos, arctan, (-1)^n diviso un infinito     limitata per infinitesima       3.9, 3.18, 3.29
(-1)^n che resta dopo aver raccolto             pari e dispari                  3.33
```

### Il logaritmo senza continuità

La regola "se $x_n \to x > 0$ allora $\log x_n \to \log x$" è la **continuità del logaritmo**: arriva con la sezione 4.4 dei limiti di funzioni, dopo la slide 28 dove si sono fermate le lezioni del 14/10 ([Limiti di funzioni](/uni/analisi-1/limiti-di-funzioni/)). Fino ad allora un logaritmo si tratta con tre fatti già disponibili.

**(L1) $\log$ è crescente**: $0 < x < y \Rightarrow \log x < \log y$ ([Funzioni elementari](/uni/analisi-1/funzioni-elementari/)). Serve a stringere: se l'argomento sta fra due quantità, il logaritmo sta fra i loro logaritmi. Per esempio $2^n < 2^n + 1 \leq 2^{n+1}$ dà $n\log 2 < \log(2^n + 1) \leq (n + 1)\log 2$.

**(L2) Il logaritmo di Nepero**: per ogni $n \geq 1$
$$
\frac{1}{n+1} < \log\left(1 + \frac1n\right) < \frac1n
$$

> [!note]- Da dove viene (L2)
> 1. $\left(1 + \frac1n\right)^n < e < \left(1 + \frac1n\right)^{n+1}$ per ogni $n \geq 1$: la prima successione sale verso $e$, la seconda scende verso $e$ ([Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/), esercizio 7).
> 2. Applico $\log$, crescente (L1), ai tre membri: $\log\left(1 + \frac1n\right)^n < \log e < \log\left(1 + \frac1n\right)^{n+1}$.
> 3. $\log(a^b) = b\log a$ e $\log e = 1$: $n\log\left(1 + \frac1n\right) < 1 < (n+1)\log\left(1 + \frac1n\right)$.
> 4. Divido la disuguaglianza di sinistra per $n > 0$: $\log\left(1 + \frac1n\right) < \frac1n$.
> 5. Divido quella di destra per $n + 1 > 0$: $\frac{1}{n+1} < \log\left(1 + \frac1n\right)$. $\blacksquare$

**(L3) $\log y \leq y - 1$ per ogni $y \geq 1$.** Detto con $y = 1 + x$: $0 \leq \log(1 + x) \leq x$ per ogni $x \geq 0$. A parole: il logaritmo di "uno più qualcosa di piccolo" è al massimo quel qualcosa, quindi se il qualcosa tende a $0$ ci tende anche il logaritmo (carabinieri).

> [!note]- Da dove viene (L3)
> Prima mostro $e^t \geq 1 + t$ per ogni $t \geq 0$.
> 1. **Bernoulli**: $(1 + x)^n \geq 1 + nx$ per $x \geq 0$ e $n \geq 1$. Viene da Newton: $(1 + x)^n = 1 + nx + \binom n2 x^2 + \dots$ e gli addendi dal terzo in poi sono $\geq 0$ ([Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/), esercizio 7).
> 2. Con $x = \frac tn \geq 0$: $\left(1 + \frac tn\right)^n \geq 1 + t$ per ogni $n \geq 1$.
> 3. Il primo membro tende a $e^t$ (Nepero generalizzato con $\alpha = t$, slide 37; per $t = 0$ è la costante $1 = e^0$). Il secondo è la costante $1 + t$.
> 4. Per il confronto (slide 40) la disuguaglianza passa ai limiti: $e^t \geq 1 + t$.
>
> Ora sia $y \geq 1$ e $t = \log y$.
> 5. $t \geq 0$, perché $\log$ è crescente e $\log 1 = 0$.
> 6. Il passo 4 con questo $t$: $e^{\log y} \geq 1 + \log y$, cioè $y \geq 1 + \log y$, cioè $\log y \leq y - 1$. $\blacksquare$
>
> *Verifica*: $y = 2$ dà $\log 2 \approx 0{,}693 \leq 1$; $y = 1{,}1$ dà $0{,}0953 \leq 0{,}1$, quasi uguale: vicino a $1$ la stima è molto buona.

Con queste tre stime si fa tutto il lavoro che farebbe la continuità: 3.3, 3.7, 3.11, 3.16, 3.17, 3.19, 3.20 e 3.21 usano solo loro.

### Le forme $[1^\infty]$ in quattro righe

```
base = 1 + 1/a_n             a_n = 1/(base - 1),   |a_n| -> +∞
esponente = a_n · c_n        c_n = esponente / a_n = (base - 1) · esponente
base^esponente = [(1 + 1/a_n)^(a_n)]^(c_n)
-> e^c se c_n -> c finito;   +∞ se c_n -> +∞;   0 se c_n -> -∞
```

Gli ultimi due casi sono le forme determinate $[e^{+\infty}] = +\infty$ e $[e^{-\infty}] = 0$, con base che tende a $e > 1$. La seconda riga dice la cosa importante: **il risultato dipende solo da $(\text{base} - 1) \cdot \text{esponente}$**. È una gara fra quanto la base si avvicina a $1$ e quanto corre l'esponente.

<figure class="fig"><svg role="img" aria-label="Gara fra base ed esponente" xmlns:xlink="http://www.w3.org/1999/xlink" width="460.92pt" height="312.14192pt" viewBox="0 0 460.92 312.14192" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f2e5617-figure_1"> <g id="f2e5617-patch_1"> <path d="M 0 312.14192 L 460.92 312.14192 L 460.92 0 L 0 0 L 0 312.14192 z " style="fill: none"/> </g> <g id="f2e5617-axes_1"> <g id="f2e5617-patch_2"> <path d="M 5.76 280.064 L 452.16 280.064 L 452.16 25.04 L 5.76 25.04 L 5.76 280.064 z " style="fill: none"/> </g> <g id="f2e5617-matplotlib.axis_1"/> <g id="f2e5617-matplotlib.axis_2"/> <g id="f2e5617-line2d_1"> <defs> <path id="f2e5617-m8328401059" d="M 3 0 L -3 -3 L -3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g> <use xlink:href="#f2e5617-m8328401059" x="452.16" y="272.98" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f2e5617-line2d_2"> <defs> <path id="f2e5617-m2a1ce670fb" d="M 0 -3 L -3 3 L 3 3 z " style="stroke: var(--fig-axis); stroke-linejoin: miter"/> </defs> <g> <use xlink:href="#f2e5617-m2a1ce670fb" x="16.816347" y="25.04" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-linejoin: miter"/> </g> </g> <g id="f2e5617-line2d_3"> <path d="M 5.76 98.499755 L 452.16 98.499755 " clip-path="url(#f2e5617-p9da6da2859)" style="fill: none; stroke-dasharray: 3.7,1.6; stroke-dashoffset: 0; stroke: var(--fig-accent)"/> </g> <g id="f2e5617-line2d_4"> <path d="M 5.76 249.366667 L 452.16 249.366667 " clip-path="url(#f2e5617-p9da6da2859)" style="fill: none; stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-axis)"/> </g> <g id="f2e5617-line2d_5"> <defs> <path id="f2e5617-mfa7c30eaa2" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-steel)"/> </defs> <g clip-path="url(#f2e5617-p9da6da2859)"> <use xlink:href="#f2e5617-mfa7c30eaa2" x="30.63678" y="178.526667" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="f2e5617-line2d_6"> <defs> <path id="f2e5617-m4ae469094d" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f2e5617-p9da6da2859)"> <use xlink:href="#f2e5617-m4ae469094d" x="30.63678" y="178.526667" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="44.457214" y="132.233565" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="58.277647" y="115.657033" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="72.09808" y="108.662682" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="85.918514" y="105.167517" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="99.738947" y="103.194196" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="113.559381" y="101.977728" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="127.379814" y="101.177184" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="141.200248" y="100.623238" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="155.020681" y="100.224432" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="168.841115" y="99.927967" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="182.661548" y="99.701684" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="196.481981" y="99.525103" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="210.302415" y="99.384693" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="224.122848" y="99.271222" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="237.943282" y="99.178226" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="251.763715" y="99.101066" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="265.584149" y="99.036342" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="279.404582" y="98.981523" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="293.225015" y="98.934687" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="307.045449" y="98.894358" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="320.865882" y="98.859385" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="334.686316" y="98.82886" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="348.506749" y="98.80206" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="362.327183" y="98.778404" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="376.147616" y="98.757417" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="389.96805" y="98.738715" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="403.788483" y="98.721976" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="417.608916" y="98.706935" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f2e5617-m4ae469094d" x="431.42935" y="98.693371" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f2e5617-line2d_7"> <defs> <path id="f2e5617-m797591829e" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-axis)"/> </defs> <g clip-path="url(#f2e5617-p9da6da2859)"> <use xlink:href="#f2e5617-m797591829e" x="30.63678" y="178.526667" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="44.457214" y="212.393275" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="58.277647" y="227.538348" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="72.09808" y="234.198416" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="85.918514" y="237.809066" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="99.738947" y="240.050279" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="113.559381" y="241.570508" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="127.379814" y="242.667272" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="141.200248" y="243.495006" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="155.020681" y="244.141492" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="168.841115" y="244.660193" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="182.661548" y="245.085488" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="196.481981" y="245.440463" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="210.302415" y="245.741194" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="224.122848" y="245.999211" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="237.943282" y="246.222996" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="251.763715" y="246.41893" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="265.584149" y="246.591901" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="279.404582" y="246.745719" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="293.225015" y="246.883394" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="307.045449" y="247.007339" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="320.865882" y="247.119509" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="334.686316" y="247.221505" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="348.506749" y="247.31465" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="362.327183" y="247.400047" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="376.147616" y="247.478624" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="389.96805" y="247.551166" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="403.788483" y="247.618343" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="417.608916" y="247.680728" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> <use xlink:href="#f2e5617-m797591829e" x="431.42935" y="247.738816" style="fill: var(--fig-axis); stroke: var(--fig-axis)"/> </g> </g> <g id="f2e5617-patch_3"> <path d="M 16.816347 280.064 L 16.816347 25.04 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f2e5617-patch_4"> <path d="M 5.76 272.98 L 452.16 272.98 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f2e5617-text_1"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(443.71 303.258873) scale(0.13 -0.13)"> <defs> <path id="f2e5617-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2e5617-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> <g id="f2e5617-text_2"> <!-- $y$ --> <g style="fill: var(--fig-ink)" transform="translate(30.208347 34.916953) scale(0.13 -0.13)"> <defs> <path id="f2e5617-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2e5617-DejaVuSerif-Italic-5c" transform="translate(0 0.09375)"/> </g> </g> <g id="f2e5617-patch_5"> <path d="M 44.457214 69.905333 Q 44.457214 48.653333 44.457214 29.078384 " style="fill: none; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 41.657214 34.678384 L 44.457214 29.078384 L 47.257214 34.678384 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="f2e5617-text_3"> <!-- base $1 + 1/n$: prodotto $2n \to +\infty$, limite $+\infty$ --> <g style="fill: var(--fig-steel)" transform="translate(55.51356 51.014667) scale(0.1 -0.1)"> <defs> <path id="f2e5617-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-12" d="M 1656 4666 L 2156 4666 L 500 -594 L 0 -594 L 1656 4666 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-8da" d="M 2859 1747 Q 3016 1469 3223 1330 Q 3431 1191 3694 1191 Q 4009 1191 4209 1402 Q 4409 1613 4409 1941 Q 4409 2256 4225 2465 Q 4041 2675 3763 2675 Q 3509 2675 3304 2467 Q 3100 2259 2859 1747 z M 2478 2081 Q 2325 2356 2117 2493 Q 1909 2631 1644 2631 Q 1328 2631 1128 2423 Q 928 2216 928 1888 Q 928 1572 1112 1362 Q 1297 1153 1575 1153 Q 1828 1153 2033 1359 Q 2238 1566 2478 2081 z M 2700 1509 Q 2478 1084 2236 887 Q 1994 691 1697 691 Q 1275 691 983 1041 Q 691 1391 691 1906 Q 691 2453 952 2790 Q 1213 3128 1631 3128 Q 1928 3128 2162 2936 Q 2397 2744 2631 2303 Q 2844 2734 3091 2939 Q 3338 3144 3641 3144 Q 4056 3144 4351 2791 Q 4647 2438 4647 1919 Q 4647 1375 4386 1039 Q 4125 703 3706 703 Q 3409 703 3179 886 Q 2950 1069 2700 1509 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2e5617-DejaVuSerif-45" transform="translate(0 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-44" transform="translate(64.013672 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(123.632812 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(174.951172 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(234.130859 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(265.917969 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-e" transform="translate(348.505859 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(451.259766 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-12" transform="translate(514.882812 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-51" transform="translate(548.574219 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-1d" transform="translate(612.978516 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(646.669922 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-53" transform="translate(678.457031 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-55" transform="translate(742.470703 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(790.273438 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-47" transform="translate(850.478516 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(914.492188 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(974.697266 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1014.882812 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(1055.068359 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1115.273438 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-15" transform="translate(1147.060547 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-51" transform="translate(1210.683594 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-854" transform="translate(1294.052734 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-e" transform="translate(1415.771484 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-8da" transform="translate(1518.525391 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-f" transform="translate(1601.826172 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1633.613281 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-4f" transform="translate(1665.400391 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-4c" transform="translate(1697.382812 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-50" transform="translate(1729.365234 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-4c" transform="translate(1824.189453 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1856.171875 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(1896.357422 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1955.537109 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-e" transform="translate(1987.324219 0.015625)"/> <use xlink:href="#f2e5617-DejaVuSerif-8da" transform="translate(2071.113281 0.015625)"/> </g> </g> <g id="f2e5617-text_4"> <!-- base $1 + 1/n^2$: prodotto $2$, limite $e^2$ --> <g style="fill: var(--fig-ink)" transform="translate(269.349783 91.374745) scale(0.1 -0.1)"> <defs> <path id="f2e5617-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2e5617-DejaVuSerif-45" transform="translate(0 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-44" transform="translate(64.013672 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(123.632812 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(174.951172 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(234.130859 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(265.917969 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-e" transform="translate(348.505859 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(451.259766 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-12" transform="translate(514.882812 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-51" transform="translate(548.574219 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-15" transform="translate(617.416702 42.046875) scale(0.7)"/> <use xlink:href="#f2e5617-DejaVuSerif-1d" transform="translate(664.54805 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(698.239456 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-53" transform="translate(730.026566 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-55" transform="translate(794.040238 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(841.842972 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-47" transform="translate(902.04805 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(966.061722 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1026.2668 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1066.452347 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(1106.637894 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1166.842972 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-15" transform="translate(1198.630081 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-f" transform="translate(1262.253128 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1294.040238 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-4f" transform="translate(1325.827347 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-4c" transform="translate(1357.809769 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-50" transform="translate(1389.792191 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-4c" transform="translate(1484.61641 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1516.598831 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(1556.784378 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1615.964066 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-48" transform="translate(1647.751175 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-15" transform="translate(1711.369049 42.046875) scale(0.7)"/> </g> </g> <g id="f2e5617-text_5"> <!-- base $1 + 1/n^3$: prodotto $2/n \to 0$, limite $e^0 = 1$ --> <g style="fill: var(--fig-axis)" transform="translate(222.449783 263.489333) scale(0.1 -0.1)"> <defs> <path id="f2e5617-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2e5617-DejaVuSerif-45" transform="translate(0 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-44" transform="translate(64.013672 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(123.632812 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(174.951172 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(234.130859 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(265.917969 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-e" transform="translate(348.505859 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(451.259766 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-12" transform="translate(514.882812 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-51" transform="translate(548.574219 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-16" transform="translate(617.416702 42.046875) scale(0.7)"/> <use xlink:href="#f2e5617-DejaVuSerif-1d" transform="translate(664.54805 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(698.239456 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-53" transform="translate(730.026566 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-55" transform="translate(794.040238 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(841.842972 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-47" transform="translate(902.04805 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(966.061722 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1026.2668 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1066.452347 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(1106.637894 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1166.842972 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-15" transform="translate(1198.630081 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-12" transform="translate(1262.253128 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-51" transform="translate(1295.944535 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-854" transform="translate(1379.313675 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-13" transform="translate(1482.067581 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-f" transform="translate(1545.690628 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1577.477738 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-4f" transform="translate(1609.264847 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-4c" transform="translate(1641.247269 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-50" transform="translate(1673.229691 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-4c" transform="translate(1768.05391 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1800.036331 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(1840.221878 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1899.401566 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-48" transform="translate(1931.188675 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-13" transform="translate(1994.806549 42.046875) scale(0.7)"/> <use xlink:href="#f2e5617-DejaVuSerif-20" transform="translate(2060.902741 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(2163.656647 0.746875)"/> </g> </g> <g id="f2e5617-text_6"> <!-- stesso esponente $2n^2$: conta (base $- 1$) $\cdot$ esponente --> <g style="fill: var(--fig-ink)" transform="translate(74.88 17.04) scale(0.12 -0.12)"> <defs> <path id="f2e5617-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> <path id="f2e5617-DejaVuSerif-926" d="M 678 2222 Q 678 2397 798 2517 Q 919 2638 1097 2638 Q 1269 2638 1391 2516 Q 1513 2394 1513 2222 Q 1513 2047 1391 1926 Q 1269 1806 1097 1806 Q 919 1806 798 1925 Q 678 2044 678 2222 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(0 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(51.318359 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(91.503906 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(150.683594 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(202.001953 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(253.320312 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(313.525391 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(345.3125 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(404.492188 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-53" transform="translate(455.810547 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(519.824219 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-51" transform="translate(580.029297 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(644.433594 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-51" transform="translate(703.613281 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(768.017578 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(808.203125 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(867.382812 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-15" transform="translate(899.169922 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-Italic-51" transform="translate(962.792969 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-15" transform="translate(1031.635452 42.046875) scale(0.7)"/> <use xlink:href="#f2e5617-DejaVuSerif-1d" transform="translate(1078.7668 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1112.458206 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-46" transform="translate(1144.245316 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(1200.251175 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-51" transform="translate(1260.456253 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(1324.86055 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-44" transform="translate(1365.046097 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1424.665238 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-b" transform="translate(1456.452347 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-45" transform="translate(1495.466019 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-44" transform="translate(1559.479691 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(1619.098831 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(1670.417191 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1729.596878 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-8cf" transform="translate(1761.383988 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-14" transform="translate(1845.17305 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-c" transform="translate(1908.796097 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(1947.809769 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-926" transform="translate(1979.596878 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-3" transform="translate(2013.825394 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(2045.612503 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-56" transform="translate(2104.792191 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-53" transform="translate(2156.11055 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-52" transform="translate(2220.124222 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-51" transform="translate(2280.3293 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(2344.733597 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-51" transform="translate(2403.913285 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-57" transform="translate(2468.317581 0.746875)"/> <use xlink:href="#f2e5617-DejaVuSerif-48" transform="translate(2508.503128 0.746875)"/> </g> </g> </g> </g> <defs> <clipPath id="f2e5617-p9da6da2859"> <rect x="5.76" y="25.04" width="446.4" height="255.024"/> </clipPath> </defs> </svg></figure>

Tre successioni con lo stesso esponente $2n^2$ e la base che si avvicina a $1$ con velocità diverse. Con $1 + \frac1n$ il prodotto $(\text{base} - 1) \cdot \text{esponente} = 2n$ esplode e la successione esce subito dal disegno; con $1 + \frac{1}{n^2}$ il prodotto vale $2$ e la successione si ferma a $e^2 \approx 7{,}39$; con $1 + \frac{1}{n^3}$ il prodotto $\frac2n$ va a $0$ e la successione scende a $e^0 = 1$. Sono i tre comportamenti degli esercizi 3.12-3.15.

## Monotonia (esercizio 2)

**Metodo comune** ([Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/)): si studia il segno di $a_{n+1} - a_n$. Se è $> 0$ per ogni $n$, la successione è strettamente crescente; se è $< 0$, strettamente decrescente. Basta confrontare termini consecutivi, perché i confronti si mettono in fila.

Il foglio 2 del 2020 ha gli stessi cinque esercizi, ma con $n \in \mathbb{N}_+ = \{1, 2, 3, \dots\}$, e dice che sono tutte monotone. Qui $n$ parte da $0$, e nel 2.2 e nel 2.5 il primo passo, da $n = 0$ a $n = 1$, va nel verso opposto.

### 2.1) $a_n = \dfrac{1}{n^2 + 1}$

> [!tip]- Indizio
> Il denominatore cosa fa quando $n$ cresce? E il reciproco?

> [!example]- Soluzione
> *Come si riconosce*: $n$ compare solo al denominatore, quindi $a_n$ è il reciproco di una quantità positiva che cresce. *Metodo*: confronto diretto di $a_{n+1}$ e $a_n$, senza conti.
> 1. $(n+1)^2 + 1 = n^2 + 2n + 2$ (quadrato del binomio).
> 2. $n^2 + 2n + 2 > n^2 + 1$, perché la differenza è $2n + 1 > 0$.
> 3. Fra numeri positivi il reciproco gira la disuguaglianza: $a_{n+1} = \frac{1}{n^2 + 2n + 2} < \frac{1}{n^2 + 1} = a_n$.
>
> **Strettamente decrescente** su tutto $\mathbb{N}$.
>
> *Verifica*: $a_0 = 1$, $a_1 = \frac12$, $a_2 = \frac15$, $a_3 = \frac{1}{10}$.

### 2.2) $a_n = \dfrac{n}{n^2 + 1}$

> [!tip]- Indizio
> È l'esempio del prof del 6/10. Guarda i primi due termini prima di fare il conto, poi la differenza $a_n - a_{n+1}$ con denominatore comune.

> [!example]- Soluzione
> *Come si riconosce*: crescono sia il numeratore sia il denominatore, e a occhio non si vede chi vince. *Metodo*: differenza con denominatore comune, poi segno del numeratore. È l'esempio della <span class="src">6/10, slide 29</span>.
> 1. $a_0 = 0$ e $a_1 = \frac12$: $a_0 < a_1$, all'inizio sale.
> 2. $a_{n+1} = \frac{n+1}{(n+1)^2 + 1} = \frac{n+1}{n^2 + 2n + 2}$.
> 3. Denominatore comune:
> $$
> a_n - a_{n+1} = \frac{n(n^2 + 2n + 2) - (n+1)(n^2 + 1)}{(n^2 + 1)(n^2 + 2n + 2)}
> $$
> 4. Numeratore: $n^3 + 2n^2 + 2n - (n^3 + n^2 + n + 1) = n^2 + n - 1$.
> 5. Il denominatore è un prodotto di positivi. Il numeratore vale $1$ per $n = 1$ e cresce con $n$, quindi $n^2 + n - 1 \geq 1 > 0$ per $n \geq 1$.
> 6. Quindi $a_n - a_{n+1} > 0$, cioè $a_{n+1} < a_n$, per ogni $n \geq 1$.
>
> **Non è monotona su $\mathbb{N}$** (sale da $a_0$ ad $a_1$, poi scende); è strettamente decrescente da $n = 1$ in poi, cioè **definitivamente decrescente**. Il massimo è $a_1 = \frac12$.
>
> *Verifica*: $a_1 = 0{,}5$, $a_2 = 0{,}4$, $a_3 = 0{,}3$, $a_{10} = \frac{10}{101} \approx 0{,}099$.

### 2.3) $a_n = 2^n + \dfrac1n$, $n \geq 1$

> [!tip]- Indizio
> Un pezzo cresce molto, l'altro scende poco. Scrivi $a_{n+1} - a_n$ e confronta le due parti.

> [!example]- Soluzione
> *Come si riconosce*: somma di due pezzi monotoni in versi opposti, $2^n$ sale e $\frac1n$ scende. *Metodo*: differenza, separando i due pezzi, e confronto fra quanto sale il primo e quanto scende il secondo.
> 1. Riordino: $a_{n+1} - a_n = \left(2^{n+1} - 2^n\right) + \left(\frac{1}{n+1} - \frac1n\right)$.
> 2. $2^{n+1} - 2^n = 2^n(2 - 1) = 2^n$ (raccolgo $2^n$).
> 3. $\frac{1}{n+1} - \frac1n = \frac{n - (n+1)}{n(n+1)} = -\frac{1}{n(n+1)}$ (denominatore comune).
> 4. Quindi $a_{n+1} - a_n = 2^n - \frac{1}{n(n+1)}$.
> 5. Per $n \geq 1$: $2^n \geq 2$, e $n(n+1) \geq 2$ dà $\frac{1}{n(n+1)} \leq \frac12$.
> 6. $a_{n+1} - a_n \geq 2 - \frac12 = \frac32 > 0$.
>
> **Strettamente crescente**.
>
> *Verifica*: $a_1 = 3$, $a_2 = \frac92$, $a_3 = \frac{25}{3}$.

### 2.4) $a_n = n + \dfrac1n$, $n \geq 1$

> [!tip]- Indizio
> Stesso schema del 2.3. Attenzione al primo passo, $n = 1$: lì il pezzo che scende pesa di più.

> [!example]- Soluzione
> *Come si riconosce e metodo*: come il 2.3, un pezzo che sale ($n$) e uno che scende ($\frac1n$).
> 1. $a_{n+1} - a_n = \big((n+1) - n\big) + \left(\frac{1}{n+1} - \frac1n\right)$.
> 2. $= 1 - \frac{1}{n(n+1)}$ (stesso conto del passo 3 del 2.3).
> 3. Per $n \geq 1$: $n(n+1) \geq 2$, quindi $\frac{1}{n(n+1)} \leq \frac12$.
> 4. $a_{n+1} - a_n \geq 1 - \frac12 = \frac12 > 0$.
>
> **Strettamente crescente**. Il passo più stretto è il primo, da $a_1$ ad $a_2$, dove la differenza vale proprio $\frac12$.
>
> *Verifica*: $a_1 = 2$, $a_2 = \frac52$, $a_3 = \frac{10}{3}$.

### 2.5) $a_n = n^3 + 3n^2 - 9n + 2$

> [!tip]- Indizio
> Calcola $a_{n+1} - a_n$ espandendo $(n+1)^3$ e $(n+1)^2$: viene un polinomio di secondo grado. Per quali $n$ naturali è positivo?

> [!example]- Soluzione
> *Come si riconosce*: polinomio con termini di segno diverso; "comanda $n^3$" dice solo cosa succede per $n$ grande, non dal primo termine. *Metodo*: differenza, che abbassa il grado di uno.
> 1. $(n+1)^3 = n^3 + 3n^2 + 3n + 1$ e $(n+1)^2 = n^2 + 2n + 1$ (Newton).
> 2. $a_{n+1} - a_n = \big[(n+1)^3 - n^3\big] + 3\big[(n+1)^2 - n^2\big] - 9\big[(n+1) - n\big]$ (il $+2$ si cancella).
> 3. $= (3n^2 + 3n + 1) + 3(2n + 1) - 9 = 3n^2 + 9n - 5$.
> 4. Per $n = 0$ vale $-5 < 0$: $a_1 < a_0$.
> 5. Per $n \geq 1$: $3n^2 \geq 3$ e $9n \geq 9$, quindi $3n^2 + 9n - 5 \geq 7 > 0$: $a_{n+1} > a_n$.
>
> **Non è monotona su $\mathbb{N}$**: scende da $a_0$ ad $a_1$, poi sale sempre. È strettamente crescente da $n = 1$ in poi (definitivamente crescente). Il minimo è $a_1 = -3$.
>
> *Verifica*: $a_0 = 2$, $a_1 = -3$, $a_2 = 4$, $a_3 = 29$.

## Limiti (esercizio 3)

### Raccogli chi comanda e gerarchia

#### 3.1) $\displaystyle\lim \frac{1 + \log n}{\sqrt n - (\log n)^4}$

> [!tip]- Indizio
> Chi comanda fra $\sqrt n$ e $(\log n)^4$? Gerarchia: $\log n \ll n^\alpha$ per **ogni** $\alpha > 0$, anche piccolo. Scrivi $\frac{(\log n)^4}{\sqrt n}$ come una potenza quarta.

> [!example]- Soluzione
> *Come si riconosce*: sopra $\left[+\infty\right]$, sotto la differenza $[+\infty - \infty]$ fra una potenza e una potenza del logaritmo. *Metodo*: capire chi comanda sotto con la gerarchia, poi raccogli chi comanda.
> 1. Chi comanda sotto: $\frac{(\log n)^4}{\sqrt n} = \left(\frac{\log n}{n^{1/8}}\right)^4$, perché $\left(n^{1/8}\right)^4 = n^{1/2}$ (potenza di potenza).
> 2. $\frac{\log n}{n^{1/8}} \to 0$ per la gerarchia con $\alpha = \frac18$.
> 3. La potenza quarta di una successione infinitesima è infinitesima (prodotto di quattro fattori che tendono a $0$). Quindi $\frac{(\log n)^4}{\sqrt n} \to 0$: comanda $\sqrt n$.
> 4. Divido sopra e sotto per $\sqrt n$:
> $$
> \frac{1 + \log n}{\sqrt n - (\log n)^4} = \frac{\frac{1}{\sqrt n} + \frac{\log n}{\sqrt n}}{1 - \frac{(\log n)^4}{\sqrt n}}
> $$
> 5. $\frac{1}{\sqrt n} = n^{-1/2} \to 0$ (limiti fondamentali, esponente negativo) e $\frac{\log n}{\sqrt n} \to 0$ (gerarchia, $\alpha = \frac12$).
> 6. Algebra dei limiti: $\frac{0 + 0}{1 - 0} = 0$.
>
> *Verifica, e una sorpresa*: per $n = 1000$ il valore è $-0{,}0035$, negativo. Il denominatore $\sqrt n - (\log n)^4$ è negativo per tutti gli $n$ da $4$ fino a circa $2 \cdot 10^{11}$: il sorpasso di $\sqrt n$ su $(\log n)^4$ arriva tardissimo. La gerarchia parla solo di $n \to +\infty$, e per $n = 10^{20}$ il valore è circa $5 \cdot 10^{-9}$.

#### 3.8) $\displaystyle\lim \frac{(n+3)! - n!}{2n^2(n+1)!}$

> [!tip]- Indizio
> Raccogli $n!$ al numeratore e scrivi $(n+3)! = (n+3)(n+2)(n+1)\,n!$ e $(n+1)! = (n+1)\,n!$.

> [!example]- Soluzione
> *Come si riconosce*: fattoriali con argomenti diversi, $\left[\frac\infty\infty\right]$. *Metodo*: riscrivere tutti i fattoriali con lo stesso $n!$, che poi si semplifica; resta un rapporto di polinomi.
> 1. $(n+3)! = (n+3)(n+2)(n+1) \cdot n!$ e $(n+1)! = (n+1) \cdot n!$ (definizione di fattoriale).
> 2. Raccolgo $n!$ al numeratore: $(n+3)! - n! = n!\big[(n+3)(n+2)(n+1) - 1\big]$.
> 3. Semplifico $n!$:
> $$
> \frac{(n+3)(n+2)(n+1) - 1}{2n^2(n+1)}
> $$
> 4. Sviluppo: $(n+3)(n+2)(n+1) - 1 = n^3 + 6n^2 + 11n + 5$ e $2n^2(n+1) = 2n^3 + 2n^2$.
> 5. Raccolgo $n^3$ sopra e sotto: $\frac{1 + \frac6n + \frac{11}{n^2} + \frac{5}{n^3}}{2 + \frac2n} \to \frac12$.
>
> *Verifica*: $n = 100$ dà $0{,}525$. Di buon senso: il numeratore è circa $(n+3)!$, che è $(n+3)(n+2)$ volte $(n+1)!$, cioè circa $n^2$ volte; diviso $2n^2$ fa $\frac12$.

#### 3.9) $\displaystyle\lim \frac{n! + 2\cos n}{(2n)! + (-1)^n}$

> [!tip]- Indizio
> Raccogli $n!$ sopra e $(2n)!$ sotto. Quanto vale $\frac{n!}{(2n)!}$? Scrivilo come prodotto.

> [!example]- Soluzione
> *Come si riconosce*: fattoriali più pezzi limitati ($\cos n$, $(-1)^n$). *Metodo*: raccogli chi comanda; resta il rapporto $\frac{n!}{(2n)!}$, che si stima con i carabinieri.
> 1. Raccolgo: $\displaystyle\frac{n!\left(1 + \frac{2\cos n}{n!}\right)}{(2n)!\left(1 + \frac{(-1)^n}{(2n)!}\right)}$.
> 2. $\frac{2\cos n}{n!} \to 0$: $|2\cos n| \leq 2$ è limitata e $\frac{1}{n!} \to 0$ (perché $n! \geq n$). Limitata per infinitesima. Lo stesso per $\frac{(-1)^n}{(2n)!}$.
> 3. $\frac{n!}{(2n)!} = \frac{1 \cdot 2 \cdots n}{1 \cdot 2 \cdots n \cdot (n+1) \cdots (2n)} = \frac{1}{(n+1)(n+2)\cdots(2n)}$ (semplifico i primi $n$ fattori).
> 4. Il prodotto $(n+1)\cdots(2n)$ ha $n$ fattori, tutti $\geq 1$, e il primo è $n + 1$: vale almeno $n + 1$. Quindi $0 < \frac{n!}{(2n)!} \leq \frac{1}{n+1} \to 0$, e per i carabinieri $\frac{n!}{(2n)!} \to 0$.
> 5. Algebra dei limiti: $0 \cdot \frac{1 + 0}{1 + 0} = 0$.
>
> *Verifica*: $n = 10$ dà $1{,}5 \cdot 10^{-12}$.

#### 3.18) $\displaystyle\lim \frac{n^{10} + 10^{-n} + \cos(e^n)}{5^n + n^8}$

> [!tip]- Indizio
> Sopra comanda $n^{10}$ (gli altri due pezzi sono limitati), sotto $5^n$.

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ con potenze, esponenziali e pezzi limitati. *Metodo*: raccogli chi comanda, poi gerarchia.
> 1. Sopra: $10^{-n} \to 0$ e $|\cos(e^n)| \leq 1$ sono limitati, $n^{10} \to +\infty$ comanda. Sotto: $n^8 \ll 5^n$ (gerarchia), comanda $5^n$.
> 2. Raccolgo:
> $$
> \frac{n^{10}}{5^n} \cdot \frac{1 + \frac{10^{-n} + \cos(e^n)}{n^{10}}}{1 + \frac{n^8}{5^n}}
> $$
> 3. $\frac{n^{10}}{5^n} \to 0$ e $\frac{n^8}{5^n} \to 0$ (gerarchia, $n^\alpha \ll a^n$ con $a = 5$).
> 4. $\left|10^{-n} + \cos(e^n)\right| \leq 2$ e $\frac{1}{n^{10}} \to 0$: limitata per infinitesima, tende a $0$.
> 5. $0 \cdot \frac{1 + 0}{1 + 0} = 0$.
>
> *Verifica*: $n = 10$ dà circa $91$, perché $10^{10}$ è ancora più grande di $5^{10} \approx 9{,}8 \cdot 10^6$; $n = 100$ dà $1{,}3 \cdot 10^{-50}$. Ancora una volta la gerarchia parla di $n$ grande.

#### 3.20) $\displaystyle\lim \frac{n^4 + \sqrt{1 + n^7} + \log\left(1 + 3^{n^3}\right)}{\sqrt[3]{n + n^{12}} - n\sin n}$

> [!tip]- Indizio
> Sotto: $\sqrt[3]{n^{12}} = n^4$. Sopra: $\sqrt{n^7} = n^{7/2}$, e il logaritmo si stringe fra $n^3 \log 3$ e $(n^3 + 1)\log 3$. Chi comanda?

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ con radici e il logaritmo di un esponenziale. *Metodo*: trovare l'ordine di ogni pezzo ($n^4$, $n^{7/2}$, circa $n^3$; sotto $n^4$ e al massimo $n$), raccogliere $n^4$; il logaritmo si stringe con (L1).
>
> **Numeratore diviso $n^4$.**
> 1. $\frac{n^4}{n^4} = 1$.
> 2. $\frac{\sqrt{1 + n^7}}{n^4} = \sqrt{\frac{1 + n^7}{n^8}} = \sqrt{\frac{1}{n^8} + \frac1n}$ (porto $n^4 = \sqrt{n^8}$ dentro la radice). L'argomento tende a $0^+$ e $\left[(0^+)^{1/2}\right] = 0$: tende a $0$.
> 3. Il logaritmo: $3^{n^3} < 1 + 3^{n^3} \leq 2 \cdot 3^{n^3} < 3^{n^3 + 1}$ (perché $1 \leq 3^{n^3}$ e $2 < 3$).
> 4. Con (L1): $n^3 \log 3 < \log\left(1 + 3^{n^3}\right) < (n^3 + 1)\log 3$.
> 5. Divido per $n^4$: $\frac{\log 3}{n} < \frac{\log\left(1 + 3^{n^3}\right)}{n^4} < \left(\frac1n + \frac{1}{n^4}\right)\log 3$. I due estremi tendono a $0$: carabinieri, tende a $0$.
> 6. Numeratore$/n^4 \to 1 + 0 + 0 = 1$.
>
> **Denominatore diviso $n^4$.**
> 7. $\frac{\sqrt[3]{n + n^{12}}}{n^4} = \sqrt[3]{\frac{n + n^{12}}{n^{12}}} = \sqrt[3]{1 + \frac{1}{n^{11}}} \to 1$ (potenza, base $\to 1 > 0$).
> 8. $\frac{n\sin n}{n^4} = \frac{\sin n}{n^3} \to 0$ (limitata per infinitesima).
> 9. Denominatore$/n^4 \to 1 - 0 = 1$.
>
> Il limite è $\frac11 = 1$.
>
> *Verifica*: $n = 100$ dà $1{,}11$, $n = 1000$ dà $1{,}03$: si avvicina piano, perché il pezzo $\frac{\sqrt{n^7}}{n^4} = \frac{1}{\sqrt n}$ va a $0$ lentamente.

#### 3.22) $\displaystyle\lim \frac{\sqrt{n^2 + n} + \sqrt[3]{n^3 + n}}{n\left(3 - 2^{-n}\right)}$

> [!tip]- Indizio
> Porta fuori $n$ da ciascuna radice.

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ con radici di polinomi; ogni radice si comporta come $n$. *Metodo*: raccogliere dentro le radici la potenza che comanda e portarla fuori.
> 1. $\sqrt{n^2 + n} = \sqrt{n^2\left(1 + \frac1n\right)} = n\sqrt{1 + \frac1n}$ (con $n > 0$, $\sqrt{n^2} = n$).
> 2. $\sqrt[3]{n^3 + n} = \sqrt[3]{n^3\left(1 + \frac{1}{n^2}\right)} = n\sqrt[3]{1 + \frac{1}{n^2}}$.
> 3. Semplifico $n$:
> $$
> \frac{\sqrt{1 + \frac1n} + \sqrt[3]{1 + \frac{1}{n^2}}}{3 - 2^{-n}}
> $$
> 4. Le radici tendono a $1$ (potenza, base $\to 1$), $2^{-n} = \left(\frac12\right)^n \to 0$: il limite è $\frac{1 + 1}{3 - 0} = \frac23$.
>
> *Verifica*: $n = 100$ dà $0{,}668$. Il foglio del 2020 segnala che questo risultato è stato "corretto dopo la pubblicazione iniziale": $\frac23$ è quello giusto.

#### 3.32) $\displaystyle\lim \frac{5 + 3^n}{2^{2n} + 3^{n+3}}$

> [!tip]- Indizio
> $2^{2n} = 4^n$ e $3^{n+3} = 27 \cdot 3^n$. Chi comanda sotto?

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ con esponenziali scritti in modo da nascondere la base. *Metodo*: riscriverli tutti come $a^n$; fra esponenziali comanda la base più grande.
> 1. $2^{2n} = \left(2^2\right)^n = 4^n$ e $3^{n+3} = 3^3 \cdot 3^n = 27 \cdot 3^n$.
> 2. Sopra comanda $3^n$, sotto $4^n$ (perché $\frac{3^n}{4^n} = \left(\frac34\right)^n \to 0$).
> 3. Raccolgo:
> $$
> \frac{3^n\left(1 + \frac{5}{3^n}\right)}{4^n\left(1 + 27\left(\frac34\right)^n\right)} = \left(\frac34\right)^n \cdot \frac{1 + 5 \cdot 3^{-n}}{1 + 27\left(\frac34\right)^n}
> $$
> 4. $\left(\frac34\right)^n \to 0$ e $3^{-n} \to 0$ (basi minori di $1$): $0 \cdot \frac{1 + 0}{1 + 0} = 0$.
>
> *Verifica*: $n = 10$ dà $0{,}022$, $n = 100$ dà $3 \cdot 10^{-13}$.

#### 3.23) $\displaystyle\lim \frac{(n+1)^n}{n^{n+1}}$ e 3.24) $\displaystyle\lim \frac{(n+1)^{2n}}{n^{n+1}}$

> [!tip]- Indizio
> $\frac{(n+1)^n}{n^n} = \left(1 + \frac1n\right)^n$. Fai comparire Nepero e guarda cosa avanza.

> [!example]- Soluzione
> *Come si riconosce*: potenze con l'esponente che dipende da $n$ e basi che differiscono di poco ($n + 1$ contro $n$). *Metodo*: separare un pezzo $\left(\frac{n+1}{n}\right)^n$, che tende a $e$, da quello che avanza.
>
> **3.23.**
> 1. $n^{n+1} = n^n \cdot n$.
> 2. $\frac{(n+1)^n}{n^n \cdot n} = \left(\frac{n+1}{n}\right)^n \cdot \frac1n = \left(1 + \frac1n\right)^n \cdot \frac1n$.
> 3. Il primo fattore tende a $e$, il secondo a $0$: il limite è $e \cdot 0 = 0$.
>
> *Verifica*: $n = 100$ dà $0{,}0270 \approx \frac{e}{100}$.
>
> **3.24.**
> 1. Moltiplico e divido per $n^{2n}$: $\frac{(n+1)^{2n}}{n^{n+1}} = \frac{(n+1)^{2n}}{n^{2n}} \cdot \frac{n^{2n}}{n^{n+1}}$.
> 2. $\frac{(n+1)^{2n}}{n^{2n}} = \left[\left(1 + \frac1n\right)^n\right]^2 \to e^2$ (potenza di potenza, poi potenza dei limiti).
> 3. $\frac{n^{2n}}{n^{n+1}} = n^{n-1} \to +\infty$.
> 4. Forma determinata $\left[e^2 \cdot (+\infty)\right] = +\infty$.
>
> *Verifica*: $n = 10$ dà $6{,}7 \cdot 10^9$.

#### 3.25) $\displaystyle\lim \frac{(n+1)^{2n}}{(2n)^n}$

> [!tip]- Indizio
> Tutto alla $n$: $\left(\frac{(n+1)^2}{2n}\right)^n$. Quanto è grande la base?

> [!example]- Soluzione
> *Come si riconosce*: rapporto di due potenze $n$-esime. *Metodo*: metterle sotto un unico esponente $n$ e guardare la base.
> 1. $(n+1)^{2n} = \left((n+1)^2\right)^n$, quindi $\frac{(n+1)^{2n}}{(2n)^n} = \left(\frac{(n+1)^2}{2n}\right)^n$.
> 2. La base è $\frac{n^2 + 2n + 1}{2n} = \frac n2 + 1 + \frac{1}{2n} \to +\infty$, l'esponente $n \to +\infty$: forma determinata $\left[(+\infty)^{+\infty}\right] = +\infty$.
>
> Con un solo carabiniere, senza forme: $(n+1)^2 \geq 4n \iff n^2 - 2n + 1 \geq 0 \iff (n-1)^2 \geq 0$, sempre vero. Quindi la base è $\geq 2$ e la successione è $\geq 2^n \to +\infty$ (confronto).
>
> *Verifica*: $n = 10$ dà $6{,}6 \cdot 10^7$, molto più di $2^{10} = 1024$.

#### 3.26) $\displaystyle\lim \frac{(n-1)^n}{n^n + 1}$ e 3.27) $\displaystyle\lim \frac{n^{n+1}}{n^n + 1}$

> [!tip]- Indizio
> Raccogli $n^n$ al denominatore in entrambi.

> [!example]- Soluzione
> *Come si riconosce*: potenze $n$-esime sopra e sotto, con un $+1$ che non conta. *Metodo*: raccogliere $n^n$ sotto.
>
> **3.26.**
> 1. $n^n + 1 = n^n\left(1 + n^{-n}\right)$.
> 2. $\frac{(n-1)^n}{n^n} = \left(\frac{n-1}{n}\right)^n = \left(1 - \frac1n\right)^n$.
> 3. $\left(1 - \frac1n\right)^n \to e^{-1}$ (Nepero generalizzato con $\alpha = -1$, slide 37).
> 4. $n^{-n} = \frac{1}{n^n} \to 0$.
> 5. Il limite è $\frac{e^{-1}}{1 + 0} = \frac1e$.
>
> *Verifica*: $n = 100$ dà $0{,}3660$, e $\frac1e \approx 0{,}3679$.
>
> **3.27.**
> 1. $\frac{n^{n+1}}{n^n\left(1 + n^{-n}\right)} = \frac{n}{1 + n^{-n}}$.
> 2. $\left[\frac{+\infty}{1}\right] = +\infty$.
>
> *Verifica*: $n = 10$ dà $\frac{10^{11}}{10^{10} + 1} \approx 10$.

#### 3.28) $\displaystyle\lim \sqrt[n]{n!}$

> [!tip]- Indizio
> Per la gerarchia $M^n \ll n!$ per ogni $M > 1$. Cosa dice questo su $n!$ confrontato con $M^n$ da un certo punto in poi? E sulla radice?

> [!example]- Soluzione
> *Come si riconosce*: base $n! \to +\infty$ ed esponente $\frac1n \to 0$, forma indeterminata $\left[\infty^0\right]$. *Metodo*: la definizione di limite $+\infty$, "per ogni $M$, definitivamente $a_n > M$", con la gerarchia per confrontare $n!$ e $M^n$.
> 1. Fisso $M > 1$.
> 2. $\frac{M^n}{n!} \to 0$ (gerarchia, $a^n \ll n!$; oppure criterio del rapporto: $\frac{M^{n+1}/(n+1)!}{M^n/n!} = \frac{M}{n+1} \to 0 < 1$).
> 3. Quindi $1 - \frac{M^n}{n!} \to 1 > 0$, e per la permanenza del segno è $> 0$ definitivamente: $n! > M^n$ definitivamente.
> 4. La radice $n$-esima è crescente sui positivi: $\sqrt[n]{n!} > \sqrt[n]{M^n} = M$ definitivamente.
> 5. $M > 1$ è arbitrario (e per $M \leq 1$ basta usare $M = 2$): è la definizione di $\sqrt[n]{n!} \to +\infty$.
>
> *Verifica*: $n = 10$ dà $4{,}5$, $n = 100$ dà $38$, $n = 1000$ dà $369$. Cresce circa come $\frac ne$: è il secondo limite del 3.5 del 13/10, sotto.

### Razionalizzare

#### 3.31) $\displaystyle\lim \frac{1}{\sqrt n\left(\sqrt{n+1} - \sqrt{n-2}\right)}$

> [!tip]- Indizio
> Differenza di radici quadrate: moltiplica e dividi per la somma.

> [!example]- Soluzione
> *Come si riconosce*: $\sqrt{n+1} - \sqrt{n-2}$ è $[+\infty - \infty]$ fra radici con lo stesso ordine, e tutta la forma è $\left[\frac{1}{\infty \cdot 0}\right]$. *Metodo*: razionalizzare, cioè $(a - b)(a + b) = a^2 - b^2$, che toglie le radici dalla differenza.
> 1. $\left(\sqrt{n+1} - \sqrt{n-2}\right)\left(\sqrt{n+1} + \sqrt{n-2}\right) = (n+1) - (n-2) = 3$ (prodotto notevole; $n \geq 2$ perché la radice esista).
> 2. Quindi $\sqrt{n+1} - \sqrt{n-2} = \frac{3}{\sqrt{n+1} + \sqrt{n-2}}$.
> 3. Sostituisco: $\displaystyle\frac{1}{\sqrt n\left(\sqrt{n+1} - \sqrt{n-2}\right)} = \frac{\sqrt{n+1} + \sqrt{n-2}}{3\sqrt n}$.
> 4. Divido ogni radice per $\sqrt n$: $\frac{\sqrt{n+1}}{\sqrt n} = \sqrt{1 + \frac1n}$ e $\frac{\sqrt{n-2}}{\sqrt n} = \sqrt{1 - \frac2n}$.
> 5. $\frac{\sqrt{1 + \frac1n} + \sqrt{1 - \frac2n}}{3} \to \frac{1 + 1}{3} = \frac23$.
>
> *Verifica*: $n = 100$ dà $0{,}665$.

### Potenze: forme determinate

Prima di tutto si guardano base ed esponente **separatamente** (slide 48-50): se la base tende a un numero $a > 0$ e l'esponente a un numero $b$, il limite è $a^b$; se la base tende a $a > 1$ (o a $+\infty$) e l'esponente a $+\infty$, il limite è $+\infty$; se la base tende a $a \in [0, 1)$, con base positiva, e l'esponente a $+\infty$, il limite è $0$. Solo con base $\to 1$ ed esponente $\to \pm\infty$ la forma è indeterminata, e serve Nepero.

#### 3.2) $\displaystyle\lim \sqrt[n]{2^n + 3^n}$

> [!tip]- Indizio
> Raccogli $3^n$ dentro la radice: $\sqrt[n]{3^n} = 3$.

> [!example]- Soluzione
> *Come si riconosce*: base $2^n + 3^n \to +\infty$, esponente $\frac1n \to 0$: forma indeterminata $\left[\infty^0\right]$. *Metodo*: raccogliere dentro la radice chi comanda, così la radice di quello si calcola e resta una base che tende a $1$.
> 1. $2^n + 3^n = 3^n\left(1 + \left(\frac23\right)^n\right)$ (raccolgo $3^n$).
> 2. $\sqrt[n]{3^n\left(1 + \left(\frac23\right)^n\right)} = \sqrt[n]{3^n} \cdot \left(1 + \left(\frac23\right)^n\right)^{1/n} = 3\left(1 + \left(\frac23\right)^n\right)^{1/n}$ (radice di un prodotto).
> 3. La base $1 + \left(\frac23\right)^n \to 1 > 0$, l'esponente $\frac1n \to 0$: potenza dei limiti, tende a $1^0 = 1$.
> 4. Il limite è $3 \cdot 1 = 3$.
>
> In generale $\sqrt[n]{a^n + b^n} \to \max\{a, b\}$ con $a, b > 0$: comanda la base più grande.
>
> *Verifica*: $n = 10$ dà $3{,}005$.

#### 3.6) $\displaystyle\lim \left(\sqrt[n]{3} - 1\right)^n$

> [!tip]- Indizio
> A cosa tende $3^{1/n}$? Allora a cosa tende la base, e con che segno?

> [!example]- Soluzione
> *Come si riconosce*: potenza con esponente $n$; prima la base. *Metodo*: limite della base, poi la forma.
> 1. $3^{1/n} \to 3^0 = 1$ (potenza: base costante $3$, esponente $\frac1n \to 0$).
> 2. $3^{1/n} > 1$ perché $3 > 1$ e $\frac1n > 0$: la base $3^{1/n} - 1$ è positiva e tende a $0$, cioè a $0^+$.
> 3. Esponente $n \to +\infty$: forma determinata $\left[\left(0^+\right)^{+\infty}\right] = 0$ (slide 50).
>
> *Verifica*: $n = 10$ dà $4{,}5 \cdot 10^{-10}$.

#### 3.10) $\displaystyle\lim \left(2 + \frac1n\right)^n$

> [!tip]- Indizio
> Non è $[1^\infty]$: guarda bene la base.

> [!example]- Soluzione
> *Come si riconosce*: sembra Nepero per via di $\frac1n$ ed esponente $n$, ma la base tende a $2$.
> 1. Base $2 + \frac1n \to 2 > 1$.
> 2. Esponente $n \to +\infty$.
> 3. Forma determinata $\left[2^{+\infty}\right] = +\infty$ (slide 50). Anche senza forme: $\left(2 + \frac1n\right)^n \geq 2^n \to +\infty$.
>
> È la crocetta 1 dell'esercizio 3 del foglio del 2020, con risposta “$+\infty$" e non “$e$" o “$2e$".
>
> *Verifica*: $n = 10$ dà circa $1668$.

#### 3.30) $\displaystyle\lim \left(\frac{\cos(n^2) - \sin^2 n + 2n}{\sqrt{n^2 + (-1)^n}}\right)^{4/\sqrt[4]{n}}$

> [!tip]- Indizio
> Base ed esponente separatamente: la base tende a un numero positivo, l'esponente a $0$.

> [!example]- Soluzione
> *Come si riconosce*: potenza con base ed esponente che dipendono da $n$; prima i due limiti separati. *Metodo*: per la base raccogli chi comanda ($n$ sopra e sotto), poi la potenza dei limiti.
>
> **Base.**
> 1. Sopra: $\cos(n^2) - \sin^2 n$ sta fra $-2$ e $1$, limitato; comanda $2n$. Raccolgo $n$: $n\left(2 + \frac{\cos(n^2) - \sin^2 n}{n}\right)$.
> 2. Sotto: $\sqrt{n^2 + (-1)^n} = \sqrt{n^2\left(1 + \frac{(-1)^n}{n^2}\right)} = n\sqrt{1 + \frac{(-1)^n}{n^2}}$.
> 3. Semplifico $n$: $\displaystyle\frac{2 + \frac{\cos(n^2) - \sin^2 n}{n}}{\sqrt{1 + \frac{(-1)^n}{n^2}}}$.
> 4. $\frac{\cos(n^2) - \sin^2 n}{n} \to 0$ e $\frac{(-1)^n}{n^2} \to 0$ (limitata per infinitesima). La base tende a $\frac{2 + 0}{\sqrt{1 + 0}} = 2$.
>
> **Esponente.**
> 5. $\frac{4}{\sqrt[4]{n}} = 4n^{-1/4} \to 0$.
>
> **Potenza.**
> 6. Base $\to 2 > 0$, esponente $\to 0$: il limite è $2^0 = 1$.
>
> *Verifica*: lenta, perché l'esponente va a $0$ come $n^{-1/4}$: $n = 1000$ dà $1{,}64$; per $n = 10^8$ l'esponente vale $0{,}04$ e la potenza circa $2^{0{,}04} \approx 1{,}03$.

#### 3.5) $\displaystyle\lim \left(\frac{n-1}{n}\right)^{n^2}$ e 3.36) $\displaystyle\lim\left(\frac{n+2}{2n+1}\right)^{n^2}$

> [!tip]- Indizio
> Nel 3.5 scrivi $n^2 = n \cdot n$ e fai comparire $\left(1 - \frac1n\right)^n$. Nel 3.36 la base non tende a $1$.

> [!example]- Soluzione
> **3.5.** *Come si riconosce*: base $1 - \frac1n \to 1$, esponente $n^2 \to +\infty$: $[1^\infty]$. *Metodo*: spezzare l'esponente per far comparire Nepero.
> 1. $\frac{n-1}{n} = 1 - \frac1n$.
> 2. $\left(1 - \frac1n\right)^{n^2} = \left[\left(1 - \frac1n\right)^n\right]^n$ (potenza di potenza, $n^2 = n \cdot n$).
> 3. La base fra quadre tende a $e^{-1} \approx 0{,}37$, che sta in $(0, 1)$.
> 4. L'esponente $n \to +\infty$. Base che tende a un numero in $(0, 1)$, esponente $\to +\infty$: forma determinata, il limite è $0$.
>
> *Controllo con la regola della gara*: $(\text{base} - 1) \cdot \text{esponente} = -\frac1n \cdot n^2 = -n \to -\infty$, e $\left[e^{-\infty}\right] = 0$. *Verifica*: $n = 10$ dà $2{,}7 \cdot 10^{-5}$.
>
> **3.36.** *Come si riconosce*: c'è un esponente $n^2$, ma la base non tende a $1$.
> 1. Raccolgo $n$: $\frac{n+2}{2n+1} = \frac{1 + \frac2n}{2 + \frac1n} \to \frac12$.
> 2. Base $\to \frac12 \in (0, 1)$, esponente $n^2 \to +\infty$: $\left[\left(\frac12\right)^{+\infty}\right] = 0$.
>
> *Verifica*: $n = 10$ dà $5 \cdot 10^{-25}$.

#### 3.38) $\displaystyle\lim \left(\frac{n-3}{\sqrt[3]{n^4 + 1}}\right)^{\sqrt n}$

> [!tip]- Indizio
> $\sqrt[3]{n^4} = n^{4/3}$, che è più grande di $n$.

> [!example]- Soluzione
> *Come si riconosce*: potenza; la base è un rapporto fra $n$ e una radice cubica di $n^4$. *Metodo*: limite della base raccogliendo chi comanda, poi la forma.
> 1. $\sqrt[3]{n^4 + 1} = \sqrt[3]{n^4\left(1 + n^{-4}\right)} = n^{4/3}\sqrt[3]{1 + n^{-4}}$.
> 2. $n - 3 = n\left(1 - \frac3n\right)$.
> 3. Base $= \frac{n}{n^{4/3}} \cdot \frac{1 - \frac3n}{\sqrt[3]{1 + n^{-4}}} = n^{-1/3} \cdot \frac{1 - \frac3n}{\sqrt[3]{1 + n^{-4}}} \to 0 \cdot 1 = 0$.
> 4. Per $n \geq 4$ la base è positiva: tende a $0^+$.
> 5. Esponente $\sqrt n \to +\infty$: forma determinata $\left[\left(0^+\right)^{+\infty}\right] = 0$.
>
> *Verifica*: $n = 100$ dà $1{,}6 \cdot 10^{-7}$.

### Nepero: forme $[1^\infty]$

Tutti con i quattro passi di sopra: (1) somma e sottrai per scrivere la base come $1 + \frac{1}{a_n}$; (2) controlla $|a_n| \to +\infty$; (3) $c_n = \frac{\text{esponente}}{a_n}$; (4) il limite è $e^{\lim c_n}$, con $e^{+\infty} = +\infty$ ed $e^{-\infty} = 0$.

#### 3.4) $\displaystyle\lim \left(\frac{n+3}{n+1}\right)^n$

> [!tip]- Indizio
> Somma e sottrai: $\frac{n+3}{n+1} = 1 + \frac{2}{n+1}$.

> [!example]- Soluzione
> *Come si riconosce*: base $\frac{n+3}{n+1} \to 1$ (grado $1$ sopra e sotto, coefficienti $1$), esponente $n \to +\infty$: $[1^\infty]$. *Metodo*: Nepero generalizzato.
> 1. Somma e sottrai: $\frac{n+3}{n+1} = \frac{(n+1) + 2}{n+1} = 1 + \frac{2}{n+1}$.
> 2. $a_n = \frac{n+1}{2} \to +\infty$.
> 3. $c_n = \frac{n}{a_n} = \frac{2n}{n+1} \to 2$.
> 4. $\left(\frac{n+3}{n+1}\right)^n = \left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{c_n} \to e^2$ (potenza dei limiti, base $\to e > 0$).
>
> *Verifica*: $n = 1000$ dà $7{,}360$, e $e^2 \approx 7{,}389$.

#### 3.34) $\displaystyle\lim \left(\frac{n^2 + 2}{n^2 + n + 1}\right)^{2n}$

> [!tip]- Indizio
> $\frac{n^2 + 2}{n^2 + n + 1} = 1 + \frac{1 - n}{n^2 + n + 1}$. Qui $a_n$ è negativo: va bene lo stesso.

> [!example]- Soluzione
> *Come si riconosce*: base $\to 1$ (grado $2$ sopra e sotto, coefficienti $1$), esponente $2n \to +\infty$: $[1^\infty]$.
> 1. Somma e sottrai: $\frac{n^2 + 2}{n^2 + n + 1} = 1 + \frac{(n^2 + 2) - (n^2 + n + 1)}{n^2 + n + 1} = 1 + \frac{1 - n}{n^2 + n + 1}$.
> 2. $a_n = \frac{n^2 + n + 1}{1 - n}$ ($n \geq 2$) $\to -\infty$: $|a_n| \to +\infty$, e Nepero generalizzato vale anche con $a_n$ negativo.
> 3. $c_n = \frac{2n}{a_n} = \frac{2n(1 - n)}{n^2 + n + 1}$: grado $2$ sopra e sotto, coefficienti $-2$ e $1$, tende a $-2$.
> 4. Il limite è $e^{-2}$.
>
> *Verifica*: $n = 1000$ dà $0{,}1357$, e $e^{-2} \approx 0{,}1353$. Di buon senso: la base è sotto $1$, il risultato deve essere sotto $1$.

#### 3.35) $\displaystyle\lim \left(\frac{n^2 - 2}{n^2 + 4}\right)^{n}$

> [!tip]- Indizio
> Stesso schema. Guarda quanto vale $\frac{n}{a_n}$: chi è più grande fra $n$ e $a_n$?

> [!example]- Soluzione
> *Come si riconosce*: base $\to 1$, esponente $\to +\infty$: $[1^\infty]$.
> 1. $\frac{n^2 - 2}{n^2 + 4} = 1 + \frac{(n^2 - 2) - (n^2 + 4)}{n^2 + 4} = 1 - \frac{6}{n^2 + 4}$.
> 2. $a_n = -\frac{n^2 + 4}{6} \to -\infty$.
> 3. $c_n = \frac{n}{a_n} = -\frac{6n}{n^2 + 4} \to 0$ (grado $1$ sopra, $2$ sotto).
> 4. Il limite è $e^0 = 1$.
>
> Il motivo: la base si avvicina a $1$ come $\frac{6}{n^2}$, l'esponente cresce solo come $n$; il prodotto $\frac6n$ va a $0$. La base non fa in tempo a spostarsi da $1$.
>
> *Verifica*: $n = 100$ dà $0{,}942$, $n = 1000$ dà $0{,}994$.

#### 3.37) $\displaystyle\lim \left(\frac{n}{n+3}\right)^{2n^2}$ e 3.39) $\displaystyle\lim \left(\frac{n+2}{n+1}\right)^{n^2}$

> [!tip]- Indizio
> Qui è il contrario del 3.35: la base si avvicina a $1$ come $\frac1n$, l'esponente cresce come $n^2$.

> [!example]- Soluzione
> **3.37.** $[1^\infty]$, base $\to 1$ da sotto.
> 1. $\frac{n}{n+3} = 1 - \frac{3}{n+3}$, quindi $a_n = -\frac{n+3}{3} \to -\infty$.
> 2. $c_n = \frac{2n^2}{a_n} = -\frac{6n^2}{n+3} \to -\infty$ (grado $2$ sopra, $1$ sotto, coefficiente negativo).
> 3. La base fra quadre tende a $e > 1$, l'esponente $c_n \to -\infty$: $\left[e^{-\infty}\right] = 0$.
>
> *Verifica*: $n = 10$ dà $1{,}6 \cdot 10^{-23}$.
>
> **3.39.** $[1^\infty]$, base $\to 1$ da sopra.
> 1. $\frac{n+2}{n+1} = 1 + \frac{1}{n+1}$, quindi $a_n = n + 1 \to +\infty$.
> 2. $c_n = \frac{n^2}{n+1} \to +\infty$.
> 3. $\left[e^{+\infty}\right] = +\infty$.
>
> *Verifica*: $n = 10$ dà circa $6010$.

#### 3.11) $\displaystyle\lim \left(1 + \frac{n+1}{n\log n}\right)^{\log(1 + n^3)}$

> [!tip]- Indizio
> $a_n = \frac{n\log n}{n+1}$. Per l'esponente nuovo serve $\frac{\log(1 + n^3)}{\log n}$: stringi $1 + n^3$ fra $n^3$ e $2n^3$.

> [!example]- Soluzione
> *Come si riconosce*: la base è già nella forma $1 + \frac{1}{a_n}$, con $\frac{n+1}{n\log n} = \frac{1 + \frac1n}{\log n} \to 0$; l'esponente $\log(1 + n^3) \to +\infty$. È $[1^\infty]$. *Metodo*: Nepero; per l'esponente nuovo serve confrontare $\log(1 + n^3)$ con $\log n$, e si stringe con (L1).
> 1. Per $n \geq 2$: $a_n = \frac{n\log n}{n + 1} = \frac{n}{n+1} \cdot \log n \to 1 \cdot (+\infty) = +\infty$.
> 2. $c_n = \frac{\log(1 + n^3)}{a_n} = \frac{n+1}{n} \cdot \frac{\log(1 + n^3)}{\log n}$.
> 3. $n^3 < 1 + n^3 \leq 2n^3$ per $n \geq 1$.
> 4. (L1) e $\log(ab) = \log a + \log b$: $3\log n < \log(1 + n^3) \leq \log 2 + 3\log n$.
> 5. Divido per $\log n > 0$: $3 < \frac{\log(1 + n^3)}{\log n} \leq 3 + \frac{\log 2}{\log n}$.
> 6. $\frac{\log 2}{\log n} \to 0$ perché $\log n \to +\infty$. Carabinieri: $\frac{\log(1 + n^3)}{\log n} \to 3$.
> 7. $c_n \to 1 \cdot 3 = 3$, e il limite è $e^3$.
>
> *Verifica*: la convergenza è lentissima, perché $a_n$ cresce come $\log n$ e $\left(1 + \frac{1}{a_n}\right)^{a_n}$ arriva a $e$ con calma: $n = 1000$ dà $16{,}5$, $n = 10^9$ dà $18{,}7$, e $e^3 \approx 20{,}09$. È la crocetta 4 dell'esercizio 3 del 2020, risposta $e^3$.

#### 3.12-3.15) Quattro varianti della stessa base

$$
\text{3.12)}\ \left(\frac{n^4 - 7n^2 + 20}{n^4 - 8n^2 + 16}\right)^{\frac{2n^3 + n^2 + 2n + 1}{n+1}} \qquad \text{3.13)}\ \left(\frac{n^4 - 7n^3 + 20}{n^4 - 8n^3 + 16}\right)^{\frac{2n^3 + n^2 + 2n + 1}{n+1}}
$$
$$
\text{3.14)}\ \left(\frac{n^4 - 7n + 20}{n^4 - 8n + 16}\right)^{\frac{2n^3 + n^2 + 2n + 1}{n+1}} \qquad \text{3.15)}\ \left(\frac{n^4 - 7n + 20}{n^4 - 8n + 16}\right)^{2n^3 + n^2 + 2n + 1}
$$

> [!tip]- Indizio
> In tutti e quattro la base è $1 + \frac{\text{numeratore} - \text{denominatore}}{\text{denominatore}}$. Calcola la differenza, che è piccola, e confronta il suo ordine con quello dell'esponente: è tutto lì. Nota che $2n^3 + n^2 + 2n + 1 = (n^2 + 1)(2n + 1)$, quindi $\frac{2n^3 + n^2 + 2n + 1}{n + 1}$ si comporta come $2n^2$.

> [!example]- Soluzione
> *Come si riconosce*: in tutti e quattro la base tende a $1$ (grado $4$ sopra e sotto, coefficienti $1$) e l'esponente a $+\infty$: $[1^\infty]$. *Metodo*: Nepero, e la regola della gara: conta solo l'ordine di $(\text{base} - 1) \cdot \text{esponente}$.
>
> Le differenze numeratore meno denominatore e gli ordini:
>
> | | differenza | base $- 1$ circa | esponente circa | prodotto | limite |
> |---|---|---|---|---|---|
> | 3.12 | $n^2 + 4$ | $\frac{1}{n^2}$ | $2n^2$ | $\to 2$ | $e^2$ |
> | 3.13 | $n^3 + 4$ | $\frac1n$ | $2n^2$ | $\to +\infty$ | $+\infty$ |
> | 3.14 | $n + 4$ | $\frac{1}{n^3}$ | $2n^2$ | $\to 0$ | $1$ |
> | 3.15 | $n + 4$ | $\frac{1}{n^3}$ | $2n^3$ | $\to 2$ | $e^2$ |
>
> **Il conto per il 3.12.**
> 1. Differenza: $(n^4 - 7n^2 + 20) - (n^4 - 8n^2 + 16) = n^2 + 4$.
> 2. Il denominatore è un quadrato: $n^4 - 8n^2 + 16 = (n^2 - 4)^2$.
> 3. Base $= 1 + \frac{n^2 + 4}{(n^2 - 4)^2}$, quindi $a_n = \frac{(n^2 - 4)^2}{n^2 + 4} \to +\infty$ (grado $4$ su grado $2$).
> 4. $c_n = \frac{2n^3 + n^2 + 2n + 1}{n + 1} \cdot \frac{n^2 + 4}{(n^2 - 4)^2}$.
> 5. Grado sopra $3 + 2 = 5$, sotto $1 + 4 = 5$; coefficienti direttori $2 \cdot 1$ sopra e $1 \cdot 1$ sotto: $c_n \to 2$.
> 6. Il limite è $e^2$.
>
> **3.13.** Differenza $n^3 + 4$, $a_n = \frac{n^4 - 8n^3 + 16}{n^3 + 4} \to +\infty$ (positivo da $n = 8$ in poi). $c_n$ ha grado $3 + 3 = 6$ sopra e $1 + 4 = 5$ sotto, coefficiente positivo: $c_n \to +\infty$, e $\left[e^{+\infty}\right] = +\infty$.
>
> **3.14.** Differenza $n + 4$, $a_n = \frac{n^4 - 8n + 16}{n + 4}$. $c_n$ ha grado $3 + 1 = 4$ sopra e $1 + 4 = 5$ sotto: $c_n \to 0$, e $e^0 = 1$.
>
> **3.15.** Stessa base del 3.14, ma l'esponente $2n^3 + n^2 + 2n + 1$ non è diviso per $n + 1$. $c_n = \frac{(2n^3 + n^2 + 2n + 1)(n + 4)}{n^4 - 8n + 16}$ ha grado $4$ sopra e sotto, coefficiente $2$: $e^2$.
>
> La lezione del foglio: in $[1^\infty]$ conta solo la gara fra "quanto la base è vicina a $1$" ed "esponente" (figura nella sezione Cosa serve).
>
> *Verifica*: 3.12 con $n = 100$ dà $7{,}33$ ($e^2 \approx 7{,}39$); 3.13 con $n = 10$ dà già $7 \cdot 10^{33}$; 3.14 con $n = 100$ dà $1{,}021$; 3.15 con $n = 1000$ dà $7{,}46$. Sono le crocette 5-8 dell'esercizio 3 del 2020, con le risposte $e^2$, $+\infty$, $1$, $e^2$.

### Logaritmi stretti

Qui servono le stime (L1), (L2), (L3) della sezione Cosa serve. Anche il 3.11 e il 3.20, nelle sezioni sopra, stringono un logaritmo.

<figure class="fig"><svg role="img" aria-label="Logaritmo stretto fra due carabinieri" xmlns:xlink="http://www.w3.org/1999/xlink" width="718.8pt" height="299.708pt" viewBox="0 0 718.8 299.708" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f67b6db-figure_1"> <g id="f67b6db-patch_1"> <path d="M 0 299.708 L 718.8 299.708 L 718.8 0 L 0 0 L 0 299.708 z " style="fill: none"/> </g> <g id="f67b6db-axes_1"> <g id="f67b6db-patch_2"> <path d="M 43.44 256.948 L 347.803636 256.948 L 347.803636 24.1 L 43.44 24.1 L 43.44 256.948 z " style="fill: none"/> </g> <g id="f67b6db-matplotlib.axis_1"> <g id="f67b6db-xtick_1"> <g id="f67b6db-line2d_1"> <defs> <path id="f67b6db-m0a318d95ea" d="M 0 0 L 0 3.5 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="57.933506" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_1"> <!-- 1 --> <g style="fill: var(--fig-axis)" transform="translate(53.797881 273.824953) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-14"/> </g> </g> </g> <g id="f67b6db-xtick_2"> <g id="f67b6db-line2d_2"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="115.907532" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_2"> <!-- 5 --> <g style="fill: var(--fig-axis)" transform="translate(111.771907 273.824953) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-18"/> </g> </g> </g> <g id="f67b6db-xtick_3"> <g id="f67b6db-line2d_3"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="188.375065" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_3"> <!-- 10 --> <g style="fill: var(--fig-axis)" transform="translate(180.103815 273.824953) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-14"/> <use xlink:href="#f67b6db-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f67b6db-xtick_4"> <g id="f67b6db-line2d_4"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="260.842597" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_4"> <!-- 15 --> <g style="fill: var(--fig-axis)" transform="translate(252.571347 273.824953) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-14"/> <use xlink:href="#f67b6db-DejaVuSerif-18" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f67b6db-xtick_5"> <g id="f67b6db-line2d_5"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="333.31013" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_5"> <!-- 20 --> <g style="fill: var(--fig-axis)" transform="translate(325.03888 273.824953) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-15"/> <use xlink:href="#f67b6db-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f67b6db-text_6"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(191.396818 290.824953) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> </g> <g id="f67b6db-matplotlib.axis_2"> <g id="f67b6db-ytick_1"> <g id="f67b6db-line2d_6"> <defs> <path id="f67b6db-mf3db233570" d="M 0 0 L -3.5 0 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#f67b6db-mf3db233570" x="43.44" y="235.657782" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_7"> <!-- $\log 2$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 240.597782) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-4f" transform="translate(0 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(31.982422 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-4a" transform="translate(92.1875 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-15" transform="translate(172.005524 0.015625)"/> </g> </g> </g> <g id="f67b6db-ytick_2"> <g id="f67b6db-line2d_7"> <g> <use xlink:href="#f67b6db-mf3db233570" x="43.44" y="146.3452" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_8"> <!-- $1$ --> <g style="fill: var(--fig-axis)" transform="translate(28.12 151.283677) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> </g> <g id="f67b6db-ytick_3"> <g id="f67b6db-line2d_8"> <g> <use xlink:href="#f67b6db-mf3db233570" x="43.44" y="88.1332" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_9"> <!-- $1{,}2$ --> <g style="fill: var(--fig-axis)" transform="translate(15.64 93.071677) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-f" transform="translate(63.623047 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-15" transform="translate(95.410156 0.78125)"/> </g> </g> </g> <g id="f67b6db-ytick_4"> <g id="f67b6db-line2d_9"> <g> <use xlink:href="#f67b6db-mf3db233570" x="43.44" y="29.9212" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_10"> <!-- $1{,}4$ --> <g style="fill: var(--fig-axis)" transform="translate(15.64 34.859677) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-f" transform="translate(63.623047 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-17" transform="translate(95.410156 0.78125)"/> </g> </g> </g> </g> <g id="f67b6db-line2d_10"> <defs> <path id="f67b6db-m7c5a33e1bc" d="M 0 2 C 0.530406 2 1.03916 1.789267 1.414214 1.414214 C 1.789267 1.03916 2 0.530406 2 0 C 2 -0.530406 1.789267 -1.03916 1.414214 -1.414214 C 1.03916 -1.789267 0.530406 -2 0 -2 C -0.530406 -2 -1.03916 -1.789267 -1.414214 -1.414214 C -1.789267 -1.03916 -2 -0.530406 -2 0 C -2 0.530406 -1.789267 1.03916 -1.414214 1.414214 C -1.03916 1.789267 -0.530406 2 0 2 z " style="stroke: var(--fig-steel)"/> </defs> <g clip-path="url(#f67b6db-p18ef61ca9e)"> <use xlink:href="#f67b6db-m7c5a33e1bc" x="57.933506" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="72.427013" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="86.920519" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="101.414026" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="115.907532" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="130.401039" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="144.894545" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="159.388052" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="173.881558" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="188.375065" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="202.868571" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="217.362078" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="231.855584" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="246.349091" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="260.842597" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="275.336104" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="289.82961" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="304.323117" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="318.816623" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="333.31013" y="235.657782" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="f67b6db-line2d_11"> <defs> <path id="f67b6db-maae76a5afd" d="M 0 2 C 0.530406 2 1.03916 1.789267 1.414214 1.414214 C 1.789267 1.03916 2 0.530406 2 0 C 2 -0.530406 1.789267 -1.03916 1.414214 -1.414214 C 1.03916 -1.789267 0.530406 -2 0 -2 C -0.530406 -2 -1.03916 -1.789267 -1.414214 -1.414214 C -1.789267 -1.03916 -2 -0.530406 -2 0 C -2 0.530406 -1.789267 1.03916 -1.414214 1.414214 C -1.03916 1.789267 -0.530406 2 0 2 z " style="stroke: var(--fig-accent)"/> </defs> <g clip-path="url(#f67b6db-p18ef61ca9e)"> <use xlink:href="#f67b6db-maae76a5afd" x="57.933506" y="33.910363" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="72.427013" y="134.784072" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="86.920519" y="168.408642" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="101.414026" y="185.220927" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="115.907532" y="195.308298" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="130.401039" y="202.033212" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="144.894545" y="206.836722" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="159.388052" y="210.439354" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="173.881558" y="213.241402" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="188.375065" y="215.48304" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="202.868571" y="217.317107" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="217.362078" y="218.845497" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="231.855584" y="220.138749" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="246.349091" y="221.247252" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="260.842597" y="222.207954" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="275.336104" y="223.048568" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="289.82961" y="223.790286" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="304.323117" y="224.449592" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="318.816623" y="225.039496" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="333.31013" y="225.570411" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f67b6db-line2d_12"> <defs> <path id="f67b6db-m5ef78accc6" d="M 0 3 C 0.795609 3 1.55874 2.683901 2.12132 2.12132 C 2.683901 1.55874 3 0.795609 3 0 C 3 -0.795609 2.683901 -1.55874 2.12132 -2.12132 C 1.55874 -2.683901 0.795609 -3 0 -3 C -0.795609 -3 -1.55874 -2.683901 -2.12132 -2.12132 C -2.683901 -1.55874 -3 -0.795609 -3 0 C -3 0.795609 -2.683901 1.55874 -2.12132 2.12132 C -1.55874 2.683901 -0.795609 3 0 3 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#f67b6db-p18ef61ca9e)"> <use xlink:href="#f67b6db-m5ef78accc6" x="57.933506" y="117.643107" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="72.427013" y="203.183701" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="86.920519" y="224.230472" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="101.414026" y="231.246431" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="115.907532" y="233.866502" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="130.401039" y="234.905674" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="144.894545" y="235.3342" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="159.388052" y="235.515939" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="173.881558" y="235.594679" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="188.375065" y="235.629372" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="202.868571" y="235.644865" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="217.362078" y="235.651861" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="231.855584" y="235.655049" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="246.349091" y="235.656513" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="260.842597" y="235.657189" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="275.336104" y="235.657504" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="289.82961" y="235.657651" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="304.323117" y="235.65772" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="318.816623" y="235.657752" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="333.31013" y="235.657768" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f67b6db-patch_3"> <path d="M 43.44 256.948 L 43.44 24.1 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f67b6db-patch_4"> <path d="M 43.44 256.948 L 347.803636 256.948 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f67b6db-text_11"> <!-- sopra: $(1 + 1/n)\log 2$ --> <g style="fill: var(--fig-accent)" transform="translate(239.556883 59.0272) scale(0.1 -0.1)"> <defs> <path id="f67b6db-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-12" d="M 1656 4666 L 2156 4666 L 500 -594 L 0 -594 L 1656 4666 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-56" transform="translate(0 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(51.318359 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-53" transform="translate(111.523438 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-55" transform="translate(175.537109 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-44" transform="translate(223.339844 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(282.958984 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(316.650391 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-b" transform="translate(348.4375 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(387.451172 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-e" transform="translate(470.039062 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(572.792969 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-12" transform="translate(636.416016 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(670.107422 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-c" transform="translate(734.511719 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-4f" transform="translate(773.525391 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(805.507812 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-4a" transform="translate(865.712891 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-15" transform="translate(945.530915 0.015625)"/> </g> </g> <g id="f67b6db-text_12"> <!-- in mezzo: $\log(2^n + 1)/n$ --> <g style="fill: var(--fig-ink)" transform="translate(226.156883 88.1332) scale(0.1 -0.1)"> <defs> <path id="f67b6db-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-4c" transform="translate(0 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-51" transform="translate(31.982422 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(96.386719 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-50" transform="translate(128.173828 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-48" transform="translate(222.998047 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-5d" transform="translate(282.177734 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-5d" transform="translate(334.863281 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(387.548828 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(447.753906 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(481.445312 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-4f" transform="translate(513.232422 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(545.214844 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-4a" transform="translate(605.419922 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-b" transform="translate(669.433594 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-15" transform="translate(708.447266 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(772.978638 41.670313) scale(0.7)"/> <use xlink:href="#f67b6db-DejaVuSerif-e" transform="translate(839.621704 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(942.37561 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-c" transform="translate(1005.998657 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-12" transform="translate(1045.012329 0.370313)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(1078.703735 0.370313)"/> </g> </g> <g id="f67b6db-text_13"> <!-- sotto: $\log 2 \approx 0{,}693$ --> <g style="fill: var(--fig-steel)" transform="translate(244.356883 117.2392) scale(0.1 -0.1)"> <defs> <path id="f67b6db-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-8f0" d="M 4684 1913 L 4684 1453 Q 4375 1172 4092 1040 Q 3809 909 3519 909 Q 3231 909 2713 1106 Q 2666 1125 2641 1134 Q 2609 1147 2541 1172 Q 2081 1350 1784 1350 Q 1497 1350 1226 1236 Q 956 1122 678 884 L 678 1344 Q 994 1625 1273 1753 Q 1553 1881 1844 1881 Q 2144 1881 2688 1675 L 2719 1663 Q 2753 1653 2816 1625 Q 3269 1447 3572 1447 Q 3859 1447 4134 1561 Q 4409 1675 4684 1913 z M 4684 3128 L 4684 2669 Q 4378 2391 4095 2261 Q 3813 2131 3519 2131 Q 3219 2131 2675 2338 L 2644 2350 Q 2609 2363 2541 2388 Q 2081 2566 1784 2566 Q 1497 2566 1226 2452 Q 956 2338 678 2100 L 678 2559 Q 994 2841 1273 2969 Q 1553 3097 1844 3097 Q 2144 3097 2688 2894 L 2719 2881 Q 2753 2869 2816 2841 Q 3269 2663 3572 2663 Q 3859 2663 4134 2777 Q 4409 2891 4684 3128 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-1c" d="M 2994 2091 Q 2784 1856 2512 1740 Q 2241 1625 1900 1625 Q 1206 1625 804 2044 Q 403 2463 403 3188 Q 403 3897 839 4323 Q 1275 4750 2003 4750 Q 2794 4750 3217 4161 Q 3641 3572 3641 2478 Q 3641 1253 3137 581 Q 2634 -91 1722 -91 Q 1475 -91 1203 -44 Q 931 3 647 97 L 647 872 L 997 872 Q 1038 556 1241 387 Q 1444 219 1784 219 Q 2391 219 2687 676 Q 2984 1134 2994 2091 z M 1978 4441 Q 1534 4441 1298 4117 Q 1063 3794 1063 3188 Q 1063 2581 1298 2256 Q 1534 1931 1978 1931 Q 2422 1931 2658 2245 Q 2894 2559 2894 3150 Q 2894 3772 2656 4106 Q 2419 4441 1978 4441 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-56" transform="translate(0 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(51.318359 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-57" transform="translate(111.523438 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-57" transform="translate(151.708984 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(191.894531 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(252.099609 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(285.791016 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-4f" transform="translate(317.578125 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(349.560547 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-4a" transform="translate(409.765625 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-15" transform="translate(489.583649 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-8f0" transform="translate(572.17154 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-13" transform="translate(674.925446 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-f" transform="translate(738.548493 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-19" transform="translate(770.335603 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-1c" transform="translate(833.958649 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-16" transform="translate(897.581696 0.015625)"/> </g> </g> <g id="f67b6db-text_14"> <!-- 3.3: due potenze di 2 fanno da carabinieri --> <g style="fill: var(--fig-ink)" transform="translate(78.691818 16.1) scale(0.11 -0.11)"> <defs> <path id="f67b6db-DejaVuSerif-11" d="M 603 325 Q 603 500 722 622 Q 841 744 1019 744 Q 1191 744 1312 622 Q 1434 500 1434 325 Q 1434 153 1312 31 Q 1191 -91 1019 -91 Q 841 -91 722 29 Q 603 150 603 325 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-16"/> <use xlink:href="#f67b6db-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-16" transform="translate(95.40625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(159.03125 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(192.71875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-47" transform="translate(224.5 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-58" transform="translate(288.515625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-48" transform="translate(352.921875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(412.109375 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-53" transform="translate(443.890625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(507.90625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-57" transform="translate(568.109375 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-48" transform="translate(608.296875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-51" transform="translate(667.484375 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-5d" transform="translate(731.890625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-48" transform="translate(784.578125 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(843.765625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-47" transform="translate(875.546875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-4c" transform="translate(939.5625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(971.546875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-15" transform="translate(1003.328125 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(1066.953125 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-49" transform="translate(1098.734375 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-44" transform="translate(1135.75 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-51" transform="translate(1195.375 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-51" transform="translate(1259.78125 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(1324.1875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(1384.390625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-47" transform="translate(1416.171875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-44" transform="translate(1480.1875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(1539.8125 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-46" transform="translate(1571.59375 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-44" transform="translate(1627.59375 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-55" transform="translate(1687.21875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-44" transform="translate(1735.015625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-45" transform="translate(1794.640625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-4c" transform="translate(1858.65625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-51" transform="translate(1890.640625 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-4c" transform="translate(1955.046875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-48" transform="translate(1987.03125 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-55" transform="translate(2046.21875 0)"/> <use xlink:href="#f67b6db-DejaVuSerif-4c" transform="translate(2094.015625 0)"/> </g> </g> </g> <g id="f67b6db-axes_2"> <g id="f67b6db-patch_5"> <path d="M 408.676364 256.948 L 713.04 256.948 L 713.04 24.1 L 408.676364 24.1 L 408.676364 256.948 z " style="fill: none"/> </g> <g id="f67b6db-matplotlib.axis_3"> <g id="f67b6db-xtick_6"> <g id="f67b6db-line2d_13"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="423.16987" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_15"> <!-- 1 --> <g style="fill: var(--fig-axis)" transform="translate(419.034245 273.824953) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-14"/> </g> </g> </g> <g id="f67b6db-xtick_7"> <g id="f67b6db-line2d_14"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="481.143896" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_16"> <!-- 5 --> <g style="fill: var(--fig-axis)" transform="translate(477.008271 273.824953) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-18"/> </g> </g> </g> <g id="f67b6db-xtick_8"> <g id="f67b6db-line2d_15"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="553.611429" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_17"> <!-- 10 --> <g style="fill: var(--fig-axis)" transform="translate(545.340179 273.824953) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-14"/> <use xlink:href="#f67b6db-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f67b6db-xtick_9"> <g id="f67b6db-line2d_16"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="626.078961" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_18"> <!-- 15 --> <g style="fill: var(--fig-axis)" transform="translate(617.807711 273.824953) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-14"/> <use xlink:href="#f67b6db-DejaVuSerif-18" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f67b6db-xtick_10"> <g id="f67b6db-line2d_17"> <g> <use xlink:href="#f67b6db-m0a318d95ea" x="698.546494" y="256.948" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_19"> <!-- 20 --> <g style="fill: var(--fig-axis)" transform="translate(690.275244 273.824953) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-15"/> <use xlink:href="#f67b6db-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="f67b6db-text_20"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(556.633182 290.824953) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> </g> <g id="f67b6db-matplotlib.axis_4"> <g id="f67b6db-ytick_5"> <g id="f67b6db-line2d_18"> <g> <use xlink:href="#f67b6db-mf3db233570" x="408.676364" y="237.862098" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_21"> <!-- $0{,}5$ --> <g style="fill: var(--fig-axis)" transform="translate(380.876364 242.800575) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-13" transform="translate(0 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-f" transform="translate(63.623047 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-18" transform="translate(95.410156 0.78125)"/> </g> </g> </g> <g id="f67b6db-ytick_6"> <g id="f67b6db-line2d_19"> <g> <use xlink:href="#f67b6db-mf3db233570" x="408.676364" y="142.43259" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_22"> <!-- $0{,}75$ --> <g style="fill: var(--fig-axis)" transform="translate(372.686364 147.371067) scale(0.13 -0.13)"> <defs> <path id="f67b6db-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-13" transform="translate(0 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-f" transform="translate(63.623047 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-1a" transform="translate(95.410156 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-18" transform="translate(159.033203 0.78125)"/> </g> </g> </g> <g id="f67b6db-ytick_7"> <g id="f67b6db-line2d_20"> <g> <use xlink:href="#f67b6db-mf3db233570" x="408.676364" y="47.003082" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="f67b6db-text_23"> <!-- $1$ --> <g style="fill: var(--fig-axis)" transform="translate(393.356364 51.941559) scale(0.13 -0.13)"> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> </g> </g> <g id="f67b6db-line2d_21"> <g clip-path="url(#f67b6db-pd3ade66408)"> <use xlink:href="#f67b6db-m7c5a33e1bc" x="423.16987" y="237.862098" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="437.663377" y="174.242426" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="452.156883" y="142.43259" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="466.65039" y="123.346689" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="481.143896" y="110.622754" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="495.637403" y="101.53423" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="510.130909" y="94.717836" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="524.624416" y="89.416197" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="539.117922" y="85.174885" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="553.611429" y="81.704721" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="568.104935" y="78.812918" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="582.598442" y="76.366008" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="597.091948" y="74.268656" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="611.585455" y="72.450951" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="626.078961" y="70.860459" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="640.572468" y="69.457084" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="655.065974" y="68.209639" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="669.559481" y="67.093505" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="684.052987" y="66.088984" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> <use xlink:href="#f67b6db-m7c5a33e1bc" x="698.546494" y="65.180131" style="fill: var(--fig-steel); stroke: var(--fig-steel)"/> </g> </g> <g id="f67b6db-line2d_22"> <g clip-path="url(#f67b6db-pd3ade66408)"> <use xlink:href="#f67b6db-maae76a5afd" x="423.16987" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="437.663377" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="452.156883" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="466.65039" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="481.143896" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="495.637403" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="510.130909" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="524.624416" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="539.117922" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="553.611429" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="568.104935" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="582.598442" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="597.091948" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="611.585455" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="626.078961" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="640.572468" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="655.065974" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="669.559481" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="684.052987" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> <use xlink:href="#f67b6db-maae76a5afd" x="698.546494" y="47.003082" style="fill: var(--fig-accent); stroke: var(--fig-accent)"/> </g> </g> <g id="f67b6db-line2d_23"> <g clip-path="url(#f67b6db-pd3ade66408)"> <use xlink:href="#f67b6db-m5ef78accc6" x="423.16987" y="164.134337" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="437.663377" y="119.174428" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="452.156883" y="99.28081" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="466.65039" y="88.009445" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="481.143896" y="80.743985" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="495.637403" y="75.668549" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="510.130909" y="71.921731" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="524.624416" y="69.041845" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="539.117922" y="66.759036" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="553.611429" y="64.904971" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="568.104935" y="63.369187" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="582.598442" y="62.076176" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="597.091948" y="60.972573" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="611.585455" y="60.01959" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="626.078961" y="59.188355" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="640.572468" y="58.456933" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="655.065974" y="57.808361" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="669.559481" y="57.229315" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="684.052987" y="56.709182" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#f67b6db-m5ef78accc6" x="698.546494" y="56.239405" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="f67b6db-patch_6"> <path d="M 408.676364 256.948 L 408.676364 24.1 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f67b6db-patch_7"> <path d="M 408.676364 256.948 L 713.04 256.948 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="f67b6db-text_24"> <!-- sopra: $1$ --> <g style="fill: var(--fig-accent)" transform="translate(664.493247 176.787213) scale(0.1 -0.1)"> <use xlink:href="#f67b6db-DejaVuSerif-56" transform="translate(0 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(51.318359 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-53" transform="translate(111.523438 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-55" transform="translate(175.537109 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-44" transform="translate(223.339844 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(282.958984 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(316.650391 0.78125)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(348.4375 0.78125)"/> </g> </g> <g id="f67b6db-text_25"> <!-- in mezzo: $n\log(1 + 1/n)$ --> <g style="fill: var(--fig-ink)" transform="translate(589.893247 199.690295) scale(0.1 -0.1)"> <use xlink:href="#f67b6db-DejaVuSerif-4c" transform="translate(0 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-51" transform="translate(31.982422 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(96.386719 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-50" transform="translate(128.173828 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-48" transform="translate(222.998047 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-5d" transform="translate(282.177734 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-5d" transform="translate(334.863281 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(387.548828 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(447.753906 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(481.445312 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(513.232422 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-4f" transform="translate(577.636719 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(609.619141 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-4a" transform="translate(669.824219 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-b" transform="translate(733.837891 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(772.851562 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-e" transform="translate(855.439453 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(958.193359 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-12" transform="translate(1021.816406 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(1055.507812 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-c" transform="translate(1119.912109 0.015625)"/> </g> </g> <g id="f67b6db-text_26"> <!-- sotto: $n/(n + 1)$ --> <g style="fill: var(--fig-steel)" transform="translate(631.393247 222.593377) scale(0.1 -0.1)"> <use xlink:href="#f67b6db-DejaVuSerif-56" transform="translate(0 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(51.318359 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-57" transform="translate(111.523438 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-57" transform="translate(151.708984 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(191.894531 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(252.099609 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(285.791016 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(317.578125 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-12" transform="translate(381.982422 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-b" transform="translate(415.673828 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(454.6875 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-e" transform="translate(538.056641 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(640.810547 0.015625)"/> <use xlink:href="#f67b6db-DejaVuSerif-c" transform="translate(704.433594 0.015625)"/> </g> </g> <g id="f67b6db-text_27"> <!-- 3.7: $(1 + 1/n)^n &lt; e &lt; (1 + 1/n)^{n+1}$, poi $\log$ --> <g style="fill: var(--fig-ink)" transform="translate(449.318182 16.1) scale(0.11 -0.11)"> <defs> <path id="f67b6db-DejaVuSerif-1f" d="M 4684 3188 L 1441 2003 L 4684 825 L 4684 294 L 678 1747 L 678 2266 L 4684 3719 L 4684 3188 z " transform="scale(0.015625)"/> <path id="f67b6db-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f67b6db-DejaVuSerif-16" transform="translate(0 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-11" transform="translate(63.623047 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-1a" transform="translate(95.410156 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-1d" transform="translate(159.033203 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(192.724609 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-b" transform="translate(224.511719 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(263.525391 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-e" transform="translate(346.113281 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(448.867188 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-12" transform="translate(512.490234 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(546.181641 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-c" transform="translate(610.585938 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(650.507935 42.046875) scale(0.7)"/> <use xlink:href="#f67b6db-DejaVuSerif-1f" transform="translate(717.151001 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-48" transform="translate(819.904907 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-1f" transform="translate(898.049438 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-b" transform="translate(1000.803345 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(1039.817017 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-e" transform="translate(1122.404907 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(1225.158813 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-12" transform="translate(1288.78186 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(1322.473267 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-c" transform="translate(1386.877563 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-Italic-51" transform="translate(1426.799561 42.046875) scale(0.7)"/> <use xlink:href="#f67b6db-DejaVuSerif-e" transform="translate(1485.157959 42.046875) scale(0.7)"/> <use xlink:href="#f67b6db-DejaVuSerif-14" transform="translate(1557.085693 42.046875) scale(0.7)"/> <use xlink:href="#f67b6db-DejaVuSerif-f" transform="translate(1604.217041 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(1636.00415 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-53" transform="translate(1667.79126 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(1731.804932 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-4c" transform="translate(1792.01001 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-3" transform="translate(1823.992432 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-4f" transform="translate(1855.779541 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-52" transform="translate(1887.761963 0.746875)"/> <use xlink:href="#f67b6db-DejaVuSerif-4a" transform="translate(1947.967041 0.746875)"/> </g> </g> </g> </g> <defs> <clipPath id="f67b6db-p18ef61ca9e"> <rect x="43.44" y="24.1" width="304.363636" height="232.848"/> </clipPath> <clipPath id="f67b6db-pd3ade66408"> <rect x="408.676364" y="24.1" width="304.363636" height="232.848"/> </clipPath> </defs> </svg></figure>

A sinistra il 3.3: $\frac{\log(2^n + 1)}{n}$ sta fra la costante $\log 2$ e $\left(1 + \frac1n\right)\log 2$, che scende verso $\log 2$. A destra il 3.7: $n\log\left(1 + \frac1n\right)$ sta fra $\frac{n}{n+1}$ e la costante $1$. In tutti e due i casi i carabinieri si stringono e trascinano con sé la successione in mezzo.

#### 3.3) $\displaystyle\lim \frac{\log(2^n + 1)}{n}$

> [!tip]- Indizio
> $2^n < 2^n + 1 \leq 2^{n+1}$. Applica $\log$, che è crescente, e dividi per $n$.

> [!example]- Soluzione
> *Come si riconosce*: logaritmo di una somma con un esponenziale dentro. La gerarchia (“$\log \ll n$") **non** si può usare: $\log(2^n + 1)$ vale circa $n\log 2$, che è dello stesso ordine di $n$ (<span class="src">12/10, pagine 6-8</span>, dove il prof lo svolge in due modi). *Metodo*: stringere l'argomento fra due potenze di $2$, poi (L1) e carabinieri.
> 1. $2^n < 2^n + 1$ e $2^n + 1 \leq 2^n + 2^n = 2^{n+1}$ (perché $1 \leq 2^n$).
> 2. (L1) e $\log(2^k) = k\log 2$: $n\log 2 < \log(2^n + 1) \leq (n+1)\log 2$.
> 3. Divido per $n > 0$: $\log 2 < \frac{\log(2^n + 1)}{n} \leq \left(1 + \frac1n\right)\log 2$.
> 4. Il carabiniere sotto è costante $\log 2$, quello sopra tende a $\log 2$: per i carabinieri il limite è $\log 2$.
>
> *Verifica*: $n = 10$ dà $\frac{\log 1025}{10} \approx 0{,}6932$, e $\log 2 \approx 0{,}6931$.

#### 3.7) $\displaystyle\lim\ n\log\left(1 + \frac1n\right)$

> [!tip]- Indizio
> $n\log\left(1 + \frac1n\right) = \log\left(1 + \frac1n\right)^n$: dentro c'è la successione di Nepero. Sai che $\left(1 + \frac1n\right)^n < e < \left(1 + \frac1n\right)^{n+1}$.

> [!example]- Soluzione
> *Come si riconosce*: $[\infty \cdot 0]$, $n$ per il logaritmo di qualcosa che tende a $1$. Portando $n$ all'esponente dentro il logaritmo compare $\left(1 + \frac1n\right)^n \to e$. Il passo naturale "allora il logaritmo tende a $\log e = 1$" è la continuità del logaritmo, non ancora fatta. *Metodo*: stringere con (L2), poi carabinieri.
> 1. (L2): $\frac{1}{n+1} < \log\left(1 + \frac1n\right) < \frac1n$ per ogni $n \geq 1$.
> 2. Moltiplico per $n > 0$: $\frac{n}{n+1} < n\log\left(1 + \frac1n\right) < 1$.
> 3. $\frac{n}{n+1} \to 1$ (grado $1$ sopra e sotto) e $1 \to 1$.
> 4. Carabinieri: il limite è $1$.
>
> Il risultato dice che per $n$ grande $\log\left(1 + \frac1n\right)$ vale circa $\frac1n$. Nella sezione 4.6 tornerà come limite notevole $\frac{\log(1 + x)}{x} \to 1$ per $x \to 0$ ([Limiti di funzioni](/uni/analisi-1/limiti-di-funzioni/)); qui lo si è ottenuto con le sole successioni.
>
> *Verifica*: $n = 10$ dà $0{,}953$, compreso fra $\frac{10}{11} \approx 0{,}909$ e $1$; $n = 100$ dà $0{,}995$. È l'esercizio 1.8 del foglio del 2020, risultato $1$.

#### 3.16) $\displaystyle\lim \frac{2^n + 4^{-n}}{\log(2^n + 1) + \log\left(2^{2^n} + 1\right)}$

> [!tip]- Indizio
> Stesso trucco del 3.3 per entrambi i logaritmi: $\log\left(2^{2^n} + 1\right)$ sta fra $2^n \log 2$ e $(2^n + 1)\log 2$. Chi comanda al denominatore?

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ con due logaritmi di somme; il secondo ha dentro $2^{2^n}$, quindi vale circa $2^n\log 2$ e comanda. *Metodo*: stringere ogni logaritmo come nel 3.3, poi carabinieri sul rapporto.
> 1. Dal 3.3: $n\log 2 < \log(2^n + 1) \leq (n + 1)\log 2$.
> 2. Lo stesso con $2^n$ al posto di $n$: $2^{2^n} < 2^{2^n} + 1 \leq 2^{2^n + 1}$, quindi $2^n\log 2 < \log\left(2^{2^n} + 1\right) \leq (2^n + 1)\log 2$.
> 3. Sommo: il denominatore $D_n$ soddisfa $(n + 2^n)\log 2 < D_n \leq (n + 2^n + 2)\log 2$.
> 4. Numeratore: $2^n + 4^{-n} = 2^n\left(1 + 8^{-n}\right)$, perché $\frac{4^{-n}}{2^n} = \frac{1}{4^n 2^n} = 8^{-n}$.
> 5. Un denominatore più grande dà un rapporto più piccolo. Raccogliendo $2^n$ anche nelle stime di $D_n$:
> $$
> \frac{1 + 8^{-n}}{\left(1 + \frac{n + 2}{2^n}\right)\log 2} \leq \frac{2^n + 4^{-n}}{D_n} < \frac{1 + 8^{-n}}{\left(1 + \frac{n}{2^n}\right)\log 2}
> $$
> 6. $\frac{n}{2^n} \to 0$ e $\frac{n + 2}{2^n} \to 0$ (gerarchia), $8^{-n} \to 0$. Tutti e due i carabinieri tendono a $\frac{1}{\log 2}$.
>
> Il limite è $\frac{1}{\log 2}$.
>
> *Verifica*: $n = 10$ dà $1{,}4287$, $n = 100$ dà $1{,}442695$, e $\frac{1}{\log 2} \approx 1{,}442695$.

#### 3.17) $\displaystyle\lim \frac{(\log n)^3 + \log(2 + 3^n)}{\sqrt n + \sqrt{\log n}}$

> [!tip]- Indizio
> $\log(2 + 3^n)$ si comporta come $n\log 3$. Al denominatore comanda $\sqrt n$. Basta una stima dal basso.

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$; sopra c'è il logaritmo di un esponenziale, che cresce come $n$, sotto qualcosa che cresce come $\sqrt n$. Ci si aspetta $+\infty$, e per $+\infty$ basta un carabiniere sotto. *Metodo*: stima dal basso del numeratore, stima dall'alto del denominatore.
> 1. $(\log n)^3 \geq 0$ per $n \geq 1$.
> 2. $3^n < 2 + 3^n$, quindi per (L1) $\log(2 + 3^n) > n\log 3$.
> 3. Il numeratore è $> n\log 3$.
> 4. $\log n \leq n - 1 < n$ per (L3), quindi $\sqrt{\log n} < \sqrt n$ e il denominatore è $< 2\sqrt n$.
> 5. Numeratore più grande e denominatore più piccolo:
> $$
> \frac{(\log n)^3 + \log(2 + 3^n)}{\sqrt n + \sqrt{\log n}} > \frac{n\log 3}{2\sqrt n} = \frac{\log 3}{2}\sqrt n \to +\infty
> $$
> 6. Confronto: il limite è $+\infty$.
>
> *Verifica*: $n = 1000$ dà $41{,}7$, sopra la stima $\frac{\log 3}{2}\sqrt{1000} \approx 17{,}4$.

#### 3.19) $\displaystyle\lim \frac{\log(\log n) + 3^{-n}}{\sin n - \log n}$

> [!tip]- Indizio
> Dividi sopra e sotto per $\log n$. Resta da capire $\frac{\log(\log n)}{\log n}$: è “$\frac{\log x}{x}$ con $x = \log n$". Per stimarlo usa (L3) con $y = \sqrt{\log n}$.

> [!example]- Soluzione
> *Come si riconosce*: il numeratore tende a $+\infty$ (piano), il denominatore a $-\infty$ ($\sin n$ è limitato, $-\log n \to -\infty$): $\left[\frac\infty\infty\right]$. Sotto comanda $\log n$, sopra $\log(\log n)$. Serve $\frac{\log(\log n)}{\log n} \to 0$, che sembra la gerarchia “$\log x \ll x$" ma con $x = \log n$ al posto di $n$: la gerarchia della slide 65 confronta $\log n$ con le potenze di $n$, e il prof avverte di usarla solo così (slide 67). *Metodo*: raccogliere $\log n$, poi stimare $\log(\log n)$ con (L3) e chiudere con i carabinieri.
>
> Il limite ha senso per $n \geq 2$, dove $\log n > 0$.
> 1. Divido sopra e sotto per $\log n > 0$:
> $$
> \frac{\frac{\log(\log n)}{\log n} + \frac{3^{-n}}{\log n}}{\frac{\sin n}{\log n} - 1}
> $$
> 2. $\frac{\sin n}{\log n} \to 0$: $\sin n$ è limitato e $\frac{1}{\log n} \to 0$ (limitata per infinitesima).
> 3. $\frac{3^{-n}}{\log n} \to 0 \cdot 0 = 0$.
> 4. Per $n \geq 3$ vale $\log n > 1$ (perché $3 > e$), quindi $y = \sqrt{\log n} > 1$ e $\log(\log n) > 0$.
> 5. (L3) con questo $y$: $\log y \leq y - 1 < y$.
> 6. $\log(\log n) = \log(y^2) = 2\log y < 2y = 2\sqrt{\log n}$ ($\log(a^2) = 2\log a$).
> 7. Divido per $\log n$: $0 < \frac{\log(\log n)}{\log n} < \frac{2\sqrt{\log n}}{\log n} = \frac{2}{\sqrt{\log n}}$.
> 8. $\log n \to +\infty$, quindi $\sqrt{\log n} \to +\infty$ e $\frac{2}{\sqrt{\log n}} \to 0$. Carabinieri: $\frac{\log(\log n)}{\log n} \to 0$.
> 9. Algebra dei limiti: $\frac{0 + 0}{0 - 1} = 0$.
>
> Il numeratore è positivo e il denominatore negativo, quindi la successione tende a $0$ da sotto.
>
> *Verifica*: lentissima, perché $\log(\log n)$ e $\log n$ crescono tutti e due pianissimo: $n = 10^3$ dà $-0{,}32$, $n = 10^{10}$ dà $-0{,}13$, $n = 10^{100}$ dà $-0{,}024$. Il foglio del 2020 (esercizio 4.4) dà $0$.

#### 3.21) $\displaystyle\lim \frac{1 + 2^{-n}}{\log(1 + e^{-n}) + 2}$

> [!tip]- Indizio
> Sembra che basti sostituire: $\log(1 + 0) = 0$. Ma "sostituire dentro il logaritmo" è la continuità. Stringi $\log(1 + e^{-n})$ con (L3).

> [!example]- Soluzione
> *Come si riconosce*: nessuna forma indeterminata in vista: sopra $\to 1$, e sotto c'è $\log(1 + e^{-n})$ con l'argomento che tende a $1$. L'unico passo delicato è dire che quel logaritmo tende a $0$. *Metodo*: (L1) e (L3) per stringerlo fra $0$ ed $e^{-n}$, carabinieri, poi algebra dei limiti.
> 1. $2^{-n} = \left(\frac12\right)^n \to 0$ ed $e^{-n} = \left(\frac1e\right)^n \to 0$ (basi minori di $1$).
> 2. Sotto: $1 + e^{-n} > 1$, quindi per (L1) $\log(1 + e^{-n}) > \log 1 = 0$.
> 3. Sopra: (L3) con $x = e^{-n} \geq 0$ dà $\log(1 + e^{-n}) \leq e^{-n}$.
> 4. $0 < \log(1 + e^{-n}) \leq e^{-n} \to 0$: carabinieri, $\log(1 + e^{-n}) \to 0$.
> 5. Il denominatore tende a $0 + 2 = 2 \neq 0$, il numeratore a $1 + 0 = 1$: quoziente dei limiti, $\frac12$.
>
> *Verifica*: $n = 10$ dà $0{,}50048$. Il foglio del 2020 (esercizio 4.6) dà $\frac12$.

### Funzioni limitate e non esistenza

#### 3.29) $\displaystyle\lim \frac{\arctan(n^2) + \sin n\cos n}{e^{n^2 - 2n}}$

> [!tip]- Indizio
> Il numeratore è limitato. Il denominatore?

> [!example]- Soluzione
> *Come si riconosce*: il numeratore non ha limite ($\sin n\cos n$ oscilla) ma è limitato, il denominatore esplode. *Metodo*: limitata per infinitesima.
> 1. $|\arctan(n^2)| < \frac\pi2$ e $|\sin n\cos n| \leq 1$: il numeratore è limitato da $\frac\pi2 + 1$ (disuguaglianza triangolare).
> 2. L'esponente $n^2 - 2n = n(n - 2) \to +\infty$.
> 3. $e^{n^2 - 2n}$: base $e > 1$, esponente $\to +\infty$, quindi $\to +\infty$; il reciproco tende a $0$.
> 4. Limitata per infinitesima (slide 42): il limite è $0$.
>
> *Verifica*: $n = 10$ dà $3{,}6 \cdot 10^{-35}$.

#### 3.33) $\displaystyle\lim \frac{n\sin n + \sin(n^2) + (-1)^n n^2}{n^2 + 1}$

> [!tip]- Indizio
> Dividi per $n^2$. Due pezzi vanno a $0$, il terzo è $(-1)^n$. Poi pari e dispari.

> [!example]- Soluzione
> *Come si riconosce*: dopo aver raccolto chi comanda ($n^2$), resta un $(-1)^n$ che non si spegne: si sospetta che il limite non esista. *Metodo*: due sottosuccessioni (pari e dispari) con limiti diversi, poi il corollario della slide 26.
> 1. Divido sopra e sotto per $n^2$:
> $$
> a_n = \frac{\frac{\sin n}{n} + \frac{\sin(n^2)}{n^2} + (-1)^n}{1 + \frac{1}{n^2}}
> $$
> 2. $\frac{\sin n}{n} \to 0$ e $\frac{\sin(n^2)}{n^2} \to 0$ (limitata per infinitesima).
> 3. Pari, $n = 2k$: $(-1)^{2k} = 1$, quindi $a_{2k} = \frac{\frac{\sin 2k}{2k} + \frac{\sin(4k^2)}{4k^2} + 1}{1 + \frac{1}{4k^2}} \to \frac{0 + 0 + 1}{1} = 1$ (le sottosuccessioni di successioni infinitesime sono infinitesime, slide 26).
> 4. Dispari, $n = 2k + 1$: $(-1)^{2k+1} = -1$, e allo stesso modo $a_{2k+1} \to \frac{0 + 0 - 1}{1} = -1$.
> 5. Due sottosuccessioni con limiti diversi, $1 \neq -1$: per il corollario della slide 26 il limite **non esiste**.
>
> *Verifica*: $n = 100$ dà $0{,}995$, $n = 101$ dà $-0{,}995$.

## Tutoraggio del 13/10

Gli esercizi del tutoraggio del 13/10, dai testi sul tuo quaderno degli esercizi (il foglio non è nel vault: quando arriva da Moodle, va in `20 - Source Materials/` e linkato qui). I numeri sono quelli del quaderno. Gli esercizi 1.1 e 1.3 (sup e inf) sono in [Esercizi sup e inf](/uni/analisi-1/esercizi-sup-e-inf/), esercizi 13 e 14. Gli esercizi 2.1, 2.2, 2.3 e 2.5 sono quelli della slide 60 del prof (<span class="src">7/10, slide 60</span>), svolti in [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/) (esercizi 2 e 3).

#### Esempio istruttivo: $\displaystyle\lim \left(\sqrt{n^2 + 2n} - n\right)$

> [!tip]- Indizio
> Forma $[+\infty - \infty]$ con una radice quadrata: razionalizza. Perché “$\sqrt{n^2 + 2n} \approx n$, quindi fa $0$" è sbagliato?

> [!example]- Soluzione
> *Come si riconosce*: differenza fra una radice quadrata e un polinomio dello stesso ordine, $[+\infty - \infty]$. *Metodo*: razionalizzare.
>
> **La trappola** (sul quaderno: "come fare giusto"). "Sotto la radice comanda $n^2$, quindi $\sqrt{n^2 + 2n} \approx n$ e la differenza fa $n - n = 0$": sbagliato. Che due infiniti siano dello stesso ordine non dice niente sulla loro **differenza**, che è una forma indeterminata.
>
> 1. Moltiplico e divido per la somma $\sqrt{n^2 + 2n} + n > 0$:
> $$
> \sqrt{n^2 + 2n} - n = \frac{\left(\sqrt{n^2 + 2n} - n\right)\left(\sqrt{n^2 + 2n} + n\right)}{\sqrt{n^2 + 2n} + n}
> $$
> 2. Prodotto notevole al numeratore: $(n^2 + 2n) - n^2 = 2n$.
> 3. Raccolgo $n$ sotto la radice ($n > 0$): $\sqrt{n^2 + 2n} = n\sqrt{1 + \frac2n}$.
> 4. Semplifico $n$:
> $$
> \frac{2n}{n\left(\sqrt{1 + \frac2n} + 1\right)} = \frac{2}{\sqrt{1 + \frac2n} + 1} \to \frac{2}{1 + 1} = 1
> $$
>
> *Verifica*: $n = 100$ dà $\sqrt{10200} - 100 \approx 0{,}995$.

#### 3.1) $\displaystyle\lim \left(1 + \frac{1}{n!}\right)^n$

> [!tip]- Indizio
> Forma $[1^\infty]$: moltiplica e dividi l'esponente per $n!$.

> [!example]- Soluzione
> *Come si riconosce*: base $1 + \frac{1}{n!} \to 1$, esponente $n \to +\infty$: $[1^\infty]$. *Metodo*: Nepero generalizzato con $a_n = n!$.
> 1. $a_n = n! \to +\infty$.
> 2. $\left(1 + \frac{1}{n!}\right)^n = \left[\left(1 + \frac{1}{n!}\right)^{n!}\right]^{\frac{n}{n!}}$ (moltiplico e divido l'esponente per $n!$).
> 3. La base fra quadre tende a $e$.
> 4. $c_n = \frac{n}{n!} = \frac{1}{(n-1)!} \to 0$, perché $n! = n \cdot (n-1)!$.
> 5. Potenza dei limiti (base $\to e > 0$): $e^0 = 1$.
>
> Con la regola della gara: la base si avvicina a $1$ come $\frac{1}{n!}$, velocissima, e l'esponente $n$ non tiene il passo. Sul quaderno l'hai fatto così, giusto. *Verifica*: $n = 10$ dà $1{,}0000028$.

#### 3.2) $\displaystyle\lim\ (-1)^n \frac{n!}{n^n}$

> [!tip]- Indizio
> Guarda il valore assoluto.

> [!example]- Soluzione
> *Come si riconosce*: un segno alterno $(-1)^n$ davanti a un rapporto della gerarchia. *Metodo*: passare al modulo, che toglie il segno.
> 1. $\left|(-1)^n\frac{n!}{n^n}\right| = \frac{n!}{n^n}$.
> 2. $\frac{n!}{n^n} \to 0$ per la gerarchia ($n! \ll n^n$).
> 3. $|a_n| \to 0$ equivale ad $a_n \to 0$: la definizione di limite $0$ guarda solo $|a_n - 0| = |a_n|$ ([Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/)).
> 4. Il limite è $0$.
>
> Sul quaderno hai scritto solo “$n^n$ più grande": va completato con il passaggio al modulo, altrimenti il $(-1)^n$ resta senza giustificazione. Attenzione: il trucco funziona solo perché il limite del modulo è $0$. Con $(-1)^n \frac{n}{n+1}$ il modulo tende a $1$ e il limite non esiste. *Verifica*: $n = 10$ dà $3{,}6 \cdot 10^{-4}$.

#### 3.3) $\displaystyle\lim\ \left[1 + (-1)^n\right]$

> [!tip]- Indizio
> Calcola i primi termini. Quanti valori prende la successione?

> [!example]- Soluzione
> *Come si riconosce*: la successione salta fra due valori, $2, 0, 2, 0, \dots$ *Metodo*: sottosuccessioni pari e dispari.
> 1. Pari, $n = 2k$: $1 + 1 = 2$, costante, quindi $\to 2$.
> 2. Dispari, $n = 2k + 1$: $1 - 1 = 0$, costante, quindi $\to 0$.
> 3. $2 \neq 0$: il limite **non esiste** (corollario della slide 26, [Limiti di successioni](/uni/analisi-1/limiti-di-successioni/)).
>
> Come sul quaderno.

#### 3.4) $\displaystyle\lim \left(n^{\sqrt n} - 2^n\right)$

> [!tip]- Indizio
> $[\infty - \infty]$ fra due esponenziali "travestiti". Scrivili con $e$: $a^b = e^{b\log a}$. Poi raccogli quello che comanda.

> [!example]- Soluzione
> *Come si riconosce*: $[+\infty - \infty]$ fra due potenze con l'esponente che dipende da $n$, che la gerarchia non confronta direttamente. *Metodo*: scrivere tutte e due come $e^{(\dots)}$, confrontare gli esponenti, raccogliere quello che comanda.
> 1. Identità della slide 54, $a^b = e^{b\log a}$: $n^{\sqrt n} = e^{\sqrt n\log n}$ e $2^n = e^{n\log 2}$.
> 2. Confronto gli esponenti: $\frac{\sqrt n\log n}{n\log 2} = \frac{1}{\log 2} \cdot \frac{\log n}{\sqrt n} \to 0$ (gerarchia, $\log n \ll n^{1/2}$). L'esponente di $2^n$ cresce molto di più: comanda $2^n$.
> 3. Raccolgo $2^n$: $n^{\sqrt n} - 2^n = 2^n\left(\frac{n^{\sqrt n}}{2^n} - 1\right)$.
> 4. $\frac{n^{\sqrt n}}{2^n} = \frac{e^{\sqrt n\log n}}{e^{n\log 2}} = e^{\sqrt n\log n - n\log 2}$ ($\frac{e^a}{e^b} = e^{a - b}$).
> 5. Raccolgo $n$ nell'esponente: $\sqrt n\log n - n\log 2 = n\left(\frac{\log n}{\sqrt n} - \log 2\right) \to [+\infty \cdot (0 - \log 2)] = -\infty$.
> 6. $e^{(\to -\infty)} \to 0$ (forma determinata $\left[e^{-\infty}\right] = 0$).
> 7. $2^n\left(e^{\dots} - 1\right) \to [+\infty \cdot (0 - 1)] = -\infty$.
>
> Il limite è $-\infty$, come sul quaderno.
>
> <figure class="fig"><svg role="img" aria-label="Chi comanda fra n alla radice di n e 2 alla n" xmlns:xlink="http://www.w3.org/1999/xlink" width="485.72pt" height="323.904pt" viewBox="0 0 485.72 323.904" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fbaf2d4-figure_1"> <g id="fbaf2d4-patch_1"> <path d="M 0 323.904 L 485.72 323.904 L 485.72 0 L 0 0 L 0 323.904 z " style="fill: none"/> </g> <g id="fbaf2d4-axes_1"> <g id="fbaf2d4-patch_2"> <path d="M 33.56 281.144 L 479.96 281.144 L 479.96 26.12 L 33.56 26.12 L 33.56 281.144 z " style="fill: none"/> </g> <g id="fbaf2d4-patch_3"> <path d="M 77.11122 281.144 L 207.764878 281.144 L 207.764878 26.12 L 77.11122 26.12 z " clip-path="url(#fbaf2d4-pb1b009d609)" style="fill: var(--fig-accent-deep); opacity: 0.25"/> </g> <g id="fbaf2d4-matplotlib.axis_1"> <g id="fbaf2d4-xtick_1"> <g id="fbaf2d4-line2d_1"> <defs> <path id="fbaf2d4-m10d6ef7316" d="M 0 0 L 0 3.5 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#fbaf2d4-m10d6ef7316" x="44.447805" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_1"> <!-- 1 --> <g style="fill: var(--fig-axis)" transform="translate(40.31218 298.020953) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-14"/> </g> </g> </g> <g id="fbaf2d4-xtick_2"> <g id="fbaf2d4-line2d_2"> <g> <use xlink:href="#fbaf2d4-m10d6ef7316" x="77.11122" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_2"> <!-- 4 --> <g style="fill: var(--fig-axis)" transform="translate(72.975595 298.020953) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-17"/> </g> </g> </g> <g id="fbaf2d4-xtick_3"> <g id="fbaf2d4-line2d_3"> <g> <use xlink:href="#fbaf2d4-m10d6ef7316" x="142.438049" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_3"> <!-- 10 --> <g style="fill: var(--fig-axis)" transform="translate(134.166799 298.020953) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-14"/> <use xlink:href="#fbaf2d4-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="fbaf2d4-xtick_4"> <g id="fbaf2d4-line2d_4"> <g> <use xlink:href="#fbaf2d4-m10d6ef7316" x="207.764878" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_4"> <!-- 16 --> <g style="fill: var(--fig-axis)" transform="translate(199.493628 298.020953) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-14"/> <use xlink:href="#fbaf2d4-DejaVuSerif-19" transform="translate(63.625 0)"/> </g> </g> </g> <g id="fbaf2d4-xtick_5"> <g id="fbaf2d4-line2d_5"> <g> <use xlink:href="#fbaf2d4-m10d6ef7316" x="251.316098" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_5"> <!-- 20 --> <g style="fill: var(--fig-axis)" transform="translate(243.044848 298.020953) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-15"/> <use xlink:href="#fbaf2d4-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="fbaf2d4-xtick_6"> <g id="fbaf2d4-line2d_6"> <g> <use xlink:href="#fbaf2d4-m10d6ef7316" x="360.194146" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_6"> <!-- 30 --> <g style="fill: var(--fig-axis)" transform="translate(351.922896 298.020953) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-16"/> <use xlink:href="#fbaf2d4-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="fbaf2d4-xtick_7"> <g id="fbaf2d4-line2d_7"> <g> <use xlink:href="#fbaf2d4-m10d6ef7316" x="469.072195" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_7"> <!-- 40 --> <g style="fill: var(--fig-axis)" transform="translate(460.800945 298.020953) scale(0.13 -0.13)"> <use xlink:href="#fbaf2d4-DejaVuSerif-17"/> <use xlink:href="#fbaf2d4-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> </g> <g id="fbaf2d4-text_8"> <!-- $n$ --> <g style="fill: var(--fig-ink)" transform="translate(252.535 315.020953) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(0 0.671875)"/> </g> </g> </g> <g id="fbaf2d4-matplotlib.axis_2"> <g id="fbaf2d4-ytick_1"> <g id="fbaf2d4-line2d_8"> <defs> <path id="fbaf2d4-m987972d53e" d="M 0 0 L -3.5 0 " style="stroke: var(--fig-axis); stroke-width: 0.8"/> </defs> <g> <use xlink:href="#fbaf2d4-m987972d53e" x="33.56" y="281.144" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_9"> <!-- $0$ --> <g style="fill: var(--fig-axis)" transform="translate(18.24 286.082477) scale(0.13 -0.13)"> <use xlink:href="#fbaf2d4-DejaVuSerif-13" transform="translate(0 0.78125)"/> </g> </g> </g> <g id="fbaf2d4-ytick_2"> <g id="fbaf2d4-line2d_9"> <g> <use xlink:href="#fbaf2d4-m987972d53e" x="33.56" y="203.864" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_10"> <!-- $0{,}5$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 208.802477) scale(0.13 -0.13)"> <defs> <path id="fbaf2d4-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-13" transform="translate(0 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-f" transform="translate(63.623047 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-18" transform="translate(95.410156 0.78125)"/> </g> </g> </g> <g id="fbaf2d4-ytick_3"> <g id="fbaf2d4-line2d_10"> <g> <use xlink:href="#fbaf2d4-m987972d53e" x="33.56" y="126.584" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_11"> <!-- $1$ --> <g style="fill: var(--fig-axis)" transform="translate(18.24 131.522477) scale(0.13 -0.13)"> <use xlink:href="#fbaf2d4-DejaVuSerif-14" transform="translate(0 0.78125)"/> </g> </g> </g> <g id="fbaf2d4-ytick_4"> <g id="fbaf2d4-line2d_11"> <g> <use xlink:href="#fbaf2d4-m987972d53e" x="33.56" y="49.304" style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 0.8"/> </g> </g> <g id="fbaf2d4-text_12"> <!-- $1{,}5$ --> <g style="fill: var(--fig-axis)" transform="translate(5.76 54.242477) scale(0.13 -0.13)"> <use xlink:href="#fbaf2d4-DejaVuSerif-14" transform="translate(0 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-f" transform="translate(63.623047 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-18" transform="translate(95.410156 0.78125)"/> </g> </g> </g> </g> <g id="fbaf2d4-line2d_12"> <path d="M 33.56 126.584 L 479.96 126.584 " clip-path="url(#fbaf2d4-pb1b009d609)" style="fill: none; stroke-dasharray: 1,1.65; stroke-dashoffset: 0; stroke: var(--fig-axis)"/> </g> <g id="fbaf2d4-line2d_13"> <defs> <path id="fbaf2d4-m26a9d9ea08" d="M 0 2.5 C 0.663008 2.5 1.29895 2.236584 1.767767 1.767767 C 2.236584 1.29895 2.5 0.663008 2.5 0 C 2.5 -0.663008 2.236584 -1.29895 1.767767 -1.767767 C 1.29895 -2.236584 0.663008 -2.5 0 -2.5 C -0.663008 -2.5 -1.29895 -2.236584 -1.767767 -1.767767 C -2.236584 -1.29895 -2.5 -0.663008 -2.5 0 C -2.5 0.663008 -2.236584 1.29895 -1.767767 1.767767 C -1.29895 2.236584 -0.663008 2.5 0 2.5 z " style="stroke: var(--fig-ink)"/> </defs> <g clip-path="url(#fbaf2d4-pb1b009d609)"> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="44.447805" y="203.864" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="55.33561" y="178.16283" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="66.223415" y="151.603557" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="77.11122" y="126.584" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="87.999024" y="104.584303" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="98.886829" y="86.612184" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="109.774634" y="73.267026" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="120.662439" y="64.781815" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="131.550244" y="61.077125" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="142.438049" y="61.825729" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="153.325854" y="66.521152" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="164.213659" y="74.543838" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="175.101463" y="85.22027" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="185.989268" y="97.872219" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="196.877073" y="111.854885" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="207.764878" y="126.584" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="218.652683" y="141.552796" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="229.540488" y="156.34032" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="240.428293" y="170.612793" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="251.316098" y="184.119767" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="262.203902" y="196.686698" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="273.091707" y="208.205353" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="283.979512" y="218.623205" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="294.867317" y="227.932712" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="305.755122" y="236.16112" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="316.642927" y="243.361218" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="327.530732" y="249.603286" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="338.418537" y="254.968334" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="349.306341" y="259.542621" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="360.194146" y="263.413395" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="371.081951" y="266.665695" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="381.969756" y="269.380101" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="392.857561" y="271.631258" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="403.745366" y="273.487026" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="414.633171" y="275.008118" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="425.520976" y="276.248103" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="436.40878" y="277.253674" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="447.296585" y="278.065087" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="458.18439" y="278.716705" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> <use xlink:href="#fbaf2d4-m26a9d9ea08" x="469.072195" y="279.237599" style="fill: var(--fig-ink); stroke: var(--fig-ink)"/> </g> </g> <g id="fbaf2d4-patch_4"> <path d="M 33.56 281.144 L 33.56 26.12 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="fbaf2d4-patch_5"> <path d="M 33.56 281.144 L 479.96 281.144 " style="fill: none; stroke: var(--fig-axis); stroke-width: 0.8; stroke-linejoin: miter; stroke-linecap: square"/> </g> <g id="fbaf2d4-text_13"> <!-- $4 &lt; n &lt; 16$: rapporto $&gt; 1$, --> <g style="fill: var(--fig-ink)" transform="translate(79.588049 34.599703) scale(0.1 -0.1)"> <defs> <path id="fbaf2d4-DejaVuSerif-1f" d="M 4684 3188 L 1441 2003 L 4684 825 L 4684 294 L 678 1747 L 678 2266 L 4684 3719 L 4684 3188 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-21" d="M 678 3188 L 678 3719 L 4684 2266 L 4684 1747 L 678 294 L 678 825 L 3922 2003 L 678 3188 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-17" transform="translate(0 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-1f" transform="translate(82.587891 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(185.341797 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-1f" transform="translate(268.710938 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-14" transform="translate(371.464844 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-19" transform="translate(435.087891 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-1d" transform="translate(498.710938 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(532.402344 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-55" transform="translate(564.189453 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(611.992188 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-53" transform="translate(671.611328 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-53" transform="translate(735.625 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(799.638672 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-55" transform="translate(859.84375 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-57" transform="translate(907.646484 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(947.832031 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1008.037109 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-21" transform="translate(1058.789062 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-14" transform="translate(1161.542969 0.78125)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-f" transform="translate(1225.166016 0.78125)"/> </g> <!-- qui $n^{\sqrt{n}}$ è più grande --> <g style="fill: var(--fig-ink)" transform="translate(90.188049 49.304) scale(0.1 -0.1)"> <defs> <path id="fbaf2d4-DejaVuSerif-54" d="M 3359 2988 L 3359 -997 L 3909 -997 L 3909 -1331 L 2241 -1331 L 2241 -997 L 2784 -997 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-8d6" d="M 3488 5191 L 4078 5191 L 4078 4891 L 3719 4891 L 1863 -128 L 1656 -128 L 659 2631 L 269 2491 L 191 2741 L 1075 3047 L 1875 831 L 3488 5191 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-aa" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z M 1441 5113 L 2253 3938 L 1888 3938 L 825 5113 L 1441 5113 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-bb" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z M 1372 5113 L 2184 3938 L 1819 3938 L 756 5113 L 1372 5113 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-54" transform="translate(0 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-58" transform="translate(64.013672 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(128.417969 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(160.400391 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(192.1875 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-8d6" transform="translate(261.029984 42.023438) scale(0.7)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(314.384476 42.295313) scale(0.7)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(370.812699 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-aa" transform="translate(402.599808 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(461.779495 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-53" transform="translate(493.566605 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(557.580277 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-bb" transform="translate(589.562699 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(653.966995 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4a" transform="translate(685.754105 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-55" transform="translate(749.767777 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(797.570511 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(857.189652 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(921.593949 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(985.60762 0.723438)"/> <path d="M 305.634476 98.625 L 305.634476 103 L 368.217484 103 L 368.217484 98.625 L 305.634476 98.625 z "/> </g> </g> <g id="fbaf2d4-text_14"> <!-- da $n = 16$ in poi il rapporto --> <g style="fill: var(--fig-axis)" transform="translate(281.456341 140.915406) scale(0.1 -0.1)"> <defs> <path id="fbaf2d4-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(0 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(64.013672 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(123.632812 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(155.419922 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-20" transform="translate(238.789062 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-14" transform="translate(341.542969 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-19" transform="translate(405.166016 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(468.789062 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(500.576172 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(532.558594 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(596.962891 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-53" transform="translate(628.75 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(692.763672 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(752.96875 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(784.951172 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(816.738281 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4f" transform="translate(848.720703 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(880.703125 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-55" transform="translate(912.490234 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(960.292969 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-53" transform="translate(1019.912109 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-53" transform="translate(1083.925781 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(1147.939453 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-55" transform="translate(1208.144531 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-57" transform="translate(1255.947266 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(1296.132812 0.015625)"/> </g> <!-- scende sotto $1$ e va a $0$: --> <g style="fill: var(--fig-axis)" transform="translate(289.656341 152.919703) scale(0.1 -0.1)"> <defs> <path id="fbaf2d4-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-56" transform="translate(0 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-46" transform="translate(51.318359 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(107.324219 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(166.503906 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(230.908203 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(294.921875 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(354.101562 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-56" transform="translate(385.888672 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(437.207031 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-57" transform="translate(497.412109 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-57" transform="translate(537.597656 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(577.783203 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(637.988281 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-14" transform="translate(669.775391 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(733.398438 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(765.185547 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(824.365234 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-59" transform="translate(856.152344 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(912.646484 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(972.265625 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(1004.052734 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1063.671875 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-13" transform="translate(1095.458984 0.015625)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-1d" transform="translate(1159.082031 0.015625)"/> </g> <!-- definitivamente comanda $2^n$ --> <g style="fill: var(--fig-axis)" transform="translate(277.806341 165.224) scale(0.1 -0.1)"> <defs> <path id="fbaf2d4-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(0 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(64.013672 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-49" transform="translate(123.193359 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(160.205078 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(192.1875 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(256.591797 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-57" transform="translate(288.574219 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(328.759766 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-59" transform="translate(360.742188 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(417.236328 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-50" transform="translate(476.855469 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(571.679688 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(630.859375 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-57" transform="translate(695.263672 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(735.449219 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(794.628906 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-46" transform="translate(826.416016 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(882.421875 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-50" transform="translate(942.626953 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(1037.451172 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(1097.070312 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(1161.474609 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(1225.488281 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1285.107422 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-15" transform="translate(1316.894531 0.370313)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(1381.425903 41.670313) scale(0.7)"/> </g> </g> <g id="fbaf2d4-text_15"> <!-- $n^{\sqrt{n}} / 2^n$: chi comanda si decide per $n$ grande --> <g style="fill: var(--fig-ink)" transform="translate(124.52 18.12) scale(0.12 -0.12)"> <defs> <path id="fbaf2d4-DejaVuSerif-12" d="M 1656 4666 L 2156 4666 L 500 -594 L 0 -594 L 1656 4666 z " transform="scale(0.015625)"/> <path id="fbaf2d4-DejaVuSerif-4b" d="M 263 0 L 263 331 L 781 331 L 781 4531 L 231 4531 L 231 4863 L 1356 4863 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2704 2764 Q 2556 2988 2175 2988 Q 1775 2988 1565 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(0 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-8d6" transform="translate(68.842484 42.023438) scale(0.7)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(122.196976 42.295313) scale(0.7)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-12" transform="translate(178.625199 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-15" transform="translate(212.316605 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(276.847977 42.023438) scale(0.7)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-1d" transform="translate(324.5262 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(358.217606 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-46" transform="translate(390.004715 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4b" transform="translate(446.010575 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(510.414871 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(542.397293 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-46" transform="translate(574.184403 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-52" transform="translate(630.190262 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-50" transform="translate(690.39534 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(785.219559 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(844.8387 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(909.242996 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(973.256668 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1032.875809 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-56" transform="translate(1064.662918 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(1115.981278 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1147.9637 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(1179.750809 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(1243.764481 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-46" transform="translate(1302.944168 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4c" transform="translate(1358.950028 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(1390.93245 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(1454.946121 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1514.125809 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-53" transform="translate(1545.912918 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(1609.92659 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-55" transform="translate(1669.106278 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1716.909012 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-Italic-51" transform="translate(1748.696121 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-3" transform="translate(1813.100418 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-4a" transform="translate(1844.887528 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-55" transform="translate(1908.9012 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-44" transform="translate(1956.703934 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-51" transform="translate(2016.323075 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-47" transform="translate(2080.727371 0.723438)"/> <use xlink:href="#fbaf2d4-DejaVuSerif-48" transform="translate(2144.741043 0.723438)"/> <path d="M 113.446976 98.625 L 113.446976 103 L 176.029984 103 L 176.029984 98.625 L 113.446976 98.625 z "/> </g> </g> </g> </g> <defs> <clipPath id="fbaf2d4-pb1b009d609"> <rect x="33.56" y="26.12" width="446.4" height="255.024"/> </clipPath> </defs> </svg></figure>
>
> *Verifica, e perché "definitivamente" conta*: il rapporto $\frac{n^{\sqrt n}}{2^n}$ nella figura è maggiore di $1$ per $4 < n < 16$ (per esempio $9^3 = 729 > 2^9 = 512$), vale esattamente $1$ in $n = 4$ e $n = 16$ ($16^4 = 2^{16} = 65\,536$), e da lì scende a $0$. Quindi la differenza $n^{\sqrt n} - 2^n$ è positiva per qualche $n$ piccolo, ma "comanda $2^n$" vale definitivamente. Per $n = 100$: $100^{10} = 10^{20}$ contro $2^{100} \approx 1{,}3 \cdot 10^{30}$.

#### 3.5) $\displaystyle\lim \sqrt[n]{n!}$ e $\displaystyle\lim \frac{\sqrt[n]{n!}}{n}$ (difficile)

> [!tip]- Indizio
> Il primo è il 3.28. Per il secondo prova a confrontare $n!$ con $\left(\frac ne\right)^n$, usando $\left(1 + \frac1n\right)^n < e < \left(1 + \frac1n\right)^{n+1}$.

> [!example]- Soluzione
> **Primo.** È il 3.28 sopra: $\sqrt[n]{n!} \to +\infty$ (per ogni $M$, $n! > M^n$ definitivamente, perché $\frac{M^n}{n!} \to 0$).
>
> **Secondo.** *Come si riconosce*: $\sqrt[n]{n!}$ e $n$ sono infiniti dello stesso ordine, $\left[\frac\infty\infty\right]$; il limite vale $\frac1e$.
>
> *La via del tutor*, che si ferma un passo prima. Con $a_n = \frac{n!}{n^n}$ vale $\frac{\sqrt[n]{n!}}{n} = \sqrt[n]{a_n}$, e
> $$
> \frac{a_{n+1}}{a_n} = \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{n^n}{(n+1)^n} = \left(1 + \frac1n\right)^{-n} \to \frac1e
> $$
> (lo stesso conto di $\frac{n!\,a^n}{n^n}$ della slide 68 con $a = 1$). Per concludere servirebbe un teorema **non fatto a lezione**: se $\frac{a_{n+1}}{a_n} \to L$ allora anche $\sqrt[n]{a_n} \to L$. Se all'esame serve, si cita come teorema.
>
> *La via con gli strumenti fatti* (livello del 30 e oltre): stringere $n!$ fra due potenze.
> 1. **Sotto**: $n! \geq \left(\frac ne\right)^n$ per ogni $n \geq 1$. Per induzione: per $n = 1$, $1 \geq \frac1e$. Se vale per $n$, allora
> $$
> (n+1)! = (n+1)\,n! \geq (n+1)\left(\frac ne\right)^n > (n+1)\left(\frac ne\right)^n \cdot \frac{\left(1 + \frac1n\right)^n}{e} = \left(\frac{n+1}{e}\right)^{n+1}
> $$
> dove il $>$ usa $\left(1 + \frac1n\right)^n < e$, e l'ultimo $=$ usa $n^n\left(1 + \frac1n\right)^n = (n+1)^n$.
> 2. **Sopra**: $n! \leq e\,n\left(\frac ne\right)^n$ per ogni $n \geq 1$. Per $n = 1$ vale $1 \leq 1$. Il passo è lo stesso conto con $\left(1 + \frac1n\right)^{n+1} > e$: chiamato $b_n = e\,n\left(\frac ne\right)^n$, si trova $\frac{b_{n+1}}{b_n} = \frac{(n+1)\left(1 + \frac1n\right)^{n+1}}{e} > n + 1$, quindi $b_{n+1} > (n+1)\,b_n \geq (n+1)\,n! = (n+1)!$.
> 3. Radice $n$-esima (crescente) e divisione per $n$: $\frac1e \leq \frac{\sqrt[n]{n!}}{n} \leq \frac{\sqrt[n]{e\,n}}{e}$.
> 4. $\sqrt[n]{e} = e^{1/n} \to 1$ (potenza). E $\sqrt[n]{n} \to 1$: posto $h_n = \sqrt[n]{n} - 1 \geq 0$, Newton dà $n = (1 + h_n)^n \geq \binom n2 h_n^2 = \frac{n(n-1)}{2}h_n^2$, quindi $0 \leq h_n \leq \sqrt{\frac{2}{n-1}} \to 0$ e per i carabinieri $h_n \to 0$.
> 5. Il carabiniere sopra tende a $\frac{1 \cdot 1}{e}$, quello sotto è $\frac1e$: il limite è $\frac1e$.
>
> *Verifica*: $n = 10$ dà $0{,}453$, fra $\frac1e \approx 0{,}368$ e $0{,}512$; $n = 1000$ dà $0{,}3695$.

## Esercizi tipo esame

### Crocette (stile parte 1)

Le prime quattro sono l'esercizio 6 del foglio 2 del 2020 (<span class="src">pagine 3-4</span>), con le stesse quattro opzioni per tutte.

**C1.** Sia $(a_n)$ una successione con $|a_n| \leq 10^{10}$ per ogni $n$, e $b_n := \dfrac{\sqrt[3]{n}\,a_n}{\sqrt{n+1}}$. Allora $(b_n)$:

- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **c**. *Come si riconosce*: un fattore limitato qualunque, $a_n$, per un fattore esplicito. Se il fattore esplicito è infinitesimo, vince lui.
> 1. $\frac{\sqrt[3]n}{\sqrt{n+1}} = \frac{n^{1/3}}{n^{1/2}\sqrt{1 + \frac1n}} = \frac{1}{n^{1/6}\sqrt{1 + \frac1n}} \to 0$.
> 2. $a_n$ è limitata: limitata per infinitesima, $b_n \to 0$, qualunque sia $a_n$.
>
> Quindi converge sempre: c. La d) è vera solo a metà (è limitata, ma converge sempre).

**C2.** Sia $(a_n)$ una successione con $|a_n| \leq 10^{10}$ per ogni $n$, e $b_n := \sin\left(\frac n2\pi\right)a_n$. Allora $(b_n)$:

- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **d**. *Come si riconosce*: prodotto di due fattori limitati, nessuno dei due infinitesimo.
> 1. $|b_n| \leq 1 \cdot 10^{10}$: limitata.
> 2. Può non convergere: con $a_n = 1$, $b_n = \sin\frac{n\pi}{2}$ vale $0, 1, 0, -1, 0, 1, \dots$, senza limite (i multipli di $4$ danno $0$, quelli di $4$ più $1$ danno $1$).
> 3. Può anche convergere (con $a_n = 0$), quindi c) è falsa: "sicuramente" non vale.

**C3.** Sia $(a_n)$ una successione con $|a_n| \leq 10^{10n}$ per ogni $n$, e $b_n := \dfrac{n\,a_n}{(n+1)! - n!}$. Allora $(b_n)$:

- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **c**. *Come si riconosce*: $a_n$ può crescere come un esponenziale, ma sotto c'è un fattoriale. Gerarchia.
> 1. $(n+1)! - n! = n!\,(n + 1 - 1) = n \cdot n!$ (raccolgo $n!$).
> 2. $b_n = \frac{n\,a_n}{n \cdot n!} = \frac{a_n}{n!}$.
> 3. $|b_n| \leq \frac{10^{10n}}{n!} = \frac{\left(10^{10}\right)^n}{n!} \to 0$ (gerarchia, $a^n \ll n!$ con $a = 10^{10}$).
> 4. Carabinieri su $0 \leq |b_n| \leq \frac{(10^{10})^n}{n!}$: $|b_n| \to 0$, quindi $b_n \to 0$.

**C4.** Sia $(a_n)$ una successione con $|a_n| \geq n^2$ per ogni $n$, e $b_n := a_n + n\sin\left(\frac n2\pi\right)$. Allora $(b_n)$:

- a) diverge sicuramente a $+\infty$
- b) è illimitata, ma può non valere $\lim b_n = +\infty$
- c) converge sicuramente
- d) è limitata, ma può non convergere

> [!example]- Soluzione
> **b**. Il foglio dà la A, ma con questo testo la risposta giusta è la B.
> 1. $\left|n\sin\frac{n\pi}{2}\right| \leq n$.
> 2. Disuguaglianza triangolare al contrario, $|x + y| \geq |x| - |y|$: $|b_n| \geq n^2 - n \to +\infty$. Quindi $b_n$ è illimitata.
> 3. Ma $|a_n| \geq n^2$ non dice che $a_n$ sia positiva. Con $a_n = -n^2$: $b_n \leq -n^2 + n \to -\infty$. Con $a_n = (-1)^n n^2$ il limite non esiste (i pari vanno a $+\infty$, i dispari a $-\infty$).
> 4. Quindi "diverge sicuramente a $+\infty$" è falso: è la b).
>
> La a) sarebbe giusta con l'ipotesi $a_n \geq n^2$, senza modulo: probabilmente è un refuso del testo.

**C5.** Il limite $\displaystyle\lim \left(\frac{n+1}{n-1}\right)^n$ vale:

- a) $1$
- b) $e^2$
- c) $e$
- d) $+\infty$

> [!example]- Soluzione
> **b**. *Come si riconosce*: base $\to 1$, esponente $\to +\infty$: $[1^\infty]$.
> 1. $\frac{n+1}{n-1} = 1 + \frac{2}{n-1}$ (somma e sottrai).
> 2. $(\text{base} - 1) \cdot \text{esponente} = \frac{2n}{n-1} \to 2$.
> 3. Il limite è $e^2$.
>
> La a) è l'errore “$[1^\infty] = 1$"; la c) viene guardando solo la forma $\left(1 + \frac1n\right)^n$; la d) tratta la base come se fosse $> 1$ in modo fisso. *Verifica*: $n = 100$ dà $7{,}390$.

**C6.** Quale di queste successioni **non** ha limite?

- a) $\dfrac{(-1)^n}{n}$
- b) $\dfrac{2^n + (-1)^n}{2^n}$
- c) $(-1)^n\dfrac{n}{n+1}$
- d) $\left(1 + \dfrac1n\right)^{(-1)^n}$

> [!example]- Soluzione
> **c**. Sui pari $\frac{n}{n+1} \to 1$, sui dispari $-\frac{n}{n+1} \to -1$: due sottosuccessioni con limiti diversi.
> - a) limitata per infinitesima, tende a $0$;
> - b) $= 1 + \left(-\frac12\right)^n$, e $\left|\left(-\frac12\right)^n\right| = \frac{1}{2^n} \to 0$: tende a $1$;
> - d) sui pari vale $1 + \frac1n$, sui dispari $\frac{1}{1 + \frac1n} = \frac{n}{n+1}$. In tutti e due i casi la distanza da $1$ è al massimo $\frac1n$, quindi tende a $1$. Il $(-1)^n$ all'esponente non basta: conta se le sottosuccessioni hanno limiti **diversi**.

**C7.** Il limite $\displaystyle\lim \frac{\log(3^n + n)}{n}$ vale:

- a) $0$
- b) $1$
- c) $+\infty$
- d) $\log 3$

> [!example]- Soluzione
> **d**. *Come si riconosce*: logaritmo di un esponenziale, la gerarchia non si applica (slide 67).
> 1. $3^n < 3^n + n \leq 2 \cdot 3^n$, perché $n \leq 3^n$ (Bernoulli: $3^n = (1 + 2)^n \geq 1 + 2n$).
> 2. (L1): $n\log 3 < \log(3^n + n) \leq \log 2 + n\log 3$.
> 3. Divido per $n$: $\log 3 < \frac{\log(3^n + n)}{n} \leq \log 3 + \frac{\log 2}{n} \to \log 3$. Carabinieri.
>
> La a) è l'errore "il logaritmo è più lento di $n$". *Verifica*: $n = 10$ dà $1{,}09863$, e $\log 3 \approx 1{,}09861$.

### Esercizi (stile parte 2)

Dal più facile al livello del 30. Prima di aprire la soluzione, scrivi almeno la forma e la tecnica.

**Esercizio 1** (facile; foglio 2 del 2020, esercizio 1.1). Calcolare $\displaystyle\lim \frac{\sqrt n - n + n^2}{2n^2 - n^{3/2} + 1}$.

> [!tip]- Indizio
> Grado più alto sopra e sotto: $n^2$.

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ fra somme di potenze di $n$. *Metodo*: raccogli chi comanda, $n^2$ sopra e sotto.
> 1. Sopra: $n^2\left(\frac{\sqrt n}{n^2} - \frac{n}{n^2} + 1\right) = n^2\left(n^{-3/2} - \frac1n + 1\right)$.
> 2. Sotto: $n^2\left(2 - \frac{n^{3/2}}{n^2} + \frac{1}{n^2}\right) = n^2\left(2 - n^{-1/2} + \frac{1}{n^2}\right)$.
> 3. Semplifico $n^2$. Le potenze a esponente negativo tendono a $0$: il limite è $\frac{0 - 0 + 1}{2 - 0 + 0} = \frac12$.
>
> *Verifica*: $n = 100$ dà $0{,}522$, $n = 1000$ dà $0{,}508$.

**Esercizio 2** (medio). Calcolare $\displaystyle\lim \frac{\log(n^2 + e^n)}{n + \log n}$.

> [!tip]- Indizio
> Dentro il logaritmo comanda $e^n$: raccoglilo, poi $\log(ab) = \log a + \log b$.

> [!example]- Soluzione
> *Come si riconosce*: logaritmo di una somma con un esponenziale dentro, quindi un infinito come $n$ (non "un logaritmo" nel senso della gerarchia, slide 67). *Metodo*: raccogliere dentro il logaritmo, poi (L3) per il pezzo che avanza.
> 1. $n^2 + e^n = e^n\left(1 + \frac{n^2}{e^n}\right)$ (raccolgo $e^n$).
> 2. $\log(n^2 + e^n) = \log(e^n) + \log\left(1 + \frac{n^2}{e^n}\right) = n + \log\left(1 + \frac{n^2}{e^n}\right)$.
> 3. $\frac{n^2}{e^n} \to 0$ (gerarchia con $a = e$).
> 4. (L1) e (L3) con $x = \frac{n^2}{e^n}$: $0 < \log\left(1 + \frac{n^2}{e^n}\right) \leq \frac{n^2}{e^n} \to 0$. Carabinieri: tende a $0$.
> 5. Divido sopra e sotto per $n$: $\displaystyle\frac{1 + \frac1n\log\left(1 + \frac{n^2}{e^n}\right)}{1 + \frac{\log n}{n}}$.
> 6. $\frac{\log n}{n} \to 0$ (gerarchia). Il limite è $\frac{1 + 0}{1 + 0} = 1$.
>
> *Verifica*: $n = 10$ dà $0{,}81$, $n = 100$ dà $0{,}956$, $n = 1000$ dà $0{,}993$. Si avvicina piano per colpa di $\frac{\log n}{n}$ al denominatore.

**Esercizio 3** (medio; foglio 2 del 2020, esercizio 4.8). Calcolare $\displaystyle\lim \frac{\tan\left(\frac1n\right) + 3^{n/2} + n^{3/2}}{3^{2n} + n^3 + \sin(n^3)}$.

> [!tip]- Indizio
> $\tan\left(\frac1n\right)$ è limitata: $\frac1n$ sta in $(0, 1]$, dove la tangente è crescente. Poi $3^{n/2} = \left(\sqrt3\right)^n$ e $3^{2n} = 9^n$.

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ con esponenziali, potenze e due pezzi limitati. *Metodo*: riscrivere gli esponenziali come $a^n$, raccogliere chi comanda.
> 1. Per $n \geq 1$: $0 < \frac1n \leq 1 < \frac\pi2$, e la tangente è crescente su $\left(-\frac\pi2, \frac\pi2\right)$: $0 < \tan\left(\frac1n\right) \leq \tan 1$. Limitata.
> 2. $3^{n/2} = \left(3^{1/2}\right)^n = \left(\sqrt3\right)^n$, e $n^{3/2} \ll \left(\sqrt3\right)^n$ (gerarchia, $\sqrt3 > 1$): sopra comanda $\left(\sqrt3\right)^n$.
> 3. $3^{2n} = 9^n$, $n^3 \ll 9^n$, $|\sin(n^3)| \leq 1$: sotto comanda $9^n$.
> 4. Raccolgo:
> $$
> \left(\frac{\sqrt3}{9}\right)^n \cdot \frac{1 + \frac{\tan(1/n)}{(\sqrt3)^n} + \frac{n^{3/2}}{(\sqrt3)^n}}{1 + \frac{n^3}{9^n} + \frac{\sin(n^3)}{9^n}}
> $$
> 5. Le frazioni dentro tendono tutte a $0$ (limitata per infinitesima, gerarchia). $\frac{\sqrt3}{9} < 1$, quindi $\left(\frac{\sqrt3}{9}\right)^n \to 0$.
> 6. Il limite è $0 \cdot \frac{1}{1} = 0$.
>
> *Verifica*: $n = 10$ dà $7{,}9 \cdot 10^{-8}$. Il foglio dà $0$.

**Esercizio 4** (medio). Calcolare $\displaystyle\lim \left(\frac{n^2 + 3n}{n^2 + 1}\right)^n$.

> [!tip]- Indizio
> Base $\to 1$, esponente $\to +\infty$. Quanto vale $(\text{base} - 1) \cdot \text{esponente}$?

> [!example]- Soluzione
> *Come si riconosce*: base con grado $2$ sopra e sotto e coefficienti $1$, quindi $\to 1$; esponente $\to +\infty$: $[1^\infty]$. *Metodo*: Nepero nei quattro passi.
> 1. Somma e sottrai: $\frac{n^2 + 3n}{n^2 + 1} = 1 + \frac{3n - 1}{n^2 + 1}$.
> 2. $a_n = \frac{n^2 + 1}{3n - 1} \to +\infty$ (grado $2$ su $1$).
> 3. $c_n = \frac{n}{a_n} = \frac{n(3n - 1)}{n^2 + 1} \to 3$ (grado $2$ sopra e sotto, coefficienti $3$ e $1$).
> 4. Il limite è $e^3$.
>
> *Verifica*: $n = 1000$ dà $19{,}98$, e $e^3 \approx 20{,}09$.

**Esercizio 5** (difficile). Dimostrare che $\displaystyle\lim \left(1 + \frac{(-1)^n}{n}\right)^n$ non esiste.

> [!tip]- Indizio
> Sui pari è la successione di Nepero, sui dispari $\left(1 - \frac1n\right)^n$.

> [!example]- Soluzione
> *Come si riconosce*: un $(-1)^n$ che cambia la base da un lato all'altro di $1$. *Metodo*: sottosuccessioni pari e dispari, ognuna riconosciuta come sottosuccessione di un limite noto.
> 1. Pari, $n = 2k$: $\left(1 + \frac{1}{2k}\right)^{2k}$ è una sottosuccessione di $\left(1 + \frac1n\right)^n \to e$, quindi tende a $e$ (teorema della slide 26: una sottosuccessione ha lo stesso limite).
> 2. Dispari, $n = 2k + 1$: $\left(1 - \frac{1}{2k + 1}\right)^{2k + 1}$ è una sottosuccessione di $\left(1 - \frac1n\right)^n \to e^{-1}$ (Nepero generalizzato con $\alpha = -1$), quindi tende a $e^{-1}$.
> 3. $e \neq e^{-1}$: per il corollario della slide 26 il limite non esiste. $\blacksquare$
>
> *Verifica*: $n = 100$ dà $2{,}705$, $n = 101$ dà $0{,}366$. È un buon controesempio da tenere a mente: “$[1^\infty]$ dà sempre un numero" è falso.

**Esercizio 6** (difficile, con parametro). Calcolare $\displaystyle\lim \frac{a^n + n^2}{2^n + n^3}$ al variare di $a > 0$.

> [!tip]- Indizio
> Sotto comanda sempre $2^n$. Sopra dipende da $a$: confronta $a$ con $2$.

> [!example]- Soluzione
> *Come si riconosce*: $\left[\frac\infty\infty\right]$ (o $\left[\frac{\text{qualcosa}}{\infty}\right]$ per $a \leq 1$) con esponenziali e potenze; chi comanda sopra cambia con $a$. *Metodo*: raccogliere $2^n$ sotto, e dividere anche il numeratore per $2^n$.
> 1. Sotto: $2^n + n^3 = 2^n\left(1 + \frac{n^3}{2^n}\right)$, e $\frac{n^3}{2^n} \to 0$ (gerarchia).
> 2. Quindi $\displaystyle\frac{a^n + n^2}{2^n + n^3} = \frac{\left(\frac a2\right)^n + \frac{n^2}{2^n}}{1 + \frac{n^3}{2^n}}$, con $\frac{n^2}{2^n} \to 0$.
> 3. **$0 < a < 2$**: $0 < \frac a2 < 1$, quindi $\left(\frac a2\right)^n \to 0$. Il limite è $\frac{0 + 0}{1} = 0$.
> 4. **$a = 2$**: $\left(\frac a2\right)^n = 1$. Il limite è $\frac{1 + 0}{1} = 1$.
> 5. **$a > 2$**: $\frac a2 > 1$, quindi $\left(\frac a2\right)^n \to +\infty$. Forma $\left[\frac{+\infty + 0}{1}\right] = +\infty$.
>
> | $a$ | $(0, 2)$ | $2$ | $(2, +\infty)$ |
> |---|---|---|---|
> | limite | $0$ | $1$ | $+\infty$ |
>
> *Verifica*: $a = 1{,}5$, $n = 100$ dà $3 \cdot 10^{-13}$; $a = 2$, $n = 100$ dà $1{,}0000$; $a = 3$, $n = 10$ dà $29$. Il caso $a \leq 1$, dove $a^n$ non è nemmeno un infinito, è già dentro il primo.

**Esercizio 7** (livello 30, due parametri). Calcolare $\displaystyle\lim \left(\frac{n + \alpha}{n + 1}\right)^{n^\beta}$ al variare di $\alpha \in \mathbb{R}$ e $\beta > 0$.

> [!tip]- Indizio
> Per $\alpha = 1$ la base è $1$. Altrimenti è $[1^\infty]$: calcola $(\text{base} - 1) \cdot \text{esponente}$ e guarda come dipende da $\beta$ e dal segno di $\alpha - 1$.

> [!example]- Soluzione
> *Come si riconosce*: base $\to 1$ per ogni $\alpha$, esponente $n^\beta \to +\infty$: $[1^\infty]$, tranne quando la base è proprio $1$. *Metodo*: Nepero, e la discussione dei casi sul limite di $c_n$.
> La base è positiva definitivamente (per $n > -\alpha$), quindi la potenza ha senso da lì in poi.
>
> 1. **$\alpha = 1$**: la base vale $1$ per ogni $n$, e $1^{n^\beta} = 1$. Il limite è $1$.
> 2. **$\alpha \neq 1$**: somma e sottrai, $\frac{n + \alpha}{n + 1} = 1 + \frac{\alpha - 1}{n + 1}$. Quindi $a_n = \frac{n + 1}{\alpha - 1}$ e $|a_n| \to +\infty$.
> 3. $c_n = \frac{n^\beta}{a_n} = (\alpha - 1) \cdot \frac{n^\beta}{n + 1}$.
> 4. $\frac{n^\beta}{n + 1} = \frac{n^{\beta - 1}}{1 + \frac1n}$ (divido sopra e sotto per $n$): tende a $0$ se $\beta < 1$, a $1$ se $\beta = 1$, a $+\infty$ se $\beta > 1$.
> 5. **$\beta < 1$**: $c_n \to 0$, limite $e^0 = 1$.
> 6. **$\beta = 1$**: $c_n \to \alpha - 1$, limite $e^{\alpha - 1}$.
> 7. **$\beta > 1$**: $c_n \to +\infty$ se $\alpha > 1$ (limite $+\infty$), $c_n \to -\infty$ se $\alpha < 1$ (limite $0$).
>
> | | $\alpha < 1$ | $\alpha = 1$ | $\alpha > 1$ |
> |---|---|---|---|
> | $\beta < 1$ | $1$ | $1$ | $1$ |
> | $\beta = 1$ | $e^{\alpha - 1}$ | $1$ | $e^{\alpha - 1}$ |
> | $\beta > 1$ | $0$ | $1$ | $+\infty$ |
>
> Il 3.4 è il caso $\alpha = 3$, $\beta = 1$ ($e^2$), il 3.39 il caso $\alpha = 2$, $\beta = 2$ ($+\infty$).
>
> *Verifica*: $\alpha = 3$, $\beta = 1$, $n = 1000$ dà $7{,}36 \approx e^2$; $\alpha = -2$, $\beta = 1$, $n = 1000$ dà $0{,}0497$, e $e^{-3} \approx 0{,}0498$; $\alpha = \frac12$, $\beta = 2$, $n = 10$ dà già $0{,}0095$; $\alpha = 3$, $\beta = \frac12$, $n = 1000$ dà $1{,}065$, che scende piano verso $1$.

**Esercizio 8** (livello 30; foglio 2 del 2020, esercizio 8, "difficile"). Dimostrare che la successione $a_n = \displaystyle\sum_{k=0}^{n} \sin\frac{k\pi}{n}$ non converge. (Suggerimento del foglio: principio del confronto.)

> [!tip]- Indizio
> Gli addendi sono tutti $\geq 0$. Quanti sono "non piccoli"? Per $k$ fra $\frac n4$ e $\frac{3n}{4}$ l'angolo $\frac{k\pi}{n}$ sta fra $\frac\pi4$ e $\frac{3\pi}{4}$.

> [!example]- Soluzione
> *Come si riconosce*: una somma il cui **numero di addendi** cresce con $n$; "limite della somma = somma dei limiti" non si può usare (vale per un numero fisso di addendi). *Metodo*: confronto. Si buttano via gli addendi piccoli (sono $\geq 0$, quindi la somma diminuisce) e si stimano dal basso quelli rimasti.
> 1. Per $0 \leq k \leq n$ l'angolo $\frac{k\pi}{n}$ sta in $[0, \pi]$, dove $\sin \geq 0$: tutti gli addendi sono $\geq 0$.
> 2. Per $\frac n4 \leq k \leq \frac{3n}{4}$ l'angolo sta in $\left[\frac\pi4, \frac{3\pi}{4}\right]$, dove $\sin x \geq \frac{\sqrt2}{2}$ (il seno sale da $\frac{\sqrt2}{2}$ a $1$ su $\left[\frac\pi4, \frac\pi2\right]$, e $\sin(\pi - x) = \sin x$).
> 3. Quanti interi $k$ stanno in $\left[\frac n4, \frac{3n}{4}\right]$, un intervallo lungo $\frac n2$? Il primo intero è $< \frac n4 + 1$ e l'ultimo è $> \frac{3n}{4} - 1$, quindi sono più di $\frac n2 - 1$.
> 4. Tengo solo quegli addendi: $a_n \geq \left(\frac n2 - 1\right) \cdot \frac{\sqrt2}{2}$.
> 5. Il secondo membro tende a $+\infty$: per il confronto $a_n \to +\infty$. Una successione che diverge non converge. $\blacksquare$
>
> *Verifica*: $n = 100$ dà $a_n \approx 63{,}66$, sopra la stima $49 \cdot \frac{\sqrt2}{2} \approx 34{,}6$. In realtà $a_n$ si comporta come $\frac{2n}{\pi}$ ($\approx 63{,}66$ per $n = 100$): è una somma di Riemann, si capirà con gli integrali.

## Riepilogo

| es. | limite | tecnica |
|---|---|---|
| 3.1 | $0$ | gerarchia |
| 3.2 | $3$ | raccogli, potenza |
| 3.3 | $\log 2$ | logaritmo stretto, carabinieri |
| 3.4 | $e^2$ | Nepero |
| 3.5 | $0$ | Nepero, poi $[a^{+\infty}]$ con $a < 1$ |
| 3.6 | $0$ | $[0^{+\infty}]$ |
| 3.7 | $1$ | (L2), carabinieri |
| 3.8 | $\frac12$ | raccogli $n!$ |
| 3.9 | $0$ | fattoriali, limitata per infinitesima |
| 3.10 | $+\infty$ | $[2^{+\infty}]$ |
| 3.11 | $e^3$ | Nepero, logaritmo stretto |
| 3.12 | $e^2$ | Nepero |
| 3.13 | $+\infty$ | Nepero, $[e^{+\infty}]$ |
| 3.14 | $1$ | Nepero, $e^0$ |
| 3.15 | $e^2$ | Nepero |
| 3.16 | $\frac{1}{\log 2}$ | logaritmo stretto, gerarchia |
| 3.17 | $+\infty$ | logaritmo stretto, un carabiniere |
| 3.18 | $0$ | gerarchia |
| 3.19 | $0$ | raccogli $\log n$, (L3), carabinieri |
| 3.20 | $1$ | raccogli $n^4$, logaritmo stretto |
| 3.21 | $\frac12$ | (L3), carabinieri |
| 3.22 | $\frac23$ | raccogli dentro le radici |
| 3.23 | $0$ | Nepero per $\frac1n$ |
| 3.24 | $+\infty$ | Nepero per $n^{n-1}$ |
| 3.25 | $+\infty$ | base $\to +\infty$ |
| 3.26 | $\frac1e$ | Nepero con $\alpha = -1$ |
| 3.27 | $+\infty$ | raccogli $n^n$ |
| 3.28 | $+\infty$ | gerarchia, permanenza del segno |
| 3.29 | $0$ | limitata per infinitesima |
| 3.30 | $1$ | potenza, base $\to 2$, esponente $\to 0$ |
| 3.31 | $\frac23$ | razionalizza |
| 3.32 | $0$ | raccogli $4^n$ |
| 3.33 | non esiste | pari e dispari |
| 3.34 | $e^{-2}$ | Nepero con $a_n \to -\infty$ |
| 3.35 | $1$ | Nepero, $e^0$ |
| 3.36 | $0$ | $[a^{+\infty}]$ con $a < 1$ |
| 3.37 | $0$ | Nepero, $[e^{-\infty}]$ |
| 3.38 | $0$ | $[0^{+\infty}]$ |
| 3.39 | $+\infty$ | Nepero, $[e^{+\infty}]$ |

## Errori tipici

**$[1^\infty] = 1$.**
- Sbagliato: "la base tende a $1$, e $1$ elevato a qualunque cosa fa $1$".
- Giusto: è una forma indeterminata. Il 3.12 e il 3.14 hanno la stessa forma e limiti $e^2$ e $1$; il risultato è $e^{\lim (\text{base} - 1) \cdot \text{esponente}}$.

**Usare Nepero senza controllare che $|a_n| \to +\infty$.**
- Sbagliato: applicare $\left(1 + \frac{1}{a_n}\right)^{a_n} \to e$ con $a_n$ che non esplode.
- Giusto: serve $|a_n| \to +\infty$. Con $a_n$ negativo (3.34, 3.35, 3.37) va bene, purché il modulo esploda.

**Dimenticare la base fra $0$ e $1$.**
- Sbagliato: "esponente $\to +\infty$, quindi $+\infty$" nel 3.5 o nel 3.36.
- Giusto: con base che tende a un numero in $[0, 1)$ l'esponente $+\infty$ dà $0$.

**Vedere Nepero dove non c'è.**
- Sbagliato: “$\left(2 + \frac1n\right)^n$ ha un $\frac1n$ e un esponente $n$, quindi fa $e$ o $2e$".
- Giusto: la base tende a $2 > 1$, è la forma determinata $\left[2^{+\infty}\right] = +\infty$ (3.10).

**Dimenticare che la base tende a $1$.**
- Sbagliato (sul quaderno, 3.4): raccogliere $n$ sopra e sotto in $\left(\frac{n+3}{n+1}\right)^n$ e concludere “$= \infty$".
- Giusto: la base tende a $1$ e l'esponente a $+\infty$, è $[1^\infty]$. Il risultato è $e^2$ (correzione in rosso già sul quaderno).

**Spezzare $\log(a + b)$ come $\log a + \log b$.**
- Sbagliato: “$\log(2^n + 1) = \log 2^n + \log 1 = n\log 2$".
- Giusto: non è una proprietà del logaritmo. Si raccoglie dentro, $\log(2^n + 1) = n\log 2 + \log\left(1 + 2^{-n}\right)$, oppure si stringe l'argomento fra due potenze (3.3, 3.11, 3.16).

**Usare la continuità del logaritmo prima del capitolo 4.**
- Sbagliato: “$\log(1 + e^{-n}) \to \log 1 = 0$" o “$\log\left(1 + \frac1n\right)^n \to \log e = 1$" senza giustificazione.
- Giusto: finché la continuità non è stata fatta, si stringe il logaritmo con (L1), (L2), (L3) e si chiude con i carabinieri (3.7, 3.21). Dopo la sezione 4.4 il passaggio diretto sarà lecito.

**Usare la gerarchia fuori dal suo enunciato.**
- Sbagliato: “$\log(2^n + 1) \ll n$ perché il logaritmo è più lento"; “$\frac{\log(\log n)}{\log n} \to 0$ per la gerarchia".
- Giusto: la gerarchia confronta $\log n$ con le potenze di $n$. Il logaritmo di un esponenziale cresce come $n$ (slide 67); per $\log(\log n)$ contro $\log n$ serve una stima, come (L3) nel 3.19.

**Fidarsi dei valori per $n$ piccolo.**
- Sbagliato: "per $n = 1000$ il 3.1 è negativo, quindi il limite è negativo"; “$n^{\sqrt n} > 2^n$ per $n = 9$, quindi comanda $n^{\sqrt n}$".
- Giusto: il limite parla di $n \to +\infty$. Nel 3.1 il denominatore diventa positivo solo verso $n \approx 2 \cdot 10^{11}$; nel 3.4 del 13/10 $2^n$ passa sopra da $n = 16$ in poi.

**Fermarsi a "comanda $n^4$".**
- Sbagliato: scrivere solo chi comanda e il risultato.
- Giusto: si scrive il raccoglimento e il limite di ogni pezzo che resta (3.20), come chiede la parte 2.

**Sbagliare il verso nel prodotto in croce.**
- Sbagliato (sul quaderno, 2.2): per $\frac{n}{n^2+1}$ scrivere $(n+1)(n^2+1) > n(n^2 + 2n + 2)$ per dimostrare $a_{n+1} < a_n$.
- Giusto: il verso è $<$, che porta a $1 < n^2 + n$, vero per $n \geq 1$. Il tuo “$n^2 + n > 1$" finale è giusto, ma non segue dalla riga prima. Il modo sicuro è la differenza $a_n - a_{n+1}$ con denominatore comune, come nella soluzione del 2.2.

**Confondere "definitivamente monotona" con "monotona".**
- Sbagliato: “$n^3 + 3n^2 - 9n + 2$ è crescente perché comanda $n^3$".
- Giusto: è crescente solo da $n = 1$ in poi; da $a_0 = 2$ ad $a_1 = -3$ scende (2.5).

**Dire “$\sqrt{n^2 + 2n} \approx n$, quindi la differenza fa $0$".**
- Sbagliato: stesso ordine vuol dire differenza nulla.
- Giusto: la differenza di due infiniti dello stesso ordine è indeterminata; si razionalizza e viene $1$ (esempio istruttivo del 13/10).

**Dire che il 3.33 vale $\pm 1$.**
- Sbagliato: "il limite è $1$ o $-1$".
- Giusto: un limite, se esiste, è unico. Le due sottosuccessioni con limiti diversi dimostrano che non esiste.

## Domande

- Come si studia la monotonia di una successione? Perché $n^3 + 3n^2 - 9n + 2$ non è monotona su $\mathbb{N}$?

- Come si calcola un limite $[1^\infty]$ con Nepero generalizzato? Da cosa dipende se il risultato è $e^c$, $+\infty$ o $0$?

- Come si stima $\log(2^n + 1)$ senza la continuità del logaritmo?

- Perché $\sqrt[n]{2^n + 3^n} \to 3$?

- Come si dimostra che $\sqrt[n]{n!} \to +\infty$?

- Perché $\sqrt{n^2 + 2n} - n$ non tende a $0$? Quanto vale il limite?

- Come si confrontano $n^{\sqrt n}$ e $2^n$?

- Quale stima lega $\log\left(1 + \frac1n\right)$ a $\frac1n$ e $\frac1{n+1}$, e come si usa per calcolare $\lim n\log\left(1 + \frac1n\right)$?

- Che disuguaglianza lega $\log y$ e $y - 1$ per $y \geq 1$, e perché dà $\log(1 + e^{-n}) \to 0$?

- In una forma $[1^\infty]$, come si prevede il risultato guardando $(\text{base} - 1) \cdot \text{esponente}$?

- Perché $\left(1 + \frac{(-1)^n}{n}\right)^n$ non ha limite?

- Perché nel 3.19 non si può dire “$\frac{\log(\log n)}{\log n} \to 0$ per la gerarchia"? Quale stima si usa al suo posto?

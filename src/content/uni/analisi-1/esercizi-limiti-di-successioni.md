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
lezioni: []
ordine: 999
---

Gli esercizi 2 e 3 del III tutoraggio, "Successioni e loro limiti" (Barbon, Favari, Bellomo: <span class="src">Tutoraggio 3</span>), con la consegna: «Studiare la monotonia delle seguenti successioni» e «Calcolare i seguenti limiti, se esistono; altrimenti dimostrare che non esistono». L'esercizio 1 del foglio (sup e inf di un insieme con il logaritmo) sta in [Esercizi sup e inf](/uni/analisi-1/esercizi-sup-e-inf/). La teoria è in [Successioni monotone e numero di Nepero](/uni/analisi-1/successioni-monotone-e-numero-di-nepero/), [Permanenza del segno e confronto](/uni/analisi-1/permanenza-del-segno-e-confronto/) e [Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/). Il foglio non ha soluzioni: queste sono scritte e verificate qui. Ogni esercizio ha un **indizio** e una **soluzione**, entrambi chiusi.

> [!abstract] Per l'esame
> - **Saper fare**: studiare la monotonia con $a_{n+1} - a_n$; riconoscere la forma di un limite e scegliere la tecnica (raccogli chi comanda, razionalizza, Nepero, gerarchia, carabinieri, criterio del rapporto); dimostrare che un limite non esiste con due sottosuccessioni.
> - **Dove esce**: è il tipo di esercizio da 7 punti della parte 2 sui limiti di successioni, e una versione veloce di questi limiti è la crocetta tipica.

> [!warning] Tre limiti del foglio non sono qui
> Gli esercizi 3.(7) $\ n\log\left(1 + \frac1n\right)$, 3.(19) $\ \frac{\log(\log n) + 3^{-n}}{\sin n - \log n}$ e 3.(21) $\ \frac{1 + 2^{-n}}{\log(1 + e^{-n}) + 2}$ richiedono che $\log x_n \to \log x$ quando $x_n \to x$ (continuità del logaritmo) o i limiti notevoli delle funzioni: arrivano con il capitolo 4, limiti di funzioni e continuità, non ancora fatto a lezione. Si aggiungono quando il prof ci arriva.

## Cosa serve

**Convenzione.** $\log$ è il logaritmo naturale, in base $e$ (il foglio usa anche $\ln$ per la stessa cosa).

**Strumenti** (con la sezione dove stanno):
- limiti fondamentali: $n^b$, $a^n$, $\log n$ ([Calcolo dei limiti](/uni/analisi-1/calcolo-dei-limiti/), slide 45);
- algebra dei limiti finiti, compresa la **potenza** $a_n^{b_n} \to a^b$ con $a > 0$ (slide 46-48), e l'algebra estesa delle forme determinate (slide 49-50);
- **Nepero generalizzato**: $|a_n| \to +\infty \Rightarrow \left(1 + \frac{1}{a_n}\right)^{a_n} \to e$ (slide 37);
- **carabinieri** e "limitata per infinitesima" (slide 41-42);
- **gerarchia** $\log_a n \ll n^\alpha \ll a^n \ll n! \ll n^n$ (slide 65) e **criterio del rapporto** (slide 62).

**Il trucco del logaritmo senza continuità.** Quando compare $\log(\text{somma})$, si stringe l'argomento fra due potenze e si usa che $\log$ è **crescente** (non serve altro). Per esempio $2^n < 2^n + 1 \leq 2^{n+1}$ dà $n\log 2 < \log(2^n + 1) \leq (n + 1)\log 2$. Poi i carabinieri.

**Le forme $[1^\infty]$ in quattro righe.**
```
base = 1 + 1/a_n             a_n = 1/(base - 1),   |a_n| -> +∞
esponente = a_n · c_n        c_n = esponente / a_n
base^esponente = [(1 + 1/a_n)^(a_n)]^(c_n)
-> e^c se c_n -> c finito;   +∞ se c_n -> +∞;   0 se c_n -> -∞
```
Gli ultimi due casi sono le forme determinate $[e^{+\infty}] = +\infty$ e $[e^{-\infty}] = 0$, con base che tende a $e > 1$.

## Monotonia (esercizio 2)

### 2.1) $a_n = \dfrac{1}{n^2 + 1}$

> [!tip]- Indizio
> Il denominatore cosa fa quando $n$ cresce?

> [!example]- Soluzione
> Per $n \geq 0$: $(n+1)^2 + 1 > n^2 + 1 > 0$, quindi, siccome il reciproco di numeri positivi gira la disuguaglianza,
> $$
> a_{n+1} = \frac{1}{(n+1)^2 + 1} < \frac{1}{n^2 + 1} = a_n
> $$
> **Strettamente decrescente** su tutto $\mathbb{N}$: $1, \frac12, \frac15, \frac1{10}, \dots$

### 2.2) $a_n = \dfrac{n}{n^2 + 1}$

> [!tip]- Indizio
> È l'esempio del prof del 6/10. Guarda i primi due termini prima di fare il conto.

> [!example]- Soluzione
> $a_0 = 0 < a_1 = \frac12$: all'inizio sale. Da $n = 1$ in poi, come nell'esempio della slide 29:
> $$
> a_n - a_{n+1} = \frac{n^2 + n - 1}{(n^2+1)\big((n+1)^2 + 1\big)}
> $$
> Il denominatore è positivo e il numeratore $n^2 + n - 1 \geq 1 > 0$ per $n \geq 1$. Quindi $a_n > a_{n+1}$ per $n \geq 1$.
>
> **Non è monotona su $\mathbb{N}$**; è strettamente decrescente da $n = 1$ in poi (definitivamente decrescente). Il massimo è $a_1 = \frac12$.

### 2.3) $a_n = 2^n + \dfrac1n$, $n \geq 1$

> [!tip]- Indizio
> Un pezzo cresce molto, l'altro scende poco. Scrivi $a_{n+1} - a_n$ e confronta le due parti.

> [!example]- Soluzione
> $$
> a_{n+1} - a_n = \left(2^{n+1} - 2^n\right) + \left(\frac{1}{n+1} - \frac1n\right) = 2^n - \frac{1}{n(n+1)}
> $$
> Per $n \geq 1$: $2^n \geq 2$ e $\frac{1}{n(n+1)} \leq \frac12$, quindi $a_{n+1} - a_n \geq 2 - \frac12 > 0$.
>
> **Strettamente crescente**: $3, \frac92, \frac{25}{3}, \dots$

### 2.4) $a_n = n + \dfrac1n$, $n \geq 1$

> [!tip]- Indizio
> Stesso schema del 2.3. Attenzione al primo passo, $n = 1$.

> [!example]- Soluzione
> $$
> a_{n+1} - a_n = 1 + \frac{1}{n+1} - \frac1n = 1 - \frac{1}{n(n+1)}
> $$
> Per $n \geq 1$: $n(n+1) \geq 2$, quindi $\frac{1}{n(n+1)} \leq \frac12$ e $a_{n+1} - a_n \geq \frac12 > 0$.
>
> **Strettamente crescente**: $2, \frac52, \frac{10}{3}, \dots$ (Su $\mathbb{R}$ la funzione $x + \frac1x$ scende fra $0$ e $1$, ma sui naturali da $1$ in poi conta solo il confronto fra termini consecutivi.)

### 2.5) $a_n = n^3 + 3n^2 - 9n + 2$

> [!tip]- Indizio
> Calcola $a_{n+1} - a_n$ espandendo $(n+1)^3$ e $(n+1)^2$: viene un polinomio di secondo grado. Per quali $n$ naturali è positivo?

> [!example]- Soluzione
> $$
> a_{n+1} - a_n = \underbrace{(3n^2 + 3n + 1)}_{(n+1)^3 - n^3} + \underbrace{3(2n + 1)}_{3[(n+1)^2 - n^2]} - 9 = 3n^2 + 9n - 5
> $$
> Per $n = 0$ vale $-5 < 0$; per $n \geq 1$ vale almeno $3 + 9 - 5 = 7 > 0$ (ed è crescente in $n$).
>
> Quindi $a_0 > a_1$ e poi $a_1 < a_2 < a_3 < \dots$ I valori: $a_0 = 2$, $a_1 = -3$, $a_2 = 4$, $a_3 = 29$. **Non è monotona su $\mathbb{N}$**; è strettamente crescente da $n = 1$ in poi. Il minimo è $a_1 = -3$.

## Limiti (esercizio 3)

### Raccogli chi comanda e gerarchia

#### 3.1) $\displaystyle\lim \frac{1 + \log n}{\sqrt n - (\log n)^4}$

> [!tip]- Indizio
> Chi comanda fra $\sqrt n$ e $(\log n)^4$? Gerarchia: $\log n \ll n^\alpha$ per **ogni** $\alpha > 0$, anche piccolo. Raccogli $\sqrt n$ sopra e sotto.

> [!example]- Soluzione
> Dividendo sopra e sotto per $\sqrt n$:
> $$
> \frac{\frac{1}{\sqrt n} + \frac{\log n}{\sqrt n}}{1 - \frac{(\log n)^4}{\sqrt n}}
> $$
> - $\frac{1}{\sqrt n} \to 0$, e $\frac{\log n}{\sqrt n} = \frac{\log n}{n^{1/2}} \to 0$ per la gerarchia.
> - $\frac{(\log n)^4}{\sqrt n} = \left(\frac{\log n}{n^{1/8}}\right)^4$: il rapporto fra parentesi tende a $0$ (gerarchia con $\alpha = \frac18$), e il prodotto di quattro infinitesimi è infinitesimo.
>
> Il limite è $\frac{0 + 0}{1 - 0} = 0$.

#### 3.8) $\displaystyle\lim \frac{(n+3)! - n!}{2n^2(n+1)!}$

> [!tip]- Indizio
> Raccogli $n!$ al numeratore e scrivi $(n+3)! = (n+3)(n+2)(n+1)\,n!$ e $(n+1)! = (n+1)\,n!$.

> [!example]- Soluzione
> $$
> \frac{n!\big[(n+3)(n+2)(n+1) - 1\big]}{2n^2(n+1)\,n!} = \frac{n^3 + 6n^2 + 11n + 5}{2n^3 + 2n^2}
> $$
> Grado $3$ sopra e sotto, coefficienti direttori $1$ e $2$: il limite è $\frac12$.

#### 3.9) $\displaystyle\lim \frac{n! + 2\cos n}{(2n)! + (-1)^n}$

> [!tip]- Indizio
> Raccogli $n!$ sopra e $(2n)!$ sotto. Quanto vale $\frac{n!}{(2n)!}$? Scrivilo come prodotto.

> [!example]- Soluzione
> $$
> \frac{n!\left(1 + \frac{2\cos n}{n!}\right)}{(2n)!\left(1 + \frac{(-1)^n}{(2n)!}\right)}
> $$
> - $\frac{2\cos n}{n!} \to 0$ e $\frac{(-1)^n}{(2n)!} \to 0$: limitata per infinitesima.
> - $\frac{n!}{(2n)!} = \frac{1}{(n+1)(n+2)\cdots(2n)} \leq \frac{1}{n+1} \to 0$, e il rapporto è positivo: carabinieri.
>
> Il limite è $0 \cdot \frac{1 + 0}{1 + 0} = 0$.

#### 3.18) $\displaystyle\lim \frac{n^{10} + 10^{-n} + \cos(e^n)}{5^n + n^8}$

> [!tip]- Indizio
> Sopra comanda $n^{10}$ (gli altri due pezzi sono limitati), sotto $5^n$.

> [!example]- Soluzione
> $$
> \frac{n^{10}}{5^n} \cdot \frac{1 + \frac{10^{-n} + \cos(e^n)}{n^{10}}}{1 + \frac{n^8}{5^n}}
> $$
> $\frac{n^{10}}{5^n} \to 0$ e $\frac{n^8}{5^n} \to 0$ per la gerarchia; $10^{-n} + \cos(e^n)$ è limitata ($\leq 2$ in modulo) e divisa per $n^{10}$ tende a $0$. Il limite è $0 \cdot \frac{1}{1} = 0$.

#### 3.20) $\displaystyle\lim \frac{n^4 + \sqrt{1 + n^7} + \log\left(1 + 3^{n^3}\right)}{\sqrt[3]{n + n^{12}} - n\sin n}$

> [!tip]- Indizio
> Sotto: $\sqrt[3]{n^{12}} = n^4$. Sopra: $\sqrt{n^7} = n^{3{,}5}$, e il logaritmo si stringe fra $n^3 \log 3$ e $(n^3 + 1)\log 3$. Chi comanda?

> [!example]- Soluzione
> Si divide tutto per $n^4$.
>
> **Numeratore.** $\frac{\sqrt{1 + n^7}}{n^4} = \sqrt{\frac{1}{n^8} + \frac1n} \to 0$. Per il logaritmo, $3^{n^3} < 1 + 3^{n^3} \leq 2 \cdot 3^{n^3} \leq 3^{n^3 + 1}$, quindi $n^3\log 3 < \log\left(1 + 3^{n^3}\right) \leq (n^3 + 1)\log 3$, e diviso per $n^4$ sta fra $\frac{\log 3}{n}$ e $\frac{(n^3+1)\log 3}{n^4}$, entrambi $\to 0$. Numeratore$/n^4 \to 1 + 0 + 0 = 1$.
>
> **Denominatore.** $\frac{\sqrt[3]{n + n^{12}}}{n^4} = \sqrt[3]{1 + \frac{1}{n^{11}}} \to 1$ (potenza con base $\to 1$) e $\frac{n\sin n}{n^4} = \frac{\sin n}{n^3} \to 0$. Denominatore$/n^4 \to 1$.
>
> Il limite è $\frac11 = 1$.

#### 3.22) $\displaystyle\lim \frac{\sqrt{n^2 + n} + \sqrt[3]{n^3 + n}}{n\left(3 - 2^{-n}\right)}$

> [!tip]- Indizio
> Porta fuori $n$ da ciascuna radice.

> [!example]- Soluzione
> $\sqrt{n^2 + n} = n\sqrt{1 + \frac1n}$, $\ \sqrt[3]{n^3 + n} = n\sqrt[3]{1 + \frac{1}{n^2}}$. Semplificando $n$:
> $$
> \frac{\sqrt{1 + \frac1n} + \sqrt[3]{1 + \frac1{n^2}}}{3 - 2^{-n}} \to \frac{1 + 1}{3 - 0} = \frac23
> $$

#### 3.32) $\displaystyle\lim \frac{5 + 3^n}{2^{2n} + 3^{n+3}}$

> [!tip]- Indizio
> $2^{2n} = 4^n$ e $3^{n+3} = 27 \cdot 3^n$. Chi comanda sotto?

> [!example]- Soluzione
> Sotto comanda $4^n$. Raccogliendo $3^n$ sopra e $4^n$ sotto:
> $$
> \frac{3^n\left(1 + \frac{5}{3^n}\right)}{4^n\left(1 + 27\left(\frac34\right)^n\right)} = \left(\frac34\right)^n \cdot \frac{1 + 5 \cdot 3^{-n}}{1 + 27\left(\frac34\right)^n} \to 0 \cdot \frac{1}{1} = 0
> $$

#### 3.23) $\displaystyle\lim \frac{(n+1)^n}{n^{n+1}}$ e 3.24) $\displaystyle\lim \frac{(n+1)^{2n}}{n^{n+1}}$

> [!tip]- Indizio
> $\frac{(n+1)^n}{n^n} = \left(1 + \frac1n\right)^n$. Fai comparire Nepero e guarda cosa avanza.

> [!example]- Soluzione
> **3.23.** $\displaystyle\frac{(n+1)^n}{n^n \cdot n} = \left(1 + \frac1n\right)^n \cdot \frac1n \to e \cdot 0 = 0$.
>
> **3.24.** $\displaystyle\frac{(n+1)^{2n}}{n^{2n}} \cdot \frac{n^{2n}}{n^{n+1}} = \left[\left(1 + \frac1n\right)^n\right]^2 \cdot n^{n-1} \to [e^2 \cdot +\infty] = +\infty$.

#### 3.25) $\displaystyle\lim \frac{(n+1)^{2n}}{(2n)^n}$

> [!tip]- Indizio
> Tutto alla $n$: $\left(\frac{(n+1)^2}{2n}\right)^n$. Quanto è grande la base?

> [!example]- Soluzione
> La base $\frac{(n+1)^2}{2n} \geq 2$ per ogni $n \geq 1$, perché $(n+1)^2 \geq 4n \iff (n - 1)^2 \geq 0$. Quindi
> $$
> \frac{(n+1)^{2n}}{(2n)^n} = \left(\frac{(n+1)^2}{2n}\right)^n \geq 2^n \to +\infty
> $$
> Basta un carabiniere: il limite è $+\infty$.

#### 3.26) $\displaystyle\lim \frac{(n-1)^n}{n^n + 1}$ e 3.27) $\displaystyle\lim \frac{n^{n+1}}{n^n + 1}$

> [!tip]- Indizio
> Raccogli $n^n$ al denominatore in entrambi.

> [!example]- Soluzione
> **3.26.** $\displaystyle\frac{(n-1)^n}{n^n\left(1 + n^{-n}\right)} = \frac{\left(1 - \frac1n\right)^n}{1 + n^{-n}} \to \frac{e^{-1}}{1 + 0} = \frac1e$, con $\left(1 - \frac1n\right)^n \to e^{-1}$ (Nepero generalizzato con $\alpha = -1$) e $n^{-n} = \frac{1}{n^n} \to 0$.
>
> **3.27.** $\displaystyle\frac{n^{n+1}}{n^n\left(1 + n^{-n}\right)} = \frac{n}{1 + n^{-n}} \to +\infty$.

#### 3.28) $\displaystyle\lim \sqrt[n]{n!}$

> [!tip]- Indizio
> Per la gerarchia $M^n \ll n!$ per ogni $M > 1$. Cosa dice questo su $n!$ confrontato con $M^n$ da un certo punto in poi? E sulla radice?

> [!example]- Soluzione
> Fissiamo $M > 1$. Per la gerarchia (o il criterio del rapporto: $\frac{M^{n+1}/(n+1)!}{M^n/n!} = \frac{M}{n+1} \to 0$) vale $\frac{M^n}{n!} \to 0$, quindi per la permanenza del segno $\frac{M^n}{n!} < 1$ definitivamente, cioè $n! > M^n$ definitivamente. Estraendo la radice $n$-esima (crescente): $\sqrt[n]{n!} > M$ definitivamente.
>
> Siccome $M$ è arbitrario, è la definizione di $\sqrt[n]{n!} \to +\infty$.

### Razionalizzare

#### 3.31) $\displaystyle\lim \frac{1}{\sqrt n\left(\sqrt{n+1} - \sqrt{n-2}\right)}$

> [!tip]- Indizio
> Differenza di radici quadrate: moltiplica e dividi per la somma.

> [!example]- Soluzione
> $$
> \sqrt{n+1} - \sqrt{n-2} = \frac{(n+1) - (n-2)}{\sqrt{n+1} + \sqrt{n-2}} = \frac{3}{\sqrt{n+1} + \sqrt{n-2}}
> $$
> quindi
> $$
> \frac{1}{\sqrt n\left(\sqrt{n+1} - \sqrt{n-2}\right)} = \frac{\sqrt{n+1} + \sqrt{n-2}}{3\sqrt n} = \frac{\sqrt{1 + \frac1n} + \sqrt{1 - \frac2n}}{3} \to \frac{2}{3}
> $$

### Potenze: forme determinate

#### 3.2) $\displaystyle\lim \sqrt[n]{2^n + 3^n}$

> [!tip]- Indizio
> Raccogli $3^n$ dentro la radice: $\sqrt[n]{3^n} = 3$.

> [!example]- Soluzione
> $$
> \sqrt[n]{3^n\left(1 + \left(\tfrac23\right)^n\right)} = 3\left(1 + \left(\tfrac23\right)^n\right)^{1/n}
> $$
> La base $1 + \left(\frac23\right)^n \to 1 > 0$, l'esponente $\frac1n \to 0$: per la regola della potenza tende a $1^0 = 1$. Il limite è $3$. (Comanda la base più grande.)

#### 3.6) $\displaystyle\lim \left(\sqrt[n]{3} - 1\right)^n$

> [!tip]- Indizio
> A cosa tende $3^{1/n}$? Allora a cosa tende la base, e con che segno?

> [!example]- Soluzione
> $3^{1/n} \to 3^0 = 1$ (potenza: base $3$, esponente $\frac1n \to 0$), e $3^{1/n} > 1$. Quindi la base $3^{1/n} - 1 \to 0^+$, l'esponente $n \to +\infty$: forma determinata $[0^{+\infty}] = 0$.

#### 3.10) $\displaystyle\lim \left(2 + \frac1n\right)^n$

> [!tip]- Indizio
> Non è $[1^\infty]$: guarda bene la base.

> [!example]- Soluzione
> Base $\to 2 > 1$, esponente $\to +\infty$: $[2^{+\infty}] = +\infty$. È l'esempio della slide 50.

#### 3.30) $\displaystyle\lim \left(\frac{\cos(n^2) - \sin^2 n + 2n}{\sqrt{n^2 + (-1)^n}}\right)^{4/\sqrt[4]{n}}$

> [!tip]- Indizio
> Base ed esponente separatamente: la base tende a un numero positivo, l'esponente a $0$.

> [!example]- Soluzione
> **Base.** Raccogliendo $n$:
> $$
> \frac{n\left(2 + \frac{\cos(n^2) - \sin^2 n}{n}\right)}{n\sqrt{1 + \frac{(-1)^n}{n^2}}} \to \frac{2 + 0}{1} = 2
> $$
> perché $\cos(n^2) - \sin^2 n$ è limitata (fra $-2$ e $1$) e diviso per $n$ va a $0$; e $\frac{(-1)^n}{n^2} \to 0$.
>
> **Esponente.** $\frac{4}{\sqrt[4]n} = 4n^{-1/4} \to 0$.
>
> Base $\to 2 > 0$, esponente $\to 0$: il limite è $2^0 = 1$.

#### 3.5) $\displaystyle\lim \left(\frac{n-1}{n}\right)^{n^2}$ e 3.36) $\displaystyle\lim\left(\frac{n+2}{2n+1}\right)^{n^2}$

> [!tip]- Indizio
> Nel 3.5 scrivi $n^2 = n \cdot n$ e fai comparire $\left(1 - \frac1n\right)^n$. Nel 3.36 la base non tende a $1$.

> [!example]- Soluzione
> **3.5.** $\left(1 - \frac1n\right)^{n^2} = \left[\left(1 - \frac1n\right)^n\right]^n$. La base fra quadre tende a $e^{-1} \in (0, 1)$, l'esponente a $+\infty$. Con base fra $0$ e $1$, $[a^{+\infty}] = 0$. Il limite è $0$.
>
> **3.36.** La base $\frac{n+2}{2n+1} \to \frac12 \in (0, 1)$, l'esponente $n^2 \to +\infty$: $\left[\left(\frac12\right)^{+\infty}\right] = 0$.

#### 3.38) $\displaystyle\lim \left(\frac{n-3}{\sqrt[3]{n^4 + 1}}\right)^{\sqrt n}$

> [!tip]- Indizio
> $\sqrt[3]{n^4} = n^{4/3}$, che è più grande di $n$.

> [!example]- Soluzione
> Base: $\frac{n\left(1 - \frac3n\right)}{n^{4/3}\sqrt[3]{1 + n^{-4}}} = n^{-1/3}\frac{1 - \frac3n}{\sqrt[3]{1 + n^{-4}}} \to 0 \cdot 1 = 0$, ed è positiva per $n \geq 4$: tende a $0^+$. Esponente $\sqrt n \to +\infty$. Forma $[0^{+\infty}] = 0$.

### Nepero: forme $[1^\infty]$

#### 3.4) $\displaystyle\lim \left(\frac{n+3}{n+1}\right)^n$

> [!tip]- Indizio
> Somma e sottrai: $\frac{n+3}{n+1} = 1 + \frac{2}{n+1}$.

> [!example]- Soluzione
> Base $1 + \frac{1}{a_n}$ con $a_n = \frac{n+1}{2} \to +\infty$. Esponente $n = a_n \cdot \frac{2n}{n+1}$:
> $$
> \left[\left(1 + \frac{1}{a_n}\right)^{a_n}\right]^{\frac{2n}{n+1}} \to e^2
> $$

#### 3.34) $\displaystyle\lim \left(\frac{n^2 + 2}{n^2 + n + 1}\right)^{2n}$

> [!tip]- Indizio
> $\frac{n^2 + 2}{n^2 + n + 1} = 1 + \frac{1 - n}{n^2 + n + 1}$. Qui $a_n$ è negativo: va bene lo stesso.

> [!example]- Soluzione
> $a_n = \frac{n^2 + n + 1}{1 - n} \to -\infty$, quindi $|a_n| \to +\infty$. Esponente nuovo:
> $$
> \frac{2n}{a_n} = \frac{2n(1 - n)}{n^2 + n + 1} \to -2
> $$
> Il limite è $e^{-2}$.

#### 3.35) $\displaystyle\lim \left(\frac{n^2 - 2}{n^2 + 4}\right)^{n}$

> [!tip]- Indizio
> Stesso schema. Guarda quanto vale $\frac{n}{a_n}$: chi è più grande fra $n$ e $a_n$?

> [!example]- Soluzione
> $\frac{n^2 - 2}{n^2 + 4} = 1 - \frac{6}{n^2 + 4}$, $\ a_n = -\frac{n^2 + 4}{6}$. Esponente nuovo $\frac{n}{a_n} = -\frac{6n}{n^2 + 4} \to 0$. Il limite è $e^0 = 1$.
>
> Il motivo: la base si avvicina a $1$ come $\frac{1}{n^2}$, l'esponente cresce solo come $n$. Non fa in tempo a spostarsi da $1$.

#### 3.37) $\displaystyle\lim \left(\frac{n}{n+3}\right)^{2n^2}$ e 3.39) $\displaystyle\lim \left(\frac{n+2}{n+1}\right)^{n^2}$

> [!tip]- Indizio
> Qui è il contrario del 3.35: la base si avvicina a $1$ come $\frac1n$, l'esponente cresce come $n^2$.

> [!example]- Soluzione
> **3.37.** $\frac{n}{n+3} = 1 - \frac{3}{n+3}$, $\ a_n = -\frac{n+3}{3}$. Esponente nuovo $\frac{2n^2}{a_n} = -\frac{6n^2}{n+3} \to -\infty$. Base fra quadre $\to e > 1$, esponente $\to -\infty$: $[e^{-\infty}] = 0$.
>
> **3.39.** $\frac{n+2}{n+1} = 1 + \frac{1}{n+1}$, $\ a_n = n + 1$. Esponente nuovo $\frac{n^2}{n+1} \to +\infty$: $[e^{+\infty}] = +\infty$.

#### 3.11) $\displaystyle\lim \left(1 + \frac{n+1}{n\log n}\right)^{\log(1 + n^3)}$

> [!tip]- Indizio
> $a_n = \frac{n\log n}{n+1}$. Per l'esponente nuovo serve $\frac{\log(1 + n^3)}{\log n}$: stringi $1 + n^3$ fra $n^3$ e $2n^3$.

> [!example]- Soluzione
> Per $n \geq 2$, $a_n = \frac{n \log n}{n + 1} = \frac{n}{n+1}\log n \to 1 \cdot (+\infty) = +\infty$. Esponente nuovo:
> $$
> \frac{\log(1 + n^3)}{a_n} = \frac{n+1}{n} \cdot \frac{\log(1 + n^3)}{\log n}
> $$
> Da $n^3 < 1 + n^3 \leq 2n^3$ e $\log$ crescente: $3\log n < \log(1 + n^3) \leq \log 2 + 3\log n$. Dividendo per $\log n > 0$:
> $$
> 3 < \frac{\log(1 + n^3)}{\log n} \leq 3 + \frac{\log 2}{\log n} \to 3
> $$
> Carabinieri: tende a $3$. L'esponente nuovo tende a $1 \cdot 3 = 3$, e il limite è $e^3$.

#### 3.12-3.15) Quattro varianti della stessa base

$$
\text{3.12)}\ \left(\frac{n^4 - 7n^2 + 20}{n^4 - 8n^2 + 16}\right)^{\frac{2n^3 + n^2 + 2n + 1}{n+1}} \qquad \text{3.13)}\ \left(\frac{n^4 - 7n^3 + 20}{n^4 - 8n^3 + 16}\right)^{\frac{2n^3 + n^2 + 2n + 1}{n+1}}
$$
$$
\text{3.14)}\ \left(\frac{n^4 - 7n + 20}{n^4 - 8n + 16}\right)^{\frac{2n^3 + n^2 + 2n + 1}{n+1}} \qquad \text{3.15)}\ \left(\frac{n^4 - 7n + 20}{n^4 - 8n + 16}\right)^{2n^3 + n^2 + 2n + 1}
$$

> [!tip]- Indizio
> In tutti e quattro la base è $1 + \frac{\text{numeratore} - \text{denominatore}}{\text{denominatore}}$. Calcola la differenza, che è piccola, e confronta il suo ordine con quello dell'esponente: è tutto lì. Nota che $\frac{2n^3 + n^2 + 2n + 1}{n + 1} \sim 2n^2$.

> [!example]- Soluzione
> Le differenze numeratore meno denominatore:
>
> | | differenza | base $- 1$ circa | esponente circa | prodotto | limite |
> |---|---|---|---|---|---|
> | 3.12 | $n^2 + 4$ | $\frac{1}{n^2}$ | $2n^2$ | $\to 2$ | $e^2$ |
> | 3.13 | $n^3 + 4$ | $\frac1n$ | $2n^2$ | $\to +\infty$ | $+\infty$ |
> | 3.14 | $n + 4$ | $\frac{1}{n^3}$ | $2n^2$ | $\to 0$ | $1$ |
> | 3.15 | $n + 4$ | $\frac{1}{n^3}$ | $2n^3$ | $\to 2$ | $e^2$ |
>
> Il conto per il 3.12, gli altri sono uguali. Base $= 1 + \frac{n^2 + 4}{n^4 - 8n^2 + 16} = 1 + \frac{1}{a_n}$ con $a_n = \frac{(n^2 - 4)^2}{n^2 + 4} \to +\infty$ (il denominatore è $(n^2 - 4)^2$). L'esponente nuovo
> $$
> \frac{2n^3 + n^2 + 2n + 1}{n + 1} \cdot \frac{n^2 + 4}{(n^2 - 4)^2}
> $$
> ha grado $3 + 2 = 5$ sopra e $1 + 4 = 5$ sotto, coefficiente direttore $\frac{2 \cdot 1}{1 \cdot 1} = 2$: tende a $2$, e il limite è $e^2$.
>
> Nel 3.13 l'esponente nuovo ha grado $3 + 3 = 6$ sopra e $1 + 4 = 5$ sotto: va a $+\infty$, e $[e^{+\infty}] = +\infty$. Nel 3.14 grado $3 + 1 = 4$ sopra e $5$ sotto: va a $0$, e $e^0 = 1$. Nel 3.15 l'esponente è già di grado $3$ (non diviso per $n + 1$): grado $3 + 1 = 4$ sopra e $4$ sotto, coefficiente $2$: $e^2$.
>
> La lezione del foglio: in $[1^\infty]$ conta solo la gara fra "quanto la base è vicina a $1$" ed "esponente".

### Logaritmi stretti fra potenze

#### 3.3) $\displaystyle\lim \frac{\log(2^n + 1)}{n}$

> [!tip]- Indizio
> $2^n < 2^n + 1 \leq 2^{n+1}$. Applica $\log$, che è crescente, e dividi per $n$.

> [!example]- Soluzione
> Da $2^n < 2^n + 1 \leq 2 \cdot 2^n = 2^{n+1}$ (vale perché $1 \leq 2^n$):
> $$
> n\log 2 < \log(2^n + 1) \leq (n+1)\log 2 \implies \log 2 < \frac{\log(2^n + 1)}{n} \leq \left(1 + \frac1n\right)\log 2
> $$
> I due carabinieri tendono a $\log 2$: il limite è $\log 2$.

#### 3.16) $\displaystyle\lim \frac{2^n + 4^{-n}}{\log(2^n + 1) + \log\left(2^{2^n} + 1\right)}$

> [!tip]- Indizio
> Stesso trucco del 3.3 per entrambi i logaritmi: $\log\left(2^{2^n} + 1\right)$ sta fra $2^n \log 2$ e $(2^n + 1)\log 2$. Chi comanda al denominatore?

> [!example]- Soluzione
> Con le stime del 3.3, il denominatore $D_n$ soddisfa
> $$
> (n + 2^n)\log 2 < D_n \leq (n + 1 + 2^n + 1)\log 2
> $$
> Il numeratore è $2^n\left(1 + 8^{-n}\right)$ (perché $\frac{4^{-n}}{2^n} = 8^{-n}$). Quindi
> $$
> \frac{1 + 8^{-n}}{\left(1 + \frac{n + 2}{2^n}\right)\log 2} \leq \frac{2^n + 4^{-n}}{D_n} < \frac{1 + 8^{-n}}{\left(1 + \frac{n}{2^n}\right)\log 2}
> $$
> Per la gerarchia $\frac{n}{2^n} \to 0$ e $\frac{n+2}{2^n} \to 0$; $8^{-n} \to 0$. Entrambi i carabinieri tendono a $\frac{1}{\log 2}$, che è il limite.

#### 3.17) $\displaystyle\lim \frac{(\log n)^3 + \log(2 + 3^n)}{\sqrt n + \sqrt{\log n}}$

> [!tip]- Indizio
> $\log(2 + 3^n)$ si comporta come $n\log 3$. Al denominatore comanda $\sqrt n$. Basta una stima dal basso.

> [!example]- Soluzione
> Per $n \geq 1$: $3^n < 2 + 3^n$, quindi $\log(2 + 3^n) > n\log 3$; e $(\log n)^3 \geq 0$. Il numeratore è $> n\log 3$.
>
> Al denominatore $\log n \leq n$, quindi $\sqrt{\log n} \leq \sqrt n$ e il denominatore è $\leq 2\sqrt n$.
> $$
> \frac{(\log n)^3 + \log(2 + 3^n)}{\sqrt n + \sqrt{\log n}} > \frac{n\log 3}{2\sqrt n} = \frac{\log 3}{2}\sqrt n \to +\infty
> $$
> Un carabiniere basta: il limite è $+\infty$.

### Funzioni limitate e non esistenza

#### 3.29) $\displaystyle\lim \frac{\arctan(n^2) + \sin n\cos n}{e^{n^2 - 2n}}$

> [!tip]- Indizio
> Il numeratore è limitato. Il denominatore?

> [!example]- Soluzione
> $|\arctan(n^2) + \sin n\cos n| \leq \frac\pi2 + 1$: limitato. $\ e^{n^2 - 2n}$: l'esponente $n^2 - 2n = n(n - 2) \to +\infty$ e $e > 1$, quindi $e^{n^2 - 2n} \to +\infty$ e il suo reciproco tende a $0$. Limitata per infinitesima: il limite è $0$.

#### 3.33) $\displaystyle\lim \frac{n\sin n + \sin(n^2) + (-1)^n n^2}{n^2 + 1}$

> [!tip]- Indizio
> Dividi per $n^2$. Due pezzi vanno a $0$, il terzo è $(-1)^n$. Poi pari e dispari.

> [!example]- Soluzione
> Dividendo sopra e sotto per $n^2$:
> $$
> a_n = \frac{\frac{\sin n}{n} + \frac{\sin(n^2)}{n^2} + (-1)^n}{1 + \frac{1}{n^2}}
> $$
> I primi due addendi tendono a $0$ (limitata per infinitesima).
> - Sui pari, $n = 2k$: $a_{2k} = \frac{\frac{\sin 2k}{2k} + \frac{\sin(4k^2)}{4k^2} + 1}{1 + \frac{1}{4k^2}} \to \frac{0 + 0 + 1}{1} = 1$.
> - Sui dispari, $n = 2k + 1$: allo stesso modo $a_{2k+1} \to \frac{0 + 0 - 1}{1} = -1$.
>
> Due sottosuccessioni con limiti diversi: per il corollario della slide 26 il limite **non esiste**.

## Riepilogo

| es. | limite | tecnica |
|---|---|---|
| 3.1 | $0$ | gerarchia |
| 3.2 | $3$ | raccogli, potenza |
| 3.3 | $\log 2$ | logaritmo stretto, carabinieri |
| 3.4 | $e^2$ | Nepero |
| 3.5 | $0$ | Nepero, poi $[a^{+\infty}]$ con $a < 1$ |
| 3.6 | $0$ | $[0^{+\infty}]$ |
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
| 3.20 | $1$ | raccogli $n^4$, logaritmo stretto |
| 3.22 | $\frac23$ | raccogli dentro le radici |
| 3.23 | $0$ | Nepero per $\frac1n$ |
| 3.24 | $+\infty$ | Nepero per $n^{n-1}$ |
| 3.25 | $+\infty$ | base $\geq 2$ |
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

- **$[1^\infty] = 1$.** Il 3.12 e il 3.14 hanno la stessa forma e limiti $e^2$ e $1$.
- **Usare Nepero senza controllare che $|a_n| \to +\infty$.** E con $a_n$ negativo (3.34, 3.35, 3.37) va bene, purché il modulo esploda.
- **Dimenticare che con base fra $0$ e $1$ l'esponente $+\infty$ dà $0$** (3.5, 3.36), non $+\infty$.
- **Spezzare $\log(a + b)$ come $\log a + \log b$.** Non è una proprietà del logaritmo: si stringe l'argomento fra due potenze (3.3, 3.11, 3.16).
- **Fermarsi a "comanda $n^4$"** senza scrivere il raccoglimento e i limiti dei pezzi che restano.
- **Dire che il 3.33 vale $\pm 1$.** Il limite non esiste: lo dimostrano le due sottosuccessioni.

## Domande

- Come si studia la monotonia di una successione? Perché $n^3 + 3n^2 - 9n + 2$ non è monotona su $\mathbb{N}$?

- Come si calcola un limite $[1^\infty]$ con Nepero generalizzato? Da cosa dipende se il risultato è $e^c$, $+\infty$ o $0$?

- Come si stima $\log(2^n + 1)$ senza la continuità del logaritmo?

- Perché $\sqrt[n]{2^n + 3^n} \to 3$?

- Come si dimostra che $\sqrt[n]{n!} \to +\infty$?

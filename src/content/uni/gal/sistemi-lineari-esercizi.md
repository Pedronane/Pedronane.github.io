---
title: Sistemi lineari (esercizi)
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-21
lezioni: []
ordine: 4
---

Esercizi tipo esame di [Sistemi lineari](/uni/gal/sistemi-lineari/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Gli strumenti sono quelli della L3: definizioni, sostituzione, ragionamento per assurdo, geometria di rette e piani. Prima di aprire la soluzione prova a dire che tipo di esercizio è e con che metodo lo fai.

**Esercizio 1.** In $\mathbb{R}^4$ siano $\vec{a} = (1, -2, 0, 3)$, $\vec{b} = (2, 1, -1, 0)$, $\vec{c} = (0, 4, 2, -5)$.

- a) calcola $2\vec{a} - 3\vec{b} + \vec{c}$;
- b) trova $\vec{v} \in \mathbb{R}^3$ tale che $2\vec{v} + (1, -1, 0) = (3, 1, 4)$.

> [!example]- Soluzione
> *Tipo*: conti in $\mathbb{R}^n$. *Come lo riconosco*: ennuple e operazioni, nessun sistema dichiarato. *Metodo*: componente per componente, un'operazione alla volta.
>
> **a)**
> 1. $2\vec{a} = (2, -4, 0, 6)$;
> 2. $3\vec{b} = (6, 3, -3, 0)$;
> 3. $2\vec{a} - 3\vec{b} = (2 - 6,\ -4 - 3,\ 0 - (-3),\ 6 - 0) = (-4, -7, 3, 6)$;
> 4. $+\, \vec{c}$: $(-4 + 0,\ -7 + 4,\ 3 + 2,\ 6 - 5) = (-4, -3, 5, 1)$.
>
> *Verifica* su una componente sola, la terza, con la formula intera: $2 \cdot 0 - 3 \cdot (-1) + 2 = 5$. Torna.
>
> **b)** Scrivo $\vec{v} = (v_1, v_2, v_3)$. L'uguaglianza fra ennuple vale componente per componente, quindi è un sistema di tre equazioni:
> $$
> \begin{cases} 2v_1 + 1 = 3 \\ 2v_2 - 1 = 1 \\ 2v_3 + 0 = 4 \end{cases}
> $$
> 1. prima: $2v_1 = 2$, $v_1 = 1$;
> 2. seconda: $2v_2 = 2$, $v_2 = 1$;
> 3. terza: $2v_3 = 4$, $v_3 = 2$.
>
> $\vec{v} = (1, 1, 2)$. *Verifica*: $2(1, 1, 2) + (1, -1, 0) = (2 + 1,\ 2 - 1,\ 4 + 0) = (3, 1, 4)$.

**Esercizio 2.** Dato il sistema
$$
\begin{cases} 2x_1 - x_2 + x_3 = 1 \\ x_1 + 3x_3 = 0 \end{cases}
$$

- a) scrivi $A$, $\vec{b}$, $[A \mid \vec{b}]$ con il loro ordine;
- b) stabilisci se $(0, -1, 0)$ e $(1, 1, 0)$ sono soluzioni. Il sistema è compatibile?

> [!example]- Soluzione
> *Tipo*: notazione e verifica. *Metodo*: le matrici con le regole del Metodo; la verifica sostituendo in **ogni** equazione.
>
> **a)** Due equazioni, tre incognite: $m = 2$, $n = 3$. Nella seconda equazione $x_2$ manca, quindi coefficiente $0$ (è la figura del sistema e della matrice).
> $$
> A = \begin{bmatrix} 2 & -1 & 1 \\ 1 & 0 & 3 \end{bmatrix} \ (2 \times 3) \qquad \vec{b} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \ (2 \times 1) \qquad [A \mid \vec{b}] = \left[\begin{array}{ccc|c} 2 & -1 & 1 & 1 \\ 1 & 0 & 3 & 0 \end{array}\right] \ (2 \times 4)
> $$
>
> **b)** $(0, -1, 0)$: prima equazione $2 \cdot 0 - (-1) + 0 = 1$, vera; seconda $0 + 3 \cdot 0 = 0$, vera. **È soluzione.**
> $(1, 1, 0)$: prima $2 - 1 + 0 = 1$, vera; seconda $1 + 0 = 1 \neq 0$, falsa. **Non è soluzione**: soddisfa una sola equazione.
>
> Il sistema ha almeno la soluzione $(0, -1, 0)$, quindi è **compatibile**.
>
> *Controllo di buon senso*: due piani non paralleli (le normali $(2, -1, 1)$ e $(1, 0, 3)$ non sono proporzionali) si tagliano in una retta, quindi le soluzioni devono essere infinite. $(0, -1, 0)$ è uno dei punti di quella retta.

**Esercizio 3.** Nelle incognite $(x, y, z)$ considera
$$
\begin{cases} 3x - z = 2y + 1 \\ y = 4 - x \\ z + 2 = 0 \end{cases}
$$

- a) porta il sistema in forma standard e scrivi $[A \mid \vec{b}]$;
- b) stabilisci se $(1, 3, -2)$ è soluzione;
- c) risolvi il sistema per sostituzione.

> [!tip]- Indizio
> Nella prima equazione c'è un'incognita anche a destra: va portata a sinistra col segno cambiato.

> [!example]- Soluzione
> *Tipo*: sistema scritto in disordine. *Come lo riconosco*: incognite a destra dell'uguale, numeri a sinistra. *Metodo*: forma standard riga per riga, poi matrice; per risolvere, la terza equazione dà subito $z$.
>
> **a)**
> 1. $3x - z = 2y + 1$: sottraggo $2y$ ai due membri, $3x - 2y - z = 1$;
> 2. $y = 4 - x$: sommo $x$ ai due membri, $x + y = 4$ (manca $z$: coefficiente $0$);
> 3. $z + 2 = 0$: sottraggo $2$, $z = -2$ (mancano $x$ e $y$).
> $$
> [A \mid \vec{b}] = \left[\begin{array}{ccc|c} 3 & -2 & -1 & 1 \\ 1 & 1 & 0 & 4 \\ 0 & 0 & 1 & -2 \end{array}\right] \quad (3 \times 4)
> $$
>
> **b)** $(1, 3, -2)$: prima $3 \cdot 1 - 2 \cdot 3 - (-2) = 3 - 6 + 2 = -1 \neq 1$, falsa. Non è soluzione (la seconda, $1 + 3 = 4$, e la terza, $z = -2$, sono vere: due su tre non bastano).
>
> **c)**
> 1. dalla terza: $z = -2$;
> 2. dalla seconda: $y = 4 - x$;
> 3. nella prima: $3x - 2(4 - x) - (-2) = 1$;
> 4. sviluppo: $3x - 8 + 2x + 2 = 1$, cioè $5x - 6 = 1$;
> 5. $5x = 7$, $x = \frac{7}{5}$;
> 6. $y = 4 - \frac{7}{5} = \frac{13}{5}$.
>
> Soluzione unica $\left(\frac{7}{5}, \frac{13}{5}, -2\right)$.
>
> *Verifica* nel sistema **di partenza**: prima, $3 \cdot \frac{7}{5} - (-2) = \frac{21}{5} + \frac{10}{5} = \frac{31}{5}$ e $2 \cdot \frac{13}{5} + 1 = \frac{26}{5} + \frac{5}{5} = \frac{31}{5}$, uguali; seconda, $4 - \frac{7}{5} = \frac{13}{5}$, vera; terza, $-2 + 2 = 0$, vera.

**Esercizio 4.** Scrivi il sistema che ha matrice completa
$$
\left[\begin{array}{ccc|c} 1 & 0 & -1 & 2 \\ 0 & 1 & 1 & -1 \\ 1 & 1 & 0 & 3 \end{array}\right]
$$
nelle incognite $x_1, x_2, x_3$, e mostra che è incompatibile.

> [!tip]- Indizio
> Somma le prime due equazioni e confronta con la terza.

> [!example]- Soluzione
> *Tipo*: dalla matrice al sistema, poi incompatibilità. *Come lo riconosco*: "mostra che è incompatibile" chiede un ragionamento per assurdo, non un tentativo fallito. *Metodo*: cercare una combinazione delle equazioni che dia lo stesso primo membro di un'altra.
>
> Ogni riga è un'equazione, l'ultima colonna il termine noto:
> $$
> \begin{cases} x_1 - x_3 = 2 \\ x_2 + x_3 = -1 \\ x_1 + x_2 = 3 \end{cases}
> $$
> 1. Se $(t_1, t_2, t_3)$ fosse una soluzione, varrebbero $t_1 - t_3 = 2$ e $t_2 + t_3 = -1$.
> 2. Sommo membro a membro: $(t_1 - t_3) + (t_2 + t_3) = 2 + (-1)$, cioè $t_1 + t_2 = 1$ ($-t_3$ e $+t_3$ si cancellano).
> 3. La terza chiede $t_1 + t_2 = 3$.
> 4. Dai passi 2 e 3: $1 = 3$, assurdo. Nessuna terna soddisfa tutte e tre: **incompatibile**.
>
> In geometria: tre piani senza un punto comune a tutti e tre. Nessuna coppia è parallela (le normali $(1, 0, -1)$, $(0, 1, 1)$, $(1, 1, 0)$ non sono a due a due proporzionali), quindi è il prisma della figura. La normale del terzo è la somma delle altre due, $(1, 0, -1) + (0, 1, 1) = (1, 1, 0)$: è quello che fa funzionare la somma del passo 2.
>
> *Controllo*: cambiando il termine noto della terza in $1$ il ragionamento non trova più contraddizioni, e infatti $(2, -1, 0)$ soddisfa $2 - 0 = 2$, $-1 + 0 = -1$, $2 - 1 = 1$.

**Esercizio 5.** Trova il punto comune ai piani $x + y + z = 1$, $x - y = 0$, $z = 2$: scrivi prima la matrice completa del sistema, poi risolvilo per sostituzione.

> [!example]- Soluzione
> *Tipo*: intersezione di tre piani. *Metodo*: un'equazione dà subito un'incognita ($z = 2$), un'altra lega due incognite ($y = x$): sostituzione.
> $$
> \begin{cases} x + y + z = 1 \\ x - y = 0 \\ z = 2 \end{cases} \qquad [A \mid \vec{b}] = \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & -1 & 0 & 0 \\ 0 & 0 & 1 & 2 \end{array}\right]
> $$
> 1. dalla terza: $z = 2$;
> 2. dalla seconda: $y = x$;
> 3. nella prima: $x + x + 2 = 1$, cioè $2x = -1$, $x = -\frac{1}{2}$;
> 4. $y = x = -\frac{1}{2}$.
> $$
> \left(-\frac{1}{2}, -\frac{1}{2}, 2\right)
> $$
> *Verifica*: $-\frac{1}{2} - \frac{1}{2} + 2 = 1$, $-\frac{1}{2} + \frac{1}{2} = 0$, $z = 2$. Soluzione unica: i tre piani si incontrano in un punto, il primo pannello della figura.

**Esercizio 6** (sul modello delle domande 2.8 e 2.9 del foglio 2).

- a) Dai un esempio di sistema incompatibile di due equazioni in tre incognite, e spiega perché lo è.
- b) Dai un esempio di sistema compatibile di tre equazioni in due incognite, con la verifica.
- c) Modifica un solo numero del sistema in b) per renderlo incompatibile.

> [!example]- Soluzione
> *Tipo*: costruire esempi. *Come lo riconosco*: "dai un esempio" non chiede di risolvere, chiede un sistema e una giustificazione. *Metodo*: partire dalla geometria. Per a) due piani paralleli distinti; per b) tre rette per uno stesso punto. Il punto delle due domande: il confronto fra $m$ e $n$ **non** decide la compatibilità.
>
> **a)**
> $$
> \begin{cases} x + 2y - z = 1 \\ 2x + 4y - 2z = 5 \end{cases}
> $$
> Se $(t_1, t_2, t_3)$ fosse soluzione, moltiplicando la prima per $2$ si avrebbe $2t_1 + 4t_2 - 2t_3 = 2$, e la seconda chiede che la stessa quantità valga $5$: $2 = 5$, assurdo. Due piani con normali proporzionali, $(2, 4, -2) = 2(1, 2, -1)$, e termini noti non nello stesso rapporto: paralleli distinti. Meno equazioni che incognite, eppure incompatibile.
>
> **b)** Scelgo la soluzione prima del sistema: $(2, 1)$. Tre rette per $(2, 1)$:
> $$
> \begin{cases} x + y = 3 \\ x - y = 1 \\ 3x + y = 7 \end{cases}
> $$
> *Verifica*: $2 + 1 = 3$, $2 - 1 = 1$, $6 + 1 = 7$. **Compatibile**. Più equazioni che incognite, eppure compatibile.
>
> È anche l'unica soluzione: dalle prime due, sommando, $2x = 4$, $x = 2$, e $y = 3 - x = 1$. Le prime due fissano già il punto, la terza passa di lì.
>
> **c)** Cambio il $7$ in $8$. Le prime due equazioni hanno come unica soluzione $(2, 1)$ (appena visto), e nella terza $3 \cdot 2 + 1 = 7 \neq 8$: incompatibile. La terza retta è stata spostata parallelamente e non passa più per il punto comune alle altre due.
>
> Le versioni con Gauss-Jordan e Rouché-Capelli sono in [Foglio 2 svolto](/uni/gal/foglio-2-svolto/).

**Esercizio 7.** Considera il sistema omogeneo
$$
\begin{cases} x + 2y - z = 0 \\ 2x - y + 3z = 0 \end{cases}
$$

- a) verifica che $(-1, 1, 1)$ è una soluzione non banale;
- b) mostra che $(-t, t, t)$ è soluzione per ogni $t \in \mathbb{R}$;
- c) mostra che ogni soluzione è di questa forma.

> [!example]- Soluzione
> *Tipo*: sistema omogeneo, soluzioni oltre la banale. *Come lo riconosco*: termini noti tutti nulli. *Metodo*: per a) e b) sostituzione; per c) risolvere per sostituzione esprimendo tutto in funzione di un'incognita.
>
> **a)** Prima: $-1 + 2 \cdot 1 - 1 = 0$. Seconda: $2 \cdot (-1) - 1 + 3 \cdot 1 = -2 - 1 + 3 = 0$. Soluzione, ed è diversa da $(0, 0, 0)$.
>
> **b)** Prima: $-t + 2t - t = (-1 + 2 - 1)t = 0 \cdot t = 0$. Seconda: $-2t - t + 3t = (-2 - 1 + 3)t = 0$. Vere per ogni $t$. In parole: il primo membro di un'equazione lineare, calcolato su $t\vec{v}$, è $t$ volte quello calcolato su $\vec{v}$; se quello vale $0$, anche questo. Funziona perché i termini noti sono $0$.
>
> **c)**
> 1. dalla prima: $x = z - 2y$;
> 2. nella seconda: $2(z - 2y) - y + 3z = 0$;
> 3. sviluppo: $2z - 4y - y + 3z = 5z - 5y = 0$, quindi $y = z$;
> 4. torno al passo 1: $x = z - 2z = -z$;
> 5. pongo $z = t$: $(x, y, z) = (-t, t, t)$.
>
> Tutte e sole le soluzioni sono $t(-1, 1, 1)$, $t \in \mathbb{R}$: la retta per l'origine con direzione $(-1, 1, 1)$, intersezione di due piani per l'origine. *Controllo geometrico*: la direzione della retta comune deve essere ortogonale a entrambe le normali, $(-1, 1, 1) \cdot (1, 2, -1) = -1 + 2 - 1 = 0$ e $(-1, 1, 1) \cdot (2, -1, 3) = -2 - 1 + 3 = 0$.

**Esercizio 8** (livello 30). Trova un'equazione cartesiana del piano per $A = (1, 1, 0)$, $B = (0, 1, 1)$, $C = (1, 0, 1)$ impostando un sistema lineare nei coefficienti $a, b, c, d$ di $ax + by + cz = d$. Che ruolo ha la soluzione banale?

> [!tip]- Indizio
> "Il piano passa per $A$" vuol dire che le coordinate di $A$ soddisfano l'equazione: è un'equazione lineare in $a, b, c, d$.

> [!example]- Soluzione
> *Tipo*: un problema di geometria in cui le **incognite sono i coefficienti**. *Come lo riconosco*: si cerca un'equazione, non un punto. *Metodo*: una condizione lineare per ogni punto, poi sostituzione.
>
> Le condizioni di passaggio, sostituendo le coordinate in $ax + by + cz = d$:
> 1. $A = (1, 1, 0)$: $a + b = d$;
> 2. $B = (0, 1, 1)$: $b + c = d$;
> 3. $C = (1, 0, 1)$: $a + c = d$.
>
> Portando $d$ a sinistra è un sistema **omogeneo** di $3$ equazioni in $4$ incognite $(a, b, c, d)$:
> $$
> \left[\begin{array}{cccc|c} 1 & 1 & 0 & -1 & 0 \\ 0 & 1 & 1 & -1 & 0 \\ 1 & 0 & 1 & -1 & 0 \end{array}\right]
> $$
> Risolvo:
> 1. sottraggo la seconda dalla prima: $a - c = 0$, quindi $a = c$;
> 2. sottraggo la terza dalla prima: $b - c = 0$, quindi $b = c$;
> 3. nella terza: $c + c = d$, quindi $d = 2c$;
> 4. pongo $c = s$: $(a, b, c, d) = (s, s, s, 2s)$, $s \in \mathbb{R}$.
>
> **Il ruolo della banale.** Con $s = 0$ viene $0x + 0y + 0z = 0$, vera per ogni punto: non è un piano. È la soluzione banale, che c'è sempre perché il sistema è omogeneo, e qui non serve (come $\vec{n} = \vec{0}$ per la normale). Ogni $s \neq 0$ dà lo stesso piano; con $s = 1$:
> $$
> x + y + z = 2
> $$
> *Verifica*: $A$: $1 + 1 + 0 = 2$; $B$: $0 + 1 + 1 = 2$; $C$: $1 + 0 + 1 = 2$. Con il metodo della geometria ([Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/)) si troverebbe lo stesso piano: la normale $(1, 1, 1)$ è ortogonale a $\overrightarrow{AB} = (-1, 0, 1)$ e $\overrightarrow{AC} = (0, -1, 1)$, perché $-1 + 0 + 1 = 0$ e $0 - 1 + 1 = 0$.

**Esercizio 9** (livello 30). Al variare di $k \in \mathbb{R}$ studia il sistema
$$
\begin{cases} x + ky = 1 \\ kx + y = 1 \end{cases}
$$
dicendo per quali $k$ è compatibile, e trovando le soluzioni.

> [!tip]- Indizio
> Ricava $x$ dalla prima e sostituisci. Prima di dividere per un'espressione con $k$, chiediti quando vale $0$.

> [!example]- Soluzione
> *Tipo*: sistema con parametro. *Come lo riconosco*: un coefficiente dipende da $k$. *Metodo*: sostituzione, fermandosi **prima** di ogni divisione per un'espressione in $k$ e studiando a parte i valori che la annullano. È la stessa regola della discussione con Gauss-Jordan ([Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/)).
>
> 1. dalla prima: $x = 1 - ky$;
> 2. nella seconda: $k(1 - ky) + y = 1$;
> 3. sviluppo: $k - k^2 y + y = 1$;
> 4. raccolgo $y$ e porto $k$ a destra: $(1 - k^2)\, y = 1 - k$;
> 5. scompongo: $(1 - k)(1 + k)\, y = 1 - k$.
>
> Per dividere serve $1 - k^2 \neq 0$, cioè $k \neq 1$ e $k \neq -1$. Tre casi.
>
> **Caso $k \neq \pm 1$.** Divido per $(1 - k)(1 + k) \neq 0$: $y = \frac{1 - k}{(1 - k)(1 + k)} = \frac{1}{1 + k}$. Poi $x = 1 - \frac{k}{1 + k} = \frac{1 + k - k}{1 + k} = \frac{1}{1 + k}$. Soluzione unica $\left(\frac{1}{1 + k}, \frac{1}{1 + k}\right)$.
>
> **Caso $k = 1$.** Il passo 5 diventa $0 \cdot y = 0$, vera per ogni $y$. Il sistema è $x + y = 1$ scritto due volte: compatibile, infinite soluzioni $(1 - t, t)$, $t \in \mathbb{R}$.
>
> **Caso $k = -1$.** Il passo 5 diventa $0 \cdot y = 2$, mai vera: incompatibile. Il sistema è $x - y = 1$, $-x + y = 1$; sommando, $0 = 2$.
>
> Riassunto: compatibile per $k \neq -1$ (soluzione unica se $k \neq \pm 1$, infinite se $k = 1$), incompatibile per $k = -1$. Sono i tre pannelli della figura delle rette: incidenti, coincidenti, parallele.
>
> *Verifica* con $k = 2$: la formula dà $\left(\frac{1}{3}, \frac{1}{3}\right)$, e $\frac{1}{3} + \frac{2}{3} = 1$, $\frac{2}{3} + \frac{1}{3} = 1$. L'errore tipico è dividere subito per $1 - k^2$ e dire "soluzione unica per ogni $k$": con $k = -1$ la formula darebbe $\frac{1}{0}$.

**Esercizio 10** (livello 30). Siano $\pi_1 : x + y + z = 1$, $\pi_2 : x - y + z = 3$, $\pi_3 : 2x + 2z = k$. Per quali $k \in \mathbb{R}$ i tre piani hanno almeno un punto in comune? In quel caso, quali sono i punti comuni?

> [!tip]- Indizio
> Somma le equazioni di $\pi_1$ e $\pi_2$ e confronta con $\pi_3$.

> [!example]- Soluzione
> *Tipo*: posizione di tre piani con un parametro, cioè compatibilità di un sistema $3 \times 3$ con parametro. *Come lo riconosco*: "punto comune" vuol dire soluzione del sistema delle tre equazioni. *Metodo*: le prime due non contengono $k$, si usano per vincolare $x + z$; poi si confronta con la terza.
>
> 1. Sottraggo $\pi_2$ da $\pi_1$: $(x + y + z) - (x - y + z) = 1 - 3$, cioè $2y = -2$, $y = -1$.
> 2. Sommo $\pi_1$ e $\pi_2$: $2x + 2z = 4$.
> 3. Ogni punto comune a $\pi_1$ e $\pi_2$ ha quindi $2x + 2z = 4$; $\pi_3$ chiede $2x + 2z = k$.
>
> **Caso $k \neq 4$.** Un punto comune ai tre darebbe $4 = k$: assurdo. **Nessun punto comune**: il sistema è incompatibile. Nessuna coppia di piani è parallela (le normali $(1, 1, 1)$, $(1, -1, 1)$, $(2, 0, 2)$ non sono a due a due proporzionali): è il prisma della figura, con $(2, 0, 2) = (1, 1, 1) + (1, -1, 1)$.
>
> **Caso $k = 4$.** $\pi_3$ coincide con l'equazione del passo 2, che chi sta su $\pi_1$ e $\pi_2$ soddisfa già. Restano $y = -1$ e $x + z = 2$; pongo $z = t$:
> $$
> (x, y, z) = (2 - t,\ -1,\ t), \quad t \in \mathbb{R}
> $$
> Infiniti punti: la retta $\pi_1 \cap \pi_2$, contenuta anche in $\pi_3$. I tre piani sono nello stesso fascio, il pannello centrale della figura.
>
> *Verifica* con $k = 4$ e $t = 0$, punto $(2, -1, 0)$: $2 - 1 + 0 = 1$, $2 + 1 + 0 = 3$, $4 + 0 = 4$. Con $t = 1$, punto $(1, -1, 1)$: $1 - 1 + 1 = 1$, $1 + 1 + 1 = 3$, $2 + 2 = 4$.

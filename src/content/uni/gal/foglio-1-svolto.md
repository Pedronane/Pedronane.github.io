---
title: Foglio 1 del tutorato svolto
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: false
tipo: esercizi
stato: completa
data: 2026-10-06
lezioni: []
ordine: 999
---

Il <span class="src">foglio 1</span> del tutorato svolto per intero: otto domande di teoria (p. 1) e nove esercizi (<span class="src">1.9</span> a p. 1-2, <span class="src">1.10-1.13</span> a p. 2, <span class="src">1.14-1.17</span> a p. 3). Argomento di [Geometria e Algebra Lineare](/uni/gal/), tutto dentro il capitolo di geometria nello spazio. La teoria sta in [Vettori geometrici](/uni/gal/vettori-geometrici/), [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/), [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/), [Distanze nello spazio](/uni/gal/distanze-nello-spazio/); le formule in [Formulario rette e piani](/uni/gal/formulario-rette-e-piani/).

Come usarla: leggi il testo e prova da solo su carta. Se ti blocchi apri l'**Indizio**, che dice solo quale attrezzo usare. La **Soluzione** aprila alla fine, per confrontare i passaggi e non solo il risultato.

Il foglio non chiede niente oltre il capitolo 1: prodotto vettoriale, determinanti e matrici non servono. Ogni direzione ortogonale si trova risolvendo un sistema di prodotti scalari nulli, ed è così che è fatto qui.

## Come si affronta il foglio

Quasi tutto si riduce a tradurre una frase geometrica in un prodotto scalare o in un sistema.

```
oggetto              cosa lo descrive          che conto ci fai
------------------------------------------------------------------
punto                tre coordinate            sostituisci in un'equazione
retta                punto + direzione v       parametriche, punto generico
piano                punto + normale n         ax+by+cz+d=0
------------------------------------------------------------------
"perpendicolare a"   ->  prodotto scalare = 0
"parallelo a"        ->  proporzionale
"passa per"          ->  sostituisci il punto e ricava il termine noto
"contiene la retta"  ->  fascio di piani
"distanza"           ->  trova il piede della perpendicolare
```

Attenzione al ribaltamento fra retta e piano: retta parallela al piano vuol dire $\vec{n} \cdot \vec{v} = 0$, retta perpendicolare al piano vuol dire $\vec{v}$ proporzionale a $\vec{n}$.

### Le tre mosse

**Punto generico.** Se un oggetto ha una retta dentro, scrivi il punto generico $Q(t)$ dalle parametriche e imponi la condizione richiesta. Il parametro esce da solo.

**Fascio.** Se devi trovare un piano che contiene una retta data per cartesiane, non cercare la normale da zero: scrivi il fascio $\lambda(\dots) + \mu(\dots) = 0$ e imponi l'unica condizione che resta.

**Normale incognita.** Se cerchi una direzione ortogonale ad altre due, chiamala $(a, b, c)$ e scrivi i due prodotti scalari nulli. È un sistema omogeneo di due equazioni in tre incognite: ha infinite soluzioni, tutte proporzionali fra loro, e te ne basta una. Poni una componente uguale a $1$ e ricava le altre. Se quella scelta porta a un assurdo, la componente era nulla: riprova ponendo a $1$ un'altra.

### Situazioni ricorrenti

- **Piano che contiene una retta e un punto.** Retta in cartesiane: fascio, sostituisci il punto, ricava il rapporto fra $\lambda$ e $\mu$. Se esce $\lambda = 0$, il piano cercato è il secondo piano di partenza (succede in 1.15).
- **Retta ortogonale a due rette.** Direzione incognita con due prodotti scalari nulli, poi il punto lo dà il testo.
- **Piano parallelo a due direzioni.** Stessa cosa sulla normale. "Parallelo all'asse $z$" vuol dire che una delle due direzioni è $(0, 0, 1)$.
- **Piani a distanza data da un punto.** Normale nota, unica incognita $d$. Il valore assoluto dà due piani, uno per parte.
- **Distanza fra due rette.** Prima la posizione reciproca. Incidenti significa distanza zero, e partire con la perpendicolare comune è lavoro buttato.

### Controlli veloci

- Punto trovato come intersezione: sostituiscilo in **tutte** le equazioni di partenza.
- Piano che deve contenere una retta: prendi due punti della retta e sostituiscili.
- Direzione ortogonale a due vettori: rifai i due prodotti scalari, devono dare zero.
- Distanza: un numero positivo, e zero solo se gli oggetti si toccano.
- Piede $H$ della perpendicolare: deve stare sulla retta e $\overrightarrow{PH}$ deve essere ortogonale alla direzione.

Ordine consigliato per la parte pratica: 1.10, 1.9, 1.12, 1.11, 1.15, 1.13, 1.16, 1.17, 1.14. I primi sono applicazione diretta di una formula, gli ultimi combinano tre passaggi.

## Domande di teoria

Le risposte usano le definizioni della prof. All'orale o allo scritto non serve ripeterle parola per parola, ma i pezzi che ci sono qui devono esserci tutti.

**Domanda 1.1.** **Cos'è un vettore geometrico? Come si definisce la somma di vettori geometrici e quali sono le sue proprietà?**

> [!example]- Soluzione
> **Segmento orientato.** Dati due punti $A$ e $B$, il segmento orientato $\overrightarrow{AB}$ è il segmento con estremo iniziale $A$ ed estremo finale $B$, cioè una freccia da $A$ a $B$.
>
> **Equivalenza.** $\overrightarrow{AB}$ e $\overrightarrow{CD}$ sono equivalenti se hanno stessa **direzione** (stanno su rette parallele), stesso **verso** (puntano dalla stessa parte) e stesso **modulo** (stessa lunghezza). Detto altrimenti, una traslazione porta uno sull'altro.
>
> **Vettore geometrico.** Una **classe di equivalenza** di segmenti orientati: l'insieme di tutti i segmenti orientati equivalenti a uno dato. Ogni segmento della classe è un **rappresentante** e si scrive $\vec{v} = \overrightarrow{AB}$. L'idea è una freccia con direzione, verso e lunghezza fissati ma libera di partire da qualunque punto. L'insieme dei vettori geometrici dello spazio si chiama $V^3$. Il **vettore nullo** $\vec{0}$ è la classe dei segmenti $\overrightarrow{AA}$: modulo $0$, direzione e verso indeterminati.
>
> **Somma.** Dati $\vec{v}$ e $\vec{w}$, scelgo i rappresentanti in modo che la fine del primo coincida con l'inizio del secondo, $\vec{v} = \overrightarrow{AB}$ e $\vec{w} = \overrightarrow{BC}$. Allora
> $$
> \vec{v} + \vec{w} := \overrightarrow{AC}
> $$
> È la regola **punta-coda**. La regola del **parallelogramma** dà lo stesso vettore: faccio partire $\vec{v}$ e $\vec{w}$ dallo stesso punto, completo il parallelogramma e prendo la diagonale che parte da quel punto.
>
> **Proprietà.** Per ogni $\vec{v}, \vec{w}, \vec{u} \in V^3$:
> 1. commutativa: $\vec{v} + \vec{w} = \vec{w} + \vec{v}$ (sul parallelogramma i due percorsi portano alla stessa punta);
> 2. associativa: $(\vec{v} + \vec{w}) + \vec{u} = \vec{v} + (\vec{w} + \vec{u})$, per questo si scrive $\vec{v} + \vec{w} + \vec{u}$ senza parentesi;
> 3. elemento neutro: $\vec{0}$ è l'unico vettore con $\vec{v} + \vec{0} = \vec{v}$ per ogni $\vec{v}$;
> 4. opposto: per ogni $\vec{v}$ esiste $-\vec{v}$, stessa direzione e modulo ma verso opposto, con $\vec{v} + (-\vec{v}) = \vec{0}$. Se $\vec{v} = \overrightarrow{AB}$, allora $-\vec{v} = \overrightarrow{BA}$.
>
> In coordinate la somma si fa componente per componente, $\vec{v} + \vec{w} = (v_1 + w_1,\ v_2 + w_2,\ v_3 + w_3)$, e le quattro proprietà diventano proprietà della somma di numeri reali.

**Domanda 1.2.** **Come si definisce il prodotto di un vettore geometrico $\vec{v}$ e di uno scalare $\lambda \in \mathbb{R}$?**

> [!example]- Soluzione
> **Caso generale**, $\vec{v} \neq \vec{0}$ e $\lambda \neq 0$. Il vettore $\lambda\vec{v}$ ha:
> - la **stessa direzione** di $\vec{v}$;
> - **modulo** $\lvert\lambda\rvert\,\lvert\vec{v}\rvert$;
> - **verso** concorde a $\vec{v}$ se $\lambda > 0$, discorde se $\lambda < 0$.
>
> **Casi degeneri.** Se $\vec{v} = \vec{0}$ oppure $\lambda = 0$, si pone $\lambda\vec{v} = \vec{0}$.
>
> Nel modulo c'è $\lvert\lambda\rvert$ perché una lunghezza non è mai negativa: il segno di $\lambda$ finisce nel verso. Se $\lvert\lambda\rvert > 1$ il vettore si allunga, se $\lvert\lambda\rvert < 1$ si accorcia. Esempio: $2\vec{v}$ e $-2\vec{v}$ hanno lo stesso modulo $2\lvert\vec{v}\rvert$ e versi opposti.
>
> **Proprietà**, per ogni $\vec{v}, \vec{w}$ e $\lambda, \mu \in \mathbb{R}$:
> 1. $\lambda(\mu\vec{v}) = (\lambda\mu)\vec{v}$
> 2. $1\vec{v} = \vec{v}$
> 3. $(\lambda + \mu)\vec{v} = \lambda\vec{v} + \mu\vec{v}$
> 4. $\lambda(\vec{v} + \vec{w}) = \lambda\vec{v} + \lambda\vec{w}$
>
> In coordinate: $\lambda\vec{v} = (\lambda v_1,\ \lambda v_2,\ \lambda v_3)$. Da qui viene il test di parallelismo usato in tutti gli esercizi: due vettori non nulli hanno la stessa direzione se e solo se uno è multiplo dell'altro.

**Domanda 1.3.** **Come si definisce il prodotto scalare di due vettori geometrici? Come può essere descritto usando le coordinate?**

> [!example]- Soluzione
> **Definizione geometrica.** Dati $\vec{v}$ e $\vec{w}$, si prendono due rappresentanti con lo **stesso estremo iniziale**, $\vec{v} = \overrightarrow{AB}$ e $\vec{w} = \overrightarrow{AC}$, e si chiama $\theta$ l'angolo fra loro, con $0 \le \theta \le \pi$. Allora
> $$
> \vec{v} \cdot \vec{w} := \lvert\vec{v}\rvert\,\lvert\vec{w}\rvert\cos\theta
> $$
> Se uno dei due è $\vec{0}$ l'angolo non è definito e si pone $\vec{v} \cdot \vec{w} = 0$. Il risultato è un **numero**, e il segno dice com'è l'angolo: positivo se acuto, zero se retto, negativo se ottuso. Per questo, con $\vec{v}, \vec{w} \neq \vec{0}$, vale $\vec{v} \perp \vec{w} \iff \vec{v} \cdot \vec{w} = 0$.
>
> **Proprietà.** Commutativa, $(\lambda\vec{v}) \cdot \vec{w} = \lambda(\vec{v} \cdot \vec{w})$, distributiva $\vec{v} \cdot (\vec{u} + \vec{w}) = \vec{v} \cdot \vec{u} + \vec{v} \cdot \vec{w}$, e $\vec{v} \cdot \vec{v} = \lvert\vec{v}\rvert^2 \ge 0$.
>
> **In coordinate.** Se $\vec{v} = (v_1, v_2, v_3)$ e $\vec{w} = (w_1, w_2, w_3)$:
> $$
> \vec{v} \cdot \vec{w} = v_1 w_1 + v_2 w_2 + v_3 w_3
> $$
> **Perché.** Scrivo $\vec{v} = v_1\vec{\imath} + v_2\vec{\jmath} + v_3\vec{k}$ e lo stesso per $\vec{w}$. I versori degli assi sono ortonormali: $\vec{\imath} \cdot \vec{\imath} = \vec{\jmath} \cdot \vec{\jmath} = \vec{k} \cdot \vec{k} = 1$, mentre i prodotti fra versori diversi valgono $0$ perché gli assi sono perpendicolari. Sviluppando con la distributiva vengono nove termini $v_a w_b\,(\text{versore} \cdot \text{versore})$: i sei con versori diversi si annullano, restano $v_1 w_1 + v_2 w_2 + v_3 w_3$.
>
> **Esempio.** $(1, 2, -1) \cdot (3, 0, 1) = 3 + 0 - 1 = 2 > 0$: i due vettori formano un angolo acuto. Messe insieme, le due formule danno l'angolo: $\cos\theta = \dfrac{\vec{v} \cdot \vec{w}}{\lvert\vec{v}\rvert\,\lvert\vec{w}\rvert}$.

**Domanda 1.4.** **Cos'è la normalizzazione di un vettore geometrico? Come può essere scritta se si conoscono le componenti del vettore?**

> [!example]- Soluzione
> **Definizione.** Dato $\vec{v} \neq \vec{0}$, la normalizzazione di $\vec{v}$ è
> $$
> \frac{\vec{v}}{\lvert\vec{v}\rvert} := \frac{1}{\lvert\vec{v}\rvert}\,\vec{v}
> $$
> cioè il **versore** (vettore di modulo $1$) con la stessa direzione e lo stesso verso di $\vec{v}$. Serve $\vec{v} \neq \vec{0}$ perché si divide per $\lvert\vec{v}\rvert$.
>
> **Perché ha modulo 1.** $\frac{1}{\lvert\vec{v}\rvert}$ è uno scalare positivo, quindi per la definizione di prodotto per scalare il verso resta quello di $\vec{v}$ e il modulo è $\frac{1}{\lvert\vec{v}\rvert}\,\lvert\vec{v}\rvert = 1$.
>
> **In componenti.** Il modulo è $\lvert\vec{v}\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2}$ (Pitagora due volte, oppure $\lvert\vec{v}\rvert^2 = \vec{v} \cdot \vec{v}$), quindi
> $$
> \frac{\vec{v}}{\lvert\vec{v}\rvert} = \left(\frac{v_1}{\sqrt{v_1^2 + v_2^2 + v_3^2}},\ \frac{v_2}{\sqrt{v_1^2 + v_2^2 + v_3^2}},\ \frac{v_3}{\sqrt{v_1^2 + v_2^2 + v_3^2}}\right)
> $$
> **Esempio.** $\vec{v} = (3, 0, -4)$ ha $\lvert\vec{v}\rvert = \sqrt{9 + 0 + 16} = 5$, quindi la normalizzazione è $\left(\frac{3}{5}, 0, -\frac{4}{5}\right)$. Controllo: $\frac{9}{25} + \frac{16}{25} = 1$.

**Domanda 1.5.** **Come si trova la proiezione di un vettore geometrico su un versore? E su un vettore qualsiasi? Si fornisca anche un esempio.**

> [!example]- Soluzione
> **Cos'è.** La proiezione ortogonale di $\vec{v}$ su una direzione è il vettore che si ottiene facendo cadere la punta di $\vec{v}$ perpendicolarmente sulla retta di quella direzione: l'ombra di $\vec{v}$ con la luce a perpendicolo.
>
> **Su un versore $\vec{e}$.**
> $$
> pr_{\vec{e}}(\vec{v}) = (\vec{v} \cdot \vec{e})\,\vec{e}
> $$
> $\vec{e}$ dà la direzione, il numero $\vec{v} \cdot \vec{e} = \lvert\vec{v}\rvert\cos\theta$ dice quanto allungarlo e, col segno, se girarlo. È il cateto del triangolo rettangolo con ipotenusa $\vec{v}$. Con $\theta$ acuto la proiezione ha il verso di $\vec{e}$; con $\theta$ ottuso $\cos\theta < 0$ e la proiezione ha verso opposto; con $\theta$ retto è $\vec{0}$. La stessa formula copre tutti i casi.
>
> **Su un vettore $\vec{w} \neq \vec{0}$.** Proiettare su $\vec{w}$ o sul suo versore è la stessa cosa, perché conta solo la direzione. Uso la formula di prima con $\vec{e} = \frac{\vec{w}}{\lvert\vec{w}\rvert}$ e porto fuori gli scalari:
> $$
> pr_{\vec{w}}(\vec{v}) = \left(\vec{v} \cdot \frac{\vec{w}}{\lvert\vec{w}\rvert}\right)\frac{\vec{w}}{\lvert\vec{w}\rvert} = \frac{\vec{v} \cdot \vec{w}}{\lvert\vec{w}\rvert^2}\,\vec{w}
> $$
> Al denominatore c'è $\lvert\vec{w}\rvert^2 = \vec{w} \cdot \vec{w}$, che si calcola senza radici.
>
> **Esempio, con angolo ottuso.** $\vec{v} = (2, 1, -4)$ e $\vec{w} = (-1, 2, 2)$.
> - $\vec{v} \cdot \vec{w} = -2 + 2 - 8 = -8$ e $\lvert\vec{w}\rvert^2 = 1 + 4 + 4 = 9$.
> - Su $\vec{w}$: $pr_{\vec{w}}(\vec{v}) = -\frac{8}{9}(-1, 2, 2) = \left(\frac{8}{9}, -\frac{16}{9}, -\frac{16}{9}\right)$.
> - Sul versore: $\lvert\vec{w}\rvert = 3$, $\vec{e} = \left(-\frac{1}{3}, \frac{2}{3}, \frac{2}{3}\right)$, $\vec{v} \cdot \vec{e} = \frac{-2 + 2 - 8}{3} = -\frac{8}{3}$, quindi $pr_{\vec{e}}(\vec{v}) = -\frac{8}{3}\,\vec{e} = \left(\frac{8}{9}, -\frac{16}{9}, -\frac{16}{9}\right)$. Stesso vettore, come deve essere.
>
> Il coefficiente è negativo, quindi la proiezione ha verso **opposto** a $\vec{w}$: l'angolo fra $\vec{v}$ e $\vec{w}$ è ottuso. **Verifica**: il resto $\vec{v} - pr_{\vec{w}}(\vec{v}) = \left(\frac{10}{9}, \frac{25}{9}, -\frac{20}{9}\right)$ deve essere ortogonale a $\vec{w}$, e infatti $\frac{-10 + 50 - 40}{9} = 0$.

**Domanda 1.6.** **Data una retta nello spazio, cos'è il fascio di piani che ha come sostegno tale retta? Come può essere descritto? Si fornisca anche un esempio del suo utilizzo.**

> [!example]- Soluzione
> **Definizione.** Il fascio di piani di sostegno $r$ è l'insieme di **tutti i piani che contengono $r$**. Sono infiniti, come le pagine di un libro aperto attorno alla costa.
>
> **Equazione.** Se $r$ ha equazioni cartesiane $ax + by + cz + d = 0$ e $a'x + b'y + c'z + d' = 0$, il fascio è
> $$
> \lambda(ax + by + cz + d) + \mu(a'x + b'y + c'z + d') = 0, \qquad (\lambda, \mu) \neq (0, 0)
> $$
> e ogni coppia $(\lambda, \mu)$ dà un piano che contiene $r$.
>
> **Perché contiene $r$.** Un punto di $r$ soddisfa entrambe le equazioni, quindi annulla le due parentesi: $\lambda \cdot 0 + \mu \cdot 0 = 0$ per ogni $\lambda, \mu$. Il punto sta su ogni piano del fascio.
>
> **Perché $(\lambda, \mu) \neq (0, 0)$.** Con $\lambda = \mu = 0$ l'equazione diventa $0 = 0$, vera in tutto lo spazio: non è un piano. Due coppie proporzionali danno lo stesso piano, quindi conta solo il rapporto fra $\lambda$ e $\mu$: per questo si fissa uno dei due (la prof pone $\lambda = 1$) e si ricava l'altro.
>
> **Esempio d'uso: piano per $r$ e per un punto fuori.** Siano $r : \{x - z = 0,\ y - 2 = 0\}$ e $P = (1, 0, 0)$.
> 1. $P \notin r$: nella prima equazione $1 - 0 = 1 \neq 0$. Se ci stesse, ogni piano del fascio passerebbe per $P$ e il piano non sarebbe determinato.
> 2. Fascio: $\lambda(x - z) + \mu(y - 2) = 0$.
> 3. Passaggio per $P$: $\lambda(1 - 0) + \mu(0 - 2) = \lambda - 2\mu = 0$, cioè $\lambda = 2\mu$.
> 4. Con $\mu = 1$, $\lambda = 2$: $2(x - z) + (y - 2) = 0$, cioè $2x + y - 2z - 2 = 0$.
>
> **Verifica.** $P$: $2 - 2 = 0$. Due punti di $r$, $(0, 2, 0)$ e $(1, 2, 1)$: $2 - 2 = 0$ e $2 + 2 - 2 - 2 = 0$.
>
> Altri usi nel foglio: il piano che contiene due rette complanari (1.13 a, 1.15 b) e il piano per $r$ parallelo a un'altra retta, che serve per la distanza fra rette sghembe (1.14 c). Il fascio funziona quando la retta è data in **cartesiane**: se è in parametriche, prima si ricavano le cartesiane.

**Domanda 1.7.** **Si verifichi, utilizzando le componenti, che comunque scelti tre vettori geometrici $\vec{v}, \vec{w}, \vec{u}$ si ha $\vec{v} \cdot (\vec{u} + \vec{w}) = \vec{v} \cdot \vec{u} + \vec{v} \cdot \vec{w}$.**

> [!example]- Soluzione
> Fisso un riferimento $Oxyz$ e scrivo i tre vettori in coordinate:
> $$
> \vec{v} = (v_1, v_2, v_3) \qquad \vec{u} = (u_1, u_2, u_3) \qquad \vec{w} = (w_1, w_2, w_3)
> $$
> Uso due fatti già noti: la somma si fa componente per componente, e il prodotto scalare in coordinate è $\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Sviluppo i due membri separatamente.
>
> **Membro sinistro.** $\vec{u} + \vec{w} = (u_1 + w_1,\ u_2 + w_2,\ u_3 + w_3)$, quindi
> $$
> \vec{v} \cdot (\vec{u} + \vec{w}) = v_1(u_1 + w_1) + v_2(u_2 + w_2) + v_3(u_3 + w_3)
> $$
> Per la **distributiva del prodotto rispetto alla somma nei numeri reali**, $v_i(u_i + w_i) = v_i u_i + v_i w_i$, e quindi
> $$
> \vec{v} \cdot (\vec{u} + \vec{w}) = v_1 u_1 + v_1 w_1 + v_2 u_2 + v_2 w_2 + v_3 u_3 + v_3 w_3
> $$
>
> **Membro destro.**
> $$
> \vec{v} \cdot \vec{u} + \vec{v} \cdot \vec{w} = (v_1 u_1 + v_2 u_2 + v_3 u_3) + (v_1 w_1 + v_2 w_2 + v_3 w_3)
> $$
>
> **Confronto.** I due membri contengono gli stessi sei addendi, in ordine diverso. Per l'**associativa e la commutativa della somma di numeri reali** posso riordinarli, e i due membri coincidono. Siccome $\vec{v}, \vec{u}, \vec{w}$ erano qualsiasi, l'uguaglianza vale sempre. $\blacksquare$
>
> L'unico punto in cui serve stare attenti è dichiarare quale proprietà dei reali si usa a ogni passaggio: è quello che trasforma un conto in una dimostrazione.

**Domanda 1.8.** **Quali sono le possibili posizioni reciproche di due rette nello spazio? Come si può stabilire, date due rette, in che caso ci si trova?**

> [!example]- Soluzione
> **Definizioni della prof.** Siano $r$ e $r'$ due rette **distinte**, con vettori direzionali $\vec{v}$ e $\vec{w}$.
> - **Parallele**: $\vec{v}$ e $\vec{w}$ sono proporzionali.
> - **Incidenti**: hanno un punto in comune.
> - **Sghembe**: altrimenti, cioè né parallele né incidenti.
>
> Se il testo non dice che sono distinte, c'è anche il caso **coincidenti**: direzioni proporzionali e un punto di una che sta sull'altra.
>
> **Perpendicolari** (o ortogonali): $\vec{v} \cdot \vec{w} = 0$. È una condizione solo sulle direzioni, indipendente dalle altre: due rette possono essere incidenti e perpendicolari, oppure sghembe e perpendicolari.
>
> **Complanari**: stanno su uno stesso piano. Due rette sono complanari se e solo se sono parallele o incidenti; sghembe vuol dire esattamente non complanari.
>
> **Come si stabilisce il caso.**
> ```
> leggi v e w (dalle parametriche; se una retta e' in cartesiane,
>              poni una variabile = parametro e ricava le altre)
>    |
>    v
> v e w proporzionali?
>    |-- si --> un punto di r sta su r'?  si: coincidenti
>    |                                    no: parallele
>    |-- no --> sistema fra le due rette, con DUE parametri diversi
>                  |-- ha soluzione   --> incidenti (e trovi il punto)
>                  |-- non ne ha      --> sghembe
> infine: v . w = 0?  allora anche perpendicolari
> ```
> Il sistema ha tre equazioni in due incognite $t$ e $s$: si ricavano $t$ e $s$ da due e si **verifica la terza**. Se una retta è in cartesiane è più comodo sostituire le parametriche dell'altra nelle sue due equazioni: restano due equazioni in un solo parametro. Servono parametri diversi perché i due punti non devono essere raggiunti "allo stesso valore del parametro".
>
> Esempi in questo foglio: parallele in 1.13, incidenti in 1.11 e 1.15, sghembe in 1.14.

## Esercizi

### Esercizio 1.9 (Febbraio 2016)

<span class="src">Foglio, p. 1-2</span>. Siano $P = (1, 0, 0)$, $r$ la retta di equazioni cartesiane $x + y = x + 2y - z = 0$ e $\pi$ il piano $y + z = -2$. Si trovino

- a) il piano $\pi'$ che contiene $r$ e $P$;
- b) la retta $s$ intersezione di $\pi$ e $\pi'$;
- c) il punto $Q$ intersezione di $r$ ed $s$.

> [!tip]- Indizio
> La scrittura $x + y = x + 2y - z = 0$ sono due equazioni: $x + y = 0$ e $x + 2y - z = 0$. a) è il fascio con passaggio per $P$. b) e c) sono sistemi. Per c) guarda dove stanno $r$ ed $s$: tutte e due su $\pi'$.

> [!example]- Soluzione
> **a)** $r$ è data in cartesiane e devo trovare un piano che la contiene: fascio.
>
> Prima controllo che $P$ non stia su $r$: $1 + 0 = 1 \neq 0$, quindi no, e il piano è unico.
> $$
> \lambda(x + y) + \mu(x + 2y - z) = 0
> $$
> Passaggio per $P = (1, 0, 0)$: $\lambda(1 + 0) + \mu(1 + 0 - 0) = \lambda + \mu = 0$, cioè $\mu = -\lambda$. Con $\lambda = 1$, $\mu = -1$:
> $$
> (x + y) - (x + 2y - z) = -y + z = 0 \quad\Longrightarrow\quad \pi' : y - z = 0
> $$
> **Verifica.** $P$: $0 - 0 = 0$. Parametriche di $r$, ponendo $y = t$: dalla prima $x = -t$, dalla seconda $z = x + 2y = t$, quindi $r : (-t,\ t,\ t)$. In $\pi'$: $t - t = 0$ per ogni $t$, tutta $r$ ci sta.
>
> **b)** $s = \pi \cap \pi'$ è la retta che soddisfa le due equazioni insieme:
> $$
> s : \begin{cases} y + z + 2 = 0 \\ y - z = 0 \end{cases}
> $$
> Queste sono già le cartesiane. Per vederla meglio passo alle parametriche: dalla seconda $z = y$, nella prima $2y = -2$, quindi $y = z = -1$. La $x$ non compare in nessuna delle due equazioni, quindi è libera e la uso come parametro:
> $$
> s : \begin{cases} x = t \\ y = -1 \\ z = -1 \end{cases} \qquad \vec{w} = (1, 0, 0)
> $$
> $s$ è parallela all'asse $x$.
>
> **c)** $Q$ soddisfa le due equazioni di $r$ e le due di $s$:
> $$
> \begin{cases} x + y = 0 \\ x + 2y - z = 0 \\ y = -1 \\ z = -1 \end{cases}
> $$
> Con $y = z = -1$ la prima dà $x = 1$, e la seconda va verificata: $1 - 2 + 1 = 0$. Torna, quindi
> $$
> Q = (1, -1, -1)
> $$
> Il sistema poteva non avere soluzione? No: $r$ ed $s$ stanno entrambe su $\pi'$, quindi sono complanari, e le direzioni $(-1, 1, 1)$ e $(1, 0, 0)$ non sono proporzionali. Due rette complanari non parallele sono incidenti. Lo stesso ragionamento dice che $Q$ è anche il punto in cui $r$ buca $\pi$.
>
> **Verifica.** $Q \in r$: $1 - 1 = 0$ e $1 - 2 + 1 = 0$. $Q \in \pi$: $-1 - 1 = -2$. $Q \in \pi'$: $-1 + 1 = 0$.
>
> **Risultati.** $\pi' : y - z = 0$; $s : (t, -1, -1)$; $Q = (1, -1, -1)$.

### Esercizio 1.10 (CC 2.14)

<span class="src">Foglio, p. 2</span>.

- a) Determinare equazioni parametriche e cartesiane della retta $r$ passante per i punti $A = (2, 1, 3)$ e $B = (1, 2, 1)$.
- b) Trovare un'equazione cartesiana del piano $\pi$ parallelo alla retta $r$ e all'asse $z$ e passante per l'origine.

> [!tip]- Indizio
> a) Direzione $\overrightarrow{AB}$, fine meno inizio; per le cartesiane elimina $t$. b) Normale incognita: deve essere ortogonale alla direzione di $r$ e a quella dell'asse $z$.

> [!example]- Soluzione
> **a) Direzione.** $\vec{v} = \overrightarrow{AB} = (1 - 2,\ 2 - 1,\ 1 - 3) = (-1, 1, -2)$.
>
> **Parametriche**, partendo da $A$:
> $$
> r : \begin{cases} x = 2 - t \\ y = 1 + t \\ z = 3 - 2t \end{cases}
> $$
> **Cartesiane.** Ricavo $t$ dall'equazione più semplice, la seconda: $t = y - 1$. Sostituisco nelle altre due:
> - $x = 2 - (y - 1) = 3 - y$, cioè $x + y - 3 = 0$;
> - $z = 3 - 2(y - 1) = 5 - 2y$, cioè $2y + z - 5 = 0$.
>
> $$
> r : \begin{cases} x + y - 3 = 0 \\ 2y + z - 5 = 0 \end{cases}
> $$
> **Verifica.** $A$: $2 + 1 - 3 = 0$ e $2 + 3 - 5 = 0$. $B$: $1 + 2 - 3 = 0$ e $4 + 1 - 5 = 0$.
>
> **b)** Un piano parallelo a una direzione ha la normale ortogonale a quella direzione. Le direzioni sono due: $\vec{v} = (-1, 1, -2)$ e quella dell'asse $z$, $\vec{k} = (0, 0, 1)$. Chiamo $\vec{n} = (a, b, c)$:
> $$
> \begin{cases} \vec{n} \cdot \vec{v} = -a + b - 2c = 0 \\ \vec{n} \cdot \vec{k} = c = 0 \end{cases}
> $$
> La seconda dà $c = 0$, poi la prima $b = a$. Con $a = 1$: $\vec{n} = (1, 1, 0)$. Il piano è $x + y + d = 0$, e il passaggio per l'origine dà $d = 0$:
> $$
> \pi : x + y = 0
> $$
> **Verifica.** $\vec{n} \cdot \vec{v} = -1 + 1 + 0 = 0$, $\vec{n} \cdot \vec{k} = 0$, $O$ soddisfa l'equazione. Inoltre $r$ non sta dentro $\pi$ ($A$: $2 + 1 = 3 \neq 0$), quindi è davvero parallela e non contenuta. Che manchi la $z$ nell'equazione è il segno che il piano è parallelo all'asse $z$: spostarsi in verticale non cambia $x + y$.

### Esercizio 1.11 (CC 2.8)

<span class="src">Foglio, p. 2</span>. Si considerino le rette

$$
r_1 : \begin{cases} x = 1 + t \\ y = 2t \\ z = 1 + t \end{cases} \qquad r_2 : \begin{cases} x + y = 1 \\ x - y + z = 2 \end{cases}
$$

- a) Si mostri che le due rette sono incidenti.
- b) Si determini l'equazione della retta ortogonale a $r_1$ e $r_2$ e passante per il loro punto di intersezione.

> [!tip]- Indizio
> a) Una retta è in parametriche e l'altra in cartesiane: sostituisci le parametriche di $r_1$ nelle due equazioni di $r_2$. b) Ti serve il direzionale di $r_2$ (poni $x = s$), poi la direzione incognita ortogonale a entrambe.

> [!example]- Soluzione
> **a)** Un punto di $r_1$ ha coordinate $(1 + t,\ 2t,\ 1 + t)$. Sta su $r_2$ se soddisfa le due equazioni:
> - prima: $(1 + t) + 2t = 1$, cioè $3t = 0$ e $t = 0$;
> - seconda: $(1 + t) - 2t + (1 + t) = 2$, cioè $2 = 2$, vera per ogni $t$.
>
> Il sistema ha l'unica soluzione $t = 0$: le rette hanno esattamente un punto in comune, quindi sono **incidenti** in
> $$
> P = r_1(0) = (1, 0, 1)
> $$
> **Verifica** in $r_2$: $1 + 0 = 1$ e $1 - 0 + 1 = 2$.
>
> (La seconda equazione vera per ogni $t$ vuol dire che tutta $r_1$ sta sul piano $x - y + z = 2$. Non è un problema: la prima equazione fissa $t$.)
>
> **b) Direzionale di $r_2$.** Pongo $x = s$: dalla prima $y = 1 - s$, dalla seconda $z = 2 - x + y = 3 - 2s$. Quindi $\vec{w} = (1, -1, -2)$, mentre $\vec{v} = (1, 2, 1)$ si legge da $r_1$.
>
> **Direzione incognita** $\vec{u} = (a, b, c)$, ortogonale a entrambe:
> $$
> \begin{cases} \vec{u} \cdot \vec{v} = a + 2b + c = 0 \\ \vec{u} \cdot \vec{w} = a - b - 2c = 0 \end{cases}
> $$
> Sottraggo la seconda dalla prima: $3b + 3c = 0$, quindi $b = -c$. Nella seconda: $a + c - 2c = 0$, quindi $a = c$. Con $c = 1$: $\vec{u} = (1, -1, 1)$.
>
> **Retta** per $P = (1, 0, 1)$ con direzione $\vec{u}$:
> $$
> \begin{cases} x = 1 + k \\ y = -k \\ z = 1 + k \end{cases} \qquad \text{in cartesiane} \quad \begin{cases} x - z = 0 \\ x + y - 1 = 0 \end{cases}
> $$
> (Le cartesiane: $x$ e $z$ sono entrambe $1 + k$, quindi $x = z$; e $x + y = 1 + k - k = 1$.)
>
> **Verifica.** $\vec{u} \cdot \vec{v} = 1 - 2 + 1 = 0$ e $\vec{u} \cdot \vec{w} = 1 + 1 - 2 = 0$. $P$ soddisfa le cartesiane: $1 - 1 = 0$ e $1 + 0 - 1 = 0$.
>
> Il testo dice "l'equazione" della retta al singolare: nello spazio una retta ha due equazioni cartesiane oppure tre parametriche, e vanno bene entrambe le forme.

### Esercizio 1.12 (CC 2.19)

<span class="src">Foglio, p. 2</span>. Si considerino i piani

$$
\pi_1 : 3x + 3y - z = -9 \qquad \pi_2 : x + y = -2 \qquad \pi_3 : x + y + z = 1
$$

e la retta $r$ intersezione di $\pi_1$ e $\pi_2$.

- a) Si stabilisca se il piano $\pi_3$ contiene $r$.
- b) Si trovi un'equazione cartesiana del piano $\pi_4$ passante per l'origine e contenente $r$.
- c) Si trovi la proiezione ortogonale dell'origine sul piano $\pi_1$.

> [!tip]- Indizio
> È la stessa struttura dell'es. 5 del tutor. a) Sistema delle tre equazioni, oppure due punti di $r$ sostituiti in $\pi_3$. b) Fascio di sostegno $r$ con passaggio per $O$. c) Retta per $O$ con direzione la normale di $\pi_1$, intersecata con $\pi_1$.

> [!example]- Soluzione
> Porto le equazioni nella forma $ax + by + cz + d = 0$: $\pi_1 : 3x + 3y - z + 9 = 0$, $\pi_2 : x + y + 2 = 0$, $\pi_3 : x + y + z - 1 = 0$.
>
> **a)** $r$ è fatta dai punti che stanno su $\pi_1$ e $\pi_2$. Semplifico: da $\pi_2$ ho $x + y = -2$, che sostituito in $\pi_1$ dà $3(-2) - z + 9 = 0$, cioè $z = 3$. Quindi
> $$
> r : \begin{cases} x + y = -2 \\ z = 3 \end{cases}
> $$
> Ogni punto di $r$ ha $x + y = -2$ e $z = 3$, quindi in $\pi_3$ dà $x + y + z = -2 + 3 = 1$: l'equazione di $\pi_3$ è soddisfatta da **tutti** i punti di $r$. **$\pi_3$ contiene $r$.**
>
> **Controllo con due punti.** $y = 0$ dà $(-2, 0, 3)$ e $-2 + 0 + 3 = 1$; $y = -2$ dà $(0, -2, 3)$ e $0 - 2 + 3 = 1$. E infatti $\pi_3$ sta nel fascio: $-1 \cdot (3x + 3y - z + 9) + 4(x + y + 2) = x + y + z - 1$.
>
> **b)** Fascio di sostegno $r$:
> $$
> \lambda(3x + 3y - z + 9) + \mu(x + y + 2) = 0
> $$
> Passaggio per $O = (0, 0, 0)$: $9\lambda + 2\mu = 0$. Con $\lambda = 1$ verrebbe $\mu = -\frac{9}{2}$; per evitare frazioni prendo $\lambda = 2$, $\mu = -9$ (è la stessa coppia moltiplicata per $2$, quindi lo stesso piano):
> $$
> 2(3x + 3y - z + 9) - 9(x + y + 2) = -3x - 3y - 2z = 0 \quad\Longrightarrow\quad \pi_4 : 3x + 3y + 2z = 0
> $$
> **Verifica.** $O$ la soddisfa. I due punti di $r$: $(-2, 0, 3)$ dà $-6 + 0 + 6 = 0$, $(0, -2, 3)$ dà $0 - 6 + 6 = 0$.
>
> **c)** La proiezione di $O$ su $\pi_1$ è il piede $H$ della perpendicolare da $O$ al piano. La retta per $O$ perpendicolare a $\pi_1$ ha direzione la normale $\vec{n}_1 = (3, 3, -1)$:
> $$
> \begin{cases} x = 3t \\ y = 3t \\ z = -t \end{cases}
> $$
> Sostituisco in $\pi_1$: $9t + 9t + t + 9 = 19t + 9 = 0$, quindi $t = -\frac{9}{19}$ e
> $$
> H = \left(-\frac{27}{19},\ -\frac{27}{19},\ \frac{9}{19}\right)
> $$
> **Verifica.** $H \in \pi_1$: $3\left(-\frac{27}{19}\right) + 3\left(-\frac{27}{19}\right) - \frac{9}{19} + 9 = \frac{-81 - 81 - 9 + 171}{19} = 0$. $\overrightarrow{OH} = -\frac{9}{19}(3, 3, -1)$ è proporzionale a $\vec{n}_1$.

### Esercizio 1.13 (Prova Intermedia 2016)

<span class="src">Foglio, p. 2</span>. Siano $r$ la retta passante per i punti $A = (1, 0, 1)$ e $B = (2, -1, 3)$ e $r'$ la retta di equazioni cartesiane

$$
r' : \begin{cases} x + y = 2 \\ 2x - z = -1 \end{cases}
$$

- a) Mostrare che $r$ ed $r'$ sono complanari e trovare un'equazione cartesiana del piano $\pi$ che le contiene.
- b) Sia $r''$ la retta ortogonale a $\pi$ e passante per $Q = (-3, -1, 4)$. Si trovi la distanza del punto $A$ dalla retta $r''$.

> [!tip]- Indizio
> a) Confronta i direzionali prima di fare sistemi: potresti risparmiarti il conto. Per il piano, fascio di sostegno $r'$ e un punto di $r$. b) Il direzionale di $r''$ è la normale di $\pi$; poi distanza punto-retta col punto generico.

> [!example]- Soluzione
> **a) Direzionali.** $\vec{v} = \overrightarrow{AB} = (2 - 1,\ -1 - 0,\ 3 - 1) = (1, -1, 2)$. Per $r'$ pongo $x = s$: dalla prima $y = 2 - s$, dalla seconda $z = 2s + 1$, quindi $r' : (s,\ 2 - s,\ 1 + 2s)$ e $\vec{w} = (1, -1, 2)$.
>
> $\vec{w} = \vec{v}$: i direzionali sono proporzionali, le rette sono **parallele** oppure coincidenti. $A$ sta su $r'$? $1 + 0 = 1 \neq 2$, no. Quindi sono **parallele e distinte**, e due rette parallele sono **complanari**.
>
> **Il piano, col fascio di sostegno $r'$:**
> $$
> \lambda(x + y - 2) + \mu(2x - z + 1) = 0
> $$
> Impongo il passaggio per $A = (1, 0, 1) \in r$, che non sta su $r'$: $\lambda(1 + 0 - 2) + \mu(2 - 1 + 1) = -\lambda + 2\mu = 0$, quindi $\lambda = 2\mu$. Con $\mu = 1$, $\lambda = 2$:
> $$
> 2(x + y - 2) + (2x - z + 1) = 0 \quad\Longrightarrow\quad \pi : 4x + 2y - z - 3 = 0
> $$
> **Verifica sui quattro punti.** $A$: $4 + 0 - 1 - 3 = 0$. $B$: $8 - 2 - 3 - 3 = 0$. Due punti di $r'$, $(0, 2, 1)$ e $(1, 1, 3)$: $0 + 4 - 1 - 3 = 0$ e $4 + 2 - 3 - 3 = 0$.
>
> **b)** $r''$ è ortogonale a $\pi$, quindi la sua direzione è proporzionale alla normale $\vec{n} = (4, 2, -1)$:
> $$
> r'' : \begin{cases} x = -3 + 4k \\ y = -1 + 2k \\ z = 4 - k \end{cases}
> $$
> **Distanza di $A$ da $r''$, punto generico.** $R(k) = (-3 + 4k,\ -1 + 2k,\ 4 - k)$ e
> $$
> \overrightarrow{AR(k)} = (-4 + 4k,\ -1 + 2k,\ 3 - k)
> $$
> Il piede $H$ è il punto in cui $\overrightarrow{AR(k)}$ è ortogonale alla direzione di $r''$:
> $$
> 4(-4 + 4k) + 2(-1 + 2k) - (3 - k) = 21k - 21 = 0 \quad\Longrightarrow\quad k = 1
> $$
> $H = R(1) = (1, 1, 3)$, $\overrightarrow{AH} = (0, 1, 2)$ e
> $$
> d(A, r'') = \sqrt{0 + 1 + 4} = \sqrt{5}
> $$
> **Verifica.** $\overrightarrow{AH} \cdot \vec{n} = 0 + 2 - 2 = 0$.
>
> **Perché torna così pulito.** $A$ sta su $\pi$ e $r''$ è perpendicolare a $\pi$: il piede della perpendicolare da $A$ è il punto in cui $r''$ buca $\pi$. Infatti $H = (1, 1, 3)$ soddisfa $4 + 2 - 3 - 3 = 0$, e sta anche su $r'$. Era un'altra strada valida: intersecare $r''$ con $\pi$ e misurare $\lvert\overrightarrow{AH}\rvert$.

### Esercizio 1.14 (Luglio 2016)

<span class="src">Foglio, p. 3</span>. Sia $r$ la retta di equazioni cartesiane $2x + 4y + z + 1 = 0$, $x - y + 1 = 0$ e sia $s$ la retta di equazioni cartesiane $2x + 3y + z = 0$, $x + y = 0$.

- a) Si stabilisca se le rette sono parallele, incidenti, sghembe o coincidenti.
- b) Si dica se le rette $r$ e $s$ sono complanari. In caso affermativo, si trovi l'equazione del piano che le contiene.
- c) Si trovi la distanza tra $r$ e $s$.

> [!tip]- Indizio
> a) Parametriche di entrambe (poni $y$ uguale al parametro), confronto dei direzionali, poi le parametriche di $s$ dentro le cartesiane di $r$. b) Complanari vuol dire non sghembe. c) Dipende da a): se sono sghembe, perpendicolare comune oppure piano del fascio di $r$ parallelo a $s$.

> [!example]- Soluzione
> **Parametriche.** Per $r$ pongo $y = t$: dalla seconda $x = t - 1$, dalla prima $z = -1 - 2x - 4y = -1 - 2(t - 1) - 4t = 1 - 6t$.
> $$
> r : \begin{cases} x = -1 + t \\ y = t \\ z = 1 - 6t \end{cases} \qquad \vec{v} = (1, 1, -6)
> $$
> Per $s$ pongo $y = u$ (lettera diversa): dalla seconda $x = -u$, dalla prima $z = -2x - 3y = 2u - 3u = -u$.
> $$
> s : \begin{cases} x = -u \\ y = u \\ z = -u \end{cases} \qquad \vec{w} = (-1, 1, -1)
> $$
> **a)** $\vec{v}$ e $\vec{w}$ non sono proporzionali: dalla prima coordinata il fattore sarebbe $-1$, dalla seconda $1$. Quindi non parallele e non coincidenti.
>
> **Incidenti?** Sostituisco il punto generico di $s$ nelle due equazioni di $r$:
> - $2(-u) + 4u + (-u) + 1 = u + 1 = 0$, quindi $u = -1$;
> - $(-u) - u + 1 = -2u + 1 = 0$, quindi $u = \frac{1}{2}$.
>
> Le due equazioni chiedono valori diversi di $u$: nessun punto di $s$ sta su $r$. Le rette sono **sghembe**. Inoltre $\vec{v} \cdot \vec{w} = -1 + 1 + 6 = 6 \neq 0$, quindi non sono perpendicolari.
>
> **b)** Sghembe vuol dire esattamente non complanari: **non esiste** un piano che le contiene.
>
> **c) Metodo 1, perpendicolare comune.** Punto generico $P(t) = (-1 + t,\ t,\ 1 - 6t)$ su $r$ e $S(u) = (-u,\ u,\ -u)$ su $s$:
> $$
> \overrightarrow{P(t)S(u)} = (1 - t - u,\ u - t,\ -1 + 6t - u)
> $$
> Il segmento di minima distanza è ortogonale a tutte e due le rette:
> $$
> \begin{cases} \overrightarrow{P(t)S(u)} \cdot \vec{v} = (1 - t - u) + (u - t) - 6(-1 + 6t - u) = 7 - 38t + 6u = 0 \\ \overrightarrow{P(t)S(u)} \cdot \vec{w} = -(1 - t - u) + (u - t) - (-1 + 6t - u) = 3u - 6t = 0 \end{cases}
> $$
> Dalla seconda $u = 2t$; nella prima $7 - 38t + 12t = 7 - 26t = 0$, quindi $t = \frac{7}{26}$ e $u = \frac{7}{13}$. I due punti sono
> $$
> P = \left(-\frac{19}{26},\ \frac{7}{26},\ -\frac{8}{13}\right) \qquad S = \left(-\frac{7}{13},\ \frac{7}{13},\ -\frac{7}{13}\right) \qquad \overrightarrow{PS} = \left(\frac{5}{26},\ \frac{7}{26},\ \frac{1}{13}\right) = \frac{1}{26}(5, 7, 2)
> $$
> $$
> d(r, s) = \frac{1}{26}\sqrt{25 + 49 + 4} = \frac{\sqrt{78}}{26}
> $$
> **Verifica.** $(5, 7, 2) \cdot (1, 1, -6) = 5 + 7 - 12 = 0$ e $(5, 7, 2) \cdot (-1, 1, -1) = -5 + 7 - 2 = 0$.
>
> **Metodo 2, piano del fascio** (controllo, e più corto se serve solo il numero). Fascio di sostegno $r$:
> $$
> \lambda(2x + 4y + z + 1) + \mu(x - y + 1) = 0, \qquad \vec{n} = (2\lambda + \mu,\ 4\lambda - \mu,\ \lambda)
> $$
> Cerco il piano del fascio parallelo a $s$: $\vec{n} \cdot \vec{w} = -(2\lambda + \mu) + (4\lambda - \mu) - \lambda = \lambda - 2\mu = 0$, cioè $\lambda = 2\mu$. Con $\mu = 1$, $\lambda = 2$:
> $$
> \pi : 5x + 7y + 2z + 3 = 0
> $$
> $\pi$ contiene $r$ ed è parallelo a $s$, quindi ogni punto di $s$ ha la stessa distanza da $\pi$, ed è la distanza fra le rette. Prendo il punto di $s$ per $u = 0$, l'origine:
> $$
> d(O, \pi) = \frac{\lvert 0 + 0 + 0 + 3\rvert}{\sqrt{25 + 49 + 4}} = \frac{3}{\sqrt{78}} = \frac{3\sqrt{78}}{78} = \frac{\sqrt{78}}{26}
> $$
> Stesso valore. La normale $(5, 7, 2)$ è proprio la direzione della perpendicolare comune trovata col metodo 1, come deve essere.
>
> **Risultati.** Sghembe, non complanari, $d(r, s) = \frac{\sqrt{78}}{26} \approx 0{,}34$.

### Esercizio 1.15 (CC 2.28)

<span class="src">Foglio, p. 3</span>. Si considerino le rette

$$
r_1 : \begin{cases} x = 3t \\ y = 2 - t \\ z = 1 + t \end{cases} \qquad r_2 : \begin{cases} x + y - 2 = 0 \\ z + y - 3 = 0 \end{cases}
$$

- a) Determinare la loro posizione reciproca.
- b) Se le rette sono complanari determinare un'equazione cartesiana del piano $\pi$ che le contiene.
- c) Determinare equazioni parametriche per la retta passante per $P = (2, 5, 1)$ e ortogonale alle rette $r_1$ ed $r_2$.

> [!tip]- Indizio
> a) Parametriche di $r_1$ dentro le cartesiane di $r_2$. b) Fascio di sostegno $r_2$ e un punto di $r_1$ che non stia su $r_2$: occhio a cosa ti dà la condizione. c) Direzione incognita ortogonale a entrambe.

> [!example]- Soluzione
> **Direzionali.** $\vec{v} = (3, -1, 1)$ da $r_1$. Per $r_2$ pongo $y = s$: $x = 2 - s$, $z = 3 - s$, quindi $\vec{w} = (-1, 1, -1)$. Non proporzionali (fattore $-\frac{1}{3}$ dalla prima coordinata, $-1$ dalla seconda): **non parallele**.
>
> **a)** Sostituisco il punto generico di $r_1$ nelle equazioni di $r_2$:
> - $3t + (2 - t) - 2 = 2t = 0$, quindi $t = 0$;
> - $(1 + t) + (2 - t) - 3 = 0$, vera per ogni $t$.
>
> Una sola soluzione, $t = 0$: le rette sono **incidenti** in $r_1(0) = (0, 2, 1)$. Controllo in $r_2$: $0 + 2 - 2 = 0$ e $1 + 2 - 3 = 0$. Ortogonali? $\vec{v} \cdot \vec{w} = -3 - 1 - 1 = -5 \neq 0$, no.
>
> **b)** Incidenti, quindi complanari. Fascio di sostegno $r_2$:
> $$
> \lambda(x + y - 2) + \mu(z + y - 3) = 0
> $$
> Mi serve un punto di $r_1$ che **non** sia il punto d'incidenza, altrimenti esce $0 = 0$. Prendo $t = 1$: $(3, 1, 2)$, che non sta su $r_2$ perché $3 + 1 - 2 = 2 \neq 0$. Passaggio:
> $$
> \lambda(3 + 1 - 2) + \mu(2 + 1 - 3) = 2\lambda = 0 \quad\Longrightarrow\quad \lambda = 0
> $$
> Qui non posso porre $\lambda = 1$. Con $\lambda = 0$ e $\mu = 1$ il piano è il secondo piano di partenza:
> $$
> \pi : y + z - 3 = 0
> $$
> Il motivo si vede già in a): la seconda equazione era vera per ogni $t$, cioè tutta $r_1$ sta sul piano $y + z = 3$, che contiene anche $r_2$ per definizione.
>
> **Verifica.** Per ogni $t$: $(2 - t) + (1 + t) - 3 = 0$, quindi $r_1 \subset \pi$; $r_2 \subset \pi$ perché $y + z - 3 = 0$ è una delle sue equazioni.
>
> **c)** Direzione incognita $\vec{u} = (a, b, c)$:
> $$
> \begin{cases} \vec{u} \cdot \vec{v} = 3a - b + c = 0 \\ \vec{u} \cdot \vec{w} = -a + b - c = 0 \end{cases}
> $$
> Sommando: $2a = 0$, quindi $a = 0$, e allora $b = c$. Con $b = 1$: $\vec{u} = (0, 1, 1)$. Retta per $P = (2, 5, 1)$:
> $$
> \begin{cases} x = 2 \\ y = 5 + k \\ z = 1 + k \end{cases}
> $$
> **Verifica.** $\vec{u} \cdot \vec{v} = 0 - 1 + 1 = 0$ e $\vec{u} \cdot \vec{w} = 0 + 1 - 1 = 0$. In più $\vec{u} = (0, 1, 1)$ è la normale di $\pi$: una direzione ortogonale a due rette incidenti è ortogonale al piano che le contiene.
>
> Se a) e b) le avessi risolte con la normale di $\pi$ già in mano, c) era immediata: la direzione cercata è $(0, 1, 1)$.

### Esercizio 1.16 (Settembre 2018)

<span class="src">Foglio, p. 3</span>. Sia $P = (2, 1, 3)$ e sia $r$ la retta

$$
r : \begin{cases} x - y = 0 \\ y + z - 3 = 0 \end{cases}
$$

- a) Si trovi la distanza di $P$ da $r$.
- b) Si trovino le equazioni cartesiane dei piani ortogonali a $r$ la cui distanza da $P$ è $\sqrt{3}$.

> [!tip]- Indizio
> a) Parametriche di $r$, punto generico $Q(t)$, imponi $\overrightarrow{PQ(t)} \cdot \vec{v} = 0$. b) Piano ortogonale a $r$ significa normale uguale al direzionale di $r$: resta solo $d$, e il valore assoluto ti dà due piani.

> [!example]- Soluzione
> **Parametriche di $r$.** Pongo $y = t$: $x = t$ e $z = 3 - t$.
> $$
> r : \begin{cases} x = t \\ y = t \\ z = 3 - t \end{cases} \qquad \vec{v} = (1, 1, -1)
> $$
> $P \notin r$: $2 - 1 = 1 \neq 0$.
>
> **a)** Punto generico $Q(t) = (t,\ t,\ 3 - t)$:
> $$
> \overrightarrow{PQ(t)} = (t - 2,\ t - 1,\ -t)
> $$
> Il piede $H$ è il punto in cui questo vettore è ortogonale a $r$:
> $$
> \overrightarrow{PQ(t)} \cdot \vec{v} = (t - 2) + (t - 1) + t = 3t - 3 = 0 \quad\Longrightarrow\quad t = 1
> $$
> $H = Q(1) = (1, 1, 2)$, $\overrightarrow{PH} = (-1, 0, -1)$ e
> $$
> d(P, r) = \sqrt{1 + 0 + 1} = \sqrt{2}
> $$
> **Verifica.** $H \in r$: $1 - 1 = 0$ e $1 + 2 - 3 = 0$. $\overrightarrow{PH} \cdot \vec{v} = -1 + 0 + 1 = 0$.
>
> **b)** Un piano ortogonale a $r$ ha per normale il direzionale $\vec{v} = (1, 1, -1)$, quindi è della forma
> $$
> x + y - z + d = 0
> $$
> con $d$ unica incognita. Impongo la distanza da $P$ con la formula punto-piano:
> $$
> \frac{\lvert 2 + 1 - 3 + d\rvert}{\sqrt{1 + 1 + 1}} = \frac{\lvert d\rvert}{\sqrt{3}} = \sqrt{3} \quad\Longrightarrow\quad \lvert d\rvert = 3
> $$
> Il valore assoluto dà due casi, $d = 3$ e $d = -3$:
> $$
> x + y - z + 3 = 0 \qquad x + y - z - 3 = 0
> $$
> **Verifica.** $\frac{\lvert 0 + 3\rvert}{\sqrt{3}} = \frac{3}{\sqrt{3}} = \sqrt{3}$ e $\frac{\lvert 0 - 3\rvert}{\sqrt{3}} = \sqrt{3}$. I due piani stanno da parti opposte di $P$: valutata in $P$, l'equazione vale $+3$ per il primo e $-3$ per il secondo.

### Esercizio 1.17 (Prova Intermedia 2018)

<span class="src">Foglio, p. 3</span>. Sia $\pi$ il piano $y + 3z = 2$ e sia $r$ la retta

$$
r : \begin{cases} x = -1 + 2t \\ y = t \\ z = 1 + 3t \end{cases}
$$

- a) Si determini la posizione reciproca di $r$ e $\pi$.
- b) Si trovino equazioni parametriche della retta $r'$ passante per $A = (1, 0, 1)$, perpendicolare alla retta $r$ e parallela al piano $\pi$.
- c) Si trovi la distanza tra $\pi$ e $r'$.

> [!tip]- Indizio
> a) Calcola $\vec{n} \cdot \vec{v}$. b) Due condizioni sulla direzione incognita: ortogonale a $\vec{v}$ (perpendicolare a $r$) e ortogonale a $\vec{n}$ (parallela a $\pi$). c) Retta parallela a un piano: la distanza è quella di un suo punto dal piano.

> [!example]- Soluzione
> **Vettori.** $\vec{n} = (0, 1, 3)$ (in $y + 3z - 2 = 0$ il coefficiente di $x$ è $0$) e $\vec{v} = (2, 1, 3)$.
>
> **a)** $\vec{n} \cdot \vec{v} = 0 + 1 + 9 = 10 \neq 0$: la retta non è parallela al piano, quindi sono **incidenti** in un punto. Lo trovo sostituendo le parametriche nell'equazione del piano:
> $$
> t + 3(1 + 3t) = 2 \quad\Longrightarrow\quad 10t + 3 = 2 \quad\Longrightarrow\quad t = -\frac{1}{10}
> $$
> $$
> r \cap \pi = \left(-\frac{6}{5},\ -\frac{1}{10},\ \frac{7}{10}\right)
> $$
> Perpendicolari? Servirebbe $\vec{v}$ proporzionale a $\vec{n}$, ma $\vec{n}$ ha la prima coordinata nulla e $\vec{v}$ no: **non perpendicolari**.
>
> **Verifica.** $-\frac{1}{10} + \frac{21}{10} = 2$.
>
> **b)** Direzione incognita $\vec{u} = (a, b, c)$:
> - perpendicolare a $r$: $\vec{u} \cdot \vec{v} = 2a + b + 3c = 0$;
> - parallela a $\pi$: $\vec{u} \cdot \vec{n} = b + 3c = 0$ (qui la condizione è il prodotto scalare nullo con la normale, non la proporzionalità).
>
> Sottraendo la seconda dalla prima: $2a = 0$, quindi $a = 0$ e $b = -3c$. Con $c = 1$: $\vec{u} = (0, -3, 1)$.
> $$
> r' : \begin{cases} x = 1 \\ y = -3k \\ z = 1 + k \end{cases}
> $$
> **Verifica.** $\vec{u} \cdot \vec{v} = 0 - 3 + 3 = 0$ e $\vec{u} \cdot \vec{n} = 0 - 3 + 3 = 0$.
>
> **c)** $r'$ è parallela a $\pi$. Contenuta o no? $A \in r'$ in $\pi$ dà $0 + 3 \cdot 1 = 3 \neq 2$: **parallela e disgiunta**. Tutti i punti di $r'$ hanno la stessa distanza da $\pi$, quindi basta $A$:
> $$
> d(r', \pi) = d(A, \pi) = \frac{\lvert 0 + 0 + 3 - 2\rvert}{\sqrt{0 + 1 + 9}} = \frac{1}{\sqrt{10}} = \frac{\sqrt{10}}{10}
> $$
> **Verifica.** Sostituendo il punto generico di $r'$ nel piano: $-3k + 3(1 + k) - 2 = 1$ per ogni $k$. Il valore è costante e non nullo, quindi la retta non incontra mai il piano e tutti i suoi punti stanno alla stessa distanza $\frac{1}{\sqrt{10}}$.
>
> **Nota su "perpendicolare".** Nel linguaggio della prof due rette perpendicolari hanno direzioni ortogonali e non devono per forza toccarsi. Qui $r'$ e $r$ sono infatti **sghembe**: dal sistema, $x$ dà $t = 1$, $y$ dà $k = -\frac{1}{3}$, e allora $z$ darebbe $\frac{2}{3} = 4$, falso. Se il testo avesse chiesto anche "incidente a $r$", con la direzione già fissata dalle due condizioni non ci sarebbe stata soluzione.

## Errori tipici

- Scrivere $\overrightarrow{AB}$ come inizio meno fine. È fine meno inizio, l'altro ordine dà il vettore opposto.
- Usare lo stesso parametro $t$ per due rette diverse. Per l'intersezione o la perpendicolare comune servono due lettere (1.14).
- Risolvere il sistema d'incidenza con due equazioni su tre e non verificare la terza.
- Concludere "parallela" da $\vec{n} \cdot \vec{v} = 0$ senza controllare se la retta sta dentro il piano (1.17 c).
- Scambiare le condizioni per retta e piano: parallela è $\vec{n} \cdot \vec{v} = 0$, perpendicolare è la proporzionalità.
- Leggere male la normale di un'equazione a cui manca una variabile: $y + 3z = 2$ ha normale $(0, 1, 3)$, non $(1, 3)$.
- Nel fascio, prendere come punto il punto d'incidenza delle due rette: esce $0 = 0$. E se la condizione dà $\lambda = 0$, non porre $\lambda = 1$: il piano è il secondo (1.15 b).
- Dimenticare il valore assoluto nella distanza punto-piano, o la radice al denominatore, o la seconda soluzione nei piani a distanza data (1.16 b).
- Calcolare la distanza fra due rette senza aver stabilito la posizione reciproca.
- Con il piano del fascio per le rette sghembe, prendere il punto su $r$ invece che sull'altra retta: $r$ sta nel piano e la distanza viene $0$.
- Normalizzare quando non serve: per le posizioni reciproche contano solo direzione e proporzionalità.
- Pensare di aver sbagliato perché il proprio piano è diverso da quello del tutor. Un'equazione moltiplicata per una costante è lo stesso piano: in 1.12 b $-3x - 3y - 2z = 0$ e $3x + 3y + 2z = 0$ sono la stessa risposta.

## Domande

- Perché il sistema che dà una direzione ortogonale a due vettori ha infinite soluzioni, e perché non è un problema?

- Hai $\vec{n} \cdot \vec{v} = 0$ fra la normale di un piano e la direzione di una retta. Cosa hai stabilito e cosa ti manca ancora?

- Quando conviene il fascio di piani invece di cercare direttamente la normale del piano?

- Due rette hanno direzioni proporzionali. Che controllo fai prima di dire che sono parallele?

- Per la distanza fra due rette sghembe, cosa cambia fra il metodo della perpendicolare comune e quello del piano del fascio?

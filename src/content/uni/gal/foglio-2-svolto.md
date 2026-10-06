---
title: Foglio 2 del tutorato svolto
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

Il <span class="src">foglio 2</span> del tutorato, tutto svolto: domande 2.1-2.10 e inizio dell'esercizio 2.11 a <span class="src">p. 1</span>, esercizi 2.11-2.16 a <span class="src">p. 2</span>. Argomento di [Geometria e Algebra Lineare](/uni/gal/). La teoria sta in [Sistemi lineari](/uni/gal/sistemi-lineari/), [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/), con la stessa notazione: $S_{ij}$ scambia le righe $i$ e $j$, $D_i(\lambda)$ moltiplica la riga $i$ per $\lambda \neq 0$, $E_{ij}(\mu)$ fa $R_i \to R_i + \mu R_j$.

Come usarla: prova ogni esercizio da solo, apri l'indizio se ti blocchi, la soluzione solo alla fine. Ogni numero delle soluzioni è stato ricontrollato con il calcolo simbolico e ha la sua verifica sul sistema di partenza.

## Lo schema

Tutti gli esercizi del foglio sono varianti dello stesso procedimento.

```
sistema  ->  [A | b]
               |  Gauss-Jordan: S_ij, D_i(λ), E_ij(μ)
               v
         forma a scalini
               |  conta i pivot: rg(A) nelle prime n colonne, rg(A|b) su tutta
               v
         Rouché-Capelli
               |  rg(A) < rg(A|b)        -> incompatibile
               |  rg(A) = rg(A|b) = n    -> una soluzione
               |  rg(A) = rg(A|b) < n    -> infinite, n - rg(A) parametri
               v
   c'è un parametro k?
               |  sì: i valori critici sono quelli che annullano un pivot
               |      (fattorizza!), e ognuno si ristudia a parte sostituendolo
               v
         soluzioni: riduzione all'indietro, colonne senza pivot = parametri liberi
               |
               v
         verifica sul sistema di partenza
```

## Domande di teoria

**Domanda 2.1. Quali sono le operazioni elementari su un sistema lineare?**

> [!example]- Soluzione
> Sono tre, e la prof le scrive in parallelo sul sistema e sulla matrice completa:
>
> | sul sistema | sulla matrice | sigla |
> | --- | --- | --- |
> | scambiare due equazioni | scambiare le righe $R_i$ e $R_j$ | $S_{ij}$ |
> | moltiplicare un'equazione per uno scalare non nullo | $R_i \to \lambda R_i$ con $\lambda \neq 0$ | $D_i(\lambda)$ |
> | sommare a un'equazione un'altra equazione moltiplicata per $\mu$ | $R_i \to R_i + \mu R_j$ | $E_{ij}(\mu)$ |
>
> In $E_{ij}(\mu)$ cambia la riga $R_i$, mentre $R_j$ resta com'è.
>
> **Perché proprio queste.** Ognuna si disfa con un'altra operazione elementare: $S_{ij}$ con sé stessa, $D_i(\lambda)$ con $D_i(1/\lambda)$, $E_{ij}(\mu)$ con $E_{ij}(-\mu)$. Quindi il sistema nuovo e il vecchio hanno le stesse soluzioni, cioè sono **equivalenti**. Per questo $\lambda \neq 0$: moltiplicare per $0$ cancella un'equazione e non si torna più indietro.
>
> Esempio: in $x + y = 3$, $2x - y = 0$, l'operazione $E_{21}(-2)$ sostituisce la seconda equazione con $(2x - y) - 2(x + y) = 0 - 6$, cioè $-3y = -6$. Il sistema nuovo $x + y = 3$, $-3y = -6$ ha la stessa soluzione $(1, 2)$ del vecchio.

**Domanda 2.2. Dare la definizione di matrice a scalini e di matrice a scalini ridotta per righe, illustrandole con esempi.**

> [!example]- Soluzione
> **Matrice a scalini** (la prof): una matrice è a scalini se per ogni coppia di righe consecutive $R_i, R_{i+1}$ vale una delle due:
> - (a) $R_i$ e $R_{i+1}$ sono non nulle e il numero di zeri che precedono il primo numero non nullo di $R_i$ è inferiore al numero di zeri che precedono il primo numero non nullo di $R_{i+1}$;
> - (b) $R_{i+1}$ è nulla.
>
> In pratica: scendendo, il primo numero non nullo si sposta **strettamente** a destra, e le righe di zeri stanno tutte in fondo.
>
> **Matrice a scalini ridotta per righe** (la prof): è a scalini, ogni pivot vale $1$ ed è l'unico elemento non nullo della sua colonna.
>
> Esempi:
> $$
> M_1 = \begin{pmatrix} 2 & 1 & 5 & 0 \\ 0 & 0 & 3 & 1 \\ 0 & 0 & 0 & 4 \end{pmatrix} \qquad M_2 = \begin{pmatrix} 1 & 4 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \qquad M_3 = \begin{pmatrix} 1 & 2 \\ 0 & 0 \\ 0 & 3 \end{pmatrix}
> $$
> - $M_1$ è a scalini (gli zeri iniziali sono $0, 2, 3$, crescenti) ma **non** ridotta: i pivot $2, 3, 4$ non valgono $1$, e sopra il $3$ c'è un $5$.
> - $M_2$ è **ridotta per righe**: pivot $1$ nelle colonne $1, 3, 4$, e in quelle colonne non c'è altro. Il $4$ sta nella colonna $2$, che non ha pivot, e lì è permesso.
> - $M_3$ **non** è a scalini: una riga nulla sta sopra una riga non nulla. Con $S_{23}$ lo diventa.
>
> La forma a scalini di una matrice non è unica (dipende dalle operazioni scelte); la ridotta per righe sì, ed è $\operatorname{rref}(A)$.

**Domanda 2.3. Cos'è un pivot? Illustrare la risposta con esempi.**

> [!example]- Soluzione
> In una matrice a scalini il **pivot** di una riga non nulla è il suo primo elemento non nullo: lo spigolo dello scalino. Ogni riga non nulla ne ha esattamente uno e due pivot non stanno mai nella stessa colonna.
>
> In $M_1$ della domanda 2.2 i pivot sono $2$ (riga 1, colonna 1), $3$ (riga 2, colonna 3), $4$ (riga 3, colonna 4). La colonna 2 è **senza pivot**.
>
> In
> $$
> \begin{pmatrix} 1 & 3 & 0 & 2 \\ 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> i pivot sono due, nelle colonne 1 e 3. La terza riga è nulla e non ha pivot.
>
> Il pivot ha senso solo **dopo** aver portato la matrice a scalini. In $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ non si parla di pivot della seconda riga: prima si fa $E_{21}(-3)$ e si ottiene $\begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}$, con pivot $1$ e $-2$.
>
> A cosa servono: il numero di pivot è il rango, e nel sistema le colonne con pivot danno le incognite determinate, quelle senza pivot le variabili libere.

**Domanda 2.4. Descrivere i passi dell'algoritmo di Gauss-Jordan per portare una matrice nella forma a scalini.**

> [!example]- Soluzione
> I passi della prof:
> 1. cerca la **prima colonna** con un elemento non nullo, e chiamalo $p_1$;
> 2. con uno scambio $S_{1j}$ porta $p_1$ nella prima riga;
> 3. con operazioni $E_{j1}(\mu)$, $\mu = -a_{j1}/p_1$, azzera tutti gli elementi sotto $p_1$ nella sua colonna;
> 4. ripeti sulla matrice che resta **togliendo la prima riga**, finché le righe rimaste sono nulle o finite.
>
> Le righe che diventano nulle vanno in fondo (o si cancellano, se è la matrice completa di un sistema: dicono $0 = 0$). Conviene scegliere come pivot un $1$ o un $-1$, se c'è in colonna, per evitare le frazioni.
>
> Esempio:
> $$
> M = \begin{pmatrix} 0 & 2 & 4 & 2 \\ 1 & 1 & 1 & 2 \\ 2 & 4 & 6 & 6 \end{pmatrix}
> $$
> La prima colonna non nulla è la colonna 1, ma in alto c'è uno $0$: $S_{12}$ porta su la riga che inizia con $1$. Poi $E_{31}(-2)$: $R_3 - 2R_1 = (0, 2, 4, 2)$.
> $$
> \begin{pmatrix} 1 & 1 & 1 & 2 \\ 0 & 2 & 4 & 2 \\ 0 & 2 & 4 & 2 \end{pmatrix}
> $$
> Si ricomincia dalla riga 2: il pivot è $2$ in colonna 2. $E_{32}(-1)$: $R_3 - R_2 = (0, 0, 0, 0)$.
> $$
> \begin{pmatrix} 1 & 1 & 1 & 2 \\ 0 & 2 & 4 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> È a scalini, con pivot $1$ e $2$.

**Domanda 2.5. Descrivere i passi della riduzione all'indietro per portare una matrice a scalini nella forma ridotta per righe.**

> [!example]- Soluzione
> I passi della prof:
> 1. per ogni pivot $p_i$ applica $D_i\!\left(\frac{1}{p_i}\right)$, così il pivot diventa $1$;
> 2. azzera tutti gli elementi **sopra** il pivot nella sua colonna con operazioni $E_{ji}(\mu)$.
>
> Si parte dal pivot più in basso e si sale: così ogni riga usata per azzerare ha già zeri nelle colonne dei pivot successivi e non sporca quello che è già fatto.
>
> Continuando l'esempio della domanda 2.4: $D_2(\frac{1}{2})$ porta la seconda riga a $(0, 1, 2, 1)$. Sopra il pivot di colonna 2 c'è un $1$: $E_{12}(-1)$, cioè $R_1 - R_2 = (1, 0, -1, 1)$.
> $$
> \operatorname{rref}(M) = \begin{pmatrix} 1 & 0 & -1 & 1 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
> $$
> Pivot $1$ nelle colonne 1 e 2, unici non nulli nelle loro colonne: è ridotta per righe.

**Domanda 2.6. Dare la definizione di rango di una matrice. Qual è il massimo rango possibile per una matrice $3 \times 4$? e per una $4 \times 2$?**

> [!example]- Soluzione
> **Rango** (la prof): $\operatorname{rg}(A)$ è il numero di pivot di una qualunque forma a scalini di $A$. Non dipende dalle operazioni scelte: tutte le forme a scalini di $A$ hanno lo stesso numero di pivot (la prof lo segnala con un NB, e segue dall'unicità di $\operatorname{rref}(A)$). La $M$ della domanda 2.4 ha rango $2$.
>
> **Il limite.** Ogni pivot occupa una riga sua (è il primo non nullo di quella riga) e una colonna sua (due pivot non condividono la colonna). Quindi i pivot non possono essere più delle righe né più delle colonne:
> $$
> \operatorname{rg}(A) \leq \min(m, n) \quad \text{per } A \text{ di ordine } m \times n
> $$
> - $3 \times 4$: rango massimo $3$, limitato dalle righe. Lo raggiunge per esempio $\begin{pmatrix} 1 & 2 & 0 & 3 \\ 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 5 \end{pmatrix}$, già a scalini con tre pivot. Una quarta colonna non può dare un quarto pivot perché manca la riga dove metterlo.
> - $4 \times 2$: rango massimo $2$, limitato dalle colonne. Per esempio $\begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 1 \\ 2 & 0 \end{pmatrix}$ ha rango $2$: dopo aver azzerato le colonne sotto i due pivot, le ultime due righe restano nulle per forza.
>
> Letto sui sistemi: con $4$ equazioni in $2$ incognite al massimo $2$ equazioni sono davvero indipendenti, le altre sono conseguenza o contraddizione.

**Domanda 2.7. Enunciare il Teorema di Rouché-Capelli illustrandolo con esempi.**

> [!example]- Soluzione
> **Teorema (Rouché-Capelli).** Dato un sistema lineare in $n$ incognite con matrice completa $[A \mid \vec{b}]$, il sistema è compatibile **se e solo se** $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}])$. Inoltre, se i ranghi sono uguali:
> 1. se $\operatorname{rg}(A) = n$ c'è un'unica soluzione;
> 2. se $\operatorname{rg}(A) < n$ ci sono infinite soluzioni, che dipendono da $n - \operatorname{rg}(A)$ parametri liberi.
>
> Il confronto è sempre con il numero di **incognite**, mai con quello delle equazioni.
>
> **Perché funziona**, in breve: se $\operatorname{rg}([A \mid \vec{b}]) > \operatorname{rg}(A)$ la forma a scalini ha una riga $(0 \ \cdots \ 0 \mid c)$ con $c \neq 0$, cioè l'equazione $0 = c$. Se i ranghi sono uguali, ogni riga non nulla ha il pivot su un'incognita, e le incognite senza pivot si scelgono liberamente.
>
> Esempi, tutti in $n = 2$ incognite:
>
> | sistema | righe della forma a scalini | $\operatorname{rg}(A)$ | $\operatorname{rg}([A \vert \vec{b}])$ | conclusione |
> | --- | --- | --- | --- | --- |
> | $x + y = 2$, $x - y = 0$ | $(1, 1 \mid 2)$, $(0, -2 \mid -2)$ | $2$ | $2$ | unica, $(1, 1)$ |
> | $x + y = 2$, $2x + 2y = 4$ | $(1, 1 \mid 2)$, $(0, 0 \mid 0)$ | $1$ | $1$ | infinite, $(2 - t, t)$ |
> | $x + y = 2$, $x + y = 3$ | $(1, 1 \mid 2)$, $(0, 0 \mid 1)$ | $1$ | $2$ | incompatibile |
>
> Le forme a scalini vengono da $E_{21}(-1)$, $E_{21}(-2)$, $E_{21}(-1)$. Nel piano: due rette incidenti, la stessa retta scritta due volte, due rette parallele distinte.

**Domanda 2.8. Si fornisca un esempio di un sistema non compatibile formato da due equazioni in tre incognite.**

> [!example]- Soluzione
> $$
> \begin{cases} x + y + z = 1 \\ x + y + z = 2 \end{cases}
> $$
> La stessa quantità $x + y + z$ dovrebbe valere $1$ e $2$. Con $E_{21}(-1)$:
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 2 \end{array}\right] \to \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{array}\right]
> $$
> $\operatorname{rg}(A) = 1$, $\operatorname{rg}([A \mid \vec{b}]) = 2$: per Rouché-Capelli è **incompatibile**. In geometria sono due piani paralleli distinti.
>
> Il punto della domanda: avere meno equazioni che incognite non garantisce soluzioni. Per essere incompatibili con due equazioni in tre incognite le due equazioni devono avere i primi membri proporzionali e i termini noti no.

**Domanda 2.9. Si fornisca un esempio di un sistema compatibile formato da tre equazioni in due incognite.**

> [!example]- Soluzione
> $$
> \begin{cases} x + y = 2 \\ x - y = 0 \\ 2x + y = 3 \end{cases}
> $$
> $E_{21}(-1)$ ed $E_{31}(-2)$, poi $E_{32}(-\frac{1}{2})$:
> $$
> \left[\begin{array}{cc|c} 1 & 1 & 2 \\ 1 & -1 & 0 \\ 2 & 1 & 3 \end{array}\right] \to \left[\begin{array}{cc|c} 1 & 1 & 2 \\ 0 & -2 & -2 \\ 0 & -1 & -1 \end{array}\right] \to \left[\begin{array}{cc|c} 1 & 1 & 2 \\ 0 & -2 & -2 \\ 0 & 0 & 0 \end{array}\right]
> $$
> $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 2 = n$: **compatibile con soluzione unica**, $y = 1$ e $x = 1$.
>
> Verifica: $1 + 1 = 2$, $1 - 1 = 0$, $2 + 1 = 3$. Nel piano sono tre rette che passano tutte per $(1, 1)$. La terza equazione è combinazione delle prime due ($\frac{3}{2}$ della prima più $\frac{1}{2}$ della seconda), quindi non aggiunge vincoli.

**Domanda 2.10. Come si può scegliere, date le equazioni cartesiane di una retta, una variabile da uguagliare al parametro per ottenere le equazioni parametriche?**

> [!example]- Soluzione
> Le equazioni cartesiane di una retta sono un sistema di due equazioni indipendenti in tre incognite, rango $2$. Si riduce la matrice completa a scalini (meglio fino a $\operatorname{rref}$): le colonne **con** pivot sono due, quella **senza** pivot è una. La variabile della colonna senza pivot è libera, e quella si pone uguale al parametro $t$. Le altre due si ricavano dalle righe.
>
> La regola che c'è sotto: si può usare come parametro una variabile solo se, fissata lei, le altre due sono determinate. Non si può scegliere una variabile che sulla retta è **costante**.
>
> Esempio:
> $$
> r: \begin{cases} x + y + z = 1 \\ x + y - z = 3 \end{cases} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 1 & -1 & 3 \end{array}\right] \xrightarrow{E_{21}(-1)} \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & -2 & 2 \end{array}\right]
> $$
> $D_2(-\frac{1}{2})$ dà $(0, 0, 1 \mid -1)$, poi $E_{12}(-1)$ dà $(1, 1, 0 \mid 2)$. Pivot nelle colonne di $x$ e $z$; la colonna di $y$ è senza pivot. Si pone $y = t$:
> $$
> r: \begin{cases} x = 2 - t \\ y = t \\ z = -1 \end{cases} \qquad t \in \mathbb{R}
> $$
> Qui $z$ vale $-1$ su tutta la retta: porre $z = t$ sarebbe sbagliato. Porre $x = t$ invece va bene (dà $y = 2 - t$): anche $x$ e $y$ si possono scambiare di ruolo, perché la riga $x + y = 2$ le lega fra loro. Gauss-Jordan sceglie per te una variabile che funziona di sicuro.
>
> Verifica: $(2 - t) + t + (-1) = 1$ e $(2 - t) + t - (-1) = 3$ per ogni $t$.

## Esercizi

### Esercizio 2.11 (Prova Intermedia 2018)

Si consideri il sistema lineare con matrice dei coefficienti $A$ e vettore dei termini noti $\vec{b}$, dipendenti dal parametro reale $k$:

$$
A = \begin{pmatrix} 2 & 1 & 0 \\ 2 & 2 & 1 \\ 0 & 1 & k-4 \\ 2 & 2 & k-4 \end{pmatrix}, \qquad \vec{b} = \begin{pmatrix} 1 \\ 1-k \\ 0 \\ 1+3k \end{pmatrix}
$$

- a) Si calcoli il rango di $A$ al variare del parametro $k$.
- b) Si trovino (se esistono) i valori di $k$ per i quali il sistema ha soluzione unica.
- c) Per i valori trovati in b), si determini la soluzione del sistema.

> [!tip]- Indizio
> Riduci una volta sola la matrice completa: la prima colonna e la seconda non hanno parametro, quindi i primi due pivot sono gratis. Sono $4$ equazioni in $3$ incognite: $\operatorname{rg}(A) \leq 3$, ma $\operatorname{rg}([A \mid \vec{b}])$ può arrivare a $4$, e allora il sistema è incompatibile.

> [!example]- Soluzione
> **Riduzione.** Il pivot $2$ in alto a sinistra va bene. $E_{21}(-1)$: $R_2 - R_1 = (0, 1, 1 \mid -k)$. $E_{41}(-1)$: $R_4 - R_1 = (0, 1, k-4 \mid 3k)$. La terza riga ha già $0$ in colonna 1.
> $$
> \left[\begin{array}{ccc|c} 2 & 1 & 0 & 1 \\ 2 & 2 & 1 & 1-k \\ 0 & 1 & k-4 & 0 \\ 2 & 2 & k-4 & 1+3k \end{array}\right] \to \left[\begin{array}{ccc|c} 2 & 1 & 0 & 1 \\ 0 & 1 & 1 & -k \\ 0 & 1 & k-4 & 0 \\ 0 & 1 & k-4 & 3k \end{array}\right]
> $$
> Pivot $1$ in colonna 2. $E_{32}(-1)$: $R_3 - R_2 = (0, 0, k-5 \mid k)$. $E_{42}(-1)$: $R_4 - R_2 = (0, 0, k-5 \mid 4k)$. Le ultime due righe hanno lo stesso coefficiente in colonna 3, quindi $E_{43}(-1)$: $R_4 - R_3 = (0, 0, 0 \mid 3k)$.
> $$
> \left[\begin{array}{ccc|c} 2 & 1 & 0 & 1 \\ 0 & 1 & 1 & -k \\ 0 & 0 & k-5 & k \\ 0 & 0 & 0 & 3k \end{array}\right]
> $$
> Nota che $E_{43}(-1)$ si può fare per ogni $k$: non si divide per niente.
>
> **a) Rango di $A$.** Si guardano solo le prime tre colonne. I pivot $2$ e $1$ ci sono sempre; il terzo candidato è $k - 5$.
> - $k \neq 5$: tre pivot, $\operatorname{rg}(A) = 3$.
> - $k = 5$: la terza riga di $A$ diventa $(0, 0, 0)$ e la quarta pure, $\operatorname{rg}(A) = 2$.
>
> $$
> \operatorname{rg}(A) = 3 \text{ per } k \neq 5, \qquad \operatorname{rg}(A) = 2 \text{ per } k = 5
> $$
>
> **b) Soluzione unica.** Serve $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3 = n$. Quindi intanto $k \neq 5$. Ora la quarta riga, $(0, 0, 0 \mid 3k)$:
> - $k \neq 5$ e $k \neq 0$: $3k \neq 0$, la quarta riga ha il pivot nella colonna dei termini noti. $\operatorname{rg}([A \mid \vec{b}]) = 4 > 3 = \operatorname{rg}(A)$: **incompatibile** (l'equazione è $0 = 3k$).
> - $k = 0$: la quarta riga è nulla, $\operatorname{rg}([A \mid \vec{b}]) = 3 = \operatorname{rg}(A) = n$: **soluzione unica**.
> - $k = 5$ (per completezza): le ultime due righe sono $(0, 0, 0 \mid 5)$ e $(0, 0, 0 \mid 15)$. $\operatorname{rg}(A) = 2$, $\operatorname{rg}([A \mid \vec{b}]) = 3$: **incompatibile**.
>
> Il sistema ha soluzione unica **solo per $k = 0$**, e per ogni altro $k$ non ha soluzioni.
>
> **c) Soluzione per $k = 0$.** La matrice diventa (riga nulla cancellata)
> $$
> \left[\begin{array}{ccc|c} 2 & 1 & 0 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & -5 & 0 \end{array}\right]
> $$
> Dal basso: $-5z = 0$ quindi $z = 0$; $y + z = 0$ quindi $y = 0$; $2x + y = 1$ quindi $x = \frac{1}{2}$.
> $$
> \boldsymbol{(x, y, z) = \left(\tfrac{1}{2},\ 0,\ 0\right)} \quad \text{per } k = 0
> $$
> **Verifica** nel sistema di partenza con $k = 0$: $2 \cdot \frac{1}{2} + 0 = 1$; $2 \cdot \frac{1}{2} + 0 + 0 = 1 = 1 - 0$; $0 + (-4) \cdot 0 = 0$; $2 \cdot \frac{1}{2} + 0 + (-4) \cdot 0 = 1 = 1 + 3 \cdot 0$.

### Esercizio 2.12 (CC 4.1)

Risolvere il sistema

$$
\begin{cases} 2x + 4y + 4z = 4 \\ x - z = 1 \\ -x + 3y + 4z = 2 \end{cases}
$$

> [!tip]- Indizio
> Porta in alto la riga che inizia con $1$ ($S_{12}$), così il primo pivot non crea frazioni. Dopo il primo giro le righe 2 e 3 hanno un fattore comune: dividilo con $D_i$ prima di continuare.

> [!example]- Soluzione
> $$
> \left[\begin{array}{ccc|c} 2 & 4 & 4 & 4 \\ 1 & 0 & -1 & 1 \\ -1 & 3 & 4 & 2 \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & 0 & -1 & 1 \\ 2 & 4 & 4 & 4 \\ -1 & 3 & 4 & 2 \end{array}\right]
> $$
> $E_{21}(-2)$: $R_2 - 2R_1 = (0, 4, 6 \mid 2)$. $E_{31}(1)$: $R_3 + R_1 = (0, 3, 3 \mid 3)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & -1 & 1 \\ 0 & 4 & 6 & 2 \\ 0 & 3 & 3 & 3 \end{array}\right] \xrightarrow{D_2(\frac{1}{2}),\ D_3(\frac{1}{3})} \left[\begin{array}{ccc|c} 1 & 0 & -1 & 1 \\ 0 & 2 & 3 & 1 \\ 0 & 1 & 1 & 1 \end{array}\right] \xrightarrow{S_{23}} \left[\begin{array}{ccc|c} 1 & 0 & -1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 2 & 3 & 1 \end{array}\right]
> $$
> $E_{32}(-2)$: $R_3 - 2R_2 = (0, 0, 1 \mid -1)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & -1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & -1 \end{array}\right]
> $$
> Tre pivot in $A$ e in $[A \mid \vec{b}]$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3 = n$, soluzione unica.
>
> **Riduzione all'indietro.** I pivot valgono già $1$. $E_{23}(-1)$: $R_2 - R_3 = (0, 1, 0 \mid 2)$. $E_{13}(1)$: $R_1 + R_3 = (1, 0, 0 \mid 0)$.
> $$
> \left[\begin{array}{ccc|c} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & -1 \end{array}\right]
> $$
> $$
> \boldsymbol{(x, y, z) = (0,\ 2,\ -1)}
> $$
> **Verifica**: $0 + 8 - 4 = 4$; $0 - (-1) = 1$; $0 + 6 - 4 = 2$.

### Esercizio 2.13 (CC 4.2)

Risolvere il sistema omogeneo:

$$
\begin{cases} x + 2y + w = 0 \\ 2x + 5y + 4z + 4w = 0 \\ 3x + 5y - 6z + 4w = 0 \end{cases}
$$

> [!tip]- Indizio
> Omogeneo: lavora sulla sola $A$, la colonna dei termini noti resterebbe di zeri. Occhio all'ordine delle incognite: $x, y, z, w$, e nella prima equazione $z$ manca. Tre equazioni in quattro incognite: almeno un parametro libero ci sarà per forza.

> [!example]- Soluzione
> Incognite in ordine $x, y, z, w$; nella prima equazione $z$ ha coefficiente $0$.
> $$
> A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 5 & 4 & 4 \\ 3 & 5 & -6 & 4 \end{pmatrix}
> $$
> $E_{21}(-2)$: $R_2 - 2R_1 = (0, 1, 4, 2)$. $E_{31}(-3)$: $R_3 - 3R_1 = (0, -1, -6, 1)$. Poi $E_{32}(1)$: $R_3 + R_2 = (0, 0, -2, 3)$.
> $$
> \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 4 & 2 \\ 0 & -1 & -6 & 1 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 1 & 4 & 2 \\ 0 & 0 & -2 & 3 \end{pmatrix}
> $$
> Tre pivot (colonne $x, y, z$), quattro incognite: $\operatorname{rg}(A) = 3 < 4$. Il sistema omogeneo è sempre compatibile, quindi ha **infinite soluzioni** con $4 - 3 = 1$ parametro. La colonna di $w$ è senza pivot: $w$ è la variabile libera.
>
> **Riduzione all'indietro.** $D_3(-\frac{1}{2})$: $(0, 0, 1, -\frac{3}{2})$. $E_{23}(-4)$: $R_2 - 4R_3 = (0, 1, 0, 2 + 6) = (0, 1, 0, 8)$. $E_{12}(-2)$: $R_1 - 2R_2 = (1, 0, 0, 1 - 16) = (1, 0, 0, -15)$; la colonna 3 di $R_1$ era già $0$.
> $$
> \begin{pmatrix} 1 & 0 & 0 & -15 \\ 0 & 1 & 0 & 8 \\ 0 & 0 & 1 & -\frac{3}{2} \end{pmatrix}
> $$
> Ogni riga dice "incognita di pivot $+$ coefficiente $\cdot\, w = 0$". Con $w = t$:
> $$
> \boldsymbol{(x, y, z, w) = \left(15t,\ -8t,\ \tfrac{3}{2}t,\ t\right), \quad t \in \mathbb{R}}
> $$
> Per $t = 0$ c'è la soluzione banale. Se dà fastidio la frazione, con $t = 2s$ si scrive $(30s, -16s, 3s, 2s)$.
>
> **Verifica** con $t = 2$, cioè $(30, -16, 3, 2)$: $30 - 32 + 2 = 0$; $60 - 80 + 12 + 8 = 0$; $90 - 80 - 18 + 8 = 0$.
>
> È lo stesso sistema dell'es. 2 dell'esercitazione 2 del tutor ([Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/)) senza l'equazione $2y + 10z + w = 0$: le soluzioni sono le stesse, perché quella equazione là era superflua.

### Esercizio 2.14 (CC 4.8)

Dato il sistema

$$
\begin{cases} 2x_1 - x_2 = k \\ x_1 - x_2 - x_3 = 0 \\ x_1 - kx_2 + kx_3 = k \end{cases}
$$

- a) Stabilire per quali valori di $k \in \mathbb{R}$ esso è compatibile e per quali valori di $k$ esso ha infinite soluzioni.
- b) Per i valori di $k$ che rendono il sistema compatibile, trovare le sue soluzioni.

> [!tip]- Indizio
> $S_{12}$ mette in alto una riga senza parametro e con pivot $1$. Dopo due giri l'unico pivot che dipende da $k$ è nella terza riga, ed è un'espressione di primo grado: c'è un solo valore critico. Guarda cosa succede al termine noto in quel punto.

> [!example]- Soluzione
> $$
> \left[\begin{array}{ccc|c} 2 & -1 & 0 & k \\ 1 & -1 & -1 & 0 \\ 1 & -k & k & k \end{array}\right] \xrightarrow{S_{12}} \left[\begin{array}{ccc|c} 1 & -1 & -1 & 0 \\ 2 & -1 & 0 & k \\ 1 & -k & k & k \end{array}\right]
> $$
> $E_{21}(-2)$: $R_2 - 2R_1 = (0, 1, 2 \mid k)$. $E_{31}(-1)$: $R_3 - R_1 = (0, 1-k, k+1 \mid k)$.
> $$
> \left[\begin{array}{ccc|c} 1 & -1 & -1 & 0 \\ 0 & 1 & 2 & k \\ 0 & 1-k & k+1 & k \end{array}\right]
> $$
> Il pivot della riga 2 è $1$, senza parametro: per azzerare $1 - k$ sotto di lui serve $E_{32}(k-1)$, cioè $R_3 + (k-1)R_2$:
> - colonna 3: $(k + 1) + 2(k - 1) = 3k - 1$;
> - termine noto: $k + k(k - 1) = k^2$.
>
> (Per $k = 1$ il moltiplicatore è $0$ e l'operazione non fa niente: va bene lo stesso, l'elemento da azzerare era già $0$.)
> $$
> \left[\begin{array}{ccc|c} 1 & -1 & -1 & 0 \\ 0 & 1 & 2 & k \\ 0 & 0 & 3k-1 & k^2 \end{array}\right]
> $$
>
> **a) Ranghi.** Il terzo pivot $3k - 1$ si annulla solo per $k = \frac{1}{3}$.
> - $k \neq \frac{1}{3}$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3 = n$. Compatibile, **soluzione unica**.
> - $k = \frac{1}{3}$: la terza riga diventa $(0, 0, 0 \mid \frac{1}{9})$. $\operatorname{rg}(A) = 2$, $\operatorname{rg}([A \mid \vec{b}]) = 3$: **incompatibile** (l'equazione è $0 = \frac{1}{9}$).
>
> Il sistema è **compatibile se e solo se $k \neq \frac{1}{3}$**, e **non ha mai infinite soluzioni**: quando è compatibile il rango è $3 = n$. La domanda "per quali $k$ ha infinite soluzioni" ha come risposta "nessuno", ed è una risposta legittima.
>
> **b) Soluzioni per $k \neq \frac{1}{3}$.** Si può dividere per $3k - 1$ proprio perché $k \neq \frac{1}{3}$. Dal basso:
> - $x_3 = \dfrac{k^2}{3k-1}$;
> - dalla riga 2, $x_2 = k - 2x_3 = \dfrac{k(3k-1) - 2k^2}{3k-1} = \dfrac{k^2 - k}{3k-1}$;
> - dalla riga 1, $x_1 = x_2 + x_3 = \dfrac{2k^2 - k}{3k-1}$.
>
> $$
> \boldsymbol{(x_1, x_2, x_3) = \left(\frac{k(2k-1)}{3k-1},\ \frac{k(k-1)}{3k-1},\ \frac{k^2}{3k-1}\right), \quad k \neq \tfrac{1}{3}}
> $$
> Caso particolare: per $k = 0$ il sistema è omogeneo e la soluzione unica è $(0, 0, 0)$, come dà la formula.
>
> **Verifica** in generale: $2x_1 - x_2 = \frac{4k^2 - 2k - k^2 + k}{3k-1} = \frac{3k^2 - k}{3k-1} = k$; $x_1 - x_2 - x_3 = \frac{2k^2 - k - k^2 + k - k^2}{3k-1} = 0$; $x_1 - kx_2 + kx_3 = \frac{2k^2 - k - k^3 + k^2 + k^3}{3k-1} = \frac{3k^2 - k}{3k-1} = k$. Con $k = 1$: $(\frac{1}{2}, 0, \frac{1}{2})$ dà $1 = k$, $0$, $\frac{1}{2} + \frac{1}{2} = 1 = k$.

### Esercizio 2.15 (CC 7.1)

Determinare il rango delle seguenti matrici al variare di $t \in \mathbb{R}$:

$$
A_1(t) = \begin{pmatrix} 1 & -4 & 2 \\ 0 & t+1 & -1 \\ 0 & 0 & t-3 \end{pmatrix} \qquad A_2(t) = \begin{pmatrix} 1 & -4 & 2 \\ 0 & t+1 & -1 \\ 0 & 0 & t-3 \\ 0 & 0 & t \end{pmatrix} \qquad A_3(t) = \begin{pmatrix} 1 & 0 & 3 & t \\ 2 & 1 & 2 & t+1 \\ t & 0 & t & 0 \end{pmatrix}
$$

> [!tip]- Indizio
> $A_1$ è già a scalini per i $t$ "generici": cerca dove si annullano i pivot e, per quei valori, riduci la matrice numerica. $A_2$ ha due elementi in colonna 3 sotto la seconda riga che non si annullano mai insieme ($R_4 - R_3$ è costante). In $A_3$ dopo il primo giro la terza riga ha un fattore $t$ comune.

> [!example]- Soluzione
> **$A_1(t)$.** È $3 \times 3$, rango al massimo $3$. È già a scalini se $t + 1 \neq 0$, con pivot $1$, $t + 1$, $t - 3$.
> - $t \neq -1, 3$: tre pivot, **rango 3**.
> - $t = -1$: $A_1(-1) = \begin{pmatrix} 1 & -4 & 2 \\ 0 & 0 & -1 \\ 0 & 0 & -4 \end{pmatrix}$, che **non** è a scalini (la riga 2 e la riga 3 partono dalla stessa colonna). $E_{32}(-4)$: $R_3 - 4R_2 = (0, 0, 0)$. Due pivot: **rango 2**.
> - $t = 3$: $A_1(3) = \begin{pmatrix} 1 & -4 & 2 \\ 0 & 4 & -1 \\ 0 & 0 & 0 \end{pmatrix}$, a scalini con due pivot: **rango 2**.
>
> Il caso $t = -1$ è quello che si sbaglia: non basta contare gli elementi non nulli sulla diagonale, bisogna rimettere la matrice a scalini.
>
> **$A_2(t)$.** È $4 \times 3$, rango al massimo $3$ (le colonne). Le righe 3 e 4 sono $(0, 0, t-3)$ e $(0, 0, t)$: $E_{43}(-1)$ dà $R_4 - R_3 = (0, 0, 3)$, che non dipende da $t$. Poi $S_{34}$ e $E_{43}\!\left(\frac{3-t}{3}\right)$ azzerano $t - 3$ sotto il $3$ (per $t = 3$ è già $0$).
> $$
> \begin{pmatrix} 1 & -4 & 2 \\ 0 & t+1 & -1 \\ 0 & 0 & 3 \\ 0 & 0 & 0 \end{pmatrix}
> $$
> - $t \neq -1$: pivot $1$, $t + 1$, $3$: **rango 3**.
> - $t = -1$: righe 2 e 3 sono $(0, 0, -1)$ e $(0, 0, 3)$; $E_{32}(3)$ annulla la terza. Due pivot: **rango 2**.
>
> Il valore $t = 3$, critico per $A_1$, qui non lo è più: la riga in più $(0, 0, t)$ dà il pivot in colonna 3 quando $t - 3$ si annulla.
>
> **$A_3(t)$.** È $3 \times 4$, rango al massimo $3$ (le righe). Il pivot $1$ in alto non ha parametro. $E_{21}(-2)$: $R_2 - 2R_1 = (0, 1, -4, 1 - t)$. $E_{31}(-t)$: $R_3 - tR_1 = (0, 0, t - 3t, -t^2) = (0, 0, -2t, -t^2)$.
> $$
> \begin{pmatrix} 1 & 0 & 3 & t \\ 0 & 1 & -4 & 1-t \\ 0 & 0 & -2t & -t^2 \end{pmatrix}
> $$
> La terza riga è $-t\,(0, 0, 2, t)$.
> - $t \neq 0$: pivot $-2t \neq 0$ in colonna 3, **rango 3**.
> - $t = 0$: la terza riga è tutta nulla, **rango 2**. (Controllo diretto: $A_3(0)$ ha la terza riga $(0, 0, 0, 0)$, e le prime due non sono proporzionali.)
>
> **Riassunto**
>
> | matrice | rango 3 | rango 2 |
> | --- | --- | --- |
> | $A_1(t)$ | $t \neq -1, 3$ | $t = -1$ oppure $t = 3$ |
> | $A_2(t)$ | $t \neq -1$ | $t = -1$ |
> | $A_3(t)$ | $t \neq 0$ | $t = 0$ |
>
> **Verifica**: i ranghi sono stati ricontrollati sostituendo $t = -1, 0, 1, 3$ nelle matrici di partenza.

### Esercizio 2.16 (CC 7.5)

Si dica per quali valori del parametro reale $k$ il sistema di equazioni lineari

$$
\begin{cases} x + y = 1 \\ kx + y + z = 1 - k \\ y + (1-k)z = 1 \end{cases}
$$

ammette un'unica soluzione.

> [!tip]- Indizio
> Dopo $E_{21}(-k)$ conviene lo scambio $S_{23}$: la riga che era terza ha pivot $1$ senza parametro. Il pivot finale è $1 - (k-1)^2$: fattorizzalo come differenza di quadrati.

> [!example]- Soluzione
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 0 & 1 \\ k & 1 & 1 & 1-k \\ 0 & 1 & 1-k & 1 \end{array}\right]
> $$
> $E_{21}(-k)$: $R_2 - kR_1 = (0,\ 1-k,\ 1 \mid 1 - k - k) = (0, 1-k, 1 \mid 1-2k)$. Il pivot in colonna 2 sarebbe $1 - k$, che si annulla per $k = 1$: meglio $S_{23}$, che porta su la riga con $1$.
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 0 & 1 \\ 0 & 1-k & 1 & 1-2k \\ 0 & 1 & 1-k & 1 \end{array}\right] \xrightarrow{S_{23}} \left[\begin{array}{ccc|c} 1 & 1 & 0 & 1 \\ 0 & 1 & 1-k & 1 \\ 0 & 1-k & 1 & 1-2k \end{array}\right]
> $$
> $E_{32}(k-1)$: $R_3 + (k-1)R_2$ (per $k = 1$ non serve, l'elemento è già $0$).
> - colonna 3: $1 + (k-1)(1-k) = 1 - (k-1)^2 = \big(1 - (k-1)\big)\big(1 + (k-1)\big) = (2-k)\,k$;
> - termine noto: $1 - 2k + (k - 1) = -k$.
>
> $$
> \left[\begin{array}{ccc|c} 1 & 1 & 0 & 1 \\ 0 & 1 & 1-k & 1 \\ 0 & 0 & k(2-k) & -k \end{array}\right]
> $$
>
> **Casi.** Il terzo pivot $k(2-k)$ si annulla per $k = 0$ e $k = 2$.
> - $k \neq 0, 2$: $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 3 = n$, **unica soluzione**.
> - $k = 0$: terza riga $(0, 0, 0 \mid 0)$. $\operatorname{rg}(A) = \operatorname{rg}([A \mid \vec{b}]) = 2 < 3$: **infinite soluzioni**. Con $z = s$: $y = 1 - s$, $x = s$.
> - $k = 2$: terza riga $(0, 0, 0 \mid -2)$. $\operatorname{rg}(A) = 2$, $\operatorname{rg}([A \mid \vec{b}]) = 3$: **incompatibile**.
>
> $$
> \boldsymbol{\text{unica soluzione} \iff k \neq 0 \text{ e } k \neq 2}
> $$
>
> **La soluzione unica** (il testo non la chiede, ma serve per la verifica). Con $k \neq 0, 2$ si divide per $k(2-k)$: $z = \frac{-k}{k(2-k)} = \frac{1}{k-2}$. Poi $y = 1 - (1-k)z = \frac{2k-3}{k-2}$ e $x = 1 - y = \frac{1-k}{k-2}$.
>
> **Verifica** con $k = 1$, cioè $(x, y, z) = (0, 1, -1)$: $0 + 1 = 1$; $0 + 1 - 1 = 0 = 1 - 1$; $1 + 0 \cdot (-1) = 1$. Con $k = 0$ e $s = 1$, cioè $(1, 0, 1)$: $1 + 0 = 1$; $0 + 0 + 1 = 1 = 1 - 0$; $0 + 1 = 1$.

## Errori tipici

- **Dividere per un'espressione col parametro senza escludere dove si annulla.** In 2.14 si divide per $3k - 1$ solo dopo aver tolto $k = \frac{1}{3}$; in 2.16 per $k(2-k)$ solo con $k \neq 0, 2$.
- **Scegliere un pivot col parametro quando ce n'è uno senza.** In 2.16 tenere $1 - k$ come pivot obbliga a dividere in casi già al secondo passo; $S_{23}$ lo evita.
- **Dimenticare un valore critico perché non si fattorizza.** $1 - (k-1)^2$ sembra avere un solo zero a occhio; scritto $k(2-k)$ ne ha due.
- **Guardare solo $\operatorname{rg}(A)$.** In 2.11, per $k \neq 0, 5$ il rango di $A$ è $3 = n$ e verrebbe da dire "soluzione unica": invece $\operatorname{rg}([A \mid \vec{b}]) = 4$ e il sistema è incompatibile. Con più equazioni che incognite la colonna dei termini noti può aggiungere un pivot.
- **Confrontare il rango col numero di equazioni.** In 2.11 ci sono $4$ equazioni ma $n = 3$; in 2.13 ci sono $3$ equazioni ma $n = 4$.
- **Contare i pivot su una matrice che non è a scalini.** $A_1(-1)$ di 2.15 ha righe non nulle $(1, -4, 2)$, $(0, 0, -1)$, $(0, 0, -4)$: contarle dà $3$, ma le ultime due partono dalla stessa colonna. Dopo $E_{32}(-4)$ il rango è $2$.
- **Inventarsi infinite soluzioni.** In 2.14 il sistema, quando è compatibile, ha sempre rango $3$: la risposta a "per quali $k$ infinite soluzioni" è "per nessuno".
- **Sbagliare l'ordine delle incognite quando una manca.** In 2.13 la prima equazione non ha $z$: lo $0$ va in colonna 3, non in fondo.
- **Saltare la verifica sul sistema di partenza.** È l'unico controllo che trova un segno sbagliato a metà riduzione.

## Domande

- Qual è il massimo rango di una matrice $m \times n$, e perché?

- In un sistema di 4 equazioni in 3 incognite, quanto può valere al massimo $\operatorname{rg}([A \mid \vec{b}])$, e cosa succede se raggiunge quel valore?

- Come si trovano i valori critici di un parametro durante la riduzione a scalini?

- Per un valore critico del parametro, cosa decide fra "infinite soluzioni" e "incompatibile"?

- Date le cartesiane di una retta, quale variabile si può porre uguale al parametro, e quale no?

- Un sistema di due equazioni in tre incognite è sempre compatibile? E uno di tre equazioni in due incognite è sempre incompatibile?

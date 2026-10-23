---
title: Introduzione al corso e algoritmi (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-10
lezioni: []
ordine: 0
---

Esercizi tipo esame di [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Per i tracing: tabella delle variabili, una riga per passo eseguito, e la condizione calcolata per esteso.

**Esercizio 1.** Regola del 37% con 100 candidati: quanti ne guardi senza scegliere? Cosa fai se nessuno dei successivi è migliore di tutti quelli visti?

> [!example]- Soluzione
> I primi 37 (il 37% di 100), solo per costruire la classifica. Dal 38° scegli il primo migliore di tutti i precedenti. Se non arriva, arrivi all'ultimo e prendi il migliore della classifica.

**Esercizio 2.** Per ogni problema di' la categoria (calcolo, decisione, ricerca) e per ogni frammento la struttura di controllo (sequenza, selezione, iterazione).

- a) "Il numero 91 è primo?"
- b) "Trova nell'elenco il primo cognome che inizia per Z."
- c) "Converti 30 euro in dollari al cambio 1,08."
- d) `se il semaforo è rosso, fermati, altrimenti prosegui`
- e) `mentre la pentola non bolle, aspetta`
- f) `apri la porta; entra; chiudi la porta`

> [!example]- Soluzione
> Per la categoria si guarda la forma della risposta; per la struttura, se c'è una domanda e se si torna indietro.
>
> - a) decisione: la risposta è sì o no (è no, $91 = 7 \cdot 13$).
> - b) ricerca: la risposta è un elemento dell'elenco, oppure "non c'è".
> - c) calcolo: la risposta è un valore, $30 \cdot 1{,}08 = 32{,}4$ dollari.
> - d) selezione: una domanda, due rami, se ne esegue uno.
> - e) iterazione: dopo "aspetta" si torna alla domanda.
> - f) sequenza: tre passi, sempre tutti, in quell'ordine.

**Esercizio 3.** Questo algoritmo termina? Perché?
```
1. x ← 10
2. mentre x ≠ 0
   2.1 x ← x − 3
3. stampa x
```

> [!example]- Soluzione
> No. $x$ vale 10, 7, 4, 1, −2, −5, … e salta lo 0. La condizione giusta è "mentre $x > 0$", che ferma il ciclo a −2. Ogni ciclo deve avere una condizione che prima o poi diventa falsa **per davvero**, non solo "in teoria".
>
> | giro | condizione | `x` dopo il giro |
> | --- | --- | --- |
> | 1 | 10 ≠ 0 vero | 7 |
> | 2 | 7 ≠ 0 vero | 4 |
> | 3 | 4 ≠ 0 vero | 1 |
> | 4 | 1 ≠ 0 vero | −2 |
> | 5 | −2 ≠ 0 vero | −5 |
>
> Da qui `x` continua a scendere e non varrà mai 0. Con `mentre x > 0` il quinto controllo sarebbe −2 > 0 falso, e si stamperebbe −2.

**Esercizio 4.** Uno schedario ordinato ha 1 000 000 di schede. Quanti confronti fa al massimo la ricerca sequenziale? E la dicotomica?

> [!example]- Soluzione
> Sequenziale: fino a 1 000 000, se il libro è l'ultimo o non c'è.
> Dicotomica: ogni confronto dimezza le schede rimaste, quindi serve il più piccolo $k$ con $2^k \geq 1\,000\,000$. $2^{20} = 1\,048\,576$, quindi al massimo 20 confronti.
>
> Controllo: $2^{19} = 524\,288 < 1\,000\,000$, quindi 19 non bastano. Con la formula della teoria, $\lfloor \log_2 1\,000\,000 \rfloor + 1 = 19 + 1 = 20$.

**Esercizio 5.** Segui a mano l'algoritmo con $a = 21$, $b = 6$. Cosa stampa? Cosa calcola?

```
1. leggi a, b            (interi positivi)
2. mentre a ≠ b
   2.1 se a > b, a ← a − b
       altrimenti b ← b − a
3. stampa a
```

> [!example]- Soluzione
> Si riconosce un'iterazione con dentro una selezione. A ogni giro si toglie il più piccolo dal più grande.
>
> | giro | condizione `a ≠ b` | `a > b`? | `a` | `b` |
> | --- | --- | --- | --- | --- |
> | inizio | | | 21 | 6 |
> | 1 | 21 ≠ 6 vero | 21 > 6 sì, `a ← 21 − 6` | 15 | 6 |
> | 2 | 15 ≠ 6 vero | 15 > 6 sì, `a ← 15 − 6` | 9 | 6 |
> | 3 | 9 ≠ 6 vero | 9 > 6 sì, `a ← 9 − 6` | 3 | 6 |
> | 4 | 3 ≠ 6 vero | 3 > 6 no, `b ← 6 − 3` | 3 | 3 |
> | 5 | 3 ≠ 3 falso, esco | | 3 | 3 |
>
> Stampa 3. È l'algoritmo di Euclide per sottrazioni: calcola il **massimo comune divisore** (il problema di calcolo citato nelle slide). Controllo: $21 = 3 \cdot 7$, $6 = 3 \cdot 2$, e 7 e 2 non hanno divisori comuni, quindi $\text{MCD}(21, 6) = 3$. Termina perché a ogni giro uno dei due numeri cala e restano sempre positivi.

**Esercizio 6.** Schedario di 16 schede in ordine: `2 5 8 12 16 23 29 31 37 40 44 51 56 63 70 77` (posizioni 0-15). Segui la ricerca dicotomica per 44 e per 3, con la centrale in posizione $(\text{inizio} + \text{fine})/2$ arrotondato per difetto. Quanti confronti fa ciascuna? Quanti ne farebbe la sequenziale?

> [!example]- Soluzione
> Cerco 44:
>
> | passo | `inizio` | `fine` | centrale | scheda | confronto |
> | --- | --- | --- | --- | --- | --- |
> | 1 | 0 | 15 | 7 | 31 | 44 > 31: `inizio` ← 8 |
> | 2 | 8 | 15 | 11 | 51 | 44 < 51: `fine` ← 10 |
> | 3 | 8 | 10 | 9 | 40 | 44 > 40: `inizio` ← 10 |
> | 4 | 10 | 10 | 10 | 44 | trovato |
>
> 4 confronti. La sequenziale arriva alla posizione 10: 11 confronti.
>
> Cerco 3:
>
> | passo | `inizio` | `fine` | centrale | scheda | confronto |
> | --- | --- | --- | --- | --- | --- |
> | 1 | 0 | 15 | 7 | 31 | 3 < 31: `fine` ← 6 |
> | 2 | 0 | 6 | 3 | 12 | 3 < 12: `fine` ← 2 |
> | 3 | 0 | 2 | 1 | 5 | 3 < 5: `fine` ← 0 |
> | 4 | 0 | 0 | 0 | 2 | 3 > 2: `inizio` ← 1 |
> | 5 | 1 | 0 | | | `inizio` > `fine`: non c'è |
>
> 4 confronti e poi la parte vuota. La sequenziale senza sfruttare l'ordine guarda tutte le 16 schede. Controllo: con 16 schede la dicotomica fa al massimo $\lfloor \log_2 16 \rfloor + 1 = 5$ confronti, e qui ne fa 4: torna.

**Esercizio 7.** Scrivi in pseudocodice un algoritmo che legge tre numeri e stampa "crescenti" se sono in ordine strettamente crescente, altrimenti "no". Seguilo con $(2, 5, 9)$ e $(2, 9, 5)$. Di che categoria è il problema?

> [!example]- Soluzione
> È un problema di decisione: la risposta è sì o no. Serve una selezione con una condizione composta.
> ```
> 1. leggi a, b, c
> 2. se a < b e b < c
>    2.1 stampa "crescenti"
>    altrimenti
>    2.2 stampa "no"
> ```
>
> | dati | `a < b` | `b < c` | condizione | stampa |
> | --- | --- | --- | --- | --- |
> | 2, 5, 9 | 2 < 5 vero | 5 < 9 vero | vero | crescenti |
> | 2, 9, 5 | 2 < 9 vero | 9 < 5 falso | falso | no |
>
> L'errore tipico è scrivere `a < b < c` come in matematica: in C ha un altro significato (vedi [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/)). In pseudocodice si scrivono sempre i due confronti.

**Esercizio 8.** Scrivi in pseudocodice un algoritmo che legge numeri interi positivi finché non arriva 0 e stampa il più grande. Cosa stampa se il primo numero è 0? Seguilo con l'input `4 9 2 9 7 0`.

> [!example]- Soluzione
> ```
> 1. leggi x
> 2. se x = 0, stampa "nessun numero" e termina
> 3. max ← x
> 4. leggi x
> 5. mentre x ≠ 0
>    5.1 se x > max, max ← x
>    5.2 leggi x
> 6. stampa max
> ```
> Il passo 2 gestisce il caso limite: senza, si stamperebbe 0 come massimo di una sequenza vuota. `max` parte dal primo numero letto e non da 0, così l'algoritmo funzionerebbe anche con numeri negativi. In C è lo schema della sentinella di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).
>
> | passo | `x` | condizione | `max` |
> | --- | --- | --- | --- |
> | 1 | 4 | | |
> | 2 | 4 | 4 = 0 falso | |
> | 3 | 4 | | 4 |
> | 4 | 9 | | 4 |
> | 5 | 9 | 9 ≠ 0 vero; 9 > 4 vero | 9 |
> | 5.2 | 2 | 2 ≠ 0 vero; 2 > 9 falso | 9 |
> | 5.2 | 9 | 9 ≠ 0 vero; 9 > 9 falso | 9 |
> | 5.2 | 7 | 7 ≠ 0 vero; 7 > 9 falso | 9 |
> | 5.2 | 0 | 0 ≠ 0 falso, esco | 9 |
> | 6 | | | stampa 9 |
>
> Il secondo 9 non cambia `max`, perché il confronto è stretto: va bene, il massimo è lo stesso. Lo stesso in C, compilato ed eseguito con l'input `4 9 2 9 7 0`:
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int x;
>     int max;
>
>     scanf("%d", &x);
>     if (x == 0) {
>         printf("nessun numero\n");
>         return 0;
>     }
>     max = x;
>     scanf("%d", &x);
>     while (x != 0) {
>         if (x > max)
>             max = x;
>         scanf("%d", &x);
>     }
>     printf("max = %d\n", max);
>     return 0;
> }
> ```
>
> Output: `max = 9` (verificato). Con input `0` stampa `nessun numero`; con `-5 -2 -8 0` stampa `max = -2` (verificato), che con `max` inizializzato a 0 sarebbe venuto sbagliato.

**Esercizio 9.** Tavoletta di cioccolato $h \times k$: ogni spezzamento divide un pezzo in due lungo una riga. Quanti spezzamenti servono per avere tutti i quadratini separati? La strategia conta?

> [!example]- Soluzione
> Ogni spezzamento trasforma un pezzo in due, quindi aumenta il numero di pezzi di **esattamente** uno. Si parte da 1 pezzo e si arriva a $h \cdot k$: servono $h \cdot k - 1$ spezzamenti, con qualunque strategia. Per $3 \times 4$ sono 11.
>
> Controllo su $2 \times 2$ con due strategie diverse. Strategia A: spezzo lungo la riga (2 pezzi $1 \times 2$), poi ognuno in due: $1 + 2 = 3$ spezzamenti. Strategia B: stacco una colonna (pezzi $2 \times 1$ e $2 \times 1$), poi ognuno in due: di nuovo 3. E $2 \cdot 2 - 1 = 3$. Alla domanda della slide "che cosa si può ottenere da una strategia ottima?" la risposta è: niente, sono tutte ottime.

**Esercizio 10.** Trova gli errori nell'algoritmo per la media di $N$ voti e correggilo. Poi seguilo con $N = 3$ e voti $24, 27, 30$.

```
1. leggi N
2. i ← 1
3. mentre i < N
   3.1 leggi v
   3.2 somma ← somma + v
4. stampa somma / N
```

> [!example]- Soluzione
> Si controlla ogni punto del metodo: valori iniziali, terminazione, casi limite.
> - `somma` non ha un valore iniziale: va messo `somma ← 0` prima del ciclo.
> - `i` non cambia mai dentro il ciclo, quindi il ciclo non termina: serve `i ← i + 1`.
> - con `i` da 1 e `i < N` si leggerebbero solo $N - 1$ voti: serve `i ≤ N`.
> - con $N = 0$ la stampa divide per zero: serve un controllo.
>
> ```
> 1. leggi N
> 2. se N = 0, stampa "nessun voto" e termina
> 3. somma ← 0
> 4. i ← 1
> 5. mentre i ≤ N
>    5.1 leggi v
>    5.2 somma ← somma + v
>    5.3 i ← i + 1
> 6. stampa somma / N
> ```
>
> | passo | condizione | `v` | `somma` | `i` |
> | --- | --- | --- | --- | --- |
> | 3-4 | | | 0 | 1 |
> | 5 | 1 ≤ 3 vero | 24 | 24 | 2 |
> | 5 | 2 ≤ 3 vero | 27 | 51 | 3 |
> | 5 | 3 ≤ 3 vero | 30 | 81 | 4 |
> | 5 | 4 ≤ 3 falso, esco | | 81 | 4 |
> | 6 | | | stampa $81 / 3 = 27$ | |
>
> Controllo: 24, 27, 30 sono equidistanti, quindi la media è quello in mezzo, 27.

**Esercizio 11.** In quanti modi si sale una scala di 4 gradini con passi da 1, 2 o 3? Elencali. Poi trova una regola per passare da $N$ a $N + 1$ e usala per $N = 5$ e $N = 6$.

> [!example]- Soluzione
> 7 modi: `1+1+1+1`, `1+1+2`, `1+2+1`, `2+1+1`, `2+2`, `1+3`, `3+1`. Il ragionamento generale, $S(4) = S(3) + S(2) + S(1) = 4 + 2 + 1$, e il programma sono in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).
>
> Il perché della regola: ogni modo di salire $N$ gradini comincia con un passo da 1, da 2 o da 3. Dopo il primo passo restano $N - 1$, $N - 2$ o $N - 3$ gradini, da salire in uno dei modi già contati. Quindi $S(N) = S(N-1) + S(N-2) + S(N-3)$, con $S(1) = 1$, $S(2) = 2$, $S(3) = 4$.
>
> | $N$ | conto | $S(N)$ |
> | --- | --- | --- |
> | 4 | $4 + 2 + 1$ | 7 |
> | 5 | $S(4) + S(3) + S(2) = 7 + 4 + 2$ | 13 |
> | 6 | $S(5) + S(4) + S(3) = 13 + 7 + 4$ | 24 |
>
> Controllo su $N = 4$: i 7 modi elencati sono 4 che iniziano con 1 (quanti $S(3)$), 2 che iniziano con 2 (quanti $S(2)$), 1 che inizia con 3 (quanti $S(1)$). Valori verificati con un programma che li conta tutti.

**Esercizio 12.** Livello 30. Traduci in C l'algoritmo dell'esercizio 5, con $a = 21$ e $b = 6$ fissati nel codice, stampando `a` e `b` dopo ogni giro. Scrivi l'output esatto. Che succede se $b = 0$?

> [!example]- Soluzione
> Il "mentre" diventa un `while`, il "se ... altrimenti" un `if-else` (sintassi in [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/) e [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)).
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int a;
>     int b;
>
>     a = 21;
>     b = 6;
>     while (a != b) {
>         if (a > b)
>             a = a - b;
>         else
>             b = b - a;
>         printf("a=%d b=%d\n", a, b);
>     }
>     printf("MCD = %d\n", a);
>     return 0;
> }
> ```
>
> Output (verificato):
>
> ```
> a=15 b=6
> a=9 b=6
> a=3 b=6
> a=3 b=3
> MCD = 3
> ```
>
> Coincide riga per riga con la tabella dell'esercizio 5. Con $b = 0$ il ciclo non termina: `a > b` è sempre vero, `a ← a − 0` non cambia niente, e `a ≠ b` resta vero per sempre. È il motivo per cui il passo 1 dice "interi positivi": la precondizione fa parte della definizione del problema.

---
title: Matrici e array multidimensionali (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-02
lezioni: []
ordine: 11
---

Esercizi tipo esame di [Matrici e array multidimensionali](/uni/prog-1/matrici-e-array-multidimensionali/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Nei tracing: la griglia disegnata con gli indici di riga a sinistra e di colonna sopra, i due indici calcolati prima di scrivere nella casella. Gli esercizi 6-8 sono i quadrati a pattern della teorica (usciti 5 volte su 18), l'11 è la matrice di valori casuali uscita nel 2023-26.

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int m[2][3] = {{1}, {4, 5}};
    int i;
    int j;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++)
            printf("%d ", m[i][j]);
        printf("\n");
    }
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un'inizializzazione con una graffa per riga: ogni graffa interna riempie **la sua** riga, e le celle mancanti di quella riga valgono 0.
>
> | | col 0 | col 1 | col 2 |
> | --- | --- | --- | --- |
> | riga 0 (`{1}`) | 1 | 0 | 0 |
> | riga 1 (`{4, 5}`) | 4 | 5 | 0 |
>
> ```
> 1 0 0 
> 4 5 0 
> ```
> (verificato). Con la lista piatta `{1, 4, 5}` invece i valori andrebbero in fila: `1 4 5` e `0 0 0`.

**Esercizio 2.** Con `int a[6][8]`, in che posizione lineare (contando da 0) sta `a[3][5]`? Quanti byte occupa `a` con `int` da 4 byte? Quale di queste dichiarazioni è valida: `int x[][8] = {...}`, `int y[6][] = {...}`?

> [!example]- Soluzione
> - $3 \cdot 8 + 5 = 29$: prima ci sono 3 righe complete da 8, poi 5 celle della riga 3. Il numero di righe (6) non entra nel conto.
> - $6 \cdot 8 \cdot 4 = 192$ byte.
> - È valida solo `int x[][8]`: si può omettere solo la prima dimensione. Senza il numero di colonne il compilatore non sa dove comincia ogni riga.

**Esercizio 3** (SI/NO). Per ogni affermazione rispondi SI o NO e motiva.

- a) `int m[3][4];` dichiara 12 interi, tutti inizializzati a 0.
- b) In memoria `m[1][0]` sta subito dopo `m[0][3]`.
- c) `m[1, 2]` è un modo alternativo di scrivere `m[1][2]`.
- d) `int z[3][3] = {{0}};` mette a 0 tutte e nove le celle.
- e) Con `int c[10][5][20]` la dichiarazione occupa 1000 `int`.
- f) Per sommare la diagonale principale di una $N \times N$ servono due cicli annidati.

> [!example]- Soluzione
> - a) **NO**. Sono 12, ma il loro valore iniziale è indefinito (slide 54).
> - b) **SI**. Il C memorizza per righe: dopo l'ultima cella della riga 0 viene la prima della riga 1.
> - c) **NO**. La virgola è l'operatore virgola: `m[1, 2]` vale `m[2]`, la terza riga intera.
> - d) **SI**. La prima cella prende 0 dalla lista, le altre valgono 0 perché non elencate.
> - e) **SI**. $10 \cdot 5 \cdot 20 = 1000$.
> - f) **NO**. Le celle della diagonale sono `m[i][i]`: basta un ciclo su `i`.

**Esercizio 4.** Scrivi l'output esatto.

```c
#include <stdio.h>

#define N 3

int main(void)
{
    int m[N][N];
    int i;
    int j;
    int traccia = 0;
    int sotto = 0;

    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            m[i][j] = i * N + j;
    for (i = 0; i < N; i++) {
        traccia += m[i][i];
        for (j = 0; j < i; j++)
            sotto += m[i][j];
    }
    printf("m[2][1]=%d traccia=%d sotto=%d\n", m[2][1], traccia, sotto);
    return 0;
}
```

> [!example]- Soluzione
> `m[i][j] = i * 3 + j` riempie la matrice con la posizione lineare di ogni cella:
> ```
> 0 1 2
> 3 4 5
> 6 7 8
> ```
> Il secondo ciclo, con il `for` interno che va solo fino a `j < i`:
>
> | `i` | `m[i][i]` | `traccia` dopo | celle con `j < i` | `sotto` dopo |
> | --- | --- | --- | --- | --- |
> | 0 | 0 | 0 | nessuna (`j < 0` falso subito) | 0 |
> | 1 | 4 | 4 | `m[1][0]` = 3 | 3 |
> | 2 | 8 | 12 | `m[2][0]` = 6, `m[2][1]` = 7 | 16 |
>
> Output: `m[2][1]=7 traccia=12 sotto=16` (verificato). Controllo: `m[2][1]` è la cella lineare $2 \cdot 3 + 1 = 7$, e infatti contiene 7.

**Esercizio 5.** Trova l'errore. `int m[2][3];` e poi:

```
for (i = 0; i < 3; i++)
    for (j = 0; j < 2; j++)
        m[i][j] = 0;
```

> [!example]- Soluzione
> Si confrontano i limiti dei cicli con le dimensioni dichiarate: il primo indice è la riga (2 righe), il secondo la colonna (3 colonne).
>
> | celle scritte | valide? |
> | --- | --- |
> | `m[0][0]`, `m[0][1]`, `m[1][0]`, `m[1][1]` | sì |
> | `m[2][0]`, `m[2][1]` | **no**: la riga 2 non esiste |
> | `m[0][2]`, `m[1][2]` | mai scritte |
>
> I limiti sono scambiati. Per la memoria per righe `m[2][0]` è la cella lineare $2 \cdot 3 + 0 = 6$, appena dopo la fine (celle 0-5): scrive fuori. Corretto: `i < 2` fuori, `j < 3` dentro. Con `#define RIGHE 2` e `#define COLONNE 3` l'errore si vede subito.

**Esercizio 6.** Scrivi l'output esatto per $N = 5$.

```c
#include <stdio.h>

#define N 5

int main(void)
{
    char q[N][N];
    int i;
    int j;

    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            if (i == j || i + j == N - 1)
                q[i][j] = 'X';
            else if (i == 0 || i == N - 1)
                q[i][j] = '-';
            else
                q[i][j] = '.';
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++)
            putchar(q[i][j]);
        putchar('\n');
    }
    return 0;
}
```

> [!example]- Soluzione
> Si riconoscono le condizioni della tabella "Diagonali, triangoli e bordo": `i <mark> j` principale, `i + j </mark> N - 1` secondaria, `i <mark> 0 || i </mark> N - 1` prima e ultima riga.
>
> | `i` | diagonali in `j` = | resto della riga | riga |
> | --- | --- | --- | --- |
> | 0 | 0 e 4 | bordo: `-` | `X---X` |
> | 1 | 1 e 3 | `.` | `.X.X.` |
> | 2 | 2 (le due coincidono) | `.` | `..X..` |
> | 3 | 3 e 1 | `.` | `.X.X.` |
> | 4 | 4 e 0 | bordo: `-` | `X---X` |
>
> ```
> X---X
> .X.X.
> ..X..
> .X.X.
> X---X
> ```
> (verificato). L'ordine degli `if` conta: gli angoli sono sia sulla diagonale sia sul bordo, e vince il primo controllo.

**Esercizio 7.** Scrivi l'output esatto (niente matrice: si decide il carattere cella per cella).

```c
#include <stdio.h>

#define N 5

int main(void)
{
    int i;
    int j;

    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++)
            putchar((i + j) % 3 == 0 ? '*' : '.');
        putchar('\n');
    }
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un pattern "a strisce": $i + j$ è costante lungo le diagonali parallele alla secondaria, quindi le `*` cadono su una diagonale ogni tre.
>
> | `i` | $i + j$ per `j` = 0…4 | `% 3 == 0`? | riga |
> | --- | --- | --- | --- |
> | 0 | 0 1 2 3 4 | sì no no sì no | `*..*.` |
> | 1 | 1 2 3 4 5 | no no sì no no | `..*..` |
> | 2 | 2 3 4 5 6 | no sì no no sì | `.*..*` |
> | 3 | 3 4 5 6 7 | sì no no sì no | `*..*.` |
> | 4 | 4 5 6 7 8 | no no sì no no | `..*..` |
>
> ```
> *..*.
> ..*..
> .*..*
> *..*.
> ..*..
> ```
> (verificato). Controllo: la riga 3 è uguale alla riga 0, perché aggiungere 3 a $i$ non cambia il resto modulo 3.

**Esercizio 8.** Scrivi un programma che, con `#define N 5`, stampa la clessidra qui sotto usando due cicli e **senza** matrici. Deve funzionare per ogni $N$ dispari.

```
*****
 *** 
  *  
 *** 
*****
```

> [!example]- Soluzione
> Si guarda una riga alla volta: in riga $i$ gli asterischi lasciano $d$ spazi a sinistra e $d$ a destra, dove $d$ è la distanza dal bordo più vicino, cioè il minimo fra $i$ (dall'alto) e $N - 1 - i$ (dal basso). La cella $(i, j)$ è `*` se $d \leq j \leq N - 1 - d$.
>
> | `i` | $i$ | $N - 1 - i$ | $d$ | `*` per `j` da … a … |
> | --- | --- | --- | --- | --- |
> | 0 | 0 | 4 | 0 | 0 … 4 |
> | 1 | 1 | 3 | 1 | 1 … 3 |
> | 2 | 2 | 2 | 2 | 2 … 2 |
> | 3 | 3 | 1 | 1 | 1 … 3 |
> | 4 | 4 | 0 | 0 | 0 … 4 |
>
> ```c
> #include <stdio.h>
>
> #define N 5
>
> int main(void)
> {
>     int i;
>     int j;
>     int d;
>
>     for (i = 0; i < N; i++) {
>         d = i < N - 1 - i ? i : N - 1 - i;
>         for (j = 0; j < N; j++)
>             if (j >= d && j <= N - 1 - d)
>                 putchar('*');
>             else
>                 putchar(' ');
>         putchar('\n');
>     }
>     return 0;
> }
> ```
> Stampa esattamente la figura del testo, spazi finali compresi (verificato). Alternativa senza `d`: la condizione `(j >= i && j <= N - 1 - i) || (j <= i && j >= N - 1 - i)` unisce il triangolo superiore e quello inferiore. Controllo con $N = 3$: righe `***`, ` * `, `***`.

**Esercizio 9.** Scrivi un programma che, data una matrice $3 \times 4$, stampa la somma di ogni riga e di ogni colonna con una sola scansione.

> [!example]- Soluzione
> Si riconosce lo schema dei due array di accumulatori, uno per riga e uno per colonna.
> ```c
> #include <stdio.h>
>
> #define RIGHE 3
> #define COLONNE 4
>
> int main(void)
> {
>     int m[RIGHE][COLONNE] = {
>         {1, 2, 3, 4},
>         {5, 6, 7, 8},
>         {9, 10, 11, 12}
>     };
>     int somma_riga[RIGHE] = {0};
>     int somma_colonna[COLONNE] = {0};
>     int i;
>     int j;
>
>     for (i = 0; i < RIGHE; i++)
>         for (j = 0; j < COLONNE; j++) {
>             somma_riga[i] += m[i][j];
>             somma_colonna[j] += m[i][j];
>         }
>     for (i = 0; i < RIGHE; i++)
>         printf("riga %d: %d\n", i, somma_riga[i]);
>     for (j = 0; j < COLONNE; j++)
>         printf("colonna %d: %d\n", j, somma_colonna[j]);
>     return 0;
> }
> ```
>
> | dopo la riga | `somma_riga` | `somma_colonna` |
> | --- | --- | --- |
> | 0 | `10 0 0` | `1 2 3 4` |
> | 1 | `10 26 0` | `6 8 10 12` |
> | 2 | `10 26 42` | `15 18 21 24` |
>
> Stampa righe 10, 26, 42 e colonne 15, 18, 21, 24 (verificato). Controllo: $10 + 26 + 42 = 78 = 15 + 18 + 21 + 24$, la somma totale.

**Esercizio 10.** Il programma vuole trasporre sul posto una matrice $3 \times 3$ ma la stampa resta identica a quella di partenza. Perché? Correggilo.

```
for (i = 0; i < N; i++)
    for (j = 0; j < N; j++) {
        tmp = m[i][j];
        m[i][j] = m[j][i];
        m[j][i] = tmp;
    }
```

> [!example]- Soluzione
> Si segue una coppia, per esempio le celle `(0,1)` e `(1,0)` con valori 2 e 4:
>
> | passo | `(i, j)` | effetto | `m[0][1]` | `m[1][0]` |
> | --- | --- | --- | --- | --- |
> | inizio | | | 2 | 4 |
> | `i = 0`, `j = 1` | (0, 1) | scambio | 4 | 2 |
> | `i = 1`, `j = 0` | (1, 0) | scambio di nuovo | 2 | 4 |
>
> Ogni coppia fuori diagonale viene scambiata **due volte**, e il secondo scambio annulla il primo. Va scambiata solo la parte sopra la diagonale:
> ```c
> #include <stdio.h>
>
> #define N 3
>
> int main(void)
> {
>     int m[N][N] = {
>         {1, 2, 3},
>         {4, 5, 6},
>         {7, 8, 9}
>     };
>     int i;
>     int j;
>     int tmp;
>
>     for (i = 0; i < N; i++)
>         for (j = i + 1; j < N; j++) {
>             tmp = m[i][j];
>             m[i][j] = m[j][i];
>             m[j][i] = tmp;
>         }
>     for (i = 0; i < N; i++) {
>         for (j = 0; j < N; j++)
>             printf("%d ", m[i][j]);
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Stampa `1 4 7`, `2 5 8`, `3 6 9` (verificato); con `j = 0` stampava `1 2 3`, `4 5 6`, `7 8 9`. È la stessa idea della versione 2 della simmetrica e dell'inversione di un array, che scambia solo fino a metà.

**Esercizio 11** (dalla teorica). Riempi una matrice $10 \times 15$ di interi casuali fra 0 e 99, stampala allineata e stampa il valore massimo con la sua riga e colonna (la prima occorrenza).

> [!example]- Soluzione
> Si riconoscono tre schemi: riempimento con due cicli, stampa per righe, massimo con posizione (qui la posizione sono due indici). `rand() % 100` dà un numero fra 0 e 99; `srand(time(NULL))` cambia la sequenza a ogni esecuzione.
> ```c
> #include <stdio.h>
> #include <stdlib.h>
> #include <time.h>
>
> #define RIGHE 10
> #define COLONNE 15
>
> int main(void)
> {
>     int m[RIGHE][COLONNE];
>     int i;
>     int j;
>     int ri = 0;
>     int cj = 0;
>
>     srand(time(NULL));
>     for (i = 0; i < RIGHE; i++)
>         for (j = 0; j < COLONNE; j++)
>             m[i][j] = rand() % 100;
>     for (i = 0; i < RIGHE; i++) {
>         for (j = 0; j < COLONNE; j++) {
>             printf("%3d", m[i][j]);
>             if (m[i][j] > m[ri][cj]) {
>                 ri = i;
>                 cj = j;
>             }
>         }
>         printf("\n");
>     }
>     printf("max %d in riga %d, colonna %d\n", m[ri][cj], ri, cj);
>     return 0;
> }
> ```
> Compila senza warning; l'output cambia a ogni esecuzione (in una prova: `max 99 in riga 1, colonna 13`). `%3d` allinea in colonne larghe 3 caratteri, perché i valori hanno al massimo 2 cifre. Il massimo parte da `m[0][0]`, non da 0, e si aggiorna solo con `>`: così resta la prima occorrenza nell'ordine di scansione (per righe). La ricerca sta nello stesso doppio ciclo della stampa: un'unica scansione.

**Esercizio 12.** Ruota di 90° in senso orario la matrice $3 \times 3$ con righe `1 2 3`, `4 5 6`, `7 8 9`, scrivendo il risultato in una seconda matrice, e stampala.

> [!example]- Soluzione
> Si guarda dove va una riga: ruotando in senso orario la riga 0 (`1 2 3`) diventa l'**ultima colonna** letta dall'alto, la riga 1 la penultima. In generale la riga $i$ diventa la colonna $N - 1 - i$, e la colonna $j$ diventa la riga $j$: `r[j][N - 1 - i] = m[i][j]`.
> ```c
> #include <stdio.h>
>
> #define N 3
>
> int main(void)
> {
>     int m[N][N] = {
>         {1, 2, 3},
>         {4, 5, 6},
>         {7, 8, 9}
>     };
>     int r[N][N];
>     int i;
>     int j;
>
>     for (i = 0; i < N; i++)
>         for (j = 0; j < N; j++)
>             r[j][N - 1 - i] = m[i][j];
>     for (i = 0; i < N; i++) {
>         for (j = 0; j < N; j++)
>             printf("%d ", r[i][j]);
>         printf("\n");
>     }
>     return 0;
> }
> ```
>
> | `m[i][j]` | va in `r[j][2 - i]` |
> | --- | --- |
> | `m[0][0]` = 1, `m[0][1]` = 2, `m[0][2]` = 3 | `r[0][2]`, `r[1][2]`, `r[2][2]` |
> | `m[1][0]` = 4, `m[1][1]` = 5, `m[1][2]` = 6 | `r[0][1]`, `r[1][1]`, `r[2][1]` |
> | `m[2][0]` = 7, `m[2][1]` = 8, `m[2][2]` = 9 | `r[0][0]`, `r[1][0]`, `r[2][0]` |
>
> Output (verificato):
> ```
> 7 4 1 
> 8 5 2 
> 9 6 3 
> ```
> Controllo: l'angolo in alto a sinistra (1) è finito in alto a destra, come in una rotazione oraria. Serve la seconda matrice: sul posto, `r` e `m` sarebbero la stessa e ogni assegnazione distruggerebbe un valore ancora da spostare. È una delle trasformazioni dell'esercizio 13.

**Esercizio 13.** (Slide 99, punto b.) Data una matrice magica $M$ di $N \times N$, sapresti calcolarne altre a partire da $M$? Quante?

> [!example]- Soluzione
> Le **rotazioni** di 90°, 180°, 270° e le **riflessioni** (rispetto all'asse orizzontale, verticale e alle due diagonali) mandano righe in righe o colonne, colonne in colonne o righe, e le due diagonali nelle due diagonali: le somme restano tutte uguali. Con $M$ stessa sono **8** matrici, cioè 7 nuove. La trasposta è la riflessione sulla diagonale principale, la rotazione è quella dell'esercizio 12.
>
> Per una magica normale c'è anche il **complemento**: sostituire ogni elemento $x$ con $n^2 + 1 - x$. Ogni riga di $n$ elementi passa da somma $S$ a $n (n^2 + 1) - S$; con $S = n (n^2 + 1) / 2$ questa vale ancora $S$, e i numeri restano $1, \ldots, n^2$. Per la matrice della slide 96 rotazioni, riflessioni e complemento danno in tutto **16** matrici magiche distinte (verificato con uno script).

**Esercizio 14** (livello del 30). Scrivi l'output esatto.

```c
#include <stdio.h>

#define N 5

int main(void)
{
    int p[N][N] = {{0}};
    int i;
    int j;
    int s = 0;

    for (i = 0; i < N; i++) {
        p[i][0] = 1;
        p[i][i] = 1;
        for (j = 1; j < i; j++)
            p[i][j] = p[i - 1][j - 1] + p[i - 1][j];
    }
    for (j = 0; j < N; j++)
        s += p[N - 1][j];
    printf("riga %d:", N - 1);
    for (j = 0; j <= N - 1; j++)
        printf(" %d", p[N - 1][j]);
    printf(" somma=%d p[3][1]=%d p[1][3]=%d\n", s, p[3][1], p[1][3]);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce che ogni riga si calcola dalla precedente: la cella $(i, j)$ è la somma delle due celle della riga sopra, in colonna $j - 1$ e $j$. È il triangolo di Tartaglia. Il ciclo interno va solo da 1 a $i - 1$, quindi le celle con $j > i$ restano 0 dall'inizializzazione.
>
> | `i` | prima e ultima | celle interne (`j` da 1 a `i - 1`) | riga `p[i][0..4]` |
> | --- | --- | --- | --- |
> | 0 | `p[0][0]` = 1 (due volte) | nessuna | `1 0 0 0 0` |
> | 1 | `p[1][0]` = `p[1][1]` = 1 | nessuna (`1 < 1` falso) | `1 1 0 0 0` |
> | 2 | 1, 1 | `p[2][1]` = 1 + 1 = 2 | `1 2 1 0 0` |
> | 3 | 1, 1 | `p[3][1]` = 1 + 2 = 3, `p[3][2]` = 2 + 1 = 3 | `1 3 3 1 0` |
> | 4 | 1, 1 | `p[4][1]` = 1 + 3 = 4, `p[4][2]` = 3 + 3 = 6, `p[4][3]` = 3 + 1 = 4 | `1 4 6 4 1` |
>
> `s` = $1 + 4 + 6 + 4 + 1 = 16$. `p[1][3]` sta sopra la diagonale, mai scritto: 0.
>
> Output: `riga 4: 1 4 6 4 1 somma=16 p[3][1]=3 p[1][3]=0` (verificato). Controllo: la somma della riga $i$ del triangolo di Tartaglia è $2^i$, e $2^4 = 16$. Se mancasse l'inizializzazione `{{0}}`, `p[1][3]` sarebbe indefinito.

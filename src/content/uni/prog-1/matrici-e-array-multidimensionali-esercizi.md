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

**Esercizio 1.** Scrivi l'output esatto.

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
> `traccia` somma la diagonale: $0 + 4 + 8 = 12$. `sotto` somma le celle con $j < i$: `m[1][0]`, `m[2][0]`, `m[2][1]`, cioè $3 + 6 + 7 = 16$.
>
> Output: `m[2][1]=7 traccia=12 sotto=16` (verificato).

**Esercizio 2.** Scrivi l'output esatto.

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
> ```
> 1 0 0 
> 4 5 0 
> ```
> (verificato). Ogni graffa interna inizializza una riga, e le celle mancanti di **quella** riga valgono 0. Con la lista piatta `{1, 4, 5}` invece i valori andrebbero in fila: `1 4 5` e `0 0 0`.

**Esercizio 3.** Con `int a[6][8]`, in che posizione lineare (contando da 0) sta `a[3][5]`? Quanti byte occupa `a` con `int` da 4 byte? Quale di queste dichiarazioni è valida: `int x[][8] = {...}`, `int y[6][] = {...}`?

> [!example]- Soluzione
> - $3 \cdot 8 + 5 = 29$: prima ci sono 3 righe complete da 8.
> - $6 \cdot 8 \cdot 4 = 192$ byte.
> - È valida solo `int x[][8]`: si può omettere solo la prima dimensione. Senza il numero di colonne il compilatore non sa dove comincia ogni riga.

**Esercizio 4.** Scrivi un programma che, data una matrice $3 \times 4$, stampa la somma di ogni riga e di ogni colonna con una sola scansione.

> [!example]- Soluzione
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
> Stampa righe 10, 26, 42 e colonne 15, 18, 21, 24 (verificato). Controllo: $10 + 26 + 42 = 78 = 15 + 18 + 21 + 24$, la somma totale. Gli accumulatori sono array inizializzati con `{0}`, uno per riga e uno per colonna.

**Esercizio 5.** Il programma vuole trasporre sul posto una matrice $3 \times 3$ ma la stampa resta identica a quella di partenza. Perché? Correggilo.

```
for (i = 0; i < N; i++)
    for (j = 0; j < N; j++) {
        tmp = m[i][j];
        m[i][j] = m[j][i];
        m[j][i] = tmp;
    }
```

> [!example]- Soluzione
> Ogni coppia fuori diagonale viene scambiata **due volte**: con $(i, j) = (0, 1)$ e poi con $(1, 0)$. Il secondo scambio annulla il primo. Va scambiata solo la parte sopra la diagonale:
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
> Le `X` stanno sulle due diagonali, i `-` sulla prima e ultima riga fuori dalle diagonali, il resto è `.`:
> ```
> X---X
> .X.X.
> ..X..
> .X.X.
> X---X
> ```
> (verificato). L'ordine degli `if` conta: gli angoli sono sia sulla diagonale sia sul bordo, e vince il primo controllo.

**Esercizio 7.** Trova l'errore. `int m[2][3];` e poi:

```
for (i = 0; i < 3; i++)
    for (j = 0; j < 2; j++)
        m[i][j] = 0;
```

> [!example]- Soluzione
> I limiti sono scambiati: `i` è l'indice di riga e arriva a 2, ma le righe sono solo 0 e 1. `m[2][0]` e `m[2][1]` sono fuori dalla matrice, e la colonna 2 non viene mai azzerata. Corretto: `i < 2` fuori, `j < 3` dentro. Con `#define RIGHE 2` e `#define COLONNE 3` l'errore si vede subito.

**Esercizio 8.** (Slide 99, punto b.) Data una matrice magica $M$ di $N \times N$, sapresti calcolarne altre a partire da $M$? Quante?

> [!example]- Soluzione
> Le **rotazioni** di 90°, 180°, 270° e le **riflessioni** (rispetto all'asse orizzontale, verticale e alle due diagonali) mandano righe in righe o colonne, colonne in colonne o righe, e le due diagonali nelle due diagonali: le somme restano tutte uguali. Con $M$ stessa sono **8** matrici, cioè 7 nuove.
>
> Per una magica normale c'è anche il **complemento**: sostituire ogni elemento $x$ con $n^2 + 1 - x$. Ogni riga di $n$ elementi passa da somma $S$ a $n (n^2 + 1) - S = S$, e i numeri restano $1, \ldots, n^2$. Per la matrice della slide 96 rotazioni, riflessioni e complemento danno in tutto **16** matrici magiche distinte (verificato con uno script).

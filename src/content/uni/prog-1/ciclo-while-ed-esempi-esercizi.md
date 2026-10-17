---
title: Ciclo while ed esempi (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-27
lezioni: []
ordine: 6
---

Esercizi tipo esame di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** Scrivi l'output esatto e quante volte si esegue il corpo.

```c
#include <stdio.h>

int main(void)
{
    int i = 10;
    int s = 0;

    while (i > 0) {
        s += i % 3;
        i -= 3;
    }
    printf("i=%d s=%d\n", i, s);
    return 0;
}
```

> [!example]- Soluzione
> | giro | `i > 0` | `i % 3` | `s` | `i` dopo |
> | --- | --- | --- | --- | --- |
> | inizio | | | 0 | 10 |
> | 1 | 10 > 0 | 1 | 1 | 7 |
> | 2 | 7 > 0 | 1 | 2 | 4 |
> | 3 | 4 > 0 | 1 | 3 | 1 |
> | 4 | 1 > 0 | 1 | 4 | -2 |
> | | -2 > 0 falso | | | |
>
> 4 giri. Output: `i=-2 s=4` (verificato). `i` non si ferma a 0: esce al primo valore non positivo.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int n = 3725;
    int somma = 0;
    int cifre = 0;

    while (n > 0) {
        somma += n % 10;
        n /= 10;
        cifre++;
    }
    printf("%d %d %d\n", n, somma, cifre);
    return 0;
}
```

> [!example]- Soluzione
> | giro | `n % 10` | `somma` | `n` dopo | `cifre` |
> | --- | --- | --- | --- | --- |
> | 1 | 5 | 5 | 372 | 1 |
> | 2 | 2 | 7 | 37 | 2 |
> | 3 | 7 | 14 | 3 | 3 |
> | 4 | 3 | 17 | 0 | 4 |
>
> Output: `0 17 4` (verificato). È lo schema per sommare le cifre della matricola.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int k = 4;
    int x = 1;

    while (k--)
        x = x * 2 + k;
    printf("k=%d x=%d\n", k, x);
    return 0;
}
```

> [!example]- Soluzione
> `k--` confronta il valore **prima** del decremento, poi decrementa. Il corpo vede già il valore decrementato.
>
> | test | valore testato | `k` nel corpo | `x` |
> | --- | --- | --- | --- |
> | 1 | 4 | 3 | 1·2 + 3 = 5 |
> | 2 | 3 | 2 | 5·2 + 2 = 12 |
> | 3 | 2 | 1 | 12·2 + 1 = 25 |
> | 4 | 1 | 0 | 25·2 + 0 = 50 |
> | 5 | 0, falso | -1 | |
>
> Anche il test che esce decrementa. Output: `k=-1 x=50` (verificato).

**Esercizio 4.** Traccia Euclide per sottrazioni su $(m, n) = (21, 6)$: quanti giri, che MCD?

> [!example]- Soluzione
> | giro | `m` | `n` |
> | --- | --- | --- |
> | inizio | 21 | 6 |
> | 1 | 15 | 6 |
> | 2 | 9 | 6 |
> | 3 | 3 | 6 |
> | 4 | 3 | 3 |
>
> 4 giri, MCD 3 (verificato con il contatore). La definizione avrebbe fatto 6 giri, uno per candidato da 1 a 6.

**Esercizio 5.** Scrivi un programma che legge $N$ e stampa un quadrato $N \times N$ con `*` sul bordo e `.` all'interno. Per $N = 5$:

```
*****
*...*
*...*
*...*
*****
```

> [!example]- Soluzione
> Due cicli annidati: quello esterno scorre le righe `r`, quello interno le colonne `c`. Una casella è di bordo se sta nella prima o ultima riga, o nella prima o ultima colonna.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int N;
>     int r;
>
>     if (scanf("%d", &N) != 1 || N <= 0) {
>         printf("N non valido\n");
>         return 1;
>     }
>     r = 0;
>     while (r < N) {
>         int c = 0;
>         while (c < N) {
>             if (r == 0 || r == N - 1 || c == 0 || c == N - 1)
>                 printf("*");
>             else
>                 printf(".");
>             c++;
>         }
>         printf("\n");
>         r++;
>     }
>     return 0;
> }
> ```
> Verificato con $N = 5$. `c` va rimesso a 0 a ogni riga: per questo è dichiarato dentro il ciclo esterno. Se lo dichiari fuori e lo azzeri solo una volta, stampi solo la prima riga. Con $N = 1$ stampa un solo `*`.

**Esercizio 6.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int N = 4;
    int r = 1;

    while (r <= N) {
        int c = 1;
        while (c <= r) {
            printf("%d", c);
            c++;
        }
        printf("\n");
        r++;
    }
    return 0;
}
```

> [!example]- Soluzione
> La riga `r` stampa i numeri da 1 a `r`:
> ```
> 1
> 12
> 123
> 1234
> ```
> (verificato). In tutto il `printf` interno si esegue $1 + 2 + 3 + 4 = 10$ volte.

**Esercizio 7.** Scrivi un programma che legge un intero non negativo e ne stampa le cifre al contrario come numero (1234 diventa 4321).

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int rovescio = 0;
>
>     if (scanf("%d", &n) != 1 || n < 0) {
>         return 1;
>     }
>     while (n > 0) {
>         rovescio = rovescio * 10 + n % 10;
>         n = n / 10;
>     }
>     printf("%d\n", rovescio);
>     return 0;
> }
> ```
> 1234 dà 4321, 120 dà 21 (lo zero finale diventa uno zero iniziale, che non si stampa). Verificati.

**Esercizio 8.** Traccia il programma della moltiplicazione con $m = 5$, $n = 11$.

> [!example]- Soluzione
> `max` = 11, `min` = 5.
>
> | giro | `min % 2` | `sum` | `mult` | `min` |
> | --- | --- | --- | --- | --- |
> | inizio | | 0 | 11 | 5 |
> | 1 | 1 | 11 | 22 | 2 |
> | 2 | 0 | 11 | 44 | 1 |
>
> Esce con `min` = 1: stampa `n=11`, `m=5`, `mult=55` (verificato).

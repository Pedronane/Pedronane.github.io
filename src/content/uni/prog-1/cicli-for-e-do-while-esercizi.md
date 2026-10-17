---
title: Cicli for e do-while (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-02
lezioni: []
ordine: 8
---

Esercizi tipo esame di [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** Scrivi l'output esatto e quante volte si esegue il corpo.

```c
#include <stdio.h>

int main(void)
{
    int i;
    int s = 0;

    for (i = 10; i > 0; i -= 3) {
        s += i;
    }
    printf("i=%d s=%d\n", i, s);
    return 0;
}
```

> [!example]- Soluzione
> | giro | `i` nel corpo | `s` | `i` dopo espr3 |
> | --- | --- | --- | --- |
> | 1 | 10 | 10 | 7 |
> | 2 | 7 | 17 | 4 |
> | 3 | 4 | 21 | 1 |
> | 4 | 1 | 22 | -2 |
> | | $-2 > 0$ falso | | |
>
> 4 giri. Output: `i=-2 s=22` (verificato).

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 5;
    int giri_while = 0;
    int giri_do = 0;

    while (x < 5) {
        x++;
        giri_while++;
    }
    printf("while: x=%d giri=%d\n", x, giri_while);

    do {
        x++;
        giri_do++;
    } while (x < 5);
    printf("do-while: x=%d giri=%d\n", x, giri_do);
    return 0;
}
```

> [!example]- Soluzione
> ```
> while: x=5 giri=0
> do-while: x=6 giri=1
> ```
> (verificato). La condizione $x < 5$ è falsa da subito: il `while` non entra, il `do-while` fa comunque un giro, porta `x` a 6 e solo dopo controlla.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i < 10; i++) {
        if (i % 3 == 0) continue;
        if (i > 7) break;
        printf("%d ", i);
    }
    printf("\ni=%d\n", i);
    return 0;
}
```

> [!example]- Soluzione
> | `i` | `i % 3` | cosa succede |
> | --- | --- | --- |
> | 0 | 0 | `continue` |
> | 1 | 1 | stampa 1 |
> | 2 | 2 | stampa 2 |
> | 3 | 0 | `continue` |
> | 4, 5 | 1, 2 | stampa 4, 5 |
> | 6 | 0 | `continue` |
> | 7 | 1 | stampa 7 |
> | 8 | 2 | $8 > 7$: `break` |
>
> Output (verificato):
> ```
> 1 2 4 5 7 
> i=8
> ```
> L'ordine dei due `if` conta: il 9 non arriva mai, perché il `break` sull'8 esce prima.

**Esercizio 4.** Quanto vale `conta` alla fine? E `i` e `j`?

```c
#include <stdio.h>

int main(void)
{
    int i;
    int j;
    int conta = 0;

    for (i = 0; i < 4; i++) {
        for (j = i; j < 4; j++) {
            conta++;
        }
    }
    printf("conta=%d i=%d j=%d\n", conta, i, j);
    return 0;
}
```

> [!example]- Soluzione
> Il ciclo interno parte da `i`: fa 4 giri con $i = 0$, 3 con $i = 1$, 2 con $i = 2$, 1 con $i = 3$. In tutto $4 + 3 + 2 + 1 = 10$.
>
> Output: `conta=10 i=4 j=4` (verificato). `j` vale 4 perché l'ultimo ciclo interno, con $i = 3$, esce con $j = 4$.

**Esercizio 5.** Il `for` e il `while` qui sotto sono equivalenti? Se no, correggi il `while`.

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i < 5; i++) {
        if (i == 2) continue;
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}
```

```
i = 0;
while (i < 5) {
    if (i == 2) continue;
    printf("%d ", i);
    i++;
}
```

> [!example]- Soluzione
> No. Il `for` stampa `0 1 3 4`. Nel `while`, quando `i` vale 2 il `continue` salta anche `i++`: `i` resta 2 per sempre e il ciclo non finisce. Nel `for` invece `continue` passa per espr3.
>
> Correzione: aggiornare prima del `continue`.
> ```
> i = 0;
> while (i < 5) {
>     if (i == 2) {
>         i++;
>         continue;
>     }
>     printf("%d ", i);
>     i++;
> }
> ```
> È l'unico caso in cui la traduzione meccanica della slide 9 non basta.

**Esercizio 6.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int k = 0;

    do {
        printf("%d ", k);
        k += 4;
    } while (k < 10);
    printf("| k=%d\n", k);

    k = 20;
    do {
        printf("%d ", k);
        k += 4;
    } while (k < 10);
    printf("| k=%d\n", k);
    return 0;
}
```

> [!example]- Soluzione
> ```
> 0 4 8 | k=12
> 20 | k=24
> ```
> (verificato). Nel secondo ciclo $k = 20$ non soddisfa $k < 10$, ma il corpo gira lo stesso una volta: stampa 20 e porta `k` a 24.

**Esercizio 7.** Scrivi un programma che chiede un intero $n$ fra 1 e 10, ripetendo la domanda finché il valore è fuori range, e poi stampa $n!$ con un `for`.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int letti;
>     int i;
>     int fatt = 1;
>
>     do {
>         printf("n (1-10): ");
>         letti = scanf("%d", &n);
>         if (letti != 1) {
>             return 1;
>         }
>     } while (n < 1 || n > 10);
>
>     for (i = 2; i <= n; i++) {
>         fatt *= i;
>     }
>     printf("%d! = %d\n", n, fatt);
>     return 0;
> }
> ```
> Con input `0`, `12`, `5` chiede tre volte e stampa `5! = 120` (verificato). Il `do-while` è naturale perché la domanda va fatta almeno una volta. La condizione è quella di **errore** ($n < 1$ oppure $n > 10$): si ripete finché il dato è sbagliato. Il limite 10 non è a caso: $10! = 3\,628\,800$ sta in un `int`, $13!$ no. Se `scanf` non legge un numero si esce, altrimenti il ciclo rileggerebbe all'infinito lo stesso carattere non valido.

**Esercizio 8.** Scrivi l'output esatto per $N = 4$.

```c
#include <stdio.h>

int main(void)
{
    int N = 4;
    int r;
    int c;

    for (r = 0; r < N; r++) {
        for (c = 0; c < N; c++) {
            if (c <= r) printf("*");
            else printf(".");
        }
        printf("\n");
    }
    return 0;
}
```

> [!example]- Soluzione
> Nella riga `r` sono `*` le colonne da 0 a `r`:
> ```
> *...
> **..
> ***.
> ****
> ```
> (verificato). Con il `for` non c'è il rischio del `while` di dimenticare di azzerare `c` a ogni riga: espr1 lo fa a ogni ripartenza del ciclo interno.

**Esercizio 9.** Riscrivi con un `for` e poi con un `do-while`, mantenendo lo stesso comportamento per ogni $n$:

```
i = n;
while (i > 0) {
    printf("%d ", i);
    i -= 2;
}
```

> [!example]- Soluzione
> Con il `for`: `for (i = n; i > 0; i -= 2) printf("%d ", i);`
>
> Con il `do-while` serve un `if` davanti, perché per $n \leq 0$ il `while` non stampa niente:
> ```
> i = n;
> if (i > 0) {
>     do {
>         printf("%d ", i);
>         i -= 2;
>     } while (i > 0);
> }
> ```
> Con $n = 7$ tutte e tre stampano `7 5 3 1`. Con $n = 0$ nessuna stampa: senza l'`if` il `do-while` stamperebbe `0`.

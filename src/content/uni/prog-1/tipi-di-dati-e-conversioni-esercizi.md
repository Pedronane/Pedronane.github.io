---
title: Tipi di dati e conversioni (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-14
lezioni: []
ordine: 14
---

Esercizi tipo esame di [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 17;

    printf("%d %d %d %d\n", x / 5, x % 5, -x / 5, -x % 5);
    printf("%d %f %d\n", x / 5 * 5 + x % 5, x / 5.0, (int)(x / 5.0 + 0.5));
    return 0;
}
```

> [!example]- Soluzione
> Prima riga, tutte fra `int`:
> - $17 / 5 = 3$ (tronca 3.4);
> - $17 \% 5 = 2$;
> - $-17 / 5 = -3$ (tronca verso lo zero, non verso $-\infty$: non $-4$);
> - $-17 \% 5 = -2$ (il resto ha il segno del dividendo; controllo: $-3 \cdot 5 + (-2) = -17$).
>
> Seconda riga:
> - `x / 5 * 5 + x % 5`: $3 \cdot 5 + 2 = 17$, l'identità della divisione;
> - `x / 5.0`: `5.0` è `double`, divisione vera, 3.4, stampato `3.400000`;
> - `(int)(x / 5.0 + 0.5)`: $3.4 + 0.5 = 3.9$, troncato a 3. È l'arrotondamento all'intero più vicino.
>
> ```
> 3 2 -3 -2
> 17 3.400000 3
> ```
> (verificato)

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 7;
    int b = 2;
    float f;
    double d;
    int i;
    char c;

    f = a / b;
    d = (double)a / b;
    i = d * 2;
    c = 'A' + a;
    printf("%.1f %.2f %d %c %d\n", f, d, i, c, c);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | calcolo | valore assegnato |
> | --- | --- | --- |
> | `f = a / b` | $7 / 2$ fra `int` = 3 | `f` = 3.0 |
> | `d = (double)a / b` | $7.0 / 2$ fra `double` = 3.5 | `d` = 3.5 |
> | `i = d * 2` | $3.5 \cdot 2 = 7.0$ (`double`) | troncato: `i` = 7 |
> | `c = 'A' + a` | $65 + 7 = 72$ | `c` = 72, cioè `'H'` |
>
> Output: `3.0 3.50 7 H 72` (verificato). `%.1f` e `%.2f` decidono solo quante cifre stampare. `c` stampato con `%c` e con `%d` dà la lettera e il suo codice.

**Esercizio 3.** Scrivi l'output esatto e spiega ogni valore.

```c
#include <stdio.h>

int main(void)
{
    unsigned char u = 250;
    signed char s = 127;
    unsigned int k = 3;

    u = u + 10;
    s = s + 1;
    printf("%d %d\n", u, s);
    if (k - 5 > 0)
        printf("k - 5 = %u\n", k - 5);
    return 0;
}
```

> [!example]- Soluzione
> - `u + 10`: `u` viene promosso a `int`, $250 + 10 = 260$. Riassegnato a un `unsigned char` (8 bit, 0-255) si prende modulo 256: $260 - 256 = 4$.
> - `s + 1`: promosso a `int`, $127 + 1 = 128$. 128 non sta in un `signed char` (-128..127): la conversione è definita dall'implementazione, e gcc tiene gli 8 bit bassi, `10000000`, che in CA2 vale $-128$.
> - `k - 5`: `k` è `unsigned` e 5 viene convertito in `unsigned`, quindi la sottrazione è senza segno: $3 - 5$ modulo $2^{32}$ fa $2^{32} - 2 = 4294967294$. Un `unsigned` non è mai negativo, quindi `k - 5 > 0` è vero.
>
> ```
> 4 -128
> k - 5 = 4294967294
> ```
> (verificato su gcc x86-64)

**Esercizio 4.** Scrivi l'output esatto (gcc, x86-64).

```c
#include <stdio.h>

int main(void)
{
    char c = 'a';
    double x = 1;

    printf("%zu %zu %zu %zu %zu\n", sizeof(c), sizeof('a'), sizeof(c + 1), sizeof(3.0f), sizeof(x + 1));
    return 0;
}
```

> [!example]- Soluzione
> `sizeof` di un'espressione è la dimensione del **tipo** del risultato (l'espressione non viene nemmeno calcolata).
> - `sizeof(c)`: `char`, 1.
> - `sizeof('a')`: in C una costante carattere ha tipo **`int`**, quindi 4. (In C++ sarebbe 1: è un classico trabocchetto.)
> - `sizeof(c + 1)`: `c` viene promosso a `int`, risultato `int`, 4.
> - `sizeof(3.0f)`: la `f` finale fa della costante un `float`, 4.
> - `sizeof(x + 1)`: `double` più `int` dà `double`, 8.
>
> Output: `1 4 4 4 8` (verificato).

**Esercizio 5.** Scrivi un programma che legge $N$ voti interi (prima $N$, poi i voti) e stampa la media con due decimali. Attenzione alla divisione.

> [!example]- Soluzione
> Si riconosce dalla parola "media": somma di interi divisa per un intero, cioè una divisione intera nascosta. Il cast va su un operando.
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int i;
>     int voto;
>     int somma = 0;
>
>     if (scanf("%d", &n) != 1 || n <= 0) {
>         printf("input non valido\n");
>         return 1;
>     }
>     for (i = 0; i < n; i++) {
>         if (scanf("%d", &voto) != 1) {
>             printf("input non valido\n");
>             return 1;
>         }
>         somma += voto;
>     }
>     printf("media %.2f\n", (double)somma / n);
>     return 0;
> }
> ```
>
> Con input `4  28 30 25 26` stampa `media 27.25` (verificato: $109 / 4 = 27.25$). Con `(double)(somma / n)` stamperebbe 27.00, perché la divisione intera avviene prima del cast; con `somma / n` e basta il risultato sarebbe un `int` passato a `%f`, un errore di formato che gcc segnala. Il controllo `n <= 0` evita la divisione per zero.

**Esercizio 6.** (Livello 30) Quante volte gira il ciclo? Cosa stampa?

```c
#include <stdio.h>

int main(void)
{
    double x;
    int n = 0;

    for (x = 0.0; x < 1.0; x += 0.1)
        n++;
    printf("%d %.17f\n", n, x);
    return 0;
}
```

> [!example]- Soluzione
> Ragionando sui reali: $x$ vale 0, 0.1, ..., 0.9, poi 1.0 non è $< 1$: 10 giri. Ma 0.1 non è rappresentabile esattamente in binario, e dieci somme di "quasi 0.1" danno $0.9999999999999999$, che **è** minore di 1. Il ciclo fa un giro in più.
>
> Output: `11 1.09999999999999987` (verificato). È l'avvertenza della slide 26 in forma di ciclo. Per contare $k$ passi si usa un contatore intero e si calcola `x = i * 0.1`, oppure si confronta con una soglia (`x < 1.0 - EPSILON`).

**Esercizio 7.** Vero o falso?

- a) Su ogni macchina `sizeof(int)` vale 4.
- b) `sizeof(char)` vale 1 su ogni macchina.
- c) Con `int a = 5, b = 2;` l'espressione `(float)(a / b)` vale 2.5.
- d) Un `unsigned int` può valere $-1$.
- e) `if (a == b)` con `a` e `b` `float` è sempre affidabile.
- f) Nell'assegnazione `int i = 3.99;` la variabile `i` vale 4.
- g) Signed e unsigned dello stesso tipo occupano lo stesso numero di bit.

> [!example]- Soluzione
> - a) **Falso**. Dipende dall'implementazione (slide 11): di solito 4, ma su macchine a 16 bit era 2.
> - b) **Vero**. È la definizione di `sizeof`: si misura in `char`.
> - c) **Falso**. Il cast agisce sul risultato di `a / b`, già troncato a 2: vale 2.0. Serve `(float)a / b`.
> - d) **Falso**. Assegnargli $-1$ si può, ma viene convertito modulo $2^N$ e diventa il massimo, 4294967295 con 32 bit.
> - e) **Falso**. Le approssimazioni possono rendere diversi due valori "uguali": si usa una soglia.
> - f) **Falso**. La conversione da floating a intero tronca: 3.
> - g) **Vero**. Cambia l'interpretazione dell'MSB, non lo spazio (slide 14).

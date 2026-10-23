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

Dal più facile al livello del 30. Per ogni espressione: tipi dei due operandi di ogni operazione, poi il valore; per ogni assegnazione, il tipo della variabile a sinistra. Tutti gli output sono verificati compilando con `gcc -std=c11 -Wall -Wextra -Wpedantic` su Linux x86-64.

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

**Esercizio 2.** Per ogni espressione scrivi tipo e valore, poi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 7;
    int b = 2;
    double d = 2.0;

    printf("%d %d\n", a / b, a % b);
    printf("%.2f %.2f %.2f\n", a / d, (double)(a / b), (double)a / b);
    printf("%.2f %.2f\n", a / b * d, d * a / b);
    printf("%d %c\n", a + '0', a + '0');
    return 0;
}
```

> [!example]- Soluzione
> Un'operazione alla volta, guardando i tipi dei due operandi.
>
> | espressione | passaggi | tipo | valore |
> | --- | --- | --- | --- |
> | `a / b` | `int` / `int`: intera | `int` | 3 |
> | `a % b` | resto di $7 / 2$ | `int` | 1 |
> | `a / d` | 7 sale a 7.0, $7.0 / 2.0$ | `double` | 3.50 |
> | `(double)(a / b)` | prima $7 / 2 = 3$ fra `int`, poi il cast | `double` | 3.00 |
> | `(double)a / b` | cast su `a`: 7.0, poi $7.0 / 2.0$ | `double` | 3.50 |
> | `a / b * d` | da sinistra: $7 / 2 = 3$ intera, poi $3.0 \cdot 2.0$ | `double` | 6.00 |
> | `d * a / b` | da sinistra: $2.0 \cdot 7 = 14.0$, poi $14.0 / 2.0$ | `double` | 7.00 |
> | `a + '0'` | $7 + 48$ | `int` | 55, che con `%c` è `'7'` |
>
> Output (verificato):
> ```
> 3 1
> 3.50 3.00 3.50
> 6.00 7.00
> 55 7
> ```
> La terza riga è il punto: stessi operandi, stesse operazioni, ma l'ordine decide se la divisione è intera. L'ultima è il contrario di `c - '0'`: da cifra a carattere.

**Esercizio 3.** Scrivi l'output esatto.

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

**Esercizio 4.** Dove sta il cast cambia il risultato. Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    float x = 7.6f;

    printf("%d\n", (int)x * 2);
    printf("%d\n", (int)(x * 2));
    printf("%.1f\n", (int)x / 2.0);
    printf("%d\n", (int)x / 2);
    return 0;
}
```

> [!example]- Soluzione
> Il cast è unario: lega più di `*` e `/`, e si applica solo a ciò che lo segue subito (una variabile o una parentesi).
>
> | espressione | si legge | calcolo | valore |
> | --- | --- | --- | --- |
> | `(int)x * 2` | `((int)x) * 2` | 7.6 troncato a 7, poi $7 \cdot 2$ | 14 |
> | `(int)(x * 2)` | | $7.6 \cdot 2 = 15.2$, troncato | 15 |
> | `(int)x / 2.0` | `((int)x) / 2.0` | $7 / 2.0$, divisione vera | 3.5 |
> | `(int)x / 2` | `((int)x) / 2` | $7 / 2$, intera | 3 |
>
> Output: `14`, `15`, `3.5`, `3` (verificato). Le prime due differiscono perché nella prima la parte frazionaria si perde **prima** della moltiplicazione.

**Esercizio 5.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "472";
    int n = 0;
    int i;

    for (i = 0; s[i] != '\0'; i++)
        n = n * 10 + (s[i] - '0');
    printf("%d %d\n", n, n + 1);
    printf("%c%c\n", s[0] + 1, 'A' + (s[2] - '0'));
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce la conversione da stringa di cifre a numero: ogni carattere meno `'0'` dà la cifra, e moltiplicare per 10 sposta a sinistra quelle già lette (come lo shift in binario).
>
> | `i` | `s[i]` | `s[i] - '0'` | `n = n * 10 + ...` |
> | --- | --- | --- | --- |
> | | | | 0 |
> | 0 | `'4'` (52) | $52 - 48 = 4$ | $0 \cdot 10 + 4 = 4$ |
> | 1 | `'7'` (55) | 7 | $4 \cdot 10 + 7 = 47$ |
> | 2 | `'2'` (50) | 2 | $47 \cdot 10 + 2 = 472$ |
> | 3 | `'\0'` | il ciclo si ferma | |
>
> Seconda riga: `s[0] + 1` è $52 + 1 = 53$, cioè `'5'`; `'A' + (s[2] - '0')` è $65 + 2 = 67$, cioè `'C'`.
>
> Output (verificato):
> ```
> 472 473
> 5C
> ```
> `n + 1` fa 473 perché `n` è un vero `int`: la stringa `"472"` + 1 non avrebbe senso.

**Esercizio 6.** Scrivi l'output esatto e spiega ogni valore.

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

**Esercizio 7.** Scrivi l'output esatto (gcc, x86-64).

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

**Esercizio 8.** Con `int a = 5, b = 2;` e `float f;`, quale assegnazione mette 2.5 in `f`?

- a) `f = a / b;`
- b) `f = (float)(a / b);`
- c) `f = a / (float)b;`
- d) `f = (a / b) * 1.0;`

> [!example]- Soluzione
> **c**. Basta che **uno** degli operandi della divisione sia floating: `(float)b` vale 2.0, `a` sale a 5.0, $5.0 / 2.0 = 2.5$.
> - a) $5 / 2 = 2$ fra `int`, poi 2.0 nell'assegnazione.
> - b) il cast arriva dopo la divisione intera: 2.0.
> - d) le parentesi fanno prima $5 / 2 = 2$, poi $2 \cdot 1.0 = 2.0$. Il `1.0` servirebbe solo **prima** della divisione: `a * 1.0 / b` dà 2.5.

**Esercizio 9.** Scrivi un programma che legge $N$ voti interi (prima $N$, poi i voti) e stampa la media con due decimali. Attenzione alla divisione.

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

**Esercizio 10.** (Livello 30) Il programma dovrebbe calcolare $1 + \frac12 + \frac13 + \frac14$. Scrivi l'output esatto e spiega perché `s` e `t` sono diversi.

```c
#include <stdio.h>

int main(void)
{
    float s = 0;
    float t = 0;
    int i;

    for (i = 1; i <= 4; i++) {
        s += 1 / i;
        t += 1.0 / i;
    }
    printf("%f %f\n", s, t);
    return 0;
}
```

> [!example]- Soluzione
> È l'errore della slide 101 (Leibniz) in piccolo: `1 / i` è fra due `int`, e per $i \geq 2$ vale 0. Che `s` sia `float` non cambia il tipo della divisione a destra.
>
> | `i` | `1 / i` (intera) | `s` dopo | `1.0 / i` | `t` dopo |
> | --- | --- | --- | --- | --- |
> | | | 0.0 | | 0.0 |
> | 1 | 1 | 1.0 | 1.0 | 1.000000 |
> | 2 | 0 | 1.0 | 0.5 | 1.500000 |
> | 3 | 0 | 1.0 | 0.333333 | 1.833333 |
> | 4 | 0 | 1.0 | 0.25 | 2.083333 |
>
> Output: `1.000000 2.083333` (verificato). Controllo: $1 + 0.5 + 0.3\overline{3} + 0.25 = 25/12 = 2.08\overline{3}$.

**Esercizio 11.** (Livello 30) Quante volte gira il ciclo? Cosa stampa?

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
> Ragionando sui reali: $x$ vale 0, 0.1, ..., 0.9, poi 1.0 non è $< 1$: 10 giri. Ma 0.1 non è rappresentabile esattamente in binario ($0.0\overline{0011}_2$, vedi [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/)), e dieci somme di "quasi 0.1" danno $0.9999999999999999$, che **è** minore di 1. Il ciclo fa un giro in più.
>
> Output: `11 1.09999999999999987` (verificato). È l'avvertenza della slide 26 in forma di ciclo. Per contare $k$ passi si usa un contatore intero e si calcola `x = i * 0.1`, oppure si confronta con una soglia (`x < 1.0 - EPSILON`).

**Esercizio 12.** (Livello 30) Quante volte gira il ciclo? Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    unsigned int i;
    int giri = 0;

    for (i = 3; i < 10; i--) {
        printf("%u ", i);
        giri++;
    }
    printf("\n%d %u\n", giri, i);
    return 0;
}
```

> [!example]- Soluzione
> Sembra un ciclo infinito (si parte da 3, si decrementa, la condizione è "minore di 10"). Ma `i` è `unsigned`: sotto lo 0 non scende, riparte dal massimo.
>
> | giro | `i` | `i < 10` | stampa | `i--` |
> | --- | --- | --- | --- | --- |
> | 1 | 3 | vero | `3 ` | 2 |
> | 2 | 2 | vero | `2 ` | 1 |
> | 3 | 1 | vero | `1 ` | 0 |
> | 4 | 0 | vero | `0 ` | $0 - 1$ modulo $2^{32}$ = 4294967295 |
> | | 4294967295 | falso, esce | | |
>
> Output (verificato, c'è uno spazio dopo lo 0):
> ```
> 3 2 1 0 
> 4 4294967295
> ```
> Con la condizione `i >= 0` il ciclo sarebbe davvero infinito: per un `unsigned` è sempre vera (gcc `-Wextra` avvisa: `comparison of unsigned expression in '>= 0' is always true`).

**Esercizio 13.** Vero o falso?

- a) Su ogni macchina `sizeof(int)` vale 4.
- b) `sizeof(char)` vale 1 su ogni macchina.
- c) Con `int a = 5, b = 2;` l'espressione `(float)(a / b)` vale 2.5.
- d) Un `unsigned int` può valere $-1$.
- e) `if (a == b)` con `a` e `b` `float` è sempre affidabile.
- f) Nell'assegnazione `int i = 3.99;` la variabile `i` vale 4.
- g) Signed e unsigned dello stesso tipo occupano lo stesso numero di bit.
- h) Assegnare un `int` a un `float` non perde mai informazione.
- i) In `x + 'a'`, con `x` di tipo `int`, il carattere viene convertito in `int`.

> [!example]- Soluzione
> - a) **Falso**. Dipende dall'implementazione (slide 11): di solito 4, ma su macchine a 16 bit era 2.
> - b) **Vero**. È la definizione di `sizeof`: si misura in `char`.
> - c) **Falso**. Il cast agisce sul risultato di `a / b`, già troncato a 2: vale 2.0. Serve `(float)a / b`.
> - d) **Falso**. Assegnargli $-1$ si può, ma viene convertito modulo $2^N$ e diventa il massimo, 4294967295 con 32 bit.
> - e) **Falso**. Le approssimazioni possono rendere diversi due valori "uguali": si usa una soglia.
> - f) **Falso**. La conversione da floating a intero tronca: 3.
> - g) **Vero**. Cambia l'interpretazione dell'MSB, non lo spazio (slide 14).
> - h) **Falso**. Un `float` ha 24 bit di mantissa: `float f = 16777217;` memorizza 16777216 (verificato).
> - i) **Vero**. Promozione intera (slide 93): `char` e `short` diventano `int` in ogni espressione; in C `'a'` è già un `int`.

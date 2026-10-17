---
title: Istruzioni condizionali (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-27
lezioni: []
ordine: 5
---

Esercizi tipo esame di [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Per i tracing: tabella delle variabili, una riga per istruzione, e la condizione calcolata per esteso.

**Esercizio 1.** L'1a della slide con `x = 5`. Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x;
    int y;
    int z;

    y = 1;
    z = 0;
    x = 5;
    if (x <= 1)
        y = 0;
    z = 1;
    printf("x=%d y=%d z=%d\n", x, y, z);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un `if` senza graffe: il ramo è solo `y = 0;`, fino al primo `;`.
>
> | istruzione | `x` | `y` | `z` |
> | --- | --- | --- | --- |
> | `y = 1; z = 0; x = 5;` | 5 | 1 | 0 |
> | `if (x <= 1)`: 5 <= 1 falso, salto `y = 0;` | 5 | 1 | 0 |
> | `z = 1;` (fuori dall'`if`, eseguita sempre) | 5 | 1 | 1 |
>
> Output: `x=5 y=1 z=1` (verificato). Controllo: rispetto alla slide cambia solo `y`, perché solo `y = 0;` dipende dalla condizione.

**Esercizio 2.** Metti tutte le parentesi implicite in `x + 1 > y * 2 || !z && y != 0`, poi calcola il valore con $x = 2$, $y = 1$, $z = 0$.

> [!example]- Soluzione
> Si procede dal gruppo più forte al più debole: unari, moltiplicativi, additivi, relazionali, uguaglianza, `&&`, `||`.
> ```
> x + 1 > y * 2 || !z && y != 0
> x + 1 > y * 2 || (!z) && y != 0                    unario !
> x + 1 > (y * 2) || (!z) && y != 0                  moltiplicativo
> (x + 1) > (y * 2) || (!z) && y != 0                additivo
> ((x + 1) > (y * 2)) || (!z) && y != 0              relazionale
> ((x + 1) > (y * 2)) || (!z) && (y != 0)            uguaglianza
> ((x + 1) > (y * 2)) || ((!z) && (y != 0))          && prima di ||
> ```
> Con i valori: `x + 1` vale 3, `y * 2` vale 2, `3 > 2` vale 1. L'`||` ha già il primo operando vero, quindi la parte destra non si valuta: il risultato è 1 (verificato). Controllo: anche valutandola, `!0 && 1 != 0` darebbe 1, e `1 || 1` resta 1.

**Esercizio 3.** Con quali valori di `a` e `b` il frammento stampa `Z`? Metti le graffe che rendono esplicito ciò che fa il compilatore.

```
if (a > 0)
    if (b > 0)
        printf("X");
else
    printf("Z");
```

> [!example]- Soluzione
> Si riconosce un dangling else: due `if` e un solo `else`. L'indentazione inganna: l'`else` va al secondo `if`, il più vicino. Con le graffe:
> ```
> if (a > 0) {
>     if (b > 0)
>         printf("X");
>     else
>         printf("Z");
> }
> ```
> Stampa `Z` quando $a > 0$ e $b \leq 0$. Con $a \leq 0$ non stampa niente. Verificato con $a = 1$, $b = 0$: stampa `Z`, e gcc avvisa `suggest explicit braces to avoid ambiguous 'else'`.

**Esercizio 4.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 4;
    int y = 7;
    int z = 0;

    if (x > 2 && y < 5)
        z = 1;
    else if (x % 2 == 0)
        z = 2;
    else
        z = 3;

    if (z == 2) {
        if (y > x)
            y = y - x;
        else
            x = x - y;
    }
    z += x > y ? x : y;
    printf("%d %d %d\n", x, y, z);
    return 0;
}
```

> [!example]- Soluzione
> Tre pezzi: una catena `else if`, un `if` annidato dentro le graffe, un `?:` alla fine.
>
> | istruzione | calcolo | `x` | `y` | `z` |
> | --- | --- | --- | --- | --- |
> | dichiarazioni | | 4 | 7 | 0 |
> | `if (x > 2 && y < 5)` | `1 && 0` vale 0, falso | 4 | 7 | 0 |
> | `else if (x % 2 <mark> 0)` | `4 % 2` vale 0, `0 </mark> 0` vero | 4 | 7 | 0 |
> | `z = 2;` | | 4 | 7 | 2 |
> | `if (z == 2)` | vero, si entra nel blocco | 4 | 7 | 2 |
> | `if (y > x)` | 7 > 4 vero | 4 | 7 | 2 |
> | `y = y - x;` | 7 - 4 | 4 | 3 | 2 |
> | `z += x > y ? x : y;` | `z += ((x > y) ? x : y)`: 4 > 3 vero, vale 4; 2 + 4 | 4 | 3 | 6 |
>
> Output: `4 3 6` (verificato). Sull'ultima riga: `+=` ha la precedenza più bassa, quindi prima si calcola tutto il `?:` e poi si somma.

**Esercizio 5** (stile matricola). Scrivi l'output con `matricola = 238517`.

```c
#include <stdio.h>

int main(void)
{
    int matricola = 238517;
    int u = matricola % 10;
    int d = matricola / 10 % 10;
    int r;

    r = u % 2 ? u * 2 : u / 2;
    if (d > u)
        r = r + d;
    else
        r = r - d;
    printf("u=%d d=%d r=%d\n", u, d, r);
    return 0;
}
```

> [!example]- Soluzione
> Prima le cifre: `% 10` dà l'ultima cifra, `/ 10` la toglie. `/` e `%` hanno la stessa precedenza e associano da sinistra, quindi `matricola / 10 % 10` è `(matricola / 10) % 10`.
>
> | istruzione | calcolo | `u` | `d` | `r` |
> | --- | --- | --- | --- | --- |
> | `u = matricola % 10;` | 238517 % 10 | 7 | | |
> | `d = matricola / 10 % 10;` | 23851 % 10 | 7 | 1 | |
> | `r = u % 2 ? u * 2 : u / 2;` | `7 % 2` vale 1, vero: 7 * 2 | 7 | 1 | 14 |
> | `if (d > u)` | 1 > 7 falso, ramo `else` | 7 | 1 | 14 |
> | `r = r - d;` | 14 - 1 | 7 | 1 | 13 |
>
> Output: `u=7 d=1 r=13` (verificato). All'esame rifallo con la tua matricola.

**Esercizio 6.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 5;
    int b = 0;
    int c = 1;

    if (a > 3 || b++ > 0)
        c = c + 10;
    if (b == 0 && a-- > 4)
        c = c * 2;
    printf("%d %d %d\n", a, b, c);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce il tranello del cortocircuito: ci sono `++` e `--` dentro condizioni con `||` e `&&`.
>
> | istruzione | calcolo | `a` | `b` | `c` |
> | --- | --- | --- | --- | --- |
> | dichiarazioni | | 5 | 0 | 1 |
> | `a > 3 \|\| b++ > 0` | `a > 3` vero, l'OR è deciso: `b++` **non** si esegue | 5 | 0 | 1 |
> | `c = c + 10;` | 1 + 10 | 5 | 0 | 11 |
> | `b <mark> 0 && a-- > 4` | `b </mark> 0` vero, si valuta la destra | 5 | 0 | 11 |
> | | `a--` vale 5 (postfisso: il vecchio valore), 5 > 4 vero, poi `a` diventa 4 | 4 | 0 | 11 |
> | `c = c * 2;` | 11 * 2 | 4 | 0 | 22 |
>
> Output: `4 0 22` (verificato).

**Esercizio 7.** Il frammento deve leggere `x` e stampare `zero` se `x` vale 0, poi `fra 1 e 10` oppure `fuori`. Trova tutti gli errori.

```
int x;
scanf("%d", &x);
if (x = 0);
    printf("zero\n");
if (1 <= x <= 10) {
    printf("fra 1 e 10\n");
};
else {
    printf("fuori\n");
}
```

> [!example]- Soluzione
> Quattro errori, uno di compilazione e tre di logica.
> 1. `if (x = 0)`: assegnazione, non confronto. Mette 0 in `x` e la condizione è sempre falsa. Serve `x == 0`.
> 2. `;` dopo `if (...)`: il ramo è l'istruzione vuota, e `printf("zero\n");` viene eseguito **sempre**. gcc: `suggest braces around empty body in an 'if' statement`.
> 3. `1 <= x <= 10` vale sempre 1 (`1 <= x` dà 0 o 1, ed entrambi sono `<= 10`). Serve `1 <= x && x <= 10`.
> 4. `};` prima di `else`: il `;` è un'istruzione vuota che chiude l'`if`, e l'`else` resta senza `if`. **Non compila**: `'else' without a previous 'if'` (verificato).
>
> Corretto:
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int x;
>
>     if (scanf("%d", &x) != 1) {
>         return 1;
>     }
>     if (x == 0) {
>         printf("zero\n");
>     }
>     if (1 <= x && x <= 10) {
>         printf("fra 1 e 10\n");
>     } else {
>         printf("fuori\n");
>     }
>     return 0;
> }
> ```
> Provato: `0` stampa `zero` e `fuori`; `5` stampa `fra 1 e 10`; `12` stampa `fuori`.

**Esercizio 8.** Scrivi un programma che legge un anno e stampa se è bisestile. Un anno è bisestile se è divisibile per 4 ma non per 100, oppure se è divisibile per 400.

> [!example]- Soluzione
> Si traduce la frase pezzo per pezzo: "divisibile per 4" è `anno % 4 == 0`, "ma non per 100" è `&& anno % 100 != 0`, "oppure per 400" è `|| anno % 400 == 0`.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int anno;
>
>     if (scanf("%d", &anno) != 1) {
>         printf("input non valido\n");
>         return 1;
>     }
>     if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
>         printf("%d bisestile\n", anno);
>     } else {
>         printf("%d non bisestile\n", anno);
>     }
>     return 0;
> }
> ```
> Provato sui quattro casi che distinguono le regole: 2024 bisestile (per 4, non per 100), 1900 non bisestile (per 100, non per 400), 2000 bisestile (per 400), 2026 non bisestile. Le parentesi attorno al primo `&&` non sono obbligatorie (`&&` lega più di `||`) ma rendono chiaro il ragionamento, e senza gcc avvisa.

**Esercizio 9.** Scrivi un programma che legge tre interi e stampa il massimo, in una sola espressione con `?:`.

> [!example]- Soluzione
> Si scompone: se `a > b` il massimo è fra `a` e `c`, altrimenti fra `b` e `c`. Ogni "fra" è un `?:`.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int a;
>     int b;
>     int c;
>
>     if (scanf("%d %d %d", &a, &b, &c) != 3) {
>         return 1;
>     }
>     int max = a > b ? (a > c ? a : c) : (b > c ? b : c);
>     printf("max=%d\n", max);
>     return 0;
> }
> ```
> Con `3 9 5`: `3 > 9` falso, si va a `b > c ? b : c`, 9 > 5 vero, vale 9. Stampa `max=9`. Con `7 -2 1`: `7 > -2` vero, `7 > 1` vero, vale 7: `max=7`. Verificati entrambi, più `5 5 5` che dà `max=5`.

**Esercizio 10.** Scrivi un programma che legge tre lati interi e stampa `nessun triangolo`, `equilatero`, `isoscele` o `scaleno`. I tre numeri sono lati di un triangolo se sono positivi e ognuno è minore della somma degli altri due.

> [!example]- Soluzione
> Più di due casi che si escludono: catena `else if`. L'ordine conta: prima il caso che esclude tutti gli altri (non è un triangolo), poi il più stretto (equilatero, che ha anche due lati uguali), poi isoscele, infine scaleno.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int a;
>     int b;
>     int c;
>
>     if (scanf("%d %d %d", &a, &b, &c) != 3) {
>         return 1;
>     }
>     if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
>         printf("nessun triangolo\n");
>     } else if (a == b && b == c) {
>         printf("equilatero\n");
>     } else if (a == b || b == c || a == c) {
>         printf("isoscele\n");
>     } else {
>         printf("scaleno\n");
>     }
>     return 0;
> }
> ```
> Provato: `3 3 3` equilatero, `3 3 5` isoscele, `5 3 3` isoscele, `3 4 5` scaleno, `1 2 3` nessun triangolo (1 + 2 non è maggiore di 3), `0 4 4` nessun triangolo. Se scambi i due `else if` centrali, `3 3 3` diventa isoscele: è l'errore dell'ordine visto nella catena dei voti.

**Esercizio 11** (livello 30, stile matricola). Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int matricola = 238517;
    int a = matricola % 10;
    int b = matricola / 100 % 10;
    int c = matricola / 1000 % 10;
    int r = 0;

    if (a > b && c++ > 7)
        r = 1;
    if (a % 2 == 0 || b-- == 5) {
        if (c > 7)
            r += 10;
        else
            r += 20;
    }
    r += a > b ? b > c ? 100 : 200 : 300;
    printf("a=%d b=%d c=%d r=%d\n", a, b, c, r);
    return 0;
}
```

> [!example]- Soluzione
> Ci sono tutte le trappole: cifre con `/` e `%`, `++` e `--` postfissi dentro condizioni con cortocircuito, `?:` annidato senza parentesi.
>
> Le cifre: 238517 / 100 = 2385, poi % 10 = 5; 238517 / 1000 = 238, poi % 10 = 8.
>
> | istruzione | calcolo | `a` | `b` | `c` | `r` |
> | --- | --- | --- | --- | --- | --- |
> | dichiarazioni | | 7 | 5 | 8 | 0 |
> | `a > b` | 7 > 5 vero, l'AND non è deciso: si valuta la destra | 7 | 5 | 8 | 0 |
> | `c++ > 7` | confronta il vecchio valore, 8 > 7 vero; poi `c` diventa 9 | 7 | 5 | 9 | 0 |
> | `r = 1;` | | 7 | 5 | 9 | 1 |
> | `a % 2 <mark> 0` | `7 % 2` vale 1, `1 </mark> 0` falso: l'OR non è deciso | 7 | 5 | 9 | 1 |
> | `b-- <mark> 5` | vecchio valore 5, `5 </mark> 5` vero; poi `b` diventa 4 | 7 | 4 | 9 | 1 |
> | `if (c > 7)` | 9 > 7 vero | 7 | 4 | 9 | 1 |
> | `r += 10;` | 1 + 10 | 7 | 4 | 9 | 11 |
> | `a > b ? (b > c ? 100 : 200) : 300` | 7 > 4 vero, si valuta `b > c ? 100 : 200`: 4 > 9 falso, vale 200 | 7 | 4 | 9 | 11 |
> | `r += 200` | 11 + 200 | 7 | 4 | 9 | 211 |
>
> Output: `a=7 b=4 c=9 r=211` (verificato). Il `?:` interno si raggruppa da destra: `a > b ? b > c ? 100 : 200 : 300` è `a > b ? (b > c ? 100 : 200) : 300`, perché il primo `:` chiude il `?` più vicino.

**Esercizio 12.** Vero o falso?

- a) `if (x)` equivale a `if (x != 0)`.
- b) In `if (a) if (b) S1; else S2;` l'`else` appartiene al primo `if`.
- c) Mettere `;` dopo la `}` di un blocco è sempre un errore di compilazione.
- d) `int m = a > b ? a : b;` è corretto, `int m = if (a > b) a; else b;` no.
- e) In `if (x > 0 && y++ > 0)` la variabile `y` viene sempre incrementata.
- f) Con `x = 10`, l'espressione `1 < x < 5` vale 1.
- g) In una catena `if ... else if ... else` possono essere eseguiti due rami.
- h) Le graffe attorno a un ramo con una sola istruzione non cambiano il comportamento.

> [!example]- Soluzione
> - a) **Vero**. La condizione è vera se diversa da zero.
> - b) **Falso**. L'`else` va all'ultimo `if` senza `else`, cioè `if (b)`.
> - c) **Falso**. Di solito è un'istruzione vuota e passa; diventa errore solo fra `}` ed `else`.
> - d) **Vero**. `?:` è un'espressione e ha un valore; `if` è un'istruzione e non ne ha.
> - e) **Falso**. Se `x > 0` è falso l'AND è deciso e `y++` non si valuta.
> - f) **Vero**. `1 < 10` vale 1, poi `1 < 5` vale 1.
> - g) **Falso**. Si esegue solo il ramo della prima condizione vera (o l'`else` finale).
> - h) **Vero**. Esercizi 1a e 1b della slide.

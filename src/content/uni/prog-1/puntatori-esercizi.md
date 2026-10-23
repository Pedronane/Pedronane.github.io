---
title: Puntatori (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-14
lezioni: []
ordine: 16
---

Esercizi tipo esame di [Puntatori](/uni/prog-1/puntatori/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Due famiglie sul modello della domanda 1 della provetta: le batterie **SI/NO** (esercizi 1, 3, 6, 7, 12, 14) e i **"quanto vale `*p`"** dopo una sequenza (esercizi 2, 5, 9, 13, 16). Nelle SI/NO "ammissibile" vuol dire che gcc compila la riga, da sola dopo le dichiarazioni, **senza errori né warning** con `-std=c11 -Wall -Wextra -Wpedantic`; ogni NO ha il messaggio vero di gcc 16. Il metodo è in [Puntatori](/uni/prog-1/puntatori/), sezione Ammissibile o no: tipo a sinistra, tipo a destra, si confrontano.

**Esercizio 1.** Dato

```
int a = 4, b = 9;
int *p = &a, *q;
double d = 2.5;
double *pd;
```

dire se sono ammissibili (ogni riga da sola, subito dopo le dichiarazioni):

- a) `q = &b;`
- b) `pd = &a;`
- c) `*p = b;`
- d) `p = 5;`
- e) `pd = &d;`
- f) `d = *p;`
- g) `&a = q;`
- h) `q = &5;`

> [!example]- Soluzione
> Per ogni riga il tipo dei due lati: `&a` e `&b` sono `int *`, `&d` è `double *`, `*p` è `int`.
>
> | | sinistra | destra | esito | gcc |
> | --- | --- | --- | --- | --- |
> | a) | `int *` | `int *` | **SI** | |
> | b) | `double *` | `int *` | **NO** | `error: assignment to 'double *' from incompatible pointer type 'int *'` |
> | c) | `int` | `int` | **SI**: `a` diventa 9 | |
> | d) | `int *` | `int` | **NO** | `error: assignment to 'int *' from 'int' makes pointer from integer without a cast` |
> | e) | `double *` | `double *` | **SI** | |
> | f) | `double` | `int` | **SI**: conversione fra valori, `d` diventa 4.0 | |
> | g) | `&a` non è una variabile | | **NO** | `error: lvalue required as left operand of assignment` |
> | h) | | `&5`: 5 non sta in memoria | **NO** | `error: lvalue required as unary '&' operand` |
>
> Tutte verificate compilando. La f) è il confronto utile con la b): fra **valori** `int` e `double` il C converte da solo, fra **puntatori** a tipi diversi no, perché un `double *` leggerebbe 8 byte dove ce ne sono 4.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 5;
    int b = 8;
    int *p = &a;
    int *q = &b;

    *p = *p + *q;
    q = p;
    *q = *q * 2;
    printf("a=%d b=%d *p=%d *q=%d\n", a, b, *p, *q);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | `p` | `q` | `a` | `b` |
> | --- | --- | --- | --- | --- |
> | iniziale | → `a` | → `b` | 5 | 8 |
> | `*p = *p + *q` | → `a` | → `b` | 13 | 8 |
> | `q = p` | → `a` | → `a` | 13 | 8 |
> | `*q = *q * 2` | → `a` | → `a` | 26 | 8 |
>
> Dopo `q = p` entrambi puntano ad `a`, quindi il raddoppio tocca `a`, non `b`. Output: `a=26 b=8 *p=26 *q=26` (verificato).

**Esercizio 3.** Vero o falso? (`int x = 3; int *p = &x;` dove serve.)

- a) Dopo `int *p = &x;`, `*p` e `x` indicano la stessa cella di memoria.
- b) `int *p, q;` dichiara due puntatori a `int`.
- c) Se `p <mark> q` è vero, anche `*p </mark> *q` è vero.
- d) Se `*p <mark> *q` è vero, anche `p </mark> q` è vero.
- e) `NULL` si può assegnare a un puntatore di qualunque tipo.
- f) Con `int v[10]; int *p = v;`, `sizeof(p)` vale 40.
- g) `&*p` è uguale a `p`.
- h) `*&x = 5;` è ammissibile e assegna 5 a `x`.

> [!example]- Soluzione
> - a) **Vero**. `*p` è la variabile puntata, cioè `x` stessa: è l'aliasing.
> - b) **Falso**. Il `*` vale solo per `p`; `q` è un `int`. Lo conferma gcc su `q = &x;`: `error: assignment to 'int' from 'int *' makes integer from pointer without a cast`.
> - c) **Vero**. Stesso indirizzo, stessa cella, stesso valore.
> - d) **Falso**. Due celle diverse possono contenere lo stesso numero: con `int y = 3; int *q = &y;` vale `*p == *q` ma `p != q`.
> - e) **Vero**. `double *d = NULL; int **pp = NULL;` compila senza warning: `NULL` è il "non punta a niente" di ogni tipo puntatore.
> - f) **Falso**. `p` è un puntatore: `sizeof(p)` vale 8. È `sizeof(v)` a valere $10 \cdot 4 = 40$ (verificato: il programma stampa `8 40`).
> - g) **Vero**. `*p` è la variabile puntata, `&` ne prende l'indirizzo, che è il valore di `p` (verificato: `&*p == p` vale 1).
> - h) **Vero**. `&x` è l'indirizzo di `x`, `*` torna alla variabile: `*&x` è `x`. Compila senza warning e `x` vale 5 (verificato).

**Esercizio 4.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 3;
    int y = 9;
    int *p = &x;
    int *q = &y;
    int *t;

    t = p;
    p = q;
    q = t;
    printf("x=%d y=%d *p=%d *q=%d\n", x, y, *p, *q);
    *p = *p + *q;
    *q = *p - *q;
    *p = *p - *q;
    printf("x=%d y=%d *p=%d *q=%d\n", x, y, *p, *q);
    return 0;
}
```

> [!example]- Soluzione
> Le prime tre assegnazioni scambiano **i puntatori**: ora `p` → `y`, `q` → `x`. `x` e `y` non cambiano. Prima riga: `x=3 y=9 *p=9 *q=3`.
>
> Le tre successive scambiano **i valori** con il trucco delle somme, scrivendo attraverso i puntatori:
>
> | istruzione | calcolo | `x` (`*q`) | `y` (`*p`) |
> | --- | --- | --- | --- |
> | | | 3 | 9 |
> | `*p = *p + *q` | $9 + 3$ | 3 | 12 |
> | `*q = *p - *q` | $12 - 3$ | 9 | 12 |
> | `*p = *p - *q` | $12 - 9$ | 9 | 3 |
>
> Seconda riga: `x=9 y=3 *p=3 *q=9` (verificato). Il punto: scambiare i puntatori non scambia le variabili, scrivere attraverso i puntatori sì.

**Esercizio 5.** Quanto vale `*p` alla fine? Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int v[5] = {5, 10, 15, 20, 25};
    int *p = v;

    p += 3;
    *p -= v[1];
    p--;
    printf("*p=%d v[3]=%d p-v=%td\n", *p, v[3], p - v);
    return 0;
}
```

> [!example]- Soluzione
> Si disegna l'array e si segue la freccia come indice (`p - v`).
>
> | istruzione | freccia o valore? | `p` (indice) | `v` |
> | --- | --- | --- | --- |
> | `int *p = v;` | | 0 | 5 10 15 20 25 |
> | `p += 3;` | freccia: avanza di 3 elementi | 3 | 5 10 15 20 25 |
> | `*p -= v[1];` | valore: `v[3] = 20 - 10` | 3 | 5 10 15 **10** 25 |
> | `p--;` | freccia: indietro di 1 | 2 | 5 10 15 10 25 |
>
> Alla fine `p` punta a `v[2]`, che vale 15. Output: `*p=15 v[3]=10 p-v=2` (verificato). Chi confonde `*p -= v[1]` con uno spostamento di `p` sbaglia tutto quello che segue.

**Esercizio 6.** Dato

```
int v[4] = {1, 2, 3, 4};
int *p = v;
int *q = &v[3];
char s[] = "ok";
```

dire se sono ammissibili (ogni riga da sola):

- a) `p = v + 2;`
- b) `v = p;`
- c) `v++;`
- d) `p = &v;`
- e) `*(v + 1) = 7;`
- f) `p = q - p;`
- g) `p = p + q;`
- h) `s = "no";`
- i) `p = s;`
- j) `p = &v[1];`

> [!example]- Soluzione
> Il nome dell'array vale come `int *` costante: si usa a destra, non a sinistra.
>
> | | perché | esito | gcc |
> | --- | --- | --- | --- |
> | a) | `v + 2` è `int *`, punta a `v[2]` | **SI** | |
> | b) | l'array non si riassegna | **NO** | `error: assignment to expression with array type` |
> | c) | idem, `v++` è `v = v + 1` | **NO** | `error: lvalue required as increment operand` |
> | d) | `&v` è un puntatore all'array intero, tipo `int (*)[4]` | **NO** | `error: assignment to 'int *' from incompatible pointer type 'int (*)[4]'` |
> | e) | `*(v + 1)` è `v[1]`, un `int` | **SI**: `v[1]` diventa 7 | |
> | f) | `q - p` è un numero di elementi (intero), non un indirizzo | **NO** | `error: assignment to 'int *' from 'long int' makes pointer from integer without a cast` |
> | g) | due puntatori non si sommano | **NO** | `error: invalid operands to binary + (have 'int *' and 'int *')` |
> | h) | `s` è un array di `char` | **NO** | `error: assignment to expression with array type` |
> | i) | `char *` in un `int *` | **NO** | `error: assignment to 'int *' from incompatible pointer type 'char *'` |
> | j) | `&v[1]` è `int *` | **SI** | |
>
> Tutte verificate compilando. La d) è il tranello più fine: `v` e `&v` contengono lo stesso indirizzo ma hanno tipo diverso, e il tipo decide sia l'ammissibilità sia di quanto avanza un `+ 1`. La f) invece diventa ammissibile se a sinistra c'è un intero: `int n = q - p;` compila e vale 3.

**Esercizio 7.** Vero o falso?

- a) L'operatore `&` dereferenzia un puntatore.
- b) Dopo `int a[5]; int *p = a;`, `p[3]` e `*(a + 3)` indicano lo stesso elemento.
- c) `a++` è lecito se `a` è un array.
- d) Se `p` punta ad `a[1]` di un array di `int`, `p + 1` vale l'indirizzo di `a[1]` più 1 byte.
- e) `*p++` incrementa il valore puntato da `p`.
- f) Due puntatori uguali (`p == q`) puntano alla stessa variabile.
- g) Con `const int *p = &x;` l'istruzione `p = &y;` non compila.
- h) `char *s = "ciao"; s[0] = 'C';` è un modo corretto di rendere maiuscola la stringa.

> [!example]- Soluzione
> - a) **Falso**. `&` dà l'indirizzo; dereferenzia `*`.
> - b) **Vero**. `p[3]` è `*(p + 3)` e `p` vale `a`.
> - c) **Falso**. Il nome dell'array è un puntatore costante.
> - d) **Falso**. Avanza di un elemento, cioè di `sizeof(int)` byte: punta ad `a[2]`.
> - e) **Falso**. È `*(p++)`: incrementa il puntatore. Il valore si incrementa con `(*p)++`.
> - f) **Vero**. Contengono lo stesso indirizzo (è aliasing).
> - g) **Falso**. Qui è costante l'`int` puntato, non il puntatore: `p = &y` è lecito, `*p = 3` no.
> - h) **Falso**. `s` punta a una costante stringa: modificarla è comportamento indefinito. Serve un array: `char s[] = "ciao";`.

**Esercizio 8.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int v[5] = {3, 1, 4, 1, 5};
    int *p = v + 1;
    int *q = &v[4];

    *p += *q;
    p++;
    *q = *p * 2;
    q = p - 2;
    printf("%d %d %d %td\n", *p, *q, v[4], p - q);
    *q++ = *p--;
    printf("%d %d %d %d %d | %d %d\n", v[0], v[1], v[2], v[3], v[4], *p, *q);
    return 0;
}
```

> [!example]- Soluzione
> Si disegna l'array e si segue dove puntano `p` e `q` (come indici):
>
> | istruzione | `p` | `q` | `v` |
> | --- | --- | --- | --- |
> | iniziale | 1 | 4 | 3 1 4 1 5 |
> | `*p += *q` | 1 | 4 | 3 **6** 4 1 5 |
> | `p++` | 2 | 4 | 3 6 4 1 5 |
> | `*q = *p * 2` | 2 | 4 | 3 6 4 1 **8** |
> | `q = p - 2` | 2 | 0 | 3 6 4 1 8 |
>
> Prima riga: `*p` è `v[2]` = 4, `*q` è `v[0]` = 3, `v[4]` = 8, `p - q` = $2 - 0 = 2$: `4 3 8 2`.
>
> `*q++ = *p--`: si legge `*(q++) = *(p--)`. Il valore copiato è quello della cella puntata da `p` **prima** del decremento, `v[2]` = 4, e va nella cella puntata da `q` **prima** dell'incremento, `v[0]`. Poi `q` passa a 1 e `p` a 1.
>
> | | `p` | `q` | `v` |
> | --- | --- | --- | --- |
> | `*q++ = *p--` | 1 | 1 | **4** 6 4 1 8 |
>
> Seconda riga: `4 6 4 1 8 | 6 6` (verificato).

**Esercizio 9.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int v[4] = {1, 2, 3, 4};
    int *p = v;

    *p++ = 9;
    (*p)++;
    ++*p;
    p += 2;
    *p = *(p - 1) + *v;
    printf("*p=%d v: %d %d %d %d\n", *p, v[0], v[1], v[2], v[3]);
    return 0;
}
```

> [!example]- Soluzione
> Si riconoscono le quattro combinazioni di `*` e `++` (tabella in [Puntatori](/uni/prog-1/puntatori/)): il postfisso lega prima di `*`, prefisso e `*` si leggono da destra.
>
> | istruzione | si legge | `p` (indice) | `v` |
> | --- | --- | --- | --- |
> | `int *p = v;` | | 0 | 1 2 3 4 |
> | `*p++ = 9;` | `*(p++) = 9`: scrive in `v[0]`, poi `p` avanza | 1 | **9** 2 3 4 |
> | `(*p)++;` | incrementa `v[1]` | 1 | 9 **3** 3 4 |
> | `++*p;` | `++(*p)`: incrementa ancora `v[1]` | 1 | 9 **4** 3 4 |
> | `p += 2;` | freccia su `v[3]` | 3 | 9 4 3 4 |
> | `*p = *(p - 1) + *v;` | `v[3] = v[2] + v[0] = 3 + 9` | 3 | 9 4 3 **12** |
>
> Output: `*p=12 v: 9 4 3 12` (verificato). `*v` è `v[0]`, non "il valore puntato da `p`": il nome dell'array punta sempre al primo elemento.

**Esercizio 10.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "puntatore";
    char *p = s;
    char *q = s;
    int n = 0;

    while (*q != '\0')
        q++;
    q--;
    while (p < q) {
        if (*p == 'a' || *p == 'e' || *p == 'o' || *p == 'u')
            n++;
        *p = *p - 32;
        p += 2;
    }
    printf("%s %d %td\n", s, n, q - s);
    return 0;
}
```

> [!example]- Soluzione
> `s`: `p`0 `u`1 `n`2 `t`3 `a`4 `t`5 `o`6 `r`7 `e`8, terminatore in 9. Il primo ciclo porta `q` sul terminatore (9), `q--` sull'ultima lettera (8).
>
> Il secondo ciclo visita le posizioni pari finché `p < q`:
>
> | posizione di `p` | `*p` | vocale? | `n` | diventa |
> | --- | --- | --- | --- | --- |
> | 0 | p | no | 0 | P |
> | 2 | n | no | 0 | N |
> | 4 | a | sì | 1 | A |
> | 6 | o | sì | 2 | O |
> | 8 | | `p < q` falso, esce | | |
>
> `*p - 32` trasforma una minuscola nella maiuscola. La `e` in posizione 8 non viene visitata perché la condizione è `<` e non `<=`.
>
> Output: `PuNtAtOre 2 8` (verificato).

**Esercizio 11.** Scrivi un programma che, **senza usare indici**, calcola la somma di `int v[6] = {4, -2, 17, 8, 17, 0}` e trova il massimo e la sua posizione (la prima).

> [!example]- Soluzione
> Si scorre con un puntatore da `v` a `v + 6`. Per il massimo si tiene un **puntatore** alla cella migliore: la posizione si ottiene alla fine come differenza con `v`.
>
> ```c
> #include <stdio.h>
>
> #define N 6
>
> int main(void)
> {
>     int v[N] = {4, -2, 17, 8, 17, 0};
>     int *p;
>     int *max = v;
>     int somma = 0;
>
>     for (p = v; p < v + N; p++) {
>         somma += *p;
>         if (*p > *max)
>             max = p;
>     }
>     printf("somma=%d max=%d in posizione %td\n", somma, *max, max - v);
>     return 0;
> }
> ```
>
> Stampa `somma=44 max=17 in posizione 2` (verificato). Controllo: $4 - 2 + 17 + 8 + 17 + 0 = 44$. Il secondo 17 non sostituisce il primo perché il confronto è `>`.

**Esercizio 12.** Con `int x, y; char z; int *p, *q; char *p1; int **pp;`, quali assegnazioni sono corrette?

- a) `p = &x;`
- b) `p = &z;`
- c) `p1 = p;`
- d) `pp = &p;`
- e) `pp = &x;`
- f) `p = x;`
- g) `*p1 = *p;`
- h) `&x = p;`
- i) `*pp = q;`

> [!example]- Soluzione
> Si confrontano i tipi dei due lati (Metodo):
>
> | | sinistra | destra | esito |
> | --- | --- | --- | --- |
> | a) | `int *` | `int *` | corretta |
> | b) | `int *` | `char *` | **errata**: tipi puntati diversi |
> | c) | `char *` | `int *` | **errata**, stesso motivo |
> | d) | `int **` | `int **` | corretta |
> | e) | `int **` | `int *` | **errata**: manca un livello |
> | f) | `int *` | `int` | **errata**: un intero non è un indirizzo |
> | g) | `char` | `int` | corretta: conversione fra valori, tronca a 8 bit |
> | h) | `&x` non è una variabile | | **errata**: non si assegna a un indirizzo |
> | i) | `int *` (è `p`) | `int *` | corretta: fa puntare `p` dove punta `q` |
>
> Con gcc 16 b, c, e, f sono errori di compilazione ("incompatible pointer type", "makes pointer from integer without a cast") e h dà "lvalue required as left operand of assignment" (verificato). g compila (i valori, non i puntatori, si convertono), ma solo dopo aver inizializzato `p` e `p1`.

**Esercizio 13.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 1;
    int y = 2;
    int *p = &x;
    int *q = &y;
    int **pp = &p;

    *pp = q;
    **pp = 10;
    pp = &q;
    *q = *p + x;
    printf("x=%d y=%d *p=%d **pp=%d\n", x, y, *p, **pp);
    return 0;
}
```

> [!example]- Soluzione
> Con un doppio puntatore si contano gli asterischi: `pp` è la freccia verso un puntatore, `*pp` è quel puntatore, `**pp` è l'`int` in fondo alla catena (figura in [Puntatori](/uni/prog-1/puntatori/), Doppio puntatore).
>
> | istruzione | cosa cambia | `pp` → | `p` → | `q` → | `x` | `y` |
> | --- | --- | --- | --- | --- | --- | --- |
> | dichiarazioni | | `p` | `x` | `y` | 1 | 2 |
> | `*pp = q;` | `*pp` è `p`: ora `p` punta dove punta `q` | `p` | `y` | `y` | 1 | 2 |
> | `**pp = 10;` | `**pp` è `*p`, cioè `y` | `p` | `y` | `y` | 1 | 10 |
> | `pp = &q;` | si sposta `pp` | `q` | `y` | `y` | 1 | 10 |
> | `*q = *p + x;` | `y = 10 + 1` | `q` | `y` | `y` | 1 | 11 |
>
> Output: `x=1 y=11 *p=11 **pp=11` (verificato). `x` non viene mai scritta: dopo la prima istruzione nessun puntatore arriva più a lei, e nell'ultima riga compare solo a destra.

**Esercizio 14.** (Livello alto) Dato

```
int x = 3;
int *p = &x;
int **pp = &p;
const int *pc = &x;
int *const cp = &x;
struct punto { int x; int y; } t = {1, 2}, *pt = &t;
```

dire se sono ammissibili (ogni riga da sola):

- a) `**pp = 5;`
- b) `pp = &x;`
- c) `*pc = 4;`
- d) `pc = p;`
- e) `cp = p;`
- f) `*cp = 8;`
- g) `p = pc;`
- h) `pt->x = 4;`
- i) `*pt.y = 4;`
- j) `(*pt).y = *p;`
- k) `pt = &t.x;`

> [!example]- Soluzione
> Tre controlli: i livelli di puntatore, **cosa** è `const` (si legge da destra: `pc` è un puntatore a int costante, `cp` è un puntatore costante a int), punto o freccia.
>
> | | perché | esito | gcc |
> | --- | --- | --- | --- |
> | a) | `**pp` è `x`, un `int` | **SI** | |
> | b) | `int **` = `int *`: manca un livello | **NO** | `error: assignment to 'int **' from incompatible pointer type 'int *'` |
> | c) | attraverso `pc` non si scrive | **NO** | `error: assignment of read-only location '*pc'` |
> | d) | `pc` si può spostare; da `int *` a `const int *` aggiunge la promessa | **SI** | |
> | e) | `cp` stesso è costante | **NO** | `error: assignment of read-only variable 'cp'` |
> | f) | attraverso `cp` si scrive: è costante la freccia, non la cella | **SI** | |
> | g) | da `const int *` a `int *` toglie la promessa | **NO** | `warning: assignment discards 'const' qualifier from pointer target type` |
> | h) | `pt` è un puntatore a struct: freccia | **SI** | |
> | i) | `.` lega più di `*`: è `*(pt.y)`, e `pt` non ha campi | **NO** | `error: 'pt' is a pointer; did you mean to use '->'?` |
> | j) | `(*pt)` è la struct, `.y` il campo, `*p` un `int` | **SI** | |
> | k) | `&t.x` è `&(t.x)`, un `int *`, non un `struct punto *` | **NO** | `error: assignment to 'struct punto *' from incompatible pointer type 'int *'` |
>
> Tutte verificate compilando. La g) è l'unico NO dato da un warning e non da un errore: il C la lascia passare, ma è proprio il caso che `const` deve impedire.

**Esercizio 15.** Scrivi l'output esatto.

```c
#include <stdio.h>

typedef struct {
    char nome[20];
    int voto;
} studente;

int main(void)
{
    studente classe[3] = {{"Anna", 27}, {"Bruno", 30}, {"Carla", 24}};
    studente *p = classe;
    studente *migliore = classe;
    int i;

    for (i = 0; i < 3; i++) {
        if (p->voto > migliore->voto)
            migliore = p;
        p++;
    }
    migliore->voto++;
    printf("%s %d\n", migliore->nome, classe[1].voto);
    printf("%c %d\n", (classe + 2)->nome[0], (*classe).voto);
    return 0;
}
```

> [!example]- Soluzione
> `p` scorre l'array di struct: `p++` avanza di una **struct intera** (24 byte), non di un byte. `migliore` resta un puntatore alla struct con il voto più alto: dopo il ciclo punta a `classe[1]` (Bruno, 30).
>
> `migliore->voto++` incrementa il campo **attraverso il puntatore**, quindi modifica `classe[1]` stessa: `classe[1].voto` diventa 31.
>
> Seconda riga: `classe + 2` punta a `classe[2]`, `->nome[0]` è la prima lettera di `"Carla"`; `*classe` è `classe[0]`, e `.voto` è 27 (le parentesi servono perché `.` lega più di `*`).
>
> ```
> Bruno 31
> C 27
> ```
> (verificato)

**Esercizio 16.** (Livello 30) Scrivi l'output esatto.

```c
#include <stdio.h>

typedef struct {
    int id;
    int v;
} coppia;

int main(void)
{
    coppia a[3] = {{1, 10}, {2, 20}, {3, 30}};
    coppia *p = a;
    int *q = &a[2].v;

    (p + 1)->v += *q;
    p++;
    *q = p->v - a[0].v;
    p = a + 2;
    printf("%d %d %d %d\n", p->id, p->v, a[1].v, *q);
    return 0;
}
```

> [!example]- Soluzione
> Due puntatori di tipo diverso sulla stessa memoria: `p` punta a **struct** intere e avanza di una struct alla volta, `q` punta a **un campo** `int` (`&a[2].v` si legge `&(a[2].v)`).
>
> | istruzione | calcolo | `p` → | `q` → | `a[0]` | `a[1]` | `a[2]` |
> | --- | --- | --- | --- | --- | --- | --- |
> | dichiarazioni | | `a[0]` | `a[2].v` | 1, 10 | 2, 20 | 3, 30 |
> | `(p + 1)->v += *q;` | `a[1].v = 20 + 30` | `a[0]` | `a[2].v` | 1, 10 | 2, 50 | 3, 30 |
> | `p++;` | una struct avanti | `a[1]` | `a[2].v` | 1, 10 | 2, 50 | 3, 30 |
> | `*q = p->v - a[0].v;` | `a[2].v = 50 - 10` | `a[1]` | `a[2].v` | 1, 10 | 2, 50 | 3, 40 |
> | `p = a + 2;` | | `a[2]` | `a[2].v` | 1, 10 | 2, 50 | 3, 40 |
>
> `p->id` è 3, `p->v` è 40, `a[1].v` è 50, `*q` è 40 (stessa cella di `p->v`). Output: `3 40 50 40` (verificato). `(p + 1)->v` non sposta `p`: calcola l'indirizzo della struct successiva solo per quell'espressione.

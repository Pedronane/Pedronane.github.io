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

**Esercizio 1.** Scrivi l'output esatto.

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

**Esercizio 2.** Scrivi l'output esatto.

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

**Esercizio 3.** Scrivi l'output esatto.

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

**Esercizio 4.** Scrivi l'output esatto.

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

**Esercizio 5.** Scrivi un programma che, **senza usare indici**, calcola la somma di `int v[6] = {4, -2, 17, 8, 17, 0}` e trova il massimo e la sua posizione (la prima).

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

**Esercizio 6.** Con `int x, y; char z; int *p, *q; char *p1; int **pp;`, quali assegnazioni sono corrette?

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

**Esercizio 7.** (Livello 30) Scrivi l'output esatto.

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

**Esercizio 8.** Vero o falso?

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

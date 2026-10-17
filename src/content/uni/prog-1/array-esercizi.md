---
title: Array (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-02
lezioni: []
ordine: 10
---

Esercizi tipo esame di [Array](/uni/prog-1/array/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

#define N 6

int main(void)
{
    int a[N] = {3, 1, 4, 1, 5, 9};
    int i;
    int s = 0;

    for (i = 0; i < N; i += 2)
        s += a[i];
    for (i = N - 1; i > 0; i--)
        a[i] = a[i - 1];
    a[0] = s;
    for (i = 0; i < N; i++)
        printf("%d ", a[i]);
    printf("\ns=%d i=%d\n", s, i);
    return 0;
}
```

> [!example]- Soluzione
> Il primo ciclo somma gli indici pari 0, 2, 4: $3 + 4 + 5 = 12$. Il secondo sposta tutto a destra di una cella partendo dal fondo: `3 3 1 4 1 5` (il 9 si perde). Poi `a[0]` diventa 12.
> ```
> 12 3 1 4 1 5 
> s=12 i=6
> ```
> (verificato). `i` vale 6 perché è l'ultimo ciclo, quello di stampa, a lasciarla così.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a[4] = {0};
    int i = 0;

    a[i++] = 5;
    a[i++] = a[0] * 2;
    a[i] = i;
    printf("%d %d %d %d i=%d\n", a[0], a[1], a[2], a[3], i);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | indice usato | scrive | `i` dopo |
> | --- | --- | --- | --- |
> | `a[i++] = 5` | 0 | `a[0]` = 5 | 1 |
> | `a[i++] = a[0] * 2` | 1 | `a[1]` = 10 | 2 |
> | `a[i] = i` | 2 | `a[2]` = 2 | 2 |
>
> Output: `5 10 2 0 i=2` (verificato). `a[3]` vale 0 per l'inizializzazione `{0}`.

**Esercizio 3.** Scrivi l'output esatto e spiega ogni valore.

```c
#include <stdio.h>

int main(void)
{
    int v[5] = {2};
    int w[] = {4, 8, 15};
    int i;

    for (i = 0; i < 5; i++)
        printf("%d ", v[i]);
    printf("\n%zu %zu\n", sizeof(w) / sizeof(w[0]), sizeof(v));
    return 0;
}
```

> [!example]- Soluzione
> ```
> 2 0 0 0 0 
> 3 20
> ```
> (verificato, `int` da 4 byte). `{2}` inizializza solo `v[0]`, le altre celle valgono 0: `{2}` **non** mette tutto a 2. `w` senza dimensione la prende dalla lista: 3 elementi. `sizeof(v)` è $5 \cdot 4 = 20$ byte.

**Esercizio 4.** Trova gli errori.

```
#define N 10
int v[N];
int i;
for (i = 1; i <= N; i++)
    scanf("%d", v[i]);
```

> [!example]- Soluzione
> Tre errori:
> - gli indici validi vanno da 0 a 9: il ciclo salta `v[0]` e scrive `v[10]`, fuori dall'array. Va `for (i = 0; i < N; i++)`;
> - `scanf` vuole l'indirizzo: `&v[i]`;
> - il valore di ritorno di `scanf` non è controllato.
>
> Il primo è l'errore più frequente con gli array: con $N$ celle la condizione è `i < N`, mai `i <= N`.

**Esercizio 5.** Scrivi un programma che legge 8 interi in un array e stampa il massimo e la posizione della sua **prima** occorrenza.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define N 8
>
> int main(void)
> {
>     int v[N];
>     int i;
>     int pos_max;
>
>     for (i = 0; i < N; i++)
>         if (scanf("%d", &v[i]) != 1) {
>             printf("input non valido\n");
>             return 1;
>         }
>     pos_max = 0;
>     for (i = 1; i < N; i++)
>         if (v[i] > v[pos_max])
>             pos_max = i;
>     printf("max=%d in posizione %d\n", v[pos_max], pos_max);
>     return 0;
> }
> ```
> Con input `4 -2 17 8 17 0 3 9` stampa `max=17 in posizione 2` (verificato). Con `>=` al posto di `>` darebbe la posizione 4, l'ultima occorrenza. Tenere la posizione basta: il valore si ricava come `v[pos_max]`.

**Esercizio 6.** Inverti sul posto `int v[7] = {1, 2, 3, 4, 5, 6, 7}` (senza un secondo array) e stampalo.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define N 7
>
> int main(void)
> {
>     int v[N] = {1, 2, 3, 4, 5, 6, 7};
>     int i;
>     int tmp;
>
>     for (i = 0; i < N / 2; i++) {
>         tmp = v[i];
>         v[i] = v[N - 1 - i];
>         v[N - 1 - i] = tmp;
>     }
>     for (i = 0; i < N; i++)
>         printf("%d ", v[i]);
>     printf("\n");
>     return 0;
> }
> ```
> Stampa `7 6 5 4 3 2 1 ` (verificato). Il ciclo fa $N / 2 = 3$ scambi: (0,6), (1,5), (2,4). L'elemento centrale resta dov'è. Con `i < N` gli scambi sarebbero 7 e l'array tornerebbe com'era.

**Esercizio 7.** Leggi una sequenza di lanci di dado (interi, fino a fine input) e stampa quante volte è uscita ogni faccia. Ignora i valori fuori da 1-6.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define FACCE 6
>
> int main(void)
> {
>     int conta[FACCE + 1] = {0};
>     int lancio;
>     int f;
>
>     while (scanf("%d", &lancio) == 1) {
>         if (lancio >= 1 && lancio <= FACCE)
>             conta[lancio]++;
>     }
>     for (f = 1; f <= FACCE; f++)
>         printf("%d: %d\n", f, conta[f]);
>     return 0;
> }
> ```
> Con input `3 6 1 3 3 7 6 2` stampa `1: 1`, `2: 1`, `3: 3`, `4: 0`, `5: 0`, `6: 2` (verificato; il 7 è ignorato). L'array ha `FACCE + 1` celle per usare il valore del dado direttamente come indice, lasciando inutilizzata la cella 0. Il controllo del range viene **prima** di `conta[lancio]++`: senza, un 7 scriverebbe fuori dall'array. È lo stesso schema di `ndigit[c - '0']++`.

**Esercizio 8.** (Slide 52, lasciato per casa.) Data una sequenza di parole separate da spazi bianchi (spazio, tab, a capo), stampa un grafico a barre orizzontali: per ogni lunghezza, una barra con tanti `*` quante sono le parole di quella lunghezza.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define MAX_LUNG 20
>
> int main(void)
> {
>     int occorrenze[MAX_LUNG + 1] = {0};
>     int c;
>     int lung = 0;
>     int i;
>     int k;
>
>     while ((c = getchar()) != EOF) {
>         if (c == ' ' || c == '\t' || c == '\n') {
>             if (lung > 0) {
>                 occorrenze[lung > MAX_LUNG ? MAX_LUNG : lung]++;
>                 lung = 0;
>             }
>         } else {
>             lung++;
>         }
>     }
>     if (lung > 0)
>         occorrenze[lung > MAX_LUNG ? MAX_LUNG : lung]++;
>
>     for (i = 1; i <= MAX_LUNG; i++) {
>         if (occorrenze[i] > 0) {
>             printf("%2d | ", i);
>             for (k = 0; k < occorrenze[i]; k++)
>                 putchar('*');
>             printf(" %d\n", occorrenze[i]);
>         }
>     }
>     return 0;
> }
> ```
> Con input `il gatto dorme sul divano` a capo `e il cane abbaia` stampa (verificato):
> ```
>  1 | * 1
>  2 | ** 2
>  3 | * 1
>  4 | * 1
>  5 | ** 2
>  6 | ** 2
> ```
> `lung` conta i caratteri della parola in corso e si azzera a ogni spazio bianco, ma solo se c'era una parola (`lung > 0`): così due spazi di fila non contano una parola di lunghezza 0. L'`if` dopo il ciclo chiude l'ultima parola se l'input finisce senza a capo. Le parole più lunghe di 20 finiscono tutte nella barra 20, così l'indice non esce mai dall'array.

**Esercizio 9.** Vero o falso?
1. Con `int a[10]`, l'istruzione `a[10] = 0;` dà errore di compilazione.
2. `int b[3] = {1, 2, 3}; int c[3]; c = b;` copia `b` in `c`.
3. `int d[4] = {1};` mette tutte le celle a 1.
4. In `x = a[i + 1]`, l'indice può essere un'espressione qualsiasi a valore intero.
5. Dopo `int e[5];` dentro `main`, `e[0]` vale 0.

> [!example]- Soluzione
> 1. **Falso**. Il C non controlla gli indici: compila, e a runtime scrive fuori dall'array (comportamento indefinito). gcc al massimo avvisa se l'indice è costante e lo vede.
> 2. **Falso**. Un array non si assegna in blocco, gcc dà errore. Si copia con un ciclo.
> 3. **Falso**. `d[0]` vale 1, le altre 0.
> 4. **Vero** (slide 8 e 18).
> 5. **Falso**. Un array locale non inizializzato ha contenuto indefinito.

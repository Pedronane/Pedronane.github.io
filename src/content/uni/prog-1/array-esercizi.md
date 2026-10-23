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

Dal più facile al livello del 30. Nei tracing: l'array disegnato come riga di caselle, una riga della tabella per istruzione o per giro, e l'indice calcolato prima di aprire la casella. Gli esercizi 1-6 e 15 sono sul modello della teorica ("scrivi l'output esatto", SI/NO, trova l'errore), gli altri sul modello della prova al calcolatore (codice breve).

**Esercizio 1.** Scrivi l'output esatto e spiega ogni valore.

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
> Si riconosce una domanda sull'inizializzazione: lista più corta delle celle, e dimensione dedotta dalla lista.
>
> | cella | `v[0]` | `v[1]` | `v[2]` | `v[3]` | `v[4]` |
> | --- | --- | --- | --- | --- | --- |
> | valore | 2 (dalla lista) | 0 | 0 | 0 | 0 |
>
> `w` senza dimensione la prende dalla lista: 3 elementi, quindi `sizeof(w) / sizeof(w[0])` è $12 / 4 = 3$. `sizeof(v)` è $5 \cdot 4 = 20$ byte.
> ```
> 2 0 0 0 0 
> 3 20
> ```
> (verificato, `int` da 4 byte). Controllo: `{2}` **non** mette tutto a 2, mette 2 solo nella prima cella.

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
> Si riconosce l'indice con `++` postfisso: si usa il valore **vecchio** di `i`, poi `i` cresce.
>
> | istruzione | indice usato | scrive | `i` dopo | `a` dopo |
> | --- | --- | --- | --- | --- |
> | (inizio) | | | 0 | `0 0 0 0` |
> | `a[i++] = 5` | 0 | `a[0]` = 5 | 1 | `5 0 0 0` |
> | `a[i++] = a[0] * 2` | 1 | `a[1]` = 10 | 2 | `5 10 0 0` |
> | `a[i] = i` | 2 | `a[2]` = 2 | 2 | `5 10 2 0` |
>
> Output: `5 10 2 0 i=2` (verificato). `a[3]` vale 0 per l'inizializzazione `{0}`.

**Esercizio 3** (SI/NO). Per ogni affermazione rispondi SI o NO e motiva.

- a) Con `int a[10]`, l'istruzione `a[10] = 0;` dà errore di compilazione.
- b) `int b[3] = {1, 2, 3}; int c[3]; c = b;` copia `b` in `c`.
- c) `int d[4] = {1};` mette tutte le celle a 1.
- d) In `x = a[i + 1]`, l'indice può essere un'espressione qualsiasi a valore intero.
- e) Dopo `int e[5];` dentro `main`, `e[0]` vale 0.
- f) Se `a` e `b` sono due array di 3 `int` con gli stessi valori, `a == b` vale 1.

> [!example]- Soluzione
> - a) **NO**. Il C non controlla gli indici: compila, e a runtime scrive fuori dall'array (comportamento indefinito). gcc al massimo avvisa se l'indice è costante e lo vede.
> - b) **NO**. Un array non si assegna in blocco, gcc dà errore (`assignment to expression with array type`). Si copia con un ciclo.
> - c) **NO**. `d[0]` vale 1, le altre 0.
> - d) **SI** (slide 8 e 18).
> - e) **NO**. Un array locale non inizializzato ha contenuto indefinito.
> - f) **NO**. `a == b` confronta gli indirizzi delle prime celle, che sono diversi: vale 0 (verificato, con il warning `comparison between two arrays`). Il contenuto si confronta cella per cella.

**Esercizio 4.** Trova gli errori.

```
#define N 10
int v[N];
int i;
for (i = 1; i <= N; i++)
    scanf("%d", v[i]);
```

> [!example]- Soluzione
> Si legge riga per riga chiedendosi quali indici tocca il ciclo: `i` va da 1 a 10.
> - Gli indici validi vanno da 0 a 9: il ciclo salta `v[0]` e scrive `v[10]`, fuori dall'array. Va `for (i = 0; i < N; i++)`.
> - `scanf` vuole l'indirizzo: `&v[i]`.
> - Il valore di ritorno di `scanf` non è controllato: con un input non numerico la cella resta indefinita.
>
> Il primo è l'errore più frequente con gli array: con $N$ celle la condizione è `i < N`, mai `i <= N`.

**Esercizio 5.** Scrivi l'output esatto.

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
> Tre cicli: un accumulatore sugli indici pari, uno spostamento a destra, una stampa.
>
> Primo ciclo, `i += 2`:
>
> | `i` | `a[i]` | `s` dopo |
> | --- | --- | --- |
> | 0 | 3 | 3 |
> | 2 | 4 | 7 |
> | 4 | 5 | 12 |
> | 6 | `6 < 6` falso, esce | |
>
> Secondo ciclo, dal fondo:
>
> | `i` | assegnazione | `a` dopo |
> | --- | --- | --- |
> | 5 | `a[5] = a[4]` | `3 1 4 1 5 5` |
> | 4 | `a[4] = a[3]` | `3 1 4 1 1 5` |
> | 3 | `a[3] = a[2]` | `3 1 4 4 1 5` |
> | 2 | `a[2] = a[1]` | `3 1 1 4 1 5` |
> | 1 | `a[1] = a[0]` | `3 3 1 4 1 5` |
>
> Poi `a[0] = 12`.
> ```
> 12 3 1 4 1 5 
> s=12 i=6
> ```
> (verificato). Il 9 si perde, sovrascritto dal primo passo. `i` vale 6 perché è l'ultimo ciclo, quello di stampa, a lasciarla così.

**Esercizio 6** (stile matricola). Le cifre della matricola 238517 sono in un array. Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int m[6] = {2, 3, 8, 5, 1, 7};
    int i;
    int k = 0;
    int s = 0;

    for (i = 0; i < 6; i++) {
        if (m[i] % 2 == 0)
            s += m[i];
        else
            m[k++] = m[i];
    }
    for (i = 0; i < 6; i++)
        printf("%d", m[i]);
    printf(" k=%d s=%d\n", k, s);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un filtro **sul posto**: due indici sullo stesso array, `i` che legge e `k` che scrive. `k` non supera mai `i`, quindi si scrive solo su celle già lette.
>
> | `i` | `m[i]` | pari? | azione | `k` dopo | `s` dopo | `m` dopo |
> | --- | --- | --- | --- | --- | --- | --- |
> | 0 | 2 | sì | `s += 2` | 0 | 2 | `2 3 8 5 1 7` |
> | 1 | 3 | no | `m[0] = 3` | 1 | 2 | `3 3 8 5 1 7` |
> | 2 | 8 | sì | `s += 8` | 1 | 10 | `3 3 8 5 1 7` |
> | 3 | 5 | no | `m[1] = 5` | 2 | 10 | `3 5 8 5 1 7` |
> | 4 | 1 | no | `m[2] = 1` | 3 | 10 | `3 5 1 5 1 7` |
> | 5 | 7 | no | `m[3] = 7` | 4 | 10 | `3 5 1 7 1 7` |
>
> Output: `351717 k=4 s=10` (verificato). Le prime `k` celle contengono le cifre dispari nell'ordine originale; le ultime due sono rimaste quelle di prima (`1 7`), perché nessuno le ha sovrascritte. Il `printf` le stampa tutte e sei senza spazi: le cifre si incollano.

**Esercizio 7.** Scrivi un programma che legge 8 interi in un array e stampa il massimo e la posizione della sua **prima** occorrenza.

> [!example]- Soluzione
> Si riconosce il ciclo "massimo e posizione": basta tenere la posizione, il valore si ricava come `v[pos_max]`.
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
> Con input `4 -2 17 8 17 0 3 9`:
>
> | `i` | `v[i]` | `v[i] > v[pos_max]` | `pos_max` |
> | --- | --- | --- | --- |
> | (inizio) | | | 0 (vale 4) |
> | 1 | -2 | no | 0 |
> | 2 | 17 | sì | 2 |
> | 3 | 8 | no | 2 |
> | 4 | 17 | 17 > 17 no | 2 |
> | 5, 6, 7 | 0, 3, 9 | no | 2 |
>
> Stampa `max=17 in posizione 2` (verificato). Con `>=` al posto di `>` la riga 4 aggiornerebbe e darebbe la posizione 4, l'ultima occorrenza.

**Esercizio 8.** Inverti sul posto `int v[7] = {1, 2, 3, 4, 5, 6, 7}` (senza un secondo array) e stampalo.

> [!example]- Soluzione
> Si scambia la cella `i` con la sua simmetrica `N - 1 - i`, solo nella prima metà.
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
>
> | `i` | scambia | `v` dopo |
> | --- | --- | --- |
> | 0 | `v[0]` e `v[6]` | `7 2 3 4 5 6 1` |
> | 1 | `v[1]` e `v[5]` | `7 6 3 4 5 2 1` |
> | 2 | `v[2]` e `v[4]` | `7 6 5 4 3 2 1` |
> | 3 | `3 < 3` falso, esce | |
>
> Stampa `7 6 5 4 3 2 1 ` (verificato). $N / 2$ è divisione intera, 3: l'elemento centrale `v[3]` resta dov'è. Con `i < N` gli scambi sarebbero 7 e l'array tornerebbe com'era.

**Esercizio 9.** Leggi una sequenza di lanci di dado (interi, fino a fine input) e stampa quante volte è uscita ogni faccia. Ignora i valori fuori da 1-6.

> [!example]- Soluzione
> Si riconosce l'array di contatori: pochi valori possibili e consecutivi, il valore fa da indice.
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
> Con input `3 6 1 3 3 7 6 2`:
>
> | lancio | 3 | 6 | 1 | 3 | 3 | 7 | 6 | 2 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | effetto | `conta[3]` → 1 | `conta[6]` → 1 | `conta[1]` → 1 | `conta[3]` → 2 | `conta[3]` → 3 | ignorato | `conta[6]` → 2 | `conta[2]` → 1 |
>
> Stampa `1: 1`, `2: 1`, `3: 3`, `4: 0`, `5: 0`, `6: 2` (verificato). L'array ha `FACCE + 1` celle per usare il valore del dado direttamente come indice, lasciando inutilizzata la cella 0. Il controllo del range viene **prima** di `conta[lancio]++`: senza, un 7 scriverebbe fuori dall'array. È lo stesso schema di `ndigit[c - '0']++`.

**Esercizio 10.** (Slide 52, lasciato per casa.) Data una sequenza di parole separate da spazi bianchi (spazio, tab, a capo), stampa un grafico a barre orizzontali: per ogni lunghezza, una barra con tanti `*` quante sono le parole di quella lunghezza.

> [!example]- Soluzione
> Si riconosce un array di contatori in cui l'indice è la **lunghezza** della parola. Serve un secondo contatore, `lung`, per i caratteri della parola in corso.
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
> Con input `il gatto dorme sul divano` a capo `e il cane abbaia`, le parole e le loro lunghezze:
>
> | parola | il | gatto | dorme | sul | divano | e | il | cane | abbaia |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | `lung` alla chiusura | 2 | 5 | 5 | 3 | 6 | 1 | 2 | 4 | 6 |
>
> Stampa (verificato):
> ```
>  1 | * 1
>  2 | ** 2
>  3 | * 1
>  4 | * 1
>  5 | ** 2
>  6 | ** 2
> ```
> `lung` si azzera a ogni spazio bianco, ma solo se c'era una parola (`lung > 0`): così due spazi di fila non contano una parola di lunghezza 0. L'`if` dopo il ciclo chiude l'ultima parola se l'input finisce senza a capo. Le parole più lunghe di 20 finiscono tutte nella barra 20, così l'indice non esce mai dall'array. Controllo: la somma dei contatori è $1 + 2 + 1 + 1 + 2 + 2 = 9$, come le parole.

**Esercizio 11.** Scrivi l'output esatto. Cosa fa il programma, in una frase?

```c
#include <stdio.h>

#define N 7

int main(void)
{
    int v[N] = {1, 2, 3, 4, 5, 6, 7};
    int r[N];
    int k = 3;
    int i;

    for (i = 0; i < N; i++)
        r[i] = v[(i + k) % N];
    for (i = 0; i < N; i++)
        printf("%d ", r[i]);
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce l'indice "circolare" `(i + k) % N`: il resto riporta a 0 gli indici che superano $N - 1$.
>
> | `i` | `i + 3` | `(i + 3) % 7` | `r[i]` |
> | --- | --- | --- | --- |
> | 0 | 3 | 3 | 4 |
> | 1 | 4 | 4 | 5 |
> | 2 | 5 | 5 | 6 |
> | 3 | 6 | 6 | 7 |
> | 4 | 7 | 0 | 1 |
> | 5 | 8 | 1 | 2 |
> | 6 | 9 | 2 | 3 |
>
> Output: `4 5 6 7 1 2 3 ` (verificato). È una **rotazione a sinistra** di 3 posizioni: i primi tre elementi finiscono in fondo. Serve il secondo array `r`: scrivendo su `v` stesso, `v[0]` verrebbe sovrascritto prima di essere copiato in `v[4]`. È lo stesso modulo che fa girare `head` e `tail` della coda circolare (esercizio 13).

**Esercizio 12.** Un array ordinato contiene duplicati: `{1, 1, 2, 4, 4, 4, 7, 9, 9}`. Toglili sul posto, lasciando ogni valore una volta, e stampa il risultato e il nuovo numero di elementi.

> [!example]- Soluzione
> Si riconosce un filtro sul posto, come l'esercizio 6: `i` legge, `k` scrive. Siccome l'array è ordinato, i duplicati sono vicini: un valore è nuovo se è diverso dall'ultimo scritto, `v[k - 1]`.
> ```c
> #include <stdio.h>
>
> #define N 9
>
> int main(void)
> {
>     int v[N] = {1, 1, 2, 4, 4, 4, 7, 9, 9};
>     int n = N;
>     int k;
>     int i;
>
>     k = 1;
>     for (i = 1; i < n; i++) {
>         if (v[i] != v[k - 1]) {
>             v[k] = v[i];
>             k++;
>         }
>     }
>     n = k;
>     for (i = 0; i < n; i++)
>         printf("%d ", v[i]);
>     printf("\nn=%d\n", n);
>     return 0;
> }
> ```
>
> | `i` | `v[i]` | `v[k - 1]` | nuovo? | azione | `k` dopo |
> | --- | --- | --- | --- | --- | --- |
> | (inizio) | | | | `v[0]` = 1 resta | 1 |
> | 1 | 1 | 1 | no | | 1 |
> | 2 | 2 | 1 | sì | `v[1] = 2` | 2 |
> | 3 | 4 | 2 | sì | `v[2] = 4` | 3 |
> | 4 | 4 | 4 | no | | 3 |
> | 5 | 4 | 4 | no | | 3 |
> | 6 | 7 | 4 | sì | `v[3] = 7` | 4 |
> | 7 | 9 | 7 | sì | `v[4] = 9` | 5 |
> | 8 | 9 | 9 | no | | 5 |
>
> Stampa `1 2 4 7 9 ` e poi `n=5` (verificato). Controllo: cinque valori distinti nella lista di partenza (1, 2, 4, 7, 9). Le celle da 5 a 8 contengono ancora valori vecchi, ma da qui in poi l'array "finisce" a `n`.

**Esercizio 13** (coda circolare, modello della prova al calcolatore). Una coda FIFO di 4 posti è un array con due indici: `tail` dove si inserisce, `head` da dove si toglie, e `n` il numero di elementi. Scrivi l'output esatto.

```c
#include <stdio.h>

#define DIM 4

int main(void)
{
    int s[DIM] = {0};
    int head = 0;
    int tail = 0;
    int n = 0;
    int x;
    int i;

    for (i = 1; i <= 6; i++) {
        if (n < DIM) {
            s[tail] = i * 10;
            tail = (tail + 1) % DIM;
            n++;
        } else {
            printf("piena, scarto %d\n", i * 10);
        }
        if (i % 3 == 0) {
            x = s[head];
            head = (head + 1) % DIM;
            n--;
            printf("tolgo %d\n", x);
        }
    }
    printf("head=%d tail=%d n=%d:", head, tail, n);
    for (i = 0; i < n; i++)
        printf(" %d", s[(head + i) % DIM]);
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce la coda circolare: quando un indice arriva a `DIM` il `% DIM` lo riporta a 0, così le celle liberate in testa si riusano. `n` distingue coda piena da coda vuota (in tutti e due i casi `head == tail`).
>
> | `i` | inserimento | `i % 3 == 0`? | `s` dopo | `head` | `tail` | `n` | stampa |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | 1 | `s[0]` = 10 | no | `10 0 0 0` | 0 | 1 | 1 | |
> | 2 | `s[1]` = 20 | no | `10 20 0 0` | 0 | 2 | 2 | |
> | 3 | `s[2]` = 30 | sì, tolgo `s[0]` | `10 20 30 0` | 1 | 3 | 2 | `tolgo 10` |
> | 4 | `s[3]` = 40 | no | `10 20 30 40` | 1 | 0 | 3 | |
> | 5 | `s[0]` = 50 | no | `50 20 30 40` | 1 | 1 | 4 | |
> | 6 | piena | sì, tolgo `s[1]` | `50 20 30 40` | 2 | 1 | 3 | `piena, scarto 60`, `tolgo 20` |
>
> Ultimo ciclo: `s[(2 + 0) % 4]` = 30, `s[3]` = 40, `s[(2 + 2) % 4]` = `s[0]` = 50.
> ```
> tolgo 10
> piena, scarto 60
> tolgo 20
> head=2 tail=1 n=3: 30 40 50
> ```
> (verificato). Con `i = 4` `tail` passa da 3 a $(3 + 1) \% 4 = 0$: il 50 finisce nella cella 0, liberata dal 10. Il valore 20 resta scritto in `s[1]` anche dopo essere stato tolto, ma non fa più parte della coda: contano solo le `n` celle a partire da `head`.

**Esercizio 14** (algoritmo su array di struct, modello della provetta). Dato un array di 5 punti del piano, stampa il punto più lontano dall'origine (la prima occorrenza in caso di pari merito) e quanti punti stanno nel primo quadrante ($x > 0$ e $y > 0$). Usa `struct punto { int x; int y; };` ([Struct, typedef ed enum](/uni/prog-1/struct-typedef-ed-enum/)) e i punti $(1, 2)$, $(-3, 1)$, $(2, -2)$, $(3, 3)$, $(0, -4)$.

> [!example]- Soluzione
> Si riconoscono due cicli tipici nello stesso `for`: massimo con posizione e conteggio. Per confrontare le distanze basta il quadrato $x^2 + y^2$: la radice è crescente, quindi non cambia l'ordine, e si resta negli interi.
> ```c
> #include <stdio.h>
>
> #define N 5
>
> struct punto {
>     int x;
>     int y;
> };
>
> int main(void)
> {
>     struct punto p[N] = {{1, 2}, {-3, 1}, {2, -2}, {3, 3}, {0, -4}};
>     int pos = 0;
>     int primo = 0;
>     int i;
>
>     for (i = 0; i < N; i++) {
>         if (p[i].x * p[i].x + p[i].y * p[i].y > p[pos].x * p[pos].x + p[pos].y * p[pos].y)
>             pos = i;
>         if (p[i].x > 0 && p[i].y > 0)
>             primo++;
>     }
>     printf("lontano: (%d, %d) in %d\n", p[pos].x, p[pos].y, pos);
>     printf("primo quadrante: %d\n", primo);
>     return 0;
> }
> ```
>
> | `i` | punto | $x^2 + y^2$ | `pos` dopo | primo quadrante? | `primo` dopo |
> | --- | --- | --- | --- | --- | --- |
> | 0 | $(1, 2)$ | 5 | 0 (5 > 5 no) | sì | 1 |
> | 1 | $(-3, 1)$ | 10 | 1 | no | 1 |
> | 2 | $(2, -2)$ | 8 | 1 | no | 1 |
> | 3 | $(3, 3)$ | 18 | 3 | sì | 2 |
> | 4 | $(0, -4)$ | 16 | 3 | no | 2 |
>
> Output (verificato):
> ```
> lontano: (3, 3) in 3
> primo quadrante: 2
> ```
> `p[i].x` si legge `(p[i]).x`: prima l'indice sceglie la struct, poi il punto sceglie il campo (stessa precedenza, da sinistra). Il punto $(0, -4)$ non è nel primo quadrante perché $x > 0$ è falso.

**Esercizio 15** (livello del 30). Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a[8] = {0};
    int i;
    int j = 0;

    for (i = 1; i < 8; i++)
        a[i] = a[i - 1] + (i % 3 == 0 ? i : 1);
    for (i = 7; i >= 0; i -= 3)
        j += a[i]--;
    for (i = 0; i < 8; i++)
        printf("%d ", a[i]);
    printf("\nj=%d i=%d\n", j, i);
    return 0;
}
```

> [!example]- Soluzione
> Tre trappole: ogni cella dipende dalla precedente appena calcolata, il `?:` va valutato con le sue parentesi, e `a[i]--` è postfisso (si somma il valore **vecchio**, poi la cella scende).
>
> Primo ciclo:
>
> | `i` | `i % 3 == 0` | aggiunta | `a[i]` |
> | --- | --- | --- | --- |
> | 1 | no | 1 | 0 + 1 = 1 |
> | 2 | no | 1 | 1 + 1 = 2 |
> | 3 | sì | 3 | 2 + 3 = 5 |
> | 4 | no | 1 | 6 |
> | 5 | no | 1 | 7 |
> | 6 | sì | 6 | 13 |
> | 7 | no | 1 | 14 |
>
> Dopo: `0 1 2 5 6 7 13 14`.
>
> Secondo ciclo, `i` da 7 scendendo di 3:
>
> | `i` | `a[i]` prima | `j += a[i]--` | `j` dopo | `a[i]` dopo |
> | --- | --- | --- | --- | --- |
> | 7 | 14 | somma 14 | 14 | 13 |
> | 4 | 6 | somma 6 | 20 | 5 |
> | 1 | 1 | somma 1 | 21 | 0 |
> | -2 | `-2 >= 0` falso, esce | | | |
>
> Il terzo ciclo stampa e lascia `i` a 8.
> ```
> 0 0 2 5 5 7 13 13 
> j=21 i=8
> ```
> (verificato). Controllo: le celle cambiate dal secondo ciclo sono esattamente le tre visitate (7, 4, 1), ognuna scesa di 1; e `j` è la somma dei valori **prima** del decremento, $14 + 6 + 1$. Con `--a[i]` (prefisso) `j` varrebbe $13 + 5 + 0 = 18$.

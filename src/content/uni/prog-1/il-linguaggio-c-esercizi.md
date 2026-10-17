---
title: Il Linguaggio C (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-11
lezioni: []
ordine: 2
---

Esercizi tipo esame di [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** (Facile) Quali di questi identificatori sono validi in C? Per quelli non validi, di' perché.

```
_x1    2pi    int    Int    somma totale    somma_totale    sizeof    a-b    MAX_VAL    città    then
```

> [!example]- Soluzione
> Si applicano le tre regole a ciascuno: primo carattere, caratteri ammessi, keyword.
>
> | identificatore | valido? | perché |
> | --- | --- | --- |
> | `_x1` | sì | inizia con `_`, poi lettera e cifra |
> | `2pi` | no | inizia con una cifra |
> | `int` | no | parola chiave |
> | `Int` | sì | il C è case sensitive: non è `int` |
> | `somma totale` | no | contiene uno spazio: sono due identificatori |
> | `somma_totale` | sì | |
> | `sizeof` | no | parola chiave (è anche un operatore) |
> | `a-b` | no | il `-` è un operatore: si legge `a` meno `b` |
> | `MAX_VAL` | sì | maiuscole e `_` vanno bene |
> | `città` | no | la `à` non è una lettera ammessa |
> | `then` | sì | in C non è una keyword (lo è in Pascal) |

**Esercizio 2.** (Facile) Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 2;
    int b;

    b = a * 3;
    a = b - a;
    b = b + a;
    printf("a = %d, b = %d\n", a, b);
    return 0;
}
```

> [!example]- Soluzione
> Solo assegnazioni in sequenza: tabella, una riga per istruzione, la destra calcolata con i valori della riga sopra.
>
> | istruzione | calcolo | `a` | `b` |
> | --- | --- | --- | --- |
> | iniziale | | 2 | ? |
> | `b = a * 3;` | $2 \cdot 3 = 6$ | 2 | 6 |
> | `a = b - a;` | $6 - 2 = 4$ | 4 | 6 |
> | `b = b + a;` | $6 + 4 = 10$ | 4 | 10 |
>
> Output: `a = 4, b = 10` (verificato). Controllo: nella terza riga `a` vale già 4, non più 2.

**Esercizio 3.** (Medio) Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 3;
    int b = 4;
    int c;

    c = a;
    a = b;
    b = c;
    printf("%d %d %d\n", a, b, c);
    a = b = c = 2;
    a = a + b * c;
    printf("%d %d %d\n", a, b, c);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | calcolo | `a` | `b` | `c` |
> | --- | --- | --- | --- | --- |
> | iniziale | | 3 | 4 | ? |
> | `c = a;` | | 3 | 4 | 3 |
> | `a = b;` | | 4 | 4 | 3 |
> | `b = c;` | | 4 | 3 | 3 |
> | `printf` | stampa `4 3 3` | | | |
> | `a = b = c = 2;` | da destra: `c`, poi `b`, poi `a` | 2 | 2 | 2 |
> | `a = a + b * c;` | $2 + 2 \cdot 2 = 6$ (prima la moltiplicazione) | 6 | 2 | 2 |
> | `printf` | stampa `6 2 2` | | | |
>
> Output: `4 3 3` e poi `6 2 2` (verificato). Le prime tre assegnazioni scambiano `a` e `b` usando `c` come appoggio: senza, `a = b; b = a;` stamperebbe `4 4`, perché il valore di `a` è perso.

**Esercizio 4.** (Medio) Quali di queste istruzioni sono sbagliate, e che tipo di errore è (sintassi o semantica)? `x`, `y`, `somma`, `media` sono `int` dichiarati.

```
1)  x = 5
2)  5 = x;
3)  x + 1 = y;
4)  media = somma / 0;
5)  Printf("ciao\n");
6)  scanf("%d", x);
7)  x = y + 1;
```

> [!example]- Soluzione
> 1. Sintassi: manca il `;`.
> 2. e 3. Il lato sinistro di **=** deve avere un l-value, cioè essere una cella. `5` e `x + 1` sono solo valori: il compilatore rifiuta (`lvalue required as left operand of assignment`).
> 4. Sintatticamente corretta, semanticamente sbagliata: si compila (gcc avvisa `division by zero`) e il programma muore a run-time (`Floating point exception`).
> 5. Il C è case sensitive: `Printf` non è `printf`. gcc 16 dà errore `implicit declaration of function 'Printf'` e suggerisce `printf`.
> 6. Semantica: compila con un warning (`expects argument of type 'int *'`), ma `scanf` riceve il valore di `x` invece del suo indirizzo e scrive in una cella sbagliata. Manca la `&`.
> 7. Corretta.
>
> Tutti verificati con gcc 16.

**Esercizio 5.** (Medio) SI o NO?
1. Il C è un linguaggio interpretato.
2. Il linker produce il codice oggetto `.o`.
3. `/* ... */` può occupare più righe.
4. In `scanf("%d", &x)` la `&` si può togliere.
5. Una variabile locale non inizializzata vale 0.
6. `x = x + 1` è un'istruzione C sintatticamente corretta (a parte il `;`).
7. Un warning impedisce di produrre l'eseguibile.
8. `var` e `Var` possono essere due variabili diverse nello stesso programma.
9. Il valore dell'espressione `x = 7` è 7.

> [!example]- Soluzione
> 1. NO, è compilato.
> 2. NO, il `.o` lo produce il compilatore; il linker unisce i `.o` e le librerie nell'eseguibile.
> 3. SI.
> 4. NO, `scanf` ha bisogno dell'indirizzo della cella in cui scrivere.
> 5. NO, il valore è indeterminato (le globali invece partono da 0).
> 6. SI: in C non è un'equazione, è "leggi, somma, riscrivi".
> 7. NO, solo un errore lo impedisce. Il warning va comunque letto.
> 8. SI, il C è case sensitive.
> 9. SI, il valore di un'assegnazione è quello di `exp2`.

**Esercizio 6.** (Codice breve) Scrivi un programma che legge tre interi `a`, `b`, `c` e li "ruota": `a` prende il valore di `b`, `b` quello di `c`, `c` quello di `a`. Poi li stampa. Con input `1 2 3` deve stampare `2 3 1`.

> [!example]- Soluzione
> Riconoscimento: è lo scambio di due variabili, esteso a tre. La prima assegnazione sovrascrive `a`, quindi il suo vecchio valore va salvato prima in una variabile di appoggio `t`.
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int a;
>     int b;
>     int c;
>     int t;
>
>     printf("Tre interi: ");
>     if (scanf("%d %d %d", &a, &b, &c) != 3) {
>         printf("input non valido\n");
>         return 1;
>     }
>     t = a;
>     a = b;
>     b = c;
>     c = t;
>     printf("%d %d %d\n", a, b, c);
>     return 0;
> }
> ```
>
> | istruzione | `a` | `b` | `c` | `t` |
> | --- | --- | --- | --- | --- |
> | dopo `scanf` con `1 2 3` | 1 | 2 | 3 | ? |
> | `t = a;` | 1 | 2 | 3 | 1 |
> | `a = b;` | 2 | 2 | 3 | 1 |
> | `b = c;` | 2 | 3 | 3 | 1 |
> | `c = t;` | 2 | 3 | 1 | 1 |
>
> Stampa `Tre interi: 2 3 1`; con `1 2` stampa `Tre interi: input non valido` (verificato). Controllo: ogni valore iniziale compare una volta sola nel risultato.

**Esercizio 7.** (Trova gli errori) Il programma dovrebbe leggere un intero e stampare il doppio. Trova tutti gli errori, di' di che tipo sono e correggilo.

```
#include <stdio.h>

int main(void)
{
    int double;
    int n;
    int doppio

    scanf("%d", n);
    doppio = 2 * n;
    printf("%d\n", Doppio);
    return 0;
}
```

> [!example]- Soluzione
> Riga per riga (gcc 16 sul programma così com'è):
> 1. `int double;`: `double` è una parola chiave, non si può usare come nome (`two or more data types in declaration specifiers`). La variabile non serve: si toglie.
> 2. `int doppio` senza `;`: errore di sintassi, segnalato alla riga dopo (`expected ... before 'scanf'`).
> 3. `scanf("%d", n);`: manca la `&`. Errore semantico, gcc lo segnala solo come warning.
> 4. `printf("%d\n", Doppio);`: `Doppio` non è `doppio`, il C è case sensitive (`'Doppio' undeclared`).
> 5. Non è un errore ma manca il controllo sul valore di ritorno di `scanf`.
>
> Corretto:
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int doppio;
>
>     if (scanf("%d", &n) != 1) {
>         return 1;
>     }
>     doppio = 2 * n;
>     printf("%d\n", doppio);
>     return 0;
> }
> ```
>
> Con `21` stampa `42` (verificato).

**Esercizio 8.** (Livello 30) Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int x = 2;
    int y;
    int z;

    z = (y = x * 3) + x;
    printf("x = %d, y = %d, z = %d\n", x, y, z);
    x = y = z - y;
    printf("x = %d, y = %d, z = %d\n", x, y, z);
    z = z - (x = x + 5);
    printf("x = %d, y = %d, z = %d\n", x, y, z);
    return 0;
}
```

> [!example]- Soluzione
> Riconoscimento: assegnazioni usate come espressioni. Regola: un'assegnazione fra parentesi si esegue (cambia la variabile) e vale il valore assegnato.
>
> | istruzione | passo | `x` | `y` | `z` |
> | --- | --- | --- | --- | --- |
> | iniziale | | 2 | ? | ? |
> | `z = (y = x * 3) + x;` | `y = 2 * 3`: `y` diventa 6, l'assegnazione vale 6 | 2 | 6 | ? |
> | | $6 + x = 6 + 2 = 8$, scritto in `z` | 2 | 6 | 8 |
> | `x = y = z - y;` | destra della catena: $z - y = 8 - 6 = 2$, scritto in `y` | 2 | 2 | 8 |
> | | quel 2 scritto in `x` | 2 | 2 | 8 |
> | `z = z - (x = x + 5);` | `x = 2 + 5`: `x` diventa 7, l'assegnazione vale 7 | 7 | 2 | 8 |
> | | $z - 7 = 8 - 7 = 1$, scritto in `z` | 7 | 2 | 1 |
>
> Output (verificato):
>
> ```
> x = 2, y = 6, z = 8
> x = 2, y = 2, z = 8
> x = 7, y = 2, z = 1
> ```
>
> La trappola è la seconda riga: `x = y = z - y` si calcola **prima** con il vecchio `y` (6), e solo dopo `y` diventa 2. Chi aggiorna `y` a metà calcolo ottiene un risultato sbagliato. La seconda trappola: `x` vale 2 anche prima della seconda riga, quindi la riga non cambia `x` in apparenza.

**Esercizio 9.** (Livello 30) Il programma legge `7 3` da tastiera. Scrivi l'output esatto e di' cosa fa in generale.

```c
#include <stdio.h>

int main(void)
{
    int a;
    int b;

    if (scanf("%d %d", &a, &b) != 2) {
        return 1;
    }
    a = a - b;
    b = a + b;
    a = b - a;
    printf("%d %d\n", a, b);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | calcolo | `a` | `b` |
> | --- | --- | --- | --- |
> | dopo `scanf` | | 7 | 3 |
> | `a = a - b;` | $7 - 3 = 4$ | 4 | 3 |
> | `b = a + b;` | $4 + 3 = 7$ | 4 | 7 |
> | `a = b - a;` | $7 - 4 = 3$ | 3 | 7 |
>
> Output: `3 7` (verificato). In generale **scambia** `a` e `b` senza variabile di appoggio. Con i simboli, partendo da $a_0$ e $b_0$: dopo la prima riga $a = a_0 - b_0$; dopo la seconda $b = (a_0 - b_0) + b_0 = a_0$; dopo la terza $a = a_0 - (a_0 - b_0) = b_0$. Controllo con un altro input: `-2 5` stampa `5 -2` (verificato).

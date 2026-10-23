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

Dal più facile al livello del 30. Per i tracing: tabella delle variabili, una riga per giro, con i valori **dopo** espr3. Gli esercizi 11-24 sono le **figure con i cicli**, che alla provetta escono quasi sempre ("obbligatorio usare i cicli"): fatti in ordine, ognuno usa un'idea in più del precedente.

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
> Si riconosce un `for` con passo diverso da 1: si elencano i valori.
>
> | giro | `i` nel corpo | `s` | `i` dopo espr3 |
> | --- | --- | --- | --- |
> | 1 | 10 | 10 | 7 |
> | 2 | 7 | 17 | 4 |
> | 3 | 4 | 21 | 1 |
> | 4 | 1 | 22 | -2 |
> | | $-2 > 0$ falso | | |
>
> 4 giri. Output: `i=-2 s=22` (verificato). Controllo: $10 + 7 + 4 + 1 = 22$.

**Esercizio 2.** Per ogni intestazione scrivi quante volte gira il corpo (che non tocca `i`) e quanto vale `i` all'uscita.

- a) `for (i = 7; i >= 0; i -= 2)`
- b) `for (i = 1; i <= 1000; i *= 10)`
- c) `for (i = 50; i > 0; i /= 2)`
- d) `for (i = 0; i != 9; i += 3)`
- e) `for (i = 10; i < 5; i--)`
- f) `for (i = 0; i != 10; i += 3)`

> [!example]- Soluzione
> Si elencano i valori che entrano nel corpo; il primo che rende falsa la condizione è il valore di uscita.
> - a) 7, 5, 3, 1: **4 giri**, esce con $-1$.
> - b) 1, 10, 100, 1000: **4 giri**, esce con 10000.
> - c) 50, 25, 12, 6, 3, 1 (divisione intera: 25 / 2 = 12, 3 / 2 = 1): **6 giri**, esce con 1 / 2 = 0.
> - d) 0, 3, 6: **3 giri**, esce con 9.
> - e) `10 < 5` è falso subito: **0 giri**, `i` resta 10. Il `i--` non conta: espr3 non viene mai eseguita.
> - f) 0, 3, 6, 9, 12, … `i` non vale mai esattamente 10: **non termina** (prima o poi `i` supera il massimo di un `int`, ed è comportamento indefinito). Con le condizioni di uscita si usa `<` invece di `!=`.
>
> a)-e) verificati stampando i giri e la `i` finale: `4 -1`, `4 10000`, `6 0`, `3 9`, `0 10`.

**Esercizio 3.** Scrivi l'output esatto.

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
> Si riconosce il confronto fra i due cicli con la condizione falsa da subito.
>
> | ciclo | prima valutazione | corpo | `x` | giri |
> | --- | --- | --- | --- | --- |
> | `while` | `5 < 5` falso | mai | 5 | 0 |
> | `do-while` | (dopo il corpo) | una volta: `x` = 6 | 6 | 1 |
> | | `6 < 5` falso, esce | | 6 | 1 |
>
> ```
> while: x=5 giri=0
> do-while: x=6 giri=1
> ```
> (verificato). Il `while` non entra, il `do-while` fa comunque un giro, porta `x` a 6 e solo dopo controlla.

**Esercizio 4.** Scrivi l'output esatto.

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
> | ciclo | giro | stampa | `k` dopo | `k < 10` |
> | --- | --- | --- | --- | --- |
> | primo | 1 | `0 ` | 4 | vero |
> | | 2 | `4 ` | 8 | vero |
> | | 3 | `8 ` | 12 | falso |
> | secondo | 1 | `20 ` | 24 | falso |
>
> ```
> 0 4 8 | k=12
> 20 | k=24
> ```
> (verificato). Nel secondo ciclo $k = 20$ non soddisfa $k < 10$, ma il corpo gira lo stesso una volta: stampa 20 e porta `k` a 24.

**Esercizio 5** (prima provetta, 22/10/2024, <span class="src">domanda 2</span>). Si scriva esattamente l'output mostrato da ciascuna istruzione `printf`.

```
int i, n=10;
for(i=0; i<n; ++i)   { printf("%d_",i++); }

int i, n=10;
for(i=0; i<n; i++)   { printf("%d_",++i); }

int i, n=10;
for(i=0; i<n; i=i+2) { printf("%d_",i--); }
```

> [!example]- Soluzione
> Si riconosce il tranello: la variabile di ciclo cambia **anche** nel corpo. In espr3 `++i` e `i++` sono uguali; nel `printf` no. Per ogni ciclo una tabella con `i` dopo il corpo e dopo espr3.
>
> Primo, `printf("%d_", i++)` stampa il valore **vecchio**:
>
> | giro | `i` a inizio corpo | stampa | `i` dopo il corpo | `i` dopo `++i` |
> | --- | --- | --- | --- | --- |
> | 1 | 0 | `0_` | 1 | 2 |
> | 2 | 2 | `2_` | 3 | 4 |
> | 3 | 4 | `4_` | 5 | 6 |
> | 4 | 6 | `6_` | 7 | 8 |
> | 5 | 8 | `8_` | 9 | 10 |
>
> `10 < 10` falso. Output: `0_2_4_6_8_`.
>
> Secondo, `printf("%d_", ++i)` aumenta e poi stampa il valore **nuovo**:
>
> | giro | `i` a inizio corpo | stampa | `i` dopo il corpo | `i` dopo `i++` |
> | --- | --- | --- | --- | --- |
> | 1 | 0 | `1_` | 1 | 2 |
> | 2 | 2 | `3_` | 3 | 4 |
> | 3 | 4 | `5_` | 5 | 6 |
> | 4 | 6 | `7_` | 7 | 8 |
> | 5 | 8 | `9_` | 9 | 10 |
>
> Output: `1_3_5_7_9_`.
>
> Terzo, `printf("%d_", i--)` stampa il vecchio e poi toglie 1, espr3 aggiunge 2: in tutto `i` avanza di 1 per giro.
>
> | giro | `i` a inizio corpo | stampa | `i` dopo il corpo | `i` dopo `i=i+2` |
> | --- | --- | --- | --- | --- |
> | 1 | 0 | `0_` | -1 | 1 |
> | 2 | 1 | `1_` | 0 | 2 |
> | … | … | … | … | … |
> | 10 | 9 | `9_` | 8 | 10 |
>
> Output: `0_1_2_3_4_5_6_7_8_9_`.
>
> Verificati tutti e tre compilando (con le virgolette dritte: quelle curve del testo d'esame non compilano). Controllo di buon senso: nei primi due `i` avanza di 2 per giro, quindi 5 giri e 5 numeri; nel terzo avanza di 1, quindi 10 numeri.

**Esercizio 6.** Scrivi l'output esatto.

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

**Esercizio 7.** Quanto vale `conta` alla fine? E `i` e `j`?

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
> Il ciclo interno parte da `i`, quindi i suoi giri dipendono dal giro esterno:
>
> | `i` | valori di `j` | giri interni | `conta` |
> | --- | --- | --- | --- |
> | 0 | 0, 1, 2, 3 | 4 | 4 |
> | 1 | 1, 2, 3 | 3 | 7 |
> | 2 | 2, 3 | 2 | 9 |
> | 3 | 3 | 1 | 10 |
>
> In tutto $4 + 3 + 2 + 1 = 4 \cdot 5 / 2 = 10$. Output: `conta=10 i=4 j=4` (verificato). `j` vale 4 perché l'ultimo ciclo interno, con $i = 3$, esce con $j = 4$.

**Esercizio 8.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int i;
    int j;
    int s = 0;

    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= 4; j++) {
            if (j > i) {
                break;
            }
            if ((i + j) % 2 == 1) {
                continue;
            }
            s += i * j;
        }
    }
    printf("s=%d i=%d j=%d\n", s, i, j);
    return 0;
}
```

> [!example]- Soluzione
> Si riconoscono `break` e `continue` nel ciclo **interno**: agiscono solo su di lui. Il `break` ferma `j` appena supera `i` (quindi `j` va da 1 a `i`), il `continue` salta le coppie con somma dispari.
>
> | `i` | `j` | `j > i` | `(i + j) % 2` | azione | `s` |
> | --- | --- | --- | --- | --- | --- |
> | 1 | 1 | no | 0 | `s += 1` | 1 |
> | 1 | 2 | sì | | `break` | 1 |
> | 2 | 1 | no | 1 | `continue` | 1 |
> | 2 | 2 | no | 0 | `s += 4` | 5 |
> | 2 | 3 | sì | | `break` | 5 |
> | 3 | 1 | no | 0 | `s += 3` | 8 |
> | 3 | 2 | no | 1 | `continue` | 8 |
> | 3 | 3 | no | 0 | `s += 9` | 17 |
> | 3 | 4 | sì | | `break` | 17 |
> | 4 | 1 | no | 1 | `continue` | 17 |
> | 4 | 2 | no | 0 | `s += 8` | 25 |
> | 4 | 3 | no | 1 | `continue` | 25 |
> | 4 | 4 | no | 0 | `s += 16` | 41 |
> | 4 | 5 | | | `5 <= 4` falso: il ciclo interno finisce da sé | 41 |
>
> Poi `i` diventa 5 ed esce anche l'esterno. Output: `s=41 i=5 j=5` (verificato). Il dettaglio da 30: con $i = 4$ non c'è nessun `break`, quindi `j` esce con 5 e non con $i + 1$ per via del `break`. Il valore è lo stesso, la ragione no.

**Esercizio 9.** Il `for` e il `while` qui sotto sono equivalenti? Se no, correggi il `while`.

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

**Esercizio 10.** Riscrivi con un `for` e poi con un `do-while`, mantenendo lo stesso comportamento per ogni $n$:

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

**Esercizio 11** (figure, 1). Scrivi un programma che stampa un rettangolo pieno di `*` con $R = 3$ righe e $C = 5$ colonne, definite con `#define`. Obbligatorio usare i cicli.

```
*****
*****
*****
```

> [!example]- Soluzione
> Ogni riga è uguale: C asterischi e un a capo. Ciclo esterno sulle righe, interno sulle colonne.
> ```c
> #include <stdio.h>
>
> #define R 3
> #define C 5
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 0; r < R; r++) {
>         for (c = 0; c < C; c++) {
>             printf("*");
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Il `printf("*")` gira $3 \cdot 5 = 15$ volte, il `printf("\n")` 3. Se sposti `printf("\n")` dentro il ciclo interno ottieni 15 righe con un asterisco ciascuna.

**Esercizio 12** (figure, 2). Scrivi l'output esatto per $N = 4$.

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
> Si riconosce la condizione sulla cella: nella riga `r` sono `*` le colonne da 0 a `r`, le altre `.`.
>
> | `r` | colonne con `c <= r` | riga stampata |
> | --- | --- | --- |
> | 0 | 0 | `*...` |
> | 1 | 0, 1 | `**..` |
> | 2 | 0, 1, 2 | `***.` |
> | 3 | 0, 1, 2, 3 | `****` |
>
> ```
> *...
> **..
> ***.
> ****
> ```
> (verificato). Con il `for` non c'è il rischio del `while` di dimenticare di azzerare `c` a ogni riga: espr1 lo fa a ogni ripartenza del ciclo interno.

**Esercizio 13** (figure, 3). Stampa il triangolo capovolto, con $N = 4$ in una `#define`.

```
****
***
**
*
```

> [!example]- Soluzione
> Modo 1, conto per riga: le righe hanno 4, 3, 2, 1 asterischi. Basta far scendere il contatore delle righe da N a 1 e stampare `r` asterischi.
> ```c
> #include <stdio.h>
>
> #define N 4
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = N; r >= 1; r--) {
>         for (c = 1; c <= r; c++) {
>             printf("*");
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). In alternativa con `r` da 0 a $N - 1$ si stampano $N - r$ asterischi: `for (c = 0; c < N - r; c++)`. Controllo sulla prima riga: $r = 0$ dà 4, sull'ultima $r = 3$ dà 1.

**Esercizio 14** (figure, 4). Stampa il triangolo allineato a destra, con $N = 4$.

```
   *
  **
 ***
****
```

> [!example]- Soluzione
> Ogni riga ha due pezzi contigui: prima gli spazi, poi gli asterischi. Nella riga $r$ (da 1 a N) ci sono $N - r$ spazi e $r$ asterischi: la riga 1 ha 3 spazi e 1 asterisco, la 4 ha 0 spazi e 4 asterischi. Due cicli interni, uno per pezzo.
> ```c
> #include <stdio.h>
>
> #define N 4
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 1; r <= N; r++) {
>         for (c = 1; c <= N - r; c++) {
>             printf(" ");
>         }
>         for (c = 1; c <= r; c++) {
>             printf("*");
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Gli spazi a destra non servono: la riga finisce con l'ultimo asterisco. Con il modo 2 la condizione sarebbe $c \geq N - 1 - r$ (indici da 0), più difficile da trovare.

**Esercizio 15** (figure, 5; prima provetta 22/10/2024, <span class="src">domanda 3</span>). Scrivere un programma in grado di stampare a video la tabella riportata in figura. Obbligatorio usare i cicli!

```
0 1 2 3
1 2 3 4
2 3 4 5
```

> [!example]- Soluzione
> Si riconosce una tabella con un numero per cella: 3 righe, 4 colonne. Cosa vale la cella? Numerando righe e colonne da 0, nella riga 0 c'è il numero della colonna, e ogni riga sotto aggiunge 1: la cella $(r, c)$ vale $r + c$. Controllo su un'altra cella: riga 2, colonna 3 vale $2 + 3 = 5$, come nel disegno.
> ```c
> #include <stdio.h>
>
> #define R 3
> #define C 4
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 0; r < R; r++) {
>         for (c = 0; c < C; c++) {
>             printf("%2d", r + c);
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output (verificato):
> ```
>  0 1 2 3
>  1 2 3 4
>  2 3 4 5
> ```
> `%2d` mette ogni numero su due caratteri, quindi la riga inizia con uno spazio. Con `printf("%d ", r + c)` la riga è `0 1 2 3 ` con uno spazio in coda: tutte e due vanno bene per la provetta, la richiesta è la tabella. Una soluzione con tre `printf` della riga intera vale zero.

**Esercizio 16** (figure, 6). Stampa la cornice di lato $N = 5$.

```
*****
*   *
*   *
*   *
*****
```

> [!example]- Soluzione
> Qui i pezzi pieni non sono contigui (nelle righe centrali c'è un asterisco, spazi, un asterisco), quindi modo 2: condizione sulla cella. Una cella è sul bordo se sta nella prima o nell'ultima riga, o nella prima o nell'ultima colonna.
> ```c
> #include <stdio.h>
>
> #define N 5
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 0; r < N; r++) {
>         for (c = 0; c < N; c++) {
>             if (r == 0 || r == N - 1 || c == 0 || c == N - 1) {
>                 printf("*");
>             } else {
>                 printf(" ");
>             }
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Controllo: la cella $(2, 2)$, al centro, ha tutte e quattro le uguaglianze false e stampa uno spazio. L'ultima colonna è `N - 1` e non `N`, perché gli indici vanno da 0.

**Esercizio 17** (figure, 7). Stampa le due figure seguenti, con $N = 4$, separate da una riga vuota.

```
1
22
333
4444

1
12
123
1234
```

> [!example]- Soluzione
> Stessa struttura del triangolo (riga $r$ con $r$ caratteri), cambia solo **cosa** si stampa: nella prima figura il numero della riga, nella seconda il numero della colonna.
> ```c
> #include <stdio.h>
>
> #define N 4
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 1; r <= N; r++) {
>         for (c = 1; c <= r; c++) {
>             printf("%d", r);
>         }
>         printf("\n");
>     }
>     printf("\n");
>     for (r = 1; r <= N; r++) {
>         for (c = 1; c <= r; c++) {
>             printf("%d", c);
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). È il modo più veloce per capire chi è chi: `r` è costante lungo una riga, `c` è costante lungo una colonna.

**Esercizio 18** (figure, 8). Stampa la scacchiera $5 \times 5$.

```
#.#.#
.#.#.
#.#.#
.#.#.
#.#.#
```

> [!example]- Soluzione
> Le `#` stanno dove la somma degli indici è pari: muovendosi di una cella in orizzontale o in verticale $r + c$ cambia di 1 e la parità si alterna, come i colori di una scacchiera. Cella $(0, 0)$: somma 0, pari, `#`.
> ```c
> #include <stdio.h>
>
> #define N 5
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 0; r < N; r++) {
>         for (c = 0; c < N; c++) {
>             if ((r + c) % 2 == 0) {
>                 printf("#");
>             } else {
>                 printf(".");
>             }
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Le parentesi attorno a `r + c` servono: `%` lega più di `+`, e `r + c % 2` vorrebbe dire `r + (c % 2)`.

**Esercizio 19** (figure, 9). Stampa la tavola pitagorica $5 \times 5$ con le intestazioni.

```
   |  1  2  3  4  5
---+---------------
 1 |  1  2  3  4  5
 2 |  2  4  6  8 10
 3 |  3  6  9 12 15
 4 |  4  8 12 16 20
 5 |  5 10 15 20 25
```

> [!example]- Soluzione
> Tre parti: la riga delle intestazioni (un ciclo sulle colonne), la riga di trattini (un ciclo, 3 trattini per colonna), poi le righe dei prodotti, ognuna con il suo numero davanti. Ogni numero occupa 3 caratteri con `%3d`, per questo i trattini sono 3 per colonna.
> ```c
> #include <stdio.h>
>
> #define N 5
>
> int main(void)
> {
>     int r;
>     int c;
>
>     printf("   |");
>     for (c = 1; c <= N; c++) {
>         printf("%3d", c);
>     }
>     printf("\n");
>     printf("---+");
>     for (c = 1; c <= N; c++) {
>         printf("---");
>     }
>     printf("\n");
>     for (r = 1; r <= N; r++) {
>         printf("%2d |", r);
>         for (c = 1; c <= N; c++) {
>             printf("%3d", r * c);
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Il punto delicato è l'allineamento: `%2d |` per il numero di riga produce 4 caratteri, come `"   |"` e `"---+"`.

**Esercizio 20** (figure, 10). Stampa la piramide di $N = 4$ righe.

```
   *
  ***
 *****
*******
```

> [!example]- Soluzione
> Righe con pezzi contigui: modo 1. Si conta, per la riga $r$ da 1 a N:
>
> | `r` | spazi | asterischi |
> | --- | --- | --- |
> | 1 | 3 | 1 |
> | 2 | 2 | 3 |
> | 3 | 1 | 5 |
> | 4 | 0 | 7 |
>
> Gli spazi calano di 1: $N - r$. Gli asterischi crescono di 2 partendo da 1: sono i dispari, $2r - 1$.
> ```c
> #include <stdio.h>
>
> #define N 4
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 1; r <= N; r++) {
>         for (c = 1; c <= N - r; c++) {
>             printf(" ");
>         }
>         for (c = 1; c <= 2 * r - 1; c++) {
>             printf("*");
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Controllo sull'ultima riga: larghezza $2N - 1 = 7$, ed è la riga più larga, quindi la figura è larga 7.

**Esercizio 21** (figure, 11). Stampa con $N = 7$ il quadrato con cornice `#` e diagonali `x`, il resto `.`.

```
#######
#x...x#
#.x.x.#
#..x..#
#.x.x.#
#x...x#
#######
```

> [!example]- Soluzione
> Tre tipi di cella, quindi catena `if ... else if ... else`. L'ordine conta: la cornice va controllata **prima** delle diagonali, perché gli angoli stanno su tutte e due e nel disegno sono `#`.
> ```c
> #include <stdio.h>
>
> #define N 7
>
> int main(void)
> {
>     int r;
>     int c;
>
>     for (r = 0; r < N; r++) {
>         for (c = 0; c < N; c++) {
>             if (r == 0 || r == N - 1 || c == 0 || c == N - 1) {
>                 printf("#");
>             } else if (r == c || r + c == N - 1) {
>                 printf("x");
>             } else {
>                 printf(".");
>             }
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Controllo sulla riga 3, quella centrale: solo $(3, 3)$ soddisfa le diagonali ($3 = 3$ e $3 + 3 = 6 = N - 1$), quindi una sola `x`. Con N pari le due diagonali non si incontrano mai in una cella.

**Esercizio 22** (figure, 12, livello 30). Stampa il rombo con $N = 3$ (la riga centrale ha $2N - 1$ asterischi). Il programma deve funzionare per ogni N.

```
  *
 ***
*****
 ***
  *
```

> [!example]- Soluzione
> Prima strada: due piramidi, quella dell'esercizio 20 e la stessa capovolta senza la riga centrale. Funziona, ma scrive due volte gli stessi cicli.
>
> Strada più furba: numerare le righe da $-(N - 1)$ a $N - 1$, cioè $-2, -1, 0, 1, 2$, e chiamare $k$ la distanza dalla riga centrale, $k = \vert r \vert$. Allora:
>
> | `r` | `k` | spazi $= k$ | asterischi $= 2(N - k) - 1$ |
> | --- | --- | --- | --- |
> | -2 | 2 | 2 | 1 |
> | -1 | 1 | 1 | 3 |
> | 0 | 0 | 0 | 5 |
> | 1 | 1 | 1 | 3 |
> | 2 | 2 | 2 | 1 |
>
> ```c
> #include <stdio.h>
>
> #define N 3
>
> int main(void)
> {
>     int r;
>     int c;
>     int k;
>
>     for (r = -(N - 1); r <= N - 1; r++) {
>         k = r < 0 ? -r : r;
>         for (c = 1; c <= k; c++) {
>             printf(" ");
>         }
>         for (c = 1; c <= 2 * (N - k) - 1; c++) {
>             printf("*");
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Output identico al disegno (verificato). Il valore assoluto è il `?:` di [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/). Il ciclo esterno fa $2N - 1 = 5$ giri, uno per riga.

**Esercizio 23** (figure, 13, livello 30). Scrivi l'output esatto: qui la figura va ricostruita dal codice.

```c
#include <stdio.h>

#define N 5

int main(void)
{
    int r;
    int c;

    for (r = 0; r < N; r++) {
        for (c = 0; c < N; c++) {
            if (c >= r && c <= N - 1 - r) {
                printf("%d", c - r);
            } else if (c < r && c > N - 1 - r) {
                printf("o");
            } else {
                printf(".");
            }
        }
        printf("\n");
    }
    return 0;
}
```

> [!example]- Soluzione
> Si traducono le condizioni in zone della griglia. `c >= r` è sopra (o sulla) diagonale principale, `c <= N - 1 - r` è sopra (o sulla) diagonale secondaria: insieme formano il triangolo in alto, con la punta in giù al centro. `c < r && c > N - 1 - r` è sotto tutte e due, il triangolo in basso. Il resto (i due triangoli laterali) è `.`.
>
> Riga per riga, con $N - 1 - r$ calcolato:
>
> | `r` | $N - 1 - r$ | zona in alto: `c` da `r` a $N - 1 - r$ | zona in basso: $N - 1 - r < c < r$ | riga |
> | --- | --- | --- | --- | --- |
> | 0 | 4 | 0..4, stampa `c - 0`: 0 1 2 3 4 | nessuna | `01234` |
> | 1 | 3 | 1..3, stampa 0 1 2 | nessuna | `.012.` |
> | 2 | 2 | solo 2, stampa 0 | nessuna | `..0..` |
> | 3 | 1 | nessuna ($3 > 1$) | $1 < c < 3$: solo 2 | `..o..` |
> | 4 | 0 | nessuna | $0 < c < 4$: 1, 2, 3 | `.ooo.` |
>
> Output (verificato):
> ```
> 01234
> .012.
> ..0..
> ..o..
> .ooo.
> ```
> Una clessidra. Il numero stampato `c - r` è la distanza dalla diagonale principale, per questo ogni riga della zona alta riparte da 0.

**Esercizio 24** (figure, 14, prova al calcolatore). Scrivi un programma che chiede il numero di righe $n$ fra 1 e 6, ripetendo la domanda finché il valore non è valido, e stampa il triangolo di Floyd: i numeri consecutivi da 1, uno in più per riga. Con $n = 5$:

```
  1
  2  3
  4  5  6
  7  8  9 10
 11 12 13 14 15
```

> [!example]- Soluzione
> Due pezzi già visti: input con `do-while` e triangolo con `c` da 1 a `r`. La novità è il numero stampato, che non dipende né da `r` né da `c` da solo ma continua da una riga all'altra: serve un contatore `k` **fuori** dai cicli, che si aumenta dopo ogni stampa.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int r;
>     int c;
>     int k = 1;
>
>     do {
>         printf("righe (1-6): ");
>         if (scanf("%d", &n) != 1) {
>             return 1;
>         }
>     } while (n < 1 || n > 6);
>     printf("\n");
>     for (r = 1; r <= n; r++) {
>         for (c = 1; c <= r; c++) {
>             printf("%3d", k);
>             k++;
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Con input `0`, `9`, `5` chiede tre volte e stampa il triangolo del testo (verificato). Controllo: l'ultimo numero è $1 + 2 + \ldots + n = n(n + 1)/2$, per $n = 5$ fa 15. Se `k` fosse inizializzato dentro il ciclo esterno, ogni riga ripartirebbe da 1.

**Esercizio 25.** Scrivi un programma che chiede un intero $n$ fra 1 e 10, ripetendo la domanda finché il valore è fuori range, e poi stampa $n!$ con un `for`.

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
>
> Tracing con $n = 5$: `fatt` vale 1, poi $\cdot 2 = 2$, $\cdot 3 = 6$, $\cdot 4 = 24$, $\cdot 5 = 120$; `i` esce con 6.

**Esercizio 26.** Scrivi un programma che legge voti fino al valore $-1$, ignora con un messaggio quelli fuori dall'intervallo 18-30 e stampa quanti voti validi ha letto e la loro media con due decimali.

> [!example]- Soluzione
> Ciclo con sentinella: `while`, perché la sequenza può essere vuota. Il voto fuori range si scarta con `continue`, che salta somma e conteggio.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int voto;
>     int somma = 0;
>     int validi = 0;
>
>     while (scanf("%d", &voto) == 1 && voto != -1) {
>         if (voto < 18 || voto > 30) {
>             printf("%d ignorato\n", voto);
>             continue;
>         }
>         somma += voto;
>         validi++;
>     }
>     if (validi > 0) {
>         printf("validi=%d media=%.2f\n", validi, (double)somma / validi);
>     } else {
>         printf("nessun voto valido\n");
>     }
>     return 0;
> }
> ```
> Con input `28 15 30 24 33 -1 27` stampa `15 ignorato`, `33 ignorato`, `validi=3 media=27.33` (il 27 dopo la sentinella non si legge). Con input `-1` stampa `nessun voto valido` (verificati). Il cast `(double)` serve: `somma / validi` fra interi darebbe 27. Il controllo `validi > 0` evita la divisione per zero.

**Esercizio 27** (livello 30). Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int i = 0;
    int j;
    int k = 0;

    do {
        for (j = i; j < 6; j += 2) {
            if (j == 3) {
                continue;
            }
            k += j;
            if (k > 8) {
                break;
            }
        }
        printf("i=%d j=%d k=%d\n", i, j, k);
        i++;
    } while (k < 20);
    return 0;
}
```

> [!example]- Soluzione
> Tre trappole insieme: il `for` interno riparte da `i` (quindi i pari o i dispari a seconda del giro), il `continue` passa per `j += 2`, il `break` lascia `j` dov'è. Il `do-while` esterno controlla `k` solo in fondo.
>
> | `i` | `j` | azione | `k` |
> | --- | --- | --- | --- |
> | 0 | 0 | `k += 0`, $0 > 8$ no | 0 |
> | 0 | 2 | `k += 2` | 2 |
> | 0 | 4 | `k += 4` | 6 |
> | 0 | 6 | `6 < 6` falso, il `for` finisce | 6 |
> | | | stampa `i=0 j=6 k=6`; $6 < 20$, si ripete | |
> | 1 | 1 | `k += 1` | 7 |
> | 1 | 3 | `continue`: va a `j += 2` | 7 |
> | 1 | 5 | `k += 5`, $12 > 8$: `break` | 12 |
> | | | stampa `i=1 j=5 k=12` | |
> | 2 | 2 | `k += 2`, $14 > 8$: `break` | 14 |
> | | | stampa `i=2 j=2 k=14` | |
> | 3 | 3 | `continue` | 14 |
> | 3 | 5 | `k += 5`, $19 > 8$: `break` | 19 |
> | | | stampa `i=3 j=5 k=19`; $19 < 20$, si ripete | |
> | 4 | 4 | `k += 4`, $23 > 8$: `break` | 23 |
> | | | stampa `i=4 j=4 k=23`; $23 < 20$ falso, esce | |
>
> Output (verificato):
> ```
> i=0 j=6 k=6
> i=1 j=5 k=12
> i=2 j=2 k=14
> i=3 j=5 k=19
> i=4 j=4 k=23
> ```
> Dal secondo giro in poi $k > 8$ già dal primo `k +=` utile, quindi il `for` interno fa al massimo un'aggiunta: il `break` taglia tutto.

**Esercizio 28.** Vero o falso?

- a) Il corpo di un `for` viene eseguito almeno una volta.
- b) `for (i = 0; i < n; i++)` e `for (i = 0; i < n; ++i)` stampano le stesse cose con lo stesso corpo.
- c) Dopo `for (i = 0; i < 10; i++) { }` la variabile `i` vale 9.
- d) In un `for`, `continue` salta anche l'aggiornamento espr3.
- e) `break` dentro due `for` annidati esce da entrambi.
- f) Ogni `do-while` si può riscrivere con un `while` e niente altro, senza ripetere istruzioni.
- g) `for (;;)` è un ciclo infinito.
- h) Per stampare una figura $N \times N$ il `printf("\n")` va dentro il ciclo interno.

> [!example]- Soluzione
> - a) **Falso**. La condizione si valuta prima del corpo: con condizione falsa subito, zero giri. È il `do-while` che fa almeno un giro.
> - b) **Vero**. In espr3 il valore dell'espressione si butta, conta solo l'effetto.
> - c) **Falso**. Vale 10, il primo valore che rende falsa la condizione.
> - d) **Falso**. Nel `for` `continue` va proprio a espr3, poi alla condizione.
> - e) **Falso**. Esce solo dal ciclo che lo contiene direttamente.
> - f) **Falso**. Serve ripetere il corpo una volta prima del `while` (o una variabile che forzi il primo giro).
> - g) **Vero**. La condizione mancante vale vero; si esce solo con `break` o `return`.
> - h) **Falso**. Va dopo il ciclo interno, dentro quello esterno: un a capo per riga.

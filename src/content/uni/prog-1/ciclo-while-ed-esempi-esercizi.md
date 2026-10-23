---
title: Ciclo while ed esempi (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-27
lezioni: []
ordine: 6
---

Esercizi tipo esame di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30, sul modello della provetta (output esatto di cicli, SI/NO, figure con i cicli) e della prova al calcolatore (codice breve). Per i tracing: tabella delle variabili, una riga per giro, condizione calcolata per esteso.

**Esercizio 1.** Scrivi l'output esatto e quante volte si esegue il corpo.

```c
#include <stdio.h>

int main(void)
{
    int i = 10;
    int s = 0;

    while (i > 0) {
        s += i % 3;
        i -= 3;
    }
    printf("i=%d s=%d\n", i, s);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un ciclo con passo -3: la condizione si controlla prima di ogni giro, quindi si esce al primo `i` non positivo.
>
> | giro | `i > 0` | `i % 3` | `s` | `i` dopo |
> | --- | --- | --- | --- | --- |
> | inizio | | | 0 | 10 |
> | 1 | 10 > 0 | 1 | 1 | 7 |
> | 2 | 7 > 0 | 1 | 2 | 4 |
> | 3 | 4 > 0 | 1 | 3 | 1 |
> | 4 | 1 > 0 | 1 | 4 | -2 |
> | | -2 > 0 falso | | | |
>
> 4 giri. Output: `i=-2 s=4` (verificato). `i` non si ferma a 0: esce al primo valore non positivo.

**Esercizio 2.** SI o NO?

- a) Il corpo di un `while` viene eseguito sempre almeno una volta.
- b) `while (x)` è equivalente a `while (x != 0)`.
- c) Dopo `i = 1; while (i <= 10) i++;` la variabile `i` vale 10.
- d) `while (n > 0); n--;` con `n = 3` termina con `n` uguale a 0.
- e) In un ciclo con sentinella il dato si legge prima del ciclo e in fondo al corpo.
- f) Un accumulatore di prodotto si inizializza a 0.

> [!example]- Soluzione
> - a) NO: la condizione si valuta prima, e se è falsa subito il corpo gira zero volte.
> - b) SI: una condizione è vera quando vale un numero diverso da zero.
> - c) NO: vale 11. L'ultimo giro porta `i` da 10 a 11, poi `11 <= 10` è falso.
> - d) NO: il `;` è il corpo vuoto, `n` resta 3 e `3 > 0` resta vero: ciclo infinito, `n--` non viene mai raggiunto.
> - e) SI: così la condizione controlla sempre il dato appena letto e la sentinella non viene usata come dato.
> - f) NO: a 1, l'elemento neutro del prodotto. Con 0 il risultato resta 0.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int n = 3725;
    int somma = 0;
    int cifre = 0;

    while (n > 0) {
        somma += n % 10;
        n /= 10;
        cifre++;
    }
    printf("%d %d %d\n", n, somma, cifre);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce lo schema delle cifre: `n % 10` è l'ultima cifra, `n /= 10` la toglie.
>
> | giro | `n > 0` | `n % 10` | `somma` | `n` dopo | `cifre` |
> | --- | --- | --- | --- | --- | --- |
> | inizio | | | 0 | 3725 | 0 |
> | 1 | 3725 > 0 | 5 | 5 | 372 | 1 |
> | 2 | 372 > 0 | 2 | 7 | 37 | 2 |
> | 3 | 37 > 0 | 7 | 14 | 3 | 3 |
> | 4 | 3 > 0 | 3 | 17 | 0 | 4 |
> | | 0 > 0 falso | | | | |
>
> Output: `0 17 4` (verificato). Controllo: $3 + 7 + 2 + 5 = 17$. È lo schema per sommare le cifre della matricola.

**Esercizio 4.** Il programma dovrebbe stampare `1 2 3 4 5`. Cosa fa davvero? Correggilo.

```
#include <stdio.h>

int main(void)
{
    int i = 1;

    while (i < 5)
        printf("%d ", i);
        i++;
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Due errori.
> 1. Senza graffe il corpo del `while` è solo il `printf`: `i++` è fuori dal ciclo, nonostante l'indentazione. `i` resta 1, e il programma stampa `1 1 1 1 ...` all'infinito. gcc con `-Wall` avvisa (`this 'while' clause does not guard...`).
> 2. Anche con le graffe, `i < 5` si ferma a 4: è un errore di uno. Serve `i <= 5`.
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int i = 1;
>
>     while (i <= 5) {
>         printf("%d ", i);
>         i++;
>     }
>     printf("\n");
>     return 0;
> }
> ```
>
> Output (verificato): `1 2 3 4 5 ` (con uno spazio prima dell'a capo).

**Esercizio 5.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int k = 4;
    int x = 1;

    while (k--)
        x = x * 2 + k;
    printf("k=%d x=%d\n", k, x);
    return 0;
}
```

> [!example]- Soluzione
> `k--` confronta il valore **prima** del decremento, poi decrementa. Il corpo vede già il valore decrementato.
>
> | test | valore testato | `k` nel corpo | `x` |
> | --- | --- | --- | --- |
> | 1 | 4 | 3 | 1·2 + 3 = 5 |
> | 2 | 3 | 2 | 5·2 + 2 = 12 |
> | 3 | 2 | 1 | 12·2 + 1 = 25 |
> | 4 | 1 | 0 | 25·2 + 0 = 50 |
> | 5 | 0, falso | -1 | |
>
> Anche il test che esce decrementa. Output: `k=-1 x=50` (verificato).

**Esercizio 6.** Traccia Euclide per sottrazioni su $(m, n) = (21, 6)$: quanti giri, che MCD?

> [!example]- Soluzione
> A ogni giro si sottrae il minore dal maggiore, finché sono uguali.
>
> | giro | `m` | `n` | operazione |
> | --- | --- | --- | --- |
> | inizio | 21 | 6 | |
> | 1 | 15 | 6 | 21 - 6 |
> | 2 | 9 | 6 | 15 - 6 |
> | 3 | 3 | 6 | 9 - 6 |
> | 4 | 3 | 3 | 6 - 3 |
>
> 4 giri, MCD 3 (verificato con il contatore). Controllo: 3 divide 21 e 6, e nessun numero più grande li divide entrambi. La definizione avrebbe fatto 6 giri, uno per candidato da 1 a 6. È il rettangolo disegnato in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/): tre quadrati 6×6 e due 3×3.

**Esercizio 7.** Scrivi l'output esatto della soluzione 2b del MCD con questi valori.

```c
#include <stdio.h>

int main(void)
{
    int m = 8;
    int n = 12;
    int mcd = 1;
    int min;
    int contatore = 1;

    if (n <= m) min = n; else min = m;
    while (contatore <= min) {
        if (!(m % contatore) && !(n % contatore))
            mcd = contatore;
        contatore = contatore + 1;
    }
    printf("mcd=%d contatore=%d\n", mcd, contatore);
    return 0;
}
```

> [!example]- Soluzione
> `12 <= 8` è falso, quindi `min` = 8. Si provano i candidati da 1 a 8; `mcd` prende l'ultimo che divide entrambi.
>
> | `contatore` | `8 % c` | `12 % c` | entrambi 0? | `mcd` |
> | --- | --- | --- | --- | --- |
> | 1 | 0 | 0 | sì | 1 |
> | 2 | 0 | 0 | sì | 2 |
> | 3 | 2 | 0 | no | 2 |
> | 4 | 0 | 0 | sì | 4 |
> | 5 | 3 | 2 | no | 4 |
> | 6 | 2 | 0 | no | 4 |
> | 7 | 1 | 5 | no | 4 |
> | 8 | 0 | 4 | no | 4 |
> | 9 | `9 <= 8` falso, esce | | | |
>
> Output: `mcd=4 contatore=9` (verificato). 8 giri; Euclide sulla stessa coppia ne fa 2.

**Esercizio 8.** Traccia il programma della moltiplicazione con $m = 5$, $n = 11$.

> [!example]- Soluzione
> `n > m`, quindi `max` = 11, `min` = 5. Si dimezza `min`, si raddoppia `mult`, e quando `min` è dispari si mette da parte `mult` in `sum`.
>
> | giro | `min > 1` | `min % 2` | `sum` | `mult` | `min` | `mult * min + sum` |
> | --- | --- | --- | --- | --- | --- | --- |
> | inizio | | | 0 | 11 | 5 | 55 |
> | 1 | 5 > 1 | 1 | 0 + 11 = 11 | 22 | 2 | 55 |
> | 2 | 2 > 1 | 0 | 11 | 44 | 1 | 55 |
> | | 1 > 1 falso | | | | | |
>
> Esce con `min` = 1: stampa `n=11`, `m=5`, `mult=55` (verificato). L'ultima colonna resta 55: l'invariante.

**Esercizio 9.** Scrivi l'output esatto: è il ciclo della scala con $N = 7$.

```c
#include <stdio.h>

int main(void)
{
    int N = 7;
    int i = 3;
    int TotaleModi = 0;
    int PassiTipo3 = 1;
    int PassiTipo2 = 1;
    int PassiTipo1 = 2;

    while (i < N + 1) {
        TotaleModi = PassiTipo3 + PassiTipo2 + PassiTipo1;
        PassiTipo3 = PassiTipo2;
        PassiTipo2 = PassiTipo1;
        PassiTipo1 = TotaleModi;
        i++;
    }
    printf("%d %d\n", i, TotaleModi);
    return 0;
}
```

> [!example]- Soluzione
> Il corpo gira per `i` da 3 a 7: 5 giri. A ogni giro la somma delle tre variabili è $S(i)$, poi la finestra scorre.
>
> | giro | `i` | `TotaleModi` | `PassiTipo3` | `PassiTipo2` | `PassiTipo1` |
> | --- | --- | --- | --- | --- | --- |
> | inizio | 3 | 0 | 1 | 1 | 2 |
> | 1 | 3 → 4 | 1+1+2 = 4 | 1 | 2 | 4 |
> | 2 | 4 → 5 | 1+2+4 = 7 | 2 | 4 | 7 |
> | 3 | 5 → 6 | 2+4+7 = 13 | 4 | 7 | 13 |
> | 4 | 6 → 7 | 4+7+13 = 24 | 7 | 13 | 24 |
> | 5 | 7 → 8 | 7+13+24 = 44 | 13 | 24 | 44 |
> | | 8 | `8 < 8` falso | | | |
>
> Output: `8 44` (verificato). Controllo con la tabella della teoria: $S(7) = 44$.

**Esercizio 10.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int N = 4;
    int r = 1;

    while (r <= N) {
        int c = 1;
        while (c <= r) {
            printf("%d", c);
            c++;
        }
        printf("\n");
        r++;
    }
    return 0;
}
```

> [!example]- Soluzione
> Due cicli annidati: il ciclo interno gira `r` volte, quindi la riga `r` stampa i numeri da 1 a `r`.
>
> | `r` | `c` va da 1 a | riga stampata |
> | --- | --- | --- |
> | 1 | 1 | `1` |
> | 2 | 2 | `12` |
> | 3 | 3 | `123` |
> | 4 | 4 | `1234` |
>
> ```
> 1
> 12
> 123
> 1234
> ```
> (verificato). In tutto il `printf` interno si esegue $1 + 2 + 3 + 4 = 10$ volte.

**Esercizio 11.** Scrivi un programma che legge $N$ e stampa un quadrato $N \times N$ con `*` sul bordo e `.` all'interno. Per $N = 5$:

```
*****
*...*
*...*
*...*
*****
```

> [!example]- Soluzione
> Due cicli annidati: quello esterno scorre le righe `r`, quello interno le colonne `c`. Una casella è di bordo se sta nella prima o ultima riga, o nella prima o ultima colonna.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int N;
>     int r;
>
>     if (scanf("%d", &N) != 1 || N <= 0) {
>         printf("N non valido\n");
>         return 1;
>     }
>     r = 0;
>     while (r < N) {
>         int c = 0;
>         while (c < N) {
>             if (r == 0 || r == N - 1 || c == 0 || c == N - 1)
>                 printf("*");
>             else
>                 printf(".");
>             c++;
>         }
>         printf("\n");
>         r++;
>     }
>     return 0;
> }
> ```
> Verificato con $N = 5$. `c` va rimesso a 0 a ogni riga: per questo è dichiarato dentro il ciclo esterno. Se lo dichiari fuori e lo azzeri solo una volta, stampi solo la prima riga. Con $N = 1$ stampa un solo `*`.

**Esercizio 12.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int N = 4;
    int r = 0;

    while (r < N) {
        int c = 0;
        while (c < N) {
            if ((r + c) % 3 == 0)
                printf("#");
            else if (r > c)
                printf(".");
            else
                printf("o");
            c++;
        }
        printf("\n");
        r++;
    }
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un quadrato a pattern: si calcola il carattere casella per casella con la catena `else if`. Prima condizione: `r + c` multiplo di 3, cioè `r + c` vale 0, 3 o 6. Se no, `.` sotto la diagonale e `o` sopra o sulla diagonale.
>
> Tabella di `r + c`, con il carattere scelto:
>
> | | c=0 | c=1 | c=2 | c=3 |
> | --- | --- | --- | --- | --- |
> | r=0 | 0 `#` | 1 `o` | 2 `o` | 3 `#` |
> | r=1 | 1 `.` | 2 `o` | 3 `#` | 4 `o` |
> | r=2 | 2 `.` | 3 `#` | 4 `o` | 5 `o` |
> | r=3 | 3 `#` | 4 `.` | 5 `.` | 6 `#` |
>
> Output (verificato):
> ```
> #oo#
> .o#o
> .#oo
> #..#
> ```
> La trappola: sulla diagonale `r > c` è falso, quindi le caselle (1,1) e (2,2) danno `o`, non `.`; la (0,0) e la (3,3) danno `#` perché la prima condizione vince.

**Esercizio 13.** Scrivi un programma che legge un intero non negativo e ne stampa le cifre al contrario come numero (1234 diventa 4321).

> [!example]- Soluzione
> Si stacca l'ultima cifra con `% 10` e la si accoda al rovescio: moltiplicare per 10 fa posto alla nuova cifra.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int n;
>     int rovescio = 0;
>
>     if (scanf("%d", &n) != 1 || n < 0) {
>         return 1;
>     }
>     while (n > 0) {
>         rovescio = rovescio * 10 + n % 10;
>         n = n / 10;
>     }
>     printf("%d\n", rovescio);
>     return 0;
> }
> ```
>
> | giro | `n % 10` | `rovescio` | `n` dopo |
> | --- | --- | --- | --- |
> | inizio | | 0 | 1234 |
> | 1 | 4 | 0·10 + 4 = 4 | 123 |
> | 2 | 3 | 4·10 + 3 = 43 | 12 |
> | 3 | 2 | 43·10 + 2 = 432 | 1 |
> | 4 | 1 | 432·10 + 1 = 4321 | 0 |
>
> 1234 dà 4321, 120 dà 21 (lo zero finale diventa uno zero iniziale, che non si stampa). Verificati.

**Esercizio 14.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int i = 0;
    int s = 0;

    while (i++ < 5) {
        if (i % 2)
            s += i;
        else
            s -= 1;
    }
    printf("i=%d s=%d\n", i, s);
    return 0;
}
```

> [!example]- Soluzione
> `i++ < 5` confronta il valore vecchio di `i` con 5, poi incrementa. Il corpo vede già il valore nuovo.
>
> | test | valore confrontato | `i` nel corpo | `i % 2` | operazione | `s` |
> | --- | --- | --- | --- | --- | --- |
> | 1 | 0 < 5 vero | 1 | 1 | `s += 1` | 1 |
> | 2 | 1 < 5 vero | 2 | 0 | `s -= 1` | 0 |
> | 3 | 2 < 5 vero | 3 | 1 | `s += 3` | 3 |
> | 4 | 3 < 5 vero | 4 | 0 | `s -= 1` | 2 |
> | 5 | 4 < 5 vero | 5 | 1 | `s += 5` | 7 |
> | 6 | 5 < 5 falso | 6 | | si esce | 7 |
>
> Output: `i=6 s=7` (verificato). Le due trappole: il corpo usa i valori da 1 a 5, non da 0 a 4; e il test falso incrementa comunque, quindi `i` esce a 6.

**Esercizio 15** (prova al calcolatore). Scrivi un programma che legge voti finché non arriva 0. I voti fuori dall'intervallo 18-30 vanno segnalati e ignorati. Alla fine stampa quanti voti validi, la media con due decimali e il massimo; se non c'è nessun voto valido, stampa `nessun voto`.

> [!example]- Soluzione
> Si riconosce un ciclo con sentinella (0), con dentro un controllo del range e tre variabili da accumulare: somma, contatore, massimo. Il massimo può partire da 0 perché i voti validi sono tutti almeno 18.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int voto;
>     int somma = 0;
>     int quanti = 0;
>     int max = 0;
>
>     printf("voto (18-30, 0 per finire): ");
>     if (scanf("%d", &voto) != 1) {
>         return 1;
>     }
>     while (voto != 0) {
>         if (voto < 18 || voto > 30) {
>             printf("fuori range, ignorato\n");
>         } else {
>             somma += voto;
>             quanti++;
>             if (voto > max) {
>                 max = voto;
>             }
>         }
>         printf("voto (18-30, 0 per finire): ");
>         if (scanf("%d", &voto) != 1) {
>             return 1;
>         }
>     }
>     if (quanti == 0) {
>         printf("nessun voto\n");
>     } else {
>         printf("\nvoti=%d media=%.2f max=%d\n", quanti, (double)somma / quanti, max);
>     }
>     return 0;
> }
> ```
> Con input `27 31 18 30 0` il 31 viene segnalato una volta (`fuori range, ignorato`) e l'ultima riga è `voti=3 media=25.00 max=30` (verificato): $(27 + 18 + 30) / 3 = 25$. Il cast `(double)` serve: `somma / quanti` fra interi troncherebbe. Il controllo `quanti == 0` evita la divisione per zero.

**Esercizio 16** (livello 30, complessità). Scrivi l'output esatto e spiega quante volte si esegue `cnt++` in funzione di `n`.

```c
#include <stdio.h>

int main(void)
{
    int n = 20;
    int i = 1;
    int cnt = 0;

    while (i < n) {
        int j = 0;
        while (j < i) {
            cnt++;
            j++;
        }
        i *= 2;
    }
    printf("i=%d cnt=%d\n", i, cnt);
    return 0;
}
```

> [!example]- Soluzione
> Il ciclo esterno non conta di uno in uno: `i` raddoppia. Il ciclo interno gira `i` volte.
>
> | giro esterno | `i < 20` | giri interni (`cnt` += `i`) | `cnt` | `i` dopo |
> | --- | --- | --- | --- | --- |
> | inizio | | | 0 | 1 |
> | 1 | 1 < 20 | 1 | 1 | 2 |
> | 2 | 2 < 20 | 2 | 3 | 4 |
> | 3 | 4 < 20 | 4 | 7 | 8 |
> | 4 | 8 < 20 | 8 | 15 | 16 |
> | 5 | 16 < 20 | 16 | 31 | 32 |
> | | 32 < 20 falso | | | |
>
> Output: `i=32 cnt=31` (verificato). In generale `cnt` è $1 + 2 + 4 + \ldots + 2^k = 2^{k+1} - 1$, dove $2^k$ è l'ultima potenza di 2 minore di $n$: meno di $2n$. I giri esterni sono circa $\log_2 n$, ma il totale cresce come $n$, non come $n \log n$: conta la somma dei giri interni, non il prodotto "giri esterni per giri interni massimi".

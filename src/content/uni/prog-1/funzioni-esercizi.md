---
title: Funzioni (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: bozza
data: 2026-10-23
lezioni: []
ordine: 17
---

Esercizi tipo esame di [Funzioni](/uni/prog-1/funzioni/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo. Gli esercizi sul passaggio per indirizzo, sugli array e sulle struct passate a funzione sono in [Passaggio dei parametri (esercizi)](/uni/prog-1/passaggio-dei-parametri-esercizi/).

Dal più facile al livello del 30. Per i tracing: una colonna per ogni record attivo più una per le globali, una riga per istruzione, e alla fine la pila nel momento più alto. Tutti gli output sono verificati compilando con `gcc -std=c11 -Wall -Wextra -Wpedantic` ed eseguendo.

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int power(int base, int n)
{
    int i;
    int p = 1;

    for (i = 1; i <= n; i++) {
        p *= base;
    }
    return p;
}

int main(void)
{
    int a = 3;

    printf("%d\n", power(a, 2));
    printf("%d\n", power(2, a) - power(a, 0));
    printf("%d\n", power(power(2, 2), 2));
    printf("a=%d\n", a);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce: chiamate di una funzione che restituisce $base^n$, con i parametri abbinati per posizione e una chiamata dentro l'altra.
>
> | espressione | parametri | calcolo | valore |
> | --- | --- | --- | --- |
> | `power(a, 2)` | `base` = 3, `n` = 2 | 3 · 3 | 9 |
> | `power(2, a)` | `base` = 2, `n` = 3 | 2 · 2 · 2 | 8 |
> | `power(a, 0)` | `base` = 3, `n` = 0 | nessun giro, `p` resta 1 | 1 |
> | `power(2, 2)` (interna) | `base` = 2, `n` = 2 | | 4 |
> | `power(4, 2)` (esterna) | `base` = 4, `n` = 2 | 4 · 4 | 16 |
>
> La chiamata interna si valuta prima: il suo risultato è il parametro effettivo di quella esterna. Output:
> ```
> 9
> 7
> 16
> a=3
> ```
> Controllo: `a` non è mai a sinistra di un'assegnazione in `main`, e le funzioni ne ricevono solo il valore, quindi resta 3.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int f(int n)
{
    if (n > 10) {
        return n - 10;
    }
    if (n % 2 != 0) {
        return n * 2;
    }
    return n / 2;
}

int main(void)
{
    printf("%d %d %d\n", f(15), f(7), f(8));
    printf("%d\n", f(f(26)));
    printf("%d\n", f(f(f(9))));
    return 0;
}
```

> [!example]- Soluzione
> Più `return`: per ogni chiamata si esegue solo il primo che il flusso incontra.
>
> | chiamata | `n > 10` | `n % 2 != 0` | `return` | valore |
> | --- | --- | --- | --- | --- |
> | `f(15)` | vero | | `15 - 10` | 5 |
> | `f(7)` | falso | vero | `7 * 2` | 14 |
> | `f(8)` | falso | falso | `8 / 2` | 4 |
> | `f(26)` | vero | | `26 - 10` | 16 |
> | `f(16)` | vero | | `16 - 10` | 6 |
> | `f(9)` | falso | vero | `9 * 2` | 18 |
> | `f(18)` | vero | | `18 - 10` | 8 |
> | `f(8)` | falso | falso | `8 / 2` | 4 |
>
> Le chiamate annidate si valutano dall'interno: `f(f(26))` è `f(16)`, `f(f(f(9)))` è `f(f(18))`, cioè `f(8)`. Output:
> ```
> 5 14 4
> 6
> 4
> ```

**Esercizio 3.** Vero o falso? Motiva.

- a) Una funzione C può restituire un array di `int`.
- b) Il prototipo di una funzione contiene la testata e il corpo.
- c) In `int g(int a, int b);` i nomi `a` e `b` si possono omettere.
- d) Se una funzione `int` termina senza eseguire un `return`, restituisce 0.
- e) Le variabili locali di una funzione esistono finché il programma non termina.
- f) Una variabile locale `static` conserva il suo valore fra due chiamate.
- g) Una funzione può usare una variabile locale di `main` se `main` è ancora in esecuzione.
- h) L'invocazione di una funzione `void` si può usare a destra di un'assegnazione.

> [!example]- Soluzione
> - a) **Falso**: il tipo del risultato non può essere un array (slide 51). Può essere un puntatore o una struct che contiene un array.
> - b) **Falso**: il prototipo è la sola testata seguita da `;`. Testata più corpo è la definizione.
> - c) **Vero**: nel prototipo contano i tipi, `int g(int, int);` è valido.
> - d) **Falso**: il risultato è indefinito. gcc avvisa `control reaches end of non-void function`. Solo `main` restituisce 0 implicitamente.
> - e) **Falso**: sono automatiche, create all'ingresso nella funzione e distrutte all'uscita (il record viene tolto dalla pila).
> - f) **Vero**: è allocata una volta sola e inizializzata una volta sola.
> - g) **Falso**: la visibilità è sintattica. Il record di `main` è nella pila, ma il nome non è visibile dal corpo dell'altra funzione (`undeclared`). Per far lavorare una funzione su una variabile di `main` si passa il valore o l'indirizzo.
> - h) **Falso**: una funzione `void` non ha valore. gcc: `void value not ignored as it ought to be`.

**Esercizio 4.** Trova gli errori, scrivi cosa dice il compilatore e correggi.

```
#include <stdio.h>

int media(int a, int b)
{
    int m;

    m = (a + b) / 2;
}

int main(void)
{
    int x = 4;

    printf("%d\n", media(x, 8));
    printf("%d\n", m);
    return 0;
}
```

> [!example]- Soluzione
> Due errori, uno per ambiente.
> - In `media` manca il `return`: la funzione calcola `m` e lo butta. gcc avvisa `control reaches end of non-void function` e anche `variable 'm' set but not used`; compila, ma il valore stampato è indefinito.
> - In `main` si usa `m`, che è locale di `media`: non è visibile, e non esiste neanche più (il record di `media` è stato eliminato). gcc si ferma: `error: 'm' undeclared (first use in this function)`.
>
> Corretto:
> ```c
> #include <stdio.h>
>
> int media(int a, int b)
> {
>     int m;
>
>     m = (a + b) / 2;
>     return m;
> }
>
> int main(void)
> {
>     int x = 4;
>     int m = media(x, 8);
>
>     printf("%d\n", m);
>     return 0;
> }
> ```
> Stampa `6`. La `m` di `main` è un'altra variabile con lo stesso nome, che riceve il valore restituito.

**Esercizio 5.** Variabile globale e locale con lo stesso nome. Scrivi l'output esatto.

```c
#include <stdio.h>

int x = 5;

int g(int x)
{
    x = x * 2;
    return x + 1;
}

int h(int y)
{
    x = x + y;
    return x;
}

int main(void)
{
    int y = g(x);

    printf("x=%d y=%d\n", x, y);
    y = h(y);
    printf("x=%d y=%d\n", x, y);
    {
        int x = 100;
        y = g(x) + h(1);
        printf("x=%d y=%d\n", x, y);
    }
    printf("x=%d y=%d\n", x, y);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce il tipo d'esame "globale e locale omonime". Per ogni `x` si cerca la dichiarazione più interna: in `g` è il parametro, in `h` è la globale (h non dichiara `x`), nel blocco di `main` è la locale da 100.
>
> | istruzione | `x` globale | `y` main | `x` del blocco | dettaglio |
> | --- | --- | --- | --- | --- |
> | `int y = g(x);` | 5 | 11 | | `g`: parametro `x` = 5, diventa 10, `return 11`. La globale non si tocca |
> | `printf` | 5 | 11 | | `x=5 y=11` |
> | `y = h(y);` | 16 | 16 | | `h`: `y` = 11, globale `x` = 5 + 11 = 16, `return 16` |
> | `printf` | 16 | 16 | | `x=16 y=16` |
> | `int x = 100;` | 16 | 16 | 100 | maschera la globale |
> | `g(x)` | 16 | | 100 | parametro 100, diventa 200, restituisce 201 |
> | `h(1)` | 17 | | 100 | `h` vede la **globale**: 16 + 1 = 17, restituisce 17 |
> | `y = 201 + 17` | 17 | 218 | 100 | |
> | `printf` nel blocco | 17 | 218 | 100 | `x=100 y=218`: `x` qui è quella del blocco |
> | `printf` fuori | 17 | 218 | | `x=17 y=218` |
>
> Output:
> ```
> x=5 y=11
> x=16 y=16
> x=100 y=218
> x=17 y=218
> ```
> Il punto delicato è `h(1)` dentro il blocco: la `x` da 100 è visibile in `main`, ma `h` è scritta fuori da `main` e vede solo la globale. In `y = g(x) + h(1)` l'ordine in cui il C valuta le due chiamate non è fissato, ma qui non cambia niente: `g` non legge la globale.

**Esercizio 6.** Scrivi l'output esatto.

```c
#include <stdio.h>

int prossimo(int passo)
{
    static int totale = 0;
    int chiamate = 0;

    chiamate++;
    totale += passo;
    printf("chiamate=%d totale=%d\n", chiamate, totale);
    return totale;
}

int main(void)
{
    int i;
    int r = 0;

    for (i = 1; i <= 3; i++) {
        r = prossimo(i * 10);
    }
    printf("r=%d\n", r);
    return 0;
}
```

> [!example]- Soluzione
> Una locale automatica e una `static` nella stessa funzione.
>
> | `i` | `passo` | `chiamate` | `totale` (static) |
> | --- | --- | --- | --- |
> | 1 | 10 | creata a 0, poi 1 | 0 all'avvio, poi 10 |
> | 2 | 20 | creata a 0, poi 1 | 10, poi 30 |
> | 3 | 30 | creata a 0, poi 1 | 30, poi 60 |
>
> Output:
> ```
> chiamate=1 totale=10
> chiamate=1 totale=30
> chiamate=1 totale=60
> r=60
> ```
> Controllo: `totale` è la somma 10 + 20 + 30 = 60; `chiamate` riparte da 0 a ogni chiamata perché il suo record è nuovo, quindi non conta proprio niente. Per contare le chiamate servirebbe `static int chiamate = 0;`.

**Esercizio 7.** Scrivi l'output esatto e disegna la pila nel momento in cui è più alta.

```c
#include <stdio.h>

int c(int n)
{
    printf("c(%d)\n", n);
    return n + 1;
}

int b(int n)
{
    int r;

    printf("b(%d) entra\n", n);
    r = c(n * 2);
    r = r + c(n);
    printf("b(%d) esce con %d\n", n, r);
    return r;
}

int a(int n)
{
    printf("a(%d) entra\n", n);
    return b(n + 1) * 10;
}

int main(void)
{
    printf("main: %d\n", a(2));
    return 0;
}
```

> [!example]- Soluzione
> Chiamate in catena: ogni funzione aspetta il risultato di quella che ha chiamato.
>
> | passo | pila (dal basso) | stampa |
> | --- | --- | --- |
> | `main` valuta `a(2)` | `main` \| `a`: `n` = 2 | `a(2) entra` |
> | `a` valuta `b(n + 1)` | `main` \| `a` \| `b`: `n` = 3, `r` = ? | `b(3) entra` |
> | `b` chiama `c(6)` | `main` \| `a` \| `b` \| `c`: `n` = 6 | `c(6)` |
> | `c` restituisce 7 | `main` \| `a` \| `b`: `r` = 7 | |
> | `b` chiama `c(3)` | `main` \| `a` \| `b` \| `c`: `n` = 3 | `c(3)` |
> | `c` restituisce 4 | `main` \| `a` \| `b`: `r` = 11 | `b(3) esce con 11` |
> | `b` restituisce 11 | `main` \| `a` | `a` calcola 11 · 10 = 110 |
> | `a` restituisce 110 | `main` | `main: 110` |
>
> Output:
> ```
> a(2) entra
> b(3) entra
> c(6)
> c(3)
> b(3) esce con 11
> main: 110
> ```
> La pila è più alta (4 record) durante ciascuna delle due chiamate di `c`:
> ```
> c     n = 6        (poi, nella seconda chiamata, un record nuovo con n = 3)
> b     n = 3, r = ?
> a     n = 2
> main
> ```
> `main: ` si stampa per ultimo anche se è scritto per primo nel `printf`: prima si valutano gli argomenti (cioè `a(2)`, con tutte le sue stampe), poi `printf` stampa. Le due chiamate di `c` sono in due istruzioni separate di proposito: in `c(n * 2) + c(n)` il C non fissa quale delle due viene eseguita per prima, e l'ordine delle righe stampate non sarebbe garantito.

**Esercizio 8.** Scrivi tre funzioni con prototipo e una `main` che le prova:

- a) `int max3(int a, int b, int c)` che restituisce il massimo di tre interi usando una funzione `max2`;
- b) `int somma_cifre(int n)` che restituisce la somma delle cifre decimali di `n` (anche negativo);
- c) `int bisestile(int anno)` che restituisce 1 se l'anno è bisestile (divisibile per 4 ma non per 100, oppure divisibile per 400) e 0 altrimenti.

> [!example]- Soluzione
> Ogni funzione lavora solo sui parametri e restituisce il risultato; le stampe stanno in `main`.
> ```c
> #include <stdio.h>
>
> int max2(int a, int b);
> int max3(int a, int b, int c);
> int somma_cifre(int n);
> int bisestile(int anno);
>
> int main(void)
> {
>     printf("%d %d\n", max3(4, 9, 2), max3(-1, -5, -3));
>     printf("%d %d\n", somma_cifre(254871), somma_cifre(0));
>     printf("%d %d %d %d\n", bisestile(2024), bisestile(1900), bisestile(2000), bisestile(2026));
>     return 0;
> }
>
> int max2(int a, int b)
> {
>     return a > b ? a : b;
> }
>
> int max3(int a, int b, int c)
> {
>     return max2(max2(a, b), c);
> }
>
> int somma_cifre(int n)
> {
>     int somma = 0;
>
>     if (n < 0) {
>         n = -n;
>     }
>     while (n > 0) {
>         somma += n % 10;
>         n /= 10;
>     }
>     return somma;
> }
>
> int bisestile(int anno)
> {
>     return (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0;
> }
> ```
> Output:
> ```
> 9 -1
> 27 0
> 1 0 1 0
> ```
> Controlli. `max3(-1, -5, -3)`: `max2(-1, -5)` = -1, `max2(-1, -3)` = -1. `somma_cifre(254871)`: 1 + 7 + 8 + 4 + 5 + 2 = 27 (le cifre escono dalla meno significativa con `% 10`); con 0 il `while` non parte e la somma resta 0, che è giusto. Modificare `n` dentro `somma_cifre` è lecito: è la copia. `bisestile` restituisce direttamente il valore della condizione, che in C vale 1 o 0: 1900 è divisibile per 100 e non per 400, quindi non è bisestile.

**Esercizio 9.** Prova al calcolatore, punto C. Scrivi:

- a) `int casuale(int min, int max)`, intero casuale fra `min` e `max` compresi;
- b) `float casuale_prezzo(float min, float max)`, prezzo casuale con due decimali fra `min` e `max` (per esempio fra 15.00 e 35.00), usando `casuale`;
- c) `int leggi_intero(int min, int max)`, che chiede un intero da tastiera finché non è nell'intervallo e lo restituisce.

Poi un `main` che inizializza il generatore, stampa tre prezzi e legge un intero fra 1 e 10.

> [!example]- Soluzione
> Sono tre mattoni che tornano in quasi ogni prova (vedi [Esami passati](/uni/prog-1/esami-passati/), I mattoni che tornano in ogni prova).
> ```c
> #include <stdio.h>
> #include <stdlib.h>
> #include <time.h>
>
> int casuale(int min, int max);
> float casuale_prezzo(float min, float max);
> int leggi_intero(int min, int max);
>
> int main(void)
> {
>     int i;
>     int n;
>
>     srand((unsigned) time(NULL));
>     for (i = 0; i < 3; i++) {
>         printf("%.2f\n", casuale_prezzo(15.0f, 35.0f));
>     }
>     n = leggi_intero(1, 10);
>     printf("\nletto %d\n", n);
>     return 0;
> }
>
> int casuale(int min, int max)
> {
>     return rand() % (max - min + 1) + min;
> }
>
> float casuale_prezzo(float min, float max)
> {
>     int centesimi = casuale((int) (min * 100), (int) (max * 100));
>
>     return centesimi / 100.0f;
> }
>
> int leggi_intero(int min, int max)
> {
>     int n;
>
>     do {
>         printf("valore fra %d e %d: ", min, max);
>         if (scanf("%d", &n) != 1) {
>             return min;
>         }
>     } while (n < min || n > max);
>     return n;
> }
> ```
> - `casuale_prezzo` lavora in centesimi: un intero casuale fra 1500 e 3500, diviso per `100.0f` (non per `100`, che darebbe una divisione intera). Così ha sempre al massimo due decimali.
> - `leggi_intero` ripete con un `do-while` (la domanda va fatta almeno una volta). Se `scanf` non riesce a leggere un intero (input non numerico) esce restituendo `min` invece di girare all'infinito.
> - `srand` sta in `main`, una volta sola.
>
> Provato con input `0`, `42`, `7`: la domanda compare tre volte e il programma stampa `letto 7`. I tre prezzi cambiano a ogni esecuzione (una prova: 30.08, 17.93, 29.96).

**Esercizio 10.** Livello del 30, sulla traccia delle matricole. Scrivi l'output esatto.

```c
#include <stdio.h>

int t = 2;

int passo(int n)
{
    static int k = 1;
    int t = n % 10;

    k = k * 2;
    return t + k;
}

int giro(int m)
{
    int s = 0;

    while (m > 0) {
        s = s + passo(m);
        m = m / 10;
        t++;
    }
    return s;
}

int main(void)
{
    int r;

    r = giro(254);
    printf("r=%d t=%d\n", r, t);
    r = giro(7);
    r = r + t;
    printf("r=%d t=%d\n", r, t);
    return 0;
}
```

> [!example]- Soluzione
> Tre trappole insieme: `t` globale in `giro` ma locale in `passo`, `k` statica che continua a raddoppiare anche fra le due chiamate di `giro`, `m` che perde una cifra a ogni giro.
>
> Prima chiamata, `giro(254)`:
>
> | `m` | `passo(m)`: `k` (static) | `t` locale di `passo` = `m % 10` | restituisce | `s` | `t` globale dopo `t++` |
> | --- | --- | --- | --- | --- | --- |
> | 254 | 1 · 2 = 2 | 4 | 6 | 6 | 3 |
> | 25 | 2 · 2 = 4 | 5 | 9 | 15 | 4 |
> | 2 | 4 · 2 = 8 | 2 | 10 | 25 | 5 |
> | 0 | | | | esce | |
>
> `r` = 25, `t` = 5: prima riga `r=25 t=5`.
>
> Seconda chiamata, `giro(7)`: `k` non riparte da 1, vale 8.
>
> | `m` | `k` | `t` locale | restituisce | `s` | `t` globale |
> | --- | --- | --- | --- | --- | --- |
> | 7 | 16 | 7 | 23 | 23 | 6 |
>
> `r` = 23, poi `r = r + t` = 23 + 6 = 29. Output:
> ```
> r=25 t=5
> r=29 t=6
> ```
> Controllo: `t++` in `giro` tocca la globale (giro non dichiara `t`), una volta per cifra: 3 cifre più 1 cifra, da 2 a 6. La `t` di `passo` non interferisce mai. L'addizione è separata in due istruzioni apposta: in `giro(7) + t` il C non dice se `t` viene letta prima o dopo la chiamata, che la modifica, quindi il risultato potrebbe essere 28 o 29.

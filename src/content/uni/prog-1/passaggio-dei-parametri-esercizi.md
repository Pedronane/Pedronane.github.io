---
title: Passaggio dei parametri (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: bozza
data: 2026-10-23
lezioni: []
ordine: 18
---

Esercizi tipo esame di [Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo. Gli esercizi su chiamate, `return`, visibilità e `static` sono in [Funzioni (esercizi)](/uni/prog-1/funzioni-esercizi/).

Dal più facile al livello del 30. Tre famiglie: le batterie **SI/NO e vero/falso** della teorica (esercizi 1 e 6), i **tracing** con parametri per valore e per indirizzo (2, 3, 4, 5, 10), e il **codice breve** su array e struct come nella prova al calcolatore (7, 8, 9, 11, 12, 13). Nei tracing, per ogni chiamata: cosa si copia nei formali (valore o indirizzo), e quali celle del chiamante vengono scritte. Tutti gli output sono verificati compilando con `gcc -std=c11 -Wall -Wextra -Wpedantic` (gcc 16) ed eseguendo.

**Esercizio 1.** Date le funzioni e le variabili

```
void f(int *p);
void g(int a[], int n);
void h(const int *p);
int x = 1;
int v[5];
```

dire se ogni chiamata è ammissibile (compila senza errori):

- a) `f(&x);`
- b) `f(x);`
- c) `f(v);`
- d) `f(&v[2]);`
- e) `g(v, 5);`
- f) `g(&x, 1);`
- g) `g(v[0], 5);`
- h) `f(&(x + 1));`
- i) `h(v);`
- j) `h(&x);`

> [!example]- Soluzione
> Per ogni chiamata si confronta il tipo del parametro effettivo con quello del formale. `int a[]` come parametro è un `int *`.
>
> | | effettivo | formale | esito | gcc |
> | --- | --- | --- | --- | --- |
> | a) | `&x`: `int *` | `int *` | **SI** | |
> | b) | `x`: `int` | `int *` | **NO** | `error: passing argument 1 of 'f' makes pointer from integer without a cast` |
> | c) | `v`: indirizzo di `v[0]`, `int *` | `int *` | **SI**: `f` scrive in `v[0]` | |
> | d) | `&v[2]`: `int *` | `int *` | **SI**: `f` scrive in `v[2]` | |
> | e) | `v`: `int *` | `int *` | **SI** | |
> | f) | `&x`: `int *` | `int *` | **SI**: per `g` è un array di un elemento | |
> | g) | `v[0]`: `int` | `int *` | **NO** | stesso errore della b) |
> | h) | `&` di un'espressione | | **NO** | `error: lvalue required as unary '&' operand` |
> | i) | `int *` | `const int *` | **SI**: aggiungere `const` è sempre permesso | |
> | j) | `int *` | `const int *` | **SI** | |
>
> Verificate compilando ogni riga da sola. La f) è il caso che sorprende: alla funzione arriva solo un indirizzo, e non può sapere se dietro c'è un array o una variabile singola. Il contrario della i) (passare un `const int *` a un parametro `int *`) dà invece il warning `discards 'const' qualifier`.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

void inc(int a)
{
    a = a + 1;
    printf("inc: a=%d\n", a);
}

void incP(int *a)
{
    *a = *a + 1;
    printf("incP: *a=%d\n", *a);
}

int main(void)
{
    int a = 10;
    int b = 20;

    inc(a);
    printf("a=%d\n", a);
    incP(&a);
    printf("a=%d\n", a);
    incP(&b);
    inc(b);
    printf("a=%d b=%d\n", a, b);
    return 0;
}
```

> [!example]- Soluzione
> Stessa operazione, una volta sulla copia e una sulla variabile del chiamante.
>
> | chiamata | formale | dentro la funzione | `a` main | `b` main |
> | --- | --- | --- | --- | --- |
> | `inc(a)` | `a` = 10 (copia) | copia diventa 11, stampa `inc: a=11` | 10 | 20 |
> | `incP(&a)` | `a` = `&a` di main | `*a` = 11, stampa `incP: *a=11` | 11 | 20 |
> | `incP(&b)` | `a` = `&b` | `*a` = 21, stampa `incP: *a=21` | 11 | 21 |
> | `inc(b)` | `a` = 21 (copia) | copia diventa 22, stampa `inc: a=22` | 11 | 21 |
>
> Output:
> ```
> inc: a=11
> a=10
> incP: *a=11
> a=11
> incP: *a=21
> inc: a=22
> a=11 b=21
> ```
> Il nome del parametro (`a` in tutte e due le funzioni) non conta: in `incP(&b)` il formale `a` punta a `b`.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

void scambia_puntatori(int *a, int *b)
{
    int *t;

    t = a;
    a = b;
    b = t;
    printf("dentro: *a=%d *b=%d\n", *a, *b);
}

void azzera(int *p, int q)
{
    *p = 0;
    q = 0;
    printf("azzera: q=%d\n", q);
}

int main(void)
{
    int x = 1;
    int y = 2;

    scambia_puntatori(&x, &y);
    printf("x=%d y=%d\n", x, y);
    azzera(&x, y);
    printf("x=%d y=%d\n", x, y);
    return 0;
}
```

> [!example]- Soluzione
> Con `x` a 1000 e `y` a 1004:
>
> | istruzione | `a` | `b` | `t` | `x` | `y` |
> | --- | --- | --- | --- | --- | --- |
> | ingresso | 1000 | 1004 | ? | 1 | 2 |
> | `t = a;` | 1000 | 1004 | 1000 | 1 | 2 |
> | `a = b;` | 1004 | 1004 | 1000 | 1 | 2 |
> | `b = t;` | 1004 | 1000 | 1000 | 1 | 2 |
> | `printf`: `*a` è `y`, `*b` è `x` | | | | 1 | 2 |
>
> Dentro, guardando attraverso i puntatori scambiati, sembra che i valori siano scambiati: stampa `dentro: *a=2 *b=1`. Ma si sono scambiate solo le copie degli indirizzi; nessuna istruzione scrive `*a` o `*b`, quindi `x` e `y` restano 1 e 2.
>
> `azzera(&x, y)`: `p` = 1000, `q` = 2 (copia). `*p = 0` scrive in `x`; `q = 0` cambia la copia. Stampa `azzera: q=0`, poi `x=0 y=2`.
>
> Output:
> ```
> dentro: *a=2 *b=1
> x=1 y=2
> azzera: q=0
> x=0 y=2
> ```
> Regola: nel chiamante cambia solo ciò che viene scritto con `*` (o `->`, o `[ ]`) attraverso un indirizzo ricevuto.

**Esercizio 4.** Scrivi l'output esatto.

```c
#include <stdio.h>

int elabora(int v[], int n, int k)
{
    int i;
    int conta = 0;

    for (i = 0; i < n; i++) {
        if (v[i] > k) {
            v[i] = v[i] - k;
            conta++;
        }
    }
    k = 0;
    n = 0;
    return conta;
}

int main(void)
{
    int a[5] = {4, 9, 1, 7, 3};
    int n = 5;
    int k = 3;
    int r;
    int i;

    r = elabora(a, n, k);
    printf("r=%d n=%d k=%d\n", r, n, k);
    for (i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
    r = elabora(a + 1, 3, a[0]);
    printf("r=%d\n", r);
    for (i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> L'array passa come indirizzo (la funzione scrive in `a`), `n` e `k` per valore (gli azzeramenti alla fine di `elabora` toccano le copie).
>
> Prima chiamata, `elabora(a, 5, 3)`:
>
> | `i` | `v[i]` | `> 3` | dopo | `conta` |
> | --- | --- | --- | --- | --- |
> | 0 | 4 | sì | 1 | 1 |
> | 1 | 9 | sì | 6 | 2 |
> | 2 | 1 | no | 1 | 2 |
> | 3 | 7 | sì | 4 | 3 |
> | 4 | 3 | no (3 > 3 falso) | 3 | 3 |
>
> `r` = 3, `n` e `k` di `main` restano 5 e 3, `a` = `{1, 6, 1, 4, 3}`.
>
> Seconda chiamata, `elabora(a + 1, 3, a[0])`: `v` punta ad `a[1]`, quindi `v[0]` è `a[1]`, `v[1]` è `a[2]`, `v[2]` è `a[3]`; `k` = `a[0]` = 1.
>
> | `i` | cella | valore | `> 1` | dopo | `conta` |
> | --- | --- | --- | --- | --- | --- |
> | 0 | `a[1]` | 6 | sì | 5 | 1 |
> | 1 | `a[2]` | 1 | no | 1 | 1 |
> | 2 | `a[3]` | 4 | sì | 3 | 2 |
>
> Output:
> ```
> r=3 n=5 k=3
> 1 6 1 4 3 
> r=2
> 1 5 1 3 3 
> ```
> (Ogni riga dell'array finisce con uno spazio prima dell'a capo, per il `"%d "`.) `a[0]` e `a[4]` non sono toccati dalla seconda chiamata: per `elabora` l'array comincia da `a[1]` ed è lungo 3.

**Esercizio 5.** Scrivi l'output esatto.

```c
#include <stdio.h>

typedef struct {
    int x;
    int y;
} Punto;

Punto sposta(Punto p, int dx)
{
    p.x += dx;
    return p;
}

void spostaP(Punto *p, int dy)
{
    p->y += dy;
}

int main(void)
{
    Punto a = {1, 2};
    Punto b;

    b = sposta(a, 5);
    printf("a=(%d,%d) b=(%d,%d)\n", a.x, a.y, b.x, b.y);
    spostaP(&a, 10);
    printf("a=(%d,%d) b=(%d,%d)\n", a.x, a.y, b.x, b.y);
    sposta(b, 100);
    spostaP(&b, -2);
    printf("a=(%d,%d) b=(%d,%d)\n", a.x, a.y, b.x, b.y);
    return 0;
}
```

> [!example]- Soluzione
> `sposta` riceve una copia e restituisce una struct; `spostaP` riceve l'indirizzo e modifica l'originale.
>
> | istruzione | `a` | `b` | nota |
> | --- | --- | --- | --- |
> | inizio | (1, 2) | (?, ?) | |
> | `b = sposta(a, 5);` | (1, 2) | (6, 2) | `p` copia di `a`, `p.x` = 6, la copia modificata va in `b` |
> | `spostaP(&a, 10);` | (1, 12) | (6, 2) | `p->y` è `a.y` |
> | `sposta(b, 100);` | (1, 12) | (6, 2) | la copia diventa (106, 2) ma il risultato non è assegnato: perso |
> | `spostaP(&b, -2);` | (1, 12) | (6, 0) | |
>
> Output:
> ```
> a=(1,2) b=(6,2)
> a=(1,12) b=(6,2)
> a=(1,12) b=(6,0)
> ```
> `sposta(b, 100);` è il tranello: una funzione che lavora per valore e restituisce il risultato non cambia niente se il risultato viene ignorato. Serviva `b = sposta(b, 100);`.

**Esercizio 6.** Vero o falso? Motiva.

- a) In C esiste il passaggio per riferimento come meccanismo distinto dal passaggio per valore.
- b) Passando un array a una funzione, la funzione ne riceve una copia.
- c) Passando una struct per valore, i suoi campi array vengono copiati.
- d) In `void f(int b[10])` il 10 limita gli accessi a `b`.
- e) Con il parametro `const int *p` la funzione può fare `p++`.
- f) Con il parametro `int * const p` la funzione può fare `*p = 0`.
- g) Dentro `void f(int v[])`, `sizeof(v) / sizeof(v[0])` dà il numero di elementi dell'array.
- h) Una funzione può restituire più valori al chiamante.

> [!example]- Soluzione
> - a) **Falso**: il passaggio è sempre per valore; il "riferimento" è un indirizzo passato per valore e dereferenziato con `*` (slide 130).
> - b) **Falso**: riceve per valore l'indirizzo del primo elemento; gli elementi non si copiano e la funzione lavora sull'array del chiamante.
> - c) **Vero**: la struct si copia per intero, array compresi (slide 109).
> - d) **Falso**: una dimensione positiva fra le quadre del parametro viene ignorata; `b` è un `int *`.
> - e) **Vero**: `const` riguarda i dati puntati, il puntatore si può spostare (è il caso 2, `printCharacters`).
> - f) **Vero**: il puntatore è costante, i dati no (caso 3). Non si può fare `p++`.
> - g) **Falso**: `v` è un puntatore, `sizeof(v)` è 8 su Linux a 64 bit e il conto dà 2 per un array di `int` di qualsiasi lunghezza. gcc avvisa `-Wsizeof-array-argument`.
> - h) **Vero**, con i parametri puntatore (o restituendo una struct). Con `return` uno solo.

**Esercizio 7.** Scrivi la procedura `void min_max(const int v[], int n, int *min, int *max)` che restituisce al chiamante il minimo e il massimo di un array non vuoto, e un `main` che la prova sull'array `{4, -2, 9, 0, 9, 5}`.

> [!example]- Soluzione
> Due risultati: non basta `return`, si usano due parametri puntatore. L'array si legge soltanto, quindi `const`.
> ```c
> #include <stdio.h>
>
> void min_max(const int v[], int n, int *min, int *max);
>
> int main(void)
> {
>     int v[6] = {4, -2, 9, 0, 9, 5};
>     int mi;
>     int ma;
>
>     min_max(v, 6, &mi, &ma);
>     printf("min=%d max=%d\n", mi, ma);
>     return 0;
> }
>
> void min_max(const int v[], int n, int *min, int *max)
> {
>     int i;
>
>     *min = v[0];
>     *max = v[0];
>     for (i = 1; i < n; i++) {
>         if (v[i] < *min) {
>             *min = v[i];
>         }
>         if (v[i] > *max) {
>             *max = v[i];
>         }
>     }
> }
> ```
>
> | `i` | `v[i]` | `*min` (`mi`) | `*max` (`ma`) |
> | --- | --- | --- | --- |
> | | | 4 | 4 |
> | 1 | -2 | -2 | 4 |
> | 2 | 9 | -2 | 9 |
> | 3 | 0 | -2 | 9 |
> | 4 | 9 | -2 | 9 |
> | 5 | 5 | -2 | 9 |
>
> Output: `min=-2 max=9`. Si parte da `v[0]` e non da 0: con un array di soli negativi un massimo inizializzato a 0 sarebbe sbagliato. Errore da evitare: `min = v[i];` senza asterisco cambierebbe il puntatore locale, non `mi`.

**Esercizio 8.** Scrivi:

- a) `int conta_maggiori(const int v[], int n, int soglia)`, quanti elementi superano `soglia`;
- b) `void inverti(int v[], int n)`, che rovescia l'array sul posto usando `swap`.

Provale su `{4, -2, 9, 0, 9, 5}` con soglia 4, invertendo prima tutto l'array e poi solo i primi 5 elementi.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> void swap(int *i, int *j);
> int conta_maggiori(const int v[], int n, int soglia);
> void inverti(int v[], int n);
>
> int main(void)
> {
>     int v[6] = {4, -2, 9, 0, 9, 5};
>     int i;
>
>     printf("%d\n", conta_maggiori(v, 6, 4));
>     inverti(v, 6);
>     for (i = 0; i < 6; i++) {
>         printf("%d ", v[i]);
>     }
>     printf("\n");
>     inverti(v, 5);
>     for (i = 0; i < 6; i++) {
>         printf("%d ", v[i]);
>     }
>     printf("\n");
>     return 0;
> }
>
> void swap(int *i, int *j)
> {
>     int temp;
>
>     temp = *i;
>     *i = *j;
>     *j = temp;
> }
>
> int conta_maggiori(const int v[], int n, int soglia)
> {
>     int i;
>     int conta = 0;
>
>     for (i = 0; i < n; i++) {
>         if (v[i] > soglia) {
>             conta++;
>         }
>     }
>     return conta;
> }
>
> void inverti(int v[], int n)
> {
>     int i;
>
>     for (i = 0; i < n / 2; i++) {
>         swap(&v[i], &v[n - 1 - i]);
>     }
> }
> ```
> - `conta_maggiori(v, 6, 4)`: maggiori di 4 sono 9, 9, 5. Risultato 3.
> - `inverti(v, 6)`: `n / 2` = 3 giri, scambia le coppie (0, 5), (1, 4), (2, 3): `{5, 9, 0, 9, -2, 4}`.
> - `inverti(v, 5)`: `n / 2` = 2 giri (divisione intera), coppie (0, 4) e (1, 3); l'elemento centrale `v[2]` resta, `v[5]` è fuori: `{-2, 9, 0, 9, 5, 4}`.
>
> Output:
> ```
> 3
> 5 9 0 9 -2 4 
> -2 9 0 9 5 4 
> ```
> Il ciclo va fino a `n / 2`, non fino a `n`: arrivato in fondo scambierebbe ogni coppia una seconda volta e rimetterebbe l'array com'era.

**Esercizio 9.** Algoritmo su un array di struct, sul modello della domanda 6 della provetta. Con

```
typedef enum { TRIENNALE, MAGISTRALE } Tcorso;
typedef struct {
    char nome[20];
    int voto;
    Tcorso corso;
} Tstudente;
```

scrivi:

- a) `float media_corso(const Tstudente s[], int n, Tcorso corso)`, media dei voti degli studenti di quel corso (0 se non ce ne sono);
- b) `int migliore(const Tstudente s[], int n, Tstudente *best)`, che copia in `*best` lo studente con il voto più alto e restituisce 1, o restituisce 0 se l'array è vuoto;
- c) `void stampa_studente(Tstudente s)`.

Provale su Anna 27 TRIENNALE, Bruno 30 MAGISTRALE, Carla 24 TRIENNALE, Dario 22 MAGISTRALE.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
> #include <string.h>
>
> typedef enum { TRIENNALE, MAGISTRALE } Tcorso;
>
> typedef struct {
>     char nome[20];
>     int voto;
>     Tcorso corso;
> } Tstudente;
>
> float media_corso(const Tstudente s[], int n, Tcorso corso);
> int migliore(const Tstudente s[], int n, Tstudente *best);
> void stampa_studente(Tstudente s);
>
> int main(void)
> {
>     Tstudente classe[4] = {{"Anna", 27, TRIENNALE}, {"Bruno", 30, MAGISTRALE},
>                            {"Carla", 24, TRIENNALE}, {"Dario", 22, MAGISTRALE}};
>     Tstudente b;
>
>     printf("%.2f %.2f\n", media_corso(classe, 4, TRIENNALE), media_corso(classe, 4, MAGISTRALE));
>     if (migliore(classe, 4, &b)) {
>         stampa_studente(b);
>     }
>     strcpy(b.nome, "Zeno");
>     stampa_studente(classe[1]);
>     return 0;
> }
>
> float media_corso(const Tstudente s[], int n, Tcorso corso)
> {
>     int i;
>     int somma = 0;
>     int quanti = 0;
>
>     for (i = 0; i < n; i++) {
>         if (s[i].corso == corso) {
>             somma += s[i].voto;
>             quanti++;
>         }
>     }
>     return quanti > 0 ? (float) somma / quanti : 0.0f;
> }
>
> int migliore(const Tstudente s[], int n, Tstudente *best)
> {
>     int i;
>     int k = 0;
>
>     if (n <= 0) {
>         return 0;
>     }
>     for (i = 1; i < n; i++) {
>         if (s[i].voto > s[k].voto) {
>             k = i;
>         }
>     }
>     *best = s[k];
>     return 1;
> }
>
> void stampa_studente(Tstudente s)
> {
>     printf("%s %d %s\n", s.nome, s.voto, s.corso == TRIENNALE ? "TRIENNALE" : "MAGISTRALE");
> }
> ```
> - `media_corso(..., TRIENNALE)`: Anna 27 e Carla 24, somma 51, `(float) 51 / 2` = 25.50. Il cast serve: `51 / 2` fra interi darebbe 25. MAGISTRALE: (30 + 22) / 2 = 26.00.
> - `migliore`: `k` parte da 0 (Anna 27); Bruno 30 > 27, `k` = 1; Carla e Dario no. `*best = s[1]` copia la struct intera in `b`.
> - `strcpy(b.nome, "Zeno")` cambia la copia `b`, non `classe[1]`: la seconda stampa mostra ancora Bruno.
>
> Output:
> ```
> 25.50 26.00
> Bruno 30 MAGISTRALE
> Bruno 30 MAGISTRALE
> ```
> I parametri array sono `const` perché le funzioni leggono soltanto; `best` no, perché va scritto. `stampa_studente` riceve la struct per valore: è piccola e non va modificata.

**Esercizio 10.** Livello del 30, sulla traccia delle matricole (matricola 254871). Scrivi l'output esatto.

```c
#include <stdio.h>

int dato = 3;

void cifre(int m, int c[], int *n)
{
    *n = 0;
    while (m > 0) {
        c[*n] = m % 10;
        (*n)++;
        m /= 10;
    }
}

int trasforma(int *p, int dato)
{
    *p = *p * 10 + dato % 10;
    return dato > 9 ? dato / 10 : dato + 1;
}

int main(void)
{
    int c[10];
    int n;
    int ris = 0;
    int i;

    cifre(254871, c, &n);
    printf("n=%d prima=%d ultima=%d\n", n, c[0], c[n - 1]);
    for (i = 0; i < n; i++) {
        if (c[i] % 2 == 0) {
            dato = trasforma(&ris, c[i] + dato);
        }
    }
    printf("ris=%d dato=%d\n", ris, dato);
    return 0;
}
```

> [!example]- Soluzione
> Tutto insieme: un array riempito dalla funzione, un contatore restituito con un puntatore, una globale e un parametro con lo stesso nome, un `?:`.
>
> `cifre(254871, c, &n)`: le cifre escono dalla meno significativa. `c` = `{1, 7, 8, 4, 5, 2}`, `*n` scrive in `n`: 6. `(*n)++` con le parentesi incrementa `n` di `main`. Prima riga: `n=6 prima=1 ultima=2`.
>
> Nel ciclo, `dato` in `main` è la globale; in `trasforma` è il parametro, che maschera la globale. Il valore restituito finisce nella globale.
>
> | `i` | `c[i]` | pari | argomento `c[i] + dato` | `*p` (`ris`) | `?:` | `dato` globale |
> | --- | --- | --- | --- | --- | --- | --- |
> | | | | | 0 | | 3 |
> | 0 | 1 | no | | 0 | | 3 |
> | 1 | 7 | no | | 0 | | 3 |
> | 2 | 8 | sì | 8 + 3 = 11 | 0 · 10 + 1 = 1 | 11 > 9: 11 / 10 = 1 | 1 |
> | 3 | 4 | sì | 4 + 1 = 5 | 1 · 10 + 5 = 15 | 5 > 9 no: 5 + 1 = 6 | 6 |
> | 4 | 5 | no | | 15 | | 6 |
> | 5 | 2 | sì | 2 + 6 = 8 | 15 · 10 + 8 = 158 | 8 + 1 = 9 | 9 |
>
> Output:
> ```
> n=6 prima=1 ultima=2
> ris=158 dato=9
> ```
> Controllo: `ris` si costruisce aggiungendo una cifra a destra a ogni chiamata (`*10 +`), quindi ha tante cifre quante sono le cifre pari della matricola, 3. Con la tua matricola il conto cambia ma il metodo è questo.

**Esercizio 11.** L'esercizio della <span class="src">slide 153</span>: data una sequenza di righe, trovare la più lunga gestendo le righe più lunghe del limite: stampare la lunghezza vera della riga più lunga e quanto più possibile del suo testo. Usa `MAXLINE` 10 per provarlo.

> [!example]- Soluzione
> Nella versione della lezione `leggi_riga` smette di leggere quando l'array è pieno, e il resto della riga viene letto alla chiamata dopo come se fosse un'altra riga. Si cambia la funzione: continua a leggere fino al `'\n'` anche quando non ha più spazio, salva solo i primi `lim - 1` caratteri e conta tutti quelli letti. La lunghezza restituita è quella vera, il testo è troncato.
> ```c
> #include <stdio.h>
>
> #define MAXLINE 10
>
> int leggi_riga(char s[], int lim);
> void copy(char to[], const char from[]);
>
> int main(void)
> {
>     int len;
>     int max = 0;
>     char line[MAXLINE];
>     char longest[MAXLINE];
>
>     while ((len = leggi_riga(line, MAXLINE)) > 0) {
>         if (len > max) {
>             max = len;
>             copy(longest, line);
>         }
>     }
>     if (max > 0) {
>         printf("lunghezza %d: %s\n", max, longest);
>     }
>     return 0;
> }
>
> int leggi_riga(char s[], int lim)
> {
>     int c;
>     int i = 0;
>     int lunghezza = 0;
>
>     while ((c = getchar()) != EOF && c != '\n') {
>         if (i < lim - 1) {
>             s[i] = c;
>             i++;
>         }
>         lunghezza++;
>     }
>     s[i] = '\0';
>     if (c == '\n') {
>         lunghezza++;
>     }
>     return lunghezza;
> }
>
> void copy(char to[], const char from[])
> {
>     int i = 0;
>
>     while ((to[i] = from[i]) != '\0') {
>         i++;
>     }
> }
> ```
> Con input `ciao`, `programmazione uno`, `C`:
>
> | riga | caratteri letti | salvati in `line` | `len` | `max` |
> | --- | --- | --- | --- | --- |
> | `ciao` | 4 + `\n` | `ciao` | 5 | 5 |
> | `programmazione uno` | 18 + `\n` | `programma` (9) | 19 | 19 |
> | `C` | 1 + `\n` | `C` | 2 | 19 |
>
> Output: `lunghezza 19: programma`. Qui il `'\n'` non viene salvato (si conta ma non si copia), così la stampa non va a capo due volte. `copy` ha `from` `const`: lo legge soltanto. Senza modifiche, la versione della lezione avrebbe visto `programma`, `zione uno` e `\n` come tre righe da 9, 9 e 1.

**Esercizio 12.** Il cifrario di Cesare della <span class="src">slide 154</span>: spostare ogni lettera della parola di una distanza fissa (chiave). `salame` con chiave 3 diventa `vdodph`. Senza un secondo array, con una funzione `void shift(char *c, int chiave)`, e gestendo i caratteri che uscirebbero dai caratteri stampabili (codici ASCII da 33 `!` a 126 `~`): con chiave 96 `salame` diventa `ucncog`.

> [!example]- Soluzione
> Si riconosce: modificare sul posto una variabile del chiamante (un carattere della stringa) dentro una funzione, quindi parametro puntatore e chiamata con `&parola[i]`.
>
> Per restare fra 33 e 126 si conta la posizione del carattere dentro quell'intervallo (`*c - 33`, da 0 a 93), si somma la chiave, si prende il resto modulo 94 (i caratteri dell'intervallo sono $126 - 33 + 1 = 94$) e si rimette l'offset: dopo `~` si ricomincia da `!`.
> ```c
> #include <stdio.h>
>
> #define PRIMO 33
> #define ULTIMO 126
>
> void shift(char *c, int chiave);
> void cifra(char parola[], int chiave);
>
> int main(void)
> {
>     char a[] = "salame";
>     char b[] = "salame";
>     char c[] = "zuz~";
>
>     cifra(a, 3);
>     cifra(b, 96);
>     cifra(c, 5);
>     printf("%s\n%s\n%s\n", a, b, c);
>     return 0;
> }
>
> void shift(char *c, int chiave)
> {
>     int quanti = ULTIMO - PRIMO + 1;
>
>     *c = PRIMO + (*c - PRIMO + chiave) % quanti;
> }
>
> void cifra(char parola[], int chiave)
> {
>     int i;
>
>     for (i = 0; parola[i] != '\0'; i++) {
>         shift(&parola[i], chiave);
>     }
> }
> ```
> Controllo a mano:
> - chiave 3, `s` (115): posizione 115 - 33 = 82, 82 + 3 = 85, 85 % 94 = 85, 33 + 85 = 118 = `v`. Così via: `vdodph`.
> - chiave 96: 96 % 94 = 2, quindi è uno spostamento di 2: `s` → `u`, `a` → `c`, `l` → `n`, `m` → `o`, `e` → `g`: `ucncog`, come la slide.
> - chiave 5 su `zuz~`: `z` (122) dà 89 + 5 = 94, 94 % 94 = 0, cioè `!`; `u` (117) dà `z`; `~` (126) dà 93 + 5 = 98, 98 % 94 = 4, 33 + 4 = 37 = `%`.
>
> Output:
> ```
> vdodph
> ucncog
> !z!%
> ```
> La parola viene cifrata **nel suo array**, come chiede il testo: `cifra` riceve l'indirizzo dell'array, `shift` quello di un singolo carattere. Con una chiave negativa (per decifrare) il `%` del C darebbe un resto negativo: si decifra cifrando con `94 - chiave % 94`.

**Esercizio 13.** Prova al calcolatore in miniatura, con i file separati come all'esame. In `dati.h`: un `enum Tcategoria { CIBO, LIBRI, ALTRO }`, una struct `Tdato` (nome di 19 caratteri, quantità intera, prezzo `float`, categoria), `#define DIM 5` e i prototipi. In `dati.c`:

- a) `void newDato(Tdato *d)`: categoria casuale, quantità letta da tastiera fra 1 e 20 con controllo, nome letto da tastiera, prezzo casuale con due decimali fra 1.50 e 35.00;
- b) `void stampaDato(Tdato d)` e `void stampaDati(const Tdato v[], int n)`, con la categoria come etichetta;
- c) `float totaleCategoria(const Tdato v[], int n, Tcategoria c)`, somma di quantità per prezzo della categoria.

In `main.c` riempi un array di `DIM` dati, stampalo e stampa il totale di CIBO.

> [!example]- Soluzione
> Lo schema è quello della prova (punti A, C, E di [Esami passati](/uni/prog-1/esami-passati/)) in C, senza i costruttori del C++. Il punto da non sbagliare: `newDato` riceve l'**indirizzo** della struct da riempire, quindi dentro usa `d->campo`, e in `main` si chiama con `&v[i]`.
>
> `dati.h`:
> ```c
> #ifndef DATI_H
> #define DATI_H
>
> #define DIM 5
>
> typedef enum { CIBO, LIBRI, ALTRO } Tcategoria;
>
> typedef struct {
>     char nome[20];
>     int quantita;
>     float prezzo;
>     Tcategoria tipo;
> } Tdato;
>
> int casuale(int min, int max);
> void newDato(Tdato *d);
> void stampaDato(Tdato d);
> void stampaDati(const Tdato v[], int n);
> float totaleCategoria(const Tdato v[], int n, Tcategoria c);
>
> #endif
> ```
>
> `dati.c`:
> ```c
> #include <stdio.h>
> #include <stdlib.h>
> #include "dati.h"
>
> int casuale(int min, int max)
> {
>     return rand() % (max - min + 1) + min;
> }
>
> void newDato(Tdato *d)
> {
>     switch (casuale(0, 2)) {
>     case 0:
>         d->tipo = CIBO;
>         break;
>     case 1:
>         d->tipo = LIBRI;
>         break;
>     default:
>         d->tipo = ALTRO;
>         break;
>     }
>     do {
>         printf("quantita (1-20): ");
>         if (scanf("%d", &d->quantita) != 1) {
>             d->quantita = 1;
>         }
>     } while (d->quantita < 1 || d->quantita > 20);
>     printf("nome: ");
>     if (scanf("%19s", d->nome) != 1) {
>         d->nome[0] = '\0';
>     }
>     d->prezzo = casuale(150, 3500) / 100.0f;
> }
>
> void stampaDato(Tdato d)
> {
>     printf("%-10s %3d %6.2f ", d.nome, d.quantita, d.prezzo);
>     switch (d.tipo) {
>     case CIBO:
>         printf("CIBO\n");
>         break;
>     case LIBRI:
>         printf("LIBRI\n");
>         break;
>     default:
>         printf("ALTRO\n");
>         break;
>     }
> }
>
> void stampaDati(const Tdato v[], int n)
> {
>     int i;
>
>     for (i = 0; i < n; i++) {
>         stampaDato(v[i]);
>     }
> }
>
> float totaleCategoria(const Tdato v[], int n, Tcategoria c)
> {
>     int i;
>     float tot = 0;
>
>     for (i = 0; i < n; i++) {
>         if (v[i].tipo == c) {
>             tot += v[i].quantita * v[i].prezzo;
>         }
>     }
>     return tot;
> }
> ```
>
> `main.c`:
> ```
> #include <stdio.h>
> #include <stdlib.h>
> #include <time.h>
> #include "dati.h"
>
> int main(void)
> {
>     Tdato v[DIM];
>     int i;
>
>     srand((unsigned) time(NULL));
>     for (i = 0; i < DIM; i++) {
>         newDato(&v[i]);
>     }
>     printf("\n");
>     stampaDati(v, DIM);
>     printf("totale CIBO: %.2f\n", totaleCategoria(v, DIM, CIBO));
>     return 0;
> }
> ```
>
> Compilato con `gcc -std=c11 -Wall -Wextra -Wpedantic dati.c main.c` (in Dev-C++ basta aggiungere i tre file al progetto). Una prova con input `3 pane`, `50 2 libro` (il 50 viene rifiutato), `1 a`, `4 b`, `5 c` ha stampato le cinque righe e `totale CIBO: 178.45` (3 · 27.11 + 1 · 9.62 + 5 · 17.50; prezzi e categorie cambiano a ogni esecuzione).
>
> Dettagli che valgono punti:
> - `scanf("%d", &d->quantita)`: `d->quantita` è un `int`, e `scanf` ne vuole l'indirizzo. `&d->quantita` si legge `&(d->quantita)`, perché `->` lega più di `&`.
> - `scanf("%19s", d->nome)`: niente `&`, `d->nome` è un array e vale già un indirizzo; `%19s` lascia posto al `'\0'`.
> - `stampaDato(Tdato d)` per valore va bene: legge soltanto. `stampaDati` e `totaleCategoria` ricevono l'array `const`.
> - L'include guard in `dati.h` evita le definizioni doppie se l'header viene incluso due volte.

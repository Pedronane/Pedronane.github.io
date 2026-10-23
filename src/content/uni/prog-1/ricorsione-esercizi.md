---
title: Ricorsione (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: bozza
data: 2026-10-23
lezioni: []
ordine: 19
---

Esercizi tipo esame di [Ricorsione](/uni/prog-1/ricorsione/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Per i tracing: con una sola chiamata ricorsiva per record scrivi la colonna delle chiamate (andata) e risali (ritorno); con due o più chiamate disegna l'albero. Le stampe prima della chiamata escono scendendo, quelle dopo risalendo.

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

void f(int n)
{
    if (n <= 0)
        return;
    printf("%d ", n);
    f(n - 2);
}

int main(void)
{
    f(7);
    printf("\n");
    f(6);
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Una chiamata per record, stampa **prima** della chiamata: i valori escono nell'ordine delle chiamate.
>
> | chiamata | `n` | `n <= 0` | stampa |
> | --- | --- | --- | --- |
> | `f(7)` | 7 | falso | `7 ` |
> | `f(5)` | 5 | falso | `5 ` |
> | `f(3)` | 3 | falso | `3 ` |
> | `f(1)` | 1 | falso | `1 ` |
> | `f(-1)` | -1 | vero: caso base | |
>
> Con 6 le chiamate sono 6, 4, 2, 0 e la 0 è il caso base.
>
> Output (verificato):
> ```
> 7 5 3 1 
> 6 4 2 
> ```
> Il caso base è `n <= 0` e non `n <mark> 0`: partendo da un dispari si salta lo 0 e si arriva a -1. Con `n </mark> 0` `f(7)` non si fermerebbe mai (esercizio 8).

**Esercizio 2.** Scrivi l'output esatto. Cosa calcola `g`?

```c
#include <stdio.h>

void g(int n)
{
    if (n == 0)
        return;
    g(n / 2);
    printf("%d", n % 2);
}

int main(void)
{
    g(13);
    printf("\n");
    g(20);
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> La stampa è **dopo** la chiamata: si scende fino al caso base senza stampare niente, poi le cifre escono risalendo.
>
> | chiamata | `n` | `n % 2` |
> | --- | --- | --- |
> | `g(13)` | 13 | 1 |
> | `g(6)` | 6 | 0 |
> | `g(3)` | 3 | 1 |
> | `g(1)` | 1 | 1 |
> | `g(0)` | 0 | caso base |
>
> Al ritorno si stampa dal basso verso l'alto: `g(1)` stampa 1, `g(3)` 1, `g(6)` 0, `g(13)` 1, cioè `1101`. Per 20: chiamate 20, 10, 5, 2, 1 con resti 0, 0, 1, 0, 1, stampati al contrario: `10100`.
>
> Output (verificato): `1101`, poi `10100`. `g` stampa $n$ in base 2: è l'algoritmo delle divisioni successive di [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/), dove i resti si leggono dal basso. La ricorsione li rovescia da sola. Controllo: $8 + 4 + 1 = 13$, $16 + 4 = 20$.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

void h(int n)
{
    printf("%d ", n);
    if (n > 1)
        h(n - 1);
    printf("%d ", n * 10);
}

int main(void)
{
    h(3);
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Una stampa prima e una dopo la chiamata. Qui il caso base (`n` = 1) non ha un `return`: semplicemente non chiama, ma esegue lo stesso **entrambe** le `printf`.
>
> | istruzione | `n` | stampa |
> | --- | --- | --- |
> | `h(3)`: prima `printf` | 3 | `3 ` |
> | . `h(2)`: prima `printf` | 2 | `2 ` |
> | . . `h(1)`: prima `printf` | 1 | `1 ` |
> | . . `1 > 1` falso, seconda `printf` | 1 | `10 ` |
> | . `h(2)` riprende, seconda `printf` | 2 | `20 ` |
> | `h(3)` riprende, seconda `printf` | 3 | `30 ` |
>
> Output (verificato): `3 2 1 10 20 30 `. L'errore tipico è scrivere `3 2 1 1 20 30` o dimenticare il `10`: anche l'ultima chiamata stampa due volte.

**Esercizio 4** (stile `boh(681)`). Scrivi l'output esatto.

```c
#include <stdio.h>

int boh(int n)
{
    int r;

    if (n < 10) {
        printf("base %d\n", n);
        return n;
    }
    r = boh(n / 10);
    printf("r=%d c=%d\n", r, n % 10);
    return r > n % 10 ? r : n % 10;
}

int main(void)
{
    printf("%d\n", boh(681));
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce la ricorsione sulle cifre: `n / 10` toglie l'ultima cifra, `n % 10` è l'ultima cifra. La `printf` di `r` è dopo la chiamata, quindi esce al ritorno.
>
> Andata:
>
> | chiamata | `n` | `n < 10` |
> | --- | --- | --- |
> | `boh(681)` | 681 | falso, chiama `boh(68)` |
> | `boh(68)` | 68 | falso, chiama `boh(6)` |
> | `boh(6)` | 6 | vero: stampa `base 6`, ritorna 6 |
>
> Ritorno:
>
> | record | `r` | `n % 10` | stampa | ritorna |
> | --- | --- | --- | --- | --- |
> | `boh(68)` | 6 | 8 | `r=6 c=8` | 6 > 8 falso: 8 |
> | `boh(681)` | 8 | 1 | `r=8 c=1` | 8 > 1 vero: 8 |
>
> Output (verificato):
> ```
> base 6
> r=6 c=8
> r=8 c=1
> 8
> ```
> `boh` restituisce la cifra più grande. L'ultimo 8 lo stampa il `main`, dopo che tutte le chiamate sono finite.

**Esercizio 5** (stile `process`). Scrivi l'output esatto.

```c
#include <stdio.h>

void process(const char s[], int i)
{
    if (s[i] == '\0')
        return;
    if (i % 2 == 0)
        putchar(s[i]);
    process(s, i + 1);
    if (i % 2 == 1)
        putchar(s[i]);
}

int main(void)
{
    process("PROVA", 0);
    putchar('\n');
    process("ESAME", 0);
    putchar('\n');
    return 0;
}
```

> [!example]- Soluzione
> Ricorsione su stringa con indice che avanza. I caratteri di indice pari si stampano **prima** della chiamata (scendendo), quelli di indice dispari **dopo** (risalendo).
>
> | `i` | `s[i]` | andata (pari) | ritorno (dispari) |
> | --- | --- | --- | --- |
> | 0 | `P` | `P` | |
> | 1 | `R` | | `R` |
> | 2 | `O` | `O` | |
> | 3 | `V` | | `V` |
> | 4 | `A` | `A` | |
> | 5 | `'\0'` | caso base | |
>
> Scendendo escono `P`, `O`, `A`. Risalendo si passa da `i` = 4, 3, 2, 1: stampano solo 3 e 1, cioè `V` e poi `R`. Output: `POAVR`. Con `"ESAME"`: scendendo `E`, `A`, `E`; risalendo `M` (indice 3), `S` (indice 1): `EAEMS` (verificato).

**Esercizio 6.** Conta le chiamate.

- a) Quante chiamate fa `FattRic(5)` (caso base `n == 0`)?
- b) Quante chiamate fa `Fibo(6)` (casi base 0 e 1)? Quante volte viene chiamata `Fibo(2)`?
- c) Quante chiamate fa `CountWays(3)` della slide 110?

> [!example]- Soluzione
> Ricorrenza: chiamate di $f(n)$ = 1 + chiamate dei figli; il caso base conta 1.
>
> a) Una chiamata per livello: $n$ = 5, 4, 3, 2, 1, 0. **6** chiamate ($n + 1$).
>
> b) $C(0) = C(1) = 1$ e $C(n) = 1 + C(n-1) + C(n-2)$:
> ```
> C(2) = 1 + 1 + 1 = 3
> C(3) = 1 + 3 + 1 = 5
> C(4) = 1 + 5 + 3 = 9
> C(5) = 1 + 9 + 5 = 15
> C(6) = 1 + 15 + 9 = 25
> ```
> **25** chiamate. Controllo con $2F(7) - 1 = 2 \cdot 13 - 1 = 25$. Quante volte compare ogni valore nell'albero di `Fibo(6)`:
>
> | valore | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | chiamate | 1 | 1 | 2 | 3 | 5 | 8 | 5 |
>
> Da 4 in giù ogni valore è la somma dei due alla sua sinistra, perché un `Fibo(k)` viene chiamato da ogni `Fibo(k+1)` e da ogni `Fibo(k+2)`. Fa eccezione `Fibo(0)`, che viene chiamato solo da `Fibo(2)` (da `Fibo(1)` no, è un caso base): 5 volte. `Fibo(2)` viene chiamata **5** volte. Somma: $1 + 1 + 2 + 3 + 5 + 8 + 5 = 25$.
>
> c) $C(n) = 1$ per $n \le 0$: $C(1) = 1 + 1 + 1 + 1 = 4$, $C(2) = 1 + 4 + 1 + 1 = 7$, $C(3) = 1 + 7 + 4 + 1 = 13$. **13**, come nell'albero di [Ricorsione › La scala con passi da 1, 2 o 3, ricorsiva](/uni/prog-1/ricorsione/#la-scala-con-passi-da-1-2-o-3-ricorsiva). Tutti i valori contati con un contatore globale nel codice o con uno script (verificato).

**Esercizio 7.** Scrivi l'output esatto e disegna l'albero delle chiamate.

```c
#include <stdio.h>

int chiamate = 0;

void t(int n)
{
    chiamate++;
    if (n == 0)
        return;
    printf("%d", n);
    t(n - 1);
    t(n - 1);
}

int main(void)
{
    t(3);
    printf("\nchiamate=%d\n", chiamate);
    return 0;
}
```

> [!example]- Soluzione
> Due chiamate per record: serve l'albero. La stampa è **prima** delle due chiamate, quindi ogni nodo stampa il suo `n` appena viene raggiunto (visita in pre-ordine).
>
> ```
>                 t(3) stampa 3
>          ┌───────────┴───────────┐
>    t(2) stampa 2            t(2) stampa 2
>     ┌─────┴─────┐            ┌─────┴─────┐
>  t(1) st.1   t(1) st.1    t(1) st.1   t(1) st.1
>   ┌─┴─┐       ┌─┴─┐        ┌─┴─┐       ┌─┴─┐
>  t0  t0      t0  t0       t0  t0      t0  t0
> ```
>
> Leggendo l'albero da sinistra a destra, ogni nodo nel momento in cui si entra: 3, 2, 1, 1, 2, 1, 1. Le chiamate sono i nodi: $1 + 2 + 4 + 8 = 15$, cioè $C(n) = 1 + 2C(n-1)$ con $C(0) = 1$, $C(3) = 2^4 - 1$. `chiamate` è globale: una sola cella che tutte le attivazioni incrementano.
>
> Output (verificato):
> ```
> 3211211
> chiamate=15
> ```
> Controllo: le stampe sono i nodi con $n > 0$, cioè $1 + 2 + 4 = 7$ cifre.

**Esercizio 8** (trova l'errore). Cosa succede eseguendo il programma? Correggi `f` in modo che `f(5)` restituisca $5 + 3 + 1 = 9$.

```c
#include <stdio.h>

int f(int n)
{
    if (n == 0)
        return 0;
    return n + f(n - 2);
}

int main(void)
{
    printf("%d\n", f(6));
    printf("%d\n", f(5));
    return 0;
}
```

> [!example]- Soluzione
> Il caso base `n == 0` si raggiunge solo dai pari. `f(6)` = 6 + 4 + 2 + 0 = 12 e viene stampato. `f(5)` chiama `f(3)`, `f(1)`, `f(-1)`, `f(-3)`, ... e non incontra mai lo 0: ogni chiamata aggiunge un record alla pila finché lo stack finisce.
>
> Verificato: compilato senza ottimizzazioni (come fanno onlinegdb e Dev-C++ di default) stampa `12` e poi il programma si ferma con `Segmentation fault` (codice di uscita 139). Con `-O2` gcc trasforma la ricorsione in un ciclo e il programma gira all'infinito senza crash: in tutti e due i casi `f(5)` non restituisce niente.
>
> Correzione: il caso base deve prendere tutti i valori a cui si può arrivare.
> ```
> int f(int n)
> {
>     if (n <= 0)
>         return 0;
>     return n + f(n - 2);
> }
> ```
> Con `n <= 0`, `f(5)` = 5 + 3 + 1 + `f(-1)` = 5 + 3 + 1 + 0 = 9, e `f(6)` resta 12.

**Esercizio 9** (ricorsione semplice, prodotto e potenza come all'esame). Scrivi due funzioni ricorsive:

- a) `int prodotto(int a, int b)` che calcola $a \cdot b$ con $b \ge 0$ usando solo somme;
- b) `int potenza(int base, int esp)` che calcola $base^{esp}$ con $esp \ge 0$.
- c) Per il 30: una `potenza_veloce` che usa $b^{e} = (b^{e/2})^2$ e fa circa $\log_2 e$ chiamate invece di $e$.

> [!example]- Soluzione
> Si riconosce il tipo "traduci una definizione induttiva": la dimensione che scende è `b` (o `esp`).
> - $a \cdot 0 = 0$ e $a \cdot b = a + a \cdot (b-1)$.
> - $base^0 = 1$ e $base^{esp} = base \cdot base^{esp-1}$.
> - $b^{e} = b^{e/2} \cdot b^{e/2}$ se $e$ è pari, $b \cdot b^{e/2} \cdot b^{e/2}$ se è dispari (con $e/2$ divisione intera).
>
> ```c
> #include <stdio.h>
>
> int prodotto(int a, int b)
> {
>     if (b == 0)
>         return 0;
>     return a + prodotto(a, b - 1);
> }
>
> int potenza(int base, int esp)
> {
>     if (esp == 0)
>         return 1;
>     return base * potenza(base, esp - 1);
> }
>
> int potenza_veloce(int base, int esp)
> {
>     int meta;
>
>     if (esp == 0)
>         return 1;
>     meta = potenza_veloce(base, esp / 2);
>     if (esp % 2 == 0)
>         return meta * meta;
>     return base * meta * meta;
> }
>
> int main(void)
> {
>     printf("%d %d %d %d\n", prodotto(7, 4), prodotto(5, 0), potenza(2, 10), potenza(3, 4));
>     printf("%d %d\n", potenza_veloce(2, 10), potenza_veloce(3, 5));
>     return 0;
> }
> ```
>
> Output (verificato): `28 0 1024 81`, poi `1024 243`.
>
> Tracing di `potenza_veloce(3, 5)`:
>
> | chiamata | `esp` | `esp / 2` | `meta` | ritorna |
> | --- | --- | --- | --- | --- |
> | `pv(3, 5)` | 5 | 2 | 9 | dispari: 3 · 9 · 9 = 243 |
> | `pv(3, 2)` | 2 | 1 | 3 | pari: 3 · 3 = 9 |
> | `pv(3, 1)` | 1 | 0 | 1 | dispari: 3 · 1 · 1 = 3 |
> | `pv(3, 0)` | 0 | | | caso base: 1 |
>
> 4 chiamate contro le 6 di `potenza(3, 5)`; con `esp` = 1000 sarebbero 11 contro 1001. `meta` si salva in una variabile: scrivere `potenza_veloce(base, esp / 2) * potenza_veloce(base, esp / 2)` farebbe due chiamate per livello e si tornerebbe a $e$ chiamate.

**Esercizio 10** (ricorsione su stringhe e array). Scrivi in modo ricorsivo, senza cicli:

- a) `int conta(const char s[], char c)` che conta quante volte `c` compare in `s`;
- b) `int somma_pari(const int a[], int n)` che somma gli elementi pari dei primi `n` elementi di `a`.

Prova con `"mississippi"` e `'s'`, e con l'array {3, 8, 5, 2, 10, 7}.

> [!example]- Soluzione
> - a) La dimensione è la lunghezza della stringa: caso base la stringa vuota (`s[0] == '\0'`), passo il primo carattere più `conta` sul resto `s + 1`.
> - b) La dimensione è `n`: caso base `n == 0`, passo l'ultimo elemento `a[n - 1]` più `somma_pari` sui primi `n - 1`.
>
> ```c
> #include <stdio.h>
>
> int conta(const char s[], char c)
> {
>     if (s[0] == '\0')
>         return 0;
>     return (s[0] == c) + conta(s + 1, c);
> }
>
> int somma_pari(const int a[], int n)
> {
>     if (n == 0)
>         return 0;
>     return (a[n - 1] % 2 == 0 ? a[n - 1] : 0) + somma_pari(a, n - 1);
> }
>
> int main(void)
> {
>     int v[6] = {3, 8, 5, 2, 10, 7};
>
>     printf("%d %d\n", conta("mississippi", 's'), conta("", 'a'));
>     printf("%d\n", somma_pari(v, 6));
>     return 0;
> }
> ```
>
> Output (verificato): `4 0`, poi `20`. `s[0] == c` vale 1 o 0, quindi si può sommare direttamente. Controllo: in "mississippi" le `s` sono alle posizioni 2, 3, 5, 6, cioè 4; i pari dell'array sono 8 + 2 + 10 = 20. La stringa vuota va al caso base subito e dà 0.

**Esercizio 11** (Hanoi). Con il programma della lezione (`hanoi('A', 'C', 'B', n)`) e $n = 10$:

- a) quante righe "Muovi" stampa?
- b) qual è la prima mossa?
- c) qual è la mossa numero 512?

> [!example]- Soluzione
> a) $M(n) = 2^n - 1$: $2^{10} - 1 = 1023$.
>
> b) La prima mossa la fa il primo caso base raggiunto, seguendo sempre la prima chiamata `hanoi(da, appoggio, a, n - 1)`, che scambia arrivo e appoggio:
> ```
> h(10, A, C, B)
> h(9,  A, B, C)
> h(8,  A, C, B)
> ...                 con n pari l'arrivo è C, con n dispari è B
> h(1,  A, B, C)      Muovi disco 1 da A a B
> ```
> Con un numero pari di dischi il disco 1 va prima su B; con un numero dispari (come $n = 3$ a lezione) va prima su C.
>
> c) Le mosse di `h(10)` sono: le $2^9 - 1 = 511$ mosse di `h(9, A, B, C)`, poi la mossa del disco 10, poi altre 511. La numero 512 è quella di mezzo: `Muovi 10 da A a C`.
>
> Verificato eseguendo il programma con input 10: 1023 righe, la prima è `Muovi disco 1 da A a B`, la 512-esima `Muovi 10 da A a C`.

**Esercizio 12** (livello 30: globale, puntatore e due chiamate). Scrivi l'output esatto.

```c
#include <stdio.h>

int cont = 0;

int q(int n, int *k)
{
    cont++;
    if (n <= 1) {
        (*k)++;
        return 1;
    }
    return q(n - 1, k) + 2 * q(n - 2, k);
}

int main(void)
{
    int k = 0;
    int r = q(4, &k);

    printf("r=%d cont=%d k=%d\n", r, cont, k);
    return 0;
}
```

> [!example]- Soluzione
> Tre cose da tenere separate: il valore restituito (ricorrenza su `n`), `cont` (una cella globale: conta **tutte** le chiamate), `*k` (una cella del `main` raggiunta da tutti i record tramite lo stesso indirizzo: conta le chiamate nel caso base, cioè le foglie).
>
> Valori, dal basso:
> ```
> q(0) = q(1) = 1                         caso base
> q(2) = q(1) + 2·q(0) = 1 + 2 = 3
> q(3) = q(2) + 2·q(1) = 3 + 2 = 5
> q(4) = q(3) + 2·q(2) = 5 + 6 = 11
> ```
>
> Albero delle chiamate:
> ```
>              q(4)
>          ┌────┴────┐
>        q(3)       q(2)
>       ┌──┴──┐    ┌──┴──┐
>     q(2)  q(1)  q(1) q(0)
>    ┌──┴──┐
>  q(1)  q(0)
> ```
> Nodi: 9, quindi `cont` = 9. Foglie (`n <= 1`): q(1), q(0), q(1), q(1), q(0), cioè 5, quindi `k` = 5. Controllo: in un albero in cui ogni nodo interno ha 2 figli, foglie = nodi interni + 1, e qui i nodi interni sono q(4), q(3), q(2), q(2): 4 + 1 = 5.
>
> Output (verificato): `r=11 cont=9 k=5`. L'ordine in cui il compilatore valuta i due operandi di `+` non è fissato dal C, ma qui non cambia niente: `cont` e `k` contano solo quante chiamate avvengono, non in che ordine.

**Esercizio 13** (livello 30: memoization). La `CountWays` della slide 110 per $N = 37$ fa circa $1{,}4 \cdot 10^{10}$ chiamate e va in overflow. Scrivi `long long CountWaysMemo(int n)` con un array globale di memo, e stampa i modi per $N$ = 10, 37, 60.

> [!example]- Soluzione
> Si riconosce il caso di Fibonacci: più chiamate sugli stessi sottoproblemi. Si aggiunge un array, a 0 = "non calcolato" (un array globale parte già azzerato), e si controlla prima di calcolare. Il tipo `long long` arriva a circa $9{,}2 \cdot 10^{18}$.
>
> ```c
> #include <stdio.h>
>
> long long memo[100];
>
> long long CountWaysMemo(int n)
> {
>     if (n < 0)
>         return 0;
>     if (n == 0)
>         return 1;
>     if (memo[n] != 0)
>         return memo[n];
>     memo[n] = CountWaysMemo(n - 1) + CountWaysMemo(n - 2) + CountWaysMemo(n - 3);
>     return memo[n];
> }
>
> int main(void)
> {
>     printf("%lld %lld %lld\n", CountWaysMemo(10), CountWaysMemo(37), CountWaysMemo(60));
>     return 0;
> }
> ```
>
> Output (verificato): `274 3831006429 4680045560037375`, istantaneo. Controllo: 274 è il valore di $S(10)$ della tabella in [Ciclo while ed esempi › La scala a passi da 1, 2 o 3](/uni/prog-1/ciclo-while-ed-esempi/#la-scala-a-passi-da-1-2-o-3), e $3\,831\,006\,429 > 2^{31} - 1 = 2\,147\,483\,647$ conferma che con `int` $N = 37$ va in overflow.
>
> Perché è veloce: ogni `memo[k]` si riempie una volta sola; dopo, ogni chiamata su `k` restituisce subito. Per ogni `n` si fanno al massimo tre chiamate "nuove", quindi le chiamate crescono linearmente con `n`, come la versione con il ciclo del prof.

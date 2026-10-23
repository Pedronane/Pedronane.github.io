---
title: Stringhe (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-14
lezioni: []
ordine: 12
---

Esercizi tipo esame di [Stringhe](/uni/prog-1/stringhe/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Nei tracing: la stringa in caselle con gli indici sopra e il terminatore disegnato, e dopo ogni modifica la domanda "dove sta il primo `'\0'`?". Per i caratteri trasformati con l'aritmetica si scrive il codice ASCII (`'a'` 97, `'A'` 65, `'0'` 48, spazio 32).

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char a[] = "esame";
    char b[10] = "esame";
    char c[] = {'e', 's'};

    printf("%zu %zu %zu\n", sizeof(a), sizeof(b), sizeof(c));
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce dalla domanda su `sizeof`: conta le celle dell'array, non i caratteri.
> - `a`: dimensione dedotta da `"esame"`, 5 caratteri più `'\0'`, quindi 6;
> - `b`: dimensione scritta, 10, indipendentemente dal contenuto;
> - `c`: dimensione dedotta dalla lista, 2 caratteri e nessun terminatore aggiunto, quindi 2.
>
> Output: `6 10 2` (verificato). Controllo: la lunghezza della stringa in `a` e `b` è 5 in entrambi i casi, la dimensione no.

**Esercizio 2** (SI/NO). Per ogni affermazione rispondi SI o NO e motiva.

- a) `char s[5] = "ciao";` è corretto e `s` contiene una stringa.
- b) `char s[4] = "ciao";` contiene una stringa.
- c) Con `char nome[20];` la lettura corretta è `scanf("%s", &nome);`.
- d) `printf("%s", s)` stampa tutte le celle dell'array `s`.
- e) Dopo `char s[] = "abc";` l'istruzione `s = "xyz";` copia `"xyz"` in `s`.
- f) `'a'` e `"a"` occupano la stessa memoria.
- g) Con input `Mario Rossi`, `scanf("%19s", nome)` mette in `nome` la stringa `"Mario Rossi"`.
- h) Se `s1` e `s2` contengono entrambe `"ciao"`, `s1 == s2` vale 1.

> [!example]- Soluzione
> - a) **SI**. 4 caratteri più `'\0'`: 5 celle, esatte.
> - b) **NO**. Il C accetta l'inizializzazione (gcc 16 avvisa) ma scarta il terminatore: è un array di 4 `char` senza `'\0'`, che `%s` non sa dove fermare.
> - c) **NO**. `nome` è già l'indirizzo della prima cella: si scrive `scanf("%19s", nome)`. Con `&nome` il valore numerico è lo stesso ma il tipo è "puntatore ad array di 20 `char`", e gcc con `-Wall` avvisa.
> - d) **NO**. Stampa fino al primo `'\0'`, non fino alla fine dell'array.
> - e) **NO**. Non compila: un array non si assegna. Si copia con un ciclo o con `strcpy`.
> - f) **NO**. `"a"` è una stringa di due celle, `'a'` e `'\0'`. La costante `'a'` è un intero, 97: messa in un `char` occupa 1 byte, e da sola in C ha tipo `int` (`sizeof('a')` vale 4).
> - g) **NO**. `%s` si ferma al primo spazio: `nome` vale `"Mario"`, e `" Rossi"` resta nel buffer.
> - h) **NO**. Confronta gli indirizzi dei due array, che sono diversi: vale 0. Le stringhe si confrontano carattere per carattere.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "Programma";
    int i = 0;
    int n = 0;

    while (s[i] != '\0') {
        if (s[i] == 'r' || s[i] == 'a')
            n++;
        i++;
    }
    s[4] = '\0';
    printf("%d %d %s\n", i, n, s);
    return 0;
}
```

> [!example]- Soluzione
> Si scrive la stringa con gli indici:
>
> | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | P | r | o | g | r | a | m | m | a | `\0` |
>
> | `i` | `s[i]` | `'r'` o `'a'`? | `n` dopo |
> | --- | --- | --- | --- |
> | 0 | P | no | 0 |
> | 1 | r | sì | 1 |
> | 2, 3 | o, g | no | 1 |
> | 4 | r | sì | 2 |
> | 5 | a | sì | 3 |
> | 6, 7 | m, m | no | 3 |
> | 8 | a | sì | 4 |
> | 9 | `\0` | esce | 4 |
>
> Esce quando `s[i]` è il terminatore, quindi `i` vale 9, la lunghezza. Poi `s[4] = '\0'` mette un terminatore al posto della seconda `r`: `%s` si ferma lì e stampa le celle 0-3.
>
> Output: `9 4 Prog` (verificato).

**Esercizio 4.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "ciao mondo";
    int i;

    for (i = 0; s[i] != '\0'; i += 2)
        if (s[i] >= 'a' && s[i] <= 'z')
            s[i] = s[i] - 'a' + 'A';
    printf("%s\n", s);
    printf("%c%c\n", s[3] + 1, s[7] - 32);
    return 0;
}
```

> [!example]- Soluzione
> Indici: `c`0 `i`1 `a`2 `o`3, spazio in 4, `m`5 `o`6 `n`7 `d`8 `o`9, terminatore in 10. Il ciclo visita solo gli indici pari, finché la cella non è il terminatore:
>
> | `i` | `s[i]` | minuscola? | diventa |
> | --- | --- | --- | --- |
> | 0 | `c` | sì | `C` |
> | 2 | `a` | sì | `A` |
> | 4 | spazio | no | resta |
> | 6 | `o` | sì | `O` |
> | 8 | `d` | sì | `D` |
> | 10 | `'\0'` | | esce |
>
> Prima riga: `CiAo mOnDo`. Poi `s[3]` è `'o'` (indice dispari, non toccato) e `'o' + 1` è `'p'`; `s[7]` è `'n'` e `'n' - 32` è `'N'` (le maiuscole stanno 32 codici prima). Seconda riga: `pN` (verificato).
>
> Il ciclo si ferma bene solo perché il terminatore sta in una posizione **pari**. Con `"ciao, mondo"` (11 caratteri, terminatore in 11) il passo 2 salterebbe il `'\0'` e leggerebbe `s[12]`, fuori dall'array. Con un passo diverso da 1 la condizione sicura è `i < lunghezza`, calcolata prima.

**Esercizio 5** (stile matricola). Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char m[] = "238517";
    int i;

    for (i = 0; m[i] != '\0'; i++)
        if ((m[i] - '0') % 2 == 1)
            m[i] = m[i] + 1;
    printf("%s\n", m);
    m[3] = '\0';
    printf("%s %c %d\n", m, m[4], m[1] - '0' + m[2] - '0');
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce la differenza fra cifra-carattere e valore: `m[i] - '0'` è il valore, `m[i] + 1` è il carattere successivo nella tabella (e dopo una cifra dispari, da 1 a 7, viene sempre una cifra).
>
> | `i` | `m[i]` | valore | dispari? | `m[i]` dopo |
> | --- | --- | --- | --- | --- |
> | 0 | `'2'` | 2 | no | `'2'` |
> | 1 | `'3'` | 3 | sì | `'4'` |
> | 2 | `'8'` | 8 | no | `'8'` |
> | 3 | `'5'` | 5 | sì | `'6'` |
> | 4 | `'1'` | 1 | sì | `'2'` |
> | 5 | `'7'` | 7 | sì | `'8'` |
> | 6 | `'\0'` | | esce | |
>
> Prima riga: `248628`. Poi `m[3] = '\0'` tronca a `"248"`, ma `m[4]` in memoria è ancora `'2'`, e `%c` lo stampa. L'ultimo valore è $(52 - 48) + (56 - 48) = 4 + 8 = 12$.
>
> Output (verificato):
> ```
> 248628
> 248 2 12
> ```
> Controllo: il troncamento cambia cosa stampa `%s`, non cancella le celle dopo il terminatore.

**Esercizio 6.** Senza usare librerie, costruisci in `completo` la stringa `"Pietro Marchesi"` a partire da `char nome[] = "Pietro"` e `char cognome[] = "Marchesi"`, e stampala con la sua lunghezza.

> [!example]- Soluzione
> È una concatenazione: copia di `nome`, uno spazio, copia di `cognome`, terminatore. Un solo indice `i` scorre `completo`, mentre `j` riparte da 0 per ciascuna sorgente.
>
> ```c
> #include <stdio.h>
>
> #define MAX 50
>
> int main(void)
> {
>     char nome[] = "Pietro";
>     char cognome[] = "Marchesi";
>     char completo[MAX];
>     int i = 0;
>     int j = 0;
>
>     while (nome[j] != '\0' && i < MAX - 1) {
>         completo[i] = nome[j];
>         i++;
>         j++;
>     }
>     if (i < MAX - 1) {
>         completo[i] = ' ';
>         i++;
>     }
>     j = 0;
>     while (cognome[j] != '\0' && i < MAX - 1) {
>         completo[i] = cognome[j];
>         i++;
>         j++;
>     }
>     completo[i] = '\0';
>     printf("%s (%d caratteri)\n", completo, i);
>     return 0;
> }
> ```
>
> | fase | `i` all'inizio | `i` alla fine | celle scritte |
> | --- | --- | --- | --- |
> | copia di `nome` | 0 | 6 | 0-5: `Pietro` |
> | spazio | 6 | 7 | 6 |
> | copia di `cognome` | 7 | 15 | 7-14: `Marchesi` |
> | terminatore | 15 | 15 | 15: `'\0'` |
>
> Stampa `Pietro Marchesi (15 caratteri)` (verificato). Controllo: $6 + 1 + 8 = 15$. L'ultima assegnazione `completo[i] = '\0'` è quella che si dimentica: senza, `completo` (array locale non inizializzato) non avrebbe terminatore e `%s` stamperebbe spazzatura.

**Esercizio 7.** Leggi due parole (al massimo 29 caratteri) e stampa se sono uguali o quale viene prima in ordine alfabetico, senza `strcmp`.

> [!example]- Soluzione
> Confronto carattere per carattere (vedi Metodo): ci si ferma alla prima differenza o alla fine di `s1`.
>
> ```c
> #include <stdio.h>
>
> #define MAX 30
>
> int main(void)
> {
>     char s1[MAX];
>     char s2[MAX];
>     int i = 0;
>
>     if (scanf("%29s %29s", s1, s2) != 2) {
>         printf("input non valido\n");
>         return 1;
>     }
>     while (s1[i] != '\0' && s1[i] == s2[i])
>         i++;
>     if (s1[i] == s2[i])
>         printf("uguali\n");
>     else if (s1[i] < s2[i])
>         printf("%s viene prima di %s\n", s1, s2);
>     else
>         printf("%s viene prima di %s\n", s2, s1);
>     return 0;
> }
> ```
>
> Prove (verificate):
>
> | input | si ferma a `i` | confronto | stampa |
> | --- | --- | --- | --- |
> | `casa cassa` | 3 | `'a'` (97) < `'s'` (115) | `casa viene prima di cassa` |
> | `casa casa` | 4 | `'\0'` uguale a `'\0'` | `uguali` |
> | `mare mar` | 3 | `'e'` (101) > `'\0'` (0) | `mar viene prima di mare` |
> | `Zaino abaco` | 0 | `'Z'` (90) < `'a'` (97) | `Zaino viene prima di abaco` |
>
> L'ultima riga è il trabocchetto: l'ordine è quello dei **codici ASCII**, e tutte le maiuscole (65-90) vengono prima di tutte le minuscole (97-122). Per un ordine "da dizionario" si confrontano le lettere dopo averle portate tutte in minuscolo.

**Esercizio 8.** Leggi una parola e stampa se è palindroma (si legge uguale nei due versi), senza copiarla in un altro array.

> [!example]- Soluzione
> Si riconosce dal "nei due versi": due indici che partono dagli estremi e si avvicinano. Il primo passo è trovare l'ultimo carattere, cioè lunghezza meno 1.
>
> ```c
> #include <stdio.h>
>
> #define MAX 50
>
> int main(void)
> {
>     char s[MAX];
>     int sx = 0;
>     int dx = 0;
>
>     if (scanf("%49s", s) != 1) {
>         printf("input non valido\n");
>         return 1;
>     }
>     while (s[dx] != '\0')
>         dx++;
>     dx--;
>     while (sx < dx && s[sx] == s[dx]) {
>         sx++;
>         dx--;
>     }
>     if (sx >= dx)
>         printf("%s e' palindroma\n", s);
>     else
>         printf("%s non e' palindroma\n", s);
>     return 0;
> }
> ```
>
> Tracing con `radar` (lunghezza 5, quindi `dx` parte da 4):
>
> | `sx` | `dx` | `s[sx]` | `s[dx]` | `sx < dx` e uguali? |
> | --- | --- | --- | --- | --- |
> | 0 | 4 | r | r | sì |
> | 1 | 3 | a | a | sì |
> | 2 | 2 | d | d | no, `sx < dx` è falso |
>
> Il ciclo esce con `sx` uguale a `dx`: tutte le coppie sono state confrontate, è palindroma. Con `ciao` esce subito con `sx` 0 e `dx` 3 perché `c` e `o` differiscono, e `sx < dx` dice "non palindroma". Output verificati: `anna e' palindroma`, `radar e' palindroma`, `ciao non e' palindroma`, `x e' palindroma`. Il test finale è `sx >= dx` e non "il ciclo è finito": il ciclo finisce in entrambi i casi, conta il **motivo**.

**Esercizio 9.** Leggi una matricola come stringa (al massimo 10 caratteri). Se contiene solo cifre stampa quante sono e la loro somma; altrimenti stampa la posizione del primo carattere non valido.

> [!example]- Soluzione
> Si riconosce uno scorrimento con due condizioni d'uscita, come la ricerca negli array: la fine della stringa o il primo carattere sbagliato. Il flag `ok` ferma il ciclo.
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     char matr[11];
>     int i = 0;
>     int somma = 0;
>     int ok = 1;
>
>     if (scanf("%10s", matr) != 1)
>         return 1;
>     while (matr[i] != '\0' && ok) {
>         if (matr[i] >= '0' && matr[i] <= '9')
>             somma += matr[i] - '0';
>         else
>             ok = 0;
>         i++;
>     }
>     if (ok)
>         printf("%d cifre, somma %d\n", i, somma);
>     else
>         printf("carattere non valido in posizione %d\n", i - 1);
>     return 0;
> }
> ```
>
> Con input `23a51`:
>
> | `i` | `matr[i]` | cifra? | `somma` | `ok` | `i` dopo |
> | --- | --- | --- | --- | --- | --- |
> | 0 | `'2'` | sì | 2 | 1 | 1 |
> | 1 | `'3'` | sì | 5 | 1 | 2 |
> | 2 | `'a'` | no | 5 | 0 | 3 |
> | 3 | | `ok` è 0, esce | | | |
>
> Stampa `carattere non valido in posizione 2` (verificato): l'`i++` è avvenuto anche nel giro dell'errore, per questo si stampa `i - 1`. Con input `238517` stampa `6 cifre, somma 26` ($2 + 3 + 8 + 5 + 1 + 7 = 26$, verificato). L'array ha 11 celle per 10 caratteri più `'\0'`, e `%10s` impedisce di sforare.

**Esercizio 10.** Scrivi l'output esatto (le parentesi quadre servono a vedere gli spazi).

```c
#include <stdio.h>

int main(void)
{
    char s[] = " a b  cd ";
    int i;
    int j = 0;

    for (i = 0; s[i] != '\0'; i++)
        if (s[i] != ' ')
            s[j++] = s[i];
    s[j] = '\0';
    printf("[%s] %d %d\n", s, i, j);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce il filtro sul posto con due indici, lo stesso degli array: `i` legge, `j` scrive solo i caratteri da tenere. Alla fine serve il nuovo terminatore in `j`.
>
> | `i` | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | `s[i]` | ␣ | a | ␣ | b | ␣ | ␣ | c | d | ␣ | `\0` |
> | azione | salta | `s[0]` → a | salta | `s[1]` → b | salta | salta | `s[2]` → c | `s[3]` → d | salta | esce |
> | `j` dopo | 0 | 1 | 1 | 2 | 2 | 2 | 3 | 4 | 4 | |
>
> Poi `s[4] = '\0'`. Output: `[abcd] 9 4` (verificato). `i` vale 9, la lunghezza originale; `j` vale 4, la nuova. Senza `s[j] = '\0'` la stringa sarebbe `abcd` seguita dai vecchi caratteri dalla cella 4 in poi: `abcd  cd `.

**Esercizio 11.** Il cifrario di Cesare sposta ogni lettera minuscola di 3 posizioni nell'alfabeto, ricominciando da `a` dopo la `z`. Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "zapPa";
    int i;

    for (i = 0; s[i] != '\0'; i++)
        if (s[i] >= 'a' && s[i] <= 'z')
            s[i] = 'a' + (s[i] - 'a' + 3) % 26;
    printf("%s\n", s);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce il modulo "circolare" (come la coda circolare degli array): `s[i] - 'a'` è la posizione nell'alfabeto da 0 a 25, `+ 3` sposta, `% 26` riporta dopo la `z` all'inizio, `'a' + ...` torna a carattere.
>
> | `s[i]` | `s[i] - 'a'` | `+ 3` | `% 26` | nuovo |
> | --- | --- | --- | --- | --- |
> | `z` | 25 | 28 | 2 | `c` |
> | `a` | 0 | 3 | 3 | `d` |
> | `p` | 15 | 18 | 18 | `s` |
> | `P` | maiuscola, non toccata | | | `P` |
> | `a` | 0 | 3 | 3 | `d` |
>
> Output: `cdsPd` (verificato). Senza `% 26` la `z` diventerebbe $97 + 28 = 125$, cioè `}`.

**Esercizio 12** (livello del 30). Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "esame30";
    int i;
    int j = 0;
    int k = 0;

    for (i = 0; s[i]; i++) {
        if (s[i] >= '0' && s[i] <= '9')
            k = k * 10 + s[i] - '0';
        else if (i % 2 == 0)
            s[j++] = s[i] - 32;
    }
    s[j] = '\0';
    printf("%s %d %zu\n", s, k, sizeof(s));
    return 0;
}
```

> [!example]- Soluzione
> Tre idee insieme: `for (...; s[i]; ...)` si ferma sul terminatore (vale 0), le cifre si accumulano in un numero con lo schema di Horner, le lettere in posizione pari si portano in maiuscolo (`- 32`) e si compattano in testa con `j`. `j` non supera mai `i`, quindi si scrive solo su celle già lette.
>
> | `i` | `s[i]` | cifra? | `i` pari? | azione | `j` | `k` |
> | --- | --- | --- | --- | --- | --- | --- |
> | 0 | `e` | no | sì | `s[0] = 'E'` | 1 | 0 |
> | 1 | `s` | no | no | niente | 1 | 0 |
> | 2 | `a` | no | sì | `s[1] = 'A'` | 2 | 0 |
> | 3 | `m` | no | no | niente | 2 | 0 |
> | 4 | `e` | no | sì | `s[2] = 'E'` | 3 | 0 |
> | 5 | `'3'` | sì | | `k = 0 · 10 + 3` | 3 | 3 |
> | 6 | `'0'` | sì | | `k = 3 · 10 + 0` | 3 | 30 |
> | 7 | `'\0'` | esce | | | | |
>
> Poi `s[3] = '\0'`. `sizeof(s)` è la dimensione dell'array, 7 caratteri più il terminatore: 8, e non cambia anche se la stringa ora è lunga 3.
>
> Output: `EAE 30 8` (verificato). Controllo: `'e' - 32` è $101 - 32 = 69$, cioè `'E'`; le cifre non passano dal ramo delle lettere perché il primo `if` le cattura, anche quando l'indice è pari (6).

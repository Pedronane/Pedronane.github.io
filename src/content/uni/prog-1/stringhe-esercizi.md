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

**Esercizio 2.** Scrivi l'output esatto.

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
> Il ciclo conta le `'r'` (indici 1 e 4) e le `'a'` (indici 5 e 8): `n` vale 4. Esce quando `s[i]` è il terminatore, quindi `i` vale 9, la lunghezza. Poi `s[4] = '\0'` mette un terminatore al posto della seconda `r`: `%s` si ferma lì e stampa le celle 0-3.
>
> Output: `9 4 Prog` (verificato).

**Esercizio 3.** Scrivi l'output esatto.

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

**Esercizio 4.** Senza usare librerie, costruisci in `completo` la stringa `"Pietro Marchesi"` a partire da `char nome[] = "Pietro"` e `char cognome[] = "Marchesi"`, e stampala con la sua lunghezza.

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
> Stampa `Pietro Marchesi (15 caratteri)` (verificato). Controllo: $6 + 1 + 8 = 15$. L'ultima assegnazione `completo[i] = '\0'` è quella che si dimentica: senza, `completo` (array locale non inizializzato) non avrebbe terminatore e `%s` stamperebbe spazzatura.

**Esercizio 5.** Leggi due parole (al massimo 29 caratteri) e stampa se sono uguali o quale viene prima in ordine alfabetico, senza `strcmp`.

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

**Esercizio 6.** (Livello 30) Leggi una parola e stampa se è palindroma (si legge uguale nei due versi), senza copiarla in un altro array.

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

**Esercizio 7.** Vero o falso?

- a) `char s[5] = "ciao";` è corretto e `s` contiene una stringa.
- b) `char s[4] = "ciao";` contiene una stringa.
- c) Con `char nome[20];` la lettura corretta è `scanf("%s", &nome);`.
- d) `printf("%s", s)` stampa tutte le celle dell'array `s`.
- e) Dopo `char s[] = "abc";` l'istruzione `s = "xyz";` copia `"xyz"` in `s`.
- f) `'a'` e `"a"` occupano la stessa memoria.

> [!example]- Soluzione
> - a) **Vero**. 4 caratteri più `'\0'`: 5 celle, esatte.
> - b) **Falso**. Il C accetta l'inizializzazione (gcc 16 avvisa) ma scarta il terminatore: è un array di 4 `char` senza `'\0'`, che `%s` non sa dove fermare.
> - c) **Falso**. `nome` è già l'indirizzo della prima cella: si scrive `scanf("%19s", nome)`. Con `&nome` il valore numerico è lo stesso ma il tipo è "puntatore ad array di 20 `char`", e gcc con `-Wall` avvisa.
> - d) **Falso**. Stampa fino al primo `'\0'`, non fino alla fine dell'array.
> - e) **Falso**. Non compila: un array non si assegna. Si copia con un ciclo o con `strcpy`.
> - f) **Falso**. `'a'` è un carattere (un intero, 97); `"a"` è una stringa di due celle, `'a'` e `'\0'`.

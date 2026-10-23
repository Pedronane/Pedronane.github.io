---
title: Input e output di caratteri (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-27
lezioni: []
ordine: 7
---

Esercizi tipo esame di [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Per i tracing su un input: una riga di tabella per carattere letto, spazi e a capo compresi. Gli output sono verificati dando l'input con `printf '...' | ./a.out`.

**Esercizio 1.** Cosa stampa questo programma con input `HAL` (senza a capo finale)?

```c
#include <stdio.h>

int main(void)
{
    int c;

    while ((c = getchar()) != EOF) {
        putchar(c + 1);
    }
    return 0;
}
```

> [!example]- Soluzione
> Ogni carattere viene stampato spostato di uno nel codice ASCII: le lettere maiuscole sono consecutive.
>
> | `c` letto | codice | `c + 1` | stampa |
> | --- | --- | --- | --- |
> | `'H'` | 72 | 73 | `I` |
> | `'A'` | 65 | 66 | `B` |
> | `'L'` | 76 | 77 | `M` |
> | EOF | -1 | | si esce |
>
> Output: `IBM` (verificato). Se l'input finisse con `\n`, verrebbe stampato anche `'\n' + 1`, il carattere di codice 11 (tabulazione verticale), invisibile ma presente.

**Esercizio 2.** Scrivi un programma che conta le righe dell'input.

> [!example]- Soluzione
> Una riga finisce con `'\n'`: si contano quelli.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>     int righe = 0;
>
>     while ((c = getchar()) != EOF) {
>         if (c == '\n')
>             righe++;
>     }
>     printf("%d\n", righe);
>     return 0;
> }
> ```
> Con input `uno`, `due`, `tre` su tre righe stampa 3 (verificato). Un'ultima riga senza `\n` finale non viene contata.

**Esercizio 3.** Scrivi un programma che copia l'input trasformando le minuscole in maiuscole e lasciando invariati gli altri caratteri.

> [!example]- Soluzione
> Si riconosce un filtro: ciclo di lettura, un `if` sulla categoria, `putchar` sempre.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>
>     while ((c = getchar()) != EOF) {
>         if (c >= 'a' && c <= 'z')
>             c = c - 'a' + 'A';
>         putchar(c);
>     }
>     return 0;
> }
> ```
> `c - 'a'` è la posizione nell'alfabeto (0 per a), `+ 'A'` la porta sulle maiuscole. Con `Ciao, Mondo 42!` stampa `CIAO, MONDO 42!` (verificato).

**Esercizio 4.** Scrivi un programma che conta le cifre nell'input e ne stampa la somma.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>     int cifre = 0;
>     int somma = 0;
>
>     while ((c = getchar()) != EOF) {
>         if (c >= '0' && c <= '9') {
>             cifre++;
>             somma += c - '0';
>         }
>     }
>     printf("cifre=%d somma=%d\n", cifre, somma);
>     return 0;
> }
> ```
> Con `a1b22c 9` le cifre sono 1, 2, 2, 9: stampa `cifre=4 somma=14` (verificato). `somma += c` senza `- '0'` sommerebbe i codici ASCII: $49 + 50 + 50 + 57 = 206$.

**Esercizio 5.** SI o NO?

- a) `getchar` restituisce un `char`.
- b) In `while ((c = getchar()) != EOF)` si possono togliere le parentesi interne.
- c) `putchar(c)` stampa anche `'\n'` se `c` vale `'\n'`.
- d) `while (K--)` con `K = 3` esegue il corpo 3 volte.
- e) Dopo `while (K--)` con `K = 3`, `K` vale 0.
- f) `EOF` è un carattere che si trova alla fine di ogni file.
- g) `'7' - '0'` vale 7.
- h) Con input `ciao` seguito da a capo, il programma della slide 68 conta 4 caratteri.

> [!example]- Soluzione
> - a) NO, restituisce un `int`, per poter restituire anche EOF.
> - b) NO, `!=` lega più di **=**: `c` riceverebbe il risultato del confronto (0 o 1).
> - c) SI, l'a capo è un carattere come gli altri.
> - d) SI: testa 3, 2, 1 (veri), poi 0.
> - e) NO, vale -1: anche il test finale, quello falso, decrementa.
> - f) NO: è un valore intero (-1 con gcc) che `getchar` restituisce quando l'input è finito, non un carattere scritto nel file.
> - g) SI: le cifre sono consecutive in ASCII, $55 - 48 = 7$.
> - h) NO, 5: anche `\n` è un carattere.

**Esercizio 6.** Cosa stampa questo programma con input `ab3c12.xy9`?

```c
#include <stdio.h>

int main(void)
{
    int c;
    int n = 0;

    while ((c = getchar()) != EOF && c != '.') {
        if (c >= '0' && c <= '9')
            n = n * 10 + (c - '0');
        else
            putchar(c + 1);
    }
    printf("|%d\n", n);
    return 0;
}
```

> [!example]- Soluzione
> La condizione ha due uscite: fine input o punto. Le cifre costruiscono un numero, le altre lettere si stampano spostate di uno.
>
> | carattere | cifra? | effetto | `n` |
> | --- | --- | --- | --- |
> | `a` | no | stampa `b` | 0 |
> | `b` | no | stampa `c` | 0 |
> | `3` | sì | 0·10 + 3 | 3 |
> | `c` | no | stampa `d` | 3 |
> | `1` | sì | 3·10 + 1 | 31 |
> | `2` | sì | 31·10 + 2 | 312 |
> | `.` | | il ciclo si ferma | |
>
> `xy9` dopo il punto non viene letto. Output: `bcd|312` (verificato). `n * 10 + cifra` ricostruisce un numero dalle sue cifre lette da sinistra.

**Esercizio 7.** Il programma vorrebbe copiare l'input. Cosa stampa con input `abcdef` (senza a capo)? E con `abcde`?

```c
#include <stdio.h>

int main(void)
{
    int c;

    while ((c = getchar()) != EOF) {
        putchar(getchar());
    }
    putchar('\n');
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce l'errore dei due `getchar` per giro: la condizione ne consuma uno (in `c`, che poi non si usa) e il corpo ne consuma un altro, che è quello stampato.
>
> | giro | `getchar` nella condizione | `getchar` nel corpo | stampa |
> | --- | --- | --- | --- |
> | 1 | `a` | `b` | `b` |
> | 2 | `c` | `d` | `d` |
> | 3 | `e` | `f` | `f` |
> | 4 | EOF, si esce | | |
>
> Con `abcdef` stampa `bdf` e l'a capo (verificato). Con `abcde` al terzo giro la condizione legge `e` e il corpo trova la fine: `putchar(EOF)` stampa un byte di valore 255, spazzatura. Output: `bd`, un byte 255, a capo (verificato con `od`). Correzione: `putchar(c);`.

**Esercizio 8.** Scrivi un programma che copia l'input riducendo ogni sequenza di spazi a un solo spazio.

> [!example]- Soluzione
> Serve ricordare il carattere precedente. Si stampa `c` tranne quando è uno spazio e anche il precedente era uno spazio.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>     int prec = 'x';
>
>     while ((c = getchar()) != EOF) {
>         if (c != ' ' || prec != ' ')
>             putchar(c);
>         prec = c;
>     }
>     return 0;
> }
> ```
> `prec` parte da un carattere qualsiasi diverso dallo spazio, così il primo spazio si stampa. La condizione è De Morgan di "non (c è spazio e prec è spazio)". Con `a   b  c d` stampa `a b c d` (verificato).

**Esercizio 9.** Scrivi un programma che conta le parole dell'input, dove una parola è una sequenza di caratteri diversi da spazio, tab e a capo.

> [!example]- Soluzione
> Una variabile di stato `dentro` dice se si è dentro una parola. Una parola comincia quando si passa da fuori a dentro: si conta in quel momento, una volta sola.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>     int parole = 0;
>     int dentro = 0;
>
>     while ((c = getchar()) != EOF) {
>         if (c == ' ' || c == '\n' || c == '\t') {
>             dentro = 0;
>         } else if (!dentro) {
>             dentro = 1;
>             parole++;
>         }
>     }
>     printf("%d\n", parole);
>     return 0;
> }
> ```
> Con `  la  scala<tab>ha` a capo ` 7 gradini ` stampa 5 (verificato): gli spazi multipli non creano parole vuote.

**Esercizio 10.** Cosa stampa questo programma con input `la scala  ha 7 gradini` (con a capo finale)?

```c
#include <stdio.h>

int main(void)
{
    int c;
    int prec = ' ';

    while ((c = getchar()) != EOF) {
        if (prec == ' ' && c >= 'a' && c <= 'z')
            c = c - 'a' + 'A';
        putchar(c);
        prec = c;
    }
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un filtro con memoria: una minuscola diventa maiuscola se il carattere **precedente** è uno spazio. `prec` parte da spazio, quindi vale anche per la prima lettera.
>
> | `prec` | `c` | condizione | stampa |
> | --- | --- | --- | --- |
> | `' '` | `l` | vera | `L` |
> | `'L'` | `a` | falsa | `a` |
> | `'a'` | `' '` | falsa (non è lettera) | spazio |
> | `' '` | `s` | vera | `S` |
> | ... | `cala` | falsa | `cala` |
> | `'a'` | `' '` | falsa | spazio |
> | `' '` | `' '` | falsa | spazio |
> | `' '` | `h` | vera | `H` |
> | ... | `a`, spazio | falsa | `a` e spazio |
> | `' '` | `7` | falsa (non è minuscola) | `7` |
> | `'7'` | `' '` | falsa | spazio |
> | `' '` | `g` | vera | `G` |
> | ... | `radini`, `\n` | falsa | `radini` e a capo |
>
> Output: `La Scala  Ha 7 Gradini` (verificato). I due spazi restano due: il filtro tocca solo le lettere. Attenzione: `prec = c` salva il carattere **dopo** la trasformazione (`'L'` e non `'l'`), ma per la condizione conta solo se è uno spazio, quindi non cambia niente.

**Esercizio 11** (livello 30). Scrivi un programma che legge tutto l'input e stampa il numero della riga più lunga (contando da 1) e la sua lunghezza, senza contare il `\n`. A parità vince la prima.

> [!example]- Soluzione
> Si riconosce un massimo con sentinella, dove il "dato" è la lunghezza di una riga, che si conosce solo quando arriva `\n`. Quindi: un contatore `lung` per la riga corrente, che si confronta con il massimo e si azzera a ogni `\n`.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>     int lung = 0;
>     int max = 0;
>     int riga = 0;
>     int riga_max = 0;
>
>     while ((c = getchar()) != EOF) {
>         if (c == '\n') {
>             riga++;
>             if (lung > max) {
>                 max = lung;
>                 riga_max = riga;
>             }
>             lung = 0;
>         } else {
>             lung++;
>         }
>     }
>     printf("riga piu' lunga: %d (%d caratteri)\n", riga_max, max);
>     return 0;
> }
> ```
> Con input `ciao`, `la scala ha`, `sette` su tre righe: lunghezze 4, 11, 5. Stampa `riga piu' lunga: 2 (11 caratteri)` (verificato). Il `>` stretto fa vincere la prima a parità. Limite da dire all'esame: un'ultima riga senza `\n` finale non viene confrontata; si sistema ripetendo il controllo dopo il ciclo se `lung > 0`.

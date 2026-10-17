---
title: Switch (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-02
lezioni: []
ordine: 9
---

Esercizi tipo esame di [Switch](/uni/prog-1/switch/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i < 4; i++) {
        switch (i) {
        case 0:
            printf("a");
            /* fall through */
        case 1:
            printf("b");
            break;
        case 2:
            printf("c");
            /* fall through */
        default:
            printf("d");
        }
    }
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> | `i` | ingresso | stampa |
> | --- | --- | --- |
> | 0 | `case 0` | `a`, cade in `case 1`: `b`, `break` |
> | 1 | `case 1` | `b`, `break` |
> | 2 | `case 2` | `c`, cade in `default`: `d` |
> | 3 | `default` | `d` |
>
> Output: `abbcdd` (verificato). All'esame i commenti `/* fall through */` non ci saranno: il `break` mancante va visto da sé.

**Esercizio 2.** Scrivi un programma che legge un'espressione nella forma `a op b`, con `a` e `b` interi e `op` uno fra `+`, `-`, `*` (o `x`), `/`, e stampa il risultato. Divisione per zero e operatore sconosciuto vanno segnalati.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int a;
>     int b;
>     char op;
>
>     if (scanf("%d %c %d", &a, &op, &b) != 3) {
>         printf("input non valido\n");
>         return 1;
>     }
>     switch (op) {
>     case '+':
>         printf("%d\n", a + b);
>         break;
>     case '-':
>         printf("%d\n", a - b);
>         break;
>     case '*':
>     case 'x':
>         printf("%d\n", a * b);
>         break;
>     case '/':
>         if (b == 0) {
>             printf("divisione per zero\n");
>         }
>         else {
>             printf("%d\n", a / b);
>         }
>         break;
>     default:
>         printf("operatore sconosciuto\n");
>         break;
>     }
>     return 0;
> }
> ```
> `7 + 5` dà 12, `7 / 2` dà 3 (divisione intera), `7 / 0` dà `divisione per zero`, `6 x 3` dà 18, `7 % 2` dà `operatore sconosciuto` (verificati). Lo spazio prima di `%c` nel formato salta gli spazi: senza, `op` leggerebbe lo spazio dopo il 7. Il controllo `b == 0` è un `if` dentro un `case`: lo `switch` sceglie l'operatore, non sa confrontare `b`.

**Esercizio 3.** Riscrivi con una catena di `if-else` lo `switch` della slide 27 (quello di `Valore`), in modo che stampi esattamente le stesse cose per ogni input.

> [!example]- Soluzione
> Il caso 1 stampa due righe, quindi va trattato a parte:
> ```
> if (Valore == 0) {
>     printf("Zero\n");
> }
> else if (Valore == 1) {
>     printf("Uno\n");
>     printf("Piccolo\n");
> }
> else if (Valore == 2 || Valore == 3) {
>     printf("Piccolo\n");
> }
> else {
>     printf("Invalido\n");
> }
> ```
> 4 e 5 finiscono nell'`else` come tutti gli altri: è quello che fa lo `switch` originale.

**Esercizio 4.** Quali di questi frammenti sono errori di compilazione?

1. `switch (x) { case 1.5: ... }` con `x` di tipo `float`
2. `switch (c) { case 'a': case 'A': n++; break; }`
3. `switch (x) { case y: ... }` con `y` variabile `int`
4. `switch (x) { case 1: ... case 1: ... }`
5. `switch (x) { default: n++; }`

> [!example]- Soluzione
> 1. Errore: l'espressione dello `switch` e i `case` devono essere interi.
> 2. Corretto: due etichette sullo stesso blocco, conta la `a` minuscola e maiuscola.
> 3. Errore: un `case` vuole una costante, non una variabile.
> 4. Errore: valore duplicato in due `case`.
> 5. Corretto, anche se inutile: `default` da solo si esegue sempre.

**Esercizio 5.** Scrivi l'output esatto con input `ab1 x`.

```c
#include <stdio.h>

int main(void)
{
    int c;
    int n = 0;

    while ((c = getchar()) != EOF) {
        switch (c) {
        case 'a':
            n += 10;
            break;
        case 'b':
            n += 20;
            /* fall through */
        case '1':
            n += 1;
            break;
        case ' ':
            continue;
        default:
            n = n * 2;
        }
        printf("%d ", n);
    }
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> | carattere | cosa succede | `n` | stampa |
> | --- | --- | --- | --- |
> | `a` | $+10$ | 10 | `10` |
> | `b` | $+20$, cade in `'1'`: $+1$ | 31 | `31` |
> | `1` | $+1$ | 32 | `32` |
> | spazio | `continue`: salta il `printf` | 32 | niente |
> | `x` | `default`: $\cdot 2$ | 64 | `64` |
>
> Output: `10 31 32 64` seguito da a capo, con input senza invio finale (verificato). Il `continue` dentro lo `switch` agisce sul `while`. Con l'invio finale ci sarebbe un giro in più: `'\n'` va al `default` e stampa `128`.

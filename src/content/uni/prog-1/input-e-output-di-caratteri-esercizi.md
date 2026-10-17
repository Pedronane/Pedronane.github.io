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

**Esercizio 1.** Scrivi un programma che conta le righe dell'input.

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

**Esercizio 2.** Scrivi un programma che copia l'input trasformando le minuscole in maiuscole e lasciando invariati gli altri caratteri.

> [!example]- Soluzione
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

**Esercizio 3.** Scrivi un programma che conta le cifre nell'input e ne stampa la somma.

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
> Con `a1b22c 9` stampa `cifre=4 somma=14` (verificato). `somma += c` senza `- '0'` sommerebbe i codici ASCII: $49 + 50 + 50 + 57$.

**Esercizio 4.** Cosa stampa questo programma con input `ab3c12.xy9`?

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
> | carattere | cifra? | effetto | `n` |
> | --- | --- | --- | --- |
> | `a` | no | stampa `b` | 0 |
> | `b` | no | stampa `c` | 0 |
> | `3` | sì | | 3 |
> | `c` | no | stampa `d` | 3 |
> | `1` | sì | | 31 |
> | `2` | sì | | 312 |
> | `.` | | il ciclo si ferma | |
>
> `xy9` dopo il punto non viene letto. Output: `bcd|312` (verificato). `n * 10 + cifra` ricostruisce un numero dalle sue cifre lette da sinistra.

**Esercizio 5.** Scrivi un programma che conta le parole dell'input, dove una parola è una sequenza di caratteri diversi da spazio, tab e a capo.

> [!example]- Soluzione
> Una variabile di stato `dentro` dice se si è dentro una parola. Una parola comincia quando si passa da fuori a dentro.
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

**Esercizio 6.** Scrivi un programma che copia l'input riducendo ogni sequenza di spazi a un solo spazio.

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
> `prec` parte da un carattere qualsiasi diverso dallo spazio, così il primo spazio si stampa. Con `a   b  c d` stampa `a b c d` (verificato).

**Esercizio 7.** SI o NO?
1. `getchar` restituisce un `char`.
2. In `while ((c = getchar()) != EOF)` si possono togliere le parentesi interne.
3. `putchar(c)` stampa anche `'\n'` se `c` vale `'\n'`.
4. `while (K--)` con `K = 3` esegue il corpo 3 volte.
5. Dopo `while (K--)` con `K = 3`, `K` vale 0.

> [!example]- Soluzione
> 1. NO, restituisce un `int`, per poter restituire anche EOF.
> 2. NO, `c` riceverebbe il risultato del confronto (0 o 1).
> 3. SI, l'a capo è un carattere come gli altri.
> 4. SI: testa 3, 2, 1 (veri), poi 0.
> 5. NO, vale -1: anche il test finale, quello falso, decrementa.

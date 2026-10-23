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

Dal più facile al livello del 30. Per i tracing: per ogni valore scrivi l'etichetta da cui si entra, poi tutti i blocchi eseguiti fino al primo `break` o alla `}`. Negli esercizi d'esame i commenti `/* fall through */` non ci sono: il `break` mancante va visto da sé.

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char giudizio;
    int punti;

    for (giudizio = 'A'; giudizio <= 'F'; giudizio++) {
        switch (giudizio) {
        case 'A':
            punti = 30;
            break;
        case 'B':
            punti = 27;
            break;
        case 'C':
            punti = 24;
            break;
        case 'D':
            punti = 21;
            break;
        case 'E':
            punti = 18;
            break;
        default:
            punti = 0;
            break;
        }
        printf("%c=%d ", giudizio, punti);
    }
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce lo `switch` "pulito": ogni `case` ha il suo `break`, quindi funziona come una catena di `if-else`. Il `for` scorre i caratteri da `'A'` a `'F'`: un `char` è un intero, e `giudizio++` passa alla lettera dopo (codici ASCII consecutivi).
>
> | `giudizio` | ingresso | `punti` | stampa |
> | --- | --- | --- | --- |
> | `'A'` | `case 'A'` | 30 | `A=30 ` |
> | `'B'` | `case 'B'` | 27 | `B=27 ` |
> | `'C'` | `case 'C'` | 24 | `C=24 ` |
> | `'D'` | `case 'D'` | 21 | `D=21 ` |
> | `'E'` | `case 'E'` | 18 | `E=18 ` |
> | `'F'` | nessun `case`: `default` | 0 | `F=0 ` |
>
> Output: `A=30 B=27 C=24 D=21 E=18 F=0 ` con uno spazio prima dell'a capo (verificato).

**Esercizio 2.** Quali di questi frammenti sono errori di compilazione?

1. `switch (x) { case 1.5: ... }` con `x` di tipo `float`
2. `switch (c) { case 'a': case 'A': n++; break; }`
3. `switch (x) { case y: ... }` con `y` variabile `int`
4. `switch (x) { case 1: ... case 1: ... }`
5. `switch (x) { default: n++; }`

> [!example]- Soluzione
> 1. Errore: l'espressione dello `switch` e i `case` devono essere interi. gcc: `switch quantity not an integer` per la `x`, e `case label does not reduce to an integer constant` per `1.5`.
> 2. Corretto: due etichette sullo stesso blocco, conta la `a` minuscola e maiuscola.
> 3. Errore: un `case` vuole una costante, non una variabile (`case label does not reduce to an integer constant`).
> 4. Errore: valore duplicato in due `case` (`duplicate case value`).
> 5. Corretto, anche se inutile: `default` da solo si esegue sempre.
>
> Messaggi verificati con gcc.

**Esercizio 3.** Scrivi l'output esatto.

```
#include <stdio.h>

int main(void)
{
    int x;

    for (x = 1; x <= 7; x += 3) {
        switch (x) {
        case 1:
            printf("uno ");
        case 4:
            printf("quattro ");
            break;
        case 5:
            printf("cinque ");
        default:
            printf("altro ");
        }
        printf("| ");
    }
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Si riconoscono due `break` mancanti, dopo `uno` e dopo `cinque`. Il `for` dà a `x` i valori 1, 4, 7.
>
> | `x` | ingresso | blocchi eseguiti | stampa |
> | --- | --- | --- | --- |
> | 1 | `case 1` | `uno `, cade in `case 4`: `quattro `, `break` | `uno quattro ` |
> | 4 | `case 4` | `quattro `, `break` | `quattro ` |
> | 7 | nessun `case`: `default` | `altro `, poi la `}` | `altro ` |
>
> Dopo ogni `switch` il `printf("| ")`. Output: `uno quattro | quattro | altro | ` (verificato compilando a parte; gcc con `-Wextra` dà due volte `this statement may fall through`, ed è proprio l'indizio). Il `case 5` non viene mai raggiunto: 5 non è fra i valori di `x`.

**Esercizio 4.** Scrivi l'output esatto.

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
> Output: `abbcdd` (verificato).

**Esercizio 5.** Riscrivi con una catena di `if-else` lo `switch` della slide 27 (quello di `Valore`), in modo che stampi esattamente le stesse cose per ogni input.

> [!example]- Soluzione
> Prima il tracing di ogni valore, poi un ramo per ogni comportamento diverso. Il caso 1 stampa due righe, quindi va trattato a parte:
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
> 4 e 5 finiscono nell'`else` come tutti gli altri: è quello che fa lo `switch` originale. È la regola del Metodo: con un fall-through fra due gruppi, il blocco del secondo (`Piccolo`) si ripete in fondo al primo.

**Esercizio 6.** Quali di queste catene si possono riscrivere con uno `switch`? Riscrivi quella che si può.

- a) `if (c <mark> 's' || c </mark> 'S') printf("si\n"); else if (c <mark> 'n' || c </mark> 'N') printf("no\n"); else printf("?\n");`
- b) `if (x > 10) printf("grande\n"); else if (x > 0) printf("piccolo\n"); else printf("negativo\n");`
- c) `if (a <mark> 1) printf("uno\n"); else if (b </mark> 2) printf("due\n");`

> [!example]- Soluzione
> Si controllano le tre condizioni della slide 31: una sola espressione, intera, confrontata con valori singoli.
> - a) **Sì**: tutte le condizioni sono uguaglianze **==** sulla stessa variabile `c`, con costanti carattere.
> - b) **No**: `x > 10` e `x > 0` sono intervalli, non valori singoli.
> - c) **No**: la prima condizione guarda `a`, la seconda `b`, due espressioni diverse.
>
> La a) come `switch`, dentro un ciclo che legge una riga:
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>
>     while ((c = getchar()) != EOF && c != '\n') {
>         switch (c) {
>         case 's':
>         case 'S':
>             printf("si\n");
>             break;
>         case 'n':
>         case 'N':
>             printf("no\n");
>             break;
>         default:
>             printf("?\n");
>             break;
>         }
>     }
>     return 0;
> }
> ```
> Con input `sNx` stampa `si`, `no`, `?` (verificato). Ogni `||` è diventato due etichette sullo stesso blocco.

**Esercizio 7.** Scrivi l'output esatto con input `ab1 x`.

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

**Esercizio 8** (stile matricola). Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int matricola = 238517;
    int r = 0;
    int c;

    while (matricola > 0) {
        c = matricola % 10;
        matricola /= 10;
        switch (c % 3) {
        case 0:
            r += c;
            break;
        case 1:
            r -= 1;
            /* fall through */
        case 2:
            r *= 2;
        }
        printf("c=%d r=%d\n", c, r);
    }
    return 0;
}
```

> [!example]- Soluzione
> Il `while` stacca le cifre da destra: 7, 1, 5, 8, 3, 2. Lo `switch` guarda il resto della cifra diviso 3. Resto 1: toglie 1 e poi **cade** nel raddoppio. Resto 2: solo raddoppio. Resto 0: somma la cifra.
>
> | `c` | `c % 3` | ingresso | calcolo | `r` |
> | --- | --- | --- | --- | --- |
> | 7 | 1 | `case 1` | $0 - 1 = -1$, poi $-1 \cdot 2$ | -2 |
> | 1 | 1 | `case 1` | $-2 - 1 = -3$, poi $\cdot 2$ | -6 |
> | 5 | 2 | `case 2` | $-6 \cdot 2$ | -12 |
> | 8 | 2 | `case 2` | $-12 \cdot 2$ | -24 |
> | 3 | 0 | `case 0` | $-24 + 3$ | -21 |
> | 2 | 2 | `case 2` | $-21 \cdot 2$ | -42 |
>
> Output (verificato):
> ```
> c=7 r=-2
> c=1 r=-6
> c=5 r=-12
> c=8 r=-24
> c=3 r=-21
> c=2 r=-42
> ```
> All'esame rifallo con la tua matricola. Il ciclo finisce quando `matricola` diventa 0, dopo la sesta cifra.

**Esercizio 9** (livello 30). Scrivi l'output esatto. Attenzione a dove sta il `default`.

```c
#include <stdio.h>

int main(void)
{
    int i;
    int s = 0;

    for (i = 0; i < 6; i++) {
        switch (i % 4) {
        case 1:
            s += 1;
            /* fall through */
        default:
            s += 10;
            /* fall through */
        case 3:
            s += 100;
            break;
        case 0:
            s *= 2;
        }
        printf("%d ", s);
    }
    printf("\n");
    return 0;
}
```

> [!example]- Soluzione
> Il `default` sta **in mezzo**: si entra lì solo se nessun `case` corrisponde (qui con `i % 4` uguale a 2), ma chi entra da `case 1` ci **cade dentro**, e chi entra dal `default` cade in `case 3`. L'ordine scritto conta per la caduta, non per la scelta dell'etichetta.
>
> | `i` | `i % 4` | ingresso | blocchi | `s` |
> | --- | --- | --- | --- | --- |
> | 0 | 0 | `case 0` | `s *= 2`: $0 \cdot 2$ | 0 |
> | 1 | 1 | `case 1` | $+1$, $+10$, $+100$, `break` | 111 |
> | 2 | 2 | `default` | $+10$, $+100$, `break` | 221 |
> | 3 | 3 | `case 3` | $+100$, `break` | 321 |
> | 4 | 0 | `case 0` | $321 \cdot 2$ | 642 |
> | 5 | 1 | `case 1` | $+1$, $+10$, $+100$ | 753 |
>
> Output: `0 111 221 321 642 753 ` (verificato). Il `case 0` è l'ultimo e non ha `break`: non serve, dopo c'è la `}`.

**Esercizio 10** (livello 30). Scrivi l'output esatto con input `a3-x5#9` seguito da invio.

```c
#include <stdio.h>

int main(void)
{
    int c;
    int somma = 0;

    while ((c = getchar()) != EOF && c != '\n') {
        switch (c) {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            somma += c - '0';
            break;
        case '-':
            somma = -somma;
            break;
        case '#':
            printf("stop\n");
            c = '\n';
            break;
        default:
            continue;
        }
        if (c == '\n') {
            break;
        }
        printf("%c -> %d\n", c, somma);
    }
    printf("somma=%d\n", somma);
    return 0;
}
```

> [!example]- Soluzione
> Si riconoscono tre idee: `c - '0'` trasforma il carattere cifra nel suo valore (`'3' - '0'` vale 3, perché i codici delle cifre sono consecutivi); il `continue` del `default` salta la stampa e passa al carattere dopo; il `break` dentro lo `switch` **non** ferma il `while`, quindi per fermarsi al `#` il programma mette `c = '\n'` e poi usa un secondo `break`, fuori dallo `switch`, che esce dal ciclo.
>
> | carattere | ingresso | effetto | `somma` | stampa |
> | --- | --- | --- | --- | --- |
> | `a` | `default` | `continue` | 0 | niente |
> | `3` | cifre | $+3$ | 3 | `3 -> 3` |
> | `-` | `'-'` | cambia segno | -3 | `- -> -3` |
> | `x` | `default` | `continue` | -3 | niente |
> | `5` | cifre | $+5$ | 2 | `5 -> 2` |
> | `#` | `'#'` | stampa `stop`, `c = '\n'`; poi `if (c == '\n') break;` esce dal `while` | 2 | `stop` |
>
> Il `9` e l'invio non vengono letti. Output (verificato):
> ```
> 3 -> 3
> - -> -3
> 5 -> 2
> stop
> somma=2
> ```

**Esercizio 11** (prova al calcolatore). Scrivi un programma che legge un'espressione nella forma `a op b`, con `a` e `b` interi e `op` uno fra `+`, `-`, `*` (o `x`), `/`, e stampa il risultato. Divisione per zero e operatore sconosciuto vanno segnalati.

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

**Esercizio 12** (prova al calcolatore, livello 30). Scrivi un programma che legge una riga con un numero romano (lettere `I V X L C D M`) e stampa il suo valore. Regola: si sommano i valori delle lettere, ma una lettera più piccola **prima** di una più grande si sottrae (`IV` = 4, `XC` = 90). Un carattere non valido va segnalato.

> [!example]- Soluzione
> Lo `switch` traduce ogni lettera nel suo valore, un `case` per lettera e `default` per l'errore. Per la sottrazione: sommo sempre, e se la lettera corrente vale più della precedente vuol dire che la precedente andava sottratta. L'avevo sommata una volta, quindi tolgo il doppio.
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int c;
>     int valore;
>     int precedente = 0;
>     int totale = 0;
>
>     while ((c = getchar()) != EOF && c != '\n') {
>         switch (c) {
>         case 'I':
>             valore = 1;
>             break;
>         case 'V':
>             valore = 5;
>             break;
>         case 'X':
>             valore = 10;
>             break;
>         case 'L':
>             valore = 50;
>             break;
>         case 'C':
>             valore = 100;
>             break;
>         case 'D':
>             valore = 500;
>             break;
>         case 'M':
>             valore = 1000;
>             break;
>         default:
>             printf("carattere non valido: %c\n", c);
>             return 1;
>         }
>         totale += valore;
>         if (valore > precedente) {
>             totale -= 2 * precedente;
>         }
>         precedente = valore;
>     }
>     printf("%d\n", totale);
>     return 0;
> }
> ```
> Tracing con `XIV`:
>
> | lettera | `valore` | `totale += valore` | `valore > precedente`? | `totale` |
> | --- | --- | --- | --- | --- |
> | `X` | 10 | 10 | $10 > 0$ sì, $-2 \cdot 0$ | 10 |
> | `I` | 1 | 11 | $1 > 10$ no | 11 |
> | `V` | 5 | 16 | $5 > 1$ sì, $-2 \cdot 1$ | 14 |
>
> Stampa 14. Provato anche: `XVI` dà 16, `MCMXCIV` dà 1994, `IX` dà 9, `LVIII` dà 58, `XA` dà `carattere non valido: A` (verificati). Nel `default` c'è `return 1`, che esce da tutto il programma: è l'unico modo, oltre a una variabile di controllo, di non proseguire il ciclo da dentro lo `switch`.

**Esercizio 13.** Vero o falso?

- a) In uno `switch` il `default` deve essere l'ultima etichetta.
- b) Senza `break`, dopo il blocco del `case` scelto si eseguono anche i blocchi dei `case` successivi.
- c) `switch` può lavorare su un `char`.
- d) Un `break` dentro uno `switch` dentro un `for` termina il `for`.
- e) `continue` dentro uno `switch` dentro un `while` passa al giro successivo del `while`.
- f) `case 1 ... 5:` è C standard.
- g) Ogni `switch` si può riscrivere con `if-else`.
- h) Ogni catena di `if-else` si può riscrivere con uno `switch`.

> [!example]- Soluzione
> - a) **Falso**. Può stare ovunque; si sceglie solo se nessun `case` corrisponde, ma chi lo precede senza `break` ci cade dentro (esercizio 9).
> - b) **Vero**. È il fall-through: i `case` sono etichette, non confini.
> - c) **Vero**. Un `char` è un tipo intero, e `'a'` è una costante intera.
> - d) **Falso**. Esce solo dallo `switch`.
> - e) **Vero**. `continue` non si applica allo `switch`, quindi agisce sul ciclo che lo contiene.
> - f) **Falso**. È un'estensione di gcc; in C standard si elencano i valori.
> - g) **Vero**. Böhm-Jacopini: lo `switch` è comodità, non potenza.
> - h) **Falso**. Solo se le condizioni sono uguaglianze **==** sulla stessa espressione intera con costanti.

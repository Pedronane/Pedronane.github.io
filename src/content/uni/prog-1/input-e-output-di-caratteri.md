---
title: Input e output di caratteri
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-09-27
lezioni:
  - set, giorno?
ordine: 7
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a settembre, deck 3.2: <span class="src">slide 58-68</span>. Usa il `while` di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/) e i codici ASCII di [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cosa fanno `getchar` e `putchar`, cos'è `EOF`, perché la variabile che riceve `getchar` è `int` e non `char`, perché servono le parentesi in `(c = getchar()) != EOF`.
> - **Saper fare**: scrivere il ciclo "leggi tutto fino a EOF"; contare caratteri, righe, cifre; trasformare caratteri con l'aritmetica ASCII; tracciare cosa stampa un programma dato un input.
> - **Dove esce**: nella teorica come tracing su un input dato e nelle batterie SI/NO su `.eof()` e file (vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore si leggono stringhe da tastiera, e il problema del buffer della tastiera è lo stesso.

## Definizioni

**Standard input e output a caratteri** (<span class="src">slide 59</span>). Standard input e standard output si possono vedere come sequenze di caratteri, uno dopo l'altro. Fra la tastiera e il programma c'è un **buffer** gestito dal sistema operativo: i caratteri digitati si accumulano lì, e di solito arrivano al programma solo quando premi Invio. Per questo un programma che legge un carattere alla volta sembra "aspettare" la fine della riga.

**`getchar()`** (<span class="src">slide 60</span>). Legge il **prossimo** carattere dallo standard input e lo restituisce. Ogni chiamata consuma un carattere: un carattere letto non si rilegge.

```c
c = getchar();
```

**`putchar(c)`**. Stampa il carattere `c` sullo standard output.

```c
putchar(c);
```

Entrambe sono in `stdio.h`. Anche l'a capo `'\n'` e lo spazio sono caratteri: `getchar` li restituisce come gli altri.

**`EOF`** (<span class="src">slide 64</span>). Costante intera definita in `stdio.h`, che `getchar` restituisce quando l'input è **finito** (end of file). Vale -1 con gcc, ma il valore non conta: si confronta sempre con il nome `EOF`. Da tastiera la fine dell'input si segnala con Ctrl+D su Linux e macOS (a inizio riga), con Ctrl+Z e Invio su Windows, quindi anche in Dev-C++. Se l'input arriva da un file o da una pipe, EOF arriva da solo alla fine.

**Perché `int c` e non `char c`** (slide 60). `getchar` deve poter restituire **tutti** i 256 valori di un byte più un valore in più, `EOF`, che non è nessun carattere. Un `char` ha solo 256 valori: EOF finirebbe confuso con un carattere vero (con `char` senza segno il confronto con -1 non è mai vero e il ciclo non termina; con `char` con segno il byte 255 viene scambiato per la fine). La slide lo dice così: `getchar` restituisce un `int` e `putchar` riceve un `int`. Il commento del prof nel codice: `c` è "intero ma ANCHE un carattere".

## Concetti

### Il ciclo di lettura fino a EOF

È il pattern della sentinella di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/), con EOF come sentinella:

```
leggi un carattere
while (non è fine file) {
    elabora il carattere
    leggi il prossimo carattere
}
```

Forma compatta (<span class="src">slide 65-66</span>): lettura e controllo nella stessa condizione.

```c
while ((c = getchar()) != EOF) {
    putchar(c);
}
```

La condizione si valuta in due passi (slide 66):
1. si valuta l'assegnazione `c = getchar()`: legge un carattere, lo mette in `c`, e l'espressione vale il carattere letto;
2. si confronta quel valore con `EOF`.

Funziona perché un'assegnazione è un'espressione con un valore, visto in [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/).

**Le parentesi sono obbligatorie.** `!=` ha precedenza più alta di **=**. Senza parentesi, `c = getchar() != EOF` si legge `c = (getchar() != EOF)`: `c` riceve 1 finché l'input non è finito, e il programma stampa il carattere di codice 1 invece di quello letto. Provato con input `abc`, facendo stampare `c + '0'`: esce `111`.

## Metodo

**Programma che elabora l'input carattere per carattere.**
1. `int c;` e le variabili di conteggio inizializzate a 0.
2. `while ((c = getchar()) != EOF) { ... }`.
3. Nel corpo, un `if` per ogni categoria di carattere: `c == '\n'`, `c >= '0' && c <= '9'`, `c >= 'a' && c <= 'z'`.
4. Dopo il ciclo, stampa i risultati.

**Tracciare su un input dato.** Scrivi l'input carattere per carattere, compresi spazi e `\n`, e fai una riga di tabella per carattere.

## Esempi svolti a lezione

**Copia dei primi K caratteri** (<span class="src">slide 62</span>).

```c
#include <stdio.h>

int main(void)
{
    int K = 5;
    int c;

    while (K--) {
        c = getchar();
        putchar(c);
    }
    return 0;
}
```

`while (K--)` gira esattamente 5 volte: testa 5, 4, 3, 2, 1 (veri) e poi 0 (falso), e all'uscita `K` vale -1. Con input `ciao mondo` stampa `ciao ` (cinque caratteri, lo spazio compreso).

Il programma non controlla EOF. Se l'input ha meno di 5 caratteri, dopo la fine `getchar` restituisce EOF e `putchar(EOF)` stampa un byte spazzatura (con input `ab` escono `a`, `b` e tre byte di valore 255: verificato con `od`). La correzione è uscire anche a fine input: `while (K-- && (c = getchar()) != EOF) putchar(c);`.

**Copia dell'input sull'output** (<span class="src">slide 63-64</span>). Pseudocodice della slide 63: leggi un carattere; finché non è fine file, stampa il carattere appena letto e leggi il prossimo.

```c
#include <stdio.h>

int main(void)
{
    int c;

    c = getchar();
    while (c != EOF) {
        putchar(c);
        c = getchar();
    }
    printf("Fine \n");
    return 0;
}
```

Con input `ciao` a capo `mondo` a capo stampa le stesse due righe e poi `Fine `. Gli a capo passano come caratteri normali.

**Versione aggiornata** (<span class="src">slide 65</span>), con `getchar` nella condizione. Stesso output:

```c
#include <stdio.h>

int main(void)
{
    int c;

    while ((c = getchar()) != EOF) {
        putchar(c);
    }
    printf("Fine \n");
    return 0;
}
```

**Contare i caratteri** (<span class="src">slide 67-68</span>). Pseudocodice: leggi un carattere alla volta; finché non è fine file aggiorna il contatore e leggi il prossimo; stampa il numero.

```c
#include <stdio.h>

int main(void)
{
    int c;
    int nc = 0;

    while ((c = getchar()) != EOF) {
        ++nc;
        putchar(c);
    }
    printf("\nNumero Caratteri=%d\n", nc);
    return 0;
}
```

Con input `ciao` a capo `mondo` a capo stampa le due righe, una riga vuota e `Numero Caratteri=11`: 4 + 5 lettere più i due `\n`. Con input vuoto stampa `Numero Caratteri=0`. `++nc` e `nc++` qui sono uguali, perché il valore dell'espressione non si usa.

## Esercizi tipo esame

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

## Errori tipici

- `char c;` per il risultato di `getchar`: il confronto con EOF può non funzionare.
- Dimenticare le parentesi: `c = getchar() != EOF`.
- Chiamare `getchar()` due volte nello stesso giro (una nella condizione e una nel corpo): ogni chiamata consuma un carattere, quindi metà dei caratteri si perde.
- Dimenticare che `'\n'` è un carattere: un programma che conta i caratteri di `ciao` a capo ne conta 5.
- Confrontare con `'EOF'` o con `"EOF"`: EOF è una costante intera, si scrive senza apici.
- Aspettarsi che il programma reagisca a ogni tasto: il buffer del sistema operativo passa i caratteri a riga completata.

## Domande

- Cosa fanno `getchar()` e `putchar(c)`?

- Cos'è `EOF`, dove è definito e come si genera da tastiera?

- Perché la variabile che riceve il risultato di `getchar` va dichiarata `int`?

- In che ordine si valuta `(c = getchar()) != EOF`?

- Cosa succede se si scrive `c = getchar() != EOF` senza parentesi?

- Scrivi il ciclo che copia tutto lo standard input sullo standard output.

- Quanti caratteri conta il programma della slide 68 con input `ciao` seguito da a capo?

- Con `K = 5`, quante volte gira `while (K--)` e quanto vale `K` alla fine?

- Come si trasforma una minuscola in maiuscola usando i codici ASCII?

- Cos'è il buffer dello standard input e che effetto ha su un programma che usa `getchar`?

---
title: Switch
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-02
lezioni: []
ordine: 9
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione fra settembre e ottobre, deck 3.3: <span class="src">slide 16-31</span>. Prima: [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/), che copre anche il resto del deck (`break` e `continue` nei cicli, Böhm-Jacopini). Base: [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/).

> [!abstract] Per l'esame
> - **Saper enunciare**: sintassi dello `switch`, come si esegue, a cosa serve `break`, cosa succede senza (fall-through), quando si può usare uno `switch` al posto di una catena di `if-else` e quando no.
> - **Saper fare**: tracciare uno `switch` con `break` mancanti e dire l'output esatto per un valore dato; raggruppare più `case` sullo stesso blocco; contare categorie di caratteri con `switch` dentro un ciclo di `getchar`; riscrivere uno `switch` come catena di `if-else`.
> - **Dove esce**: nella teorica come tracing, quasi sempre con un `break` dimenticato apposta. Nella prova al calcolatore per i menu e per smistare un carattere in categorie.

```
switch (espressione intera)
   |   si valuta una volta
   v
confronto con case v1, v2, ...   il primo uguale è il punto di ingresso
   |   nessuno uguale: default, se c'è; altrimenti niente
   v
esegue da lì in giù               anche i blocchi dei case dopo (fall-through)
   |
break                             esce dallo switch
```

## Definizioni

**`switch`** (<span class="src">slide 16</span>). Struttura di **selezione multipla**: sceglie fra più strade in base al valore di un'espressione. Può sostituire una catena di `if-else`. Il prof dice che non è necessaria (tutto si fa con `if-else`, vedi Böhm-Jacopini in [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/)) ma comoda in certe situazioni.

**Sintassi** (<span class="src">slide 17</span>).

```
switch (<espressione intera>) {
    case v1: { blocco istruzioni }
    case v2: { blocco istruzioni }
    ...
    default: { blocco istruzioni }
}
```

- L'espressione deve avere valore **intero** (tipo integral, slide 31): `int`, ma anche `char`, che in C è un piccolo intero. Non `float`, non stringhe.
- `v1`, `v2`, … sono **costanti** intere: `3`, `'a'`, `'\n'`. Non variabili e non intervalli.
- Ogni valore compare in **un solo** `case`.
- `default` è **opzionale**: si esegue quando nessun `case` corrisponde. Se manca e nessun `case` corrisponde, lo `switch` non fa niente.

**Esecuzione** (<span class="src">slide 18-20</span>). Si valuta l'espressione, poi la si confronta con `v1`, poi con `v2`, e così via. Al primo `case` uguale **si entra**, e da lì si eseguono il blocco di `v1`, **poi quello di `v2`**, e tutti i successivi fino alla fine dello `switch`. I `case` sono solo **etichette** di ingresso, non confini. Questo comportamento si chiama **fall-through** (caduta).

**`break` nello `switch`** (<span class="src">slide 21</span>). Per eseguire solo il blocco del proprio `case`, lo si chiude con `break`, che restituisce il controllo all'istruzione dopo lo `switch`. Il `break` è opzionale: toglierlo è il modo di far proseguire l'esecuzione nel blocco dopo.

```
switch (<espressione intera>) {
    case v1: { blocco istruzioni } break;
    case v2: { blocco istruzioni } break;
    ...
    default: { blocco istruzioni } break;
}
```

Il `break` dopo `default`, se `default` è l'ultimo, non cambia niente; si mette per abitudine, così aggiungere un `case` dopo non introduce una caduta.

**Differenze con l'`if-else`** (<span class="src">slide 31</span>). Lo `switch` si usa solo quando:
- tutte le scelte dipendono dal valore di **una sola** espressione, valutata una volta;
- il valore è di tipo intero;
- ogni scelta corrisponde a **valori singoli**, e `default` raccoglie tutti gli altri.

Condizioni come $x > 10$, $a < b$ o "fra 18 e 30" non si scrivono con un `case`: servono gli `if`.

## Concetti

### Flowchart con e senza `break`

(<span class="src">slide 22-23</span>) Con il `break` ogni blocco, finito, va diretto all'uscita: è una catena di `if-else if`. Senza il `break` dopo il blocco 1 (la freccia rossa "tolto break" della slide 23), chi entra da `val1` esegue il blocco 1 e poi **anche** il blocco 2, senza rifare il confronto con `val2`.

```
con break                         senza break dopo il blocco 1
exp==val1 ? -> blocco 1 -> fine   exp==val1 ? -> blocco 1 -> blocco 2 -> fine
exp==val2 ? -> blocco 2 -> fine   exp==val2 ? -------------> blocco 2 -> fine
...                               ...
default     -> blocco d -> fine   default     -> blocco d -> fine
```

### Più valori sullo stesso blocco

Il fall-through serve: `case` vuoti scritti uno sotto l'altro portano tutti allo stesso blocco.

```
case 3:
case 4:
case 5:
    printf("Valore positivo piccolo");
    break;
```

Si entra da 3, 4 o 5 e si arriva comunque al `printf`. È il modo di esprimere "3 o 4 o 5", visto che un `case` non accetta intervalli. Un `case` vuoto non dà warning; un `case` che **fa qualcosa** e poi cade nel successivo sì (`-Wimplicit-fallthrough`, attivo con `-Wextra`). Quando la caduta è voluta si scrive il commento `/* fall through */` prima del `case` successivo: gcc lo riconosce e chi legge capisce che non è una dimenticanza.

### `switch` dentro un ciclo

`break` dentro uno `switch` esce dallo `switch`, **non** dal ciclo che lo contiene: il ciclo va avanti con il giro successivo. Per uscire dal ciclo da dentro uno `switch` serve una variabile di controllo nella condizione del ciclo. `continue` invece, anche se scritto dentro lo `switch`, agisce sul ciclo.

## Metodo

**Tracciare uno `switch`.**
1. Calcola il valore dell'espressione.
2. Scorri i `case` dall'alto e trova quello uguale. Se non c'è, vai a `default`; se non c'è nemmeno quello, lo `switch` non fa niente.
3. Da lì esegui **tutto** verso il basso, ignorando le etichette `case` che incontri.
4. Fermati al primo `break` o alla `}` di chiusura.

**Scrivere uno `switch`.**
1. Controlla che la scelta dipenda da un solo valore intero o carattere. Se ci sono intervalli larghi o confronti, usa gli `if`.
2. Un `case` per valore, con i valori dello stesso gruppo uno sotto l'altro.
3. `break` alla fine di **ogni** gruppo, `default` per tutto il resto, anche solo per segnalare un input non valido.

**Da `switch` a `if-else`.** Ogni gruppo di `case` diventa una condizione con **||**: `case 3: case 4: case 5:` diventa `if (x <mark> 3 || x </mark> 4 || x == 5)`, `default` diventa l'`else` finale. Con un fall-through fra due gruppi il blocco del primo va ripetuto in testa al secondo.

## Esempi svolti a lezione

### Lo `switch` su `numero`

(<span class="src">slide 24-26</span>) La slide mostra lo `switch` su una variabile intera `numero` (l'espressione è il solo identificatore) e fa due domande. Sulla slide `printf(”Invalido")` apre la stringa con una virgoletta tipografica: non compila. Versione completa e corretta, con `\n` in ogni stampa:

```c
#include <stdio.h>

int main(void)
{
    int numero;

    if (scanf("%d", &numero) != 1) {
        return 1;
    }
    switch (numero) {
    case 0:
        printf("Nessuno\n");
        break;
    case 1:
        printf("Uno\n");
        break;
    case 2:
        printf("Due\n");
        break;
    case 3:
    case 4:
    case 5:
        printf("Valore positivo piccolo\n");
        break;
    default:
        printf("Invalido\n");
        break;
    }
    return 0;
}
```

| `numero` | output |
| --- | --- |
| 0 | `Nessuno` |
| 1 | `Uno` |
| 3, 4, 5 | `Valore positivo piccolo` |
| 6 | `Invalido` |
| -1 | `Invalido` |

(verificati)

**Q1: cosa succede se `numero` vale 3?** Si entra da `case 3:`, che è vuoto, si cade in `case 4:` e `case 5:`, anch'essi vuoti, e si arriva al `printf`: stampa `Valore positivo piccolo`, poi il `break` esce.

**Q2: e se vale -1?** Nessun `case` corrisponde: si esegue `default` e stampa `Invalido`. Lo stesso per 6 o per 1000.

### Lettura e categorizzazione di un numero

(<span class="src">slide 27</span>) Il programma della slide legge un "numero piccolo intero positivo" e lo classifica. I commenti della slide dicono: 0 dà "Zero", 1 dà "Uno", da 1 a 3 "piccolo", 4, 5 e oltre "grande". Il codice **non fa questo**, ed è un ottimo esercizio di tracing. Codice della slide, con il controllo di `scanf` e il commento `/* fall through */` che rende esplicita la caduta (senza, gcc con `-Wextra` avvisa `this statement may fall through`):

```c
#include <stdio.h>

int main(void)
{
    int Valore;

    printf("Inserisci numero piccolo intero positivo\n");
    if (scanf("%d", &Valore) != 1) {
        return 1;
    }
    switch (Valore) {
    case 0: printf("Zero\n"); break;
    case 1: printf("Uno\n");
        /* fall through */
    case 2:
    case 3: printf("Piccolo\n"); break;
    case 4:
    case 5:
    default: printf("Invalido\n");
    }
    return 0;
}
```

Cosa stampa davvero, dopo la richiesta (verificato):

| `Valore` | output | perché |
| --- | --- | --- |
| 0 | `Zero` | `break` subito |
| 1 | `Uno` poi `Piccolo` | `case 1` non ha `break`: cade nel 2, nel 3, e si ferma al `break` del 3 |
| 2, 3 | `Piccolo` | |
| 4, 5 | `Invalido` | `case 4` e `case 5` sono vuoti e cadono nel `default` |
| 9, -1 | `Invalido` | nessun `case`: `default` |

**Le incongruenze della slide**, da segnalare all'esame se chiedono "trova l'errore":
- per 1 stampa **due** righe, perché manca il `break` dopo `printf("Uno\n")`;
- il commento promette "grande" per 4, 5 e oltre, ma non c'è nessun `printf("Grande")`: i `case 4` e `case 5` vuoti portano al `default`, che stampa "Invalido";
- `case 4:` e `case 5:` prima del `default` sono inutili: senza di loro 4 e 5 andrebbero comunque al `default`;
- il commento su `case 2:` ("corpo istruzioni vuote: uso ; è ridondante ma permesso") si riferisce al fatto che un `case` può non avere istruzioni.

### Conteggio di cifre, spazi e altri caratteri

(<span class="src">slide 28-30</span>) Il testo: dalla sequenza di caratteri in standard input, terminata da EOF, contare
- `n02`: cifre 0, 1, 2 (gravi insufficienze);
- `n35`: cifre 3, 4, 5 (insufficienze);
- `n69`: cifre 6, 7, 8, 9 (sufficienze);
- `ns`: spazi, cioè `' '`, `'\t'`, `'\n'`;
- `no`: tutto il resto.

La slide 29 suggerisce di partire dal ciclo di copia con `getchar` di [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/) e aggiungere i contatori e lo `switch`. Soluzione della slide 30, con una dichiarazione per riga (nella soluzione il contatore degli spazi si chiama `nwhite` e quello degli altri `nother`, e c'è una `int i` mai usata):

```c
#include <stdio.h>

int main(void)
{
    int c;
    int nwhite = 0;
    int nother = 0;
    int n02 = 0;
    int n35 = 0;
    int n69 = 0;

    while ((c = getchar()) != EOF) {
        switch (c) {
        case '0': case '1': case '2':
            n02++;
            break;
        case '3': case '4': case '5':
            n35++;
            break;
        case '6': case '7': case '8': case '9':
            n69++;
            break;
        case ' ': case '\t': case '\n':
            nwhite++;
            break;
        default:
            nother++;
            break;
        }
    }
    printf("\n---------------\n");
    printf("Gravi Insufficienze=%d\n", n02);
    printf("Insufficienze=%d\n", n35);
    printf("Sufficienze=%d\n", n69);
    printf("white space=%d\n", nwhite);
    printf("other=%d\n", nother);
    return 0;
}
```

Con l'input della slide, `02a 3A` seguito subito da EOF (nessun invio dopo la `A`):

| carattere | `case` | contatore |
| --- | --- | --- |
| `0` | `'0'` | `n02` = 1 |
| `2` | `'2'` | `n02` = 2 |
| `a` | `default` | `nother` = 1 |
| spazio | `' '` | `nwhite` = 1 |
| `3` | `'3'` | `n35` = 1 |
| `A` | `default` | `nother` = 2 |

Output (verificato):

```

---------------
Gravi Insufficienze=2
Insufficienze=1
Sufficienze=0
white space=1
other=2
```

Corrisponde ai valori attesi della slide 28 (`n02=2`, `n35=1`, `n69=0`, `ns=1`, `no=2`). Se l'input si scrive da tastiera e si preme invio prima di EOF, l'a capo è un carattere in più e `white space` diventa 2.

Perché funziona: `c` è un `int` ma contiene il codice ASCII del carattere, e `'0'`, `'\t'` sono costanti intere (48, 9). Lo `switch` confronta numeri. I `case` sullo stesso rigo sono la stessa cosa dei `case` uno sotto l'altro. Il `break` qui esce solo dallo `switch`: il `while` prosegue con il carattere successivo.

## Esercizi tipo esame

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

## Errori tipici

- Dimenticare il `break`: l'esecuzione cade nel `case` successivo (il caso 1 della slide 27).
- Pensare che `case 4: case 5:` vuoti prima del `default` facciano qualcosa di diverso dal `default`.
- Usare uno `switch` su un `float`, su una stringa o con un `case` variabile: non compila.
- Cercare di scrivere un intervallo in un `case` (`case 1..5`, `case x > 3`): non esiste in C standard, si elencano i valori o si usa un `if`.
- Scrivere `case 1:` quando si legge un carattere: il carattere `'1'` vale 49, non 1.
- Credere che `break` dentro uno `switch` dentro un ciclo esca dal ciclo: esce solo dallo `switch`.
- Virgolette tipografiche copiate dalle slide (`”Invalido"`): non sono `"` e il programma non compila.

## Domande

- Di che tipo deve essere l'espressione di uno `switch`? E i valori dei `case`?

- Come si esegue uno `switch`? Cosa succede dopo il blocco del `case` scelto, se manca il `break`?

- Cosa fa `default`, ed è obbligatorio?

- Come si fa a eseguire lo stesso blocco per i valori 3, 4 e 5?

- Nell'esempio della slide 24, cosa stampa lo `switch` se `numero` vale 3? E se vale -1?

- Cosa stampa lo `switch` della slide 27 con `Valore` uguale a 1? E con 4?

- In quali casi uno `switch` non può sostituire una catena di `if-else`?

- Un `break` dentro uno `switch` dentro un `while`: da cosa esce?

- Perché nello `switch` sui caratteri letti con `getchar` si scrive `case '1':` e non `case 1:`?

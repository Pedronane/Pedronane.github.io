---
title: Algebra di Boole (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-27
lezioni: []
ordine: 4
---

Esercizi tipo esame di [Algebra di Boole](/uni/prog-1/algebra-di-boole/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** Completa la tavola di verità di `(A OR B) AND C` e di' quando è vera.

> [!example]- Soluzione
> Tre variabili, quindi 8 righe in ordine binario. Per precedenza la parentesi si fa prima: colonna `A OR B`, poi l'AND con C.
>
> | A | B | C | A OR B | (A OR B) AND C |
> | --- | --- | --- | --- | --- |
> | 0 | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 0 | 0 |
> | 0 | 1 | 0 | 1 | 0 |
> | 0 | 1 | 1 | 1 | 1 |
> | 1 | 0 | 0 | 1 | 0 |
> | 1 | 0 | 1 | 1 | 1 |
> | 1 | 1 | 0 | 1 | 0 |
> | 1 | 1 | 1 | 1 | 1 |
>
> È vera quando C è vera e almeno una fra A e B è vera: righe 011, 101, 111. Controllo: l'AND esterno con C azzera tutte le righe con $C = 0$, e infatti la prima, la terza, la quinta e la settima riga valgono 0.

**Esercizio 2.** Dimostra con la tavola che `NOT (A AND B)` è equivalente a `NOT A OR NOT B`.

> [!example]- Soluzione
> | A | B | A AND B | NOT (A AND B) | NOT A | NOT B | NOT A OR NOT B |
> | --- | --- | --- | --- | --- | --- | --- |
> | 0 | 0 | 0 | 1 | 1 | 1 | 1 |
> | 0 | 1 | 0 | 1 | 1 | 0 | 1 |
> | 1 | 0 | 0 | 1 | 0 | 1 | 1 |
> | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
>
> La quarta e l'ultima colonna coincidono in tutte le righe: sono equivalenti (è De Morgan).

**Esercizio 3.** `NOT (A AND B)` è equivalente a `NOT A AND NOT B`?

> [!example]- Soluzione
> Si riconosce il tranello: è De Morgan **senza** lo scambio di AND in OR. Per dire di no basta una riga.
>
> | A | B | NOT (A AND B) | NOT A AND NOT B |
> | --- | --- | --- | --- |
> | 0 | 0 | 1 | 1 |
> | 0 | 1 | 1 | 0 |
> | 1 | 0 | 1 | 0 |
> | 1 | 1 | 0 | 0 |
>
> **No.** Nella riga $A = 1$, $B = 0$: `NOT (1 AND 0)` è `NOT 0`, cioè 1, mentre `NOT 1 AND NOT 0` è `0 AND 1`, cioè 0. Differiscono anche in 01. A parole: "non entrambi" è diverso da "nessuno dei due".

**Esercizio 4.** Dimostra che `A ⇒ B` è equivalente a `NOT A OR B`.

> [!example]- Soluzione
> | A | B | A ⇒ B | NOT A | NOT A OR B |
> | --- | --- | --- | --- | --- |
> | 0 | 0 | 1 | 1 | 1 |
> | 0 | 1 | 1 | 1 | 1 |
> | 1 | 0 | 0 | 0 | 0 |
> | 1 | 1 | 1 | 0 | 1 |
>
> Stessa colonna finale. A parole: l'implicazione è vera se A è falsa (prima metà) oppure se B è vera.

**Esercizio 5.** Scrivi la formula della tavola seguente e semplificala se puoi.

```
 A B | R
-----+---
 0 0 | 0
 0 1 | 1
 1 0 | 1
 1 1 | 0
```

> [!example]- Soluzione
> Righe a 1: 01 e 10. La riga 01 dà `NOT A AND B`, la riga 10 dà `A AND NOT B`. `R = (NOT A AND B) OR (A AND NOT B)`.
>
> È vera quando A e B sono **diversi**: è l'OR esclusivo (XOR), il contrario di `A ⇔ B`. In C, fra valori 0/1, `a != b`; fra interi qualunque `!a != !b`. Non si semplifica ulteriormente con AND, OR e NOT: i due pezzi differiscono per **due** variabili, non una, quindi non si raccoglie niente.

**Esercizio 6.** Semplifica `(A AND B) OR (A AND NOT B) OR (NOT A AND NOT B)`.

> [!example]- Soluzione
> I primi due pezzi differiscono solo per B, quindi si raccoglie A.
>
> ```
> (A AND B) OR (A AND NOT B)  =  A AND (B OR NOT B)        distributiva al contrario
>                             =  A AND 1                    complemento
>                             =  A                          elemento neutro
> A OR (NOT A AND NOT B)      =  (A OR NOT A) AND (A OR NOT B)   distributiva dell'OR
>                             =  1 AND (A OR NOT B)              complemento
>                             =  A OR NOT B                      elemento neutro
> ```
>
> Controllo con la tavola:
>
> | A | B | A AND B | A AND NOT B | NOT A AND NOT B | originale | A OR NOT B |
> | --- | --- | --- | --- | --- | --- | --- |
> | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
> | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
> | 1 | 0 | 0 | 1 | 0 | 1 | 1 |
> | 1 | 1 | 1 | 0 | 0 | 1 | 1 |
>
> Le ultime due colonne coincidono: l'originale è 0 solo per $A = 0$, $B = 1$, come `A OR NOT B`.

**Esercizio 7.** `(A AND B) ⇒ A` è una tautologia, una contraddizione o nessuna delle due?

> [!example]- Soluzione
> L'implicazione è falsa solo se la premessa è vera e la conclusione falsa. `A AND B` vero vuol dire A vero, quindi la conclusione A è vera: il caso falso non si verifica mai.
>
> | A | B | A AND B | (A AND B) ⇒ A |
> | --- | --- | --- | --- |
> | 0 | 0 | 0 | 1 |
> | 0 | 1 | 0 | 1 |
> | 1 | 0 | 0 | 1 |
> | 1 | 1 | 1 | 1 |
>
> Ultima colonna tutta 1: **tautologia**.

**Esercizio 8.** Per quali interi `x` la condizione C `!(x > 3 && x < 10)` è vera? Riscrivila senza `!`.

> [!example]- Soluzione
> Si riconosce un "non dentro l'intervallo", quindi De Morgan.
>
> ```
> !(x > 3 && x < 10)
> !(x > 3) || !(x < 10)          De Morgan: il ! entra, && diventa ||
> x <= 3 || x >= 10              negazione dei confronti
> ```
>
> Vera per $x \leq 3$ oppure $x \geq 10$, falsa per $x$ da 4 a 9. Controllo sui bordi: con $x = 3$, `x > 3` è falso, quindi l'AND è falso e il `!` dà 1; nella forma riscritta `3 <= 3` è vero. Con $x = 4$ l'originale vale `!(1 && 1)`, cioè 0, e la riscritta `4 <= 3 || 4 >= 10` vale 0. Vedi la figura della negazione di un intervallo.

**Esercizio 9.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a = 3;
    int b = 0;
    int c = -2;

    printf("%d %d %d %d %d\n", a && b, a || b, !c, !a || (b && c), !!a);
    return 0;
}
```

> [!example]- Soluzione
> In C ogni valore diverso da 0 è vero, e gli operatori logici restituiscono 0 o 1.
>
> | espressione | calcolo | valore |
> | --- | --- | --- |
> | `a && b` | 3 vero, 0 falso | 0 |
> | `a \|\| b` | 3 vero, si ferma | 1 |
> | `!c` | -2 è vero, il NOT dà falso | 0 |
> | `!a \|\| (b && c)` | `!3` vale 0; `b && c` vale 0 (si ferma su `b`); 0 OR 0 | 0 |
> | `!!a` | `!3` vale 0, `!0` vale 1 | 1 |
>
> Output: `0 1 0 0 1` (verificato). Il doppio NOT `!!` è il modo di trasformare un intero qualunque in 0/1.

**Esercizio 10.** Scrivi l'output esatto. (Attenzione alle precedenze.)

```
#include <stdio.h>

int main(void)
{
    int x = 7;
    int y = 0;
    int z = -1;

    printf("%d %d %d %d %d\n", !x == y, x > y > z, !(x > 5) || y && z, !!z + !y, x && y || !z && x);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un esercizio di precedenze: per ogni espressione prima le parentesi implicite, poi il calcolo.
>
> | espressione | con le parentesi | calcolo | valore |
> | --- | --- | --- | --- |
> | `!x <mark> y` | `(!x) </mark> y` | `!7` vale 0; `0 == 0` | 1 |
> | `x > y > z` | `(x > y) > z` | `7 > 0` vale 1; `1 > -1` | 1 |
> | `!(x > 5) \|\| y && z` | `(!(x > 5)) \|\| (y && z)` | `!(1)` vale 0; `y && z` vale 0 senza guardare `z`; `0 \|\| 0` | 0 |
> | `!!z + !y` | `(!(!z)) + (!y)` | `!-1` vale 0, `!0` vale 1; `!0` vale 1; $1 + 1$ | 2 |
> | `x && y \|\| !z && x` | `(x && y) \|\| ((!z) && x)` | `7 && 0` vale 0; `!-1` vale 0, `0 && 7` vale 0; `0 \|\| 0` | 0 |
>
> Output: `1 1 0 2 0` (verificato). Il programma compila, ma con `-Wall` gcc dà quattro avvisi, uno per trappola: `!` applicato solo a sinistra del confronto, `X<=Y<=Z` che non ha il significato matematico, due volte "metti le parentesi attorno a `&&` dentro `||`". Per questo il blocco non è marcato `c`.

**Esercizio 11.** Il programmatore vuole sapere se `x` è **fuori** dall'intervallo da 1 a 10 e scrive questo. Trova l'errore e correggilo.

```c
#include <stdio.h>

int main(void)
{
    int x = 0;
    int fuori = x < 1 && x > 10;

    printf("x=%d fuori=%d\n", x, fuori);
    x = 11;
    fuori = x < 1 && x > 10;
    printf("x=%d fuori=%d\n", x, fuori);
    return 0;
}
```

> [!example]- Soluzione
> Output (verificato):
>
> ```
> x=0 fuori=0
> x=11 fuori=0
> ```
>
> `x < 1 && x > 10` chiede un numero che sia **insieme** minore di 1 e maggiore di 10: non esiste, è una **contraddizione**, vale 0 per ogni `x`. Il compilatore non avvisa, quindi l'errore si trova solo ragionando. "Fuori" vuol dire "da una parte **oppure** dall'altra":
>
> ```
> int fuori = x < 1 || x > 10;
> ```
>
> Si ricava anche con De Morgan dalla condizione "dentro": `!(x >= 1 && x <= 10)` diventa `x < 1 || x > 10`. Con la correzione le due righe stampano `fuori=1`. Controllo con un valore dentro: con $x = 5$, `5 < 1 || 5 > 10` vale 0.

**Esercizio 12.** Scrivi un'espressione C che vale 1 se l'`int` `anno` è bisestile: divisibile per 4 ma non per 100, oppure divisibile per 400. Poi scrivi, con De Morgan e senza `!`, quella che vale 1 se **non** è bisestile. Prova con 1900, 2000, 2024, 2026.

> [!example]- Soluzione
> "Divisibile per 4" è `anno % 4 == 0`. La frase si traduce pezzo per pezzo:
>
> ```
> (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0
> ```
>
> Le parentesi attorno all'`&&` non servono per la precedenza, ma rendono chiaro come si raggruppa (e tolgono l'avviso di gcc).
>
> Negazione, un passo per riga:
>
> ```
> !( (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0 )
> !(anno % 4 == 0 && anno % 100 != 0) && !(anno % 400 == 0)      De Morgan sull'||
> (!(anno % 4 == 0) || !(anno % 100 != 0)) && anno % 400 != 0    De Morgan sull'&&
> (anno % 4 != 0 || anno % 100 == 0) && anno % 400 != 0          negazione dei confronti
> ```
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int anno = 1900;
>     int bis = (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0;
>     int non_bis = (anno % 4 != 0 || anno % 100 == 0) && anno % 400 != 0;
>
>     printf("%d: bis=%d non_bis=%d\n", anno, bis, non_bis);
>     anno = 2000;
>     bis = (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0;
>     non_bis = (anno % 4 != 0 || anno % 100 == 0) && anno % 400 != 0;
>     printf("%d: bis=%d non_bis=%d\n", anno, bis, non_bis);
>     anno = 2024;
>     bis = (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0;
>     non_bis = (anno % 4 != 0 || anno % 100 == 0) && anno % 400 != 0;
>     printf("%d: bis=%d non_bis=%d\n", anno, bis, non_bis);
>     anno = 2026;
>     bis = (anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0;
>     non_bis = (anno % 4 != 0 || anno % 100 == 0) && anno % 400 != 0;
>     printf("%d: bis=%d non_bis=%d\n", anno, bis, non_bis);
>     return 0;
> }
> ```
>
> Output (verificato):
>
> ```
> 1900: bis=0 non_bis=1
> 2000: bis=1 non_bis=0
> 2024: bis=1 non_bis=0
> 2026: bis=0 non_bis=1
> ```
>
> 1900 è divisibile per 100 e non per 400, quindi non è bisestile; 2000 sì per il 400. Controllo: `bis` e `non_bis` sono sempre opposti (verificato su tutti gli anni da 1 a 4000).

**Esercizio 13.** Scrivi l'output esatto. (Lazy evaluation.)

```
#include <stdio.h>

int main(void)
{
    int a = 0;
    int b = 2;
    int c = 5;
    int r1;
    int r2;
    int r3;

    r1 = a && b++;
    r2 = a || b++;
    r3 = !a && c-- > 4 || b++;
    printf("%d %d %d a=%d b=%d c=%d\n", r1, r2, r3, a, b, c);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce dai `++` dentro `&&` e `||`: bisogna sapere quali parti vengono valutate davvero.
>
> | istruzione | cosa si valuta | `a` | `b` | `c` | risultato |
> | --- | --- | --- | --- | --- | --- |
> | iniziale | | 0 | 2 | 5 | |
> | `r1 = a && b++` | `a` è 0: l'AND è già falso, `b++` **non** si esegue | 0 | 2 | 5 | `r1` vale 0 |
> | `r2 = a \|\| b++` | `a` è 0, serve la destra: `b++` vale 2 (vero), poi `b` diventa 3 | 0 | 3 | 5 | `r2` vale 1 |
> | `r3 = ...` | parentesi implicite: `((!a) && ((c--) > 4)) \|\| (b++)` | 0 | 3 | 5 | |
> | | `!a` vale 1, serve la destra dell'AND | 0 | 3 | 5 | |
> | | `c--` vale 5, `5 > 4` vale 1, poi `c` diventa 4; l'AND vale 1 | 0 | 3 | 4 | |
> | | l'OR è già vero: `b++` **non** si esegue | 0 | 3 | 4 | `r3` vale 1 |
>
> Output: `0 1 1 a=0 b=3 c=4` (verificato). gcc avvisa di mettere le parentesi attorno all'`&&` dentro l'`||`, per questo il blocco non è marcato `c`.

**Esercizio 14.** (Livello 30) La funzione **maggioranza** di tre variabili vale 1 quando almeno due su tre valgono 1. Scrivi la tavola, ricava la formula come somma di prodotti e semplificala.

> [!example]- Soluzione
> Tavola, 8 righe in ordine binario:
>
> | A | B | C | M |
> | --- | --- | --- | --- |
> | 0 | 0 | 0 | 0 |
> | 0 | 0 | 1 | 0 |
> | 0 | 1 | 0 | 0 |
> | 0 | 1 | 1 | 1 |
> | 1 | 0 | 0 | 0 |
> | 1 | 0 | 1 | 1 |
> | 1 | 1 | 0 | 1 |
> | 1 | 1 | 1 | 1 |
>
> Righe a 1: 011, 101, 110, 111. Somma di prodotti:
>
> ```
> M = (NOT A AND B AND C) OR (A AND NOT B AND C) OR (A AND B AND NOT C) OR (A AND B AND C)
> ```
>
> Semplificazione. Il pezzo `A AND B AND C` differisce da ognuno degli altri tre per una sola variabile. Per idempotenza (`X OR X = X`) lo si può scrivere tre volte e accoppiarlo con ciascuno:
>
> ```
> (NOT A AND B AND C) OR (A AND B AND C)  =  (NOT A OR A) AND B AND C    distributiva al contrario
>                                         =  B AND C                      complemento, neutro
> (A AND NOT B AND C) OR (A AND B AND C)  =  A AND C                      stessi passi su B
> (A AND B AND NOT C) OR (A AND B AND C)  =  A AND B                      stessi passi su C
> M = (A AND B) OR (A AND C) OR (B AND C)
> ```
>
> Controllo a parole: "almeno due su tre" vuol dire che almeno una delle tre coppie è tutta vera, ed è esattamente la formula. Verificata anche su tutte le 8 righe. In C: `(a && b) || (a && c) || (b && c)`.

**Esercizio 15.** (Livello 30) Mostra che `(A ⇒ B) AND (B ⇒ A)` è equivalente ad `A ⇔ B`. Poi di' se `A ⇒ B` è equivalente a `B ⇒ A`, e se è equivalente a `NOT B ⇒ NOT A`.

> [!example]- Soluzione
> | A | B | A ⇒ B | B ⇒ A | (A ⇒ B) AND (B ⇒ A) | A ⇔ B |
> | --- | --- | --- | --- | --- | --- |
> | 0 | 0 | 1 | 1 | 1 | 1 |
> | 0 | 1 | 1 | 0 | 0 | 0 |
> | 1 | 0 | 0 | 1 | 0 | 0 |
> | 1 | 1 | 1 | 1 | 1 | 1 |
>
> Le ultime due colonne coincidono: "A e B si implicano a vicenda" vuol dire "hanno lo stesso valore". È il "se e solo se" della definizione di equivalenza.
>
> `A ⇒ B` e `B ⇒ A`: la terza e la quarta colonna differiscono nella riga 01 (1 contro 0) e nella riga 10, quindi **non** sono equivalenti.
>
> `NOT B ⇒ NOT A`: con l'esercizio 4 si riscrive senza tavola.
>
> ```
> NOT B ⇒ NOT A  =  NOT (NOT B) OR NOT A     esercizio 4: X ⇒ Y = NOT X OR Y
>                =  B OR NOT A                doppia negazione
>                =  NOT A OR B                commutativa
>                =  A ⇒ B                     esercizio 4 al contrario
> ```
>
> **Sono equivalenti.** "Se piove prendo l'ombrello" dice lo stesso di "se non ho l'ombrello allora non piove".

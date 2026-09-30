---
title: Algebra di Boole
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
ordine: 4
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a settembre, deck 3.1 intero: <span class="src">3.1 Operazioni logiche</span>. Prima: [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/). Dopo: [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/).

> [!abstract] Per l'esame
> - **Saper enunciare**: i tre operatori e le loro tavole, la precedenza NOT > AND > OR, cosa vuol dire che due espressioni sono equivalenti, le leggi di De Morgan, tautologia e contraddizione.
> - **Saper fare**: compilare la tavola di verità di un'espressione colonna per colonna; dimostrare un'equivalenza con la tavola; ricavare la formula da una tavola e semplificarla; negare una condizione C con De Morgan.
> - **Dove esce**: nella teorica, "completa la tavola di verità" o "quando è vera (A OR B) AND C" (3 prove su 18 nel 2023-26, vedi [Esami passati](/uni/prog-1/esami-passati/)). Soprattutto, ogni `if` e ogni `while` ha una condizione booleana: sbagliare un `!` o un `&&` vuol dire sbagliare il programma.

## Definizioni

**Perché serve** (<span class="src">slide 2-3</span>). Un programma deve "calcolare la verità" per decidere cosa fare: un sensore che legge `SE LuceRossa ALLORA Stop ALTRIMENTI Procedi` ha bisogno di sapere se `LuceRossa` è vera. L'algebra di Boole è il calcolo con cui si combinano queste risposte sì/no.

**Algebra di Boole** (<span class="src">slide 4-5</span>). Opera su variabili che assumono solo **due valori**: 0 e 1, VERO e FALSO, bianco e nero. Come ogni algebra ha le sue operazioni, che sono tre: VERO corrisponde al bit 1, FALSO al bit 0.

| Operatore | Tipo | Definizione (<span class="src">slide 6</span>) |
| --- | --- | --- |
| **NOT** | unario (un operando) | `NOT A` è l'opposto del valore di `A` |
| **AND** | binario (due operandi) | `A AND B` è VERO se **entrambi** gli operandi sono VERO |
| **OR** | binario | `A OR B` è VERO se **almeno uno** degli operandi è VERO |

**Tavola di verità** (<span class="src">slide 8-9</span>). Una tabella che elenca il risultato di un'operazione per **ogni** combinazione dei valori degli operandi. Con $n$ variabili le righe sono $2^n$: 2 per una variabile, 4 per due, 8 per tre.

```
 A | NOT A        A B | A AND B        A B | A OR B
---+------       -----+--------       -----+-------
 0 |   1          0 0 |    0            0 0 |   0
 1 |   0          0 1 |    0            0 1 |   1
                  1 0 |    0            1 0 |   1
                  1 1 |    1            1 1 |   1
```

Per ricordarle: AND è 1 in una sola riga (tutti 1), OR è 0 in una sola riga (tutti 0).

**Notazioni** (<span class="src">slide 10</span>). Lo stesso operatore si scrive in modi diversi a seconda del contesto:

| | parola | C | algebra |
| --- | --- | --- | --- |
| NOT | `NOT A` | `!A` | $\bar{A}$ |
| AND | `A AND B` | `A && B` | $A \times B$ (o $A \cdot B$) |
| OR | `A OR B` | `A \|\| B` | $A + B$ |

La notazione algebrica spiega le tavole: AND si comporta come il prodotto di 0 e 1, OR come una somma in cui $1 + 1$ resta 1.

**Proprietà** (<span class="src">slide 7</span>).
- **Commutativa**: `A OR B = B OR A`, `A AND B = B AND A`.
- **Distributiva**, in **entrambi** i versi:
  - `A AND (B OR C) = (A AND B) OR (A AND C)`, come $a(b + c) = ab + ac$;
  - `A OR (B AND C) = (A OR B) AND (A OR C)`, che con i numeri non vale e qui sì.

Altre identità che non sono sulle slide ma si verificano con una tavola da quattro righe, e servono per semplificare:

```
A AND 1 = A          A OR 0 = A            elemento neutro
A AND 0 = 0          A OR 1 = 1            elemento assorbente
A AND A = A          A OR A = A            idempotenza
A AND NOT A = 0      A OR NOT A = 1        complemento
NOT (NOT A) = A                            doppia negazione
```

**Precedenza** (<span class="src">slide 11-13</span>). Senza parentesi si valuta:
1. prima NOT;
2. poi AND;
3. per ultimo OR.

È la stessa regola del C: `!` lega più di `&&`, che lega più di `||`. Come per $+$ e $\times$, le parentesi cambiano l'ordine.

**Equivalenza** (<span class="src">slide 22</span>). Due espressioni booleane sono **equivalenti** se e solo se hanno la **stessa tavola di verità**. Per dimostrare un'equivalenza basta quindi compilare le due tavole e confrontare l'ultima colonna, riga per riga.

**Altri operatori** (<span class="src">slide 25</span>).

```
equivalenza                    implicazione
 A B | A ⇔ B                    A B | A ⇒ B
-----+------                   -----+------
 0 0 |   1                      0 0 |   1
 0 1 |   0                      0 1 |   1
 1 0 |   0                      1 0 |   0
 1 1 |   1                      1 1 |   1
```

- `A ⇔ B` è vera quando A e B hanno lo **stesso** valore. In C è `A == B` fra valori 0/1.
- `A ⇒ B` ("se A allora B") è falsa **solo** quando A è vera e B falsa. Se A è falsa l'implicazione è vera comunque. Si può scrivere come `NOT A OR B`.

**Tautologia e contraddizione** (<span class="src">slide 27</span>).
- **Contraddizione**: espressione sempre falsa, qualunque valore abbiano le variabili. Esempio: `A AND (NOT A)`.
- **Tautologia**: espressione sempre vera. Esempio: `A OR (NOT A)`.

Nella tavola: l'ultima colonna è tutta 0 (contraddizione) o tutta 1 (tautologia). In un programma una condizione che è una contraddizione rende il ramo irraggiungibile, una tautologia in un `while` dà un ciclo infinito.

## Concetti

### Leggi di De Morgan

(<span class="src">slide 22-24</span>)

```
1.  A AND B  =  NOT ((NOT A) OR (NOT B))
2.  A OR B   =  NOT ((NOT A) AND (NOT B))
```

La forma che si usa di più, equivalente, è quella che nega una condizione intera:

```
NOT (A AND B)  =  (NOT A) OR (NOT B)
NOT (A OR B)   =  (NOT A) AND (NOT B)
```

Regola pratica: il NOT entra nella parentesi, nega ogni pezzo, e AND e OR si scambiano. In C: `!(x > 0 && x < 10)` equivale a `x <= 0 || x >= 10`. Nota che la negazione di `>` è `<=`, non `<`.

> [!note]- Dimostrazione della legge 1 con la tavola (slide 23-24)
> Si compila una colonna per ogni sotto-espressione, poi si confronta l'ultima con `A AND B`.
>
> | A | B | NOT A | NOT B | (NOT B) OR (NOT A) | NOT ((NOT B) OR (NOT A)) | A AND B |
> | --- | --- | --- | --- | --- | --- | --- |
> | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
> | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
> | 1 | 0 | 0 | 1 | 1 | 0 | 0 |
> | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
>
> Le ultime due colonne coincidono in tutte e quattro le righe, quindi le espressioni sono equivalenti. La slide scrive `(NOT B) OR (NOT A)` invece di `(NOT A) OR (NOT B)`: è lo stesso per la commutativa.
>
> La legge 2 si dimostra allo stesso modo (esercizio lasciato dalla slide 22). Verificate entrambe anche in C, stampando le colonne con due cicli annidati:
>
> ```c
> #include <stdio.h>
>
> int main(void)
> {
>     int a = 0;
>
>     printf("A B | A&&B  !(!A||!B) | A||B  !(!A&&!B)\n");
>     while (a <= 1) {
>         int b = 0;
>         while (b <= 1) {
>             printf("%d %d |  %d        %d     |  %d        %d\n",
>                    a, b, a && b, !(!a || !b), a || b, !(!a && !b));
>             b++;
>         }
>         a++;
>     }
>     return 0;
> }
> ```
>
> Output:
>
> ```
> A B | A&&B  !(!A||!B) | A||B  !(!A&&!B)
> 0 0 |  0        0     |  0        0
> 0 1 |  0        0     |  1        1
> 1 0 |  0        0     |  1        1
> 1 1 |  1        1     |  1        1
> ```

### Dalla tavola alla formula

(<span class="src">slide 26</span>) Data una tavola si può sempre scrivere un'espressione che la produce:
1. prendi le righe in cui il risultato è **1**;
2. per ogni riga scrivi l'AND delle variabili, negando quelle che valgono 0 (la riga `A=0, B=1` diventa `NOT A AND B`);
3. metti in OR tutti questi pezzi.

Il risultato è vero esattamente nelle righe scelte: ogni pezzo è vero in una sola riga. Si chiama **somma di prodotti** (OR di AND).

## Metodo

**Compilare una tavola di verità.**
1. Conta le variabili $n$ e scrivi le $2^n$ righe in ordine binario (000, 001, 010, … 111): così non ne salti nessuna.
2. Metti le parentesi implicite con la precedenza NOT > AND > OR.
3. Aggiungi una colonna per ogni sotto-espressione, dalle più interne verso l'esterno.
4. Calcola colonna per colonna, usando solo le colonne già fatte.
5. L'ultima colonna è l'espressione completa.

**Dimostrare un'equivalenza.** Tavola delle due espressioni sulle stesse righe, confronto dell'ultima colonna. Basta **una** riga diversa per dire che non sono equivalenti.

**Negare una condizione C** (serve per scrivere la condizione di uscita di un `while`): De Morgan, poi ogni confronto si inverte (`<` diventa `>=`, **==** diventa `!=`).

## Esempi svolti a lezione

**Precedenza su `NOT Y AND Y OR NOT X`** (<span class="src">slide 12</span>). Si mettono le parentesi un livello alla volta:

```
NOT Y AND Y OR NOT X
(NOT Y) AND Y OR (NOT X)              prima i NOT
((NOT Y) AND Y) OR (NOT X)            poi l'AND
(((NOT Y) AND Y) OR (NOT X))          infine l'OR
```

La slide si ferma qui. Vale la pena notare che `(NOT Y) AND Y` è una contraddizione, sempre 0, e `0 OR (NOT X)` è `NOT X`: tutta l'espressione equivale a `NOT X`.

**Tavola di `NOT Y AND (Y OR NOT X)`** (<span class="src">slide 13-19</span>). Stessa espressione con una parentesi in più: l'OR adesso si fa prima dell'AND. Colonne costruite una alla volta come nelle slide (che usano l'ordine di righe 10, 01, 00, 11):

| X | Y | NOT X | NOT Y | Y OR NOT X | NOT Y AND (Y OR NOT X) |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 | 1 | **1** |
| 1 | 1 | 0 | 0 | 1 | 0 |

È vera solo per $X = 0$, $Y = 0$: equivale a `NOT X AND NOT Y`. Le parentesi hanno cambiato il risultato: senza, l'espressione era `NOT X`, vera anche per $X = 0$, $Y = 1$.

Verifica in C, con `!`, `&&` e `||`:

```c
#include <stdio.h>

int main(void)
{
    int x = 0;

    printf("X Y | NOT Y AND (Y OR NOT X)\n");
    while (x <= 1) {
        int y = 0;
        while (y <= 1) {
            printf("%d %d | %d\n", x, y, !y && (y || !x));
            y++;
        }
        x++;
    }
    return 0;
}
```

Output:

```
X Y | NOT Y AND (Y OR NOT X)
0 0 | 1
0 1 | 0
1 0 | 0
1 1 | 0
```

**Tavola di `D = A AND NOT (B OR C)`** (<span class="src">slide 20-21</span>). Tre variabili, otto righe:

| A | B | C | B OR C | NOT (B OR C) | D |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | **1** |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

D è vera solo quando A è vera e B e C sono entrambe false. Per De Morgan `NOT (B OR C)` è `NOT B AND NOT C`, quindi `D = A AND NOT B AND NOT C`, che si legge direttamente dalla riga 100. Verificato con lo stesso programma a tre cicli annidati.

**Dalla tavola alla formula, e la "forma più compatta"** (<span class="src">slide 26</span>).

```
 A B | C
-----+---
 0 0 | 0
 0 1 | 1      NOT A AND B
 1 0 | 1      A AND NOT B
 1 1 | 1      A AND B
```

Somma di prodotti: `C = (NOT A AND B) OR (A AND NOT B) OR (A AND B)`.

La slide chiede se si conosce una forma più compatta. Guardando la tavola, C è 0 solo quando A e B sono entrambe 0: è la tavola dell'OR. Quindi **`C = A OR B`**. Con l'algebra:

```
(A AND NOT B) OR (A AND B)  =  A AND (NOT B OR B)     distributiva al contrario
                            =  A AND 1  =  A           complemento, neutro
C  =  (NOT A AND B) OR A
   =  (NOT A OR A) AND (B OR A)                        distributiva dell'OR sull'AND
   =  1 AND (B OR A)  =  A OR B
```

## Esercizi tipo esame

**Esercizio 1.** Completa la tavola di verità di `(A OR B) AND C` e di' quando è vera.

> [!example]- Soluzione
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
> È vera quando C è vera e almeno una fra A e B è vera: righe 011, 101, 111.

**Esercizio 2.** Dimostra con la tavola che `NOT (A AND B)` è equivalente a `NOT A OR NOT B`.

> [!example]- Soluzione
> | A | B | A AND B | NOT (A AND B) | NOT A | NOT B | NOT A OR NOT B |
> | --- | --- | --- | --- | --- | --- | --- |
> | 0 | 0 | 0 | 1 | 1 | 1 | 1 |
> | 0 | 1 | 0 | 1 | 1 | 0 | 1 |
> | 1 | 0 | 0 | 1 | 0 | 1 | 1 |
> | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
>
> La quarta e l'ultima colonna coincidono: sono equivalenti (è De Morgan).

**Esercizio 3.** Dimostra che `A ⇒ B` è equivalente a `NOT A OR B`.

> [!example]- Soluzione
> | A | B | A ⇒ B | NOT A | NOT A OR B |
> | --- | --- | --- | --- | --- |
> | 0 | 0 | 1 | 1 | 1 |
> | 0 | 1 | 1 | 1 | 1 |
> | 1 | 0 | 0 | 0 | 0 |
> | 1 | 1 | 1 | 0 | 1 |
>
> Stessa colonna finale.

**Esercizio 4.** Scrivi la formula della tavola seguente e semplificala se puoi.

```
 A B | R
-----+---
 0 0 | 0
 0 1 | 1
 1 0 | 1
 1 1 | 0
```

> [!example]- Soluzione
> Righe a 1: 01 e 10. `R = (NOT A AND B) OR (A AND NOT B)`. È vera quando A e B sono **diversi**: è l'OR esclusivo (XOR), il contrario di `A ⇔ B`. In C, fra valori 0/1, `a != b`. Non si semplifica ulteriormente con AND, OR e NOT.

**Esercizio 5.** Semplifica `(A AND B) OR (A AND NOT B) OR (NOT A AND NOT B)`.

> [!example]- Soluzione
> I primi due pezzi: `A AND (B OR NOT B) = A`. Resta `A OR (NOT A AND NOT B)`. Distributiva dell'OR: `(A OR NOT A) AND (A OR NOT B) = 1 AND (A OR NOT B) = A OR NOT B`.
> Controllo con la tavola: l'originale è 0 solo per A=0, B=1, e `A OR NOT B` è 0 solo per A=0, B=1. Coincidono.

**Esercizio 6.** `(A AND B) ⇒ A` è una tautologia, una contraddizione o nessuna delle due?

> [!example]- Soluzione
> L'implicazione è falsa solo se la premessa è vera e la conclusione falsa. `A AND B` vero vuol dire A vero, quindi la conclusione A è vera: il caso falso non si verifica mai. Tavola: 1, 1, 1, 1. **Tautologia**.

**Esercizio 7.** Per quali interi `x` la condizione C `!(x > 3 && x < 10)` è vera? Riscrivila senza `!`.

> [!example]- Soluzione
> De Morgan: `!(x > 3) || !(x < 10)`, cioè `x <= 3 || x >= 10`. Vera per $x \leq 3$ oppure $x \geq 10$, falsa per $x$ da 4 a 9.

**Esercizio 8.** Scrivi l'output esatto.

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
> `a && b`: 3 vero, 0 falso, dà 0. `a || b`: 1. `!c`: -2 è vero, il NOT dà 0. `!a || (b && c)`: 0 OR 0, dà 0. `!!a`: il doppio NOT trasforma 3 in 1.
> Output: `0 1 0 0 1` (verificato).

## Errori tipici

- Dimenticare righe: con 3 variabili sono 8, non 6. Scriverle in ordine binario evita il problema.
- Leggere `NOT Y AND Y OR NOT X` come `NOT (Y AND Y OR NOT X)`: il NOT si applica solo a ciò che segue subito.
- Applicare De Morgan senza scambiare AND e OR: `NOT (A AND B)` non è `NOT A AND NOT B`.
- Negare `x > 3` con `x < 3`: la negazione è `x <= 3`.
- Pensare che `A ⇒ B` sia falsa quando A è falsa: è vera.
- In C, pensare che `!5` valga -5 o 4: vale 0. E `!0` vale 1.
- Confondere `&&` e `||` logici con `&` e `|`, che operano sui singoli bit (si vedranno più avanti).

## Domande

- Su che valori opera l'algebra di Boole e quali sono le sue tre operazioni?

- Scrivi le tavole di verità di NOT, AND e OR.

- Quante righe ha la tavola di verità di un'espressione con 4 variabili?

- Qual è l'ordine di precedenza fra NOT, AND e OR? E fra `!`, `&&`, `||` in C?

- Enuncia le due proprietà distributive.

- Quando due espressioni booleane sono equivalenti?

- Enuncia le leggi di De Morgan.

- Riscrivi `!(a >= 0 && a < n)` senza il `!`.

- Quando è falsa l'implicazione `A ⇒ B`?

- Cosa sono una tautologia e una contraddizione? Dai un esempio di ciascuna.

- Come si ricava una formula da una tavola di verità?

- A cosa si semplifica `(NOT A AND B) OR (A AND NOT B) OR (A AND B)`?

- Quanto vale in C `!3 || (0 && 5)`?

- A cosa equivale `NOT Y AND Y OR NOT X`, e perché?

---
title: Simulazione provetta 3
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: simulazione
stato: completa
data: 2026-10-17
lezioni: []
ordine: 999
durata: 50
---

Terza simulazione della prima prova teorica intermedia di [Programmazione 1](/uni/prog-1/), sulla forma della <span class="src">prova del 22/10/2024</span> e delle simulazioni [1](/uni/simulazioni/prog-1/simulazione-provetta-1/) e [2](/uni/simulazioni/prog-1/simulazione-provetta-2/). Il programma è quello fatto fino ai puntatori (deck 6.1): niente funzioni oltre a `main`. Ogni output è stato compilato ed eseguito con `gcc`, le conversioni e la tavola controllate con Python.

> [!info] Regole
> - **50 minuti**, su carta, niente strumenti elettronici.
> - Il codice si scrive a mano e la leggibilità fa parte del voto.
> - Nelle domande SI/NO rispondi a tutte le righe: nella soluzione **Vero** sta per SI, **Falso** per NO.
> - Punteggio massimo 6.

## Testo

### Domanda 1 · 1 punto

Dato il codice

```c
double d = 2.5;
double *pd = &d;
int k = 4;
int *pk;
```

dire se sono ammissibili le seguenti istruzioni:

1. `pk = &k;`
2. `pd = &k;`
3. `*pd = k;`
4. `&k = pk;`

dire se sono vere o false le seguenti affermazioni:

5. l'espressione `*&k` vale `4`
6. dopo `pk = NULL;`, l'istruzione `*pk = 1;` non viene compilata
7. con `int v[4];` le espressioni `v + 1` e `&v[1]` hanno lo stesso valore
8. `int *a, b;` dichiara due puntatori a `int`

### Domanda 2 · 1 punto

Si scriva esattamente l'output mostrato da ciascun frammento.

```c
int i;
for (i = 1; i <= 30; i = i * 2 + 1) { printf("%d_", i); }
```

```c
int i = 3;
do { printf("%d_", --i); } while (i > 0);
```

```c
int i;
for (i = 0; i < 10; i++) {
    if (i % 3 == 0) continue;
    if (i > 7) break;
    printf("%d_", i);
}
```

### Domanda 3 · 1 punto

Scrivere un programma che stampi a video la cornice seguente, con $R = 4$ righe e $C = 6$ colonne definite con `#define`. **Obbligatorio usare i cicli.**

```
# # # # # #
# . . . . #
# . . . . #
# # # # # #
```

### Domanda 4 · 1 punto

Calcolare la somma tra $(B6)_{16}$ e $(47)_8$, mostrando tutti i passaggi della somma e delle conversioni. Dire poi a quali dei valori seguenti equivale il risultato:

1. $(11011101)_2$
2. $(335)_8$
3. $(DC)_{16}$
4. $(221)_{10}$

### Domanda 5 · 0,5 punti

Completare la tavola di verità.

| X | Y | `!(X && !Y)` | `X \|\| Y && !X` | `!(!X \|\| !Y)` | `(X \|\| Y) && !(X && Y)` |
| --- | --- | --- | --- | --- | --- |
| VERO | FALSO | | | | |
| FALSO | VERO | | | | |
| FALSO | FALSO | | | | |
| VERO | VERO | | | | |

### Domanda 6 · 1,5 punti

Si considerino le dichiarazioni

```c
#define N 50
typedef struct {
    char codice[8];
    int quantita;
    float prezzo;
} Prodotto;
Prodotto magazzino[N];
```

con l'array già riempito. Scrivere in C un frammento che stampi:

- il **valore totale** del magazzino (somma di quantità per prezzo di ogni prodotto);
- **quanti prodotti sono esauriti** (`quantita` uguale a 0);
- il **codice del prodotto disponibile più economico**, cioè quello con il prezzo più basso fra quelli con `quantita` maggiore di 0. Se nessun prodotto è disponibile va stampato un messaggio.

## Correzione

### Domanda 1

> [!example]- Soluzione
> 1. **Vero**. `&k` è un `int *`, come `pk`: ora `pk` punta a `k`.
> 2. **Falso**. A sinistra un `double *`, a destra un `int *`: tipi puntati diversi. Con `gcc` 16 è un errore, `assignment to 'double *' from incompatible pointer type 'int *'`. Un `double *` che punta a un `int` leggerebbe 8 byte dove ce ne sono 4.
> 3. **Vero**. Qui si assegnano **valori**, non puntatori: `*pd` è un `double`, `k` un `int`, e l'`int` si converte in `double`. Dopo, `d` vale `4.0`.
> 4. **Falso**. `&k` è un indirizzo, non una variabile: non si può assegnare. `gcc` dà `lvalue required as left operand of assignment`.
> 5. **Vero**. `&` e `*` sono uno l'inverso dell'altro: `*&k` è `k` stessa.
> 6. **Falso**. Il compilatore non sa che cosa varrà `pk` a tempo di esecuzione: compila senza errori. È il programma a fermarsi, con *segmentation fault* (provato: codice di uscita 139). Dereferenziare `NULL` è indefinito, non vietato dalla sintassi.
> 7. **Vero**. Il nome dell'array è l'indirizzo di `v[0]`, e `v + 1` avanza di un elemento: è l'indirizzo di `v[1]`. Non serve che `v` sia inizializzato, perché non si legge nessun valore.
> 8. **Falso**. Il `*` si lega al nome che segue: `a` è un `int *`, `b` è un `int`.
>
> **Griglia**: 1/8 di punto per riga.

### Domanda 2

> [!example]- Soluzione
> ```
> 1_3_7_15_
> 2_1_0_
> 1_2_4_5_7_
> ```
> **Primo.** L'aggiornamento non è `i++`: ogni giro `i` diventa il doppio più uno.
>
> | giro | `i` al test | `i <= 30` | stampa | nuovo `i` |
> | --- | --- | --- | --- | --- |
> | 1 | 1 | vero | `1_` | $1 \cdot 2 + 1 = 3$ |
> | 2 | 3 | vero | `3_` | 7 |
> | 3 | 7 | vero | `7_` | 15 |
> | 4 | 15 | vero | `15_` | 31 |
> | | 31 | falso, esce | | |
>
> **Secondo.** Il `do-while` esegue il corpo prima del test, e `--i` è prefisso: la `printf` vede il valore già decrementato.
>
> | giro | `i` prima | `--i` stampa | test `i > 0` |
> | --- | --- | --- | --- |
> | 1 | 3 | `2_` | vero |
> | 2 | 2 | `1_` | vero |
> | 3 | 1 | `0_` | falso, esce |
>
> Lo `0` si stampa perché il test arriva **dopo** la stampa.
>
> **Terzo.** `continue` salta il resto del giro e passa all'incremento, `break` esce dal ciclo.
>
> | `i` | `i % 3 == 0` | `i > 7` | azione |
> | --- | --- | --- | --- |
> | 0 | vero | | `continue` |
> | 1 | falso | falso | stampa `1_` |
> | 2 | falso | falso | stampa `2_` |
> | 3 | vero | | `continue` |
> | 4 | falso | falso | stampa `4_` |
> | 5 | falso | falso | stampa `5_` |
> | 6 | vero | | `continue` |
> | 7 | falso | falso | stampa `7_` |
> | 8 | falso | vero | `break` |
>
> L'8 non si stampa: il controllo `i > 7` viene prima della `printf`. Il 9 non viene mai raggiunto.

### Domanda 3

> [!example]- Soluzione
> Cella $(r, c)$ con righe e colonne da 0: è `#` se sta sul bordo, cioè sulla prima o sull'ultima riga, o sulla prima o sull'ultima colonna. Altrimenti è `.`.
> ```c
> #include <stdio.h>
> #define R 4
> #define C 6
>
> int main(void) {
>     int r, c;
>     for (r = 0; r < R; r++) {
>         for (c = 0; c < C; c++) {
>             if (r == 0 || r == R - 1 || c == 0 || c == C - 1)
>                 printf("# ");
>             else
>                 printf(". ");
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Controllo: con `R` 2 e `C` 3 non ci sono celle interne, e infatti stampa due righe di soli `#` (provato). Il bordo è definito con `R - 1` e `C - 1`, non con 3 e 5: cambiando le `#define` la cornice si adatta.
>
> **Griglia**: doppio ciclo righe fuori, colonne dentro (0,5), condizione del bordo con le `#define` e a capo dopo ogni riga (0,5). Quattro `printf` con la figura scritta a mano valgono zero.

### Domanda 4

> [!example]- Soluzione
> **Risultato**: $(11011101)_2 = (335)_8 = (DD)_{16} = (221)_{10}$. Quindi 1 **Vero**, 2 **Vero**, 3 **Falso**, 4 **Vero**.
>
> **Conversione in base 2** (ogni cifra esadecimale sono 4 bit, ogni cifra ottale 3):
> - $(B6)_{16}$: $B = 11 = 1011$, $6 = 0110$, quindi $(10110110)_2$.
> - $(47)_8$: $4 = 100$, $7 = 111$, quindi $(100111)_2$, cioè $(00100111)_2$ su 8 bit.
>
> **Somma in colonna**, da destra:
> ```
> riporti     1     1 1
>           1 0 1 1 0 1 1 0
>       +   0 0 1 0 0 1 1 1
>           ---------------
>           1 1 0 1 1 1 0 1
> ```
> Colonna per colonna da destra: $0 + 1 = 1$; $1 + 1 = 10$, scrivo 0 e riporto 1; $1 + 1 + 1 = 11$, scrivo 1 e riporto 1; $0 + 0 + 1 = 1$; $1 + 0 = 1$; $1 + 1 = 10$, scrivo 0 e riporto 1; $0 + 0 + 1 = 1$; $1 + 0 = 1$.
>
> **Controllo in base 10**: $(B6)_{16} = 11 \cdot 16 + 6 = 182$, $(47)_8 = 4 \cdot 8 + 7 = 39$, $182 + 39 = 221$. E $(11011101)_2 = 128 + 64 + 16 + 8 + 4 + 1 = 221$.
>
> **Le altre basi** dal binario: gruppi di 3 da destra $11\,011\,101 = (335)_8$; gruppi di 4 $1101\,1101 = (DD)_{16}$. $(DC)_{16}$ vale $220$: è l'errore di chi sbaglia l'ultima cifra della somma.

### Domanda 5

> [!example]- Soluzione
> | X | Y | `!(X && !Y)` | `X \|\| Y && !X` | `!(!X \|\| !Y)` | `(X \|\| Y) && !(X && Y)` |
> | --- | --- | --- | --- | --- | --- |
> | VERO | FALSO | FALSO | VERO | FALSO | VERO |
> | FALSO | VERO | VERO | VERO | FALSO | VERO |
> | FALSO | FALSO | VERO | FALSO | FALSO | FALSO |
> | VERO | VERO | VERO | VERO | VERO | FALSO |
>
> - `!(X && !Y)`: `X && !Y` è vera solo con X vero e Y falso (prima riga), la negazione è falsa solo lì.
> - `X || Y && !X`: `&&` lega più di `||`, quindi si legge `X || (Y && !X)`. Se X è vero è vera; se X è falso resta `Y && VERO`, cioè Y. Il risultato è `X || Y`. `gcc` con `-Wall` avvisa `suggest parentheses around '&&' within '||'`: è proprio il punto della domanda.
> - `!(!X || !Y)`: per De Morgan è `X && Y`, vera solo nell'ultima riga.
> - `(X || Y) && !(X && Y)`: almeno uno vero ma non tutti e due, cioè X e Y diversi. È lo XOR.

### Domanda 6

> [!example]- Soluzione
> ```c
> int i;
> float totale = 0;
> int esauriti = 0;
> int imin = -1;
>
> for (i = 0; i < N; i++) {
>     totale += magazzino[i].quantita * magazzino[i].prezzo;
>     if (magazzino[i].quantita == 0)
>         esauriti++;
>     else if (imin == -1 || magazzino[i].prezzo < magazzino[imin].prezzo)
>         imin = i;
> }
>
> printf("Valore totale: %.2f\n", totale);
> printf("Esauriti: %d\n", esauriti);
> if (imin != -1)
>     printf("Il disponibile piu' economico: %s\n", magazzino[imin].codice);
> else
>     printf("Nessun prodotto disponibile\n");
> ```
> **Perché così.**
> - Il minimo è cercato **solo fra i disponibili**, quindi `imin` non può partire da 0: `magazzino[0]` potrebbe essere esaurito. Parte da $-1$, che vuol dire "nessun candidato ancora", e il primo disponibile lo prende senza confronto.
> - L'ordine in `imin == -1 || ...` conta: se `imin` vale $-1$ la seconda parte non viene valutata (valutazione cortocircuitata), e `magazzino[-1]` non viene mai letto.
> - `quantita * prezzo` è `int * float`, quindi si moltiplica in `float`: niente troncamento.
> - L'`else if` evita un secondo test su `quantita`: chi non è esaurito ha `quantita` maggiore di 0, perché una quantità negativa non ha senso.
>
> Provato con cinque prodotti (A100 3 pezzi a 12,50; B200 0 a 4,00; C300 10 a 2,50; D400 0 a 1,00; E500 2 a 7,25): stampa valore totale 77.00, 2 esauriti e C300. D400 costa meno ma è esaurito, e infatti non viene scelto. Con tutte le quantità a 0 stampa il messaggio.
>
> **Griglia**: ciclo e accesso ai campi con `.` (0,5), totale e conteggio degli esauriti (0,5), minimo fra i soli disponibili con il caso vuoto (0,5).

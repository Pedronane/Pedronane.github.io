---
title: Simulazione provetta 1
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

Simulazione della prima prova teorica intermedia di [Programmazione 1](/uni/prog-1/) del 5/11. Il modello è la <span class="src">prima prova del 22/10/2024</span>, l'unica prima provetta negli archivi del corso: sei domande, 50 minuti, 6 punti, stessi tipi e stessi pesi. Domande e numeri sono nuovi; ogni output è stato compilato ed eseguito con `gcc`.

> [!info] Regole
> - **50 minuti** (la durata del 2024: quella del 2026 va controllata sull'avviso), su carta, niente strumenti elettronici.
> - Il codice si scrive a mano e la leggibilità fa parte del voto.
> - Nelle domande SI/NO rispondi a tutte le righe: nella soluzione **Vero** sta per SI, **Falso** per NO.
> - Punteggio massimo 6. La soglia per passare non è nel testo del 2024: va controllata.

## Testo

### Domanda 1 · 1 punto

Dato il codice

```c
int a = 5, b = 3;
int *p = &a;
int *q;
```

dire se sono ammissibili le seguenti istruzioni:

1. `q = p;`
2. `*p = &b;`
3. `p = &b;`
4. `a = *p + *p;`

dire se sono vere o false le seguenti affermazioni:

5. dopo `p = &a;`, `*p` e `a` indicano la stessa cella di memoria
6. il puntatore `q`, dichiarato e non inizializzato, vale `NULL`
7. `sizeof(char *)` è minore di `sizeof(double *)`
8. con `int v[3] = {1, 2, 3}; int *r = v;` l'espressione `*(r + 1)` vale `2`

### Domanda 2 · 1 punto

Si scriva esattamente l'output mostrato da ciascun frammento.

```c
int i;
for (i = 0; i < 10; i += 3) { printf("%d_", i++); }
```

```c
int i = 0, n = 5;
while (i++ < n) { printf("%d_", i); }
```

```c
int i, n = 10;
for (i = n; i > 0; i /= 2) { printf("%d_", i % 3); }
```

### Domanda 3 · 1 punto

Scrivere un programma che stampi a video la figura seguente. **Obbligatorio usare i cicli**, e il lato $N = 5$ va in una `#define`.

```
1 0 0 0 1
0 1 0 1 0
0 0 1 0 0
0 1 0 1 0
1 0 0 0 1
```

### Domanda 4 · 1 punto

Calcolare la somma tra $(57)_8$ e $(2C)_{16}$, mostrando tutti i passaggi della somma e delle conversioni. Dire poi a quali dei valori seguenti equivale il risultato:

1. $(1011011)_2$
2. $(131)_8$
3. $(5B)_{16}$
4. $(93)_{10}$

### Domanda 5 · 0,5 punti

Completare la tavola di verità.

| X | Y | `!X \|\| Y` | `!(X \|\| Y)` | `X && !Y` | `!(!X && Y)` |
| --- | --- | --- | --- | --- | --- |
| VERO | FALSO | | | | |
| FALSO | VERO | | | | |
| FALSO | FALSO | | | | |
| VERO | VERO | | | | |

### Domanda 6 · 1,5 punti

Si considerino le dichiarazioni

```c
#define N 30
typedef struct {
    char nome[20];
    int eta;
    float voto;
} Studente;
Studente classe[N];
```

con l'array già riempito. Scrivere in C un frammento che stampi la **media dei voti** degli studenti maggiorenni (`eta >= 18`) e il **nome dello studente con il voto più alto** fra tutti. Se non ci sono maggiorenni, al posto della media va stampato un messaggio.

## Correzione

### Domanda 1

> [!example]- Soluzione
> 1. **Vero**. Due puntatori dello stesso tipo: `q` ora punta ad `a` come `p`.
> 2. **Falso**. `*p` è un `int`, `&b` è un indirizzo (`int *`): si assegna un puntatore a un intero. Il `gcc` attuale si ferma con `error: assignment to 'int' from 'int *' makes integer from pointer without a cast`, e in C++ è un errore da sempre.
> 3. **Vero**. Ora `p` punta a `b`.
> 4. **Vero**. `*p` vale `5`, quindi `a` diventa `10`.
> 5. **Vero**. È l'aliasing: `*p = 7;` cambia `a`.
> 6. **Falso**. Una variabile locale non inizializzata ha un valore indefinito, anche se è un puntatore. Dereferenziarlo è un errore.
> 7. **Falso**. Un puntatore contiene un indirizzo, e la sua dimensione non dipende dal tipo puntato (8 byte su una macchina a 64 bit).
> 8. **Vero**. `r + 1` avanza di un `int`, cioè punta a `v[1]`.
>
> **Griglia**: 1/8 di punto per riga.

### Domanda 2

> [!example]- Soluzione
> ```
> 0_4_8_
> 1_2_3_4_5_
> 1_2_2_1_
> ```
> **Primo.** `i` cresce due volte per giro: `i++` dentro la `printf` (stampa il valore **prima** dell'incremento) e `i += 3` alla fine del giro.
>
> | giro | `i` al test | stampa | dopo `i++` | dopo `i += 3` |
> | --- | --- | --- | --- | --- |
> | 1 | 0 | `0_` | 1 | 4 |
> | 2 | 4 | `4_` | 5 | 8 |
> | 3 | 8 | `8_` | 9 | 12 |
> | fine | 12 | esce | | |
>
> **Secondo.** `i++ < n` confronta il valore vecchio e poi incrementa: con `i` a 0 il test è `0 < 5` e la `printf` vede già `1`. L'ultimo test vero è `4 < 5`, che stampa `5`. Poi `5 < 5` è falso, ma l'incremento avviene lo stesso: all'uscita `i` vale 6.
>
> **Terzo.** `i /= 2` è divisione intera: `i` passa per 10, 5, 2, 1, poi 0 ferma il ciclo. I resti modulo 3: $10 \bmod 3 = 1$, $5 \bmod 3 = 2$, $2 \bmod 3 = 2$, $1 \bmod 3 = 1$.

### Domanda 3

> [!example]- Soluzione
> Cella $(r, c)$ con righe e colonne da 0: vale 1 sulla diagonale principale ($r = c$) e su quella secondaria ($r + c = N - 1$).
> ```c
> #include <stdio.h>
> #define N 5
>
> int main(void) {
>     int r, c;
>     for (r = 0; r < N; r++) {
>         for (c = 0; c < N; c++) {
>             if (r == c || r + c == N - 1)
>                 printf("1 ");
>             else
>                 printf("0 ");
>         }
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Controllo: la riga centrale $r = 2$ ha un solo 1, perché $c = 2$ soddisfa le due condizioni insieme. Cambiando `N` in 7 la figura resta una X: è la prova che il codice non dipende dai numeri del disegno.
>
> **Griglia**: doppio ciclo (0,5), condizione corretta e a capo dopo ogni riga (0,5). Una figura ottenuta con cinque `printf` vale zero, perché il testo chiede i cicli.

### Domanda 4

> [!example]- Soluzione
> **Risultato**: $(1011011)_2 = (133)_8 = (5B)_{16} = (91)_{10}$. Quindi 1 **Vero**, 2 **Falso**, 3 **Vero**, 4 **Falso**.
>
> **Conversione in base 2** (ogni cifra ottale sono 3 bit, ogni cifra esadecimale 4):
> - $(57)_8$: $5 = 101$, $7 = 111$, quindi $(101111)_2$.
> - $(2C)_{16}$: $2 = 0010$, $C = 1100$, quindi $(00101100)_2 = (101100)_2$.
>
> **Somma in colonna**, da destra:
> ```
> riporti    1   1 1
>              1 0 1 1 1 1
>          +   1 0 1 1 0 0
>          ---------------
>            1 0 1 1 0 1 1
> ```
> **Controllo in base 10**: $(57)_8 = 5 \cdot 8 + 7 = 47$, $(2C)_{16} = 2 \cdot 16 + 12 = 44$, $47 + 44 = 91$. E $(1011011)_2 = 64 + 16 + 8 + 2 + 1 = 91$.
>
> **Le altre basi** dal binario: gruppi di 3 da destra $1\,011\,011 = (133)_8$; gruppi di 4 $101\,1011 = (5B)_{16}$. $(131)_8 = 89$ e $(93)_{10}$ sono sbagliati di poco apposta: è l'errore di chi dimentica un riporto.

### Domanda 5

> [!example]- Soluzione
> | X | Y | `!X \|\| Y` | `!(X \|\| Y)` | `X && !Y` | `!(!X && Y)` |
> | --- | --- | --- | --- | --- | --- |
> | VERO | FALSO | FALSO | FALSO | VERO | VERO |
> | FALSO | VERO | VERO | FALSO | FALSO | FALSO |
> | FALSO | FALSO | VERO | VERO | FALSO | VERO |
> | VERO | VERO | VERO | FALSO | FALSO | VERO |
>
> Due controlli rapidi: `X && !Y` è la negazione di `!X || Y` (De Morgan), quindi le due colonne sono sempre opposte. `!(!X && Y)` per De Morgan è `X || !Y`, falsa solo con X falso e Y vero.

### Domanda 6

> [!example]- Soluzione
> ```c
> int i;
> int maggiorenni = 0;
> float somma = 0;
> int imax = 0;
>
> for (i = 0; i < N; i++) {
>     if (classe[i].eta >= 18) {
>         maggiorenni++;
>         somma += classe[i].voto;
>     }
>     if (classe[i].voto > classe[imax].voto)
>         imax = i;
> }
>
> if (maggiorenni > 0)
>     printf("Media maggiorenni: %.2f\n", somma / maggiorenni);
> else
>     printf("Nessuno studente maggiorenne\n");
> printf("Voto piu' alto: %s\n", classe[imax].nome);
> ```
> **Perché così.**
> - Un solo ciclo fa tutte e due le cose: conta e somma i maggiorenni, e tiene l'**indice** del massimo (non il voto), perché alla fine serve il nome.
> - `imax` parte da 0, cioè dal primo elemento, non da un voto inventato come `0`: funziona anche con voti negativi o tutti uguali.
> - `somma / maggiorenni` è `float / int`, quindi divisione reale. Se `somma` fosse `int` servirebbe un cast.
> - Il `if (maggiorenni > 0)` evita la divisione per zero, che il testo chiede di gestire.
>
> Provato con cinque studenti (Anna 19 anni 27,5, Bruno 17 anni 30, Carla 20 anni 24, Dario 18 anni 28, Elisa 16 anni 22): stampa media 26,50 e Bruno.
>
> **Griglia**: ciclo e accesso ai campi con `.` (0,5), media con il caso vuoto (0,5), massimo con l'indice e stampa del nome (0,5).

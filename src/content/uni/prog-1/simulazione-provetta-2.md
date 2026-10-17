---
title: Simulazione provetta 2
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

Seconda simulazione della prima prova teorica intermedia di [Programmazione 1](/uni/prog-1/), stessa forma della [prima](/uni/simulazioni/prog-1/simulazione-provetta-1/) e della <span class="src">prova del 22/10/2024</span>. Qui pesano di più gli argomenti di ottobre: conversioni di tipo, array e puntatori, `switch`, complemento a due, stringhe. Ogni output è stato compilato ed eseguito con `gcc`.

> [!info] Regole
> - **50 minuti**, su carta, niente strumenti elettronici.
> - Nelle domande SI/NO rispondi a tutte le righe: **Vero** sta per SI, **Falso** per NO.
> - Punteggio massimo 6.

## Testo

### Domanda 1 · 1 punto

Dire se sono vere o false le affermazioni seguenti (`int` a 4 byte).

1. dopo `int x = 7 / 2;`, `x` vale `3`
2. dopo `float f = 7 / 2;`, `f` vale `3.5`
3. l'espressione `(float) 7 / 2` vale `3.5`
4. dopo `char c = 'A' + 2;`, `c` contiene il carattere `'C'`

Dato `int v[5]; int *p = v;`:

5. `p[2]` e `*(v + 2)` indicano la stessa cella
6. l'istruzione `v = p;` è ammissibile
7. `sizeof(v)` vale `5`
8. l'istruzione `*p++;` incrementa il valore di `v[0]`

### Domanda 2 · 1 punto

Si scriva esattamente l'output mostrato da ciascun frammento.

```c
int n = 2;
switch (n) {
case 1: printf("A");
case 2: printf("B");
case 3: printf("C"); break;
default: printf("D");
}
```

```c
char c;
for (c = 'a'; c < 'f'; c += 2) { printf("%c%d_", c, c - 'a'); }
```

```c
int a[5] = {3, 1, 4, 1, 5};
int *p = a;
printf("%d_", *p + 2);
p += 2;
printf("%d_", *p);
printf("%d_", *(p + 1) * 2);
```

### Domanda 3 · 1 punto

Scrivere un programma che legga da tastiera un intero $N$ compreso fra 1 e 9 (ripetendo la richiesta finché non lo è) e stampi la figura seguente, qui con $N = 4$. **Obbligatorio usare i cicli.**

```
4 3 2 1
3 2 1
2 1
1
```

### Domanda 4 · 1 punto

Su 8 bit in complemento a due: rappresentare $-37$, poi calcolare $25 - 37$ come somma $25 + (-37)$, mostrando tutti i passaggi. Dire poi se sono vere o false:

1. $-37$ in complemento a due su 8 bit è $11011011$
2. il risultato di $25 - 37$ è $11110100$
3. $11110100$ letto come numero naturale vale $244$
4. in complemento a due su 8 bit si può rappresentare $+128$

### Domanda 5 · 0,5 punti

Quali delle espressioni seguenti sono equivalenti a `!(x >= 0 && x < 10)` per ogni `int x`?

1. `x < 0 || x >= 10`
2. `x < 0 && x >= 10`
3. `!(x >= 0) || !(x < 10)`
4. `x <= 0 || x > 10`

### Domanda 6 · 1,5 punti

Data una stringa `char s[100]` già letta e terminata da `'\0'`, scrivere in C un frammento che:

- trasformi in maiuscolo tutte le lettere minuscole di `s`, **senza** usare `toupper` né altre funzioni di libreria;
- conti le vocali di `s` (maiuscole o minuscole);
- stampi la stringa trasformata e il numero di vocali.

## Correzione

### Domanda 1

> [!example]- Soluzione
> 1. **Vero**. `7 / 2` fra due `int` è divisione intera: $3$, il resto si butta.
> 2. **Falso**. La divisione avviene **prima** dell'assegnazione, fra interi: vale $3$, che convertito in `float` diventa `3.0`.
> 3. **Vero**. Il cast ha precedenza sulla divisione: `(float) 7` è `7.0`, e `7.0 / 2` promuove il `2` a `float`.
> 4. **Vero**. Il codice ASCII di `'A'` è 65, $65 + 2 = 67$, che è `'C'`. Le lettere maiuscole sono consecutive.
> 5. **Vero**. `p` vale l'indirizzo di `v[0]`, e `p[2]` è per definizione `*(p + 2)`.
> 6. **Falso**. Il nome di un array non si può riassegnare: `v` non è una variabile puntatore.
> 7. **Falso**. `sizeof` di un array dà i byte totali: $5 \cdot 4 = 20$. Il numero di elementi è `sizeof(v) / sizeof(v[0])`.
> 8. **Falso**. `++` postfisso ha precedenza su `*`: `*p++` è `*(p++)`, legge `v[0]` e sposta `p` su `v[1]`. Per incrementare `v[0]` serve `(*p)++`.
>
> **Griglia**: 1/8 di punto per riga.

### Domanda 2

> [!example]- Soluzione
> ```
> BC
> a0_c2_e4_
> 5_4_2_
> ```
> **Primo.** `n` vale 2: si entra dal `case 2`, si stampa `B`, e senza `break` si prosegue nel `case 3` (fall-through) che stampa `C` e poi esce col `break`. Il `default` non viene toccato.
>
> **Secondo.** `c` prende `'a'`, `'c'`, `'e'`; il passo dopo sarebbe `'g'`, che non è `< 'f'`. `c - 'a'` è la distanza nell'alfabeto: 0, 2, 4. `%c` stampa il carattere, `%d` il numero.
>
> **Terzo.**
>
> | istruzione | `p` punta a | stampa |
> | --- | --- | --- |
> | `*p + 2` | `a[0]` (3) | `5_` (il `+ 2` si somma al valore, non all'indirizzo) |
> | `p += 2` | `a[2]` (4) | |
> | `*p` | `a[2]` | `4_` |
> | `*(p + 1) * 2` | `a[2]`, legge `a[3]` (1) | `2_` |

### Domanda 3

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> int main(void) {
>     int n, r, c;
>     do {
>         printf("N (1-9): ");
>         scanf("%d", &n);
>     } while (n < 1 || n > 9);
>
>     for (r = n; r >= 1; r--) {
>         for (c = r; c >= 1; c--)
>             printf("%d ", c);
>         printf("\n");
>     }
>     return 0;
> }
> ```
> **Perché così.** La riga $r$ (da $N$ a 1) stampa i numeri da $r$ a 1, quindi il ciclo interno parte da `r` e non da `n`. Il `do-while` è il ciclo giusto per l'input controllato: la richiesta va fatta almeno una volta. Controllo con $N = 1$: una sola riga, `1`.
>
> **Griglia**: input con controllo (0,25), doppio ciclo (0,5), a capo e figura esatta (0,25).

### Domanda 4

> [!example]- Soluzione
> **$-37$ su 8 bit.**
> - $37 = 32 + 4 + 1 = (00100101)_2$.
> - Inverto i bit: $11011010$.
> - Sommo 1: $11011011$.
>
> **$25 + (-37)$.** $25 = 16 + 8 + 1 = (00011001)_2$.
> ```
>      0 0 0 1 1 0 0 1      25
>   +  1 1 0 1 1 0 1 1     -37
>   ------------------
>      1 1 1 1 0 1 0 0
> ```
> Il bit più a sinistra è 1: il risultato è negativo. Per leggerlo: inverto ($00001011$) e sommo 1 ($00001100 = 12$), quindi vale $-12$. Torna con $25 - 37 = -12$.
>
> 1. **Vero**.
> 2. **Vero**.
> 3. **Vero**: $128 + 64 + 32 + 16 + 4 = 244$. Sono gli stessi 8 bit letti senza segno, e infatti $244 = 256 - 12$.
> 4. **Falso**. Su 8 bit in complemento a due l'intervallo è $[-128, +127]$: $+128$ non ci sta.

### Domanda 5

> [!example]- Soluzione
> Sono equivalenti la 1 e la 3.
> - 3 è De Morgan applicato alla lettera: $\lnot(A \land B) = \lnot A \lor \lnot B$.
> - 1 è la 3 con le negazioni sciolte: `!(x >= 0)` è `x < 0`, `!(x < 10)` è `x >= 10`.
> - 2 usa `&&`: nessun numero è insieme negativo e almeno 10, quindi è sempre falsa.
> - 4 sbaglia i bordi: con `x = 0` l'originale è falsa (0 sta in $[0, 10)$) ma `x <= 0` è vera; con `x = 10` l'originale è vera ma `x > 10` è falsa.

### Domanda 6

> [!example]- Soluzione
> ```c
> int i;
> int vocali = 0;
>
> for (i = 0; s[i] != '\0'; i++) {
>     if (s[i] >= 'a' && s[i] <= 'z')
>         s[i] = s[i] - 'a' + 'A';
>     switch (s[i]) {
>     case 'A': case 'E': case 'I': case 'O': case 'U':
>         vocali++;
>     }
> }
> printf("%s\n%d vocali\n", s, vocali);
> ```
> **Perché così.**
> - Il ciclo si ferma sul `'\0'`, non su 100: la stringa può essere più corta dell'array.
> - `s[i] - 'a' + 'A'` usa il fatto che in ASCII minuscole e maiuscole sono due blocchi consecutivi, a distanza fissa ($'a' - 'A' = 32$). Il controllo `>= 'a' && <= 'z'` lascia stare cifre, spazi e punteggiatura.
> - Le vocali si contano **dopo** la trasformazione, così basta controllare le maiuscole. Lo `switch` con più `case` sulla stessa riga sfrutta il fall-through.
>
> Provato con `"Ciao, Programmazione 1!"`: stampa `CIAO, PROGRAMMAZIONE 1!` e 9 vocali.
>
> **Griglia**: ciclo fino a `'\0'` (0,5), trasformazione con il controllo dell'intervallo (0,5), conteggio e stampa (0,5).

---
title: Simulazione provetta 4
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

Quarta simulazione della prima prova teorica intermedia di [Programmazione 1](/uni/prog-1/), la più difficile delle quattro. Stessa forma della <span class="src">prova del 22/10/2024</span> e della [terza](/uni/simulazioni/prog-1/simulazione-provetta-3/), ma con doppio puntatore e `const`, puntatori che scorrono un array, complemento a due con overflow, una tavola a tre variabili e un algoritmo che non è un semplice conteggio. Programma fino ai puntatori (deck 6.1), niente funzioni oltre a `main`. Ogni output è stato compilato ed eseguito con `gcc`, i conti in binario e la tavola controllati con Python.

> [!info] Regole
> - **50 minuti**, su carta, niente strumenti elettronici.
> - Il codice si scrive a mano e la leggibilità fa parte del voto.
> - Nelle domande SI/NO rispondi a tutte le righe: nella soluzione **Vero** sta per SI, **Falso** per NO.
> - Punteggio massimo 6.

## Testo

### Domanda 1 · 1 punto

Dato il codice

```c
int v[4] = {2, 4, 6, 8};
int *p = v + 1;
int **pp = &p;
const int *c = v;
```

dire se sono ammissibili le seguenti istruzioni:

1. `*pp = v + 3;`
2. `**pp = 0;`
3. `*c = 5;`
4. `c = p;`

dire se sono vere o false le seguenti affermazioni, ognuna a partire dal codice iniziale:

5. `*(p + 2)` vale `8`
6. `p - v` vale `4`, perché un `int` occupa 4 byte
7. `pp + 1` punta a `v[2]`
8. l'espressione `p[-1]` è lecita e vale `2`

### Domanda 2 · 1 punto

Si scriva esattamente l'output mostrato da ciascun frammento.

```c
int i = 0, s = 0;
while (s < 20) { s += i++; printf("%d_", s); }
```

```c
int i, j;
for (i = 1; i <= 4; i++) {
    for (j = 1; j <= 4; j++) {
        if (j > i) break;
        if ((i + j) % 2) continue;
        printf("%d%d_", i, j);
    }
}
```

```c
int a[6] = {4, 7, 2, 6, 9, 3};
int *p = a;
while (*p != 9) {
    printf("%d_", *p + (int)(p - a));
    p += *p % 3;
}
```

### Domanda 3 · 1 punto

Scrivere un programma che stampi a video la piramide seguente, con il numero di righe $N = 4$ definito con `#define`. **Obbligatorio usare i cicli**, e il programma deve funzionare per ogni $N$ da 1 a 9.

```
   1
  121
 12321
1234321
```

### Domanda 4 · 1 punto

Su 8 bit in complemento a due: rappresentare $98$, $-53$ e $-90$; calcolare $98 + (-53)$ e $(-53) + (-90)$, mostrando tutti i passaggi. Dire poi se sono vere o false:

1. $-53$ in complemento a due su 8 bit è $11001011$
2. nella somma $98 + (-53)$ esce un riporto dal bit più a sinistra, quindi il risultato è sbagliato (overflow)
3. $(-53) + (-90)$ su 8 bit dà il risultato corretto
4. la sequenza $11001011$ letta in modulo e segno vale $-75$

### Domanda 5 · 0,5 punti

Completare la tavola di verità, poi dire se la prima e la terza colonna sono uguali.

| A | B | C | `A \|\| B && !C` | `!(A && B) && C` | `(A \|\| B) && !C` |
| --- | --- | --- | --- | --- | --- |
| FALSO | FALSO | FALSO | | | |
| FALSO | FALSO | VERO | | | |
| FALSO | VERO | FALSO | | | |
| FALSO | VERO | VERO | | | |
| VERO | FALSO | FALSO | | | |
| VERO | FALSO | VERO | | | |
| VERO | VERO | FALSO | | | |
| VERO | VERO | VERO | | | |

### Domanda 6 · 1,5 punti

Si considerino le dichiarazioni

```c
#define N 30
typedef struct {
    int giorno;
    float temp;
} Misura;
Misura serie[N];
```

con l'array già riempito, una misura al giorno in ordine di giorno. Scrivere in C un frammento che stampi:

- la **temperatura media** e **quanti giorni** hanno una temperatura strettamente maggiore della media;
- la **salita più lunga**: la sequenza più lunga di giorni consecutivi con temperatura strettamente crescente. Va stampato il giorno in cui comincia e quanti giorni dura. Un giorno da solo è una salita lunga 1; a parità di lunghezza vale la prima.

Almeno uno dei cicli va scritto scorrendo l'array con un puntatore a `Misura` e l'operatore `->`, senza indici.

## Correzione

### Domanda 1

> [!example]- Soluzione
> I tipi: `p` è `int *` e punta a `v[1]`; `pp` è `int **` e punta a `p`; `c` è `const int *` e punta a `v[0]`.
>
> 1. **Vero**. `*pp` è `p` stesso (tipo `int *`), e `v + 3` è un `int *`: ora `p` punta a `v[3]`. Si sposta `p` passando dal suo indirizzo.
> 2. **Vero**. `**pp` è `*p`, cioè un `int`: azzera la cella puntata da `p`. Partendo dal codice iniziale è `v[1]`; dopo la riga 1 sarebbe `v[3]` (provato: `v` diventa `2 4 6 0`).
> 3. **Falso**. `c` è un puntatore a `int` **costante**: attraverso `c` si legge, non si scrive. `gcc` dà `error: assignment of read-only location '*c'`. `v[0] = 5` per nome invece resta lecito.
> 4. **Vero**. Si sposta il puntatore `c`, che non è costante. Da `int *` a `const int *` si può passare: si aggiunge un divieto. Il contrario, `p = c;`, toglierebbe il `const` e `gcc` avvisa `assignment discards 'const' qualifier`.
> 5. **Vero**. `p + 2` è due elementi dopo `v[1]`, cioè `v[3]`, che vale 8.
> 6. **Falso**. La differenza fra due puntatori allo stesso array conta gli **elementi**, non i byte: `p - v` vale 1.
> 7. **Falso**. `pp` è un `int **`, quindi `pp + 1` avanza di un `int *` a partire da `&p`: punta alla memoria subito dopo la variabile `p`, che non c'entra con `v`. Un `int **` non può nemmeno puntare a un `int`. Provato: `pp + 1` è uguale a `&p + 1` e diverso da `&v[2]`.
> 8. **Vero**. `p[-1]` è per definizione `*(p - 1)`, e `p - 1` è `v[0]`, che sta dentro l'array. Vale 2. Un indice negativo è lecito finché la cella esiste.
>
> **Griglia**: 1/8 di punto per riga.

### Domanda 2

> [!example]- Soluzione
> ```
> 0_1_3_6_10_15_21_
> 11_22_31_33_42_44_
> 4_8_4_
> ```
> **Primo.** `s += i++` somma il valore **vecchio** di `i`, poi lo incrementa. Il test è su `s`, non su `i`.
>
> | giro | `s` al test | somma | `s` dopo | `i` dopo | stampa |
> | --- | --- | --- | --- | --- | --- |
> | 1 | 0 | $0 + 0$ | 0 | 1 | `0_` |
> | 2 | 0 | $0 + 1$ | 1 | 2 | `1_` |
> | 3 | 1 | $1 + 2$ | 3 | 3 | `3_` |
> | 4 | 3 | $3 + 3$ | 6 | 4 | `6_` |
> | 5 | 6 | $6 + 4$ | 10 | 5 | `10_` |
> | 6 | 10 | $10 + 5$ | 15 | 6 | `15_` |
> | 7 | 15 | $15 + 6$ | 21 | 7 | `21_` |
> | | 21 | `21 < 20` falso, esce | | | |
>
> Il 21 si stampa anche se supera 20: il test viene fatto all'inizio del giro dopo.
>
> **Secondo.** Il `break` esce **solo dal ciclo interno**, quindi `j` va da 1 a `i`. Il `continue` salta le coppie con `i + j` dispari (`(i + j) % 2` vale 1, cioè vero).
>
> | `i` | `j` visitati | `i + j` | stampa |
> | --- | --- | --- | --- |
> | 1 | 1 | 2 | `11_` |
> | 2 | 1, 2 | 3, 4 | `22_` |
> | 3 | 1, 2, 3 | 4, 5, 6 | `31_33_` |
> | 4 | 1, 2, 3, 4 | 5, 6, 7, 8 | `42_44_` |
>
> **Terzo.** `p` non avanza di 1: avanza di `*p % 3` celle. `p - a` è l'indice a cui punta `p` (il cast a `int` serve perché la differenza di due puntatori non è un `int` e `%d` lo vuole).
>
> | `p` punta a | `*p` | `*p != 9` | stampa `*p + (p - a)` | passo `*p % 3` |
> | --- | --- | --- | --- | --- |
> | `a[0]` | 4 | vero | $4 + 0$ → `4_` | 1 |
> | `a[1]` | 7 | vero | $7 + 1$ → `8_` | 1 |
> | `a[2]` | 2 | vero | $2 + 2$ → `4_` | 2 |
> | `a[4]` | 9 | falso, esce | | |
>
> `a[3]` viene saltato. Se una cella prima del 9 valesse un multiplo di 3 il passo sarebbe 0 e il ciclo non finirebbe più: qui non succede.

### Domanda 3

> [!example]- Soluzione
> La riga $r$ (da 1 a $N$) è fatta di tre pezzi: $N - r$ spazi, i numeri da 1 a $r$, i numeri da $r - 1$ a 1. Con $N = 4$ e $r = 3$: uno spazio, `123`, `21`.
> ```c
> #include <stdio.h>
> #define N 4
>
> int main(void) {
>     int r, c;
>     for (r = 1; r <= N; r++) {
>         for (c = 1; c <= N - r; c++)
>             printf(" ");
>         for (c = 1; c <= r; c++)
>             printf("%d", c);
>         for (c = r - 1; c >= 1; c--)
>             printf("%d", c);
>         printf("\n");
>     }
>     return 0;
> }
> ```
> **Controlli.** Nella prima riga il terzo ciclo parte da 0 e non gira: stampa solo `1`. Nell'ultima gli spazi sono $N - N = 0$. Con `N` 6 l'ultima riga è `12345654321` (provato). Oltre 9 la figura si rompe perché i numeri diventano di due cifre: per questo il testo si ferma a 9.
>
> **Griglia**: ciclo esterno e spazi iniziali (0,25), parte crescente (0,25), parte decrescente che non ripete il centro (0,25), a capo e figura esatta (0,25).

### Domanda 4

> [!example]- Soluzione
> **Le rappresentazioni.**
> - $98 = 64 + 32 + 2 = (01100010)_2$.
> - $-53$: $53 = 32 + 16 + 4 + 1 = (00110101)_2$; inverto i bit, $11001010$; sommo 1, $11001011$.
> - $-90$: $90 = 64 + 16 + 8 + 2 = (01011010)_2$; inverto, $10100101$; sommo 1, $10100110$.
>
> **$98 + (-53)$.**
> ```
> riporti   (1) 1         1
>               0 1 1 0 0 0 1 0      98
>           +   1 1 0 0 1 0 1 1     -53
>               ---------------
>               0 0 1 0 1 1 0 1
> ```
> Il riporto che esce dal bit 7, fra parentesi, si scarta. Il risultato $00101101 = 32 + 8 + 4 + 1 = 45$, e $98 - 53 = 45$: è giusto.
>
> **$(-53) + (-90)$.**
> ```
> riporti   (1)       1 1 1
>               1 1 0 0 1 0 1 1     -53
>           +   1 0 1 0 0 1 1 0     -90
>               ---------------
>               0 1 1 1 0 0 0 1
> ```
> Due numeri negativi danno un risultato con il bit più a sinistra a 0, cioè positivo: $01110001 = 113$. È **overflow**: $-53 - 90 = -143$, e su 8 bit l'intervallo è $[-128, +127]$.
>
> 1. **Vero**.
> 2. **Falso**. In complemento a due il riporto fuori dal bit 7 non è un errore: si butta, ed è anzi il motivo per cui la sottrazione diventa una somma. L'overflow si riconosce dai segni: c'è solo se i due addendi hanno lo stesso segno e il risultato ha segno opposto. Qui $98$ e $-53$ hanno segni diversi, quindi l'overflow è impossibile.
> 3. **Falso**: è il caso di overflow visto sopra.
> 4. **Vero**. In modulo e segno il primo bit è il segno (1, negativo) e gli altri 7 sono il modulo: $1001011 = 64 + 8 + 2 + 1 = 75$. Gli stessi 8 bit valgono $-53$ in complemento a due e $203$ come naturale.

### Domanda 5

> [!example]- Soluzione
> | A | B | C | `A \|\| B && !C` | `!(A && B) && C` | `(A \|\| B) && !C` |
> | --- | --- | --- | --- | --- | --- |
> | FALSO | FALSO | FALSO | FALSO | FALSO | FALSO |
> | FALSO | FALSO | VERO | FALSO | VERO | FALSO |
> | FALSO | VERO | FALSO | VERO | FALSO | VERO |
> | FALSO | VERO | VERO | FALSO | VERO | FALSO |
> | VERO | FALSO | FALSO | VERO | FALSO | VERO |
> | VERO | FALSO | VERO | VERO | VERO | FALSO |
> | VERO | VERO | FALSO | VERO | FALSO | VERO |
> | VERO | VERO | VERO | VERO | FALSO | FALSO |
>
> - `A || B && !C` si legge `A || (B && !C)`, perché `&&` lega più di `||`: con A vero è sempre vera (ultime quattro righe), con A falso vale `B && !C`.
> - `!(A && B) && C`: serve C vero e "non tutti e due A e B". Vera nelle righe con C vero tranne l'ultima.
> - `(A || B) && !C`: serve C falso e almeno uno fra A e B.
>
> **La prima e la terza non sono uguali**: differiscono nelle righe VERO, FALSO, VERO e VERO, VERO, VERO. Lì A è vero e C è vero: senza parentesi A basta da solo, con le parentesi `!C` falso spegne tutto. Le parentesi cambiano il significato.

### Domanda 6

> [!example]- Soluzione
> ```c
> Misura *p;
> float somma = 0;
> float media;
> int sopra = 0;
> int i;
> int lung = 1;
> int inizio = 0;
> int best_lung = 1;
> int best_inizio = 0;
>
> for (p = serie; p < serie + N; p++)
>     somma += p->temp;
> media = somma / N;
> for (p = serie; p < serie + N; p++)
>     if (p->temp > media)
>         sopra++;
> printf("Media: %.2f, giorni sopra la media: %d\n", media, sopra);
>
> for (i = 1; i < N; i++) {
>     if (serie[i].temp > serie[i - 1].temp) {
>         lung++;
>     } else {
>         lung = 1;
>         inizio = i;
>     }
>     if (lung > best_lung) {
>         best_lung = lung;
>         best_inizio = inizio;
>     }
> }
> printf("Salita piu' lunga: dal giorno %d, %d giorni\n", serie[best_inizio].giorno, best_lung);
> ```
> **Perché così.**
> - **Due passate per la media**: quanti giorni stanno sopra la media si sa solo dopo averla calcolata, quindi serve un secondo ciclo. Un ciclo solo non basta.
> - **Puntatore**: `p` parte da `serie` (l'indirizzo di `serie[0]`) e si ferma a `serie + N`, una cella dopo l'ultima, che si confronta ma non si dereferenzia. `p++` avanza di una `Misura` intera. `p->temp` è `(*p).temp`.
> - **Salita**: `lung` è la lunghezza della salita che finisce al giorno `i`, `inizio` dove comincia. Se la temperatura sale si allunga, altrimenti ne parte una nuova da `i`. Il ciclo parte da 1 perché confronta ogni giorno con il precedente: partendo da 0 leggerebbe `serie[-1]`, fuori dall'array.
> - Il confronto `lung > best_lung` è stretto: a parità resta la salita trovata prima, come chiede il testo. Lo stesso vale per `>` fra le temperature: due giorni uguali interrompono la salita.
> - `best_inizio` è un indice, e si stampa `serie[best_inizio].giorno`, non l'indice: il testo chiede il giorno.
>
> Provato con otto giorni (12,0; 13,5; 11,0; 11,5; 14,0; 16,5; 16,5; 18,0): stampa media 14.12, 3 giorni sopra la media e la salita dal giorno 3 per 4 giorni (11,0, 11,5, 14,0, 16,5). Il secondo 16,5 interrompe la salita perché non è strettamente maggiore. Con temperature tutte decrescenti stampa dal giorno 1 per 1 giorno; tutte crescenti, dal giorno 1 per 8.
>
> **Griglia**: media e conteggio con le due passate (0,5), almeno un ciclo con puntatore e `->` scritto bene (0,25), salita con lunghezza corrente e migliore, ripartenza corretta e stampa del giorno (0,75).

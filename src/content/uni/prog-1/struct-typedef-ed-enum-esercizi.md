---
title: Struct, typedef ed enum (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-14
lezioni: []
ordine: 15
---

Esercizi tipo esame di [Struct, typedef ed enum](/uni/prog-1/struct-typedef-ed-enum/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Gli esercizi 6, 8, 9, 10 e 11 sono sul modello della domanda 6 della provetta (algoritmo su un array di struct, 1,5 punti): all'esame basta il frammento con le dichiarazioni e il ciclo, anche in pseudocodice, ma qui ogni soluzione è un programma completo compilato e provato. Per i tracing: tabella con una riga per giro del ciclo.

**Esercizio 1.** Quanta memoria viene allocata (somma dei campi, `int` e `float` da 4 byte)?

- a) `struct p { int x; int y; };`
- b) `struct p { int x; int y; } a, b, c;`
- c) `typedef struct { char nome[20]; float voti[5]; int matricola; } stud; stud classe[30];`

> [!example]- Soluzione
> - a) **Nessuna**: è solo la definizione del tipo.
> - b) Tre variabili da $4 + 4 = 8$ byte: **24 byte**.
> - c) Un `stud` occupa $20 + 5 \cdot 4 + 4 = 44$ byte; l'array ne contiene 30: $44 \cdot 30 = 1320$ byte. Anche qui la riga `typedef` da sola non alloca niente: alloca la dichiarazione di `classe`.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

typedef struct {
    char sigla;
    int qta;
} articolo;

int main(void)
{
    articolo m[4] = {{'A', 3}, {'B', 0}, {'C', 7}, {'D', 2}};
    int i;
    int tot = 0;

    for (i = 0; i < 4; i++) {
        if (m[i].qta > 2) {
            tot += m[i].qta;
            printf("%c", m[i].sigla);
        } else {
            m[i].qta += 5;
        }
    }
    printf(" %d %d %d\n", tot, m[1].qta, m[3].qta);
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce un ciclo su un array di struct con un `if-else` su un campo: nel ramo vero si somma e si stampa, nel ramo falso si **modifica** l'elemento.
>
> | `i` | `m[i]` | `m[i].qta > 2` | ramo | `tot` | stampato finora |
> | --- | --- | --- | --- | --- | --- |
> | 0 | A, 3 | 3 > 2 sì | `tot += 3`, stampa A | 3 | `A` |
> | 1 | B, 0 | 0 > 2 no | `m[1].qta` diventa 5 | 3 | `A` |
> | 2 | C, 7 | 7 > 2 sì | `tot += 7`, stampa C | 10 | `AC` |
> | 3 | D, 2 | 2 > 2 no | `m[3].qta` diventa 7 | 10 | `AC` |
>
> L'ultimo `printf` aggiunge uno spazio, `tot`, `m[1].qta` e `m[3].qta`. Output: `AC 10 5 7` (verificato). Il tranello è la riga 3: `2 > 2` è falso, quindi D non viene stampata e la sua quantità cresce.

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

typedef struct {
    int x;
    int y;
} punto;

typedef struct {
    char nome[10];
    punto pos;
    int vite;
} giocatore;

int main(void)
{
    giocatore g1 = {"Ada", {2, 3}, 3};
    giocatore g2;

    g2 = g1;
    g2.nome[0] = 'E';
    g2.pos.x = g2.pos.x + g1.vite;
    g1.vite--;
    printf("%s %d %d %d\n", g1.nome, g1.pos.x, g1.pos.y, g1.vite);
    printf("%s %d %d %d\n", g2.nome, g2.pos.x, g2.pos.y, g2.vite);
    return 0;
}
```

> [!example]- Soluzione
> L'assegnazione `g2 = g1` copia **tutti** i campi, compreso l'array `nome` e la struct `pos`: dopo, le due variabili sono indipendenti.
>
> | istruzione | `g1` | `g2` |
> | --- | --- | --- |
> | iniziale | "Ada", (2, 3), 3 | indefinito |
> | `g2 = g1` | "Ada", (2, 3), 3 | "Ada", (2, 3), 3 |
> | `g2.nome[0] = 'E'` | invariato | "Eda", (2, 3), 3 |
> | `g2.pos.x = g2.pos.x + g1.vite` | invariato | "Eda", (5, 3), 3 |
> | `g1.vite--` | "Ada", (2, 3), 2 | invariato |
>
> ```
> Ada 2 3 2
> Eda 5 3 3
> ```
> (verificato). Il trabocchetto: chi pensa che `g2 = g1` faccia "puntare" `g2` a `g1` si aspetta `Eda` anche nella prima riga.

**Esercizio 4.** Scrivi l'output esatto.

```c
#include <stdio.h>

typedef enum { LUN = 1, MAR, MER, GIO = 10, VEN, SAB = 20, DOM } giorno;

int main(void)
{
    giorno g = MER;
    giorno h = VEN;

    printf("%d %d %d %d\n", MAR, g, h, DOM);
    printf("%d %d\n", h - g, g < h);
    return 0;
}
```

> [!example]- Soluzione
> Si assegnano i valori da sinistra: `LUN` 1, `MAR` 2, `MER` 3, `GIO` 10 (esplicito), `VEN` 11, `SAB` 20 (esplicito), `DOM` 21.
>
> Prima riga: `2 3 11 21`. Seconda: $11 - 3 = 8$, e `3 < 11` è vero, cioè 1: `8 1` (verificato).

**Esercizio 5.** Trova gli errori.

```
struct studente {
    char nome[20];
    int voto;
}
studente s;
s.nome = "Anna";
scanf("%d", s.voto);
if (s == t) ...
```

> [!example]- Soluzione
> 1. Manca il `;` dopo la graffa di chiusura della definizione.
> 2. `studente s;`: in C il tipo è `struct studente`, oppure serve un `typedef`.
> 3. `s.nome = "Anna";`: `nome` è un array, non si assegna. Si inizializza nella dichiarazione (`struct studente s = {"Anna", 0};`) o si copia con un ciclo o `strcpy`.
> 4. `scanf("%d", s.voto)`: manca `&`, deve essere `&s.voto`.
> 5. `s == t`: due struct non si confrontano con l'uguaglianza (non compila). Si confrontano i campi.

**Esercizio 6.** Con le dichiarazioni della provetta

```
#define N 6
typedef struct {
    float valore;
    int indice;
} Dato;
Dato dati[N];
```

scrivi un algoritmo che stampi la media dei `valore` degli elementi con `indice` pari, oppure un messaggio se nessun elemento ha indice pari. Provalo con `{2.0, 4}, {-1.0, 3}, {5.5, 0}, {0.5, 7}, {3.0, 2}, {-4.0, 9}`.

> [!example]- Soluzione
> Si riconosce una **media condizionata**: somma e contatore aggiornati solo quando la condizione è vera, divisione dopo il ciclo e solo se il contatore non è zero. "Pari" è `indice % 2 == 0`.
>
> ```c
> #include <stdio.h>
>
> #define N 6
>
> typedef struct {
>     float valore;
>     int indice;
> } Dato;
>
> int main(void)
> {
>     Dato dati[N] = {{2.0f, 4}, {-1.0f, 3}, {5.5f, 0}, {0.5f, 7}, {3.0f, 2}, {-4.0f, 9}};
>     int i;
>     int quanti = 0;
>     float somma = 0;
>
>     for (i = 0; i < N; i++) {
>         if (dati[i].indice % 2 == 0) {
>             somma += dati[i].valore;
>             quanti++;
>         }
>     }
>     if (quanti == 0)
>         printf("nessun indice pari\n");
>     else
>         printf("media dei valori con indice pari: %.2f su %d elementi\n", somma / quanti, quanti);
>     return 0;
> }
> ```
>
> | `i` | `indice` | pari? | `valore` | `somma` | `quanti` |
> | --- | --- | --- | --- | --- | --- |
> | 0 | 4 | sì | 2.0 | 2.0 | 1 |
> | 1 | 3 | no | | 2.0 | 1 |
> | 2 | 0 | sì (0 % 2 vale 0) | 5.5 | 7.5 | 2 |
> | 3 | 7 | no | | 7.5 | 2 |
> | 4 | 2 | sì | 3.0 | 10.5 | 3 |
> | 5 | 9 | no | | 10.5 | 3 |
>
> $10.5 / 3 = 3.5$. Output: `media dei valori con indice pari: 3.50 su 3 elementi` (verificato). Lo 0 è pari: chi lo salta ottiene $5.0 / 2 = 2.5$. Con `float somma` la divisione è fra reali; con `int somma` sarebbe sbagliata due volte (i valori sono decimali).

**Esercizio 7.** Definisci un tipo `mezzo` con targa (7 caratteri), tipo (`AUTO`, `MOTO`, `CAMION`) e peso in tonnellate. Inizializza un array di 3 mezzi, stampali con il tipo come testo e stampa il peso totale.

> [!example]- Soluzione
> È lo schema A ed E della prova al calcolatore: enum per l'elenco chiuso, struct per il dato, `switch` per l'etichetta.
>
> ```c
> #include <stdio.h>
>
> typedef enum { AUTO, MOTO, CAMION } tipo_mezzo;
>
> typedef struct {
>     char targa[8];
>     tipo_mezzo tipo;
>     float peso;
> } mezzo;
>
> int main(void)
> {
>     mezzo parco[3] = {{"AB123CD", AUTO, 1.2f}, {"EF456GH", CAMION, 7.5f}, {"IL789MN", MOTO, 0.2f}};
>     int i;
>     float totale = 0;
>
>     for (i = 0; i < 3; i++) {
>         printf("%s ", parco[i].targa);
>         switch (parco[i].tipo) {
>         case AUTO:
>             printf("AUTO");
>             break;
>         case MOTO:
>             printf("MOTO");
>             break;
>         case CAMION:
>             printf("CAMION");
>             break;
>         default:
>             printf("N/A");
>             break;
>         }
>         printf(" %.1f t\n", parco[i].peso);
>         totale += parco[i].peso;
>     }
>     printf("peso totale %.1f t\n", totale);
>     return 0;
> }
> ```
>
> Output (verificato):
> ```
> AB123CD AUTO 1.2 t
> EF456GH CAMION 7.5 t
> IL789MN MOTO 0.2 t
> peso totale 8.9 t
> ```
> `targa[8]`: 7 caratteri più `'\0'`. `parco[i].targa` si legge da sinistra: l'elemento `i` dell'array, poi il suo campo.

**Esercizio 8.** Un listino è un array di `prodotto` (`int codice; float prezzo;`). Per ognuno dei codici 231, 58, 999 stampa la posizione e il prezzo del **primo** prodotto con quel codice, oppure "non trovato". Listino: `{104, 2.5}, {231, 9.9}, {77, 1.2}, {231, 4.0}, {58, 3.3}`.

> [!example]- Soluzione
> Si riconosce una **ricerca sequenziale**: ci si ferma al primo elemento che va bene, quindi serve un `while` con due condizioni (array non finito, elemento diverso da quello cercato), non un `for` che arriva sempre in fondo.
>
> ```c
> #include <stdio.h>
>
> #define N 5
>
> typedef struct {
>     int codice;
>     float prezzo;
> } prodotto;
>
> int main(void)
> {
>     prodotto listino[N] = {{104, 2.5f}, {231, 9.9f}, {77, 1.2f}, {231, 4.0f}, {58, 3.3f}};
>     int cerca[3] = {231, 58, 999};
>     int k;
>     int i;
>
>     for (k = 0; k < 3; k++) {
>         i = 0;
>         while (i < N && listino[i].codice != cerca[k])
>             i++;
>         if (i < N)
>             printf("%d in posizione %d, prezzo %.2f\n", cerca[k], i, listino[i].prezzo);
>         else
>             printf("%d non trovato\n", cerca[k]);
>     }
>     return 0;
> }
> ```
>
> | cercato | `i` visitati | si ferma perché | `i` finale |
> | --- | --- | --- | --- |
> | 231 | 0 (104), 1 (231) | codice uguale | 1 |
> | 58 | 0, 1, 2, 3, 4 (58) | codice uguale | 4 |
> | 999 | 0, 1, 2, 3, 4 | `i < N` falso con `i` = 5 | 5 |
>
> Output (verificato):
> ```
> 231 in posizione 1, prezzo 9.90
> 58 in posizione 4, prezzo 3.30
> 999 non trovato
> ```
> Il secondo 231 (posizione 3) non viene mai raggiunto: la ricerca si ferma al primo. L'ordine delle condizioni conta: con `i` = 5 il cortocircuito di `&&` salta `listino[5].codice`, che è fuori dall'array. Scritte al contrario leggerebbero una cella che non esiste. Dopo il ciclo si decide con `i < N`, non rileggendo l'elemento.

**Esercizio 9.** Leggi 4 studenti (nome e voto) in un array di struct e stampa il migliore (il primo in caso di parità) e la media con due decimali.

> [!example]- Soluzione
> Combinazione di tre schemi: lettura in un array, massimo con la sua posizione ([Array](/uni/prog-1/array/)), media senza divisione intera ([Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/)). Si tiene l'**indice** del migliore, non una copia.
>
> ```c
> #include <stdio.h>
>
> #define N 4
>
> typedef struct {
>     char nome[20];
>     int voto;
> } studente;
>
> int main(void)
> {
>     studente classe[N];
>     int i;
>     int migliore = 0;
>     int somma = 0;
>
>     for (i = 0; i < N; i++) {
>         if (scanf("%19s %d", classe[i].nome, &classe[i].voto) != 2) {
>             printf("input non valido\n");
>             return 1;
>         }
>         somma += classe[i].voto;
>         if (classe[i].voto > classe[migliore].voto)
>             migliore = i;
>     }
>     printf("migliore: %s con %d\n", classe[migliore].nome, classe[migliore].voto);
>     printf("media: %.2f\n", (float)somma / N);
>     return 0;
> }
> ```
>
> Con input `Anna 27`, `Bruno 30`, `Carla 24`, `Dario 30` stampa `migliore: Bruno con 30` e `media: 27.75` (verificati). Dario ha lo stesso voto ma non lo sostituisce, perché il confronto è `>` e non `>=`. Il confronto con `classe[migliore]` dentro il ciclo di lettura funziona perché `migliore` è sempre un indice già letto (al primo giro `i` e `migliore` sono entrambi 0). Nel `scanf`, `classe[i].nome` senza `&` (array) e `&classe[i].voto` con `&` (intero).

**Esercizio 10.** Una gara è un array di 6 `atleta` (`char nome[20]; medaglia premio; float tempo;`, con `typedef enum { ORO, ARGENTO, BRONZO } medaglia;`). Stampa per ogni medaglia, come testo, quanti atleti l'hanno presa e chi ha il tempo migliore (il più basso) fra loro. Dati: Ada BRONZO 12.4, Bea ORO 11.8, Cloe ARGENTO 12.1, Dora BRONZO 12.0, Eva ORO 11.5, Fede BRONZO 12.9.

> [!example]- Soluzione
> Si riconosce un **conteggio per categoria**: invece di tre contatori con tre `if`, un array di contatori indicizzato dal valore dell'enum, che è un intero da 0 a 2. Lo stesso trucco per il migliore di ogni categoria, con -1 per dire "ancora nessuno".
>
> ```c
> #include <stdio.h>
>
> #define N 6
>
> typedef enum { ORO, ARGENTO, BRONZO } medaglia;
>
> typedef struct {
>     char nome[20];
>     medaglia premio;
>     float tempo;
> } atleta;
>
> int main(void)
> {
>     atleta gara[N] = {{"Ada", BRONZO, 12.4f}, {"Bea", ORO, 11.8f}, {"Cloe", ARGENTO, 12.1f},
>                       {"Dora", BRONZO, 12.0f}, {"Eva", ORO, 11.5f}, {"Fede", BRONZO, 12.9f}};
>     int conta[3] = {0, 0, 0};
>     int migliore[3] = {-1, -1, -1};
>     int i;
>     int m;
>
>     for (i = 0; i < N; i++) {
>         m = gara[i].premio;
>         conta[m]++;
>         if (migliore[m] == -1 || gara[i].tempo < gara[migliore[m]].tempo)
>             migliore[m] = i;
>     }
>     for (m = ORO; m <= BRONZO; m++) {
>         switch (m) {
>         case ORO:
>             printf("ORO");
>             break;
>         case ARGENTO:
>             printf("ARGENTO");
>             break;
>         case BRONZO:
>             printf("BRONZO");
>             break;
>         default:
>             printf("N/A");
>             break;
>         }
>         printf(": %d, miglior tempo %s %.1f\n", conta[m], gara[migliore[m]].nome, gara[migliore[m]].tempo);
>     }
>     return 0;
> }
> ```
>
> | `i` | atleta | `m` | `conta` dopo | confronto | `migliore` dopo |
> | --- | --- | --- | --- | --- | --- |
> | 0 | Ada, BRONZO, 12.4 | 2 | 0 0 1 | `migliore[2]` è -1 | -1 -1 0 |
> | 1 | Bea, ORO, 11.8 | 0 | 1 0 1 | `migliore[0]` è -1 | 1 -1 0 |
> | 2 | Cloe, ARGENTO, 12.1 | 1 | 1 1 1 | `migliore[1]` è -1 | 1 2 0 |
> | 3 | Dora, BRONZO, 12.0 | 2 | 1 1 2 | 12.0 < 12.4 sì | 1 2 3 |
> | 4 | Eva, ORO, 11.5 | 0 | 2 1 2 | 11.5 < 11.8 sì | 4 2 3 |
> | 5 | Fede, BRONZO, 12.9 | 2 | 2 1 3 | 12.9 < 12.0 no | 4 2 3 |
>
> Output (verificato):
> ```
> ORO: 2, miglior tempo Eva 11.5
> ARGENTO: 1, miglior tempo Cloe 12.1
> BRONZO: 3, miglior tempo Dora 12.0
> ```
> Il cortocircuito di `||` è essenziale: quando `migliore[m]` vale -1 la seconda condizione, che leggerebbe `gara[-1]`, non viene valutata. Se una medaglia non l'avesse presa nessuno, `migliore[m]` resterebbe -1 e la stampa andrebbe protetta con un `if`.

**Esercizio 11.** (Livello 30) Un magazzino è un array di `articolo` (`char sigla; int qta;`) con `n` elementi usati. Togli dall'array gli articoli con quantità 0, **senza un secondo array** e mantenendo l'ordine degli altri, aggiorna `n` e stampa il risultato. Dati: A3, B0, C0, D5, E0, F1, G4.

> [!example]- Soluzione
> Si riconosce una **compattazione**: due indici sullo stesso array. `i` legge tutti gli elementi, `k` indica la prossima posizione libera in cui scrivere quelli da tenere. Siccome `k <= i` sempre, non si sovrascrive mai un elemento non ancora letto. La copia `m[k] = m[i]` copia la struct intera.
>
> ```c
> #include <stdio.h>
>
> #define N 7
>
> typedef struct {
>     char sigla;
>     int qta;
> } articolo;
>
> int main(void)
> {
>     articolo m[N] = {{'A', 3}, {'B', 0}, {'C', 0}, {'D', 5}, {'E', 0}, {'F', 1}, {'G', 4}};
>     int n = N;
>     int i;
>     int k = 0;
>
>     for (i = 0; i < n; i++) {
>         if (m[i].qta != 0) {
>             m[k] = m[i];
>             k++;
>         }
>     }
>     n = k;
>     for (i = 0; i < n; i++)
>         printf("%c%d ", m[i].sigla, m[i].qta);
>     printf("| n=%d\n", n);
>     return 0;
> }
> ```
>
> | `i` | `m[i]` | da tenere? | azione | `k` dopo | `m[0..k-1]` |
> | --- | --- | --- | --- | --- | --- |
> | 0 | A3 | sì | `m[0] = m[0]` | 1 | A3 |
> | 1 | B0 | no | | 1 | A3 |
> | 2 | C0 | no | | 1 | A3 |
> | 3 | D5 | sì | `m[1] = m[3]` | 2 | A3 D5 |
> | 4 | E0 | no | | 2 | A3 D5 |
> | 5 | F1 | sì | `m[2] = m[5]` | 3 | A3 D5 F1 |
> | 6 | G4 | sì | `m[3] = m[6]` | 4 | A3 D5 F1 G4 |
>
> Output: `A3 D5 F1 G4 | n=4` (verificato). Le celle da 4 a 6 contengono ancora E0, F1, G4, ma da qui in poi non contano: l'array "usato" è lungo `n`. È lo stesso motivo per cui nelle prove al calcolatore i contenitori hanno un campo `n` separato dalla dimensione `dim`. L'errore tipico è togliere un elemento spostando a sinistra tutto il resto con un ciclo annidato e poi fare `i++`: così si salta l'elemento appena arrivato in posizione `i` (qui C0 dopo B0).

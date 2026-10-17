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

**Esercizio 3.** Scrivi l'output esatto.

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

**Esercizio 4.** Trova gli errori.

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

**Esercizio 5.** Definisci un tipo `mezzo` con targa (7 caratteri), tipo (`AUTO`, `MOTO`, `CAMION`) e peso in tonnellate. Inizializza un array di 3 mezzi, stampali con il tipo come testo e stampa il peso totale.

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

**Esercizio 6.** (Livello 30) Leggi 4 studenti (nome e voto) in un array di struct e stampa il migliore (il primo in caso di parità) e la media con due decimali.

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

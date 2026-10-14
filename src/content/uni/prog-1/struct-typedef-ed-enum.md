---
title: Struct, typedef ed enum
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-14
lezioni:
  - ott, giorno?
ordine: 15
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 5.1, parte centrale: <span class="src">slide 34-43</span> (tipi definiti dal programmatore, `struct`, dot notation), <span class="src">slide 44-58</span> (esempi: scheda di biblioteca, intersezione di rette, memoria allocata, rettangolo), <span class="src">slide 59-68</span> (`typedef`), <span class="src">slide 69-76</span> (`enum`). Il resto del deck (tipi predefiniti, `sizeof`, conversioni) è in [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/). L'accesso ai campi attraverso un puntatore (`p->campo`) è in [Puntatori](/uni/prog-1/puntatori/).

> [!abstract] Per l'esame
> - **Saper enunciare**: i cinque modi per definire tipi in C; cos'è una `struct` e in cosa differisce da un array; differenza fra **definizione** del tipo e **dichiarazione** della variabile (e quando si alloca memoria); cosa fa `typedef` e cosa non fa; cos'è un `enum` e quali valori interi prendono le sue costanti.
> - **Saper fare**: definire una `struct` con campi di tipo diverso (array di `char`, `int`, `float`, altre `struct`, `enum`); inizializzarla, leggerla da tastiera e stamparla; accedere ai campi annidati (`r.top_left.x`); calcolare quanta memoria occupa; usare un `enum` con uno `switch` per stampare un'etichetta; lavorare con un array di `struct`.
> - **Dove esce**: è il punto A della prova al calcolatore in [Esami passati](/uni/prog-1/esami-passati/), sempre: `typedef enum` con 2-4 valori, `typedef struct` "dato" con `char nome[20]`, un `int`, un `float` e il campo enum, stampa dell'enum con uno `switch` e `default: "N/A"`. Lì le struct hanno anche costruttori (è C++), che il corso farà più avanti; la parte di C è questa.

Il filo di questa parte del deck:

```
tipi user-defined   struct, bit-field, union, enum, typedef
   |
struct              aggrega campi di tipo DIVERSO (l'array solo dello stesso tipo)
   |                definizione del tipo (niente memoria) + dichiarazione (memoria)
dot notation        variabile.campo, ha la precedenza più alta
   |
esempi              scheda biblioteca, rette, Impiegato, rettangolo di punti
   |
typedef             un nome nuovo per un tipo esistente: Stringa, Data, Vettore
   |
enum                un tipo con pochi valori con nome: {lun, mar, ...} = 0, 1, ...
```

## Definizioni

**Tipi definiti dal programmatore** (<span class="src">slide 34</span>). Il C offre cinque modi:
- `struct`: strutture che raggruppano variabili di tipo diverso;
- **bit-field**: strutture che permettono di accedere ai singoli bit di una parola;
- `union`: la stessa porzione di memoria vista con tipi diversi;
- `enum` (enumerazione): una lista di simboli;
- `typedef`: nuovi nomi per tipi esistenti.

Nel corso si usano `struct`, `enum` e `typedef`. Bit-field e union sono solo citati.

**`struct`** (<span class="src">slide 35-39</span>). L'array non va bene per oggetti fatti di parti di tipo diverso. Un impiegato ha nome, cognome, codice fiscale (testo), stipendio (numero con decimali): con un array dovresti scegliere un tipo solo. Il costruttore `struct` permette di definire **variabili strutturate che aggregano informazioni eterogenee**, in contrasto con l'array. Ogni elemento si chiama **campo** (field).

```
struct Impiegato {              definizione del TIPO "struct Impiegato"
    char  Nome[20];
    char  Cognome[20];
    float Stipendio;
    char  CodiceFiscale[16];
};
```

Sintassi generale:

```
struct IdStruttura {
    Tipo1 nomeCampo1;
    Tipo2 nomeCampo2;
    ...
    TipoN nomeCampoN;
} IdVar;                       IdVar è facoltativo: dichiara subito una variabile
```

Confronto con l'array, che è il punto concettuale:

| | array | `struct` |
| --- | --- | --- |
| elementi | tutti dello **stesso** tipo | di tipo **diverso** |
| si accede con | un indice calcolato: `a[i]` | un nome fisso: `s.campo` |
| si può scorrere con un ciclo | sì | no (i campi hanno nomi) |
| assegnazione in blocco `x = y` | no | **sì**, copia tutti i campi |
| confronto `x == y` | no (confronta indirizzi) | no, non compila |

**Definizione e dichiarazione** (<span class="src">slide 36-37</span>). La **definizione** `struct Impiegato { ... };` crea un **tipo**: è uno stampo, e da sola **non alloca memoria**. La **dichiarazione** crea una **variabile** di quel tipo, e lì si alloca memoria. Si può dichiarare insieme alla definizione o dopo:

```
struct Impiegato { ... } amministratore, segretario;     definizione + dichiarazione
struct Impiegato staff1, staff2;                         dichiarazione, dopo
```

In C il nome del tipo è `struct Impiegato`, con la parola `struct` davanti: scrivere solo `Impiegato staff1;` non compila (in C++ sì). Per non ripetere `struct` si usa `typedef`.

**Dot notation** (<span class="src">slide 40-42</span>). Ai campi di una variabile `struct` si accede con il punto: `staff1.Stipendio = 0.0;`. Il punto sta nel gruppo di precedenza più alta (notazione suffissa, con `()`, `[]` e `->`), associatività da sinistra a destra. Un campo si usa come una variabile normale del suo tipo:

```
if (staff1.Stipendio < 2000)
    staff1.Stipendio = 1.5 * staff1.Stipendio;
```

Per la precedenza, `&r1.m` è `&(r1.m)`: l'indirizzo del campo, quello che serve a `scanf`. E con campi annidati il punto si ripete da sinistra: `r.top_left.x` è il campo `x` del campo `top_left` di `r`.

**`typedef`** (<span class="src">slide 59-63</span>). Dà un **nome nuovo** a un tipo che esiste già (built-in o strutturato): un **sinonimo**. Il nuovo tipo **eredita le operazioni** del tipo di partenza. Il prof la chiama un'operazione di "traduzione lessicale": il compilatore sostituisce il nome con il tipo vero. Va messo fra le costanti e le variabili.

```
typedef int intero;               intero numero;   è un int
typedef char Stringa[20];         Stringa nome = "Mario";   è un char[20]
typedef struct {                  nome del tipo dopo la graffa
    Tipo1 nomeCampo1;
    ...
} NomeTipo;
```

La forma `typedef struct { ... } NomeTipo;` è quella delle prove d'esame: dopo, le variabili si dichiarano con `NomeTipo x;`, senza `struct`.

**`enum`** (<span class="src">slide 69-76</span>). Definisce un nuovo tipo le cui variabili possono assumere solo un **numero finito e predeterminato di valori**, elencati con un nome:

```
enum giorno {lun, mar, mer, gio, ven, sab, dom};     definizione
enum giorno birth;                                   dichiarazione
if (birth == mar) ...
```

Internamente ogni valore è una **costante intera**, a partire da 0 e crescente di 1: `lun` è 0, `mar` 1, …, `dom` 6. Per questo valgono automaticamente gli operatori degli interi (minore, uguale, maggiore). Se si assegna un valore a una costante, le successive continuano da lì:

```
enum months {Jan = 1, Feb, Mar, ..., Dec};     Feb = 2, Mar = 3, ..., Dec = 12
```

Perché usarlo invece di un `int`: `birth <mark> mar` si legge, `birth </mark> 1` no; e il tipo dichiara quali valori hanno senso.

## Concetti

### Quanta memoria occupa una `struct`

(<span class="src">slide 53-56</span>) Le domande del prof:
1. Viene allocata memoria con la sola **definizione** `struct Impiegato { ... };`? **No**: è un tipo, non una variabile.
2. Con definizione **e dichiarazione** `struct Impiegato { ... } employee1, employee2;`? **Sì**: due variabili.
3. Quanta? Ogni variabile occupa almeno la somma dei campi: $20 + 20 + 4 + 16 = 60$ byte, quindi 120 byte per due.

```c
#include <stdio.h>

struct impiegato {
    char nome[20];
    char cognome[20];
    float stipendio;
    char codice_fiscale[16];
};

int main(void)
{
    struct impiegato employee1;
    struct impiegato employee2;

    printf("sizeof(struct impiegato)=%zu\n", sizeof(struct impiegato));
    printf("due variabili: %zu byte\n", sizeof(employee1) + sizeof(employee2));
    return 0;
}
```

Output (verificato): `sizeof(struct impiegato)=60` e `due variabili: 120 byte`.

"Almeno" perché il compilatore può inserire byte vuoti (**padding**) per **allineare** i campi: un `int` o un `float` da 4 byte sta a un indirizzo multiplo di 4, così la CPU lo legge in un colpo. In `Impiegato` il `float` cade all'offset 40, già multiplo di 4, e non serve padding. In questa struct invece sì:

```c
#include <stdio.h>

typedef struct {
    char c;
    int i;
    char d;
} sparsa;

typedef struct {
    int i;
    char c;
    char d;
} compatta;

typedef char stringa[20];

int main(void)
{
    stringa nome = "Mario";

    printf("%zu %zu %zu %s\n", sizeof(sparsa), sizeof(compatta), sizeof(nome), nome);
    return 0;
}
```

Output (verificato): `12 8 20 Mario`. In `sparsa`: `c` all'offset 0, 3 byte di padding, `i` a 4-7, `d` a 8, altri 3 byte per arrivare a un multiplo di 4: 12. In `compatta` gli stessi campi in altro ordine stanno in 8. Per gli esercizi d'esame basta la somma dei campi, ma `sizeof` è la risposta vera.

### `typedef` e quello che nasconde

(<span class="src">slide 62</span>, <span class="src">65-68</span>) La domanda del prof su `typedef char Stringa[20];`: "cosa ci perdiamo in questa traduzione da array di 20 char a Stringa?". Ci perdiamo la **visibilità** che si tratta di un array: `Stringa nome;` sembra una variabile semplice, ma resta un array di 20 `char`, quindi non si assegna con `nome = "Luigi";`, non si confronta con l'uguaglianza, ha spazio per 19 caratteri più `'\0'`. Il nome nuovo non cambia le regole, le nasconde.

Quando conviene (<span class="src">slide 65-66</span>): `typedef double VettoreDiReali[20]; VettoreDiReali v1, v2, v3;` non è più chiaro di `double v1[20], v2[20], v3[20];`. Invece

```
typedef double PioggeMensili[12];
typedef double IndiciBorsa[12];
PioggeMensili Piogge01, Piogge02, Piogge03;
IndiciBorsa   Indici01, Indici02, Indici03;
```

è preferibile a sei `double ...[12]`: il nome dice **cosa** contiene la variabile, anche se il tipo sotto è lo stesso.

Le matrici (<span class="src">slide 67-68</span>) si possono costruire come array di array, anche con `typedef`:

```
int matrice1[20][20];
int matriceTridimensionale1[10][20][30];      elemento: matriceTridimensionale1[2][8][15]

typedef int Vettore[20];
typedef Vettore MatriceIntera20Per20[20];     array di 20 Vettore
typedef int MatriceIntera20Per20[20][20];     stessa cosa, più breve
```

### `enum` con `typedef`

(<span class="src">slide 74-76</span>) Per non riscrivere `enum giorno` a ogni dichiarazione si dà un nome al tipo:

```
typedef enum {lun, mar, mer, gio, ven, sab, dom} GiornoSettimana;
GiornoSettimana giorno;
giorno = mar;
printf("%d", giorno);       stampa 1
```

`printf` non conosce i nomi delle costanti: stampa l'intero. Per stampare `"mar"` serve uno `switch` sul valore (o un array di stringhe indicizzato dal valore), come nelle prove al calcolatore.

Un programma che mette insieme `typedef`, `enum` e `struct`:

```c
#include <stdio.h>

typedef enum { LUN, MAR, MER, GIO, VEN, SAB, DOM } giorno_settimana;
typedef enum { GEN = 1, FEB, MAR_MESE, APR, MAG, GIU, LUG, AGO, SET, OTT, NOV, DIC } mese_anno;

typedef struct {
    int giorno;
    mese_anno mese;
    int anno;
} data;

int main(void)
{
    giorno_settimana g = MAR;
    data d1 = {14, OTT, 2026};
    data d2;

    printf("%d %d %d\n", g, DOM, OTT);
    d2 = d1;
    d2.anno++;
    printf("d1: %d/%d/%d  d2: %d/%d/%d\n", d1.giorno, d1.mese, d1.anno, d2.giorno, d2.mese, d2.anno);
    if (d1.anno < d2.anno)
        printf("d1 < d2\n");
    for (g = LUN; g <= DOM; g++)
        if (g >= SAB)
            printf("%d e' weekend\n", g);
    return 0;
}
```

Output (verificato):

```
1 6 10
d1: 14/10/2026  d2: 14/10/2027
d1 < d2
5 e' weekend
6 e' weekend
```

Tre cose da notare. Le costanti di tutti gli `enum` stanno nello **stesso spazio dei nomi**: `MAR` non può essere sia martedì sia marzo, per questo il mese si chiama `MAR_MESE`. `d2 = d1` copia tutta la struct, e modificare `d2.anno` non tocca `d1`. Un `enum` si incrementa e si confronta come un intero.

## Metodo

**Definire una struct per un oggetto del problema.**
1. Elenca le informazioni dell'oggetto e scegli per ognuna il tipo: testo in `char nome[N]` (con $N$ = lunghezza massima + 1), interi in `int`, decimali in `float`, valori da un elenco chiuso in un `enum`.
2. Scrivi `typedef struct { ... } NomeTipo;` prima di `main`.
3. Dichiara le variabili, singole o in array: `NomeTipo elenco[DIM];`.

**Inizializzare.** Con una lista fra graffe, **nell'ordine dei campi**: `data d = {14, OTT, 2026};`. Per una struct annidata, graffe annidate: `{{1, 5}, {4, 2}}`. I campi non elencati valgono 0, come per gli array.

**Leggere da tastiera.** Un `scanf` per campo, con `&` per i campi numerici e **senza** `&` per i campi stringa (sono array): `scanf("%d", &s.anno)`, `scanf("%19s", s.autore)`.

**Stampare un enum come testo.** `switch (x.tipo) { case A: printf("A"); break; ... default: printf("N/A"); }`.

**Copiare e confrontare.** La copia è `y = x;`. Il confronto si fa campo per campo; per i campi stringa, carattere per carattere (vedi [Stringhe](/uni/prog-1/stringhe/)).

**Calcolare la memoria.** Somma delle dimensioni dei campi (`char` 1, `int` e `float` 4, `double` 8, array: dimensione per numero di celle), moltiplicata per il numero di variabili dichiarate. La sola definizione vale zero.

## Esempi svolti a lezione

### Inizializzazione di una data

(<span class="src">slide 43</span>) La slide definisce `struct Data { int giorno; int mese; int anno; };`, dichiara `struct Data mia-data;` e assegna i campi uno a uno. Due errori:
- `mia-data` non è un identificatore valido: il trattino è l'operatore meno, quindi il compilatore legge `mia - data`. Si scrive `mia_data`;
- l'ultima riga è `mia-data.giorno=1999;`: va nel campo `anno`. E il commento "Lunedì=1, Martedì=2" su `giorno=2` confonde il giorno del mese con quello della settimana.

Versione corretta: `struct Data mia_data; mia_data.giorno = 2; mia_data.mese = 12; mia_data.anno = 1999;`, oppure in una riga `struct Data mia_data = {2, 12, 1999};`. Per i campi array e stringa valgono le regole viste per gli array: si inizializzano nella dichiarazione, non si assegnano dopo.

### Scheda di biblioteca

(<span class="src">slide 44-45</span>) Inizializzare due schede di biblioteca, una nel programma e una da tastiera, e stamparle. Il codice del prof, con i controlli di lettura e la larghezza nei `%s`:

```c
#include <stdio.h>

struct scheda {
    char autore[20];
    char titolo[100];
    int anno;
};

int main(void)
{
    struct scheda prima;
    struct scheda seconda = {"Moravia", "Indifferenti", 1990};
    int a[10];

    printf("Autore?\n");
    if (scanf("%19s", prima.autore) != 1)
        return 1;
    printf("Titolo?\n");
    if (scanf("%99s", prima.titolo) != 1)
        return 1;
    printf("Anno?\n");
    if (scanf("%d", &prima.anno) != 1)
        return 1;

    printf("Prima scheda\n");
    printf("    Autore=%s\n", prima.autore);
    printf("    Titolo=%s\n", prima.titolo);
    printf("    Anno=%d\n", prima.anno);
    printf("Seconda scheda\n");
    printf("    Autore=%s\n", seconda.autore);
    printf("    Titolo=%s\n", seconda.titolo);
    printf("    Anno=%d\n", seconda.anno);
    printf("sizeof scheda prima: %zu\n", sizeof(prima));
    printf("sizeof array di interi a: %zu\n", sizeof(a));
    return 0;
}
```

Con input `Calvino`, `Palomar`, `1983` stampa (verificato):

```
Autore?
Titolo?
Anno?
Prima scheda
    Autore=Calvino
    Titolo=Palomar
    Anno=1983
Seconda scheda
    Autore=Moravia
    Titolo=Indifferenti
    Anno=1990
sizeof scheda prima: 124
sizeof array di interi a: 40
```

I commenti del prof sul `scanf("%s", Prima.Autore)`: legge la stringa ignorando gli spazi bianchi iniziali, aggiunge `'\0'` alla fine, e termina quando ha finito di fare match, cioè al primo spazio. Quindi un titolo come `Gli indifferenti` non si legge così: entrerebbe solo `Gli`. La memoria: $20 + 100 + 4 = 124$ byte per la scheda, $10 \cdot 4 = 40$ per l'array, nessun padding (l'`int` cade all'offset 120, multiplo di 4).

### Intersezione di due rette

(<span class="src">slide 46-52</span>) Ogni retta $y = mx + d$ è rappresentata da una struct con coefficiente angolare $m$ e intercetta $d$. Il punto d'intersezione si ricava uguagliando le due $y$:

$$
m_1 x + d_1 = m_2 x + d_2 \quad\Rightarrow\quad (m_2 - m_1)\,x = d_1 - d_2 \quad\Rightarrow\quad x = \frac{d_1 - d_2}{m_2 - m_1}
$$

e poi $y = m_1 x + d_1$. La divisione richiede $m_1 \neq m_2$: due rette con la stessa pendenza sono parallele (nessun punto comune) o coincidenti (infiniti). La soluzione delle slide 48-52 (`main()` senza `int`, senza la graffa di apertura) non controlla questo caso. Versione corretta:

```c
#include <stdio.h>

struct retta {
    float m;
    float d;
};

int main(void)
{
    struct retta r1;
    struct retta r2;
    float x;

    printf("Coeff. angolare 1? ");
    if (scanf("%f", &r1.m) != 1)
        return 1;
    printf("Intercetta 1? ");
    if (scanf("%f", &r1.d) != 1)
        return 1;
    printf("Coeff. angolare 2? ");
    if (scanf("%f", &r2.m) != 1)
        return 1;
    printf("Intercetta 2? ");
    if (scanf("%f", &r2.d) != 1)
        return 1;
    printf("\nRetta 1: y = %fx + %f\n", r1.m, r1.d);
    printf("Retta 2: y = %fx + %f\n", r2.m, r2.d);
    if (r1.m == r2.m) {
        printf("Rette parallele: nessun punto o infiniti punti comuni\n");
        return 0;
    }
    x = (r1.d - r2.d) / (r2.m - r1.m);
    printf("Punto d'intersezione (%f,%f)\n", x, r1.m * x + r1.d);
    return 0;
}
```

Con l'input della slide 47 ($-5$, $1.4$, $10.4$, $-4.3$) le ultime tre righe sono (verificato):

```
Retta 1: y = -5.000000x + 1.400000
Retta 2: y = 10.400000x + -4.300000
Punto d'intersezione (0.370130,-0.450649)
```

Controllo a mano: $x = (1.4 - (-4.3)) / (10.4 - (-5)) = 5.7 / 15.4 = 0.370130$, $y = -5 \cdot 0.370130 + 1.4 = -0.450649$. Con `2 1 2 5` stampa il messaggio delle rette parallele. Qui il confronto `r1.m == r2.m` fra `float` è accettabile perché i valori sono letti, non calcolati; con valori calcolati servirebbe la soglia di [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/). Il `+ -4.300000` è l'effetto di stampare `+ %f` con un numero negativo.

### Un rettangolo fatto di punti

(<span class="src">slide 57-58</span>) Definire un rettangolo con i lati paralleli agli assi a partire da una struct punto: bastano due vertici opposti, perché gli altri due si ricavano. Una struct può avere come campo un'altra struct. Il prof scrive `topleft` e `bottomright`; qui con nomi italiani e con un uso:

```c
#include <stdio.h>

struct punto {
    int x;
    int y;
};

struct rettangolo {
    struct punto top_left;
    struct punto bottom_right;
};

int main(void)
{
    struct rettangolo r = {{1, 5}, {4, 2}};
    struct punto p = {3, 3};
    int base;
    int altezza;

    base = r.bottom_right.x - r.top_left.x;
    altezza = r.top_left.y - r.bottom_right.y;
    printf("base=%d altezza=%d area=%d\n", base, altezza, base * altezza);
    if (p.x >= r.top_left.x && p.x <= r.bottom_right.x && p.y <= r.top_left.y && p.y >= r.bottom_right.y)
        printf("(%d,%d) e' dentro\n", p.x, p.y);
    else
        printf("(%d,%d) e' fuori\n", p.x, p.y);
    return 0;
}
```

Output (verificato): `base=3 altezza=3 area=9` e `(3,3) e' dentro`. Il vertice in alto a sinistra ha la $x$ più piccola e la $y$ più grande: la base è la differenza delle $x$, l'altezza quella delle $y$ nell'ordine opposto. Il punto è dentro se la sua $x$ sta fra le due $x$ e la sua $y$ fra le due $y$.

### Esempi di `enum` dalle slide

(<span class="src">slide 73</span>, <span class="src">76</span>) Monete e mesi, più un caso con valori espliciti in mezzo all'elenco:

```c
#include <stdio.h>

enum coin { NICKEL, DIME, QUARTER, DOLLAR };

int main(void)
{
    enum coin money = DIME;
    enum colore { ROSSO = 2, VERDE, BLU = 10, GIALLO };

    if (money == QUARTER)
        printf("is a quarter\n");
    else
        printf("money=%d\n", money);
    printf("%d %d %d %d\n", ROSSO, VERDE, BLU, GIALLO);
    return 0;
}
```

Output (verificato): `money=1` e `2 3 10 11`. `DIME` è la seconda costante, quindi 1. Nel `colore`, ogni costante senza valore esplicito vale la precedente più 1: `VERDE` segue `ROSSO`, `GIALLO` segue `BLU`. La slide 64 scrive `typedef enum (Gen, Feb, …, Dic) meseAnno;` con le **tonde**: un `enum` si definisce con le graffe.

## Esercizi tipo esame

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

## Errori tipici

- Dimenticare il `;` dopo la graffa che chiude la definizione di una `struct`.
- Dichiarare `nomeStruct x;` in C senza `struct` davanti e senza `typedef`.
- Pensare che la definizione del tipo allochi memoria.
- Assegnare una stringa a un campo array (`s.nome = "Anna"`), o confrontare due struct con l'uguaglianza.
- `&` mancante davanti ai campi numerici in `scanf`, `&` di troppo davanti ai campi stringa.
- Credere che `b = a` fra struct crei un collegamento: è una copia.
- Usare nomi con il trattino (`mia-data`, slide 43): il trattino è il meno.
- Definire un `enum` con le tonde (slide 64), o usare la stessa costante in due `enum`.
- Stampare un `enum` con `%s`: è un intero, si stampa con `%d` o si traduce con uno `switch`.
- Calcolare la memoria di una struct dimenticando le celle degli array (`char nome[20]` sono 20 byte, non 1).

## Domande

- Quali sono i cinque modi per definire nuovi tipi in C?

- Cos'è una `struct` e in cosa differisce da un array?

- Che differenza c'è fra definire una `struct` e dichiarare una variabile di quel tipo? Quando si alloca memoria?

- Quanta memoria occupano `employee1` ed `employee2` di tipo `struct Impiegato` (due `char[20]`, un `float`, un `char[16]`)? Perché `sizeof` può dare di più della somma dei campi?

- Come si accede a un campo di una `struct`? E a un campo di una `struct` annidata?

- Cosa succede con l'assegnazione `b = a` fra due variabili `struct`? E con `b == a`?

- Cosa fa `typedef`? Cosa "si perde" con `typedef char Stringa[20];`?

- Cos'è un `enum`? Che valori interi prendono le costanti, anche quando alcune hanno un valore esplicito?

- Come si stampa come testo il valore di un campo `enum`?

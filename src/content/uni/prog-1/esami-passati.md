---
title: Esami passati
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: riferimento
stato: completa
data: 2026-09-17
lezioni: []
ordine: 999
---

Riferimento di [Programmazione 1](/uni/prog-1/). Analisi dei temi d'esame negli zip in `~/Downloads` (`TestiEsame_aa2008-17` … `TemiEsame_aa2025-26`).

Come è fatta l'analisi:

- **2023-26** (a.a. 22/23 → 25/26, stesso corso E3 145430/145935 di Trento): letti a mano tutti i testi e le soluzioni `Reference`. Sono 18 prove teoriche (16 appelli + 2 prove intermedie) e 16 prove al calcolatore. I conteggi qui sotto vengono da queste.
- **2015-22**: riassunti da una lettura automatica, usati solo per capire cosa è stabile nel tempo. I conteggi di quegli anni sono indicativi.
- Gli INFGEN 2008-14 sono un altro corso (in `.doc`), esclusi.

## Formato dell'esame

```
ESAME = prova teorica (carta) + prova al calcolatore (PC)       totale 33 punti

 prova teorica        40 min   12 punti   minimo 6    niente strumenti elettronici
 prova calcolatore    70 min   21 punti   minimo 10   progetto C/C++ su PC del lab
```

- In entrambe «fa parte della valutazione la leggibilità del codice C/C++». Nel calcolatore **il codice commentato non viene corretto**: una funzione che non compila e che commenti per far girare il resto vale zero.
- Appelli: gennaio, febbraio, giugno, luglio, fine agosto o inizio settembre (5 l'anno).
- Nel 2024/25 ci sono state due **prove teoriche intermedie**: 22 ottobre e 20 dicembre, 50 minuti, 6 punti ciascuna. Presumibilmente sostituiscono la teorica dell'appello (6+6 = 12), ma i testi non lo dicono: da chiedere al docente. Negli zip del 2025/26 non ci sono intermedie, quindi non è detto che si ripetano.
- Le soluzioni ufficiali sono progetti **Dev-C++** (`.dev`, `.layout`): il PC dell'esame con ogni probabilità ha quello, non onlinegdb.
- Docenti (registro 2022/23): titolare Giuseppe Riccardi, laboratorio Pierluigi Roberti.

### Com'è cambiato negli anni

```
2015-17   scritta 90' + calcolatore 90', progetto Dev-C++, bonus +3 se compila
2017-19   un'unica prova cartacea 120', teoria 11-13 + pratica 20-22
2020-21   online (COVID), 90', IDE web, 16+16
2021-22   online, 100', 12+21 = 33, compaiono dati.h / dati.cpp / main.cpp
2023-26   di nuovo in presenza, teorica 40' + calcolatore 70', 12+21   <- formato attuale
```

Il punto che conta: da dieci anni lo **scheletro della prova pratica è lo stesso**, cambia solo il dominio (pozzi, navi, fatture, ticket, mezzi…).

## Prova teorica: cosa esce

Su 18 prove teoriche 2023-26. Una prova ha 4-7 domande, quindi ogni riga conta le prove in cui il tipo compare almeno una volta.

| #   | Tipo di domanda                       | Prove | Forma tipica                                                                                                                                                                                                                                                                                                         |
| --- | ------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Alberi binari / BST**               | 16/18 | costruire il BST da una sequenza con i duplicati a DX (o SX), poi cammino, altezza, visite pre/post/in/level-ordine; oppure albero non BST → visita in-ordine → BST da quella sequenza; oppure scrivere o spiegare una funzione ricorsiva sull'albero (conta pari, altezza, `contaValore`, `contaValMin`, `TreeBoh`) |
| 2   | **Tracing: scrivere l'output esatto** | 15/18 | in 9 casi il programma legge **le cifre della tua matricola** (o la data di nascita), le trasforma con `% 10`, `?:`, puntatori a `int`, variabile globale e locale con lo stesso nome; negli altri: ricorsione (`boh(681)`, `charRev`, `process`), cicli `for` con `i++`/`++i`, chiamate di mergesort                |
| 3   | **Complessità**                       | 13/18 | O() di un algoritmo appena scritto (caso peggiore e migliore, motivato); ricorrenze con albero di ricorsione (`3T(N/3)+N`, `T(N/2)+N²`, `2T(N/2)+1` vs `+2`); tabella O() per operazione su lista, array, BST bilanciato vs sbilanciato; definizione di O, Ω, Θ                                                      |
| 4   | **Rappresentazione dei numeri**       | 10/18 | somma tra basi diverse con tutti i passaggi (`(2B)₁₆ + (73)₈`), un numero binario letto come naturale, con segno e in CA2, sottrazione in CA2, «301 può essere un numero in base 3?», quanti bit servono per 300 o 654 valori                                                                                        |
| 5   | **Vero/falso a batteria (SI/NO)**     | 9/18  | puntatori (`*pi++`, `&` dereferenzia?), array passato a funzione, `new`/`delete`, heap vs stack, `fprintf` scrive ASCII o binario, `getline`, `.eof()`, `const` nei parametri                                                                                                                                        |
| 6   | **Scrivere un pezzo di codice**       | 11/18 | stampa di un quadrato NxN a pattern con doppio ciclo, senza matrici (5 volte); funzioni su lista concatenata: inserimento ordinato, somma dei valori > m, filtro, lista invertita (4); ricorsione semplice: prodotto e potenza (2); `compareString`; matrice 10x15 con valori casuali                                |
| 7   | **Ordinamento e ricerca**             | 6/18  | insertion sort: scriverlo, applicarlo alla matricola mostrando il vettore a ogni passo, dire O() (3 volte); bubble sort tracciato; mergesort tracciato; ricerca binaria vs sequenziale                                                                                                                               |
| 8   | **Allocazione dinamica**              | 4/18  | dato un disegno di puntatori e blocchi nell'heap scrivere il codice che lo crea e lo dealloca, oppure correggere `int** V = new int*; int V[0] = new int[5]; … delete V;` (è uscito identico due volte)                                                                                                              |
| 9   | **Teoria a parole**                   | 5/18  | bus di sistema; memoria centrale, di massa, ROM, cache; unità di memorizzazione; garbage collector (in C++ non c'è: domanda trabocchetto); cosa contiene il tipo `FILE`                                                                                                                                              |
| 10  | **Logica booleana**                   | 3/18  | completare tavole di verità, quando è vera (A OR B) AND C                                                                                                                                                                                                                                                            |

Negli anni 2015-22 le prime quattro righe sono identiche per peso: BST, tracing con matricola, ricorrenze e basi numeriche compaiono quasi sempre.

## Prova al calcolatore: lo schema fisso

Tutte le 16 prove 2023-26 seguono questo schema, con punti che variano di poco:

```
[A]  3-9 pt   tipi in dati.h, implementazione in dati.cpp
              enum + struct "dato" (costruttori, distruttore, stampa)
              + struct "contenitore" (nodo di lista, coda o stack con i suoi metodi)
[B]  1-7 pt   main.cpp: codice dato nel testo, da completare nei commenti
              (inizializzare a NULL, creare con new, ciclo di 10 inserimenti, delete finale)
[C]  3-4 pt   newX / creaX / generaX(TX* x)
              enum casuale, un numero letto da tastiera con controllo del range,
              un float casuale nel range, una stringa letta da tastiera
[D]  1-6 pt   addX: inserisce nel contenitore giusto
              (indice scelto dal valore dell'enum, o a caso; se pieno non fa niente o stampa errore)
[E]  2-4 pt   stampaX: stampa tutto nel formato esatto, enum come etichetta testuale
[F]  3-6 pt   salvaX / estraiX: svuota il contenitore (removeFirst, get, pop)
              e scrive su file .txt solo gli elementi che rispettano una condizione
```

### Quale contenitore chiedono

| Contenitore | Prove 2023-26 | Appelli |
|---|---|---|
| Coda FIFO circolare su array (`n, dim, head, tail, *s`) | 5 | gen 23, set 23, feb 24, lug 25, **feb 26** |
| Array di liste concatenate (`Tnodo* v[DIM]`, insertLast o insertFirst, removeFirst) | 4 | feb 23, giu 25, set 25, **gen 26** |
| Stack LIFO su array (`n, dim, *s`, push/pop/isFull/isEmpty) | 3 | giu 23, giu 24, feb 25 (due stack nella stessa struct) |
| Stack LIFO su lista (push, pop, read che ritornano la testa aggiornata) | 1 | gen 25 |
| Coda FIFO su lista con puntatori `head` e `tail` | 1 | gen 24 |
| Lista doppiamente concatenata (`next`, `prev`) | 1 | lug 23 |
| Lista ordinata con `insertOrder` | 1 | ago 24 |

### Quello che non è mai uscito (2023-26)

- **Lettura da file**: si scrive sempre (`fopen` in `"w"`, `fprintf`), non si legge mai. Nelle teoriche vecchie (2018) è capitato di leggere nome+età da file.
- `std::string`, `vector`, classi con `private`, ereditarietà, template.
- Ordinamenti dentro la prova al calcolatore: gli algoritmi di ordinamento stanno solo nella teorica.
- Alberi nella prova al calcolatore: stanno solo nella teorica.

## Struttura generale del codice

Il linguaggio è un **C++ scritto alla C**: `struct` con costruttori e metodi, `new`/`delete`, `cout`/`cin`, ma stringhe `char[]` con `strcpy`, `rand()` e `FILE*` con `fprintf`. Le soluzioni ufficiali mescolano `printf` e `cout` senza problemi. Le regole di `~/.claude/rules/c.md` (C11 puro) qui non valgono: in C i costruttori non esistono.

```
Progetto/
├── main.cpp     #include "dati.h", srand(time(0)), il codice del punto B
├── dati.h       include guard, #include, #define DIM, enum, struct, prototipi
└── dati.cpp     #include "dati.h", metodi Tipo::metodo() e funzioni libere
```

### dati.h, la forma

```cpp
#ifndef __DATI_H__
#define __DATI_H__

#include <iostream>
#include <cstdlib>
#include <ctime>
#include <cstring>
using namespace std;

#define DIM 3
typedef enum Tcategoria { A, B, C } Tcategoria;

typedef struct Tdato {
    char nome[20];
    int valore;
    float importo;
    Tcategoria tipo;
    Tdato();
    Tdato(char _nome[], int _valore, float _importo, Tcategoria _tipo);
    ~Tdato();
    void stampa();
} Tdato;

typedef struct Tnodo {
    Tdato dato;
    Tnodo* next;
    Tnodo();
    Tnodo(Tdato d, Tnodo* n);
    void stampa();
} Tnodo;

void newDato(Tdato* d);
void addDato(Tnodo* v[], int dim, Tdato d);
void stampaDati(Tnodo* v[], int dim);
void salvaDati(Tnodo* v[], int dim);

#endif
```

Se il contenitore è una coda circolare la struct ha `int n, dim, head, tail; Tdato* s;`, un costruttore `TcodaFIFO(int _dim)` che fa `new Tdato[dim]`, il distruttore con `delete[]`, e `isEmpty`, `isFull`, `put`, `get`, `stampa`.

### I mattoni che tornano in ogni prova

Questi sono pezzi di sintassi, non le soluzioni: le implementazioni di `put`/`get`, `insertLast`, `removeFirst` e dei salvataggi restano da scrivere.

| Pezzo | Come si fa |
|---|---|
| Intero casuale in [min, max] | `rand() % (max - min + 1) + min` |
| Float casuale con 2 decimali in [15.00, 35.00] | intero casuale in [1500, 3500] diviso `100.0` |
| Enum casuale | `switch (rand() % 3)` con un `case` per etichetta |
| Input con controllo del range | `do { chiedi; leggi; } while (fuori range);` |
| Stampa di un enum | `switch (tipo)` che fa `cout << "ETICHETTA"`, con `default: "N/A"` |
| Scrittura su file | `FILE* fp = fopen("nome.txt", "w");`, controllo `fp == NULL`, `fprintf`, `fclose` solo se aperto |
| Copia di stringhe | `strcpy(destinazione, sorgente)` con `<cstring>` |
| Array di contenitori nell'heap | `TcodaFIFO* v[3];` poi `v[i] = new TcodaFIFO(10);` nel ciclo, e alla fine `delete v[i]` |

Invarianti da avere in testa per la coda circolare: `tail` è dove scrivi, `head` è da dove leggi, entrambi avanzano con `% dim`, `n` distingue piena da vuota. In stampa l'elemento i-esimo è `s[(head + i) % dim]`.

### Errori nelle soluzioni «Reference» da non copiare

Le soluzioni negli zip sono di chi ha preparato il materiale, non codice perfetto:

- gen 26, `salvaMezzi`: `(float)(totAutoTrue/totAuto)*100` fa la divisione **intera** prima del cast, quindi stampa 0% o 100%. Il cast va su uno dei due operandi. Se non ci sono AUTO divide per zero.
- feb 26, `TcodaFIFO::stampa`: `s[curr+i%dim]` per precedenza calcola `curr + (i % dim)` e sfora l'array. Serve `(curr+i) % dim`.
- set 25, `estraiQtaExtra`: avanza la testa senza `delete` dei nodi (memory leak); `exit;` senza parentesi non esce da niente.
- Diverse soluzioni chiamano `fclose(fp)` fuori dall'`else`, quindi anche quando `fp` è `NULL`.

## Previsione per l'a.a. 2026/27

Il primo appello sarà verso metà gennaio 2027. Stimo in base alla frequenza e alla stabilità nel tempo:

**Prova al calcolatore**: quasi certo lo schema A-F sopra, con `dati.h`/`dati.cpp`/`main.cpp`, un enum di 2-4 valori, una struct dato con `char nome[20]`, un intero con input controllato, un float casuale, e salvataggio filtrato su file. Il contenitore ruota tra **coda FIFO circolare su array**, **array di liste FIFO** e **stack su array**: sono le tre forme uscite 12 volte su 16 e gli ultimi due appelli ne hanno usate due. Meno probabile ma già visto: lista ordinata, lista doppia, stack su lista con `read`.

**Prova teorica**, in ordine di probabilità:

1. BST da sequenza (occhio a dove vanno i duplicati) con cammino, altezza e le quattro visite, oppure una funzione ricorsiva sull'albero da scrivere.
2. Tracing con le cifre della matricola: array globale e locale, puntatore a `int`, operatore `?:`, `%`, shadowing di `dato`.
3. Una domanda di complessità: O() dell'algoritmo appena scritto o una ricorrenza con albero di ricorsione.
4. Basi numeriche: somma tra basi diverse o binario naturale / con segno / CA2.
5. Un pezzo di codice breve: quadrato NxN a pattern, funzione su lista concatenata, insertion sort applicato alla matricola.
6. Una batteria SI/NO su puntatori, `new`/`delete`, file.

Se il corso ripete le intermedie, la prima (fine ottobre) copre i primi argomenti: puntatori base, cicli, basi numeriche, tavole di verità, array di struct. La seconda (dicembre) aggiunge ricorsione, BST, liste e file.

## Ordine di preparazione

Segue l'ordine delle esercitazioni di laboratorio (registro 2022/23), così la preparazione va di pari passo con il corso invece di anticiparlo:

```
if, condizioni, tavole di verità   ->  cicli e pattern NxN   ->  array e matrici
   ->  funzioni e passaggio di array  ->  struct                 ->  file (fprintf)
   ->  new/delete, costruttori, distruttori  ->  liste concatenate
   ->  code FIFO su array  ->  stack  ->  BST e complessità  ->  simulazione d'esame
```

Da dicembre in poi: un tema d'esame completo a settimana, teorica a tempo (40') e calcolatore a tempo (70') su un progetto Dev-C++ vero con tre file, compilando spesso. Gli ultimi due anni sono il materiale più fedele.

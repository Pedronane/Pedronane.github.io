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
> - **Saper fare**: definire una `struct` con campi di tipo diverso (array di `char`, `int`, `float`, altre `struct`, `enum`); inizializzarla, leggerla da tastiera e stamparla; accedere ai campi annidati (`r.top_left.x`); calcolare quanta memoria occupa; usare un `enum` con uno `switch` per stampare un'etichetta; scrivere un algoritmo su un array di `struct` (contare, sommare, media, massimo, ricerca) senza errori di indici.
> - **Dove esce**: nella prima provetta l'ultima domanda, quella da 1,5 punti, è un algoritmo su un array di struct: nel 2024 "quanti elementi hanno `indice < 5` e quanti hanno `valore` fra $-1.5$ e $1.5$" (<span class="src">prova del 22/10/2024, domanda 6</span>, svolta sotto in Array di struct). Al calcolatore è il punto A della prova al calcolatore in [Esami passati](/uni/prog-1/esami-passati/), sempre: `typedef enum` con 2-4 valori, `typedef struct` "dato" con `char nome[20]`, un `int`, un `float` e il campo enum, stampa dell'enum con uno `switch` e `default: "N/A"`. Lì le struct hanno anche costruttori (è C++), che il corso farà più avanti; la parte di C è questa.

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
   |
array di struct     dati[i].campo: lo schema della domanda 6 della provetta
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

Output (verificato): `12 8 20 Mario`.

<figure class="fig"><svg role="img" aria-label="Struct in memoria" xmlns:xlink="http://www.w3.org/1999/xlink" width="621.36pt" height="255.456pt" viewBox="0 0 621.36 255.456" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fbcfa12-figure_1"> <g id="fbcfa12-patch_1"> <path d="M 0 255.456 L 621.36 255.456 L 621.36 0 L 0 0 L 0 255.456 z " style="fill: none"/> </g> <g id="fbcfa12-axes_1"> <g id="fbcfa12-patch_2"> <path d="M 122.184 77.832 L 158.22 77.832 L 158.22 47.34 L 122.184 47.34 L 122.184 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_3"> <path d="M 158.22 77.832 L 194.256 77.832 L 194.256 47.34 L 158.22 47.34 L 158.22 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_4"> <path d="M 194.256 77.832 L 230.292 77.832 L 230.292 47.34 L 194.256 47.34 L 194.256 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_5"> <path d="M 230.292 77.832 L 266.328 77.832 L 266.328 47.34 L 230.292 47.34 L 230.292 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_6"> <path d="M 266.328 77.832 L 302.364 77.832 L 302.364 47.34 L 266.328 47.34 L 266.328 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_7"> <path d="M 302.364 77.832 L 338.4 77.832 L 338.4 47.34 L 302.364 47.34 L 302.364 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_8"> <path d="M 338.4 77.832 L 374.436 77.832 L 374.436 47.34 L 338.4 47.34 L 338.4 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_9"> <path d="M 374.436 77.832 L 410.472 77.832 L 410.472 47.34 L 374.436 47.34 L 374.436 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_10"> <path d="M 410.472 77.832 L 446.508 77.832 L 446.508 47.34 L 410.472 47.34 L 410.472 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_11"> <path d="M 446.508 77.832 L 482.544 77.832 L 482.544 47.34 L 446.508 47.34 L 446.508 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_12"> <path d="M 482.544 77.832 L 518.58 77.832 L 518.58 47.34 L 482.544 47.34 L 482.544 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_13"> <path d="M 518.58 77.832 L 554.616 77.832 L 554.616 47.34 L 518.58 47.34 L 518.58 77.832 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_14"> <path d="M 122.184 194.256 L 158.22 194.256 L 158.22 163.764 L 122.184 163.764 L 122.184 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_15"> <path d="M 158.22 194.256 L 194.256 194.256 L 194.256 163.764 L 158.22 163.764 L 158.22 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_16"> <path d="M 194.256 194.256 L 230.292 194.256 L 230.292 163.764 L 194.256 163.764 L 194.256 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_17"> <path d="M 230.292 194.256 L 266.328 194.256 L 266.328 163.764 L 230.292 163.764 L 230.292 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_18"> <path d="M 266.328 194.256 L 302.364 194.256 L 302.364 163.764 L 266.328 163.764 L 266.328 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_19"> <path d="M 302.364 194.256 L 338.4 194.256 L 338.4 163.764 L 302.364 163.764 L 302.364 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_20"> <path d="M 338.4 194.256 L 374.436 194.256 L 374.436 163.764 L 338.4 163.764 L 338.4 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-patch_21"> <path d="M 374.436 194.256 L 410.472 194.256 L 410.472 163.764 L 374.436 163.764 L 374.436 194.256 z " clip-path="url(#fbcfa12-pecec8e23c3)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="fbcfa12-text_1"> <!-- sparsa --> <g style="fill: var(--fig-ink)" transform="translate(11.304 65.703188) scale(0.12 -0.12)"> <defs> <path id="fbcfa12-DejaVuSansMono-Bold-56" d="M 3097 3391 L 3097 2591 Q 2844 2753 2570 2836 Q 2297 2919 2022 2919 Q 1716 2919 1559 2830 Q 1403 2741 1403 2566 Q 1403 2316 2072 2159 L 2106 2150 L 2369 2088 Q 2869 1969 3101 1705 Q 3334 1441 3334 991 Q 3334 450 2979 179 Q 2625 -91 1913 -91 Q 1597 -91 1265 -36 Q 934 19 594 128 L 594 928 Q 897 756 1211 665 Q 1525 575 1819 575 Q 2141 575 2306 669 Q 2472 763 2472 941 Q 2472 1116 2355 1209 Q 2238 1303 1797 1409 L 1544 1466 Q 1019 1584 778 1837 Q 538 2091 538 2516 Q 538 3022 903 3303 Q 1269 3584 1931 3584 Q 2228 3584 2523 3536 Q 2819 3488 3097 3391 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-Bold-53" d="M 1381 494 L 1381 -1331 L 469 -1331 L 469 3500 L 1381 3500 L 1381 2975 Q 1525 3278 1759 3431 Q 1994 3584 2309 3584 Q 2909 3584 3240 3103 Q 3572 2622 3572 1747 Q 3572 859 3236 384 Q 2900 -91 2278 -91 Q 1997 -91 1773 54 Q 1550 200 1381 494 z M 2656 1753 Q 2656 2259 2487 2546 Q 2319 2834 2022 2834 Q 1725 2834 1553 2546 Q 1381 2259 1381 1753 Q 1381 1247 1553 959 Q 1725 672 2022 672 Q 2319 672 2487 959 Q 2656 1247 2656 1753 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-Bold-44" d="M 2188 1644 Q 1675 1644 1472 1512 Q 1269 1381 1269 1063 Q 1269 825 1409 684 Q 1550 544 1791 544 Q 2153 544 2353 817 Q 2553 1091 2553 1581 L 2553 1644 L 2188 1644 z M 3463 1997 L 3463 0 L 2553 0 L 2553 391 Q 2388 159 2128 34 Q 1869 -91 1556 -91 Q 959 -91 626 225 Q 294 541 294 1106 Q 294 1719 691 2011 Q 1088 2303 1919 2303 L 2553 2303 L 2553 2456 Q 2553 2678 2392 2792 Q 2231 2906 1919 2906 Q 1591 2906 1283 2823 Q 975 2741 641 2559 L 641 3341 Q 944 3466 1256 3525 Q 1569 3584 1919 3584 Q 2772 3584 3117 3237 Q 3463 2891 3463 1997 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-Bold-55" d="M 3597 2534 Q 3447 2672 3245 2740 Q 3044 2809 2803 2809 Q 2513 2809 2295 2707 Q 2078 2606 1959 2413 Q 1884 2294 1854 2125 Q 1825 1956 1825 1613 L 1825 0 L 909 0 L 909 3500 L 1825 3500 L 1825 2956 Q 1959 3256 2237 3420 Q 2516 3584 2888 3584 Q 3075 3584 3254 3539 Q 3434 3494 3597 3406 L 3597 2534 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-56"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-53" transform="translate(60.203125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-44" transform="translate(120.40625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-55" transform="translate(180.609375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-56" transform="translate(240.8125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-44" transform="translate(301.015625 0)"/> </g> </g> <g id="fbcfa12-text_2"> <!-- char c; int i; char d; --> <g style="fill: var(--fig-axis)" transform="translate(122.184 31.920047) scale(0.1 -0.1)"> <defs> <path id="fbcfa12-DejaVuSansMono-46" d="M 3316 178 Q 3084 44 2839 -23 Q 2594 -91 2338 -91 Q 1525 -91 1067 396 Q 609 884 609 1747 Q 609 2609 1067 3096 Q 1525 3584 2338 3584 Q 2591 3584 2831 3518 Q 3072 3453 3316 3316 L 3316 2713 Q 3088 2916 2858 3006 Q 2628 3097 2338 3097 Q 1797 3097 1506 2747 Q 1216 2397 1216 1747 Q 1216 1100 1508 748 Q 1800 397 2338 397 Q 2638 397 2875 489 Q 3113 581 3316 775 L 3316 178 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-4b" d="M 3284 2169 L 3284 0 L 2706 0 L 2706 2169 Q 2706 2641 2540 2862 Q 2375 3084 2022 3084 Q 1619 3084 1401 2798 Q 1184 2513 1184 1978 L 1184 0 L 609 0 L 609 4863 L 1184 4863 L 1184 2975 Q 1338 3275 1600 3429 Q 1863 3584 2222 3584 Q 2756 3584 3020 3232 Q 3284 2881 3284 2169 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-55" d="M 3609 2778 Q 3425 2922 3234 2987 Q 3044 3053 2816 3053 Q 2278 3053 1993 2715 Q 1709 2378 1709 1741 L 1709 0 L 1131 0 L 1131 3500 L 1709 3500 L 1709 2816 Q 1853 3188 2151 3386 Q 2450 3584 2859 3584 Q 3072 3584 3256 3531 Q 3441 3478 3609 3366 L 3609 2778 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-3" transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-1e" d="M 1569 947 L 2356 947 L 2356 300 L 1741 -897 L 1259 -897 L 1569 300 L 1569 947 z M 1528 3322 L 2316 3322 L 2316 2375 L 1528 2375 L 1528 3322 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-51" d="M 3284 2169 L 3284 0 L 2706 0 L 2706 2169 Q 2706 2641 2540 2862 Q 2375 3084 2022 3084 Q 1619 3084 1401 2798 Q 1184 2513 1184 1978 L 1184 0 L 609 0 L 609 3500 L 1184 3500 L 1184 2975 Q 1338 3275 1600 3429 Q 1863 3584 2222 3584 Q 2756 3584 3020 3232 Q 3284 2881 3284 2169 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-57" d="M 1919 4494 L 1919 3500 L 3225 3500 L 3225 3053 L 1919 3053 L 1919 1153 Q 1919 766 2066 612 Q 2213 459 2578 459 L 3225 459 L 3225 0 L 2522 0 Q 1875 0 1609 259 Q 1344 519 1344 1153 L 1344 3053 L 409 3053 L 409 3500 L 1344 3500 L 1344 4494 L 1919 4494 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-47" d="M 2681 3053 L 2681 4863 L 3256 4863 L 3256 0 L 2681 0 L 2681 441 Q 2538 181 2298 45 Q 2059 -91 1747 -91 Q 1113 -91 748 401 Q 384 894 384 1759 Q 384 2613 750 3098 Q 1116 3584 1747 3584 Q 2063 3584 2303 3448 Q 2544 3313 2681 3053 z M 991 1747 Q 991 1078 1203 737 Q 1416 397 1831 397 Q 2247 397 2464 740 Q 2681 1084 2681 1747 Q 2681 2413 2464 2755 Q 2247 3097 1831 3097 Q 1416 3097 1203 2756 Q 991 2416 991 1747 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSansMono-46"/> <use xlink:href="#fbcfa12-DejaVuSansMono-4b" transform="translate(60.203125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-44" transform="translate(120.40625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-55" transform="translate(180.609375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(240.8125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-46" transform="translate(301.015625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-1e" transform="translate(361.21875 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-4c" transform="translate(481.625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-51" transform="translate(541.828125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-57" transform="translate(602.03125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(662.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-4c" transform="translate(722.4375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-1e" transform="translate(782.640625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(842.84375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-46" transform="translate(903.046875 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-4b" transform="translate(963.25 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-44" transform="translate(1023.453125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-55" transform="translate(1083.65625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(1143.859375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-47" transform="translate(1204.0625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-1e" transform="translate(1264.265625 0)"/> </g> </g> <g id="fbcfa12-text_3"> <!-- c --> <g style="fill: var(--fig-accent)" transform="translate(136.890828 65.443422) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-46"/> </g> </g> <g id="fbcfa12-text_4"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(119.474859 92.643891) scale(0.09 -0.09)"> <defs> <path id="fbcfa12-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSansMono-13"/> </g> </g> <g id="fbcfa12-text_5"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(281.034828 65.443852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_6"> <!-- 4 --> <g style="fill: var(--fig-axis)" transform="translate(263.618859 92.643891) scale(0.09 -0.09)"> <defs> <path id="fbcfa12-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSansMono-17"/> </g> </g> <g id="fbcfa12-text_7"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(317.070828 65.443852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_8"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(353.106828 65.443852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_9"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(389.142828 65.443852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_10"> <!-- d --> <g style="fill: var(--fig-accent)" transform="translate(425.178828 65.443852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-47"/> </g> </g> <g id="fbcfa12-text_11"> <!-- 8 --> <g style="fill: var(--fig-axis)" transform="translate(407.762859 92.643891) scale(0.09 -0.09)"> <defs> <path id="fbcfa12-DejaVuSansMono-1b" d="M 1925 2216 Q 1503 2216 1273 1980 Q 1044 1744 1044 1313 Q 1044 881 1276 642 Q 1509 403 1925 403 Q 2350 403 2579 639 Q 2809 875 2809 1313 Q 2809 1741 2576 1978 Q 2344 2216 1925 2216 z M 1375 2478 Q 972 2581 745 2862 Q 519 3144 519 3541 Q 519 4097 897 4423 Q 1275 4750 1925 4750 Q 2578 4750 2956 4423 Q 3334 4097 3334 3541 Q 3334 3144 3107 2862 Q 2881 2581 2478 2478 Q 2947 2375 3195 2062 Q 3444 1750 3444 1253 Q 3444 622 3041 265 Q 2638 -91 1925 -91 Q 1213 -91 811 264 Q 409 619 409 1247 Q 409 1747 657 2061 Q 906 2375 1375 2478 z M 1147 3481 Q 1147 3106 1347 2909 Q 1547 2713 1925 2713 Q 2306 2713 2506 2909 Q 2706 3106 2706 3481 Q 2706 3863 2507 4063 Q 2309 4263 1925 4263 Q 1547 4263 1347 4061 Q 1147 3859 1147 3481 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSansMono-1b"/> </g> </g> <g id="fbcfa12-text_12"> <!-- 12 byte --> <g style="fill: var(--fig-ink)" transform="translate(565.704 65.443852) scale(0.11 -0.11)"> <defs> <path id="fbcfa12-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-5c" d="M 1381 -609 L 1600 -56 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 1703 -750 Q 1547 -1138 1356 -1280 Q 1166 -1422 819 -1422 Q 672 -1422 517 -1397 Q 363 -1372 206 -1325 L 206 -691 L 500 -691 Q 519 -903 608 -995 Q 697 -1088 884 -1088 Q 1056 -1088 1161 -992 Q 1266 -897 1381 -609 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSerif-14"/> <use xlink:href="#fbcfa12-DejaVuSerif-15" transform="translate(63.625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-3" transform="translate(127.25 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-45" transform="translate(159.03125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-5c" transform="translate(223.046875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-57" transform="translate(279.546875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-48" transform="translate(319.734375 0)"/> </g> </g> <g id="fbcfa12-text_13"> <!-- compatta --> <g style="fill: var(--fig-ink)" transform="translate(11.304 182.127188) scale(0.12 -0.12)"> <defs> <path id="fbcfa12-DejaVuSansMono-Bold-46" d="M 3316 178 Q 3084 44 2818 -23 Q 2553 -91 2247 -91 Q 1438 -91 981 396 Q 525 884 525 1747 Q 525 2613 984 3102 Q 1444 3591 2253 3591 Q 2534 3591 2795 3525 Q 3056 3459 3316 3322 L 3316 2484 Q 3116 2656 2877 2748 Q 2638 2841 2381 2841 Q 1934 2841 1693 2556 Q 1453 2272 1453 1747 Q 1453 1222 1693 940 Q 1934 659 2381 659 Q 2647 659 2878 748 Q 3109 838 3316 1019 L 3316 178 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-Bold-52" d="M 1925 2841 Q 1597 2841 1409 2552 Q 1222 2263 1222 1747 Q 1222 1231 1409 942 Q 1597 653 1925 653 Q 2256 653 2443 942 Q 2631 1231 2631 1747 Q 2631 2263 2443 2552 Q 2256 2841 1925 2841 z M 306 1747 Q 306 2594 745 3089 Q 1184 3584 1925 3584 Q 2669 3584 3108 3089 Q 3547 2594 3547 1747 Q 3547 900 3108 404 Q 2669 -91 1925 -91 Q 1184 -91 745 404 Q 306 900 306 1747 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-Bold-50" d="M 2156 3150 Q 2259 3372 2418 3478 Q 2578 3584 2809 3584 Q 3263 3584 3436 3271 Q 3609 2959 3609 1972 L 3609 0 L 2859 0 L 2859 2247 Q 2859 2638 2800 2769 Q 2741 2900 2584 2900 Q 2428 2900 2365 2765 Q 2303 2631 2303 2247 L 2303 0 L 1563 0 L 1563 2247 Q 1563 2631 1500 2765 Q 1438 2900 1281 2900 Q 1125 2900 1065 2769 Q 1006 2638 1006 2247 L 1006 0 L 256 0 L 256 3500 L 922 3500 L 922 3138 Q 1000 3344 1172 3464 Q 1344 3584 1556 3584 Q 1769 3584 1944 3457 Q 2119 3331 2156 3150 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSansMono-Bold-57" d="M 2156 4494 L 2156 3500 L 3353 3500 L 3353 2797 L 2156 2797 L 2156 1141 Q 2156 906 2270 804 Q 2384 703 2650 703 L 3353 703 L 3353 0 L 2584 0 Q 1797 0 1519 251 Q 1241 503 1241 1184 L 1241 2797 L 347 2797 L 347 3500 L 1241 3500 L 1241 4494 L 2156 4494 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-46"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-52" transform="translate(60.203125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-50" transform="translate(120.40625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-53" transform="translate(180.609375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-44" transform="translate(240.8125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-57" transform="translate(301.015625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-57" transform="translate(361.21875 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-Bold-44" transform="translate(421.421875 0)"/> </g> </g> <g id="fbcfa12-text_14"> <!-- int i; char c; char d; --> <g style="fill: var(--fig-axis)" transform="translate(122.184 148.344047) scale(0.1 -0.1)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> <use xlink:href="#fbcfa12-DejaVuSansMono-51" transform="translate(60.203125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-4c" transform="translate(240.8125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-1e" transform="translate(301.015625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(361.21875 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-46" transform="translate(421.421875 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-4b" transform="translate(481.625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-44" transform="translate(541.828125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-55" transform="translate(602.03125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(662.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-46" transform="translate(722.4375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-1e" transform="translate(782.640625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(842.84375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-46" transform="translate(903.046875 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-4b" transform="translate(963.25 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-44" transform="translate(1023.453125 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-55" transform="translate(1083.65625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-3" transform="translate(1143.859375 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-47" transform="translate(1204.0625 0)"/> <use xlink:href="#fbcfa12-DejaVuSansMono-1e" transform="translate(1264.265625 0)"/> </g> </g> <g id="fbcfa12-text_15"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(136.890828 181.867852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_16"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(119.474859 209.067891) scale(0.09 -0.09)"> <use xlink:href="#fbcfa12-DejaVuSansMono-13"/> </g> </g> <g id="fbcfa12-text_17"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(172.926828 181.867852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_18"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(208.962828 181.867852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_19"> <!-- i --> <g style="fill: var(--fig-steel)" transform="translate(244.998828 181.867852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-4c"/> </g> </g> <g id="fbcfa12-text_20"> <!-- c --> <g style="fill: var(--fig-accent)" transform="translate(281.034828 181.867422) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-46"/> </g> </g> <g id="fbcfa12-text_21"> <!-- 4 --> <g style="fill: var(--fig-axis)" transform="translate(263.618859 209.067891) scale(0.09 -0.09)"> <use xlink:href="#fbcfa12-DejaVuSansMono-17"/> </g> </g> <g id="fbcfa12-text_22"> <!-- d --> <g style="fill: var(--fig-accent)" transform="translate(317.070828 181.867852) scale(0.11 -0.11)"> <use xlink:href="#fbcfa12-DejaVuSansMono-47"/> </g> </g> <g id="fbcfa12-text_23"> <!-- 8 byte --> <g style="fill: var(--fig-ink)" transform="translate(421.56 181.867852) scale(0.11 -0.11)"> <defs> <path id="fbcfa12-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSerif-1b"/> <use xlink:href="#fbcfa12-DejaVuSerif-3" transform="translate(63.625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-45" transform="translate(95.40625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-5c" transform="translate(159.421875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-57" transform="translate(215.921875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-48" transform="translate(256.109375 0)"/> </g> </g> <g id="fbcfa12-text_24"> <!-- riquadri tratteggiati: padding, byte vuoti perché l'int stia a un offset multiplo di 4 --> <g style="fill: var(--fig-axis)" transform="translate(122.184 241.126242) scale(0.09 -0.09)"> <defs> <path id="fbcfa12-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-54" d="M 2684 519 Q 2469 206 2206 56 Q 1944 -91 1597 -91 Q 1047 -91 769 281 Q 594 516 575 841 Q 563 1031 606 1256 Q 822 2359 1588 2928 Q 2241 3409 3006 3413 Q 3613 3416 3803 3322 L 2963 -1000 L 3516 -1000 L 3450 -1331 L 2322 -1331 L 2684 519 z M 2916 3094 Q 2316 3094 1850 2625 Q 1388 2153 1219 1297 Q 1172 1044 1184 853 Q 1197 659 1275 528 Q 1428 269 1828 269 Q 2222 269 2489 583 Q 2756 897 2872 1497 L 3166 3003 Q 3169 3094 2916 3094 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-4a" d="M 3822 3322 L 3188 72 Q 3044 -672 2581 -1031 Q 2078 -1422 1381 -1422 Q 1053 -1422 765 -1362 Q 478 -1303 225 -1184 L 363 -488 L 663 -488 Q 653 -813 834 -963 Q 1016 -1113 1406 -1113 Q 1913 -1113 2203 -825 Q 2494 -544 2613 72 L 2700 519 Q 2472 206 2181 57 Q 1891 -91 1525 -91 Q 975 -91 697 281 Q 522 516 503 841 Q 491 1031 534 1256 Q 750 2359 1516 2928 Q 2169 3409 2931 3413 Q 3631 3416 3822 3322 z M 3184 2988 Q 3181 3094 2844 3094 Q 2234 3094 1775 2625 Q 1316 2153 1147 1297 Q 1100 1044 1113 853 Q 1125 659 1203 528 Q 1356 269 1756 269 Q 2194 269 2484 583 Q 2775 897 2891 1497 L 2953 1825 L 3184 2988 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-1d" d="M 529 29 Q 434 150 468 325 Q 503 500 647 622 Q 791 744 966 744 Q 1141 744 1237 622 Q 1334 500 1300 325 Q 1266 150 1123 29 Q 981 -91 803 -91 Q 625 -91 529 29 z M 926 2067 Q 828 2188 862 2363 Q 897 2538 1040 2658 Q 1184 2778 1359 2778 Q 1538 2778 1633 2659 Q 1728 2541 1693 2362 Q 1659 2184 1518 2065 Q 1378 1947 1200 1947 Q 1025 1947 926 2067 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-f" d="M 125 -622 Q 463 -406 656 -114 Q 850 178 931 594 L 953 709 L 1569 709 Q 1441 175 1139 -208 Q 838 -591 328 -872 L 125 -622 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-4b" d="M 309 0 L 1191 4531 L 641 4531 L 703 4863 L 1828 4863 L 1416 2731 Q 1641 3069 1928 3241 Q 2216 3413 2553 3413 Q 3103 3413 3300 3097 Q 3422 2906 3422 2588 Q 3422 2378 3369 2113 L 3022 331 L 3534 331 L 3472 0 L 2381 0 L 2756 1931 Q 2819 2253 2819 2469 Q 2819 2659 2769 2763 Q 2666 2988 2284 2988 Q 1884 2988 1617 2697 Q 1350 2406 1244 1850 L 884 0 L 309 0 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-ab" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z M 2975 5119 L 3597 5119 L 2303 3944 L 1938 3944 L 2975 5119 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-ce1" d="M 3141 2988 L 1578 2988 L 959 -206 Q 850 -763 506 -1047 Q 163 -1331 -397 -1331 L -359 -1025 Q -31 -1025 128 -850 Q 294 -663 384 -206 L 1003 2988 L 453 2988 L 519 3322 L 1069 3322 L 1150 3738 Q 1259 4297 1603 4578 Q 1947 4863 2506 4863 Q 2716 4863 2917 4825 Q 3119 4788 3313 4709 L 3188 4078 L 2884 4078 Q 2897 4144 2897 4203 Q 2897 4347 2822 4434 Q 2716 4556 2469 4556 Q 2147 4556 1981 4379 Q 1816 4203 1728 3750 L 1644 3322 L 3206 3322 L 3288 3738 Q 3397 4297 3741 4578 Q 4084 4863 4644 4863 Q 4853 4863 5054 4825 Q 5256 4788 5447 4709 L 5325 4078 L 5022 4078 Q 5034 4144 5034 4203 Q 5034 4347 4959 4434 Q 4853 4556 4606 4556 Q 4284 4556 4118 4379 Q 3953 4203 3866 3750 L 3781 3322 L 4709 3322 L 4644 2988 L 3716 2988 L 3097 -206 Q 2988 -763 2644 -1047 Q 2300 -1331 1741 -1331 L 1778 -1025 Q 2106 -1025 2266 -850 Q 2431 -663 2522 -206 L 3141 2988 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-50" d="M 3503 2675 Q 3741 3041 4034 3227 Q 4328 3413 4672 3413 Q 5194 3413 5388 3088 Q 5503 2894 5503 2578 Q 5503 2372 5453 2113 L 5106 331 L 5625 331 L 5563 0 L 4469 0 L 4866 2047 Q 4913 2291 4913 2466 Q 4913 2659 4856 2772 Q 4750 2988 4403 2988 Q 4019 2988 3761 2697 Q 3503 2406 3394 1850 L 3034 0 L 2459 0 L 2863 2069 Q 2906 2303 2906 2472 Q 2906 2666 2850 2775 Q 2741 2988 2394 2988 Q 2009 2988 1751 2697 Q 1494 2406 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1778 3063 2059 3238 Q 2341 3413 2653 3413 Q 3041 3413 3262 3220 Q 3484 3028 3503 2675 z " transform="scale(0.015625)"/> <path id="fbcfa12-DejaVuSerif-Italic-17" d="M 2084 1581 L 2566 4063 L 491 1581 L 2084 1581 z M 3150 0 L 1025 0 L 1091 331 L 1841 331 L 2019 1247 L -19 1247 L 47 1588 L 2706 4750 L 3325 4750 L 2709 1581 L 3600 1581 L 3534 1247 L 2644 1247 L 2466 331 L 3216 331 L 3150 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-55"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(47.796875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-54" transform="translate(79.78125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-58" transform="translate(143.796875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-44" transform="translate(208.203125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-47" transform="translate(267.828125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-55" transform="translate(331.84375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(379.640625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(411.625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(443.40625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-55" transform="translate(483.59375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-44" transform="translate(531.390625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(591.015625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(631.203125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-48" transform="translate(671.390625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4a" transform="translate(730.578125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4a" transform="translate(794.59375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(858.609375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-44" transform="translate(890.59375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(950.21875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(990.40625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-1d" transform="translate(1022.390625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(1056.078125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-53" transform="translate(1087.859375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-44" transform="translate(1151.875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-47" transform="translate(1211.5 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-47" transform="translate(1275.515625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(1339.53125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-51" transform="translate(1371.515625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4a" transform="translate(1435.921875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-f" transform="translate(1499.9375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(1531.71875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-45" transform="translate(1563.5 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-5c" transform="translate(1627.515625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(1684.015625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-48" transform="translate(1724.203125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(1783.390625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-59" transform="translate(1815.171875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-58" transform="translate(1871.671875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-52" transform="translate(1936.078125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(1996.28125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(2036.46875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(2068.453125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-53" transform="translate(2100.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-48" transform="translate(2164.25 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-55" transform="translate(2223.4375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-46" transform="translate(2271.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4b" transform="translate(2327.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-ab" transform="translate(2391.640625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(2450.828125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4f" transform="translate(2482.609375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-a" transform="translate(2514.59375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(2542.078125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-51" transform="translate(2574.0625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(2638.46875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(2678.65625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-56" transform="translate(2710.4375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(2761.75 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(2801.9375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-44" transform="translate(2833.921875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(2893.546875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-44" transform="translate(2925.328125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(2984.953125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-58" transform="translate(3016.734375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-51" transform="translate(3081.140625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(3145.546875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-52" transform="translate(3177.328125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-ce1" transform="translate(3237.53125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-56" transform="translate(3308.375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-48" transform="translate(3359.6875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(3418.875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(3459.0625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-50" transform="translate(3490.84375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-58" transform="translate(3585.671875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4f" transform="translate(3650.078125 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-57" transform="translate(3682.0625 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(3722.25 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-53" transform="translate(3754.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4f" transform="translate(3818.25 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-52" transform="translate(3850.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(3910.4375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-47" transform="translate(3942.21875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-4c" transform="translate(4006.234375 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-3" transform="translate(4038.21875 0)"/> <use xlink:href="#fbcfa12-DejaVuSerif-Italic-17" transform="translate(4070 0)"/> </g> </g> </g> </g> <defs> <clipPath id="fbcfa12-pecec8e23c3"> <rect x="5.76" y="5.76" width="609.84" height="243.936"/> </clipPath> </defs> </svg></figure>

In `sparsa`: `c` all'offset 0, 3 byte di padding, `i` a 4-7, `d` a 8, altri 3 byte per arrivare a un multiplo di 4: 12. In `compatta` gli stessi campi in altro ordine stanno in 8. Per gli esercizi d'esame basta la somma dei campi, ma `sizeof` è la risposta vera.

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

### Assegnazione fra struct: è una copia

`b = a;` fra due variabili dello stesso tipo struct copia **tutti i campi**, anche quelli array. È l'unico caso in cui un array viene copiato con una sola assegnazione: da solo `nome = altro_nome;` non compila, dentro una struct viaggia con lei. Dopo la copia le due variabili sono **indipendenti**: sono due blocchi di memoria distinti, e cambiare l'una non tocca l'altra.

```c
#include <stdio.h>

typedef struct {
    char nome[10];
    int punti;
} squadra;

int main(void)
{
    squadra a = {"Inter", 3};
    squadra b;

    b = a;
    b.punti += 3;
    a.punti = b.punti * 2;
    b.nome[0] = 'i';
    printf("%s %d\n", a.nome, a.punti);
    printf("%s %d\n", b.nome, b.punti);
    return 0;
}
```

| istruzione | `a` | `b` |
| --- | --- | --- |
| dichiarazioni | "Inter", 3 | indefinito |
| `b = a;` | "Inter", 3 | "Inter", 3 |
| `b.punti += 3;` | "Inter", 3 | "Inter", 6 |
| `a.punti = b.punti * 2;` | "Inter", 12 | "Inter", 6 |
| `b.nome[0] = 'i';` | "Inter", 12 | "inter", 6 |

Output (verificato):

```
Inter 12
inter 6
```

La minuscola compare solo in `b`: l'array `nome` è stato copiato, non condiviso. Il confronto `a <mark> b` invece non compila (`invalid operands to binary </mark>`): si confrontano i campi uno per uno.

### Array di struct

Un array può avere come elementi delle struct: `studente classe[30];` sono 30 struct una dopo l'altra in memoria. Si legge da sinistra a destra, come la dot notation:

```
classe            l'array intero
classe[1]         la seconda struct (tipo studente)
classe[1].voto    il campo voto della seconda struct (tipo int)
classe[1].nome[0] il primo carattere del nome della seconda struct (tipo char)
```

<figure class="fig"><svg role="img" aria-label="Array di struct" xmlns:xlink="http://www.w3.org/1999/xlink" width="621.36pt" height="266.544pt" viewBox="0 0 621.36 266.544" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f6cd047-figure_1"> <g id="f6cd047-patch_1"> <path d="M 0 266.544 L 621.36 266.544 L 621.36 0 L 0 0 L 0 266.544 z " style="fill: none"/> </g> <g id="f6cd047-axes_1"> <g id="f6cd047-patch_2"> <path d="M 144.36 77.832 L 282.96 77.832 L 282.96 39.024 L 144.36 39.024 L 144.36 77.832 z " clip-path="url(#f6cd047-pc773a632ef)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6cd047-patch_3"> <path d="M 282.96 77.832 L 343.944 77.832 L 343.944 39.024 L 282.96 39.024 L 282.96 77.832 z " clip-path="url(#f6cd047-pc773a632ef)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6cd047-patch_4"> <path d="M 144.36 116.64 L 282.96 116.64 L 282.96 77.832 L 144.36 77.832 L 144.36 116.64 z " clip-path="url(#f6cd047-pc773a632ef)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6cd047-patch_5"> <path d="M 282.96 116.64 L 343.944 116.64 L 343.944 77.832 L 282.96 77.832 L 282.96 116.64 z " clip-path="url(#f6cd047-pc773a632ef)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6cd047-patch_6"> <path d="M 144.36 155.448 L 282.96 155.448 L 282.96 116.64 L 144.36 116.64 L 144.36 155.448 z " clip-path="url(#f6cd047-pc773a632ef)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6cd047-patch_7"> <path d="M 282.96 155.448 L 343.944 155.448 L 343.944 116.64 L 282.96 116.64 L 282.96 155.448 z " clip-path="url(#f6cd047-pc773a632ef)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6cd047-text_1"> <!-- nome (char[20]) --> <g style="fill: var(--fig-axis)" transform="translate(165.4975 30.534047) scale(0.1 -0.1)"> <defs> <path id="f6cd047-DejaVuSansMono-51" d="M 3284 2169 L 3284 0 L 2706 0 L 2706 2169 Q 2706 2641 2540 2862 Q 2375 3084 2022 3084 Q 1619 3084 1401 2798 Q 1184 2513 1184 1978 L 1184 0 L 609 0 L 609 3500 L 1184 3500 L 1184 2975 Q 1338 3275 1600 3429 Q 1863 3584 2222 3584 Q 2756 3584 3020 3232 Q 3284 2881 3284 2169 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-50" d="M 2113 3144 Q 2219 3369 2383 3476 Q 2547 3584 2778 3584 Q 3200 3584 3373 3257 Q 3547 2931 3547 2028 L 3547 0 L 3022 0 L 3022 2003 Q 3022 2744 2939 2923 Q 2856 3103 2638 3103 Q 2388 3103 2295 2911 Q 2203 2719 2203 2003 L 2203 0 L 1678 0 L 1678 2003 Q 1678 2753 1589 2928 Q 1500 3103 1269 3103 Q 1041 3103 952 2911 Q 863 2719 863 2003 L 863 0 L 341 0 L 341 3500 L 863 3500 L 863 3200 Q 966 3388 1120 3486 Q 1275 3584 1472 3584 Q 1709 3584 1867 3475 Q 2025 3366 2113 3144 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-48" d="M 3475 1894 L 3475 1613 L 984 1613 L 984 1594 Q 984 1022 1282 709 Q 1581 397 2125 397 Q 2400 397 2700 484 Q 3000 572 3341 750 L 3341 178 Q 3013 44 2708 -23 Q 2403 -91 2119 -91 Q 1303 -91 843 398 Q 384 888 384 1747 Q 384 2584 834 3084 Q 1284 3584 2034 3584 Q 2703 3584 3089 3131 Q 3475 2678 3475 1894 z M 2900 2063 Q 2888 2569 2661 2833 Q 2434 3097 2009 3097 Q 1594 3097 1325 2822 Q 1056 2547 1006 2059 L 2900 2063 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-3" transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-b" d="M 2766 4856 Q 2350 4144 2145 3436 Q 1941 2728 1941 2009 Q 1941 1294 2145 584 Q 2350 -125 2766 -844 L 2266 -844 Q 1794 -100 1562 604 Q 1331 1309 1331 2009 Q 1331 2706 1562 3412 Q 1794 4119 2266 4856 L 2766 4856 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-46" d="M 3316 178 Q 3084 44 2839 -23 Q 2594 -91 2338 -91 Q 1525 -91 1067 396 Q 609 884 609 1747 Q 609 2609 1067 3096 Q 1525 3584 2338 3584 Q 2591 3584 2831 3518 Q 3072 3453 3316 3316 L 3316 2713 Q 3088 2916 2858 3006 Q 2628 3097 2338 3097 Q 1797 3097 1506 2747 Q 1216 2397 1216 1747 Q 1216 1100 1508 748 Q 1800 397 2338 397 Q 2638 397 2875 489 Q 3113 581 3316 775 L 3316 178 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-4b" d="M 3284 2169 L 3284 0 L 2706 0 L 2706 2169 Q 2706 2641 2540 2862 Q 2375 3084 2022 3084 Q 1619 3084 1401 2798 Q 1184 2513 1184 1978 L 1184 0 L 609 0 L 609 4863 L 1184 4863 L 1184 2975 Q 1338 3275 1600 3429 Q 1863 3584 2222 3584 Q 2756 3584 3020 3232 Q 3284 2881 3284 2169 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-55" d="M 3609 2778 Q 3425 2922 3234 2987 Q 3044 3053 2816 3053 Q 2278 3053 1993 2715 Q 1709 2378 1709 1741 L 1709 0 L 1131 0 L 1131 3500 L 1709 3500 L 1709 2816 Q 1853 3188 2151 3386 Q 2450 3584 2859 3584 Q 3072 3584 3256 3531 Q 3441 3478 3609 3366 L 3609 2778 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-3e" d="M 1447 4863 L 2772 4863 L 2772 4416 L 2022 4416 L 2022 -397 L 2772 -397 L 2772 -844 L 1447 -844 L 1447 4863 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-40" d="M 2406 4863 L 2406 -844 L 1081 -844 L 1081 -397 L 1831 -397 L 1831 4416 L 1081 4416 L 1081 4863 L 2406 4863 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-c" d="M 1088 4856 L 1588 4856 Q 2059 4119 2290 3412 Q 2522 2706 2522 2009 Q 2522 1306 2290 600 Q 2059 -106 1588 -844 L 1088 -844 Q 1503 -119 1708 590 Q 1913 1300 1913 2009 Q 1913 2722 1708 3431 Q 1503 4141 1088 4856 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-51"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-50" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-b" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-46" transform="translate(421.421875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-4b" transform="translate(481.625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(541.828125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-55" transform="translate(602.03125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3e" transform="translate(662.234375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-15" transform="translate(722.4375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-13" transform="translate(782.640625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-40" transform="translate(842.84375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-c" transform="translate(903.046875 0)"/> </g> </g> <g id="f6cd047-text_2"> <!-- voto --> <g style="fill: var(--fig-axis)" transform="translate(301.411375 30.533656) scale(0.1 -0.1)"> <defs> <path id="f6cd047-DejaVuSansMono-59" d="M 313 3500 L 909 3500 L 1925 563 L 2944 3500 L 3541 3500 L 2297 0 L 1556 0 L 313 3500 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-57" d="M 1919 4494 L 1919 3500 L 3225 3500 L 3225 3053 L 1919 3053 L 1919 1153 Q 1919 766 2066 612 Q 2213 459 2578 459 L 3225 459 L 3225 0 L 2522 0 Q 1875 0 1609 259 Q 1344 519 1344 1153 L 1344 3053 L 409 3053 L 409 3500 L 1344 3500 L 1344 4494 L 1919 4494 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-59"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(180.609375 0)"/> </g> </g> <g id="f6cd047-text_3"> <!-- "Anna" --> <g style="fill: var(--fig-ink)" transform="translate(191.986875 61.545187) scale(0.12 -0.12)"> <defs> <path id="f6cd047-DejaVuSansMono-5" d="M 2797 4666 L 2797 2931 L 2253 2931 L 2253 4666 L 2797 4666 z M 1600 4666 L 1600 2931 L 1056 2931 L 1056 4666 L 1600 4666 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-24" d="M 1925 4109 L 1259 1722 L 2591 1722 L 1925 4109 z M 1544 4666 L 2309 4666 L 3738 0 L 3084 0 L 2741 1216 L 1106 1216 L 769 0 L 116 0 L 1544 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-5"/> <use xlink:href="#f6cd047-DejaVuSansMono-24" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-51" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-51" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-5" transform="translate(301.015625 0)"/> </g> </g> <g id="f6cd047-text_4"> <!-- 27 --> <g style="fill: var(--fig-ink)" transform="translate(306.227625 61.545187) scale(0.12 -0.12)"> <defs> <path id="f6cd047-DejaVuSansMono-1a" d="M 434 4666 L 3372 4666 L 3372 4397 L 1703 0 L 1044 0 L 2669 4134 L 434 4134 L 434 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-15"/> <use xlink:href="#f6cd047-DejaVuSansMono-1a" transform="translate(60.203125 0)"/> </g> </g> <g id="f6cd047-text_5"> <!-- classe[0] --> <g style="fill: var(--fig-ink)" transform="translate(76.442906 61.31507) scale(0.11 -0.11)"> <defs> <path id="f6cd047-DejaVuSansMono-4f" d="M 1997 1269 Q 1997 881 2139 684 Q 2281 488 2559 488 L 3231 488 L 3231 0 L 2503 0 Q 1988 0 1705 331 Q 1422 663 1422 1269 L 1422 4447 L 500 4447 L 500 4897 L 1997 4897 L 1997 1269 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-56" d="M 3041 3378 L 3041 2816 Q 2794 2959 2544 3031 Q 2294 3103 2034 3103 Q 1644 3103 1451 2976 Q 1259 2850 1259 2591 Q 1259 2356 1403 2240 Q 1547 2125 2119 2016 L 2350 1972 Q 2778 1891 2998 1647 Q 3219 1403 3219 1013 Q 3219 494 2850 201 Q 2481 -91 1825 -91 Q 1566 -91 1281 -36 Q 997 19 666 128 L 666 722 Q 988 556 1281 473 Q 1575 391 1838 391 Q 2219 391 2428 545 Q 2638 700 2638 978 Q 2638 1378 1872 1531 L 1847 1538 L 1631 1581 Q 1134 1678 906 1908 Q 678 2138 678 2534 Q 678 3038 1018 3311 Q 1359 3584 1991 3584 Q 2272 3584 2531 3532 Q 2791 3481 3041 3378 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-46"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3e" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-13" transform="translate(421.421875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-40" transform="translate(481.625 0)"/> </g> </g> <g id="f6cd047-text_6"> <!-- offset 0 --> <g style="fill: var(--fig-axis)" transform="translate(352.26 60.766242) scale(0.09 -0.09)"> <defs> <path id="f6cd047-DejaVuSansMono-49" d="M 3322 4863 L 3322 4384 L 2669 4384 Q 2359 4384 2239 4257 Q 2119 4131 2119 3809 L 2119 3500 L 3322 3500 L 3322 3053 L 2119 3053 L 2119 0 L 1544 0 L 1544 3053 L 609 3053 L 609 3500 L 1544 3500 L 1544 3744 Q 1544 4319 1808 4591 Q 2072 4863 2631 4863 L 3322 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-52"/> <use xlink:href="#f6cd047-DejaVuSansMono-49" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-49" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-13" transform="translate(421.421875 0)"/> </g> </g> <g id="f6cd047-text_7"> <!-- "Bruno" --> <g style="fill: var(--fig-steel)" transform="translate(188.374687 100.353187) scale(0.12 -0.12)"> <defs> <path id="f6cd047-DejaVuSansMono-25" d="M 1153 2228 L 1153 519 L 1900 519 Q 2450 519 2684 711 Q 2919 903 2919 1344 Q 2919 1800 2672 2014 Q 2425 2228 1900 2228 L 1153 2228 z M 1153 4147 L 1153 2741 L 1888 2741 Q 2344 2741 2548 2916 Q 2753 3091 2753 3481 Q 2753 3834 2551 3990 Q 2350 4147 1888 4147 L 1153 4147 z M 519 4666 L 1900 4666 Q 2616 4666 3003 4356 Q 3391 4047 3391 3481 Q 3391 3053 3186 2806 Q 2981 2559 2572 2497 Q 3031 2428 3292 2104 Q 3553 1781 3553 1281 Q 3553 647 3137 323 Q 2722 0 1900 0 L 519 0 L 519 4666 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-58" d="M 609 1325 L 609 3494 L 1184 3494 L 1184 1325 Q 1184 853 1351 631 Q 1519 409 1869 409 Q 2275 409 2490 695 Q 2706 981 2706 1516 L 2706 3494 L 3284 3494 L 3284 0 L 2706 0 L 2706 525 Q 2553 222 2289 65 Q 2025 -91 1672 -91 Q 1134 -91 871 261 Q 609 613 609 1325 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-5"/> <use xlink:href="#f6cd047-DejaVuSansMono-25" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-55" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-58" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-51" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-5" transform="translate(361.21875 0)"/> </g> </g> <g id="f6cd047-text_8"> <!-- 30 --> <g style="fill: var(--fig-steel)" transform="translate(306.227625 100.353187) scale(0.12 -0.12)"> <defs> <path id="f6cd047-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-16"/> <use xlink:href="#f6cd047-DejaVuSansMono-13" transform="translate(60.203125 0)"/> </g> </g> <g id="f6cd047-text_9"> <!-- classe[1] --> <g style="fill: var(--fig-steel)" transform="translate(76.442906 100.12307) scale(0.11 -0.11)"> <defs> <path id="f6cd047-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-46"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3e" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-14" transform="translate(421.421875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-40" transform="translate(481.625 0)"/> </g> </g> <g id="f6cd047-text_10"> <!-- offset 24 --> <g style="fill: var(--fig-axis)" transform="translate(352.26 99.574242) scale(0.09 -0.09)"> <defs> <path id="f6cd047-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-52"/> <use xlink:href="#f6cd047-DejaVuSansMono-49" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-49" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-15" transform="translate(421.421875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-17" transform="translate(481.625 0)"/> </g> </g> <g id="f6cd047-text_11"> <!-- "Carla" --> <g style="fill: var(--fig-ink)" transform="translate(188.374687 139.193531) scale(0.12 -0.12)"> <defs> <path id="f6cd047-DejaVuSansMono-26" d="M 3353 166 Q 3113 38 2859 -26 Q 2606 -91 2322 -91 Q 1425 -91 929 543 Q 434 1178 434 2328 Q 434 3472 932 4111 Q 1431 4750 2322 4750 Q 2606 4750 2859 4686 Q 3113 4622 3353 4494 L 3353 3847 Q 3122 4038 2856 4138 Q 2591 4238 2322 4238 Q 1706 4238 1400 3763 Q 1094 3288 1094 2328 Q 1094 1372 1400 897 Q 1706 422 2322 422 Q 2597 422 2861 522 Q 3125 622 3353 813 L 3353 166 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-5"/> <use xlink:href="#f6cd047-DejaVuSansMono-26" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-55" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-5" transform="translate(361.21875 0)"/> </g> </g> <g id="f6cd047-text_12"> <!-- 24 --> <g style="fill: var(--fig-ink)" transform="translate(306.227625 139.161187) scale(0.12 -0.12)"> <use xlink:href="#f6cd047-DejaVuSansMono-15"/> <use xlink:href="#f6cd047-DejaVuSansMono-17" transform="translate(60.203125 0)"/> </g> </g> <g id="f6cd047-text_13"> <!-- classe[2] --> <g style="fill: var(--fig-ink)" transform="translate(76.442906 138.93107) scale(0.11 -0.11)"> <use xlink:href="#f6cd047-DejaVuSansMono-46"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3e" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-15" transform="translate(421.421875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-40" transform="translate(481.625 0)"/> </g> </g> <g id="f6cd047-text_14"> <!-- offset 48 --> <g style="fill: var(--fig-axis)" transform="translate(352.26 138.382242) scale(0.09 -0.09)"> <defs> <path id="f6cd047-DejaVuSansMono-1b" d="M 1925 2216 Q 1503 2216 1273 1980 Q 1044 1744 1044 1313 Q 1044 881 1276 642 Q 1509 403 1925 403 Q 2350 403 2579 639 Q 2809 875 2809 1313 Q 2809 1741 2576 1978 Q 2344 2216 1925 2216 z M 1375 2478 Q 972 2581 745 2862 Q 519 3144 519 3541 Q 519 4097 897 4423 Q 1275 4750 1925 4750 Q 2578 4750 2956 4423 Q 3334 4097 3334 3541 Q 3334 3144 3107 2862 Q 2881 2581 2478 2478 Q 2947 2375 3195 2062 Q 3444 1750 3444 1253 Q 3444 622 3041 265 Q 2638 -91 1925 -91 Q 1213 -91 811 264 Q 409 619 409 1247 Q 409 1747 657 2061 Q 906 2375 1375 2478 z M 1147 3481 Q 1147 3106 1347 2909 Q 1547 2713 1925 2713 Q 2306 2713 2506 2909 Q 2706 3106 2706 3481 Q 2706 3863 2507 4063 Q 2309 4263 1925 4263 Q 1547 4263 1347 4061 Q 1147 3859 1147 3481 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-52"/> <use xlink:href="#f6cd047-DejaVuSansMono-49" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-49" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-17" transform="translate(421.421875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-1b" transform="translate(481.625 0)"/> </g> </g> <g id="f6cd047-patch_8"> <path d="M 493.632 97.236 Q 454.824 97.236 418.252068 97.236 " style="fill: none; stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> <path d="M 423.852068 100.036 L 418.252068 97.236 L 423.852068 94.436 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f6cd047-text_15"> <!-- p --> <g style="fill: var(--fig-accent)" transform="translate(499.176 100.612953) scale(0.13 -0.13)"> <defs> <path id="f6cd047-DejaVuSansMono-Bold-53" d="M 1381 494 L 1381 -1331 L 469 -1331 L 469 3500 L 1381 3500 L 1381 2975 Q 1525 3278 1759 3431 Q 1994 3584 2309 3584 Q 2909 3584 3240 3103 Q 3572 2622 3572 1747 Q 3572 859 3236 384 Q 2900 -91 2278 -91 Q 1997 -91 1773 54 Q 1550 200 1381 494 z M 2656 1753 Q 2656 2259 2487 2546 Q 2319 2834 2022 2834 Q 1725 2834 1553 2546 Q 1381 2259 1381 1753 Q 1381 1247 1553 959 Q 1725 672 2022 672 Q 2319 672 2487 959 Q 2656 1247 2656 1753 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-Bold-53"/> </g> </g> <g id="f6cd047-text_16"> <!-- classe[1].voto p-&gt;voto (*p).voto sono la stessa cella: 30 --> <g style="fill: var(--fig-steel)" transform="translate(144.36 210.740609) scale(0.1 -0.1)"> <defs> <path id="f6cd047-DejaVuSansMono-11" d="M 1528 953 L 2316 953 L 2316 0 L 1528 0 L 1528 953 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-53" d="M 1172 441 L 1172 -1331 L 594 -1331 L 594 3500 L 1172 3500 L 1172 3053 Q 1316 3313 1555 3448 Q 1794 3584 2106 3584 Q 2741 3584 3102 3093 Q 3463 2603 3463 1734 Q 3463 881 3100 395 Q 2738 -91 2106 -91 Q 1788 -91 1548 45 Q 1309 181 1172 441 z M 2859 1747 Q 2859 2416 2648 2756 Q 2438 3097 2022 3097 Q 1603 3097 1387 2755 Q 1172 2413 1172 1747 Q 1172 1084 1387 740 Q 1603 397 2022 397 Q 2438 397 2648 737 Q 2859 1078 2859 1747 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-10" d="M 1113 2009 L 2741 2009 L 2741 1497 L 1113 1497 L 1113 2009 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-21" d="M 275 3003 L 275 3572 L 3578 2266 L 3578 1747 L 275 441 L 275 1013 L 2931 2003 L 275 3003 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-d" d="M 3334 3897 L 2216 3291 L 3334 2681 L 3156 2375 L 2106 3009 L 2106 1831 L 1747 1831 L 1747 3009 L 697 2375 L 519 2681 L 1638 3291 L 519 3897 L 697 4206 L 1747 3572 L 1747 4750 L 2106 4750 L 2106 3572 L 3156 4206 L 3334 3897 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSansMono-1d" d="M 1528 3322 L 2316 3322 L 2316 2375 L 1528 2375 L 1528 3322 z M 1528 953 L 2316 953 L 2316 0 L 1528 0 L 1528 953 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSansMono-46"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(60.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(120.40625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(240.8125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(301.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3e" transform="translate(361.21875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-14" transform="translate(421.421875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-40" transform="translate(481.625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-11" transform="translate(541.828125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-59" transform="translate(602.03125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(662.234375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(722.4375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(782.640625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(842.84375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(903.046875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(963.25 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-53" transform="translate(1023.453125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-10" transform="translate(1083.65625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-21" transform="translate(1143.859375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-59" transform="translate(1204.0625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(1264.265625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(1324.46875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(1384.671875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(1444.875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(1505.078125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(1565.28125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-b" transform="translate(1625.484375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-d" transform="translate(1685.6875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-53" transform="translate(1745.890625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-c" transform="translate(1806.09375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-11" transform="translate(1866.296875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-59" transform="translate(1926.5 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(1986.703125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(2046.90625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(2107.109375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(2167.3125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(2227.515625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(2287.71875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(2347.921875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(2408.125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(2468.328125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(2528.53125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-51" transform="translate(2588.734375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-52" transform="translate(2648.9375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(2709.140625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(2769.34375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(2829.546875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(2889.75 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(2949.953125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-57" transform="translate(3010.15625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(3070.359375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(3130.5625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-56" transform="translate(3190.765625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(3250.96875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(3311.171875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-46" transform="translate(3371.375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-48" transform="translate(3431.578125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(3491.78125 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-4f" transform="translate(3551.984375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-44" transform="translate(3612.1875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-1d" transform="translate(3672.390625 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-3" transform="translate(3732.59375 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-16" transform="translate(3792.796875 0)"/> <use xlink:href="#f6cd047-DejaVuSansMono-13" transform="translate(3853 0)"/> </g> </g> <g id="f6cd047-text_17"> <!-- p = classe + 1: p++ avanza di una struct intera (24 byte) --> <g style="fill: var(--fig-axis)" transform="translate(144.36 238.434047) scale(0.1 -0.1)"> <defs> <path id="f6cd047-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-14" d="M 447 0 L 513 331 L 1325 331 L 2078 4213 L 1019 3603 L 1100 4013 L 2381 4750 L 2813 4750 L 1953 331 L 2766 331 L 2700 0 L 447 0 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-1d" d="M 529 29 Q 434 150 468 325 Q 503 500 647 622 Q 791 744 966 744 Q 1141 744 1237 622 Q 1334 500 1300 325 Q 1266 150 1123 29 Q 981 -91 803 -91 Q 625 -91 529 29 z M 926 2067 Q 828 2188 862 2363 Q 897 2538 1040 2658 Q 1184 2778 1359 2778 Q 1538 2778 1633 2659 Q 1728 2541 1693 2362 Q 1659 2184 1518 2065 Q 1378 1947 1200 1947 Q 1025 1947 926 2067 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-5d" d="M 2550 3047 Q 2887 3047 3216 3322 L 3403 3322 L 3353 3053 L 1081 684 Q 1112 675 1203 647 Q 1309 613 1416 544 L 1569 450 Q 1862 272 2075 272 Q 2484 272 2966 741 L 2891 363 Q 2356 -163 1950 -163 Q 1703 -156 1356 59 Q 1009 275 791 275 Q 453 275 125 0 L -63 0 L -13 269 L 2262 2634 Q 2228 2647 2137 2675 Q 2031 2709 1925 2778 L 1772 2872 Q 1478 3050 1266 3050 Q 856 3050 375 2581 L 450 2959 Q 984 3484 1391 3484 Q 1637 3478 1984 3262 Q 2331 3047 2550 3047 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-b" d="M 1472 -997 Q 778 -656 534 83 Q 291 822 506 1931 Q 722 3044 1253 3783 Q 1784 4522 2609 4863 L 2550 4556 Q 2006 4225 1679 3623 Q 1353 3022 1141 1931 Q 928 844 1020 242 Q 1113 -359 1531 -691 L 1472 -997 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-15" d="M 1050 3553 L 700 3553 L 862 4384 Q 1231 4563 1589 4656 Q 1947 4750 2272 4750 Q 3000 4750 3353 4397 Q 3706 4044 3587 3438 Q 3456 2753 2312 1800 Q 2225 1728 2178 1691 L 772 513 L 2719 513 L 2831 1088 L 3197 1088 L 2984 0 L -25 0 L 41 341 L 1731 1753 Q 2291 2222 2567 2614 Q 2844 3006 2928 3438 Q 3019 3909 2825 4175 Q 2631 4441 2200 4441 Q 1753 4441 1467 4219 Q 1181 3997 1050 3553 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-17" d="M 2084 1581 L 2566 4063 L 491 1581 L 2084 1581 z M 3150 0 L 1025 0 L 1091 331 L 1841 331 L 2019 1247 L -19 1247 L 47 1588 L 2706 4750 L 3325 4750 L 2709 1581 L 3600 1581 L 3534 1247 L 2644 1247 L 2466 331 L 3216 331 L 3150 0 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> <path id="f6cd047-DejaVuSerif-Italic-c" d="M -113 -997 L -53 -691 Q 491 -359 819 242 Q 1147 844 1359 1931 Q 1572 3022 1478 3623 Q 1384 4225 966 4556 L 1025 4863 Q 1722 4522 1965 3783 Q 2209 3044 1994 1931 Q 1778 822 1247 83 Q 716 -656 -113 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6cd047-DejaVuSerif-Italic-53"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(64.015625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-20" transform="translate(95.796875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(179.59375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-46" transform="translate(211.375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-4f" transform="translate(267.375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-44" transform="translate(299.359375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-56" transform="translate(358.984375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-56" transform="translate(410.296875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-48" transform="translate(461.609375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(520.796875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-e" transform="translate(552.578125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(636.375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-14" transform="translate(668.15625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-1d" transform="translate(731.78125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(765.46875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-53" transform="translate(797.25 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-e" transform="translate(861.265625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-e" transform="translate(945.0625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(1028.859375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-44" transform="translate(1060.640625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-59" transform="translate(1120.265625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-44" transform="translate(1176.765625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-51" transform="translate(1236.390625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-5d" transform="translate(1300.796875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-44" transform="translate(1353.484375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(1413.109375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-47" transform="translate(1444.890625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-4c" transform="translate(1508.90625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(1540.890625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-58" transform="translate(1572.671875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-51" transform="translate(1637.078125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-44" transform="translate(1701.484375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(1761.109375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-56" transform="translate(1792.890625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-57" transform="translate(1844.203125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-55" transform="translate(1884.390625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-58" transform="translate(1932.1875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-46" transform="translate(1996.59375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-57" transform="translate(2052.59375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(2092.78125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-4c" transform="translate(2124.5625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-51" transform="translate(2156.546875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-57" transform="translate(2220.953125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-48" transform="translate(2261.140625 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-55" transform="translate(2320.328125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-44" transform="translate(2368.125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(2427.75 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-b" transform="translate(2459.53125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-15" transform="translate(2498.546875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-17" transform="translate(2562.171875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-3" transform="translate(2625.796875 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-45" transform="translate(2657.578125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-5c" transform="translate(2721.59375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-57" transform="translate(2778.09375 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-48" transform="translate(2818.28125 0)"/> <use xlink:href="#f6cd047-DejaVuSerif-Italic-c" transform="translate(2877.46875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f6cd047-pc773a632ef"> <rect x="5.76" y="5.76" width="609.84" height="255.024"/> </clipPath> </defs> </svg></figure>

`classe.voto[1]` non compila: `classe` è un array, non ha campi. gcc lo dice a modo suo, `'(studente *)&classe' is a pointer; did you mean to use '->'?` (verificato), perché il nome dell'array vale come puntatore al primo elemento (vedi [Puntatori](/uni/prog-1/puntatori/)). L'indice va **sull'array**, il punto **sull'elemento**. Ogni elemento occupa `sizeof(studente)` byte, qui $20 + 4 = 24$.

Gli algoritmi sono quelli di [Array](/uni/prog-1/array/) (contare, sommare, massimo, ricerca), con una differenza sola: la condizione o la somma guardano **un campo** dell'elemento. Lo schema è sempre lo stesso:

```
inizializza contatori / somme / indice del migliore    PRIMA del ciclo
for (i = 0; i < N; i++)
    se dati[i].campo soddisfa la condizione: aggiorna
stampa                                                  DOPO il ciclo
```

**Esempio 1, la domanda 6 della prova del 22/10/2024** (<span class="src">prova 2024, pagina 2</span>). Date le dichiarazioni

```
#define N 10
typedef struct Dato{
   float valore;
   int indice;
}Dato;
Dato dati[N];
```

scrivere un algoritmo che stampi quanti elementi hanno nel campo `indice` un valore minore di 5 e quanti hanno il campo `valore` compreso fra $-1.5$ e $+1.5$, estremi inclusi.

Si riconosce un **conteggio con condizione**, due volte. Servono due contatori separati, perché un elemento può soddisfare una condizione, l'altra, entrambe o nessuna: con un `else` fra i due `if` un elemento con tutte e due le proprietà verrebbe contato una volta sola. "Compreso fra, estremi inclusi" è `>= -1.5 && <= 1.5`, mai `-1.5 <= x <= 1.5`. Il programma completo, con un array di prova riempito nella dichiarazione (all'esame basta il ciclo con i due contatori):

```c
#include <stdio.h>

#define N 10

typedef struct Dato {
    float valore;
    int indice;
} Dato;

int main(void)
{
    Dato dati[N] = {{0.5f, 7}, {-2.0f, 8}, {1.5f, 5}, {3.2f, 1}, {-1.5f, 4},
                    {0.0f, 9}, {7.1f, 2}, {-0.7f, 6}, {1.6f, 0}, {-3.0f, 5}};
    int i;
    int quanti_indice = 0;
    int quanti_valore = 0;

    for (i = 0; i < N; i++) {
        if (dati[i].indice < 5)
            quanti_indice++;
        if (dati[i].valore >= -1.5f && dati[i].valore <= 1.5f)
            quanti_valore++;
    }
    printf("indice < 5: %d\n", quanti_indice);
    printf("valore in [-1.5, 1.5]: %d\n", quanti_valore);
    return 0;
}
```

| `i` | `dati[i].valore` | `dati[i].indice` | `indice < 5` | `valore` in $[-1.5, 1.5]$ | `quanti_indice` | `quanti_valore` |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0.5 | 7 | no | sì | 0 | 1 |
| 1 | -2.0 | 8 | no | no | 0 | 1 |
| 2 | 1.5 | 5 | no (5 < 5 falso) | sì (estremo) | 0 | 2 |
| 3 | 3.2 | 1 | sì | no | 1 | 2 |
| 4 | -1.5 | 4 | sì | sì (estremo) | 2 | 3 |
| 5 | 0.0 | 9 | no | sì | 2 | 4 |
| 6 | 7.1 | 2 | sì | no | 3 | 4 |
| 7 | -0.7 | 6 | no | sì | 3 | 5 |
| 8 | 1.6 | 0 | sì | no | 4 | 5 |
| 9 | -3.0 | 5 | no | no | 4 | 5 |

Output (verificato): `indice < 5: 4` e `valore in [-1.5, 1.5]: 5`. Le righe 2 e 4 sono il controllo degli estremi: con `<` e `>` al posto di `<=` e `>=` il secondo conteggio darebbe 3. Il confronto con l'estremo 1.5 fra `float` qui è esatto, perché $1.5 = 1 + \frac12$ si scrive in binario con un numero finito di cifre (`1.1`); con un estremo come 0.1 non sarebbe così (vedi [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/)).

**Esempio 2, media con condizione e massimo.** Media dei voti dei maggiorenni (con un messaggio se non ce ne sono) e nome dello studente con il voto più alto. Si riconoscono due schemi nello stesso ciclo: somma e conteggio condizionati (la media si calcola **dopo** il ciclo, e solo se il conteggio non è zero), e massimo con **indice** del migliore, così alla fine si ha accesso a tutti i suoi campi.

```c
#include <stdio.h>

#define N 5

typedef struct {
    char nome[20];
    int eta;
    float voto;
} studente;

int main(void)
{
    studente classe[N] = {{"Anna", 19, 27.5f}, {"Bruno", 17, 29.0f}, {"Carla", 20, 24.0f},
                          {"Dario", 18, 29.0f}, {"Elena", 16, 22.5f}};
    int i;
    int imax = 0;
    int quanti = 0;
    float somma = 0;

    for (i = 0; i < N; i++) {
        if (classe[i].eta >= 18) {
            somma += classe[i].voto;
            quanti++;
        }
        if (classe[i].voto > classe[imax].voto)
            imax = i;
    }
    if (quanti > 0)
        printf("media maggiorenni: %.2f\n", somma / quanti);
    else
        printf("nessun maggiorenne\n");
    printf("voto piu' alto: %s (%.1f)\n", classe[imax].nome, classe[imax].voto);
    return 0;
}
```

| `i` | `nome` | `eta >= 18` | `somma` | `quanti` | `voto > classe[imax].voto` | `imax` |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | Anna | sì | 27.5 | 1 | 27.5 > 27.5 no | 0 |
| 1 | Bruno | no | 27.5 | 1 | 29.0 > 27.5 sì | 1 |
| 2 | Carla | sì | 51.5 | 2 | 24.0 > 29.0 no | 1 |
| 3 | Dario | sì | 80.5 | 3 | 29.0 > 29.0 no | 1 |
| 4 | Elena | no | 80.5 | 3 | 22.5 > 29.0 no | 1 |

Dopo il ciclo: $80.5 / 3 = 26.8\overline{3}$. Output (verificato): `media maggiorenni: 26.83` e `voto piu' alto: Bruno (29.0)`. `somma` è `float`, quindi la divisione per l'intero `quanti` è fra reali; con `int somma` servirebbe il cast `(float)somma / quanti`. Dario ha lo stesso voto di Bruno ma non lo sostituisce: col `>` vince il primo trovato, col `>=` vincerebbe l'ultimo.

## Metodo

**Definire una struct per un oggetto del problema.**
1. Elenca le informazioni dell'oggetto e scegli per ognuna il tipo: testo in `char nome[N]` (con $N$ = lunghezza massima + 1), interi in `int`, decimali in `float`, valori da un elenco chiuso in un `enum`.
2. Scrivi `typedef struct { ... } NomeTipo;` prima di `main`.
3. Dichiara le variabili, singole o in array: `NomeTipo elenco[DIM];`.

**Inizializzare.** Con una lista fra graffe, **nell'ordine dei campi**: `data d = {14, OTT, 2026};`. Per una struct annidata, graffe annidate: `{{1, 5}, {4, 2}}`. I campi non elencati valgono 0, come per gli array.

**Leggere da tastiera.** Un `scanf` per campo, con `&` per i campi numerici e **senza** `&` per i campi stringa (sono array): `scanf("%d", &s.anno)`, `scanf("%19s", s.autore)`.

**Stampare un enum come testo.** `switch (x.tipo) { case A: printf("A"); break; ... default: printf("N/A"); }`.

**Copiare e confrontare.** La copia è `y = x;`. Il confronto si fa campo per campo; per i campi stringa, carattere per carattere (vedi [Stringhe](/uni/prog-1/stringhe/)).

**Algoritmo su un array di struct** (domanda 6 della provetta).
1. Leggi la consegna e scrivi accanto a ogni richiesta lo schema: "quanti" è un contatore, "media" è somma più contatore, "il più alto" è un indice del migliore, "c'è / dove sta" è una ricerca.
2. Dichiara e **inizializza** contatori e somme prima del ciclo (a 0), l'indice del migliore a 0.
3. Un solo `for (i = 0; i < N; i++)`; dentro, un `if` **separato** per ogni richiesta, con il campo giusto: `dati[i].campo`.
4. Traduci gli intervalli con `&&` ed estremi espliciti: "fra $a$ e $b$ inclusi" è `x >= a && x <= b`.
5. Dopo il ciclo: le divisioni (con il contatore diverso da 0) e le stampe.
6. Controlla su un array piccolo inventato da te, con un elemento sugli estremi e uno che soddisfa entrambe le condizioni.

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

In una pagina a parte, dal più facile al livello del 30: [Struct, typedef ed enum (esercizi)](/uni/prog-1/struct-typedef-ed-enum-esercizi/).

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
- `classe.voto[i]` al posto di `classe[i].voto`: l'indice va sull'array, il punto sull'elemento.
- Contatori e somme non inizializzati a 0, o inizializzati dentro il ciclo (ripartono da 0 a ogni giro).
- Due conteggi indipendenti scritti con `if ... else if`: un elemento che soddisfa entrambe le condizioni viene contato una volta sola.
- Media calcolata dentro il ciclo, o divisa per zero quando nessun elemento soddisfa la condizione, o fatta fra interi (`somma / quanti` con `int somma` tronca).
- Estremi sbagliati: "compreso fra $-1.5$ e $1.5$ estremi inclusi" con `<` al posto di `<=`.

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

- Dopo `b = a;` fra due struct con un campo array, modificare `b.nome[0]` cambia anche `a.nome`? Perché?

- Con `studente classe[30];`, come si scrive il voto del quarto studente e la prima lettera del suo nome? Perché `classe.voto[3]` non compila?

- In un algoritmo che conta quanti elementi soddisfano due condizioni diverse, perché servono due `if` separati e non un `if ... else if`?

- Come si traduce in C "il campo `valore` è compreso fra $-1.5$ e $1.5$, estremi inclusi"?

- Per stampare il nome dello studente con il voto più alto, conviene tenere il voto massimo o l'indice del migliore? Cosa cambia fra `>` e `>=` nel confronto?

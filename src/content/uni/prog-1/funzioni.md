---
title: Funzioni
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: bozza
data: 2026-10-23
lezioni:
  - ott, giorno?
ordine: 17
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 6.2, prima parte e parte finale: <span class="src">slide 4-25</span> (sottoprogrammi, l'esempio dei movimenti, funzioni e procedure), <span class="src">slide 27-72</span> (struttura di un programma, definizione, `return`, invocazione, prototipi, `rand` e `random`), <span class="src">slide 73-90</span> (modello di esecuzione, ambienti, pila), <span class="src">slide 132-149</span> (ambienti, visibilità, ciclo di vita, libreria standard). La parte centrale del deck (slide 91-131 e gli esercizi 150-154) è in [Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/). Prima: [Puntatori](/uni/prog-1/puntatori/). Dopo: [Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cos'è un sottoprogramma e perché si usa (riuso, astrazione); differenza fra funzione e procedura (`void`); le parti di una definizione (testata con tipo di ritorno, nome, parametri formali; corpo con parte dichiarativa locale e parte esecutiva); parametri formali ed effettivi; cosa fa `return` e cosa succede se manca; differenza fra definizione e prototipo e perché il prototipo serve; cosa contiene l'ambiente (record di attivazione) di una funzione e perché le chiamate si gestiscono con una pila; regole di visibilità e mascheramento; variabili automatiche, statiche, globali.
> - **Saper fare**: tracciare un programma con più funzioni disegnando la pila dei record riga per riga; dire cosa stampa un programma con variabile globale e locale con lo stesso nome; scrivere funzioni brevi (massimo, potenza, somma delle cifre, MCD, numero casuale in un intervallo) con prototipo, definizione e chiamata.
> - **Dove esce**: nella teorica i tracing "scrivi l'output esatto" usano "variabile globale e locale con lo stesso nome" e le cifre della matricola passate a una funzione (vedi [Esami passati](/uni/prog-1/esami-passati/), tipo 2); la ricorsione (dicembre) si traccia con la stessa pila. Al calcolatore ogni punto C-F è una funzione da scrivere in `dati.cpp` con il prototipo in `dati.h`: `newX`, `addX`, `stampaX`, `salvaX`.

Il filo del deck:

```
perché               blocchi ripetuti (due cicli uguali per entrate e uscite)
     |
sottoprogramma       totMov(entrate) - totMov(uscite): si chiama come un'espressione
     |
sintassi             testata + corpo, return, prototipo, struttura del programma
     |
esempi               Prodotto, AreaRettangolo, razionali con mcd, random
     |
esecuzione           una macchina dedicata per ogni chiamata, il suo ambiente
     |
pila                 una sola macchina, gli ambienti impilati (LIFO)
     |
[passaggio dei parametri: nota a parte]
     |
ambienti             globale, funzione, blocco: visibilità e mascheramento
     |
ciclo di vita        statiche, automatiche, static
```

## Definizioni

**Perché i sottoprogrammi** (<span class="src">slide 4-7</span>). Due motivi:
- **blocchi di istruzioni ripetuti** in parti diverse dello stesso programma: inizializzare un array, sommarne gli elementi, trovarne il massimo;
- **blocchi riutilizzabili** da programmi e programmatori diversi: stringhe e caratteri, calcoli matematici, input/output.

Il sottoprogramma realizza un'**astrazione** (incapsulamento): separa il compito da eseguire (moltiplicare due interi, stampare una variabile) dal modo in cui viene eseguito. Chi usa `printf` conosce l'**interfaccia** ("stampa la variabile d") e non sa niente del programma che pilota la periferica. Il sottoprogramma è **asservito** al chiamante: lavora per lui, quando lui lo chiede.

**Sottoprogramma** (<span class="src">slide 15-20</span>). Un pezzo di programma con un nome, che prima si **definisce** e poi si **invoca** (chiama), cioè si attiva per calcolare i risultati richiesti. Nell'esempio dei movimenti (sotto, Esempi svolti) i due cicli che sommano entrate e uscite sono identici: si scorporano in un sottoprogramma `totMov` e il chiamante diventa una riga sola, `utile = totMov(entrate) - totMov(uscite);`.

**Funzione e procedura** (<span class="src">slide 25</span>, <span class="src">slide 114</span>). In C ci sono due tipi di sottoprogrammi:
- **funzione**: restituisce un valore al chiamante, come una funzione matematica ($f(x) = x^2$ applicata a 3 vale 9);
- **procedura**: svolge un compito per il chiamante ma non restituisce un valore. Si scrive come una funzione con tipo di ritorno **`void`**, un tipo che non corrisponde a nessun valore e serve solo a rispettare la sintassi. Esempi: stampare un elenco di fatture, ordinare un array, leggere una tabella.

**Definizione di una funzione** (<span class="src">slide 29-32</span>, <span class="src">slide 55</span>). È composta da:
- una **testata** (header), con le informazioni per usarla correttamente: il **tipo del risultato** (il "codominio"), l'**identificatore** della funzione, la **lista dei parametri formali** con il loro tipo (il "dominio");
- un blocco, il **corpo** (body), a sua volta diviso in **parte dichiarativa locale** (le variabili che servono all'esecuzione) e **parte esecutiva** (le istruzioni).

```
 tipo di      nome      parametri formali
 ritorno       |               |
   |           |       ________|________
  int        power   (int base, int n)  {        testata
                  int i, p=1;                    parte dichiarativa locale
                  for(i=1; i<=n; i++)            .
                       {p*=base;}                parte esecutiva
                  return p;                      .
              }
```

`power(base, n)` calcola $base^n$ moltiplicando `p` per `base` $n$ volte.

**Variabili locali** (<span class="src">slide 59</span>). Le variabili della parte dichiarativa locale (`i` e `p` in `power`) seguono le stesse regole della parte dichiarativa di `main`. Esistono solo durante la chiamata e sono visibili solo dentro la funzione.

**Invocazione** (<span class="src">slide 21</span>, <span class="src">slide 56</span>). La sintassi viene dalla matematica: una funzione applicata ai suoi argomenti fornisce un valore del suo codominio.

```
id_funzione(lista dei parametri effettivi)
```

L'invocazione è un'**espressione**: viene valutata e poi **sostituita dal valore** generato dall'esecuzione del sottoprogramma. Quindi si può mettere ovunque va un valore: a destra di un'assegnazione, dentro un `printf`, come argomento di un'altra funzione. Ogni parametro effettivo è a sua volta un'espressione e può contenere un'altra chiamata (<span class="src">slide 60</span>):

```
x = sin(y) - cos(pi - alfa);
x = cos(atan(y) - beta);
risultatoDiGestione = fatturatoTotale(archivioFatture) - sommaCosti(archivioCosti);
```

**Parametri formali ed effettivi** (<span class="src">slide 58</span>).
- **Parametri formali**: gli argomenti elencati nella testata (`base` e `n` in `int power(int base, int n)`). Sono nomi segnaposto.
- **Parametri effettivi**: i valori con cui la funzione viene invocata (`2` e `i` in `power(2, i)`).
- All'atto dell'invocazione **i parametri formali vengono inizializzati con i valori dei parametri effettivi**, nell'ordine: il primo effettivo va nel primo formale, il secondo nel secondo. I nomi non contano: in `power(3, i)` il valore di `i` finisce in `n`.

```
int power(int base, int n);                    parametri formali: base, n
printf("%d %d %d\n", i, power(2,i), power(3,i));   parametri effettivi: 2 e i, 3 e i
```

**Ritorno al chiamante** (<span class="src">slide 50</span>). Tre modi per restituire il controllo:
1. la funzione non restituisce niente (per esempio stampa un array) e l'esecuzione arriva alla `}` che chiude il corpo;
2. la funzione esegue `return;`;
3. la funzione esegue `return espressione;`.

**`return`** (<span class="src">slide 52-53</span>). In `return x+y;` il valore dell'espressione diventa il **risultato** della funzione: visto dal chiamante, è il valore della funzione in corrispondenza dei parametri di ingresso. L'istruzione **termina subito** il sottoprogramma e restituisce il controllo al chiamante: le istruzioni dopo non vengono eseguite. Nel corpo ci possono essere più `return`, e se ne esegue uno solo, quello che il flusso incontra per primo. Se in una funzione non `void` non se ne esegue nessuno, la funzione termina alla `}` e il risultato è **indefinito**: gcc con `-Wall` avvisa `control reaches end of non-void function` (verificato).

**Il tipo del risultato** (<span class="src">slide 51</span>).
- Può essere un tipo predefinito (`int`, `float`, ...) o definito dall'utente (una `struct`, come `Razionale` sotto).
- **Non può essere un array** (`int []`).
- Può essere un puntatore a qualsiasi tipo.
- Si restituisce **un solo valore**. Per restituirne di più si usano i parametri per indirizzo ([Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/)) o una `struct`.

**`main`** (<span class="src">slide 28</span>, <span class="src">slide 54</span>). `main` è di fatto una funzione particolare: quella da cui parte l'esecuzione. Ha tipo di ritorno `int` e il valore restituito indica l'**esito** del programma a chi l'ha lanciato (la shell): `return 0` vuol dire terminato con successo. Se manca, lo standard restituisce implicitamente 0. Il significato dei valori diversi da 0 dipende dall'ambiente chiamante.

**Definizione e dichiarazione (prototipo)** (<span class="src">slide 62-64</span>). Una funzione si può invocare **solo se prima è stata definita o dichiarata**: il compilatore deve conoscerne tipi e parametri per controllare che la chiamata sia corretta. Le due parole non sono sinonimi:
- la **definizione** comprende testata **e** corpo;
- la **dichiarazione**, o **prototipo**, comprende **soltanto la testata**, seguita da `;`.

```
int power(int base, int n);              prototipo: solo testata e ;
int power(int base, int n) { ... }       definizione: testata e corpo
```

Il prototipo si mette nella parte dichiarativa globale, prima delle chiamate; la definizione può venire dopo l'invocazione o stare in un altro file (è quello che si fa con `dati.h` e `dati.cpp` all'esame). Le prime versioni del C (K&R) non chiedevano i tipi degli argomenti e non controllavano i parametri; il C moderno ha preso dal C++ il controllo dei tipi su prototipo e definizione (<span class="src">slide 63</span>). Nel prototipo i nomi dei parametri sono facoltativi (`int power(int, int);` va bene), i tipi no.

**Struttura di un programma C** (<span class="src">slide 27-28</span>, <span class="src">slide 33</span>). In ordine:
1. direttive al precompilatore (`#include`, `#define`, ...);
2. dichiarazioni degli elementi condivisi da tutto il programma (`main` e sottoprogrammi): costanti, tipi, variabili globali, **prototipi**;
3. definizioni dei sottoprogrammi, cominciando da `main`.

**Ambiente** (<span class="src">slide 86</span>). La memoria della macchina dedicata a una chiamata. Contiene:
- le **variabili locali**;
- i **parametri**, trattati come variabili locali inizializzate all'atto della chiamata;
- il **risultato**.

Viene **rilasciato** al termine dell'esecuzione della funzione. Si chiama anche **record di attivazione**: un record per ogni chiamata in corso.

**Pila (stack)** (<span class="src">slide 89-90</span>). In pratica CPU e memoria sono uniche, quindi tutti gli ambienti sono gestiti da una sola macchina nella memoria centrale, organizzata **a pila**: struttura dati **LIFO** (Last In First Out), l'ultimo entrato è il primo a uscire.
- L'invocazione di una funzione alloca nuova memoria **in cima** alla pila.
- La stessa macchina esegue il sottoprogramma usando i dati in cima.
- Quando il sottoprogramma termina, il suo ambiente viene **rimosso** dalla pila e la memoria recuperata.

**Ambienti di un programma** (<span class="src">slide 132-133</span>). Un ambiente è definito dal perimetro sintattico:
1. dell'intero programma (**ambiente globale**, esterno a tutte le macchine: `main` e le altre funzioni ci accedono);
2. di una funzione;
3. di un blocco `{ }`.

**Blocco** (<span class="src">slide 138</span>). Può comparire ovunque la sintassi consenta un'istruzione ed è fatto di una parte dichiarativa (facoltativa) e di una sequenza di istruzioni, fra graffe. Due blocchi sono **annidati** se uno è dentro l'altro, **paralleli** se sono tutti e due dentro un terzo blocco ma non uno dentro l'altro.

**Visibile** (<span class="src">slide 142</span>). Un identificatore (variabile, sottoprogramma) è visibile in un punto se lì si può denotare con il suo nome: valutarlo in un'espressione, usarlo a sinistra di un'assegnazione.

**Regole di visibilità** (<span class="src">slide 143-144</span>).
- Gli identificatori della parte dichiarativa **globale** sono visibili da tutte le funzioni (`main` e procedure comprese) e da tutti i blocchi. Gli identificatori predefiniti del linguaggio si considerano dichiarati lì.
- Le variabili della parte dichiarativa **locale a una funzione** sono visibili dalle istruzioni del suo corpo, blocchi interni compresi.
- Le variabili dichiarate **in un blocco** sono visibili nel blocco e nei blocchi interni.
- **Mascheramento** (deroga): una dichiarazione in un blocco **maschera** le entità omonime esterne al blocco. Dentro il blocco il nome indica la variabile più interna.

**Ciclo di vita** (<span class="src">slide 145-148</span>). Va dalla creazione (allocazione della memoria) alla distruzione (rilascio). Due classi:
- **statiche**: allocate una sola volta e distrutte al termine del programma. Lo sono le **globali**, che fanno da canale di comunicazione fra funzioni. Anche una variabile di funzione o di blocco può essere dichiarata **`static`**: allora persiste fra una chiamata e l'altra.
- **dinamiche**: create e distrutte durante l'esecuzione, implicitamente dal sistema (**automatiche**) o esplicitamente dal programmatore con appositi costrutti (`malloc`/`new`, più avanti nel corso).

Le **variabili automatiche** sono quelle dichiarate nelle funzioni (parametri compresi) e nei blocchi: create quando il flusso entra nel loro ambito, distrutte all'uscita. Se la funzione o il blocco viene eseguito più volte, ogni volta sono allocate in un ambiente nuovo: **i valori delle esecuzioni precedenti non si conservano**.

**Effetto collaterale** (side effect, <span class="src">slide 134</span>). Una funzione che modifica una variabile globale (o una variabile del chiamante tramite un puntatore) ha un effetto che non resta confinato nel suo ambiente e può interessare variabili usate da altre funzioni. Per questo le variabili globali sono sconsigliate, o vanno giustificate.

**Libreria standard** (<span class="src">slide 149</span>). Funzioni predefinite per gli usi comuni: ingresso/uscita (`stdio.h`), stringhe (`string.h`), matematica (`math.h`), memoria, caratteri (`ctype.h`), ordinamento e ricerca e numeri casuali (`stdlib.h`), comunicazione con il sistema operativo. Si usano includendo l'header, che contiene i loro prototipi.

## Concetti

### Una chiamata, passo per passo

Il modello del prof (<span class="src">slide 83</span>): immaginiamo una macchina dedicata a `main`; quando `main` invoca una funzione, viene creata un'altra macchina dedicata a lei, con la sua memoria, e così per ogni invocazione. In realtà la macchina è una sola e le memorie sono record impilati, ma i passi sono questi:

```
chiamata  f(e1, e2)
  1. il chiamante valuta i parametri effettivi e1, e2          (valori)
  2. si crea il record di f in cima alla pila
  3. i parametri formali di f prendono quei valori             (copia)
  4. si esegue il corpo di f, che vede solo il suo record e le globali
  5. return v: il valore v torna al chiamante, il record di f si elimina
  6. nel chiamante l'espressione f(e1, e2) è sostituita da v
```

Esempio 1, una chiamata sola: `power(2, 3)`.

| passo | record di `main` | record di `power` | nota |
| --- | --- | --- | --- |
| chiamata | `i` = 3 | `base` = 2, `n` = 3, `i` = ?, `p` = 1 | i formali prendono 2 e 3 |
| `i = 1`, `p *= base` | | `i` = 1, `p` = 2 | |
| `i = 2`, `p *= base` | | `i` = 2, `p` = 4 | |
| `i = 3`, `p *= base` | | `i` = 3, `p` = 8 | |
| `i = 4`, `4 <= 3` falso | | `i` = 4, `p` = 8 | esce dal `for` |
| `return p;` | riceve 8 | eliminato | |

Il record di `power` ha la **sua** `i`, che non ha niente a che fare con la `i` di `main`: due variabili diverse con lo stesso nome, in due ambienti diversi. La `i` di `main` resta 3. Il programma completo della slide 58:

```c
#include <stdio.h>

int power(int base, int n)
{
    int i;
    int p = 1;

    for (i = 1; i <= n; i++) {
        p *= base;
    }
    return p;
}

int main(void)
{
    int i;

    for (i = 0; i <= 4; i++) {
        printf("%d %d %d\n", i, power(2, i), power(3, i));
    }
    return 0;
}
```

Output (verificato):

```
0 1 1
1 2 3
2 4 9
3 8 27
4 16 81
```

Con `n = 0` il `for` non esegue nessun giro e `p` resta 1: $2^0 = 1$, come deve essere.

Esempio 2, una funzione che ne chiama un'altra:

```c
#include <stdio.h>

int quadrato(int n)
{
    int q;

    q = n * n;
    return q;
}

int somma_quadrati(int a, int b)
{
    int s;

    s = quadrato(a);
    s = s + quadrato(b);
    return s;
}

int main(void)
{
    int x = 3;
    int r;

    r = somma_quadrati(x, x + 1);
    printf("r=%d\n", r);
    return 0;
}
```

La pila, dal basso (il primo record) verso l'alto:

| istante | pila | nota |
| --- | --- | --- |
| prima della chiamata | `main`: `x` = 3, `r` = ? | |
| `somma_quadrati(x, x + 1)` | `main` \| `somma_quadrati`: `a` = 3, `b` = 4, `s` = ? | `x + 1` si valuta prima: 4 |
| `quadrato(a)` | `main` \| `somma_quadrati` \| `quadrato`: `n` = 3, `q` = 9 | tre record |
| ritorno | `main` \| `somma_quadrati`: `s` = 9 | `quadrato` eliminato |
| `quadrato(b)` | `main` \| `somma_quadrati` \| `quadrato`: `n` = 4, `q` = 16 | record **nuovo**, `q` riparte da ? |
| ritorno | `main` \| `somma_quadrati`: `s` = 9 + 16 = 25 | |
| ritorno | `main`: `r` = 25 | |

Output: `r=25` (verificato). La seconda chiamata di `quadrato` non trova niente della prima: il suo record è stato eliminato e ricreato da zero.

### La pila delle chiamate

(<span class="src">slide 84-90</span>) La funzione che chiama non sa **come** la chiamata svolge il suo compito, e neanche se a sua volta chiama altre funzioni: lo nasconde. Le chiamate formano un albero (`Fun0` chiama `Fun0.1` e `Fun0.2`, `Fun0.1` chiama `Fun0.1.1` e `Fun0.1.2`...), e ogni nodo ha il suo ambiente con le sue variabili (nella slide 85 `Fun0` e `Fun0.1.1` hanno tutte e due una `int i`, che sono variabili diverse). In ogni istante però è in esecuzione **un ramo solo**, dalla radice alla chiamata corrente: è quello che sta nella pila.

<figure class="fig"><svg role="img" aria-label="Pila delle chiamate" xmlns:xlink="http://www.w3.org/1999/xlink" width="736.92pt" height="222.545455pt" viewBox="0 0 736.92 222.545455" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f639ff3-figure_1"> <g id="f639ff3-patch_1"> <path d="M 0 222.545455 L 736.92 222.545455 L 736.92 0 L 0 0 L 0 222.545455 z " style="fill: none"/> </g> <g id="f639ff3-axes_1"> <g id="f639ff3-patch_2"> <path d="M 14.552727 181.614545 L 115.669091 181.614545 L 115.669091 159.632727 L 14.552727 159.632727 L 14.552727 181.614545 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_3"> <path d="M 133.254545 181.614545 L 234.370909 181.614545 L 234.370909 159.632727 L 133.254545 159.632727 L 133.254545 181.614545 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_4"> <path d="M 133.254545 154.137273 L 234.370909 154.137273 L 234.370909 132.155455 L 133.254545 132.155455 L 133.254545 154.137273 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_5"> <path d="M 251.956364 181.614545 L 353.072727 181.614545 L 353.072727 159.632727 L 251.956364 159.632727 L 251.956364 181.614545 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_6"> <path d="M 251.956364 154.137273 L 353.072727 154.137273 L 353.072727 132.155455 L 251.956364 132.155455 L 251.956364 154.137273 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_7"> <path d="M 251.956364 126.66 L 353.072727 126.66 L 353.072727 60.714545 L 251.956364 60.714545 L 251.956364 126.66 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_8"> <path d="M 295.92 102.919636 L 344.28 102.919636 L 344.28 84.454909 L 295.92 84.454909 L 295.92 102.919636 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_9"> <path d="M 295.92 124.901455 L 344.28 124.901455 L 344.28 106.436727 L 295.92 106.436727 L 295.92 124.901455 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_10"> <path d="M 370.658182 181.614545 L 471.774545 181.614545 L 471.774545 159.632727 L 370.658182 159.632727 L 370.658182 181.614545 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_11"> <path d="M 370.658182 154.137273 L 471.774545 154.137273 L 471.774545 132.155455 L 370.658182 132.155455 L 370.658182 154.137273 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_12"> <path d="M 370.658182 126.66 L 471.774545 126.66 L 471.774545 60.714545 L 370.658182 60.714545 L 370.658182 126.66 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_13"> <path d="M 414.621818 102.919636 L 462.981818 102.919636 L 462.981818 84.454909 L 414.621818 84.454909 L 414.621818 102.919636 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_14"> <path d="M 414.621818 124.901455 L 462.981818 124.901455 L 462.981818 106.436727 L 414.621818 106.436727 L 414.621818 124.901455 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_15"> <path d="M 489.36 181.614545 L 590.476364 181.614545 L 590.476364 159.632727 L 489.36 159.632727 L 489.36 181.614545 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_16"> <path d="M 489.36 154.137273 L 590.476364 154.137273 L 590.476364 132.155455 L 489.36 132.155455 L 489.36 154.137273 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_17"> <path d="M 608.061818 181.614545 L 709.178182 181.614545 L 709.178182 159.632727 L 608.061818 159.632727 L 608.061818 181.614545 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_18"> <path d="M 14.552727 49.723636 L 212.389091 49.723636 L 212.389091 14.552727 L 14.552727 14.552727 L 14.552727 49.723636 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke-dasharray: 5.18,2.24; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.4; stroke-linejoin: miter"/> </g> <g id="f639ff3-patch_19"> <path d="M 133.254545 42.03 L 168.425455 42.03 L 168.425455 22.246364 L 133.254545 22.246364 L 133.254545 42.03 z " clip-path="url(#f639ff3-pa29aeb38e5)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f639ff3-text_1"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(20.048182 173.481488) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSerif-Bold-50" d="M 3884 2778 Q 4116 3109 4384 3261 Q 4653 3413 5013 3413 Q 5584 3413 5867 3089 Q 6150 2766 6150 2113 L 6150 378 L 6625 378 L 6625 0 L 4647 0 L 4647 378 L 5044 378 L 5044 1947 Q 5044 2569 4948 2731 Q 4853 2894 4594 2894 Q 4300 2894 4137 2667 Q 3975 2441 3975 2022 L 3975 378 L 4372 378 L 4372 0 L 2472 0 L 2472 378 L 2869 378 L 2869 1947 Q 2869 2569 2772 2731 Q 2675 2894 2419 2894 Q 2122 2894 1959 2667 Q 1797 2441 1797 2022 L 1797 378 L 2194 378 L 2194 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 2853 Q 1991 3144 2241 3278 Q 2491 3413 2834 3413 Q 3241 3413 3494 3258 Q 3747 3103 3884 2778 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Bold-44" d="M 3525 2041 L 3525 378 L 4000 378 L 4000 0 L 2419 0 L 2419 422 Q 2200 159 1931 34 Q 1663 -91 1319 -91 Q 809 -91 536 182 Q 263 456 263 966 Q 263 1525 655 1803 Q 1047 2081 1838 2081 L 2419 2081 L 2419 2278 Q 2419 2681 2228 2873 Q 2038 3066 1638 3066 Q 1306 3066 1126 2930 Q 947 2794 872 2484 L 519 2484 L 519 3200 Q 816 3306 1134 3359 Q 1453 3413 1806 3413 Q 2697 3413 3111 3081 Q 3525 2750 3525 2041 z M 2419 1044 L 2419 1709 L 2003 1709 Q 1694 1709 1528 1540 Q 1363 1372 1363 1056 Q 1363 741 1483 584 Q 1603 428 1850 428 Q 2106 428 2262 597 Q 2419 766 2419 1044 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Bold-4c" d="M 588 4263 Q 588 4516 763 4689 Q 938 4863 1191 4863 Q 1438 4863 1611 4689 Q 1784 4516 1784 4263 Q 1784 4016 1611 3842 Q 1438 3669 1191 3669 Q 938 3669 763 3841 Q 588 4013 588 4263 z M 1797 378 L 2272 378 L 2272 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 378 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Bold-51" d="M 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 2853 Q 1997 3150 2253 3281 Q 2509 3413 2900 3413 Q 3459 3413 3745 3083 Q 4031 2753 4031 2113 L 4031 378 L 4506 378 L 4506 0 L 2522 0 L 2522 378 L 2925 378 L 2925 2144 Q 2925 2566 2817 2730 Q 2709 2894 2444 2894 Q 2109 2894 1953 2648 Q 1797 2403 1797 1869 L 1797 378 L 2203 378 L 2203 0 L 219 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-Bold-50"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-44" transform="translate(105.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-4c" transform="translate(170.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-51" transform="translate(208.59375 0)"/> </g> </g> <g id="f639ff3-text_2"> <!-- 1. parte main --> <g style="fill: var(--fig-axis)" transform="translate(34.482784 203.736072) scale(0.09 -0.09)"> <defs> <path id="f639ff3-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-11" d="M 603 325 Q 603 500 722 622 Q 841 744 1019 744 Q 1191 744 1312 622 Q 1434 500 1434 325 Q 1434 153 1312 31 Q 1191 -91 1019 -91 Q 841 -91 722 29 Q 603 150 603 325 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-14"/> <use xlink:href="#f639ff3-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(95.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-53" transform="translate(127.1875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(191.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-55" transform="translate(250.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-57" transform="translate(298.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-48" transform="translate(338.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(398 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-50" transform="translate(429.78125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(524.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4c" transform="translate(584.234375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-51" transform="translate(616.21875 0)"/> </g> </g> <g id="f639ff3-text_3"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(138.75 173.481488) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-50"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-44" transform="translate(105.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-4c" transform="translate(170.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-51" transform="translate(208.59375 0)"/> </g> </g> <g id="f639ff3-text_4"> <!-- f2 --> <g style="fill: var(--fig-steel)" transform="translate(138.75 146.004215) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSerif-Bold-49" d="M 3097 4031 L 2747 4031 Q 2722 4275 2605 4394 Q 2488 4513 2272 4513 Q 2022 4513 1909 4333 Q 1797 4153 1797 3750 L 1797 3322 L 2631 3322 L 2631 2944 L 1797 2944 L 1797 378 L 2438 378 L 2438 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 197 2944 L 197 3322 L 691 3322 L 691 3738 Q 691 4291 1044 4577 Q 1397 4863 2081 4863 Q 2347 4863 2600 4833 Q 2853 4803 3097 4744 L 3097 4031 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Bold-15" d="M 844 3513 L 469 3513 L 469 4519 Q 850 4634 1223 4692 Q 1597 4750 1978 4750 Q 2869 4750 3367 4386 Q 3866 4022 3866 3372 Q 3866 2909 3591 2542 Q 3316 2175 2541 1672 L 1241 819 L 3450 819 L 3450 1369 L 3878 1369 L 3878 0 L 428 0 L 428 763 L 1119 1241 Q 2003 1850 2297 2278 Q 2591 2706 2591 3278 Q 2591 3819 2367 4101 Q 2144 4384 1716 4384 Q 1347 4384 1125 4161 Q 903 3938 844 3513 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-Bold-49"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-15" transform="translate(43.015625 0)"/> </g> </g> <g id="f639ff3-text_5"> <!-- 2. main chiama f2() --> <g style="fill: var(--fig-axis)" transform="translate(139.40968 203.736424) scale(0.09 -0.09)"> <defs> <path id="f639ff3-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-4b" d="M 263 0 L 263 331 L 781 331 L 781 4531 L 231 4531 L 231 4863 L 1356 4863 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2704 2764 Q 2556 2988 2175 2988 Q 1775 2988 1565 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-15"/> <use xlink:href="#f639ff3-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(95.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-50" transform="translate(127.1875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(222.015625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4c" transform="translate(281.640625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-51" transform="translate(313.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(378.03125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-46" transform="translate(409.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4b" transform="translate(465.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4c" transform="translate(530.21875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(562.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-50" transform="translate(621.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(716.65625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(776.28125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-49" transform="translate(808.0625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-15" transform="translate(845.078125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-b" transform="translate(908.703125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-c" transform="translate(947.71875 0)"/> </g> </g> <g id="f639ff3-text_6"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(257.451818 173.481488) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-50"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-44" transform="translate(105.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-4c" transform="translate(170.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-51" transform="translate(208.59375 0)"/> </g> </g> <g id="f639ff3-text_7"> <!-- f2 --> <g style="fill: var(--fig-steel)" transform="translate(257.451818 146.004215) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-49"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-15" transform="translate(43.015625 0)"/> </g> </g> <g id="f639ff3-text_8"> <!-- f1 --> <g style="fill: var(--fig-accent)" transform="translate(257.451818 74.563306) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSerif-Bold-14" d="M 878 0 L 878 378 L 1753 378 L 1753 4153 L 781 3578 L 781 4044 L 1953 4750 L 2938 4750 L 2938 378 L 3816 378 L 3816 0 L 878 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-Bold-49"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-14" transform="translate(43.015625 0)"/> </g> </g> <g id="f639ff3-text_9"> <!-- p --> <g style="fill: var(--fig-ink)" transform="translate(284.901293 96.544695) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSansMono-53" d="M 1172 441 L 1172 -1331 L 594 -1331 L 594 3500 L 1172 3500 L 1172 3053 Q 1316 3313 1555 3448 Q 1794 3584 2106 3584 Q 2741 3584 3102 3093 Q 3463 2603 3463 1734 Q 3463 881 3100 395 Q 2738 -91 2106 -91 Q 1788 -91 1548 45 Q 1309 181 1172 441 z M 2859 1747 Q 2859 2416 2648 2756 Q 2438 3097 2022 3097 Q 1603 3097 1387 2755 Q 1172 2413 1172 1747 Q 1172 1084 1387 740 Q 1603 397 2022 397 Q 2438 397 2648 737 Q 2859 1078 2859 1747 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSansMono-53"/> </g> </g> <g id="f639ff3-text_10"> <!-- 0 --> <g style="fill: var(--fig-ink)" transform="translate(316.788828 96.544695) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSansMono-13"/> </g> </g> <g id="f639ff3-text_11"> <!-- ris --> <g style="fill: var(--fig-ink)" transform="translate(271.656605 118.526942) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSansMono-55" d="M 3609 2778 Q 3425 2922 3234 2987 Q 3044 3053 2816 3053 Q 2278 3053 1993 2715 Q 1709 2378 1709 1741 L 1709 0 L 1131 0 L 1131 3500 L 1709 3500 L 1709 2816 Q 1853 3188 2151 3386 Q 2450 3584 2859 3584 Q 3072 3584 3256 3531 Q 3441 3478 3609 3366 L 3609 2778 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSansMono-56" d="M 3041 3378 L 3041 2816 Q 2794 2959 2544 3031 Q 2294 3103 2034 3103 Q 1644 3103 1451 2976 Q 1259 2850 1259 2591 Q 1259 2356 1403 2240 Q 1547 2125 2119 2016 L 2350 1972 Q 2778 1891 2998 1647 Q 3219 1403 3219 1013 Q 3219 494 2850 201 Q 2481 -91 1825 -91 Q 1566 -91 1281 -36 Q 997 19 666 128 L 666 722 Q 988 556 1281 473 Q 1575 391 1838 391 Q 2219 391 2428 545 Q 2638 700 2638 978 Q 2638 1378 1872 1531 L 1847 1538 L 1631 1581 Q 1134 1678 906 1908 Q 678 2138 678 2534 Q 678 3038 1018 3311 Q 1359 3584 1991 3584 Q 2272 3584 2531 3532 Q 2791 3481 3041 3378 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSansMono-55"/> <use xlink:href="#f639ff3-DejaVuSansMono-4c" transform="translate(60.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSansMono-56" transform="translate(120.40625 0)"/> </g> </g> <g id="f639ff3-text_12"> <!-- ? --> <g style="fill: var(--fig-faint)" transform="translate(316.788828 118.526513) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSansMono-22" d="M 2138 1253 L 1544 1253 L 1544 1734 Q 1544 2041 1639 2255 Q 1734 2469 1997 2725 L 2278 3003 Q 2472 3188 2545 3325 Q 2619 3463 2619 3616 Q 2619 3894 2414 4066 Q 2209 4238 1869 4238 Q 1625 4238 1347 4130 Q 1069 4022 763 3809 L 763 4397 Q 1056 4575 1354 4662 Q 1653 4750 1978 4750 Q 2559 4750 2904 4450 Q 3250 4150 3250 3647 Q 3250 3409 3145 3204 Q 3041 3000 2747 2713 L 2472 2444 Q 2256 2238 2197 2106 Q 2138 1975 2138 1784 L 2138 1638 L 2138 1253 z M 1522 794 L 2156 794 L 2156 0 L 1522 0 L 1522 794 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSansMono-22"/> </g> </g> <g id="f639ff3-text_13"> <!-- 3. f2 chiama f1(x) --> <g style="fill: var(--fig-axis)" transform="translate(262.333061 203.736424) scale(0.09 -0.09)"> <defs> <path id="f639ff3-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-5b" d="M 1863 2028 L 2559 2988 L 2113 2988 L 2113 3322 L 3391 3322 L 3391 2988 L 2950 2988 L 2059 1759 L 3097 331 L 3531 331 L 3531 0 L 1997 0 L 1997 331 L 2419 331 L 1697 1325 L 972 331 L 1403 331 L 1403 0 L 141 0 L 141 331 L 581 331 L 1497 1594 L 488 2988 L 78 2988 L 78 3322 L 1563 3322 L 1563 2988 L 1166 2988 L 1863 2028 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-16"/> <use xlink:href="#f639ff3-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(95.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-49" transform="translate(127.1875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-15" transform="translate(164.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(227.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-46" transform="translate(259.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4b" transform="translate(315.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4c" transform="translate(380.015625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(412 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-50" transform="translate(471.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(566.453125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(626.078125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-49" transform="translate(657.859375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-14" transform="translate(694.875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-b" transform="translate(758.5 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-5b" transform="translate(797.515625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-c" transform="translate(853.90625 0)"/> </g> </g> <g id="f639ff3-text_14"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(376.153636 173.481488) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-50"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-44" transform="translate(105.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-4c" transform="translate(170.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-51" transform="translate(208.59375 0)"/> </g> </g> <g id="f639ff3-text_15"> <!-- f2 --> <g style="fill: var(--fig-steel)" transform="translate(376.153636 146.004215) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-49"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-15" transform="translate(43.015625 0)"/> </g> </g> <g id="f639ff3-text_16"> <!-- f1 --> <g style="fill: var(--fig-accent)" transform="translate(376.153636 74.563306) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-49"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-14" transform="translate(43.015625 0)"/> </g> </g> <g id="f639ff3-text_17"> <!-- p --> <g style="fill: var(--fig-ink)" transform="translate(403.603111 96.544695) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSansMono-53"/> </g> </g> <g id="f639ff3-text_18"> <!-- 0 --> <g style="fill: var(--fig-ink)" transform="translate(435.490646 96.544695) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSansMono-13"/> </g> </g> <g id="f639ff3-text_19"> <!-- ris --> <g style="fill: var(--fig-ink)" transform="translate(390.358423 118.526942) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSansMono-55"/> <use xlink:href="#f639ff3-DejaVuSansMono-4c" transform="translate(60.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSansMono-56" transform="translate(120.40625 0)"/> </g> </g> <g id="f639ff3-text_20"> <!-- 0 --> <g style="fill: var(--fig-ink)" transform="translate(435.490646 118.526513) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSansMono-13"/> </g> </g> <g id="f639ff3-text_21"> <!-- 4. f1 calcola p + x --> <g style="fill: var(--fig-axis)" transform="translate(380.060348 203.736424) scale(0.09 -0.09)"> <defs> <path id="f639ff3-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-17"/> <use xlink:href="#f639ff3-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(95.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-49" transform="translate(127.1875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-14" transform="translate(164.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(227.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-46" transform="translate(259.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(315.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4f" transform="translate(375.234375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-46" transform="translate(407.21875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-52" transform="translate(463.21875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4f" transform="translate(523.421875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(555.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(615.03125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-53" transform="translate(646.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(710.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-e" transform="translate(742.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(826.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-5b" transform="translate(858.1875 0)"/> </g> </g> <g id="f639ff3-text_22"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(494.855455 173.481488) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-50"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-44" transform="translate(105.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-4c" transform="translate(170.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-51" transform="translate(208.59375 0)"/> </g> </g> <g id="f639ff3-text_23"> <!-- f2 --> <g style="fill: var(--fig-steel)" transform="translate(494.855455 146.004215) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-49"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-15" transform="translate(43.015625 0)"/> </g> </g> <g id="f639ff3-text_24"> <!-- 5. f1 torna, f2 stampa 0 --> <g style="fill: var(--fig-axis)" transform="translate(486.241619 203.736424) scale(0.09 -0.09)"> <defs> <path id="f639ff3-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-18"/> <use xlink:href="#f639ff3-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(95.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-49" transform="translate(127.1875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-14" transform="translate(164.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(227.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-57" transform="translate(259.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-52" transform="translate(299.796875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-55" transform="translate(360 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-51" transform="translate(407.796875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(472.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-f" transform="translate(531.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(563.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-49" transform="translate(595.390625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-15" transform="translate(632.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(696.03125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-56" transform="translate(727.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-57" transform="translate(779.125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(819.3125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-50" transform="translate(878.9375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-53" transform="translate(973.765625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(1037.78125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(1097.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-13" transform="translate(1129.1875 0)"/> </g> </g> <g id="f639ff3-text_25"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(613.557273 173.481488) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSerif-Bold-50"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-44" transform="translate(105.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-4c" transform="translate(170.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Bold-51" transform="translate(208.59375 0)"/> </g> </g> <g id="f639ff3-text_26"> <!-- 6. f2 torna --> <g style="fill: var(--fig-axis)" transform="translate(634.687734 203.736424) scale(0.09 -0.09)"> <defs> <path id="f639ff3-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-19"/> <use xlink:href="#f639ff3-DejaVuSerif-11" transform="translate(63.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(95.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-49" transform="translate(127.1875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-15" transform="translate(164.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(227.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-57" transform="translate(259.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-52" transform="translate(299.796875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-55" transform="translate(360 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-51" transform="translate(407.796875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(472.203125 0)"/> </g> </g> <g id="f639ff3-text_27"> <!-- ambiente globale --> <g style="fill: var(--fig-axis)" transform="translate(20.048182 34.736229) scale(0.1 -0.1)"> <defs> <path id="f639ff3-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-44"/> <use xlink:href="#f639ff3-DejaVuSerif-50" transform="translate(59.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-45" transform="translate(154.453125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4c" transform="translate(218.46875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-48" transform="translate(250.453125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-51" transform="translate(309.640625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-57" transform="translate(374.046875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-48" transform="translate(414.234375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-3" transform="translate(473.421875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4a" transform="translate(505.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4f" transform="translate(569.21875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-52" transform="translate(601.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-45" transform="translate(661.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-44" transform="translate(725.421875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-4f" transform="translate(785.046875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-48" transform="translate(817.03125 0)"/> </g> </g> <g id="f639ff3-text_28"> <!-- x --> <g style="fill: var(--fig-ink)" transform="translate(122.235838 34.995604) scale(0.11 -0.11)"> <defs> <path id="f639ff3-DejaVuSansMono-5b" d="M 3494 3500 L 2241 1825 L 3616 0 L 2950 0 L 1925 1403 L 903 0 L 238 0 L 1613 1825 L 359 3500 L 997 3500 L 1925 2234 L 2847 3500 L 3494 3500 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSansMono-5b"/> </g> </g> <g id="f639ff3-text_29"> <!-- 0 --> <g style="fill: var(--fig-ink)" transform="translate(147.528828 34.995604) scale(0.11 -0.11)"> <use xlink:href="#f639ff3-DejaVuSansMono-13"/> </g> </g> <g id="f639ff3-text_30"> <!-- la pila cresce verso l'alto: l'ultimo record entrato è il primo a uscire (LIFO) --> <g style="fill: var(--fig-axis)" transform="translate(247.56 34.931541) scale(0.1 -0.1)"> <defs> <path id="f639ff3-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-1d" d="M 529 29 Q 434 150 468 325 Q 503 500 647 622 Q 791 744 966 744 Q 1141 744 1237 622 Q 1334 500 1300 325 Q 1266 150 1123 29 Q 981 -91 803 -91 Q 625 -91 529 29 z M 926 2067 Q 828 2188 862 2363 Q 897 2538 1040 2658 Q 1184 2778 1359 2778 Q 1538 2778 1633 2659 Q 1728 2541 1693 2362 Q 1659 2184 1518 2065 Q 1378 1947 1200 1947 Q 1025 1947 926 2067 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-50" d="M 3503 2675 Q 3741 3041 4034 3227 Q 4328 3413 4672 3413 Q 5194 3413 5388 3088 Q 5503 2894 5503 2578 Q 5503 2372 5453 2113 L 5106 331 L 5625 331 L 5563 0 L 4469 0 L 4866 2047 Q 4913 2291 4913 2466 Q 4913 2659 4856 2772 Q 4750 2988 4403 2988 Q 4019 2988 3761 2697 Q 3503 2406 3394 1850 L 3034 0 L 2459 0 L 2863 2069 Q 2906 2303 2906 2472 Q 2906 2666 2850 2775 Q 2741 2988 2394 2988 Q 2009 2988 1751 2697 Q 1494 2406 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1778 3063 2059 3238 Q 2341 3413 2653 3413 Q 3041 3413 3262 3220 Q 3484 3028 3503 2675 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-aa" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z M 2057 5113 L 2638 3938 L 2272 3938 L 1441 5113 L 2057 5113 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-b" d="M 1472 -997 Q 778 -656 534 83 Q 291 822 506 1931 Q 722 3044 1253 3783 Q 1784 4522 2609 4863 L 2550 4556 Q 2006 4225 1679 3623 Q 1353 3022 1141 1931 Q 928 844 1020 242 Q 1113 -359 1531 -691 L 1472 -997 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-2f" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 2631 4666 L 2566 4331 L 1972 4331 L 1206 384 L 3337 384 L 3487 1166 L 3872 1166 L 3647 0 L -97 0 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-2c" d="M 1194 331 L 1787 331 L 1725 0 L -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 2631 4666 L 2566 4331 L 1972 4331 L 1194 331 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-29" d="M -97 0 L -35 331 L 559 331 L 1337 4331 L 744 4331 L 809 4666 L 4628 4666 L 4428 3628 L 4044 3628 L 4169 4281 L 1962 4281 L 1659 2719 L 3253 2719 L 3366 3303 L 3750 3303 L 3450 1753 L 3066 1753 L 3178 2338 L 1584 2338 L 1194 331 L 1941 331 L 1878 0 L -97 0 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-32" d="M 2219 244 Q 2984 244 3478 770 Q 3972 1297 4172 2328 Q 4372 3363 4084 3889 Q 3797 4416 3031 4416 Q 2263 4416 1769 3889 Q 1275 3363 1075 2328 Q 875 1297 1162 770 Q 1450 244 2219 244 z M 2153 -91 Q 1678 -91 1311 65 Q 944 222 700 525 Q 419 875 334 1319 Q 250 1763 359 2328 Q 469 2894 725 3339 Q 981 3784 1400 4134 Q 1766 4441 2191 4595 Q 2616 4750 3097 4750 Q 4113 4750 4608 4084 Q 5103 3419 4891 2328 Q 4781 1769 4522 1320 Q 4263 872 3847 525 Q 3481 219 3056 64 Q 2631 -91 2153 -91 z " transform="scale(0.015625)"/> <path id="f639ff3-DejaVuSerif-Italic-c" d="M -113 -997 L -53 -691 Q 491 -359 819 242 Q 1147 844 1359 1931 Q 1572 3022 1478 3623 Q 1384 4225 966 4556 L 1025 4863 Q 1722 4522 1965 3783 Q 2209 3044 1994 1931 Q 1778 822 1247 83 Q 716 -656 -113 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4f"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-44" transform="translate(31.984375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(91.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-53" transform="translate(123.390625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4c" transform="translate(187.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4f" transform="translate(219.390625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-44" transform="translate(251.375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(311 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-46" transform="translate(342.78125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-55" transform="translate(398.78125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-48" transform="translate(446.578125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-56" transform="translate(505.765625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-46" transform="translate(557.078125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-48" transform="translate(613.078125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(672.265625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-59" transform="translate(704.046875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-48" transform="translate(760.546875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-55" transform="translate(819.734375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-56" transform="translate(867.53125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-52" transform="translate(918.84375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(979.046875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4f" transform="translate(1010.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-a" transform="translate(1042.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-44" transform="translate(1070.296875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4f" transform="translate(1129.921875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-57" transform="translate(1161.90625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-52" transform="translate(1202.09375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-1d" transform="translate(1262.296875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(1295.984375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4f" transform="translate(1327.765625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-a" transform="translate(1359.75 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-58" transform="translate(1387.234375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4f" transform="translate(1451.640625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-57" transform="translate(1483.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4c" transform="translate(1523.8125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-50" transform="translate(1555.796875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-52" transform="translate(1650.625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(1710.828125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-55" transform="translate(1742.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-48" transform="translate(1790.40625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-46" transform="translate(1849.59375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-52" transform="translate(1905.59375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-55" transform="translate(1965.796875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-47" transform="translate(2013.59375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(2077.609375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-48" transform="translate(2109.390625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-51" transform="translate(2168.578125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-57" transform="translate(2232.984375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-55" transform="translate(2273.171875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-44" transform="translate(2320.96875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-57" transform="translate(2380.59375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-52" transform="translate(2420.78125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(2480.984375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-aa" transform="translate(2512.765625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(2571.953125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4c" transform="translate(2603.734375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4f" transform="translate(2635.71875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(2667.703125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-53" transform="translate(2699.484375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-55" transform="translate(2763.5 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4c" transform="translate(2811.296875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-50" transform="translate(2843.28125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-52" transform="translate(2938.109375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(2998.3125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-44" transform="translate(3030.09375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(3089.71875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-58" transform="translate(3121.5 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-56" transform="translate(3185.90625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-46" transform="translate(3237.21875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-4c" transform="translate(3293.21875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-55" transform="translate(3325.203125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-48" transform="translate(3373 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-3" transform="translate(3432.1875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-b" transform="translate(3463.96875 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-2f" transform="translate(3502.984375 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-2c" transform="translate(3569.390625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-29" transform="translate(3608.890625 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-32" transform="translate(3678.28125 0)"/> <use xlink:href="#f639ff3-DejaVuSerif-Italic-c" transform="translate(3760.265625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f639ff3-pa29aeb38e5"> <rect x="5.76" y="5.76" width="725.4" height="211.025455"/> </clipPath> </defs> </svg></figure>

La figura è l'esempio delle slide 87-90 (sotto, Esempi svolti): `main` chiama `f2`, `f2` chiama `f1`, `f1` restituisce 0, `f2` lo stampa. La variabile globale `x` sta fuori dalla pila, nell'ambiente globale, ed esiste per tutto il programma.

Perché una pila e non un'area fissa per funzione: l'ultima funzione chiamata è sempre la prima a finire (una funzione non può terminare prima di quelle che ha chiamato). Quindi gli ambienti si liberano nell'ordine inverso a quello di creazione, che è esattamente il LIFO. In più la stessa funzione può essere attiva più volte insieme (la ricorsione, più avanti nel corso), e ogni attivazione ha bisogno del suo record.

### I parametri sono variabili locali

Il parametro formale è una variabile locale come le altre, solo inizializzata con il valore del parametro effettivo. La si può modificare, e la modifica resta nel record della funzione. Il prof lo usa per risparmiare una variabile in `power` (<span class="src">slide 111-113</span>): invece di contare con `i` fino a `n`, si conta all'indietro direttamente su `n`.

```c
#include <stdio.h>

int power(int base, int n)
{
    int p;

    for (p = 1; n > 0; n--) {
        p *= base;
    }
    return p;
}

int main(void)
{
    int n = 3;

    printf("%d\n", power(2, n));
    printf("n=%d\n", n);
    return 0;
}
```

| istruzione | `n` di `main` | `n` di `power` | `p` |
| --- | --- | --- | --- |
| chiamata `power(2, n)` | 3 | 3 (copia) | ? |
| `p = 1`, `3 > 0` | 3 | 3 | 1 |
| `p *= base`, `n--` | 3 | 2 | 2 |
| `p *= base`, `n--` | 3 | 1 | 4 |
| `p *= base`, `n--` | 3 | 0 | 8 |
| `0 > 0` falso, `return p` | 3 | eliminata | 8 |

Output: `8`, poi `n=3` (verificato). Il `n--` di `power` agisce sulla copia: la `n` di `main` non cambia. È il **passaggio per valore**, l'unico che il C conosce; come si fa a far modificare a una funzione una variabile del chiamante è l'argomento di [Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/).

### `return` e il flusso

Esempio 1, più `return`, ne viene eseguito uno solo:

```c
#include <stdio.h>

int segno(int x)
{
    if (x > 0) {
        return 1;
    }
    if (x < 0) {
        return -1;
    }
    return 0;
}

void stampa_se_pari(int n)
{
    if (n % 2 != 0) {
        return;
    }
    printf("%d e' pari\n", n);
}

int main(void)
{
    printf("%d %d %d\n", segno(-4), segno(0), segno(9));
    stampa_se_pari(3);
    stampa_se_pari(8);
    return 0;
}
```

Output (verificato):

```
-1 0 1
8 e' pari
```

- `segno(-4)`: `-4 > 0` falso, `-4 < 0` vero, `return -1`: la funzione finisce lì, `return 0` non viene raggiunto.
- `segno(0)`: falso, falso, si arriva a `return 0`.
- `stampa_se_pari(3)`: `3 % 2` vale 1, diverso da 0, `return;` esce dalla procedura senza stampare. Con 8 si arriva al `printf`.

Esempio 2, il `return` che manca. Se `segno` non avesse l'ultimo `return 0;`, con `x = 0` la funzione arriverebbe alla `}` senza restituire niente e il chiamante leggerebbe un valore indefinito (qualsiasi cosa ci sia in quel momento nel registro o nella cella del risultato). gcc lo segnala con `-Wall` (`control reaches end of non-void function`), ma compila lo stesso. Regola: in una funzione non `void` **ogni** strada deve finire in un `return`.

### Prototipi e ordine delle funzioni

Il compilatore legge il file dall'alto in basso. Se `main` chiama `doppio(4)` e `doppio` è definita dopo, senza prototipo, al punto della chiamata il compilatore non sa che tipo ha. Nel C K&R si supponeva `int` senza controlli; dal C99 è vietato e gcc 16 si ferma con `error: implicit declaration of function 'doppio'` (verificato). Due soluzioni equivalenti:

```
soluzione 1: definire prima di usare        soluzione 2: prototipo in cima
int doppio(int n) { return 2 * n; }          int doppio(int n);
int main(void) { ... doppio(4) ... }         int main(void) { ... doppio(4) ... }
                                             int doppio(int n) { return 2 * n; }
```

Il prof usa la seconda (prototipi in cima, `main` subito dopo, definizioni in fondo): si legge prima il programma principale e poi i dettagli, ed è la forma dell'esame, dove i prototipi stanno in `dati.h`.

Il prototipo deve **coincidere** con la definizione nei tipi: con `int f(int a);` in cima e `int f(float a) { ... }` in fondo gcc dà `conflicting types for 'f'`.

### Visibilità e mascheramento

<figure class="fig"><svg role="img" aria-label="Ambienti di visibilità" xmlns:xlink="http://www.w3.org/1999/xlink" width="621.36pt" height="366.336pt" viewBox="0 0 621.36 366.336" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fc7dc83-figure_1"> <g id="fc7dc83-patch_1"> <path d="M 0 366.336 L 621.36 366.336 L 621.36 -0 L 0 -0 L 0 366.336 z " style="fill: none"/> </g> <g id="fc7dc83-axes_1"> <g id="fc7dc83-patch_2"> <path d="M 14.076 352.26 L 607.284 352.26 L 607.284 14.076 L 14.076 14.076 L 14.076 352.26 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-patch_3"> <path d="M 27.936 266.328 L 299.592 266.328 L 299.592 36.252 L 27.936 36.252 L 27.936 266.328 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-patch_4"> <path d="M 41.796 252.468 L 285.732 252.468 L 285.732 91.692 L 41.796 91.692 L 41.796 252.468 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke-dasharray: 5.55,2.4; stroke-dashoffset: 0; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-patch_5"> <path d="M 55.656 238.608 L 271.872 238.608 L 271.872 155.448 L 55.656 155.448 L 55.656 238.608 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke-dasharray: 1.5,2.475; stroke-dashoffset: 0; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-patch_6"> <path d="M 316.224 210.888 L 593.424 210.888 L 593.424 36.252 L 316.224 36.252 L 316.224 210.888 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-patch_7"> <path d="M 330.084 127.728 L 579.564 127.728 L 579.564 83.376 L 330.084 83.376 L 330.084 127.728 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke-dasharray: 5.55,2.4; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-patch_8"> <path d="M 330.084 197.028 L 579.564 197.028 L 579.564 152.676 L 330.084 152.676 L 330.084 197.028 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke-dasharray: 5.55,2.4; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-patch_9"> <path d="M 316.224 338.4 L 593.424 338.4 L 593.424 233.064 L 316.224 233.064 L 316.224 338.4 z " clip-path="url(#fc7dc83-p650fcb43d5)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fc7dc83-text_1"> <!-- globale --> <g style="fill: var(--fig-axis)" transform="translate(21.006 29.148047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSerif-Bold-4a" d="M 3853 2944 L 3853 44 Q 3853 -656 3354 -1039 Q 2856 -1422 1947 -1422 Q 1616 -1422 1275 -1370 Q 934 -1319 575 -1216 L 575 -422 L 928 -422 Q 975 -750 1192 -909 Q 1409 -1069 1813 -1069 Q 2325 -1069 2536 -823 Q 2747 -578 2747 44 L 2747 422 Q 2606 163 2367 36 Q 2128 -91 1778 -91 Q 1072 -91 667 378 Q 263 847 263 1663 Q 263 2481 667 2947 Q 1072 3413 1778 3413 Q 2128 3413 2367 3286 Q 2606 3159 2747 2900 L 2747 3322 L 4325 3322 L 4325 2944 L 3853 2944 z M 2747 1825 Q 2747 2406 2597 2665 Q 2447 2925 2119 2925 Q 1775 2925 1636 2651 Q 1497 2378 1497 1663 Q 1497 947 1637 672 Q 1778 397 2119 397 Q 2447 397 2597 656 Q 2747 916 2747 1497 L 2747 1825 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-4f" d="M 1797 378 L 2272 378 L 2272 0 L 219 0 L 219 378 L 691 378 L 691 4488 L 219 4488 L 219 4863 L 1797 4863 L 1797 378 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-52" d="M 2138 263 Q 2488 263 2630 563 Q 2772 863 2772 1663 Q 2772 2463 2631 2761 Q 2491 3059 2138 3059 Q 1784 3059 1640 2757 Q 1497 2456 1497 1663 Q 1497 869 1640 566 Q 1784 263 2138 263 z M 2138 -91 Q 1259 -91 761 376 Q 263 844 263 1663 Q 263 2484 761 2948 Q 1259 3413 2138 3413 Q 3019 3413 3516 2948 Q 4013 2484 4013 1663 Q 4013 844 3514 376 Q 3016 -91 2138 -91 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-45" d="M 622 378 L 622 4488 L 147 4488 L 147 4863 L 1728 4863 L 1728 2900 Q 1869 3159 2106 3286 Q 2344 3413 2694 3413 Q 3403 3413 3811 2945 Q 4219 2478 4219 1663 Q 4219 847 3811 378 Q 3403 -91 2694 -91 Q 2344 -91 2106 36 Q 1869 163 1728 422 L 1728 0 L 147 0 L 147 378 L 622 378 z M 1728 1497 Q 1728 916 1876 656 Q 2025 397 2356 397 Q 2697 397 2836 672 Q 2975 947 2975 1663 Q 2975 2378 2836 2651 Q 2697 2925 2356 2925 Q 2025 2925 1876 2665 Q 1728 2406 1728 1825 L 1728 1497 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-44" d="M 3525 2041 L 3525 378 L 4000 378 L 4000 0 L 2419 0 L 2419 422 Q 2200 159 1931 34 Q 1663 -91 1319 -91 Q 809 -91 536 182 Q 263 456 263 966 Q 263 1525 655 1803 Q 1047 2081 1838 2081 L 2419 2081 L 2419 2278 Q 2419 2681 2228 2873 Q 2038 3066 1638 3066 Q 1306 3066 1126 2930 Q 947 2794 872 2484 L 519 2484 L 519 3200 Q 816 3306 1134 3359 Q 1453 3413 1806 3413 Q 2697 3413 3111 3081 Q 3525 2750 3525 2041 z M 2419 1044 L 2419 1709 L 2003 1709 Q 1694 1709 1528 1540 Q 1363 1372 1363 1056 Q 1363 741 1483 584 Q 1603 428 1850 428 Q 2106 428 2262 597 Q 2419 766 2419 1044 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-48" d="M 2566 1875 Q 2566 2531 2444 2795 Q 2322 3059 2028 3059 Q 1744 3059 1620 2800 Q 1497 2541 1497 1931 L 1497 1875 L 2566 1875 z M 3781 1503 L 1497 1503 L 1497 1478 Q 1497 834 1690 548 Q 1884 263 2316 263 Q 2675 263 2897 453 Q 3119 644 3181 1006 L 3700 1006 Q 3566 441 3166 175 Q 2766 -91 2047 -91 Q 1184 -91 723 364 Q 263 819 263 1663 Q 263 2488 734 2950 Q 1206 3413 2047 3413 Q 2872 3413 3312 2927 Q 3753 2441 3781 1503 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4a"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4f" transform="translate(69.921875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(107.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-45" transform="translate(174.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-44" transform="translate(244.53125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4f" transform="translate(309.328125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-48" transform="translate(347.3125 0)"/> </g> </g> <g id="fc7dc83-text_2"> <!-- g1, g2, g3, f1 --> <g style="fill: var(--fig-ink)" transform="translate(516.069625 29.148047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSansMono-4a" d="M 2681 1778 Q 2681 2425 2470 2761 Q 2259 3097 1856 3097 Q 1434 3097 1212 2761 Q 991 2425 991 1778 Q 991 1131 1214 792 Q 1438 453 1863 453 Q 2259 453 2470 793 Q 2681 1134 2681 1778 z M 3256 225 Q 3256 -563 2884 -969 Q 2513 -1375 1791 -1375 Q 1553 -1375 1293 -1331 Q 1034 -1288 775 -1203 L 775 -634 Q 1081 -778 1331 -847 Q 1581 -916 1791 -916 Q 2256 -916 2468 -662 Q 2681 -409 2681 141 L 2681 166 L 2681 556 Q 2544 263 2306 119 Q 2069 -25 1728 -25 Q 1116 -25 750 465 Q 384 956 384 1778 Q 384 2603 750 3093 Q 1116 3584 1728 3584 Q 2066 3584 2300 3450 Q 2534 3316 2681 3034 L 2681 3488 L 3256 3488 L 3256 225 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-f" d="M 1569 947 L 2356 947 L 2356 300 L 1741 -897 L 1259 -897 L 1569 300 L 1569 947 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-3" transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-49" d="M 3322 4863 L 3322 4384 L 2669 4384 Q 2359 4384 2239 4257 Q 2119 4131 2119 3809 L 2119 3500 L 3322 3500 L 3322 3053 L 2119 3053 L 2119 0 L 1544 0 L 1544 3053 L 609 3053 L 609 3500 L 1544 3500 L 1544 3744 Q 1544 4319 1808 4591 Q 2072 4863 2631 4863 L 3322 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSansMono-4a"/> <use xlink:href="#fc7dc83-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(120.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-4a" transform="translate(240.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-15" transform="translate(301.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(361.21875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-4a" transform="translate(481.625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-16" transform="translate(541.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(602.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(662.234375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-49" transform="translate(722.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-14" transform="translate(782.640625 0)"/> </g> </g> <g id="fc7dc83-text_3"> <!-- main --> <g style="fill: var(--fig-steel)" transform="translate(34.866 51.324047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSerif-Bold-50" d="M 3884 2778 Q 4116 3109 4384 3261 Q 4653 3413 5013 3413 Q 5584 3413 5867 3089 Q 6150 2766 6150 2113 L 6150 378 L 6625 378 L 6625 0 L 4647 0 L 4647 378 L 5044 378 L 5044 1947 Q 5044 2569 4948 2731 Q 4853 2894 4594 2894 Q 4300 2894 4137 2667 Q 3975 2441 3975 2022 L 3975 378 L 4372 378 L 4372 0 L 2472 0 L 2472 378 L 2869 378 L 2869 1947 Q 2869 2569 2772 2731 Q 2675 2894 2419 2894 Q 2122 2894 1959 2667 Q 1797 2441 1797 2022 L 1797 378 L 2194 378 L 2194 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 2853 Q 1991 3144 2241 3278 Q 2491 3413 2834 3413 Q 3241 3413 3494 3258 Q 3747 3103 3884 2778 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-4c" d="M 588 4263 Q 588 4516 763 4689 Q 938 4863 1191 4863 Q 1438 4863 1611 4689 Q 1784 4516 1784 4263 Q 1784 4016 1611 3842 Q 1438 3669 1191 3669 Q 938 3669 763 3841 Q 588 4013 588 4263 z M 1797 378 L 2272 378 L 2272 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 378 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-51" d="M 219 0 L 219 378 L 691 378 L 691 2944 L 219 2944 L 219 3322 L 1797 3322 L 1797 2853 Q 1997 3150 2253 3281 Q 2509 3413 2900 3413 Q 3459 3413 3745 3083 Q 4031 2753 4031 2113 L 4031 378 L 4506 378 L 4506 0 L 2522 0 L 2522 378 L 2925 378 L 2925 2144 Q 2925 2566 2817 2730 Q 2709 2894 2444 2894 Q 2109 2894 1953 2648 Q 1797 2403 1797 1869 L 1797 378 L 2203 378 L 2203 0 L 219 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-50"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-44" transform="translate(105.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4c" transform="translate(170.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-51" transform="translate(208.59375 0)"/> </g> </g> <g id="fc7dc83-text_4"> <!-- a, b, prototipo di f2 --> <g style="fill: var(--fig-ink)" transform="translate(166.235438 51.324047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-45" d="M 2869 1747 Q 2869 2416 2656 2756 Q 2444 3097 2028 3097 Q 1609 3097 1393 2755 Q 1178 2413 1178 1747 Q 1178 1084 1393 740 Q 1609 397 2028 397 Q 2444 397 2656 737 Q 2869 1078 2869 1747 z M 1178 3053 Q 1316 3309 1558 3446 Q 1800 3584 2119 3584 Q 2750 3584 3112 3098 Q 3475 2613 3475 1759 Q 3475 894 3111 401 Q 2747 -91 2113 -91 Q 1800 -91 1561 45 Q 1322 181 1178 441 L 1178 0 L 603 0 L 603 4863 L 1178 4863 L 1178 3053 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-53" d="M 1172 441 L 1172 -1331 L 594 -1331 L 594 3500 L 1172 3500 L 1172 3053 Q 1316 3313 1555 3448 Q 1794 3584 2106 3584 Q 2741 3584 3102 3093 Q 3463 2603 3463 1734 Q 3463 881 3100 395 Q 2738 -91 2106 -91 Q 1788 -91 1548 45 Q 1309 181 1172 441 z M 2859 1747 Q 2859 2416 2648 2756 Q 2438 3097 2022 3097 Q 1603 3097 1387 2755 Q 1172 2413 1172 1747 Q 1172 1084 1387 740 Q 1603 397 2022 397 Q 2438 397 2648 737 Q 2859 1078 2859 1747 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-55" d="M 3609 2778 Q 3425 2922 3234 2987 Q 3044 3053 2816 3053 Q 2278 3053 1993 2715 Q 1709 2378 1709 1741 L 1709 0 L 1131 0 L 1131 3500 L 1709 3500 L 1709 2816 Q 1853 3188 2151 3386 Q 2450 3584 2859 3584 Q 3072 3584 3256 3531 Q 3441 3478 3609 3366 L 3609 2778 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-57" d="M 1919 4494 L 1919 3500 L 3225 3500 L 3225 3053 L 1919 3053 L 1919 1153 Q 1919 766 2066 612 Q 2213 459 2578 459 L 3225 459 L 3225 0 L 2522 0 Q 1875 0 1609 259 Q 1344 519 1344 1153 L 1344 3053 L 409 3053 L 409 3500 L 1344 3500 L 1344 4494 L 1919 4494 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSansMono-47" d="M 2681 3053 L 2681 4863 L 3256 4863 L 3256 0 L 2681 0 L 2681 441 Q 2538 181 2298 45 Q 2059 -91 1747 -91 Q 1113 -91 748 401 Q 384 894 384 1759 Q 384 2613 750 3098 Q 1116 3584 1747 3584 Q 2063 3584 2303 3448 Q 2544 3313 2681 3053 z M 991 1747 Q 991 1078 1203 737 Q 1416 397 1831 397 Q 2247 397 2464 740 Q 2681 1084 2681 1747 Q 2681 2413 2464 2755 Q 2247 3097 1831 3097 Q 1416 3097 1203 2756 Q 991 2416 991 1747 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSansMono-44"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(60.203125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(120.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-45" transform="translate(180.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(240.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-53" transform="translate(361.21875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-55" transform="translate(421.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-57" transform="translate(541.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-52" transform="translate(602.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-57" transform="translate(662.234375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-4c" transform="translate(722.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-53" transform="translate(782.640625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-52" transform="translate(842.84375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(903.046875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-47" transform="translate(963.25 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-4c" transform="translate(1023.453125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(1083.65625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-49" transform="translate(1143.859375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-15" transform="translate(1204.0625 0)"/> </g> </g> <g id="fc7dc83-text_5"> <!-- blocco 1 (if) --> <g style="fill: var(--fig-steel)" transform="translate(48.726 106.764047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSerif-Bold-46" d="M 3609 1038 Q 3491 469 3123 189 Q 2756 -91 2125 -91 Q 1238 -91 750 368 Q 263 828 263 1663 Q 263 2488 744 2950 Q 1225 3413 2081 3413 Q 2428 3413 2781 3347 Q 3134 3281 3500 3150 L 3500 2228 L 3150 2228 Q 3100 2650 2903 2854 Q 2706 3059 2350 3059 Q 1888 3059 1692 2746 Q 1497 2434 1497 1663 Q 1497 909 1687 586 Q 1878 263 2309 263 Q 2644 263 2845 463 Q 3047 663 3091 1038 L 3609 1038 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-3" transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-14" d="M 878 0 L 878 378 L 1753 378 L 1753 4153 L 781 3578 L 781 4044 L 1953 4750 L 2938 4750 L 2938 378 L 3816 378 L 3816 0 L 878 0 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-b" d="M 2694 -997 Q 1641 -606 1122 122 Q 603 850 603 1931 Q 603 3013 1115 3731 Q 1628 4450 2694 4863 L 2694 4488 Q 2200 4188 1983 3598 Q 1766 3009 1766 1931 Q 1766 856 1983 267 Q 2200 -322 2694 -622 L 2694 -997 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-49" d="M 3097 4031 L 2747 4031 Q 2722 4275 2605 4394 Q 2488 4513 2272 4513 Q 2022 4513 1909 4333 Q 1797 4153 1797 3750 L 1797 3322 L 2631 3322 L 2631 2944 L 1797 2944 L 1797 378 L 2438 378 L 2438 0 L 219 0 L 219 378 L 691 378 L 691 2944 L 197 2944 L 197 3322 L 691 3322 L 691 3738 Q 691 4291 1044 4577 Q 1397 4863 2081 4863 Q 2347 4863 2600 4833 Q 2853 4803 3097 4744 L 3097 4031 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-c" d="M 325 -997 L 325 -622 Q 819 -322 1036 267 Q 1253 856 1253 1931 Q 1253 3009 1036 3598 Q 819 4188 325 4488 L 325 4863 Q 1391 4450 1905 3731 Q 2419 3013 2419 1931 Q 2419 850 1898 122 Q 1378 -606 325 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-45"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4f" transform="translate(69.921875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(107.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(174.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(235.5 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(296.390625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-3" transform="translate(363.09375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-14" transform="translate(397.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-3" transform="translate(467.484375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-b" transform="translate(502.296875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4c" transform="translate(549.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-49" transform="translate(587.59375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-c" transform="translate(630.609375 0)"/> </g> </g> <g id="fc7dc83-text_6"> <!-- a, c --> <g style="fill: var(--fig-ink)" transform="translate(254.72075 106.763656) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSansMono-46" d="M 3316 178 Q 3084 44 2839 -23 Q 2594 -91 2338 -91 Q 1525 -91 1067 396 Q 609 884 609 1747 Q 609 2609 1067 3096 Q 1525 3584 2338 3584 Q 2591 3584 2831 3518 Q 3072 3453 3316 3316 L 3316 2713 Q 3088 2916 2858 3006 Q 2628 3097 2338 3097 Q 1797 3097 1506 2747 Q 1216 2397 1216 1747 Q 1216 1100 1508 748 Q 1800 397 2338 397 Q 2638 397 2875 489 Q 3113 581 3316 775 L 3316 178 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSansMono-44"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(60.203125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(120.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-46" transform="translate(180.609375 0)"/> </g> </g> <g id="fc7dc83-text_7"> <!-- blocco 2 (while) --> <g style="fill: var(--fig-steel)" transform="translate(62.586 170.520047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSerif-Bold-15" d="M 844 3513 L 469 3513 L 469 4519 Q 850 4634 1223 4692 Q 1597 4750 1978 4750 Q 2869 4750 3367 4386 Q 3866 4022 3866 3372 Q 3866 2909 3591 2542 Q 3316 2175 2541 1672 L 1241 819 L 3450 819 L 3450 1369 L 3878 1369 L 3878 0 L 428 0 L 428 763 L 1119 1241 Q 2003 1850 2297 2278 Q 2591 2706 2591 3278 Q 2591 3819 2367 4101 Q 2144 4384 1716 4384 Q 1347 4384 1125 4161 Q 903 3938 844 3513 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-5a" d="M 3450 3322 L 4206 1106 L 4831 2944 L 4397 2944 L 4397 3322 L 5638 3322 L 5638 2944 L 5247 2944 L 4244 0 L 3481 0 L 2778 2081 L 2069 0 L 1313 0 L 306 2944 L -56 2944 L -56 3322 L 1825 3322 L 1825 2944 L 1434 2944 L 2047 1147 L 2791 3322 L 3450 3322 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Bold-4b" d="M 219 0 L 219 378 L 691 378 L 691 4488 L 197 4488 L 197 4863 L 1797 4863 L 1797 2853 Q 1997 3150 2253 3281 Q 2509 3413 2900 3413 Q 3459 3413 3745 3083 Q 4031 2753 4031 2113 L 4031 378 L 4506 378 L 4506 0 L 2522 0 L 2522 378 L 2925 378 L 2925 2144 Q 2925 2566 2817 2730 Q 2709 2894 2444 2894 Q 2109 2894 1953 2648 Q 1797 2403 1797 1869 L 1797 378 L 2203 378 L 2203 0 L 219 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-45"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4f" transform="translate(69.921875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(107.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(174.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(235.5 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(296.390625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-3" transform="translate(363.09375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-15" transform="translate(397.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-3" transform="translate(467.484375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-b" transform="translate(502.296875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-5a" transform="translate(549.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4b" transform="translate(635.6875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4c" transform="translate(708.390625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4f" transform="translate(746.375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-48" transform="translate(784.359375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-c" transform="translate(847.984375 0)"/> </g> </g> <g id="fc7dc83-text_8"> <!-- a --> <g style="fill: var(--fig-ink)" transform="translate(258.921688 170.519656) scale(0.1 -0.1)"> <use xlink:href="#fc7dc83-DejaVuSansMono-44"/> </g> </g> <g id="fc7dc83-text_9"> <!-- f1 --> <g style="fill: var(--fig-accent)" transform="translate(323.154 51.324047) scale(0.1 -0.1)"> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-49"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-14" transform="translate(43.015625 0)"/> </g> </g> <g id="fc7dc83-text_10"> <!-- par1, par2, d --> <g style="fill: var(--fig-ink)" transform="translate(508.229937 51.324047) scale(0.1 -0.1)"> <use xlink:href="#fc7dc83-DejaVuSansMono-53"/> <use xlink:href="#fc7dc83-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-55" transform="translate(120.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-14" transform="translate(180.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(240.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-53" transform="translate(361.21875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-44" transform="translate(421.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-55" transform="translate(481.625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-15" transform="translate(541.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(602.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(662.234375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-47" transform="translate(722.4375 0)"/> </g> </g> <g id="fc7dc83-text_11"> <!-- blocco 3 --> <g style="fill: var(--fig-accent)" transform="translate(337.014 98.448047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSerif-Bold-16" d="M 550 4531 Q 963 4641 1350 4695 Q 1738 4750 2106 4750 Q 2950 4750 3401 4448 Q 3853 4147 3853 3584 Q 3853 3163 3593 2900 Q 3334 2638 2834 2547 Q 3444 2450 3744 2131 Q 4044 1813 4044 1259 Q 4044 606 3526 257 Q 3009 -91 2028 -91 Q 1659 -91 1267 -28 Q 875 34 447 159 L 447 1184 L 825 1184 Q 859 741 1103 508 Q 1347 275 1778 275 Q 2253 275 2512 539 Q 2772 803 2772 1288 Q 2772 1794 2501 2069 Q 2231 2344 1734 2344 L 1528 2344 L 1528 2719 L 1691 2719 Q 2150 2719 2381 2931 Q 2613 3144 2613 3566 Q 2613 3963 2395 4173 Q 2178 4384 1772 4384 Q 1403 4384 1187 4182 Q 972 3981 928 3597 L 550 3597 L 550 4531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-45"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4f" transform="translate(69.921875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(107.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(174.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(235.5 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(296.390625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-3" transform="translate(363.09375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-16" transform="translate(397.90625 0)"/> </g> </g> <g id="fc7dc83-text_12"> <!-- e --> <g style="fill: var(--fig-ink)" transform="translate(566.613687 98.447656) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSansMono-48" d="M 3475 1894 L 3475 1613 L 984 1613 L 984 1594 Q 984 1022 1282 709 Q 1581 397 2125 397 Q 2400 397 2700 484 Q 3000 572 3341 750 L 3341 178 Q 3013 44 2708 -23 Q 2403 -91 2119 -91 Q 1303 -91 843 398 Q 384 888 384 1747 Q 384 2584 834 3084 Q 1284 3584 2034 3584 Q 2703 3584 3089 3131 Q 3475 2678 3475 1894 z M 2900 2063 Q 2888 2569 2661 2833 Q 2434 3097 2009 3097 Q 1594 3097 1325 2822 Q 1056 2547 1006 2059 L 2900 2063 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSansMono-48"/> </g> </g> <g id="fc7dc83-text_13"> <!-- blocco 4 (if) --> <g style="fill: var(--fig-accent)" transform="translate(337.014 167.748047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSerif-Bold-17" d="M 4084 0 L 1516 0 L 1516 378 L 2209 378 L 2209 1228 L 263 1228 L 263 1588 L 2216 4750 L 3391 4750 L 3391 1631 L 4191 1631 L 4191 1228 L 3391 1228 L 3391 378 L 4084 378 L 4084 0 z M 2209 1631 L 2209 3897 L 819 1631 L 2209 1631 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-45"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4f" transform="translate(69.921875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(107.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(174.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-46" transform="translate(235.5 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-52" transform="translate(296.390625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-3" transform="translate(363.09375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-17" transform="translate(397.90625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-3" transform="translate(467.484375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-b" transform="translate(502.296875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-4c" transform="translate(549.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-49" transform="translate(587.59375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-c" transform="translate(630.609375 0)"/> </g> </g> <g id="fc7dc83-text_14"> <!-- d --> <g style="fill: var(--fig-ink)" transform="translate(566.613687 167.748047) scale(0.1 -0.1)"> <use xlink:href="#fc7dc83-DejaVuSansMono-47"/> </g> </g> <g id="fc7dc83-text_15"> <!-- f2 --> <g style="fill: var(--fig-ink)" transform="translate(323.154 248.136047) scale(0.1 -0.1)"> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-49"/> <use xlink:href="#fc7dc83-DejaVuSerif-Bold-15" transform="translate(43.015625 0)"/> </g> </g> <g id="fc7dc83-text_16"> <!-- par3, par4, f --> <g style="fill: var(--fig-ink)" transform="translate(508.229937 248.136047) scale(0.1 -0.1)"> <defs> <path id="fc7dc83-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSansMono-53"/> <use xlink:href="#fc7dc83-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-55" transform="translate(120.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-16" transform="translate(180.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(240.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-53" transform="translate(361.21875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-44" transform="translate(421.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-55" transform="translate(481.625 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-17" transform="translate(541.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-f" transform="translate(602.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-3" transform="translate(662.234375 0)"/> <use xlink:href="#fc7dc83-DejaVuSansMono-49" transform="translate(722.4375 0)"/> </g> </g> <g id="fc7dc83-text_17"> <!-- qui a è il float del blocco 2: --> <g style="fill: var(--fig-axis)" transform="translate(101.966344 208.000793) scale(0.09 -0.09)"> <defs> <path id="fc7dc83-DejaVuSerif-Italic-54" d="M 2684 519 Q 2469 206 2206 56 Q 1944 -91 1597 -91 Q 1047 -91 769 281 Q 594 516 575 841 Q 563 1031 606 1256 Q 822 2359 1588 2928 Q 2241 3409 3006 3413 Q 3613 3416 3803 3322 L 2963 -1000 L 3516 -1000 L 3450 -1331 L 2322 -1331 L 2684 519 z M 2916 3094 Q 2316 3094 1850 2625 Q 1388 2153 1219 1297 Q 1172 1044 1184 853 Q 1197 659 1275 528 Q 1428 269 1828 269 Q 2222 269 2489 583 Q 2756 897 2872 1497 L 3166 3003 Q 3169 3094 2916 3094 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-aa" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z M 2057 5113 L 2638 3938 L 2272 3938 L 1441 5113 L 2057 5113 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-ce3" d="M 1003 2988 L 453 2988 L 519 3322 L 1069 3322 L 1128 3622 Q 1250 4250 1683 4556 Q 2116 4863 2878 4863 L 4119 4863 L 3238 331 L 3784 331 L 3722 0 L 2600 0 L 3478 4531 L 2806 4531 Q 2297 4531 2048 4328 Q 1800 4125 1706 3634 L 1644 3322 L 2566 3322 L 2500 2988 L 1578 2988 L 959 -206 Q 850 -763 506 -1047 Q 163 -1331 -397 -1331 L -359 -1025 Q -31 -1025 128 -850 Q 294 -663 384 -206 L 1003 2988 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-45" d="M 1153 4531 L 600 4531 L 666 4863 L 1794 4863 L 1394 2803 Q 1622 3116 1912 3264 Q 2203 3413 2588 3413 Q 3200 3413 3494 2928 Q 3688 2609 3688 2163 Q 3688 1928 3634 1663 Q 3481 881 3000 395 Q 2519 -91 1906 -91 Q 1522 -91 1289 57 Q 1056 206 950 519 L 850 0 L 275 0 L 1153 4531 z M 1141 1497 Q 1091 1250 1091 1053 Q 1091 769 1191 581 Q 1359 269 1797 269 Q 2238 269 2533 622 Q 2828 975 2963 1663 Q 3025 1978 3025 2225 Q 3025 2513 2938 2703 Q 2781 3053 2338 3053 Q 1900 3053 1609 2737 Q 1319 2422 1203 1825 L 1141 1497 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-15" d="M 1050 3553 L 700 3553 L 862 4384 Q 1231 4563 1589 4656 Q 1947 4750 2272 4750 Q 3000 4750 3353 4397 Q 3706 4044 3587 3438 Q 3456 2753 2312 1800 Q 2225 1728 2178 1691 L 772 513 L 2719 513 L 2831 1088 L 3197 1088 L 2984 0 L -25 0 L 41 341 L 1731 1753 Q 2291 2222 2567 2614 Q 2844 3006 2928 3438 Q 3019 3909 2825 4175 Q 2631 4441 2200 4441 Q 1753 4441 1467 4219 Q 1181 3997 1050 3553 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-1d" d="M 529 29 Q 434 150 468 325 Q 503 500 647 622 Q 791 744 966 744 Q 1141 744 1237 622 Q 1334 500 1300 325 Q 1266 150 1123 29 Q 981 -91 803 -91 Q 625 -91 529 29 z M 926 2067 Q 828 2188 862 2363 Q 897 2538 1040 2658 Q 1184 2778 1359 2778 Q 1538 2778 1633 2659 Q 1728 2541 1693 2362 Q 1659 2184 1518 2065 Q 1378 1947 1200 1947 Q 1025 1947 926 2067 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-54"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-58" transform="translate(64.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(128.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(160.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(192.1875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(251.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-aa" transform="translate(283.59375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(342.78125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(374.5625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(406.546875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(438.53125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-ce3" transform="translate(470.3125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(537.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(597.21875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-57" transform="translate(656.84375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(697.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-47" transform="translate(728.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(792.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(852.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(884 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-45" transform="translate(915.78125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(979.796875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(1011.78125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-46" transform="translate(1071.984375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-46" transform="translate(1127.984375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(1183.984375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(1244.1875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-15" transform="translate(1275.96875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-1d" transform="translate(1339.59375 0)"/> </g> <!-- maschera il char a e l'int a --> <g style="fill: var(--fig-axis)" transform="translate(103.02525 218.803254) scale(0.09 -0.09)"> <defs> <path id="fc7dc83-DejaVuSerif-Italic-50" d="M 3503 2675 Q 3741 3041 4034 3227 Q 4328 3413 4672 3413 Q 5194 3413 5388 3088 Q 5503 2894 5503 2578 Q 5503 2372 5453 2113 L 5106 331 L 5625 331 L 5563 0 L 4469 0 L 4866 2047 Q 4913 2291 4913 2466 Q 4913 2659 4856 2772 Q 4750 2988 4403 2988 Q 4019 2988 3761 2697 Q 3503 2406 3394 1850 L 3034 0 L 2459 0 L 2863 2069 Q 2906 2303 2906 2472 Q 2906 2666 2850 2775 Q 2741 2988 2394 2988 Q 2009 2988 1751 2697 Q 1494 2406 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1778 3063 2059 3238 Q 2341 3413 2653 3413 Q 3041 3413 3262 3220 Q 3484 3028 3503 2675 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-4b" d="M 309 0 L 1191 4531 L 641 4531 L 703 4863 L 1828 4863 L 1416 2731 Q 1641 3069 1928 3241 Q 2216 3413 2553 3413 Q 3103 3413 3300 3097 Q 3422 2906 3422 2588 Q 3422 2378 3369 2113 L 3022 331 L 3534 331 L 3472 0 L 2381 0 L 2756 1931 Q 2819 2253 2819 2469 Q 2819 2659 2769 2763 Q 2666 2988 2284 2988 Q 1884 2988 1617 2697 Q 1350 2406 1244 1850 L 884 0 L 309 0 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-50"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(94.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-56" transform="translate(154.453125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-46" transform="translate(205.765625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4b" transform="translate(261.765625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(326.171875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-55" transform="translate(385.359375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(433.15625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(492.78125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(524.5625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(556.546875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(588.53125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-46" transform="translate(620.3125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4b" transform="translate(676.3125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(740.71875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-55" transform="translate(800.34375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(848.140625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(879.921875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(939.546875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(971.328125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(1030.515625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(1062.296875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-a" transform="translate(1094.28125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(1121.765625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-51" transform="translate(1153.75 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-57" transform="translate(1218.15625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(1258.34375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(1290.125 0)"/> </g> </g> <g id="fc7dc83-text_18"> <!-- da main si vedono g1, g2, g3, a, b --> <g style="fill: var(--fig-axis)" transform="translate(86.803453 313.161012) scale(0.09 -0.09)"> <defs> <path id="fc7dc83-DejaVuSerif-Italic-59" d="M 1681 0 L 1259 0 L 619 2988 L 241 2988 L 303 3322 L 1163 3322 L 1725 703 Q 2084 1016 2325 1413 Q 2825 2238 3003 2988 L 2622 2988 L 2688 3322 L 3547 3322 Q 3206 2034 2775 1313 Q 2400 688 1681 0 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-4a" d="M 3822 3322 L 3188 72 Q 3044 -672 2581 -1031 Q 2078 -1422 1381 -1422 Q 1053 -1422 765 -1362 Q 478 -1303 225 -1184 L 363 -488 L 663 -488 Q 653 -813 834 -963 Q 1016 -1113 1406 -1113 Q 1913 -1113 2203 -825 Q 2494 -544 2613 72 L 2700 519 Q 2472 206 2181 57 Q 1891 -91 1525 -91 Q 975 -91 697 281 Q 522 516 503 841 Q 491 1031 534 1256 Q 750 2359 1516 2928 Q 2169 3409 2931 3413 Q 3631 3416 3822 3322 z M 3184 2988 Q 3181 3094 2844 3094 Q 2234 3094 1775 2625 Q 1316 2153 1147 1297 Q 1100 1044 1113 853 Q 1125 659 1203 528 Q 1356 269 1756 269 Q 2194 269 2484 583 Q 2775 897 2891 1497 L 2953 1825 L 3184 2988 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-14" d="M 447 0 L 513 331 L 1325 331 L 2078 4213 L 1019 3603 L 1100 4013 L 2381 4750 L 2813 4750 L 1953 331 L 2766 331 L 2700 0 L 447 0 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-f" d="M 125 -622 Q 463 -406 656 -114 Q 850 178 931 594 L 953 709 L 1569 709 Q 1441 175 1139 -208 Q 838 -591 328 -872 L 125 -622 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-16" d="M 1038 4469 Q 1431 4606 1781 4678 Q 2131 4750 2425 4750 Q 3109 4750 3436 4454 Q 3763 4159 3659 3634 Q 3578 3213 3258 2930 Q 2938 2647 2431 2547 Q 2988 2466 3241 2130 Q 3494 1794 3388 1259 Q 3263 606 2755 257 Q 2247 -91 1422 -91 Q 1056 -91 723 -12 Q 391 66 78 225 L 253 1131 L 603 1131 Q 547 681 775 450 Q 1003 219 1497 219 Q 1975 219 2304 495 Q 2634 772 2728 1253 Q 2834 1803 2604 2086 Q 2375 2369 1825 2369 L 1528 2369 L 1591 2688 L 1747 2688 Q 2294 2688 2611 2914 Q 2928 3141 3019 3597 Q 3097 4006 2914 4223 Q 2731 4441 2309 4441 Q 1888 4441 1616 4241 Q 1344 4041 1228 3647 L 878 3647 L 1038 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-47"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(64.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(123.640625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-50" transform="translate(155.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(250.25 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(309.875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-51" transform="translate(341.859375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(406.265625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-56" transform="translate(438.046875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(489.359375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(521.34375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-59" transform="translate(553.125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(609.625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-47" transform="translate(668.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(732.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-51" transform="translate(793.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(857.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(917.640625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4a" transform="translate(949.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-14" transform="translate(1013.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-f" transform="translate(1077.0625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(1108.84375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4a" transform="translate(1140.625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-15" transform="translate(1204.640625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-f" transform="translate(1268.265625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(1300.046875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4a" transform="translate(1331.828125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-16" transform="translate(1395.84375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-f" transform="translate(1459.46875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(1491.25 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(1523.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-f" transform="translate(1582.65625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(1614.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-45" transform="translate(1646.21875 0)"/> </g> <!-- non par1, d, e, f --> <g style="fill: var(--fig-axis)" transform="translate(127.459547 323.963473) scale(0.09 -0.09)"> <defs> <path id="fc7dc83-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="fc7dc83-DejaVuSerif-Italic-49" d="M 3191 4078 L 2887 4078 Q 2900 4144 2900 4203 Q 2900 4347 2825 4434 Q 2719 4556 2472 4556 Q 2150 4556 1984 4379 Q 1819 4203 1731 3750 L 1647 3322 L 2575 3322 L 2509 2988 L 1581 2988 L 962 -206 Q 853 -763 509 -1047 Q 166 -1331 -394 -1331 L -356 -1025 Q -28 -1025 131 -850 Q 297 -663 387 -206 L 1006 2988 L 456 2988 L 522 3322 L 1072 3322 L 1153 3738 Q 1262 4297 1606 4578 Q 1950 4863 2509 4863 Q 2719 4863 2920 4825 Q 3122 4788 3316 4709 L 3191 4078 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-51"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(64.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-51" transform="translate(124.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(189.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-53" transform="translate(220.796875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(284.8125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-55" transform="translate(344.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-14" transform="translate(392.234375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-f" transform="translate(455.859375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(487.640625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-47" transform="translate(519.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-f" transform="translate(583.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(615.21875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(647 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-f" transform="translate(706.1875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(737.96875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-49" transform="translate(769.75 0)"/> </g> </g> <g id="fc7dc83-text_19"> <!-- f2 vede solo i suoi nomi --> <g style="fill: var(--fig-axis)" transform="translate(401.118609 290.985012) scale(0.09 -0.09)"> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-49"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-15" transform="translate(37.015625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(100.640625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-59" transform="translate(132.421875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(188.921875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-47" transform="translate(248.109375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(312.125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(371.3125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-56" transform="translate(403.09375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(454.40625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(514.609375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(546.59375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(606.796875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(638.578125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(670.5625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-56" transform="translate(702.34375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-58" transform="translate(753.65625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(818.0625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(878.265625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(910.25 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-51" transform="translate(942.03125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(1006.4375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-50" transform="translate(1066.640625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(1161.46875 0)"/> </g> <!-- e quelli globali --> <g style="fill: var(--fig-axis)" transform="translate(421.068375 301.787473) scale(0.09 -0.09)"> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(59.1875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-54" transform="translate(90.96875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-58" transform="translate(154.984375 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-48" transform="translate(219.390625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(278.578125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(310.5625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(342.546875 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-3" transform="translate(374.53125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4a" transform="translate(406.3125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(470.328125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-52" transform="translate(502.3125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-45" transform="translate(562.515625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-44" transform="translate(626.53125 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4f" transform="translate(686.15625 0)"/> <use xlink:href="#fc7dc83-DejaVuSerif-Italic-4c" transform="translate(718.140625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="fc7dc83-p650fcb43d5"> <rect x="5.76" y="5.76" width="609.84" height="354.816"/> </clipPath> </defs> </svg></figure>

La figura è l'esempio della slide 139 (sotto, Esempi svolti). Per sapere a quale variabile si riferisce un nome in un punto del programma si guarda **dall'interno verso l'esterno**: prima il blocco in cui ti trovi, poi quello che lo contiene, poi la funzione, poi il globale. La prima dichiarazione che trovi vince, e quelle più esterne con lo stesso nome sono mascherate.

Esempio 1, lo stesso nome a quattro livelli:

```c
#include <stdio.h>

int a = 1;

void f(int a)
{
    printf("f: a=%d\n", a);
    a = 50;
    {
        int a = 7;
        printf("blocco in f: a=%d\n", a);
    }
    printf("f dopo il blocco: a=%d\n", a);
}

int main(void)
{
    printf("main: a=%d\n", a);
    {
        int a = 2;
        printf("blocco: a=%d\n", a);
        f(a + 10);
        printf("blocco dopo f: a=%d\n", a);
    }
    printf("main dopo il blocco: a=%d\n", a);
    return 0;
}
```

| punto | quale `a` | valore |
| --- | --- | --- |
| primo `printf` di `main` | globale (nessuna `a` locale ancora) | 1 |
| nel blocco di `main` | `a` del blocco, maschera la globale | 2 |
| `f(a + 10)` | si valuta `a + 10` nel chiamante: 2 + 10 | parametro = 12 |
| primo `printf` di `f` | parametro `a` di `f`, maschera la globale | 12 |
| `a = 50;` | parametro di `f` | 50 |
| blocco in `f` | `a` del blocco, maschera il parametro | 7 |
| dopo il blocco in `f` | di nuovo il parametro, il 7 è sparito | 50 |
| tornati nel blocco di `main` | `a` del blocco, `f` non l'ha toccata | 2 |
| fuori dal blocco di `main` | globale, mai modificata | 1 |

Output (verificato):

```
main: a=1
blocco: a=2
f: a=12
blocco in f: a=7
f dopo il blocco: a=50
blocco dopo f: a=2
main dopo il blocco: a=1
```

Nota: `f` non vede la `a` del blocco di `main`, perché la visibilità è sintattica (dipende da dove è scritto il codice) e il corpo di `f` sta fuori da `main`. `f` vede solo i suoi nomi e quelli globali.

Esempio 2, la globale modificata da una funzione, l'effetto collaterale della <span class="src">slide 135</span>:

```c
#include <stdio.h>

int x = 1;

int fun(int par)
{
    return par + x;
}

int main(void)
{
    x = fun(1);
    printf("x=%d\n", x);
    x = fun(1);
    printf("x=%d\n", x);
    return 0;
}
```

| istruzione | `par` | `x` globale | risultato |
| --- | --- | --- | --- |
| inizio | | 1 | |
| `x = fun(1);` | 1 | 1 | `1 + 1` = 2, poi `x` = 2 |
| `x = fun(1);` | 1 | 2 | `1 + 2` = 3, poi `x` = 3 |

Output: `x=2`, `x=3` (verificato). La stessa chiamata `fun(1)` dà due risultati diversi: dipende da una variabile che non sta fra i suoi parametri. È il motivo per cui il prof sconsiglia le globali: per capire cosa fa `fun` non basta guardare la chiamata.

### Automatiche e `static`

Una variabile locale normale (automatica) nasce a ogni chiamata e muore al ritorno. Una variabile locale `static` nasce **una volta sola**, all'avvio del programma, e conserva il valore fra una chiamata e l'altra; resta però visibile solo dentro la funzione.

```c
#include <stdio.h>

int conta_auto(void)
{
    int n = 0;
    n++;
    return n;
}

int conta_static(void)
{
    static int n = 0;
    n++;
    return n;
}

int main(void)
{
    int i;

    for (i = 0; i < 3; i++) {
        printf("%d %d\n", conta_auto(), conta_static());
    }
    return 0;
}
```

| giro | `n` di `conta_auto` | `n` di `conta_static` |
| --- | --- | --- |
| 1 | creata a 0, diventa 1, distrutta | inizializzata a 0 all'avvio, diventa 1 |
| 2 | creata a 0, diventa 1, distrutta | era 1, diventa 2 |
| 3 | creata a 0, diventa 1, distrutta | era 2, diventa 3 |

Output (verificato):

```
1 1
1 2
1 3
```

L'inizializzazione `static int n = 0;` avviene una volta sola, non a ogni chiamata: è il punto che inganna. Le due funzioni sono chiamate dentro lo stesso `printf`; qui l'ordine in cui il C valuta gli argomenti non cambia niente, perché le due funzioni non toccano variabili comuni.

### Funzioni di libreria: `rand` e `math.h`

**`rand`** (<span class="src">slide 65</span>), da `stdlib.h`, restituisce un intero pseudocasuale fra 0 e `RAND_MAX` (2147483647 con gcc su Linux, 32767 con Dev-C++ su Windows). Per un intero fra `min` e `max` compresi:

```
num = rand() % (max - min + 1) + min;
```

`rand() % (max - min + 1)` è un resto, quindi sta fra 0 e `max - min`; sommando `min` si va da `min` a `max`. Con `min` = 0 e `max` = 10: resto fra 0 e 10, `num` fra 0 e 10. Con `min` = 1 e `max` = 6 (un dado): resto fra 0 e 5, `num` fra 1 e 6.

**`srand`** (<span class="src">slide 72</span>) imposta il **seme** da cui `rand` parte. Senza `srand`, ogni esecuzione produce la stessa sequenza. Con `srand((unsigned) time(&t));` (serve `time.h`) il seme è l'ora corrente e la sequenza cambia a ogni esecuzione. Va chiamata **una volta**, in `main`, non dentro la funzione che genera i numeri: chiamata a ogni numero, con l'ora che cambia una volta al secondo, ridarebbe sempre lo stesso valore.

**`math.h`** (<span class="src">slide 61</span>): `sqrt(x)`, `cbrt(x)` (solo C99 e C11), `exp(x)`, `log(x)` (base $e$), `log10(x)`, `fabs(x)`, `ceil(x)` (il più piccolo intero non minore di $x$), `floor(x)` (il più grande intero non maggiore di $x$), `pow(x, y)` ($x^y$), `fmod(x, y)` (resto di $x/y$ in virgola mobile), `sin(x)`, `cos(x)` (radianti). Lavorano in `double`; esistono versioni `float` e `long double`. Esempio verificato: `sqrt(2.0)` = 1.4142, `pow(2.0, 10.0)` = 1024.0, `floor(-2.5)` = -3.0, `ceil(-2.5)` = -2.0. Su Linux con gcc va aggiunta l'opzione `-lm` per collegare la libreria matematica, altrimenti il linker si ferma (`ld returned 1 exit status`, verificato); Dev-C++ e onlinegdb la collegano da soli.

## Metodo

**Tracciare un programma con funzioni.**
1. Parti da `main`. Tieni una colonna (o un riquadro) per ogni record attivo, più uno per le globali.
2. A ogni chiamata: valuta i parametri effettivi **nel chiamante**, apri un record nuovo in cima, copia i valori nei parametri formali **per posizione**, metti `?` nelle locali non inizializzate (le `static` invece hanno il valore rimasto dalla volta prima).
3. Dentro la funzione, ogni nome si cerca dall'interno: blocco, funzione, globale. Se una locale ha lo stesso nome di una globale, la globale non si tocca.
4. Al `return v`: scrivi `v` al posto della chiamata nel chiamante, cancella il record. Se la funzione è `void`, la chiamata non ha valore.
5. Alla fine controlla le variabili del chiamante: sono cambiate solo quelle assegnate nel chiamante stesso, le globali, e quelle passate per indirizzo.

**Scrivere una funzione.**
1. Cosa entra (parametri, con il tipo) e cosa esce (tipo di ritorno, o `void` se non esce niente).
2. Un nome che dice cosa fa: `somma_cifre`, `max3`, `stampaDato`.
3. Prototipo in cima (o in `dati.h`), definizione in fondo (o in `dati.cpp`).
4. Il corpo lavora **solo** sui parametri e sulle sue locali: niente `scanf` o `printf` dentro una funzione di calcolo, a meno che il testo lo chieda (`stampaX`, `newX`).
5. Ogni strada finisce in un `return` del tipo giusto.
6. Prova la funzione con un caso normale e con i casi limite (0, negativo, array vuoto).

## Esempi svolti a lezione

**Gestione dei movimenti di un'azienda** (<span class="src">slide 9-24</span>). Una `struct` `uscite` contiene il numero di movimenti e un array `dati` di voci, ognuna con nome, data e importo: affitto 500.0, bancomat 250.0, regalo 150.0. Una struct `entrate` con la stessa forma: fattura 1 300.0, fattura 2 550.0, altro 100.0. Si accede con `uscite.dati[0].nome`, `uscite.dati[0].importo` (dot notation e array di struct come in [Struct, typedef ed enum](/uni/prog-1/struct-typedef-ed-enum/)).

Il codice senza funzioni (<span class="src">slide 13</span>):

```
int i;
float totEntrate, totUscite, utile;
totEntrate = 0;
for(i=0; i<entrate.numMovimenti; i++) {
  totEntrate += entrate.dati[i].importo;
}
totUscite = 0;
for(i=0; i<uscite.numMovimenti; i++) {
  totUscite += uscite.dati[i].importo;
}
utile = totEntrate - totUscite;
```

I due cicli sono praticamente identici: cambia solo la struct su cui lavorano (<span class="src">slide 15</span>). Il ciclo si scorpora nella funzione `totMov` (<span class="src">slide 23</span>), che riceve un elenco qualsiasi e ne restituisce il totale; il chiamante diventa `utile = totMov(entrate) - totMov(uscite);`. Il programma completo (la slide non definisce il tipo `ElencoMovimenti` né la data: qui la data è giorno, mese, anno):

```c
#include <stdio.h>

#define MAXMOV 10

typedef struct {
    char nome[20];
    int giorno;
    int mese;
    int anno;
    float importo;
} Movimento;

typedef struct {
    int numMovimenti;
    Movimento dati[MAXMOV];
} ElencoMovimenti;

float totMov(ElencoMovimenti mov)
{
    int i;
    float totale = 0;

    for (i = 0; i < mov.numMovimenti; i++) {
        totale += mov.dati[i].importo;
    }
    return totale;
}

int main(void)
{
    ElencoMovimenti uscite = {3, {{"affitto", 10, 10, 2007, 500.0f},
                                  {"bancomat", 11, 10, 2007, 250.0f},
                                  {"regalo", 15, 10, 2007, 150.0f}}};
    ElencoMovimenti entrate = {3, {{"fattura 1", 10, 10, 2007, 300.0f},
                                   {"fattura 2", 11, 10, 2007, 550.0f},
                                   {"altro", 15, 10, 2007, 100.0f}}};
    float utile;

    printf("entrate %.1f\n", totMov(entrate));
    printf("uscite  %.1f\n", totMov(uscite));
    utile = totMov(entrate) - totMov(uscite);
    printf("utile   %.1f\n", utile);
    return 0;
}
```

Come si valuta `totMov(entrate)` (<span class="src">slide 24</span>): al parametro formale `mov` si sostituisce il parametro effettivo `entrate` (se ne fa una copia), si esegue il corpo, e `totale` è restituito come risultato. Poi `totMov(uscite)` allo stesso modo.

| chiamata | `mov.numMovimenti` | `totale` dopo ogni giro | risultato |
| --- | --- | --- | --- |
| `totMov(entrate)` | 3 | 300, 850, 950 | 950.0 |
| `totMov(uscite)` | 3 | 500, 750, 900 | 900.0 |

`utile = 950.0 - 900.0 = 50.0`. Output (verificato): `entrate 950.0`, `uscite  900.0`, `utile   50.0`.

> [!warning] I numeri della slide 24
> La slide 24 scrive `utile = 900.0 - totMov(uscite);` e poi `utile = 900.0 - 500.0;`. Con i dati delle slide 9-10 i conti sono 950.0 per le entrate e 900.0 per le uscite: la slide usa come "entrate" la tabella delle uscite (lo si vede già nella slide 11, intitolata `entrate` ma con affitto, bancomat e regalo) e 500.0 è solo il primo importo. Il meccanismo è giusto, i numeri no.

**Prodotto di due interi** (<span class="src">slide 35-36</span>). Esercizio: scrivere una funzione dedicata `Prodotto`. La soluzione della slide definisce la funzione prima di `main` (con il commento "riscrivi con testata + definizione dopo main"):

```c
#include <stdio.h>

int Prodotto(int a, int b)
{
    return a * b;
}

int main(void)
{
    int a = 5;
    int b = 10;

    printf("a= %d, b=%d\n", a, b);
    printf("Prodotto(%d,%d) è: %d\n", a, b, Prodotto(a, b));
    return 0;
}
```

Output (verificato): `a= 5, b=10` e `Prodotto(5,10) è: 50`. I parametri formali si chiamano `a` e `b` come le variabili di `main`, ma sono variabili diverse nel record di `Prodotto`. La domanda della slide, `Prodotto(b,a) ?`: il valore di `b` (10) va nel primo formale `a` e quello di `a` (5) nel secondo; il risultato è sempre 50, perché la moltiplicazione è commutativa. Con una funzione non simmetrica, per esempio `power(b, a)` al posto di `power(a, b)`, cambierebbe tutto: $10^5$ invece di $5^{10}$. Conta la posizione, non il nome.

La versione "con testata + definizione dopo main" chiesta dal commento è quella della slide 33: prototipo `int Prodotto(int a, int b);` in cima, `main`, poi la definizione.

**Area di un rettangolo con una struct** (<span class="src">slide 37-38</span>).

```c
#include <stdio.h>

typedef struct {
    float base;
    float altezza;
} Rettangolo;

float AreaRettangolo(Rettangolo r)
{
    return r.base * r.altezza;
}

int main(void)
{
    Rettangolo R = {5, 10};

    printf("R->base: %.1f; R->altezza: %.1f\n", R.base, R.altezza);
    printf("Area del rettangolo è: %.1f\n", AreaRettangolo(R));
    return 0;
}
```

Output (verificato): `R->base: 5.0; R->altezza: 10.0` e `Area del rettangolo è: 50.0`. Una struct si passa come un intero: alla chiamata `r` diventa una **copia** di `R`, con tutti i campi. La stringa del `printf` scrive `R->base` ma il codice usa `R.base`: `R` è una struct, non un puntatore, quindi il punto è giusto e la freccia è solo testo stampato.

**Moltiplicazione di due razionali** (<span class="src">slide 39-46</span>). Moltiplicare due frazioni e semplificare il risultato con il MCD. I razionali si rappresentano con una struct (numeratore, denominatore); il MCD è quello per sottrazioni successive già visto in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/), ora chiuso in una funzione `mcd`. Il programma completo della slide 46, con $p = 3/4$ e $q = 6/9$, riscritto con le graffe e `int main(void)`, più la funzione `prodotto` delle slide 47-49 che chiude tutto il calcolo in una funzione che restituisce una struct:

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int numeratore;
    int denominatore;
} Razionale;

int mcd(int x, int y)
{
    while (x != y) {
        if (x > y) {
            x -= y;
        } else {
            y -= x;
        }
    }
    return x;
}

Razionale prodotto(Razionale p, Razionale q)
{
    Razionale r;
    int div;

    r.numeratore = p.numeratore * q.numeratore;
    r.denominatore = p.denominatore * q.denominatore;
    div = mcd(abs(r.numeratore), abs(r.denominatore));
    r.numeratore /= div;
    r.denominatore /= div;
    return r;
}

int main(void)
{
    Razionale p = {3, 4};
    Razionale q = {6, 9};
    Razionale r;
    int div;

    printf("Prima Frazione: %d/%d\n", p.numeratore, p.denominatore);
    printf("Seconda Frazione: %d/%d\n", q.numeratore, q.denominatore);
    r.numeratore = p.numeratore * q.numeratore;
    r.denominatore = p.denominatore * q.denominatore;
    div = mcd(r.numeratore, r.denominatore);
    printf("Il prodotto originale era: %d/%d\n", r.numeratore, r.denominatore);
    printf("Che semplificato diventa: %d/%d\n", r.numeratore / div, r.denominatore / div);
    r = prodotto(p, q);
    printf("Con la funzione prodotto: %d/%d\n", r.numeratore, r.denominatore);
    return 0;
}
```

Tracing della chiamata `mcd(18, 36)`:

| giro | `x` | `y` | `x != y` | ramo |
| --- | --- | --- | --- | --- |
| inizio | 18 | 36 | vero | `18 > 36` falso: `y -= x` |
| 1 | 18 | 18 | falso | esce, `return 18` |

Poi `18/18 = 1` e `36/18 = 2`. Output (verificato):

```
Prima Frazione: 3/4
Seconda Frazione: 6/9
Il prodotto originale era: 18/36
Che semplificato diventa: 1/2
Con la funzione prodotto: 1/2
```

Nella funzione `prodotto` (<span class="src">slide 48</span>) il prof passa a `mcd` i valori assoluti con `abs` (da `stdlib.h`): il MCD per sottrazioni con un numero negativo non termina mai (con $x = -2$ e $y = 4$ si sottrae $x$ da $y$ e $y$ cresce all'infinito). Con un numeratore 0 il ciclo non termina neanche con `abs` ($x = 0$: `y -= 0` lascia tutto com'è); se il programma deve accettare 0 il caso va gestito prima, per esempio con `if (r.numeratore == 0)`. La slide 47 osserva che `prodotto` ha comunque bisogno delle definizioni di `Razionale` e di `mcd` prima di lei; la slide 49 lascia per casa di aggiungerla al programma, ed è la versione qui sopra.

**Funzione `random`** (<span class="src">slide 66-72</span>). La formula con `rand` è ostica da ricordare e serve spesso negli esercizi: conviene incapsularla in una funzione con gli estremi come parametri, così il codice diventa più facile da scrivere e da capire. Per riempire un vettore di 20 numeri casuali fra 0 e 10 basta `array[i] = random(0,10);`. La valutazione di `random(0,10)` (<span class="src">slide 69</span>) sostituisce ai formali `min` e `max` gli effettivi 0 e 10, calcola `rand()%(10-0+1)+0` e restituisce il valore, per esempio 5: la riga diventa `array[i] = 5;`.

Versione 1 della slide 71, così com'è (stampa 10 numeri fra 0 e 10 e il valore di `RAND_MAX`):

```
#include <stdio.h>
#include <stdlib.h>

int random( int min , int max);//Prototipo: Dichiarazione
                               //della funzione
int main(int argc, char *argv[])
{
    int min=0, max=10;

    for(int i = 0 ; i < 10 ; i++ )
      printf("%d\n", random(min,max));

    printf("RAND_MAX = %d\n",RAND_MAX);

    return 0;
}

int random( int min , int max){ //Definizione della funzione
    return rand() % (max-min+1)+min;
}
```

La versione 2 (slide 72) aggiunge `#include <time.h>`, la variabile `time_t t;` e, prima del ciclo, `srand((unsigned) time(&t));`, con i commenti del prof: "1) se non invocata questa funzione, verrà usato lo stesso seme ⇒ stessa sequenza random; 2) srand va invocata qui e non all'interno della funzione random". La riscrivo compilabile con il nome `casuale` (motivo sotto):

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int casuale(int min, int max);

int main(void)
{
    time_t t;
    int min = 0;
    int max = 10;

    srand((unsigned) time(&t));
    for (int i = 0; i < 5; i++) {
        printf("%d\n", casuale(min, max));
    }
    return 0;
}

int casuale(int min, int max)
{
    return rand() % (max - min + 1) + min;
}
```

Stampa 5 numeri fra 0 e 10, diversi a ogni esecuzione (provato più volte). Il commento della slide 71 "random genera un numero casuale tra 0 e min" è sbagliato: genera un numero fra `min` e `max`.

> [!warning] `random` e `getline` su Linux
> Su Linux `stdlib.h` dichiara già una funzione `long random(void)` (POSIX) e `stdio.h` una `getline` (usata dal prof nell'esercizio della riga più lunga, in [Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/)). Con il gcc di default (che compila in modalità GNU) il programma del prof non compila: `error: conflicting types for 'random'` (verificato). Con `-std=c11`, su Dev-C++ (Windows) e di solito su onlinegdb compila. Per non pensarci: chiamale `casuale` e `leggi_riga`.

**Chi chiama chi: `f1` e `f2`** (<span class="src">slide 75-78</span>, <span class="src">slide 87-90</span>). Cosa viene stampato?

```
int x=0;
int f1(int p);
void f2();
main(){
  f2();
}
int f1(int p){
  return p+x;
}
void f2(){
  printf("%d",f1(x));
}
```

In C compilabile (tipo di `main`, virgolette dritte, `void` nella lista vuota):

```c
#include <stdio.h>

int x = 0;

int f1(int p);
void f2(void);

int main(void)
{
    f2();
    return 0;
}

int f1(int p)
{
    return p + x;
}

void f2(void)
{
    printf("%d", f1(x));
}
```

| passo | pila (dal basso) | globale `x` | cosa succede |
| --- | --- | --- | --- |
| 1 | `main` | 0 | |
| 2 | `main` \| `f2` | 0 | `main` chiama `f2()`, senza parametri |
| 3 | `main` \| `f2` \| `f1`: `p` = 0 | 0 | `f2` valuta `f1(x)`: `x` vale 0, `p` prende 0 |
| 4 | `main` \| `f2` \| `f1`: `p` = 0 | 0 | `return p + x` = 0 + 0 = 0 |
| 5 | `main` \| `f2` | 0 | `f1` eliminato, `printf("%d", 0)` stampa `0` |
| 6 | `main` | 0 | `f2` termina alla `}` (procedura) |

Output: `0` (verificato), come nella slide 78. I prototipi in cima servono perché `main` chiama `f2` prima della sua definizione e `f2` chiama `f1` (che qui è definita prima di `f2`, ma con il prototipo l'ordine delle definizioni non conta più). Le slide 88-90 disegnano proprio la pila del passo 3: ambiente di `main` in fondo, sopra quello di `f2`, in cima quello di `f1`. La figura della sezione La pila delle chiamate è questa sequenza.

**L'albero delle chiamate** (<span class="src">slide 84-85</span>). `Fun0` chiama `Fun0.1` e `Fun0.2`; `Fun0.1` chiama `Fun0.1.1` e `Fun0.1.2`; `Fun0.2` chiama `Fun0.2.1`. Ogni funzione ha il suo ambiente: `Fun0` ha `int i; char s[20];`, `Fun0.1` ha `int k; char m[19];`, `Fun0.1.1` ha `int i; char sot[2];` e così via. La `i` di `Fun0` e quella di `Fun0.1.1` sono due variabili diverse. Se le chiamate avvengono in quest'ordine, la pila passa per questi stati:

```
Fun0
Fun0  Fun0.1
Fun0  Fun0.1  Fun0.1.1
Fun0  Fun0.1                 Fun0.1.1 finisce
Fun0  Fun0.1  Fun0.1.2
Fun0  Fun0.1
Fun0                         Fun0.1 finisce
Fun0  Fun0.2
Fun0  Fun0.2  Fun0.2.1
Fun0  Fun0.2
Fun0
```

La pila non è mai più alta di 3 record, la profondità dell'albero, anche se le chiamate in tutto sono 6.

**La struttura completa** (<span class="src">slide 33</span>). Lo scheletro della slide, con le sezioni commentate:

```
/* Direttive per il preprocessore */
#include <stdio.h>
#include <myfunctions.h>
#define PI 3.14
#define Max(a,b) (a > b ? a : b)
/* Definizioni di tipo e dichiarazioni globali */
typedef unsigned long int ulong
enum Color {Green, Red, Blue};
int global_count =0;
/* Prototipi di Funzioni */
int Prodotto ( int a, int b);
/* main */
int main(int argc, char * argv[]){
    int a=5, b=10;
    printf("prodotto è:%d\n",Prodotto(a,b)
    return 0;
}
/* Definizioni Funzioni */
int Prodotto(int a, int b
{
    return a * b;
}
```

È uno schema, non un programma: così non compila. Manca il `;` dopo `typedef unsigned long int ulong`, manca la `)` che chiude il `printf` e quella della testata di `Prodotto`, e `myfunctions.h` è un header di esempio che non esiste. `Max(a,b)` è una **macro** con parametri: il preprocessore sostituisce il testo prima della compilazione, non è una funzione e non ha record di attivazione.

**Ambienti e visibilità** (<span class="src">slide 139-141</span>).

```
int g1, g2;
char g3;
int f1(int par1, int par2);
main(){
  int a, b;
  int f2(int par3, int par1);
  if(a==0){
    char a, c;
    ...
    while(a==0){
      float a;
      ...
    }/* Fine blocco2 */
  } /* Fine blocco1 */
}    /* Fine main */
int f1(int par1, int par2) {
  int d;
  {
        int e;
        ...
  } /* Fine blocco3 */
  if(d==0){
    int d;
    ...
  } /* Fine blocco4 */
}    /* Fine f1 */
int f2(int par3, int par4) {
  int f;
  ...
}    /* Fine f2 */
```

| ambiente | dichiara | vede anche |
| --- | --- | --- |
| globale | `g1`, `g2`, `g3`, `f1` | |
| `main` | `a`, `b` (int), prototipo di `f2` | globali |
| blocco 1 (`if`) | `a`, `c` (char): `a` maschera l'int `a` di `main` | `b`, `f2`, globali |
| blocco 2 (`while`) | `a` (float): maschera il char `a` | `c`, `b`, `f2`, globali |
| `f1` | `par1`, `par2`, `d` | globali |
| blocco 3 | `e` | `par1`, `par2`, `d`, globali |
| blocco 4 (`if`) | `d`: maschera la `d` di `f1` | `par1`, `par2`, globali |
| `f2` | `par3`, `par4`, `f` | globali |

Due dettagli della slide. Il prototipo di `f2` è dichiarato **dentro** `main`: quindi solo `main` può chiamare `f2` prima della sua definizione, `f1` no. Il prototipo dentro `main` ha il secondo parametro chiamato `par1` e la definizione `par4`: va bene, nel prototipo contano solo i tipi. I blocchi 3 e 4 sono **paralleli** (entrambi dentro `f1`, nessuno dentro l'altro); i blocchi 1 e 2 sono **annidati**. Nella slide 139 la testata di `f1` è scritta `intpar1`, un refuso per `int par1`. Nota anche che `if(a==0)` legge `a` non inizializzata: è un frammento per mostrare gli ambienti, non un programma da eseguire.

**Effetti collaterali con un puntatore** (<span class="src">slide 136-137</span>). Una funzione che riceve l'indirizzo di una variabile del chiamante la può modificare, e se in più il risultato finisce in una globale le variabili cambiate sono due. Il programma della slide 137 e il suo tracing sono in [Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/), sezione Esempi svolti, perché usano il passaggio per indirizzo.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Funzioni (esercizi)](/uni/prog-1/funzioni-esercizi/).

## Errori tipici

- Chiamare una funzione prima di averla definita o dichiarata: gcc 16 si ferma con `implicit declaration of function`.
- Prototipo e definizione con tipi diversi (`conflicting types`), o prototipo senza `;`.
- Credere che il nome del parametro effettivo debba coincidere con quello del formale: i valori si abbinano per **posizione**.
- Credere che una funzione modifichi la variabile del chiamante assegnando al proprio parametro: modifica la copia (vedi [Passaggio dei parametri](/uni/prog-1/passaggio-dei-parametri/)).
- Funzione non `void` con una strada senza `return`: risultato indefinito, gcc avvisa `control reaches end of non-void function`.
- Scrivere istruzioni dopo un `return` aspettandosi che vengano eseguite.
- Usare una variabile locale di un'altra funzione: non è visibile (`undeclared`), anche se quella funzione è in esecuzione sotto nella pila.
- Confondere la locale con la globale omonima: dentro la funzione vince la locale, e la globale non si tocca.
- Aspettarsi che una locale conservi il valore fra due chiamate: serve `static`. Al contrario, dimenticare che una `static` si inizializza una volta sola.
- Chiamare `srand(time(...))` dentro la funzione che genera i numeri: dentro lo stesso secondo dà sempre lo stesso numero.
- Chiamare una propria funzione `random` o `getline`: su Linux in modalità GNU va in conflitto con la libreria.
- MCD per sottrazioni con un argomento negativo o nullo: ciclo infinito.
- Mettere `printf` e `scanf` dentro funzioni di calcolo: la funzione non si riusa più e non si testa.

## Domande

- Perché si usano i sottoprogrammi? Dai i due motivi delle slide.

- Che differenza c'è fra una funzione e una procedura in C? Come si scrive una procedura?

- Da quali parti è composta la definizione di una funzione? Cosa contiene la testata?

- Cosa sono i parametri formali e i parametri effettivi? Come vengono abbinati alla chiamata?

- Perché l'invocazione di una funzione è un'espressione? Cosa si può fare grazie a questo?

- Quali sono i tre modi in cui una funzione restituisce il controllo al chiamante?

- Cosa succede se in una funzione `int` non viene eseguito nessun `return`?

- Cosa non può restituire una funzione C, e quanti valori può restituire?

- Che differenza c'è fra definizione e dichiarazione (prototipo) di una funzione? Perché serve il prototipo?

- In che ordine si scrivono le parti di un programma C completo?

- Cosa contiene l'ambiente (record di attivazione) di una funzione, e quando viene rilasciato?

- Perché gli ambienti delle funzioni si gestiscono con una pila? Cosa vuol dire LIFO?

- Cosa stampa il programma delle slide 75-78 con `f1` e `f2`? Disegna la pila nel momento più alto.

- Quali sono le regole di visibilità per variabili globali, locali a una funzione e locali a un blocco? Cos'è il mascheramento?

- Che differenza c'è fra variabili statiche e automatiche? Cosa cambia se dichiari `static` una variabile locale?

- Cos'è un effetto collaterale, e perché le variabili globali sono sconsigliate?

- Come si genera un intero casuale fra `min` e `max` con `rand`? A cosa serve `srand` e dove va chiamata?

- In `power(int base, int n)` con il ciclo `for(p=1; n>0; n--)`, la `n` del chiamante cambia? Perché?

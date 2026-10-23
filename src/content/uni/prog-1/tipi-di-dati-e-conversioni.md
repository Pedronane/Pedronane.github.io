---
title: Tipi di dati e conversioni
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
ordine: 14
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 5.1, prima e ultima parte: <span class="src">slide 3-10</span> (cos'è un tipo e perché serve), <span class="src">slide 11-22</span> (`int`, qualificatori, `sizeof`), <span class="src">slide 23-27</span> (`float` e `double`, confronti), <span class="src">slide 28-33</span> (`char`, integral e floating), <span class="src">slide 77-97</span> (conversioni implicite ed esplicite), <span class="src">slide 98-102</span> (π con la serie di Leibniz). La parte centrale del deck (slide 34-76: `struct`, `typedef`, `enum`) è in [Struct, typedef ed enum](/uni/prog-1/struct-typedef-ed-enum/). Le codifiche che stanno sotto i tipi (binario, complemento a 2, virgola mobile, ASCII) sono in [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cos'è un tipo di dato (insieme di valori più operazioni); le tre ragioni per cui i tipi servono; i tipi predefiniti del C e i qualificatori `short`, `long`, `signed`, `unsigned`; cosa fa `sizeof` e cosa restituisce; perché due `float` non si confrontano con l'uguaglianza; le regole della conversione implicita nelle espressioni e nell'assegnazione; cos'è un cast e dove va messo.
> - **Saper fare**: prevedere il tipo e il valore di un'espressione mista (`7 / 2`, `7 / 2.0`, `(float)a / b`, `(float)(a / b)`); tracciare una sequenza di assegnazioni fra `int` e `float` con troncamenti; dire cosa stampa un `unsigned` che scende sotto zero o un `unsigned char` che supera 255; scrivere una media o una serie numerica senza divisioni intere nascoste.
> - **Dove esce**: nei tracing "scrivi l'output esatto" della teorica le divisioni intere e i troncamenti sono la trappola classica, e nei vero/falso tornano `sizeof` e `const` (vedi [Esami passati](/uni/prog-1/esami-passati/)). Al calcolatore il float casuale con 2 decimali si costruisce come intero diviso `100.0`: con `100` senza il punto la divisione è intera e il decimale sparisce.

Il filo di questa parte del deck:

```
tipo di dato        insieme di valori + operazioni (int: interi, + - * / %)
   |
perché servono      1) come interpretare i bit   2) quanta memoria
                    3) errori di tipo trovati dal compilatore
   |
tipi predefiniti    integral: char, short, int, long (signed o unsigned)
                    floating: float, double, long double
   |
sizeof              quanti byte occupa un tipo o un'espressione
   |
avvertenze          float == float è inaffidabile: soglia EPSILON
   |
conversioni         implicite: nelle espressioni sale al tipo "più alto",
                    nell'assegnazione va al tipo di sinistra (può troncare)
                    esplicite: il cast (float)x
```

## Definizioni

**Tipo di dato** (<span class="src">slide 3-5</span>). Un tipo è caratterizzato da un **insieme di valori** (per esempio gli interi) e dalle **operazioni** su quei valori (per esempio $+$, $-$, $\cdot$, $/$). Le informazioni da rappresentare sono infinite: tipi noti come interi, reali, caratteri, e oggetti astratti come fatture, budget, l'archivio di una biblioteca. Un linguaggio non può prevederli tutti, quindi offre un meccanismo: pochi **tipi semplici** (insieme chiuso) e la possibilità di costruirne di **composti** (insieme aperto).

L'astrazione del tipo separa **chi usa** il tipo da **chi sviluppa** le operazioni. Esempio: chi scrive `a + b` con due `int` non sa come la CPU somma, e non gli serve. Questo permette realizzazioni diverse dello stesso tipo, che si distinguono per esempio per efficienza.

**Classificazione** (<span class="src">slide 6</span>).
1. Tipi **predefiniti** (built-in) nel linguaggio: **semplici** (interi, caratteri) e **strutturati** (array).
2. Tipi **definiti dal programmatore** (user-defined): `Studente`, `Viaggio`, `CodaInMensa`. Sono l'argomento di [Struct, typedef ed enum](/uni/prog-1/struct-typedef-ed-enum/).

**Perché i tipi sono utili** (<span class="src">slide 7-9</span>). Tre ragioni, in ordine:
1. **Determinano come interpretare i bit in memoria.** `01100001` può essere decodificato come l'intero 97 o come il carattere `'a'`: lo decide il tipo della variabile.
2. **Determinano quanta memoria riservare** alla variabile: un `int` occupa più byte di un `char`.
3. **Permettono di trovare gli errori di tipo durante la compilazione** invece che durante l'esecuzione. I linguaggi **staticamente tipati** (C, C++, Java) controllano i tipi prima di eseguire; quelli **dinamicamente tipati** (Python, JavaScript, PHP) scoprono l'errore solo quando la riga viene eseguita.

Esempio del punto 3: in C `int *p = 3.5;` non compila; in Python `"ciao" + 3` compila (non c'è compilazione) e fallisce solo quando l'esecuzione arriva a quella riga, magari dopo ore.

**Dichiarazione e tipo** (<span class="src">slide 10</span>). Ogni variabile va dichiarata prima dell'uso, e nella dichiarazione si specifica il tipo, che fissa l'**insieme dei valori** che la variabile può assumere e le **operazioni** che le si possono applicare. La slide colloca le dichiarazioni "dopo `main()` e prima di ogni istruzione non dichiarativa": è la regola del C89. Dal C99 si può dichiarare anche più avanti nel blocco, come si fa nelle note quando serve (`for (int j = 0; ...)`).

**Tipi base** (<span class="src">slide 11</span>). `int` (interi), `float` (reali), `double` (reali in doppia precisione), `char` (caratteri). La memoria associata a ciascuno **dipende dall'implementazione** (compilatore e macchina), non dalla definizione del linguaggio: lo stesso programma può avere limiti diversi su macchine diverse.

**`int`** (<span class="src">slide 12-17</span>). Ispirato al numero intero matematico, ma ne rappresenta solo un **sottoinsieme finito**. Operatori: assegnazione, `+`, `-`, `*`, `/`, `%`, confronti. Occupa di solito una parola di memoria (oggi 4 byte).

I **qualificatori di tipo** cambiano spazio e interpretazione:
- `short` e `long` condizionano lo **spazio** allocato, e quindi il minimo e il massimo. Lo standard richiede solo $\text{short} \leq \text{int} \leq \text{long}$, con l'uguale ammesso;
- `signed` e `unsigned` decidono se l'MSB è il **bit di segno** (codifica in complemento a 2) o un bit di valore come gli altri. Il numero di bit è lo stesso: cambia l'interpretazione. `signed` è il default per `int` ("ridondante", dice la slide).

Con 32 bit: `int` va da $-2^{31}$ a $2^{31} - 1$, `unsigned int` da $0$ a $2^{32} - 1$. I limiti veri della macchina stanno in `<limits.h>`: `INT_MIN` vale $-2147483648$ e `INT_MAX` vale $2147483647$.

L'esempio della slide 15, 16 bit tutti a 1:

```
1111111111111111   -1        se la variabile è signed (CA2)
                   65535     se la variabile è unsigned
```

Stessi bit, due valori: è la ragione 1 dei tipi.

**I tipi predefiniti** (<span class="src">slide 77</span>):

| famiglia | tipo | si può scrivere anche |
| --- | --- | --- |
| integral | `char`, `signed char`, `unsigned char` | |
| integral | `signed short int` | `signed short`, `short` |
| integral | `signed int` | `signed`, `int` |
| integral | `signed long int` | `long int`, `signed long`, `long` |
| integral | `unsigned short int` | `unsigned short` |
| integral | `unsigned int` | `unsigned` |
| integral | `unsigned long int` | `unsigned long` |
| floating | `float`, `double`, `long double` | |

**Integral e floating** (<span class="src">slide 33</span>). I tipi **integral** sono rappresentati come interi e hanno un numero discreto di valori: c'è una corrispondenza biunivoca con un sottoinsieme dei naturali (puoi "numerarli"). I **floating** cercano di rappresentare i reali, che sono densi (fra due reali ce ne sono infiniti): la rappresentazione è per forza un insieme discreto di punti, con buchi in mezzo.

**`sizeof`** (<span class="src">slide 19-21</span>). Operatore **unario** che restituisce l'occupazione in memoria, **in byte**, di un tipo o di un'espressione: `sizeof(int)`, `sizeof(x)`, `sizeof(a) / sizeof(a[0])`. Sta nel gruppo degli operatori unari (con `!`, `++`, `--`, `*`, `&`, il cast), con associatività da destra a sinistra. Il valore è di tipo `size_t`, un intero senza segno, e si stampa con `%zu`. La slide dice "restituisce `unsigned int`, usa `%lu`": su gcc a 64 bit `size_t` è `unsigned long`, quindi `%lu` funziona per caso; `%zu` è quello giusto ovunque.

**`float` e `double`** (<span class="src">slide 23-25</span>). Derivati dai numeri razionali, spesso impropriamente chiamati "reali". Le costanti si scrivono `315.779` o in notazione esponenziale `3.73E-5` (cioè $3.73 \cdot 10^{-5}$). Rappresentazione in virgola mobile (IEEE-754, vedi [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/)):

| tipo | byte tipici | ordine di grandezza | cifre significative |
| --- | --- | --- | --- |
| `float` | 4 | da $10^{-38}$ a $10^{38}$ | circa 6 |
| `double` | 8 | da $10^{-308}$ a $10^{308}$ | circa 15 |
| `long double` | 8-16 | almeno come `double` | |

Vale $\text{float} \leq \text{double} \leq \text{long double}$. Gli operatori sono gli stessi degli interi ma con **significato diverso**: `/` fra floating fa la divisione vera, fra interi tronca. La slide 25 mostra che lo stesso numero ha molte scritture con mantissa ed esponente diversi: $1780000.0000023 = 178000.00000023 \cdot 10^1 = 17800000000023 \cdot 10^{-7}$.

**`char`** (<span class="src">slide 29-30</span>). Di solito un byte, abbastanza per i caratteri ASCII. In C un carattere **è** il suo codice ASCII, cioè un intero: per questo su un `char` sono definite assegnazione, operazioni aritmetiche e confronti. Conseguenza: fra i caratteri c'è un **ordinamento** automatico. `'0'` (48) è "minore" di `'1'` (49); `'A'` < `'R'`, `'('` < `'3'`, `'5'` < `'A'`. I caratteri di controllo si scrivono con la barra: `'\n'` a capo, `'\t'` tab, `'\b'` backspace, `'\r'` ritorno carrello.

## Concetti

### Le dimensioni vere su gcc

La slide 8 dice "`int` di solito 2-4 byte (16 bit)" e la 13 "`long` 32 bit": erano vere sui sistemi a 16 e 32 bit. L'esercizio della slide 21 chiede di misurarle. Su gcc, Linux x86-64 (la macchina di queste note):

```c
#include <stdio.h>
#include <limits.h>

int main(void)
{
    printf("char: %zu\n", sizeof(char));
    printf("short: %zu\n", sizeof(short));
    printf("int: %zu\n", sizeof(int));
    printf("long: %zu\n", sizeof(long));
    printf("long long: %zu\n", sizeof(long long));
    printf("float: %zu\n", sizeof(float));
    printf("double: %zu\n", sizeof(double));
    printf("long double: %zu\n", sizeof(long double));
    printf("INT_MAX=%d INT_MIN=%d\n", INT_MAX, INT_MIN);
    printf("UINT_MAX=%u\n", UINT_MAX);
    printf("SHRT_MAX=%d CHAR_MIN=%d CHAR_MAX=%d\n", SHRT_MAX, CHAR_MIN, CHAR_MAX);
    return 0;
}
```

Output (verificato):

```
char: 1
short: 2
int: 4
long: 8
long long: 8
float: 4
double: 8
long double: 16
INT_MAX=2147483647 INT_MIN=-2147483648
UINT_MAX=4294967295
SHRT_MAX=32767 CHAR_MIN=-128 CHAR_MAX=127
```

`sizeof(char)` vale 1 per definizione, su ogni macchina. Gli altri valori vanno presi come "quelli di gcc": su Windows `long` resta 4 byte (Dev-C++ del laboratorio). In un esercizio d'esame, se il testo non dice niente, si assume `int` da 4 byte.

### Overflow con e senza segno

Quando un risultato esce dall'intervallo del tipo:
- per gli **`unsigned`** il C garantisce l'aritmetica **modulo $2^N$**: si riparte da 0 (come un contachilometri). $0 - 1$ in `unsigned int` dà $2^{32} - 1$;
- per i **`signed`** l'overflow in un'operazione è **comportamento indefinito**: lo standard non dice cosa succede, e il compilatore può assumere che non accada. Convertire un valore troppo grande in un tipo con segno (per esempio assegnare 128 a un `signed char`) è invece "definito dall'implementazione": gcc tiene i bit bassi, e 128 diventa $-128$.

```c
#include <stdio.h>

int main(void)
{
    unsigned short u = 65535;
    short s = -1;
    unsigned int grande = 0;

    printf("u=%d s=%d\n", u, s);
    printf("u+1=%d\n", (unsigned short)(u + 1));
    grande = grande - 1;
    printf("0u-1=%u\n", grande);
    printf("%d %d\n", 'a', 'a' + 1);
    printf("%c %c\n", 97, 'A' + 25);
    return 0;
}
```

Output (verificato):

```
u=65535 s=-1
u+1=0
0u-1=4294967295
97 98
a Z
```

Le ultime due righe sono la doppia natura del `char`: `'a'` stampato con `%d` è 97, il 97 stampato con `%c` è `'a'`, e `'A' + 25` è la venticinquesima lettera dopo la A, la Z.

### Confrontare i `float`

(<span class="src">slide 26-27</span>) I numeri come 0.1 in binario hanno infinite cifre (come 1/3 in decimale: $0.1 = 0.0\overline{0011}_2$, il conto passo per passo è in [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/), sezione "Parte frazionaria"), quindi vengono memorizzati **approssimati**. Due calcoli che "matematicamente" danno lo stesso valore possono differire nell'ultima cifra binaria. Le avvertenze della slide:
- `if (a == b)` fra `float` può non dare il risultato atteso, per le approssimazioni o per una conversione di tipo;
- `(x / y) * y == x` può risultare **falso**.

Il rimedio è confrontare con una **soglia**: `x` e `y` sono "uguali" se `x` sta fra `y - EPSILON` e `y + EPSILON`. (La slide 27 scrive `Y + .000001` con la Y maiuscola: in C `Y` e `y` sono variabili diverse.)

```c
#include <stdio.h>

#define EPSILON 0.000001

int main(void)
{
    double x = 0.1 + 0.2;
    double y = 0.3;
    float f = 0.1f;

    if (x == y)
        printf("uguali\n");
    else
        printf("diversi: %.17f %.17f\n", x, y);
    if (x >= y - EPSILON && x <= y + EPSILON)
        printf("uguali a meno di EPSILON\n");
    printf("%.10f\n", f);
    return 0;
}
```

Output (verificato):

```
diversi: 0.30000000000000004 0.29999999999999999
uguali a meno di EPSILON
0.1000000015
```

$0.1 + 0.2$ e $0.3$ differiscono nella diciassettesima cifra: l'uguaglianza fallisce, il confronto con soglia no. L'ultima riga mostra che anche la sola costante `0.1f` non è 0.1.

### Conversioni implicite nelle espressioni

(<span class="src">slide 78-82</span>, <span class="src">93</span>) In C, quando un operando non è del tipo atteso, invece di segnalare errore si fa di solito una **conversione automatica** (implicita). Esempio della slide:

```
int i = 10;  float f = 3.0, f1;
f1 = i + f;
```

Per valutare `i + f`: (1) `i` viene convertito in `float` (10.0), (2) si fa la somma fra `float`. `f1` vale 13.0.

Le regole della slide 93, nell'ordine in cui si applicano a un'operazione binaria:
1. ogni `char` e `short` (con o senza segno) diventa `int` (**promozione intera**): `'a' + 1` è un `int`;
2. se gli operandi hanno ancora tipi diversi, quello di tipo **inferiore** viene convertito temporaneamente nel tipo **superiore**, secondo la gerarchia

$$
\texttt{int} < \texttt{long} < \texttt{unsigned} < \texttt{unsigned long} < \texttt{float} < \texttt{double} < \texttt{long double}
$$

3. il risultato ha il tipo di livello più alto.

L'idea dietro: si converte verso il tipo che può rappresentare entrambi i valori, così non si perde niente. La gerarchia della slide è quella del vecchio C (Kernighan-Ritchie); nello standard attuale `unsigned int` sta sotto `long`, ma per gli esercizi la parte che conta è "interi sotto floating, `float` sotto `double`". Una conseguenza da sapere: fra `int` e `unsigned int` vince `unsigned`, quindi un `int` negativo confrontato con un `unsigned` diventa un numero enorme.

La regola si applica **operazione per operazione**, seguendo l'albero dell'espressione, non all'espressione intera. In `1 / 2 * 3.0` la prima operazione è `1 / 2`, fra due `int`: fa 0. Solo dopo entra il `double`: $0 \cdot 3.0 = 0.0$.

Esempio 1, la stessa divisione con i tipi che cambiano:

```c
#include <stdio.h>

int main(void)
{
    printf("%d\n", 7 / 2);
    printf("%f\n", 7 / 2.0);
    printf("%f\n", 7.0 / 2);
    printf("%f\n", (float)7 / 2);
    printf("%f\n", (float)(7 / 2));
    printf("%f\n", 1 / 2 * 3.0);
    printf("%f\n", 3.0 * 1 / 2);
    printf("%d\n", 'a' + 1);
    printf("%d\n", '7' - '0');
    return 0;
}
```

| espressione | prima operazione | tipi | seconda operazione | valore e tipo |
| --- | --- | --- | --- | --- |
| `7 / 2` | $7 / 2 = 3$ | `int`, `int`: intera | | 3, `int` |
| `7 / 2.0` | 7 sale a 7.0, $7.0 / 2.0$ | `int`, `double` | | 3.5, `double` |
| `7.0 / 2` | 2 sale a 2.0 | `double`, `int` | | 3.5, `double` |
| `(float)7 / 2` | cast: 7.0 (unario, prima di `/`) | | $7.0 / 2.0$ | 3.5, `float` |
| `(float)(7 / 2)` | $7 / 2 = 3$, intera | `int`, `int` | cast: 3.0 | 3.0, `float` |
| `1 / 2 * 3.0` | $1 / 2 = 0$ (da sinistra) | `int`, `int` | $0.0 \cdot 3.0$ | 0.0, `double` |
| `3.0 * 1 / 2` | $3.0 \cdot 1 = 3.0$ | `double`, `int` | $3.0 / 2.0$ | 1.5, `double` |
| `'a' + 1` | `'a'` promosso a `int` 97 | | $97 + 1$ | 98, `int` |
| `'7' - '0'` | $55 - 48$ | `int`, `int` | | 7, `int` |

Output (verificato): `3`, `3.500000`, `3.500000`, `3.500000`, `3.000000`, `0.000000`, `1.500000`, `98`, `7`. Le righe 6 e 7 sono la stessa moltiplicazione e la stessa divisione in ordine diverso: `*` e `/` associano da sinistra, quindi l'ordine decide se la divisione avviene fra interi. L'ultima riga è il trucco per avere la cifra da un carattere: le cifre sono consecutive nella tabella ASCII.

Esempio 2, `int` contro `unsigned`. Fra un `int` e un `unsigned int` il risultato è `unsigned` (gerarchia sopra), anche in un confronto. Il programma compila, ma con un warning (per questo il blocco non è marcato come C compilabile senza avvisi):

```
#include <stdio.h>

int main(void)
{
    int a = -1;
    unsigned int b = 1;

    if (a < b)
        printf("-1 < 1\n");
    else
        printf("-1 >= 1 ?!\n");
    printf("%u\n", (unsigned int)a);
    if (a < (int)b)
        printf("con il cast: -1 < 1\n");
    return 0;
}
```

Output (verificato):

```
-1 >= 1 ?!
4294967295
con il cast: -1 < 1
```

Per fare il confronto, `a` viene convertito in `unsigned`: i suoi 32 bit tutti a 1 (CA2 di $-1$) letti senza segno valgono $2^{32} - 1 = 4294967295$, che è più grande di 1. È l'esempio della slide 15 (stessi bit, $-1$ o 65535) dentro un `if`. gcc con `-Wall -Wextra` avvisa: `comparison of integer expressions of different signedness`. Con il cast `(int)b` il confronto torna fra `int`.

### Conversioni nell'assegnazione

(<span class="src">slide 83-92</span>) Le assegnazioni sono "insidiose", perché lo stesso simbolo `/` fa operazioni diverse su `int` e `float`. La regola: **il valore dell'espressione a destra viene convertito al tipo della variabile a sinistra**. Questo può causare:
- **troncamento**, con perdita di informazione: da `float` a `int` si butta la parte frazionaria (verso lo zero, non arrotondando);
- una **trasformazione indesiderata**: da `int` a `char` si tengono solo gli 8 bit bassi.

La sequenza della slide, tracciata (le slide 88 e 90 contengono due errori, corretti qui sotto):

```c
#include <stdio.h>

int main(void)
{
    int a = 2;
    int b = 3;
    float c = 10.4f;

    a = c;
    printf("a=c   -> a=%d\n", a);
    c = a;
    printf("c=a   -> c=%f\n", c);
    a = a / b;
    printf("a=a/b -> a=%d\n", a);
    a = a / c;
    printf("a=a/c -> a=%d\n", a);
    return 0;
}
```

| istruzione | calcolo a destra | tipo a destra | assegnato | `a` | `b` | `c` |
| --- | --- | --- | --- | --- | --- | --- |
| iniziale | | | | 2 | 3 | 10.4 |
| `a = c` | 10.4 | `float` | troncato a `int` | 10 | 3 | 10.4 |
| `c = a` | 10 | `int` | convertito a `float` | 10 | 3 | 10.0 |
| `a = a / b` | $10 / 3 = 3$ | `int` (divisione intera) | nessuna conversione | 3 | 3 | 10.0 |
| `a = a / c` | $3.0 / 10.0 = 0.3$ | `float` (`a` promosso) | troncato a `int` | 0 | 3 | 10.0 |

Output (verificato):

```
a=c   -> a=10
c=a   -> c=10.000000
a=a/b -> a=3
a=a/c -> a=0
```

Le due "trasformazioni indesiderate" della slide 84 (da `int` a `char`, da `float` a `int`) e una terza, da `int` a `float`, in un altro esempio:

```c
#include <stdio.h>

int main(void)
{
    int x = 300;
    int y = 321;
    char c = x;
    unsigned char u = y;
    int t = -7.9;
    float f = 16777217;
    float g = 123456789;

    printf("c=%d\n", c);
    printf("u=%d %c\n", u, u);
    printf("t=%d\n", t);
    printf("f=%.1f\n", f);
    printf("g=%.1f\n", g);
    return 0;
}
```

Output (verificato):

```
c=44
u=65 A
t=-7
f=16777216.0
g=123456792.0
```

| assegnazione | cosa succede | valore |
| --- | --- | --- |
| `char c = x;` con 300 | 300 = `1 0010 1100`, restano gli 8 bit bassi `00101100` | $300 - 256 = 44$ |
| `unsigned char u = y;` con 321 | modulo 256: $321 - 256 = 65$ | 65, cioè `'A'` |
| `int t = -7.9;` | troncamento verso lo zero, non verso $-\infty$ | $-7$, non $-8$ |
| `float f = 16777217;` | $2^{24} + 1$: un `float` ha 24 bit di mantissa, l'ultimo 1 non ci sta | 16777216 |
| `float g = 123456789;` | 9 cifre, il `float` ne tiene circa 6-7 | 123456792 |

Le ultime due righe mostrano che anche la conversione verso un tipo "superiore" può perdere informazione: un `int` da 32 bit ha più cifre significative di un `float` da 32 bit, che ne usa 8 per l'esponente. Il `double` (53 bit di mantissa) li tiene tutti e due esatti.

Gli errori delle slide: la slide 88 scrive "`c = a`, `c = 2.0`", ma `a` vale già 10 dopo la prima riga, quindi `c` è 10.0 (come dicono le altre slide della sequenza). La slide 90 scrive "`a = a / b`, `a = 0`": lo sarebbe con `a` ancora 2 ($2 / 3 = 0$), ma `a` è 10 e $10 / 3 = 3$. Lo zero arriva solo alla riga dopo, con `a / c` (slide 92, corretta).

### Conversioni esplicite: il cast

(<span class="src">slide 94-97</span>) Il **cast** `(tipo) espressione` converte esplicitamente il valore dell'espressione nel tipo indicato. È un operatore **unario**, con la precedenza degli altri unari: più alta di `*`, `/` e `%`. Quindi si applica all'operando che segue subito, non a tutta l'espressione.

L'esempio della media:

```c
#include <stdio.h>

int main(void)
{
    float average;
    int num1 = 5;
    int num2 = 2;

    average = (num1 + num2) / 2;
    printf("senza cast: %f\n", average);
    average = (float)(num1 + num2) / 2;
    printf("con cast:   %f\n", average);
    average = (float)((num1 + num2) / 2);
    printf("cast tardi: %f\n", average);
    return 0;
}
```

Output (verificato):

```
senza cast: 3.000000
con cast:   3.500000
cast tardi: 3.000000
```

Passo per passo:
- senza cast: $(5 + 2) / 2$ sono due `int`, $7 / 2 = 3$; poi 3 diventa `3.0` nell'assegnazione. Il decimale è perso **prima** che il `float` entri in gioco;
- `(float)(num1 + num2) / 2`: il cast converte 7 in `7.0`, poi `7.0 / 2` è fra `float` e `int`, il 2 sale a `float`, risultato 3.5;
- `(float)((num1 + num2) / 2)`: la divisione intera avviene dentro le parentesi, dà 3, e il cast trasforma 3 in `3.0`. Il cast arriva troppo tardi.

La regola pratica: il cast va su **uno degli operandi della divisione**, non sul risultato.

## Metodo

**Prevedere il valore di un'espressione mista.**
1. Disegna l'albero dell'espressione con le precedenze (il cast e gli unari legano più di `*` e `/`).
2. Valuta dal basso, un'operazione alla volta. Per ogni operazione guarda i tipi dei **due** operandi: se sono entrambi interi, `/` tronca e `%` dà il resto; se almeno uno è floating, l'altro sale e la divisione è vera.
3. Alla fine, se c'è un'assegnazione, converti al tipo della variabile a sinistra (troncando se è intera).

**Divisione e resto fra interi.** `a / b` tronca **verso lo zero**: $17 / 5 = 3$, $-17 / 5 = -3$. Il resto ha il segno del dividendo: $17 \% 5 = 2$, $-17 \% 5 = -2$. Vale sempre $(a / b) \cdot b + a \% b = a$.

**Evitare la divisione intera.** Basta che un operando sia floating: `(float)a / b`, `a / 2.0`, `a * 1.0 / b`. Le costanti con il punto (`2.0`, `100.0`) sono `double`, senza il punto (`2`, `100`) sono `int`.

**Arrotondare all'intero più vicino** (per valori positivi): `(int)(x + 0.5)`. Il cast da solo tronca.

**Confrontare floating**: mai l'uguaglianza, sempre la soglia `x >= y - EPSILON && x <= y + EPSILON`.

**Tracciare assegnazioni fra tipi diversi**: una tabella con una colonna per variabile e una per "tipo del valore a destra", come quella delle conversioni nell'assegnazione. I `float` si scrivono con il punto (10.0) per non confonderli con gli `int`.

## Esempi svolti a lezione

### Cast implicito ed esplicito

(<span class="src">slide 96</span>) Il programma del prof ripercorre le divisioni con `a` 2, `b` 3, `f` 10.4:

```c
#include <stdio.h>

int main(void)
{
    int a = 2;
    int b = 3;
    float f = 10.4f;

    printf("a/b=%d\n", a / b);
    f = a / b;
    printf("f=a/b=%f\n", f);
    f = (float)a / b;
    printf("f=(float)a/b=%f\n", f);
    f = f / b;
    printf("f=f/b=%f\n", f);
    f = a / 2.0;
    printf("f=a/2.0=%f\n", f);
    return 0;
}
```

Output (verificato):

```
a/b=0
f=a/b=0.000000
f=(float)a/b=0.666667
f=f/b=0.222222
f=a/2.0=1.000000
```

| riga | operandi | divisione | risultato |
| --- | --- | --- | --- |
| `a / b` | `int`, `int` | intera | 0 |
| `f = a / b` | `int`, `int` | intera, poi 0 diventa 0.0 | 0.0 |
| `f = (float)a / b` | `float`, `int` | fra `float` | 0.666667 |
| `f = f / b` | `float` (0.666667), `int` | fra `float` | 0.222222 |
| `f = a / 2.0` | `int`, `double` | fra `double` | 1.0 |

La seconda riga è la lezione del deck: `f` è `float`, ma questo non cambia il tipo della divisione a destra.

### π con la serie di Leibniz

(<span class="src">slide 98-102</span>) Calcolare π con una precisione decisa dall'utente usando la serie di Leibniz:

$$
\frac{\pi}{4} = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n + 1} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \ldots
$$

Vincolo della slide 100: niente funzioni come `pow`. Il segno $(-1)^n$ si ottiene con una variabile `segno` che cambia segno a ogni termine. La domanda "come specificare la precisione?" ha due risposte, le due varianti.

**La versione sbagliata della slide 101.** Il codice del prof, che lui stesso marca "Errore", è questo (leggermente ripulito):

```c
#include <stdio.h>

int main(void)
{
    int i;
    int precisione;
    int segno = -1;
    float pigreco = 1;

    if (scanf("%d", &precisione) != 1)
        return 1;
    for (i = 1; i <= precisione; i++) {
        pigreco += segno * 1 / (2 * i + 1);
        printf("i=%d , %f\n", i, pigreco * 4);
        segno = (-1) * segno;
    }
    return 0;
}
```

Con input 4 stampa quattro volte `4.000000` (verificato). Il motivo è nel commento del prof, "errore senza casting": `segno * 1 / (2 * i + 1)` è tutto fra `int`. Al primo giro $-1 \cdot 1 / 3$ fa $-1 / 3 = 0$ (troncamento verso lo zero); ogni termine vale 0 e `pigreco` resta 1. La domanda della slide "se dichiaro `segno` float?" ha risposta sì: con `segno` `float` il prodotto `segno * 1` è `float` e la divisione diventa vera. Altrettanto bene `1.0` al posto di `1`.

**Variante 1: input uguale al numero di termini.**

```c
#include <stdio.h>

int main(void)
{
    int i;
    int termini;
    int segno = -1;
    double somma = 1.0;

    if (scanf("%d", &termini) != 1 || termini < 1) {
        printf("input non valido\n");
        return 1;
    }
    for (i = 1; i < termini; i++) {
        somma += segno * 1.0 / (2 * i + 1);
        segno = -segno;
    }
    printf("pi con %d termini: %f\n", termini, 4 * somma);
    return 0;
}
```

Tracing con 4 termini (`somma` parte già dal termine $n = 0$, cioè 1):

| `i` | `segno` | termine `segno * 1.0 / (2*i+1)` | `somma` dopo | `4 * somma` |
| --- | --- | --- | --- | --- |
| | | | 1.0 | 4.0 |
| 1 | $-1$ | $-1/3 = -0.333333$ | 0.666667 | 2.666667 |
| 2 | $+1$ | $+1/5 = 0.2$ | 0.866667 | 3.466667 |
| 3 | $-1$ | $-1/7 = -0.142857$ | 0.723810 | 2.895238 |

Stampa `pi con 4 termini: 2.895238`; con 10 termini `3.041840`, con 1000 `3.140593` (verificati). La serie converge molto lentamente: con mille termini la terza cifra decimale è ancora sbagliata.

**Variante 2: input uguale al numero di cifre decimali.** Il suggerimento della slide 102: guardare la differenza fra due somme successive, cioè il termine appena aggiunto. Per una serie a segni alterni con termini che decrescono a zero l'errore commesso fermandosi è **minore del primo termine trascurato**. Quindi ci si ferma quando $4 \cdot \frac{1}{2n+1}$ (il prossimo termine, già moltiplicato per 4) scende sotto $10^{-\text{cifre}}$.

```c
#include <stdio.h>

int main(void)
{
    int cifre;
    int k;
    double soglia = 1.0;
    double termine = 1.0;
    double somma = 0.0;
    int n = 0;

    if (scanf("%d", &cifre) != 1 || cifre < 1 || cifre > 8) {
        printf("input non valido\n");
        return 1;
    }
    for (k = 0; k < cifre; k++)
        soglia = soglia / 10;
    while (4 * termine >= soglia) {
        if (n % 2 == 0)
            somma += termine;
        else
            somma -= termine;
        n++;
        termine = 1.0 / (2 * n + 1);
    }
    printf("pi = %.*f (%d termini)\n", cifre, 4 * somma, n);
    return 0;
}
```

| input | stampa (verificato) |
| --- | --- |
| 1 | `pi = 3.1 (20 termini)` |
| 2 | `pi = 3.14 (200 termini)` |
| 3 | `pi = 3.141 (2000 termini)` |
| 4 | `pi = 3.1415 (20000 termini)` |

La soglia si costruisce dividendo per 10 tante volte quante sono le cifre (niente `pow`). Ogni cifra in più costa dieci volte i termini. Con 4 cifre l'ultima stampata è 5 e non 6 (π è 3.14159...): l'errore garantito è minore di $10^{-4}$, ma la stampa arrotonda il valore approssimato, che sta un po' sotto π. `%.*f` prende il numero di decimali dall'argomento `cifre`.

### Leggere caratteri e codici ASCII

(<span class="src">slide 31-32</span>) Lo stesso esercizio del deck 4.3 (caratteri fino a `#`, codice ASCII, maiuscola delle minuscole), svolto in [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/), sezione "Caratteri e codice ASCII". In questa versione il prof legge il primo carattere con `scanf("%c")` e i successivi con `getchar()` dentro un `char`, e nel commento avverte del "comportamento di `scanf` con LF": anche l'a capo è un carattere e viene stampato con il suo codice 10.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Tipi di dati e conversioni (esercizi)](/uni/prog-1/tipi-di-dati-e-conversioni-esercizi/).

## Errori tipici

- Dividere due interi aspettandosi un decimale: `7 / 2` è 3, anche se il risultato finisce in un `float`.
- Mettere il cast sul risultato invece che su un operando: `(float)(a / b)` tronca prima di convertire.
- Aspettarsi che l'assegnazione `int i = 3.99` arrotondi: tronca. Per arrotondare `(int)(x + 0.5)` (con $x \geq 0$).
- Confrontare `float` o `double` con l'uguaglianza, o usarli come contatori di ciclo.
- Confrontare un `int` negativo con un `unsigned`, o calcolare `k - 5` con `k` `unsigned` aspettandosi un negativo.
- Credere che `'a'` sia un `char` in `sizeof('a')`: in C è un `int`.
- Stampare `sizeof` con `%d` o `%lu` invece di `%zu`, un `float` con `%d` o un `int` con `%f`: il formato deve corrispondere al tipo.
- Dare per scontate le dimensioni dei tipi: `long` è 8 byte su Linux a 64 bit e 4 su Windows.
- Scrivere costanti `100` dove serve `100.0`: per il float casuale con due decimali dell'esame, `(rand() % 2001 + 1500) / 100` è intero.
- Superare `INT_MAX` in un calcolo con `int`: è comportamento indefinito, non un "giro" come per gli `unsigned`.
- Credere che la conversione verso `float` non perda niente: un `int` grande (oltre $2^{24}$) perde le ultime cifre.
- Contare all'indietro con un `unsigned` e la condizione `i >= 0`: è sempre vera, e dopo lo 0 viene 4294967295.
- Leggere `a / b * c` come `a / (b * c)`, o dimenticare che `1 / 2 * x` fa prima la divisione intera: `*` e `/` vanno da sinistra.

## Domande

- Da cosa è caratterizzato un tipo di dato? Cosa permette l'astrazione del tipo?

- Quali sono le tre ragioni per cui i tipi sono utili? Che differenza c'è fra un linguaggio staticamente e uno dinamicamente tipato?

- Cosa fanno i qualificatori `short`, `long`, `signed` e `unsigned`? Quale relazione garantisce lo standard sulle dimensioni?

- 16 bit tutti a 1: quanto valgono in un `signed int` e in un `unsigned int`?

- Cos'è `sizeof`, che tipo restituisce e con quale formato si stampa?

- Perché non si confrontano due `float` con l'uguaglianza? Come si fa invece?

- Perché su un `char` si possono fare operazioni aritmetiche e confronti?

- Che differenza c'è fra tipi integral e floating?

- Quali sono le regole della conversione implicita in un'espressione con operandi di tipo diverso?

- Cosa succede al valore nell'assegnazione `int a = 10.4;`? E in `char c = 300;`?

- Perché `(float)(num1 + num2) / 2` dà la media giusta e `(float)((num1 + num2) / 2)` no?

- Perché il programma di Leibniz della slide 101 stampa sempre 4?

- Quanto valgono `1 / 2 * 3.0` e `3.0 * 1 / 2`, e perché sono diversi?

- Perché `-1 < 1u` è falso in C?

- Una conversione da `int` a `float` può perdere informazione? Fai un esempio.

- Come si ottiene il valore numerico di un carattere cifra come `'7'`?

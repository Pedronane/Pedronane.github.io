---
title: Programmazione 1
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: true
tipo: hub
stato: null
data: null
lezioni: []
ordine: 999
---

## Esame

Regole ufficiali dalla presentazione del corso (<span class="src">slide 29-36</span>):

```
prova scritta        30% del voto   questionario a risposta multipla e/o aperta su tutto il programma,
                                    più esercizi di comprensione e analisi di (parti di) programmi
prova calcolatore    70% del voto   progettare un programma piccolo in un ambiente come quello del lab
                                    (Dev-C++ sui PC di B106)
minimo               serve un punteggio minimo in entrambe le parti per la sufficienza
orale                non previsto, a discrezione del docente: lo studente non può chiederlo
appelli              2 sessioni, 5 appelli: gennaio, febbraio | giugno, luglio, settembre
```

- **Iscrizione**: solo se si è sicuri di presentarsi. Ci si può cancellare fino a **due giorni prima**. Assenze solo per giustificati motivi; assenze consecutive non giustificate non vengono tollerate.
- **All'esame** niente materiale didattico, né cartaceo né digitale. Il plagio (codice o scritto) viene punito e segnalato alla commissione disciplinare.
- Negli ultimi anni le due prove sono state: teorica su carta, 40 min, 12 punti, minimo 6; calcolatore 70 min, 21 punti, minimo 10; totale 33 (vedi [Esami passati](/uni/prog-1/esami-passati/)). Il 12/21 è circa il 36/64, non esattamente il 30/70 della slide: va controllato sul testo del primo appello.
- La leggibilità del codice fa parte del voto in entrambe le prove. Al calcolatore **il codice commentato non viene corretto**: una funzione che non compila e che commenti per far girare il resto vale zero.
- Le soluzioni ufficiali sono progetti Dev-C++ con `dati.h`, `dati.cpp`, `main.cpp`: allenarsi lì, non solo su onlinegdb.

### Prove intermedie 2026/27 (parte teorica)

(<span class="src">slide 34-35</span>)

```
1a prova   giovedì 5 novembre 2026     prima parte del programma
2a prova   lunedì 21 dicembre 2026     seconda parte
```

- Valgono come **prova teorica dell'esame**. Non sono obbligatorie e sono **in aggiunta** ai 5 appelli. Il prof le raccomanda molto.
- Chi **non supera la prima** non può fare la seconda.
- Chi non supera la seconda fa l'esame intero negli appelli, come tutti.
- Chi le **supera entrambe** negli appelli del **2027** fa **solo la parte al calcolatore**.
- Il **5/11 alle 15:30** c'è anche la prova intermedia di GAL (Povo 1, A104-A106, 90 min, vedi [Geometria e Algebra Lineare](/uni/gal/)). L'orario della provetta di Prog non è sulla slide: va controllato sul sito del corso.
- Il piano consigliato dal prof (slide 40-41): frequentare, preparare e passare le due provette, poi puntare all'appello di gennaio (meglio) o febbraio.

### Simulazioni della prima provetta

Il modello è la <span class="src">prima prova teorica del 22/10/2024</span>, l'unica negli archivi: 50 minuti, 6 punti, sei domande (SI/NO sui puntatori, output esatto di cicli, figura con i cicli, somma fra basi, tavola di verità, algoritmo su un array di struct). La cartella "1° Prova Teorica" su Moodle per ora è vuota. Simulazioni sullo stesso modello, a tempo e con correzione: [Simulazione provetta 1](/uni/simulazioni/prog-1/simulazione-provetta-1/), [Simulazione provetta 2](/uni/simulazioni/prog-1/simulazione-provetta-2/).

### Corso

- Lezioni a Povo 2, aula B109: giovedì 10:30-13:30, venerdì 13:30-15:30. Laboratorio in B106: mercoledì 13:30-15:30 (A-L) e 15:30-17:30 (M-Z), venerdì 8:30-10:30 (M-Z) e 10:30-12:30 (A-L).
- Esercitatori Pierluigi Roberti e Carmelo Ferrante. Domande sul corso a programmazione1gr@unitn.it, con oggetto `Lab - argomento`, `Lecture - argomento` o `Altro - argomento`.
- Testo consigliato: Ceri, Mandrioli, Sbattella, Cremonesi, Cugola, *Informatica: arte e mestiere*, McGraw-Hill, 4a ed. Copre il programma fino alle liste (fine novembre).
- Programma per mesi (slide 14): settembre-ottobre algoritmi, sintassi del C, memoria e puntatori, array, funzioni; novembre-dicembre tipi di dato astratto, liste, code, pile, ordinamento e ricerca, alberi binari, complessità.

**Come si prende 30** (dettagli e conteggi in [Esami passati](/uni/prog-1/esami-passati/)):

1. **Teorica a errore zero sulle due domande fisse.** BST da sequenza con cammino, altezza e le quattro visite esce in 16 prove su 18; il tracing "scrivi l'output esatto", spesso sulle cifre della matricola, in 15 su 18. Sono metà della teorica e sono meccaniche: si perdono solo per distrazione. Per il tracing, tabella delle variabili riga per riga come nelle note di questo corso.
2. **Scheletro A-F del calcolatore automatizzato.** Da dieci anni la prova pratica ha la stessa forma: struct con costruttori in `dati.h`/`dati.cpp` (A), `main` da completare (B), generazione del dato con input controllato e valori casuali (C), inserimento nel contenitore (D), stampa (E), svuotamento con salvataggio filtrato su file (F). Cambia solo il dominio. L'obiettivo è scrivere A-E senza pensarci e tenere la testa per F e per il contenitore del giorno (coda circolare, array di liste, stack).
3. **Ordine di preparazione** che segue il corso: `if` e tavole di verità, cicli e quadrati $N \times N$, array e matrici, funzioni, struct, file, `new`/`delete`, liste, code e stack, BST e complessità.
4. **Temi a tempo da dicembre**: un tema completo a settimana, teorica in 40 minuti e calcolatore in 70 su un progetto Dev-C++ vero, compilando spesso. Gli ultimi due anni sono il materiale più fedele.

## Lezioni

Le date delle lezioni dopo l'11 settembre non si ricavano dal materiale: il quaderno arriva alla slide 51 del deck 2.2. Il resto del 2.2, il 3.1 e il 3.2 sono stati fatti a lezione a settembre, il 3.3 fra settembre e ottobre, il 4.1 (tutto, matrici comprese) a ottobre, poi 4.2, 4.3, 4.4, 5.1 e 6.1 (tutti, interi) sempre a ottobre. Il deck 2.2 è stato ricaricato a fine settembre con una slide in più (esercizio sull'assegnazione a catena, slide 64-65): le pagine dopo la 54 sono rinumerate.

| #   | Data       | Argomento                              | Slide                                                    | Nota                                                            |
| --- | ---------- | -------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| 01  | 2026-09-10 | Introduzione al corso, algoritmi       | <span class="src">1.1</span>                      | [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/)                  |
| 02  | 2026-09-11 | Architettura hardware e software       | <span class="src">1.2</span>   | [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/) |
| 03  | 2026-09-11 | Il linguaggio C, fino all'assegnazione | <span class="src">2.2</span> (slide 1-56, 64-65) | [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/)                                    |
|     | set        | Espressioni, operatori, costanti, ASCII | <span class="src">2.2</span> (slide 57-76) | [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/)           |
|     | set        | Algebra di Boole                       | <span class="src">3.1</span>               | [Algebra di Boole](/uni/prog-1/algebra-di-boole/)                                   |
|     | set        | if, if-else, ?:, blocchi, precedenze   | <span class="src">3.2</span> (slide 1-39) | [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/)                    |
|     | set        | while: somma, sentinella, MCD          | <span class="src">3.2</span> (slide 40-57) | [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)             |
|     | set        | getchar, putchar, EOF                  | <span class="src">3.2</span> (slide 58-68) | [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/)       |
|     | set        | moltiplicazione, scala a passi 1-2-3   | <span class="src">3.2</span> (slide 69-97) | [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)             |
|     | set/ott    | for, do-while, break, continue, Böhm-Jacopini | <span class="src">3.3</span> (slide 3-15, 32-37) | [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/) |
|     | set/ott    | switch, fall-through, conteggio cifre  | <span class="src">3.3</span> (slide 16-31) | [Switch](/uni/prog-1/switch/) |
|     | ott        | array: dichiarazione, accesso, inizializzazione, esempi, VLA | <span class="src">4.1</span> (slide 2-52, 74-92) | [Array](/uni/prog-1/array/) |
|     | ott        | matrici: memoria per righe, simmetrica, trasposta, magiche | <span class="src">4.1</span> (slide 53-73, 93-100) | [Matrici e array multidimensionali](/uni/prog-1/matrici-e-array-multidimensionali/) |
|     | ott        | stringhe: array di char, '\0', %s, scanf | <span class="src">4.2</span> (tutto) | [Stringhe](/uni/prog-1/stringhe/) |
|     | ott        | informazione e dati, interi, CA2, virgola mobile, ASCII | <span class="src">4.3</span> (tutto) | [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/) |
|     | ott        | basi 2, 8, 16: conversioni e aritmetica binaria | <span class="src">4.4</span> (tutto) | [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/) |
|     | ott        | tipi predefiniti, sizeof, conversioni, cast, Leibniz | <span class="src">5.1</span> (slide 3-33, 77-102) | [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/) |
|     | ott        | struct, typedef, enum | <span class="src">5.1</span> (slide 34-76) | [Struct, typedef ed enum](/uni/prog-1/struct-typedef-ed-enum/) |
|     | ott        | puntatori: & e *, aliasing, ->, aritmetica, const | <span class="src">6.1</span> (tutto) | [Puntatori](/uni/prog-1/puntatori/) |

Prossimo: 6.2 Funzioni, non ancora nel vault. Si prende con `uvx --with playwright python tools/moodle.py prendi 6.2` quando è stato fatto a lezione.

## Argomenti

Nell'ordine del programma del prof:

1. [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/): algoritmo, esecutore, strutture di controllo, top-down, efficienza
2. [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/): Von Neumann, CPU, fetch-decode-execute, memorie, bus
3. [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/): compilazione, struttura del programma, variabili, assegnazione, `scanf` e `printf`
4. [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/): albero sintattico, precedenze, `++`/`--`, `const`, caratteri e ASCII
5. [Algebra di Boole](/uni/prog-1/algebra-di-boole/): tavole di verità, De Morgan, dalla tavola alla formula
6. [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/): `if`, dangling else, `?:`, istruzione composta
7. [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/): `while`, sentinella, MCD, moltiplicazione, scala
8. [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/): `getchar`, `putchar`, `EOF`
9. [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/): `for`, `do-while`, equivalenza con il `while`, `break` e `continue`, Böhm-Jacopini
10. [Switch](/uni/prog-1/switch/): selezione multipla, `break` e fall-through, `case` raggruppati
11. [Array](/uni/prog-1/array/): dichiarazione, indici da 0, fuori range, inizializzazione, cicli tipici, array di contatori, VLA
12. [Matrici e array multidimensionali](/uni/prog-1/matrici-e-array-multidimensionali/): `a[i][j]`, memoria per righe, simmetrica, trasposta, matrici magiche
13. [Stringhe](/uni/prog-1/stringhe/): array di `char` con `'\0'`, inizializzazione, `%s`, `scanf` senza `&`, lunghezza, copia, confronto
14. [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/): basi 2, 8, 16 e conversioni, complemento a 2, virgola fissa e mobile, ASCII, somma e shift
15. [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/): tipi predefiniti e qualificatori, `sizeof`, `float` e confronti, conversioni implicite, cast
16. [Struct, typedef ed enum](/uni/prog-1/struct-typedef-ed-enum/): `struct` e dot notation, memoria allocata, `typedef`, `enum`
17. [Puntatori](/uni/prog-1/puntatori/): `&` e `*`, `P = Q` e aliasing, `->`, array e aritmetica dei puntatori, `const`, array di puntatori

## Esercizi

- [Esami passati](/uni/prog-1/esami-passati/): formato dell'esame, domande più frequenti 2023-26, struttura del codice della prova al calcolatore, previsione 2026/27

## Risorse

- Slide del corso (prof. Giuseppe Riccardi) in `20 - Source Materials/Slide-Uni/`:
  - <span class="src">0 Introduzione al corso</span> (regole d'esame, orari)
  - <span class="src">1.1 Algoritmi</span>
  - <span class="src">1.2 Architettura hardware/software di un calcolatore</span>
  - <span class="src">2.2 Programmazione in C</span>
  - <span class="src">3.1 Operazioni logiche, algebra di Boole</span>
  - <span class="src">3.2 Codifica di semplici algoritmi in C: condizionali e iterative</span>
  - <span class="src">3.3 Strutture di controllo: for, do-while, switch</span>
  - <span class="src">4.1 Array</span>
  - <span class="src">4.2 Stringhe</span>
  - <span class="src">4.3 Rappresentazione di informazioni</span>
  - <span class="src">4.4 Operazioni e conversioni tra basi</span>
  - <span class="src">5.1 Tipi di dato</span>
  - <span class="src">6.1 Puntatori</span>
- Figure delle note: `tools/figure_uni/prog1.py`
- Compilatore online usato a lezione: [onlinegdb.com](https://www.onlinegdb.com)
- Base utile già nel vault: CS50 Introduction to programming with Python, Python - Sintassi base

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

```
prova teorica        carta, 40 min, 12 punti, minimo 6, niente strumenti elettronici
prova calcolatore    PC del laboratorio, 70 min, 21 punti, minimo 10, progetto Dev-C++
totale               33 punti, 5 appelli l'anno (gen, feb, giu, lug, fine ago/set)
```

- La leggibilità del codice fa parte del voto in entrambe le prove. Al calcolatore **il codice commentato non viene corretto**: una funzione che non compila e che commenti per far girare il resto vale zero.
- Le soluzioni ufficiali sono progetti Dev-C++ con `dati.h`, `dati.cpp`, `main.cpp`: allenarsi lì, non solo su onlinegdb.
- Nel 2024/25 ci sono state due prove teoriche intermedie (22 ottobre e 20 dicembre, 6 punti ciascuna); nel 2025/26 no. **Da chiedere al docente** se si ripetono e se sostituiscono la teorica.

**Come si prende 30** (dettagli e conteggi in [Esami passati](/uni/prog-1/esami-passati/)):

1. **Teorica a errore zero sulle due domande fisse.** BST da sequenza con cammino, altezza e le quattro visite esce in 16 prove su 18; il tracing "scrivi l'output esatto", spesso sulle cifre della matricola, in 15 su 18. Sono metà della teorica e sono meccaniche: si perdono solo per distrazione. Per il tracing, tabella delle variabili riga per riga come nelle note di questo corso.
2. **Scheletro A-F del calcolatore automatizzato.** Da dieci anni la prova pratica ha la stessa forma: struct con costruttori in `dati.h`/`dati.cpp` (A), `main` da completare (B), generazione del dato con input controllato e valori casuali (C), inserimento nel contenitore (D), stampa (E), svuotamento con salvataggio filtrato su file (F). Cambia solo il dominio. L'obiettivo è scrivere A-E senza pensarci e tenere la testa per F e per il contenitore del giorno (coda circolare, array di liste, stack).
3. **Ordine di preparazione** che segue il corso: `if` e tavole di verità, cicli e quadrati $N \times N$, array e matrici, funzioni, struct, file, `new`/`delete`, liste, code e stack, BST e complessità.
4. **Temi a tempo da dicembre**: un tema completo a settimana, teorica in 40 minuti e calcolatore in 70 su un progetto Dev-C++ vero, compilando spesso. Gli ultimi due anni sono il materiale più fedele.

## Lezioni

Le date delle lezioni dopo l'11 settembre non si ricavano dal materiale: il quaderno arriva alla slide 51 del deck 2.2. Il resto del 2.2, il 3.1 e il 3.2 sono stati fatti a lezione a settembre.

| #   | Data       | Argomento                              | Slide                                                    | Nota                                                            |
| --- | ---------- | -------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| 01  | 2026-09-10 | Introduzione al corso, algoritmi       | <span class="src">1.1</span>                      | [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/)                  |
| 02  | 2026-09-11 | Architettura hardware e software       | <span class="src">1.2</span>   | [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/) |
| 03  | 2026-09-11 | Il linguaggio C, fino all'assegnazione | <span class="src">2.2</span> (slide 1-57) | [Il Linguaggio C](/uni/prog-1/il-linguaggio-c/)                                    |
|     | set        | Espressioni, operatori, costanti, ASCII | <span class="src">2.2</span> (slide 58-75) | [Espressioni, operatori e costanti](/uni/prog-1/espressioni-operatori-e-costanti/)           |
|     | set        | Algebra di Boole                       | <span class="src">3.1</span>               | [Algebra di Boole](/uni/prog-1/algebra-di-boole/)                                   |
|     | set        | if, if-else, ?:, blocchi, precedenze   | <span class="src">3.2</span> (slide 1-39) | [Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/)                    |
|     | set        | while: somma, sentinella, MCD          | <span class="src">3.2</span> (slide 40-57) | [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)             |
|     | set        | getchar, putchar, EOF                  | <span class="src">3.2</span> (slide 58-68) | [Input e output di caratteri](/uni/prog-1/input-e-output-di-caratteri/)       |
|     | set        | moltiplicazione, scala a passi 1-2-3   | <span class="src">3.2</span> (slide 69-97) | [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)             |

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

## Esercizi

- [Esami passati](/uni/prog-1/esami-passati/): formato dell'esame, domande più frequenti 2023-26, struttura del codice della prova al calcolatore, previsione 2026/27

## Risorse

- Slide del corso (prof. Giuseppe Riccardi) in `20 - Source Materials/Slide-Uni/`:
  - <span class="src">1.1 Algoritmi</span>
  - <span class="src">1.2 Architettura hardware/software di un calcolatore</span>
  - <span class="src">2.2 Programmazione in C</span>
  - <span class="src">3.1 Operazioni logiche, algebra di Boole</span>
  - <span class="src">3.2 Codifica di semplici algoritmi in C: condizionali e iterative</span>
- Figure delle note: `tools/figure_uni/prog1.py`
- Compilatore online usato a lezione: [onlinegdb.com](https://www.onlinegdb.com)
- Base utile già nel vault: CS50 Introduction to programming with Python, Python - Sintassi base

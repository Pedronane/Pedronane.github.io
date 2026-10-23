---
title: Rappresentazione dell'informazione (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-10-14
lezioni: []
ordine: 13
---

Esercizi tipo esame di [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30, in quattro gruppi: conversioni, somma fra basi (la domanda fissa della provetta), complemento a 2, virgola fissa e mobile. Ogni conversione si scrive per intero: tabella delle divisioni con quoziente e resto, colonne della somma con la riga dei riporti, controllo finale. Tutti i risultati sono verificati in Python.

## Conversioni

**Esercizio 1.** Converti $45_{10}$ in base 2, 8 e 16.

> [!example]- Soluzione
> Da decimale verso un'altra base: resti. Basta farlo una volta in base 2 e poi raggruppare.
>
> | divisione | quoziente | resto |
> | --- | --- | --- |
> | 45 : 2 | 22 | 1 |
> | 22 : 2 | 11 | 0 |
> | 11 : 2 | 5 | 1 |
> | 5 : 2 | 2 | 1 |
> | 2 : 2 | 1 | 0 |
> | 1 : 2 | 0 | 1 |
>
> Resti dall'ultimo: $45_{10} = 101101_2$. Gruppi da 3 da destra: `101 101` cioè $55_8$. Gruppi da 4: `0010 1101` cioè $2D_{16}$.
>
> Controlli: $32 + 8 + 4 + 1 = 45$; $5 \cdot 8 + 5 = 45$; $2 \cdot 16 + 13 = 45$.

**Esercizio 2.** Converti in decimale con i pesi: $110101_2$, $357_8$, $2F4_{16}$, $1201_3$.

> [!example]- Soluzione
> Verso il decimale: pesi. Si numerano le posizioni da destra partendo da 0.
>
> $$
> 110101_2 = 1 \cdot 2^5 + 1 \cdot 2^4 + 0 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 32 + 16 + 0 + 4 + 0 + 1 = 53
> $$
>
> $$
> 357_8 = 3 \cdot 8^2 + 5 \cdot 8^1 + 7 \cdot 8^0 = 3 \cdot 64 + 5 \cdot 8 + 7 = 192 + 40 + 7 = 239
> $$
>
> $$
> 2F4_{16} = 2 \cdot 16^2 + 15 \cdot 16^1 + 4 \cdot 16^0 = 512 + 240 + 4 = 756 \qquad (F = 15)
> $$
>
> $$
> 1201_3 = 1 \cdot 3^3 + 2 \cdot 3^2 + 0 \cdot 3^1 + 1 \cdot 3^0 = 27 + 18 + 0 + 1 = 46
> $$
>
> Controllo di buon senso: $1201_3$ ha cifre solo da 0 a 2, quindi è un numero valido in base 3. La base 3 non è nel deck, ma la regola dei pesi è la stessa per ogni base.

**Esercizio 3.** «301 può essere un numero in base 3? E in base 4?» Se sì, quanto vale in decimale?

> [!example]- Soluzione
> In base $b$ le cifre vanno da 0 a $b - 1$. In base 3 le cifre ammesse sono 0, 1, 2: la cifra 3 non esiste, quindi **no**. In base 4 le cifre sono 0-3, quindi **sì**:
>
> $$
> 301_4 = 3 \cdot 4^2 + 0 \cdot 4^1 + 1 \cdot 4^0 = 48 + 0 + 1 = 49_{10}
> $$
>
> La regola generale: un numero può stare in base $b$ solo se $b$ è **maggiore** della sua cifra più grande.

**Esercizio 4.** Converti $1000_{10}$ in base 2, 8 e 16 usando ogni volta l'algoritmo dei resti, poi controlla che i tre risultati siano coerenti con i gruppi di bit.

> [!example]- Soluzione
> Tre tabelle dei resti, una per base.
>
> | divisione | quoziente | resto |
> | --- | --- | --- |
> | 1000 : 2 | 500 | 0 |
> | 500 : 2 | 250 | 0 |
> | 250 : 2 | 125 | 0 |
> | 125 : 2 | 62 | 1 |
> | 62 : 2 | 31 | 0 |
> | 31 : 2 | 15 | 1 |
> | 15 : 2 | 7 | 1 |
> | 7 : 2 | 3 | 1 |
> | 3 : 2 | 1 | 1 |
> | 1 : 2 | 0 | 1 |
>
> Resti dall'ultimo: $1000_{10} = 1111101000_2$.
>
> | divisione | quoziente | resto |
> | --- | --- | --- |
> | 1000 : 8 | 125 | 0 |
> | 125 : 8 | 15 | 5 |
> | 15 : 8 | 1 | 7 |
> | 1 : 8 | 0 | 1 |
>
> $1000_{10} = 1750_8$.
>
> | divisione | quoziente | resto | cifra |
> | --- | --- | --- | --- |
> | 1000 : 16 | 62 | 8 | 8 |
> | 62 : 16 | 3 | 14 | E |
> | 3 : 16 | 0 | 3 | 3 |
>
> $1000_{10} = 3E8_{16}$.
>
> Controllo con i gruppi, partendo dal binario `1111101000`:
> ```
> 1 111 101 000    ->  001 111 101 000  ->  1 7 5 0     ottale
> 11 1110 1000     ->  0011 1110 1000   ->  3 E 8       esadecimale
> ```
> Tornano tutti e due. Controllo con i pesi: $1 \cdot 512 + 7 \cdot 64 + 5 \cdot 8 + 0 = 512 + 448 + 40 = 1000$.

**Esercizio 5.** Converti $3A7_{16}$ in ottale e $7654_8$ in esadecimale senza passare dal decimale.

> [!example]- Soluzione
> Fra 8 e 16 si passa per il binario: 4 bit per cifra esadecimale, 3 per cifra ottale, sempre con tutti i bit.
> ```
> 3    A    7              esadecimale
> 0011 1010 0111           4 bit per cifra (A = 1010)
> 001 110 100 111          rigruppati da 3, partendo da destra
> 1   6   4   7            ottale
> ```
> $3A7_{16} = 1647_8$. Controllo: $3A7_{16} = 768 + 160 + 7 = 935$ e $1647_8 = 512 + 384 + 32 + 7 = 935$.
> ```
> 7   6   5   4            ottale
> 111 110 101 100          3 bit per cifra
> 1111 1010 1100           rigruppati da 4, partendo da destra
> F    A    C              esadecimale
> ```
> $7654_8 = FAC_{16}$. Controllo: $7654_8 = 3584 + 384 + 40 + 4 = 4012$ e $FAC_{16} = 3840 + 160 + 12 = 4012$.

## Somma fra basi (serie graduata)

La domanda 4 della <span class="src">prima provetta del 22/10/2024</span> è l'Esercizio 11. Gli esercizi prima ci arrivano un passo alla volta, quelli dopo vanno oltre. Il metodo, con le due strade (dal decimale e dal binario), è nella teoria, sezione Metodo.

**Esercizio 6.** Calcola $1011_2 + 110_2$ in colonna e controlla in decimale.

> [!example]- Soluzione
> Stessa base: si somma direttamente in colonna. Si allineano a destra, con uno zero davanti a `110`, e si lascia una colonna in più per l'ultimo riporto.
>
> | posizione | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- |
> | riporto entrante | 1 | 1 | 1 | 0 | 0 |
> | $1011_2$ | 0 | 1 | 0 | 1 | 1 |
> | $0110_2$ | 0 | 0 | 1 | 1 | 0 |
> | somma | 1 | 0 | 0 | 0 | 1 |
>
> - colonna 0: $1 + 0 + 0 = 1$, scrivo 1, riporto 0;
> - colonna 1: $1 + 1 + 0 = 2$, scrivo 0, riporto 1;
> - colonna 2: $0 + 1 + 1 = 2$, scrivo 0, riporto 1;
> - colonna 3: $1 + 0 + 1 = 2$, scrivo 0, riporto 1;
> - colonna 4: $0 + 0 + 1 = 1$, scrivo 1.
>
> Risultato $10001_2$. Controllo: $1011_2 = 11$, $110_2 = 6$, $11 + 6 = 17$, e $10001_2 = 16 + 1 = 17$.

**Esercizio 7.** Calcola $10110111_2 + 01011101_2$ su 8 bit, numeri senza segno. Il risultato sta in 8 bit?

> [!example]- Soluzione
> | posizione | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto entrante | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
> | $10110111_2$ | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 1 |
> | $01011101_2$ | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |
> | somma | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
>
> Colonna per colonna: 0) $1 + 1 = 2$, scrivo 0 porto 1; 1) $1 + 0 + 1 = 2$, 0 porto 1; 2) $1 + 1 + 1 = 3$, 1 porto 1; 3) $0 + 1 + 1 = 2$, 0 porto 1; 4) $1 + 1 + 1 = 3$, 1 porto 1; 5) $1 + 0 + 1 = 2$, 0 porto 1; 6) $0 + 1 + 1 = 2$, 0 porto 1; 7) $1 + 0 + 1 = 2$, 0 porto **1 fuori dagli 8 bit**.
>
> Il risultato vero ha 9 bit, `100010100` $= 256 + 16 + 4 = 276$, e infatti $183 + 93 = 276$. Su 8 bit restano `00010100` $= 20 = 276 - 256$: **no**, non ci sta. Per i numeri senza segno è proprio il riporto in uscita a segnalare l'overflow (al contrario del CA2, dove conta il segno).

**Esercizio 8.** Calcola $25_8 + 17_8$ direttamente in base 8, poi controlla in decimale.

> [!example]- Soluzione
> Stessa base: colonna per colonna, e quando la somma arriva a 8 si scrive somma meno 8 e si porta 1.
>
> | posizione | 1 | 0 |
> | --- | --- | --- |
> | riporto entrante | 1 | 0 |
> | $25_8$ | 2 | 5 |
> | $17_8$ | 1 | 7 |
> | somma | 4 | 4 |
>
> - colonna 0: $5 + 7 + 0 = 12 \geq 8$, scrivo $12 - 8 = 4$, porto 1;
> - colonna 1: $2 + 1 + 1 = 4 < 8$, scrivo 4.
>
> Risultato $44_8$. Controllo: $25_8 = 16 + 5 = 21$, $17_8 = 8 + 7 = 15$, $21 + 15 = 36$, e $44_8 = 32 + 4 = 36$. L'errore tipico è scrivere $5 + 7 = 12$ come nella somma decimale e ottenere $42_8$ (= 34).

**Esercizio 9.** Calcola $3B_{16} + 2F_{16}$ direttamente in base 16, poi controlla in decimale.

> [!example]- Soluzione
> | posizione | 1 | 0 |
> | --- | --- | --- |
> | riporto entrante | 1 | 0 |
> | $3B_{16}$ | 3 | B |
> | $2F_{16}$ | 2 | F |
> | somma | 6 | A |
>
> - colonna 0: B = 11, F = 15, $11 + 15 + 0 = 26 \geq 16$, scrivo $26 - 16 = 10$ cioè A, porto 1;
> - colonna 1: $3 + 2 + 1 = 6$, scrivo 6.
>
> Risultato $6A_{16}$. Controllo: $3B_{16} = 48 + 11 = 59$, $2F_{16} = 32 + 15 = 47$, $59 + 47 = 106$, e $6A_{16} = 96 + 10 = 106$.

**Esercizio 10.** Calcola $(2B)_{16} + (73)_8$ mostrando tutti i passaggi. Dai il risultato in base 10, 2, 8 e 16.

> [!example]- Soluzione
> Basi diverse: si portano entrambi in decimale (strada A), poi si controlla in binario (strada B).
>
> $$
> 2B_{16} = 2 \cdot 16 + 11 \cdot 1 = 32 + 11 = 43_{10}
> $$
> $$
> 73_8 = 7 \cdot 8 + 3 \cdot 1 = 56 + 3 = 59_{10}
> $$
> $$
> 43 + 59 = 102_{10}
> $$
>
> $102$ in binario con i resti:
>
> | divisione | quoziente | resto |
> | --- | --- | --- |
> | 102 : 2 | 51 | 0 |
> | 51 : 2 | 25 | 1 |
> | 25 : 2 | 12 | 1 |
> | 12 : 2 | 6 | 0 |
> | 6 : 2 | 3 | 0 |
> | 3 : 2 | 1 | 1 |
> | 1 : 2 | 0 | 1 |
>
> Dall'ultimo: $1100110_2$. Raggruppando: `1 100 110` diventa `001 100 110`, cioè $146_8$; `0110 0110` è $66_{16}$.
>
> Controllo con la somma in binario su 8 bit, senza passare dal decimale: $2B_{16}$ = `0010 1011`, $73_8$ = `111 011` = `00111011`.
>
> | posizione | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto entrante | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 0 |
> | $2B_{16}$ | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 |
> | $73_8$ | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 1 |
> | somma | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
>
> `01100110` $= 64 + 32 + 4 + 2 = 102$. Torna.

**Esercizio 11** (prima provetta, 22/10/2024, 1 punto). Calcolare la somma tra $(16)_8$ e $(80)_{16}$. Inoltre dire a quali delle soluzioni equivale il risultato, mostrando tutti i passaggi per la somma e le conversioni.

- a) $(10000110)_2$
- b) $(216)_8$
- c) $(8E)_{16}$
- d) $(132)_{10}$

> [!example]- Soluzione
> Basi diverse (8 e 16), opzioni in quattro basi: serve il risultato in 2, 8, 16 e 10.
>
> **Strada B, dal binario.** Ogni cifra ottale in 3 bit, ogni esadecimale in 4:
> - $(16)_8$: $1$ = `001`, $6$ = `110`, quindi `001110`, su 8 bit `00001110`;
> - $(80)_{16}$: $8$ = `1000`, $0$ = `0000`, quindi `10000000`.
>
> | posizione | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto entrante | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
> | $(16)_8$ | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |
> | $(80)_{16}$ | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
> | somma | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |
>
> Nessuna colonna ha due 1, quindi nessun riporto: $(10001110)_2$. Da qui:
> ```
> 10 001 110   ->  010 001 110  ->  2 1 6    (216)8
> 1000 1110                     ->  8 E      (8E)16
> ```
> In decimale: $128 + 8 + 4 + 2 = 142$.
>
> **Strada A, dal decimale, come controllo.** $(16)_8 = 1 \cdot 8 + 6 = 14$; $(80)_{16} = 8 \cdot 16 + 0 = 128$; $14 + 128 = 142$.
>
> | divisione | quoziente | resto |
> | --- | --- | --- |
> | 142 : 8 | 17 | 6 |
> | 17 : 8 | 2 | 1 |
> | 2 : 8 | 0 | 2 |
>
> | divisione | quoziente | resto | cifra |
> | --- | --- | --- | --- |
> | 142 : 16 | 8 | 14 | E |
> | 8 : 16 | 0 | 8 | 8 |
>
> Stessi risultati: $(216)_8$ e $(8E)_{16}$.
>
> **Le opzioni.**
> - a) **NO**: $(10000110)_2 = 128 + 4 + 2 = 134$. Confrontato con `10001110` manca il bit 3, che vale 8.
> - b) **SI**: $(216)_8 = 2 \cdot 64 + 1 \cdot 8 + 6 = 142$.
> - c) **SI**: $(8E)_{16} = 8 \cdot 16 + 14 = 142$.
> - d) **NO**: $132 \neq 142$.
>
> Il tranello del testo: $(80)_{16}$ contiene la cifra 8, che in ottale non esisterebbe. Qui va bene perché il pedice è 16.

**Esercizio 12.** Calcola $(A7)_{16} + (1101101)_2 + (64)_{10}$ e dai il risultato in base 16 e in base 8.

> [!example]- Soluzione
> Tre addendi in tre basi. Il risultato va in 16 e 8, quindi conviene lavorare in esadecimale.
>
> 1. $(1101101)_2$ in esadecimale, gruppi da 4 da destra: `110 1101` diventa `0110 1101`, cioè $6D_{16}$.
> 2. $(64)_{10}$ in esadecimale con i resti: 64 : 16 = 4 resto 0; 4 : 16 = 0 resto 4. Quindi $40_{16}$.
> 3. Prima somma, $A7_{16} + 6D_{16}$:
>
> | posizione | 2 | 1 | 0 |
> | --- | --- | --- | --- |
> | riporto entrante | 1 | 1 | 0 |
> | $A7_{16}$ | 0 | A | 7 |
> | $6D_{16}$ | 0 | 6 | D |
> | somma | 1 | 1 | 4 |
>
> Colonna 0: $7 + 13 = 20 \geq 16$, scrivo $20 - 16 = 4$, porto 1. Colonna 1: $10 + 6 + 1 = 17 \geq 16$, scrivo 1, porto 1. Colonna 2: $0 + 0 + 1 = 1$. Parziale $114_{16}$.
>
> 4. Seconda somma, $114_{16} + 40_{16}$: colonna 0 $4 + 0 = 4$, colonna 1 $1 + 4 = 5$, colonna 2 $1 + 0 = 1$, nessun riporto. Risultato $154_{16}$.
> 5. In ottale passando dal binario: `0001 0101 0100` rigruppato da 3 da destra è `101 010 100`, cioè $524_8$.
>
> Controllo in decimale: $A7_{16} = 160 + 7 = 167$; $1101101_2 = 64 + 32 + 8 + 4 + 1 = 109$; $167 + 109 + 64 = 340$. E $154_{16} = 256 + 80 + 4 = 340$, $524_8 = 320 + 16 + 4 = 340$.

**Esercizio 13.** Calcola $(212)_3 + (34)_5$ e dai il risultato in base 7.

> [!example]- Soluzione
> Basi che non sono potenze di 2: la strada dal binario non funziona, si passa per forza dal decimale.
>
> $$
> 212_3 = 2 \cdot 9 + 1 \cdot 3 + 2 \cdot 1 = 18 + 3 + 2 = 23
> $$
> $$
> 34_5 = 3 \cdot 5 + 4 \cdot 1 = 15 + 4 = 19
> $$
> $$
> 23 + 19 = 42
> $$
>
> | divisione | quoziente | resto |
> | --- | --- | --- |
> | 42 : 7 | 6 | 0 |
> | 6 : 7 | 0 | 6 |
>
> Resti dall'ultimo: $60_7$. Controllo: $6 \cdot 7 + 0 = 42$.

**Esercizio 14** (livello 30). In quale base $b$ vale l'uguaglianza $13_b + 24_b = 41_b$? Controlla facendo la somma in colonna in quella base.

> [!example]- Soluzione
> Si riconosce un'equazione nascosta: ogni numero, scritto con i pesi, è un polinomio in $b$.
>
> $$
> 13_b = 1 \cdot b + 3 \qquad 24_b = 2 \cdot b + 4 \qquad 41_b = 4 \cdot b + 1
> $$
>
> $$
> (b + 3) + (2b + 4) = 4b + 1
> $$
> $$
> 3b + 7 = 4b + 1 \qquad \text{sommo i termini simili a sinistra}
> $$
> $$
> b = 6 \qquad \text{porto } 3b \text{ a destra e } 1 \text{ a sinistra}
> $$
>
> Condizione sulle cifre: compare la cifra 4, quindi serve $b > 4$, e 6 va bene.
>
> Somma in colonna in base 6: colonna 0, $3 + 4 = 7 \geq 6$, scrivo $7 - 6 = 1$, porto 1; colonna 1, $1 + 2 + 1 = 4$, scrivo 4. Esce $41_6$. In decimale: $9 + 16 = 25 = 4 \cdot 6 + 1$ (verificato con sympy).

## Complemento a 2

**Esercizio 15.** Con 4 bit in CA2: quale intervallo si rappresenta? Scrivi $+7$, $-1$, $-5$, $-8$ e $+8$.

> [!example]- Soluzione
> Intervallo: da $-2^3 = -8$ a $2^3 - 1 = 7$.
> - $+7$ = `0111` (positivo: binario normale con MSB 0).
> - $-1$: `0001`, inverto `1110`, sommo 1: `1111`.
> - $-5$: `0101`, inverto `1010`, sommo 1: `1011`. Controllo: $-8 + 2 + 1 = -5$.
> - $-8$: `1000`. Col metodo: `1000` (8 senza segno), inverto `0111`, sommo 1: `1000`. Controllo: $-8$.
> - $+8$: **non rappresentabile**, è fuori da $[-8, 7]$. Scritto `1000` sarebbe letto come $-8$.

**Esercizio 16.** La sequenza di 8 bit `10110110`: quanto vale letta come naturale, in modulo e segno e in complemento a 2?

> [!example]- Soluzione
> Pesi: `1`·128 `0`·64 `1`·32 `1`·16 `0`·8 `1`·4 `1`·2 `0`·1.
> - **Naturale**: $128 + 32 + 16 + 4 + 2 = 182$.
> - **Modulo e segno**: MSB 1, quindi negativo; modulo `0110110` $= 32 + 16 + 4 + 2 = 54$. Vale $-54$.
> - **CA2**: MSB 1, quindi naturale meno $2^8$: $182 - 256 = -74$. Con il peso negativo: $-128 + 32 + 16 + 4 + 2 = -74$.
>
> Controllo del CA2 invertendo: `10110110` invertito è `01001001`, più 1 è `01001010` $= 64 + 8 + 2 = 74$, quindi il numero era $-74$.

**Esercizio 17.** Calcola $23 - 45$ in complemento a 2 su 8 bit e verifica il risultato.

> [!example]- Soluzione
> Sottrazione in CA2: si somma $23 + (-45)$. Entrambi sono nell'intervallo $[-128, 127]$.
>
> 1. $23 = 16 + 4 + 2 + 1$ = `00010111`.
> 2. $45$ = `00101101`; invertito `11010010`; più 1: `11010011` $= -45$. Controllo: $-128 + 64 + 16 + 2 + 1 = -45$.
> 3. Somma:
>
> | posizione | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto entrante | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
> | $23$ | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 |
> | $-45$ | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 1 |
> | somma | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 0 |
>
> 4. Risultato `11101010`: MSB 1, negativo. $-128 + 64 + 32 + 8 + 2 = -22$. Infatti $23 - 45 = -22$.
>
> Segni diversi: l'overflow è impossibile.

**Esercizio 18.** Calcola $100 + 50$ in CA2 su 8 bit. Il risultato è corretto?

> [!example]- Soluzione
> $100 = 64 + 32 + 4$ = `01100100`, $50 = 32 + 16 + 2$ = `00110010`.
>
> | posizione | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto entrante | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
> | $100$ | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
> | $50$ | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
> | somma | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |
>
> Le colonne 5 e 6 generano riporto ($1 + 1 = 2$, poi $1 + 0 + 1 = 2$), la 7 riceve 1 e lo scrive: `10010110`, senza riporto in uscita.
>
> Letto in CA2: MSB 1, $-128 + 16 + 4 + 2 = -106$. Due positivi hanno dato un negativo: è **overflow**. Il risultato vero, 150, è fuori dall'intervallo $[-128, 127]$ degli 8 bit con segno. Letto come naturale `10010110` vale proprio 150: gli stessi bit sono giusti senza segno e sbagliati con segno. Sulla ruota del CA2 la somma ha attraversato la linea fra $+127$ e $-128$. Nota: qui c'è overflow **senza** riporto in uscita; nell'esempio $5 - 3$ della teoria (sezione "Sottrazione e overflow in CA2") c'è riporto in uscita senza overflow. Il riporto da solo non dice niente.

**Esercizio 19** (livello 30). Calcola $-50 - 80$ in CA2 su 8 bit. C'è overflow? Come lo riconosci guardando solo i bit?

> [!example]- Soluzione
> Si scrive come somma di due negativi: $(-50) + (-80)$.
>
> 1. $50 = 32 + 16 + 2$ = `00110010`; inverto `11001101`; sommo 1: `11001110` $= -50$. Controllo: $-128 + 64 + 8 + 4 + 2 = -50$.
> 2. $80 = 64 + 16$ = `01010000`; inverto `10101111`; sommo 1: `10110000` $= -80$. Controllo: $-128 + 32 + 16 = -80$.
> 3. Somma:
>
> | posizione | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto entrante | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
> | $-50$ | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |
> | $-80$ | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
> | somma | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
>
> Solo la colonna 7 ha due 1: scrive 0 e manda un riporto fuori, che si scarta.
>
> 4. Risultato `01111110` $= +126$. Due addendi con MSB 1 (negativi) e risultato con MSB 0 (positivo): **overflow**. Il valore vero, $-130$, è sotto $-128$. Sulla ruota: $-130$ è due passi oltre $-128$, e due passi oltre $-128$ andando indietro si arriva a $+126$ ($126 = 256 - 130$).

## Bit, virgola fissa e virgola mobile

**Esercizio 20.** Quanti bit servono per rappresentare 300 valori diversi? E 654? Quanti per tutti gli interi da $-200$ a $200$ in CA2?

> [!example]- Soluzione
> Serve il più piccolo $N$ con $2^N \geq K$.
> - 300: $2^8 = 256 < 300 \leq 512 = 2^9$, quindi **9 bit**.
> - 654: $2^9 = 512 < 654 \leq 1024 = 2^{10}$, quindi **10 bit**.
> - Da $-200$ a $200$ in CA2: con $N$ bit l'intervallo è $[-2^{N-1}, 2^{N-1} - 1]$. Serve $2^{N-1} - 1 \geq 200$, cioè $2^{N-1} \geq 201$: $2^7 = 128$ non basta, $2^8 = 256$ sì, quindi $N - 1 = 8$ e **9 bit** (intervallo $[-256, 255]$).

**Esercizio 21.** Scrivi in virgola fissa con 6 bit di parte intera e 3 di parte frazionaria il numero $45.625$.

> [!example]- Soluzione
> Parte intera e parte frazionaria si convertono separatamente.
> - $45 = 101101_2$ (Esercizio 1), che occupa esattamente 6 bit.
> - $0.625$: si moltiplica per 2 e si prende la parte intera, ripetendo sulla parte frazionaria:
>
> | passo | calcolo | parte intera (bit) | resta |
> | --- | --- | --- | --- |
> | 1 | $0.625 \cdot 2 = 1.25$ | 1 | 0.25 |
> | 2 | $0.25 \cdot 2 = 0.5$ | 0 | 0.5 |
> | 3 | $0.5 \cdot 2 = 1.0$ | 1 | 0 |
>
> I bit si leggono **dal primo all'ultimo**: $0.101_2$. Risultato: `101101.101`.
>
> Controllo con i pesi: $32 + 8 + 4 + 1 + 0.5 + 0.125 = 45.625$.

**Esercizio 22.** Scrivi $12.3$ in virgola fissa con 4 bit di parte intera e 4 di parte frazionaria (la codifica della slide 26). Quale valore viene memorizzato davvero, e di quanto si sbaglia?

> [!example]- Soluzione
> - $12$ con i resti: 12 : 2 = 6 r 0; 6 : 2 = 3 r 0; 3 : 2 = 1 r 1; 1 : 2 = 0 r 1. Dall'ultimo: `1100`.
> - $0.3$ con le moltiplicazioni:
>
> | passo | calcolo | bit | resta |
> | --- | --- | --- | --- |
> | 1 | $0.3 \cdot 2 = 0.6$ | 0 | 0.6 |
> | 2 | $0.6 \cdot 2 = 1.2$ | 1 | 0.2 |
> | 3 | $0.2 \cdot 2 = 0.4$ | 0 | 0.4 |
> | 4 | $0.4 \cdot 2 = 0.8$ | 0 | 0.8 |
>
> Dopo 4 bit resta ancora 0.8: la parte frazionaria non è finita (0.3 in binario è periodico, come 0.1 nella teoria). Si tengono i 4 bit e si butta il resto: `1100.0100`.
>
> Valore memorizzato: $8 + 4 + 0.25 = 12.25$. Errore: $12.3 - 12.25 = 0.05$. È il limite della virgola fissa: con 4 bit frazionari la risoluzione è $2^{-4} = 0.0625$, e ogni numero viene approssimato a un multiplo di 0.0625.

**Esercizio 23.** (Livello 30) Un byte vale `C8` in esadecimale. Quanto vale se è un `unsigned char`? E se è un intero in CA2 su 8 bit? Scrivi il secondo valore anche in ottale (con il segno).

> [!example]- Soluzione
> $C8_{16}$ = `1100 1000`.
> - Senza segno: $12 \cdot 16 + 8 = 200$.
> - CA2: MSB 1, quindi $200 - 256 = -56$. Controllo con il peso negativo: $-128 + 64 + 8 = -56$.
> - $56$ in ottale: 56 : 8 = 7 r 0; 7 : 8 = 0 r 7, quindi $70_8$. Il valore è $-70_8$.
>
> Il punto dell'esercizio: lo stesso byte è 200 o $-56$ a seconda del tipo con cui lo dichiari (in C, `unsigned char` o `signed char`), come nell'esempio della slide 15 del deck 5.1.

**Esercizio 24.** (Livello 30) Codifica $+6.5$ nella virgola mobile semplificata del prof (1 bit di segno, 8 di esponente in CA2, 23 di mantissa letta come $0.m$).

> [!example]- Soluzione
> 1. In binario: $6 = 110_2$, $0.5 = 0.1_2$, quindi $6.5 = 110.1_2$.
> 2. Si porta nella forma $0.m \cdot 2^e$ spostando la virgola a sinistra finché prima della virgola resta 0: $110.1 = 0.1101 \cdot 2^3$.
> 3. Segno positivo: bit 0. Esponente $3$ in CA2 su 8 bit: `00000011`. Mantissa: `1101` seguito da 19 zeri.
>
> ```
> 0 00000011 11010000000000000000000
> ```
>
> Controllo: $0.1101_2 = 0.5 + 0.25 + 0.0625 = 0.8125$ e $0.8125 \cdot 8 = 6.5$.

**Esercizio 25.** (Livello 30) Decodifica nella virgola mobile semplificata del prof:

- a) `0 11111110 11000000000000000000000`
- b) `1 00000100 10110000000000000000000`

> [!example]- Soluzione
> Come nelle slide 29-31: segno, esponente in CA2, mantissa $0.m$, poi $X = \pm m \cdot 2^e$.
>
> a)
> - segno 0: positivo;
> - esponente `11111110`: MSB 1, quindi $254 - 256 = -2$;
> - mantissa $0.11_2 = 0.5 + 0.25 = 0.75$;
> - $X = 0.75 \cdot 2^{-2} = 0.75 / 4 = 0.1875$. Come spostamento: $0.11$ con la virgola 2 posti a sinistra è $0.0011_2 = 0.125 + 0.0625 = 0.1875$.
>
> b)
> - segno 1: negativo;
> - esponente `00000100` $= 4$;
> - mantissa $0.1011_2 = 0.5 + 0.125 + 0.0625 = 0.6875$;
> - $X = -0.6875 \cdot 2^4 = -0.6875 \cdot 16 = -11$. Come spostamento: $0.1011$ con la virgola 4 posti a destra è $1011_2 = 11$.
>
> Valori verificati con frazioni esatte in Python ($3/16$ e $-11$).

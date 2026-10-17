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

**Esercizio 2.** «301 può essere un numero in base 3? E in base 4?» Se sì, quanto vale in decimale?

> [!example]- Soluzione
> In base $b$ le cifre vanno da 0 a $b - 1$. In base 3 le cifre ammesse sono 0, 1, 2: la cifra 3 non esiste, quindi **no**. In base 4 le cifre sono 0-3, quindi **sì**:
>
> $$
> 301_4 = 3 \cdot 4^2 + 0 \cdot 4^1 + 1 \cdot 4^0 = 48 + 0 + 1 = 49_{10}
> $$
>
> La regola generale: un numero può stare in base $b$ solo se $b$ è **maggiore** della sua cifra più grande.

**Esercizio 3.** Calcola $(2B)_{16} + (73)_8$ mostrando tutti i passaggi. Dai il risultato in base 10, 2, 8 e 16.

> [!example]- Soluzione
> Basi diverse: si portano entrambi in decimale.
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
> $102$ in binario con i resti: 102:2 = 51 r 0; 51:2 = 25 r 1; 25:2 = 12 r 1; 12:2 = 6 r 0; 6:2 = 3 r 0; 3:2 = 1 r 1; 1:2 = 0 r 1. Dall'ultimo: $1100110_2$.
>
> Raggruppando: `1 100 110` diventa `001 100 110`, cioè $146_8$; `0110 0110` è $66_{16}$.
>
> Controllo con la somma in binario su 8 bit, senza passare dal decimale: $2B_{16}$ = `00101011`, $73_8$ = `111 011` = `00111011`.
>
> | bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 0 |
> | $2B_{16}$ | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 |
> | $73_8$ | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 1 |
> | somma | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
>
> `01100110` $= 64 + 32 + 4 + 2 = 102$. Torna.

**Esercizio 4.** La sequenza di 8 bit `10110110`: quanto vale letta come naturale, in modulo e segno e in complemento a 2?

> [!example]- Soluzione
> Pesi: `1`·128 `0`·64 `1`·32 `1`·16 `0`·8 `1`·4 `1`·2 `0`·1.
> - **Naturale**: $128 + 32 + 16 + 4 + 2 = 182$.
> - **Modulo e segno**: MSB 1, quindi negativo; modulo `0110110` $= 32 + 16 + 4 + 2 = 54$. Vale $-54$.
> - **CA2**: MSB 1, quindi naturale meno $2^8$: $182 - 256 = -74$. Con il peso negativo: $-128 + 32 + 16 + 4 + 2 = -74$.
>
> Controllo del CA2 invertendo: `10110110` invertito è `01001001`, più 1 è `01001010` $= 64 + 8 + 2 = 74$, quindi il numero era $-74$.

**Esercizio 5.** Calcola $23 - 45$ in complemento a 2 su 8 bit e verifica il risultato.

> [!example]- Soluzione
> Sottrazione in CA2: si somma $23 + (-45)$. Entrambi sono nell'intervallo $[-128, 127]$.
>
> 1. $23 = 16 + 4 + 2 + 1$ = `00010111`.
> 2. $45$ = `00101101`; invertito `11010010`; più 1: `11010011` $= -45$. Controllo: $-128 + 64 + 16 + 2 + 1 = -45$.
> 3. Somma:
>
> | bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | riporto | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
> | $23$ | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 |
> | $-45$ | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 1 |
> | somma | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 0 |
>
> 4. Risultato `11101010`: MSB 1, negativo. $-128 + 64 + 32 + 8 + 2 = -22$. Infatti $23 - 45 = -22$.
>
> Segni diversi: l'overflow è impossibile.

**Esercizio 6.** Calcola $100 + 50$ in CA2 su 8 bit. Il risultato è corretto?

> [!example]- Soluzione
> $100$ = `01100100`, $50$ = `00110010`. Somma in colonna: `10010110`.
>
> Letto in CA2: MSB 1, $-128 + 16 + 4 + 2 = -106$. Due positivi hanno dato un negativo: è **overflow**. Il risultato vero, 150, è fuori dall'intervallo $[-128, 127]$ degli 8 bit con segno. Letto come naturale `10010110` vale proprio 150: gli stessi bit sono giusti senza segno e sbagliati con segno. Sulla ruota del CA2 la somma ha attraversato la linea fra $+127$ e $-128$.

**Esercizio 7.** Quanti bit servono per rappresentare 300 valori diversi? E 654? Quanti per tutti gli interi da $-200$ a $200$ in CA2?

> [!example]- Soluzione
> Serve il più piccolo $N$ con $2^N \geq K$.
> - 300: $2^8 = 256 < 300 \leq 512 = 2^9$, quindi **9 bit**.
> - 654: $2^9 = 512 < 654 \leq 1024 = 2^{10}$, quindi **10 bit**.
> - Da $-200$ a $200$ in CA2: con $N$ bit l'intervallo è $[-2^{N-1}, 2^{N-1} - 1]$. Serve $2^{N-1} - 1 \geq 200$, cioè $2^{N-1} \geq 201$: $2^7 = 128$ non basta, $2^8 = 256$ sì, quindi $N - 1 = 8$ e **9 bit** (intervallo $[-256, 255]$).

**Esercizio 8.** Scrivi in virgola fissa con 6 bit di parte intera e 3 di parte frazionaria il numero $45.625$.

> [!example]- Soluzione
> Parte intera e parte frazionaria si convertono separatamente.
> - $45 = 101101_2$ (Esercizio 1), che occupa esattamente 6 bit.
> - $0.625$: si moltiplica per 2 e si prende la parte intera, ripetendo sulla parte frazionaria (è l'algoritmo dei resti "al contrario"):
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

**Esercizio 9.** (Livello 30) Un byte vale `C8` in esadecimale. Quanto vale se è un `unsigned char`? E se è un intero in CA2 su 8 bit? Scrivi il secondo valore anche in ottale (con il segno).

> [!example]- Soluzione
> $C8_{16}$ = `1100 1000`.
> - Senza segno: $12 \cdot 16 + 8 = 200$.
> - CA2: MSB 1, quindi $200 - 256 = -56$. Controllo con il peso negativo: $-128 + 64 + 8 = -56$.
> - $56$ in ottale: 56:8 = 7 r 0; 7:8 = 0 r 7, quindi $70_8$. Il valore è $-70_8$.
>
> Il punto dell'esercizio: lo stesso byte è 200 o $-56$ a seconda del tipo con cui lo dichiari (in C, `unsigned char` o `signed char`), come nell'esempio della slide 15 del deck 5.1.

**Esercizio 10.** (Livello 30) Codifica $+6.5$ nella virgola mobile semplificata del prof (1 bit di segno, 8 di esponente in CA2, 23 di mantissa letta come $0.m$).

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

---
title: Introduzione al corso e algoritmi (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-10
lezioni: []
ordine: 0
---

Esercizi tipo esame di [Introduzione al corso e algoritmi](/uni/prog-1/introduzione-al-corso-e-algoritmi/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

**Esercizio 1.** Scrivi in pseudocodice un algoritmo che legge numeri interi positivi finché non arriva 0 e stampa il più grande. Cosa stampa se il primo numero è 0?

> [!example]- Soluzione
> ```
> 1. leggi x
> 2. se x = 0, stampa "nessun numero" e termina
> 3. max ← x
> 4. leggi x
> 5. mentre x ≠ 0
>    5.1 se x > max, max ← x
>    5.2 leggi x
> 6. stampa max
> ```
> Il passo 2 gestisce il caso limite: senza, si stamperebbe 0 come massimo di una sequenza vuota. `max` parte dal primo numero letto e non da 0, così l'algoritmo funzionerebbe anche con numeri negativi. In C è lo schema della sentinella di [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).

**Esercizio 2.** Uno schedario ordinato ha 1 000 000 di schede. Quanti confronti fa al massimo la ricerca sequenziale? E la dicotomica?

> [!example]- Soluzione
> Sequenziale: fino a 1 000 000, se il libro è l'ultimo o non c'è.
> Dicotomica: ogni confronto dimezza le schede rimaste, quindi serve il più piccolo $k$ con $2^k \geq 1\,000\,000$. $2^{20} = 1\,048\,576$, quindi al massimo 20 confronti.

**Esercizio 3.** Questo algoritmo termina? Perché?
```
1. x ← 10
2. mentre x ≠ 0
   2.1 x ← x − 3
3. stampa x
```

> [!example]- Soluzione
> No. $x$ vale 10, 7, 4, 1, −2, −5, … e salta lo 0. La condizione giusta è "mentre $x > 0$", che ferma il ciclo a −2. Ogni ciclo deve avere una condizione che prima o poi diventa falsa **per davvero**, non solo "in teoria".

**Esercizio 4.** In quanti modi si sale una scala di 4 gradini con passi da 1, 2 o 3? Elencali.

> [!example]- Soluzione
> 7 modi: `1+1+1+1`, `1+1+2`, `1+2+1`, `2+1+1`, `2+2`, `1+3`, `3+1`. Il ragionamento generale, $S(4) = S(3) + S(2) + S(1) = 4 + 2 + 1$, e il programma sono in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/).

**Esercizio 5.** Tavoletta di cioccolato $h \times k$: ogni spezzamento divide un pezzo in due lungo una riga. Quanti spezzamenti servono per avere tutti i quadratini separati? La strategia conta?

> [!example]- Soluzione
> Ogni spezzamento trasforma un pezzo in due, quindi aumenta il numero di pezzi di **esattamente** uno. Si parte da 1 pezzo e si arriva a $h \cdot k$: servono $h \cdot k - 1$ spezzamenti, con qualunque strategia. Per $3 \times 4$ sono 11.

**Esercizio 6.** Regola del 37% con 100 candidati: quanti ne guardi senza scegliere? Cosa fai se nessuno dei successivi è migliore di tutti quelli visti?

> [!example]- Soluzione
> I primi 37 (il 37% di 100), solo per costruire la classifica. Dal 38° scegli il primo migliore di tutti i precedenti. Se non arriva, arrivi all'ultimo e prendi il migliore della classifica.

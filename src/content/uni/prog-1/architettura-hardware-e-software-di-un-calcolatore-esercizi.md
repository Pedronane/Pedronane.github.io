---
title: Architettura hardware e software di un calcolatore (esercizi)
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: esercizi
stato: in corso
data: 2026-09-11
lezioni: []
ordine: 1
---

Esercizi tipo esame di [Architettura hardware e software di un calcolatore](/uni/prog-1/architettura-hardware-e-software-di-un-calcolatore/), dove stanno teoria, metodo ed esempi svolti a lezione. Testo in chiaro, soluzione chiusa: prima provaci da solo.

Dal più facile al livello del 30. Nella teorica questi argomenti escono come SI/NO e come domanda aperta a parole; i conti su memorie e dischi servono a rispondere con un numero invece che a sensazione.

**Esercizio 1.** SI o NO?

- a) La RAM conserva i dati anche a computer spento.
- b) La cache è più veloce della memoria centrale.
- c) Il PC contiene l'istruzione in esecuzione.
- d) Il bus dati trasporta gli indirizzi delle celle.
- e) Con la gestione a interrupt la CPU aspetta in un ciclo che la periferica sia pronta.
- f) Un hard disk è una memoria ad accesso sequenziale.

> [!example]- Soluzione
> - a) NO, è volatile.
> - b) SI (SRAM, vicino alla CPU).
> - c) NO, contiene l'**indirizzo** della prossima istruzione; quella in esecuzione sta nel CIR.
> - d) NO, gli indirizzi viaggiano sul bus indirizzi.
> - e) NO, quello è il polling; con l'interrupt la CPU fa altro finché la periferica non la avvisa.
> - f) NO, è ad accesso casuale (diretto): il nastro è sequenziale.

**Esercizio 2.** Per ogni compito di' quale registro o unità della CPU lo svolge.

- a) Contiene l'indirizzo della cella da leggere.
- b) Fa la somma di due operandi.
- c) Dice se l'ultimo risultato era zero.
- d) Contiene l'istruzione appena prelevata.
- e) Decide quale segnale di controllo mandare.
- f) Segnala che una periferica chiede attenzione.

> [!example]- Soluzione
> - a) AR, il registro indirizzi.
> - b) ALU, con gli operandi nei registri A e B.
> - c) SR, il registro di stato, con il flag Z.
> - d) CIR, il registro istruzione corrente.
> - e) CU, l'unità di controllo.
> - f) INTR, il registro interruzioni.
>
> Controllo con la regola della teoria: AR e DR sono la porta verso il bus, PC e CIR dicono quale istruzione, A, B e ALU fanno il conto, SR dice com'è andato.

**Esercizio 3.** Una macchina ha indirizzi di 16 bit e parole di 32 bit. Quante celle può indirizzare? Quanti byte di memoria sono al massimo?

> [!example]- Soluzione
> $2^{16} = 65\,536$ celle. Ogni cella è una parola da 32 bit, cioè 4 byte: $65\,536 \cdot 4 = 262\,144$ byte $= 256$ KiB.
>
> Controllo: $262\,144 / 1024 = 256$.

**Esercizio 4.** Quanti bit di indirizzo servono per 1000 celle? E per una memoria di 4 GiB in cui ogni byte ha il suo indirizzo?

> [!example]- Soluzione
> Serve il più piccolo $k$ con $2^k \geq 1000$: $2^9 = 512$ non basta, $2^{10} = 1024$ sì, quindi 10 bit.
> 4 GiB sono $4 \cdot 2^{30} = 2^2 \cdot 2^{30} = 2^{32}$ byte: 32 bit.
>
> Controllo: è il motivo per cui un processore con indirizzi a 32 bit non può usare più di 4 GiB di RAM.

**Esercizio 5.** Conversioni. Quanti bit sono 1 GB (convenzione delle slide)? Una memoria ha $2^{20}$ celle da 8 bit: quanti MB sono? Una ha $2^{24}$ celle da 16 bit: quanti MB?

> [!example]- Soluzione
> - 1 GB $= 2^{30}$ byte, per 8 $= 2^{30} \cdot 2^3 = 2^{33} = 8\,589\,934\,592$ bit.
> - $2^{20}$ celle da 8 bit $= 2^{20}$ byte $= 1$ MB.
> - $2^{24}$ celle da 16 bit $= 2^{24} \cdot 2$ byte $= 2^{25}$ byte $= 2^5 \cdot 2^{20}$ byte $= 32$ MB.
>
> Controllo sull'ultima: $2^{25} = 33\,554\,432$ byte, diviso $2^{20} = 1\,048\,576$ dà 32.

**Esercizio 6.** Descrivi i passi con cui la CPU scrive il valore 70 nella variabile $c$, che sta all'indirizzo 321. Quali registri e quali linee del bus usa?

> [!example]- Soluzione
> 1. La CU mette 321 nel registro AR, che lo porta sul **bus indirizzi**.
> 2. Mette 70 nel registro DR, che lo porta sul **bus dati**.
> 3. Manda **WRITE** sul **bus di controllo**.
> 4. La memoria scrive 70 nella cella 321 e risponde OK sul bus di controllo.
>
> È la lettura al contrario: il dato va da DR alla memoria invece che dalla memoria a DR.

**Esercizio 7.** Il PC vale 200 e nella cella 200 c'è l'istruzione `ADD`. Scrivi il contenuto di PC, AR, DR e CIR dopo ognuno dei quattro passi del fetch e dopo l'incremento finale.

> [!example]- Soluzione
> Si riconosce il fetch della slide 26: quattro passi fissi, poi decode ed execute, poi PC + 1.
>
> | passo | PC | AR | DR | CIR |
> | --- | --- | --- | --- | --- |
> | 1. PC → AR | 200 | 200 | | |
> | 2. READ alla memoria | 200 | 200 | | |
> | 3. la parola arriva in DR (MFC) | 200 | 200 | `ADD` | |
> | 4. DR → CIR | 200 | 200 | `ADD` | `ADD` |
> | decode ed execute di `ADD` | 200 | 200 | `ADD` | `ADD` |
> | PC + 1 | 201 | 200 | `ADD` | `ADD` |
>
> Il PC cambia solo alla fine, nella convenzione della slide. L'errore da evitare è scrivere `ADD` nel PC: il PC contiene sempre un indirizzo.

**Esercizio 8.** Un disco gira a 5400 giri/min e ha tempo di posizionamento medio 9 ms. Stima il tempo medio di accesso a un settore, trascurando il trasferimento.

> [!example]- Soluzione
> Giri al secondo: $5400 / 60 = 90$. Un giro: $1/90$ s $\approx 11{,}1$ ms. Latenza media, mezzo giro: $\approx 5{,}6$ ms.
> $ST + LT \approx 9 + 5{,}6 = 14{,}6$ ms. Per confronto un SSD si posiziona in circa 0,1 ms.

**Esercizio 9.** Un disco a 7200 giri/min ha posizionamento medio 6 ms e trasferisce 100 MB/s. Calcola il tempo medio di accesso a un blocco di 4 KB, senza trascurare TT. Quanto cambierebbe con un disco a 15 000 giri/min?

> [!example]- Soluzione
> Si applica $ST + LT + TT$, un termine per volta.
> - $ST = 6$ ms.
> - Giri al secondo $7200 / 60 = 120$, un giro $1000 / 120 \approx 8{,}33$ ms, $LT = 8{,}33 / 2 \approx 4{,}17$ ms.
> - $TT = \frac{4096 \text{ byte}}{100 \cdot 2^{20} \text{ byte/s}} \approx 0{,}000039$ s $\approx 0{,}04$ ms.
> - Totale $\approx 6 + 4{,}17 + 0{,}04 = 10{,}21$ ms.
>
> A 15 000 giri/min: $15\,000 / 60 = 250$ giri al secondo, un giro $1000 / 250 = 4$ ms, $LT = 2$ ms. Il totale scende a circa $6 + 2 + 0{,}04 \approx 8{,}04$ ms: la rotazione più veloce aiuta, ma il posizionamento resta il termine più grosso. Controllo: TT è circa l'1% di ST, quindi trascurarlo (come dice la slide) cambia poco.

**Esercizio 10.** Una CPU a 2 GHz legge da una periferica il cui dato è pronto dopo 2 ms. A polling, ogni controllo del registro di stato costa 10 cicli di clock. Quanti controlli a vuoto fa? Cosa cambia con l'interrupt?

> [!example]- Soluzione
> In 2 ms passano $2 \cdot 10^9 \cdot 0{,}002 = 4 \cdot 10^6$ cicli. Con 10 cicli a controllo, sono $4 \cdot 10^6 / 10 = 400\,000$ controlli, tutti a vuoto tranne l'ultimo.
>
> Con l'interrupt la CPU manda il comando e per quei 4 milioni di cicli esegue altro. Quando il dato è pronto la periferica solleva l'interrupt, la CPU salva lo stato, esegue la routine di gestione e riprende. Il costo è il salvataggio e ripristino dello stato, un lavoro di ordini di grandezza più piccolo dei 4 milioni di cicli sprecati. È il "contro" del polling della slide 47: il processore resta sospeso nel ciclo di attesa.

**Esercizio 11.** Domanda aperta, come all'esame: "Descrivi il bus di sistema." Poi: "Che differenza c'è fra memoria centrale, memoria di massa, ROM e cache?"

> [!example]- Soluzione
> Si risponde col metodo della teoria: definizione, parti, esempio.
>
> **Bus di sistema.** È l'insieme di linee che collega CPU, memoria centrale, memoria di massa e periferiche nella macchina di Von Neumann. In ogni istante collega due unità, una che trasmette e una che riceve; è la CPU a scegliere il collegamento e l'operazione (bus mastering, master/slave). Ha tre gruppi di linee: il **bus indirizzi** porta l'indirizzo della cella o del dispositivo, il **bus dati** porta il dato, il **bus di controllo** porta il comando (READ, WRITE) e la temporizzazione (OK, MFC). Esempio: per leggere la cella 123 la CPU mette 123 sul bus indirizzi, READ sul bus di controllo, e la memoria risponde con il valore sul bus dati.
>
> **Le quattro memorie.**
>
> | | memoria centrale | memoria di massa | ROM | cache |
> | --- | --- | --- | --- | --- |
> | cosa contiene | dati e istruzioni dei programmi in esecuzione | dati e programmi da conservare | programma di avvio (firmware) | copia dei dati usati più spesso |
> | volatile | sì (RAM) | no | no | sì |
> | velocità | media | lenta (HDD ms, SSD 0,1 ms) | come la RAM | molto veloce |
> | capacità | GB | centinaia di GB e oltre | piccola | KB-MB |
> | tecnologia | DRAM | magnetica, ottica, stato solido | sola lettura | SRAM |

**Esercizio 12.** Livello 30. La macchina giocattolo della teoria ha in memoria:

```
indirizzo   contenuto
   10       LOAD A, 100
   11       LOAD B, 101
   12       SUB              A ← A − B
   13       STORE A, 102
  100       9
  101       9
  102       ?
```

All'inizio PC = 10. Scrivi, dopo ogni istruzione completata (incremento del PC compreso), PC, A, B e la cella 102. Quanti accessi alla memoria fa il programma in tutto? Quale flag del registro di stato si accende dopo `SUB`? A cosa servirebbe?

> [!example]- Soluzione
> Ogni istruzione ha il suo fetch (un accesso), poi le `LOAD` leggono un dato (un accesso), la `STORE` ne scrive uno (un accesso), la `SUB` lavora solo sui registri.
>
> | dopo l'istruzione | fetch dalla cella | accessi di questa istruzione | PC | A | B | cella 102 |
> | --- | --- | --- | --- | --- | --- | --- |
> | inizio | | | 10 | | | ? |
> | `LOAD A, 100` | 10 | fetch + lettura di 100 = 2 | 11 | 9 | | ? |
> | `LOAD B, 101` | 11 | fetch + lettura di 101 = 2 | 12 | 9 | 9 | ? |
> | `SUB` | 12 | solo fetch = 1 | 13 | 0 | 9 | ? |
> | `STORE A, 102` | 13 | fetch + scrittura in 102 = 2 | 14 | 0 | 9 | 0 |
>
> Accessi totali: $2 + 2 + 1 + 2 = 7$, di cui 4 fetch. Dopo `SUB` il risultato è $9 - 9 = 0$ e si accende il flag **Z** (zero) del registro SR. Servirebbe a un'istruzione di salto condizionato, "salta se Z è acceso": è così che la CPU esegue un `if (a == b)`, sottraendo e guardando Z.
>
> Controllo: alla fine il PC vale 14, cioè l'indirizzo dopo l'ultima istruzione, e la cella 102 contiene $a - b = 0$.

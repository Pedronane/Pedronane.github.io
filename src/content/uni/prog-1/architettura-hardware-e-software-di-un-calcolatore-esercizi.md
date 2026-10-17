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

**Esercizio 1.** Una macchina ha indirizzi di 16 bit e parole di 32 bit. Quante celle può indirizzare? Quanti byte di memoria sono al massimo?

> [!example]- Soluzione
> $2^{16} = 65\,536$ celle. Ogni cella è una parola da 32 bit, cioè 4 byte: $65\,536 \cdot 4 = 262\,144$ byte $= 256$ KiB.

**Esercizio 2.** Quanti bit di indirizzo servono per 1000 celle? E per una memoria di 4 GiB in cui ogni byte ha il suo indirizzo?

> [!example]- Soluzione
> Serve il più piccolo $k$ con $2^k \geq 1000$: $2^9 = 512$ non basta, $2^{10} = 1024$ sì, quindi 10 bit.
> 4 GiB sono $4 \cdot 2^{30} = 2^{32}$ byte: 32 bit.

**Esercizio 3.** Un disco gira a 5400 giri/min e ha tempo di posizionamento medio 9 ms. Stima il tempo medio di accesso a un settore, trascurando il trasferimento.

> [!example]- Soluzione
> Giri al secondo: $5400 / 60 = 90$. Un giro: $1/90$ s $\approx 11{,}1$ ms. Latenza media, mezzo giro: $\approx 5{,}6$ ms.
> $ST + LT \approx 9 + 5{,}6 = 14{,}6$ ms. Per confronto un SSD si posiziona in circa 0,1 ms.

**Esercizio 4.** Descrivi i passi con cui la CPU scrive il valore 70 nella variabile $c$, che sta all'indirizzo 321. Quali registri e quali linee del bus usa?

> [!example]- Soluzione
> 1. La CU mette 321 nel registro AR, che lo porta sul **bus indirizzi**.
> 2. Mette 70 nel registro DR, che lo porta sul **bus dati**.
> 3. Manda **WRITE** sul **bus di controllo**.
> 4. La memoria scrive 70 nella cella 321 e risponde OK sul bus di controllo.
> È la lettura al contrario: il dato va da DR alla memoria invece che dalla memoria a DR.

**Esercizio 5.** SI o NO?
1. La RAM conserva i dati anche a computer spento.
2. La cache è più veloce della memoria centrale.
3. Il PC contiene l'istruzione in esecuzione.
4. Il bus dati trasporta gli indirizzi delle celle.
5. Con la gestione a interrupt la CPU aspetta in un ciclo che la periferica sia pronta.
6. Un hard disk è una memoria ad accesso sequenziale.

> [!example]- Soluzione
> 1. NO, è volatile. 2. SI (SRAM, vicino alla CPU). 3. NO, contiene l'**indirizzo** della prossima istruzione; quella in esecuzione sta nel CIR. 4. NO, gli indirizzi viaggiano sul bus indirizzi. 5. NO, quello è il polling; con l'interrupt la CPU fa altro finché la periferica non la avvisa. 6. NO, è ad accesso casuale (diretto): il nastro è sequenziale.

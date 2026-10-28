---
title: Geometria e Algebra Lineare
materia: gal
materiaNome: Geometria e Algebra Lineare
materiaBreve: GAL
cfu: 6
hub: true
tipo: hub
stato: null
data: null
lezioni: []
ordine: 999
---

Le lezioni si prendono a mano su Noteful (iPad); la prof pubblica i suoi appunti scritti a mano, che sono la fonte principale. Le note qui le scrive Claude da appunti della prof, quaderno, esercitazioni del tutor e dispensa: definizioni con le parole della prof, enunciati con dimostrazione, metodo, tutti gli esempi svolti a lezione, esercizi tipo esame e domande per l'interrogazione. Una nota per argomento, mai per data. Prefisso delle note: `GAL - `.

## Esame

Dagli appunti della prof, <span class="src">p. 1</span>:

- **Scritto obbligatorio**, in due modi:
  - **due prove parziali**. Per restare nel percorso a parziali serve **almeno 15/30 al primo parziale**; la seconda prova intermedia si tiene insieme agli appelli invernali;
  - oppure l'**esame intero** agli appelli invernali.
- **Orale facoltativo**: ci si accede con **almeno 18/30 allo scritto**.

### Prova intermedia, gio 5/11/2026

Dall'avviso Moodle della prof del 28/9 e dal <span class="src">piano delle lezioni</span> (l'avviso scrive "2025", è un refuso: il resto dice 2026):

- **giovedì 5 novembre 2026, ore 15:30**, Povo 1, aule **A104-A106**, **90 minuti**;
- **programma**: dall'inizio del corso fino al capitolo 4 (spazi vettoriali) compreso;
- **niente appunti né calcolatrici**;
- **iscrizione su Esse3** ("prova parziale") **entro il 2/11/2026**;
- con **almeno 15/30** si è ammessi alla seconda prova intermedia, che si tiene insieme agli appelli invernali.

### Provette passate e simulazioni

Le provette della prof, con soluzioni, da Moodle ("Esami anni precedenti e soluzioni"): <span class="src">2024</span> (<span class="src">soluzioni</span>), <span class="src">2023</span> (<span class="src">soluzioni</span>), <span class="src">2022</span> (<span class="src">soluzioni</span>), <span class="src">2021</span> (<span class="src">soluzioni</span>). Dal 2022 la forma è fissa: due esercizi da 6 punti (uno di geometria nello spazio, uno con parametro su sistema o vettori di $\mathbb{R}^4$) e due domande di teoria da 1,5 (Rouché-Capelli con un esempio esce tutti gli anni), punteggio in quindicesimi. Nel 2021 c'era anche una parte a crocette.

Ripasso di tutto il programma del parziale (capitoli 1-4) in una pagina, con metodi, trappole, crocette e le domande di teoria tipiche: [Ripasso provetta](/uni/gal/ripasso-provetta/). In fondo ci sono anche determinante e dimensione (capitoli 5 e 6), segnati come "non si sa se entrano".

Simulazioni sullo stesso modello, a tempo e con correzione: [Simulazione provetta 1](/uni/simulazioni/gal/simulazione-provetta-1/), [Simulazione provetta 2](/uni/simulazioni/gal/simulazione-provetta-2/), [Simulazione provetta 3](/uni/simulazioni/gal/simulazione-provetta-3/), [Simulazione provetta 4](/uni/simulazioni/gal/simulazione-provetta-4/).

### Come si prende 30

- **Sapere cosa copre il primo parziale.** Tutto fino agli spazi vettoriali compreso: geometria nello spazio, sistemi lineari con Gauss-Jordan e Rouché-Capelli, matrici e invertibilità, spazi vettoriali, dipendenza lineare e basi. Nel piano delle lezioni prima del 5/11 ci sono anche determinante (L9-L10, capitolo 5), l'inizio del capitolo 6 sulle basi (seconda parte della L10) e altre due lezioni sulle basi (L11-L12): se entrino nel parziale l'avviso del 28/9 non lo dice, e l'esercitazione su questi argomenti è il 9/11, dopo la prova.
- **Teoria del tipo 1.1-1.8 del foglio 1, enunciata e dimostrata.** Definizione con le parole della prof, poi la dimostrazione quando c'è: proiezione nei casi acuto e ottuso, prodotto scalare in coordinate, modulo con Pitagora, distributiva in coordinate, fascio che contiene $r$, formula punto-piano. Le domande di ogni nota servono a questo.
- **Ogni esercizio chiuso con una verifica.** Il punto trovato si sostituisce in tutte le equazioni; il piano deve contenere i punti che deve contenere; la direzione ortogonale rifà i due prodotti scalari. Costa trenta secondi e trova quasi tutti gli errori di segno.
- **Le trappole ricorrenti, a memoria.** Distanze: valore assoluto e radice al denominatore; "piani a distanza data" ha due soluzioni. Retta e piano: $\vec{n} \cdot \vec{v} = 0$ vuol dire parallela **o contenuta**. Due rette: parametri diversi, e ortogonalità separata da incidenza.
- **Matrici e spazi vettoriali, le domande fisse.** Inversa sempre verificata con $AA^{-1} = I$ (nel quaderno degli esercizi due inverse su cinque avevano un errore che la verifica avrebbe trovato). Parametro: si divide solo per pivot senza $k$, i valori critici si studiano a parte. Sottospazio: primo controllo $\vec{0} \in U$, poi la (C) con vettori generici per dire sì, oppure un controesempio con numeri per dire no. Generatori di $\mathbb{R}^n$: vettori come colonne, rango uguale a $n$; indipendenza: rango uguale a $k$, il numero di vettori; base: tutte e due, quindi $k = n$.
- **Metodo della prof, non scorciatoie.** Fascio per i piani che contengono una retta, punto generico o piano ausiliario per le distanze, parametriche ponendo una variabile uguale a $t$. Il prodotto vettoriale è arrivato solo con il capitolo 5 (L9, 26/10), fuori dal "fino al capitolo 4" dell'avviso: negli esercizi di geometria del parziale conviene il metodo del capitolo 1.
- **Allenamento a tempo.** Prima prova completa in 90 minuti con il foglio 1 e gli esercizi tipo esame delle note, senza guardare le soluzioni. Chi arriva al parziale senza aver mai fatto un'ora e mezza di fila sbaglia i conti finali per stanchezza.
- **Orale solo se conviene.** È facoltativo e richiede almeno 18 allo scritto: ha senso per alzare un voto, non per recuperarlo.

## Programma svolto

Date e titoli dal <span class="src">piano delle lezioni</span> della prof.

| lezione | data | argomento | appunti della prof | nota |
| --- | --- | --- | --- | --- |
| L1 | lun 14/9 | esame; segmenti orientati, vettori geometrici, somma, prodotto per scalare, versore e normalizzazione, prodotto scalare, proiezione ortogonale | <span class="src">p. 1-7</span> | [Vettori geometrici](/uni/gal/vettori-geometrici/) |
| L2 | mar 15/9 | vettori in coordinate, modulo; equazioni cartesiane e parametriche di piani e rette; fascio di piani | <span class="src">p. 8-15</span> | [Vettori geometrici](/uni/gal/vettori-geometrici/), [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/) |
| L3 (3 ore) | lun 21/9 | posizioni reciproche di rette e piani; rette complanari; distanze punto-punto, punto-piano, punto-retta, retta-retta | <span class="src">p. 16-27</span> | [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/), [Distanze nello spazio](/uni/gal/distanze-nello-spazio/) |
| L3, ultima parte | lun 21/9 | sistemi lineari: $\mathbb{R}^n$, notazione, compatibilità, matrici associate fino a $[A \mid \vec{b}]$ | <span class="src">p. 1-3</span> | [Sistemi lineari](/uni/gal/sistemi-lineari/) |
| esercitazione 1 (tutor Lejdi Lusha) | mar 22/9 | retta per due punti, rette complanari col fascio, retta e piano, retta ortogonale e incidente, tre piani, distanza punto-retta | <span class="src">es. 1-6</span> | esempi dentro le note di geometria |
| L4 (3 ore) | lun 28/9 | operazioni elementari, matrice a scalini, pivot, algoritmo di Gauss-Jordan, forma ridotta per righe, riduzione all'indietro; rango; teorema di Rouché-Capelli; sistema con parametro; da cartesiane a parametriche | <span class="src">p. 3-14</span> | [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/), [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/) |
| esercitazione 2 (tutor Lejdi Lusha) | mar 29/9 | sistemi lineari: soluzione unica, omogeneo con infinite soluzioni, due sistemi con parametro | <span class="src">es. 1-4</span> | esempi dentro le note di Gauss-Jordan e rango |
| L5 (3 ore) | lun 5/10 | matrici: casi particolari, trasposta, simmetrica, nulla, identità; somma, prodotto per scalare, combinazione lineare, prodotto righe per colonne e proprietà, $AB \neq BA$; sistema in forma $A\vec{x} = \vec{b}$, nucleo, nullità, $\operatorname{null}(A) + \operatorname{rg}(A) = n$, soluzioni $\vec{x}_0 + N(A)$ | <span class="src">p. 1-12</span>; quaderno p. 48-59 | [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/) |
| L6 | mar 6/10 | matrici delle operazioni elementari, $\operatorname{rref}(A) = PA$; matrici invertibili, $(AB)^{-1} = B^{-1}A^{-1}$; teorema: $A$ invertibile se e solo se $\operatorname{rg}(A) = n$ (★★★); calcolo dell'inversa con Gauss-Jordan su $[A \vert I_n]$; non-esempio; $\vec{x} = A^{-1}\vec{b}$; esercizio con parametro | <span class="src">p. 13-20</span>; quaderno p. 60-67 | [Matrici invertibili](/uni/gal/matrici-invertibili/) |
| esercitazione 3 (la prof) | lun 12/10 | riepilogo matrici; fine dell'esercizio con parametro della L6 ($A_0^{-1}$, $A_0\vec{x} = \vec{b}$); esercizi 1, 2, 3 e 6 del foglio extra: inversa, $AB^{-1}C$, invertibilità con parametro, chiusura delle soluzioni, sistema con l'inversa | <span class="src">p. 1-9</span>, <span class="src">foglio extra</span>; quaderno p. 68 | [Matrici invertibili](/uni/gal/matrici-invertibili/), [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/), [Esercizi extra matrici svolti](/uni/gal/esercizi-extra-matrici-svolti/) |
| L7 | mar 13/10 | capitolo 4: spazio vettoriale reale, $\mathbb{R}^n$, combinazioni lineari in forma matriciale; sottospazi, esempi e non-esempi; sottospazio generato $\mathrm{Span}$, spazio finitamente generato, sistema di generatori, criterio col rango; spazio delle righe e delle colonne | <span class="src">p. 1-9</span>; quaderno p. 69-71 (arriva al titolo "Generatori") | [Spazi vettoriali](/uni/gal/spazi-vettoriali/), [Generatori](/uni/gal/generatori/) |
| L8 (3 ore) | lun 19/10 | sistemi lineari omogenei e sottospazi: ogni $\mathrm{Span}$ di $\mathbb{R}^n$ come insieme delle soluzioni di un sistema omogeneo, esempio in $\mathbb{R}^4$; altri spazi vettoriali $V^3$, $M_{m,n}(\mathbb{R})$, $\mathbb{R}[x]$ (non finitamente generato), $\mathbb{R}[x]_d$, $\mathcal{C}(\mathbb{R})$; sottospazi di $M_2(\mathbb{R})$ e di $\mathbb{R}[x]$; dipendenza e indipendenza lineare, osservazione, proposizione (b) col rango, relazione dalla rref, esercizio in $\mathbb{R}^5$ con parametro; basi, unicità della scrittura, basi standard, proposizioni (a), (b), (c) | <span class="src">p. 10-23</span> (il segno "L8 (3 ore)" è a p. 10); quaderno di Pietro assente | [Generatori](/uni/gal/generatori/), [Spazi vettoriali](/uni/gal/spazi-vettoriali/), [Dipendenza lineare](/uni/gal/dipendenza-lineare/), [Basi](/uni/gal/basi/) |
| esercitazione 4 (tutor) | mar 20/10 | spazi vettoriali in $\mathbb{R}^n$: promemoria sui criteri col rango (generatori, indipendenza, base); l'esercizio in $\mathbb{R}^5$ con parametro della L8 (indipendenza ed equazioni dello Span); esercizi 1, 2 e 4 del foglio extra: dipendenza e combinazione lineare, generatori con parametro ed equazioni dello Span, base di $\mathbb{R}^4$ con parametro | <span class="src">p. 1-6</span>, <span class="src">foglio extra</span> | [Dipendenza lineare](/uni/gal/dipendenza-lineare/), [Generatori](/uni/gal/generatori/), [Basi](/uni/gal/basi/), [Esercizi extra spazi vettoriali svolti](/uni/gal/esercizi-extra-spazi-vettoriali-svolti/) |
| L9 | lun 26/10 | capitolo 5: matrice $A_{ij}$, definizione di determinante (sviluppo sulla prima colonna), esempi $2 \times 2$ e $3 \times 3$, triangolari superiori, sviluppo di Laplace, riga nulla, $\det(A^T) = \det(A)$, Binet e $\det(A^{-1})$, determinante delle matrici elementari e calcolo con Gauss; $\det A \neq 0 \iff \operatorname{rg}(A) = n \iff A$ invertibile, basi di $\mathbb{R}^n$ col determinante; Cramer; definizione di prodotto vettoriale, area del parallelogramma | <span class="src">p. 1-9</span> | [Determinante](/uni/gal/determinante/) |
| L10, prima parte | mar 27/10 | proprietà del prodotto vettoriale, versori e formula in coordinate, area di un triangolo; prodotto misto e volume del parallelepipedo; rette complanari e piano per tre punti col determinante | <span class="src">p. 10-15</span> | [Determinante](/uni/gal/determinante/) |
| L10, seconda parte | mar 27/10 | capitolo 6: esistenza di una base e scrittura unica, procedimento 1 (estrazione di una base da un insieme di generatori), teorema di completamento, dimensione | <span class="src">p. 1-4</span> | [Dimensione](/uni/gal/dimensione/) |

## Argomenti

Il programma della prof (<span class="src">appunti p. 1</span>):

**Geometria**
- Vettori nello spazio: [Vettori geometrici](/uni/gal/vettori-geometrici/)
- Rette e piani nello spazio: [Rette e piani nello spazio](/uni/gal/rette-e-piani-nello-spazio/), [Posizioni reciproche nello spazio](/uni/gal/posizioni-reciproche-nello-spazio/), [Distanze nello spazio](/uni/gal/distanze-nello-spazio/)

**Algebra lineare**
- Sistemi lineari: [Sistemi lineari](/uni/gal/sistemi-lineari/), [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/), [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/)
- Matrici: [Matrici e operazioni](/uni/gal/matrici-e-operazioni/), [Nucleo e struttura delle soluzioni](/uni/gal/nucleo-e-struttura-delle-soluzioni/), [Matrici invertibili](/uni/gal/matrici-invertibili/), [Determinante](/uni/gal/determinante/)
- Spazi vettoriali: [Spazi vettoriali](/uni/gal/spazi-vettoriali/), [Generatori](/uni/gal/generatori/), [Dipendenza lineare](/uni/gal/dipendenza-lineare/), [Basi](/uni/gal/basi/), [Dimensione](/uni/gal/dimensione/)
- Funzioni lineari

Le voci senza link non sono ancora state fatte a lezione: diventano note quando partono.

## Esercizi

Fogli del tutorato svolti per intero: teoria ed esercizi col testo in chiaro, indizio e soluzione chiusi.

- [Foglio 1 svolto](/uni/gal/foglio-1-svolto/): teoria 1.1-1.8 ed esercizi 1.9-1.17, geometria nello spazio (<span class="src">PDF</span>).
- [Foglio 2 svolto](/uni/gal/foglio-2-svolto/): teoria 2.1-2.10 ed esercizi 2.11-2.16, sistemi lineari, rango, Rouché-Capelli (<span class="src">PDF</span>).
- [Foglio 3 svolto](/uni/gal/foglio-3-svolto/): teoria 3.1-3.6 ed esercizi 3.7-3.12, matrici, inversa, struttura delle soluzioni (<span class="src">PDF</span>, <span class="src">soluzioni ufficiali</span> del 3.11).
- [Foglio 4 svolto](/uni/gal/foglio-4-svolto/): teoria 4.1-4.11 ed esercizi 4.12-4.21, spazi vettoriali, sottospazi, generatori, indipendenza, basi (<span class="src">PDF</span>, <span class="src">soluzioni ufficiali</span> di 4.12, 4.15 e di un esercizio in più).
- [Foglio 5 svolto](/uni/gal/foglio-5-svolto/): teoria 5.1-5.6 ed esercizi 5.7-5.13, determinante, Binet, Cramer, inversa coi cofattori, prodotto vettoriale e misto (<span class="src">PDF</span>).
- [Esercizi extra matrici svolti](/uni/gal/esercizi-extra-matrici-svolti/): i sei esercizi del foglio "Esercizi - Matrici" della prof, quattro dei quali svolti all'esercitazione 3 (<span class="src">PDF</span>).
- [Esercizi extra spazi vettoriali svolti](/uni/gal/esercizi-extra-spazi-vettoriali-svolti/): i quattro esercizi del foglio "Esercizi - Lo spazio Rn" della prof, tre dei quali svolti all'esercitazione 4 (<span class="src">PDF</span>).

Esercitazioni del tutor:

- <span class="src">Esercitazione 1</span>: sei esercizi svolti, riportati per esteso nelle note di teoria.
- <span class="src">Esercitazione 2</span>: quattro esercizi sui sistemi, con il testo in chiaro e la soluzione chiusa in [Algoritmo di Gauss-Jordan](/uni/gal/algoritmo-di-gauss-jordan/) e [Rango e Rouché-Capelli](/uni/gal/rango-e-rouche-capelli/).
- <span class="src">Esercitazione 3</span> (12/10, tenuta dalla prof, non dal tutor: lo annuncia lei negli appunti della L6, p. 13, "lunedì prossimo: esercitazioni (con me)", e la grafia è la sua): matrici, svolta per intero in [Esercizi extra matrici svolti](/uni/gal/esercizi-extra-matrici-svolti/) e negli esempi di [Matrici invertibili](/uni/gal/matrici-invertibili/).
- <span class="src">Esercitazione 4</span> (mar 20/10, tutor): spazi vettoriali, svolta per intero negli esempi di [Dipendenza lineare](/uni/gal/dipendenza-lineare/), [Generatori](/uni/gal/generatori/) e [Basi](/uni/gal/basi/) e in [Esercizi extra spazi vettoriali svolti](/uni/gal/esercizi-extra-spazi-vettoriali-svolti/).

Altro:

- [Formulario rette e piani](/uni/gal/formulario-rette-e-piani/): tutte le formule della geometria nello spazio.
- Esercizi tipo esame, una pagina per argomento, separata dalla teoria, con soluzioni verificate:
  - [Vettori geometrici (esercizi)](/uni/gal/vettori-geometrici-esercizi/)
  - [Rette e piani nello spazio (esercizi)](/uni/gal/rette-e-piani-nello-spazio-esercizi/)
  - [Posizioni reciproche nello spazio (esercizi)](/uni/gal/posizioni-reciproche-nello-spazio-esercizi/)
  - [Distanze nello spazio (esercizi)](/uni/gal/distanze-nello-spazio-esercizi/)
  - [Sistemi lineari (esercizi)](/uni/gal/sistemi-lineari-esercizi/)
  - [Algoritmo di Gauss-Jordan (esercizi)](/uni/gal/algoritmo-di-gauss-jordan-esercizi/)
  - [Rango e Rouché-Capelli (esercizi)](/uni/gal/rango-e-rouche-capelli-esercizi/)
  - [Matrici e operazioni (esercizi)](/uni/gal/matrici-e-operazioni-esercizi/)
  - [Nucleo e struttura delle soluzioni (esercizi)](/uni/gal/nucleo-e-struttura-delle-soluzioni-esercizi/)
  - [Matrici invertibili (esercizi)](/uni/gal/matrici-invertibili-esercizi/)
  - [Spazi vettoriali (esercizi)](/uni/gal/spazi-vettoriali-esercizi/)
  - [Generatori (esercizi)](/uni/gal/generatori-esercizi/)
  - [Dipendenza lineare (esercizi)](/uni/gal/dipendenza-lineare-esercizi/)
  - [Basi (esercizi)](/uni/gal/basi-esercizi/)
  - [Determinante (esercizi)](/uni/gal/determinante-esercizi/)
  - [Dimensione (esercizi)](/uni/gal/dimensione-esercizi/)

## Risorse

- Appunti della prof: <span class="src">1, Geometria nello spazio</span> (27 pagine), <span class="src">2, Sistemi lineari</span> (14 pagine), <span class="src">3, Matrici</span> (20 pagine, L5 e L6), <span class="src">4, Spazi vettoriali</span> (23 pagine, L7 e L8), <span class="src">5, Determinante</span> (15 pagine, L9 e prima parte della L10), <span class="src">6, Basi</span> (4 pagine finora, seconda parte della L10).
- <span class="src">Esercitazione 1</span> ed <span class="src">esercitazione 2</span> del tutor Lejdi Lusha; <span class="src">esercitazione 3</span> della prof, con il foglio <span class="src">Esercizi - Matrici</span>. <span class="src">Esercitazione 4</span> del tutor, con il foglio <span class="src">Esercizi - Lo spazio Rn</span>.
- <span class="src">Piano delle lezioni</span>: date e argomenti di tutte le lezioni ed esercitazioni fino al 15/12.
- <span class="src">Dispensa Postinghel</span>: capitolo 1 geometria nello spazio, capitolo 2 sistemi lineari, capitolo 3 matrici (esempi in più per le note di L5-L6, che ora seguono gli appunti della prof). Contiene le dimostrazioni a cui la prof rimanda.
- Linguaggio matematico: definizione, enunciato, teorema, dimostrazione.

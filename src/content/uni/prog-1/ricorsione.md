---
title: Ricorsione
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
ordine: 19
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 8.1 intero: <span class="src">slide 1-122</span>. Prima: [Funzioni](/uni/prog-1/funzioni/), dove ci sono la chiamata, i parametri per valore e per indirizzo e la pila dei record di attivazione. La versione con il ciclo della scala a passi da 1, 2 o 3 è in [Ciclo while ed esempi › La scala a passi da 1, 2 o 3](/uni/prog-1/ciclo-while-ed-esempi/#la-scala-a-passi-da-1-2-o-3).

> [!abstract] Per l'esame
> - **Saper enunciare**: cos'è una formulazione ricorsiva (induttiva), caso base e caso induttivo con le parole del prof, ricorsione diretta e indiretta, cos'è un record di attivazione e perché per eseguire la ricorsione serve una pila, perché la ricorsione di Fibonacci è esponenziale e come la memoization la rende lineare.
> - **Saper fare**: tracciare "cosa stampa" una funzione ricorsiva con le stampe prima e dopo la chiamata, disegnando la pila chiamata per chiamata o l'albero delle chiamate; contare le chiamate e le operazioni; scrivere una funzione ricorsiva breve su numeri (fattoriale, potenza, prodotto, MCD, cifre), su array e su stringhe; trovare il caso base mancante.
> - **Dove esce**: nella teorica i tracing ricorsivi sono fra le domande "scrivi l'output esatto" degli ultimi anni (`boh(681)`, `charRev`, `process`), la ricorsione semplice da scrivere (prodotto e potenza) è uscita due volte, e la seconda parte del corso usa la ricorsione su alberi binari e nelle ricorrenze della complessità (vedi [Esami passati](/uni/prog-1/esami-passati/)). Se il corso ripete le prove intermedie degli anni scorsi, la ricorsione entra nella seconda (dicembre).

Il filo del deck:

```
ricorsione fuori dal C     scatole cinesi, albero genealogico,        slide 3-15
   |                       fiocco di Koch, H-tree
Torri di Hanoi             gioco, soluzione con 4 dischi, 15 mosse    slide 16-36
   |
formulazione induttiva     caso base + caso induttivo                 slide 37-59
   |                       Hanoi in C, 2^n - 1 mosse, pseudocodice
ricorsione in C            diretta e indiretta                        slide 60-62
   |
esempi                     sommatoria su array, fattoriale,          slide 63-79
   |                       lista inversa, MCD (due versioni)
esecuzione                 record di attivazione, passaggio per       slide 80-91
   |                       indirizzo, gestione a pila della memoria
Fibonacci                  albero delle chiamate, tempo esponenziale, slide 92-106
   |                       memoization
esercizi                   scala 1-2-3 ricorsiva, cammini del robot   slide 107-122
                           su una griglia, con memoization
```

## Definizioni

**Ricorsione** (<span class="src">slide 3-15</span>). Un concetto è ricorsivo quando si definisce usando se stesso, su un caso più piccolo. Il prof parte da esempi fuori dalla programmazione:
- **scatole cinesi**: "sono stati fatti investimenti nella ditta XYZ che è controllata da xyz che è controllata da abc che è controllata da cba...". Si scrive `XYZ = ControllataDa(ControllataDa(ControllataDa(cba)))` (slide 5);
- **albero genealogico**: se B è il padre di C e A è il padre di B, allora `A = PADRE(B) = PADRE(PADRE(C))` (slide 6);
- **immagini**: ricorsione in natura (alberi veri, in cui ogni ramo si divide in rami più piccoli fatti allo stesso modo), un albero frattale generato al computer, il **fiocco di neve di Von Koch** (un triangolo in cui ogni lato si sostituisce con quattro lati lunghi un terzo, con una punta in mezzo, e si ripete su ciascuno), l'**H-tree** (slide 7-15).

L'H-tree si costruisce partendo da un segmento di lunghezza arbitraria e disegnando due segmenti più corti, ad angolo retto, alle estremità; a ogni turno i segmenti si riducono di $\sqrt 2$. Si usa nel progetto di circuiti integrati VLSI e di antenne stampate: occupa lo spazio in modo efficiente, arriva quasi a tutti i punti del rettangolo esterno, e porta il segnale di clock a tutte le foglie con lo stesso ritardo, perché ogni foglia è alla stessa distanza dalla radice (slide 15).

In tutti gli esempi c'è la stessa struttura: un oggetto grande fatto da copie più piccole dello stesso oggetto, e un punto in cui ci si ferma (cba non è controllata da nessuno; il segmento diventa troppo corto per disegnarlo).

**Formulazione induttiva di un algoritmo** (<span class="src">slide 38</span> e <span class="src">slide 56</span>). Con le parole del prof, si specificano due passi fondamentali:
- **caso base**: "la classe di istanze sufficientemente piccole (quindi sufficientemente semplici) da poter essere risolte in maniera diretta (senza ricorsione)";
- **caso induttivo**: "la classe delle istanze restanti che, pur non essendo direttamente risolvibili, si prestano ad essere risolte tramite un determinato algoritmo".

Prima di tutto bisogna trovare "la dimensione lungo la quale muoversi" (slide 56): il numero di dischi in Hanoi, $n$ nel fattoriale, la lunghezza dell'array nella sommatoria. Il caso induttivo deve far scendere quella dimensione, altrimenti non si arriva mai al caso base.

**Il caso induttivo in tre passi** (<span class="src">slide 57</span>).
1. Dall'istanza di dimensione $n$ si ricavano una o più istanze dello **stesso** problema di dimensione più piccola ($n-1$, $n-2$, ..., 1).
2. Si **suppone** di saper già risolvere quelle istanze più piccole.
3. Si **compongono** le loro soluzioni, con i calcoli che servono, per ottenere la soluzione dell'istanza di partenza.

Il passo 2 è quello che sembra un imbroglio e non lo è. È lo stesso ragionamento dell'induzione in matematica: se il caso base è giusto, e se "giusto per $n-1$" implica "giusto per $n$", allora è giusto per ogni $n$. Quando scrivi la funzione non devi seguire con la testa tutte le chiamate: ti basta fidarti che la chiamata sul caso più piccolo restituisca il risultato giusto.

**Pseudocodice generale** (<span class="src">slide 58-59</span>):

```
SOLUZIONE funzione_ricorsiva(PROBLEMA p, altri parametri...)
{
    if (siamo nel caso base) {
        risolvi direttamente il problema p: sia "sol" la soluzione;
        return sol;
    }
    else {  // siamo nel caso induttivo
        estrai da p uno o più sottoproblemi pi di dimensione minore di p;
        per ogni i, sia:
            si = funzione_ricorsiva(pi, altri parametri...);
        componi le soluzioni si ed effettua gli altri calcoli necessari
        ad ottenere una soluzione "sol" del problema p;
        return sol;
    }
}
```

**Ricorsione diretta e indiretta** (<span class="src">slide 61-62</span>). Un sottoprogramma P chiama, durante la sua esecuzione, un altro sottoprogramma Q; Q a sua volta chiama un terzo R, ...; se R chiama nuovamente P la ricorsione è **indiretta**. Se invece P chiama se stesso durante la propria esecuzione la ricorsione è **diretta**. Tutti gli esempi del deck sono diretti.

```
diretta      P ──> P ──> P ──> ...
indiretta    P ──> Q ──> R ──> P ──> ...
```

**Record di attivazione** (<span class="src">slide 80-82</span>). Il prof si chiede se il modello di esecuzione delle funzioni visto prima basti per una funzione che chiama se stessa. Con lo schema conosciuto, per $FattRic(3)$: il valore del parametro attuale 3 viene copiato nel parametro formale `n`, inizia l'esecuzione, arriva la nuova chiamata $FattRic(2)$, e il nuovo valore 2 dovrebbe essere copiato "nella cella `n`". Ma la cella `n` contiene ancora il 3, che servirà dopo per fare `3 * ...`. Se ci fosse una sola cella `n` il 3 andrebbe perso.

La risposta è la **gestione dinamica dell'area dati**: lo stato dipende da ciascuna **attivazione** della funzione. A ogni chiamata si crea un nuovo **record di attivazione**, una zona di memoria con i parametri, le variabili locali e il punto in cui tornare. Quattro chiamate attive di `FattRic` vogliono dire quattro celle `n` diverse, ognuna col suo valore.

**Gestione a pila della memoria** (<span class="src">slide 86-90</span>). La memoria che serve per eseguire un programma ha una componente **statica** (le variabili globali, note prima di partire) e una **dinamica**, per tutto ciò che non è noto a priori (slide 87): quante attivazioni ci saranno dipende dai dati. I record di attivazione si impilano come i sassi della foto della slide 86: l'ultimo messo è il primo tolto (**LIFO**, last in first out). Una chiamata mette un record in cima; quando la funzione finisce il suo record viene tolto, e si riprende la funzione del record sotto, che è proprio quella che aveva fatto la chiamata.

## Concetti

### La pila chiamata per chiamata

La figura segue `FattRic(3)` (<span class="src">slide 82</span>), una colonna per ogni momento. Il record in rosso è quello in esecuzione.

<figure class="fig"><svg role="img" aria-label="Pila ricorsione fattoriale" xmlns:xlink="http://www.w3.org/1999/xlink" width="661.554pt" height="321.984pt" viewBox="0 0 661.554 321.984" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f0021e1-figure_1"> <g id="f0021e1-patch_1"> <path d="M 0 321.984 L 661.554 321.984 L 661.554 -0 L 0 -0 L 0 321.984 z " style="fill: none"/> </g> <g id="f0021e1-axes_1"> <g id="f0021e1-patch_2"> <path d="M 15.462 253.161 L 80.9505 253.161 L 80.9505 222.84225 L 15.462 222.84225 L 15.462 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_3"> <path d="M 15.462 222.84225 L 80.9505 222.84225 L 80.9505 192.5235 L 15.462 192.5235 L 15.462 222.84225 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_4"> <path d="M 95.5035 253.161 L 160.992 253.161 L 160.992 222.84225 L 95.5035 222.84225 L 95.5035 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_5"> <path d="M 95.5035 222.84225 L 160.992 222.84225 L 160.992 192.5235 L 95.5035 192.5235 L 95.5035 222.84225 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_6"> <path d="M 95.5035 192.5235 L 160.992 192.5235 L 160.992 162.20475 L 95.5035 162.20475 L 95.5035 192.5235 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_7"> <path d="M 175.545 253.161 L 241.0335 253.161 L 241.0335 222.84225 L 175.545 222.84225 L 175.545 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_8"> <path d="M 175.545 222.84225 L 241.0335 222.84225 L 241.0335 192.5235 L 175.545 192.5235 L 175.545 222.84225 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_9"> <path d="M 175.545 192.5235 L 241.0335 192.5235 L 241.0335 162.20475 L 175.545 162.20475 L 175.545 192.5235 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_10"> <path d="M 175.545 162.20475 L 241.0335 162.20475 L 241.0335 131.886 L 175.545 131.886 L 175.545 162.20475 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_11"> <path d="M 255.5865 253.161 L 321.075 253.161 L 321.075 222.84225 L 255.5865 222.84225 L 255.5865 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_12"> <path d="M 255.5865 222.84225 L 321.075 222.84225 L 321.075 192.5235 L 255.5865 192.5235 L 255.5865 222.84225 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_13"> <path d="M 255.5865 192.5235 L 321.075 192.5235 L 321.075 162.20475 L 255.5865 162.20475 L 255.5865 192.5235 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_14"> <path d="M 255.5865 162.20475 L 321.075 162.20475 L 321.075 131.886 L 255.5865 131.886 L 255.5865 162.20475 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_15"> <path d="M 255.5865 131.886 L 321.075 131.886 L 321.075 101.56725 L 255.5865 101.56725 L 255.5865 131.886 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_16"> <path d="M 335.628 253.161 L 401.1165 253.161 L 401.1165 222.84225 L 335.628 222.84225 L 335.628 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_17"> <path d="M 335.628 222.84225 L 401.1165 222.84225 L 401.1165 192.5235 L 335.628 192.5235 L 335.628 222.84225 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_18"> <path d="M 335.628 192.5235 L 401.1165 192.5235 L 401.1165 162.20475 L 335.628 162.20475 L 335.628 192.5235 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_19"> <path d="M 335.628 162.20475 L 401.1165 162.20475 L 401.1165 131.886 L 335.628 131.886 L 335.628 162.20475 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_20"> <path d="M 415.6695 253.161 L 481.158 253.161 L 481.158 222.84225 L 415.6695 222.84225 L 415.6695 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_21"> <path d="M 415.6695 222.84225 L 481.158 222.84225 L 481.158 192.5235 L 415.6695 192.5235 L 415.6695 222.84225 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_22"> <path d="M 415.6695 192.5235 L 481.158 192.5235 L 481.158 162.20475 L 415.6695 162.20475 L 415.6695 192.5235 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_23"> <path d="M 495.711 253.161 L 561.1995 253.161 L 561.1995 222.84225 L 495.711 222.84225 L 495.711 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_24"> <path d="M 495.711 222.84225 L 561.1995 222.84225 L 561.1995 192.5235 L 495.711 192.5235 L 495.711 222.84225 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-patch_25"> <path d="M 575.7525 253.161 L 641.241 253.161 L 641.241 222.84225 L 575.7525 222.84225 L 575.7525 253.161 z " clip-path="url(#f0021e1-pad4c88dc2e)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f0021e1-text_1"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(36.165625 240.599672) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSansMono-50" d="M 2113 3144 Q 2219 3369 2383 3476 Q 2547 3584 2778 3584 Q 3200 3584 3373 3257 Q 3547 2931 3547 2028 L 3547 0 L 3022 0 L 3022 2003 Q 3022 2744 2939 2923 Q 2856 3103 2638 3103 Q 2388 3103 2295 2911 Q 2203 2719 2203 2003 L 2203 0 L 1678 0 L 1678 2003 Q 1678 2753 1589 2928 Q 1500 3103 1269 3103 Q 1041 3103 952 2911 Q 863 2719 863 2003 L 863 0 L 341 0 L 341 3500 L 863 3500 L 863 3200 Q 966 3388 1120 3486 Q 1275 3584 1472 3584 Q 1709 3584 1867 3475 Q 2025 3366 2113 3144 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-51" d="M 3284 2169 L 3284 0 L 2706 0 L 2706 2169 Q 2706 2641 2540 2862 Q 2375 3084 2022 3084 Q 1619 3084 1401 2798 Q 1184 2513 1184 1978 L 1184 0 L 609 0 L 609 3500 L 1184 3500 L 1184 2975 Q 1338 3275 1600 3429 Q 1863 3584 2222 3584 Q 2756 3584 3020 3232 Q 3284 2881 3284 2169 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_2"> <!-- FattRic --> <g style="fill: var(--fig-accent)" transform="translate(29.242266 204.620238) scale(0.09 -0.09)"> <defs> <path id="f0021e1-DejaVuSansMono-29" d="M 728 4666 L 3475 4666 L 3475 4134 L 1363 4134 L 1363 2759 L 3278 2759 L 3278 2228 L 1363 2228 L 1363 0 L 728 0 L 728 4666 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-57" d="M 1919 4494 L 1919 3500 L 3225 3500 L 3225 3053 L 1919 3053 L 1919 1153 Q 1919 766 2066 612 Q 2213 459 2578 459 L 3225 459 L 3225 0 L 2522 0 Q 1875 0 1609 259 Q 1344 519 1344 1153 L 1344 3053 L 409 3053 L 409 3500 L 1344 3500 L 1344 4494 L 1919 4494 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-35" d="M 2375 2203 Q 2619 2141 2791 1967 Q 2963 1794 3219 1275 L 3853 0 L 3175 0 L 2619 1178 Q 2378 1681 2186 1826 Q 1994 1972 1684 1972 L 1081 1972 L 1081 0 L 447 0 L 447 4666 L 1747 4666 Q 2516 4666 2925 4319 Q 3334 3972 3334 3316 Q 3334 2853 3082 2561 Q 2831 2269 2375 2203 z M 1081 4147 L 1081 2491 L 1772 2491 Q 2225 2491 2447 2694 Q 2669 2897 2669 3316 Q 2669 3719 2433 3933 Q 2197 4147 1747 4147 L 1081 4147 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-46" d="M 3316 178 Q 3084 44 2839 -23 Q 2594 -91 2338 -91 Q 1525 -91 1067 396 Q 609 884 609 1747 Q 609 2609 1067 3096 Q 1525 3584 2338 3584 Q 2591 3584 2831 3518 Q 3072 3453 3316 3316 L 3316 2713 Q 3088 2916 2858 3006 Q 2628 3097 2338 3097 Q 1797 3097 1506 2747 Q 1216 2397 1216 1747 Q 1216 1100 1508 748 Q 1800 397 2338 397 Q 2638 397 2875 489 Q 3113 581 3316 775 L 3316 178 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 3 --> <g style="fill: var(--fig-accent)" transform="translate(34.660547 215.421996) scale(0.09 -0.09)"> <defs> <path id="f0021e1-DejaVuSansMono-3" transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-20" d="M 275 1638 L 3578 1638 L 3578 1100 L 275 1100 L 275 1638 z M 275 2906 L 3578 2906 L 3578 2375 L 275 2375 L 275 2906 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-16" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_3"> <!-- main chiama --> <g style="fill: var(--fig-ink)" transform="translate(17.374297 279.521693) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-4b" d="M 263 0 L 263 331 L 781 331 L 781 4531 L 231 4531 L 231 4863 L 1356 4863 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2704 2764 Q 2556 2988 2175 2988 Q 1775 2988 1565 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-50"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(94.828125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(154.453125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(186.4375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(250.84375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(282.625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4b" transform="translate(338.625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(403.03125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(435.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-50" transform="translate(494.640625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(589.46875 0)"/> </g> <!-- FattRic(3) --> <g style="fill: var(--fig-ink)" transform="translate(24.097773 290.924291) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSerif-29" d="M 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 4172 4666 L 4172 3628 L 3788 3628 L 3788 4281 L 1581 4281 L 1581 2719 L 3175 2719 L 3175 3303 L 3559 3303 L 3559 1753 L 3175 1753 L 3175 2338 L 1581 2338 L 1581 331 L 2328 331 L 2328 0 L 353 0 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-35" d="M 3066 2316 Q 3284 2256 3442 2114 Q 3600 1972 3725 1716 L 4403 331 L 4972 331 L 4972 0 L 3872 0 L 3144 1484 Q 2934 1916 2759 2042 Q 2584 2169 2278 2169 L 1581 2169 L 1581 331 L 2241 331 L 2241 0 L 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 2719 4666 Q 3400 4666 3770 4341 Q 4141 4016 4141 3419 Q 4141 2938 3870 2661 Q 3600 2384 3066 2316 z M 1581 2503 L 2503 2503 Q 2975 2503 3200 2726 Q 3425 2950 3425 3419 Q 3425 3888 3200 4109 Q 2975 4331 2503 4331 L 1581 4331 L 1581 2503 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-29"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(62.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(122.234375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(162.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-35" transform="translate(202.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(277.90625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(309.890625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-b" transform="translate(365.890625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-16" transform="translate(404.90625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-c" transform="translate(468.53125 0)"/> </g> </g> <g id="f0021e1-text_4"> <!-- 1 --> <g style="fill: var(--fig-axis)" transform="translate(45.025 20.485156) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-14"/> </g> </g> <g id="f0021e1-text_5"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(116.207125 240.599672) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_6"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(109.283766 204.620238) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 3 --> <g style="fill: var(--fig-ink)" transform="translate(114.702047 215.421996) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-16" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_7"> <!-- FattRic --> <g style="fill: var(--fig-accent)" transform="translate(109.283766 174.301488) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 2 --> <g style="fill: var(--fig-accent)" transform="translate(114.702047 185.103246) scale(0.09 -0.09)"> <defs> <path id="f0021e1-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-15" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_8"> <!-- chiama --> <g style="fill: var(--fig-ink)" transform="translate(110.840484 279.521693) scale(0.095 -0.095)"> <use xlink:href="#f0021e1-DejaVuSerif-46"/> <use xlink:href="#f0021e1-DejaVuSerif-4b" transform="translate(56 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(152.390625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-50" transform="translate(212.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(306.84375 0)"/> </g> <!-- FattRic(2) --> <g style="fill: var(--fig-ink)" transform="translate(104.139273 290.924291) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-29"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(62.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(122.234375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(162.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-35" transform="translate(202.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(277.90625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(309.890625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-b" transform="translate(365.890625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-15" transform="translate(404.90625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-c" transform="translate(468.53125 0)"/> </g> </g> <g id="f0021e1-text_9"> <!-- 2 --> <g style="fill: var(--fig-axis)" transform="translate(125.0665 20.485156) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSerif-15"/> </g> </g> <g id="f0021e1-text_10"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(196.248625 240.599672) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_11"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(189.325266 204.620238) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 3 --> <g style="fill: var(--fig-ink)" transform="translate(194.743547 215.421996) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-16" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_12"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(189.325266 174.301488) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 2 --> <g style="fill: var(--fig-ink)" transform="translate(194.743547 185.103246) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-15" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_13"> <!-- FattRic --> <g style="fill: var(--fig-accent)" transform="translate(189.325266 143.982738) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 1 --> <g style="fill: var(--fig-accent)" transform="translate(194.743547 154.784496) scale(0.09 -0.09)"> <defs> <path id="f0021e1-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-14" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_14"> <!-- chiama --> <g style="fill: var(--fig-ink)" transform="translate(190.881984 279.521693) scale(0.095 -0.095)"> <use xlink:href="#f0021e1-DejaVuSerif-46"/> <use xlink:href="#f0021e1-DejaVuSerif-4b" transform="translate(56 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(152.390625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-50" transform="translate(212.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(306.84375 0)"/> </g> <!-- FattRic(1) --> <g style="fill: var(--fig-ink)" transform="translate(184.180773 290.924291) scale(0.095 -0.095)"> <use xlink:href="#f0021e1-DejaVuSerif-29"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(62.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(122.234375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(162.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-35" transform="translate(202.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(277.90625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(309.890625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-b" transform="translate(365.890625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-14" transform="translate(404.90625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-c" transform="translate(468.53125 0)"/> </g> </g> <g id="f0021e1-text_15"> <!-- 3 --> <g style="fill: var(--fig-axis)" transform="translate(205.108 20.485156) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSerif-16"/> </g> </g> <g id="f0021e1-text_16"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(276.290125 240.599672) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_17"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(269.366766 204.620238) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 3 --> <g style="fill: var(--fig-ink)" transform="translate(274.785047 215.421996) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-16" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_18"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(269.366766 174.301488) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 2 --> <g style="fill: var(--fig-ink)" transform="translate(274.785047 185.103246) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-15" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_19"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(269.366766 143.982738) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 1 --> <g style="fill: var(--fig-ink)" transform="translate(274.785047 154.784496) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-14" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_20"> <!-- FattRic --> <g style="fill: var(--fig-accent)" transform="translate(269.366766 113.663988) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 0 --> <g style="fill: var(--fig-accent)" transform="translate(274.785047 124.465746) scale(0.09 -0.09)"> <defs> <path id="f0021e1-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-13" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_21"> <!-- ritorna 1 --> <g style="fill: var(--fig-steel)" transform="translate(262.593914 93.120645) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSansMono-55" d="M 3609 2778 Q 3425 2922 3234 2987 Q 3044 3053 2816 3053 Q 2278 3053 1993 2715 Q 1709 2378 1709 1741 L 1709 0 L 1131 0 L 1131 3500 L 1709 3500 L 1709 2816 Q 1853 3188 2151 3386 Q 2450 3584 2859 3584 Q 3072 3584 3256 3531 Q 3441 3478 3609 3366 L 3609 2778 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-55"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-52" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-55" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(361.21875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-14" transform="translate(481.625 0)"/> </g> </g> <g id="f0021e1-text_22"> <!-- caso base --> <g style="fill: var(--fig-ink)" transform="translate(264.910281 278.570766) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-46"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(56 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-56" transform="translate(115.625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(166.9375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(227.140625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-45" transform="translate(258.921875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(322.9375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-56" transform="translate(382.5625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(433.875 0)"/> </g> </g> <g id="f0021e1-text_23"> <!-- 4 --> <g style="fill: var(--fig-axis)" transform="translate(285.1495 20.485156) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-17"/> </g> </g> <g id="f0021e1-text_24"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(356.331625 240.599672) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_25"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(349.408266 204.620238) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 3 --> <g style="fill: var(--fig-ink)" transform="translate(354.826547 215.421996) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-16" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_26"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(349.408266 174.301488) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 2 --> <g style="fill: var(--fig-ink)" transform="translate(354.826547 185.103246) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-15" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_27"> <!-- FattRic --> <g style="fill: var(--fig-accent)" transform="translate(349.408266 143.982738) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 1 --> <g style="fill: var(--fig-accent)" transform="translate(354.826547 154.784496) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-14" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_28"> <!-- 1 * 1 = 1 --> <g style="fill: var(--fig-steel)" transform="translate(342.635414 123.439023) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSansMono-d" d="M 3334 3897 L 2216 3291 L 3334 2681 L 3156 2375 L 2106 3009 L 2106 1831 L 1747 1831 L 1747 3009 L 697 2375 L 519 2681 L 1638 3291 L 519 3897 L 697 4206 L 1747 3572 L 1747 4750 L 2106 4750 L 2106 3572 L 3156 4206 L 3334 3897 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-14"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-d" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-14" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(361.21875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-14" transform="translate(481.625 0)"/> </g> </g> <g id="f0021e1-text_29"> <!-- ritorna 1 --> <g style="fill: var(--fig-steel)" transform="translate(347.120453 278.570023) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-55"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(79.78125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(119.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(180.171875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(227.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(292.375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(352 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-14" transform="translate(383.78125 0)"/> </g> </g> <g id="f0021e1-text_30"> <!-- 5 --> <g style="fill: var(--fig-axis)" transform="translate(365.191 20.485156) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-18"/> </g> </g> <g id="f0021e1-text_31"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(436.373125 240.599672) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_32"> <!-- FattRic --> <g style="fill: var(--fig-ink)" transform="translate(429.449766 204.620238) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 3 --> <g style="fill: var(--fig-ink)" transform="translate(434.868047 215.421996) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-16" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_33"> <!-- FattRic --> <g style="fill: var(--fig-accent)" transform="translate(429.449766 174.301488) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 2 --> <g style="fill: var(--fig-accent)" transform="translate(434.868047 185.103246) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-15" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_34"> <!-- 2 * 1 = 2 --> <g style="fill: var(--fig-steel)" transform="translate(422.676914 153.757773) scale(0.095 -0.095)"> <use xlink:href="#f0021e1-DejaVuSansMono-15"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-d" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-14" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(361.21875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-15" transform="translate(481.625 0)"/> </g> </g> <g id="f0021e1-text_35"> <!-- ritorna 2 --> <g style="fill: var(--fig-steel)" transform="translate(427.161953 278.570023) scale(0.095 -0.095)"> <use xlink:href="#f0021e1-DejaVuSerif-55"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(79.78125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(119.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(180.171875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(227.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(292.375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(352 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-15" transform="translate(383.78125 0)"/> </g> </g> <g id="f0021e1-text_36"> <!-- 6 --> <g style="fill: var(--fig-axis)" transform="translate(445.2325 20.485156) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-19"/> </g> </g> <g id="f0021e1-text_37"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(516.414625 240.599672) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_38"> <!-- FattRic --> <g style="fill: var(--fig-accent)" transform="translate(509.491266 204.620238) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-29"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-57" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-35" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-46" transform="translate(361.21875 0)"/> </g> <!-- n = 3 --> <g style="fill: var(--fig-accent)" transform="translate(514.909547 215.421996) scale(0.09 -0.09)"> <use xlink:href="#f0021e1-DejaVuSansMono-51"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-16" transform="translate(240.8125 0)"/> </g> </g> <g id="f0021e1-text_39"> <!-- 3 * 2 = 6 --> <g style="fill: var(--fig-steel)" transform="translate(502.718414 184.076523) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSansMono-19" d="M 3097 4563 L 3097 3981 Q 2900 4097 2678 4158 Q 2456 4219 2216 4219 Q 1616 4219 1306 3767 Q 997 3316 997 2438 Q 1147 2750 1412 2917 Q 1678 3084 2022 3084 Q 2697 3084 3067 2670 Q 3438 2256 3438 1497 Q 3438 741 3056 325 Q 2675 -91 1984 -91 Q 1172 -91 794 492 Q 416 1075 416 2328 Q 416 3509 870 4129 Q 1325 4750 2188 4750 Q 2419 4750 2650 4701 Q 2881 4653 3097 4563 z M 1972 2591 Q 1569 2591 1337 2300 Q 1106 2009 1106 1497 Q 1106 984 1337 693 Q 1569 403 1972 403 Q 2391 403 2603 679 Q 2816 956 2816 1497 Q 2816 2041 2603 2316 Q 2391 2591 1972 2591 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSansMono-16"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-d" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(180.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-15" transform="translate(240.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(301.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-20" transform="translate(361.21875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-19" transform="translate(481.625 0)"/> </g> </g> <g id="f0021e1-text_40"> <!-- ritorna 6 --> <g style="fill: var(--fig-steel)" transform="translate(507.203453 278.570023) scale(0.095 -0.095)"> <use xlink:href="#f0021e1-DejaVuSerif-55"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(79.78125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(119.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(180.171875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(227.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(292.375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(352 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-19" transform="translate(383.78125 0)"/> </g> </g> <g id="f0021e1-text_41"> <!-- 7 --> <g style="fill: var(--fig-axis)" transform="translate(525.274 20.485156) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-1a"/> </g> </g> <g id="f0021e1-text_42"> <!-- main --> <g style="fill: var(--fig-axis)" transform="translate(596.456125 240.599672) scale(0.1 -0.1)"> <use xlink:href="#f0021e1-DejaVuSansMono-50"/> <use xlink:href="#f0021e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-4c" transform="translate(120.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSansMono-51" transform="translate(180.609375 0)"/> </g> </g> <g id="f0021e1-text_43"> <!-- 6 --> <g style="fill: var(--fig-steel)" transform="translate(604.884563 213.831937) scale(0.12 -0.12)"> <use xlink:href="#f0021e1-DejaVuSansMono-19"/> </g> </g> <g id="f0021e1-text_44"> <!-- main riceve 6 --> <g style="fill: var(--fig-steel)" transform="translate(575.784094 278.570023) scale(0.095 -0.095)"> <defs> <path id="f0021e1-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-50"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(94.828125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(154.453125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(186.4375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(250.84375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(282.625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(330.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(362.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(418.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-59" transform="translate(477.59375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(534.09375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(593.28125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-19" transform="translate(625.0625 0)"/> </g> </g> <g id="f0021e1-text_45"> <!-- 8 --> <g style="fill: var(--fig-axis)" transform="translate(605.3155 20.485156) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-1b"/> </g> </g> <g id="f0021e1-patch_26"> <path d="M 20.313 44.568 Q 168.2685 44.568 314.546949 44.568 " style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 310.546949 42.568 L 314.546949 44.568 L 310.546949 46.568 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="f0021e1-text_46"> <!-- andata: ogni chiamata aggiunge un record in cima --> <g style="fill: var(--fig-ink)" transform="translate(40.027094 36.251297) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-44"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(59.625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-47" transform="translate(124.03125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(188.046875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(247.671875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(287.859375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-1d" transform="translate(347.484375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(381.171875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(412.953125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4a" transform="translate(473.15625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(537.171875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(601.578125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(633.5625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(665.34375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4b" transform="translate(721.34375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(785.75 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(817.734375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-50" transform="translate(877.359375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(972.1875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(1031.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(1072 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(1131.625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(1163.40625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4a" transform="translate(1223.03125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4a" transform="translate(1287.046875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(1351.0625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-58" transform="translate(1383.046875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(1447.453125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4a" transform="translate(1511.859375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(1575.875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(1635.0625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-58" transform="translate(1666.84375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(1731.25 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(1795.65625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(1827.4375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(1875.234375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(1934.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(1990.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(2050.625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-47" transform="translate(2098.421875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(2162.4375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(2194.21875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(2226.203125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(2290.609375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(2322.390625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(2378.390625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-50" transform="translate(2410.375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(2505.203125 0)"/> </g> </g> <g id="f0021e1-patch_27"> <path d="M 340.479 44.568 Q 488.4345 44.568 634.712949 44.568 " style="fill: none; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 630.712949 42.568 L 634.712949 44.568 L 630.712949 46.568 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="f0021e1-text_47"> <!-- ritorno: il record in cima finisce e viene tolto --> <g style="fill: var(--fig-steel)" transform="translate(374.87825 36.251297) scale(0.1 -0.1)"> <defs> <path id="f0021e1-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f0021e1-DejaVuSerif-cf0" d="M 3347 4019 L 3053 4022 Q 3044 4291 2853 4423 Q 2663 4556 2278 4556 Q 1800 4556 1578 4334 Q 1356 4113 1356 3634 L 1356 3322 L 3578 3322 L 3578 331 L 4122 331 L 4122 0 L 2450 0 L 2450 331 L 3003 331 L 3003 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4238 1147 4550 Q 1513 4863 2228 4863 Q 2500 4863 2784 4822 Q 3069 4781 3347 4697 L 3347 4019 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f0021e1-DejaVuSerif-55"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(79.78125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(119.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(180.171875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(227.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(292.375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-1d" transform="translate(352.578125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(386.265625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(418.046875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4f" transform="translate(450.03125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(482.015625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(513.796875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(561.59375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(620.78125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(676.78125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-55" transform="translate(736.984375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-47" transform="translate(784.78125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(848.796875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(880.578125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(912.5625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(976.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(1008.75 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(1064.75 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-50" transform="translate(1096.734375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-44" transform="translate(1191.5625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(1251.1875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-cf0" transform="translate(1282.96875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(1349.671875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(1414.078125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-56" transform="translate(1446.0625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-46" transform="translate(1497.375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(1553.375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(1612.5625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(1644.34375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(1703.53125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-59" transform="translate(1735.3125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4c" transform="translate(1791.8125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(1823.796875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-51" transform="translate(1882.984375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-48" transform="translate(1947.390625 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-3" transform="translate(2006.578125 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(2038.359375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(2078.546875 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-4f" transform="translate(2138.75 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-57" transform="translate(2170.734375 0)"/> <use xlink:href="#f0021e1-DejaVuSerif-52" transform="translate(2210.921875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f0021e1-pad4c88dc2e"> <rect x="5.76" y="5.76" width="650.034" height="310.464"/> </clipPath> </defs> </svg></figure>

```c
int FattRic(int n)
{
    if (n == 0)
        return 1;
    else
        return n * FattRic(n - 1);
}
```

La stessa cosa come tabella, una riga per evento. La colonna "pila" elenca i record dal fondo alla cima.

| passo | evento | pila (fondo → cima) | cosa resta in sospeso |
| --- | --- | --- | --- |
| 1 | `main` chiama `FattRic(3)` | main, n=3 | |
| 2 | 3 == 0 falso, serve `FattRic(2)` | main, n=3, n=2 | `3 * ?` |
| 3 | 2 == 0 falso, serve `FattRic(1)` | main, n=3, n=2, n=1 | `3 * ?`, `2 * ?` |
| 4 | 1 == 0 falso, serve `FattRic(0)` | main, n=3, n=2, n=1, n=0 | `3 * ?`, `2 * ?`, `1 * ?` |
| 5 | 0 == 0 vero: caso base, ritorna 1 | main, n=3, n=2, n=1 | `3 * ?`, `2 * ?`, `1 * 1` |
| 6 | n=1 calcola 1 * 1, ritorna 1 | main, n=3, n=2 | `3 * ?`, `2 * 1` |
| 7 | n=2 calcola 2 * 1, ritorna 2 | main, n=3 | `3 * 2` |
| 8 | n=3 calcola 3 * 2, ritorna 6 | main | |

Due fasi da tenere separate:
- **andata** (passi 1-4): si scende fino al caso base, e ogni chiamata lascia una moltiplicazione **in sospeso**, perché non conosce ancora il fattore di destra;
- **ritorno** (passi 5-8): i record si chiudono dall'alto, e le moltiplicazioni in sospeso si fanno in ordine **inverso** rispetto a come erano state lasciate.

Nella slide 82 il prof disegna proprio questo: a sinistra la colonna dei valori di `n` (3, 2, 1, 0) con le frecce verso il basso, a destra la colonna dei risultati (1, 1*1 = 1, 2*1 = 2, 3*2 = 6) con le frecce verso l'alto.

Esempio 1, la profondità della pila. Con `FattRic(n)` la pila arriva ad avere $n+1$ record di `FattRic` contemporaneamente (da `n` fino a 0). La versione col `for` ne ha sempre uno solo. Questo è il "per $n = 3$ usano entrambe le stesse risorse (memoria)?" della <span class="src">slide 83</span>: no, la ricorsiva ne usa 4 contemporaneamente, l'iterativa 1.

Esempio 2, una pila che sale e scende più volte (<span class="src">slide 88-90</span>). Il prof disegna `main` che chiama P1, P1 chiama P2', P2' chiama P3, P3 chiama P2'' (una seconda attivazione di P2: ricorsione indiretta P2 → P3 → P2).

```
evento                         pila (fondo → cima)
main → P1 → P2' → P3 → P2''    main  P1  P2'  P3  P2''          slide 88
P2'' finisce, poi P3           main  P1  P2'                    slide 89
P2' chiama P4                  main  P1  P2'  P4                slide 90
P4, P2', P1 finiscono          main
```

Il record di P4 finisce **nello stesso posto** dove prima c'erano P3 e P2'': la memoria della pila si riusa. Sotto la pila, in fondo, ci sono le variabili globali, che restano lì per tutto il programma.

### Stampe prima e dopo la chiamata ricorsiva

È il tracing che esce di più. La regola viene dalla pila: un'istruzione **prima** della chiamata ricorsiva si esegue durante l'andata, quindi in ordine di chiamata; un'istruzione **dopo** si esegue durante il ritorno, quindi in ordine inverso.

```c
#include <stdio.h>

void prima(int n)
{
    if (n == 0)
        return;
    printf("%d ", n);
    prima(n - 1);
}

void dopo(int n)
{
    if (n == 0)
        return;
    dopo(n - 1);
    printf("%d ", n);
}

void entrambe(int n)
{
    if (n == 0) {
        printf("| ");
        return;
    }
    printf("%d ", n);
    entrambe(n - 1);
    printf("%d ", n);
}

int main(void)
{
    prima(3);
    printf("\n");
    dopo(3);
    printf("\n");
    entrambe(3);
    printf("\n");
    return 0;
}
```

Output (verificato):

```
3 2 1 
1 2 3 
3 2 1 | 1 2 3 
```

Tracing di `entrambe(3)`, una riga per istruzione eseguita. Il rientro mostra la profondità.

| istruzione | `n` del record in cima | stampa |
| --- | --- | --- |
| `entrambe(3)`: 3 == 0 falso | 3 | |
| `printf` prima della chiamata | 3 | `3 ` |
| . `entrambe(2)`: 2 == 0 falso | 2 | |
| . `printf` prima | 2 | `2 ` |
| . . `entrambe(1)`: falso | 1 | |
| . . `printf` prima | 1 | `1 ` |
| . . . `entrambe(0)`: caso base | 0 | `\| ` |
| . . `printf` dopo, `entrambe(1)` finisce | 1 | `1 ` |
| . `printf` dopo, `entrambe(2)` finisce | 2 | `2 ` |
| `printf` dopo, `entrambe(3)` finisce | 3 | `3 ` |

La seconda stampa di ogni record usa **il suo** `n`: quando `entrambe(1)` riprende dopo il ritorno di `entrambe(0)`, il suo `n` vale ancora 1, perché ogni attivazione ha la sua cella.

Esempio 2, le cifre di un numero. `n % 10` è l'ultima cifra, `n / 10` toglie l'ultima cifra (come in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)).

```c
#include <stdio.h>

void cifre_inverse(int n)
{
    printf("%d", n % 10);
    if (n >= 10)
        cifre_inverse(n / 10);
}

void cifre(int n)
{
    if (n >= 10)
        cifre(n / 10);
    printf("%d", n % 10);
}

int main(void)
{
    cifre_inverse(4271);
    printf("\n");
    cifre(4271);
    printf("\n");
    return 0;
}
```

| chiamata | `n` | `n % 10` | `n >= 10` |
| --- | --- | --- | --- |
| 1 | 4271 | 1 | vero |
| 2 | 427 | 7 | vero |
| 3 | 42 | 2 | vero |
| 4 | 4 | 4 | falso: caso base |

`cifre_inverse` stampa la cifra **prima** di scendere: in ordine di chiamata, 1 7 2 4. `cifre` stampa **dopo**: in ordine di ritorno, cioè dalla chiamata 4 alla 1, 4 2 7 1. Output (verificato): `1724`, poi `4271`. Qui il caso base non ha un `return` esplicito: è il ramo in cui l'`if` è falso e non si chiama più niente.

Esempio 3, due chiamate ricorsive con la stampa in mezzo (lo schema di Hanoi):

```c
#include <stdio.h>

void righello(int n)
{
    if (n == 0)
        return;
    righello(n - 1);
    printf("%d ", n);
    righello(n - 1);
}

int main(void)
{
    righello(3);
    printf("\n");
    return 0;
}
```

Con due chiamate per record la pila non basta più a vedere tutto in una colonna: si disegna l'**albero delle chiamate**, con ogni chiamata come nodo e le sue chiamate come figli, da sinistra a destra nell'ordine in cui avvengono.

```
                       r(3)
            ┌───────────┼────────────┐
          r(2)       stampa 3       r(2)
       ┌────┼────┐              ┌────┼────┐
     r(1) st.2  r(1)          r(1) st.2  r(1)
    ┌─┼─┐      ┌─┼─┐         ┌─┼─┐      ┌─┼─┐
  r0 1 r0    r0 1 r0       r0 1 r0    r0 1 r0
```

La stampa si legge visitando l'albero da sinistra a destra: `1 2 1 3 1 2 1` (verificato). È la sequenza dei dischi mossi da Hanoi con 3 dischi (sotto, Esempi svolti).

### Contare le chiamate

Si scrive una ricorrenza: le chiamate di $f(n)$ sono **1** (la chiamata stessa) più le chiamate fatte dai figli. Il caso base conta 1.

| funzione | ricorrenza delle chiamate | valori | formula |
| --- | --- | --- | --- |
| `FattRic(n)` | $C(0) = 1$, $C(n) = 1 + C(n-1)$ | $C(3) = 4$ | $n + 1$ |
| `righello(n)`, Hanoi | $C(0) = 1$, $C(n) = 1 + 2C(n-1)$ | $C(3) = 15$ | $2^{n+1} - 1$ |
| `Fibo(n)` | $C(0) = C(1) = 1$, $C(n) = 1 + C(n-1) + C(n-2)$ | $C(5) = 15$, $C(6) = 25$ | $2F(n+1) - 1$ |
| `CountWays(n)` | $C(n) = 1$ se $n \le 0$, $C(n) = 1 + C(n-1) + C(n-2) + C(n-3)$ | $C(3) = 13$, $C(10) = 979$ | esponenziale |

Esempio 1, `FattRic(3)`: chiamate con $n$ = 3, 2, 1, 0, quindi 4. Lineare: ogni chiamata ne fa al massimo una.

Esempio 2, `Fibo(5)`: $C(2) = 1 + 1 + 1 = 3$, $C(3) = 1 + 3 + 1 = 5$, $C(4) = 1 + 5 + 3 = 9$, $C(5) = 1 + 9 + 5 = 15$. Controllo con la formula: $F(6) = 8$, $2 \cdot 8 - 1 = 15$. Contate anche con un contatore globale nel programma: 15 (verificato).

Esempio 3, il conteggio della scala. Nella nota sul ciclo `while` ci sono già le chiamate della versione ricorsiva di ChatGPT, con casi base fino a $n = 2$: 289 per $n = 10$ ([Ciclo while ed esempi › La scala a passi da 1, 2 o 3](/uni/prog-1/ciclo-while-ed-esempi/#la-scala-a-passi-da-1-2-o-3)). La versione del prof (<span class="src">slide 110</span>) ha come unico caso base $n \le 0$, quindi scende di due livelli in più: per $n = 10$ fa 979 chiamate (contate con uno script). Le due successioni sono le stesse spostate di 2: $C_{prof}(n) = C_{GPT}(n+2)$, e infatti $C_{prof}(8) = 289$.

Una regola pratica per i casi semplici: con **una** chiamata ricorsiva per record le chiamate sono tante quanti i livelli (lineare); con **due o più** chiamate che scendono di poco ($n-1$, $n-2$) le chiamate crescono esponenzialmente.

### Ricorsione contro iterazione

Ogni funzione ricorsiva vista nel deck ha anche una versione con un ciclo. Il prof le confronta sul fattoriale (<span class="src">slide 73-75</span>, <span class="src">slide 83</span>):

| domanda della slide | `Fatt` (con il `for`) | `FattRic` |
| --- | --- | --- |
| moltiplicazioni per $n = 1$ | 0 (il `for` parte da `i = 2` e non entra) | 1 (`1 * FattRic(0)`) |
| moltiplicazioni per $n = 3$ | 2 (`i` = 2, 3) | 3 (`n` = 3, 2, 1) |
| confronti per $n = 3$ | 3 (`i <= n` con `i` = 2, 3, 4) | 4 (`n == 0` con `n` = 3, 2, 1, 0) |
| memoria per $n = 3$ | un record (`n`, `ris`, `i`) | 4 record di `FattRic` insieme |

Contati con due contatori dentro le funzioni (verificato). La differenza è piccola sul fattoriale, ma le chiamate costano: ogni chiamata crea un record, copia i parametri, salva il punto di ritorno.

Quando la ricorsione è peggio di molto:
- **più chiamate sugli stessi sottoproblemi**: Fibonacci e la scala ricalcolano gli stessi valori un numero esponenziale di volte (sotto, Esempi svolti);
- **pila troppo profonda**: ogni livello occupa memoria nello stack, e con migliaia di livelli lo stack finisce (crash, "stack overflow"). Il "Ricapitolando" della <span class="src">slide 91</span> lo dice: "attenzione all'impatto delle chiamate ricorsive sui requisiti di occupazione memoria dello stack ed i tempi di esecuzione".

Quando conviene: quando il problema è ricorsivo per natura (Hanoi, gli alberi della seconda parte del corso), la ricorsiva è corta e si scrive copiando la definizione, mentre l'iterativa richiede di gestire a mano quello che la pila fa da sola.

**Memoization** (<span class="src">slide 105</span>). "Riduciamo il tempo di esecuzione memoizzando (annotando) i risultati di istanze già eseguite. Quando eseguiremo una funzione per un determinato valore, andremo prima a cercare nell'array contenente i valori della funzione eseguita in precedenza." Si tiene un array inizializzato a 0 (0 = "non ancora calcolato"); prima di calcolare $f(n)$ si guarda se la casella `n` è già piena, e dopo averlo calcolato lo si scrive lì. Ogni valore si calcola una volta sola: Fibonacci passa da esponenziale a lineare.

### Ricorsione su array e stringhe

La dimensione lungo cui muoversi è la **lunghezza**: si risolve il problema su un array di $n$ elementi usando lo stesso problema su $n-1$ elementi, e il caso base è l'array vuoto (o di un elemento). Con le stringhe la fine si riconosce dal `'\0'` ([Stringhe](/uni/prog-1/stringhe/)), quindi non serve passare la lunghezza.

Tre modi di "accorciare":

```
ultimi n-1 elementi esclusi    f(a, n)  usa a[n-1]   e   f(a, n-1)      sommatoria, massimo
indice che avanza              f(s, i)  usa s[i]     e   f(s, i+1)      lunghezza, stampa al contrario
due indici che si stringono    f(a,i,j) usa a[i],a[j] e  f(a, i+1, j-1) inversione, palindroma
```

```c
#include <stdio.h>

int lunghezza(const char s[])
{
    if (s[0] == '\0')
        return 0;
    return 1 + lunghezza(s + 1);
}

void stampa_al_contrario(const char s[], int i)
{
    if (s[i] == '\0')
        return;
    stampa_al_contrario(s, i + 1);
    putchar(s[i]);
}

int palindroma(const char s[], int i, int j)
{
    if (i >= j)
        return 1;
    if (s[i] != s[j])
        return 0;
    return palindroma(s, i + 1, j - 1);
}

void inverti(int a[], int i, int j)
{
    int t;

    if (i >= j)
        return;
    t = a[i];
    a[i] = a[j];
    a[j] = t;
    inverti(a, i + 1, j - 1);
}

int massimo(const int a[], int n)
{
    int m;

    if (n == 1)
        return a[0];
    m = massimo(a, n - 1);
    return a[n - 1] > m ? a[n - 1] : m;
}

int main(void)
{
    int v[4] = {2, 7, 5, 4};

    printf("%d\n", lunghezza("ciao"));
    stampa_al_contrario("ciao", 0);
    putchar('\n');
    printf("%d %d\n", palindroma("radar", 0, 4), palindroma("rotore", 0, 5));
    inverti(v, 0, 3);
    printf("%d %d %d %d\n", v[0], v[1], v[2], v[3]);
    printf("%d\n", massimo(v, 4));
    return 0;
}
```

Output (verificato):

```
4
oaic
1 0
4 5 7 2
7
```

- `lunghezza("ciao")`: `s + 1` è la stringa senza il primo carattere (aritmetica dei puntatori, [Puntatori](/uni/prog-1/puntatori/)). Le chiamate vedono `"ciao"`, `"iao"`, `"ao"`, `"o"`, `""`; si torna con 0, 1, 2, 3, 4.
- `stampa_al_contrario`: la `putchar` è **dopo** la chiamata, quindi le lettere escono al ritorno, dall'ultima alla prima.
- `palindroma("radar", 0, 4)`: confronta `r`/`r` (0, 4), `a`/`a` (1, 3), poi `i = j = 2` e si ferma con 1. Per `"rotore"` già `r`/`e` sono diversi: 0.
- `inverti(v, 0, 3)`: scambia `v[0]` e `v[3]` ({4, 7, 5, 2}), poi `v[1]` e `v[2]` ({4, 5, 7, 2}), poi `i = 2 > j = 1` e si ferma.
- `massimo(v, 4)` sull'array già invertito {4, 5, 7, 2}: `massimo(v, 1)` = 4, poi max(5, 4) = 5, max(7, 5) = 7, max(2, 7) = 7.

Gli array si passano per indirizzo ([Funzioni](/uni/prog-1/funzioni/)): tutte le chiamate di `inverti` lavorano sullo **stesso** array, ed è per questo che gli scambi fatti in profondità si vedono nel `main`.

## Metodo

**Scrivere una funzione ricorsiva.**
1. Trova la dimensione che scende: un numero ($n$), una lunghezza, una distanza fra due indici.
2. Scrivi il caso base: l'istanza più piccola, risolta senza chiamate. Controlla che **ogni** valore iniziale ci arrivi (con `n - 2` da un numero dispari si salta lo 0: serve `n <= 0`).
3. Scrivi il caso induttivo con i tre passi della slide 57: istanza più piccola, fiducia nel risultato, composizione.
4. Prova a mano sul caso base e su quello subito sopra.

**Tracciare "cosa stampa".**
1. Se c'è una sola chiamata ricorsiva per record: scrivi la colonna delle chiamate con i valori dei parametri fino al caso base (andata), poi risali (ritorno). Le stampe prima della chiamata escono scendendo, quelle dopo risalendo.
2. Se ce ne sono due o più: disegna l'albero delle chiamate, con le stampe come foglie nel punto in cui avvengono, e leggilo da sinistra a destra.
3. Ogni record ha i suoi parametri e le sue variabili locali: dopo il ritorno di una chiamata il valore di `n` è quello di prima. Fanno eccezione le variabili globali, `static` e quelle raggiunte tramite puntatore, che sono una sola cella condivisa da tutti i record.
4. Per i valori restituiti scrivi l'espressione in sospeso (`3 * ?`) e completala al ritorno.

**Contare chiamate e operazioni.** Scrivi la ricorrenza $C(n) = 1 + \sum C(\text{figli})$, calcola i primi valori dal basso, e controlla sull'albero disegnato.

## Esempi svolti a lezione

### Le Torri di Hanoi

(<span class="src">slide 16-36</span>) Tre pioli A, B, C; i dischi stanno su A, dal più grande in basso al più piccolo in cima. L'obiettivo del gioco è mettere tutti i dischi sul piolo C, sempre in ordine, seguendo tre regole (slide 19-20):
1. si può spostare un solo disco alla volta;
2. si può spostare solo un disco che non ha altri dischi sopra;
3. non si può mai mettere un disco più grande su uno più piccolo.

Le slide 21-36 mostrano la soluzione con 4 dischi, mossa per mossa: 15 mosse (mossa 1 da A a B, mossa 2 da A a C, mossa 3 da B a C, ...).

**Formulazione induttiva** (<span class="src">slide 39-45</span>). "Come si descrive induttivamente la soluzione del problema con $n$ dischi?"
- **Caso base**: se ho un solo disco da spostare da A a C, lo so spostare.
- **Caso induttivo** (suppongo di saper risolvere problemi con $n-1$ dischi):
  1. metto gli $n-1$ dischi più piccoli da A in B;
  2. metto un disco (il più grande) da A in C;
  3. metto gli $n-1$ dischi più piccoli da B in C.

Il passo 1 è legale perché il disco grande, rimasto sotto in A, non dà fastidio: tutti i dischi spostati sono più piccoli. Nel passo 1 il piolo C fa da appoggio, nel passo 3 lo fa A.

Il commento del prof (slide 46): il caso base è semplice da riconoscere e risolvere; la ricorsione riguarda **due** sottoproblemi con $n-1$ dischi, semplici da estrarre; le soluzioni parziali si **compongono**: le mosse del primo sottoproblema, una mossa singola, le mosse del secondo.

**Il codice** (<span class="src">slide 47-53</span>). Nelle slide i commenti dicono "Muovi n-1 dischi da da_piolo a piolo_appoggio", "Muovi il disco rimasto da da_piolo a a_piolo", "Muovi n-1 dischi da piolo_appoggio to a a_piolo". Il `main` della slide 53 chiama `hanoi('A', 'C', 'B', n)`: A è il piolo di partenza, C quello di arrivo, B l'appoggio. Qui con `int main(void)` e il controllo di `scanf`:

```c
#include <stdio.h>

void hanoi(char da_piolo, char a_piolo, char piolo_appoggio, int dischi)
{
    if (dischi == 1) {
        printf("Muovi disco 1 da %c a %c\n", da_piolo, a_piolo);
        return;
    }
    hanoi(da_piolo, piolo_appoggio, a_piolo, dischi - 1);
    printf("Muovi %d da %c a %c\n", dischi, da_piolo, a_piolo);
    hanoi(piolo_appoggio, a_piolo, da_piolo, dischi - 1);
}

int main(void)
{
    int n;

    printf("Inserisci il numero di dischi: ");
    if (scanf("%d", &n) != 1 || n < 1) {
        return 1;
    }
    printf("\nSequenza di passi:\n");
    hanoi('A', 'C', 'B', n);
    return 0;
}
```

Output con input 3 (verificato):

```
Inserisci il numero di dischi: 
Sequenza di passi:
Muovi disco 1 da A a C
Muovi 2 da A a B
Muovi disco 1 da C a B
Muovi 3 da A a C
Muovi disco 1 da B a A
Muovi 2 da B a C
Muovi disco 1 da A a C
```

L'albero delle chiamate, con `h(n, da, a, appoggio)`. I figli di ogni nodo sono: prima chiamata, mossa, seconda chiamata.

```
h(3,A,C,B)
├── h(2,A,B,C)
│   ├── h(1,A,C,B)          mossa 1: disco 1 A → C
│   ├── disco 2 A → B       mossa 2
│   └── h(1,C,B,A)          mossa 3: disco 1 C → B
├── disco 3 A → C           mossa 4
└── h(2,B,C,A)
    ├── h(1,B,A,C)          mossa 5: disco 1 B → A
    ├── disco 2 B → C       mossa 6
    └── h(1,A,C,B)          mossa 7: disco 1 A → C
```

Come si costruiscono i parametri dei figli: in `h(2,A,B,C)` la prima chiamata è `hanoi(da_piolo, piolo_appoggio, a_piolo, 1)`, cioè `h(1, A, C, B)`; la seconda è `hanoi(piolo_appoggio, a_piolo, da_piolo, 1)`, cioè `h(1, C, B, A)`. I numeri dei dischi mossi, letti in ordine, sono 1 2 1 3 1 2 1: lo stesso `righello(3)` di sopra.

**Quante mosse** (<span class="src">slide 54-55</span>). Sia $M(n)$ il numero di mosse con $n$ dischi.
- $M(1) = 1$ (caso base, una mossa).
- $M(n) = M(n-1) + 1 + M(n-1) = 2M(n-1) + 1$ (due sottoproblemi e la mossa del disco grande).

```
M(1) = 1
M(2) = 2·1 + 1 = 3
M(3) = 2·3 + 1 = 7
M(4) = 2·7 + 1 = 15        le 15 mosse delle slide 22-36
```

Per induzione $M(n) = 2^n - 1$: vale per $n = 1$ ($2 - 1 = 1$), e se $M(n-1) = 2^{n-1} - 1$ allora $M(n) = 2(2^{n-1} - 1) + 1 = 2^n - 1$. Con il programma: input 4 stampa 15 righe "Muovi" (verificato). Il prof aggiunge che questa è la soluzione **più breve**, e il grafico della slide 55 mostra $y = 2^n - 1$: crescita esponenziale, ogni disco in più raddoppia le mosse.

### Sommatoria su array

(<span class="src">slide 63-67</span>) La sommatoria $s(n) = \sum_{i=1}^{n} a_i$. La soluzione non ricorsiva usa un'istruzione iterativa (un `for`). La formulazione ricorsiva:

$$
s(n) = \sum_{i=1}^{n} a_i = a_n + s(n-1)
$$

con caso base $s(0) = 0$ (la somma di nessun numero). L'esercizio della slide 66: calcolarla in modo ricorsivo, con i coefficienti in un array, in una funzione `Sommatoria` chiamata dal `main`. La soluzione della slide 67:

```c
#include <stdio.h>

int Sommatoria(int arr[], int n)
{
    if (n <= 0)
        return 0;
    return arr[n - 1] + Sommatoria(arr, n - 1);
}

int main(void)
{
    int arr[5] = {1, 2, 3, 4, 5};

    printf("Sommatoria = %d\n", Sommatoria(arr, 5));
    return 0;
}
```

$a_n$ della formula è `arr[n - 1]`, perché l'array parte da 0. Il caso base è `n <= 0` e non `n == 0`: protegge anche da un `n` negativo passato per errore.

| chiamata | `n` | in sospeso | ritorna |
| --- | --- | --- | --- |
| `Sommatoria(arr, 5)` | 5 | `5 + ?` | 5 + 10 = 15 |
| `Sommatoria(arr, 4)` | 4 | `4 + ?` | 4 + 6 = 10 |
| `Sommatoria(arr, 3)` | 3 | `3 + ?` | 3 + 3 = 6 |
| `Sommatoria(arr, 2)` | 2 | `2 + ?` | 2 + 1 = 3 |
| `Sommatoria(arr, 1)` | 1 | `1 + ?` | 1 + 0 = 1 |
| `Sommatoria(arr, 0)` | 0 | caso base | 0 |

Output: `Sommatoria = 15` (verificato). Le somme si fanno al ritorno, dall'ultima riga alla prima: 1, poi 3, 6, 10, 15.

La nuvoletta della slide 67 chiede di sostituire l'inizializzazione con una sequenza di lunghezza arbitraria, definita da un parametro letto in ingresso. Senza VLA, con un massimo fisso:

```c
#include <stdio.h>

#define MAX 100

int Sommatoria(int arr[], int n)
{
    if (n <= 0)
        return 0;
    return arr[n - 1] + Sommatoria(arr, n - 1);
}

int main(void)
{
    int arr[MAX];
    int n;

    printf("Quanti numeri? ");
    if (scanf("%d", &n) != 1 || n < 0 || n > MAX) {
        return 1;
    }
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) {
            return 1;
        }
    }
    printf("Sommatoria = %d\n", Sommatoria(arr, n));
    return 0;
}
```

Con input `4 10 -3 7 1` stampa `Quanti numeri? Sommatoria = 15` (verificato: 10 - 3 + 7 + 1 = 15).

### Fattoriale

(<span class="src">slide 68-75</span>) La soluzione non ricorsiva (slide 69) moltiplica in un `for` da 2 a $n$. La ricorsiva (slide 70) copia la definizione $0! = 1$, $n! = n \cdot (n-1)!$:

```c
#include <stdio.h>

int Fatt(int n)
{
    int ris;
    ris = 1;
    for (int i = 2; i <= n; i++)
        ris = ris * i;
    return ris;
}

int FattRic(int n)
{
    if (n == 0)
        return 1;
    else
        return n * FattRic(n - 1);
}

int main(void)
{
    for (int n = 0; n <= 5; n++)
        printf("%d! = %d %d\n", n, Fatt(n), FattRic(n));
    printf("13! = %d\n", FattRic(13));
    return 0;
}
```

Output (verificato):

```
0! = 1 1
1! = 1 1
2! = 2 2
3! = 6 6
4! = 24 24
5! = 120 120
13! = 1932053504
```

L'ultima riga è sbagliata: $13! = 6\,227\,020\,800$ non sta in un `int` a 32 bit (massimo $2\,147\,483\,647$), e il risultato stampato è quello che resta dopo l'overflow. Per il C l'overflow di un `int` con segno è comportamento indefinito; con gcc qui si vede $13!$ modulo $2^{32}$. Il fattoriale in `int` è giusto solo fino a $12! = 479\,001\,600$.

Il programma completo della slide 71 ha una differenza: il caso base è `if(n==1) return 1;`, e il `main` stampa solo `if(n>0)`.

```c
#include <stdio.h>

int FattRic(int n)
{
    if (n == 1) return 1;
    else return n * FattRic(n - 1);
}

int main(void)
{
    int n;

    printf("Inserisci n: \n");
    if (scanf("%d", &n) != 1) {
        return 1;
    }
    if (n > 0) printf("%d!= %d\n", n, FattRic(n));
    return 0;
}
```

Con input 5 stampa `5!= 120`; con input 0 non stampa il risultato (verificato). Il controllo nel `main` serve: con il caso base `n <mark> 1`, `FattRic(0)` chiamerebbe `FattRic(-1)`, `FattRic(-2)`, ... senza mai arrivare a 1, fino a esaurire lo stack. Con il caso base `n </mark> 0` della slide 70 invece anche $0! = 1$ funziona. Nella slide manca anche il `\n` dopo il risultato; qui è aggiunto.

Le domande delle slide 73-75 e 83 (moltiplicazioni, confronti, memoria) sono risolte sopra, in Ricorsione contro iterazione. Lo stack della slide 82 è nella figura de La pila chiamata per chiamata.

### Lista inversa

(<span class="src">slide 72</span>) La lista inversa $L^{-1}$ di $L = \{a_1, \dots, a_n\}$:
- se $n = 1$, $L^{-1} = L$;
- altrimenti $L^{-1} = \{a_n, (L_{n-1})^{-1}\}$, dove $L_{n-1}$ è la lista ottenuta da $L$ cancellando l'ultimo elemento $a_n$.

L'esempio della slide, un passo per riga:

```
{2,7,5,4}^-1 = {4, {2,7,5}^-1}        tolgo l'ultimo (4) e lo metto davanti
             = {4,5, {2,7}^-1}        stessa regola su {2,7,5}
             = {4,5,7, {2}^-1}        stessa regola su {2,7}
             = {4,5,7,2}              caso base: un elemento solo
```

La slide non ha codice. Tradotta in C come stampa: si stampa l'ultimo elemento, poi la lista inversa dei primi $n-1$.

```c
#include <stdio.h>

void stampa_inversa(const int a[], int n)
{
    if (n == 1) {
        printf("%d\n", a[0]);
        return;
    }
    printf("%d,", a[n - 1]);
    stampa_inversa(a, n - 1);
}

int main(void)
{
    int L[4] = {2, 7, 5, 4};

    stampa_inversa(L, 4);
    return 0;
}
```

Output: `4,5,7,2` (verificato). Le chiamate sono con $n$ = 4, 3, 2, 1 e stampano `a[3]`, `a[2]`, `a[1]`, poi `a[0]` nel caso base. La versione che inverte l'array in memoria è `inverti`, in Ricorsione su array e stringhe.

### MCD ricorsivo

(<span class="src">slide 76-79</span>) L'esercizio parte dalla soluzione non ricorsiva con le sottrazioni (Euclide, come in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/)):

```
int mcd(int x, int y){
   while (x!=y)
     if (x>y) x-=y;
     else y -=x;
   return x;
}
```

e chiede la ricorsiva. **Soluzione 1** (slide 77), le sottrazioni: il ciclo diventa una chiamata con i nuovi valori, e la condizione di uscita `x == y` diventa il caso base.

```
int mcdRicorsiva(int x,int y){
  if(x>y)
    return mcdRicorsiva(x-y,y);
      else if(x<y)
        return mcdRicorsiva(y-x,x);
            else return x;
}
```

**Soluzione 2** (slide 79), con il resto: $MCD(x, 0) = x$, e $MCD(x, y) = MCD(y, x \% y)$.

```
int mcdRicorsiva(int x,int y){
   return y==0 ? x :
          mcdRicorsiva(y,x%y);
}
```

Nella soluzione della slide 78 le due versioni stanno nello stesso file, con la 2 commentata, e il `main` legge `a` e `b` e stampa `MCD(%d,%d)=%d`. Qui le due versioni con una `printf` a ogni chiamata, per vedere i parametri:

```c
#include <stdio.h>

int mcd1(int x, int y)
{
    printf("mcd1(%d,%d)\n", x, y);
    if (x > y)
        return mcd1(x - y, y);
    else if (x < y)
        return mcd1(y - x, x);
    else
        return x;
}

int mcd2(int x, int y)
{
    printf("mcd2(%d,%d)\n", x, y);
    return y == 0 ? x : mcd2(y, x % y);
}

int main(void)
{
    printf("= %d\n", mcd1(12, 18));
    printf("= %d\n", mcd2(12, 18));
    printf("= %d\n", mcd2(18, 12));
    return 0;
}
```

Output (verificato):

```
mcd1(12,18)
mcd1(6,12)
mcd1(6,6)
= 6
mcd2(12,18)
mcd2(18,12)
mcd2(12,6)
mcd2(6,0)
= 6
mcd2(18,12)
mcd2(12,6)
mcd2(6,0)
= 6
```

| chiamata | `x` | `y` | regola | prossima |
| --- | --- | --- | --- | --- |
| `mcd1` | 12 | 18 | $x < y$: `(y-x, x)` | (6, 12) |
| `mcd1` | 6 | 12 | $x < y$: `(y-x, x)` | (6, 6) |
| `mcd1` | 6 | 6 | $x = y$: caso base | ritorna 6 |
| `mcd2` | 12 | 18 | `12 % 18` = 12 | (18, 12) |
| `mcd2` | 18 | 12 | `18 % 12` = 6 | (12, 6) |
| `mcd2` | 12 | 6 | `12 % 6` = 0 | (6, 0) |
| `mcd2` | 6 | 0 | $y = 0$: caso base | ritorna 6 |

Se $x < y$ la soluzione 2 spende una chiamata per scambiarli: `12 % 18` vale 12, e la chiamata dopo è `mcd2(18, 12)`. Dopo, le due righe di output coincidono con quelle di `mcd2(18, 12)`.

In entrambe le versioni la chiamata ricorsiva è l'**ultima cosa** che la funzione fa (il suo risultato si restituisce così com'è, senza calcoli in sospeso). Al ritorno non c'è niente da fare: il 6 risale invariato.

### Passaggio per indirizzo

(<span class="src">slide 84-85</span>) "Qual è il risultato dell'esecuzione di questa funzione?"

```c
#include <stdio.h>

void incrementa(int *n, int m)
{
    if (m != 0) {
        *n = *n + 1;
        incrementa(n, m - 1);
    }
}

int main(void)
{
    int x = 2;
    int y = 3;

    incrementa(&x, y);
    printf("x=%d y=%d\n", x, y);
    return 0;
}
```

Somma `m` a `*n`, un'unità per chiamata. Nella slide 85 il prof parte da $x = 2$ e $y = 3$:

| attivazione | `m` (copia propria) | `n` | `*n` dopo `*n = *n + 1` |
| --- | --- | --- | --- |
| prima | 3 | `&x` | `x` = 3 |
| seconda | 2 | `&x` | `x` = 4 |
| terza | 1 | `&x` | `x` = 5 |
| quarta | 0 | `&x` | `m != 0` falso, niente |

Output: `x=5 y=3` (verificato). Nel disegno della slide il riquadro di `x` nell'area dati della funzione chiamante ha i valori 2, 3, 4, 5 cancellati uno dopo l'altro, e da ogni record parte una freccia verso quello stesso riquadro. Il punto: `m` è passato **per valore**, quindi ogni attivazione ha la sua copia (3, 2, 1, 0) e `y` nel `main` resta 3. `n` contiene un **indirizzo**, lo stesso in tutte le attivazioni: tutte modificano la stessa `x`.

### Fibonacci

(<span class="src">slide 92-104</span>) "Riconoscete questa successione?" 0, 1, 1, 2, 3, 5, 8, 13, ... Sono i **numeri di Fibonacci**:
- $f_0 = 0$;
- $f_1 = 1$;
- per $n > 1$, $f_n = f_{n-1} + f_{n-2}$.

L'esempio della slide 94, un passo per riga:

```
f2 = f1 + f0 = 1 + 0 = 1
f3 = f2 + f1 = 1 + 1 = 2
f4 = f3 + f2 = 2 + 1 = 3
```

Qui i casi base sono **due**: il caso induttivo usa i due valori precedenti, quindi servono $f_0$ e $f_1$ per partire. La soluzione delle slide 96-97, con `int main(void)` e il controllo di `scanf` (la slide dichiara anche un `int ris;` che non usa):

```c
#include <stdio.h>

int Fibo(int n)
{
    if (!n)
        return 0;
    else if (n == 1)
        return 1;
    else
        return Fibo(n - 1) + Fibo(n - 2);
}

int main(void)
{
    int n;

    printf("Inserisci n: \n");
    if (scanf("%d", &n) != 1) {
        return 1;
    }
    for (int i = 0; i <= n; i++)
        printf("Fibonacci(%d)=%d\n", i, Fibo(i));
    return 0;
}
```

Output con input 6 (verificato):

```
Inserisci n: 
Fibonacci(0)=0
Fibonacci(1)=1
Fibonacci(2)=1
Fibonacci(3)=2
Fibonacci(4)=3
Fibonacci(5)=5
Fibonacci(6)=8
```

`if (!n)` vuol dire `if (n == 0)`: `!n` vale 1 solo quando `n` è 0 ([Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/)).

**Tempo di esecuzione** (<span class="src">slide 98-100</span>). "Il tempo di esecuzione di un algoritmo è funzione del numero di istruzioni (confronti, operazioni aritmetiche, ...) necessarie per portarlo a termine." Per $F(n) = F(n-1) + F(n-2)$ cresce **esponenzialmente**: la slide 99 mostra il grafico dei secondi in funzione di $n$, piatto fino a 40 e poi verticale, e dice che $T_{Fibonacci}(n)$ si comporta come $a^n$.

**Albero di esecuzione** (<span class="src">slide 100-104</span>). Il prof disegna gli alberi per $n$ = 3, 4, 5, 6 e colora in verde i termini che vengono ricalcolati. La figura qui è quella di $F(5)$ con tutte le chiamate che il codice fa davvero, numerate nell'ordine in cui avvengono:

<figure class="fig"><svg role="img" aria-label="Albero chiamate Fibonacci" xmlns:xlink="http://www.w3.org/1999/xlink" width="624.99541pt" height="310.896pt" viewBox="0 0 624.99541 310.896" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f8243a4-figure_1"> <g id="f8243a4-patch_1"> <path d="M 0 310.896 L 624.99541 310.896 L 624.99541 0 L 0 0 L 0 310.896 z " style="fill: none"/> </g> <g id="f8243a4-axes_1"> <g id="f8243a4-patch_2"> <path d="M 347.03637 52.384131 L 382.863334 52.384131 Q 385.808016 52.384131 385.808016 49.439449 L 385.808016 30.789797 Q 385.808016 27.845115 382.863334 27.845115 L 347.03637 27.845115 Q 344.091689 27.845115 344.091689 30.789797 L 344.091689 49.439449 Q 344.091689 52.384131 347.03637 52.384131 L 347.03637 52.384131 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_3"> <path d="M 204.403338 108.823869 L 240.230302 108.823869 Q 243.174984 108.823869 243.174984 105.879187 L 243.174984 87.229534 Q 243.174984 84.284852 240.230302 84.284852 L 204.403338 84.284852 Q 201.458656 84.284852 201.458656 87.229534 L 201.458656 105.879187 Q 201.458656 108.823869 204.403338 108.823869 L 204.403338 108.823869 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_4"> <path d="M 121.584157 165.263607 L 157.411121 165.263607 Q 160.355803 165.263607 160.355803 162.318925 L 160.355803 143.669272 Q 160.355803 140.72459 157.411121 140.72459 L 121.584157 140.72459 Q 118.639475 140.72459 118.639475 143.669272 L 118.639475 162.318925 Q 118.639475 165.263607 121.584157 165.263607 L 121.584157 165.263607 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_5"> <path d="M 66.37137 221.703344 L 102.198334 221.703344 Q 105.143016 221.703344 105.143016 218.758662 L 105.143016 200.10901 Q 105.143016 197.164328 102.198334 197.164328 L 66.37137 197.164328 Q 63.426689 197.164328 63.426689 200.10901 L 63.426689 218.758662 Q 63.426689 221.703344 66.37137 221.703344 L 66.37137 221.703344 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_6"> <path d="M 29.562846 278.143082 L 65.38981 278.143082 Q 68.334492 278.143082 68.334492 275.1984 L 68.334492 256.548748 Q 68.334492 253.604066 65.38981 253.604066 L 29.562846 253.604066 Q 26.618164 253.604066 26.618164 256.548748 L 26.618164 275.1984 Q 26.618164 278.143082 29.562846 278.143082 L 29.562846 278.143082 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_7"> <path d="M 103.179895 278.143082 L 139.006859 278.143082 Q 141.951541 278.143082 141.951541 275.1984 L 141.951541 256.548748 Q 141.951541 253.604066 139.006859 253.604066 L 103.179895 253.604066 Q 100.235213 253.604066 100.235213 256.548748 L 100.235213 275.1984 Q 100.235213 278.143082 103.179895 278.143082 L 103.179895 278.143082 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_8"> <path d="M 176.796944 221.703344 L 212.623908 221.703344 Q 215.56859 221.703344 215.56859 218.758662 L 215.56859 200.10901 Q 215.56859 197.164328 212.623908 197.164328 L 176.796944 197.164328 Q 173.852262 197.164328 173.852262 200.10901 L 173.852262 218.758662 Q 173.852262 221.703344 176.796944 221.703344 L 176.796944 221.703344 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_9"> <path d="M 287.222518 165.263607 L 323.049482 165.263607 Q 325.994164 165.263607 325.994164 162.318925 L 325.994164 143.669272 Q 325.994164 140.72459 323.049482 140.72459 L 287.222518 140.72459 Q 284.277836 140.72459 284.277836 143.669272 L 284.277836 162.318925 Q 284.277836 165.263607 287.222518 165.263607 L 287.222518 165.263607 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_10"> <path d="M 250.413993 221.703344 L 286.240957 221.703344 Q 289.185639 221.703344 289.185639 218.758662 L 289.185639 200.10901 Q 289.185639 197.164328 286.240957 197.164328 L 250.413993 197.164328 Q 247.469311 197.164328 247.469311 200.10901 L 247.469311 218.758662 Q 247.469311 221.703344 250.413993 221.703344 L 250.413993 221.703344 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_11"> <path d="M 324.031043 221.703344 L 359.858007 221.703344 Q 362.802689 221.703344 362.802689 218.758662 L 362.802689 200.10901 Q 362.802689 197.164328 359.858007 197.164328 L 324.031043 197.164328 Q 321.086361 197.164328 321.086361 200.10901 L 321.086361 218.758662 Q 321.086361 221.703344 324.031043 221.703344 L 324.031043 221.703344 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_12"> <path d="M 489.669403 108.823869 L 525.496367 108.823869 Q 528.441049 108.823869 528.441049 105.879187 L 528.441049 87.229534 Q 528.441049 84.284852 525.496367 84.284852 L 489.669403 84.284852 Q 486.724721 84.284852 486.724721 87.229534 L 486.724721 105.879187 Q 486.724721 108.823869 489.669403 108.823869 L 489.669403 108.823869 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_13"> <path d="M 434.456616 165.263607 L 470.28358 165.263607 Q 473.228262 165.263607 473.228262 162.318925 L 473.228262 143.669272 Q 473.228262 140.72459 470.28358 140.72459 L 434.456616 140.72459 Q 431.511934 140.72459 431.511934 143.669272 L 431.511934 162.318925 Q 431.511934 165.263607 434.456616 165.263607 L 434.456616 165.263607 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_14"> <path d="M 397.648092 221.703344 L 433.475056 221.703344 Q 436.419738 221.703344 436.419738 218.758662 L 436.419738 200.10901 Q 436.419738 197.164328 433.475056 197.164328 L 397.648092 197.164328 Q 394.70341 197.164328 394.70341 200.10901 L 394.70341 218.758662 Q 394.70341 221.703344 397.648092 221.703344 L 397.648092 221.703344 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_15"> <path d="M 471.265141 221.703344 L 507.092105 221.703344 Q 510.036787 221.703344 510.036787 218.758662 L 510.036787 200.10901 Q 510.036787 197.164328 507.092105 197.164328 L 471.265141 197.164328 Q 468.320459 197.164328 468.320459 200.10901 L 468.320459 218.758662 Q 468.320459 221.703344 471.265141 221.703344 L 471.265141 221.703344 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-patch_16"> <path d="M 544.88219 165.263607 L 580.709154 165.263607 Q 583.653836 165.263607 583.653836 162.318925 L 583.653836 143.669272 Q 583.653836 140.72459 580.709154 140.72459 L 544.88219 140.72459 Q 541.937508 140.72459 541.937508 143.669272 L 541.937508 162.318925 Q 541.937508 165.263607 544.88219 165.263607 L 544.88219 165.263607 z " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-axis); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f8243a4-line2d_1"> <path d="M 364.949852 52.384131 L 222.31682 84.284852 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_2"> <path d="M 222.31682 108.823869 L 139.497639 140.72459 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_3"> <path d="M 139.497639 165.263607 L 84.284852 197.164328 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_4"> <path d="M 84.284852 221.703344 L 47.476328 253.604066 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_5"> <path d="M 84.284852 221.703344 L 121.093377 253.604066 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_6"> <path d="M 139.497639 165.263607 L 194.710426 197.164328 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_7"> <path d="M 222.31682 108.823869 L 305.136 140.72459 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_8"> <path d="M 305.136 165.263607 L 268.327475 197.164328 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_9"> <path d="M 305.136 165.263607 L 341.944525 197.164328 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_10"> <path d="M 364.949852 52.384131 L 507.582885 84.284852 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_11"> <path d="M 507.582885 108.823869 L 452.370098 140.72459 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_12"> <path d="M 452.370098 165.263607 L 415.561574 197.164328 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_13"> <path d="M 452.370098 165.263607 L 489.178623 197.164328 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-line2d_14"> <path d="M 507.582885 108.823869 L 562.795672 140.72459 " clip-path="url(#f8243a4-p851bf7e6cc)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.3; stroke-linecap: square"/> </g> <g id="f8243a4-text_1"> <!-- F(5) --> <g style="fill: var(--fig-ink)" transform="translate(353.869892 42.842572) scale(0.105 -0.105)"> <defs> <path id="f8243a4-DejaVuSerif-29" d="M 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 4172 4666 L 4172 3628 L 3788 3628 L 3788 4281 L 1581 4281 L 1581 2719 L 3175 2719 L 3175 3303 L 3559 3303 L 3559 1753 L 3175 1753 L 3175 2338 L 1581 2338 L 1581 331 L 2328 331 L 2328 0 L 353 0 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-18" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_2"> <!-- 1 --> <g style="fill: var(--fig-steel)" transform="translate(336.547787 24.696289) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-14"/> </g> </g> <g id="f8243a4-text_3"> <!-- →5 --> <g style="fill: var(--fig-axis)" transform="translate(388.261918 24.696289) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSansMono-7a6" d="M 3647 1625 L 2738 716 L 2456 997 L 2956 1497 L 206 1497 L 206 2009 L 2956 2009 L 2456 2509 L 2738 2791 L 3647 1881 L 3647 1625 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSansMono-18" d="M 647 4666 L 3009 4666 L 3009 4134 L 1222 4134 L 1222 2988 Q 1356 3038 1492 3061 Q 1628 3084 1766 3084 Q 2491 3084 2916 2656 Q 3341 2228 3341 1497 Q 3341 759 2895 334 Q 2450 -91 1678 -91 Q 1306 -91 998 -41 Q 691 9 447 109 L 447 750 Q 734 594 1025 517 Q 1316 441 1619 441 Q 2141 441 2423 716 Q 2706 991 2706 1497 Q 2706 1997 2414 2275 Q 2122 2553 1600 2553 Q 1347 2553 1106 2495 Q 866 2438 647 2322 L 647 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-18" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_4"> <!-- F(4) --> <g style="fill: var(--fig-ink)" transform="translate(211.236859 99.28231) scale(0.105 -0.105)"> <defs> <path id="f8243a4-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-17" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_5"> <!-- 2 --> <g style="fill: var(--fig-steel)" transform="translate(193.914754 81.136027) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-15"/> </g> </g> <g id="f8243a4-text_6"> <!-- →3 --> <g style="fill: var(--fig-axis)" transform="translate(245.628885 81.136027) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-16" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_7"> <!-- F(3) --> <g style="fill: var(--fig-accent)" transform="translate(128.417678 155.722048) scale(0.105 -0.105)"> <defs> <path id="f8243a4-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-16" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_8"> <!-- 3 --> <g style="fill: var(--fig-steel)" transform="translate(111.095574 137.575764) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-16"/> </g> </g> <g id="f8243a4-text_9"> <!-- →2 --> <g style="fill: var(--fig-axis)" transform="translate(162.809705 137.575764) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-15" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_10"> <!-- F(2) --> <g style="fill: var(--fig-ink)" transform="translate(73.204892 212.161785) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-15" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_11"> <!-- 4 --> <g style="fill: var(--fig-steel)" transform="translate(55.882787 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-17"/> </g> </g> <g id="f8243a4-text_12"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(107.596918 194.015502) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_13"> <!-- F(1) --> <g style="fill: var(--fig-axis)" transform="translate(36.396367 268.601523) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-14" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_14"> <!-- 5 --> <g style="fill: var(--fig-steel)" transform="translate(19.074262 250.45524) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-18"/> </g> </g> <g id="f8243a4-text_15"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(70.788393 250.45524) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_16"> <!-- F(0) --> <g style="fill: var(--fig-axis)" transform="translate(110.013416 268.601523) scale(0.105 -0.105)"> <defs> <path id="f8243a4-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-13" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_17"> <!-- 6 --> <g style="fill: var(--fig-steel)" transform="translate(92.691311 250.45524) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-19"/> </g> </g> <g id="f8243a4-text_18"> <!-- →0 --> <g style="fill: var(--fig-axis)" transform="translate(144.405443 250.45524) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-13" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_19"> <!-- F(1) --> <g style="fill: var(--fig-axis)" transform="translate(183.630465 212.161785) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-14" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_20"> <!-- 7 --> <g style="fill: var(--fig-steel)" transform="translate(166.308361 194.015502) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-1a"/> </g> </g> <g id="f8243a4-text_21"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(218.022492 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_22"> <!-- F(2) --> <g style="fill: var(--fig-ink)" transform="translate(294.056039 155.722048) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-15" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_23"> <!-- 8 --> <g style="fill: var(--fig-steel)" transform="translate(276.733934 137.575764) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-1b"/> </g> </g> <g id="f8243a4-text_24"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(328.448066 137.575764) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_25"> <!-- F(1) --> <g style="fill: var(--fig-axis)" transform="translate(257.247514 212.161785) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-14" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_26"> <!-- 9 --> <g style="fill: var(--fig-steel)" transform="translate(239.92541 194.015502) scale(0.08 -0.08)"> <defs> <path id="f8243a4-DejaVuSerif-1c" d="M 2994 2091 Q 2784 1856 2512 1740 Q 2241 1625 1900 1625 Q 1206 1625 804 2044 Q 403 2463 403 3188 Q 403 3897 839 4323 Q 1275 4750 2003 4750 Q 2794 4750 3217 4161 Q 3641 3572 3641 2478 Q 3641 1253 3137 581 Q 2634 -91 1722 -91 Q 1475 -91 1203 -44 Q 931 3 647 97 L 647 872 L 997 872 Q 1038 556 1241 387 Q 1444 219 1784 219 Q 2391 219 2687 676 Q 2984 1134 2994 2091 z M 1978 4441 Q 1534 4441 1298 4117 Q 1063 3794 1063 3188 Q 1063 2581 1298 2256 Q 1534 1931 1978 1931 Q 2422 1931 2658 2245 Q 2894 2559 2894 3150 Q 2894 3772 2656 4106 Q 2419 4441 1978 4441 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-1c"/> </g> </g> <g id="f8243a4-text_27"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(291.639541 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_28"> <!-- F(0) --> <g style="fill: var(--fig-axis)" transform="translate(330.864564 212.161785) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-13" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_29"> <!-- 10 --> <g style="fill: var(--fig-steel)" transform="translate(308.452459 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-14"/> <use xlink:href="#f8243a4-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> <g id="f8243a4-text_30"> <!-- →0 --> <g style="fill: var(--fig-axis)" transform="translate(365.25659 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-13" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_31"> <!-- F(3) --> <g style="fill: var(--fig-accent)" transform="translate(496.502924 99.28231) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-16" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_32"> <!-- 11 --> <g style="fill: var(--fig-steel)" transform="translate(474.09082 81.136027) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-14"/> <use xlink:href="#f8243a4-DejaVuSerif-14" transform="translate(63.625 0)"/> </g> </g> <g id="f8243a4-text_33"> <!-- →2 --> <g style="fill: var(--fig-axis)" transform="translate(530.894951 81.136027) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-15" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_34"> <!-- F(2) --> <g style="fill: var(--fig-ink)" transform="translate(441.290137 155.722048) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-15" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_35"> <!-- 12 --> <g style="fill: var(--fig-steel)" transform="translate(418.878033 137.575764) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-14"/> <use xlink:href="#f8243a4-DejaVuSerif-15" transform="translate(63.625 0)"/> </g> </g> <g id="f8243a4-text_36"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(475.682164 137.575764) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_37"> <!-- F(1) --> <g style="fill: var(--fig-axis)" transform="translate(404.481613 212.161785) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-14" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_38"> <!-- 13 --> <g style="fill: var(--fig-steel)" transform="translate(382.069508 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-14"/> <use xlink:href="#f8243a4-DejaVuSerif-16" transform="translate(63.625 0)"/> </g> </g> <g id="f8243a4-text_39"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(438.873639 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_40"> <!-- F(0) --> <g style="fill: var(--fig-axis)" transform="translate(478.098662 212.161785) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-13" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_41"> <!-- 14 --> <g style="fill: var(--fig-steel)" transform="translate(455.686557 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-14"/> <use xlink:href="#f8243a4-DejaVuSerif-17" transform="translate(63.625 0)"/> </g> </g> <g id="f8243a4-text_42"> <!-- →0 --> <g style="fill: var(--fig-axis)" transform="translate(512.490689 194.015502) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-13" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_43"> <!-- F(1) --> <g style="fill: var(--fig-axis)" transform="translate(551.715711 155.722048) scale(0.105 -0.105)"> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-14" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> </g> </g> <g id="f8243a4-text_44"> <!-- 15 --> <g style="fill: var(--fig-steel)" transform="translate(529.303607 137.575764) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSerif-14"/> <use xlink:href="#f8243a4-DejaVuSerif-18" transform="translate(63.625 0)"/> </g> </g> <g id="f8243a4-text_45"> <!-- →1 --> <g style="fill: var(--fig-axis)" transform="translate(586.107738 137.575764) scale(0.08 -0.08)"> <use xlink:href="#f8243a4-DejaVuSansMono-7a6"/> <use xlink:href="#f8243a4-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f8243a4-text_46"> <!-- numero blu = ordine di chiamata --> <g style="fill: var(--fig-axis)" transform="translate(10.667803 18.837247) scale(0.095 -0.095)"> <defs> <path id="f8243a4-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-4b" d="M 263 0 L 263 331 L 781 331 L 781 4531 L 231 4531 L 231 4863 L 1356 4863 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2704 2764 Q 2556 2988 2175 2988 Q 1775 2988 1565 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-51"/> <use xlink:href="#f8243a4-DejaVuSerif-58" transform="translate(64.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-50" transform="translate(128.8125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(223.640625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(282.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(330.625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(390.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-45" transform="translate(422.609375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4f" transform="translate(486.625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-58" transform="translate(518.609375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(583.015625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-20" transform="translate(614.796875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(698.59375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(730.375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(790.578125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-47" transform="translate(838.375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(902.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-51" transform="translate(934.375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(998.78125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1057.96875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-47" transform="translate(1089.75 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(1153.765625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1185.75 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-46" transform="translate(1217.53125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4b" transform="translate(1273.53125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(1337.9375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(1369.921875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-50" transform="translate(1429.546875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(1524.375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-57" transform="translate(1584 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(1624.1875 0)"/> </g> <!-- → valore restituito --> <g style="fill: var(--fig-axis)" transform="translate(10.667803 30.239844) scale(0.095 -0.095)"> <defs> <path id="f8243a4-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-854"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(83.796875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-59" transform="translate(115.578125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(172.078125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4f" transform="translate(231.703125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(263.6875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(323.890625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(371.6875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(430.875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(462.65625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(510.453125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(569.640625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-57" transform="translate(620.953125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(661.140625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-57" transform="translate(693.125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-58" transform="translate(733.3125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(797.71875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-57" transform="translate(829.703125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(869.890625 0)"/> </g> <!-- F(3) in rosso: calcolato due volte --> <g style="fill: var(--fig-axis)" transform="translate(10.667803 41.642442) scale(0.095 -0.095)"> <defs> <path id="f8243a4-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-16" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(211.046875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(242.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-51" transform="translate(274.8125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(339.21875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(371 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(418.796875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(479 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(530.3125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(581.625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-1d" transform="translate(641.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(675.515625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-46" transform="translate(707.296875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(763.296875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4f" transform="translate(822.921875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-46" transform="translate(854.90625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(910.90625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4f" transform="translate(971.109375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(1003.09375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-57" transform="translate(1062.71875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(1102.90625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1163.109375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-47" transform="translate(1194.890625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-58" transform="translate(1258.90625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(1323.3125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1382.5 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-59" transform="translate(1414.28125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(1470.78125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4f" transform="translate(1530.984375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-57" transform="translate(1562.96875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(1603.15625 0)"/> </g> <!-- F(1) e F(0) grigi: casi base --> <g style="fill: var(--fig-axis)" transform="translate(10.667803 53.04504) scale(0.095 -0.095)"> <defs> <path id="f8243a4-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-29"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(69.390625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-14" transform="translate(108.40625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(172.03125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(211.046875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(242.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(302.015625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-29" transform="translate(333.796875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(403.1875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-13" transform="translate(442.203125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(505.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(544.84375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4a" transform="translate(576.625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(640.640625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(688.4375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4a" transform="translate(720.421875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(784.4375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-1d" transform="translate(816.421875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(850.109375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-46" transform="translate(881.890625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(937.890625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(997.515625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(1048.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1080.8125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-45" transform="translate(1112.59375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(1176.609375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(1236.234375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(1287.546875 0)"/> </g> </g> <g id="f8243a4-text_47"> <!-- 15 chiamate per F(5): 8 casi base (le foglie) e 7 passi ricorsivi --> <g style="fill: var(--fig-ink)" transform="translate(147.799463 298.048343) scale(0.105 -0.105)"> <defs> <path id="f8243a4-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f8243a4-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f8243a4-DejaVuSerif-14"/> <use xlink:href="#f8243a4-DejaVuSerif-18" transform="translate(63.625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(127.25 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-46" transform="translate(159.03125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4b" transform="translate(215.03125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(279.4375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(311.421875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-50" transform="translate(371.046875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(465.875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-57" transform="translate(525.5 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(565.6875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(624.875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-53" transform="translate(656.65625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(720.671875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(779.859375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(827.65625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-29" transform="translate(859.4375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(928.828125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-18" transform="translate(967.84375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(1031.46875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-1d" transform="translate(1070.484375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1104.171875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-1b" transform="translate(1135.953125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1199.578125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-46" transform="translate(1231.359375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(1287.359375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(1346.984375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(1398.296875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1430.28125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-45" transform="translate(1462.0625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(1526.078125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(1585.703125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(1637.015625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1696.203125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-b" transform="translate(1727.984375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4f" transform="translate(1767 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(1798.984375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(1858.171875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-49" transform="translate(1889.953125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(1926.96875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4a" transform="translate(1987.171875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4f" transform="translate(2051.1875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(2083.171875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(2115.15625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-c" transform="translate(2174.34375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(2213.359375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-48" transform="translate(2245.140625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(2304.328125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-1a" transform="translate(2336.109375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(2399.734375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-53" transform="translate(2431.515625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-44" transform="translate(2495.53125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(2555.15625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(2606.46875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(2657.78125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-3" transform="translate(2689.765625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(2721.546875 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(2769.34375 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-46" transform="translate(2801.328125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-52" transform="translate(2857.328125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-55" transform="translate(2917.53125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-56" transform="translate(2965.328125 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(3016.640625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-59" transform="translate(3048.625 0)"/> <use xlink:href="#f8243a4-DejaVuSerif-4c" transform="translate(3105.125 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f8243a4-p851bf7e6cc"> <rect x="5.76" y="5.76" width="613.47541" height="299.376"/> </clipPath> </defs> </svg></figure>

Gli alberi delle slide si fermano a $F(2)$ e $F(1)$, come se $F(2)$ fosse un caso base. Con il codice della slide 96 invece $F(2)$ chiama $F(1)$ e $F(0)$: il conteggio vero delle chiamate per $F(5)$ è 15, non i 9 nodi del disegno. La slide 100, poi, disegna i figli di $F(3)$ come $F(1)$ e $F(2)$, in ordine scambiato rispetto al codice, che chiama prima `Fibo(n - 1)`.

"Quanti sono i nodi dell'albero per $F(n)$?" (slide 104). Contando tutte le chiamate: $C(n) = 1 + C(n-1) + C(n-2)$ con $C(0) = C(1) = 1$, quindi $C(n) = 2F(n+1) - 1$:

| $n$ | 2 | 3 | 4 | 5 | 6 | 10 | 30 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $F(n)$ | 1 | 2 | 3 | 5 | 8 | 55 | 832 040 |
| chiamate | 3 | 5 | 9 | 15 | 25 | 177 | 2 692 537 |

Controllo su $n = 6$: $F(7) = 13$, $2 \cdot 13 - 1 = 25$ (contate con uno script). Le chiamate crescono come i numeri di Fibonacci, cioè di un fattore circa 1,62 per ogni $n$ in più: per questo il grafico della slide 99 esplode.

Overflow: `Fibo` restituisce un `int`. $F(46) = 1\,836\,311\,903$ ci sta, $F(47) = 2\,971\,215\,073$ no; con la versione memoizzata qui sotto l'input 47 stampa `Fibonacci(47)=-1323752223` (verificato).

**Memoization** (<span class="src">slide 105-106</span>). Nel codice della slide 106 il commento dice che la memoization abbassa la complessità di Fibo fino a renderla lineare. `Sol[n]` vale 0 finché $F(n)$ non è stato calcolato; poi contiene il valore, e le chiamate successive lo restituiscono subito.

```c
#include <stdio.h>

int Fibo(int n, int Sol[])
{
    if (!n)
        return 0;
    else if (n == 1)
        return 1;
    else if (Sol[n])
        return Sol[n];
    else
        return Sol[n] = Fibo(n - 1, Sol) + Fibo(n - 2, Sol);
}

int main(void)
{
    int n;
    int FiboS[100];

    for (n = 0; n < 100; n++)
        FiboS[n] = 0;
    printf("Inserisci n: \n");
    if (scanf("%d", &n) != 1 || n < 0 || n > 99) {
        return 1;
    }
    printf("Fibonacci(%d)=%d\n", n, Fibo(n, FiboS));
    return 0;
}
```

Output con input 46: `Fibonacci(46)=1836311903` (verificato). Due correzioni rispetto alla slide: il ciclo di azzeramento della slide va fino a `n<99` e lascia `FiboS[99]` non inizializzato (qui `n < 100`), e manca il controllo che `n` stia fra 0 e 99 (con `n` più grande si scrive fuori dall'array).

`return Sol[n] = ...` assegna e restituisce in un colpo: l'assegnazione è un'espressione e vale il valore assegnato ([Il Linguaggio C](/uni/prog-1/il-linguaggio-c/)). Il guadagno: nell'albero di $F(5)$ il sottoalbero di destra $F(3)$ (chiamate 11-15) diventa una sola chiamata che trova `Sol[3]` già pieno. In generale ogni $F(k)$ si calcola una volta, e le chiamate sono $2n - 1$: 9 per $n = 5$ invece di 15, 91 per $n = 46$ invece di quasi 6 miliardi (contate con uno script).

### La scala con passi da 1, 2 o 3, ricorsiva

(<span class="src">slide 107-116</span>) "Un bambino sale le scale con passi che coprono 1, 2 o 3 gradini alla volta. Formulare un algoritmo ricorsivo che, data la lunghezza della scala N, calcoli il numero di modi possibili di salire le scale." È il problema risolto con il ciclo in [Ciclo while ed esempi › La scala a passi da 1, 2 o 3](/uni/prog-1/ciclo-while-ed-esempi/#la-scala-a-passi-da-1-2-o-3).

**Soluzione** (slide 109): l'approccio è top-down. All'ultimo passo il bambino può aver fatto un passo singolo dalla posizione $n-1$, doppio da $n-2$, triplo da $n-3$. Il numero totale di modi è la somma dei modi di raggiungere $n-1$, $n-2$ e $n-3$. Nella nota sul `while` si ragiona sul **primo** passo, qui sull'**ultimo**: la ricorrenza che esce è la stessa.

```
int CountWays(int n ){
if (n<0) return 0;
    else if (n == 0) return 1;
    else
          return CountWays(n-1) +
                 CountWays(n-2) +
                 CountWays(n-3);
}
```

I due casi base hanno un significato:
- `n < 0`: si è saltato oltre la cima, quella sequenza di passi non vale, 0 modi;
- `n == 0`: si è esattamente in cima, la sequenza vale, 1 modo (quello di non fare più niente).

Non servono casi base per 1 e 2: `CountWays(1)` = `CountWays(0) + CountWays(-1) + CountWays(-2)` = 1 + 0 + 0 = 1.

**Rundown per $N = 3$** (slide 111-114), un passo per riga, abbreviando `CountWays` in `CW`:

```
CW(3) = CW(2) + CW(1) + CW(0)                              definizione con n = 3
      = [CW(1) + CW(0) + CW(-1)] + [CW(0) + CW(-1) + CW(-2)] + 1
                                                           espando CW(2) e CW(1); CW(0) = 1
      = [1 + 1 + 0] + [1 + 0 + 0] + 1                      CW(1) = 1 (sopra), CW(0) = 1, negativi 0
      = 4
```

Nella slide 114 il prof scrive `CW(1)` = 1 dentro la prima parentesi senza espanderlo. Il valore è giusto, ma il programma la chiamata `CW(1)` la fa, con le sue tre chiamate figlie. In tutto $CW(3)$ fa 13 chiamate:

```
CW(3)
├── CW(2)
│   ├── CW(1)
│   │   ├── CW(0) → 1
│   │   ├── CW(-1) → 0
│   │   └── CW(-2) → 0          CW(1) = 1
│   ├── CW(0) → 1
│   └── CW(-1) → 0              CW(2) = 2
├── CW(1)
│   ├── CW(0) → 1
│   ├── CW(-1) → 0
│   └── CW(-2) → 0              CW(1) = 1
└── CW(0) → 1                   CW(3) = 2 + 1 + 1 = 4
```

Il programma completo della slide 115 legge la lunghezza in un `unsigned int` e stampa "Il numero di modi di salire la scala è: %d". I valori per $n$ da 0 a 10, stampati da un ciclo: `1 1 2 4 7 13 24 44 81 149 274` (verificato).

**Le domande delle slide 115-116.** "Per quali N (lunghezza della scala) è corretta l'implementazione della funzione? 1, 10, 37, 100?" e "Confrontate il numero di operazioni del problema per la soluzione iterativa e ricorsiva. Ci sono problemi di overflow? Per quali delle soluzioni?"
- **Operazioni**: la versione con il ciclo fa un giro per gradino, cioè circa $N$ somme. La ricorsiva fa $C(N)$ chiamate con $C(N) = 1 + C(N-1) + C(N-2) + C(N-3)$: 13 per $N = 3$, 979 per $N = 10$, 192 299 281 per $N = 30$, circa $1{,}4 \cdot 10^{10}$ per $N = 37$ (contate con uno script).
- **Overflow**: $S(36) = 2\,082\,876\,103$ sta in un `int`, $S(37) = 3\,831\,006\,429$ supera $2^{31} - 1$. `CountWays` restituisce `int`, quindi da $N = 37$ il risultato è sbagliato **in entrambe** le soluzioni, se usano `int`. Con `unsigned int` si arriva fino a $N = 37$ (il limite è $2^{32} - 1 \approx 4{,}29 \cdot 10^9$), con `long long` molto più in là.
- **Quindi**: $N = 1$ e $N = 10$ vanno bene; con $N = 37$ il valore va in overflow e in più la ricorsiva impiega decine di secondi; con $N = 100$ la ricorsiva non finisce in nessun tempo ragionevole e il valore non sta in nessun tipo intero del C.

### I cammini del robot

(<span class="src">slide 117-122</span>) "Un robot si trova nell'angolo in alto a sinistra di una griglia $m \times n$. Può muoversi solo verso destra o verso il basso. Quanti percorsi distinti portano all'angolo in basso a destra?" Nella slide 117 il prof disegna a mano il robot, le frecce DESTRA e GIÙ, un percorso tratteggiato e l'ARRIVO in basso a destra.

Il ragionamento è quello della scala: all'arrivo si giunge o dalla cella sopra o da quella a sinistra, quindi i cammini sono la somma dei cammini verso quelle due celle. Se $m$ o $n$ vale 0 si è sul bordo, e c'è un solo cammino (sempre dritto). La soluzione della slide 118:

```
int Cammini(int m, int n){
    if (m == 0||n == 0) //per m=0 o n=0
        return 1 ;      //un solo cammino
    return Cammini(m - 1, n) +
           Cammini(m, n - 1);
}
```

Qui $m$ e $n$ sono quanti passi mancano verso il basso e verso destra, non il numero di celle. Esempio con $m = n = 2$, un passo per riga:

```
C(2,2) = C(1,2) + C(2,1)
C(1,2) = C(0,2) + C(1,1) = 1 + C(1,1)
C(1,1) = C(0,1) + C(1,0) = 1 + 1 = 2
C(1,2) = 1 + 2 = 3          e per simmetria C(2,1) = 3
C(2,2) = 3 + 3 = 6
```

Controllo: con 2 passi giù (G) e 2 a destra (D) le sequenze sono DDGG, DGDG, DGGD, GDDG, GDGD, GGDD, cioè 6.

"Questo algoritmo, sebbene corretto, può causare problemi o errori durante l'esecuzione. Quale meccanismo ci può aiutare ad evitare questi problemi? La memoization." Il problema è lo stesso di Fibonacci: `C(1,1)` si calcola sia dentro `C(1,2)` sia dentro `C(2,1)`. Per $m = n = 9$ la versione senza memo fa 97 239 chiamate (contate con uno script), per un risultato di 48 620.

**Con memoization** (slide 119-122). La matrice `memo` parte tutta a 0; `memo[m][n]` diverso da 0 vuol dire "già calcolato".

```c
#include <stdio.h>

int Cammini(int m, int n, int cols, int memo[][cols])
{
    if (m == 0 || n == 0)
        return 1;
    if (memo[m][n])
        return memo[m][n];
    memo[m][n] = Cammini(m - 1, n, cols, memo) + Cammini(m, n - 1, cols, memo);
    return memo[m][n];
}

int main(void)
{
    int i;
    int j;
    int Paths[10][10];

    for (i = 0; i < 10; i++)
        for (j = 0; j < 10; j++)
            Paths[i][j] = 0;
    printf("Numero di Cammini del Robot=%d\n", Cammini(9, 9, 10, Paths));
    printf("2x2: %d\n", Cammini(2, 2, 10, Paths));
    return 0;
}
```

Output (verificato):

```
Numero di Cammini del Robot=48620
2x2: 6
```

La seconda riga è aggiunta qui per controllare l'esempio a mano. La seconda chiamata trova `Paths[2][2]` già pieno dalla prima e restituisce subito 6. Il parametro `int memo[][cols]` passa una matrice di cui si conosce il numero di colonne solo a tempo di esecuzione ([Matrici e array multidimensionali](/uni/prog-1/matrici-e-array-multidimensionali/)): `cols` deve venire prima di `memo` nella lista dei parametri. Il risultato si controlla con il calcolo combinatorio: 18 passi di cui 9 verso il basso, $\binom{18}{9} = 48\,620$.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Ricorsione (esercizi)](/uni/prog-1/ricorsione-esercizi/).

## Errori tipici

- **Manca il caso base, o non si raggiunge**: la funzione si richiama all'infinito, lo stack si riempie e il programma si ferma con un crash. Il caso tipico è un passo che salta il caso base, come `f(n - 2)` partendo da un dispari con il caso base `n <mark> 0`, o `FattRic(0)` con il caso base `n </mark> 1`.
- **Il passo non si avvicina al caso base**: `f(n)` che chiama `f(n)`, o `f(n + 1)` con caso base `n == 0`.
- **Dimenticare il `return`** davanti alla chiamata ricorsiva in una funzione che restituisce un valore (`mcd(y, x % y);` invece di `return mcd(y, x % y);`): il valore calcolato si butta via e la funzione restituisce un valore indefinito. gcc con `-Wall` avvisa (`control reaches end of non-void function`).
- **Confondere l'ordine delle stampe**: quello che sta prima della chiamata esce scendendo, quello che sta dopo esce risalendo, in ordine inverso.
- **Credere che le variabili locali siano condivise** fra le chiamate: ognuna ha il suo record. Condivise lo sono solo le globali, le `static` e quelle raggiunte con un puntatore (come `x` in `incrementa`).
- **Fermarsi a $F(2)$ nell'albero di Fibonacci**: con i casi base 0 e 1, $F(2)$ fa altre due chiamate, e il conto delle chiamate cambia.
- **Usare la ricorsione multipla senza memoization** su valori grandi (Fibonacci, scala, cammini): tempo esponenziale.
- **Overflow**: fattoriale e Fibonacci escono presto dall'`int` (dopo $12!$ e $F(46)$).
- **Array di memo non azzerato** (o azzerato solo in parte, come `FiboS[99]` nella slide 106): una casella con un valore a caso viene presa per un risultato già calcolato.

## Domande

- Come definisce il prof il caso base e il caso induttivo di una formulazione induttiva?

- Quali sono i tre passi per risolvere il caso induttivo (slide 57)?

- Che differenza c'è fra ricorsione diretta e indiretta?

- Perché per eseguire una funzione ricorsiva non basta una cella per ogni parametro? Cos'è un record di attivazione?

- Perché la memoria delle chiamate si gestisce a pila? Cosa succede alla pila quando una funzione termina?

- Qual è la formulazione induttiva delle Torri di Hanoi? Quante mosse servono con $n$ dischi e perché?

- In che ordine escono le stampe che stanno prima della chiamata ricorsiva, e quelle che stanno dopo?

- Cosa stampa `entrambe(3)`, con `printf("%d ", n)` sia prima sia dopo la chiamata `entrambe(n - 1)` e caso base `n == 0`?

- Quante chiamate fa `FattRic(n)`? Quante moltiplicazioni e confronti fanno `Fatt` e `FattRic` per $n = 3$?

- Quanto vale `x` dopo `incrementa(&x, 3)` con `x = 2`, e perché `m` non cambia nel chiamante?

- Perché la `Fibo` ricorsiva impiega un tempo esponenziale? Quante chiamate fa per $n = 5$?

- Cos'è la memoization e come cambia il tempo di Fibonacci?

- Quali sono i casi base di `CountWays` e cosa significano? Quanto vale `CountWays(3)` e quante chiamate fa?

- Da quale $N$ la scala ricorsiva va in overflow con `int`, e perché con $N = 100$ è inutilizzabile anche senza overflow?

- Come si scrive il MCD ricorsivo con il resto, e qual è il suo caso base?

- Cosa succede se il caso base non viene mai raggiunto?

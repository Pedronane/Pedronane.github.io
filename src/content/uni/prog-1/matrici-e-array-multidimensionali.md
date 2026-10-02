---
title: Matrici e array multidimensionali
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-02
lezioni:
  - ott, giorno?
ordine: 11
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 4.1: <span class="src">slide 53-66</span> (dichiarazione, disposizione in memoria, inizializzazione, lettura e stampa), <span class="src">slide 67-73</span> (esercizi: lettura e stampa, matrice simmetrica), <span class="src">slide 93-100</span> (trasposta, matrici magiche). Prima: [Array](/uni/prog-1/array/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cosa dichiara `int a[N][M]` (righe, colonne, quanti elementi, valore iniziale), come una matrice sta in memoria (per righe, in modo lineare), quali inizializzazioni sono valide e perché in `int F[][2]` si può omettere solo la prima dimensione.
> - **Saper fare**: leggere e stampare una matrice con due `for` annidati; tracciare un programma che scrive `m[i][j]` con espressioni negli indici; calcolare la posizione lineare di `a[i][j]`; scrivere somme per riga, per colonna e sulle diagonali, trasposta, controllo di simmetria, controllo di matrice magica; contare i confronti eseguiti e ridurli.
> - **Dove esce**: la teorica chiede spesso di scrivere a mano un quadrato $N \times N$ a pattern con due cicli e una volta una matrice $10 \times 15$ di valori casuali (vedi [Esami passati](/uni/prog-1/esami-passati/)). Al calcolatore i due `for` annidati su righe e colonne sono lo stesso schema delle scansioni di array di contenitori.

Il filo della seconda parte del deck:

```
int a[10][5]          10 righe, 5 colonne, indici 0..9 e 0..4, a[i][j]
   |
in memoria            lineare: una riga dopo l'altra
   |
inizializzazione      {{...},{...}}, oppure lista piatta; si omette solo la prima dimensione
   |
lettura e stampa      due for annidati: righe fuori, colonne dentro
   |
simmetrica            a[i][j] == a[j][i]: quattro versioni, sempre meno confronti
   |
trasposta, magica     AT[i][j] = A[j][i]; somme di righe, colonne, diagonali
```

## Definizioni

**Array bidimensionale (matrice)** (<span class="src">slide 53-54</span>). In C si dichiara con due coppie di parentesi quadre:

```
int a[10][5];        matrice di 10 righe e 5 colonne
```

Gli indici vanno, come al solito, da 0 alla dimensione meno uno: le righe da 0 a 9, le colonne da 0 a 4. L'elemento in riga $i$ e colonna $j$ è `a[i][j]`. La dichiarazione `int a[N][M]` alloca $N \cdot M$ variabili intere, e il valore iniziale di ognuna è, al solito, **indefinito**.

Con una coppia di parentesi in più per ogni dimensione si dichiarano array a tre o più dimensioni: `int a[10][5][20]` ha $10 \cdot 5 \cdot 20 = 1000$ elementi.

**Assegnazione** (<span class="src">slide 58</span>). Con `int matrice[10][10];`, l'istruzione `matrice[2][4] = 12;` assegna 12 al **quinto elemento della terza riga**: gli indici partono da 0.

**Array di array**. Il titolo delle slide 65-66 dice cosa è davvero una matrice in C: `int a[4][5]` è un array di 4 elementi, ognuno dei quali è un array di 5 `int`. `a[1]` è la seconda riga intera, e `a[1][3]` è il quarto elemento di quella riga. Per questo le quadre si scrivono separate (`a[i][j]`, mai `a[i, j]`), e `sizeof(a[0])` è la dimensione di una riga.

**Disposizione in memoria** (<span class="src">slide 56-57</span>). Anche se accediamo agli elementi come a una tabella, la **rappresentazione in memoria è lineare**: il C memorizza le matrici **una riga dopo l'altra** (in inglese *row-major order*).

<figure class="fig"><svg role="img" aria-label="Matrice in memoria per righe" xmlns:xlink="http://www.w3.org/1999/xlink" width="565.92pt" height="322.026281pt" viewBox="0 0 565.92 322.026281" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f59-figure_1"> <g id="f59-patch_1"> <path d="M 0 322.026281 L 565.92 322.026281 L 565.92 -0 L 0 -0 L 0 322.026281 z " style="fill: none"/> </g> <g id="f59-axes_1"> <g id="f59-patch_2"> <path d="M 88.92 72.330281 L 130.5 72.330281 L 130.5 39.066281 L 88.92 39.066281 L 88.92 72.330281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_3"> <path d="M 130.5 72.330281 L 172.08 72.330281 L 172.08 39.066281 L 130.5 39.066281 L 130.5 72.330281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_4"> <path d="M 172.08 72.330281 L 213.66 72.330281 L 213.66 39.066281 L 172.08 39.066281 L 172.08 72.330281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_5"> <path d="M 213.66 72.330281 L 255.24 72.330281 L 255.24 39.066281 L 213.66 39.066281 L 213.66 72.330281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_6"> <path d="M 88.92 105.594281 L 130.5 105.594281 L 130.5 72.330281 L 88.92 72.330281 L 88.92 105.594281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_7"> <path d="M 130.5 105.594281 L 172.08 105.594281 L 172.08 72.330281 L 130.5 72.330281 L 130.5 105.594281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_8"> <path d="M 172.08 105.594281 L 213.66 105.594281 L 213.66 72.330281 L 172.08 72.330281 L 172.08 105.594281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_9"> <path d="M 213.66 105.594281 L 255.24 105.594281 L 255.24 72.330281 L 213.66 72.330281 L 213.66 105.594281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_10"> <path d="M 88.92 138.858281 L 130.5 138.858281 L 130.5 105.594281 L 88.92 105.594281 L 88.92 138.858281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_11"> <path d="M 130.5 138.858281 L 172.08 138.858281 L 172.08 105.594281 L 130.5 105.594281 L 130.5 138.858281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_12"> <path d="M 172.08 138.858281 L 213.66 138.858281 L 213.66 105.594281 L 172.08 105.594281 L 172.08 138.858281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_13"> <path d="M 213.66 138.858281 L 255.24 138.858281 L 255.24 105.594281 L 213.66 105.594281 L 213.66 138.858281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_14"> <path d="M 33.48 255.282281 L 75.06 255.282281 L 75.06 222.018281 L 33.48 222.018281 L 33.48 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_15"> <path d="M 75.06 255.282281 L 116.64 255.282281 L 116.64 222.018281 L 75.06 222.018281 L 75.06 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_16"> <path d="M 116.64 255.282281 L 158.22 255.282281 L 158.22 222.018281 L 116.64 222.018281 L 116.64 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_17"> <path d="M 158.22 255.282281 L 199.8 255.282281 L 199.8 222.018281 L 158.22 222.018281 L 158.22 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-accent); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_18"> <path d="M 199.8 255.282281 L 241.38 255.282281 L 241.38 222.018281 L 199.8 222.018281 L 199.8 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_19"> <path d="M 241.38 255.282281 L 282.96 255.282281 L 282.96 222.018281 L 241.38 222.018281 L 241.38 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_20"> <path d="M 282.96 255.282281 L 324.54 255.282281 L 324.54 222.018281 L 282.96 222.018281 L 282.96 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_21"> <path d="M 324.54 255.282281 L 366.12 255.282281 L 366.12 222.018281 L 324.54 222.018281 L 324.54 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_22"> <path d="M 366.12 255.282281 L 407.7 255.282281 L 407.7 222.018281 L 366.12 222.018281 L 366.12 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_23"> <path d="M 407.7 255.282281 L 449.28 255.282281 L 449.28 222.018281 L 407.7 222.018281 L 407.7 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_24"> <path d="M 449.28 255.282281 L 490.86 255.282281 L 490.86 222.018281 L 449.28 222.018281 L 449.28 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-patch_25"> <path d="M 490.86 255.282281 L 532.44 255.282281 L 532.44 222.018281 L 490.86 222.018281 L 490.86 255.282281 z " clip-path="url(#f59-p93c770790b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.6; stroke-linejoin: miter"/> </g> <g id="f59-text_1"> <!-- int m[3][4]: come la pensiamo --> <g style="fill: var(--fig-axis)" transform="translate(88.319297 14.118281) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-50" d="M 3503 2675 Q 3741 3041 4034 3227 Q 4328 3413 4672 3413 Q 5194 3413 5388 3088 Q 5503 2894 5503 2578 Q 5503 2372 5453 2113 L 5106 331 L 5625 331 L 5563 0 L 4469 0 L 4866 2047 Q 4913 2291 4913 2466 Q 4913 2659 4856 2772 Q 4750 2988 4403 2988 Q 4019 2988 3761 2697 Q 3503 2406 3394 1850 L 3034 0 L 2459 0 L 2863 2069 Q 2906 2303 2906 2472 Q 2906 2666 2850 2775 Q 2741 2988 2394 2988 Q 2009 2988 1751 2697 Q 1494 2406 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1778 3063 2059 3238 Q 2341 3413 2653 3413 Q 3041 3413 3262 3220 Q 3484 3028 3503 2675 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-3e" d="M 1106 4863 L 2559 4863 L 2497 4531 L 1641 4531 L 659 -513 L 1516 -513 L 1453 -844 L 0 -844 L 1106 4863 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-16" d="M 1038 4469 Q 1431 4606 1781 4678 Q 2131 4750 2425 4750 Q 3109 4750 3436 4454 Q 3763 4159 3659 3634 Q 3578 3213 3258 2930 Q 2938 2647 2431 2547 Q 2988 2466 3241 2130 Q 3494 1794 3388 1259 Q 3263 606 2755 257 Q 2247 -91 1422 -91 Q 1056 -91 723 -12 Q 391 66 78 225 L 253 1131 L 603 1131 Q 547 681 775 450 Q 1003 219 1497 219 Q 1975 219 2304 495 Q 2634 772 2728 1253 Q 2834 1803 2604 2086 Q 2375 2369 1825 2369 L 1528 2369 L 1591 2688 L 1747 2688 Q 2294 2688 2611 2914 Q 2928 3141 3019 3597 Q 3097 4006 2914 4223 Q 2731 4441 2309 4441 Q 1888 4441 1616 4241 Q 1344 4041 1228 3647 L 878 3647 L 1038 4469 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-40" d="M 2503 4863 L 1397 -844 L -56 -844 L 6 -513 L 862 -513 L 1844 4531 L 987 4531 L 1050 4863 L 2503 4863 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-17" d="M 2084 1581 L 2566 4063 L 491 1581 L 2084 1581 z M 3150 0 L 1025 0 L 1091 331 L 1841 331 L 2019 1247 L -19 1247 L 47 1588 L 2706 4750 L 3325 4750 L 2709 1581 L 3600 1581 L 3534 1247 L 2644 1247 L 2466 331 L 3216 331 L 3150 0 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-1d" d="M 529 29 Q 434 150 468 325 Q 503 500 647 622 Q 791 744 966 744 Q 1141 744 1237 622 Q 1334 500 1300 325 Q 1266 150 1123 29 Q 981 -91 803 -91 Q 625 -91 529 29 z M 926 2067 Q 828 2188 862 2363 Q 897 2538 1040 2658 Q 1184 2778 1359 2778 Q 1538 2778 1633 2659 Q 1728 2541 1693 2362 Q 1659 2184 1518 2065 Q 1378 1947 1200 1947 Q 1025 1947 926 2067 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-46" d="M 3163 997 Q 2938 466 2536 187 Q 2134 -91 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 475 2459 1008 2936 Q 1541 3413 2266 3413 Q 2581 3413 2879 3339 Q 3178 3266 3463 3116 L 3300 2266 L 2966 2266 Q 2966 2309 2966 2347 Q 2966 2722 2803 2903 Q 2622 3103 2213 3103 Q 1747 3103 1439 2742 Q 1131 2381 991 1663 Q 928 1334 928 1078 Q 928 778 1016 581 Q 1181 219 1650 219 Q 2022 219 2281 412 Q 2541 606 2700 997 L 3163 997 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-53" d="M 1466 1825 L 1400 1497 Q 1353 1250 1353 1053 Q 1353 769 1453 581 Q 1622 269 2059 269 Q 2500 269 2795 622 Q 3091 975 3225 1663 Q 3284 1978 3284 2225 Q 3284 2513 3200 2703 Q 3041 3053 2600 3053 Q 2163 3053 1872 2737 Q 1581 2422 1466 1825 z M 1116 2988 L 563 2988 L 628 3322 L 1756 3322 L 1656 2803 Q 1884 3116 2175 3264 Q 2466 3413 2850 3413 Q 3463 3413 3753 2928 Q 3947 2609 3947 2163 Q 3947 1928 3897 1663 Q 3744 881 3262 395 Q 2781 -91 2169 -91 Q 1784 -91 1551 57 Q 1319 206 1213 519 L 850 -1331 L 275 -1331 L 1116 2988 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-56" d="M 222 959 L 553 959 Q 541 869 541 788 Q 541 219 1313 219 Q 2088 219 2200 788 Q 2209 844 2209 944 Q 2209 1041 2103 1158 Q 1997 1275 1550 1428 L 1159 1569 Q 759 1706 629 1882 Q 500 2059 500 2263 Q 500 2344 516 2438 Q 606 2894 990 3153 Q 1375 3413 1931 3413 Q 2484 3413 3066 3144 L 2925 2419 L 2594 2419 Q 2606 2491 2606 2553 Q 2606 2781 2448 2942 Q 2291 3103 1925 3103 Q 1191 3103 1091 2591 Q 1078 2538 1078 2444 Q 1078 2347 1179 2237 Q 1281 2128 1678 1997 L 2106 1856 Q 2550 1709 2716 1488 Q 2831 1331 2831 1178 Q 2831 522 2306 181 Q 1894 -91 1262 -91 Q 631 -91 72 184 L 222 959 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-Italic-4c"/> <use xlink:href="#f59-DejaVuSerif-Italic-51" transform="translate(31.984375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-57" transform="translate(96.390625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(136.578125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-50" transform="translate(168.359375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3e" transform="translate(263.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-16" transform="translate(302.203125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-40" transform="translate(365.828125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3e" transform="translate(404.84375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-17" transform="translate(443.859375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-40" transform="translate(507.484375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-1d" transform="translate(546.5 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(580.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-46" transform="translate(611.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(667.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-50" transform="translate(728.171875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-48" transform="translate(823 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(882.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4f" transform="translate(913.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(945.953125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(1005.578125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-53" transform="translate(1037.359375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-48" transform="translate(1101.375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-51" transform="translate(1160.5625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-56" transform="translate(1224.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4c" transform="translate(1276.28125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(1308.265625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-50" transform="translate(1367.890625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(1462.71875 0)"/> </g> </g> <g id="f59-text_2"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(106.699844 33.347938) scale(0.1 -0.1)"> <defs> <path id="f59-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-13"/> </g> </g> <g id="f59-text_3"> <!-- 1 --> <g style="fill: var(--fig-axis)" transform="translate(148.279844 33.347938) scale(0.1 -0.1)"> <defs> <path id="f59-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-14"/> </g> </g> <g id="f59-text_4"> <!-- 2 --> <g style="fill: var(--fig-axis)" transform="translate(189.859844 33.347938) scale(0.1 -0.1)"> <defs> <path id="f59-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-15"/> </g> </g> <g id="f59-text_5"> <!-- 3 --> <g style="fill: var(--fig-axis)" transform="translate(231.439844 33.347938) scale(0.1 -0.1)"> <defs> <path id="f59-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-16"/> </g> </g> <g id="f59-text_6"> <!-- riga 0 --> <g style="fill: var(--fig-accent)" transform="translate(42.188906 58.555703) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-55"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-4a" transform="translate(79.78125 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(143.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(203.421875 0)"/> <use xlink:href="#f59-DejaVuSerif-13" transform="translate(235.203125 0)"/> </g> </g> <g id="f59-text_7"> <!-- 1 --> <g style="fill: var(--fig-accent)" transform="translate(105.8925 58.815469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-14"/> </g> </g> <g id="f59-text_8"> <!-- 2 --> <g style="fill: var(--fig-accent)" transform="translate(147.4725 58.815469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-15"/> </g> </g> <g id="f59-text_9"> <!-- 3 --> <g style="fill: var(--fig-accent)" transform="translate(189.0525 58.815469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-16"/> </g> </g> <g id="f59-text_10"> <!-- 4 --> <g style="fill: var(--fig-accent)" transform="translate(230.6325 58.815469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-17"/> </g> </g> <g id="f59-text_11"> <!-- riga 1 --> <g style="fill: var(--fig-steel)" transform="translate(42.188906 91.819703) scale(0.11 -0.11)"> <use xlink:href="#f59-DejaVuSerif-55"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-4a" transform="translate(79.78125 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(143.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(203.421875 0)"/> <use xlink:href="#f59-DejaVuSerif-14" transform="translate(235.203125 0)"/> </g> </g> <g id="f59-text_12"> <!-- 5 --> <g style="fill: var(--fig-steel)" transform="translate(105.8925 92.079469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-18"/> </g> </g> <g id="f59-text_13"> <!-- 6 --> <g style="fill: var(--fig-steel)" transform="translate(147.4725 92.079469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-19"/> </g> </g> <g id="f59-text_14"> <!-- 7 --> <g style="fill: var(--fig-steel)" transform="translate(189.0525 92.079469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-1a"/> </g> </g> <g id="f59-text_15"> <!-- 8 --> <g style="fill: var(--fig-steel)" transform="translate(230.6325 92.079469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-1b"/> </g> </g> <g id="f59-text_16"> <!-- riga 2 --> <g style="fill: var(--fig-ink)" transform="translate(42.188906 125.083703) scale(0.11 -0.11)"> <use xlink:href="#f59-DejaVuSerif-55"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(47.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-4a" transform="translate(79.78125 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(143.796875 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(203.421875 0)"/> <use xlink:href="#f59-DejaVuSerif-15" transform="translate(235.203125 0)"/> </g> </g> <g id="f59-text_17"> <!-- 9 --> <g style="fill: var(--fig-ink)" transform="translate(105.8925 125.343469) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-1c" d="M 2994 2091 Q 2784 1856 2512 1740 Q 2241 1625 1900 1625 Q 1206 1625 804 2044 Q 403 2463 403 3188 Q 403 3897 839 4323 Q 1275 4750 2003 4750 Q 2794 4750 3217 4161 Q 3641 3572 3641 2478 Q 3641 1253 3137 581 Q 2634 -91 1722 -91 Q 1475 -91 1203 -44 Q 931 3 647 97 L 647 872 L 997 872 Q 1038 556 1241 387 Q 1444 219 1784 219 Q 2391 219 2687 676 Q 2984 1134 2994 2091 z M 1978 4441 Q 1534 4441 1298 4117 Q 1063 3794 1063 3188 Q 1063 2581 1298 2256 Q 1534 1931 1978 1931 Q 2422 1931 2658 2245 Q 2894 2559 2894 3150 Q 2894 3772 2656 4106 Q 2419 4441 1978 4441 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-1c"/> </g> </g> <g id="f59-text_18"> <!-- 10 --> <g style="fill: var(--fig-ink)" transform="translate(143.655 125.343469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-14"/> <use xlink:href="#f59-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> <g id="f59-text_19"> <!-- 11 --> <g style="fill: var(--fig-ink)" transform="translate(185.235 125.343469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-14"/> <use xlink:href="#f59-DejaVuSerif-14" transform="translate(63.625 0)"/> </g> </g> <g id="f59-text_20"> <!-- 12 --> <g style="fill: var(--fig-ink)" transform="translate(226.815 125.343469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-14"/> <use xlink:href="#f59-DejaVuSerif-15" transform="translate(63.625 0)"/> </g> </g> <g id="f59-text_21"> <!-- m[i][j] sta --> <g style="fill: var(--fig-axis)" transform="translate(377.893125 84.878297) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-40" d="M 1947 4863 L 1947 -844 L 494 -844 L 494 -513 L 1350 -513 L 1350 4531 L 494 4531 L 494 4863 L 1947 4863 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-4d" d="M 641 4353 Q 641 4497 745 4603 Q 850 4709 997 4709 Q 1141 4709 1245 4603 Q 1350 4497 1350 4353 Q 1350 4206 1248 4103 Q 1147 4000 997 4000 Q 850 4000 745 4103 Q 641 4206 641 4353 z M 781 2988 L 238 2988 L 238 3322 L 1356 3322 L 1356 -325 Q 1356 -838 1051 -1130 Q 747 -1422 213 -1422 Q -13 -1422 -217 -1370 Q -422 -1319 -616 -1216 L -616 -531 L -319 -531 Q -297 -831 -164 -972 Q -31 -1113 225 -1113 Q 509 -1113 645 -920 Q 781 -728 781 -325 L 781 2988 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-50"/> <use xlink:href="#f59-DejaVuSerif-3e" transform="translate(94.828125 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(133.84375 0)"/> <use xlink:href="#f59-DejaVuSerif-40" transform="translate(165.828125 0)"/> <use xlink:href="#f59-DejaVuSerif-3e" transform="translate(204.84375 0)"/> <use xlink:href="#f59-DejaVuSerif-4d" transform="translate(243.859375 0)"/> <use xlink:href="#f59-DejaVuSerif-40" transform="translate(274.859375 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(313.875 0)"/> <use xlink:href="#f59-DejaVuSerif-56" transform="translate(345.65625 0)"/> <use xlink:href="#f59-DejaVuSerif-57" transform="translate(396.96875 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(437.15625 0)"/> </g> <!-- alla cella i·4 + j --> <g style="fill: var(--fig-axis)" transform="translate(360.22125 99.281578) scale(0.12 -0.12)"> <defs> <path id="f59-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-79" d="M 594 2222 Q 594 2397 714 2517 Q 834 2638 1013 2638 Q 1184 2638 1306 2516 Q 1428 2394 1428 2222 Q 1428 2047 1306 1926 Q 1184 1806 1013 1806 Q 834 1806 714 1925 Q 594 2044 594 2222 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-44"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(59.625 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(91.609375 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(123.59375 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(183.21875 0)"/> <use xlink:href="#f59-DejaVuSerif-46" transform="translate(215 0)"/> <use xlink:href="#f59-DejaVuSerif-48" transform="translate(271 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(330.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(362.171875 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(394.15625 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(453.78125 0)"/> <use xlink:href="#f59-DejaVuSerif-4c" transform="translate(485.5625 0)"/> <use xlink:href="#f59-DejaVuSerif-79" transform="translate(517.546875 0)"/> <use xlink:href="#f59-DejaVuSerif-17" transform="translate(549.328125 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(612.953125 0)"/> <use xlink:href="#f59-DejaVuSerif-e" transform="translate(644.734375 0)"/> <use xlink:href="#f59-DejaVuSerif-3" transform="translate(728.53125 0)"/> <use xlink:href="#f59-DejaVuSerif-4d" transform="translate(760.3125 0)"/> </g> </g> <g id="f59-patch_26"> <path d="M 282.96 166.578281 Q 282.96 185.982281 282.96 203.150213 " style="fill: none; stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> <path d="M 284.96 199.150213 L 282.96 203.150213 L 280.96 199.150213 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 2; stroke-linecap: round"/> </g> <g id="f59-text_22"> <!-- in memoria: una riga dopo l'altra --> <g style="fill: var(--fig-axis)" transform="translate(291.276 188.840133) scale(0.11 -0.11)"> <defs> <path id="f59-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-4a" d="M 3822 3322 L 3188 72 Q 3044 -672 2581 -1031 Q 2078 -1422 1381 -1422 Q 1053 -1422 765 -1362 Q 478 -1303 225 -1184 L 363 -488 L 663 -488 Q 653 -813 834 -963 Q 1016 -1113 1406 -1113 Q 1913 -1113 2203 -825 Q 2494 -544 2613 72 L 2700 519 Q 2472 206 2181 57 Q 1891 -91 1525 -91 Q 975 -91 697 281 Q 522 516 503 841 Q 491 1031 534 1256 Q 750 2359 1516 2928 Q 2169 3409 2931 3413 Q 3631 3416 3822 3322 z M 3184 2988 Q 3181 3094 2844 3094 Q 2234 3094 1775 2625 Q 1316 2153 1147 1297 Q 1100 1044 1113 853 Q 1125 659 1203 528 Q 1356 269 1756 269 Q 2194 269 2484 583 Q 2775 897 2891 1497 L 2953 1825 L 3184 2988 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSerif-Italic-4c"/> <use xlink:href="#f59-DejaVuSerif-Italic-51" transform="translate(31.984375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(96.390625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-50" transform="translate(128.171875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-48" transform="translate(223 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-50" transform="translate(282.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(377.015625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-55" transform="translate(437.21875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4c" transform="translate(485.015625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(517 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-1d" transform="translate(576.625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(610.3125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-58" transform="translate(642.09375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-51" transform="translate(706.5 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(770.90625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(830.53125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-55" transform="translate(862.3125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4c" transform="translate(910.109375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4a" transform="translate(942.09375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(1006.109375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(1065.734375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-47" transform="translate(1097.515625 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(1161.53125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-53" transform="translate(1221.734375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-52" transform="translate(1285.75 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-3" transform="translate(1345.953125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4f" transform="translate(1377.734375 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-a" transform="translate(1409.71875 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(1437.203125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-4f" transform="translate(1496.828125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-57" transform="translate(1528.8125 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-55" transform="translate(1569 0)"/> <use xlink:href="#f59-DejaVuSerif-Italic-44" transform="translate(1616.796875 0)"/> </g> </g> <g id="f59-text_23"> <!-- 1 --> <g style="fill: var(--fig-accent)" transform="translate(50.4525 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-14"/> </g> </g> <g id="f59-text_24"> <!-- [0][0] --> <g style="fill: var(--fig-accent)" transform="translate(38.918203 274.122621) scale(0.085 -0.085)"> <defs> <path id="f59-DejaVuSansMono-3e" d="M 1447 4863 L 2772 4863 L 2772 4416 L 2022 4416 L 2022 -397 L 2772 -397 L 2772 -844 L 1447 -844 L 1447 4863 z " transform="scale(0.015625)"/> <path id="f59-DejaVuSansMono-40" d="M 2406 4863 L 2406 -844 L 1081 -844 L 1081 -397 L 1831 -397 L 1831 4416 L 1081 4416 L 1081 4863 L 2406 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_25"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(51.560859 296.428172) scale(0.09 -0.09)"> <use xlink:href="#f59-DejaVuSansMono-13"/> </g> </g> <g id="f59-text_26"> <!-- 2 --> <g style="fill: var(--fig-accent)" transform="translate(92.0325 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-15"/> </g> </g> <g id="f59-text_27"> <!-- [0][1] --> <g style="fill: var(--fig-accent)" transform="translate(80.498203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_28"> <!-- 1 --> <g style="fill: var(--fig-axis)" transform="translate(93.140859 296.428172) scale(0.09 -0.09)"> <use xlink:href="#f59-DejaVuSansMono-14"/> </g> </g> <g id="f59-text_29"> <!-- 3 --> <g style="fill: var(--fig-accent)" transform="translate(133.6125 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-16"/> </g> </g> <g id="f59-text_30"> <!-- [0][2] --> <g style="fill: var(--fig-accent)" transform="translate(122.078203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-15" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_31"> <!-- 2 --> <g style="fill: var(--fig-axis)" transform="translate(134.720859 296.428172) scale(0.09 -0.09)"> <use xlink:href="#f59-DejaVuSansMono-15"/> </g> </g> <g id="f59-text_32"> <!-- 4 --> <g style="fill: var(--fig-accent)" transform="translate(175.1925 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-17"/> </g> </g> <g id="f59-text_33"> <!-- [0][3] --> <g style="fill: var(--fig-accent)" transform="translate(163.658203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-16" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_34"> <!-- 3 --> <g style="fill: var(--fig-axis)" transform="translate(176.300859 296.428172) scale(0.09 -0.09)"> <use xlink:href="#f59-DejaVuSansMono-16"/> </g> </g> <g id="f59-text_35"> <!-- 5 --> <g style="fill: var(--fig-steel)" transform="translate(216.7725 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-18"/> </g> </g> <g id="f59-text_36"> <!-- [1][0] --> <g style="fill: var(--fig-steel)" transform="translate(205.238203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_37"> <!-- 4 --> <g style="fill: var(--fig-axis)" transform="translate(217.880859 296.428172) scale(0.09 -0.09)"> <defs> <path id="f59-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-17"/> </g> </g> <g id="f59-text_38"> <!-- 6 --> <g style="fill: var(--fig-steel)" transform="translate(258.3525 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-19"/> </g> </g> <g id="f59-text_39"> <!-- [1][1] --> <g style="fill: var(--fig-steel)" transform="translate(246.818203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_40"> <!-- 5 --> <g style="fill: var(--fig-axis)" transform="translate(259.460859 296.428172) scale(0.09 -0.09)"> <defs> <path id="f59-DejaVuSansMono-18" d="M 647 4666 L 3009 4666 L 3009 4134 L 1222 4134 L 1222 2988 Q 1356 3038 1492 3061 Q 1628 3084 1766 3084 Q 2491 3084 2916 2656 Q 3341 2228 3341 1497 Q 3341 759 2895 334 Q 2450 -91 1678 -91 Q 1306 -91 998 -41 Q 691 9 447 109 L 447 750 Q 734 594 1025 517 Q 1316 441 1619 441 Q 2141 441 2423 716 Q 2706 991 2706 1497 Q 2706 1997 2414 2275 Q 2122 2553 1600 2553 Q 1347 2553 1106 2495 Q 866 2438 647 2322 L 647 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-18"/> </g> </g> <g id="f59-text_41"> <!-- 7 --> <g style="fill: var(--fig-steel)" transform="translate(299.9325 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-1a"/> </g> </g> <g id="f59-text_42"> <!-- [1][2] --> <g style="fill: var(--fig-steel)" transform="translate(288.398203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-15" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_43"> <!-- 6 --> <g style="fill: var(--fig-axis)" transform="translate(301.040859 296.428172) scale(0.09 -0.09)"> <defs> <path id="f59-DejaVuSansMono-19" d="M 3097 4563 L 3097 3981 Q 2900 4097 2678 4158 Q 2456 4219 2216 4219 Q 1616 4219 1306 3767 Q 997 3316 997 2438 Q 1147 2750 1412 2917 Q 1678 3084 2022 3084 Q 2697 3084 3067 2670 Q 3438 2256 3438 1497 Q 3438 741 3056 325 Q 2675 -91 1984 -91 Q 1172 -91 794 492 Q 416 1075 416 2328 Q 416 3509 870 4129 Q 1325 4750 2188 4750 Q 2419 4750 2650 4701 Q 2881 4653 3097 4563 z M 1972 2591 Q 1569 2591 1337 2300 Q 1106 2009 1106 1497 Q 1106 984 1337 693 Q 1569 403 1972 403 Q 2391 403 2603 679 Q 2816 956 2816 1497 Q 2816 2041 2603 2316 Q 2391 2591 1972 2591 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-19"/> </g> </g> <g id="f59-text_44"> <!-- 8 --> <g style="fill: var(--fig-steel)" transform="translate(341.5125 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-1b"/> </g> </g> <g id="f59-text_45"> <!-- [1][3] --> <g style="fill: var(--fig-steel)" transform="translate(329.978203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-16" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_46"> <!-- 7 --> <g style="fill: var(--fig-axis)" transform="translate(342.620859 296.428172) scale(0.09 -0.09)"> <defs> <path id="f59-DejaVuSansMono-1a" d="M 434 4666 L 3372 4666 L 3372 4397 L 1703 0 L 1044 0 L 2669 4134 L 434 4134 L 434 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-1a"/> </g> </g> <g id="f59-text_47"> <!-- 9 --> <g style="fill: var(--fig-ink)" transform="translate(383.0925 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-1c"/> </g> </g> <g id="f59-text_48"> <!-- [2][0] --> <g style="fill: var(--fig-ink)" transform="translate(371.558203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-15" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_49"> <!-- 8 --> <g style="fill: var(--fig-axis)" transform="translate(384.200859 296.428172) scale(0.09 -0.09)"> <defs> <path id="f59-DejaVuSansMono-1b" d="M 1925 2216 Q 1503 2216 1273 1980 Q 1044 1744 1044 1313 Q 1044 881 1276 642 Q 1509 403 1925 403 Q 2350 403 2579 639 Q 2809 875 2809 1313 Q 2809 1741 2576 1978 Q 2344 2216 1925 2216 z M 1375 2478 Q 972 2581 745 2862 Q 519 3144 519 3541 Q 519 4097 897 4423 Q 1275 4750 1925 4750 Q 2578 4750 2956 4423 Q 3334 4097 3334 3541 Q 3334 3144 3107 2862 Q 2881 2581 2478 2478 Q 2947 2375 3195 2062 Q 3444 1750 3444 1253 Q 3444 622 3041 265 Q 2638 -91 1925 -91 Q 1213 -91 811 264 Q 409 619 409 1247 Q 409 1747 657 2061 Q 906 2375 1375 2478 z M 1147 3481 Q 1147 3106 1347 2909 Q 1547 2713 1925 2713 Q 2306 2713 2506 2909 Q 2706 3106 2706 3481 Q 2706 3863 2507 4063 Q 2309 4263 1925 4263 Q 1547 4263 1347 4061 Q 1147 3859 1147 3481 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-1b"/> </g> </g> <g id="f59-text_50"> <!-- 10 --> <g style="fill: var(--fig-ink)" transform="translate(420.855 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-14"/> <use xlink:href="#f59-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> <g id="f59-text_51"> <!-- [2][1] --> <g style="fill: var(--fig-ink)" transform="translate(413.138203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-15" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_52"> <!-- 9 --> <g style="fill: var(--fig-axis)" transform="translate(425.780859 296.428172) scale(0.09 -0.09)"> <defs> <path id="f59-DejaVuSansMono-1c" d="M 1863 2069 Q 2266 2069 2495 2359 Q 2725 2650 2725 3163 Q 2725 3675 2495 3965 Q 2266 4256 1863 4256 Q 1444 4256 1231 3979 Q 1019 3703 1019 3163 Q 1019 2619 1230 2344 Q 1441 2069 1863 2069 z M 738 97 L 738 678 Q 934 563 1156 502 Q 1378 441 1619 441 Q 2219 441 2526 892 Q 2834 1344 2834 2222 Q 2688 1909 2422 1742 Q 2156 1575 1813 1575 Q 1138 1575 767 1990 Q 397 2406 397 3169 Q 397 3922 776 4336 Q 1156 4750 1850 4750 Q 2663 4750 3041 4165 Q 3419 3581 3419 2328 Q 3419 1150 2964 529 Q 2509 -91 1644 -91 Q 1416 -91 1184 -42 Q 953 6 738 97 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f59-DejaVuSansMono-1c"/> </g> </g> <g id="f59-text_53"> <!-- 11 --> <g style="fill: var(--fig-ink)" transform="translate(462.435 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-14"/> <use xlink:href="#f59-DejaVuSerif-14" transform="translate(63.625 0)"/> </g> </g> <g id="f59-text_54"> <!-- [2][2] --> <g style="fill: var(--fig-ink)" transform="translate(454.718203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-15" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-15" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_55"> <!-- 10 --> <g style="fill: var(--fig-axis)" transform="translate(464.651719 296.428172) scale(0.09 -0.09)"> <use xlink:href="#f59-DejaVuSansMono-14"/> <use xlink:href="#f59-DejaVuSansMono-13" transform="translate(60.203125 0)"/> </g> </g> <g id="f59-text_56"> <!-- 12 --> <g style="fill: var(--fig-ink)" transform="translate(504.015 241.767469) scale(0.12 -0.12)"> <use xlink:href="#f59-DejaVuSerif-14"/> <use xlink:href="#f59-DejaVuSerif-15" transform="translate(63.625 0)"/> </g> </g> <g id="f59-text_57"> <!-- [2][3] --> <g style="fill: var(--fig-ink)" transform="translate(496.298203 274.122621) scale(0.085 -0.085)"> <use xlink:href="#f59-DejaVuSansMono-3e"/> <use xlink:href="#f59-DejaVuSansMono-15" transform="translate(60.203125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(120.40625 0)"/> <use xlink:href="#f59-DejaVuSansMono-3e" transform="translate(180.609375 0)"/> <use xlink:href="#f59-DejaVuSansMono-16" transform="translate(240.8125 0)"/> <use xlink:href="#f59-DejaVuSansMono-40" transform="translate(301.015625 0)"/> </g> </g> <g id="f59-text_58"> <!-- 11 --> <g style="fill: var(--fig-axis)" transform="translate(506.231719 296.428172) scale(0.09 -0.09)"> <use xlink:href="#f59-DejaVuSansMono-14"/> <use xlink:href="#f59-DejaVuSansMono-14" transform="translate(60.203125 0)"/> </g> </g> <g id="f59-text_59"> <!-- cella --> <g style="fill: var(--fig-axis)" transform="translate(6.445688 296.428523) scale(0.09 -0.09)"> <use xlink:href="#f59-DejaVuSerif-46"/> <use xlink:href="#f59-DejaVuSerif-48" transform="translate(56 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(115.1875 0)"/> <use xlink:href="#f59-DejaVuSerif-4f" transform="translate(147.171875 0)"/> <use xlink:href="#f59-DejaVuSerif-44" transform="translate(179.15625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f59-p93c770790b"> <rect x="5.76" y="5.802281" width="554.4" height="310.464"/> </clipPath> </defs> </svg></figure>

In una matrice con $M$ colonne, `a[i][j]` è la cella numero $i \cdot M + j$ contando da `a[0][0]`: prima ci sono $i$ righe complete da $M$ elementi, poi $j$ elementi della riga $i$. Per questo il compilatore deve conoscere il numero di colonne: senza $M$ non saprebbe dove comincia la riga $i$.

## Concetti

### Inizializzazione

(<span class="src">slide 55</span> e <span class="src">slide 59-64</span>) Una matrice si inizializza con una lista di righe, ognuna fra graffe:

```
int a[4][5] = { {2, 5, -8, 7, 6},
                {3, 10, 7, 6, 1},
                {-1, 8, -8, 5, 3},
                {2, 5, 8, 4, 2} };
```

Le varianti della slide 64, con il motivo:

```
float A[3][2];                    3 righe, 2 colonne, valori indefiniti
int B[3][2] = {1,2,3,4,5,6};      lista piatta: riempie per righe, {1,2},{3,4},{5,6}
int C[2][3] = {{1,2,3},{4,5,6}};  una graffa per riga: la forma chiara
int D[][] = {1,2,3,4};            errore: mancano entrambe le dimensioni
int E[2][] = {1,2,3,4};           errore: manca il numero di colonne
int F[][2] = {1,2,3,4};           ok: 2 colonne, quindi 2 righe
```

La regola: si può omettere **solo la prima** dimensione, quella delle righe, che il compilatore deduce dal numero di valori. Il numero di colonne serve a sapere dove finisce ogni riga, come nella formula $i \cdot M + j$.

La lista piatta di `B` e `F` è C valido ma gcc con `-Wall` avvisa "missing braces around initializer": meglio scrivere `{{1, 2}, {3, 4}, {5, 6}}`. Con le graffe per riga si può anche inizializzare in parte ogni riga: `int m[2][3] = {{1}, {4, 5}};` dà le righe `1 0 0` e `4 5 0`, perché le celle non elencate valgono 0, riga per riga.

```c
#include <stdio.h>

#define RIGHE 4
#define COLONNE 5

int main(void)
{
    int a[RIGHE][COLONNE] = {
        {2, 5, -8, 7, 6},
        {3, 10, 7, 6, 1},
        {-1, 8, -8, 5, 3},
        {2, 5, 8, 4, 2}
    };
    int i;
    int j;

    for (i = 0; i < RIGHE; i++)
        for (j = 0; j < COLONNE; j++)
            printf("%d ", a[i][j]);
    printf("\n");
    printf("a[1][0] dista %d celle da a[0][0]\n", (int)(&a[1][0] - &a[0][0]));
    printf("a[2][3] dista %d celle da a[0][0]\n", (int)(&a[2][3] - &a[0][0]));
    printf("sizeof(a)=%zu sizeof(a[0])=%zu\n", sizeof(a), sizeof(a[0]));
    return 0;
}
```

Output (verificato, `int` da 4 byte):

```
2 5 -8 7 6 3 10 7 6 1 -1 8 -8 5 3 2 5 8 4 2 
a[1][0] dista 5 celle da a[0][0]
a[2][3] dista 13 celle da a[0][0]
sizeof(a)=80 sizeof(a[0])=20
```

La prima riga è la sequenza della slide 57, quella che sta in memoria. `a[1][0]` sta subito dopo `a[0][4]`, 5 celle dopo l'inizio; `a[2][3]` sta alla cella $2 \cdot 5 + 3 = 13$. La differenza fra due indirizzi la vedremo con i puntatori: qui serve solo a mostrare la formula.

### Righe fuori, colonne dentro

Lo schema per visitare tutta una matrice è un `for` sulle righe che contiene un `for` sulle colonne. Il ciclo interno riparte da 0 a ogni riga, come in [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/). Per la stampa si va a capo **dopo** il ciclo interno, una volta per riga. In questo ordine si visitano le celle nello stesso ordine in cui stanno in memoria.

Scambiando i due cicli (colonne fuori, righe dentro) si visita la matrice per colonne: serve per le somme per colonna. Quello che non va scambiato sono i limiti: l'indice di riga va fino al numero di righe, quello di colonna fino al numero di colonne. Con una matrice non quadrata, confonderli scrive fuori.

## Metodo

Matrice `m` con `R` righe e `C` colonne (con `#define`); per le quadrate `N`.

**Leggere** (slide 65): due `for`, `scanf("%d", &m[i][j])`, controllando il ritorno.

**Stampare** (slide 66): due `for`, un `printf` per elemento con un separatore, `printf("\n")` dopo il `for` interno.

**Somma per riga e per colonna**: due array di accumulatori azzerati, `somma_riga[R]` e `somma_colonna[C]`, riempiti nella stessa scansione: `somma_riga[i] += m[i][j]; somma_colonna[j] += m[i][j];`.

**Diagonali** (solo quadrate): la principale è `m[i][i]`, la secondaria `m[i][N - 1 - i]`. Basta **un** ciclo, non due.

**Parti della matrice quadrata**, per la cella $(i, j)$:

```
j == i            diagonale principale
i + j == N - 1    diagonale secondaria
j > i             sopra la diagonale (triangolo superiore)
j < i             sotto la diagonale (triangolo inferiore)
i == 0, i == N-1  prima e ultima riga (bordo)
```

Sono le condizioni dei quadrati a pattern dello scritto.

**Trasposta** (slide 93-94): $A$ di $R \times C$ diventa $A^T$ di $C \times R$ con `at[i][j] = a[j][i]`, `i` sulle righe di $A^T$ (da 0 a `C`) e `j` sulle sue colonne (da 0 a `R`). Sul posto, solo per le quadrate, si scambia `m[i][j]` con `m[j][i]` **solo** per `j > i`.

**Verificare una proprietà "per ogni i, j"** (simmetria, magia): una variabile flag a 1, la si mette a 0 al primo controllo che fallisce. Mettere `&& flag` nella condizione dei cicli ferma la scansione appena si sa la risposta.

**Contare le operazioni**: un contatore incrementato accanto all'operazione (slide 71). Utile per confrontare due versioni dello stesso algoritmo, ed è l'idea che tornerà con la complessità.

## Esempi svolti a lezione

### Lettura e stampa di una matrice quadrata

(<span class="src">slide 65-68</span>) Le slide 65-66 mostrano i due cicli, la 67 chiede un programma che legge una matrice quadrata da tastiera e la scrive su standard output, la 68 lo risolve.

```c
#include <stdio.h>

#define N 3

int main(void)
{
    int matrice[N][N];
    int i;
    int j;

    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            if (scanf("%d", &matrice[i][j]) != 1) {
                printf("input non valido\n");
                return 1;
            }
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            printf("%d", matrice[i][j]);
            if (j <= N - 2)
                printf(" ");
        }
        printf("\n");
    }
    return 0;
}
```

Con input `1 2 3 4 5 6 7 8 9` (anche tutto su una riga) stampa (verificato):

```
1 2 3
4 5 6
7 8 9
```

L'`if (j <= N - 2)` mette lo spazio dopo ogni elemento **tranne l'ultimo** della riga ($j = N - 1$), così le righe non hanno spazi in fondo. Il programma legge per righe: `scanf` salta spazi e a capo, quindi il formato dell'input non conta, solo l'ordine.

Errori nelle slide: le 65-66 scrivono `main(...)` senza `int` davanti (l'int implicito non esiste più dal C99), usano le virgolette tipografiche e stampano con `"%d"` senza separatore, quindi i numeri si incollano. La soluzione della slide 68 dichiara `int N=3; int matrice[N][N];`: con `N` variabile è un VLA, non un array statico (vedi [Array](/uni/prog-1/array/)). Qui `N` è un `#define`.

### Matrice simmetrica, quattro versioni

(<span class="src">slide 69-73</span>) Una matrice quadrata è **simmetrica** se $a_{ij} = a_{ji}$ per ogni $i, j$: ogni elemento è uguale al suo speculare rispetto alla diagonale principale. Gli esempi della slide 69:

```
 7  2  1 14        7 12  1 14
 2 13  3 11        2 13  8 11
 1  3 10  5       16  3 10  5
14 11  5  4        9  6 15  4
    sì                 no
```

Il prof costruisce la soluzione in quattro passi, ogni volta chiedendo "come possiamo fare meno confronti?":

```
versione 0     due for completi; flag sim = 1, a 0 se m[i][j] != m[j][i]
versione 0.1   come la 0, più un contatore ContaIf dei confronti eseguiti
versione 1     && (sim == 1) nelle condizioni dei due for: ci si ferma alla prima differenza
versione 2     j parte da i+1: si guarda solo sopra la diagonale
```

Le tre versioni misurate sulle due matrici della slide:

```c
#include <stdio.h>

#define N 4

int main(void)
{
    int mat[N][N] = {
        {7, 2, 1, 14},
        {2, 13, 3, 11},
        {1, 3, 10, 5},
        {14, 11, 5, 4}
    };
    int sim;
    int conta_if;
    int i;
    int j;

    sim = 1;
    conta_if = 0;
    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++) {
            if (mat[i][j] != mat[j][i])
                sim = 0;
            conta_if++;
        }
    printf("versione 0.1: sim=%d confronti=%d\n", sim, conta_if);

    sim = 1;
    conta_if = 0;
    for (i = 0; i < N && sim == 1; i++)
        for (j = 0; j < N && sim == 1; j++) {
            if (mat[i][j] != mat[j][i])
                sim = 0;
            conta_if++;
        }
    printf("versione 1:   sim=%d confronti=%d\n", sim, conta_if);

    sim = 1;
    conta_if = 0;
    for (i = 0; i < N && sim == 1; i++)
        for (j = i + 1; j < N && sim == 1; j++) {
            if (mat[i][j] != mat[j][i])
                sim = 0;
            conta_if++;
        }
    printf("versione 2:   sim=%d confronti=%d\n", sim, conta_if);
    return 0;
}
```

Output con la matrice "sì" e con la "no" al posto di `mat` (verificati):

```
matrice sì                                matrice no
versione 0.1: sim=1 confronti=16          versione 0.1: sim=0 confronti=16
versione 1:   sim=1 confronti=16          versione 1:   sim=0 confronti=2
versione 2:   sim=1 confronti=6           versione 2:   sim=0 confronti=1
```

Perché:
- La **0.1** fa sempre $N^2 = 16$ confronti, anche dopo aver trovato la differenza. Ne fa di inutili: confronta `m[i][i]` con sé stesso, e ogni coppia due volte (`m[0][1]` con `m[1][0]` e poi `m[1][0]` con `m[0][1]`).
- La **1** si ferma appena `sim` diventa 0. Sulla "no" trova $7 = 7$ e poi $12 \neq 2$: 2 confronti. Su una simmetrica non guadagna niente, perché deve controllare tutto.
- La **2** toglie la diagonale e i doppioni: con `j` da `i + 1` controlla solo il triangolo superiore, $N (N - 1) / 2 = 6$ confronti per $N = 4$. Sulla "no" il primo confronto è già $12 \neq 2$.

Le slide dichiarano `int MatQuadra[5][5];` senza riempirla: il codice va completato con la lettura o con un'inizializzazione, come qui.

### Trasposta

(<span class="src">slide 93-94</span>) La **trasposta** $A^T$ di una matrice $A$ di dimensioni $N \times M$ ha dimensioni $M \times N$ e $a^T_{ij} = a_{ji}$: le righe di $A$ diventano le colonne di $A^T$.

La soluzione della slide è

```
int m=30;n=20
int A[m][n], AT[n][m];
for(i=0;i<n;i++)
  for(j=0;j<m;j++)
     AT[i][j]=A[j][i];
```

con due errori di C: `int m=30;n=20` dichiara solo `m` (serve la virgola, e manca il `;` finale), e `A[m][n]` con `m` e `n` variabili è un VLA. La logica è giusta: `i` scorre le righe di $A^T$, che sono `n`, e `j` le sue colonne, che sono `m`. Versione completa su una $2 \times 3$:

```c
#include <stdio.h>

#define N 2
#define M 3

int main(void)
{
    int a[N][M] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    int at[M][N];
    int i;
    int j;

    for (i = 0; i < M; i++)
        for (j = 0; j < N; j++)
            at[i][j] = a[j][i];

    for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++)
            printf("%d ", at[i][j]);
        printf("\n");
    }
    return 0;
}
```

Output (verificato):

```
1 4 
2 5 
3 6 
```

La prima riga di $A$, `1 2 3`, è diventata la prima colonna di $A^T$.

### Matrici magiche

(<span class="src">slide 95-100</span>) Una matrice quadrata è **magica** se la somma degli elementi di ogni riga, di ogni colonna e delle due diagonali è la stessa costante. È **normale** se contiene i numeri $1, 2, \ldots, n^2$ senza ripetizioni. In una magica normale la **somma magica** vale

$$
\frac{n (n^2 + 1)}{2}
$$

perché la somma di tutti gli elementi è $1 + 2 + \ldots + n^2 = n^2 (n^2 + 1) / 2$, divisa in $n$ righe uguali. Per $n = 4$: $4 \cdot 17 / 2 = 34$.

L'esempio della slide 96, con righe, colonne e diagonali che danno 34:

```
 7 12  1 14
 2 13  8 11
16  3 10  5
 9  6 15  4
```

Il quadrato della facciata della Passione della Sagrada Familia (slide 95) ha somma 33 e ripete 10 e 14: è magico ma non normale, quindi la formula lì non vale.

L'esercizio della slide 99 chiede (a) un programma che verifichi se una matrice $N \times N$ è magica. La soluzione della slide 100 è uno pseudocodice che fa solo le righe e lascia colonne e diagonali. Completo:

```c
#include <stdio.h>

#define N 4

int main(void)
{
    int m[N][N] = {
        {7, 12, 1, 14},
        {2, 13, 8, 11},
        {16, 3, 10, 5},
        {9, 6, 15, 4}
    };
    int magica = 1;
    int somma_magica = N * (N * N + 1) / 2;
    int somma;
    int i;
    int j;

    for (i = 0; i < N && magica; i++) {
        somma = 0;
        for (j = 0; j < N; j++)
            somma += m[i][j];
        if (somma != somma_magica)
            magica = 0;
    }
    for (j = 0; j < N && magica; j++) {
        somma = 0;
        for (i = 0; i < N; i++)
            somma += m[i][j];
        if (somma != somma_magica)
            magica = 0;
    }
    if (magica) {
        somma = 0;
        for (i = 0; i < N; i++)
            somma += m[i][i];
        if (somma != somma_magica)
            magica = 0;
    }
    if (magica) {
        somma = 0;
        for (i = 0; i < N; i++)
            somma += m[i][N - 1 - i];
        if (somma != somma_magica)
            magica = 0;
    }
    printf("somma magica %d: %s\n", somma_magica, magica ? "magica" : "non magica");
    return 0;
}
```

Stampa `somma magica 34: magica`; scambiando 15 e 4 nell'ultima riga stampa `somma magica 34: non magica` (verificati). La `somma` si azzera **dentro** il ciclo esterno, una volta per riga o colonna: azzerarla una volta sola prima dei cicli accumulerebbe tutte le righe. Come nella simmetrica, `&& magica` nelle condizioni ferma il controllo al primo errore.

Lo pseudocodice della slide usa `Boolean`, che in C non esiste (si usa un `int` 0/1, oppure `bool` da `<stdbool.h>`), scrive `if Somma != MagicSum` senza parentesi e dichiara `M[n][n]` con `n` variabile. Il programma confronta le somme con quella delle magiche normali, $n (n^2 + 1) / 2$. Ogni magica normale passa il test, ma per dire che la matrice è normale bisognerebbe anche controllare che ogni numero da 1 a $n^2$ compaia una volta sola. Il quadrato della Sagrada Familia, magico con somma 33, risulterebbe "non magica": per le magiche qualsiasi il confronto va fatto con la somma della prima riga.

## Esercizi tipo esame

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

#define N 3

int main(void)
{
    int m[N][N];
    int i;
    int j;
    int traccia = 0;
    int sotto = 0;

    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            m[i][j] = i * N + j;
    for (i = 0; i < N; i++) {
        traccia += m[i][i];
        for (j = 0; j < i; j++)
            sotto += m[i][j];
    }
    printf("m[2][1]=%d traccia=%d sotto=%d\n", m[2][1], traccia, sotto);
    return 0;
}
```

> [!example]- Soluzione
> `m[i][j] = i * 3 + j` riempie la matrice con la posizione lineare di ogni cella:
> ```
> 0 1 2
> 3 4 5
> 6 7 8
> ```
> `traccia` somma la diagonale: $0 + 4 + 8 = 12$. `sotto` somma le celle con $j < i$: `m[1][0]`, `m[2][0]`, `m[2][1]`, cioè $3 + 6 + 7 = 16$.
>
> Output: `m[2][1]=7 traccia=12 sotto=16` (verificato).

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int m[2][3] = {{1}, {4, 5}};
    int i;
    int j;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++)
            printf("%d ", m[i][j]);
        printf("\n");
    }
    return 0;
}
```

> [!example]- Soluzione
> ```
> 1 0 0 
> 4 5 0 
> ```
> (verificato). Ogni graffa interna inizializza una riga, e le celle mancanti di **quella** riga valgono 0. Con la lista piatta `{1, 4, 5}` invece i valori andrebbero in fila: `1 4 5` e `0 0 0`.

**Esercizio 3.** Con `int a[6][8]`, in che posizione lineare (contando da 0) sta `a[3][5]`? Quanti byte occupa `a` con `int` da 4 byte? Quale di queste dichiarazioni è valida: `int x[][8] = {...}`, `int y[6][] = {...}`?

> [!example]- Soluzione
> - $3 \cdot 8 + 5 = 29$: prima ci sono 3 righe complete da 8.
> - $6 \cdot 8 \cdot 4 = 192$ byte.
> - È valida solo `int x[][8]`: si può omettere solo la prima dimensione. Senza il numero di colonne il compilatore non sa dove comincia ogni riga.

**Esercizio 4.** Scrivi un programma che, data una matrice $3 \times 4$, stampa la somma di ogni riga e di ogni colonna con una sola scansione.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define RIGHE 3
> #define COLONNE 4
>
> int main(void)
> {
>     int m[RIGHE][COLONNE] = {
>         {1, 2, 3, 4},
>         {5, 6, 7, 8},
>         {9, 10, 11, 12}
>     };
>     int somma_riga[RIGHE] = {0};
>     int somma_colonna[COLONNE] = {0};
>     int i;
>     int j;
>
>     for (i = 0; i < RIGHE; i++)
>         for (j = 0; j < COLONNE; j++) {
>             somma_riga[i] += m[i][j];
>             somma_colonna[j] += m[i][j];
>         }
>     for (i = 0; i < RIGHE; i++)
>         printf("riga %d: %d\n", i, somma_riga[i]);
>     for (j = 0; j < COLONNE; j++)
>         printf("colonna %d: %d\n", j, somma_colonna[j]);
>     return 0;
> }
> ```
> Stampa righe 10, 26, 42 e colonne 15, 18, 21, 24 (verificato). Controllo: $10 + 26 + 42 = 78 = 15 + 18 + 21 + 24$, la somma totale. Gli accumulatori sono array inizializzati con `{0}`, uno per riga e uno per colonna.

**Esercizio 5.** Il programma vuole trasporre sul posto una matrice $3 \times 3$ ma la stampa resta identica a quella di partenza. Perché? Correggilo.

```
for (i = 0; i < N; i++)
    for (j = 0; j < N; j++) {
        tmp = m[i][j];
        m[i][j] = m[j][i];
        m[j][i] = tmp;
    }
```

> [!example]- Soluzione
> Ogni coppia fuori diagonale viene scambiata **due volte**: con $(i, j) = (0, 1)$ e poi con $(1, 0)$. Il secondo scambio annulla il primo. Va scambiata solo la parte sopra la diagonale:
> ```c
> #include <stdio.h>
>
> #define N 3
>
> int main(void)
> {
>     int m[N][N] = {
>         {1, 2, 3},
>         {4, 5, 6},
>         {7, 8, 9}
>     };
>     int i;
>     int j;
>     int tmp;
>
>     for (i = 0; i < N; i++)
>         for (j = i + 1; j < N; j++) {
>             tmp = m[i][j];
>             m[i][j] = m[j][i];
>             m[j][i] = tmp;
>         }
>     for (i = 0; i < N; i++) {
>         for (j = 0; j < N; j++)
>             printf("%d ", m[i][j]);
>         printf("\n");
>     }
>     return 0;
> }
> ```
> Stampa `1 4 7`, `2 5 8`, `3 6 9` (verificato); con `j = 0` stampava `1 2 3`, `4 5 6`, `7 8 9`. È la stessa idea della versione 2 della simmetrica e dell'inversione di un array, che scambia solo fino a metà.

**Esercizio 6.** Scrivi l'output esatto per $N = 5$.

```c
#include <stdio.h>

#define N 5

int main(void)
{
    char q[N][N];
    int i;
    int j;

    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            if (i == j || i + j == N - 1)
                q[i][j] = 'X';
            else if (i == 0 || i == N - 1)
                q[i][j] = '-';
            else
                q[i][j] = '.';
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++)
            putchar(q[i][j]);
        putchar('\n');
    }
    return 0;
}
```

> [!example]- Soluzione
> Le `X` stanno sulle due diagonali, i `-` sulla prima e ultima riga fuori dalle diagonali, il resto è `.`:
> ```
> X---X
> .X.X.
> ..X..
> .X.X.
> X---X
> ```
> (verificato). L'ordine degli `if` conta: gli angoli sono sia sulla diagonale sia sul bordo, e vince il primo controllo.

**Esercizio 7.** Trova l'errore. `int m[2][3];` e poi:

```
for (i = 0; i < 3; i++)
    for (j = 0; j < 2; j++)
        m[i][j] = 0;
```

> [!example]- Soluzione
> I limiti sono scambiati: `i` è l'indice di riga e arriva a 2, ma le righe sono solo 0 e 1. `m[2][0]` e `m[2][1]` sono fuori dalla matrice, e la colonna 2 non viene mai azzerata. Corretto: `i < 2` fuori, `j < 3` dentro. Con `#define RIGHE 2` e `#define COLONNE 3` l'errore si vede subito.

**Esercizio 8.** (Slide 99, punto b.) Data una matrice magica $M$ di $N \times N$, sapresti calcolarne altre a partire da $M$? Quante?

> [!example]- Soluzione
> Le **rotazioni** di 90°, 180°, 270° e le **riflessioni** (rispetto all'asse orizzontale, verticale e alle due diagonali) mandano righe in righe o colonne, colonne in colonne o righe, e le due diagonali nelle due diagonali: le somme restano tutte uguali. Con $M$ stessa sono **8** matrici, cioè 7 nuove.
>
> Per una magica normale c'è anche il **complemento**: sostituire ogni elemento $x$ con $n^2 + 1 - x$. Ogni riga di $n$ elementi passa da somma $S$ a $n (n^2 + 1) - S = S$, e i numeri restano $1, \ldots, n^2$. Per la matrice della slide 96 rotazioni, riflessioni e complemento danno in tutto **16** matrici magiche distinte (verificato con uno script).

## Errori tipici

- Scrivere `a[i, j]` invece di `a[i][j]`: in C la virgola è l'operatore virgola, `a[i, j]` vale `a[j]`, cioè una riga intera.
- Scambiare i limiti dei due cicli su una matrice non quadrata: si scrive fuori e si lascia una parte non visitata.
- Omettere il numero di colonne nell'inizializzazione (`int E[2][]`): si può omettere solo la prima dimensione.
- Credere che `{{1}, {4, 5}}` e `{1, 4, 5}` diano la stessa matrice.
- Andare a capo dentro il ciclo interno della stampa (una riga per elemento) o mai (tutto su una riga).
- Azzerare un accumulatore di riga una volta sola, prima dei cicli, invece che a ogni riga.
- Trasporre sul posto con `j` da 0: ogni scambio viene fatto due volte e la matrice non cambia.
- Controllare una proprietà "per ogni $i, j$" mettendo il flag a 1 anche quando il confronto riesce: un solo confronto riuscito cancellerebbe un fallimento precedente. Il flag si mette solo a 0.
- Dichiarare `int N = 3; int m[N][N];` come nella slide 68: è un VLA. Per le dimensioni fisse, `#define`.

## Domande

- Cosa dichiara `int a[10][5]`? Quali sono gli indici validi e quanti elementi ci sono?

- Come è disposta in memoria una matrice in C? In che posizione lineare sta `a[i][j]` se la matrice ha $M$ colonne?

- Perché nell'inizializzazione si può omettere il numero di righe ma non quello di colonne?

- Cosa contiene `int B[3][2] = {1,2,3,4,5,6};`? E `int m[2][3] = {{1}, {4, 5}};`?

- Quale elemento viene assegnato da `matrice[2][4] = 12;`?

- Qual è lo schema di cicli per stampare una matrice riga per riga? Dove si mette il `printf("\n")`?

- Quando una matrice quadrata è simmetrica? Quanti confronti servono al minimo per verificarlo su una $N \times N$, e perché?

- Cosa cambia fra la versione 1 e la versione 2 della verifica di simmetria?

- Come si calcola la trasposta di una matrice $N \times M$? Come si fa sul posto, e perché solo per $j > i$?

- Quando una matrice è magica? Perché la somma magica di una normale è $n (n^2 + 1) / 2$?

- Come si individuano, con una condizione su $i$ e $j$, la diagonale principale, la secondaria e il triangolo sotto la diagonale?

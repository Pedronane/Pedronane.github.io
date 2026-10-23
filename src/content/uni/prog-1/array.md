---
title: Array
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
ordine: 10
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 4.1: <span class="src">slide 2-29</span> (dichiarazione, accesso, inizializzazione, stampa), <span class="src">slide 30-52</span> (esempi: scala, inizializzazione da input, inversione, conteggio cifre, decimale-binario, istogramma), <span class="src">slide 74-78</span> (array dinamici e VLA), <span class="src">slide 79-92</span> (sostituzione di parole). Le slide 53-73 e 93-100 sono in [Matrici e array multidimensionali](/uni/prog-1/matrici-e-array-multidimensionali/). Prima: [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/) e [Switch](/uni/prog-1/switch/). Dopo: [Stringhe](/uni/prog-1/stringhe/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cos'è un array (celle consecutive e omogenee, un solo identificatore, accesso per indice), perché gli indici vanno da 0 a $n - 1$, cosa succede con un indice fuori range, perché non si può assegnare, confrontare o stampare un array intero, cosa fa l'inizializzazione parziale `{5, 2}`, differenza fra array statico e VLA.
> - **Saper fare**: tracciare un programma che scrive e legge celle con indici calcolati (`a[i--]`, `a[3*z+y]`, `a[a[k]]`), disegnando l'array come una riga di caselle; scrivere i cicli tipici: riempire da input, stampare, sommare, trovare il massimo e la sua posizione, cercare, contare con un array di contatori, invertire, spostare e inserire; usare un array come pila di cifre o caratteri da stampare al contrario.
> - **Dove esce**: nella teorica i tracing "scrivi l'output esatto" leggono spesso le cifre della matricola in un array e i SI/NO chiedono cosa succede con un array (vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore l'array c'è sempre: `char nome[20]` nella struct, coda FIFO circolare e stack sono array con un indice che non deve uscire dai bordi.

Il filo del deck:

```
variabili strutturate    dopo le istruzioni, la macchina astratta si arricchisce di dati
   |
array                    celle consecutive, stesso tipo, un nome, un indice da 0
   |
dichiarazione            int a[100]: dimensione fissa, nota a tempo di compilazione
   |
niente operazioni        array = x, array1 = array2, printf("%d", voti): tutti sbagliati
in blocco                si lavora cella per cella
   |
inizializzazione         {5, 2, -5}, {0}, oppure con un ciclo (da input, da algoritmo)
   |
esempi                   conta, scala 1-2-3, inverti, conta cifre, decimale -> binario,
                         istogramma (per casa)
   |
array dinamici, VLA      dimensione decisa a tempo di esecuzione (cenni)
   |
sostituzione parole      tre array di caratteri e due cicli annidati
```

## Definizioni

**Array** (<span class="src">slide 5-7</span>). Il più semplice tipo di dato strutturato: una **sequenza di celle di memoria consecutive e omogenee** (tutte dello stesso tipo), con un **identificatore unico** per tutto l'insieme. A ciascuna cella si accede con un **indice** intero $\geq 0$ fra parentesi quadre: `matricola[0]`, `matricola[1]`, … Il prof lo chiama un *contenitore* di tante variabili dello stesso tipo, che hanno per nome l'identificatore e si distinguono per l'indice.

L'intuizione: una fila di caselle postali numerate. Il nome della fila è uno solo, il numero sulla casella dice quale aprire. Con variabili semplici, per 100 voti servirebbero 100 nomi diversi e nessun ciclo potrebbe scorrerli. Con un array il nome è uno solo e l'indice è un'espressione, quindi un `for` visita tutte le celle. Gli esempi delle slide 3-5 sono un vettore di forze, i coefficienti $a_0, a_1, \ldots, a_n$ di un polinomio, le matricole degli studenti di un corso (un insieme definito da una relazione).

**Accesso `a[i]`** (<span class="src">slide 8-10</span>). Le parentesi quadre sono un **operatore** ad alta precedenza, come le tonde, e associano da sinistra. Fra le quadre può esserci qualsiasi espressione che dia un valore intero. Per eseguire `a[i]` la macchina astratta:
1. calcola il valore dell'indice;
2. lo usa per trovare l'indirizzo della cella partendo da quello della prima, cioè della cella di indice 0.

Il primo elemento ha **sempre indice 0**. Un elemento è a tutti gli effetti una variabile del tipo dell'array: sta a sinistra di un'assegnazione (l-value) o dentro un'espressione (r-value), si passa a `scanf` con `&a[i]`, si incrementa con `a[i]++`.

<figure class="fig"><svg role="img" aria-label="Array in memoria" xmlns:xlink="http://www.w3.org/1999/xlink" width="510.48pt" height="200.016pt" viewBox="0 0 510.48 200.016" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="fd6f7f6-figure_1"> <g id="fd6f7f6-patch_1"> <path d="M 0 200.016 L 510.48 200.016 L 510.48 0 L 0 0 L 0 200.016 z " style="fill: none"/> </g> <g id="fd6f7f6-axes_1"> <g id="fd6f7f6-patch_2"> <path d="M 50.112 116.64 L 122.184 116.64 L 122.184 72.288 L 50.112 72.288 L 50.112 116.64 z " clip-path="url(#fd6f7f6-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fd6f7f6-patch_3"> <path d="M 122.184 116.64 L 194.256 116.64 L 194.256 72.288 L 122.184 72.288 L 122.184 116.64 z " clip-path="url(#fd6f7f6-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fd6f7f6-patch_4"> <path d="M 194.256 116.64 L 266.328 116.64 L 266.328 72.288 L 194.256 72.288 L 194.256 116.64 z " clip-path="url(#fd6f7f6-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fd6f7f6-patch_5"> <path d="M 266.328 116.64 L 338.4 116.64 L 338.4 72.288 L 266.328 72.288 L 266.328 116.64 z " clip-path="url(#fd6f7f6-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fd6f7f6-patch_6"> <path d="M 338.4 116.64 L 410.472 116.64 L 410.472 72.288 L 338.4 72.288 L 338.4 116.64 z " clip-path="url(#fd6f7f6-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="fd6f7f6-patch_7"> <path d="M 410.472 116.64 L 482.544 116.64 L 482.544 72.288 L 410.472 72.288 L 410.472 116.64 z " clip-path="url(#fd6f7f6-p7d70df820e)" style="fill: none; stroke-dasharray: 5.55,2.4; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="fd6f7f6-text_1"> <!-- a --> <g style="fill: var(--fig-accent)" transform="translate(11.304 98.62025) scale(0.16 -0.16)"> <defs> <path id="fd6f7f6-DejaVuSansMono-Bold-44" d="M 2188 1644 Q 1675 1644 1472 1512 Q 1269 1381 1269 1063 Q 1269 825 1409 684 Q 1550 544 1791 544 Q 2153 544 2353 817 Q 2553 1091 2553 1581 L 2553 1644 L 2188 1644 z M 3463 1997 L 3463 0 L 2553 0 L 2553 391 Q 2388 159 2128 34 Q 1869 -91 1556 -91 Q 959 -91 626 225 Q 294 541 294 1106 Q 294 1719 691 2011 Q 1088 2303 1919 2303 L 2553 2303 L 2553 2456 Q 2553 2678 2392 2792 Q 2231 2906 1919 2906 Q 1591 2906 1283 2823 Q 975 2741 641 2559 L 641 3341 Q 944 3466 1256 3525 Q 1569 3584 1919 3584 Q 2772 3584 3117 3237 Q 3463 2891 3463 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-Bold-44"/> </g> </g> <g id="fd6f7f6-text_2"> <!-- 5 --> <g style="fill: var(--fig-ink)" transform="translate(81.69425 98.100719) scale(0.14 -0.14)"> <defs> <path id="fd6f7f6-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-18"/> </g> </g> <g id="fd6f7f6-text_3"> <!-- a[0] --> <g style="fill: var(--fig-accent)" transform="translate(71.69925 58.773656) scale(0.12 -0.12)"> <defs> <path id="fd6f7f6-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSansMono-3e" d="M 1447 4863 L 2772 4863 L 2772 4416 L 2022 4416 L 2022 -397 L 2772 -397 L 2772 -844 L 1447 -844 L 1447 4863 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSansMono-40" d="M 2406 4863 L 2406 -844 L 1081 -844 L 1081 -397 L 1831 -397 L 1831 4416 L 1081 4416 L 1081 4863 L 2406 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-44"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_4"> <!-- 1000 --> <g style="fill: var(--fig-axis)" transform="translate(72.903312 136.129422) scale(0.11 -0.11)"> <defs> <path id="fd6f7f6-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-14"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_5"> <!-- 2 --> <g style="fill: var(--fig-ink)" transform="translate(153.76625 98.100719) scale(0.14 -0.14)"> <defs> <path id="fd6f7f6-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-15"/> </g> </g> <g id="fd6f7f6-text_6"> <!-- a[1] --> <g style="fill: var(--fig-accent)" transform="translate(143.77125 58.773656) scale(0.12 -0.12)"> <use xlink:href="#fd6f7f6-DejaVuSansMono-44"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_7"> <!-- 1004 --> <g style="fill: var(--fig-axis)" transform="translate(144.975312 136.129422) scale(0.11 -0.11)"> <defs> <path id="fd6f7f6-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-14"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-17" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_8"> <!-- -5 --> <g style="fill: var(--fig-ink)" transform="translate(223.472469 98.100719) scale(0.14 -0.14)"> <defs> <path id="fd6f7f6-DejaVuSerif-10" d="M 281 1959 L 1881 1959 L 1881 1472 L 281 1472 L 281 1959 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-10"/> <use xlink:href="#fd6f7f6-DejaVuSerif-18" transform="translate(33.796875 0)"/> </g> </g> <g id="fd6f7f6-text_9"> <!-- a[2] --> <g style="fill: var(--fig-accent)" transform="translate(215.84325 58.773656) scale(0.12 -0.12)"> <defs> <path id="fd6f7f6-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-44"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-15" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_10"> <!-- 1008 --> <g style="fill: var(--fig-axis)" transform="translate(217.047313 136.129422) scale(0.11 -0.11)"> <defs> <path id="fd6f7f6-DejaVuSansMono-1b" d="M 1925 2216 Q 1503 2216 1273 1980 Q 1044 1744 1044 1313 Q 1044 881 1276 642 Q 1509 403 1925 403 Q 2350 403 2579 639 Q 2809 875 2809 1313 Q 2809 1741 2576 1978 Q 2344 2216 1925 2216 z M 1375 2478 Q 972 2581 745 2862 Q 519 3144 519 3541 Q 519 4097 897 4423 Q 1275 4750 1925 4750 Q 2578 4750 2956 4423 Q 3334 4097 3334 3541 Q 3334 3144 3107 2862 Q 2881 2581 2478 2478 Q 2947 2375 3195 2062 Q 3444 1750 3444 1253 Q 3444 622 3041 265 Q 2638 -91 1925 -91 Q 1213 -91 811 264 Q 409 619 409 1247 Q 409 1747 657 2061 Q 906 2375 1375 2478 z M 1147 3481 Q 1147 3106 1347 2909 Q 1547 2713 1925 2713 Q 2306 2713 2506 2909 Q 2706 3106 2706 3481 Q 2706 3863 2507 4063 Q 2309 4263 1925 4263 Q 1547 4263 1347 4061 Q 1147 3859 1147 3481 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-14"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-1b" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_11"> <!-- 10 --> <g style="fill: var(--fig-ink)" transform="translate(293.4565 98.100719) scale(0.14 -0.14)"> <defs> <path id="fd6f7f6-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-14"/> <use xlink:href="#fd6f7f6-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> <g id="fd6f7f6-text_12"> <!-- a[3] --> <g style="fill: var(--fig-accent)" transform="translate(287.91525 58.773656) scale(0.12 -0.12)"> <defs> <path id="fd6f7f6-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-44"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-16" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_13"> <!-- 1012 --> <g style="fill: var(--fig-axis)" transform="translate(289.119312 136.129422) scale(0.11 -0.11)"> <use xlink:href="#fd6f7f6-DejaVuSansMono-14"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-15" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_14"> <!-- 234 --> <g style="fill: var(--fig-ink)" transform="translate(361.07475 98.100719) scale(0.14 -0.14)"> <defs> <path id="fd6f7f6-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-15"/> <use xlink:href="#fd6f7f6-DejaVuSerif-16" transform="translate(63.625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-17" transform="translate(127.25 0)"/> </g> </g> <g id="fd6f7f6-text_15"> <!-- a[4] --> <g style="fill: var(--fig-accent)" transform="translate(359.98725 58.773656) scale(0.12 -0.12)"> <use xlink:href="#fd6f7f6-DejaVuSansMono-44"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-17" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_16"> <!-- 1016 --> <g style="fill: var(--fig-axis)" transform="translate(361.191312 136.129422) scale(0.11 -0.11)"> <defs> <path id="fd6f7f6-DejaVuSansMono-19" d="M 3097 4563 L 3097 3981 Q 2900 4097 2678 4158 Q 2456 4219 2216 4219 Q 1616 4219 1306 3767 Q 997 3316 997 2438 Q 1147 2750 1412 2917 Q 1678 3084 2022 3084 Q 2697 3084 3067 2670 Q 3438 2256 3438 1497 Q 3438 741 3056 325 Q 2675 -91 1984 -91 Q 1172 -91 794 492 Q 416 1075 416 2328 Q 416 3509 870 4129 Q 1325 4750 2188 4750 Q 2419 4750 2650 4701 Q 2881 4653 3097 4563 z M 1972 2591 Q 1569 2591 1337 2300 Q 1106 2009 1106 1497 Q 1106 984 1337 693 Q 1569 403 1972 403 Q 2391 403 2603 679 Q 2816 956 2816 1497 Q 2816 2041 2603 2316 Q 2391 2591 1972 2591 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-14"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-19" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_17"> <!-- ? --> <g style="fill: var(--fig-faint)" transform="translate(442.755344 98.100719) scale(0.14 -0.14)"> <defs> <path id="fd6f7f6-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-22"/> </g> </g> <g id="fd6f7f6-text_18"> <!-- a[5] --> <g style="fill: var(--fig-faint)" transform="translate(432.05925 58.773656) scale(0.12 -0.12)"> <defs> <path id="fd6f7f6-DejaVuSansMono-18" d="M 647 4666 L 3009 4666 L 3009 4134 L 1222 4134 L 1222 2988 Q 1356 3038 1492 3061 Q 1628 3084 1766 3084 Q 2491 3084 2916 2656 Q 3341 2228 3341 1497 Q 3341 759 2895 334 Q 2450 -91 1678 -91 Q 1306 -91 998 -41 Q 691 9 447 109 L 447 750 Q 734 594 1025 517 Q 1316 441 1619 441 Q 2141 441 2423 716 Q 2706 991 2706 1497 Q 2706 1997 2414 2275 Q 2122 2553 1600 2553 Q 1347 2553 1106 2495 Q 866 2438 647 2322 L 647 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSansMono-44"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-18" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_19"> <!-- 1020 --> <g style="fill: var(--fig-faint)" transform="translate(433.263312 136.129422) scale(0.11 -0.11)"> <use xlink:href="#fd6f7f6-DejaVuSansMono-14"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-15" transform="translate(120.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="fd6f7f6-text_20"> <!-- fuori dall'array --> <g style="fill: var(--fig-accent)" transform="translate(408.52675 24.990047) scale(0.1 -0.1)"> <defs> <path id="fd6f7f6-DejaVuSerif-Italic-49" d="M 3191 4078 L 2887 4078 Q 2900 4144 2900 4203 Q 2900 4347 2825 4434 Q 2719 4556 2472 4556 Q 2150 4556 1984 4379 Q 1819 4203 1731 3750 L 1647 3322 L 2575 3322 L 2509 2988 L 1581 2988 L 962 -206 Q 853 -763 509 -1047 Q 166 -1331 -394 -1331 L -356 -1025 Q -28 -1025 131 -850 Q 297 -663 387 -206 L 1006 2988 L 456 2988 L 522 3322 L 1072 3322 L 1153 3738 Q 1262 4297 1606 4578 Q 1950 4863 2509 4863 Q 2719 4863 2920 4825 Q 3122 4788 3316 4709 L 3191 4078 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-49"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-58" transform="translate(37.015625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-52" transform="translate(101.421875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-55" transform="translate(161.625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-4c" transform="translate(209.421875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-3" transform="translate(241.40625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-47" transform="translate(273.1875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-44" transform="translate(337.203125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-4f" transform="translate(396.828125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-4f" transform="translate(428.8125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-a" transform="translate(460.796875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-44" transform="translate(488.28125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-55" transform="translate(547.90625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-55" transform="translate(595.703125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-44" transform="translate(643.5 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-Italic-5c" transform="translate(703.125 0)"/> </g> </g> <g id="fd6f7f6-patch_8"> <path d="M 51.789051 160.992 Q 230.292 160.992 408.794949 160.992 " style="fill: none; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 55.789051 162.992 L 51.789051 160.992 L 55.789051 158.992 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 404.794949 158.992 L 408.794949 160.992 L 404.794949 162.992 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="fd6f7f6-text_21"> <!-- int a[5]: indici da 0 a 4, celle consecutive di 4 byte --> <g style="fill: var(--fig-steel)" transform="translate(89.434422 183.253852) scale(0.11 -0.11)"> <defs> <path id="fd6f7f6-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-40" d="M 1947 4863 L 1947 -844 L 494 -844 L 494 -513 L 1350 -513 L 1350 4531 L 494 4531 L 494 4863 L 1947 4863 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="fd6f7f6-DejaVuSerif-5c" d="M 1381 -609 L 1600 -56 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 1703 -750 Q 1547 -1138 1356 -1280 Q 1166 -1422 819 -1422 Q 672 -1422 517 -1397 Q 363 -1372 206 -1325 L 206 -691 L 500 -691 Q 519 -903 608 -995 Q 697 -1088 884 -1088 Q 1056 -1088 1161 -992 Q 1266 -897 1381 -609 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#fd6f7f6-DejaVuSerif-4c"/> <use xlink:href="#fd6f7f6-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-57" transform="translate(96.390625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(136.578125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-44" transform="translate(168.359375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3e" transform="translate(227.984375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-18" transform="translate(267 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-40" transform="translate(330.625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-1d" transform="translate(369.640625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(403.328125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-4c" transform="translate(435.109375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-51" transform="translate(467.09375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-47" transform="translate(531.5 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-4c" transform="translate(595.515625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-46" transform="translate(627.5 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-4c" transform="translate(683.5 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(715.484375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-47" transform="translate(747.265625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-44" transform="translate(811.28125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(870.90625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-13" transform="translate(902.6875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(966.3125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-44" transform="translate(998.09375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(1057.71875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-17" transform="translate(1089.5 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-f" transform="translate(1153.125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(1184.90625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-46" transform="translate(1216.6875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-48" transform="translate(1272.6875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-4f" transform="translate(1331.875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-4f" transform="translate(1363.859375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-48" transform="translate(1395.84375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(1455.03125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-46" transform="translate(1486.8125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-52" transform="translate(1542.8125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-51" transform="translate(1603.015625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-56" transform="translate(1667.421875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-48" transform="translate(1718.734375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-46" transform="translate(1777.921875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-58" transform="translate(1833.921875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-57" transform="translate(1898.328125 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-4c" transform="translate(1938.515625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-59" transform="translate(1970.5 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-48" transform="translate(2027 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(2086.1875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-47" transform="translate(2117.96875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-4c" transform="translate(2181.984375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(2213.96875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-17" transform="translate(2245.75 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-3" transform="translate(2309.375 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-45" transform="translate(2341.15625 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-5c" transform="translate(2405.171875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-57" transform="translate(2461.671875 0)"/> <use xlink:href="#fd6f7f6-DejaVuSerif-48" transform="translate(2501.859375 0)"/> </g> </g> </g> </g> <defs> <clipPath id="fd6f7f6-p7d70df820e"> <rect x="5.76" y="5.76" width="498.96" height="188.496"/> </clipPath> </defs> </svg></figure>

Le slide 9-12 disegnano gli indirizzi come 1000, 1001, 1002: è una semplificazione in cui ogni cella vale "una posizione". Con `int` da 4 byte (quello che dà `sizeof(int)` su gcc) gli indirizzi veri avanzano di 4, come nella figura. La formula resta la stessa: indirizzo di `a[i]` uguale a indirizzo di `a[0]` più $i$ volte la dimensione di un elemento. Per questo l'indice parte da 0: è lo **spostamento** dalla prima cella, e la prima cella è a spostamento zero.

Esempio 1, indici calcolati. Si calcola prima l'espressione fra quadre, poi si apre la casella.

```c
#include <stdio.h>

int main(void)
{
    int a[5] = {10, 20, 30, 40, 50};
    int i = 2;

    printf("%d %d %d\n", a[i], a[i + 1], a[2 * i]);
    a[i - 1] = a[0] + a[4];
    a[i]++;
    printf("%d %d\n", a[1], a[2]);
    return 0;
}
```

| istruzione | indice calcolato | effetto | `a` dopo |
| --- | --- | --- | --- |
| dichiarazioni | | | `10 20 30 40 50`, `i` = 2 |
| `printf(... a[i], a[i + 1], a[2 * i])` | 2, 3, 4 | legge 30, 40, 50 | invariato |
| `a[i - 1] = a[0] + a[4];` | 1 | `a[1]` = 10 + 50 = 60 | `10 60 30 40 50` |
| `a[i]++;` | 2 | `a[2]` = 30 + 1 | `10 60 31 40 50` |

Output (verificato):

```
30 40 50
60 31
```

Esempio 2, un array che fa da indice a sé stesso. È il tipo di riga che esce nei tracing: si risolve **dall'interno verso l'esterno**.

```c
#include <stdio.h>

int main(void)
{
    int a[4] = {2, 0, 3, 1};
    int k;

    printf("%d %d %d\n", a[a[0]], a[a[a[0]]], a[3 - a[3]]);
    for (k = 0; k < 4; k++)
        printf("%d ", a[a[k]]);
    printf("\n");
    return 0;
}
```

```
a[a[0]]        a[0] = 2, quindi a[2] = 3
a[a[a[0]]]     a[a[0]] = 3 (riga sopra), quindi a[3] = 1
a[3 - a[3]]    a[3] = 1, 3 - 1 = 2, quindi a[2] = 3
```

| `k` | `a[k]` | `a[a[k]]` |
| --- | --- | --- |
| 0 | 2 | `a[2]` = 3 |
| 1 | 0 | `a[0]` = 2 |
| 2 | 3 | `a[3]` = 1 |
| 3 | 1 | `a[1]` = 0 |

Output (verificato): `3 1 3`, poi `3 2 1 0 `. Controllo: ogni indice calcolato sta fra 0 e 3, perché i valori dell'array stanno fra 0 e 3; con un valore 4 nell'array si uscirebbe dai bordi.

**Dichiarazione** (<span class="src">slide 11-12</span>, <span class="src">21-22</span>). Come ogni oggetto C, un array va dichiarato prima dell'uso:

```
int a[100];                     100 variabili int, indici da 0 a 99
int voti[20];                   indici da 0 a 19
float TemperatureMensili[31];   indici da 0 a 30
```

Il compilatore riserva subito lo spazio per tutti gli elementi: 100 volte quello di un `int`. È un **array statico**: la dimensione è nota a tempo di compilazione e, una volta dichiarato, **non si può cambiare**. In generale un array di $n$ elementi ha indici da $0$ a $n - 1$.

**Array come costruttore di tipo** (<span class="src">slide 20</span>). In C l'array **non è un tipo** ma un **costruttore di tipo**: da `int` costruisce "array di 5 `int`", da `char` "array di 100 `char`". Per questo, con le parole della slide, "la variabile X è di tipo array" è formalmente errato: `X` è di tipo "array di 5 `int`", e la dimensione fa parte del tipo.

**Inizializzazione** (<span class="src">slide 23</span>). Come per le variabili semplici, il valore iniziale si può (e conviene) dare nella dichiarazione:

```
int a[5] = {5, 2, -5, 10, 234};    tutti e cinque
int b[4] = {5, 2, -5};             b[3] vale 0
int z[4] = {0};                    tutti a 0
int c[2] = {5, 2, -5};             errore: 3 valori per 2 celle
int w[] = {4, 8, 15};              dimensione dedotta: 3
```

La regola: se la lista ha **meno** valori delle celle, quelle rimaste valgono 0. Se ne ha **di più**, è un errore (la risposta al "perché?" della slide; gcc dà "excess elements in array initializer"). Senza inizializzazione il contenuto di un array automatico, cioè dichiarato dentro una funzione, è **indefinito**, come per ogni variabile locale. Gli array automatici vengono inizializzati quando si entra nel blocco, quelli `static` prima che il programma parta.

La slide 23 dichiara `b` due volte e scrive `int b[4] = {0}` senza `;`: nella nota il secondo si chiama `z`.

Esempio 3, lista parziale e inizializzazione "da algoritmo" (la terza domanda della slide 36): quando i valori seguono una regola, li calcola un ciclo, anche usando le celle già riempite.

```c
#include <stdio.h>

#define N 6

int main(void)
{
    int v[N] = {1, 2};
    int q[N];
    int p[N];
    int i;

    for (i = 0; i < N; i++)
        printf("%d ", v[i]);
    printf("\n");
    p[0] = 1;
    for (i = 0; i < N; i++) {
        q[i] = i * i;
        if (i > 0)
            p[i] = 2 * p[i - 1];
    }
    for (i = 0; i < N; i++)
        printf("%d/%d ", q[i], p[i]);
    printf("\n");
    return 0;
}
```

| `i` | `q[i] = i * i` | `p[i] = 2 * p[i - 1]` |
| --- | --- | --- |
| 0 | 0 | (dato prima del ciclo) 1 |
| 1 | 1 | 2 · 1 = 2 |
| 2 | 4 | 2 · 2 = 4 |
| 3 | 9 | 2 · 4 = 8 |
| 4 | 16 | 2 · 8 = 16 |
| 5 | 25 | 2 · 16 = 32 |

Output (verificato):

```
1 2 0 0 0 0 
0/1 1/2 4/4 9/8 16/16 25/32 
```

`{1, 2}` riempie le prime due celle e azzera le altre quattro. `p[0]` va dato **prima** del ciclo, e l'`if (i > 0)` evita di leggere `p[-1]`.

## Concetti

### Indici fuori range

(<span class="src">slide 13-14</span>) Domanda della slide: con `int a[100]`, cosa succede usando `a[100]` o `a[101]`? Il C **non controlla** gli indici. `a[100]` calcola l'indirizzo della cella "dopo l'ultima" e ci legge o scrive comunque. Quello che c'è in quella memoria non appartiene all'array: può essere un'altra variabile, che viene sovrascritta in silenzio, o una zona protetta, e allora il programma termina con *segmentation fault*. Lo standard lo chiama **comportamento indefinito**: può sembrare funzionare oggi e rompersi domani.

L'errore classico è la condizione `<=` al posto di `<`:

```
int a[5];
for (i = 0; i <= 5; i++)
    a[i] = 0;
```

| `i` | `i <= 5` | scrive |
| --- | --- | --- |
| 0 … 4 | vero | `a[0]` … `a[4]`, dentro l'array |
| 5 | vero | `a[5]`: **fuori**, la cella dopo l'ultima |
| 6 | falso | esce |

Provato: con `gcc -std=c11 -Wall -Wextra -Wpedantic` compila **senza alcun avviso**. Solo con `-O2` gcc se ne accorge (`array subscript 5 is above array bounds of 'int[5]'`), e compilando con `-fsanitize=address` il programma si ferma a runtime con `stack-buffer-overflow`. Il compilatore non è una rete di sicurezza: i limiti li controlli tu.

Conseguenza pratica: ogni ciclo che scrive in un array deve avere nella condizione il limite della dimensione. Gli esempi sotto (inversione, sostituzione parole) controllano sempre `indice < MAX`.

### Niente operazioni sull'array intero

(<span class="src">slide 19</span>) Con `int x; int array[5]; int array1[5]; int array2[4];` **nessuna** di queste assegnazioni è corretta:

```
array = 5;          array = x;          array1 = array;          array1 = array2;
```

gcc rifiuta con "assignment to expression with array type". Anche se `array1` e `array` hanno la stessa dimensione, la copia si fa cella per cella con un ciclo. Vale lo stesso per il confronto: `a == b` fra due array compila ma confronta gli **indirizzi** delle prime celle, non il contenuto, e vale sempre falso per due array distinti (provato: con `{1, 2, 3}` in entrambi vale 0, e gcc `-Wall` avvisa `comparison between two arrays`). Per sapere se due array sono uguali si confrontano gli elementi uno a uno (lo fa la sostituzione parole, slide 89).

Esempio, copia e confronto:

```c
#include <stdio.h>

#define N 4

int main(void)
{
    int a[N] = {3, 1, 4, 1};
    int b[N];
    int c[N] = {3, 1, 5, 1};
    int i;

    for (i = 0; i < N; i++)
        b[i] = a[i];
    i = 0;
    while (i < N && a[i] == b[i])
        i++;
    printf("a e b: %s\n", i == N ? "uguali" : "diversi");
    i = 0;
    while (i < N && a[i] == c[i])
        i++;
    if (i == N)
        printf("a e c: uguali\n");
    else
        printf("a e c: diversi in posizione %d\n", i);
    return 0;
}
```

Il confronto fra `a` e `c`, passo per passo:

| `i` | `i < N` | `a[i] == c[i]` | cosa fa |
| --- | --- | --- | --- |
| 0 | vero | 3 == 3 vero | `i++` |
| 1 | vero | 1 == 1 vero | `i++` |
| 2 | vero | 4 == 5 falso | esce con `i` = 2 |

Output (verificato): `a e b: uguali`, poi `a e c: diversi in posizione 2`. Il `while` si ferma alla **prima** differenza; se arriva in fondo, `i` vale `N` e gli array coincidono. `i < N` sta **prima** del confronto: quando `i` vale `N` l'AND è già falso e `a[N]` non viene letto (cortocircuito).

### Stampare un array

(<span class="src">slide 24-27</span>) `printf("%d", voti);` è **sbagliato**: `voti` da solo non è il contenuto ma l'indirizzo della prima cella, e gcc avvisa "format '%d' expects argument of type 'int', but argument 2 has type 'int *'". Si stampa un elemento alla volta:

```c
#include <stdio.h>

int main(void)
{
    int voti[5] = {1, 2, 6, -3, 2};
    int i;

    for (i = 0; i < 5; i++)
        printf("%d", voti[i]);
    printf("\n");
    return 0;
}
```

Stampa `126-32` (verificato): la versione "corretta" della slide 27 non mette separatori e i numeri si incollano. Con `printf("%d ", voti[i])` diventa `1 2 6 -3 2 `, con uno spazio anche dopo l'ultimo. Le slide 25-26 usano le virgolette tipografiche `“%d”`, che non compilano.

Se il formato d'uscita è preciso (per esempio `[1, 2, 6, -3, 2]`, come chiedono le stampe della prova al calcolatore), il separatore va stampato **fra** gli elementi, non dopo ognuno:

```
printf("[");
for (i = 0; i < 5; i++) {
    if (i > 0) printf(", ");
    printf("%d", voti[i]);
}
printf("]\n");
```

### Dimensione con `#define` e `sizeof`

La dimensione di un array statico deve essere una **costante**. Scriverla una volta sola con `#define` evita di cambiare 100 in un punto e dimenticarlo in un altro:

```
#define N_VOTI 5
int voti[N_VOTI];
for (i = 0; i < N_VOTI; i++) ...
```

`sizeof` dà i byte occupati: `sizeof(voti)` vale 20 con `int` da 4 byte, e `sizeof(voti) / sizeof(voti[0])` dà il numero di elementi. Il risultato è di tipo `size_t` e si stampa con `%zu` (le slide usano `%lu`, che su alcuni sistemi non coincide).

```c
#include <stdio.h>

#define N 3

int main(void)
{
    int array_s[N];
    double temperature[31];

    array_s[N - 1] = 1;
    printf("array_s[%d]=%d\n", N - 1, array_s[N - 1]);
    printf("sizeof(int)=%zu\n", sizeof(int));
    printf("sizeof(array_s)=%zu\n", sizeof(array_s));
    printf("elementi di temperature=%zu\n", sizeof(temperature) / sizeof(temperature[0]));
    return 0;
}
```

Output (verificato su gcc, x86-64):

```
array_s[2]=1
sizeof(int)=4
sizeof(array_s)=12
elementi di temperature=31
```

`sizeof(temperature)` è $31 \cdot 8 = 248$ byte (un `double` occupa 8 byte), diviso 8 dà 31.

### I cicli tipici

Quasi ogni esercizio su array è uno di questi cicli (lo schema riassunto è sotto, in Metodo). Qui ognuno con un esempio tracciato.

**Accumulatori: somma, media, conteggio.** Un accumulatore è una variabile che raccoglie un risultato giro dopo giro; va azzerata **prima** del ciclo.

```c
#include <stdio.h>

#define N 5

int main(void)
{
    int voti[N] = {24, 30, 18, 27, 21};
    int somma = 0;
    int sopra = 0;
    double media;
    int i;

    for (i = 0; i < N; i++)
        somma += voti[i];
    media = (double)somma / N;
    for (i = 0; i < N; i++)
        if (voti[i] > media)
            sopra++;
    printf("somma=%d media=%.1f sopra=%d\n", somma, media, sopra);
    return 0;
}
```

| `i` | `voti[i]` | `somma` dopo | `voti[i] > 24.0` | `sopra` dopo |
| --- | --- | --- | --- | --- |
| 0 | 24 | 24 | no | 0 |
| 1 | 30 | 54 | sì | 1 |
| 2 | 18 | 72 | no | 1 |
| 3 | 27 | 99 | sì | 2 |
| 4 | 21 | 120 | no | 2 |

Output: `somma=120 media=24.0 sopra=2` (verificato). Servono **due** cicli: per contare chi supera la media bisogna prima conoscerla, e questo è proprio il caso in cui i valori vanno tenuti in un array invece di leggerli e dimenticarli. Il cast `(double)somma` evita la divisione intera ($120 / 5$ darebbe lo stesso 24, ma $121 / 5$ darebbe 24 invece di 24.2).

**Massimo, minimo e loro posizione.** Si parte dal **primo elemento**, non da 0: con valori tutti negativi un massimo inizializzato a 0 sarebbe sbagliato.

```c
#include <stdio.h>

#define N 6

int main(void)
{
    int t[N] = {-4, -1, -7, -1, -3, -2};
    int pos_max = 0;
    int pos_min = 0;
    int i;

    for (i = 1; i < N; i++) {
        if (t[i] > t[pos_max])
            pos_max = i;
        if (t[i] < t[pos_min])
            pos_min = i;
    }
    printf("max=%d in %d, min=%d in %d\n", t[pos_max], pos_max, t[pos_min], pos_min);
    return 0;
}
```

| `i` | `t[i]` | `t[i] > t[pos_max]` | `pos_max` | `t[i] < t[pos_min]` | `pos_min` |
| --- | --- | --- | --- | --- | --- |
| (inizio) | | | 0 (vale -4) | | 0 (vale -4) |
| 1 | -1 | -1 > -4 sì | 1 | no | 0 |
| 2 | -7 | no | 1 | -7 < -4 sì | 2 |
| 3 | -1 | -1 > -1 **no** | 1 | no | 2 |
| 4 | -3 | no | 1 | no | 2 |
| 5 | -2 | no | 1 | no | 2 |

Output: `max=-1 in 1, min=-7 in 2` (verificato). Il massimo -1 compare in posizione 1 e 3: con `>` stretto si tiene la **prima** occorrenza; con `>=` la riga 3 aggiornerebbe e si terrebbe l'ultima. Con `int max = 0` il programma avrebbe stampato 0, che nell'array non c'è.

**Ricerca.** Si scorre finché non si trova **e** finché non si arriva in fondo: due condizioni nel `while`.

```c
#include <stdio.h>

#define N 5

int main(void)
{
    int v[N] = {8, 3, 9, 3, 1};
    int x;
    int i;

    x = 3;
    i = 0;
    while (i < N && v[i] != x)
        i++;
    if (i < N)
        printf("%d trovato in %d\n", x, i);
    else
        printf("%d non trovato\n", x);
    x = 7;
    i = 0;
    while (i < N && v[i] != x)
        i++;
    if (i < N)
        printf("%d trovato in %d\n", x, i);
    else
        printf("%d non trovato, i=%d\n", x, i);
    return 0;
}
```

| `x` | `i` | `i < N` | `v[i] != x` | |
| --- | --- | --- | --- | --- |
| 3 | 0 | vero | 8 != 3 vero | `i++` |
| 3 | 1 | vero | 3 != 3 falso | esce, trovato in 1 |
| 7 | 0 … 4 | vero | sempre vero | `i++` cinque volte |
| 7 | 5 | **falso** | non valutato | esce, non trovato |

Output (verificato): `3 trovato in 1`, poi `7 non trovato, i=5`. Nell'ultima riga l'AND è già falso con `i < N` e `v[5]` non viene mai letto. Con le due condizioni scambiate (`v[i] != x && i < N`) il programma leggerebbe `v[5]`, fuori dall'array, prima di accorgersi di essere in fondo.

**Spostare e inserire.** Per far posto a un elemento si spostano gli altri a destra **partendo dal fondo**. Esempio: inserire 6 nell'array ordinato `2 5 8 11` (4 elementi usati su 6 celle) mantenendolo ordinato.

```c
#include <stdio.h>

#define MAX 6

int main(void)
{
    int v[MAX] = {2, 5, 8, 11};
    int n = 4;
    int x = 6;
    int i;

    i = n - 1;
    while (i >= 0 && v[i] > x) {
        v[i + 1] = v[i];
        i--;
    }
    v[i + 1] = x;
    n++;
    for (i = 0; i < n; i++)
        printf("%d ", v[i]);
    printf("\n");
    return 0;
}
```

| `i` | `v[i] > 6` | azione | `v[0..4]` |
| --- | --- | --- | --- |
| 3 | 11 > 6 sì | `v[4] = v[3]` | `2 5 8 11 11` |
| 2 | 8 > 6 sì | `v[3] = v[2]` | `2 5 8 8 11` |
| 1 | 5 > 6 no | esce | |
| | | `v[2] = 6` | `2 5 6 8 11` |

Output: `2 5 6 8 11 ` (verificato). L'array ha due dimensioni diverse: `MAX`, le celle che esistono, e `n`, quelle usate. Si può inserire solo se `n < MAX`. Partendo da sinistra invece si ricopia sempre lo stesso valore:

```c
#include <stdio.h>

#define N 5

int main(void)
{
    int v[N] = {1, 2, 3, 4, 5};
    int i;

    for (i = 1; i < N; i++)
        v[i] = v[i - 1];
    for (i = 0; i < N; i++)
        printf("%d ", v[i]);
    printf("\n");
    return 0;
}
```

Stampa `1 1 1 1 1 ` (verificato): `v[1] = v[0]` mette 1 in `v[1]`, poi `v[2] = v[1]` copia quell'1 appena scritto, e così via. Il 2 originale è stato sovrascritto prima di essere copiato.

### Array usato come pila

Una **pila** (in inglese stack) è un contenitore in cui l'ultimo elemento messo è il primo a uscire, come una pila di piatti. Un array lo diventa con un solo indice: si scrive in avanti facendolo crescere, poi si rilegge all'indietro facendolo scendere. Serve ogni volta che i dati arrivano nell'ordine opposto a quello in cui vanno stampati: i caratteri da invertire (slide 40), i resti della conversione in binario (slide 51), le cifre di un numero.

<figure class="fig"><svg role="img" aria-label="Array come pila" xmlns:xlink="http://www.w3.org/1999/xlink" width="565.92pt" height="266.544pt" viewBox="0 0 565.92 266.544" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="faa9fb6-figure_1"> <g id="faa9fb6-patch_1"> <path d="M 0 266.544 L 565.92 266.544 L 565.92 0 L 0 0 L 0 266.544 z " style="fill: none"/> </g> <g id="faa9fb6-axes_1"> <g id="faa9fb6-patch_2"> <path d="M 100.008 116.64 L 166.536 116.64 L 166.536 72.288 L 100.008 72.288 L 100.008 116.64 z " clip-path="url(#faa9fb6-p8654a3efa1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="faa9fb6-patch_3"> <path d="M 166.536 116.64 L 233.064 116.64 L 233.064 72.288 L 166.536 72.288 L 166.536 116.64 z " clip-path="url(#faa9fb6-p8654a3efa1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="faa9fb6-patch_4"> <path d="M 233.064 116.64 L 299.592 116.64 L 299.592 72.288 L 233.064 72.288 L 233.064 116.64 z " clip-path="url(#faa9fb6-p8654a3efa1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="faa9fb6-patch_5"> <path d="M 299.592 116.64 L 366.12 116.64 L 366.12 72.288 L 299.592 72.288 L 299.592 116.64 z " clip-path="url(#faa9fb6-p8654a3efa1)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="faa9fb6-patch_6"> <path d="M 366.12 116.64 L 432.648 116.64 L 432.648 72.288 L 366.12 72.288 L 366.12 116.64 z " clip-path="url(#faa9fb6-p8654a3efa1)" style="fill: none; stroke-dasharray: 6.29,2.72; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="faa9fb6-text_1"> <!-- sequenza --> <g style="fill: var(--fig-accent)" transform="translate(11.304 97.581187) scale(0.12 -0.12)"> <defs> <path id="faa9fb6-DejaVuSansMono-Bold-56" d="M 3097 3391 L 3097 2591 Q 2844 2753 2570 2836 Q 2297 2919 2022 2919 Q 1716 2919 1559 2830 Q 1403 2741 1403 2566 Q 1403 2316 2072 2159 L 2106 2150 L 2369 2088 Q 2869 1969 3101 1705 Q 3334 1441 3334 991 Q 3334 450 2979 179 Q 2625 -91 1913 -91 Q 1597 -91 1265 -36 Q 934 19 594 128 L 594 928 Q 897 756 1211 665 Q 1525 575 1819 575 Q 2141 575 2306 669 Q 2472 763 2472 941 Q 2472 1116 2355 1209 Q 2238 1303 1797 1409 L 1544 1466 Q 1019 1584 778 1837 Q 538 2091 538 2516 Q 538 3022 903 3303 Q 1269 3584 1931 3584 Q 2228 3584 2523 3536 Q 2819 3488 3097 3391 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-Bold-48" d="M 3444 172 Q 3125 41 2794 -25 Q 2463 -91 2094 -91 Q 1216 -91 752 379 Q 288 850 288 1734 Q 288 2591 734 3087 Q 1181 3584 1953 3584 Q 2731 3584 3161 3123 Q 3591 2663 3591 1825 L 3591 1453 L 1219 1453 Q 1222 1041 1462 837 Q 1703 634 2181 634 Q 2497 634 2803 725 Q 3109 816 3444 1013 L 3444 172 z M 2669 2141 Q 2663 2503 2483 2689 Q 2303 2875 1953 2875 Q 1638 2875 1450 2683 Q 1263 2491 1228 2138 L 2669 2141 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-Bold-54" d="M 1197 1753 Q 1197 1247 1365 959 Q 1534 672 1831 672 Q 2128 672 2300 959 Q 2472 1247 2472 1753 Q 2472 2259 2300 2546 Q 2128 2834 1831 2834 Q 1534 2834 1365 2546 Q 1197 2259 1197 1753 z M 2472 494 Q 2303 200 2079 54 Q 1856 -91 1575 -91 Q 953 -91 617 384 Q 281 859 281 1747 Q 281 2622 612 3103 Q 944 3584 1544 3584 Q 1859 3584 2092 3431 Q 2325 3278 2472 2975 L 2472 3500 L 3384 3500 L 3384 -1331 L 2472 -1331 L 2472 494 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-Bold-58" d="M 500 1222 L 500 3500 L 1416 3500 L 1416 1363 Q 1416 984 1522 821 Q 1628 659 1875 659 Q 2122 659 2261 878 Q 2400 1097 2400 1491 L 2400 3500 L 3316 3500 L 3316 0 L 2400 0 L 2400 519 Q 2303 228 2070 68 Q 1838 -91 1509 -91 Q 1009 -91 754 240 Q 500 572 500 1222 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-Bold-51" d="M 3347 2272 L 3347 0 L 2438 0 L 2438 2131 Q 2438 2513 2330 2677 Q 2222 2841 1978 2841 Q 1731 2841 1589 2619 Q 1447 2397 1447 2003 L 1447 0 L 538 0 L 538 3500 L 1447 3500 L 1447 2975 Q 1544 3266 1778 3425 Q 2013 3584 2344 3584 Q 2841 3584 3094 3254 Q 3347 2925 3347 2272 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-Bold-5d" d="M 581 3500 L 3378 3500 L 3378 2784 L 1538 684 L 3378 684 L 3378 0 L 506 0 L 506 716 L 2350 2816 L 581 2816 L 581 3500 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-Bold-44" d="M 2188 1644 Q 1675 1644 1472 1512 Q 1269 1381 1269 1063 Q 1269 825 1409 684 Q 1550 544 1791 544 Q 2153 544 2353 817 Q 2553 1091 2553 1581 L 2553 1644 L 2188 1644 z M 3463 1997 L 3463 0 L 2553 0 L 2553 391 Q 2388 159 2128 34 Q 1869 -91 1556 -91 Q 959 -91 626 225 Q 294 541 294 1106 Q 294 1719 691 2011 Q 1088 2303 1919 2303 L 2553 2303 L 2553 2456 Q 2553 2678 2392 2792 Q 2231 2906 1919 2906 Q 1591 2906 1283 2823 Q 975 2741 641 2559 L 641 3341 Q 944 3466 1256 3525 Q 1569 3584 1919 3584 Q 2772 3584 3117 3237 Q 3463 2891 3463 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-56"/> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-48" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-54" transform="translate(120.40625 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-58" transform="translate(180.609375 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-48" transform="translate(240.8125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-51" transform="translate(301.015625 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-5d" transform="translate(361.21875 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-Bold-44" transform="translate(421.421875 0)"/> </g> </g> <g id="faa9fb6-text_2"> <!-- 'c' --> <g style="fill: var(--fig-ink)" transform="translate(122.435437 97.581187) scale(0.12 -0.12)"> <defs> <path id="faa9fb6-DejaVuSansMono-a" d="M 2194 4666 L 2194 2931 L 1650 2931 L 1650 4666 L 2194 4666 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-46" d="M 3316 178 Q 3084 44 2839 -23 Q 2594 -91 2338 -91 Q 1525 -91 1067 396 Q 609 884 609 1747 Q 609 2609 1067 3096 Q 1525 3584 2338 3584 Q 2591 3584 2831 3518 Q 3072 3453 3316 3316 L 3316 2713 Q 3088 2916 2858 3006 Q 2628 3097 2338 3097 Q 1797 3097 1506 2747 Q 1216 2397 1216 1747 Q 1216 1100 1508 748 Q 1800 397 2338 397 Q 2638 397 2875 489 Q 3113 581 3316 775 L 3316 178 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-a"/> <use xlink:href="#faa9fb6-DejaVuSansMono-46" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_3"> <!-- [0] --> <g style="fill: var(--fig-axis)" transform="translate(123.338484 61.285852) scale(0.11 -0.11)"> <defs> <path id="faa9fb6-DejaVuSansMono-3e" d="M 1447 4863 L 2772 4863 L 2772 4416 L 2022 4416 L 2022 -397 L 2772 -397 L 2772 -844 L 1447 -844 L 1447 4863 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-40" d="M 2406 4863 L 2406 -844 L 1081 -844 L 1081 -397 L 1831 -397 L 1831 4416 L 1081 4416 L 1081 4863 L 2406 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-3e"/> <use xlink:href="#faa9fb6-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_4"> <!-- 'i' --> <g style="fill: var(--fig-ink)" transform="translate(188.963437 97.581656) scale(0.12 -0.12)"> <defs> <path id="faa9fb6-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-a"/> <use xlink:href="#faa9fb6-DejaVuSansMono-4c" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_5"> <!-- [1] --> <g style="fill: var(--fig-axis)" transform="translate(189.866484 61.285852) scale(0.11 -0.11)"> <defs> <path id="faa9fb6-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-3e"/> <use xlink:href="#faa9fb6-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_6"> <!-- 'a' --> <g style="fill: var(--fig-ink)" transform="translate(255.491437 97.581187) scale(0.12 -0.12)"> <defs> <path id="faa9fb6-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-a"/> <use xlink:href="#faa9fb6-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_7"> <!-- [2] --> <g style="fill: var(--fig-axis)" transform="translate(256.394484 61.285852) scale(0.11 -0.11)"> <defs> <path id="faa9fb6-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-3e"/> <use xlink:href="#faa9fb6-DejaVuSansMono-15" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_8"> <!-- 'o' --> <g style="fill: var(--fig-ink)" transform="translate(322.019437 97.581187) scale(0.12 -0.12)"> <defs> <path id="faa9fb6-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-a"/> <use xlink:href="#faa9fb6-DejaVuSansMono-52" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_9"> <!-- [3] --> <g style="fill: var(--fig-axis)" transform="translate(322.922484 61.285852) scale(0.11 -0.11)"> <defs> <path id="faa9fb6-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-3e"/> <use xlink:href="#faa9fb6-DejaVuSansMono-16" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-text_10"> <!-- ? --> <g style="fill: var(--fig-faint)" transform="translate(395.771812 97.581187) scale(0.12 -0.12)"> <defs> <path id="faa9fb6-DejaVuSansMono-22" d="M 2138 1253 L 1544 1253 L 1544 1734 Q 1544 2041 1639 2255 Q 1734 2469 1997 2725 L 2278 3003 Q 2472 3188 2545 3325 Q 2619 3463 2619 3616 Q 2619 3894 2414 4066 Q 2209 4238 1869 4238 Q 1625 4238 1347 4130 Q 1069 4022 763 3809 L 763 4397 Q 1056 4575 1354 4662 Q 1653 4750 1978 4750 Q 2559 4750 2904 4450 Q 3250 4150 3250 3647 Q 3250 3409 3145 3204 Q 3041 3000 2747 2713 L 2472 2444 Q 2256 2238 2197 2106 Q 2138 1975 2138 1784 L 2138 1638 L 2138 1253 z M 1522 794 L 2156 794 L 2156 0 L 1522 0 L 1522 794 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-22"/> </g> </g> <g id="faa9fb6-text_11"> <!-- [4] --> <g style="fill: var(--fig-faint)" transform="translate(389.450484 61.285852) scale(0.11 -0.11)"> <defs> <path id="faa9fb6-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-3e"/> <use xlink:href="#faa9fb6-DejaVuSansMono-17" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="faa9fb6-patch_7"> <path d="M 105.552 27.936 Q 233.064 27.936 358.898949 27.936 " style="fill: none; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 354.898949 25.936 L 358.898949 27.936 L 354.898949 29.936 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="faa9fb6-text_12"> <!-- scrittura: sequenza[indice] = c; indice++ --> <g style="fill: var(--fig-steel)" transform="translate(127.603844 16.674047) scale(0.1 -0.1)"> <defs> <path id="faa9fb6-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-54" d="M 3359 2988 L 3359 -997 L 3909 -997 L 3909 -1331 L 2241 -1331 L 2241 -997 L 2784 -997 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-40" d="M 1947 4863 L 1947 -844 L 494 -844 L 494 -513 L 1350 -513 L 1350 4531 L 494 4531 L 494 4863 L 1947 4863 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-1e" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z M 678 2363 Q 678 2538 798 2658 Q 919 2778 1094 2778 Q 1269 2778 1389 2656 Q 1509 2534 1509 2363 Q 1509 2188 1389 2067 Q 1269 1947 1094 1947 Q 919 1947 798 2067 Q 678 2188 678 2363 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSerif-56"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(51.3125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(107.3125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(155.109375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(187.09375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(227.28125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-58" transform="translate(267.46875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(331.875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(379.671875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-1d" transform="translate(439.296875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(472.984375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-56" transform="translate(504.765625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(556.078125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-54" transform="translate(615.265625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-58" transform="translate(679.28125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(743.6875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(802.875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-5d" transform="translate(867.28125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(919.96875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3e" transform="translate(979.59375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1018.609375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(1050.59375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-47" transform="translate(1115 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1179.015625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(1211 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(1267 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-40" transform="translate(1326.1875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1365.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-20" transform="translate(1396.984375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1480.78125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(1512.5625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-1e" transform="translate(1568.5625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1602.25 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1634.03125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(1666.015625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-47" transform="translate(1730.421875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1794.4375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(1826.421875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(1882.421875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-e" transform="translate(1941.609375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-e" transform="translate(2025.40625 0)"/> </g> </g> <g id="faa9fb6-patch_8"> <path d="M 399.384 160.992 Q 399.384 141.588 399.384 123.861051 " style="fill: none; stroke: var(--fig-accent); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 397.384 127.861051 L 399.384 123.861051 L 401.384 127.861051 z " style="fill: var(--fig-accent); stroke: var(--fig-accent); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="faa9fb6-text_13"> <!-- a fine scrittura indice = 4: --> <g style="fill: var(--fig-accent)" transform="translate(332.543375 183.451414) scale(0.1 -0.1)"> <defs> <path id="faa9fb6-DejaVuSerif-cf0" d="M 3347 4019 L 3053 4022 Q 3044 4291 2853 4423 Q 2663 4556 2278 4556 Q 1800 4556 1578 4334 Q 1356 4113 1356 3634 L 1356 3322 L 3578 3322 L 3578 331 L 4122 331 L 4122 0 L 2450 0 L 2450 331 L 3003 331 L 3003 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4238 1147 4550 Q 1513 4863 2228 4863 Q 2500 4863 2784 4822 Q 3069 4781 3347 4697 L 3347 4019 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSerif-44"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(59.625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-cf0" transform="translate(91.40625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(158.109375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(222.515625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(281.703125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-56" transform="translate(313.484375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(364.796875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(420.796875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(468.59375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(500.578125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(540.765625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-58" transform="translate(580.953125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(645.359375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(693.15625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(752.78125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(784.5625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(816.546875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-47" transform="translate(880.953125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(944.96875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(976.953125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(1032.953125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1092.140625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-20" transform="translate(1123.921875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1207.71875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-17" transform="translate(1239.5 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-1d" transform="translate(1303.125 0)"/> </g> <!-- il numero di caratteri, non l'ultimo indice --> <g style="fill: var(--fig-accent)" transform="translate(294.618375 195.454148) scale(0.1 -0.1)"> <defs> <path id="faa9fb6-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSerif-4c"/> <use xlink:href="#faa9fb6-DejaVuSerif-4f" transform="translate(31.984375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(63.96875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(95.75 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-58" transform="translate(160.15625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-50" transform="translate(224.5625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(319.390625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(378.578125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-52" transform="translate(426.375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(486.578125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-47" transform="translate(518.359375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(582.375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(614.359375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(646.140625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(702.140625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(761.765625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(809.5625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(869.1875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(909.375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(949.5625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(1008.75 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1056.546875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-f" transform="translate(1088.53125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1120.3125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(1152.09375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-52" transform="translate(1216.5 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(1276.703125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1341.109375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4f" transform="translate(1372.890625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-a" transform="translate(1404.875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-58" transform="translate(1432.359375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4f" transform="translate(1496.765625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(1528.75 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1568.9375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-50" transform="translate(1600.921875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-52" transform="translate(1695.75 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1755.953125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1787.734375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(1819.71875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-47" transform="translate(1884.125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1948.140625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(1980.125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(2036.125 0)"/> </g> </g> <g id="faa9fb6-patch_9"> <path d="M 360.576 133.272 Q 233.064 133.272 107.229051 133.272 " style="fill: none; stroke: var(--fig-ink); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 111.229051 135.272 L 107.229051 133.272 L 111.229051 131.272 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="faa9fb6-text_14"> <!-- lettura: indice- -; poi stampa sequenza[indice] --> <g style="fill: var(--fig-ink)" transform="translate(118.099937 152.502047) scale(0.1 -0.1)"> <defs> <path id="faa9fb6-DejaVuSerif-10" d="M 281 1959 L 1881 1959 L 1881 1472 L 281 1472 L 281 1959 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSerif-4f"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(31.984375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(91.171875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(131.359375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-58" transform="translate(171.546875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-55" transform="translate(235.953125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(283.75 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-1d" transform="translate(343.375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(377.0625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(408.84375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(440.828125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-47" transform="translate(505.234375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(569.25 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(601.234375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(657.234375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-10" transform="translate(716.421875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-10" transform="translate(750.21875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-1e" transform="translate(784.015625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(817.703125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-53" transform="translate(849.484375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-52" transform="translate(913.5 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(973.703125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1005.6875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-56" transform="translate(1037.46875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-57" transform="translate(1088.78125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(1128.96875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-50" transform="translate(1188.59375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-53" transform="translate(1283.421875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(1347.4375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3" transform="translate(1407.0625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-56" transform="translate(1438.84375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(1490.15625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-54" transform="translate(1549.34375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-58" transform="translate(1613.359375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(1677.765625 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(1736.953125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-5d" transform="translate(1801.359375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-44" transform="translate(1854.046875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-3e" transform="translate(1913.671875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(1952.6875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-51" transform="translate(1984.671875 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-47" transform="translate(2049.078125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-4c" transform="translate(2113.09375 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-46" transform="translate(2145.078125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-48" transform="translate(2201.078125 0)"/> <use xlink:href="#faa9fb6-DejaVuSerif-40" transform="translate(2260.265625 0)"/> </g> </g> <g id="faa9fb6-text_15"> <!-- stampa o a i c --> <g style="fill: var(--fig-ink)" transform="translate(174.365953 236.441461) scale(0.13 -0.13)"> <defs> <path id="faa9fb6-DejaVuSansMono-56" d="M 3041 3378 L 3041 2816 Q 2794 2959 2544 3031 Q 2294 3103 2034 3103 Q 1644 3103 1451 2976 Q 1259 2850 1259 2591 Q 1259 2356 1403 2240 Q 1547 2125 2119 2016 L 2350 1972 Q 2778 1891 2998 1647 Q 3219 1403 3219 1013 Q 3219 494 2850 201 Q 2481 -91 1825 -91 Q 1566 -91 1281 -36 Q 997 19 666 128 L 666 722 Q 988 556 1281 473 Q 1575 391 1838 391 Q 2219 391 2428 545 Q 2638 700 2638 978 Q 2638 1378 1872 1531 L 1847 1538 L 1631 1581 Q 1134 1678 906 1908 Q 678 2138 678 2534 Q 678 3038 1018 3311 Q 1359 3584 1991 3584 Q 2272 3584 2531 3532 Q 2791 3481 3041 3378 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-57" d="M 1919 4494 L 1919 3500 L 3225 3500 L 3225 3053 L 1919 3053 L 1919 1153 Q 1919 766 2066 612 Q 2213 459 2578 459 L 3225 459 L 3225 0 L 2522 0 Q 1875 0 1609 259 Q 1344 519 1344 1153 L 1344 3053 L 409 3053 L 409 3500 L 1344 3500 L 1344 4494 L 1919 4494 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-50" d="M 2113 3144 Q 2219 3369 2383 3476 Q 2547 3584 2778 3584 Q 3200 3584 3373 3257 Q 3547 2931 3547 2028 L 3547 0 L 3022 0 L 3022 2003 Q 3022 2744 2939 2923 Q 2856 3103 2638 3103 Q 2388 3103 2295 2911 Q 2203 2719 2203 2003 L 2203 0 L 1678 0 L 1678 2003 Q 1678 2753 1589 2928 Q 1500 3103 1269 3103 Q 1041 3103 952 2911 Q 863 2719 863 2003 L 863 0 L 341 0 L 341 3500 L 863 3500 L 863 3200 Q 966 3388 1120 3486 Q 1275 3584 1472 3584 Q 1709 3584 1867 3475 Q 2025 3366 2113 3144 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-53" d="M 1172 441 L 1172 -1331 L 594 -1331 L 594 3500 L 1172 3500 L 1172 3053 Q 1316 3313 1555 3448 Q 1794 3584 2106 3584 Q 2741 3584 3102 3093 Q 3463 2603 3463 1734 Q 3463 881 3100 395 Q 2738 -91 2106 -91 Q 1788 -91 1548 45 Q 1309 181 1172 441 z M 2859 1747 Q 2859 2416 2648 2756 Q 2438 3097 2022 3097 Q 1603 3097 1387 2755 Q 1172 2413 1172 1747 Q 1172 1084 1387 740 Q 1603 397 2022 397 Q 2438 397 2648 737 Q 2859 1078 2859 1747 z " transform="scale(0.015625)"/> <path id="faa9fb6-DejaVuSansMono-3" transform="scale(0.015625)"/> </defs> <use xlink:href="#faa9fb6-DejaVuSansMono-56"/> <use xlink:href="#faa9fb6-DejaVuSansMono-57" transform="translate(60.203125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-44" transform="translate(120.40625 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-50" transform="translate(180.609375 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-53" transform="translate(240.8125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-44" transform="translate(301.015625 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-3" transform="translate(361.21875 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-3" transform="translate(421.421875 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-52" transform="translate(481.625 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-3" transform="translate(541.828125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-44" transform="translate(602.03125 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-3" transform="translate(662.234375 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-4c" transform="translate(722.4375 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-3" transform="translate(782.640625 0)"/> <use xlink:href="#faa9fb6-DejaVuSansMono-46" transform="translate(842.84375 0)"/> </g> </g> </g> </g> <defs> <clipPath id="faa9fb6-p8654a3efa1"> <rect x="5.76" y="5.76" width="554.4" height="255.024"/> </clipPath> </defs> </svg></figure>

Il punto delicato è il valore dell'indice fra le due fasi. Dopo aver scritto $k$ elementi l'indice vale $k$, il **numero** di elementi, che è uno più dell'ultimo indice usato ($k - 1$). Prima di rileggere va decrementato, altrimenti la prima lettura cade su una cella mai scritta. È l'errore che la slide 50 segna in rosso.

Esempio, le cifre di un numero nell'ordine giusto. `% 10` dà l'ultima cifra e `/ 10` la toglie, quindi le cifre escono dalla meno significativa: la pila le rimette in ordine.

```c
#include <stdio.h>

int main(void)
{
    int cifre[10];
    int n = 4071;
    int k = 0;

    while (n > 0) {
        cifre[k] = n % 10;
        n = n / 10;
        k++;
    }
    printf("cifre=%d:", k);
    while (k > 0) {
        k--;
        printf(" %d", cifre[k]);
    }
    printf("\n");
    return 0;
}
```

| fase | `n` | `n % 10` | scrive | `k` dopo |
| --- | --- | --- | --- | --- |
| scrittura | 4071 | 1 | `cifre[0]` = 1 | 1 |
| | 407 | 7 | `cifre[1]` = 7 | 2 |
| | 40 | 0 | `cifre[2]` = 0 | 3 |
| | 4 | 4 | `cifre[3]` = 4 | 4 |
| | 0 | | esce | 4 |
| lettura | | | `k--` → 3, stampa 4 | 3 |
| | | | `k--` → 2, stampa 0 | 2 |
| | | | `k--` → 1, stampa 7 | 1 |
| | | | `k--` → 0, stampa 1 | 0 |

Output: `cifre=4: 4 0 7 1` (verificato). Lo zero in mezzo non si perde, perché il ciclo si ferma su `n > 0` e non su "cifra diversa da zero". Dieci celle bastano: un `int` a 32 bit ha al massimo 10 cifre.

### Array dinamici e VLA

(<span class="src">slide 74-78</span>) Nella definizione **dinamica** la dimensione è un valore calcolato **a tempo di esecuzione**, e la sintassi d'uso resta la stessa (`a[i]`). Serve trovare spazio in memoria mentre il programma gira: il prof rimanda a più avanti quale segmento di memoria si usa e come si fa con i puntatori.

Il C99 ha introdotto i **Variable Length Array** (VLA): `int Array_D[N];` con `N` variabile letta da input. L'esempio della slide 77, ripulito:

```
int N = 3;
int Array_S[N];            per la slide "statica", ma N è una variabile: è già un VLA
scanf("%d", &N);
int Array_D[N];            VLA con la dimensione letta: N va letto PRIMA della dichiarazione
Array_S[3] = 1;            "Corretto?" No: Array_S ha indici 0..2, è fuori range
Array_D[1] = 13;           corretto solo se N >= 2
```

Il fumetto della slide ("N deve essere inizializzato prima della dichiarazione") è il punto chiave: l'array prende la dimensione che `N` ha **in quel momento**, e cambiare `N` dopo non lo ridimensiona. Due imprecisioni della slide: `Array_S[N]` con `int N=3` non è statico (per esserlo serve una costante, `#define N 3`), e `Array_S[3]=1` scrive fuori dall'array.

Nelle note e nei programmi del corso le dimensioni si fissano con `#define` e un massimo ragionevole. I VLA vivono sullo stack, non segnalano se la dimensione è troppo grande e nel C11 sono opzionali: l'alternativa vera per la dimensione decisa a runtime arriva con i puntatori ([Puntatori](/uni/prog-1/puntatori/)).

## Metodo

Quasi ogni esercizio su array è uno di questi cicli. Con `N` elementi, indice `i` da `0` a `N - 1`.

**Riempire da input** (slide 37).
```
for (i = 0; i < N; i++)
    if (scanf("%d", &v[i]) != 1) ...errore...
```

**Stampare**: un `printf` per elemento, con un separatore; se il formato è preciso, il separatore fra un elemento e il successivo.

**Somma, media, conteggio di chi soddisfa una condizione**: un accumulatore inizializzato **prima** del ciclo.
```
somma = 0;
for (i = 0; i < N; i++)
    somma += v[i];
```

**Massimo e sua posizione**: si parte dal primo elemento, non da 0 (che sbaglia se sono tutti negativi).
```
pos_max = 0;
for (i = 1; i < N; i++)
    if (v[i] > v[pos_max]) pos_max = i;
```
Con `>` si tiene la **prima** posizione del massimo, con `>=` l'ultima.

**Array di contatori** (slide 42): quando i valori possibili sono pochi e consecutivi, si usa il valore stesso come indice. `ndigit[c - '0']++` incrementa il contatore della cifra letta; `conta[lancio]++` quello della faccia di un dado. Prima del ciclo tutti i contatori a 0, e prima di `conta[valore]++` il controllo che `valore` sia un indice valido.

**Ricerca**: si scorre finché non si trova o finché non si arriva in fondo, con le due condizioni nel ciclo.
```
i = 0;
while (i < N && v[i] != x)
    i++;
trovato se i < N
```
L'ordine conta: con `i < N` per primo, l'AND cortocircuitato non legge mai `v[N]`.

**Confronto di due array**: lo stesso schema della ricerca, con `a[i] == b[i]` al posto di `v[i] != x`; uguali se alla fine `i == N`.

**Scambio di due celle**: serve una variabile d'appoggio.
```
tmp = v[i];  v[i] = v[k];  v[k] = tmp;
```

**Inversione sul posto**: si scambia `v[i]` con `v[N - 1 - i]` solo per `i < N / 2`. Arrivando a `N` si scambierebbe tutto due volte, tornando all'array di partenza.

**Array usato come pila** (inversione, slide 40; binario, slide 51): si scrive in avanti con un indice che cresce, poi si rilegge all'indietro facendolo scendere. Alla fine della scrittura l'indice vale il **numero** di elementi: prima di rileggere va decrementato.

**Spostare a destra di una posizione**: si parte dal fondo, altrimenti si sovrascrive quello che va ancora copiato.
```
for (i = N - 1; i > 0; i--)
    v[i] = v[i - 1];
```
Spostare a **sinistra** (per togliere `v[0]`) è il contrario: si parte da sinistra, `v[i] = v[i + 1]` per `i` da 0 a `N - 2`.

**Tracciare un programma con array**:
1. Disegna l'array come una riga di caselle con gli indici sopra; accanto, le variabili semplici.
2. Per ogni `a[espr]` calcola **prima** il valore dell'indice, con gli eventuali `++`/`--` (postfisso: si usa il valore vecchio; prefisso: il nuovo), poi apri la casella.
3. Controlla che l'indice stia fra 0 e $N - 1$: se no, è comportamento indefinito, e all'esame va detto.
4. Aggiorna la casella a ogni assegnazione, una riga della tabella per istruzione o per giro di ciclo.
5. Alla fine di un ciclo annota il valore dell'indice: è spesso quello che il `printf` successivo stampa.

## Esempi svolti a lezione

### Indici come espressioni

(<span class="src">slide 15-18</span>) La slide chiede cosa valgono `a[0]` e `a[1]` dopo:

```c
#include <stdio.h>

int main(void)
{
    int a[5];
    int i = 1;
    int b = 5;

    a[i--] = ++b;
    printf("a[1]=%d i=%d b=%d\n", a[1], i, b);
    return 0;
}
```

| passo | `i` | `b` | `a[0]` | `a[1]` |
| --- | --- | --- | --- | --- |
| dichiarazioni | 1 | 5 | ? | ? |
| `++b`: prefisso, incrementa e vale 6 | 1 | 6 | ? | ? |
| `i--`: postfisso, vale 1, poi `i` scende | 0 | 6 | ? | ? |
| `a[1] = 6` | 0 | 6 | ? | 6 |

Output `a[1]=6 i=0 b=6` (verificato). L'indice usato è il valore di `i` **prima** del decremento, cioè 1; il valore assegnato è quello di `b` **dopo** l'incremento, 6. `a[0]` resta **indeterminato**, come dice la soluzione della slide 17: non è mai stato scritto. Il programma non lo stampa apposta, leggerlo sarebbe usare un valore indefinito.

La slide 18 ricapitola: gli elementi si numerano da 0 (in `x[2]`, 2 è l'indice), un elemento si usa come una variabile (`y = x[2] + 5`), e l'indice è sempre un intero ma può essere un'espressione qualsiasi, come in `y = x[3*z+y] + 5`. Con $z = 1$ e $y = 0$ quell'indice vale $3 \cdot 1 + 0 = 3$; con $z = 2$ e $y = 1$ vale 7.

### Incrementare tutte le celle

(<span class="src">slide 28-29</span>) Esercizio: dichiarare e inizializzare un array `conta` di 6 `int`, stampare i valori, incrementare tutte le celle di 1, ristamparle.

```c
#include <stdio.h>

#define DIM 6

int main(void)
{
    int conta[DIM] = {1, 2, 3, 4, 5, 6};
    int i;

    for (i = 0; i < DIM; i++)
        printf("conta[%d]=%d\n", i, conta[i]);
    for (i = 0; i < DIM; i++)
        conta[i]++;
    printf("-------Dopo Incremento-------\n");
    for (i = 0; i < DIM; i++)
        printf("conta[%d]=%d\n", i, conta[i]);
    return 0;
}
```

| | `[0]` | `[1]` | `[2]` | `[3]` | `[4]` | `[5]` |
| --- | --- | --- | --- | --- | --- | --- |
| dopo la dichiarazione | 1 | 2 | 3 | 4 | 5 | 6 |
| dopo il secondo `for` | 2 | 3 | 4 | 5 | 6 | 7 |

Output (verificato): `conta[0]=1` … `conta[5]=6`, la riga di trattini, poi `conta[0]=2` … `conta[5]=7`. La soluzione della slide è uguale ma scrive 6 tre volte: con `#define DIM 6` cambiare la dimensione tocca una riga sola. I tre cicli sono separati perché fanno tre cose diverse; dopo ognuno `i` vale 6.

### Scala con passi da 1, 2 o 3

(<span class="src">slide 30-33</span>) Una scala di $N$ gradini si sale con passi da 1, 2 o 3 scalini: in quanti modi? Il problema era già stato risolto con tre variabili in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/). Le soluzioni formano la successione

$$
S(1) = 1,\ S(2) = 2,\ S(3) = 4,\ S(4) = 7,\ S(5) = 13,\ S(6) = 24, \qquad S(n) = S(n-1) + S(n-2) + S(n-3)
$$

perché l'ultimo passo è da 1, da 2 o da 3, e prima di quel passo si è saliti una scala di $n - 1$, $n - 2$ o $n - 3$ gradini. Per esempio le 4 salite di 3 gradini sono 1+1+1, 1+2, 2+1, 3. Con un array `Soluzioni` si memorizzano tutte le soluzioni parziali e ognuna si calcola dalle tre precedenti. Ponendo $S(0) = 1$ (un solo modo di salire zero gradini: stare fermi) la ricorrenza dà anche $S(3) = 1 + 1 + 2 = 4$.

```c
#include <stdio.h>

#define MAX_GRADINI 36

int main(void)
{
    int soluzioni[MAX_GRADINI + 1];
    int n;
    int i;

    printf("inserire numero di gradini: ");
    if (scanf("%d", &n) != 1 || n < 0 || n > MAX_GRADINI) {
        printf("errore numero di gradini\n");
        return 1;
    }
    soluzioni[0] = 1;
    soluzioni[1] = 1;
    soluzioni[2] = 2;
    for (i = 3; i <= n; i++)
        soluzioni[i] = soluzioni[i - 1] + soluzioni[i - 2] + soluzioni[i - 3];
    printf("combinazioni possibili di 1,2,3 gradini con %d gradini: %d\n", n, soluzioni[n]);
    return 0;
}
```

Tracing con $n = 6$, una riga per giro del `for`:

| `i` | calcolo | `soluzioni[0..i]` |
| --- | --- | --- |
| (prima) | | `1 1 2` |
| 3 | 2 + 1 + 1 = 4 | `1 1 2 4` |
| 4 | 4 + 2 + 1 = 7 | `1 1 2 4 7` |
| 5 | 7 + 4 + 2 = 13 | `1 1 2 4 7 13` |
| 6 | 13 + 7 + 4 = 24 | `1 1 2 4 7 13 24` |
| 7 | `7 <= 6` falso, esce | |

Stampa `inserire numero di gradini: combinazioni possibili di 1,2,3 gradini con 6 gradini: 24` (verificato: il numero letto non viene ristampato, quindi la richiesta e il risultato finiscono sulla stessa riga). Gli altri valori:

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 36 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| stampa | 1 | 1 | 2 | 4 | 7 | 13 | 24 | 274 | 2082876103 |

(verificati tutti). Le due domande nei commenti del codice del prof:
- **Dimensione corretta dell'array**: servono le celle da 0 a $N$, quindi $N + 1$. Il prof dichiara `Soluzioni[100]` e non controlla che $N \leq 99$: con 100 o più gradini scrive fuori dall'array.
- **Dimensione dell'`int`**: $S(37)$ supera $2^{31} - 1 = 2\,147\,483\,647$, il massimo di un `int` a 32 bit. Per questo il limite è 36: oltre, servirebbe `long long`.

Altri difetti della slide 32: la stringa del `printf` va a capo dentro le virgolette (non compila), stampa un `int` con `%lu`, e per $N \leq 2$ stampa $N$ invece di consultare l'array, che per $N = 0$ dà 0 invece di 1.

### Inizializzazione con un ciclo

(<span class="src">slide 34-37</span>) Tre domande: e se l'array è grande (100, 1000 celle)? E se i valori arrivano da tastiera? E se seguono un algoritmo? In tutti e tre i casi la lista `{...}` non basta, e si inizializza con un ciclo (il terzo caso è l'Esempio 3 sopra). Il codice della slide 37 legge 5 voti con un `while`:

```c
#include <stdio.h>

#define N_VOTI 5

int main(void)
{
    int voti[N_VOTI];
    int i;

    i = 0;
    while (i < N_VOTI) {
        if (scanf("%d", &voti[i]) != 1) {
            printf("input non valido\n");
            return 1;
        }
        i++;
    }
    for (i = 0; i < N_VOTI; i++)
        printf("%d ", voti[i]);
    printf("\n");
    return 0;
}
```

Con input `28 30 18 24 27`:

| `i` | `i < 5` | legge | `voti` dopo |
| --- | --- | --- | --- |
| 0 | vero | 28 | `28 ? ? ? ?` |
| 1 | vero | 30 | `28 30 ? ? ?` |
| 2 | vero | 18 | `28 30 18 ? ?` |
| 3 | vero | 24 | `28 30 18 24 ?` |
| 4 | vero | 27 | `28 30 18 24 27` |
| 5 | falso | | esce |

Ristampa `28 30 18 24 27 ` (verificato). `&voti[i]` è l'indirizzo della cella `i`: le quadre hanno precedenza su `&`, quindi si legge `&(voti[i])`. La slide usa le virgolette tipografiche in `scanf(“%d”, ...)` e non controlla il valore di ritorno: con input `28 trenta` la slide lascerebbe `voti[1]` indefinito e andrebbe avanti; qui il programma stampa `input non valido` ed esce.

### Invertire una sequenza di caratteri

(<span class="src">slide 38-40</span>, codice esempio 3.8) Data una sequenza di caratteri terminata da `%`, riscriverla in ordine inverso. Si riconosce lo schema pila: i caratteri arrivano dal primo all'ultimo e vanno stampati dall'ultimo al primo. Pseudocodice della slide 39:

```
1. mentre leggi caratteri da tastiera
   1.1 memorizzali in un array
2. stampa tutti gli elementi dell'array a partire dall'indice più grande
```

Il programma della slide 40 legge con un `do-while` e salva anche il `%` nell'array, poi fa `indice--` per toglierlo (commento: "è stato letto come ultimo carattere %"). Versione corretta:

```c
#include <stdio.h>

#define MAX_CAR 100

int main(void)
{
    char sequenza[MAX_CAR];
    int indice = 0;
    int c;

    c = getchar();
    while (c != '%' && c != EOF && indice < MAX_CAR) {
        sequenza[indice] = c;
        indice++;
        c = getchar();
    }
    printf("NumeroCaratteri=%d\n", indice);
    while (indice > 0) {
        indice--;
        printf("%c", sequenza[indice]);
    }
    printf("\n");
    return 0;
}
```

Tracing con input `ciao%` (è la figura dell'array come pila, sopra):

| fase | `c` | `indice` prima | azione | `indice` dopo |
| --- | --- | --- | --- | --- |
| lettura | `'c'` | 0 | `sequenza[0] = 'c'` | 1 |
| | `'i'` | 1 | `sequenza[1] = 'i'` | 2 |
| | `'a'` | 2 | `sequenza[2] = 'a'` | 3 |
| | `'o'` | 3 | `sequenza[3] = 'o'` | 4 |
| | `'%'` | 4 | esce dal ciclo, stampa `NumeroCaratteri=4` | 4 |
| stampa | | 4 | `indice--`, stampa `sequenza[3]` = `o` | 3 |
| | | 3 | stampa `a` | 2 |
| | | 2 | stampa `i` | 1 |
| | | 1 | stampa `c` | 0 |
| | | 0 | `0 > 0` falso, esce | |

Output: `NumeroCaratteri=4`, poi `oaic` (verificato). Con input `ciao mondo%xyz` stampa `NumeroCaratteri=10` e `odnom oaic` (verificato): lo spazio è un carattere come gli altri, e quello che segue `%` non viene letto.

Cosa cambia rispetto alla slide e perché:
- `c` è `int`, non `char`: `getchar` restituisce `EOF`, che non è un carattere. Nella slide `char a` e nessun controllo di EOF: se l'input finisce senza `%`, il `do-while` non termina mai.
- Il commento della slide dice "ATTENZIONE MAX 100 caratteri" ma il codice non lo controlla: dal 101° carattere scrive fuori da `sequenza`. Qui `indice < MAX_CAR` sta nella condizione.
- Nella slide `NumeroCaratteri` conta anche il `%` (per `ciao mondo%` stampa 11). Qui il `%` non entra nell'array.
- La rilettura è lo schema pila: `indice` alla fine vale il numero di caratteri, quindi si decrementa **prima** di leggere, e l'ultimo stampato è `sequenza[0]`.

### Contare cifre, spazi e altri caratteri

(<span class="src">slide 41-42</span>) Contare le cifre (ciascuna separatamente), gli spazi bianchi (spazio, tab, a capo) e gli altri caratteri, con lo `switch`. È l'esempio classico del Kernighan-Ritchie: dieci contatori per le cifre diventano un array `ndigit[10]`.

```c
#include <stdio.h>

int main(void)
{
    int c;
    int i;
    int nwhite = 0;
    int nother = 0;
    int ndigit[10];

    for (i = 0; i < 10; i++)
        ndigit[i] = 0;

    while ((c = getchar()) != EOF) {
        switch (c) {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            ndigit[c - '0']++;
            break;
        case ' ': case '\t': case '\n':
            nwhite++;
            break;
        default:
            nother++;
            break;
        }
    }
    printf("digits=");
    for (i = 0; i < 10; i++)
        printf(" %d", ndigit[i]);
    printf("\n");
    printf("white space=%d\n", nwhite);
    printf("other=%d\n", nother);
    return 0;
}
```

Tracing con input `7a 7` e a capo:

| `c` | codice ASCII | `case` | effetto |
| --- | --- | --- | --- |
| `'7'` | 55 | cifra | `ndigit[55 - 48]`, cioè `ndigit[7]`, passa a 1 |
| `'a'` | 97 | `default` | `nother` = 1 |
| `' '` | 32 | spazio bianco | `nwhite` = 1 |
| `'7'` | 55 | cifra | `ndigit[7]` = 2 |
| `'\n'` | 10 | spazio bianco | `nwhite` = 2 |
| `EOF` | | | esce dal `while` |

Output (verificato):

```
digits= 0 0 0 0 0 0 0 2 0 0
white space=2
other=1
```

Con input `abc 123`, tab, `x9 0` e a capo stampa `digits= 1 1 1 1 0 0 0 0 0 1`, `white space=4`, `other=4` (verificato).

Il punto dell'esempio è `ndigit[c - '0']++`. I codici ASCII delle cifre sono consecutivi (`'0'` è 48, `'9'` è 57), quindi `c - '0'` trasforma il carattere `'7'` nel numero 7, che fa da indice. Senza array servirebbero dieci variabili e dieci `case` separati. I `case` raggruppati e il `break` sono quelli di [Switch](/uni/prog-1/switch/). L'indice è sicuro perché si arriva a `ndigit[c - '0']++` solo dai `case` delle cifre, quindi `c - '0'` sta fra 0 e 9. La slide stampa anche una riga di trattini prima dei risultati; il resto coincide.

### Da decimale a binario

(<span class="src">slide 43-51</span>) Ripasso del sistema posizionale: in base 10, $1943 = 1 \cdot 10^3 + 9 \cdot 10^2 + 4 \cdot 10^1 + 3 \cdot 10^0$; in base 2 le cifre sono 0 e 1 e i pesi sono potenze di 2. L'esempio della slide 46 è $2_{10} = 1 \cdot 2^1 + 0 \cdot 2^0 = 10_2$. Per convertire si usa l'**algoritmo dei resti**: si divide ripetutamente per 2, e i resti, letti **dall'ultimo al primo**, sono le cifre binarie. `n mod m` (in C `n % m`) è il resto della divisione di $n$ per $m$.

$$
2 / 2 = 1 \text{ resto } 0,\quad 1 / 2 = 0 \text{ resto } 1 \quad\Rightarrow\quad 2_{10} = 10_2
$$

$$
5 \bmod 2 = 1,\quad 2 \bmod 2 = 0,\quad 1 \bmod 2 = 1 \quad\Rightarrow\quad 5_{10} = 101_2
$$

I resti escono dalla cifra meno significativa: vanno salvati in un array e stampati al contrario, di nuovo lo schema pila. Pseudocodice della slide 49:

```
1. chiedi un valore d decimale all'utente
2. i <- 0
3. finché d è diverso da zero
   3.1 r[i] <- d mod 2
   3.2 d <- d / 2
   3.3 i <- i + 1
4. finché i >= 0
   4.1 stampa r[i]
   4.2 i <- i - 1
```

La slide 50 lo marca **Errore**: alla fine del passo 3 `i` vale il **numero** di cifre, non l'indice dell'ultima. Il primo giro del passo 4 stamperebbe `r[i]`, una cella mai scritta. La correzione della slide 51 è un passo `i <- i - 1` fra i due cicli. È lo stesso errore "uno in più" dell'inversione di caratteri.

```c
#include <stdio.h>

#define MAX_BIT 32

int main(void)
{
    int r[MAX_BIT];
    int d;
    int i;

    printf("numero decimale: ");
    if (scanf("%d", &d) != 1 || d < 0) {
        printf("input non valido\n");
        return 1;
    }
    if (d == 0) {
        printf("0\n");
        return 0;
    }
    i = 0;
    while (d != 0) {
        r[i] = d % 2;
        d = d / 2;
        i = i + 1;
    }
    i = i - 1;
    while (i >= 0) {
        printf("%d", r[i]);
        i = i - 1;
    }
    printf("\n");
    return 0;
}
```

Tracing con input 13:

| fase | `d` | `d % 2` | scrive | `d / 2` | `i` dopo |
| --- | --- | --- | --- | --- | --- |
| resti | 13 | 1 | `r[0]` = 1 | 6 | 1 |
| | 6 | 0 | `r[1]` = 0 | 3 | 2 |
| | 3 | 1 | `r[2]` = 1 | 1 | 3 |
| | 1 | 1 | `r[3]` = 1 | 0 | 4 |
| | 0 | | esce | | 4 |
| correzione | | | `i = i - 1` | | 3 |
| stampa | | | `r[3] r[2] r[1] r[0]` = `1 1 0 1` | | -1 |

Stampa `numero decimale: 1101` (verificato). Controllo: $1 \cdot 8 + 1 \cdot 4 + 0 \cdot 2 + 1 \cdot 1 = 13$. Con input 2, 5, 255 stampa `10`, `101`, `11111111` (verificati). Il caso $d = 0$ va trattato a parte: il ciclo dei resti non gira mai e senza l'`if` non stamperebbe niente. 32 celle bastano per ogni `int` non negativo, che ha al massimo 31 cifre binarie.

### Istogramma delle lunghezze (per casa)

(<span class="src">slide 52</span>) Data una sequenza di parole delimitate da spazi bianchi, disegnare un grafico a barre delle lunghezze: ogni barra dice quante parole hanno una certa lunghezza. La slide lo lascia senza soluzione. Si riconosce un array di contatori in cui l'indice è la lunghezza della parola: è svolto per intero, con tracing e output, nell'esercizio 10 di [Array (esercizi)](/uni/prog-1/array-esercizi/).

### Sostituire una parola con un'altra

(<span class="src">slide 79-92</span>, codice esempio 3.10) Un analizzatore di testo che sostituisce ogni occorrenza di una parola con un'altra. È il problema con cui si apriva il deck 3.2 ([Istruzioni condizionali](/uni/prog-1/istruzioni-condizionali/)), finalmente risolto. L'input contiene la parola da cercare seguita da `$`, la sostituta seguita da `#`, poi il testo terminato da `%`:

```
faro$farro#zappa fato faro farro farne fanno faro%
```

Il prof lo sviluppa top-down (slide 80-84) in tre sottoproblemi:

```
1  memorizza PrimaParola fino a '$' (1.1) e SecondaParola fino a '#' (1.2)
2  per ogni parola del testo, fino a '%':
     memorizza ParolaCorrente fino al prossimo spazio
3  confronta PrimaParola con ParolaCorrente:
     3.1 se le lunghezze sono diverse, sono diverse
     3.2 altrimenti confronta carattere per carattere finché coincidono
     3.3 se si arriva in fondo, coincidono
   se coincidono stampa SecondaParola, altrimenti ParolaCorrente, poi uno spazio
```

Il codice delle slide 85-92 è pseudo-C e non compila: `scanf(carattere)` invece di leggere con `getchar` (la slide 80 lo dice a margine: "oppure implementa con getchar"), `printf(' ')` e `printf(ParolaCorrente[contatore])` passano un carattere dove serve una stringa, `while carattere != ' '` non ha le parentesi, la condizione della slide 89 ha una parentesi in più. C'è anche un errore di logica: l'ultima parola del testo è seguita da `%` e non da uno spazio, quindi il ciclo interno della slide 87 non si ferma e legge oltre la fine. Versione completa e corretta:

```c
#include <stdio.h>

#define MAX_PAROLA 30

int main(void)
{
    char prima_parola[MAX_PAROLA];
    char seconda_parola[MAX_PAROLA];
    char parola_corrente[MAX_PAROLA];
    int lungh_prima = 0;
    int lungh_seconda = 0;
    int lungh_corrente;
    int contatore;
    int carattere;

    carattere = getchar();
    if (carattere == '$') {
        printf("MANCA LA PAROLA DA SOSTITUIRE\n");
        return 1;
    }
    while (carattere != '$' && carattere != EOF && lungh_prima < MAX_PAROLA) {
        prima_parola[lungh_prima] = carattere;
        lungh_prima++;
        carattere = getchar();
    }
    carattere = getchar();
    while (carattere != '#' && carattere != EOF && lungh_seconda < MAX_PAROLA) {
        seconda_parola[lungh_seconda] = carattere;
        lungh_seconda++;
        carattere = getchar();
    }

    carattere = getchar();
    while (carattere != '%' && carattere != EOF) {
        lungh_corrente = 0;
        while (carattere != ' ' && carattere != '%' && carattere != EOF
               && lungh_corrente < MAX_PAROLA) {
            parola_corrente[lungh_corrente] = carattere;
            lungh_corrente++;
            carattere = getchar();
        }

        contatore = 0;
        if (lungh_prima == lungh_corrente) {
            while (contatore < lungh_prima
                   && prima_parola[contatore] == parola_corrente[contatore])
                contatore++;
        }

        if (lungh_prima == lungh_corrente && contatore == lungh_prima) {
            for (contatore = 0; contatore < lungh_seconda; contatore++)
                putchar(seconda_parola[contatore]);
        } else {
            for (contatore = 0; contatore < lungh_corrente; contatore++)
                putchar(parola_corrente[contatore]);
        }
        putchar(' ');

        if (carattere == ' ')
            carattere = getchar();
    }
    putchar('\n');
    return 0;
}
```

Dopo le prime due fasi: `prima_parola` = `f a r o` con `lungh_prima` = 4, `seconda_parola` = `f a r r o` con `lungh_seconda` = 5. Poi il ciclo esterno, una riga per parola del testo:

| parola letta | `lungh_corrente` | stesse lunghezze? | `contatore` alla fine | stampa |
| --- | --- | --- | --- | --- |
| `zappa` | 5 | no | 0 (confronto saltato) | `zappa ` |
| `fato` | 4 | sì | 2 (`'t'` ≠ `'r'`) | `fato ` |
| `faro` | 4 | sì | 4 = `lungh_prima` | `farro ` |
| `farro` | 5 | no | 0 | `farro ` |
| `farne` | 5 | no | 0 | `farne ` |
| `fanno` | 5 | no | 0 | `fanno ` |
| `faro` (seguita da `%`) | 4 | sì | 4 | `farro ` |

Con l'input della slide stampa `zappa fato farro farro farne fanno farro ` (verificato): i due `faro` diventano `farro`, mentre `fato`, `farne` e il `farro` già presente restano. Dopo l'ultima parola `carattere` vale `%`: il ciclo interno si ferma lì grazie a `carattere != '%'`, e anche il ciclo esterno esce. Con input `$x#a b%` stampa `MANCA LA PAROLA DA SOSTITUIRE`.

Le idee da portare via:
- Le tre parole sono **array di caratteri con una lunghezza a parte** (`lungh_prima`, …): l'array da solo non sa quanti caratteri contiene. Le stringhe del deck 4.2 ([Stringhe](/uni/prog-1/stringhe/)) risolvono proprio questo, con un carattere terminatore.
- Due **cicli annidati** (slide 87): quello esterno scorre le parole, quello interno i caratteri di una parola.
- Il **confronto** di due array (sottoproblema 3) si fa cella per cella, e solo se le lunghezze coincidono. Il `while` si ferma alla prima differenza: le parole coincidono se `contatore` è arrivato alla lunghezza. Con `contatore < lungh_prima` scritto per primo, l'AND non legge mai oltre la fine.

## Esercizi tipo esame

In una pagina a parte, dal più facile al livello del 30: [Array (esercizi)](/uni/prog-1/array-esercizi/).

## Errori tipici

- `i <= N` nella condizione: con $N$ celle l'ultimo indice è $N - 1$, e `a[N]` è fuori. Il C non avvisa (gcc senza `-O2` neanche un warning): sovrascrive un'altra variabile o termina con segmentation fault.
- Dimenticare che l'indice parte da 0: "il quinto elemento" è `a[4]`.
- Dopo un ciclo che riempie un array, usare l'indice come se fosse l'ultimo usato: vale il numero di elementi, uno in più (slide 50, inversione, binario).
- `printf("%d", voti)` per stampare l'array intero: stampa (male) un indirizzo. Serve un ciclo.
- `array1 = array2` (non compila) o `array1 == array2` (compila, ma confronta indirizzi): si lavora cella per cella.
- `int c[2] = {5, 2, -5}`: più valori che celle. E `int d[4] = {1}` non mette tutto a 1.
- Usare un array locale senza inizializzarlo: contatori e accumulatori vanno azzerati, con `{0}` o con un ciclo.
- Massimo inizializzato a 0 invece che al primo elemento: sbaglia con valori tutti negativi.
- `scanf("%d", v[i])` senza `&`.
- Leggere caratteri in un `char` e confrontare con `EOF`: la variabile di `getchar` è `int`.
- Riempire un array da input senza controllare la dimensione massima (slide 40: "MAX 100 caratteri" scritto nel commento ma non nel codice).
- Ricerca con le condizioni scambiate, `v[i] != x && i < N`: legge `v[N]` prima di controllare il limite.
- Spostare gli elementi a destra partendo da sinistra: `a[1] = a[0]`, poi `a[2] = a[1]` ricopia lo stesso valore in tutte le celle.
- `conta[valore]++` senza controllare prima che `valore` sia fra 0 e la dimensione meno uno.
- Dichiarare `int n = 5; int v[n];` credendolo statico: è un VLA. Le dimensioni fisse si scrivono con `#define`.
- Stampare `sizeof` con `%d` o `%lu`: il tipo è `size_t`, il formato `%zu`.

## Domande

- Cos'è un array in C? Quali sono le sue due proprietà fondamentali?

- Con `int a[100]`, quali indici sono validi? Cosa succede usando `a[100]`?

- Quali due passi fa la macchina astratta per accedere ad `a[i]`?

- Perché "la variabile X è di tipo array" è formalmente errato in C?

- Cosa contiene `int b[4] = {5, 2, -5};`? E `int z[4] = {0};`? Perché `int c[2] = {5, 2, -5};` è un errore?

- Che valore hanno gli elementi di un array locale dichiarato senza inizializzazione?

- Perché `array1 = array2;` non compila? Come si copia un array?

- Perché `printf("%d", voti);` è sbagliato per stampare un array?

- Dopo `int a[5]; int i = 1, b = 5; a[i--] = ++b;` quanto valgono `a[0]`, `a[1]`, `i` e `b`?

- A cosa serve `ndigit[c - '0']++` nel conteggio delle cifre?

- Nell'algoritmo dei resti, perché le cifre binarie vanno salvate in un array? Qual è l'errore della slide 50?

- Cos'è un array statico e cos'è un VLA? Perché nel VLA la dimensione va letta prima della dichiarazione?

- Come si calcola il numero di elementi di un array con `sizeof`?

- Con `int a[4] = {2, 0, 3, 1};` quanto vale `a[a[a[0]]]`?

- Cosa fa `a == b` se `a` e `b` sono due array? Come si controlla se hanno lo stesso contenuto?

- Perché nel massimo di un array si parte da `v[0]` e non da 0? Che differenza c'è fra `>` e `>=` nella ricerca della posizione?

- Nella ricerca `while (i < N && v[i] != x)`, perché `i < N` deve stare per primo?

- Per inserire un elemento in un array ordinato, da che parte si spostano gli elementi e perché?

- Cosa vuol dire usare un array come pila? Quanto vale l'indice alla fine della scrittura?

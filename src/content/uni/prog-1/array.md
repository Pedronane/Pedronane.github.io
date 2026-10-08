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

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 4.1: <span class="src">slide 2-29</span> (dichiarazione, accesso, inizializzazione, stampa), <span class="src">slide 30-52</span> (esempi: scala, inizializzazione da input, inversione, conteggio cifre, decimale-binario, istogramma), <span class="src">slide 74-78</span> (array dinamici e VLA), <span class="src">slide 79-92</span> (sostituzione di parole). Le slide 53-73 e 93-100 sono in [Matrici e array multidimensionali](/uni/prog-1/matrici-e-array-multidimensionali/). Prima: [Cicli for e do-while](/uni/prog-1/cicli-for-e-do-while/) e [Switch](/uni/prog-1/switch/).

> [!abstract] Per l'esame
> - **Saper enunciare**: cos'è un array (celle consecutive e omogenee, un solo identificatore, accesso per indice), perché gli indici vanno da 0 a $n - 1$, cosa succede con un indice fuori range, perché non si può assegnare o stampare un array intero, cosa fa l'inizializzazione parziale `{5, 2}`, differenza fra array statico e VLA.
> - **Saper fare**: tracciare un programma che scrive e legge celle con indici calcolati (`a[i--]`, `a[3*z+y]`); scrivere i cicli tipici: riempire da input, stampare, sommare, trovare il massimo e la sua posizione, contare con un array di contatori, invertire, spostare gli elementi; usare un array come pila di cifre o caratteri da stampare al contrario.
> - **Dove esce**: nella teorica i tracing "scrivi l'output esatto" leggono spesso le cifre della matricola in un array e i vero/falso chiedono cosa succede con un array (vedi [Esami passati](/uni/prog-1/esami-passati/)). Nella prova al calcolatore l'array c'è sempre: `char nome[20]` nella struct, coda FIFO circolare e stack sono array con un indice che non deve uscire dai bordi.

Il filo del deck:

```
variabili strutturate    dopo le istruzioni, la macchina astratta si arricchisce di dati
   |
array                    celle consecutive, stesso tipo, un nome, un indice da 0
   |
dichiarazione            int a[100]: dimensione fissa, nota a tempo di compilazione
   |
inizializzazione         {5, 2, -5}, {0}, oppure con un ciclo (da input, da algoritmo)
   |
esempi                   conta, scala 1-2-3, inverti, conta cifre, decimale -> binario
   |
array dinamici, VLA      dimensione decisa a tempo di esecuzione (cenni)
   |
sostituzione parole      tre array di caratteri e due cicli annidati
```

## Definizioni

**Array** (<span class="src">slide 5-7</span>). Il più semplice tipo di dato strutturato: una **sequenza di celle di memoria consecutive e omogenee** (tutte dello stesso tipo), con un **identificatore unico** per tutto l'insieme. A ciascuna cella si accede con un **indice** intero $\geq 0$ fra parentesi quadre: `matricola[0]`, `matricola[1]`, … Il prof lo chiama un *contenitore* di tante variabili dello stesso tipo.

Perché serve: con variabili semplici, per 100 voti servirebbero 100 nomi diversi e nessun ciclo potrebbe scorrerli. Con un array il nome è uno solo e l'indice è un'espressione, quindi un `for` visita tutte le celle. Gli esempi della slide 3-5 sono un vettore di forze, i coefficienti $a_0, a_1, \ldots, a_n$ di un polinomio, le matricole di un corso.

**Accesso `a[i]`** (<span class="src">slide 8-10</span>). Le parentesi quadre sono un **operatore** ad alta precedenza, come le tonde, e associano da sinistra. Fra le quadre può esserci qualsiasi espressione che dia un valore intero. Per eseguire `a[i]` la macchina astratta:
1. calcola il valore dell'indice;
2. lo usa per trovare l'indirizzo della cella partendo da quello della prima, cioè della cella di indice 0.

Il primo elemento ha **sempre indice 0**. Un elemento è a tutti gli effetti una variabile del tipo dell'array: sta a sinistra di un'assegnazione (l-value) o dentro un'espressione (r-value), si passa a `scanf` con `&a[i]`, si incrementa con `a[i]++`.

<figure class="fig"><svg role="img" aria-label="Array in memoria" xmlns:xlink="http://www.w3.org/1999/xlink" width="510.48pt" height="200.016pt" viewBox="0 0 510.48 200.016" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f58-figure_1"> <g id="f58-patch_1"> <path d="M 0 200.016 L 510.48 200.016 L 510.48 0 L 0 0 L 0 200.016 z " style="fill: none"/> </g> <g id="f58-axes_1"> <g id="f58-patch_2"> <path d="M 50.112 116.64 L 122.184 116.64 L 122.184 72.288 L 50.112 72.288 L 50.112 116.64 z " clip-path="url(#f58-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f58-patch_3"> <path d="M 122.184 116.64 L 194.256 116.64 L 194.256 72.288 L 122.184 72.288 L 122.184 116.64 z " clip-path="url(#f58-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f58-patch_4"> <path d="M 194.256 116.64 L 266.328 116.64 L 266.328 72.288 L 194.256 72.288 L 194.256 116.64 z " clip-path="url(#f58-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f58-patch_5"> <path d="M 266.328 116.64 L 338.4 116.64 L 338.4 72.288 L 266.328 72.288 L 266.328 116.64 z " clip-path="url(#f58-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f58-patch_6"> <path d="M 338.4 116.64 L 410.472 116.64 L 410.472 72.288 L 338.4 72.288 L 338.4 116.64 z " clip-path="url(#f58-p7d70df820e)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.8; stroke-linejoin: miter"/> </g> <g id="f58-patch_7"> <path d="M 410.472 116.64 L 482.544 116.64 L 482.544 72.288 L 410.472 72.288 L 410.472 116.64 z " clip-path="url(#f58-p7d70df820e)" style="fill: none; stroke-dasharray: 5.55,2.4; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.5; stroke-linejoin: miter"/> </g> <g id="f58-text_1"> <!-- a --> <g style="fill: var(--fig-accent)" transform="translate(11.304 98.62025) scale(0.16 -0.16)"> <defs> <path id="f58-DejaVuSansMono-Bold-44" d="M 2188 1644 Q 1675 1644 1472 1512 Q 1269 1381 1269 1063 Q 1269 825 1409 684 Q 1550 544 1791 544 Q 2153 544 2353 817 Q 2553 1091 2553 1581 L 2553 1644 L 2188 1644 z M 3463 1997 L 3463 0 L 2553 0 L 2553 391 Q 2388 159 2128 34 Q 1869 -91 1556 -91 Q 959 -91 626 225 Q 294 541 294 1106 Q 294 1719 691 2011 Q 1088 2303 1919 2303 L 2553 2303 L 2553 2456 Q 2553 2678 2392 2792 Q 2231 2906 1919 2906 Q 1591 2906 1283 2823 Q 975 2741 641 2559 L 641 3341 Q 944 3466 1256 3525 Q 1569 3584 1919 3584 Q 2772 3584 3117 3237 Q 3463 2891 3463 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-Bold-44"/> </g> </g> <g id="f58-text_2"> <!-- 5 --> <g style="fill: var(--fig-ink)" transform="translate(81.69425 98.100719) scale(0.14 -0.14)"> <defs> <path id="f58-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-18"/> </g> </g> <g id="f58-text_3"> <!-- a[0] --> <g style="fill: var(--fig-accent)" transform="translate(71.69925 58.773656) scale(0.12 -0.12)"> <defs> <path id="f58-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSansMono-3e" d="M 1447 4863 L 2772 4863 L 2772 4416 L 2022 4416 L 2022 -397 L 2772 -397 L 2772 -844 L 1447 -844 L 1447 4863 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSansMono-40" d="M 2406 4863 L 2406 -844 L 1081 -844 L 1081 -397 L 1831 -397 L 1831 4416 L 1081 4416 L 1081 4863 L 2406 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-44"/> <use xlink:href="#f58-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_4"> <!-- 1000 --> <g style="fill: var(--fig-axis)" transform="translate(72.903312 136.129422) scale(0.11 -0.11)"> <defs> <path id="f58-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-14"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_5"> <!-- 2 --> <g style="fill: var(--fig-ink)" transform="translate(153.76625 98.100719) scale(0.14 -0.14)"> <defs> <path id="f58-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-15"/> </g> </g> <g id="f58-text_6"> <!-- a[1] --> <g style="fill: var(--fig-accent)" transform="translate(143.77125 58.773656) scale(0.12 -0.12)"> <use xlink:href="#f58-DejaVuSansMono-44"/> <use xlink:href="#f58-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_7"> <!-- 1004 --> <g style="fill: var(--fig-axis)" transform="translate(144.975312 136.129422) scale(0.11 -0.11)"> <defs> <path id="f58-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-14"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-17" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_8"> <!-- -5 --> <g style="fill: var(--fig-ink)" transform="translate(223.472469 98.100719) scale(0.14 -0.14)"> <defs> <path id="f58-DejaVuSerif-10" d="M 281 1959 L 1881 1959 L 1881 1472 L 281 1472 L 281 1959 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-10"/> <use xlink:href="#f58-DejaVuSerif-18" transform="translate(33.796875 0)"/> </g> </g> <g id="f58-text_9"> <!-- a[2] --> <g style="fill: var(--fig-accent)" transform="translate(215.84325 58.773656) scale(0.12 -0.12)"> <defs> <path id="f58-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-44"/> <use xlink:href="#f58-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-15" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_10"> <!-- 1008 --> <g style="fill: var(--fig-axis)" transform="translate(217.047313 136.129422) scale(0.11 -0.11)"> <defs> <path id="f58-DejaVuSansMono-1b" d="M 1925 2216 Q 1503 2216 1273 1980 Q 1044 1744 1044 1313 Q 1044 881 1276 642 Q 1509 403 1925 403 Q 2350 403 2579 639 Q 2809 875 2809 1313 Q 2809 1741 2576 1978 Q 2344 2216 1925 2216 z M 1375 2478 Q 972 2581 745 2862 Q 519 3144 519 3541 Q 519 4097 897 4423 Q 1275 4750 1925 4750 Q 2578 4750 2956 4423 Q 3334 4097 3334 3541 Q 3334 3144 3107 2862 Q 2881 2581 2478 2478 Q 2947 2375 3195 2062 Q 3444 1750 3444 1253 Q 3444 622 3041 265 Q 2638 -91 1925 -91 Q 1213 -91 811 264 Q 409 619 409 1247 Q 409 1747 657 2061 Q 906 2375 1375 2478 z M 1147 3481 Q 1147 3106 1347 2909 Q 1547 2713 1925 2713 Q 2306 2713 2506 2909 Q 2706 3106 2706 3481 Q 2706 3863 2507 4063 Q 2309 4263 1925 4263 Q 1547 4263 1347 4061 Q 1147 3859 1147 3481 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-14"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-1b" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_11"> <!-- 10 --> <g style="fill: var(--fig-ink)" transform="translate(293.4565 98.100719) scale(0.14 -0.14)"> <defs> <path id="f58-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-14"/> <use xlink:href="#f58-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> <g id="f58-text_12"> <!-- a[3] --> <g style="fill: var(--fig-accent)" transform="translate(287.91525 58.773656) scale(0.12 -0.12)"> <defs> <path id="f58-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-44"/> <use xlink:href="#f58-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-16" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_13"> <!-- 1012 --> <g style="fill: var(--fig-axis)" transform="translate(289.119312 136.129422) scale(0.11 -0.11)"> <use xlink:href="#f58-DejaVuSansMono-14"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-15" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_14"> <!-- 234 --> <g style="fill: var(--fig-ink)" transform="translate(361.07475 98.100719) scale(0.14 -0.14)"> <defs> <path id="f58-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-15"/> <use xlink:href="#f58-DejaVuSerif-16" transform="translate(63.625 0)"/> <use xlink:href="#f58-DejaVuSerif-17" transform="translate(127.25 0)"/> </g> </g> <g id="f58-text_15"> <!-- a[4] --> <g style="fill: var(--fig-accent)" transform="translate(359.98725 58.773656) scale(0.12 -0.12)"> <use xlink:href="#f58-DejaVuSansMono-44"/> <use xlink:href="#f58-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-17" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_16"> <!-- 1016 --> <g style="fill: var(--fig-axis)" transform="translate(361.191312 136.129422) scale(0.11 -0.11)"> <defs> <path id="f58-DejaVuSansMono-19" d="M 3097 4563 L 3097 3981 Q 2900 4097 2678 4158 Q 2456 4219 2216 4219 Q 1616 4219 1306 3767 Q 997 3316 997 2438 Q 1147 2750 1412 2917 Q 1678 3084 2022 3084 Q 2697 3084 3067 2670 Q 3438 2256 3438 1497 Q 3438 741 3056 325 Q 2675 -91 1984 -91 Q 1172 -91 794 492 Q 416 1075 416 2328 Q 416 3509 870 4129 Q 1325 4750 2188 4750 Q 2419 4750 2650 4701 Q 2881 4653 3097 4563 z M 1972 2591 Q 1569 2591 1337 2300 Q 1106 2009 1106 1497 Q 1106 984 1337 693 Q 1569 403 1972 403 Q 2391 403 2603 679 Q 2816 956 2816 1497 Q 2816 2041 2603 2316 Q 2391 2591 1972 2591 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-14"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-19" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_17"> <!-- ? --> <g style="fill: var(--fig-faint)" transform="translate(442.755344 98.100719) scale(0.14 -0.14)"> <defs> <path id="f58-DejaVuSerif-22" d="M 1125 325 Q 1125 500 1245 622 Q 1366 744 1544 744 Q 1716 744 1837 622 Q 1959 500 1959 325 Q 1959 153 1837 31 Q 1716 -91 1544 -91 Q 1366 -91 1245 29 Q 1125 150 1125 325 z M 434 4459 Q 766 4606 1064 4678 Q 1363 4750 1625 4750 Q 2319 4750 2720 4415 Q 3122 4081 3122 3513 Q 3122 2931 2776 2562 Q 2431 2194 1734 2034 L 1734 1241 L 1350 1241 L 1350 2266 Q 1903 2400 2183 2715 Q 2463 3031 2463 3519 Q 2463 3947 2234 4194 Q 2006 4441 1613 4441 Q 1256 4441 1029 4236 Q 803 4031 738 3647 L 434 3647 L 434 4459 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-22"/> </g> </g> <g id="f58-text_18"> <!-- a[5] --> <g style="fill: var(--fig-faint)" transform="translate(432.05925 58.773656) scale(0.12 -0.12)"> <defs> <path id="f58-DejaVuSansMono-18" d="M 647 4666 L 3009 4666 L 3009 4134 L 1222 4134 L 1222 2988 Q 1356 3038 1492 3061 Q 1628 3084 1766 3084 Q 2491 3084 2916 2656 Q 3341 2228 3341 1497 Q 3341 759 2895 334 Q 2450 -91 1678 -91 Q 1306 -91 998 -41 Q 691 9 447 109 L 447 750 Q 734 594 1025 517 Q 1316 441 1619 441 Q 2141 441 2423 716 Q 2706 991 2706 1497 Q 2706 1997 2414 2275 Q 2122 2553 1600 2553 Q 1347 2553 1106 2495 Q 866 2438 647 2322 L 647 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSansMono-44"/> <use xlink:href="#f58-DejaVuSansMono-3e" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-18" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-40" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_19"> <!-- 1020 --> <g style="fill: var(--fig-faint)" transform="translate(433.263312 136.129422) scale(0.11 -0.11)"> <use xlink:href="#f58-DejaVuSansMono-14"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f58-DejaVuSansMono-15" transform="translate(120.40625 0)"/> <use xlink:href="#f58-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f58-text_20"> <!-- fuori dall'array --> <g style="fill: var(--fig-accent)" transform="translate(408.52675 24.990047) scale(0.1 -0.1)"> <defs> <path id="f58-DejaVuSerif-Italic-49" d="M 3191 4078 L 2887 4078 Q 2900 4144 2900 4203 Q 2900 4347 2825 4434 Q 2719 4556 2472 4556 Q 2150 4556 1984 4379 Q 1819 4203 1731 3750 L 1647 3322 L 2575 3322 L 2509 2988 L 1581 2988 L 962 -206 Q 853 -763 509 -1047 Q 166 -1331 -394 -1331 L -356 -1025 Q -28 -1025 131 -850 Q 297 -663 387 -206 L 1006 2988 L 456 2988 L 522 3322 L 1072 3322 L 1153 3738 Q 1262 4297 1606 4578 Q 1950 4863 2509 4863 Q 2719 4863 2920 4825 Q 3122 4788 3316 4709 L 3191 4078 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-58" d="M 3097 3322 L 3672 3322 L 3091 331 L 3634 331 L 3572 0 L 2453 0 L 2566 588 Q 2341 256 2055 82 Q 1769 -91 1434 -91 Q 881 -91 681 225 Q 559 413 559 734 Q 559 944 613 1209 L 956 2988 L 438 2988 L 503 3322 L 1600 3322 L 1225 1388 Q 1163 1066 1163 853 Q 1163 663 1213 556 Q 1316 331 1697 331 Q 2097 331 2364 625 Q 2631 919 2738 1478 L 3097 3322 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-3" transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-47" d="M 3841 4863 L 2897 0 L 2322 0 L 2422 519 Q 2191 206 1902 57 Q 1613 -91 1228 -91 Q 616 -91 322 394 Q 125 716 125 1166 Q 125 1397 178 1663 Q 331 2444 812 2928 Q 1294 3413 1909 3413 Q 2294 3413 2525 3264 Q 2756 3116 2866 2803 L 3200 4531 L 2656 4531 L 2722 4863 L 3841 4863 z M 2613 1497 L 2675 1825 Q 2722 2069 2722 2266 Q 2722 2550 2622 2738 Q 2456 3053 2019 3053 Q 1575 3053 1279 2703 Q 984 2353 850 1663 Q 788 1347 788 1103 Q 788 813 875 622 Q 1031 269 1475 269 Q 1913 269 2203 583 Q 2494 897 2613 1497 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-4f" d="M 903 331 L 1447 331 L 1384 0 L 266 0 L 1147 4531 L 594 4531 L 656 4863 L 1784 4863 L 903 331 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-Italic-5c" d="M 3681 3294 Q 3372 1506 2828 563 Q 2031 -822 1391 -1238 Q 1106 -1422 356 -1422 Q 209 -1422 60 -1397 Q -88 -1372 -238 -1325 L -113 -691 L 181 -691 Q 175 -741 175 -788 Q 175 -919 231 -994 Q 309 -1100 513 -1100 Q 1063 -1100 1541 -622 L 756 2988 L 378 2988 L 444 3322 L 1303 3322 L 2041 25 Q 2544 778 2666 1088 Q 3059 2059 3138 2959 L 2759 2959 L 2825 3294 L 3681 3294 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-Italic-49"/> <use xlink:href="#f58-DejaVuSerif-Italic-58" transform="translate(37.015625 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-52" transform="translate(101.421875 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-55" transform="translate(161.625 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-4c" transform="translate(209.421875 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-3" transform="translate(241.40625 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-47" transform="translate(273.1875 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-44" transform="translate(337.203125 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-4f" transform="translate(396.828125 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-4f" transform="translate(428.8125 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-a" transform="translate(460.796875 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-44" transform="translate(488.28125 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-55" transform="translate(547.90625 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-55" transform="translate(595.703125 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-44" transform="translate(643.5 0)"/> <use xlink:href="#f58-DejaVuSerif-Italic-5c" transform="translate(703.125 0)"/> </g> </g> <g id="f58-patch_8"> <path d="M 51.789051 160.992 Q 230.292 160.992 408.794949 160.992 " style="fill: none; stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 55.789051 162.992 L 51.789051 160.992 L 55.789051 158.992 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> <path d="M 404.794949 158.992 L 408.794949 160.992 L 404.794949 162.992 z " style="fill: var(--fig-steel); stroke: var(--fig-steel); stroke-width: 1.5; stroke-linecap: round"/> </g> <g id="f58-text_21"> <!-- int a[5]: indici da 0 a 4, celle consecutive di 4 byte --> <g style="fill: var(--fig-steel)" transform="translate(89.434422 183.253852) scale(0.11 -0.11)"> <defs> <path id="f58-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-40" d="M 1947 4863 L 1947 -844 L 494 -844 L 494 -513 L 1350 -513 L 1350 4531 L 494 4531 L 494 4863 L 1947 4863 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f58-DejaVuSerif-5c" d="M 1381 -609 L 1600 -56 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 1703 -750 Q 1547 -1138 1356 -1280 Q 1166 -1422 819 -1422 Q 672 -1422 517 -1397 Q 363 -1372 206 -1325 L 206 -691 L 500 -691 Q 519 -903 608 -995 Q 697 -1088 884 -1088 Q 1056 -1088 1161 -992 Q 1266 -897 1381 -609 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f58-DejaVuSerif-4c"/> <use xlink:href="#f58-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f58-DejaVuSerif-57" transform="translate(96.390625 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(136.578125 0)"/> <use xlink:href="#f58-DejaVuSerif-44" transform="translate(168.359375 0)"/> <use xlink:href="#f58-DejaVuSerif-3e" transform="translate(227.984375 0)"/> <use xlink:href="#f58-DejaVuSerif-18" transform="translate(267 0)"/> <use xlink:href="#f58-DejaVuSerif-40" transform="translate(330.625 0)"/> <use xlink:href="#f58-DejaVuSerif-1d" transform="translate(369.640625 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(403.328125 0)"/> <use xlink:href="#f58-DejaVuSerif-4c" transform="translate(435.109375 0)"/> <use xlink:href="#f58-DejaVuSerif-51" transform="translate(467.09375 0)"/> <use xlink:href="#f58-DejaVuSerif-47" transform="translate(531.5 0)"/> <use xlink:href="#f58-DejaVuSerif-4c" transform="translate(595.515625 0)"/> <use xlink:href="#f58-DejaVuSerif-46" transform="translate(627.5 0)"/> <use xlink:href="#f58-DejaVuSerif-4c" transform="translate(683.5 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(715.484375 0)"/> <use xlink:href="#f58-DejaVuSerif-47" transform="translate(747.265625 0)"/> <use xlink:href="#f58-DejaVuSerif-44" transform="translate(811.28125 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(870.90625 0)"/> <use xlink:href="#f58-DejaVuSerif-13" transform="translate(902.6875 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(966.3125 0)"/> <use xlink:href="#f58-DejaVuSerif-44" transform="translate(998.09375 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(1057.71875 0)"/> <use xlink:href="#f58-DejaVuSerif-17" transform="translate(1089.5 0)"/> <use xlink:href="#f58-DejaVuSerif-f" transform="translate(1153.125 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(1184.90625 0)"/> <use xlink:href="#f58-DejaVuSerif-46" transform="translate(1216.6875 0)"/> <use xlink:href="#f58-DejaVuSerif-48" transform="translate(1272.6875 0)"/> <use xlink:href="#f58-DejaVuSerif-4f" transform="translate(1331.875 0)"/> <use xlink:href="#f58-DejaVuSerif-4f" transform="translate(1363.859375 0)"/> <use xlink:href="#f58-DejaVuSerif-48" transform="translate(1395.84375 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(1455.03125 0)"/> <use xlink:href="#f58-DejaVuSerif-46" transform="translate(1486.8125 0)"/> <use xlink:href="#f58-DejaVuSerif-52" transform="translate(1542.8125 0)"/> <use xlink:href="#f58-DejaVuSerif-51" transform="translate(1603.015625 0)"/> <use xlink:href="#f58-DejaVuSerif-56" transform="translate(1667.421875 0)"/> <use xlink:href="#f58-DejaVuSerif-48" transform="translate(1718.734375 0)"/> <use xlink:href="#f58-DejaVuSerif-46" transform="translate(1777.921875 0)"/> <use xlink:href="#f58-DejaVuSerif-58" transform="translate(1833.921875 0)"/> <use xlink:href="#f58-DejaVuSerif-57" transform="translate(1898.328125 0)"/> <use xlink:href="#f58-DejaVuSerif-4c" transform="translate(1938.515625 0)"/> <use xlink:href="#f58-DejaVuSerif-59" transform="translate(1970.5 0)"/> <use xlink:href="#f58-DejaVuSerif-48" transform="translate(2027 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(2086.1875 0)"/> <use xlink:href="#f58-DejaVuSerif-47" transform="translate(2117.96875 0)"/> <use xlink:href="#f58-DejaVuSerif-4c" transform="translate(2181.984375 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(2213.96875 0)"/> <use xlink:href="#f58-DejaVuSerif-17" transform="translate(2245.75 0)"/> <use xlink:href="#f58-DejaVuSerif-3" transform="translate(2309.375 0)"/> <use xlink:href="#f58-DejaVuSerif-45" transform="translate(2341.15625 0)"/> <use xlink:href="#f58-DejaVuSerif-5c" transform="translate(2405.171875 0)"/> <use xlink:href="#f58-DejaVuSerif-57" transform="translate(2461.671875 0)"/> <use xlink:href="#f58-DejaVuSerif-48" transform="translate(2501.859375 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f58-p7d70df820e"> <rect x="5.76" y="5.76" width="498.96" height="188.496"/> </clipPath> </defs> </svg></figure>

Le slide 9-12 disegnano gli indirizzi come 1000, 1001, 1002: è una semplificazione in cui ogni cella vale "una posizione". Con `int` da 4 byte (quello che dà `sizeof(int)` su gcc) gli indirizzi veri avanzano di 4, come nella figura. La formula resta la stessa: indirizzo di `a[i]` uguale a indirizzo di `a[0]` più $i$ volte la dimensione di un elemento.

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

La regola: se la lista ha **meno** valori delle celle, quelle rimaste valgono 0. Se ne ha **di più**, è un errore (gcc dà "excess elements in array initializer"). Senza inizializzazione il contenuto di un array automatico, cioè dichiarato dentro una funzione, è **indefinito**, come per ogni variabile locale. Gli array automatici vengono inizializzati quando si entra nel blocco, quelli `static` prima che il programma parta.

La slide 23 dichiara `b` due volte e scrive `int b[4] = {0}` senza `;`: nella nota il secondo si chiama `z`.

## Concetti

### Indici fuori range

(<span class="src">slide 13-14</span>) Domanda della slide: con `int a[100]`, cosa succede usando `a[100]` o `a[101]`? Il C **non controlla** gli indici. `a[100]` calcola l'indirizzo della cella "dopo l'ultima" e ci legge o scrive comunque. Quello che c'è in quella memoria non appartiene all'array: può essere un'altra variabile, che viene sovrascritta in silenzio, o una zona protetta, e allora il programma termina con *segmentation fault*. Lo standard lo chiama **comportamento indefinito**: può sembrare funzionare oggi e rompersi domani.

Conseguenza pratica: ogni ciclo che scrive in un array deve avere nella condizione il limite della dimensione. Gli esempi sotto (inversione, sostituzione parole) controllano sempre `indice < MAX`.

### Niente operazioni sull'array intero

(<span class="src">slide 19</span>) Con `int x; int array[5]; int array1[5]; int array2[4];` **nessuna** di queste assegnazioni è corretta:

```
array = 5;          array = x;          array1 = array;          array1 = array2;
```

gcc rifiuta con "assignment to expression with array type". Anche se `array1` e `array` hanno la stessa dimensione, la copia si fa cella per cella con un ciclo. Vale lo stesso per il confronto: per sapere se due array sono uguali si confrontano gli elementi uno a uno (lo fa la sostituzione parole, slide 89).

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

Stampa `126-32` (verificato): la versione "corretta" della slide 27 non mette separatori e i numeri si incollano. Con `printf("%d ", voti[i])` diventa `1 2 6 -3 2`. Le slide 25-26 usano le virgolette tipografiche `“%d”`, che non compilano.

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

Nelle note e nei programmi del corso le dimensioni si fissano con `#define` e un massimo ragionevole. I VLA vivono sullo stack, non segnalano se la dimensione è troppo grande e nel C11 sono opzionali: l'alternativa vera per la dimensione decisa a runtime arriva con i puntatori.

## Metodo

Quasi ogni esercizio su array è uno di questi cicli. Con `N` elementi, indice `i` da `0` a `N - 1`.

**Riempire da input** (slide 37).
```
for (i = 0; i < N; i++)
    if (scanf("%d", &v[i]) != 1) ...errore...
```

**Stampare**: un `printf` per elemento, con un separatore.

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

**Array di contatori** (slide 42): quando i valori possibili sono pochi e consecutivi, si usa il valore stesso come indice. `ndigit[c - '0']++` incrementa il contatore della cifra letta; `conta[lancio]++` quello della faccia di un dado. Prima del ciclo tutti i contatori a 0.

**Ricerca**: si scorre finché non si trova o finché non si arriva in fondo, con le due condizioni nel ciclo.
```
i = 0;
while (i < N && v[i] != x)
    i++;
trovato se i < N
```
L'ordine conta: con `i < N` per primo, l'AND cortocircuitato non legge mai `v[N]`.

**Scambio di due celle**: serve una variabile d'appoggio.
```
tmp = v[i];  v[i] = v[k];  v[k] = tmp;
```

**Inversione sul posto**: si scambia `v[i]` con `v[N - 1 - i]` solo per `i < N / 2`. Arrivando a `N` si scambierebbe tutto due volte, tornando all'array di partenza.

**Array usato come pila** (inversione, slide 40; binario, slide 51): si scrive in avanti con un indice che cresce, poi si rilegge all'indietro facendolo scendere. Alla fine della scrittura l'indice vale il **numero** di elementi, cioè uno più dell'ultimo indice usato: prima di rileggere va decrementato.

**Spostare a destra di una posizione**: si parte dal fondo, altrimenti si sovrascrive quello che va ancora copiato.
```
for (i = N - 1; i > 0; i--)
    v[i] = v[i - 1];
```

**Tracciare un programma con array**: si disegna l'array come una riga di caselle con gli indici sopra, e si aggiorna a ogni assegnazione. Per ogni `a[espr]` si calcola prima il valore dell'indice, con gli eventuali `++`/`--`, poi si scrive nella casella.

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

Output `a[1]=6 i=0 b=6` (verificato). `i--` è postfisso: l'indice usato è il valore **prima** del decremento, cioè 1. `++b` è prefisso: il valore assegnato è quello **dopo** l'incremento, 6. Quindi `a[1]` vale 6, `i` scende a 0 dopo l'uso, e `a[0]` resta **indeterminato**: non è mai stato scritto. Il programma non lo stampa apposta, leggerlo sarebbe usare un valore indefinito.

La slide 18 ricapitola: l'indice è sempre un intero ma può essere un'espressione qualsiasi, come in `y = x[3*z+y] + 5`.

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

Output (verificato): `conta[0]=1` … `conta[5]=6`, la riga di trattini, poi `conta[0]=2` … `conta[5]=7`. La soluzione della slide è uguale ma scrive 6 tre volte: con `#define DIM 6` cambiare la dimensione tocca una riga sola.

### Scala con passi da 1, 2 o 3

(<span class="src">slide 30-33</span>) Una scala di $N$ gradini si sale con passi da 1, 2 o 3 scalini: in quanti modi? Il problema era già stato risolto con tre variabili in [Ciclo while ed esempi](/uni/prog-1/ciclo-while-ed-esempi/). Le soluzioni formano la successione

$$
S(1) = 1,\ S(2) = 2,\ S(3) = 4,\ S(4) = 7,\ S(5) = 13,\ S(6) = 24, \qquad S(n) = S(n-1) + S(n-2) + S(n-3)
$$

perché l'ultimo passo è da 1, da 2 o da 3, e prima di quel passo si è saliti una scala di $n - 1$, $n - 2$ o $n - 3$ gradini. Con un array `Soluzioni` si memorizzano tutte le soluzioni parziali e ognuna si calcola dalle tre precedenti. Ponendo $S(0) = 1$ (un solo modo di salire zero gradini: stare fermi) la ricorrenza dà anche $S(3) = 1 + 1 + 2 = 4$.

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

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 36 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| stampa | 1 | 1 | 2 | 4 | 7 | 13 | 24 | 274 | 2082876103 |

(verificati tutti). Le due domande nei commenti del codice del prof:
- **Dimensione corretta dell'array**: servono le celle da 0 a $N$, quindi $N + 1$. Il prof dichiara `Soluzioni[100]` e non controlla che $N \leq 99$: con 100 o più gradini scrive fuori dall'array.
- **Dimensione dell'`int`**: $S(37)$ supera $2^{31} - 1 = 2\,147\,483\,647$, il massimo di un `int` a 32 bit. Per questo il limite è 36: oltre, servirebbe `long long`.

Altri difetti della slide 32: la stringa del `printf` va a capo dentro le virgolette (non compila), stampa un `int` con `%lu`, e per $N \leq 2$ stampa $N$ invece di consultare l'array, che per $N = 0$ dà 0 invece di 1.

### Inizializzazione con un ciclo

(<span class="src">slide 34-37</span>) Tre domande: e se l'array è grande (100, 1000 celle)? E se i valori arrivano da tastiera? E se seguono un algoritmo? In tutti e tre i casi la lista `{...}` non basta, e si inizializza con un ciclo. Il codice della slide 37 legge 5 voti con un `while`:

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

Con input `28 30 18 24 27` ristampa `28 30 18 24 27 ` (verificato). `&voti[i]` è l'indirizzo della cella `i`: le quadre hanno precedenza su `&`, quindi si legge `&(voti[i])`. La slide usa le virgolette tipografiche in `scanf(“%d”, ...)` e non controlla il valore di ritorno.

### Invertire una sequenza di caratteri

(<span class="src">slide 38-40</span>, codice esempio 3.8) Data una sequenza di caratteri terminata da `%`, riscriverla in ordine inverso. Pseudocodice della slide 39:

```
1. mentre leggi caratteri da tastiera
   1.1 memorizzali in un array
2. stampa tutti gli elementi dell'array a partire dall'indice più grande
```

Il programma della slide 40 legge con un `do-while` e salva anche il `%` nell'array, poi fa `indice--` per toglierlo. Versione corretta:

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

Con input `ciao mondo%xyz` stampa (verificato):

```
NumeroCaratteri=10
odnom oaic
```

Cosa cambia rispetto alla slide e perché:
- `c` è `int`, non `char`: `getchar` restituisce `EOF`, che non è un carattere. Nella slide `char a` e nessun controllo di EOF: se l'input finisce senza `%`, il `do-while` non termina mai.
- Il commento della slide dice "ATTENZIONE MAX 100 caratteri" ma il codice non lo controlla: dal 101° carattere scrive fuori da `sequenza`. Qui `indice < MAX_CAR` sta nella condizione.
- Nella slide `NumeroCaratteri` conta anche il `%` (per `ciao mondo%` stampa 11). Qui il `%` non entra nell'array.
- La rilettura è lo schema "pila": `indice` alla fine vale il numero di caratteri, quindi si decrementa **prima** di leggere, e l'ultimo stampato è `sequenza[0]`.

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

Con input `abc 123`, tab, `x9 0` e a capo stampa (verificato):

```
digits= 1 1 1 1 0 0 0 0 0 1
white space=4
other=4
```

Il punto dell'esempio è `ndigit[c - '0']++`. I codici ASCII delle cifre sono consecutivi (`'0'` è 48, `'9'` è 57), quindi `c - '0'` trasforma il carattere `'7'` nel numero 7, che fa da indice. Senza array servirebbero dieci variabili e dieci `case` separati. I `case` raggruppati e il `break` sono quelli di [Switch](/uni/prog-1/switch/). La slide stampa anche una riga di trattini prima dei risultati; il resto coincide.

### Da decimale a binario

(<span class="src">slide 43-51</span>) Ripasso del sistema posizionale: in base 10, $1943 = 1 \cdot 10^3 + 9 \cdot 10^2 + 4 \cdot 10^1 + 3 \cdot 10^0$; in base 2 le cifre sono 0 e 1 e i pesi sono potenze di 2. Per convertire si usa l'**algoritmo dei resti**: si divide ripetutamente per 2, e i resti, letti **dall'ultimo al primo**, sono le cifre binarie.

$$
5 \bmod 2 = 1,\quad 2 \bmod 2 = 0,\quad 1 \bmod 2 = 1 \quad\Rightarrow\quad 5_{10} = 101_2
$$

I resti escono dalla cifra meno significativa: vanno salvati in un array e stampati al contrario. Pseudocodice della slide 49:

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

Con input 2, 5, 13, 255 stampa `10`, `101`, `1101`, `11111111` (verificati). Il caso $d = 0$ va trattato a parte: il ciclo dei resti non gira mai e senza l'`if` non stamperebbe niente. 32 celle bastano per ogni `int` non negativo, che ha al massimo 31 cifre binarie.

### Sostituire una parola con un'altra

(<span class="src">slide 79-92</span>, codice esempio 3.10) Un analizzatore di testo che sostituisce ogni occorrenza di una parola con un'altra. L'input contiene la parola da cercare seguita da `$`, la sostituta seguita da `#`, poi il testo terminato da `%`:

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

Il codice delle slide 85-92 è pseudo-C e non compila: `scanf(carattere)` invece di leggere con `getchar`, `printf(' ')` e `printf(ParolaCorrente[contatore])` passano un carattere dove serve una stringa, `while carattere != ' '` non ha le parentesi, la condizione della slide 89 ha una parentesi in più. C'è anche un errore di logica: l'ultima parola del testo è seguita da `%` e non da uno spazio, quindi il ciclo interno della slide 87 non si ferma e legge oltre la fine. Versione completa e corretta:

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

Con l'input della slide stampa `zappa fato farro farro farne fanno farro ` (verificato): i due `faro` diventano `farro`, mentre `fato`, `farne` e il `farro` già presente restano. Con input `$x#a b%` stampa `MANCA LA PAROLA DA SOSTITUIRE`.

Le idee da portare via:
- Le tre parole sono **array di caratteri con una lunghezza a parte** (`lungh_prima`, …): l'array da solo non sa quanti caratteri contiene. Le stringhe del deck 4.2 risolvono proprio questo, con un carattere terminatore.
- Due **cicli annidati** (slide 87): quello esterno scorre le parole, quello interno i caratteri di una parola.
- Il **confronto** di due array (sottoproblema 3) si fa cella per cella, e solo se le lunghezze coincidono. Il `while` si ferma alla prima differenza: le parole coincidono se `contatore` è arrivato alla lunghezza. Con `contatore < lungh_prima` scritto per primo, l'AND non legge mai oltre la fine.

## Esercizi tipo esame

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

#define N 6

int main(void)
{
    int a[N] = {3, 1, 4, 1, 5, 9};
    int i;
    int s = 0;

    for (i = 0; i < N; i += 2)
        s += a[i];
    for (i = N - 1; i > 0; i--)
        a[i] = a[i - 1];
    a[0] = s;
    for (i = 0; i < N; i++)
        printf("%d ", a[i]);
    printf("\ns=%d i=%d\n", s, i);
    return 0;
}
```

> [!example]- Soluzione
> Il primo ciclo somma gli indici pari 0, 2, 4: $3 + 4 + 5 = 12$. Il secondo sposta tutto a destra di una cella partendo dal fondo: `3 3 1 4 1 5` (il 9 si perde). Poi `a[0]` diventa 12.
> ```
> 12 3 1 4 1 5 
> s=12 i=6
> ```
> (verificato). `i` vale 6 perché è l'ultimo ciclo, quello di stampa, a lasciarla così.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    int a[4] = {0};
    int i = 0;

    a[i++] = 5;
    a[i++] = a[0] * 2;
    a[i] = i;
    printf("%d %d %d %d i=%d\n", a[0], a[1], a[2], a[3], i);
    return 0;
}
```

> [!example]- Soluzione
> | istruzione | indice usato | scrive | `i` dopo |
> | --- | --- | --- | --- |
> | `a[i++] = 5` | 0 | `a[0]` = 5 | 1 |
> | `a[i++] = a[0] * 2` | 1 | `a[1]` = 10 | 2 |
> | `a[i] = i` | 2 | `a[2]` = 2 | 2 |
>
> Output: `5 10 2 0 i=2` (verificato). `a[3]` vale 0 per l'inizializzazione `{0}`.

**Esercizio 3.** Scrivi l'output esatto e spiega ogni valore.

```c
#include <stdio.h>

int main(void)
{
    int v[5] = {2};
    int w[] = {4, 8, 15};
    int i;

    for (i = 0; i < 5; i++)
        printf("%d ", v[i]);
    printf("\n%zu %zu\n", sizeof(w) / sizeof(w[0]), sizeof(v));
    return 0;
}
```

> [!example]- Soluzione
> ```
> 2 0 0 0 0 
> 3 20
> ```
> (verificato, `int` da 4 byte). `{2}` inizializza solo `v[0]`, le altre celle valgono 0: `{2}` **non** mette tutto a 2. `w` senza dimensione la prende dalla lista: 3 elementi. `sizeof(v)` è $5 \cdot 4 = 20$ byte.

**Esercizio 4.** Trova gli errori.

```
#define N 10
int v[N];
int i;
for (i = 1; i <= N; i++)
    scanf("%d", v[i]);
```

> [!example]- Soluzione
> Tre errori:
> - gli indici validi vanno da 0 a 9: il ciclo salta `v[0]` e scrive `v[10]`, fuori dall'array. Va `for (i = 0; i < N; i++)`;
> - `scanf` vuole l'indirizzo: `&v[i]`;
> - il valore di ritorno di `scanf` non è controllato.
>
> Il primo è l'errore più frequente con gli array: con $N$ celle la condizione è `i < N`, mai `i <= N`.

**Esercizio 5.** Scrivi un programma che legge 8 interi in un array e stampa il massimo e la posizione della sua **prima** occorrenza.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define N 8
>
> int main(void)
> {
>     int v[N];
>     int i;
>     int pos_max;
>
>     for (i = 0; i < N; i++)
>         if (scanf("%d", &v[i]) != 1) {
>             printf("input non valido\n");
>             return 1;
>         }
>     pos_max = 0;
>     for (i = 1; i < N; i++)
>         if (v[i] > v[pos_max])
>             pos_max = i;
>     printf("max=%d in posizione %d\n", v[pos_max], pos_max);
>     return 0;
> }
> ```
> Con input `4 -2 17 8 17 0 3 9` stampa `max=17 in posizione 2` (verificato). Con `>=` al posto di `>` darebbe la posizione 4, l'ultima occorrenza. Tenere la posizione basta: il valore si ricava come `v[pos_max]`.

**Esercizio 6.** Inverti sul posto `int v[7] = {1, 2, 3, 4, 5, 6, 7}` (senza un secondo array) e stampalo.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define N 7
>
> int main(void)
> {
>     int v[N] = {1, 2, 3, 4, 5, 6, 7};
>     int i;
>     int tmp;
>
>     for (i = 0; i < N / 2; i++) {
>         tmp = v[i];
>         v[i] = v[N - 1 - i];
>         v[N - 1 - i] = tmp;
>     }
>     for (i = 0; i < N; i++)
>         printf("%d ", v[i]);
>     printf("\n");
>     return 0;
> }
> ```
> Stampa `7 6 5 4 3 2 1 ` (verificato). Il ciclo fa $N / 2 = 3$ scambi: (0,6), (1,5), (2,4). L'elemento centrale resta dov'è. Con `i < N` gli scambi sarebbero 7 e l'array tornerebbe com'era.

**Esercizio 7.** Leggi una sequenza di lanci di dado (interi, fino a fine input) e stampa quante volte è uscita ogni faccia. Ignora i valori fuori da 1-6.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define FACCE 6
>
> int main(void)
> {
>     int conta[FACCE + 1] = {0};
>     int lancio;
>     int f;
>
>     while (scanf("%d", &lancio) == 1) {
>         if (lancio >= 1 && lancio <= FACCE)
>             conta[lancio]++;
>     }
>     for (f = 1; f <= FACCE; f++)
>         printf("%d: %d\n", f, conta[f]);
>     return 0;
> }
> ```
> Con input `3 6 1 3 3 7 6 2` stampa `1: 1`, `2: 1`, `3: 3`, `4: 0`, `5: 0`, `6: 2` (verificato; il 7 è ignorato). L'array ha `FACCE + 1` celle per usare il valore del dado direttamente come indice, lasciando inutilizzata la cella 0. Il controllo del range viene **prima** di `conta[lancio]++`: senza, un 7 scriverebbe fuori dall'array. È lo stesso schema di `ndigit[c - '0']++`.

**Esercizio 8.** (Slide 52, lasciato per casa.) Data una sequenza di parole separate da spazi bianchi (spazio, tab, a capo), stampa un grafico a barre orizzontali: per ogni lunghezza, una barra con tanti `*` quante sono le parole di quella lunghezza.

> [!example]- Soluzione
> ```c
> #include <stdio.h>
>
> #define MAX_LUNG 20
>
> int main(void)
> {
>     int occorrenze[MAX_LUNG + 1] = {0};
>     int c;
>     int lung = 0;
>     int i;
>     int k;
>
>     while ((c = getchar()) != EOF) {
>         if (c == ' ' || c == '\t' || c == '\n') {
>             if (lung > 0) {
>                 occorrenze[lung > MAX_LUNG ? MAX_LUNG : lung]++;
>                 lung = 0;
>             }
>         } else {
>             lung++;
>         }
>     }
>     if (lung > 0)
>         occorrenze[lung > MAX_LUNG ? MAX_LUNG : lung]++;
>
>     for (i = 1; i <= MAX_LUNG; i++) {
>         if (occorrenze[i] > 0) {
>             printf("%2d | ", i);
>             for (k = 0; k < occorrenze[i]; k++)
>                 putchar('*');
>             printf(" %d\n", occorrenze[i]);
>         }
>     }
>     return 0;
> }
> ```
> Con input `il gatto dorme sul divano` a capo `e il cane abbaia` stampa (verificato):
> ```
>  1 | * 1
>  2 | ** 2
>  3 | * 1
>  4 | * 1
>  5 | ** 2
>  6 | ** 2
> ```
> `lung` conta i caratteri della parola in corso e si azzera a ogni spazio bianco, ma solo se c'era una parola (`lung > 0`): così due spazi di fila non contano una parola di lunghezza 0. L'`if` dopo il ciclo chiude l'ultima parola se l'input finisce senza a capo. Le parole più lunghe di 20 finiscono tutte nella barra 20, così l'indice non esce mai dall'array.

**Esercizio 9.** Vero o falso?
1. Con `int a[10]`, l'istruzione `a[10] = 0;` dà errore di compilazione.
2. `int b[3] = {1, 2, 3}; int c[3]; c = b;` copia `b` in `c`.
3. `int d[4] = {1};` mette tutte le celle a 1.
4. In `x = a[i + 1]`, l'indice può essere un'espressione qualsiasi a valore intero.
5. Dopo `int e[5];` dentro `main`, `e[0]` vale 0.

> [!example]- Soluzione
> 1. **Falso**. Il C non controlla gli indici: compila, e a runtime scrive fuori dall'array (comportamento indefinito). gcc al massimo avvisa se l'indice è costante e lo vede.
> 2. **Falso**. Un array non si assegna in blocco, gcc dà errore. Si copia con un ciclo.
> 3. **Falso**. `d[0]` vale 1, le altre 0.
> 4. **Vero** (slide 8 e 18).
> 5. **Falso**. Un array locale non inizializzato ha contenuto indefinito.

## Errori tipici

- `i <= N` nella condizione: con $N$ celle l'ultimo indice è $N - 1$, e `a[N]` è fuori. Il C non avvisa: sovrascrive un'altra variabile o termina con segmentation fault.
- Dimenticare che l'indice parte da 0: "il quinto elemento" è `a[4]`.
- Dopo un ciclo che riempie un array, usare l'indice come se fosse l'ultimo usato: vale il numero di elementi, uno in più (slide 50, inversione, binario).
- `printf("%d", voti)` per stampare l'array intero: stampa (male) un indirizzo. Serve un ciclo.
- `array1 = array2` o un confronto fra due array con l'operatore di uguaglianza: non copia e non confronta il contenuto. Si lavora cella per cella.
- `int c[2] = {5, 2, -5}`: più valori che celle. E `int d[4] = {1}` non mette tutto a 1.
- Usare un array locale senza inizializzarlo: contatori e accumulatori vanno azzerati, con `{0}` o con un ciclo.
- `scanf("%d", v[i])` senza `&`.
- Leggere caratteri in un `char` e confrontare con `EOF`: la variabile di `getchar` è `int`.
- Riempire un array da input senza controllare la dimensione massima (slide 40: "MAX 100 caratteri" scritto nel commento ma non nel codice).
- Spostare gli elementi a destra partendo da sinistra: `a[1] = a[0]`, poi `a[2] = a[1]` ricopia lo stesso valore in tutte le celle.
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

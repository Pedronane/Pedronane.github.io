---
title: Stringhe
materia: prog-1
materiaNome: Programmazione 1
materiaBreve: Prog 1
cfu: 12
hub: false
tipo: teoria
stato: in corso
data: 2026-10-14
lezioni:
  - ott, giorno?
ordine: 12
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, deck 4.2: <span class="src">slide 3-8</span> (caratteri, ASCII, stringa come array di `char` con `'\0'`), <span class="src">slide 9-17</span> (inizializzazione, stampa con `%s`, `scanf` senza `&`), <span class="src">slide 18-21</span> (lettura, lunghezza, librerie). Il legame fra stringhe e puntatori (`char *s = "..."`, lunghezza con l'aritmetica dei puntatori) è in [Puntatori](/uni/prog-1/puntatori/). Prima: [Array](/uni/prog-1/array/), che chiude proprio con il problema che le stringhe risolvono.

> [!abstract] Per l'esame
> - **Saper enunciare**: cos'è una stringa in C (array di `char` che termina con il carattere nullo `'\0'`), perché servono $n + 1$ celle per $n$ caratteri, differenza fra lunghezza e dimensione dell'array (`sizeof`), perché `printf("%s", s)` funziona con una stringa e non con un array di `int`, perché in `scanf("%s", s)` non si mette `&`, perché `s = "ciao";` non compila.
> - **Saper fare**: disegnare una stringa in memoria cella per cella con il terminatore; tracciare un programma che scorre una stringa con `while (s[i] != '\0')` e la modifica (maiuscole, troncamento con `'\0'`); scrivere senza librerie lunghezza, copia, concatenazione, confronto alfabetico, inversione, palindromo.
> - **Dove esce**: nella teorica i vero/falso su `'\0'`, `sizeof` e `scanf`, e i tracing con stringhe (vedi [Esami passati](/uni/prog-1/esami-passati/): `compareString` è uscito come codice da scrivere). Al calcolatore ogni struct ha un `char nome[20]` letto da tastiera e copiato con `strcpy`: se non sai dove finisce la stringa, sbagli la stampa e il salvataggio su file.

Il filo del deck:

```
caratteri         'h', 'e', 'l', 'l', 'o': un tipo base, codificato in ASCII
   |
stringa           sequenza di caratteri trattata come un oggetto solo: "hello"
   |
in C              non c'è un tipo stringa: si usa un array di char
                  e l'ultimo carattere utile è seguito da '\0'
   |
inizializzazione  char s[] = "Ciao";   il compilatore aggiunge '\0' da solo
   |
stampa e lettura  %s scorre fino a '\0';  scanf("%s", s) senza &
   |
librerie          string.h (più avanti); in C++ la classe string (non nel corso)
```

## Definizioni

**Carattere** (<span class="src">slide 3-5</span>). In C i caratteri sono uno dei tipi base (`char`). Non servono solo per il testo: sono anche simboli che arrivano dallo standard input con altri significati, come l'a capo o il tab. Ogni carattere è memorizzato come il suo **codice ASCII** (American Standard Code for Information Interchange, dal 1963), un intero: `'A'` è 65, `'a'` è 97, `'0'` è 48, lo spazio è 32. Il dettaglio della tabella è in [Rappresentazione dell'informazione](/uni/prog-1/rappresentazione-dell-informazione/).

**Stringa** (<span class="src">slide 6</span>). Con le parole del prof: una **sequenza di caratteri trattati come un oggetto singolo**. `'h'` è un carattere, `"hello"` è una stringa: apici singoli per il carattere, doppi per la stringa. Servono in moltissime applicazioni, per confrontare, ordinare, cercare testo. Ogni linguaggio le implementa a modo suo.

**Stringa in C** (<span class="src">slide 7-8</span>). Il C usa gli **array di `char`** per rappresentare le stringhe, con un requisito: dopo l'ultimo carattere utile l'array deve contenere il **carattere nullo** `'\0'`, cioè il carattere di codice ASCII 0. Il `'\0'` fa da **delimitatore**: tutte le funzioni che lavorano sulle stringhe lo usano per capire dove la stringa finisce. Quindi:

> per memorizzare una stringa di $n$ caratteri servono $n + 1$ celle.

Perché serve il terminatore: nella sostituzione di parole di [Array](/uni/prog-1/array/) ogni parola aveva bisogno di una variabile in più (`lungh_prima`, `lungh_seconda`) per sapere quanti caratteri contava, perché un array da solo non sa quanti dei suoi elementi sono "usati". Il C risolve mettendo l'informazione dentro l'array stesso: si legge finché non si trova il carattere 0. Il prezzo è una cella in più e il dovere di non dimenticarlo mai.

<figure class="fig"><svg role="img" aria-label="Stringa in memoria" xmlns:xlink="http://www.w3.org/1999/xlink" width="565.92pt" height="227.736pt" viewBox="0 0 565.92 227.736" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f6b97e1-figure_1"> <g id="f6b97e1-patch_1"> <path d="M 0 227.736 L 565.92 227.736 L 565.92 0 L 0 0 L 0 227.736 z " style="fill: none"/> </g> <g id="f6b97e1-axes_1"> <g id="f6b97e1-patch_2"> <path d="M 77.832 133.272 L 136.044 133.272 L 136.044 88.92 L 77.832 88.92 L 77.832 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-patch_3"> <path d="M 136.044 133.272 L 194.256 133.272 L 194.256 88.92 L 136.044 88.92 L 136.044 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-patch_4"> <path d="M 194.256 133.272 L 252.468 133.272 L 252.468 88.92 L 194.256 88.92 L 194.256 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-patch_5"> <path d="M 252.468 133.272 L 310.68 133.272 L 310.68 88.92 L 252.468 88.92 L 252.468 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-ink); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-patch_6"> <path d="M 310.68 133.272 L 368.892 133.272 L 368.892 88.92 L 310.68 88.92 L 310.68 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-steel); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-patch_7"> <path d="M 368.892 133.272 L 427.104 133.272 L 427.104 88.92 L 368.892 88.92 L 368.892 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-patch_8"> <path d="M 427.104 133.272 L 485.316 133.272 L 485.316 88.92 L 427.104 88.92 L 427.104 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-patch_9"> <path d="M 485.316 133.272 L 543.528 133.272 L 543.528 88.92 L 485.316 88.92 L 485.316 133.272 z " clip-path="url(#f6b97e1-p3f7e91fb9b)" style="fill: none; stroke: var(--fig-faint); stroke-width: 1.7; stroke-linejoin: miter"/> </g> <g id="f6b97e1-text_1"> <!-- frase --> <g style="fill: var(--fig-accent)" transform="translate(11.304 114.733266) scale(0.14 -0.14)"> <defs> <path id="f6b97e1-DejaVuSansMono-Bold-49" d="M 2309 3806 L 2309 3500 L 3384 3500 L 3384 2797 L 2309 2797 L 2309 0 L 1394 0 L 1394 2797 L 544 2797 L 544 3500 L 1394 3500 L 1394 3744 Q 1394 4375 1656 4619 Q 1919 4863 2631 4863 L 3384 4863 L 3384 4159 L 2669 4159 Q 2463 4159 2389 4084 Q 2316 4009 2309 3806 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-Bold-55" d="M 3597 2534 Q 3447 2672 3245 2740 Q 3044 2809 2803 2809 Q 2513 2809 2295 2707 Q 2078 2606 1959 2413 Q 1884 2294 1854 2125 Q 1825 1956 1825 1613 L 1825 0 L 909 0 L 909 3500 L 1825 3500 L 1825 2956 Q 1959 3256 2237 3420 Q 2516 3584 2888 3584 Q 3075 3584 3254 3539 Q 3434 3494 3597 3406 L 3597 2534 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-Bold-44" d="M 2188 1644 Q 1675 1644 1472 1512 Q 1269 1381 1269 1063 Q 1269 825 1409 684 Q 1550 544 1791 544 Q 2153 544 2353 817 Q 2553 1091 2553 1581 L 2553 1644 L 2188 1644 z M 3463 1997 L 3463 0 L 2553 0 L 2553 391 Q 2388 159 2128 34 Q 1869 -91 1556 -91 Q 959 -91 626 225 Q 294 541 294 1106 Q 294 1719 691 2011 Q 1088 2303 1919 2303 L 2553 2303 L 2553 2456 Q 2553 2678 2392 2792 Q 2231 2906 1919 2906 Q 1591 2906 1283 2823 Q 975 2741 641 2559 L 641 3341 Q 944 3466 1256 3525 Q 1569 3584 1919 3584 Q 2772 3584 3117 3237 Q 3463 2891 3463 1997 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-Bold-56" d="M 3097 3391 L 3097 2591 Q 2844 2753 2570 2836 Q 2297 2919 2022 2919 Q 1716 2919 1559 2830 Q 1403 2741 1403 2566 Q 1403 2316 2072 2159 L 2106 2150 L 2369 2088 Q 2869 1969 3101 1705 Q 3334 1441 3334 991 Q 3334 450 2979 179 Q 2625 -91 1913 -91 Q 1597 -91 1265 -36 Q 934 19 594 128 L 594 928 Q 897 756 1211 665 Q 1525 575 1819 575 Q 2141 575 2306 669 Q 2472 763 2472 941 Q 2472 1116 2355 1209 Q 2238 1303 1797 1409 L 1544 1466 Q 1019 1584 778 1837 Q 538 2091 538 2516 Q 538 3022 903 3303 Q 1269 3584 1931 3584 Q 2228 3584 2523 3536 Q 2819 3488 3097 3391 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-Bold-48" d="M 3444 172 Q 3125 41 2794 -25 Q 2463 -91 2094 -91 Q 1216 -91 752 379 Q 288 850 288 1734 Q 288 2591 734 3087 Q 1181 3584 1953 3584 Q 2731 3584 3161 3123 Q 3591 2663 3591 1825 L 3591 1453 L 1219 1453 Q 1222 1041 1462 837 Q 1703 634 2181 634 Q 2497 634 2803 725 Q 3109 816 3444 1013 L 3444 172 z M 2669 2141 Q 2663 2503 2483 2689 Q 2303 2875 1953 2875 Q 1638 2875 1450 2683 Q 1263 2491 1228 2138 L 2669 2141 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-Bold-49"/> <use xlink:href="#f6b97e1-DejaVuSansMono-Bold-55" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-Bold-44" transform="translate(120.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-Bold-56" transform="translate(180.609375 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-Bold-48" transform="translate(240.8125 0)"/> </g> </g> <g id="f6b97e1-text_2"> <!-- 'C' --> <g style="fill: var(--fig-ink)" transform="translate(96.101438 114.213187) scale(0.12 -0.12)"> <defs> <path id="f6b97e1-DejaVuSansMono-a" d="M 2194 4666 L 2194 2931 L 1650 2931 L 1650 4666 L 2194 4666 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-26" d="M 3353 166 Q 3113 38 2859 -26 Q 2606 -91 2322 -91 Q 1425 -91 929 543 Q 434 1178 434 2328 Q 434 3472 932 4111 Q 1431 4750 2322 4750 Q 2606 4750 2859 4686 Q 3113 4622 3353 4494 L 3353 3847 Q 3122 4038 2856 4138 Q 2591 4238 2322 4238 Q 1706 4238 1400 3763 Q 1094 3288 1094 2328 Q 1094 1372 1400 897 Q 1706 422 2322 422 Q 2597 422 2861 522 Q 3125 622 3353 813 L 3353 166 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-26" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_3"> <!-- [0] --> <g style="fill: var(--fig-axis)" transform="translate(97.004484 75.145852) scale(0.11 -0.11)"> <defs> <path id="f6b97e1-DejaVuSansMono-3e" d="M 1447 4863 L 2772 4863 L 2772 4416 L 2022 4416 L 2022 -397 L 2772 -397 L 2772 -844 L 1447 -844 L 1447 4863 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-40" d="M 2406 4863 L 2406 -844 L 1081 -844 L 1081 -397 L 1831 -397 L 1831 4416 L 1081 4416 L 1081 4863 L 2406 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_4"> <!-- 67 --> <g style="fill: var(--fig-axis)" transform="translate(100.917688 152.501656) scale(0.1 -0.1)"> <defs> <path id="f6b97e1-DejaVuSansMono-19" d="M 3097 4563 L 3097 3981 Q 2900 4097 2678 4158 Q 2456 4219 2216 4219 Q 1616 4219 1306 3767 Q 997 3316 997 2438 Q 1147 2750 1412 2917 Q 1678 3084 2022 3084 Q 2697 3084 3067 2670 Q 3438 2256 3438 1497 Q 3438 741 3056 325 Q 2675 -91 1984 -91 Q 1172 -91 794 492 Q 416 1075 416 2328 Q 416 3509 870 4129 Q 1325 4750 2188 4750 Q 2419 4750 2650 4701 Q 2881 4653 3097 4563 z M 1972 2591 Q 1569 2591 1337 2300 Q 1106 2009 1106 1497 Q 1106 984 1337 693 Q 1569 403 1972 403 Q 2391 403 2603 679 Q 2816 956 2816 1497 Q 2816 2041 2603 2316 Q 2391 2591 1972 2591 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSansMono-1a" d="M 434 4666 L 3372 4666 L 3372 4397 L 1703 0 L 1044 0 L 2669 4134 L 434 4134 L 434 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-19"/> <use xlink:href="#f6b97e1-DejaVuSansMono-1a" transform="translate(60.203125 0)"/> </g> </g> <g id="f6b97e1-text_5"> <!-- 'i' --> <g style="fill: var(--fig-ink)" transform="translate(154.313437 114.213656) scale(0.12 -0.12)"> <defs> <path id="f6b97e1-DejaVuSansMono-4c" d="M 800 3500 L 2272 3500 L 2272 447 L 3413 447 L 3413 0 L 556 0 L 556 447 L 1697 447 L 1697 3053 L 800 3053 L 800 3500 z M 1697 4863 L 2272 4863 L 2272 4134 L 1697 4134 L 1697 4863 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-4c" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_6"> <!-- [1] --> <g style="fill: var(--fig-axis)" transform="translate(155.216484 75.145852) scale(0.11 -0.11)"> <defs> <path id="f6b97e1-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_7"> <!-- 105 --> <g style="fill: var(--fig-axis)" transform="translate(156.119531 152.501656) scale(0.1 -0.1)"> <defs> <path id="f6b97e1-DejaVuSansMono-18" d="M 647 4666 L 3009 4666 L 3009 4134 L 1222 4134 L 1222 2988 Q 1356 3038 1492 3061 Q 1628 3084 1766 3084 Q 2491 3084 2916 2656 Q 3341 2228 3341 1497 Q 3341 759 2895 334 Q 2450 -91 1678 -91 Q 1306 -91 998 -41 Q 691 9 447 109 L 447 750 Q 734 594 1025 517 Q 1316 441 1619 441 Q 2141 441 2423 716 Q 2706 991 2706 1497 Q 2706 1997 2414 2275 Q 2122 2553 1600 2553 Q 1347 2553 1106 2495 Q 866 2438 647 2322 L 647 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-14"/> <use xlink:href="#f6b97e1-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-18" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_8"> <!-- 'a' --> <g style="fill: var(--fig-ink)" transform="translate(212.525438 114.213187) scale(0.12 -0.12)"> <defs> <path id="f6b97e1-DejaVuSansMono-44" d="M 2194 1759 L 2003 1759 Q 1500 1759 1245 1582 Q 991 1406 991 1056 Q 991 741 1181 566 Q 1372 391 1709 391 Q 2184 391 2456 720 Q 2728 1050 2731 1631 L 2731 1759 L 2194 1759 z M 3309 1997 L 3309 0 L 2731 0 L 2731 519 Q 2547 206 2267 57 Q 1988 -91 1588 -91 Q 1053 -91 734 211 Q 416 513 416 1019 Q 416 1603 808 1906 Q 1200 2209 1959 2209 L 2731 2209 L 2731 2300 Q 2728 2719 2518 2908 Q 2309 3097 1850 3097 Q 1556 3097 1256 3012 Q 956 2928 672 2766 L 672 3341 Q 991 3463 1283 3523 Q 1575 3584 1850 3584 Q 2284 3584 2592 3456 Q 2900 3328 3091 3072 Q 3209 2916 3259 2686 Q 3309 2456 3309 1997 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-44" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_9"> <!-- [2] --> <g style="fill: var(--fig-axis)" transform="translate(213.428484 75.145852) scale(0.11 -0.11)"> <defs> <path id="f6b97e1-DejaVuSansMono-15" d="M 1166 531 L 3309 531 L 3309 0 L 475 0 L 475 531 Q 1059 1147 1496 1619 Q 1934 2091 2100 2284 Q 2413 2666 2522 2902 Q 2631 3138 2631 3384 Q 2631 3775 2401 3997 Q 2172 4219 1772 4219 Q 1488 4219 1175 4116 Q 863 4013 513 3803 L 513 4441 Q 834 4594 1145 4672 Q 1456 4750 1759 4750 Q 2444 4750 2861 4386 Q 3278 4022 3278 3431 Q 3278 3131 3139 2831 Q 3000 2531 2688 2169 Q 2513 1966 2180 1606 Q 1847 1247 1166 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-15" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_10"> <!-- 97 --> <g style="fill: var(--fig-axis)" transform="translate(217.341688 152.501656) scale(0.1 -0.1)"> <defs> <path id="f6b97e1-DejaVuSansMono-1c" d="M 1863 2069 Q 2266 2069 2495 2359 Q 2725 2650 2725 3163 Q 2725 3675 2495 3965 Q 2266 4256 1863 4256 Q 1444 4256 1231 3979 Q 1019 3703 1019 3163 Q 1019 2619 1230 2344 Q 1441 2069 1863 2069 z M 738 97 L 738 678 Q 934 563 1156 502 Q 1378 441 1619 441 Q 2219 441 2526 892 Q 2834 1344 2834 2222 Q 2688 1909 2422 1742 Q 2156 1575 1813 1575 Q 1138 1575 767 1990 Q 397 2406 397 3169 Q 397 3922 776 4336 Q 1156 4750 1850 4750 Q 2663 4750 3041 4165 Q 3419 3581 3419 2328 Q 3419 1150 2964 529 Q 2509 -91 1644 -91 Q 1416 -91 1184 -42 Q 953 6 738 97 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-1c"/> <use xlink:href="#f6b97e1-DejaVuSansMono-1a" transform="translate(60.203125 0)"/> </g> </g> <g id="f6b97e1-text_11"> <!-- 'o' --> <g style="fill: var(--fig-ink)" transform="translate(270.737437 114.213187) scale(0.12 -0.12)"> <defs> <path id="f6b97e1-DejaVuSansMono-52" d="M 1925 3097 Q 1488 3097 1263 2756 Q 1038 2416 1038 1747 Q 1038 1081 1263 739 Q 1488 397 1925 397 Q 2366 397 2591 739 Q 2816 1081 2816 1747 Q 2816 2416 2591 2756 Q 2366 3097 1925 3097 z M 1925 3584 Q 2653 3584 3039 3112 Q 3425 2641 3425 1747 Q 3425 850 3040 379 Q 2656 -91 1925 -91 Q 1197 -91 812 379 Q 428 850 428 1747 Q 428 2641 812 3112 Q 1197 3584 1925 3584 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-52" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_12"> <!-- [3] --> <g style="fill: var(--fig-axis)" transform="translate(271.640484 75.145852) scale(0.11 -0.11)"> <defs> <path id="f6b97e1-DejaVuSansMono-16" d="M 2425 2497 Q 2884 2375 3128 2064 Q 3372 1753 3372 1288 Q 3372 644 2939 276 Q 2506 -91 1741 -91 Q 1419 -91 1084 -31 Q 750 28 428 141 L 428 769 Q 747 603 1056 522 Q 1366 441 1672 441 Q 2191 441 2469 675 Q 2747 909 2747 1350 Q 2747 1756 2469 1995 Q 2191 2234 1716 2234 L 1234 2234 L 1234 2753 L 1716 2753 Q 2150 2753 2394 2943 Q 2638 3134 2638 3475 Q 2638 3834 2411 4026 Q 2184 4219 1766 4219 Q 1488 4219 1191 4156 Q 894 4094 569 3969 L 569 4550 Q 947 4650 1242 4700 Q 1538 4750 1766 4750 Q 2447 4750 2855 4408 Q 3263 4066 3263 3500 Q 3263 3116 3048 2859 Q 2834 2603 2425 2497 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-16" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_13"> <!-- 111 --> <g style="fill: var(--fig-axis)" transform="translate(272.543531 152.501656) scale(0.1 -0.1)"> <use xlink:href="#f6b97e1-DejaVuSansMono-14"/> <use xlink:href="#f6b97e1-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-14" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_14"> <!-- '\0' --> <g style="fill: var(--fig-steel)" transform="translate(325.33725 114.213187) scale(0.12 -0.12)"> <defs> <path id="f6b97e1-DejaVuSansMono-3f" d="M 916 4666 L 3372 -594 L 2778 -594 L 319 4666 L 916 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-3f" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(180.609375 0)"/> </g> </g> <g id="f6b97e1-text_15"> <!-- [4] --> <g style="fill: var(--fig-axis)" transform="translate(329.852484 75.145852) scale(0.11 -0.11)"> <defs> <path id="f6b97e1-DejaVuSansMono-17" d="M 2297 4091 L 825 1625 L 2297 1625 L 2297 4091 z M 2194 4666 L 2925 4666 L 2925 1625 L 3547 1625 L 3547 1113 L 2925 1113 L 2925 0 L 2297 0 L 2297 1113 L 319 1113 L 319 1709 L 2194 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-17" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_16"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(336.775844 152.501656) scale(0.1 -0.1)"> <use xlink:href="#f6b97e1-DejaVuSansMono-13"/> </g> </g> <g id="f6b97e1-text_17"> <!-- '\0' --> <g style="fill: var(--fig-faint)" transform="translate(383.54925 114.213187) scale(0.12 -0.12)"> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-3f" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(180.609375 0)"/> </g> </g> <g id="f6b97e1-text_18"> <!-- [5] --> <g style="fill: var(--fig-axis)" transform="translate(388.064484 75.145852) scale(0.11 -0.11)"> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-18" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_19"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(394.987844 152.501656) scale(0.1 -0.1)"> <use xlink:href="#f6b97e1-DejaVuSansMono-13"/> </g> </g> <g id="f6b97e1-text_20"> <!-- '\0' --> <g style="fill: var(--fig-faint)" transform="translate(441.76125 114.213187) scale(0.12 -0.12)"> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-3f" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(180.609375 0)"/> </g> </g> <g id="f6b97e1-text_21"> <!-- [6] --> <g style="fill: var(--fig-axis)" transform="translate(446.276484 75.145852) scale(0.11 -0.11)"> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-19" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_22"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(453.199844 152.501656) scale(0.1 -0.1)"> <use xlink:href="#f6b97e1-DejaVuSansMono-13"/> </g> </g> <g id="f6b97e1-text_23"> <!-- '\0' --> <g style="fill: var(--fig-faint)" transform="translate(499.97325 114.213187) scale(0.12 -0.12)"> <use xlink:href="#f6b97e1-DejaVuSansMono-a"/> <use xlink:href="#f6b97e1-DejaVuSansMono-3f" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-a" transform="translate(180.609375 0)"/> </g> </g> <g id="f6b97e1-text_24"> <!-- [7] --> <g style="fill: var(--fig-axis)" transform="translate(504.488484 75.145852) scale(0.11 -0.11)"> <use xlink:href="#f6b97e1-DejaVuSansMono-3e"/> <use xlink:href="#f6b97e1-DejaVuSansMono-1a" transform="translate(60.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSansMono-40" transform="translate(120.40625 0)"/> </g> </g> <g id="f6b97e1-text_25"> <!-- 0 --> <g style="fill: var(--fig-axis)" transform="translate(511.411844 152.501656) scale(0.1 -0.1)"> <use xlink:href="#f6b97e1-DejaVuSansMono-13"/> </g> </g> <g id="f6b97e1-text_26"> <!-- ASCII --> <g style="fill: var(--fig-axis)" transform="translate(42.854906 152.241891) scale(0.09 -0.09)"> <defs> <path id="f6b97e1-DejaVuSerif-24" d="M 1281 1691 L 2994 1691 L 2138 3909 L 1281 1691 z M -38 0 L -38 331 L 372 331 L 2034 4666 L 2559 4666 L 4225 331 L 4684 331 L 4684 0 L 2988 0 L 2988 331 L 3506 331 L 3116 1356 L 1153 1356 L 763 331 L 1275 331 L 1275 0 L -38 0 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-36" d="M 594 225 L 594 1288 L 953 1284 Q 969 753 1261 498 Q 1553 244 2150 244 Q 2706 244 2998 464 Q 3291 684 3291 1106 Q 3291 1444 3114 1625 Q 2938 1806 2369 1978 L 1753 2163 Q 1084 2366 811 2669 Q 538 2972 538 3500 Q 538 4094 959 4422 Q 1381 4750 2144 4750 Q 2469 4750 2856 4679 Q 3244 4609 3681 4475 L 3681 3481 L 3328 3481 Q 3275 3975 2998 4195 Q 2722 4416 2156 4416 Q 1663 4416 1405 4214 Q 1147 4013 1147 3628 Q 1147 3294 1340 3103 Q 1534 2913 2163 2725 L 2741 2553 Q 3375 2363 3645 2067 Q 3916 1772 3916 1275 Q 3916 597 3481 253 Q 3047 -91 2188 -91 Q 1803 -91 1404 -12 Q 1006 66 594 225 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-26" d="M 4513 1234 Q 4306 581 3820 245 Q 3334 -91 2591 -91 Q 2134 -91 1743 65 Q 1353 222 1050 525 Q 700 875 529 1320 Q 359 1766 359 2328 Q 359 3416 987 4083 Q 1616 4750 2644 4750 Q 3025 4750 3456 4650 Q 3888 4550 4384 4347 L 4384 3272 L 4031 3272 Q 3916 3859 3567 4137 Q 3219 4416 2591 4416 Q 1844 4416 1459 3886 Q 1075 3356 1075 2328 Q 1075 1303 1459 773 Q 1844 244 2591 244 Q 3113 244 3450 492 Q 3788 741 3938 1234 L 4513 1234 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-2c" d="M 1581 331 L 2175 331 L 2175 0 L 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 2175 4666 L 2175 4331 L 1581 4331 L 1581 331 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSerif-24"/> <use xlink:href="#f6b97e1-DejaVuSerif-36" transform="translate(72.21875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-26" transform="translate(140.71875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-2c" transform="translate(217.234375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-2c" transform="translate(256.734375 0)"/> </g> </g> <g id="f6b97e1-patch_10"> <path d="M 79.397248 44.568 Q 194.256 44.568 309.114752 44.568 " style="fill: none; stroke: var(--fig-ink); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 82.997248 46.368 L 79.397248 44.568 L 82.997248 42.768 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 305.514752 42.768 L 309.114752 44.568 L 305.514752 46.368 z " style="fill: var(--fig-ink); stroke: var(--fig-ink); stroke-width: 1.4; stroke-linecap: round"/> </g> <g id="f6b97e1-text_27"> <!-- lunghezza 4: i caratteri prima di '\0' --> <g style="fill: var(--fig-ink)" transform="translate(103.140375 30.534047) scale(0.1 -0.1)"> <defs> <path id="f6b97e1-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-4b" d="M 263 0 L 263 331 L 781 331 L 781 4531 L 231 4531 L 231 4863 L 1356 4863 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2704 2764 Q 2556 2988 2175 2988 Q 1775 2988 1565 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-50" d="M 3316 2675 Q 3481 3041 3739 3227 Q 3997 3413 4341 3413 Q 4863 3413 5119 3089 Q 5375 2766 5375 2113 L 5375 331 L 5894 331 L 5894 0 L 4300 0 L 4300 331 L 4800 331 L 4800 2047 Q 4800 2556 4650 2772 Q 4500 2988 4153 2988 Q 3769 2988 3567 2697 Q 3366 2406 3366 1850 L 3366 331 L 3866 331 L 3866 0 L 2291 0 L 2291 331 L 2791 331 L 2791 2069 Q 2791 2566 2641 2777 Q 2491 2988 2144 2988 Q 1759 2988 1557 2697 Q 1356 2406 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3063 1762 3238 Q 2009 3413 2322 3413 Q 2709 3413 2968 3220 Q 3228 3028 3316 2675 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-a" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-3f" d="M 500 4666 L 2156 -594 L 1656 -594 L 0 4666 L 500 4666 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSerif-4f"/> <use xlink:href="#f6b97e1-DejaVuSerif-58" transform="translate(31.984375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-51" transform="translate(96.390625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4a" transform="translate(160.796875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4b" transform="translate(224.8125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(289.21875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-5d" transform="translate(348.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-5d" transform="translate(401.09375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(453.78125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(513.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-17" transform="translate(545.1875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-1d" transform="translate(608.8125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(642.5 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(674.28125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(706.265625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-46" transform="translate(738.046875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(794.046875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(853.671875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(901.46875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-57" transform="translate(961.09375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-57" transform="translate(1001.28125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(1041.46875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(1100.65625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(1148.453125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(1180.4375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-53" transform="translate(1212.21875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(1276.234375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(1324.03125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-50" transform="translate(1356.015625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(1450.84375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(1510.46875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-47" transform="translate(1542.25 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(1606.265625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(1638.25 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-a" transform="translate(1670.03125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3f" transform="translate(1697.515625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-13" transform="translate(1731.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-a" transform="translate(1794.828125 0)"/> </g> </g> <g id="f6b97e1-text_28"> <!-- terminatore --> <g style="fill: var(--fig-steel)" transform="translate(309.516469 47.165656) scale(0.1 -0.1)"> <defs> <path id="f6b97e1-DejaVuSerif-Italic-57" d="M 856 2988 L 350 2988 L 416 3322 L 922 3322 L 1122 4353 L 1700 4353 L 1500 3322 L 2581 3322 L 2516 2988 L 1434 2988 L 1025 878 Q 978 631 978 488 Q 978 388 1000 338 Q 1059 219 1278 219 Q 1503 219 1633 351 Q 1763 484 1825 781 L 2259 781 Q 2147 328 1884 118 Q 1622 -91 1169 -91 Q 672 -91 506 131 Q 406 266 406 516 Q 406 675 447 878 L 856 2988 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-Italic-48" d="M 938 1275 Q 925 1156 925 1050 Q 925 756 1031 563 Q 1216 219 1709 219 Q 2072 219 2250 328 Q 2569 525 2644 778 L 3066 778 Q 2941 381 2475 103 Q 2150 -91 1506 -91 Q 863 -91 516 388 Q 272 722 272 1206 Q 272 1419 319 1659 Q 472 2450 1000 2931 Q 1528 3413 2278 3413 Q 3500 3413 3500 2547 Q 3500 1913 2859 1603 Q 2206 1288 938 1275 z M 2541 1975 Q 2891 2181 2891 2569 Q 2891 3103 2181 3103 Q 1763 3103 1472 2784 Q 1181 2466 1003 1606 Q 2006 1653 2541 1975 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-Italic-55" d="M 3375 3328 L 3213 2497 L 2881 2497 Q 2891 2559 2891 2613 Q 2891 2775 2816 2866 Q 2719 2988 2484 2988 Q 2059 2988 1775 2694 Q 1491 2400 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1791 3078 2089 3245 Q 2388 3413 2769 3413 Q 2909 3413 3059 3391 Q 3209 3369 3375 3328 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-Italic-50" d="M 3503 2675 Q 3741 3041 4034 3227 Q 4328 3413 4672 3413 Q 5194 3413 5388 3088 Q 5503 2894 5503 2578 Q 5503 2372 5453 2113 L 5106 331 L 5625 331 L 5563 0 L 4469 0 L 4866 2047 Q 4913 2291 4913 2466 Q 4913 2659 4856 2772 Q 4750 2988 4403 2988 Q 4019 2988 3761 2697 Q 3503 2406 3394 1850 L 3034 0 L 2459 0 L 2863 2069 Q 2906 2303 2906 2472 Q 2906 2666 2850 2775 Q 2741 2988 2394 2988 Q 2009 2988 1751 2697 Q 1494 2406 1384 1850 L 1025 0 L 450 0 L 1031 2994 L 481 2994 L 544 3322 L 1669 3322 L 1556 2731 Q 1778 3063 2059 3238 Q 2341 3413 2653 3413 Q 3041 3413 3262 3220 Q 3484 3028 3503 2675 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-Italic-4c" d="M 1009 4353 Q 1038 4497 1163 4603 Q 1288 4709 1434 4709 Q 1578 4709 1663 4603 Q 1728 4522 1728 4422 Q 1728 4388 1719 4353 Q 1691 4206 1567 4103 Q 1444 4000 1297 4000 Q 1150 4000 1066 4103 Q 1003 4181 1003 4281 Q 1003 4316 1009 4353 z M 963 331 L 1506 331 L 1444 0 L 325 0 L 903 2988 L 353 2988 L 419 3322 L 1544 3322 L 963 331 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-Italic-51" d="M 450 0 L 1031 2988 L 481 2988 L 544 3322 L 1669 3322 L 1556 2731 Q 1781 3069 2068 3241 Q 2356 3413 2694 3413 Q 3244 3413 3444 3097 Q 3563 2906 3563 2588 Q 3563 2378 3509 2113 L 3163 331 L 3675 331 L 3613 0 L 2522 0 L 2897 1931 Q 2959 2253 2959 2469 Q 2959 2659 2909 2769 Q 2803 2994 2425 2994 Q 2025 2994 1759 2701 Q 1494 2409 1384 1850 L 1025 0 L 450 0 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-Italic-44" d="M 2325 519 Q 1909 -91 1238 -91 Q 688 -91 409 281 Q 216 544 216 919 Q 216 1078 250 1256 Q 463 2359 1231 2928 Q 1884 3413 2675 3413 Q 3206 3413 3388 3322 L 2806 331 L 3300 331 L 3238 0 L 2225 0 L 2325 519 z M 822 938 Q 822 269 1469 269 Q 1863 269 2130 583 Q 2397 897 2516 1497 L 2806 3003 L 2806 3003 Q 2806 3094 2556 3094 Q 1956 3094 1491 2625 Q 1028 2153 863 1297 Q 822 1097 822 938 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-Italic-52" d="M 1644 219 Q 2106 219 2414 584 Q 2722 950 2859 1663 Q 2922 1988 2922 2241 Q 2922 2541 2834 2738 Q 2669 3103 2206 3103 Q 1744 3103 1436 2739 Q 1128 2375 991 1663 Q 928 1338 928 1088 Q 928 784 1019 584 Q 1184 219 1644 219 z M 1584 -91 Q 859 -91 513 388 Q 272 722 272 1203 Q 272 1419 319 1663 Q 472 2456 1005 2934 Q 1538 3413 2266 3413 Q 2994 3413 3341 2934 Q 3578 2603 3578 2122 Q 3578 1906 3531 1663 Q 3378 869 2845 389 Q 2313 -91 1584 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-57"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-48" transform="translate(40.1875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-55" transform="translate(99.375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-50" transform="translate(147.171875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-4c" transform="translate(242 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-51" transform="translate(273.984375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-44" transform="translate(338.390625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-57" transform="translate(398.015625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-52" transform="translate(438.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-55" transform="translate(498.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-Italic-48" transform="translate(546.203125 0)"/> </g> </g> <g id="f6b97e1-patch_11"> <path d="M 79.397248 180.396 Q 310.68 180.396 541.962752 180.396 " style="fill: none; stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 82.997248 182.196 L 79.397248 180.396 L 82.997248 178.596 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: round"/> <path d="M 538.362752 178.596 L 541.962752 180.396 L 538.362752 182.196 z " style="fill: var(--fig-axis); stroke: var(--fig-axis); stroke-width: 1.4; stroke-linecap: round"/> </g> <g id="f6b97e1-text_29"> <!-- char frase[8] = "Ciao"; sizeof(frase) vale 8: le celle dopo il terminatore valgono 0 --> <g style="fill: var(--fig-axis)" transform="translate(101.840156 202.398047) scale(0.1 -0.1)"> <defs> <path id="f6b97e1-DejaVuSerif-49" d="M 2753 4078 L 2450 4078 Q 2447 4313 2317 4434 Q 2188 4556 1941 4556 Q 1619 4556 1487 4379 Q 1356 4203 1356 3750 L 1356 3322 L 2284 3322 L 2284 2988 L 1356 2988 L 1356 331 L 2094 331 L 2094 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3738 Q 781 4294 1070 4578 Q 1359 4863 1919 4863 Q 2128 4863 2337 4825 Q 2547 4788 2753 4709 L 2753 4078 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-3e" d="M 550 4863 L 2003 4863 L 2003 4531 L 1147 4531 L 1147 -513 L 2003 -513 L 2003 -844 L 550 -844 L 550 4863 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-40" d="M 1947 4863 L 1947 -844 L 494 -844 L 494 -513 L 1350 -513 L 1350 4531 L 494 4531 L 494 4863 L 1947 4863 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-5" d="M 1125 4666 L 1125 2931 L 628 2931 L 628 4666 L 1125 4666 z M 2316 4666 L 2316 2931 L 1819 2931 L 1819 4666 L 2316 4666 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-1e" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z M 678 2363 Q 678 2538 798 2658 Q 919 2778 1094 2778 Q 1269 2778 1389 2656 Q 1509 2534 1509 2363 Q 1509 2188 1389 2067 Q 1269 1947 1094 1947 Q 919 1947 798 2067 Q 678 2188 678 2363 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-b" d="M 2041 -997 Q 1281 -656 893 83 Q 506 822 506 1931 Q 506 3044 893 3783 Q 1281 4522 2041 4863 L 2041 4556 Q 1559 4225 1350 3623 Q 1141 3022 1141 1931 Q 1141 844 1350 242 Q 1559 -359 2041 -691 L 2041 -997 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-c" d="M 453 -997 L 453 -691 Q 934 -359 1145 242 Q 1356 844 1356 1931 Q 1356 3022 1145 3623 Q 934 4225 453 4556 L 453 4863 Q 1216 4522 1603 3783 Q 1991 3044 1991 1931 Q 1991 822 1603 83 Q 1216 -656 453 -997 z " transform="scale(0.015625)"/> <path id="f6b97e1-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f6b97e1-DejaVuSerif-46"/> <use xlink:href="#f6b97e1-DejaVuSerif-4b" transform="translate(56 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(120.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(180.03125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(227.828125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-49" transform="translate(259.609375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(296.625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(344.421875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-56" transform="translate(404.046875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(455.359375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3e" transform="translate(514.546875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-1b" transform="translate(553.5625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-40" transform="translate(617.1875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(656.203125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-20" transform="translate(687.984375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(771.78125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-5" transform="translate(803.5625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-26" transform="translate(849.5625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(926.078125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(958.0625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-52" transform="translate(1017.6875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-5" transform="translate(1077.890625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-1e" transform="translate(1123.890625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(1157.578125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(1189.359375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(1221.140625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-56" transform="translate(1252.921875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(1304.234375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-5d" transform="translate(1336.21875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(1388.90625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-52" transform="translate(1448.09375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-49" transform="translate(1508.296875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-b" transform="translate(1545.3125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-49" transform="translate(1584.328125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(1621.34375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(1669.140625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-56" transform="translate(1728.765625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(1780.078125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-c" transform="translate(1839.265625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(1878.28125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-59" transform="translate(1910.0625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(1966.5625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4f" transform="translate(2026.1875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(2058.171875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(2117.359375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-1b" transform="translate(2149.140625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-1d" transform="translate(2212.765625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(2246.453125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4f" transform="translate(2278.234375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(2310.21875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(2369.40625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-46" transform="translate(2401.1875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(2457.1875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4f" transform="translate(2516.375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4f" transform="translate(2548.359375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(2580.34375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(2639.53125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-47" transform="translate(2671.3125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-52" transform="translate(2735.328125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-53" transform="translate(2795.53125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-52" transform="translate(2859.546875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(2919.75 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(2951.53125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4f" transform="translate(2983.515625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(3015.5 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-57" transform="translate(3047.28125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(3087.46875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(3146.65625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-50" transform="translate(3194.453125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4c" transform="translate(3289.28125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-51" transform="translate(3321.265625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(3385.671875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-57" transform="translate(3445.296875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-52" transform="translate(3485.484375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-55" transform="translate(3545.6875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-48" transform="translate(3593.484375 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(3652.671875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-59" transform="translate(3684.453125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-44" transform="translate(3740.953125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4f" transform="translate(3800.578125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-4a" transform="translate(3832.5625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-52" transform="translate(3896.578125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-51" transform="translate(3956.78125 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-52" transform="translate(4021.1875 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-3" transform="translate(4081.390625 0)"/> <use xlink:href="#f6b97e1-DejaVuSerif-13" transform="translate(4113.171875 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f6b97e1-p3f7e91fb9b"> <rect x="5.76" y="5.76" width="554.4" height="216.216"/> </clipPath> </defs> </svg></figure>

Due grandezze diverse da non confondere:
- la **lunghezza** della stringa è il numero di caratteri prima del primo `'\0'` (4 nella figura);
- la **dimensione** dell'array, quella che dà `sizeof`, è il numero di celle riservate (8 nella figura), terminatore e celle inutilizzate compresi.

Esempio: `"Ciao a tutti!"` ha 13 caratteri (contano anche i due spazi e il punto esclamativo), quindi occupa 14 celle. Controesempio: `char t[4] = {'C', 'i', 'a', 'o'};` contiene gli stessi caratteri di `"Ciao"` ma **non è una stringa**, perché non c'è spazio per `'\0'`.

## Concetti

### Dichiarazione e inizializzazione

(<span class="src">slide 9-13</span>) Le forme possibili, con cosa finisce in memoria:

```
char mia_stringa[] = "Ciao a tutti!";     14 celle: 13 caratteri + '\0' aggiunto dal compilatore
char mia_stringa[] = {'C','i','a','o',' ','a',' ','t','u','t','t','i','!','\0'};
                                          identico, ma il '\0' lo scrivi tu
char frase[20] = "Ciao a tutti!";         20 celle: 13 caratteri, poi '\0' fino in fondo
char t[] = {'C','i','a','o'};             4 celle, nessun '\0': array di char, NON stringa
char frase[];                             errore di compilazione: né dimensione né valore iniziale
```

La slide 9 riporta i codici ASCII delle 14 celle di `"Ciao a tutti!"`:

| C | i | a | o | ␣ | a | ␣ | t | u | t | t | i | ! | `\0` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 67 | 105 | 97 | 111 | 32 | 97 | 32 | 116 | 117 | 116 | 116 | 105 | 33 | 0 |

Il perché delle regole:
- con `"..."` la dimensione la conta il compilatore e il terminatore lo mette lui: è la forma da usare;
- con la lista `{...}` di caratteri il compilatore non sa che vuoi una stringa, quindi il `'\0'` va scritto a mano;
- con `char frase[20]` una delle 20 celle va riservata al terminatore, quindi ci stanno al massimo 19 caratteri. Le celle oltre il testo valgono 0 per la regola dell'inizializzazione parziale degli array ([Array](/uni/prog-1/array/));
- `char frase[];` non compila (gcc: "array size missing in 'frase'") perché il compilatore deve sapere quanta memoria riservare, e senza dimensione né valore iniziale non ha da dove ricavarla.

Verifica con un programma che stampa le celle una per una come interi:

```c
#include <stdio.h>

int main(void)
{
    char frase[10] = "Ciao";
    int i;

    for (i = 0; i < 10; i++)
        printf("%d ", frase[i]);
    printf("\n");
    frase[2] = '\0';
    printf("[%s]\n", frase);
    frase[2] = 'a';
    frase[4] = '!';
    printf("[%s]\n", frase);
    return 0;
}
```

Output (verificato):

```
67 105 97 111 0 0 0 0 0 0 
[Ci]
[Ciao!]
```

Le tre righe insegnano tre cose. La prima: dopo `"Ciao"` tutte le celle valgono 0. La seconda: scrivere `'\0'` in posizione 2 **tronca** la stringa a `"Ci"`, anche se `'a'` e `'o'` sono ancora in memoria. La terza: rimettendo `'a'` e sovrascrivendo il vecchio terminatore in posizione 4 con `'!'`, la stringa si allunga fino al prossimo 0, che è in posizione 5. La stringa è "fin dove arriva il primo 0", non "quanto è grande l'array".

### Stampa con `%s`

(<span class="src">slide 14-15</span>) Una stringa si stampa tutta con lo specificatore `%s` e il solo identificatore:

```
printf("%s", mia_stringa);
```

La domanda del prof: perché con le stringhe si può e con un array di `int` no? Perché `printf` riceve solo l'indirizzo della prima cella, e da lì deve capire dove fermarsi. Per una stringa la regola c'è: **stampa caratteri finché non incontra `'\0'`**. Per un array di `int` non esiste nessun valore che segni la fine, quindi `printf` non saprebbe quanti elementi stampare.

Conseguenza: se il `'\0'` manca, `%s` va avanti a leggere la memoria dopo l'array finché trova per caso un byte 0. È comportamento indefinito, come un indice fuori range.

### Lettura con `scanf` e assegnazione

(<span class="src">slide 17</span>) Ricapitolando la slide:

```
char parola[20];
scanf("%s", parola);        NIENTE &: parola è già un indirizzo
printf("%c", parola[0]);    un carattere della stringa
parola = "Hello World!";    ERRATO: non si assegna una stringa a un array
```

- **Perché niente `&`**: per un `int x` serve `&x` perché `scanf` vuole sapere *dove* scrivere. Il nome di un array, usato in un'espressione, vale già l'indirizzo della sua prima cella (lo stesso motivo per cui `printf("%d", voti)` stampava un indirizzo in [Array](/uni/prog-1/array/)). Il perché preciso è in [Puntatori](/uni/prog-1/puntatori/): l'identificatore di un array è un puntatore costante al primo elemento.
- **Cosa legge `%s`**: salta gli spazi bianchi iniziali, poi legge caratteri fino al primo spazio, tab o a capo, e aggiunge da sé il `'\0'`. Con input `Ciao mondo` in `parola` finisce solo `"Ciao"`.
- **Perché `parola = "..."` non compila**: è la regola degli array, che non si assegnano in blocco (gcc: "assignment to expression with array type"). L'uguale con le virgolette funziona solo nella **dichiarazione**, dove è un'inizializzazione. Dopo, una stringa si copia carattere per carattere (vedi Metodo) o con `strcpy` di `<string.h>`.

**Il limite di lunghezza** (<span class="src">slide 18</span>). Il programma della slide dichiara `char Stringa[] = "Ciao";` (5 celle) e poi fa `scanf("%s", Stringa)`. Il commento del prof: "problemi se lunghezza stringa aspettata > di quella dichiarata". Se l'utente scrive `Programmazione`, `scanf` scrive 15 byte in un array da 5: le celle in più finiscono sopra altre variabili. `scanf` non conosce la dimensione dell'array. Il rimedio è dirgliela nel formato, con la **larghezza massima**: `scanf("%4s", Stringa)` legge al massimo 4 caratteri e lascia la quinta cella al `'\0'`. In generale con `char s[N]` si scrive `%` seguito da $N - 1$.

### Librerie e limiti delle stringhe C

(<span class="src">slide 20-21</span>) Esistono funzioni di libreria per calcolare la lunghezza, concatenare, cercare un carattere o una sottostringa, convertire una stringa in numero (per esempio in `float`). Il prof le farà più avanti; per ora le operazioni si scrivono a mano con i cicli, ed è anche quello che chiedono gli esercizi d'esame.

La difficoltà di fondo è la **lunghezza fissa**: per concatenare due stringhe in una terza bisogna calcolare a mano quanto spazio serve e avere un array abbastanza grande. Il C++ offre la classe `string`, che gestisce la memoria da sola, ma nel corso non si usa (anche all'esame le stringhe sono `char nome[20]`).

## Metodo

Ogni esercizio sulle stringhe è uno scorrimento fino a `'\0'`. Lo schema base:

```
i = 0;
while (s[i] != '\0') {
    ...usa s[i]...
    i++;
}
alla fine i vale la lunghezza
```

`while (s[i])` è la stessa cosa scritta più corta: `'\0'` vale 0, cioè falso (così fa la slide 19).

**Lunghezza**: lo schema base, senza corpo. Il risultato è l'indice del terminatore.

**Copia `src` in `dst`**: si copia fino al terminatore e **poi si copia anche lui**.
```
i = 0;
while (src[i] != '\0' && i < MAX - 1) {
    dst[i] = src[i];
    i++;
}
dst[i] = '\0';
```
Il controllo `i < MAX - 1` lascia sempre una cella libera per `'\0'`.

**Concatenazione**: si trova la fine della prima (lunghezza), poi si copia la seconda da lì in avanti, poi `'\0'`.

**Confronto alfabetico** (quello che fa `strcmp`): si avanza finché i caratteri sono uguali e la prima non è finita; al primo carattere diverso decide chi ha il codice ASCII più piccolo.
```
i = 0;
while (s1[i] != '\0' && s1[i] == s2[i])
    i++;
s1[i] == s2[i]  ->  uguali (sono finite insieme)
s1[i] <  s2[i]  ->  s1 viene prima
s1[i] >  s2[i]  ->  s2 viene prima
```
Se una stringa è il prefisso dell'altra (`"mar"` e `"mare"`), alla posizione 3 si confronta `'\0'` (0) con `'e'` (101): la più corta viene prima, come nel dizionario. Basta controllare la fine di `s1`: se `s2` finisce prima, `s2[i]` è `'\0'` e diverso da `s1[i]`, quindi il ciclo si ferma lo stesso.

**Maiuscolo e minuscolo**: le lettere sono consecutive nella tabella ASCII e le maiuscole stanno 32 posizioni prima delle minuscole, quindi per una minuscola `c` la maiuscola è `c - 'a' + 'A'` (o `c - ('a' - 'A')`, come nella slide 36 del deck 4.3). Prima si controlla che sia davvero una minuscola: `c >= 'a' && c <= 'z'`.

**Inversione e palindromo**: due indici, uno dall'inizio e uno dall'ultimo carattere (lunghezza meno 1), che si avvicinano finché `sx < dx`.

**Tracciare un programma con stringhe**: si scrive la stringa in caselle con gli indici sopra, terminatore compreso, e si aggiorna a ogni assegnazione. Dopo ogni modifica ci si chiede dove sta il **primo** `'\0'`: è lì che `%s` si ferma.

## Esempi svolti a lezione

### Inizializzazione e stampa

(<span class="src">slide 16</span>) Il programma del prof dichiara tre array di `char` in tre modi e li stampa intero e cella per cella. Il commento della slide segna "Errore!" sulla stampa di `stringa3` con `%s`, e ha ragione: `stringa3` è inizializzata con 4 caratteri e nessun `'\0'`, quindi `%s` legge oltre la fine. Lo stesso programma stampa anche `stringa1[14]`, che è **fuori dall'array**: `"Ciao a Tutti!"` occupa le celle da 0 a 13. Versione corretta, con le stesse idee:

```c
#include <stdio.h>

int main(void)
{
    char stringa1[] = "Ciao a Tutti!";
    char stringa2[6] = "hello";
    char stringa3[] = {'C', 'i', 'a', 'o'};
    int i;

    printf("stringa1=%s\n", stringa1);
    printf("stringa1[0]=%c\n", stringa1[0]);
    printf("stringa1[3]=%c\n", stringa1[3]);
    printf("stringa1[12]=%c\n", stringa1[12]);
    printf("stringa1[13]=%d\n", stringa1[13]);
    printf("stringa2=%s\n", stringa2);
    printf("stringa2[5]=%d\n", stringa2[5]);
    for (i = 0; i < 4; i++)
        printf("stringa3[%d]=%c\n", i, stringa3[i]);
    printf("sizeof: %zu %zu %zu\n", sizeof(stringa1), sizeof(stringa2), sizeof(stringa3));
    return 0;
}
```

Output (verificato):

```
stringa1=Ciao a Tutti!
stringa1[0]=C
stringa1[3]=o
stringa1[12]=!
stringa1[13]=0
stringa2=hello
stringa2[5]=0
stringa3[0]=C
stringa3[1]=i
stringa3[2]=a
stringa3[3]=o
sizeof: 14 6 4
```

Cosa guardare:
- `stringa1[13]` stampato con `%d` dà 0: è il terminatore, e con `%c` non si vedrebbe niente;
- `stringa2[6]` per `"hello"` è la dimensione giusta al byte: 5 caratteri più `'\0'`. Con `stringa2[5]` il C lo permette ancora (gcc recenti avvisano che il terminatore viene scartato) e si ottiene un array **senza** `'\0'`: lo stesso errore di `stringa3`;
- `stringa3` si stampa solo carattere per carattere, con un ciclo che conosce la lunghezza 4;
- `sizeof` conta le celle: 14, 6, 4.

### Leggere una stringa e calcolarne la lunghezza

(<span class="src">slide 19</span>) Il programma legge una parola, ne conta i caratteri con `while (Stringa[i]) i++;` e poi verifica la lettura stampando un carattere per riga. Versione con il limite di lettura e il controllo di `scanf`:

```c
#include <stdio.h>

int main(void)
{
    char stringa[20];
    int i = 0;
    int j;

    if (scanf("%19s", stringa) != 1) {
        printf("lettura fallita\n");
        return 1;
    }
    while (stringa[i] != '\0')
        i++;
    if (i > 0)
        printf("La lunghezza della stringa e': %d\n", i);
    else
        printf("Lunghezza nulla\n");
    for (j = 0; j < i; j++)
        printf("stringa[%d]= %c\n", j, stringa[j]);
    return 0;
}
```

Con input `Ciao mondo` stampa (verificato):

```
La lunghezza della stringa e': 4
stringa[0]= C
stringa[1]= i
stringa[2]= a
stringa[3]= o
```

Il tracing del ciclo della lunghezza:

| `i` | `stringa[i]` | `!= '\0'`? | azione |
| --- | --- | --- | --- |
| 0 | `'C'` | sì | `i` diventa 1 |
| 1 | `'i'` | sì | `i` diventa 2 |
| 2 | `'a'` | sì | `i` diventa 3 |
| 3 | `'o'` | sì | `i` diventa 4 |
| 4 | `'\0'` | no | esce, lunghezza 4 |

Due osservazioni. `mondo` non entra perché `%s` si ferma allo spazio: resta nel buffer di input per la prossima lettura. Il ramo "Lunghezza nulla" del prof non si raggiunge mai con `scanf("%s")`, che salta gli spazi e aspetta almeno un carattere; servirebbe con una stringa costruita in altro modo.

## Esercizi tipo esame

**Esercizio 1.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char a[] = "esame";
    char b[10] = "esame";
    char c[] = {'e', 's'};

    printf("%zu %zu %zu\n", sizeof(a), sizeof(b), sizeof(c));
    return 0;
}
```

> [!example]- Soluzione
> Si riconosce dalla domanda su `sizeof`: conta le celle dell'array, non i caratteri.
> - `a`: dimensione dedotta da `"esame"`, 5 caratteri più `'\0'`, quindi 6;
> - `b`: dimensione scritta, 10, indipendentemente dal contenuto;
> - `c`: dimensione dedotta dalla lista, 2 caratteri e nessun terminatore aggiunto, quindi 2.
>
> Output: `6 10 2` (verificato). Controllo: la lunghezza della stringa in `a` e `b` è 5 in entrambi i casi, la dimensione no.

**Esercizio 2.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "Programma";
    int i = 0;
    int n = 0;

    while (s[i] != '\0') {
        if (s[i] == 'r' || s[i] == 'a')
            n++;
        i++;
    }
    s[4] = '\0';
    printf("%d %d %s\n", i, n, s);
    return 0;
}
```

> [!example]- Soluzione
> Si scrive la stringa con gli indici:
>
> | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | P | r | o | g | r | a | m | m | a | `\0` |
>
> Il ciclo conta le `'r'` (indici 1 e 4) e le `'a'` (indici 5 e 8): `n` vale 4. Esce quando `s[i]` è il terminatore, quindi `i` vale 9, la lunghezza. Poi `s[4] = '\0'` mette un terminatore al posto della seconda `r`: `%s` si ferma lì e stampa le celle 0-3.
>
> Output: `9 4 Prog` (verificato).

**Esercizio 3.** Scrivi l'output esatto.

```c
#include <stdio.h>

int main(void)
{
    char s[] = "ciao mondo";
    int i;

    for (i = 0; s[i] != '\0'; i += 2)
        if (s[i] >= 'a' && s[i] <= 'z')
            s[i] = s[i] - 'a' + 'A';
    printf("%s\n", s);
    printf("%c%c\n", s[3] + 1, s[7] - 32);
    return 0;
}
```

> [!example]- Soluzione
> Indici: `c`0 `i`1 `a`2 `o`3, spazio in 4, `m`5 `o`6 `n`7 `d`8 `o`9, terminatore in 10. Il ciclo visita solo gli indici pari, finché la cella non è il terminatore:
>
> | `i` | `s[i]` | minuscola? | diventa |
> | --- | --- | --- | --- |
> | 0 | `c` | sì | `C` |
> | 2 | `a` | sì | `A` |
> | 4 | spazio | no | resta |
> | 6 | `o` | sì | `O` |
> | 8 | `d` | sì | `D` |
> | 10 | `'\0'` | | esce |
>
> Prima riga: `CiAo mOnDo`. Poi `s[3]` è `'o'` (indice dispari, non toccato) e `'o' + 1` è `'p'`; `s[7]` è `'n'` e `'n' - 32` è `'N'` (le maiuscole stanno 32 codici prima). Seconda riga: `pN` (verificato).
>
> Il ciclo si ferma bene solo perché il terminatore sta in una posizione **pari**. Con `"ciao, mondo"` (11 caratteri, terminatore in 11) il passo 2 salterebbe il `'\0'` e leggerebbe `s[12]`, fuori dall'array. Con un passo diverso da 1 la condizione sicura è `i < lunghezza`, calcolata prima.

**Esercizio 4.** Senza usare librerie, costruisci in `completo` la stringa `"Pietro Marchesi"` a partire da `char nome[] = "Pietro"` e `char cognome[] = "Marchesi"`, e stampala con la sua lunghezza.

> [!example]- Soluzione
> È una concatenazione: copia di `nome`, uno spazio, copia di `cognome`, terminatore. Un solo indice `i` scorre `completo`, mentre `j` riparte da 0 per ciascuna sorgente.
>
> ```c
> #include <stdio.h>
>
> #define MAX 50
>
> int main(void)
> {
>     char nome[] = "Pietro";
>     char cognome[] = "Marchesi";
>     char completo[MAX];
>     int i = 0;
>     int j = 0;
>
>     while (nome[j] != '\0' && i < MAX - 1) {
>         completo[i] = nome[j];
>         i++;
>         j++;
>     }
>     if (i < MAX - 1) {
>         completo[i] = ' ';
>         i++;
>     }
>     j = 0;
>     while (cognome[j] != '\0' && i < MAX - 1) {
>         completo[i] = cognome[j];
>         i++;
>         j++;
>     }
>     completo[i] = '\0';
>     printf("%s (%d caratteri)\n", completo, i);
>     return 0;
> }
> ```
>
> Stampa `Pietro Marchesi (15 caratteri)` (verificato). Controllo: $6 + 1 + 8 = 15$. L'ultima assegnazione `completo[i] = '\0'` è quella che si dimentica: senza, `completo` (array locale non inizializzato) non avrebbe terminatore e `%s` stamperebbe spazzatura.

**Esercizio 5.** Leggi due parole (al massimo 29 caratteri) e stampa se sono uguali o quale viene prima in ordine alfabetico, senza `strcmp`.

> [!example]- Soluzione
> Confronto carattere per carattere (vedi Metodo): ci si ferma alla prima differenza o alla fine di `s1`.
>
> ```c
> #include <stdio.h>
>
> #define MAX 30
>
> int main(void)
> {
>     char s1[MAX];
>     char s2[MAX];
>     int i = 0;
>
>     if (scanf("%29s %29s", s1, s2) != 2) {
>         printf("input non valido\n");
>         return 1;
>     }
>     while (s1[i] != '\0' && s1[i] == s2[i])
>         i++;
>     if (s1[i] == s2[i])
>         printf("uguali\n");
>     else if (s1[i] < s2[i])
>         printf("%s viene prima di %s\n", s1, s2);
>     else
>         printf("%s viene prima di %s\n", s2, s1);
>     return 0;
> }
> ```
>
> Prove (verificate):
>
> | input | si ferma a `i` | confronto | stampa |
> | --- | --- | --- | --- |
> | `casa cassa` | 3 | `'a'` (97) < `'s'` (115) | `casa viene prima di cassa` |
> | `casa casa` | 4 | `'\0'` uguale a `'\0'` | `uguali` |
> | `mare mar` | 3 | `'e'` (101) > `'\0'` (0) | `mar viene prima di mare` |
> | `Zaino abaco` | 0 | `'Z'` (90) < `'a'` (97) | `Zaino viene prima di abaco` |
>
> L'ultima riga è il trabocchetto: l'ordine è quello dei **codici ASCII**, e tutte le maiuscole (65-90) vengono prima di tutte le minuscole (97-122). Per un ordine "da dizionario" si confrontano le lettere dopo averle portate tutte in minuscolo.

**Esercizio 6.** (Livello 30) Leggi una parola e stampa se è palindroma (si legge uguale nei due versi), senza copiarla in un altro array.

> [!example]- Soluzione
> Si riconosce dal "nei due versi": due indici che partono dagli estremi e si avvicinano. Il primo passo è trovare l'ultimo carattere, cioè lunghezza meno 1.
>
> ```c
> #include <stdio.h>
>
> #define MAX 50
>
> int main(void)
> {
>     char s[MAX];
>     int sx = 0;
>     int dx = 0;
>
>     if (scanf("%49s", s) != 1) {
>         printf("input non valido\n");
>         return 1;
>     }
>     while (s[dx] != '\0')
>         dx++;
>     dx--;
>     while (sx < dx && s[sx] == s[dx]) {
>         sx++;
>         dx--;
>     }
>     if (sx >= dx)
>         printf("%s e' palindroma\n", s);
>     else
>         printf("%s non e' palindroma\n", s);
>     return 0;
> }
> ```
>
> Tracing con `radar` (lunghezza 5, quindi `dx` parte da 4):
>
> | `sx` | `dx` | `s[sx]` | `s[dx]` | `sx < dx` e uguali? |
> | --- | --- | --- | --- | --- |
> | 0 | 4 | r | r | sì |
> | 1 | 3 | a | a | sì |
> | 2 | 2 | d | d | no, `sx < dx` è falso |
>
> Il ciclo esce con `sx` uguale a `dx`: tutte le coppie sono state confrontate, è palindroma. Con `ciao` esce subito con `sx` 0 e `dx` 3 perché `c` e `o` differiscono, e `sx < dx` dice "non palindroma". Output verificati: `anna e' palindroma`, `radar e' palindroma`, `ciao non e' palindroma`, `x e' palindroma`. Il test finale è `sx >= dx` e non "il ciclo è finito": il ciclo finisce in entrambi i casi, conta il **motivo**.

**Esercizio 7.** Vero o falso?

- a) `char s[5] = "ciao";` è corretto e `s` contiene una stringa.
- b) `char s[4] = "ciao";` contiene una stringa.
- c) Con `char nome[20];` la lettura corretta è `scanf("%s", &nome);`.
- d) `printf("%s", s)` stampa tutte le celle dell'array `s`.
- e) Dopo `char s[] = "abc";` l'istruzione `s = "xyz";` copia `"xyz"` in `s`.
- f) `'a'` e `"a"` occupano la stessa memoria.

> [!example]- Soluzione
> - a) **Vero**. 4 caratteri più `'\0'`: 5 celle, esatte.
> - b) **Falso**. Il C accetta l'inizializzazione (gcc 16 avvisa) ma scarta il terminatore: è un array di 4 `char` senza `'\0'`, che `%s` non sa dove fermare.
> - c) **Falso**. `nome` è già l'indirizzo della prima cella: si scrive `scanf("%19s", nome)`. Con `&nome` il valore numerico è lo stesso ma il tipo è "puntatore ad array di 20 `char`", e gcc con `-Wall` avvisa.
> - d) **Falso**. Stampa fino al primo `'\0'`, non fino alla fine dell'array.
> - e) **Falso**. Non compila: un array non si assegna. Si copia con un ciclo o con `strcpy`.
> - f) **Falso**. `'a'` è un carattere (un intero, 97); `"a"` è una stringa di due celle, `'a'` e `'\0'`.

## Errori tipici

- Dimenticare la cella del terminatore: `char s[4] = "ciao"` o `char nome[5]` per un nome di 5 lettere. Per $n$ caratteri servono $n + 1$ celle.
- Costruire una stringa carattere per carattere (copia, concatenazione, inversione) e non scrivere `'\0'` alla fine.
- Confondere lunghezza e `sizeof`: il primo conta i caratteri prima di `'\0'`, il secondo le celle dell'array.
- `scanf("%s", &nome)` con la `&`, oppure `scanf("%s", nome)` senza larghezza massima: con un input lungo si scrive fuori dall'array (slide 18).
- Aspettarsi che `%s` legga una frase intera: si ferma al primo spazio.
- `s = "nuovo testo";` fuori dalla dichiarazione: non compila. E `s1 == s2` per confrontare due stringhe: confronta gli indirizzi, non i caratteri.
- Confondere `'a'` (carattere, apici singoli) e `"a"` (stringa, doppi apici), e scrivere `'\0'` come `'0'` (il carattere cifra zero, codice 48) o come `"\0"`.
- Ordinare con i codici ASCII e stupirsi che `"Zaino"` venga prima di `"abaco"`.
- Scorrere una stringa con passo 2 e condizione `s[i] != '\0'`: il terminatore può stare in una posizione che il ciclo salta (Esercizio 3).

## Domande

- Come si rappresenta una stringa in C? A cosa serve `'\0'`?

- Quante celle servono per memorizzare una stringa di $n$ caratteri, e perché?

- Cosa contiene in memoria `char frase[20] = "Ciao";`? Quanto valgono la lunghezza e `sizeof(frase)`?

- Che differenza c'è fra `char s[] = "Ciao";` e `char s[] = {'C', 'i', 'a', 'o'};`?

- Perché `char frase[];` non compila?

- Perché `printf("%s", s)` può stampare una stringa intera e non esiste un equivalente per un array di `int`?

- Perché in `scanf("%s", parola)` non si mette `&`? Cosa legge esattamente `%s`?

- Qual è il rischio di `scanf("%s", s)` e come si evita?

- Perché `parola = "Hello";` è un errore? Come si copia una stringa?

- Come si trasforma una lettera minuscola nella maiuscola sfruttando la tabella ASCII?

- In un confronto carattere per carattere, perché `"mar"` viene prima di `"mare"` e `"Zaino"` prima di `"abaco"`?

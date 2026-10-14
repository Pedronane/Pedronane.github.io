---
title: Rappresentazione dell'informazione
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
ordine: 13
---

Argomento di [Programmazione 1](/uni/prog-1/). Fatto a lezione a ottobre, due deck che si leggono insieme. Deck 4.3: <span class="src">slide 2-11</span> (informazione, dato, codifica), <span class="src">slide 12-24</span> (interi positivi, modulo e segno, complemento a 2), <span class="src">slide 25-32</span> (virgola fissa e mobile), <span class="src">slide 33-36</span> (caratteri e ASCII). Deck 4.4: <span class="src">slide 3-12</span> (basi 10, 2, 8, 16), <span class="src">slide 13-47</span> (conversioni con l'algoritmo dei resti e con i pesi), <span class="src">slide 48-52</span> (esadecimale e ottale passando dal binario), <span class="src">slide 53-58</span> (somma, prodotto, shift), <span class="src">slide 59-67</span> (quiz di conversione). Il programma decimale-binario era già in [Array](/uni/prog-1/array/); come il C usa queste codifiche nei tipi (`int`, `unsigned`, `float`) è in [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/).

> [!abstract] Per l'esame
> - **Saper enunciare**: differenza fra informazione, dato e rappresentazione; cos'è un sistema posizionale; perché un intero del calcolatore ha sempre un massimo; quali valori si codificano con $N$ bit senza segno, in modulo e segno e in complemento a 2; i due vantaggi del complemento a 2; virgola fissa contro virgola mobile; cos'è la tabella ASCII.
> - **Saper fare**: convertire fra basi 10, 2, 8 e 16 in tutte le direzioni mostrando ogni passaggio; sommare numeri scritti in basi diverse; leggere una sequenza di bit come naturale, in modulo e segno e in complemento a 2; cambiare segno e sottrarre in complemento a 2 riconoscendo l'overflow; dire quanti bit servono per $K$ valori; decodificare un numero in virgola fissa e nel formato a virgola mobile semplificato del prof.
> - **Dove esce**: è il tipo 4 della teorica in [Esami passati](/uni/prog-1/esami-passati/), 10 prove su 18: «`(2B)₁₆ + (73)₈` con tutti i passaggi», «un binario letto come naturale, con segno e in CA2», «sottrazione in CA2», «301 può essere un numero in base 3?», «quanti bit servono per 300 valori». Sono punti meccanici: si perdono solo saltando passaggi.

Il filo dei due deck:

```
informazione     il significato (154, +26, 9.625, una temperatura)
   |  codifica  ↓        ↑  decodifica
dato             i bit in memoria (10011010): senza contesto non vogliono dire niente
   |
tipi semplici    booleani, interi positivi, interi relativi, frazionari, caratteri
                 la codifica la fissa l'hardware
   |
interi >= 0      binario posizionale; con 8 bit da 0 a 255
interi relativi  modulo e segno (doppio zero), poi complemento a 2 (quello vero)
frazionari       virgola fissa, virgola mobile (IEEE-754)
caratteri        tabella ASCII
   |
basi 2, 8, 16    conversioni: resti per andare, pesi per tornare,
                 gruppi di 3 o 4 bit fra 2, 8 e 16
   |
aritmetica       somma con riporto, prodotto per spostamenti, shift
```

## Definizioni

**Informazione, dato, rappresentazione** (<span class="src">slide 2-3</span>, <span class="src">8-11</span>). Le informazioni si memorizzano e si manipolano nel calcolatore sotto forma di **dati**, organizzati secondo opportune **rappresentazioni** (o **codifiche**). Andare dall'informazione al dato è la **codifica**; tornare dal dato all'informazione, usando la stessa rappresentazione, è la **decodifica**.

Il punto del prof: un dato da solo è "privo di senso". La sequenza di 16 bit `0001000011001100` (in esadecimale `10CC`) non vuol dire niente finché non si sa che rappresenta, per esempio, un numero frazionario con segno che indica la temperatura media su Marte. Lo stesso per un file `ldc.mp3` di 3.841.481 byte: sono milioni di valori come `3f-aa-cd-02...`, e diventano musica solo per un programma che conosce la codifica MP3. Esempio più vicino al C: il byte `01100001` è il numero 97 se lo leggi come intero, la lettera `'a'` se lo leggi come carattere.

**Tipi semplici e complessi** (<span class="src">slide 9-10</span>). I tipi che il calcolatore manipola direttamente (**tipi di dato elementari**) sono pochi: valori di verità, interi positivi o negativi, numeri frazionari, caratteri. La loro rappresentazione è **fissata dall'hardware**, e il programmatore può affidarsi al calcolatore per interpretarli. Le informazioni più complesse (un numero complesso, un testo, una rubrica, un albero genealogico, un disegno, un filmato, un suono) usano codifiche di **livello software**, costruite sopra i tipi semplici.

**Sistema posizionale** (<span class="src">slide 7-12</span>). In un sistema posizionale in base $b$:
- si usano $b$ cifre, da $0$ a $b - 1$;
- il valore di una cifra **dipende dalla posizione**: la cifra in posizione $k$ (contando da destra, da 0) vale cifra per $b^k$;
- le cifre diventano più significative andando verso sinistra.

In formula, il numero $c_{n-1} \ldots c_1 c_0$ in base $b$ vale

$$
c_{n-1} \cdot b^{n-1} + \ldots + c_1 \cdot b^1 + c_0 \cdot b^0
$$

| base | nome | cifre | pesi (da destra) |
| --- | --- | --- | --- |
| 10 | decimale | 0-9 | 1, 10, 100, 1000 |
| 2 | binario | 0, 1 | 1, 2, 4, 8, 16, 32, 64, 128 |
| 8 | ottale | 0-7 | 1, 8, 64, 512 |
| 16 | esadecimale | 0-9, A=10, B=11, C=12, D=13, E=14, F=15 | 1, 16, 256, 4096 |

Gli esempi delle slide, con i passaggi:

$$
1943_{10} = 1 \cdot 10^3 + 9 \cdot 10^2 + 4 \cdot 10^1 + 3 \cdot 10^0 = 1000 + 900 + 40 + 3
$$

$$
10011010_2 = 1 \cdot 2^7 + 0 \cdot 2^6 + 0 \cdot 2^5 + 1 \cdot 2^4 + 1 \cdot 2^3 + 0 \cdot 2^2 + 1 \cdot 2^1 + 0 \cdot 2^0 = 128 + 16 + 8 + 2 = 154_{10}
$$

$$
1372_8 = 1 \cdot 512 + 3 \cdot 64 + 7 \cdot 8 + 2 \cdot 1 = 512 + 192 + 56 + 2 = 762_{10}
$$

$$
3A1F_{16} = 3 \cdot 4096 + 10 \cdot 256 + 1 \cdot 16 + 15 \cdot 1 = 12288 + 2560 + 16 + 15 = 14879_{10}
$$

Un controesempio che esce all'esame: "301 può essere un numero in base 3?" No: in base 3 le cifre sono solo 0, 1 e 2, e la cifra 3 non esiste. Per lo stesso motivo `19` non è un numero ottale e `G` non è una cifra esadecimale.

**Contare nelle diverse basi** (<span class="src">slide 3-6</span>). Si conta allo stesso modo in ogni base: si incrementa la cifra delle unità, e quando supera $b - 1$ torna a 0 con un riporto sulla posizione dopo.

| dec | esa | ott | bin | | dec | esa | ott | bin |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | | 11 | B | 13 | 1011 |
| 1 | 1 | 1 | 1 | | 12 | C | 14 | 1100 |
| 2 | 2 | 2 | 10 | | 13 | D | 15 | 1101 |
| 3 | 3 | 3 | 11 | | 14 | E | 16 | 1110 |
| 4 | 4 | 4 | 100 | | 15 | F | 17 | 1111 |
| 5 | 5 | 5 | 101 | | 16 | 10 | 20 | 10000 |
| 6 | 6 | 6 | 110 | | 17 | 11 | 21 | 10001 |
| 7 | 7 | 7 | 111 | | 18 | 12 | 22 | 10010 |
| 8 | 8 | 10 | 1000 | | 19 | 13 | 23 | 10011 |
| 9 | 9 | 11 | 1001 | | 20 | 14 | 24 | 10100 |
| 10 | A | 12 | 1010 | | | | | |

Conviene saper scrivere a memoria la colonna dei primi 16 valori in binario a 4 bit: è la tabella che serve per le conversioni esadecimale-binario.

**Interi positivi** (<span class="src">slide 12</span>). Si rappresentano in binario con sequenze di bit, di solito multiple di 8: sequenze di **byte**. Con $N$ bit ci sono $2^N$ combinazioni, quindi si rappresentano i naturali da $0$ a $2^N - 1$:

| bit | combinazioni | intervallo senza segno |
| --- | --- | --- |
| 8 (1 byte) | $2^8 = 256$ | da 0 (`00000000`) a 255 (`11111111`) |
| 16 | $2^{16} = 65536$ | da 0 a 65535 |
| 32 | $2^{32}$ | da 0 a 4.294.967.295 |

La frase sottolineata dal prof: **gli interi come oggetti matematici non hanno un valore massimo, gli interi del calcolatore hanno sempre un valore massimo finito.** Superarlo è l'**overflow**.

**Modulo e segno** (<span class="src">slide 16</span>). Il modo più semplice per gli interi relativi: il bit più a sinistra è il **bit di segno** (0 positivo, 1 negativo), gli altri sono il modulo in binario. Con 8 bit: `00011010` è $+26$, `10011010` è $-26$. Due difetti: lo zero ha due codifiche (`00000000` è $+0$, `10000000` è $-0$), e la somma richiede un circuito che guardi i segni, perché sommare i bit "così come sono" dà risultati sbagliati.

**Complemento a 2 (CA2)** (<span class="src">slide 17-21</span>). Nei calcolatori il segno non si rappresenta esplicitamente: si usano le rappresentazioni in **complemento** (a uno e a due), meno intuitive ma con due vantaggi:
1. lo zero ha **una sola** codifica;
2. non serve un circuito apposta per il segno: **le addizioni in complemento a due servono anche per le sottrazioni**.

Le regole della slide 20-21:
- con $N$ bit si codificano i valori da $-2^{N-1}$ a $2^{N-1} - 1$;
- il bit più significativo (**MSB**) rappresenta il segno;
- per decodificare: se l'MSB è 0 si procede come per un naturale; se l'MSB è 1 si decodifica come naturale e poi si sottrae $2^N$;
- per **invertire** un numero (cambiargli segno) si invertono le singole cifre e poi si aggiunge uno.

La slide 20 dice "se il MSB è 1, si decodifica e poi si sottrae $2^{N-1}$". Va letta bene, perché le versioni corrette sono due e mescolarle dà un errore:
- si decodificano **tutti gli $N$ bit** come naturale e si sottrae $2^N$: `1111` vale 15, e $15 - 16 = -1$;
- si decodificano **solo gli altri $N - 1$ bit** e si sottrae $2^{N-1}$: `111` vale 7, e $7 - 8 = -1$.

Decodificare tutti gli $N$ bit e sottrarre $2^{N-1}$ darebbe $15 - 8 = 7$, sbagliato. La seconda versione si ricorda così: **l'MSB pesa $-2^{N-1}$ invece di $+2^{N-1}$**, gli altri bit pesano come al solito. `1111` vale $-8 + 4 + 2 + 1 = -1$.

L'intuizione, con 4 bit: i 16 codici si dispongono in cerchio, e aggiungere 1 è un passo in senso orario. Da `0000` andando avanti si contano i positivi fino a `0111` ($+7$); da `0000` andando indietro si contano i negativi: `1111` è $-1$, `1110` è $-2$, fino a `1000` ($-8$). Il CA2 è proprio questo: un numero negativo $-x$ è il codice che si trova $x$ passi prima di zero, cioè il naturale $2^N - x$.

<figure class="fig"><svg role="img" aria-label="Ruota del complemento a 2" xmlns:xlink="http://www.w3.org/1999/xlink" width="366.336pt" height="366.336pt" viewBox="0 0 366.336 366.336" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <style type="text/css">*{stroke-linejoin: round; stroke-linecap: butt}</style> </defs> <g id="f89-figure_1"> <g id="f89-patch_1"> <path d="M 0 366.336 L 366.336 366.336 L 366.336 -0 L 0 -0 L 0 366.336 z " style="fill: none"/> </g> <g id="f89-axes_1"> <g id="f89-patch_2"> <path d="M 183.168 265.9584 C 205.124271 265.9584 226.184225 257.235081 241.709653 241.709653 C 257.235081 226.184225 265.9584 205.124271 265.9584 183.168 C 265.9584 161.211729 257.235081 140.151775 241.709653 124.626347 C 226.184225 109.100919 205.124271 100.3776 183.168 100.3776 C 161.211729 100.3776 140.151775 109.100919 124.626347 124.626347 C 109.100919 140.151775 100.3776 161.211729 100.3776 183.168 C 100.3776 205.124271 109.100919 226.184225 124.626347 241.709653 C 140.151775 257.235081 161.211729 265.9584 183.168 265.9584 L 183.168 265.9584 z " clip-path="url(#f89-pc2acd0cd02)" style="fill: none; stroke-dasharray: 1.2,1.98; stroke-dashoffset: 0; stroke: var(--fig-faint); stroke-width: 1.2; stroke-linejoin: miter"/> </g> <g id="f89-line2d_1"> <path d="M 194.243387 238.84773 L 215.471212 345.567211 " clip-path="url(#f89-pc2acd0cd02)" style="fill: none; stroke-dasharray: 8.14,3.52; stroke-dashoffset: 0; stroke: var(--fig-accent); stroke-width: 2.2"/> </g> <g id="f89-text_1"> <!-- 0000 --> <g style="fill: var(--fig-ink)" transform="translate(169.923313 70.59195) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSansMono-13" d="M 1509 2344 Q 1509 2516 1629 2641 Q 1750 2766 1919 2766 Q 2094 2766 2219 2641 Q 2344 2516 2344 2344 Q 2344 2169 2220 2047 Q 2097 1925 1919 1925 Q 1744 1925 1626 2044 Q 1509 2163 1509 2344 z M 1925 4250 Q 1484 4250 1267 3775 Q 1050 3300 1050 2328 Q 1050 1359 1267 884 Q 1484 409 1925 409 Q 2369 409 2586 884 Q 2803 1359 2803 2328 Q 2803 3300 2586 3775 Q 2369 4250 1925 4250 z M 1925 4750 Q 2672 4750 3055 4137 Q 3438 3525 3438 2328 Q 3438 1134 3055 521 Q 2672 -91 1925 -91 Q 1178 -91 797 521 Q 416 1134 416 2328 Q 416 3525 797 4137 Q 1178 4750 1925 4750 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_2"> <!-- 0 --> <g style="fill: var(--fig-steel)" transform="translate(179.668625 86.203854) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-13" d="M 2034 219 Q 2513 219 2750 744 Q 2988 1269 2988 2328 Q 2988 3391 2750 3916 Q 2513 4441 2034 4441 Q 1556 4441 1318 3916 Q 1081 3391 1081 2328 Q 1081 1269 1318 744 Q 1556 219 2034 219 z M 2034 -91 Q 1275 -91 848 546 Q 422 1184 422 2328 Q 422 3475 848 4112 Q 1275 4750 2034 4750 Q 2797 4750 3222 4112 Q 3647 3475 3647 2328 Q 3647 1184 3222 546 Q 2797 -91 2034 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-13"/> </g> </g> <g id="f89-text_3"> <!-- 0 --> <g style="fill: var(--fig-faint)" transform="translate(180.304875 36.483171) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-13"/> </g> </g> <g id="f89-text_4"> <!-- 0001 --> <g style="fill: var(--fig-ink)" transform="translate(211.563189 78.874636) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSansMono-14" d="M 844 531 L 1825 531 L 1825 4097 L 769 3859 L 769 4434 L 1819 4666 L 2450 4666 L 2450 531 L 3419 531 L 3419 0 L 844 0 L 844 531 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_5"> <!-- +1 --> <g style="fill: var(--fig-steel)" transform="translate(216.699673 94.48654) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-e" d="M 2931 4013 L 2931 2259 L 4684 2259 L 4684 1753 L 2931 1753 L 2931 0 L 2431 0 L 2431 1753 L 678 1753 L 678 2259 L 2431 2259 L 2431 4013 L 2931 4013 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-14" d="M 909 0 L 909 331 L 1722 331 L 1722 4213 L 781 3603 L 781 4013 L 1919 4750 L 2350 4750 L 2350 331 L 3163 331 L 3163 0 L 909 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-14" transform="translate(83.796875 0)"/> </g> </g> <g id="f89-text_6"> <!-- 1 --> <g style="fill: var(--fig-faint)" transform="translate(237.333401 47.82685) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-14"/> </g> </g> <g id="f89-text_7"> <!-- 0010 --> <g style="fill: var(--fig-ink)" transform="translate(246.863771 102.461731) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_8"> <!-- +2 --> <g style="fill: var(--fig-steel)" transform="translate(252.000255 118.073635) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-15" d="M 819 3553 L 469 3553 L 469 4384 Q 803 4563 1142 4656 Q 1481 4750 1806 4750 Q 2534 4750 2956 4397 Q 3378 4044 3378 3438 Q 3378 2753 2422 1800 Q 2347 1728 2309 1691 L 1131 513 L 3078 513 L 3078 1088 L 3444 1088 L 3444 0 L 434 0 L 434 341 L 1850 1753 Q 2319 2222 2519 2614 Q 2719 3006 2719 3438 Q 2719 3909 2473 4175 Q 2228 4441 1797 4441 Q 1350 4441 1106 4219 Q 863 3997 819 3553 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-15" transform="translate(83.796875 0)"/> </g> </g> <g id="f89-text_9"> <!-- 2 --> <g style="fill: var(--fig-faint)" transform="translate(285.679851 80.130915) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-15"/> </g> </g> <g id="f89-text_10"> <!-- 0011 --> <g style="fill: var(--fig-ink)" transform="translate(270.450866 137.762314) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_11"> <!-- +3 --> <g style="fill: var(--fig-steel)" transform="translate(275.587351 153.374218) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-16" d="M 622 4469 Q 988 4606 1323 4678 Q 1659 4750 1953 4750 Q 2638 4750 3022 4454 Q 3406 4159 3406 3634 Q 3406 3213 3140 2930 Q 2875 2647 2388 2547 Q 2963 2466 3280 2130 Q 3597 1794 3597 1259 Q 3597 606 3158 257 Q 2719 -91 1894 -91 Q 1528 -91 1179 -12 Q 831 66 488 225 L 488 1131 L 838 1131 Q 869 681 1141 450 Q 1413 219 1906 219 Q 2384 219 2661 495 Q 2938 772 2938 1253 Q 2938 1803 2653 2086 Q 2369 2369 1819 2369 L 1522 2369 L 1522 2688 L 1678 2688 Q 2225 2688 2498 2914 Q 2772 3141 2772 3597 Q 2772 4006 2547 4223 Q 2322 4441 1900 4441 Q 1478 4441 1245 4241 Q 1013 4041 972 3647 L 622 3647 L 622 4469 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-16" transform="translate(83.796875 0)"/> </g> </g> <g id="f89-text_12"> <!-- 3 --> <g style="fill: var(--fig-faint)" transform="translate(317.983916 128.477365) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-16"/> </g> </g> <g id="f89-text_13"> <!-- 0100 --> <g style="fill: var(--fig-ink)" transform="translate(278.733553 179.40219) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_14"> <!-- +4 --> <g style="fill: var(--fig-steel)" transform="translate(283.870037 195.014094) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-17" d="M 2234 1581 L 2234 4063 L 641 1581 L 2234 1581 z M 3609 0 L 1484 0 L 1484 331 L 2234 331 L 2234 1247 L 197 1247 L 197 1588 L 2241 4750 L 2859 4750 L 2859 1581 L 3750 1581 L 3750 1247 L 2859 1247 L 2859 331 L 3609 331 L 3609 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-17" transform="translate(83.796875 0)"/> </g> </g> <g id="f89-text_15"> <!-- 4 --> <g style="fill: var(--fig-faint)" transform="translate(329.327595 185.505891) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-17"/> </g> </g> <g id="f89-text_16"> <!-- 0101 --> <g style="fill: var(--fig-ink)" transform="translate(270.450866 221.042066) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_17"> <!-- +5 --> <g style="fill: var(--fig-steel)" transform="translate(275.587351 236.65397) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-18" d="M 3219 4666 L 3219 4153 L 1081 4153 L 1081 2816 Q 1244 2928 1461 2984 Q 1678 3041 1947 3041 Q 2703 3041 3140 2622 Q 3578 2203 3578 1478 Q 3578 738 3136 323 Q 2694 -91 1894 -91 Q 1572 -91 1234 -12 Q 897 66 544 225 L 544 1131 L 897 1131 Q 925 688 1179 453 Q 1434 219 1894 219 Q 2388 219 2653 544 Q 2919 869 2919 1478 Q 2919 2084 2655 2407 Q 2391 2731 1894 2731 Q 1613 2731 1398 2631 Q 1184 2531 1019 2322 L 750 2322 L 750 4666 L 3219 4666 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-18" transform="translate(83.796875 0)"/> </g> </g> <g id="f89-text_18"> <!-- 5 --> <g style="fill: var(--fig-faint)" transform="translate(317.983916 242.534417) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-18"/> </g> </g> <g id="f89-text_19"> <!-- 0110 --> <g style="fill: var(--fig-ink)" transform="translate(246.863771 256.342648) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_20"> <!-- +6 --> <g style="fill: var(--fig-steel)" transform="translate(252.000255 271.954552) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-19" d="M 2094 219 Q 2534 219 2771 542 Q 3009 866 3009 1472 Q 3009 2078 2771 2401 Q 2534 2725 2094 2725 Q 1647 2725 1412 2412 Q 1178 2100 1178 1509 Q 1178 888 1415 553 Q 1653 219 2094 219 z M 1075 2569 Q 1288 2803 1556 2918 Q 1825 3034 2163 3034 Q 2859 3034 3264 2615 Q 3669 2197 3669 1472 Q 3669 763 3233 336 Q 2797 -91 2069 -91 Q 1278 -91 853 498 Q 428 1088 428 2181 Q 428 3406 931 4078 Q 1434 4750 2350 4750 Q 2597 4750 2869 4703 Q 3141 4656 3425 4563 L 3425 3794 L 3072 3794 Q 3034 4109 2831 4275 Q 2628 4441 2284 4441 Q 1678 4441 1381 3981 Q 1084 3522 1075 2569 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-19" transform="translate(83.796875 0)"/> </g> </g> <g id="f89-text_21"> <!-- 6 --> <g style="fill: var(--fig-faint)" transform="translate(285.679851 290.880866) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-19"/> </g> </g> <g id="f89-text_22"> <!-- 0111 --> <g style="fill: var(--fig-ink)" transform="translate(211.563189 279.929744) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-13"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_23"> <!-- +7 --> <g style="fill: var(--fig-steel)" transform="translate(216.699673 295.541648) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-1a" d="M 3609 4347 L 1784 0 L 1319 0 L 3059 4153 L 903 4153 L 903 3578 L 538 3578 L 538 4666 L 3609 4666 L 3609 4347 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-1a" transform="translate(83.796875 0)"/> </g> </g> <g id="f89-text_24"> <!-- 7 --> <g style="fill: var(--fig-faint)" transform="translate(237.333401 323.184932) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-1a"/> </g> </g> <g id="f89-text_25"> <!-- 1000 --> <g style="fill: var(--fig-ink)" transform="translate(169.923313 288.21243) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_26"> <!-- -8 --> <g style="fill: var(--fig-accent)" transform="translate(177.809797 303.824334) scale(0.11 -0.11)"> <defs> <path id="f89-DejaVuSerif-10" d="M 281 1959 L 1881 1959 L 1881 1472 L 281 1472 L 281 1959 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-1b" d="M 2981 1275 Q 2981 1775 2732 2051 Q 2484 2328 2034 2328 Q 1584 2328 1336 2051 Q 1088 1775 1088 1275 Q 1088 772 1336 495 Q 1584 219 2034 219 Q 2484 219 2732 495 Q 2981 772 2981 1275 z M 2853 3541 Q 2853 3966 2637 4203 Q 2422 4441 2034 4441 Q 1650 4441 1433 4203 Q 1216 3966 1216 3541 Q 1216 3113 1433 2875 Q 1650 2638 2034 2638 Q 2422 2638 2637 2875 Q 2853 3113 2853 3541 z M 2516 2484 Q 3047 2413 3344 2092 Q 3641 1772 3641 1275 Q 3641 619 3225 264 Q 2809 -91 2034 -91 Q 1263 -91 845 264 Q 428 619 428 1275 Q 428 1772 725 2092 Q 1022 2413 1556 2484 Q 1084 2569 832 2842 Q 581 3116 581 3541 Q 581 4103 968 4426 Q 1356 4750 2034 4750 Q 2713 4750 3100 4426 Q 3488 4103 3488 3541 Q 3488 3116 3236 2842 Q 2984 2569 2516 2484 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-1b" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_27"> <!-- 8 --> <g style="fill: var(--fig-faint)" transform="translate(180.304875 334.528611) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-1b"/> </g> </g> <g id="f89-text_28"> <!-- 1001 --> <g style="fill: var(--fig-ink)" transform="translate(128.283436 279.929744) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_29"> <!-- -7 --> <g style="fill: var(--fig-accent)" transform="translate(136.169921 295.541648) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-1a" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_30"> <!-- 9 --> <g style="fill: var(--fig-faint)" transform="translate(123.276349 323.184932) scale(0.09 -0.09)"> <defs> <path id="f89-DejaVuSerif-1c" d="M 2994 2091 Q 2784 1856 2512 1740 Q 2241 1625 1900 1625 Q 1206 1625 804 2044 Q 403 2463 403 3188 Q 403 3897 839 4323 Q 1275 4750 2003 4750 Q 2794 4750 3217 4161 Q 3641 3572 3641 2478 Q 3641 1253 3137 581 Q 2634 -91 1722 -91 Q 1475 -91 1203 -44 Q 931 3 647 97 L 647 872 L 997 872 Q 1038 556 1241 387 Q 1444 219 1784 219 Q 2391 219 2687 676 Q 2984 1134 2994 2091 z M 1978 4441 Q 1534 4441 1298 4117 Q 1063 3794 1063 3188 Q 1063 2581 1298 2256 Q 1534 1931 1978 1931 Q 2422 1931 2658 2245 Q 2894 2559 2894 3150 Q 2894 3772 2656 4106 Q 2419 4441 1978 4441 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-1c"/> </g> </g> <g id="f89-text_31"> <!-- 1010 --> <g style="fill: var(--fig-ink)" transform="translate(92.982854 256.342648) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_32"> <!-- -6 --> <g style="fill: var(--fig-accent)" transform="translate(100.869338 271.954552) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-19" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_33"> <!-- 10 --> <g style="fill: var(--fig-faint)" transform="translate(72.066774 290.880866) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-14"/> <use xlink:href="#f89-DejaVuSerif-13" transform="translate(63.625 0)"/> </g> </g> <g id="f89-text_34"> <!-- 1011 --> <g style="fill: var(--fig-ink)" transform="translate(69.395759 221.042066) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_35"> <!-- -5 --> <g style="fill: var(--fig-accent)" transform="translate(77.282243 236.65397) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-18" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_36"> <!-- 11 --> <g style="fill: var(--fig-faint)" transform="translate(39.762709 242.534417) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-14"/> <use xlink:href="#f89-DejaVuSerif-14" transform="translate(63.625 0)"/> </g> </g> <g id="f89-text_37"> <!-- 1100 --> <g style="fill: var(--fig-ink)" transform="translate(61.113073 179.40219) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_38"> <!-- -4 --> <g style="fill: var(--fig-accent)" transform="translate(68.999557 195.014094) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-17" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_39"> <!-- 12 --> <g style="fill: var(--fig-faint)" transform="translate(28.41903 185.505891) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-14"/> <use xlink:href="#f89-DejaVuSerif-15" transform="translate(63.625 0)"/> </g> </g> <g id="f89-text_40"> <!-- 1101 --> <g style="fill: var(--fig-ink)" transform="translate(69.395759 137.762314) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_41"> <!-- -3 --> <g style="fill: var(--fig-accent)" transform="translate(77.282243 153.374218) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-16" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_42"> <!-- 13 --> <g style="fill: var(--fig-faint)" transform="translate(39.762709 128.477365) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-14"/> <use xlink:href="#f89-DejaVuSerif-16" transform="translate(63.625 0)"/> </g> </g> <g id="f89-text_43"> <!-- 1110 --> <g style="fill: var(--fig-ink)" transform="translate(92.982854 102.461731) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-13" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_44"> <!-- -2 --> <g style="fill: var(--fig-accent)" transform="translate(100.869338 118.073635) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-15" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_45"> <!-- 14 --> <g style="fill: var(--fig-faint)" transform="translate(72.066774 80.130915) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-14"/> <use xlink:href="#f89-DejaVuSerif-17" transform="translate(63.625 0)"/> </g> </g> <g id="f89-text_46"> <!-- 1111 --> <g style="fill: var(--fig-ink)" transform="translate(128.283436 78.874636) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSansMono-14"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(120.40625 0)"/> <use xlink:href="#f89-DejaVuSansMono-14" transform="translate(180.609375 0)"/> </g> </g> <g id="f89-text_47"> <!-- -1 --> <g style="fill: var(--fig-accent)" transform="translate(136.169921 94.48654) scale(0.11 -0.11)"> <use xlink:href="#f89-DejaVuSerif-10"/> <use xlink:href="#f89-DejaVuSerif-14" transform="translate(33.796875 0)"/> </g> </g> <g id="f89-text_48"> <!-- 15 --> <g style="fill: var(--fig-faint)" transform="translate(120.413224 47.82685) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-14"/> <use xlink:href="#f89-DejaVuSerif-18" transform="translate(63.625 0)"/> </g> </g> <g id="f89-text_49"> <!-- CA2 su 4 bit --> <g style="fill: var(--fig-ink)" transform="translate(145.773938 164.996696) scale(0.12 -0.12)"> <defs> <path id="f89-DejaVuSerif-26" d="M 4513 1234 Q 4306 581 3820 245 Q 3334 -91 2591 -91 Q 2134 -91 1743 65 Q 1353 222 1050 525 Q 700 875 529 1320 Q 359 1766 359 2328 Q 359 3416 987 4083 Q 1616 4750 2644 4750 Q 3025 4750 3456 4650 Q 3888 4550 4384 4347 L 4384 3272 L 4031 3272 Q 3916 3859 3567 4137 Q 3219 4416 2591 4416 Q 1844 4416 1459 3886 Q 1075 3356 1075 2328 Q 1075 1303 1459 773 Q 1844 244 2591 244 Q 3113 244 3450 492 Q 3788 741 3938 1234 L 4513 1234 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-24" d="M 1281 1691 L 2994 1691 L 2138 3909 L 1281 1691 z M -38 0 L -38 331 L 372 331 L 2034 4666 L 2559 4666 L 4225 331 L 4684 331 L 4684 0 L 2988 0 L 2988 331 L 3506 331 L 3116 1356 L 1153 1356 L 763 331 L 1275 331 L 1275 0 L -38 0 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-3" transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-56" d="M 359 184 L 359 959 L 691 959 Q 703 588 923 403 Q 1144 219 1575 219 Q 1963 219 2166 364 Q 2369 509 2369 788 Q 2369 1006 2220 1140 Q 2072 1275 1594 1428 L 1178 1569 Q 750 1706 558 1912 Q 366 2119 366 2438 Q 366 2894 700 3153 Q 1034 3413 1625 3413 Q 1888 3413 2178 3344 Q 2469 3275 2778 3144 L 2778 2419 L 2447 2419 Q 2434 2741 2221 2922 Q 2009 3103 1644 3103 Q 1281 3103 1095 2975 Q 909 2847 909 2591 Q 909 2381 1050 2254 Q 1191 2128 1613 1997 L 2069 1856 Q 2541 1709 2748 1489 Q 2956 1269 2956 922 Q 2956 450 2595 179 Q 2234 -91 1600 -91 Q 1278 -91 972 -22 Q 666 47 359 184 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-58" d="M 2266 3322 L 3341 3322 L 3341 331 L 3884 331 L 3884 0 L 2766 0 L 2766 588 Q 2606 256 2353 82 Q 2100 -91 1766 -91 Q 1213 -91 952 223 Q 691 538 691 1209 L 691 2988 L 172 2988 L 172 3322 L 1269 3322 L 1269 1388 Q 1269 781 1417 556 Q 1566 331 1947 331 Q 2347 331 2556 625 Q 2766 919 2766 1478 L 2766 2988 L 2266 2988 L 2266 3322 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-45" d="M 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 0 L 184 0 L 184 331 L 738 331 z M 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 L 1313 1497 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-4c" d="M 622 4353 Q 622 4497 726 4603 Q 831 4709 978 4709 Q 1122 4709 1226 4603 Q 1331 4497 1331 4353 Q 1331 4206 1228 4103 Q 1125 4000 978 4000 Q 831 4000 726 4103 Q 622 4206 622 4353 z M 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 331 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-57" d="M 691 2988 L 184 2988 L 184 3322 L 691 3322 L 691 4353 L 1269 4353 L 1269 3322 L 2350 3322 L 2350 2988 L 1269 2988 L 1269 878 Q 1269 456 1350 337 Q 1431 219 1650 219 Q 1875 219 1978 351 Q 2081 484 2088 781 L 2522 781 Q 2497 328 2275 118 Q 2053 -91 1600 -91 Q 1103 -91 897 129 Q 691 350 691 878 L 691 2988 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-26"/> <use xlink:href="#f89-DejaVuSerif-24" transform="translate(76.515625 0)"/> <use xlink:href="#f89-DejaVuSerif-15" transform="translate(148.734375 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(212.359375 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(244.140625 0)"/> <use xlink:href="#f89-DejaVuSerif-58" transform="translate(295.453125 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(359.859375 0)"/> <use xlink:href="#f89-DejaVuSerif-17" transform="translate(391.640625 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(455.265625 0)"/> <use xlink:href="#f89-DejaVuSerif-45" transform="translate(487.046875 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(551.0625 0)"/> <use xlink:href="#f89-DejaVuSerif-57" transform="translate(583.046875 0)"/> </g> </g> <g id="f89-text_50"> <!-- +1 = un passo --> <g style="fill: var(--fig-axis)" transform="translate(146.075813 179.76468) scale(0.1 -0.1)"> <defs> <path id="f89-DejaVuSerif-20" d="M 678 2894 L 4684 2894 L 4684 2394 L 678 2394 L 678 2894 z M 678 1619 L 4684 1619 L 4684 1119 L 678 1119 L 678 1619 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-51" d="M 263 0 L 263 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 1356 3322 L 1356 2731 Q 1516 3069 1770 3241 Q 2025 3413 2363 3413 Q 2913 3413 3172 3097 Q 3431 2781 3431 2113 L 3431 331 L 3944 331 L 3944 0 L 2356 0 L 2356 331 L 2853 331 L 2853 1931 Q 2853 2541 2703 2767 Q 2553 2994 2175 2994 Q 1775 2994 1565 2701 Q 1356 2409 1356 1850 L 1356 331 L 1856 331 L 1856 0 L 263 0 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-53" d="M 1313 1825 L 1313 1497 Q 1313 897 1542 583 Q 1772 269 2209 269 Q 2650 269 2876 622 Q 3103 975 3103 1663 Q 3103 2353 2876 2703 Q 2650 3053 2209 3053 Q 1772 3053 1542 2737 Q 1313 2422 1313 1825 z M 738 2988 L 184 2988 L 184 3322 L 1313 3322 L 1313 2803 Q 1481 3116 1742 3264 Q 2003 3413 2388 3413 Q 3000 3413 3387 2928 Q 3775 2444 3775 1663 Q 3775 881 3387 395 Q 3000 -91 2388 -91 Q 2003 -91 1742 57 Q 1481 206 1313 519 L 1313 -997 L 1856 -997 L 1856 -1331 L 184 -1331 L 184 -997 L 738 -997 L 738 2988 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-44" d="M 2547 1044 L 2547 1747 L 1806 1747 Q 1378 1747 1168 1562 Q 959 1378 959 997 Q 959 650 1171 447 Q 1384 244 1747 244 Q 2106 244 2326 466 Q 2547 688 2547 1044 z M 3122 2075 L 3122 331 L 3634 331 L 3634 0 L 2547 0 L 2547 359 Q 2356 128 2106 18 Q 1856 -91 1522 -91 Q 969 -91 644 203 Q 319 497 319 997 Q 319 1513 691 1797 Q 1063 2081 1741 2081 L 2547 2081 L 2547 2309 Q 2547 2688 2317 2895 Q 2088 3103 1672 3103 Q 1328 3103 1125 2947 Q 922 2791 872 2484 L 575 2484 L 575 3156 Q 875 3284 1158 3348 Q 1441 3413 1709 3413 Q 2400 3413 2761 3070 Q 3122 2728 3122 2075 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-52" d="M 1925 219 Q 2388 219 2623 584 Q 2859 950 2859 1663 Q 2859 2375 2623 2739 Q 2388 3103 1925 3103 Q 1463 3103 1227 2739 Q 991 2375 991 1663 Q 991 950 1228 584 Q 1466 219 1925 219 z M 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2456 758 2934 Q 1197 3413 1925 3413 Q 2653 3413 3092 2934 Q 3531 2456 3531 1663 Q 3531 869 3092 389 Q 2653 -91 1925 -91 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-e"/> <use xlink:href="#f89-DejaVuSerif-14" transform="translate(83.796875 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(147.421875 0)"/> <use xlink:href="#f89-DejaVuSerif-20" transform="translate(179.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(263 0)"/> <use xlink:href="#f89-DejaVuSerif-58" transform="translate(294.78125 0)"/> <use xlink:href="#f89-DejaVuSerif-51" transform="translate(359.1875 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(423.59375 0)"/> <use xlink:href="#f89-DejaVuSerif-53" transform="translate(455.375 0)"/> <use xlink:href="#f89-DejaVuSerif-44" transform="translate(519.390625 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(579.015625 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(630.328125 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(681.640625 0)"/> </g> <!-- in senso orario --> <g style="fill: var(--fig-axis)" transform="translate(145.468781 191.766633) scale(0.1 -0.1)"> <defs> <path id="f89-DejaVuSerif-48" d="M 3469 1600 L 991 1600 L 991 1575 Q 991 903 1244 561 Q 1497 219 1991 219 Q 2369 219 2611 417 Q 2853 616 2950 1006 L 3413 1006 Q 3275 459 2904 184 Q 2534 -91 1931 -91 Q 1203 -91 761 389 Q 319 869 319 1663 Q 319 2450 753 2931 Q 1188 3413 1894 3413 Q 2647 3413 3050 2948 Q 3453 2484 3469 1600 z M 2791 1931 Q 2772 2513 2545 2808 Q 2319 3103 1894 3103 Q 1497 3103 1269 2806 Q 1041 2509 991 1931 L 2791 1931 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-55" d="M 3059 3328 L 3059 2497 L 2728 2497 Q 2713 2744 2591 2866 Q 2469 2988 2234 2988 Q 1809 2988 1582 2694 Q 1356 2400 1356 1850 L 1356 331 L 2022 331 L 2022 0 L 263 0 L 263 331 L 781 331 L 781 2994 L 231 2994 L 231 3322 L 1356 3322 L 1356 2731 Q 1525 3078 1790 3245 Q 2056 3413 2438 3413 Q 2578 3413 2733 3391 Q 2888 3369 3059 3328 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-4c"/> <use xlink:href="#f89-DejaVuSerif-51" transform="translate(31.984375 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(96.390625 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(128.171875 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(179.484375 0)"/> <use xlink:href="#f89-DejaVuSerif-51" transform="translate(238.671875 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(303.078125 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(354.390625 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(414.59375 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(446.375 0)"/> <use xlink:href="#f89-DejaVuSerif-55" transform="translate(506.578125 0)"/> <use xlink:href="#f89-DejaVuSerif-44" transform="translate(554.375 0)"/> <use xlink:href="#f89-DejaVuSerif-55" transform="translate(614 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(661.796875 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(693.78125 0)"/> </g> </g> <g id="f89-text_51"> <!-- blu: MSB 0, positivi --> <g style="fill: var(--fig-axis)" transform="translate(138.285422 215.586963) scale(0.09 -0.09)"> <defs> <path id="f89-DejaVuSerif-4f" d="M 1313 331 L 1856 331 L 1856 0 L 184 0 L 184 331 L 738 331 L 738 4531 L 184 4531 L 184 4863 L 1313 4863 L 1313 331 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-1d" d="M 666 325 Q 666 500 786 622 Q 906 744 1081 744 Q 1256 744 1376 622 Q 1497 500 1497 325 Q 1497 150 1378 29 Q 1259 -91 1081 -91 Q 903 -91 784 29 Q 666 150 666 325 z M 666 2363 Q 666 2538 786 2658 Q 906 2778 1081 2778 Q 1259 2778 1378 2659 Q 1497 2541 1497 2363 Q 1497 2184 1378 2065 Q 1259 1947 1081 1947 Q 906 1947 786 2067 Q 666 2188 666 2363 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-30" d="M 353 0 L 353 331 L 947 331 L 947 4331 L 319 4331 L 319 4666 L 1678 4666 L 3316 1344 L 4953 4666 L 6228 4666 L 6228 4331 L 5606 4331 L 5606 331 L 6203 331 L 6203 0 L 4378 0 L 4378 331 L 4972 331 L 4972 3938 L 3372 684 L 2931 684 L 1331 3938 L 1331 331 L 1925 331 L 1925 0 L 353 0 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-36" d="M 594 225 L 594 1288 L 953 1284 Q 969 753 1261 498 Q 1553 244 2150 244 Q 2706 244 2998 464 Q 3291 684 3291 1106 Q 3291 1444 3114 1625 Q 2938 1806 2369 1978 L 1753 2163 Q 1084 2366 811 2669 Q 538 2972 538 3500 Q 538 4094 959 4422 Q 1381 4750 2144 4750 Q 2469 4750 2856 4679 Q 3244 4609 3681 4475 L 3681 3481 L 3328 3481 Q 3275 3975 2998 4195 Q 2722 4416 2156 4416 Q 1663 4416 1405 4214 Q 1147 4013 1147 3628 Q 1147 3294 1340 3103 Q 1534 2913 2163 2725 L 2741 2553 Q 3375 2363 3645 2067 Q 3916 1772 3916 1275 Q 3916 597 3481 253 Q 3047 -91 2188 -91 Q 1803 -91 1404 -12 Q 1006 66 594 225 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-25" d="M 1581 331 L 2516 331 Q 3078 331 3337 575 Q 3597 819 3597 1350 Q 3597 1878 3339 2120 Q 3081 2363 2516 2363 L 1581 2363 L 1581 331 z M 1581 2694 L 2375 2694 Q 2888 2694 3123 2891 Q 3359 3088 3359 3513 Q 3359 3941 3123 4136 Q 2888 4331 2375 4331 L 1581 4331 L 1581 2694 z M 353 0 L 353 331 L 947 331 L 947 4331 L 353 4331 L 353 4666 L 2656 4666 Q 3363 4666 3720 4377 Q 4078 4088 4078 3513 Q 4078 3097 3829 2850 Q 3581 2603 3103 2547 Q 3697 2472 4005 2167 Q 4313 1863 4313 1350 Q 4313 656 3875 328 Q 3438 0 2509 0 L 353 0 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-f" d="M 231 -622 Q 525 -406 662 -114 Q 800 178 800 594 L 800 709 L 1416 709 Q 1391 175 1164 -208 Q 938 -591 481 -872 L 231 -622 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-59" d="M 1581 0 L 359 2988 L -19 2988 L -19 3322 L 1509 3322 L 1509 2988 L 978 2988 L 1913 703 L 2847 2988 L 2350 2988 L 2350 3322 L 3597 3322 L 3597 2988 L 3225 2988 L 2003 0 L 1581 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-45"/> <use xlink:href="#f89-DejaVuSerif-4f" transform="translate(64.015625 0)"/> <use xlink:href="#f89-DejaVuSerif-58" transform="translate(96 0)"/> <use xlink:href="#f89-DejaVuSerif-1d" transform="translate(160.40625 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(194.09375 0)"/> <use xlink:href="#f89-DejaVuSerif-30" transform="translate(225.875 0)"/> <use xlink:href="#f89-DejaVuSerif-36" transform="translate(328.265625 0)"/> <use xlink:href="#f89-DejaVuSerif-25" transform="translate(396.765625 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(470.25 0)"/> <use xlink:href="#f89-DejaVuSerif-13" transform="translate(502.03125 0)"/> <use xlink:href="#f89-DejaVuSerif-f" transform="translate(565.65625 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(597.4375 0)"/> <use xlink:href="#f89-DejaVuSerif-53" transform="translate(629.21875 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(693.234375 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(753.4375 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(804.75 0)"/> <use xlink:href="#f89-DejaVuSerif-57" transform="translate(836.734375 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(876.921875 0)"/> <use xlink:href="#f89-DejaVuSerif-59" transform="translate(908.90625 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(965.40625 0)"/> </g> <!-- rosso: MSB 1, negativi --> <g style="fill: var(--fig-axis)" transform="translate(131.529094 226.388721) scale(0.09 -0.09)"> <defs> <path id="f89-DejaVuSerif-4a" d="M 3359 2988 L 3359 72 Q 3359 -644 2965 -1033 Q 2572 -1422 1844 -1422 Q 1516 -1422 1216 -1362 Q 916 -1303 641 -1184 L 641 -488 L 941 -488 Q 997 -813 1206 -963 Q 1416 -1113 1806 -1113 Q 2313 -1113 2548 -827 Q 2784 -541 2784 72 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 3322 L 3909 3322 L 3909 2988 L 3359 2988 z M 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 L 2784 1825 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-55"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(47.796875 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(108 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(159.3125 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(210.625 0)"/> <use xlink:href="#f89-DejaVuSerif-1d" transform="translate(270.828125 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(304.515625 0)"/> <use xlink:href="#f89-DejaVuSerif-30" transform="translate(336.296875 0)"/> <use xlink:href="#f89-DejaVuSerif-36" transform="translate(438.6875 0)"/> <use xlink:href="#f89-DejaVuSerif-25" transform="translate(507.1875 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(580.671875 0)"/> <use xlink:href="#f89-DejaVuSerif-14" transform="translate(612.453125 0)"/> <use xlink:href="#f89-DejaVuSerif-f" transform="translate(676.078125 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(707.859375 0)"/> <use xlink:href="#f89-DejaVuSerif-51" transform="translate(739.640625 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(804.046875 0)"/> <use xlink:href="#f89-DejaVuSerif-4a" transform="translate(863.234375 0)"/> <use xlink:href="#f89-DejaVuSerif-44" transform="translate(927.25 0)"/> <use xlink:href="#f89-DejaVuSerif-57" transform="translate(986.875 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(1027.0625 0)"/> <use xlink:href="#f89-DejaVuSerif-59" transform="translate(1059.046875 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(1115.546875 0)"/> </g> </g> <g id="f89-text_52"> <!-- 7 + 1 → −8 --> <g style="fill: var(--fig-accent)" transform="translate(280.066789 312.228929) scale(0.1 -0.1)"> <defs> <path id="f89-DejaVuSerif-854" d="M 366 2322 L 4391 2322 L 3788 3375 L 3822 3375 L 5125 2084 L 5125 2053 L 3822 763 L 3788 763 L 4391 1816 L 366 1816 L 366 2322 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-8cf" d="M 678 2259 L 4684 2259 L 4684 1753 L 678 1753 L 678 2259 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-1a"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(63.625 0)"/> <use xlink:href="#f89-DejaVuSerif-e" transform="translate(95.40625 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(179.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-14" transform="translate(210.984375 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(274.609375 0)"/> <use xlink:href="#f89-DejaVuSerif-854" transform="translate(306.390625 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(390.1875 0)"/> <use xlink:href="#f89-DejaVuSerif-8cf" transform="translate(421.96875 0)"/> <use xlink:href="#f89-DejaVuSerif-1b" transform="translate(505.765625 0)"/> </g> <!-- overflow --> <g style="fill: var(--fig-accent)" transform="translate(286.726945 324.231663) scale(0.1 -0.1)"> <defs> <path id="f89-DejaVuSerif-cf1" d="M 2291 4863 L 3531 4863 L 3531 331 L 4078 331 L 4078 0 L 2406 0 L 2406 331 L 2956 331 L 2956 4531 L 2284 4531 Q 1775 4531 1565 4328 Q 1356 4125 1356 3634 L 1356 3322 L 2278 3322 L 2278 2988 L 1356 2988 L 1356 331 L 1900 331 L 1900 0 L 231 0 L 231 331 L 781 331 L 781 2988 L 231 2988 L 231 3322 L 781 3322 L 781 3622 Q 781 4250 1154 4556 Q 1528 4863 2291 4863 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-5a" d="M 3072 3322 L 3922 728 L 4672 2988 L 4191 2988 L 4191 3322 L 5394 3322 L 5394 2988 L 5025 2988 L 4038 0 L 3559 0 L 2741 2484 L 1919 0 L 1459 0 L 475 2988 L 103 2988 L 103 3322 L 1606 3322 L 1606 2988 L 1069 2988 L 1813 728 L 2669 3322 L 3072 3322 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-52"/> <use xlink:href="#f89-DejaVuSerif-59" transform="translate(60.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(116.703125 0)"/> <use xlink:href="#f89-DejaVuSerif-55" transform="translate(175.890625 0)"/> <use xlink:href="#f89-DejaVuSerif-cf1" transform="translate(223.6875 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(290.390625 0)"/> <use xlink:href="#f89-DejaVuSerif-5a" transform="translate(350.59375 0)"/> </g> </g> <g id="f89-text_53"> <!-- grigio: lo stesso --> <g style="fill: var(--fig-faint)" transform="translate(27.04896 16.889652) scale(0.09 -0.09)"> <use xlink:href="#f89-DejaVuSerif-4a"/> <use xlink:href="#f89-DejaVuSerif-55" transform="translate(64.015625 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(111.8125 0)"/> <use xlink:href="#f89-DejaVuSerif-4a" transform="translate(143.796875 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(207.8125 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(239.796875 0)"/> <use xlink:href="#f89-DejaVuSerif-1d" transform="translate(300 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(333.6875 0)"/> <use xlink:href="#f89-DejaVuSerif-4f" transform="translate(365.46875 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(397.453125 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(457.65625 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(489.4375 0)"/> <use xlink:href="#f89-DejaVuSerif-57" transform="translate(540.75 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(580.9375 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(640.125 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(691.4375 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(742.75 0)"/> </g> <!-- codice letto senza segno --> <g style="fill: var(--fig-faint)" transform="translate(27.04896 27.692113) scale(0.09 -0.09)"> <defs> <path id="f89-DejaVuSerif-46" d="M 3291 997 Q 3169 466 2822 187 Q 2475 -91 1925 -91 Q 1200 -91 759 389 Q 319 869 319 1663 Q 319 2459 759 2936 Q 1200 3413 1925 3413 Q 2241 3413 2553 3339 Q 2866 3266 3181 3116 L 3181 2266 L 2847 2266 Q 2781 2703 2561 2903 Q 2341 3103 1931 3103 Q 1466 3103 1228 2742 Q 991 2381 991 1663 Q 991 944 1227 581 Q 1463 219 1931 219 Q 2303 219 2525 412 Q 2747 606 2828 997 L 3291 997 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-47" d="M 3359 331 L 3909 331 L 3909 0 L 2784 0 L 2784 519 Q 2616 206 2355 57 Q 2094 -91 1709 -91 Q 1097 -91 708 395 Q 319 881 319 1663 Q 319 2444 706 2928 Q 1094 3413 1709 3413 Q 2094 3413 2355 3264 Q 2616 3116 2784 2803 L 2784 4531 L 2241 4531 L 2241 4863 L 3359 4863 L 3359 331 z M 2784 1497 L 2784 1825 Q 2784 2422 2554 2737 Q 2325 3053 1888 3053 Q 1444 3053 1217 2703 Q 991 2353 991 1663 Q 991 975 1217 622 Q 1444 269 1888 269 Q 2325 269 2554 583 Q 2784 897 2784 1497 z " transform="scale(0.015625)"/> <path id="f89-DejaVuSerif-5d" d="M 256 0 L 256 269 L 2338 2988 L 691 2988 L 691 2413 L 359 2413 L 359 3322 L 3078 3322 L 3078 3053 L 997 331 L 2803 331 L 2803 934 L 3138 934 L 3138 0 L 256 0 z " transform="scale(0.015625)"/> </defs> <use xlink:href="#f89-DejaVuSerif-46"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(56 0)"/> <use xlink:href="#f89-DejaVuSerif-47" transform="translate(116.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-4c" transform="translate(180.21875 0)"/> <use xlink:href="#f89-DejaVuSerif-46" transform="translate(212.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(268.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(327.390625 0)"/> <use xlink:href="#f89-DejaVuSerif-4f" transform="translate(359.171875 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(391.15625 0)"/> <use xlink:href="#f89-DejaVuSerif-57" transform="translate(450.34375 0)"/> <use xlink:href="#f89-DejaVuSerif-57" transform="translate(490.53125 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(530.71875 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(590.921875 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(622.703125 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(674.015625 0)"/> <use xlink:href="#f89-DejaVuSerif-51" transform="translate(733.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-5d" transform="translate(797.609375 0)"/> <use xlink:href="#f89-DejaVuSerif-44" transform="translate(850.296875 0)"/> <use xlink:href="#f89-DejaVuSerif-3" transform="translate(909.921875 0)"/> <use xlink:href="#f89-DejaVuSerif-56" transform="translate(941.703125 0)"/> <use xlink:href="#f89-DejaVuSerif-48" transform="translate(993.015625 0)"/> <use xlink:href="#f89-DejaVuSerif-4a" transform="translate(1052.203125 0)"/> <use xlink:href="#f89-DejaVuSerif-51" transform="translate(1116.21875 0)"/> <use xlink:href="#f89-DejaVuSerif-52" transform="translate(1180.625 0)"/> </g> </g> </g> </g> <defs> <clipPath id="f89-pc2acd0cd02"> <rect x="5.76" y="5.76" width="354.816" height="354.816"/> </clipPath> </defs> </svg></figure>

| dec | CA2 4 bit | | dec | CA2 4 bit |
| --- | --- | --- | --- | --- |
| 7 | 0111 | | -1 | 1111 |
| 6 | 0110 | | -2 | 1110 |
| 5 | 0101 | | -3 | 1101 |
| 4 | 0100 | | -4 | 1100 |
| 3 | 0011 | | -5 | 1011 |
| 2 | 0010 | | -6 | 1010 |
| 1 | 0001 | | -7 | 1001 |
| 0 | 0000 | | -8 | 1000 |

La figura spiega anche i due vantaggi: lo zero è un punto solo del cerchio, e sommare è sempre "girare in avanti", qualunque sia il segno. L'**overflow** è attraversare la linea fra $+7$ e $-8$: $7 + 1$ in CA2 a 4 bit dà `1000`, cioè $-8$. L'intervallo è asimmetrico ($-8$ c'è, $+8$ no) perché lo zero occupa uno dei codici con MSB 0.

**Virgola fissa** (<span class="src">slide 25-26</span>). Per i numeri con una parte frazionaria (12,64) le tecniche sono due. In **virgola fissa** i bit si dividono, una volta per tutte, in quelli della parte intera e quelli della parte frazionaria: la virgola sta in una posizione fissa. Dopo la virgola i pesi continuano con gli esponenti negativi: $2^{-1} = 0.5$, $2^{-2} = 0.25$, $2^{-3} = 0.125$, $2^{-4} = 0.0625$. Con 4 bit per parte:

$$
1001.1010_2 = 8 + 1 + 0.5 + 0.125 = 9.625_{10} \qquad 0011.0100_2 = 2 + 1 + 0.25 = 3.25_{10}
$$

**Virgola mobile** (<span class="src">slide 27-32</span>). Gran parte dei bit rappresenta le **cifre significative** del numero (la **mantissa**), indipendentemente da dove sta la virgola, e alcuni bit dicono **dove va la virgola** (l'**esponente**). È la notazione scientifica in base 2. Lo standard è IEEE-754; il prof lo presenta prima in una versione semplificata a 32 bit:

```
| s | eeeeeeee | mmmmmmmmmmmmmmmmmmmmmmm |
  1     8                23
segno   esponente e in CA2   mantissa m senza segno, letta come 0.mmm...
X = ± m · 2^e     con m < 1
```

La mantissa contiene tutte le cifre significative, l'esponente decide dove mettere la virgola: moltiplicare per $2^e$ sposta la virgola di $e$ posti a destra (a sinistra se $e < 0$).

Lo standard vero (slide 32) differisce in tre punti: la mantissa sta in $[1, 2)$ (l'1 prima della virgola è sottinteso e i 23 bit sono solo la parte frazionaria); l'esponente non è in CA2 ma **con bias**, cioè si memorizza $e + 127$; ci sono due zeri, $+0$ e $-0$. La slide dice "per $N$ bit il bias è $2^{N-1}$": il valore dello standard è $2^{N-1} - 1$, cioè 127 per 8 bit. Gli intervalli rappresentabili sono circa $(-2^{128}, -2^{-126}]$ e $[2^{-126}, 2^{128})$.

**Caratteri e tabella ASCII** (<span class="src">slide 33-34</span>). I caratteri si codificano con una tabella che associa un codice convenzionale a ogni carattere della tastiera: la **tabella ASCII** (American Standard Code for Information Interchange). Contiene cifre, lettere maiuscole e minuscole (con codici diversi), punteggiatura, simboli. Lo standard copre i primi **128** valori di un byte (da `00000000` a `01111111`); i successivi, fino a 256, formano la **ASCII estesa**, con versioni nazionali (lettere accentate). I primi 32 valori non sono caratteri stampabili ma **caratteri di controllo**, come l'a capo. Esistono altri standard, come **UNICODE**, nato per evitare tabelle regionali incompatibili (la slide dice 2 byte per carattere: è la codifica UTF-16 di base; UTF-8 ne usa da 1 a 4).

I codici da ricordare:

| carattere | codice | perché serve |
| --- | --- | --- |
| `'0'` ... `'9'` | 48 ... 57 | consecutivi: `c - '0'` dà la cifra |
| `'A'` ... `'Z'` | 65 ... 90 | consecutivi |
| `'a'` ... `'z'` | 97 ... 122 | consecutivi, 32 dopo le maiuscole |
| spazio | 32 | |
| `'\n'` | 10 | carattere di controllo |
| `'\0'` | 0 | terminatore delle stringhe |

## Concetti

### Perché ottale ed esadecimale

Il calcolatore lavora in binario, ma i numeri binari sono lunghi e illeggibili: `0001000011001100` è difficile da copiare senza errori. Siccome $8 = 2^3$ e $16 = 2^4$, **ogni cifra ottale corrisponde esattamente a 3 bit e ogni cifra esadecimale a 4 bit**. L'esadecimale è quindi una scrittura compatta del binario: `0001 0000 1100 1100` diventa `10CC`, quattro cifre invece di sedici. Per questo gli indirizzi di memoria si stampano in esadecimale (`%p` in [Puntatori](/uni/prog-1/puntatori/)).

### Perché l'algoritmo dei resti funziona

(<span class="src">slide 21</span>, dimostrazione a mano del prof su $10_{10} = 1010_2$) Si scrive il numero già scomposto in potenze di 2:

$$
10 = 1 \cdot 2^3 + 0 \cdot 2^2 + 1 \cdot 2^1 + 0 \cdot 2^0
$$

Tutti i termini tranne l'ultimo contengono almeno un fattore 2. Dividendo per 2:
- il **resto** è l'ultimo termine, cioè il bit $c_0$ (qui 0): ogni resto della divisione per due dà il **bit meno significativo** del dividendo;
- il **quoziente** è il numero con tutti gli altri bit spostati di una posizione a destra: $1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 5$.

Ripetendo su 5 si ottiene $c_1 = 1$ con quoziente 2, poi $c_2 = 0$ con quoziente 1, poi $c_3 = 1$ con quoziente 0. All'ultima divisione il resto è il bit **più significativo**. I resti escono quindi dal meno significativo al più significativo, e vanno letti **dall'ultimo al primo**. Lo stesso ragionamento vale per qualsiasi base $b$, dividendo per $b$.

### Quanti bit servono

Con $N$ bit si hanno $2^N$ configurazioni. Per rappresentare $K$ valori diversi serve il più piccolo $N$ con $2^N \geq K$. Per 300 valori: $2^8 = 256 < 300$, $2^9 = 512 \geq 300$, quindi 9 bit. Per 654 valori: $2^9 = 512 < 654$, $2^{10} = 1024 \geq 654$, quindi 10 bit.

Per i naturali da 0 a $M$ i valori sono $M + 1$: per arrivare a 255 bastano 8 bit (256 valori), per 256 ne servono 9.

### Shift: moltiplicare e dividere per 2

(<span class="src">slide 57</span>) Spostare tutti i bit di una posizione a sinistra (**shift**, in C l'operatore `<<`) moltiplica per 2, esattamente come aggiungere uno zero a destra in base 10 moltiplica per 10. Lo shift a destra (`>>`) divide per 2, scartando il resto.

```
00001101   13
00011010   26     13 << 1
00110100   52     13 << 2
```

## Metodo

Prima di ogni esercizio si riconosce la **direzione**: da una base qualsiasi verso 10 si usano i **pesi**; da 10 verso un'altra base si usa l'**algoritmo dei resti**; fra 2, 8 e 16 si passa per i **gruppi di bit**, senza toccare il decimale.

**Da base $b$ a decimale (pesi).**
1. Numera le cifre da destra, a partire da 0.
2. Moltiplica ogni cifra per $b$ elevato alla sua posizione (in esadecimale, prima converti le lettere: A=10 … F=15).
3. Somma.

**Da decimale a base $b$ (resti).**
1. Dividi il numero per $b$: scrivi quoziente e resto.
2. Ripeti sul quoziente finché il quoziente è 0.
3. Leggi i resti **dall'ultimo al primo**. In base 16, i resti da 10 a 15 diventano A-F.
4. Controllo: riconverti con i pesi.

**Da binario a ottale o esadecimale.** Dividi i bit in gruppi da 3 (ottale) o 4 (esadecimale) **partendo da destra**; se l'ultimo gruppo a sinistra è incompleto, aggiungi zeri a sinistra (**padding**). Ogni gruppo diventa una cifra.

**Da ottale o esadecimale a binario.** Ogni cifra diventa il suo gruppo di 3 o 4 bit, scritto **sempre con tutti i bit** (2 in esadecimale è `0010`, non `10`). Gli zeri iniziali del risultato si possono togliere.

**Fra ottale ed esadecimale.** Si passa per il binario: cifre in gruppi da 4, poi raggruppa da 3 (o il contrario). In alternativa, passando per il decimale come nella slide 58: prima pesi, poi resti.

**Somma fra basi diverse** (esercizio d'esame). Porta entrambi gli addendi nella stessa base (il decimale è il più sicuro), somma, poi converti il risultato nella base richiesta. Se il testo non dice la base del risultato, dalla in decimale e anche nelle basi di partenza.

**Somma binaria in colonna.** Da destra, con la tabella $0+0=0$, $0+1=1$, $1+0=1$, $1+1=0$ con riporto 1. Con il riporto entrante: $1+1+1 = 1$ con riporto 1.

**Leggere una sequenza di bit in tre modi** (esempio con 8 bit):
- **naturale**: somma dei pesi;
- **modulo e segno**: MSB è il segno, gli altri 7 bit il modulo;
- **CA2**: se MSB è 0 è come il naturale; se è 1, naturale meno $2^N$ (oppure MSB con peso $-2^{N-1}$).

**Scrivere $-x$ in CA2 su $N$ bit.**
1. Controlla che $-x \geq -2^{N-1}$, altrimenti non è rappresentabile.
2. Scrivi $x$ in binario su $N$ bit, con gli zeri a sinistra.
3. Inverti tutti i bit.
4. Aggiungi 1.
5. Controllo: l'MSB deve essere 1, e decodificando devi ritrovare $-x$.

Scorciatoia per il passo 3-4: da destra copia i bit fino al primo 1 compreso, poi inverti tutti gli altri.

**Sottrazione $a - b$ in CA2.** Si calcola $a + (-b)$: codifica $a$ e $-b$ su $N$ bit, somma in colonna, **scarta** l'eventuale riporto oltre l'$N$-esimo bit.

**Overflow in CA2.** C'è overflow se e solo se i due addendi hanno lo **stesso segno** e il risultato ha **segno opposto**. Due numeri di segno diverso non vanno mai in overflow. Il riporto in uscita da solo non dice niente (nella sottrazione si scarta sempre).

**Decodificare un numero in virgola fissa.** Pesi positivi a sinistra della virgola, $2^{-1}, 2^{-2}, \ldots$ a destra.

**Decodificare la virgola mobile semplificata del prof.** Segno dal primo bit; esponente $e$ dagli 8 bit in CA2; mantissa $m$ letta come $0.{\rm bit}$; $X = \pm m \cdot 2^e$.

## Esempi svolti a lezione

### Da decimale a binario: 19 e 30

(<span class="src">slide 14-20</span>) La tabella del prof ha divisione, resto, posizione e valore: la colonna "valore" è il controllo.

| divisione | quoziente | resto | posizione | valore |
| --- | --- | --- | --- | --- |
| 19 : 2 | 9 | 1 | 0 | $1 \cdot 2^0 = 1$ |
| 9 : 2 | 4 | 1 | 1 | $1 \cdot 2^1 = 2$ |
| 4 : 2 | 2 | 0 | 2 | $0 \cdot 2^2 = 0$ |
| 2 : 2 | 1 | 0 | 3 | $0 \cdot 2^3 = 0$ |
| 1 : 2 | 0 | 1 | 4 | $1 \cdot 2^4 = 16$ |

Resti dall'ultimo al primo: $19_{10} = 10011_2$. Controllo: $16 + 2 + 1 = 19$.

| divisione | quoziente | resto | posizione | valore |
| --- | --- | --- | --- | --- |
| 30 : 2 | 15 | 0 | 0 | 0 |
| 15 : 2 | 7 | 1 | 1 | 2 |
| 7 : 2 | 3 | 1 | 2 | 4 |
| 3 : 2 | 1 | 1 | 3 | 8 |
| 1 : 2 | 0 | 1 | 4 | 16 |

$30_{10} = 11110_2$. Controllo: $16 + 8 + 4 + 2 = 30$. Nota: $30 = 2 \cdot 15$, e infatti $11110$ è $1111$ ($= 15$) con uno zero in fondo: moltiplicare per 2 aggiunge uno zero a destra.

### Algoritmo dei resti: linguaggio naturale, pseudocodice e codice

(<span class="src">slide 23-32</span>) La descrizione in linguaggio naturale della slide 24: "Chiedi all'utente un numero d, poi dividilo per due ottenendo un quoziente ed un resto. Metti da parte il resto e dividi di nuovo il quoziente. Continua finché il quoziente è zero. Metti insieme i resti in ordine inverso, dall'ultimo verso il primo: è il numero binario." Il pseudocodice, con l'errore della slide 29 (l'indice dopo il primo ciclo vale il numero di cifre, non l'ultima posizione) e la correzione della slide 30 (`i ← i - 1` fra i due cicli), è spiegato riga per riga in [Array](/uni/prog-1/array/), sezione "Da decimale a binario".

Il codice della slide 31 usa un array di `_Bool` da 100 celle, legge senza controlli e stampa all'indietro con `i--` prima della stampa (così l'errore dell'indice non c'è). La slide 32 chiede di **tenere conto del limite dell'array** e di segnalare quando il numero richiederebbe più cifre di quelle disponibili. Versione con 8 cifre al massimo, per vedere il limite all'opera:

```c
#include <stdio.h>

#define MAX_CIFRE 8

int main(void)
{
    int numero_binario[MAX_CIFRE];
    int numero_d;
    int i = 0;

    printf("Numero decimale: ");
    if (scanf("%d", &numero_d) != 1 || numero_d < 0) {
        printf("input non valido\n");
        return 1;
    }
    if (numero_d == 0) {
        printf("0\n");
        return 0;
    }
    while (numero_d != 0 && i < MAX_CIFRE) {
        numero_binario[i] = numero_d % 2;
        numero_d = numero_d / 2;
        i++;
    }
    if (numero_d != 0) {
        printf("servono piu' di %d cifre binarie\n", MAX_CIFRE);
        return 1;
    }
    while (i > 0) {
        i--;
        printf("%d", numero_binario[i]);
    }
    printf("\n");
    return 0;
}
```

| input | stampa dopo il prompt (verificato) |
| --- | --- |
| 19 | `10011` |
| 30 | `11110` |
| 255 | `11111111` |
| 256 | `servono piu' di 8 cifre binarie` |
| 0 | `0` |

L'idea per il limite: il ciclo si ferma per **due** motivi, numero finito o array pieno. Dopo il ciclo si guarda quale dei due: se `numero_d` non è ancora 0, l'array era pieno prima di finire. 255 sta in 8 cifre, 256 ($= 2^8$) ne vuole 9.

Tracing del ciclo dei resti per 19 (le variabili alla fine di ogni giro):

| giro | `numero_d % 2` | scrive | `numero_d` dopo | `i` dopo |
| --- | --- | --- | --- | --- |
| 1 | 1 | `numero_binario[0]` = 1 | 9 | 1 |
| 2 | 1 | `numero_binario[1]` = 1 | 4 | 2 |
| 3 | 0 | `numero_binario[2]` = 0 | 2 | 3 |
| 4 | 0 | `numero_binario[3]` = 0 | 1 | 4 |
| 5 | 1 | `numero_binario[4]` = 1 | 0 | 5 |

Poi la stampa parte con `i` 5: decrementa a 4 e stampa `numero_binario[4]`, poi 3, 2, 1, 0. Esce `10011`.

### Da binario a decimale (e un errore del prof)

(<span class="src">slide 33-36</span>) Il numero binario sta in un array, cifra più significativa nella cella 0. Il "trabocchetto" segnalato dalla slide 34: **la cifra con peso minore ($a_0$) sta nella cella di indice maggiore** (la 7 con 8 cifre). Quindi la cella `i` ha peso $2^{n-1-i}$, oppure, equivalentemente, la cella `n - 1 - i` ha peso $2^i$.

La soluzione della slide 36 calcola $2^i$ come `exp(log(2)*i)`, cioè $e^{i \ln 2}$, con la libreria matematica e i `double`. Eseguita su `{1, 0, 0, 0, 0, 0, 1, 1}` (che è $128 + 2 + 1 = 131$) **stampa 130** (verificato). Il motivo: `exp(log(2)*i)` non dà potenze esatte, per esempio per $i = 7$ dà $127.99999999999997$. La somma `dec + bin[...] * exp(...)` è un `double` e viene troncata quando si assegna all'`int` `dec`: $3 + 127.99999999999997 = 130.99999999999997$ diventa 130. È la conversione implicita `double`→`int` di [Tipi di dati e conversioni](/uni/prog-1/tipi-di-dati-e-conversioni/). Con gli interi non si usano funzioni a virgola mobile: il peso si tiene in una variabile e si raddoppia a ogni passo.

```c
#include <stdio.h>

#define N 8

int main(void)
{
    int bin[N] = {1, 0, 0, 0, 0, 0, 1, 1};
    int i;
    int dec = 0;
    int peso = 1;

    for (i = N - 1; i >= 0; i--) {
        dec = dec + bin[i] * peso;
        peso = peso * 2;
    }
    printf("%d\n", dec);
    return 0;
}
```

Stampa `131` (verificato). Il ciclo parte dall'ultima cella (peso 1) e va verso la prima, raddoppiando il peso: $1 \cdot 1 + 1 \cdot 2 + 0 \cdot 4 + \ldots + 1 \cdot 128$.

### Ottale ed esadecimale con i resti

(<span class="src">slide 37-40</span>, <span class="src">43-45</span>) Stesso algoritmo, dividendo per 8 o per 16. Nella slide 37 il prof avverte che l'array dei resti va riempito "a partire dalla posizione di indice maggiore" se lo si vuole poi leggere in avanti; il codice della slide 40 invece lo riempie da 0 e lo stampa all'indietro, che è equivalente.

$69_{10}$ in ottale:

| divisione | quoziente | resto | posizione | valore |
| --- | --- | --- | --- | --- |
| 69 : 8 | 8 | 5 | 0 | $5 \cdot 1 = 5$ |
| 8 : 8 | 1 | 0 | 1 | $0 \cdot 8 = 0$ |
| 1 : 8 | 0 | 1 | 2 | $1 \cdot 64 = 64$ |

$69_{10} = 105_8$. Controllo: $64 + 5 = 69$.

$2501_{10}$ in esadecimale:

| divisione | quoziente | resto | cifra | valore |
| --- | --- | --- | --- | --- |
| 2501 : 16 | 156 | 5 | 5 | $5 \cdot 1 = 5$ |
| 156 : 16 | 9 | 12 | C | $12 \cdot 16 = 192$ |
| 9 : 16 | 0 | 9 | 9 | $9 \cdot 256 = 2304$ |

$2501_{10} = 9C5_{16}$. Controllo: $2304 + 192 + 5 = 2501$. (La slide scrive “$C \cdot 16^1 = 12 \cdot 16^1 = 0 \cdot 8 = 192$": il “$0 \cdot 8$" è un refuso copiato dall'esempio ottale.)

Il programma della slide 40 è quello binario con 8 al posto di 2. Una versione unica per ogni base da 2 a 16, che usa una stringa come tabella delle cifre (`cifre[12]` è `'C'`):

```c
#include <stdio.h>

#define MAX_CIFRE 16

int main(void)
{
    char cifre[] = "0123456789ABCDEF";
    char risultato[MAX_CIFRE];
    int numero_d;
    int base;
    int i = 0;

    if (scanf("%d %d", &numero_d, &base) != 2 || numero_d < 0 || base < 2 || base > 16) {
        printf("input non valido\n");
        return 1;
    }
    do {
        risultato[i] = cifre[numero_d % base];
        numero_d = numero_d / base;
        i++;
    } while (numero_d != 0 && i < MAX_CIFRE);
    while (i > 0) {
        i--;
        putchar(risultato[i]);
    }
    putchar('\n');
    return 0;
}
```

Con input `69 8` stampa `105`, con `2501 16` stampa `9C5`, con `0 2` stampa `0` (verificati). Il `do-while` fa almeno un giro, e così lo zero esce da solo senza il caso speciale. Con `MAX_CIFRE` 16 qualunque `int` non negativo ci sta anche in base 4 (16 cifre bastano per $4^{16} = 2^{32}$); in base 2 i numeri oltre 65535 verrebbero troncati, e servirebbe 32.

### Da ottale ed esadecimale a decimale (due errori nelle slide)

(<span class="src">slide 41-42</span>, <span class="src">46-47</span>) Le cifre sono nell'array dalla più significativa (cella 0) alla meno significativa.

Ottale, array `7 1 2 0`, cioè $7120_8$:

$$
7120_8 = 0 \cdot 8^0 + 2 \cdot 8^1 + 1 \cdot 8^2 + 7 \cdot 8^3 = 0 + 16 + 64 + 3584 = 3664_{10}
$$

La formula della slide è giusta, ma il risultato scritto, 2097161, è sbagliato: vale 3664 (verificato).

Esadecimale, array `1 A 2 C`, cioè $1A2C_{16}$:

$$
1A2C_{16} = 12 \cdot 16^0 + 2 \cdot 16^1 + 10 \cdot 16^2 + 1 \cdot 16^3 = 12 + 32 + 2560 + 4096 = 6700_{10}
$$

La slide scrive "DEC(C2A1) = $1 \cdot 16^0 + 10 \cdot 16^1 + 2 \cdot 16^2 + 12 \cdot 16^3$ = 6700": il risultato 6700 è quello di $1A2C$, ma la formula assegna peso $16^0$ alla cella 0, proprio l'errore contro cui avverte la stessa slide. Letta così, la formula calcola $C2A1_{16} = 49825$. La regola giusta è quella del riquadro: la cella di indice maggiore ha il peso minore.

### Esadecimale e ottale passando dal binario

(<span class="src">slide 48-52</span>)

$A1F_{16}$ in ottale. Ogni cifra esadecimale in 4 bit, poi gruppi da 3 da destra:

```
A    1    F            esadecimale
1010 0001 1111         4 bit per cifra
101 000 011 111        rigruppati da 3, partendo da destra
5   0   3   7          ottale
```

$A1F_{16} = 5037_8$. Controllo: $A1F_{16} = 2560 + 16 + 15 = 2591$ e $5037_8 = 2560 + 0 + 24 + 7 = 2591$.

$1234_8$ in esadecimale, al contrario (slide 49):

```
1   2   3   4          ottale
001 010 011 100        3 bit per cifra
0010 1001 1100         rigruppati da 4, partendo da destra
2    9    C            esadecimale
```

$1234_8 = 29C_{16}$ ($= 668_{10}$).

$F_{16}$ in ottale (slide 50-51): `1111` ha 4 bit, e il gruppo a sinistra resta di un bit solo. Si aggiungono zeri a sinistra (**padding**): `001 111`, quindi $F_{16} = 17_8$ ($= 15_{10}$).

$8F_{16}$ in ottale (slide 52): `1000 1111` sono 8 bit; da destra `111`, `001`, poi `10` che diventa `010`. Quindi `010 001 111` cioè $217_8$ ($= 143_{10}$).

### Somma e prodotto in binario

(<span class="src">slide 53-56</span>) $54 + 116$ su 8 bit, colonna per colonna da destra (bit 0) a sinistra (bit 7):

| bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| riporto entrante | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| 54 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |
| 116 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| somma | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |

Risultato `10101010` $= 128 + 32 + 8 + 2 = 170$, e infatti $54 + 116 = 170$. Lettura di una colonna: al bit 5 si sommano $1 + 1$ più il riporto 1, fa 3, cioè cifra 1 e riporto 1.

Esercizio della slide 55, $00011011 + 00111010$:

| bit | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| riporto entrante | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 27 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| 58 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 |
| somma | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |

`01010101` $= 64 + 16 + 4 + 1 = 85 = 27 + 58$.

Prodotto $0110 \cdot 1010$ ($6 \cdot 10$, slide 56): come in colonna in base 10, ma ogni riga parziale è o zero o il primo fattore spostato.

```
      0110      6
    × 1010     10
    ------
      0000      bit 0 del secondo = 0
     0110       bit 1 = 1: 0110 spostato di 1
    0000        bit 2 = 0
   0110         bit 3 = 1: 0110 spostato di 3
   -------
   0111100     60
```

Controllo: $0110 \ll 1 = 12$, $0110 \ll 3 = 48$, $12 + 48 = 60$. Moltiplicare in binario è sommare copie spostate del primo fattore: per questo lo shift è l'operazione base.

### Ottale ed esadecimale passando dal decimale

(<span class="src">slide 58</span>) Il prof compone due "funzioni": `OttaleToDecimale`, poi `DecimaleToEsadecimale` sul risultato. È l'anticipo delle funzioni del deck 6.2.

$$
2370_8 = 2 \cdot 512 + 3 \cdot 64 + 7 \cdot 8 + 0 = 1024 + 192 + 56 = 1272_{10}
$$

| divisione | quoziente | resto |
| --- | --- | --- |
| 1272 : 16 | 79 | 8 |
| 79 : 16 | 4 | 15 (F) |
| 4 : 16 | 0 | 4 |

$1272_{10} = 4F8_{16}$. Per il binario: $2370_8$ = `010 011 111 000` = `0100 1111 1000` = $4F8_{16}$, stesso risultato senza divisioni.

### Complemento a 2 e virgola mobile

(<span class="src">slide 22-24</span>) Cambio di segno su 4 bit:

```
+6 = 0110    inverto: 1001    sommo 1: 1010 = -6
+4 = 0100    inverto: 1011    sommo 1: 1100 = -4
```

Controllo con il peso negativo dell'MSB: `1010` vale $-8 + 2 = -6$, `1100` vale $-8 + 4 = -4$.

Domande della slide 24 per una parola di **8 bit**:
1. Intervallo: da $-2^7 = -128$ a $2^7 - 1 = 127$.
2. Rappresentazioni: $+1$ è `00000001`; $0$ è `00000000`; $-1$ si ottiene da `00000001` invertendo (`11111110`) e sommando 1: `11111111`. Controllo: $-128 + 127 = -1$.

Virgola mobile semplificata (slide 29-31), passo per passo:

| bit | segno | esponente (CA2) | mantissa | calcolo | $X$ |
| --- | --- | --- | --- | --- | --- |
| `1 00000010 11011000...` | − | $10_2 = 2$ | $0.11011_2 = 0.5 + 0.25 + 0.0625 + 0.03125 = 0.84375$ | $0.84375 \cdot 2^2$ | $-3.375$ |
| `1 11111111 10000000...` | − | `11111111` in CA2 $= -1$ | $0.1_2 = 0.5$ | $0.5 \cdot 2^{-1}$ | $-0.25$ |
| `0 00000011 10100000...` | + | $11_2 = 3$ | $0.101_2 = 0.625$ | $0.625 \cdot 2^3$ | $+5$ |

Leggendo l'esponente come spostamento della virgola: nel primo $0.11011$ con virgola 2 posti a destra è $11.011_2 = 3.375$; nel secondo $0.1$ con virgola 1 posto a sinistra è $0.01_2 = 0.25$; nel terzo $0.101$ con virgola 3 posti a destra è $101_2 = 5$.

### Caratteri e codice ASCII

(<span class="src">slide 35-36</span>) Leggere caratteri fino a `#`, stampare il codice ASCII e, per le minuscole, la maiuscola corrispondente. L'idea: `'a' - 'A'` è lo scarto fisso (32) fra minuscole e maiuscole, quindi la maiuscola di `C` è `C - ('a' - 'A')`. Il codice della slide legge con `scanf("%c", &C)`, che legge anche gli a capo: dopo ogni Invio il ciclo stampa il codice 10 dell'a capo (il deck 5.1 lo segnala come "ATTENZIONE: comportamento di scanf con LF"). Con lo spazio prima di `%c` gli spazi bianchi vengono saltati:

```c
#include <stdio.h>

int main(void)
{
    char c;

    printf("Inserire caratteri, # per terminare\n");
    while (scanf(" %c", &c) == 1 && c != '#') {
        printf("Il codice ASCII di %c e' %d\n", c, c);
        if (c >= 'a' && c <= 'z')
            printf("  maiuscola: %c, codice %d\n", c - ('a' - 'A'), c - ('a' - 'A'));
    }
    return 0;
}
```

Con input `a Z` a capo `3#q` stampa (verificato):

```
Inserire caratteri, # per terminare
Il codice ASCII di a e' 97
  maiuscola: A, codice 65
Il codice ASCII di Z e' 90
Il codice ASCII di 3 e' 51
```

Il `%c` e il `%d` sullo stesso `char` sono la dimostrazione di "un dato, due interpretazioni": stessi bit, stampati come carattere e come intero. La `q` dopo il `#` non viene letta.

### Quiz di conversione

(<span class="src">slide 59-67</span>) Le risposte ufficiali sono giuste (verificate); i passaggi:

| domanda | resti (dal primo all'ultimo) | risultato | controllo |
| --- | --- | --- | --- |
| $25_{10}$ in base 8 | 25:8 = 3 r **1**; 3:8 = 0 r **3** | $31_8$ | $24 + 1$ |
| $125_{10}$ in base 8 | 125:8 = 15 r **5**; 15:8 = 1 r **7**; 1:8 = 0 r **1** | $175_8$ | $64 + 56 + 5$ |
| $1024_{10}$ in base 8 | r 0, 0, 0, 2 | $2000_8$ | $2 \cdot 512$ |
| $25_{10}$ in base 16 | 25:16 = 1 r **9**; 1:16 = 0 r **1** | $19_{16}$ | $16 + 9$ |
| $255_{10}$ in base 16 | 255:16 = 15 r **15**; 15:16 = 0 r **15** | $FF_{16}$ | $240 + 15$ |
| $100_{10}$ in base 16 | 100:16 = 6 r **4**; 6:16 = 0 r **6** | $64_{16}$ | $96 + 4$ |
| $4095_{10}$ in base 16 | r 15, 15, 15 | $FFF_{16}$ | $4096 - 1$ |

$1024 = 2^{10} = 8^{3} \cdot 2$ spiega il $2000_8$; $4095 = 16^3 - 1$ spiega le tre F, come $999 = 10^3 - 1$ in decimale.

## Esercizi tipo esame

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

## Errori tipici

- Leggere i resti dal primo all'ultimo: il primo resto è la cifra **meno** significativa.
- Dimenticare l'ultima divisione (quella con quoziente 0) e perdere la cifra più significativa.
- Nelle conversioni con i gruppi, raggruppare partendo da sinistra invece che da destra, o scrivere una cifra esadecimale con meno di 4 bit (2 come `10` invece di `0010`).
- In esadecimale usare 10-15 come due cifre invece di A-F, o viceversa dimenticare di convertire le lettere nei pesi.
- Con il numero in un array, dare peso $b^0$ alla cella 0: la cella 0 contiene la cifra più significativa (slide 34, ed errore della slide 47).
- CA2: invertire i bit e dimenticare il $+1$; oppure scrivere il positivo con meno bit di $N$ prima di invertire (gli zeri a sinistra diventano gli 1 del segno).
- CA2: decodificare tutti gli $N$ bit di un negativo e poi sottrarre $2^{N-1}$ invece di $2^N$ (la slide 20 sottrae $2^{N-1}$, ma dai soli $N - 1$ bit restanti).
- Dire che c'è overflow perché "c'è un riporto in uscita": in CA2 conta solo il segno del risultato rispetto agli addendi.
- Confondere modulo e segno con CA2: `10000001` è $-1$ nel primo e $-127$ nel secondo.
- "Quanti bit per 256 valori": 8, non 9. Per i valori da 0 a 256: 9.
- Calcolare potenze intere con `exp` e `log` o con `pow` e assegnare a un `int`: il risultato `double` può essere 127.99999 e viene troncato (slide 36).
- Leggere caratteri con `scanf("%c")` e stupirsi degli a capo: lo spazio in `" %c"` li salta.

## Domande

- Che differenza c'è fra informazione, dato e rappresentazione? Fai l'esempio del byte `01100001`.

- Cos'è un sistema posizionale in base $b$? Come si calcola il valore di un numero?

- Quali naturali si rappresentano con $N$ bit? Perché un intero del calcolatore ha sempre un massimo?

- Perché l'algoritmo dei resti dà le cifre dalla meno significativa alla più significativa?

- Perché un'unica cifra ottale corrisponde a 3 bit e una esadecimale a 4? Come si converte fra queste basi senza passare dal decimale?

- Cos'è la rappresentazione in modulo e segno e quali sono i suoi due difetti?

- Quale intervallo si rappresenta in CA2 con $N$ bit? Perché è asimmetrico?

- Come si cambia segno a un numero in CA2? Come si decodifica un numero con MSB uguale a 1?

- Quali sono i due vantaggi del CA2 rispetto al modulo e segno?

- Quando c'è overflow in una somma in CA2?

- Che differenza c'è fra virgola fissa e virgola mobile? Cosa rappresentano mantissa ed esponente?

- Cos'è la tabella ASCII? Quanti valori copre lo standard e cosa sono i primi 32?

- Perché il programma della slide 36 converte `10000011` in 130 invece di 131?

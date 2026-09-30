---
version: 1
slug: "src-pages-uni"
primary_target: "src/pages/uni"
related_targets: ["src/layouts/UniLayout.astro","src/styles/uni.css"]
---

# /uni: note universitarie

Scope: `/uni/` (indice), `/uni/<materia>/` (hub di materia), `/uni/<materia>/<nota>/`. Visitor mode: **Read**.
Pubblico: Pietro sull'iPad (studio, anche la sera), i compagni di corso UniTN da telefono e laptop. Job: studiare per l'esame solo dalla nota, ritrovare una definizione, mandare a un compagno il link a una sezione precisa.
Contenuto: note Obsidian del vault (`~/Documents/notes`), sincronizzate con `npm run sync-uni`. Formule KaTeX, callout, figure SVG ricolorate, codice C. PDF dei prof non pubblicati (decisione di Pietro). `noindex`.
Vincoli: stile separato dal resto del sito (niente void, Unbounded, orbite). Direzione scelta da Pietro sulla pagina di decisione (assigned, code-led).

## Direction contract

THESIS: ogni nota è un documento a clausole numerate alla maniera dello Stacks Project e delle norme UNI: ogni sezione ha il suo numero in margine e un link permanente. Rifiuta il wiki con sidebar e il blog cream-serif.

OWN-WORLD: carta da fotocopia bianco-freddo, inchiostro quasi nero-blu, un solo accento blu biro riservato a numeri di clausola, link e termini definiti. Niente card, niente riquadri decorativi: i blocchi si separano per numero, filetto sottile e peso. Serif da lettura (Source Serif 4) per il testo accanto a KaTeX, grotesk (Archivo) per testate, numeri e apparato. Tema scuro: grafite, stesso sistema.

STORY: il lettore arriva da un link, vede materia, argomento, lezioni coperte e «Per l'esame»; scorre clausole numerate, apre dimostrazioni e soluzioni solo dopo averci provato, copia il link di una clausola per un compagno.

FIRST VIEWPORT: testata a filetto con materia a sinistra e date lezioni a destra; titolo grande in Archivo; clausola §0 «Per l'esame» come primo blocco; colonna 68ch con numeri in margine sinistro; indice numerato a destra da 1100px, a scomparsa sotto.

FORM: Registro numerato, candidato 7 della lista ordinata, seed fe236a88. Raise: bandierina di lettura persistita (cutting bench); indice di materia come serie datata di lezioni (ice press); niente riquadri, raggruppamento per peso (cathode gauze); blu solo dove si agisce o si definisce (monochrome canon).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

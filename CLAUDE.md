# marchesipietro.xyz

Sito Astro su GitHub Pages (dominio `marchesipietro.xyz`), deploy a ogni push su `main` via `.github/workflows/deploy.yml`.

## Due mondi

- `/` e il resto: tema spaziale scuro, `DESIGN.md` e `src/styles/global.css`, layout `Layout.astro`.
- `/uni/`: note universitarie, stile «Registro numerato» (carta chiara, blu biro, numeri § in margine). Layout `UniLayout.astro`, CSS `src/styles/uni.css`, contratto in `.impeccable/surfaces/src-pages-uni.md`. `noindex`, fuori dalla sitemap. Non mescolare i due stili.

## Note uni

Le note si scrivono nel vault (`~/Documents/notes`), mai qui. Per pubblicarle:

```
npm run sync-uni      vault -> src/content/uni (sovrascrive tutto)
npx astro build       deve chiudere senza errori
git add src/content/uni && git commit && git push
```

`scripts/sync-uni.mjs`: prende le note `Analisi 1 - `, `GAL - `, `Prog 1 - `, `Fisica - ` con tag `uni/<materia>` e i loro hub; risolve i wikilink, inlinea gli SVG ricolorando la palette del vault in variabili CSS (`--fig-*`), trasforma `$$…$$` su una riga in blocco, rende le Q senza risposta come elenco. I PDF dei prof non si pubblicano (decisione di Pietro): diventano chip di testo. Date e ordine delle note vengono dalla tabella `## Programma svolto`/`## Lezioni` dell'hub.

Callout Obsidian: `src/lib/remark-callouts.mjs`. Numeri di sezione e indice: `src/lib/rehype-uni-sections.mjs` (solo file in `content/uni`). KaTeX: la versione di `katex` deve restare uguale a quella interna di `rehype-katex`, altrimenti il CSS non combacia (vettori e pedici sballati).

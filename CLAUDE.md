# marchesipietro.xyz

Sito Astro su GitHub Pages (dominio `marchesipietro.xyz`), deploy a ogni push su `main` via `.github/workflows/deploy.yml`.

## Due mondi

- `/` e il resto: tema spaziale scuro, `DESIGN.md` e `src/styles/global.css`, layout `Layout.astro`.
- `/uni/`: note universitarie, stile «Registro numerato» (carta chiara, blu biro, numeri § in margine). Layout `UniLayout.astro`, CSS `src/styles/uni.css`, contratto in `.impeccable/surfaces/src-pages-uni.md`. `noindex`, fuori dalla sitemap. Non mescolare i due stili.

## Note uni

Le note si scrivono nel vault (`~/Documents/notes`), mai qui. Per pubblicarle:

```
npm run sync-uni      vault -> src/content/uni (sovrascrive tutto)
npm run build         astro build + indice Pagefind (ricerca), deve chiudere senza errori
git add src/content/uni && git commit && git push
```

`scripts/sync-uni.mjs`: prende le note `Analisi 1 - `, `GAL - `, `Prog 1 - `, `Fisica - ` con tag `uni/<materia>` e i loro hub; risolve i wikilink, inlinea gli SVG ricolorando la palette del vault in variabili CSS (`--fig-*`), trasforma `$$…$$` su una riga in blocco, rende le Q senza risposta come elenco. I PDF dei prof non si pubblicano (decisione di Pietro): diventano chip di testo. Date e ordine delle note vengono dalla tabella `## Programma svolto`/`## Lezioni` dell'hub.

Callout Obsidian: `src/lib/remark-callouts.mjs`. Crocette: un elenco `- a) … - d)` seguito da `> [!example]- Soluzione` che inizia con `**b**` diventa quiz cliccabile (rehype in `rehype-uni-sections.mjs`, script in `UniLayout.astro`); `**Vero**`/`**Falso**` nelle soluzioni prendono ✓/✗. Numeri di sezione e indice: `src/lib/rehype-uni-sections.mjs` (solo file in `content/uni`). KaTeX: la versione di `katex` deve restare uguale a quella interna di `rehype-katex`, altrimenti il CSS non combacia (vettori e pedici sballati). Dopo una modifica ai plugin markdown: `rm -rf node_modules/.astro .astro` prima della build, se no le note non cambiate restano renderizzate col plugin vecchio.

Ricerca: Pagefind (`pagefind.yml`), indicizza solo le pagine con `data-pagefind-body` (note e hub). UI nella testata di `UniLayout.astro`, scorciatoia `/`, filtro per materia. Con `astro dev` non funziona: serve `npm run build` + `npx astro preview`.

Avviso di aggiornamento: `src/components/Aggiornamento.astro` (in entrambi i layout) confronta il build della pagina con `/version.json` (`GITHUB_SHA`) e propone di ricaricare.

## Progetti collegati

Tre progetti separati sulla stessa materia. Ognuno ha accesso in lettura agli altri (`additionalDirectories` in `.claude/settings.json`), ma i loro CLAUDE.md non si caricano da qui: prima di toccare un altro progetto leggi il suo.

```
~/Documents/notes            vault Obsidian, fonte di verità delle note uni
   |  npm run sync-uni (sovrascrive src/content/uni)
   v
~/Projects/Pedronane.github.io   sito, pubblica /uni/ su marchesipietro.xyz
~/Projects/uni/prog1         esercizi C di Prog 1, codice di Pietro
                             teoria in "00 - Notes/Prog 1 - *.md" e hub "Programmazione 1.md"
```

- Una nota uni si scrive solo nel vault, mai in `src/content/uni`.
- Il codice in `~/Projects/uni` resta suo anche quando la sessione parte dal vault o dal sito.
- `40 - Journal/` resta fuori anche da qui (deny in settings).

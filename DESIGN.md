# Design

## Theme

Deep-space dark, drenched: the surface IS the void. Named reference: **Outer Wilds** — campfire warmth inside cosmic cold. Not NASA telemetry, not hacker terminal. One dominant idea per fold, long scroll, deliberate pacing. Dark only: the visitor arrives at night, alone, curious — a light theme would break the scene.

## Colors (OKLCH)

| Token | Value | Role |
|---|---|---|
| `--void` | `oklch(0.13 0.035 275)` | body background (≈ #030614 anchor) |
| `--surface` | `oklch(0.18 0.04 270)` | elevated panels, terminal, code blocks |
| `--ink` | `oklch(0.90 0.02 250)` | headings, primary text |
| `--body` | `oklch(0.80 0.025 255)` | body prose |
| `--faint` | `oklch(0.62 0.03 260)` | metadata, captions (large/mono only) |
| `--cyan` | `oklch(0.83 0.13 215)` | primary accent: links, orbits, interactive |
| `--amber` | `oklch(0.80 0.15 70)` | warm accent: stars, highlights, the "campfire" — used sparingly, it must feel precious |
| `--line` | `oklch(0.35 0.04 265 / 0.5)` | hairlines, orbit strokes |

Strategy: full palette. Cyan is the system (technical, orbital), amber is the soul (warm, human). Never both loud in the same element.

## Typography

- **Display / headings**: Unbounded (Google Fonts) — wide, cosmic, slightly playful. Weights 500–700. Ceiling `clamp(..., 5rem)`, letter-spacing ≥ -0.02em, `text-wrap: balance`.
- **Body prose**: Literata — the "heavy books" voice, warm serif built for long reading. 1.05–1.15rem, line-height 1.75 (dark bg bonus), max 70ch, `text-wrap: pretty`.
- **Technical labels / metadata / terminal**: JetBrains Mono, 0.8–0.9rem. Earned: the subject IS technical.
- Scale ratio ≥ 1.3. Pairing axis: geometric-display vs literary-serif — maximum contrast, matches "ambitious technical dreamer".

## Motif

The orbit. Recurring as: hero simulation trails, section dividers (a thin arc, not a straight `<hr>`), list bullets (small circle + orbit ring), hover states (ring expands). Stars: 2–3 sizes of subtle dots, fixed layer, some amber. No nebula gradients, no stock space photos — the imagery is generative (canvas/SVG), owned.

## Components

- **Nav**: fixed top, transparent over void, mono labels, logo = small orbit glyph.
- **Hero**: full-viewport N-body canvas (cyan trails, amber massive body), name in Unbounded over it, one-line tagline in Literata italic.
- **Prose sections**: single column, 70ch, generous `clamp()` vertical rhythm.
- **Project entries**: not cards — full-width entries with orbit-numbered headings, prose description, mono meta line (stack · year · link).
- **Writeup list**: chronological log, mono date + serif title per row, hover ring.
- **Fake terminal**: `--surface` panel, JetBrains Mono, cyan prompt `pietro@orbit:~$`.
- **Photo (about)**: blue/cyan duotone treatment, slight orbit ring frame. Placeholder until real photo.

## Motion

- Hero simulation is THE motion centerpiece; everything else stays quiet.
- Page load: single choreographed reveal on hero text (fade + small rise, ease-out-expo, 600ms). No per-section scroll reveals.
- Hover: orbit-ring expansion, 200ms ease-out-quart.
- `prefers-reduced-motion`: simulation renders one static frame with trails; reveals become instant.

## Layout

Single column, centered, max 42rem for prose; hero and 404 full-bleed. Fluid spacing `clamp(4rem, 10vh, 8rem)` between sections. Asymmetry allowed: about photo offset from the column, orbit dividers off-center.

## Bans (project-specific)

No section eyebrows/kickers repeated as grammar. No card grids. No gradient text. No skill badges. No stock space photos.

---

## /uni: Registro numerato (separate world)

Scope: everything under `/uni/` (register index, subject hub, note). Source of truth: `src/styles/uni.css`, loaded only by `src/layouts/UniLayout.astro`. Nothing above this line applies to /uni, and nothing below applies to the main site. Machine-readable tokens for both worlds live in `.impeccable/design.json`, namespaced `main.*` and `uni.*`.

### Overview

**Creative North Star: "The Numbered Register"**

Each note is a document of numbered clauses in the manner of the Stacks Project and UNI standards: every section carries its number in the left margin, and that number is a permanent link. Cold white photocopy paper, near-black blue ink, one biro-blue accent. It rejects both the sidebar wiki and the cream-serif blog. Density is study density: a 40rem serif column beside KaTeX, an apparatus of grotesk numbers and metadata around it, blocks separated by hairlines and weight instead of boxes. The dark theme is graphite, with the same system and roles.

**Key Characteristics:**
- Margin clause numbers (`§1`, `§1.2`) that copy a link to the section.
- A fixed §0 "Per l'esame" block as the first clause of every note.
- Flat paper. Hierarchy comes from rule weight, type weight and number, never from panels or shadow.
- Blue only where the reader acts or where a term is defined.
- Proofs and exercise solutions fold shut until the reader has tried.

### Colors

Cold neutrals with a single blue. Light and dark are two value sets for the same roles. Dark applies via `prefers-color-scheme` unless the reader forced `data-tema="chiaro"`, or when they force `data-tema="scuro"`. The toggle cycles auto, chiaro, scuro and persists in `localStorage['uni:tema']`.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `oklch(0.972 0.004 245)` | `oklch(0.195 0.004 262)` | page, sticky running head, `::selection` text |
| `--paper-2` | `oklch(0.945 0.007 250)` | `oklch(0.232 0.005 262)` | inline code, source refs, nav hover, register row hover |
| `--ink` | `oklch(0.21 0.022 262)` | `oklch(0.94 0.008 250)` | titles, headings, strong, table heads |
| `--ink-2` | `oklch(0.29 0.02 262)` | `oklch(0.86 0.01 252)` | body text |
| `--muted` | `oklch(0.49 0.018 260)` | `oklch(0.69 0.014 256)` | meta, dates, TOC entries, list markers, fold hints |
| `--rule` | `oklch(0.86 0.009 252)` | `oklch(0.34 0.013 262)` | minor hairlines (meta row, register rows, code, tables) |
| `--rule-strong` | `oklch(0.23 0.022 262)` | `oklch(0.86 0.01 252)` | structural rules (running head, h2 top, callout left, §0 top) |
| `--biro` | `oklch(0.45 0.19 266)` | `oklch(0.76 0.12 266)` | the accent: links, clause numbers, current nav/TOC, focus, flag |
| `--biro-ink` | `oklch(0.38 0.17 266)` | `oklch(0.82 0.1 266)` | defined terms (`strong.def`), text on the biro wash |
| `--biro-wash` | `oklch(0.925 0.035 266)` | `oklch(0.3 0.06 266)` | the "Riprendi" action background only |
| `--mark` | `oklch(0.93 0.07 95)` | `oklch(0.42 0.07 95)` | highlighter `<mark>` in prose |

Figure tokens. Vault SVGs are recolored at sync time (`scripts/sync-uni.mjs` maps their hard-coded hexes to these), so figures follow the theme:

| Token | Light | Dark | Role |
|---|---|---|---|
| `--fig-ink` | = `--ink-2` | = `--ink-2` | strokes, labels |
| `--fig-axis` | = `--muted` | = `--muted` | axes, guides |
| `--fig-accent` | = `--biro` | = `--biro` | the highlighted object |
| `--fig-accent-deep` | = `--biro-ink` | = `--biro-ink` | its darker companion |
| `--fig-steel` | `oklch(0.56 0.13 35)` | `oklch(0.74 0.12 45)` | the second object in a figure (a warm terracotta) |
| `--fig-faint` | `oklch(0.74 0.012 255)` | `oklch(0.45 0.012 260)` | construction lines, ghosts |
| `--fig-paper` | = `--paper` | = `--paper` | fills that must read as background |

**The Biro Rule.** Blue marks where you act or what is being defined: links, § numbers, the current subject and TOC entry, the defined term that opens a paragraph, the reading flag, focus and selection. Headings, rules and decoration are never blue.

**The Figure Palette Rule.** Figures take colour only through `--fig-*`. `--fig-steel` is the one second hue in the world and it lives only inside figures. Never use it in UI.

### Typography

**Body Font:** Source Serif 4 Variable, optical sizing on (Charter, Iowan Old Style, Georgia fallback)
**Apparatus Font:** Archivo Variable with the `wdth` axis (Helvetica Neue, Arial fallback)
**Mono Font:** JetBrains Mono 400 (ui-monospace fallback)

**Character:** a reading serif that sits next to KaTeX without clashing, and a slightly widened grotesk for everything that is structure: titles, numbers, meta, TOC, tables, callout titles.

- **Register display** (Archivo 700, `font-stretch: 110%`, `clamp(2.4rem, 1.4rem + 4.4vw, 4.4rem)`, line-height 0.98, `-0.03em`): the h1 of the index and subject hubs.
- **Note title** (Archivo 700, 108%, `clamp(2.1rem, 1.3rem + 3.4vw, 3.5rem)`, 1.02, `-0.025em`, balanced).
- **Clause heading h2** (Archivo 700, 106%, `clamp(1.55rem, 1.2rem + 1.2vw, 1.95rem)`, 1.12, `-0.012em`), with a 1px `--rule-strong` top rule and `3.4rem` above.
- **Sub-clause h3** (Archivo 650, 1.22rem, 1.25). h4 (650, 1.02rem) is unnumbered.
- **Body** (Source Serif 4, 1.125rem, line-height 1.62), 40rem measure, paragraph rhythm `1.05em`. Strong is 650 in `--ink`.
- **Lede** (Archivo 0.92rem, `--muted`): the first paragraph of every note, the provenance line.
- **Apparatus labels** (Archivo 0.78 to 0.9rem, tabular numerals): meta row, register dates, TOC (0.83rem), table cells (0.9rem).
- **Code** (JetBrains Mono, block 0.84rem / 1.6, inline 0.82em).

**The Two Voices Rule.** Serif is what you study; grotesk is the apparatus that locates it. Mono only for code. No uppercase, no tracked-out labels: the register has no `text-transform` anywhere.

**The Tabular Rule.** Every number that lines up (clause numbers, TOC numbers, dates, register indices, tables) uses `font-variant-numeric: tabular-nums`.

### Layout

The note is a four-column sheet grid: gutter, margin column (`--margin: 4.25rem`), text column (`--measure: 40rem`), gutter. Clause numbers hang in the margin column, right-aligned `1.15rem` off the text edge. At 1120px and up the sheet adds a `3.5rem` gap and a sticky index column (`--toc: 15.5rem`, top `4.6rem`). Register pages (`.senza-indice`) drop the index, widen the measure to 46rem and mirror the margin on the right. Gutter is `clamp(1rem, 4vw, 2.5rem)`; the sheet starts `clamp(2rem, 6vh, 3.75rem)` below the running head.

Code blocks break out of the column on the left by one margin width (from 720px) and `3rem` on the right (from 1120px), so code reads as full-width apparatus while its text still starts on the column edge.

Breakpoints: **720px** (below: margin column collapses to 0, § numbers go inline before the heading text, register rows go two-column with the date under the title, the running-head subtitle and theme label hide, the index becomes a collapsible "Indice" block above the text); **1120px** (the index column appears and the collapsible one hides).

Print hides running head, index, resume bar, colophon and prev/next, opens every fold and drops the grid.

### Elevation & Depth

Flat. No `box-shadow` for depth anywhere; the only shadow is `inset 0 -2px 0` used as the underline of the current subject in the running head. The sticky running head separates by its 1px `--rule-strong` bottom rule on solid paper, not by blur or shadow.

**The Rule Ladder Rule.** Depth is a ladder of rules: 1px `--rule` between rows and minor blocks, 1px `--rule-strong` for the running head, clause headings, callout left edges and table heads, 2px `--rule-strong` only for the §0 block top and the start of each subject in the register.

### Shapes

Square by default. Radii are tiny and functional: 2px on inline tints (code, `<mark>`, source refs, focus ring, copied-link tooltip), 3px on the few controls (theme button, nav hover, Riprendi, raster figures). Rules are the dominant form. The folding chevron is a CSS-drawn 0.5rem corner (two 1.5px borders rotated), and the warning callout marks itself with a clip-path triangle in `currentColor`.

### Components

**Running head.** Sticky, solid `--paper`, 1px `--rule-strong` bottom. "Note" in Archivo 700 at 112% width plus a muted subtitle; subject links on the right (current one in biro, 600, with a 2px inset underline); an outlined 3px theme button, min height 2.25rem, cycling auto / chiaro / scuro.

**Note meta row.** A `<dl>` in Archivo 0.85rem: subject (ink, 600, link), "Lezioni" with dates, and the status pushed right. 1px `--rule` underneath. Reused as the head of register pages.

**Clause number.** An `<a class="sec-num">` injected into every h2 and h3 by `rehype-uni-sections`: `§` at 55% opacity plus `1` or `1.2`, biro, tabular. Click copies the section URL and shows a small ink tooltip "link copiato" for 1.6s.

**§0 Per l'esame.** The first `[!abstract]` callout of a note: 2px `--rule-strong` top, 1px `--rule` bottom, a title at h2 scale, and a `§0` hung in the margin like any clause. It is the first block after the lede.

**Callouts.** Obsidian callouts become `aside` (static) or `details` (folding). Static ones: 1px `--rule-strong` left edge, `1.1rem` inset, Archivo 650 title. No per-type colour. Folding ones sit between two 1px `--rule` lines (adjacent folds share a line), chevron plus title, 2.75rem minimum target; closed examples show a muted "provaci prima" hint, closed proofs "dimostrazione", and the hint disappears on open. Question callouts fold with a serif title.

**Index.** Sticky column: "Indice" over a 1px `--rule-strong` line, entries as a `2.4rem | text | flag` grid, h2 entries 600 in `--ink-2`, h3 entries indented `0.9rem`. The current section (scroll-spy at 30% of the viewport) turns biro. Below 1120px: a folding "Indice" block with biro numbers.

**Reading flag and Riprendi.** The last clause read is stored per note (`localStorage['uni:pos:<path>']`). On return a small biro flag SVG marks it in the index, and a "Riprendi da §n title" action appears under the title: `--biro-wash` background, `--biro-ink` text, 3px radius, with a muted underlined "Ricomincia dall’inizio" button that clears it.

**Register row.** On the index and subject hubs: an ordered list of rows, grid `2.4rem | title | date`, biro index number (letters A, B for review sheets), serif 1.08rem title, Archivo 0.8rem muted date on the right, 1px `--rule` between rows. Hover tints the row with a `--paper-2` band that fades out at both ends and turns the title biro. Subjects open with a 2px `--rule-strong` line and an Archivo h2.

**Code.** No background: hairline `--rule` above and below, text coloured by Shiki's dual theme through `--shiki`. Inline code is the only tinted code (`--paper-2`, 2px).

**Tables.** Archivo 0.9rem, tabular, horizontal 1px `--rule` lines only, head on `--rule-strong`, scroll inside the column on overflow.

**Prev / next.** Two columns under a 1px `--rule-strong` line: muted "Precedente" / "Successiva" over the title in Archivo 650, which turns biro on hover.

**Motion.** One easing, `--ease: cubic-bezier(0.16, 1, 0.3, 1)`. Link underline colour 0.2s, chevron rotation 0.25s, fold body enters over 0.35s (fade plus 0.35rem rise), register row tint 0.2s. Smooth scroll and the fold animation apply only under `prefers-reduced-motion: no-preference`.

### Do's and Don'ts

**Do:**
- **Do** number every h2 and h3 in the margin and keep the number a link.
- **Do** open every note with the provenance lede and then the §0 "Per l'esame" clause.
- **Do** separate blocks with the rule ladder (1px rule, 1px rule-strong, 2px rule-strong) and type weight.
- **Do** fold proofs and exercise solutions, with the muted "try first" hint visible while closed.
- **Do** recolour every figure through `--fig-*`, and check it in both themes.
- **Do** keep touch targets at 2.75rem or more on folds and the mobile index.

**Don't:**
- **Don't** import the main site's world into /uni: no void, no Unbounded, no Literata, no cyan or amber, no orbits. The reverse holds too.
- **Don't** wrap content blocks in cards or tinted panels. Tints are for inline marks (code, `<mark>`, source refs) and the single Riprendi action.
- **Don't** give callouts per-type colours or icon sets; they differ by title, rule and fold.
- **Don't** put blue on text the reader can neither click nor is being taught as a definition.
- **Don't** use uppercase tracked labels, eyebrows or kickers above headings.
- **Don't** add shadows for depth, and don't put a background behind code blocks.
- **Don't** use `--fig-steel` or `--mark` outside figures and highlighted prose.

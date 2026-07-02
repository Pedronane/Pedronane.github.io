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

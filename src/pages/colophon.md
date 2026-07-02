---
layout: ../layouts/ProseLayout.astro
title: Colophon
description: "How this site is made: Astro, hand-ported physics, three fonts, zero trackers."
kicker: "how this is made"
---

## The machinery

- Built with **Astro 6**, statically generated, hosted on GitHub Pages. [Source is public](https://github.com/Pedronane/Pedronane.github.io).
- The solar system on the home page is a **real gravitational simulation** — the physics is ported line-by-line from my [gravity sandbox](https://github.com/Pedronane/gravity-sandbox): velocity Verlet integration, Newton's law, nothing faked. The comets you launch obey the same equations as the planets.
- The 404 page runs the same simulation with gravity switched off. That's why everything drifts.
- The starfield is generated at build time from a fixed seed — every visitor sees the same sky, and it costs zero JavaScript.

## The type

Set in **Unbounded** (headings), **Literata** (text), and **JetBrains Mono** (labels and terminal) — the same mono I use in my editor.

## The rest

- No analytics, no cookies, no trackers. I have no idea you're here, and that's fine.
- Everything respects `prefers-reduced-motion` — if you turn animations off, the sky holds still.
- There are at least two secrets on the home page. One involves a very old cheat code.

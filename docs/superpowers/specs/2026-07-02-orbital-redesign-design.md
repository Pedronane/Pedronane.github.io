# Orbital Redesign — pedronane.github.io v2

Approved 2026-07-02.

## Goal

Complete rewrite of the personal site. Purpose: personal identity (not a project showcase). Language: English. Tone: poetic-technical but readable.

## Stack

Astro 5, static output, deployed to GitHub Pages via GitHub Actions. Replaces the current vanilla single-page site entirely.

## Pages

- `/` — hero with live N-body canvas simulation, narrative about, projects
- `/writeups` + `/writeups/[slug]` — CTF writeups as an Astro content collection (markdown); ships empty with one example placeholder
- `/now` — what Pietro is doing now (markdown-driven)
- `/uses` — setup: Arch + Hyprland (illogical-impulse), neovim, homelab, rig
- `/404` — space-themed: the simulation drifting, "lost in space"

## Design system

Dark only. Background `#030614`, cyan accent, cold blue-grey text. Space Grotesk for headings, a readable serif for body text, JetBrains Mono for technical labels. Subtle fixed starfield on all pages; orbits as recurring graphic motif (dividers, bullets, hover states).

## Hero

Full-screen canvas with a real N-body simulation: JS port of the gravity-sandbox physics (integrator + trails), 10–20 bodies, theme colors. Respects `prefers-reduced-motion`; degrades to a static starfield on weak devices.

## Content rules

- About: passions (guitar, literature, Japanese, WoW) woven into the narrative — no interest card grid.
- Photo in about with blue/cyan duotone treatment — **placeholder for now, real photo added later**.
- Projects shown: Gravity Sandbox, Raspberry homelab (no mention of Discord bots or PotatoFarm).
- No skill tag lists — skills emerge from writeups and projects.

## Easter eggs

- Konami code inverts gravity in the hero simulation.
- Typing `sudo` on the home page opens a fake terminal with 4–5 explorable commands (`whoami`, `ls`, `cat roadmap.txt`, `exit`).
- Space-themed 404.

## Removed

Everything from v1: dark academia palette (gold/Garamond), interest card grid, skill tag lists, Italian copy.

---
layout: ../layouts/ProseLayout.astro
title: What I'm doing now
description: "Current mission status: exams, orbits, summer plans."
kicker: "last updated · july 2026"
---

<p class="mono-label" id="summer-bar">summer 2026 [························] --%</p>
<script is:inline>
  (() => {
    const start = Date.parse('2026-06-21');
    const end = Date.parse('2026-09-22');
    const k = Math.min(Math.max((Date.now() - start) / (end - start), 0), 1);
    const filled = Math.round(k * 24);
    document.getElementById('summer-bar').textContent =
      `summer 2026 [${'█'.repeat(filled)}${'·'.repeat(24 - filled)}] ${Math.round(k * 100)}%`;
  })();
</script>

## Right now

- **Maturità: done.** Five years of technical school, closed. Diploma in hand.
- **Gravity Sandbox.** Building the orbital mechanics track — writing the physics myself, milestone by milestone.
- **Summer plan.** Three tracks until September: the simulator, hands-on security practice, and math to arrive at university already warm.

## Next

Computer Engineering at the University of Trento this fall — new city, own place, clean slate. Between here and there: a summer of deliberate work and at least one very long bike ride.

*This is a [now page](https://nownownow.com/about). It changes when my life does.*

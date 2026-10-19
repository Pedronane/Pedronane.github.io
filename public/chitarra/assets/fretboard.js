(() => {
  const NS = "http://www.w3.org/2000/svg";
  const W = 132;
  const PAD = 16;
  const STR_GAP = 20;
  const FRET_GAP = 26;

  const el = (name, attrs) => {
    const n = document.createElementNS(NS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  };

  const parseDots = (raw) =>
    (raw || "")
      .split(",")
      .filter(Boolean)
      .map((d) => {
        const [str, fret, finger] = d.split(":");
        return { str: +str, fret: +fret, finger: finger || "" };
      });

  const nums = (raw) => (raw || "").split(",").filter(Boolean).map(Number);

  const render = (host) => {
    const frets = +(host.dataset.frets || 4);
    const start = +(host.dataset.start || 1);
    const dots = parseDots(host.dataset.dots);
    const mute = nums(host.dataset.mute);
    const open = nums(host.dataset.open);
    const H = PAD * 2 + FRET_GAP * frets + 22;

    const svg = el("svg", {
      viewBox: `0 0 ${W} ${H}`,
      width: W,
      height: H,
      role: "img",
      "aria-label": host.dataset.title || "diagramma accordo",
    });

    const x = (s) => PAD + (6 - s) * STR_GAP;
    const y = (f) => PAD + 22 + f * FRET_GAP;

    for (let s = 1; s <= 6; s++) {
      svg.appendChild(
        el("line", {
          x1: x(s), y1: y(0), x2: x(s), y2: y(frets),
          stroke: "currentColor", "stroke-width": 1, opacity: 0.55,
        })
      );
    }

    for (let f = 0; f <= frets; f++) {
      const nut = f === 0 && start === 1;
      svg.appendChild(
        el("line", {
          x1: x(6), y1: y(f), x2: x(1), y2: y(f),
          stroke: "currentColor",
          "stroke-width": nut ? 4 : 1,
          opacity: nut ? 0.9 : 0.45,
        })
      );
    }

    if (start > 1) {
      const label = el("text", {
        x: x(1) + 10, y: y(0) + 16,
        "font-size": 10, fill: "currentColor", opacity: 0.6,
        "font-family": "ui-monospace, monospace",
      });
      label.textContent = `${start}fr`;
      svg.appendChild(label);
    }

    const marker = (s, glyph) => {
      const t = el("text", {
        x: x(s), y: y(0) - 7,
        "font-size": 12, fill: "currentColor", opacity: 0.7,
        "text-anchor": "middle", "font-family": "ui-monospace, monospace",
      });
      t.textContent = glyph;
      svg.appendChild(t);
    };

    mute.forEach((s) => marker(s, "×"));
    open.forEach((s) => marker(s, "○"));

    dots.forEach((d) => {
      const cy = y(d.fret - start + 1) - FRET_GAP / 2;
      svg.appendChild(el("circle", { cx: x(d.str), cy, r: 8, fill: "currentColor" }));
      if (d.finger) {
        const t = el("text", {
          x: x(d.str), y: cy + 3.6,
          "font-size": 10, "text-anchor": "middle",
          fill: "var(--paper)", "font-family": "ui-monospace, monospace",
        });
        t.textContent = d.finger;
        svg.appendChild(t);
      }
    });

    const fig = document.createElement("figure");
    fig.className = "fretboard";
    fig.appendChild(svg);
    if (host.dataset.title) {
      const cap = document.createElement("figcaption");
      cap.textContent = host.dataset.title;
      fig.appendChild(cap);
    }
    host.replaceChildren(fig);
  };

  document.querySelectorAll("[data-fretboard]").forEach(render);
})();

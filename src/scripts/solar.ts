const GM = 520000;
const DT_MAX = 1 / 30;
const TRAIL_MAX = 80;

export interface PlanetDef {
  name: string;
  desc: string;
  href: string;
  a: number;
  e: number;
  size: number;
  color: string;
  phase: number;
  peri: number;
}

export const PLANETS: PlanetDef[] = [
  { name: 'flags', desc: 'ctf & writeups', href: '/writeups/', a: 0.15, e: 0.06, size: 4.5, color: 'oklch(0.72 0.14 25)', phase: 0.8, peri: 0.4 },
  { name: 'kernels', desc: 'linux & the homelab', href: '/uses/', a: 0.21, e: 0.03, size: 6, color: 'oklch(0.83 0.13 215)', phase: 2.6, peri: 1.9 },
  { name: '言', desc: 'japanese, one kanji at a time', href: '/chart/#nihongo', a: 0.27, e: 0.09, size: 4, color: 'oklch(0.78 0.11 350)', phase: 4.4, peri: 3.1 },
  { name: 'chords', desc: 'guitar, daily', href: '/chart/#chords', a: 0.33, e: 0.05, size: 5.5, color: 'oklch(0.78 0.13 55)', phase: 1.7, peri: 5.2 },
  { name: 'ink', desc: 'heavy books', href: '/chart/#library', a: 0.39, e: 0.12, size: 5, color: 'oklch(0.88 0.03 90)', phase: 5.6, peri: 2.4 },
  { name: 'kepler', desc: 'orbital mechanics', href: 'https://github.com/Pedronane/gravity-sandbox', a: 0.46, e: 0.17, size: 5, color: 'oklch(0.7 0.1 265)', phase: 3.5, peri: 0.9 },
];

interface Planet extends PlanetDef {
  theta: number;
  x: number;
  y: number;
  n: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  trail: { x: number; y: number }[];
}

interface Flare {
  x: number;
  y: number;
  t: number;
}

export interface SolarSim {
  invertGravity: () => boolean;
  destroy: () => void;
}

export function startSolar(canvas: HTMLCanvasElement): SolarSim {
  const ctx = canvas.getContext('2d')!;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0;
  let h = 0;
  let scale = 0;
  let inverted = false;
  let raf = 0;
  let last = 0;

  const resize = () => {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    scale = Math.min(w, h);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();

  const cx = () => w / 2;
  const cy = () => h / 2;

  const planets: Planet[] = PLANETS.map((p) => ({
    ...p,
    theta: p.phase,
    x: 0,
    y: 0,
    n: 0.55 * Math.pow(p.a / 0.21, -1.5) * (inverted ? -1 : 1),
  }));

  const comets: Comet[] = [];
  const flares: Flare[] = [];

  let hovered: Planet | null = null;
  let lastTapped: Planet | null = null;
  let tapTimer = 0;
  let dragging = false;
  let dragStart = { x: 0, y: 0 };
  let dragNow = { x: 0, y: 0 };
  let pressPlanet: Planet | null = null;
  let pressAt = 0;

  const starR = () => Math.max(6, scale * 0.016);

  function planetPos(p: Planet) {
    const r = (p.a * scale * (1 - p.e * p.e)) / (1 + p.e * Math.cos(p.theta));
    p.x = cx() + r * Math.cos(p.theta + p.peri);
    p.y = cy() + r * Math.sin(p.theta + p.peri);
    return r;
  }

  function advance(p: Planet, dt: number) {
    const r = (p.a * scale * (1 - p.e * p.e)) / (1 + p.e * Math.cos(p.theta));
    const dir = inverted ? -1 : 1;
    p.theta += dir * p.n * dt * Math.pow((p.a * scale) / r, 2);
  }

  function drawOrbit(p: Planet) {
    const a = p.a * scale;
    const b = a * Math.sqrt(1 - p.e * p.e);
    const c = a * p.e;
    ctx.save();
    ctx.translate(cx(), cy());
    ctx.rotate(p.peri);
    ctx.beginPath();
    ctx.ellipse(-c, 0, a, b, 0, 0, Math.PI * 2);
    ctx.strokeStyle = p === hovered ? 'oklch(0.5 0.06 235 / 0.75)' : 'oklch(0.35 0.04 265 / 0.35)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function drawStar() {
    ctx.beginPath();
    ctx.arc(cx(), cy(), starR(), 0, Math.PI * 2);
    ctx.fillStyle = 'oklch(0.8 0.15 70)';
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'oklch(0.8 0.15 70 / 0.9)';
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function drawPlanet(p: Planet) {
    const active = p === hovered;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size + (active ? 1.5 : 0), 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    if (active) {
      ctx.shadowBlur = 14;
      ctx.shadowColor = p.color;
    }
    ctx.fill();
    ctx.shadowBlur = 0;

    if (active) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size + 7, 0, Math.PI * 2);
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.fillStyle = 'oklch(0.9 0.02 250)';
      ctx.textAlign = 'center';
      ctx.fillText(p.name, p.x, p.y - p.size - 26);
      ctx.font = '400 11px "JetBrains Mono", monospace';
      ctx.fillStyle = 'oklch(0.68 0.03 260)';
      ctx.fillText(p.desc, p.x, p.y - p.size - 12);
    }
  }

  function drawComet(c: Comet) {
    for (let i = 1; i < c.trail.length; i++) {
      const alpha = (i / c.trail.length) * 0.55;
      ctx.beginPath();
      ctx.moveTo(c.trail[i - 1].x, c.trail[i - 1].y);
      ctx.lineTo(c.trail[i].x, c.trail[i].y);
      ctx.strokeStyle = `oklch(0.85 0.1 200 / ${alpha.toFixed(3)})`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(c.x, c.y, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = 'oklch(0.92 0.06 200)';
    ctx.fill();
  }

  function drawFlares(dt: number) {
    for (let i = flares.length - 1; i >= 0; i--) {
      const f = flares[i];
      f.t += dt;
      if (f.t > 0.6) {
        flares.splice(i, 1);
        continue;
      }
      const k = f.t / 0.6;
      ctx.beginPath();
      ctx.arc(f.x, f.y, starR() + k * 26, 0, Math.PI * 2);
      ctx.strokeStyle = `oklch(0.8 0.15 70 / ${(0.7 * (1 - k)).toFixed(3)})`;
      ctx.lineWidth = 2 * (1 - k) + 0.5;
      ctx.stroke();
    }
  }

  function cometAcc(c: Comet): [number, number] {
    const sign = inverted ? -0.35 : 1;
    const dx = cx() - c.x;
    const dy = cy() - c.y;
    const d = Math.max(Math.hypot(dx, dy), starR());
    const a = (sign * GM) / (d * d);
    let ax = (a * dx) / d;
    let ay = (a * dy) / d;
    for (const p of planets) {
      const px = p.x - c.x;
      const py = p.y - c.y;
      const pd = Math.max(Math.hypot(px, py), p.size + 2);
      const pa = (sign * GM * 0.004) / (pd * pd);
      ax += (pa * px) / pd;
      ay += (pa * py) / pd;
    }
    return [ax, ay];
  }

  function stepComets(dt: number) {
    const limit = Math.max(w, h) * 0.9;
    for (let i = comets.length - 1; i >= 0; i--) {
      const c = comets[i];
      c.x += c.vx * dt + 0.5 * c.ax * dt * dt;
      c.y += c.vy * dt + 0.5 * c.ay * dt * dt;
      const [nax, nay] = cometAcc(c);
      c.vx += 0.5 * (c.ax + nax) * dt;
      c.vy += 0.5 * (c.ay + nay) * dt;
      c.ax = nax;
      c.ay = nay;
      c.trail.push({ x: c.x, y: c.y });
      if (c.trail.length > TRAIL_MAX) c.trail.shift();

      if (Math.hypot(c.x - cx(), c.y - cy()) < starR() + 2) {
        flares.push({ x: cx(), y: cy(), t: 0 });
        comets.splice(i, 1);
      } else if (Math.hypot(c.x - cx(), c.y - cy()) > limit) {
        comets.splice(i, 1);
      }
    }
  }

  function drawAim() {
    if (!dragging) return;
    ctx.setLineDash([4, 5]);
    ctx.beginPath();
    ctx.moveTo(dragStart.x, dragStart.y);
    ctx.lineTo(dragNow.x, dragNow.y);
    ctx.strokeStyle = 'oklch(0.85 0.1 200 / 0.6)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(dragStart.x, dragStart.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'oklch(0.92 0.06 200)';
    ctx.fill();
  }

  function frame(dt: number) {
    ctx.clearRect(0, 0, w, h);
    for (const p of planets) {
      advance(p, dt);
      planetPos(p);
    }
    for (const p of planets) drawOrbit(p);
    drawStar();
    stepComets(dt);
    for (const c of comets) drawComet(c);
    drawFlares(dt);
    for (const p of planets) drawPlanet(p);
    drawAim();
  }

  if (reduced) {
    for (const p of planets) planetPos(p);
    frame(0);
  } else {
    const loop = (t: number) => {
      const dt = Math.min((t - last) / 1000 || 0.016, DT_MAX);
      last = t;
      frame(dt);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  }

  function planetAt(x: number, y: number): Planet | null {
    for (const p of planets) {
      if (Math.hypot(p.x - x, p.y - y) < Math.max(16, p.size + 11)) return p;
    }
    return null;
  }

  const pos = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onMove = (e: PointerEvent) => {
    const { x, y } = pos(e);
    if (dragging) {
      dragNow = { x, y };
      return;
    }
    if (!coarse) {
      hovered = planetAt(x, y);
      canvas.style.cursor = hovered ? 'pointer' : 'crosshair';
    }
  };

  const onDown = (e: PointerEvent) => {
    const { x, y } = pos(e);
    pressPlanet = planetAt(x, y);
    pressAt = performance.now();
    if (!pressPlanet && !reduced) {
      dragging = true;
      dragStart = { x, y };
      dragNow = { x, y };
      canvas.setPointerCapture(e.pointerId);
    }
  };

  const onUp = (e: PointerEvent) => {
    const { x, y } = pos(e);
    if (dragging) {
      dragging = false;
      const dx = dragStart.x - x;
      const dy = dragStart.y - y;
      if (Math.hypot(dx, dy) > 12 && comets.length < 12) {
        comets.push({
          x: dragStart.x,
          y: dragStart.y,
          vx: dx * 2.4,
          vy: dy * 2.4,
          ax: 0,
          ay: 0,
          trail: [],
        });
      }
      return;
    }
    const p = planetAt(x, y);
    if (p && p === pressPlanet && performance.now() - pressAt < 500) {
      if (coarse && lastTapped !== p) {
        hovered = p;
        lastTapped = p;
        clearTimeout(tapTimer);
        tapTimer = window.setTimeout(() => {
          if (hovered === p) hovered = null;
          lastTapped = null;
          if (reduced) frame(0);
        }, 2200);
        if (reduced) frame(0);
        return;
      }
      window.location.href = p.href;
    }
  };

  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointerup', onUp);

  let resizeTimer = 0;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      resize();
      if (reduced) {
        for (const p of planets) planetPos(p);
        frame(0);
      }
    }, 150);
  };
  window.addEventListener('resize', onResize);

  return {
    invertGravity() {
      inverted = !inverted;
      return inverted;
    },
    destroy() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      window.removeEventListener('resize', onResize);
    },
  };
}

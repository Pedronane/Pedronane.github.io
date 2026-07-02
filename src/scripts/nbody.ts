const G_BASE = 1;
const STAR_MASS = 520000;
const DT_MAX = 1 / 30;

interface Body {
  mass: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  radius: number;
  color: string;
}

export interface Sim {
  invertGravity: () => boolean;
  destroy: () => void;
}

function accOn(b: Body, bodies: Body[], G: number): [number, number] {
  let ax = 0;
  let ay = 0;
  for (const other of bodies) {
    if (other === b) continue;
    const dx = other.x - b.x;
    const dy = other.y - b.y;
    const d = Math.hypot(dx, dy);
    if (d < b.radius + other.radius) continue;
    const a = (G * other.mass) / (d * d);
    ax += (a * dx) / d;
    ay += (a * dy) / d;
  }
  return [ax, ay];
}

function step(bodies: Body[], dt: number, G: number) {
  for (const b of bodies) {
    b.x += b.vx * dt + 0.5 * b.ax * dt * dt;
    b.y += b.vy * dt + 0.5 * b.ay * dt * dt;
  }
  for (const b of bodies) {
    const [nax, nay] = accOn(b, bodies, G);
    b.vx += 0.5 * (b.ax + nax) * dt;
    b.vy += 0.5 * (b.ay + nay) * dt;
    b.ax = nax;
    b.ay = nay;
  }
}

function spawnOrbiter(cx: number, cy: number, rMin: number, rMax: number): Body {
  const r = rMin + Math.random() * (rMax - rMin);
  const theta = Math.random() * Math.PI * 2;
  const v = Math.sqrt((G_BASE * STAR_MASS) / r) * (0.92 + Math.random() * 0.16);
  const dir = Math.random() < 0.85 ? 1 : -1;
  const cyan = `oklch(0.83 0.13 ${205 + Math.random() * 25})`;
  return {
    mass: 2 + Math.random() * 6,
    x: cx + r * Math.cos(theta),
    y: cy + r * Math.sin(theta),
    vx: -Math.sin(theta) * v * dir,
    vy: Math.cos(theta) * v * dir,
    ax: 0,
    ay: 0,
    radius: 1.2 + Math.random() * 1.6,
    color: Math.random() < 0.15 ? 'oklch(0.8 0.15 70)' : cyan,
  };
}

export function startSim(canvas: HTMLCanvasElement): Sim {
  const ctx = canvas.getContext('2d')!;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0;
  let h = 0;
  let inverted = false;
  let raf = 0;
  let last = 0;

  const resize = () => {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();

  const cx = () => w / 2;
  const cy = () => h / 2;
  const rMax = () => Math.min(w, h) * 0.42;
  const rMin = () => Math.min(w, h) * 0.14;

  const star: Body = {
    mass: STAR_MASS, x: cx(), y: cy(), vx: 0, vy: 0, ax: 0, ay: 0,
    radius: 7, color: 'oklch(0.8 0.15 70)',
  };
  const bodies: Body[] = [star];
  const count = w < 640 ? 9 : 15;
  for (let i = 0; i < count; i++) bodies.push(spawnOrbiter(cx(), cy(), rMin(), rMax()));

  const fade = (alpha: number) => {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
  };

  const draw = () => {
    for (const b of bodies) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      if (b === star) {
        ctx.shadowBlur = 22;
        ctx.shadowColor = 'oklch(0.8 0.15 70 / 0.9)';
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  };

  const respawn = () => {
    const limit = Math.max(w, h) * 1.1;
    for (let i = 1; i < bodies.length; i++) {
      const b = bodies[i];
      if (Math.hypot(b.x - star.x, b.y - star.y) > limit) {
        bodies[i] = spawnOrbiter(cx(), cy(), rMin(), rMax());
      }
    }
  };

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    for (let i = 0; i < 900; i++) {
      step(bodies, 1 / 60, G_BASE);
      if (i % 3 === 0) {
        fade(0.012);
        draw();
      }
    }
    draw();
  } else {
    const loop = (t: number) => {
      const dt = Math.min((t - last) / 1000 || 0.016, DT_MAX);
      last = t;
      step(bodies, dt, inverted ? -G_BASE * 0.25 : G_BASE);
      if (!inverted) respawn();
      fade(0.045);
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  }

  let resizeTimer = 0;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      resize();
      star.x = cx();
      star.y = cy();
    }, 150);
  };
  window.addEventListener('resize', onResize);

  return {
    invertGravity() {
      inverted = !inverted;
      if (!inverted) {
        star.x = cx();
        star.y = cy();
        star.vx = 0;
        star.vy = 0;
        for (let i = 1; i < bodies.length; i++) bodies[i] = spawnOrbiter(cx(), cy(), rMin(), rMax());
      }
      return inverted;
    },
    destroy() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    },
  };
}

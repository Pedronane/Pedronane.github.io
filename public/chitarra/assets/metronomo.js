(() => {
  let ctx = null;

  const audio = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };

  const click = (when, accent) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = accent ? 1500 : 1000;
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(accent ? 0.9 : 0.5, when + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.06);
    osc.connect(gain).connect(ctx.destination);
    osc.start(when);
    osc.stop(when + 0.07);
  };

  const wire = (box) => {
    const min = +(box.dataset.min || 40);
    const max = +(box.dataset.max || 160);
    const out = box.querySelector("output");
    const go = box.querySelector(".metronomo-go");
    const dots = [...box.querySelectorAll(".metronomo-beats span")];
    let bpm = +(box.dataset.bpm || 60);
    let timer = null;
    let next = 0;
    let beat = 0;

    const show = () => (out.textContent = bpm);
    show();

    box.querySelectorAll("[data-step]").forEach((b) =>
      b.addEventListener("click", () => {
        bpm = Math.min(max, Math.max(min, bpm + +b.dataset.step));
        show();
      })
    );

    const light = (i, when) => {
      const delay = Math.max(0, (when - ctx.currentTime) * 1000);
      setTimeout(() => {
        if (!timer) return;
        dots.forEach((d, j) => d.classList.toggle("on", j === i));
      }, delay);
    };

    const tick = () => {
      while (next < ctx.currentTime + 0.12) {
        const i = beat % dots.length;
        click(next, i === 0);
        light(i, next);
        next += 60 / bpm;
        beat += 1;
      }
    };

    const stop = () => {
      clearInterval(timer);
      timer = null;
      dots.forEach((d) => d.classList.remove("on"));
      go.textContent = "Via";
    };

    go.addEventListener("click", () => {
      if (timer) {
        stop();
        return;
      }
      audio();
      beat = 0;
      next = ctx.currentTime + 0.08;
      timer = setInterval(tick, 25);
      tick();
      go.textContent = "Ferma";
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && timer) stop();
    });
  };

  document.querySelectorAll(".metronomo").forEach(wire);
})();

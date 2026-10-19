(() => {
  const load = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch {
      return [];
    }
  };

  const save = (key, rows) => {
    try {
      localStorage.setItem(key, JSON.stringify(rows));
      return true;
    } catch {
      return false;
    }
  };

  const wire = (box) => {
    const key = `chitarra:${box.dataset.key}`;
    const target = +box.dataset.target;
    const unit = box.dataset.unit || "";
    const input = box.querySelector("input");
    const btn = box.querySelector("button");
    const out = box.querySelector(".misura-out");
    const hist = box.querySelector(".misura-hist");

    const renderHist = (rows) => {
      hist.textContent = rows.length
        ? "Finora: " + rows.map((r) => `${r.n} (${r.d})`).join(" · ")
        : "";
    };

    renderHist(load(key));

    btn.addEventListener("click", () => {
      const n = parseInt(input.value, 10);
      if (!Number.isFinite(n) || n < 0) {
        out.textContent = "Scrivi un numero.";
        return;
      }
      const rows = load(key);
      const prev = rows.length ? rows[rows.length - 1].n : null;
      rows.push({ n, d: new Date().toLocaleDateString("it-IT", { day: "numeric", month: "short" }) });
      const stored = save(key, rows);

      const pct = Math.round((n / target) * 100);
      let msg = `${n} ${unit}: sei al ${pct}% del disco (${target}).`;
      if (prev !== null) msg += ` L'ultima volta ${prev}, ${n - prev >= 0 ? "+" : ""}${n - prev}.`;
      if (n >= target) msg += " Sei a velocità canzone.";
      if (!stored) msg += " Il browser non salva: scrivilo tu da qualche parte.";
      out.textContent = msg;
      renderHist(rows);
    });
  };

  document.querySelectorAll(".misura").forEach(wire);
})();

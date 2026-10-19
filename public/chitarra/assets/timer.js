(() => {
  const fmt = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const wire = (box) => {
    const total = +(box.dataset.seconds || 60);
    const clock = box.querySelector(".timer-clock");
    const btn = box.querySelector("button");
    let id = null;
    let left = total;

    clock.textContent = fmt(left);

    const reset = (label) => {
      clearInterval(id);
      id = null;
      left = total;
      clock.classList.remove("done");
      clock.textContent = fmt(left);
      btn.textContent = label;
    };

    btn.addEventListener("click", () => {
      if (id) {
        reset("Via");
        return;
      }

      left = total;
      clock.classList.remove("done");
      clock.textContent = fmt(left);
      btn.textContent = "Ferma";

      id = setInterval(() => {
        left -= 1;
        clock.textContent = fmt(Math.max(left, 0));
        if (left <= 0) {
          clearInterval(id);
          id = null;
          clock.classList.add("done");
          btn.textContent = "Riparti";
        }
      }, 1000);
    });
  };

  document.querySelectorAll(".timer").forEach(wire);
})();

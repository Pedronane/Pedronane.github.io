(() => {
  const wire = (quiz) => {
    const fb = quiz.querySelector(".quiz-fb");
    const opts = [...quiz.querySelectorAll(".quiz-opt")];

    opts.forEach((opt) => {
      opt.addEventListener("click", () => {
        const right = opt.dataset.correct === "true";
        opt.classList.add(right ? "right" : "wrong");
        fb.textContent = opt.dataset.feedback || "";

        if (right) {
          opts.forEach((o) => {
            o.disabled = true;
            if (o !== opt && o.dataset.correct === "true") o.classList.add("right");
          });
        }
      });
    });
  };

  document.querySelectorAll(".quiz").forEach(wire);
})();

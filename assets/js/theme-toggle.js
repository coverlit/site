document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const root = document.documentElement;

  const saved = localStorage.getItem("theme");
  if (saved) {
    root.setAttribute("data-theme", saved);
  }

  const setIcon = (theme) => {
    button.textContent = theme === "dark" ? "☀" : "☾";
  };

  setIcon(root.getAttribute("data-theme") || "light");

  button.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    setIcon(next);

    // trigger rotation animation
    button.classList.remove("spin");
    void button.offsetWidth; // forces reflow so animation re-triggers
    button.classList.add("spin");
  });
});

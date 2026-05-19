document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const root = document.documentElement;

  // Apply saved theme on load (safe, minimal)
  const saved = localStorage.getItem("theme");
  if (saved) {
    root.setAttribute("data-theme", saved);
  }

  // Set initial icon based on current theme
  const setIcon = (theme) => {
    button.textContent = theme === "dark" ? "☀" : "☾";
  };

  // Initialize icon
  setIcon(root.getAttribute("data-theme") || "light");

  button.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    setIcon(next);
  });
});

(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  // Apply saved theme on page load
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  // Toggle logic
  window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");

    if (!button) return;

    button.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");

      const next = current === "light" ? "dark" : "light";

      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  });
})();

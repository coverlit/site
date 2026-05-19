(function () {
  window.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
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

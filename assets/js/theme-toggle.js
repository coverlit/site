document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const root = document.documentElement;

  // Get saved theme or default to light
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme || "light";

  // Apply theme immediately on load
  root.setAttribute("data-theme", initialTheme);

  // Set correct icon
  const setIcon = (theme) => {
    button.textContent = theme === "dark" ? "☀" : "☾";
  };

  setIcon(initialTheme);

  button.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";

    // Apply theme
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    // Update icon immediately
    setIcon(next);

    // Restart spin animation reliably
    button.classList.remove("spin");
    void button.offsetWidth;
    button.classList.add("spin");
  });
});

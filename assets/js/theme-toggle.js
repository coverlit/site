document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const root = document.documentElement;

  // Ensure theme exists on first interaction (fallback only)
  const saved = localStorage.getItem("theme");

  if (saved) {
    root.setAttribute("data-theme", saved);
  } else if (!root.getAttribute("data-theme")) {
    // only set default if nothing was pre-set by HTML script
    root.setAttribute("data-theme", "light");
  }

  button.addEventListener("click", () => {
    const current =
      root.getAttribute("data-theme") || "light";

    const next =
      current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);

    localStorage.setItem("theme", next);
  });
});

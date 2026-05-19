document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");

  if (!button) return;

  button.addEventListener("click", () => {
    const root = document.documentElement;

    const current =
      root.getAttribute("data-theme") || "dark";

    const next =
      current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);

    localStorage.setItem("theme", next);
  });
});

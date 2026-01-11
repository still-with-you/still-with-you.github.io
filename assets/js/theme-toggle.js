/* Simple theme toggle: light/dark stored in localStorage */
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme__toggle");
  if (!button) return;

  function setTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      button.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      button.setAttribute("aria-pressed", "false");
    }
  }

  var stored = localStorage.getItem("theme");
  if (stored) {
    setTheme(stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  }

  button.addEventListener("click", function () {
    var isDark = root.getAttribute("data-theme") === "dark";
    var next = isDark ? "light" : "dark";
    localStorage.setItem("theme", next);
    setTheme(next);
  });
})();

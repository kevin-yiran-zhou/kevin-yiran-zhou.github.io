(function () {
  function syncThemeButton() {
    var button = document.querySelector("#theme-toggle button");
    if (!button) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  function syncMenuButton() {
    var button = document.querySelector("#site-nav > button");
    var menu = document.getElementById("nav-overflow");
    if (!button || !menu) return;
    var open = !menu.classList.contains("hidden");
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.jQuery) {
      window.jQuery.fn.smoothScroll = function () { return this; };
    }
    window.setTimeout(function () {
      syncThemeButton();
      syncMenuButton();
    }, 0);
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest) return;
    if (event.target.closest("#theme-toggle") || event.target.closest("#site-nav > button")) {
      window.setTimeout(function () {
        syncThemeButton();
        syncMenuButton();
      }, 0);
    }
  });

  window.addEventListener("resize", function () {
    window.setTimeout(syncMenuButton, 0);
  });
})();

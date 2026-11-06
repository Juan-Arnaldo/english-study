// Tema claro / oscuro: respeta la preferencia del sistema hasta que eliges uno.
(function () {
  var KEY = "english-theme", root = document.documentElement, saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved !== "light" && saved !== "dark") saved = null;
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  var current = function () { return saved || (mq.matches ? "dark" : "light"); };
  var btn;

  function apply() {
    var t = current();
    root.setAttribute("data-theme", t);
    if (btn) {
      btn.textContent = t === "dark" ? "☀" : "☾";
      btn.setAttribute("aria-label", t === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
      btn.title = btn.getAttribute("aria-label");
    }
  }

  apply(); // antes de pintar, para evitar parpadeo

  document.addEventListener("DOMContentLoaded", function () {
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.addEventListener("click", function () {
      saved = current() === "dark" ? "light" : "dark";
      try { localStorage.setItem(KEY, saved); } catch (e) {}
      apply();
    });
    document.body.appendChild(btn);
    apply();
  });
  if (mq.addEventListener) mq.addEventListener("change", apply);
})();

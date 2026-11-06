(function () {
  const C = window.CONTENT;
  const KEY = "english-journey-v1";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let state = { done: {} };
  try { Object.assign(state, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  const id = new URLSearchParams(location.search).get("t");
  const idx = C.tenses.findIndex((t) => t.id === id);
  const root = document.getElementById("tema");

  if (idx < 0) {
    root.innerHTML = "<h1>No encontré ese tema</h1><p><a href='index.html#estudiar'>Volver al inicio</a></p>";
    return;
  }

  const t = C.tenses[idx];
  const prev = C.tenses[idx - 1], next = C.tenses[idx + 1];
  const lessons = C.files.flatMap((f) => f.lessons.filter((l) => l.tenses.includes(t.id)));
  const list = (arr) => "<ul>" + arr.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  const section = (title, body) => "<section><h2>" + title + "</h2>" + body + "</section>";

  document.title = t.name + " · My English Journey";
  root.innerHTML =
    '<p class="eyebrow">' + esc(t.group) + "</p>" +
    "<h1>" + esc(t.name) + "</h1>" +
    section("¿Para qué se usa?", "<p>" + esc(t.es) + "</p>") +
    section(t.formLabel || "Estructura", list(t.form)) +
    (t.rules && t.rules.length ? section("Reglas", list(t.rules)) : "") +
    section("Ejemplos", list(t.examples)) +
    (t.mistakes.length ? section("Errores comunes", list(t.mistakes)) : "") +
    (t.note ? section("Mis notas", "<p>" + esc(t.note) + "</p>") : "") +
    (lessons.length ? section("En el libro", '<div class="chips">' + lessons.map((l) => '<span class="chip">File ' + esc(l.id) + "</span>").join("") + "</div>") : "") +
    '<label class="done-toggle"><input type="checkbox" id="tdone"' + (state.done["t:" + t.id] ? " checked" : "") + "> Ya lo domino</label>" +
    '<nav class="pager">' +
      (prev ? '<a href="tema.html?t=' + prev.id + '">← ' + esc(prev.name) + "</a>" : "<span></span>") +
      (next ? '<a href="tema.html?t=' + next.id + '">' + esc(next.name) + " →</a>" : "<span></span>") +
    "</nav>";

  document.getElementById("tdone").addEventListener("change", (e) => {
    state.done["t:" + t.id] = e.target.checked; save();
  });
})();

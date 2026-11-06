(function () {
  const C = window.CONTENT;
  const $ = (s) => document.querySelector(s);
  const KEY = "english-journey-v1";

  // ---- Estado (guardado en el navegador de cada persona) ----
  let state = { done: {}, notes: [], view: "tenses" };
  try { Object.assign(state, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}
  // Migra los "errores" de versiones anteriores a notas
  if (Array.isArray(state.errors) && state.errors.length) {
    state.notes = state.errors.map((e) => ({ id: String(Date.now() + Math.random()), tag: 'profe', text: e.w + ' → ' + e.r, date: new Date().toISOString() })).concat(state.notes);
    delete state.errors;
  }
  if (state.view !== "tenses" && state.view !== "files") state.view = "tenses";
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const tenseById = (id) => C.tenses.find((t) => t.id === id);
  const lessonsFor = (tid) => C.files.flatMap((f) => f.lessons.filter((l) => l.tenses.includes(tid)));

  // ---- Progreso ----
  function renderProgress() {
    const total = C.tenses.length + C.files.reduce((n, f) => n + f.lessons.length, 0);
    const done = Object.values(state.done).filter(Boolean).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    $("#barfill").style.width = pct + "%";
    $("#bar").setAttribute("aria-valuenow", pct);
    $("#progtext").textContent = done + " de " + total + " temas y lecciones completados (" + pct + "%)";
  }

  // ---- Vista: por tiempos ----
  function viewTenses() {
    return C.groups.map((g) => {
      const items = C.tenses.filter((t) => t.group === g);
      if (!items.length) return "";
      return '<h3 class="group-title">' + esc(g) + '</h3><div class="grid">' + items.map((t) => {
        const ls = lessonsFor(t.id);
        const chips = ls.length ? '<div class="chips">' + ls.map((l) => '<span class="chip">File ' + esc(l.id) + '</span>').join("") + '</div>' : "";
        return '<a class="tile ' + (state.done["t:" + t.id] ? "done" : "") + '" href="tema.html?t=' + t.id + '">' +
          '<h3>' + esc(t.name) + '</h3><p>' + esc(t.es) + '</p>' + chips + '</a>';
      }).join("") + '</div>';
    }).join("");
  }

  // ---- Vista: por unidad ----
  function viewFiles() {
    return C.files.map((f) =>
      '<details class="file"><summary>' + esc(f.title) + '</summary>' + f.lessons.map((l) => {
        const chips = l.tenses.map((id) => { const t = tenseById(id); return t ? '<a class="chip" href="tema.html?t=' + id + '">' + esc(t.name) + '</a>' : ""; }).join("");
        return '<div class="lesson"><input type="checkbox" data-lesson="' + l.id + '" id="l' + l.id + '"' + (state.done["l:" + l.id] ? " checked" : "") + '>' +
          '<label for="l' + l.id + '"><strong>' + esc(l.id) + '</strong> ' + esc(l.title) + '</label>' +
          (l.grammar ? '<span class="gr">· ' + esc(l.grammar) + '</span>' : '<span class="gr">· (pendiente de llenar)</span>') + chips + '</div>';
      }).join("") + '</details>').join("");
  }

  function renderView() {
    document.querySelectorAll(".tabs button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.view === state.view)));
    $("#view").innerHTML = state.view === "tenses" ? viewTenses() : viewFiles();
  }

  // ---- Notas recientes ----
  const TAGS = { profe: 'Corrección de la profe', gramatica: 'Gramática', vocab: 'Vocabulario', otro: 'Otro' };
  function renderNotes() {
    const n = state.notes;
    $('#notescount').textContent = n.length ? n.length + (n.length === 1 ? ' nota guardada' : ' notas guardadas') : 'Aún no tienes notas.';
    $('#noteslist').innerHTML = n.slice(0, 3).map((x) =>
      '<li><span class="chip">' + esc(TAGS[x.tag] || 'Otro') + '</span> ' + esc(x.text.length > 90 ? x.text.slice(0, 90) + '…' : x.text) + '</li>').join('');
  }

  // ---- Eventos ----
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tabs button'); if (tab) { state.view = tab.dataset.view; save(); return renderView(); }
  });
  document.addEventListener('change', (e) => {
    if (e.target.dataset.lesson) { state.done['l:' + e.target.dataset.lesson] = e.target.checked; save(); renderProgress(); }
  });

  renderProgress(); renderView(); renderNotes();
})();

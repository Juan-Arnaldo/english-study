(function () {
  const KEY = "english-journey-v1";
  const TAGS = { profe: "Corrección de la profe", gramatica: "Gramática", vocab: "Vocabulario", otro: "Otro" };
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Se lee y se guarda siempre el estado completo para no pisar el progreso.
  const load = () => {
    let s = {};
    try { s = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
    if (!Array.isArray(s.notes)) s.notes = [];
    if (Array.isArray(s.errors) && s.errors.length) { // migración de la versión anterior
      s.notes = s.errors.map((e) => ({ id: String(Date.now() + Math.random()), tag: "profe", text: e.w + " → " + e.r, date: new Date().toISOString() })).concat(s.notes);
      delete s.errors;
      write(s);
    }
    return s;
  };
  const write = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} };

  let filter = "all", editing = null;

  function renderFilters() {
    const notes = load().notes;
    const opts = [["all", "Todas"]].concat(Object.entries(TAGS));
    $("#filters").innerHTML = opts.map(([k, label]) => {
      const n = k === "all" ? notes.length : notes.filter((x) => x.tag === k).length;
      return '<button type="button" data-filter="' + k + '" aria-pressed="' + (filter === k) + '">' + esc(label) + " <span>" + n + "</span></button>";
    }).join("");
  }

  function renderNotes() {
    const notes = load().notes.filter((n) => filter === "all" || n.tag === filter);
    $("#notes").innerHTML = notes.length ? notes.map((n) =>
      '<li class="note"><div class="notehead"><span class="chip">' + esc(TAGS[n.tag] || "Otro") + "</span>" +
      '<time class="muted">' + new Date(n.date).toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" }) + "</time></div>" +
      '<p class="notebody">' + esc(n.text) + "</p>" +
      '<div class="noteactions"><button type="button" data-edit="' + n.id + '">Editar</button><button type="button" data-del="' + n.id + '">Borrar</button></div></li>'
    ).join("") : '<li class="empty muted">No hay notas aquí todavía.</li>';
  }

  function render() { renderFilters(); renderNotes(); }

  function resetForm() {
    editing = null;
    $("#noteform").reset();
    $("#notesubmit").textContent = "Guardar nota";
    $("#notecancel").hidden = true;
  }

  $("#noteform").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = $("#notetext").value.trim(); if (!text) return;
    const s = load(), tag = $("#notetag").value;
    if (editing) {
      const n = s.notes.find((x) => x.id === editing);
      if (n) { n.text = text; n.tag = tag; }
    } else {
      s.notes.unshift({ id: String(Date.now()), tag, text, date: new Date().toISOString() });
    }
    write(s); resetForm(); render();
  });

  $("#notecancel").addEventListener("click", resetForm);

  document.addEventListener("click", (e) => {
    const f = e.target.closest("[data-filter]"); if (f) { filter = f.dataset.filter; return render(); }
    const del = e.target.closest("[data-del]");
    if (del) {
      if (!confirm("¿Borrar esta nota?")) return;
      const s = load(); s.notes = s.notes.filter((x) => x.id !== del.dataset.del); write(s); return render();
    }
    const ed = e.target.closest("[data-edit]");
    if (ed) {
      const n = load().notes.find((x) => x.id === ed.dataset.edit); if (!n) return;
      editing = n.id; $("#notetext").value = n.text; $("#notetag").value = n.tag;
      $("#notesubmit").textContent = "Guardar cambios"; $("#notecancel").hidden = false;
      $("#notetext").focus(); window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  render();
})();

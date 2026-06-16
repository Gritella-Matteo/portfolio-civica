import { i as head, c as escape_html, b as attr_class, e as ensure_array_like, j as attr_style, d as stringify, a as attr } from "../../../chunks/renderer.js";
import { a as anni, s as statistiche } from "../../../chunks/data.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let anniFiltrati;
    let aperto = null;
    let filtroAnno = null;
    const formatoIcona = {
      "Programma C": "⚙️",
      "Applicazione Python": "🐍",
      "Applicazione Web (Django)": "🌐",
      "PowerPoint": "📊",
      "Testo / Ricerca": "📝",
      "Ricerca / Presentazione": "🔍"
    };
    const tipoColore = {
      "Progetto": { bg: "#F0FDF4", text: "#166534" },
      "Approfondimento": { bg: "#F5F3FF", text: "#7E22CE" }
    };
    const materiaColore = {
      "Informatica": { bg: "#EFF6FF", text: "#1D4ED8" },
      "Italiano": { bg: "#FFF7ED", text: "#C2410C" },
      "Storia": { bg: "#FEF2F2", text: "#DC2626" },
      "Sistemi": { bg: "#F0FDF4", text: "#166534" },
      "Inglese": { bg: "#FDF2F8", text: "#BE185D" }
    };
    anniFiltrati = anni;
    head("1ixeugk", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Educazione Civica — Portfolio</title>`);
      });
    });
    $$renderer2.push(`<div class="page-header svelte-1ixeugk"><div class="container"><span class="tag" style="background:rgba(255,255,255,0.15);color:var(--accent-light)">Progetti Ed. Civica</span> <h1 class="svelte-1ixeugk">Educazione Civica</h1> <p class="svelte-1ixeugk">Tutti i miei progetti organizzati per anno scolastico.</p> <div class="stats-bar svelte-1ixeugk"><div class="stat svelte-1ixeugk"><span class="stat-n svelte-1ixeugk">${escape_html(statistiche.totaleProgetti)}</span><span class="stat-l svelte-1ixeugk">Progetti totali</span></div> <div class="stat svelte-1ixeugk"><span class="stat-n svelte-1ixeugk">${escape_html(statistiche.anniCoperti)}</span><span class="stat-l svelte-1ixeugk">Anni scolastici</span></div> <div class="stat svelte-1ixeugk"><span class="stat-n svelte-1ixeugk">${escape_html(statistiche.materieDiverse)}</span><span class="stat-l svelte-1ixeugk">Materie</span></div> <div class="stat svelte-1ixeugk"><span class="stat-n svelte-1ixeugk">${escape_html(statistiche.progettiCodice)}</span><span class="stat-l svelte-1ixeugk">Progetti di codice</span></div></div></div></div> <div class="container page-body svelte-1ixeugk"><div class="filtri svelte-1ixeugk"><button${attr_class("filtro-btn svelte-1ixeugk", void 0, { "active": !filtroAnno })}>Tutti gli anni</button> <!--[-->`);
    const each_array = ensure_array_like(anni);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let anno = each_array[$$index];
      $$renderer2.push(`<button${attr_class("filtro-btn svelte-1ixeugk", void 0, { "active": filtroAnno === anno.id })}${attr_style(`--col: ${stringify(anno.colore)}`)}>${escape_html(anno.icona)} ${escape_html(anno.titolo)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <!--[-->`);
    const each_array_1 = ensure_array_like(anniFiltrati);
    for (let $$index_4 = 0, $$length = each_array_1.length; $$index_4 < $$length; $$index_4++) {
      let anno = each_array_1[$$index_4];
      $$renderer2.push(`<section class="anno-section svelte-1ixeugk"${attr("id", anno.id)}><div class="anno-header svelte-1ixeugk"${attr_style(`--col: ${stringify(anno.colore)}; --bg: ${stringify(anno.coloreFondo)}`)}><div class="anno-title svelte-1ixeugk"><span class="anno-icon-big svelte-1ixeugk">${escape_html(anno.icona)}</span> <div><h2 class="svelte-1ixeugk">${escape_html(anno.titolo)}</h2> <span class="anno-sub svelte-1ixeugk">${escape_html(anno.anno)} · ${escape_html(anno.materie.length)} progetti</span></div></div></div> <div class="progetti-list svelte-1ixeugk"><!--[-->`);
      const each_array_2 = ensure_array_like(anno.materie);
      for (let $$index_3 = 0, $$length2 = each_array_2.length; $$index_3 < $$length2; $$index_3++) {
        let prog = each_array_2[$$index_3];
        const mc = materiaColore[prog.materia] || { bg: "#F1F5F9", text: "#475569" };
        const tc = tipoColore[prog.tipo] || { bg: "#F8FAFC", text: "#64748B" };
        $$renderer2.push(`<article${attr_class("progetto-card svelte-1ixeugk", void 0, { "expanded": aperto === prog.id })}><button class="prog-header svelte-1ixeugk"${attr("aria-expanded", aperto === prog.id)}><div class="prog-meta svelte-1ixeugk"><span class="badge svelte-1ixeugk"${attr_style(`background:${stringify(mc.bg)};color:${stringify(mc.text)}`)}>${escape_html(prog.materia)}</span> <span class="badge svelte-1ixeugk"${attr_style(`background:${stringify(tc.bg)};color:${stringify(tc.text)}`)}>${escape_html(prog.tipo)}</span> <span class="formato-pill svelte-1ixeugk">${escape_html(formatoIcona[prog.formato] || "📄")} ${escape_html(prog.formato)}</span></div> <div class="prog-title-row svelte-1ixeugk"><h3 class="svelte-1ixeugk">${escape_html(prog.titolo)}</h3> <span class="expand-icon svelte-1ixeugk">${escape_html(aperto === prog.id ? "▲" : "▼")}</span></div> <p class="prog-preview svelte-1ixeugk">${escape_html(prog.riassunto.slice(0, 140))}…</p></button> `);
        if (aperto === prog.id) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="prog-body svelte-1ixeugk"><hr class="divider"/> <p class="prog-full svelte-1ixeugk">${escape_html(prog.riassunto)}</p> <div class="punti-chiave svelte-1ixeugk"><h4 class="svelte-1ixeugk">📌 Punti chiave</h4> <ul class="svelte-1ixeugk"><!--[-->`);
          const each_array_3 = ensure_array_like(prog.puntiChiave);
          for (let $$index_1 = 0, $$length3 = each_array_3.length; $$index_1 < $$length3; $$index_1++) {
            let punto = each_array_3[$$index_1];
            $$renderer2.push(`<li class="svelte-1ixeugk">${escape_html(punto)}</li>`);
          }
          $$renderer2.push(`<!--]--></ul></div> `);
          if (prog.note) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div class="nota svelte-1ixeugk"><span class="svelte-1ixeugk">💡</span> <p class="svelte-1ixeugk">${escape_html(prog.note)}</p></div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]--> `);
          if (prog.tags && prog.tags.length) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div class="tags-row svelte-1ixeugk"><!--[-->`);
            const each_array_4 = ensure_array_like(prog.tags);
            for (let $$index_2 = 0, $$length3 = each_array_4.length; $$index_2 < $$length3; $$index_2++) {
              let t = each_array_4[$$index_2];
              $$renderer2.push(`<span class="tag-small svelte-1ixeugk">${escape_html(t)}</span>`);
            }
            $$renderer2.push(`<!--]--></div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></article>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};

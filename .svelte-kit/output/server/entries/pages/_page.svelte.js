import { i as head, b as attr_class, c as escape_html, a as attr, e as ensure_array_like, j as attr_style, d as stringify } from "../../chunks/renderer.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import { a as anni, s as statistiche } from "../../chunks/data.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    const highlights = anni.map((a) => ({
      icona: a.icona,
      titolo: a.titolo,
      anno: a.anno,
      n: a.materie.length,
      colore: a.colore,
      coloreFondo: a.coloreFondo,
      href: `${base}/educazione-civica#${a.id}`
    }));
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Portfolio Scolastico</title>`);
      });
    });
    $$renderer2.push(`<section${attr_class("hero svelte-1uha8ag", void 0, { "visible": visible })}><div class="container hero-inner svelte-1uha8ag"><div class="hero-text svelte-1uha8ag"><span class="tag">Portfolio Scolastico 2025–26</span> <h1 class="svelte-1uha8ag">I miei progetti di <em class="svelte-1uha8ag">Educazione Civica</em></h1> <p class="hero-sub svelte-1uha8ag">Raccolta di tutti i lavori svolti durante il percorso scolastico: programmi, ricerche e presentazioni
        organizzati anno per anno.</p> <div class="hero-stats svelte-1uha8ag"><div class="hs svelte-1uha8ag"><span class="hs-n svelte-1uha8ag">${escape_html(statistiche.totaleProgetti)}</span><span class="hs-l svelte-1uha8ag">Progetti</span></div> <div class="hs svelte-1uha8ag"><span class="hs-n svelte-1uha8ag">${escape_html(statistiche.anniCoperti)}</span><span class="hs-l svelte-1uha8ag">Anni</span></div> <div class="hs svelte-1uha8ag"><span class="hs-n svelte-1uha8ag">${escape_html(statistiche.materieDiverse)}</span><span class="hs-l svelte-1uha8ag">Materie</span></div> <div class="hs svelte-1uha8ag"><span class="hs-n svelte-1uha8ag">${escape_html(statistiche.progettiCodice)}</span><span class="hs-l svelte-1uha8ag">Progetti codice</span></div></div> <div class="hero-cta svelte-1uha8ag"><a${attr("href", `${stringify(base)}/educazione-civica`)} class="btn-primary">Vedi tutti i progetti →</a> <a${attr("href", `${stringify(base)}/chi-sono`)} class="btn-secondary svelte-1uha8ag">Chi sono</a></div></div> <div class="hero-deco svelte-1uha8ag" aria-hidden="true"><div class="deco-ring svelte-1uha8ag"></div> <div class="deco-dot d1 svelte-1uha8ag"></div> <div class="deco-dot d2 svelte-1uha8ag"></div> <span class="deco-text svelte-1uha8ag">📚</span></div></div></section> <section class="section anni-section"><div class="container"><div class="section-header svelte-1uha8ag"><span class="tag green">Educazione Civica</span> <h2 class="svelte-1uha8ag">Progetti per anno scolastico</h2> <p class="svelte-1uha8ag">Clicca su un anno per vedere tutti i progetti di quella classe.</p></div> <div class="anni-grid svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(highlights);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let h = each_array[i];
      $$renderer2.push(`<a${attr("href", h.href)} class="anno-card svelte-1uha8ag"${attr_style(`--col: ${stringify(h.colore)}; --bg: ${stringify(h.coloreFondo)}; animation-delay: ${stringify(i * 100)}ms`)}><span class="anno-icon svelte-1uha8ag">${escape_html(h.icona)}</span> <div class="anno-info svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(h.titolo)}</h3> <p class="anno-anno svelte-1uha8ag">${escape_html(h.anno)}</p> <p class="anno-n svelte-1uha8ag">${escape_html(h.n)} progetti</p></div> <span class="anno-arrow svelte-1uha8ag">→</span></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section about-preview"><div class="container"><div class="about-banner svelte-1uha8ag"><div class="about-banner-text svelte-1uha8ag"><span class="tag" style="background:rgba(255,255,255,0.15);color:var(--accent-light)">Chi sono</span> <h2 class="svelte-1uha8ag">Un po' di me</h2> <p class="svelte-1uha8ag">Studente appassionato di tecnologia, programmazione e attualità. Scopri qualcosa di più sulla mia storia.</p> <a${attr("href", `${stringify(base)}/chi-sono`)} class="btn-primary" style="margin-top:1.5rem;align-self:flex-start">Scopri di più →</a></div> <div class="about-deco svelte-1uha8ag" aria-hidden="true"><div class="avatar-circle svelte-1uha8ag"><img${attr("src", `${stringify(base)}/foto.jpg`)} alt="Matteo Gritella" class="svelte-1uha8ag"/></div></div></div></div></section>`);
  });
}
export {
  _page as default
};

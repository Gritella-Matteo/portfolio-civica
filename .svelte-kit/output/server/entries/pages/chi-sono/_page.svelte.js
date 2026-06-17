import { i as head, b as attr_class, a as attr, e as ensure_array_like, c as escape_html, j as attr_style, d as stringify } from "../../../chunks/renderer.js";
import { b as base } from "../../../chunks/server.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/data.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    const interessi = [
      { icona: "💻", label: "Programmazione" },
      { icona: "🔐", label: "Cybersecurity" },
      { icona: "🎮", label: "Videogiochi" },
      { icona: "⚽", label: "Sport" },
      { icona: "💵", label: "Economia" }
    ];
    const linguaggi = [
      { nome: "C", livello: 75, icona: "⚙️" },
      { nome: "Python", livello: 80, icona: "🐍" },
      { nome: "Django", livello: 65, icona: "🌐" },
      { nome: "HTML/CSS", livello: 70, icona: "🎨" }
    ];
    const timeline = [
      {
        anno: "3ª Superiore",
        evento: "Primo progetto in C",
        desc: "Calcolatore del Codice Fiscale — il mio primo programma completo."
      },
      {
        anno: "4ª Superiore",
        evento: "Python e applicazioni",
        desc: "Quiz della patente: primo progetto Python con logica di esame reale."
      },
      {
        anno: "5ª Superiore",
        evento: "Web development con Django",
        desc: "Replica del sito 1522 — primo progetto web completo."
      }
    ];
    head("1pus5th", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Chi sono — Portfolio</title>`);
      });
    });
    $$renderer2.push(`<div${attr_class("hero-chi svelte-1pus5th", void 0, { "visible": visible })}><div class="container hero-inner svelte-1pus5th"><div class="avatar-circle svelte-1pus5th"><img${attr("src", `${stringify(base)}/foto.jpg`)} alt="Matteo Gritella" class="svelte-1pus5th"/></div> <div class="hero-text svelte-1pus5th"><span class="tag" style="background:rgba(255,255,255,0.15);color:var(--accent-light)">Presentazione</span> <h1 class="svelte-1pus5th">Ciao, sono <em class="svelte-1pus5th">Matteo Gritella</em></h1> <p class="hero-bio svelte-1pus5th">Studente di quinta superiore appassionato di tecnologia e sport.
        Durante il percorso scolastico ho realizzato programmi in C, Python e Django,
        esplorando anche temi di attualità, storia e diritti civili.</p> <div class="hero-badges svelte-1pus5th"><span class="badge svelte-1pus5th">📍 Torino, Italia</span> <span class="badge svelte-1pus5th">🎓 5ª Superiore</span></div></div></div></div> <div class="container page-content svelte-1pus5th"><section class="section two-col svelte-1pus5th"><div class="text-block svelte-1pus5th"><span class="tag svelte-1pus5th">La mia storia</span> <h2 class="svelte-1pus5th">In breve, chi sono</h2> <p class="svelte-1pus5th">Sono uno studente con una forte passione per la tecnologia e per lo sport.
        Ho scelto l'indirizzo Informatica perché era quello che mi interessava maggiormente,
        è un settore in costante evoluzione.</p> <p class="svelte-1pus5th">Mi interessa capire come funzionano le cose, che si tratti di un
        algoritmo, di un'istituzione politica o di un fenomeno sociale. L'educazione civica
        mi ha aiutato a connettere il mondo della tecnologia con quello dei diritti e della
        società.</p> <p class="svelte-1pus5th">Nel tempo libero amo giocare ai videogiochi, seguire l'attualità internazionale
        e fare sport.</p></div> <div class="side-block svelte-1pus5th"><h3 class="svelte-1pus5th">I miei interessi</h3> <div class="interests-grid svelte-1pus5th"><!--[-->`);
    const each_array = ensure_array_like(interessi);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let int = each_array[$$index];
      $$renderer2.push(`<div class="interest-pill svelte-1pus5th"><span>${escape_html(int.icona)}</span> <span>${escape_html(int.label)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="quote-box svelte-1pus5th"><blockquote class="svelte-1pus5th">"Il codice è come la poesia: entrambi devono essere chiari, eleganti e potenti."</blockquote> <cite class="svelte-1pus5th">— Un programmatore anonimo</cite></div></div></section> <hr class="divider"/> <section class="section svelte-1pus5th"><span class="tag blue">Competenze tecniche</span> <h2 class="svelte-1pus5th">Linguaggi imparati a scuola</h2> <p style="color:var(--ink-muted);margin:0.75rem 0 2rem;max-width:45ch">I linguaggi e le tecnologie che ho usato nei miei progetti scolastici.</p> <div class="linguaggi-grid svelte-1pus5th"><!--[-->`);
    const each_array_1 = ensure_array_like(linguaggi);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let l = each_array_1[$$index_1];
      $$renderer2.push(`<div class="linguaggio-card svelte-1pus5th"><div class="ling-top svelte-1pus5th"><span class="ling-icon svelte-1pus5th">${escape_html(l.icona)}</span> <span class="ling-nome svelte-1pus5th">${escape_html(l.nome)}</span> <span class="ling-perc svelte-1pus5th">${escape_html(l.livello)}%</span></div> <div class="progress-bar svelte-1pus5th"><div class="progress-fill svelte-1pus5th"${attr_style(`width:${stringify(l.livello)}%`)}></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <hr class="divider"/> <section class="section svelte-1pus5th"><span class="tag">Evoluzione</span> <h2 class="svelte-1pus5th">Il mio percorso con il codice</h2> <p style="color:var(--ink-muted);margin:0.75rem 0 2.5rem;max-width:45ch">Come sono cresciuto come programmatore anno dopo anno.</p> <div class="timeline svelte-1pus5th"><!--[-->`);
    const each_array_2 = ensure_array_like(timeline);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let step = each_array_2[$$index_2];
      $$renderer2.push(`<div class="timeline-item svelte-1pus5th"><div class="timeline-dot svelte-1pus5th"></div> <div class="timeline-card svelte-1pus5th"><span class="tl-anno svelte-1pus5th">${escape_html(step.anno)}</span> <h4 class="svelte-1pus5th">${escape_html(step.evento)}</h4> <p class="svelte-1pus5th">${escape_html(step.desc)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="obiettivi-section svelte-1pus5th"><h2 class="svelte-1pus5th">I miei obiettivi</h2> <div class="obj-grid svelte-1pus5th"><div class="obj-card svelte-1pus5th"><span class="obj-icon svelte-1pus5th">🎓</span> <h4 class="svelte-1pus5th">Diploma</h4> <p class="svelte-1pus5th">Concludere il percorso con ottimi risultati e una maturità di cui essere orgoglioso.</p></div> <div class="obj-card svelte-1pus5th"><span class="obj-icon svelte-1pus5th">📊</span> <h4 class="svelte-1pus5th">Università di economia o scienze motorie sportive</h4> <p class="svelte-1pus5th">Iscriversi a un corso di Economia aziendale o un corso di Scienze Motorie Sportive.</p></div></div></section></div>`);
  });
}
export {
  _page as default
};

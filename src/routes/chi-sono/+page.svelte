<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { statistiche } from '$lib/data.js';

  let visible = false;
  onMount(() => setTimeout(() => visible = true, 100));

  const interessi = [
    { icona: '💻', label: 'Programmazione' },
    { icona: '🔐', label: 'Cybersecurity' },
    { icona: '🎮', label: 'Videogiochi' },
    { icona: '⚽', label: 'Sport' },
    { icona: '💵', label: 'Economia' },
  ];

  const linguaggi = [
    { nome: 'C', livello: 75, icona: '⚙️' },
    { nome: 'Python', livello: 80, icona: '🐍' },
    { nome: 'Django', livello: 65, icona: '🌐' },
    { nome: 'HTML/CSS', livello: 70, icona: '🎨' },
  ];

  const timeline = [
    { anno: '3ª Superiore', evento: 'Primo progetto in C', desc: 'Calcolatore del Codice Fiscale — il mio primo programma completo.' },
    { anno: '4ª Superiore', evento: 'Python e applicazioni', desc: 'Quiz della patente: primo progetto Python con logica di esame reale.' },
    { anno: '5ª Superiore', evento: 'Web development con Django', desc: 'Replica del sito 1522 — primo progetto web completo.' },
  ];
</script>

<svelte:head><title>Chi sono — Portfolio</title></svelte:head>

<div class="hero-chi" class:visible>
  <div class="container hero-inner">
    <div class="avatar-circle">
      <img src="{base}/foto.jpg" alt="Matteo Gritella" />
    </div>
    <div class="hero-text">
      <span class="tag" style="background:rgba(255,255,255,0.15);color:var(--accent-light)">Presentazione</span>
      <h1>Ciao, sono <em>Matteo Gritella</em></h1>
      <p class="hero-bio">
        Studente di quinta superiore appassionato di tecnologia e sport.
        Durante il percorso scolastico ho realizzato programmi in C, Python e Django,
        esplorando anche temi di attualità, storia e diritti civili.
      </p>
      <div class="hero-badges">
        <span class="badge">📍 Torino, Italia</span>
        <span class="badge">🎓 5ª Superiore</span>
      </div>
    </div>
  </div>
</div>

<div class="container page-content">

  <section class="section two-col">
    <div class="text-block">
      <span class="tag">La mia storia</span>
      <h2>In breve, chi sono</h2>
      <p>
        Sono uno studente con una forte passione per la tecnologia e per lo sport.
        Ho scelto l'indirizzo Informatica perché era quello che mi interessava maggiormente,
        è un settore in costante evoluzione.
      </p>
      <p>
        Mi interessa capire come funzionano le cose, che si tratti di un
        algoritmo, di un'istituzione politica o di un fenomeno sociale. L'educazione civica
        mi ha aiutato a connettere il mondo della tecnologia con quello dei diritti e della
        società.
      </p>
      <p>
        Nel tempo libero amo giocare ai videogiochi, seguire l'attualità internazionale
        e fare sport.
      </p>
    </div>

    <div class="side-block">
      <h3>I miei interessi</h3>
      <div class="interests-grid">
        {#each interessi as int}
          <div class="interest-pill">
            <span>{int.icona}</span>
            <span>{int.label}</span>
          </div>
        {/each}
      </div>

      <div class="quote-box">
        <blockquote>"Il codice è come la poesia: entrambi devono essere chiari, eleganti e potenti."</blockquote>
        <cite>— Un programmatore anonimo</cite>
      </div>
    </div>
  </section>

  <hr class="divider" />

  <section class="section">
    <span class="tag blue">Competenze tecniche</span>
    <h2>Linguaggi imparati a scuola</h2>
    <p style="color:var(--ink-muted);margin:0.75rem 0 2rem;max-width:45ch">
      I linguaggi e le tecnologie che ho usato nei miei progetti scolastici.
    </p>
    <div class="linguaggi-grid">
      {#each linguaggi as l}
        <div class="linguaggio-card">
          <div class="ling-top">
            <span class="ling-icon">{l.icona}</span>
            <span class="ling-nome">{l.nome}</span>
            <span class="ling-perc">{l.livello}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width:{l.livello}%"></div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <hr class="divider" />

  <section class="section">
    <span class="tag">Evoluzione</span>
    <h2>Il mio percorso con il codice</h2>
    <p style="color:var(--ink-muted);margin:0.75rem 0 2.5rem;max-width:45ch">
      Come sono cresciuto come programmatore anno dopo anno.
    </p>
    <div class="timeline">
      {#each timeline as step}
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="tl-anno">{step.anno}</span>
            <h4>{step.evento}</h4>
            <p>{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="obiettivi-section">
    <h2>I miei obiettivi</h2>
    <div class="obj-grid">
      <div class="obj-card">
        <span class="obj-icon">🎓</span>
        <h4>Diploma</h4>
        <p>Concludere il percorso con ottimi risultati e una maturità di cui essere orgoglioso.</p>
      </div>
      <div class="obj-card">
        <span class="obj-icon">📊</span>
        <h4>Università di economia o scienze motorie sportive</h4>
        <p>Iscriversi a un corso di Economia aziendale o un corso di Scienze Motorie Sportive.</p>
      </div>
    </div>
  </section>

</div>

<style>
  .avatar-circle img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
  .hero-chi { background: linear-gradient(135deg, #1C1917 0%, #292524 100%); padding: 5rem 0 4rem; opacity: 0; transform: translateY(16px); transition: all 0.7s ease; }
  .hero-chi.visible { opacity: 1; transform: translateY(0); }
  .hero-inner { display: flex; align-items: center; gap: 3rem; flex-wrap: wrap; }
  .avatar-circle { width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 3px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 3.5rem; flex-shrink: 0; overflow: hidden; }
  .hero-text { display: flex; flex-direction: column; gap: 1rem; flex: 1; }
  .hero-text h1 { font-size: clamp(1.8rem, 4vw, 3rem); color: white; }
  .hero-text h1 em { color: var(--accent-light); font-style: italic; }
  .hero-bio { color: rgba(255,255,255,0.7); max-width: 52ch; line-height: 1.7; font-size: 1rem; }
  .hero-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .badge { padding: 5px 14px; background: rgba(255,255,255,0.1); border-radius: 100px; font-size: 0.85rem; color: rgba(255,255,255,0.8); }

  .page-content { padding-bottom: 5rem; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
  .text-block { display: flex; flex-direction: column; gap: 1rem; }
  .text-block .tag { align-self: flex-start; }
  .text-block h2 { font-size: 2rem; color: var(--ink); }
  .text-block p { color: var(--ink-muted); line-height: 1.75; font-size: 0.95rem; }

  .side-block { display: flex; flex-direction: column; gap: 1.5rem; }
  .side-block h3 { font-size: 1.05rem; color: var(--ink); }

  .interests-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem; }
  .interest-pill { display: flex; align-items: center; gap: 0.6rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius-md); font-size: 0.88rem; color: var(--ink-muted); transition: all 0.2s; }
  .interest-pill:hover { border-color: var(--accent); color: var(--ink); }

  .quote-box { padding: 1.25rem; background: var(--cream); border-left: 3px solid var(--accent); border-radius: 0 var(--radius-md) var(--radius-md) 0; }
  blockquote { font-family: var(--font-display); font-style: italic; color: var(--ink); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0.5rem; }
  cite { font-size: 0.78rem; color: var(--ink-faint); }

  .section h2 { font-size: 2rem; color: var(--ink); margin-top: 0.75rem; }

  .linguaggi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.25rem; }
  .linguaggio-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
  .ling-top { display: flex; align-items: center; gap: 0.75rem; }
  .ling-icon { font-size: 1.5rem; }
  .ling-nome { font-weight: 500; font-size: 0.95rem; flex: 1; }
  .ling-perc { font-size: 0.85rem; color: var(--ink-faint); }
  .progress-bar { height: 6px; background: var(--border); border-radius: 100px; overflow: hidden; }
  .progress-fill { height: 100%; background: var(--accent); border-radius: 100px; }

  .timeline { display: flex; flex-direction: column; gap: 1.5rem; padding-left: 2rem; position: relative; }
  .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--border); }
  .timeline-item { position: relative; padding-left: 1.5rem; }
  .timeline-dot { position: absolute; left: -2.5rem; top: 0.75rem; width: 12px; height: 12px; border-radius: 50%; background: var(--accent); border: 3px solid var(--cream); }
  .timeline-card { padding: 1.25rem; background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius-md); }
  .tl-anno { font-size: 0.72rem; color: var(--accent); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
  .timeline-card h4 { font-size: 1rem; color: var(--ink); margin: 0.25rem 0; font-family: var(--font-display); }
  .timeline-card p { font-size: 0.87rem; color: var(--ink-muted); }

  .obiettivi-section { padding: 3rem; background: var(--ink); border-radius: var(--radius-lg); margin-top: 2rem; }
  .obiettivi-section h2 { color: white; font-size: 1.8rem; margin-bottom: 2rem; }
  .obj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.25rem; }
  .obj-card { padding: 1.5rem; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius-md); }
  .obj-icon { font-size: 2rem; display: block; margin-bottom: 0.75rem; }
  .obj-card h4 { color: white; font-size: 1rem; margin-bottom: 0.5rem; font-family: var(--font-display); }
  .obj-card p { color: rgba(255,255,255,0.6); font-size: 0.87rem; line-height: 1.6; }

  @media (max-width: 768px) {
    .two-col { grid-template-columns: 1fr; gap: 2rem; }
    .hero-inner { flex-direction: column; text-align: center; }
    .hero-badges { justify-content: center; }
    .obiettivi-section { padding: 2rem 1.25rem; }
  }
</style>
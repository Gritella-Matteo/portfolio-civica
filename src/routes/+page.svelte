<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { anni, statistiche } from '$lib/data.js';

  let visible = false;
  onMount(() => setTimeout(() => visible = true, 100));

  const highlights = anni.map(a => ({
    icona: a.icona,
    titolo: a.titolo,
    anno: a.anno,
    n: a.materie.length,
    colore: a.colore,
    coloreFondo: a.coloreFondo,
    href: `${base}/educazione-civica#${a.id}`
  }));
</script>

<svelte:head><title>Portfolio Scolastico</title></svelte:head>

<section class="hero" class:visible>
  <div class="container hero-inner">
    <div class="hero-text">
      <span class="tag">Portfolio Scolastico 2025–26</span>
      <h1>I miei progetti di <em>Educazione Civica</em></h1>
      <p class="hero-sub">
        Raccolta di tutti i lavori svolti durante il percorso scolastico: programmi, ricerche e presentazioni
        organizzati anno per anno.
      </p>
      <div class="hero-stats">
        <div class="hs"><span class="hs-n">{statistiche.totaleProgetti}</span><span class="hs-l">Progetti</span></div>
        <div class="hs"><span class="hs-n">{statistiche.anniCoperti}</span><span class="hs-l">Anni</span></div>
        <div class="hs"><span class="hs-n">{statistiche.materieDiverse}</span><span class="hs-l">Materie</span></div>
        <div class="hs"><span class="hs-n">{statistiche.progettiCodice}</span><span class="hs-l">Progetti codice</span></div>
      </div>
      <div class="hero-cta">
        <a href="{base}/educazione-civica" class="btn-primary">Vedi tutti i progetti →</a>
        <a href="{base}/chi-sono" class="btn-secondary">Chi sono</a>
      </div>
    </div>
    <div class="hero-deco" aria-hidden="true">
      <div class="deco-ring"></div>
      <div class="deco-dot d1"></div>
      <div class="deco-dot d2"></div>
      <span class="deco-text">📚</span>
    </div>
  </div>
</section>

<section class="section anni-section">
  <div class="container">
    <div class="section-header">
      <span class="tag green">Educazione Civica</span>
      <h2>Progetti per anno scolastico</h2>
      <p>Clicca su un anno per vedere tutti i progetti di quella classe.</p>
    </div>
    <div class="anni-grid">
      {#each highlights as h, i}
        <a href={h.href} class="anno-card" style="--col: {h.colore}; --bg: {h.coloreFondo}; animation-delay: {i*100}ms">
          <span class="anno-icon">{h.icona}</span>
          <div class="anno-info">
            <h3>{h.titolo}</h3>
            <p class="anno-anno">{h.anno}</p>
            <p class="anno-n">{h.n} progetti</p>
          </div>
          <span class="anno-arrow">→</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section about-preview">
  <div class="container">
    <div class="about-banner">
      <div class="about-banner-text">
        <span class="tag" style="background:rgba(255,255,255,0.15);color:var(--accent-light)">Chi sono</span>
        <h2>Un po' di me</h2>
        <p>Studente appassionato di tecnologia, programmazione e attualità. Scopri qualcosa di più sulla mia storia.</p>
        <a href="{base}/chi-sono" class="btn-primary" style="margin-top:1.5rem;align-self:flex-start">Scopri di più →</a>
      </div>
      <div class="about-deco" aria-hidden="true">
        <div class="avatar-circle">
          <img src="{base}/foto.jpg" alt="Matteo Gritella" />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero { padding: 6rem 0 4rem; opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .hero.visible { opacity: 1; transform: translateY(0); }
  .hero-inner { display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: center; }
  .hero-text { display: flex; flex-direction: column; gap: 1.25rem; }
  .hero-text h1 { font-size: clamp(2.2rem, 4.5vw, 3.5rem); color: var(--ink); max-width: 18ch; }
  .hero-text h1 em { color: var(--accent); font-style: italic; }
  .hero-sub { font-size: 1.05rem; color: var(--ink-muted); max-width: 50ch; line-height: 1.7; }

  .hero-stats { display: flex; gap: 2rem; flex-wrap: wrap; }
  .hs { display: flex; flex-direction: column; }
  .hs-n { font-size: 2rem; font-weight: 300; font-family: var(--font-display); color: var(--ink); }
  .hs-l { font-size: 0.75rem; color: var(--ink-faint); text-transform: uppercase; letter-spacing: 0.06em; }

  .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-secondary { display: inline-block; padding: 12px 24px; background: transparent; color: var(--ink-muted); border-radius: 100px; font-size: 0.95rem; border: 1px solid var(--border); transition: all 0.2s; }
  .btn-secondary:hover { background: var(--border); color: var(--ink); }

  .hero-deco { position: relative; width: 180px; height: 180px; flex-shrink: 0; }
  .deco-ring { width: 160px; height: 160px; border-radius: 50%; border: 2px dashed var(--border); position: absolute; top: 10px; left: 10px; animation: spin 30s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .deco-dot { position: absolute; border-radius: 50%; background: var(--accent); }
  .d1 { width: 12px; height: 12px; top: 0; left: 80px; opacity: 0.8; }
  .d2 { width: 8px; height: 8px; bottom: 20px; left: 0; opacity: 0.5; }
  .deco-text { position: absolute; font-size: 3.5rem; top: 50%; left: 50%; transform: translate(-50%, -50%); }

  .section-header { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2.5rem; }
  .section-header h2 { font-size: 2rem; color: var(--ink); }
  .section-header p { color: var(--ink-muted); max-width: 50ch; }

  .anni-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }

  .anno-card {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.5rem;
    background: var(--bg, var(--card-bg));
    border: 1px solid color-mix(in srgb, var(--col) 25%, transparent);
    border-radius: var(--radius-lg);
    transition: all 0.25s;
    animation: fadeUp 0.5s ease both;
  }
  .anno-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px color-mix(in srgb, var(--col) 15%, transparent); border-color: var(--col); }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

  .anno-icon { font-size: 2.5rem; flex-shrink: 0; }
  .anno-info { flex: 1; }
  .anno-info h3 { font-size: 1.15rem; color: var(--ink); margin-bottom: 2px; }
  .anno-anno { font-size: 0.8rem; color: var(--ink-faint); }
  .anno-n { font-size: 0.85rem; color: var(--col); font-weight: 500; margin-top: 4px; }
  .anno-arrow { font-size: 1.2rem; color: var(--col); opacity: 0; transform: translateX(-4px); transition: all 0.2s; }
  .anno-card:hover .anno-arrow { opacity: 1; transform: translateX(0); }

  .about-banner { display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: center; padding: 3rem; background: var(--ink); border-radius: var(--radius-lg); }
  .about-banner-text { display: flex; flex-direction: column; gap: 1rem; }
  .about-banner-text h2 { font-size: 2rem; color: white; }
  .about-banner-text p { color: rgba(255,255,255,0.7); max-width: 45ch; line-height: 1.7; }
  .avatar-circle { width: 120px; height: 120px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 3rem; overflow: hidden; }
  .avatar-circle img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

  @media (max-width: 768px) {
    .hero-inner { grid-template-columns: 1fr; }
    .hero-deco { display: none; }
    .about-banner { grid-template-columns: 1fr; }
    .about-deco { display: none; }
  }
</style>
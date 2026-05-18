<script>
  import { anni, statistiche } from '$lib/data.js';

  let aperto = null;
  let filtroAnno = null;

  $: anniFiltrati = filtroAnno ? anni.filter(a => a.id === filtroAnno) : anni;

  function toggle(id) {
    aperto = aperto === id ? null : id;
  }

  const formatoIcona = {
    'Programma C': '⚙️',
    'Applicazione Python': '🐍',
    'Applicazione Web (Django)': '🌐',
    'PowerPoint': '📊',
    'Testo / Ricerca': '📝',
    'Ricerca / Presentazione': '🔍',
  };

  const tipoColore = {
    'Progetto': { bg: '#F0FDF4', text: '#166534' },
    'Approfondimento': { bg: '#F5F3FF', text: '#7E22CE' },
  };

  const materiaColore = {
    'Informatica': { bg: '#EFF6FF', text: '#1D4ED8' },
    'Italiano': { bg: '#FFF7ED', text: '#C2410C' },
    'Storia': { bg: '#FEF2F2', text: '#DC2626' },
    'Sistemi': { bg: '#F0FDF4', text: '#166534' },
  };
</script>

<svelte:head><title>Educazione Civica — Portfolio</title></svelte:head>

<div class="page-header">
  <div class="container">
    <span class="tag" style="background:rgba(255,255,255,0.15);color:var(--accent-light)">Progetti Ed. Civica</span>
    <h1>Educazione Civica</h1>
    <p>Tutti i miei progetti organizzati per anno scolastico.</p>
    <div class="stats-bar">
      <div class="stat"><span class="stat-n">{statistiche.totaleProgetti}</span><span class="stat-l">Progetti totali</span></div>
      <div class="stat"><span class="stat-n">{statistiche.anniCoperti}</span><span class="stat-l">Anni scolastici</span></div>
      <div class="stat"><span class="stat-n">{statistiche.materieDiverse}</span><span class="stat-l">Materie</span></div>
      <div class="stat"><span class="stat-n">{statistiche.progettiCodice}</span><span class="stat-l">Progetti di codice</span></div>
    </div>
  </div>
</div>

<div class="container page-body">

  <!-- FILTRI ANNO -->
  <div class="filtri">
    <button class="filtro-btn" class:active={!filtroAnno} on:click={() => filtroAnno = null}>
      Tutti gli anni
    </button>
    {#each anni as anno}
      <button
        class="filtro-btn"
        class:active={filtroAnno === anno.id}
        on:click={() => filtroAnno = filtroAnno === anno.id ? null : anno.id}
        style="--col: {anno.colore}"
      >
        {anno.icona} {anno.titolo}
      </button>
    {/each}
  </div>

  <!-- ANNI E PROGETTI -->
  {#each anniFiltrati as anno}
    <section class="anno-section" id={anno.id}>

      <div class="anno-header" style="--col: {anno.colore}; --bg: {anno.coloreFondo}">
        <div class="anno-title">
          <span class="anno-icon-big">{anno.icona}</span>
          <div>
            <h2>{anno.titolo}</h2>
            <span class="anno-sub">{anno.anno} · {anno.materie.length} progetti</span>
          </div>
        </div>
      </div>

      <div class="progetti-list">
        {#each anno.materie as prog}
          {@const mc = materiaColore[prog.materia] || { bg: '#F1F5F9', text: '#475569' }}
          {@const tc = tipoColore[prog.tipo] || { bg: '#F8FAFC', text: '#64748B' }}

          <article class="progetto-card" class:expanded={aperto === prog.id}>
            <!-- HEADER SEMPRE VISIBILE -->
            <button class="prog-header" on:click={() => toggle(prog.id)} aria-expanded={aperto === prog.id}>
              <div class="prog-meta">
                <span class="badge" style="background:{mc.bg};color:{mc.text}">{prog.materia}</span>
                <span class="badge" style="background:{tc.bg};color:{tc.text}">{prog.tipo}</span>
                <span class="formato-pill">
                  {formatoIcona[prog.formato] || '📄'} {prog.formato}
                </span>
              </div>
              <div class="prog-title-row">
                <h3>{prog.titolo}</h3>
                <span class="expand-icon">{aperto === prog.id ? '▲' : '▼'}</span>
              </div>
              <p class="prog-preview">{prog.riassunto.slice(0, 140)}…</p>
            </button>

            <!-- CORPO ESPANSO -->
            {#if aperto === prog.id}
              <div class="prog-body">
                <hr class="divider" />

                <p class="prog-full">{prog.riassunto}</p>

                <div class="punti-chiave">
                  <h4>📌 Punti chiave</h4>
                  <ul>
                    {#each prog.puntiChiave as punto}
                      <li>{punto}</li>
                    {/each}
                  </ul>
                </div>

                {#if prog.note}
                  <div class="nota">
                    <span>💡</span>
                    <p>{prog.note}</p>
                  </div>
                {/if}

                {#if prog.tags && prog.tags.length}
                  <div class="tags-row">
                    {#each prog.tags as t}
                      <span class="tag-small">{t}</span>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
          </article>
        {/each}
      </div>

    </section>
  {/each}
</div>

<style>
  .page-header { background: var(--ink); color: white; padding: 4rem 0 3rem; margin-bottom: 3rem; }
  .page-header h1 { font-size: clamp(2rem, 4vw, 3.2rem); color: white; margin: 0.75rem 0; }
  .page-header p { color: rgba(255,255,255,0.65); font-size: 1.05rem; }

  .stats-bar { display: flex; gap: 2.5rem; margin-top: 2rem; flex-wrap: wrap; }
  .stat { display: flex; flex-direction: column; }
  .stat-n { font-size: 2rem; font-weight: 300; font-family: var(--font-display); color: white; }
  .stat-l { font-size: 0.75rem; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.06em; }

  .page-body { padding-bottom: 5rem; }

  /* FILTRI */
  .filtri { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 3rem; }
  .filtro-btn { padding: 8px 18px; border-radius: 100px; border: 1px solid var(--border); background: transparent; font-size: 0.85rem; color: var(--ink-muted); transition: all 0.2s; }
  .filtro-btn:hover { border-color: var(--ink-faint); color: var(--ink); }
  .filtro-btn.active { background: var(--col, var(--accent)); border-color: var(--col, var(--accent)); color: white; }

  /* ANNO */
  .anno-section { margin-bottom: 3.5rem; }
  .anno-header { padding: 1.25rem 1.5rem; background: var(--bg); border: 1px solid color-mix(in srgb, var(--col) 25%, transparent); border-radius: var(--radius-lg) var(--radius-lg) 0 0; border-bottom: none; }
  .anno-title { display: flex; align-items: center; gap: 1rem; }
  .anno-icon-big { font-size: 2rem; }
  .anno-title h2 { font-size: 1.4rem; color: var(--ink); }
  .anno-sub { font-size: 0.8rem; color: var(--ink-faint); }

  /* PROGETTI */
  .progetti-list { border: 1px solid var(--border); border-radius: 0 0 var(--radius-lg) var(--radius-lg); overflow: hidden; }

  .progetto-card { border-bottom: 1px solid var(--border); background: var(--card-bg); transition: background 0.2s; }
  .progetto-card:last-child { border-bottom: none; }
  .progetto-card.expanded { background: var(--white); }

  .prog-header { width: 100%; text-align: left; background: none; border: none; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; cursor: pointer; }
  .prog-header:hover { background: rgba(0,0,0,0.02); }

  .prog-meta { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
  .badge { display: inline-block; padding: 3px 10px; border-radius: 100px; font-size: 0.75rem; font-weight: 500; }
  .formato-pill { font-size: 0.78rem; color: var(--ink-faint); }

  .prog-title-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
  .prog-title-row h3 { font-size: 1.15rem; color: var(--ink); font-family: var(--font-display); }
  .expand-icon { font-size: 0.75rem; color: var(--ink-faint); flex-shrink: 0; }

  .prog-preview { font-size: 0.88rem; color: var(--ink-muted); line-height: 1.55; text-align: left; }

  /* CORPO ESPANSO */
  .prog-body { padding: 0 1.5rem 1.5rem; }
  .prog-full { font-size: 0.93rem; color: var(--ink-muted); line-height: 1.75; margin-bottom: 1.5rem; }

  .punti-chiave { background: var(--cream); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1rem; }
  .punti-chiave h4 { font-size: 0.88rem; font-family: var(--font-body); font-weight: 500; margin-bottom: 0.75rem; color: var(--ink); }
  .punti-chiave ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
  .punti-chiave li { font-size: 0.88rem; color: var(--ink-muted); padding-left: 1.25rem; position: relative; line-height: 1.55; }
  .punti-chiave li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

  .nota { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1rem 1.25rem; background: #FFFBEB; border: 1px solid #FDE68A; border-radius: var(--radius-md); margin-bottom: 1rem; }
  .nota span { font-size: 1rem; flex-shrink: 0; }
  .nota p { font-size: 0.85rem; color: #92400E; line-height: 1.6; }

  .tags-row { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem; }
  .tag-small { font-size: 0.75rem; padding: 3px 10px; background: var(--border); color: var(--ink-muted); border-radius: 100px; }

  @media (max-width: 600px) {
    .stats-bar { gap: 1.5rem; }
    .prog-header { padding: 1.25rem; }
    .prog-body { padding: 0 1.25rem 1.25rem; }
  }
</style>

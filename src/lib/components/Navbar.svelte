<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  let menuOpen = false;

  const navLinks = [
    { href: `${base}/`, label: 'Home' },
    { href: `${base}/educazione-civica`, label: 'Ed. Civica' },
    { href: `${base}/chi-sono`, label: 'Chi sono' },
  ];
</script>
<nav class="navbar">
  <div class="container nav-inner">
    <a href="{base}/" class="logo">
      <span class="logo-icon">◈</span>
      <span class="logo-text">Il Mio Portfolio</span>
    </a>
    <button class="hamburger" aria-label="Menu" on:click={() => menuOpen = !menuOpen}>
      <span class:open={menuOpen}></span>
    </button>
    <ul class="nav-links" class:open={menuOpen}>
      {#each navLinks as link}
        <li>
          <a href={link.href} class:active={$page.url.pathname === link.href} on:click={() => menuOpen = false}>
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navbar { position: sticky; top: 0; z-index: 100; background: rgba(247,244,238,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
  .logo { display: flex; align-items: center; gap: 10px; font-weight: 500; color: var(--ink); }
  .logo-icon { font-size: 1.4rem; color: var(--accent); line-height: 1; }
  .logo-text { font-family: var(--font-display); font-size: 1.1rem; }
  .nav-links { display: flex; list-style: none; gap: 0.5rem; align-items: center; }
  .nav-links a { display: block; padding: 6px 16px; border-radius: 100px; font-size: 0.9rem; color: var(--ink-muted); transition: all 0.2s; }
  .nav-links a:hover { color: var(--ink); background: var(--border); }
  .nav-links a.active { color: var(--accent); background: var(--accent-light); font-weight: 500; }
  .hamburger { display: none; background: none; border: none; width: 32px; height: 32px; position: relative; flex-direction: column; justify-content: center; align-items: center; }
  .hamburger span, .hamburger span::before, .hamburger span::after { display: block; width: 22px; height: 2px; background: var(--ink); border-radius: 2px; transition: all 0.3s; position: relative; }
  .hamburger span::before, .hamburger span::after { content: ''; position: absolute; }
  .hamburger span::before { top: -7px; } .hamburger span::after { top: 7px; }
  .hamburger span.open { background: transparent; }
  .hamburger span.open::before { transform: rotate(45deg); top: 0; }
  .hamburger span.open::after { transform: rotate(-45deg); top: 0; }
  @media (max-width: 600px) {
    .hamburger { display: flex; }
    .nav-links { display: none; position: absolute; top: 64px; left: 0; right: 0; background: var(--cream); flex-direction: column; padding: 1rem 1.25rem 1.5rem; border-bottom: 1px solid var(--border); gap: 4px; }
    .nav-links.open { display: flex; }
    .nav-links a { padding: 10px 16px; }
  }
</style>

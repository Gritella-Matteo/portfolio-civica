<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>
<Navbar />
<main><slot /></main>
<Footer />
<style>
  main { min-height: calc(100vh - 64px); }
</style>

<script>
  import Footer from "../footer/Footer.svelte";
  import Header from "../header/Header.svelte";
  import WindowList from "../window-list/WindowList.svelte";

  const isDev = import.meta.env.DEV;
  const faviconURL = `${isDev ? "/src/image/base" : "assets"}/ffaee_favicon.png`;
  const jszipURL = `${isDev ? "/src/api" : "assets"}/jszip.min.js`;
</script>

<style>@import url("./app.css");</style>


<svelte:head>
  <script src={jszipURL} type="text/javascript"></script>
  <link rel="icon" type="image/png" href={faviconURL} />
  <title>FFAEE - Final Fight Anniversary Edition Editor (CPS1)</title>
</svelte:head>



<main class="app">
  <Header />
  <WindowList />
  <Footer />
</main>
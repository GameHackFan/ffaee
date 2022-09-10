<script>
  import { Header } from "./header";

  let data;
  const setData = (newData) => {data = newData};
  const header = new Header(setData);
</script>

<style>@import url("./header.css");</style>


<!-- svelte-ignore component-name-lowercase -->
<header class="header flex-i-col" style={`zoom: ${data.zoom}`}>
  <div class="flex-i-col">
    <img
      class="ffaee-logo"
      src={data.imageMap.ffaeeLogo}
      alt="Final Fight Anniversary Edition Editor (CPS1)"
    />
    <img src={data.imageMap.portraitGuy} alt="Guy" />
    <img src={data.imageMap.portraitCody} alt="Cody" />
    <img src={data.imageMap.portraitHaggar} alt="Haggar" />
  </div>
</header>
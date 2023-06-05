<script>
  import { trocarEstadoDoJogo } from "./Estado.js";
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/menu.css" />
</svelte:head>
<div class="container-page" style="background-image: url(./GIFS/Fundos/fundomenu.gif);">
  <h1>CYBERQUEST</h1>
  <div class="align-column">
    <button class="menu" on:click={() => trocarEstadoDoJogo("jogar")}>
      Jogar
    </button>

    <button class="menu" on:click={() => trocarEstadoDoJogo("ajuda")}>
      Ajuda
    </button>

    <button class="menu" on:click={() => trocarEstadoDoJogo("sobre")}>
      Sobre
    </button>

    <p class="back"></p>
    
  </div>
</div>

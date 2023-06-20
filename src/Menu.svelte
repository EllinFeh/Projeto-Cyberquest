<script>
  import { trocarEstadoDoJogo } from "./Estado.js";
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/menu.css" />
</svelte:head>
<div class="container-page" style="background-image: url(/images/Fundos/backmenu.gif);">
  <h1>CYBERQUEST</h1>
  <div class="align-column">
    <button onmouseenter="audio1.play();" onmouseleave="audio2.play();" class="menu" on:click={() => trocarEstadoDoJogo("jogar")}>
      Jogar
    </button>

    <button onmouseenter="audio1.play();" onmouseleave="audio2.play();" class="menu" on:click={() => trocarEstadoDoJogo("ajuda")}>
      Ajuda
    </button>

    <button onmouseenter="audio1.play();" onmouseleave="audio2.play();" class="menu" on:click={() => trocarEstadoDoJogo("sobre")}>
      Sobre
    </button>

  <script>
    var audio1= new Audio();
    audio1.src ="/audio/effectone.mp3";

    var audio2= new Audio();
    audio2.src ="/audio/effecttwo.mp3"

  </script>
   

    <p class="back"></p>
    
  </div>
</div>

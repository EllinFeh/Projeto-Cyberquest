<script>
  import Button from "./Componentes/Button.svelte";
</script>

<div class="container-page" style="background-image: url(/images/Fundos/backmenu.gif);">
  <h1>CYBERQUEST</h1>

  <div class="align-column">
    <Button label="Jogar" estado="jogar"/>

    <Button label="Ajuda" estado="ajuda"/>

    <Button label="Sobre" estado="sobre"/>

  <script>
    var audio1= new Audio();
    audio1.src ="/audio/effectone.mp3";

    var audio2= new Audio();
    audio2.src ="/audio/effecttwo.mp3"

    var audio3= new Audio();
    audio3.src ="/audio/attack.mp3"

    var spray= new Audio();
    spray.src ="/audio/spraytransfer.mp3"

    var trirocket= new Audio();
    trirocket.src ="/audio/trirocket.mp3"

    var medbay= new Audio();
    medbay.src ="/audio/medbay.mp3"

  </script>
   

    <p class="back"></p>
    
  </div>
</div>

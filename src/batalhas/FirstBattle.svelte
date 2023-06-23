<script>
  import { trocarEstadoDoJogo } from "../Estado";
</script>

<audio autoplay loop src="./audio/batalha1.mp3"></audio>

<main>
  
  <div
    class="container-page"
    style="background-image: url(/images/fundos/Fundobatle1.png);"
  >
  <div class="black">

    <button
    onmouseenter="audio1.play();"
    onmouseleave="audio2.play();"
    class="menu"
    on:click={() => trocarEstadoDoJogo("historia3")}
    >
    Próximo
  </button>
  
  <h1 class="txt2">Adam vs Morgred</h1>

    
  <div>
    <div class="box" id="imgAdam">

      <div class="barra"> 
        <div>
          <p class="hp">HP</p>
        </div>
      </div>

      <div class="barra2"> 
        <div>
         
        </div>
      </div>
      <p class="presetname">Adam</p>
      <img class="adamimg" src="./images/adam.gif" alt="Adam" />
    </div>
    
    <div class="box" id="imgInimigo">
        <div class="barra">
          <div>
            <p class="hp">HP</p>
        </div>
      </div>

      <div class="barra2"> 
        <div>
         
        </div>
      </div>
      <p class="presetname">Morgred</p>
      <img class="inmg" src="./images/inimigo1.gif" alt="Inimigo" />
    </div>
  </div>
  
  <div class="box">
      <h2 class="txt3">Escolha um ataque:</h2>

      <div class="container">
        <div class="item tooltip">
          <span class="tooltiptext">Dispara três foguetes em sequência</span>
          <button class="but" onclick="trirocket.play();"
          ><p class="ataquenome">Tri-Rocket</p></button
          >
        </div>
        
        <div class="item tooltip">
          <span class="tooltiptext">Rajada de tiros feitos de sucata</span>
          <button class="but" onclick="spray.play();"
          ><p class="ataquenome">SprayTransfer</p></button
          >
        </div>
        
        <div class="item tooltip">
          <span class="tooltiptext">Constroi uma estaçao de cura</span>
          <button class="but" onclick="medbay.play();"
          ><p class="ataquenome">MedBay</p></button
          >
        </div>
      </div>
    </div>
    
    <div class="box">
      <h2 class="txt3">Ataques do seu inimigo:</h2>

      <div class="container">
        <div class="item tooltip">
          <span class="tooltiptext">????????</span>
          <button class="but2" onclick="audio3.play();">
            <p class="ataquenome">Frenesi</p></button
            >
          </div>
          
          <div class="item tooltip">
            <span class="tooltiptext">????????</span>
            <button class="but2" onclick="audio3.play();">
              <p class="ataquenome">Returnd</p></button
              >
            </div>
            
            <div class="item tooltip">
              <span class="tooltiptext">????????</span>
              <button class="but2" onclick="audio3.play();">
                <p class="ataquenome">Flurry</p></button
                >
              </div>
            </div>
          </div>
          
          <p class="back">‎</p>
        </div>
  </div>
</main>

<style>

  .barra{
    width: 290px;
    height: 15px;
    border-radius: 10px;
    background-color: #333;
    margin: 0 auto;
    border: 1.8px solid rgb(0, 0, 0, 0.7);
    margin-bottom: 5px;
    animation: fadeInText 5s;
  }

  .barra div{
    height: 100%;
    border-radius: 10px;
    background-color: rgb(250, 0, 0);
    width: 100%;
    animation: fadeInText 5s;
  }

  .barra2{
    width: 240px;
    height: 10px;
    border-radius: 10px;
    background-color: #333;
    margin: 0 auto;
    border: 1.8px solid rgb(0, 0, 0, 0.7);
    margin-bottom: 5px;
    animation: fadeInText 5s;
    transition: 500ms;
  }

  .barra2 div{
    height: 100%;
    border-radius: 10px;
    background-color: rgb(221, 221, 221);
    width: 100%;
    animation: fadeInText 5s;
    transition: 500ms;
  }


  .container-page {
    animation: fadeInText 5s;
  }
  
  .black{
    background-color:rgba(8, 8, 8, 0.503);
    }


  button {
    font-size: 18px;
    outline: none;
    transition: 290ms;
    cursor: pointer;
    border: none;
    padding: 5px;
    margin-top: 30px;
    margin-bottom: 30px;
    animation: fadeInText 5s;
  }

  .but {
    background-color: #3d7bff;
    animation: fadeInText 5s;
  }

  .but2 {
    background-color: #008638;
    animation: fadeInText 5s;
  }

  .presetname{
    color: #ffffff;
    padding: 0.5em;
    margin-left: 14em;
    margin-right: 14em;
    border-radius: 10px;
    margin: 0 auto;
    text-shadow: #151515 2px 2px 2px;
    animation: fadeInText 5s;
  }

  .adamimg {
    width: 250px;
    height: 220px;
    animation: fadeInText 5s;
  }

  .inmg {
    width: 250px;
    height: 160px;
    animation: fadeInText 5s;
    margin-top: 30px;
  }

  .box {
    float: left;
    width: 50%;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0px 0px 0px black;
    overflow: hidden;
    animation: fadeInText 5s;
  }

  .container {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.425);
    border-radius: 20px;
    margin: 70px;

  }

  .item {
    width: 80%;
  }

  .txt2 {
    font-size: 60px;
    color: #3d7bff;
    text-shadow: #151515 2px 2px 2px;
    margin: 0;
    margin-bottom: 50px;
    animation: fadeInText 5s;
  }

  .hp{
    font: pixel;
    text-align: center;
    color: black;
    font-size: 15px;
    margin: 0 auto;
  }

  @keyframes fadeInText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .txt3 {
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-shadow: #333 2px 2px 2px;
    margin: 10px;
    text-align: center;
    animation: fadeInText 5s;
  }

  .ataquenome {
    margin: 10px;
    color: rgb(255, 255, 255);
    animation: fadeInText 5s;
  }

  .tooltip {
    position: relative;
    display: inline-block;

  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;

  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>

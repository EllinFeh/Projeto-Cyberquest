    
<script>
  import {trocarEstadoDoJogo} from "../Estado"
</script>
   
    
<main>


<div
class="container-page"
style="background-image: url(/images/fundos/Fundobatle2.png);"
> 

<h1 class="txt2">
  Batalha 2
</h1>
<h3 class="txt">
    Depois de derrotar seu primeiro inimigo, Adam sentiu um misto de emoções.
    A adrenalina corria por suas veias, mas ao mesmo tempo, ele se perguntava 
    se estava preparado para o próximo desafio...
</h3>

<div class="display">
  <div id="imgAdam">
    <img class="adamimg" src="./images/adam.gif" alt="Adam">
  </div>
  
  <div id="imgInimigo">
    <img class="inmg" src="./images/inimigo2.gif" alt="Inimigo">
  </div>
</div>

<div>
  <h2 class="txt3">Escolha um ataque:</h2>
<div class="container" >
	<div class="item" ><button class="but" onmouseenter="audio1.play();"><p class="ataquenome">Aque 1</p></button></div>
	<div class="item" ><button class="but" onmouseenter="audio1.play();"><p class="ataquenome">1</p></button></div>
	<div class="item" ><button class="but" onmouseenter="audio1.play();"><p class="ataquenome">Ae efesafsfsf3</p></button></div>
</div>
</div>

<p class="back">‎</p>
</div>

<style>

button.but {
  font-size: 18px;
  background-color: #3da168;
  outline: none;
  transition: 300ms;
  cursor: pointer;
  margin: 5%;
  border: none;
  }

  .adamimg{
    width: 250px;
    height: 220px;
    margin-left: 100%;
    margin-right: 100%;
    margin-top: 20%;
    animation: fadeInText 1s;
  }

  .inmg{
    width: 330px;
    height: 200px;
    margin-left: 150%;
    margin-right: 150%;
    margin-top: 18%;
    animation: fadeInText 1s;
  }

  .container{
   display: flex;
   justify-content: center;  
   background-color: rgba(0, 0, 0, 0.563);
   border-radius: 20px;
   margin-bottom: 80vh;
}


.item{
   width: 15%;  
}
 
 .txt{
  margin-left: 10%;
  margin-right: 10%;
  color: #aebce2;
 }

 .txt2{
  font-size: 60px;
  color: #0093f5;
  text-shadow: #333 2px 2px 2px;
  margin: 0;
  }

  .txt3{
  font-size: 20px;
  color: rgb(255, 255, 255);
  text-shadow: #333 2px 2px 2px;
  margin: 10px;
  text-align: center;
  }

  .ataquenome{
    margin: 20px;
    color: rgb(255, 255, 255);
  }

</style>
    
</main>


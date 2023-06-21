
<main>

<div
class="container-page"
style="background-image: url(/images/fundos/Fundobatle1.png);"
> 

<button
onmouseenter="audio1.play();"
onmouseleave="audio2.play();"
class="menu"
on:click={() => trocarEstadoDoJogo ("secondbattle")}
>
Próximo
</button>

<h1 class="txt2">
  Batalha 
</h1>
<h3 class="txt">
  Adam depara-se com um adversário singular que se autodenomina Morgred, 
  um indivíduo de aparência extraordinária cujas ações malignas resultaram
  na morte de mais de trinta famílias inocentes. Além disso, este nefasto
  ser aterroriza a cidade cibernética com uma série de atos de violência
  e atrocidades.
</h3>

<div class="display">
  <div id="imgAdam">
    <img class="adamimg" src="./images/adam.gif" alt="Adam">
  </div>
  
  <div id="imgInimigo">
    <img class="inmg" src="./images/inimigo1.gif" alt="Inimigo">
  </div>
</div>

<div>
  <h2 class="txt3">Escolha um ataque:</h2>
<div class="container" >
	<div class="item" ><button class="but" onmouseenter="audio1.play();"><p class="ataquenome">Ataque 1</p></button></div>
	<div class="item" ><button class="but" onmouseenter="audio1.play();"><p class="ataquenome">Ataque 2</p></button></div>
	<div class="item" ><button class="but" onmouseenter="audio1.play();"><p class="ataquenome">Ataque 3</p></button></div>
  <div class="item" ><button class="but" onmouseenter="audio1.play();"><p class="ataquenome">Ataque 4</p></button></div>
</div>
</div>


<p class="back">‎</p>
</div>

<style>

button.but {
  font-size: 18px;
  background-color: rgba(255, 0, 191, 0.581);
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
  }

  .inmg{
    width: 330px;
    height: 200px;
    margin-left: 150%;
    margin-right: 150%;
    margin-top: 10%;
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
  color: rgb(116, 19, 207);
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
    color:rgb(255, 255, 255);
  }

</style>
    
</main>


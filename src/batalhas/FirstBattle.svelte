<script>
  import {trocarEstadoDoJogo} from "../Estado"
</script>

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
<div>
  <h3 class="txt">
    Adam depara-se com um adversário singular que se autodenomina Morgred, 
    um indivíduo de aparência extraordinária cujas ações malignas resultaram
    na morte de mais de trinta famílias inocentes. Além disso, este nefasto
    ser aterroriza a cidade cibernética com uma série de atos de violência
    e atrocidades.
  </h3>
</div>

<div>
  <div class="box" id="imgAdam">
    <img class="adamimg" src="./images/adam.gif" alt="Adam">
  </div>
  
  <div class="box" id="imgInimigo">
    <img class="inmg" src="./images/inimigo1.gif" alt="Inimigo">
  </div>
</div>

<div class="box">
  <h2 class="txt3">Escolha um ataque:</h2>
<div class="container" >
	<div class="item" ><button class="but" onclick="audio3.play();"><p class="ataquenome">Mongoose</p></button></div>
	<div class="item" ><button class="but" onclick="audio3.play();"><p class="ataquenome">Massacre</p></button></div>
	<div class="item" ><button class="but" onclick="audio3.play();"><p class="ataquenome">Thrasher</p></button></div>
</div>
</div>

<div class="box">
  <h2 class="txt3">Ataques do seu inimigo:</h2>
<div class="container" >
	<div class="item" ><button class="but2" onclick="audio3.play();"><p class="ataquenome">Frenesi</p></button></div>
	<div class="item" ><button class="but2" onclick="audio3.play();"><p class="ataquenome">Returnd</p></button></div>
	<div class="item" ><button class="but2" onclick="audio3.play();"><p class="ataquenome">Flurry</p></button></div>
</div>
</div>


<p class="back">‎</p>
</div>

<style>

button{
  font-size: 18px;
  outline: none;
  transition: 300ms;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  }

  .but{
    background-color: #3D7BFF;
  }
  
  .but2{
    background-color: #00421c;
  }
  
  .adamimg{
    width: 250px;
    height: 220px;
    animation: fadeInText 1s;
  }
  
  .inmg{
    width: 250px;
    height: 160px;
    animation: fadeInText 1s;
    margin-top: 30px
  }
  
  .box {
    float: left;
    width: 50%;
    height: 220px;
    border-radius: 5px;
    box-shadow: 0px 0px 0px black;
    overflow: hidden;
  }
  
  .container{
    display: flex;
    justify-content: center;  
    background-color: rgba(0, 0, 0, 0.700);
    border-radius: 20px;
    margin: 20px;
  }
  
  .item{
    width: 80%;
  }
 
 .txt{
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
  color: rgb(255, 255, 255);
  text-shadow: #333 2px 2px 2px;
  animation: fadeInText 1s;
  font-size: 15px;
 }

 .txt2{
  font-size: 60px;
  color: #3D7BFF;
  text-shadow: #333 2px 2px 2px;
  margin: 0;
  animation: fadeInText 1s;

  }

  @Keyframes fadeInText{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
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


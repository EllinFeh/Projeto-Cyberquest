<script>
    import { trocarEstadoDoJogo } from "./Estado.js";
</script>

<div
class="container-page"
style="background-image: url(./images/Fundos/historia2.jpg);"
>

<button
onmouseenter="audio1.play();"
onmouseleave="audio2.play();"
class="menu"
on:click={() => trocarEstadoDoJogo("firstbattle")}
>
Próximo
</button>

<h1>Adam</h1>

<div class="cont">
<img class="adamimg" src="./images/adam.gif" alt="">

<h3 class="vh">
    A jornada de Adam foi repleta de reviravoltas, à medida que se deparava com
    traições, manipulações e segredos ocultos. No entanto, ele perseverou,
    movido por um senso de justiça e pela determinação de trazer paz e segurança
    de volta à Cybercity. <br><br>
    Agora, Adam luta rigorosamente contra monstros que aterrorizam a cidade...
</h3>
</div>

<p class="back">‎</p>
</div>

<style>
    .adamimg{
        margin-top: -80px;
        animation: fadeInText 1s;
    }
    
    .cont{
       display: flex;
       flex: auto;
       margin-top: 100px;
    }

    .vh{
      margin: 0;
      margin-right: 50px;
      margin-left: -100px;
    }

    h1{
        font-size: 60px;
        margin-top: 50px;
    }
</style>
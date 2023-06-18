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
on:click={() => trocarEstadoDoJogo("battleone")}
>
Próximo
</button>

<h1>Adam</h1>

<img class="adamimg" src="./images/adam.gif" alt="">

<h3 class="vh">
    A jornada de Adam foi repleta de reviravoltas, à medida que se deparava com
    traições, manipulações e segredos ocultos. No entanto, ele perseverou,
    movido por um senso de justiça e pela determinação de trazer paz e segurança
    de volta à Cybercity. <br><br>
    Agora, Adam luta rigorosamente contra monstros que aterrorizam a cidade...
</h3>

<p>‎</p>
</div>

<style>
    .adamimg{
        margin-top: -80px;
    }
</style>
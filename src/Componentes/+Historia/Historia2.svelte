<script>
	import Button from "../Button.svelte";
</script>

<div
class="container-page"
style="background-image: url(./images/Fundos/historia2.jpg);"
>

<div class="black">
    
    <Button label="Próximo" estado="iniciarbatalha1"/>
    
    <h1>Adam</h1>

    <div class="cont">
        <img class="adamimg" src="./images/adam.gif" alt="">
        
        <h3 class="vh">
            A jornada de Adam foi repleta de reviravoltas, à medida que se deparava com
            traições, manipulações e segredos ocultos. No entanto, ele perseverou,
            movido por um senso de justiça e pela determinação de trazer paz e segurança
            de volta à Cybercity. <br><br>
            Agora, Adam busca recuperar a paz em Cybercity...
        </h3>
    </div>
    
    <p class="back">‎</p>
</div>
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
      margin-right: 20%;
      margin-left: -0%;
    }

    h1{
        font-size: 60px;
        margin-top: 50px;
    }

    .black{
        background-color:rgba(8, 8, 8, 0.5);
    }
</style>
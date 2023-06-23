<script>
    import { trocarEstadoDoJogo } from "./Estado";
</script>


<main>
    
    <div
    class="container-page"
    style="background-image: url(/images/fundos/Fundobatle1.png);"
    >
    <div class="black">
    
        <h1 class="txt2">AMEAÇA A CYBERCITY</h1>
        <div>
            <h3 class="txt">
                Adam depara-se com um adversário singular que se autodenomina
                Morgred, um indivíduo de aparência extraordinária cujas ações
                malignas resultaram na morte de mais de trinta famílias
                inocentes. Além disso, este nefasto ser aterroriza a cidade
            cibernética com uma série de atos de violência e atrocidades.
        </h3>
        
        <div class="">
            <div class="box" id="imgAdam">
                <img class="adamimg" src="./images/adam.gif" alt="Adam" />
            </div>
            
            <div class="box" id="imgInimigo">
                <img class="inmg" src="./images/inimigo1.gif" alt="Inimigo" />
            </div>
        </div>
    </div>
    
    <button
    onmouseenter="audio1.play();"
    onclick="audio3.play();"
    class="menu"
    on:click={() => trocarEstadoDoJogo("firstbattle")}
    >
    INICIAR BATALHA
</button>

<p class="back">‎</p>
</div>
</div>
</main>

<style>

    button.menu {
        font-size: 18px;
        outline: none;
        transition: 300ms;
        cursor: pointer;
        border: none;
        padding: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
        background-color: red;
        color: white;
    }
    
    button.menu:hover {
  background-color: rgb(80, 0, 0);
  cursor: pointer;
}

    .adamimg {
        width: 250px;
        height: 220px;
        animation: fadeInText 1s;
    }

    .inmg {
        width: 250px;
        height: 160px;
        animation: fadeInText 1s;
        margin-top: 30px;
    }

    .black{
        background-color:rgba(8, 8, 8, 0.716);

    }

    .box {
        float: left;
        width: 50%;
        height: 220px;
        border-radius: 5px;
        box-shadow: 0px 0px 0px black;
        overflow: hidden;
    }

    .txt {
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 1em;
        color: rgb(255, 255, 255);
        text-shadow: #333 2px 2px 2px;
        animation: fadeInText 1s;
        font-size: 20px;
    }

    .txt2 {
        font-size: 60px;
        color: #3d7bff;
        text-shadow: #333 2px 2px 2px;
        animation: fadeInText 1s;
        margin-left: 13%;
        margin-right: 13%;
    }

    @keyframes fadeInText {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


</style>

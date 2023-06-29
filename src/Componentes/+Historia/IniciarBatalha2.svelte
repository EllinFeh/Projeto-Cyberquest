<script>
    import { trocarEstadoDoJogo } from "./Estado";
</script>

<main>
    
    <div
    class="container-page"
    style="background-image: url(/images/fundos/Fundobatle2.png);"
    >
    <div class="black">
    
        <h1 class="txt2">LINHAGEM</h1>
        <div>
            <h3 class="txt">
                Adam, mesmo exausto da batalha anterior, percebeu que não poderia fugir de seu destino. Ele sabia 
                que era o único capaz de deter o Torget e proteger a cidade que tanto amava. Reunindo coragem e 
                determinação, ele se preparou para enfrentar essa nova ameaça.
        </h3>
        
        <div class="">
            <div class="box" id="imgAdam">
                <img class="adamimg" src="./images/adam.gif" alt="Adam" />
            </div>
            
            <div class="box" id="imgInimigo">
                <img class="inmg" src="./images/inimigo2.gif" alt="Inimigo" />
            </div>
        </div>
    </div>
    
    <button
    onmouseenter="audio1.play();"
    onclick="audio3.play();"
    class="menu"
    on:click={() => trocarEstadoDoJogo("secondbattle")}
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
        margin-top: 25px;
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
        width: 270px;
        height: 190px;
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
        box-shadow: 0px 0px 1px black;
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
        color: #00744f;
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

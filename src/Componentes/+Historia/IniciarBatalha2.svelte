<script>
    import { trocarEstadoDoJogo } from "../../Estado";
    import Button from "../Button.svelte";
</script>

<main>
    
    <div
    class="container-page"
    style="background-image: url(/images/Fundos/Fundobatle2.png);"
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
            <div class="box tooltip" id="imgAdam">
                <span class="tooltiptext">ESTATISTICAS: <br>
                    HP: 150<br>
                    ATQ: 8<br>
                    DEF: 19<br>
                </span>
                <img class="adamimg" src="./images/adam.gif" alt="Adam" />
            </div>
            
            <div class="box tooltip" id="imgInimigo">
                <span class="tooltiptext">ESTATISTICAS: <br>
                    HP: 200<br>
                    ATQ: 11<br>
                    DEF: 17<br>
                </span>
                <img class="inmg" src="./images/inimigo2.gif" alt="Inimigo" />
            </div>
        </div>
    </div>
    
    <Button styleProp=background-color:#910;color:#ffff;border:none; label="INICIAR BATALHA" estado="secondbattle" song="audio3.play();" />

<p class="back">‎</p>
</div>
</div>
</main>

<style>

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
        height: 310px;
        border-radius: 5px;
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

    .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 250px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    top: 60%;
    left: 30%;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }


</style>

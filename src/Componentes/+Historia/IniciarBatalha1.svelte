<script>
 import Button from "../Button.svelte";
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
            <div class="box tooltip" id="imgAdam" >
                <span class="tooltiptext">ESTATISTICAS INICIAIS: <br>
                HP: 100<br>
                DEF: 50<br>
                -5% DE DANO A FOGO<br>
                </span>
                <img class="adamimg" src="./images/adam.gif" alt="Adam" />
            </div>
            
            <div class="box tooltip" id="imgInimigo">
                <span class="tooltiptext">ESTATISTICAS: <br>
                    HP: 150<br>
                    DEF: 60<br>
                    IMUNIDADE A LASER<br>
                    </span>
                <img class="inmg" src="./images/inimigo1.gif" alt="Inimigo" />
            </div>
        </div>
    </div>
    
    <Button styleProp=background-color:#910;color:#ffff;border:none; label="INICIAR BATALHA" estado="firstbattle" song="audio3.play();" />

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
        height: 300px;
        border-radius: 5px;
        box-shadow: 0px 0px 0px black;
        overflow: hidden;
    }

    .txt {
        margin-left: 25%;
        margin-right: 25%;
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

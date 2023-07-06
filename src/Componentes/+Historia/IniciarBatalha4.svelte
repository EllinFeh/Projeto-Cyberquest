<script>
    import Button from "../Button.svelte";
</script>

<main>
    
    <div
    class="container-page"
    style="background-image: url(/images/fundos/Fundobatle4.png);"
    >
    <div class="black">
    
        <h1 class="txt2">BOSS FINAL</h1>
        <div>
            <h3 class="txt">
                Adam se deparou com o seu maior inimigo, ele se nomeia de Akuma, <br> 
                Akuma vem destruindo vários planetas cyberneticos por completos!
                a nova missão de Adam é combater este terrível inimigo!
        </h3>
        
        <div class="">
            <div class="box tooltip" id="imgAdam">
                <span class="tooltiptext">ESTATISTICAS: <br>
                    HP: 190<br>
                    ATQ: 13<br>
                    DEF: 24<br>
                </span>
                <img class="adamimg" src="./images/adam.gif" alt="Adam" />
            </div>
            
            <div class="box tooltip" id="imgInimigo">
                <span class="tooltiptext">ESTATISTICAS: <br>
                    HP: 250<br>
                    ATQ: 16<br>
                    DEF: 20<br>
                </span>
                <img class="inmg" src="./images/boss.gif" alt="Inimigo" />
            </div>
        </div>
    </div>
    
    <Button styleProp=background-color:#910;color:#ffff;border:none; label="INICIAR BATALHA" estado="fourthbattle" song="audio3.play();" />

<p class="back">‎</p>
</div>
</div>
</main>

<style>

    .adamimg {
        margin-top: 9%;
        width: 250px;
        height: 220px;
        animation: fadeInText 1s;
    }

    .inmg {
        width: 250px;
        height: 250px;
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
        color: #cf03fc;
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

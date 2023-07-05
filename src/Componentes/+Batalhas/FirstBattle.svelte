<script>
  import { trocarEstadoDoJogo } from "../../Estado";
  import { Adam, Inimigo,} from "../../personagens/Protagonista"
  import AtaqButton from "../AtaqButton.svelte";
  import { textoExibido,mostrarCont } from '../../personagens/store';
  import { onMount, afterUpdate} from 'svelte';

 
  const prota = new Adam(100,6,19);
  const enemy = new Inimigo(150,9,15);

  //barra de vida adam e inimigo:
  const hpMaxAdam = 100;
  const hpMaxEnemy = 150;

  let barWidth = 100;
  let barWidthenemy = 100;
  let hpadam= prota.hp;
  let hpenemy= enemy.hp;
 
function win(){
  trocarEstadoDoJogo('windisplay')
}

function over(){
  trocarEstadoDoJogo('overdisplay')
}

  const attHP = (newHP) => {
    hp = newHP > hpMax ? hpMax : newHP;
  };

  const calculateBarWidth = () => {
    barWidthenemy = (hpenemy / hpMaxEnemy) * 100;
    barWidth = (hpadam / hpMaxAdam) * 100;
  };

  onMount(() => {
    calculateBarWidth();
  });

  afterUpdate(() => {
    calculateBarWidth();
  });
  
  function ataque1Prota() {
    let dado1 = Math.floor(Math.random() * 10)
        if (dado1 >= 3) {
            prota.trirocket(enemy)
            hpenemy = enemy.hp
            console.log(enemy.hp)

            textoExibido.set('Adam acertou TriRocket! Vez do inimigo!');
            mostrarCont.set(false);
         setTimeout(() => {
            textoExibido.set('');
          }, 3500);
        }
        else{
          textoExibido.set('Adam errou o ataque! Vez do inimigo!');
          mostrarCont.set(false);
          
          setTimeout(() => {
            textoExibido.set('');
          }, 3500);
        }
        if(hpenemy < 0){
          hpenemy = 0
          win()
        }
      }

  function ataque2Prota(){
    let dado2 = Math.floor(Math.random() * 15)
        if (dado2 >= 6) {
        prota.spraytransfer(enemy);
        hpenemy = enemy.hp;
        textoExibido.set('Adam acertou SprayTransfer! Vez do inimigo!');
        mostrarCont.set(false);

        setTimeout(() => {
           textoExibido.set('');
         }, 3500);
        }
        else{
            textoExibido.set('Adam errou o ataque! Vez do inimigo!');
            mostrarCont.set(false);

            setTimeout(() => {
               textoExibido.set('');
             }, 3500);
        }
        if(hpenemy < 0){
          hpenemy = 0
          win()
    }
  }
  
  function chamarcura(){
            if(hpadam<=(hpMaxAdam-40)){
              ataque3Prota()
            } else{
              textoExibido.set('Adam não pode se curar ainda!');
              mostrarCont.set(false);

              setTimeout(() => {
               textoExibido.set('');
               mostrarCont.set(true);
             }, 1000);
        }
      }

  function ataque3Prota(){
    let dado3 = Math.floor(Math.random() * 15)
        if (dado3 >= 7) {
          prota.medbay(prota);
          hpadam= prota.hp;
          textoExibido.set('Adam se curou! Vez do inimigo!');
          mostrarCont.set(false);
          ataqueEnemy()
          
          setTimeout(() => {
              textoExibido.set('');
            }, 3500);
            
          }
          
          else{
            textoExibido.set('Medbay Falhou! Vez do inimigo!');
            mostrarCont.set(false);
            ataqueEnemy()
            
            setTimeout(() => {
              textoExibido.set('');
            }, 3500);
          }
        
        setTimeout(() => {
          textoExibido.set('');
        }, 2000);
    }
      


      function ataqueEnemy(){
        setTimeout(() => {
          
          
          let dado4 = Math.floor(Math.random() * 15);
          if(dado4 <= 6){
            mostrarCont.set(false);
            enemy.MarteloDeFerro(prota);
            hpadam = prota.hp;
            textoExibido.set('Seu inimigo usou Martelo de Ferro!');
            console.log('estou sendo chamado')

            setTimeout(() => {
          textoExibido.set('');
          mostrarCont.set(true);
        }, 4000);

        if(hpadam < 0){
          hpadam = 0
          over()
        }

          }else if(dado4 > 6 && dado4 <= 9){
            mostrarCont.set(false);
            enemy.PulsoDeDestruição(prota)
            hpadam = prota.hp;
          textoExibido.set('Seu inimigo usou Pulso de Destruição!');
          console.log('estou sendo chamado')
          setTimeout(() => {
          textoExibido.set('');
          mostrarCont.set(true);
        }, 2000);

          if(hpadam < 0){
          hpadam = 0
          over()
        }

        }else if (dado4 > 9 && dado4 <= 11){
          mostrarCont.set(false);
          enemy.TempestadeDeEletrons(prota)
          hpadam = prota.hp;
          textoExibido.set('Seu inimigo usou Tempestade de Elétrons!');
          console.log('estou sendo chamado')

          setTimeout(() => {
          textoExibido.set('');
          mostrarCont.set(true);
        }, 2000);

          if(hpadam < 0){
          hpadam = 0
          over()
        }
          
        }else{
          mostrarCont.set(false);
          textoExibido.set('Ataque do inimigo falhou!');
          console.log('estou sendo chamado')

          setTimeout(() => {
          textoExibido.set('');
          mostrarCont.set(true);
        }, 6000);

          if(hpadam < 0){
          hpadam = 0
        }

        }

      }, 4000);
    }
    
    
</script>

<audio autoplay loop src="./audio/batalha1.mp3" />

<main>
  <div
    class="container-page"
    style="background-image: url(/images/fundos/Fundobatle1.png);"
  >
    <div class="black">
      <button
        onmouseenter="audio1.play();"
        onmouseleave="audio2.play();"
        class="menu"
        on:click={() => trocarEstadoDoJogo("overdisplay")}
      >
        Próximo (provisorio)
      </button>

      <h1 class="txt2">CYBERTRON</h1>

      

      <div>
        <div class="box" id="imgAdam">
          <div class="hpadam">
            <div style="width: {barWidth}%">
              <p class="hp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>{hpadam}
              </p>
            </div>
          </div>

          <p class="presetname">Adam</p>
          <img class="adamimg" src="./images/adam.gif" alt="Adam" />
        </div>

        <div class="box" id="imgInimigo">
          <div class="hpini">
            <div style="width: {barWidthenemy}%">
              <p class="hp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>{hpenemy}
              </p>
            </div>
          </div>

          <p class="presetname">Morgred</p>
          <img class="inmg" src="./images/inimigo1.gif" alt="Inimigo" />
        </div>
      </div>

      <div>
        <p>{$textoExibido}</p>

        {#if $mostrarCont}
          <h2 class="txt3">Escolha um ataque:</h2>
          <div class="container">
            <div />

            <div class="item tooltip">
              <span class="tooltiptext"
                >Dispara três foguetes em sequência!</span
              >

              <AtaqButton
                styleProp="background-color:#3b79fe;"
                label="TRIROCKET"
                FuncTwo={ataqueEnemy}
                Func={ataque1Prota}
              />
            </div>

            <div class="item tooltip">
              <span class="tooltiptext">Rajada de tiros feitos de sucata!</span>

              <AtaqButton
                styleProp="background-color:#3b79fe;"
                label="SPRAYTRANSFER"
                FuncTwo={ataqueEnemy}
                Func={ataque2Prota}
              />
            </div>

            <div class="item tooltip">
              <span class="tooltiptext">Constroi uma estação de cura!</span>

              <AtaqButton
                styleProp="background-color:#3b79fe;"
                label="MEDBAY"
                Func={chamarcura}
              />
            </div>
          </div>
        {/if}
      </div>

      <p class="back">‎</p>
    </div>
  </div>
</main>

<style>
  .hpadam,
  .hpini {
    width: 290px;
    height: 15px;
    border-radius: 10px;
    background-color: #333;
    margin: 0 auto;
    border: 1.8px solid rgb(0, 0, 0, 0.7);
    margin-bottom: 5px;
    animation: fadeInText 5s;
  }

  .hpadam div {
    height: 100%;
    border-radius: 10px;
    background-color: rgb(250, 0, 0);
    animation: fadeInText 5s;
    transition: 300ms;
  }

  .hpini div {
    height: 100%;
    border-radius: 10px;
    background-color: rgb(250, 0, 0);
    transition: 300ms;
    animation: fadeInText 5s;
  }

  .container-page {
    animation: fadeInText 4s;
  }

  .black {
    background-color: rgba(8, 8, 8, 0.7);
  }

  .presetname {
    color: #ffffff;
    padding: 0.5em;
    margin-left: 14em;
    margin-right: 14em;
    border-radius: 10px;
    margin: 0 auto;
    text-shadow: #151515 2px 2px 2px;
    animation: fadeInText 5s;
  }

  .adamimg {
    width: 250px;
    height: 220px;
    animation: fadeInText 5s;
  }

  .inmg {
    width: 250px;
    height: 160px;
    animation: fadeInText 5s;
    margin-top: 30px;
  }

  p {
    color: #ffffff;
    text-shadow: #151515 2px 2px 2px;
    font-size: 25px;
    text-align: center;
  }

  .bi {
    margin-top: 4%;
  }

  .box {
    float: left;
    width: 50%;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0px 0px 0px black;
    overflow: hidden;
    animation: fadeInText 5s;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.425);
    border-radius: 1em;
    margin: 0 20%;
    position: relative;
  }

  .item {
    flex-grow: 1;
    display: flex;
  }

  .hp {
    font: pixel;
    text-align: center;
    color: rgb(196, 196, 196);
    font-size: 15px;
    position: absolute;
    margin: 0 auto;
    margin-left: 130px;
  }

  @keyframes fadeInText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .txt2 {
    font-size: 45px;
    color: #3b79fe;
    text-shadow: #151515 2px 2px 2px;
    margin: 0;
    margin-bottom: 1.5em;
    animation: fadeInText 5s;
  }

  .txt3 {
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-shadow: #333 2px 2px 2px;
    margin: 10px;
    text-align: center;
    animation: fadeInText 5s;
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    top: -36%;
    left: 0%;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>

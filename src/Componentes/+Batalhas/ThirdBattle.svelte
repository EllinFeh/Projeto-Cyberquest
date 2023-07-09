<script>
    import { trocarEstadoDoJogo } from "../../Estado";
    import { Adam, Inimigo,} from "../../personagens/Protagonista"
    import AtaqButton from "../AtaqButton.svelte";
    import { textoExibido,mostrarCont } from '../../personagens/store';
    import { onMount, afterUpdate} from 'svelte';
   
    const prota = new Adam(170,10,21);
    const enemy = new Inimigo(220,13,19);
  
    //barra de vida adam e inimigo:
    const hpMaxAdam = 170;
    const hpMaxEnemy = 220;
  
    let barWidth = 100;
    let barWidthenemy = 100;
    let hpadam= prota.hp;
    let hpenemy= enemy.hp;
   
    function winorOver(){
    if(hpadam<=0){
      trocarEstadoDoJogo('overdisplay')
    }
    else if(hpenemy<=0){
      trocarEstadoDoJogo('windisplay2');
      
    }
  }

  let blinking = false;

function piscarImage() {
  blinking = true;

  setTimeout(() => {
      blinking = false;
      setTimeout(() => {
        blinking = true;
        setTimeout(() => {
          blinking = false;
          setTimeout(() => {
            blinking = true;
            setTimeout(() => {
              blinking = false;
              setTimeout(() => {
                blinking = true;
                setTimeout(() => {
                  blinking = false;
                }, 160);
              }, 160);
            }, 160);
          }, 160);
        }, 160);
      }, 160);
    }, 1000);
  }

onMount(() => {
  piscarImage();
});



let blinking2 = false;

function piscarImageInmg() {
  blinking2 = true;

  setTimeout(() => {
      blinking2 = false;
      setTimeout(() => {
        blinking2 = true;
        setTimeout(() => {
          blinking2 = false;
          setTimeout(() => {
            blinking2 = true;
            setTimeout(() => {
              blinking2 = false;
              setTimeout(() => {
                blinking2 = true;
                setTimeout(() => {
                  blinking2 = false;
                }, 160);
              }, 160);
            }, 160);
          }, 160);
        }, 160);
      }, 160);
    }, 1000);
  }

onMount(() => {
  piscarImage();
});
  
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
              piscarImageInmg();
              prota.trirocket(enemy)
              hpenemy = enemy.hp
  
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
          if(hpenemy <= 0){
            hpenemy = 0
          }
        }
        winorOver();
  
    function ataque2Prota(){
      let dado2 = Math.floor(Math.random() * 15)
          if (dado2 >= 8) {
            piscarImageInmg();
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
          if(hpenemy <= 0){
            hpenemy = 0
          } 
          winorOver();
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
      let dado3 = Math.floor(Math.random() * 11)
          if (dado3 >= 4) {
            piscarImage();
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
            if(dado4 <= 4){
              if (hpenemy>0) {
              piscarImage();
              mostrarCont.set(false);
              enemy.MarteloDeFerro(prota);
              hpadam = prota.hp;
              textoExibido.set('Seu inimigo usou Ataque Oportuno!');
  
              setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 4000);
  
          if(hpadam <= 0){
            hpadam = 0
          } 
        }
        else{
        textoExibido.set('');
          mostrarCont.set(true);
        }
          winorOver();
  
            }else if(dado4 > 3 && dado4 <= 8){
              if (hpenemy>0) {
              piscarImage();
              mostrarCont.set(false);
              enemy.PulsoDeDestruição(prota)
              hpadam = prota.hp;
            textoExibido.set('Seu inimigo usou Lâmina eletríca!');
  
            setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 2000);
  
          if(hpadam <= 0){
            hpadam = 0
          } 
        }
        else{
        textoExibido.set('');
          mostrarCont.set(true);
        }
          winorOver();
  
          }else if (dado4 > 8 && dado4 <= 12){
            if (hpenemy>0) {
            piscarImage();
            mostrarCont.set(false);
            enemy.TempestadeDeEletrons(prota)
            hpadam = prota.hp;
            textoExibido.set('Seu inimigo usou Super laser!');
  
            setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 2000);
  
          if(hpadam <= 0){
            hpadam = 0
          } 
        }
        else{
        textoExibido.set('');
          mostrarCont.set(true);
        }
          winorOver();
            
          }else{
            mostrarCont.set(false);
            textoExibido.set('Seu inimigo errou o ataque!');
            winorOver();
            
            setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 6000);
  
  
          }
  
        }, 4000);
      }
      
      
  </script>
  
  <audio autoplay loop src="./audio/batalha3.mp3" />
  
  <main>
    <div
      class="container-page"
      style="background-image: url(/images/fundos/Fundobatle3.png);"
    >
      <div class="black">
        <button
          onmouseenter="audio1.play();"
          onmouseleave="audio2.play();"
          class="menu"
          on:click={() => trocarEstadoDoJogo("windisplay2")}
        >
          Próximo (provisorio)
        </button>
  
        <h1 class="txt2">KANG-TAO</h1>
  
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
            <img class:adamimg={blinking} src="./images/adam.gif" alt="Adam" style="width: 250px; height: 220px;"/>
          </div>
  
          <div><img class="vs" src="./images/vs.png" alt=""></div>
  
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
  
            <p class="presetname">Radagast</p>
            <img class:inmg={blinking2} src="./images/inimigo3.gif" alt="Inimigo" style="width: 370px; height: 220px; margin-top: 30px;"/>
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
                  >Dispara três foguetes em sequência! <br> 85% de acerto</span
                >
  
                <AtaqButton
                  styleProp="background-color:#cf03fc;"
                  label="TRIROCKET"
                  FuncTwo={ataqueEnemy}
                  Func={ataque1Prota}
                  song="trirocket.play();"
                />
              </div>
  
              <div class="item tooltip">
                <span class="tooltiptext">Rajada de tiros feitos de sucata! <br> 64% de acerto</span>
  
                <AtaqButton
                  styleProp="background-color:#cf03fc;"
                  label="SPRAYTRANSFER"
                  FuncTwo={ataqueEnemy}
                  Func={ataque2Prota}
                  song="spray.play();"
                />
              </div>
  
              <div class="item tooltip">
                <span class="tooltiptext">Constroi uma estação de cura! <br> 78% de acerto</span>
  
                <AtaqButton
                  styleProp="background-color:#cf03fc;"
                  label="MEDBAY"
                  Func={chamarcura}
                  song="medbay.play();"
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
  
    .vs{
      width: 50px;
      height: 50px;
      position: absolute;
      top: 320px;
      left: 50%;
  
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
      animation: fadeInText 0.9s;
    }
  
    .inmg {
      width: 370px;
      height: 160px;
      animation: fadeInText 0.9s;
   
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
      color: #cf03fc;
      text-shadow: #151515 2px 2px 2px;
      margin: 0;
      margin-bottom: 2em;
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
      top: -45%;
      left: 0%;
    }
  
    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
  </style>
  
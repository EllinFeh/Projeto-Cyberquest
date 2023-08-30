<script>
  import { trocarEstadoDoJogo } from "../../Estado";
  import AtaqButton from "../AtaqButton.svelte";
  import { textoExibido, mostrarCont } from "../../personagens/store";
  import { onMount, afterUpdate, onDestroy } from "svelte";
  import { Imagedirectory, Imageenemy } from "../Imagedirectory";

  export let backgroundImage = `url( ${Imagedirectory})`;
  export let Enemyimg = `(${Imageenemy})`;

  export let prota;
  export let enemy;

  // Efeito fogo

  export let isVisible = false;

  function toggleImage() {
    isVisible = !isVisible;
    setTimeout(() => {
      clearInterval(isVisible);
      isVisible = false;
    }, 1000);
  }

  //barra de vida adam e inimigo:

  export let hpMaxAdam;
  export let hpMaxEnemy;
  export let gamaMax = 50;

  export let gama = 50;
  export let barGama = 50;
  export let barWidth = 100;
  export let barWidthenemy = 100;
  export let hpadam = prota.hp;
  export let hpenemy = enemy.hp;

  //nomes e estilos para possível alteração;
  export let NameEnemy;
  export let EnemyStyle;
  export let titleBattle;
  export let TitleStyle;
  export let ColorButton;

  //Funções ataques, sendo passadas como propiedade.

  function winorOver() {
    if (hpadam <= 0) {
      trocarEstadoDoJogo("overdisplay");
    } else if (hpenemy <= 0) {
      trocarEstadoDoJogo("windisplay");
    }
  }

  //Piscar Adam

  export let blinking = true;

  export function piscarImage() {
    blinking = false;
    const blinkInterval = setInterval(() => {
      blinking = !blinking;
    }, 100);

    setTimeout(() => {
      clearInterval(blinkInterval);
      blinking = false;
    }, 1500);
  }

  onMount(piscarImage);

  // Piscar Inimigo

  export let blinking2 = true;

  function piscarImageInmg() {
    blinking2 = false;
    const blinkInterval = setInterval(() => {
      blinking2 = !blinking2;
    }, 100);

    setTimeout(() => {
      clearInterval(blinkInterval);
      blinking2 = false;
    }, 1500);
  }

  onMount(piscarImageInmg);

  //calcular percentual de vida

  const calculateBarWidth = () => {
    barWidthenemy = (hpenemy / hpMaxEnemy) * 100;
    barWidth = (hpadam / hpMaxAdam) * 100;
    barGama = (gama / gamaMax) * 100;
  };

  onMount(() => {
    calculateBarWidth();
  });

  afterUpdate(() => {
    calculateBarWidth();
  });

  //Funções de ataque do ADAM

  function ataque1Prota() {
    let dado1 = Math.floor(Math.random() * 10);
    if (dado1 >= 3) {
      piscarImageInmg();
      toggleImage();
      prota.trirocket(enemy);
      hpenemy = enemy.hp;
      textoExibido.set("Adam acertou TriRocket! Vez do inimigo!");
      mostrarCont.set(false);
      setTimeout(() => {
        textoExibido.set("");
      }, 3500);
    } else {
      textoExibido.set("Adam errou o ataque! Vez do inimigo!");
      mostrarCont.set(false);

      setTimeout(() => {
        textoExibido.set("");
      }, 2500);
    }
    if (hpenemy <= 0) {
      hpenemy = 0;
    }
  }

  function ataque2Prota() {
    let dado2 = Math.floor(Math.random() * 15);
    if (dado2 >= 6) {
      piscarImageInmg();
      toggleImage();
      prota.spraytransfer(enemy);
      hpenemy = enemy.hp;
      textoExibido.set("Adam acertou SprayTransfer! Vez do inimigo!");
      mostrarCont.set(false);

      setTimeout(() => {
        textoExibido.set("");
      }, 3500);
    } else {
      textoExibido.set("Adam errou o ataque! Vez do inimigo!");
      mostrarCont.set(false);

      setTimeout(() => {
        textoExibido.set("");
      }, 2500);
    }
    if (hpenemy <= 0) {
      hpenemy = 0;
    }
  }

  function chamarcura() {
    if (hpadam <= hpMaxAdam - 40) {
      ataque3Prota();
    } else {
      textoExibido.set("Adam não pode se curar ainda!");
      mostrarCont.set(false);

      setTimeout(() => {
        textoExibido.set("");
        mostrarCont.set(true);
      }, 1000);
    }
  }

  function ataque3Prota() {
    let dado3 = Math.floor(Math.random() * 15);
    if (dado3 >= 7) {
      piscarImage();
      prota.medbay(prota);
      hpadam = prota.hp;
      textoExibido.set("Adam se curou! Vez do inimigo!");
      mostrarCont.set(false);
      ataqueEnemy();

      setTimeout(() => {
        textoExibido.set("");
      }, 3500);
    } else {
      textoExibido.set("Medbay Falhou! Vez do inimigo!");
      mostrarCont.set(false);
      ataqueEnemy();

      setTimeout(() => {
        textoExibido.set("");
      }, 2500);
    }

    setTimeout(() => {
      textoExibido.set("");
    }, 2000);
  }

  //Funções de ataque do Inimigo

  function ataqueEnemy() {
    setTimeout(() => {
      let dado4 = Math.floor(Math.random() * 15);
      if (dado4 <= 6) {
        if (hpenemy > 0) {
          piscarImage();
          mostrarCont.set(false);
          enemy.attacknemy1(prota);
          hpadam = prota.hp;
          textoExibido.set("Seu inimigo usou ataque fraco!");

          setTimeout(() => {
            textoExibido.set("");
            mostrarCont.set(true);
          }, 4000);

          if (hpadam <= 0) {
            hpadam = 0;
          }
        } else {
          textoExibido.set("");
          mostrarCont.set(true);
        }
        winorOver();
      } else if (dado4 > 6 && dado4 <= 10) {
        if (hpenemy > 0) {
          piscarImage();
          mostrarCont.set(false);
          enemy.attackenemy2(prota);
          hpadam = prota.hp;
          textoExibido.set("Seu inimigo usou ataque médio");
          setTimeout(() => {
            textoExibido.set("");
            mostrarCont.set(true);
          }, 2000);

          if (hpadam <= 0) {
            hpadam = 0;
          }
        } else {
          textoExibido.set("");
          mostrarCont.set(true);
        }
        winorOver();
      } else if (dado4 > 10 && dado4 <= 12) {
        if (hpenemy > 0) {
          piscarImage();
          mostrarCont.set(false);
          enemy.attackenemy3(prota);
          hpadam = prota.hp;
          textoExibido.set("Seu inimigo usou ataque forte!");

          setTimeout(() => {
            textoExibido.set("");
            mostrarCont.set(true);
          }, 2000);

          if (hpadam <= 0) {
            hpadam = 0;
          }
        } else {
          textoExibido.set("");
          mostrarCont.set(true);
        }
        winorOver();
      } else {
        mostrarCont.set(false);
        textoExibido.set("Seu inimigo errou o ataque!");
        winorOver();

        setTimeout(() => {
          textoExibido.set("");
          mostrarCont.set(true);
        }, 2500);

        if (hpadam <= 0) {
          hpadam = 0;
        }
      }
    }, 4000);
  }
</script>

<audio autoplay loop src="./audio/batalha1.mp3" />

<main>
  <div class="container-page" style="background-image: {backgroundImage};">
    <div class="black">
      <button
        onmouseenter="audio1.play();"
        onmouseleave="audio2.play();"
        class="menu"
        on:click={() => trocarEstadoDoJogo("windisplay")}
      >
        Próximo (provisorio)
      </button>

      <div class="titleBattle" style={TitleStyle}>{titleBattle}</div>

      <div>
        {#if isVisible}
          <img class="explosion" src="/images/explode.gif" alt="Imagem" />
        {/if}

        <div class="box">
          <div class="hpadam">
            <div style="width: {barWidth}%">
              <p class="whitet hp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="white"
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

          <div class="gamaadam">
            <div style="width: {barGama}%">
              <p class="blackt hp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  fill="black"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
                  />
                </svg>
                {gama}
              </p>
            </div>
          </div>

          <p class="presetname">Adam</p>
          <img
            class:adamimg={blinking}
            src="./images/adam.gif"
            alt="Adam"
            style="width: 250px; height: 220px;"
          />
        </div>

        <div><img class="vs" src="./images/vs.png" alt="" /></div>

        <div class="box" id="imgInimigo">
          <div class="hpini">
            <div style="width: {barWidthenemy}%">
              <p class="hp whitet">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="white"
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

          <p class="presetname">{NameEnemy}</p>
          <img
            class:inmg={blinking2}
            src={Enemyimg}
            alt="Inimigo"
            style={EnemyStyle}
          />
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
                styleProp={ColorButton}
                label="TRIROCKET"
                FuncTwo={ataqueEnemy}
                Func={ataque1Prota}
                song="trirocket.play();"
              />
            </div>

            <div class="item tooltip">
              <span class="tooltiptext"
                >Rajada de tiros feitos de sucata!
              </span>

              <AtaqButton
                styleProp={ColorButton}
                label="SPRAYTRANSFER"
                FuncTwo={ataqueEnemy}
                Func={ataque2Prota}
                song="spray.play();"
              />
            </div>

            <div class="item tooltip">
              <span class="tooltiptext">Constroi uma estação de cura! </span>

              <AtaqButton
                styleProp={ColorButton}
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
  .hpini,
  .gamaadam {
    width: 290px;
    height: 15px;
    border-radius: 10px;
    background-color: #333;
    margin: 0 auto;
    border: 1.8px solid rgb(0, 0, 0, 0.7);
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

  .gamaadam div {
    height: 100%;
    border-radius: 10px;
    background-color: rgb(255, 247, 0);
    transition: 300ms;
    animation: fadeInText 5s;
  }

  .blackt{
    color:black;
    font-size: 14px;
  }

  .whitet{
    color: rgb(196, 196, 196);
    font-size: 15px;
  }

  .gamaadam {
    width: 290px;
    height: 13px;
    border-radius: 10px;
    background-color: #333;
    margin: 0 auto;
    border: 1.8px solid rgb(0, 0, 0, 0.7);
    animation: fadeInText 5s;
  }

  .explosion {
    position: absolute;
    width: 200px;
    height: 220px;
    top: 33%;
    left: 70%;
  }

  .vs {
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
    margin-bottom: 0;
    text-shadow: #151515 2px 2px 2px;
    animation: fadeInText 5s;
  }

  .adamimg {
    animation: fadeInText 1s;
    width: 250px;
    height: 220px;
  }

  .inmg {
    width: 250px;
    height: 160px;
    animation: fadeInText 1s;
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


  .titleBattle {
    font-size: 45px;
    text-shadow: #151515 2px 2px 2px;
    margin: 0;
    margin-top: 1em;
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

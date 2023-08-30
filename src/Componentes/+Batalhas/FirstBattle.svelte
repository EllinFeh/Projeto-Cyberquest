<script>
  import { Adam, Inimigo} from "../../personagens/Protagonista"
  import Battle from "./Battle.svelte";
  import {Imagedirectory, Imageenemy} from '../Imagedirectory';


  $: backgroundImage = `url( ${Imagedirectory}/Fundobatle1.png)`;
  $: Enemyimg = ` ${Imageenemy}/inimigo1.gif`;

  
  $: hpMaxAdam = 100;
  $: hpMaxEnemy = 150;
 
  $: NameEnemy= "Morgred"
  $: EnemyStyle= "width: 250px; height: 160px; margin-top: 30px;"

  $: titleBattle= "CARTWHEEL"
  $: TitleStyle= "color: #f2cf05;"
  $: ColorButton= "background-color: #f2cf05;"

  let prota= new Adam(100,5,9);
  let enemy= new Inimigo(150,5,9)

  function ataqueEnemy(){
          setTimeout(() => {       
            let dado4 = Math.floor(Math.random() * 15);
            if(dado4 <= 6){
              if (hpenemy>0) {
              piscarImage();
              mostrarCont.set(false);
              enemy.attacknemy1(prota);
              hpadam = prota.hp;
              textoExibido.set('Seu inimigo usou ataque fraco!');
  
              setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 4000);
  
          if(hpadam <= 0){
            hpadam = 0
          }
        } else{
          textoExibido.set('');
            mostrarCont.set(true);
          }
          winorOver();
  
            }else if(dado4 > 6 && dado4 <= 10){
              if (hpenemy>0) {
                piscarImage();
              mostrarCont.set(false);
              enemy.attackenemy2(prota)
              hpadam = prota.hp;
            textoExibido.set('Seu inimigo usou ataque médio');
            setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 2000);
  
            if(hpadam <= 0){
            hpadam = 0
          }
        }else{
          textoExibido.set('');
            mostrarCont.set(true);
          }
          winorOver();
  
          }else if (dado4 > 10 && dado4 <= 12){
            if (hpenemy>0) {
              piscarImage();
            mostrarCont.set(false);
            enemy.attackenemy3(prota)
            hpadam = prota.hp;
            textoExibido.set('Seu inimigo usou ataque forte!');
  
            setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 2000);
  
            if(hpadam <= 0){
            hpadam = 0
          }
        } else{
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
          }, 2500);
  
            if(hpadam <= 0){
            hpadam = 0
          }
  
          }
          
        }, 4000);
      }

</script>


<Battle 

{backgroundImage} 

{titleBattle}
{TitleStyle}
{ColorButton}

{prota}
{enemy}
{hpMaxAdam}
{hpMaxEnemy}  


{NameEnemy}
{EnemyStyle}
{Enemyimg}


 />

 <style>
  
 </style>
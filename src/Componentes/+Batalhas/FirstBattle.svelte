<script>
  import { Adam, Inimigo} from "../../personagens/Protagonista"
  import Battle from "./Battle.svelte";
  import {Imagedirectory, Imageenemy, Music} from '../Imagedirectory';


  $: backgroundImage = `url( ${Imagedirectory}/Fundobatle1.png)`;
  $: Enemyimg = ` ${Imageenemy}/inimigo1.gif`;
  $: MusicT= `${Music}/batalha1.mp3`;
  $: Win= '"../+Historia/WinDisplay.svelte"';
  
  $: hpMaxAdam = 100;
  $: hpMaxEnemy = 150;
 
  $: NameEnemy= "Morgred"
  $: EnemyStyle= "width: 250px; height: 160px; margin-top: 30px;"

  $: titleBattle= "CARTWHEEL"
  $: TitleStyle= "color: #f2cf05;"
  $: ColorButton= "background-color: #f2cf05;"

  let prota= new Adam(100,5,9);
  let enemy= new Inimigo(150,5,9)


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
{MusicT}

{Win}

 />

 <style>
  
 </style>
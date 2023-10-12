<script>
    import { Adam, Inimigo} from "../../personagens/Protagonista"
    import Battle from "./Battle.svelte";
    import {Imagedirectory, Imageenemy, Music} from '../Imagedirectory';
  
  
    $: backgroundImage = `url( ${Imagedirectory}/Fundobatle4.png)`;
    $: Enemyimg = ` ${Imageenemy}/boss.gif`;
    $: MusicT= `${Music}/batalha4.mp3`;
    $: Win= 'end';
    
    $: hpMaxAdam = 200;
    $: hpMaxEnemy = 250;
   
    $: NameEnemy= "Morgrid"
    $: EnemyStyle= "width: 250px; height: 210px; margin-top: 30px;"
  
    $: titleBattle= "UNIVERSE-9"
    $: TitleStyle= "color: #ff387a;"
    $: ColorButton= "background-color: #ff387a;"
  
    let prota= new Adam(200,10,14);
    let enemy= new Inimigo(250,10,13)
  
  
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
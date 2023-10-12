<script>
    import { Adam, Inimigo} from "../../personagens/Protagonista"
    import Battle from "./Battle.svelte";
    import {Imagedirectory, Imageenemy, Music} from '../Imagedirectory';
  
  
    $: backgroundImage = `url( ${Imagedirectory}/Fundobatle3.png)`;
    $: Enemyimg = ` ${Imageenemy}/inimigo3.gif`;
    $: MusicT= `${Music}/batalha3.mp3`;
    $: Win= 'windisplay2';
    
    $: hpMaxAdam = 180;
    $: hpMaxEnemy = 210;
   
    $: NameEnemy= "Hosted"
    $: EnemyStyle= "width: 360px; height: 160px; margin-top: 30px;"
  
    $: titleBattle= "HLX-1"
    $: TitleStyle= "color: #c338ff;"
    $: ColorButton= "background-color: #c338ff;"
  
    let prota= new Adam(180,8,13);
    let enemy= new Inimigo(210,9,10)
  
  
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
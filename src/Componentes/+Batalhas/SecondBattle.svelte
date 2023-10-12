<script>
    import { Adam, Inimigo} from "../../personagens/Protagonista"
    import Battle from "./Battle.svelte";
    import {Imagedirectory, Imageenemy, Music} from '../Imagedirectory';
  
  
    $: backgroundImage = `url( ${Imagedirectory}/Fundobatle2.png)`;
    $: Enemyimg = ` ${Imageenemy}/inimigo2.gif`;
    $: MusicT= `${Music}/batalha2.mp3`;
    $: Win= 'windisplay1';
    
    $: hpMaxAdam = 150;
    $: hpMaxEnemy = 180;
   
    $: NameEnemy= "HOG"
    $: EnemyStyle= "width: 280px; height: 170px; margin-top: 30px;"
  
    $: titleBattle= "HOAG"
    $: TitleStyle= "color: #38ff42;"
    $: ColorButton= "background-color: #38ff42;"
  
    let prota= new Adam(150,6,11);
    let enemy= new Inimigo(180,7,9)
  
  
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
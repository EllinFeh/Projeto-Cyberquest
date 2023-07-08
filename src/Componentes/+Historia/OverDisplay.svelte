<script>
    import Button from "../Button.svelte";
    import { trocarEstadoDoJogo } from "../../Estado";
   </script>
   
   <audio autoplay loop src="./audio/gameover.mp3" />
   <main>
       
       <div
       class="container-page"
       style="background-image: url(/images/fundos/Fundoderrota.gif);"
       >
       <div class="black">
       
           <div class="overimg">
            <img src="./images/game-over.gif" alt="Win">
           </div>
           <h1>ADAM FOI DERROTADO!</h1>
      
       
       <Button styleProp="color:#fff; background-color: rgb(130, 19, 19)" label="OK!" estado="menu" song="audio3.play();" />
   
   <p class="back">‎</p>
   </div>
   </div>
   </main>
   
   <style>

       .overimg{
        margin-top: -100px;
        margin-bottom: -220px;     
       }
   
       .black{
           background-color:rgba(0, 0, 0, 0.382)       }
   
       h1 {
          text-align: center;
           color: rgb(255, 255, 255);
           animation: fadeInText 1s;
           font-size: 30px;
           text-shadow: none;
       }

   
       @keyframes fadeInText {
           from {
               opacity: 0;
           }
           to {
               opacity: 1;
           }
       }
   

   </style>
   
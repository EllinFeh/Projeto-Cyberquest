<script>
    import Button from "../Button.svelte";
   </script>
   
   <audio autoplay loop src="./audio/youwin.mp3" />
   
   <main>
       
       <div
       class="container-page"
       style="background-image: url(/images/Fundos/Fundovitoria.gif);"
       >
       <div class="black">
       
           <div class="winimg">
            <img src="./images/you-win.gif" alt="Win">
           </div>
           <h1>ADAM VENCEU!</h1>
           <h2>Subiu de nivel: 4</h2>
        <div>
           <div class="">
               <div class="box" id="imgAdam" >
                   <img class="adamimg" src="./images/adam.gif" alt="Adam" />
                  <h2>Adam está mais forte!</h2>
                </div>
           </div>
       </div>
       
       <Button label="OK!" estado="iniciarbatalha4"/>
   
   <p class="back">‎</p>
   </div>
   </div>
   </main>
   
   <style>
   
       .adamimg {
           width: 250px;
           height: 220px;
           animation: fadeInText 1s;
       }

       .winimg{
        margin-top: -100px;
        margin-bottom: -220px;
        
       }
   
       .black{
        background-color:rgba(0, 0, 0, 0.4);
       }
   
       .box {
           float: left;
           width: 100%;
           height: 250px;
           border-radius: 5px;
           box-shadow: 0px 0px 0px black;
           overflow: hidden;
       }
   
       h1 {
          text-align: center;
           color: rgb(0, 0, 0);
           animation: fadeInText 1s;
           font-size: 40px;
           text-shadow: none;
       }

       h2 {
           margin-top: -30px;
           text-align: center;
           color: rgb(0, 0, 0);
           animation: fadeInText 1s;
           font-size: 20px;
           text-shadow: none;
           background-color: rgba(255, 255, 255, 0.164);
           margin-left: 40%;
           margin-right: 40%;
           border: solid 1px;
           border-radius: 7px;
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
   
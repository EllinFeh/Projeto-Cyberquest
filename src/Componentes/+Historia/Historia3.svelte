<script>
    import Button from "../Button.svelte";
</script>

<main>
    
    <div
    class="container-page"
    style="background-image: url(/images/fundos/historia3.gif);"
    >
    
    <div class="black">
        

        <h1 class="txt2">Adam vence Morgred</h1>
        <div>
            <h3 class="txt">
                Adam, o destemido herói, conseguiu derrotar Morgred, o vilão mais temido de todos os 
                tempos. No entanto, Adam não fazia ideia de que a linhagem de Morgred era vasta e que
                 a batalha contra o mal estava longe de terminar. <br>
                Logo após a derrota de Morgred, as sombras da escuridão começaram a
                se espalhar por toda a cidade de Cybercity. Um novo inimigo surgiu, 
                conhecido como Torget, cujo objetivo era semear o caos e a destruição. 
                O Torget possuía poderes sombrios e habilidades desconhecidas, tornando-se 
                uma ameaça ainda maior do que Morgred.
        </h3>
        
        <div>
            <div class="box" id="imgAdam">
                <img class="adamimg" src="./images/adam.gif" alt="Adam" />

            </div>
        </div>
    </div>
    
    <Button styleProp=background-color:#900;color:#ffff;border:none; label="INICIAR BATALHA" estado="iniciarbatalha1" />

<p class="back">‎</p>
</div>
</div>
</main>

<style>

    .adamimg {
        width: 250px;
        height: 220px;
        animation: fadeInText 2s;
    }

    .black{
        background-color:rgba(8, 8, 8, 0.716);
        animation: fadeInText 2s;

    }

    .box {
        float: left;
        width: 100%;
        height: 220px;
        border-radius: 5px;
        box-shadow: 0px 0px 0px black;
        overflow: hidden;
        animation: fadeInText 2s;
    }

    .txt {
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 1em;
        color: rgb(255, 255, 255);
        text-shadow: #333 2px 2px 2px;
        animation: fadeInText 2s;
        font-size: 20px;
        
    }

    .txt2 {
        font-size: 60px;
        color: #681e40;
        text-shadow: #333 2px 2px 2px;
        animation: fadeInText 2s;
        margin-left: 13%;
        margin-right: 13%;
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

<script>
	import { trocarEstadoDoJogo } from '../Estado'
</script>

<button onmouseenter="audio1.play();" onmouseleave="audio2.play();" class='btn' on:click={() => trocarEstadoDoJogo('menu')} onclick="audio.play();">
	Voltar
</button>

<style>
    .btn {
        color: #000000;
        background-color:  rgb(247, 169, 0);
        outline: none;
        transition: 300ms;
        animation: fadeInText 1s;
        font-size: 20px;
        border-style: solid;
        border-width: 2px;
        width: 160px;
        padding: 15px;
        font-family: inherit;
        padding: 0.7em;
        margin:0.1em;
        box-sizing: border-box;
        border: solid 2px rgb(0, 0, 0);
        border-radius: 18px;
        user-select: none;
    }

    .btn:hover {
        background-color: rgb(203, 148, 25);
        cursor: pointer;
    }

</style>


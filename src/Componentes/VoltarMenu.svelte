<script>
	import { trocarEstadoDoJogo } from '../Estado'
</script>

<button onmouseenter="audio1.play();" onmouseleave="audio2.play();" class='btn' on:click={() => trocarEstadoDoJogo('menu')} onclick="audio.play();">
	Voltar
</button>

<style>
    .btn {
        color: #333;
        background-color: rgb(175, 229, 253);
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
        border: solid rgba(252, 252, 252, 0.536);
        border-radius: 18px;
        user-select: none;
    }

    .btn:hover {
        background-color: rgb(253, 171, 253);
        cursor: pointer;
    }

</style>


<script>
	import { trocarEstadoDoJogo } from '../Estado'
</script>

<button onmouseenter="audio1.play();" onmouseleave="audio2.play();" class='menu' on:click={() => trocarEstadoDoJogo('menu')} onclick="audio.play();">
	Voltar
</button>


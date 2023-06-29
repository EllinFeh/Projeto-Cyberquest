<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<button onmouseenter="audio1.play();" onmouseleave="audio2.play();" class='menu' on:click={() => trocarEstadoDoJogo('menu')} onclick="audio.play();">
	Voltar
</button>


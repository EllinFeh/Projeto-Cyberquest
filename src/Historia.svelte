<script>
	import VoltarMenu from "./VoltarMenu.svelte";
	import { estado } from "./Estado.js";
	import { trocarEstadoDoJogo } from "./Estado.js";
</script>


<svelte:head>
	<link rel="stylesheet" href="/styles/jogar.css" />
</svelte:head>

<div

class="container-page"
style="background-image: url(./images/Fundos/historia1.gif);"
>
<VoltarMenu />
<button
onmouseenter="audio1.play();"
onmouseleave="audio2.play();"
class="menu"
on:click={() => trocarEstadoDoJogo("historia1")}
>
Próximo
</button>
<div>
		<div>
			<h1>Ano 2077</h1>
			<h3>
				A sociedade de 2077 é fortemente conectada e digitalizada. A
				Internet das Coisas tornou-se uma realidade onipresente, onde
				todos os dispositivos estão interligados, desde os carros
				autônomos até as casas inteligentes, que são capazes de ajustar
				automaticamente a temperatura, a iluminação e outros aspectos de
				acordo com as preferências pessoais de cada indivíduo.
			</h3>
		</div>

	<p class="backhistoria">‎</p>
	</div>


</div>

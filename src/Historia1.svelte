<script>
	import VoltarMenu from "./VoltarMenu.svelte";
	import { trocarEstadoDoJogo } from "./Estado.js";
</script>

<div
class="container-page"
style="background-image: url(./images/Fundos/historia2.gif);"
>
<button
onmouseenter="audio1.play();"
onmouseleave="audio2.play();"
class="menu"
on:click={() => trocarEstadoDoJogo("historia2")}
>
Próximo
</button>

	<h1>Ataques em CyberCity</h1>
	<h3 class="vh">
		Nas ruas movimentadas de uma cidade futurística chamada cybercity, a
		tecnologia avançada convive com uma sombra sobre seus habitantes.
		Nos últimos meses, uma série de crimes e ataques misteriosos tem
		aterrorizado a população, lançando uma atmosfera de medo e insegurança
		sobre o lugar. <br> <br>
		Foi nesse clima de tensão que um jovem chamado Adam entrou em
		cena. Conhecido por suas habilidades excepcionais no mundo virtual, Adam
		se viu pessoalmente afetado pelos ataques. Sua própria família foi
		vítima, e ele estava determinado a aniquilar os ataques em cybercity.
	</h3>
	
	<p>‎</p>
</div>

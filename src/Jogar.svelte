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
	style="background-image: url(./images/Fundos/fundojogar.gif);"
>
	<div>
		<h1>Bem vindo</h1>

		<VoltarMenu />
	</div>
	<p class="back">@copy</p>
</div>

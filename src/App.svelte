<script>
	// importa os componentes que representam os elementos gráficos do jogo
	import Jogo from './Jogar.svelte'
	import Sobre from './Sobre.svelte'
	import Menu from './Menu.svelte'
    import Ajuda from './Ajuda.svelte'

	// importa um "writable" que funciona como uma variável global, todos os módulos que a importarem poderão ver o seu valor
	import { estado } from './Estado.js'
</script>

<!-- o jogo tem três estados menu, jogar e sobre, cada um representa uma tela diferente para o usuário -->
{#if $estado === 'menu'}
	<!-- notem como cada componente/módulo que crianos no svelte vira um tag -->
	<Menu/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'jogar'}
	<Jogo/>
{:else if $estado === 'ajuda'}
	<Ajuda/>
{/if}
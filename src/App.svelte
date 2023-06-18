<script>
	// importa os componentes que representam os elementos gráficos do jogo
	import Jogo from './Historia.svelte'
	import Sobre from './Sobre.svelte'
	import Menu from './Menu.svelte'
    import Ajuda from './Ajuda.svelte'
	import Historia1 from './Historia1.svelte'
	import Historia2 from './Historia2.svelte'
	import Battleone from '../public/batalhas/BattleOne.svelte'

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
{:else if $estado === 'historia1'}
	<Historia1/>
{:else if $estado === 'historia2'}
	<Historia2/>
	{:else if $estado === 'battleone'}
	<Battleone/>
{/if}
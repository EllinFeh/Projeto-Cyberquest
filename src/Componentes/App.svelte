<script>
	// importa os componentes que representam os elementos gráficos do jogo
	import Sobre from './+Menu/Sobre.svelte'
	import Menu from './+Menu/Menu.svelte'
    import Ajuda from './+Menu/Ajuda.svelte'
	
	import Jogo from './+Historia/Historia.svelte'
	import Historia1 from './+Historia/Historia1.svelte'
	import Historia2 from './+Historia/Historia2.svelte'
	import Historia3 from './+Historia/Historia3.svelte'
	import IniciarBatalha1 from './+Historia/IniciarBatalha1.svelte'
	import IniciarBatalha2 from './+Historia/IniciarBatalha2.svelte'

	import OverDisplay from './+Historia/OverDisplay.svelte'
	import WinDisplay from './+Historia/WinDisplay.svelte'

	import FirstBattle from './+Batalhas/FirstBattle.svelte'
	import SecondBattle from './+Batalhas/SecondBattle.svelte'
	import ThirdBattle from './+Batalhas/ThirdBattle.svelte'
	import FourthBattle from './+Batalhas/FourthBattle.svelte'


	// importa um "writable" que funciona como uma variável global, todos os módulos que a importarem poderão ver o seu valor
	import { estado } from '../Estado'

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
{:else if $estado === 'historia3'}
	<Historia3/>
{:else if $estado === 'firstbattle'}
	<FirstBattle/>
{:else if $estado === 'secondbattle'}
	<SecondBattle/>
{:else if $estado === 'thirdbattle'}
	<ThirdBattle/>
{:else if $estado === 'fourthbattle'}
	<FourthBattle/>
{:else if $estado === 'iniciarbatalha1'}
	<IniciarBatalha1/>
{:else if $estado === 'iniciarbatalha2'}
	<IniciarBatalha2/>
{:else if $estado === 'overdisplay'}
    <OverDisplay/>
{:else if $estado === 'windisplay'}
	<WinDisplay/>

{/if}

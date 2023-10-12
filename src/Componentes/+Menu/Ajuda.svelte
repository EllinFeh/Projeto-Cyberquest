<script>
	import VoltarMenu from "../VoltarMenu.svelte";
</script>

<div>
	<div
		class="container-page"
		style="background-image: url(./images/Fundos/backmenu.gif);"
	>
	<div class="black"> 

		<h1>COMO JOGAR</h1>
		<h2> 1. Você precisa decidir qual ataque usar,Adam possui três ataques:  <p style="margin: 0; color: white;">Trirocket, Spraytransfer e Medbay</p> <br>
			Para atacar, escolha o ataque que deseja usar.</h2>
			<br>
			<h2>2. Após a ação de Adam, é a vez dos inimigos agirem.
				Os inimigos escolherão suas ações com base em sua lógica de IA.</h2>
				<br>
				<h2>3. Ataques de Adam: <br>
					1- Trirocket Lança três foguetes ao inimigo <br>
					2- Spraytransfer Rajada de tiros, fabricados com sucata cibernética <br>
					4- Medbay Cria uma estação de cura, e recebe +40 de HP <br>
				</h2>
				<br>
				<h2>4. A partida é por turnos e tanto Adam tanto seu inimigo
					podem errar os ataques.</h2>
					<br>
					
					<VoltarMenu />
					
					
					
					<p class="back"></p>
				</div>
			</div>
		</div>

<style>

	a:hover{
		text-decoration:none;
		color: white;
	}

	.black{
		background-color: rgba(0, 0, 0, 0.673);
	}

	h2{
		margin-left: 15%;
		margin-right: 15%;
	}
</style>

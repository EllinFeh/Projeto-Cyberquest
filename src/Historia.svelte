<script>
	import Button from "./Componentes/Button.svelte";
</script>

<div

class="container-page"
style="background-image: url(./images/Fundos/historia1.gif);"
> 

<div class="black">
	<div class="aling">
		<Button label="Voltar" estado="menu"/>
		<Button label="Próximo" estado="historia1"/>
	</div>
	
	<div>
		<div>
			<h1>Ano 2077</h1>
			<h3 class="vh">
				A sociedade de 2077 é fortemente conectada e digitalizada. A
				Internet das Coisas tornou-se uma realidade onipresente, onde
				todos os dispositivos estão interligados, desde os carros
				autônomos até as casas inteligentes, que são capazes de ajustar
				automaticamente a temperatura, a iluminação e outros aspectos de
				acordo com as preferências pessoais de cada indivíduo.
			</h3>
		</div>
		
		<p class="back">‎</p>
	</div>

</div>
	
</div>


<style>
	h1 {
		margin-top: 1em;
}

	.black{
        background-color:rgba(8, 8, 8, 0.5);
    }

	.vh{
  margin-bottom: 45vh;
}

.aling{
	display: flex;
	justify-content: center;
}

</style>

<script>
	import VoltarMenu from "../VoltarMenu.svelte";
</script>

<div

class="container-page"
style="background-image: url(./images/Fundos/Fundovitoria.gif);"
> 

<div class="black">
	
    <div class="winimg">
        <img src="./images/you-win.gif" alt="Win">
       </div>
       <h1>Adam Venceu!</h1>
       <h2>Derrotou o vilão e a paz reinou entre todos os planetas!</h2>

       <VoltarMenu />
		
		<p class="back">‎</p>
	</div>

</div>


<style>
    .winimg{
        margin-top: -100px;
        margin-bottom: -220px;
    }

	h1{
        color: white;
		margin-top: 1em;
    }

    h2{
        color: white;
    }

	.black{
        background-color:rgba(35, 35, 35, 0.5);
    }

</style>

<script>
    export let label = "";
    export let func = "";
    export let styleProp = "";
    export let song = "";
    import { textoExibido } from '../personagens/store';
</script>

<div>
    <button
        onmouseenter="audio2.play();"
        class="btn"
        onclick= {song}
        on:click={func}
        on:click={textoExibido}
        style={styleProp}
    >
        {label}
    </button>
</div>

<style>

    
    .btn {
        color: #fff;
        background-color: rgb(218, 0, 0);
        transition: 300ms;
        animation: fadeInText 2s;
        font-size: 17px;
        border-style: solid;
        width: 160px;
        font-family: inherit;
        padding: 1em;
        margin: 1em;
        border: none;
        border-radius: 18px;
        user-select: none;
    }

    .btn:hover {
        background-color: rgb(0, 0, 0);
        cursor: pointer;
    }

    @keyframes fadeInText {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>

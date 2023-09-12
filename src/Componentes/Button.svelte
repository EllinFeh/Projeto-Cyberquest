<script>
    import { trocarEstadoDoJogo } from "../Estado";
    export let label = "";
    export let estado = "";
    export let styleProp = "";
    export let song = "";
</script>

<div>
    <button
        onmouseenter="audio1.play();"
        onmouseleave="audio2.play();"
        class="btn"
        onclick= {song}
        on:click={() => trocarEstadoDoJogo(estado)}
        style={styleProp}
    >
        {label}
    </button>
</div>

<style>
    .btn {
        background-color: rgb(247, 169, 0);
        color: #000;
        outline: none;
        transition: 300ms;
        animation: fadeInText 1s;
        font-size: 20px;
        border-style: solid;
        border-width: 2px;
        width: 180px;
        padding: 16px;
        font-family: inherit;
        margin: 0;
        box-sizing: border-box;
        border: solid 2px rgb(0, 0, 0);
        border-radius: 18px;
        user-select: none;
    }

    .btn:hover {
        background-color: rgb(203, 148, 255);
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

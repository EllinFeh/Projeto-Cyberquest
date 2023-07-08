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
        color: #333;
        background-color: rgb(175, 229, 253);
        outline: none;
        transition: 300ms;
        animation: fadeInText 1s;
        font-size: 20px;
        border-style: solid;
        border-width: 2px;
        width: 160px;
        padding: 15px;
        font-family: inherit;
        padding: 0.7em;
        margin:0.1em;
        box-sizing: border-box;
        border: solid 2px rgb(252, 252, 252);
        border-radius: 18px;
        user-select: none;
    }

    .btn:hover {
        background-color: rgb(253, 171, 253);
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

<script>

    export let url;

</script>

<footer>

    {#if url !== '/'}
        <a class="back" href="/" sveltekit:prefetch>Zurück</a>
    {/if}
    
    {#if url !== '/impressum'}
        <a href="/impressum" sveltekit:prefetch>Impressum</a>
    {/if}

</footer>

<style>

    footer {
        margin: 1rem;
    }

</style>
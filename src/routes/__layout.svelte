<script context="module">
    export const load = async ({ url }) => ({ props: { url: url.pathname } });
</script>

<script>

    import { setContext } from 'svelte';    
    import Footer from '$lib/Footer.svelte';
    import PageTransitions from '$lib/pageTransitions.svelte';

    export let url = '';

    setContext('debug', false);

</script>

<main>

    <PageTransitions {url}>

        <slot />
        
    </PageTransitions>
    
</main>
    
<Footer {url} />


<style>

    main {
        margin: 1rem;
    }

</style>
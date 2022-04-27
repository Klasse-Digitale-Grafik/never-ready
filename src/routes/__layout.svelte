<script context="module">
    export const load = async ({ url }) => ({ props: { url } });
</script>

<script>

    import { setContext } from 'svelte';
    
    import Footer from '$lib/Footer.svelte';
    import PageTransitions from '$lib/pageTransitions.svelte';
    export let url;

    setContext('debug', false);

</script>

<main>
    <PageTransitions {url}>
        <slot />
    </PageTransitions>
</main>

<Footer />

<style>

    main {
        min-height: 100vh;
        margin: 0 1rem;
    }

</style>
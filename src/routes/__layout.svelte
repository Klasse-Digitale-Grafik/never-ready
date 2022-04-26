<script context="module">
    export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
    
    import Footer from '$lib/Footer.svelte';
    import PageTransitions from '$lib/pageTransitions.svelte';
    export let url;

</script>

<main>
    <PageTransitions {url}>
        <slot />
    </PageTransitions>
</main>

<Footer />

<style>

    header {
        margin: 1rem;
    }
    main {
        margin: 1rem;
        min-height: 100vh;
    }

</style>
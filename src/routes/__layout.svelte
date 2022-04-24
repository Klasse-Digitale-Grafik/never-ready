<script context="module">
    export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
    
    import Footer from '$lib/Footer.svelte';
    import PageTransitions from '$lib/pageTransitions.svelte';
    export let url;

</script>

<header>
    <a href="/">Index</a>
    <a href="/synopsis">Synopsis</a>
</header>

<main>
    <PageTransitions {url}>
        <slot />
    </PageTransitions>
</main>

<Footer />

<style>

    main {
        padding: 1rem;
        min-height: 100vh;
    }

</style>
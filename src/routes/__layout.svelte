<script context="module">
    export const load = async ({ url }) => ({ props: { url: url.pathname } });
</script>

<script>

    import PageTransition from '$lib/pageTransition.svelte';
    import Meta from '$lib/Meta.svelte';
    import Menu from '$lib/Menu.svelte';
    import Footer from '$lib/Footer.svelte';
    import EasterEgg from '$lib/EasterEgg.svelte';

    export let url = '';

</script>

<EasterEgg />

<Meta />

<Menu />

<div>
    <PageTransition {url}>
        <slot />
    </PageTransition>
</div>

<Footer />

<style>

    div {
        margin: 1rem;
    }

</style>
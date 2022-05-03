<script context="module">
    export const load = async ({ url }) => ({ props: { url: url.pathname } });
</script>

<script>

    import PageTransition from '$lib/pageTransition.svelte';
    import Footer from '$lib/Footer.svelte';
    import Meta from '$lib/Meta.svelte';

    export let url = '';

</script>

<Meta />

<div>
    <PageTransition {url}>
        <slot />
    </PageTransition>
</div>

<Footer {url} />    

<style>

    div {
        margin: 1rem;
    }

</style>
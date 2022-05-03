<script>
	import Text from '$lib/shuffledText/Text.svelte';
</script>

<svelte:head>
    <title>Never Ready: Vera van de Seyp</title>
</svelte:head>

<Text readable={true} text="
    [!20] Ver[10]a van d[20]e Seyp (NL[20])[!30]
" />

<nav>
    <a href="https://www.instagram.com/veravandeseyp/">instagram</a>
    <a href="https://veravandeseyp.com/">web</a>
</nav>

<p>
    Vera van de Seyp is a designer and creative coder. She has great interest in artificial intelligence, 
    languages and finding systems in chaos. Currently based in Amsterdam, she runs her own practice, 
    teaches at various art institutes and gives workshops and lectures across the world to inspire makers to code and make their own tools.
</p>

<style>
    nav, p {
        margin-top: 1em;
    }
    nav a {
        display: block;
    }
</style>
<script>
	
	import Text from '$lib/shuffledText/Text.svelte';
	
	let readable = false;
	
</script>

<main on:mouseenter={()=> readable = true} on:mouseleave={()=> readable = false}>
	<Text {readable} text="
		[!10] Ho[50]w c[50]an [!90]
		[!20] we [50] [!80]
		[!30] g[50]o [50] off [!70]
		[!40] gr[50]id [50] an[50]d [!60]
		[!50] br[50]eak [50] wi[50]th [!50]
		[!60] our [50] [!40]
		[!70] tem[50]plat[50]ed [!30]
		[!80] rea[50]lity [!20]
		[!90] ? [!10]
		[!90] ? [!10]
		[!90] ? [!10]
		[!90] ? [!10]
		[!90] ? [!10]
		[!90] ? [!10]
		[!90] ? [!10]
		[!90] ? [!10]
	" />
</main>

<style>
	main {
		font-size: 3rem;
		line-height: 1.1;
	}
</style>
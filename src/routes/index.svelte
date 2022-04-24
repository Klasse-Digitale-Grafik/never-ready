<script>
	
	import Text from '$lib/shuffledText/Text.svelte';
	
	let readable = false;
	let debug = false;
	
</script>

<main on:mouseenter={()=> readable = true} on:mouseleave={()=> readable = false}>
	<Text {debug} {readable} text="
		[!0] Ne[40]ver Rea[40]dy [!40]
		[!0] A Co[40]ngre[30]ss on [!20]
		[!20] th[60]e Visua[20]lity of
		[!40] the I[60]nter[40]net [!10]
		[!100] 9.—11. J[20]une 
		[!100] 20[30]22
		[!50] HFB[50]K Hamburg [!10]
	" />
</main>

<style>
	main {
		font-size: 3rem;
		line-height: 1.1;
	}
</style>
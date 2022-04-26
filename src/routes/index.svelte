<script>
	
	import Text from '$lib/shuffledText/Text.svelte';
	
	let readable = true;
	let debug = true;
	
</script>

<main on:mouseenter={()=> readable = true} on:mouseleave={()=> readable = false}>
	<Text {debug} {readable} text="
		[!50] Ne[20]ver Rea[40]dy[20] [!100]
		[!20] [40]A Co[40]ngre[30]ss on [!20]
		[!60] th[15]e Visua[60]lity of [!40]
		[!70] [60]the I[60]nter[40]net [40][!10]
		[!30] [40]9.—11. J[50]une[20] [!45]
		[!20] [40]20[50]22[!70]
		[!50] HFB[50]K Hamburg [!80]
	" />
</main>

<main>
	<Text {debug} {readable} text="
	[!20] [10]with[70] [!100]
	[!20] DVT[60]K (GB/FR) [!70]
	[!0] Kex[40]in Ha[60]o (NL) [!100]
	[!10] [50]Lutz Iss[60]ler (DE)[15] [!90]
	[!60] Marco La[30]nd (DE)[70] [!70]
	[!30] [30]Oli[60]a Liali[50]na (DE) [!10]
	[!0] [10]Laiq[30]a Mohid (GB)[50] [!80]
	[!40] [50]Laurel Schwu[40]lst (US) [!20]
	[!70] Vera va[50]n de S[20]eyp (NL)[10] [!0]
	[!40] Har[50]ald Pet[10]er Ström (SE) [!20]
	[!50] Yeh[10]wan Song[60] (KR)[40] [!35]
	[!10] [60]Liebe[40]rmann, Kiepe, [60] [!30]
	[!10] Reddemann (DE) [!70]
" />
</main>

<main>
	<Text {debug} text="
		[!0] Time
		[!0] Table
		[!0] Tickets
		[!0] Location
	" />
</main>

<style>
	main {
		font-size: 3.2rem;
		line-height: 1;
	}
</style>
<script>
	
	import Text from '$lib/shuffledText/Text.svelte';
	import Line from '$lib/shuffledText/Line.svelte';
	
	let readable = true;

	const ticketLink = 'https://eventbrite.com';
	
</script>

<main on:mouseenter={()=> readable = true} on:mouseleave={()=> readable = false}>
	<Text {readable} href="/synopsis" text="
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
	<Text>
		<Line {readable} delay={0}      text={'[!20] [10]with[70] [!100]'} />
		<Line {readable} delay={100*1}  href="/speakers/dvtk" text={'[!20] DVT[60]K (GB/FR) [!70]'} />
		<Line {readable} delay={100*2}  href="/speakers/kexin-hao" text={'[!0] Kex[40]in Ha[60]o (NL) [!100]'} />
		<Line {readable} delay={100*3}  href="/speakers/lutz-issler" text={'[!10] [50]Lutz Iss[60]ler (DE)[15] [!90]'} />
		<Line {readable} delay={100*4}  href="/speakers/marco-land" text={'[!60] Marco La[30]nd (DE)[70] [!70]'} />
		<Line {readable} delay={100*5}  href="/speakers/olia-lialina" text={'[!30] [30]Oli[60]a Liali[50]na (DE) [!10]'} />
		<Line {readable} delay={100*6}  href="/speakers/laiqa-maohid" text={'[!0] [10]Laiq[30]a Mohid (GB)[50] [!80]'} />
		<Line {readable} delay={100*7}  href="/speakers/laurel-schwulst" text={'[!40] [50]Laurel Schwu[40]lst (US) [!20]'} />
		<Line {readable} delay={100*8}  href="/speakers/vera-van-de-seyp" text={'[!70] Vera va[50]n de S[20]eyp (NL)[10] [!0]'} />
		<Line {readable} delay={100*9}  href="/speakers/harald-peter-stroem" text={'[!40] Har[50]ald Pet[10]er Ström (SE) [!20]'} />
		<Line {readable} delay={100*10} href="/speakers/yehwan-song" text={'[!50] Yeh[10]wan Song[60] (KR)[40] [!35]'} />
		<Line {readable} delay={100*11} href="/speakers/liebermann-kiepe-reddemann" text={'[!10] [60]Liebe[40]rmann, Kiepe, [60] [!30]'} />
		<Line {readable} delay={100*12} href="/speakers/liebermann-kiepe-reddemann" text={'[!10] Reddemann (DE) [!70]'} />
	</Text>
</main>

<main>
	<Text>
		<Line {readable} delay={0}   href="/timetable" text={'[!0] Timetable'} />
		<Line {readable} delay={100} href={ticketLink} text={'[!0] Tickets please book your free ticket via the link. As there is limited space, ticketing is mandatory. We also kindly ask you to return your ticket in case you can not make it to the event. Thank You!'} />
		<Line {readable} delay={200} href="/location" text={'[!0] Location'} />
	</Text>
</main>

<style>
	main {
		font-size: 3.2rem;
		line-height: 1;
	}
</style>
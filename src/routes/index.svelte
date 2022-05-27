<script>
	
	import Text from '$lib/shuffledText/Text.svelte';
	import Line from '$lib/shuffledText/Line.svelte';
	
</script>

<svelte:head>
    <title>Never Ready: 9.–11. Juni 2022</title>
</svelte:head>

<main>
	<Text text="
		[!40][5]Ne[20]ver Rea[40]dy[20] [!100]
		[!10][40]A Co[40]ngre[30]ss on [!20]
		[!40]th[15]e Visua[60]lity of [!40]
		[!50][60]the I[60]nter[40]net [40][!10]
		[!20][40]9.—11. J[50]une[20] [!60]
		[!10][40]20[50]22[!70]
		[!50]HFB[50]K Hamburg [!80]
	" />
</main>

<main id="speakers">
	<Text let:readable>
		<Line {readable} delay={0}      text={'[!80] [10]with[70] [!50]'} />
		<Line {readable} delay={100*1}  href="/speakers/dvtk" text={'[!70]DVT[60]K (GB/FR) [!20]'} />
		<Line {readable} delay={100*2}  href="/speakers/kexin-hao" text={'[!70]Kex[40]in Ha[60]o (NL) [!10]'} />
		<Line {readable} delay={100*3}  href="/speakers/sebastian-schmieg" text={'[!90][50]Seba[20]stian Sc[60]hmieg (DE)[15] [!20]'} />
		<Line {readable} delay={100*4}  href="/speakers/marco-land" text={'[!60]Marco La[30]nd (DE)[70] [!70]'} />
		<Line {readable} delay={100*5}  href="/speakers/olia-lialina" text={'[!30][30]Oli[60]a Liali[50]na (DE) [!10]'} />
		<Line {readable} delay={100*6}  href="/speakers/laiqa-maohid" text={'[!0][10]Laiq[30]a Mohid (GB)[50] [!80]'} />
		<Line {readable} delay={100*7}  href="/speakers/laurel-schwulst" text={'[!10][50]Laurel Schwu[40]lst (US) [!70]'} />
		<Line {readable} delay={100*8}  href="/speakers/vera-van-de-seyp" text={'[!10]Vera va[50]n de S[20]eyp (NL)[10] [!50]'} />
		<Line {readable} delay={100*9}  href="/speakers/harald-peter-stroem" text={'[!30]Har[50]ald Pet[10]er Ström (SE) [!10]'} />
		<Line {readable} delay={100*10} href="/speakers/yehwan-song" text={'[!50]Yeh[10]wan Song[60] (KR)[40] [!10]'} />
		<Line {readable} delay={100*11} href="/speakers/liebermann-kiepe-reddemann" text={'[!30][60]Liebe[40]rmann, Kiepe, [60] [!20]'} />
		<Line {readable} delay={100*12} href="/speakers/liebermann-kiepe-reddemann" text={'[!20][30]Redd[20]emann (DE)[10] [!30]'} />
	</Text>
</main>

<main>
	<Text let:readable>
		<Line {readable} delay={0} text={'[!50][60]Time[10]tab[30]le t.b.a.[!40]'} />
	</Text>
	<Text let:readable>
		<Line {readable} delay={100} href="/tickets" text={'[!30][20]Ticke[10]ts[!10]'} />
	</Text>
	<Text let:readable>
		<Line {readable} delay={200} href="/location" text={'[!20][40]Loc[20]atio[10]n[30]'} />
	</Text>
</main>

<main id="about" class="about">
	<p>
		From the  9th to the 11th of June 2022 
		we are organizing a congress
		about the visuality 
		of the Internet.
		Under the title Never Ready  
		it will take place at our art school, the 
		HFBK in Hamburg, Germany.
	</p>
	<p>
		The multitude of spaces in the online world have widely been unified in the last few years.  Innovation and finding your own unique solutions have been pushed aside, easing us into lazy comfort. Together with designers, writers and artists from all over the world we want to go off grid for a breather and get out of our cozy pillows. Together we want to be nostalgic about a new web that has yet to be conjured by us and share new possibilities and viewpoints for a happier and more diverse time in front of and behind the screen. We envision a digital detox from the online anecdotes and how the internet should look and delve deep into new narrations that break up with our templated reality. To overthrow the golden rules of web design to which we are bound and embrace lost or new ways of how the web works.	
	</p>
</main>

<main id="team" class="team">
	<p>
		Team:
		Moritz Ebeling,
		Stina Frenz,
		Wiebke Grieshop,
		Kim Kleinert,
		Karla Krey,
		Tigran Saakyan,
		Torben Spieker,
		Stephan Thiel,
		Leoni Voltz,
		Yulia Wagner;
	</p>
	<Text let:readable>
		<Line {readable} href="http://digitale-grafik.com" text={'[!30][10]Klas[20]se Dig[10]itale Grafi[30]k[!10]'} />
	</Text>
	<p>
		Prof. Christoph Knoth, Prof. Konrad Renner;
	</p>
</main>

<style>

	.about, .team {
		margin-top: 1em;
	}
	.about p + p {
		margin-top: 1em;
	}

</style>
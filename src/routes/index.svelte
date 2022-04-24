<script>

    import Line from '$lib/text/Line.svelte';

    const text = [
		// space before, [ text and spaces between ], space after
		[ 10, ['Ho', 80, 'w ', 1, 'c', 20, 'an'], 90 ],
		[ 20, ['we',70], 80 ],
		[ 30, [20, 'g', 20, 'o ', 50, 'off'], 70 ],
		[ 40, ['gr', 10, 'id ', 0, 'an', 50, 'd'], 60 ],
		[ 50, [10, 'br', 20, 'eak ', 30, 'w', 10, 'ith'], 50 ],
		[ 60, ['our'], 40 ],
		[ 70, ['tem', 20, 'plat', 20, 'ed'], 30 ],
		[ 80, [40, 'rea', 20, 'lity'], 20 ],
		[ 90, [30, '?'], 10 ],
	];

    let shuffled = true;
	let hidden = false;
	let debug = false;

</script>

{#each text as [before, text, after], i}
    <Line delay={i*50} {before} {text} {after} {shuffled} {debug} />
{/each}
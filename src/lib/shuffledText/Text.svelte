<script>
	
	import { breakLines } from './helpers.js';
	import Line from './Line.svelte';
	
	export let debug = false;
	export let readable = true;
	export let visible = true;

	export let text = '';
	let lines = breakLines( text );
	
</script>

{#each lines as line, i}
	<Line {debug} {readable} {visible} delay={100*i} text={line} />
{/each}

<style>
</style>
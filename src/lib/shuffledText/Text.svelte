<script>
	
	import { breakLines } from './helpers.js';
	import Line from './Line.svelte';
	
	export let readable = true;
	export let href = '';

	export let text = '';
	let lines = breakLines( text );
	
</script>

<slot>
	{#each lines as line, i}
		<Line {href} {readable} delay={100*i} text={line} />
	{/each}
</slot>

<style>
</style>
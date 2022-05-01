<script>
	
	import { breakLines } from './helpers.js';
	import Line from './Line.svelte';
	
	export let readable = false;
	export let href = '';

	export let text = '';
	let lines = breakLines( text );
	
</script>

<div on:mouseenter={()=> readable = true} on:mouseleave={()=> readable = false}>
	<slot {readable}>
		{#each lines as line, i}
			<Line {href} {readable} delay={100*i} text={line} />
		{/each}
	</slot>
</div>

<style>
</style>
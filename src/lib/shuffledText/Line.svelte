<script>
	
	import { parseText, WordObject, SpaceObject} from './helpers.js';
	import Word from './Word.svelte';
	import Space from './Space.svelte';
	
	export let text = '';
	let snippets = parseText( text );
	
	export let readable = true;
	export let delay = 0;
	export let debug = false;
	
</script>

<p class="line" class:debug style="--delay:{delay}ms;">
	{#each snippets as item}
		{#if item instanceof WordObject}
			<Word text={item.text} {debug} />
		{:else if item instanceof SpaceObject}
			<Space {...item} expanded={item.expanded === readable} {debug} />
		{/if}
	{/each}
</p>

<style>
	
	/* line */
	.line {
		flex: 1;
		margin: 0;
		display: flex;
		justify-content: center;
	}
	
	.line.debug {
		background-color: #fcf;
	}
	
</style>
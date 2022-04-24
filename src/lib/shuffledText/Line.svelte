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

<p class="line" class:debug>
	{#each snippets as item, i}
		{#if item instanceof WordObject}
			<Word text={item.text} delay={delay + (i*30)} {debug} right={i > snippets.length/2.4} />
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
	
	.debug {
		background-color: #fcf;
	}
	
</style>
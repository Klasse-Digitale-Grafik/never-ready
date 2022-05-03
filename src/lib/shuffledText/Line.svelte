<script>
	
	import { debug } from '$lib/config.js';
	import { parseText, WordObject, SpaceObject} from './helpers.js';
	import Word from './Word.svelte';
	import Space from './Space.svelte';
	
	export let text = '';
	let snippets = parseText( text );
	
	export let readable = true;
	export let delay = 0;
	export let href = '';

	let target = href.startsWith('http') ? '_blank' : '';
	
</script>

<svelte:element this={href ? 'a' : 'p'}
	class="line" class:debug
	style="--delay:{delay}ms;"
	rel="noopener noreferrer"
	{href}
	{target}
	sveltekit:preload
	>
	
	{#each snippets as item, i}
		{#if item instanceof WordObject}
			<Word text={item.text} delay={delay + (i*30)} {debug} right={i > snippets.length/2.4} />
		{:else if item instanceof SpaceObject}
			<Space {...item} expanded={item.expanded === readable} {debug} />
		{/if}
	{/each}

</svelte:element>

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
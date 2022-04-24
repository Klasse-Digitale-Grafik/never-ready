<script>
	
	import Word from './Word.svelte';
	import Space from './Space.svelte';
	
	export let text;
	export let shuffled = true;
	export let before = 100;
	export let after = 100;
	export let delay = 0;
	export let debug = false;
	
</script>

<p class="line" class:debug style="--delay:{delay}ms;">
	<Space expanded={!shuffled} width={before} {debug} />
	{#each text as item, w}
		{#if typeof item === 'string'}
			<Word text={item} {debug} />
		{:else}
			<Space expanded={shuffled} width={item} {debug} />
		{/if}
	{/each}
	<Space expanded={!shuffled} width={after} {debug} />
</p>

<style>
	
	/* line */
	.line {
		flex: 1;
		margin: 0;
		display: flex;
		justify-content: center;
	}
	
	/* debug */
	.debug {
		background-color: #fcf;
	}
	.debug :global(.word) {
		background-color: #cfc;
	}
	.debug :global(.space) {
		background-color: #ccf;
		overflow: hidden;
		display: flex;
		font-size: 10px;
	}
	.debug :global(.space:before) {
		content: attr(data-width);
	}
	
</style>
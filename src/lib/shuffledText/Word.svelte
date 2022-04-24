<script>
	
	export let text = '';
	export let debug = false;
	export let right = false;
	export let visible = true;
	
</script>

<span class="word" class:debug class:right class:invisible={!visible}>
	{@html text.replace(' ','&nbsp;')}
</span>

<style>
	
	.word {
		display: block;
		flex: 0 0 auto;
		transition-property: opacity, transform;
		transition-duration: 500ms;
		transition-timing-function: ease-in-out;
		transition-delay: var(--delay);
	}
	.debug {
		background-color: #cfc;
	}
	.invisible {
		transform: translateX(-500px);
		opacity: 0;
	}
	.right.invisible {
		transform: translateX(500px);
	}

</style>
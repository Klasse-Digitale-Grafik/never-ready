<script>
	
	export let text;
	export let debug = false;
	
</script>

<span class="word" class:debug>
	{@html text.replace(' ','&nbsp;')}
</span>

<style>
	
	.word {
		display: block;
		flex: 0 0 auto;
	}
	.word.debug {
		background-color: #cfc;
	}

</style>
<script>
	
	export let text;
	
</script>

<span class="word">{@html text.replace(' ','&nbsp;')}</span>

<style>
	
	.word {
		display: block;
		flex: 0 0 auto;
	}

</style>
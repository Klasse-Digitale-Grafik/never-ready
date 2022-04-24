<script>
	
	export let expanded = true;
	export let width = 100;
	
</script>

<span class="space" class:expanded style="--width:{width}%" data-width="{width}"></span>

<style>
	
	.space {
		display: block;
		flex: 0 1 0;
		flex-basis: 0;
		transition-property: width, flex-basis;
		transition-duration: 500ms;
		transition-timing-function: ease-in-out;
		transition-delay: var(--delay);
	}
	
	.expanded {
		flex-basis: var(--width);
	}

</style>
<script>
	
	import { debug } from '$lib/config.js';
	export let expanded = true;
	export let width = 100;
	
</script>

<span
	class="space"
	class:expanded
	class:debug
	style="--width:{width}%"
	data-width="{width}"></span>

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
	
	.debug {
		background-color: #ccf;
		overflow: hidden;
		display: flex;
		font-size: 10px;
	}
	.debug:before {
		content: attr(data-width);
	}

</style>
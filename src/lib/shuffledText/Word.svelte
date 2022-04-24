<script>

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	
	export let text = '';
	export let debug = false;
	export let right = false;
	export let delay = 0;

	const transition = {
		delay,
		duration: 1000,
		y: 0,
		opacity: 0,
		x: 500 * (right ? 1 : -1)
	};
	
</script>

<span class="word" class:debug class:right
	in:fly={{ ...transition, easing: cubicOut, delay: delay + transition.duration + 1000 }}
	out:fly={{ ...transition, easing: cubicIn }}
	>
	{@html text.replace(' ','&nbsp;')}
</span>

<style>
	
	.word {
		display: block;
		flex: 0 0 auto;
		/* transition-property: opacity, transform;
		transition-duration: 500ms;
		transition-timing-function: ease-in-out;
		transition-delay: var(--delay); */
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
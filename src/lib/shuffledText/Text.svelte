<script>
	
	import { onMount } from 'svelte';
	import { breakLines } from './helpers.js';
	import Line from './Line.svelte';
	
	export let text = '';
	let lines = breakLines( text );

	export let href = '';
	
	export let readable = false;
	let interval;

	function enter(){
		clearInterval( interval );
		readable = true;
	}
	function leave(){
		readable = false
		interval = setInterval(() => {
			readable = !readable;
		}, 5000 + Math.floor( Math.random() * 10000 ));
	}
	onMount(()=>{
		leave();
		return ()=>{
			clearInterval( interval );
		};
	});
	
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
	<slot {readable}>
		{#each lines as line, i}
			<Line {href} {readable} delay={100*i} text={line} />
		{/each}
	</slot>
</div>

<style>
</style>
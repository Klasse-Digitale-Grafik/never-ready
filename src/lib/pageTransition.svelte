<script>

    import {fly} from 'svelte/transition';
    import {cubicIn, cubicOut} from 'svelte/easing';

    export let url = "";

    const options = {
        duration: 500,
        opacity: 0
    };

</script>

{#key url}
    <div in:fly={{ ...options, delay: 600, easing: cubicIn }}
         out:fly={{ ...options, easing: cubicOut }} >
        <slot />
    </div>
{/key}
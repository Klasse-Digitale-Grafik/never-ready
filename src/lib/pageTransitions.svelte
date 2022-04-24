<script>

    import {page} from '$app/stores';
    import {fly} from "svelte/transition";

    export let url = "";

    const options = {
        duration: 1000,
        opacity: 1
    };

</script>

{#key $page.url }
    <div
        in:fly={{ ...options, delay: options.duration+1 }}
        out:fly={{ ...options }}
        >
        <slot />
    </div>
{/key}
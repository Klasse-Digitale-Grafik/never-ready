<script>

    import { fly, fade } from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';

    let links = [
        ['/', 'Intro'],
        ['/timetable', 'Timetable'],
        ['/tickets', 'Tickets'],
        ['/location', 'Location'],
        ['/impressum', 'Legal Notice'],
    ];

    let open = false;

</script>

{#if open}
    
    <button on:click={()=>{ open = false }}>
        {@html '&lt;'}
    </button>

    <nav
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 300, delay: links.length*100 }}
        >
        {#each links as [href, title], i}
            <a
                {href}
                sveltekit:prefetch
                in:fly={{ duration: 300, delay: 100 + i*100, x:-300, opacity: 0, easing: cubicOut }}
                out:fly={{ duration: 300, delay: i*100, x:300, opacity: 0, easing: cubicIn }}
                >{title}</a>
        {/each}
    </nav>

{:else}

    <button on:click={()=>{ open = true }}>
        {@html '&gt;'}
    </button>

{/if}

<style>

    button {
        position: fixed;
        z-index: 21;
        top: 1rem;
        left: 1rem;
        width: 1em;
        height: 1em;
    }

    nav {
        position: fixed;
        z-index: 20;
        background-color: var(--background);
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    a {
        display: block;
    }

    a:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 0.1em;
    }

</style>
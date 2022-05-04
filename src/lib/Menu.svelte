<script>

    import { fly, fade } from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';

    let links = [
        ['/#about', 'About'],
        ['/#speakers', 'Speakers'],
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
{:else}
    <button on:click={()=>{ open = true }}>
        {@html '&gt;'}
    </button>
{/if}

{#if open}
    <nav
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 300, delay: links.length*100 }}
        on:click={()=>{ open = false }}
        >
        {#each links as [href, title], i}
            <div
                in:fly={{ duration: 300, delay: 100 + i*100, x:-300, opacity: 0, easing: cubicOut }}
                out:fly={{ duration: 300, delay: i*100, x:300, opacity: 0, easing: cubicIn }}
                >
                <span class="space"></span>
                <a {href} sveltekit:prefetch>{title}</a>
            </div>
        {/each}
    </nav>
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
        /* justify-content: center;
        align-items: center; */
        flex-direction: column;
        padding: 1rem;
    }

    a:hover {
        text-decoration: underline;
        text-decoration-thickness: 0.07em;
        text-underline-offset: 0.1em;
    }

</style>
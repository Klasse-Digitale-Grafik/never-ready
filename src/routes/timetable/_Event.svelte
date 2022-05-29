<script>

    export let event;

</script>

<li>
    <div>

        {#if event.title}
            <h3>
                {#if event.links}
                    {#each event.links.names as name, i}
                        <a href={event.links.links[i]} sveltekit:prefetch>{name}</a>{#if i < event.links.links.length - 1},&nbsp;{/if}
                    {/each}
                {:else if event.link}
                    <a href={event.link} sveltekit:prefetch>{event.title}</a>
                {:else}
                    {event.title}
                {/if}
            </h3>
        {/if}

        {#if event.subtitle}
            <h4>{event.subtitle}</h4>
        {/if}

        {#if event.location}
            <h5>{event.location}</h5>
        {/if}

    </div>
</li>

<style>  
    
    li :global(a) {
        text-decoration: underline;
        text-decoration-thickness: 0.07em;
        text-underline-offset: 0.1em;
    }

</style>
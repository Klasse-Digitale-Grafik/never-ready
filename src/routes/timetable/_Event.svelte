<script>

    export let event;

</script>

<li>
    <svelte:element this={event.link ? 'a' : 'div'} href={event.link} title="{event.day} {event.time}">

        {#if event.title}
            <h3>{event.title}</h3>
        {/if}

        {#if event.subtitle}
            <h4>{event.subtitle}</h4>
        {/if}

        {#if event.location}
            <h5>{event.location}</h5>
        {/if}

    </svelte:element>
</li>

<style>  
    
    li {
    }

</style>
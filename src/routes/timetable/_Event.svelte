<script>

    export let event;

</script>

<li title="{event.day} {event.time}">

    <p>{event.day} {event.time}</p>

    {#if event.title}
        <h3>{event.title}</h3>
    {/if}

    {#if event.subtitle}
        <h4>{event.subtitle}</h4>
    {/if}

    {#if event.location}
        <h5>{event.location}</h5>
    {/if}

</li>

<style>  
    
    li {
    }

</style>
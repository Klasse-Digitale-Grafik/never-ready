<script>

    import Event from './_Event.svelte';

    export let events = [];
    export let earliest;
    export let latest;

    let n = 1 + ( (latest - earliest) / 100 );
    let steps = Array.from( Array(n) ).map( (step,i) => {
        return `${(earliest/100) + i}:00`;
    });

</script>

<header style="--steps:{n+1};">
    {#each steps as step, i}
        <h4>{step}</h4>
    {/each}
</header>

<ul style="--steps:{n+1};">
    {#each events as event, i}
        <div class="event" style="--slot:{event.slot}; --row:{i+1};">
            <Event {event} />
        </div>
    {/each}
</ul>

<style>

    header {
        position: sticky;
        top: 0;
        z-index: 10;
    }
    header h4 {
        flex: 1;
    }

    header, ul {
        display: grid;
        grid-template-columns: repeat(var(--steps), minmax(0, 1fr));
    }

    .event {
        grid-column-start: var(--slot);
        grid-column-end: span 2;
        grid-row-start: var(--row);
    }

</style>
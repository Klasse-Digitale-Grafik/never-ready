<script>

    import Event from './_Event.svelte';

    export let days;
    export let earliest;
    export let latest;

    let n = 1 + ( (latest - earliest) / 100 );
    let steps = Array.from( Array(n) ).map( (step,i) => {
        return `${(earliest/100) + i}:00`;
    });

</script>

<svelte:head>
    <title>Never Ready: Timetable</title>
</svelte:head>

<header class="font-s" style="--steps:{n+2};">
    <h4>&nbsp;</h4>
    {#each steps as step, i}
        <h4>{step}</h4>
    {/each}
</header>

{#each Object.entries(days) as [day, events]}
    <ul class="font-s" style="--steps:{n+2};">
        <div class="day">{new Date(day).toLocaleDateString('en-GB',{ weekday: 'long'})}</div>
        {#each events as event, i}
            <div class="event" style="--slot:{event.slot+1}; --row:{i+1};">
                <Event {event} />
            </div>
        {/each}
    </ul>
{/each}

<style>

    header, .day {
        position: sticky;
        top: 1rem;
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
<script>

    import Event from './_Event.svelte';

    export let days;
    export let earliest;
    export let latest;

    let n = 1 + ( (latest - earliest) / 100 );
    let steps = Array.from( Array(n) ).map( (step,i) => {
        return (earliest/100) + i;
    });

</script>

<svelte:head>
    <title>Never Ready: Timetable</title>
</svelte:head>

{#each Object.entries(days) as [day, events]}
    <ul class="font-s" style="--steps:{n+1};">

        <div class="day" style="--slot:{steps.length+1}; --row:{1};">
            {new Date(day).toLocaleDateString('en-GB',{weekday:'long'})},
            {new Date(day).toLocaleDateString('en-GB',{day:'numeric'})}.
            {new Date(day).toLocaleDateString('en-GB',{month:'long'})}
        </div>

        {#each events as event, i}

            <div class="time" style="--slot:{event.slot}; --row:{(i*2)+1};">
                {event.time}
            </div>

            <div class="event" style="--slot:{event.slot}; --row:{(i*2)+2};">
                <Event {event} />
            </div>

        {/each}
    </ul>
{/each}

<style>

    header, .day, .time {
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

    .day {
        grid-column-start: var(--slot);
        grid-row-end: span 2;
        /* background-color: rgba(255,0,0,0.5); */
    }
    
    .time {
        /* background-color: rgba(0,255,0,0.5); */
        grid-column-start: var(--slot);
        grid-row-start: var(--row);
    }

    .day, .time {
        font-feature-settings: "tnum";
    }

    .event {
        /* background-color: rgba(0,0,255,0.5); */
        grid-column-start: var(--slot);
        grid-column-end: span 2;
        grid-row-start: var(--row);
    }
    @media (max-width: 720px){
        .event {
            grid-column-end: span 4;
        }
    }

    .media-m {
        display: none;
    }
    @media (min-width: 720px){
        .media-m {
            display: inline;
        }
    }

</style>
<script>

    export let events;

</script>

<p>Timetable</p>

{#each events as event}
    <div>
        {event.day}
        {event.time}
        {event.title}
        {event.subtitle}
        {event.location}
    </div>
{/each}
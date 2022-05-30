<script>

    const directions = [
        [ 'U3 Mundsburg', "https://goo.gl/maps/tUqm4e4CdDw79ND6A" ],
        [ 'S1, S11 Landwehr', "https://goo.gl/maps/Xz5XeSEEyKqR2XJJ8" ],
        [ 'U1 Wartenau', "https://goo.gl/maps/LDdtzStmvTA1xD6z6" ],
        [ 'Bus 25, 172, 606 Uferstraße', "https://goo.gl/maps/rpx1MPaYCZaSDctL7" ],
    ];

</script>

<svelte:head>
    <title>Never Ready: Location</title>
</svelte:head>

<main>

    <h1>
        <span class="space"></span>
        Location
    </h1>

    <p>
        Please count in enough time for your arrival, so that we can all start together in time.
    </p>

    <p>
        As the pandemic situation is still around we ask you to take care, stay safe and do not attend if you feel certain symptoms.
        Please act according to current pandemic regulations in Germany or Hamburg.
    </p>

    <p>
        <a target="_blank" rel="noopener noreferrer external" href="https://hfbk-hamburg.de">University of fine Arts Hamburg</a>
        <br />
        <a target="_blank" rel="noopener noreferrer external" href="https://goo.gl/maps/CHdcB5VwGEwiYXM96">
            Lerchenfeld 2
            <br />
            22081 Hamburg
        </a>
    </p>

    <p>
        {#each directions as [title, href]}
            <a target="_blank" rel="noopener noreferrer external" {href}>{title}</a>
            <br />
        {/each}
    </p>

</main>

<style>

    p {
        margin: 0.5em 0;
    }

</style>
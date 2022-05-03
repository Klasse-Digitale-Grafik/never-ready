<script>

    let title = 'Never Ready';

    const site = 'https://neverready.com';

    const description = 'Never Ready Congress on the visuality of the internet. HFBK Hamburg 2022.';
    const keywords = [
        'never',
        'ready',
        'congress',
        'visuality',
        'internet',
        'hfbk',
        'graphic',
        'design',
        'hamburg',
        'germany',
        '2022',
    ];

</script>

<svelte:head>

    <title>{title}</title>

    <meta name="description" content={description}>
    <meta name="keywords" content={keywords.join(',')}>

    <meta property="og:title" content="{title}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{site}" />
    <meta property="og:locale" content="de" />
    <meta property="og:site_name" content="Never Ready" />
    <meta property="og:image" content="{site}/images/never-ready.jpg" />

</svelte:head>
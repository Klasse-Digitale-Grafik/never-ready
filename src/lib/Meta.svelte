<script>

    import { serializeSchema } from './JsonLd.js';

    let title = 'Never Ready';

    const siteUrl = 'https://neverready.com';

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

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        about: 'Congress on the visuality of the internet',
        location: {
            '@type': 'Place',
            name: 'Hochschule für Bildende Künste Hamburg',
            alternateName: 'HFBK',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Lerchenfeld 2',
                postalCode: '22081',
                addressLocality: 'Hamburg',
                addressCountry: 'Germany'
            },
            url: 'https://hfbk-hamburg.de'
        },
        organizer: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Klasse Digitale Grafik',
            url: 'htps://digitale-grafik.de'
        },
        alternateName: 'neverready',
        url: siteUrl,
        description,
        keywords,
    };

</script>

<svelte:head>

    <title>{title}</title>

    <meta name="description" content={description}>
    <meta name="keywords" content={keywords.join(',')}>

    <meta property="og:title" content="{title}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{siteUrl}" />
    <meta property="og:locale" content="de" />
    <meta property="og:site_name" content="Never Ready" />
    <meta property="og:image" content="{siteUrl}/images/never-ready.jpg" />

    {@html serializeSchema(schema)}

</svelte:head>
<script>

    import { onMount } from "svelte";

    function randomItem( arr ){
        return arr[Math.floor( Math.random() * arr.length )];
    }

    const prompts = [
        'Never ready',
        'Not ready',
        'Not ready yet',
        'Never be ready',
        'Never be ready again',
        'Oh, not ready yet.',
        'Damn, still not ready.',
        'Shit, still not ready',
        'Nice, but never ready',
        'OMG! Never! Ready!',
        'Look, how never ready it is!',
        'This website is never ready.',
        'This website will be never ready.',
        'Will this website ever be ready?',
        'I am not ready',
        'I am not ready yet',
        'I will not be ready by then',
        'I will not be ready',
        'I will never be ready',
        'Will I ever be ready?',
        'You are not ready for this',
        'I hope you‘re ready for this',
        'I hope this website will be ready by then...',
        'Are you ready?',
        'We’re not ready',
        'We’re not ready yet',
        'We’re not ready yet?',
        'We’re not ready yet!',
        'We’re not ready yet...',
        'Do you think this website is ready?',
        'What makes a project ready?',
        'Already?',
    ];

    function neverReady(){
        let prompt = randomItem( prompts );
        console.log( prompt );
        setTimeout(() => {
            neverReady();
        }, 100 + Math.random() * 2000 );
    }

    onMount(()=>{
        neverReady();
    });

</script>

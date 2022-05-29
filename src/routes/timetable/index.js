import csvToJson from 'convert-csv-to-json';

function sortByDayAndTime( a, b ){
    let keyA = parseInt( `${a.day} ${a.time}`.replace(/\D/g,'') );
    let keyB = parseInt( `${b.day} ${b.time}`.replace(/\D/g,'') );
    return keyA - keyB;
}

function getMinutes( time ){
    if( !time ){
        return 0;
    }
    time = time.split(':');
    if(time.length < 1){
        return 0;
    }
    return parseInt( time[1] );
}

function findEarliestAndLatestTime( events ){
    let earliest = 1500;
    let latest = 1500;

    events.forEach( event => {
        earliest = Math.min( earliest, parseInt( event.time.replace(/\D/g,'') ));
        latest = Math.max( latest, parseInt( event.time.replace(/\D/g,'') ));
    });

    return {
        earliest,
        latest
    };
}

function formatEvent( event, earliest ){

    // time 

    let time = parseInt( event.time.replace(/\D/g,'') );
    let slot = 1 + Math.floor( ( time - earliest ) / 100 );
    let minutes = getMinutes( event.time );

    // links

    let links;
    if( event.link.startsWith('[') ){
        event.link = event.link.replace('[','').replace(']','');
        links = {
            names: event.title.split(/\s*&\s*|\s*,\s*|\sand\s/),
            links: event.link.split(/\s*,\s*/)
        };
    }

    return {
        ...event,
        minutes,
        links,
        slot
    };
}

export async function get() {

    // load data

    let events = csvToJson.getJsonFromCsv(`static/data/timetable.csv`)
        .sort(sortByDayAndTime);

    // find earliest and 
    
    let { earliest, latest } = findEarliestAndLatestTime( events );

    // format events

    events = events.map( event => formatEvent( event, earliest ) );

    // group by days

    let days = {};
    events.forEach( event => {
        if( !days.hasOwnProperty( event.day ) ){
            days[ event.day ] = [];
        }
        days[ event.day ].push( event );
    });

    return {
        body: {
            earliest,
            latest,
            days,
            events,
        }
    };
}
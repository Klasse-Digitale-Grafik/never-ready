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

    // format time 

    let time = parseInt( event.time.replace(/\D/g,'') );
    let minutes = getMinutes( event.time );

    // grid column

    let slot = 1 + Math.floor( ( time - earliest ) / 100 );

    // multiple links (e.g. for the panels)

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

function groupEventsByDay( events ){
    let days = {};
    events.forEach( event => {
        if( !days.hasOwnProperty( event.day ) ){
            days[ event.day ] = [];
        }
        days[ event.day ].push( event );
    });
    return days;
}

export async function get() {

    // load data

    let eventsData = csvToJson
        .getJsonFromCsv(`static/data/timetable.csv`)
        .sort(sortByDayAndTime);

    // find earliest and 
    
    let { earliest, latest } = findEarliestAndLatestTime( eventsData );

    // format events

    let events = eventsData.map( event => formatEvent( event, earliest ) );

    // group by days

    let days = groupEventsByDay( events );

    return {
        body: {
            earliest,
            latest,
            days,
            events,
        }
    };
}
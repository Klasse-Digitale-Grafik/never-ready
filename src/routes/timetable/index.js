import csvToJson from 'convert-csv-to-json';

function sortByDayAndTime( a, b ){
    let keyA = parseInt( `${a.day} ${a.time}`.replace(/\D/g,'') );
    let keyB = parseInt( `${b.day} ${b.time}`.replace(/\D/g,'') );
    return keyA - keyB;
}

export async function get() {

    let events = csvToJson.getJsonFromCsv(`static/timetable.csv`)
    .sort(sortByDayAndTime);
    
    let earliest = 1500;
    let latest = 1500;

    events.forEach( event => {
        earliest = Math.min( earliest, parseInt( event.time.replace(/\D/g,'') ));
        latest = Math.max( latest, parseInt( event.time.replace(/\D/g,'') ));
    });

    events = events.map( event => {
        let time = parseInt( event.time.replace(/\D/g,'') );
        let slot = 1 + Math.floor( ( time - earliest ) / 100 );
        return {
            ...event,
            slot
        };
    });

    return {
        body: {
            earliest,
            latest,
            events,
        }
    };
}
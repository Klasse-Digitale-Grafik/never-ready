import csvToJson from 'convert-csv-to-json';

export async function get() {

    const events = csvToJson.getJsonFromCsv(`static/timetable.csv`);

    return {
        body: {
            events
        }
    };
}
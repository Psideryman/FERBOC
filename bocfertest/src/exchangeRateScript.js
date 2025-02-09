async function exchangeRate(date, currency) {
    const api = `https://www.bankofcanada.ca/valet/observations/FX${currency}CAD/json?start_date=${date}&end_date=${date}`;
    console.log("PRESENT")
    try {
        const response = await fetch(api);
        if(!response.status == 200) {
            throw new Error(`Error: Unable to fetch data. Status code ${response.status}`);
        }
        
        const data = await response.json();
        const observations = data.observations;

        if(!observations.length){
            return `No Data for ${currency} on ${date}`;
        }
        const rate = observations[0][`FX${currency}CAD`]?.v;
        return rate ? `Exchange rate on ${date}: ${rate} CAD per ${currency}` : `No rate found for ${currency} on ${date}`;

    } catch (error) {
        return`Error: ${error.message}`;
    }
}

exchangeRate("2024-02-03", "USD").then(console.log);
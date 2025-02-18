async function exchangeRate(date, currency) {
    const api = `https://www.bankofcanada.ca/valet/observations/FX${currency}CAD/json?start_date=${date}&end_date=${date}`;
    try {
        const response = await fetch(api);
        if(!response.status == 200) {
            throw new Error(`Error: Unable to fetch data. Status code ${response.status}`);
        }
        
        const data = await response.json();
        const observations = data.observations;

        if(!observations.length){
            return `False`;
        }
        const rate = observations[0][`FX${currency}CAD`]?.v;
        return rate ? `${rate}` : `False`;

    } catch (error) {
        return`Error: ${error.message}`;
    }
}

export async function getExchangeRate(date, currency) {
    let item = `False`;
    date = new Date(date);
    let formattedDate = date.toISOString().split("T")[0];
    item = await exchangeRate(formattedDate, currency);
    while(item == `False`) {
        date.setDate(date.getDate() - 1);
        formattedDate = date.toISOString().split("T")[0];
        item = await exchangeRate(formattedDate, currency);
    }
    //console.log(item);
    return item;
}

getExchangeRate();

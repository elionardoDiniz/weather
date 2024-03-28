const openmeteoUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';


const CallAPI = async (apiUrl) => {
    await fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error('erro de response');
        }
        return response.json();
    })
    .then(data => {

    })
}
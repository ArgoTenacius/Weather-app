const key = '046d5f77d2222f5d755e958810af5830';

async function CreateApi(city){
    const weather_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
    try{
        return weather_api.json();
    }catch{
        console.error(error);
    }
}

export { CreateApi }
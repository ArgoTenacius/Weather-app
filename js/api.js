const key = '046d5f77d2222f5d755e958810af5830';

async function WeatherApi(city){
    try{
        const weather_api = (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)).json();
        return await weather_api;
    }catch{
        console.error(error);
    }
}

async function ForecastApi(city){
    try{
        const forecast_api = (await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`)).json();
        console.log(await forecast_api)
        return await forecast_api;
    }catch{
        console.error(error);
    }
}

export { WeatherApi, ForecastApi }
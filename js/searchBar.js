import { ForecastApi, WeatherApi } from "./api.js";
import { WeatherList, WeatherMainBox, ForecastBox } from "./DOM.js";
const search_bar = document.getElementById('search_bar');

async function updateWeather(local){
    try {
        //before load remove the error aesthetic
        search_bar.classList.remove('error');
        search_bar.placeholder = 'Search location';
        const api_list = await WeatherApi(local);
        const forecast_list = await ForecastApi(local);
        if(api_list.cod !== '404'){
            //WeatherList.innerHTML = '';
            WeatherMainBox(api_list);

            for(let i = 0; i < 3; i++){
                console.log(forecast_list.list[i])
                ForecastBox(forecast_list.list[i]);
            }
        }else{
            throw Error;
        }
    }
    catch{
        search_bar.placeholder = 'Invalid city';
        search_bar.classList.add('error');
    }
}

search_bar.addEventListener('keyup', (e) =>{
    if(e.key === 'Enter' && search_bar.value.trim()) {
        updateWeather(search_bar.value);
        search_bar.value = '';
    }
})

export { updateWeather }
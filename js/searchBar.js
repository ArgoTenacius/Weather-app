import { CreateApi } from "./api.js";
import { WeatherList, WeatherMainBox } from "./DOM.js";
const search_bar = document.getElementById('search_bar');

async function updateWeather(local){
    try {
        const api_list = await CreateApi(local);
        WeatherList.innerHTML = '';
        WeatherMainBox(api_list);
    }
    catch{
        console.error('INVALID CITY');
    }
}

search_bar.addEventListener('keyup', (e) =>{
    if(e.key === 'Enter' && search_bar.value.trim()) {
        updateWeather(search_bar.value);
        search_bar.value = '';
    }
})
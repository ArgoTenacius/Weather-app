import { CreateApi } from "./api.js";
import { WeatherList, WeatherMainBox } from "./DOM.js";
const search_bar = document.getElementById('search_bar');

async function updateWeather(local){
    try {
        //before load remove the error aesthetic
        search_bar.classList.remove('error');
        search_bar.placeholder = 'Search location';
        const api_list = await CreateApi(local);
        if(api_list.cod !== '404'){
            console.log('ah ?')
            WeatherList.innerHTML = '';
            WeatherMainBox(api_list);
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
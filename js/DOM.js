import { CreateApi } from "./api.js";

const api_list = await CreateApi('Boston');

console.log(api_list)

const WeatherList = document.getElementById('weather_list');

function DOMcreator(element, elementClass = ''){
    const newElement = document.createElement(element);
    newElement.className = elementClass;
    return newElement;
}

function WeatherMainBox(){
    //whole strucute
    const box_main = DOMcreator('div', 'weather-box-main');
    const box_head = DOMcreator('div', 'box-head');
    const box_content = DOMcreator('div');
    //box-head
    const weather_state = DOMcreator('p');
    const weather_icon = DOMcreator('img');
    //box-content
    const weather_local = DOMcreator('p', 'box-local');
    const hr_line = DOMcreator('hr');
    //box-info
    const box_info = DOMcreator('section', 'box-info');
    const main_temp_div = DOMcreator('div');
    const main_temp = DOMcreator('h1', 'box-celcius');
    //box-sub-info
    const box_sub_info = DOMcreator('div', 'box-sub-info');
    const feels_like = DOMcreator('h6');

    const minMax_temp = DOMcreator('div', 'minMax-div');
    const min_temp = DOMcreator('h6', 'max-temp');
    const max_temp = DOMcreator('h6', 'min-temp');
    const humidity = DOMcreator('h6');

    weather_state.textContent = api_list.weather[0].description;
    weather_icon.src = `http://openweathermap.org/img/w/${api_list.weather[0].icon}.png`;
    weather_local.textContent = `${api_list.name}, ${api_list.sys.country}`;
    main_temp.textContent = Math.round(api_list.main.temp);
    min_temp.textContent = `Min: ${Math.round(api_list.main.temp_min)}`;
    max_temp.textContent = `Max: ${Math.round(api_list.main.temp_max)}`;
    minMax_temp.append(min_temp, max_temp);
    feels_like.textContent = `Feels like: ${api_list.main.feels_like}`;
    humidity.textContent = `Humidty: ${api_list.main.humidity}`;

    main_temp_div.appendChild(main_temp);
    box_sub_info.append(feels_like, minMax_temp, humidity);
    box_info.append(main_temp_div, box_sub_info);
    box_head.append(weather_state, weather_icon);
    box_content.append(weather_local, hr_line, box_info);
    box_main.append(box_head, box_content);
    WeatherList.appendChild(box_main);
}

WeatherMainBox();
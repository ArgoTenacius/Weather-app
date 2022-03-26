import { CreateApi } from "./api.js";

CreateApi('Boston');

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
    const pressure = DOMcreator('h6');
    const humidity = DOMcreator('h6');

    main_temp_div.appendChild(main_temp);
    box_sub_info.append(feels_like, pressure, humidity);
    box_info.append(main_temp_div, box_sub_info);
    box_head.append(weather_state, weather_icon);
    box_content.append(weather_local, hr_line, box_info);
    box_main.append(box_head, box_content);
    WeatherList.appendChild(box_main);
}

WeatherMainBox();
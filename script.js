console.log('test')




async function getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=20bfa48eac5aa19ce97a2f0bab3b4f8f&units=metric', {mode: 'cors'})
    const weatherData = await response.json();
    console.log(response);
    console.log(weatherData);
    console.log('Temp London ' + weatherData.main.temp)
}

getWeather();

let weatherDataDiv = '';
let weatherData = '';

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', asyncWeather)


async function asyncWeather(){
    searchTerm = search.value;
    console.log('TESTING');
    console.log(search.value);
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + ',&APPID=20bfa48eac5aa19ce97a2f0bab3b4f8f&units=metric', {mode: 'cors'})
    const weatherData = await response.json();
    console.log(response);
    console.log(weatherData);
    console.log('Temp '+ searchTerm + ' ' + weatherData.main.temp)
    console.log(weatherData.main.feels_like)
    console.log(weatherData.main.humidity)
    console.log(weatherData.main.temp_max)
    console.log(weatherData.main.temp_min)
    console.log(weatherData.sys.sunrise)
    console.log(weatherData.sys.sunset)
    console.log(weatherData.weather[0].description)
    
    function divWeather() {
        const div = document.getElementById('showWeather')
        const weatherDataDiv = weatherData.main.temp;
        div.textContent = (weatherDataDiv + ' Celcius')
    }
    divWeather()

}


/* Date I want to collect:
main.temp
main.feels_like
main.humidity
main.weather
main.temp_max
main.temp_min
sys.sunrise
sys.sunset
weather.description
*/
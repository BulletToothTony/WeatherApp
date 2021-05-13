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

// Location, weather, temp ID, first div
const locationID = document.getElementById('locationID');
const weatherID = document.getElementById('weatherID');
const tempID = document.getElementById('tempID');
const highID = document.getElementById('highID')
const lowID = document.getElementById('lowID')
const sunriseID = document.getElementById('sunriseID')
const sunsetID = document.getElementById('sunsetID')
const visibilityID = document.getElementById('visibilityID')
const humidityID = document.getElementById('humidityID')
const feelsID = document.getElementById('feelsID')
const weathertypeID = document.getElementById('weathertypeID')
const windID = document.getElementById('windID')
const countryID = document.getElementById('countryID')
const highblueID = document.getElementById('highblueID')
const lowblueID = document.getElementById('lowblueID')


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
        locationID.textContent = searchTerm;
        weatherID.textContent = weatherData.weather[0].description;
        tempID.textContent = weatherData.main.temp;
        highID.textContent = weatherData.main.temp_max;
        lowID.textContent = weatherData.main.temp_min;
        highblueID.textContent = weatherData.main.temp_max;
        lowblueID.textContent = weatherData.main.temp_min;


    }

    function sunriseDiv() {
        var s = new Date(weatherData.sys.sunset).toLocaleTimeString("en-UK")
        console.log(s)
        sunriseID.textContent = s;
        sunsetID.textContent = s;
        humidityID.textContent = weatherData.main.humidity + '%';
        feelsID.textContent = weatherData.main.feels_like;
        weathertypeID.textContent = weatherData.weather[0].description;
        windID.textContent = weatherData.wind.speed + ' km/hr';
        visibilityID.textContent = weatherData.visibility / 100 + 'km';
        countryID.textContent = weatherData.sys.country;
    }

    divWeather()
    sunriseDiv()

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




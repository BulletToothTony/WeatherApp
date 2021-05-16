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
document.getElementById('search').value = 'London';
asyncWeather()

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
const toggleTemp = document.getElementById('toggleTemp')


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
        console.log('DIV WEATHERE')
        const div = document.getElementById('showWeather')
        const weatherDataDiv = weatherData.main.temp;
        // div.textContent = (weatherDataDiv + ' Celcius')
        locationID.textContent = searchTerm;
        weatherID.textContent = weatherData.weather[0].main;
        tempID.textContent = weatherData.main.temp + '°';
        highID.textContent = weatherData.main.temp_max + '°';
        lowID.textContent = weatherData.main.temp_min + '°';
        highblueID.textContent = weatherData.main.temp_max + '°';
        lowblueID.textContent = weatherData.main.temp_min + '°';
        weathertypeID.textContent = weatherData.weather[0].description;
    }

    function sunriseDiv() {
        // var s = new Date(weatherData.sys.sunrise).toLocaleTimeString("en-UK")
        var s = new Date(weatherData.sys.sunrise * 1000);
        var ss = new Date(weatherData.sys.sunset * 1000);
        console.log(s)
        s = String(s).substr(0,24);
        ss = String(ss).substr(0,24);
        sunriseID.textContent = s;
        sunsetID.textContent = ss;
        humidityID.textContent = weatherData.main.humidity + '%';
        feelsID.textContent = weatherData.main.feels_like;
        windID.textContent = weatherData.wind.speed + ' km/hr';
        visibilityID.textContent = weatherData.visibility / 100 + 'km';
        countryID.textContent = weatherData.sys.country;
        weathersuntypeID.textContent = weatherData.timezone / 3600 + 'hrs'
    }

    async function tableDiv() {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=20bfa48eac5aa19ce97a2f0bab3b4f8f&units=metric', {mode: 'cors'})
	    const weatherData5 = await response.json();
        console.log(weatherData5);
        //  var s = new Date(weatherData.sys.sunrise * 1000);
        const Day1 = document.getElementById('Day1')
        const Day1rain = document.getElementById('Day1rain')
        const Day1temp = document.getElementById('Day1temp')
        const Day1hum = document.getElementById('Day1hum')
        
        const Day2 = document.getElementById('Day2')
        const Day2rain = document.getElementById('Day2rain')
        const Day2temp = document.getElementById('Day2temp')
        const Day2hum = document.getElementById('Day2hum')

        const Day3 = document.getElementById('Day3')
        const Day3rain = document.getElementById('Day3rain')
        const Day3temp = document.getElementById('Day3temp')
        const Day3hum = document.getElementById('Day3hum')

        const Day4 = document.getElementById('Day4')
        const Day4rain = document.getElementById('Day4rain')
        const Day4temp = document.getElementById('Day4temp')
        const Day4hum = document.getElementById('Day4hum')

        const Day5 = document.getElementById('Day5')
        const Day5rain = document.getElementById('Day5rain')
        const Day5temp = document.getElementById('Day5temp')
        const Day5hum = document.getElementById('Day5hum')

        Day1.textContent = weatherData5.list[7].dt_txt;
        Day1rain.textContent = weatherData5.list[7].pop * 100 + '%';
        Day1temp.textContent = weatherData5.list[7].main.feels_like + '°';
        Day1hum.textContent = weatherData5.list[7].main.humidity + '%';

        Day2.textContent = weatherData5.list[15].dt_txt;
        Day2rain.textContent = weatherData5.list[15].pop * 100 + '%';
        Day2temp.textContent = weatherData5.list[15].main.feels_like + '°';
        Day2hum.textContent = weatherData5.list[15].main.humidity + '%';

        Day3.textContent = weatherData5.list[23].dt_txt;
        Day3rain.textContent = weatherData5.list[23].pop * 100 + '%';
        Day3temp.textContent = weatherData5.list[23].main.feels_like + '°';
        Day3hum.textContent = weatherData5.list[23].main.humidity + '%';

        Day4.textContent = weatherData5.list[31].dt_txt;
        Day4rain.textContent = weatherData5.list[31].pop * 100 + '%';
        Day4temp.textContent = weatherData5.list[31].main.feels_like + '°';
        Day4hum.textContent = weatherData5.list[31].main.humidity + '%';

        Day5.textContent = weatherData5.list[39].dt_txt;
        Day5rain.textContent = weatherData5.list[39].pop * 100 + '%';
        Day5temp.textContent = weatherData5.list[39].main.feels_like + '°';
        Day5hum.textContent = weatherData5.list[39].main.humidity + '%';
    }

    divWeather()
    sunriseDiv()
    tableDiv()

}



toggleTemp.addEventListener('click', toggleFunc)

function toggleFunc() {
    console.log('ciccc')
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




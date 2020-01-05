import axios from "axios"

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

const WeatherApi = {
    getCurrentWeather() {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=28b9b4fc7f2c42b3d5e658ccba8fef87')
            .then(response => response.data);
        // .then(response =>  { console.log('response 22 ', response) })
    },
    getWeatherForWeek() {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=28b9b4fc7f2c42b3d5e658ccba8fef87')
            .then((response) => { console.log(response) })
    }
}

export default WeatherApi;

// http://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=28b9b4fc7f2c42b3d5e658ccba8fef87
import weatherApi from '../api/WeatherApi';
import { fromKelvinToCelcius, getMainWeather, getImageForCurrentTime } from '../utils/utils';

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const SET_DETAIL_WEATHER = 'SET_DETAIL_WEATHER';
const SET_WALLPAPER = 'SET_WALLPAPER';

let initialState = {
    temp: 0,
    main: '',
    humidity: '',
    pressure: '',
    windSpeed: '',
    windDeg: '',
    wallpaper: ''
}

let weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                temp: action.temp,
                main: action.main,
            }
        case SET_DETAIL_WEATHER:
            return {
                ...state,
                humidity: action.humidity,
                pressure: action.pressure,
                windSpeed: action.windSpeed,
                windDeg: action.windDeg,
            }
        case SET_WALLPAPER:
            return {
                ...state,
                wallpaper: action.wallpaper,
            }
        default:
            return state;
    }

}


export const setCurrentWeather = (temp, main) => ({ type: SET_CURRENT_WEATHER, temp: temp, main: main })
export const setDetailWeather = (humidity, pressure, windSpeed, windDeg) =>
    ({ type: SET_DETAIL_WEATHER, humidity: humidity, pressure: pressure, windSpeed: windSpeed, windDeg: windDeg })
export const setWallpaper = (wallpaper) => ({ type: SET_WALLPAPER, wallpaper: wallpaper })

export const getWeather = () => {
    return (dispatch) => {
        weatherApi.getCurrentWeather().then(data => {
            dispatch(setCurrentWeather(
                fromKelvinToCelcius(data.main.temp),
                getMainWeather(data.weather[0].main),
            )
            );
        });
        // let wallpaper = getImageForCurrentTime();
        // dispatch(setWallpaper(wallpaper));
    }
}

export const getDetailWeather = () => {
    return (dispatch) => {
        weatherApi.getCurrentWeather().then(data => {
            dispatch(setDetailWeather(
                data.main.humidity,
                data.main.pressure,
                data.wind.speed,
                fromKelvinToCelcius(data.wind.deg)
            )
            );
        });
    }
}


export default weatherReducer;
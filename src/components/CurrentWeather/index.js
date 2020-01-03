import React from 'react';
import './style.css';
import weatherApi from '../../api/WeatherApi';

const CurrentWeather = () => {

    weatherApi.getCurrentWeather();
    return (
        <section className='current-weather'>
            <h2 className='current-weather__country'>Ukraine</h2>
            <h3 className='current-weather__city'>Cherkassy City</h3>
            <h2 className='current-weather__degree'>28 &#176; C</h2>
        </section>
    )
}

export default CurrentWeather;
import React from 'react';
import './style.css';

const DetailWeather = ({ state }) => {
    return (
        <section className='detail-weather'>
            <div className='detail-weather-wrapper'>
                <img className='detail-weather-img' src='https://cdn1.iconfinder.com/data/icons/weather-forecast-31/650/water-humidity-precipitation-512.png' alt='' />
                <div className='detail-weather-container' >
                    <h3 className='logo'>Humidity</h3>
                    <h3 className='logo__value'>{state.humidity} %</h3>
                </div>
            </div>
            <div className='detail-weather-wrapper'>
                <img className='detail-weather-img' src='https://www.svgrepo.com/show/259667/pressure-climate.svg' alt='' />
                <div className='detail-weather-containerr' >
                    <h3 className='logo'>Air Pressure</h3>
                    <h3 className='logo__value'>{state.pressure} PS</h3>
                </div>
            </div>
            <div className='detail-weather-wrapper'>
                <img className='detail-weather-img' src='https://image.flaticon.com/icons/png/512/2045/2045893.png' alt='' />
                <div className='detail-weather-container' >
                    <h3 className='logo'>Wind Speed</h3>
                    <h3 className='logo__value'>{state.windSpeed} km/h</h3>
                </div>
            </div>
            <div className='detail-weather-wrapper'>
                <img className='detail-weather-img' src='https://img.icons8.com/cotton/2x/thermometer--v1.png' alt='' />
                <div className='detail-weather-container' >
                    <h3 className='logo'>Wind Degree</h3>
                    <h3 className='logo__value'>{state.windDeg}&#176; C</h3>
                </div>
            </div>
        </section>
    )
}

export default DetailWeather;
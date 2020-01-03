import React from 'react';
import './style.css';

const WeatherItem = () => {
    return (
        <section className='weather-item'>
            <h2 className='weather-item__time'>3 PM</h2>
            <h2 className='weather-item__degree'>28 &#176;C</h2>
            <h3 className='weather-item__feel'>Feels like 30</h3>
        </section>
    )
}

export default WeatherItem;
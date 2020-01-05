import React from 'react';
import './style.css';

const CurrentWeather = ({ state }) => {
    return (
        <section className='current-weather'>
            <img className='current-weather__main' src={state.main} alt='main weather' />
            <h2 className='current-weather__country'>Ukraine</h2>
            <h3 className='current-weather__city'>Cherkassy City</h3>
            <h2 className='current-weather__degree'>{state.temp} &#176;C</h2>
        </section>
    )
}

export default CurrentWeather;
import React from 'react';
import './App.css';
import CurrentWeatherContainer from './components/CurrentWeatherContainer';
import DetailWeatherContainer from './components/DetailWeatherContainer';
import Login from './components/Login';


const App = ({state}) => {
  console.log('state 44', state)
  return (
    <div
      className='app-wrapper'
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/00/9d/4d/009d4d63068480007461324c98d5728f.jpg')"
      }}
    >
      <div className='current-weather-wrapper'>
        <CurrentWeatherContainer />
      </div>
      <div className='app-detail-weather-wrapper'>
        <DetailWeatherContainer />
      </div>
      {/* <Login/> */}
    </div>
  )
}

export default App;

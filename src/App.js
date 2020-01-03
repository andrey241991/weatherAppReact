import React from 'react';
import './App.css';
import CurrentWeather from '../src/components/CurrentWeather'

const App = () => (
  <div className='app-wrapper'>
    <div className='current-weather-wrapper'>
      <CurrentWeather />
    </div>
  </div>
)
export default App;








{/* <Switch>
<Route exact path='/' component={Home} />
<Route exact path='/docs' component={Docs} />
<Route path='/profile/:userId' component={MyProfile} />

<Route  path='/profile' component={Profile} />
</Switch> */}

import React from 'react';
import './App.css';
import App from './App';
import { connect } from 'react-redux';
import { setWallpaper } from './redux/weather-reducer';
import { getImageForCurrentTime } from './utils/utils';


class AppContainer extends React.Component {

  componentDidMount() {
    let wallpaper = getImageForCurrentTime();
    console.log('wallpaper', wallpaper);
    this.props.setWallpaper(wallpaper);
  }

  render() {
    return (
      <App
        state={this.props.currentWeatherPage}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    currentWeatherPage: state.currentWeatherPage
  }
}


export default connect(mapStateToProps, { setWallpaper })(AppContainer);


{/* <Switch>
<Route exact path='/' component={Home} />
<Route exact path='/docs' component={Docs} />
<Route path='/profile/:userId' component={MyProfile} />

<Route  path='/profile' component={Profile} />
</Switch> */}

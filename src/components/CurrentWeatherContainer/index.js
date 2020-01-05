import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { setCurrentWeather, getWeather } from '../../redux/weather-reducer';
import CurrentWeather from '../CurrentWeather';

class CurrentWeatherContainer extends React.Component {

    componentDidMount() {
        this.props.getWeather();
    }

    render() {
        return (
            <CurrentWeather
                state={this.props.currentWeatherPage}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentWeatherPage: state.currentWeatherPage
    }
}

export default connect(mapStateToProps, { setCurrentWeather, getWeather })(CurrentWeatherContainer);

import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { setDetailWeather, getDetailWeather } from '../../redux/weather-reducer';
import DetailWeather from '../DetailWeather';

class DetailWeatherContainer extends React.Component {

    componentDidMount() {
        this.props.getDetailWeather();
    }

    render() {
        return (
            <DetailWeather
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

export default connect(mapStateToProps, { setDetailWeather, getDetailWeather })(DetailWeatherContainer);

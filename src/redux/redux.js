import {createStore, combineReducers, applyMiddleware} from 'redux'
import weatherReducer from './weather-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    currentWeatherPage: weatherReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
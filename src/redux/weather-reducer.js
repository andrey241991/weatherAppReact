const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';

let initialState = {
    currentWeather = {}
}


let weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
             state.currentWeather = action.currentWeather;
           return state;
    }
}


export const currentWeatherAC = (newWeather) => ({type: SET_CURRENT_WEATHER, newWeather:newWeather})

// } {
//     return { type: ADD_TODO, text }
//   }

export const fromKelvinToCelcius = kelvin => Math.ceil(kelvin - 273.1);

export const getMainWeather = main => {
    switch (main) {
        case 'Snow':
            return 'https://cdn1.iconfinder.com/data/icons/unigrid-bluetone-weather/60/027_010_cloud_cloudy_overcast_cloudiness_snow_hail_weather-256.png';
        case 'Clouds':
            return 'https://cdn2.iconfinder.com/data/icons/weather-blue-filled-color/300/211013185Untitled-3-512.png';
        case 'Rain':
            return 'https://cdn4.iconfinder.com/data/icons/materia-flat-weather/24/026_010_cloud_cloudy_overcast_cloudiness_rain_weather-256.png';
        case 'Drizzle':
            return 'https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather05-256.png';
        default:
            return '';
    }
}


export const getImageForCurrentTime = ()=> {
    let date = new Date().toString();
    let time = Number(date.slice(16, 18));
    if(time >= 6 && time <= 21){
        return 'https://images.wallpaperscraft.com/image/winter_mountains_austria_snow_trees_spruce_alps_nature_94100_1920x1080.jpg';
    }else{
        return 'https://i.pinimg.com/originals/00/9d/4d/009d4d63068480007461324c98d5728f.jpg';
    }
}



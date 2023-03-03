import style from '../../style/styleWeatherDisplay.module.css'
const a = {
    "coord": {
        "lon": 30.8774,
        "lat": 59.5413
    },
    weather: [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
    }],
    "base": "stations",
    "main": {
        "temp": 265.97,
        "feels_like": 262.18,
        "temp_min": 265.2,
        "temp_max": 266.05,
        "pressure": 1000,
        "humidity": 87,
        "sea_level": 1000,
        "grnd_level": 995
    },
    "visibility": 2250,
    "wind": {
        "speed": 2.1,
        "deg": 156,
        "gust": 3.27
    },
    "clouds": {
        "all": 94
    },
    "dt": 1676889439,
    "sys": {
        "type": 1,
        "id": 8926,
        "country": "RU",
        "sunrise": 1676870462,
        "sunset": 1676905190
    },
    "timezone": 10800,
    "id": 481964,
    "name": "Tosno",
    "cod": 200
}

export const WeatherDislay = () => {


    return (
        <div className={style.page_weather}>
            <div className={style.main_weather}>
                <div>
                    {a.weather[0].main}
                </div>
                <div>
                    {a.weather[0].description}
                </div>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png`} />
                </div>
            </div>
            <div>

            </div>
            <div>
                <div>
                    Temperature:  {a.main.temp} 
                    Feels like: {a.main.feels_like}
                </div>
                <div>
                Pressure: {a.main.pressure}
                </div>
                <div>Humidity: {a.main.humidity}</div>

            </div>

            <div>
                <div>Ветер</div>

            </div>

        </div>
    )
}
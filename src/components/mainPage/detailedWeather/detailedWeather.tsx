import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../redux/store';


export const DetailedWeather = () => {
    const flagRedirect = useSelector((state: AppRootStateType) => state.currentWeather.shouldRedirect)
    const weatherData = useSelector((state: AppRootStateType) => state.currentWeather.weatherData)

    if (flagRedirect) {
        return (
            <>
                <div>Темпера {Math.floor(weatherData.main.temp)}</div>
                <div>Температу маск {Math.floor(weatherData.main.temp_max)}</div>
                <div> ощущается как{ Math.floor(weatherData.main.feels_like)}</div>
                <div> облачность {Math.floor(weatherData.clouds.all)}</div>
                <div> скорочть ветра {Math.floor(weatherData.wind.speed)} мс</div>
                <div>{weatherData.name}</div>
            </>
        )
    } else {
        return null
    }

}
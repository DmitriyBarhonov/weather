import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/store';


export const DetailedWeather = () => {
    const flagRedirect = useSelector((state: AppRootStateType) => state.currentWeather.shouldRedirect)
    const weatherData = useSelector((state: AppRootStateType) => state.currentWeather.weatherData)

    if (flagRedirect) {
        return (
            <>
                <div>{weatherData.main.temp}</div>
                <div>{weatherData.main.temp_max}</div>
                <div>{weatherData.main.feels_like}</div>
                <div>{weatherData.clouds.all}</div>
                <div>{weatherData.wind.speed}</div>
                <div>{weatherData.main.temp}</div>

            </>
        )
    } else {
        return null
    }

}
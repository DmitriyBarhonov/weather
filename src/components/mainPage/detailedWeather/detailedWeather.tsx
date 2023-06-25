import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../redux/store';
import s from './detalied.module.css'
import { weatherDataObj, weatherDataObjType } from './data/data';
import { WeatherItem } from './weatherItem';


export const DetailedWeather = () => {
    const flagRedirect = useSelector((state: AppRootStateType) => state.currentWeather.shouldRedirect)
    const weatherData = useSelector((state: AppRootStateType) => state.currentWeather.weatherData)

    // useEffect добавть title города 
    // Math.floor вынести в отдельные переменные 
    if (flagRedirect) {
        return (
            <>
                {weatherDataObj.map((el: weatherDataObjType) => <WeatherItem key={el.id} title={el.title} weatherData={weatherData.wind.speed} styleItem={s.grid_item} styleSpan={s.grid_item} />)}
            </>
        )
    } else {
        return null
    }
}
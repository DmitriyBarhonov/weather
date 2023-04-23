import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/store';


export const DetailedWeather = () => {

    const weatherData = useSelector((state: AppRootStateType) => state.currentWeather.weatherData)


    return (
        <>
            <div>{weatherData.main.temp}</div>
        </>
    )
}
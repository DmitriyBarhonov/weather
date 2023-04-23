import { useSelector } from 'react-redux';
import s from './styleTown.module.css'
import { ItemTown } from './itemTown';
import { setWeatherThunkCreactor } from "../../redux/setCurrentWeatherReducer";
import { AppRootStateType, useTypedDispatch } from '../../redux/store';
export const ListTown = () => {

    const listItemTown = useSelector((state: AppRootStateType) => state.listTown.LisCurrentCities)

    const dispatch = useTypedDispatch()
    const clickButton = (lat: number, lon: number) => {
        dispatch(setWeatherThunkCreactor(lat, lon))
    }

    if (listItemTown.length > 1) {
        return (
            <div className={s.grid_town_list}>
                {listItemTown.map((el: any, index: number) => <ItemTown clickButton={clickButton} key={index} town={el} />)}
            </div>
        )
    } else {
        return null
    }
}

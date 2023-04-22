import { Route, Routes } from 'react-router-dom';
import style from '../mainPage/styleMainPage.module.css'
import { setTownThunkCreacter } from '../../redux/setListTownReducer';
import { InputSearh } from '../input/input';
import { ListTown } from '../listTown/listTown';
import { useTypedDispatch } from '../../redux/store';


export const MainPage = () => {
    const dispatch = useTypedDispatch()
    const setCityName = (nameTown: string) => {
     dispatch(setTownThunkCreacter(nameTown))
    }

    return (
        <>
        <h1>Cloud Watch</h1>
            <InputSearh setCityName={setCityName} />
            <ListTown />

        </>
    )
}
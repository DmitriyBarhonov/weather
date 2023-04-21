
import { useState, ChangeEvent } from 'react';
import style from '../mainPage/styleMainPage.module.css'
import { setTownThunkCreacter } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { InputSearh } from '../input/input';
import { ListTown } from '../listTown/listTown';


export const MainPage = () => {
    const dispatch = useDispatch()


    const setCityName = async (nameTown: string) => {
      await  dispatch(setTownThunkCreacter(nameTown))
    }

    return (
        <>
            <InputSearh setCityName={setCityName} />
            <ListTown />
        </>
    )
}
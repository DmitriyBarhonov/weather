import { Route, Routes, useNavigate } from 'react-router-dom';
// import style from '../mainPage/styleMainPage.module.css'
import { setTownThunkCreacter } from '../../redux/setListTownReducer';
import { InputSearh } from '../input/input';
import { ListTown } from '../listTown/listTown';
import { AppRootStateType, useTypedDispatch } from '../../redux/store';
import { DetailedWeather } from '../detailedWeather/detailedWeather';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


export const MainPage = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const flagRedirect =  useSelector((state: AppRootStateType)=> state.currentWeather.shouldRedirect)
    
    console.log(flagRedirect);
    
    const setCityName = (nameTown: string) => {
        dispatch(setTownThunkCreacter(nameTown))
    }

    useEffect(()=>{
        if(flagRedirect){
            navigate("/detailed-weather")
        }else{
            navigate("/")
        }
    },[flagRedirect, navigate ])



    return (
        <>
            <h1>Cloud Watch</h1>
            <InputSearh setCityName={setCityName} />
            <Routes>
                <Route path="/" element={<ListTown />} />
                <Route path="/detailed-weather" element={<DetailedWeather />} />
            </Routes>
        </>
    )
}
import { Route, Routes, useNavigate } from 'react-router-dom';
import { setTownThunkCreacter } from '../../redux/setListTownReducer';
import { InputSearh } from '../input/input';
import { ListTown } from '../listTown/listTown';
import { AppRootStateType, useTypedDispatch } from '../../redux/store';
import { DetailedWeather } from '../detailedWeather/detailedWeather';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { shouldRedirectActionCreator } from '../../redux/setCurrentWeatherReducer';
import { Loader } from '../loader/Loader';



export const MainPage = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const flagRedirect =  useSelector((state: AppRootStateType)=> state.currentWeather.shouldRedirect)
    const [searhNewCity, setsearhNewCity] = useState(false)
    const isLoading = useSelector((state:AppRootStateType)=> state.listTown.isLoading)
    const setCityName = (nameTown: string) => {
       if(!searhNewCity){
        dispatch(setTownThunkCreacter(nameTown))
        setsearhNewCity(true)
       }else{
        dispatch(shouldRedirectActionCreator(false))
        dispatch(setTownThunkCreacter(nameTown))
       }
    }

    useEffect(()=>{
        if(flagRedirect){
            navigate("/detailed-weather")
        }else{
            navigate("/")
        }
    },[flagRedirect, navigate])
    
    return (
        <>
            <h1>Cloud Watch</h1>
            <InputSearh callBack={setCityName} />
            {isLoading ?   <Loader/> : null  }
            <Routes>
                <Route path="/" element={<ListTown />} />
                <Route path="/detailed-weather" element={<DetailedWeather />} />
            </Routes>
           
        </>
    )
}
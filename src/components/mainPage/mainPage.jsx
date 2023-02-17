import { Input } from 'antd';
import { useState } from 'react';
import style from '../mainPage/styleMainPage.module.css'
import { setTownThunkCreacter } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
const { Search } = Input;

export const MainPage = () => {
    const dispatch = useDispatch
    const [town, setTown] = useState('');
   

    const setTownCallback = (e) => {
        setTown(e.target.value)
    }

    const searchTown = () => {
        dispatch(setTownThunkCreacter(town))
    }
    return (
        <>
           <div className={style.formSearch}>
           <Search
                placeholder="input search text"
                onChange={setTownCallback}
                onSearch={searchTown}
                value={town}
                style={{
                    width: 200,
                }}
            />
           </div>
        </>
    )
}
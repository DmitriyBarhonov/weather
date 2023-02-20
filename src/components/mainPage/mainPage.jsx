import { Input } from 'antd';
import { useState } from 'react';
import style from '../../style/styleMainPage.module.css'
import { setTownThunkCreacter } from '../../redux/getListTownReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ListTown } from '../listTown/listTown';
import { WeatherDislay } from '../weatherDisplay/weatherDisplay';

const { Search } = Input;

export const MainPage = () => {
    const dispatch = useDispatch()
    const [town, setTown] = useState('');
    const searchTown = useSelector((state)=> state.searchTown)


    const setTownCallback = (e) => {
        setTown(e.target.value)
    }

    const getTown = () => {
        dispatch(setTownThunkCreacter(town))
    }
    console.log('render')
    return (
        <>
           <div className={style.formSearch}>
           <Search
                placeholder="input search text"
                onChange={setTownCallback}
                onSearch={getTown}
                value={town}
                style={{
                    width: 400,
                }}
                enterButton="Search"
                size="large"
            />
           </div>
          {searchTown.cityPresence ? <ListTown listTown={searchTown.listTown}/> : null}
          <WeatherDislay/>
        </>
    )
}

    
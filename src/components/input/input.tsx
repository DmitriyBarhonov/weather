import { Input } from 'antd';
import style from "./inputSearh.module.css"
import { ChangeEvent, useState } from 'react';
const { Search } = Input;

type InputPropsType = {
    setCityName: (nameTown: string) => void
}



export const InputSearh: React.FC<InputPropsType> = (props) => {
    const [nameTown, setNameTown] = useState('');

    const nameTownHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameTown(e.currentTarget.value)
    }

    const setCityNameHandler = async () => {
        await props.setCityName(nameTown)
        setNameTown('')
    }

    return (
        <div className={style.formSearch}>
            <Search
                placeholder="City name"
                onChange={nameTownHandler}
                onSearch={setCityNameHandler}
                value={nameTown}
                style={{
                    width: 200,
                }}
            />
        </div>
    )
}
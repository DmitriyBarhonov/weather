import { Input } from 'antd';
import style from "./inputSearh.module.css"
import { ChangeEvent, useState } from 'react';
const { Search } = Input;

type InputPropsType = {
    callBack: (nameTown: string) => void
}



export const InputSearh: React.FC<InputPropsType> = (props) => {
    const [title, setTitle] = useState('');

    const nameTownHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const setCityNameHandler = () => {
        props.callBack(title)
        setTitle('')
    }

    return (
        <div className={style.formSearch}>
            <Search
                placeholder="City name"
                onChange={nameTownHandler}
                onSearch={setCityNameHandler}
                value={title}
                style={{
                    width: 200,
                }}
            />
        </div>
    )
}
import s from './styleTown.module.css'
import { Button } from 'antd';


export const ItemTown = (props: any) => {
    const { country, lat, lon, name, state } = props.town

    return (
        <div className={s.town_list_item}>
            <div> Country: {country}</div>
            <div>{name}</div>
            <div> State: {state}</div>
            <Button type="primary" onClick={() => props.clickButton(lat, lon)}>View info</Button>
        </div>
    )
}
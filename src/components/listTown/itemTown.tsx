import { useEffect } from "react"
import s from './styleTown.module.css'

export const ItemTown = (props: any) => {
    console.log(props);

    const { country, lat, lon, name, state } = props.town
    const a = (lat: number, lon:number) => {
        console.log(lat, lon + "dwwd");
    }
    useEffect(() => {
        //axios.get('url for weather', {el.name})
     setTimeout(() => {
        a(lat, lon)
     }, 10000);

    }, [])

    return (
        <div className={s.grid_town_list}>
            <div>{name}:</div>
            <div> {country}</div>
            <div> {state}</div>
            <button onClick={()=>a(lat, lon)}>View info</button>
        </div>
    )
}
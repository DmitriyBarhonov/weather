import s from './styleTown.module.css'

export const ItemTown = (props: any) => {
    const { country, lat, lon, name, state } = props.town

    return (
        <div className={s.town_list_item}>
            <div> Country: {country}</div>
            <div>{name}</div>
            <div> State: {state}</div>
            <button className={s.button_view} onClick={() => props.clickButton(lat, lon)}>View info</button>
        </div>
    )
}
import { TowmItem } from "./townItem"
import style from "../../style/styleMainPage.module.css"
export const ListTown = (props) => {
    console.log(props)
    const TownItem = props.listTown.map(t => <TowmItem name={t.name} key={t.key} country={t.country} state={t.state}/>)

    return (
        <>
            <div className={style.itemList}>
               {TownItem}
            </div>
        </>
    )
}
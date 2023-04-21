import { useDispatch, useSelector } from 'react-redux';
// import listTownReducer from '../../redux/reducer';
// import { useEffect } from 'react';
import { ItemTown } from './itemTown';

export const ListTown = () => {

    const listItemTown = useSelector((state: any) => state.listTown.listOfNewCities)
    if (listItemTown.length > 1) {
        return (
            <>
          {  listItemTown.map((el: any, index: any) =>  <ItemTown key={index}  town={el}/>)}
            </>
        )
    } else {
        return null
    }
}







//refactoring
// export const ListTownRight = () => {

//     const listItemTown = useSelector((state: any) => state.listTown.listOfNewCities)

    
//     if (listItemTown.length <1){
//         return <div>There is no cities</div>
//     }

//         return (
//             <>
//           {  listItemTown.map((el: any) => {
       
//                 return (
//                 <div key={el.index}>
//                     <div>Name:</div> <span>{el.country}</span>
//                 </div>
//                 )
//             })}
//             </>
//         )
    
// }
import { Button } from 'antd';

export const TowmItem = (props) => {
    return (
        <>
            <div >
            <Button>{props.name}, {props.state}, {props.country}</Button>
            </div>
        </>
    )
}
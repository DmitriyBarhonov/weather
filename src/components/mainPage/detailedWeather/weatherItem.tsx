
type PropsType = {
    title: string
    weatherData: number
    styleItem: string
    styleSpan: string
}

export const WeatherItem: React.FC<PropsType> = (props) => {
    return (
        <div className={props.styleItem}>
            <span className={props.styleSpan}>{props.title} {Math.floor(props.weatherData)}</span>
        </div>
    )
}
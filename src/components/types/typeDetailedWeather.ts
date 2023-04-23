export type WeatherDataType = {
    
    base: string
    clouds: cloudsType
    cod: number
    coord: coordType
    dt: number
    id: number
    main: mainType
    name: string
    sys: sysType
    timezone: number
    visibility: number
    weather: weatherItemType[]
    wind: windType
}

export type windType = {
    deg: number
    gust: number
    speed: number
}

export type weatherItemType = {
    deg: number
    gust: number
    speed: number
}

export type sysType = {
    country: string
    sunrise: number
    sunset: number
}

export type mainType = {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
}

export type coordType = {
    lat: number
    lon: number
}

export type cloudsType = {
    all: number
}


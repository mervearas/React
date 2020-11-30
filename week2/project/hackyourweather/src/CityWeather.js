import React from 'react'

export default function CityWeather(props) {
    const {
        cityName,
        countryName,
        weatherMain,
        weatherDescription,
        minTemp,
        maxTemp,
        lon,
        lat
    } = props;
    return (
        <div className="cityWeather">
            <h2>{cityName} , {countryName}</h2>
            <h3>{weatherMain} <br /><span className="description">{weatherDescription}</span></h3>
            <h5>min temp: {minTemp}</h5>
            <h5>max temp: {maxTemp}</h5>
            <h5>location: {lon}, {lat}</h5>
        </div>
    )
};


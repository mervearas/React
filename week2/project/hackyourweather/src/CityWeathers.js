import React, { useState } from 'react';
import CityWeather from './CityWeather';
import SearchCity from './SearchCity';

const CityWeathers = () => {
    const [cityWeather, setCityWeather] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function getCityWeather(city) {
        setLoading(true);
        setError(false);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            .then(res => res.json())
            .then(res => {
                if(res.cod === "404") {
                    setError(true);
                } else {
                    setCityWeather(res)
                }
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }

    return (
        <div className="container">
            <h2>Weather</h2>
            <SearchCity handleClick={getCityWeather} />
            {isLoading && (
                <p>Loading..</p>
            )}
            {error && (
                <p>Error! City weather information couldn't fetch. Try again.</p>
            )}
            {!error && !isLoading && cityWeather ? (
                <CityWeather
                    cityName={cityWeather.name}
                    countryName={cityWeather.sys.country}
                    weatherMain={cityWeather.weather[0].main}
                    weatherDescription={cityWeather.weather[0].description}
                    minTemp={cityWeather.main.temp_min}
                    maxTemp={cityWeather.main.temp_max}
                    lat={cityWeather.coord.lat}
                    lon={cityWeather.coord.lon} />
            ) : (
                    <p>Please write the city name!</p>
                )}
        </div>
    );
}

export default CityWeathers;
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
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
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
            <h1>Weather</h1>
            <SearchCity handleClick={getCityWeather} />
            {isLoading && (
                <p>Loading..</p>
            )}
            {error && (
                <p>Error! City weather information couldn't fetch. Try again.</p>
            )}
            {!error && !isLoading && cityWeather ? (() => {
                const {
                    name,
                    sys,
                    weather,
                    main,
                    coord
                } = cityWeather;
                return (
                    <CityWeather
                        cityName={name}
                        countryName={sys.country}
                        weatherMain={weather[0].main}
                        weatherDescription={weather[0].description}
                        minTemp={main.temp_min}
                        maxTemp={main.temp_max}
                        lat={coord.lat}
                        lon={coord.lon} />
                )
            }
            ) : (
                    <p>Please write the city name!</p>
                )}
        </div>
    );
}

export default CityWeathers;
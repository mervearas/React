import React, { useState } from 'react';
import CityWeather from './CityWeather';
import SearchCity from './SearchCity';

const CityWeathers = () => {
    const [cityWeathers, setCityWeathers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function getCityWeather(city) {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`)
            const data = await response.json();
            if(data.cod === "404") {
                setError(true);
            } else {
                setCityWeathers((prevState) => [...prevState, data]);
            }
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    function removeCity(key) {
        const newCityWeathers = cityWeathers.filter((cityWeather, index) => {
            if (index !== key) {
                return true
            } else {
                return false
            }
        })

        setCityWeathers(newCityWeathers)
    }

    return (
        <div className="container">
            <h2 className="title">Weather</h2>
            <SearchCity handleClick={getCityWeather} />
            {isLoading && (
                <p>Loading..</p>
            )}
            {error && (
                <p className="error">Error! City weather information couldn't fetch. Try again.</p>
            )}
            {!error && !isLoading && cityWeathers.length ? (
                cityWeathers.map(cityWeather => {
                    const {
                        name,
                        sys,
                        weather,
                        main,
                        coord,
                        id
                    } = cityWeather;
                    return (
                        <CityWeather
                            key={id}
                            id={id}
                            cityName={name}
                            countryName={sys.country}
                            weatherMain={weather[0].main}
                            weatherDescription={weather[0].description}
                            minTemp={main.temp_min}
                            maxTemp={main.temp_max}
                            lat={coord.lat}
                            lon={coord.lon}
                            icon={weather[0].icon}
                            removeCity={removeCity} />
                    )
                })
            ) : (
                    <p className="notification">Please write the city name!</p>
                )}
        </div>
    );
}

export default CityWeathers;
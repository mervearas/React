import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const CityWeatherDetails = () => {
    const [cityDetails, setCityDetails] = useState();
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        if (params.cityId) {
            getCityWeatherDetail(params.cityId);
        } else {
            setError(true);
        }
    }, []);

    async function getCityWeatherDetail(cityId) {
        setLoading(true);
        try {
            const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`)
            const data = await result.json();
            if (data.cod === "404") {
                setError(true)
            } else {
                const temp = data.list.map((tempItem) => {
                    return {
                        name: data.city.name,
                        date: tempItem.dt_txt,
                        temp: tempItem.main.temp,
                        country: data.city.country
                    }
                })
                setCityDetails(temp);
            }
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    return (
        <div className="city_weather_details">
            {/* {isLoading && (
                <p>Loading..</p>
            )}
            {error && (
                <p>Error. Data couldn't fetch!</p>
            )} */}
            {!isLoading && !error && cityDetails && (
                <div className="city_weather_chart">
                    <h2>5 days forecast</h2>
                    <h1>{cityDetails[0].name},{cityDetails[0].country}</h1>
                    <AreaChart
                        width={700}
                        height={400}
                        data={cityDetails}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
            )}
            {!isLoading && (
                <Link className="back_button" to="/">Back</Link>
            )}
        </div>
    );
}

export default CityWeatherDetails;
import React from 'react';
import cityData from './city-weather.json'
import CityWeather from './cityWeather';

function App() {
  return (
    <div className="container">
      <h2>Weather</h2>
      {cityData.map((city) => {
        return(
          <CityWeather
          cityName={city.name}
          countryName={city.sys.country}
          weatherMain={city.weather[0].main}
          weatherDescription={city.weather[0].description}
          minTemp={city.main.temp_min}
          maxTemp={city.main.temp_max}
          lat={city.coord.lat}
          lon={city.coord.lon}/>
        )
      })}
    </div>
  );
}

export default App;

import React from 'react';
import CityWeatherList from './CityWeatherList';

function App() {
  console.log(process.env.REACT_APP_OPENWEATHERMAP_API_KEY);
  return (
    <CityWeatherList/>
  )
}

export default App;

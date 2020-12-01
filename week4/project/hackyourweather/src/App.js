import React from 'react';
import CityWeatherList from './CityWeatherList';
import CityWeatherDetails from './CityWeatherDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CityWeatherList} />
        <Route path="/:cityId" exact component={CityWeatherDetails} />
      </Switch>
    </Router>
  )
}

export default App;

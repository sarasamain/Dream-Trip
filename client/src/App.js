import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import moment from 'moment';
import Categories from './views/Categories';
import MapItinerary from './views/MapItinerary';
import PlacesList from './views/PlacesList';

function App() {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [destination, setDestination] = useState('');

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
            <Home
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setDestination={setDestination}
              startDate={startDate}
              endDate={endDate}
              destination={destination}
            />
          )}
        />
        <Route exact path="/Categories" component={Categories} />
        <Route
          exact
          path="/PlacesList"
          render={() => (
            <PlacesList
              startDate={startDate}
              endDate={endDate}
              destination={destination}
            />
          )}
        />
        {/* <Route exact path="/MapItinerary" component={MapItinerary} /> */}
      </Switch>
    </Router>
  );
}

export default App;

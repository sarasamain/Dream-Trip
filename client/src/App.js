import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import moment from 'moment';
import Categories from './views/Categories';
import MapItinerary from './views/MapItinerary';
import Recommendation from './views/Recommendation';

function App() {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [destination, setDestination] = useState('');
  const [places, setPlaces] = useState([]);

  const addPlaces = (allPlaces) => {
    console.log('before', places);
    setPlaces((places) => [...places, ...allPlaces]);
  };
  console.log('after', places);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
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
        <Route path="/Categories" component={Categories} />
        <Route
          path="/Recommendation"
          render={() => (
            <Recommendation
              places={places}
              addPlaces={addPlaces}
              startDate={startDate}
              endDate={endDate}
              destination={destination}
            />
          )}
        />
        <Route
          path="/MapItinerary"
          render={() => <MapItinerary places={places} />}
        />
      </Switch>
    </Router>
  );
}

export default App;

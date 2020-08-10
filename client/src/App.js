import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import moment from 'moment';
import {
  getPlaces,
  loadPlacesPerCategory
} from './api/getPlaces';
import {
  getExplorePlaces,
  getRecommendedPlaces,
  defineRecommendedPlaces,
  defineExplorePlaces
} from './utils/loadPlaces'
import Categories from './views/Categories';
import MapItinerary from './views/MapItinerary';
import Recommendation from './views/Recommendation';
import { addPlace, removePlace, handleAssignDay } from './utils/mapFunctions';

import { tripDuration, placesPerType } from './utils/homeFunctions';

function App({ categoryStates }) {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [destination, setDestination] = useState('');
  const [places, setPlaces] = useState([]);
  const [exploreplaces, setExplorePlaces] = useState([]);
  const [placeEntities, setPlaceEntities] = useState({});
  const [filteredCategories, setCategories] = useState([]);

  useEffect(() => {
    setPlaceEntities({});
  }, []);

  useEffect(() => {
    const filterCategory = categoryStates
      .filter((categoryState) => categoryState.selected)
      .map((categoryState) => categoryState.text);
    setCategories(filterCategory);
  }, [categoryStates]);

  // AMINA
  const loadPlaces = () => {
    filteredCategories.map((category) => {
      return loadPlacesPerCategory(destination, category)
        .then((allPlaces) => {
          const placeNum = placesPerType(startDate, endDate, filteredCategories);
          const exploreEntities = getExplorePlaces(allPlaces, placeNum);
          setPlaceEntities(Object.assign(placeEntities, exploreEntities));

          const newEntities = getRecommendedPlaces(allPlaces, placeNum)
          setPlaceEntities(Object.assign(placeEntities, newEntities));

          const newPlacesOnList = defineRecommendedPlaces(placeEntities);

          const newExplorePlaces = defineExplorePlaces(placeEntities);

          setPlaces((places) => [...places, ...newPlacesOnList]);
          setExplorePlaces((exploreplaces) => [
            ...exploreplaces,
            ...newExplorePlaces,
          ]);
        });
    });
  };

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
              loadPlaces={loadPlaces}
              addPlace={addPlace}
              removePlace={removePlace}
              setPlaceEntities={setPlaceEntities}
              placeEntities={placeEntities}
              setPlaces={setPlaces}
              places={places.map((id) => placeEntities[id])}
              setExplorePlaces={setExplorePlaces}
              exploreplaces={exploreplaces.map((id) => placeEntities[id])}
            />
          )}
        />
        <Route
          path="/MapItinerary"
          render={() => (
            <MapItinerary
              places={places.map((id) => placeEntities[id])}
              removePlace={removePlace}
              tripDuration={tripDuration}
              handleAssignDay={handleAssignDay}
              setPlaceEntities={setPlaceEntities}
              placeEntities={placeEntities}
              startDate={startDate}
              endDate={endDate}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    categoryStates: state,
  };
}

export default connect(mapStateToProps)(App);

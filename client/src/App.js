import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';
import Auth from './views/auth';
import auth from './utils/auth';
import moment from 'moment';
import { 
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

import { tripDuration, placesPerType } from './utils/homeFunctions';

function App({ categoryStates }) {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [destination, setDestination] = useState('');
  const [places, setPlaces] = useState([]);
  const [exploreplaces, setExplorePlaces] = useState([]);
  const [placeEntities, setPlaceEntities] = useState({});
  const [filteredCategories, setCategories] = useState([]);
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  useEffect(() => {
    setPlaceEntities({});
  }, []);

  useEffect(() => {
    const filterCategory = categoryStates
      .filter((categoryState) => categoryState.selected)
      .map((categoryState) => categoryState.text);
    setCategories(filterCategory);
  }, [categoryStates]);

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

  const helper = (place_id, trueOrFalse) => {
    const newEntities = { ...placeEntities };
    newEntities[place_id].inMyList = trueOrFalse;
    setPlaceEntities(newEntities);
  };

  const addPlace = (id) => {
    helper(id, true);
    setPlaces([...places, id]);
    setExplorePlaces(exploreplaces.filter((place_id) => place_id !== id));
  };

  const removePlace = (place_id) => {
    helper(place_id, false);
    setPlaces(places.filter((id) => place_id !== id));
    setExplorePlaces([...exploreplaces, place_id]);
  };

  const handleAsssignDay = (day, id) => {
    const newEntities = { ...placeEntities };
    newEntities[id].day = day;
    setPlaceEntities(newEntities);
  };

  return (
    <Router>
      <Switch>
        <Route 
          path='/login'
          render={() => (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route 
          path='/register'
          render={(props) => (
            <Register {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route 
          path='/logout'
          render={(props) => (
            <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          exact
          path="/home"
          render={() => (
            <Home
              setIsAuthenticated={setIsAuthenticated}
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
              setIsAuthenticated={setIsAuthenticated}
              loadPlaces={loadPlaces}
              places={places.map((id) => placeEntities[id])}
              exploreplaces={exploreplaces.map((id) => placeEntities[id])}
              addPlace={addPlace}
              removePlace={removePlace}
            />
          )}
        />
        <Route
          path="/MapItinerary"
          render={() => (
            <MapItinerary
              setIsAuthenticated={setIsAuthenticated}
              places={places.map((id) => placeEntities[id])}
              removePlace={removePlace}
              tripDuration={()=>tripDuration(startDate, endDate)}
              startDate = {startDate}
              endDate = {endDate}
              handleAsssignDay={handleAsssignDay}
            />
          )}
        />
        <Route 
          path='/'
          render={() => (
            <Auth isAuthenticated={isAuthenticated} />
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

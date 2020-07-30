import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './views/home';
import Categories from './views/Categories';
import MapItinerary from './views/MapItinerary';
import PlacesList from './views/PlacesList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={home} />
        <Route exact path="/Categories" component={Categories} />
        <Route exact path="/PlacesList" component={PlacesList} />
        <Route exact path="/MapItinerary" component={MapItinerary} />
      </Switch>
    </Router>
  );
}

export default App;

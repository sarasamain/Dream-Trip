import React, { useState } from 'react';
import Map from '../components/map';
import PlaceList from '../containers/place-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';

function MapItinerary({ places, removePlace, duration }) {
  let uniquePlaces = new Set(Object.values(places));
  uniquePlaces = [...uniquePlaces];
  const [itineraryPlaces, setItineraryPlaces] = useState([]);
  setItineraryPlaces(uniquePlaces);

  return (
    <div>
      <TopBar heading="Map" buttonPath="/MapItinerary" buttonName="Email Me" />
      <Grid container direction="row">
        <Grid item xs={6}>
          <Map uniquePlaces={uniquePlaces} />
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: 30 }}>
            <PlaceList
              places={itineraryPlaces}
              itinerary={true}
              removePlace={removePlace}
              duration={duration}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapItinerary;

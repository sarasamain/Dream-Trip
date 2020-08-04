import React from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';

function MapItinerary({ places, removePlace, tripDuration, handleAsssignDay }) {
  let uniquePlaces = new Set(Object.values(places));

  return (
    <div>
      <TopBar heading="Map" buttonPath="/MapItinerary" buttonName="Email Me" />
      {console.log(uniquePlaces)}
      <Grid container direction="row">
        <Grid item xs={6}>
          <Map uniquePlaces={[...uniquePlaces]} />
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: 30 }}>
            <ItineraryList
              uniquePlaces={[...uniquePlaces]}
              removePlace={removePlace}
              tripDuration={tripDuration}
              assignDay={handleAsssignDay}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapItinerary;

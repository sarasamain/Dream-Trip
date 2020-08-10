import React from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';

function MapItinerary({ places, removePlace, tripDuration, handleAsssignDay, startDate, endDate }) {
  let uniquePlaces = new Set(Object.values(places));

  return (
    <div>
      <TopBar heading="Map" buttonPath="/MapItinerary" buttonName="Email Me" />
      {console.log(uniquePlaces)}
      <Grid container direction="row">
        <Grid item xs={6}>
          <div style={{ position: 'fixed' }}>
            <Map uniquePlaces={[...uniquePlaces]} />
            {console.log(uniquePlaces)}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: 15, overflow: 'scroll' }}>
            <ItineraryList
              uniquePlaces={[...uniquePlaces]}
              removePlace={removePlace}
              tripDuration={tripDuration}
              assignDay={handleAsssignDay}
              startDate = {startDate}
              endDate = {endDate}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapItinerary;

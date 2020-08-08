import React from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';

function MapItinerary({ places, removePlace, tripDuration, handleAssignDay, setPlaceEntities, placeEntities }) {
  let uniquePlaces = new Set(Object.values(places));

  return (
    <div>
      <TopBar heading="Map" buttonPath="/MapItinerary" buttonName="Email Me" />
      <Grid container direction="row">
        <Grid item xs={6}>
          <div style={{ position: 'fixed' }}>
            <Map uniquePlaces={[...uniquePlaces]} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: 15, overflow: 'scroll' }}>
            <ItineraryList
              uniquePlaces={[...uniquePlaces]}
              removePlace={removePlace}
              tripDuration={tripDuration}
              assignDay={handleAssignDay}
              setPlaceEntities={setPlaceEntities}
              placeEntities={placeEntities}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapItinerary;

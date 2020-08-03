import React from 'react';
import Map from '../components/map';
import PlaceList from '../containers/place-list';
import Grid from '@material-ui/core/Grid';

function MapItinerary({ places }) {
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={6}>
          <Map places={places} />
        </Grid>
        <PlaceList places={places} xs={3} />
      </Grid>
    </div>
  );
}

export default MapItinerary;

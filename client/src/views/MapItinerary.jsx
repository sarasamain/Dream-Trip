import React from 'react';
import Map from '../components/map';
import PlaceList from '../containers/place-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';
// import DragDrop from '../components/drag-drop';

function MapItinerary({ places, removePlace }) {
  console.log(places);
  return (
    <div>
      <TopBar heading="Map" buttonPath="/MapItinerary" />
      <Grid container direction="row">
        <Grid item xs={6}>
          <Map places={places} />
        </Grid>
        {/*    <Grid item xs={3}>
          <DragDrop place={places[Object.keys(places)[0]]} />
        </Grid> */}
        <Grid item xs={6}>
          <div style={{ padding: 30 }}>
            <PlaceList places={places} xs={3} removePlace={removePlace} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapItinerary;

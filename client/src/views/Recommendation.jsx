import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExploreCard from '../components/explore-card';
import PlaceList from '../containers/place-list';
import TopBar from '../components/top-bar';

function PlacesList({ places, addPlace, exploreplaces, removePlace }) {
  return (
    <div>
      <TopBar heading="Recommendations" buttonPath="/MapItinerary" />
      <div style={{ padding: 30 }}>
        <Grid container direction="row" spacing={10}>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" paragraph={true}>
              Your List of Places is Here!
            </Typography>
            <PlaceList
              places={places}
              removePlace={removePlace}
              addPlace={addPlace}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" paragraph={true}>
              Explore
            </Typography>
            <Grid container direction="row" wrap="wrap" spacing={10}>
              {Object.values(exploreplaces).map((exploreplace) => {
                return (
                  <Grid item xs={6} sm={3}>
                    <ExploreCard
                      key={exploreplace.place_id}
                      name={exploreplace.name}
                      address={exploreplace.formatted_address}
                      price={exploreplace.price_level}
                      rating={exploreplace.rating}
                      id={exploreplace.place_id}
                      addPlace={addPlace}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PlacesList;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExploreCard from '../components/explore-card';
import PlaceList from '../containers/place-list';

function PlacesList({ places, addPlace, exploreplaces, removePlace }) {
  return (
    <div>
      {console.log({ places })};
      <Grid container direction="row">
        <PlaceList
          places={places}
          xs={6}
          removePlace={removePlace}
          addPlace={addPlace}
        />
        <Grid item xs={6}>
          <Typography component="h5" variant="h5">
            Explore
          </Typography>
          <Grid container direction="row" wrap="wrap" spacing={2}>
            {Object.values(exploreplaces).map((exploreplace) => {
              return (
                <Grid item xs={4} sm={3}>
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
  );
}

export default PlacesList;

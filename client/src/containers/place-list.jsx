import React from 'react';
import Grid from '@material-ui/core/Grid';
import DetailCard from '../components/detail-cards';

export default function PlaceList({ places, removePlace }) {
  let uniquePlaces = new Set(Object.values(places));

  return (
    <Grid container direction="column" spacing={2}>
      {[...uniquePlaces].map((place) => {
        return (
          <Grid item>
            <DetailCard
              removePlace={removePlace}
              key={place.place_id}
              id={place.place_id}
              name={place.name}
              address={place.formatted_address}
              price={place.price_level}
              rating={place.rating}
              imgUrl={place.photos[0].photo_reference}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

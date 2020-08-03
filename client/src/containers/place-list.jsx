import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import DetailCard from '../components/detail-cards';
import useStyles from '../styles/place-list';

export default function PlaceList({ places, xs, removePlace }) {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2}>
      {Object.values(places).map((place) => {
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
      {/* <Grid item>
          <Link to="/MapItinerary" style={{ textDecoration: 'none' }}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Next
            </Button>
          </Link>
        </Grid> */}
    </Grid>
  );
}

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DetailCard from '../components/detail-cards';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/place-list';

export default function PlaceList({ places, xs }) {
  const classes = useStyles();

  return (
    <Grid item xs={xs}>
      <Grid container direction="column" spacing={2}>
        <Typography component="h5" variant="h5">
          Your List of Places is Here!
        </Typography>
        {places.map((place) => {
          return (
            <Grid item>
              <DetailCard
                key={place.place_id}
                name={place.name}
                address={place.formatted_address}
                price={place.price_level}
                rating={place.rating}
              />
            </Grid>
          );
        })}
        <Grid item>
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
        </Grid>
      </Grid>
    </Grid>
  );
}

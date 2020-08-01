import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../api/getPlaces';
import DetailCard from '../components/detail-cards';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/info-form';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import ExploreCard from '../components/explore-card';

function PlacesList({
  startDate,
  endDate,
  places,
  addPlaces,
  destination,
  categoryStates,
}) {
  const classes = useStyles();
  const [exploreplaces, setExplorePlaces] = useState([]);

  const filterCategory = categoryStates.filter(
    (categoryState) => categoryState.selected
  );

  const numberOfPlacesPerCategory = () => {
    const momentStart = moment(startDate);
    const momentEnd = moment(endDate);
    const duration = momentEnd.diff(momentStart, 'days');
    return Math.ceil(((duration + 1) * 3) / filterCategory.length);
  };

  const loadPlaces = async (destination, category) => {
    getPlaces(`${destination}/${category}`).then((allPlaces) => {
      let extraPlaces = allPlaces.slice(
        Math.min(allPlaces.length, numberOfPlacesPerCategory())
      );
      let recommendedPlaces = allPlaces.slice(
        0,
        Math.min(allPlaces.length, numberOfPlacesPerCategory())
      );
      setExplorePlaces((exploreplaces) => [...exploreplaces, ...extraPlaces]);
      addPlaces(recommendedPlaces);
    });
  };

  useEffect(() => {
    filterCategory.map((categoryObj) => {
      let category = categoryObj.text;
      return loadPlaces(destination, category);
    });
  }, filterCategory);

  return (
    <div>
      <Typography component="h5" variant="h5">
        Your List of Places is Here!
      </Typography>
      <Grid container spacing={2} direction="column">
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
      </Grid>

      <Grid
        container
        spacing={2}
        direction="row"
        wrap="wrap"
        justify="flex-end"
      >
        {exploreplaces.map((exploreplace) => {
          console.log(exploreplace);
          return (
            <Grid item>
              <ExploreCard
                key={exploreplace.place_id}
                name={exploreplace.name}
                address={exploreplace.formatted_address}
                price={exploreplace.price_level}
                rating={exploreplace.rating}
              />
            </Grid>
          );
        })}
      </Grid>

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
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categoryStates: state,
  };
}

export default connect(mapStateToProps)(PlacesList);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../api/getPlaces';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import ExploreCard from '../components/explore-card';
import PlaceList from '../containers/place-list';

function PlacesList({
  startDate,
  endDate,
  places,
  addPlaces,
  destination,
  categoryStates,
}) {
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
      {console.log(destination)}
      <Grid container direction="row">
        <PlaceList places={places} xs={6} />
        <Grid item xs={6}>
          <Typography component="h5" variant="h5">
            Explore
          </Typography>
          <Grid container direction="row" wrap="wrap" spacing={2}>
            {exploreplaces.map((exploreplace) => {
              return (
                <Grid item xs={3} sm={3}>
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
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categoryStates: state,
  };
}

export default connect(mapStateToProps)(PlacesList);

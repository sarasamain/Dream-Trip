import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../api/getPlaces';
import DetailCard from '../components/detail-cards';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/info-form';

function PlacesList({ startDate, endDate, destination, categoryStates }) {
  const classes = useStyles();

  const [places, setPlaces] = useState([]);

  const filterCategory = categoryStates.filter(
    (categoryState) => categoryState.selected
  );

  const loadPlaces = async (destination, category) => {
    getPlaces(`${destination}/${category}`).then((allPlaces) => {
      setPlaces((places) => [...places, ...allPlaces]);
    });
  };

  useEffect(() => {
    filterCategory.map((categoryObj) => {
      let category = categoryObj.text;
      loadPlaces(destination, category);
    });
  }, filterCategory);

  return (
    <div>
      {console.log(places)}
      {places.map((place) => {
        return (
          <DetailCard
            key={place.place_id}
            name={place.name}
            address={place.formatted_address}
            price={place.price_level}
            rating={place.rating}
          />
        );
      })}
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        component={Link}
        to="/MapItinerary"
        className={classes.submit}
      >
        Next
      </Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categoryStates: state,
  };
}

export default connect(mapStateToProps)(PlacesList);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../api/getPlaces';
import DetailCard from '../components/detail-cards';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/info-form';

function PlacesList({
  places,
  addPlaces,
  startDate,
  endDate,
  destination,
  categoryStates,
}) {
  const classes = useStyles();

  const filterCategory = categoryStates.filter(
    (categoryState) => categoryState.selected
  );

  const loadPlaces = async (destination, category) => {
    getPlaces(`${destination}/${category}`).then((allPlaces) => {
      addPlaces(allPlaces);
    });
  };

  useEffect(() => {
    filterCategory.map((categoryObj) => {
      let category = categoryObj.text;
      loadPlaces(destination, category);
    });
  }, places.length);

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

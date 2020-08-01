import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../api/getPlaces';
import DetailCard from '../components/detail-cards';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/info-form';
import { moment } from 'moment';

function PlacesList({ places, addPlaces, destination, categoryStates }) {
  const classes = useStyles();

  const filterCategory = categoryStates.filter(
    (categoryState) => categoryState.selected
  );

  /*   const numberOfPlacesEachCategory = function (startDate, endDate) {
    // const start = moment(startDate, 'YYYY-MM-DD');
    // const end = moment(endDate, 'YYYY-MM-DD');
    const duration = endDate.diff(startDate, 'days');
    return duration;
  }; */

  // console.log(numberOfPlacesEachCategory(startDate._d, endDate._d));
  // console.log(moment(startDate._d));

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

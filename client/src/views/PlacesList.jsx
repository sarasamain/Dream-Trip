import React from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../api/getPlaces';
import Typography from '@material-ui/core/Typography';

function PlacesList({ startDate, endDate, destination, categoryStates }) {
  {
    categoryStates
      .filter((categoryState) => categoryState.selected)
      .map(async (categoryState) => {
        let category = categoryState.text;
        let places = await getPlaces(`${destination}/${category}`);
        console.log(places);
      });
  }
}

function mapStateToProps(state) {
  return {
    categoryStates: state,
  };
}

export default connect(mapStateToProps)(PlacesList);

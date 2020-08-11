import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExploreCard from '../components/explore-card';
import PlaceList from '../containers/place-list';
import TopBar from '../components/top-bar';
import classes from '../styles/recommendation';


function EmailModal({
  places,
  addPlace,
  exploreplaces,
  removePlace,
  loadPlaces,
}) {
  useEffect(() => {
    loadPlaces();
  }, []);

  let uniquePlaces = new Set(Object.values(exploreplaces));

  return (
    <div className={classes.root}>

    </div>
  );
}

export default EmailModal;

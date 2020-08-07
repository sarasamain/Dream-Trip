import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/explore-card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function ExploreCard({
  name,
  address,
  price,
  rating,
  id,
  addPlace,
}) {
  const classes = useStyles();
  const handleAddPlace = () => {
    addPlace(id);
  };
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {address}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            $: {price} ⭐️: {rating}
          </Typography>
        </CardContent>
      </div>
      <div className={classes.button} >
        <Fab color="primary" aria-label="add" onClick={handleAddPlace} role="button" name="add">
          <AddIcon/>
        </Fab>
      </div>
    </Card>
  );
}

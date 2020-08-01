import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/explore-card';

export default function ExploreCard({ imgUrl, name, address, price, rating }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {address}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {price}
            {rating}
          </Typography>
        </CardContent>
      </div>
      {/*     <CardMedia
        className={classes.cover}
        image={`${imgUrl}`}
        title="Live from space album cover"
      /> */}
    </Card>
  );
}

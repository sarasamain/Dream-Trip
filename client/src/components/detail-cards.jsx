import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: 600,
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
});

export default function DetailCard({ imgUrl, name, address, price, rating }) {
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
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
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

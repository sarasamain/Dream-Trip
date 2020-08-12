import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/detail-cards';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/detail-cards.css';

export default function ItineraryCard({
  imgUrl,
  name,
  address,
  price,
  rating,
  removePlace,
  id,
  tripDuration,
  startDate,
  endDate,
  assignDay,
}) {

  const classes = useStyles();
  const deletePlace = () => {
    removePlace(id);
  };
  
  const duration = tripDuration(startDate, endDate);
  const days = [];

  for (let i = 1; i <= duration; i++) {
    days.push(i);
  }


  return (
    <div className="itenerary-card">
      <Card className={classes.root}>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="small" onClick={deletePlace} />
        </IconButton>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {address}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              <span role="img" aria-label="star">
                ⭐️
              </span>
              : {rating}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imgUrl}&key=${process.env.REACT_APP_API_KEY}`}
          title={name}
        />
      </Card>
    </div>
  );
}

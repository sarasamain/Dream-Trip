import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/detail-cards';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/detail-cards.css';

export default function DetailCard({
  imgUrl,
  name,
  address,
  price,
  rating,
  removePlace,
  id,
}) {
  const classes = useStyles();
  const deletePlace = () => {
    removePlace(id);
  };

  return (
    <div className="detail-card">
      <Card className={classes.root}>
        <IconButton aria-label="delete" className={classes.margin} onClick={deletePlace} role="button" name="delete">
          <DeleteIcon fontSize="small" />
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
              $: {price}
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

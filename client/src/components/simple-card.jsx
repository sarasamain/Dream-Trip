import React from 'react';
import useStyles from '../styles/simple-card';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { toggleCategory } from '../action';

function SimpleCard({ index, categoryState, toggleCategory }) {
  const classes = useStyles();
  const url = 'https://source.unsplash.com';
  const sizePath = '/1600x900';
  const paths = [
    '/bul_SMFjitw',
    '/X2W5Jml4flE',
    '/hXNGeAFOgT4',
    '/4g0XOeKt5ns',
    '/2TLREZi7BUg',
    '/N_Y88TWmGwA',
  ];
  const imgurl = `${url}${paths[categoryState.id]}${sizePath}`;

  return (
    <Card
      className={classes.root}
      onClick={() => toggleCategory(categoryState.id)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgurl}
          title={categoryState.text}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {categoryState.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function mapStateToProps(state, { index }) {
  return {
    categoryState: state[index],
  };
}

function mapDispatchToProps(dispatch) {
  return { toggleCategory: (id) => dispatch(toggleCategory(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCard);

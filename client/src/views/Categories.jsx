import React from 'react';
import SimpleCard from '../components/simple-card';
import Grid from '@material-ui/core/Grid';
import classes from '../styles/categories';

function Categories() {
  const categories = [
    'Arts',
    'Kids',
    'Nature',
    'Nightlife',
    'Shopping',
    'Food',
  ];

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        wrap="wrap"
        justify="center"
        alignItems="center"
      >
        {categories.map((category) => {
          const imgurl = `https://source.unsplash.com/1600x900/?${category}`;
          return (
            <Grid item key={categories.indexOf(category)}>
              <SimpleCard title={category} imgUrl={imgurl} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Categories;

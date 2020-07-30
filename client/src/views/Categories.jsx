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
  const url = 'https://source.unsplash.com';
  const paths = [
    '/bul_SMFjitw/1600x900',
    '/X2W5Jml4flE/1600x900',
    '/hXNGeAFOgT4/1600x900',
    '/4g0XOeKt5ns/1600x900',
    '/2TLREZi7BUg/1600x900',
    '/N_Y88TWmGwA/1600x900',
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
          const imgurl = `${url}${paths[categories.indexOf(category)]}`;
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

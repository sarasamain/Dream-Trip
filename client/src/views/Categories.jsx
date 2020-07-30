import React from 'react';
import SimpleCard from '../components/simple-card';
import Grid from '@material-ui/core/Grid';

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
    <Grid container>
      <div className="category-list" id="list">
        {categories.map((category) => {
          const imgurl = `https://source.unsplash.com/1600x900/?${category}`;
          return (
            <Grid item direction="row">
              <SimpleCard title={category} imgUrl={imgurl} />
            </Grid>
          );
        })}
      </div>
    </Grid>
  );
}

export default Categories;

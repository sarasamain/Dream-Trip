import React from 'react';
import SimpleCard from '../components/simple-card';
import Grid from '@material-ui/core/Grid';
import classes from '../styles/categories';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Categories() {
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
        <Grid item>
          <SimpleCard index={0} />
          <SimpleCard index={1} />
          <SimpleCard index={2} />
          <SimpleCard index={3} />
          <SimpleCard index={4} />
          <SimpleCard index={5} />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          component={Link}
          to="/Placeslist"
          className={classes.submit}
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}

export default Categories;

import React from 'react';
import SimpleCard from '../components/simple-card';
import Grid from '@material-ui/core/Grid';
import classes from '../styles/categories';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row" wrap="wrap" justify="center">
        <Grid item>
          <SimpleCard index={0} />
        </Grid>
        <Grid item>
          <SimpleCard index={1} />
        </Grid>
        <Grid item>
          <SimpleCard index={2} />
        </Grid>
        <Grid item>
          <SimpleCard index={3} />
        </Grid>
        <Grid item>
          <SimpleCard index={4} />
        </Grid>
        <Grid item>
          <SimpleCard index={5} />
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
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

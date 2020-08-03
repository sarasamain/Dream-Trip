import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DateInput from '../components/date-input';
import useStyles from '../styles/place-list';
import { Link } from 'react-router-dom';
import AutocompleteSearch from '../components/autocomplete-search';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © DreamTrip '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function InfoForm({
  setStartDate,
  setEndDate,
  setDestination,
  startDate,
  endDate,
}) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <div style={{ margin: '70px' }}>
            <Typography component="h1" variant="h3" paragraph={true}>
              Start planning your trip ✈️
            </Typography>
          </div>

          <Grid container justify="space-around">
            <DateInput
              label="Start Date"
              handleDateChange={setStartDate}
              dateValue={startDate}
            />
            <DateInput
              label="End Date"
              handleDateChange={setEndDate}
              dateValue={endDate}
            />
          </Grid>

          <form className={classes.form} noValidate>
            <AutocompleteSearch setDestination={setDestination} />
            <Grid container justify="flex-end">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                component={Link}
                to="/Categories"
                className={classes.submit}
              >
                Next
              </Button>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

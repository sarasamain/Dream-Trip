import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DateInput from './date-input';
import useStyles from '../styles/info-form';
import { Link } from 'react-router-dom';

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
  destination,
}) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" paragraph={true}>
            Start planning your trip!
          </Typography>

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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              name="destination"
              label="destination"
              id="destination"
            />
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2"> */}
                Clear all fields
                {/* </Link> */}
              </Grid>
            </Grid>
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

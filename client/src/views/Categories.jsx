import React from "react";
import SimpleCard from "../components/simple-card";
import Grid from "@material-ui/core/Grid";
import classes from "../styles/categories";
import TopBar from "../components/top-bar";

function Categories() {
  return (
    <div className={classes.root}>
      <TopBar
        heading="Categories"
        buttonPath="/Recommendation"
        buttonName="Next"
      />
      <div style={{ padding: 30 }}>
        <Grid
          container
          spacing={10}
          direction="row"
          wrap="wrap"
          justify="center"
        >
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
        <Grid item></Grid>
      </div>
    </div>
  );
}

export default Categories;

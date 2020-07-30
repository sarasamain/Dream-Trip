import React from 'react';
import Typography from '@material-ui/core/Typography';

function PlacesList({ startDate, endDate, destination }) {
  return (
    <div>
      {/* <Typography component="h1" variant="h5" paragraph={true}> */}
      {console.log({ startDate })}
      {console.log({ endDate })}
      {console.log({ destination })}

      {/* </Typography> */}
    </div>
  );
}

export default PlacesList;

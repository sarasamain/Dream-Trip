import React from 'react';
import Grid from '@material-ui/core/Grid';
import ItineraryCard from '../components/itinerary-card';

export default function ItineraryList({
  uniquePlaces,
  removePlace,
  tripDuration,
  assignDay,
  startDate,
  endDate,
  setPlaceEntities,
  placeEntities
}) {
  let count = 0;

  return (
    <Grid container direction="column" spacing={2}>
      {uniquePlaces
        .map((place) => {
          count++;
          return (
            <Grid item>
              <ItineraryCard
                removePlace={removePlace}
                key={place.place_id}
                id={place.place_id}
                name={`${count}. ${place.name}`}
                address={place.formatted_address}
                price={place.price_level}
                rating={place.rating}
                tripDuration={tripDuration}
                startDate = {startDate}
                endDate = {endDate}
                assignDay={assignDay}
                imgUrl={place.photos[0].photo_reference}
                assignedDay={place.day}
                setPlaceEntities={setPlaceEntities}
                placeEntities={placeEntities}
              />
            </Grid>
          );
        })
        .sort((a, b) => a.day - b.day)}
    </Grid>
  );
}

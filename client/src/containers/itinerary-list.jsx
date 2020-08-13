import React from 'react';
import Grid from '@material-ui/core/Grid';
import ItineraryCard from '../components/itinerary-card';
import { Draggable, } from "react-beautiful-dnd";

export default function ItineraryList({
  uniquePlaces,
  removePlace,
  tripDuration,
  assignDay,
  startDate,
  endDate,
  day
}) {

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "white" : "white",

    // styles we need to apply on draggables
    ...draggableStyle
  });

  return (
    <Grid container direction="column" spacing={2}>
      {uniquePlaces
        .map((place, index) => {

          return (


            <Draggable
              key={place.place_id}
              draggableId={place.place_id}
              index={index}
            >
              
                {(provided, snapshot) => (
                  <Grid item>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >

                    <ItineraryCard
                      removePlace={removePlace}
                      key={place.place_id}
                      id={place.place_id}
                      name={`${day}.${index + 1}. ${place.name}`}
                      address={place.formatted_address}
                      price={place.price_level}
                      rating={place.rating}
                      tripDuration={tripDuration}
                      startDate={startDate}
                      endDate={endDate}
                      assignDay={assignDay}
                      imgUrl={place.photos[0].photo_reference}
                      assignedDay={place.day}
                    />
                  </div>
                  </Grid>
                )}
             
            </Draggable>


          );
        })
        .sort((a, b) => a.day - b.day)}

    </Grid>
  );
}

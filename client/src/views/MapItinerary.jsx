import React, { useState, useEffect } from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function MapItinerary({ places, removePlace, tripDuration, handleAsssignDay, startDate, endDate }) {

  const uniquePlacesArr = Object.values(places);
  const initialDayState = {};
  const duration = tripDuration(startDate, endDate);
  for (let i = 1; i <= duration; i++) {
    initialDayState[i] = uniquePlacesArr.filter(place => place.day === i)
  }

  const [days, setDays] = useState(initialDayState);

  const reorder = (list, startIndex, endIndex, draggableId) => {
    const selectedElement = list.find(el => el.place_id === draggableId)
    const result = Array.from(list);
    result.splice(startIndex, 1);
    result.splice(endIndex, 0, selectedElement);
    return result;
  };

  /**
 * Moves an item from one list to another list.
 */
  const move = (source, destination, droppableSource, droppableDestination, draggableId) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const selectedElement = sourceClone.find(el => el.place_id === draggableId)
    const removed = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, selectedElement);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    let sInd = +source.droppableId;
    sInd += 1;
    let dInd = +destination.droppableId;
    dInd += 1;

    if (sInd === dInd) {
      const reorderedItems = reorder(days[sInd], source.index, destination.index, draggableId);

      setDays((previousDays) => ({ ...previousDays, [sInd]: reorderedItems }))
    } else {
      const result = move(days[sInd], days[dInd], source, destination, draggableId);

      setDays((previousDays) => ({ ...previousDays, [sInd--]: result[sInd], [dInd--]: result[dInd] }));
    }
  }
  const grid = 8;

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
  });

  
  console.log(JSON.stringify(days));

  return (
    <div>
      <TopBar heading="Map" buttonPath="/MapItinerary" buttonName="Email Me" />
      <Grid container direction="row">
        <Grid item xs={6}>
          <div style={{ position: 'fixed' }}>
            <Map days={days} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(days).map((el, ind) => (
              <div>
                <h2>Day {el}</h2>
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                      {...provided.droppableProps}
                    >
                      <ItineraryList
                        uniquePlaces={days[el]}
                        removePlace={removePlace}
                        tripDuration={tripDuration}
                        assignDay={handleAsssignDay}
                        startDate={startDate}
                        endDate={endDate}
                        day={el}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </DragDropContext>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapItinerary;

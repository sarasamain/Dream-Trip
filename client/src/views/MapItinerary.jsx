import React from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function MapItinerary({ places, setPlaces, removePlace, tripDuration, handleAsssignDay, startDate, endDate }) {
  let uniquePlaces = Object.values(places);

  const duration = tripDuration(startDate, endDate);
  const days = [];

  for (let i = 1; i <= duration; i++) {
    days.push(i);
  }

  const reorder = (list, startIndex, endIndex, draggableId) => {
    const result = Array.from(list);
    const removed = result.splice(startIndex, 1);
    result.splice(endIndex, 0, draggableId);
    console.log('reorder result', result)
    return result;
  };

  /**
 * Moves an item from one list to another list.
 */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    console.log('move result', result);
    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    console.log("source", source, "destination", destination);

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(places[sInd], source.index, destination.index, draggableId);
      console.log(items);
      const newState = [...places];
      console.log(newState[sInd]);
      newState[sInd] = items;
      console.log('newState same index', newState);
      setPlaces(newState);
    } else {
      const result = move(places[sInd], places[dInd], source, destination);
      const newState = [...places];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setPlaces(newState.filter(group => group.length));
    }
  }
  const grid = 8;

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
  });

  return (
    <div>
      <TopBar heading="Map" buttonPath="/MapItinerary" buttonName="Email Me" />
      <Grid container direction="row">
        <Grid item xs={6}>
          <div style={{ position: 'fixed' }}>
            <Map uniquePlaces={[...uniquePlaces]} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <DragDropContext onDragEnd={onDragEnd}>
            {days.map((el, ind) => (
              <div>
                <h2>Day {el}</h2>
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                      {...provided.droppableProps}
                    >

                      {/* <div style={{ padding: 15, overflow: 'scroll' }}>
                      <h2>{el}</h2> */}
                      <ItineraryList
                        uniquePlaces={[...uniquePlaces]}
                        removePlace={removePlace}
                        tripDuration={tripDuration}
                        assignDay={handleAsssignDay}
                        startDate={startDate}
                        endDate={endDate}
                      />
                      {/* </div> */}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))
            }
          </DragDropContext>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapItinerary;

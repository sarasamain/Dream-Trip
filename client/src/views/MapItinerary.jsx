import React, { useState } from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendEmail } from './../api/sendEmail';
import Animation from './../components/animation';
import modalStyle from './../styles/modal.css';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {reorder, move } from './utils/dnd';
import '../styles/mapItinerary.css';

function MapItinerary({ places, removePlace, tripDuration, handleAsssignDay, startDate, endDate }) {

  const uniquePlacesArr = Object.values(places);
  const initialDayState = {};
  const duration = tripDuration(startDate, endDate);
  for (let i = 1; i <= duration; i++) {
    initialDayState[i] = uniquePlacesArr.filter(place => place.day === i)
  }

  const [days, setDays] = useState(initialDayState);

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
      const result = move(days[sInd], days[dInd], source, destination, draggableId, dInd);
      setDays((previousDays) => ({ ...previousDays, [sInd--]: result[sInd], [dInd--]: result[dInd] }));
    }
  }
  const grid = 8;

  const getListStyle = isDraggingOver => ({
    background: "white",
    padding: grid,
    width: '60vh'
  });

  const userEmail = "test@test.com"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailRecipients, setEmailRecipients] = useState('')

  const handleEmailMe = function () {
    setIsModalOpen(true);
  }

  const handleCloseModal = function () {
    setIsModalOpen(false);
  }

  const onEmailChange = function (event) {
    event.persist();
    setEmailRecipients(event.target.value)
  }

  const handleSendEmail = function (event) {
    event.preventDefault();
    sendEmail(days, emailRecipients);
    setIsModalOpen(false);
    setEmailRecipients('');
  }

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <TopBar heading="Map" action={handleEmailMe} buttonName="Email Me" />
      <Grid container direction="row">
        <Grid item xs={6} style={{ boxSizing: 'border-box' }}>

          <Map days={days} />

        </Grid>
        <Grid item xs={6} style={{ paddingRight: '2%' }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(days).map((el, ind) => (
              <div className="day-div">
                <h2 className="day-div-title">Day {el}</h2>
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyle}
        className="send-email-modal"
      >
        <button className="close-modal" type="button" onClick={handleCloseModal}>X</button>
        <form className="send-email-form" onSubmit={handleSendEmail}>
          <TextField
            id="email"
            label="Email recepients"
            helperText="Type out each recepient's email address separated by a comma"
            variant="outlined"
            value={emailRecipients}
            onChange={onEmailChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            onClick={handleSendEmail}
          >
            Send
          </Button>
        </form>
        <Animation className="animation" />
      </Modal>
    </div>
  );
}

export default MapItinerary;

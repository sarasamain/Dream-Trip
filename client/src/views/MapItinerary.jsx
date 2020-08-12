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

// REMOVE
import moment from 'moment';
const startDate = moment().format();
const endDate = moment().format();
const mocks = require('./../utils/__test__/mocks');
const places = mocks.mocks.places;
//

function MapItinerary({ places, removePlace, tripDuration, handleAsssignDay, startDate, endDate }) {
// function MapItinerary({ removePlace, tripDuration, handleAsssignDay}) { 

  let uniquePlaces = new Set(Object.values(places));

  const userEmail = "test@test.com"
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ emailRecipients, setEmailRecipients] = useState('')

  const handleEmailMe = function () {
    setIsModalOpen(true);
    console.log(uniquePlaces);
  }

  const handleCloseModal = function () {
    setIsModalOpen(false);
  }

  const onEmailChange = function (event) {
    event.persist();
    setEmailRecipients(event.target.value)
  }

  const handleSendEmail = function (event){
    event.preventDefault();
    sendEmail(uniquePlaces, emailRecipients);
    setIsModalOpen(false);
    setEmailRecipients('');
  }

  return (
    <div>
      <TopBar heading="Map" action={handleEmailMe} buttonName="Email Me" />
      <Grid container direction="row">
        <Grid item xs={6}>
          <div style={{ position: 'fixed' }}>
            <Map uniquePlaces={[...uniquePlaces]} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ padding: 15, overflow: 'scroll' }}>
            <ItineraryList
              uniquePlaces={[...uniquePlaces]}
              removePlace={removePlace}
              tripDuration={tripDuration}
              assignDay={handleAsssignDay}
              startDate = {startDate}
              endDate = {endDate}
            />
          </div>
        </Grid>
      </Grid>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyle}
        className="send-email-modal"
      >
        <button className="close-modal" type="button" onClick={handleCloseModal}>X</button>
        <form onSubmit={handleSendEmail}>
          <TextField
            id="email"
            label="Email recepients"
            helperText="Type out each recepient's email address separated by a comma"
            variant="outlined"
            value={emailRecipients}
            onChange={onEmailChange}
          />
          <Button className="send-email" type="submit" onClick={handleSendEmail}>Send</Button>
        </form>
        <Animation />
      </Modal>
    </div>
  );
}

export default MapItinerary;

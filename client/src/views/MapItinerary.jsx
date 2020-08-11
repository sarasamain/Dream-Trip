import React, { useState } from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendEmail } from './../api/sendEmail';

// REMOVE
import moment from 'moment';
const startDate = moment().format();
const endDate = moment().format();
const mocks = require('./../utils/__test__/mocks');
const places = mocks.mocks.places;
//

// function MapItinerary({ places, removePlace, tripDuration, handleAsssignDay, startDate, endDate }) {
function MapItinerary({ removePlace, tripDuration, handleAsssignDay}) { 

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
    sendEmail(uniquePlaces, emailRecipients)
    console.log("email to be sent")
    console.log(emailRecipients);
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
      >
        <form onSubmit={handleSendEmail}>
          Emails:
          <TextField
            id="email"
            label="Email recepients"
            defaultValue="Default Value"
            variant="outlined"
            value={emailRecipients}
            onChange={onEmailChange}
          />
          <Button type="submit" onClick={handleSendEmail}>Send</Button>
        </form>
        <button type="button" onClick={handleCloseModal}>Close modal</button>
      </Modal>
    </div>
  );
}

export default MapItinerary;

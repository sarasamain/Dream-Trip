import React, { useState } from 'react';
import Map from '../components/map';
import ItineraryList from '../containers/itinerary-list';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/top-bar';
import Modal from 'react-modal';

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

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleEmailMe = function () {
    setIsModalOpen(true);
  }

  const handleCloseModal = function () {
    setIsModalOpen(false);
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
        This is a test
        <button onClick={handleCloseModal}>Close modal</button>
      </Modal>
    </div>
  );
}

export default MapItinerary;

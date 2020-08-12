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
    sendEmail(uniquePlaces, emailRecipients);
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
          {/* <Button className="send-email" type="submit" onClick={handleSendEmail}>Send</Button> */}
        </form>
        <Animation className="animation"/>
      </Modal>
    </div>
  );
}

export default MapItinerary;


// REMOVE
// {
//   1: [{"business_status":"OPERATIONAL","formatted_address":"Cromwell Rd, Knightsbridge, London SW7 2RL, United Kingdom","geometry":   {"location":{"lat":51.4966392,"lng":-0.17218},"viewport":{"northeast":{"lat":51.49763437989272,"lng":-0.1707255499999999},"southwest":{"lat":51.49493472010727,"lng":-0.17478575}}},"icon":"https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png","id":"7cdcf1cda789eaded0635013c70175127e405774","name":"Victoria and Albert Museum","opening_hours":{"open_now":false},"photos":[{"height":3474,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/110071143230276936108\">A Google User</a>"],"photo_reference":"CmRaAAAA1wgXCAPMRKzjSFnNRoFJqwCDugLIGCh5_GhuLrmXCtiy_r5cyomIHb1Trxg9FZbZbkAxyzAGlCXtF18WiQK2XOHv-3wdcuGoQ1U6ymy0jwniJoMrNqTc4ptw9tBDC0EZEhBI2YsNdBxUc2b1otwy12NrGhTygN7fWnEvllNi3jBG4Ezh1HkXFw","width":4632}],"place_id":"ChIJw1d-sUMFdkgRH2XN_U0Jt54","plus_code":{"compound_code":"FRWH+M4 London, United Kingdom","global_code":"9C3XFRWH+M4"},"rating":4.7,"reference":"ChIJw1d-sUMFdkgRH2XN_U0Jt54","types":["museum","art_gallery","tourist_attraction","point_of_interest","establishment"],"user_ratings_total":39940,"inMyList":true,"day":1}, {}],
//   2: [{}, {}]
//  }
 
// REMOVE
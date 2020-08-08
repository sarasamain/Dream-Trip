import moment from 'moment';

// RUSHABH
const tripDuration = (startDate, endDate) => {
  const momentStart = moment(startDate);
  const momentEnd = moment(endDate);
  return momentEnd.diff(momentStart, 'days') + 1;
};

// RUSHABH
const placesPerType = (startDate, endDate, filteredCategories) => {
  const duration = tripDuration(startDate, endDate);
  return Math.ceil(((duration + 1) * 4) / filteredCategories.length);
};

// // RUSHABH
// const addPlace = (id, setPlaces, setExplorePlaces) => {
//   helper(id, true);
//   setPlaces([...places, id]);
//   setExplorePlaces(exploreplaces.filter((place_id) => place_id !== id));
// };

export {
  tripDuration,
  placesPerType,
  // addPlace
}

// export default funcs;

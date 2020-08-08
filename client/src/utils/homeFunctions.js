// RUSHABH
const placesPerType = () => {
  const duration = tripDuration();
  return Math.ceil(((duration + 1) * 4) / filteredCategories.length);
};

// RUSHABH
const tripDuration = () => {
  const momentStart = moment(startDate);
  const momentEnd = moment(endDate);
  return momentEnd.diff(momentStart, 'days') + 1;
};

// RUSHABH
const addPlace = (id) => {
  helper(id, true);
  setPlaces([...places, id]);
  setExplorePlaces(exploreplaces.filter((place_id) => place_id !== id));
};
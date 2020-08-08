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
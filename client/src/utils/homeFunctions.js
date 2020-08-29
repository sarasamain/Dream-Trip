import moment from "moment";

const tripDuration = (startDate, endDate) => {
  const momentStart = moment(startDate);
  const momentEnd = moment(endDate);
  return momentEnd.diff(momentStart, "days") + 1;
};

const placesPerType = (startDate, endDate, filteredCategories) => {
  const duration = tripDuration(startDate, endDate);
  return Math.ceil(((duration + 1) * 4) / filteredCategories.length);
};

export { tripDuration, placesPerType };

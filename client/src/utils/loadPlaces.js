// RUSHABH TO TEST
const getExplorePlaces = (allPlaces, placeNum) => {
  const len = allPlaces.length;

  let extraPlaces = allPlaces.slice(Math.min(len, placeNum));
  return extraPlaces.reduce((acc, place) => {
    return {
      ...acc,
      [place.place_id]: Object.assign(
        place,
        { inMyList: false },
        { day: 0 }
      ),
    };
  }, {});
};

// RUSHABH TO TEST
const getRecommendedPlaces = (allPlaces, placeNum) => {
  const len = allPlaces.length;
  let recommendedPlaces = allPlaces.slice(0, Math.min(len, placeNum));
  return recommendedPlaces.reduce((acc, place) => {
    return {
      ...acc,
      [place.place_id]: Object.assign(
        place,
        { inMyList: true },
        { day: 0 }
      ),
    };
  }, {});
};

// AMINA TO TEST
const defineRecommendedPlaces = (placeEntities) => {
  const placeIds = Object.keys(placeEntities);
  return placeIds.filter((placeKey) => {
    return placeEntities[placeKey].inMyList === true;
  });
}

// SARA TO TEST
const defineExplorePlaces = (placeEntities) => {
  const placeIds = Object.keys(placeEntities);
  return placeIds.filter((placeKey) => {
    return placeEntities[placeKey].inMyList === false;
  });
}

module.exports = {
  getExplorePlaces,
  getRecommendedPlaces,
  defineRecommendedPlaces,
  defineExplorePlaces
}
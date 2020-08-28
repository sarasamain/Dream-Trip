const getExplorePlaces = (allPlaces, placeNum) => {
  const len = allPlaces.length;

  let extraPlaces = allPlaces.slice(Math.min(len, placeNum));
  return extraPlaces.reduce((acc, place) => {
    return {
      ...acc,
      [place.place_id]: Object.assign(place, { inMyList: false }, { day: 1 }),
    };
  }, {});
};

const getRecommendedPlaces = (allPlaces, placeNum) => {
  const len = allPlaces.length;
  let recommendedPlaces = allPlaces.slice(0, Math.min(len, placeNum));
  return recommendedPlaces.reduce((acc, place) => {
    return {
      ...acc,
      [place.place_id]: Object.assign(place, { inMyList: true }, { day: 1 }),
    };
  }, {});
};

const defineRecommendedPlaces = (placeEntities) => {
  const placeIds = Object.keys(placeEntities);
  return placeIds.filter((placeKey) => {
    return placeEntities[placeKey].inMyList === true;
  });
};

const defineExplorePlaces = (placeEntities) => {
  const placeIds = Object.keys(placeEntities);
  return placeIds.filter((placeKey) => {
    return placeEntities[placeKey].inMyList === false;
  });
};

module.exports = {
  getExplorePlaces,
  getRecommendedPlaces,
  defineRecommendedPlaces,
  defineExplorePlaces,
};

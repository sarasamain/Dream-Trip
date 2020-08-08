// SARA
const helper = (place_id, trueOrFalse) => {
  const newEntities = { ...placeEntities };
  newEntities[place_id].inMyList = trueOrFalse;
  setPlaceEntities(newEntities);
};

// SARA
const removePlace = (place_id) => {
  helper(place_id, false);
  setPlaces(places.filter((id) => place_id !== id));
  setExplorePlaces([...exploreplaces, place_id]);
};

// SARA
const handleAsssignDay = (day, id) => {
  const newEntities = { ...placeEntities };
  newEntities[id].day = day;
  setPlaceEntities(newEntities);
};
const helper = (place_id, trueOrFalse, setPlaceEntities, placeEntities ) => {
  const newEntities = { ...placeEntities };
  newEntities[place_id].inMyList = trueOrFalse;
  setPlaceEntities(newEntities);
};

const addPlace = (id, setPlaceEntities, placeEntities, setPlaces, places, setExplorePlaces, exploreplaces) => {
  helper(id, true, setPlaceEntities, placeEntities);
  setPlaces([...places, id]);
  setExplorePlaces(exploreplaces.filter((place_id) => place_id !== id));
};

const removePlace = (place_id, setPlaceEntities, placeEntities, setPlaces, places, setExplorePlaces, exploreplaces) => {
  helper(place_id, false, setPlaceEntities, placeEntities);
  setPlaces(places.filter((id) => place_id !== id));
  setExplorePlaces([...exploreplaces, place_id]);
};

const handleAssignDay = (day, id, setPlaceEntities, placeEntities) => {
  const newEntities = { ...placeEntities };
  newEntities[id].day = day;
  setPlaceEntities(newEntities);
};

module.exports = { addPlace, removePlace, handleAssignDay }
const loadPlaces = () => {
  filteredCategories.map((category) => {
    const loadPlacesPerCategory = async (destination, category) => {
      getPlaces(`${destination}/${category}`).then((allPlaces) => {
        const len = allPlaces.length;
        const placeNum = placesPerType();

        let extraPlaces = allPlaces.slice(Math.min(len, placeNum));
        const exploreEntites = extraPlaces.reduce((acc, place) => {
          return {
            ...acc,
            [place.place_id]: Object.assign(
              place,
              { inMyList: false },
              { day: 0 }
            ),
          };
        }, {});
        setPlaceEntities(Object.assign(placeEntities, exploreEntites));

        let recommendedPlaces = allPlaces.slice(0, Math.min(len, placeNum));
        const newEntites = recommendedPlaces.reduce((acc, place) => {
          return {
            ...acc,
            [place.place_id]: Object.assign(
              place,
              { inMyList: true },
              { day: 0 }
            ),
          };
        }, {});

        setPlaceEntities(Object.assign(placeEntities, newEntites));

        const placeIds = Object.keys(placeEntities);

        const newPlacesOnList = placeIds.filter((placeKey) => {
          return placeEntities[placeKey].inMyList === true;
        });

        const newExplorePlaces = placeIds.filter((placeKey) => {
          return placeEntities[placeKey].inMyList === false;
        });

        setPlaces((places) => [...places, ...newPlacesOnList]);
        setExplorePlaces((exploreplaces) => [
          ...exploreplaces,
          ...newExplorePlaces,
        ]);
      });
    };
    return loadPlacesPerCategory(destination, category);
  });
};
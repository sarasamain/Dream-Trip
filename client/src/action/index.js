export const addDestination = (text) => ({
  type: 'ADD_DESTINATION',
  text,
});

export const setStartDate = (text) => ({
  type: 'SET_STARTDATE',
  text,
});

export const setEndDate = (text) => ({
  type: 'SET_ENDDATE',
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_SELECTED_FILTER',
  filter,
});

export const toggleCategory = (category) => ({
  type: 'TOGGLE_CATEGORY',
  category,
});

export const SelectedFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SELECTED: 'SHOW_SELECTED',
};

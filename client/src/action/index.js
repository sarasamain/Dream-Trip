export const setVisibilityFilter = (filter) => ({
  type: 'SET_SELECTED_FILTER',
  filter,
});

export const toggleCategory = (category) => ({
  type: 'TOGGLE_CATEGORY',
  id: 'category',
  category,
});

export const SelectedFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SELECTED: 'SHOW_SELECTED',
};

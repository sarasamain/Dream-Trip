/* 'Arts',
    'Kids',
    'Nature',
    'Nightlife',
    'Shopping',
    'Food', */

const categories = (
  state = [
    {
      id: 0,
      text: 'Arts',
      selected: false,
    },
    {
      id: 1,
      text: 'Kids',
      selected: false,
    },
    {
      id: 2,
      text: 'Nature',
      selected: false,
    },
    {
      id: 3,
      text: 'Nightlife',
      selected: false,
    },
    {
      id: 4,
      text: 'Shopping',
      selected: false,
    },
    {
      id: 5,
      text: 'Food',
      selected: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY':
      return state.map((category, i) =>
        i === action.id
          ? { ...category, selected: !category.selected }
          : category
      );
    default:
      return state;
  }
};

export default categories;

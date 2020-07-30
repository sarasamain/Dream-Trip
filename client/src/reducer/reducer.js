export default function (
  state = {
    categories: {
      Arts: false,
      Kids: false,
      Nature: false,
      Nightlife: false,
      Shopping: false,
      Food: false,
    },
  },
  action
) {
  switch (action.type) {
    case 'TOGGLE_CATEGORY':
      return state.map((item, index) =>
        state[index] === action.id
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
}

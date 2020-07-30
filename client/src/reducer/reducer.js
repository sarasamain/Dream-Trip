import moment from 'moment';

export default function (
  state = {
    startDate: moment(),
    endDate: moment(),
    destination: '',
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
  switch ((action.type, action.value)) {
    case 'setStartDate':
      return;
    case 'setEndDate':
      return;
    case 'destination':
      return;
    case 'selectCategory':
      return;
    default:
      return state;
  }
}

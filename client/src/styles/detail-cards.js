import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 600,
  },
  details: {
    display: 'flex-start',
    flexDirection: 'column',
    width: 400,
  },
  button: {
    display: 'flex-end',
  },
  content: {
    display: 'flex-start',
  },
  cover: {
    width: 151,
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default useStyles;

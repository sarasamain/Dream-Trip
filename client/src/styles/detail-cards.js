import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 600,
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex-start',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;

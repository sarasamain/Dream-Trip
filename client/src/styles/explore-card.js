import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    maxWidth: 200,
    width: '150px',
    height: '300px',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 200,
  },
}));

export default useStyles;

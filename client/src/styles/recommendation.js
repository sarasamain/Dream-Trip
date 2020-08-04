import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((themes) => ({
  root: {
    flexGrow: 1,
    flexwrap: 'wrap',
    flexDirection: 'row',
    padding: themes.spacing(2),
  },
}));

export default useStyles;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.05)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar({ heading, buttonPath, buttonName, action }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {heading}
          </Typography>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            component={Link}
            to={buttonPath}
            className={classes.submit}
            onClick={action}
          >
            {buttonName}
          </Button>
          <Button 
          variant="contained" 
          color="default" 
          component={Link}
          to="/logout"
        >Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

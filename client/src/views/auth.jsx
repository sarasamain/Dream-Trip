import Button from '@material-ui/core/Button';
import React from 'react';
import '../styles/auth.css';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function Auth ({ isAuthenticated }) {
  return (
    <div className="auth-container background">
      {isAuthenticated ? (
        <Button 
        variant="contained" 
        color="default" 
        component={Link}
        to="/logout"
        >Logout</Button>
      ) : (
        <div className="buttons-container">
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            to="/login"
          > Login </Button>
          <br></br>
          <Button
            variant="contained" 
            color="secondary" 
            component={Link}
            to="/register"
          >Register</Button>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Don't want to create an account?"}
          </Typography>
          <Button 
            variant="contained" 
            color="default" 
            component={Link}
            to="/home"
        >Continue as Guest</Button>
        <br></br>
        <br></br>
        <br></br>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Photo by Peter Thomas on Unsplash'}
        </Typography>
      </div>
        )}
    </div>
  );
}


export default Auth;
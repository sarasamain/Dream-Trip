import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function Auth ({ isAuthenticated }) {
  console.log('Auth isAuthenticated from props', isAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        <Button 
        variant="contained" 
        color="default" 
        component={Link}
        to="/logout"
        >Logout</Button>
      ) : (
        <div>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            to="/login"
          > Login </Button>
          <Button
            variant="contained" 
            color="secondary" 
            component={Link}
            to="/register"
          >Register</Button>
          <Button 
            variant="contained" 
            color="default" 
            component={Link}
            to="/home"
        >Continue as Guest</Button>
      </div>
        )}
    </div>
  );
}


export default Auth;
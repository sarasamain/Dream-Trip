import Button from '@material-ui/core/Button';
import React from 'react';
import { Link, Route } from 'react-router-dom';

function Auth ({ isAuthenticated }) {

  return (
    <div>
      {/* {isAuthenticated ? ( */}
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
        </div>
        {/* ) : ( */}
        <Button 
          variant="contained" 
          color="default" 
          component={Link}
          to="/logout"
        >Logout</Button>
      {/* )} */}
    </div>
  );
}


export default Auth;
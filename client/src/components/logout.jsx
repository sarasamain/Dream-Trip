import React from 'react';
import auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Logout = (props) => {
  const handleClick = () => {
    removeToken();
    handleAuth();
  };

  const removeToken = () => {
    localStorage.removeItem('accessToken');
  };

  const handleAuth = () => {
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };

  return (
    <div className="auth-container background">
      <div className="buttons-container">
        <h2>Are you sure you want to log out?</h2>
        <Button 
          variant="outlined" 
          color="primary" 
          component={Link}
          to="/home"
        >No</Button>
        <br></br>
        <Button 
            variant="outlined" 
            color="secondary" 
            className="confirm-btn"
            onClick={() => handleClick()}
        >Yes</Button>
      </div>
    </div>
  );
};

export default Logout;

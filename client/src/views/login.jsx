import React from 'react';
import Button from '@material-ui/core/Button';

function Login () {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => { alert('login with Google') }}>Log in with Google</Button>
      <Button variant="contained" color="secondary" onClick={() => { alert('login with Facebook') }}>Log in with Facebook</Button>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import auth from '../utils/auth';
import apiService from './../ApiService';
import Button from '@material-ui/core/Button';


const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const Register = (props) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = state;
    const user = { email, password, firstName, lastName };
    const res = await apiService.register(user);
    console.log('handleSubmit res', res);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const accessToken = res.token;
      console.log('accessToken', accessToken);
      localStorage.setItem('accessToken', accessToken);
      props.setIsAuthenticated(true);
      // auth.login(() => props.history.push('/home'));
      auth.login(() => window.location.replace('http://localhost:3000/home'));

    }
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName
    );
  };

  return (
    <div>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name@mail.com"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="supersecretthingy"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nameson"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </Button>
      </form>
    </div>
  );
};

export default Register;

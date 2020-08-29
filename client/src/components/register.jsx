import React, { useState } from "react";
import auth from "../utils/auth";
import apiService from "./../ApiService";
import Button from "@material-ui/core/Button";
import "../styles/auth.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
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

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const accessToken = res.token;
      localStorage.setItem("accessToken", accessToken);
      props.setIsAuthenticated(true);
      auth.login(() => window.location.assign("http://localhost:3000/home"));
    }
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName
    );
  };

  return (
    <div className="auth-container background">
      <div className="buttons-container">
        <h2>Register</h2>
        <br></br>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name@mail.com"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="text"
            placeholder="Name"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="text"
            placeholder="Surname"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
          <br></br>
          <Button
            variant="contained"
            color="primary"
            className="form-submit"
            type="submit"
            disabled={validateForm()}
          >
            &nbsp;Register&nbsp;
          </Button>
        </form>
        <br></br>
        <br></br>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Do you already have an account?"}
        </Typography>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
        >
          {" "}
          Login
        </Button>
        <br></br>
      </div>
    </div>
  );
};

export default Register;

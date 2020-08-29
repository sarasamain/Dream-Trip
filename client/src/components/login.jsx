import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import auth from "../utils/auth";
import apiService from "../ApiService";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const initialState = {
  email: "",
  password: "",
};

const Login = (props) => {
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
    const { email, password } = state;
    const user = { email, password };
    const res = await apiService.login(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem("accessToken", accessToken);
      props.setIsAuthenticated(true);
      auth.login(() => window.location.assign("http://localhost:3000/home"));
    }
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <div className="auth-container background">
      <div className="buttons-container">
        <h2>Login</h2>
        <br></br>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <Button
            variant="contained"
            color="primary"
            className="form-submit"
            type="submit"
            disabled={validateForm()}
          >
            &nbsp;Login&nbsp;
          </Button>
        </form>
        <br></br>
        <br></br>
        <Typography variant="body2" color="textSecondary" align="center">
          {"You don't have an account yet?"}
        </Typography>
        <br></br>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/register"
        >
          {" "}
          Register
        </Button>
        <br></br>
      </div>
    </div>
  );
};

export default Login;

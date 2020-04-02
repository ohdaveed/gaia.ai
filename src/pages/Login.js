/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
// import Menu from "../components/Menu.js";
import axios from "axios";
import { useAuth } from "../context/auth.js";

const Login = () => {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  // function postLogin() {
  //   axios
  //     .post("https://gaiadb.herokuapp.com/api/users/login", {
  //       email,
  //       password,
  //     })
  //     .then((result) => {
  //       if (result.status === 200) {
  //         localStorage.setItem("token", JSON.stringify(result.data.token));
  //         setAuthTokens(result.data);
  //         setLoggedIn(true);
  //       } else {
  //         setIsError(true);
  //       }
  //     })
  //     .catch((e) => {
  //       setIsError(true);
  //     });
  // }

  // if (isLoggedIn) {
  //   return <Redirect to="/admin" />;
  // }

  return (
    
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div style={{ width: 300 }}>
          <h1 className="text-center">Sign In</h1>
          <Form onSubmit={onFormSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Sign In
            </Button>

            <Link to="/register">Dont have an account? </Link>
          </Form>
        </div>
      </div>

  );
};
export default Login;

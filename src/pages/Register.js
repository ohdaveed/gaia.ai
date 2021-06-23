/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

function Register({ history }) {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { setAuthData } = useContext(authContext);

  const handleRegisterRequest = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      username: username,
      password: password,
      password2: password2,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://gaiadb.herokuapp.com/api/users/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data.token);
        // console.log(typeof data.token);
        setAuthData(data.token);
        history.replace("/dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 500 }}>
        <h1 className="text-center">Sign Up</h1>

        <Form onSubmit={handleRegisterRequest}>
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
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="username"
              onChange={(e) => {
                setUserName(e.target.value);
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

          <Form.Group>
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Sign Up
          </Button>

          <Link to="/register">Dont have an account? </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;

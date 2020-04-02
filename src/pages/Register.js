import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import axios from "axios";

// import { useAuth } from "../context/auth.js";
import { Link } from "react-router-dom";

function Register() {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const { setAuthTokens } = useAuth();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(password2);
  };

  // function onSubmit() {
  //   //   axios
  //   //     .post("https://gaiadb.herokuapp.com/api/users/register", {
  //   //       username,
  //   //       email,
  //   //       password,
  //   //       password2,
  //   //     })
  //   //     .then((result) => {
  //   //       if (result.status === 200) {
  //   //         setAuthTokens(result.data);
  //   //         setLoggedIn(true);
  //   //       } else {
  //   //         setIsError(true);
  //   //       }
  //   //     })
  //   //     .catch((e) => {
  //   //       setIsError(true);
  //   //     });
  //   // }
  //   //
  //   // if (isLoggedIn) {
  //   //   return <Redirect to="/admin" />;
  // }

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 300 }}>
        <h1 className="text-center">Sign Up</h1>

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
            Sign In
          </Button>

          <Link to="/register">Dont have an account? </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;

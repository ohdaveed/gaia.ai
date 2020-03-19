import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import Menu from "../components/Menu.js";
import axios from "axios";

function Login(props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setInputs({
        email: "",
        message: ""
      });
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });

    axios({
      method: "POST",
      url: "https://gaiadb.herokuapp.com/api/users/login",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Success");
      })
      .catch(r => {
        handleServerResponse(false, "You shall not pass!");
      });
  };

  return (
    <>
      <Container>
        {/* <Menu /> */}
        <Form onSubmit={handleOnSubmit}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Enter email"
            onChange={handleOnChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
          />

          <Button variant="primary" type="submit" value="Submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default Login;

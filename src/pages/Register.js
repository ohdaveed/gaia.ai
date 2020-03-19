import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import Menu from  '../components/Menu.js'
import { useAuth } from "../context/auth.js";

function Register() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const { setAuthTokens } = useAuth();

  return (
    <>
      <Container>
        {/* <Menu /> */}
        <Form>
          <div>Username:</div>
          <input 
            type='username'
            value={username}
            onChange={e => {
              setUserName(e.target.value)
            }}
            placeholder='Username
            ' />

          <div>Email:</div>
          <input
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
          />
          <div>Password:</div>
          <input
          
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <div>Repeat Password:</div>

          <input
            type="password"
            value={password1}
            onChange={e => {
              setPassword1(e.target.value);
            }}
            placeholder="Repeat Password"
          />

          <br />
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default Register;

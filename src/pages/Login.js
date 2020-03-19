import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
// import Menu from "../components/Menu.js";
import axios from "axios";
import { useAuth } from "../context/auth.js";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios
      .post("https://gaiadb.herokuapp.com/api/users/login", {
        email,
        password
      })
      .then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/admin" />;
  }

  return (
    <>
      <Container>
        <Card>
          <Form>
            <input
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="password"
            />
            <Button onClick={postLogin}>Sign In</Button>
          </Form>
          <Link to="/register">Don't have an account? </Link>
        </Card>
      </Container>
    </>
  );
}
export default Login;

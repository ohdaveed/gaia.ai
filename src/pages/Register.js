import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

// import Menu from  '../components/Menu.js'
import { useAuth } from "../context/auth.js";
import { Redirect } from "react-router-dom";

function Register() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { setAuthTokens } = useAuth();

  function postRegister() {
    axios
      .post("https://gaiadb.herokuapp.com/api/users/register", {
        username,
        email,
        password,
        password2,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/admin" />;
  }

  return (
    <>
      <Card>
        <form>
          <div>Username:</div>
          <input
            type="username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Username
            "
          />

          <div>Email:</div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
          />
          <div>Password:</div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <div>Repeat Password:</div>

          <input
            type="password"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            placeholder="Repeat Password"
          />
          {isError}

          <Button onClick={postRegister}> Register</Button>
        </form>

        <Card.Img
          variant="bottom"
          src="https://res.cloudinary.com/darrizon/image/upload/v1579651896/background-omg/green-leaves.jpg"
          alt="leaves bg"
        />
      </Card>
    </>
  );
}

export default Register;

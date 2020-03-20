import React from "react";
import { Button, Row } from "react-bootstrap";
import { useAuth } from "../context/auth.js";

const Logout = (props) => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }
  return(
    <Row className="justify-content-md-center">
    <Button onClick={logOut}> Logout </Button>
  </Row>
  )
}

export default Logout
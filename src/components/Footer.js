import React from "react";
import { Button, Row } from "react-bootstrap";
import { useAuth } from "../context/auth.js";

const Footer = props => {
  const { authTokens, setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <>
      {authTokens ? (
        <Row className="justify-content-md-center">
          <Button onClick={logOut}> Logout </Button>
        </Row>
      ) : (
        <Row>
          <h6>  David Arrizon</h6>
        </Row>
      )}
    </>
  );
};

export default Footer;

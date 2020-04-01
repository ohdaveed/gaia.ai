import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/auth.js";

const Footer = (props) => {
  const { authTokens, setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
    localStorage.clear();
  }

  return (
    <>
      <Col>
        {authTokens ? (
          <Row className="justify-content-md-center">
            <Button onClick={logOut}> Logout </Button>
          </Row>
        ) : (
          <Row className="">
            <h6>{""}</h6>
          </Row>
        )}
      </Col>
    </>
  );
};

export default Footer;

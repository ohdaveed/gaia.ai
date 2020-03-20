import React from "react";
import { Button, Row } from "react-bootstrap";
import { useAuth } from "../context/auth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Admin(props) {
  const { authTokens, setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <>
   
      <Row className="justify-content-md-center">
        <h2>
          Welcome <FontAwesomeIcon icon="user" /> {authTokens.payload.name}
        </h2>{" "}
      </Row>
     

      <hr />
      <Row className="justify-content-md-center">
        <Button onClick={logOut}> Logout </Button>
      </Row>
    </>
  );
}

export default Admin;

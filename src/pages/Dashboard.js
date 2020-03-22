import React from "react";
import { Row } from "react-bootstrap";
import { useAuth } from "../context/auth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "../components/Footer.js";

function Admin(props) {
  const { authTokens } = useAuth();

  return (
    <>
      <Row className="justify-content-md-center">
        <h2>
          Welcome <FontAwesomeIcon icon="user" /> {authTokens.payload.name}
        </h2>{" "}
      </Row>

      <hr />
    </>
  );
}

export default Admin;

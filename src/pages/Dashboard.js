/* eslint-disable no-unused-vars */
import React from "react";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Admin(props) {
  const token = JSON.parse(localStorage.getItem('tokens'))

  return (
    <>
      <Row className="justify-content-md-center">
        <h2>
          Welcome <FontAwesomeIcon icon="user" /> B
        </h2>{" "}
      </Row>

      <hr />
    </>
  );
}

export default Admin;

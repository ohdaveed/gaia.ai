/* eslint-disable no-unused-vars */
import React from "react";
import { Row } from "react-bootstrap";


function Admin(props) {
  const token = JSON.parse(localStorage.getItem('tokens'))

  return (
    <>
      <Row className="justify-content-md-center">
        <h2>
          Welcome B
        </h2>{" "}
      </Row>

      <hr />
    </>
  );
}

export default Admin;

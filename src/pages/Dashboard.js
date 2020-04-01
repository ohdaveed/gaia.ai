/* eslint-disable no-unused-vars */
import React from "react";
import { Row } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";

function Admin(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const name = user.payload.name;

  return (
    <>
      <Row className="justify-content-md-center">
        <h2>
          Welcome <FaBeer /> {name}
        </h2>
      </Row>

      <hr />
    </>
  );
}

export default Admin;

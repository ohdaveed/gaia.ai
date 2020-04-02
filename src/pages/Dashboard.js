/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import { authContext } from "../context/AuthContext";

const Admin = () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  //
  // const name = user.payload.name;

  const { setAuthData, auth } = useContext(authContext);
  const onLogOut = () => {
    setAuthData(null);
  };

  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div style={{ width: 300 }}>
          <h2 className="text-center">{`Welcome, ${auth.data}`}</h2>
        </div>
      </div>
    </>
  );
};

export default Admin;

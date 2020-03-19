import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/auth.js";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }
  return (
    <>
      <div>Admin Page</div>
      <Button onClick={logOut}> Logout </Button>
    </>
  );
}

export default Admin;

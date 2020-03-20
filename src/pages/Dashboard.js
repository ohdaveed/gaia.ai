import React from "react";
import { Route, Switch } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useAuth } from "../context/auth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Upload from "../components/Upload.js";
import Gallery from "../components/Gallery.js";

function Admin(props) {
  const { authTokens, setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <>
      {/* <Switch>
        <Route exact to='/'> */}
      <Row className="justify-content-md-center">
        <h2>
          Welcome <FontAwesomeIcon icon="user" /> {authTokens.payload.name}
        </h2>{" "}
      </Row>
      {/* </Route>

        <Route to='/upload' component={Upload} />
          

        <Route to='/gallery' component={Gallery} />
        


      </Switch> */}

      <hr />
      <Row className="justify-content-md-center">
        <Button onClick={logOut}> Logout </Button>
      </Row>
    </>
  );
}

export default Admin;

import React from "react";
import { useRouteMatch, Link, Route, Switch } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useAuth } from "../context/auth.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Upload from "../components/Upload.js";
import Gallery from '../components/Gallery.js'

function Admin(props) {
  const { authTokens, setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  let { path, url } = useRouteMatch();

  return (
    <>
      {/* <Row className="justify-content-md-center">
        <h2>
          Welcome <FontAwesomeIcon icon="user" /> {authTokens.payload.name}
        </h2>{" "}
      </Row> */}

      <Row>
        <Col>
          <ul>
            <li>
              <Link to={`${url}/upload`}>Upload</Link>
            </li>
            <li>
              <Link to={`${url}/gallery`}>Gallery</Link>
            </li>
            <li>
              <Link to={`${url}/identify`}>Identify</Link>
            </li>
          </ul>
        </Col>
      </Row>

      <Switch>
        <Route exact path={path}>
          <Row className="justify-content-md-center">
            <h2>
              Welcome <FontAwesomeIcon icon="user" /> {authTokens.payload.name}
            </h2>{" "}
          </Row>
        </Route>

        <Route path={`${path}/upload`}>
          <Upload />
        </Route>

        <Route path={`${path}/gallery`}>
          <Gallery />
        </Route>


      </Switch>

      <hr />
      <Row className="justify-content-md-center">
        <Button onClick={logOut}> Logout </Button>
      </Row>
    </>
  );
}

export default Admin;

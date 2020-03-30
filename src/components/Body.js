import React from "react";
import Login from "../pages/Login.js";
import Home from "../pages/Home.js";
import Register from "../pages/Register.js";
import Admin from "../pages/Dashboard.js";
import Upload from "./Upload.js";
import Gallery from "./Gallery.js";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.js";
import { Jumbotron } from "react-bootstrap";

const Body = () => {
  return (
    <Jumbotron>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <PrivateRoute path="/admin" component={Admin} />

        <PrivateRoute path="/upload" component={Upload} />

        <PrivateRoute path="/gallery" component={Gallery} />
      </Switch>
    </Jumbotron>
  );
};

export default Body;
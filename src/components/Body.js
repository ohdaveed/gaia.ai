import React from "react";
import Login from "../pages/Login.js";
import Home from "../pages/Home.js";
import Register from "../pages/Register.js";
import Dashboard from "../pages/Dashboard.js";
import Gallery from "./Gallery.js";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.js";
import { Jumbotron, Container } from "react-bootstrap";
import Upload from "./Upload.js";
import SimpleMap from "./SimpleMap.js";

const Body = () => {
  return (
    <Jumbotron>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/upload" component={Upload} />

        <PrivateRoute path="/gallery" component={Gallery} />
        <PrivateRoute path="/map" component={SimpleMap} />
      </Switch>
    </Jumbotron>
  );
};

export default Body;

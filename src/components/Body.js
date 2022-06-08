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
import Landing from "./Landing.js";

const Body = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/upload" component={Upload} />

      <PrivateRoute path="/gallery" component={Gallery} />
      <PrivateRoute path="/map" component={SimpleMap} />
    </Switch>
  );
};

export default Body;

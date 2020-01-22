import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import Landing from "./Landing.js";

const Router = () => (
  <Router>
    <Switch>
      <Redirect from="/" to="/home" />
      <Route path="/home" component={Landing} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Router;

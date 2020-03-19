import React from "react";
import "./App.css";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Admin from "./pages/Dash.js";
// import Dash from "./pages/AdminBar.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;

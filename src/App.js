import React, { useState } from "react";
// import "./App.css";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Admin from "./pages/Dashboard.js";
import Upload from './components/Upload.js'
import Gallery from './components/Gallery.js'
import PrivateRoute from "./components/PrivateRoute.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavB from "./components/NavB.js";
import { AuthContext } from "./context/auth.js";
import { Container } from "react-bootstrap";

function App(props) {
  const [authTokens, setAuthTokens] = useState(null);

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Container className="justify-content-center">
          <NavB />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />

            <Route path="/register" component={Register} />

            <PrivateRoute path="/admin" component={Admin} />

            <PrivateRoute path="/upload" component={Upload} />

            <PrivateRoute path="/gallery" component={Gallery} />
          </Switch>
        </Container>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

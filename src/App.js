import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Admin from "./pages/Dash.js";
import PrivateRoute from "./components/PrivateRoute.js";
// import Dash from "./pages/AdminBar.js";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/auth.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function App(props) {
  const [authTokens, setAuthTokens] = useState(null);

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
    console.log(data.payload.name)
    return data;
  };

  library.add(fab, faUser)
  
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />

            <Route path="/register" component={Register} />

            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import  Menu  from './components/Menu.js'
import Login from './components/Login.js'
import Landing from './components/Landing.js'
import Register from './components/Register.js'

=======
// import Router from './components/Router.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
      <Router>
		   <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;

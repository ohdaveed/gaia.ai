import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import  Menu  from './components/Menu.js'
import Login from './components/Login.js'
import Landing from './components/Landing.js'
import Register from './components/Register.js'

function App() {
  return (
		<Router>
			<>
				<Menu />
        <Landing />
				<Login />
        <Register />
			</>
		</Router>
  );
}

export default App;

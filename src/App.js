import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import  Menu  from './components/Menu.js'
import Login from './components/Login.js'

function App() {
  return (
		<Router>
			<>
				<Menu />
				<Login />
			</>
		</Router>
  );
}

export default App;

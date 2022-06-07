import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext"
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Container>
					<Header />
					<Body />
				</Container>
			</Router>
		</AuthProvider>
	);
}

export default App;

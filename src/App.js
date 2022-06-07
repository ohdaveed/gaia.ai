import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Container>
			<Header />
			<Body />
		</Container>
	);
}

export default App;

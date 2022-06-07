import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function AdminBar() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					Gaia.ai{" "}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/dashboard" exact>
							Dashboard
						</Nav.Link>
						<Nav.Link as={NavLink} to="/upload">
							Upload
						</Nav.Link>
						<Nav.Link as={NavLink} to="/gallery">
							Gallery
						</Nav.Link>
						<Nav.Link as={NavLink} to="/map">
							Map
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default AdminBar;

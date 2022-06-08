import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { useAuth } from "../context/auth.js";

function NavB() {
  return (
    <Navbar className="Navbar" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Gaia.ai{" "}
        </Navbar.Brand>{" "}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="justify-content-end"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;

import React from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";

// import { NavLink } from "react-router-dom";

function Menu() {
  return (
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">GAIA.ai</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar>
  );
}

export default Menu;

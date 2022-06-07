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
      </Navbar.Brand>
   
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
  
      </Container>
    </Navbar>
  );
};

export default NavB;

import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../context/auth.js";

const NavB = props => {
  const { authTokens } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        Gaia.ai{" "}
      </Navbar.Brand>

      {authTokens ? (
        <Nav>
          <Nav.Link as={NavLink} to="/admin" exact>
            Dashboard
          </Nav.Link>
          <Nav.Link as={NavLink} to="/upload">
            Upload
          </Nav.Link>
          <Nav.Link as={NavLink} to="/gallery">
            Gallery
          </Nav.Link>
        </Nav>
      ) : (
        <Nav>
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
      )}
    </Navbar>
  );
};

export default NavB;

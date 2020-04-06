import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function AdminBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        Gaia.ai{' '}
      </Navbar.Brand>
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
        <Nav.Link as={NavLink} to="/map">
          Map
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AdminBar;

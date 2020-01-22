import React from 'react';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">GAIA.ai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav>
                        

                            <Link to="/">Home</Link> {''}
                            <Link to="/login">Login</Link>{''}
                            <Link to="/register">Register</Link>{''}
                            </Nav>
                        
                </Navbar>
            </Container>
        </>
    )
}

export default Menu

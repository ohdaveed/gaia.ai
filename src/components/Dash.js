import React from "react";

import { Nav, Container } from "react-bootstrap";

function Dash() {
  return (
    <Container>
      <Nav variant="pills" defaultActiveKey="/dash">
        <Nav.Item>
          <Nav.Link href="/dash">GAIA.ai</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Upload</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Identify</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-3">Gallery</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-4">Map</Nav.Link>
        </Nav.Item>

        
      </Nav>
    </Container>
  );
}

export default Dash

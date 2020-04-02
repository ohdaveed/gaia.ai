import React, { useState } from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container fluid="lg">
        <Header />
        <Body />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;

import React from 'react';

import { Container } from 'react-bootstrap';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    // <Router>
    <Router>
      <Container fluid className="lg">
        <Header />
        <Body />
      </Container>
    </Router>

    // </Router>
  );
}

export default App;

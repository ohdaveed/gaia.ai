import React, { useState } from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "./context/auth";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("token") || ""
  );

  const setTokens = (data) => {
    localStorage.setItem("user", JSON.stringify(data));

    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Container fluid="lg">
          <Header />
          <Body />
          <Footer />
        </Container>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

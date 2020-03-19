import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {
  <>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Sign Up</Link>
  </>;
};

export default Navbar;

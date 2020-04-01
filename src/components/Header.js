import React from "react";
import NavB from "./NavB";
import AdminBar from "./AdminBar";

const Header = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <AdminBar />;
  }
  return <NavB />;
};

export default Header;

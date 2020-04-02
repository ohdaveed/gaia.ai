import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "../context/auth.js";
import { authContext } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  const { loading } = auth;
  // const authenticated = localStorage.getItem("user");

  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return auth.data ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;

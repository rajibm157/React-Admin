import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext } from "contexts";
import { ROUTES } from "constants";

const AuthRoute = ({ children }) => {
  const { state } = useAuthContext();

  if (state.isLoggedIn) {
    return <Navigate to={ROUTES.home} replace />;
  }

  return children;
};

AuthRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthRoute;

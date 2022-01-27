import React from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "contexts";
import { ROUTES } from "constants";

const Authguard = ({ children }) => {
  const location = useLocation();
  const { state } = useAuthContext();

  if (!state.isLoggedIn) {
    return <Navigate to={ROUTES.login} state={{ from: location }} replace />;
  }

  return children;
};

Authguard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Authguard;

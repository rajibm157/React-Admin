import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Images, ROUTES } from "constants";
import { useAuthContext } from "contexts";

const Navbar = () => {
  const {
    state: { isLoggedIn },
    signOut,
  } = useAuthContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to={ROUTES.home}>
          <img
            src={Images.logo}
            alt="logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={ROUTES.home}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={ROUTES.about}>
                About
              </NavLink>
            </li>
          </ul>
          {!isLoggedIn ? (
            <>
              <Link className="btn btn-primary" to={ROUTES.login}>
                Login
              </Link>
              <Link className="btn btn-secondary ms-2" to={ROUTES.signup}>
                Signup
              </Link>
            </>
          ) : (
            <button onClick={signOut} className="btn btn-primary ms-2">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

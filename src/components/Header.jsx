import { Link } from "react-router-dom";
import { useAuthContext } from "contexts";
import { Images, images, ROUTES } from "constants";

const Header = () => {
  const {
    state: { isLoggedIn },
    signOut,
  } = useAuthContext();

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={ROUTES.home}
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              src={Images.logo}
              alt="logo"
              className="bi me-2"
              width="40"
              height="32"
            />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={ROUTES.home} className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.about} className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>
          {!isLoggedIn ? (
            <div className="text-end">
              <Link to={ROUTES.login} className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to={ROUTES.signup} className="btn btn-warning">
                Sign-up
              </Link>
            </div>
          ) : (
            <div className="dropdown text-end">
              <Link
                to="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={images["user_pic.jpg"]}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Link>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <Link to="#" className="dropdown-item">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button onClick={signOut} className="dropdown-item">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

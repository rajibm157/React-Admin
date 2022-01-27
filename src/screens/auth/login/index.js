import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "contexts";
import { ROUTES } from "constants";

export default function Login() {
  const { signIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [fromData, setFromData] = useState({ email: "", password: "" });

  const from = location.state?.from?.pathname || ROUTES.home;

  const handleChange = (e) => {
    setFromData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    signIn(fromData, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="container w-50 mt-5">
      <div className="login-container p-5">
        <h3 className="mb-3">Login :)</h3>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={fromData.email}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={fromData.password}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

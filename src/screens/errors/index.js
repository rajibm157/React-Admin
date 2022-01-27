import { Link } from "react-router-dom";
import { Images, ROUTES } from "constants";

export default function Errors() {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <main className="p-4">
        <img src={Images.error} alt="error" className="mt-10" />
        <p id="errorText">O-o-oh! Something broke.</p>
        <Link id="errorLink" to={ROUTES.home}>
          Go Back
        </Link>
      </main>
    </div>
  );
}

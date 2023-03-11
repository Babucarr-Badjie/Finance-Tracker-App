import { Link, useNavigate, useRouteError } from "react-router-dom";
import "./Error.css";
import { FaHome } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Error() {
  const error = useRouteError();
  const navigateBack = useNavigate();
  return (
    <div className="container error-container">
      <h1>Oops! There's a problem creating your account </h1>
      <p>{error.message || error.statusText}</p>

      {/* create options for the user when there's an error */}
      <div className="options">
        <button className="go-back-button" onClick={() => navigateBack(-1)}>
          <RiArrowGoBackFill width={20} /> <span>Go Back</span>
        </button>
        <Link to="/" className="link-to-home">
          {" "}
          <FaHome width={20} /> <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}

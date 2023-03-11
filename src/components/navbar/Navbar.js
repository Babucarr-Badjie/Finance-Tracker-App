import { Form, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { BsTrash3 } from "react-icons/bs";

export default function Navbar({ userName }) {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="logo" height={40} width={40} />
      </NavLink>
      {/* conditionally show userName if exist */}
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(e) => {
            if (!window.confirm("Do you want to delete this user data?")) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className="delete-button">
            <span>
              Delete User {""}
              <BsTrash3 width={10} />
            </span>
          </button>
        </Form>
      )}
    </nav>
  );
}

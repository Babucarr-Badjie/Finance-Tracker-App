import { Form, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
export default function Navbar({ userName }) {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="logo" height={40} width={40} />
      </NavLink>
      {/* conditionally show userName if exist */}
      {userName && (
        <Form method="post" action="/signout">
          <button type="submit" className="btn btn-warning">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
}

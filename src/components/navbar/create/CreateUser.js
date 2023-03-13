import { Form } from "react-router-dom";
import "./CreateUser.css";
import { BiUserCircle } from "react-icons/bi";
import chartLogo from "../../../assets/images/chartLogo.png";

export default function CreateUser() {
  return (
    <div className="create-user">
      <div>
        <h1>Manage and Control your Income</h1>
        <p>
          Personal budgeting is the secret to Financial freedom. Start managing
          your Finance now!
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="Your Name"
            required
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser"/>

          <button type="submit" className="create-button">
            <span>Create Account</span> <BiUserCircle width={20} />
          </button>
        </Form>
      </div>
      <img src={chartLogo} alt="finance chart" width={400} />
    </div>
  );
}

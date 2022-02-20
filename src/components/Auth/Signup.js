import moment from "moment";
import { NavLink } from "react-router-dom";

export default function SignUP() {
  return (
    <div className="container mx-auto">
      <div className="login-box">
        <h1>Join Us</h1>
        <form>
          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input type="text" />
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" />
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input type="password" placeholder="password" />
          <label htmlFor="Password" className="form-label">
            Repeat Password
          </label>
          <input type="password" placeholder="password" />
          <button type="submit">Sign Up</button>
        </form>
        <NavLink to="/login" className="SignUP">
          Already Have an Account?
        </NavLink>
      </div>
    </div>
  );
}

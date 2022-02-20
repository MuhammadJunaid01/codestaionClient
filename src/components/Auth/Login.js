import "../../App.css";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div className="container mx-auto">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
          />
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
        <NavLink to="/SignUP" className="SignUP">
              New User?
            </NavLink>
      </div>
    </div>
  );
}

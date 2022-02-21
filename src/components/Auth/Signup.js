import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function SignUP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const handlaeregestration = (e) => {
    if (password !== repeatPassword) {
      alert("not matched");
    } else {
      axios
        .post("http://localhost:5000/userRegestration", {
          name,
          password,
          email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    e.preventDefault();
  };
  return (
    <div className="container mx-auto">
      <div className="login-box">
        <h1>Join Us</h1>
        <form onSubmit={handlaeregestration}>
          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input
            onBlur={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <label htmlFor="Password" className="form-label">
            Repeat Password
          </label>
          <input
            onBlur={(e) => {
              setRepeatPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <button type="submit">Sign Up</button>
        </form>
        <NavLink to="/login" className="SignUP">
          Already Have an Account?
        </NavLink>
      </div>
    </div>
  );
}

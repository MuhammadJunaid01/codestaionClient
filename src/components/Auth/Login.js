import "../../App.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = props;
  const [user, setUser] = useState("");
  const handleLogin = async (e) => {
    await axios
      .post(
        process.env.NEXT_PUBLIC_API_URL,
        {
          query: `
            query getAllRooms {
              getAllRooms {
                id
                name
                price
                category
              }
            }`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.errors) {
        } else {
        }
      })
      .catch((err) => {});
    e.preventDefault();
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  console.log(user);
  console.log("email", email);
  console.log("pass", password);
  return (
    <div className="container mx-auto">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input onBlur={handleEmail} type="email" placeholder="Email" />
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePassword}
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

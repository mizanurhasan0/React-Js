import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../Helper/AuthContext";
export const Login = () => {
  const apiLink = "http://localhost:3001/auth/login";
  const { authState, setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password };

    axios.post(apiLink, data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);

        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate("/");
      }
    });
  };
  return (
    <div className="AppLogin">
      <div className="loginBox">
        <img
          src={require("./avater.png")}
          className="avater"
          alt="avater img"
        />
        <h1>Login Here</h1>

        <p>Username</p>
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter Username..."
        />
        <p>Password</p>
        <input
          type="Password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password..."
        />
        <button onClick={login}>Login</button>
        <Link className="link" to="#">
          Lost Your Password?
        </Link>

        <Link className="link" to="/reg">
          Don't have an account?
        </Link>
      </div>
    </div>
  );
};

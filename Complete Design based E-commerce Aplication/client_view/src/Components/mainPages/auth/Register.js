import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const onChangeInput = (e) => {
    try {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    } catch (error) {
      alert(error);
    }
  };
  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user", { ...user });
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={user.name}
          onChange={onChangeInput}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

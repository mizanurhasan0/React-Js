import React, { useState, useEffect } from "react";
import axios from "axios";
import "../login.css";

function Reg() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  axios.defaults.withCredentials = true;

  const onRegister = () => {
    axios
      .post("http://localhost:3002/reg", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const onLogin = () => {
    // console.log(username, password);
    axios
      .post("http://localhost:3002/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        // console.log(response.data[0].username);
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
  };
  useEffect(() => {
    axios.get("http://localhost:3002/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }

      // console.log(response.data.user[0].username);
    });
  }, []);

  return (
    <div className="LoginApp">
      <div className="registration">
        <h2 className="title">Registration Form</h2>
        <input
          type="text"
          onChange={(e) => setUsernameReg(e.target.value)}
          className="inputField"
          placeholder="Username ..."
        />
        <input
          type="text"
          onChange={(e) => setPasswordReg(e.target.value)}
          className="inputField"
          placeholder="Password ..."
        />
        <input type="submit" onClick={onRegister} value="Registration" />
      </div>
      {/* <!--Login ---!> */}
      <div className="Login">
        <h2 className="title">Login Form</h2>
        <input
          type="text"
          className="inputField"
          onChange={(e) => {
            // console.log(e.target.value);
            setUsername(e.target.value);
          }}
          placeholder="Username ..."
        />
        <input
          type="text"
          className="inputField"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password ..."
        />
        <input type="submit" onClick={onLogin} value="Login" />
        <h2>UserName: {loginStatus}</h2>
      </div>
    </div>
  );
}

export default Reg;

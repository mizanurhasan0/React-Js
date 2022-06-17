import React, { useState, useEffect } from "react";
import axios from "axios";
function Main() {
  const [role, setRole] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3002/login").then((response) => {
      if (response.data.loggedIn === true) {
        console.log(response.data);
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      <h1>{role}</h1>
    </div>
  );
}

export default Main;

import React from "react";
import "../StyleSheets/navbar.css";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navApp">
      <nav className="navheader">
        <input type="checkbox" id="checkbar" />
        <label htmlFor="checkbar">
          <i className="fa fa-bars" id="bars"></i>
          <i className="fa fa-times" id="cancel"></i>
        </label>

        <img src={require("../../Images/logo.png")} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Experience</Link>
          </li>
          <li>
            <Link to="/">Education</Link>
          </li>
          <li>
            <Link to="/">Skills</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li className="navDashboard">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
